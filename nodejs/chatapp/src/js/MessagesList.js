export class MessagesList {

    constructor() {
        this.messageList = [];
        //this.cargarLocalStorage();
        this.messageList = this.cargarMensajesBBDD();
    }

    addMessage(message) {
        this.messageList.push(message);
        this.guardarLocalStorage();
    }

    autoIncrementId() {
        let id = this.messageList.length > 0 ? this.messageList.at(-1).id : 0;
		return id;
    }

    guardarLocalStorage() {
        localStorage.setItem('messages', JSON.stringify(this.messageList));
    }

    //cargarLocalStorage() {
        //this.messageList = (localStorage.getItem('messages')) ? JSON.parse(localStorage.getItem('messages')) : [];
    //}

    deleteMessage(idMessage) {

        this.cargarLocalStorage();
        this.messageList = this.messageList.filter(element => {
            return element.id != idMessage;
        });

        this.guardarLocalStorage();
    }

    filteredList(keyWord) {

        //this.cargarLocalStorage();
        this.cargarMensajesBBDD();
        
        this.messageList = this.messageList.filter((element) => {

            if(element.message.match(new RegExp(keyWord, "i")))
            return true;
        });

        return this.messageList;   
    }

    async cargarMensajesBBDD() {

        let messageList = [];

        try {

            messageList = await fetch('https://jsuite-710e7-default-rtdb.europe-west1.firebasedatabase.app/messages.json');
            messageList = await messageList.json();

            return messageList;

        } catch {

            alert("Problemas a la hora de cargar los mensajes de la BBDD");
            return null;

        }
    }
}