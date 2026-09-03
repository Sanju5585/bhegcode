import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateListingFilterSortComponent } from './waygate-listing-filter-sort.component';

describe('WaygateListingFilterSortComponent', () => {
  let component: WaygateListingFilterSortComponent;
  let fixture: ComponentFixture<WaygateListingFilterSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateListingFilterSortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaygateListingFilterSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
