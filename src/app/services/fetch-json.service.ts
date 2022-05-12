import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Quote } from '../model/api';

@Injectable({
  providedIn: 'root',
})
export class FetchJsonService {
  private apiUrl = 'https://catfact.ninja/fact';

  constructor(private http: HttpClient) {}

  getJson(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.apiUrl);
  }
}
