import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BoulotService } from 'src/app/api/boulot.service';
import { Boulot } from 'src/app/models/boulot';

@Component({
  selector: 'app-home-recruteur',
  templateUrl: './home-recruteur.component.html',
  styleUrls: ['./home-recruteur.component.css']
})
export class HomeRecruteurComponent implements OnInit {

  constructor(private boulotService: BoulotService) { }
  boulots:any={};

  ngOnInit(): void {
    this.getBoulots();
  }
  public getBoulots(): void{
    this.boulotService.getAll().subscribe(
      (response: Boulot[])=>{
        this.boulots = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message)
      }
    );
  }


  deleteBoulot(x:number){
    this.boulotService.delete(x).subscribe(
      ()=>{
        this.boulotService.getAll().subscribe(
          (data)=>{
            this.boulots= data;
          }
        );
      }
    );
  }

}
