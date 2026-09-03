import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmaCartContainerComponent } from './rma-cart-container.component';

describe('RmaCartContainerComponent', () => {
  let component: RmaCartContainerComponent;
  let fixture: ComponentFixture<RmaCartContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RmaCartContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmaCartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
