import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceAvailabilityCheckComponent } from './price-availability-check.component';

describe('PriceAvailabilityCheckComponent', () => {
  let component: PriceAvailabilityCheckComponent;
  let fixture: ComponentFixture<PriceAvailabilityCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceAvailabilityCheckComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceAvailabilityCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
