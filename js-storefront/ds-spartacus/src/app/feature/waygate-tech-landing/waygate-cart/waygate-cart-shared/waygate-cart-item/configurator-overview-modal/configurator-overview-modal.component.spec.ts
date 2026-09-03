import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguratorOverviewModalComponent } from './configurator-overview-modal.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ConfiguratorOverviewModalComponent', () => {
  let component: ConfiguratorOverviewModalComponent;
  let fixture: ComponentFixture<ConfiguratorOverviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfiguratorOverviewModalComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguratorOverviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
