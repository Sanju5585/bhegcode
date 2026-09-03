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
import { BuyCheckoutService } from '../../buy-checkout/service/buy-checkout.service';
import { GuestBuyCheckoutService } from '../services/guest-buy-checkout.service';
import { ActiveCartFacade } from '@spartacus/cart/base/root';

@Component({
  standalone: false,
  selector: 'ds-checkout-order-summary',
  templateUrl: './checkout-order-summary.component.html',
  styleUrls: ['./checkout-order-summary.component.scss'],
})
export class CheckoutOrderSummaryComponent implements OnInit {
  isFormValid: boolean;
  $subscription: Subscription;
  totalItems;
  totalEstimate;
  totalValue;
  totalDiscount;
  totalSilverClausePrice;
  @Output() placeOrderDetailsEvent = new EventEmitter();
  @Output() checkTermNCondition: EventEmitter<any> = new EventEmitter();
  @Input() noCartEntriesData: any;
  checkoutMessages: any;
  getCartType;
  activeCart: Subscription;
  cartData;
  makePaymrnt = false;
  constructor(
    private guestBuyCheckout: GuestBuyCheckoutService,
    private buyCheckoutService: BuyCheckoutService,
    protected activeCartFacade: ActiveCartFacade,
    private router: Router,
    private el: ElementRef
  ) {
    this.buyCheckoutService.receivePaymentTYpe().subscribe((data) => {
      if (data === 'card') {
        this.makePaymrnt = true;
      } else {
        this.makePaymrnt = false;
      }
    });
  }

  agreeTerms: boolean = false;
  agreeTermschecked: boolean = false;
  error = {
    agreeTerms: '',
    agreeTermschecked: '',
  };
  ngOnInit(): void {
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

    this.guestBuyCheckout.getGuestValidation.subscribe((status) => {
      if (status === '') {
        this.guestBuyCheckout.validateForm('valid');
        this.isFormValid = false;
      }
    });
    this.guestBuyCheckout.getpaymentValidation.subscribe((status) => {
      if (status === '') {
        this.guestBuyCheckout.validateForm('valid');
        this.isFormValid = false;
      }
    });
    this.guestBuyCheckout.getshippingValidation.subscribe((status) => {
      if (status === '') {
        this.guestBuyCheckout.validateForm('valid');
        this.isFormValid = false;
      }
    });
    this.guestBuyCheckout.getendUserValidation.subscribe((status) => {
      if (status === '') {
        this.guestBuyCheckout.validateForm('valid');
        this.isFormValid = false;
      }
    });
    this.guestBuyCheckout.getnotificationValidation.subscribe((status) => {
      if (status === '') {
        this.guestBuyCheckout.validateForm('valid');
        this.isFormValid = false;
      }
    });
    this.guestBuyCheckout.getcomplianceValidation.subscribe((status) => {
      if (status === '') {
        this.guestBuyCheckout.validateForm('valid');
        this.isFormValid = false;
      }
    });
    if (this.isFormValid) {
      this.placeOrderDetailsEvent.emit();
    }
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
          this.totalEstimate = data.totalEstimate;
          this.totalItems = data.totalItems;
          this.totalValue = data.totalValue;
          this.totalDiscount = data.totalDiscount;
          this.totalSilverClausePrice = data.totalSilverClausePrice;
          this.cartData = data.cartData;
        }
      });
  }

  goToCart() {
    this.router.navigate([
      this.getCartType === 'RETURNS' ? '/rma/cart' : '/cart',
    ]);
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
