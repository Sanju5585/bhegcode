import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateHeaderComponent } from './waygate-header.component';

describe('WaygateHeaderComponent', () => {
  let component: WaygateHeaderComponent;
  let fixture: ComponentFixture<WaygateHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaygateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
