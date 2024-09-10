import { Component } from '@angular/core';

@Component({
  selector: 'app-admincontact',
  templateUrl: './admincontact.component.html',
  styleUrl: './admincontact.component.css'
})
export class AdmincontactComponent {
  adminContact = {
    name: 'John Doe',
    email: 'admin@example.com',
    phoneNumber: '+91 9464567890'
  };
}
