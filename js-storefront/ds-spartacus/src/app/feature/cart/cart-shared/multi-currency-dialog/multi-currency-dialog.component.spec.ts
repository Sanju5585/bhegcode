import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCurrencyDialogComponent } from './multi-currency-dialog.component';

describe('MultiCurrencyDialogComponent', () => {
  let component: MultiCurrencyDialogComponent;
  let fixture: ComponentFixture<MultiCurrencyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiCurrencyDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiCurrencyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
