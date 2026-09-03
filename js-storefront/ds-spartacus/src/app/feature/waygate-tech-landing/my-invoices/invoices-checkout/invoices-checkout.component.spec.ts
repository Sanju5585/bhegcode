import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesCheckoutComponent } from './invoices-checkout.component';

describe('InvoicesCheckoutComponent', () => {
  let component: InvoicesCheckoutComponent;
  let fixture: ComponentFixture<InvoicesCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoicesCheckoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
