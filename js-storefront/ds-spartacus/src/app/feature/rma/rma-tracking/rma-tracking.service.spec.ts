import { TestBed } from '@angular/core/testing';

import { RmaTrackingService } from './rma-tracking.service';

describe('RmaTrackingService', () => {
  let service: RmaTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RmaTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
