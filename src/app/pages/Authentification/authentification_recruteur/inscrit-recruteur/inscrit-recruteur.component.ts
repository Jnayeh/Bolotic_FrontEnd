import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RecruteurService } from 'src/app/api/recruteur.service';
import { Recruteur } from 'src/app/models/recruteur';

@Component({
  selector: 'app-inscrit-recruteur',
  templateUrl: './inscrit-recruteur.component.html',
  styleUrls: ['./inscrit-recruteur.component.css']
})
export class InscritRecruteurComponent implements OnInit {
  


  constructor(private recruteurService: RecruteurService, private _snackBar: MatSnackBar,private router: Router) { }
  ngOnInit(): void {
    
  }

  recruteur = new Recruteur;
  fileToUpload: any;
  logoToUpload: any;
  pro = false;
  photo:any;
  logo:any;
  

  handleFileInput(event: Event) {

    this.fileToUpload = ((event.target as HTMLInputElement).files as FileList)[0];
    console.log("FILE: ", this.fileToUpload);
    const reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);
    reader.onload = () => {
      this.photo = reader.result;
      const p = document.getElementById('photo');
      if (p) {
        p.style.display = "block";
      }
    };
  }

  handleLogoInput(event: Event) {

    this.logoToUpload = ((event.target as HTMLInputElement).files as FileList)[0];
    console.log("FILE: ", this.logoToUpload);
    const reader = new FileReader();
    reader.readAsDataURL(this.logoToUpload);
    reader.onload = () => {
      this.logo = reader.result;
      const p = document.getElementById('logo');
      if (p) {
        p.style.display = "block";
      }
    };
  }

  signUp() {
    console.log(this.recruteur);
    var f = new FormData;
    f.append('recruteur', JSON.stringify(this.recruteur));
    f.append('pdp', this.fileToUpload);
    f.append('logo_societe', this.logoToUpload);
    this.recruteurService.register(f).subscribe(
      {
        next: res => {
          this._snackBar.open("Succes", "Close", {
            duration: 1000
          });
          this.router.navigate(['/recruteur/home']);
        },
        error: err => {
          this._snackBar.open(err.error, "Close", {
            duration: 2000
          });
        }
      }
       )
  }
}
