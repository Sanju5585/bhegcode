import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnduserDetailsComponent } from './enduser-details.component';

describe('EnduserDetailsComponent', () => {
  let component: EnduserDetailsComponent;
  let fixture: ComponentFixture<EnduserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnduserDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnduserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
