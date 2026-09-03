import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanametricsCalibrationDataComponent } from './panametrics-calibration-data.component';

describe('PanametricsCalibrationDataComponent', () => {
  let component: PanametricsCalibrationDataComponent;
  let fixture: ComponentFixture<PanametricsCalibrationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanametricsCalibrationDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PanametricsCalibrationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
