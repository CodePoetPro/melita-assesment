import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";

export interface LoginPayload {
  email : string;
  password : string;
}

export interface LoginResponse {
  authToken : string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  baseUrl = 'https://selfcare-service.test.melita.com/interview/backend/api';
  constructor( private httpClient : HttpClient, private cookieService : CookieService) { }
  postLogin({email,password}: LoginPayload){
      return this.httpClient.post(`${this.baseUrl}/login`, {email,password} );
  }

  setToken(token:string){
    this.cookieService.set('token', token)
  }

  getToken(){
    return this.cookieService.get('token')
  }
}
