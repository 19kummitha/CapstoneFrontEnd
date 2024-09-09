import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceprovidercontactComponent } from './serviceprovidercontact.component';

describe('ServiceprovidercontactComponent', () => {
  let component: ServiceprovidercontactComponent;
  let fixture: ComponentFixture<ServiceprovidercontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceprovidercontactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceprovidercontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
