import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { TranslationService } from '@spartacus/core';
import { CheckoutPaymentModel } from '../../../checkout/buy-checkout/buy-checkout.model';
import { FileProgressLayouts } from '../../../../shared/models/fileSize.model';
import { GuestBuyCheckoutService } from '../../../checkout/guest-checkout/services/guest-buy-checkout.service';

@Component({
  standalone: false,
  selector: 'app-payment-detailsrma',
  templateUrl: './payment-detailsrma.component.html',
  styleUrls: ['./payment-detailsrma.component.scss'],
})
export class PaymentDetailsrmaComponent implements OnInit {
  @Output() setPaymentData: EventEmitter<any> = new EventEmitter();
  PaymentModel: CheckoutPaymentModel;
  readonly ALLOWED_EXTENSIONS = ['jpg', 'pdf'];
  readonly layouts = FileProgressLayouts;
  @Input() paymentTerm;
  @Input() businessEntity;
  @Input() locationList;
  @Input() paymentType;
  @Input() returnList;
  @Input() cartTotal;
  constructor(
    private chkService: GuestBuyCheckoutService,
    private activeCartFacade: ActiveCartFacade,
    private translate: TranslationService
  ) {
    this.PaymentModel = new CheckoutPaymentModel();
  }
  PoNumber: any = [];
  endPoNumber: any = [];
  error = {
    PoNumber: [''],
    endPoNumber: [''],
    attachment: '',
  };
  cartId;
  files = [];
  uploadParams = {
    entryNumber: 1,
    fields: 'DEFAULT',
    returnLocation: 'DEFAULT',
  };
  deleteParams = {
    returnLocation: 'DEFAULT',
  };
  uploadUrl;
  deletUrl;
  id = 'poUpload';
  dynamicId;
  fileFlag: boolean = false;
  poNoCheck: boolean = false;
  ngOnInit(): void {
    this.getCartId();
    this.chkService.getValidation().subscribe((payment) => {
      if (payment) {
        this.onSubmit();
      }
    });
    this.setPoNendPo();
  }

  setPoNendPo() {
    for (let i = 0; i < this.locationList?.length; i++) {
      this.PoNumber[i] = '';
      this.endPoNumber[i] = '';
    }
  }

  getFile(value) {
    this.files = value;
    this.error.attachment = '';
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  getCartId() {
    this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
      this.cartId = cartId;
      if (this.cartId) {
        this.uploadUrl =
          'users/current/dscheckout/' + this.cartId + '/uploadPOAttachment';
        this.deletUrl =
          'users/current/dscheckout/' + this.cartId + '/removePOAttach';
      }
    });
  }

  onSubmit() {
    this.fileFlag = true;
    let locParam = [];
    this.PoNumber.forEach((element, index) => {
      if (element === '' && this.cartTotal > 0) {
        this.poNoCheck = false;
        this.error.PoNumber[index] = this.getTranslatedText('errors.poNumber');
      } else {
        locParam.push({
          returnCustPoNum: this.endPoNumber[index].trim(),
          returnLocation: this.returnList[index]?.returnLocationId,
          returnPoNum: element.trim(),
        });
        this.poNoCheck = true;
      }
    });

    if (this.cartTotal > 0) {
      if (this.poNoCheck && this.files.length > 0) {
        this.PaymentModel.costCenterId = '';
        this.PaymentModel.endUserNumber = '';
        this.PaymentModel.googleCaptcha = '';
        this.PaymentModel.paymentType = this.paymentType.trim();
        let param = {
          listOfReturnPO: locParam,
        };
        this.setPaymentData.emit({
          checkoutpayment: this.PaymentModel,
          rmaPayment: param,
        });
      }
    } else {
      this.PaymentModel.costCenterId = '';
      this.PaymentModel.endUserNumber = '';
      this.PaymentModel.googleCaptcha = '';
      this.PaymentModel.paymentType = this.paymentType.trim();
      let param = {
        listOfReturnPO: locParam,
      };
      this.setPaymentData.emit({
        checkoutpayment: this.PaymentModel,
        rmaPayment: param,
      });
    }
  }

  onChange(e, field, index) {
    if (field === 'PoNumber') {
      this.error.PoNumber[index] = '';
      this.PoNumber[index] = e.target.value;
      var pattern = /^[\wÁ-ÿa-zA-Z\d-+-/%,;(). ]+$/;
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.PoNumber[index] = this.getTranslatedText(
          'errors.PoNumberInvalid'
        );
      } else this.error.PoNumber[index] = '';
    }
    if (field === 'endPoNumber') {
      this.endPoNumber[index] = e.target.value;
      var pattern = /^[\wÁ-ÿa-zA-Z\d-+-/%,;(). ]+$/;
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.endPoNumber[index] = this.getTranslatedText(
          'errors.PoNumberInvalid'
        );
      } else this.error.endPoNumber[index] = '';
    }
  }

  ngOnDestroy() {
    this.chkService.setValidation(false);
  }
}
