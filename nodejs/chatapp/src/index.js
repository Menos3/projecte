import "jquery"
import {UsuarisList} from "/xampp/htdocs/projecte/nodejs/commons/UsuarisList"
import {Messages} from "/xampp/htdocs/projecte/nodejs/chatapp/src/js/Messages"
import {MessagesList} from "/xampp/htdocs/projecte/nodejs/chatapp/src/js/MessagesList"
import {GrupList} from "/xampp/htdocs/projecte/nodejs/commons/GrupList"
import {crearGrupo} from "/xampp/htdocs/projecte/nodejs/chatapp/src/js/grupos"
import {crearHTMLMostrarMensajes} from "/xampp/htdocs/projecte/nodejs/chatapp/src/js/mostrarMensajes"
import {crearHTMLFiltrarMensajes} from "/xampp/htdocs/projecte/nodejs/chatapp/src/js/filtrarMensajes"

//COMPONENTES DE TODOS LOS FORMULARIOS
//let btFormCrearMensaje = document.getElementById("btFormCrearMensaje");
//let btFormCrearGrupo = document.getElementById("btFormCrearGrupo");
//let btFormMostrarMensajes = document.getElementById("btFormMostrarMensajes");
//let btFormFiltrarMensajes = document.getElementById("btFormFiltrarMensajes");
// let divCrearMensajes = document.getElementById("crearMensajes");
// let divCrearGrupos = document.getElementById("crearGrupos");
// let divMostrarMensajes = document.getElementById("mostrarMensajes");
// let divFiltrarMensajes = document.getElementById("filtrarMensajes");
let cbPublic = document.getElementById("cbPublic");
//let tfGrupo = document.getElementById("tfGrupo");
let cbPrivado = document.getElementById("cbPrivado");
let tfUsuario = document.getElementById("tfUsuario");
//let taMensaje = document.getElementById("taMensaje");
let btEnviar = document.getElementById("btEnviar");
let divPublic = document.getElementById("containerPublic");
//let divPrivate = document.getElementById("containerPrivate");

//EVENTLISTENER DE LOS BOTONES DEL MENU
$('#btFormCrearMensaje').on("click", (event)=>{mostrarFormCrearMensaje()});
//btFormCrearMensaje.addEventListener("click", (event) => {mostrarFormCrearMensaje()});
$('#btFormCrearGrupo').on("click", (event)=>{mostrarFormCrearGrupo()});
//btFormCrearGrupo.addEventListener("click", (event) => {mostrarFormCrearGrupo()});
$('#btFormMostrarMensajes').on("click", (event)=>{mostrarFormMostrarMensajes()});
//btFormMostrarMensajes.addEventListener("click", (event) => {mostrarFormMostrarMensajes()});
$('#btFormFiltrarMensajes').on("click", (event)=>{mostrarFormFiltrarMensajes()});
//btFormFiltrarMensajes.addEventListener("click", (event) => {mostrarFormFiltrarMensajes()});

