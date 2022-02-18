import {MessagesList} from "/xampp/htdocs/projecte/nodejs/chatapp/src/js/MessagesList"

export function crearHTMLMostrarMensajes() {

    //CREAR ELEMENT FORM
    let formulario = document.createElement("form");
    formulario.id = "formMostrarMensajes";

    document.body.appendChild(formulario);

    //CREAR ELEMENT DIV
    var div = document.createElement("div");
    div.name = "containerMensajes";

    //AÑADIR EL DIV DENTRO DEL FORMULARIO
    formulario.appendChild(div);

    //CREAR ELEMENT TABLE
    var tabla = document.createElement("table");

    //AÑADIR ELEMENT TABLE AL DIV
    div.appendChild(tabla);

    //LLAMAR A LA LISTA DE MENSAJES
    var messagesList = new MessagesList();

    //CARGAR BASE DE DATOS
    messagesList.cargarMensajesBBDD().then((datosBBDD) => {
        
        //A CADA VUELTA DE BUCLE, GENERA UNA FILA Y 5 COLUMNAS
        for(let mensajes of datosBBDD) {

            //CREAR ELEMENT TR
            var tr = document.createElement("tr");

            //CREAR ELEMENTS TD PARA LA ID, EL MENSAJE, PUBPRIV, CREATED Y PARA ELIMINARLO
            var tdId = document.createElement("td");
            tdId.innerHtml = mensajes.id;

            var tdMensaje = document.createElement("td");
            tdMensaje.innerText = mensajes.message;

            var tdFechaCreacion = document.createElement("td");
            tdFechaCreacion.innerText = mensajes.created;

            var tdPubPriv = document.createElement("td");
            tdPubPriv.innerText = mensajes.pubpriv;

            var tdBorrar = document.createElement("td");
            var a = document.createElement("a");
            a.href = "";
            a.id = "datosMensaje" + mensajes.id;
            a.innerText = "X";

            //AÑADIR ELEMENT A AL TDBORRAR
            tdBorrar.appendChild(a);

            //AÑADIR LOS TD AL TR
            tr.appendChild(tdId);
            tr.appendChild(tdMensaje);
            tr.appendChild(tdFechaCreacion);
            tr.appendChild(tdPubPriv);
            tr.appendChild(tdBorrar);

            //AÑADIR EL TR A LA TABLE
            tabla.appendChild(tr);

            //EVENTLISTENER PARA BORRAR LA HILERA
            $('#datosMensaje'+ mensajes.id).on("click", (event) => {

                event.preventDefault();
                event.target.parentNode.parentNode.remove();
                messagesList.deleteMessage(mensajes.id);

            });
        }
    });
}