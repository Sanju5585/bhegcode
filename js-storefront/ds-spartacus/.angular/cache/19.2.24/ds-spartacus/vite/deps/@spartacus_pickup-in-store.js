import {
  IntendedPickupLocationFacade,
  PREFERRED_STORE_LOCAL_STORAGE_KEY,
  PickupLocationsSearchFacade,
  PickupOptionFacade,
  PreferredStoreFacade,
  cartWithIdAndUserId,
  getProperty
} from "./chunk-FTCMTKRT.js";
import {
  OrderFacade,
  OrderOutlets
} from "./chunk-UIW5AQFA.js";
import {
  StoreLocationService
} from "./chunk-H5G2MMM2.js";
import {
  StoreFinderFacade,
  StoreFinderOutlets
} from "./chunk-MGG5WRXC.js";
import {
  UserProfileFacade
} from "./chunk-YJXUXPBZ.js";
import {
  ActiveCartFacade,
  CartOutlets,
  CartType
} from "./chunk-KEAKWHYV.js";
import {
  CardComponent,
  CardModule,
  CmsComponentData,
  CurrentProductService,
  DIALOG_TYPE,
  FocusDirective,
  ICON_TYPE,
  IconComponent,
  IconModule,
  KeyboardFocusModule,
  LAUNCH_CALLER,
  LaunchDialogService,
  MediaComponent,
  MediaModule,
  OutletContextData,
  OutletModule,
  OutletPosition,
  SpinnerComponent,
  SpinnerModule,
  TAB_MODE,
  TabComponent,
  TabModule,
  provideOutlet
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  CmsService,
  Config,
  ConfigModule,
  FeatureConfigService,
  FeatureDirective,
  FeaturesConfigModule,
  I18nModule,
  LoggerService,
  OccEndpointsService,
  RoutingService,
  TranslatePipe,
  UrlModule,
  UrlPipe,
  WindowRef,
  provideDefaultConfig,
  tryNormalizeHttpError,
  useFeatureStyles,
  utilsGroup
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-EBCNDD52.js";
import "./chunk-YMQEGXEG.js";
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
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
  select
} from "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import {
  HttpClient
} from "./chunk-2A6OHZCE.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Output,
  ViewChild,
  ViewContainerRef,
  inject,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-7OJSO65L.js";
import {
  iif
} from "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  EMPTY,
  catchError,
  combineLatest,
  concatMap,
  distinctUntilChanged,
  filter,
  map,
  mergeMap,
  of,
  shareReplay,
  startWith,
  take,
  tap,
  withLatestFrom
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/pickup-in-store/fesm2022/spartacus-pickup-in-store-core.mjs
var defaultPickupInStoreConfig = {
  pickupInStore: {
    consentTemplateId: "STORE_USER_INFORMATION"
  }
};
var PickupInStoreConfig = class _PickupInStoreConfig {
  static {
    this.ɵfac = function PickupInStoreConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupInStoreConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PickupInStoreConfig,
      factory: function PickupInStoreConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _PickupInStoreConfig)();
        } else {
          __ngConditionalFactory__ = ɵɵinject(Config);
        }
        return __ngConditionalFactory__;
      },
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupInStoreConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var PickupLocationAdapter = class {
};
var PickupLocationConnector = class _PickupLocationConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  /**
   * Get the store details by store name.
   * @param storeName The store name to get details for
   */
  getStoreDetails(storeName) {
    return this.adapter.getStoreDetails(storeName);
  }
  static {
    this.ɵfac = function PickupLocationConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupLocationConnector)(ɵɵinject(PickupLocationAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PickupLocationConnector,
      factory: _PickupLocationConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupLocationConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: PickupLocationAdapter
  }], null);
})();
var StockAdapter = class {
};
var StockConnector = class _StockConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  /**
   * Finds stock levels of a product at stores near a location.
   * @param productCode the product code of the product to find stock levels for
   * @param location the location to find stock levels at, either lat long or free text search
   */
  loadStockLevels(productCode, location) {
    return this.adapter.loadStockLevels(productCode, location);
  }
  /**
   * Finds stock levels of a product at an individual store.
   * @param productCode the product code of the product to find stock levels for
   * @param storeName the name of the store to find stock levels at
   */
  loadStockLevelAtStore(productCode, storeName) {
    return this.adapter.loadStockLevelAtStore(productCode, storeName);
  }
  static {
    this.ɵfac = function StockConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StockConnector)(ɵɵinject(StockAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StockConnector,
      factory: _StockConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: StockAdapter
  }], null);
})();
var ADD_BROWSER_LOCATION = "[Pickup Locations] Add Browser Location";
var AddBrowserLocation = createAction(ADD_BROWSER_LOCATION, props());
var browserLocation_action = Object.freeze({
  __proto__: null,
  ADD_BROWSER_LOCATION,
  AddBrowserLocation
});
var LOAD_DEFAULT_POINT_OF_SERVICE = "[Default Point Of Service] Load Default Point Of Service";
var LOAD_DEFAULT_POINT_OF_SERVICE_SUCCESS = "[Default Point Of Service] Load Default Point Of Service Success";
var SET_DEFAULT_POINT_OF_SERVICE = "[Default Point Of Service] Set Default Point Of Service";
var LoadDefaultPointOfService = createAction(LOAD_DEFAULT_POINT_OF_SERVICE);
var LoadDefaultPointOfServiceSuccess = createAction(LOAD_DEFAULT_POINT_OF_SERVICE_SUCCESS, props());
var SetDefaultPointOfService = createAction(SET_DEFAULT_POINT_OF_SERVICE, props());
var defaultPointOfServiceName_action = Object.freeze({
  __proto__: null,
  LOAD_DEFAULT_POINT_OF_SERVICE,
  LOAD_DEFAULT_POINT_OF_SERVICE_SUCCESS,
  LoadDefaultPointOfService,
  LoadDefaultPointOfServiceSuccess,
  SET_DEFAULT_POINT_OF_SERVICE,
  SetDefaultPointOfService
});
var ADD_LOCATION = "[Pickup Locations] Add Location";
var REMOVE_LOCATION = "[Pickup Locations] Remove Location";
var SET_PICKUP_OPTION$1 = "[Pickup Locations] Set Pickup Option";
var GET_STORE_DETAILS = "[Pickup Locations] Get Store Details";
var STORE_DETAILS_SUCCESS = "[Pickup Locations] Get Store Details Success";
var STORE_DETAILS_FAIL = "[Pickup Locations] Get Store Details Fail";
var SET_PICKUP_OPTION_TO_DELIVERY = "[Pickup Locations] Set Pickup Option To Delivery";
var SET_PICKUP_OPTION_TO_DELIVERY_SUCCESS = "[Pickup Locations] Set Pickup Option To Delivery Success";
var SET_PICKUP_OPTION_TO_PICKUP_IN_STORE = "[Pickup Locations] Set Pickup Option To Pickup In Store";
var SET_PICKUP_OPTION_TO_PICKUP_IN_STORE_SUCCESS = "[Pickup Locations] Set Pickup Option To Pickup In Store Success";
var CART_RELOAD_SUCCESS = "[Pickup Locations] CART_RELOAD_SUCCESS";
var DELIVERY_MODE_SET_PICKUP_OPTION_TO_PICKUP_IN_STORE_SUCCESS = "[Pickup Locations CHECKOUT] CHECKOUT_SET_PICKUP_OPTION_TO_PICKUP_IN_STORE_SUCCESS";
var AddLocation = createAction(ADD_LOCATION, props());
var RemoveLocation = createAction(REMOVE_LOCATION, props());
var SetPickupOption$1 = createAction(SET_PICKUP_OPTION$1, props());
var GetStoreDetailsById = createAction(GET_STORE_DETAILS, props());
var SetStoreDetailsSuccess = createAction(STORE_DETAILS_SUCCESS, props());
var _SetStoreDetailsFailure = createAction(STORE_DETAILS_FAIL, props());
var SetStoreDetailsFailure = ($props) => {
  return __spreadProps(__spreadValues({}, _SetStoreDetailsFailure($props)), {
    error: $props.payload
  });
};
var pickupLocation_action = Object.freeze({
  __proto__: null,
  ADD_LOCATION,
  AddLocation,
  CART_RELOAD_SUCCESS,
  DELIVERY_MODE_SET_PICKUP_OPTION_TO_PICKUP_IN_STORE_SUCCESS,
  GET_STORE_DETAILS,
  GetStoreDetailsById,
  REMOVE_LOCATION,
  RemoveLocation,
  SET_PICKUP_OPTION: SET_PICKUP_OPTION$1,
  SET_PICKUP_OPTION_TO_DELIVERY,
  SET_PICKUP_OPTION_TO_DELIVERY_SUCCESS,
  SET_PICKUP_OPTION_TO_PICKUP_IN_STORE,
  SET_PICKUP_OPTION_TO_PICKUP_IN_STORE_SUCCESS,
  STORE_DETAILS_FAIL,
  STORE_DETAILS_SUCCESS,
  SetPickupOption: SetPickupOption$1,
  SetStoreDetailsFailure,
  SetStoreDetailsSuccess
});
var SET_PICKUP_OPTION = "[PickupOption] Set Pickup Option";
var REMOVE_PICKUP_OPTION = "[PickupOption] Remove Pickup Option";
var REMOVE_ALL_PICKUP_OPTION = "[PickupOption] Remove All Pickup Option";
var SET_PAGE_CONTEXT = "[PickupOption] Set Page Context";
var SetPickupOption = createAction(SET_PICKUP_OPTION, props());
var RemovePickupOption = createAction(REMOVE_PICKUP_OPTION, props());
var RemoveAllPickupOptions = createAction(REMOVE_ALL_PICKUP_OPTION);
var SetPageContext = createAction(SET_PAGE_CONTEXT, props());
var pickupOption_action = Object.freeze({
  __proto__: null,
  RemoveAllPickupOptions,
  RemovePickupOption,
  SetPageContext,
  SetPickupOption
});
var STOCK_FEATURE = "stock";
var STOCK_DATA = "[Stock] Stock Data";
var STOCK_LEVEL = "[Stock] Get Stock Level";
var STOCK_LEVEL_ON_HOLD = "[Stock] On Hold";
var STOCK_LEVEL_FAIL = "[Stock] Get Stock Level Fail";
var STOCK_LEVEL_SUCCESS = "[Stock] Get Stock Level Success";
var CLEAR_STOCK_DATA = "[Stock] Clear Data";
var STOCK_LEVEL_AT_STORE = "[Stock] Get Stock Level at Store";
var STOCK_LEVEL_AT_STORE_SUCCESS = "[Stock] Get Stock Level at Store Success";
var StockLevel = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(STOCK_DATA);
    this.payload = payload;
    this.type = STOCK_LEVEL;
  }
};
var StockLevelOnHold = class extends utilsGroup.LoaderLoadAction {
  constructor() {
    super(STOCK_DATA);
    this.type = STOCK_LEVEL_ON_HOLD;
  }
};
var StockLevelFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(STOCK_DATA, payload);
    this.payload = payload;
    this.type = STOCK_LEVEL_FAIL;
  }
};
var StockLevelSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(STOCK_DATA);
    this.payload = payload;
    this.type = STOCK_LEVEL_SUCCESS;
  }
};
var ClearStockData = class extends utilsGroup.LoaderResetAction {
  constructor() {
    super(STOCK_DATA);
    this.type = CLEAR_STOCK_DATA;
  }
};
var StockLevelAtStore = createAction(STOCK_LEVEL_AT_STORE, props());
var StockLevelAtStoreSuccess = createAction(STOCK_LEVEL_AT_STORE_SUCCESS, props());
var stock_action = Object.freeze({
  __proto__: null,
  CLEAR_STOCK_DATA,
  ClearStockData,
  STOCK_LEVEL,
  STOCK_LEVEL_AT_STORE,
  STOCK_LEVEL_AT_STORE_SUCCESS,
  STOCK_LEVEL_FAIL,
  STOCK_LEVEL_ON_HOLD,
  STOCK_LEVEL_SUCCESS,
  StockLevel,
  StockLevelAtStore,
  StockLevelAtStoreSuccess,
  StockLevelFail,
  StockLevelOnHold,
  StockLevelSuccess
});
var TOGGLE_HIDE_OUT_OF_STOCK_OPTIONS = "[Stock] Toggle Hide Out Of Stock Options";
var ToggleHideOutOfStockOptionsAction = createAction(TOGGLE_HIDE_OUT_OF_STOCK_OPTIONS);
var DefaultPointOfServiceEffect = class _DefaultPointOfServiceEffect {
  constructor(actions$, store, userProfileService, winRef) {
    this.actions$ = actions$;
    this.store = store;
    this.userProfileService = userProfileService;
    this.winRef = winRef;
    this.loadDefaultPointOfService$ = createEffect(() => this.actions$.pipe(ofType(LOAD_DEFAULT_POINT_OF_SERVICE), switchMap(() => this.userProfileService.get().pipe(mergeMap((preferredStore) => iif(() => !!preferredStore && !!preferredStore.defaultPointOfServiceName, of({
      name: getProperty(preferredStore, "defaultPointOfServiceName"),
      displayName: ""
    }), (() => {
      const PREFERRED_STORE = this.winRef.localStorage?.getItem(PREFERRED_STORE_LOCAL_STORAGE_KEY);
      return of(PREFERRED_STORE ? JSON.parse(PREFERRED_STORE) : void 0);
    })())), filter((defaultPointOfService) => defaultPointOfService), map((defaultPointOfService) => LoadDefaultPointOfServiceSuccess({
      payload: defaultPointOfService
    })), catchError((_error) => of(LoadDefaultPointOfServiceSuccess({
      payload: {
        name: "",
        displayName: ""
      }
    })))))));
    this.setDefaultPointOfService$ = createEffect(() => this.actions$.pipe(ofType(SET_DEFAULT_POINT_OF_SERVICE), map((action) => action["payload"]), tap((preferredStore) => this.winRef.localStorage?.setItem(PREFERRED_STORE_LOCAL_STORAGE_KEY, JSON.stringify(preferredStore))), switchMap((preferredStore) => this.userProfileService.update({
      defaultPointOfServiceName: preferredStore.name
    }).pipe(map(() => LoadDefaultPointOfService()), catchError((_error) => of(LoadDefaultPointOfService)))), map(() => LoadDefaultPointOfService())));
  }
  static {
    this.ɵfac = function DefaultPointOfServiceEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultPointOfServiceEffect)(ɵɵinject(Actions), ɵɵinject(Store), ɵɵinject(UserProfileFacade), ɵɵinject(WindowRef));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DefaultPointOfServiceEffect,
      factory: _DefaultPointOfServiceEffect.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultPointOfServiceEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: Store
  }, {
    type: UserProfileFacade
  }, {
    type: WindowRef
  }], null);
})();
var PickupLocationEffect = class _PickupLocationEffect {
  constructor(actions$, pickupLocationConnector) {
    this.actions$ = actions$;
    this.pickupLocationConnector = pickupLocationConnector;
    this.logger = inject(LoggerService);
    this.storeDetails$ = createEffect(() => this.actions$.pipe(ofType(GET_STORE_DETAILS), map((action) => action.payload), mergeMap((storeName) => this.pickupLocationConnector.getStoreDetails(storeName).pipe(map((storeDetails) => SetStoreDetailsSuccess({
      payload: storeDetails
    })), catchError((error) => of(SetStoreDetailsFailure({
      payload: tryNormalizeHttpError(error, this.logger)
    })))))));
  }
  static {
    this.ɵfac = function PickupLocationEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupLocationEffect)(ɵɵinject(Actions), ɵɵinject(PickupLocationConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PickupLocationEffect,
      factory: _PickupLocationEffect.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupLocationEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: PickupLocationConnector
  }], null);
})();
var StockEffect = class _StockEffect {
  constructor(actions$, stockConnector) {
    this.actions$ = actions$;
    this.stockConnector = stockConnector;
    this.logger = inject(LoggerService);
    this.loadStockLevels$ = createEffect(() => this.actions$.pipe(ofType(STOCK_LEVEL), map((action) => action.payload), switchMap((_a) => {
      var _b = _a, {
        productCode
      } = _b, location = __objRest(_b, [
        "productCode"
      ]);
      return this.stockConnector.loadStockLevels(productCode, location).pipe(map((stockLevels) => new StockLevelSuccess({
        productCode,
        stockLevels
      })), catchError((error) => of(new StockLevelFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.loadStockLevelAtStore$ = createEffect(() => this.actions$.pipe(ofType(STOCK_LEVEL_AT_STORE), map(({
      payload
    }) => payload), concatMap(({
      productCode,
      storeName
    }) => this.stockConnector.loadStockLevelAtStore(productCode, storeName).pipe(map((stockLevel) => StockLevelAtStoreSuccess({
      payload: {
        productCode,
        storeName,
        stockLevel
      }
    }))))));
  }
  static {
    this.ɵfac = function StockEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StockEffect)(ɵɵinject(Actions), ɵɵinject(StockConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StockEffect,
      factory: _StockEffect.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: StockConnector
  }], null);
})();
var effects = [DefaultPointOfServiceEffect, StockEffect, PickupLocationEffect];
var PICKUP_LOCATIONS_FEATURE = "pickup-locations";
var PICKUP_OPTION_FEATURE = "pickup-option";
var defaultPointOfServiceInitialState = null;
var defaultPointOfServiceReducer = createReducer(defaultPointOfServiceInitialState, on(LoadDefaultPointOfServiceSuccess, (_state, {
  payload
}) => payload));
var intendedPickupLocationsInitialState = {};
var intendedPickupLocationsReducer = createReducer(intendedPickupLocationsInitialState, on(AddLocation, (state, {
  payload
}) => __spreadProps(__spreadValues({}, state), {
  [payload.productCode]: payload.location
})), on(RemoveLocation, (state, {
  payload
}) => __spreadProps(__spreadValues({}, state), {
  [payload]: {
    pickupOption: "delivery"
  }
})), on(SetPickupOption$1, (state, {
  payload
}) => __spreadProps(__spreadValues({}, state), {
  [payload.productCode]: __spreadProps(__spreadValues({}, state[payload.productCode]), {
    pickupOption: payload.pickupOption
  })
})));
var storeDetailsInitialState = {};
var storeDetailsReducer = createReducer(storeDetailsInitialState, on(SetStoreDetailsSuccess, (state, {
  payload
}) => __spreadValues(__spreadValues({}, state), payload.name ? {
  [payload.name]: payload
} : {})));
function getReducers$1() {
  return {
    intendedPickupLocations: intendedPickupLocationsReducer,
    storeDetails: storeDetailsReducer,
    defaultPointOfService: defaultPointOfServiceReducer
  };
}
var pickupLocationsReducersToken = new InjectionToken("PickupLocationsReducers");
var pickupLocationsReducersProvider = {
  provide: pickupLocationsReducersToken,
  useFactory: getReducers$1
};
var pickupLocationsMetaReducers = [];
var initialState$3 = "";
var pageContextReducer = createReducer(initialState$3, on(SetPageContext, (_state, {
  payload
}) => payload.pageContext));
var initialState$2 = [];
var pickupOptionReducer = createReducer(initialState$2, on(SetPickupOption, (state, {
  payload
}) => {
  const newState = state.filter((entry) => entry.entryNumber !== payload.entryNumber);
  return [...newState, payload];
}), on(RemovePickupOption, (state, {
  payload
}) => {
  return state.filter((entry) => entry.entryNumber !== payload.entryNumber).map((entry) => __spreadProps(__spreadValues({}, entry), {
    entryNumber: entry.entryNumber > payload.entryNumber ? entry.entryNumber - 1 : entry.entryNumber
  }));
}), on(RemoveAllPickupOptions, (_state) => initialState$2));
function getPickupReducers() {
  return {
    pageContext: pageContextReducer,
    pickupOption: pickupOptionReducer
  };
}
var pickupOptionReducersToken = new InjectionToken("PickupOptionReducers");
var pickupOptionReducersProvider = {
  provide: pickupOptionReducersToken,
  useFactory: getPickupReducers
};
var pickupOptionMetaReducers = [];
var initialState$1 = {
  latitude: null,
  longitude: null
};
var browserLocationReducer = createReducer(initialState$1, on(AddBrowserLocation, (state, {
  payload
}) => __spreadProps(__spreadValues({}, state), {
  latitude: payload.latitude,
  longitude: payload.longitude
})));
var initialState = false;
var hideOutOfStockReducer = createReducer(initialState, on(ToggleHideOutOfStockOptionsAction, (state) => !state));
var initialStockLevelState = {};
var _stockReducer = createReducer(initialStockLevelState, on(createAction(STOCK_LEVEL_SUCCESS, props()), (state, {
  payload: {
    productCode,
    stockLevels
  }
}) => __spreadProps(__spreadValues({}, state), {
  [productCode]: stockLevels
})), on(createAction(CLEAR_STOCK_DATA), (_state) => ({})));
function stockReducer(state, action) {
  return _stockReducer(state, action);
}
var initialStockLevelAtStoreState = {};
var stockAtStoreReducer = createReducer(initialStockLevelAtStoreState, on(StockLevelAtStoreSuccess, (state, {
  payload
}) => __spreadProps(__spreadValues({}, state), {
  [payload.productCode]: {
    [payload.storeName]: payload.stockLevel
  }
})));
function getReducers() {
  return {
    browserLocation: browserLocationReducer,
    hideOutOfStock: hideOutOfStockReducer,
    stockLevel: utilsGroup.loaderReducer(STOCK_DATA, stockReducer),
    stockLevelAtStore: stockAtStoreReducer
  };
}
var stockReducersToken = new InjectionToken("StockReducers");
var stockReducersProvider = {
  provide: stockReducersToken,
  useFactory: getReducers
};
function clearStockState(reducer) {
  return function(state, action) {
    const STATE = /* @__PURE__ */ new Map([[CLEAR_STOCK_DATA, void 0]]);
    return reducer(STATE.has(action.type) ? STATE.get(action.type) : state, action);
  };
}
var stockMetaReducers = [clearStockState];
var PickupInStoreStoreModule = class _PickupInStoreStoreModule {
  static {
    this.ɵfac = function PickupInStoreStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupInStoreStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PickupInStoreStoreModule,
      imports: [CommonModule, StoreFeatureModule, StoreFeatureModule, StoreFeatureModule, EffectsFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [pickupLocationsReducersProvider, pickupOptionReducersProvider, stockReducersProvider],
      imports: [CommonModule, StoreModule.forFeature(PICKUP_LOCATIONS_FEATURE, pickupLocationsReducersToken, {
        metaReducers: pickupLocationsMetaReducers
      }), StoreModule.forFeature(PICKUP_OPTION_FEATURE, pickupOptionReducersToken, {
        metaReducers: pickupOptionMetaReducers
      }), StoreModule.forFeature(STOCK_FEATURE, stockReducersToken, {
        metaReducers: stockMetaReducers
      }), EffectsModule.forFeature(effects)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupInStoreStoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, StoreModule.forFeature(PICKUP_LOCATIONS_FEATURE, pickupLocationsReducersToken, {
        metaReducers: pickupLocationsMetaReducers
      }), StoreModule.forFeature(PICKUP_OPTION_FEATURE, pickupOptionReducersToken, {
        metaReducers: pickupOptionMetaReducers
      }), StoreModule.forFeature(STOCK_FEATURE, stockReducersToken, {
        metaReducers: stockMetaReducers
      }), EffectsModule.forFeature(effects)],
      providers: [pickupLocationsReducersProvider, pickupOptionReducersProvider, stockReducersProvider]
    }]
  }], null, null);
})();
var getPickupLocationsState = createFeatureSelector(PICKUP_LOCATIONS_FEATURE);
var getPickupOptionState = createFeatureSelector(PICKUP_OPTION_FEATURE);
var getStockState = createFeatureSelector(STOCK_FEATURE);
var getPreferredStore = createSelector(getPickupLocationsState, (pickupLocationsState) => pickupLocationsState.defaultPointOfService);
var defaultPointOfServiceName_selectors = Object.freeze({
  __proto__: null,
  getPreferredStore
});
var getHideOutOfStockState = createSelector(getStockState, (stockState) => stockState.hideOutOfStock);
var hideOutOfStock_selectors = Object.freeze({
  __proto__: null,
  getHideOutOfStockState
});
var getIntendedPickupLocations = createSelector(getPickupLocationsState, (state) => state.intendedPickupLocations);
var getIntendedPickupLocationByProductCode = (productCode) => createSelector(getIntendedPickupLocations, (state) => state[productCode]);
var getPickupOptionByProductCode = (productCode) => createSelector(getIntendedPickupLocationByProductCode(productCode), (_getIntendedPickupLocationByProductCode) => _getIntendedPickupLocationByProductCode?.pickupOption ?? "delivery");
var getStoreDetailsByName = (storeName) => createSelector(getPickupLocationsState, (state) => state.storeDetails[storeName]);
var pickupLocations_selectors = Object.freeze({
  __proto__: null,
  getIntendedPickupLocationByProductCode,
  getIntendedPickupLocations,
  getPickupOptionByProductCode,
  getStoreDetailsByName
});
var getPageContext = () => createSelector(getPickupOptionState, (state) => state.pageContext);
var getPickupOption = (entryNumber) => createSelector(getPickupOptionState, (state) => {
  return state.pickupOption.find((entry) => entry.entryNumber === entryNumber)?.pickupOption;
});
var pickupOption_selectors = Object.freeze({
  __proto__: null,
  getPageContext,
  getPickupOption
});
function isInStock(stockInfo) {
  return !!stockInfo && stockInfo.stockLevelStatus !== "outOfStock" && stockInfo.stockLevelStatus !== "lowStock";
}
function storeHasStock({
  stockInfo
}) {
  return isInStock(stockInfo);
}
var getStockLevelState = createSelector(getStockState, (stockState) => stockState.stockLevel);
var getStockEntities = createSelector(getStockLevelState, (state) => utilsGroup.loaderValueSelector(state));
var getStockLoading = createSelector(getStockLevelState, (state) => utilsGroup.loaderLoadingSelector(state));
var getStockSuccess = createSelector(getStockLevelState, (state) => utilsGroup.loaderSuccessSelector(state));
var getStockError = createSelector(getStockLevelState, (state) => utilsGroup.loaderErrorSelector(state));
var hasSearchStarted = createSelector(getStockLoading, getStockSuccess, getStockError, (_getStockLoading, _getStockSuccess, _getStockError) => _getStockLoading || _getStockSuccess || _getStockError);
var hasSearchStartedForProductCode = (productCode) => createSelector(hasSearchStarted, getStockEntities, (hasSearchBeenStarted, stockEntities) => {
  return hasSearchBeenStarted && !!stockEntities[productCode];
});
var getStoresWithStockForProductCode = (productCode) => createSelector(getStockEntities, getHideOutOfStockState, (stockEntities, hideOutOfStock) => stockEntities[productCode]?.stores?.filter((store) => !hideOutOfStock || storeHasStock(store)) ?? []);
var getStockAtStore = (productCode, storeName) => createSelector(getStockState, (stockState) => stockState?.stockLevelAtStore?.[productCode]?.[storeName]);
var stock_selectors = Object.freeze({
  __proto__: null,
  getStockAtStore,
  getStockEntities,
  getStockError,
  getStockLevelState,
  getStockLoading,
  getStockSuccess,
  getStoresWithStockForProductCode,
  hasSearchStarted,
  hasSearchStartedForProductCode
});
var PreferredStoreService = class _PreferredStoreService {
  constructor(config, pickupLocationsSearchService, winRef, store) {
    this.config = config;
    this.pickupLocationsSearchService = pickupLocationsSearchService;
    this.winRef = winRef;
    this.store = store;
    this.store.dispatch(LoadDefaultPointOfService());
  }
  /**
   * Gets the user's preferred store for Pickup in Store.
   * @returns the preferred store from the store
   */
  getPreferredStore$() {
    return this.store.pipe(select(getPreferredStore));
  }
  /**
   * Sets the user's preferred store for Pickup in Store.
   * @param preferredStore the preferred store to set
   */
  setPreferredStore(preferredStore) {
    this.store.dispatch(SetDefaultPointOfService({
      payload: preferredStore
    }));
  }
  /**
   * Clears the user's preferred store for Pickup in Store.
   */
  clearPreferredStore() {
    this.winRef.localStorage?.removeItem(PREFERRED_STORE_LOCAL_STORAGE_KEY);
  }
  /**
   * Get the user's preferred store from local storage and only return it if it
   * has stock for the given product.
   * @param productCode The product code to check the stock level of
   */
  getPreferredStoreWithProductInStock(productCode) {
    return this.getPreferredStore$().pipe(filter((store) => !!store), tap((preferredStore) => {
      this.pickupLocationsSearchService.stockLevelAtStore(productCode, preferredStore.name);
    }), switchMap((store) => this.pickupLocationsSearchService.getStockLevelAtStore(productCode, store.name).pipe(filter(isInStock), map((_) => store), tap((preferredStore) => ({
      name: preferredStore.name,
      displayName: preferredStore.name
    })))));
  }
  static {
    this.ɵfac = function PreferredStoreService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PreferredStoreService)(ɵɵinject(PickupInStoreConfig), ɵɵinject(PickupLocationsSearchFacade), ɵɵinject(WindowRef), ɵɵinject(Store));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PreferredStoreService,
      factory: _PreferredStoreService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreferredStoreService, [{
    type: Injectable
  }], () => [{
    type: PickupInStoreConfig
  }, {
    type: PickupLocationsSearchFacade
  }, {
    type: WindowRef
  }, {
    type: Store
  }], null);
})();
var IntendedPickupLocationService = class _IntendedPickupLocationService {
  constructor(store) {
    this.store = store;
  }
  getIntendedLocation(productCode) {
    return this.store.pipe(select(getIntendedPickupLocationByProductCode(productCode)));
  }
  getPickupOption(productCode) {
    return this.store.pipe(select(getPickupOptionByProductCode(productCode)));
  }
  setPickupOption(productCode, pickupOption) {
    this.store.dispatch(SetPickupOption$1({
      payload: {
        productCode,
        pickupOption
      }
    }));
  }
  setIntendedLocation(productCode, location) {
    this.store.dispatch(AddLocation({
      payload: {
        productCode,
        location
      }
    }));
  }
  removeIntendedLocation(productCode) {
    this.store.dispatch(RemoveLocation({
      payload: productCode
    }));
  }
  static {
    this.ɵfac = function IntendedPickupLocationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IntendedPickupLocationService)(ɵɵinject(Store));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _IntendedPickupLocationService,
      factory: _IntendedPickupLocationService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntendedPickupLocationService, [{
    type: Injectable
  }], () => [{
    type: Store
  }], null);
})();
var PickupLocationsSearchService = class _PickupLocationsSearchService {
  constructor(store) {
    this.store = store;
    this.subscription = new Subscription();
  }
  stockLevelAtStore(productCode, storeName) {
    this.store.dispatch(StockLevelAtStore({
      payload: {
        productCode,
        storeName
      }
    }));
  }
  getStockLevelAtStore(productCode, storeName) {
    return this.store.pipe(select(getStockAtStore(productCode, storeName)));
  }
  startSearch(searchParams) {
    this.store.dispatch(new StockLevel(searchParams));
  }
  hasSearchStarted(productCode) {
    return this.store.pipe(select(hasSearchStartedForProductCode(productCode)));
  }
  isSearchRunning() {
    return this.store.pipe(select(getStockLoading));
  }
  getSearchResults(productCode) {
    return this.store.pipe(select(getStoresWithStockForProductCode(productCode)));
  }
  clearSearchResults() {
    this.store.dispatch(new ClearStockData());
  }
  getHideOutOfStock() {
    return this.store.pipe(select(getHideOutOfStockState));
  }
  setBrowserLocation(latitude, longitude) {
    this.store.dispatch(AddBrowserLocation({
      payload: {
        latitude,
        longitude
      }
    }));
  }
  toggleHideOutOfStock() {
    this.store.dispatch(ToggleHideOutOfStockOptionsAction());
  }
  loadStoreDetails(storeName) {
    this.subscription.add(this.getStoreDetails(storeName).pipe(filter((storeDetails) => !storeDetails), tap((_storeDetails) => this.store.dispatch(GetStoreDetailsById({
      payload: storeName
    })))).subscribe());
  }
  getStoreDetails(name) {
    return this.store.pipe(select(getStoreDetailsByName(name)));
  }
  loadAndGetStoreDetails(name) {
    return this.getStoreDetails(name).pipe(tap((details) => {
      if (!details) {
        this.loadStoreDetails(name);
      }
    }), filter(Boolean));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function PickupLocationsSearchService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupLocationsSearchService)(ɵɵinject(Store));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PickupLocationsSearchService,
      factory: _PickupLocationsSearchService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupLocationsSearchService, [{
    type: Injectable
  }], () => [{
    type: Store
  }], null);
})();
var PickupOptionService = class _PickupOptionService {
  constructor(store) {
    this.store = store;
  }
  setPageContext(pageContext) {
    this.store.dispatch(SetPageContext({
      payload: {
        pageContext
      }
    }));
  }
  getPageContext() {
    return this.store.pipe(select(getPageContext()));
  }
  setPickupOption(entryNumber, pickupOption) {
    this.store.dispatch(SetPickupOption({
      payload: {
        entryNumber,
        pickupOption
      }
    }));
  }
  getPickupOption(entryNumber) {
    return this.store.pipe(select(getPickupOption(entryNumber)));
  }
  static {
    this.ɵfac = function PickupOptionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupOptionService)(ɵɵinject(Store));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PickupOptionService,
      factory: _PickupOptionService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupOptionService, [{
    type: Injectable
  }], () => [{
    type: Store
  }], null);
})();
var facadeProviders = [IntendedPickupLocationService, {
  provide: IntendedPickupLocationFacade,
  useExisting: IntendedPickupLocationService
}, PickupLocationsSearchService, {
  provide: PickupLocationsSearchFacade,
  useExisting: PickupLocationsSearchService
}, PickupOptionService, {
  provide: PickupOptionFacade,
  useExisting: PickupOptionService
}, PreferredStoreService, {
  provide: PreferredStoreFacade,
  useExisting: PreferredStoreService
}];
var PickupInStoreCoreModule = class _PickupInStoreCoreModule {
  static {
    this.ɵfac = function PickupInStoreCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupInStoreCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PickupInStoreCoreModule,
      imports: [PickupInStoreStoreModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultPickupInStoreConfig), StockConnector, PickupLocationConnector, ...facadeProviders],
      imports: [PickupInStoreStoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupInStoreCoreModule, [{
    type: NgModule,
    args: [{
      imports: [PickupInStoreStoreModule],
      providers: [provideDefaultConfig(defaultPickupInStoreConfig), StockConnector, PickupLocationConnector, ...facadeProviders]
    }]
  }], null, null);
})();

