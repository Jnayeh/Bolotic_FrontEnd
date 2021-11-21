import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { RecruteurService } from 'src/app/api/recruteur.service';
import { Recruteur } from 'src/app/models/recruteur';

@Component({
  selector: 'app-login-recruteur',
  templateUrl: './login-recruteur.component.html',
  styleUrls: ['./login-recruteur.component.css']
})
export class LoginRecruteurComponent implements OnInit {

  recruteur= new Recruteur;
  constructor( 
    private recruteurService: RecruteurService, 
    private _snackBar:MatSnackBar,
    private router:Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }
  logIn() {
    console.log(this.recruteur);

    this.recruteurService.logIn(this.recruteur).subscribe(res => {
      this._snackBar.open("Succes", "Close", {
        duration: 1000
      });
      
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/recruteur/home';
      this.router.navigate([returnUrl]);
      
    }, err => {
      this._snackBar.open(err.error, "Close", {
        duration: 2000
      });
    })
  }
}
