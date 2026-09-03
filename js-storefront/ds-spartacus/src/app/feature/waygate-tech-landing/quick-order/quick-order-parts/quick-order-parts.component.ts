import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SecurityContext,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  GlobalMessageService,
  GlobalMessageType,
  OCC_USER_ID_CURRENT,
  TranslationService,
  WindowRef,
} from '@spartacus/core';
import { Subscription, from, of } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { LaunchDialogService } from '@spartacus/storefront';
import { DomSanitizer } from '@angular/platform-browser';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';
import { ProductCatelogService } from '../../../../core/product-catalog/services/product-catelog.service';
import { LandingPagesService } from '../../../landing/landing-pages.service';
import { QuickOrderService } from '../quick-order.service';
import { ProductCategoriesService } from '../../../../core/product-catalog/services/product-categories.service';
import { AllProductLine } from '../../../../shared/enums/availableProductList.enum';
import { SpinnerOverlayService } from '../../../../shared/components/spinner-overlay/spinner-overlay.service';

@Component({
  standalone: false,
  selector: 'app-order-parts',
  templateUrl: './quick-order-parts.component.html',
  styleUrls: ['./quick-order-parts.component.scss'],
})
export class QuickOrderPartsComponent implements OnInit {
  maxDataPartList = 30;
  index = 0;
  disbledBtn: boolean;
  bulkQty: FormGroup = new FormGroup({});
  quantity = new FormControl('1', [Validators.required]);
  maxQuantity: 999;
  uploadArr = [];
  showTextError: boolean;
  showError: boolean;
  lineNumber = '';
  bulkUploadList = [];
  currency: any;
  currencySymbol: any;
  cartId;
  partNumber = '';
  updateBtn = false;
  listUpdated: boolean = false;
  private previousUrl: string = '';
  private currentUrl: string = '';
  private routerSubscription!: Subscription;
  @Output() partsCopied = new EventEmitter();
  lineByLinePartNumber = 25;
  // tslint:disable-next-line:no-inferrable-types
  pastePartNumber: string = '';
  fieldArray: Array<any> = [
    {
      partLineNumber: '',
      qty: '',
    },
  ];
  newAttribute: any = {};
  @ViewChild('textval') textval: ElementRef;
  showSpinner: boolean = false;
  checkValidatedStatus: boolean = false;
  currentPage = 1;
  pageSiaze = 10;
  originalArr = [];
  selectedArr = [];
  quickOrderRes: { data: any; cartId: string };
  @Output() dataEmitter = new EventEmitter<any>();
  @Output() deleteRow = new EventEmitter<any>();
  textContent: string;
  disabledClass: boolean;
  productLine: string;
  quickOrderVCPriceData: any;
  validatedBulkUploadList: any[] = [];
  constructor(
    private landingPageService: LandingPagesService,
    private router: Router,
    private activeCartFacade: ActiveCartFacade,
    private productCatService: ProductCatelogService,
    protected launchDialogService: LaunchDialogService,
    private actions$: Actions,
    private fb: FormBuilder,
    protected winRef: WindowRef,
    private multiCartFacade: MultiCartFacade,
    private translate: TranslationService,
    private globalMessageService: GlobalMessageService,
    public sanitizer: DomSanitizer,
    private quickOrderService: QuickOrderService,
    private custAccService: CustomerAccountService,
    private productCategoriesService: ProductCategoriesService,
    private route: ActivatedRoute,
    private spinnerOverlayService: SpinnerOverlayService
  ) {
    this.productCategoriesService
      .fetchQuickOrderVCPricesfromStore()
      .subscribe((data: any) => {
        this.quickOrderVCPriceData = data;
      });
  }

