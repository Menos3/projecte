export class GrupList {

    constructor() {
        this.grupsList = [];
		//this.cargarLocalStorage();
        this.grupsList = this.cargarGruposBBDD();
    }

    addGroup(group) {
        this.grupsList.push(group);
        this.guardarLocalStorage();
    }

    autoIncrementId() {
        let id = this.grupsList.length > 0 ? this.grupsList.at(-1).id : 0;
		return id;
    }

    guardarLocalStorage() {
        localStorage.setItem('groups', JSON.stringify(this.grupsList));
    }

    //cargarLocalStorage() {
        //this.grupsList = (localStorage.getItem('groups')) ? JSON.parse(localStorage.getItem('groups')) : [];
    //}

    async cargarGruposBBDD() {

        let grupos;

        try {

            grupos = await fetch('https://jsuite-710e7-default-rtdb.europe-west1.firebasedatabase.app/grupos.json');
            grupos = await grupos.json();

            return grupos;

        } catch {

            alert("Problemas a la hora de cargar los grupos de la BBDD");
            return null;

        }
    }
}