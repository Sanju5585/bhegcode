import { TestBed } from '@angular/core/testing';

import { WaygateOnlyGuard } from './waygate-only.guard';

describe('WaygateOnlyGuard', () => {
  let guard: WaygateOnlyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WaygateOnlyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
