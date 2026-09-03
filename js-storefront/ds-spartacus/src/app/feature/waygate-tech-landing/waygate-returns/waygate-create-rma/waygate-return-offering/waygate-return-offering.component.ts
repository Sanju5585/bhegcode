import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SecurityContext,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslationService, OCC_USER_ID_CURRENT } from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs';
import { DS_DIALOG } from '../../../../../core/dialog/dialog.config';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../../core/generic-validator/regular-expressions';
import {
  OfferTypes,
  ServiceOfferingCategories,
} from '../../../../../core/rma/models/rma-form.models';
import { atLeastOne } from '../../../../../shared/directives/at-least-one.validator';
import {
  RmaEntry,
  ReturnType,
  ReturnTypeId,
  OTHER_PART_NUMBER,
  ServiceOffering,
} from '../../../../../shared/models/rma/rma.model';
import { RmaService } from '../../../../rma/rma-services/rma.service';

@Component({
  selector: 'app-waygate-return-offering',
  standalone: false,
  templateUrl: './waygate-return-offering.component.html',
  styleUrl: './waygate-return-offering.component.scss',
})
export class WaygateReturnOfferingComponent {
  @ViewChild('textval') textval: ElementRef;
  offerTypes = OfferTypes;
  selectedRadio = OfferTypes.REPAIR;

  @Input()
  serviceOfferingData: any;

  @Input()
  rmaEntry: RmaEntry;

  @Output()
  rmaEntryData = new EventEmitter<RmaEntry>();

  @Output()
  availableAccessories = new EventEmitter<any>();

  @Output()
  serviceOfferingTerms = new EventEmitter<any>();

  @ViewChild('tab') myDiv: ElementRef;

  // rmaEntry: RmaEntry;

  selectedServiceOfferings = [];
  selectedAccessories = [];
  serviceOfferingCategories = ServiceOfferingCategories;
  returnOfferingsForm: FormGroup;
  allAccessories = [];
  checkedAccessories = [];
  isNaN: Function = Number.isNaN;
  returnTypes: ReturnType[];
  problemDescriptionText: string = '';
  selectedRepairOffering;
  selectedCalibrationOffering;
  selectedReturnType;
  isOtherPart = false;
  disableServiceOffSelection = false;
  serviceOffTerms = [];

  constructor(
    private rmaService: RmaService,
    private launchDialogService: LaunchDialogService,
    private translate: TranslationService,
    public sanitizer: DomSanitizer
  ) {
    this.returnOfferingsForm = new FormGroup({
      radioInputs: new FormControl(null, Validators.required),
      serviceData: new FormGroup(
        {
          repair: new FormControl(null),
          calibration: new FormControl(null),
          return: new FormControl(null),
        },
        {
          validators: atLeastOne(Validators.required, [
            'repair',
            'return',
            'calibration',
          ]),
        }
      ),
    });

    this.returnTypes = [
      {
        type: ReturnTypeId.credit,
        labelName: this.getTranslatedText('rma-form.returnForCredit'),
      },
      {
        type: ReturnTypeId.scrap,
        labelName: this.getTranslatedText('rma-form.returnForScrap'),
      },
      {
        type: ReturnTypeId.replace,
        labelName: this.getTranslatedText('rma-form.productRecalled'),
      },
    ];
  }
  serviceTabs = [
    {
      label: 'rma-form.repair',
      key: OfferTypes.REPAIR,
    },
    {
      label: 'rma-form.caliberate',
      key: OfferTypes.CALIBRATION,
    },
    {
      label: 'rma-form.returnCreditScrap',
      key: OfferTypes.RETURN,
    },
  ];

  ngOnInit(): void {
    if (this.rmaEntry?.partNumber === OTHER_PART_NUMBER) {
      this.isOtherPart = true;
      this.selectedRadio = OfferTypes.RETURN;
    }
    if (this.rmaEntry?.serviceOfferings?.length > 0) {
      this.fillServiceOfferingForm();
    }
    this.forceCalibrationIfRepairMissing();
    this.updateLangForOptions(this.serviceTabs, 'label');
  }

