import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestQuoteCartComponent } from './guest-quote-cart.component';

describe('GuestQuoteCartComponent', () => {
  let component: GuestQuoteCartComponent;
  let fixture: ComponentFixture<GuestQuoteCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestQuoteCartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestQuoteCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
