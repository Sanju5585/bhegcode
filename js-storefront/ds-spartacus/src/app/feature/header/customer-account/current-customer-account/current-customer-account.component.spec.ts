import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCustomerAccountComponent } from './current-customer-account.component';

describe('CurrentCustomerAccountComponent', () => {
  let component: CurrentCustomerAccountComponent;
  let fixture: ComponentFixture<CurrentCustomerAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentCustomerAccountComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCustomerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
