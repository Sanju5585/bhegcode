import { TestBed } from '@angular/core/testing';

import { BuyCheckoutService } from './buy-checkout.service';

describe('BuyCheckoutService', () => {
  let service: BuyCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
