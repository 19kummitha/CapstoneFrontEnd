import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentfooterComponent } from './residentfooter.component';

describe('ResidentfooterComponent', () => {
  let component: ResidentfooterComponent;
  let fixture: ComponentFixture<ResidentfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResidentfooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
