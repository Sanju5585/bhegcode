import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPoStatusComponent } from './track-po-status.component';

describe('TrackPoStatusComponent', () => {
  let component: TrackPoStatusComponent;
  let fixture: ComponentFixture<TrackPoStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackPoStatusComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackPoStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
