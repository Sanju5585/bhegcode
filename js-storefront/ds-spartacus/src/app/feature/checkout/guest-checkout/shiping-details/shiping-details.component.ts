import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslationService } from '@spartacus/core';
import { GuestBuyCheckoutService } from '../services/guest-buy-checkout.service';
import { environment } from '../../../../../environments/environment';

@Component({
  standalone: false,
  selector: 'ds-shiping-details',
  templateUrl: './shiping-details.component.html',
  styleUrls: ['./shiping-details.component.scss'],
})
export class ShipingDetailsComponent implements OnInit {
  @Output() shippingDetailsEvent = new EventEmitter<any>();
  @Output() shippingValEvent = new EventEmitter<any>();
  isformValid: boolean;
  loadingFlag: boolean = false;
  @Input() countriesList: any;
  userId: string = 'anonymous';
  @Input() activeCartId;
  shippingDetails = {};
  stateList: any;
  checkedSameAddress: boolean = false;
  @Input() incoTerms;
  companyName: string = '';
  addressline1: string = '';
  addressline2: string = '';
  country: string = 'United States';
  state: string = '';
  city: string = '';
  zipcode: string = '';
  deliveryPoint: string = '';
  shipContactName: string = '';
  shipContactNo: string = '';
  shipNotificationEmail: string = '';
  shippingRemarks: string = '';
  incoTermUrl = environment.incoTermsUrl;

  error = {
    addressline1: '',
    country: '',
    state: '',
    city: '',
    zipcode: '',
    shipContactName: '',
    shipContactNo: '',
    shipNotificationEmail: '',
  };
  countryItems = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  stateItems = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };
  constructor(
    private guestBuyCheckout: GuestBuyCheckoutService,
    private translate: TranslationService
  ) {}

  ngOnInit(): void {
    this.guestBuyCheckout.currentMessage.subscribe((message) => {
      if (message === 'valid') {
        this.onSubmit();
      }
    });
    var countries = [];
    this.countriesList.countries.forEach((country) => {
      countries.push({
        label: country.name,
        value: country.isocode,
      });
    });

    this.countryItems = {
      itemGroups: [
        {
          items: countries,
        },
      ],
    };
    this.getStatesList(this.country);
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  onGetStates(event, field) {
    this.loadingFlag = true;
    this.state = '';
    this.stateItems = {
      itemGroups: [
        {
          items: [],
        },
      ],
    };
    this.onChange(event, field);
    this.getStatesList(event.target.value);
  }

  getStatesList(country) {
    const countryNames = this.countryItems.itemGroups[0].items;
    var selectedCountry = '';
    for (let i = 0; i < countryNames.length; i++) {
      if (countryNames[i].label == country) {
        selectedCountry = countryNames[i].value;

        const regions = 'regions';
        this.guestBuyCheckout
          .getRegion(this.userId, this.activeCartId, selectedCountry)
          .subscribe(
            (success) => {
              this.stateList = success[regions];

              var states = [];
              this.stateList.forEach((state) => {
                states.push({
                  label: state.name,
                  value: state.isocode,
                });
              });
              this.stateItems = {
                itemGroups: [
                  {
                    items: states,
                  },
                ],
              };
              this.loadingFlag = false;
            },
            (error) => {}
          );
      }
    }
  }
  checkedSoldToAddress(e) {
    this.resetError();
    this.checkedSameAddress = !this.checkedSameAddress;
    let address = this.guestBuyCheckout.getSoldToAddress();
    if (this.checkedSameAddress && address) {
      this.getStatesList(address.country);
      this.companyName = address.companyName;
      this.addressline1 = address.line1;
      this.addressline2 = address.line2;
      this.country = address.country;
      this.state = address.region;
      this.city = address.town;
      this.zipcode = address.postalCode;
    } else {
      this.companyName = '';
      this.addressline1 = '';
      this.addressline2 = '';
      this.country = this.country;
      this.state = '';
      this.city = '';
      this.zipcode = '';
    }
  }
  resetError() {
    this.error = {
      addressline1: '',
      country: '',
      state: '',
      city: '',
      zipcode: '',
      shipContactName: this.shipContactName ? this.shipContactName : '',
      shipContactNo: this.shipContactNo ? this.shipContactNo : '',
      shipNotificationEmail: this.shipNotificationEmail
        ? this.shipNotificationEmail
        : '',
    };
  }
  getCountryData(country) {
    return this.countriesList.countries.find((obj) => {
      if (obj.name === country) return obj;
    });
  }
  getStateData(state) {
    return this.stateList.find((obj) => {
      if (obj.name === state) return obj;
    });
  }
  onSubmit() {
    this.isformValid = true;
    let formKeys = [
      'addressline1',
      'country',
      'state',
      'city',
      'zipcode',
      'shipContactName',
      'shipContactNo',
      'shipNotificationEmail',
    ];
    formKeys.forEach((key) => {
      if (this[key] === '') {
        this.error[key] = this.getTranslatedText('errors.' + key);
        this.isformValid = false;
      }
    });

    if (this.error.shipContactNo != '') {
      window.scrollTo({ top: 1000, behavior: 'smooth' });
      this.shippingValEvent.emit(false);
      return;
    } else {
      this.shippingValEvent.emit(true);
    }

    if (this.error.shipNotificationEmail != '') {
      window.scrollTo({ top: 1000, behavior: 'smooth' });
      this.shippingValEvent.emit(false);
      return;
    } else {
      this.shippingValEvent.emit(true);
    }

    if (this.isformValid) {
      this.guestBuyCheckout.setshippingValidation('valid');
      this.shippingDetails = {
        shippingAddress: {
          companyName: this.companyName,
          line1: this.addressline1,
          line2: this.addressline2,
          country: this.getCountryData(this.country),
          region: this.getStateData(this.state),
          town: this.city,
          postalCode: this.zipcode,
          deliveryPoint: this.deliveryPoint,
          shippingAddress: true,
        },
        shippingOrder: {
          deliveryPoint: this.deliveryPoint,
          shipContactName: this.shipContactName,
          shipContactNo: this.shipContactNo,
          shipNotificationEmail: this.shipNotificationEmail.toLowerCase(),
          shippingRemarks: this.shippingRemarks,
        },
      };
      this.shippingDetailsEvent.emit(this.shippingDetails);
    }
  }

  onChange(e, field) {
    this.error[field] = '';
    this[field] = e.target.value;

    if (field === 'shipContactNo') {
      const phoneRegx = '^[0-9]*$';
      if (e.target.value && !e.target.value.match(phoneRegx)) {
        this.error.shipContactNo = this.getTranslatedText(
          'errors.contactNoInvalid'
        );
      } else {
        this.error.shipContactNo = '';
      }
    }
    const emailRegx = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
    if (field === 'shipNotificationEmail') {
      if (e.target.value && !e.target.value.match(emailRegx)) {
        this.error.shipNotificationEmail = this.getTranslatedText(
          'errors.emailInvalid'
        );
      } else {
        this.error.shipNotificationEmail = '';
      }
    }
  }
}
