import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartDeletePopupComponent } from './part-delete-popup.component';

describe('PartDeletePopupComponent', () => {
  let component: PartDeletePopupComponent;
  let fixture: ComponentFixture<PartDeletePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartDeletePopupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartDeletePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
