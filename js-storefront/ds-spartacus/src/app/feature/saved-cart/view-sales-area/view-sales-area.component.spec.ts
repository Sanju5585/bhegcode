import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalesAreaComponent } from './view-sales-area.component';

describe('ViewSalesAreaComponent', () => {
  let component: ViewSalesAreaComponent;
  let fixture: ComponentFixture<ViewSalesAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewSalesAreaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSalesAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
