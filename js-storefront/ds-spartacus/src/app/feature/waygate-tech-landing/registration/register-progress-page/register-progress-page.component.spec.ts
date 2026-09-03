import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProgressPageComponent } from './register-progress-page.component';

describe('RegisterProgressPageComponent', () => {
  let component: RegisterProgressPageComponent;
  let fixture: ComponentFixture<RegisterProgressPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterProgressPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterProgressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
