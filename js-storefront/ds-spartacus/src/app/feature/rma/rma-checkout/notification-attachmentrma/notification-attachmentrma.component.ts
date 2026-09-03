import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SecurityContext,
} from '@angular/core';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { TranslationService } from '@spartacus/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';
import { FileProgressLayouts } from '../../../../shared/models/fileSize.model';
import { CheckoutDetailModel } from '../../../checkout/guest-checkout/guest-buy.model';
import { GuestBuyCheckoutService } from '../../../checkout/guest-checkout/services/guest-buy-checkout.service';

@Component({
  standalone: false,
  selector: 'app-notification-attachmentrma',
  templateUrl: './notification-attachmentrma.component.html',
  styleUrls: ['./notification-attachmentrma.component.scss'],
})
export class NotificationAttachmentrmaComponent implements OnInit {
  @Output() setNotificationData: EventEmitter<any> = new EventEmitter();
  @Output() checkRMANotificationVal: EventEmitter<any> = new EventEmitter();
  @Input() rmaInvoiceMail;
  @Input() orderAckMail;
  @Input() invoiceConatactName;
  @Input() invoiceContactNum;
  @Input() orderAckContName;
  @Input() orderAckContPhone;
  notificationDetailModel: CheckoutDetailModel | any;
  readonly ALLOWED_EXTENSIONS = ['jpg', 'pdf'];
  readonly layouts = FileProgressLayouts;
  invoiceContactName: any = '';
  invoiceContactNo: any = '';
  invoiceMail: any = '';
  orderAckContactName: any = '';
  orderAckContactNo: any = '';
  orderAck: any = '';
  reason: any = null;
  bhgeReview: string = 'true';
  error = {
    invoiceMail: '',
    orderAck: '',
    reason: '',
    reasonMsg: '',
    orderAckContactName: '',
    orderAckContactNo: '',
    invoiceContactName: '',
    invoiceContactNo: '',
  };
  files = [];
  uploadParams = {
    entryNumber: 1,
    fields: 'DEFAULT',
  };
  deleteParams = {
    returnLocation: 'DEFAULT',
  };
  cartId;
  uploadUrl;
  deletUrl;
  id = 'orderUpload';

  constructor(
    private chkService: GuestBuyCheckoutService,
    private activeCartFacade: ActiveCartFacade,
    private translate: TranslationService,
    public sanitizer: DomSanitizer
  ) {
    this.notificationDetailModel = new CheckoutDetailModel();
  }

