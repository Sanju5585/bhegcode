import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { MyProfileService } from '../../../user/my-profile/service/my-profile.service';
import { REGULAR_PATTERN } from '../../../../core/generic-validator/regular-expressions';

@Component({
  standalone: false,
  selector: 'app-waygate-notification-email',
  templateUrl: './waygate-notification-email.component.html',
  styleUrls: [
    './waygate-notification-email.component.scss',
    './../waygate-manage-account.component.scss',
  ],
})
export class WaygateNotificationEmailComponent implements OnInit {
  loadingFlag: boolean;
  notificationEmailForm: FormGroup;
  data: any;
  orderAcknEmail: string = '';
  orderAcknName: string = '';
  orderAcknContact: string = '';
  shipNotiEmail: string = '';
  shipNotiName: string = '';
  shipNotiContact: string = '';
  invoiceEmail: string = '';
  invoiceName: string = '';
  invoiceContact: string = '';
  successMessage: any;
  errorMessage: any;
  // myProfile: any = {
  //   profileUpdated: 'Your profile has been updated.',
  //   errormsg: 'Something went wrong, please try again later.',
  // };

  constructor(
    private fb: FormBuilder,
    private profile: MyProfileService,
    private globalMessageService: GlobalMessageService,
    private translate: TranslationService
  ) {}

  ngOnInit(): void {
    this.translate.translate('rma-tracking.profileUpdated').subscribe((res) => {
      this.successMessage = res;
    });
    this.translate.translate('rma-tracking.errormsg').subscribe((res) => {
      this.errorMessage = res;
    });
    this.notificationEmailForm = this.fb.group({
      serviceReminderSwitch: [true],
      orderBlockedReminderSwitch: [false],
      orderReleasedReminderSwitch: [false],
      PromisedShipDateReminderSwitch: [false],
      // orderAcknEmail: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.maxLength(70),
      //     Validators.pattern(REGULAR_PATTERN.commonEmailRegx),
      //   ],
      // ],
      orderAcknName: [
        '',
        [
          Validators.required,
          Validators.maxLength(40),
          Validators.pattern(/^[\p{L}\p{N}wÁ-ÿa-zA-Z0-9 ,。+-:/#*&!_.%;・()@]+$/u),
        ],
      ],
      orderAcknContact: [
        '',
        [
          Validators.required,
          Validators.pattern(REGULAR_PATTERN.phoneNumberManageAccountRegex),
        ],
      ],
      orderAckContactEmails: this.fb.array(
        [],
        [this.uniqueEmailInFormArray('orderAckEmail')]
      ),
      orderInvoiceContactEmails: this.fb.array(
        [],
        [this.uniqueEmailInFormArray('orderInvoiceEmail')]
      ),
      invoiceName: [
        '',
        [
          Validators.required,
          Validators.maxLength(40),
          Validators.pattern(/^[\p{L}\p{N}wÁ-ÿa-zA-Z0-9 ,。+-:/#*&!_.%;・()@]+$/u),
        ],
      ],
      invoiceContact: [
        '',
        [
          Validators.required,
          Validators.pattern(REGULAR_PATTERN.phoneNumberManageAccountRegex),
        ],
      ],
    });

    this.getNotificationDataFromAPI();
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

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  getNotificationDataFromAPI() {
    this.loadingFlag = true;
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
        this.setFormsControlValue();
      },
      (error) => {
        this.loadingFlag = false;
        this.globalMessageService.add(
          this.getTranslatedText('rma-tracking.errormsg'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
    );
  }

  setFormsControlValue() {
    const orderackList = this.orderAcknEmail.split(/[,;|]/);
    const invoiceList = this.invoiceEmail.split(/[,;|]/);
    this.notificationEmailForm.patchValue({
      serviceReminderSwitch: true,
      orderBlockedReminderSwitch: this.data?.orderBlockEmailNotification,
      orderReleasedReminderSwitch:
        this.data?.orderBlockReleaseEmailNotification,
      PromisedShipDateReminderSwitch: this.data?.orderShipDateChanged,
      // orderAcknEmail: this.orderAcknEmail,
      orderAcknName: this.orderAcknName,
      orderAcknContact: this.orderAcknContact,
      // invoiceEmail: this.invoiceEmail,
      invoiceName: this.invoiceName,
      invoiceContact: this.invoiceContact,
    });
    orderackList.forEach((email, i) => {
      this.addOrderAckEmails(email.trim());
    });
    invoiceList.forEach((email, i) => {
      this.addOrderInvoiceEmails(email.trim());
    });
  }
  get orderAckEmailArray() {
    return this.notificationEmailForm.get('orderAckContactEmails') as FormArray;
  }

  get orderInvoiceEmailArray() {
    return this.notificationEmailForm.get(
      'orderInvoiceContactEmails'
    ) as FormArray;
  }

  discardChanges() {
    this.setFormsControlValue();
  }
  onSubmit() {
    this.loadingFlag = true;
    if (this.notificationEmailForm.valid) {
      this.data = {
        sendInvoiceEmail: this.orderInvoiceEmailArray?.controls
          .map((c) => c?.value?.orderInvoiceEmail.toLowerCase().trim())
          .join(';'),
        sendSalesOrderEmail: this.orderAckEmailArray?.controls
          .map((c) => c?.value?.orderAckEmail.toLowerCase().trim())
          .join(';'),
        invoiceContact: this.notificationEmailForm.value.invoiceName,
        invoicePhone: this.notificationEmailForm.value.invoiceContact,
        soaContact: this.notificationEmailForm.value.orderAcknName,
        soaPhone: this.notificationEmailForm.value.orderAcknContact,
        // ShippingContactName: this.shipNotiName,
        // ShippingContactNumber: this.shipNotiContact,
        // sendShippingNotificationEmail: this.shipNotiEmail.toLowerCase(),
        orderBlockEmailNotification:
          this.notificationEmailForm.value.orderBlockedReminderSwitch,
        orderBlockReleaseEmailNotification:
          this.notificationEmailForm.value.orderReleasedReminderSwitch,
        orderShipDateChanged:
          this.notificationEmailForm.value.PromisedShipDateReminderSwitch,
      };
      this.profile.postNotificationData(this.data).subscribe(
        (success: any) => {
          this.loadingFlag = false;
          if (success == 'Success') {
            this.globalMessageService.add(
              this.successMessage,
              GlobalMessageType.MSG_TYPE_CONFIRMATION,
              5000
            );
            window.scrollTo(0, 0);
          }
        },
        (error) => {
          this.globalMessageService.add(
            this.errorMessage,
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          this.loadingFlag = false;
          window.scrollTo(0, 0);
        }
      );
    } else {
      return null;
    }
  }

  get formControls() {
    return this.notificationEmailForm.controls;
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
    console.log(this.orderAckEmailArray);
    this.orderAckEmailArray.updateValueAndValidity({ onlySelf: true });
  }
  removeOrderAckEmails(index) {
    this.orderAckEmailArray.removeAt(index);
    this.orderAckEmailArray.markAsDirty();
    this.orderAckEmailArray.updateValueAndValidity({ onlySelf: true });
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
    console.log(this.orderInvoiceEmailArray);
    this.orderInvoiceEmailArray.updateValueAndValidity({ onlySelf: true });
  }
  removeOrderInvoiceEmails(index) {
    this.orderInvoiceEmailArray.removeAt(index);
    this.orderInvoiceEmailArray.markAsDirty();
    this.orderInvoiceEmailArray.updateValueAndValidity({ onlySelf: true });
  }
}
