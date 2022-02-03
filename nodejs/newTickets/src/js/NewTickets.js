import { initializeApp } from "firebase/app";




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
    ticket;
    tickets;
    constructor() { 
        this.getInformation();
    }
   

    getInformation() {
        
        let response = axios('https://jsuite-710e7-default-rtdb.europe-west1.firebasedatabase.app/tickets.json')
            
            .then(response => response.data)
            .catch(error => { 
            console.log(error);
            console.log("error al mostrar los tickets el await.");
                
            })
            //que no exista JSON
        Promise.resolve(response).then(data => { 
            this.tickets = data;
        });
            console.log(this.tickets, "hasjdahksd");
            return this.tickets;
        
        
    }
    async createTicket(ticket) {
        // var id = this.getLastId();
        try {
            if (!this.tickets) { 
                this.tickets = [];
            }
            // let id = this.data.length > 0 ? this.data.at(-1).id : 0;
            
            this.tickets.push(ticket);
            (await fetch('https://jsuite-710e7-default-rtdb.europe-west1.firebasedatabase.app/tickets.json',
                {
                        //devuelvo lo que le mandas
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.tickets)
                })
            ).json();
            
        }
        catch (error) { 
            console.log("no furrula la subida del ticket");
            console.log(error) 
                
            
        }
    }
    generateId() {
        let id = Math.floor(Math.random() * 9999999999);
        return id;
    }
    //  getLastId() {

    //     let id = this.data.length > 0 ? this.data.at(-1).id : 0;
    //     console.log(id);
    //     return id;
    // }

}    

