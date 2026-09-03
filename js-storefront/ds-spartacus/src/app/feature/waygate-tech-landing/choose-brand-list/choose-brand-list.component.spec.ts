import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBrandListComponent } from './choose-brand-list.component';

describe('ChooseBrandListComponent', () => {
  let component: ChooseBrandListComponent;
  let fixture: ComponentFixture<ChooseBrandListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseBrandListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseBrandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
