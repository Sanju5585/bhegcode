import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationService } from '@spartacus/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { BillToAddress } from '../../models/address-models';
import { AddressModelService } from './address-model.service';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { LaunchDialogService } from '@spartacus/storefront';
import { ApiService } from '../../../core/http/api.service';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../core/generic-validator/regular-expressions';

@Component({
  standalone: false,
  selector: 'app-address-model',
  templateUrl: './address-model.component.html',
  styleUrls: ['./address-model.component.scss'],
})
export class AddressModelComponent implements OnInit {
  placeholder;
  userAddressList;
  userAddressList$: Observable<any>;
  showAddProductLoader: boolean;
  public term = '';
  radioSelected: any;
  newAdd: boolean;
  addressForm: FormGroup | any;
  isSubmitted: boolean;
  selectedCountry: any;
  countryNames: any[];
  countryRegionNames: any[];
  public userAddressSave = false;
  cartId: any;
  selectedRegion: any;
  addressFor: any;
  isSaveAddress: boolean = false;
  isDisabledAddAddress: boolean = false;
  isDisabledAddAddressBuyCheckoutDetails: boolean = false;

  @Input()
  componentAddress = 'End Customer';

  @Input()
  userType: any;

  @Input()
  endAdd: any;

  constructor(
    public apiService: ApiService,
    private addressModelService: AddressModelService,
    private activeCartFacade: ActiveCartFacade,
    private launchDialogService: LaunchDialogService,
    private fb: FormBuilder,
    private multiCartFacade: MultiCartFacade,
    private translate: TranslationService,
    public sanitizer: DomSanitizer
  ) {
    this.placeholder = 'Search ' + this.componentAddress + ' address';
    this.newAdd = false;
    this.userAddressList = [];
    this.addressForm = this.fb.group({
      firstName: ['', Validators.required],
      companyName: ['', Validators.required],
      line1: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      lastName: ['', Validators.required],
      line2: [''],
      state: ['', Validators.required],
      postalCode: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
          Validators.pattern(/^[a-zA-Z0-9 -]*$/),
        ],
      ],
      saveAddress: '',
    });
  }

  get firstName() {
    return this.addressForm.get('firstName');
  }

  get lastName() {
    return this.addressForm.get('lastName');
  }

  get companyName() {
    return this.addressForm.get('companyName');
  }

  get line1() {
    return this.addressForm.get('line1');
  }
  get country() {
    return this.addressForm.get('country');
  }
  get state() {
    return this.addressForm.get('state');
  }
  get city() {
    return this.addressForm.get('city');
  }
  get postalCode() {
    return this.addressForm.get('postalCode');
  }
  get saveAddress() {
    return this.addressForm.get('saveAddress');
  }

  ngOnInit(): void {
    this.launchDialogService.data$.subscribe((data: any) => {
      this.userType = data.userType;
      this.endAdd = data?.endAdd;
      this.componentAddress = data?.componentAddress;
    });
    this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
      this.cartId = cartId;
    });
    this.placeholder = this.getTranslatedText(
      'address-model.searchEnduserAddress'
    );
    this.getCountryList();
    this.getAddressParam();
    if (this.addressFor == 'billtoAddress') {
      this.getUserBillToAddressList();
    } else if (this.addressFor == 'payer') {
      this.getUserPayerAddressList();
    } else {
      this.getUserAddressList();
    }
  }

  getAddressParam() {
    this.addressModelService.getAddAddressFlag().subscribe((value) => {
      if (value) this.addressFor = value;
      else this.addressFor = null;

      if (this.addressFor == 'shipping') {
        this.placeholder = this.getTranslatedText(
          'address-model.searchShippingAddress'
        );
        this.componentAddress = 'Shipping';
        this.isDisabledAddAddress = true;
      }
      if (this.addressFor == 'enduser') {
        this.placeholder = this.getTranslatedText(
          'address-model.searchEndCustomerAddress'
        );
        this.componentAddress = 'End Customer';
        this.isDisabledAddAddress = true;
      }
      if (this.addressFor == 'payer') {
        this.placeholder = this.getTranslatedText(
          'address-model.searchPayerAddress'
        );
        this.componentAddress = 'Payer';
        this.isDisabledAddAddress = false;
        this.isDisabledAddAddressBuyCheckoutDetails = false;
      }
      if (this.addressFor == 'billtoAddress') {
        this.placeholder = this.getTranslatedText(
          'address-model.searchBillToAddress'
        );
        this.componentAddress = 'Bill to';
        this.isDisabledAddAddress = false;
      }
    });
  }

  // Address List API Integration

  onChangeValidate(e, field) {
    e.target.value = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, e.target.value),
      REGULAR_PATTERN.alphaNumericWithSpecialCharater
    );
    this.addressForm.controls[field].setValue(e.target.value);
  }

  addressSearch() {
    this.term = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, this.term),
      REGULAR_PATTERN.alphaNumericWithSpecialCharater
    );
    if (!this.term) return false;
    this.showAddProductLoader = true;
    if (this.addressFor == 'billtoAddress') {
      this.addressModelService
        .searchBillToAddress(this.cartId, this.term, 'companyAsc')
        .subscribe((response) => {
          this.showAddProductLoader = false;
          this.userAddressList = response;
        });
    } else if (this.addressFor == 'payer') {
      this.addressModelService
        .searchPayerAddress(this.cartId, this.term, 'companyAsc')
        .subscribe((response) => {
          this.showAddProductLoader = false;
          this.userAddressList = response;
        });
    } else {
      this.addressModelService
        .searchAddress(this.cartId, this.term, 'companyAsc')
        .subscribe((response) => {
          this.showAddProductLoader = false;
          this.userAddressList = response;
        });
    }
  }
  closeForm(reason?: any) {
    this.launchDialogService.closeDialog(reason);
  }
  selectAddress(code) {
    if (this.addressFor == 'payer') {
    }
    this.addressModelService
      .selectAddress(this.cartId, code, this.addressFor)
      .subscribe((res) => {
        this.addressModelService.setAddress({
          flag: this.addressFor,
          res: res,
        });
        if (this.userType) {
          this.multiCartFacade.loadCart({
            cartId: this.cartId,
            userId: this.userType,
            extraData: {
              active: true,
            },
          });
        }
        this.launchDialogService.closeDialog('address selected');
      });
  }

  getUserAddressList() {
    this.userAddressList$ = this.addressModelService.getAddressList(
      this.cartId
    );
    this.userAddressList$.subscribe((res) => {
      this.userAddressList = res;
      for (let i = 0; i < this.userAddressList.addresses.length; i++) {
        if (
          this.userAddressList.addresses[i].formattedAddress ==
          this.endAdd?.formattedAddress
        ) {
          this.radioSelected = this.userAddressList.addresses[i].id;
        }
      }
    });
  }
  getUserBillToAddressList() {
    this.userAddressList$ = this.addressModelService.getBillToAddressList(
      this.cartId
    );
    this.userAddressList$.subscribe((res) => {
      this.userAddressList = res;
      for (let i = 0; i < this.userAddressList.addresses.length; i++) {
        if (
          this.userAddressList.addresses[i].formattedAddress ==
          this.endAdd?.formattedAddress
        ) {
          this.radioSelected = this.userAddressList.addresses[i].id;
        }
      }
    });
  }
  getUserPayerAddressList() {
    this.userAddressList$ = this.addressModelService.getPayerAddressList(
      this.cartId
    );
    this.userAddressList$.subscribe((res) => {
      this.userAddressList = res;
      for (let i = 0; i < this.userAddressList.addresses.length; i++) {
        if (
          this.userAddressList.addresses[i].formattedAddress ==
          this.endAdd?.formattedAddress
        ) {
          this.radioSelected = this.userAddressList.addresses[i].id;
        }
      }
    });
  }
  onStatusChange(item) {
    this.radioSelected = item.id;
    this.userAddressList[item.id];
  }

  addAddress() {
    this.newAdd = true;
  }

  countryRegions() {
    this.selectedCountry =
      this.addressForm.controls.country.value.$ngOptionLabel.trim();
    for (let i = 0; i < this.countryNames.length; i++) {
      if (this.countryNames[i].name == this.selectedCountry) {
        this.selectedCountry = this.countryNames[i];
        const regions = 'regions';
        this.addressModelService
          .getRegion(this.cartId, this.selectedCountry.isocode)
          .subscribe(
            (success) => {
              this.countryRegionNames = success[regions];
            },
            (error) => {}
          );
      }
    }
  }
  getSaveAddress(event) {
    this.userAddressSave = event.target.checked;
    event.target.value = event.target.checked;

    this.addressForm.controls.saveAddress.setValue(this.userAddressSave);
  }

  regions() {
    this.selectedRegion = this.addressForm.controls.state.value.$ngOptionLabel;
    for (let i = 0; i < this.countryRegionNames.length; i++) {
      if (this.countryRegionNames[i].name == this.selectedRegion) {
        this.selectedRegion = this.countryRegionNames[i];
      }
    }
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.addressForm.valid) {
      const addressObj = {
        firstName: this.sanitizer.sanitize( SecurityContext.HTML,this.addressForm.controls.firstName.value),
        companyName:  this.sanitizer.sanitize( SecurityContext.HTML,this.addressForm.controls.companyName.value),
        lastName:  this.sanitizer.sanitize( SecurityContext.HTML,this.addressForm.controls.lastName.value),
        line1:  this.sanitizer.sanitize( SecurityContext.HTML,this.addressForm.controls.line1.value),
        country: {
          name: this.sanitizer.sanitize( SecurityContext.HTML,this.addressForm.controls.country.value.$ngOptionLabel),
          isocode: this.sanitizer.sanitize( SecurityContext.HTML,this.selectedCountry.isocode),
        },
        town:  this.sanitizer.sanitize( SecurityContext.HTML,this.addressForm.controls.city.value),
        line2:   this.sanitizer.sanitize( SecurityContext.HTML,this.addressForm.controls.line2.value),
        region: {
          isocode: this.sanitizer.sanitize( SecurityContext.HTML,this.selectedRegion.isocode),
          name: this.sanitizer.sanitize( SecurityContext.HTML,this.addressForm.controls.state.value.$ngOptionLabel),
          countryIso: this.sanitizer.sanitize( SecurityContext.HTML,this.selectedRegion.countryIso),
        },
        postalCode: this.sanitizer.sanitize( SecurityContext.HTML,this.addressForm.controls.postalCode.value),
        saveForFuture:  this.sanitizer.sanitize( SecurityContext.HTML,this.isSaveAddress),
      };

      this.addressModelService
        .addAddress(this.cartId, addressObj, this.addressFor)
        .subscribe((success) => {
          this.newAdd = false;
          this.isSubmitted = false;
          if (this.addressFor == 'shipping' || this.addressFor == 'enduser') {
            this.addressModelService.setAddress({
              flag: this.addressFor,
              res: success,
            });
            this.launchDialogService.closeDialog('submit');
          }
          var Obj: BillToAddress;
          Obj = {
            country: {
              isocode: this.sanitizer.sanitize( SecurityContext.HTML,success['country'].isocode),
              name: this.sanitizer.sanitize( SecurityContext.HTML,success['country']?.name),
            },
            id: this.sanitizer.sanitize( SecurityContext.HTML, this.userAddressList.length + 1),
            firstName:  this.sanitizer.sanitize( SecurityContext.HTML,success['firstName']),
            companyName:  this.sanitizer.sanitize( SecurityContext.HTML,success['companyName']),
            lastName:  this.sanitizer.sanitize( SecurityContext.HTML,success['lastName']),
            line1:  this.sanitizer.sanitize( SecurityContext.HTML,success['line1']),
            line2:  this.sanitizer.sanitize( SecurityContext.HTML,success['line2']),
            region: {
              name: this.sanitizer.sanitize( SecurityContext.HTML,success['region'].name),
              isocode: this.sanitizer.sanitize( SecurityContext.HTML,success['region'].isocode),
            },
            postalCode:  this.sanitizer.sanitize( SecurityContext.HTML,success['postalCode']),
            town:  this.sanitizer.sanitize( SecurityContext.HTML,success['town']),
          };

          this.launchDialogService.closeDialog('submit');
          if (this.userType) {
            this.multiCartFacade.loadCart({
              cartId: this.cartId,
              userId: this.userType,
              extraData: {
                active: true,
              },
            });
          }
          this.userAddressList.push(Obj);
          this.addressForm.reset();
          this.onStatusChange(Obj);

          if (this.addressFor == 'shipping' || this.addressFor == 'enduser')
            this.launchDialogService.closeDialog('submit');
        });
    }
  }
  cancel() {
    this.newAdd = false;
    this.addressForm.reset();
  }

  getCountryList() {
    const countries = 'countries';

    let apiParams;

    if (this.componentAddress === 'Ship To') {
      apiParams = { fields: 'DEFAULT', type: 'SHIPPING' };
    } else {
      apiParams = { fields: 'DEFAULT', type: 'BILLING' };
    }
    this.addressModelService.getCountry(this.cartId, 'shipping').subscribe(
      (success) => {
        this.countryNames = success[countries];
      },
      (error) => {}
    );
  }

  onChange(e) {
    this.isSaveAddress = e.target.checked;
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res: any) => {
      message = res;
      this.placeholder = res;
    });
    return message;
  }
}