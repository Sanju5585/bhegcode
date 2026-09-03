import { Component, EventEmitter, Input, Output } from '@angular/core';

import { LaunchDialogService } from '@spartacus/storefront';
import { concatMap, map, startWith, switchMap, take } from 'rxjs/operators';
import { OrderStatusName } from '../../../../../shared/models/status/order-status.model';
import { DS_DIALOG } from '../../../../../core/dialog/dialog.config';
import { Actions, ofType } from '@ngrx/effects';
import { CartActions } from '@spartacus/cart/base/core';
import {
  OCC_USER_ID_CURRENT,
  OCC_USER_ID_ANONYMOUS,
  GlobalMessageType,
  AuthService,
  GlobalMessageService,
  TranslationService,
} from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { CommerceTypes } from '../../../../../shared/models/commerceTypes.model';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { SpinnerOverlayService } from '../../../../../shared/components/spinner-overlay/spinner-overlay.service';
import { Router } from '@angular/router';
import { CustomerAccountService } from '../../../../../core/customer-account/customer-account.service';
import { ProductCatelogService } from '../../../../../core/product-catalog/services/product-catelog.service';
import { RmaService } from '../../../../rma/rma-services/rma.service';
import { Discounts } from '../../../../../shared/models/discounts.model';
import { RmaEntry } from '../../../../../shared/models/rma/rma.model';
import {
  SAP_RMA_STATUS,
  RmaStatusTypes,
} from '../../../../../shared/models/status/rma-status.model';
import { RepeatRMAUpdateMessageComponent } from '../../../../cart/rma-update-message-cart/repeat-rma-message-cart-dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-waygate-rma-product',
  standalone: false,
  templateUrl: './waygate-rma-product.component.html',
  styleUrl: './waygate-rma-product.component.scss',
})
export class WaygateRmaProductComponent {
  @Input() product: any;
  @Input() productItem: any;
  @Input() indexNo;
  @Input() productOpen;
  @Input() historyStatus;
  cartShopping$: Observable<any> = this.activeCartFacade.getActiveCartId();
  cartId: any;
  breakUp = false;
  user$: Observable<unknown>;
  userType = '';
  orderIdToBeTracked: any;
  rmaNumber: any;
  rmaEntry: RmaEntry;
  lineItemRmaNumber: any;
  rmaSalesAreaId;
  rmaSalesOrg;
  activeCustomerAccount$: Observable<any>;
  salesAreaObjectDataList: any = [];
  productErrorCode: any;
  productErrorCodes: any;
  rmaDsSwitchCart: boolean = false;
  userLoggedIn$: Observable<boolean> = this.authService.isUserLoggedIn();
  currentCartType: CommerceTypes;
  cartitem: any;
  rmaCartId;
  rmaUserType;
  breakUpMenu = false;
  productLine: any;

  @Output()
  checkedProduct: EventEmitter<any> = new EventEmitter();

  constructor(
    protected authService: AuthService,
    private rmaService: RmaService,
    protected activeCartFacade: ActiveCartFacade,
    private multiCartFacade: MultiCartFacade,
    private router: Router,
    protected globalMessageService: GlobalMessageService,
    private translate: TranslationService,
    protected launchDialogService: LaunchDialogService,
    private spinnerOverlayService: SpinnerOverlayService,
    private actions$: Actions,
    private customerAccService: CustomerAccountService,
    private productCatService: ProductCatelogService,
    private dialog: MatDialog
  ) {
    this.activeCustomerAccount$ =
      this.customerAccService.getCurrentCustomerAccount();
    this.activeCustomerAccount$.subscribe((data) => {
      this.salesAreaObjectDataList = data?.salesAreaObjectDataList;
    });
  }
  cart$: Observable<any> = this.activeCartFacade.getActive();
  quantity$: Observable<number> = this.activeCartFacade.getActive().pipe(
    startWith({ deliveryItemsQuantity: 0 }),
    map((cart) => cart.deliveryItemsQuantity || 0)
  );

