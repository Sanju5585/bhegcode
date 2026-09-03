import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SecurityContext,
  SimpleChange,
} from '@angular/core';
import {
  TranslationService,
  GlobalMessageService,
  GlobalMessageType,
} from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { take } from 'rxjs/operators';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../../core/generic-validator/regular-expressions';
import { FileProgressLayouts } from '../../../../../shared/models/fileSize.model';
import { CheckoutDetailModel } from '../../../../checkout/buy-checkout/buy-checkout.model';
import { GuestBuyCheckoutService } from '../../../../checkout/guest-checkout/services/guest-buy-checkout.service';
import { SharedCartService } from '../../../../cart/cart-shared/shared-cart.service';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-waygate-notifications-attachments',
  templateUrl: './waygate-notifications-attachments.component.html',
  styleUrls: ['./waygate-notifications-attachments.component.scss'],
})
export class WaygateNotificationsAttachmentsComponent {
  @Output() setNotificationData: EventEmitter<any> = new EventEmitter();
  @Output() checkNotificationVal: EventEmitter<any> = new EventEmitter();
  @Input() rmaInvoiceMail;
  @Input() orderAckMail;
  @Input() invoiceName;
  @Input() invoicePhone;
  @Input() orderAckName;
  @Input() orderAckPhone;
  @Input() isQuote;
  @Input() isChinaOrder: boolean;
  @Input() endUserAddress;
  @Input() soldAddress;
  @Input() cart$: Observable<any>;
  forChinaApac: boolean = false;
  invoiceCheck: boolean;
  $subscription: Subscription;
  invoiceContactName: any = '';
  invoiceContactNo: any = '';
  invoiceMail: any = '';
  orderAckContactName: any = '';
  orderAckContactNo: any = '';
  orderAck: any = '';
  reason: any = '';
  shippingCheck: boolean;
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

  bhgeReview: string = '';
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
  isRmacart: string;
  multipleEmailForm: FormGroup;
  isQuoteOrderConvertFlow: any;
  chinaReasonText: any;
  constructor(
    private chkService: GuestBuyCheckoutService,
    private activeCartFacade: ActiveCartFacade,
    private translate: TranslationService,
    private globalMessageService: GlobalMessageService,
    private sharedCartService: SharedCartService,
    public sanitizer: DomSanitizer,
    protected router: Router,
    private fb: FormBuilder
  ) {
    this.chinaReasonText = this.getTranslatedText('waygate.chinaCSRReason')
    this.checkoutDetailModel = new CheckoutDetailModel();

    this.multipleEmailForm = this.fb.group({
      orderAckContactEmails: this.fb.array(
        [],
        [this.uniqueEmailInFormArray('orderAckEmail')]
      ),
      orderInvoiceContactEmails: this.fb.array(
        [],
        [this.uniqueEmailInFormArray('orderInvoiceEmail')]
      ),
    });
    this.isQuoteOrderConvertFlow = JSON.parse(
      sessionStorage.getItem('isQuoteToOrder')
    );
  }
  uniqueEmailInFormArray(fieldName: string): ValidatorFn {
    return (control: AbstractControl) => {
      if (!(control instanceof FormArray)) return null;

      const formArray = control as FormArray;

      // Build normalized list of values
      const normalized = formArray.controls.map((g: AbstractControl) => {
        const fg = g as FormGroup;
        const raw = fg.get(fieldName)?.value ?? '';
        return raw.trim().toLowerCase();
      });

      // Find duplicates
      const duplicates = new Set<string>();
      const seen = new Set<string>();
      normalized.forEach((val) => {
        if (!val) return;
        if (seen.has(val)) duplicates.add(val);
        else seen.add(val);
      });

      // Mark/unmark each control with `duplicate` error
      formArray.controls.forEach((g: AbstractControl, idx: number) => {
        const fg = g as FormGroup;
        const ctrl = fg.get(fieldName);
        if (!ctrl) return;

        const val = normalized[idx];
        const hasDup = val && duplicates.has(val);

        const errors = ctrl.errors || {};
        if (hasDup) {
          // attach/keep duplicate error
          errors['duplicate'] = true;
          ctrl.setErrors(errors);
        } else if ('duplicate' in errors) {
          // remove duplicate error, keep others if any
          const { duplicate, ...rest } = errors;
          ctrl.setErrors(Object.keys(rest).length ? rest : null);
        }
      });

      // Optionally set an array-level error too
      return duplicates.size ? { duplicateEmails: true } : null;
    };
  }
  ngOnInit(): void {
    this.getCartId();
    this.cart$.subscribe((res) => {
      if (res?.commerceType) {
        this.isRmacart = res?.commerceType;
        this.onload();
      }
    });
    this.chkService.getValidation().subscribe((notification) => {
      if (notification) {
        this.onSubmit();
      }
    });
    this.bhgeReview = 'false';
    if (this.isChinaOrder) {
      this.bhgeReview = 'true';
    }
  }
  getPlaceholder() {
    return this.forChinaApac
      ? this.getTranslatedText('labels.placeholderForChinaReview')
      : '';
  }
  ngOnChanges(changes: SimpleChange) {
    const currentUrl = this.router.url?.includes('/returns');
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
      this.invoiceContactNo = this.sharedCartService.formatPhoneNumberTo16Char(
        currentUrl,
        this.invoicePhone
      );
      this.orderAckContactNo = this.sharedCartService.formatPhoneNumberTo16Char(
        currentUrl,
        this.orderAckPhone
      );
    }

