import { TestBed } from '@angular/core/testing';

import { OfflineSearchService } from './offline-search.service';

describe('OfflineSearchService', () => {
  let service: OfflineSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfflineSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
