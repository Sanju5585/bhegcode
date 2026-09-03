import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTrackingDetailComponent } from './order-tracking-detail.component';

describe('OrderTrackingDetailComponent', () => {
  let component: OrderTrackingDetailComponent;
  let fixture: ComponentFixture<OrderTrackingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderTrackingDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTrackingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
