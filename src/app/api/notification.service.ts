import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notification } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {



  private url = environment.baseUrl;
  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAllEtudiantNotif(et_id: any): Observable<any> {
    return this.httpClient.get<Notification[]>(this.url + '/notifications/etudiant/' + et_id);
  }
  public getAllRecruteurNotif(rec_id: any): Observable<any> {
    return this.httpClient.get<Notification[]>(this.url + '/notifications/recruteur/' + rec_id);
  }


  // enters JSON FORM Notification
  // Return JSON FORM Notification
  public add(notification: Notification): Observable<any> {
    return this.httpClient.post(this.url + '/notifications/add', notification);
  }

  // enters JSON FORM Notification
  // Return JSON FORM Notification
  public send(notification: Notification ): Observable<any> {
    return this.httpClient.post(this.url + '/send_notification', notification);
  }
  // enters JSON FORM Notification
  // Return JSON FORM Notification
  public update(notification: Notification, id: any): Observable<any> {
    return this.httpClient.put(this.url + '/notifications/update/' + id, notification);
  }


}
