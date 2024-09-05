import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceloginComponent } from './servicelogin.component';

describe('ServiceloginComponent', () => {
  let component: ServiceloginComponent;
  let fixture: ComponentFixture<ServiceloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
