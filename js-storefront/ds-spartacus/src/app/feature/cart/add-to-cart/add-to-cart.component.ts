import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  OccEndpointsService,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
  TranslationService,
} from '@spartacus/core';
import {
  CurrentProductService,
  LaunchDialogService,
} from '@spartacus/storefront';
import moment from 'moment';
import { Observable, of, Subscription } from 'rxjs';
import { concatMap, filter, take } from 'rxjs/operators';
import { ViewModes } from '../../product-listing';
import {
  ActiveCartFacade,
  MultiCartFacade,
  OrderEntry,
} from '@spartacus/cart/base/root';
import { Actions, ofType } from '@ngrx/effects';
import { CartActions } from '@spartacus/cart/base/core';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { ApiService } from '../../../core/http/api.service';
import {
  BuyActions,
  ReturnActions,
  AnonymousActions,
} from '../../../core/product-catalog/model/product-catelog.model';
import { ProductCatelogService } from '../../../core/product-catalog/services/product-catelog.service';
import { ProductReturnService } from '../../../core/product-catalog/services/product-return.service';
import {
  ItemListTypeEnum,
  GtmEvents,
  StoreTypeEnum,
} from '../../../shared/enums/gtm.enum';
import { CommerceTypes } from '../../../shared/models/commerceTypes.model';
import {
  EcommerceItem,
  Ecommerce,
  GTMDataLayer,
  GTMCartType,
} from '../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../shared/services/gtm.service';
import {
  AccessRoleType,
  UserRoleService,
} from '../../../shared/services/user-role.service';
import { Product } from '../../../core/product-catalog/model/product-model';

