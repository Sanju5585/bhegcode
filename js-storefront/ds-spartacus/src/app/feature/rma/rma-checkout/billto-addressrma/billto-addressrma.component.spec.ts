import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilltoAddressrmaComponent } from './billto-addressrma.component';

describe('BilltoAddressrmaComponent', () => {
  let component: BilltoAddressrmaComponent;
  let fixture: ComponentFixture<BilltoAddressrmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BilltoAddressrmaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilltoAddressrmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
