import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../../services/login.service';

@Component({
  selector: 'app-residentheader',
  templateUrl: './residentheader.component.html',
  styleUrl: './residentheader.component.css'
})
export class ResidentheaderComponent {
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
