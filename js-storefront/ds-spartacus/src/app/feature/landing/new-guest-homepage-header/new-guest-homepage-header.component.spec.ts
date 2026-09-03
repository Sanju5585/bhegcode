import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGuestHomepageHeaderComponent } from './new-guest-homepage-header.component';

describe('NewGuestHomepageHeaderComponent', () => {
  let component: NewGuestHomepageHeaderComponent;
  let fixture: ComponentFixture<NewGuestHomepageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewGuestHomepageHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGuestHomepageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
