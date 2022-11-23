import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, LoginResponse } from '../auth.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmitting = false;
  constructor(private authService : AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.isSubmitting = true;
      this.authService.postLogin(this._v()).subscribe((response:Partial<LoginResponse>)=>{
        this.authService.setToken(response.authToken!)
        this.isSubmitting = false;
      })
    }
  }
  _v() {
    return this.loginForm.value;
  }
}
