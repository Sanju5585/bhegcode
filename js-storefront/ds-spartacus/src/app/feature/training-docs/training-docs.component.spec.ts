import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDocsComponent } from './training-docs.component';

describe('TrainingDocsComponent', () => {
  let component: TrainingDocsComponent;
  let fixture: ComponentFixture<TrainingDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainingDocsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
