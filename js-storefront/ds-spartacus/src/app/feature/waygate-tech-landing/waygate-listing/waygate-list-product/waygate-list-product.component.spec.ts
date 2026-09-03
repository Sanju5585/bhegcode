import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateListProductComponent } from './waygate-list-product.component';

describe('WaygateListProductComponent', () => {
  let component: WaygateListProductComponent;
  let fixture: ComponentFixture<WaygateListProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateListProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
