import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateContactusComponent } from './waygate-contactus.component';

describe('WaygateContactusComponent', () => {
  let component: WaygateContactusComponent;
  let fixture: ComponentFixture<WaygateContactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateContactusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
