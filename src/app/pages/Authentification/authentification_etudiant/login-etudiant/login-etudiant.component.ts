import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/api/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';

@Component({
  selector: 'app-login-etudiant',
  templateUrl: './login-etudiant.component.html',
  styleUrls: ['./login-etudiant.component.css']
})
export class LoginEtudiantComponent implements OnInit {
  etudiant= new Etudiant;

  constructor( private etudiantService: EtudiantService, private _snackBar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }

  logIn() {
    console.log(this.etudiant);

    this.etudiantService.logIn(this.etudiant).subscribe(res => {
      this._snackBar.open("Succes", "Close", {
        duration: 1000
      });
      sessionStorage.setItem("token",res);
      this.router.navigate(['/etudiant/home']);
    }, err => {
      this._snackBar.open(err.error, "Close", {
        duration: 2000
      });
    })
  }

}
