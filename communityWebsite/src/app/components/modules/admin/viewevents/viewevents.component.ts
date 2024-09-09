import { Component } from "@angular/core";
import { catchError, of } from "rxjs";
import { Event } from "../../../../Models/Event";
import { EventsService } from "../../../../services/events.service";

@Component({
  selector: 'app-viewevents',
  templateUrl: './viewevents.component.html',
  styleUrl: './viewevents.component.css'
})
export class VieweventsComponent {
  events:Event[]=[];

  currentDate: Date = new Date();
  selectedDate: Date | null = null;
  calendar: (Date | null)[][] = [];
  selectedTasks: Event[] = [];
  error:string|null=null;

  constructor(private eventService:EventsService) {}

  ngOnInit(): void {
    this.generateCalendar();
    this.getAllEvents();
  }

  getAllEvents(){
    this.eventService.getEvents().subscribe((data:Event[])=>{
      this.events=data;
    })
  }
  deleteEvent(id: number): void {
    this.eventService.deleteEvent(id).pipe(
      catchError((error) => {
        console.error('Error deleting resident:', error);
        this.error = 'Failed to delete resident. Please try again later.';
        return of(void 0);
      })
    ).subscribe(() => {
      // Remove the deleted resident from the local list
      this.events = this.events.filter(event => event.id !== id);
    });
  }
  generateCalendar(): void {
    const firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const lastDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
    
    let currentWeek: (Date | null)[] = [];
    this.calendar = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
      currentWeek.push(null);
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      currentWeek.push(new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day));
      
      if (currentWeek.length === 7) {
        this.calendar.push(currentWeek);
        currentWeek = [];
      }
    }

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      this.calendar.push(currentWeek);
    }
  }

  selectDate(date: Date | null): void {
    if (date) {
      this.selectedDate = date;
      this.selectedTasks = this.events.filter(event => 
        new Date(event.date).toDateString() === date.toDateString()
      );
    } else {
      this.selectedDate = null;
      this.selectedTasks = [];
    }
  }

  prevMonth(): void {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    this.generateCalendar();
  }

  nextMonth(): void {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    this.generateCalendar();
  }

  isToday(date: Date | null): boolean {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }

  isSelected(date: Date | null): boolean {
    if (!date || !this.selectedDate) return false;
    return date.toDateString() === this.selectedDate.toDateString();
  }

  hasTasks(date: Date | null): boolean {
    if (!date) return false;
    return this.events.some(event => new Date(event.date).toDateString() === date.toDateString());
  }

}
