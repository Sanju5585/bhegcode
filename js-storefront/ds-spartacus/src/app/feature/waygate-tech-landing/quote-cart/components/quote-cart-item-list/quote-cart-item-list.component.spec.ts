import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteCartItemListComponent } from './quote-cart-item-list.component';

describe('QuoteCartItemListComponent', () => {
  let component: QuoteCartItemListComponent;
  let fixture: ComponentFixture<QuoteCartItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteCartItemListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteCartItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