    const currentEnd =
      changes['endUserAddress'] && changes['endUserAddress'].currentValue;
    if (this.isChinaOrder)
      if (currentEnd && currentEnd.formattedAddress) {
        const isEndSoldSame =
          currentEnd.formattedAddress === this.soldAddress.formattedAddress;
        if (isEndSoldSame) {
          this.forChinaApac = false;
          setTimeout(() => {
            this.bhgeReview = 'false';
          }, 100);
        } else {
          this.forChinaApac = true;
          setTimeout(() => {
            this.bhgeReview = 'true';
          }, 100);
        }
      } else {
        this.forChinaApac = true;
        setTimeout(() => {
          this.bhgeReview = 'true';
        }, 100);
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
    if (!this.orderAckContactName) {
      this.error.orderAckContactName = this.getTranslatedText(
        'errors.orderAckContactName'
      );
      // window.scrollTo({ top: 1200, behavior: 'smooth' });
    }
    if (!this.orderAckContactNo) {
      this.error.orderAckContactNo = this.getTranslatedText(
        'errors.orderAckContactNo'
      );
      // window.scrollTo({ top: 1200, behavior: 'smooth' });
    }
    if (!this.invoiceContactName) {
      this.checkoutDetailModel.invoiceContact = '';
      this.error.invoiceContactName = this.getTranslatedText(
        'errors.invoiceContactName'
      );
      // window.scrollTo({ top: 1200, behavior: 'smooth' });
    }
    if (!this.invoiceContactNo) {
      this.checkoutDetailModel.invoicePhone = '';
      this.error.invoiceContactNo = this.getTranslatedText(
        'errors.invoiceContactNo'
      );
      // window.scrollTo({ top: 1200, behavior: 'smooth' });
    }

    if (!this.reason && this.bhgeReview == 'true' && !this.forChinaApac) {
      this.error.reasonMsg = this.getTranslatedText('errors.reasonMsg');
      return;
      // window.scrollTo({ top: 1300, behavior: 'smooth' });
    } else this.error.reasonMsg = '';

    if (!this.multipleEmailForm.valid) {
      // window.scrollTo({ top: 1200, behavior: 'smooth' });
      this.checkNotificationVal.emit(false);
      return;
    } else {
      this.checkNotificationVal.emit(true);
      this.notificationData();
    }

    if (
      this.error.orderAckContactName ||
      this.error.orderAckContactNo ||
      this.error.invoiceContactName ||
      this.error.invoiceContactNo
    ) {
      // window.scrollTo({ top: 1200, behavior: 'smooth' });
      this.checkNotificationVal.emit(false);
      return;
    } else {
      this.checkNotificationVal.emit(true);
      this.notificationData();
    }

    // if (this.error.orderAckContactNo) {
    //   // window.scrollTo({ top: 1200, behavior: 'smooth' });
    //   this.checkNotificationVal.emit(false);
    //   return;
    // } else {
    //   this.checkNotificationVal.emit(true);
    //   this.notificationData();
    // }

    if (this.bhgeReview == 'true') {
      if (
        this.multipleEmailForm.valid &&
        this.reason &&
        this.invoiceContactName &&
        this.invoiceContactNo &&
        this.orderAckContactName &&
        this.orderAckContactNo
      ) {
        this.checkoutDetailModel.invEmail =
          this.orderInvoiceEmailArray?.controls
            .map((c) => c?.value?.orderInvoiceEmail.toLowerCase().trim())
            .join(';');
        this.checkoutDetailModel.orderAckMail =
          this.orderAckEmailArray?.controls
            .map((c) => c?.value?.orderAckEmail.toLowerCase().trim())
            .join(';');
        this.checkoutDetailModel.reason = this.reason?.trim();
        this.checkoutDetailModel.bhgeReview = this.bhgeReview?.trim();
        this.checkoutDetailModel.invoiceContact =
          this.invoiceContactName?.trim();
        this.checkoutDetailModel.invoicePhone = this.invoiceContactNo?.trim();
        this.checkoutDetailModel.soaContact = this.orderAckContactName?.trim();
        this.checkoutDetailModel.soaPhone = this.orderAckContactNo?.trim();
        if (this.forChinaApac) {
          this.checkoutDetailModel.reason =
            this.chinaReasonText + ' ' +
            this.reason?.trim();
        }
        this.setNotificationData.emit(this.checkoutDetailModel);
      }
    } else {
      if (
        this.multipleEmailForm.valid &&
        this.invoiceContactName &&
        this.invoiceContactNo &&
        this.orderAckContactName &&
        this.orderAckContactNo
      ) {
        this.checkoutDetailModel.invEmail =
          this.orderInvoiceEmailArray?.controls
            .map((c) => c?.value?.orderInvoiceEmail.toLowerCase().trim())
            .join(';');
        this.checkoutDetailModel.orderAckMail =
          this.orderAckEmailArray?.controls
            .map((c) => c?.value?.orderAckEmail.toLowerCase().trim())
            .join(';');
        this.checkoutDetailModel.bhgeReview = this.bhgeReview?.trim();
        this.checkoutDetailModel.invoiceContact =
          this.invoiceContactName?.trim();
        this.checkoutDetailModel.invoicePhone = this.invoiceContactNo?.trim();
        this.checkoutDetailModel.soaContact = this.orderAckContactName?.trim();
        this.checkoutDetailModel.soaPhone = this.orderAckContactNo?.trim();
        if (this.forChinaApac) {
          this.checkoutDetailModel.reason =
            this.chinaReasonText + ' ' + this.reason.trim();
        }
        this.setNotificationData.emit(this.checkoutDetailModel);
      }
    }
  }

