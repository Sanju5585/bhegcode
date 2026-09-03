import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteCartItemComponent } from './quote-cart-item.component';

describe('QuoteCartItemComponent', () => {
  let component: QuoteCartItemComponent;
  let fixture: ComponentFixture<QuoteCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteCartItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
