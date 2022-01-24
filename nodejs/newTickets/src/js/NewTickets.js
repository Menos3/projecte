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
        this.isDone = false;
        // this.actualizado = this.getDate();
    }
    getDate() {
        let date = new Date();
        return date.toDateString();


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
                element.isDone = value;
                console.log('funciona');
                //se hace cuando no va persistir nada.
                // element.isDone = !element.isDone;

            }

        });
        console.log('hasta aqui')
        this.setLocalStorage();
        console.log('esta guardado')
    }
    deletedTicket(id) { 
        //get
        this.getLocalStorage();
        //tengo encontrar el ticket e iterar sobre la lista "tickets"
        this.tickets = this.tickets.filter(element => { 
            return element.id != id;
        })
        this.setLocalStorage();
        
        //set
        //lista actulizada

    }
    getItemByID(id) { 
        this.getLocalStorage();
        return this.tickets.filter(element => {
            element.id == id;

        })[0];
        
    }
    getSearchInfo(value) {
        this.getLocalStorage();
        this.tickets = this.tickets.filter(element => {
            return element.descripcion == value || element.titulo == value;

        })[0];
       

        
     }



}