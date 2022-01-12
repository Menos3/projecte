import {Grup} from "/xampp/htdocs/projecte/nodejs/commons/Grup"
import {GrupList} from "/xampp/htdocs/projecte/nodejs/commons/GrupList"

//COMPONENTES DEL FORMULARIO
let tfNombreGrupo = document.getElementById("tfNombreGrupo");
let btCrearGrupo = document.getElementById("btCrearGrupo");

//EVENTLISTENER DEL BOTON
btCrearGrupo.addEventListener("click", (event) => {crearGrupo(event)});

//FUNCION DE CREAR EL GRUPO
export function crearGrupo(event) {

    event.preventDefault();
    var nombreGrupo = tfNombreGrupo.value();
    var gruposList = new GrupList();

    var grupo = new Grup(1, nombreGrupo, 1);

    gruposList.addGroup(grupo);

}