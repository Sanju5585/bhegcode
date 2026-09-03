import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslationService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { RmaService } from '../../rma-services/rma.service';
import {
  ChemicalDetail,
  ExposureType,
  ExposureTypeTranslationKeys,
  HazardExposureElement,
  HazardousForm,
} from '../hazard-info.model';
import { FileProgressLayouts } from '../../../../shared/models/fileSize.model';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';

@Component({
  standalone: false,
  selector: 'ds-hazard-info-form',
  templateUrl: './hazard-info-form.component.html',
  styleUrls: ['./hazard-info-form.component.scss'],
})
export class HazardInfoFormComponent implements OnInit {
  @ViewChild('textval') textval: ElementRef;
  @Input()
  showForm: boolean;

  @Input()
  hazardData: HazardousForm;

  exposureElements: HazardExposureElement[];
  fluidContamination: HazardExposureElement;
  otherContamination: HazardExposureElement;
  hazardousForm: HazardousForm = new HazardousForm();
  selectedChemicalDetailsRow = [];

  files = [];
  uploadParams = {
    entryNumber: 1,
    fields: 'DEFAULT',
    returnLocation: 'DEFAULT',
  };
  deleteParams = {
    fileName: '',
  };
  uploadUrl = 'users/current/myReturns/uploadHazardFormAttachments';
  deleteUrl = 'users/current/rma/removeHazardInfoFiles';
  readonly layouts = FileProgressLayouts;
  readonly ALLOWED_EXTENSIONS = ['pdf', 'jpg'];
  uploaded = false;

  declarationAError = false;

  constructor(
    private translation: TranslationService,
    private rmaService: RmaService,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.resetHazardousForm();
    if (
      this.hazardData.partList?.length > 0 &&
      (this.hazardData.declarationA || this.hazardData.declarationB)
    ) {
      this.fillHazardousForm();
    }
  }

  getDefaultExposureSubtanceCheckList() {
    return [
      {
        id: 0,
        type: ExposureType.radiation,
        translationKey: ExposureTypeTranslationKeys.radiation,
        isChecked: false,
      },
      {
        id: 1,
        type: ExposureType.acid,
        translationKey: ExposureTypeTranslationKeys.acid,
        isChecked: false,
      },
      {
        id: 2,
        type: ExposureType.gas,
        translationKey: ExposureTypeTranslationKeys.gas,
        isChecked: false,
      },
      {
        id: 3,
        type: ExposureType.lubricants,
        translationKey: ExposureTypeTranslationKeys.lubricants,
        isChecked: false,
      },
      {
        id: 4,
        type: ExposureType.biological,
        translationKey: ExposureTypeTranslationKeys.biological,
        isChecked: false,
      },
      {
        id: 5,
        type: ExposureType.alkali,
        translationKey: ExposureTypeTranslationKeys.alkali,
        isChecked: false,
      },
      {
        id: 6,
        type: ExposureType.solvent,
        translationKey: ExposureTypeTranslationKeys.solvent,
        isChecked: false,
      },
      {
        id: 7,
        type: ExposureType.coolants,
        translationKey: ExposureTypeTranslationKeys.coolants,
        isChecked: false,
      },
      {
        id: 8,
        type: ExposureType.fuels,
        translationKey: ExposureTypeTranslationKeys.fuels,
        isChecked: false,
      },
    ];
  }

  getDefaultFluidContaminationCheckList() {
    return {
      id: 10,
      type: ExposureType.fluid,
      translationKey: ExposureTypeTranslationKeys.fluid,
      isChecked: false,
    };
  }

  getDefaultOtherContaminationCheckList() {
    return {
      id: 9,
      type: ExposureType.others,
      translationKey: ExposureTypeTranslationKeys.others,
      isChecked: false,
    };
  }

  getHazExposureLabels(key): Observable<any> {
    return this.translation.translate(key);
  }

  exposureElChecked(exposureEl: HazardExposureElement, ev?) {
    if (exposureEl.type == ExposureType.fluid) {
      this.fluidContamination.isChecked = !this.fluidContamination.isChecked;
      if (this.fluidContamination.isChecked) {
        this.hazardousForm.containsFluids = this.fluidContamination.isChecked;
      }
    } else if (exposureEl.type == ExposureType.others) {
      this.otherContamination.isChecked = !this.otherContamination.isChecked;
      if (this.otherContamination.isChecked) {
        this.hazardousForm.isOther = this.otherContamination.isChecked;
      }
    } else {
      this.exposureElements.filter((el, index) => {
        if (exposureEl.id == el.id) {
          el.isChecked = !el.isChecked;
          if (el.isChecked) {
            this.hazardousForm.hazardType.push(el.type);
          } else {
            const indexOfEl = this.hazardousForm.hazardType.indexOf(el.type);
            if (indexOfEl > -1) {
              this.hazardousForm.hazardType.splice(indexOfEl, 1);
            }
          }
        }
      });
    }
  }

