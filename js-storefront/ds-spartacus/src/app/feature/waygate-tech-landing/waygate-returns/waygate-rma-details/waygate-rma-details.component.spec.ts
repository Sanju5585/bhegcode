import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateRmaDetailsComponent } from './waygate-rma-details.component';

describe('WaygateRmaDetailsComponent', () => {
  let component: WaygateRmaDetailsComponent;
  let fixture: ComponentFixture<WaygateRmaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateRmaDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaygateRmaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
