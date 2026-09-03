import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountSliderComponent } from './customer-account-slider.component';

describe('CustomerAccountSliderComponent', () => {
  let component: CustomerAccountSliderComponent;
  let fixture: ComponentFixture<CustomerAccountSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerAccountSliderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAccountSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
