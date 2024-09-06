import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from '../../Models/loginresponse';
import { LoginService } from '../../services/login.service';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = null!;
  invalidLogin: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  validateControl(input: string) {
    return ValidationService.validateControl(this.loginForm, input);
  }

  validateControlError(input: string, errorType: string) {
    return ValidationService.validateControlError(this.loginForm, input, errorType);
  }

  onLogin() {
    const { username, password } = this.loginForm.value;

    this.loginService.login(username, password).subscribe({
      next: (response: LoginResponse) => {
        if (response.value.token) {
          this.invalidLogin = false;
          console.log('Login successful', response);

          // Store the token
          localStorage.setItem('token', response.value.token);

          const roles = response.value.roles;

          if (roles.includes('Admin')) {
            this.router.navigate(['/dashboard/admindashboard']);
            console.log('User is an Admin');
          } 
          else if (roles.includes('User')) {
            console.log('User is an Resident');
          } 
        } 
        else {
          this.invalidLogin = true;  // Handle unexpected cases
        }
      },
      error: (error) => {
        this.invalidLogin = true;
        console.error('Login failed', error);
      }
    });
  }
}