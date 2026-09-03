import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardInfoProductComponent } from './hazard-info-product.component';

describe('HazardInfoProductComponent', () => {
  let component: HazardInfoProductComponent;
  let fixture: ComponentFixture<HazardInfoProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HazardInfoProductComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardInfoProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
