import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationAttachmentrmaComponent } from './notification-attachmentrma.component';

describe('NotificationAttachmentrmaComponent', () => {
  let component: NotificationAttachmentrmaComponent;
  let fixture: ComponentFixture<NotificationAttachmentrmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationAttachmentrmaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationAttachmentrmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
