import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedNotificationPageComponent } from './detailed-notification-page.component';

describe('DetailedNotificationPageComponent', () => {
  let component: DetailedNotificationPageComponent;
  let fixture: ComponentFixture<DetailedNotificationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedNotificationPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedNotificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
