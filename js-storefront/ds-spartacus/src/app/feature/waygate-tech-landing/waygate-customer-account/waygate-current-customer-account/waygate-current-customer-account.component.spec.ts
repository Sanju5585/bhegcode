import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateCurrentCustomerAccountComponent } from './waygate-current-customer-account.component';

describe('WaygateCurrentCustomerAccountComponent', () => {
  let component: WaygateCurrentCustomerAccountComponent;
  let fixture: ComponentFixture<WaygateCurrentCustomerAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateCurrentCustomerAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateCurrentCustomerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
