import {
  Component,
  ElementRef,
  OnInit,
  SecurityContext,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  GlobalMessageService,
  GlobalMessageType,
  OCC_USER_ID_CURRENT,
  TranslationService,
} from '@spartacus/core';
import { of } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';
import { LandingPagesService } from '../../landing-pages.service';
import { Actions, ofType } from '@ngrx/effects';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { CartActions } from '@spartacus/cart/base/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { DomSanitizer } from '@angular/platform-browser';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';
import { ProductCatelogService } from '../../../../core/product-catalog/services/product-catelog.service';
import { GtmEvents, StoreTypeEnum } from '../../../../shared/enums/gtm.enum';
import {
  Ecommerce,
  EcommerceItem,
  GTMCartType,
  GTMDataLayer,
} from '../../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../../shared/services/gtm.service';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';

@Component({
  standalone: false,
  selector: 'app-create-new-order',
  templateUrl: './create-new-order.component.html',
  styleUrls: ['./create-new-order.component.scss'],
})
export class CreateNewOrderComponent implements OnInit {
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
  eventDataList = [];
  currency: any;
  currencySymbol: any;
  cartId;
  partNumber = '';
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
  productLine: string;
  constructor(
    private landingPageService: LandingPagesService,
    private router: Router,
    private activeCartFacade: ActiveCartFacade,
    private productCatService: ProductCatelogService,
    protected launchDialogService: LaunchDialogService,
    private actions$: Actions,
    private fb: FormBuilder,
    private multiCartFacade: MultiCartFacade,
    private translate: TranslationService,
    private globalMessageService: GlobalMessageService,
    private gtmService: GoogleTagManagerService,
    public sanitizer: DomSanitizer,
    private custAccService: CustomerAccountService
  ) {}

