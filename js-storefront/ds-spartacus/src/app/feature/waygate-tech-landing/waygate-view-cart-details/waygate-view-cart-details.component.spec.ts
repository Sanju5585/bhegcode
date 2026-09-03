import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateViewCartDetailsComponent } from './waygate-view-cart-details.component';

describe('WaygateViewCartDetailsComponent', () => {
  let component: WaygateViewCartDetailsComponent;
  let fixture: ComponentFixture<WaygateViewCartDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateViewCartDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateViewCartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
