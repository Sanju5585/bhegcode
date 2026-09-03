import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateQuoteRouterDialogComponent } from './waygate-quote-router-dialog.component';

describe('WaygateQuoteRouterDialogComponent', () => {
  let component: WaygateQuoteRouterDialogComponent;
  let fixture: ComponentFixture<WaygateQuoteRouterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateQuoteRouterDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaygateQuoteRouterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
