import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateCartItemListComponent } from './waygate-cart-item-list.component';

describe('WaygateCartItemListComponent', () => {
  let component: WaygateCartItemListComponent;
  let fixture: ComponentFixture<WaygateCartItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateCartItemListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateCartItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
