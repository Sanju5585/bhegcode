import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateCartDetailComponent } from './waygate-cart-detail.component';

describe('WaygateCartDetailComponent', () => {
  let component: WaygateCartDetailComponent;
  let fixture: ComponentFixture<WaygateCartDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateCartDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateCartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