  ngOnInit(): void {
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.rmaNumber = this.rmaService.rmaNumber;
    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          this.userType = 'current';
        } else {
          this.userType = 'anonymous';
          return of(undefined);
        }
      })
    );
    this.getCartId();
    this.user$.subscribe(
      (res) => {
        if (res) {
          this.userType = 'current';
        } else {
          this.userType = 'anonymous';
        }
      },
      (error) => {}
    );
  }

  getClass = (orderStatus) => {
    if (orderStatus == 'RMA REQUEST RECEIVED') {
      orderStatus = 'RMA';
    } else if (orderStatus == 'IN SHIPPING') {
      orderStatus = 'Shipped';
    } else if (orderStatus == 'AWAITING GOODS') {
      orderStatus = 'Awaiting';
    } else if (orderStatus == 'Awaiting Purchase Order') {
      orderStatus = 'PROCESSING';
    } else if (orderStatus == 'At Third Party') {
      orderStatus = 'PROCESSING';
    } else if (orderStatus == 'PROCESSING CALIBRATION') {
      orderStatus = 'PROCESSING';
    } else if (orderStatus == 'PROCESSING CALIBRATION') {
      orderStatus = 'PROCESSING';
    } else if (orderStatus == 'COMPLETE-SHIPPED') {
      orderStatus = 'COMPLETE';
    }
    return orderStatus.replace(/\s/g, '').replace(/\&/g, '');
  };

  toCamelCase(status: string) {
    if (status == 'COMPLETE') {
      return 'Completed';
    } else if (status == 'IN SHIPPING') {
      return 'In Shipping';
    } else if (status == 'RMA SUBMITTED') {
      return 'RMA Created';
    } else if (status == 'AWAITING GOODS') {
      return 'Awaiting Customer Products';
    } else if (status == 'PROCESSING') {
      return 'Processing';
    } else if (status == 'EVALUATING') {
      return 'Evaluating';
    } else {
      return status;
    }
  }

  /**
   * @description conpaire the selected status and if it is shipped the return true otherwise false
   * @returns boolean true/false
   */

  // get statusIsShipped(): boolean {
  //   return [OrderStatusName.SHIPPED, OrderStatusName.INVOICED].includes(
  //     this.product?.status
  //   )
  //     ? true
  //     : false;
  // }

  getUnitNetPrice(product) {
    if (product?.netPrice) {
      if (product?.qty > 1) {
        return Number(product?.netPrice / product.qty).toFixed(2);
      } else {
        return Number(product?.netPrice).toFixed(2);
      }
    }
  }

  getTotalPrice(totalPrice) {
    return Number(totalPrice).toFixed(2);
  }

  public openModal() {
    const componentdata = {
      item: this.product,
      userType: this.userType,
    };
    const viewConfigModal = this.launchDialogService.openDialog(
      DS_DIALOG.CONFIGURATOR_OVERVIEW_MODAL,
      undefined,
      undefined,
      componentdata
    );
    if (viewConfigModal) {
      viewConfigModal.pipe(take(1)).subscribe(() => {});
    }
  }
  togglePriceBreakup() {
    this.breakUpMenu = !this.breakUpMenu;
  }

  getTrackingLink(courier: string, trackingNumber: string): string {
    const text = courier?.toLowerCase();
    switch (true) {
      case text?.includes('ups'):
        return `http://www.ups.com/WebTracking/track?track=yes&trackNums=${trackingNumber}`;
      case text?.includes('fedex'):
        return `https://www.fedex.com/wtrk/track/?trknbr=${trackingNumber}`;
      case text?.includes('dhl'):
        return `https://www.dhl.com/in-en/home/tracking.html?tracking-id=${trackingNumber}`;
      default:
        return;
    }
  }

  toggleProduct() {
    this.productOpen = !this.productOpen;
  }

  getCartId() {
    this.cartShopping$ = this.activeCartFacade.getActiveCartId();
    this.cartShopping$.subscribe((data) => {
      this.cartId = data;
    });
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  reOrderrRMA() {
    this.router.navigate(['/rma/cart']);
  }

  //**Repeat RMA LIne Item Start**//

  isSalesAreaMatch(): boolean {
    const currentSalesAreaId = localStorage.getItem('rmaSalesAreaId');
    return currentSalesAreaId === this.rmaService.rmaSalesOrg;
  }

  selectRepeatRMALineItem(element) {
    this.activeCartFacade
      .getActive()
      .pipe(
        take(1),
        concatMap((activeCart: any) => {
          if (this.rmaUserType === OCC_USER_ID_CURRENT) {
            this.rmaCartId = activeCart.code;
          } else if (this.rmaUserType === OCC_USER_ID_ANONYMOUS) {
            this.rmaCartId = activeCart.guid;
          }
          if (activeCart.entries?.length > 0) {
            if (activeCart?.commerceType !== CommerceTypes.RETURNS) {
              this.currentCartType = CommerceTypes.RETURNS;
              this.rmaCartId = activeCart.code;
              this.openSwitchCartModal(
                activeCart.commerceType,
                this.currentCartType,
                this.rmaCartId,
                element
              );
            } else if (activeCart?.commerceType == CommerceTypes.RETURNS) {
              this.currentCartType = CommerceTypes.RETURNS;
              this.rmaCartId = activeCart.code;
              this.spinnerOverlayService.show();
              this.rmaService
                .createReorderLineItemRmaEntry(
                  OCC_USER_ID_CURRENT,
                  this.cartId,
                  this.rmaNumber,
                  this.indexNo + 1
                )
                .subscribe(
                  (success) => {
                    this.rmaSalesAreaId =
                      localStorage.getItem('rmaSalesAreaId');
                    this.rmaService.rmaNumber = element.rmaNumber;
                    this.productErrorCode = success;
                    this.productErrorCodes =
                      this.productErrorCode?.productErrorCodes;
                    if (
                      success !== null &&
                      this.rmaService.rmaSalesOrg == this.rmaSalesAreaId &&
                      this.productErrorCodes.length !== 0
                    ) {
                      this.spinnerOverlayService.hide();
                      this.globalMessageService.add(
                        this.getTranslatedText(
                          'rma-tracking.error.productErrorMessage'
                        ),
                        GlobalMessageType.MSG_TYPE_ERROR,
                        5000
                      );
                      window.scrollTo(0, 0);
                    } else {
                      this.spinnerOverlayService.hide();
                      this.openMessageModal(
                        activeCart.commerceType,
                        this.currentCartType,
                        this.rmaCartId,
                        element,
                        success
                      );
                    }
                  },
                  (error) => {
                    this.spinnerOverlayService.hide();
                    this.globalMessageService.add(
                      this.getTranslatedText('rma-tracking.error.errorMessage'),
                      GlobalMessageType.MSG_TYPE_ERROR,
                      5000
                    );
                    window.scrollTo(0, 0);
                  }
                );
            } else {
              this.repeatRMAEntry(element);
            }
            return of({ modal: true });
          } else {
            this.rmaCartId = activeCart.code;
            return this.productCatService.saveCartType(
              this.rmaCartId,
              CommerceTypes.RETURNS,
              OCC_USER_ID_CURRENT
            );
          }
        })
      )
      .subscribe((val) => {
        if (val === null) {
          this.repeatRMAEntry(element);
        }
      });
  }

  repeatRMAEntry(element) {
    this.currentCartType = CommerceTypes.RETURNS;
    this.spinnerOverlayService.show();
    this.rmaService
      .createReorderLineItemRmaEntry(
        OCC_USER_ID_CURRENT,
        this.cartId,
        this.rmaNumber,
        this.indexNo + 1
      )
      .subscribe(
        (success: any) => {
          // updating number of cart based on product addition in cart
          this.repeatRMASuccess(element, success);
        },
        (error) => {
          this.spinnerOverlayService.hide();
          this.globalMessageService.add(
            this.getTranslatedText('rma-tracking.error.errorMessage'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      );
  }
  repeatRMASuccess(element, success) {
    this.spinnerOverlayService.hide();
    this.spinnerOverlayService.show();
    this.rmaSalesAreaId = localStorage.getItem('rmaSalesAreaId');
    this.productErrorCode = success?.productErrorCodes;

    if (
      success &&
      this.rmaService.rmaSalesOrg == this.rmaSalesAreaId &&
      this.productErrorCode.length === 0 &&
      (this.cartitem === 0 ||
        this.cartitem === null ||
        this.cartitem === undefined)
    ) {
      this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
        if (cartId) {
          this.multiCartFacade.loadCart({
            userId: OCC_USER_ID_CURRENT,
            cartId: cartId,
            extraData: {
              active: true,
            },
          });
          this.actions$
            .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
            .pipe(take(1))
            .subscribe((r) => {
              this.spinnerOverlayService.hide();
              const URL = this.router.url;
              if (URL.indexOf('my-returns') != -1) {
                this.router.navigate([
                  '/',
                  this.productLine,
                  'returns',
                  'cart',
                ]);
              }
            });
        }
      });
    } else if (
      success !== null &&
      this.rmaService.rmaSalesOrg == this.rmaSalesAreaId &&
      this.productErrorCode.length !== 0
    ) {
      this.spinnerOverlayService.hide();
      this.globalMessageService.add(
        this.getTranslatedText('rma-tracking.error.productErrorMessage'),
        GlobalMessageType.MSG_TYPE_ERROR,
        5000
      );
      window.scrollTo(0, 0);
    } else {
      this.spinnerOverlayService.hide();
      this.switchDsCustomer(element, this.rmaService.rmaSalesOrg);
    }
  }

  switchDsCustomer(rma, rmaSalesOrg) {
    const salesOrgUid = rma?.salesOrg;

    const eligibleSalesArea = this.salesAreaObjectDataList.find(
      (element) => element.salesAreaId.split('_')[1] == salesOrgUid
    );
    const salesArea = {
      customerSalesOrgName: eligibleSalesArea?.salesAreaName,
      customerSalesOrgUid: eligibleSalesArea?.salesAreaId,
      customerSoldToUid: eligibleSalesArea?.salesAreaId.split('_')[0],
      salesOrgUid: eligibleSalesArea?.salesAreaId.split('_')[1],
      salesOrg: eligibleSalesArea?.salesAreaId.split('_').slice(1).join('-'),
    };
    const productAccessData = {
      salesAreas: [salesArea],
    };
    const componentData = {
      productAccessData,
    };

    this.rmaDsSwitchCart = true;
    const rmaSwitchCustomerDialog = this.launchDialogService.openDialog(
      DS_DIALOG.RMA_SWITCH_CUSTOMER_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (rmaSwitchCustomerDialog) {
      rmaSwitchCustomerDialog.pipe(take(1)).subscribe((value) => {
        if (value) {
          this.customerAccService
            .updateSalesArea(value, value.split('_')[0])
            .subscribe((res: any) => {
              this.customerAccService.rmaDsSwitchCartFlag =
                this.rmaDsSwitchCart;
              this.customerAccService.updateAvaiableProductLine(
                res?.visibleCategories || []
              );
              this.customerAccService.refreshPostCustomAccSwitch();
              this.globalMessageService.add(
                this.getTranslatedText('buyCart.salesAreaSuccess'),
                GlobalMessageType.MSG_TYPE_CONFIRMATION
              );
            });
        }
      });
    }
  }

  private openSwitchCartModal(
    currentCartType,
    switchToCartType,
    cartId,
    element
  ) {
    const componentData = {
      currentCartType: currentCartType,
      switchToCartType: switchToCartType,
      currentCartCode: cartId,
    };

    const rmaSwitchCartDialog = this.launchDialogService.openDialog(
      DS_DIALOG.RMA_SWITCH_CART_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (rmaSwitchCartDialog) {
      rmaSwitchCartDialog.pipe(take(1)).subscribe((value) => {
        if (value == true || value?.instance?.reason == true) {
          this.repeatRMAEntry(element);
        }
      });
    }
  }

  openMessageModal(currentCartType, switchToCartType, cartId, element, cart) {
    const dialogRef = this.dialog.open(RepeatRMAUpdateMessageComponent, {
      data: {
        currentCartType,
        switchToCartType,
        currentCartCode: cartId,
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result === true) {
        this.repeatRMASuccess(element, cart);
      } else {
        this.spinnerOverlayService.hide();
      }
    });
  }
  //**Repeat RMA LIne Item End**//

  openViewBreakup() {
    this.breakUp = true;
  }
  closeMenu(event) {
    this.breakUp = false;
  }
  getDiscountName(code) {
    return Discounts[code];
  }
  getTotalDiscounts(discounts?, adders?) {
    let totalDisc = 0;
    let totalAdds = 0;
    for (const disc of discounts) {
      totalDisc += disc.value;
    }
    for (const adds of adders) {
      totalAdds += adds.value;
    }
    return (
      (discounts[0]?.formattedValue[0] || adders[0]?.formattedValue[0]) +
      ((totalAdds || 0) - (totalDisc || 0)).toFixed(2)
    );
  }
}
