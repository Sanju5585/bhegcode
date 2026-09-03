import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateCreateRmaContainerComponent } from './waygate-create-rma-container.component';

describe('WaygateCreateRmaContainerComponent', () => {
  let component: WaygateCreateRmaContainerComponent;
  let fixture: ComponentFixture<WaygateCreateRmaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateCreateRmaContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaygateCreateRmaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
