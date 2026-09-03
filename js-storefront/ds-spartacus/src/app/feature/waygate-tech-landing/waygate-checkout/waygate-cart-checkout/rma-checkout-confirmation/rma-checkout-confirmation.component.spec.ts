import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmaCheckoutConfirmationComponent } from './rma-checkout-confirmation.component';

describe('RmaConfirmationComponent', () => {
  let component: RmaCheckoutConfirmationComponent;
  let fixture: ComponentFixture<RmaCheckoutConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RmaCheckoutConfirmationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmaCheckoutConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
