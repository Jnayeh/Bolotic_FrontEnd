import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BoulotService } from 'src/app/api/boulot.service';
import { TokenService } from 'src/app/api/token.service';
import { Boulot } from 'src/app/models/boulot';

@Component({
  selector: 'app-home-recruteur',
  templateUrl: './home-recruteur.component.html',
  styleUrls: ['./home-recruteur.component.css']
})
export class HomeRecruteurComponent implements OnInit {

  constructor(private boulotService: BoulotService,
    private tokenService: TokenService) { }
  boulots: any= [];

  ngOnInit(): void {
    this.getBoulots();
  }
  public getBoulots(): void {
    const t = this.tokenService.decodedToken();
    this.boulotService.getAllbyId(t.id).subscribe(
      (response: Boulot[]) => {
        this.boulots = response;
        console.log(this.boulots);
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }


  deleteBoulot(x: number) {
    this.boulotService.delete(x).subscribe(
      () => {
        this.boulotService.getAll().subscribe(
          (data) => {
            this.boulots = data;
          }
        );
      }
    );
  }

}
