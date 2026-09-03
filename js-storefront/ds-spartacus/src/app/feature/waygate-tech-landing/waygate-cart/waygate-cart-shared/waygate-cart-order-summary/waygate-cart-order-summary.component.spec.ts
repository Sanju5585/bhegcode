import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateCartOrderSummaryComponent } from './waygate-cart-order-summary.component';

describe('WaygateCartOrderSummaryComponent', () => {
  let component: WaygateCartOrderSummaryComponent;
  let fixture: ComponentFixture<WaygateCartOrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateCartOrderSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateCartOrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
