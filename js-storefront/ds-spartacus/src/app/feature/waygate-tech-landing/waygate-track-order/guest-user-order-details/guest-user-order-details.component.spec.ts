import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestUserOrderDetailsComponent } from './guest-user-order-details.component';

describe('GuestUserOrderDetailsComponent', () => {
  let component: GuestUserOrderDetailsComponent;
  let fixture: ComponentFixture<GuestUserOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestUserOrderDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GuestUserOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
