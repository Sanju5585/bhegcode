import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateLandingComponent } from './waygate-landing.component';

describe('WaygateLandingComponent', () => {
  let component: WaygateLandingComponent;
  let fixture: ComponentFixture<WaygateLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateLandingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaygateLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
