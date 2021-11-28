import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Avis } from '../models/avis';

@Injectable({
  providedIn: 'root'
})
export class AvisService {



  private url = environment.baseUrl;
  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAll(): Observable<any> {
    return this.httpClient.get<Avis[]>(this.url + '/avis');
  }

  public get(id: any): Observable<any> {
    return this.httpClient.get<Avis>(this.url + '/avis/' + id);
  }

  public getAllRecruterAvis(id: any): Observable<any> {
    return this.httpClient.get<Avis[]>(this.url + '/avis/recruteur/' + id);
  }

  public getAllEtudiantAvis(id: any): Observable<any> {
    return this.httpClient.get<Avis[]>(this.url + '/avis/etudiant/' + id);
  }

  // enters JSON FORM Avis
  // Return JSON FORM Avis
  public add(avis: Avis): Observable<any> {
    return this.httpClient.post(this.url + '/avis/add', avis);
  }

  // enters JSON FORM Avis
  // Return JSON FORM Avis
  public update(avis: Avis, id: any): Observable<any> {
    return this.httpClient.put(this.url + '/avis/update/' + id, avis);
  }

  // Return success message
  public delete(id: any): Observable<any> {
    return this.httpClient.delete(this.url + '/avis/delete/' + id);
  }

}
