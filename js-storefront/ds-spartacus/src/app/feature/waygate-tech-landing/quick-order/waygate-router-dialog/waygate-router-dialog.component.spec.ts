import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateRouterDialogComponent } from './waygate-router-dialog.component';

describe('WaygateRouterDialogComponent', () => {
  let component: WaygateRouterDialogComponent;
  let fixture: ComponentFixture<WaygateRouterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateRouterDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateRouterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
