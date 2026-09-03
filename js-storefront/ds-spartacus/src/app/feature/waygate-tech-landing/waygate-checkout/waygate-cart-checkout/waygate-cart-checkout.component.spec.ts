import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateCartCheckoutComponent } from './waygate-cart-checkout.component';

describe('WaygateCartCheckoutComponent', () => {
  let component: WaygateCartCheckoutComponent;
  let fixture: ComponentFixture<WaygateCartCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateCartCheckoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateCartCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
