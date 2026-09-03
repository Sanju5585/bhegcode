import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyEquipmentComponent } from './identify-equipment.component';

describe('IdentifyEquipmentComponent', () => {
  let component: IdentifyEquipmentComponent;
  let fixture: ComponentFixture<IdentifyEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdentifyEquipmentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
