import { Tickets } from "./newTickets";
import { AssetsList } from "./assets-list-class";
import { Asset } from "./asset-class";
import { UsuarisList } from "./usuaris-list-class";
import { ListTickets } from "./newTickets";

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
    let oldList = document.getElementById('containerLista');
    document.body.removeChild(oldList);
    let tabla = document.createElement('table');
    tabla.setAttribute('class', 'table');
    tabla.setAttribute('id', 'tabla');
    containerList.appendChild(tabla);
    //creacion del col de la tabla.
    let cabecera = document.createElement('thead');
    cabecera.setAttribute('class', 'th');
    tabla.appendChild(cabecera);
    let tiId = document.createElement('th');
    tiId.innerHTML = 'Nº Id';
    cabecera.appendChild(tiId);

    let tiTitulo = document.createElement('th');
    tiTitulo.innerHTML = 'Titulo';
    cabecera.appendChild(tiTitulo);

    let tiDesc = document.createElement('th');
    tiDesc.innerHTML = 'Descripcion';
    cabecera.appendChild(tiDesc);

    let tiEquipo = document.createElement('th');
    tiEquipo.innerHTML = 'Equipo';
    cabecera.appendChild(tiEquipo);

    let tiAsig = document.createElement('th');
    tiAsig.innerHTML = 'Asignacion';
    cabecera.appendChild(tiAsig);

    let tiCrea = document.createElement('th');
    tiCrea.innerHTML = 'Emitido';
    cabecera.appendChild(tiCrea);

    let tiFet= document.createElement('th');
    tiFet.innerHTML = 'Realizado';
    cabecera.appendChild(tiFet);

    let cuerpoTabla = document.createElement('tbody');
    tabla.appendChild(cuerpoTabla);

    
}

function deleteButtonAction(id) {
    ticketList.deletedTicket(id);
    listRefresh(ticketList.getLocalStorage());   //list refresh
}
function filtersearch() { 
        let buscador = document.getElementById('filtrar');
        buscador.addEventListener('click', event => { 
        let mostrarDivBuscador = document.getElementById('buscador');
        mostrarDivBuscador.style.display = 'block';
        event.preventDefault();
        buscarInfo();
        
        // let mostrar = document.getElementById('textSearch');
        // mostrar.style.display = 'block';
        // let mostrarButtonBuscar = document.getElementById('buttonSearch');
        // mostrarButtonBuscar.style.display = 'block';

    })



}
function buscarInfo() { 
    let infoTicket = document.getElementById('buttonSearch');
    infoTicket.addEventListener('click', event => { 
        event.preventDefault();
        let textoBuscar = document.getElementById('textSearch').value;
        console.log(textoBuscar);
        ticketList.getSearchInfo(textoBuscar);

    })
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
            return element.isDone == false;
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

function closeTicket(){ 
    let cerrarTicket = document.getElementById('cerrarInfoTicket');
    cerrarTicket.addEventListener('click', event => { 
        var cabeceraOcultar = document.getElementById('infoTicket');
        cabeceraOcultar.style.display = 'none';
        
    })
}

export function creacionForm() {

        var html = `
        <div class='containerFormulario'>
            <div class='inci'> Incidències</div>
            <form action="" class="form-horizontal" >
                <div class="form-group">
                    <label for="titulo">Tittle</label>
                    <input  class="form-control" type="text" id='titulo' name="titulo">
                    <label for="descripcion">Description</label>
                    <input class="form-control" type="text" id='description' name="description">
                    <label> Tècnic</label>
                    <select class="form-control" name="assignation" id="tec">
                        ${usersOptions()}
                    </select>
                    <label>Component Incidència</label>
                    <select  class="form-control" name="assets" id="assets">
                        ${assetsOptions()}
                    </select>
                    <button class="btn btn-success" type="submit" id="addTicketButton">Crear Incidencia</button>
                    <button class="btn btn-danger" type="reset" >Cancelar Incidencia</button>
                    <button  class="btn btn-primary" type="submit" id="pendientes">Mostrar solamente tareas pendientes.</button>
                    <button class="btn btn-info" type="submit" id="mostrarIncidencias"> Mostrar lista de incidencias</button>
                    <button class="btn btn-warning" type="submit" id="filtrar">Filtrar</button>
                    <div id= "buscador" >
                        <input class="form-control"  id="textSearch" placeholder="escriu el que vols buscar"/>
                        <button  class="btn btn-primary" id='buttonSearch'> buscar</button>
                    </div>
                </div>
            </form>
        </div>
    `
    let div = document.createElement('div');
    div.innerHTML = html;
    document.body.append(div);

    let divBuscador = document.getElementById('buscador');
    divBuscador.style.display = 'none';
    //creacion del container que contiene la tabla.
    let containerList = document.createElement('div');
    containerList.setAttribute('id', 'containerLista');
    containerList.setAttribute('class', 'containerLista');
    document.body.append(containerList);
    //creacion del row tabla.
    let tabla = document.createElement('table');
    tabla.setAttribute('class', 'table');
    tabla.setAttribute('id', 'tabla');
    containerList.appendChild(tabla);

    filtersearch();
}
// export function veureTicket(id) { 
//     var cabeceraOcultar = document.getElementById('cabecera');
//     cabeceraOcultar.style.display = 'none';
//     var listaOcultar = document.getElementById('lista');
//     listaOcultar.style.display = 'none';

//     var ticket = `
//     <div id='infoTicket' class="infoTicket">
//         <div>Informació Ticket </div>
//     <div>
        
//         <button class="btn btn-danger" id="cerrarInfoTicket"> cerrar</button>
//     </div>

//     </div>
// `


//     let divTicket = document.createElement('div');
//     divTicket.innerHTML = ticket;
//     document.body.append(divTicket);

//     let ticketInfo = document.createElement('div');
//     ticketInfo.setAttribute('id', 'ticketInfo');
//     document.body.append(ticketInfo);

//     closeTicket();
// }