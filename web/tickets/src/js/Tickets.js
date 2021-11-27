export class Tickets {
    constructor(id, titulo, descripcion, creado, actualizado) {
        this.id = id;
        this.titulo = titulo;
        this.decripcion = descripcion;
        this.creado = creado;
        this.actualizado = actualizado;


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
}