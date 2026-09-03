import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmaOverviewComponent } from './rma-overview.component';

describe('RmaOverviewComponent', () => {
  let component: RmaOverviewComponent;
  let fixture: ComponentFixture<RmaOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RmaOverviewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmaOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
