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
    //crearmela tabla
    //añadir a cada elemento a un th
    list.forEach(element => {
        let checkDelete = document.createElement('input');
        checkDelete.setAttribute('type', 'checkbox');
        checkDelete.setAttribute('class', 'lista__check');
        checkDelete.setAttribute('id', 'check' + element.id);
        checkDelete.checked = element.isDeleted;
        checkDelete.addEventListener('click', event => {
                ticketList.updateTicket(element.id, checkDelete.checked);
            })
            //creamos botoninfo
        let butInfo = document.createElement('button');
        butInfo.setAttribute('class', 'lista__button');
        butInfo.setAttribute('id', 'butInfo' + element.id);
        butInfo.innerHTML = "Veure";
        //creamos el div
        let line = document.createElement('div');
        line.setAttribute('class', 'lista__line');
        line.setAttribute('id', 'line' + element.id);
        line.innerHTML = `${element.id} 
        ${element.titulo}
        ${element.descripcion}
        ${element.assignedId}
        ${element.assetId}
        ${element.created}
        `;
        line.appendChild(checkDelete);
        line.appendChild(butInfo);
        newList.appendChild(line);
    });
    document.body.append(newList);
}

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

function pendingTicket() {
    let butpending = document.getElementById('pendientes');
    butpending.addEventListener('click', event => {
        event.preventDefault();
        let lista = ticketList.getLocalStorage();
        let filteredList = lista.filter(element => {
            return element.isDeleted == false;
        })
        listRefresh(filteredList);
    })
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

    var html = `<form action="" class="" >
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
            <button type="submit" id="pendientes">Borrar tickets Selecionados</button>
            </form>
`
    let div = document.createElement('div');
    div.innerHTML = html;
    document.body.append(div);

    let listContainer = document.createElement('div');
    listContainer.setAttribute('id', 'lista');
    document.body.append(listContainer);
    listRefresh(ticketList.getLocalStorage());
    //capturamos el contenido
    var lista = document.getElementById('lista').childNodes;
    //llamamos a la funcion del checked
    pendingTicket();
    onSubmit();
}