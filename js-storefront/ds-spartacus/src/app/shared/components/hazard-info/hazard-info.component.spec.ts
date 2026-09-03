import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardInfoComponent } from './hazard-info.component';

describe('HazardInfoComponent', () => {
  let component: HazardInfoComponent;
  let fixture: ComponentFixture<HazardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HazardInfoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
