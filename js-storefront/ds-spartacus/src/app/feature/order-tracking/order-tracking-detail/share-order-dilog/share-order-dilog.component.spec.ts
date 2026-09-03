import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareOrderDilogComponent } from './share-order-dilog.component';

describe('ShareOrderDilogComponent', () => {
  let component: ShareOrderDilogComponent;
  let fixture: ComponentFixture<ShareOrderDilogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShareOrderDilogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareOrderDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
