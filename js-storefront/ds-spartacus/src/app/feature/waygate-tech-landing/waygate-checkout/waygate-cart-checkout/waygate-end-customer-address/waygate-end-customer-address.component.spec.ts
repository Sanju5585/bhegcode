import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateEndCustomerAddressComponent } from './waygate-end-customer-address.component';

describe('WaygateEndCustomerAddressComponent', () => {
  let component: WaygateEndCustomerAddressComponent;
  let fixture: ComponentFixture<WaygateEndCustomerAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateEndCustomerAddressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateEndCustomerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
