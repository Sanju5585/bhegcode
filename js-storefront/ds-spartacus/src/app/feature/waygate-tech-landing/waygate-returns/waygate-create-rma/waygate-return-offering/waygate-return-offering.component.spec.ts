import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateReturnOfferingComponent } from './waygate-return-offering.component';

describe('WaygateReturnOfferingComponent', () => {
  let component: WaygateReturnOfferingComponent;
  let fixture: ComponentFixture<WaygateReturnOfferingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateReturnOfferingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaygateReturnOfferingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
