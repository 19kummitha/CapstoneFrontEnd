import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-residentlogin',
  templateUrl: './residentlogin.component.html',
  styleUrl: './residentlogin.component.css'
})
export class ResidentloginComponent {
  username: string = '';
  password: string = '';
  constructor(private router: Router,private loginService:LoginService) { }

  onSubmit() {
    this.router.navigate(['/login']);
}
onLogin() {
  this.loginService.login(this.username, this.password).subscribe({
    next: (response) => {
      console.log('Login successful', response);
      localStorage.setItem('token', response.token);
    },
    error: (error) => {
      console.error('Login failed', error);
    }
  });
}
}
