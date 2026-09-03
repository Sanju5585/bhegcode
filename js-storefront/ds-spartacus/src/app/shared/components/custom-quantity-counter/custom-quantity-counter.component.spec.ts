import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomQuantityCounterComponent } from './custom-quantity-counter.component';

describe('CustomQuantityCounterComponent', () => {
  let component: CustomQuantityCounterComponent;
  let fixture: ComponentFixture<CustomQuantityCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomQuantityCounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomQuantityCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
