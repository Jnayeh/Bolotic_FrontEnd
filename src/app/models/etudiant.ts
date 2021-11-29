import { User } from "./user";

export class Etudiant extends User {


    cin: any;
    universite: String;
    avis: any[];
    notifications: any[];
    contrats: any[];
    constructor() {
        super();
        this.cin = null;
        this.universite = '';
        this.avis = [];
        this.notifications = [];
        this.contrats = [];
    }
}
