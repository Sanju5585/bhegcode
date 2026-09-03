import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateDummyProductComponent } from './waygate-dummy-product.component';

describe('WaygateDummyProductComponent', () => {
  let component: WaygateDummyProductComponent;
  let fixture: ComponentFixture<WaygateDummyProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateDummyProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaygateDummyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
