import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentloginComponent } from './residentlogin.component';

describe('ResidentloginComponent', () => {
  let component: ResidentloginComponent;
  let fixture: ComponentFixture<ResidentloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResidentloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
