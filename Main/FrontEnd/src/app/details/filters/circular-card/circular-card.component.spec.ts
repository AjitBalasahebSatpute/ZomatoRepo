import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CircularCardComponent } from './circular-card.component';

// import { CircularCardComponents } from './circular-card.component';

describe('CircularFoodCardComponent', () => {
  let component: CircularCardComponent;
  let fixture: ComponentFixture<CircularCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CircularCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircularCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
