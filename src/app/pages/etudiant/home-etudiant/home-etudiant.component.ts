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
  initial_boulots: Boulot[]=[];
  boulot_nom= '';
  categories: string[] = [];

  constructor( private boulotService: BoulotService) {
  }

  ngOnInit(): void {
    
  this.categories = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    this.getBoulots();
  }
  getBoulots(){
    this.boulotService.getAll().subscribe({
      next: res=>{
        this.initial_boulots=res;
        this.boulots=res;
      },
      error:err=>{
        console.log(err);
      }
    })
  }
  chercher(){
    this.boulots= this.initial_boulots;
    if(this.boulot_nom.length>0){
      this.searchByName();
    }
  }
  searchByName(){
    var search: Boulot[] = [];
    var index = 0;
    //Search by offer name

    var mot = this.boulot_nom.toUpperCase();

      this.boulots.forEach((boulot) => {
        
        var upper_case_nom = boulot.titre.toUpperCase();
        console.log(upper_case_nom,":",mot);
        //Check if nom boulot existe
        if (upper_case_nom.indexOf(mot) !== -1) {
          //Checks if the boulot will be duplicated in the list
          if (search.indexOf(boulot) == -1) {
            search.push(boulot);
          }
        }

        var upper_case_description = boulot.description.toUpperCase();
        //Check if nom boulot existe
        if (upper_case_description.indexOf(mot) !== -1) {
          //Checks if the boulot will be duplicated in the list
          if (search.indexOf(boulot) == -1) {
            search.push(boulot);
          }
        }
      });
    this.boulots=search;
  }
}
