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
    ticketsFirebaseUrl = 'https://jsuite-710e7-default-rtdb.europe-west1.firebasedatabase.app/tickets.json';

    async getInformation() {
        
        try{        
            let response = await axios(this.ticketsFirebaseUrl);
            this.tickets = response.data;
            if (!this.tickets) { 
                this.tickets = [];
            }
            return this.tickets;
        }catch(e){
            console.log("Error al cargar info de la BBDD"); 
            console.log(e);
        }        

    }

    async createTicket(ticket) {
        try {
            if (!this.tickets) { 
                this.tickets = [];
            }            
            this.tickets.push(ticket);
            (await fetch(this.ticketsFirebaseUrl,
                {
                        //devuelvo lo que le mandas
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.tickets)
                })
            );  
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
}    

