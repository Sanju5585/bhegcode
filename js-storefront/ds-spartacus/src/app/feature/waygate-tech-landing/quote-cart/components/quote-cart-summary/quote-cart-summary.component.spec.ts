import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteCartSummaryComponent } from './quote-cart-summary.component';

describe('QuoteCartSummaryComponent', () => {
  let component: QuoteCartSummaryComponent;
  let fixture: ComponentFixture<QuoteCartSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteCartSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteCartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
