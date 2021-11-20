import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Boulot } from '../models/boulot';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjoutboulotService {
  private url = environment.baseUrl;
  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAll(): Observable<any> {
    return this.httpClient.get<Boulot[]>(this.url + '/recruteur/home');
  }

  public get(id: any): Observable<any> {
    return this.httpClient.get<Boulot>(this.url + '/recruteur/home' + id);
  }

    // enters Formdat object
  // Return Token
  public register(boulot: FormData): Observable<any> {
    return this.httpClient.post(this.url + '/recruteur/home', boulot);
  }

  // enters Formdat object
  // Return Recruiter object
  public update(boulot: FormData, id: any): Observable<any> {
    return this.httpClient.put(this.url + '/recruteurs/bolot/modifier/' + id, boulot);
  }

  // Return success message
  public delete(id: any): Observable<any> {
    return this.httpClient.delete(this.url + '/recruteurs/bolot/modifier' + id);
  }

}
