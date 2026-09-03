import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateManageAccountComponent } from './waygate-manage-account.component';

describe('WaygateManageAccountComponent', () => {
  let component: WaygateManageAccountComponent;
  let fixture: ComponentFixture<WaygateManageAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateManageAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaygateManageAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
