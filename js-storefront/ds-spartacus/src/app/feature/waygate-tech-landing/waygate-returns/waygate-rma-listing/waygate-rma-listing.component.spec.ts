import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateRmaListingComponent } from './waygate-rma-listing.component';

describe('WaygateRmaListingComponent', () => {
  let component: WaygateRmaListingComponent;
  let fixture: ComponentFixture<WaygateRmaListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateRmaListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaygateRmaListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
