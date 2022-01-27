import {Grup} from "/xampp/htdocs/projecte/nodejs/commons/Grup"
import {GrupList} from "/xampp/htdocs/projecte/nodejs/commons/GrupList"

//COMPONENTES DEL FORMULARIO
let tfNombreGrupo = document.getElementById("tfNombreGrupo");
let btCrearGrupo = document.getElementById("btCrearGrupo");

//EVENTLISTENER DEL BOTON
btCrearGrupo.addEventListener("click", (event) => {crearGrupo()});

//FUNCION DE CREAR EL GRUPO
export function crearGrupo() {

    var nombreGrupo = tfNombreGrupo.value;
    var gruposList = new GrupList();

    if(nombreGrupo != "") {
        
        var grupo = new Grup(gruposList.autoIncrementId(), nombreGrupo, 1);
        gruposList.addGroup(grupo);
        alert("Grupo creado correctamente");
        tfNombreGrupo.value = "";

    } else {
        alert("Error al crear el grupo");
    }
}