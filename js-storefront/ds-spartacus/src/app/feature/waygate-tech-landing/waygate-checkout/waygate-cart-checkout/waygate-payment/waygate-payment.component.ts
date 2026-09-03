import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslationService, WindowRef } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import {
  CheckoutPaymentModel,
  SnapPayPaymentInfo,
} from '../../../../checkout/buy-checkout/buy-checkout.model';
import { BuyCheckoutService } from '../../../../checkout/buy-checkout/service/buy-checkout.service';
import { GuestBuyCheckoutService } from '../../../../checkout/guest-checkout/services/guest-buy-checkout.service';
import { CustomerAccountService } from '../../../../../core/customer-account/customer-account.service';
import { AllProductLine } from '../../../../../shared/enums/availableProductList.enum';
import { CommerceTypes } from '../../../../../shared/models/commerceTypes.model';
import { FileProgressLayouts } from '../../../../../shared/models/fileSize.model';
import { CartType } from '../../../../../shared/models/cartType.models';

@Component({
  standalone: false,
  selector: 'app-waygate-payment',
  templateUrl: './waygate-payment.component.html',
  styleUrls: ['./waygate-payment.component.scss'],
})
export class WaygatePaymentComponent {
  @Output() setPaymentData: EventEmitter<any> = new EventEmitter();
  @Output() sendPayInfoData: EventEmitter<any> = new EventEmitter();
  @Output() isPaymentValid: EventEmitter<any> = new EventEmitter();
  @Input() paymentTerm;
  @Input() completeOrder;
  @Input() cart$: Observable<any>;
  @Input() isEndUserType: boolean;
  @Input() isQuote: boolean;
  @Input() returnList: any[] = [];
  $subscription: Subscription;
  checkoutPaymentModel: CheckoutPaymentModel;
  checkoutMessages: any;
  productLine: AllProductLine;
  isPoRequired: boolean = true;
  readonly ALLOWED_EXTENSIONS = ['jpg', 'pdf'];
  readonly layouts = FileProgressLayouts;
  files: any[] = [];
  uploadId = 'waygateUpload';
  uploadUrl: string;
  deletUrl: string;
  uploadParams = {
    entryNumber: 1,
    fields: 'DEFAULT',
    returnLocation: 'DEFAULT',
  };
  deleteParams = {
    returnLocation: 'DEFAULT',
  };
  cartId: any;
  isRmacart: any;
  isFilmCart: boolean;
  constructor(
    private chkService: GuestBuyCheckoutService,
    private translate: TranslationService,
    private activeCartFacade: ActiveCartFacade,
    protected winRef: WindowRef,
    private buyUserChkService: BuyCheckoutService,
    private custAccService: CustomerAccountService
  ) {
    this.checkoutPaymentModel = new CheckoutPaymentModel();
  }
  PoNumber: any = '';
  endPoNumber: string;
  error = {
    PoNumber: '',
    endPoNumber: '',
    ccInfo: '',
    attachment: '',
  };
  loadingFlag: boolean = false;
  maxCredLimit: boolean = false;
  ccPaymentAvailable: boolean = false;
  isCreditCardPayment: boolean = false;
  ccInfo: boolean = false;
  payInfo: any = {};
  @Input() showCreditCard;
  @Input() hidePurchaseOrder;
  @Input() ccPaymentInfo;
  showPayDetailsErr = false;
  hidePurchaseOption: boolean = false;
  @Input() savedPayCards: any;
  snapPayPaymentInfo = new SnapPayPaymentInfo();
  savedCardSelected = false;
  cartData: any;
  newCard = false;
  ngOnInit(): void {
    this.getCartId();
    this.custAccService
      .getProductLine()
      .subscribe((productLine: AllProductLine) => {
        this.productLine = productLine;
        this.ccPaymentAvailable = [
          AllProductLine.waygate,
          AllProductLine.panametrics,
        ].includes(this.productLine);
      });
    this.cart$.subscribe((res: any) => {
      this.cartData = res;
      console.log(res)
      this.isRmacart = this.cartData.commerceType;
      this.isFilmCart = this.cartData?.cartType === CartType.Typ1;
      const isRma = res?.commerceType === CommerceTypes.RETURNS;
      const hasNoPrice = res?.totalReturnCartPrice?.value === 0;
      this.isPoRequired = !(isRma && hasNoPrice);
      if (res?.totalPrice?.value > 20000) {
        this.maxCredLimit = true;
      }
    });
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
  }
  selectSavedCard(card: any) {
    this.newCard = false;
    this.snapPayPaymentInfo = card;
    this.savedCardSelected = true;
  }
  selectNewCard() {
    this.newCard = true;
    this.snapPayPaymentInfo = {};
    this.savedCardSelected = false;
  }
  onCheckCCInfo(e: any, field) {
    if (field === 'ccInfo') {
      this.error.ccInfo = '';
      this.ccInfo = !this.ccInfo;
    }
    this.checkPaymentValid();
  }
  onCcPaymentSelect() {
    if (this.completeOrder && this.ccPaymentAvailable) {
      this.isCreditCardPayment = true;
      this.newCard = true;
      this.error.PoNumber = '';
      this.ccInfo = false;
      this.buyUserChkService.sendPaymentTYpe('card');
    }
    this.checkPaymentValid();
  }
  onPoSelect() {
    this.isCreditCardPayment = false;
    this.buyUserChkService.sendPaymentTYpe('');
    this.checkPaymentValid();
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res: any) => {
      message = res;
    });
    return message;
  }

  onSubmit() {
    let hasError = false;
    if (
      this.isPoRequired &&
      this.PoNumber === '' &&
      !this.isCreditCardPayment
    ) {
      this.error.PoNumber = this.getTranslatedText('errors.poNumber');
      hasError = true;
    } else {
      this.error.PoNumber = '';
    }
    if (
      !this.isCreditCardPayment &&
      this.isRmacart === 'RETURNS' &&
      this.files.length === 0 &&
      this.isPoRequired
    ) {
      this.error.attachment = this.getTranslatedText(
        'errors.attachmentRequired'
      );
      hasError = true;
    } else {
      this.error.attachment = '';
    }
    if (
      this.ccInfo === false &&
      this.showCreditCard === true &&
      this.isCreditCardPayment === true
    ) {
      this.error.ccInfo = this.getTranslatedText('errors.AcceptCCInfo');
      hasError = true;
    } else {
      this.error.ccInfo = '';
    }
    if (hasError) {
      this.scrollToError();
      return;
    }
    if (
      (this.PoNumber || !this.isPoRequired) &&
      this.isCreditCardPayment === false
    ) {
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
      let pattern = /^[\u4e00-\u9fa5\p{L}\p{N}\wÁ-ÿa-zA-Z\d,。+ -:/#*&!_.%;・()@]+$/u ;
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.PoNumber = this.getTranslatedText('errors.PoNumberInvalid');
      } else this.error.PoNumber = '';
    }

    if (field === 'endPoNumber') {
      this.endPoNumber = e.target.value;
      let pattern = /^[\u4e00-\u9fa5\p{L}\p{N}\wÁ-ÿa-zA-Z\d,。+ -:/#*&!_.%;・()@]+$/u;
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.endPoNumber = this.getTranslatedText(
          'errors.PoNumberInvalid'
        );
      } else this.error.endPoNumber = '';
    }
    this.checkPaymentValid();
  }
  checkPaymentValid() {
    if (this.isCreditCardPayment === true) {
      if (this.ccInfo == true && this.error.ccInfo === '') {
        this.buyUserChkService.initSnapPayKey();
        this.isPaymentValid.emit(true);
      } else {
        this.isPaymentValid.emit(false);
      }
    } else {
      const isAttachmentValid =
        !(this.isRmacart === 'RETURNS') || this.files.length > 0;
      if (
        (!this.isPoRequired || this.PoNumber !== '') &&
        this.error.PoNumber === '' &&
        isAttachmentValid
      ) {
        this.isPaymentValid.emit(true);
      } else {
        this.isPaymentValid.emit(false);
      }
    }
  }

  getCartId() {
    this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
      this.cartId = cartId;
      if (this.cartId) {
        this.uploadParams.returnLocation =
          this.returnList?.[0]?.returnLocationId ?? '';
        this.uploadUrl = `users/current/dscheckout/${this.cartId}/uploadPOAttachment`;
        this.deletUrl = `users/current/dscheckout/${this.cartId}/removePOAttach`;
      }
    });
  }

  onFileSelected(files: any[]) {
    this.files = files;
    if (this.files.length > 0) {
      this.error.attachment = '';
    }
    this.checkPaymentValid();
  }

  onFileDeleted(deletedFile: any) {
    this.files = this.files.filter((file) => file.id !== deletedFile.id);
    if (
      this.files.length === 0 &&
      this.isRmacart === 'RETURNS' &&
      !this.isCreditCardPayment &&
      this.isPoRequired
    ) {
      this.error.attachment = this.getTranslatedText(
        'errors.attachmentRequired'
      );
    } else {
      this.error.attachment = '';
    }
    this.checkPaymentValid();
  }

  ngOnDestroy() {
    this.chkService.setValidation(false);
  }
}
