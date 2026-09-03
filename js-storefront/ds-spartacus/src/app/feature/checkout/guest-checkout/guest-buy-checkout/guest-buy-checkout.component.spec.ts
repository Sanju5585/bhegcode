import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestBuyCheckoutComponent } from './guest-buy-checkout.component';

describe('GuestBuyCheckoutComponent', () => {
  let component: GuestBuyCheckoutComponent;
  let fixture: ComponentFixture<GuestBuyCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestBuyCheckoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestBuyCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
