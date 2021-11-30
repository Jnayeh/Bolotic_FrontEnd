import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { io } from 'socket.io-client';
import { NotificationService } from 'src/app/api/notification.service';
import { RecruteurService } from 'src/app/api/recruteur.service';
import { TokenService } from 'src/app/api/token.service';
import { Notification } from 'src/app/models/notification';
import { Recruteur } from 'src/app/models/recruteur';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recruteur',
  templateUrl: './recruteur.component.html',
  styleUrls: ['./recruteur.component.css']
})
export class RecruteurComponent implements OnInit {

  private socket: any;
  public notifications: any[] = [];
  t: any;
  counter=0;
  recruteur = new Recruteur;
  constructor(
    private recruteurService: RecruteurService,
    private notifService: NotificationService,
    private tokenService: TokenService,
    private router: Router) {
    // Connect Socket with server URL
    this.socket = io(environment.baseUrl);
  }

  ngOnInit(): void {
    this.t = this.tokenService.decodedToken();
    
    this.getRecruteur();
    this.getNotifications();
    this.socket.on('notification', (notification: any) => {
      if(notification.to==this.t.id){
        this.notifications.push(notification);
        this.counter++;
        
      }
      

    });
  }

  public getRecruteur(): void {

    this.recruteurService.get(this.t.id).subscribe(
      (res) => {
        this.recruteur = res;

        console.log(this.recruteur);
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }
  getNotifications() {
    this.notifService.getAllRecruteurNotif(this.t.id).subscribe(
      {
        next: (res: Notification[]) => {
          res.forEach(n=>{
            if(n.to ==this.t.id){
              this.notifications.push(n);
              if (!n.read){
                this.counter++;
              }
            }
          });
        },
        error: err => {
          console.log(err)
        }
      }
    )
  }
  logOut(){
    this.tokenService.logOut();
    
    this.router.navigate(['/LogIn']);
  }
}
