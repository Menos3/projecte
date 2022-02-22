import { data } from "jquery";
import { Tarea, ListTarea } from "./ClassTareas";

var tareaList= new ListTarea();
// El div lo tengo creado en un html element


export async function createList(dataTarea) { 

// Borramos el div lo tengo creado
    let divBorrar = document.getElementById('listaTareas');
    document.body.removeChild(divBorrar);
    
// Creamos de nuevo el div
    let divNuevo = document.createElement('listaTareas');
    divNuevo.setAttribute('id', 'listaTareas');
    document.body.append(divNuevo);

// Creamos la tabla que ira dentro del div
    let tabla = document.createElement('table');
    tabla.setAttribute('class', 'table table-striped table-hover');
    tabla.setAttribute('id', 'tabla');
    divNuevo.appendChild(tabla);
    
// Creamos los elementos de la tabla 
    //creacion del col de la tabla.
    let cabecera = document.createElement('thead');
    tabla.appendChild(cabecera);
    
    let trCabecera = document.createElement('tr');
    cabecera.appendChild(trCabecera);

    
    let tiId = document.createElement('th');
    tiId.setAttribute('scope', 'col');
    tiId.innerHTML = 'Nº Id';

    let tiTitulo = document.createElement('th');
    tiTitulo.setAttribute('scope', 'col');
    tiTitulo.innerHTML = 'Titulo';
    
    let tiDesc = document.createElement('th');
    tiDesc.setAttribute('scope', 'col');
    tiDesc.innerHTML = 'Description';

    let tiDate = document.createElement('th');
    tiDate.setAttribute('scope', 'col');
    tiDate.innerHTML = 'Fecha';

    let tiFet= document.createElement('th');
    tiFet.setAttribute('scope', 'col');
    tiFet.innerHTML = 'Realizado';

    trCabecera.appendChild(tiId);
    trCabecera.appendChild(tiTitulo);
    trCabecera.appendChild(tiDesc);
    trCabecera.appendChild(tiDate);
    trCabecera.appendChild(tiFet);


    let cuerpoTabla = document.createElement('tbody');
    tabla.appendChild(cuerpoTabla);
    console.log(dataTarea);
    dataTarea.forEach((element) => { 
        let linea = document.createElement('tr');
        let checkMostra = document.createElement('input');
        checkMostra.setAttribute('type', 'checkbox');
        checkMostra.setAttribute('class', 'lista__check');
        checkMostra.setAttribute('id', 'check' + element.id);
        let butBorrar = document.createElement('button');
        butBorrar.setAttribute('id', 'Borrar' + element.id);
        butBorrar.innerHTML = "borrar";
        butBorrar.addEventListener('click', async event => { 
            event.preventDefault();
            let list = await tareaList.deleteTask(element.id);
            console.log(list,"borrar")
            createList(list);  
        })
        linea.setAttribute('class', 'list__line');
        linea.setAttribute('id', 'line' + element.id);
        linea.innerHTML = 
        `
        <td>${element.id}</td>
        <td>${element.titulo}</td>
        <td>${element.description}</td>
        <td>${element.date}</td>
        <td>${element.created}</td>
        `;
        cuerpoTabla.appendChild(linea)
        //añadimos propiedades a las lineas
        linea.appendChild(checkMostra);
        linea.appendChild(butBorrar);

    })


}





export async function iniciar() { 
    let tareas = await tareaList.getInformation();
    createList(tareas);
    let botonSumbit = document.getElementById('enviar');
    botonSumbit.addEventListener('click', async event => { 
        event.preventDefault();
    
        let titulo = document.getElementById('titulo').value;
        let description = document.getElementById('description').value;
        let date = document.getElementById('data').value;

        const values = {
            titulo: titulo,
            description: description,
            date: date
        }
        let tarea = new Tarea(values);

        await tareaList.postTask(tarea);
  
        let dataTarea = await tareaList.getInformation();
        createList(dataTarea);

        
    })
    
}




