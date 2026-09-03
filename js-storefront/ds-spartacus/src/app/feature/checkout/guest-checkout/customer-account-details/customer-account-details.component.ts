import { Component, Input, OnInit } from '@angular/core';
import { GuestBuyCheckoutService } from '../services/guest-buy-checkout.service';
import { Output, EventEmitter } from '@angular/core';
import { TranslationService } from '@spartacus/core';

@Component({
  standalone: false,
  selector: 'ds-customer-account-details',
  templateUrl: './customer-account-details.component.html',
  styleUrls: ['./customer-account-details.component.scss'],
})
export class CustomerAccountDetailsComponent implements OnInit {
  loadingFlag: boolean = false;
  @Input() countriesList: any;
  @Output() customerDetailsEvent = new EventEmitter<any>();
  isformValid: boolean;
  customerDetails: {};
  userId: string = 'anonymous';
  @Input() activeCartId;
  stateList: any;

  firstName: string = '';
  lastName: string = '';
  companyName: string = '';
  addressline1: string = '';
  addressline2: string = '';
  country: string = 'United States';
  state: string = '';
  city: string = '';
  zipcode: string = '';
  error = {
    firstName: '',
    lastName: '',
    companyName: '',
    addressline1: '',
    country: '',
    state: '',
    city: '',
    zipcode: '',
  };

  countryItems: any = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };

  stateItems: any = {
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
    this.fetchStates(this.country);
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
    const countryNames = this.countryItems.itemGroups[0].items;
    var selectedCountry = '';
    for (let i = 0; i < countryNames.length; i++) {
      if (countryNames[i].label == event.target.value) {
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
      'firstName',
      'lastName',
      'companyName',
      'addressline1',
      'country',
      'state',
      'city',
      'zipcode',
    ];
    formKeys.forEach((key) => {
      if (this[key] === '') {
        this.error[key] = this.getTranslatedText('errors.' + key);
        this.isformValid = false;
      }
    });

    if (this.isformValid) {
      this.guestBuyCheckout.setGuestvalidation('valid');
      this.customerDetails = {
        firstName: this.firstName,
        lastName: this.lastName,
        companyName: this.companyName,
        line1: this.addressline1,
        line2: this.addressline2,
        country: this.getCountryData(this.country),
        region: this.getStateData(this.state),
        town: this.city,
        postalCode: this.zipcode,
      };
      this.customerDetailsEvent.emit(this.customerDetails);
    }
  }
  onChange(e, field) {
    this.error[field] = '';
    this[field] = e.target.value;
    this.pushAddress();
  }

  pushAddress() {
    let address = {
      firstName: this.firstName,
      lastName: this.lastName,
      companyName: this.companyName,
      line1: this.addressline1,
      line2: this.addressline2,
      country: this.country,
      region: this.state,
      town: this.city,
      postalCode: this.zipcode,
    };
    this.guestBuyCheckout.setSoldToAddress(address);
  }

  fetchStates(county) {
    this.country = county;
    this.state = '';
    this.stateItems = {
      itemGroups: [
        {
          items: [],
        },
      ],
    };
    const countryNames = this.countryItems.itemGroups[0].items;
    var selectedCountry = '';
    for (let i = 0; i < countryNames.length; i++) {
      if (countryNames[i].label == this.country) {
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
}
