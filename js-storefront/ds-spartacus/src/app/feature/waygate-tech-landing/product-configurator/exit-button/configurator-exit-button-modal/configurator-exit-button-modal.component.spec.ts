import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguratorExitButtonModalComponent } from './configurator-exit-button-modal.component';

describe('ConfiguratorExitButtonModalComponent', () => {
  let component: ConfiguratorExitButtonModalComponent;
  let fixture: ComponentFixture<ConfiguratorExitButtonModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfiguratorExitButtonModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguratorExitButtonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
