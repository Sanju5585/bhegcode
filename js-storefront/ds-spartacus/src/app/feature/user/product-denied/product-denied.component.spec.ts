import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeniedComponent } from './product-denied.component';

describe('ProductDeniedComponent', () => {
  let component: ProductDeniedComponent;
  let fixture: ComponentFixture<ProductDeniedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDeniedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
