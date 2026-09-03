import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateSearchDialogComponent } from './waygate-search-dialog.component';

describe('WaygateSearchDialogComponent', () => {
  let component: WaygateSearchDialogComponent;
  let fixture: ComponentFixture<WaygateSearchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateSearchDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
