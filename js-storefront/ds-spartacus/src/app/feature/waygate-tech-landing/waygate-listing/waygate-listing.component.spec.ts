import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateListingComponent } from './waygate-listing.component';

describe('WaygateListingComponent', () => {
  let component: WaygateListingComponent;
  let fixture: ComponentFixture<WaygateListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateListingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
