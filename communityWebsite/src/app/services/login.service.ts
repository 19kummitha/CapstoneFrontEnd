import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap, catchError } from 'rxjs';
import { LoginResponse } from '../Models/loginresponse';
import { LoginUser } from '../Models/LoginUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:5001/api/auth/login'; 
  private role: string | null = null; // Ensure role is null initially

  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token'); // assuming you're using localStorage for token
    return token !== null;
  }

  // Method to handle user login
  login(credentials: LoginUser): Observable<LoginResponse> {
    localStorage.getItem('token')
    return this.http.post<LoginResponse>(this.baseUrl,credentials)
      .pipe(
        tap(response => this.handleLoginSuccess(response)),
        catchError(this.handleError)
      );
  }


  logout(): void {
    localStorage.removeItem('token');
  }

  
  private handleLoginSuccess(response: LoginResponse): void {
    if (response?.value?.token) {
      localStorage.setItem('token', response.value.token); 
      this.role = response.value.roles[0] || null; // Handle roles safely
      this.redirectBasedOnRole(this.role); 
    }
  }


  private handleError(error: any): Observable<never> {
    // Implement your error handling logic here
    console.error('Login failed', error);
    // Optionally, you might want to display a user-friendly message
    throw error; // Rethrow or return an appropriate Observable
  }

  getUserRoleFromToken(token:string): string | null {
    return this.role;
  }

  private redirectBasedOnRole(role: string | null): void {
    if (!role) {
      this.router.navigate(['/login']);
      return;
    }

    switch (role) {
      case 'Admin':
        this.router.navigate(['/admindashboard']);
        break;
      case 'ServceProvider':
        this.router.navigate(['/serviceproviderdashboard']);
        break;
      case 'User':
        this.router.navigate(['/residentdashboard']);
        break;
      default:
        this.router.navigate(['/login']);
    }
  }
}
