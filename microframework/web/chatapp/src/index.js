import {UsuarisList} from "/xampp/htdocs/projecte/web/_commons/js/clases/UsuarisList"
import {Messages} from "/xampp/htdocs/projecte/web/chatapp/src/js//Messages"
import {MessagesList} from "/xampp/htdocs/projecte/web/chatapp/src/js/MessagesList"
import {GrupList} from "/xampp/htdocs/projecte/web/_commons/js/clases/GrupList"
import {crearGrupo} from "/xampp/htdocs/projecte/web/chatapp/src/js/grupos"
import {crearHTMLMostrarMensajes} from "/xampp/htdocs/projecte/web/chatapp/src/js/mostrarMensajes"

//COMPONENTES DE TODOS LOS FORMULARIOS
let btFormCrearMensaje = document.getElementById("btFormCrearMensaje");
let btFormCrearGrupo = document.getElementById("btFormCrearGrupo");
let btFormMostrarMensajes = document.getElementById("btFormMostrarMensajes");
let divCrearMensajes = document.getElementById("crearMensajes");
let divCrearGrupos = document.getElementById("crearGrupos");
let divMostrarMensajes = document.getElementById("mostrarMensajes");
let cbPublic = document.getElementById("cbPublic");
let tfGrupo = document.getElementById("tfGrupo");
let cbPrivado = document.getElementById("cbPrivado");
let tfUsuario = document.getElementById("tfUsuario");
let taMensaje = document.getElementById("taMensaje");
let btEnviar = document.getElementById("btEnviar");
let divPublic = document.getElementById("containerPublic");
let divPrivate = document.getElementById("containerPrivate");
let tfNombreGrupo = document.getElementById("tfNombreGrupo");
let btCrearGrupo = document.getElementById("btCrearGrupo");

//EVENTLISTENER DE LOS BOTONES DEL MENU
btFormCrearMensaje.addEventListener("click", (event) => {mostrarFormCrearMensaje()});
btFormCrearGrupo.addEventListener("click", (event) => {mostrarFormCrearGrupo()});
btFormMostrarMensajes.addEventListener("click", (event) => {mostrarFormMostrarMensajes()});

//FUNCION QUE CONTROLA EL FORMULARIO DE CREAR MENSAJES
function mostrarFormCrearMensaje(event) {

    event.preventDefault();
    divCrearGrupos.style.display = "none";
    divMostrarMensajes.style.display = "none";
    divCrearMensajes.style.display = "block";

    //EVENTLISTENER DE LOS CHECKBOX
    cbPrivado.addEventListener("change", () => {ocultacionDiv()});
    cbPublic.addEventListener("change", () => {ocultacionDiv()});

    //EVENTLISTENER DEL BOTON QUE ENVIA LOS MENSAJES
    btEnviar.addEventListener("click", (event) => {enviarMensaje(event)});

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
        var cuerpoMensaje = taMensaje.value;
        let listaUsuarios = new UsuarisList();

        //SE EJECUTA CUANDO EL CHECKBOX PUBLIC ES SELECCIONADO
        if(cbPublic.checked) {

            var nombreGrupo = tfGrupo.value;
            pubpriv = cbPublic.value;

            let listaGrupos = new GrupList();

            //POR CADA GRUPO EN EL ARRAY, SI EL NOMBRE DE GRUPO INTRODUCIDO COINCIDE CON UNO DEL ARRAY
            for(let grupos of listaGrupos.grupsList) {

                if(grupos.name == nombreGrupo) {

                    //AUTHOR_ID CORRESPONDIENTE AL PRIMER ELEMENTO DEL ARRAY DE USUARIOS (NO SE QUE USUARIO HACE ESTO)
                    var mensaje = new Messages(listaGrupos.autoIncrementId() + 1, listaUsuarios.usuaris[0].id_usuari, cuerpoMensaje, fechaActual(), pubpriv, grupos.id);

                    //CARGAR ARRAY DE MENSAJES E INSERTAR EL MENSAJE CREADO
                    let listaMensajes = new MessagesList();
                    listaMensajes.addMessage(mensaje);

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

                if(usuarios.username == destinatario) {

                    //CARGAR ARRAY DE MENSAJES
                    let listaMensajes = new MessagesList();

                    //AUTHOR_ID CORRESPONDIENTE AL PRIMER ELEMENTO DEL ARRAY DE USUARIOS
                    let mensaje = new Messages(listaMensajes.autoIncrementId() + 1, listaUsuarios.usuaris[0].id_usuari, cuerpoMensaje, fechaActual(), pubpriv, usuarios.id_usuari);

                    //INSERTAR EL MENSAJE CREADO
                    listaMensajes.addMessage(mensaje);

                    alert("Missatge enviat!!");

                } else {

                    alert("El usuario introducido no existe");
                }
            }
        }
    }
}

//FUNCION QUE CONTROLA EL FORMULARIO DE CREAR GRUPOS
function mostrarFormCrearGrupo(event) {

    event.preventDefault();
    divCrearMensajes.style.display = "none";
    divMostrarMensajes.style.display = "none";
    divCrearGrupos.style.display = "block";
    crearGrupo();
}

//FUNCION QUE CONTROLA EL FORMULARIO DE MOSTRAR MENSAJES
function mostrarFormMostrarMensajes(event) {

    event.preventDefault();
    divCrearMensajes.style.display = "none";
    divCrearGrupos.style.display = "none";
    divMostrarMensajes.style.display = "block";
    crearHTMLMostrarMensajes();
}