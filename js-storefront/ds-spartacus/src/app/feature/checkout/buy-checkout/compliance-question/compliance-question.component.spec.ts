import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceQuestionComponent } from './compliance-question.component';

describe('ComplianceQuestionComponent', () => {
  let component: ComplianceQuestionComponent;
  let fixture: ComponentFixture<ComplianceQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplianceQuestionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
