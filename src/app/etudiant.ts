
export class Etudiant {
    id: any;
    nom: string;
    mot_de_passe: string;
    mot_de_passe_confirmation: string;
    email: string;
    motivation: string;
    photo: any;
  
    created_at:any;
    updated_at:any;
  
    constructor() {
        this.nom = '';
        this.id = '';
      this.mot_de_passe = '';
      this.mot_de_passe_confirmation = '';
      this.email = '';
      this.motivation = '';
      this.photo = null;
  
    }
  }