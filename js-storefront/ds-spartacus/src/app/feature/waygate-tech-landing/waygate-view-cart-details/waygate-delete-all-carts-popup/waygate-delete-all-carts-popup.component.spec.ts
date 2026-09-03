import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateDeleteAllCartsPopupComponent } from './waygate-delete-all-carts-popup.component';

describe('WaygateDeleteAllCartsPopupComponent', () => {
  let component: WaygateDeleteAllCartsPopupComponent;
  let fixture: ComponentFixture<WaygateDeleteAllCartsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateDeleteAllCartsPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaygateDeleteAllCartsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
