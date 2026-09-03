import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCartDetailsComponent } from './mini-cart-details.component';

describe('MiniCartDetailsComponent', () => {
  let component: MiniCartDetailsComponent;
  let fixture: ComponentFixture<MiniCartDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MiniCartDetailsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
