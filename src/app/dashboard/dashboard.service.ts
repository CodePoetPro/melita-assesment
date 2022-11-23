import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { AuthService } from '../auth/auth.service';

environment
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  baseUrl = environment.baseUrl;
  
  constructor(private httpClient : HttpClient, private authService : AuthService) { }

  getOffers(){
    return this.httpClient.get(`${this.baseUrl}/offers`, {headers : {
      'Authorization' : `Bearer ${this.authService.getToken()}`
    }})
  }
}
