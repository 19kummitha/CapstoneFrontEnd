import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../Models/loginresponse';
import { RegisterResponse } from '../Models/registerresponse';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl='http://localhost:5001/api/auth/register';
  constructor(private http:HttpClient) { }
  register(username: string, passwordHash: string,email:string,fullname:string,flatnumber:string): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.apiUrl, { username, passwordHash ,email,flatnumber,fullname});
  }
}
