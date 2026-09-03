import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardInfoFormComponent } from './hazard-info-form.component';

describe('HazardInfoFormComponent', () => {
  let component: HazardInfoFormComponent;
  let fixture: ComponentFixture<HazardInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HazardInfoFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
