import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
  Product,
  ProductScope,
  ProductService,
  RoutingService,
  TranslationService,
  WindowRef,
} from '@spartacus/core';
import { Order, OrderHistoryFacade } from '@spartacus/order/root';
import {
  CommonConfigurator,
  CommonConfiguratorUtilsService,
  ConfiguratorModelUtils,
  ConfiguratorRouter,
  ConfiguratorRouterExtractorService,
} from '@spartacus/product-configurator/common';
import {
  Configurator,
  ConfiguratorCartService,
  ConfiguratorCommonsService,
  ConfiguratorGroupsService,
  ConfiguratorQuantityService,
  ConfiguratorStorefrontUtilsService,
} from '@spartacus/product-configurator/rulebased';
import {
  CurrentProductService,
  ICON_TYPE,
  IntersectionOptions,
  IntersectionService,
  LaunchDialogService,
} from '@spartacus/storefront';
import { UserAccountFacade } from '@spartacus/user/account/root';

import {
  Observable,
  ReplaySubject,
  Subject,
  Subscription,
  combineLatest,
  firstValueFrom,
  of,
} from 'rxjs';
import {
  concatMap,
  delay,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';
import { ProductCatelogService } from '../../../../core/product-catalog/services/product-catelog.service';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { GoogleTagManagerService } from '../../../../shared/services/gtm.service';
import { MyFavoritesService } from '../../../my-favorites/my-favorites.service';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { CommerceTypes } from '../../../../shared/models/commerceTypes.model';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { ApiService } from '../../../../core/http/api.service';
import { HttpParams } from '@angular/common/http';
import { FileProgressLayouts } from '../../../../shared/models/fileSize.model';
import { DSConfiguratorCartService } from '../../../../core/product-configurator/configurator-cart.service';
import { ProductCategoriesService } from '../../../../core/product-catalog/services/product-categories.service';
import { Store } from '@ngrx/store';
import { SetAccessoriesInStore } from '../../../../core/product-catalog/store/actions/product-categories.action';
import {
  AllProductLine,
  AllProductLineNames,
} from '../../../../shared/enums/availableProductList.enum';
import { ConfiguratorPriceSummaryServiceService } from '../configurator-price-summary-service.service';
import { SpinnerOverlayService } from '../../../../shared/components/spinner-overlay/spinner-overlay.service';
import {
  Ecommerce,
  EcommerceItem,
  GTMDataLayer,
} from '../../../../shared/models/googleTagManager.model';
import { GtmEvents } from '../../../../shared/enums/gtm.enum';
import { throws } from 'assert';

@Component({
  standalone: false,
  selector: 'cx-configurator-price-summary',
  templateUrl: './configurator-price-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./configurator-price-summary.component.scss'],
})
export class ConfiguratorPriceSummaryComponent {
  uploadFileStatus: boolean = true;
  configAttachmentCode: any;
  zeroBuyMessageFlag: boolean = false;
  currentUserType;
  userLoggedIn$: Observable<boolean>;
  isAddToCartCalled = false;
  isChecked = false;
  productLine: string;
  showSpinner: boolean = false;
  totalPriceCheck: boolean = false;
  bentlyConfiguredPrice$ = new ReplaySubject<any>(1);
  zeroBuyCheck$ = new ReplaySubject<any>(1);
  configurationIncomplete: boolean = false;
  private bentlyPriceSubject = new Subject<any>();
  bentlyConfiguredPriceValue: any;
  quantityForm = new FormGroup({
    quantity: new FormControl(1),
  });
  maxQuantity: number = 9999;
  quantity: number = 1;
  addAttachment: boolean = true;
  readonly ALLOWED_EXTENSIONS = ['doc', 'pdf'];
  showIcon: boolean = true;
  readonly layouts = FileProgressLayouts;
  files = [];
  file: File;
  fileName: string;
  AllProductLine = AllProductLine;
  quickOrderFlow: boolean = false;
  quickOrderData: any = [];
  ownerDetails;
  ngOnInit() {
    this.configRouterExtractorService
      .extractRouterData()
      .pipe(
        switchMap((routerData) =>
          this.configuratorCommonsService.getConfiguration(routerData.owner)
        )
      )
      .subscribe((data: any) => {
        console.log(data?.owner);
        this.ownerDetails = data?.owner;
      });
    if (localStorage.getItem('quickOrderParts')) {
      this.quickOrderFlow = true;
      this.quickOrderData = localStorage
        .getItem('quickOrderParts')
        .split('\n')
        .map((item) => item.replace(/,1$/, ''));
    }
    // .split('-')[0]
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.userLoggedIn$ = this.authService.isUserLoggedIn();
    this.configuration$.subscribe((res) => {
      this.zeroBuyMessageFlag = false;
      this.totalPriceCheck = false;
      this.files = [];
    });
    this.userLoggedIn$.subscribe((res) => {
      if (res) this.currentUserType = OCC_USER_ID_CURRENT;
      else this.currentUserType = OCC_USER_ID_ANONYMOUS;
    });
  }

