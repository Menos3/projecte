export class GrupList {

    constructor() {
        this.grupsList = [];
		//this.cargarLocalStorage();
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

        let listaGruposBBDD = [];

        try {

            listaGruposBBDD = await fetch('https://jsuite-710e7-default-rtdb.europe-west1.firebasedatabase.app/groups.json');
            listaGruposBBDD = await listaGruposBBDD.json();

            return listaGruposBBDD;

        } catch {

            alert("Problemas a la hora de cargar los grupos de la BBDD");
            return null;

        }
    }
    
    async setGroup(group, id) {

        try {

            const res = await fetch('https://jsuite-710e7-default-rtdb.europe-west1.firebasedatabase.app/groups/'+id+'.json',

            {
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(group)
            })
            
        } catch (error) {

            alert(error);
        }
    }
}