import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguratorHaveAquestionModelComponent } from './configurator-have-aquestion-model.component';

describe('ConfiguratorHaveAquestionModelComponent', () => {
  let component: ConfiguratorHaveAquestionModelComponent;
  let fixture: ComponentFixture<ConfiguratorHaveAquestionModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfiguratorHaveAquestionModelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguratorHaveAquestionModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
