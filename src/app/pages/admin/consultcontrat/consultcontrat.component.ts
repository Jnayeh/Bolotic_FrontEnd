import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContratService } from 'src/app/api/contrat.service';
import { Contrat } from 'src/app/models/contrat';

@Component({
  selector: 'app-consultcontrat',
  templateUrl: './consultcontrat.component.html',
  styleUrls: ['./consultcontrat.component.css']
})
export class ConsultcontratComponent implements OnInit {

  constructor(private ContratService : ContratService, private _snackBar: MatSnackBar) { }

  contrats : Contrat[]=[];
  ngOnInit(): void {
    this.ContratService.getAll().subscribe(
      {
        next: res => {
          this.contrats = res
        }, error:
          err => {
            this._snackBar.open(err.error, "Close", {
              duration: 2000
            });
          }
      });  
  }

}
