import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingDetailsrmaComponent } from './shipping-detailsrma.component';

describe('ShippingDetailsrmaComponent', () => {
  let component: ShippingDetailsrmaComponent;
  let fixture: ComponentFixture<ShippingDetailsrmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShippingDetailsrmaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingDetailsrmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
