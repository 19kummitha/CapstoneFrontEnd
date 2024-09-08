import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceproviderfooterComponent } from './serviceproviderfooter.component';

describe('ServiceproviderfooterComponent', () => {
  let component: ServiceproviderfooterComponent;
  let fixture: ComponentFixture<ServiceproviderfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceproviderfooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceproviderfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
