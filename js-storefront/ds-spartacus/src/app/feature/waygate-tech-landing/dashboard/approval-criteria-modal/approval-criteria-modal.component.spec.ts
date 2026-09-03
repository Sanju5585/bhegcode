import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalCriteriaModalComponent } from './approval-criteria-modal.component';

describe('ApprovalCriteriaModalComponent', () => {
  let component: ApprovalCriteriaModalComponent;
  let fixture: ComponentFixture<ApprovalCriteriaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApprovalCriteriaModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApprovalCriteriaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
