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
    tickets;
    data;
    constructor() {
        this.getInformation().then;
    }
    conection() { 
        const firebaseConfig = {
            apiKey: "AIzaSyBjfR57eGmzI-baQMUQKUC1MgolVdM6b4c",
            authDomain: "jsuite-710e7.firebaseapp.com",
            databaseURL: "https://jsuite-710e7-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "jsuite-710e7",
            storageBucket: "jsuite-710e7.appspot.com",
            messagingSenderId: "840700028054",
            appId: "1:840700028054:web:fc18c8d887325a8793ceb7"
          };
          
          // Initialize Firebase
          const app = initializeApp(firebaseConfig);

    }

    async getInformation() {
        try {
            this.data = (await fetch('https://jsuite-710e7-default-rtdb.europe-west1.firebasedatabase.app/tickets.json')).json();
            console.log(this.data);
            return this.data;
        }
        catch (e) {
            console.log(e);
            console.log("error al mostrar los tickets.");
            return null;
        }
    
    }
    async setInformation(ticket, id) {
        try {
            ticket = (await fetch('https://jsuite-710e7-default-rtdb.europe-west1.firebasedatabase.app/tickets/' + ticket + '.json',
                {
                    method: SET,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(ticket)
                })
            )
        }
        catch (error) { 
            console.log("no furrula")
        }
    }
    getLastId() {
        let id = this.data.length > 0 ? this.data.at(-1).id : 0;

        return id;
    }

}    

