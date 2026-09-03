import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickOrderPartsComponent } from './quick-order-parts.component';

describe('QuickOrderPartsComponent', () => {
  let component: QuickOrderPartsComponent;
  let fixture: ComponentFixture<QuickOrderPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuickOrderPartsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickOrderPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
