import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGuestHomepageFooterComponent } from './new-guest-homepage-footer.component';

describe('NewGuestHomepageFooterComponent', () => {
  let component: NewGuestHomepageFooterComponent;
  let fixture: ComponentFixture<NewGuestHomepageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewGuestHomepageFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGuestHomepageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
