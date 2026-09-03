import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDismissAllComponent } from './read-dismiss-all.component';

describe('ReadDismissAllComponent', () => {
  let component: ReadDismissAllComponent;
  let fixture: ComponentFixture<ReadDismissAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadDismissAllComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadDismissAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
