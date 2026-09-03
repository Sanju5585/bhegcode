import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRmaStatusComponent } from './order-rma-status.component';

describe('OrderRmaStatusComponent', () => {
  let component: OrderRmaStatusComponent;
  let fixture: ComponentFixture<OrderRmaStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderRmaStatusComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderRmaStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
