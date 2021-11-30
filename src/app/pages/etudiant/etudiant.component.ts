import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { io } from 'socket.io-client';
import { EtudiantService } from 'src/app/api/etudiant.service';
import { NotificationService } from 'src/app/api/notification.service';
import { TokenService } from 'src/app/api/token.service';
import { Etudiant } from 'src/app/models/etudiant';
import { Notification } from 'src/app/models/notification';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  constructor(
    private etudiantService: EtudiantService,
    private notifService: NotificationService,
    private tokenService: TokenService,
    private router: Router
  ) { 
    // Connect Socket with server URL
    this.socket = io(environment.baseUrl);
  }

  private socket: any;
  public notifications: any[] = [];
  t: any;
  counter=0;
  etudiant = new Etudiant;
  ngOnInit(): void {
    this.t = this.tokenService.decodedToken();
    
    this.getetudiant();
    this.getNotifications();
    this.socket.on('notification', (notification: any) => {
      if(notification.to==this.t.id){
        this.notifications.push(notification);
        this.counter++;
        
      }
      

    });
  }




  public getetudiant(): void {

    this.etudiantService.get(this.t.id).subscribe(
      (res) => {
        this.etudiant = res;

        console.log(this.etudiant);
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }
  getNotifications() {
    this.notifService.getAllEtudiantNotif(this.t.id).subscribe(
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


