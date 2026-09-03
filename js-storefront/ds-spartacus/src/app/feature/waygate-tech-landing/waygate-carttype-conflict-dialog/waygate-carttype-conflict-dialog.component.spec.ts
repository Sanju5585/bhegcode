import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateCartTypeConflictDialogComponent } from './waygate-carttype-conflict-dialog.component';

describe('WaygateCartTypeConflictDialogComponent', () => {
  let component: WaygateCartTypeConflictDialogComponent;
  let fixture: ComponentFixture<WaygateCartTypeConflictDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateCartTypeConflictDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaygateCartTypeConflictDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
