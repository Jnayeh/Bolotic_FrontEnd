import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from '../models/etudiant';
@Injectable({
  providedIn: 'root'
})

export class EtudiantService {
  private url = environment.baseUrl;
  constructor(
    private httpClient: HttpClient,
  ) { }


  // Return list of recruiters
  public getAll(): Observable<any> {
    return this.httpClient.get<Etudiant[]>(this.url + '/etudiants');
  }

  // Return list of recruiters
  public get(id: any): Observable<any> {
    return this.httpClient.get<Etudiant>(this.url + '/etudiant/' + id);
  }

  // enters Recruiter object
  // Return Token
  public logIn(etudiant: Etudiant): Observable<any> {
    return this.httpClient.post(this.url + '/loginEtudiant', etudiant);
  }

  // enters Formdat object
  // Return Token
  public register(etudiant: FormData): Observable<any> {
    return this.httpClient.post(this.url + '/registerEtudiant', etudiant);
  }

  // enters Formdat object
  // Return Recruiter object
  public update(etudiant: FormData, id: any): Observable<any> {
    return this.httpClient.put(this.url + '/etudiants/update/' + id, etudiant);
  }

  // Return success message
  public delete(id: any): Observable<any> {
    return this.httpClient.delete(this.url + '/etudiants/delete/' + id);
  }
}