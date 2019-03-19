import { UserData } from './userData';
import { TokenData } from './tokendata';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  getToken(userData: UserData) {
    const url = 'http://localhost:8080/oauth/token';
    // tslint:disable-next-line:no-var-keyword
    let getTokenParam: HttpParams = new HttpParams();
    getTokenParam = getTokenParam.append('grant_type', 'password');
    getTokenParam = getTokenParam.append('username', userData.username);
    getTokenParam = getTokenParam.append('password', userData.password);

    const getTokenHeaders: HttpHeaders = new HttpHeaders()
      .append('Authorization', 'Basic ' + btoa('client:secret'));

    return this.http.post<TokenData>(url, { withCredentials: true },
      { headers: getTokenHeaders, params: getTokenParam });
  }
}
