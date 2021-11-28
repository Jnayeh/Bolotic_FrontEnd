import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Contrat } from '../models/contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratService {


  private url = environment.baseUrl;
  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAll(): Observable<any> {
    return this.httpClient.get<Contrat[]>(this.url + '/contrats');
  }

  
  public getAllbyBoulotId(id: any): Observable<any> {
    return this.httpClient.get<Contrat[]>(this.url + '/contrats/boulot/' + id);
  }

  public get(id: any): Observable<any> {
    return this.httpClient.get<Contrat>(this.url + '/contrat/' + id);
  }

  // enters JSON FORM contrat
  // Return JSON FORM contrat
  public add(contrat: Contrat): Observable<any> {
    return this.httpClient.post(this.url + '/contrats/add', contrat);
  }

  // enters JSON FORM contrat
  // Return JSON FORM contrat
  public update(contrat: Contrat, id: any): Observable<any> {
    return this.httpClient.put(this.url + '/contrats/update/' + id, contrat);
  }

  // Return success message
  public delete(id: any): Observable<any> {
    return this.httpClient.delete(this.url + '/contrats/delete/' + id);
  }

}
