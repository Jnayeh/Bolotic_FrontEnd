import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

import { BoulotService } from 'src/app/api/boulot.service';
import { ContratService } from 'src/app/api/contrat.service';
import { NotificationService } from 'src/app/api/notification.service';
import { SignalerService } from 'src/app/api/signaler.service';
import { TokenService } from 'src/app/api/token.service';
import { Boulot } from 'src/app/models/boulot';
import { Contrat } from 'src/app/models/contrat';
import { Signaler } from 'src/app/models/signaler';



@Component({
  selector: 'app-signalerrecruteur',
  templateUrl: './signalerrecruteur.component.html',
  styleUrls: ['./signalerrecruteur.component.css']
})
export class SignalerrecruteurComponent implements OnInit {

  constructor( private boulotService: BoulotService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private contratService: ContratService,
    private tokenService: TokenService,
    private signalerService: SignalerService) { }

    boulot = new Boulot();
    contrat = new Contrat();
    signaler = new Signaler();
    test = new Signaler;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.getBoulot(id);
  }

  getBoulot(id: any) {
    this.boulotService.get(id).subscribe(
      {
        next: res => {
          console.log("Bolot: ", res);
          this.boulot = res;
        },
        error: err => {
          console.log(err);
        }
      }
    )
  }
  
  Signaler(){
    this.signaler.etudiant = this.tokenService.decodedToken().id;
    this.signaler.recruteur= this.boulot.recruteur;
    this.signaler.description=this.test.description;

    this.signalerService.add(this.signaler).subscribe({
      next: _cont => {

        console.log(_cont);
  
              // Send notification create     
      },
      error: err => {
        console.log(err);
      }
    })

}
}
