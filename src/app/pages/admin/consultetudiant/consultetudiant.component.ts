import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EtudiantService } from 'src/app/api/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';

@Component({
  selector: 'app-consultetudiant',
  templateUrl: './consultetudiant.component.html',
  styleUrls: ['./consultetudiant.component.css']
})
export class ConsultetudiantComponent implements OnInit {

  constructor(private EtudiantService: EtudiantService,private _snackBar: MatSnackBar) { }

  etudiants : Etudiant[]=[];

  ngOnInit(): void {
    this.EtudiantService.getAll().subscribe(
      {
        next: res => {
          this.etudiants = res
        }, error:
          err => {
            this._snackBar.open(err.error, "Close", {
              duration: 2000
            });
          }
      });  
  }

}
