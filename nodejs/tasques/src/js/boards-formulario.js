import { Tickets } from '../../../tickets/src/js/Tickets';
import{ListTickets} from '../../../tickets/src/js/Tickets';
import{Board, ListBoards} from './Board';
var boardList= new ListBoards;
var listTicket= new ListTickets;

function optionTicket(){
    const ticketOption=listTicket.getLocalStorage();
    console.log("oeoeoe",ticketOption);
    console.log(ticketOption);
    var option="";
    for(let i=0; i<ticketOption.length;i++){
        
        option += `<option value=${ticketOption[i].id}>${ticketOption[i].titulo}</option>`;

    }
    console.log(option);

    return option;
    

}

function onSubmitTasca() {
    const button = document.getElementById('botonCrearTasca');
    button.addEventListener("click", event => {
        event.preventDefault();

        let boardId = boardList.getLastId() + 1;
        // let boardName = document.getElementById('titulo').value;
        let boardDesc = document.getElementById('descripcion').value;
        let boardAssigned = document.getElementById('nomUsuario').value;
        let boardTicket = document.getElementById('incidencia').value;
        const values = {
            //ticketId: ticketId,
            id: boardId,
            // titulo: boardName,
            descripcion: boardDesc,
            assignedId: boardAssigned,
            boardTicket: boardTicket
        }
        var board = new Board(values);
        boardList.postBoard(board);
        console.log(boardList.getLocalStorage);
        console.log(board);
        // listRefresh(boardList.getLocalStorage());



    })}

export function refreshTicketX(){
    let oldTasca=document.getElementById('contenedorTotal');
    document.body.remove(oldTasca);
    createTasques();


}
function actualizaTicket(){
    let sumbit =document.getElementById('subir');
    sumbit.addEventListener('click', event =>{
        refreshTicketX(listTicket.getLocalStorage());
    })
}


// ${ opcion=optionTicket(ticketOption,long)}
// var opcion=optionTicket(ticketOption,long);
export function createTasques(){
    
    var htmlTasques=`
    <div id="contenedorTotal">

    <form action="boards.js" method="post">

        <label for="idUsiario">Nombre de Usuario</label> <br>
        <input type="text" name="idUsuario" id="nomUsuario"> <br> <br>
        <label for="descripcion">Descripcion de la Tascaa</label> <br>
        <input type="text" name="descripcion" id="descripcion"> <br> <br>
        <select name='incidencia' id="incidencia">
        ${optionTicket()}
        
        </select> 
        
        <input type="submit" id="botonCrearTasca">


    </form>
    
    </div>
    <h3>Tasques</h3>
    <div id="contenedorBotones">
        <button type='submit' id='zoom'>Veure</button>
        <button type='submit' id='subir'>Crear Tasca</button>
        <button type='reset' id='cancel'>Eliminar</button>
    </div>
`
let div2 = document.createElement('div');
div2.innerHTML=htmlTasques;
document.body.append(div2);
actualizaTicket();


onSubmitTasca();
}

