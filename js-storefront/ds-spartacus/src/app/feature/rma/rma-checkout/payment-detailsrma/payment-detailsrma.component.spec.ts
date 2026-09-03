import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDetailsrmaComponent } from './payment-detailsrma.component';

describe('PaymentDetailsrmaComponent', () => {
  let component: PaymentDetailsrmaComponent;
  let fixture: ComponentFixture<PaymentDetailsrmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentDetailsrmaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDetailsrmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
