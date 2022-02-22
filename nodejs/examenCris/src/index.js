
import './styles.css'



class Usuari { 
    constructor({ id,nom, password }) { 
        this.id = id;
        this.nom = nom;
        this.password = password;
        
    }

    //coger el ultimo id de la tabla pero de momento para tener ID

    // generateId() {
    //     let id = Math.floor(Math.random() * 9999999);
    //     return id;
    // }
    
}

class ListUsuaris { 
    usuari;
    listUsuaris = [];
    usuarisUrlFireBase = 'https://preparacion-examen-71d88-default-rtdb.europe-west1.firebasedatabase.app/usuaris.json';
    
    async getInformation() {
        try {
            let result = await axios(this.usuarisUrlFireBase);
            this.usuaris = result.data;
            console.log('funciona');
            if (!this.usuaris) {
                this.usuaris = [];
                console.log('funcionaaaaa');
                console.log(this.usuaris);
                
            }
            return this.usuaris;
        } catch (e) { 
            console.log("Error al cargar info de la BBDD"); 
            console.log(e);
            
        }
        
    }
    async postUsuari(usuari) { 
        try { 
            if (!this.usuaris) { 
                console.log('aqui post');
                
                this.usuaris = [];
                console.log(this.usuaris);
                
            }
            
            this.usuaris.push(usuari);
            
            (await axios(this.usuarisUrlFireBase,
                {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data:JSON.stringify(this.usuaris)
                })
                )
            } catch (e) {
                console.log(e);
            }
            
    }
    async deleteUsu(id) { 
        try {
            await this.getInformation();
            this.listUsuaris = this.listUsuaris.filter(element => element.id != id);
            const resulted = (await axios(this.usuarisUrlFireBase,
                {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: JSON.stringify(this.listUsuaris)
                })
            );
            console.log(resulted.data);
            return resulted.data;
        } catch (e) { 
            console.log('no furrula el deleted');
        }
    }
    getLastId() {
        let id = this.listUsuaris.length > 0 ? this.listUsuaris.at(-1).id : 0;

        return id;
    }
        
    }
    
    
    
    
    var listUsuaris = new ListUsuaris;
    
async function createList(dataUsuaris) { 
        

    let tabla = document.getElementById('taula');
    // tabla.removeChild(cuerpoTabla);

    // let cuerpoTablanuevo = document.createElement('tbody');
    // cuerpoTablanuevo.appendChild(tabla);
    // cuerpoTablanuevo.setAttribute('id', 'cuerpo');
    

        // let borrarBody = document.createElement('cuerpo');
        // tabla.removeChild(borrarBody)

        // let nuevoCuerpo=document.createElement('')


        
        let cabecera = document.createElement('thead');
        tabla.appendChild(cabecera);
        
        let trCabecera = document.createElement('tr');
        cabecera.appendChild(trCabecera);
        
        let tiId = document.createElement('th');
        tiId.setAttribute('scope', 'col');
        tiId.innerHTML = 'identificacion';
        
        let nom = document.createElement('th');
        nom.setAttribute('scope', 'col');
        nom.innerHTML = 'Nombre';
    
    let password = document.createElement('th');
    password.setAttribute('scope', 'col');
    password.innerHTML = 'Password';
    
    trCabecera.appendChild(tiId);
    trCabecera.appendChild(nom);
    trCabecera.appendChild(password);
    
        let cuerpoTabla = document.createElement('tbody');
        cuerpoTabla.setAttribute('id', 'cuerpo');
        tabla.appendChild(cuerpoTabla);
        console.log(dataUsuaris);
        dataUsuaris.forEach((element) => { 
            let linea = document.createElement('tr');
            let butBorrar = document.createElement('button');
            butBorrar.setAttribute('id', 'Borrar' + element.id);
            butBorrar.innerHTML = "borrar";
            butBorrar.addEventListener('click', async event => { 
            event.preventDefault();
            let list = await listUsuaris.deleteUsu(element.id);
            console.log(list,"borrar")
            createList(list);  
            })
            linea.setAttribute('class', 'list_line');
            linea.setAttribute('id', 'line' + element.id);
            linea.innerHTML =
                `
                <td>${element.id}</td>
                <td>${element.nom}</td>
                <td>${element.password}</td>
                
                

                `;
            cuerpoTabla.appendChild(linea);
            linea.appendChild(butBorrar);
        })
    
    
    
    
    

    
}
async function iniciar() { 
    let usu = await listUsuaris.getInformation();
    createList(usu);
    let botonSumbit = document.getElementById('envia');
    botonSumbit.addEventListener('click', async event => { 
        event.preventDefault();
        let id = listUsuaris.getLastId() + 1;
        console.log(id)
        let nom = document.getElementById('nom').value;
        let password = document.getElementById('password').value;
        
        const values = {
            id:id,
            nom: nom,
            password: password
        }
        let usu = new Usuari(values);
        await listUsuaris.postUsuari(usu);
        
        let dataUsuaris = await listUsuaris.getInformation();
        createList(dataUsuaris);

    })
    
    
    
    
    
    
}






await iniciar();