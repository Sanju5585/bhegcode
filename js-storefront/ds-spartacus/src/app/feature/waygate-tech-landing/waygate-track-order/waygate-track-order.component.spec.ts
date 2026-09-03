import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateTrackOrderComponent } from './waygate-track-order.component';

describe('WaygateTrackOrderComponent', () => {
  let component: WaygateTrackOrderComponent;
  let fixture: ComponentFixture<WaygateTrackOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateTrackOrderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateTrackOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
