import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteConfirmationComponent } from './quote-confirmation.component';

describe('QuoteConfirmationComponent', () => {
  let component: QuoteConfirmationComponent;
  let fixture: ComponentFixture<QuoteConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuoteConfirmationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
