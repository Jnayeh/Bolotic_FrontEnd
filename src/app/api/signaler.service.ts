import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contrat } from '../models/contrat';
import { Signaler } from '../models/signaler';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class SignalerService {

  private url = environment.baseUrl;
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
  ) { }

  public getAll(): Observable<any> {
    return this.httpClient.get<Signaler[]>(this.url + '/signalement');
  }

  public add(signaler : Signaler): Observable<any> {
    return this.httpClient.post(this.url + '/signalement/add', signaler);
  }
  
}
