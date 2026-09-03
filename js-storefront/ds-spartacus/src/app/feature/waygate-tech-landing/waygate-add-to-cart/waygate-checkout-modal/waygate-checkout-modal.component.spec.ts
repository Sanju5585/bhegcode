import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateCheckoutModalComponent } from './waygate-checkout-modal.component';

describe('WaygateCheckoutModalComponent', () => {
  let component: WaygateCheckoutModalComponent;
  let fixture: ComponentFixture<WaygateCheckoutModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateCheckoutModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateCheckoutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
