import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-residentlogin',
  templateUrl: './residentlogin.component.html',
  styleUrl: './residentlogin.component.css'
})
export class ResidentloginComponent {
  username: string = '';
  password: string = '';
  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) { }


  loginForm: FormGroup = null!;

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  validateControl(input: string) {
    return ValidationService.validateControl(this.loginForm, input);
  }

  validateControlError(input: string, errorType: string) {
    return ValidationService.validateControlError(this.loginForm, input, errorType);
  }

  onLogin() {
    this.username=this.loginForm.get('username')?.value;
    this.password=this.loginForm.get('password')?.value;
    this.loginService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log(this.loginForm.value);
        console.log('Login successful', response);
        localStorage.setItem('token', response.token);
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    });
  }
}
