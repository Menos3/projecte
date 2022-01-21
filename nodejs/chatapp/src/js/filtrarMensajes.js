import {MessagesList} from "/xampp/htdocs/projecte/nodejs/chatapp/src/js/MessagesList"

var listaMensajes = new MessagesList();

export function crearHTMLFiltrarMensajes() {

    //CREAR ELEMENT FORM
    let formulario = document.createElement("form");
    formulario.id = "formFiltrarMensajes";
    document.body.appendChild(formulario);

    //CREAR ELEMENT INPUT Y EL BOTON DE FILTRAJE Y ANADIRLOS AL FORM
    let tfBusqueda = document.createElement("input");
    let btFiltrar = document.createElement("button");

    tfBusqueda.id = "tfBusqueda";
    btFiltrar.id = "btFiltrar";
    btFiltrar.innerHTML = "Buscar";

    formulario.appendChild(tfBusqueda);
    formulario.appendChild(btFiltrar);

    //EVENTO DEL BOTON DE FILTRAJE
    btFiltrar.addEventListener("click", (event) => {

        if(tfBusqueda.value == "") {
            console.log("jelou");
            crearListaMensajesSinFiltrar();

        } else {

            crearListaMensajesFiltrada(tfBusqueda.value);
        }

    });

}

function crearListaMensajesSinFiltrar() {

    //CREAR ELEMENT FORM
    let formulario = document.createElement("form");

    //CREAR ELEMENT DIV
    let divFiltrajeMensajes = document.createElement("div");
    divFiltrajeMensajes.id = "divFiltrajeMensajes";

    formulario.appendChild(divFiltrajeMensajes);

    //CREAR ELEMENT TABLE
    let tabla = document.createElement("table");

    //AÑADIR ELEMENT TABLE AL DIV
    divFiltrajeMensajes.appendChild(tabla);

    //LLAMAR A LA LISTA DE MENSAJES
    var messagesList = new MessagesList();
    console.log(messagesList);

    //A CADA VUELTA DE BUCLE, GENERA UNA FILA Y 5 COLUMNAS
    for(let mensajes of messagesList.messageList) {

        //CREAR ELEMENT TR
        var tr = document.createElement("tr");

        //CREAR ELEMENTS TD PARA LA ID, EL MENSAJE, PUBPRIV, CREATED Y PARA VISUALIZARLO
        var tdId = document.createElement("td");
        tdId.innerHtml = mensajes.id;

        var tdMensaje = document.createElement("td");
        tdMensaje.innerText = mensajes.message;

        var tdFechaCreacion = document.createElement("td");
        tdFechaCreacion.innerText = mensajes.created;

        var tdPubPriv = document.createElement("td");
        tdPubPriv.innerText = mensajes.pubpriv;

        var tdVisualizar = document.createElement("td");
        var btVisualizar = document.createElement("button");
        btVisualizar.id = "btVisualizar";

        //AÑADIR ELEMENT A AL TDVISUALIZAR
        tdVisualizar.appendChild(btVisualizar);

        //AÑADIR LOS TD AL TR
        tr.appendChild(tdId);
        tr.appendChild(tdMensaje);
        tr.appendChild(tdFechaCreacion);
        tr.appendChild(tdPubPriv);
        tr.appendChild(tdVisualizar);

        //AÑADIR EL TR A LA TABLE
        tabla.appendChild(tr);

        //EVENTLISTENER PARA VISUALIZAR EL MENSAJE
        btVisualizar.addEventListener("click", (event) => {

            event.preventDefault();
            alert("La id del missatge es: " + mensajes.id + " amb el missatge: " + mensajes.message + " creat el dia: " + mensajes.created + "i el missatge és: " + mensajes.pubpriv);
        });
    }
}

function crearListaMensajesFiltrada(keyWord) {

    var listaFiltrada = listaMensajes.filteredList(keyWord);

    for(let mensajesFiltrados of listaFiltrada) {

        //CREAR ELEMENT TR
        let tr = document.createElement("tr");

        //CREAR ELEMENTS TD PARA LA ID, EL MENSAJE, PUBPRIV, CREATED Y PARA VISUALIZARLO
        var tdId = document.createElement("td");
        tdId.innerHtml = mensajesFiltrados.id;

        var tdMensaje = document.createElement("td");
        tdMensaje.innerText = mensajesFiltrados.message;

        var tdFechaCreacion = document.createElement("td");
        tdFechaCreacion.innerText = mensajesFiltrados.created;

        var tdPubPriv = document.createElement("td");
        tdPubPriv.innerText = mensajesFiltrados.pubpriv;

        var tdVisualizar = document.createElement("td");
        var btVisualizar = document.createElement("button");
        btVisualizar.id = "btVisualizar";

        //AÑADIR ELEMENT A AL TDVISUALIZAR
        tdVisualizar.appendChild(btVisualizar);

        //AÑADIR LOS TD AL TR
        tr.appendChild(tdId);
        tr.appendChild(tdMensaje);
        tr.appendChild(tdFechaCreacion);
        tr.appendChild(tdPubPriv);
        tr.appendChild(tdVisualizar);

        //AÑADIR EL TR A LA TABLE
        tabla.appendChild(tr);

        //EVENTLISTENER PARA VISUALIZAR EL MENSAJE
        btVisualizar.addEventListener("click", (event) => {

            event.preventDefault();
            alert("La id del missatge es: " + mensajes.id + " amb el missatge: " + mensajes.message + " creat el dia: " + mensajes.created + "i el missatge és: " + mensajes.pubpriv);
        });
    }
}