import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateCartItemComponent } from './waygate-cart-item.component';

describe('WaygateCartItemComponent', () => {
  let component: WaygateCartItemComponent;
  let fixture: ComponentFixture<WaygateCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateCartItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
