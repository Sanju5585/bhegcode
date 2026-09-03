import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmaFormContainerComponent } from './rma-form-container.component';

describe('RmaFormContainerComponent', () => {
  let component: RmaFormContainerComponent;
  let fixture: ComponentFixture<RmaFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RmaFormContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmaFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
