import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedProdsComponent } from './related-prods.component';

describe('RelatedProdsComponent', () => {
  let component: RelatedProdsComponent;
  let fixture: ComponentFixture<RelatedProdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedProdsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RelatedProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
