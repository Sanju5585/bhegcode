import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutFileuploadComponent } from './checkout-fileupload.component';

describe('CheckoutFileuploadComponent', () => {
  let component: CheckoutFileuploadComponent;
  let fixture: ComponentFixture<CheckoutFileuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutFileuploadComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutFileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
