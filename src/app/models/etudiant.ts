import { User } from "./user";

export class Etudiant extends User{

    
    cin: any;
    universite: String;
    constructor(){
        super();
        this.cin= null;
        this.universite= '';
    }
}
