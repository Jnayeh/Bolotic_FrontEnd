import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Etudiant } from '../models/etudiant';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})

export class EtudiantService {
  private url = environment.baseUrl;
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
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
    return this.httpClient.post(this.url + '/loginEtudiant', etudiant).pipe(map((token: any) => {
      // store jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('token', token);
      this.tokenService.nextToken(token);
      return token;
    }));
  }

  // enters Formdat object
  // Return Token
  public register(etudiant: FormData): Observable<any> {
    return this.httpClient.post(this.url + '/registerEtudiant', etudiant).pipe(map((token: any) => {
      // store jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('token', token);
      this.tokenService.nextToken(token);
      return token;
    }));
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