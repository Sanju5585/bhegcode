import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestQuoteCartProductComponent } from './guest-quote-cart-product.component';

describe('GuestQuoteCartProductComponent', () => {
  let component: GuestQuoteCartProductComponent;
  let fixture: ComponentFixture<GuestQuoteCartProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestQuoteCartProductComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestQuoteCartProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