  handleChange(e) {
    this.bhgeReview = e.target.value;
    if (this.bhgeReview == 'false') {
      this.reason = '';
      this.error.reasonMsg = '';
      this.checkNotificationVal.emit(true);
      this.notificationData();
    } else if (this.bhgeReview == 'true' && !this.reason) {
      this.error.reasonMsg = this.getTranslatedText('errors.reasonMsg');
      this.checkNotificationVal.emit(false);
      this.notificationData();
    } else {
      this.reason = '';
      this.checkNotificationVal.emit(true);
      this.notificationData();
    }

    // this.globalMessageService.add(
    //   "Choosing 'YES' will have Baker Hughes review your order before it is sent for processing. This may slow down your order. Pricing charges may apply, depending on your request.",
    //   GlobalMessageType.MSG_TYPE_WARNING,
    //   0
    // );
  }

  onChange(e?, field?) {
    if (field === 'shippingCheck') {
      this.shippingCheck = e.target.checked;
      if (this.shippingCheck) {
        this.sharedCartService.shippingContactDetails
          .pipe(take(1))
          .subscribe((details) => {
            this.orderAckContactName = details.ShipName;
            this.orderAckContactNo = details.shipContact;
            this.orderAck = details.shipNotimail;
            this.error.orderAckContactName = '';
            this.error.orderAckContactNo = '';
            this.error.orderAck = '';
            this.orderAckEmailArray.clear();
            this.addOrderAckEmails(details?.shipNotimail);
          });
      } else {
        this.orderAckContactName = '';
        this.orderAckContactNo = '';
        this.orderAck = '';
        this.orderAckEmailArray.clear();
        this.addOrderAckEmails();
        this.orderAckEmailArray.controls[0]?.['controls']?.[
          'orderInvoiceEmail'
        ]?.markAsTouched();
      }
    }
    if (field === 'invoiceCheck') {
      if (e.target.checked == true) {
        this.invoiceContactName = this.orderAckContactName;
        this.invoiceContactNo = this.orderAckContactNo;
        this.invoiceMail = this.orderAck;
        this.orderInvoiceEmailArray.clear();
        this.orderAckEmailArray.controls.forEach((orderack) => {
          this.addOrderInvoiceEmails(orderack.value.orderAckEmail);
        });
        this.error.invoiceContactName = '';
        this.error.invoiceContactNo = '';
        this.error.invoiceMail = '';
      } else {
        this.invoiceContactName = '';
        this.invoiceContactNo = '';
        this.invoiceMail = '';
        this.orderInvoiceEmailArray.clear();
        this.addOrderInvoiceEmails();
        this.orderInvoiceEmailArray.controls[0].markAsTouched();
      }
    }
    if (field === 'orderAckContactName') {
      this.error.orderAckContactName = '';
      this.orderAckContactName = e.target.value;
      const pattern = /^[\u4e00-\u9fa5\p{L}\p{N}wÁ-ÿa-zA-Z0-9,。+-:/#*&!_.%;・()@ ]+$/u;
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.orderAckContactName = this.getTranslatedText(
          'errors.orderAckContactName'
        );
      } else this.error.orderAckContactName = '';
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
      this.invoiceContactName = e.target.value;
      const pattern = /^[\u4e00-\u9fa5\p{L}\p{N}\wÁ-ÿa-zA-Z0-9,。+-:/#*&!_.%;・()@ ]+$/u;
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.invoiceContactName = this.getTranslatedText(
          'errors.invoiceContactName'
        );
      } else this.error.invoiceContactName = '';
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
      if (
        e.target.value &&
        !e.target.value.match(REGULAR_PATTERN.commonEmailRegx)
      ) {
        this.error.orderAck = this.getTranslatedText('errors.emailInvalid');
      } else {
        this.error.orderAck = '';
      }
    }
    if (field === 'invoiceMail') {
      this.error.invoiceMail = '';
      this.invoiceMail = e.target.value;
      this.checkoutDetailModel.invEmail = e.target.value;
      if (
        e.target.value &&
        !e.target.value.match(REGULAR_PATTERN.commonEmailRegx)
      ) {
        this.error.invoiceMail = this.getTranslatedText('errors.emailInvalid');
      } else {
        this.error.invoiceMail = '';
      }
    }
    if (field === 'reason') {
      if (this.bhgeReview == 'false') {
        this.reason = '';
      } else {
        this.error.reasonMsg = '';
        this.reason = e.target.value;
        this.validateInput(this.reason);
        this.checkoutDetailModel.reason = this.reason;
      }
      if (!this.reason)
        this.error.reasonMsg = this.getTranslatedText('errors.reasonMsg');
      else this.error.reasonMsg = '';
    }

    this.checkNotificationValid();
  }
  checkNotificationValid() {
    if (
      this.orderAckContactName &&
      this.orderAckContactNo &&
      this.invoiceContactName &&
      this.invoiceContactNo &&
      this.multipleEmailForm.valid &&
      !this.error.orderAckContactName &&
      !this.error.orderAckContactNo &&
      !this.error.invoiceContactName &&
      !this.error.invoiceContactNo &&
      (!this.error.reasonMsg || this.error.reasonMsg == '')
    ) {
      this.checkNotificationVal.emit(true);
      this.notificationData();
    } else {
      this.checkNotificationVal.emit(false);
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

  onload() {
    this.error = {
      invoiceMail: '',
      orderAck: '',
      reason: '',
      reasonMsg: '',
      orderAckContactName: '',
      orderAckContactNo: '',
      invoiceContactName: '',
      invoiceContactNo: '',
    };
    const pattern = REGULAR_PATTERN.phoneNumberRegex;
    var emailRegx = REGULAR_PATTERN.commonEmailRegx;
    this.checkoutDetailModel.soaContact = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, this.orderAckContactName),
      REGULAR_PATTERN.alphaNumeric
    );

    if (this.orderAckContactNo && !this.orderAckContactNo.match(pattern)) {
      this.error.orderAckContactNo = this.getTranslatedText(
        'errors.contactNoInvalid'
      );
    } else this.error.orderAckContactNo = '';

    this.checkoutDetailModel.invoiceContact = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, this.invoiceContactName),
      REGULAR_PATTERN.alphaNumeric
    );

    if (this.orderAckContactNo && !this.orderAckContactNo.match(pattern)) {
      this.error.orderAckContactNo = this.getTranslatedText(
        'errors.contactNoInvalid'
      );
    } else this.error.orderAckContactNo = '';

    this.checkoutDetailModel.invoiceContact = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, this.invoiceContactName),
      REGULAR_PATTERN.alphaNumeric
    );

    if (this.bhgeReview == 'true' && !this.forChinaApac) {
      this.reason = testRegex(
        this.sanitizer.sanitize(SecurityContext.HTML, this.reason),
        REGULAR_PATTERN.alphaNumeric
      );
      if (!this.reason)
        this.error.reasonMsg = this.getTranslatedText('errors.reasonMsg');
      else this.error.reasonMsg = '';
    }
    const orderackList =
      this.isRmacart == 'RETURNS' ||
      this.isRmacart == 'QUOTE' ||
      this.isQuoteOrderConvertFlow
        ? this.orderAck.split(/[,;]/).slice(0, 1)
        : this.orderAck.split(/[,;]/);
    const invoiceList =
      this.isRmacart == 'RETURNS' ||
      this.isRmacart == 'QUOTE' ||
      this.isQuoteOrderConvertFlow
        ? this.invoiceMail.split(/[,;|]/).slice(0, 1)
        : this.invoiceMail.split(/[,;|]/);

    console.log(
      this.isRmacart,
      orderackList,
      invoiceList,
      this.isQuoteOrderConvertFlow
    );
    orderackList.forEach((email, i) => {
      this.addOrderAckEmails(email.trim());
    });
    invoiceList.forEach((email, i) => {
      this.addOrderInvoiceEmails(email.trim());
    });
    this.checkNotificationValid();
  }

  notificationData() {
    this.checkoutDetailModel.reason = this.reason?.trim();
    this.checkoutDetailModel.bhgeReview = this.bhgeReview?.trim();
    if (this.isRmacart == 'RETURNS' || this.isRmacart == 'QUOTE') {
      this.checkoutDetailModel.invEmail =
        this.orderInvoiceEmailArray?.controls[0]?.value?.orderInvoiceEmail
          .toLowerCase()
          .trim();
      this.checkoutDetailModel.orderAckMail =
        this.orderAckEmailArray?.controls[0]?.value?.orderAckEmail
          .toLowerCase()
          .trim();
    }
    if (this.isRmacart === 'RETURNS') {
      this.checkoutDetailModel.invoiceContactName =
        this.invoiceContactName?.trim();
      this.checkoutDetailModel.invoiceContact1Num =
        this.invoiceContactNo?.trim();
      this.checkoutDetailModel.orderConfirmationName =
        this.orderAckContactName?.trim();
      this.checkoutDetailModel.orderConfirmationNum =
        this.orderAckContactNo?.trim();
    } else {
      this.checkoutDetailModel.invoiceContact = this.invoiceContactName?.trim();
      this.checkoutDetailModel.invoicePhone = this.invoiceContactNo?.trim();
      this.checkoutDetailModel.soaContact = this.orderAckContactName?.trim();
      this.checkoutDetailModel.soaPhone = this.orderAckContactNo?.trim();
      this.checkoutDetailModel.invEmail = this.orderInvoiceEmailArray?.controls
        .map((c) => c?.value?.orderInvoiceEmail.toLowerCase().trim())
        .join(';');
      this.checkoutDetailModel.orderAckMail = this.orderAckEmailArray?.controls
        .map((c) => c?.value?.orderAckEmail.toLowerCase().trim())
        .join(';');
    }
    if (this.forChinaApac) {
      this.checkoutDetailModel.reason =
        this.chinaReasonText + ' ' + this.reason?.trim();
    }
    this.setNotificationData.emit(this.checkoutDetailModel);
  }

  validateInput(reason: string) {
    const reasonPattern = /^[\u4e00-\u9fa5\p{L}\p{N}\wÁ-ÿ,。+-:/#*&!_.%;・()@ ]+$/mu;
    const lines = reason.split('\n');
    if (lines.length > 0) {
      lines?.forEach((item) => {
        console.log('item', item);
        if (item && !item?.match(reasonPattern)) {
          this.reason = '';
        }
      });
    }
  }
  addOrderAckEmails(email?) {
    this.orderAckEmailArray.push(
      this.fb.group({
        orderAckEmail: [
          email,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(70),
            Validators.pattern(REGULAR_PATTERN.commonEmailRegx),
          ],
        ],
      })
    );
    this.orderAckEmailArray.updateValueAndValidity({ onlySelf: true });
    this.checkNotificationValid();
  }
  removeOrderAckEmails(index) {
    this.orderAckEmailArray.removeAt(index);
    this.orderAckEmailArray.updateValueAndValidity({ onlySelf: true });
    this.checkNotificationValid();
  }
  addOrderInvoiceEmails(email?) {
    this.orderInvoiceEmailArray.push(
      this.fb.group({
        orderInvoiceEmail: [
          email,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(70),
            Validators.pattern(REGULAR_PATTERN.commonEmailRegx),
          ],
        ],
      })
    );
    this.orderInvoiceEmailArray.updateValueAndValidity({ onlySelf: true });
    this.checkNotificationValid();
  }

  removeOrderInvoiceEmails(index) {
    this.orderInvoiceEmailArray.removeAt(index);
    this.orderInvoiceEmailArray.updateValueAndValidity({ onlySelf: true });
    this.checkNotificationValid();
  }
  get orderAckEmailArray() {
    return this.multipleEmailForm.get('orderAckContactEmails') as FormArray;
  }

  get orderInvoiceEmailArray() {
    return this.multipleEmailForm.get('orderInvoiceContactEmails') as FormArray;
  }
}
