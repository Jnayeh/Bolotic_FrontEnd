import { User } from "./user";
export class Boulot extends User {

    titre: String;
    description: String;
    datefin: Date;
    constructor(){
        super();
        this.titre= '';
        this.description= '';
        this.datefin= new Date();
    }
    
}

