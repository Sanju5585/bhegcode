import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateRmaProductSearchComponent } from './waygate-rma-product-search.component';

describe('WaygateRmaProductSearchComponent', () => {
  let component: WaygateRmaProductSearchComponent;
  let fixture: ComponentFixture<WaygateRmaProductSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateRmaProductSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaygateRmaProductSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
