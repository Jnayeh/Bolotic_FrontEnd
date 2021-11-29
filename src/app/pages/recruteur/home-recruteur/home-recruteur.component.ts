import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BoulotService } from 'src/app/api/boulot.service';
import { RecruteurService } from 'src/app/api/recruteur.service';
import { TokenService } from 'src/app/api/token.service';
import { Boulot } from 'src/app/models/boulot';
import { Recruteur } from 'src/app/models/recruteur';

@Component({
  selector: 'app-home-recruteur',
  templateUrl: './home-recruteur.component.html',
  styleUrls: ['./home-recruteur.component.css']
})
export class HomeRecruteurComponent implements OnInit {

  constructor(private boulotService: BoulotService,
    private recruteurService: RecruteurService,
    private tokenService: TokenService,
    public sanitizer: DomSanitizer) { }
  boulots: any = [];
  recruteur = new Recruteur();

  ngOnInit(): void {
    this.getBoulots();
    this.getRecruteur();
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

  public safeUrlPic(urlPic: string): SafeUrl { 
    return this.sanitizer.bypassSecurityTrustResourceUrl(urlPic); 
  }
  
  public getRecruteur(): void {
    const t = this.tokenService.decodedToken();
    this.recruteurService.get(t.id).subscribe(
      (res) => {
        this.recruteur = res;
        this.recruteur.logo_societe = "localhost:3000/" + this.recruteur.logo_societe;
        this.safeUrlPic(this.recruteur.logo_societe);
        console.log(this.recruteur);
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
