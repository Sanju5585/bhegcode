import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateMenuSecondaryComponent } from './waygate-menu-secondary.component';

describe('WaygateMenuSecondaryComponent', () => {
  let component: WaygateMenuSecondaryComponent;
  let fixture: ComponentFixture<WaygateMenuSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateMenuSecondaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateMenuSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