  updateLangForOptions(options: any[], key: string) {
    options.forEach((object: any) => {
      this.translate.translate(object[key]).subscribe((res) => {
        object[key] = res;
      });
    });
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  changeOfferingTabCustom(type: string) {
    if (this.disableServiceOffSelection) return;
    this.identifyOfferChanged(type);
  }

  fillServiceOfferingForm() {
    // this.validateAccessoryServOffering();
    this.problemDescriptionText = this.rmaEntry.problemDescription;
    for (const offering of this.rmaEntry.serviceOfferings) {
      if (offering.offeringType === ServiceOfferingCategories.REPAIR) {
        this.selectedRadio = OfferTypes.REPAIR;
        const repairOffering = this.getServiceOfferingData(
          offering.offeringCode
        );
        if (repairOffering) {
          this.selectedRepairOffering = repairOffering;
          this.selectedServiceOfferings.push(repairOffering);
        }
      } else if (
        offering.offeringType === ServiceOfferingCategories.CALIBRATION
      ) {
        this.selectedRadio = OfferTypes.CALIBRATION;
        const calOffering = this.getServiceOfferingData(offering.offeringCode);
        if (calOffering) {
          this.selectedCalibrationOffering = calOffering;
          this.selectedServiceOfferings.push(calOffering);
        }
      } else if (
        offering.offeringText === ReturnTypeId.credit ||
        offering.offeringText === ReturnTypeId.replace ||
        offering.offeringText === ReturnTypeId.scrap
      ) {
        this.selectedRadio = OfferTypes.RETURN;
        this.selectedReturnType = offering.offeringText;
        this.selectReturn(offering.offeringText);
      }
    }
    this.getOfferingTerms();
    this.getAccessories();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rmaEntry']?.currentValue) {
      const entry = changes['rmaEntry'].currentValue;
      if (entry.partNumber === OTHER_PART_NUMBER) {
        this.isOtherPart = true;
        this.selectedRadio = OfferTypes.RETURN;
      }
      if (entry.serviceOfferings?.length > 0) {
        this.problemDescriptionText = entry.problemDescription;
        for (const offering of entry.serviceOfferings) {
          if (offering.offeringType === ServiceOfferingCategories.REPAIR) {
            this.selectedRadio = OfferTypes.REPAIR;
          } else if (
            offering.offeringType === ServiceOfferingCategories.CALIBRATION
          ) {
            this.selectedRadio = OfferTypes.CALIBRATION;
          } else {
            this.selectedRadio = OfferTypes.RETURN;
          }
        }
      }
      this.forceCalibrationIfRepairMissing();
    }
  }

  validateAccessoryServOffering() {
    this.rmaEntry.serviceOfferings.forEach((el) => {
      this.checkAccessoryServOffOverlap(el);
    });
  }

  checkAccessoryServOffOverlap(el) {
    this.rmaEntry.parentServiceOfferings?.forEach((el) => {});
  }

  getServiceOfferingData(serviceOffering) {
    let offObject;
    this.serviceOfferingData?.offeringList[0]?.partOfferingDescription.forEach(
      (offering) => {
        if (offering.serviceOffering === serviceOffering) {
          offObject = offering;
        }
      }
    );
    return offObject;
  }

  changeOfferingTab(event) {
    if (this.disableServiceOffSelection) {
      event.preventDefault();
      return;
    }
    if (
      document.querySelector('[data-key="Return"]').classList.contains('active')
    ) {
      document.querySelector('[data-key="Return"]').classList.remove('active');
      document.querySelector('[data-key="Repair"]').classList.add('active');
    }
    this.identifyOfferChanged(event?.detail?.key);
  }

  identifyOfferChanged(offerType) {
    this.selectedRadio = offerType;
    if (offerType == OfferTypes.RETURN) {
      this.selectedServiceOfferings = [];
      this.problemDescriptionText = '';
      // const servOffering = new ServiceOffering();
      this.refreshServiceOfferings();
      this.rmaEntry = {
        ...this.rmaEntry,
        problemDescription: this.problemDescriptionText,
        serviceOfferings: [],
        accessoryProducts: [],
      };
      this.rmaEntryData.emit(this.rmaEntry);
    } else {
      this.rmaEntryData.emit(this.rmaEntry);
    }
  }

  refreshServiceOfferings() {
    this.selectedCalibrationOffering = null;
    this.selectedRepairOffering = null;
    this.selectedReturnType = null;
    this.allAccessories = [];
    this.selectedAccessories = [];
  }

