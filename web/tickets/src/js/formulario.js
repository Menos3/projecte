import { Tickets } from "./Tickets";
import { AssetsList } from "./assets-list-class";
import { Asset } from "./asset-class";
import { UsuarisList } from "./usuaris-list-class";
import { ListTickets } from "./Tickets";

var asset = new Asset
var listAsset = new AssetsList();
var userList = new UsuarisList();
//manejador 
var ticketList = new ListTickets();
//funcion que reciba la lista de ticket y esta se pone
//dentro de un div y este div de destruye y contruye
//para que este actualizada
function listRefresh(list) {
    console.log(list);
    //la lista vieja
    let oldList = document.getElementById('lista');
    document.body.removeChild(oldList);
    //la lista nueva
    const newList = document.createElement('div');
    newList.setAttribute('id', 'lista');
    list.forEach(element => {
        let checkDelete = document.createElement('input');
        checkDelete.setAttribute('class', 'lista__check');
        checkDelete.setAttribute('id', element.id);
        checkDelete.setAttribute('type', 'checkbox');

        //creamos boton
        let butInfo = document.createElement('button');
        butInfo.setAttribute('class', 'lista__button');
        butInfo.setAttribute('id', element.id);
        butInfo.innerHTML = "Veure";
        //creamos el div
        let line = document.createElement('div');
        line.setAttribute('class', 'lista__line');
        line.setAttribute('id', element.id)
        line.innerHTML = `${element.id} 
        ${element.titulo}
        ${element.descripcion}
        ${element.assignedId}
        ${element.assetId}
        ${element.created}`;
        line.appendChild(checkDelete);
        line.appendChild(butInfo);
        newList.appendChild(line);
    });
    document.body.append(newList);

}

// function checked() {
//     var check = document.querySelector('input[type=checkbox]');


// }

function usersOptions() {
    const users = userList.usuaris;
    let option = "";
    for (let i of users) {
        option += `<option value =${i.id_usuari}> ${i.username} </option>`;
    }
    return option;
}

function assetsOptions() {
    var assets = listAsset.assets;
    let option = "";
    for (let i of assets) {
        option += `<option value =${i.id_asset}>${i.model}</option>`;

    }
    return option;
}

function ondelete(list) {
    console.log('hola');
    const chek = document.getElementsByClassName('lista__check');
    console.log(chek);
    list.forEach(element => {
        element.chek == true;
        console.log(element.chek)


    });
    // const butdelete = document.getElementById('deleteTicketButton');
    // button.addEventListener("click", event => {
    //     event.preventDefault();
    //     list.forEach(element => {

    //         console.log(element.ListTickets)

    //     });



    // })
}

function onSubmit() {
    const button = document.getElementById('addTicketButton');
    button.addEventListener("click", event => {
        event.preventDefault();
        //ya sabe el id que le voy a dar
        let ticketId = ticketList.getLastId() + 1;
        let ticketName = document.getElementById('titulo').value;
        let ticketDesc = document.getElementById('description').value;
        let ticketAssigned = document.getElementById('tec').value;
        let ticketAsset = document.getElementById('assets').value;
        const values = {
            //ticketId: ticketId,
            id: ticketId,
            titulo: ticketName,
            descripcion: ticketDesc,
            assignedId: ticketAssigned,
            assetId: ticketAsset
        }
        var ticket = new Tickets(values);
        ticketList.postTicket(ticket);
        console.log(ticketList.getLocalStorage);

        console.log(ticket);

        listRefresh(ticketList.getLocalStorage());


    })
}


export function creacionForm() {

    var html = `<form action="" >
            <label for="titulo">Tittle</label>
            <input type="text" id='titulo' name="titulo">
            <label for="descripcion">Description</label>
            <input type="text" id='description' name="description">
            <select name="assignation" id="tec">
                ${usersOptions()}
            </select>
            <select name="assets" id="assets">
                ${assetsOptions()}
            </select>
            <button type="submit" id="addTicketButton">Crear Incidencia</button>
            <button type="reset" >Cancelar Incidencia</button>
            <button type="submit" id="deleteTicketButton">Borrar tickets Selecionados</button>
            </form>

`
    let div = document.createElement('div');
    div.innerHTML = html;
    document.body.append(div);

    let list = document.createElement('div');
    list.setAttribute('id', 'lista');
    document.body.append(list);
    listRefresh(ticketList.getLocalStorage());
    //llamamos a la funcion del checked
    ondelete(ticketList.getLocalStorage());
    onSubmit();

}
// function infoTicket(list) {
//     console.log(list)
//     let listOld = document.querySelector('#lista');
//     listOld.addEventListener('click', event => {
//         console.log(event.target.parent.id);
//         listOld.style.display = 'none';

//     })



// }
// document.querySelector("#lista").addEventListener("click",

//     (event) => {

//         console.log(event.target.parent.id)
//     }

// )

// function ticketInformation(list) {
//     var id = document.getElementById[id].value;
//     console.log(id);
//     id.addEventListener("click", event => {
//         event.preventDefault();


//     })
// }