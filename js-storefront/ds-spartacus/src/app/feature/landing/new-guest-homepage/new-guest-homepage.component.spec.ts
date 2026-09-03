import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGuestHomepageComponent } from './new-guest-homepage.component';

describe('NewGuestHomepageComponent', () => {
  let component: NewGuestHomepageComponent;
  let fixture: ComponentFixture<NewGuestHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewGuestHomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGuestHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
