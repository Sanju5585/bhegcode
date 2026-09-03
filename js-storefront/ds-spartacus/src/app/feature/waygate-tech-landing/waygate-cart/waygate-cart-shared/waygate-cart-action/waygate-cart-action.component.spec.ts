import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateCartActionComponent } from './waygate-cart-action.component';

describe('WaygateCartActionComponent', () => {
  let component: WaygateCartActionComponent;
  let fixture: ComponentFixture<WaygateCartActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateCartActionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateCartActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
