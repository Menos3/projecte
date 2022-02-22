

export function recogerDatos(){

    const div= document.createElement("div");
    fetch('https://m6database-default-rtdb.firebaseio.com/').then(data=> data.json()) 
    .then( dades =>{
    
    
        data=> data.json()
        div.append(data);
        document.body.append(div);
    }
    );

}

export async function recogerDatos2 (){
    const res = await fetch(`https://m6database-default-rtdb.firebaseio.com/.json`,{

        method:"GET", 
        Headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify()

        })
        const db = await res.json();
        // data=> data.json()
        // div.append(data);
        document.body.append(db);
    
        
    }

var boton = document.getElementById("afegeix");
boton.addEventListener("click",event=>{
    event.preventDefault();
    addProducto();
} )


async function addProducto(){

    const res = await fetch(`https://m6database-default-rtdb.firebaseio.com/.json`,{

        method:"POST", 
        Headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify()

        })
        const db = await res.json();
    
        
    }










