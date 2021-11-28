import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class categorieservice {

  private url = environment.baseUrl;
  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAll(): Observable<any> {
    return this.httpClient.get<Category[]>(this.url + '/categories');
  }

  public get(id: any): Observable<any> {
    return this.httpClient.get<Category>(this.url + '/categories/' + id);
  }

  // enters JSON FORM Category
  // Return JSON FORM Category
  public add(category: Category): Observable<any> {
    return this.httpClient.post(this.url + '/categories/add', category);
  }

  // enters JSON FORM Category
  // Return JSON FORM Category
  public update(category: Category, id: any): Observable<any> {
    return this.httpClient.put(this.url + '/categories/update/' + id, category);
  }

  // Return success message
  public delete(id: any): Observable<any> {
    return this.httpClient.delete(this.url + '/categories/delete/' + id);
  }

}
