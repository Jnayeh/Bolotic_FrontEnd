import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Administrateur } from '../models/administrateur';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})

export class AdministrateurService {
  private url = environment.baseUrl;
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
  ) { }


  // Return list of recruiters
  public get(id: any): Observable<any> {
    return this.httpClient.get<Administrateur>(this.url + '/admin/' + id);
  }

  // enters Recruiter object
  // Return Token
  public logIn(administrateur: Administrateur): Observable<any> {
    return this.httpClient.post(this.url + '/loginAdmin', administrateur).pipe(map((token: any) => {
      // store jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('token', token);
      this.tokenService.nextToken(token);
      return token;
    }));
  }


  // enters Formdat object
  // Return Recruiter object
  public update(administrateur: FormData, id: any): Observable<any> {
    return this.httpClient.put(this.url + '/admins/update/' + id, administrateur);
  }

}