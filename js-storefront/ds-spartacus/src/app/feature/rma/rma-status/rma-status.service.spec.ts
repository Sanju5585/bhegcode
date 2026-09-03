import { TestBed } from '@angular/core/testing';

import { RmaStatusService } from './rma-status.service';

describe('RmaStatusService', () => {
  let service: RmaStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RmaStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
