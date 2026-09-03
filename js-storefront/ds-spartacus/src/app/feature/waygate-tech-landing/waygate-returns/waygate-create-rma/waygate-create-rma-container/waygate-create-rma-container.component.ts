import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SecurityContext,
} from '@angular/core';
import { CustomerAccountService } from '../../../../../core/customer-account/customer-account.service';
import { OCC_USER_ID_CURRENT, TranslationService } from '@spartacus/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { concatMap, Observable, of, take } from 'rxjs';
import {
  ProductSearchType,
  ServiceOfferingCategories,
} from '../../../../../core/rma/models/rma-form.models';
import {
  OTHER_PART_NUMBER,
  RmaEntry,
} from '../../../../../shared/models/rma/rma.model';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../../core/generic-validator/regular-expressions';
import { DomSanitizer } from '@angular/platform-browser';
import { RmaService } from '../../../../rma/rma-services/rma.service';
import { DS_DIALOG } from '../../../../../core/dialog/dialog.config';
import { LaunchDialogService } from '@spartacus/storefront';
import { Router } from '@angular/router';
import { CommerceTypes } from '../../../../../shared/models/commerceTypes.model';
import { MultiCartFacade, ActiveCartFacade } from '@spartacus/cart/base/root';
import { ProductCatelogService } from '../../../../../core/product-catalog/services/product-catelog.service';
import { ProductReturnService } from '../../../../../core/product-catalog/services/product-return.service';
import { MatDialog } from '@angular/material/dialog';
import { GoToHazardousFormDialogComponent } from '../../../../rma/rma-form/goto-hazard-form-dialog/goto-hazard-form-dialog';
@Component({
  selector: 'app-waygate-create-rma-container',
  standalone: false,
  templateUrl: './waygate-create-rma-container.component.html',
  styleUrl: './waygate-create-rma-container.component.scss',
})
export class WaygateCreateRmaContainerComponent {
  // @Output()
  // equipmentValidation = new EventEmitter<boolean>();

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
  productLine: any;
  breadcrumbs: any[] = [];
  isPopupOpen = false;
  // products: any[]  = [];
  // openHelp: any;
  // serviceOfferingData: any;
  // rmaEntry: any;
  selectedPart: any = null;
  showReturnOfferings = false;
  availableAccessories: any;
  serviceOfferingTerms: any;
  warrentyClaimFlag: boolean = false;
  equipmentValid = false;
  other_partNumber = OTHER_PART_NUMBER
  disableSerialSearch: boolean;

