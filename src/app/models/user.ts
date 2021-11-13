export class User {
    _id:any;
    nom: String;
    prenom: String;
    email: String;
    num_tel: any;
    mot_de_passe: String;
    new_mot_de_passe: String;
    mot_de_passe_confirmation: String;
    suspended: Boolean;
    photo: any;
    date_creation: Date;

    constructor() {
        this._id = null;
        this.nom = '';
        this.prenom = '';
        this.email = '';
        this.num_tel = null;
        this.mot_de_passe = '';
        this.new_mot_de_passe = '';
        this.mot_de_passe_confirmation = '';
        this.suspended = false;
        this.photo = null;
        this.date_creation = new  Date();
    
    
      }
}
