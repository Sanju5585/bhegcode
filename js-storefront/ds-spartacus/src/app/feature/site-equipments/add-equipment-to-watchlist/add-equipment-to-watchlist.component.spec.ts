import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipmentToWatchlistComponent } from './add-equipment-to-watchlist.component';

describe('AddEquipmentToWatchlistComponent', () => {
  let component: AddEquipmentToWatchlistComponent;
  let fixture: ComponentFixture<AddEquipmentToWatchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEquipmentToWatchlistComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEquipmentToWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
