import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateHamburgerSliderComponent } from './waygate-hamburger-slider.component';

describe('WaygateHamburgerSliderComponent', () => {
  let component: WaygateHamburgerSliderComponent;
  let fixture: ComponentFixture<WaygateHamburgerSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaygateHamburgerSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaygateHamburgerSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
