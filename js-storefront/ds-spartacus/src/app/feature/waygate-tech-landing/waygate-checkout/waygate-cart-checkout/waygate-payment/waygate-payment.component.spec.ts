import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygatePaymentComponent } from './waygate-payment.component';

describe('WaygatePaymentComponent', () => {
  let component: WaygatePaymentComponent;
  let fixture: ComponentFixture<WaygatePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygatePaymentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygatePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
