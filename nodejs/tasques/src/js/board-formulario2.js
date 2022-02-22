// import{ListTickets} from '../../../tickets/src/js/Tickets';
import{Board, ListBoards} from './Boards2';
var boardList= new ListBoards;
// var listTicket= new ListTickets;

async function optionTicket(){
    // const ticketOption=listTicket.getLocalStorage();

    try {
        // id="prueba";
        const res = await fetch ("https://jsuite-710e7-default-rtdb.europe-west1.firebasedatabase.app/tiquets/"+".json",{
            // Podrias ser POST tambien
            method: "GET",
            headers: {
                "content-Type": "aplication/json"
            },
            body: JSON.stringify()
        });
        const db = await res.json();
        // longi++;
        console.log(db);
        var option="";
        for(let i=0; i<res.length;i++){
        
        option += `<option value=${res[i].id}>${res[i].titulo}</option>`;

    }
    console.log(option);
    return option;

    } catch (error) {
        console.log(error);
    }
    // console.log("veamos",ticketOption);
    // console.log(ticketOption);
    

    
    

}




function onSubmitTasca() {
   const button=document.getElementById("subir");
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
            // boardTicket: boardTicket
        }
        var board = new Board(values);
        boardList.postBoard(board);
       var todosBoards= boardList.getFirebase().then(  document.newDivBoard.append(todosBoards),
       document.body.append(newDivBoard)  );
        // document.newDivBoard.append(todosBoards);
        // listRefresh(boardList.getLocalStorage());

        
        // document.body.append(newDivBoard);



    })}

    export function createTasques(){
    
        var htmlTasques=`
        <div id="contenedorTotal">
    
        <form  >
    
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
    
        <div id="contenedorBoards">
       
        </div>
    `
    let div2 = document.createElement('div');
    div2.innerHTML=htmlTasques;
    document.body.append(div2);
    // actualizaTicket();
    
    
    onSubmitTasca();
    }
    
    