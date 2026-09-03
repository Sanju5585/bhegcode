import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCustomerAccountComponent } from './search-customer-account.component';

describe('SearchCustomerAccountComponent', () => {
  let component: SearchCustomerAccountComponent;
  let fixture: ComponentFixture<SearchCustomerAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchCustomerAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCustomerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
