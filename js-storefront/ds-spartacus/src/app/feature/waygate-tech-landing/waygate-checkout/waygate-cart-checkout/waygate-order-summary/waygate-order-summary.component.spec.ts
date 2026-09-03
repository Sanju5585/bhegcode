import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateOrderSummaryComponent } from './waygate-order-summary.component';

describe('WaygateOrderSummaryComponent', () => {
  let component: WaygateOrderSummaryComponent;
  let fixture: ComponentFixture<WaygateOrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateOrderSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateOrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
