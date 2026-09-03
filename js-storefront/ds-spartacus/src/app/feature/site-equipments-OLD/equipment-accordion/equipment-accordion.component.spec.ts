import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentAccordionComponent } from './equipment-accordion.component';

describe('EquipmentAccordionComponent', () => {
  let component: EquipmentAccordionComponent;
  let fixture: ComponentFixture<EquipmentAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentAccordionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
