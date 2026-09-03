import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceQuestionrmaComponent } from './compliance-questionrma.component';

describe('ComplianceQuestionrmaComponent', () => {
  let component: ComplianceQuestionrmaComponent;
  let fixture: ComponentFixture<ComplianceQuestionrmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplianceQuestionrmaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceQuestionrmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
