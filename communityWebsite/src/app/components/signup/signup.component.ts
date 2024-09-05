import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  constructor(private fb: FormBuilder,private router: Router, private loginService: RegisterService) { }

  registerForm: FormGroup = null!;

  ngOnInit() {
    this.registerForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword:['']
    },
    { validator: ValidationService.passwordMatchValidator }
    );
  }
  validateControl(input: string) {
    return ValidationService.validateControl(this.registerForm, input);
  }

  validateControlError(input: string, errorType: string) {
    return ValidationService.validateControlError(this.registerForm, input, errorType);
  }

  onLogin() {
    this.username=this.registerForm.get('username')?.value;
    this.password=this.registerForm.get('password')?.value;
    this.email=this.registerForm.get('email')?.value;
    this.loginService.register(this.username, this.password, this.email).subscribe({
      next: (response) => {
        console.log('Register successful', response);
      },
      error: (error) => {
        console.error('Registration failed', error);
      }
    });
  }
}
