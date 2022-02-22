export class Tarea { 
    constructor({ titulo, description, date }) {
        //recibirá un obtjeto en vez de los argumentos        
        this.id=this.generateId();
        this.titulo = titulo;
        this.description = description;
        this.date = date;
        // this.lugar = lugar;
        this.created = this.getDate();
        // this.isDone = false;
    }
    getDate() {
        let date = new Date();
        return date.toDateString();
    }
    generateId() {
        let id = Math.floor(Math.random() * 9999999);
        return id;
    }

    
    
    
    
}
export class ListTarea { 
    tarea;
    tareas;
    tareasFireUrl = 'https://preparacion-examen-71d88-default-rtdb.europe-west1.firebasedatabase.app/tareas.json';

    async getInformation(){
        try {
            let result = await axios(this.tareasFireUrl);
            this.tareas = result.data;
            console.log('aqui');
            if (!this.tareas) {
                this.tareas = [];
                console.log('aqui2');
                console.log(this.tareas);

            }
            return this.tareas;
        } catch (e) { 
            console.log("Error al cargar info de la BBDD"); 
            console.log(e);
          
        }
    
    }
    async postTask(tarea) { 
        try { 
            if (!this.tareas) { 
            console.log('aqui post');

                this.tareas = [];
            console.log(this.tareas);

            }

            this.tareas.push(tarea);

            (await axios(this.tareasFireUrl,
                {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data:JSON.stringify(this.tareas)
                })
            )
        } catch (e) {
            console.log(e);
        }

    }
    async deleteTask(id) { 
        try {
            await this.getInformation();
            this.tareas = this.tareas.filter(element => element.id != id);
            const resulted = (await axios(this.tareasFireUrl,
                {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: JSON.stringify(this.tareas)
                })
            );
            console.log(resulted.data);
            return resulted.data;
        } catch (e) { 
            console.log('no furrula el deleted');
        }
    }












}
