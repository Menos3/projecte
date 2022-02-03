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

    async getInformation() {
        
        try{        
            let response = await axios('https://jsuite-710e7-default-rtdb.europe-west1.firebasedatabase.app/tickets.json');
            this.tickets = response.data;
            return this.tickets;
        }catch(e){
            console.log("Error al cargar info de la BBDD"); 
            console.log(e);
        }        

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
    //  getLastId() {

    //     let id = this.data.length > 0 ? this.data.at(-1).id : 0;
    //     console.log(id);
    //     return id;
    // }

}    

