import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestQuoteBakertabComponent } from './guest-quote-bakertab.component';

describe('GuestQuoteBakertabComponent', () => {
  let component: GuestQuoteBakertabComponent;
  let fixture: ComponentFixture<GuestQuoteBakertabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestQuoteBakertabComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestQuoteBakertabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
