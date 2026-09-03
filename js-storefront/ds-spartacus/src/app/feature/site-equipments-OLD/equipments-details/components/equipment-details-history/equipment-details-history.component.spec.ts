import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentDetailsHistoryComponent } from './equipment-details-history.component';

describe('EquipmentDetailsHistoryComponent', () => {
  let component: EquipmentDetailsHistoryComponent;
  let fixture: ComponentFixture<EquipmentDetailsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentDetailsHistoryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentDetailsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
