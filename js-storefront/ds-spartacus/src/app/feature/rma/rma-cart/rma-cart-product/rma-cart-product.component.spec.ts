import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmaCartProductComponent } from './rma-cart-product.component';

describe('RmaCartProductComponent', () => {
  let component: RmaCartProductComponent;
  let fixture: ComponentFixture<RmaCartProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RmaCartProductComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmaCartProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
