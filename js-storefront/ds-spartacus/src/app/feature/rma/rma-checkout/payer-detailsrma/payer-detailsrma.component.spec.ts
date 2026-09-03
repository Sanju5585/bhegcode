import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerDetailsrmaComponent } from './payer-detailsrma.component';

describe('PayerDetailsrmaComponent', () => {
  let component: PayerDetailsrmaComponent;
  let fixture: ComponentFixture<PayerDetailsrmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayerDetailsrmaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayerDetailsrmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
