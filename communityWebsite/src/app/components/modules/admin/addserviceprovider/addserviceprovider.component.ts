import { Component } from '@angular/core';
import { AddServiceProviderDto } from '../../../../Models/serviceproviderdto';
import { AddserviceproviderService } from '../../../../services/addserviceprovider.service';

@Component({
  selector: 'app-addserviceprovider',
  templateUrl: './addserviceprovider.component.html',
  styleUrl: './addserviceprovider.component.css'
})
export class AddserviceproviderComponent {
  serviceprovider:AddServiceProviderDto = {
    userName: '',
    email: '',
    passwordHash: '',
    serviceType: '',
    name: '',
    phoneNumber: ''
  };
  successMessage = '';
  errorMessage = '';
  constructor(private serviceProviderService: AddserviceproviderService) {}
  addServiceProvider(): void {
    this.serviceProviderService.addServiceProvider(this.serviceprovider).subscribe({
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
  this.serviceprovider = {
    userName: '',
    email: '',
    passwordHash: '',
    serviceType: '',
    name: '',
    phoneNumber: ''
  };
}
}
