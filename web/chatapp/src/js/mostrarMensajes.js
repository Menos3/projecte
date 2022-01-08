import {MessagesList} from "/xampp/htdocs/projecte/web/chatapp/src/js/MessagesList"

//CREAR ELEMENT FORM
var formulario = document.createElement("form");
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

//A CADA VUELTA DE BUCLE, GENERA UNA FILA Y 5 COLUMNAS
for(var i = 0; i < messagesList.length; i++) {

    //CREAR ELEMENT TR
    var tr = document.createElement("tr");

    //CREAR ELEMENTS TD PARA LA ID, EL MENSAJE, PUBPRIV, CREATED Y PARA ELIMINARLO
    var tdId = document.createElement("td");
    tdId.innerText = i.id;

    var tdMensaje = document.createElement("td");
    tdMensaje.innerText = i.message;

    var tdFechaCreacion = document.createElement("td");
    tdFechaCreacion.innerText = i.created;

    var tdPubPriv = document.createElement("td");
    tdPubPriv.innerText = i.pubpriv;

    var tdBorrar = document.createElement("td");
    var a = document.createElement("a");
    a.href = "";
    a.id = "datosMensaje" + i.id;
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
    a.addEventListener("click", (event) => {

        event.preventDefault();
        console.log(event.target.id);
        event.target.parentNode.parentNode.remove();
        messagesList.deleteMessage(i);

    });

}