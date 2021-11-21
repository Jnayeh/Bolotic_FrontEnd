import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Recruteur } from '../models/recruteur';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})

export class RecruteurService {
  private url = environment.baseUrl;
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
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
    return this.httpClient.post(this.url + '/loginRecruteur', recruteur).pipe(map((token: any) => {
      // store jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('token', token);
      this.tokenService.nextToken(token);
      return token;
    }));
  }

  // enters Formdat object
  // Return Token
  public register(recruteur: FormData): Observable<any> {
    return this.httpClient.post(this.url + '/registerRecruteur', recruteur).pipe(map((token: any) => {
      // store jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('token', token);
      this.tokenService.nextToken(token);
      return token;
    }));
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
