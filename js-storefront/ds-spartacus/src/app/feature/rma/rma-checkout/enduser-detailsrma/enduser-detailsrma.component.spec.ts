import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnduserDetailsrmaComponent } from './enduser-detailsrma.component';

describe('EnduserDetailsrmaComponent', () => {
  let component: EnduserDetailsrmaComponent;
  let fixture: ComponentFixture<EnduserDetailsrmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnduserDetailsrmaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnduserDetailsrmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
