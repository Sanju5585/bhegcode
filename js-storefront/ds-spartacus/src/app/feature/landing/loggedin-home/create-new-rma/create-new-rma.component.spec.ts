import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewRmaComponent } from './create-new-rma.component';

describe('CreateNewRmaComponent', () => {
  let component: CreateNewRmaComponent;
  let fixture: ComponentFixture<CreateNewRmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateNewRmaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewRmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
