import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { CustomerAccountService } from '../../../../../core/customer-account/customer-account.service';
import { BuyCheckoutService } from '../../../../checkout/buy-checkout/service/buy-checkout.service';
import { GuestBuyCheckoutService } from '../../../../checkout/guest-checkout/services/guest-buy-checkout.service';
import { CommerceTypes } from '../../../../../shared/models/commerceTypes.model';
import { AllProductLine } from '../../../../../shared/enums/availableProductList.enum';
import { MyProfileService } from '../../../../user/my-profile/service/my-profile.service';
import {
  DSAuthService,
  UserTypes,
} from '../../../../../core/auth/ds-auth.service';

@Component({
  standalone: false,
  selector: 'app-waygate-order-summary',
  templateUrl: './waygate-order-summary.component.html',
  styleUrls: ['./waygate-order-summary.component.scss'],
})
export class WaygateOrderSummaryComponent {
  isFormValid: boolean;
  $subscription: Subscription;
  public orderPreference: boolean = false;
  totalItems;
  totalEstimate;
  totalValue;
  totalDiscount;
  totalSilverClausePrice;
  @Output() placeOrderDetailsEvent = new EventEmitter();
  @Output() checkTermNCondition: EventEmitter<any> = new EventEmitter();
  @Input() noCartEntriesData: any;
  @Input() isQuote: boolean;
  @Input() isRMA: boolean;
  @Input() selectedSalesArea: string;
  checkoutMessages: any;
  @Output() OrderPreferenceEvent = new EventEmitter<any>();

  getCartType;
  activeCart: Subscription;
  cartData;
  profile: any;
  makePaymrnt = false;
  productLine: string;
  allproductline = AllProductLine;
  sapBlocked: boolean = false;
  chinaMOVwithoutTax = 88496;
  expectedChinaMOV = 100000;
  userTypes: any;
  constructor(
    private guestBuyCheckout: GuestBuyCheckoutService,
    private buyCheckoutService: BuyCheckoutService,
    private dsAuthService: DSAuthService,
    protected activeCartFacade: ActiveCartFacade,
    private profileService: MyProfileService,
    private router: Router,
    private el: ElementRef,
    private customerAccService: CustomerAccountService
  ) {
    this.buyCheckoutService.receivePaymentTYpe().subscribe((data) => {
      if (data === 'card') {
        this.makePaymrnt = true;
      } else {
        this.makePaymrnt = false;
      }
    });

    console.log('inside Constructor');

    this.customerAccService.getMyProfile().subscribe((currentCustomer) => {
      const getsapblocked = currentCustomer;
      this.sapBlocked = currentCustomer?.recentSalesArea?.sapBlocked;
      console.log('getsapblocked' + this.sapBlocked);
    });
  }

  agreeTerms: boolean = false;
  agreeTermschecked: boolean = false;
  error = {
    agreeTerms: '',
    agreeTermschecked: '',
  };
  ngOnInit(): void {
    this.userTypes = this.dsAuthService.getUserTypeFromStorage();
    if (this.userTypes == UserTypes.INTERNAL) {
      console.log('User type ' + this.userTypes);
    }
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.getCartSummary();
    let cartData;
    this.activeCart = this.activeCartFacade.getActive().subscribe((data) => {
      cartData = data;
      this.getCartType = cartData?.commerceType;
      this.cartData = cartData;
    });
  }

  onChange(e, field) {
    if (field === 'agreeTerms') {
      this.error.agreeTerms = '';
      this.agreeTerms = !this.agreeTerms;
      this.agreeTermschecked = !this.agreeTermschecked;
      this.checkTermNCondition.emit(this.agreeTermschecked);
    }
  }
  getMessages() {
    this.guestBuyCheckout.getMessages().subscribe(
      (data) => {
        this.checkoutMessages = data;
      },
      (error) => {}
    );
  }

  //for order preference
  handleChange(event: any): void {
    const selectedValue = event?.target?.value;
    this.orderPreference = selectedValue;
    console.log('Is Order Preference :', this.orderPreference);
    this.OrderPreferenceEvent.emit(selectedValue);
  }

