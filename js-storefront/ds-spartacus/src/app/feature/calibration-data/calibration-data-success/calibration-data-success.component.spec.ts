import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationDataSuccessComponent } from './calibration-data-success.component';

describe('CalibrationDataSuccessComponent', () => {
  let component: CalibrationDataSuccessComponent;
  let fixture: ComponentFixture<CalibrationDataSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalibrationDataSuccessComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibrationDataSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
