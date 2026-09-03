import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCustomerAccountComponent } from './change-customer-account.component';

describe('ChangeCustomerAccountComponent', () => {
  let component: ChangeCustomerAccountComponent;
  let fixture: ComponentFixture<ChangeCustomerAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeCustomerAccountComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCustomerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
