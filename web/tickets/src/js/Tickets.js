export class Tickets {
    constructor(id, titulo, descripcion, creado, actualizado) {
        this.id = id;
        this.titulo = titulo;
        this.decripcion = descripcion;
        this.creado = creado;
        this.actualizado = actualizado;


    }
    export class LlibresList {

        constructor() {
            this.carregarLocalStorage();
        }
        nouLlibre(llibre) {
            this.llibres.push(llibre);
            this.desarLocalStorage();
        }
        desarLocalStorage() {
            localStorage.setItem('llibres', JSON.stringify(this.llibres));
        }
        carregarLocalStorage() {
            this.llibres = (localStorage.getItem('llibres')) ?
                JSON.parse(localStorage.getItem('llibres')) :
                [];
        }
    }


}