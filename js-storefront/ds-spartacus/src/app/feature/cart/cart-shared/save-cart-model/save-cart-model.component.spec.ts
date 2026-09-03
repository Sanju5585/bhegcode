import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCartModelComponent } from './save-cart-model.component';

describe('SaveCartModelComponent', () => {
  let component: SaveCartModelComponent;
  let fixture: ComponentFixture<SaveCartModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveCartModelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCartModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
