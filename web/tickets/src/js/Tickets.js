import { ListTickets } from "./ListTickets";
export class Tickets {
    constructor(id, titulo, descripcion, creado, actualizado, author, assigned_id) {
        this.id = id;
        this.titulo = titulo;
        this.decripcion = descripcion;
        this.creado = creado;
        this.actualizado = actualizado;
        this.author = author;
        this.assigned_id = assigned_id;
    }

}