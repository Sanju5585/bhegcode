import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsCartItemListComponent } from './returns-cart-item-list.component';

describe('ReturnsCartItemListComponent', () => {
  let component: ReturnsCartItemListComponent;
  let fixture: ComponentFixture<ReturnsCartItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnsCartItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnsCartItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
