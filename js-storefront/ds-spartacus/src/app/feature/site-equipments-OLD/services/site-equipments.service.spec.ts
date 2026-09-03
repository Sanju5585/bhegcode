import { TestBed } from '@angular/core/testing';

import { SiteEquipmentsService } from './site-equipments.service';

describe('SiteEquipmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiteEquipmentsService = TestBed.get(SiteEquipmentsService);
    expect(service).toBeTruthy();
  });
});
