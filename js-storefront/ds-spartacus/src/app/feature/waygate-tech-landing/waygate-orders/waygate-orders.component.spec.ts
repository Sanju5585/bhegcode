import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateOrdersComponent } from './waygate-orders.component';

describe('WaygateOrdersComponent', () => {
  let component: WaygateOrdersComponent;
  let fixture: ComponentFixture<WaygateOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateOrdersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
