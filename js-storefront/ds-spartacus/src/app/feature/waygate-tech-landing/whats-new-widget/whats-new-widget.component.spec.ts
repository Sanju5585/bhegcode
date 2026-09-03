import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsNewWidgetComponent } from './whats-new-widget.component';

describe('WhatsNewWidgetComponent', () => {
  let component: WhatsNewWidgetComponent;
  let fixture: ComponentFixture<WhatsNewWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatsNewWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsNewWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