  selectOffering(event) {
    this.selectedServiceOfferings = this.selectedServiceOfferings.filter(
      (offering) => offering.category !== event.category
    );
    this.selectedServiceOfferings.push(event);
    this.selectedRepairOffering = this.selectedServiceOfferings.find(
      (el) => el.category == ServiceOfferingCategories.REPAIR
    );
    this.selectedCalibrationOffering = this.selectedServiceOfferings.find(
      (el) => el.category == ServiceOfferingCategories.CALIBRATION
    );
    this.rmaEntry = {
      ...this.rmaEntry,
      availableSitesList: [...this.getAvailableSites()],
      returnToSiteId: this.getReturnToSite(),
      serviceOfferings: this.selectedServiceOfferings?.map((offering) => {
        return {
          offeringType: offering?.category,
          offeringCode: offering?.serviceOffering,
          offeringPrice: offering?.plants[0]?.price,
          offeringDiscount: offering?.plants[0].discount,
          offeringText: offering?.serviceOfferingDescription,
          problemDescription: this.problemDescriptionText,
          otherDetails: '',
          availableSitesList: offering.plants.map((plant) => ({
            siteId: plant.plantCode,
            siteName: plant.plantType,
          })),
        };
      }),
    };
    this.getOfferingTerms();
    this.rmaEntryData.emit(this.rmaEntry);
    this.getAccessories();
  }

  getAvailableSites() {
    let sites = [];
    this.selectedServiceOfferings?.forEach((offering) => {
      offering.plants.map((plant) => {
        sites.push({
          siteId: plant.plantCode,
          siteName: plant.plantType,
        });
      });
    });
    sites = sites.filter(function ({ siteId }) {
      return !this[siteId] && (this[siteId] = siteId);
    }, {});
    return [...sites];
  }

  getReturnToSite() {
    let sites = this.getAvailableSites();
    let siteId = '';
    siteId =
      this.checkForDropshipPlant(sites) || this.checkForAlternatePlant(sites);
    return siteId;
  }

  checkForDropshipPlant(sites) {
    for (const el of sites) {
      if (el.siteName == 'DropShip Plant') {
        return el.siteId;
      }
    }
    return false;
  }

  checkForAlternatePlant(sites) {
    for (const el of sites) {
      if (el.siteName == 'Alternate Plant') {
        return el.siteId;
      }
    }
    return false;
  }

  removeSelectedServiceOff(svcOffering) {
    this.selectedServiceOfferings = this.selectedServiceOfferings.filter(
      (offering) => offering.category !== svcOffering.category
    );
    if (svcOffering?.category == ServiceOfferingCategories.REPAIR) {
      this.selectedRepairOffering = null;
    } else if (svcOffering?.category == ServiceOfferingCategories.CALIBRATION) {
      this.selectedCalibrationOffering = null;
    }
    // this.selectedServiceOfferings.push(svcOffering);

    this.getOfferingTerms();
    this.rmaEntry = {
      ...this.rmaEntry,
      accessoryPartNumbers: [],
      serviceOfferings: this.selectedServiceOfferings?.map((offering) => {
        return {
          offeringType: offering?.category,
          offeringCode: offering?.serviceOffering,
          offeringPrice: offering?.plants[0].price,
          offeringDiscount: offering?.plants[0].discount,
          offeringText: offering?.serviceOfferingDescription,
          problemDescription: this.problemDescriptionText,
          otherDetails: '',
          availableSitesList: offering.plants.map((plant) => ({
            siteId: plant.plantCode,
            siteName: plant.plantType,
          })),
        };
      }),
    };
    this.rmaEntryData.emit(this.rmaEntry);
    this.allAccessories = [];
    this.selectedAccessories = [];
    this.getAccessories();
  }

  getOfferingTerms() {
    this.serviceOffTerms = [];
    this.selectedServiceOfferings.forEach((el) => {
      if (el.offeringText) {
        const termsObj: any = {};
        termsObj.showServiceOffTerms = false;
        if (el.offeringTextConfirmation.toLowerCase() == 'y') {
          termsObj.showServiceOffTerms = true;
          termsObj.serviceOffTermsSelected = false;
        }
        termsObj.serviceOffTermsText = el.offeringText;
        this.serviceOffTerms.push(termsObj);
      }
    });
    this.serviceOfferingTerms.emit(this.serviceOffTerms);
  }

