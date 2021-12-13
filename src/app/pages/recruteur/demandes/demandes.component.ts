import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoulotService } from 'src/app/api/boulot.service';
import { ContratService } from 'src/app/api/contrat.service';
import { NotificationService } from 'src/app/api/notification.service';
import { TokenService } from 'src/app/api/token.service';
import { Boulot } from 'src/app/models/boulot';
import { Contrat } from 'src/app/models/contrat';
import { Notification } from 'src/app/models/notification';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {

  constructor(
    private boulotService: BoulotService,
    private contratService: ContratService,
    private notificationService: NotificationService,
    private tokenService: TokenService,
    private route: ActivatedRoute) { }
  id: any;
  contrats: Contrat[] = [];
  boulot = new Boulot();
  rejected_contrats: Contrat[] = [];
  ngOnInit(): void {
    this.id = this.route.snapshot.params['boulot_id'];
    if (this.id) {
      this.getContrats(this.id);
      this.getBoulot(this.id);
    }
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

  getContrats(id: any) {
    this.contratService.getAllbyBoulotId(id).subscribe({
      next: (res: Contrat[]) => {
        this.contrats = [];
        res.forEach(c => {
          if (c.status == "accepted" || c.status == "non selected") {
            this.contrats.push(c);
          }
          else {
            this.rejected_contrats.push(c);
          }
        })
      },
      error: err => {
        console.log(err);
      }
    })
  }

  accept(contrat: any, id: any) {

    this.contratService.accept(contrat, id).subscribe({
      next: _res => {
        this.getContrats(this.id);

        // Creation notification
        var _notif = new Notification();
        _notif.etudiant = _res.etudiant;
        _notif.recruteur = this.tokenService.decodedToken().id;
        _notif.to = _notif.etudiant;
        _notif.titre = "Demande acceptée";
        _notif.notification = "Votre demande pour " + this.boulot.titre+" a été accepter";

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
    });
  }
  reject(contrat: any, id: any) {

    this.contratService.reject(contrat, id).subscribe({
      next: _res => {
        this.getContrats(this.id);

        // Creation notification
        var _notif = new Notification();
        _notif.etudiant = _res.etudiant;
        _notif.recruteur = this.tokenService.decodedToken().id;
        _notif.to = _notif.etudiant;
        _notif.titre = "Demande rejetée";
        _notif.notification = "Votre demande pour " + this.boulot.titre+" a été rejeter";

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
    });
  }

}
