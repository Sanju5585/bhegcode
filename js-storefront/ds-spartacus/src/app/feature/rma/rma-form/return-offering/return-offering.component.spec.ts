import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOfferingComponent } from './return-offering.component';

describe('ReturnOfferingComponent', () => {
  let component: ReturnOfferingComponent;
  let fixture: ComponentFixture<ReturnOfferingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnOfferingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnOfferingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
