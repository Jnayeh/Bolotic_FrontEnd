import { User } from "./user";

export class Recruteur extends User{
    
    cin: any;
    societe: String;
    logo_societe: any;
    constructor(){
        super();
        
        this.cin= null;
        this.societe='';
        this.logo_societe= null;
    }
    
}
