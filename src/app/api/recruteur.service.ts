import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recruteur } from '../models/recruteur';
@Injectable({
  providedIn: 'root'
})

export class RecruteurService {
  private url = environment.baseUrl;
  constructor(
    private httpClient: HttpClient,
  ) { }


  // Return list of recruiters
  public getAll(): Observable<any> {
    return this.httpClient.get<Recruteur[]>(this.url + '/recruteurs');
  }

  // Return list of recruiters
  public get(id: any): Observable<any> {
    return this.httpClient.get<Recruteur>(this.url + '/recruteur/' + id);
  }

  // enters Recruiter object
  // Return Token
  public logIn(recruteur: Recruteur): Observable<any> {
    return this.httpClient.post(this.url + '/loginRecruteur', recruteur);
  }

  // enters Formdat object
  // Return Token
  public register(recruteur: FormData): Observable<any> {
    return this.httpClient.post(this.url + '/registerRecruteur', recruteur);
  }

  // enters Formdat object
  // Return Recruiter object
  public update(recruteur: FormData, id: any): Observable<any> {
    return this.httpClient.put(this.url + '/recruteurs/update/' + id, recruteur);
  }

  // Return success message
  public delete(id: any): Observable<any> {
    return this.httpClient.delete(this.url + '/recruteurs/delete/' + id);
  }
}
