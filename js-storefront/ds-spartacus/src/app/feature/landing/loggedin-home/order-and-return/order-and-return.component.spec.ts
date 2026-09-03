import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAndReturnComponent } from './order-and-return.component';

describe('OrderAndReturnComponent', () => {
  let component: OrderAndReturnComponent;
  let fixture: ComponentFixture<OrderAndReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderAndReturnComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAndReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
