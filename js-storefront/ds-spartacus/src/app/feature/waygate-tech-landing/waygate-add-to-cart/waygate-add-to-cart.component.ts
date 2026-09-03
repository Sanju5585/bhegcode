import {
  Component,
  Input,
  OnInit,
  ChangeDetectorRef,
  Output,
  EventEmitter,
  inject,
  DestroyRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { CartActions } from '@spartacus/cart/base/core';
import { ActiveCartFacade, OrderEntry } from '@spartacus/cart/base/root';
import {
  AuthService,
  CurrencyService,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
  OccEndpointsService,
  TranslationService,
} from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import moment from 'moment';
import { Observable, Subscription, of } from 'rxjs';
import {
  concatMap,
  filter,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { ItemListTypeEnum, GtmEvents } from './../../../shared/enums/gtm.enum';
import { Product } from '../../../core/product-catalog/model/product-model';
import {
  AnonymousActions,
  BuyActions,
  ReturnActions,
} from '../../../core/product-catalog/model/product-catelog.model';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { ApiService } from '../../../core/http/api.service';
import { ProductCatelogService } from '../../../core/product-catalog/services/product-catelog.service';
import { ProductReturnService } from '../../../core/product-catalog/services/product-return.service';
import { CommerceTypes } from '../../../shared/models/commerceTypes.model';
import { ProductService } from '@spartacus/core';
import {
  EcommerceItem,
  Ecommerce,
  GTMDataLayer,
  GTMCartType,
} from '../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../shared/services/gtm.service';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';
import {
  CartType,
  ProductType,
  DecisionType,
} from '../../../shared/models/cartType.models';
import { AddressModelService } from '../../../shared/components/address-model/address-model.service';
import { CustomerType } from '../../../shared/models/customerType.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  standalone: false,
  selector: 'app-waygate-add-to-cart',
  templateUrl: './waygate-add-to-cart.component.html',
  styleUrls: ['./waygate-add-to-cart.component.scss'],
})
export class WaygateAddToCartComponent implements OnInit {
  maxQuantity: number = 9999;
  quantity: number = 1;
  @Input() product: Product;
  @Input() productCode: string;
  @Input() currentBuyAction: string;
  @Input() currentReturnAction: string;
  @Input() leadTime: number;
  @Input() inStock: boolean;
  @Input() currentGuestAction;
  @Input() accessoriesPresent: boolean = false;
  @Output() isProductNotAddedToCart = new EventEmitter();

  minDate: Date = new Date();
  defaultDate: Date = new Date();
  currentUserType;
  count: number = 1;
  buyActions = BuyActions;
  userLoggedIn$: Observable<boolean>;
  increment: boolean = false;
  returnActions = ReturnActions;
  guestActions = AnonymousActions;
  cartEntry$: Observable<OrderEntry>;
  subscription: Subscription;
  isProductUpdating: boolean = false;
  disableCheckAvailablity: boolean = true;
  addToCartForm: FormGroup;
  minQty: number = 1;
  estShipData: any[];
  contactUsUrl: string;
  productLine: string;
  defaultDate$: Observable<any>;
  minDate$: Observable<any>;
  isUpdated: boolean = false;
  productCurrencyIso: any;
  activeCartCurrencyIso: any;
  activeCartData: any;
  selectedSalesArea: string;
  selectedAddressId: string;

  _ProductType = ProductType;
  selectedEca: string = null;
  isChannelPartner: boolean;
  private destroyRef = inject(DestroyRef);
  oosEntries: any;
  showCartSpinner: boolean = false;
  isChangeAddressDisabled: boolean = false;

