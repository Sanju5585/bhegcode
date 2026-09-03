import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateNavBarComponent } from './waygate-nav-bar.component';

describe('WaygateNavBarComponent', () => {
  let component: WaygateNavBarComponent;
  let fixture: ComponentFixture<WaygateNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateNavBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
