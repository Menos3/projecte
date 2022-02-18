import "jquery"
import {UsuarisList} from "/xampp/htdocs/projecte/nodejs/commons/UsuarisList"
import {Messages} from "/xampp/htdocs/projecte/nodejs/chatapp/src/js/Messages"
import {MessagesList} from "/xampp/htdocs/projecte/nodejs/chatapp/src/js/MessagesList"
import {GrupList} from "/xampp/htdocs/projecte/nodejs/commons/GrupList"
import {crearGrupo} from "/xampp/htdocs/projecte/nodejs/chatapp/src/js/grupos"
import {crearHTMLMostrarMensajes} from "/xampp/htdocs/projecte/nodejs/chatapp/src/js/mostrarMensajes"
import {crearHTMLFiltrarMensajes} from "/xampp/htdocs/projecte/nodejs/chatapp/src/js/filtrarMensajes"

//COMPONENTES DE TODOS LOS FORMULARIOS
let cbPublic = document.getElementById("cbPublic");
let cbPrivado = document.getElementById("cbPrivado");

//EVENTLISTENER DE LOS BOTONES DEL MENU
$('#btFormCrearMensaje').on("click", (event)=>{mostrarFormCrearMensaje()});
$('#btFormCrearGrupo').on("click", (event)=>{mostrarFormCrearGrupo()});
$('#btFormMostrarMensajes').on("click", (event)=>{mostrarFormMostrarMensajes()});
$('#btFormFiltrarMensajes').on("click", (event)=>{mostrarFormFiltrarMensajes()});

//FUNCION QUE CONTROLA EL FORMULARIO DE CREAR MENSAJES
function mostrarFormCrearMensaje() {

    $("#crearGrupos").hide();
    $("#mostrarMensajes").hide();
    $("#filtrarMensajes").hide();
    $("#crearMensajes").show();

    //EVENTLISTENER DE LOS CHECKBOX
    $('#cbPrivado').on("change", () =>{ocultacionDiv()});
    $('#cbPublic').on("change", () => {ocultacionDiv()});

    //EVENTLISTENER DEL BOTON QUE ENVIA LOS MENSAJES
    $('#btEnviar').on("click", (event) => {enviarMensaje(event)});

    //FUNCION DE OCULTAR LOS DIV EN FUNCION DE LOS CHECKBOX MARCADOS
    function ocultacionDiv() {

        if(cbPublic.checked) {

            $("#containerPrivate").hide();

        } else {

            $("#containerPrivate").show();
        }

        if(cbPrivado.checked) {

            $("#containerPublic").hide();

        } else {

            $("#containerPublic").show();
        }
    }

    //FUNCION DE COGER LA FECHA ACTUAL DEL SISTEMA
    $.fn.fechaActual = function() {

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
        var cuerpoMensaje = $("#taMensaje").val();
        let listaUsuarios = new UsuarisList();

        //SE EJECUTA CUANDO EL CHECKBOX PUBLIC ES SELECCIONADO
        if($('#cbPublic').is(':checked')) {

            var nombreGrupo = $("#tfGrupo").val();
            pubpriv = $('#cbPublic').val();

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
        if($('#cbPrivado').is(':checked')) {

            //COGEMOS EL VALOR DEL TEXTFIELD, EL VALOR DEL CHECKBOX, LLAMAMOS A LA LISTA DE USUARIOS Y CREAMOS LA ID DEL USUARIO QUE MANDA EL MENSAJE
            let destinatario = $('#tfUsuario').val();
            pubpriv = $('#cbPrivado').val();

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

    crearGrupo();
}

//FUNCION QUE CONTROLA EL FORMULARIO DE MOSTRAR MENSAJES
function mostrarFormMostrarMensajes() {

    $("#crearMensajes").hide();
    $("#crearGrupos").hide();
    $("#filtrarMensajes").hide();
    $("#mostrarMensajes").show();

    crearHTMLMostrarMensajes();
}

//FUNCION QUE CONTROLA EL FORMULARIO DE FILTRAJE DE MENSAJES
function mostrarFormFiltrarMensajes() {

    $("#crearMensajes").hide();
    $("#crearGrupos").hide();
    $("#mostrarMensajes").hide();
    $("#filtrarMensajes").show();

    crearHTMLFiltrarMensajes();
}