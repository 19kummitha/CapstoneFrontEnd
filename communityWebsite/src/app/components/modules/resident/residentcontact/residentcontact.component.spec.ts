import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentcontactComponent } from './residentcontact.component';

describe('ResidentcontactComponent', () => {
  let component: ResidentcontactComponent;
  let fixture: ComponentFixture<ResidentcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResidentcontactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
