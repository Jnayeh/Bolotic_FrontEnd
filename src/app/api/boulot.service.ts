import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Boulot } from '../models/boulot';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoulotService {
  private url = environment.baseUrl;
  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAll(): Observable<any> {
    return this.httpClient.get<Boulot[]>(this.url + '/boulots');
  }

  
  public getAllbyId(id: any): Observable<any> {
    return this.httpClient.get<Boulot[]>(this.url + '/boulots/recruteur/' + id);
  }

  public get(id: any): Observable<any> {
    return this.httpClient.get<Boulot>(this.url + '/boulot/' + id);
  }

  // enters JSON FORM BOULOT
  // Return JSON FORM BOULOT
  public add(boulot: Boulot): Observable<any> {
    return this.httpClient.post(this.url + '/boulots/add', boulot);
  }

  // enters JSON FORM BOULOT
  // Return JSON FORM BOULOT
  public update(boulot: Boulot, id: any): Observable<any> {
    return this.httpClient.put(this.url + '/boulots/update/' + id, boulot);
  }

  // Return success message
  public delete(id: any): Observable<any> {
    return this.httpClient.delete(this.url + '/boulots/delete/' + id);
  }

}
