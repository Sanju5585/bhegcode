import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MyProfileService } from '../service/my-profile.service';
import {
  REGULAR_PATTERN,
  testRegex,
} from '../../../../core/generic-validator/regular-expressions';

@Component({
  standalone: false,
  selector: 'ds-notifications-email',
  templateUrl: './notifications-email.component.html',
  styleUrls: ['./notifications-email.component.scss'],
})
export class NotificationsEmailComponent implements OnInit {
  disableSubmit = true;
  @Input()
  profiledata;
  data: any;
  loadingFlag: boolean = true;
  showLoading: boolean = false;
  constructor(
    private profile: MyProfileService,
    private translate: TranslationService,
    private globalMessageService: GlobalMessageService,
    public sanitizer: DomSanitizer
  ) {}
  orderAcknEmail: string = '';
  orderAcknName: string = '';
  orderAcknContact: string = '';
  shipNotiEmail: string = '';
  shipNotiName: string = '';
  shipNotiContact: string = '';
  invoiceEmail: string = '';
  invoiceName: string = '';
  invoiceContact: string = '';
  error = {
    orderAcknEmail: '',
    orderAcknName: '',
    orderAcknContact: '',
    shipNotiEmail: '',
    shipNotiName: '',
    shipNotiContact: '',
    invoiceEmail: '',
    invoiceName: '',
    invoiceContact: '',
  };
  ngOnInit(): void {
    this.profile.getNotificationData().subscribe(
      (success) => {
        this.data = success;
        this.invoiceEmail = this.data?.sendInvoiceEmail
          ? this.data?.sendInvoiceEmail
          : '';
        this.invoiceName = this.data?.invoiceContact
          ? this.data?.invoiceContact
          : '';
        this.invoiceContact = this.data?.invoicePhone
          ? this.data?.invoicePhone
          : '';
        this.orderAcknEmail = this.data?.sendSalesOrderEmail
          ? this.data?.sendSalesOrderEmail
          : '';
        this.orderAcknName = this.data?.soaContact ? this.data?.soaContact : '';
        this.orderAcknContact = this.data?.soaPhone ? this.data?.soaPhone : '';
        this.loadingFlag = false;
      },
      (error) => {
        this.globalMessageService.add(
          this.getTranslatedText('myProfile.errormsg'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        this.loadingFlag = false;
        window.scrollTo(0, 0);
      }
    );
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  onChange(e, field) {
    e.target.value = this.sanitizer.sanitize(
      SecurityContext.HTML,
      e.target.value
    );
    var emailRegx = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
    if (field === 'orderAcknEmail') {
      this.error.orderAcknEmail = '';
      this.orderAcknEmail = e.target.value;
      if (e.target.value && !e.target.value.match(emailRegx)) {
        this.error.orderAcknEmail = this.getTranslatedText(
          'myProfile.emailErrorMsg'
        );
      } else {
        this.error.orderAcknEmail = '';
      }
    } else if (field === 'invoiceEmail') {
      this.error.invoiceEmail = '';
      this.invoiceEmail = e.target.value;
      if (e.target.value && !e.target.value.match(emailRegx)) {
        this.error.invoiceEmail = this.getTranslatedText(
          'myProfile.emailErrorMsg'
        );
      } else {
        this.error.invoiceEmail = '';
      }
    } else if (field === 'orderAcknName') {
      const orderAcknName = e.target as HTMLInputElement;
      this.orderAcknName = orderAcknName.value;
      e.target.value = testRegex(
        this.sanitizer.bypassSecurityTrustHtml(this.orderAcknName),
        REGULAR_PATTERN.alphaNumeric
      );
      if (e.target.value == '') {
        this.error.orderAcknName = this.getTranslatedText(
          'myProfile.orderAcknName'
        );
      } else {
        this.error.orderAcknName = '';
        this.orderAcknName = e.target.value;
      }
    } else if (field === 'invoiceName') {
      const invoiceName = e.target as HTMLInputElement;
      this.invoiceName = invoiceName.value;
      e.target.value = testRegex(
        this.sanitizer.bypassSecurityTrustHtml(this.invoiceName),
        REGULAR_PATTERN.alphaNumeric
      );
      if (e.target.value == '') {
        this.error.invoiceName = this.getTranslatedText(
          'myProfile.invoiceName'
        );
      } else {
        this.error.invoiceName = '';
        this.invoiceName = e.target.value;
      }
    } else if (field === 'orderAcknContact') {
      var pattern = /[0-9]|\./;
      e.target.value = this.sanitizer.sanitize(
        SecurityContext.HTML,
        e.target.value
      );
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.orderAcknContact = this.getTranslatedText(
          'myProfile.contactNoInvalid'
        );
      } else {
        this.error.orderAcknContact = '';
        this.orderAcknContact = e.target.value;
      }
    } else if (field === 'invoiceContact') {
      var pattern = /[0-9]|\./;
      e.target.value = this.sanitizer.sanitize(
        SecurityContext.HTML,
        e.target.value
      );
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.invoiceContact = this.getTranslatedText(
          'myProfile.contactNoInvalid'
        );
      } else {
        this.error.invoiceContact = '';
        this.invoiceContact = e.target.value;
      }
    }
  }
  onSubmit() {
    if (!this.validateError()) {
      return;
    }
    if (this.error.invoiceEmail === '' && this.error.orderAcknEmail === '') {
      this.data = {
        sendInvoiceEmail: this.invoiceEmail.toLowerCase(),
        sendSalesOrderEmail: this.orderAcknEmail.toLowerCase(),
        sendShippingNotificationEmail: this.shipNotiEmail.toLowerCase(),
        invoiceContact: this.invoiceName,
        invoicePhone: this.invoiceContact,
        soaContact: this.orderAcknName,
        soaPhone: this.orderAcknContact,
        ShippingContactName: this.shipNotiName,
        ShippingContactNumber: this.shipNotiContact,
      };
      this.showLoading = true;
      this.profile.postNotificationData(this.data).subscribe((success) => {
        if (success) {
          this.showLoading = false;
          this.globalMessageService.add(
            this.getTranslatedText('myProfile.profileUpdated'),
            GlobalMessageType.MSG_TYPE_CONFIRMATION,
            5000
          );
        }
        (error) => {
          this.showLoading = false;
          this.globalMessageService.add(
            this.getTranslatedText('myProfile.errormsg'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          this.loadingFlag = false;
          window.scrollTo(0, 0);
        };
      });
    }
  }
  validateError() {
    let isFormValid = true;
    if (this.orderAcknEmail === '') {
      this.error.orderAcknEmail = this.getTranslatedText(
        'myProfile.orderAcknEmail'
      );
      isFormValid = false;
    }
    if (this.invoiceEmail === '') {
      this.error.invoiceEmail = this.getTranslatedText(
        'myProfile.invoiceEmail'
      );
      isFormValid = false;
    }
    if (this.orderAcknContact === '') {
      this.error.orderAcknContact = this.getTranslatedText(
        'myProfile.orderAcknPhone'
      );
      isFormValid = false;
    }
    if (this.invoiceContact === '') {
      this.error.invoiceContact = this.getTranslatedText(
        'myProfile.invoicePhone'
      );
      isFormValid = false;
    }
    if (this.orderAcknName === '') {
      this.error.orderAcknName = this.getTranslatedText(
        'myProfile.orderAcknName'
      );
      isFormValid = false;
    }
    if (this.invoiceName === '') {
      this.error.invoiceName = this.getTranslatedText('myProfile.invoiceName');
      isFormValid = false;
    }
    return isFormValid;
  }
}
