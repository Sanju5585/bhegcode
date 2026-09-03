import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BuyCheckoutService } from '../service/buy-checkout.service';
import moment from 'moment';
import { TranslationService } from '@spartacus/core';
import { ActivatedRoute } from '@angular/router';
import { SnapPayPaymentInfo } from '../buy-checkout.model';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { AddressModelService } from '../../../../shared/components/address-model/address-model.service';
import { BreadcrumbService } from '../../../../shared/components/breadcrumb/breadcrumb.service';
@Component({
  standalone: false,
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {
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
  constructor(
    private buycheckoutService: BuyCheckoutService,
    private translate: TranslationService,
    private activeRoute: ActivatedRoute,
    private breadCrumbService: BreadcrumbService,
    private customerAccService: CustomerAccountService,
    private addressModelService: AddressModelService,
    private activeCartFacade: ActiveCartFacade,
    private launchDialogService: LaunchDialogService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
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
  }
  openSaveCardPopup() {
    const saveModal = this.launchDialogService.openDialog(
      DS_DIALOG.SAVE_MODAL,
      undefined,
      undefined,
      {}
    );
    if (saveModal) {
      saveModal.pipe(take(1)).subscribe((value) => {
        if (value) {
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
            });
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
          this.setRequestDate(this.data?.ordersList);
        },
        (error) => {}
      );
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
}
@Component({
  standalone: false,
  selector: 'save-card',
  templateUrl: './save-card.component.html',
})
export class SaveModalComponent {
  hideYes = true;
  payInfo: any;
  orderCode: string;
  reason: string;
  constructor(
    private launchDialogService: LaunchDialogService,
    private buyCheckoutService: BuyCheckoutService
  ) {
    this.buyCheckoutService.receiveData().subscribe((data) => {
      this.orderCode = data?.code;
      this.payInfo = data?.cardPayInfo;
    });
  }
  change(event: any) {
    if (event.target.checked === true) {
      this.hideYes = false;
    }

    if (event.target.checked === false) {
      this.hideYes = true;
    }
  }

  closeForm(reason?) {
    this.close('close');
  }

  saveCard(reason?) {
    this.close('save');
  }

  close(reason: string) {
    this.reason = reason;
    this.launchDialogService.closeDialog(reason);
  }
}
