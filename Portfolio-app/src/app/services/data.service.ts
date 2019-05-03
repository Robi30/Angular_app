import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly param = new HttpParams().set('apiKey', environment.M_Lab.apiKey);
  constructor(private http: HttpClient) {}


    // Pobiera dane z API i zwraca jako Observable typu any.
  getData(id: string): Observable<any> {
    return this.http.get<any>(environment.M_Lab.databaseURL + id, { responseType: 'json', params: this.param });
  }

}
