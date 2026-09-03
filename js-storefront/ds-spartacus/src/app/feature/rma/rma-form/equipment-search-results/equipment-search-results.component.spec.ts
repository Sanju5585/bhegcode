import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSearchResultsComponent } from './equipment-search-results.component';

describe('EquipmentSearchResultsComponent', () => {
  let component: EquipmentSearchResultsComponent;
  let fixture: ComponentFixture<EquipmentSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSearchResultsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
