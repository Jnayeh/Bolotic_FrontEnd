import { User } from "./user";
export class Boulot extends User {

    titre: String;
    description: String;
    datefin: Date;
    recruteur:any;
    category:any;
    contrats:any[];
    prix: Number;
    constructor(){
        super();
        this.titre= '';
        this.description= '';
        this.datefin= new Date();
        this.recruteur= null;
        this.category= null;
        this.contrats= [];
        this.prix= 0;
    }
    
}

