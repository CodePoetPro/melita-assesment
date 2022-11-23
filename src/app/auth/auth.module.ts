import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthModuleRouting } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthModuleRouting,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,  
    MatInputModule
  ],
  providers : [CookieService]
})
export class AuthModule { }
