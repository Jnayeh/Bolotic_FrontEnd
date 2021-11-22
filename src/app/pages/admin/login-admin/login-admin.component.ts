import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministrateurService } from 'src/app/api/administrateur.service';
import { Administrateur } from 'src/app/models/administrateur';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  admin = new Administrateur;
  constructor(
    private administrateurService: AdministrateurService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {

  }

  logIn() {
    console.log(this.admin);

    this.administrateurService.logIn(this.admin).subscribe({
      next: res => {
        this._snackBar.open("Succes", "Close", {
          duration: 1000
        });
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin/dashboard';
        this.router.navigate([returnUrl]);
      }, error:
        err => {
          this._snackBar.open(err.error, "Close", {
            duration: 2000
          });
        }
    })
  }
}
