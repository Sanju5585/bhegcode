import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardInfoContainerComponent } from './hazard-info-container.component';

describe('HazardInfoContainerComponent', () => {
  let component: HazardInfoContainerComponent;
  let fixture: ComponentFixture<HazardInfoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HazardInfoContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
