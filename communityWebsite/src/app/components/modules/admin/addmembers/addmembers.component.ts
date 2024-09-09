import { Component } from '@angular/core';
import { AddResidentDto } from '../../../../Models/addresidentdto';
import { AddresidentService } from '../../../../services/addresident.service';

@Component({
  selector: 'app-addmembers',
  templateUrl: './addmembers.component.html',
  styleUrl: './addmembers.component.css'
})
export class AddmembersComponent {
  resident:AddResidentDto = {
    userName: '',
    email: '',
    passwordHash: '',
    flatNo: '',
    name: '',
    phoneNumber: ''
  };
  successMessage = '';
  errorMessage = '';

  constructor(private residentService: AddresidentService) {}
  addResident(): void {
    this.residentService.addResident(this.resident).subscribe({
      next: (response) => {
        this.successMessage = 'Member added successfully!';
        this.resetForm();
      },
      error: (err) => {
        console.error('Error adding member:', err);
        this.errorMessage = 'Failed to add member. Please try again.';
      }
    });
}
resetForm(): void {
  this.resident = {
    userName: '',
    email: '',
    passwordHash: '',
    flatNo: '',
    name: '',
    phoneNumber: ''
  };
}
}