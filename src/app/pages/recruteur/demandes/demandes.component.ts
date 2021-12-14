import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvisService } from 'src/app/api/avis.service';
import { BoulotService } from 'src/app/api/boulot.service';
import { ContratService } from 'src/app/api/contrat.service';
import { NotificationService } from 'src/app/api/notification.service';
import { TokenService } from 'src/app/api/token.service';
import { Avis } from 'src/app/models/avis';
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
    private aviService: AvisService,
    private notificationService: NotificationService,
    private tokenService: TokenService,
    private route: ActivatedRoute) { }
  id: any;
  contrats: Contrat[] = [];
  selected_contrat: any = null;
  boulot = new Boulot();
  avis = new Avis();
  list_avis: Avis[] = [];
  rejected_contrats: Contrat[] = [];
  ngOnInit(): void {
    this.id = this.route.snapshot.params['boulot_id'];
    if (this.id) {
      this.getContrats(this.id);
      this.getBoulot(this.id);
      var modal = document.getElementById("selected");
      if (modal) {
        console.log("not accepted");
        modal.style.display = "none";
      }
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
        this.rejected_contrats = [];
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
        _notif.notification = "Votre demande pour " + this.boulot.titre + " a été accepter";

        this.sendNotification(_notif);
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
        _notif.notification = "Votre demande pour " + this.boulot.titre + " a été rejeter";

        this.sendNotification(_notif);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  select(cntr: Contrat) {
    var modal = document.getElementById("selected");
    this.avis = new Avis();
    if (cntr.status == 'accepted') {
      this.selected_contrat = cntr;

      if (modal) {
        modal.style.display = "block";
      }
    }
    else {
      if (modal) {
        modal.style.display = "none";
      }

    }
  }
  sendAvis(cntr: Contrat) {
    this.avis.contrat = cntr._id;
    this.avis.etudiant = cntr.etudiant._id;
    this.avis.recruteur = this.boulot.recruteur._id;
    this.avis.to = this.avis.etudiant;
    this.aviService.add(this.avis).subscribe({
      next: _res => {
        // Creation notification
        var _notif = new Notification();
        _notif.etudiant = _res.etudiant;
        _notif.recruteur = this.tokenService.decodedToken().id;
        _notif.to = _notif.etudiant;
        _notif.titre = "Nouveau avis";
        _notif.notification = _res.avis;

        this.sendNotification(_notif);
        
      },
      error: err => {
        console.log(err);
      }
    })
  }
  getAvis() {
    this.aviService.getAll().subscribe({
      next: res => {
        this.list_avis = res;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  sendNotification(_notif: Notification){
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
  }
}
