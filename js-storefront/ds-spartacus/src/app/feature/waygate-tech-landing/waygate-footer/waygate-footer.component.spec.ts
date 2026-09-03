import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateFooterComponent } from './waygate-footer.component';

describe('WaygateFooterComponent', () => {
  let component: WaygateFooterComponent;
  let fixture: ComponentFixture<WaygateFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateFooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaygateFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
