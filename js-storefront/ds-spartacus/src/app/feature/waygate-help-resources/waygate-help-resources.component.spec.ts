import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateHelpResourcesComponent } from './waygate-help-resources.component';

describe('WaygateHelpResourcesComponent', () => {
  let component: WaygateHelpResourcesComponent;
  let fixture: ComponentFixture<WaygateHelpResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateHelpResourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaygateHelpResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
