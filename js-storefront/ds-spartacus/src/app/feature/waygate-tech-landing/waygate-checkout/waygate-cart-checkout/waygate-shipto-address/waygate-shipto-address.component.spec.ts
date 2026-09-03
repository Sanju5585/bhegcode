import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateShiptoAddressComponent } from './waygate-shipto-address.component';

describe('WaygateShiptoAddressComponent', () => {
  let component: WaygateShiptoAddressComponent;
  let fixture: ComponentFixture<WaygateShiptoAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateShiptoAddressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateShiptoAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
