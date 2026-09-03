import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmaStatusComponent } from './rma-status.component';

describe('RmaStatusComponent', () => {
  let component: RmaStatusComponent;
  let fixture: ComponentFixture<RmaStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RmaStatusComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmaStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
