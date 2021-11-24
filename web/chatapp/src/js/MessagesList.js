export class MessagesList {

    constructor(messageList) {
        this.messageList = messageList;
    }

    addMessage(message) {
        this.messageList.push(message);
        this.guardarLocalStorage();
    }

    autoincrement_id() {
        return this.messageList.at(-1) +1;
    }

    guardarLocalStorage() {
        localStorage.setItem('messages', JSON.stringify(this.messageList));
    }

    cargarLocalStorage() {
        this.messageList = (localStorage.getItem('messages')) ? JSON.parse(localStorage.getItem('messages')) : [];

    }
}