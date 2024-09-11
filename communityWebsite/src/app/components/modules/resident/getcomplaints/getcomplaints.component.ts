import { Component, OnInit } from '@angular/core';
import { Complaint } from '../../../../Models/Complaint';
import { ResidentcomplaintService } from '../../../../services/residentcomplaint.service';

@Component({
  selector: 'app-getcomplaints',
  templateUrl: './getcomplaints.component.html',
  styleUrl: './getcomplaints.component.css'
})
export class GetcomplaintsComponent implements OnInit {
  complaints: Complaint[]=[];

  constructor(private complaintService: ResidentcomplaintService) { }

  ngOnInit(): void {
    this.complaintService.getComplaintsByResident().subscribe((complaints) => {
      this.complaints = complaints;
    });
  }
}
