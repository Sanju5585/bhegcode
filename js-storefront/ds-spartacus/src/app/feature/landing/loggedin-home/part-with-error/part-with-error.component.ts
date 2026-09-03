import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LandingPagesService } from '../../landing-pages.service';
import { PartDeletePopupComponent } from '../part-delete-popup/part-delete-popup.component';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { Actions, ofType } from '@ngrx/effects';
import { count, switchMap, take } from 'rxjs/operators';
import { MultiCartFacade } from '@spartacus/cart/base/root';
import { CartActions } from '@spartacus/cart/base/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import {
  ItemListTypeEnum,
  GtmEvents,
  StoreTypeEnum,
} from '../../../../shared/enums/gtm.enum';
import {
  Ecommerce,
  EcommerceItem,
  GTMCartType,
  GTMDataLayer,
} from '../../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../../shared/services/gtm.service';

@Component({
  standalone: false,
  selector: 'app-part-with-error',
  templateUrl: './part-with-error.component.html',
  styleUrls: ['./part-with-error.component.scss'],
})
export class PartWithErrorComponent implements OnInit {
  quantity = 1;
  maxQuantity: 999;
  bulkOrder: any;
  indeterminateValue: any;
  deleteAll = false;
  notMatch = false;
  showPrice = false;
  showValidatedPrice = false;
  priceData = [];
  priceValidateData = [];
  bulkOrderErrorData: any;
  cartId;
  status = [];
  statusCount = 0;
  bulkUploadList = [];
  eventDataList = [];
  checkedcount = 0;
  checkPriceCounter = 0;
  totalPagecheckPrice = 0;
  addToCartForm = new FormGroup({
    quantity: new FormControl(1),
    availableAt: new FormControl('Select', [Validators.required]),
  });
  showLoader: boolean = false;

  bulkQty: FormGroup = new FormGroup({});
  priceParams = {};
  addToCartFlag: boolean = false;
  errorCount: number = 0;
  currency: any;
  currencySymbol: any;
  checkedFlag: boolean = false;
  items: any;
  paginatorLength: any;
  pageDefaultSize: number = 50;
  pageDropDownArr = [10, 25, 50, 100, 500];

  constructor(
    private landingPageService: LandingPagesService,
    private router: Router,
    private launchDialogService: LaunchDialogService,
    private globalMessageService: GlobalMessageService,
    private translate: TranslationService,
    private multiCartFacade: MultiCartFacade,
    private actions$: Actions,
    private gtmService: GoogleTagManagerService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.bulkUploadList = [];
    this.eventDataList = [];
    this.bulkOrder = [];
    this.status = [];
    this.checkPriceCounter = 0;
    this.totalPagecheckPrice = 0;
    this.getBulkOrderSummary();
    this.checkAll();
    this.bulkQty.addControl('text' + 0, new FormControl(1));
  }

  onChange(e) {
    let param = {
      copyPasteData: '',
      productCode: e.target.value,
      qty: 1,
    };
    this.landingPageService
      .validateCart(this.cartId, param)
      .subscribe((res) => {
        this.landingPageService.sendBulkOrderList({
          data: res,
          cartId: this.cartId,
        });
        // this.router.navigateByUrl('/bulk-order');
      });
  }

  onPageChange($event) {
    this.bulkOrder = this.items.slice(
      $event.pageIndex * $event.pageSize,
      $event.pageIndex * $event.pageSize + $event.pageSize
    );
  }

