import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestTrackPopupComponent } from './guest-track-popup.component';

describe('GuestTrackPopupComponent', () => {
  let component: GuestTrackPopupComponent;
  let fixture: ComponentFixture<GuestTrackPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestTrackPopupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestTrackPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
