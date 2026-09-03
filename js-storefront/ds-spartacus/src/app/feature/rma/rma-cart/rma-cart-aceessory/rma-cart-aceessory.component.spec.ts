import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmaCartAceessoryComponent } from './rma-cart-aceessory.component';

describe('RmaCartAceessoryComponent', () => {
  let component: RmaCartAceessoryComponent;
  let fixture: ComponentFixture<RmaCartAceessoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RmaCartAceessoryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmaCartAceessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
