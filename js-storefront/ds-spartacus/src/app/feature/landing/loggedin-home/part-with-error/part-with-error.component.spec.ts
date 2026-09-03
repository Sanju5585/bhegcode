import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartWithErrorComponent } from './part-with-error.component';

describe('PartWithErrorComponent', () => {
  let component: PartWithErrorComponent;
  let fixture: ComponentFixture<PartWithErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartWithErrorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartWithErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
