import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteCartActionsComponent } from './quote-cart-actions.component';

describe('QuoteCartActionsComponent', () => {
  let component: QuoteCartActionsComponent;
  let fixture: ComponentFixture<QuoteCartActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteCartActionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteCartActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
