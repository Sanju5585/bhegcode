import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import {
  GlobalMessageService,
  GlobalMessageType,
  OCC_USER_ID_CURRENT,
  TranslationService,
} from '@spartacus/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { take } from 'rxjs/operators';
import { BuyCheckoutService } from '../../../checkout/buy-checkout/service/buy-checkout.service';
import { ProductCatelogService } from '../../../../core/product-catalog/services/product-catelog.service';
import { BreadcrumbService } from '../../../../shared/components/breadcrumb/breadcrumb.service';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { AddressModelService } from '../../../../shared/components/address-model/address-model.service';
import {
  SoldToAddress,
  EndUserAddress,
  DeliveryAddress,
  PayerDeliveryAddress,
} from '../../../../shared/models/address-models';
import { CommerceTypes } from '../../../../shared/models/commerceTypes.model';
@Component({
  standalone: false,
  selector: 'app-rma-checkoutdetails',
  templateUrl: './rma-checkoutdetails.component.html',
  styleUrls: ['./rma-checkoutdetails.component.scss'],
})
export class RmaCheckoutdetailsComponent implements OnInit, OnDestroy {
  constructor(
    private buyCheckoutService: BuyCheckoutService,
    private activeCartFacade: ActiveCartFacade,
    private multiCartFacade: MultiCartFacade,
    private router: Router,
    private productCatService: ProductCatelogService,
    private actions$: Actions,
    private breadcrumbService: BreadcrumbService,
    private translate: TranslationService,
    private globalMessageService: GlobalMessageService,
    private customerAccService: CustomerAccountService,
    private addressModelService: AddressModelService
  ) {
    sessionStorage.setItem('countRequest', 'first');
  }
  public isAccountCollapsed = false;
  public isShippingCollapsed = false;
  public isPayerCollapsed = false;
  public isbilltoaddressCollapsed = false;
  public isNotificationCollapsed = false;
  public isComplianceCollapsed = false;
  public isPaymentCollapsed = false;
  public isEndUserDetailsCollapsed = false;
  userAddressList$: Observable<any>;
  userAddressList: any;
  customerAccount: any;
  payerCustomerAccount: any;
  elementPosition: any;
  rmaSoldToAddress: SoldToAddress;
  rmaEndUserAddress: EndUserAddress;
  rmaShippingAddress: DeliveryAddress;
  rmaPayerAddress: PayerDeliveryAddress;
  paymentTerm: string;
  rmaCollectList = [];
  rmaPrePayAddList = [];
  inkoTerm: string;
  loadingFlag: boolean = false;
  complianceModel: any;
  shippingmodel: any;
  payermodel: any;
  notificationModel: any;
  paymentModel: any;
  rmaModel: any;
  cartId: any;
  businessEntity: any;
  locationList: any;
  returnList: any;
  paymentType: string;
  newCartSubscription: Subscription;
  currentFlag: boolean = true;
  rmaNumber;
  invoiceMail: any;
  invoiceConatactName: any;
  invoiceContactNum: any;
  orderAckMail: any;
  orderAckContactName: any;
  orderAckContactPhone: any;
  rmaData;
  any;
  agreeTerm: boolean = false;
  isSticky: boolean = false;
  isEnduserAddress: boolean = false;
  enduserTypeArray: any;
  endUserCategory: any;
  isRmaShippingAddressVal: boolean = false;
  isRmaPayerAddressVal: boolean = false;
  isRMANotificationVal: boolean = false;
  deliveryOption: string;
  cartTotal: any;
  isPayerDisabled: any;
  props: any;
  data: string;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }

  ngOnInit(): void {
    this.customerAccService.disableChangeAccount.next(false);
    this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
      this.cartId = cartId;
      if (
        this.cartId &&
        this.currentFlag &&
        sessionStorage.getItem('countRequest') == 'first'
      )
        this.getDefaultAddress();
      this.defaultDrpDwn();
      this.getUserAddressList();
    });
    const breadcrumbs = [{ label: 'Returns Cart', link: '/rma/cart' }];

    this.breadcrumbService.setBreadCrumbs(breadcrumbs);
    this.translate
      .translate('titles.checkoutpageTitle')
      .subscribe((res: string) =>
        this.breadcrumbService.setBreadcrumbTitle(res)
      );
  }
  ngOnDestroy() {
    this.newCartSubscription?.unsubscribe();
    this.customerAccService.disableChangeAccount.next(false);
  }
  defaultDrpDwn() {
    let drpDwnArr = [];
    drpDwnArr = this.rmaCollectList.map((val) => {
      return { label: val.name, value: val.code };
    });

    this.populateDrpDwn(drpDwnArr);
  }
  populateDrpDwn(itemList) {
    this.props = {
      itemGroups: [
        {
          items: itemList,
        },
      ],
    };
  }

  getDefaultAddress() {
    this.buyCheckoutService.bindDefaultAddress(this.cartId).subscribe(
      (data: any) => {
        this.loadingFlag = true;
        this.rmaSoldToAddress = data.defaultSoldToAddress;
        this.rmaEndUserAddress = data.defaultEndUserAddress;
        this.rmaShippingAddress = data.defaultShiptToAddress;
        this.rmaPayerAddress = data.payerAddress;
        this.paymentTerm = data?.paymentTrms?.name
          ? data?.paymentTrms?.name
          : data?.paymentTrms?.code;
        this.inkoTerm = data?.shipToIncotrmName + '-' + data?.shipToIncoterm2;
        this.rmaCollectList = data?.collectTypes;
        this.rmaPrePayAddList = data?.prepayAddTypes;
        this.businessEntity = data?.cartData?.entries[0]?.plantName;
        this.locationList = data?.locationList;
        this.returnList = data?.returnList;
        this.paymentType = data?.paymentTypeForm.paymentType;
        this.invoiceMail = data?.cartData?.invoiceEmail;
        this.customerAccount = data?.defaultSoldTo?.uid;
        this.payerCustomerAccount = data.payerAddress?.sapCustomerID;
        this.rmaData = data;
        this.deliveryOption = data.cartData?.deliveryOptions;
        this.orderAckMail = data.cartData?.orderConfirmation;
        this.orderAckContactName = data?.soaContact;
        this.orderAckContactPhone = data?.soaPhone;
        this.invoiceConatactName = data?.invoiceContact;
        this.invoiceContactNum = data?.invoicePhone;
        this.enduserTypeArray =
          data?.bhgeEndUserAddressForm?.endUserTypes?.entry;
        this.cartTotal = data?.totalPrice?.value;
        this.buyCheckoutService.sendCartData({
          totalItems: data.totalItems,
          totalEstimate: data.totalPrice.formattedValue,
        });
      },
      (error) => {
        this.loadingFlag = true;
      }
    );
  }
  getUserAddressList() {
    this.userAddressList$ = this.addressModelService.getPayerAddressList(
      this.cartId
    );
    this.userAddressList$.subscribe((res) => {
      this.userAddressList = res;
      if (res.addresses.length == 0) {
        this.isPayerDisabled = false;
      } else {
        this.isPayerDisabled = true;
      }
    });
  }

  getEnduserType(value) {
    this.endUserCategory = value;
  }

  isChecked(value) {
    this.agreeTerm = value;
  }

  checkEnduserAddress(value) {
    this.isEnduserAddress = value;
  }

  getNotificationInfo(value) {
    this.notificationModel = value;
  }

  getShippingInfo(value) {
    this.shippingmodel = value;
  }

  getPayerInfo(value) {
    this.payermodel = value;
  }

  getPaymentInfo(value) {
    this.paymentModel = value.checkoutpayment;
    this.rmaModel = value.rmaPayment;
  }

  checkRMAShippingAddressVal(value) {
    this.isRmaShippingAddressVal = value;
  }

  checkRMAPayerAddressVal(value) {
    this.isRmaPayerAddressVal = value;
  }

  checkRMANotificationVal(value) {
    this.isRMANotificationVal = value;
  }

  getComplianceInfo(value) {
    this.complianceModel = value;

    if (
      this.notificationModel &&
      this.paymentModel &&
      this.complianceModel &&
      this.shippingmodel
    ) {
      if (this.agreeTerm && this.isEnduserAddress && this.endUserCategory) {
        this.loadingFlag = false;
        let param = {
          checkoutDetails: {
            ...this.shippingmodel,
            ...this.notificationModel,
            ...this.endUserCategory,
          },
          paymentType: this.paymentModel,
          placeOrder: this.complianceModel,
          returnPOList: this.rmaModel,
        };
        this.buyCheckoutService
          .placeOrder(this.cartId, param)
          .pipe(take(1))
          .subscribe(
            (code) => {
              if (code) {
                this.rmaNumber = code;
                this.router.navigate(['/rma-confirmation', this.rmaNumber]);
                this.buyCheckoutService.sendData(code);
                sessionStorage.setItem('countRequest', 'second');
                /* this.router.navigate(['/rma-confirmation']);
              this.loadingFlag = true; */
                this.newCartSubscription = this.productCatService
                  .createCartWithType(
                    OCC_USER_ID_CURRENT,
                    CommerceTypes.RETURNS
                  )
                  .subscribe((res) => {
                    if (res) {
                      this.currentFlag = false;
                      sessionStorage.setItem('countRequest', 'second');
                      // this.router.navigate(['/rma-confirmation', this.rmaNumber]);
                      this.loadingFlag = true;
                    } else {
                      this.loadingFlag = true;
                    }
                  });
              }
            },
            (error) => {
              this.globalMessageService.remove(
                GlobalMessageType.MSG_TYPE_ERROR
              );
              this.data = 'true';
              this.loadingFlag = true;
            }
          );
      }
    }
  }
}
