import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BoulotService } from 'src/app/api/boulot.service';
import { Boulot } from 'src/app/models/boulot';

@Component({
  selector: 'app-ajout-boulot',
  templateUrl: './ajout-boulot.component.html',
  styleUrls: ['./ajout-boulot.component.css']
})
export class AjoutBoulotComponent implements OnInit {

  constructor( private BoulotService: BoulotService, private _snackBar: MatSnackBar,private router: Router) { }

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
    
    this.BoulotService.add(this.ajoutboulot).subscribe(res => {
      this._snackBar.open("Succes", "Close", {
        duration: 1000
      });
      console.log("Boulot :",res)
      this.router.navigate(['/recruteur/home']);
    }, err => {
      this._snackBar.open(err.error, "Close", {
        duration: 2000
      });
    })
  }
}
