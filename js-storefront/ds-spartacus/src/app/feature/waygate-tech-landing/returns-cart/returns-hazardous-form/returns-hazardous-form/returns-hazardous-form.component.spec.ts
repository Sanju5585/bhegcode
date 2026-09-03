import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsHazardousFormComponent } from './returns-hazardous-form.component';

describe('ReturnsHazardousFormComponent', () => {
  let component: ReturnsHazardousFormComponent;
  let fixture: ComponentFixture<ReturnsHazardousFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnsHazardousFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnsHazardousFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
