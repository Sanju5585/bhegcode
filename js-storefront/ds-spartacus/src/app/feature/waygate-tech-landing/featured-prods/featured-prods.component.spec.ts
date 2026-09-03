import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProdsComponent } from './featured-prods.component';

describe('FeaturedProdsComponent', () => {
  let component: FeaturedProdsComponent;
  let fixture: ComponentFixture<FeaturedProdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedProdsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
