import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmaProductSearchComponent } from './rma-product-search.component';

describe('RmaProductSearchComponent', () => {
  let component: RmaProductSearchComponent;
  let fixture: ComponentFixture<RmaProductSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RmaProductSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmaProductSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
