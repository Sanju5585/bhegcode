import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManEquipmentsComponent } from './man-equipments.component';

describe('ManEquipmentsComponent', () => {
  let component: ManEquipmentsComponent;
  let fixture: ComponentFixture<ManEquipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManEquipmentsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManEquipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
