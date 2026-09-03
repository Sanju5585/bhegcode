import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DismissAllComponent } from './dismiss-all.component';

describe('DismissAllComponent', () => {
  let component: DismissAllComponent;
  let fixture: ComponentFixture<DismissAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DismissAllComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DismissAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
