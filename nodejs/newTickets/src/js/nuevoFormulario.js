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
async function listRefresh(list) {
    //la lista vieja
    let oldList = document.getElementById('containerLista');
    document.body.removeChild(oldList);
    
    let tabla = document.createElement('table');
    tabla.setAttribute('class', 'table');
    tabla.setAttribute('id', 'tabla');


    //creacion del col de la tabla.
    let cabecera = document.createElement('thead');
    cabecera.setAttribute('class', 'th');
  
    
    let tiId = document.createElement('th');
    tiId.innerHTML = 'Nº Id';


    let tiTitulo = document.createElement('th');
    tiTitulo.innerHTML = 'Titulo';
    

    let tiDesc = document.createElement('th');
    tiDesc.innerHTML = 'Descripcion';

    let tiEquipo = document.createElement('th');
    tiEquipo.innerHTML = 'Equipo';

    let tiAsig = document.createElement('th');
    tiAsig.innerHTML = 'Asignacion';

    let tiCrea = document.createElement('th');
    tiCrea.innerHTML = 'Emitido';

    let tiFet= document.createElement('th');
    tiFet.innerHTML = 'Realizado';

    let cuerpoTabla = document.createElement('tbody');

    const newList = document.createElement('div');
    newList.setAttribute('id', 'containerLista');
    list.forEach(element => {
        //boton borrar
        let butBorrar = document.createElement('button');
        butBorrar.setAttribute('class', "btn btn-danger");
        butBorrar.setAttribute('id', 'Borrar' + element.id);
        butBorrar.innerHTML = "borrar";
        //boton veure
        let butInfo = document.createElement('button');
        butInfo.setAttribute('class', "btn btn-info");
        butInfo.setAttribute('id', 'butInfo' + element.id);
        butInfo.innerHTML = "Veure";
        //Check
        let checkMostra = document.createElement('input');
        checkMostra.setAttribute('type', 'checkbox');
        checkMostra.setAttribute('class', 'lista__check');
        checkMostra.setAttribute('id', 'check' + element.id);
        //linea
        let linea = document.createElement('tr');
        linea.setAttribute('class', 'list__line');
        linea.setAttribute('id', 'line' + element.id);
        linea.innerHTML = `<td>${element.id}</td>
        <td>${element.titulo}</td>
        <td>${element.descripcion}</td>
        <td>${element.assetId}</td>
        <td>${element.assignedId}</td>
        <td>${element.created}</td>
        `;
        //añadimos propiedades a las lineas
        newList.appendChild(tabla);
        //añadimos a la tabla
        tabla.appendChild(cabecera);
        //añadimos a la cabecera
        cabecera.appendChild(tiId);
        cabecera.appendChild(tiTitulo);
        cabecera.appendChild(tiDesc);
        cabecera.appendChild(tiEquipo);
        cabecera.appendChild(tiAsig);
        cabecera.appendChild(tiCrea);
        cabecera.appendChild(tiFet);
        tabla.appendChild(cuerpoTabla);
        cuerpoTabla.appendChild(linea);
        linea.appendChild(checkMostra);
        linea.appendChild(butInfo);
        linea.appendChild(butBorrar);
    })
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

async function onSubmit() {
    let añadir = document.getElementById('addTicketButton');
    añadir.addEventListener("click", async event => {
        event.preventDefault();
        let ticketId = ticketList.generateId();
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
        // ticketList.upDateList(ticket);
        await ticketList.createTicket(ticket);

        let data = await ticketList.getInformation();
        listRefresh(data);
    });
}
  

export async function creacionForm() {

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

    // filtersearch();
}
