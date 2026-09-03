import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';

import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';

import moment from 'moment';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { DateRangePickerComponent } from '../../../../shared/components/date-range-picker/date-range-picker.component';
import { CartType } from '../../../../shared/models/cartType.models';
import { OrderType } from '../../../../shared/models/status/status.model';

import { Item } from '../cart-item/cart-item.component';
import { SharedCartService } from '../shared-cart.service';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { CartActions } from '@spartacus/cart/base/core';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { REGULAR_PATTERN } from '../../../../core/generic-validator/regular-expressions';

@Component({
  standalone: false,
  selector: 'ds-cart-action',
  templateUrl: './cart-action.component.html',
  styleUrls: ['./cart-action.component.scss'],
})
export class CartActionComponent implements OnInit {
  userId = 'current';
  cartId$: Observable<string> = this.activeCartFacade.getActiveCartId();
  orderType = 'For Resale';
  cartId: string;
  public cartType = CartType;

  @ViewChild('consShipTrue')
  consShipTrue;

  @ViewChild('consShipFalse')
  consShipFalse;

  @ViewChild('applyAllDatePicker')
  applyAllDatePicker: DateRangePickerComponent;

  @Input()
  userType = 'current';

  @Input()
  cart$: Observable<any>;

  @Output()
  scrollToEntry: EventEmitter<any> = new EventEmitter();

  @Output()
  updateCart: EventEmitter<any> = new EventEmitter();
  cartSubscription: any;

  isPartialSubscription: any;
  defaultHeaderDateSubscription: any;

  cart;

  items: Item[];

  minDate = new Date();
  defaultHeaderDate;
  rfqType = 'Resale';
  orderTypes: any;
  orderTypes$: Observable<any>;
  soldToAddress$: Observable<any>;
  requestedShipDateString = '';
  showShipDateLoader = false;
  $subscription: Subscription;
  consShipDateApplyError = false;
  proceedClicked: boolean = false;
  showCheckAvalabilityAction: boolean = false;
  commissionEligibleDisplay: boolean = false;
  commissionModel: boolean = false;
  soldToAddress = null;
  orderTypeEnum = OrderType;
  orderTypeValue: any = 'Resale';
  quoteCartType: any = '';
  activeCartSubscription: Subscription;
  checkoutGetCartSubscription: Subscription;
  cartResponse: any;
  soldToAddresses: any;
  selectedAddress: any = [];

  guestEmailAddressForm: FormGroup;
  guestEmailSubscription: Subscription;
  emailAddress = '';
  confirmEmailAddress = '';
  error = {
    emailAddress: '',
    confirmEmail: '',
  };
  endAdd: any;

  constructor(
    private activeCartFacade: ActiveCartFacade,
    private multiCartFacade: MultiCartFacade,
    private globalMessageService: GlobalMessageService,
    private launchDialogService: LaunchDialogService,

    private cRef: ChangeDetectorRef,
    private sharedCartService: SharedCartService,
    private actions$: Actions,
    private formBuilder: FormBuilder,
    private translate: TranslationService
  ) {
    this.selectedAddress = {
      firstName: 'Arnesto Borges',
      companyName: 'Company Name',
      line1: 'Industrial park road 50, Lewistown, Pennsylvania,',
      country: 'United states,',
      postalCode: '17044-9312',
    };
    this.sharedCartService.setGuestEmailAddress('');
  }

