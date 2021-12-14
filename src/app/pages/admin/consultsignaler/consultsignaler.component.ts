import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignalerService } from 'src/app/api/signaler.service';
import { Signaler } from 'src/app/models/signaler';

@Component({
  selector: 'app-consultsignaler',
  templateUrl: './consultsignaler.component.html',
  styleUrls: ['./consultsignaler.component.css']
})
export class ConsultsignalerComponent implements OnInit {

 

  constructor(private SignalerService : SignalerService, private _snackBar: MatSnackBar) { }

  signalers : Signaler[]=[];

  ngOnInit(): void {
    this.SignalerService.getAll().subscribe(
      {
        next: res => {
          this.signalers = res
        }, error:
          err => {
            this._snackBar.open(err.error, "Close", {
              duration: 2000
            });
          }
      });  
  }
}
