import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Recruteur } from 'src/app/models/recruteur';
import { RecruteurService } from 'src/app/api/recruteur.service';

@Component({
  selector: 'app-consultrecruteur',
  templateUrl: './consultrecruteur.component.html',
  styleUrls: ['./consultrecruteur.component.css']
})
export class ConsultrecruteurComponent implements OnInit {

  constructor(private RecruteurService: RecruteurService,private _snackBar: MatSnackBar) { }

  recruteurs :Recruteur[]=[];
  ngOnInit(): void {
    this.RecruteurService.getAll().subscribe(
      {
        next: res => {
          this.recruteurs = res
        }, error:
          err => {
            this._snackBar.open(err.error, "Close", {
              duration: 2000
            });
          }
      });  
  }
}
