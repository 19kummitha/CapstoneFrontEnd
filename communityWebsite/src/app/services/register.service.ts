import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../Models/loginresponse';
import { RegisterResponse } from '../Models/registerresponse';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl='http://localhost:5001/api/auth/register-admin';
  constructor(private http:HttpClient) { }
  register(username: string, password: string,email:string,fullname:string,flatnumber:string): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.apiUrl, { username, password ,email});
  }
}
