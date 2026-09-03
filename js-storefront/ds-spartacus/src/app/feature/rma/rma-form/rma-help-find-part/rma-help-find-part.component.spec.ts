import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmaHelpFindPartComponent } from './rma-help-find-part.component';

describe('RmaHelpFindPartComponent', () => {
  let component: RmaHelpFindPartComponent;
  let fixture: ComponentFixture<RmaHelpFindPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RmaHelpFindPartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmaHelpFindPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
