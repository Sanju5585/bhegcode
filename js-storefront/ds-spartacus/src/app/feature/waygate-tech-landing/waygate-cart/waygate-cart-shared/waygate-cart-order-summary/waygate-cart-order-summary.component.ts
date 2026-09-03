import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SecurityContext,
} from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Actions, ofType } from '@ngrx/effects';
import {
  GlobalMessageService,
  GlobalMessageType,
  RoutingService,
  TranslationService,
} from '@spartacus/core';
import { Observable, pipe, Subscription } from 'rxjs';
/* import { Item } from '../cart-item/cart-item.component';
import { SharedCartService } from '../shared-cart.service'; */

import { ActiveCartFacade, CartVoucherFacade } from '@spartacus/cart/base/root';
import { CartActions } from '@spartacus/cart/base/core';
import { DatePipe } from '@angular/common';
import moment from 'moment';
import { Item } from '../../../../cart';
import {
  CartType,
  ProductType,
} from '../../../../../shared/models/cartType.models';
import { CustomerAccountService } from '../../../../../core/customer-account/customer-account.service';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../../core/generic-validator/regular-expressions';
import {
  ItemListTypeEnum,
  GtmEvents,
} from '../../../../../shared/enums/gtm.enum';
import {
  Ecommerce,
  GTMCartType,
  GTMDataLayer,
} from '../../../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../../../shared/services/gtm.service';
import {
  AccessRoleType,
  UserRoleService,
} from '../../../../../shared/services/user-role.service';
import { SharedCartService } from '../../../../cart/cart-shared/shared-cart.service';
import { BuyCheckoutService } from '../../../../checkout/buy-checkout/service/buy-checkout.service';
import { filter, take } from 'rxjs/operators';
import { CustomerType } from '../../../../../shared/models/customerType.model';
import { AllProductLine } from '../../../../../shared/enums/availableProductList.enum';
import { LaunchDialogService } from '@spartacus/storefront';
import { DS_DIALOG } from '../../../../../core/dialog/dialog.config';
import { SALES_AREA } from '../../../../../shared/models/status/order-status.model';

@Component({
  standalone: false,
  selector: 'app-waygate-cart-order-summary',
  templateUrl: './waygate-cart-order-summary.component.html',
  styleUrls: ['./waygate-cart-order-summary.component.scss'],
})
export class WaygateCartOrderSummaryComponent implements OnInit {
  @Input()
  cart$: Observable<any>;

  entries: Item[];

  @Input()
  cart;

  @Input()
  userType: string;

  @Output()
  scrollToEntry: EventEmitter<any> = new EventEmitter();

  @Input() items: any[];
  @Input() profileType: string;
  @Input() dateAndDisabledChange: { date: Date; disabled: boolean };
  isEndUserType: boolean;
  cartId$: Observable<string> = this.activeCartFacade.getActiveCartId();
  orderType = 'For Resale';
  cartId: string;
  maxDate;
  minDate;

  consolidatedShipmentSubscription: any;
  isPartialSubscription: any;
  coupon = '';
  couponApplied = false;
  couponErrorMsg = false;
  noValueCouponMsg = false;

  isDeliveryErrorSubscription: any;
  deliveryErrors: any[] = [];

