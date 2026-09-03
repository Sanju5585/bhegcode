import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateDuplicateEcaModalComponent } from './waygate-duplicate-eca-modal.component';

describe('WaygateDuplicateEcaModalComponent', () => {
  let component: WaygateDuplicateEcaModalComponent;
  let fixture: ComponentFixture<WaygateDuplicateEcaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateDuplicateEcaModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaygateDuplicateEcaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
