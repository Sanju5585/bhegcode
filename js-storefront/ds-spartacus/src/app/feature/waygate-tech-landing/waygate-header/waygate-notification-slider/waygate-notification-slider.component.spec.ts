import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateNotificationSliderComponent } from './waygate-notification-slider.component';

describe('WaygateNotificationSliderComponent', () => {
  let component: WaygateNotificationSliderComponent;
  let fixture: ComponentFixture<WaygateNotificationSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateNotificationSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateNotificationSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
