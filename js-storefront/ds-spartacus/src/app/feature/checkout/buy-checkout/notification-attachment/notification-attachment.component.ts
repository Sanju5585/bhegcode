import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SecurityContext,
} from '@angular/core';
import {
  TranslationService,
  GlobalMessageService,
  GlobalMessageType,
} from '@spartacus/core';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { CheckoutDetailModel } from '../buy-checkout.model';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { FileProgressLayouts } from '../../../../shared/models/fileSize.model';
import { GuestBuyCheckoutService } from '../../guest-checkout/services/guest-buy-checkout.service';
import {
  REGULAR_PATTERN,
  testRegex,
} from '../../../../core/generic-validator/regular-expressions';

@Component({
  standalone: false,
  selector: 'app-notification-attachment',
  templateUrl: './notification-attachment.component.html',
  styleUrls: ['./notification-attachment.component.scss'],
})
export class NotificationAttachmentComponent implements OnInit {
  @Output() setNotificationData: EventEmitter<any> = new EventEmitter();
  @Output() checkNotificationVal: EventEmitter<any> = new EventEmitter();
  @Input() rmaInvoiceMail;
  @Input() orderAckMail;
  @Input() invoiceName;
  @Input() invoicePhone;
  @Input() orderAckName;
  @Input() orderAckPhone;
  $subscription: Subscription;
  invoiceContactName: any = '';
  invoiceContactNo: any = '';
  invoiceMail: any = '';
  orderAckContactName: any = '';
  orderAckContactNo: any = '';
  orderAck: any = '';
  reason: any = '';
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

  bhgeReview: string = 'true';
  checkoutDetailModel: CheckoutDetailModel;
  readonly ALLOWED_EXTENSIONS = ['jpg', 'pdf'];
  showIcon: boolean = true;
  readonly layouts = FileProgressLayouts;
  files = [];
  fileName: string;
  uploadParams = {
    entryNumber: 1,
    fields: 'DEFAULT',
    returnLocation: 'DEFAULT',
  };
  deleteParams = {
    returnLocation: 'DEFAULT',
  };
  cartId;
  uploadUrl;
  deletUrl;

  checkoutMessages: any;

  constructor(
    private chkService: GuestBuyCheckoutService,
    private activeCartFacade: ActiveCartFacade,
    private translate: TranslationService,
    private globalMessageService: GlobalMessageService,
    public sanitizer: DomSanitizer
  ) {
    this.checkoutDetailModel = new CheckoutDetailModel();
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

  ngOnChanges() {
    if (
      this.rmaInvoiceMail ||
      this.orderAckMail ||
      this.invoiceName ||
      this.invoicePhone ||
      this.orderAckPhone ||
      this.orderAckName
    ) {
      this.orderAck = this.orderAckMail;
      this.invoiceMail = this.rmaInvoiceMail;
      this.invoiceContactName = this.invoiceName;
      this.orderAckContactName = this.orderAckName;
      this.invoiceContactNo = this.invoicePhone;
      this.orderAckContactNo = this.orderAckPhone;
    }
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res: any) => {
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
    if (this.orderAckContactName === '') {
      this.error.orderAckContactName = this.getTranslatedText(
        'errors.orderAckContactName'
      );
      // window.scrollTo({ top: 1200, behavior: 'smooth' });
    }
    if (this.orderAckContactNo === '') {
      this.error.orderAckContactNo = this.getTranslatedText(
        'errors.orderAckContactNo'
      );
      // window.scrollTo({ top: 1200, behavior: 'smooth' });
    }
    if (this.invoiceContactName === '') {
      this.checkoutDetailModel.invoiceContact = '';
      this.error.invoiceContactName = this.getTranslatedText(
        'errors.invoiceContactName'
      );
      // window.scrollTo({ top: 1200, behavior: 'smooth' });
    }
    if (this.invoiceContactNo === '') {
      this.checkoutDetailModel.invoicePhone = '';
      this.error.invoiceContactNo = this.getTranslatedText(
        'errors.invoiceContactNo'
      );
      // window.scrollTo({ top: 1200, behavior: 'smooth' });
    }
    if (this.invoiceMail === '') {
      this.checkoutDetailModel.invEmail = '';
      this.error.invoiceMail = this.getTranslatedText('errors.invoiceMail');
      // window.scrollTo({ top: 1200, behavior: 'smooth' });
    }
    if (this.orderAck === '') {
      this.error.orderAck = this.getTranslatedText('errors.orderAck');
      // window.scrollTo({ top: 1200, behavior: 'smooth' });
    }
    if (this.reason === '' && this.bhgeReview == 'true') {
      this.error.reasonMsg = this.getTranslatedText('errors.reasonMsg');
      // window.scrollTo({ top: 1300, behavior: 'smooth' });
    } else this.error.reasonMsg = '';

    if (this.error.invoiceContactNo != '') {
      // window.scrollTo({ top: 1200, behavior: 'smooth' });
      this.checkNotificationVal.emit(false);
      return;
    } else {
      this.checkNotificationVal.emit(true);
    }

    if (this.error.orderAckContactNo != '') {
      // window.scrollTo({ top: 1200, behavior: 'smooth' });
      this.checkNotificationVal.emit(false);
      return;
    } else {
      this.checkNotificationVal.emit(true);
    }

    if (this.error.orderAck != '') {
      // window.scrollTo({ top: 1200, behavior: 'smooth' });
      this.checkNotificationVal.emit(false);
      return;
    } else {
      this.checkNotificationVal.emit(true);
    }

    if (this.error.invoiceMail != '') {
      // window.scrollTo({ top: 1200, behavior: 'smooth' });
      this.checkNotificationVal.emit(false);
      return;
    } else {
      this.checkNotificationVal.emit(true);
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
        this.checkoutDetailModel.invEmail = this.invoiceMail
          ?.trim()
          .toLowerCase();
        this.checkoutDetailModel.orderAckMail = this.orderAck
          ?.trim()
          .toLowerCase();
        this.checkoutDetailModel.reason = this.reason?.trim();
        this.checkoutDetailModel.bhgeReview = this.bhgeReview?.trim();
        this.checkoutDetailModel.invoiceContact =
          this.invoiceContactName?.trim();
        this.checkoutDetailModel.invoicePhone = this.invoiceContactNo?.trim();
        this.checkoutDetailModel.soaContact = this.orderAckContactName?.trim();
        this.checkoutDetailModel.soaPhone = this.orderAckContactNo?.trim();
        this.setNotificationData.emit(this.checkoutDetailModel);
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
        this.checkoutDetailModel.invEmail = this.invoiceMail
          ?.trim()
          .toLowerCase();
        this.checkoutDetailModel.orderAckMail = this.orderAck
          ?.trim()
          .toLowerCase();
        this.checkoutDetailModel.reason = this.reason
          ? this.reason?.trim()
          : '';
        this.checkoutDetailModel.bhgeReview = this.bhgeReview?.trim();
        this.checkoutDetailModel.invoiceContact =
          this.invoiceContactName?.trim();
        this.checkoutDetailModel.invoicePhone = this.invoiceContactNo?.trim();
        this.checkoutDetailModel.soaContact = this.orderAckContactName?.trim();
        this.checkoutDetailModel.soaPhone = this.orderAckContactNo?.trim();
        this.setNotificationData.emit(this.checkoutDetailModel);
      }
    }
  }

