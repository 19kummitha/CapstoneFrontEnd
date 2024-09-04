import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  email:string='';
  constructor(private router: Router,private loginService:RegisterService) { }

  onSubmit() {
    this.router.navigate(['/signup']);
}
onLogin() {
  this.loginService.register(this.username, this.password,this.email).subscribe({
    next: (response) => {
      console.log('Register successful', response);
    },
    error: (error) => {
      console.error('Registration failed', error);
    }
  });
}
}