  ngOnInit(): void {
    this.getCartId();
    this.chkService.getValidation().subscribe((notification) => {
      if (notification) {
        this.onSubmit();
      }
    });
    this.bhgeReview = 'false';
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
          'users/current/dscheckout/' +
          this.cartId +
          '/false/uploadOrderAttachment';
        this.deletUrl =
          'users/current/dscheckout/' +
          this.cartId +
          '/false/removeOrderAttach';
      }
    });
  }

  onSubmit() {
    if (!this.orderAckContactName) {
      this.error.orderAckContactName = this.getTranslatedText(
        'errors.orderAckContactName'
      );
      window.scrollTo({ top: 1200, behavior: 'smooth' });
    }
    if (!this.orderAckContactNo) {
      this.error.orderAckContactNo = this.getTranslatedText(
        'errors.orderAckContactNo'
      );
      window.scrollTo({ top: 1200, behavior: 'smooth' });
    }
    if (!this.invoiceContactName) {
      this.error.invoiceContactName = this.getTranslatedText(
        'errors.invoiceContactName'
      );
      window.scrollTo({ top: 1200, behavior: 'smooth' });
    }
    if (!this.invoiceContactNo) {
      this.error.invoiceContactNo = this.getTranslatedText(
        'errors.invoiceContactNo'
      );
      window.scrollTo({ top: 1200, behavior: 'smooth' });
    }
    if (!this.invoiceMail) {
      this.error.invoiceMail = this.getTranslatedText('errors.invoiceMail');
      window.scrollTo({ top: 1200, behavior: 'smooth' });
    }
    if (!this.orderAck) {
      this.error.orderAck = this.getTranslatedText('errors.orderAck');
      window.scrollTo({ top: 1200, behavior: 'smooth' });
    }
    if (!this.reason && this.bhgeReview == 'true') {
      this.error.reasonMsg = this.getTranslatedText('errors.reasonMsg');
      window.scrollTo({ top: 1300, behavior: 'smooth' });
    }

    if (this.error.invoiceContactNo != '') {
      window.scrollTo({ top: 1800, behavior: 'smooth' });
      this.checkRMANotificationVal.emit(false);
      return;
    } else {
      this.checkRMANotificationVal.emit(true);
    }

    if (this.error.orderAckContactNo != '') {
      window.scrollTo({ top: 1800, behavior: 'smooth' });
      this.checkRMANotificationVal.emit(false);
      return;
    } else {
      this.checkRMANotificationVal.emit(true);
    }

    if (this.error.orderAck != '') {
      window.scrollTo({ top: 1800, behavior: 'smooth' });
      this.checkRMANotificationVal.emit(false);
      return;
    } else {
      this.checkRMANotificationVal.emit(true);
    }

    if (this.error.invoiceMail != '') {
      window.scrollTo({ top: 1800, behavior: 'smooth' });
      this.checkRMANotificationVal.emit(false);
      return;
    } else {
      this.checkRMANotificationVal.emit(true);
    }

    if (this.bhgeReview == 'true') {
      if (
        this.orderAck &&
        this.invoiceMail &&
        this.reason &&
        this.invoiceContactName &&
        this.invoiceContactNo &&
        this.orderAckContactName &&
        this.orderAckContactNo
      ) {
        this.notificationDetailModel.invEmail = this.invoiceMail
          ?.trim()
          ?.toLowerCase();
        this.notificationDetailModel.orderAckMail = this.orderAck
          ?.trim()
          ?.toLowerCase();
        let reasonValue = this.reason;
        const remarkPattern = /^[\wÁ-ÿa-zA-Z0-9.+-/%,;() ]+$/;
        if (reasonValue && !reasonValue.match(remarkPattern)) {
          this.reason = '';
        }
        this.notificationDetailModel.reason = reasonValue;
        this.notificationDetailModel.bhgeReview = this.bhgeReview?.trim();
        this.notificationDetailModel.invoiceContactName =
          this.invoiceContactName?.trim();
        this.notificationDetailModel.invoiceContact1Num =
          this.invoiceContactNo?.trim();
        this.notificationDetailModel.orderConfirmationName =
          this.orderAckContactName?.trim();
        this.notificationDetailModel.orderConfirmationNum =
          this.orderAckContactNo?.trim();
        this.setNotificationData.emit(this.notificationDetailModel);
      }
    } else {
      if (
        this.orderAck &&
        this.invoiceMail &&
        this.invoiceContactName &&
        this.invoiceContactNo &&
        this.orderAckContactName &&
        this.orderAckContactNo
      ) {
        this.notificationDetailModel.invEmail = this.invoiceMail
          ?.trim()
          ?.toLowerCase();
        this.notificationDetailModel.orderAckMail = this.orderAck
          ?.trim()
          ?.toLowerCase();
        let reasonValue = this.reason;
        const remarkPattern = /^[\wÁ-ÿa-zA-Z0-9.+-/%,;() ]+$/;
        if (reasonValue && !reasonValue.match(remarkPattern)) {
          this.reason = '';
        }
        this.notificationDetailModel.reason = reasonValue;
        this.notificationDetailModel.bhgeReview = this.bhgeReview?.trim();
        this.notificationDetailModel.invoiceContactName =
          this.invoiceContactName?.trim();
        this.notificationDetailModel.invoiceContact1Num =
          this.invoiceContactNo?.trim();
        this.notificationDetailModel.orderConfirmationName =
          this.orderAckContactName?.trim();
        this.notificationDetailModel.orderConfirmationNum =
          this.orderAckContactNo?.trim();
        this.setNotificationData.emit(this.notificationDetailModel);
      }
    }
  }

  onChange(e, field) {
    if (field === 'orderAckContactName') {
      this.error.orderAckContactName = '';
      this.orderAckContactName = e.target.value;
      const ackpattern = /^[\wÁ-ÿa-zA-Z0-9.+-/%,;() ]+$/;
      if (e.target.value && !e.target.value.match(ackpattern)) {
        this.error.orderAckContactName = this.getTranslatedText(
          'errors.ContactNameInvalid'
        );
      } else this.error.orderAckContactName = '';
    }
    if (field === 'orderAckContactNo') {
      this.error.orderAckContactNo = '';
      this.orderAckContactNo = e.target.value;
      const pattern = /^([0-9]+)$/;
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.orderAckContactNo = this.getTranslatedText(
          'errors.contactNoInvalid'
        );
      } else this.error.orderAckContactNo = '';
    }
    if (field === 'invoiceContactName') {
      this.error.invoiceContactName = '';
      this.invoiceContactName = e.target.value;
      const invpattern = /^[\wÁ-ÿa-zA-Z0-9.+-/%,;() ]+$/;
      if (e.target.value && !e.target.value.match(invpattern)) {
        this.error.invoiceContactName = this.getTranslatedText(
          'errors.ContactNameInvalid'
        );
      } else this.error.invoiceContactName = '';
    }
    if (field === 'invoiceContactNo') {
      this.error.invoiceContactNo = '';
      this.invoiceContactNo = e.target.value;
      const pattern = /^([0-9]+)$/;
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.invoiceContactNo = this.getTranslatedText(
          'errors.contactNoInvalid'
        );
      } else this.error.invoiceContactNo = '';
    }
    if (field === 'orderAck') {
      this.error.orderAck = '';
      this.orderAck = e.target.value;
      var emailRegx = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
      if (e.target.value && !e.target.value.match(emailRegx)) {
        this.error.orderAck = this.getTranslatedText('errors.emailInvalid');
      } else {
        this.error.orderAck = '';
      }
    }
    if (field === 'invoiceMail') {
      this.error.invoiceMail = '';
      this.invoiceMail = e.target.value;
      var emailRegx = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
      if (e.target.value && !e.target.value.match(emailRegx)) {
        this.error.invoiceMail = this.getTranslatedText('errors.emailInvalid');
      } else {
        this.error.invoiceMail = '';
      }
    }
  }

  handleChange(e) {
    this.bhgeReview = e.target.value;
    if (this.bhgeReview == 'false') this.reason = '';
  }

  selectedRmaFiles(event) {
    this.files = event;
  }
  deletedFiles(event) {
    if (this.files.indexOf(event) > -1) {
      this.files.splice(this.files.indexOf(event), 1);
    }
  }

  ngOnChanges() {
    if (this.rmaInvoiceMail || this.orderAckMail) {
      this.orderAck = this.orderAckMail;
      this.invoiceMail = this.rmaInvoiceMail;
      this.invoiceContactName = this.invoiceConatactName;
      this.invoiceContactNo = this.invoiceContactNum;
      this.orderAckContactName = this.orderAckContName;
      this.orderAckContactNo = this.orderAckContPhone;
    }
  }

  ngOnDestroy() {
    this.chkService.setValidation(false);
  }
}