@Component({
  standalone: false,
  selector: 'cx-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddToCartComponent implements OnInit, OnDestroy {
  @Input() productCode: string;
  @Input() showQuantity = true;

  /**
   * As long as we do not support #5026, we require product input, as we need
   *  a reference to the product model to fetch the stock data.
   */
  @Input() product: Product;

  @Input() mode: any;

  @Output() emitProductPrice = new EventEmitter();

  viewModes = ViewModes;
  maxQuantity: number;

  hasStock = false;
  quantity = 1;
  increment = false;
  cartEntry$: Observable<OrderEntry>;
  buy = true;
  subscription: Subscription;

  addToCartForm = new FormGroup({
    quantity: new FormControl(1),
    availableAt: new FormControl('Select', [Validators.required]),
  });

  currentBuyAction: BuyActions;
  buyActions = BuyActions;
  currentReturnAction: ReturnActions;
  returnActions = ReturnActions;
  guestActions = AnonymousActions;
  currentGuestAction: AnonymousActions;

  userLoggedIn$: Observable<boolean> = this.authService.isUserLoggedIn();
  currentUserType;
  activeCartStableSubscription = new Subscription();

  isCheckingPrice = false;
  showUpdateBtn = false;
  defaultAvailbleAt;
  selectedPlant;
  isProductUpdating = false;
  productLine: string;

  private createRmaSubscripton: Subscription;
  currentUserAccess$ = this.userRoleService.currentUserRole;
  userRoleEnum = AccessRoleType;
  constructor(
    protected launchDialogService: LaunchDialogService,
    protected currentProductService: CurrentProductService,
    private cd: ChangeDetectorRef,
    protected activeCartFacade: ActiveCartFacade,
    protected multiCartFacade: MultiCartFacade,
    private productCatService: ProductCatelogService,
    private authService: AuthService,
    private customerAccService: CustomerAccountService,
    protected occEndpoints: OccEndpointsService,
    private apiService: ApiService,
    private returnProdService: ProductReturnService,
    private globalMessageService: GlobalMessageService,
    private translate: TranslationService,
    private router: Router,
    private userRoleService: UserRoleService,
    private gtmService: GoogleTagManagerService,
    private actions$: Actions
  ) {}

  ngOnInit() {
    if (this.product) {
      this.productCode = this.product.code;
      this.cartEntry$ = this.activeCartFacade.getEntry(this.productCode);
      this.setStockInfo(this.product);
      this.cd.markForCheck();
      this.currentBuyAction = this.productCatService.getBuyAction(this.product);
      this.currentReturnAction = this.productCatService.getReturnsAction(
        this.product
      );
      this.currentGuestAction = this.productCatService.getAnonymousActions(
        this.product
      );
      this.customerAccService.getProductLine().subscribe((productLine) => {
        this.productLine = productLine;
      });
      this.product.plantAvailableAt = this.product?.plantAvailableAt.filter(
        (obj, index, self) =>
          index === self.findIndex((t) => t.code === obj.code)
      );
      this.product.plantAvailableAt?.forEach((el) => {
        if (el.defaultPlant) {
          this.selectedPlant = el;
          this.addToCartForm.controls.availableAt.setValue(
            el.name +
              ' (' +
              (Number(el.stockAvailable) || 0) +
              ') ' +
              ' (Default)'
          );
        }
      });
    } else if (this.productCode) {
      this.cartEntry$ = this.activeCartFacade.getEntry(this.productCode);
      // force hasStock and quantity for the time being, as we do not have more info:
      this.quantity = 1;
      this.hasStock = true;
      this.cd.markForCheck();
    } else {
      this.subscription = this.currentProductService
        .getProduct()
        .pipe(filter(Boolean))
        .subscribe((product: Product) => {
          this.productCode = product.code;
          this.setStockInfo(product);
          this.cartEntry$ = this.activeCartFacade.getEntry(this.productCode);
          this.cd.markForCheck();
        });
    }
    this.addToCartForm.valueChanges.subscribe((data) => {
      if (!Number.isInteger(data.quantity)) {
        this.addToCartForm.controls.quantity.setValue(
          Math.floor(data.quantity)
        );
      }
      this.showUpdateBtn = true;
    });

    this.userLoggedIn$.subscribe((res) => {
      if (res) this.currentUserType = OCC_USER_ID_CURRENT;
      else this.currentUserType = OCC_USER_ID_ANONYMOUS;
    });
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  private setStockInfo(product: Product): void {
    this.quantity = 1;
    this.hasStock =
      product.stock && product.stock.stockLevelStatus !== 'outOfStock';
    if (this.hasStock && product.stock.stockLevel) {
      this.maxQuantity = product.stock.stockLevel;
    } else {
      this.maxQuantity = 9999;
    }
  }

  updateCount(value: number): void {
    this.quantity = value;
  }

  addToCart(isAddToQuote?: boolean) {
    let currentCartType: CommerceTypes;
    let userType;
    let lastSalesArea;
    this.userLoggedIn$.subscribe((res) => {
      if (res) {
        currentCartType = CommerceTypes.BUY;
        userType = OCC_USER_ID_CURRENT;
      } else if (isAddToQuote) {
        currentCartType = CommerceTypes.GUESTQUOTE;
        userType = OCC_USER_ID_ANONYMOUS;
        lastSalesArea = JSON.parse(sessionStorage.getItem('lastSalesArea'));
      } else {
        currentCartType = CommerceTypes.GUESTBUY;
        userType = OCC_USER_ID_ANONYMOUS;
        lastSalesArea = JSON.parse(sessionStorage.getItem('lastSalesArea'));
      }
    });

    let currentSalesArea =
      this.customerAccService.getGuestActiveSalesAreaFromStorage();
    this.activeCartFacade
      .getActive()
      .pipe(
        take(1),
        concatMap((activeCart: any) => {
          let cartId;
          if (userType === OCC_USER_ID_CURRENT) {
            cartId = activeCart.code;
          } else if (userType === OCC_USER_ID_ANONYMOUS) {
            cartId = activeCart.guid;
          }
          if (activeCart.entries?.length > 0) {
            if (activeCart.commerceType != currentCartType) {
              this.openSwitchCartModal(
                activeCart.commerceType,
                currentCartType,
                cartId
              );
            } else if (
              lastSalesArea &&
              lastSalesArea.salesAreaId != currentSalesArea.salesAreaId
            ) {
              this.openSwitchCartModal(
                activeCart.commerceType,
                currentCartType,
                cartId,
                true
              );
            } else {
              this.addProductToBuyCart();
            }
            return of({ modal: true });
          } else {
            return this.productCatService.saveCartType(
              cartId,
              currentCartType,
              userType
            );
          }
        })
      )
      .subscribe((val) => {
        if (val === null) {
          this.addProductToBuyCart();
        }
      });
  }

  addProductToBuyCart() {
    const quantity = this.addToCartForm.get('quantity').value;
    if (!this.productCode || quantity <= 0) {
      return;
    }

    // check item is already present in the cart
    // so modal will have proper header text displayed
    this.activeCartFacade
      .getEntry(this.productCode)
      .subscribe((entry) => {
        if (entry) {
          this.increment = true;
        }
        this.userLoggedIn$.subscribe((res) => {
          if (!res)
            sessionStorage.setItem(
              'lastSalesArea',
              JSON.stringify(
                this.customerAccService.getGuestActiveSalesAreaFromStorage()
              )
            );
        });
        this.activeCartFacade.addEntry(this.productCode, quantity);
        this.increment = false;
        this.actions$
          .pipe(ofType(CartActions.CART_ADD_ENTRY_SUCCESS), take(1))
          .subscribe((cartResponse: any) => {
            this.pushAddToCartEvent(cartResponse);
            this.openModal();
          });
      })
      .unsubscribe();
  }

  private openModal() {
    const componentdata = {
      entry$: this.activeCartFacade.getLastEntry(this.productCode),
      cart$: this.activeCartFacade.getActive(),
      loaded$: this.activeCartFacade.isStable(),
      quantity: this.quantity,
      increment: this.increment,
    };
    const addToCartDialog = this.launchDialogService.openDialog(
      DS_DIALOG.ADD_TO_CART_DIALOG,
      undefined,
      undefined,
      componentdata
    );
    if (addToCartDialog) {
      addToCartDialog.pipe(take(1)).subscribe((value) => {});
    }
    this.activeCartFacade.getActive().subscribe((data: any) => {
      // updating number of cart based on product addition in cart
      localStorage.setItem('numberOfCart', data.totalUnitCount);
    });
  }

  private openCartLoadingModal() {
    const cartLoadingDialog = this.launchDialogService.openDialog(
      DS_DIALOG.CART_LOADING_DIALOG,
      undefined,
      undefined,
      {}
    );
    if (cartLoadingDialog) {
      cartLoadingDialog.pipe(take(1)).subscribe((value) => {});
    }
  }

  private openSwitchCartModal(
    currentCartType,
    switchToCartType,
    cartId,
    switchSame?: boolean
  ) {
    const componentdata = {
      currentCartType: currentCartType,
      switchToCartType: switchToCartType,
      currentCartCode: cartId,
      switchSame: switchSame,
    };
    const switchCartModel = this.launchDialogService.openDialog(
      DS_DIALOG.SWITCH_CART_DIALOG,
      undefined,
      undefined,
      componentdata
    );
    if (switchCartModel) {
      switchCartModel.pipe(take(1)).subscribe((value) => {
        if (value == true || value?.instance?.reason == true) {
          this.addProductToBuyCart();
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.createRmaSubscripton?.unsubscribe();
  }

  returnProduct() {
    const updatedProduct = {
      ...this.product,
      similar: false,
    };
    //*********** As per business suggestion BHI-22757961 switch to return cart pop-up not required  */
    // this.createRmaSubscripton = this.returnProdService
    //   .rmaValidateAndRedirect(this.switchRmaCartModalRef, updatedProduct)
    //   .subscribe((val: any) => {
    //     if (!val?.modal) {
    //       this.multiCartFacade.reloadCart(val, {
    //         active: true,
    //       });
    //       this.returnProdService.selectRmaProduct(updatedProduct);
    //       this.router.navigate(['/rma-form']);
    //     }
    //   });
    //*********************************BHI-22757961****************************************** */
    this.returnProdService.selectRmaProduct(updatedProduct);
    this.router.navigate([`/${this.productLine}/returns/cart`]);
  }

  checkPrice(isGuest = false) {
    this.isCheckingPrice = true;
    this.productCatService
      .checkPrice(this.product.code, isGuest)
      .subscribe((res: any) => {
        this.isCheckingPrice = false;
        this.emitProductPrice.emit(res);
        if (res) {
          this.product = {
            ...this.product,
            ...res,
          };
          this.currentBuyAction = this.productCatService.getBuyAction(
            this.product
          );
          this.currentGuestAction = this.productCatService.getAnonymousActions(
            this.product
          );
        }
      });
  }

  switchDsCustomer() {
    const componentData = {
      productAccessData: this.product.productAccessData,
    };
    const switchCustomerDialog = this.launchDialogService.openDialog(
      DS_DIALOG.SWITCH_CUSTOMER_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (switchCustomerDialog) {
      switchCustomerDialog.pipe(take(1)).subscribe((value) => {
        if (value != 'close' || value != 'cancel') {
          const salesArea =
            typeof value == 'string'
              ? value
              : value?.instance?.selectedSalesAreaId;
          this.customerAccService
            .updateSalesArea(salesArea, salesArea.split('_')[0])
            .subscribe((res: any) => {
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

  updateAvailibity() {
    this.isProductUpdating = true;
    const qty = this.addToCartForm.get('quantity').value;
    const plantId = this.selectedPlant.code;
    const url = this.getEndpoint(this.product.code, 'details', plantId, qty);
    this.apiService.getData(url).subscribe((res) => {
      this.isProductUpdating = false;
      this.product = res;
      this.product.plantAvailableAt = this.product.plantAvailableAt.filter(
        (obj, index, self) =>
          index === self.findIndex((t) => t.code === obj.code)
      );
      this.showUpdateBtn = false;
      this.cd.detectChanges();
    });
  }

  changePlant(event) {
    this.selectedPlant = event;
    this.showUpdateBtn = true;
  }

  getShipDate(dt) {
    if (
      dt.shipDate == '01-Jan-2100' ||
      dt.shipDate.toLowerCase() == 'no estimate available'
    ) {
      return this.getTranslatedText('buyCart.noEstimateAvailable');
    }
    return moment(dt.shipDate).format('D MMMM, YYYY');
  }

  protected getEndpoint(
    code: string,
    scope?: string,
    plantId?: string,
    qty?: number
  ): string {
    return this.occEndpoints.buildUrl('product', {
      urlParams: {
        userId: this.currentUserType,
      },
      queryParams: {
        productCode: code,
        defaultPlant: plantId,
        quantity: qty,
      },
      scope,
    });
  }

  requestQuote() {
    this.addToCart(true);
  }

  pushAddToCartEvent(cartResponse) {
    const item: EcommerceItem = {
      price: this.product?.yourPrice?.value,
      quantity: this.addToCartForm.get('quantity').value,
      item_id: this.product?.code,
      item_name: this.product?.name,
      discount: this.product?.discountPercentage
        ? Number(this.product?.discountPercentage)
        : '',
      item_brand: this.gtmService.getItemBrand(),
      item_list_id: ItemListTypeEnum.ProductDetail,
      item_list_name: ItemListTypeEnum.ProductDetail,
      item_category:
        this.product?.breadCrumbs && this.product?.breadCrumbs.length
          ? this.product?.breadCrumbs[0]?.name
          : '',
      item_category2:
        this.product?.breadCrumbs && this.product?.breadCrumbs.length
          ? this.product?.breadCrumbs[1]?.name
          : '',
      item_category3:
        this.product?.breadCrumbs && this.product?.breadCrumbs.length
          ? this.product?.breadCrumbs[2]?.name
          : '',
      item_category4:
        this.product?.breadCrumbs && this.product?.breadCrumbs.length
          ? this.product?.breadCrumbs[3]?.name
          : '',
      item_category5:
        this.product?.breadCrumbs && this.product?.breadCrumbs.length
          ? this.product?.breadCrumbs[4]?.name
          : '',
      item_variant: '',
      index: 0,
    };

    const eventData: Ecommerce = {
      currency: this.product?.yourPrice?.currencyIso || '',
      value:
        this.product?.yourPrice?.value *
          this.addToCartForm.get('quantity').value || '',
      items: [item],
    };
    const event: GTMDataLayer = {
      event: GtmEvents.AddToCart,
      store: StoreTypeEnum.Dsstore,
      ecommerce: eventData,
      commerceType: GTMCartType.BUY_CART,
      cartType: cartResponse.cartType,
    };
    this.gtmService.sendEvent(event);
  }
}
