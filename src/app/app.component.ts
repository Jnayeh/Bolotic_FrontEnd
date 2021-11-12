import { Component } from '@angular/core';
import { RecruteurService } from './api/recruteur.service';
import { Recruteur } from './models/recruteur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bolotic-FrontEnd';
   rec = new Recruteur;
  constructor( public recruiterService: RecruteurService){

  }
  ngOnInit(): void {
    this.recruiterService.get("618d92643a5ac3d13481602c").subscribe((data) => {
      this.rec=data;
    },
    (err) => {
      console.log(err);
    })
  }
}
