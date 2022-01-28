export class Board {
    constructor(props) {
        //que solo reciba un objecto en vez de los 5 argumentos
        // destructuracion
        const { id, titulo, descripcion, ticket } = props;
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.ticket=ticket;
        //esto lo coge del metodo del constructor: nose pasa por props.
        
        this.created = this.getDate();
        // this.created.setLocalStorage();
        // this.isDone = false;
        // this.actualizado = this.getDate();
    }
    getDate() {
        let date = new Date();
        return date.toDateString();


    }
}
export class ListBoards {
    boards;

    constructor() {
        this.getLocalStorage();

    }
    postBoard(board) {
        this.boards.push(board);
        this.setLocalStorage();
    }
    setLocalStorage() {
        localStorage.setItem('boards', JSON.stringify(this.boards));
    }
    getLocalStorage() {
        this.boards = (localStorage.getItem('boards')) ?
            JSON.parse(localStorage.getItem('boards')) : [];
        return this.boards;
    }
    getLastId() {
        let id = this.boards.length > 0 ? this.boards.at(-1).id : 0;

        return id;
    }
    updateBoard(id, value) {
        this.boards.forEach(element => {
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
    deletedBoard(id) { 
        //get
        this.getLocalStorage();
        //tengo encontrar el ticket e iterar sobre la lista "tickets"
        this.boards = this.boards.filter(element => { 
            return element.id != id;
        })
        this.setLocalStorage();
        
        //set
        //lista actulizada

    }
    getItemByID(id) { 
        this.getLocalStorage();
        return this.boards.filter(element => {
            element.id == id;

        })[0];
        
    }
    getSearchInfo(value) {
        this.getLocalStorage();
        return this.boards.filter(element => { 
            element.descripcion==value || element.titulo==value 
        })
        
     }



}