  placeOrder() {
    this.guestBuyCheckout.setValidation(true);
    this.guestBuyCheckout.validateForm('valid');
    this.isFormValid = true;
    this.scrollToError();
    if (this.agreeTerms === false) {
      this.error.agreeTerms = 'required';
      this.isFormValid = false;
      this.checkTermNCondition.emit(false);
      return;
    }
    if (this.agreeTerms === true) {
      this.checkTermNCondition.emit(true);
    }

    // this.guestBuyCheckout.getGuestValidation.subscribe((status) => {
    //   if (status === '') {
    //     this.guestBuyCheckout.validateForm('valid');
    //     this.isFormValid = false;
    //   }
    // });
    // this.guestBuyCheckout.getpaymentValidation.subscribe((status) => {
    //   if (status === '') {
    //     this.guestBuyCheckout.validateForm('valid');
    //     this.isFormValid = false;
    //   }
    // });
    // this.guestBuyCheckout.getshippingValidation.subscribe((status) => {
    //   if (status === '') {
    //     this.guestBuyCheckout.validateForm('valid');
    //     this.isFormValid = false;
    //   }
    // });
    // this.guestBuyCheckout.getendUserValidation.subscribe((status) => {
    //   if (status === '') {
    //     this.guestBuyCheckout.validateForm('valid');
    //     this.isFormValid = false;
    //   }
    // });
    // this.guestBuyCheckout.getnotificationValidation.subscribe((status) => {
    //   if (status === '') {
    //     this.guestBuyCheckout.validateForm('valid');
    //     this.isFormValid = false;
    //   }
    // });
    // this.guestBuyCheckout.getcomplianceValidation.subscribe((status) => {
    //   if (status === '') {
    //     this.guestBuyCheckout.validateForm('valid');
    //     this.isFormValid = false;
    //   }
    // });
    // if (this.isFormValid) {
    //   this.placeOrderDetailsEvent.emit();
    // }
  }

  scrollToError() {
    setTimeout(() => {
      const error = document.querySelector('.bh-form-message--error');
      const parentElement = error?.parentElement;
      parentElement?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
      parentElement?.focus();
    }, 500);
    // const error = document.querySelector('.bh-form-message--error')
  }
  getCartSummary() {
    this.$subscription = this.buyCheckoutService
      .getCartData()
      .subscribe((data) => {
        if (data) {
          // console.log(data)
          this.totalEstimate = data.totalEstimate;
          this.totalItems = data.totalItems;
          this.totalValue = data.totalValue;
          this.totalDiscount = data.totalDiscount;
          this.totalSilverClausePrice = data.totalSilverClausePrice;
          this.cartData = data.cartData;
        }
      });
  }

  getTotalAmount(cartData): string {
    const discountStr =
      cartData?.totalReturnCartPriceDiscount?.formattedValue || '';
    const priceStr = cartData?.totalReturnCartPrice?.formattedValue || '';

    const extractNumber = (str: string): number => {
      const num = parseFloat(str.replace(/[^0-9.-]+/g, ''));
      return isNaN(num) ? 0 : num;
    };

    const extractCurrencyParts = (str: string): string => {
      const match = str.match(/([A-Z]+)\s*([$€£])/);
      return match ? `${match[1]} ${match[2]}` : '';
    };

    const discount = extractNumber(discountStr);
    const price = extractNumber(priceStr);
    const total = discount + price;

    const formattedTotal = total.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    const currency =
      extractCurrencyParts(discountStr) || extractCurrencyParts(priceStr);

    return `${currency}${formattedTotal}`;
  }

  getTotalPrice(total, disc) {
    return this.totalDiscount.formattedValue[4] + (total - disc).toFixed(2);
  }

  goToCart() {
    this.customerAccService.disableChangeAccount.next(false);
    if (this.cartData.commerceType === CommerceTypes.QUOTE) {
      window.location.href = `/${this.productLine}/quote/cart`;
    } else if (this.cartData.commerceType === CommerceTypes.RETURNS) {
      window.location.href = `/${this.productLine}/returns/cart`;
    } else {
      window.location.href = `/${this.productLine}/cart`;
    }
  }

  ngOnDestroy() {
    this.$subscription.unsubscribe();
    this.activeCart.unsubscribe();
  }

  getPositiveSilverClause(value) {
    if (value) {
      return Math.abs(value).toFixed(2);
    }
    return 0;
  }
}
