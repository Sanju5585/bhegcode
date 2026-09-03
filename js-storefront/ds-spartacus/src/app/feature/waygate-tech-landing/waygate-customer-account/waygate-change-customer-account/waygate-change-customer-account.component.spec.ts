import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateChangeCustomerAccountComponent } from './waygate-change-customer-account.component';

describe('WaygateChangeCustomerAccountComponent', () => {
  let component: WaygateChangeCustomerAccountComponent;
  let fixture: ComponentFixture<WaygateChangeCustomerAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateChangeCustomerAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateChangeCustomerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
