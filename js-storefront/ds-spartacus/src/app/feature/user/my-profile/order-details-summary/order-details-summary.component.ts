import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { MyProfileService } from '../service/my-profile.service';
import {
  REGULAR_PATTERN,
  testRegex,
} from '../../../../core/generic-validator/regular-expressions';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';

@Component({
  standalone: false,
  selector: 'ds-order-details-summary',
  templateUrl: './order-details-summary.component.html',
  styleUrls: ['./order-details-summary.component.scss'],
})
export class OrderDetailsSummaryComponent implements OnInit {
  @Input()
  profiledata;
  postData: any;
  shipAccountNo: any = '';
  carrier: string = '';
  carrierItems: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  data: any;
  error = {
    contactPhone: '',
    shipNotiEmail: '',
    shipAccountNo:'',
  };

  shippingMethod: string;
  carrierValue: string;
  contactName: any;
  contactPhone: string;
  shipNotiEmail: string;
  deliveryAccount: string;
  activeSalesArea: string;
  shiptoValue: string;
  loadingFlag: boolean = true;
  showLoading: boolean = false;
  constructor(
    private profile: MyProfileService,
    private custAccService: CustomerAccountService,
    private translate: TranslationService,
    private globalMessageService: GlobalMessageService,
    public sanitizer: DomSanitizer
  ) {}

