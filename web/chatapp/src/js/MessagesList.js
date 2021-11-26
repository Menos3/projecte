export class MessagesList {

    constructor() {
        this.messageList = [];
    }

    addMessage(message) {
        this.messageList.push(message);
        this.guardarLocalStorage();
    }

    autoincrementId() {
        return this.messageList.at(-1) +1;
    }

    guardarLocalStorage() {
        localStorage.setItem('messages', JSON.stringify(this.messageList));
    }

    cargarLocalStorage() {
        this.messageList = (localStorage.getItem('messages')) ? JSON.parse(localStorage.getItem('messages')) : [];

    }
}