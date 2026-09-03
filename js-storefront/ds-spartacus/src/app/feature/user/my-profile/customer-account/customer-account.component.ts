import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { MyProfileService } from '../service/my-profile.service';

@Component({
  standalone: false,
  selector: 'ds-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.scss'],
})
export class CustomerAccountComponent implements OnInit {
  @Input()
  profiledata;
  bhBusiness: string;
  customerAccount: string;
  postData: any;
  @Output()
  customerAccDetails = new EventEmitter<any>();
  bhBusinessItems = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  customerAccItems = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  accData: any;
  customerAccountValue: any;
  bhBusinessValue: any;
  loadingFlag: boolean = true;
  showLoading: boolean = false;
  constructor(
    private profile: MyProfileService,
    private translate: TranslationService,
    private globalMessageService: GlobalMessageService
  ) {}
  ngOnInit(): void {
    this.profile.getAccountData().subscribe(
      (success) => {
        if (success) {
          this.accData = success;
          this.loadingFlag = false;
          this.setDropdowns();
        }
      },
      (error) => {
        this.loadingFlag = false;
        this.globalMessageService.add(
          this.getTranslatedText('myProfile.errormsg'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
      }
    );
  }
  setDropdowns() {
    let customerAcc = [];
    this.accData.b2bUnits.forEach((unit) => {
      customerAcc.push({
        label: unit?.name + '-' + unit?.uid,
        value: unit?.uid,
      });
    });
    this.customerAccItems = {
      itemGroups: [
        {
          items: customerAcc,
        },
      ],
    };
    let bhBusinesses = [];
    this.accData.bhgeSoldTo.forEach((unit) => {
      bhBusinesses.push({
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
    this.bhBusinessItems = {
      itemGroups: [
        {
          items: bhBusinesses,
        },
      ],
    };
    let bhgeSoldTo = this.getbhgeSoldTo(this.accData?.selecteddefaultSalesArea);
    this.bhBusiness =
      bhgeSoldTo?.baseStoreName +
      '-' +
      bhgeSoldTo?.currency.isocode +
      ' (' +
      bhgeSoldTo?.currency.symbol +
      ') ';
    this.bhBusinessValue = bhgeSoldTo.soldToId;

    let b2bunits = this.getb2bUnitWithuid(this.accData?.selecteddefaultSoldTo);
    this.customerAccount = b2bunits?.name + '-' + b2bunits?.uid;
    this.customerAccountValue = b2bunits.uid;
  }
  onChange(e, field) {
    if (field == 'customerAccount') {
      this.customerAccount = e.target.value;
      this.customerAccountValue = e.detail.value;
      this.profile
        .getSalesAreaForSoldTo(this.customerAccountValue)
        .subscribe((success) => {
          if (success) {
            let bhBusinessArray: any;
            bhBusinessArray = success;
            let bhBusinesses = [];
            bhBusinessArray?.forEach((unit) => {
              bhBusinesses.push({
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

            this.bhBusinessItems = {
              itemGroups: [
                {
                  items: bhBusinesses,
                },
              ],
            };
            this.bhBusiness =
              bhBusinessArray[0]?.baseStoreName +
              '-' +
              bhBusinessArray[0]?.currency.isocode +
              ' (' +
              bhBusinessArray[0]?.currency.symbol +
              ') ';
            this.bhBusinessValue = bhBusinessArray[0]?.soldToId;
          }
          (error) => {
            this.loadingFlag = false;
            this.globalMessageService.add(
              this.getTranslatedText('myProfile.errormsg'),
              GlobalMessageType.MSG_TYPE_ERROR,
              5000
            );
          };
        });
    }
    if (field == 'bhBusiness') {
      this.bhBusiness = e.target.value;
      this.bhBusinessValue = e.detail;
    }
  }
  getb2bUnitWithuid(uid) {
    return this.accData?.b2bUnits.find((obj) => {
      if (obj.uid === uid) return obj;
    });
  }

  getbhgeSoldTo(soldto) {
    return this.accData?.bhgeSoldTo.find((obj) => {
      if (obj.soldToId === soldto) return obj;
    });
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  onSubmit() {
    this.showLoading = true;
    this.postData = {
      defaultSalesArea: this.bhBusinessValue,
      defaultSoldTo: this.customerAccountValue,
    };
    this.profile.postAccountData(this.postData).subscribe((success) => {
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
