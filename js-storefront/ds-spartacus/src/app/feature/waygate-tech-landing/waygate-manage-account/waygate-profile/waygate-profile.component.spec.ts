import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateProfileComponent } from './waygate-profile.component';

describe('WaygateProfileComponent', () => {
  let component: WaygateProfileComponent;
  let fixture: ComponentFixture<WaygateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
