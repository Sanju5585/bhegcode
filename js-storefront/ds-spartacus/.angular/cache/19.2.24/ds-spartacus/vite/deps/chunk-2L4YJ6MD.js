import {
  AsmAuthStorageService,
  AsmBindCartFacade,
  AsmCreateCustomerFacade,
  AsmCustomerListFacade
} from "./chunk-ZXNGX3YN.js";
import {
  UserAccountFacade
} from "./chunk-LZQV6UAH.js";
import {
  CommandService,
  LoggerService,
  MODULE_INITIALIZER,
  QueryService,
  StateModule,
  StatePersistenceService,
  tryNormalizeHttpError,
  utilsGroup
} from "./chunk-VIVIQI6G.js";
import {
  Actions,
  EffectsFeatureModule,
  EffectsModule,
  createEffect,
  ofType
} from "./chunk-6KXUHIAW.js";
import {
  Store,
  StoreFeatureModule,
  StoreModule,
  createFeatureSelector,
  createSelector,
  select
} from "./chunk-2FUOVDAV.js";
import {
  CommonModule
} from "./chunk-S7KROBXW.js";
import {
  Injectable,
  InjectionToken,
  NgModule,
  Pipe,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import {
  catchError,
  combineLatest,
  concatMap,
  filter,
  map,
  of,
  take
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/asm/fesm2022/spartacus-asm-core.mjs
var AsmAdapter = class {
};
var AsmConnector = class _AsmConnector {
  constructor(asmAdapter) {
    this.asmAdapter = asmAdapter;
  }
  customerSearch(options) {
    return this.asmAdapter.customerSearch(options);
  }
  customerLists() {
    return this.asmAdapter.customerLists();
  }
  bindCart(options) {
    return this.asmAdapter.bindCart(options);
  }
  createCustomer(user) {
    return this.asmAdapter.createCustomer(user);
  }
  static {
    this.ɵfac = function AsmConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmConnector)(ɵɵinject(AsmAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmConnector,
      factory: _AsmConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AsmAdapter
  }], null);
})();
var CUSTOMER_SEARCH_PAGE_NORMALIZER = new InjectionToken("CustomerSearchPageNormalizer");
var CUSTOMER_LISTS_NORMALIZER = new InjectionToken("CustomerListsNormalizer");
var AsmBindCartService = class _AsmBindCartService {
  constructor(commandService, asmConnector, userAccountFacade) {
    this.commandService = commandService;
    this.asmConnector = asmConnector;
    this.userAccountFacade = userAccountFacade;
    this.bindCartCommand$ = this.commandService.create((cartId) => this.userAccountFacade.get().pipe(map((user) => {
      if (user?.uid) {
        return user.uid;
      } else {
        throw new Error("No identifier for authenticated user found.");
      }
    }), take(1), concatMap((customerId) => this.asmConnector.bindCart({
      cartId,
      customerId
    }))));
  }
  bindCart(cartId) {
    return this.bindCartCommand$.execute(cartId);
  }
  static {
    this.ɵfac = function AsmBindCartService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmBindCartService)(ɵɵinject(CommandService), ɵɵinject(AsmConnector), ɵɵinject(UserAccountFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmBindCartService,
      factory: _AsmBindCartService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmBindCartService, [{
    type: Injectable
  }], () => [{
    type: CommandService
  }, {
    type: AsmConnector
  }, {
    type: UserAccountFacade
  }], null);
})();
var AsmCreateCustomerService = class _AsmCreateCustomerService {
  constructor(asmConnector, command) {
    this.asmConnector = asmConnector;
    this.command = command;
    this.createCustomerCommand = this.command.create(({
      user
    }) => this.asmConnector.createCustomer(user));
  }
  createCustomer(user) {
    return this.createCustomerCommand.execute({
      user
    });
  }
  static {
    this.ɵfac = function AsmCreateCustomerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCreateCustomerService)(ɵɵinject(AsmConnector), ɵɵinject(CommandService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmCreateCustomerService,
      factory: _AsmCreateCustomerService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCreateCustomerService, [{
    type: Injectable
  }], () => [{
    type: AsmConnector
  }, {
    type: CommandService
  }], null);
})();
var ASM_UI_UPDATE = "[Asm] UI Update";
var AsmUiUpdate = class {
  constructor(payload) {
    this.payload = payload;
    this.type = ASM_UI_UPDATE;
  }
};
var ASM_FEATURE = "asm";
var CUSTOMER_SEARCH_DATA = "[asm] Customer search data";
var CUSTOMER_LIST_CUSTOMERS_SEARCH_DATA = "[asm] Customer list customers search data";
var CUSTOMER_SEARCH = "[Asm] Customer Search";
var CUSTOMER_SEARCH_FAIL = "[Asm] Customer Search Fail";
var CUSTOMER_SEARCH_SUCCESS = "[Asm] Customer Search Success";
var CUSTOMER_SEARCH_RESET = "[Asm] Customer Search Reset";
var CUSTOMER_LIST_CUSTOMERS_SEARCH = "[Asm] Customer List Customers Search";
var CUSTOMER_LIST_CUSTOMERS_SEARCH_FAIL = "[Asm] Customer List Customers Search Fail";
var CUSTOMER_LIST_CUSTOMERS_SEARCH_SUCCESS = "[Asm] Customer List Customers Search Success";
var CUSTOMER_LIST_CUSTOMERS_SEARCH_RESET = "[Asm] Customer List Customers Search Reset";
var CustomerSearch = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(CUSTOMER_SEARCH_DATA);
    this.payload = payload;
    this.type = CUSTOMER_SEARCH;
  }
};
var CustomerSearchFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(CUSTOMER_SEARCH_DATA, payload);
    this.payload = payload;
    this.type = CUSTOMER_SEARCH_FAIL;
  }
};
var CustomerSearchSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(CUSTOMER_SEARCH_DATA);
    this.payload = payload;
    this.type = CUSTOMER_SEARCH_SUCCESS;
  }
};
var CustomerSearchReset = class extends utilsGroup.LoaderResetAction {
  constructor() {
    super(CUSTOMER_SEARCH_DATA);
    this.type = CUSTOMER_SEARCH_RESET;
  }
};
var CustomerListCustomersSearch = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(CUSTOMER_LIST_CUSTOMERS_SEARCH_DATA);
    this.payload = payload;
    this.type = CUSTOMER_LIST_CUSTOMERS_SEARCH;
  }
};
var CustomerListCustomersSearchFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(CUSTOMER_LIST_CUSTOMERS_SEARCH_DATA, payload);
    this.payload = payload;
    this.type = CUSTOMER_LIST_CUSTOMERS_SEARCH_FAIL;
  }
};
var CustomerListCustomersSearchSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(CUSTOMER_LIST_CUSTOMERS_SEARCH_DATA);
    this.payload = payload;
    this.type = CUSTOMER_LIST_CUSTOMERS_SEARCH_SUCCESS;
  }
};
var CustomerListCustomersSearchReset = class extends utilsGroup.LoaderResetAction {
  constructor() {
    super(CUSTOMER_LIST_CUSTOMERS_SEARCH_DATA);
    this.type = CUSTOMER_LIST_CUSTOMERS_SEARCH_RESET;
  }
};
var LOGOUT_CUSTOMER_SUPPORT_AGENT = "[Auth] Logout Customer Support Agent";
var LogoutCustomerSupportAgent = class {
  constructor() {
    this.type = LOGOUT_CUSTOMER_SUPPORT_AGENT;
  }
};
var customerGroup_actions = Object.freeze({
  __proto__: null,
  ASM_UI_UPDATE,
  AsmUiUpdate,
  CUSTOMER_LIST_CUSTOMERS_SEARCH,
  CUSTOMER_LIST_CUSTOMERS_SEARCH_FAIL,
  CUSTOMER_LIST_CUSTOMERS_SEARCH_RESET,
  CUSTOMER_LIST_CUSTOMERS_SEARCH_SUCCESS,
  CUSTOMER_SEARCH,
  CUSTOMER_SEARCH_FAIL,
  CUSTOMER_SEARCH_RESET,
  CUSTOMER_SEARCH_SUCCESS,
  CustomerListCustomersSearch,
  CustomerListCustomersSearchFail,
  CustomerListCustomersSearchReset,
  CustomerListCustomersSearchSuccess,
  CustomerSearch,
  CustomerSearchFail,
  CustomerSearchReset,
  CustomerSearchSuccess,
  LOGOUT_CUSTOMER_SUPPORT_AGENT,
  LogoutCustomerSupportAgent
});
var CustomerEffects = class _CustomerEffects {
  constructor(actions$, asmConnector) {
    this.actions$ = actions$;
    this.asmConnector = asmConnector;
    this.logger = inject(LoggerService);
    this.customerSearch$ = createEffect(() => this.actions$.pipe(ofType(CUSTOMER_SEARCH), map((action) => action.payload), switchMap((options) => this.asmConnector.customerSearch(options).pipe(map((customerSearchResults) => {
      return new CustomerSearchSuccess(customerSearchResults);
    }), catchError((error) => {
      if (error.status === 400 && error.details?.[0]?.message?.indexOf("Wrong orderId") > -1) {
        return of(new CustomerSearchSuccess({
          entries: []
        }));
      }
      return of(new CustomerSearchFail(tryNormalizeHttpError(error, this.logger)));
    })))));
    this.customerListCustomersSearch$ = createEffect(() => this.actions$.pipe(ofType(CUSTOMER_LIST_CUSTOMERS_SEARCH), map((action) => action.payload), switchMap((options) => this.asmConnector.customerSearch(options).pipe(map((customerListCustomersSearchResults) => {
      return new CustomerListCustomersSearchSuccess(customerListCustomersSearchResults);
    }), catchError((error) => of(new CustomerListCustomersSearchFail(tryNormalizeHttpError(error, this.logger))))))));
  }
  static {
    this.ɵfac = function CustomerEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerEffects)(ɵɵinject(Actions), ɵɵinject(AsmConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CustomerEffects,
      factory: _CustomerEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: AsmConnector
  }], null);
})();
var effects = [CustomerEffects];
var initialState = {
  collapsed: false
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case ASM_UI_UPDATE: {
      return __spreadValues(__spreadValues({}, state), action.payload);
    }
    case CUSTOMER_SEARCH_FAIL: {
      return __spreadValues(__spreadValues({}, state), action.payload);
    }
    default: {
      return state;
    }
  }
}
function getReducers() {
  return {
    customerSearchResult: utilsGroup.loaderReducer(CUSTOMER_SEARCH_DATA),
    customerListCustomersSearchResult: utilsGroup.loaderReducer(CUSTOMER_LIST_CUSTOMERS_SEARCH_DATA),
    asmUi: reducer
  };
}
var reducerToken = new InjectionToken("AsmReducers");
var reducerProvider = {
  provide: reducerToken,
  useFactory: getReducers
};
function clearCustomerSupportAgentAsmState(reducer2) {
  return function(state, action) {
    if (action.type === LOGOUT_CUSTOMER_SUPPORT_AGENT) {
      state = __spreadProps(__spreadValues({}, state), {
        customerSearchResult: {}
      });
    }
    return reducer2(state, action);
  };
}
var metaReducers = [clearCustomerSupportAgentAsmState];
var getAsmState = createFeatureSelector(ASM_FEATURE);
var getAsmUi = createSelector(getAsmState, (state) => state.asmUi);
var getCustomerSearchResultsLoaderState = createSelector(getAsmState, (state) => state.customerSearchResult);
var getCustomerSearchResults = createSelector(getCustomerSearchResultsLoaderState, (state) => utilsGroup.loaderValueSelector(state));
var getCustomerSearchResultsLoading = createSelector(getCustomerSearchResultsLoaderState, (state) => utilsGroup.loaderLoadingSelector(state));
var getCustomerListCustomersSearchResultsLoaderState = createSelector(getAsmState, (state) => state.customerListCustomersSearchResult);
var getCustomerListCustomersSearchResults = createSelector(getCustomerListCustomersSearchResultsLoaderState, (state) => utilsGroup.loaderValueSelector(state));
var getCustomerListCustomersSearchResultsLoading = createSelector(getCustomerListCustomersSearchResultsLoaderState, (state) => utilsGroup.loaderLoadingSelector(state));
var getCustomerListCustomersSearchResultsError = createSelector(getCustomerListCustomersSearchResultsLoaderState, (state) => utilsGroup.loaderErrorSelector(state));
var asmGroup_selectors = Object.freeze({
  __proto__: null,
  getAsmState,
  getAsmUi,
  getCustomerListCustomersSearchResults,
  getCustomerListCustomersSearchResultsError,
  getCustomerListCustomersSearchResultsLoaderState,
  getCustomerListCustomersSearchResultsLoading,
  getCustomerSearchResults,
  getCustomerSearchResultsLoaderState,
  getCustomerSearchResultsLoading
});
var AsmCustomerListService = class _AsmCustomerListService {
  constructor(queryService, asmConnector, store) {
    this.queryService = queryService;
    this.asmConnector = asmConnector;
    this.store = store;
    this.customerListQuery$ = this.queryService.create(() => this.asmConnector.customerLists(), {
      reloadOn: void 0,
      resetOn: void 0
    });
  }
  getCustomerLists() {
    return this.customerListQuery$.get();
  }
  getCustomerListsState() {
    return this.customerListQuery$.getState();
  }
  /**
   * Search for customers in a customer list
   */
  customerListCustomersSearch(options) {
    this.store.dispatch(new CustomerListCustomersSearch(options));
  }
  /**
   * Returns the customer search result data for a customer list
   */
  getCustomerListCustomersSearchResults() {
    return this.store.pipe(select(getCustomerListCustomersSearchResults));
  }
  /**
   * Returns the customer list customers search result loading status.
   */
  getCustomerListCustomersSearchResultsLoading() {
    return this.store.pipe(select(getCustomerListCustomersSearchResultsLoading));
  }
  /**
   * Reset the customer list customers search result data to the initial state.
   */
  customerListCustomersSearchReset() {
    this.store.dispatch(new CustomerListCustomersSearchReset());
  }
  /**
   * Returns the customer list customers search result error status.
   */
  getCustomerListCustomersSearchResultsError() {
    return this.store.pipe(select(getCustomerListCustomersSearchResultsError));
  }
  static {
    this.ɵfac = function AsmCustomerListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomerListService)(ɵɵinject(QueryService), ɵɵinject(AsmConnector), ɵɵinject(Store));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmCustomerListService,
      factory: _AsmCustomerListService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomerListService, [{
    type: Injectable
  }], () => [{
    type: QueryService
  }, {
    type: AsmConnector
  }, {
    type: Store
  }], null);
})();
var facadeProviders = [AsmCustomerListService, {
  provide: AsmCustomerListFacade,
  useExisting: AsmCustomerListService
}, AsmBindCartService, {
  provide: AsmBindCartFacade,
  useExisting: AsmBindCartService
}, AsmCreateCustomerService, {
  provide: AsmCreateCustomerFacade,
  useExisting: AsmCreateCustomerService
}];
var AsmStatePersistenceService = class _AsmStatePersistenceService {
  constructor(statePersistenceService, store, authStorageService) {
    this.statePersistenceService = statePersistenceService;
    this.store = store;
    this.authStorageService = authStorageService;
    this.subscription = new Subscription();
    this.key = "asm";
  }
  /**
   * Initializes the synchronization between state and browser storage.
   */
  initSync() {
    this.subscription.add(this.statePersistenceService.syncWithStorage({
      key: this.key,
      state$: this.getAsmState(),
      onRead: (state) => this.onRead(state)
    }));
  }
  /**
   * Gets and transforms state from different sources into the form that should
   * be saved in storage.
   */
  getAsmState() {
    return combineLatest([this.store.pipe(
      // Since getAsmState() may be called while the module is lazy loaded
      // The asm state slice may not exist yet in the first store emissions.
      filter((store) => !!store.asm),
      select(getAsmUi)
    ), of(this.authStorageService.getEmulatedUserToken()), this.authStorageService.getTokenTarget()]).pipe(map(([ui, emulatedUserToken, tokenTarget]) => {
      let emulatedToken = emulatedUserToken;
      if (emulatedToken) {
        emulatedToken = __spreadValues({}, emulatedUserToken);
        delete emulatedToken.refresh_token;
      }
      return {
        ui,
        emulatedUserToken: emulatedToken,
        tokenTarget
      };
    }));
  }
  /**
   * Function called on each browser storage read.
   * Used to update state from browser -> state.
   */
  onRead(state) {
    if (state) {
      if (state.ui) {
        this.store.dispatch(new AsmUiUpdate(state.ui));
      }
      if (state.emulatedUserToken) {
        this.authStorageService.setEmulatedUserToken(state.emulatedUserToken);
      }
      if (state.tokenTarget) {
        this.authStorageService.setTokenTarget(state.tokenTarget);
      }
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function AsmStatePersistenceService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmStatePersistenceService)(ɵɵinject(StatePersistenceService), ɵɵinject(Store), ɵɵinject(AsmAuthStorageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmStatePersistenceService,
      factory: _AsmStatePersistenceService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmStatePersistenceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: StatePersistenceService
  }, {
    type: Store
  }, {
    type: AsmAuthStorageService
  }], null);
})();
var AsmStoreModule = class _AsmStoreModule {
  static {
    this.ɵfac = function AsmStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmStoreModule,
      imports: [CommonModule, StateModule, StoreFeatureModule, EffectsFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [reducerProvider],
      imports: [CommonModule, StateModule, StoreModule.forFeature(ASM_FEATURE, reducerToken, {
        metaReducers
      }), EffectsModule.forFeature(effects)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmStoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, StateModule, StoreModule.forFeature(ASM_FEATURE, reducerToken, {
        metaReducers
      }), EffectsModule.forFeature(effects)],
      providers: [reducerProvider]
    }]
  }], null, null);
})();
function asmStatePersistenceFactory(asmStatePersistenceService) {
  const result = () => asmStatePersistenceService.initSync();
  return result;
}
var AsmCoreModule = class _AsmCoreModule {
  static {
    this.ɵfac = function AsmCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCoreModule,
      imports: [CommonModule, AsmStoreModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [AsmConnector, {
        provide: MODULE_INITIALIZER,
        useFactory: asmStatePersistenceFactory,
        deps: [AsmStatePersistenceService],
        multi: true
      }, ...facadeProviders],
      imports: [CommonModule, AsmStoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AsmStoreModule],
      providers: [AsmConnector, {
        provide: MODULE_INITIALIZER,
        useFactory: asmStatePersistenceFactory,
        deps: [AsmStatePersistenceService],
        multi: true
      }, ...facadeProviders]
    }]
  }], null, null);
})();
var AsmService = class _AsmService {
  constructor(store) {
    this.store = store;
  }
  /**
   * Search for customers
   * @param options
   */
  customerSearch(options) {
    this.store.dispatch(new CustomerSearch(options));
  }
  /**
   * Reset the customer search result data to the initial state.
   */
  customerSearchReset() {
    this.store.dispatch(new CustomerSearchReset());
  }
  /**
   * Returns the customer search result data.
   */
  getCustomerSearchResults() {
    return this.store.pipe(select(getCustomerSearchResults));
  }
  /**
   * Returns the customer search result loading status.
   */
  getCustomerSearchResultsLoading() {
    return this.store.pipe(select(getCustomerSearchResultsLoading));
  }
  /**
   * Updates the state of the ASM UI
   */
  updateAsmUiState(asmUi) {
    this.store.dispatch(new AsmUiUpdate(asmUi));
  }
  /**
   * Get the state of the ASM UI
   */
  getAsmUiState() {
    return this.store.pipe(select(getAsmUi));
  }
  static {
    this.ɵfac = function AsmService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmService)(ɵɵinject(Store));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmService,
      factory: _AsmService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }], null);
})();
var ArgsPipe = class _ArgsPipe {
  transform(projectionFunction, ...args) {
    return projectionFunction(...args);
  }
  static {
    this.ɵfac = function ArgsPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ArgsPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "cxArgs",
      type: _ArgsPipe,
      pure: true,
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArgsPipe, [{
    type: Pipe,
    args: [{
      name: "cxArgs",
      standalone: false
    }]
  }], null, null);
})();
var ArgsModule = class _ArgsModule {
  static {
    this.ɵfac = function ArgsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ArgsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ArgsModule,
      declarations: [ArgsPipe],
      exports: [ArgsPipe]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArgsModule, [{
    type: NgModule,
    args: [{
      declarations: [ArgsPipe],
      exports: [ArgsPipe]
    }]
  }], null, null);
})();
var SortOrder;
(function(SortOrder2) {
  SortOrder2[SortOrder2["ASC"] = 1] = "ASC";
  SortOrder2[SortOrder2["DESC"] = -1] = "DESC";
})(SortOrder || (SortOrder = {}));
function byBoolean(ordering = SortOrder.ASC) {
  return (a, b) => {
    if (a === b) {
      return 0;
    }
    const lesser = a === true;
    return (lesser ? -1 : 1) * ordering;
  };
}
var byBooleanTrueFirst = byBoolean(SortOrder.ASC);
function byComparison(ordering = SortOrder.ASC) {
  return (a, b) => {
    if (a === b) {
      return 0;
    }
    const lesser = a < b;
    return (lesser ? -1 : 1) * ordering;
  };
}
var byComparisonAscending = byComparison(SortOrder.ASC);
function byNullish(ordering = SortOrder.ASC) {
  return (a, b) => {
    const aNullish = a === null || a === void 0;
    const bNullish = b === null || b === void 0;
    if (aNullish === bNullish) {
      return 0;
    }
    return (aNullish ? -1 : 1) * ordering;
  };
}
var byNullishFirst = byNullish(SortOrder.ASC);
var byNullishLast = byNullish(SortOrder.DESC);
function byNumber(ordering = SortOrder.ASC) {
  return (a, b) => {
    if (a === b) {
      return 0;
    }
    return (a - b < 0 ? -1 : 1) * ordering;
  };
}
var byNumberAscending = byNumber(SortOrder.ASC);
var byNumberDescending = byNumber(SortOrder.DESC);
function byString(ordering = SortOrder.ASC, locales, opts) {
  return (a, b) => (a ?? "").localeCompare(b ?? "", locales, opts) * ordering;
}
var byStringAscending = byString(SortOrder.ASC);
function itemsWith(...fns) {
  return (a, b) => {
    for (const fn of fns) {
      const result = fn(a, b);
      if (result !== 0) {
        return result;
      }
    }
    return 0;
  };
}
function property(prop1, prop2OrComparator, comparator) {
  if (typeof prop2OrComparator === "function") {
    return (a, b) => prop2OrComparator(a[prop1], b[prop1]);
  } else {
    if (comparator) {
      return (a, b) => comparator(a[prop1][prop2OrComparator], b[prop1][prop2OrComparator]);
    } else {
      throw new Error("No comparator provided");
    }
  }
}
var isString = (x) => typeof x === "string";
var isNumber = (x) => typeof x === "number";
var isBoolean = (x) => typeof x === "boolean";
function whenType(typeGuard, comparator) {
  return (a, b) => {
    if (typeGuard(a) && typeGuard(b)) {
      return comparator(a, b);
    }
    return 0;
  };
}

export {
  AsmAdapter,
  CUSTOMER_SEARCH_PAGE_NORMALIZER,
  CUSTOMER_LISTS_NORMALIZER,
  AsmCoreModule,
  AsmService,
  ArgsPipe,
  ArgsModule,
  SortOrder,
  byBoolean,
  byComparison,
  byNullish,
  byString,
  itemsWith,
  property,
  isString,
  isNumber,
  isBoolean,
  whenType
};
//# sourceMappingURL=chunk-2L4YJ6MD.js.map
