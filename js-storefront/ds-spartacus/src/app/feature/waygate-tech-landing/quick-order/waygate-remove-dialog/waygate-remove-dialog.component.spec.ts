import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateRemoveDialogComponent } from './waygate-remove-dialog.component';

describe('WaygateRemoveDialogComponent', () => {
  let component: WaygateRemoveDialogComponent;
  let fixture: ComponentFixture<WaygateRemoveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateRemoveDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateRemoveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