  deleteAllBulkOrder(e, type, index) {
    if (type === 'bulkAllDelete' && this.deleteAll) {
      this.bulkOrder = [];
      this.router.navigate(['/home']);
    } else {
      this.checkedcount = 0;

      if (this.checkedFlag && type === 'bulkAllDelete') {
        for (let i = 0; i < this.bulkOrder.length; i++) {
          if (this.bulkOrder[i].checked) {
            for (let j = 0; j < this.bulkUploadList.length; j++) {
              if (this.bulkUploadList[j].partNum == this.bulkOrder[i].partNum) {
                this.bulkUploadList.splice(j, 1);
                this.eventDataList.splice(j, 1);
              }
            }
            if (this.bulkOrder[i].status == 'Check Price') {
              this.totalPagecheckPrice--;
            }
            this.priceData[i] = '';
            if (this.bulkOrder.length == 1) this.router.navigate(['/home']);
            this.bulkOrder.splice(i, 1);
            --i;
          } else {
            this.checkedFlag = false;
          }
        }
      } else {
        if (this.bulkOrder.length == 1) this.router.navigate(['/home']);

        if (index === '') {
          for (let k = 0; k < this.bulkOrder.length; k++) {
            if (this.bulkOrder[k].checked) {
              this.bulkOrder.splice(k, 1);
              --k;
            }
          }
        } else {
          if (
            this.bulkOrder.filter((x) => x.status == 'Validated').length > 0
          ) {
            for (var i = 0; i < this.bulkUploadList.length; i++) {
              if (
                this.bulkUploadList[i].partNum == this.bulkOrder[index].partNum
              ) {
                this.bulkUploadList.splice(i, 1);
                this.eventDataList.splice(i, 1);
                break;
              }
            }
          }
          if (this.bulkOrder[index].status == 'Check Price') {
            this.totalPagecheckPrice--;
          }
          this.bulkOrder.splice(index, 1);
          this.priceData[index] = '';
        }
      }
      this.setvalue(this.bulkOrder);
    }
  }

  setvalue(data) {
    let counter = 0;
    data.forEach((element, i) => {
      this.bulkQty.controls['text' + i].setValue(element.quantity);
      if (element?.productAccessData?.isBuy) {
        this.status[i] = element.status;
        if (this.status[i] == 'Validated') {
          counter++;
        }
      } else {
        this.status[i] = 'Invalid';
      }
      this.priceData[i] = element.price;
      if (element.unitPrice) {
        this.priceValidateData[i] =
          element.unitPrice.currencyIso +
          ' ' +
          this.currencySymbol +
          element.unitPrice.value;
      } else {
        this.priceValidateData[i] = element.price;
      }
    });
    if (counter == data.length) {
      this.addToCartFlag = true;
      this.errorCount = 0;
    } else {
      this.addToCartFlag = false;
    }
  }

