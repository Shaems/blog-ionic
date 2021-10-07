import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _URLprincipal = 'http://api.whit.com.ar:8065/api'

  constructor(
    private http: HttpClient,
  ) { }

  get<T>(path: string) {
    return this.http.get<T>(this._URLprincipal + path);
  }

  post<T>(path: string, body) {
    return this.http.post(this._URLprincipal + path, body);
  }

}
