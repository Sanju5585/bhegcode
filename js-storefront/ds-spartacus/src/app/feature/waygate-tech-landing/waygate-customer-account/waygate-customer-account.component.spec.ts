import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateCustomerAccountComponent } from './waygate-customer-account.component';

describe('WaygateCustomerAccountComponent', () => {
  let component: WaygateCustomerAccountComponent;
  let fixture: ComponentFixture<WaygateCustomerAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateCustomerAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateCustomerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