  checkPrice(data, index) {
    let checkPriceId1 = document.getElementById('checkPrice_' + index);
    checkPriceId1.setAttribute('loading', 'true');
    checkPriceId1.setAttribute('disabled', 'true');
    let quantity = this.bulkQty.get('text' + index).value;
    this.priceParams = {
      lineNo: index,
      partNum: data.partNum,
      qty: quantity,
    };
    this.landingPageService.checkPrice(this.cartId, this.priceParams).subscribe(
      (res: any) => {
        if (res) this.status[index] = res.status;
        //if (this.status[index] == 'Validated') this.addToCartFlag = true;
        this.bulkOrder[index].status = res.status;
        if (res.unitPrice) {
          this.bulkOrder[index].price =
            this.currency + ' ' + this.currencySymbol + res.unitPrice?.value;
        } else {
          this.bulkOrder[index].price = '';
        }

        if (res.unitPrice == undefined) {
          this.showPrice = true;
          this.priceData[index] = res.status;
        }

        if (res.unitPrice) {
          if (res.unitPrice.value > 0) {
            this.showPrice = true;
            this.priceData[index] =
              this.currency + ' ' + this.currencySymbol + res.unitPrice.value;
          }
          if (res.unitPrice.value == 0) {
            this.showPrice = true;
            this.priceData[index] = res.status;
          }
        }
        if (res.unitPrice?.value > 0 && this.status[index] == 'Validated') {
          this.showValidatedPrice = true;
          this.priceValidateData[index] =
            this.currency + ' ' + this.currencySymbol + res.unitPrice.value;
        }
        let checkPriceId = document.getElementById('checkPrice_' + index);
        checkPriceId.style.display = 'none';

        //document.getElementById('checkPrice_'+index).style.display ='none';
        if (this.status[index] != 'Validated') {
          this.totalPagecheckPrice--;
        }
        this.statusCount = 0;
        this.bulkOrder.map((data) => {
          if (data.status == 'Validated') {
            this.statusCount++;
          }
        });
        if (this.status[index] == 'Validated') {
          this.checkPriceCounter++;
          if (this.totalPagecheckPrice == this.checkPriceCounter)
            this.addToCartFlag = true;
          this.eventDataList.push(res);
          this.bulkUploadList.push({
            lineNo: index,
            prodCode: res.partNum,
            partNum: res.partNum,
            description: res.description,
            unitPrice: {
              formattedValue: '',
              value: res.unitPrice.value,
            },
            status: res.status,
            quantity: res.quantity,
            productSNo: res.productSNo,
            configurationflag: '',
            actualQuantity: res.quantity,
          });
        }

        if (this.statusCount == this.bulkOrder.length) {
          this.errorCount = 0;
          this.addToCartFlag = true;
        }
      },
      (error) => {
        this.globalMessageService.add(
          this.getTranslatedText('loggedinHome.errorMessage'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
      }
    );
  }

  selectAllchecbox(e) {
    this.deleteAll = true;
    this.bulkOrder?.map((code) => (code.checked = e.target.checked));
    this.bulkOrder.forEach((element) => {
      if (element.checked == false) this.deleteAll = false;
    });
    this.checkAll();
  }

  selectCheckbox(e, i) {
    this.checkedFlag = true;
    this.bulkOrder[i].checked = e.target.checked;
    if (this.bulkOrder[i].checked == false) {
      this.deleteAll = false;
      this.checkedFlag = false;
    }
  }

  checkAll() {
    this.checkedcount = 0;
    this.indeterminateValue = false;
    this.bulkOrder?.map((code) => {
      if (code.checked === true) {
        this.checkedcount++;
      }
    });
    if (this.checkedcount === this.bulkOrder?.length) {
      return true;
    } else {
      if (this.checkedcount > 0 && this.checkedcount < this.bulkOrder.length) {
        this.indeterminateValue = true;
        return false;
      }
      return false;
    }
  }

  getBulkOrderSummary() {
    this.landingPageService.getBulkOrderList().subscribe(
      (data) => {
        this.items = data?.data?.validatedBulkUploadList;
        this.paginatorLength = this.items?.length;
        this.bulkOrder = data?.data?.validatedBulkUploadList;

        this.cartId = data?.cartId;
        this.setQuantity(this.bulkOrder);
        this.currency = data?.data?.currencyISO;
        this.currencySymbol = data?.data?.currencyFormattedValue;

        let currValidatePriceData = data?.data?.validatedBulkUploadList;
        currValidatePriceData.forEach((element, i) => {
          if (data?.data?.validatedBulkUploadList[i].unitPrice) {
            if (data?.data?.validatedBulkUploadList[i].unitPrice.value > 0) {
              this.showValidatedPrice = true;
              this.priceValidateData[i] =
                this.currency +
                ' ' +
                this.currencySymbol +
                data?.data?.validatedBulkUploadList[i].unitPrice.value;
            }
          }

          if (currValidatePriceData[i].status == 'Validated') {
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

          if (currValidatePriceData[i].status == 'Check Price') {
            this.totalPagecheckPrice++;
          }
        });
      },
      (error) => {}
    );
  }

  setQuantity(data) {
    data?.forEach((element, index) => {
      this.bulkQty.addControl(
        'text' + index,
        new FormControl(element.quantity)
      );
      if (element?.productAccessData?.isBuy)
        this.status[index] = element.status;
      else {
        this.errorCount = this.errorCount + 1;
        this.status[index] = 'Invalid';
      }
    });
  }

  addBulkOrder() {
    this.showLoader = true;
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
              this.showLoader = false;
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
        this.showLoader = false;
      }
    );
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  openDeletePopup(e, type, index) {
    if (this.checkedcount > 0) {
      const componentData = {
        multipleParts: true,
      };
      const partDeleteDialog = this.launchDialogService.openDialog(
        DS_DIALOG.PART_DELETE_DIALOG,
        undefined,
        undefined,
        componentData
      );
      if (partDeleteDialog) {
        partDeleteDialog.pipe(take(1)).subscribe((value) => {
          if (value) {
            this.deleteAllBulkOrder(e, type, index);
          }
        });
      }
    } else {
      this.globalMessageService.add(
        this.getTranslatedText('loggedinHome.selectProduct'),
        GlobalMessageType.MSG_TYPE_WARNING,
        5000
      );
      window.scrollTo(0, 0);
    }
  }

  deletePopup(e, type, index) {
    const componentData = {
      multipleParts: false,
    };
    const partDeleteDialog = this.launchDialogService.openDialog(
      DS_DIALOG.PART_DELETE_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (partDeleteDialog) {
      partDeleteDialog.pipe(take(1)).subscribe((value) => {
        if (value.instance.reason) {
          this.deleteAllBulkOrder(e, type, index);
        }
      });
    }
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  close() {
    let myRow = document.getElementById('info');
    myRow.style.display = 'none';
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
          item_list_id: ItemListTypeEnum.MyFavourite,
          item_list_name: ItemListTypeEnum.MyFavourite,
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
