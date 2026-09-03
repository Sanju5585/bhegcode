import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationService } from '@spartacus/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, take, filter } from 'rxjs';
import {
  ActiveCartFacade,
  Cart,
  MultiCartFacade,
} from '@spartacus/cart/base/root';
import { LaunchDialogService } from '@spartacus/storefront';
import { OccEndpointsService } from '@spartacus/core';
import { ProductService } from '@spartacus/core';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../../core/generic-validator/regular-expressions';
import { ApiService } from '../../../../../core/http/api.service';
import { AddressModelService } from '../../../../../shared/components/address-model/address-model.service';
import {
  BillToAddress,
  DeliveryAddress,
  EndUserAddress,
} from '../../../../../shared/models/address-models';
import { CustomerAccountService } from '../../../../../core/customer-account/customer-account.service';
import { SharedCartService } from '../../../../cart/cart-shared/shared-cart.service';
import {
  ProductType,
  DecisionType,
  CartType,
} from '../../../../../shared/models/cartType.models';
import { DS_DIALOG } from '../../../../../core/dialog/dialog.config';
import { ofType, Actions } from '@ngrx/effects';
import { CartActions } from '@spartacus/cart/base/core';
import { GoogleTagManagerService } from '../../../../../shared/services/gtm.service';
import {
  Ecommerce,
  EcommerceItem,
  GTMDataLayer,
} from '../../../../../shared/models/googleTagManager.model';
import {
  ItemListTypeEnum,
  GtmEvents,
} from '../../../../../shared/enums/gtm.enum';
import { CustomerType } from '../../../../../shared/models/customerType.model';
import { Router } from '@angular/router';
import { AllProductLine } from '../../../../../shared/enums/availableProductList.enum';
@Component({
  standalone: false,
  selector: 'app-waygate-address-modal',
  templateUrl: './waygate-address-modal.component.html',
  styleUrls: ['./waygate-address-modal.component.scss'],
})
export class WaygateAddressModalComponent {
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
  productLine: string;
  nameMandatory: boolean = true;
  itcTrade: any;
  itcTradeText: string;
  soldToAdd: any;
  isChinaApac: Observable<boolean>;
  checkDuplicateEca = false;
  productCode: string;
  bulkSelectionData = [];
  isQuickOrder = false;
  selRowKey: string;
  sameAddrForAll = false;
  cartItem: any;
  cartItemPage: string;
  isAddNewCartEntry: boolean;
  disabledEcaCodes: string[] = [];
  cartEntries: any = [];
  isChannelPartner: boolean;
  cartType: string;
  routeSnapshot;
  autoAddToCart: boolean;
  cart: any;
  constructor(
    public apiService: ApiService,
    private occEndpoints: OccEndpointsService,
    private addressModelService: AddressModelService,
    private activeCartFacade: ActiveCartFacade,
    private launchDialogService: LaunchDialogService,
    private fb: FormBuilder,
    private multiCartFacade: MultiCartFacade,
    private translate: TranslationService,
    public sanitizer: DomSanitizer,
    private customerAccService: CustomerAccountService,
    private sharedCartService: SharedCartService,
    private actions$: Actions,
    private gtmService: GoogleTagManagerService,
    private route: Router,
    private productService: ProductService
  ) {
    this.placeholder = 'Search ' + this.componentAddress + ' address';
    this.newAdd = false;
    this.userAddressList = [];
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    if (this.productLine === 'panametrics') {
      this.nameMandatory = false;
    }

    this.addressForm = this.fb.group({
      firstName: ['', this.nameMandatory ? Validators.required : ''],
      companyName: ['', Validators.required],
      line1: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      lastName: ['', this.nameMandatory ? Validators.required : ''],
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
    this.isChinaApac = this.sharedCartService.isChinaApac;
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
    this.customerAccService.getCustomerUserType().subscribe((customerType) => {
      this.isChannelPartner = customerType === CustomerType.Type2;
    });
    this.launchDialogService.data$.subscribe((data: any) => {
      this.userType = data?.userType;
      this.endAdd = data?.endAdd;
      this.componentAddress = data?.componentAddress;
      //from waygate add to cart component{
      this.checkDuplicateEca = data?.checkDuplicateEca ?? false;
      this.autoAddToCart = data?.autoAddToCart ?? false;
      //}
      //from waygate quick order address component{
      this.isQuickOrder = data?.isQuickOrder;
      this.bulkSelectionData = data?.bulkSelectionData;
      this.selRowKey = data?.selRowKey;
      //}
      //from waygate cart item component{
      this.cartItemPage = data?.cartItemPage;
      this.cartItem = data?.cartItem;
      this.isAddNewCartEntry = data?.isAddNewCartEntry;
      if (this.isAddNewCartEntry || this.cartItemPage) {
        this.productCode = this.cartItem?.product?.code;
      } else {
        this.productCode = data?.productCode ?? '';
      }
      //}

      this.sharedCartService.soldToAddress.subscribe((d: any) => {
        this.soldToAdd = d.formattedAddress;
      });
    });

    this.activeCartFacade.getActive().subscribe((cart: any) => {
      this.cartId = cart?.code;
      this.cart = cart;
      this.cartEntries = cart?.entries || [];
      this.cartType = cart?.cartType;
      if (this.isAddNewCartEntry || this.cartItemPage)
        this.getUserAddressList();
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
      if (!this.isAddNewCartEntry && !this.cartItemPage)
        this.getUserAddressList();
    }
  }

  cleanFormattedAddress(addr: any) {
    if (!addr?.formattedAddress) return '';
    return addr.formattedAddress
      .split(',')
      .map((part) => part.trim())
      .filter((part) => part !== '')
      .join(', ');
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
  addressSelected(code) {
    if (code) {
      if (this.checkDuplicateEca) {
        if (code) {
          //this.launchDialogService.closeDialog('address selected');
          this.onSelectEca(code);
        }
      } else if (this.isQuickOrder) {
        if (code) {
          this.launchDialogService.closeDialog('address selected');
          this.applySelected(code);
        }
      } else if (this.cartItemPage) {
        if (this.isAddNewCartEntry) {
          this.addEntry(code);
          this.launchDialogService.closeDialog('address selected');
        } else {
          this.updateCartEntry(code);
        }
      } else {
        this.selectAddress(code);
      }
    }
  }

  selectAddress(code) {
    if (this.addressFor == 'payer') {
    }
    this.addressModelService
      .selectAddress(this.cartId, code, this.addressFor)
      .subscribe((res) => {
        const select: any = res;
        if (this.addressFor == 'shipping')
          this.sharedCartService.setShippingAddress(res);
        if (this.addressFor == 'enduser')
          this.sharedCartService.setEnduserAddress(res);
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

  onSelectEca(code) {
    // this.activeCartFacade
    //   .getActive()
    //   .pipe(take(1))
    //   .subscribe((cart) => {

    const result = this.evaluateSelectedEca(this.cart, code);
    const selectedECA = this.userAddressList.addresses.find(
      (addr) => addr.id === code
    );

    if (result.type === 'DUPLICATE') {
      this.openDuplicatePopup(code, selectedECA);
      return;
    }

    this.addressModelService.setSelectedEca = code;
    this.addressModelService.setSelEcaText = selectedECA;
    console.log('ECA selected' + this.addressModelService.setSelEcaText);
    this.productService.get(this.productCode).subscribe((product) => {});
    this.addressModelService
      .reloadProductWithEca(this.productCode, code, this.userType)
      .subscribe((res) => {
        this.launchDialogService.closeDialog({
          selectedEca: selectedECA,
          updatedProduct: res,
        });
      });
    // });
  }
  updateCartEntry(code) {
    const selectedAddress = this.userAddressList.addresses.find(
      (address) => address.id == code
    );
    this.addressModelService.setSelectedEca = code;
    this.addressModelService.setSelEcaText = selectedAddress;
    this.activeCartFacade.updateEntry(
      this.cartItem?.entryNumber,
      this.cartItem?.quantity
    );
    this.actions$
      .pipe(ofType(CartActions.CART_UPDATE_ENTRY_SUCCESS), take(1))
      .subscribe((cartResponse: any) => {
        this.pushAddToCartEvent(this.cartItem?.quantity, cartResponse);
        this.launchDialogService.closeDialog('enrty updated');
      });
  }

  addEntry(code, quantity = 1) {
    const selectedECA = this.userAddressList.addresses.find(
      (addr) => addr.id === code
    );
    this.addressModelService.setSelectedEca = code;
    this.addressModelService.setSelEcaText = selectedECA;

    this.activeCartFacade.addEntry(this.productCode, quantity, undefined);
    this.actions$
      .pipe(ofType(CartActions.CART_ADD_ENTRY_SUCCESS), take(1))
      .subscribe((cartResponse: any) => {
        this.pushAddToCartEvent(quantity, cartResponse);
        this.actions$
          .pipe(ofType(CartActions.LOAD_CART_SUCCESS), take(1))
          .subscribe((loadResponse: any) => {
            this.addressModelService.setSelectedEca = null;
            this.addressModelService.setSelEcaText = null;
            this.launchDialogService.closeDialog('new entry created');
          });
      });
  }

  applySelected(code) {
    const selectedAddress = this.userAddressList.addresses.find(
      (address) => address.id == code
    );
    if (!selectedAddress) return;
    if (this.sameAddrForAll) {
      this.bulkSelectionData.forEach((item) => {
        item.ecaCode = code;
        item.ecaText = [
          selectedAddress.companyName,
          [selectedAddress.firstName, selectedAddress.lastName]
            .filter(Boolean)
            .join(' '),
          this.cleanFormattedAddress(selectedAddress),
          selectedAddress?.country?.name,
        ]
          .filter(Boolean)
          .join(', ');
      });
    } else {
      const item = this.bulkSelectionData.find((i) => i.key === this.selRowKey);
      if (item) {
        item.ecaCode = code;
        item.ecaText = [
          selectedAddress.companyName,
          [selectedAddress.firstName, selectedAddress.lastName]
            .filter(Boolean)
            .join(' '),
          this.cleanFormattedAddress(selectedAddress),
          selectedAddress?.country?.name,
        ]
          .filter(Boolean)
          .join(', ');
      }
    }
  }

  evaluateSelectedEca(cart: Cart, code) {
    if (!cart?.entries?.length) {
      return { type: 'OK' };
    }

    const sameProductEntries = cart?.entries?.filter(
      (entry: any) =>
        entry?.product?.code == this.productCode &&
        entry?.productType === ProductType.Typ3
    );

    if (!sameProductEntries.length) {
      return { type: 'OK' };
    }

    const sameEcaEntry = sameProductEntries.find(
      (entry: any) => entry?.ecaCode === code
    );

    if (sameEcaEntry) {
      return { type: 'DUPLICATE' };
    }

    return { type: 'OK' };
  }

  openDuplicatePopup(code, selectedECA) {
    this.launchDialogService.closeDialog('opened decision model');
    const duplicateDialog$ = this.launchDialogService.openDialog(
      DS_DIALOG.WAYGATE_DUPLICATE_ECA_DIALOG,
      undefined,
      undefined
    );
    if (duplicateDialog$) {
      duplicateDialog$.pipe(take(1)).subscribe((value) => {});
    }
    this.launchDialogService.dialogClose.subscribe((value: any) => {
      if (value === DecisionType.IncreaseQty) {
        this.addressModelService.setSelectedEca = code;
        this.addressModelService.setSelEcaText = selectedECA;
        this.addressModelService.setAddToCartFromAddrModel = true;
        this.launchDialogService.closeDialog({ selectedEca: selectedECA });
        return;
      }
      if (value === DecisionType.ChangeEca) {
        this.addressModelService.setSelectedEca = null;
        this.addressModelService.setSelEcaText = null;
        this.launchDialogService.closeDialog('change eca');
        setTimeout(() => {
          const addressDialogRef = this.launchDialogService.openDialog(
            DS_DIALOG.WAYGATE_ADDRESS_DIALOG,
            undefined,
            undefined,
            {
              checkDuplicateEca: true,
              autoAddToCart: true,
              productCode: this.productCode,
            }
          );

          if (addressDialogRef) {
            addressDialogRef.pipe(take(1)).subscribe((value) => {
              let aval =
                value?.instance?.launchDialogService?._dialogClose._value;
              if (aval && ['Cross click', 'cancel'].includes(aval)) {
                this.showAddProductLoader = false;
              }
            });
          }
        });
      }
    });
  }

  getUserAddressList() {
    this.userAddressList$ = this.addressModelService.getAddressList(
      this.cartId,
      this.componentAddress == 'Shipping' ? true : false
    );
    this.userAddressList$.subscribe((res) => {
      this.userAddressList = res;
      for (let i = 0; i < this.userAddressList.addresses.length; i++) {
        const address = this.userAddressList.addresses[i];
        if (
          this.isAddNewCartEntry ||
          this.cartItemPage ||
          (this.isChannelPartner &&
            this.cartType == CartType.Typ1 &&
            this.route.url.includes(AllProductLine.waygate + '/cart'))
        ) {
          const alreadyUsed = this.cartEntries.some(
            (entry) =>
              entry.product?.code === this.productCode &&
              entry?.ecaCode === address.id
          );

          if (alreadyUsed) {
            address['isDisabled'] = true;
            continue;
          }
        }
        if (this.addressFor === 'enduser')
          if (
            this.userAddressList.addresses[i].formattedAddress ==
            this.endAdd?.formattedAddress
          ) {
            this.radioSelected = this.userAddressList.addresses[i].id;
          }

        if (this.addressFor === 'shipping')
          if (
            this.userAddressList.addresses[i].formattedAddress == this.soldToAdd
          ) {
            this.radioSelected = this.userAddressList.addresses[i].id;
          }
      }
      if (this.checkDuplicateEca && this.addressModelService.getSelectedEca) {
        this.radioSelected = this.addressModelService.getSelectedEca;
      }

      if (this.isQuickOrder && this.selRowKey) {
        const item = this.bulkSelectionData.find(
          (i) => i.key === this.selRowKey
        );
        this.radioSelected = item?.ecaCode ?? '';
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
    if (item.isDisabled) return;
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
        firstName: this.sanitizer.sanitize(
          SecurityContext.HTML,
          this.addressForm.controls.firstName.value
        ),
        companyName: this.sanitizer.sanitize(
          SecurityContext.HTML,
          this.addressForm.controls.companyName.value
        ),
        lastName: this.sanitizer.sanitize(
          SecurityContext.HTML,
          this.addressForm.controls.lastName.value
        ),
        line1: this.sanitizer.sanitize(
          SecurityContext.HTML,
          this.addressForm.controls.line1.value
        ),

        country: {
          name: this.sanitizer.sanitize(
            SecurityContext.HTML,
            this.addressForm.controls.country.value.$ngOptionLabel
          ),
          isocode: this.sanitizer.sanitize(
            SecurityContext.HTML,
            this.selectedCountry.isocode
          ),
        },
        town: this.sanitizer.sanitize(
          SecurityContext.HTML,
          this.addressForm.controls.city.value
        ),
        line2: this.sanitizer.sanitize(
          SecurityContext.HTML,
          this.addressForm.controls.line2.value
        ),
        region: {
          isocode: this.sanitizer.sanitize(
            SecurityContext.HTML,
            this.selectedRegion.isocode
          ),
          name: this.sanitizer.sanitize(
            SecurityContext.HTML,
            this.addressForm.controls.state.value.$ngOptionLabel
          ),
          countryIso: this.sanitizer.sanitize(
            SecurityContext.HTML,
            this.selectedRegion.countryIso
          ),
        },
        postalCode: this.sanitizer.sanitize(
          SecurityContext.HTML,
          this.addressForm.controls.postalCode.value
        ),
        // saveForFuture: this.userAddressSave,
        saveForFuture: this.sanitizer.sanitize(
          SecurityContext.HTML,
          this.isSaveAddress
        ),
      };

      this.addressModelService
        .addAddress(this.cartId, addressObj, this.addressFor)
        .subscribe((success) => {
          this.addressModelService.setSelectedEca = success['id'];
          const url = this.occEndpoints.buildUrl('product', {
            urlParams: {
              userId: this.userType || 'current',
            },
            queryParams: {
              productCode: this.productCode,
              ecaCode: this.addressModelService.setSelectedEca,
            },
            scope: 'details',
          });
          this.apiService.getData(url).subscribe((res) => {
            this.addressModelService.setAddToCartFromAddrModel = true;
          });
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
              isocode: success['country'].isocode,
              name: success['country']?.name,
            },
            id: success['id'], //this.userAddressList.length + 1,
            firstName: success['firstName'],
            companyName: success['companyName'],
            lastName: success['lastName'],
            line1: success['line1'],
            line2: success['line2'],
            region: {
              name: success['region'].name,
              isocode: success['region'].isocode,
            },
            postalCode: success['postalCode'],
            town: success['town'],
            formattedAddress: [
              success['line1'],
              success['line2'],
              success['town'],
              success['region']?.name,
              success['postalCode'],
            ]
              .filter(Boolean)
              .join(', '),
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
          const select: any = success;
          success['risk'] = select.country.risk;
          success['sanctioned'] = select.country.sanctioned;
          if (this.addressFor == 'shipping')
            this.sharedCartService.setShippingAddress(
              success as DeliveryAddress
            );
          if (this.addressFor == 'enduser')
            this.sharedCartService.setEnduserAddress(success as EndUserAddress);

          this.userAddressList.addresses.push(Obj);
          this.addressForm.reset();
          this.onStatusChange(Obj);

          if (this.checkDuplicateEca) {
            this.addressModelService.setSelectedEca = success['id'] || '';
            this.addressModelService.setSelEcaText = Obj;
            if (this.autoAddToCart) {
              this.addressModelService.setAddToCartFromAddrModel = true;
            }
          }

          if (this.isQuickOrder) {
            this.applySelected(success['id']);
          }

          if (this.cartItemPage) {
            if (this.isAddNewCartEntry) {
              this.addEntry(success['id']);
              this.launchDialogService.closeDialog('address selected');
            } else {
              this.updateCartEntry(success['id']);
            }
          }
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
        this.countryNames = success[countries].filter(
          (country) => !country.sanctioned
        );
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

  applyToAll(event) {
    this.sameAddrForAll = event.target.checked;
  }

  disableEcaCodes() {
    this.activeCartFacade.getActive().subscribe((cart: any) => {
      if (cart?.entries) {
        this.disabledEcaCodes = cart?.entries
          .filter((entry) => entry?.product?.code === this.productCode)
          .map((entry) => entry.ecaCode);
      }
    });
  }

  pushAddToCartEvent(quantity, cartResponse?: any) {
    const item: EcommerceItem = {
      price: this.cartItem?.yourPrice?.value,
      quantity: quantity,
      item_id: this.cartItem?.product?.code,
      item_name: this.cartItem?.name,
      item_brand: this.gtmService.getItemBrand(),
      item_list_id: ItemListTypeEnum.ProductDetail,
      item_list_name: ItemListTypeEnum.ProductDetail,
      index: 0,
    };

    const eventData: Ecommerce = {
      currency: this.cartItem?.yourPrice?.currencyIso || '',
      value: this.cartItem?.yourPrice?.value * quantity || '',
      items: [item],
    };
    const event: GTMDataLayer = {
      event: GtmEvents.AddToCart,
      store: this.gtmService.getItemBrand(),
      ecommerce: eventData,
      commerceType: cartResponse?.commerceType,
      cartType: cartResponse?.cartType,
    };
    this.gtmService.sendEvent(event);
  }
}
