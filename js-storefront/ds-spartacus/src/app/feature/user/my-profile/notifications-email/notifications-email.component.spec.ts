import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsEmailComponent } from './notifications-email.component';

describe('NotificationsEmailComponent', () => {
  let component: NotificationsEmailComponent;
  let fixture: ComponentFixture<NotificationsEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationsEmailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
