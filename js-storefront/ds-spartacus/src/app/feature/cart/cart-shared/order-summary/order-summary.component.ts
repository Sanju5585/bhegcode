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
import { Observable, Subscription } from 'rxjs';
import { Item } from '../cart-item/cart-item.component';
import { SharedCartService } from '../shared-cart.service';
import { ActiveCartFacade, CartVoucherFacade } from '@spartacus/cart/base/root';
import { CartActions } from '@spartacus/cart/base/core';
import { CartType } from '../../../../shared/models/cartType.models';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';
import {
  ItemListTypeEnum,
  GtmEvents,
  StoreTypeEnum,
} from '../../../../shared/enums/gtm.enum';
import {
  EcommerceItem,
  Ecommerce,
  GTMDataLayer,
} from '../../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../../shared/services/gtm.service';
import {
  AccessRoleType,
  UserRoleService,
} from '../../../../shared/services/user-role.service';

@Component({
  standalone: false,
  selector: 'ds-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.scss'],
})
export class OrderSummaryComponent implements OnInit {
  @Input()
  cart$: Observable<any>;

  entries: Item[];

  @Input()
  cart;

  @Input()
  userType: string;

  @Input() items: any[];

  @Output()
  scrollToEntry: EventEmitter<any> = new EventEmitter();

  cartId$: Observable<string> = this.activeCartFacade.getActiveCartId();
  orderType = 'For Resale';
  cartId: string;

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
    private googleTagManagerService: GoogleTagManagerService
  ) {
    this.sharedCartService.isCheckAvailability$.subscribe((res) => {
      this.availabilityFlag = res;
    });
  }

  ngOnInit() {
    this.cartId$.subscribe((res) => {
      this.cartId = res;
    });
    this.isButtonDisabled =
      this.cart.isMinOrderQtyProductExists ||
      ((this.cart?.cartType == this.cartType.Typ3 ||
        this.cart?.cartType == this.cartType.Typ1) &&
        !this.cart.enduserAddress);
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
  proceedToCheckout() {
    if (
      this.cart.isMinOrderQtyProductExists ||
      (this.isButtonDisabled && !this.cart.enduserAddress)
    ) {
      return false;
    }
    var checkoutNativationPath = 'checkout';

    if (this.userType !== 'current') {
      this.sharedCartService.validateForm('validateEmail');
    }

    if (
      this.cart?.cartType == this.cartType.Typ1 ||
      this.cart?.cartType == this.cartType.Typ3
    ) {
      if (this.cart?.enduserAddress && !this.availabilityFlag?.availibility) {
        this.setGTMTagsForCheckoutBegin();
        this.router.navigate([checkoutNativationPath]);
      } else if (!this.cart?.enduserAddress) {
        this.globalMessageService.add(
          this.getTranslatedText('buyCart.addEndUserAddress'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
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
        this.router.navigate([checkoutNativationPath]);
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

  setGTMTagsForCheckoutBegin() {
    let items: EcommerceItem[] = [];
    if (this.items.length > 0) {
      this.items.forEach((item, i) => {
        let eachitem: EcommerceItem = {
          item_id: item?.product?.code,
          item_name: item?.product?.name,
          // coupon: "",
          discount: item?.discountPercentage ? +item?.discountPercentage : '',
          index: i,
          item_brand: this.googleTagManagerService.getItemBrand(),
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
      coupon: this.cart?.appliedCouponCodes[0]
        ? this.cart?.appliedCouponCodes[0]
        : '',
      items: items,
    };

    let checkoutBeginDataLayer: GTMDataLayer = {
      event: GtmEvents.BeginCheckout,
      store: StoreTypeEnum.Dsstore,
      ecommerce: checkoutBeginEcommerce,
    };
    this.googleTagManagerService.sendEvent(checkoutBeginDataLayer);
  }
}
