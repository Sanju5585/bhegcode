import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateRmaOverviewDailogComponent } from './waygate-rma-overview-dailog.component';

describe('WaygateRmaOverviewDailogComponent', () => {
  let component: WaygateRmaOverviewDailogComponent;
  let fixture: ComponentFixture<WaygateRmaOverviewDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateRmaOverviewDailogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaygateRmaOverviewDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
