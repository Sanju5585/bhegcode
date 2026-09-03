import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OCC_USER_ID_CURRENT, TranslationService } from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { RmaService } from '../../rma-services/rma.service';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';
import { ProductSearchType } from '../../../../core/rma/models/rma-form.models';
import {
  RmaEntry,
  OTHER_PART_NUMBER,
} from '../../../../shared/models/rma/rma.model';

@Component({
  standalone: false,
  selector: 'ds-identify-equipment',
  templateUrl: './identify-equipment.component.html',
  styleUrls: ['./identify-equipment.component.scss'],
})
export class IdentifyEquipmentComponent implements OnInit, OnChanges {
  @Output()
  equipmentValidation = new EventEmitter<boolean>();

  @Input()
  submitted: boolean;

  @Output()
  getServiceOfferingData = new EventEmitter<any>();

  @Output()
  setSelectedProduct = new EventEmitter<any>();

  @Output()
  rmaEntryData = new EventEmitter<RmaEntry>();

  @Output()
  rmapartNumberForm = new EventEmitter<any>();

  serviceOfferingData$: Observable<any>;

  @Input()
  rmaEntry: RmaEntry;

  @Input()
  prevSelectedProduct: any;

  @Input()
  prevSelectedServiceOfferings: any;

  productSearchType = ProductSearchType;
  selectedRadio = this.productSearchType.PART;
  openHelp: any;
  products = [];
  selectedProduct: any = null;
  selectedProductForm = new FormGroup({
    quantity: new FormControl(1),
    partNumber: new FormControl(null, Validators.required),
    serialNumber: new FormControl(null),
    productDetails: new FormControl(''),
  });
  serviceOfferingData: any;
  showSerialNumDropdown = false;
  serialNumSelectedFromList = false;
  serialNumList = [];

  serviceOfferingsErrors = {
    incorrectPart: {
      errorFound: false,
      errorMessage: this.getTranslatedText('rma-form.incorrectPartNumber'),
    },
    unavailablePart: {
      errorFound: false,
      errorMessage: this.getTranslatedText('rma-form.partNumberInvalid'),
    },
  };
  showSearchResults = false;
  isOtherPart = false;