  constructor(
    private launchDialogService: LaunchDialogService,
    protected occEndpoints: OccEndpointsService,
    private apiService: ApiService,
    private authService: AuthService,
    private customerAccService: CustomerAccountService,
    protected activeCartFacade: ActiveCartFacade,
    private productCatService: ProductCatelogService,
    private actions$: Actions,
    private returnProdService: ProductReturnService,
    private router: Router,
    private cd: ChangeDetectorRef,
    private gtmService: GoogleTagManagerService,
    private translate: TranslationService,
    private custAccService: CustomerAccountService,
    private addressModelService: AddressModelService,
    private currencyService: CurrencyService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.customerAccService.getCurrentCustomerAccount().subscribe((res) => {
      if (res) {
        this.selectedSalesArea =
          res?.selectedSalesArea?.salesAreaId.split('_')[1];
      }
    });

    this.customerAccService.getCustomerUserType().subscribe((customerType) => {
      this.isChannelPartner = customerType === CustomerType.Type2;
    });
    this.userLoggedIn$ = this.authService.isUserLoggedIn();
    this.addToCartForm = new FormGroup({
      quantity: new FormControl(1),
    });
    this.userLoggedIn$.subscribe((res) => {
      if (res) this.currentUserType = OCC_USER_ID_CURRENT;
      else this.currentUserType = OCC_USER_ID_ANONYMOUS;
    });
    this.disableCheckAvailablity =
      this.currentBuyAction == BuyActions.BUY &&
      this.currentReturnAction == ReturnActions.RETURN
        ? true
        : false;
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.contactUsUrl = `/${productLine}/contactus`;
    });
    this.calculateShipDate();

    this.addressModelService.setSelectedEca = null;
    this.addressModelService.setSelEcaText = null;

    this.addressModelService.getAddToCartFromAddrModel
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        if (value) {
          this.addToCart(false);
        }
      });
  }

  ngOnChanges(): void {
    this.productCurrencyIso = this.product?.price?.currencyIso;
    this.activeCartFacade.getActive().subscribe((activeCartData: any) => {
      this.activeCartData = activeCartData;
      this.activeCartCurrencyIso = this.activeCartData?.currencyIso;
    });

    this.userLoggedIn$ = this.authService.isUserLoggedIn();
    this.addToCartForm = new FormGroup({
      quantity: new FormControl(1),
    });
    this.userLoggedIn$.subscribe((res) => {
      if (res) this.currentUserType = OCC_USER_ID_CURRENT;
      else this.currentUserType = OCC_USER_ID_ANONYMOUS;
    });
    this.disableCheckAvailablity =
      this.currentBuyAction == BuyActions.BUY &&
      this.currentReturnAction == ReturnActions.RETURN
        ? true
        : false;
  }

  public openModal() {
    this.activeCartFacade.getActive().subscribe((cart) => {
      this.oosEntries = cart?.entries
        .filter(
          (e: any) => e?.availabilityDetails[0]?.['actualStockQty'] == '0'
        )
        .map((e) => {
          return e?.product?.code;
        });
    });
    const componentdata = {
      entry$: this.activeCartFacade.getLastEntry(this.productCode),
      cart$: this.activeCartFacade.getActive(),
      loaded$: this.activeCartFacade.isStable(),
      quantity: this.quantity,
      increment: this.increment,
      oosEntries: this.oosEntries,
    };
    const addToCartDialog = this.launchDialogService.openDialog(
      DS_DIALOG.WAYGATE_PDP_MODAL,
      undefined,
      undefined,
      componentdata
    );
    if (addToCartDialog) {
      addToCartDialog.pipe(take(1)).subscribe((value) => {});
    }
    this.launchDialogService.dialogClose.subscribe((value: any) => {
      if (
        value &&
        [
          'View Cart click',
          'Proceed To Checkout click',
          'confirm',
          'Close on navigation',
        ].includes(value)
      ) {
        this.addressModelService.setSelEcaText = null;
        this.addressModelService.setSelectedEca = null;
        this.showCartSpinner = false;
      }
    });
    this.activeCartFacade.getActive().subscribe((data: any) => {
      localStorage.setItem('numberOfCart', data.totalUnitCount);
    });
  }

  onQualityChange(count: any) {
    if (this.addToCartForm.value.quantity <= 1) {
      this.quantity = this.minQty;
      this.isUpdated = false;
    } else {
      this.isUpdated = true;
      this.quantity = count;
    }
    this.disableCheckAvailablity = false;
  }

  updateAvailablity() {
    this.isProductUpdating = true;
    const qty = this.addToCartForm.get('quantity').value;
    if (this.product !== undefined) {
      const defaultPlant = this.product?.plantAvailableAt.find(
        (plant) => plant.defaultPlant
      );
      const plantId = defaultPlant.code;
      const url = this.getEndpoint(this.product.code, 'details', plantId, qty);
      this.apiService.getData(url).subscribe((res) => {
        this.isProductUpdating = false;
        this.product = res;
        this.disableCheckAvailablity = true;
        this.cd.detectChanges();
        const defaultPlant = this.product?.plantAvailableAt.find(
          (plant) => plant.defaultPlant
        );
        if (defaultPlant) {
          this.inStock = defaultPlant.stockAvailable >= qty;
        }
        this.estShipData = this.product?.estShipData;
        this.calculateShipDate();
      });
    }
  }

  quoteCart(productType?) {
    let currentCartType: CommerceTypes = CommerceTypes.QUOTE;
    let userType = OCC_USER_ID_CURRENT;
    this.activeCartFacade
      .getActive()
      .pipe(
        take(1),
        concatMap((activeCart: any) => {
          let cartId = activeCart.code;
          if (activeCart.entries?.length > 0) {
            if (activeCart.commerceType != currentCartType) {
              this.openCartConflictPopup(activeCart);
            } else {
              if (
                activeCart.cartType === CartType.Typ1 &&
                productType === 'ITFILM'
              ) {
                this.addProductToBuyCart();
              } else if (
                activeCart.cartType === CartType.Typ2 &&
                productType !== 'ITFILM'
              ) {
                this.addProductToBuyCart();
              } else {
                this.openCartConflictPopup(activeCart);
              }
            }
            return of({ modal: true });
          } else {
            return this.productCatService
              .saveCartType(cartId, currentCartType, 'current')
              .pipe(
                tap(() => this.activeCartFacade.reloadActiveCart()),
                switchMap(() =>
                  this.activeCartFacade.getActive().pipe(
                    filter(
                      (c: any) => !!c && c.commerceType === currentCartType
                    ),
                    take(1)
                  )
                )
              );
          }
        })
      )
      .subscribe({
        next: (val) => {
          if (!val?.modal) {
            this.addProductToBuyCart();
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  addToCart(isAddToQuote?: boolean) {
    console.log(this.productCurrencyIso);
    this.showCartSpinner = true;
    this.isChangeAddressDisabled = true;
    // this.currencyService.setActive(this.productCurrencyIso);
    if (
      this.activeCartData?.entries?.length > 0 &&
      this.productLine === 'waygate' &&
      this.activeCartCurrencyIso
    ) {
      if (
        this.productCurrencyIso &&
        this.activeCartData?.commerceType === CommerceTypes.RETURNS
      ) {
        this.proceedToAddToCart(isAddToQuote);
      } else if (this.productCurrencyIso === this.activeCartCurrencyIso) {
        this.proceedToAddToCart(isAddToQuote);
      } else {
        const multiCurrencyDialog = this.launchDialogService.openDialog(
          DS_DIALOG.MULTI_CURRENCY_DIALOG,
          undefined,
          undefined
        );

        multiCurrencyDialog.pipe(take(1)).subscribe((value) => {
          let mval =
            (value?.instance?.launchDialogService?._dialogClose._value).toLowerCase();
          if (
            ![
              'close',
              'cross click',
              'cancel create saved cart clicked',
            ].includes(mval)
          ) {
            this.proceedToAddToCart(isAddToQuote);
          }
        });
      }
    } else {
      this.proceedToAddToCart(isAddToQuote);
    }
  }

  proceedToAddToCart(isAddToQuote?: boolean) {
    console.log(
      'ECA in proceedToAddToCart:',
      this.addressModelService.getSelectedEca
    );

    if (
      this.isChannelPartner &&
      this.product?.productType == this._ProductType.Typ3 &&
      !this.addressModelService.getSelectedEca
    ) {
      this.openAddressModel(true);
      return;
    }

    // this.showCartSpinner = true;

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

          const isFilmProduct =
            this.product?.productType == this._ProductType.Typ3;
          const isFilmCart = activeCart?.cartType == CartType.Typ1;

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
            } else if (this.isChannelPartner && isFilmProduct !== isFilmCart) {
              this.openCartConflictPopup(activeCart);
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
      .subscribe(
        (val) => {
          if (val === null) {
            this.addProductToBuyCart();
          }
        },
        (error) => {}
      );
  }

  // For calculting productline logics
  calculateShipDate() {
    let trlt: number;
    const productLine = this.productLine;
    const shipDate = this.product?.estShipData?.slice(-1)[0]?.shipDate;
    switch (productLine) {
      case AllProductLine.bently || AllProductLine.druck:
        this.defaultDate$ = of(new Date(shipDate));
        this.minDate$ = of(new Date(this.product?.estShipData[0]?.shipDate));
        // this.shipDateCalculation(trlt);
        break;
      default:
        // for waygate, pana, reuter
        this.defaultDate$ = of(new Date(shipDate));
        this.minDate$ = of(new Date(this.product?.estShipData[0]?.shipDate));
        // this.defaultDate.setDate(shipDate);
        // this.minDate.setDate(shipDate);
        break;
    }
  }

  // For calculating mindate and defauldate
  shipDateCalculation(trlt: number) {
    this.defaultDate$ = of(this.defaultDate.setDate(trlt));
    this.minDate$ = of(this.minDate.setDate(trlt));
  }

  getLeadTime(lead: number | string): number {
    return Number(lead);
  }

  addProductToBuyCart() {
    const quantity = this.addToCartForm.get('quantity').value;
    if (!this.productCode || quantity <= 0) {
      return;
    }
    this.activeCartFacade
      .getEntries()
      .pipe(take(1))
      .subscribe((entries) => {
        const existingEntry = entries.find((entry: any) => {
          const isSameProduct = entry?.product?.code === this.productCode;
          if (
            this.isChannelPartner &&
            this.product?.productType === this._ProductType.Typ3
          ) {
            // If product type is Typ3 (ITFILM) Match by BOTH product code AND selected ECA code.
            return (
              isSameProduct &&
              entry?.ecaCode === this.addressModelService.getSelectedEca
            );
          }
          // For all other product types Match by product code ONLY.
          return isSameProduct;
        });

        if (existingEntry) {
          this.activeCartFacade.updateEntry(
            existingEntry?.entryNumber,
            existingEntry?.quantity + quantity
          );
          this.actions$
            .pipe(ofType(CartActions.CART_UPDATE_ENTRY_SUCCESS), take(1))
            .subscribe((cartResponse: any) => {
              this.showCartSpinner = false;
              this.isChangeAddressDisabled = false;
              this.pushAddToCartEvent(cartResponse);
              this.openModal();
            });
        } else {
          this.activeCartFacade
            .getEntry(this.productCode)
            .pipe(take(1))
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
              this.activeCartFacade.addEntry(
                this.productCode,
                quantity,
                undefined
              );
              this.increment = false;
              this.actions$
                .pipe(ofType(CartActions.CART_ADD_ENTRY_SUCCESS), take(1))
                .subscribe((cartResponse: any) => {
                  this.actions$
                    .pipe(ofType(CartActions.LOAD_CART_SUCCESS), take(1))
                    .subscribe((loadResponse: any) => {
                      this.showCartSpinner = false;
                      this.isChangeAddressDisabled = false;
                      if (!loadResponse?.payload?.cart?.deletedProductCodes) {
                        this.isProductNotAddedToCart.emit(false);
                        this.pushAddToCartEvent(cartResponse);
                        this.openModal();
                      } else {
                        this.isProductNotAddedToCart.emit(true);
                      }
                    });
                });
            })
            .unsubscribe();
        }
      });
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

  returnProduct() {
    const updatedProduct = {
      ...this.product,
      similar: false,
    };
    this.returnProdService.selectRmaProduct(updatedProduct);
    this.pushAddToCartEvent({ commerceType: GTMCartType.RMA_CART });
    this.router.navigate(['/', this.productLine, 'create-rma']);
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
        ecaCode: this.addressModelService.getSelectedEca,
      },
      scope,
    });
  }
  getShipDate(dt) {
    if (
      dt.shipDate == '01-Jan-2100' ||
      dt.shipDate.toLowerCase() == 'no estimate available'
    ) {
      return '';
    }
    return moment(dt.shipDate).format('D MMMM, YYYY');
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  getInt(product) {
    if (!!product) {
      const defaultPlant = this.product?.plantAvailableAt?.find(
        (plant) => plant.defaultPlant
      );
      if (defaultPlant) {
        return parseInt(defaultPlant.stockAvailable);
      }
    }
  }

  requestQuote() {
    this.addToCart(true);
  }

  checkStockAvailablity(product) {
    const qty = this.addToCartForm.get('quantity').value;
    let stockAvailable = false;
    if (!!product) {
      const defaultPlant = this.product?.plantAvailableAt?.find(
        (plant) => plant.defaultPlant
      );
      if (defaultPlant) {
        stockAvailable = defaultPlant.stockAvailable >= qty;
      }
    }
    return stockAvailable;
  }

  pushAddToCartEvent(cartResponse?: any) {
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
      store: this.gtmService.getItemBrand(),
      ecommerce: eventData,
      commerceType: cartResponse?.commerceType,
      cartType: cartResponse?.cartType,
    };
    this.gtmService.sendEvent(event);
  }

  onAddressSelect(address: any) {
    this.addressModelService.setSelectedEca = address.id;
    console.log('ECA Selected' + this.addressModelService.setSelectedEca);
  }

  openAddressModel(autoAddToCart?: boolean) {
    if (
      this.isChannelPartner &&
      this.product?.productType !== this._ProductType.Typ3
    ) {
      return;
    }

    // this.showCartSpinner = true;
    const componentData = {
      checkDuplicateEca: true,
      autoAddToCart: autoAddToCart,
      productCode: this.product?.code ?? '',
    };
    const addressDialog = this.launchDialogService.openDialog(
      DS_DIALOG.WAYGATE_ADDRESS_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (addressDialog) {
      addressDialog.pipe(take(1)).subscribe((value) => {
        console.log('value', value);
        let aval = value?.instance?.launchDialogService?._dialogClose._value;
        console.log(value);
        if (aval && ['Cross click', 'cancel'].includes(aval)) {
          this.showCartSpinner = false;
        }

        this.launchDialogService.dialogClose
          .pipe(take(1))
          .subscribe((result: any) => {
            this.showCartSpinner = false;
            const updatedProduct = result?.updatedProduct;
            if (updatedProduct) {
              this.addressModelService.setUpdatedProduct(updatedProduct);
            }

            if (autoAddToCart) {
              this.addToCart(true);
            }
          });
      });
    }
    this.addressModelService.setAddAddressFlag('enduser');
  }

  openCartConflictPopup(cart) {
    this.launchDialogService.closeDialog('opened cart conflict model');
    const duplicateDialog$ = this.launchDialogService.openDialog(
      DS_DIALOG.CART_TYPE_CONFLICT_DIALOG,
      undefined,
      undefined
    );
    if (duplicateDialog$) {
      duplicateDialog$.pipe(take(1)).subscribe((value) => {});
    }
    this.launchDialogService.dialogClose.subscribe((value: any) => {
      if (value === DecisionType.SaveAndContinue) {
        this.saveCart(cart);
        return;
      }
    });
  }

  saveCart(cart) {
    const componentData = {
      currentCart: cart,
    };
    const saveCartModal = this.launchDialogService.openDialog(
      DS_DIALOG.SAVE_CART_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (saveCartModal) {
      saveCartModal.pipe(take(1)).subscribe((value) => {
        console.log('save cart close', value);
        if (value?.action === 'save') {
          this.activeCartFacade.reloadActiveCart();
          this.actions$
            .pipe(ofType(CartActions.LOAD_CART_SUCCESS), take(1))
            .subscribe(() => {
              this.addProductToBuyCart();
            });
        } else {
          this.addProductToBuyCart();
        }
      });
    }
  }

  ngOnDestroy() {
    this.addressModelService.setAddAddressFlag(null);
    this.addressModelService.setAddress(null);
    this.addressModelService.setSelectedEca = null;
    this.addressModelService.setSelEcaText = null;
  }
}
