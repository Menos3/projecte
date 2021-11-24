export class Messages {

    constructor(id, author_id, message, created, pubpriv, dest_id) {
        this.id = id;
        this.author_id = author_id;
        this.message = message;
        this.created = created;
        this.pubpriv = pubpriv;
        this.dest_id = dest_id;

    }
}