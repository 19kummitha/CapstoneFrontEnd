import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedashboardComponent } from './servicedashboard.component';

describe('ServicedashboardComponent', () => {
  let component: ServicedashboardComponent;
  let fixture: ComponentFixture<ServicedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicedashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
