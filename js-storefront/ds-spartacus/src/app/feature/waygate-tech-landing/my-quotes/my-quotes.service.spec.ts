import { TestBed } from '@angular/core/testing';

import { MyQuotesService } from './my-quotes.service';

describe('MyQuotesService', () => {
  let service: MyQuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyQuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
