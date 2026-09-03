import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateDatePickerComponent } from './waygate-date-picker.component';

describe('WaygateDatePickerComponent', () => {
  let component: WaygateDatePickerComponent;
  let fixture: ComponentFixture<WaygateDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateDatePickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
