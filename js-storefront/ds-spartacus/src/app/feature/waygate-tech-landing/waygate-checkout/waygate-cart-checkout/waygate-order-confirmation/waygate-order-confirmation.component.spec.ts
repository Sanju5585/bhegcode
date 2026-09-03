import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateOrderConfirmationComponent } from './waygate-order-confirmation.component';

describe('WaygateOrderConfirmationComponent', () => {
  let component: WaygateOrderConfirmationComponent;
  let fixture: ComponentFixture<WaygateOrderConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateOrderConfirmationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateOrderConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
