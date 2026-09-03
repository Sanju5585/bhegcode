import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedDocumentsComponent } from './associated-documents.component';

describe('AssociatedDocumentsComponent', () => {
  let component: AssociatedDocumentsComponent;
  let fixture: ComponentFixture<AssociatedDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssociatedDocumentsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatedDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
