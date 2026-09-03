import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  GlobalMessageService,
  GlobalMessageType,
  SiteContextActions,
  TranslationService,
} from '@spartacus/core';
import { Observable, forkJoin } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { CustomerAccount } from '../../../../core/customer-account/store/customer-account.model';
import { MyProfileService } from '../../../user/my-profile/service/my-profile.service';

@Component({
  standalone: false,
  selector: 'app-waygate-customer-account',
  templateUrl: './waygate-customer-account.component.html',
  styleUrls: [
    './waygate-customer-account.component.scss',
    './../waygate-manage-account.component.scss',
  ],
})
export class WaygateCustomerAccountComponent implements OnInit {
  customerAccount: FormGroup;
  accData: any;
  loadingFlag: boolean = true;
  customerAcc = [];
  bhBusinesses = [];
  customerAccountValue: any;
  bhBusinessItems: any;
  bhBusiness: any;
  bhBusinessValue: any;
  addresses: any;
  formats: any;
  activeSalesArea: any;
  shipData: any;
  shipping: string = '';
  shiptoValue: any;
  formatData: any;
  decimal: string = '';
  rmaSalesAreaId;
  currentCustomerAccount$: Observable<CustomerAccount>;
  decimalValue: string;
  // myProfile: any = {
  //   profileUpdated: 'Your profile has been updated.',
  //   errormsg: 'Something went wrong, please try again later.',
  // };
  disableDecimalFormatter;
  constructor(
    private fb: FormBuilder,
    private profile: MyProfileService,
    private custAccService: CustomerAccountService,
    private globalMessageService: GlobalMessageService,
    private customerAccService: CustomerAccountService,
    private store: Store,
    private translate: TranslationService
  ) {}

