import { TestBed } from '@angular/core/testing';

import { WaygateListingService } from './waygate-listing.service';

describe('WaygateListingService', () => {
  let service: WaygateListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaygateListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
