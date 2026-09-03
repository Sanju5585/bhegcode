import { TestBed } from '@angular/core/testing';

import { QuickOrderService } from './quick-order.service';

describe('QuickOrderService', () => {
  let service: QuickOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuickOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
