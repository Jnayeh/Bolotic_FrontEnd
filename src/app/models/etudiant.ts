import { User } from "./user";

export class Etudiant extends User{

    
    cin: Number;
    universite: String;
    constructor(){
        super();
        this.cin= null;
        this.universite= '';
    }
}
