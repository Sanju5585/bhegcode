import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmaListingComponent } from './rma-listing.component';

describe('RmaListingComponent', () => {
  let component: RmaListingComponent;
  let fixture: ComponentFixture<RmaListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RmaListingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmaListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