// node_modules/@spartacus/pickup-in-store/fesm2022/spartacus-pickup-in-store-components.mjs
var _c0 = ["dialogTriggerEl"];
var _c1 = ["deliveryTabPanel"];
var _c2 = ["pickupTabPanel"];
function PickupOptionsComponent_ng_container_0_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, ": ");
    ɵɵelementStart(2, "strong");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵattribute("data-pickup-location", ctx_r1.displayPickupLocation);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.displayPickupLocation);
  }
}
function PickupOptionsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "form", 4)(2, "fieldset")(3, "legend");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 5)(7, "input", 6);
    ɵɵpipe(8, "cxTranslate");
    ɵɵlistener("click", function PickupOptionsComponent_ng_container_0_Template_input_click_7_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPickupOptionChange("delivery"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(9, "label");
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(12, "div", 5)(13, "input", 7);
    ɵɵpipe(14, "cxTranslate");
    ɵɵlistener("click", function PickupOptionsComponent_ng_container_0_Template_input_click_13_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPickupOptionChange("pickup"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(15, "label")(16, "p");
    ɵɵtext(17);
    ɵɵpipe(18, "cxTranslate");
    ɵɵtemplate(19, PickupOptionsComponent_ng_container_0_ng_container_19_Template, 4, 2, "ng-container", 8);
    ɵɵtext(20, " | ");
    ɵɵelementStart(21, "button", 9, 0);
    ɵɵlistener("click", function PickupOptionsComponent_ng_container_0_Template_button_click_21_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPickupLocationChange());
    });
    ɵɵtext(23);
    ɵɵpipe(24, "cxTranslate");
    ɵɵelementEnd()()()()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("formGroup", ctx_r1.pickupOptionsForm);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 15, "pickupOptions.legend"));
    ɵɵadvance(3);
    ɵɵattribute("id", ctx_r1.deliveryId)("aria-label", ɵɵpipeBind1(8, 17, "pickupOptions.delivery"))("aria-checked", ctx_r1.pickupOptionsForm.value.pickupOption === "delivery");
    ɵɵadvance(2);
    ɵɵattribute("for", ctx_r1.deliveryId);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 19, "pickupOptions.delivery"), " ");
    ɵɵadvance(3);
    ɵɵattribute("id", ctx_r1.pickupId)("aria-label", ɵɵpipeBind1(14, 21, "pickupOptions.pickup"))("aria-checked", ctx_r1.pickupOptionsForm.value.pickupOption === "pickup");
    ɵɵadvance(2);
    ɵɵattribute("for", ctx_r1.pickupId);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 23, "pickupOptions.pickup"), "");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.displayPickupLocation);
    ɵɵadvance(2);
    ɵɵattribute("data-store-location-link", ctx_r1.displayPickupLocation ? "change" : "select");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(24, 25, ctx_r1.displayPickupLocation ? "pickupOptions.changeStore" : "pickupOptions.selectStore"), " ");
  }
}
function PickupOptionsComponent_ng_container_1_cx_tab_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-tab", 16);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r1.disableControls)("tabs", ctx_r1.tabs)("config", ctx_r1.tabConfig);
  }
}
function PickupOptionsComponent_ng_container_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 17);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ctx_r1.validationError), " ");
  }
}
function PickupOptionsComponent_ng_container_1_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate(ɵɵpipeBind1(1, 1, "pickupOptions.freeReturn"));
  }
}
function PickupOptionsComponent_ng_container_1_ng_template_11_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "strong", 18);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵattribute("data-pickup-location", ctx_r1.displayPickupLocation);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.displayPickupLocation, " ");
  }
}
function PickupOptionsComponent_ng_container_1_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵtemplate(0, PickupOptionsComponent_ng_container_1_ng_template_11_ng_container_0_Template, 3, 2, "ng-container", 8);
    ɵɵelementStart(1, "button", 9, 0);
    ɵɵlistener("click", function PickupOptionsComponent_ng_container_1_ng_template_11_Template_button_click_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onPickupLocationChange());
    });
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r1.displayPickupLocation);
    ɵɵadvance();
    ɵɵattribute("data-store-location-link", ctx_r1.displayPickupLocation ? "change" : "select");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 3, ctx_r1.displayPickupLocation ? "pickupOptions.changeStore" : "pickupOptions.selectStore"), " ");
  }
}
function PickupOptionsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 10)(2, "div", 11)(3, "div", 12);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(6, PickupOptionsComponent_ng_container_1_cx_tab_6_Template, 1, 3, "cx-tab", 13);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 14);
    ɵɵtemplate(8, PickupOptionsComponent_ng_container_1_span_8_Template, 3, 3, "span", 15);
    ɵɵelementEnd()();
    ɵɵtemplate(9, PickupOptionsComponent_ng_container_1_ng_template_9_Template, 2, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor)(11, PickupOptionsComponent_ng_container_1_ng_template_11_Template, 5, 5, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 3, "pickupOptions.legend"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.tabs);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.validationError);
  }
}
function CartPickupOptionsContainerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "cx-pickup-options", 1);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "async");
    ɵɵpipe(4, "async");
    ɵɵlistener("pickupOptionChange", function CartPickupOptionsContainerComponent_ng_container_0_Template_cx_pickup_options_pickupOptionChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPickupOptionChange($event));
    })("pickupLocationChange", function CartPickupOptionsContainerComponent_ng_container_0_Template_cx_pickup_options_pickupLocationChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.openDialog($event));
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("disableControls", ɵɵpipeBind1(2, 3, ctx_r1.disableControls$))("displayPickupLocation", (tmp_2_0 = ɵɵpipeBind1(3, 5, ctx_r1.storeDetails$)) == null ? null : tmp_2_0.displayName)("selectedOption", ɵɵpipeBind1(4, 7, ctx_r1.pickupOption$));
  }
}
function StoreScheduleComponent_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const openingTime_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", openingTime_r1.openingHours, " ");
  }
}
function StoreScheduleComponent_div_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate(ɵɵpipeBind1(1, 1, "storeSchedule.closed"));
  }
}
function StoreScheduleComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4)(1, "div", 5);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, StoreScheduleComponent_div_4_div_3_Template, 2, 1, "div", 6)(4, StoreScheduleComponent_div_4_ng_template_4_Template, 2, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const openingTime_r1 = ctx.$implicit;
    const closed_r2 = ɵɵreference(5);
    ɵɵadvance(2);
    ɵɵtextInterpolate(openingTime_r1.weekDay);
    ɵɵadvance();
    ɵɵproperty("ngIf", !openingTime_r1.closed)("ngIfElse", closed_r2);
  }
}
function StoreAddressComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.storeDetails == null ? null : ctx_r0.storeDetails.displayName, " ");
  }
}
function StoreAddressComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.storeDetails.address == null ? null : ctx_r0.storeDetails.address.line1, " ");
  }
}
function StoreAddressComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.storeDetails.address == null ? null : ctx_r0.storeDetails.address.line2, " ");
  }
}
function StoreAddressComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.storeDetails.address == null ? null : ctx_r0.storeDetails.address.town, " ");
  }
}
function StoreAddressComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.storeDetails.address == null ? null : ctx_r0.storeDetails.address.region, " ");
  }
}
function StoreAddressComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.storeDetails.address == null ? null : ctx_r0.storeDetails.address.district, " ");
  }
}
function StoreAddressComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.storeDetails.address == null ? null : ctx_r0.storeDetails.address.phone, " ");
  }
}
var _c3 = (a0) => ({
  storeSelected: a0
});
var _c4 = (a0, a1) => ({
  "icon-selected": a0,
  "icon-not-selected": a1
});
function SetPreferredStoreComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵlistener("click", function SetPreferredStoreComponent_ng_container_0_ng_container_1_Template_div_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.setAsPreferred());
    });
    ɵɵelementStart(2, "div", 3);
    ɵɵelement(3, "cx-icon", 4);
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 5);
    ɵɵpipe(5, "cxTranslate");
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵattribute("data-preferred-store", ctx_r1.pointOfServiceName.name)("data-store-is-selected", ctx_r1.pointOfServiceName.name === (data_r3.storeSelected == null ? null : data_r3.storeSelected.name));
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r1.pointOfServiceName.name === (data_r3.storeSelected == null ? null : data_r3.storeSelected.name) ? "icon-selected" : "icon-not-selected");
    ɵɵadvance();
    ɵɵproperty("type", ctx_r1.ICON_TYPE.HEART);
    ɵɵadvance();
    ɵɵattribute("data-preferred-store", ctx_r1.pointOfServiceName.name)("aria-label", ɵɵpipeBind1(5, 7, ctx_r1.getSetStoreButtonLabel((data_r3.storeSelected == null ? null : data_r3.storeSelected.name) || "")) + ", " + ctx_r1.pointOfServiceName.displayName);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 9, ctx_r1.getSetStoreButtonLabel((data_r3.storeSelected == null ? null : data_r3.storeSelected.name) || "")), " ");
  }
}
function SetPreferredStoreComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SetPreferredStoreComponent_ng_container_0_ng_container_1_Template, 8, 11, "ng-container", 1);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpureFunction1(3, _c3, ɵɵpipeBind1(2, 1, ctx_r1.storeSelected$)));
  }
}
function SetPreferredStoreComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵpipe(2, "async");
    ɵɵlistener("click", function SetPreferredStoreComponent_ng_container_1_Template_div_click_1_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setAsPreferred());
    });
    ɵɵelementStart(3, "div", 3);
    ɵɵpipe(4, "async");
    ɵɵpipe(5, "async");
    ɵɵelement(6, "cx-icon", 4);
    ɵɵelementEnd();
    ɵɵelementStart(7, "button", 5);
    ɵɵtext(8);
    ɵɵpipe(9, "async");
    ɵɵpipe(10, "cxTranslate");
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_6_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵattribute("data-preferred-store", ctx_r1.pointOfServiceName.name)("data-store-is-selected", ctx_r1.pointOfServiceName.name === ((tmp_2_0 = ɵɵpipeBind1(2, 6, ctx_r1.storeSelected$)) == null ? null : tmp_2_0.name));
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ɵɵpureFunction2(18, _c4, ctx_r1.pointOfServiceName.name === ((tmp_3_0 = ɵɵpipeBind1(4, 8, ctx_r1.storeSelected$)) == null ? null : tmp_3_0.name), ctx_r1.pointOfServiceName.name !== ((tmp_3_0 = ɵɵpipeBind1(5, 10, ctx_r1.storeSelected$)) == null ? null : tmp_3_0.name)));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r1.ICON_TYPE.HEART);
    ɵɵadvance();
    ɵɵattribute("data-preferred-store", ctx_r1.pointOfServiceName.name);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.pointOfServiceName.name === ((tmp_6_0 = ɵɵpipeBind1(9, 12, ctx_r1.storeSelected$)) == null ? null : tmp_6_0.name) ? ɵɵpipeBind1(10, 14, "setPreferredStore.myStore") : ɵɵpipeBind1(11, 16, "setPreferredStore.makeThisMyStore"), " ");
  }
}
var _c5 = (a0, a1) => ({
  name: a0,
  displayName: a1
});
var _c6 = (a0, a1) => ({
  "cx-store-in-stock": a0,
  "cx-store-out-of-stock": a1
});
var _c7 = (a0, a1) => ({
  context: a0,
  count: a1
});
function StoreComponent_cx_store_schedule_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-store-schedule", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("storeDetails", ctx_r0.storeDetails);
  }
}
function StoreComponent_cx_icon_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-icon", 14);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("type", ctx_r0.ICON_TYPE.CHECK);
  }
}
var _c8 = (a0, a1) => ({
  "col-md-6": a0,
  "col-md-4": a1,
  "cx-address-card": true
});
function MyPreferredStoreComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "button", 11);
    ɵɵlistener("click", function MyPreferredStoreComponent_div_14_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleOpenHours());
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementStart(4, "span", 12);
    ɵɵelement(5, "cx-icon", 13);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵattribute("aria-expanded", ctx_r1.openHoursOpen);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "store.viewHours"), " ");
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r1.openHoursOpen ? ctx_r1.ICON_TYPE.CARET_UP : ctx_r1.ICON_TYPE.CARET_DOWN);
  }
}
function MyPreferredStoreComponent_div_15_cx_store_schedule_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-store-schedule", 8);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("storeDetails", ɵɵpipeBind1(1, 1, ctx_r1.preferredStore$));
  }
}
function MyPreferredStoreComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵtemplate(1, MyPreferredStoreComponent_div_15_cx_store_schedule_1_Template, 2, 3, "cx-store-schedule", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.openHoursOpen);
  }
}
function PdpPickupOptionsContainerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "cx-pickup-options", 1);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "async");
    ɵɵlistener("pickupOptionChange", function PdpPickupOptionsContainerComponent_ng_container_0_Template_cx_pickup_options_pickupOptionChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPickupOptionChange($event));
    })("pickupLocationChange", function PdpPickupOptionsContainerComponent_ng_container_0_Template_cx_pickup_options_pickupLocationChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.openDialog($event));
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("selectedOption", ɵɵpipeBind1(2, 2, ctx_r1.pickupOption$))("displayPickupLocation", ɵɵpipeBind1(3, 4, ctx_r1.displayPickupLocation$));
  }
}
function PickupInStoreOrderConsignmentContainerComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const pointOfService_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", pointOfService_r1 == null ? null : pointOfService_r1.address == null ? null : pointOfService_r1.address.line1, " ");
  }
}
function PickupInStoreOrderConsignmentContainerComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const pointOfService_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", pointOfService_r1 == null ? null : pointOfService_r1.address == null ? null : pointOfService_r1.address.line2, " ");
  }
}
function PickupInStoreOrderConsignmentContainerComponent_div_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const pointOfService_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", pointOfService_r1 == null ? null : pointOfService_r1.address == null ? null : pointOfService_r1.address.town, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", pointOfService_r1 == null ? null : pointOfService_r1.address == null ? null : pointOfService_r1.address.postalCode, "");
  }
}
function PickupInStoreOrderConsignmentContainerComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const pointOfService_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", pointOfService_r1 == null ? null : pointOfService_r1.address == null ? null : pointOfService_r1.address.phone, " ");
  }
}
function PickupInStoreOrderConsignmentContainerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 5);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵtemplate(8, PickupInStoreOrderConsignmentContainerComponent_div_0_div_8_Template, 2, 1, "div", 6)(9, PickupInStoreOrderConsignmentContainerComponent_div_0_div_9_Template, 2, 1, "div", 6)(10, PickupInStoreOrderConsignmentContainerComponent_div_0_div_10_Template, 5, 2, "div", 6)(11, PickupInStoreOrderConsignmentContainerComponent_div_0_div_11_Template, 2, 1, "div", 6);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const pointOfService_r1 = ctx.ngIf;
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 6, "deliveryPointOfServiceDetails.pickUpInStoreAddress"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", pointOfService_r1 == null ? null : pointOfService_r1.displayName, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", pointOfService_r1 == null ? null : pointOfService_r1.address == null ? null : pointOfService_r1.address.line1);
    ɵɵadvance();
    ɵɵproperty("ngIf", pointOfService_r1 == null ? null : pointOfService_r1.address == null ? null : pointOfService_r1.address.line2);
    ɵɵadvance();
    ɵɵproperty("ngIf", pointOfService_r1 == null ? null : pointOfService_r1.address == null ? null : pointOfService_r1.address.town);
    ɵɵadvance();
    ɵɵproperty("ngIf", pointOfService_r1 == null ? null : pointOfService_r1.address == null ? null : pointOfService_r1.address.phone);
  }
}
function PickupInfoContainerComponent_cx_pickup_info_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-pickup-info", 1);
  }
  if (rf & 2) {
    const storeDetailsData_r1 = ctx.$implicit;
    ɵɵproperty("storeDetails", storeDetailsData_r1);
  }
}
var _c9 = (a0) => ({
  container: a0
});
var _c10 = () => ({
  cxRoute: "cart"
});
function PickUpItemsDetailsComponent_ng_container_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p", 4);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "checkoutPickupInStore.heading"), " ");
  }
}
function PickUpItemsDetailsComponent_ng_container_1_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17)(1, "a", 18);
    ɵɵpipe(2, "cxUrl");
    ɵɵpipe(3, "cxTranslate");
    ɵɵelement(4, "cx-icon", 19);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpipeBind1(2, 3, ɵɵpureFunction0(7, _c10)));
    ɵɵattribute("title", ɵɵpipeBind1(3, 5, "common.edit"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r0.ICON_TYPE.PENCIL);
  }
}
function PickUpItemsDetailsComponent_ng_container_1_div_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "cartItems.quantityFull"), " ");
  }
}
function PickUpItemsDetailsComponent_ng_container_1_div_2_div_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "cartItems.quantity"), " ");
  }
}
function PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 34)(1, "p", 35);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(item_r2.product == null ? null : item_r2.product.name);
  }
}
function PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 36);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", "ID", " ", item_r2.product == null ? null : item_r2.product.code, " ");
  }
}
function PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_ng_container_10_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 40);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const variant_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", variant_r3.name, ": ", variant_r3.value, " ");
  }
}
function PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_ng_container_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 38);
    ɵɵtemplate(1, PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_ng_container_10_div_1_div_1_Template, 2, 2, "div", 39);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const variant_r3 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", variant_r3.name && variant_r3.value);
  }
}
function PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_ng_container_10_div_1_Template, 2, 1, "div", 37);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("ngForOf", item_r2.product == null ? null : item_r2.product.baseOptions[0] == null ? null : item_r2.product.baseOptions[0].selected == null ? null : item_r2.product.baseOptions[0].selected.variantOptionQualifiers);
  }
}
function PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 31)(1, "span", 43);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngClass", "d-md-none d-lg-none d-xl-none");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "cartItems.itemPrice"), " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", item_r2.basePrice == null ? null : item_r2.basePrice.formattedValue, " ");
  }
}
function PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_div_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 41);
    ɵɵtemplate(1, PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_div_11_div_1_Template, 5, 5, "div", 42);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngClass", "col-lg-2 col-md-2 col-sm-12 col-xs-12");
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r2.basePrice);
  }
}
function PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_span_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 44);
    ɵɵpipe(1, "cxTranslate");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(1, 3, "cartItems.quantityTitle"));
    ɵɵproperty("ngClass", "d-md-none d-lg-none d-xl-none");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, "cartItems.quantityFull"), " ");
  }
}
function PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_span_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 44);
    ɵɵpipe(1, "cxTranslate");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(1, 3, "cartItems.quantityTitle"));
    ɵɵproperty("ngClass", "d-md-none d-lg-none d-xl-none");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, "cartItems.quantity"), " ");
  }
}
function PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_div_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 45)(1, "div", 31)(2, "span", 43);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngClass", " col-md-1 col-xl-1 col-sm-12 col-xs-12");
    ɵɵadvance(2);
    ɵɵproperty("ngClass", " d-md-none d-lg-none d-xl-none");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 4, "cartItems.total"), " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", item_r2.totalPrice.formattedValue, " ");
  }
}
function PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 21)(1, "div", 0)(2, "div", 22)(3, "a", 23);
    ɵɵelement(4, "cx-media", 24);
    ɵɵelementEnd()();
    ɵɵelementStart(5, "div", 25)(6, "div", 26)(7, "div", 0);
    ɵɵtemplate(8, PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_div_8_Template, 3, 1, "div", 27)(9, PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_div_9_Template, 2, 2, "div", 28)(10, PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_ng_container_10_Template, 2, 1, "ng-container", 1);
    ɵɵelementEnd();
    ɵɵtemplate(11, PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_div_11_Template, 2, 2, "div", 29);
    ɵɵelementStart(12, "div", 30)(13, "div", 31);
    ɵɵtemplate(14, PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_span_14_Template, 4, 7, "span", 32)(15, PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_span_15_Template, 4, 7, "span", 32);
    ɵɵtext(16);
    ɵɵelementEnd()();
    ɵɵtemplate(17, PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_div_17_Template, 6, 6, "div", 33);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngClass", "row");
    ɵɵadvance(3);
    ɵɵproperty("container", item_r2.product == null ? null : item_r2.product.images == null ? null : item_r2.product.images.PRIMARY);
    ɵɵadvance(3);
    ɵɵproperty("ngClass", "col-md-7 col-lg-7 col-xl-7");
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r2.product == null ? null : item_r2.product.name);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r2.product == null ? null : item_r2.product.code);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r2.product == null ? null : item_r2.product.baseOptions == null ? null : item_r2.product.baseOptions.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r2.basePrice);
    ɵɵadvance();
    ɵɵproperty("ngClass", "col-lg-2 col-md-2 col-sm-12 col-xs-12");
    ɵɵadvance(2);
    ɵɵproperty("cxFeature", "a11yQTY2Quantity");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yQTY2Quantity");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r2.quantity, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r2.totalPrice);
  }
}
function PickUpItemsDetailsComponent_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 5)(2, "div")(3, "div", 6)(4, "p", 7);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(7, "cx-store-address", 8);
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 9);
    ɵɵelement(9, "cx-store-schedule", 8);
    ɵɵelementEnd();
    ɵɵtemplate(10, PickUpItemsDetailsComponent_ng_container_1_div_2_div_10_Template, 5, 8, "div", 10);
    ɵɵelementEnd()();
    ɵɵelementStart(11, "div", 11)(12, "div", 12);
    ɵɵtext(13);
    ɵɵpipe(14, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(15, "div", 13);
    ɵɵtext(16);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(18, PickUpItemsDetailsComponent_ng_container_1_div_2_div_18_Template, 3, 3, "div", 14)(19, PickUpItemsDetailsComponent_ng_container_1_div_2_div_19_Template, 3, 3, "div", 14);
    ɵɵelementStart(20, "div", 15);
    ɵɵtext(21);
    ɵɵpipe(22, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵtemplate(23, PickUpItemsDetailsComponent_ng_container_1_div_2_div_23_Template, 18, 12, "div", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const deliveryPointOfService_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(5);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(6, 12, "checkoutPickupInStore.storeItemHeading"), " ", index_r5 + 1, " ");
    ɵɵadvance(2);
    ɵɵproperty("storeDetails", deliveryPointOfService_r4 == null ? null : deliveryPointOfService_r4.storeDetails);
    ɵɵadvance(2);
    ɵɵproperty("storeDetails", deliveryPointOfService_r4 == null ? null : deliveryPointOfService_r4.storeDetails);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.showEdit);
    ɵɵadvance();
    ɵɵproperty("ngClass", "d-none d-md-flex");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(14, 14, "cartItems.item"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(17, 16, "cartItems.itemPrice"), " ");
    ɵɵadvance(2);
    ɵɵproperty("cxFeature", "a11yQTY2Quantity");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yQTY2Quantity");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(22, 18, "cartItems.total"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", deliveryPointOfService_r4.value);
  }
}
function PickUpItemsDetailsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PickUpItemsDetailsComponent_ng_container_1_p_1_Template, 3, 3, "p", 2)(2, PickUpItemsDetailsComponent_ng_container_1_div_2_Template, 24, 20, "div", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const deliveryPointsOfService_r6 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", deliveryPointsOfService_r6.length);
    ɵɵadvance();
    ɵɵproperty("ngForOf", deliveryPointsOfService_r6);
  }
}
function StoreListComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "span", 6);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 1, "storeList.noStoresMessage"), " ");
  }
}
function StoreListComponent_div_0_div_3_cx_store_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-store", 8);
    ɵɵlistener("storeSelected", function StoreListComponent_div_0_div_3_cx_store_1_Template_cx_store_storeSelected_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onSelectStore($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const store_r3 = ctx.$implicit;
    ɵɵproperty("storeDetails", store_r3);
  }
}
function StoreListComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, StoreListComponent_div_0_div_3_cx_store_1_Template, 1, 1, "cx-store", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const stores_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵproperty("ngForOf", stores_r4);
  }
}
function StoreListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, StoreListComponent_div_0_div_1_Template, 5, 3, "div", 2);
    ɵɵpipe(2, "async");
    ɵɵtemplate(3, StoreListComponent_div_0_div_3_Template, 2, 1, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const stores_r4 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx_r1.hasSearchStarted$) && stores_r4.length === 0);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", stores_r4.length);
  }
}
function StoreListComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
function PickupOptionDialogComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 11);
    ɵɵelement(2, "cx-spinner");
    ɵɵelementEnd()();
  }
}
var PickupOptionsTabs;
(function(PickupOptionsTabs2) {
  PickupOptionsTabs2[PickupOptionsTabs2["DELIVERY"] = 0] = "DELIVERY";
  PickupOptionsTabs2[PickupOptionsTabs2["PICKUP"] = 1] = "PICKUP";
})(PickupOptionsTabs || (PickupOptionsTabs = {}));
var PickupOptionsComponent = class _PickupOptionsComponent {
  get validationError() {
    if (this.selectedOption === "pickup" && !this.displayPickupLocation) {
      return "pickupOptions.storeIsNotSelected";
    }
    return null;
  }
  constructor() {
    this.subscription = new Subscription();
    this.disableControls = false;
    this.pickupOptionChange = new EventEmitter();
    this.pickupLocationChange = new EventEmitter();
    this.pickupId = `pickup-id:${Math.random().toString(16)}`;
    this.deliveryId = `delivery-id:${Math.random().toString(16)}`;
    this.pickupOptionsForm = new FormGroup({
      pickupOption: new FormControl(null)
    });
    this.cdr = inject(ChangeDetectorRef, {
      optional: true
    });
    this.featureConfigService = inject(FeatureConfigService);
    useFeatureStyles("a11yPickupOptionsTabs");
  }
  ngOnChanges() {
    if (this.featureConfigService.isEnabled("a11yPickupOptionsTabs")) {
      this.onSelectedOptionChange();
    } else {
      if (this.disableControls) {
        this.pickupOptionsForm.get("pickupOption")?.disable();
      }
      this.pickupOptionsForm.markAllAsTouched();
      this.pickupOptionsForm.get("pickupOption")?.setValue(this.selectedOption);
    }
  }
  ngAfterViewInit() {
    if (this.featureConfigService.isEnabled("a11yPickupOptionsTabs")) {
      this.initializeTabs();
      this.subscription.add(this.tabComponent?.openTabs$.subscribe((openTabs) => {
        const openedTab = openTabs[0];
        const selectedOption = openedTab === PickupOptionsTabs.DELIVERY ? "delivery" : "pickup";
        if (this.selectedOption !== selectedOption) {
          this.onPickupOptionChange(selectedOption);
        }
      }));
    }
  }
  /** Emit a new selected option. */
  onPickupOptionChange(option) {
    this.pickupOptionChange.emit({
      option,
      triggerElement: this.triggerElement
    });
  }
  /** Emit to indicate a new store should be selected. */
  onPickupLocationChange() {
    this.pickupLocationChange.emit(this.triggerElement);
    return false;
  }
  initializeTabs() {
    this.tabs = [{
      headerKey: "pickupOptions.shipIt",
      content: this.deliveryTabPanel,
      id: PickupOptionsTabs.DELIVERY
    }, {
      headerKey: "pickupOptions.pickup",
      content: this.pickupTabPanel,
      id: PickupOptionsTabs.PICKUP,
      disableBorderFocus: true
    }];
    this.tabConfig = {
      label: "pickupOptions.legend",
      openTabs: [this.selectedOption === "delivery" ? PickupOptionsTabs.DELIVERY : PickupOptionsTabs.PICKUP]
    };
    this.cdr?.detectChanges();
  }
  onSelectedOptionChange() {
    if (!this.tabComponent) {
      return;
    }
    this.tabComponent.openTabs$.pipe(take(1)).subscribe((openTabs) => {
      const openedTab = openTabs[0];
      const shouldBeOpened = this.selectedOption === "delivery" ? PickupOptionsTabs.DELIVERY : PickupOptionsTabs.PICKUP;
      if (openedTab !== shouldBeOpened) {
        this.tabComponent?.select(shouldBeOpened, TAB_MODE.TAB);
      }
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function PickupOptionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupOptionsComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PickupOptionsComponent,
      selectors: [["cx-pickup-options"]],
      viewQuery: function PickupOptionsComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
          ɵɵviewQuery(_c1, 5);
          ɵɵviewQuery(_c2, 5);
          ɵɵviewQuery(TabComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.triggerElement = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.deliveryTabPanel = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pickupTabPanel = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabComponent = _t.first);
        }
      },
      inputs: {
        selectedOption: "selectedOption",
        displayPickupLocation: "displayPickupLocation",
        disableControls: "disableControls"
      },
      outputs: {
        pickupOptionChange: "pickupOptionChange",
        pickupLocationChange: "pickupLocationChange"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature],
      decls: 2,
      vars: 2,
      consts: [["dialogTriggerEl", ""], ["deliveryTabPanel", ""], ["pickupTabPanel", ""], [4, "cxFeature"], [3, "formGroup"], [1, "form-check"], ["type", "radio", "role", "radio", "data-pickup", "delivery", "value", "delivery", "formControlName", "pickupOption", 3, "click"], ["type", "radio", "role", "radio", "data-pickup", "pickup", "value", "pickup", "formControlName", "pickupOption", 3, "click"], [4, "ngIf"], [1, "link", "cx-action-link", 3, "click"], [1, "cx-pickup-options"], [1, "cx-pickup-options-container"], [1, "cx-pickup-options-legend"], [3, "disabled", "tabs", "config", 4, "ngIf"], ["aria-live", "assertive", "aria-atomic", "true"], ["role", "alert", "tabindex", "0", "class", "cx-invalid-message", 4, "ngIf"], [3, "disabled", "tabs", "config"], ["role", "alert", "tabindex", "0", 1, "cx-invalid-message"], [1, "cx-pickup-store"]],
      template: function PickupOptionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, PickupOptionsComponent_ng_container_0_Template, 25, 27, "ng-container", 3)(1, PickupOptionsComponent_ng_container_1_Template, 13, 5, "ng-container", 3);
        }
        if (rf & 2) {
          ɵɵproperty("cxFeature", "!a11yPickupOptionsTabs");
          ɵɵadvance();
          ɵɵproperty("cxFeature", "a11yPickupOptionsTabs");
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FeatureDirective, TabComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupOptionsComponent, [{
    type: Component,
    args: [{
      selector: "cx-pickup-options",
      standalone: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *cxFeature="'!a11yPickupOptionsTabs'">
  <form [formGroup]="pickupOptionsForm">
    <fieldset>
      <legend>{{ 'pickupOptions.legend' | cxTranslate }}</legend>
      <div class="form-check">
        <input
          type="radio"
          role="radio"
          [attr.id]="deliveryId"
          data-pickup="delivery"
          value="delivery"
          (click)="onPickupOptionChange('delivery')"
          formControlName="pickupOption"
          [attr.aria-label]="'pickupOptions.delivery' | cxTranslate"
          [attr.aria-checked]="
            pickupOptionsForm.value.pickupOption === 'delivery'
          "
        />
        <label [attr.for]="deliveryId">
          {{ 'pickupOptions.delivery' | cxTranslate }}
        </label>
      </div>
      <div class="form-check">
        <input
          type="radio"
          role="radio"
          [attr.id]="pickupId"
          data-pickup="pickup"
          value="pickup"
          (click)="onPickupOptionChange('pickup')"
          formControlName="pickupOption"
          [attr.aria-label]="'pickupOptions.pickup' | cxTranslate"
          [attr.aria-checked]="
            pickupOptionsForm.value.pickupOption === 'pickup'
          "
        />
        <label [attr.for]="pickupId">
          <p>
            {{ 'pickupOptions.pickup' | cxTranslate
            }}<ng-container *ngIf="displayPickupLocation"
              >:
              <strong [attr.data-pickup-location]="displayPickupLocation">{{
                displayPickupLocation
              }}</strong>
            </ng-container>
            |
            <button
              #dialogTriggerEl
              [attr.data-store-location-link]="
                displayPickupLocation ? 'change' : 'select'
              "
              class="link cx-action-link"
              (click)="onPickupLocationChange()"
            >
              {{
                (displayPickupLocation
                  ? 'pickupOptions.changeStore'
                  : 'pickupOptions.selectStore'
                ) | cxTranslate
              }}
            </button>
          </p>
        </label>
      </div>
    </fieldset>
  </form>
</ng-container>
<ng-container *cxFeature="'a11yPickupOptionsTabs'">
  <div class="cx-pickup-options">
    <div class="cx-pickup-options-container">
      <div class="cx-pickup-options-legend">
        {{ 'pickupOptions.legend' | cxTranslate }}
      </div>

      <cx-tab
        *ngIf="tabs"
        [disabled]="disableControls"
        [tabs]="tabs"
        [config]="tabConfig"
      ></cx-tab>
    </div>
    <div aria-live="assertive" aria-atomic="true">
      <span
        *ngIf="validationError"
        role="alert"
        tabindex="0"
        class="cx-invalid-message"
      >
        {{ validationError | cxTranslate }}
      </span>
    </div>
  </div>

  <ng-template #deliveryTabPanel>{{
    'pickupOptions.freeReturn' | cxTranslate
  }}</ng-template>
  <ng-template #pickupTabPanel>
    <ng-container *ngIf="displayPickupLocation">
      <strong
        class="cx-pickup-store"
        [attr.data-pickup-location]="displayPickupLocation"
      >
        {{ displayPickupLocation }}
      </strong>
    </ng-container>

    <button
      #dialogTriggerEl
      [attr.data-store-location-link]="
        displayPickupLocation ? 'change' : 'select'
      "
      class="link cx-action-link"
      (click)="onPickupLocationChange()"
    >
      {{
        (displayPickupLocation
          ? 'pickupOptions.changeStore'
          : 'pickupOptions.selectStore'
        ) | cxTranslate
      }}
    </button>
  </ng-template>
</ng-container>
`
    }]
  }], () => [], {
    selectedOption: [{
      type: Input
    }],
    displayPickupLocation: [{
      type: Input
    }],
    disableControls: [{
      type: Input
    }],
    pickupOptionChange: [{
      type: Output
    }],
    pickupLocationChange: [{
      type: Output
    }],
    triggerElement: [{
      type: ViewChild,
      args: ["dialogTriggerEl"]
    }],
    cdr: [{
      type: Optional
    }],
    deliveryTabPanel: [{
      type: ViewChild,
      args: ["deliveryTabPanel"]
    }],
    pickupTabPanel: [{
      type: ViewChild,
      args: ["pickupTabPanel"]
    }],
    tabComponent: [{
      type: ViewChild,
      args: [TabComponent]
    }]
  });
})();
function orderEntryWithRequiredFields(orderEntry) {
  return !!orderEntry && orderEntry.entryNumber !== void 0 && orderEntry.quantity !== void 0 && orderEntry.product !== void 0 && orderEntry.product.code !== void 0 && orderEntry.product.availableForPickup !== void 0;
}
var CartPickupOptionsContainerComponent = class _CartPickupOptionsContainerComponent {
  constructor(activeCartFacade, launchDialogService, pickupLocationsSearchService, pickupOptionFacade, preferredStoreFacade, vcr, cmsService, intendedPickupLocationService, outlet) {
    this.activeCartFacade = activeCartFacade;
    this.launchDialogService = launchDialogService;
    this.pickupLocationsSearchService = pickupLocationsSearchService;
    this.pickupOptionFacade = pickupOptionFacade;
    this.preferredStoreFacade = preferredStoreFacade;
    this.vcr = vcr;
    this.cmsService = cmsService;
    this.intendedPickupLocationService = intendedPickupLocationService;
    this.outlet = outlet;
    this.subscription = new Subscription();
    this.displayNameIsSet = false;
    this.CartType = CartType;
    this.featureConfigService = inject(FeatureConfigService);
  }
  ngOnInit() {
    const outletContext = this.outlet?.context$?.pipe(map((context) => {
      this.cartType = context.cartType;
      return context.item;
    }), filter(orderEntryWithRequiredFields)) ?? EMPTY;
    this.cmsService.getCurrentPage().pipe(filter(Boolean), take(1), tap((cmsPage) => {
      this.page = cmsPage.pageId;
      this.pickupOptionFacade.setPageContext(cmsPage.pageId ?? "");
    })).subscribe();
    this.availableForPickup$ = outletContext.pipe(map((orderEntry) => !!orderEntry.product.availableForPickup), startWith(false));
    this.pickupOption$ = outletContext.pipe(withLatestFrom(this.activeCartFacade.getActive().pipe(filter(cartWithIdAndUserId))), tap(([orderEntry, cart]) => {
      this.entryNumber = orderEntry.entryNumber;
      this.quantity = orderEntry.quantity;
      this.productCode = orderEntry.product.code;
      this.cartId = cart.user.uid === "anonymous" ? cart.guid : cart.code;
      this.userId = cart.user.uid;
    }), switchMap(([orderEntry]) => {
      const pickupOption = orderEntry.deliveryPointOfService ? "pickup" : "delivery";
      this.pickupOptionFacade.setPickupOption(this.entryNumber, pickupOption);
      return this.pickupOptionFacade.getPickupOption(this.entryNumber);
    }));
    this.disableControls$ = this.activeCartFacade.getEntries().pipe(map((entries) => entries.map((entry) => entry.product?.code)), switchMap((productCodes) => outletContext.pipe(map((orderEntry) => orderEntry?.product.code), map((orderEntry) => productCodes.filter((productCode) => productCode === orderEntry).length > 1))));
    this.storeDetails$ = outletContext.pipe(map((orderEntry) => ({
      storeName: orderEntry.deliveryPointOfService?.name,
      productCode: orderEntry.product.code
    })), switchMap(({
      storeName,
      productCode
    }) => iif(() => !!storeName, of(storeName).pipe(tap((_storeName) => {
      return this.pickupLocationsSearchService.loadStoreDetails(_storeName);
    }), concatMap((_storeName) => this.pickupLocationsSearchService.getStoreDetails(_storeName)), filter((storeDetails) => !!storeDetails), tap((storeDetails) => {
      this.intendedPickupLocationService.setIntendedLocation(productCode, __spreadProps(__spreadValues({}, storeDetails), {
        pickupOption: "pickup"
      }));
    })), this.intendedPickupLocationService.getIntendedLocation(productCode).pipe(map((intendedLocation) => ({
      intendedLocation,
      givenProductCode: productCode
    })), switchMap(({
      intendedLocation,
      givenProductCode
    }) => iif(() => !!intendedLocation && !!intendedLocation.displayName, of({
      displayName: getProperty(intendedLocation, "displayName"),
      name: getProperty(intendedLocation, "name")
    }), this.preferredStoreFacade.getPreferredStoreWithProductInStock(productCode).pipe(map(({
      name
    }) => name), tap((_storeName) => this.pickupLocationsSearchService.loadStoreDetails(_storeName)), concatMap((_storeName) => this.pickupLocationsSearchService.getStoreDetails(_storeName)), filter((storeDetails) => !!storeDetails), tap((storeDetails) => {
      this.intendedPickupLocationService.setIntendedLocation(givenProductCode, __spreadProps(__spreadValues({}, storeDetails), {
        pickupOption: "delivery"
      }));
    }))))))), map(({
      displayName,
      name
    }) => ({
      displayName,
      name
    })), tap((_) => this.displayNameIsSet = true));
  }
  onPickupOptionChange(event) {
    this.pickupOptionFacade.setPickupOption(this.entryNumber, event.option);
    if (event.option === "delivery") {
      this.activeCartFacade.updateEntry(this.entryNumber, this.quantity, void 0, true);
      return;
    }
    [event.option].filter((option) => option === "pickup").forEach(() => {
      this.subscription.add(this.storeDetails$.pipe(filter(({
        name
      }) => !!name), tap(({
        name
      }) => this.activeCartFacade.updateEntry(this.entryNumber, this.quantity, name, true))).subscribe());
    });
    if (!this.featureConfigService.isEnabled("a11yPickupOptionsTabs") && !this.displayNameIsSet) {
      this.openDialog(event.triggerElement);
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  openDialog(triggerElement) {
    const dialog = this.launchDialogService.openDialog(LAUNCH_CALLER.PICKUP_IN_STORE, triggerElement, this.vcr, {
      productCode: this.productCode,
      entryNumber: this.entryNumber,
      quantity: this.quantity
    });
    if (dialog) {
      dialog.pipe(take(1)).subscribe();
    }
  }
  static {
    this.ɵfac = function CartPickupOptionsContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartPickupOptionsContainerComponent)(ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(PickupLocationsSearchFacade), ɵɵdirectiveInject(PickupOptionFacade), ɵɵdirectiveInject(PreferredStoreFacade), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(CmsService), ɵɵdirectiveInject(IntendedPickupLocationFacade), ɵɵdirectiveInject(OutletContextData, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CartPickupOptionsContainerComponent,
      selectors: [["cx-cart-pickup-options-container"]],
      standalone: false,
      decls: 3,
      vars: 5,
      consts: [[4, "ngIf"], [3, "pickupOptionChange", "pickupLocationChange", "disableControls", "displayPickupLocation", "selectedOption"]],
      template: function CartPickupOptionsContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CartPickupOptionsContainerComponent_ng_container_0_Template, 5, 9, "ng-container", 0);
          ɵɵpipe(1, "async");
          ɵɵpipe(2, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.availableForPickup$) && !((tmp_0_0 = ɵɵpipeBind1(2, 3, ctx.outlet == null ? null : ctx.outlet.context$)) == null ? null : tmp_0_0.orderCode) && !(ctx.cartType === ctx.CartType.SELECTIVE));
        }
      },
      dependencies: [NgIf, PickupOptionsComponent, AsyncPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartPickupOptionsContainerComponent, [{
    type: Component,
    args: [{
      selector: "cx-cart-pickup-options-container",
      standalone: false,
      template: '<ng-container\n  *ngIf="\n    (availableForPickup$ | async) &&\n    !(outlet?.context$ | async)?.orderCode &&\n    !(this.cartType === CartType.SELECTIVE)\n  "\n>\n  <cx-pickup-options\n    [disableControls]="disableControls$ | async"\n    [displayPickupLocation]="(storeDetails$ | async)?.displayName"\n    [selectedOption]="pickupOption$ | async"\n    (pickupOptionChange)="onPickupOptionChange($event)"\n    (pickupLocationChange)="openDialog($event)"\n  ></cx-pickup-options>\n</ng-container>\n'
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: LaunchDialogService
  }, {
    type: PickupLocationsSearchFacade
  }, {
    type: PickupOptionFacade
  }, {
    type: PreferredStoreFacade
  }, {
    type: ViewContainerRef
  }, {
    type: CmsService
  }, {
    type: IntendedPickupLocationFacade
  }, {
    type: OutletContextData,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var StoreScheduleComponent = class _StoreScheduleComponent {
  constructor() {
    this.storeDetails = {};
    this.openingTimes = [];
  }
  ngOnChanges() {
    this.openingTimes = this.storeDetails?.openingHours?.weekDayOpeningList?.map(({
      weekDay,
      closed,
      openingTime,
      closingTime
    }) => {
      return {
        openingHours: `${openingTime?.formattedHour ?? ""} - ${closingTime?.formattedHour ?? ""}`,
        weekDay: weekDay ?? "",
        closed
      };
    }) ?? [];
  }
  static {
    this.ɵfac = function StoreScheduleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreScheduleComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StoreScheduleComponent,
      selectors: [["cx-store-schedule"]],
      inputs: {
        storeDetails: "storeDetails"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature],
      decls: 5,
      vars: 4,
      consts: [["closed", ""], [1, "cx-store-schedule-container"], [1, "cx-store-schedule-title"], ["class", "cx-store-schedule-opening-times", 4, "ngFor", "ngForOf"], [1, "cx-store-schedule-opening-times"], [1, "cx-store-schedule-day-of-week"], [4, "ngIf", "ngIfElse"]],
      template: function StoreScheduleComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1)(1, "div", 2);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd();
          ɵɵtemplate(4, StoreScheduleComponent_div_4_Template, 6, 3, "div", 3);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "storeSchedule.storeHours"), " ");
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.openingTimes);
        }
      },
      dependencies: [NgForOf, NgIf, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreScheduleComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-schedule",
      standalone: false,
      template: `<div class="cx-store-schedule-container">
  <div class="cx-store-schedule-title">
    {{ 'storeSchedule.storeHours' | cxTranslate }}
  </div>
  <div
    class="cx-store-schedule-opening-times"
    *ngFor="let openingTime of openingTimes"
  >
    <div class="cx-store-schedule-day-of-week">{{ openingTime.weekDay }}</div>
    <div *ngIf="!openingTime.closed; else closed">
      {{ openingTime.openingHours }}
    </div>
    <ng-template #closed>{{
      'storeSchedule.closed' | cxTranslate
    }}</ng-template>
  </div>
</div>
`
    }]
  }], null, {
    storeDetails: [{
      type: Input
    }]
  });
})();
var StoreAddressComponent = class _StoreAddressComponent {
  constructor() {
    this.storeDetails = {};
  }
  static {
    this.ɵfac = function StoreAddressComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreAddressComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StoreAddressComponent,
      selectors: [["cx-store-address"]],
      inputs: {
        storeDetails: "storeDetails"
      },
      standalone: false,
      decls: 9,
      vars: 7,
      consts: [[1, "cx-store-address"], ["class", "cx-store-name", 4, "ngIf"], [1, "cx-store-full-address"], [4, "ngIf"], [1, "cx-store-name"]],
      template: function StoreAddressComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, StoreAddressComponent_div_1_Template, 2, 1, "div", 1);
          ɵɵelementStart(2, "div", 2);
          ɵɵtemplate(3, StoreAddressComponent_div_3_Template, 2, 1, "div", 3)(4, StoreAddressComponent_div_4_Template, 2, 1, "div", 3)(5, StoreAddressComponent_div_5_Template, 2, 1, "div", 3)(6, StoreAddressComponent_div_6_Template, 2, 1, "div", 3)(7, StoreAddressComponent_div_7_Template, 2, 1, "div", 3)(8, StoreAddressComponent_div_8_Template, 2, 1, "div", 3);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.storeDetails == null ? null : ctx.storeDetails.displayName);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.storeDetails == null ? null : ctx.storeDetails.address == null ? null : ctx.storeDetails.address.line1);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.storeDetails == null ? null : ctx.storeDetails.address == null ? null : ctx.storeDetails.address.line2);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.storeDetails == null ? null : ctx.storeDetails.address == null ? null : ctx.storeDetails.address.town);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.storeDetails == null ? null : ctx.storeDetails.address == null ? null : ctx.storeDetails.address.region);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.storeDetails == null ? null : ctx.storeDetails.address == null ? null : ctx.storeDetails.address.district);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.storeDetails == null ? null : ctx.storeDetails.address == null ? null : ctx.storeDetails.address.phone);
        }
      },
      dependencies: [NgIf],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreAddressComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-address",
      standalone: false,
      template: '<div class="cx-store-address">\n  <div *ngIf="storeDetails?.displayName" class="cx-store-name">\n    {{ storeDetails?.displayName }}\n  </div>\n  <div class="cx-store-full-address">\n    <div *ngIf="storeDetails?.address?.line1">\n      {{ storeDetails.address?.line1 }}\n    </div>\n    <div *ngIf="storeDetails?.address?.line2">\n      {{ storeDetails.address?.line2 }}\n    </div>\n    <div *ngIf="storeDetails?.address?.town">\n      {{ storeDetails.address?.town }}\n    </div>\n    <div *ngIf="storeDetails?.address?.region">\n      {{ storeDetails.address?.region }}\n    </div>\n    <div *ngIf="storeDetails?.address?.district">\n      {{ storeDetails.address?.district }}\n    </div>\n    <div *ngIf="storeDetails?.address?.phone">\n      {{ storeDetails.address?.phone }}\n    </div>\n  </div>\n</div>\n'
    }]
  }], null, {
    storeDetails: [{
      type: Input
    }]
  });
})();
var PickupInfoComponent = class _PickupInfoComponent {
  static {
    this.ɵfac = function PickupInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupInfoComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PickupInfoComponent,
      selectors: [["cx-pickup-info"]],
      inputs: {
        storeDetails: "storeDetails"
      },
      standalone: false,
      decls: 15,
      vars: 11,
      consts: [[1, "info-container"], [1, "info-header"], [1, "info-location"], [3, "storeDetails"], [1, "store-hours"]],
      template: function PickupInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div");
          ɵɵtext(3);
          ɵɵpipe(4, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(5, "div");
          ɵɵtext(6);
          ɵɵpipe(7, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(8, "div", 2)(9, "div");
          ɵɵtext(10);
          ɵɵpipe(11, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelement(12, "cx-store-address", 3);
          ɵɵelementEnd();
          ɵɵelementStart(13, "div", 4);
          ɵɵelement(14, "cx-store-schedule", 3);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(4, 5, "pickupInfo.inStorePickup"));
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(7, 7, "pickupInfo.pickupBy"));
          ɵɵadvance(4);
          ɵɵtextInterpolate(ɵɵpipeBind1(11, 9, "pickupInfo.pickupFrom"));
          ɵɵadvance(2);
          ɵɵproperty("storeDetails", ctx.storeDetails);
          ɵɵadvance(2);
          ɵɵproperty("storeDetails", ctx.storeDetails);
        }
      },
      dependencies: [StoreScheduleComponent, StoreAddressComponent, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupInfoComponent, [{
    type: Component,
    args: [{
      selector: "cx-pickup-info",
      standalone: false,
      template: `<div class="info-container">
  <div class="info-header">
    <div>{{ 'pickupInfo.inStorePickup' | cxTranslate }}</div>
    <div>{{ 'pickupInfo.pickupBy' | cxTranslate }}</div>
  </div>
  <div class="info-location">
    <div>{{ 'pickupInfo.pickupFrom' | cxTranslate }}</div>
    <cx-store-address [storeDetails]="storeDetails"></cx-store-address>
  </div>
  <div class="store-hours">
    <cx-store-schedule [storeDetails]="storeDetails"></cx-store-schedule>
  </div>
</div>
`
    }]
  }], null, {
    storeDetails: [{
      type: Input
    }]
  });
})();
var SetPreferredStoreComponent = class _SetPreferredStoreComponent {
  constructor(preferredStoreFacade, outlet) {
    this.preferredStoreFacade = preferredStoreFacade;
    this.outlet = outlet;
    this.ICON_TYPE = ICON_TYPE;
    this.storeSelected$ = this.preferredStoreFacade.getPreferredStore$();
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.subscription.add(this.outlet?.context$.subscribe((pointOfServiceNames) => this.pointOfServiceName = pointOfServiceNames));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  setAsPreferred() {
    this.preferredStoreFacade.setPreferredStore(this.pointOfServiceName);
    return false;
  }
  getSetStoreButtonLabel(storeName) {
    return this.pointOfServiceName.name === storeName ? "setPreferredStore.myStore" : "setPreferredStore.makeThisMyStore";
  }
  static {
    this.ɵfac = function SetPreferredStoreComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetPreferredStoreComponent)(ɵɵdirectiveInject(PreferredStoreFacade), ɵɵdirectiveInject(OutletContextData, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SetPreferredStoreComponent,
      selectors: [["cx-set-preferred-store"]],
      inputs: {
        pointOfServiceName: "pointOfServiceName"
      },
      standalone: false,
      decls: 2,
      vars: 2,
      consts: [[4, "cxFeature"], [4, "ngIf"], [1, "setpreferredstore-container", 3, "click"], [3, "ngClass"], ["aria-hidden", "true", 3, "type"], ["data-text", "setPreferredStore.myStore", 1, "set-preferred-heading"]],
      template: function SetPreferredStoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, SetPreferredStoreComponent_ng_container_0_Template, 3, 5, "ng-container", 0)(1, SetPreferredStoreComponent_ng_container_1_Template, 12, 21, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("cxFeature", "a11yRepeatingButtonsUniqueLabels");
          ɵɵadvance();
          ɵɵproperty("cxFeature", "!a11yRepeatingButtonsUniqueLabels");
        }
      },
      dependencies: [NgClass, NgIf, IconComponent, FeatureDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetPreferredStoreComponent, [{
    type: Component,
    args: [{
      selector: "cx-set-preferred-store",
      standalone: false,
      template: `<ng-container *cxFeature="'a11yRepeatingButtonsUniqueLabels'">
  <ng-container *ngIf="{ storeSelected: storeSelected$ | async } as data">
    <div
      [attr.data-preferred-store]="pointOfServiceName.name"
      [attr.data-store-is-selected]="
        pointOfServiceName.name === data.storeSelected?.name
      "
      class="setpreferredstore-container"
      (click)="setAsPreferred()"
    >
      <div
        [ngClass]="
          pointOfServiceName.name === data.storeSelected?.name
            ? 'icon-selected'
            : 'icon-not-selected'
        "
      >
        <cx-icon aria-hidden="true" [type]="ICON_TYPE.HEART"></cx-icon>
      </div>
      <button
        data-text="setPreferredStore.myStore"
        [attr.data-preferred-store]="pointOfServiceName.name"
        class="set-preferred-heading"
        [attr.aria-label]="
          (getSetStoreButtonLabel(data.storeSelected?.name || '')
            | cxTranslate) +
          ', ' +
          pointOfServiceName.displayName
        "
      >
        {{
          getSetStoreButtonLabel(data.storeSelected?.name || '') | cxTranslate
        }}
      </button>
    </div>
  </ng-container>
</ng-container>
<ng-container *cxFeature="'!a11yRepeatingButtonsUniqueLabels'">
  <div
    [attr.data-preferred-store]="pointOfServiceName.name"
    [attr.data-store-is-selected]="
      pointOfServiceName.name === (storeSelected$ | async)?.name
    "
    class="setpreferredstore-container"
    (click)="setAsPreferred()"
  >
    <div
      [ngClass]="{
        'icon-selected':
          pointOfServiceName.name === (storeSelected$ | async)?.name,
        'icon-not-selected':
          pointOfServiceName.name !== (storeSelected$ | async)?.name,
      }"
    >
      <cx-icon aria-hidden="true" [type]="ICON_TYPE.HEART"></cx-icon>
    </div>
    <button
      data-text="setPreferredStore.myStore"
      [attr.data-preferred-store]="pointOfServiceName.name"
      class="set-preferred-heading"
    >
      {{
        pointOfServiceName.name === (storeSelected$ | async)?.name
          ? ('setPreferredStore.myStore' | cxTranslate)
          : ('setPreferredStore.makeThisMyStore' | cxTranslate)
      }}
    </button>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: PreferredStoreFacade
  }, {
    type: OutletContextData,
    decorators: [{
      type: Optional
    }]
  }], {
    pointOfServiceName: [{
      type: Input
    }]
  });
})();
var SetPreferredStoreModule = class _SetPreferredStoreModule {
  static {
    this.ɵfac = function SetPreferredStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetPreferredStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SetPreferredStoreModule,
      declarations: [SetPreferredStoreComponent],
      imports: [CommonModule, IconModule, I18nModule, FeaturesConfigModule],
      exports: [SetPreferredStoreComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideOutlet({
        id: StoreFinderOutlets.PREFERRED_STORE,
        position: OutletPosition.REPLACE,
        component: SetPreferredStoreComponent
      })],
      imports: [CommonModule, IconModule, I18nModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetPreferredStoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, IconModule, I18nModule, FeaturesConfigModule],
      exports: [SetPreferredStoreComponent],
      declarations: [SetPreferredStoreComponent],
      providers: [provideOutlet({
        id: StoreFinderOutlets.PREFERRED_STORE,
        position: OutletPosition.REPLACE,
        component: SetPreferredStoreComponent
      })]
    }]
  }], null, null);
})();
var StoreComponent = class _StoreComponent {
  constructor() {
    this.storeDetails = {};
    this.storeSelected = new EventEmitter();
    this.openHoursOpen = false;
    this.ICON_TYPE = ICON_TYPE;
    useFeatureStyles("a11yViewHoursButtonIconContrast");
    useFeatureStyles("a11yStoreInStockIconContrast");
  }
  ngOnInit() {
    this.isInStock = storeHasStock(this.storeDetails);
  }
  /**
   * Select the current store for pickup.
   */
  selectStore() {
    this.storeSelected.emit(this.storeDetails);
    return false;
  }
  /**
   * Toggle whether the store's opening hours are visible.
   */
  toggleOpenHours() {
    this.openHoursOpen = !this.openHoursOpen;
    return false;
  }
  static {
    this.ɵfac = function StoreComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StoreComponent,
      selectors: [["cx-store"]],
      inputs: {
        storeDetails: "storeDetails"
      },
      outputs: {
        storeSelected: "storeSelected"
      },
      standalone: false,
      decls: 27,
      vars: 35,
      consts: [[1, "cx-store"], [1, "cx-store-address"], [1, "cx-store-full-address"], [3, "storeDetails"], [1, "cx-store-opening-hours-toggle", 3, "click"], [1, "cx-store-opening-hours-icon"], ["aria-hidden", "true", 3, "type"], [3, "storeDetails", 4, "ngIf"], [3, "pointOfServiceName"], [1, "cx-store-distance"], ["class", "cx-store-stock-icon", "aria-hidden", "true", 3, "type", 4, "ngIf"], [1, "cx-stock-level", 3, "ngClass"], [1, "cx-store-pick-up-from-here"], [1, "btn", "btn-secondary", "btn-block", 3, "click", "disabled"], ["aria-hidden", "true", 1, "cx-store-stock-icon", 3, "type"]],
      template: function StoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
          ɵɵelement(3, "cx-store-address", 3);
          ɵɵelementStart(4, "div")(5, "div")(6, "button", 4);
          ɵɵpipe(7, "cxTranslate");
          ɵɵlistener("click", function StoreComponent_Template_button_click_6_listener() {
            return ctx.toggleOpenHours();
          });
          ɵɵtext(8);
          ɵɵpipe(9, "cxTranslate");
          ɵɵelementStart(10, "span", 5);
          ɵɵelement(11, "cx-icon", 6);
          ɵɵelementEnd()()();
          ɵɵtemplate(12, StoreComponent_cx_store_schedule_12_Template, 1, 1, "cx-store-schedule", 7);
          ɵɵelement(13, "cx-set-preferred-store", 8);
          ɵɵelementEnd()()();
          ɵɵelementStart(14, "div")(15, "div", 9);
          ɵɵtext(16);
          ɵɵelementEnd();
          ɵɵelementStart(17, "div");
          ɵɵtemplate(18, StoreComponent_cx_icon_18_Template, 1, 1, "cx-icon", 10);
          ɵɵelementStart(19, "span", 11);
          ɵɵtext(20);
          ɵɵpipe(21, "cxTranslate");
          ɵɵelementEnd()()()();
          ɵɵelementStart(22, "div", 12)(23, "button", 13);
          ɵɵpipe(24, "cxTranslate");
          ɵɵlistener("click", function StoreComponent_Template_button_click_23_listener() {
            return ctx.selectStore();
          });
          ɵɵtext(25);
          ɵɵpipe(26, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵproperty("storeDetails", ctx.storeDetails);
          ɵɵadvance(3);
          ɵɵattribute("aria-expanded", ctx.openHoursOpen)("aria-label", ɵɵpipeBind1(7, 15, "store.viewHours") + ", " + ctx.storeDetails.displayName);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 17, "store.viewHours"), " ");
          ɵɵadvance(3);
          ɵɵproperty("type", ctx.openHoursOpen ? ctx.ICON_TYPE.CARET_UP : ctx.ICON_TYPE.CARET_DOWN);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.openHoursOpen);
          ɵɵadvance();
          ɵɵproperty("pointOfServiceName", ɵɵpureFunction2(26, _c5, ctx.storeDetails == null ? null : ctx.storeDetails.name, ctx.storeDetails == null ? null : ctx.storeDetails.displayName));
          ɵɵadvance(3);
          ɵɵtextInterpolate(ctx.storeDetails == null ? null : ctx.storeDetails.formattedDistance);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.isInStock);
          ɵɵadvance();
          ɵɵproperty("ngClass", ɵɵpureFunction2(29, _c6, ctx.isInStock, !ctx.isInStock));
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind2(21, 19, "store.stockLevel", ɵɵpureFunction2(32, _c7, ctx.isInStock ? "inStock" : "outOfStock", ctx.storeDetails == null ? null : ctx.storeDetails.stockInfo == null ? null : ctx.storeDetails.stockInfo.stockLevel)), "");
          ɵɵadvance(3);
          ɵɵproperty("disabled", !ctx.isInStock);
          ɵɵattribute("data-pickup-in-store-button", ctx.storeDetails.name)("aria-label", ɵɵpipeBind1(24, 22, "store.pickupFromHere") + ", " + ctx.storeDetails.displayName);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(26, 24, "store.pickupFromHere"), " ");
        }
      },
      dependencies: [NgClass, NgIf, IconComponent, SetPreferredStoreComponent, StoreScheduleComponent, StoreAddressComponent, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreComponent, [{
    type: Component,
    args: [{
      selector: "cx-store",
      standalone: false,
      template: `<div class="cx-store">
  <div class="cx-store-address">
    <div class="cx-store-full-address">
      <cx-store-address [storeDetails]="storeDetails"></cx-store-address>

      <div>
        <div>
          <button
            (click)="toggleOpenHours()"
            [attr.aria-expanded]="openHoursOpen"
            [attr.aria-label]="
              ('store.viewHours' | cxTranslate) +
              ', ' +
              storeDetails.displayName
            "
            class="cx-store-opening-hours-toggle"
          >
            {{ 'store.viewHours' | cxTranslate }}
            <span class="cx-store-opening-hours-icon"
              ><cx-icon
                aria-hidden="true"
                [type]="
                  openHoursOpen ? ICON_TYPE.CARET_UP : ICON_TYPE.CARET_DOWN
                "
              ></cx-icon
            ></span>
          </button>
        </div>
        <cx-store-schedule *ngIf="openHoursOpen" [storeDetails]="storeDetails">
        </cx-store-schedule>
        <cx-set-preferred-store
          [pointOfServiceName]="{
            name: storeDetails?.name,
            displayName: storeDetails?.displayName,
          }"
        ></cx-set-preferred-store>
      </div>
    </div>
  </div>
  <div>
    <div class="cx-store-distance">{{ storeDetails?.formattedDistance }}</div>
    <div>
      <cx-icon
        class="cx-store-stock-icon"
        aria-hidden="true"
        *ngIf="isInStock"
        [type]="ICON_TYPE.CHECK"
      ></cx-icon>
      <span
        class="cx-stock-level"
        [ngClass]="{
          'cx-store-in-stock': isInStock,
          'cx-store-out-of-stock': !isInStock,
        }"
      >
        {{
          'store.stockLevel'
            | cxTranslate
              : {
                  context: isInStock ? 'inStock' : 'outOfStock',
                  count: storeDetails?.stockInfo?.stockLevel,
                }
        }}</span
      >
    </div>
  </div>
</div>
<div class="cx-store-pick-up-from-here">
  <button
    (click)="selectStore()"
    class="btn btn-secondary btn-block"
    [disabled]="!isInStock"
    [attr.data-pickup-in-store-button]="storeDetails.name"
    [attr.aria-label]="
      ('store.pickupFromHere' | cxTranslate) + ', ' + storeDetails.displayName
    "
  >
    {{ 'store.pickupFromHere' | cxTranslate }}
  </button>
</div>
`
    }]
  }], () => [], {
    storeDetails: [{
      type: Input
    }],
    storeSelected: [{
      type: Output
    }]
  });
})();
var StoreModule2 = class _StoreModule {
  static {
    this.ɵfac = function StoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _StoreModule,
      declarations: [StoreComponent, StoreScheduleComponent, StoreAddressComponent],
      imports: [CommonModule, I18nModule, IconModule, SpinnerModule, SetPreferredStoreModule],
      exports: [StoreComponent, StoreScheduleComponent, StoreAddressComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, IconModule, SpinnerModule, SetPreferredStoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreModule2, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, IconModule, SpinnerModule, SetPreferredStoreModule],
      exports: [StoreComponent, StoreScheduleComponent, StoreAddressComponent],
      declarations: [StoreComponent, StoreScheduleComponent, StoreAddressComponent]
    }]
  }], null, null);
})();
var PickupInfoModule = class _PickupInfoModule {
  static {
    this.ɵfac = function PickupInfoModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupInfoModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PickupInfoModule,
      declarations: [PickupInfoComponent],
      imports: [CommonModule, I18nModule, StoreModule2],
      exports: [PickupInfoComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, StoreModule2]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupInfoModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, StoreModule2],
      declarations: [PickupInfoComponent],
      exports: [PickupInfoComponent]
    }]
  }], null, null);
})();
var PickupOptionsModule = class _PickupOptionsModule {
  static {
    this.ɵfac = function PickupOptionsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupOptionsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PickupOptionsModule,
      declarations: [PickupOptionsComponent],
      imports: [CommonModule, I18nModule, ReactiveFormsModule, FeaturesConfigModule, TabModule],
      exports: [PickupOptionsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, ReactiveFormsModule, FeaturesConfigModule, TabModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupOptionsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, ReactiveFormsModule, FeaturesConfigModule, TabModule],
      declarations: [PickupOptionsComponent],
      exports: [PickupOptionsComponent]
    }]
  }], null, null);
})();
var CartPickupOptionsContainerModule = class _CartPickupOptionsContainerModule {
  static {
    this.ɵfac = function CartPickupOptionsContainerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartPickupOptionsContainerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CartPickupOptionsContainerModule,
      declarations: [CartPickupOptionsContainerComponent],
      imports: [CommonModule, PickupOptionsModule],
      exports: [CartPickupOptionsContainerComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideOutlet({
        id: CartOutlets.ITEM_DELIVERY_DETAILS,
        position: OutletPosition.REPLACE,
        component: CartPickupOptionsContainerComponent
      })],
      imports: [CommonModule, PickupOptionsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartPickupOptionsContainerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PickupOptionsModule],
      exports: [CartPickupOptionsContainerComponent],
      declarations: [CartPickupOptionsContainerComponent],
      providers: [provideOutlet({
        id: CartOutlets.ITEM_DELIVERY_DETAILS,
        position: OutletPosition.REPLACE,
        component: CartPickupOptionsContainerComponent
      })]
    }]
  }], null, null);
})();
var GET_DIRECTIONS_NAME = "Get Directions";
var CHANGE_STORE_NAME = "Change Store";
var GET_DIRECTIONS_ARIA = "cardActions.getDirections";
var MyPreferredStoreComponent = class _MyPreferredStoreComponent {
  constructor(preferredStoreFacade, pickupLocationsSearchService, routingService, storeFinderService, cmsService) {
    this.preferredStoreFacade = preferredStoreFacade;
    this.pickupLocationsSearchService = pickupLocationsSearchService;
    this.routingService = routingService;
    this.storeFinderService = storeFinderService;
    this.cmsService = cmsService;
    this.storeLocationService = inject(StoreLocationService);
    this.defaultContent = {
      header: "My Store",
      actions: [{
        event: "send",
        name: GET_DIRECTIONS_NAME
      }, {
        event: "edit",
        name: CHANGE_STORE_NAME
      }]
    };
    this.openHoursOpen = false;
    this.ICON_TYPE = ICON_TYPE;
    this.isStoreFinder = false;
    this.featureConfigService = inject(FeatureConfigService);
    this.cdr = inject(ChangeDetectorRef, {
      optional: true
    });
    if (!this.featureConfigService.isEnabled("storeFinderFacadeCleanup")) {
      this.preferredStore$ = this.preferredStoreFacade.getPreferredStore$().pipe(filter((preferredStore) => preferredStore !== null), map((preferredStore) => preferredStore), filter((preferredStore) => !!preferredStore.name), map((preferredStore) => preferredStore.name), tap((preferredStoreName) => this.pickupLocationsSearchService.loadStoreDetails(preferredStoreName)), switchMap((preferredStoreName) => this.pickupLocationsSearchService.getStoreDetails(preferredStoreName)), tap((store) => {
        this.pointOfService = store;
      }));
    }
    useFeatureStyles("a11yViewHoursButtonIconContrast");
    useFeatureStyles("a11yImproveButtonsInCardComponent");
  }
  ngOnInit() {
    if (this.featureConfigService.isEnabled("storeFinderFacadeCleanup")) {
      this.preferredStore$ = this.preferredStoreFacade.getPreferredStore$().pipe(filter((preferredStore) => preferredStore !== null && "name" in preferredStore), map((preferredStore) => preferredStore.name), distinctUntilChanged(), switchMap((preferredStoreName) => this.pickupLocationsSearchService.loadAndGetStoreDetails(preferredStoreName)), tap((store) => {
        this.pointOfService = store;
      }), shareReplay({
        bufferSize: 1,
        refCount: true
      }));
      this.preferredStore$.pipe(switchMap(() => this.cmsService.getCurrentPage().pipe(filter(Boolean), take(1), map((cmsPage) => {
        this.isStoreFinder = cmsPage.pageId === "storefinderPage";
        return this.isStoreFinder;
      }), tap((isStoreFinder) => {
        const link = this.storeLocationService.getDirections(this.pointOfService);
        if (isStoreFinder) {
          this.content = {
            header: "",
            actions: [{
              link,
              name: GET_DIRECTIONS_NAME,
              ariaLabel: GET_DIRECTIONS_ARIA,
              target: "_blank"
            }]
          };
        } else {
          this.content = __spreadProps(__spreadValues({}, this.defaultContent), {
            actions: [{
              link,
              name: GET_DIRECTIONS_NAME,
              ariaLabel: GET_DIRECTIONS_ARIA,
              target: "_blank"
            }, {
              event: "edit",
              name: CHANGE_STORE_NAME
            }]
          });
        }
        this.cdr?.detectChanges();
      })))).subscribe();
    } else if (this.featureConfigService.isEnabled("a11yImproveButtonsInCardComponent")) {
      this.cmsService.getCurrentPage().pipe(filter(Boolean), take(1), map((cmsPage) => {
        this.isStoreFinder = cmsPage.pageId === "storefinderPage";
        return this.isStoreFinder;
      })).subscribe((isStoreFinder) => {
        const link = this.storeFinderService.getDirections(this.pointOfService);
        if (isStoreFinder) {
          this.content = {
            header: "",
            actions: [{
              link,
              name: GET_DIRECTIONS_NAME,
              ariaLabel: GET_DIRECTIONS_ARIA,
              target: "_blank"
            }]
          };
        } else {
          this.content = __spreadProps(__spreadValues({}, this.defaultContent), {
            actions: [{
              link,
              name: GET_DIRECTIONS_NAME,
              ariaLabel: GET_DIRECTIONS_ARIA,
              target: "_blank"
            }, {
              event: "edit",
              name: CHANGE_STORE_NAME
            }]
          });
        }
        this.cdr?.detectChanges();
      });
    } else {
      this.cmsService.getCurrentPage().pipe(filter(Boolean), take(1), tap((cmsPage) => this.isStoreFinder = cmsPage.pageId === "storefinderPage"), filter(() => this.isStoreFinder), tap(() => {
        this.content = {
          header: "",
          actions: [{
            event: "send",
            name: GET_DIRECTIONS_NAME
          }]
        };
      })).subscribe();
    }
  }
  /**
   * Toggle whether the store's opening hours are visible.
   */
  toggleOpenHours() {
    this.openHoursOpen = !this.openHoursOpen;
    return false;
  }
  changeStore() {
    this.routingService.go(["/store-finder"]);
  }
  getDirectionsToStore() {
    const linkToDirections = this.featureConfigService.isEnabled("storeFinderFacadeCleanup") ? this.storeLocationService.getDirections(this.pointOfService) : this.storeFinderService.getDirections(this.pointOfService);
    window.open(linkToDirections, "_blank", "noopener,noreferrer");
  }
  static {
    this.ɵfac = function MyPreferredStoreComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyPreferredStoreComponent)(ɵɵdirectiveInject(PreferredStoreFacade), ɵɵdirectiveInject(PickupLocationsSearchFacade), ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(StoreFinderFacade), ɵɵdirectiveInject(CmsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MyPreferredStoreComponent,
      selectors: [["cx-my-preferred-store"]],
      standalone: false,
      decls: 16,
      vars: 19,
      consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "cx-my-preferred-store-heading"], [3, "ngClass"], [3, "sendCard", "editCard", "border", "fitToContainer", "content"], ["label_container_bottom", ""], [1, "info-location"], [3, "storeDetails"], [4, "ngIf"], ["class", "store-hours", 4, "ngIf"], [1, "cx-store-opening-hours-toggle", 3, "click"], [1, "cx-store-opening-hours-icon"], ["aria-hidden", "true", 3, "type"], [1, "store-hours"], [3, "storeDetails", 4, "ngIf"]],
      template: function MyPreferredStoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
          ɵɵtext(4);
          ɵɵpipe(5, "cxTranslate");
          ɵɵpipe(6, "cxTranslate");
          ɵɵelementEnd()()();
          ɵɵelementStart(7, "div", 1)(8, "div", 4)(9, "cx-card", 5);
          ɵɵlistener("sendCard", function MyPreferredStoreComponent_Template_cx_card_sendCard_9_listener() {
            return ctx.getDirectionsToStore();
          })("editCard", function MyPreferredStoreComponent_Template_cx_card_editCard_9_listener() {
            return ctx.changeStore();
          });
          ɵɵelementStart(10, "div", 6)(11, "div", 7);
          ɵɵelement(12, "cx-store-address", 8);
          ɵɵpipe(13, "async");
          ɵɵelementEnd();
          ɵɵtemplate(14, MyPreferredStoreComponent_div_14_Template, 6, 5, "div", 9)(15, MyPreferredStoreComponent_div_15_Template, 2, 1, "div", 10);
          ɵɵelementEnd()()()()();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵattribute("data-test-id", "preferredStoreHeading");
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ctx.isStoreFinder ? ɵɵpipeBind1(5, 10, "storeFinderPickupInStore.heading") : ɵɵpipeBind1(6, 12, "addressBookPickupInStore.heading"), " ");
          ɵɵadvance(3);
          ɵɵattribute("data-test-id", "preferredStoreAddressBook");
          ɵɵadvance();
          ɵɵproperty("ngClass", ɵɵpureFunction2(16, _c8, !ctx.isStoreFinder, ctx.isStoreFinder));
          ɵɵadvance();
          ɵɵproperty("border", !ctx.isStoreFinder)("fitToContainer", true)("content", ctx.content);
          ɵɵadvance(3);
          ɵɵproperty("storeDetails", ɵɵpipeBind1(13, 14, ctx.preferredStore$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", !ctx.isStoreFinder);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.isStoreFinder);
        }
      },
      dependencies: [CardComponent, StoreScheduleComponent, StoreAddressComponent, NgClass, NgIf, IconComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyPreferredStoreComponent, [{
    type: Component,
    args: [{
      selector: "cx-my-preferred-store",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="container">
  <div class="row">
    <div class="col-md-12">
      <h2
        class="cx-my-preferred-store-heading"
        [attr.data-test-id]="'preferredStoreHeading'"
      >
        {{
          isStoreFinder
            ? ('storeFinderPickupInStore.heading' | cxTranslate)
            : ('addressBookPickupInStore.heading' | cxTranslate)
        }}
      </h2>
    </div>
  </div>
  <div class="row" [attr.data-test-id]="'preferredStoreAddressBook'">
    <div
      [ngClass]="{
        'col-md-6': !isStoreFinder,
        'col-md-4': isStoreFinder,
        'cx-address-card': true,
      }"
    >
      <cx-card
        [border]="!isStoreFinder"
        [fitToContainer]="true"
        [content]="content"
        (sendCard)="getDirectionsToStore()"
        (editCard)="changeStore()"
      >
        <div label_container_bottom>
          <div class="info-location">
            <cx-store-address
              [storeDetails]="preferredStore$ | async"
            ></cx-store-address>
          </div>
          <div *ngIf="!isStoreFinder">
            <button
              (click)="toggleOpenHours()"
              [attr.aria-expanded]="openHoursOpen"
              class="cx-store-opening-hours-toggle"
            >
              {{ 'store.viewHours' | cxTranslate }}
              <span class="cx-store-opening-hours-icon"
                ><cx-icon
                  aria-hidden="true"
                  [type]="
                    openHoursOpen ? ICON_TYPE.CARET_UP : ICON_TYPE.CARET_DOWN
                  "
                ></cx-icon
              ></span>
            </button>
          </div>
          <div class="store-hours" *ngIf="!isStoreFinder">
            <cx-store-schedule
              *ngIf="openHoursOpen"
              [storeDetails]="preferredStore$ | async"
            ></cx-store-schedule>
          </div>
        </div>
      </cx-card>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: PreferredStoreFacade
  }, {
    type: PickupLocationsSearchFacade
  }, {
    type: RoutingService
  }, {
    type: StoreFinderFacade
  }, {
    type: CmsService
  }], null);
})();
var MyPreferredStoreModule = class _MyPreferredStoreModule {
  static {
    this.ɵfac = function MyPreferredStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyPreferredStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _MyPreferredStoreModule,
      declarations: [MyPreferredStoreComponent],
      imports: [CardModule, StoreModule2, CommonModule, I18nModule, IconModule, ConfigModule],
      exports: [MyPreferredStoreComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CardModule, StoreModule2, CommonModule, I18nModule, IconModule, ConfigModule.withConfig({
        cmsComponents: {
          MyPreferredStoreComponent: {
            component: MyPreferredStoreComponent
          }
        }
      })]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyPreferredStoreModule, [{
    type: NgModule,
    args: [{
      imports: [CardModule, StoreModule2, CommonModule, I18nModule, IconModule, ConfigModule.withConfig({
        cmsComponents: {
          MyPreferredStoreComponent: {
            component: MyPreferredStoreComponent
          }
        }
      })],
      exports: [MyPreferredStoreComponent],
      declarations: [MyPreferredStoreComponent]
    }]
  }], null, null);
})();
function isProductWithCode(product) {
  return !!product?.code;
}
var PdpPickupOptionsContainerComponent = class _PdpPickupOptionsContainerComponent {
  constructor(currentProductService, intendedPickupLocationService, launchDialogService, pickupOptionFacade, preferredStoreFacade, pickupLocationsSearchService, vcr) {
    this.currentProductService = currentProductService;
    this.intendedPickupLocationService = intendedPickupLocationService;
    this.launchDialogService = launchDialogService;
    this.pickupOptionFacade = pickupOptionFacade;
    this.preferredStoreFacade = preferredStoreFacade;
    this.pickupLocationsSearchService = pickupLocationsSearchService;
    this.vcr = vcr;
    this.intendedPickupChange = new EventEmitter();
    this.subscription = new Subscription();
    this.availableForPickup = false;
    this.displayNameIsSet = false;
    this.featureConfigService = inject(FeatureConfigService);
  }
  ngOnInit() {
    this.pickupOptionFacade.setPageContext("PDP");
    const productCode$ = this.currentProductService.getProduct().pipe(filter(isProductWithCode), map((product) => {
      this.productCode = product.code;
      this.availableForPickup = !!product.availableForPickup;
      return this.productCode;
    }), tap((productCode) => this.pickupOption$ = this.intendedPickupLocationService.getPickupOption(productCode)));
    this.displayPickupLocation$ = this.currentProductService.getProduct().pipe(filter(isProductWithCode), map((product) => product.code), switchMap((productCode) => this.intendedPickupLocationService.getIntendedLocation(productCode).pipe(map((intendedLocation) => ({
      intendedLocation,
      productCode
    })))), switchMap(({
      intendedLocation,
      productCode
    }) => {
      if (intendedLocation?.displayName) {
        this.displayNameIsSet = true;
        return of(getProperty(intendedLocation, "displayName"));
      }
      this.setIntendedPickupLocation(productCode);
      return of(void 0);
    }));
    this.intendedPickupLocation$ = this.currentProductService.getProduct().pipe(filter(isProductWithCode), map((product) => product.code), switchMap((productCode) => this.intendedPickupLocationService.getIntendedLocation(productCode)));
    this.subscription.add(this.intendedPickupLocation$.subscribe(this.intendedPickupChange));
    this.subscription.add(combineLatest([productCode$, this.launchDialogService.dialogClose.pipe(filter((reason) => reason !== void 0), startWith(void 0))]).pipe(switchMap(([productCode]) => this.intendedPickupLocationService.getIntendedLocation(productCode))).subscribe());
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  setIntendedPickupLocation(productCode) {
    this.subscription.add(this.preferredStoreFacade.getPreferredStoreWithProductInStock(productCode).pipe(map(({
      name
    }) => name), tap((storeName) => this.pickupLocationsSearchService.loadStoreDetails(storeName)), concatMap((storeName) => this.pickupLocationsSearchService.getStoreDetails(storeName)), filter((storeDetails) => !!storeDetails)).subscribe((storeDetails) => {
      this.intendedPickupLocationService.setIntendedLocation(productCode, __spreadProps(__spreadValues({}, storeDetails), {
        pickupOption: "delivery"
      }));
    }));
  }
  openDialog(triggerElement) {
    const dialog = this.launchDialogService.openDialog(LAUNCH_CALLER.PICKUP_IN_STORE, triggerElement, this.vcr, {
      productCode: this.productCode
    });
    if (dialog) {
      dialog.pipe(take(1)).subscribe();
    }
  }
  onPickupOptionChange(event) {
    const {
      option,
      triggerElement
    } = event;
    const handleChange = () => {
      if (!this.featureConfigService.isEnabled("a11yPickupOptionsTabs")) {
        if (option === "delivery") {
          return;
        }
        if (!this.displayNameIsSet) {
          this.openDialog(triggerElement);
        }
      }
    };
    this.intendedPickupLocationService.setPickupOption(this.productCode, option);
    handleChange();
  }
  static {
    this.ɵfac = function PdpPickupOptionsContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PdpPickupOptionsContainerComponent)(ɵɵdirectiveInject(CurrentProductService), ɵɵdirectiveInject(IntendedPickupLocationFacade), ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(PickupOptionFacade), ɵɵdirectiveInject(PreferredStoreFacade), ɵɵdirectiveInject(PickupLocationsSearchFacade), ɵɵdirectiveInject(ViewContainerRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PdpPickupOptionsContainerComponent,
      selectors: [["cx-cart-pickup-options-container"]],
      outputs: {
        intendedPickupChange: "intendedPickupChange"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "pickupOptionChange", "pickupLocationChange", "selectedOption", "displayPickupLocation"]],
      template: function PdpPickupOptionsContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, PdpPickupOptionsContainerComponent_ng_container_0_Template, 4, 6, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.availableForPickup);
        }
      },
      dependencies: [NgIf, PickupOptionsComponent, AsyncPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdpPickupOptionsContainerComponent, [{
    type: Component,
    args: [{
      selector: "cx-cart-pickup-options-container",
      standalone: false,
      template: '<ng-container *ngIf="availableForPickup">\n  <cx-pickup-options\n    [selectedOption]="pickupOption$ | async"\n    [displayPickupLocation]="displayPickupLocation$ | async"\n    (pickupOptionChange)="onPickupOptionChange($event)"\n    (pickupLocationChange)="openDialog($event)"\n  ></cx-pickup-options>\n</ng-container>\n'
    }]
  }], () => [{
    type: CurrentProductService
  }, {
    type: IntendedPickupLocationFacade
  }, {
    type: LaunchDialogService
  }, {
    type: PickupOptionFacade
  }, {
    type: PreferredStoreFacade
  }, {
    type: PickupLocationsSearchFacade
  }, {
    type: ViewContainerRef
  }], {
    intendedPickupChange: [{
      type: Output
    }]
  });
})();
var PdpPickupOptionsContainerModule = class _PdpPickupOptionsContainerModule {
  static {
    this.ɵfac = function PdpPickupOptionsContainerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PdpPickupOptionsContainerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PdpPickupOptionsContainerModule,
      declarations: [PdpPickupOptionsContainerComponent],
      imports: [CommonModule, PickupOptionsModule],
      exports: [PdpPickupOptionsContainerComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideOutlet({
        id: CartOutlets.ADD_TO_CART_PICKUP_OPTION,
        position: OutletPosition.REPLACE,
        component: PdpPickupOptionsContainerComponent
      })],
      imports: [CommonModule, PickupOptionsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdpPickupOptionsContainerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PickupOptionsModule],
      exports: [PdpPickupOptionsContainerComponent],
      declarations: [PdpPickupOptionsContainerComponent],
      providers: [provideOutlet({
        id: CartOutlets.ADD_TO_CART_PICKUP_OPTION,
        position: OutletPosition.REPLACE,
        component: PdpPickupOptionsContainerComponent
      })]
    }]
  }], null, null);
})();
var PickupInStoreOrderConsignmentContainerComponent = class _PickupInStoreOrderConsignmentContainerComponent {
  constructor(outlet) {
    this.outlet = outlet;
  }
  ngOnInit() {
    this.pointOfService$ = this.outlet?.context$?.pipe(map((context) => context.item?.deliveryPointOfService), filter((pointOfService) => !!pointOfService));
  }
  static {
    this.ɵfac = function PickupInStoreOrderConsignmentContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupInStoreOrderConsignmentContainerComponent)(ɵɵdirectiveInject(OutletContextData, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PickupInStoreOrderConsignmentContainerComponent,
      selectors: [["cx-pickup-in-store-order-consignment"]],
      inputs: {
        pointOfService$: "pointOfService$"
      },
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["class", "cx-list-header col-12", 4, "ngIf"], [1, "cx-list-header", "col-12"], [1, "cx-consignment-details"], [1, "cx-deliveryPointOfService-address"], [1, "cx-deliveryPointOfService-heading"], [1, "cx-deliveryPointOfService-storeName"], [4, "ngIf"]],
      template: function PickupInStoreOrderConsignmentContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, PickupInStoreOrderConsignmentContainerComponent_div_0_Template, 12, 8, "div", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.pointOfService$));
        }
      },
      dependencies: [NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupInStoreOrderConsignmentContainerComponent, [{
    type: Component,
    args: [{
      selector: "cx-pickup-in-store-order-consignment",
      standalone: false,
      template: `<div
  *ngIf="pointOfService$ | async as pointOfService"
  class="cx-list-header col-12"
>
  <div class="cx-consignment-details">
    <div class="cx-deliveryPointOfService-address">
      <div class="cx-deliveryPointOfService-heading">
        {{ 'deliveryPointOfServiceDetails.pickUpInStoreAddress' | cxTranslate }}
      </div>
      <div class="cx-deliveryPointOfService-storeName">
        {{ pointOfService?.displayName }}
      </div>
      <div *ngIf="pointOfService?.address?.line1">
        {{ pointOfService?.address?.line1 }}
      </div>
      <div *ngIf="pointOfService?.address?.line2">
        {{ pointOfService?.address?.line2 }}
      </div>
      <div *ngIf="pointOfService?.address?.town">
        <span>
          {{ pointOfService?.address?.town }}
        </span>
        <span> {{ pointOfService?.address?.postalCode }}</span>
      </div>
      <div *ngIf="pointOfService?.address?.phone">
        {{ pointOfService?.address?.phone }}
      </div>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: OutletContextData,
    decorators: [{
      type: Optional
    }]
  }], {
    pointOfService$: [{
      type: Input
    }]
  });
})();
var OrderConsignmentContainerModule = class _OrderConsignmentContainerModule {
  static {
    this.ɵfac = function OrderConsignmentContainerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderConsignmentContainerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderConsignmentContainerModule,
      declarations: [PickupInStoreOrderConsignmentContainerComponent],
      imports: [CommonModule, I18nModule],
      exports: [PickupInStoreOrderConsignmentContainerComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideOutlet({
        id: OrderOutlets.ORDER_CONSIGNMENT,
        position: OutletPosition.AFTER,
        component: PickupInStoreOrderConsignmentContainerComponent
      })],
      imports: [CommonModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConsignmentContainerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule],
      exports: [PickupInStoreOrderConsignmentContainerComponent],
      declarations: [PickupInStoreOrderConsignmentContainerComponent],
      providers: [provideOutlet({
        id: OrderOutlets.ORDER_CONSIGNMENT,
        position: OutletPosition.AFTER,
        component: PickupInStoreOrderConsignmentContainerComponent
      })]
    }]
  }], null, null);
})();
var PickupInfoContainerComponent = class _PickupInfoContainerComponent {
  constructor(activeCartService, storeDetails) {
    this.activeCartService = activeCartService;
    this.storeDetails = storeDetails;
  }
  ngOnInit() {
    this.activeCartService.getActive().pipe(map((cart) => cart.entries), filter((entries) => !!entries), map((entries) => entries.map((entry) => entry.deliveryPointOfService?.name).filter((name) => !!name)), tap((storeNames) => storeNames.forEach((storeName) => this.storeDetails.loadStoreDetails(storeName))), mergeMap((storeNames) => combineLatest(storeNames.map((storeName) => this.storeDetails.getStoreDetails(storeName).pipe(filter((details) => !!details))))), map((pointOfService) => pointOfService.map(({
      address,
      displayName,
      openingHours
    }) => ({
      address,
      displayName,
      openingHours
    }))), tap((storesDetailsData) => this.storesDetailsData = storesDetailsData), take(1)).subscribe();
  }
  static {
    this.ɵfac = function PickupInfoContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupInfoContainerComponent)(ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(PickupLocationsSearchFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PickupInfoContainerComponent,
      selectors: [["cx-pickup-info-container"]],
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[3, "storeDetails", 4, "ngFor", "ngForOf"], [3, "storeDetails"]],
      template: function PickupInfoContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, PickupInfoContainerComponent_cx_pickup_info_0_Template, 1, 1, "cx-pickup-info", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ctx.storesDetailsData);
        }
      },
      dependencies: [NgForOf, PickupInfoComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupInfoContainerComponent, [{
    type: Component,
    args: [{
      selector: "cx-pickup-info-container",
      standalone: false,
      template: '<cx-pickup-info\n  *ngFor="let storeDetailsData of storesDetailsData"\n  [storeDetails]="storeDetailsData"\n></cx-pickup-info>\n'
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: PickupLocationsSearchFacade
  }], null);
})();
var PickupInfoContainerModule = class _PickupInfoContainerModule {
  static {
    this.ɵfac = function PickupInfoContainerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupInfoContainerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PickupInfoContainerModule,
      declarations: [PickupInfoContainerComponent],
      imports: [CommonModule, PickupInfoModule],
      exports: [PickupInfoContainerComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideOutlet({
        id: CartOutlets.PICKUP_INFO,
        position: OutletPosition.REPLACE,
        component: PickupInfoContainerComponent
      })],
      imports: [CommonModule, PickupInfoModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupInfoContainerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PickupInfoModule],
      exports: [PickupInfoContainerComponent],
      declarations: [PickupInfoContainerComponent],
      providers: [provideOutlet({
        id: CartOutlets.PICKUP_INFO,
        position: OutletPosition.REPLACE,
        component: PickupInfoContainerComponent
      })]
    }]
  }], null, null);
})();
var DeliveryPointsService = class _DeliveryPointsService {
  constructor(activeCartFacade, pickupLocationsSearchFacade, orderFacade) {
    this.activeCartFacade = activeCartFacade;
    this.pickupLocationsSearchFacade = pickupLocationsSearchFacade;
    this.orderFacade = orderFacade;
  }
  /*
   * deliveryPointsOfService$ comprises arrays within an array.
   * It has an array of stores, and then for each store, an array of products to be collected from that store.
   * We need to get data from two different services. One of the services has the product data, ie the products to be picked up from in store.
   * This data only has the store name, no other information about the store eg address etc.
   * We then use another service to get data about the store. This service has two methods that must be called.
   * loadStoreDetails is called to make the api call. The data returned from this call populates an area of the ngrx store.
   * Then getStoreDetails is used to get store detail data from the relevant slice of state in the ngrx store.
   * So the below:
   * - gets active cart
   * - gets items in the cart
   * - gets those items that are to be picked up from a store
   * - get the data about each store
   *
   * Some of the below involves turning array data into lookup object data simply because this is easier to deal with
   */
  getDeliveryPointsOfServiceFromCart() {
    return this.activeCartFacade.getPickupEntries().pipe(filter((entries) => !!entries && !!entries.length), switchMap((entries) => this.getDeliveryPointsOfService(entries)));
  }
  getDeliveryPointsOfServiceFromOrder() {
    return this.orderFacade.getPickupEntries().pipe(filter((entries) => !!entries && !!entries.length), switchMap((entries) => this.getDeliveryPointsOfService(entries)));
  }
  getDeliveryPointsOfService(entries) {
    return of(entries).pipe(map((items) => items.filter((entry) => !!entry.deliveryPointOfService)), switchMap((elements) => iif(() => !!elements.length, of(elements).pipe(map((_elements) => {
      const COPY = [..._elements];
      COPY.sort((a, b) => a.deliveryPointOfService?.name?.localeCompare(getProperty(b.deliveryPointOfService, "name") || "") || 0);
      return COPY;
    }), map((sortedArray) => sortedArray.reduce((accumulator, value) => {
      const DELIVERY_POINT_OF_SERVICE = value.deliveryPointOfService?.name;
      const existingValue = accumulator[DELIVERY_POINT_OF_SERVICE] ? accumulator[DELIVERY_POINT_OF_SERVICE] : [];
      return __spreadProps(__spreadValues({}, accumulator), {
        [DELIVERY_POINT_OF_SERVICE]: [...existingValue, value]
      });
    }, {})), map((deliveryPointOfServiceMap) => Object.keys(deliveryPointOfServiceMap).map((key) => ({
      name: key,
      value: deliveryPointOfServiceMap[key]
    }))), tap((deliveryPointOfServiceMap) => deliveryPointOfServiceMap.map((deliveryPointOfService) => deliveryPointOfService.name).forEach((name) => this.pickupLocationsSearchFacade.loadStoreDetails(name))), mergeMap((deliveryPointOfServiceMap) => combineLatest(deliveryPointOfServiceMap.map((deliveryPointOfService) => deliveryPointOfService.name).map((name) => this.pickupLocationsSearchFacade.getStoreDetails(name))).pipe(map((storeDetails) => {
      const STORE_DETAILS_MAP = storeDetails.filter((_storeDetails) => !!_storeDetails).reduce((accumulator, value) => __spreadProps(__spreadValues({}, accumulator), {
        [value.name]: value
      }), {});
      return deliveryPointOfServiceMap.map((store) => __spreadProps(__spreadValues({}, store), {
        storeDetails: STORE_DETAILS_MAP[store.name]
      }));
    })))), of([]))));
  }
  static {
    this.ɵfac = function DeliveryPointsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeliveryPointsService)(ɵɵinject(ActiveCartFacade), ɵɵinject(PickupLocationsSearchFacade), ɵɵinject(OrderFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DeliveryPointsService,
      factory: _DeliveryPointsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeliveryPointsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: PickupLocationsSearchFacade
  }, {
    type: OrderFacade
  }], null);
})();
var PickUpItemsDetailsComponent = class _PickUpItemsDetailsComponent {
  constructor(component, deliveryPointsService) {
    this.component = component;
    this.deliveryPointsService = deliveryPointsService;
    this.ICON_TYPE = ICON_TYPE;
    useFeatureStyles("a11yQTY2Quantity");
  }
  ngOnInit() {
    this.component.data$.pipe(tap((data) => {
      this.showEdit = data.showEdit;
      this.context = data.context;
      this.itemsDetails = data.context === "order" ? this.deliveryPointsService.getDeliveryPointsOfServiceFromOrder() : this.deliveryPointsService.getDeliveryPointsOfServiceFromCart();
    }), take(1)).subscribe();
  }
  static {
    this.ɵfac = function PickUpItemsDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickUpItemsDetailsComponent)(ɵɵdirectiveInject(CmsComponentData), ɵɵdirectiveInject(DeliveryPointsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PickUpItemsDetailsComponent,
      selectors: [["cx-pick-up-in-store-items-details"]],
      inputs: {
        showEdit: "showEdit",
        itemsDetails: "itemsDetails"
      },
      standalone: false,
      decls: 3,
      vars: 6,
      consts: [[3, "ngClass"], [4, "ngIf"], ["class", "cx-pickup-items-details-heading d-lg-block d-xl-block", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "cx-pickup-items-details-heading", "d-lg-block", "d-xl-block"], [1, "cx-pickup-items-details"], [1, "cx-pickup-items-details-store-address"], [1, "cx-pickup-items-details-store-heading"], [3, "storeDetails"], [1, "cx-pickup-items-details-store-schedule"], ["class", "cx-pickup-items-details-edit-icon", 4, "ngIf"], [1, "row", "cx-delivery-pointof-service-item-header", 3, "ngClass"], [1, "col-md-7", "cx-image-container-header"], [1, "cx-price-header", "col-md-2"], ["class", "cx-quantity-header col-md-1", 4, "cxFeature"], [1, "cx-total-header", "col-md-2"], ["class", "cx-delivery-pointof-service-item", 4, "ngFor", "ngForOf"], [1, "cx-pickup-items-details-edit-icon"], [3, "routerLink"], [3, "type"], [1, "cx-quantity-header", "col-md-1"], [1, "cx-delivery-pointof-service-item"], [1, "col-2", "cx-image-container", "col-offset-1"], ["tabindex", "0"], ["format", "cartIcon", 3, "container"], [1, "cx-info", "col-9"], [1, "cx-info-container", "row"], ["class", "cx-name", 4, "ngIf"], ["class", "cx-code", 4, "ngIf"], ["class", "cx-price", 3, "ngClass", 4, "ngIf"], [1, "cx-quantity", 3, "ngClass"], [1, "cx-value"], ["class", "cx-label", "placement", "left", 3, "ngClass", "title", 4, "cxFeature"], ["class", "cx-total", 3, "ngClass", 4, "ngIf"], [1, "cx-name"], [1, "cx-name-value"], [1, "cx-code"], ["class", "cx-property", 4, "ngFor", "ngForOf"], [1, "cx-property"], ["class", "cx-label", 4, "ngIf"], [1, "cx-label"], [1, "cx-price", 3, "ngClass"], ["class", "cx-value", 4, "ngIf"], [1, "cx-label", 3, "ngClass"], ["placement", "left", 1, "cx-label", 3, "ngClass", "title"], [1, "cx-total", 3, "ngClass"]],
      template: function PickUpItemsDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, PickUpItemsDetailsComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
          ɵɵpipe(2, "async");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c9, ctx.context === "order"));
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx.itemsDetails));
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, RouterLink, IconComponent, StoreScheduleComponent, StoreAddressComponent, MediaComponent, AsyncPipe, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickUpItemsDetailsComponent, [{
    type: Component,
    args: [{
      selector: "cx-pick-up-in-store-items-details",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div [ngClass]="{ container: context === 'order' }">
  <ng-container *ngIf="itemsDetails | async as deliveryPointsOfService">
    <p
      *ngIf="deliveryPointsOfService.length"
      class="cx-pickup-items-details-heading d-lg-block d-xl-block"
    >
      {{ 'checkoutPickupInStore.heading' | cxTranslate }}
    </p>
    <div
      *ngFor="
        let deliveryPointOfService of deliveryPointsOfService;
        let index = index
      "
    >
      <div class="cx-pickup-items-details">
        <div>
          <div class="cx-pickup-items-details-store-address">
            <p class="cx-pickup-items-details-store-heading">
              {{ 'checkoutPickupInStore.storeItemHeading' | cxTranslate }}
              {{ index + 1 }}
            </p>
            <cx-store-address
              [storeDetails]="deliveryPointOfService?.storeDetails"
            ></cx-store-address>
          </div>
          <div class="cx-pickup-items-details-store-schedule">
            <cx-store-schedule
              [storeDetails]="deliveryPointOfService?.storeDetails"
            ></cx-store-schedule>
          </div>
          <div *ngIf="showEdit" class="cx-pickup-items-details-edit-icon">
            <a
              [attr.title]="'common.edit' | cxTranslate"
              [routerLink]="{ cxRoute: 'cart' } | cxUrl"
              ><cx-icon [type]="ICON_TYPE.PENCIL"></cx-icon
            ></a>
          </div>
        </div>
      </div>
      <div
        [ngClass]="'d-none d-md-flex'"
        class="row cx-delivery-pointof-service-item-header"
      >
        <div class="col-md-7 cx-image-container-header">
          {{ 'cartItems.item' | cxTranslate }}
        </div>
        <div class="cx-price-header col-md-2">
          {{ 'cartItems.itemPrice' | cxTranslate }}
        </div>
        <div
          *cxFeature="'a11yQTY2Quantity'"
          class="cx-quantity-header col-md-1"
        >
          {{ 'cartItems.quantityFull' | cxTranslate }}
        </div>
        <div
          *cxFeature="'!a11yQTY2Quantity'"
          class="cx-quantity-header col-md-1"
        >
          {{ 'cartItems.quantity' | cxTranslate }}
        </div>
        <div class="cx-total-header col-md-2">
          {{ 'cartItems.total' | cxTranslate }}
        </div>
      </div>
      <div
        class="cx-delivery-pointof-service-item"
        *ngFor="let item of deliveryPointOfService.value"
      >
        <div [ngClass]="'row'">
          <!-- Item Image -->
          <div class="col-2 cx-image-container col-offset-1">
            <a tabindex="0">
              <cx-media
                [container]="item.product?.images?.PRIMARY"
                format="cartIcon"
              ></cx-media>
            </a>
          </div>
          <!-- Item Information -->
          <div class="cx-info col-9">
            <div class="cx-info-container row">
              <!-- Item Description -->
              <div [ngClass]="'col-md-7 col-lg-7 col-xl-7'">
                <div *ngIf="item.product?.name" class="cx-name">
                  <p class="cx-name-value">{{ item.product?.name }}</p>
                </div>
                <div *ngIf="item.product?.code" class="cx-code">
                  {{ 'ID' }} {{ item.product?.code }}
                </div>

                <!-- Variants -->
                <ng-container *ngIf="item.product?.baseOptions?.length">
                  <div
                    *ngFor="
                      let variant of item.product?.baseOptions[0]?.selected
                        ?.variantOptionQualifiers
                    "
                    class="cx-property"
                  >
                    <div class="cx-label" *ngIf="variant.name && variant.value">
                      {{ variant.name }}: {{ variant.value }}
                    </div>
                  </div>
                </ng-container>
              </div>
              <!-- Item Price -->
              <div
                *ngIf="item.basePrice"
                class="cx-price"
                [ngClass]="'col-lg-2 col-md-2 col-sm-12 col-xs-12'"
              >
                <div *ngIf="item.basePrice" class="cx-value">
                  <span
                    class="cx-label"
                    [ngClass]="'d-md-none d-lg-none d-xl-none'"
                  >
                    {{ 'cartItems.itemPrice' | cxTranslate }}
                  </span>
                  {{ item.basePrice?.formattedValue }}
                </div>
              </div>
              <!-- Item Quantity -->
              <div
                class="cx-quantity"
                [ngClass]="'col-lg-2 col-md-2 col-sm-12 col-xs-12'"
              >
                <div class="cx-value">
                  <span
                    *cxFeature="'a11yQTY2Quantity'"
                    class="cx-label"
                    [ngClass]="'d-md-none d-lg-none d-xl-none'"
                    placement="left"
                    title="{{ 'cartItems.quantityTitle' | cxTranslate }}"
                  >
                    {{ 'cartItems.quantityFull' | cxTranslate }}
                  </span>
                  <span
                    *cxFeature="'!a11yQTY2Quantity'"
                    class="cx-label"
                    [ngClass]="'d-md-none d-lg-none d-xl-none'"
                    placement="left"
                    title="{{ 'cartItems.quantityTitle' | cxTranslate }}"
                  >
                    {{ 'cartItems.quantity' | cxTranslate }}
                  </span>
                  {{ item.quantity }}
                </div>
              </div>
              <!-- Total -->
              <div
                *ngIf="item.totalPrice"
                class="cx-total"
                [ngClass]="' col-md-1 col-xl-1 col-sm-12 col-xs-12'"
              >
                <div class="cx-value">
                  <span
                    class="cx-label"
                    [ngClass]="' d-md-none d-lg-none d-xl-none'"
                  >
                    {{ 'cartItems.total' | cxTranslate }}
                  </span>
                  {{ item.totalPrice.formattedValue }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ng-container>
</div>
`
    }]
  }], () => [{
    type: CmsComponentData
  }, {
    type: DeliveryPointsService
  }], {
    showEdit: [{
      type: Input
    }],
    itemsDetails: [{
      type: Input
    }]
  });
})();
var PickUpItemsDetailsModule = class _PickUpItemsDetailsModule {
  static {
    this.ɵfac = function PickUpItemsDetailsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickUpItemsDetailsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PickUpItemsDetailsModule,
      declarations: [PickUpItemsDetailsComponent],
      imports: [CommonModule, I18nModule, RouterModule, UrlModule, IconModule, StoreModule2, CardModule, MediaModule, ConfigModule],
      exports: [PickUpItemsDetailsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, RouterModule, UrlModule, IconModule, StoreModule2, CardModule, MediaModule, ConfigModule.withConfig({
        cmsComponents: {
          OrderConfirmationPickUpComponent: {
            component: PickUpItemsDetailsComponent,
            data: {
              showEdit: false,
              context: "order"
            }
          },
          CheckoutReviewPickup: {
            component: PickUpItemsDetailsComponent,
            data: {
              showEdit: true,
              context: "review"
            }
          },
          PickupInStoreDeliveryModeComponent: {
            component: PickUpItemsDetailsComponent,
            data: {
              showEdit: false,
              context: "deliveryMode"
            }
          }
        }
      })]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickUpItemsDetailsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, RouterModule, UrlModule, IconModule, StoreModule2, CardModule, MediaModule, ConfigModule.withConfig({
        cmsComponents: {
          OrderConfirmationPickUpComponent: {
            component: PickUpItemsDetailsComponent,
            data: {
              showEdit: false,
              context: "order"
            }
          },
          CheckoutReviewPickup: {
            component: PickUpItemsDetailsComponent,
            data: {
              showEdit: true,
              context: "review"
            }
          },
          PickupInStoreDeliveryModeComponent: {
            component: PickUpItemsDetailsComponent,
            data: {
              showEdit: false,
              context: "deliveryMode"
            }
          }
        }
      })],
      declarations: [PickUpItemsDetailsComponent],
      exports: [PickUpItemsDetailsComponent]
    }]
  }], null, null);
})();
var StoreListComponent = class _StoreListComponent {
  constructor(intendedPickupLocationService, pickupLocationsSearchService) {
    this.intendedPickupLocationService = intendedPickupLocationService;
    this.pickupLocationsSearchService = pickupLocationsSearchService;
    this.storeSelected = new EventEmitter();
  }
  ngOnInit() {
    this.stores$ = this.pickupLocationsSearchService.getSearchResults(this.productCode);
    this.hasSearchStarted$ = this.pickupLocationsSearchService.hasSearchStarted(this.productCode);
    this.isSearchRunning$ = this.pickupLocationsSearchService.isSearchRunning();
  }
  /**
   * Select the store to pickup from. This also sets the user's preferred store
   * the selected point of service.
   *
   * @param store Store to pickup from
   */
  onSelectStore(store) {
    const _a = store, {
      stockInfo: _
    } = _a, pointOfService = __objRest(_a, [
      "stockInfo"
    ]);
    this.intendedPickupLocationService.setIntendedLocation(this.productCode, __spreadProps(__spreadValues({}, pointOfService), {
      pickupOption: "pickup"
    }));
    this.storeSelected.emit();
  }
  static {
    this.ɵfac = function StoreListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreListComponent)(ɵɵdirectiveInject(IntendedPickupLocationFacade), ɵɵdirectiveInject(PickupLocationsSearchFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StoreListComponent,
      selectors: [["cx-store-list"]],
      inputs: {
        productCode: "productCode"
      },
      outputs: {
        storeSelected: "storeSelected"
      },
      standalone: false,
      decls: 5,
      vars: 6,
      consts: [["loading", ""], [4, "ngIf", "ngIfElse"], ["class", "container", 4, "ngIf"], [4, "ngIf"], [1, "container"], [1, "row"], ["role", "alert", 1, "cx-no-stores"], [3, "storeDetails", "storeSelected", 4, "ngFor", "ngForOf"], [3, "storeSelected", "storeDetails"], [1, "cx-spinner"]],
      template: function StoreListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, StoreListComponent_div_0_Template, 4, 4, "div", 1);
          ɵɵpipe(1, "async");
          ɵɵpipe(2, "async");
          ɵɵtemplate(3, StoreListComponent_ng_template_3_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r5 = ɵɵreference(4);
          ɵɵproperty("ngIf", !ɵɵpipeBind1(1, 2, ctx.isSearchRunning$) && ɵɵpipeBind1(2, 4, ctx.stores$))("ngIfElse", loading_r5);
        }
      },
      dependencies: [NgForOf, NgIf, SpinnerComponent, StoreComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreListComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-list",
      standalone: false,
      template: `<div
  *ngIf="
    !(isSearchRunning$ | async) && (stores$ | async) as stores;
    else loading
  "
>
  <div
    class="container"
    *ngIf="(hasSearchStarted$ | async) && stores.length === 0"
  >
    <div class="row">
      <span class="cx-no-stores" role="alert">
        {{ 'storeList.noStoresMessage' | cxTranslate }}
      </span>
    </div>
  </div>

  <div *ngIf="stores.length">
    <cx-store
      *ngFor="let store of stores"
      [storeDetails]="store"
      (storeSelected)="onSelectStore($event)"
    ></cx-store>
  </div>
</div>
<ng-template #loading>
  <div class="cx-spinner">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: IntendedPickupLocationFacade
  }, {
    type: PickupLocationsSearchFacade
  }], {
    productCode: [{
      type: Input
    }],
    storeSelected: [{
      type: Output
    }]
  });
})();
var CurrentLocationService = class _CurrentLocationService {
  constructor(windowRef) {
    this.windowRef = windowRef;
  }
  /**
   * Obtains the user's current position for the browser and calls the provided callback with it.
   *
   * @param successCallback - A callback to be called with the current location.
   * @param errorCallback - A callback to be called with the error.
   * @param options - Options for the current position API.
   */
  getCurrentLocation(successCallback, errorCallback, options) {
    this.windowRef.nativeWindow?.navigator?.geolocation?.getCurrentPosition(successCallback, errorCallback, options);
  }
  static {
    this.ɵfac = function CurrentLocationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CurrentLocationService)(ɵɵinject(WindowRef));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CurrentLocationService,
      factory: _CurrentLocationService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrentLocationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: WindowRef
  }], null);
})();
var StoreSearchComponent = class _StoreSearchComponent {
  constructor(currentLocationService) {
    this.currentLocationService = currentLocationService;
    this.hideOutOfStock = false;
    this.eventHideOutOfStock = new EventEmitter();
    this.findStores = new EventEmitter();
    this.showSpinner = new EventEmitter();
  }
  /** Initiate a free text location search */
  onFindStores(location) {
    this.findStores.emit({
      location
    });
    return false;
  }
  /** Toggle whether locations without stock should be displayed */
  onHideOutOfStock() {
    this.eventHideOutOfStock.emit(!this.hideOutOfStock);
  }
  /** Initiate a latitude and longitude search using the current browser location */
  useMyLocation() {
    this.showSpinner.emit(true);
    this.currentLocationService.getCurrentLocation(({
      coords: {
        latitude,
        longitude
      }
    }) => {
      this.findStores.emit({
        latitude,
        longitude
      });
      this.showSpinner.emit(false);
    });
  }
  static {
    this.ɵfac = function StoreSearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreSearchComponent)(ɵɵdirectiveInject(CurrentLocationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StoreSearchComponent,
      selectors: [["cx-store-search"]],
      inputs: {
        hideOutOfStock: "hideOutOfStock"
      },
      outputs: {
        eventHideOutOfStock: "eventHideOutOfStock",
        findStores: "findStores",
        showSpinner: "showSpinner"
      },
      standalone: false,
      decls: 23,
      vars: 16,
      consts: [["txtFindAStore", ""], [1, "cx-find-a-store-container"], [1, "cx-find-a-store-label"], ["for", "txtFindAStore"], [1, "cx-find-a-store-input"], ["type", "text", "id", "txtFindAStore", 1, "form-control", 3, "placeholder"], [1, "cx-find-a-store-button"], ["id", "btnFindStores", 1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "cx-find-a-store-link-container"], ["id", "lnkUseMyLocation", 1, "link", "cx-find-a-store-link", 3, "click"], [1, "cx-find-a-store-hide-out-of-stock"], [1, "cx-find-a-store-checkbox-group", "form-check"], ["for", "chkHideOutOfStock", 1, "cx-hide-out-of-stock-label", "form-check-label"], ["id", "chkHideOutOfStock", "type", "checkbox", 1, "form-check-input", 3, "click", "checked"]],
      template: function StoreSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "label", 3);
          ɵɵtext(3);
          ɵɵpipe(4, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(5, "div", 4);
          ɵɵelement(6, "input", 5, 0);
          ɵɵpipe(8, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(9, "div", 6)(10, "button", 7);
          ɵɵlistener("click", function StoreSearchComponent_Template_button_click_10_listener() {
            ɵɵrestoreView(_r1);
            const txtFindAStore_r2 = ɵɵreference(7);
            return ɵɵresetView(ctx.onFindStores(txtFindAStore_r2.value));
          });
          ɵɵtext(11);
          ɵɵpipe(12, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(13, "div", 8)(14, "button", 9);
          ɵɵlistener("click", function StoreSearchComponent_Template_button_click_14_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.useMyLocation());
          });
          ɵɵtext(15);
          ɵɵpipe(16, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(17, "div", 10)(18, "div", 11)(19, "label", 12);
          ɵɵtext(20);
          ɵɵpipe(21, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(22, "input", 13);
          ɵɵlistener("click", function StoreSearchComponent_Template_input_click_22_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onHideOutOfStock());
          });
          ɵɵelementEnd()()()();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 6, "storeSearch.findAStore"), " ");
          ɵɵadvance(3);
          ɵɵproperty("placeholder", ɵɵpipeBind1(8, 8, "storeSearch.searchPlaceholder"));
          ɵɵadvance(5);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 10, "storeSearch.findStores"), " ");
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(16, 12, "storeSearch.useMyLocation"), " ");
          ɵɵadvance(5);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(21, 14, "storeSearch.hideOutOfStockOptions"), " ");
          ɵɵadvance(2);
          ɵɵproperty("checked", ctx.hideOutOfStock);
        }
      },
      dependencies: [TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreSearchComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-search",
      standalone: false,
      template: `<div class="cx-find-a-store-container">
  <div class="cx-find-a-store-label">
    <label for="txtFindAStore">
      {{ 'storeSearch.findAStore' | cxTranslate }}
    </label>
  </div>
  <div class="cx-find-a-store-input">
    <input
      [placeholder]="'storeSearch.searchPlaceholder' | cxTranslate"
      class="form-control"
      type="text"
      id="txtFindAStore"
      #txtFindAStore
    />
  </div>
  <div class="cx-find-a-store-button">
    <button
      (click)="onFindStores(txtFindAStore.value)"
      class="btn btn-primary btn-block"
      id="btnFindStores"
    >
      {{ 'storeSearch.findStores' | cxTranslate }}
    </button>
  </div>
  <div class="cx-find-a-store-link-container">
    <button
      class="link cx-find-a-store-link"
      id="lnkUseMyLocation"
      (click)="useMyLocation()"
    >
      {{ 'storeSearch.useMyLocation' | cxTranslate }}
    </button>
  </div>
  <div class="cx-find-a-store-hide-out-of-stock">
    <div class="cx-find-a-store-checkbox-group form-check">
      <label
        class="cx-hide-out-of-stock-label form-check-label"
        for="chkHideOutOfStock"
      >
        {{ 'storeSearch.hideOutOfStockOptions' | cxTranslate }}
      </label>
      <input
        (click)="onHideOutOfStock()"
        [checked]="hideOutOfStock"
        class="form-check-input"
        id="chkHideOutOfStock"
        type="checkbox"
      />
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: CurrentLocationService
  }], {
    hideOutOfStock: [{
      type: Input
    }],
    eventHideOutOfStock: [{
      type: Output
    }],
    findStores: [{
      type: Output
    }],
    showSpinner: [{
      type: Output
    }]
  });
})();
var PickupOptionDialogComponent = class _PickupOptionDialogComponent {
  get focusConfig() {
    return {
      trap: false,
      trapTabOnly: true,
      block: true,
      autofocus: "input",
      focusOnEscape: true
    };
  }
  constructor(activeCartFacade, elementRef, intendedPickupLocationService, launchDialogService, pickupLocationsSearchService, pickupOptionFacade) {
    this.activeCartFacade = activeCartFacade;
    this.elementRef = elementRef;
    this.intendedPickupLocationService = intendedPickupLocationService;
    this.launchDialogService = launchDialogService;
    this.pickupLocationsSearchService = pickupLocationsSearchService;
    this.pickupOptionFacade = pickupOptionFacade;
    this.subscription = new Subscription();
    this.ICON_TYPE = ICON_TYPE;
    this.CLOSE_WITHOUT_SELECTION = "CLOSE_WITHOUT_SELECTION";
    this.LOCATION_SELECTED = "LOCATION_SELECTED";
    this.featureConfigService = inject(FeatureConfigService);
  }
  handleClick(event) {
    if (event.target.tagName === this.elementRef.nativeElement.tagName) {
      this.close(this.CLOSE_WITHOUT_SELECTION);
    }
  }
  ngOnInit() {
    this.subscription.add(this.launchDialogService.data$.subscribe(({
      productCode,
      entryNumber,
      quantity
    }) => {
      this.productCode = productCode;
      this.entryNumber = entryNumber;
      this.quantity = quantity;
    }));
    this.getHideOutOfStockState$ = this.pickupLocationsSearchService.getHideOutOfStock();
    this.subscription.add(this.pickupOptionFacade.getPageContext().subscribe((_data) => this.isPDP = _data === "PDP"));
    this.subscription.add(this.activeCartFacade.getActive().pipe(filter(cartWithIdAndUserId), tap((cart) => {
      this.cartId = cart.user.uid === "anonymous" ? cart.guid : cart.code;
      this.userId = cart.user.uid;
    })).subscribe());
  }
  /**
   * Find the pickup points of service nearest to a place based on given search parameters.
   * @param locationSearchParams The latitude and longitude or free text search query to be used
   */
  onFindStores(locationSearchParams) {
    this.pickupLocationsSearchService.startSearch(__spreadValues({
      productCode: this.productCode
    }, locationSearchParams));
  }
  /**
   * Toggle whether locations without store should be shown or hidden.
   */
  onHideOutOfStock() {
    this.pickupLocationsSearchService.toggleHideOutOfStock();
  }
  /**
   * Close the dialog window. This has additional side effects based upon whether
   * we are making a selection on the PDP or in the cart/during checkout.
   *
   * On the PDP:
   *
   * If the dialog is closed without making a selection, then the radio buttons
   * are left on pickup if there already exists an intended pickup location or
   * to delivery if not.
   *
   * Not on the PDP:
   *
   * If the window is closed after making a selection, then the cart is updated
   * to the the new selection.
   *
   * @param reason The reason the dialog window was closed
   */
  close(reason) {
    this.launchDialogService.closeDialog(reason);
    if (reason === this.CLOSE_WITHOUT_SELECTION) {
      if (!this.featureConfigService.isEnabled("a11yPickupOptionsTabs")) {
        this.intendedPickupLocationService.getIntendedLocation(this.productCode).pipe(filter((store) => typeof store !== "undefined"), map((store) => store), filter((store) => !store.name), take(1), tap(() => this.intendedPickupLocationService.setPickupOption(this.productCode, "delivery"))).subscribe();
        this.pickupOptionFacade.setPickupOption(this.entryNumber, "delivery");
      }
      return;
    }
    this.subscription.add(this.intendedPickupLocationService.getIntendedLocation(this.productCode).pipe(filter((store) => !this.isPDP && !!store), tap((store) => this.activeCartFacade.updateEntry(this.entryNumber, this.quantity, store.name, false))).subscribe());
  }
  /**
   * Change if the loading spinner should be displayed or not.
   * @param showSpinner Whether the loading spinner should be displayed
   */
  showSpinner(showSpinner) {
    this.loading = showSpinner;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static {
    this.ɵfac = function PickupOptionDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupOptionDialogComponent)(ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(IntendedPickupLocationFacade), ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(PickupLocationsSearchFacade), ɵɵdirectiveInject(PickupOptionFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PickupOptionDialogComponent,
      selectors: [["cx-pickup-option-dialog"]],
      hostBindings: function PickupOptionDialogComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function PickupOptionDialogComponent_click_HostBindingHandler($event) {
            return ctx.handleClick($event);
          });
        }
      },
      standalone: false,
      decls: 16,
      vars: 16,
      consts: [["role", "dialog", "aria-modal", "true", "aria-labelledby", "cx-pickup-option-dialog-title", 1, "modal-dialog", "modal-dialog-centered", "cx-pickup-option-dialog", "cx-modal-container", 3, "esc", "cxFocus"], [1, "modal-content", "cx-dialog-content"], [1, "modal-header", "cx-dialog-header"], ["id", "cx-pickup-option-dialog-title", 1, "cx-dialog-title"], ["type", "button", 1, "cx-dialog-close", "close", 3, "click"], ["aria-hidden", "true"], [3, "type"], [1, "cx-dialog-body", "modal-body"], [3, "findStores", "showSpinner", "eventHideOutOfStock", "hideOutOfStock"], [3, "storeSelected", "productCode"], [4, "ngIf"], [1, "cx-spinner"]],
      template: function PickupOptionDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵlistener("esc", function PickupOptionDialogComponent_Template_div_esc_0_listener() {
            return ctx.close(ctx.CLOSE_WITHOUT_SELECTION);
          });
          ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "h3", 3);
          ɵɵtext(4);
          ɵɵpipe(5, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(6, "button", 4);
          ɵɵpipe(7, "cxTranslate");
          ɵɵpipe(8, "cxTranslate");
          ɵɵlistener("click", function PickupOptionDialogComponent_Template_button_click_6_listener() {
            return ctx.close(ctx.CLOSE_WITHOUT_SELECTION);
          });
          ɵɵelementStart(9, "span", 5);
          ɵɵelement(10, "cx-icon", 6);
          ɵɵelementEnd()()();
          ɵɵelementStart(11, "section", 7)(12, "cx-store-search", 8);
          ɵɵpipe(13, "async");
          ɵɵlistener("findStores", function PickupOptionDialogComponent_Template_cx_store_search_findStores_12_listener($event) {
            return ctx.onFindStores($event);
          })("showSpinner", function PickupOptionDialogComponent_Template_cx_store_search_showSpinner_12_listener($event) {
            return ctx.showSpinner($event);
          })("eventHideOutOfStock", function PickupOptionDialogComponent_Template_cx_store_search_eventHideOutOfStock_12_listener() {
            return ctx.onHideOutOfStock();
          });
          ɵɵelementEnd();
          ɵɵelementStart(14, "cx-store-list", 9);
          ɵɵlistener("storeSelected", function PickupOptionDialogComponent_Template_cx_store_list_storeSelected_14_listener() {
            return ctx.close(ctx.LOCATION_SELECTED);
          });
          ɵɵelementEnd();
          ɵɵtemplate(15, PickupOptionDialogComponent_div_15_Template, 3, 0, "div", 10);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵproperty("cxFocus", ctx.focusConfig);
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 8, "pickupOptionDialog.modalHeader"), " ");
          ɵɵadvance(2);
          ɵɵattribute("aria-label", ɵɵpipeBind1(7, 10, "pickupOptionDialog.close"))("title", ɵɵpipeBind1(8, 12, "pickupOptionDialog.close"));
          ɵɵadvance(4);
          ɵɵproperty("type", ctx.ICON_TYPE.CLOSE);
          ɵɵadvance(2);
          ɵɵproperty("hideOutOfStock", ɵɵpipeBind1(13, 14, ctx.getHideOutOfStockState$));
          ɵɵadvance(2);
          ɵɵproperty("productCode", ctx.productCode);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.loading);
        }
      },
      dependencies: [NgIf, IconComponent, FocusDirective, SpinnerComponent, StoreListComponent, StoreSearchComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupOptionDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-pickup-option-dialog",
      standalone: false,
      template: `<div
  class="modal-dialog modal-dialog-centered cx-pickup-option-dialog cx-modal-container"
  [cxFocus]="focusConfig"
  (esc)="close(CLOSE_WITHOUT_SELECTION)"
  role="dialog"
  aria-modal="true"
  aria-labelledby="cx-pickup-option-dialog-title"
>
  <div class="modal-content cx-dialog-content">
    <!-- Modal Header -->
    <div class="modal-header cx-dialog-header">
      <h3 id="cx-pickup-option-dialog-title" class="cx-dialog-title">
        {{ 'pickupOptionDialog.modalHeader' | cxTranslate }}
      </h3>

      <button
        (click)="close(CLOSE_WITHOUT_SELECTION)"
        class="cx-dialog-close close"
        [attr.aria-label]="'pickupOptionDialog.close' | cxTranslate"
        [attr.title]="'pickupOptionDialog.close' | cxTranslate"
        type="button"
      >
        <span aria-hidden="true">
          <cx-icon [type]="ICON_TYPE.CLOSE"></cx-icon>
        </span>
      </button>
    </div>

    <!-- Modal Body -->
    <section class="cx-dialog-body modal-body">
      <cx-store-search
        [hideOutOfStock]="getHideOutOfStockState$ | async"
        (findStores)="onFindStores($event)"
        (showSpinner)="showSpinner($event)"
        (eventHideOutOfStock)="onHideOutOfStock()"
      ></cx-store-search>
      <cx-store-list
        [productCode]="productCode"
        (storeSelected)="close(LOCATION_SELECTED)"
      ></cx-store-list>
      <div *ngIf="loading">
        <div class="cx-spinner">
          <cx-spinner></cx-spinner>
        </div>
      </div>
    </section>
  </div>
</div>
`
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: ElementRef
  }, {
    type: IntendedPickupLocationFacade
  }, {
    type: LaunchDialogService
  }, {
    type: PickupLocationsSearchFacade
  }, {
    type: PickupOptionFacade
  }], {
    handleClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var defaultPickupOptionsDialogLayoutConfig = {
  launch: {
    PICKUP_IN_STORE: {
      inlineRoot: true,
      component: PickupOptionDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var StoreListModule = class _StoreListModule {
  static {
    this.ɵfac = function StoreListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _StoreListModule,
      declarations: [StoreListComponent],
      imports: [CommonModule, I18nModule, IconModule, SpinnerModule, StoreModule2, FeaturesConfigModule],
      exports: [StoreListComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, IconModule, SpinnerModule, StoreModule2, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreListModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, IconModule, SpinnerModule, StoreModule2, FeaturesConfigModule],
      exports: [StoreListComponent],
      declarations: [StoreListComponent]
    }]
  }], null, null);
})();
var StoreSearchModule = class _StoreSearchModule {
  static {
    this.ɵfac = function StoreSearchModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreSearchModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _StoreSearchModule,
      declarations: [StoreSearchComponent],
      imports: [CommonModule, I18nModule],
      exports: [StoreSearchComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreSearchModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule],
      exports: [StoreSearchComponent],
      declarations: [StoreSearchComponent],
      providers: []
    }]
  }], null, null);
})();
var PickupOptionDialogModule = class _PickupOptionDialogModule {
  static {
    this.ɵfac = function PickupOptionDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupOptionDialogModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PickupOptionDialogModule,
      declarations: [PickupOptionDialogComponent],
      imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule, SpinnerModule, StoreListModule, StoreSearchModule, FeaturesConfigModule],
      exports: [PickupOptionDialogComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule, SpinnerModule, StoreListModule, StoreSearchModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupOptionDialogModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule, SpinnerModule, StoreListModule, StoreSearchModule, FeaturesConfigModule],
      declarations: [PickupOptionDialogComponent],
      exports: [PickupOptionDialogComponent]
    }]
  }], null, null);
})();
var PickupInStoreComponentsModule = class _PickupInStoreComponentsModule {
  static {
    this.ɵfac = function PickupInStoreComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupInStoreComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PickupInStoreComponentsModule,
      imports: [ReactiveFormsModule, PickupInfoContainerModule, MyPreferredStoreModule, PickUpItemsDetailsModule, PdpPickupOptionsContainerModule, OutletModule, CartPickupOptionsContainerModule, OrderConsignmentContainerModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultPickupOptionsDialogLayoutConfig)],
      imports: [ReactiveFormsModule, PickupInfoContainerModule, MyPreferredStoreModule, PickUpItemsDetailsModule, PdpPickupOptionsContainerModule, OutletModule.forChild(), CartPickupOptionsContainerModule, OrderConsignmentContainerModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupInStoreComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [ReactiveFormsModule, PickupInfoContainerModule, MyPreferredStoreModule, PickUpItemsDetailsModule, PdpPickupOptionsContainerModule, OutletModule.forChild(), CartPickupOptionsContainerModule, OrderConsignmentContainerModule],
      providers: [provideDefaultConfig(defaultPickupOptionsDialogLayoutConfig)]
    }]
  }], null, null);
})();

