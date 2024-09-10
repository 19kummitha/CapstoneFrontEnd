import { Component, OnInit } from '@angular/core';
import { AddServiceProviderDto } from '../../../../Models/serviceproviderdto';
import { ViewserviceService } from '../../../../services/viewservice.service';

@Component({
  selector: 'app-viewservice',
  templateUrl: './viewservice.component.html',
  styleUrls: ['./viewservice.component.css']
})
export class ViewserviceComponent implements OnInit {
  serviceProviders: AddServiceProviderDto[] = [];
  error: string | null = null;

  constructor(private serviceProvider: ViewserviceService) {}

  ngOnInit(): void {
    this.loadServiceProviders();
  }

  loadServiceProviders() {
    this.serviceProvider.getAllServiceProviders().subscribe(
      (response) => {
        this.serviceProviders = response.service || [];
      },
      (error) => {
        console.error('Error fetching service providers:', error);
        this.error = 'Failed to load service providers. Please try again later.';
      }
    );
  }
}
