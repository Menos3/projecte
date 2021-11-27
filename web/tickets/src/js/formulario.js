import { Tickets } from "./Tickets";
import { AssetsList } from "./assets-list-class";
import { Asset } from "./asset-class";
import { UsuarisList } from "./usuaris-list-class";

var ticket = new Tickets;
var asset = new Asset
var listAsset = new AssetsList();
var userList = new UsuarisList();

function usersOptions() {
    const users = userList.usuaris;
    let option = "";
    for (let i of users) {
        option += `<option value =${i.id_usuari}>${i.username}</option>`;
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

function onSubmit() {

    const button = document.getElementById('addTicketButton');
    button.addEventListener("click", event => {
        event.preventDefault();
        let ticketName = document.getElementById('titulo').value;
        let ticketDesc = document.getElementById('description').value;
        let ticketUser = document.getElementById('tec').value;
        let ticketAsset = document.getElementById('assets').value;

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
</form>`
    let div = document.createElement('div');
    div.innerHTML = html;
    document.body.append(div);

    onSubmit();


}
//

//poner toda la informacion en el ticket.