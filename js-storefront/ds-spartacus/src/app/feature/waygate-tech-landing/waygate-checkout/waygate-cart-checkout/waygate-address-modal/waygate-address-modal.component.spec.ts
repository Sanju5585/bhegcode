import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateAddressModalComponent } from './waygate-address-modal.component';

describe('WaygateAddressModalComponent', () => {
  let component: WaygateAddressModalComponent;
  let fixture: ComponentFixture<WaygateAddressModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateAddressModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateAddressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
