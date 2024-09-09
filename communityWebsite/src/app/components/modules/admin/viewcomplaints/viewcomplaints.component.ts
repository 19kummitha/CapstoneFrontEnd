import { Component, OnInit } from '@angular/core';
import { Complaint } from '../../../../Models/Complaint';
import { ViewcomplaintService } from '../../../../services/viewcomplaint.service';

@Component({
  selector: 'app-viewcomplaints',
  templateUrl: './viewcomplaints.component.html',
  styleUrl: './viewcomplaints.component.css'
})
export class ViewcomplaintsComponent implements OnInit {
  complaints: Complaint[] = [];
  errorMessage:string='';
  residentId?:string;
  constructor(private complaintService:ViewcomplaintService){}
  ngOnInit(): void {
    this.loadComplaints();
  }
  loadComplaints() {
    this.complaintService.getComplaints(this.residentId).subscribe(
      (data: Complaint[]) => {
        this.complaints = data;
      },
      (error) => {
        console.error('Error fetching complaints:', error);
        this.errorMessage = 'Failed to fetch complaints. Please check the backend and endpoint URL.';
      }
    );
  
  
  }

}
