import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCheckoutdetailsComponent } from './buy-checkoutdetails.component';

describe('BuyCheckoutdetailsComponent', () => {
  let component: BuyCheckoutdetailsComponent;
  let fixture: ComponentFixture<BuyCheckoutdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyCheckoutdetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCheckoutdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