  ngOnChanges() {
    this.userLoggedIn$ = this.authService.isUserLoggedIn();

    this.userLoggedIn$.subscribe((res) => {
      if (res) this.currentUserType = OCC_USER_ID_CURRENT;
      else this.currentUserType = OCC_USER_ID_ANONYMOUS;
    });
  }
  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.style.display = 'none';
  }
  product$: Observable<Product> = this.configRouterExtractorService
    .extractRouterData()
    .pipe(
      switchMap((routerData) =>
        this.configuratorCommonsService.getConfiguration(routerData.owner)
      ),
      map((configuration) => {
        switch (configuration.owner.type) {
          case CommonConfigurator.OwnerType.PRODUCT:
          case CommonConfigurator.OwnerType.CART_ENTRY:
            return configuration.productCode;
          case CommonConfigurator.OwnerType.ORDER_ENTRY:
            return configuration.overview.productCode;
        }
      }),
      switchMap((productCode) => this.productService.get(productCode))
    );
  configuration$: Observable<Configurator.Configuration> =
    this.configRouterExtractorService.extractRouterData().pipe(
      switchMap((routerData) => {
        return this.configuratorCommonsService.getConfiguration(
          routerData.owner
        );
      })
    );
  showMore = false;
  iconTypes = ICON_TYPE;

  constructor(
    protected configuratorCommonsService: ConfiguratorCommonsService,
    protected configRouterExtractorService: ConfiguratorRouterExtractorService,
    private authService: AuthService,
    private productService: ProductService,
    private auth: AuthService,
    private userAccountFacade: UserAccountFacade,
    private route: ActivatedRoute,
    private productCatelogService: ProductCatelogService,
    private currentProductService: CurrentProductService,
    private myFavouritesService: MyFavoritesService,
    private globalMessageService: GlobalMessageService,
    private cd: ChangeDetectorRef,
    private gtmService: GoogleTagManagerService,
    protected routingService: RoutingService,
    protected configuratorCartService: DSConfiguratorCartService,
    protected configuratorGroupsService: ConfiguratorGroupsService,
    protected orderHistoryFacade: OrderHistoryFacade,
    protected commonConfiguratorUtilsService: CommonConfiguratorUtilsService,
    protected configUtils: ConfiguratorStorefrontUtilsService,
    protected intersectionService: IntersectionService,
    // eslint-disable-next-line @typescript-eslint/unified-signatures
    protected configuratorQuantityService: ConfiguratorQuantityService,
    private customerAccService: CustomerAccountService,
    protected router: Router,
    protected winRef: WindowRef,
    private launchDialogService: LaunchDialogService,
    protected activeCartFacade: ActiveCartFacade,
    private productCatService: ProductCatelogService,
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
    private translate: TranslationService,
    private productCategoriesService: ProductCategoriesService,
    private store: Store,
    private configuratorPriceSummaryService: ConfiguratorPriceSummaryServiceService,
    private spinnerOverLayService: SpinnerOverlayService
  ) {}
  checkLastProduct(id: string) {
    const configData = JSON.parse(localStorage.getItem('configuredData'));
    if (Object.keys(configData).length === 0) {
      return true;
    }
    let configuredProducts = [];
    if (configData.mainProduct.configurable) {
      configuredProducts.push(configData.mainProduct.code);
    }
    for (let i = 0; i < configData.vclist.length; i++) {
      {
        configuredProducts.push(configData.vclist[i].code);
      }
    }
    if (configuredProducts[configuredProducts.length - 1] === id) return true;
    else return false;
  }
  getProductImageAlt(product: Product): string {
    return product.images?.['PRIMARY']?.['thumbnail']?.altText;
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  async updatePrice(
    configId: any,
    productCode: any,
    configuration: Configurator.Configuration
  ) {
    if (this.configurationCompleteChecker(configuration)) {
      this.totalPriceCheck = true;
      this.zeroBuyMessageFlag = false;
      this.zeroBuyCheck(configuration);
      this.configuratorPriceSummaryService.showError(false);
      if (this.productLine == AllProductLine.bently) {
        this.showSpinner = true;
        let reqbody = {
          productCode: productCode,
          configId: configId,
          productLine: this.productLine,
        };

        try {
          this.getUpdatedPriceForBentley(reqbody).subscribe(
            (price) => {
              this.showSpinner = false;
              this.bentlyConfiguredPrice$.next(price);
              this.globalMessageService.add(
                this.getTranslatedText('pdp.updatePriceForProduct'),
                GlobalMessageType.MSG_TYPE_CONFIRMATION,
                5000
              );
              const configData = JSON.parse(
                localStorage.getItem('configuredData')
              );
              let producitem: EcommerceItem[] = [];
              producitem.push({
                item_id: productCode,
                config_id: configId,
                item_name: configData?.mainProduct?.name,
                index: 0,
                item_brand: this.gtmService.getItemBrand(),
                price: price?.basePrice.value,
              });
              let purchaseEcommerceEcommerce: Ecommerce = {
                items: producitem,
                currency: price?.basePrice?.currencyIso,
              };
              let selectItemDataLayer: GTMDataLayer = {
                event: GtmEvents.PriceLookupVC,
                store: AllProductLineNames[this.productLine],
                ecommerce: purchaseEcommerceEcommerce,
                vcBaseProductCode: productCode,
                vcConfigId: configId,
                vcPrice: price?.basePrice?.value,
                vcBaseProductName: configData?.mainProduct?.name,
                vcPosition: this.quickOrderFlow
                  ? 'Quick Order Configuration Page'
                  : 'Configuration Page',
              };
              this.gtmService.sendEvent(selectItemDataLayer);
              window.scrollTo(0, 0);
            },
            (error: any) => {
              this.showSpinner = false;
              this.globalMessageService.add(
                this.getTranslatedText('pdp.issueUpdatingPrice'),
                GlobalMessageType.MSG_TYPE_ERROR,
                5000
              );
              window.scrollTo(0, 0);
              this.cdr.detectChanges();
            }
          );
        } catch (error) {
          console.log(error);
        } finally {
        }
      }
    } else {
      this.configuratorPriceSummaryService.showError(true);
    }
  }
  configurationCompleteChecker(configuration: Configurator.Configuration) {
    let count = 0,
      checker = 0;
    for (let i = 0; i < configuration.groups.length; i++) {
      if (configuration.groups[i].configurable == true) {
        count++;
      }
    }
    for (let i = 0; i < configuration.groups.length; i++) {
      if (
        configuration.groups[i].configurable == true &&
        configuration.groups[i].complete == true &&
        configuration.groups[i].consistent == true
      ) {
        checker++;
      }
    }
    if (checker == count) {
      return true;
    } else {
      return false;
    }
    // return configuration.complete;
  }
  zeroBuyCheck(configuration: Configurator.Configuration) {
    if (this.configurationCompleteChecker(configuration) == true) {
      const params1 = ['ccpconfigurator', 'products', 'vcconfiguration'];
      const url = this.apiService.constructUrl(params1);
      // let queryParams = new HttpParams().set(
      //   'productCode',
      //   configuration.productCode
      // );

      this.apiService
        .getData(url, { productCode: configuration.productCode })
        .subscribe((resdata) => {
          this.zeroBuyCheck$.next(resdata);
        });
    }
  }
  getUpdatedPriceForBentley(reqBody: any): Observable<any> {
    const params1 = ['users', 'current', 'products', 'configPrice'];
    const url = this.apiService.constructUrl(params1);
    // let queryParams = new HttpParams().set('productLine', 'cordant');
    // queryParams = queryParams.append('productLine', 'Cordant');
    return this.apiService.postData(url, reqBody);
  }

  protected subscription = new Subscription();
  iconType = ICON_TYPE;

  container$: Observable<{
    routerData: ConfiguratorRouter.Data;
    configuration: Configurator.Configuration;
    hasPendingChanges: boolean;
  }> = this.configRouterExtractorService.extractRouterData().pipe(
    switchMap((routerData) =>
      this.configuratorCommonsService
        .getConfiguration(routerData.owner)
        .pipe(map((configuration) => ({ routerData, configuration })))
        .pipe(
          switchMap((cont) =>
            this.configuratorCommonsService
              .hasPendingChanges(cont.configuration.owner)
              .pipe(
                map((hasPendingChanges) => ({
                  routerData: cont.routerData,
                  configuration: cont.configuration,
                  hasPendingChanges,
                }))
              )
          )
        )
    )
  );

  protected navigateToCart(): void {
    // this.router.navigate([this.productLine, 'cart']);
    /* this.routingService.go('cart'); */
    this.winRef.location.href = `/${this.productLine}/cart`;
  }

  protected navigateToOverview(
    configuratorType: string,
    owner: CommonConfigurator.Owner
  ): void {
    this.routingService.go({
      cxRoute: 'configureOverview' + configuratorType,
      params: { ownerType: 'cartEntry', entityKey: owner.id },
    });
  }

  protected displayConfirmationMessage(key: string): void {
    this.globalMessageService.add(
      { key: key },
      GlobalMessageType.MSG_TYPE_CONFIRMATION
    );
  }

  /**
   * Performs the navigation to the corresponding location (cart or overview pages).
   *
   * @param {string} configuratorType - Configurator type
   * @param {CommonConfigurator.Owner} owner - Owner
   * @param {boolean} isAdd - Is add to cart
   * @param {boolean} isOverview - Is overview page
   * @param {boolean} showMessage - Show message
   */
  performNavigation(
    configuratorType: string,
    owner: CommonConfigurator.Owner,
    isAdd: boolean,
    isOverview: boolean,
    showMessage: boolean
  ): void {
    const messageKey = isAdd
      ? 'configurator.addToCart.confirmation'
      : 'configurator.addToCart.confirmationUpdate';
    /*     if (isOverview) {
      this.navigateToCart();
    } else {
      this.navigateToOverview(configuratorType, owner);
    } */
    this.navigateToCart();
    if (showMessage) {
      this.displayConfirmationMessage(messageKey);
    }
  }

  /**
   * Decides on the resource key for the button. Depending on the business process (owner of the configuration) and the
   * need for a cart update, the text will differ
   * @param {ConfiguratorRouter.Data} routerData - Reflects the current router state
   * @param {Configurator.Configuration} configuration - Configuration
   * @returns {string} The resource key that controls the button description
   */
  getButtonResourceKey(
    routerData: ConfiguratorRouter.Data,
    configuration: Configurator.Configuration
  ): string {
    if (
      routerData.isOwnerCartEntry &&
      configuration.isCartEntryUpdateRequired
    ) {
      return 'configurator.addToCart.buttonUpdateCart';
    } else if (
      routerData.isOwnerCartEntry &&
      !configuration.isCartEntryUpdateRequired
    ) {
      return 'configurator.addToCart.buttonAfterAddToCart';
    } else {
      return 'configurator.addToCart.button';
    }
  }
  private openSwitchCartModal(
    currentCartType,
    switchToCartType,
    cartId,
    configuration: Configurator.Configuration,
    routerData: ConfiguratorRouter.Data,
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
          this.onAddToCart(configuration, routerData);
        }
      });
    }
  }
  addToCart(
    configuration: Configurator.Configuration,
    routerData: ConfiguratorRouter.Data,
    isAddToQuote?: boolean
  ) {
    if (this.quickOrderFlow) {
      const url = this.apiService.constructUrl([
        'users',
        'current',
        'bulkOrders',
        'getVCProductData',
      ]);

      this.apiService
        .postData(url, {
          productCode: configuration.productCode,
          configId: configuration.configId,
          productLine: this.productLine,
        })
        .pipe(take(1))
        .subscribe((res: any) => {
          const updatedPartNumber = res?.vcLongPartNumber;
          const currentVCProd =
            this.winRef.localStorage.getItem('currentVCProd');
          res = { ...res, configId: configuration.configId };

          this.productCategoriesService.setVCConfigPrices(res);

          let quickOrderParts = localStorage.getItem('quickOrderParts');

          if (quickOrderParts && updatedPartNumber && currentVCProd) {
            // let partsArray = quickOrderParts.split('\n');

            // const wrongPart = (
            //   localStorage.getItem('configuringPart') ||
            //   configuration.productCode
            // )
            //   .trim()
            //   .toUpperCase();

            // const updatedParts = partsArray.map((item) => {
            //   const part = item.replace(/,1$/, '');
            //   const basePart = part.split('-')[0];
            //   // if (this.quickOrderData.includes(part)) {
            //   //   return updatedPartNumber + ',1';
            //   // }
            //   if (basePart === wrongPart) {
            //     return updatedPartNumber + ',1';
            //   }

            //   return item;
            // });

            let newQuickOrderParts = quickOrderParts.replace(
              currentVCProd,
              updatedPartNumber
            );

            localStorage.setItem('quickOrderParts', newQuickOrderParts);
          }

          let currentquickOrderConfigData = [];
          if (localStorage.getItem('quickOrderConfigData')) {
            currentquickOrderConfigData = JSON.parse(
              localStorage.getItem('quickOrderConfigData')
            );
          }

          const existingIndex = currentquickOrderConfigData.findIndex(
            (item) => item.pcode === updatedPartNumber
          );

          if (existingIndex !== -1) {
            currentquickOrderConfigData[existingIndex].configId =
              configuration.configId;
          } else {
            currentquickOrderConfigData.push({
              pcode: updatedPartNumber,
              configId: configuration.configId,
            });
          }

          localStorage.setItem(
            'quickOrderConfigData',
            JSON.stringify(currentquickOrderConfigData)
          );

          this.productCategoriesService.forceCreateNewConfig(this.ownerDetails);

          this.router.navigate(['/', this.productLine, 'quick-order']);
        });

      return;
    }
    const isOwnerCartEntry =
      routerData.owner.type === CommonConfigurator.OwnerType.CART_ENTRY;
    const configData = JSON.parse(localStorage.getItem('configuredData'));
    this.spinnerOverLayService.show();
    if (
      !isOwnerCartEntry &&
      (configData.vclist.length != 0 || configData.nonvclist.length != 0)
    ) {
      this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
        let reqpayload = {
          mainEntry: {
            quantity: 1,
            product: {
              code: configData.mainProduct.code,
            },
            ...(configData.mainProduct.configurable && {
              configId: configData.mainProduct.configId,
            }),
            ...(configData.mainProduct.configAttachmentCode && {
              configAttachmentMedia:
                configData.mainProduct.configAttachmentCode,
            }),
          },
        };
        let acclist = [];
        for (let i = 0; i < configData.nonvclist.length; i++) {
          let a = {
            quantity: configData.nonvclist[i].quantity,
            product: {
              code: configData.nonvclist[i].code,
            },
          };
          acclist.push(a);
        }
        for (let i = 0; i < configData.vclist.length; i++) {
          let a = {
            quantity: configData.vclist[i].quantity,
            product: {
              code: configData.vclist[i].code,
            },
            configId: configData.vclist[i].configId,
            ...(configData.vclist[i].configAttachmentCode && {
              configAttachmentMedia: configData.vclist[i].configAttachmentCode,
            }),
          };
          acclist.push(a);
        }
        const payload = {
          ...reqpayload,
          accessoryEntries: acclist,
        };

        let urlParams = [
          'users',
          'current',
          'carts',
          cartId,
          'accessoryEntries',
        ];

        let url = this.apiService.constructUrl(urlParams);
        this.apiService.postData(url, payload).subscribe((res) => {
          this.store.dispatch(new SetAccessoriesInStore({}));
          this.spinnerOverLayService.hide();
          this.winRef.location.href = `/${this.productLine}/cart`;
        });
      });
    } else {
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
                  cartId,
                  configuration,
                  routerData
                );
              } else if (
                lastSalesArea &&
                lastSalesArea.salesAreaId != currentSalesArea.salesAreaId
              ) {
                this.openSwitchCartModal(
                  activeCart.commerceType,
                  currentCartType,
                  cartId,
                  configuration,
                  routerData,
                  true
                );
              } else {
                this.onAddToCart(configuration, routerData);
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
              this.onAddToCart(configuration, routerData);
            }
          },
          (error) => {}
        );
    }
  }
  /**
   * Triggers action and navigation, both depending on the context. Might result in an addToCart, updateCartEntry,
   * just a cart navigation or a browser back navigation
   * @param {Configurator.Configuration} configuration - Configuration
   * @param {ConfiguratorRouter.Data} routerData - Reflects the current router state
   */
  onAddToCart(
    configuration: Configurator.Configuration,
    routerData: ConfiguratorRouter.Data
  ): void {
    const pageType = routerData.pageType;
    const configuratorType = configuration.owner.configuratorType;
    const isOverview = pageType === ConfiguratorRouter.PageType.OVERVIEW;
    const isOwnerCartEntry =
      routerData.owner.type === CommonConfigurator.OwnerType.CART_ENTRY;
    const owner = configuration.owner;
    const quantity = this.quantityForm.value.quantity;
    const attachment = this.file;
    const currentGroup = configuration.interactionState.currentGroup;
    console.log(isOwnerCartEntry);
    if (currentGroup) {
      this.configuratorGroupsService.setGroupStatusVisited(
        configuration.owner,
        currentGroup
      );
    }
    this.container$
      .pipe(
        filter((cont) => !cont.hasPendingChanges),
        take(1)
      )
      .subscribe(() => {
        if (isOwnerCartEntry) {
          this.configuratorCartService.updateCartEntry(
            configuration,
            attachment,
            this.configAttachmentCode
          );

          this.performNavigation(
            configuratorType,
            owner,
            false,
            isOverview,
            configuration.isCartEntryUpdateRequired ?? false
          );
          this.spinnerOverLayService.hide();
          this.configuratorCommonsService.removeConfiguration(owner);
        } else {         
          if (this.isAddToCartCalled) {
            return;
          }
          this.isAddToCartCalled = true;
          this.configuratorCartService.addToCart(
            owner.id,
            configuration.configId,
            owner,
            quantity,
            attachment,
            this.configAttachmentCode
          );

          this.configuratorCommonsService
            .getConfiguration(owner)
            .pipe(
              filter(
                (configWithNextOwner) =>
                  configWithNextOwner.nextOwner !== undefined
              ),
              take(1)
            )
            .subscribe((configWithNextOwner) => {
              //See preceeding filter operator: configWithNextOwner.nextOwner is always defined here
              const nextOwner =
                configWithNextOwner.nextOwner ??
                ConfiguratorModelUtils.createInitialOwner();
              this.performNavigation(
                configuratorType,
                nextOwner,
                true,
                isOverview,
                true
              );

              // we clean up the cart entry related configuration, as we might have a
              // configuration for the same cart entry number stored already.
              // (Cart entries might have been deleted)

              // we do not clean up the product bound configuration yet, as existing
              // observables would instantly trigger a re-create.
              // Cleaning up this obsolete product bound configuration will only happen
              // when a new config form requests a new observable for a product bound
              // configuration
              this.spinnerOverLayService.hide();
              this.configuratorCommonsService.removeConfiguration(nextOwner);
            });
        }
      });
  }
  increaseQuantity(count: any) {
    this.quantity = count;
  }

  decreaseQuantity(count: any) {
    this.quantity = count;
  }
  quantityAdded(count: any) {
    this.quantity = count;
  }

  addAttachmentToggle() {
    this.addAttachment = !this.addAttachment;
  }

  async selectedFiles(event, productCode: string) {
    this.files = event;
    this.file = this.files[0];
    console.log(productCode);
    const reqPayload = new FormData();
    reqPayload.append('file', this.file);
    const params1 = ['ccpconfigurator', 'upload', 'configAttachment'];
    const url = this.apiService.constructUrl(params1);
    try {
      const response = await firstValueFrom(
        this.apiService.postData(url, reqPayload)
      );
      this.configAttachmentCode = response;
      let configData = await firstValueFrom(
        this.productCategoriesService.fetchSelectedAccessories()
      );
      if (configData.mainProduct.code === productCode) {
        let updatedMainProduct = {
          ...configData.mainProduct,
          configAttachmentCode: response,
        };
        const updatedConfigData = {
          ...configData,
          mainProduct: updatedMainProduct,
        };
        this.store.dispatch(new SetAccessoriesInStore(updatedConfigData));
      }
      let latestconfigData = await firstValueFrom(
        this.productCategoriesService.fetchSelectedAccessories()
      );

      const updatedvclist = [];
      for (let i = 0; i < latestconfigData.vclist.length; i++) {
        const vc = latestconfigData.vclist[i];
        if (latestconfigData.vclist[i].code === productCode) {
          updatedvclist.push({
            ...vc,
            configAttachmentCode: response,
          });
        } else {
          updatedvclist.push(vc);
        }
      }
      const updatedConfigData = {
        ...latestconfigData,
        vclist: updatedvclist,
      };

      this.store.dispatch(new SetAccessoriesInStore(updatedConfigData));
    } catch (err) {
      console.log(err);
    }
  }

  deletedFiles(event) {
    if (this.files.indexOf(event) > -1) {
      this.files.splice(this.files.indexOf(event), 1);
      this.file = null;
    }
  }
  nextConfiguration(id: string) {
    const configData = JSON.parse(localStorage.getItem('configuredData'));
    const configurableProducts = [];
    //if (configData.mainProduct.configurable) {
    if (configData?.mainProduct?.configurable === true) {
      configurableProducts.push(configData.mainProduct.code);
    }
    for (let i = 0; i < configData.vclist.length; i++) {
      {
        configurableProducts.push(configData.vclist[i].code);
      }
    }
    for (let i = 0; i < configurableProducts.length - 1; i++) {
      if (configurableProducts[i] === id) {
        this.router.navigate([
          '/configure/vc/product/entityKey/',
          configurableProducts[i + 1],
        ]);
      }
    }
  }
}
