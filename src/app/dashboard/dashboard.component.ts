import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private authService : AuthService){

  }

  themeColor  = '#00f260'

  logout(){
    this.authService.logout();
  }

}
