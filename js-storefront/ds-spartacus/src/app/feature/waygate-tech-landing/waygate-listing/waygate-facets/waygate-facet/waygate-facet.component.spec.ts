import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateFacetComponent } from './waygate-facet.component';

describe('WaygateFacetComponent', () => {
  let component: WaygateFacetComponent;
  let fixture: ComponentFixture<WaygateFacetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateFacetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateFacetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
