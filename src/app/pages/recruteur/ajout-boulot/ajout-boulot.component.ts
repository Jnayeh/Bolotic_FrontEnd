import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AjoutboulotService } from 'src/app/api/ajoutboulot.service';
import { Boulot } from 'src/app/models/boulot';

@Component({
  selector: 'app-ajout-boulot',
  templateUrl: './ajout-boulot.component.html',
  styleUrls: ['./ajout-boulot.component.css']
})
export class AjoutBoulotComponent implements OnInit {

  constructor( private AjoutboulotService: AjoutboulotService, private _snackBar: MatSnackBar,private router: Router) { }

  ngOnInit(): void {
    
  }

  ajoutboulot = new Boulot();
  


  parseJwt(token: any) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  };

  AddBoulot(){
    var f = new FormData;
    f.append('ajoutboulot', JSON.stringify(this.ajoutboulot));
    console.log(this.ajoutboulot.description);
    this.AjoutboulotService.register(f).subscribe(res => {
      this._snackBar.open("Succes", "Close", {
        duration: 1000
      });
      sessionStorage.setItem("token",res);
      this.router.navigate(['/recruteur/home']);
    }, err => {
      this._snackBar.open(err.error, "Close", {
        duration: 2000
      });
    })
  }
}
