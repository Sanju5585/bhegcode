import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateQuickOrderAddressComponent } from './waygate-quick-order-address.component';

describe('WaygateQuickOrderAdressComponent', () => {
  let component: WaygateQuickOrderAddressComponent;
  let fixture: ComponentFixture<WaygateQuickOrderAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateQuickOrderAddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaygateQuickOrderAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
