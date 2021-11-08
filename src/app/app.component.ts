import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Etudiant} from './etudiant';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Bolotic FrontEnd';
  etudiants:Etudiant[] =[];
  constructor(
    private httpClient: HttpClient,
    ) { }
  async ngOnInit(){
    await this.getAll().subscribe(res=>{
      this.etudiants=res;
      console.log(this.etudiants);
    },err=>{
      console.log(err);
    });
  }
  public getAll(): Observable<any>{
    return this.httpClient.get<Etudiant[]>('http://localhost:3000' + '/etudiants');
  }
  
}
