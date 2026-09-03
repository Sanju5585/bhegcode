import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WayagteProductTypeFacetComponent } from './wayagte-product-type-facet.component';

describe('WayagteProductTypeFacetComponent', () => {
  let component: WayagteProductTypeFacetComponent;
  let fixture: ComponentFixture<WayagteProductTypeFacetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WayagteProductTypeFacetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WayagteProductTypeFacetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
