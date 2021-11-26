import usuario from "../../../_commons/js/clases/Usuari"
import listaUsuarios from "../../../_commons/js/clases/UsuarisList"
import mensaje from "Messages"
import listaMensajes from "MessagesList"

//COMPONENTES DEL FORMULARIO
let cbPublic = document.getElementById("cbPublic");
let tfGrupo = document.getElementById("tfGrupo");
let cbPrivado = document.getElementById("cbPrivado");
let tfUsuario = document.getElementById("tfUsuario");
let taMensaje = document.getElementById("taMensaje");
let btEnviar = document.getElementById("btEnviar");
let btCancelar = document.getElementById("btCancelar");
let divPublic = document.getElementById("containerPublic");
let divPrivate = document.getElementById("containerPrivate");

//EVENTLISTENER DE LOS CHECKBOX
cbPrivado.addEventListener("change", ocultacionDiv());
cbPublic.addEventListener("change", ocultacionDiv());

//EVENTLISTENER DE LOS BOTONES
btEnviar.addEventListener("click", enviarMensaje());
btCancelar.addEventListener("click", cerrarVentana());

//FUNCIONES
function ocultacionDiv() {

    if(cbPublic.checked) {

        divPrivate.style.display = "none";

    } else {

        divPrivate.style.display = "block";
    }

    if(cbPrivado.checked) {

        divPublic.style.display = "none";

    } else {

        divPublic.style.display = "block";
    }
}

function cerrarVentana() {

}

function enviarMensaje() {

    if(cbPublic.checked) {

        var grupo = tfGrupo.value;
    }

    if(cbPrivado.checked) {

        var destinatario = tfUsuario.value;
    }

    var cuerpoMensaje = taMensaje.value;
}