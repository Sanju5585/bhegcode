import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountrmaComponent } from './customer-accountrma.component';

describe('CustomerAccountrmaComponent', () => {
  let component: CustomerAccountrmaComponent;
  let fixture: ComponentFixture<CustomerAccountrmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerAccountrmaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAccountrmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
