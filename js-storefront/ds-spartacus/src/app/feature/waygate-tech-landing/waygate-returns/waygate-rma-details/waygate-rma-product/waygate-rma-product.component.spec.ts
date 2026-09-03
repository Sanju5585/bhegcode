import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateRmaProductComponent } from './waygate-rma-product.component';

describe('WaygateRmaProductComponent', () => {
  let component: WaygateRmaProductComponent;
  let fixture: ComponentFixture<WaygateRmaProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateRmaProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaygateRmaProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
