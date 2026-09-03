import { TestBed } from '@angular/core/testing';

import { ListofportalService } from './listofportal.service';

describe('ListofportalService', () => {
  let service: ListofportalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListofportalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
