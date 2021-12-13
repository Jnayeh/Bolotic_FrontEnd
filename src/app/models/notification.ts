export class Notification {
    _id : any;
    titre: String;
    notification: String;
    read: Boolean = false;
    date_creation = new Date();
    to: any;
    //Sender recruteur id/object
    recruteur: any;
    //Sender etudiant id/object
    etudiant: any;
    //Sender administrateur id/object
    administrateur: any;
    constructor(){
        this.titre='';
        this.notification='';
    }
}
