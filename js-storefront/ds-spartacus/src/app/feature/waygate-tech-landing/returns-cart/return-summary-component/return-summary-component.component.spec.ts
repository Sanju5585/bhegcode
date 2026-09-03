import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnSummaryComponentComponent } from './return-summary-component.component';

describe('ReturnSummaryComponentComponent', () => {
  let component: ReturnSummaryComponentComponent;
  let fixture: ComponentFixture<ReturnSummaryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnSummaryComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnSummaryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
