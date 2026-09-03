import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmaCheckoutdetailsComponent } from './rma-checkoutdetails.component';

describe('RmaCheckoutdetailsComponent', () => {
  let component: RmaCheckoutdetailsComponent;
  let fixture: ComponentFixture<RmaCheckoutdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RmaCheckoutdetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmaCheckoutdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
