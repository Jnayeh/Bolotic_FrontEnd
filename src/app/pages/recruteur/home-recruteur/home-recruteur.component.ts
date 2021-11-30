import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BoulotService } from 'src/app/api/boulot.service';
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
    private tokenService: TokenService,
    public sanitizer: DomSanitizer) { }
  boulots: any = [];
  recruteur = new Recruteur();

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

  public safeUrlPic(urlPic: string): SafeUrl { 
    return this.sanitizer.bypassSecurityTrustResourceUrl(urlPic); 
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
