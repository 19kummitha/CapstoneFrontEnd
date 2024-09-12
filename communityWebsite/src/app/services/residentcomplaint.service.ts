import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Complaint } from "../Models/Complaint";

@Injectable({
    providedIn: 'root'
  })
  export class ResidentcomplaintService {
    private apiUrl = 'http://localhost:5114/resident/complaints';
  
    constructor(private http: HttpClient) { }
  
    getComplaintsByResident(): Observable<Complaint[]> {
        const token=localStorage.getItem('token');
        const headers=new HttpHeaders().set('Authorization',`Bearer ${token}`);
        return this.http.get<Complaint[]>(this.apiUrl,{headers});
    }
  }