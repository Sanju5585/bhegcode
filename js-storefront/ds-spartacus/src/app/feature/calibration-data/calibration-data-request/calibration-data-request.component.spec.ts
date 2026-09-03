import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationDataRequestComponent } from './calibration-data-request.component';

describe('CalibrationDataRequestComponent', () => {
  let component: CalibrationDataRequestComponent;
  let fixture: ComponentFixture<CalibrationDataRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalibrationDataRequestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibrationDataRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
