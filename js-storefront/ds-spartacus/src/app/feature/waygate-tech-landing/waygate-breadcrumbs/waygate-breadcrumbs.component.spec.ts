import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateBreadcrumbsComponent } from './waygate-breadcrumbs.component';

describe('WaygateBreadcrumbsComponent', () => {
  let component: WaygateBreadcrumbsComponent;
  let fixture: ComponentFixture<WaygateBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateBreadcrumbsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
