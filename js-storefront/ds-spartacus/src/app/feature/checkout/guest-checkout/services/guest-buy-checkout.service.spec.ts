import { TestBed } from '@angular/core/testing';

import { GuestBuyCheckoutService } from './guest-buy-checkout.service';

describe('GuestBuyCheckoutService', () => {
  let service: GuestBuyCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestBuyCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