  constructor(
    private rmaService: RmaService,
    private el: ElementRef,
    private translate: TranslationService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    if (this.rmaEntry) {
      this.selectedProductForm.patchValue(this.rmaEntry);
      if (this.rmaEntry.partNumber) {
        this.selectedProduct = {
          code: this.rmaEntry.partNumber,
          similar: this.rmaEntry.similarPart
            ? this.rmaEntry.similarPart
            : false,
        };
      }
    }
    this.selectedProductForm.valueChanges.subscribe((data) => {
      if (data?.partNumber) {
        let serialNos = [];
        this.equipmentValidation.emit(this.selectedProductForm.valid);
        if (
          data.quantity > 1 &&
          data?.serialNumber &&
          !Array.isArray(data.serialNumber)
        ) {
          serialNos = data?.serialNumber?.split(/[ ,\n]+/);
        } else if (data?.serialNumber && Array.isArray(data.serialNumber)) {
          serialNos =
            data?.serialNumber?.length > 0 ? [...data.serialNumber] : [];
        } else if (data?.serialNumber && !Array.isArray(data.serialNumber)) {
          serialNos =
            data?.serialNumber?.length > 0 ? [data?.serialNumber] : [];
        }
        this.rmaEntry = {
          ...this.rmaEntry,
          quantity: data.quantity,
          partNumber: data.partNumber,
          ...(data.productDetails?.length > 0
            ? { productDetails: data.productDetails }
            : {}),
          ...(serialNos.length > 0 ? { serialNumber: serialNos } : {}),
        };
        this.rmaEntryData.emit(this.rmaEntry);
      }
    });

    this.selectedProductForm
      .get('partNumber')
      .valueChanges.subscribe((data) => {
        const prevPartNumber = this.selectedProductForm.value['partNumber'];
        if (prevPartNumber && data && prevPartNumber != data) {
          this.serviceOfferingData = null;
          this.selectedProduct = null;
          this.prevSelectedProduct = null;
          this.prevSelectedServiceOfferings = null;
          this.serviceOfferingsErrors.incorrectPart.errorFound = false;
          this.serviceOfferingsErrors.unavailablePart.errorFound = false;
          this.rmaEntry.partNumber = data;
          this.selectedProductForm.reset();
        }
      });

    if (this.prevSelectedProduct) {
      this.selectedProduct = this.prevSelectedProduct;
      if (this.prevSelectedProduct.serialNumber) {
        this.selectSerialNumber({
          partSerialNumber: this.prevSelectedProduct.serialNumber,
        });
      }
    }
    if (this.prevSelectedServiceOfferings) {
      this.serviceOfferingData$ = of(this.prevSelectedServiceOfferings);
      this.serviceOfferingData = this.prevSelectedServiceOfferings;
    }

    if (
      this.selectedProduct &&
      this.selectedProduct.code != OTHER_PART_NUMBER
    ) {
      this.productSelected(this.selectedProduct);
    } else if (this.selectedProduct?.code == OTHER_PART_NUMBER) {
      this.otherProductSelected(true);
    }
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  ngOnChanges(changes) {
    // this.errorFocus();
  }

  identifyEquipmentChanged(e, searchType) {
    this.selectedRadio = searchType;
    this.showSearchResults = false;
    this.disselectProduct();
  }

  helpSearchOpen(e) {
    this.openHelp = e;
  }

  closeHelpSection(e) {
    this.openHelp = false;
  }

  searchProducts(event) {
    this.products = event;
    this.showSearchResults = true;
  }

  selectProductAfterSearch(product) {
    if (product) {
      this.productSelected(product);
      this.openHelp = false;
    }
  }

  productSelected(product) {
    this.selectedProduct = product;
    this.setSelectedProduct.emit(this.selectedProduct);
    this.rmaEntry = {
      ...this.rmaEntry,
      partNumber: this.selectedProduct?.code,
      similarPart: this.selectedProduct.similar,
      quantity: this.selectedProductForm.value.quantity,
      ...(this.selectedProduct.serialNumber
        ? { serialNumber: this.selectedProduct.serialNumber }
        : {}),
    };
    this.selectedProductForm.patchValue({
      partNumber: this.selectedProduct?.code,
      ...(this.selectedProduct.serialNumber
        ? { serialNumber: this.selectedProduct.serialNumber }
        : {}),
    });
    let obj = [
      {
        materialNumber: this.selectedProductForm.value.partNumber,
        serialNumber: '',
      },
    ];
    this.serviceOfferings(obj);
  }

  checkPartNumber() {
    if (!this.selectedProductForm.value.partNumber) {
      this.disselectProduct();
      this.rmapartNumberForm.emit({ searchText: '', parts: null });
    }
    if (
      this.selectedProductForm.value.partNumber != '' ||
      this.selectedProductForm.value.serialNumber != ''
    ) {
      let obj = [
        {
          materialNumber: this.selectedProductForm.value.partNumber,
          serialNumber: this.selectedProductForm.value.serialNumber,
        },
      ];
      this.serviceOfferings(obj);
    } else return;
  }

  rmaPartNumber(event) {
    this.rmapartNumberForm.emit({
      searchText: event.searchText,
      parts: event.parts,
    });
  }
  serviceOfferings(obj): void {
    if (this.serviceOfferingData) {
      return;
    }
    this.serviceOfferingData$ = this.rmaService.serviceOfferings(
      OCC_USER_ID_CURRENT,
      obj
    );

    this.serviceOfferingData$.subscribe((data) => {
      if (
        data.responseCode == 200 &&
        data.offeringList[0]?.errorDataList.length <= 0
      ) {
        this.serviceOfferingData = data;
        if (data.offeringList[0]?.offeringDataList) {
          this.rmaEntry = {
            ...this.rmaEntry,
            offeringDataList: data.offeringList[0].offeringDataList,
          };
          this.rmaEntryData.emit(this.rmaEntry);
        }
        this.getServiceOfferingData.emit(this.serviceOfferingData);
      } else if (data.offeringList[0]?.errorDataList.length > 0) {
        this.serviceOfferingsErrors.unavailablePart.errorFound = true;
      } else if (this.selectedProductForm.value.partNumber) {
        this.serviceOfferingsErrors.incorrectPart.errorFound = true;
      }
    });
  }

  disselectProduct() {
    this.serviceOfferingData = null;
    this.selectedProduct = null;
    this.prevSelectedProduct = null;
    this.prevSelectedServiceOfferings = null;
    this.serviceOfferingsErrors.incorrectPart.errorFound = false;
    this.serviceOfferingsErrors.unavailablePart.errorFound = false;
    this.rmaEntry.partNumber = '';
    this.selectedProductForm.reset();
    this.rmaEntry = new RmaEntry();
    this.rmaEntryData.emit(this.rmaEntry);
  }

  selectSerialNumber(event) {
    this.selectedProductForm.controls.serialNumber.setValue(
      event?.partSerialNumber
    );
    this.showSerialNumDropdown = false;
    this.serialNumSelectedFromList = true;
    // this.checkPartNumber();
  }

  errorFocus() {
    for (const key of Object.keys(this.selectedProductForm.controls)) {
      if (this.selectedProductForm.controls[key].invalid) {
        const invalidControl = this.el.nativeElement.querySelector(
          '[formcontrolname="' + key + '"]'
        );
        if (
          invalidControl?.type === 'radio' ||
          invalidControl?.type === 'checkbox'
        ) {
          invalidControl.parentElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
          break;
        }
        invalidControl?.focus();
        break;
      }
    }
  }

  otherProductSelected(event) {
    this.isOtherPart = true;
    this.openHelp = false;
    this.selectedProduct = {
      code: OTHER_PART_NUMBER,
    };
    this.setSelectedProduct.emit(this.selectedProduct);
    this.rmaEntry = {
      ...this.rmaEntry,
      partNumber: this.selectedProduct?.code,
      similarPart: false,
      quantity: this.selectedProductForm.value.quantity,
      ...(this.selectedProduct.serialNumber
        ? { serialNumber: this.selectedProduct.serialNumber }
        : {}),
      ...(this.selectedProductForm.value.productDetails?.length > 0
        ? {
            productDetails: this.selectedProductForm.value.productDetails,
          }
        : {}),
    };
    this.selectedProductForm.patchValue({
      partNumber: this.selectedProduct?.code,
      ...(this.selectedProduct.serialNumber
        ? { serialNumber: this.selectedProduct.serialNumber }
        : {}),
      ...(this.rmaEntry.productDetails?.length > 0
        ? {
            productDetails: this.rmaEntry.productDetails,
          }
        : {}),
    });
    this.equipmentValidation.emit(this.selectedProductForm.valid);
  }

  serialNumberInputClick() {
    this.showSerialNumDropdown = true;
  }

  getControl(controlName: string) {
    return this.selectedProductForm[controlName];
  }

  onValueChange(ev: any) {
    this.selectedProductForm.controls.serialNumber.setValue(
      testRegex(
        this.sanitizer.sanitize(SecurityContext.HTML, ev.target.value.trim()),
        REGULAR_PATTERN.alphaNumeric
      )
    );
  }

  onProdDetailsChange(ev: any) {
    this.selectedProductForm.controls.productDetails.setValue(
      testRegex(
        this.sanitizer.sanitize(SecurityContext.HTML, ev.target.value.trim()),
        REGULAR_PATTERN.alphaNumeric
      )
    );
  }

  addMultipleSerialNos(evt) {
    this.selectedProductForm.controls.serialNumber.setValue(
      testRegex(
        this.sanitizer.sanitize(SecurityContext.HTML, evt.target.value.trim()),
        REGULAR_PATTERN.alphaNumeric
      )
    );
  }
}
