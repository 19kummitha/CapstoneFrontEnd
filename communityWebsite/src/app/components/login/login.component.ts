import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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
    this.username = this.loginForm.get('username')?.value;
    this.password = this.loginForm.get('password')?.value;
    this.loginService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log(this.loginForm.value);
        console.log('Login successful', response);
        localStorage.setItem('token', response.value.token);
        const roles = response.value.roles;

        // Now you can use the roles array
        console.log('User roles:', roles);

        // Example of checking the roles
        if (roles.includes('Admin')) {
          this.router.navigate(['/dashboard/admindashboard']);
          console.log('User is an Admin');
        }

        if (roles.includes('User')) {
          console.log('User is a regular User');
        }

      },
      error: (error) => {
        console.error('Login failed', error);
      }
    });
  }
}
