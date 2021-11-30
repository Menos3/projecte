export class Tickets {
    constructor(id, titulo, descripcion, assigenedId, assetId) {
        this.id = id;
        this.titulo = titulo;
        this.decripcion = descripcion;
        this.assigenedId = assigenedId;
        this.assigenedId = assetId;
        // this.created = this.getDate();
        // this.actualizado = this.getDate();


    }
    getDate() {
        let date = new Date();
        return date;


    }
}
export class ListTickets {
    tickets;

    constructor() {
        this.getLocalStorage();

    }
    postTicket(ticket) {
        this.tickets.push(ticket);
        this.setLocalStorage();
    }
    setLocalStorage() {
        localStorage.setItem('tickets', this.tickets);
    }
    getLocalStorage() {
        this.tickets = (localStorage.getItem('tickets')) ?
            JSON.parse(localStorage.getItem('tickets')) : [];
    }
    getLastId() {
        id = this.ticketsat(-1).id;
        return id;
    }
}