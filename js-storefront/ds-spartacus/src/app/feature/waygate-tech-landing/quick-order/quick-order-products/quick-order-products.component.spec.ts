import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickOrderProductsComponent } from './quick-order-products.component';

describe('QuickOrderProductsComponent', () => {
  let component: QuickOrderProductsComponent;
  let fixture: ComponentFixture<QuickOrderProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuickOrderProductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickOrderProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