  ngOnInit(): void {
    this.customerAccount = this.fb.group({
      accountName: [null, Validators.required],
      businessName: [null, Validators.required],
      shippingAddress: [null, Validators.required],
      decimalFormater: [null, Validators.required],
    });
    this.currentCustomerAccount$ =
      this.customerAccService.getCurrentCustomerAccount();
    this.currentCustomerAccount$.subscribe((res: any) => {
      console.log(res);
      this.rmaSalesAreaId = res.selectedSalesArea?.salesAreaId.split('_')[1];
      localStorage.setItem('rmaSalesAreaId', this.rmaSalesAreaId);
      if (res?.currency) {
        this.store.dispatch(
          new SiteContextActions.SetActiveCurrency(res.currency.isocode)
        );
        if (res.currency.isocode == 'JPY') {
          this.disableDecimalFormatter = true;
        } else {
          this.disableDecimalFormatter = false;
        }
      }
    });
    this.getCustomerAndBusinessDataFromAPI();
    this.getCurrentCustomerAccountFromStoreAndAPI();
    this.getSeparatorFormataDataFromAPI();
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  getCustomerAndBusinessDataFromAPI() {
    this.loadingFlag = true;
    this.profile.getAccountData().subscribe(
      (success) => {
        if (success) {
          this.accData = success;
          this.setDropdowns();
        }
        this.loadingFlag = false;
      },
      (error) => {
        this.loadingFlag = false;
        this.globalMessageService.add(
          this.getTranslatedText('rma-tracking.errormsg'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
      }
    );
  }

  setDropdowns() {
    this.accData.b2bUnits.forEach((unit) => {
      this.customerAcc.push({
        label: unit?.name + '-' + unit?.uid,
        value: unit?.uid,
      });
    });
    this.accData.bhgeSoldTo.forEach((unit) => {
      this.bhBusinesses.push({
        label:
          unit?.baseStoreName +
          '-' +
          unit?.currency.isocode +
          ' (' +
          unit?.currency.symbol +
          ') ',
        value: unit?.soldToId,
      });
    });
    let b2bunits = this.getb2bUnitWithuid(this.accData?.selecteddefaultSoldTo);
    let bhgeSoldTo = this.getbhgeSoldTo(this.accData?.selecteddefaultSalesArea);
    this.customerAccount.patchValue({ accountName: b2bunits.uid });
    this.customerAccount.patchValue({ businessName: bhgeSoldTo.soldToId });
  }

  getb2bUnitWithuid(uid) {
    return this.accData?.b2bUnits.find((obj) => {
      if (obj.uid === uid) return obj;
    });
  }

  onChange(accountValue) {
    this.loadingFlag = true;
    this.profile.getSalesAreaForSoldTo(accountValue).subscribe(
      (success) => {
        this.loadingFlag = false;
        if (success) {
          let bhBusinessArray: any = success;
          this.bhBusinesses = [];
          bhBusinessArray?.forEach((unit) => {
            this.bhBusinesses.push({
              label:
                unit?.baseStoreName +
                '-' +
                unit?.currency.isocode +
                ' (' +
                unit?.currency.symbol +
                ') ',
              value: unit?.soldToId,
            });
          });

          this.customerAccount.patchValue({
            businessName: this.bhBusinesses[0].value,
          });
        }
      },
      (error) => {
        this.loadingFlag = false;
        this.globalMessageService.add(
          this.getTranslatedText('rma-tracking.errormsg'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
      }
    );
  }

  getbhgeSoldTo(soldto) {
    return this.accData?.bhgeSoldTo.find((obj) => {
      if (obj.soldToId === soldto) return obj;
    });
  }

  getCurrentCustomerAccountFromStoreAndAPI() {
    this.loadingFlag = true;
    this.custAccService
      .getCurrentCustomerAccount()
      .pipe(
        concatMap((res: any) => {
          this.activeSalesArea = res?.selectedSalesArea?.salesAreaId;
          return this.profile.getShipToData(this.activeSalesArea);
        })
      )
      .subscribe(
        (success) => {
          this.loadingFlag = false;
          this.shipData = success;
          if (this.getSelectedShipTo()) {
            let selected = this.getSelectedShipTo();
            this.shiptoValue = selected?.addressId;
          } else {
            this.shiptoValue = success[0]?.addressId;
          }
          this.getShippingData();
          this.customerAccount.patchValue({
            shippingAddress: this.shiptoValue,
          });
          this.loadingFlag = false;
        },
        (error) => {
          window.scrollTo(0, 0);
          this.globalMessageService.add(
            this.getTranslatedText('rma-tracking.errormsg'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          this.loadingFlag = false;
        }
      );
  }

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
    this.addresses = addresses;
  }
  getFormatData() {
    var formats = [];
    this.formatData.currencyFormatList.forEach((format) => {
      formats.push({
        label: format.displayValue,
        value: format.code,
      });
    });
    this.formats = formats;
  }

  getSeparatorFormataDataFromAPI() {
    this.profile.getCurrency().subscribe(
      (success) => {
        this.loadingFlag = false;
        this.formatData = success;
        if (this.formatData?.selectedcurrencyFormat) {
          this.decimalValue = this.formatData?.selectedcurrencyFormat?.code;
        } else {
          let selected = this.formatData?.currencyFormatList.find((obj) => {
            if (obj.isDefalutFormat === true) return obj;
          });
          this.decimalValue = selected.code;
          this.customerAccount.patchValue({
            decimalFormater: this.decimalValue,
          });
          if (this.disableDecimalFormatter) {
            this.customerAccount.controls['decimalFormater'].disable();
          }
        }
        this.getFormatData();
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

  onCustomerAccountSubmit() {
    this.loadingFlag = true;
    forkJoin([
      this.postAPIForCustomerAccountAndBusinessData(),
      this.postAPIForShipAddressData(),
      this.postAPIForCurrencyData(),
    ]).subscribe(
      (res) => {
        this.globalMessageService.add(
          this.getTranslatedText('rma-tracking.profileUpdated'),
          GlobalMessageType.MSG_TYPE_CONFIRMATION,
          5000
        );
        this.loadingFlag = false;
        window.location.reload();
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

  postAPIForCustomerAccountAndBusinessData(): Observable<any> {
    const postData = {
      defaultSalesArea: this.customerAccount.value.businessName,
      defaultSoldTo: this.customerAccount.value.accountName,
    };
    return this.profile.postAccountData(postData);
  }
  postAPIForShipAddressData(): Observable<any> {
    const postData = {
      defaultShipTo: this.customerAccount.value.shippingAddress,
    };

    return this.profile.postShipToData(postData);
  }

  postAPIForCurrencyData(): Observable<any> {
    const code = this.customerAccount.value.decimalFormater;
    const postData = {
      defaultCurrencyFormat: {
        code: code,
        displayValue: this.getSelectedCurrancyLabel(code),
        isDefalutFormat: true,
      },
      selecteddefaultCurrencyFormat: {
        code: code,
        displayValue: this.getSelectedCurrancyLabel(code),
        isDefalutFormat: true,
      },
    };

    return this.profile.postCurrency(postData);
  }

  getSelectedCurrancyLabel(code) {
    return this.formats.find((item) => item.value === code)?.label;
  }

  discardChanges() {
    let b2bunits = this.getb2bUnitWithuid(this.accData?.selecteddefaultSoldTo);
    this.customerAccount.patchValue({ accountName: b2bunits.uid });
    this.customerAccount.patchValue({ shippingAddress: this.shiptoValue });
    this.customerAccount.patchValue({ decimalFormater: this.decimalValue });
    this.onChange(b2bunits.uid);
  }
}
