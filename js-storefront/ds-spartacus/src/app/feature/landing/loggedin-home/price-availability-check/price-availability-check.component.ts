import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  GlobalMessageService,
  GlobalMessageType,
  OccEndpointsService,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
  TranslationService,
} from '@spartacus/core';
import {
  CurrentProductService,
  LaunchDialogService,
  ViewModes,
} from '@spartacus/storefront';
import moment from 'moment';
import { of } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';
import { LandingPagesService } from '../../landing-pages.service';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';
import { BuyActions } from '../../../../core/product-catalog/model/product-catelog.model';
import { ProductCatelogService } from '../../../../core/product-catalog/services/product-catelog.service';
import { GtmEvents, StoreTypeEnum } from '../../../../shared/enums/gtm.enum';
import {
  EcommerceItem,
  Ecommerce,
  GTMDataLayer,
  GTMCartType,
} from '../../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../../shared/services/gtm.service';

@Component({
  standalone: false,
  selector: 'app-price-availability-check',
  templateUrl: './price-availability-check.component.html',
  styleUrls: ['./price-availability-check.component.scss'],
})
export class PriceAvailabilityCheckComponent implements OnInit {
  priceAvailCheck = true;
  partNumber = '';
  quantity = 1;
  maxQuantity: 999;
  productInfo;
  productfilmInfo;
  shipAddressInfo;
  isFilm = true;
  currentSalesArea = '';
  cartId = '';
  showDropDown = false;
  stockDetails: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  showSpinner: boolean = false;
  addToCartForm = new FormGroup({
    quantity: new FormControl(1),
    availableAt: new FormControl('Select', [Validators.required]),
  });
  shipItems: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  endItems: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  increment = false;
  shipTo: any;
  endCustomerAddress: any;
  stock: string;
  partValid: boolean;
  shiptolabel: any;
  mode = ViewModes.Grid;
  currentBuyAction: BuyActions;
  buyActions = BuyActions;
  cartType: any;

