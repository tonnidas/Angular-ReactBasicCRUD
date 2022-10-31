export class Book {
    
    id!: number;
    name: string;
    authorName: string;
    publicationDate: string;
    copies: number;

    constructor() {
        this.name="";
        this.authorName="";
        this.publicationDate="";
        this.copies=0;
    }
}
