import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from '../Models/Complaint';

@Injectable({
  providedIn: 'root'
})
export class ViewcomplaintService {
  private apiUrl='http://localhost:5114/admin/complaints/'
  constructor(private http:HttpClient) { }
  getComplaints(residentId?: string): Observable<Complaint[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = residentId ? `${this.apiUrl}/${residentId}` : this.apiUrl;
    return this.http.get<Complaint[]>(url, { headers });
  }
}
