import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPopupCheckboxComponent } from './view-all-popup-checkbox.component';

describe('ViewAllPopupCheckboxComponent', () => {
  let component: ViewAllPopupCheckboxComponent;
  let fixture: ComponentFixture<ViewAllPopupCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllPopupCheckboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAllPopupCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
