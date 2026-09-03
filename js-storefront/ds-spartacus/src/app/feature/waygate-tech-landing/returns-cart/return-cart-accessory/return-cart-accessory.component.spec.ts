import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnCartAccessoryComponent } from './return-cart-accessory.component';

describe('ReturnCartAccessoryComponent', () => {
  let component: ReturnCartAccessoryComponent;
  let fixture: ComponentFixture<ReturnCartAccessoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnCartAccessoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnCartAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
