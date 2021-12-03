import listaUsuarios from "../../../_commons/js/clases/UsuarisList"
import mensaje from "./Messages"
import listaMensajes from "./MessagesList"
import listaGrupos from "../../../_commons/js/clases/GrupList"

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

//FUNCION DE OCULTAR LOS DIV EN FUNCION DE LOS CHECKBOX MARCADOS
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

//FUNCION DE CERRAR LA VENTANA
function cerrarVentana() {
    window.close();
}

//FUNCION DE COGER LA FECHA ACTUAL DEL SISTEMA
function fechaActual() {

    var hoy = new Date();
    var dia = today.getDate();
    var mes = today.getMonth() + 1;
    var any = today.getFullYear();

    if (dia < 10) {
        dia = '0' + dia;
    }

    if (mes < 10) {
        mes = '0' + mes;
    }

    hoy = mes + '/' + dia + '/' + any;

    return hoy;
}

//FUNCION DE GUARDAR EL MENSAJE
function enviarMensaje() {

    var pubpriv;
    var cuerpoMensaje = taMensaje.value;
    listaUsuarios = new UsuarisList();

    //SE EJECUTA CUANDO EL CHECKBOX PUBLIC ES SELECCIONADO
    if(cbPublic.checked) {

        var nombreGrupo = tfGrupo.value;
        pubpriv = cbPublic.value;

        listaGrupos = new GrupList();

        //POR CADA GRUPO EN EL ARRAY, SI EL NOMBRE DE GRUPO INTRODUCIDO COINCIDE CON UNO DEL ARRAY
        listaGrupos.forEach(grup => {

            if(listaGrupos[grup].name == nombreGrupo) {

                //AUTHOR_ID CORRESPONDIENTE AL PRIMER ELEMENTO DEL ARRAY DE USUARIOS (NO SE QUE USUARIO HACE ESTO)
                mensaje = new Messages(listaGrupos.autoIncrementId(), listaUsuarios[0].id_usuari, cuerpoMensaje, fechaActual(), pubpriv, listaGrupos[grup].id);
            }

        });
    }

    //SE EJECUTA CUANDO EL CHECKBOX PRIVADO ES SELECCIONADO
    if(cbPrivado.checked) {

        var destinatario = tfUsuario.value;
        pubpriv = cbPrivado.value;

        //POR CADA USUARIO EN EL ARRAY, SI EL USERNAME INTRODUCIDO COINCIDE CON UNO DEL ARRAY
        listaUsuarios.forEach(user => {

            if(listaUsuarios[user].username == destinatario) {
    
                //AUTHOR_ID CORRESPONDIENTE AL PRIMER ELEMENTO DEL ARRAY DE USUARIOS (NO SE QUE USUARIO HACE ESTO)
                mensaje = new Messages(listaMensajes.autoIncrementId(), listaUsuarios[0].id_usuari, cuerpoMensaje, fechaActual(), pubpriv, listaUsuarios[user].id_usuari);
            }

        });
    }

    //CREAR ARRAY DE MENSAJES E INSERTAR EL MENSAJE CREADO
    listaMensajes = new MessagesList();
    listaMensajes.addMessage(mensaje);
    
}