  handleChange(e) {
    this.bhgeReview = e.target.value;
    if (this.bhgeReview == 'false') this.reason = '';
    // this.globalMessageService.add(
    //   "Choosing 'YES' will have Baker Hughes review your order before it is sent for processing. This may slow down your order. Pricing charges may apply, depending on your request.",
    //   GlobalMessageType.MSG_TYPE_WARNING,
    //   0
    // );
  }

  onChange(e, field) {
    if (field === 'orderAckContactName') {
      this.error.orderAckContactName = '';
      this.orderAckContactName = e.target as HTMLInputElement;
      this.orderAckContactName = this.orderAckContactName.value;
      this.orderAckContactName = testRegex(
        this.sanitizer.bypassSecurityTrustHtml(this.orderAckContactName),
        REGULAR_PATTERN.alphaNumeric
      );
    }
    if (field === 'orderAckContactNo') {
      this.error.orderAckContactNo = '';
      this.orderAckContactNo = e.target.value;
      const pattern = REGULAR_PATTERN.phoneNumberRegex;
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.orderAckContactNo = this.getTranslatedText(
          'errors.contactNoInvalid'
        );
      } else this.error.orderAckContactNo = '';
    }
    if (field === 'invoiceContactName') {
      this.error.invoiceContactName = '';
      const invoiceContactName = e.target as HTMLInputElement;
      this.invoiceContactName = invoiceContactName.value;
      this.checkoutDetailModel.invoiceContact = testRegex(
        this.sanitizer.bypassSecurityTrustHtml(this.invoiceContactName),
        REGULAR_PATTERN.alphaNumeric
      );
    }
    if (field === 'invoiceContactNo') {
      this.error.invoiceContactNo = '';
      this.checkoutDetailModel.invoicePhone = e.target.value;
      this.invoiceContactNo = e.target.value;
      const pattern = REGULAR_PATTERN.phoneNumberRegex;
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.invoiceContactNo = this.getTranslatedText(
          'errors.contactNoInvalid'
        );
      } else {
        this.error.invoiceContactNo = '';
      }
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
      this.checkoutDetailModel.invEmail = e.target.value;
      var emailRegx = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
      if (e.target.value && !e.target.value.match(emailRegx)) {
        this.error.invoiceMail = this.getTranslatedText('errors.emailInvalid');
      } else {
        this.error.invoiceMail = '';
      }
    }
    if ((field = 'reason') && this.bhgeReview) {
      e.target.value = testRegex(
        this.sanitizer.bypassSecurityTrustHtml(e.target.value),
        REGULAR_PATTERN.alphaNumeric
      );
      if (!e.target.value)
        this.error.reasonMsg = this.getTranslatedText('errors.reasonMsg');
      else this.error.reasonMsg = '';
    }
  }

  selectedFiles(event) {
    this.files = event;
  }

  deletedFiles(event) {
    if (this.files.indexOf(event) > -1) {
      this.files.splice(this.files.indexOf(event), 1);
    }
  }

  ngOnDestroy() {
    this.chkService.setValidation(false);
  }
}
