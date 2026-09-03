import { TestBed } from '@angular/core/testing';

import { AddressModelService } from './address-model.service';

describe('AddressModelService', () => {
  let service: AddressModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
