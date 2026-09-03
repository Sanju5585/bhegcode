import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateGridProductComponent } from './waygate-grid-product.component';

describe('WaygateGridProductComponent', () => {
  let component: WaygateGridProductComponent;
  let fixture: ComponentFixture<WaygateGridProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateGridProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateGridProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
