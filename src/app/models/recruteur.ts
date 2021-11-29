import { User } from "./user";

export class Recruteur extends User{
    
    cin: any;
    societe: String;
    logo_societe: any;
    //Many boulots reference 
    boulots: any[];
    //Many avis reference 
    avis: any[];
    //Many notifications reference 
    notifications: any[];
    constructor(){
        super();
        
        this.cin= null;
        this.societe='';
        this.logo_societe= null;
        this.boulots=[];
        this.avis=[];
        this.notifications=[];
    }
    
}
