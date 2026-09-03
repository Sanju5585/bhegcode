import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsCartComponent } from './returns-cart.component';

describe('ReturnsCartComponent', () => {
  let component: ReturnsCartComponent;
  let fixture: ComponentFixture<ReturnsCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnsCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
