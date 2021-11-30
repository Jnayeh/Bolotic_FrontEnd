import { User } from "./user";
export class Boulot  {
    _id : any;
    titre: String;
    description: string;
    date_debut: any;
    date_fin: Date;
    prix: Number;
    recruteur:any;
    category:any;
    contrats:any[];
    constructor(){
        this._id=null;
        this.titre= '';
        this.description= '';
        this.date_fin= new Date();
        this.prix= 0;
        this.recruteur= null;
        this.category= null;
        this.contrats= [];
    }
    
}

