import {Grup} from "/xampp/htdocs/projecte/web/_commons/js/clases/Grup"
import {GrupList} from "/xampp/htdocs/projecte/web/_commons/js/clases/GrupList"

//COMPONENTES DEL FORMULARIO
let tfNom = document.getElementById("tfNom");
let btCrear = document.getElementById("btCrear");

//EVENTLISTENER DEL BOTON
btCrear.addEventListener("click", (event) => {crearGrupo(event)});

//FUNCION DE CREAR EL GRUPO
function crearGrupo(event) {

    event.preventDefault();
    var nombreGrupo = tfNom.value();
    var gruposList = new GrupList();

    var grupo = new Grup(1, nombreGrupo, 1);

    gruposList.addGroup(grupo);

}