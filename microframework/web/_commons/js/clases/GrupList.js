export class GrupList {

    constructor() {
        this.grupsList = [];
		this.cargarLocalStorage();
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

    cargarLocalStorage() {
        this.grupsList = (localStorage.getItem('groups')) ? JSON.parse(localStorage.getItem('groups')) : [];
    }
}