  checkOfferingTerms(terms, ev) {
    terms.serviceOffTermsSelected = ev.target.checked;
    this.serviceOfferingTerms.emit(this.serviceOffTerms);
  }

  removeOfferingTerms(currentOff?) {
    if (!currentOff) {
      this.serviceOffTerms = [];
      return;
    }
    this.serviceOffTerms = this.serviceOffTerms.filter(
      (el) => el.serviceOffering === currentOff.serviceOffering
    );
  }
  selectReturn(evt: ReturnTypeId) {
    const servOffering = new ServiceOffering();
    servOffering.offeringType = evt;
    this.rmaEntry = {
      ...this.rmaEntry,
      problemDescription: this.problemDescriptionText,
      serviceOfferings: [servOffering],
    };

    this.rmaEntryData.emit(this.rmaEntry);
  }

  sumOfServcies() {
    let sum = this.selectedServiceOfferings.reduce(
      (a: number, c) => a + parseInt(c?.plants[0]?.price),
      0
    );
    return this.getFormattedPrice(sum);
  }

  atLeastOne =
    (validator: ValidatorFn, controls: string[] = null) =>
    (group: FormGroup): ValidationErrors | null => {
      if (!controls) {
        controls = Object.keys(group.controls);
      }

      const hasAtLeastOne =
        group &&
        group.controls &&
        controls.some((k) => !validator(group.controls[k]));

      return hasAtLeastOne
        ? null
        : {
            atLeastOne: true,
          };
    };

  getAccessories() {
    if (this.rmaEntry?.isAccessory) {
      return;
    }
    let obj = {
      partNumber:
        this.serviceOfferingData.offeringList[0].materialData[0].partNumber,
      serviceOffering: this.selectedServiceOfferings.map(
        (offering) => offering?.serviceOffering
      ),
    };
    this.rmaService
      .getAccessories(OCC_USER_ID_CURRENT, obj)
      .subscribe((success) => {
        if (success?.length > 0) {
          if (this.rmaEntry?.accessoryPartNumbers?.length > 0) {
            this.checkedAccessories = [];
            this.rmaEntry?.accessoryPartNumbers.forEach((el) =>
              this.getSelectedAccessories(success, el)
            );
          }
          this.availableAccessories.emit(success);
          this.allAccessories = success;
        } else {
          this.availableAccessories.emit([]);
          this.allAccessories = [];
        }
      });
  }

  getSelectedAccessories(availableAcc: [], selectedAcc) {
    availableAcc?.forEach((part: any) => {
      if (part.code == selectedAcc) {
        this.checkedAccessories.push(part);
      }
    });
    this.addAccessories();
  }

  addAccessories() {
    this.selectedAccessories = this.checkedAccessories;
    this.selectedAccessories = this.selectedAccessories.filter(
      (v, i, a) => a.findIndex((t) => t.code === v.code) === i
    );

    this.rmaEntry = {
      ...this.rmaEntry,
      accessoryPartNumbers: this.selectedAccessories.map(
        (element) => element.code
      ),
    };

    if (this.rmaEntry.accessoryPartNumbers.length > 0) {
      this.rmaEntry.accessoryPartNumbers = [
        ...new Set(this.rmaEntry.accessoryPartNumbers),
      ];
    }
    this.rmaEntryData.emit(this.rmaEntry);
  }

  checkAccesories(event, accessory) {
    if (event.target.checked === true) {
      this.checkedAccessories.push(accessory);
    } else {
      this.checkedAccessories = this.checkedAccessories.filter(
        (item) => item.code != accessory.code
      );
    }
    this.rmaEntry = {
      ...this.rmaEntry,
      accessoryPartNumbers: this.selectedAccessories.map(
        (element) => element.code
      ),
    };

    this.rmaEntryData.emit(this.rmaEntry);
  }

  getFormattedPrice(price) {
    if (!this.isNaN(price)) {
      return `${this.serviceOfferingData?.offeringList[0]?.currencyIso} ${
        this.serviceOfferingData?.offeringList[0]?.currencySymbol
      }${parseFloat(price).toFixed(2)}`;
    }
    if (this.isNaN(price)) {
      return price;
    }
    return '';
  }

