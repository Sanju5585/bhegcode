import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  OnInit,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import moment from 'moment';
import { TranslationService } from '@spartacus/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import { CustomerAccountService } from '../../../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../../../core/dialog/dialog.config';
import { AddressModelService } from '../../../../../shared/components/address-model/address-model.service';
import { BreadcrumbService } from '../../../../../shared/components/breadcrumb/breadcrumb.service';
import { SnapPayPaymentInfo } from '../../../../checkout/buy-checkout/buy-checkout.model';
import { BuyCheckoutService } from '../../../../checkout/buy-checkout/service/buy-checkout.service';
import { CustomerType } from '../../../../../shared/models/customerType.model';
import { AllProductLine } from '../../../../../shared/enums/availableProductList.enum';
import { CartType } from '../../../../../shared/models/cartType.models';

@Component({
  standalone: false,
  selector: 'app-waygate-order-confirmation',
  templateUrl: './waygate-order-confirmation.component.html',
  styleUrls: ['./waygate-order-confirmation.component.scss'],
})
export class WaygateOrderConfirmationComponent {
  isAccountCollapsed: boolean = false;
  isOrderdetailCollapsed: boolean = false;
  data: any;
  orderCode: string;
  $subscription: Subscription;
  salesAreaCode: string;
  orderconfirm: string;
  oderconfirmdate: string;
  cartId;
  orderCodes = [];
  requestFilmDt;
  requestNonFilmDt;
  dateFlag: boolean = false;
  cartType;
  private getActiveRoute: Subscription;
  private $cartType: Subscription;
  userAddressList$: Observable<any>;
  userAddressList: any;
  isPayerDisabled: boolean = false;
  currentCartSubscription: Subscription;
  cardPaymentInfo = new SnapPayPaymentInfo();
  showOrderConfirmation = true;
  showCardSaved = false;
  showCardNotSaved = false;
  isDialogOpen: boolean = false;
  productLine: string;
  isEndUserType: boolean;
  allproductline = AllProductLine;
  _CartType = CartType;
  isChannelPartner: boolean;
  constructor(
    private buycheckoutService: BuyCheckoutService,
    private translate: TranslationService,
    private activeRoute: ActivatedRoute,
    private breadCrumbService: BreadcrumbService,
    private customerAccService: CustomerAccountService,
    private addressModelService: AddressModelService,
    private activeCartFacade: ActiveCartFacade,
    private launchDialogService: LaunchDialogService,
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerAccService.getCustomerUserType().subscribe((userType) => {
      this.isEndUserType = userType !== CustomerType.Type1;
      this.isChannelPartner = userType === CustomerType.Type2;
    });
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.currentCartSubscription = this.activeCartFacade
      .getActiveCartId()
      .subscribe((cartId) => {
        this.cartId = cartId;
        this.getUserAddressList();
      });
    this.customerAccService.disableChangeAccount.next(false);
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('checkoutConfirmation.pageTitle')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    this.getOrderCode();
    sessionStorage.setItem('isQuoteToOrder', 'false');
  }
  cleanFormattedAddress(addr: any) {
  if (!addr?.formattedAddress) return '';
  return addr.formattedAddress
    .split(',')
    .map(part => part.trim())
    .filter(part => part !== '')
    .join(', ');
}
  openSaveCardPopup() {
    if (this.isDialogOpen) {
      return;
    }
    this.isDialogOpen = true;
    const saveModal = this.launchDialogService.openDialog(
      DS_DIALOG.SAVE_MODAL,
      undefined,
      undefined,
      {}
    );
    if (saveModal) {
      saveModal.pipe(take(1)).subscribe((componentRef: ComponentRef<any>) => {
        const instance = componentRef.instance;
        const reason = instance?.reason;
        if (reason === 'save') {
          this.buycheckoutService
            .saveCreditCard(this.cardPaymentInfo, this.orderCode)
            .subscribe((res: any) => {
              if (res === 'success') {
                this.showOrderConfirmation = false;
                this.showCardSaved = true;
                this.showCardNotSaved = false;
              } else if (res === 'error') {
                this.showOrderConfirmation = false;
                this.showCardSaved = false;
                this.showCardNotSaved = true;
              }
              this.cdRef.detectChanges();
              this.isDialogOpen = false;
            });
        } else if (reason === 'close') {
          // Handle the close action if needed
          this.showOrderConfirmation = true;
          this.showCardSaved = false;
          this.showCardNotSaved = false;
          this.isDialogOpen = false;
        } else {
          this.isDialogOpen = false;
        }
      });
    }
  }
  getOrderCode() {
    this.$subscription = this.buycheckoutService
      .receiveData()
      .subscribe((value) => {
        if (value) {
          this.orderCode = value.code;
          this.cardPaymentInfo = value?.cardPayInfo;
          if (this.orderCode.includes('|')) {
            this.orderCodes = this.orderCode.split('|');
          } else {
            this.orderCodes[0] = this.orderCode;
          }
          this.cartId = value.cartId;
          this.salesAreaCode = this.buycheckoutService.getGuestSalesArea();
          this.orderConfirmationData(this.orderCode, this.salesAreaCode);
        }
      });
    if (!this.orderCode) {
      this.getActiveRoute = this.activeRoute.params.subscribe((params) => {
        this.orderCode = params['id'];
        if (this.orderCode.includes('|')) {
          this.orderCodes = this.orderCode.split('|');
        } else {
          this.orderCodes[0] = this.orderCode;
        }
        this.orderConfirmationData(this.orderCode, this.salesAreaCode);
      });
    }
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

  orderConfirmationData(orderCode, salesAreaCode) {
    this.buycheckoutService
      .getOrderConfirmationData(orderCode, salesAreaCode)
      .subscribe(
        (res) => {
          this.data = res ? res : [];
          if (this.data?.isCardExist === false) {
            this.openSaveCardPopup();
          }
          this.orderconfirm = moment(this.data?.ordersList[0]?.created).format(
            'MMM Do YYYY, h:mm a'
          );
          let invoiceEmailValue = this.data.ordersList[0].invoiceEmail;
          this.data.ordersList[0].invoiceEmail = this.decodeHtml(invoiceEmailValue);
          let orderEmailValue = this.data.ordersList[0].orderConfirmation;
          this.data.ordersList[0].orderConfirmation = this.decodeHtml(orderEmailValue);
          this.setRequestDate(this.data?.ordersList);
        },
        (error) => {}
      );
  }

   decodeHtml(html: string): string {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  setRequestDate(data) {
    if (sessionStorage.getItem('cartType') == 'HYBRID') {
      this.dateFlag = true;
    }

    data?.forEach((element) => {
      if (element?.requestedHdrDeliveryDateFilm) {
        this.requestFilmDt = element?.requestedHdrDeliveryDateFilm;
      }
      if (element?.requestedHdrDeliveryDate) {
        this.requestNonFilmDt = element?.requestedHdrDeliveryDate;
      }
    });
  }

  ngOnDestroy(): void {
    this.customerAccService.disableChangeAccount.next(false);
    if (this.getActiveRoute) {
      this.getActiveRoute.unsubscribe();
    }
  }

  getPositiveSilverClause(value) {
    if (value) {
      return Math.abs(value).toFixed(2);
    }
    return 0;
  }
  goToOrders() {
    this.router.navigate(['waygate/my-orders']);
  }
  getEmailLIst(emails) {
    return emails.split(/[,;]/);
  }
}
