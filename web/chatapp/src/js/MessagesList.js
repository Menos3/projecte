export class MessagesList {

    constructor() {
        this.messageList = [];
        this.cargarLocalStorage();
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

    cargarLocalStorage() {
        this.messageList = (localStorage.getItem('messages')) ? JSON.parse(localStorage.getItem('messages')) : [];
    }

    deleteMessage(message) {

        this.messageList.splice(message.id, 1);
        this.guardarLocalStorage();
    }
}