import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import moment from 'moment';
import { TranslationService } from '@spartacus/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { CustomerAccountService } from '../../../../../core/customer-account/customer-account.service';
import { AddressModelService } from '../../../../../shared/components/address-model/address-model.service';
import { BreadcrumbService } from '../../../../../shared/components/breadcrumb/breadcrumb.service';
import { BuyCheckoutService } from '../../../../checkout/buy-checkout/service/buy-checkout.service';
import {
  Ecommerce,
  EcommerceItem,
  GTMCartType,
} from '../../../../../shared/models/googleTagManager.model';
import {
  GtmEvents,
  ItemListTypeEnum,
  PaymentTypeEnum,
} from '../../../../../shared/enums/gtm.enum';
import { GoogleTagManagerService } from '../../../../../shared/services/gtm.service';

@Component({
  standalone: false,
  selector: 'app-rma-checkout-confirmation',
  templateUrl: './rma-checkout-confirmation.component.html',
  styleUrls: ['./rma-checkout-confirmation.component.scss'],
})
export class RmaCheckoutConfirmationComponent implements OnInit {
  istableCollapse: boolean = false;
  $subscription: Subscription;
  data: any;
  cartId;
  orderCode: string;
  requestTotal: any;
  orderconfirm: string;
  userAddressList$: Observable<any>;
  userAddressList: any;
  isPayerDisabled: boolean = false;
  currentCartSubscription: Subscription;

  private getActiveRoute: Subscription;
  productLine: any;
  isEndUser: string;
  constructor(
    private buycheckoutService: BuyCheckoutService,
    private translate: TranslationService,
    private breadCrumbService: BreadcrumbService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private customerAccService: CustomerAccountService,
    private addressModelService: AddressModelService,
    private activeCartFacade: ActiveCartFacade,
    private gtmService: GoogleTagManagerService
  ) {}

  ngOnInit(): void {
    this.currentCartSubscription = this.activeCartFacade
      .getActiveCartId()
      .subscribe((cartId) => {
        this.cartId = cartId;
        this.getUserAddressList();
      });
    this.customerAccService.disableChangeAccount.next(false);
    this.getOrderCode();
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('rma-confirmation.rmaConfirmTitle')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
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

  getOrderCode() {
    // this.$subscription = this.buycheckoutService
    //   .receiveData()
    //   .subscribe((value) => {
    //     if (value) {
    //       this.orderCode = value;
    //       this.orderConfirmationData(value);
    //     }
    //   });
    // if (!this.orderCode) {
    this.getActiveRoute = this.activeRoute.params.subscribe((params) => {
      this.orderCode = params['id'];
      this.orderConfirmationData(this.orderCode);
    });
    // }
  }

  orderConfirmationData(orderCode) {
    this.buycheckoutService.getOrderConfirmationData(orderCode).subscribe(
      (res: any) => {
        this.data = res;
        this.gtmPurchaseEvent(this.data.ordersList[0], res?.currency);
        this.isEndUser = this.data?.ordersList[0].enduserAddress;
        this.orderconfirm = moment(this.data.ordersList[0].created).format(
          'MMM Do YYYY, h:mm a'
        );
      },
      (error) => {}
    );
  }

  gtmPurchaseEvent(rma, currency) {
    let producitem: EcommerceItem[] = [];

    rma?.entries.forEach((entry, index) => {
      producitem.push(this.populateProduct(entry, index));
    });
    let purchaseEcommerceEcommerce: Ecommerce = {
      transaction_id: rma?.returnNumber,
      value: rma?.totalPrice.value,
      tax: rma?.totalTax.value,
      currency: currency,
      payment_type: PaymentTypeEnum.PO,
      items: producitem,
    };
    let purchaseDataLayer = {
      store: this.gtmService.getItemBrand(),
      ecommerce: purchaseEcommerceEcommerce,
      event: GtmEvents.Purchase,
      commerceType: GTMCartType.RMA_CART,
      cartType: rma?.cartType,
    };
    this.gtmService.sendEvent(purchaseDataLayer);
  }
  populateProduct(entry, index): EcommerceItem {
    let product: EcommerceItem;
    product = {
      item_id: entry?.product?.code,
      item_name: entry?.product?.name,
      discount: entry?.discountPercentage ? +entry?.discountPercentage : '',
      index: index,
      item_brand: this.gtmService.getItemBrand(),
      item_list_id: ItemListTypeEnum.Checkoutpage,
      item_list_name: ItemListTypeEnum.Checkoutpage,
      price: entry.discountPrice,
      quantity: entry?.quantity || 1,
    };
    return product;
  }
  goToReturns() {
    this.router.navigate(['/', this.productLine, 'my-returns']);
  }

  getRmaNumbers(orderList) {
    let orderNums = [];
    orderList.forEach((el) => {
      orderNums.push(el.returnNumber);
    });
    return orderNums;
  }

  ngOnDestroy() {
    this.customerAccService.disableChangeAccount.next(false);
    if (this.$subscription) this.$subscription.unsubscribe();
    if (this.getActiveRoute) this.getActiveRoute.unsubscribe();
  }
}
