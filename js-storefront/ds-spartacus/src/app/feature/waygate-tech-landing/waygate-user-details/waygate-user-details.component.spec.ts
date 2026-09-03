import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateUserDetailsComponent } from './waygate-user-details.component';

describe('WaygateUserDetailsComponent', () => {
  let component: WaygateUserDetailsComponent;
  let fixture: ComponentFixture<WaygateUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateUserDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
