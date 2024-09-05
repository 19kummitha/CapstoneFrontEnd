import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'communityWebsite';
  currentRoute: string = '';

  constructor(private router: Router) {
    // Subscribe to route changes to track the current route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  // Function to check if the current route is dashboard
  isDashboardRoute(): boolean {
    return this.currentRoute.includes('/dashboard');
  }
}
