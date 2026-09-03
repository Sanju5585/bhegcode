import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslationService, WindowRef } from '@spartacus/core';
import { Subscription } from 'rxjs';
import {
  CheckoutPaymentModel,
  SnapPayPaymentInfo,
} from '../buy-checkout.model';
import { BuyCheckoutService } from '../service/buy-checkout.service';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { GuestBuyCheckoutService } from '../../guest-checkout/services/guest-buy-checkout.service';

@Component({
  standalone: false,
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss'],
})
export class PaymentDetailsComponent implements OnInit {
  @Output() setPaymentData: EventEmitter<any> = new EventEmitter();
  @Output() sendPayInfoData: EventEmitter<any> = new EventEmitter();
  @Input() paymentTerm;
  $subscription: Subscription;
  checkoutPaymentModel: CheckoutPaymentModel;
  checkoutMessages: any;
  /**not required yet */
  // readonly ALLOWED_EXTENSIONS = ['jpg', 'pdf'];
  // readonly layouts = FileProgressLayouts;
  // cartId;
  // uploadUrl;
  // deletUrl;
  // files = [];
  // fileCheckArr=[];
  // uploadParams = {
  //   entryNumber: 1,
  //   fields: 'DEFAULT',
  //   returnLocation: 'DEFAULT',
  // };
  // deleteParams = {
  //   returnLocation: 'DEFAULT',
  // };
  // id = 'poUpload';

  constructor(
    private chkService: GuestBuyCheckoutService,
    private translate: TranslationService,
    private activeCartFacade: ActiveCartFacade,
    protected winRef: WindowRef,
    private buyUserChkService: BuyCheckoutService
  ) {
    this.checkoutPaymentModel = new CheckoutPaymentModel();
  }
  PoNumber: any = '';
  endPoNumber: string;
  error = {
    PoNumber: '',
    endPoNumber: '',
    ccInfo: '',
  };
  loadingFlag: boolean = false;
  isCreditCardPayment = false;
  ccinfoChecked = false;
  ccInfo = false;
  payInfo: any = {};
  @Input() showCreditCard;
  @Input() hidePurchaseOrder;
  @Input() ccPaymentInfo;
  showPayDetailsErr = false;
  hidePurchaseOption: boolean = false;
  @Input() savedPayCards: any;
  snapPayPaymentInfo = new SnapPayPaymentInfo();
  savedCardSelected = false;

  ngOnInit(): void {
    this.buyUserChkService.sendPaymentTYpe('');
    if (this.hidePurchaseOrder === true) {
      this.hidePurchaseOption = true;
      this.onCcPaymentSelect();
    }
    this.chkService.getValidation().subscribe((payment) => {
      if (payment) {
        this.onSubmit();
      }
    });
    /**not required yet */
    // this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
    //   this.cartId = cartId;
    //   if (this.cartId) {
    //     this.uploadUrl =
    //       'users/current/dscheckout/' + this.cartId + '/uploadPOAttachment';
    //     this.deletUrl =
    //       'users/current/dscheckout/' + this.cartId + '/removePOAttach';
    //   }
    // });
  }
  selectSavedCard(card: any) {
    this.snapPayPaymentInfo = card;
    this.savedCardSelected = true;
  }
  selectNewCard() {
    this.snapPayPaymentInfo = {};
    this.savedCardSelected = false;
  }
  onCheckCCInfo(e: any, field) {
    if (field === 'ccInfo') {
      this.error.ccInfo = '';
      this.ccInfo = !this.ccInfo;
    }
  }
  onCcPaymentSelect() {
    this.isCreditCardPayment = true;
    this.error.PoNumber = '';
    this.buyUserChkService.sendPaymentTYpe('card');
  }
  onPoSelect() {
    this.isCreditCardPayment = false;
    this.buyUserChkService.sendPaymentTYpe('');
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res: any) => {
      message = res;
    });
    return message;
  }

  onSubmit() {
    if (this.PoNumber === '' && this.isCreditCardPayment === false) {
      this.error.PoNumber = this.getTranslatedText('errors.poNumber');
      this.error.ccInfo = '';
      // this.scrollToError()
    } else if (
      this.ccInfo === false &&
      this.showCreditCard === true &&
      this.isCreditCardPayment === true
    ) {
      this.error.ccInfo = this.getTranslatedText('errors.AcceptCCInfo');
    }
    if (this.PoNumber && this.isCreditCardPayment === false) {
      this.error.ccInfo = '';
      this.checkoutPaymentModel.purchaseOrderNumber = this.PoNumber.trim();
      this.checkoutPaymentModel.endCustomerOrderNumber = this.endPoNumber
        ? this.endPoNumber.trim()
        : '';
      this.checkoutPaymentModel.costCenterId = '';
      this.checkoutPaymentModel.endUserNumber = '';
      this.checkoutPaymentModel.googleCaptcha = '';
      this.checkoutPaymentModel.paymentType = 'ACCOUNT';
      this.setPaymentData.emit(this.checkoutPaymentModel);
    } else if (
      this.showCreditCard === true &&
      this.isCreditCardPayment === true &&
      this.ccInfo
    ) {
      this.checkoutPaymentModel.purchaseOrderNumber = this.PoNumber
        ? this.PoNumber.trim()
        : 'CREDIT CARD ORDER';
      this.checkoutPaymentModel.endCustomerOrderNumber = this.endPoNumber
        ? this.endPoNumber.trim()
        : '';
      this.checkoutPaymentModel.costCenterId = '';
      this.checkoutPaymentModel.endUserNumber = '';
      this.checkoutPaymentModel.googleCaptcha = '';
      this.checkoutPaymentModel.paymentType = 'card';
      this.snapPayPaymentInfo.isNewCard = true;
      if (this.savedCardSelected === true) {
        this.snapPayPaymentInfo.isNewCard = false;
      }
      this.sendPayInfoData.emit(this.snapPayPaymentInfo);
      this.setPaymentData.emit(this.checkoutPaymentModel);
    }
  }
  scrollToError() {
    window.scrollTo({ top: 350, behavior: 'smooth' });
  }
  onChange(e, field) {
    if (field === 'PoNumber') {
      this.error.PoNumber = '';
      this.PoNumber = e.target.value;
      var pattern = /^[a-zA-Z\d- ]+$/;
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.PoNumber = this.getTranslatedText('errors.PoNumberInvalid');
      } else this.error.PoNumber = '';
    }

    if (field === 'endPoNumber') {
      this.endPoNumber = e.target.value;
      var pattern = /^[a-zA-Z\d- ]+$/;
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.endPoNumber = this.getTranslatedText(
          'errors.PoNumberInvalid'
        );
      } else this.error.endPoNumber = '';
    }
  }

  ngOnDestroy() {
    this.chkService.setValidation(false);
  }

  /**not required yet */
  // selectedPoFiles(file) {
  //   this.files = file;
  // }

  // deletedFiles(event) {
  //   if (this.files.indexOf(event) > -1) {
  //     this.files.splice(this.files.indexOf(event), 1);
  //   }
  // }
}
