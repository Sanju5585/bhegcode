import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsCartDeleteDialogComponent } from './returns-cart-delete-dialog.component';

describe('ReturnsCartDeleteDialogComponent', () => {
  let component: ReturnsCartDeleteDialogComponent;
  let fixture: ComponentFixture<ReturnsCartDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnsCartDeleteDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnsCartDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