  soldToSelected: boolean;
  cartType = CartType;
  availabilityFlag: any;
  getGuestEmailAddress = '';
  guestEmailSubscription: Subscription;
  currentUserAccess$ = this.userRoleService.currentUserRole;
  userRoleEnum = AccessRoleType;
  showLoading: boolean = false;
  isButtonDisabled: boolean = false;
  productLine: string;
  public productType = ProductType;
  nonFilmProduct: any[] = [];
  filmProduct: any[] = [];
  vcProducts: any[] = [];
  proceedClickEvent: any;
  isQuoteOrderConvertFlow: boolean = false;
  restrictedSalesArea: boolean = true;
  allproductline = AllProductLine;
  salesArea_6210;
  isChannelPartner: boolean;
  notAllItemsHaveStock: boolean;
  selectedSalesArea: string;
  constructor(
    protected routingService: RoutingService,
    private router: Router,
    private sharedCartService: SharedCartService,
    private activeCartFacade: ActiveCartFacade,
    private globalMessageService: GlobalMessageService,
    private actions$: Actions,
    private cartVoucherFacade: CartVoucherFacade,
    private cdRef: ChangeDetectorRef,
    private translate: TranslationService,
    private userRoleService: UserRoleService,
    public sanitizer: DomSanitizer,
    private custAccService: CustomerAccountService,
    private buyCheckoutService: BuyCheckoutService,
    public datepipe: DatePipe,
    private googleTagManagerService: GoogleTagManagerService,
    private customerAccountService: CustomerAccountService,
    private launchDialogService: LaunchDialogService,
    private customerAccService: CustomerAccountService
  ) {
    this.sharedCartService.isCheckAvailability$.subscribe((res) => {
      this.availabilityFlag = res;
    });
    this.customerAccService.getCurrentCustomerAccount().subscribe((res) => {
      if (res) {
        this.selectedSalesArea =
          res?.selectedSalesArea?.salesAreaId.split('_')[1];
      }
    });
  }

