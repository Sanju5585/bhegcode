import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DruckCalibrationComponent } from './druck-calibration.component';

describe('DruckCalibrationComponent', () => {
  let component: DruckCalibrationComponent;
  let fixture: ComponentFixture<DruckCalibrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DruckCalibrationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DruckCalibrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
