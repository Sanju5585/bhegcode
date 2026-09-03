import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateNotificationsAttachmentsComponent } from './waygate-notifications-attachments.component';

describe('WaygateNotificationsAttachmentsComponent', () => {
  let component: WaygateNotificationsAttachmentsComponent;
  let fixture: ComponentFixture<WaygateNotificationsAttachmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateNotificationsAttachmentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateNotificationsAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
