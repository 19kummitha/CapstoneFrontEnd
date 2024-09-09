import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventDto } from '../Models/eventDto';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl = 'http://localhost:5114/getevents';
  private apiUrl1='http://localhost:5114/createevent';
  private apiUrl2='http://localhost:5114/deleteevent'

  constructor(private http: HttpClient) { }

  createEvent(event: EventDto): Observable<EventDto> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<EventDto>(this.apiUrl1, event, { headers });
  }

  getEvents(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(this.apiUrl, { headers });
  }

  deleteEvent(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<any>(`${this.apiUrl2}/${id}`, { headers });
  }
}
