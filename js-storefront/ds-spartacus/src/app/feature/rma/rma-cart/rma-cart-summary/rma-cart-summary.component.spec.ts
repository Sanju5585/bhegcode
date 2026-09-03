import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmaCartSummaryComponent } from './rma-cart-summary.component';

describe('RmaCartSummaryComponent', () => {
  let component: RmaCartSummaryComponent;
  let fixture: ComponentFixture<RmaCartSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RmaCartSummaryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmaCartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
