import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcaEcaMissingDialogComponentComponent } from './eca-eca-missing-dialog-component.component';

describe('EcaEcaMissingDialogComponentComponent', () => {
  let component: EcaEcaMissingDialogComponentComponent;
  let fixture: ComponentFixture<EcaEcaMissingDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcaEcaMissingDialogComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcaEcaMissingDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
