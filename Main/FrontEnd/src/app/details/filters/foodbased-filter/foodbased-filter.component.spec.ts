import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodbasedFilterComponent } from './foodbased-filter.component';

describe('FoodbasedFilterComponent', () => {
  let component: FoodbasedFilterComponent;
  let fixture: ComponentFixture<FoodbasedFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodbasedFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodbasedFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