  deleteChemicalRow() {
    if (this.selectedChemicalDetailsRow.length > 0) {
      const tempArr = [];
      this.selectedChemicalDetailsRow.forEach((elIndex) => {
        if (this.hazardousForm.chemicalDetails[elIndex]) {
          tempArr.push(this.hazardousForm.chemicalDetails[elIndex]);
        }
      });
      this.hazardousForm.chemicalDetails = [];
      this.hazardousForm.chemicalDetails = tempArr;
    } else {
      this.hazardousForm.chemicalDetails.pop();
    }
  }

  addChemicalRow() {
    let newChemicalRow = new ChemicalDetail('', '');
    this.hazardousForm.chemicalDetails.push(newChemicalRow);
  }

  msdsRadioCheck(ev, chemEl: ChemicalDetail) {
    if (ev.target.value == true || ev.target.value == 'true') {
      chemEl.isMsdnSupplied = true;
    } else {
      chemEl.isMsdnSupplied = false;
    }
  }

  hazardExposureChange(event, item, rowIndex) {
    this.hazardousForm.chemicalDetails.forEach((items, index) => {
      if (item == 'chemicalName') {
        if (index == rowIndex) {
          items.chemicalName = testRegex(
            this.sanitizer.sanitize(SecurityContext.HTML, event.target.value),
            REGULAR_PATTERN.alphaNumericWithSpecialCharater
          );
        }
      } else if (item == 'un') {
        if (index == rowIndex) {
          items.un = testRegex(
            this.sanitizer.sanitize(SecurityContext.HTML, event.target.value),
            REGULAR_PATTERN.alphaNumericWithSpecialCharater
          );
        }
      } else {
        if (index == rowIndex) {
          items.chemicalNotes = testRegex(
            this.sanitizer.sanitize(SecurityContext.HTML, event.target.value),
            REGULAR_PATTERN.alphaNumericWithSpecialCharater
          );
        }
      }
    });
  }

  checkHazardDeclaration(ev) {
    this.hazardousForm.declarationA = ev.target.checked;
    this.hazardousForm.declarationB = false;
  }

  checkNoHazardDeclaration(ev) {
    this.hazardousForm.declarationB = ev.target.checked;
    this.hazardousForm.declarationA = false;
  }

