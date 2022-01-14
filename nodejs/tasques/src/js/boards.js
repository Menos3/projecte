// Se le asigna un Id user
var desc;
var id;
var fecha;
// var bt1;

function crearBotones(){
    var bt=`<button> Ampliar </button> `;
    var bt2=`<button> Editar </button> `;
    var bt3=`<button id=${comodin+0.1} onclick=eliminarTask()> Eliminar </button> `;
    // bt3.id=comodin;
    //  board.appendChild(bt,bt2,bt3)
    return bt+bt2+bt3;
}

function editarTask(){
    var cual=prompt('Ponme cual quieres editar');
    
    var nuevaDesc= prompt('Ponme la nueva descripcion');
    document.getElementById(cual).desc=nuevaDesc;
    creacionEditar(cual,nuevaDesc);
    
}

function eliminarTask(){
    var cual=prompt('Que tasca quieres eliminar, pon el numero: ');
    document.getElementById(cual).remove();
    // document.getElementById(cogerID).remove();
}


var comodin=0;


document.addEventListener("submit", function(event){
    event.preventDefault();
    desc=document.getElementById('descripcion').value;
    ide=document.getElementById('idUsuario').value;
    fecha=Date();
    console.log(fecha);
    comodin++;
    
    function creacion(){
    
    var board= document.createElement("div");
    board.id=comodin;
    // var check=document.createElement("input").type="checkbox";
    // board.append("<div id='comodin'>"+ide +' '+ desc+"   </div>");
    // bt1=document.createElement(" i class='bi bi-eye-fill' style='font-size:24px' ");
    // bt1.className="bi bi-eye-fill";
    // bt1.style
    // ahora ir cogiendo la descripcion y lo demas y añadirlo al nuevo div board
    // var divBoard=document.createElement("div");
    // divBoard.id=comodin;
    
    board.innerHTML=comodin+ "  "+ide +' '+ desc+"   ";
    // crearBoton1();
    botones=crearBotones();
    
   
    
    // bt1=document.createElement("button");
    // var iconos=document.createElement("div");
    // bt1=document.createElement(" i class='bi bi-eye-fill' style='font-size:24px' ");
    // iconos.innerHTML= bt1;   
    // board.style.width="100%";
    // document.board.appendChild(divBoard);
    document.body.appendChild(board);
    

    // board.innerHTML+=botones;

    localStorage.setItem("board",board);

    // board.innerHTML=divBoard;
    }
    creacion();

    function creacionEditar(cual,nuevaDesc){
        document.getElementById(cual).remove()
        ide=document.getElementById('idUsuario').value;
        fecha=Date();
        console.log(fecha);
        var board= document.createElement("div");
        board.id=cual;
        board.innerHTML=comodin+ "  "+ide +' '+ nuevaDesc+"   ";
        
        // botones=crearBotones();
        document.body.appendChild(board);
        localStorage.setItem("board",board);
    }
    export function createTasques(){

        var htmlTasques=`
        <div id="contenedorTotal">

        <form action="boards.js" method="post">

            <label for="idUsiario">Nombre de Usuario</label> <br>
            <input type="text" name="idUsuario" id="idUsuario"> <br> <br>
            <label for="descripcion">Descripcion de la Tascaa</label> <br>
            <input type="text" name="descripcion" id="descripcion"> <br> <br>
            <div id="fecha"></div>
            <input type="submit">
    
    
        </form>
        
        </div>
        <h3>Tasques</h3>
        <div id="contenedorBotones">
            <button>Ampliar</button>
            <button onclick="eliminarTask()">Eliminar</button>
            <button onclick="editarTask()">Editar</button>
        </div>
    `
    let div = document.createElement('div');
    div.innerHTML=htmlTasques;
    document.body.append(div);

    }


});