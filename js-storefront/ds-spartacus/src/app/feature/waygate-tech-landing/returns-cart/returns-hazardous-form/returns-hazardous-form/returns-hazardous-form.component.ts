import { ChangeDetectorRef, Component, ElementRef, Input, SecurityContext, ViewChild } from '@angular/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { ChemicalDetail, ExposureType, ExposureTypeTranslationKeys, HazardExposureElement, HazardousForm } from '../../../../rma/hazard-info/hazard-info.model';
import { REGULAR_PATTERN, testRegex } from '../../../../../core/generic-validator/regular-expressions';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslationService } from '@spartacus/core';
import { RmaService } from '../../../../rma/rma-services/rma.service';
import { FileProgressLayouts } from '../../../../../shared/models/fileSize.model';
import { Router } from '@angular/router';
import { CustomerAccountService } from '../../../../../core/customer-account/customer-account.service';

@Component({
  selector: 'app-returns-hazardous-form',
  standalone: false,
  templateUrl: './returns-hazardous-form.component.html',
  styleUrl: './returns-hazardous-form.component.scss'
})
export class ReturnsHazardousFormComponent 

{
  readonly PRODUCT_DISPLAY_THRESHOLD = 8;
  showNumber = this.PRODUCT_DISPLAY_THRESHOLD;
  index = 0;
  @ViewChild('textval') textval: ElementRef;
  @ViewChild('mandatoryMsg') mandatoryMsg: ElementRef;
  hazardInfo$: Observable<any>;
  exposureElements: HazardExposureElement[];
  fluidContamination: HazardExposureElement;
  otherContamination: HazardExposureElement;
  hazardousForm: HazardousForm = new HazardousForm();
  selectedChemicalDetailsRow = [];
  files = [];
  hazardData;
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
  productLine: string;
  showIcon: boolean = true;
  FillAtleastOneField: boolean = false;
  constructor(
    private translation: TranslationService,
    private rmaService: RmaService,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private custAccService: CustomerAccountService,
    public sanitizer: DomSanitizer,
    private launchDialogService: LaunchDialogService
  ) {}

  ngOnInit(): void {
    this.resetHazardousForm();
    this.hazardInfo$ = this.rmaService.getHazardInfo();
    this.hazardInfo$.subscribe((res) => {
      this.hazardData = res;
      if (
        this.hazardData?.partList?.length > 0 && this.hazardData.declarationA 
      ) {
        this.fillHazardousForm();
      }
    });
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
      
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
        type: ExposureType.lubricants,
        translationKey: ExposureTypeTranslationKeys.lubricants,
        isChecked: false,
      },
      {
        id: 3,
        type: ExposureType.gas,
        translationKey: ExposureTypeTranslationKeys.gas,
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
        type: ExposureType.coolants,
        translationKey: ExposureTypeTranslationKeys.coolants,
        isChecked: false,
      },
      {
        id: 7,
        type: ExposureType.solvent,
        translationKey: ExposureTypeTranslationKeys.solvent,
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
  closeModal(reason?: any): void {
    this.resetHazardousForm();
        this.launchDialogService.closeDialog(reason);
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
    this.checkAndClearValidationMessage();
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
    this.checkAndClearValidationMessage();
  }

  hazardousFormDetails(ev) {
    this.hazardousForm.hazardInfo = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, ev.target.value),
      REGULAR_PATTERN.alphaNumericWithSpecialCharater
    );
    this.checkAndClearValidationMessage();
  }

  isFormValid(): boolean {
    const hasExposure = this.exposureElements.some(el => el.isChecked);
    const hasFluid = this.fluidContamination?.isChecked;
    const hasOther = this.otherContamination?.isChecked;
    const hasChemicalDetails = this.hazardousForm.chemicalDetails?.some(detail =>
      detail.chemicalName || detail.un || detail.chemicalNotes
    );
    const hasHazardInfoText = !!this.hazardousForm.hazardInfo?.trim();
    const hasUploadedFiles = this.files?.length > 0;
  
    return hasExposure || hasFluid || hasOther || hasChemicalDetails || hasHazardInfoText || hasUploadedFiles;
  }

  saveHazardousForm() {
    if (!this.isFormValid()) {
      this.FillAtleastOneField = true;
      this.cdRef.detectChanges();
      setTimeout(() => {
        if (this.mandatoryMsg?.nativeElement) {
          this.mandatoryMsg.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
      }, 100);
      return;
    }
  
    this.hazardousForm.declarationA = true;
    this.hazardousForm.declarationB = false;
    this.rmaService.saveHazardInfo(this.hazardousForm).subscribe((res) => {
      if (res) {
        this.closeModal('confirm-hazardous-order');
        setTimeout(() => {
          this.router.navigate([`/${this.productLine}/returns/cart`]);
        }, 100);
      }
    });
  }

  checkAndClearValidationMessage() {
    if (this.FillAtleastOneField && this.isFormValid()) {
      this.FillAtleastOneField = false;
      this.cdRef.detectChanges();
    }
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

  cancelHazardousForm(){
    this.resetHazardousForm();
    this.closeModal('close-hazardous-order');
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
      //this.hazardousForm.fluidText = this.hazardData.fluidText;
    }

    if (this.hazardData.isOther) {
      const otherExposureEl = this.getCheckedHazExposureEl(ExposureType.others);
      this.exposureElChecked(otherExposureEl);
      //this.hazardousForm.otherText = this.hazardData.otherText;
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
    this.checkAndClearValidationMessage();
  }

  deletedFiles(event) {
    if (this.files.indexOf(event) > -1) {
      this.files.splice(this.files.indexOf(event), 1);
    }
  }


  stop(e) {
    if (e.target.value.length >= 500) {
      e.preventDefault();
      return false;
    }
  }

  myFunction(e) {
    if (e.target.value.length >= 500) {
      this.textval.nativeElement.value =
        this.textval.nativeElement.value.substring(0, 500);
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }

  trimText() {
    this.textval.nativeElement.value =
      this.textval.nativeElement.value.substring(0, 500);
  }
}
