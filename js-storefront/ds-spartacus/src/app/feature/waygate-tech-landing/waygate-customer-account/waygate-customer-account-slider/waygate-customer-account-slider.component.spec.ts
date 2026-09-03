import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateCustomerAccountSliderComponent } from './waygate-customer-account-slider.component';

describe('WaygateCustomerAccountSliderComponent', () => {
  let component: WaygateCustomerAccountSliderComponent;
  let fixture: ComponentFixture<WaygateCustomerAccountSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateCustomerAccountSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateCustomerAccountSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
