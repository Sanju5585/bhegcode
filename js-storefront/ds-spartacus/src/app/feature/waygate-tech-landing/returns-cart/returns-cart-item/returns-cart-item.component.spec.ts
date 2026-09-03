import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsCartItemComponent } from './returns-cart-item.component';

describe('ReturnsCartItemComponent', () => {
  let component: ReturnsCartItemComponent;
  let fixture: ComponentFixture<ReturnsCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnsCartItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnsCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
