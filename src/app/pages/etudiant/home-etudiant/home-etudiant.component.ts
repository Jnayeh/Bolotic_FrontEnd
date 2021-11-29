import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home-etudiant',
  templateUrl: './home-etudiant.component.html',
  styleUrls: ['./home-etudiant.component.css']
})
export class HomeEtudiantComponent implements OnInit {

  private socket: any;
  public data: any[] = [];
  constructor() {
    // Connect Socket with server URL
    this.socket = io.connect(environment.baseUrl);
  }

  ngOnInit(): void {
    this.socket.on('notification', (data: any) => {

      this.data.push(data);

    });
  }

}
