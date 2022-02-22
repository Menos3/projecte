

 function crearForm(){
    var formulario=`
   

    <form  >

        <label for="idUsiario">Nombre </label> <br>
        <input type="text" name="idUsuario" id="nomUsuario"> <br> <br>
        <label for="descripcion">Apellido</label> <br>
        <input type="text" name="apellido" id="apellido"> <br> <br>
        <label for="direccion">Direccion</label> <br>
        <input type="text" name="direccion" id="direccion"> <br> <br>
        <label for="poblacion">poblacion</label> <br>
        <input type="text" name="poblacion" id="poblacion"> <br> <br>
      
        
        


    </form>
    `
    // let div2 = document.createElement('div');
    // div2.innerHTML=formulario;
    // document.body.append(div2);
    document.body.innerHTML=formulario;

}

function crearForm(){
   
        
    
   var form = document.createElement("form");
   var nomLabel=document.createElement("label").innerText="Nombre";
   form.innerHTML=nomLabel;
   document.body.innerHTML=form;
}



crearForm();

// function prueba(){
// const para = document.createElement("p");
// para.innerText = "This is a paragraph";
// document.body.appendChild(para);
// }

// prueba();