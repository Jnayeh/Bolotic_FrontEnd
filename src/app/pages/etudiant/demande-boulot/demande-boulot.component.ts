import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BoulotService } from 'src/app/api/boulot.service';
import { Boulot } from 'src/app/models/boulot';


@Component({
  selector: 'app-demande-boulot',
  templateUrl: './demande-boulot.component.html',
  styleUrls: ['./demande-boulot.component.css']
})
export class DemandeBoulotComponent implements OnInit {


  constructor(private BoulotService:BoulotService, private _snackBar: MatSnackBar,private router: Router, private route: ActivatedRoute) { }

  boulot = new Boulot();

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.BoulotService.get(id).subscribe(
      {
        next: res => {
          this.boulot= res;
          console.log(this.boulot);
        }, error:
          err => {
            console.log(err);
            this._snackBar.open(err.error, "Close", {
              duration: 2000
            });
          }
      });  
    
    
  }
  
  DemandeBoulot(){

    this.BoulotService.add(this.boulot).subscribe(res => {
      this._snackBar.open("Succes", "Close", {
        duration: 1000
      });
      console.log("Boulot :",res)
      this.router.navigate(['/etudiant/profil']);
    }, err => {
      this._snackBar.open(err, "Close", {
        duration: 2000
      });
    })
  }

 

}
