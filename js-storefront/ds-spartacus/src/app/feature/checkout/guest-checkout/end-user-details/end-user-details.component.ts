import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslationService } from '@spartacus/core';
import { GuestBuyCheckoutService } from '../services/guest-buy-checkout.service';

@Component({
  standalone: false,
  selector: 'ds-end-user-details',
  templateUrl: './end-user-details.component.html',
  styleUrls: ['./end-user-details.component.scss'],
})
export class EndUserDetailsComponent implements OnInit {
  isformValid: boolean;
  loadingFlag: boolean = false;
  @Input() enduserArray;
  @Input() countriesList;
  userId: string = 'anonymous';
  @Input() activeCartId;
  @Output() endUserDetailsEvent = new EventEmitter<any>();
  endUserDetails = {};
  stateList: any;
  checkedSameAddress: boolean = false;

  endUserCategory: string = '';
  endUser: string = '';
  addressline1: string = '';
  addressline2: string = '';
  country: string = 'United States';
  state: string = '';
  city: string = '';
  zipcode: string = '';
  error = {
    endUserCategory: '',
    endUser: '',
    addressline1: '',
    country: '',
    state: '',
    city: '',
    zipcode: '',
  };
  endUserItems = {
    itemGroups: [
      {
        items: [],
      },
    ],
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
    var endusers = [];

    this.guestBuyCheckout.getEndUserCategory().forEach((enduser) => {
      endusers.push({
        label: enduser.value,
        value: enduser.key,
      });
    });
    this.endUserItems = {
      itemGroups: [
        {
          items: endusers,
        },
      ],
    };
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
  onSubmit() {
    this.isformValid = true;
    let formKeys = [
      'endUserCategory',
      'endUser',
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
      this.guestBuyCheckout.setendUserValidation('valid');
      this.endUserDetails = {
        endUserAddress: {
          companyName: this.endUser,
          line1: this.addressline1,
          line2: this.addressline2,
          country: this.getCountryData(this.country),
          region: this.getStateData(this.state),
          town: this.city,
          postalCode: this.zipcode,
        },
        endUserCategory: this.endUserCategory,
      };
      this.endUserDetailsEvent.emit(this.endUserDetails);
    }
  }
  checkedSoldToAddress(e) {
    this.resetError();
    this.checkedSameAddress = !this.checkedSameAddress;
    let address = this.guestBuyCheckout.getSoldToAddress();
    if (this.checkedSameAddress && address) {
      this.getStatesList(address.country);
      this.endUser = address.companyName;
      this.addressline1 = address.line1;
      this.addressline2 = address.line2;
      this.country = address.country;
      this.state = address.region;
      this.city = address.town;
      this.zipcode = address.postalCode;
    } else {
      this.endUser = '';
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
      endUserCategory: '',
      endUser: '',
      addressline1: '',
      country: '',
      state: '',
      city: '',
      zipcode: '',
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
  onChange(e, field) {
    this.error[field] = '';
    this[field] = e.target.value;
  }
}
