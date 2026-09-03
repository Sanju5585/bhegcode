import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserDetailsComponent } from './end-user-details.component';

describe('EndUserDetailsComponent', () => {
  let component: EndUserDetailsComponent;
  let fixture: ComponentFixture<EndUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EndUserDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