  ngOnInit(): void {
    this.cart$.subscribe((res) => (this.endAdd = res.enduserAddress));
    this.sharedCartService.getvalidation().subscribe((data) => {
      this.showCheckAvalabilityAction = data;
    });
    this.activeCartSubscription = this.cartId$.subscribe(
      (success) => {
        if (success) {
          this.cartId = success;
        }
      },
      (error) => {
        this.globalMessageService.add(
          error,
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
    );

    // guest email address
    this.guestEmailAddressForm = this.formBuilder.group({});

    // validate from order summery page
    this.guestEmailSubscription =
      this.sharedCartService.currentMessage.subscribe((message) => {
        if (message === 'validateEmail') {
          this.onSubmit();
        }
      });
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  // submit guest email address
  onSubmit() {
    if (!this.validateError()) {
      return;
    }
    this.sharedCartService.setGuestEmailAddress(
      this.emailAddress.toLowerCase()
    );
  }

  // get values in onchange
  onChange(e, field) {
    if (field === 'email') {
      this.error.emailAddress = '';
      this.emailAddress = e.target.value;
      if (e.target.value && !e.target.value.match(REGULAR_PATTERN.commonEmailRegx)) {
        this.error.emailAddress = this.getTranslatedText(
          'buyCart.invalidEmailAddress'
        );
      } else {
        this.error.emailAddress = '';
      }
    } else if (field === 'confirmEmail') {
      this.error.confirmEmail = '';
      this.confirmEmailAddress = e.target.value;
    }
  }

  // validate form error
  validateError() {
    if (this.emailAddress === '') {
      this.error.emailAddress = this.getTranslatedText('buyCart.emailReq');
      return false;
    } else if (this.confirmEmailAddress === '') {
      this.error.confirmEmail = this.getTranslatedText(
        'buyCart.confirmEmailReq'
      );
      return false;
    } else if (this.emailAddress !== this.confirmEmailAddress) {
      this.error.confirmEmail = this.getTranslatedText('buyCart.matchEmails');
      return false;
    } else if (this.confirmEmailAddress === '') {
      this.error.confirmEmail = this.getTranslatedText('buyCart.confirmEmailReq');
      return false;
    } else if (this.emailAddress !== this.confirmEmailAddress) {
      this.error.confirmEmail = this.getTranslatedText('buyCart.emailAndAddressMatch');
      return false;
    } else {
      return true;
    }
  }

  ngOnDestroy(): void {
    this.emailAddress = '';
    this.cartSubscription?.unsubscribe();
    this.isPartialSubscription?.unsubscribe();
    if (this.defaultHeaderDateSubscription) {
      this.defaultHeaderDateSubscription.unsubscribe();
    }
    if (this.activeCartSubscription) {
      this.activeCartSubscription.unsubscribe();
    }
    if (this.checkoutGetCartSubscription) {
      this.checkoutGetCartSubscription.unsubscribe();
    }
    if (this.guestEmailSubscription) {
    }
  }
  onDateChange(e) {
    this.requestedShipDateString = moment(e).format('YYYY/MM/DD');
  }

  applyReqShipDate(shipDateParam?) {
    const reqShipDate = shipDateParam
      ? shipDateParam
      : this.requestedShipDateString;
  }

  sendOrderType(event, pageLoad?) {
    if (!pageLoad) {
    }
  }

  changeShippingType(event) {
    const shippingType = event.target.value || 'partial';
    if (shippingType == 'complete') {
      this.cart.partialShipping = false;
    } else {
      this.cart.partialShipping = true;
    }
  }

  changeConsShipment(event) {
    const consValue = event.target.value;
    this.cart.isConsolidatedShipment = JSON.parse(consValue);

    let consShipEntryErrors = [];

    if (consValue == 'true') {
      for (const entry of this.items) {
      }
      if (consShipEntryErrors.length > 0) {
        this.cart.isConsolidatedShipment = !this.cart.isConsolidatedShipment;

        this.scrollToEntry.emit(consShipEntryErrors[0]);
        this.consShipTrue.nativeElement.checked =
          !this.consShipTrue.nativeElement.checked;
        this.consShipFalse.nativeElement.checked =
          !this.consShipFalse.nativeElement.checked;
        return;
      }
    } else {
      this.consShipDateApplyError = false;
      consShipEntryErrors = [];
    }
  }

  getEarliestShipDate(cartData) {
    const dates = [];
    for (const entry of cartData.entries) {
      dates.push(entry.customerRequestedDate);
    }
    const moments = dates.map((d) => moment(d));
    return moment(moment.max(moments)).format('YYYY/MM/DD');
  }

  updateSalesOrderCommmission(event) {
    if (this.commissionModel == false) {
      this.soldToAddress = null;
    }
  }

  deleteCart() {
    this.multiCartFacade.deleteCart(this.cartId, this.userType);
  }
  setSoldToAddress(event) {}

  selectAddress() {
    this.cart$.subscribe((res) => (this.endAdd = res.enduserAddress));
    const componentData = {
      userType: this.userType,
      endAdd: this.endAdd,
    };
    const addressModal = this.launchDialogService.openDialog(
      DS_DIALOG.ADDRESS_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (addressModal) {
      addressModal.pipe(take(1)).subscribe((value) => {});
    }
  }

  handleChange(event) {
    if (event.target.value == "'Partial'") {
      const Obj = {
        endCustomerNumber: null,
        guestConfirmEmail: null,
        guestEmail: null,
        isEndCustomerChanged: false,
        shipmentMethod: false,
      };
      this.sharedCartService
        .updateShipmentType(this.cartId, Obj)
        .subscribe((res) => {
          this.multiCartFacade.loadCart({
            cartId: this.cartId,
            userId: this.userType,
            extraData: {
              active: true,
            },
          });
          this.actions$
            .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
            .pipe(take(1))
            .subscribe(
              (r) => {
                this.updateCart.emit(true);
                this.cRef.detectChanges();
              },
              (error) => {
                this.globalMessageService.add(
                  error,
                  GlobalMessageType.MSG_TYPE_ERROR,
                  5000
                );
                window.scrollTo(0, 0);
              }
            );
        });
    } else {
      const Obj = {
        endCustomerNumber: null,
        guestConfirmEmail: null,
        guestEmail: null,
        isEndCustomerChanged: false,
        shipmentMethod: true,
      };
      this.sharedCartService
        .updateShipmentType(this.cartId, Obj)
        .subscribe((res) => {
          this.multiCartFacade.loadCart({
            cartId: this.cartId,
            userId: this.userType,
            extraData: {
              active: true,
            },
          });
          this.actions$
            .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
            .pipe(take(1))
            .subscribe(
              (r) => {
                this.updateCart.emit(true);
                this.cRef.detectChanges();
              },
              (error) => {
                this.globalMessageService.add(
                  error,
                  GlobalMessageType.MSG_TYPE_ERROR,
                  5000
                );
                window.scrollTo(0, 0);
              }
            );
        });
    }
  }
}
