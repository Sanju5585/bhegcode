import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateShippingComponent } from './waygate-shipping.component';

describe('WaygateShippingComponent', () => {
  let component: WaygateShippingComponent;
  let fixture: ComponentFixture<WaygateShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateShippingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
