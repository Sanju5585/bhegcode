import {
  QuickOrderFacade,
  QuickOrderOrderEntriesContextToken,
  defaultQuickOrderConfig
} from "./chunk-TRXSWON6.js";
import {
  ActiveCartFacade,
  CartAddEntryFailEvent,
  CartAddEntrySuccessEvent,
  OrderEntriesSource,
  ProductImportStatus
} from "./chunk-KEAKWHYV.js";
import {
  AtMessageModule,
  CmsComponentData,
  FormErrorsModule,
  FormRequiredAsterisksComponent,
  FormRequiredLegendComponent,
  ICON_TYPE,
  IconComponent,
  IconModule,
  ItemCounterComponent,
  ItemCounterModule,
  MediaComponent,
  MediaModule,
  MessageComponent,
  MessageComponentModule,
  ProgressButtonComponent,
  ProgressButtonModule
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  BASE_SITE_CONTEXT_ID,
  Config,
  EventService,
  FeatureConfigService,
  FeatureDirective,
  FeaturesConfigModule,
  GlobalMessageService,
  GlobalMessageType,
  HttpErrorModel,
  I18nModule,
  LoggerService,
  ProductConnector,
  ProductSearchConnector,
  SiteContextParamsService,
  StatePersistenceService,
  StorageSyncType,
  TranslatePipe,
  UrlModule,
  UrlPipe,
  WindowRef,
  provideDefaultConfig,
  useFeatureStyles
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-EBCNDD52.js";
import "./chunk-YMQEGXEG.js";
import "./chunk-6KXUHIAW.js";
import "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import "./chunk-2A6OHZCE.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  ɵNgNoValidate
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  KeyValuePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Injectable,
  Input,
  NgModule,
  ViewChild,
  inject,
  isDevMode,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-7OJSO65L.js";
import {
  merge
} from "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  BehaviorSubject,
  Subject,
  catchError,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  first,
  map,
  mergeAll,
  of,
  take,
  tap,
  timer
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-quick-order-core.mjs
var QuickOrderService = class _QuickOrderService {
  constructor(activeCartService, config, eventService, productSearchConnector) {
    this.activeCartService = activeCartService;
    this.config = config;
    this.eventService = eventService;
    this.productSearchConnector = productSearchConnector;
    this.productAdded$ = new Subject();
    this.entries$ = new BehaviorSubject([]);
    this.softDeletedEntries$ = new BehaviorSubject({});
    this.nonPurchasableProductError$ = new BehaviorSubject(null);
    this.hardDeleteTimeout = this.config.quickOrder?.list?.hardDeleteTimeout || 7e3;
    this.quickOrderListLimit = 0;
    this.clearDeleteTimeouts = {};
  }
  ngOnDestroy() {
    this.clearDeletedEntries();
  }
  /**
   * Get entries
   */
  getEntries() {
    return this.entries$;
  }
  /**
   * Search products using query
   */
  searchProducts(query, maxProducts) {
    if (this.productSearchConnector) {
      const searchConfig = {
        pageSize: maxProducts || defaultQuickOrderConfig.quickOrder?.searchForm?.maxProducts
      };
      return this.productSearchConnector.search(query, searchConfig).pipe(map((searchPage) => searchPage.products || []));
    } else {
      return of([]);
    }
  }
  /**
   * Clear a list of added entries
   */
  clearList() {
    this.entries$.next([]);
  }
  /**
   * Get information about the possibility to add the next product
   */
  canAdd(code, productData) {
    if (code && productData) {
      return of(this.isProductOnTheList(code) || !this.isLimitExceeded(code, productData));
    } else if (code) {
      return of(this.isProductOnTheList(code) || !this.isLimitExceeded());
    } else {
      return of(!this.isLimitExceeded());
    }
  }
  /**
   * Set quick order list limit property
   */
  setListLimit(limit) {
    this.quickOrderListLimit = limit;
  }
  /**
   * Load a list of entries
   */
  loadEntries(entries = []) {
    this.entries$.next(entries);
  }
  /**
   * Load a list of entries
   */
  updateEntryQuantity(entryIndex, quantity) {
    const entries = this.entries$.getValue() || [];
    entries[entryIndex].quantity = quantity;
    this.entries$.next(entries);
  }
  /**
   * Delete single entry from the list
   */
  softDeleteEntry(index) {
    this.entries$.pipe(take(1)).subscribe((entries) => {
      const entriesList = entries;
      this.addSoftEntryDeletion(entriesList[index], true);
      entriesList.splice(index, 1);
      this.entries$.next(entriesList);
    });
  }
  /**
   * Add product to the quick order list
   */
  addProduct(product, quantity = 1) {
    const entry = this.generateOrderEntry(product, quantity);
    this.addEntry(entry);
  }
  /**
   * Return product added subject
   */
  getProductAdded() {
    return this.productAdded$;
  }
  /**
   * Set product added subject
   */
  setProductAdded(productCode) {
    this.productAdded$.next(productCode);
  }
  /**
   * Adding to cart all products from the list
   */
  addToCart() {
    let entries = [];
    const events = [];
    const subscription = this.eventService.get(CartAddEntrySuccessEvent).subscribe((cartEvent) => {
      if (cartEvent.quantityAdded === 0 || !!cartEvent.quantityAdded && cartEvent.quantityAdded < cartEvent.quantity) {
        events.push(this.createQuickOrderResultEvent(cartEvent));
      }
    });
    subscription.add(this.eventService.get(CartAddEntryFailEvent).subscribe((cartEvent) => {
      events.push(this.createQuickOrderResultEvent(cartEvent));
    }));
    return this.getEntries().pipe(first(), switchMap((elements) => {
      entries = elements;
      this.activeCartService.addEntries(elements);
      this.clearList();
      return this.activeCartService.isStable();
    }), filter((isStable) => isStable), map(() => [entries, events]), tap(() => subscription.unsubscribe()));
  }
  /**
   * Return soft deleted entries
   */
  getSoftDeletedEntries() {
    return this.softDeletedEntries$;
  }
  /**
   * Restore soft deleted entry
   */
  restoreSoftDeletedEntry(productCode) {
    const entry = this.getSoftDeletedEntry(productCode);
    this.addEntry(entry);
    this.hardDeleteEntry(productCode);
  }
  /**
   * Clear deleted entry from the list
   */
  hardDeleteEntry(productCode) {
    const entry = this.getSoftDeletedEntry(productCode);
    const deletedEntries = this.softDeletedEntries$.getValue();
    if (entry) {
      delete deletedEntries[productCode];
      this.softDeletedEntries$.next(deletedEntries);
    }
    this.clearDeleteTimeout(productCode);
  }
  /**
   * Clear all deleted entries and timeout subscriptions
   */
  clearDeletedEntries() {
    Object.values(this.clearDeleteTimeouts).forEach((subscription) => subscription.unsubscribe());
    this.softDeletedEntries$.next({});
    this.clearDeleteTimeouts = {};
  }
  /**
   *  Return non purchasable product error
   */
  getNonPurchasableProductError() {
    return this.nonPurchasableProductError$;
  }
  /**
   * Set error that selected product is not purchasable
   */
  setNonPurchasableProductError(product) {
    this.nonPurchasableProductError$.next(product);
  }
  /**
   * Clear not purchasable product error
   */
  clearNonPurchasableProductError() {
    this.nonPurchasableProductError$.next(null);
  }
  /**
   * Add soft deleted entry to the cached list
   */
  addSoftEntryDeletion(entry, clearTimeout = true) {
    const deletedEntries = this.softDeletedEntries$.getValue();
    const productCode = entry?.product?.code;
    if (productCode) {
      deletedEntries[productCode] = entry;
      this.softDeletedEntries$.next(deletedEntries);
      if (clearTimeout) {
        const subscription = timer(this.hardDeleteTimeout).subscribe(() => {
          this.hardDeleteEntry(productCode);
        });
        this.clearDeleteTimeouts[productCode] = subscription;
      }
    }
  }
  /**
   * Get soft deletion entry
   */
  getSoftDeletedEntry(productCode) {
    const deletedEntries = this.softDeletedEntries$.getValue();
    return deletedEntries[productCode];
  }
  /**
   * Generate Order Entry from Product
   */
  generateOrderEntry(product, quantity) {
    return {
      basePrice: product.price,
      product,
      quantity,
      totalPrice: product.price
    };
  }
  /**
   * Add single entry to the list
   */
  addEntry(entry) {
    if (entry?.product?.code && !this.isProductOnTheList(entry.product.code) && this.isLimitExceeded()) {
      return;
    }
    const entries = this.entries$.getValue() || [];
    const entryStockLevel = entry.product?.stock?.stockLevel;
    if (entryStockLevel && entry.quantity && entry.quantity > entryStockLevel) {
      entry.quantity = entryStockLevel;
    }
    if (entry.product?.code && this.isProductOnTheList(entry.product.code)) {
      const entryIndex = entries.findIndex((item) => item.product?.code === entry.product?.code);
      const quantity = entries[entryIndex].quantity;
      if (quantity && entry.quantity) {
        entries[entryIndex].quantity = quantity + entry?.quantity;
        const newQuantity = entries[entryIndex].quantity;
        if (newQuantity && entryStockLevel && newQuantity > entryStockLevel) {
          entries[entryIndex].quantity = entryStockLevel;
        }
        this.entries$.next([...entries]);
      }
    } else {
      this.entries$.next([...entries, ...[entry]]);
    }
    this.productAdded$.next(entry.product?.code);
  }
  /**
   * Verify if product is already on the list
   */
  isProductOnTheList(productCode) {
    const entries = this.entries$.getValue() || [];
    return !!entries.find((item) => item.product?.code === productCode);
  }
  isLimitExceeded(code, productsData) {
    const entries = this.entries$.getValue() || [];
    const missingProductIndex = code && productsData ? this.getMissingProductIndex(entries, code, productsData) : 0;
    return entries.length + (missingProductIndex || 0) >= this.quickOrderListLimit;
  }
  /**
   * Get the index of the missing product in the productsData array identified by code
   * from the entries array.
   */
  getMissingProductIndex(entries, code, productsData) {
    const missingProducts = productsData?.filter((product) => !entries.map((entry) => entry.product?.code).includes(product.productCode)) || [];
    return missingProducts.findIndex((product) => product.productCode === code);
  }
  createQuickOrderResultEvent(cartEvent) {
    const evt = {
      productCode: cartEvent.productCode,
      quantity: cartEvent.quantity
    };
    if ("entry" in cartEvent) {
      evt.entry = cartEvent.entry;
    }
    if ("quantityAdded" in cartEvent) {
      evt.quantityAdded = cartEvent.quantityAdded;
    }
    if ("error" in cartEvent && cartEvent.error instanceof HttpErrorModel) {
      evt.error = cartEvent.error;
    }
    if (evt.error?.details?.length) {
      const isOutOfStock = evt.error?.details.some((e) => e.type === "InsufficientStockError");
      evt.quantityAdded = isOutOfStock ? 0 : evt.quantity;
    }
    return evt;
  }
  clearDeleteTimeout(productCode) {
    const clearMessageTimout = this.clearDeleteTimeouts[productCode];
    if (clearMessageTimout) {
      clearMessageTimout.unsubscribe();
      delete this.clearDeleteTimeouts[productCode];
    }
  }
  static {
    this.ɵfac = function QuickOrderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickOrderService)(ɵɵinject(ActiveCartFacade), ɵɵinject(Config), ɵɵinject(EventService), ɵɵinject(ProductSearchConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _QuickOrderService,
      factory: _QuickOrderService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderService, [{
    type: Injectable
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: Config
  }, {
    type: EventService
  }, {
    type: ProductSearchConnector
  }], null);
})();
var facadeProviders = [QuickOrderService, {
  provide: QuickOrderFacade,
  useExisting: QuickOrderService
}];
var QuickOrderStatePersistenceService = class _QuickOrderStatePersistenceService {
  constructor(quickOrderService, siteContextParamsService, statePersistenceService) {
    this.quickOrderService = quickOrderService;
    this.siteContextParamsService = siteContextParamsService;
    this.statePersistenceService = statePersistenceService;
    this.subscription = new Subscription();
    this.key = "quick-order";
  }
  /**
   * Initializes the synchronization between state and browser storage.
   */
  initSync() {
    this.subscription.add(this.statePersistenceService.syncWithStorage({
      key: this.key,
      state$: this.quickOrderService.getEntries(),
      context$: this.siteContextParamsService.getValues([BASE_SITE_CONTEXT_ID]),
      storageType: StorageSyncType.SESSION_STORAGE,
      onRead: (state) => this.onRead(state)
    }));
  }
  onRead(state) {
    if (state) {
      this.quickOrderService.loadEntries(state);
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function QuickOrderStatePersistenceService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickOrderStatePersistenceService)(ɵɵinject(QuickOrderFacade), ɵɵinject(SiteContextParamsService), ɵɵinject(StatePersistenceService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _QuickOrderStatePersistenceService,
      factory: _QuickOrderStatePersistenceService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderStatePersistenceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: QuickOrderFacade
  }, {
    type: SiteContextParamsService
  }, {
    type: StatePersistenceService
  }], null);
})();
var QuickOrderCoreModule = class _QuickOrderCoreModule {
  static forRoot() {
    return {
      ngModule: _QuickOrderCoreModule
    };
  }
  static {
    this.ɵfac = function QuickOrderCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickOrderCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _QuickOrderCoreModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [...facadeProviders, QuickOrderStatePersistenceService]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderCoreModule, [{
    type: NgModule,
    args: [{
      providers: [...facadeProviders, QuickOrderStatePersistenceService]
    }]
  }], null, null);
})();

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-quick-order-components.mjs
function CartQuickOrderFormComponent_ng_container_0_label_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 6);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelement(3, "cx-form-required-asterisks");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "quickOrderCartForm.quantityFullLabel"), " ");
  }
}
function CartQuickOrderFormComponent_ng_container_0_label_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 6);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelement(3, "cx-form-required-asterisks");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "quickOrderCartForm.quantityLabel"), " ");
  }
}
function CartQuickOrderFormComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 2)(5, "form", 3);
    ɵɵlistener("ngSubmit", function CartQuickOrderFormComponent_ng_container_0_Template_form_ngSubmit_5_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.applyQuickOrder());
    });
    ɵɵelementStart(6, "div", 4)(7, "span", 5)(8, "label", 6);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelement(11, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(12, "input", 7);
    ɵɵpipe(13, "cxTranslate");
    ɵɵpipe(14, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(15, "span", 8);
    ɵɵtemplate(16, CartQuickOrderFormComponent_ng_container_0_label_16_Template, 4, 3, "label", 9)(17, CartQuickOrderFormComponent_ng_container_0_label_17_Template, 4, 3, "label", 9);
    ɵɵelement(18, "input", 10);
    ɵɵpipe(19, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(20, "button", 11);
    ɵɵpipe(21, "async");
    ɵɵpipe(22, "async");
    ɵɵpipe(23, "cxTranslate");
    ɵɵtext(24);
    ɵɵpipe(25, "cxTranslate");
    ɵɵelementEnd()()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 13, "quickOrderCartForm.title"), " ");
    ɵɵadvance(3);
    ɵɵproperty("formGroup", ctx_r1.quickOrderForm);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 15, "quickOrderCartForm.productCodeLabel"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(13, 17, "quickOrderCartForm.productCodePlaceholder"));
    ɵɵattribute("aria-label", ɵɵpipeBind1(14, 19, "quickOrderCartForm.entryProductCode"));
    ɵɵadvance(4);
    ɵɵproperty("cxFeature", "a11yQTY2Quantity");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yQTY2Quantity");
    ɵɵadvance();
    ɵɵattribute("aria-label", ɵɵpipeBind1(19, 21, "quickOrderCartForm.quantity"));
    ɵɵadvance(2);
    ɵɵclassProp("disabled", ɵɵpipeBind1(21, 23, ctx_r1.cartIsLoading$));
    ɵɵproperty("disabled", ɵɵpipeBind1(22, 25, ctx_r1.cartIsLoading$) || !(ctx_r1.quickOrderForm == null ? null : (tmp_11_0 = ctx_r1.quickOrderForm.get("productCode")) == null ? null : tmp_11_0.value) || !(ctx_r1.quickOrderForm == null ? null : (tmp_11_0 = ctx_r1.quickOrderForm.get("quantity")) == null ? null : tmp_11_0.value));
    ɵɵattribute("aria-label", ɵɵpipeBind1(23, 27, "quickOrderCartForm.addToCart"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(25, 29, "quickOrderCartForm.add"), " ");
  }
}
var _c0 = ["quickOrderInput"];
var _c1 = (a0) => ({
  limit: a0
});
var _c2 = (a0) => ({
  count: a0
});
var _c3 = (a0) => ({
  id: a0
});
function QuickOrderFormComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("click", function QuickOrderFormComponent_button_7_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.clear($event));
    })("keydown.enter", function QuickOrderFormComponent_button_7_Template_button_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.clear($event));
    });
    ɵɵelement(3, "cx-icon", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 3, "common.reset"))("title", ɵɵpipeBind1(2, 5, "common.reset"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r2.iconTypes.RESET);
  }
}
function QuickOrderFormComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 13);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxTranslate");
    ɵɵelement(3, "cx-icon", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 3, "common.search"))("title", ɵɵpipeBind1(2, 5, "common.search"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r2.iconTypes.SEARCH);
  }
}
function QuickOrderFormComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 14);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "quickOrderForm.listLimitReached"), " ");
  }
}
function QuickOrderFormComponent_ul_13_li_1_button_1_cx_media_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-media", 25);
  }
  if (rf & 2) {
    const product_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("alt", product_r5.name)("container", product_r5.images == null ? null : product_r5.images.PRIMARY);
  }
}
function QuickOrderFormComponent_ul_13_li_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 20);
    ɵɵlistener("blur", function QuickOrderFormComponent_ul_13_li_1_button_1_Template_button_blur_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onBlur($event));
    })("mousedown", function QuickOrderFormComponent_ul_13_li_1_button_1_Template_button_mousedown_0_listener($event) {
      ɵɵrestoreView(_r4);
      const product_r5 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.add(product_r5, $event));
    })("keydown.arrowdown", function QuickOrderFormComponent_ul_13_li_1_button_1_Template_button_keydown_arrowdown_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.focusNextChild($event));
    })("keydown.arrowup", function QuickOrderFormComponent_ul_13_li_1_button_1_Template_button_keydown_arrowup_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.focusPreviousChild($event));
    })("keydown.enter", function QuickOrderFormComponent_ul_13_li_1_button_1_Template_button_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r4);
      const product_r5 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.add(product_r5, $event));
    })("keydown.escape", function QuickOrderFormComponent_ul_13_li_1_button_1_Template_button_keydown_escape_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.clear($event));
    });
    ɵɵtemplate(1, QuickOrderFormComponent_ul_13_li_1_button_1_cx_media_1_Template, 1, 2, "cx-media", 21);
    ɵɵelement(2, "div", 22);
    ɵɵelementStart(3, "span", 23);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "span", 24);
    ɵɵtext(7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const product_r5 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("has-media", ctx_r2.config == null ? null : ctx_r2.config.quickOrder == null ? null : ctx_r2.config.quickOrder.searchForm == null ? null : ctx_r2.config.quickOrder.searchForm.displayProductImages);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.config == null ? null : ctx_r2.config.quickOrder == null ? null : ctx_r2.config.quickOrder.searchForm == null ? null : ctx_r2.config.quickOrder.searchForm.displayProductImages);
    ɵɵadvance();
    ɵɵproperty("innerHTML", product_r5.name, ɵɵsanitizeHtml);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(5, 6, "quickOrderForm.id", ɵɵpureFunction1(9, _c3, product_r5.code)), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(product_r5.price == null ? null : product_r5.price.formattedValue);
  }
}
function QuickOrderFormComponent_ul_13_li_1_button_2_cx_media_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-media", 25);
  }
  if (rf & 2) {
    const product_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("alt", product_r5.name)("container", product_r5.images == null ? null : product_r5.images.PRIMARY);
  }
}
function QuickOrderFormComponent_ul_13_li_1_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 26);
    ɵɵlistener("blur", function QuickOrderFormComponent_ul_13_li_1_button_2_Template_button_blur_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onBlur($event));
    })("mousedown", function QuickOrderFormComponent_ul_13_li_1_button_2_Template_button_mousedown_0_listener($event) {
      ɵɵrestoreView(_r6);
      const product_r5 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.add(product_r5, $event));
    })("keydown.arrowdown", function QuickOrderFormComponent_ul_13_li_1_button_2_Template_button_keydown_arrowdown_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.focusNextChild($event));
    })("keydown.arrowup", function QuickOrderFormComponent_ul_13_li_1_button_2_Template_button_keydown_arrowup_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.focusPreviousChild($event));
    })("keydown.enter", function QuickOrderFormComponent_ul_13_li_1_button_2_Template_button_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r6);
      const product_r5 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.add(product_r5, $event));
    })("keydown.escape", function QuickOrderFormComponent_ul_13_li_1_button_2_Template_button_keydown_escape_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.clear($event));
    })("keydown.tab", function QuickOrderFormComponent_ul_13_li_1_button_2_Template_button_keydown_tab_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.close());
    })("keydown.shift.tab", function QuickOrderFormComponent_ul_13_li_1_button_2_Template_button_keydown_shift_tab_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.close());
    });
    ɵɵtemplate(1, QuickOrderFormComponent_ul_13_li_1_button_2_cx_media_1_Template, 1, 2, "cx-media", 21);
    ɵɵelement(2, "div", 22);
    ɵɵelementStart(3, "span", 23);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "span", 24);
    ɵɵtext(7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const product_r5 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("has-media", ctx_r2.config == null ? null : ctx_r2.config.quickOrder == null ? null : ctx_r2.config.quickOrder.searchForm == null ? null : ctx_r2.config.quickOrder.searchForm.displayProductImages);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.config == null ? null : ctx_r2.config.quickOrder == null ? null : ctx_r2.config.quickOrder.searchForm == null ? null : ctx_r2.config.quickOrder.searchForm.displayProductImages);
    ɵɵadvance();
    ɵɵproperty("innerHTML", product_r5.name, ɵɵsanitizeHtml);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(5, 6, "quickOrderForm.id", ɵɵpureFunction1(9, _c3, product_r5.code)), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(product_r5.price == null ? null : product_r5.price.formattedValue);
  }
}
function QuickOrderFormComponent_ul_13_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 17);
    ɵɵtemplate(1, QuickOrderFormComponent_ul_13_li_1_button_1_Template, 8, 11, "button", 18)(2, QuickOrderFormComponent_ul_13_li_1_button_2_Template, 8, 11, "button", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yQuickOrderSearchListKeyboardNavigation");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "a11yQuickOrderSearchListKeyboardNavigation");
  }
}
function QuickOrderFormComponent_ul_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 15);
    ɵɵtemplate(1, QuickOrderFormComponent_ul_13_li_1_Template, 3, 2, "li", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.results);
  }
}
function QuickOrderFormComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 27);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "quickOrderForm.noResults"), " ");
  }
}
var _c4 = ["cx-quick-order-item", ""];
var _c5 = (a0, a1) => ({
  disabled: a0,
  "img-missing": a1
});
var _c6 = (a0) => ({
  cxRoute: "product",
  params: a0
});
var _c7 = (a0) => ({
  disabled: a0
});
function QuickOrderItemComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "quickOrderTable.quantityFull"), " ");
  }
}
function QuickOrderItemComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "quickOrderTable.qty"), " ");
  }
}
function QuickOrderTableComponent_table_0_th_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "quickOrderTable.quantityFull"), " ");
  }
}
function QuickOrderTableComponent_table_0_th_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "quickOrderTable.quantity"), " ");
  }
}
function QuickOrderTableComponent_table_0_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tr", 11);
  }
  if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("entry", entry_r1)("index", i_r2)("loading", ctx_r2.loading);
  }
}
function QuickOrderTableComponent_table_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "table", 1)(1, "caption", 2);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "thead")(5, "tr", 3)(6, "th", 4);
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(9, "th", 5);
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(12, QuickOrderTableComponent_table_0_th_12_Template, 3, 3, "th", 6)(13, QuickOrderTableComponent_table_0_th_13_Template, 3, 3, "th", 6);
    ɵɵelementStart(14, "th", 7);
    ɵɵtext(15);
    ɵɵpipe(16, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementStart(17, "tbody", 8);
    ɵɵtemplate(18, QuickOrderTableComponent_table_0_tr_18_Template, 1, 3, "tr", 9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 7, "quickOrderTable.caption"), " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 9, "quickOrderTable.product"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 11, "quickOrderTable.price"), " ");
    ɵɵadvance(2);
    ɵɵproperty("cxFeature", "a11yQTY2Quantity");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yQTY2Quantity");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(16, 13, "quickOrderTable.actions"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r2.entries);
  }
}
var _c8 = ["quickOrderForm"];
var _c9 = (a0) => ({
  name: a0
});
var _c10 = (a0, a1) => ({
  name: a0,
  code: a1
});
var _c11 = (a0, a1, a2) => ({
  name: a0,
  code: a1,
  quantityAdded: a2
});
function QuickOrderComponent_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-message", 3);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entries_r1 = ɵɵnextContext(2).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("text", ɵɵpipeBind2(2, 3, "quickOrderList.errors.listIsFull", ɵɵpureFunction1(6, _c2, entries_r1.length)))("isVisibleCloseButton", false)("type", ctx_r1.globalMessageType.MSG_TYPE_ERROR);
  }
}
function QuickOrderComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QuickOrderComponent_ng_container_1_ng_container_1_ng_container_1_Template, 3, 8, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.quickOrderForm == null ? null : ctx_r1.quickOrderForm.form == null ? null : (tmp_3_0 = ctx_r1.quickOrderForm.form.get("product")) == null ? null : tmp_3_0.dirty);
  }
}
function QuickOrderComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QuickOrderComponent_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ɵɵpipeBind1(2, 1, ctx_r1.canAddProduct()));
  }
}
function QuickOrderComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "cx-message", 4);
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("closeMessage", function QuickOrderComponent_ng_container_3_Template_cx_message_closeMessage_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.clearAddToCartInformation());
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("text", ɵɵpipeBind1(2, 2, "quickOrderList.informations.addProductBeforeAddingToCart"))("type", ctx_r1.globalMessageType.MSG_TYPE_ERROR);
  }
}
function QuickOrderComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "cx-message", 5);
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("closeMessage", function QuickOrderComponent_ng_container_5_Template_cx_message_closeMessage_1_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.clearNonPurchasableError());
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const nonPurchasableError_r5 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("text", ɵɵpipeBind2(2, 2, "quickOrderList.errors.nonPurchasableError", ɵɵpureFunction1(5, _c9, nonPurchasableError_r5.name)))("type", ctx_r1.globalMessageType.MSG_TYPE_ERROR);
  }
}
function QuickOrderComponent_ng_container_7_cx_message_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-message", 7);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxTranslate");
    ɵɵpipe(3, "cxTranslate");
    ɵɵlistener("buttonAction", function QuickOrderComponent_ng_container_7_cx_message_1_Template_cx_message_buttonAction_0_listener() {
      const deletedEntry_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.undoDeletion(deletedEntry_r7.value));
    })("closeMessage", function QuickOrderComponent_ng_container_7_cx_message_1_Template_cx_message_closeMessage_0_listener() {
      const deletedEntry_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.clearDeletion(deletedEntry_r7.value));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const deletedEntry_r7 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("actionButtonText", ɵɵpipeBind1(1, 4, "quickOrderList.undo"))("actionButtonMessage", ɵɵpipeBind2(2, 6, "quickOrderList.revokeUndo", ɵɵpureFunction1(12, _c9, deletedEntry_r7.value.product == null ? null : deletedEntry_r7.value.product.name)))("text", ɵɵpipeBind2(3, 9, "quickOrderList.productWasDeleted", ɵɵpureFunction1(14, _c9, deletedEntry_r7.value.product == null ? null : deletedEntry_r7.value.product.name)))("type", ctx_r1.globalMessageType.MSG_TYPE_CONFIRMATION);
  }
}
function QuickOrderComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QuickOrderComponent_ng_container_7_cx_message_1_Template, 4, 16, "cx-message", 6);
    ɵɵpipe(2, "keyvalue");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const deletedEntries_r8 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 1, deletedEntries_r8));
  }
}
function QuickOrderComponent_ng_container_9_cx_message_1_li_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 13)(1, "span");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const error_r10 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 1, "quickOrderList.errors.productIsOutOfStock", ɵɵpureFunction2(4, _c10, error_r10.entry.product.name, error_r10.entry.product.code)), " ");
  }
}
function QuickOrderComponent_ng_container_9_cx_message_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-message", 9);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("closeMessage", function QuickOrderComponent_ng_container_9_cx_message_1_Template_cx_message_closeMessage_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.clearErrors());
    });
    ɵɵelementStart(3, "ul", 10);
    ɵɵtemplate(4, QuickOrderComponent_ng_container_9_cx_message_1_li_4_Template, 4, 7, "li", 11);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 12);
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const errors_r11 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("accordionText", ɵɵpipeBind1(1, 5, "quickOrderList.errors.reviewErrors"))("text", ɵɵpipeBind1(2, 7, "quickOrderList.errorProceedingToCart"))("type", ctx_r1.globalMessageType.MSG_TYPE_ERROR);
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", errors_r11);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(7, 9, "quickOrderList.errors.outOfStockErrorFound", ɵɵpureFunction1(12, _c2, errors_r11.length)), " ");
  }
}
function QuickOrderComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QuickOrderComponent_ng_container_9_cx_message_1_Template, 8, 14, "cx-message", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const errors_r11 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", errors_r11.length);
  }
}
function QuickOrderComponent_ng_container_11_cx_message_1_li_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 18)(1, "span");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const warning_r13 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 1, "quickOrderList.warnings.productWasReduced", ɵɵpureFunction3(4, _c11, warning_r13.entry.product.name, warning_r13.entry.product.code, warning_r13.quantityAdded)), " ");
  }
}
function QuickOrderComponent_ng_container_11_cx_message_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-message", 15);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("closeMessage", function QuickOrderComponent_ng_container_11_cx_message_1_Template_cx_message_closeMessage_0_listener() {
      ɵɵrestoreView(_r12);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.clearWarnings());
    });
    ɵɵelementStart(3, "ul", 16);
    ɵɵtemplate(4, QuickOrderComponent_ng_container_11_cx_message_1_li_4_Template, 4, 8, "li", 17);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 12);
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const warnings_r14 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("accordionText", ɵɵpipeBind1(1, 5, "quickOrderList.warnings.reviewWarnings"))("text", ɵɵpipeBind1(2, 7, "quickOrderList.warningProceedingToCart"))("type", ctx_r1.globalMessageType.MSG_TYPE_WARNING);
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", warnings_r14);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(7, 9, "quickOrderList.warnings.reduceWarningFound", ɵɵpureFunction1(12, _c2, warnings_r14.length)), " ");
  }
}
function QuickOrderComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QuickOrderComponent_ng_container_11_cx_message_1_Template, 8, 14, "cx-message", 14);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const warnings_r14 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", warnings_r14.length);
  }
}
function QuickOrderComponent_ng_container_13_cx_message_1_li_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 23)(1, "span");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const entry_r16 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind2(3, 1, "quickOrderList.successes.productAddedToCart", ɵɵpureFunction2(4, _c10, entry_r16.product.name, entry_r16.product.code)));
  }
}
function QuickOrderComponent_ng_container_13_cx_message_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-message", 20);
    ɵɵpipe(1, "cxTranslate");
    ɵɵlistener("closeMessage", function QuickOrderComponent_ng_container_13_cx_message_1_Template_cx_message_closeMessage_0_listener() {
      ɵɵrestoreView(_r15);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.clearSuccesses());
    });
    ɵɵelementStart(2, "ul", 21);
    ɵɵtemplate(3, QuickOrderComponent_ng_container_13_cx_message_1_li_3_Template, 4, 7, "li", 22);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 12);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const successes_r17 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("text", ɵɵpipeBind1(1, 4, "quickOrderList.successfullyAddedToCart"))("type", ctx_r1.globalMessageType.MSG_TYPE_CONFIRMATION);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", successes_r17);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(6, 6, "quickOrderList.successes.addedToCartFound", ɵɵpureFunction1(9, _c2, successes_r17.length)), " ");
  }
}
function QuickOrderComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QuickOrderComponent_ng_container_13_cx_message_1_Template, 7, 11, "cx-message", 19);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const successes_r17 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", successes_r17.length);
  }
}
function QuickOrderComponent_ng_container_15_ng_container_1_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 33);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("click", function QuickOrderComponent_ng_container_15_ng_container_1_button_16_Template_button_click_0_listener() {
      ɵɵrestoreView(_r19);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.clear());
    });
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("disabled", !ɵɵpipeBind1(1, 3, ctx_r1.isCartStable$));
    ɵɵattribute("aria-label", ɵɵpipeBind1(2, 5, "quickOrderList.emptyList"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 7, "quickOrderList.emptyList"), " ");
  }
}
function QuickOrderComponent_ng_container_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 24)(2, "h2");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "p");
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 25);
    ɵɵelement(9, "cx-quick-order-form", 26, 0);
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 27);
    ɵɵelement(12, "cx-quick-order-table", 28);
    ɵɵpipe(13, "async");
    ɵɵelementEnd();
    ɵɵelementStart(14, "div", 29)(15, "div", 30);
    ɵɵtemplate(16, QuickOrderComponent_ng_container_15_ng_container_1_button_16_Template, 5, 9, "button", 31);
    ɵɵelementEnd();
    ɵɵelementStart(17, "div", 30)(18, "cx-progress-button", 32);
    ɵɵpipe(19, "cxTranslate");
    ɵɵpipe(20, "async");
    ɵɵlistener("clickEvent", function QuickOrderComponent_ng_container_15_ng_container_1_Template_cx_progress_button_clickEvent_18_listener() {
      const entries_r20 = ɵɵrestoreView(_r18).ngIf;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.addToCart(entries_r20));
    });
    ɵɵtext(21);
    ɵɵpipe(22, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entries_r20 = ctx.ngIf;
    const quickOrderListLimit_r21 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 11, "quickOrderList.header"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(7, 13, "quickOrderList.subHeader", ɵɵpureFunction1(24, _c1, quickOrderListLimit_r21)), " ");
    ɵɵadvance(3);
    ɵɵproperty("limit", quickOrderListLimit_r21);
    ɵɵadvance(3);
    ɵɵproperty("entries", entries_r20)("loading", !ɵɵpipeBind1(13, 16, ctx_r1.isCartStable$));
    ɵɵadvance(4);
    ɵɵproperty("ngIf", entries_r20.length);
    ɵɵadvance(2);
    ɵɵclassMap("btn-block add-button");
    ɵɵproperty("ariaLabel", ɵɵpipeBind1(19, 18, "quickOrderList.addToCart"))("loading", !ɵɵpipeBind1(20, 20, ctx_r1.isCartStable$));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(22, 22, "quickOrderList.addToCart"), " ");
  }
}
function QuickOrderComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, QuickOrderComponent_ng_container_15_ng_container_1_Template, 23, 26, "ng-container", 2);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r1.entries$));
  }
}
var CartQuickOrderFormComponent = class _CartQuickOrderFormComponent {
  constructor(activeCartService, eventService, formBuilder, globalMessageService) {
    this.activeCartService = activeCartService;
    this.eventService = eventService;
    this.formBuilder = formBuilder;
    this.globalMessageService = globalMessageService;
    this.cartIsLoading$ = this.activeCartService.isStable().pipe(map((loaded) => !loaded));
    this.cart$ = this.activeCartService.getActive();
    this.min = 1;
    this.subscription = new Subscription();
    this.cartEventsSubscription = new Subscription();
    this.minQuantityValue = 1;
    useFeatureStyles("a11yQTY2Quantity");
  }
  ngOnInit() {
    this.buildForm();
    this.watchQuantityChange();
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.cartEventsSubscription?.unsubscribe();
  }
  applyQuickOrder() {
    if (this.quickOrderForm.invalid) {
      this.quickOrderForm.markAllAsTouched();
      return;
    }
    const productCode = this.quickOrderForm.get("productCode")?.value;
    const quantity = this.quickOrderForm.get("quantity")?.value;
    this.watchAddEntrySuccessEvent();
    if (productCode && quantity) {
      this.activeCartService.addEntry(productCode, quantity);
    }
  }
  buildForm() {
    this.quickOrderForm = this.formBuilder.group({
      productCode: ["", []],
      quantity: [this.minQuantityValue, {
        updateOn: "blur",
        validators: []
      }]
    });
  }
  watchQuantityChange() {
    this.subscription.add(this.quickOrderForm.get("quantity")?.valueChanges.subscribe((value) => this.quickOrderForm.get("quantity")?.setValue(this.getValidCount(value), {
      emitEvent: false
    })));
  }
  watchAddEntrySuccessEvent() {
    this.cartEventsSubscription.add(this.eventService.get(CartAddEntrySuccessEvent).pipe(first()).subscribe((data) => {
      let key = "quickOrderCartForm.stockLevelReached";
      let productTranslation;
      let messageType = GlobalMessageType.MSG_TYPE_WARNING;
      if (data.quantityAdded) {
        key = data.quantityAdded > 1 ? "quickOrderCartForm.entriesWereAdded" : "quickOrderCartForm.entryWasAdded";
        productTranslation = data.quantityAdded > 1 ? "quickOrderCartForm.products" : "quickOrderCartForm.product";
        messageType = GlobalMessageType.MSG_TYPE_CONFIRMATION;
      }
      this.globalMessageService.add({
        key,
        params: {
          product: data?.entry?.product?.name || productTranslation,
          quantity: data.quantityAdded
        }
      }, messageType);
      this.resetForm();
    }));
  }
  getValidCount(value) {
    if (value < this.min || !value) {
      value = this.min;
    }
    return value;
  }
  resetForm() {
    this.quickOrderForm.reset();
  }
  static {
    this.ɵfac = function CartQuickOrderFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartQuickOrderFormComponent)(ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(EventService), ɵɵdirectiveInject(UntypedFormBuilder), ɵɵdirectiveInject(GlobalMessageService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CartQuickOrderFormComponent,
      selectors: [["cx-cart-quick-order-form"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "cx-cart-quick-order-form-title"], [1, "form-group"], [3, "ngSubmit", "formGroup"], [1, "cx-cart-quick-order-form-container"], [1, "cx-cart-quick-order-form-productID"], [1, "cx-cart-quick-order-form-label"], ["formControlName", "productCode", "type", "text", 1, "form-control", "input-product-code", 3, "placeholder"], [1, "cx-cart-quick-order-form-qty"], ["class", "cx-cart-quick-order-form-label", 4, "cxFeature"], ["formControlName", "quantity", "type", "number", 1, "form-control", "input-quantity"], ["type", "submit", 1, "btn", "btn-block", "btn-secondary", "apply-quick-order-button", 3, "disabled"]],
      template: function CartQuickOrderFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CartQuickOrderFormComponent_ng_container_0_Template, 26, 31, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.cart$));
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FeatureDirective, FormRequiredAsterisksComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartQuickOrderFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-cart-quick-order-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="cart$ | async as cart">
  <div class="cx-cart-quick-order-form-title">
    {{ 'quickOrderCartForm.title' | cxTranslate }}
  </div>
  <div class="form-group">
    <form (ngSubmit)="applyQuickOrder()" [formGroup]="quickOrderForm">
      <div class="cx-cart-quick-order-form-container">
        <span class="cx-cart-quick-order-form-productID">
          <label class="cx-cart-quick-order-form-label">
            {{ 'quickOrderCartForm.productCodeLabel' | cxTranslate }}
            <cx-form-required-asterisks />
          </label>

          <input
            [attr.aria-label]="
              'quickOrderCartForm.entryProductCode' | cxTranslate
            "
            class="form-control input-product-code"
            formControlName="productCode"
            placeholder="{{
              'quickOrderCartForm.productCodePlaceholder' | cxTranslate
            }}"
            type="text"
          />
        </span>

        <span class="cx-cart-quick-order-form-qty">
          <label
            *cxFeature="'a11yQTY2Quantity'"
            class="cx-cart-quick-order-form-label"
          >
            {{ 'quickOrderCartForm.quantityFullLabel' | cxTranslate }}
            <cx-form-required-asterisks />
          </label>

          <label
            *cxFeature="'!a11yQTY2Quantity'"
            class="cx-cart-quick-order-form-label"
          >
            {{ 'quickOrderCartForm.quantityLabel' | cxTranslate }}
            <cx-form-required-asterisks />
          </label>

          <input
            [attr.aria-label]="'quickOrderCartForm.quantity' | cxTranslate"
            class="form-control input-quantity"
            formControlName="quantity"
            type="number"
          />
        </span>

        <button
          [attr.aria-label]="'quickOrderCartForm.addToCart' | cxTranslate"
          [class.disabled]="cartIsLoading$ | async"
          [disabled]="
            (cartIsLoading$ | async) ||
            !quickOrderForm?.get('productCode')?.value ||
            !quickOrderForm?.get('quantity')?.value
          "
          class="btn btn-block btn-secondary apply-quick-order-button"
          type="submit"
        >
          {{ 'quickOrderCartForm.add' | cxTranslate }}
        </button>
      </div>
    </form>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: EventService
  }, {
    type: UntypedFormBuilder
  }, {
    type: GlobalMessageService
  }], null);
})();
var CartQuickOrderFormModule = class _CartQuickOrderFormModule {
  static {
    this.ɵfac = function CartQuickOrderFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartQuickOrderFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CartQuickOrderFormModule,
      declarations: [CartQuickOrderFormComponent],
      imports: [CommonModule, ReactiveFormsModule, I18nModule, FormErrorsModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      exports: [CartQuickOrderFormComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CartQuickOrderFormComponent: {
            component: CartQuickOrderFormComponent
          }
        }
      })],
      imports: [CommonModule, ReactiveFormsModule, I18nModule, FormErrorsModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartQuickOrderFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, I18nModule, FormErrorsModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CartQuickOrderFormComponent: {
            component: CartQuickOrderFormComponent
          }
        }
      })],
      declarations: [CartQuickOrderFormComponent],
      exports: [CartQuickOrderFormComponent]
    }]
  }], null, null);
})();
var QuickOrderOrderEntriesContext = class _QuickOrderOrderEntriesContext {
  constructor(quickOrderService, productConnector) {
    this.quickOrderService = quickOrderService;
    this.productConnector = productConnector;
    this.type = OrderEntriesSource.QUICK_ORDER;
    this.logger = inject(LoggerService);
  }
  getEntries() {
    return this.quickOrderService.getEntries();
  }
  addEntries(productsData) {
    return merge(productsData.map((productData) => this.quickOrderService.canAdd(productData.productCode, productsData).pipe(switchMap((canAdd) => {
      if (canAdd) {
        return this.productConnector.get(productData.productCode).pipe(filter((product) => !!product), tap((product) => {
          this.quickOrderService.addProduct(product, productData.quantity);
        }), map((product) => this.handleResults(product, productData)), catchError((response) => {
          return of(this.handleErrors(response, productData.productCode));
        }));
      } else {
        return of({
          productCode: productData.productCode,
          statusCode: ProductImportStatus.LIMIT_EXCEEDED
        });
      }
    })))).pipe(mergeAll(), take(productsData.length));
  }
  handleResults(product, productData) {
    if (product.stock?.stockLevel && productData.quantity > product.stock.stockLevel) {
      return {
        productCode: productData.productCode,
        productName: product?.name,
        statusCode: ProductImportStatus.LOW_STOCK,
        quantity: productData.quantity,
        quantityAdded: product.stock.stockLevel
      };
    } else if (product.stock?.stockLevelStatus === "outOfStock") {
      return {
        productCode: productData.productCode,
        statusCode: ProductImportStatus.NO_STOCK,
        productName: product?.name
      };
    } else {
      return {
        productCode: productData.productCode,
        statusCode: ProductImportStatus.SUCCESS
      };
    }
  }
  handleErrors(response, productCode) {
    if (response?.error?.errors[0].type === "UnknownIdentifierError") {
      return {
        productCode,
        statusCode: ProductImportStatus.UNKNOWN_IDENTIFIER
      };
    } else {
      if (isDevMode()) {
        this.logger.warn("Unrecognized cart add entry action type while mapping messages", response);
      }
      return {
        productCode,
        statusCode: ProductImportStatus.UNKNOWN_ERROR
      };
    }
  }
  static {
    this.ɵfac = function QuickOrderOrderEntriesContext_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickOrderOrderEntriesContext)(ɵɵinject(QuickOrderFacade), ɵɵinject(ProductConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _QuickOrderOrderEntriesContext,
      factory: _QuickOrderOrderEntriesContext.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderOrderEntriesContext, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: QuickOrderFacade
  }, {
    type: ProductConnector
  }], null);
})();
var SEARCH_BOX_ACTIVE_CLASS = "quick-order-searchbox-is-active";
var QuickOrderFormComponent = class _QuickOrderFormComponent {
  constructor(config, cd, quickOrderService, winRef) {
    this.config = config;
    this.cd = cd;
    this.quickOrderService = quickOrderService;
    this.winRef = winRef;
    this.iconTypes = ICON_TYPE;
    this.isSearching = false;
    this.noResults = false;
    this.results = [];
    this.featureConfigService = inject(FeatureConfigService);
    this.subscription = new Subscription();
    this.searchSubscription = new Subscription();
  }
  ngOnInit() {
    this.buildForm();
    this.subscription.add(this.watchProductAdd());
    this.subscription.add(this.watchQueryChange());
  }
  onBlur(event) {
    setTimeout(() => {
      if (!this.isSuggestionFocused()) {
        this.blurSuggestionBox(event);
      }
    });
  }
  clear(event) {
    event?.preventDefault();
    if (this.isResultsBoxOpen()) {
      this.toggleBodyClass(SEARCH_BOX_ACTIVE_CLASS, false);
      if (this.featureConfigService.isEnabled("a11yQuickOrderSearchBoxRefocusOnClose")) {
        requestAnimationFrame(() => {
          this.quickOrderInput.nativeElement.focus();
        });
      }
    }
    const product = this.form.get("product")?.value;
    if (!!product) {
      this.form.reset();
    }
    this.close();
    this.cd?.detectChanges();
  }
  add(product, event) {
    event?.preventDefault();
    if (product.multidimensional) {
      this.quickOrderService.setNonPurchasableProductError(product);
      this.clear();
      return;
    } else {
      this.quickOrderService.clearNonPurchasableProductError();
    }
    this.quickOrderService.addProduct(product);
    this.quickOrderInput.nativeElement.focus();
  }
  addProduct(event) {
    this.quickOrderService.canAdd().pipe(take(1)).subscribe((canAdd) => {
      if (canAdd) {
        if (this.results.length === 1) {
          this.add(this.results[0], event);
        } else if (this.getFocusedIndex() !== -1) {
          const product = this.results[this.getFocusedIndex()];
          this.add(product, event);
        }
      }
    });
  }
  focusNextChild(event) {
    event.preventDefault();
    if (!this.results.length) {
      return;
    }
    const [results, focusedIndex] = [this.getResultElements(), this.getFocusedIndex()];
    if (results.length) {
      if (this.featureConfigService.isEnabled("a11ySearchableDropdownFirstElementFocus")) {
        this.winRef.document.querySelector("main")?.classList.remove("mouse-focus");
      }
      if (focusedIndex >= results.length - 1) {
        results[0].focus();
      } else {
        results[focusedIndex + 1].focus();
      }
    }
  }
  focusPreviousChild(event) {
    event.preventDefault();
    if (!this.results.length) {
      return;
    }
    const [results, focusedIndex] = [this.getResultElements(), this.getFocusedIndex()];
    if (results.length) {
      if (focusedIndex < 1) {
        results[results.length - 1].focus();
      } else {
        results[focusedIndex - 1].focus();
      }
    }
  }
  isResultsBoxOpen() {
    return this.winRef ? !!this.winRef.document.querySelector(`.${SEARCH_BOX_ACTIVE_CLASS}`) : false;
  }
  canAddProduct() {
    return this.quickOrderService.canAdd();
  }
  open() {
    this.toggleBodyClass(SEARCH_BOX_ACTIVE_CLASS, true);
  }
  // Return result list as HTMLElement array
  getResultElements() {
    if (this.winRef) {
      return Array.from(this.winRef.document.querySelectorAll(".quick-order-results-products > li button"));
    } else {
      return [];
    }
  }
  blurSuggestionBox(event) {
    this.toggleBodyClass(SEARCH_BOX_ACTIVE_CLASS, false);
    if (event && event.target) {
      event.target.blur();
    }
  }
  // Return focused element as HTMLElement
  getFocusedElement() {
    if (this.winRef) {
      return this.winRef.document.activeElement;
    }
  }
  getFocusedIndex() {
    return this.getResultElements().indexOf(this.getFocusedElement());
  }
  isSuggestionFocused() {
    return this.getResultElements().includes(this.getFocusedElement());
  }
  toggleBodyClass(className, add) {
    if (this.winRef) {
      if (add === void 0) {
        this.winRef.document.body.classList.toggle(className);
      } else {
        add ? this.winRef.document.body.classList.add(className) : this.winRef.document.body.classList.remove(className);
      }
    }
  }
  buildForm() {
    const form = new UntypedFormGroup({});
    form.setControl("product", new UntypedFormControl(null));
    this.form = form;
  }
  isEmpty(string) {
    return string?.trim() === "" || string == null;
  }
  watchQueryChange() {
    return this.form.valueChanges.pipe(distinctUntilChanged(), debounceTime(300), filter((value) => {
      if (this.config?.quickOrder?.searchForm) {
        if (this.isEmpty(value.product)) {
          this.clear();
          return false;
        }
        return !!value.product && value.product.length >= this.config.quickOrder?.searchForm?.minCharactersBeforeRequest;
      }
      return value;
    })).subscribe((value) => {
      this.searchProducts(value.product);
    });
  }
  searchProducts(query) {
    this.searchSubscription.add(this.canAddProduct().pipe(filter(Boolean), switchMap(() => this.quickOrderService.searchProducts(query, this.config?.quickOrder?.searchForm?.maxProducts).pipe(take(1)))).subscribe((products) => {
      this.results = products;
      if (this.results.length) {
        this.noResults = false;
        this.open();
      } else {
        this.noResults = true;
      }
      this.cd?.detectChanges();
    }));
  }
  clearResults() {
    this.results = [];
  }
  close() {
    this.resetSearchSubscription();
    this.clearResults();
    this.noResults = false;
  }
  resetSearchSubscription() {
    this.searchSubscription.unsubscribe();
    this.searchSubscription = new Subscription();
  }
  watchProductAdd() {
    return this.quickOrderService.getProductAdded().subscribe(() => this.clear());
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function QuickOrderFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickOrderFormComponent)(ɵɵdirectiveInject(Config), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(QuickOrderFacade), ɵɵdirectiveInject(WindowRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _QuickOrderFormComponent,
      selectors: [["cx-quick-order-form"]],
      viewQuery: function QuickOrderFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.quickOrderInput = _t.first);
        }
      },
      inputs: {
        limit: "limit"
      },
      standalone: false,
      decls: 19,
      vars: 30,
      consts: [["quickOrderInput", ""], ["searchIcon", ""], [1, "quick-order-form-container", 3, "formGroup"], ["role", "combobox", "aria-controls", "quick-order-search-results", 1, "quick-order-form-input"], ["aria-controls", "quick-order-search-results", "aria-describedby", "quickOrderFormInitialDescription", "formControlName", "product", "type", "text", 1, "form-control", 3, "blur", "focus", "keydown.arrowdown", "keydown.arrowup", "keydown.enter", "keydown.escape", "placeholder"], ["class", "quick-order-form-reset-icon", 3, "click", "keydown.enter", 4, "ngIf", "ngIfElse"], ["class", "list-limit-reached-text", "role", "alert", 4, "ngIf"], ["id", "quick-order-search-results", 1, "quick-order-results"], ["class", "quick-order-results-products", "role", "listbox", 4, "ngIf"], ["class", "quick-order-no-results", 4, "ngIf"], ["aria-live", "polite", "id", "quickOrderFormInitialDescription", "aria-atomic", "true", 1, "cx-visually-hidden", "quick-order-form-description"], [1, "quick-order-form-reset-icon", 3, "click", "keydown.enter"], [3, "type"], ["tabindex", "-1", 1, "quick-order-form-search-icon"], ["role", "alert", 1, "list-limit-reached-text"], ["role", "listbox", 1, "quick-order-results-products"], ["class", "quick-order-results-product-container", 4, "ngFor", "ngForOf"], [1, "quick-order-results-product-container"], ["class", "quick-order-results-product", "role", "option", 3, "has-media", "blur", "mousedown", "keydown.arrowdown", "keydown.arrowup", "keydown.enter", "keydown.escape", 4, "cxFeature"], ["class", "quick-order-results-product", "role", "option", 3, "has-media", "blur", "mousedown", "keydown.arrowdown", "keydown.arrowup", "keydown.enter", "keydown.escape", "keydown.tab", "keydown.shift.tab", 4, "cxFeature"], ["role", "option", 1, "quick-order-results-product", 3, "blur", "mousedown", "keydown.arrowdown", "keydown.arrowup", "keydown.enter", "keydown.escape"], ["class", "media", "format", "thumbnail", "role", "presentation", 3, "alt", "container", 4, "ngIf"], [1, "name", 3, "innerHTML"], [1, "id"], [1, "price"], ["format", "thumbnail", "role", "presentation", 1, "media", 3, "alt", "container"], ["role", "option", 1, "quick-order-results-product", 3, "blur", "mousedown", "keydown.arrowdown", "keydown.arrowup", "keydown.enter", "keydown.escape", "keydown.tab", "keydown.shift.tab"], [1, "quick-order-no-results"]],
      template: function QuickOrderFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "form", 2)(1, "div", 3);
          ɵɵpipe(2, "cxTranslate");
          ɵɵelementStart(3, "input", 4, 0);
          ɵɵpipe(5, "cxTranslate");
          ɵɵpipe(6, "cxTranslate");
          ɵɵlistener("blur", function QuickOrderFormComponent_Template_input_blur_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onBlur($event));
          })("focus", function QuickOrderFormComponent_Template_input_focus_3_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.open());
          })("keydown.arrowdown", function QuickOrderFormComponent_Template_input_keydown_arrowdown_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.focusNextChild($event));
          })("keydown.arrowup", function QuickOrderFormComponent_Template_input_keydown_arrowup_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.focusPreviousChild($event));
          })("keydown.enter", function QuickOrderFormComponent_Template_input_keydown_enter_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.addProduct($event));
          })("keydown.escape", function QuickOrderFormComponent_Template_input_keydown_escape_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.clear($event));
          });
          ɵɵelementEnd();
          ɵɵtemplate(7, QuickOrderFormComponent_button_7_Template, 4, 7, "button", 5)(8, QuickOrderFormComponent_ng_template_8_Template, 4, 7, "ng-template", null, 1, ɵɵtemplateRefExtractor)(10, QuickOrderFormComponent_span_10_Template, 3, 3, "span", 6);
          ɵɵpipe(11, "async");
          ɵɵelementEnd();
          ɵɵelementStart(12, "div", 7);
          ɵɵtemplate(13, QuickOrderFormComponent_ul_13_Template, 2, 1, "ul", 8)(14, QuickOrderFormComponent_span_14_Template, 3, 3, "span", 9);
          ɵɵelementEnd()();
          ɵɵelementStart(15, "label", 10);
          ɵɵtext(16);
          ɵɵpipe(17, "cxTranslate");
          ɵɵpipe(18, "cxTranslate");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_7_0;
          let tmp_9_0;
          const searchIcon_r7 = ɵɵreference(9);
          ɵɵproperty("formGroup", ctx.form);
          ɵɵadvance();
          ɵɵattribute("aria-expanded", ctx.isResultsBoxOpen())("aria-label", ɵɵpipeBind1(2, 12, "quickOrderForm.quickOrderSearch"));
          ɵɵadvance(2);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(5, 14, "quickOrderForm.placeholder"));
          ɵɵattribute("aria-label", ɵɵpipeBind2(6, 16, "quickOrderForm.searchBoxLabel", ɵɵpureFunction1(26, _c1, ctx.limit)));
          ɵɵadvance(4);
          ɵɵproperty("ngIf", (tmp_7_0 = ctx.form.get("product")) == null ? null : tmp_7_0.value)("ngIfElse", searchIcon_r7);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", !ɵɵpipeBind1(11, 19, ctx.canAddProduct()) && ((tmp_9_0 = ctx.form.get("product")) == null ? null : tmp_9_0.dirty));
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.isResultsBoxOpen() && ctx.results.length);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.noResults);
          ɵɵadvance(2);
          ɵɵtextInterpolate2(" ", ctx.results.length ? ɵɵpipeBind2(17, 21, "quickOrderForm.productsResults", ɵɵpureFunction1(28, _c2, ctx.results.length)) : "", " ", ɵɵpipeBind1(18, 24, "quickOrderForm.initialDescription"), "\n");
        }
      },
      dependencies: [NgForOf, NgIf, IconComponent, MediaComponent, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FeatureDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-quick-order-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<form [formGroup]="form" class="quick-order-form-container">
  <div
    class="quick-order-form-input"
    role="combobox"
    aria-controls="quick-order-search-results"
    [attr.aria-expanded]="isResultsBoxOpen()"
    [attr.aria-label]="'quickOrderForm.quickOrderSearch' | cxTranslate"
  >
    <input
      (blur)="onBlur($event)"
      (focus)="open()"
      (keydown.arrowdown)="focusNextChild($event)"
      (keydown.arrowup)="focusPreviousChild($event)"
      (keydown.enter)="addProduct($event)"
      (keydown.escape)="clear($event)"
      [attr.aria-label]="
        'quickOrderForm.searchBoxLabel' | cxTranslate: { limit: limit }
      "
      aria-controls="quick-order-search-results"
      aria-describedby="quickOrderFormInitialDescription"
      class="form-control"
      formControlName="product"
      placeholder="{{ 'quickOrderForm.placeholder' | cxTranslate }}"
      type="text"
      #quickOrderInput
    />

    <button
      *ngIf="form.get('product')?.value; else searchIcon"
      (click)="clear($event)"
      (keydown.enter)="clear($event)"
      [attr.aria-label]="'common.reset' | cxTranslate"
      [attr.title]="'common.reset' | cxTranslate"
      class="quick-order-form-reset-icon"
    >
      <cx-icon [type]="iconTypes.RESET"></cx-icon>
    </button>

    <ng-template #searchIcon>
      <button
        [attr.aria-label]="'common.search' | cxTranslate"
        class="quick-order-form-search-icon"
        [attr.title]="'common.search' | cxTranslate"
        tabindex="-1"
      >
        <cx-icon [type]="iconTypes.SEARCH"></cx-icon>
      </button>
    </ng-template>

    <span
      *ngIf="!(canAddProduct() | async) && form.get('product')?.dirty"
      class="list-limit-reached-text"
      role="alert"
    >
      {{ 'quickOrderForm.listLimitReached' | cxTranslate }}
    </span>
  </div>

  <div id="quick-order-search-results" class="quick-order-results">
    <ul
      *ngIf="isResultsBoxOpen() && results.length"
      class="quick-order-results-products"
      role="listbox"
    >
      <li
        *ngFor="let product of results; let i = index"
        class="quick-order-results-product-container"
      >
        <button
          *cxFeature="'!a11yQuickOrderSearchListKeyboardNavigation'"
          (blur)="onBlur($event)"
          (mousedown)="add(product, $event)"
          (keydown.arrowdown)="focusNextChild($event)"
          (keydown.arrowup)="focusPreviousChild($event)"
          (keydown.enter)="add(product, $event)"
          (keydown.escape)="clear($event)"
          [class.has-media]="
            config?.quickOrder?.searchForm?.displayProductImages
          "
          class="quick-order-results-product"
          role="option"
        >
          <cx-media
            *ngIf="config?.quickOrder?.searchForm?.displayProductImages"
            [alt]="product.name"
            [container]="product.images?.PRIMARY"
            class="media"
            format="thumbnail"
            role="presentation"
          ></cx-media>
          <div class="name" [innerHTML]="product.name"></div>
          <span class="id">
            {{
              'quickOrderForm.id'
                | cxTranslate
                  : {
                      id: product.code,
                    }
            }}
          </span>
          <span class="price">{{ product.price?.formattedValue }}</span>
        </button>
        <button
          *cxFeature="'a11yQuickOrderSearchListKeyboardNavigation'"
          (blur)="onBlur($event)"
          (mousedown)="add(product, $event)"
          (keydown.arrowdown)="focusNextChild($event)"
          (keydown.arrowup)="focusPreviousChild($event)"
          (keydown.enter)="add(product, $event)"
          (keydown.escape)="clear($event)"
          (keydown.tab)="close()"
          (keydown.shift.tab)="close()"
          [class.has-media]="
            config?.quickOrder?.searchForm?.displayProductImages
          "
          class="quick-order-results-product"
          role="option"
        >
          <cx-media
            *ngIf="config?.quickOrder?.searchForm?.displayProductImages"
            [alt]="product.name"
            [container]="product.images?.PRIMARY"
            class="media"
            format="thumbnail"
            role="presentation"
          ></cx-media>
          <div class="name" [innerHTML]="product.name"></div>
          <span class="id">
            {{
              'quickOrderForm.id'
                | cxTranslate
                  : {
                      id: product.code,
                    }
            }}
          </span>
          <span class="price">{{ product.price?.formattedValue }}</span>
        </button>
      </li>
    </ul>

    <span *ngIf="noResults" class="quick-order-no-results">
      {{ 'quickOrderForm.noResults' | cxTranslate }}
    </span>
  </div>
</form>

<label
  aria-live="polite"
  id="quickOrderFormInitialDescription"
  aria-atomic="true"
  class="cx-visually-hidden quick-order-form-description"
>
  {{
    results.length
      ? ('quickOrderForm.productsResults'
        | cxTranslate: { count: results.length })
      : ''
  }}
  {{ 'quickOrderForm.initialDescription' | cxTranslate }}
</label>
`
    }]
  }], () => [{
    type: Config
  }, {
    type: ChangeDetectorRef
  }, {
    type: QuickOrderFacade
  }, {
    type: WindowRef
  }], {
    limit: [{
      type: Input
    }],
    quickOrderInput: [{
      type: ViewChild,
      args: ["quickOrderInput"]
    }]
  });
})();
var QuickOrderItemComponent = class _QuickOrderItemComponent {
  get entry() {
    return this._entry;
  }
  set entry(value) {
    this._entry = value;
    this.quantityControl = new UntypedFormControl(this.entry.quantity, {
      updateOn: "blur"
    });
  }
  constructor(cd, quickOrderService) {
    this.cd = cd;
    this.quickOrderService = quickOrderService;
    this.loading = false;
    this.subscription = new Subscription();
    useFeatureStyles("a11yQTY2Quantity");
  }
  ngOnInit() {
    this.subscription.add(this.quantityControl.valueChanges.subscribe(() => {
      this.quickOrderService.updateEntryQuantity(this.index, this.quantityControl.value);
    }));
    this.subscription.add(this.watchProductAdd());
  }
  removeEntry() {
    this.quickOrderService.softDeleteEntry(this.index);
    this.cd.detectChanges();
  }
  watchProductAdd() {
    return this.quickOrderService.getProductAdded().subscribe((productCode) => {
      if (productCode === this.entry.product?.code) {
        this.quantityControl = new UntypedFormControl(this.entry.quantity);
        this.cd.detectChanges();
      }
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function QuickOrderItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickOrderItemComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(QuickOrderFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _QuickOrderItemComponent,
      selectors: [["", "cx-quick-order-item", ""], ["cx-quick-order-item"]],
      inputs: {
        entry: "entry",
        index: "index",
        loading: "loading"
      },
      standalone: false,
      attrs: _c4,
      decls: 29,
      vars: 40,
      consts: [["role", "cell"], [1, "cx-table-item-container"], ["tabindex", "-1", 3, "ngClass", "routerLink"], ["format", "cartIcon", 3, "container", "alt"], [1, "cx-info"], [1, "cx-name"], [1, "cx-link", 3, "ngClass", "routerLink"], [1, "cx-code"], ["role", "cell", 1, "cx-price"], [1, "cx-mobile-header"], [1, "cx-value"], ["role", "cell", 1, "cx-quantity"], ["class", "cx-mobile-header", 4, "cxFeature"], [3, "control", "max", "readonly"], ["role", "cell", 1, "cx-actions"], [1, "btn", "btn-tertiary", 3, "click", "disabled"]],
      template: function QuickOrderItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "td", 0)(1, "div", 1)(2, "a", 2);
          ɵɵpipe(3, "cxUrl");
          ɵɵelement(4, "cx-media", 3);
          ɵɵelementEnd();
          ɵɵelementStart(5, "div", 4)(6, "div", 5)(7, "a", 6);
          ɵɵpipe(8, "cxUrl");
          ɵɵtext(9);
          ɵɵelementEnd()();
          ɵɵelementStart(10, "div", 7);
          ɵɵtext(11);
          ɵɵpipe(12, "cxTranslate");
          ɵɵelementEnd()()()();
          ɵɵelementStart(13, "td", 8)(14, "div", 9);
          ɵɵtext(15);
          ɵɵpipe(16, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(17, "div", 10);
          ɵɵtext(18);
          ɵɵelementEnd()();
          ɵɵelementStart(19, "td", 11);
          ɵɵtemplate(20, QuickOrderItemComponent_div_20_Template, 3, 3, "div", 12)(21, QuickOrderItemComponent_div_21_Template, 3, 3, "div", 12);
          ɵɵelementStart(22, "div", 10);
          ɵɵelement(23, "cx-item-counter", 13);
          ɵɵelementEnd()();
          ɵɵelementStart(24, "td", 14)(25, "button", 15);
          ɵɵpipe(26, "cxTranslate");
          ɵɵlistener("click", function QuickOrderItemComponent_Template_button_click_25_listener() {
            return ctx.removeEntry();
          });
          ɵɵtext(27);
          ɵɵpipe(28, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("ngClass", ɵɵpureFunction2(31, _c5, ctx.loading, !(ctx.entry == null ? null : ctx.entry.product == null ? null : ctx.entry.product.images == null ? null : ctx.entry.product.images.PRIMARY)))("routerLink", ɵɵpipeBind1(3, 19, ɵɵpureFunction1(34, _c6, ctx.entry.product)));
          ɵɵadvance(2);
          ɵɵproperty("container", ctx.entry == null ? null : ctx.entry.product == null ? null : ctx.entry.product.images == null ? null : ctx.entry.product.images.PRIMARY)("alt", ctx.entry == null ? null : ctx.entry.product == null ? null : ctx.entry.product.name);
          ɵɵadvance(3);
          ɵɵproperty("ngClass", ɵɵpureFunction1(36, _c7, ctx.loading))("routerLink", ɵɵpipeBind1(8, 21, ɵɵpureFunction1(38, _c6, ctx.entry.product)));
          ɵɵadvance(2);
          ɵɵtextInterpolate1("", (ctx.entry.product == null ? null : ctx.entry.product.name) || "-", " ");
          ɵɵadvance(2);
          ɵɵtextInterpolate2(" ", ɵɵpipeBind1(12, 23, "quickOrderTable.id"), " ", ctx.entry.product == null ? null : ctx.entry.product.code, " ");
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(16, 25, "quickOrderTable.itemPrice"), " ");
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", (ctx.entry.basePrice == null ? null : ctx.entry.basePrice.formattedValue) || "-", " ");
          ɵɵadvance(2);
          ɵɵproperty("cxFeature", "a11yQTY2Quantity");
          ɵɵadvance();
          ɵɵproperty("cxFeature", "!a11yQTY2Quantity");
          ɵɵadvance(2);
          ɵɵproperty("control", ctx.quantityControl)("max", ctx.entry.product == null ? null : ctx.entry.product.stock == null ? null : ctx.entry.product.stock.stockLevel)("readonly", ctx.loading);
          ɵɵadvance(2);
          ɵɵproperty("disabled", ctx.loading);
          ɵɵattribute("aria-label", ɵɵpipeBind1(26, 27, "common.remove"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(28, 29, "common.remove"), " ");
        }
      },
      dependencies: [NgClass, ItemCounterComponent, MediaComponent, RouterLink, FeatureDirective, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderItemComponent, [{
    type: Component,
    args: [{
      selector: "[cx-quick-order-item], cx-quick-order-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<td role="cell">
  <div class="cx-table-item-container">
    <a
      [ngClass]="{
        disabled: loading,
        'img-missing': !entry?.product?.images?.PRIMARY,
      }"
      [routerLink]="{ cxRoute: 'product', params: entry.product } | cxUrl"
      tabindex="-1"
    >
      <cx-media
        [container]="entry?.product?.images?.PRIMARY"
        [alt]="entry?.product?.name"
        format="cartIcon"
      ></cx-media>
    </a>
    <div class="cx-info">
      <div class="cx-name">
        <a
          [ngClass]="{ disabled: loading }"
          [routerLink]="{ cxRoute: 'product', params: entry.product } | cxUrl"
          class="cx-link"
          >{{ entry.product?.name || '-' }}
        </a>
      </div>

      <div class="cx-code">
        {{ 'quickOrderTable.id' | cxTranslate }} {{ entry.product?.code }}
      </div>
    </div>
  </div>
</td>

<td role="cell" class="cx-price">
  <div class="cx-mobile-header">
    {{ 'quickOrderTable.itemPrice' | cxTranslate }}
  </div>
  <div class="cx-value">
    {{ entry.basePrice?.formattedValue || '-' }}
  </div>
</td>

<td role="cell" class="cx-quantity">
  <div *cxFeature="'a11yQTY2Quantity'" class="cx-mobile-header">
    {{ 'quickOrderTable.quantityFull' | cxTranslate }}
  </div>
  <div *cxFeature="'!a11yQTY2Quantity'" class="cx-mobile-header">
    {{ 'quickOrderTable.qty' | cxTranslate }}
  </div>
  <div class="cx-value">
    <cx-item-counter
      [control]="quantityControl"
      [max]="entry.product?.stock?.stockLevel"
      [readonly]="loading"
    ></cx-item-counter>
  </div>
</td>

<td role="cell" class="cx-actions">
  <button
    (click)="removeEntry()"
    [attr.aria-label]="'common.remove' | cxTranslate"
    [disabled]="loading"
    class="btn btn-tertiary"
  >
    {{ 'common.remove' | cxTranslate }}
  </button>
</td>
`
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: QuickOrderFacade
  }], {
    entry: [{
      type: Input,
      args: ["entry"]
    }],
    index: [{
      type: Input
    }],
    loading: [{
      type: Input
    }]
  });
})();
var QuickOrderTableComponent = class _QuickOrderTableComponent {
  constructor() {
    this.entries = [];
    this.loading = false;
    useFeatureStyles("a11yQTY2Quantity");
  }
  static {
    this.ɵfac = function QuickOrderTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickOrderTableComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _QuickOrderTableComponent,
      selectors: [["cx-quick-order-table"]],
      inputs: {
        entries: "entries",
        loading: "loading"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [["class", "cx-quick-order-table-wrapper", "role", "table", 4, "ngIf"], ["role", "table", 1, "cx-quick-order-table-wrapper"], [1, "cx-visually-hidden"], ["role", "row", 1, "cx-item-list-header", "cx-quick-order-table-header"], ["role", "columnheader", 1, "cx-item-list-desc"], ["role", "columnheader", 1, "cx-item-list-price"], ["role", "columnheader", "class", "cx-item-list-qty", 4, "cxFeature"], ["role", "columnheader", 1, "cx-item-list-actions"], [1, "cx-item-list-items"], ["cx-quick-order-item", "", "class", "cx-item-list-row cx-quick-order-table-row", 3, "entry", "index", "loading", 4, "ngFor", "ngForOf"], ["role", "columnheader", 1, "cx-item-list-qty"], ["cx-quick-order-item", "", 1, "cx-item-list-row", "cx-quick-order-table-row", 3, "entry", "index", "loading"]],
      template: function QuickOrderTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, QuickOrderTableComponent_table_0_Template, 19, 15, "table", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", (ctx.entries == null ? null : ctx.entries.length) > 0);
        }
      },
      dependencies: [NgForOf, NgIf, FeatureDirective, QuickOrderItemComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderTableComponent, [{
    type: Component,
    args: [{
      selector: "cx-quick-order-table",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<table
  *ngIf="entries?.length > 0"
  class="cx-quick-order-table-wrapper"
  role="table"
>
  <caption class="cx-visually-hidden">
    {{
      'quickOrderTable.caption' | cxTranslate
    }}
  </caption>
  <thead>
    <tr role="row" class="cx-item-list-header cx-quick-order-table-header">
      <th role="columnheader" class="cx-item-list-desc">
        {{ 'quickOrderTable.product' | cxTranslate }}
      </th>
      <th role="columnheader" class="cx-item-list-price">
        {{ 'quickOrderTable.price' | cxTranslate }}
      </th>
      <th
        *cxFeature="'a11yQTY2Quantity'"
        role="columnheader"
        class="cx-item-list-qty"
      >
        {{ 'quickOrderTable.quantityFull' | cxTranslate }}
      </th>
      <th
        *cxFeature="'!a11yQTY2Quantity'"
        role="columnheader"
        class="cx-item-list-qty"
      >
        {{ 'quickOrderTable.quantity' | cxTranslate }}
      </th>
      <th role="columnheader" class="cx-item-list-actions">
        {{ 'quickOrderTable.actions' | cxTranslate }}
      </th>
    </tr>
  </thead>
  <tbody class="cx-item-list-items">
    <tr
      cx-quick-order-item
      class="cx-item-list-row cx-quick-order-table-row"
      *ngFor="let entry of entries; let i = index"
      [entry]="entry"
      [index]="i"
      [loading]="loading"
    ></tr>
  </tbody>
</table>
`
    }]
  }], () => [], {
    entries: [{
      type: Input
    }],
    loading: [{
      type: Input
    }]
  });
})();
var QuickOrderComponent = class _QuickOrderComponent {
  constructor(activeCartService, component, globalMessageService, quickOrderService, quickOrderStatePersistenceService) {
    this.activeCartService = activeCartService;
    this.component = component;
    this.globalMessageService = globalMessageService;
    this.quickOrderService = quickOrderService;
    this.quickOrderStatePersistenceService = quickOrderStatePersistenceService;
    this.quickOrderListLimit$ = this.component.data$.pipe(map((data) => data.quickOrderListLimit), tap((limit) => {
      if (!!limit) {
        this.quickOrderService.setListLimit(limit);
      }
    }));
    this.isCartStable$ = combineLatest([this.activeCartService.getActiveCartId(), this.activeCartService.isStable()]).pipe(map(([activeCartId, isStable]) => !activeCartId ? true : isStable));
    this.globalMessageType = GlobalMessageType;
    this.cartErrors$ = new BehaviorSubject([]);
    this.cartWarnings$ = new BehaviorSubject([]);
    this.cartSuccesses$ = new BehaviorSubject([]);
    this.showAddToCartInformation$ = new BehaviorSubject(false);
    this.nonPurchasableProductError$ = new BehaviorSubject(null);
  }
  ngOnInit() {
    this.cartId$ = this.activeCartService.getActiveCartId();
    this.entries$ = this.quickOrderService.getEntries();
    this.quickOrderStatePersistenceService.initSync();
  }
  ngOnDestroy() {
    this.quickOrderService.clearDeletedEntries();
  }
  get errors$() {
    return this.cartErrors$.asObservable();
  }
  get warnings$() {
    return this.cartWarnings$.asObservable();
  }
  get successes$() {
    return this.cartSuccesses$.asObservable();
  }
  get nonPurchasableError$() {
    return this.quickOrderService.getNonPurchasableProductError();
  }
  get addToCartInformation$() {
    return this.showAddToCartInformation$.asObservable();
  }
  get softDeletedEntries$() {
    return this.quickOrderService.getSoftDeletedEntries();
  }
  clear() {
    this.quickOrderService.clearList();
    this.globalMessageService.add({
      key: "quickOrderTable.listCleared"
    }, GlobalMessageType.MSG_TYPE_INFO);
  }
  addToCart(orderEntries) {
    if (!orderEntries.length) {
      this.showAddToCartInformation$.next(true);
      return;
    }
    this.clearStatuses();
    this.quickOrderService.addToCart().pipe(first()).subscribe(([entries, errors]) => {
      errors.forEach((err) => {
        if (!err.entry) {
          err.entry = orderEntries.find((e) => e.product?.code === err.productCode);
        }
      });
      this.extractErrors(errors);
      this.extractWarnings(errors);
      if (!errors.length) {
        this.showAddedToCartSuccessMessage();
      } else {
        this.extractSuccesses(errors, entries);
      }
    });
  }
  clearErrors() {
    this.cartErrors$.next([]);
  }
  clearWarnings() {
    this.cartWarnings$.next([]);
  }
  clearSuccesses() {
    this.cartSuccesses$.next([]);
  }
  clearAddToCartInformation() {
    this.showAddToCartInformation$.next(false);
  }
  undoDeletion(entry) {
    if (entry.product?.code) {
      this.quickOrderService.restoreSoftDeletedEntry(entry.product.code);
    }
  }
  clearDeletion(entry) {
    if (entry.product?.code) {
      this.quickOrderService.hardDeleteEntry(entry.product.code);
    }
  }
  clearNonPurchasableError() {
    this.quickOrderService.clearNonPurchasableProductError();
  }
  canAddProduct() {
    return this.quickOrderService.canAdd();
  }
  extractErrors(errors) {
    const noAddedEntries = errors.filter((error) => error.quantityAdded === 0);
    this.setErrors(noAddedEntries);
  }
  extractWarnings(errors) {
    const warnings = errors.filter((error) => error.quantityAdded !== 0);
    this.setWarnings(warnings);
  }
  extractSuccesses(errors, entries) {
    const successAddedEntries = [];
    entries.forEach((entry) => {
      const element = errors.find((error) => error.productCode === entry.product?.code);
      if (!element) {
        successAddedEntries.push(entry);
      }
    });
    this.setSuccesses(successAddedEntries);
  }
  clearStatuses() {
    this.clearErrors();
    this.clearWarnings();
    this.clearSuccesses();
  }
  showAddedToCartSuccessMessage() {
    this.globalMessageService.add({
      key: "quickOrderTable.addedtoCart"
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
  }
  setErrors(errors) {
    this.cartErrors$.next(errors);
  }
  setWarnings(warnings) {
    this.cartWarnings$.next(warnings);
  }
  setSuccesses(entries) {
    this.cartSuccesses$.next(entries);
  }
  static {
    this.ɵfac = function QuickOrderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickOrderComponent)(ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(CmsComponentData), ɵɵdirectiveInject(GlobalMessageService), ɵɵdirectiveInject(QuickOrderFacade), ɵɵdirectiveInject(QuickOrderStatePersistenceService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _QuickOrderComponent,
      selectors: [["cx-quick-order"]],
      viewQuery: function QuickOrderComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c8, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.quickOrderForm = _t.first);
        }
      },
      standalone: false,
      decls: 17,
      vars: 24,
      consts: [["quickOrderForm", ""], ["aria-atomic", "true", "aria-live", "assertive", "aria-relevant", "additions", 1, "quick-order-message-container"], [4, "ngIf"], [1, "quick-order-list-limit-message", 3, "text", "isVisibleCloseButton", "type"], [1, "quick-order-add-to-cart-information-message", 3, "closeMessage", "text", "type"], [1, "quick-order-non-purchasable-product-error-message", 3, "closeMessage", "text", "type"], ["class", "quick-order-deletions-message", 3, "actionButtonText", "actionButtonMessage", "text", "type", "buttonAction", "closeMessage", 4, "ngFor", "ngForOf"], [1, "quick-order-deletions-message", 3, "buttonAction", "closeMessage", "actionButtonText", "actionButtonMessage", "text", "type"], ["class", "quick-order-errors-message", 3, "accordionText", "text", "type", "closeMessage", 4, "ngIf"], [1, "quick-order-errors-message", 3, "closeMessage", "accordionText", "text", "type"], [1, "quick-order-errors"], ["class", "quick-order-error-item", 4, "ngFor", "ngForOf"], [1, "cx-visually-hidden"], [1, "quick-order-error-item"], ["class", "quick-order-warnings-message", 3, "accordionText", "text", "type", "closeMessage", 4, "ngIf"], [1, "quick-order-warnings-message", 3, "closeMessage", "accordionText", "text", "type"], [1, "quick-order-warnings"], ["class", "quick-order-warning-item", 4, "ngFor", "ngForOf"], [1, "quick-order-warning-item"], ["class", "quick-order-successes-message", 3, "text", "type", "closeMessage", 4, "ngIf"], [1, "quick-order-successes-message", 3, "closeMessage", "text", "type"], [1, "quick-order-successes"], ["class", "quick-order-success-item", 4, "ngFor", "ngForOf"], [1, "quick-order-success-item"], [1, "quick-order-header"], [1, "quick-order-form-body"], [3, "limit"], [1, "quick-order-table-body"], [3, "entries", "loading"], [1, "quick-order-footer", "row"], [1, "col-xs-12", "col-md-5", "col-lg-3"], ["class", "btn btn-block btn-secondary clear-button", "type", "button", 3, "disabled", "click", 4, "ngIf"], [3, "clickEvent", "ariaLabel", "loading"], ["type", "button", 1, "btn", "btn-block", "btn-secondary", "clear-button", 3, "click", "disabled"]],
      template: function QuickOrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1);
          ɵɵtemplate(1, QuickOrderComponent_ng_container_1_Template, 3, 3, "ng-container", 2);
          ɵɵpipe(2, "async");
          ɵɵtemplate(3, QuickOrderComponent_ng_container_3_Template, 3, 4, "ng-container", 2);
          ɵɵpipe(4, "async");
          ɵɵtemplate(5, QuickOrderComponent_ng_container_5_Template, 3, 7, "ng-container", 2);
          ɵɵpipe(6, "async");
          ɵɵtemplate(7, QuickOrderComponent_ng_container_7_Template, 3, 3, "ng-container", 2);
          ɵɵpipe(8, "async");
          ɵɵtemplate(9, QuickOrderComponent_ng_container_9_Template, 2, 1, "ng-container", 2);
          ɵɵpipe(10, "async");
          ɵɵtemplate(11, QuickOrderComponent_ng_container_11_Template, 2, 1, "ng-container", 2);
          ɵɵpipe(12, "async");
          ɵɵtemplate(13, QuickOrderComponent_ng_container_13_Template, 2, 1, "ng-container", 2);
          ɵɵpipe(14, "async");
          ɵɵelementEnd();
          ɵɵtemplate(15, QuickOrderComponent_ng_container_15_Template, 3, 3, "ng-container", 2);
          ɵɵpipe(16, "async");
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(2, 8, ctx.entries$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(4, 10, ctx.addToCartInformation$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(6, 12, ctx.nonPurchasableError$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(8, 14, ctx.softDeletedEntries$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(10, 16, ctx.errors$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(12, 18, ctx.warnings$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(14, 20, ctx.successes$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(16, 22, ctx.quickOrderListLimit$));
        }
      },
      dependencies: [NgForOf, NgIf, MessageComponent, ProgressButtonComponent, QuickOrderFormComponent, QuickOrderTableComponent, AsyncPipe, KeyValuePipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderComponent, [{
    type: Component,
    args: [{
      selector: "cx-quick-order",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  aria-atomic="true"
  aria-live="assertive"
  aria-relevant="additions"
  class="quick-order-message-container"
>
  <ng-container *ngIf="entries$ | async as entries">
    <ng-container *ngIf="!(canAddProduct() | async)">
      <ng-container *ngIf="quickOrderForm?.form?.get('product')?.dirty">
        <cx-message
          [text]="
            'quickOrderList.errors.listIsFull'
              | cxTranslate: { count: entries.length }
          "
          [isVisibleCloseButton]="false"
          [type]="globalMessageType.MSG_TYPE_ERROR"
          class="quick-order-list-limit-message"
        >
        </cx-message>
      </ng-container>
    </ng-container>
  </ng-container>

  <ng-container *ngIf="addToCartInformation$ | async">
    <cx-message
      (closeMessage)="clearAddToCartInformation()"
      [text]="
        'quickOrderList.informations.addProductBeforeAddingToCart' | cxTranslate
      "
      [type]="globalMessageType.MSG_TYPE_ERROR"
      class="quick-order-add-to-cart-information-message"
    >
    </cx-message>
  </ng-container>

  <ng-container *ngIf="nonPurchasableError$ | async as nonPurchasableError">
    <cx-message
      (closeMessage)="clearNonPurchasableError()"
      [text]="
        'quickOrderList.errors.nonPurchasableError'
          | cxTranslate: { name: nonPurchasableError.name }
      "
      [type]="globalMessageType.MSG_TYPE_ERROR"
      class="quick-order-non-purchasable-product-error-message"
    >
    </cx-message>
  </ng-container>

  <ng-container *ngIf="softDeletedEntries$ | async as deletedEntries">
    <cx-message
      *ngFor="let deletedEntry of deletedEntries | keyvalue"
      (buttonAction)="undoDeletion(deletedEntry.value)"
      (closeMessage)="clearDeletion(deletedEntry.value)"
      [actionButtonText]="'quickOrderList.undo' | cxTranslate"
      [actionButtonMessage]="
        'quickOrderList.revokeUndo'
          | cxTranslate: { name: deletedEntry.value.product?.name }
      "
      [text]="
        'quickOrderList.productWasDeleted'
          | cxTranslate: { name: deletedEntry.value.product?.name }
      "
      [type]="globalMessageType.MSG_TYPE_CONFIRMATION"
      class="quick-order-deletions-message"
    >
    </cx-message>
  </ng-container>

  <ng-container *ngIf="errors$ | async as errors">
    <cx-message
      *ngIf="errors.length"
      (closeMessage)="clearErrors()"
      [accordionText]="'quickOrderList.errors.reviewErrors' | cxTranslate"
      [text]="'quickOrderList.errorProceedingToCart' | cxTranslate"
      [type]="globalMessageType.MSG_TYPE_ERROR"
      class="quick-order-errors-message"
    >
      <ul class="quick-order-errors">
        <li *ngFor="let error of errors" class="quick-order-error-item">
          <span>
            {{
              'quickOrderList.errors.productIsOutOfStock'
                | cxTranslate
                  : {
                      name: error.entry.product.name,
                      code: error.entry.product.code,
                    }
            }}
          </span>
        </li>
      </ul>
      <div class="cx-visually-hidden">
        {{
          'quickOrderList.errors.outOfStockErrorFound'
            | cxTranslate: { count: errors.length }
        }}
      </div>
    </cx-message>
  </ng-container>

  <ng-container *ngIf="warnings$ | async as warnings">
    <cx-message
      *ngIf="warnings.length"
      (closeMessage)="clearWarnings()"
      [accordionText]="'quickOrderList.warnings.reviewWarnings' | cxTranslate"
      [text]="'quickOrderList.warningProceedingToCart' | cxTranslate"
      [type]="globalMessageType.MSG_TYPE_WARNING"
      class="quick-order-warnings-message"
    >
      <ul class="quick-order-warnings">
        <li *ngFor="let warning of warnings" class="quick-order-warning-item">
          <span>
            {{
              'quickOrderList.warnings.productWasReduced'
                | cxTranslate
                  : {
                      name: warning.entry.product.name,
                      code: warning.entry.product.code,
                      quantityAdded: warning.quantityAdded,
                    }
            }}
          </span>
        </li>
      </ul>
      <div class="cx-visually-hidden">
        {{
          'quickOrderList.warnings.reduceWarningFound'
            | cxTranslate: { count: warnings.length }
        }}
      </div>
    </cx-message>
  </ng-container>

  <ng-container *ngIf="successes$ | async as successes">
    <cx-message
      *ngIf="successes.length"
      (closeMessage)="clearSuccesses()"
      [text]="'quickOrderList.successfullyAddedToCart' | cxTranslate"
      [type]="globalMessageType.MSG_TYPE_CONFIRMATION"
      class="quick-order-successes-message"
    >
      <ul class="quick-order-successes">
        <li *ngFor="let entry of successes" class="quick-order-success-item">
          <span>{{
            'quickOrderList.successes.productAddedToCart'
              | cxTranslate
                : {
                    name: entry.product.name,
                    code: entry.product.code,
                  }
          }}</span>
        </li>
      </ul>
      <div class="cx-visually-hidden">
        {{
          'quickOrderList.successes.addedToCartFound'
            | cxTranslate: { count: successes.length }
        }}
      </div>
    </cx-message>
  </ng-container>
</div>

<ng-container *ngIf="quickOrderListLimit$ | async as quickOrderListLimit">
  <ng-container *ngIf="entries$ | async as entries">
    <div class="quick-order-header">
      <h2>
        {{ 'quickOrderList.header' | cxTranslate }}
      </h2>
      <p>
        {{
          'quickOrderList.subHeader'
            | cxTranslate: { limit: quickOrderListLimit }
        }}
      </p>
    </div>

    <div class="quick-order-form-body">
      <cx-quick-order-form #quickOrderForm [limit]="quickOrderListLimit">
      </cx-quick-order-form>
    </div>

    <div class="quick-order-table-body">
      <cx-quick-order-table
        [entries]="entries"
        [loading]="!(isCartStable$ | async)"
      ></cx-quick-order-table>
    </div>

    <div class="quick-order-footer row">
      <div class="col-xs-12 col-md-5 col-lg-3">
        <button
          *ngIf="entries.length"
          (click)="clear()"
          [attr.aria-label]="'quickOrderList.emptyList' | cxTranslate"
          [disabled]="!(isCartStable$ | async)"
          class="btn btn-block btn-secondary clear-button"
          type="button"
        >
          {{ 'quickOrderList.emptyList' | cxTranslate }}
        </button>
      </div>

      <div class="col-xs-12 col-md-5 col-lg-3">
        <cx-progress-button
          (clickEvent)="addToCart(entries)"
          [ariaLabel]="'quickOrderList.addToCart' | cxTranslate"
          [class]="'btn-block add-button'"
          [loading]="!(isCartStable$ | async)"
        >
          {{ 'quickOrderList.addToCart' | cxTranslate }}
        </cx-progress-button>
      </div>
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: CmsComponentData
  }, {
    type: GlobalMessageService
  }, {
    type: QuickOrderFacade
  }, {
    type: QuickOrderStatePersistenceService
  }], {
    quickOrderForm: [{
      type: ViewChild,
      args: ["quickOrderForm"]
    }]
  });
})();
var QuickOrderListModule = class _QuickOrderListModule {
  static {
    this.ɵfac = function QuickOrderListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickOrderListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _QuickOrderListModule,
      declarations: [QuickOrderComponent, QuickOrderFormComponent, QuickOrderItemComponent, QuickOrderTableComponent],
      imports: [AtMessageModule, CommonModule, FormErrorsModule, I18nModule, IconModule, ItemCounterModule, MediaModule, MessageComponentModule, ProgressButtonModule, ReactiveFormsModule, RouterModule, UrlModule, FeaturesConfigModule],
      exports: [QuickOrderComponent, QuickOrderFormComponent, QuickOrderItemComponent, QuickOrderTableComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          QuickOrderComponent: {
            component: QuickOrderComponent,
            data: {
              quickOrderListLimit: 10
            }
          }
        }
      })],
      imports: [AtMessageModule, CommonModule, FormErrorsModule, I18nModule, IconModule, ItemCounterModule, MediaModule, MessageComponentModule, ProgressButtonModule, ReactiveFormsModule, RouterModule, UrlModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderListModule, [{
    type: NgModule,
    args: [{
      imports: [AtMessageModule, CommonModule, FormErrorsModule, I18nModule, IconModule, ItemCounterModule, MediaModule, MessageComponentModule, ProgressButtonModule, ReactiveFormsModule, RouterModule, UrlModule, FeaturesConfigModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          QuickOrderComponent: {
            component: QuickOrderComponent,
            data: {
              quickOrderListLimit: 10
            }
          }
        }
      })],
      declarations: [QuickOrderComponent, QuickOrderFormComponent, QuickOrderItemComponent, QuickOrderTableComponent],
      exports: [QuickOrderComponent, QuickOrderFormComponent, QuickOrderItemComponent, QuickOrderTableComponent]
    }]
  }], null, null);
})();
var QuickOrderComponentsModule = class _QuickOrderComponentsModule {
  static {
    this.ɵfac = function QuickOrderComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickOrderComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _QuickOrderComponentsModule,
      imports: [RouterModule, QuickOrderListModule, CartQuickOrderFormModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: QuickOrderOrderEntriesContextToken,
        useExisting: QuickOrderOrderEntriesContext
      }],
      imports: [RouterModule, QuickOrderListModule, CartQuickOrderFormModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule, QuickOrderListModule, CartQuickOrderFormModule],
      providers: [{
        provide: QuickOrderOrderEntriesContextToken,
        useExisting: QuickOrderOrderEntriesContext
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-quick-order.mjs
var QuickOrderModule = class _QuickOrderModule {
  static {
    this.ɵfac = function QuickOrderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickOrderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _QuickOrderModule,
      imports: [QuickOrderCoreModule, QuickOrderComponentsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [QuickOrderCoreModule, QuickOrderComponentsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderModule, [{
    type: NgModule,
    args: [{
      imports: [QuickOrderCoreModule, QuickOrderComponentsModule]
    }]
  }], null, null);
})();
export {
  QuickOrderModule
};
//# sourceMappingURL=@spartacus_cart_quick-order.js.map
