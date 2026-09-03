import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerDetailsComponent } from './payer-details.component';

describe('PayerDetailsComponent', () => {
  let component: PayerDetailsComponent;
  let fixture: ComponentFixture<PayerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayerDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
