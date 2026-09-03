import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateSoldtoAddressComponent } from './waygate-soldto-address.component';

describe('WaygateSoldtoAddressComponent', () => {
  let component: WaygateSoldtoAddressComponent;
  let fixture: ComponentFixture<WaygateSoldtoAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateSoldtoAddressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateSoldtoAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
