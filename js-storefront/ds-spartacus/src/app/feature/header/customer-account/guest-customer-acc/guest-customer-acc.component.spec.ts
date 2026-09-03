import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestCustomerAccComponent } from './guest-customer-acc.component';

describe('GuestCustomerAccComponent', () => {
  let component: GuestCustomerAccComponent;
  let fixture: ComponentFixture<GuestCustomerAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestCustomerAccComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestCustomerAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
