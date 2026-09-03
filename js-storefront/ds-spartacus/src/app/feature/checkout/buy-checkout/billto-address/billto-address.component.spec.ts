import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilltoAddressComponent } from './billto-address.component';

describe('BilltoAddressComponent', () => {
  let component: BilltoAddressComponent;
  let fixture: ComponentFixture<BilltoAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BilltoAddressComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilltoAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
