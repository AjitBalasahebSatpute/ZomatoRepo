import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterbasedFilerComponent } from './parameterbased-filer.component';

describe('ParameterbasedFilerComponent', () => {
  let component: ParameterbasedFilerComponent;
  let fixture: ComponentFixture<ParameterbasedFilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParameterbasedFilerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParameterbasedFilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