  ngOnInit() {
    this.customerAccService.getCustomerUserType().subscribe((customerType) => {
      this.isChannelPartner = customerType === CustomerType.Type2;
    });
    this.isEndUserType = this.profileType !== CustomerType.Type1;
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });

    this.cartId$.subscribe((res) => {
      this.cartId = res;
    });

    this.userRoleService
      .getCurrentB2BSalesArea(this.userType)
      .subscribe((res) => {
        if (res === false) {
          this.restrictedSalesArea = false;
        } else {
          this.restrictedSalesArea = true;
        }
        this.cdRef.detectChanges();
      });
    this.isButtonDisabled =
      this.cart.isMinOrderQtyProductExists ||
      (this.cart?.cartType == this.cartType.Typ3 &&
        !this.cart.enduserAddress &&
        this.isEndUserType);
    this.setFilmAndNonFilmItems();

    this.isQuoteOrderConvertFlow = JSON.parse(
      sessionStorage.getItem('isQuoteToOrder')
    );

    this.customerAccountService.disclaimerBannerState.subscribe((salesArea) => {
      if (salesArea) {
        this.salesArea_6210 = salesArea;
      }
    });
  }
  ngOnChanges() {
    this.filmProduct = [];
    this.nonFilmProduct = [];
    this.isButtonDisabled =
      this.cart.isMinOrderQtyProductExists ||
      (this.cart?.cartType == this.cartType.Typ3 &&
        !this.cart.enduserAddress &&
        this.isEndUserType);
    this.setFilmAndNonFilmItems();
  }
  setFilmAndNonFilmItems() {
    // Setting only unique entries into the film & non-film products list from cart entries
    if (this.cart?.entries) {
      this.vcProducts = this.cart.entries
        .filter((item) => item.product.configurable)
        .filter(
          (item, index, self) =>
            index ===
            self.findIndex(
              (t) =>
                t.product.code === item.product.code &&
                this.compareConfigurationInfos(
                  t.configurationInfos,
                  item.configurationInfos
                )
            )
        );

      this.filmProduct = this.cart?.entries
        .filter((item) => item.productType === this.productType.Typ3)
        .filter(
          (item, index, self) =>
            index ===
            self.findIndex((t) => t.product.code === item.product.code)
        );

      this.nonFilmProduct = this.cart?.entries
        .filter(
          (item) =>
            item.productType !== this.productType.Typ3 &&
            !item.product.configurable
        )
        .filter(
          (item, index, self) =>
            index ===
            self.findIndex((t) => t.product.code === item.product.code)
        );
    }
  }

  compareConfigurationInfos(
    configA: { configurationLabel: string; configurationValue: string }[],
    configB: { configurationLabel: string; configurationValue: string }[]
  ): boolean {
    if (configA.length !== configB.length) return false;

    return configA.every((a) =>
      configB.some(
        (b) =>
          a.configurationLabel === b.configurationLabel &&
          a.configurationValue === b.configurationValue
      )
    );
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  applyCoupon() {
    this.coupon = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, this.coupon),
      REGULAR_PATTERN.alphaNumericWithSpecialCharater
    );
    if (!this.coupon) return false;
    this.cartVoucherFacade.addVoucher(this.coupon, this.cartId);
    this.actions$.pipe(ofType(CartActions.CART_ADD_VOUCHER_SUCCESS)).subscribe(
      (success: any) => {
        this.couponApplied = true;
        this.coupon = success.payload?.voucherId;

        this.cdRef.detectChanges();
      },
      (error) => {
        this.globalMessageService.add(
          error,
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
    );
    this.actions$.pipe(ofType(CartActions.CART_ADD_VOUCHER_FAIL)).subscribe(
      (err: any) => {
        this.couponErrorMsg = false;
        this.noValueCouponMsg = false;
        const couponErr = err.payload.error.details;
        if (couponErr[0].message == 'coupon.code.expectationNotMet.provided') {
          this.noValueCouponMsg = true;
        } else {
          this.couponErrorMsg = true;
        }
        this.couponApplied = false;
        this.coupon = '';

        this.cdRef.detectChanges();
      },
      (error) => {
        this.globalMessageService.add(
          error,
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
    );
  }

  proceedToCheckoutNavigate() {
    this.sharedCartService.updateProceedButtonFlag(true);
    this.proceedCheckAvailability();
  }

  proceedToCheckout() {
    //If Cart is ITFILM cart
    if (this.cart?.cartType == CartType.Typ1 && this.isChannelPartner && !this.cart?.isQuote) {
      const emptyEcaProducts = this.cart?.entries
        ?.filter(
          (entry) =>
            entry?.productType == this.productType.Typ3 && !entry?.ecaCode
        )
        .map((entry) => entry?.product?.name);
      const componentData = {
        emptyEcaProducts: emptyEcaProducts,
      };
      if (emptyEcaProducts.length > 0) {
        const ecaMissingDialog = this.launchDialogService.openDialog(
          DS_DIALOG.ECA_MISSING_DIALOG,
          undefined,
          undefined,
          componentData
        );
        if (ecaMissingDialog) {
          ecaMissingDialog.pipe(take(1)).subscribe((value) => {});
        }
        return;
      }

      if (this.cart.isMinOrderQtyProductExists) {
        return false;
      }
    }
    if (this.cart?.cartType !== CartType.Typ1) {
      if (
        this.cart.isMinOrderQtyProductExists ||
        (this.isButtonDisabled &&
          !this.cart.enduserAddress &&
          this.isEndUserType)
      ) {
        return false;
      }
    }
    var checkoutNativationPath = `/${this.productLine}/checkout`;

    if (this.userType !== 'current') {
      this.sharedCartService.validateForm('validateEmail');
    }

    const processMaxDate = (maxDate: string | null, isFilm: boolean) => {
      // Skip API call if maxDate is invalid or "No estimate available"
      if (
        !moment(maxDate, 'DD-MMM-YYYY', true).isValid() ||
        maxDate === 'No estimate available'
      ) {
        return;
      }

      maxDate = this.datepipe.transform(maxDate, 'dd-MM-yyyy');

      const requestFn = isFilm
        ? this.buyCheckoutService.requsetDateForFilm
        : this.buyCheckoutService.requsetDateForNonFilm;
      requestFn
        .call(this.buyCheckoutService, this.cartId, maxDate)
        .pipe(take(1))
        .subscribe(
          (res) => {},
          (error) => {
            this.getTranslatedText('errors.errorMessage');
          }
        );
    };

    const processMinDate = (minDate: string | null, isFilm: boolean) => {
      // Skip API call if minDate is invalid or "No estimate available"
      if (
        !moment(minDate, 'DD-MMM-YYYY', true).isValid() ||
        minDate === 'No estimate available'
      ) {
        return;
      }

      minDate = this.datepipe.transform(minDate, 'dd-MM-yyyy');

      const requestFn = isFilm
        ? this.buyCheckoutService.requsetDateForFilm
        : this.buyCheckoutService.requsetDateForNonFilm;
      requestFn.call(this.buyCheckoutService, this.cartId, minDate).subscribe(
        (res) => {},
        (error) => {
          this.getTranslatedText('errors.errorMessage');
        }
      );
    };

    const getMaxShipDate = (
      products: { estShipData?: { shipDate: string }[] }[]
    ): string | null => {
      if (!products?.length) return null;

      const validProducts = products.filter((item) => {
        const lastEntry = item?.estShipData?.at(-1);
        return (
          lastEntry?.shipDate && lastEntry.shipDate !== 'No estimate available'
        );
      });

      if (!validProducts.length) return null;

      const sortedProducts = validProducts.sort((a, b) => {
        const dateA = new Date(a.estShipData?.at(-1)?.shipDate ?? '').getTime();
        const dateB = new Date(b.estShipData?.at(-1)?.shipDate ?? '').getTime();
        return dateB - dateA; // Sorting in descending order for the latest date
      });

      return sortedProducts[0]?.estShipData?.at(-1)?.shipDate ?? null;
    };

    const getMinShipDate = (
      products: { estShipData?: { shipDate: string }[] }[]
    ): string | null => {
      if (!products?.length) return null;

      const validProducts = products.filter((item) => {
        const lastEntry = item?.estShipData?.at(-1);
        return (
          lastEntry?.shipDate && lastEntry.shipDate !== 'No estimate available'
        );
      });

      if (!validProducts.length) return null;

      const sortedProducts = validProducts.sort((a, b) => {
        const dateA = new Date(a.estShipData?.at(-1)?.shipDate ?? '').getTime();
        const dateB = new Date(b.estShipData?.at(-1)?.shipDate ?? '').getTime();
        return dateA - dateB;
      });

      return sortedProducts[0]?.estShipData?.at(-1)?.shipDate ?? null;
    };

    const processCommon = () => {
      const singleProduct = this.cart.entries[0];
      // const maxDate = this.datepipe.transform(
      //   this.dateAndDisabledChange.date,
      //   'dd-MMM-YYYY'
      // );
      // Above code is commented based on the business requirement.
      const maxDate = singleProduct?.estShipData?.at(-1)?.shipDate ?? null;
      processMaxDate(
        maxDate,
        singleProduct.productType === this.productType.Typ3
      );
    };

    const processEntries = () => {
      if (this.filmProduct?.length >= 1) {
        if (!this.cart.isShipCompleteOrder) {
          const minDate = getMinShipDate(this.filmProduct);
          processMinDate(minDate, true);
        } else {
          const maxDate = getMaxShipDate(this.filmProduct);
          processMaxDate(maxDate, true);
        }
      }
      if (this.nonFilmProduct?.length >= 1) {
        if (!this.cart.isShipCompleteOrder) {
          const minDate = getMinShipDate(this.nonFilmProduct);
          processMinDate(minDate, false);
        } else {
          const maxDate = getMaxShipDate(this.nonFilmProduct);
          processMaxDate(maxDate, false);
        }
      }
      if (this.vcProducts?.length >= 1) {
        if (!this.cart.isShipCompleteOrder) {
          const minDate = getMinShipDate(this.vcProducts);
          processMinDate(minDate, false);
        } else {
          const maxDate = getMaxShipDate(this.vcProducts);
          processMaxDate(maxDate, false);
        }
      }
      if (this.cart?.entries?.length === 1) {
        processCommon();
      }
    };

    if (this.cart.cartType === CartType.Typ3) {
      processEntries();
    } else {
      if (
        this.filmProduct?.length > 1 ||
        this.nonFilmProduct?.length > 1 ||
        this.vcProducts?.length > 1
      ) {
        processEntries();
      } else if (this.cart?.entries?.length === 1) {
        processCommon();
      }
    }

    if (
      (this.cart?.cartType == this.cartType.Typ1 ||
        this.cart?.cartType == this.cartType.Typ3) &&
      this.isEndUserType
    ) {
      if (this.cart?.enduserAddress && !this.availabilityFlag?.availibility) {
        this.setGTMTagsForCheckoutBegin();
        if (this.salesArea_6210 == SALES_AREA.SALES_AREA_6210) {
          this.showDisclaimerMessage();
        } else {
          this.navigationToCheckoutScreen(checkoutNativationPath);
        }
      } else if (
        this.isChannelPartner &&
        this.cart?.cartType == this.cartType.Typ1 &&
        !this.availabilityFlag?.availibility
      ) {
        this.setGTMTagsForCheckoutBegin();
        if (this.salesArea_6210 == SALES_AREA.SALES_AREA_6210) {
          this.showDisclaimerMessage();
        } else {
          this.navigationToCheckoutScreen(checkoutNativationPath);
        }
      } else if (!this.cart?.enduserAddress) {
        if (this.cart?.cartType !== CartType.Typ1) {
          this.globalMessageService.add(
            this.getTranslatedText('buyCart.addEndUserAddress'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      } else if (this.availabilityFlag?.availibility) {
        this.globalMessageService.add(
          this.getTranslatedText('buyCart.issueAtLine').replace(
            '{lineNo}',
            this.availabilityFlag?.lineNo
          ),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
    } else if (this.availabilityFlag?.availibility) {
      this.globalMessageService.add(
        this.getTranslatedText('buyCart.issueAtLine').replace(
          '{lineNo}',
          this.availabilityFlag?.lineNo
        ),
        GlobalMessageType.MSG_TYPE_ERROR,
        5000
      );
      window.scrollTo(0, 0);
    } else if (this.cart.isMinOrderQtyProductExists) {
      this.globalMessageService.add(
        this.getTranslatedText('buyCart.minOrderErrorAtCheckout'),
        GlobalMessageType.MSG_TYPE_ERROR,
        5000
      );
      window.scrollTo(0, 0);
    } else if (this.userType !== 'current' && !this.getGuestEmailAddress) {
      this.guestEmailSubscription =
        this.sharedCartService.getGuestEmailAddress.subscribe(
          (guestEmailAddress) => {
            if (guestEmailAddress) {
              this.getGuestEmailAddress = guestEmailAddress;
            }
          }
        );
      if (this.getGuestEmailAddress !== '') {
        this.saveGuestEmail();
      }
    } else {
      if (this.userType !== 'current' && this.getGuestEmailAddress) {
        this.saveGuestEmail();
      } else {
        this.setGTMTagsForCheckoutBegin();
        if (this.salesArea_6210 == SALES_AREA.SALES_AREA_6210) {
          this.showDisclaimerMessage();
        } else {
          this.navigationToCheckoutScreen(checkoutNativationPath);
        }
      }
    }
  }

  saveGuestEmail() {
    this.showLoading = true;
    let guestEmailObj = {
      email: this.getGuestEmailAddress,
    };
    this.sharedCartService.saveGuestEmail(this.cartId, guestEmailObj).subscribe(
      (data) => {
        this.showLoading = false;
        this.sharedCartService.setGuestEmailAddress('');
        this.router.navigate(['checkout']);
      },
      (error) => {
        this.showLoading = false;
        this.globalMessageService.add(
          this.getTranslatedText('buyCart.errorMessage'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
    );
  }
  removeCoupon(couponCode) {
    this.cartVoucherFacade.removeVoucher(couponCode, this.cartId);
    this.coupon = '';
    this.couponErrorMsg = false;
    this.noValueCouponMsg = false;
  }
  ngOnDestroy(): void {
    if (this.guestEmailSubscription) {
      this.guestEmailSubscription.unsubscribe();
    }
  }
  getPositiveSilverClause(value) {
    if (value) {
      return Math.abs(value).toFixed(2);
    }
    return 0;
  }

  returnToCart() {}
  selectTerms() {}

  setGTMTagsForCheckoutBegin() {
    let items: any[] = [];
    if (this.items.length > 0) {
      this.items.forEach((item, i) => {
        let eachitem: any = {
          item_id: item?.product?.code,
          item_name: item?.product?.name,
          coupon: '',
          discount: +item?.discountPercentage ? +item?.discountPercentage : '',
          index: i,
          item_brand: this.googleTagManagerService.getItemBrand(),
          affiliation: this.googleTagManagerService.getItemBrand(),
          item_list_id: ItemListTypeEnum.Cart,
          item_list_name: ItemListTypeEnum.Cart,
          price: item?.netSellingPrice?.value,
          quantity: item?.quantity,
        };
        items.push(eachitem);
      });
    }

    let checkoutBeginEcommerce: Ecommerce = {
      currency: this.cart?.currencyIso,
      value: this.cart?.totalPrice?.value ? this.cart?.totalPrice?.value : '',
      coupon: this.cart?.appliedCouponCodes
        ? this.cart?.appliedCouponCodes[0]
        : '',
      items: items,
    };

    let checkoutBeginDataLayer: GTMDataLayer = {
      store: this.googleTagManagerService.getItemBrand(),
      ecommerce: checkoutBeginEcommerce,
      event: GtmEvents.BeginCheckout,
      commerceType: GTMCartType.BUY_CART,
      cartType: this.cart?.cartType,
    };

    this.googleTagManagerService.sendEvent(checkoutBeginDataLayer);
  }
  showOutofstock(entries) {
    const componentdata = {
      oosEntries: entries.map((e) => {
        return e?.product?.code;
      }),
    };

    const disclaimerBannerDialog = this.launchDialogService.openDialog(
      DS_DIALOG.OUT_OF_STOCK_MESSAGE,
      undefined,
      undefined,
      componentdata
    );
    if (disclaimerBannerDialog) {
      disclaimerBannerDialog.pipe(take(1)).subscribe((value) => {});
      this.launchDialogService.dialogClose.subscribe((value) => {});
    }
  }
  //Validate check availablity

  proceedCheckAvailability() {
    this.sharedCartService.proceedButtonClicked$.subscribe((value) => {
      this.proceedClickEvent = value;
      if (value) {
        if (
          this.selectedSalesArea == '7140' &&
          this.proceedClickEvent &&
          this.cart?.commerceType == 'BUY' &&
          this.cart?.cartType == 'FILM'
        ) {
          console.log(this.cart?.entries);
          const outOfStockEntries = this.cart?.entries.filter(
            (e: any) => Number(e?.availableQuantity) < e?.quantity
          );
          console.log(outOfStockEntries);
          if (outOfStockEntries?.length > 0) {
            this.showOutofstock(outOfStockEntries);
            return;
          }
        }
        this.findCheckAvailability()
          .pipe(take(1))
          .subscribe((res: any) => {
            if (res.length > 0 && this.proceedClickEvent) {
              const noStockLineItems = this.getCartErrorLineItemsArr(res);
              let msg = this.getTranslatedText(
                'buyCart.issueWithFollowingItems'
              );
              let middleText = '';
              let middleText2 = '. ';
              let endText = this.getTranslatedText(
                'buyCart.updtaeBasedOnMessage'
              );
              for (let i = 0; i < Math.min(5, noStockLineItems.length); i++) {
                middleText =
                  middleText +
                  '#' +
                  (parseInt(noStockLineItems[i][0]) + 1) +
                  ' ';
              }
              const finalMsg = msg + middleText + middleText2 + endText;
              this.globalMessageService.add(
                finalMsg,
                GlobalMessageType.MSG_TYPE_WARNING,
                5000
              );
              window.scroll(0, 0);
              this.sharedCartService.updateProceedButtonFlag(false);
              return false;
            } else {
              this.proceedToCheckout();
            }
          });
      }
    });
  }

  findCheckAvailability(): Observable<any> {
    return this.sharedCartService.isCheckAvailabilityCheck$;
  }

  getCartErrorLineItemsArr(stockItems) {
    const errorDetailArr = [];
    stockItems.forEach((element: any) => {
      let entryNum = Number(element.entryNumber);
      const entryDetail = [];
      entryDetail.push(entryNum, element.product?.code);
      errorDetailArr.push(entryDetail);
    });
    return errorDetailArr;
  }

  navigationToCheckoutScreen(navigationPath) {
    this.router.navigate([navigationPath]);
  }

  showDisclaimerMessage() {
    const componentdata = {};

    const disclaimerBannerDialog = this.launchDialogService.openDialog(
      DS_DIALOG.COMMON_DISCLAIMER_MESSAGE,
      undefined,
      undefined,
      componentdata
    );
    if (disclaimerBannerDialog) {
      disclaimerBannerDialog.pipe(take(1)).subscribe((value) => {});
      this.launchDialogService.dialogClose.subscribe((value) => {
        if (value) {
          this.router.navigate([`/${this.productLine}/checkout`]);
        }
      });
    }
  }
}
