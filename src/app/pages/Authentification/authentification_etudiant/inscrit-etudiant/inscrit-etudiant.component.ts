import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/api/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';

@Component({
  selector: 'app-inscrit-etudiant',
  templateUrl: './inscrit-etudiant.component.html',
  styleUrls: ['./inscrit-etudiant.component.css']
})
export class InscritEtudiantComponent implements OnInit {

  etudiant = new Etudiant;
  fileToUpload: any;
  photo: any;
  constructor(private etudiantService: EtudiantService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

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

  signUp() {
    console.log(this.etudiant);
    var f = new FormData;
    f.append('etudiant', JSON.stringify(this.etudiant));
    f.append('pdp', this.fileToUpload);
    this.etudiantService.register(f).subscribe(
      {
        next: res => {
          this._snackBar.open("Succes", "Close", {
            duration: 1000
          });
          this.router.navigate(['/etudiant/home']);
        },
        error: err => {
          this._snackBar.open(err.error, "Close", {
            duration: 2000
          });
        }
      })
  }

}
