import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateProductDetailsComponent } from './waygate-product-details.component';

describe('WaygateProductDetailsComponent', () => {
  let component: WaygateProductDetailsComponent;
  let fixture: ComponentFixture<WaygateProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateProductDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
