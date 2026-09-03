import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateFacetsComponent } from './waygate-facets.component';

describe('WaygateFacetsComponent', () => {
  let component: WaygateFacetsComponent;
  let fixture: ComponentFixture<WaygateFacetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateFacetsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateFacetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
