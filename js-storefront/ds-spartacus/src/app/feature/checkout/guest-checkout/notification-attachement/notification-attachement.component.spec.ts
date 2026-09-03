import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationAttachementComponent } from './notification-attachement.component';

describe('NotificationAttachementComponent', () => {
  let component: NotificationAttachementComponent;
  let fixture: ComponentFixture<NotificationAttachementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationAttachementComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationAttachementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
