import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddEquipmentComponent } from './add-equipment.component';

describe('AddEquipmentComponent', () => {
  let component: AddEquipmentComponent;
  let fixture: ComponentFixture<AddEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AddEquipmentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid', () => {
    component.form.controls['partNo'].setValue('');
    component.form.controls['serialNo'].setValue('');
    expect(component.form.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.form.controls['partNo'].setValue('1000');
    component.form.controls['serialNo'].setValue('101010');
    expect(component.form.valid).toBeTruthy();
  });
});
