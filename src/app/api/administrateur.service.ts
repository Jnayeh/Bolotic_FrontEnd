import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Administrateur } from '../models/administrateur';
@Injectable({
  providedIn: 'root'
})

export class AdministrateurService {
  private url = environment.baseUrl;
  constructor(
    private httpClient: HttpClient,
  ) { }


  // Return list of recruiters
  public get(id: any): Observable<any> {
    return this.httpClient.get<Administrateur>(this.url + '/administrateur/' + id);
  }

  // enters Recruiter object
  // Return Token
  public logIn(administrateur: Administrateur): Observable<any> {
    return this.httpClient.post(this.url + '/loginAdministrateur', administrateur);
  }


  // enters Formdat object
  // Return Recruiter object
  public update(administrateur: FormData, id: any): Observable<any> {
    return this.httpClient.put(this.url + '/administrateurs/update/' + id, administrateur);
  }

  // Return success message
  public delete(id: any): Observable<any> {
    return this.httpClient.delete(this.url + '/administrateurs/delete/' + id);
  }
}