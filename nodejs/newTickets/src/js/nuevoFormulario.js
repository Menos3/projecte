import { Ticket, ListTickets } from "./newTickets";
import { AssetsList } from "./assets-list-class";
import { Asset } from "./asset-class";
import { UsuarisList } from "./usuaris-list-class";

var asset = new Asset
var listAsset = new AssetsList();
var userList = new UsuarisList();
//manejador 
var ticketList = new ListTickets();

//funcion que reciba la lista de ticket y esta se pone
//dentro de un div y este div de destruye y contruye
//para que este actualizada
async function listRefresh(list) {
    //la lista vieja
    let oldList = document.getElementById('containerLista');
    document.body.removeChild(oldList);

    let listContainer = document.createElement('div');
    listContainer.setAttribute('id', 'containerLista');
    
    document.body.appendChild(listContainer);

    let tabla = document.createElement('table');
    tabla.setAttribute('class', 'table table-striped table-hover');
    tabla.setAttribute('id', 'tabla');

    listContainer.appendChild(tabla);

    //creacion del col de la tabla.
    let cabecera = document.createElement('thead');
    tabla.appendChild(cabecera);
    
    let trCabecera = document.createElement('tr');
    cabecera.appendChild(trCabecera);

    
    let tiId = document.createElement('th');
    tiId.setAttribute('scope', 'col');
    tiId.innerHTML = 'Nº Id';

    let tiTitulo = document.createElement('th');
    tiTitulo.setAttribute('scope', 'col');
    tiTitulo.innerHTML = 'Titulo';
    
    let tiDesc = document.createElement('th');
    tiDesc.setAttribute('scope', 'col');
    tiDesc.innerHTML = 'Descripcion';

    let tiEquipo = document.createElement('th');
    tiEquipo.setAttribute('scope', 'col');
    tiEquipo.innerHTML = 'Equipo';

    let tiAsig = document.createElement('th');
    tiAsig.setAttribute('scope', 'col');
    tiAsig.innerHTML = 'Asignacion';

    let tiCrea = document.createElement('th');
    tiCrea.setAttribute('scope', 'col');
    tiCrea.innerHTML = 'Emitido';

    let tiFet= document.createElement('th');
    tiFet.setAttribute('scope', 'col');
    tiFet.innerHTML = 'Realizado';

    trCabecera.appendChild(tiId);
    trCabecera.appendChild(tiTitulo);
    trCabecera.appendChild(tiDesc);
    trCabecera.appendChild(tiEquipo);
    trCabecera.appendChild(tiAsig);
    trCabecera.appendChild(tiCrea);
    trCabecera.appendChild(tiFet);

    let cuerpoTabla = document.createElement('tbody');
    tabla.appendChild(cuerpoTabla);
    console.log(list, "antes");

    list.forEach((element) => {
        console.log(list, "despues");
        let linea = document.createElement('tr');
        //boton borrar
        let butBorrar = document.createElement('button');
        butBorrar.setAttribute('class', "btn btn-danger");
        butBorrar.setAttribute('id', 'Borrar' + element.id);
        butBorrar.innerHTML = "borrar";
        butBorrar.addEventListener('click', async event => { 
            event.preventDefault();
            let list = await ticketList.deleteTicket(element.id);
            console.log(list,"borrar")
            listRefresh(list);  
        })
        //boton veure
        let butInfo = document.createElement('button');
        butInfo.setAttribute('class', "btn btn-info");
        butInfo.setAttribute('id', 'butInfo' + element.id);
        butInfo.innerHTML = "Veure";
        // butInfo.addEventListener('click', async event => { 
        //     event.preventDefault();
        //     await ticketList.viewTicket(element.id);
        // })
        //Check
        let checkMostra = document.createElement('input');
        checkMostra.setAttribute('type', 'checkbox');
        checkMostra.setAttribute('class', 'lista__check');
        checkMostra.setAttribute('id', 'check' + element.id);
        //linea
        linea.setAttribute('class', 'list__line');
        linea.setAttribute('id', 'line' + element.id);
        linea.innerHTML = 
        `
        <td>${element.id}</td>
        <td>${element.titulo}</td>
        <td>${element.descripcion}</td>
        <td>${element.assetId}</td>
        <td>${element.assignedId}</td>
        <td>${element.created}</td>
        `;

        cuerpoTabla.appendChild(linea)
        //añadimos propiedades a las lineas
        linea.appendChild(checkMostra);
        linea.appendChild(butInfo);
        linea.appendChild(butBorrar);
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

async function onSubmit() {
    let añadir = document.getElementById('addTicketButton');
    añadir.addEventListener("click", async event => {
        event.preventDefault();
        let ticketName = document.getElementById('titulo').value;
        let ticketDesc = document.getElementById('description').value;
        let ticketAssigned = document.getElementById('tec').value;
        let ticketAsset = document.getElementById('assets').value;
        const values = {
            //ticketId: ticketId,
            titulo: ticketName,
            descripcion: ticketDesc,
            assignedId: ticketAssigned,
            assetId: ticketAsset
        }
        let ticket = new Ticket(values);
        // ticketList.upDateList(ticket);
        await ticketList.createTicket(ticket);

        let data = await ticketList.getInformation();
        listRefresh(data);
    });
}
  

export async function creacionForm() {

        let html = `
        <div class='containerFormulario'>
            <p class='h1 header'> Incidencias</p>
            <form action="" class="form-horizontal" >
                <div class="form-group container form-container">
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
                </div>
                <div class="container actions-container">
                    <button class="btn btn-success" type="submit" id="addTicketButton">Crear Incidencia</button>
                    <button class="btn btn-danger" type="reset" >Cancelar Incidencia</button>
                    <button  class="btn btn-primary" type="submit" id="pendientes">Mostrar solamente tareas pendientes.</button>
                    <button class="btn btn-info" type="submit" id="mostrarIncidencias"> Mostrar lista de incidencias</button>
                    <button class="btn btn-warning" type="submit" id="filtrar">Filtrar</button>
                </div>
                <div class="container search-container" id= "buscador" >
                    <input class="form-control customize-input"  id="textSearch" placeholder="escriu el que vols buscar"/>
                    <button  class="btn btn-primary" id='buttonSearch'> Buscar</button>
                </div>
                
            </form>
        </div>
    `
    let div = document.createElement('div');
    div.innerHTML = html;
    document.body.append(div);

    // let divBuscador = document.getElementById('buscador');
    // divBuscador.style.display = 'none';
    //creacion del container que contiene la tabla.
    let containerLista = document.createElement('div');
    containerLista.setAttribute('id', 'containerLista');
    containerLista.setAttribute('class', 'containerLista');
    document.body.append(containerLista);
    //creacion del row tabla.
    let tabla = document.createElement('table');
    tabla.setAttribute('class', 'table');
    tabla.setAttribute('id', 'tabla');
    containerLista.appendChild(tabla);

    let data = await ticketList.getInformation();
    listRefresh(data);
    
    
    await onSubmit();
}
