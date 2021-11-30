import { Component, OnInit } from '@angular/core';
import { BoulotService } from 'src/app/api/boulot.service';
import { Boulot } from 'src/app/models/boulot';
@Component({
  selector: 'app-home-etudiant',
  templateUrl: './home-etudiant.component.html',
  styleUrls: ['./home-etudiant.component.css']
})
export class HomeEtudiantComponent implements OnInit {
  boulots: Boulot[]=[];

  constructor( private boulotService: BoulotService) {
  }

  ngOnInit(): void {
    this.getBoulots();
  }
  getBoulots(){
    this.boulotService.getAll().subscribe({
      next: res=>{
        this.boulots=res;
      },
      error:err=>{
        console.log(err);
      }
    })
  }
}
