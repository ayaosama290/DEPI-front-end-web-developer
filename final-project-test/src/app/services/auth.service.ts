import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://techs-experts.net/public/api'
  constructor(private http : HttpClient) { }

  register(obj : any):Observable<any>{
    return this.http.post(`${this.baseUrl}/client/customer_register`, obj)
  }

  login(obj : any):Observable<any>{
    return this.http.post(`${this.baseUrl}/client/customer_login`, obj)
  }
  getUserProfile():Observable<any>{
    return this.http.get(`${this.baseUrl}/client/profile`)
  }
}
