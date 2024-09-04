import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-residentlogin',
  templateUrl: './residentlogin.component.html',
  styleUrl: './residentlogin.component.css'
})
export class ResidentloginComponent {
  constructor(private router: Router) { }

  onSubmit() {
    this.router.navigate(['/login']);
}
}
