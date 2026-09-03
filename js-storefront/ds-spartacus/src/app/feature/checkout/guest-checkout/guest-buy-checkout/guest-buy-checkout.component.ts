import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { OCC_USER_ID_ANONYMOUS, TranslationService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { BuyCheckoutService } from '../../buy-checkout/service/buy-checkout.service';
import {
  CheckoutDetailModel,
  CheckoutPaymentModel,
  PlaceorderModel,
} from '../guest-buy.model';
import { GuestBuyCheckoutService } from '../services/guest-buy-checkout.service';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { environment } from '../../../../../environments/environment';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { ProductCatelogService } from '../../../../core/product-catalog/services/product-catelog.service';
import { BreadcrumbService } from '../../../../shared/components/breadcrumb/breadcrumb.service';
import { CommerceTypes } from '../../../../shared/models/commerceTypes.model';

@Component({
  standalone: false,
  selector: 'ds-guest-buy-checkout',
  templateUrl: './guest-buy-checkout.component.html',
  styleUrls: ['./guest-buy-checkout.component.scss'],
})
export class GuestBuyCheckoutComponent implements OnInit {
  public isShippingCollapsed = false;
  public isAccountCollapsed = false;
  public isEndUserDetailsCollapsed = false;
  public isPaymentCollapsed = false;
  public isNotificationCollapsed = false;
  public isComplianceCollapsed = false;
  loadingFlag: boolean = false;
  countriesList$: Observable<any>;
  checkoutData: any;
  enduserArray: any = [];
  paymentTerms: any;
  incoTerms: any;
  newCartSubscription: Subscription;
  placeorderModel: PlaceorderModel;
  checkoutDetailModel: CheckoutDetailModel;
  checkoutPaymentModel: CheckoutPaymentModel;
  customerData: any;
  shippingData: any;
  endUserData: any;
  notificationData: any;
  paymentData: any;
  complianceData: any;
  activeSalesArea: any;
  isShippingVal: boolean = false;
  isNotificationVal: boolean = false;
  constructor(
    private guestCheckoutService: GuestBuyCheckoutService,
    private buyCheckoutService: BuyCheckoutService,
    private custAccService: CustomerAccountService,
    private activeCartFacade: ActiveCartFacade,
    private router: Router,
    private productCatService: ProductCatelogService,
    private breadCrumbService: BreadcrumbService,
    private translate: TranslationService
  ) {
    this.placeorderModel = new PlaceorderModel();
    this.checkoutDetailModel = new CheckoutDetailModel();
    this.checkoutPaymentModel = new CheckoutPaymentModel();
    sessionStorage.setItem('count', 'first');
  }

  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }

  userId: string = 'anonymous';
  activeCartId: string;

  ngOnInit(): void {
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('titles.checkoutpageTitle')
      .subscribe((res: string) => {
        this.breadCrumbService.setBreadcrumbTitle(res);
      });
    this.loadingFlag = true;
    this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
      const activeSalesArea =
        this.custAccService.getGuestActiveSalesAreaFromStorage();
      this.activeSalesArea = activeSalesArea.salesAreaId;
      this.activeCartId = cartId;
      if (
        this.activeCartId != null &&
        sessionStorage.getItem('count') == 'first'
      ) {
        this.guestCheckoutService
          .getCheckoutData(this.userId, this.activeCartId, this.activeSalesArea)
          .subscribe(
            (success: any) => {
              this.checkoutData = success;
              this.enduserArray =
                this.checkoutData.bhgeEndUserAddressForm.endUserTypes.entry;
              this.guestCheckoutService.setEndUserCategory(this.enduserArray);
              this.paymentTerms = this.checkoutData.defaultSoldTo.paymentTerms;
              this.incoTerms =
                this.checkoutData.shipToIncoterm1 +
                '-' +
                this.checkoutData.shipToIncoterm2;
              // this.buyCheckoutService.sendCartData({
              //   totalItems: this.checkoutData.totalItems,
              //   totalEstimate: this.checkoutData.totalPrice.formattedValue,
              // });
              this.buyCheckoutService.sendCartData({
                totalItems: success?.totalItems,
                totalEstimate: success?.totalPrice?.formattedValue,
                totalValue: success?.totalPrice?.value,
                totalDiscount: success?.cartData?.yourPriceDiscount
                  ? success.cartData.yourPriceDiscount
                  : '',
                totalSilverClausePrice: success?.cartData?.silverClauseTotal
                  ? success.cartData.silverClauseTotal
                  : '',
                cartData: success.cartData,
              });
              this.countriesList$ = this.guestCheckoutService.getCountries(
                this.userId,
                this.activeCartId
              );
              this.loadingFlag = false;
            },
            (error) => {
              this.loadingFlag = true;
            }
          );
      }
    });
  }

  customerDetails(data) {
    this.customerData = data;
    this.checkoutDetailModel.alternateContactName =
      data.firstName + ' ' + data.lastName;
  }

  shippingDetails(data) {
    this.shippingData = data.shippingAddress;
    this.checkoutDetailModel.shipToContactName =
      data.shippingOrder.shipContactName;
    this.checkoutDetailModel.shipToContactPhone =
      data.shippingOrder.shipContactNo;
    this.checkoutDetailModel.shipNotificationEmail =
      data.shippingOrder.shipNotificationEmail;
    this.checkoutDetailModel.shipDeliveryPointOT =
      data.shippingOrder.deliveryPoint;
    this.checkoutDetailModel.notes = data.shippingOrder.shippingRemarks;
  }
  endUserDetails(data) {
    this.endUserData = data.endUserAddress;
    this.checkoutDetailModel.endUserCategory = data.endUserCategory;
  }
  notificationDetails(data) {
    this.checkoutDetailModel.invEmail = data.invoiceMail;
    this.checkoutDetailModel.orderAckMail = data.orderAck;
  }

  paymentDetails(data) {
    this.checkoutPaymentModel.paymentType = data.paymentType;
    this.checkoutPaymentModel.purchaseOrderNumber = data.purchaseOrderNumber;
  }
  complianceDetails(data) {
    this.placeorderModel.govtAgencyFlagVal = data.govtAgencyFlagVal;
    this.placeorderModel.isBuyerFlagVal = data.isBuyerFlagVal;
    this.placeorderModel.nuclearOpportFlagVal = data.nuclearOpportFlagVal;
    this.placeorderModel.planToExportFlagVal = data.planToExportFlagVal;
    this.placeorderModel.exportAddress = data.exportAddress;
  }
  shippingVal(value) {
    this.isShippingVal = value;
  }
  notificationVal(value) {
    this.isNotificationVal = value;
  }

  placeOrderDetails() {
    if (this.isShippingVal && this.isNotificationVal) {
      this.placeorderModel.termsCheck = true;
      this.placeorderModel.replenishmentOrder = false;
      this.loadingFlag = true;
      this.guestCheckoutService
        .postSoldToAddress(this.userId, this.activeCartId, this.customerData)
        .subscribe(
          (success) => {},
          (error) => {}
        );
      this.guestCheckoutService
        .postShippingAddress(this.userId, this.activeCartId, this.shippingData)
        .subscribe(
          (success) => {},
          (error) => {}
        );
      this.guestCheckoutService
        .postEndUserAddress(this.userId, this.activeCartId, this.endUserData)
        .subscribe(
          (success) => {},
          (error) => {}
        );

      let param = {
        checkoutDetails: this.checkoutDetailModel,
        paymentType: this.checkoutPaymentModel,
        placeOrder: this.placeorderModel,
      };

      grecaptcha.ready(() => {
        grecaptcha
          .execute(environment.siteKey, { action: '' })
          .then((token) => {
            this.placeorderModel.googleCaptcha = token;
            this.guestPlaceOrder(param);
          });
      });
    }
  }

  guestPlaceOrder(param) {
    this.guestCheckoutService
      .postPlaceOrder(this.userId, this.activeCartId, param)
      .subscribe(
        (success) => {
          if (success) {
            this.buyCheckoutService.sendData({ code: success, cartId: '' });
            this.buyCheckoutService.setGuestSalesArea(this.activeSalesArea);
            this.router.navigate(['/order-confirmation', success]);
            sessionStorage.setItem('count', 'second');
            this.newCartSubscription = this.productCatService
              .createCartWithType(OCC_USER_ID_ANONYMOUS, CommerceTypes.BUY)
              .subscribe((res) => {
                if (res) {
                } else {
                  this.loadingFlag = true;
                }
              });
          }
        },

        (error) => {
          this.loadingFlag = true;
        }
      );
  }

  ngOnDestroy(): void {
    this.newCartSubscription?.unsubscribe();
  }
}
