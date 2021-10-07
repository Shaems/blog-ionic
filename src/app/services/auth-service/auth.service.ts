import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _URLroot = '/login'

  constructor(
    private api: ApiService,
  ) { }

  login(email, pass): Observable<Object>  {
    let body = {
      email: email,
      password: pass
    }
    return this.api.post<Token>(this._URLroot, body)
  }

}

export interface Token {
  token: string;
  token_type: string;
  expires_in: string;
}
