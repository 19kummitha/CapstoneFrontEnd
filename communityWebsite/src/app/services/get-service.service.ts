import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
  private apiUrl = 'http://localhost:5114/resident';
  constructor(private http: HttpClient) { }
  getAllResidents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateResident(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deleteResident(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

