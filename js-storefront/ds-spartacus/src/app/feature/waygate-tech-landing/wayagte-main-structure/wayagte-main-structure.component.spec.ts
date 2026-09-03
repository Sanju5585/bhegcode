import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WayagteMainStructureComponent } from './wayagte-main-structure.component';

describe('WayagteMainStructureComponent', () => {
  let component: WayagteMainStructureComponent;
  let fixture: ComponentFixture<WayagteMainStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WayagteMainStructureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WayagteMainStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