  constructor(
    private landingPagesService: LandingPagesService,
    protected activeCartFacade: ActiveCartFacade,
    private customerAccountService: CustomerAccountService,
    private translate: TranslationService,
    protected launchDialogService: LaunchDialogService,
    private globalMessageService: GlobalMessageService,
    protected currentProductService: CurrentProductService,
    private productCatService: ProductCatelogService,
    protected occEndpoints: OccEndpointsService,
    private gtmService: GoogleTagManagerService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.customerAccountService.getCurrentCustomerAccount().subscribe((res) => {
      if (res) {
        this.currentSalesArea = res?.selectedSalesArea?.salesAreaId;
      } else {
        this.currentSalesArea = '';
      }
    });
    this.getCartId();
    this.addToCartForm.valueChanges.subscribe((data) => {
      if (!Number.isInteger(data.quantity)) {
        this.addToCartForm.controls.quantity.setValue(
          Math.floor(data.quantity)
        );
      }
    });
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  stockCheck() {
    var stockList = [];
    this.productInfo &&
      this.productInfo.cartData?.entries[0]?.stockDetails.forEach((stock) => {
        stockList.push({
          label: stock.actualStockQty + ' ' + stock.plantName,
          value: stock.actualStockQty + ' ' + stock.plantName,
        });
      });
    this.stockDetails = {
      itemGroups: [
        {
          items: stockList,
        },
      ],
    };
    this.stock =
      this.productInfo.cartData?.entries[0]?.stockDetails[0].actualStockQty +
      ' ' +
      this.productInfo.cartData?.entries[0]?.stockDetails[0].plantName;
  }

  backToSearch() {
    this.priceAvailCheck = true;
    this.partNumber = '';
    this.productInfo = '';
    this.shipTo = '';
    this.shiptolabel = '';
    this.partValid = this.partNumber !== '' ? true : false;
  }

  checkPrice() {
    this.quantity = this.addToCartForm.value.quantity;
    if (this.partNumber !== '') {
      this.addToCartForm.valueChanges.subscribe((res: any) => {
        this.quantity = this.addToCartForm.value.quantity;
      });
      //this.priceAvailCheck = true;
      this.showSpinner = true;
      this.landingPagesService.filmCheck(this.partNumber).subscribe(
        (res: any) => {
          this.productfilmInfo = res;
          this.showSpinner = false;
          this.partValid = false;
          if (this.productfilmInfo.isFilm === 'true') {
            this.showDropDown = true;
            if (!this.shipTo) this.showShipAddress();
            else if (this.shipTo) this.getAvailabilityInfo();
            // this.showendUserAddress();
          } else {
            this.showDropDown = false;
            this.getAvailabilityInfo();
          }
        },
        (error) => {
          this.globalMessageService.add(
            this.getTranslatedText('buyCart.errorMessage'),
            GlobalMessageType.MSG_TYPE_ERROR
          );
          this.showSpinner = false;
        }
      );
    }
    //else {
    //   this.priceAvailCheck = false;
    // }
  }

  getShipDate(shipdate) {
    if (shipdate === '01-Jan-2100') {
      return this.getTranslatedText('buyCart.bhgeConfirmAvailability');
    } else {
      return moment(shipdate).format('D MMMM, YYYY');
    }
  }

  getCartId() {
    this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
      this.cartId = cartId;
    });
  }

  onChange(event) {
    this.partNumber = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, event.target.value),
      REGULAR_PATTERN.alphaNumeric
    );
    this.productInfo = '';

    this.partValid = this.partNumber !== '' ? true : false;
  }
  onSetShipto(e) {
    this.shipTo = e.detail;
    this.shiptolabel = e.target.value;
    this.partValid = this.partNumber !== '' ? true : false;
  }
  onSetEndAddress(e) {
    this.endCustomerAddress = e.detail;
  }
  showendUserAddress() {
    this.landingPagesService.showendUserAddress(this.cartId).subscribe(
      (res: any) => {
        this.shipAddressInfo = res;
        this.showSpinner = false;
      },
      (error) => {
        this.showSpinner = false;
      }
    );
  }

  showShipAddress() {
    this.landingPagesService.shipToAddress(this.currentSalesArea).subscribe(
      (res: any) => {
        this.shipAddressInfo = res;
        var addresses = [];
        addresses = this.shipAddressInfo.map((ship) => {
          let obj = {
            label: `${ship.titleCode || ''} ${ship.firstName || ''} ${
              ship.lastName || ''
            } ${ship.line1 || ''} ${ship.line2 || ''} ${ship.townCity} ${
              ship.regionIso || ''
            } ${ship.countryIso || ''} ${ship.postcode || ''}`,
            value: ship.addressId,
          };
          return obj;
        });
        this.shipItems = {
          itemGroups: [
            {
              items: addresses,
            },
          ],
        };
        var endAddresses = [];
        endAddresses = this.shipAddressInfo.map((ship) => {
          let obj = {
            label: `${ship.sapCustomerID || ''} ${'-'} ${
              ship.titleCode || ''
            } ${ship.firstName || ''} ${ship.lastName || ''} ${
              ship.line1 || ''
            } ${ship.line2 || ''} ${ship.townCity} ${ship.regionIso || ''} ${
              ship.countryIso || ''
            } ${ship.postcode || ''}`,
            value: ship.addressId,
          };
          return obj;
        });
        this.endItems = {
          itemGroups: [
            {
              items: endAddresses,
            },
          ],
        };
      },
      (error) => {
        this.showSpinner = false;
      }
    );
  }

  getAvailabilityInfo() {
    let requestObj = {
      isHomePage: 'true',
      isInvPage: 'true',
      partNum: this.partNumber,
      defaultShipTo: this.shipTo ? this.shipTo : '',
      endCustomerRefNum: this.endCustomerAddress ? this.endCustomerAddress : '',
      qty: this.quantity,
    };

    this.showSpinner = true;
    this.landingPagesService.priceAndAvailabilityCheck(requestObj).subscribe(
      (res: any) => {
        this.sendPnAInfoToGA(this.partNumber, this.currentSalesArea);
        this.productInfo = res;
        this.currentBuyAction = this.productCatService.getBuyAction(
          this.productInfo?.productData
        );
        this.showSpinner = false;
        this.stockCheck();
      },
      (error) => {
        this.globalMessageService.add(
          this.getTranslatedText('buyCart.errorMessage'),
          GlobalMessageType.MSG_TYPE_ERROR
        );
        this.showSpinner = false;
      }
    );
  }

  // addToCart() {
  //   this.activeCartFacade.addEntry(this.partNumber, this.quantity);
  // }
  addToCart() {
    this.partNumber = this.partNumber?.toUpperCase();
    let currentCartType = 'BUY';
    let userType = OCC_USER_ID_CURRENT;

    this.activeCartFacade
      .getActive()
      .pipe(
        take(1),
        concatMap((activeCart: any) => {
          let cartId = this.cartId;
          this.cartType = activeCart.cartType;
          if (activeCart.entries?.length > 0) {
            if (activeCart.commerceType != currentCartType) {
              this.openSwitchCartModal(
                activeCart.commerceType,
                currentCartType,
                cartId
              );
            } else {
              this.addProductToBuyCart();
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
          this.addProductToBuyCart();
        }
      });
  }
  private openSwitchCartModal(currentCartType, switchToCartType, cartId) {
    const componentdata = {
      currentCartType: currentCartType,
      switchToCartType: switchToCartType,
      currentCartCode: cartId,
    };
    const switchCartModel = this.launchDialogService
      .openDialog(
        DS_DIALOG.SWITCH_CART_DIALOG,
        undefined,
        undefined,
        componentdata
      )
      .pipe(take(1));
    switchCartModel.pipe(take(1)).subscribe((value) => {
      if (value == true || value?.instance?.reason == true) {
        this.addProductToBuyCart();
      }
    });
  }
  addProductToBuyCart() {
    const quantity = this.quantity;
    if (!this.partNumber || quantity <= 0) {
      return;
    }
    this.partNumber = this.partNumber.toUpperCase();
    // check item is already present in the cart
    // so modal will have proper header text displayed
    this.activeCartFacade
      .getEntry(this.partNumber.toUpperCase())
      .subscribe((entry) => {
        if (entry) {
          this.increment = true;
        }
        this.openModal();
        this.activeCartFacade.addEntry(this.partNumber.toUpperCase(), quantity);
        this.increment = false;
      })
      .unsubscribe();
  }
  private openModal() {
    this.pushAddToCartEvent();
    const componentData = {
      entry$: this.activeCartFacade.getLastEntry(this.partNumber.toUpperCase()),
      cart$: this.activeCartFacade.getActive(),
      loaded$: this.activeCartFacade.isStable(),
      quantity: this.quantity,
      increment: this.increment,
    };
    const addToCartDialog = this.launchDialogService.openDialog(
      DS_DIALOG.ADD_TO_CART_DIALOG,
      undefined,
      undefined,
      componentData
    );
    addToCartDialog.pipe(take(1)).subscribe((value) => {
      if (value == 'Removed') {
        this.backToSearch();
      } else {
        this.backToSearch();
        this.partNumber = '';
      }
    });
  }
  switchDsCustomer() {
    const componentData = {
      productAccessData: this.productInfo?.productData?.productAccessData,
    };
    const switchCustomerDialog = this.launchDialogService.openDialog(
      DS_DIALOG.SWITCH_CUSTOMER_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (switchCustomerDialog) {
      switchCustomerDialog.pipe(take(1)).subscribe((value) => {
        if (value != 'close' || value != 'cancel') {
          const salesArea =
            typeof value == 'string'
              ? value
              : value?.instance?.selectedSalesAreaId;
          this.customerAccountService
            .updateSalesArea(salesArea, salesArea.split('_')[0])
            .subscribe((res: any) => {
              this.customerAccountService.updateAvaiableProductLine(
                res?.visibleCategories || []
              );
              this.customerAccountService.refreshPostCustomAccSwitch();
              this.backToSearch();
              this.globalMessageService.add(
                this.getTranslatedText('buyCart.salesAreaSuccess'),
                GlobalMessageType.MSG_TYPE_CONFIRMATION
              );
            });
        }
      });
    }
  }

  sendPnAInfoToGA(productId, customerAcc) {
    const customAccSalesArea = customerAcc.split('_');
    this.gtmService.sendEvent({
      event: 'inventoryCheck',
      productCode: productId,
    });
  }

  pushAddToCartEvent() {
    const item: EcommerceItem = {
      price: this.productInfo.cartData?.totalPrice?.value,
      quantity: this.quantity,
      item_id: this.productInfo.productData.code,
      item_name: this.productInfo.productData.name,
      discount: this.productInfo.cartData?.entries[0]?.stockDetails[0]
        .actualStockQty.discountPercentage
        ? Number(
            this.productInfo.cartData?.entries[0]?.stockDetails[0]
              .actualStockQty.discountPercentage
          )
        : '',
      item_brand: this.gtmService.getItemBrand(),
      index: 0,
    };

    const eventData: Ecommerce = {
      currency: this.productInfo.currencyISO,
      value: item.price,
      items: [item],
    };
    const event: GTMDataLayer = {
      event: GtmEvents.AddToCart,
      store: StoreTypeEnum.Dsstore,
      ecommerce: eventData,
      commerceType: GTMCartType.BUY_CART,
      cartType: this.cartType,
    };
    this.gtmService.sendEvent(event);
  }
}
