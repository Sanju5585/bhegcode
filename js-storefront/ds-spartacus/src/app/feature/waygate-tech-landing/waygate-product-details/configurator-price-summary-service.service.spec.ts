import { TestBed } from '@angular/core/testing';

import { ConfiguratorPriceSummaryServiceService } from './configurator-price-summary-service.service';

describe('ConfiguratorPriceSummaryServiceService', () => {
  let service: ConfiguratorPriceSummaryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiguratorPriceSummaryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
