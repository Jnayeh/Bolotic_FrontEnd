import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BoulotService } from 'src/app/api/boulot.service';
import { Boulot } from 'src/app/models/boulot';

@Component({
  selector: 'app-ajout-boulot',
  templateUrl: './ajout-boulot.component.html',
  styleUrls: ['./ajout-boulot.component.css']
})
export class AjoutBoulotComponent implements OnInit {

  constructor( private boulotService: BoulotService, private _snackBar: MatSnackBar,private router: Router, private route:ActivatedRoute) { }
  
  ajoutboulot = new Boulot();
  id: any ;
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    if(this.id){
      this.getBoulot(this.id);
    }
  }


  AddBoulot(){
    this.boulotService.add(this.ajoutboulot).subscribe({
      next: res => {
      this._snackBar.open("Succes", "Close", {
        duration: 1000
      });
      console.log("Boulot :",res)
      this.router.navigate(['/recruteur/home']);
    },
    error: err => {
      this._snackBar.open(err, "Close", {
        duration: 2000
      });
    }})
  }

  modifyBoulot(){
    this.boulotService.update(this.ajoutboulot,this.id).subscribe({
      next: res => {
      this._snackBar.open("Succes", "Close", {
        duration: 1000
      });
      console.log("Boulot :",res)
      this.router.navigate(['/recruteur/home']);
    },
    error: err => {
      this._snackBar.open(err, "Close", {
        duration: 2000
      });
    }})
  }
  getBoulot(id:any){
    this.boulotService.get(id).subscribe(
      {
        next: res =>{
          console.log("Bolot: ",res);
          this.ajoutboulot=res;
        },
        error: err =>{
          console.log(err);
        }
      }
    )
  }
}
