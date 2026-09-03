import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateMenuComponent } from './waygate-menu.component';

describe('WaygateMenuComponent', () => {
  let component: WaygateMenuComponent;
  let fixture: ComponentFixture<WaygateMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
