import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestQuoteEmailtabComponent } from './guest-quote-emailtab.component';

describe('GuestQuoteEmailtabComponent', () => {
  let component: GuestQuoteEmailtabComponent;
  let fixture: ComponentFixture<GuestQuoteEmailtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestQuoteEmailtabComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestQuoteEmailtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