  ngOnInit(): void {
    this.bulkUploadList = [];
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
      this.cartId = cartId;

      this.route.paramMap.subscribe((params) => {
        if (localStorage.getItem('quickOrderParts') !== '') {
          this.pastePartNumber = localStorage.getItem('quickOrderParts');
          this.addToCart('pastePartNumber');
        }
      });
    });

    this.bulkQty.addControl(
      'text' + 0,
      new FormControl(1, Validators.required)
    );
    this.fieldArray[0].qty = '1';
  }

  stopCount = () => {
    var numberOfLineBreaks = (this.pastePartNumber.match(/\n/g) || []).length;
    if (numberOfLineBreaks == 0) {
      return true;
    }
    if (numberOfLineBreaks > this.maxDataPartList) {
      return true;
    } else {
      return false;
    }
  };

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  onChange(event, part, i) {
    this.partsCopied.emit(true);
    if (part === 'partPaste') {
      this.pastePartNumber = event.target.value;
      if (!this.pastePartNumber) {
        this.updateBtn = false;
      }
      this.textContent = '';
    } else {
      this.lineNumber = testRegex(
        event.target.value,
        REGULAR_PATTERN.alphaNumeric
      );
      this.fieldArray[i].partLineNumber = testRegex(
        event.target.value,
        REGULAR_PATTERN.alphaNumeric
      );
      const quantity = this.bulkQty.get('text' + i).value;
      this.fieldArray[i].qty = quantity;
    }
    this.listUpdated = true;
  }

  clear(part) {
    this.partsCopied.emit(false);
    if (part === 'addLinePartNumber') {
      this.fieldArray.forEach((val, i) => {
        this.fieldArray[i].partLineNumber = '';
        this.bulkQty.controls['text' + i].setValue(1);
      });
    } else {
      this.pastePartNumber = '';
      this.textContent = '';
      this.dataEmitter.emit(undefined);
    }
    this.listUpdated = true;
    this.updateBtn = false;
  }

  addField() {
    let addFlag = false;
    for (let i = 0; i < this.fieldArray.length; i++) {
      const quantity = this.bulkQty.get('text' + i).value;
      if (this.fieldArray[i].partLineNumber) {
        addFlag = true;
        this.fieldArray[i].qty = quantity;
      } else addFlag = false;
    }
    if (addFlag) {
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
      this.bulkQty.addControl(
        'text' + (this.fieldArray.length - 1),
        new FormControl(1, Validators.required)
      );
      this.listUpdated = true;
    }
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
    Object.keys(this.bulkQty.value).forEach((element, index) => {
      this.bulkQty.removeControl('text' + index);
    });
    if (this.fieldArray.length > 0) this.setvalue(this.fieldArray);
    this.deleteRow.emit(index);
    this.listUpdated = true;
  }

  setvalue(data) {
    data.forEach((element, index) => {
      this.bulkQty.addControl(
        'text' + index,
        new FormControl(element.qty !== undefined ? element.qty : 1)
      );
    });
  }
  setNewValue(data) {
    this.fieldArray.forEach((val, i) => {
      this.fieldArray[i].partLineNumber = '';
      this.bulkQty.controls['text' + i].setValue(1);
    });
    data.forEach((element, index) => {
      this.bulkQty.controls['text' + index].setValue(element.qty);
    });
  }

  uploadContent() {
    this.uploadArr = [];
    this.bulkUploadList = [];
    if (localStorage.getItem('quickOrderParts')) {
      this.pastePartNumber = localStorage.getItem('quickOrderParts');
    }
    this.textContent = this.pastePartNumber;
    this.updateBtn = true;
    if (
      this.pastePartNumber.trim() == null ||
      this.pastePartNumber.trim() === ''
    ) {
      this.showTextError = true;
    } else {
      let contentArr = this.pastePartNumber.trim().split('\n');
      let contentArr2 = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i].length === 0) {
          continue;
        } else {
          contentArr2 = contentArr[i].trim().split(/[ ,]+/);
          if (contentArr2.length === 1) {
            const obj = {
              productCode: contentArr2[0].toUpperCase(),
              quantity: 1,
            };
            this.uploadArr.push(obj);
          } else {
            for (let j = 0; j < contentArr2.length - 1; j += 2) {
              const productCode = contentArr2[j].toUpperCase();
              const quantity = parseInt(contentArr2[j + 1]);
              const obj = {
                productCode: productCode,
                quantity: isNaN(quantity) ? 1 : quantity,
              };
              this.uploadArr.push(obj);
            }
          }
        }
      }
      const mergedArray = this.uploadArr.reduce((accumulator, currentValue) => {
        const existingItem = accumulator.find(
          (item) => item.productCode === currentValue.productCode
        );
        if (existingItem) {
          existingItem.quantity += currentValue.quantity;
        } else {
          accumulator.push(currentValue);
        }
        return accumulator;
      }, []);
      this.uploadArr = mergedArray;
      const newMerge = mergedArray.map(
        (product) => `${product.productCode},${product.quantity}`
      );
      const newLine = newMerge.join(`\n`);
      this.pastePartNumber = newLine;
      this.showSpinner = true;

      // if (this.productLine == AllProductLine.bently) {
      if (this.productLine == 'sssss') {
        this.spinnerOverlayService.show();
        let index = 0;
        from(this.uploadArr)
          .pipe(
            concatMap((uploadItem: any) =>
              this.landingPageService.createCopyPasteOrder(
                this.cartId,
                [uploadItem],
                this.productLine
              )
            )
          )
          .subscribe(
            (res: any) => {
              index++;
              console.log(res, this.quickOrderVCPriceData);
              let d = res?.validatedBulkUploadList;
              d = d.map((k: any) => {
                if (
                  !k?.priceAvailabilityData ||
                  !k?.priceAvailabilityData?.listPrice?.value ||
                  k?.priceAvailabilityData?.listPrice?.value == 0
                ) {
                  const VCpriceData = this.quickOrderVCPriceData.find(
                    (e: any) => e?.vcLongPartNumber == k.partNum
                  );
                  console.log(VCpriceData);
                  if (VCpriceData)
                    k = {
                      ...k,
                      configurationValid: true,
                      configId: VCpriceData?.configId,
                      priceAvailabilityData: {
                        listPrice: VCpriceData?.priceSummary?.basePrice,
                        yourPrice: VCpriceData?.priceSummary?.currentTotal,
                        estShipData: [
                          {
                            stockQty: 0,
                            shipDate: 'No estimate available',
                          },
                        ],
                      },
                    };
                }
                return k;
              });
              this.validatedBulkUploadList = [
                ...this.validatedBulkUploadList,
                ...d,
              ];
              res = {
                ...res,
                validatedBulkUploadList: this.validatedBulkUploadList,
              };

              this.quickOrderRes = { data: res, cartId: this.cartId };
              this.dataEmitter.emit(this.quickOrderRes);
              console.log(index, this.uploadArr);
              if (index == this.uploadArr?.length) {
                this.showSpinner = false;
                this.spinnerOverlayService.hide();
                console.log('here');
                this.validatedBulkUploadList = [];
                this.uploadArr = [];
              }

              // this.showSpinner = this.updateBtn ? true : false;
            },
            (error) => {
              this.showSpinner = false;
              this.globalMessageService.add(
                this.getTranslatedText('loggedinHome.errorMessage'),
                GlobalMessageType.MSG_TYPE_ERROR,
                5000
              );
            }
          );
      } else {
        this.landingPageService
          .createCopyPasteOrder(this.cartId, this.uploadArr, this.productLine)
          .subscribe(
            (res: any) => {
              console.log(res, this.quickOrderVCPriceData);
              let d = res?.validatedBulkUploadList;
              d = d.map((k: any) => {
                if (
                  !k?.priceAvailabilityData ||
                  !k?.priceAvailabilityData?.listPrice?.value ||
                  k?.priceAvailabilityData?.listPrice?.value == 0
                ) {
                  const VCpriceData = this.quickOrderVCPriceData.find(
                    (e: any) => e?.vcLongPartNumber == k.partNum
                  );
                  console.log(VCpriceData);
                  if (VCpriceData)
                    k = {
                      ...k,
                      configurationValid: true,
                      configId: VCpriceData?.configId,
                      priceAvailabilityData: {
                        listPrice: VCpriceData?.priceSummary?.basePrice,
                        yourPrice: VCpriceData?.priceSummary?.currentTotal,
                        estShipData: [
                          {
                            stockQty: 0,
                            shipDate: 'No estimate available',
                          },
                        ],
                      },
                    };
                }
                return k;
              });
              res = {
                ...res,
                validatedBulkUploadList: d,
              };
              console.log('=======>', res, this.quickOrderVCPriceData);

              this.quickOrderRes = { data: res, cartId: this.cartId };
              this.dataEmitter.emit(this.quickOrderRes);
              this.showSpinner = false;
              this.uploadArr = [];
              // this.spinnerOverlayService.hide();
              // this.showSpinner = this.updateBtn ? true : false;
            },
            (error) => {
              this.showSpinner = false;
              this.globalMessageService.add(
                this.getTranslatedText('loggedinHome.errorMessage'),
                GlobalMessageType.MSG_TYPE_ERROR,
                5000
              );
            }
          );
      }
    }
  }
  stop(e) {
    /* As per requirement not to restrict paste part number text area while key press */
    /* if (e.target.value.length >= 300) {
      e.preventDefault();
      return false;
    } */
  }

  myFunction(e) {
    /* As per requirement not to restrict paste part number text area while paste */
    /* if (e.target.value.length >= 500) {
      this.textval.nativeElement.value = this.textval.nativeElement.value.substring(0, 500)
      e.preventDefault();
      e.stopPropagation();
      return false;
    } */
  }

  trimText() {
    /* Onfocusout triming is not required as per requirement */
    //this.textval.nativeElement.value = this.textval.nativeElement.value.substring(0, 500)
  }
  uploadLineContent() {
    if (this.lineNumber === '' || this.lineNumber === null) {
      return false;
    }
    this.uploadArr = [];
    this.bulkUploadList = [];
    for (let i = 0; i < this.fieldArray.length; i++) {
      if (
        !this.fieldArray[i]?.partLineNumber?.trim() ||
        this.fieldArray[i]?.partLineNumber ===
          !this.fieldArray[i]?.partLineNumber
      ) {
        this.showError = true;
        this.fieldArray[i].showError = this.showError;
      } else {
        const obj = {
          productCode: this.fieldArray[i].partLineNumber.toUpperCase(),
          quantity: this.bulkQty.get('text' + i).value,
        };
        this.uploadArr.push(obj);
        this.updateBtn = true;
      }
    }
    // tslint:disable-next-line:prefer-for-of
    for (let j = 0; j < this.uploadArr.length; j++) {
      if (
        this.uploadArr[j].quantity === undefined ||
        this.uploadArr[j].quantity == null
      ) {
        this.uploadArr[j].quantity = 1;
      }
    }

    this.showSpinner = true;
    const mergedArray = this.uploadArr.reduce((accumulator, currentValue) => {
      const existingItem = accumulator.find(
        (item) => item.productCode === currentValue.productCode
      );
      if (existingItem) {
        existingItem.quantity += parseInt(currentValue.quantity);
      } else {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);
    this.uploadArr = mergedArray;
    const partsArray = mergedArray.map((product) => {
      return {
        partLineNumber: product.productCode,
        qty: product.quantity,
      };
    });
    this.setNewValue(partsArray);

    let productCode = [];
    let quantity = [];
    this.uploadArr.forEach((element) => {
      productCode.push(element.productCode);
      quantity.push(element.quantity.toString());
    });
    this.fieldArray = partsArray;
    let param = {
      copyPasteData: '',
      productCode: productCode,
      qty: quantity,
    };
    this.landingPageService.validateCart(this.cartId, param).subscribe(
      (res: any) => {
        let d = res?.validatedBulkUploadList;
        d = d.map((k: any) => {
          if (!k?.priceAvailabilityData) {
            const VCpriceData = this.quickOrderVCPriceData.find(
              (e: any) => e?.vcLongPartNumber == k.partNum
            );
            console.log(VCpriceData);
            if (VCpriceData)
              k = {
                ...k,
                configurationValid: true,
                configId: VCpriceData?.configId,
                priceAvailabilityData: {
                  listPrice: VCpriceData?.priceSummary?.basePrice,
                  yourPrice: VCpriceData?.priceSummary?.currentTotal,
                  estShipData: [
                    {
                      stockQty: 0,
                      shipDate: 'No estimate available',
                    },
                  ],
                },
              };
          }
          return k;
        });
        res = {
          ...res,
          validatedBulkUploadList: d,
        };
        this.quickOrderRes = { data: res, cartId: this.cartId };
        this.dataEmitter.emit(this.quickOrderRes);
        this.showSpinner = false;
        this.showSpinner = false;
      },
      (error) => {
        this.showSpinner = false;
        this.globalMessageService.add(
          this.getTranslatedText('loggedinHome.errorMessage'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
      }
    );
    this.uploadArr = [];
  }

  increaseQuantity(value, i) {
    this.fieldArray[i].qty = value.toString();
    this.listUpdated = true;
  }
  decreaseQuantity(value, i) {
    this.fieldArray[i].qty = value.toString();
    this.listUpdated = true;
  }

  addToCart(partNumber) {
    this.partNumber = partNumber;
    let currentCartType = 'BUY';
    let userType = OCC_USER_ID_CURRENT;
    if (
      !this.pastePartNumber &&
      !this.winRef.nativeWindow.localStorage.getItem('quickOrderParts')
    ) {
      this.pastePartNumber = '';
    }
    const partToSet =
      partNumber === 'pastePartNumber'
        ? this.pastePartNumber.trim()
        : this.lineNumber.trim();

    this.productCategoriesService.setQuickOrderParts(partToSet);

    this.activeCartFacade
      .getActive()
      .pipe(
        take(1),
        concatMap((activeCart: any) => {
          let cartId = this.cartId;
          if (activeCart.entries?.length > 0) {
            if (activeCart.commerceType != currentCartType) {
              this.openSwitchCartModal(
                activeCart.commerceType,
                currentCartType,
                cartId
              );
            } else {
              if (partNumber === 'pastePartNumber') {
                this.uploadContent();
              } else {
                this.uploadLineContent();
              }
            }
            return of({ modal: true });
          } else {
            return this.productCatService.saveCartType(
              cartId,
              currentCartType,
              userType
            );
          }
        })
      )
      .subscribe((val) => {
        if (val === null) {
          if (partNumber === 'pastePartNumber') {
            this.uploadContent();
          } else {
            this.uploadLineContent();
          }
        }
        this.listUpdated = false;
      });
  }
  private openSwitchCartModal(currentCartType, switchToCartType, cartId) {
    let modalInstance: any;
    const componentData = {
      currentCartType: currentCartType,
      switchToCartType: switchToCartType,
      currentCartCode: cartId,
    };
    const switchCartDialog = this.launchDialogService.openDialog(
      DS_DIALOG.SWITCH_CART_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (switchCartDialog) {
      switchCartDialog.pipe(take(1)).subscribe((value) => {
        if (value == true || value?.instance?.reason == true) {
          if (this.partNumber === 'pastePartNumber') {
            this.uploadContent();
          } else {
            this.uploadLineContent();
          }
        }
      });
    }
  }
  goToHomepage() {
    this.router.navigate([`/${this.productLine}`]);
  }
}
