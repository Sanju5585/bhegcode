import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateCalibrationDataComponent } from './waygate-calibration-data.component';

describe('WaygateCalibrationDataComponent', () => {
  let component: WaygateCalibrationDataComponent;
  let fixture: ComponentFixture<WaygateCalibrationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateCalibrationDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateCalibrationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
