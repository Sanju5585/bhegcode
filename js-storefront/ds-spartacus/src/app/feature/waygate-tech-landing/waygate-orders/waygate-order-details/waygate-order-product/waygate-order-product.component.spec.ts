import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateOrderProductComponent } from './waygate-order-product.component';

describe('WaygateOrderProductComponent', () => {
  let component: WaygateOrderProductComponent;
  let fixture: ComponentFixture<WaygateOrderProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateOrderProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateOrderProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
