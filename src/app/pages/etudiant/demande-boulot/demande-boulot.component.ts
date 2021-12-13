import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BoulotService } from 'src/app/api/boulot.service';
import { ContratService } from 'src/app/api/contrat.service';
import { NotificationService } from 'src/app/api/notification.service';
import { TokenService } from 'src/app/api/token.service';
import { Boulot } from 'src/app/models/boulot';
import { Contrat } from 'src/app/models/contrat';
import { Notification } from 'src/app/models/notification';


@Component({
  selector: 'app-demande-boulot',
  templateUrl: './demande-boulot.component.html',
  styleUrls: ['./demande-boulot.component.css']
})
export class DemandeBoulotComponent implements OnInit {


  constructor(
    private boulotService: BoulotService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private contratService: ContratService,
    private tokenService: TokenService) { }



  boulot = new Boulot();
  contrat = new Contrat();
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

  demande() {
    this.contrat.etudiant = this.tokenService.decodedToken().id;
    this.contrat.boulot = this.boulot._id;

    //Demande contrat
    this.contratService.add(this.contrat).subscribe({
      next: _cont => {

        console.log(_cont);

        // Creation notification
        var _notif = new Notification();
        _notif.etudiant=_cont.etudiant;
        _notif.recruteur= this.boulot.recruteur._id;
        _notif.to= _notif.recruteur;
        _notif.titre= "Nouveau demande ";
        _notif.notification = "Demande pour "+ this.boulot.titre;
        
        this.notificationService.add(_notif).subscribe(
          {
            next: added_notif => {
              console.log(added_notif);
              // Send notification created
              this.notificationService.send(added_notif).subscribe(
                {
                  next: sent_notif => {
                    console.log(sent_notif);
                  },
                  error: err => {
                    console.log(err);
                  }
                }
              )
            },
            error: err => {
              console.log(err);
            }
            
          }
        )
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
