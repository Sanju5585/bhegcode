import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateNotificationEmailComponent } from './waygate-notification-email.component';

describe('WaygateNotificationEmailComponent', () => {
  let component: WaygateNotificationEmailComponent;
  let fixture: ComponentFixture<WaygateNotificationEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateNotificationEmailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateNotificationEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
