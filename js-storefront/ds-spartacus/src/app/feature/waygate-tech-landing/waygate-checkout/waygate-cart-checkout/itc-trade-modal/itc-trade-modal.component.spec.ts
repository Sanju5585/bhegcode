import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItcTradeModalComponent } from './itc-trade-modal.component';

describe('ItcTradeModalComponent', () => {
  let component: ItcTradeModalComponent;
  let fixture: ComponentFixture<ItcTradeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItcTradeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItcTradeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
