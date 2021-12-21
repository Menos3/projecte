export class Tickets {
    constructor(props) {
        //que solo reciba un objecto en vez de los 5 argumentos
        // destructuracion
        const { id, titulo, descripcion, assignedId, assetId } = props;
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.assignedId = assignedId;
        this.assetId = assetId;
        //esto lo coge del metodo del constructor: nose pasa por props.
        this.created = this.getDate();
        this.isDeleted = false;
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
        localStorage.setItem('tickets', JSON.stringify(this.tickets));
    }
    getLocalStorage() {
        this.tickets = (localStorage.getItem('tickets')) ?
            JSON.parse(localStorage.getItem('tickets')) : [];
        return this.tickets;
    }
    getLastId() {
        let id = this.tickets.length > 0 ? this.tickets.at(-1).id : 0;

        return id;
    }
    updateTicket(id, value) {
        this.tickets.forEach(element => {
            if (element.id == id) {
                element.isDeleted = value;
                console.log('funciona');
                //se hace cuando no va persistir nada.
                // element.isDeleted = !element.isDeleted;

            }

        });
        console.log('hasta aqui')
        this.setLocalStorage();
        console.log('esta guardado')

    }



}