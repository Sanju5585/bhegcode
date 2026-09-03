import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestQuoteCheckoutComponent } from './guest-quote-checkout.component';

describe('GuestQuoteCheckoutComponent', () => {
  let component: GuestQuoteCheckoutComponent;
  let fixture: ComponentFixture<GuestQuoteCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestQuoteCheckoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestQuoteCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
