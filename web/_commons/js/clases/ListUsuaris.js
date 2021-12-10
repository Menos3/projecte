export class ListUsuaris {

    constructor(usuaris) {
        this.usuaris = usuaris;

    }

    addUser(usuari) {
        this.usuaris.push(usuari);

    }

}