//FUNCION QUE CONTROLA EL FORMULARIO DE CREAR MENSAJES
function mostrarFormCrearMensaje() {

    $("#crearGrupos").hide();
    $("#mostrarMensajes").hide();
    $("#filtrarMensajes").hide();
    $("#crearMensajes").show();
    // divCrearGrupos.style.display = "none";
    // divMostrarMensajes.style.display = "none";
    // divFiltrarMensajes.style.display = "none";
    // divCrearMensajes.style.display = "block";

    //EVENTLISTENER DE LOS CHECKBOX
    cbPrivado.addEventListener("change", () => {ocultacionDiv()});
    cbPublic.addEventListener("change", () => {ocultacionDiv()});

    //EVENTLISTENER DEL BOTON QUE ENVIA LOS MENSAJES
    btEnviar.addEventListener("click", (event) => {enviarMensaje(event)});

    //FUNCION DE OCULTAR LOS DIV EN FUNCION DE LOS CHECKBOX MARCADOS
    function ocultacionDiv() {

        if(cbPublic.checked) {

            $("#containerPrivate").hide();
            //divPrivate.style.display = "none";

        } else {

            $("#containerPrivate").show();
            //divPrivate.style.display = "block";
        }

        if(cbPrivado.checked) {

            $("#containerPublic").hide();
            //divPublic.style.display = "none";

        } else {

            $("#containerPublic").show();
            //divPublic.style.display = "block";
        }
    }

    //FUNCION DE COGER LA FECHA ACTUAL DEL SISTEMA
    function fechaActual() {

        var hoy = new Date();
        var dia = hoy.getDate();
        var mes = hoy.getMonth() + 1;
        var any = hoy.getFullYear();

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
    function enviarMensaje(event) {

        event.preventDefault();
        var pubpriv;
        //var cuerpoMensaje = taMensaje.value;
        var cuerpoMensaje = $("#taMensaje").val();
        let listaUsuarios = new UsuarisList();

        //SE EJECUTA CUANDO EL CHECKBOX PUBLIC ES SELECCIONADO
        if(cbPublic.checked) {

            var nombreGrupo = $("#tfGrupo").val();
            //var nombreGrupo = tfGrupo.value;
            pubpriv = $('#cbPublic').val();
            //pubpriv = cbPublic.value;

            let listaGrupos = new GrupList();

            //POR CADA GRUPO EN EL ARRAY, SI EL NOMBRE DE GRUPO INTRODUCIDO COINCIDE CON UNO DEL ARRAY
            for(let grupos of listaGrupos.grupsList) {

                if(grupos.name === nombreGrupo) {

                    //AUTHOR_ID CORRESPONDIENTE AL PRIMER ELEMENTO DEL ARRAY DE USUARIOS (NO SE QUE USUARIO HACE ESTO)
                    var mensaje = new Messages(listaGrupos.autoIncrementId() + 1, listaUsuarios.usuaris[0].id_usuari, cuerpoMensaje, fechaActual(), pubpriv, grupos.id);

                    //CARGAR ARRAY DE MENSAJES E INSERTAR EL MENSAJE CREADO
                    let listaMensajes = new MessagesList();
                    listaMensajes.setMessage(mensaje, listaUsuarios.usuaris[0].id_usuari + 1);

                    alert("Missatge enviat!!");
                
                } else {

                    alert("El grupo introducido no es correcto");
                }

            }
        }

        //SE EJECUTA CUANDO EL CHECKBOX PRIVADO ES SELECCIONADO
        if(cbPrivado.checked) {

            //COGEMOS EL VALOR DEL TEXTFIELD, EL VALOR DEL CHECKBOX, LLAMAMOS A LA LISTA DE USUARIOS Y CREAMOS LA ID DEL USUARIO QUE MANDA EL MENSAJE
            let destinatario = tfUsuario.value;
            pubpriv = cbPrivado.value;

            //POR CADA USUARIO EN EL ARRAY, SI EL USERNAME INTRODUCIDO COINCIDE CON UNO DEL ARRAY
            for(let usuarios of listaUsuarios.usuaris) {

                if(usuarios.username === destinatario) {

                    //CARGAR ARRAY DE MENSAJES
                    let listaMensajes = new MessagesList();

                    //AUTHOR_ID CORRESPONDIENTE AL PRIMER ELEMENTO DEL ARRAY DE USUARIOS
                    let mensaje = new Messages(listaMensajes.autoIncrementId() + 1, listaUsuarios.usuaris[0].id_usuari, cuerpoMensaje, fechaActual(), pubpriv, usuarios.id_usuari);

                    //INSERTAR EL MENSAJE CREADO
                    listaMensajes.setMessage(mensaje, listaUsuarios.usuaris[0].id_usuari);

                    alert("Missatge enviat!!");

                } else {

                    alert("El usuario introducido no existe");
                }
            }
        }
    }
}

//FUNCION QUE CONTROLA EL FORMULARIO DE CREAR GRUPOS
function mostrarFormCrearGrupo() {

    $("#crearMensajes").hide();
    $("#mostrarMensajes").hide();
    $("#filtrarMensajes").hide();
    $("#crearGrupos").show();

    // divCrearMensajes.style.display = "none";
    // divMostrarMensajes.style.display = "none";
    // divFiltrarMensajes.style.display = "none";
    // divCrearGrupos.style.display = "block";
    crearGrupo();
}

//FUNCION QUE CONTROLA EL FORMULARIO DE MOSTRAR MENSAJES
function mostrarFormMostrarMensajes() {

    $("#crearMensajes").hide();
    $("#crearGrupos").hide();
    $("#filtrarMensajes").hide();
    $("#mostrarMensajes").show();

    // divCrearMensajes.style.display = "none";
    // divCrearGrupos.style.display = "none";
    // divFiltrarMensajes.style.display = "none";
    // divMostrarMensajes.style.display = "block";
    crearHTMLMostrarMensajes();
}

//FUNCION QUE CONTROLA EL FORMULARIO DE FILTRAJE DE MENSAJES
function mostrarFormFiltrarMensajes() {

    $("#crearMensajes").hide();
    $("#crearGrupos").hide();
    $("#mostrarMensajes").hide();
    $("#filtrarMensajes").show();

    // divCrearMensajes.style.display = "none";
    // divCrearGrupos.style.display = "none";
    // divMostrarMensajes.style.display = "none";
    // divFiltrarMensajes.style.display = "block";
    crearHTMLFiltrarMensajes();
}