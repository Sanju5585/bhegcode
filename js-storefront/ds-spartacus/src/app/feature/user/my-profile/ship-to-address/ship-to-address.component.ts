import { Component, Input, OnInit,SecurityContext  } from '@angular/core';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { MyProfileService } from '../service/my-profile.service';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: false,
  selector: 'ds-ship-to-address',
  templateUrl: './ship-to-address.component.html',
  styleUrls: ['./ship-to-address.component.scss'],
})
export class ShipToAddressComponent implements OnInit {
  @Input()
  profiledata;
  decimal: string = '';
  shipping: string = '';
  shipData: any;
  formatData: any;
  decimalValue: string;
  shiptoValue: any;
  activeSalesArea: any;
  loadingFlag: boolean = true;
  showLoading: boolean = false;
  constructor(
    private profile: MyProfileService,
    private custAccService: CustomerAccountService,
    private translate: TranslationService,
    private globalMessageService: GlobalMessageService,
    public sanitizer: DomSanitizer
  ) {
    this.custAccService.getCurrentCustomerAccount().subscribe((res) => {
      if (res) {
        this.activeSalesArea = res?.selectedSalesArea?.salesAreaId;

        this.profile.getShipToData(this.activeSalesArea).subscribe(
          (success) => {
            this.shipData = success;
            if (this.getSelectedShipTo()) {
              let selected = this.getSelectedShipTo();
              this.shipping = `${selected?.titleCode || ''} ${
                selected?.firstName || ''
              } ${selected?.lastName || ''} ${selected?.line1 || ''} ${
                selected?.line2 || ''
              } ${selected?.townCity} ${selected?.regionIso || ''} ${
                selected?.countryIso || ''
              } ${selected?.postcode || ''}`;
              this.shiptoValue = selected?.addressId;
            } else {
              this.shipping = `${success[0]?.titleCode || ''} ${
                success[0]?.firstName || ''
              } ${success[0]?.lastName || ''} ${success[0]?.line1 || ''} ${
                success[0]?.line2 || ''
              } ${success[0]?.townCity} ${success[0]?.regionIso || ''} ${
                success[0]?.countryIso || ''
              } ${success[0]?.postcode || ''}`;
              this.shiptoValue = success[0]?.addressId;
            }
            this.getShippingData();
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
    });
    this.profile.getCurrency().subscribe(
      (success) => {
        this.formatData = success;
        if (this.formatData?.selectedcurrencyFormat) {
          this.decimal = this.formatData?.selectedcurrencyFormat?.displayValue;
          this.decimalValue = this.formatData?.selectedcurrencyFormat?.code;
        } else {
          let selected = this.formatData?.currencyFormatList.find((obj) => {
            if (obj.isDefalutFormat === true) return obj;
          });
          this.decimal = selected.displayValue;
          this.decimalValue = selected.code;
        }

        this.getFormatData();
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

  shipItems = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  decimalItems = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  ngOnInit(): void {}
  getSelectedShipTo() {
    return this.shipData.find((obj) => {
      if (obj.selected === true) return obj;
    });
  }
  getShippingData() {
    var addresses = [];
    addresses = this.shipData.map((ship) => {
      let obj = {
        label: `${ship.titleCode || ''} ${ship.firstName || ''} ${
          ship.lastName || ''
        } ${ship.line1 || ''} ${ship.line2 || ''} ${ship.townCity} ${
          ship.regionIso || ''
        } ${ship.countryIso || ''} ${ship.postcode || ''}`,
        value: ship.addressId,
      };
      return obj;
    });
    this.shipItems = {
      itemGroups: [
        {
          items: addresses,
        },
      ],
    };
  }
  getFormatData() {
    var formats = [];
    this.formatData.currencyFormatList.forEach((format) => {
      formats.push({
        label: format.displayValue,
        value: format.code,
      });
    });

    this.decimalItems = {
      itemGroups: [
        {
          items: formats,
        },
      ],
    };
    //this.decimal = this.formatData?.selectedcurrencyFormat?.displayValue;
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
    if (field == 'shipping') {
      this.shipping = e.target.value;
      this.shiptoValue = e.detail;
    }
    if (field == 'decimal') {
      this.decimal = e.target.value;
      this.decimalValue = e.detail;
    }
  }
  onSubmit() {
    this.showLoading = true;
    this.profile
      .postCurrency({
        defaultCurrencyFormat: {
          code: this.decimalValue,
          displayValue: this.decimal,
          isDefalutFormat: true,
        },
        selecteddefaultCurrencyFormat: {
          code: this.decimalValue,
          displayValue: this.decimal,
          isDefalutFormat: true,
        },
      })
      .subscribe((success) => {});
    this.profile
      .postShipToData({
        defaultShipTo: this.shiptoValue,
      })
      .subscribe((success) => {
        this.showLoading = false;
        if (success) {
          this.globalMessageService.add(
            this.getTranslatedText('myProfile.profileUpdated'),
            GlobalMessageType.MSG_TYPE_CONFIRMATION,
            5000
          );
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
        }
      });
  }
}
