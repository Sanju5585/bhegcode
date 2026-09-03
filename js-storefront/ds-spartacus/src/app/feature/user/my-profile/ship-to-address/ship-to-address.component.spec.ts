import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipToAddressComponent } from './ship-to-address.component';

describe('ShipToAddressComponent', () => {
  let component: ShipToAddressComponent;
  let fixture: ComponentFixture<ShipToAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipToAddressComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipToAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
