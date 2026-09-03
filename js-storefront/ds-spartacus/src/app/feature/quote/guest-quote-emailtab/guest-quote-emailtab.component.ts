import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { DomSanitizer } from '@angular/platform-browser';
import { GuestQuoteService } from '../guest-quote.service';
import { GuestQuoteEmailtabModel } from './guest-quote-emailtab.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { OCC_USER_ID_ANONYMOUS } from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { ApiService } from '../../../core/http/api.service';
import { ProductCatelogService } from '../../../core/product-catalog/services/product-catelog.service';
import { CommerceTypes } from '../../../shared/models/commerceTypes.model';
@Component({
  standalone: false,
  selector: 'app-guest-quote-emailtab',
  templateUrl: './guest-quote-emailtab.component.html',
  styleUrls: ['./guest-quote-emailtab.component.scss'],
})
export class GuestQuoteEmailtabComponent implements OnInit {
  @Input() isSubmitted;
  guestQuoteEmailtabModel: GuestQuoteEmailtabModel;
  quoteDetailsSubscription: Subscription;
  quoteDetails = {};
  newCartSubscription: Subscription;
  constructor(
    private apiService: ApiService,
    private translate: TranslationService,
    protected authService: AuthService,
    private launchDialogService: LaunchDialogService,
    private productCatService: ProductCatelogService,
    private guestQuoteservice: GuestQuoteService,
    private globalMessageService: GlobalMessageService,
    private router: Router,
    public sanitizer: DomSanitizer
  ) {
    this.getCountryList();
  }
  index = 0;
  nameCheckout: any = '';
  companyCheckout: any = '';
  phoneCheckout: any = '';
  emailCheckout: any = '';
  addressCheckout: any = '';
  address1Checkout: any = '';
  postalCheckout: any = '';
  cityCheckout: any = '';
  countrys: any = '';
  regionend: any = '';
  endZipcode: any = '';
  endTown: any = '';
  endUser: any = '';
  endaddressLine: any = '';
  endaddress1Line: any = '';
  quoteName: any = '';
  endUserCategory: any = '';
  radiobtnbuy: any;
  submitted: boolean = false;
  isFormValid: boolean;
  loadSpinner = false;
  showLoading: boolean = false;
  error = {
    endUserCategory: '',
    nameCheckout: '',
    companyCheckout: '',
    phoneCheckout: '',
    emailCheckout: '',
    addressCheckout: '',
    address1Checkout: '',
    postalCheckout: '',
    cityCheckout: '',
    countrys: '',
    regionend: '',
    endZipcode: '',
    endTown: '',
    endUser: '',
    endaddressLine: '',
    endaddress1Line: '',
    quoteName: '',
  };
  guestquotecheckoutMsg: any;
  countriesList: any;
  countryCheckout: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  stateList: any;
  regionCheckout: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  endUserendlist: any;
  endUserItems: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  ngOnInit(): void {
    this.guestQuoteEmailtabModel = new GuestQuoteEmailtabModel();
    this.quoteDetailsSubscription =
      this.guestQuoteservice.getQuoteCartDetails.subscribe((quoteDetails) => {
        this.quoteDetails = quoteDetails['code'];
      });
    this.getEnduserlist();
  }
  // function to get country list
  getCountryList() {
    this.guestQuoteservice.getCountries().subscribe(
      (data) => {
        this.countriesList = data;
        var countries = [];
        this.countriesList &&
          this.countriesList.countries.forEach((countrys) => {
            countries.push({
              label: countrys.name,
              value: countrys.isocode,
            });
          });
        this.countryCheckout = {
          itemGroups: [
            {
              items: countries,
            },
          ],
        };
      },
      (error) => {}
    );
  }
  // function to get state list
  getStateList(event, field) {
    this.onChange(event, field);
    let countryCode = event.detail;
    this.guestQuoteservice.getRegion(countryCode).subscribe(
      (data) => {
        this.stateList = data;
        var states = [];
        this.stateList.regions.forEach((region) => {
          states.push({
            label: region.name,
            value: region.isocode,
          });
        });
        this.regionCheckout = {
          itemGroups: [
            {
              items: states,
            },
          ],
        };
      },
      (error) => {}
    );
  }
  //function for enduserdetails
  getEnduserlist() {
    this.guestQuoteservice.getEnduserdetails().subscribe(
      (data) => {
        this.endUserendlist = data;
        var endusers = [];
        this.endUserendlist.endUserTypeList.forEach((endUserCategory) => {
          endusers.push({
            label: endUserCategory.name,
            value: endUserCategory.code,
          });
        });
        this.endUserItems = {
          itemGroups: [
            {
              items: endusers,
            },
          ],
        };
      },
      (error) => {}
    );
  }
  //radio btn validation
  handleChange(e, field) {
    if (field === 'radiobtnbuy') {
      this.radiobtnbuy = e.target.value;
    }
  }
  // function to get messages
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  //submit quote
  submitRequest() {
    this.submitted = true;
    let formKeys = [
      'emailCheckout',
      'countrys',
      'regionend',
      'endZipcode',
      'endTown',
      'endaddressLine',
      'endUser',
      'endUserCategory',
    ];
    formKeys.forEach((key) => {
      if (this[key] === '') {
        this.error[key] = this.getTranslatedText('quotecheckout.error.' + key);
        this.submitted = false;
      }
    });

    if (this.error.emailCheckout != '') {
      this.submitted = false;
      window.scrollTo({ top: 400, behavior: 'smooth' });
      return;
    }
    if (this.error.endZipcode != '') {
      this.submitted = false;
      window.scrollTo({ top: 800, behavior: 'smooth' });
      return;
    }

    if (this.submitted) {
      this.loadSpinner = true;
      this.showLoading = true;
      this.guestQuoteEmailtabModel['emailtype'] = '';
      this.guestQuoteservice
        ?.submitQuotequoteId(this.guestQuoteEmailtabModel, this.quoteDetails)
        .subscribe(
          (data) => {
            this.loadSpinner = false;
            this.showLoading = false;
            this.guestQuoteservice.setIsQuoteEnable(false);
            this.globalMessageService.add(
              this.getTranslatedText('quotecheckout.error.loadingMsg'),
              GlobalMessageType.MSG_TYPE_CONFIRMATION,
              5000
            );
            window.scrollTo(0, 0);
            this.newCartSubscription = this.productCatService
              .createCartWithType(
                OCC_USER_ID_ANONYMOUS,
                CommerceTypes.GUESTQUOTE
              )
              .subscribe((res) => {
                if (res) {
                  this.router.navigate(['/']);
                } else {
                }
              });
          },
          (error) => {
            this.globalMessageService.add(
              this.getTranslatedText('quotecheckout.error.errorMessage'),
              GlobalMessageType.MSG_TYPE_ERROR,
              5000
            );
            this.loadSpinner = false;
            this.showLoading = false;
          }
        );
    }
  }
  //To cancel quote
  cancelQuote() {
    const guestQuoteDialog = this.launchDialogService.openDialog(
      DS_DIALOG.GUEST_QUOTE_DIALOG,
      undefined,
      undefined,
      {}
    );
    if (guestQuoteDialog) {
      guestQuoteDialog.pipe(take(1)).subscribe((value) => {});
    }
  }
  //on change for errormsg
  onChange(e, field) {
    e.target.value = this.sanitizer.sanitize(
      SecurityContext.HTML,
      e.target.value
    );
    if (field) {
      if (field === 'emailCheckout') {
        var emailRegx = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
        this.error[field] = '';
        this[field] = e.target.value;
        this.guestQuoteEmailtabModel.emailAddress = e.target.value
          ? e.target.value.toLowerCase()
          : '';
        if (e.target.value && !e.target.value.match(emailRegx)) {
          this.error.emailCheckout = this.getTranslatedText(
            'quotecheckout.error.emailInvalid'
          );
        } else {
          this.error.emailCheckout = '';
        }
      } else if (field === 'endZipcode') {
        var phoneNumRegx = '/^[0-9]+$/';
        this.error[field] = '';
        this[field] = e.target.value;
        this.guestQuoteEmailtabModel[field] = e.target.value
          ? e.target.value
          : '';
        if (e.target.value && e.target.value.match(/^[0-9]+$/) === null) {
          this.error.endZipcode = this.getTranslatedText(
            'quotecheckout.error.zipcodeInvalid'
          );
        } else {
          this.error.endZipcode = '';
        }
      } else if (field === 'countrys') {
        this.guestQuoteEmailtabModel.endUserCountryIso = e.detail;
        this[field] = e.target.value;
        this.error.countrys = '';
      } else if (field === 'regionend') {
        this.guestQuoteEmailtabModel.endUserRegionIso = e.detail;
        this[field] = e.target.value;
        this.error.regionend = '';
      } else if (field === 'endUser') {
        this.error[field] = '';
        e.target.value = this.sanitizer.sanitize(
          SecurityContext.HTML,
          e.target.value
        );
        this[field] = e.target.value;
        this.guestQuoteEmailtabModel[field] = e.target.value
          ? e.target.value
          : '';
        this.guestQuoteEmailtabModel.userName = e.target.value
          ? e.target.value
          : '';
      } else {
        this.error[field] = '';
        e.target.value = this.sanitizer.sanitize(
          SecurityContext.HTML,
          e.target.value
        );
        this[field] = e.target.value;
        this.guestQuoteEmailtabModel[field] = e.target.value
          ? e.target.value
          : '';
      }
    }
  }
}
