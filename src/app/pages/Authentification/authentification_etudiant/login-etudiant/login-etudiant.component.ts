import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from 'src/app/api/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';

@Component({
  selector: 'app-login-etudiant',
  templateUrl: './login-etudiant.component.html',
  styleUrls: ['./login-etudiant.component.css']
})
export class LoginEtudiantComponent implements OnInit {
  etudiant = new Etudiant;

  constructor(
    private etudiantService: EtudiantService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  logIn() {
    console.log(this.etudiant);

    this.etudiantService.logIn(this.etudiant).subscribe(
      {
        next: res => {
          this._snackBar.open("Succes", "Close", {
            duration: 1000
          });
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/etudiant/home';
          this.router.navigate([returnUrl]);
        }, 
        error: err => {
          if (err == "Bad Request") {
            this._snackBar.open("Invalid credentials", "Close", {
              duration: 2000
            });
          }
          else {
            this._snackBar.open(err.error, "Close", {
              duration: 2000
            });

          }
        }
      })
  }

}
