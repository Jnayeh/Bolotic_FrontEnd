import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContratService } from 'src/app/api/contrat.service';
import { Contrat } from 'src/app/models/contrat';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {

  constructor(
    private contratService: ContratService,
    private route: ActivatedRoute) { }
  id : any;
  contrats: Contrat[]=[];
  rejected_contrats: Contrat[]=[];
  ngOnInit(): void {
    this.id= this.route.snapshot.params['boulot_id'];
    if(this.id){
      this.getContrats(this.id);
    }
  }

  getContrats(id :any){
    this.contratService.getAllbyBoulotId(id).subscribe({
      next: (res:Contrat[]) => {
        this.contrats=[];
        res.forEach(c=>{
          if(c.status=="accepted" || c.status=="non selected"){
            this.contrats.push(c);
          }
          else{
            this.rejected_contrats.push(c);
          }
        })
      },
      error: err => {
        console.log(err);
      }
    })
  }

  accept(contrat:any, id: any){

    this.contratService.accept(contrat,id).subscribe({
      next: _res => {
        this.getContrats(this.id);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  reject(contrat:any, id: any){

    this.contratService.reject(contrat,id).subscribe({
      next: _res => {
        this.getContrats(this.id);
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
