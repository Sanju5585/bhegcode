import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaygateTechHqComponent } from './waygate-tech-hq.component';

describe('WaygateTechHqComponent', () => {
  let component: WaygateTechHqComponent;
  let fixture: ComponentFixture<WaygateTechHqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaygateTechHqComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaygateTechHqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