// node_modules/@spartacus/pickup-in-store/fesm2022/spartacus-pickup-in-store-occ.mjs
var defaultOccPickupLocationConfig = {
  backend: {
    occ: {
      endpoints: {
        storeDetails: "stores/${storeName}"
      }
    }
  }
};
var defaultOccStockConfig = {
  backend: {
    occ: {
      endpoints: {
        stock: "products/${productCode}/stock",
        stockAtStore: "products/${productCode}/stock/${storeName}"
      }
    }
  }
};
var OccPickupLocationAdapter = class _OccPickupLocationAdapter {
  constructor(http, occEndpointsService) {
    this.http = http;
    this.occEndpointsService = occEndpointsService;
    this.logger = inject(LoggerService);
  }
  getStoreDetails(storeName) {
    return this.http.get(this.occEndpointsService.buildUrl("storeDetails", {
      urlParams: {
        storeName
      },
      queryParams: {
        fields: "FULL"
      }
    })).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  static {
    this.ɵfac = function OccPickupLocationAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccPickupLocationAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccPickupLocationAdapter,
      factory: _OccPickupLocationAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccPickupLocationAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }], null);
})();
var OccStockAdapter = class _OccStockAdapter {
  constructor(http, occEndpointsService) {
    this.http = http;
    this.occEndpointsService = occEndpointsService;
    this.logger = inject(LoggerService);
  }
  loadStockLevels(productCode, location) {
    return this.http.get(this.occEndpointsService.buildUrl("stock", {
      urlParams: {
        productCode
      },
      queryParams: __spreadProps(__spreadValues({}, location), {
        fields: "FULL"
      })
    })).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  loadStockLevelAtStore(productCode, storeName) {
    return this.http.get(this.occEndpointsService.buildUrl("stockAtStore", {
      urlParams: {
        productCode,
        storeName
      }
    })).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  static {
    this.ɵfac = function OccStockAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccStockAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccStockAdapter,
      factory: _OccStockAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccStockAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }], null);
})();
var PickupInStoreOccModule = class _PickupInStoreOccModule {
  static {
    this.ɵfac = function PickupInStoreOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupInStoreOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PickupInStoreOccModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccPickupLocationConfig), provideDefaultConfig(defaultOccStockConfig), {
        provide: PickupLocationAdapter,
        useClass: OccPickupLocationAdapter
      }, {
        provide: StockAdapter,
        useClass: OccStockAdapter
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupInStoreOccModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig(defaultOccPickupLocationConfig), provideDefaultConfig(defaultOccStockConfig), {
        provide: PickupLocationAdapter,
        useClass: OccPickupLocationAdapter
      }, {
        provide: StockAdapter,
        useClass: OccStockAdapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/pickup-in-store/fesm2022/spartacus-pickup-in-store.mjs
var PickupInStoreModule = class _PickupInStoreModule {
  static {
    this.ɵfac = function PickupInStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupInStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PickupInStoreModule,
      imports: [PickupInStoreComponentsModule, PickupInStoreCoreModule, PickupInStoreOccModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [PickupInStoreComponentsModule, PickupInStoreCoreModule, PickupInStoreOccModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupInStoreModule, [{
    type: NgModule,
    args: [{
      imports: [PickupInStoreComponentsModule, PickupInStoreCoreModule, PickupInStoreOccModule]
    }]
  }], null, null);
})();
export {
  PickupInStoreModule
};
//# sourceMappingURL=@spartacus_pickup-in-store.js.map