  hazardousFormDetails(ev) {
    this.hazardousForm.hazardInfo = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, ev.target.value),
      REGULAR_PATTERN.alphaNumericWithSpecialCharater
    );
  }

  saveHazardousForm() {
    if (
      (this.showForm && !this.hazardousForm.declarationA) ||
      (!this.showForm && !this.hazardousForm.declarationB)
    ) {
      this.declarationAError = true;
      return;
    }
    if (this.hazardousForm.declarationB) {
      this.resetHazardousForm();
      this.hazardousForm = {
        ...this.hazardousForm,
        declarationB: true,
        hazardFormAttachments: [],
      };
    }
    this.rmaService.saveHazardInfo(this.hazardousForm).subscribe((res) => {
      if (res) {
        this.router.navigate(['/rma/cart']);
      }
    });
  }

  resetHazardousForm() {
    const newHazForm = new HazardousForm();
    this.hazardousForm = newHazForm;
    this.addChemicalRow();
    this.exposureElements = this.getDefaultExposureSubtanceCheckList();
    this.fluidContamination = this.getDefaultFluidContaminationCheckList();
    this.otherContamination = this.getDefaultOtherContaminationCheckList();
    this.files = [];
    this.cdRef.detectChanges();
  }

  fillHazardousForm() {
    if (this.hazardData.hazardType?.length > 0) {
      this.hazardData.hazardType.forEach((element) => {
        const exposureEl = this.getCheckedHazExposureEl(element);
        this.exposureElChecked(exposureEl);
      });
    }

    if (this.hazardData.containsFluids) {
      const fluidExposureEl = this.getCheckedHazExposureEl(ExposureType.fluid);
      this.exposureElChecked(fluidExposureEl);
      this.hazardousForm.fluidText = this.hazardData.fluidText;
    }

    if (this.hazardData.isOther) {
      const otherExposureEl = this.getCheckedHazExposureEl(ExposureType.others);
      this.exposureElChecked(otherExposureEl);
      this.hazardousForm.otherText = this.hazardData.otherText;
    }

    if (this.hazardData.chemicalDetails?.length > 0) {
      this.hazardousForm.chemicalDetails = this.hazardData.chemicalDetails;
    }

    if (this.hazardData.hazardFormAttachments?.length > 0) {
      this.uploaded = true;
      this.hazardData.hazardFormAttachments.forEach((el: any) => {
        this.files.push({
          name: el,
        });
      });
    }

    this.hazardousForm = { ...this.hazardData };
  }

  getCheckedHazExposureEl(type) {
    switch (type) {
      case ExposureType.radiation:
        return {
          id: 0,
          type: ExposureType.radiation,
          translationKey: ExposureTypeTranslationKeys.radiation,
          isChecked: false,
        };
      case ExposureType.acid:
        return {
          id: 1,
          type: ExposureType.acid,
          translationKey: ExposureTypeTranslationKeys.acid,
          isChecked: false,
        };
      case ExposureType.gas:
        return {
          id: 2,
          type: ExposureType.gas,
          translationKey: ExposureTypeTranslationKeys.gas,
          isChecked: false,
        };
      case ExposureType.lubricants:
        return {
          id: 3,
          type: ExposureType.lubricants,
          translationKey: ExposureTypeTranslationKeys.lubricants,
          isChecked: false,
        };
      case ExposureType.biological:
        return {
          id: 4,
          type: ExposureType.biological,
          translationKey: ExposureTypeTranslationKeys.biological,
          isChecked: false,
        };
      case ExposureType.alkali:
        return {
          id: 5,
          type: ExposureType.alkali,
          translationKey: ExposureTypeTranslationKeys.alkali,
          isChecked: false,
        };
      case ExposureType.solvent:
        return {
          id: 6,
          type: ExposureType.solvent,
          translationKey: ExposureTypeTranslationKeys.solvent,
          isChecked: false,
        };
      case ExposureType.coolants:
        return {
          id: 7,
          type: ExposureType.coolants,
          translationKey: ExposureTypeTranslationKeys.coolants,
          isChecked: false,
        };
      case ExposureType.fuels:
        return {
          id: 8,
          type: ExposureType.fuels,
          translationKey: ExposureTypeTranslationKeys.fuels,
          isChecked: false,
        };
      case ExposureType.others:
        return {
          id: 9,
          type: ExposureType.others,
          translationKey: ExposureTypeTranslationKeys.others,
          isChecked: false,
        };
      case ExposureType.fluid:
        return {
          id: 10,
          type: ExposureType.fluid,
          translationKey: ExposureTypeTranslationKeys.fluid,
          isChecked: false,
        };
    }
  }

  selectedFiles(event) {
    this.uploaded = false;
    this.deleteParams.fileName = event[0].name;
    this.files = [...this.files, ...event];
  }

  deletedFiles(event) {
    if (this.files.indexOf(event) > -1) {
      this.files.splice(this.files.indexOf(event), 1);
    }
  }

  checkAll(ev) {
    if (ev.target.checked) {
      // this.selectedChemicalDetailsRow = this.hazardousForm.chemicalDetails;
      this.hazardousForm.chemicalDetails.forEach((el, index) =>
        this.selectedChemicalDetailsRow.push(index)
      );
      this.hazardousForm.chemicalDetails?.forEach((el) => {
        el.isSelected = true;
      });
    } else {
      this.selectedChemicalDetailsRow = [];
      this.hazardousForm?.chemicalDetails?.forEach((el) => {
        el.isSelected = false;
      });
    }
  }

  checkChemRow(ev, row, rowIndex) {
    if (ev.target.checked) {
      this.selectedChemicalDetailsRow.push(rowIndex);
      this.hazardousForm?.chemicalDetails.forEach((el, index) => {
        if (index == rowIndex) {
          el.isSelected = true;
        }
      });
    } else {
      this.hazardousForm?.chemicalDetails.forEach((el, index) => {
        if (index == rowIndex) {
          el.isSelected = false;
        }
      });
      this.selectedChemicalDetailsRow.splice(rowIndex, 1);
    }
  }

  isAllChecked() {
    if (
      this.selectedChemicalDetailsRow?.length > 0 &&
      this.hazardousForm?.chemicalDetails?.length ==
        this.selectedChemicalDetailsRow?.length
    ) {
      return true;
    }
    return false;
  }

  someRowsChecked() {
    if (
      this.selectedChemicalDetailsRow?.length > 0 &&
      this.hazardousForm?.chemicalDetails?.length !=
        this.selectedChemicalDetailsRow?.length
    ) {
      return true;
    }
    return false;
  }

  stop(e) {
    if (e.target.value.length >= 250) {
      e.preventDefault();
      return false;
    }
  }

  myFunction(e) {
    if (e.target.value.length >= 250) {
      this.textval.nativeElement.value =
        this.textval.nativeElement.value.substring(0, 250);
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }

  trimText() {
    this.textval.nativeElement.value =
      this.textval.nativeElement.value.substring(0, 250);
  }
}
