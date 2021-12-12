import { Component, OnInit } from '@angular/core';
import { BoulotService } from 'src/app/api/boulot.service';
import { categorieservice } from 'src/app/api/category.service';
import { Boulot } from 'src/app/models/boulot';
import { Category } from 'src/app/models/category';
@Component({
  selector: 'app-home-etudiant',
  templateUrl: './home-etudiant.component.html',
  styleUrls: ['./home-etudiant.component.css']
})
export class HomeEtudiantComponent implements OnInit {
  boulots: Boulot[]=[];
  initial_boulots: Boulot[]=[];
  boulot_nom= '';
  categories: Category[] = [];
  selected_categories: String[] = [];

  constructor( 
    private boulotService: BoulotService,
    private categorieService: categorieservice) {
  }

  ngOnInit(): void {
    
  
    this.getBoulots();
    this.getCategories();
  }

  changed(){
    console.log(this.selected_categories);
  }

  getCategories(){
    this.categorieService.getAll().subscribe({
      next: res=>{
        this.categories=res;
      },
      error:err=>{
        console.log(err);
      }
    });
  }

  getBoulots(){
    this.boulotService.getAll().subscribe({
      next: res=>{
        this.initial_boulots=res;
        this.boulots=res;
        console.log(res);
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
    
    if(this.selected_categories.length>0){
      this.searchByCategorie();
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
        //Check if description boulot existe
        if (upper_case_description.indexOf(mot) !== -1) {
          //Checks if the boulot will be duplicated in the list
          if (search.indexOf(boulot) == -1) {
            search.push(boulot);
          }
        }
      });
    this.boulots=search;
  }
  searchByCategorie(){
    var search: Boulot[] = [];
    var index = 0;

    //Search by boulot categorie
    this.selected_categories.forEach(cat =>{

      this.boulots.forEach((boulot) => {
        
        //Check if nom boulot existe
        if (boulot.category == cat) {
          //Checks if the boulot will be duplicated in the list
          if (search.indexOf(boulot) == -1) {
            search.push(boulot);
          }
        }
      });
    })

      
    this.boulots=search;
  }
}
