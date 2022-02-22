export class Ticket {
    constructor(props) {
        //que solo reciba un objecto en vez de los 5 argumentos
        // destructuracion
        const { titulo, descripcion, assignedId, assetId } = props;

        //esto lo coge del metodo del constructor: nose pasa por props.
        this.id = this.generateId();
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.assignedId = assignedId;
        this.assetId = assetId;
        //esto lo coge del metodo del constructor: nose pasa por props.
        this.created = this.getDate();
        this.isDone = false;
    }
    getDate() {
        let date = new Date();
        return date.toDateString();
    }
    generateId() {
        let id = Math.floor(Math.random() * 9999999999);
        return id;
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
            //axios devuelve un objeto llamado data
            //aqui la respuesta no la utilizo
            (await axios(this.ticketsFirebaseUrl,
                {
                        //devuelvo lo que le mandas
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: JSON.stringify(this.tickets)
                })
            );  
        }
        catch (error) { 
            console.log("no furrula la subida del ticket");
            console.log(error)      
        }
    }
    async deleteTicket(id) {
        //objeto devuelto data aqui si se utiliza
        try {
            await this.getInformation();
            this.tickets = this.tickets.filter(element => element.id != id);
            const rest=(await axios(this.ticketsFirebaseUrl,
                {
                        //devuelvo lo que le mandas
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: JSON.stringify(this.tickets)
                })
            );
            console.log(rest.data)
            return rest.data
        }

        catch (error) { 
            console.log("no furrula la delete del ticket");
            console.log(error)      
        }
    }
    // async viewTicket(id) { 
    //     try {
    //         await this.getInformation();
    //         this.tickets = this.tickets.filter(element => {
    //             return element.id == id
    //         })[0];
    //     }
    //     catch (e) {
    //         console.log(e)
    //         console.log("filtrado no va");
    //      }
    // }
}
    
    // async cleanArray()
 

