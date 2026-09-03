import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateCompleteOrderComponent } from './waygate-complete-order.component';

describe('WaygateCompleteOrderComponent', () => {
  let component: WaygateCompleteOrderComponent;
  let fixture: ComponentFixture<WaygateCompleteOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateCompleteOrderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateCompleteOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