  onProblemDescChange(ev) {
    let problemText;
    problemText = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, ev.target.value),
      REGULAR_PATTERN.alphaNumericWithSpecialCharater
    );
    const textrea = document.createElement('textarea');
    textrea.innerHTML = problemText;
    this.problemDescriptionText = textrea.textContent.replace(REGULAR_PATTERN.alphaNumeric, '');
    this.problemDescriptionText = textrea.value.replace(/&amp;/g, '&');
    this.rmaEntry = {
      ...this.rmaEntry,
      problemDescription: this.problemDescriptionText,
    };
    this.rmaEntryData.emit(this.rmaEntry);
  }

  openAddAccessoriesModal() {
    const componentData = {
      availableAccessories: this.allAccessories,
    };
    const addAccessoriesDialog = this.launchDialogService.openDialog(
      DS_DIALOG.ADD_ACCESSORIES_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (addAccessoriesDialog) {
      addAccessoriesDialog.pipe(take(1)).subscribe((value) => {
        if (
          value &&
          value.instance?.reason == '' &&
          value?.instance?.selectedAccessories.length > 0
        ) {
          this.checkedAccessories = value.instance.selectedAccessories;
          this.addAccessories();
        }
      });
    }
  }

  removeAccessory(accessory) {
    this.selectedAccessories = this.selectedAccessories?.filter(
      (item) => item.code !== accessory.code
    );
    this.checkedAccessories = this.selectedAccessories;
    this.addAccessories();
  }

  stop(e) {
    if (e.target.value.length >= 2000) {
      e.preventDefault();
      return false;
    }
  }

  myFunction(e) {
    if (e.target.value.length >= 2000) {
      this.textval.nativeElement.value =
        this.textval.nativeElement.value.substring(0, 2000);
      this.problemDescriptionText = this.textval.nativeElement.value;
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }

  isAccessorySelected(accessory): boolean {
    return this.selectedAccessories.some(
      (item) => item.code === accessory.code
    );
  }

  onAccessoryToggle(event, accessory): void {
    if (event.target.checked) {
      this.checkedAccessories.push(accessory);
    } else {
      this.checkedAccessories = this.checkedAccessories.filter(
        (item) => item.code !== accessory.code
      );
    }
    this.addAccessories();
  }

  trimText() {
    this.textval.nativeElement.value =
      this.textval.nativeElement.value.substring(0, 2000);
    this.problemDescriptionText = this.textval.nativeElement.value;
    this.rmaEntry = {
      ...this.rmaEntry,
      problemDescription: this.problemDescriptionText,
    };
    this.rmaEntryData.emit(this.rmaEntry);
  }

  isProbDescMandatory() {
    for (let el of this.selectedServiceOfferings) {
      if (
        el.category == ServiceOfferingCategories.REPAIR ||
        el.category == ServiceOfferingCategories.CALIBRATION
      ) {
        return true;
      }
    }
    return false;
  }

  forceCalibrationIfRepairMissing() {
    if (this.selectedRadio === this.offerTypes.RETURN) {
      return;
    }
    const partDescriptions =
      this.serviceOfferingData?.offeringList[0]?.partOfferingDescription || [];
    const hasRepair = partDescriptions.some(
      (desc) => desc.category === this.serviceOfferingCategories.REPAIR
    );
    const hasCalibration = partDescriptions.some(
      (desc) => desc.category === this.serviceOfferingCategories.CALIBRATION
    );
    if (!hasRepair && hasCalibration) {
      this.selectedRadio = this.offerTypes.CALIBRATION;
    }
  }

  getProblemDescriptionPlaceholder(): string {
    switch (this.selectedRadio) {
      case this.offerTypes.REPAIR:
        return this.getTranslatedText('rma-form.repairProblemDesc');
      case this.offerTypes.CALIBRATION:
        return this.getTranslatedText('rma-form.calibrateProblemDesc');
      case this.offerTypes.RETURN:
        return this.getTranslatedText('rma-form.returnProblemDesc');
      default:
        return this.getTranslatedText('rma-form.enterProblemDescription');
    }
  }
}
