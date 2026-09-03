import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { CartActions } from '@spartacus/cart/base/core';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import {
  AuthService,
  OCC_USER_ID_CURRENT,
  GlobalMessageType,
  GlobalMessageService,
  TranslationService,
  OCC_USER_ID_ANONYMOUS,
} from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { Observable, of } from 'rxjs';
import { switchMap, take, concatMap, startWith, map } from 'rxjs/operators';
import { CustomerAccountService } from '../../../../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../../../../core/dialog/dialog.config';
import { ProductCatelogService } from '../../../../../../core/product-catalog/services/product-catelog.service';
import { SpinnerOverlayService } from '../../../../../../shared/components/spinner-overlay/spinner-overlay.service';
import { CommerceTypes } from '../../../../../../shared/models/commerceTypes.model';
import { Discounts } from '../../../../../../shared/models/discounts.model';
import { RmaEntry } from '../../../../../../shared/models/rma/rma.model';
import {
  SAP_RMA_STATUS,
  RmaStatusTypes,
} from '../../../../../../shared/models/status/rma-status.model';
import { RmaService } from '../../../../rma-services/rma.service';

@Component({
  standalone: false,
  // tslint:disable-next-line: component-selector
  selector: 'vs-rma-tracking-product',
  templateUrl: './rma-tracking-product.component.html',
  styleUrls: ['./rma-tracking-product.component.scss'],
})
export class RmaTrackingProductComponent implements OnInit {
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
    private productCatService: ProductCatelogService
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
  addedValues = [
    // {
    //   appliedValue: 5.0,
    //   code: 'ZEDC',
    //   currency: 'USD',
    //   formattedValue: '$44.10',
    //   value: 44.1,
    // },
    // {
    //   appliedValue: 10.0,
    //   code: 'ZF00',
    //   currency: 'USD',
    //   formattedValue: '$17.79',
    //   value: 17.79,
    // },
    // {
    //   appliedValue: 5.0,
    //   code: 'ZSCG',
    //   currency: 'USD',
    //   formattedValue: '$33.51',
    //   value: 33.51,
    // },
  ];
  toggleProduct() {
    this.productOpen = !this.productOpen;
  }

  getCartId() {
    this.cartShopping$ = this.activeCartFacade.getActiveCartId();
    this.cartShopping$.subscribe((data) => {
      this.cartId = data;
    });
  }
  fetchOrderStatus(statusResponse) {
    let status = '';
    if (statusResponse !== undefined && statusResponse !== null) {
      const statusObj = statusResponse.toUpperCase();
      switch (statusObj) {
        case SAP_RMA_STATUS.RMA_SUBMITTED:
          status = RmaStatusTypes.SUBMITTED.statusName;
        case SAP_RMA_STATUS.AWAITING_ORDERS:
          status = RmaStatusTypes.PROGRESS.statusName;
          break;
        case SAP_RMA_STATUS.EVALUATING:
          status = RmaStatusTypes.EVALUATING.statusName;
          break;
        case SAP_RMA_STATUS.PROCESSING:
          status = RmaStatusTypes.PROCESSING.statusName;
          break;
        case SAP_RMA_STATUS.SHIPPED:
          status = RmaStatusTypes.SHIPPED.statusName;
          break;
        case SAP_RMA_STATUS.SHIPPED_INVOICED:
          status = RmaStatusTypes.INVOICED.statusName;
          break;
        case SAP_RMA_STATUS.BLOCKED:
          status = RmaStatusTypes.BLOCKED.statusName;
          break;
      }
    }

    return status;
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
              if (URL.indexOf('rma-details') != -1) {
                this.router.navigate(['rma', 'cart']);
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
    const componentData = {
      currentCartType: currentCartType,
      switchToCartType: switchToCartType,
      currentCartCode: cartId,
    };
    const repeatRmaUpdateMessageDialog = this.launchDialogService.openDialog(
      DS_DIALOG.REPEAT_RMA_UPDATE_MESSAGE_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (repeatRmaUpdateMessageDialog) {
      repeatRmaUpdateMessageDialog.pipe(take(1)).subscribe((value) => {
        if (value) {
          this.repeatRMASuccess(element, cart);
        } else {
          this.spinnerOverlayService.hide();
        }
      });
    }
  }
  //**Repeat RMA LIne Item End**//

  fetchOrderStatusColor(statusResponse) {
    let color = '';
    if (statusResponse !== undefined && statusResponse !== null) {
      const statusObj = this.historyStatus.toUpperCase();
      switch (statusObj) {
        case SAP_RMA_STATUS.RMA_SUBMITTED:
          color = '#00BF6F';
          break;
        case 'RMA REQUEST RECEIVED':
          color = '#00BF6F';
          break;
        case SAP_RMA_STATUS.AWAITING_ORDERS:
          color = '#E12D39';
          break;
        case SAP_RMA_STATUS.EVALUATING:
          color = '#147D64';
          break;
        case SAP_RMA_STATUS.PROCESSING:
          color = '#299BA3';
          break;
        case 'PROCESSING CALIBRATION':
          color = '#299BA3';
          break;
        case 'PROCESSING REPAIR':
          color = '#299BA3';
          break;
        case 'AWAITING PURCHASE ORDER':
          color = '#299BA3';
          break;
        case SAP_RMA_STATUS.SHIPPED:
          color = '#ED9D22';
          break;
        case SAP_RMA_STATUS.SHIPPED_INVOICED || 'COMPLETE-SHIPPED':
          color = '#3EBD93';
          break;
        case 'COMPLETE-SHIPPED':
          color = '#506C65';
          break;
        case SAP_RMA_STATUS.BLOCKED:
          color = '#E12D39';
          break;
      }
    }
    return color;
  }
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
