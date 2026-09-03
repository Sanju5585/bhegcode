import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateViewCartComponent } from './waygate-view-cart.component';

describe('WaygateViewCartComponent', () => {
  let component: WaygateViewCartComponent;
  let fixture: ComponentFixture<WaygateViewCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateViewCartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateViewCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
