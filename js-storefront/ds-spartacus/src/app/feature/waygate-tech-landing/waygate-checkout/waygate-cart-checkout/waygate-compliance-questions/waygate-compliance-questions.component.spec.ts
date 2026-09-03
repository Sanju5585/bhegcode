import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateComplianceQuestionsComponent } from './waygate-compliance-questions.component';

describe('WaygateComplianceQuestionsComponent', () => {
  let component: WaygateComplianceQuestionsComponent;
  let fixture: ComponentFixture<WaygateComplianceQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateComplianceQuestionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateComplianceQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
