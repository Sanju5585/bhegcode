import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationAttachmentComponent } from './notification-attachment.component';

describe('NotificationAttachmentComponent', () => {
  let component: NotificationAttachmentComponent;
  let fixture: ComponentFixture<NotificationAttachmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationAttachmentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
