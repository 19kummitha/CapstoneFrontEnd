import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../../services/login.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrl: './adminheader.component.css'
})
export class AdminheaderComponent {
  constructor(private router: Router, private loginService: LoginService) {}
  logout() {
  
    // Clear the token from localStorage
    localStorage.removeItem('token');
    
    // Optionally, clear any other user-specific data
    // this.loginService.clearUserData(); // If you have such a method

    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
