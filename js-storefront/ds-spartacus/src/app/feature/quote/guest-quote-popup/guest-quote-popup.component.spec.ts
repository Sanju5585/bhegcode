import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestQuotePopupComponent } from './guest-quote-popup.component';

describe('GuestQuotePopupComponent', () => {
  let component: GuestQuotePopupComponent;
  let fixture: ComponentFixture<GuestQuotePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestQuotePopupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestQuotePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
