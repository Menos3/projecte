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
        return this.grupsList.at(-1) +1;
    }

    guardarLocalStorage() {
        localStorage.setItem('groups', JSON.stringify(this.grupsList));
    }

    cargarLocalStorage() {
        this.grupsList = (localStorage.getItem('groups')) ? JSON.parse(localStorage.getItem('groups')) : [];
    }
}