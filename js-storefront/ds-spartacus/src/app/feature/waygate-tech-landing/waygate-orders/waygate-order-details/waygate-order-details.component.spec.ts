import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateOrderDetailsComponent } from './waygate-order-details.component';

describe('WaygateOrderDetailsComponent', () => {
  let component: WaygateOrderDetailsComponent;
  let fixture: ComponentFixture<WaygateOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateOrderDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
