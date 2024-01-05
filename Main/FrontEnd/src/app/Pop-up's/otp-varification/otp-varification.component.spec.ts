import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OTPVarificationComponent } from './otp-varification.component';

describe('OTPVarificationComponent', () => {
  let component: OTPVarificationComponent;
  let fixture: ComponentFixture<OTPVarificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OTPVarificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OTPVarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
