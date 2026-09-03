import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPopupComponent } from './view-all-popup.component';

describe('ViewAllPopupComponent', () => {
  let component: ViewAllPopupComponent;
  let fixture: ComponentFixture<ViewAllPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllPopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAllPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