  shippingType: boolean = true;
  carrierType: string;
  ngOnInit(): void {
    this.custAccService.getCurrentCustomerAccount().subscribe((res) => {
      if (res) {
        this.activeSalesArea = res?.selectedSalesArea?.salesAreaId;
        this.profile.getShipToData(this.activeSalesArea).subscribe(
          (success) => {
            if (success) {
              this.shiptoValue = success[0]?.addressId;
              this.loadingFlag = false;
            }
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
    });
    this.profile.getOrderData().subscribe((success) => {
      if (success) {
        this.data = success;
        this.shippingMethod = this.data.deliveryOptions;
        this.getCarrier();
        if (this.data?.deliveryOptions != '') {
          if (this.data?.deliveryOptions == 'Prepay & Add') {
            let selected = this.data?.prepayAddTypes.find((obj) => {
              if (obj.code === this.data?.deliveryCarrier) return obj;
            });
            if (selected) {
              this.carrier = selected?.name;
              this.carrierValue = selected?.code;
            }
          } else {
            let selected = this.data?.collectTypes.find((obj) => {
              if (obj.code === this.data?.deliveryCarrier) return obj;
            });
            if (selected) {
              this.carrier = selected?.name;
              this.carrierValue = selected?.code;
            }
          }
        }
        this.deliveryAccount = this.data?.deliveryAccount;
        this.shippingMethod = this.data?.deliveryOptions
          ? this.data?.deliveryOptions
          : 'COLLECT';
        this.shippingType = this.data?.isShipCompleteOrder
          ? this.data?.isShipCompleteOrder
          : false;
        this.contactName = this.data?.shippingContactName;
        this.contactPhone = this.data?.shippingContactNumber;
        this.shipNotiEmail = this.data?.sendShippingNotificationEmail;
      }
      (error) => {
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
  handleChange(e, field) {
    e.target.value = this.sanitizer.sanitize(
      SecurityContext.HTML,
      e.target.value
    );
    if (field == 'shippingType') {
      this.shippingType = e.target.value == 'true' ? true : false;
    } else if (field == 'shippingMethod') {
      this.shippingMethod = this.sanitizer.sanitize(
        SecurityContext.HTML,
        e.target.value
      );
      this.getCarrier();
    } else if (field == 'carrier') {
      this.carrier = this.sanitizer.sanitize(
        SecurityContext.HTML,
        e.target.value
      );
      this.carrierValue = e.detail;
    } else if (field == 'contactName') {
      this.contactName = e.target as HTMLInputElement;
      this.contactName = this.contactName.value;
      this.contactName = testRegex(
        this.sanitizer.bypassSecurityTrustHtml(this.contactName),
        REGULAR_PATTERN.alphaNumeric
      );
    } else if (field == 'contactPhone') {
      const phoneRegx = '^[0-9]*$';
      if (e.target.value && !e.target.value.match(phoneRegx)) {
        this.error.contactPhone = this.getTranslatedText(
          'myProfile.contactPhoneError'
        );
      } else {
        this.error.contactPhone = '';
        this.contactPhone = e.target.value;
      }
    } else if (field === 'shipNotiEmail') {
      var emailRegx = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
      this.error.shipNotiEmail = '';
      this.shipNotiEmail = e.target.value;
      if (e.target.value && !e.target.value.match(emailRegx)) {
        this.error.shipNotiEmail = this.getTranslatedText(
          'myProfile.emailErrorMsg'
        );
      } else {
        this.error.shipNotiEmail = '';
      }
    } else if (field == 'deliveryAccount') {
      this.error.shipAccountNo = '';
      this.deliveryAccount = e.target.value;
      const pattern = /^([\wÁ-ÿa-zA-Z0-9]+)$/;
      if (e.target.value && !e.target.value.match(pattern)) {
        this.error.shipAccountNo = this.getTranslatedText('errors.validAcNo');
        console.log(this.error.shipAccountNo)
      } else {
        this.error.shipAccountNo = '';
      }
    }
  }
  getCarrier() {
    this.carrier = '';
    var carriers = [];
    if (this.shippingMethod != 'Prepay & Add') {
      this.data?.collectTypes.forEach((carrier) => {
        carriers.push({
          label: carrier.name,
          value: carrier.code,
        });
      });

      if (this.data?.deliveryOptions != '') {
        if (this.data?.deliveryOptions == 'COLLECT') {
          let selected = this.data?.collectTypes.find((obj) => {
            if (obj.code === this.data?.deliveryCarrier) return obj;
          });
          if (selected) {
            this.carrier = selected?.name;
            this.carrierValue = selected?.code;
          }
        } else {
          this.carrier = this.data?.collectTypes[0]?.name;
          this.carrierValue = this.data?.collectTypes[0]?.code;
        }
      }
    } else {
      this.data?.prepayAddTypes.forEach((carrier) => {
        carriers.push({
          label: carrier.name,
          value: carrier.code,
        });
      });
      if (this.data?.deliveryOptions != '') {
        if (this.data?.deliveryOptions == 'Prepay & Add') {
          let selected = this.data?.prepayAddTypes.find((obj) => {
            if (obj.code === this.data?.deliveryCarrier) return obj;
          });
          if (selected) {
            this.carrier = selected?.name;
            this.carrierValue = selected?.code;
          }
        } else {
          this.carrier = this.data?.prepayAddTypes[0]?.name;
          this.carrierValue = this.data?.prepayAddTypes[0]?.code;
        }
      }
    }
    this.carrierItems = {
      itemGroups: [
        {
          items: carriers,
        },
      ],
    };
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  onSubmit() {
    if (this.error.contactPhone == '' && this.error.shipNotiEmail == '' && this.error.shipAccountNo == '') {
      this.postData = {
        defaultSalesArea: this.activeSalesArea,
        defaultShipTo: this.shiptoValue,
        defaultSoldTo: this.activeSalesArea.split('_')[0],
        deliveryAccount: this.deliveryAccount,
        deliveryCarrier: this.carrierValue,
        deliveryOptions: this.shippingMethod,
        isShipCompleteOrder: this.shippingType,
        shippingContactName: this.contactName,
        shippingContactNumber: this.contactPhone,
        sendShippingNotificationEmail: this.shipNotiEmail.toLowerCase(),
      };
      this.showLoading = true;
      this.profile.postOrderData(this.postData).subscribe((success) => {
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
}