  ngOnInit(): void {
    this.bulkUploadList = [];
    this.eventDataList = [];
    this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
      this.cartId = cartId;
    });
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.bulkQty.addControl(
      'text' + 0,
      new FormControl(1, Validators.required)
    );
    this.fieldArray[0].qty = '1';
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  onChange(event, part, i) {
    if (part === 'partPaste') {
      this.pastePartNumber = event.target.value;
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
  }

  clear(part) {
    if (part === 'addLinePartNumber') {
      this.fieldArray.forEach((val, i) => {
        this.fieldArray[i].partLineNumber = '';
        this.bulkQty.controls['text' + i].setValue(1);
      });
    } else {
      this.pastePartNumber = '';
    }
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
    }
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
    Object.keys(this.bulkQty.value).forEach((element, index) => {
      this.bulkQty.removeControl('text' + index);
    });
    if (this.fieldArray.length > 0) this.setvalue(this.fieldArray);
  }

  setvalue(data) {
    data.forEach((element, index) => {
      this.bulkQty.addControl('text' + index, new FormControl(element.qty));
    });
  }

  uploadContent() {
    this.uploadArr = [];
    this.bulkUploadList = [];
    this.eventDataList = [];
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
          contentArr2 = contentArr[i].split(/[ ,]+/);
          if (contentArr2.length === 1) {
            const obj = {
              productCode: contentArr2[0],
              quantity: 1,
            };
            this.uploadArr.push(obj);
          } else {
            for (let j = 0; j < contentArr2.length - 1; j += 2) {
              const obj = {
                productCode: contentArr2[j],
                quantity: contentArr2[j] ? contentArr2[j + 1] : 1,
              };
              this.uploadArr.push(obj);
            }
          }
        }
      }

      this.showSpinner = true;
      this.landingPageService
        .createCopyPasteOrder(this.cartId, this.uploadArr, this.productLine)
        .subscribe(
          (res: any) => {
            this.landingPageService.sendBulkOrderList({
              data: res,
              cartId: this.cartId,
            });
            this.showSpinner = false;

            if (res?.validatedBulkUploadList) {
              let currValidatePriceData = res?.validatedBulkUploadList;
              this.currency = res?.currencyISO;
              this.currencySymbol = res?.currencyFormattedValue;
              currValidatePriceData.forEach((element, i) => {
                if (
                  currValidatePriceData[i].status != 'Validated' ||
                  !currValidatePriceData[i].productAccessData
                    .isPresentInAllowedProdPrincipal
                ) {
                  this.checkValidatedStatus = true;
                } else {
                  this.eventDataList.push(element);
                  this.bulkUploadList.push({
                    lineNo: i,
                    prodCode: currValidatePriceData[i].partNum,
                    partNum: currValidatePriceData[i].partNum,
                    description: currValidatePriceData[i].description,
                    unitPrice: {
                      formattedValue: '',
                      value: currValidatePriceData[i].unitPrice.value,
                    },
                    status: currValidatePriceData[i].status,
                    quantity: currValidatePriceData[i].quantity,
                    productSNo: currValidatePriceData[i].productSNo,
                    configurationflag: '',
                    actualQuantity: currValidatePriceData[i].quantity,
                  });
                }
              });

              if (this.checkValidatedStatus) {
                this.router.navigateByUrl('/bulk-order');
              } else {
                this.addBulkOrder();
              }
            } else {
              this.globalMessageService.add(
                this.getTranslatedText('loggedinHome.errorMessage'),
                GlobalMessageType.MSG_TYPE_ERROR,
                5000
              );
            }
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
  }
  stop(e) {
    /* As per requirement not to restrict paste part number text area while key press */
    /* if (e.target.value.length >= 300) {
      e.preventDefault();
      return false;
    } */
  }

  addBulkOrder() {
    //this.showLoader = true;
    const unique = [];
    //this.bulkUploadList.map(x => unique.filter(a => a.partNum == x.partNum).length > 0 ? null : unique.push(x));
    let param = {
      callingsourceinfo: 'Cart Validate Page',
      cartDetailTable_length: 50,
      bulkUploadList: this.bulkUploadList,
      currencyIso: this.currency,
      currencySymbol: this.currencySymbol,
    };
    this.landingPageService.addBulkOrder(this.cartId, param).subscribe(
      (res) => {
        this.multiCartFacade.loadCart({
          cartId: this.cartId,
          userId: 'current',
          extraData: {
            active: true,
          },
        });
        this.actions$
          .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
          .pipe(take(1))
          .subscribe(
            (r) => {
              //this.showLoader = false;
              this.pushAddToCartEvent(r);
              this.router.navigate(['/cart']);
            },
            (e) => {
              this.globalMessageService.add(
                this.getTranslatedText('quickorder.errorAddingToCart'),
                GlobalMessageType.MSG_TYPE_ERROR,
                5000
              );
            }
          );
      },
      (error) => {
        //this.showLoader = false;
      }
    );
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
    this.eventDataList = [];
    for (let i = 0; i < this.fieldArray.length; i++) {
      if (
        this.fieldArray[i].partLineNumber.trim() === null ||
        this.fieldArray[i].partLineNumber.trim() === '' ||
        this.fieldArray[i].partLineNumber === !this.fieldArray[i].partLineNumber
      ) {
        this.showError = true;
        this.fieldArray[i].showError = this.showError;
      } else {
        const obj = {
          productCode: this.fieldArray[i].partLineNumber,
          quantity: this.bulkQty.get('text' + i).value,
        };
        this.uploadArr.push(obj);
      }
    }
    // tslint:disable-next-line:prefer-for-of
    for (let j = 0; j < this.uploadArr.length; j++) {
      if (
        this.uploadArr[j].quantity === undefined ||
        this.uploadArr[j].quantity == null
      ) {
        this.uploadArr[j].quantity = '1';
      }
    }

    this.showSpinner = true;
    let productCode = [];
    let quantity = [];
    this.uploadArr.forEach((element) => {
      productCode.push(element.productCode);
      quantity.push(element.quantity.toString());
    });
    let param = {
      copyPasteData: '',
      productCode: productCode,
      qty: quantity,
    };
    this.landingPageService.validateCart(this.cartId, param).subscribe(
      (res: any) => {
        this.landingPageService.sendBulkOrderList({
          data: res,
          cartId: this.cartId,
        });
        this.showSpinner = false;
        if (res?.validatedBulkUploadList) {
          let currValidatePriceData = res?.validatedBulkUploadList;
          this.currency = res?.currencyISO;
          this.currencySymbol = res?.currencyFormattedValue;
          currValidatePriceData.forEach((element, i) => {
            if (
              currValidatePriceData[i].status != 'Validated' ||
              !currValidatePriceData[i].productAccessData
                .isPresentInAllowedProdPrincipal
            ) {
              this.checkValidatedStatus = true;
            } else {
              this.eventDataList.push(element);
              this.bulkUploadList.push({
                lineNo: i,
                prodCode: currValidatePriceData[i].partNum,
                partNum: currValidatePriceData[i].partNum,
                description: currValidatePriceData[i].description,
                unitPrice: {
                  formattedValue: '',
                  value: currValidatePriceData[i].unitPrice.value,
                },
                status: currValidatePriceData[i].status,
                quantity: currValidatePriceData[i].quantity,
                productSNo: currValidatePriceData[i].productSNo,
                configurationflag: '',
                actualQuantity: currValidatePriceData[i].quantity,
              });
            }
          });

          if (this.checkValidatedStatus) {
            this.router.navigateByUrl('/bulk-order');
          } else {
            this.addBulkOrder();
          }
        } else {
          this.globalMessageService.add(
            this.getTranslatedText('loggedinHome.errorMessage'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
        }
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
  }
  decreaseQuantity(value, i) {
    this.fieldArray[i].qty = value.toString();
  }

  addToCart(partNumber) {
    this.partNumber = partNumber;
    let currentCartType = 'BUY';
    let userType = OCC_USER_ID_CURRENT;

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

  pushAddToCartEvent(cartResponse) {
    const eventData: Ecommerce = {
      currency: this.currency,
      value: cartResponse.payload.cart.totalPrice.value
        ? cartResponse.payload.cart.totalPrice.value
        : '',
      items: this.eventDataList.map((product, index): EcommerceItem => {
        return {
          item_id: product.partNum,
          quantity: product.quantity,
          item_name: product.description,
          price: product.priceAvailabilityData.yourPrice.value,
          discount: product.priceAvailabilityData.discountPercentage
            ? Number(product.priceAvailabilityData.discountPercentage)
            : '',
          item_brand: this.gtmService.getItemBrand(),
          index: index,
        };
      }),
    };
    const event: GTMDataLayer = {
      event: GtmEvents.AddToCart,
      store: StoreTypeEnum.Dsstore,
      ecommerce: eventData,
      commerceType: GTMCartType.BUY_CART,
      cartType: cartResponse.cartType,
    };
    this.gtmService.sendEvent(event);
  }
}
