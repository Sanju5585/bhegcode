import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { MyProfileService } from '../../../user/my-profile/service/my-profile.service';
import { REGULAR_PATTERN } from '../../../../core/generic-validator/regular-expressions';
import { CustomerType } from '../../../../shared/models/customerType.model';

@Component({
  standalone: false,
  selector: 'app-order-settings',
  templateUrl: './order-settings.component.html',
  styleUrls: [
    './order-settings.component.scss',
    './../waygate-manage-account.component.scss',
  ],
})
export class OrderSettingsComponent implements OnInit {
  carriers = [];

  orderSettingsForm: FormGroup;
  activeSalesArea: string;
  shiptoValue: string;
  loadingFlag: boolean = true;
  data: any;
  shippingMethod: string;
  carrier: string = '';
  carrierValue: string;
  deliveryAccount: string;
  shippingType: boolean;
  contactName: string;
  contactPhone: string;
  shipNotiEmail: string;
  // myProfile: any = {
  //   profileUpdated: 'Your profile has been updated.',
  //   errormsg: 'Something went wrong, please try again later.',
  // };
  disableCollect: boolean;
  constructor(
    private fb: FormBuilder,
    private custAccService: CustomerAccountService,
    private profile: MyProfileService,
    private globalMessageService: GlobalMessageService,
    private translate: TranslationService
  ) {}

  ngOnInit(): void {
    this.orderSettingsForm = this.fb.group({
      shippingType: [null, Validators.required],
      shippingMethod: ['', Validators.required],
      deliveryAccount: ['', Validators.pattern(
        /^([\p{L}\p{N}\wÁ-ÿa-zA-Z0-9,。+-:/#*&!_.%;・()@]+)$/u
     )  
      ],
      contactName: ['', Validators.pattern(
        /^[\p{L}\p{N}\wÁ-ÿa-zA-Z0-9,。+-:/#*&!_.%;・()@ ]+$/u
     )],
      contactPhone: ['', Validators.pattern(REGULAR_PATTERN.phoneNumberManageAccountRegex)],
      shipNotiEmail: [
        '',
        [
          Validators.maxLength(70),
          Validators.pattern(
            REGULAR_PATTERN.commonEmailRegx
          ),
        ],
      ],
      carrier: [''],
    });

    this.getCurrentCustomerDetailsFromStore();
    this.getOrderDetailsFromAPI();
  }
  
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  getCurrentCustomerDetailsFromStore() {
    this.loadingFlag = true;
    this.custAccService.getCurrentCustomerAccount().subscribe((res) => {
      if (res) {
        this.activeSalesArea = res?.selectedSalesArea?.salesAreaId;
        this.profile.getShipToData(this.activeSalesArea).subscribe(
          (success) => {
            if (success) {
              this.shiptoValue = success[0]?.addressId;
            }
            this.loadingFlag = false;
          },
          (error) => {
            this.globalMessageService.add(
              this.getTranslatedText('rma-tracking.errormsg'),
              GlobalMessageType.MSG_TYPE_ERROR,
              5000
            );
            this.loadingFlag = false;
            window.scrollTo(0, 0);
          }
        );
      }
    });
  }

  getOrderDetailsFromAPI() {
    this.loadingFlag = true;
    this.profile.getOrderData().subscribe(
      (success) => {
        this.loadingFlag = false;
        if (success) {
          this.data = success;
          this.shippingMethod = this.data?.deliveryOptions
            ? this.data?.deliveryOptions
            : 'COLLECT';
          this.getCarrier();
          this.deliveryAccount = this.data?.deliveryAccount;

          this.shippingType = this.data?.isShipCompleteOrder
            ? this.data?.isShipCompleteOrder
            : false;
          this.contactName = this.data?.shippingContactName;
          this.contactPhone = this.data?.shippingContactNumber;
          this.shipNotiEmail = this.data?.sendShippingNotificationEmail;
          this.custAccService.getCustomerUserType().subscribe((userType) => {
            if (userType === CustomerType.Type1) {
              this.disableCollect = true;
              this.shippingMethod = 'Prepay & Add';
            }
          });

          this.setFormsFieldsValueOnLoad();
        }
      },
      (error) => {
        this.globalMessageService.add(
          this.getTranslatedText('rma-tracking.errormsg'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        this.loadingFlag = false;
        window.scrollTo(0, 0);
      }
    );
  }

  getCarrier() {
    this.carrier = '';
    let carriersArr = [];
    if (this.shippingMethod === 'COLLECT') {
      carriersArr = [...this.data?.collectTypes];
    } else {
      carriersArr = [...this.data?.prepayAddTypes];
    }
    carriersArr.forEach((carrier) => {
      this.carriers.push({ label: carrier.name, value: carrier.code });
    });

    this.getSelectedValForCarrierDropdown(carriersArr);
  }

  setFormsFieldsValueOnLoad() {
    this.orderSettingsForm.patchValue({ shippingType: this.shippingType });
    this.orderSettingsForm.patchValue({ shippingMethod: this.shippingMethod });

    this.orderSettingsForm.patchValue({
      deliveryAccount: this.deliveryAccount,
    });
    this.orderSettingsForm.patchValue({ contactName: this.contactName });
    this.orderSettingsForm.patchValue({ contactPhone: this.contactPhone });
    this.orderSettingsForm.patchValue({ shipNotiEmail: this.shipNotiEmail });
    this.orderSettingsForm.patchValue({ carrier: this.carrierValue });
  }

  getSelectedValForCarrierDropdown(carriersArr) {
    if (carriersArr.length > 0 && this.data?.deliveryCarrier) {
      let selected = carriersArr.find((obj) => {
        if (obj.code === this.data?.deliveryCarrier) return obj;
      });

      if (selected) {
        this.carrierValue = selected.code;
      } else {
        this.carrierValue = carriersArr.code;
      }
    }
  }

  submitForm() {
    this.loadingFlag = true;
    const postData = {
      defaultSalesArea: this.activeSalesArea,
      defaultShipTo: this.shiptoValue,
      defaultSoldTo: this.activeSalesArea?.split('_')[0],
      deliveryAccount: this.orderSettingsForm.value.deliveryAccount,
      deliveryCarrier: this.orderSettingsForm.value.carrier,
      deliveryOptions: this.orderSettingsForm.value.shippingMethod,
      isShipCompleteOrder: this.orderSettingsForm.value.shippingType,
      shippingContactName: this.orderSettingsForm.value.contactName,
      shippingContactNumber: this.orderSettingsForm.value.contactPhone,
      sendShippingNotificationEmail:
        this.orderSettingsForm.value.shipNotiEmail.toLowerCase(),
    };

    this.profile.postOrderData(postData).subscribe(
      (success) => {
        this.loadingFlag = false;
        if (success) {
          this.globalMessageService.add(
            this.getTranslatedText('rma-tracking.profileUpdated'),
            GlobalMessageType.MSG_TYPE_CONFIRMATION,
            5000
          );
        }
      },
      (error) => {
        this.globalMessageService.add(
          this.getTranslatedText('rma-tracking.errormsg'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        this.loadingFlag = false;
        window.scrollTo(0, 0);
      }
    );
  }

  get formControls() {
    return this.orderSettingsForm.controls;
  }

  discardChanges() {
    this.setFormsFieldsValueOnLoad();
  }
}
