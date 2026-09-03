import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmaDocumentationComponent } from './rma-documentation.component';

describe('RmaDocumentationComponent', () => {
  let component: RmaDocumentationComponent;
  let fixture: ComponentFixture<RmaDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RmaDocumentationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmaDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
