import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDeleteDilogComponent } from './cart-delete-dilog.component';

describe('CartDeleteDilogComponent', () => {
  let component: CartDeleteDilogComponent;
  let fixture: ComponentFixture<CartDeleteDilogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartDeleteDilogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDeleteDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
