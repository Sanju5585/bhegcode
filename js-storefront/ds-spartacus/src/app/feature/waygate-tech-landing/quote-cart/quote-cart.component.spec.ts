import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteCartComponent } from './quote-cart.component';

describe('QuoteCartComponent', () => {
  let component: QuoteCartComponent;
  let fixture: ComponentFixture<QuoteCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteCartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
