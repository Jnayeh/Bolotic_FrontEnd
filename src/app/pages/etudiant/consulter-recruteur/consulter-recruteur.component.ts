import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruteurService } from 'src/app/api/recruteur.service';
import { Recruteur } from 'src/app/models/recruteur';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-consulter-recruteur',
  templateUrl: './consulter-recruteur.component.html',
  styleUrls: ['./consulter-recruteur.component.css']
})
export class ConsulterRecruteurComponent implements OnInit {


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
