import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmaConfirmationComponent } from './rma-confirmation.component';

describe('RmaConfirmationComponent', () => {
  let component: RmaConfirmationComponent;
  let fixture: ComponentFixture<RmaConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RmaConfirmationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmaConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