  constructor(
    private rmaService: RmaService,
    private customerAccService: CustomerAccountService,
    private translate: TranslationService,
    private location: Location,
    public sanitizer: DomSanitizer,
    private el: ElementRef,
    private launchDialogService: LaunchDialogService,
    private router: Router,
    private productCatService: ProductCatelogService,
    private multiCartFacade: MultiCartFacade,
    private returnProdService: ProductReturnService,
    private activeCartFacade: ActiveCartFacade,
    private cdRef: ChangeDetectorRef,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.translate
        .translate('loggedinHome.createRma')
        .subscribe((res: string) => {
          this.breadcrumbs = [
            {
              name: res,
              url: `/${this.productLine}/my-returns`,
            },
          ];
        });
    });
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
      this.equipmentValid = this.selectedProductForm.valid;
      if (data?.partNumber) {
        let serialNos = [];
        // this.equipmentValidation.emit(this.selectedProductForm.valid);
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
    // Check already selected product (eg.: from catalog pages, mse, etc)
    this.checkRmaProductSelection();
    // Check already filled RmaEntry object (edit & clone scenario)
    this.checkRmaEntryData();
    this.productSelected(this.selectedProduct);
    this.setSelectedProduct.emit(this.selectedProduct);
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  checkRmaProductSelection() {
    this.returnProdService
      .getSelectedRmaProduct()
      .subscribe((product) => {
        if (Object.keys(product).length > 0) {
          // this.stepIndex = 1;
          this.showReturnOfferings = true;
          this.selectedProduct = product;
          this.cdRef.detectChanges();
        }
      })
      .unsubscribe();
  }

  checkRmaEntryData() {
    this.rmaService.getRmaEntryData
    .subscribe((rmaEntry: RmaEntry) => {
      if (Object.keys(rmaEntry).length > 0) {
        this.rmaEntry = { ...rmaEntry, accessoryPartNumbers: [] };
        rmaEntry?.accessoryProducts?.forEach((accEl) =>
          this.rmaEntry.accessoryPartNumbers.push(accEl.code)
        );
        delete this.rmaEntry.accessoryProducts;
        this.selectedProductForm.patchValue({
          partNumber: rmaEntry.partNumber,
          serialNumber: rmaEntry.serialNumber?.join(', ') || '',
        });
        this.selectedProduct = {
          code: rmaEntry.partNumber,
          similar: rmaEntry.similarPart || false,
        };
        this.serviceOfferingData$ = of(this.prevSelectedServiceOfferings);
        this.serviceOfferingData = this.prevSelectedServiceOfferings;
        this.showReturnOfferings = true;
        this.cdRef.detectChanges();
      }
    })
    .unsubscribe();
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
      similarPart: this.selectedProduct?.similar,
      quantity: this.selectedProductForm.value.quantity,
      ...(this.selectedProduct?.serialNumber
        ? { serialNumber: [this.selectedProduct?.serialNumber] }
        : {}),
    };
    this.selectedProductForm.patchValue({
      partNumber: this.selectedProduct?.code,
      ...(this.selectedProduct?.serialNumber
        ? { serialNumber: this.selectedProduct?.serialNumber }
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
    this.cdRef.detectChanges();
    // this.equipmentValidation.emit(this.selectedProductForm.valid);
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

  setAvailableAccessories(event) {
    this.availableAccessories = event;
  }

  setServiceOfferingTerms(event) {
    this.serviceOfferingTerms = event;
  }

  onPartSelected(part: any) {
    this.selectedPart = part;
    this.showReturnOfferings = true;
    this.disableSerialSearch = true
    this.selectedProductForm.patchValue({
      partNumber: part.code,
      serialNumber: part.serialNumber || '',
    });

    this.productSelected(part);
  }

  rmaEntryDataa(updatedEntry: RmaEntry) {
    this.rmaEntry = updatedEntry;
  }

  getTotalPrice(): string {
    if (!this.rmaEntry?.serviceOfferings?.length) return null;

    const total = this.rmaEntry.serviceOfferings.reduce((sum, item) => {
      const price = parseFloat(String(item?.offeringPrice ?? '0'));
      return sum + (isNaN(price) ? 0 : price);
    }, 0);

    return total > 0 ? total.toFixed(2) : null;
  }

  handleAddToCart() {
    if (
      this.checkEquipmentValidation() ||
      this.checkServiceOfferingValidation()
    ) {
      this.submitted = true;
      this.errorFocus();
      return;
    }

    const updatedProduct = {};
    this.activeCartFacade
      .getActive()
      .pipe(
        take(1),
        concatMap((activeCart: any) => {
          if (activeCart.entries?.length > 0) {
            if (activeCart?.commerceType !== CommerceTypes.RETURNS) {
              this.openSwitchCartModal(
                activeCart.commerceType,
                CommerceTypes.RETURNS,
                activeCart.code,
                updatedProduct
              );
            } else {
              this.returnProdService.selectRmaProduct(updatedProduct);
              this.createRmaEntry();
            }
            return of({ modal: true });
          } else {
            return this.productCatService.saveCartType(
              activeCart.code,
              CommerceTypes.RETURNS,
              OCC_USER_ID_CURRENT
            );
          }
        })
      )
      .subscribe((val) => {
        if (val === null) {
          this.createRmaEntry();
        }
      });
  }

  createRmaEntry() {
    if (this.rmaEntry?.additionalInfo?.warrantyStatement?.length >= 256) {
      this.warrentyClaimFlag = true;
      this.rmaEntry.additionalInfo.warrantyStatement =
        this.rmaEntry.additionalInfo.warrantyStatement.replace(
          /&#34|&#10/g,
          ''
        );
      return;
    } else {
      this.warrentyClaimFlag = false;
    }

    this.rmaService
      .createRmaEntry(OCC_USER_ID_CURRENT, this.rmaEntry)
      .subscribe((success) => {
        if (success && success >= 0) {
          this.rmaEntry = { ...this.rmaEntry, entryNumber: success };
          this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
            if (cartId) {
              this.multiCartFacade.reloadCart(cartId, { active: true });
            }
          });
          setTimeout(() => {
            this.router.navigate(['/',this.productLine,'returns','cart']);
          }, 0)
        } else {
          console.error('Create RMA failed');
        }
      });
  }

  openSwitchCartModal(currentCartType, switchToCartType, cartId, product) {
    const componentData = {
      currentCartType,
      switchToCartType,
      currentCartCode: cartId,
    };

    const switchCartDialog = this.launchDialogService.openDialog(
      DS_DIALOG.RMA_SWITCH_CART_DIALOG,
      undefined,
      undefined,
      componentData
    );

    if (switchCartDialog) {
      switchCartDialog.pipe(take(1)).subscribe((value) => {
        if (value === true || value?.instance?.reason === true) {
          this.returnProdService.selectRmaProduct(product);
          this.createRmaEntry();
        }
      });
    }
  }

  checkEquipmentValidation(): boolean {
    return !(
      this.equipmentValid &&
      (this.serviceOfferingData ||
        this.rmaEntry?.partNumber === OTHER_PART_NUMBER)
    );
  }

  checkServiceOfferingValidation(): boolean {
    if (this.rmaEntry?.serviceOfferings?.length > 0) {
      if (this.isProbDescMandatory() && !this.rmaEntry?.problemDescription) {
        return true;
      }

      if (
        this.availableAccessories?.length > 0 &&
        (!this.rmaEntry?.accessoryPartNumbers ||
          this.rmaEntry?.accessoryPartNumbers?.length <= 0)
      ) {
        return true;
      }

      if (!this.isServiceOfferingTermsSelected()) {
        return true;
      }

      return false;
    }

    return true;
  }

  get isAddToCartActive(): boolean {
    return (
      !this.checkEquipmentValidation() && !this.checkServiceOfferingValidation()
    );
  }

  isProbDescMandatory() {
    for (let el of this.rmaEntry?.serviceOfferings) {
      if (
        el.offeringType == ServiceOfferingCategories.REPAIR ||
        el.offeringType === ServiceOfferingCategories.CALIBRATION
      ) {
        return true;
      }
    }
    return false;
  }

  isServiceOfferingTermsSelected(): boolean {
    if (this.serviceOfferingTerms) {
      for (const el of this.serviceOfferingTerms) {
        if (el.showServiceOffTerms && !el.serviceOffTermsSelected) {
          return false;
        }
      }
    }
    return true;
  }


  // openGoToHazardFormModal(): void {
  //   const dialogRef = this.dialog.open(GoToHazardousFormDialogComponent, {
  //     disableClose: true,
  //   });
  
  //   dialogRef.afterClosed().subscribe((result: boolean) => {
  //     if (result === true) {
  //       // this.router.navigate(['/rma-form/hazard-info']);
  //       this.router.navigate(['/',this.productLine,'returns','cart'],{ queryParams: { hazardous: 'Yes' }});
  //     } else if (result === false) {
  //       this.router.navigate(['/',this.productLine,'returns','cart']);
  //     }
  //   });
  // }
  

  getFormattedPrice(price: number): string {
    const currencyIso =
      this.serviceOfferingData?.offeringList[0]?.currencyIso || 'USD';
    const currencySymbol =
      this.serviceOfferingData?.offeringList[0]?.currencySymbol || '$';

    if (price === null || price === undefined || isNaN(Number(price))) {
      return '';
    }

    return `${currencyIso} ${currencySymbol}${parseFloat(
      price.toString()
    ).toFixed(2)}`;
  }

  getTotalFormattedPrice(): string | null {
    if (!this.rmaEntry?.serviceOfferings?.length) return null;

    const prices = this.rmaEntry.serviceOfferings.map((item) =>
      parseFloat(String(item?.offeringPrice ?? 'NaN'))
    );

    const hasValidPrice = prices.some((price) => !isNaN(price) && price > 0);

    if (!hasValidPrice) return null;

    const total = prices.reduce((sum, price) => {
      return sum + (isNaN(price) ? 0 : price);
    }, 0);

    return this.getFormattedPrice(total);
  }

  getFormattedOfferings(): { description: string; price: string }[] {
    return (
      this.rmaEntry?.serviceOfferings?.map((offering) => {
        let description = offering?.offeringText;
        if (offering.offeringType?.startsWith('RETURN')) {
          switch (offering.offeringType) {
            case 'RETURNFORCREDIT':
              description = this.getTranslatedText('rma-form.returnForCredit');
              break;
            case 'RETURNFORSCRAP':
              description = this.getTranslatedText('rma-form.returnForScrap');
              break;
            case 'RETURNFORREPLACE':
              description = this.getTranslatedText('rma-form.productRecalled');
              break;
            default:
              description = 'Return';
          }
        }
        return {
          description,
          price: this.getFormattedPrice(offering?.offeringPrice),
        };
      }) || []
    );
  }

  onSerialNumberChanged(serial: string) {
    this.selectedProductForm.patchValue({ serialNumber: serial });
    this.rmaEntry = {
      ...this.rmaEntry,
      serialNumber: serial ? [serial] : [],
    };
    this.rmaEntryData.emit(this.rmaEntry);
  }
  
  openRmaOverview() {
    this.isPopupOpen = true;
  }

  cancelRmaProcess() {
    this.clearRmaData();
    this.location.back();
  }

  clearRmaData() {}

  onSearchResults(results: any[]) {
    this.products = results;
  }

  helpSearchOpen(e) {
    this.openHelp = e;
  }

  closeHelpSection(e) {
    this.openHelp = false;
  }
  clearSelectedPart() {
    this.selectedPart = null;
    this.showReturnOfferings = false;
    this.rmaEntry = new RmaEntry();
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
}