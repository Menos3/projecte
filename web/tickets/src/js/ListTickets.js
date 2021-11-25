export class ListTickets {
    constructor(listTicket) {
        this.listTicket = listTicket;

    }
    addTicket(ticket) {
        this.listTicket.push(ticket);

    }
}