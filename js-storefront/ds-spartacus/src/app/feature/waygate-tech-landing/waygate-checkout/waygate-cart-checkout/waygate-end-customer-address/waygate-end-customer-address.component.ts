import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { TranslationService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import { DS_DIALOG } from '../../../../../core/dialog/dialog.config';
import { AddressModelService } from '../../../../../shared/components/address-model/address-model.service';
import { GuestBuyCheckoutService } from '../../../../checkout/guest-checkout/services/guest-buy-checkout.service';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { CartType } from '../../../../../shared/models/cartType.models';
import { BuyCheckoutService } from '../../../../checkout/buy-checkout/service/buy-checkout.service';
import { CustomerAccountService } from '../../../../../core/customer-account/customer-account.service';
import { CustomerType } from '../../../../../shared/models/customerType.model';
import { CommerceTypes } from '../../../../../shared/models/commerceTypes.model';

@Component({
  standalone: false,
  selector: 'app-waygate-end-customer-address',
  templateUrl: './waygate-end-customer-address.component.html',
  styleUrls: ['./waygate-end-customer-address.component.scss'],
})
export class WaygateEndCustomerAddressComponent {
  @Output() checkEnduserAddress: EventEmitter<any> = new EventEmitter();
  @Output() addressUpdated = new EventEmitter<any>();
  @Input() endUserAddress;
  @Input() cartType;
  @Input() customerAccount;
  @Input() cart$: Observable<any>;
  @Input() userType: string;
  @Input() sameAsShipping: boolean;
  @Input() currentPage: string;
  @Input() isQuote: boolean;
  @Input() fromCheckOutComp: boolean = false;
  private _shippingAddress;
  isQuoteOrderConvertFlow: any;
  @Input()
  set shippingAddress(newAddress) {
    this._shippingAddress = newAddress;
    if (this.sameAsShipping) {
      this.updateEndUserAddress(newAddress);
      const addressObj = {
        firstName: newAddress.firstName,
        companyName: newAddress.companyName,
        lastName: newAddress.lastName,
        line1: newAddress.line1,
        country: {
          name: newAddress.country.name,
          isocode: newAddress.country.isocode,
        },
        town: newAddress.town,
        line2: newAddress.line2,
        region: {
          isocode: newAddress?.region?.isocode,
          name: newAddress?.region?.name,
          countryIso: newAddress?.region?.countryIso,
        },
        postalCode: newAddress.postalCode,
        saveForFuture: this.isSaveAddress,
      };
      this.callSelectAddressApi(
        this.cartId,
        addressObj,
        'enduser',
        this.userType
      );
    }
  }
  get shippingAddress() {
    return this._shippingAddress;
  }
  endAdd: any;
  $enduserSubscription: Subscription;
  loading: boolean = false;
  errorMsg: string = '';
  $subscription: Subscription;
  checkoutMessages: any;
  endUserFlag: boolean = false;
  showSameAsShipping: boolean = false;
  isSaveAddress: boolean = false;
  cartId: any;
  currentCart: any;
  _CartType = CartType;
  cart: any;
  isChannelPartner: boolean;
  isBuyCommerceType: boolean;
  constructor(
    private launchDialogService: LaunchDialogService,
    private addressModelService: AddressModelService,
    private checkoutService: GuestBuyCheckoutService,
    private translate: TranslationService,
    private renderer: Renderer2,
    private activeCartFacade: ActiveCartFacade,
    private multiCartFacade: MultiCartFacade,
    private buyCheckoutService: BuyCheckoutService,
    private customerAccService: CustomerAccountService
  ) {
    this.isQuoteOrderConvertFlow = JSON.parse(
      sessionStorage.getItem('isQuoteToOrder')
    );
  }

  ngOnInit(): void {
    this.customerAccService.getCustomerUserType().subscribe((customerType) => {
      this.isChannelPartner = customerType === CustomerType.Type2;
    });
    this.getSelectedAddress();
    this.activeCartFacade.getActive().subscribe((cart: any) => {
      this.cartId = cart?.code;
      this.cart = cart;
      this.isBuyCommerceType = cart?.commerceType === CommerceTypes.BUY;
      this.checkForPlaceOrder();
    });
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res: any) => {
      message = res;
    });
    return message;
  }
  checkForPlaceOrder() {
    this.$subscription = this.checkoutService
      .getValidation()
      .subscribe((value) => {
        if (value && !this.endUserAddress) {
          if (this.isChannelPartner && this.cart?.cartType === CartType.Typ1) {
            this.checkEnduserAddress.emit(true);
          } else {
            this.errorMsg = this.getTranslatedText(
              'address-model.selectEndCustomerAdd'
            );
            window.scrollTo({ top: 350, behavior: 'smooth' });
            this.checkEnduserAddress.emit(false);
          }
          return;
        } else if (this.endUserAddress) {
          this.checkEnduserAddress.emit(true);
        } else if (
          !this.endUserAddress &&
          this.isChannelPartner &&
          this.cart?.cartType === CartType.Typ1
        ) {
          this.checkEnduserAddress.emit(true);
        } else if (value && this.endUserAddress) {
          this.checkEnduserAddress.emit(true);
        } else if (this.endUserAddress) {
          this.checkEnduserAddress.emit(true);
        } else {
          this.errorMsg = '';
        }
      });
  }

  getSelectedAddress() {
    this.$enduserSubscription = this.addressModelService
      .getAddress()
      .subscribe((value) => {
        if (value) {
          this.setEnduserAddress(value);
        }
      });
  }

  setEnduserAddress(data) {
    if (data.flag == 'enduser') {
      this.endUserAddress = data.res;
      this.checkEnduserAddress.emit(true);
      if (this.endUserAddress) this.errorMsg = '';
      this.addressUpdated.emit(this.endUserAddress);
      this.launchDialogService.closeDialog(undefined);
    }
  }

  openAddressModel() {
    this.cart$.subscribe((res) => (this.endAdd = res?.enduserAddress));
    const componentData = {
      userType: this.userType,
      endAdd: this.endAdd,
    };
    const addressDialog = this.launchDialogService.openDialog(
      DS_DIALOG.WAYGATE_ADDRESS_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (addressDialog) {
      addressDialog.pipe(take(1)).subscribe((value) => {});
    }
    this.addressModelService.setAddAddressFlag('enduser');
  }

  onSameAsShippingChange(event: any) {
    this.sameAsShipping = event.target.checked;
    if (this.sameAsShipping && this.shippingAddress) {
      const addressObj = {
        firstName: this.shippingAddress.firstName,
        companyName: this.shippingAddress.companyName,
        lastName: this.shippingAddress.lastName,
        line1: this.shippingAddress.line1,
        country: {
          name: this.shippingAddress.country.name,
          isocode: this.shippingAddress.country.isocode,
        },
        town: this.shippingAddress.town,
        line2: this.shippingAddress.line2,
        region: {
          isocode: this.shippingAddress?.region?.isocode,
          name: this.shippingAddress?.region?.name,
          countryIso: this.shippingAddress?.region?.countryIso,
        },
        postalCode: this.shippingAddress.postalCode,
        saveForFuture: this.isSaveAddress,
      };

      this.updateEndUserAddress(this.shippingAddress);
      this.callSelectAddressApi(
        this.cartId,
        addressObj,
        'enduser',
        this.userType
      );
    } else {
      this.endUserAddress = null;
      this.checkEnduserAddress.emit(false);
      this.openAddressModel();
    }
  }
  updateEndUserAddress(newAddress) {
    if (this.sameAsShipping && newAddress) {
      this.endUserAddress = { ...newAddress };
      this.checkEnduserAddress.emit(true);
      this.addressUpdated.emit(this.endUserAddress);
    }
  }
  callSelectAddressApi(
    cartId: string,
    addressObj: any,
    addressFor: string,
    userType: string
  ) {
    this.addressModelService
      .getAddressList(cartId)
      .subscribe((addressList: any) => {
        const existingAddress = addressList.addresses?.find(
          (address: any) =>
            address.line1 === addressObj.line1 &&
            address.postalCode === addressObj.postalCode &&
            address.country.isocode === addressObj.country.isocode
        );

        if (existingAddress) {
          addressObj.id = existingAddress.id;
        } else {
          this.addressModelService
            .addAddress(cartId, addressObj, addressFor)
            .subscribe((newAddress: any) => {
              addressObj.id = newAddress.id;
              this.updateEndUserAddress(newAddress);
              this.selectAddress(cartId, addressObj.id, addressFor, userType);
            });
          return;
        }

        this.selectAddress(cartId, addressObj.id, addressFor, userType);
      });
  }

  selectAddress(
    cartId: string,
    addressId: string,
    addressFor: string,
    userType: string
  ) {
    this.addressModelService
      .selectAddress(cartId, addressId, addressFor)
      .subscribe((res) => {
        this.addressModelService.setAddress({
          flag: addressFor,
          res: res,
        });
        if (userType) {
          this.multiCartFacade.loadCart({
            cartId: cartId,
            userId: userType,
            extraData: {
              active: true,
            },
          });
        }
        this.launchDialogService.closeDialog('address selected');
      });
  }
  get addressButtonLabel(): string {
    return this.endUserAddress
      ? this.getTranslatedText('address-model.changeAddress')
      : this.getTranslatedText('address-model.addAddress');
  }

  ngOnChanges() {
    if (
      this.endUserAddress &&
      (this.cartType == 'HYBRID' || this.cartType == 'FILM')
    ) {
      this.endUserFlag = true;
    } else {
      this.endUserFlag = false;
    }
    if (this.currentPage === 'CHECKOUT') {
      this.showSameAsShipping = true;
    } else {
      this.showSameAsShipping = false;
    }
  }

  onPoChange(ecaCode: string, event: Event, entryNumber: any) {
    const value = (event.target as HTMLInputElement).value;
    this.buyCheckoutService.setPo(ecaCode, value, entryNumber);
  }

  ngOnDestroy() {
    this.$subscription.unsubscribe();
    this.addressModelService.setAddAddressFlag(null);
    this.addressModelService.setAddress(null);
    this.$enduserSubscription.unsubscribe();
  }
}
