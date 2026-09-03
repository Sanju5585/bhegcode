import {
  GOOGLE_MAPS_DEVELOPMENT_KEY_CONFIG,
  StoreFinderFacade
} from "./chunk-MGG5WRXC.js";
import {
  Config,
  GlobalMessageService,
  GlobalMessageType,
  LoggerService,
  RoutingService,
  ScriptLoader,
  WindowRef,
  provideDefaultConfig,
  siteContextGroup_actions,
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
  isPlatformBrowser
} from "./chunk-5AFE3VT7.js";
import {
  Inject,
  Injectable,
  InjectionToken,
  NgModule,
  PLATFORM_ID,
  inject,
  isDevMode,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import {
  catchError,
  filter,
  map,
  mergeMap,
  of,
  withLatestFrom
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/storefinder/fesm2022/spartacus-storefinder-core.mjs
var StoreFinderConfig = class _StoreFinderConfig {
  static {
    this.ɵfac = function StoreFinderConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StoreFinderConfig,
      factory: function StoreFinderConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _StoreFinderConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var StoreFinderAdapter = class {
};
var StoreFinderConnector = class _StoreFinderConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  search(query, searchConfig, longitudeLatitude, radius) {
    return this.adapter.search(query, searchConfig, longitudeLatitude, radius);
  }
  getCounts() {
    return this.adapter.loadCounts();
  }
  get(storeId) {
    return this.adapter.load(storeId);
  }
  static {
    this.ɵfac = function StoreFinderConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderConnector)(ɵɵinject(StoreFinderAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StoreFinderConnector,
      factory: _StoreFinderConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: StoreFinderAdapter
  }], null);
})();
var STORE_FINDER_SEARCH_PAGE_NORMALIZER = new InjectionToken("StoreFinderSearchPageNormalizer");
var STORE_COUNT_NORMALIZER = new InjectionToken("StoreCountNormalizer");
var STORE_FINDER_FEATURE = "stores";
var STORE_FINDER_DATA = "[StoreFinder] Store Finder Data";
var FIND_STORES_ON_HOLD = "[StoreFinder] On Hold";
var FIND_STORES = "[StoreFinder] Find Stores";
var FIND_STORES_FAIL = "[StoreFinder] Find Stores Fail";
var FIND_STORES_SUCCESS = "[StoreFinder] Find Stores Success";
var FIND_STORE_BY_ID = "[StoreFinder] Find a Store by Id";
var FIND_STORE_BY_ID_FAIL = "[StoreFinder] Find a Store by Id Fail";
var FIND_STORE_BY_ID_SUCCESS = "[StoreFinder] Find a Store by Id Success";
var FindStoresOnHold = class extends utilsGroup.LoaderLoadAction {
  constructor() {
    super(STORE_FINDER_DATA);
    this.type = FIND_STORES_ON_HOLD;
  }
};
var FindStores = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(STORE_FINDER_DATA);
    this.payload = payload;
    this.type = FIND_STORES;
  }
};
var FindStoresFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(STORE_FINDER_DATA, payload);
    this.payload = payload;
    this.type = FIND_STORES_FAIL;
  }
};
var FindStoresSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(STORE_FINDER_DATA);
    this.payload = payload;
    this.type = FIND_STORES_SUCCESS;
  }
};
var FindStoreById = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(STORE_FINDER_DATA);
    this.payload = payload;
    this.type = FIND_STORE_BY_ID;
  }
};
var FindStoreByIdFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(STORE_FINDER_DATA, payload);
    this.payload = payload;
    this.type = FIND_STORE_BY_ID_FAIL;
  }
};
var FindStoreByIdSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(STORE_FINDER_DATA);
    this.payload = payload;
    this.type = FIND_STORE_BY_ID_SUCCESS;
  }
};
var VIEW_ALL_STORES = "[StoreFinder] View All Stores";
var VIEW_ALL_STORES_FAIL = "[StoreFinder] View All Stores Fail";
var VIEW_ALL_STORES_SUCCESS = "[StoreFinder] View All Stores Success";
var CLEAR_STORE_FINDER_DATA = "[StoreFinder] Clear Data";
var ViewAllStores = class extends utilsGroup.LoaderLoadAction {
  constructor() {
    super(STORE_FINDER_DATA);
    this.type = VIEW_ALL_STORES;
  }
};
var ViewAllStoresFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(STORE_FINDER_DATA, payload);
    this.payload = payload;
    this.type = VIEW_ALL_STORES_FAIL;
  }
};
var ViewAllStoresSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(STORE_FINDER_DATA);
    this.payload = payload;
    this.type = VIEW_ALL_STORES_SUCCESS;
  }
};
var ClearStoreFinderData = class {
  constructor() {
    this.type = CLEAR_STORE_FINDER_DATA;
  }
};
var storeFinderGroup_actions = Object.freeze({
  __proto__: null,
  CLEAR_STORE_FINDER_DATA,
  ClearStoreFinderData,
  FIND_STORES,
  FIND_STORES_FAIL,
  FIND_STORES_ON_HOLD,
  FIND_STORES_SUCCESS,
  FIND_STORE_BY_ID,
  FIND_STORE_BY_ID_FAIL,
  FIND_STORE_BY_ID_SUCCESS,
  FindStoreById,
  FindStoreByIdFail,
  FindStoreByIdSuccess,
  FindStores,
  FindStoresFail,
  FindStoresOnHold,
  FindStoresSuccess,
  VIEW_ALL_STORES,
  VIEW_ALL_STORES_FAIL,
  VIEW_ALL_STORES_SUCCESS,
  ViewAllStores,
  ViewAllStoresFail,
  ViewAllStoresSuccess
});
var getStoreFinderState = createFeatureSelector(STORE_FINDER_FEATURE);
var getFindStoresState = createSelector(getStoreFinderState, (storesState) => storesState.findStores);
var getFindStoresEntities = createSelector(getFindStoresState, (state) => utilsGroup.loaderValueSelector(state));
var getStoresLoading = createSelector(getFindStoresState, (state) => utilsGroup.loaderLoadingSelector(state));
var getStoresSuccess = createSelector(getFindStoresState, (state) => utilsGroup.loaderSuccessSelector(state));
var getViewAllStoresState = createSelector(getStoreFinderState, (storesState) => storesState.viewAllStores);
var getViewAllStoresEntities = createSelector(getViewAllStoresState, (state) => utilsGroup.loaderValueSelector(state));
var getViewAllStoresLoading = createSelector(getViewAllStoresState, (state) => utilsGroup.loaderLoadingSelector(state));
var storeFinderGroup_selectors = Object.freeze({
  __proto__: null,
  getFindStoresEntities,
  getFindStoresState,
  getStoresLoading,
  getStoresSuccess,
  getViewAllStoresEntities,
  getViewAllStoresLoading,
  getViewAllStoresState
});
var StoreFinderService = class _StoreFinderService {
  constructor(store, winRef, globalMessageService, routingService, platformId) {
    this.store = store;
    this.winRef = winRef;
    this.globalMessageService = globalMessageService;
    this.routingService = routingService;
    this.platformId = platformId;
    this.geolocationWatchId = null;
    this.subscription = new Subscription();
    this.reloadStoreEntitiesOnContextChange();
  }
  /**
   * Returns boolean observable for store's loading state
   */
  getStoresLoading() {
    return this.store.pipe(select(getStoresLoading));
  }
  /**
   * Returns boolean observable for store's success state
   */
  getStoresLoaded() {
    return this.store.pipe(select(getStoresSuccess));
  }
  /**
   * Returns observable for store's entities
   * CXSPA-4871: The return value of this method signature is wrong, should be StoreFinderSearchPage.
   */
  getFindStoresEntities() {
    return this.store.pipe(select(getFindStoresEntities), map((data) => data.findStoresEntities));
  }
  /**
   * Returns observable for a single store by Id
   */
  getFindStoreEntityById() {
    return this.store.pipe(select(getFindStoresEntities), map((data) => data.findStoreEntityById));
  }
  /**
   * Returns boolean observable for view all store's loading state
   */
  getViewAllStoresLoading() {
    return this.store.pipe(select(getViewAllStoresLoading));
  }
  /**
   * Returns observable for view all store's entities
   */
  getViewAllStoresEntities() {
    return this.store.pipe(select(getViewAllStoresEntities), map((data) => data.viewAllStoresEntities));
  }
  /**
   * Store finding action functionality
   * @param queryText text query
   * @param searchConfig search configuration
   * @param longitudeLatitude longitude and latitude coordinates
   * @param countryIsoCode country ISO code
   * @param useMyLocation current location coordinates
   * @param radius radius of the scope from the center point
   */
  findStoresAction(queryText, searchConfig, longitudeLatitude, countryIsoCode, useMyLocation, radius) {
    if (useMyLocation && this.winRef.nativeWindow) {
      this.clearWatchGeolocation(new FindStoresOnHold());
      this.geolocationWatchId = this.winRef.nativeWindow.navigator.geolocation.watchPosition((pos) => {
        const position = {
          longitude: pos.coords.longitude,
          latitude: pos.coords.latitude
        };
        this.clearWatchGeolocation(new FindStores({
          queryText,
          searchConfig,
          longitudeLatitude: position,
          countryIsoCode,
          radius
        }));
      }, () => {
        this.globalMessageService.add({
          key: "storeFinder.geolocationNotEnabled"
        }, GlobalMessageType.MSG_TYPE_ERROR);
        this.routingService.go(["/store-finder"]);
      });
    } else {
      this.clearWatchGeolocation(new FindStores({
        queryText,
        searchConfig,
        longitudeLatitude,
        countryIsoCode,
        radius
      }));
    }
  }
  /**
   * View all stores
   */
  viewAllStores() {
    this.clearWatchGeolocation(new ViewAllStores());
  }
  /**
   * View all stores by id
   * @param storeId store id
   */
  viewStoreById(storeId) {
    this.clearWatchGeolocation(new FindStoreById({
      storeId
    }));
  }
  clearWatchGeolocation(callbackAction) {
    if (this.geolocationWatchId !== null) {
      this.winRef.nativeWindow?.navigator.geolocation.clearWatch(this.geolocationWatchId);
      this.geolocationWatchId = null;
    }
    this.store.dispatch(callbackAction);
  }
  isEmpty(store) {
    return !store || typeof store === "object" && Object.keys(store).length === 0;
  }
  /**
   * Reload store data when store entities are empty because of the context change
   */
  reloadStoreEntitiesOnContextChange() {
    if (isPlatformBrowser(this.platformId) || !this.platformId) {
      this.subscription = this.getFindStoresEntities().pipe(filter((data) => this.isEmpty(data)), withLatestFrom(this.getStoresLoading(), this.getStoresLoaded(), this.routingService.getParams())).subscribe(([, loading, loaded, routeParams]) => {
        if (!loading && !loaded) {
          if (routeParams.country && !routeParams.store) {
            this.callFindStoresAction(routeParams);
          }
          if (routeParams.store) {
            this.viewStoreById(routeParams.store);
          }
        }
      });
    }
  }
  callFindStoresAction(routeParams) {
    this.findStoresAction("", {
      pageSize: -1
    }, void 0, routeParams.country);
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  /**
   * @deprecated Please use StoreLocationService instead,
   * Returns store latitude
   * @param location store location
   */
  getStoreLatitude(location) {
    return location?.geoPoint?.latitude;
  }
  /**
   * @deprecated Please use StoreLocationService instead,
   * Returns store longitude
   * @param location store location
   */
  getStoreLongitude(location) {
    return location?.geoPoint?.longitude;
  }
  /**
   * @deprecated Please use StoreLocationService instead,
   * Generates a link leading to the directions of the given store location
   * @param location store location
   * @returns URL for directions to the store
   */
  getDirections(location) {
    const url = "https://www.google.com/maps/dir/Current+Location/";
    const latitude = this.getStoreLatitude(location);
    const longitude = this.getStoreLongitude(location);
    return url + latitude + "," + longitude;
  }
  static {
    this.ɵfac = function StoreFinderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderService)(ɵɵinject(Store), ɵɵinject(WindowRef), ɵɵinject(GlobalMessageService), ɵɵinject(RoutingService), ɵɵinject(PLATFORM_ID));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StoreFinderService,
      factory: _StoreFinderService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: WindowRef
  }, {
    type: GlobalMessageService
  }, {
    type: RoutingService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var facadeProviders = [StoreFinderService, {
  provide: StoreFinderFacade,
  useExisting: StoreFinderService
}];
var GoogleMapRendererService = class _GoogleMapRendererService {
  constructor(config, storeFinderService, scriptLoader) {
    this.config = config;
    this.storeFinderService = storeFinderService;
    this.scriptLoader = scriptLoader;
    this.googleMap = null;
    this.logger = inject(LoggerService);
  }
  /**
   * Renders google map on the given element and draws markers on it.
   * If map already exists it will use an existing map otherwise it will create one
   * @param mapElement HTML element inside of which the map will be displayed
   * @param locations array containign geo data to be displayed on the map
   * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
   */
  renderMap(mapElement, locations, selectMarkerHandler) {
    if (this.config.googleMaps?.apiKey) {
      if (Object.entries(locations[Object.keys(locations)[0]]).length > 0) {
        if (this.googleMap === null) {
          const apiKey = this.config.googleMaps.apiKey === GOOGLE_MAPS_DEVELOPMENT_KEY_CONFIG ? "" : this.config.googleMaps.apiKey;
          this.scriptLoader.embedScript({
            src: this.config.googleMaps.apiUrl,
            params: {
              key: apiKey
            },
            attributes: {
              type: "text/javascript"
            },
            callback: () => {
              this.drawMap(mapElement, locations, selectMarkerHandler);
            }
          });
        } else {
          this.drawMap(mapElement, locations, selectMarkerHandler);
        }
      }
    } else {
      if (isDevMode()) {
        this.logger.warn("A Google Maps api key is required in the store finder configuration to display the Google map.");
      }
    }
  }
  /**
   * Centers the map to the given point
   * @param latitute latitude of the new center
   * @param longitude longitude of the new center
   */
  centerMap(latitute, longitude) {
    this.googleMap.panTo({
      lat: latitute,
      lng: longitude
    });
    this.googleMap.setZoom(this.config.googleMaps.selectedMarkerScale);
  }
  /**
   * Defines and returns {@link google.maps.LatLng} representing a point where the map will be centered
   * @param locations list of locations
   */
  defineMapCenter(locations) {
    return new google.maps.LatLng(this.storeFinderService.getStoreLatitude(locations[0]), this.storeFinderService.getStoreLongitude(locations[0]));
  }
  /**
   * Creates google map inside if the given HTML element centered to the given point
   * @param mapElement {@link HTMLElement} inside of which the map will be created
   * @param mapCenter {@link google.maps.LatLng} the point where the map will be centered
   */
  initMap(mapElement, mapCenter) {
    const gestureOption = "greedy";
    const mapProp = {
      center: mapCenter,
      zoom: this.config.googleMaps.scale,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      gestureHandling: gestureOption
    };
    this.googleMap = new google.maps.Map(mapElement, mapProp);
  }
  /**
   * Erases the current map's markers and create a new one based on the given locations
   * @param locations array of locations to be displayed on the map
   * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
   */
  createMarkers(locations, selectMarkerHandler) {
    this.markers = [];
    locations.forEach((element, index) => {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(this.storeFinderService.getStoreLatitude(element), this.storeFinderService.getStoreLongitude(element)),
        label: index + 1 + ""
      });
      this.markers.push(marker);
      marker.setMap(this.googleMap);
      marker.addListener("mouseover", function() {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      });
      marker.addListener("mouseout", function() {
        marker.setAnimation(null);
      });
      if (selectMarkerHandler) {
        marker.addListener("click", function() {
          selectMarkerHandler(index);
        });
      }
    });
  }
  /**
   * Initialize and draw the map
   * @param mapElement {@link HTMLElement} inside of which the map will be drawn
   * @param locations array of locations to be displayed on the map
   * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
   */
  drawMap(mapElement, locations, selectMarkerHandler) {
    this.initMap(mapElement, this.defineMapCenter(locations));
    this.createMarkers(locations, selectMarkerHandler);
  }
  static {
    this.ɵfac = function GoogleMapRendererService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GoogleMapRendererService)(ɵɵinject(StoreFinderConfig), ɵɵinject(StoreFinderService), ɵɵinject(ScriptLoader));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GoogleMapRendererService,
      factory: _GoogleMapRendererService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleMapRendererService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: StoreFinderConfig
  }, {
    type: StoreFinderService
  }, {
    type: ScriptLoader
  }], null);
})();
var StoreLocationService = class _StoreLocationService {
  /**
   * Returns store latitude
   * @param location store location
   */
  getStoreLatitude(location) {
    return location?.geoPoint?.latitude;
  }
  /**
   * Returns store longitude
   * @param location store location
   */
  getStoreLongitude(location) {
    return location?.geoPoint?.longitude;
  }
  /**
   * Generates a link leading to the directions of the given store location
   * @param location store location
   * @returns URL for directions to the store
   */
  getDirections(location) {
    const url = "https://www.google.com/maps/dir/Current+Location/";
    const latitude = this.getStoreLatitude(location);
    const longitude = this.getStoreLongitude(location);
    return url + latitude + "," + longitude;
  }
  static {
    this.ɵfac = function StoreLocationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreLocationService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StoreLocationService,
      factory: _StoreLocationService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreLocationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var defaultStoreFinderConfig = {
  googleMaps: {
    apiUrl: "https://maps.googleapis.com/maps/api/js",
    apiKey: "",
    scale: 5,
    selectedMarkerScale: 17,
    radius: 5e4
  }
};
var initialState$1 = {
  findStoresEntities: {},
  findStoreEntityById: {}
};
function findStoresReducer(state = initialState$1, action) {
  switch (action.type) {
    case FIND_STORES_SUCCESS: {
      const findStoresEntities = action.payload;
      return __spreadProps(__spreadValues({}, state), {
        findStoresEntities
      });
    }
    case FIND_STORE_BY_ID_SUCCESS: {
      const findStoreEntityById = action.payload;
      return __spreadProps(__spreadValues({}, state), {
        findStoreEntityById
      });
    }
  }
  return state;
}
var initialState = {
  viewAllStoresEntities: {}
};
function viewAllStoresReducer(state = initialState, action) {
  switch (action.type) {
    case VIEW_ALL_STORES_SUCCESS: {
      const viewAllStoresEntities = action.payload;
      return __spreadProps(__spreadValues({}, state), {
        viewAllStoresEntities
      });
    }
  }
  return state;
}
function getReducers() {
  return {
    findStores: utilsGroup.loaderReducer(STORE_FINDER_DATA, findStoresReducer),
    viewAllStores: utilsGroup.loaderReducer(STORE_FINDER_DATA, viewAllStoresReducer)
  };
}
var reducerToken = new InjectionToken("StoreFinderReducers");
var reducerProvider = {
  provide: reducerToken,
  useFactory: getReducers
};
function clearStoreFinderState(reducer) {
  return function(state, action) {
    if (action.type === siteContextGroup_actions.LANGUAGE_CHANGE) {
      state = void 0;
    }
    if (action.type === CLEAR_STORE_FINDER_DATA) {
      state = void 0;
    }
    return reducer(state, action);
  };
}
var metaReducers = [clearStoreFinderState];
var FindStoresEffect = class _FindStoresEffect {
  constructor(actions$, storeFinderConnector) {
    this.actions$ = actions$;
    this.storeFinderConnector = storeFinderConnector;
    this.logger = inject(LoggerService);
    this.findStores$ = createEffect(() => this.actions$.pipe(ofType(FIND_STORES), map((action) => action.payload), mergeMap((payload) => this.storeFinderConnector.search(payload.queryText, payload.searchConfig, payload.longitudeLatitude, payload.radius).pipe(map((data) => {
      if (payload.countryIsoCode) {
        data.stores = data.stores.filter((store) => store.address.country.isocode === payload.countryIsoCode);
        data.stores.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
      }
      return new FindStoresSuccess(data);
    }), catchError((error) => of(new FindStoresFail(tryNormalizeHttpError(error, this.logger))))))));
    this.findStoreById$ = createEffect(() => this.actions$.pipe(ofType(FIND_STORE_BY_ID), map((action) => action.payload), switchMap((payload) => this.storeFinderConnector.get(payload.storeId).pipe(map((data) => new FindStoreByIdSuccess(data)), catchError((error) => of(new FindStoreByIdFail(tryNormalizeHttpError(error, this.logger))))))));
  }
  static {
    this.ɵfac = function FindStoresEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FindStoresEffect)(ɵɵinject(Actions), ɵɵinject(StoreFinderConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _FindStoresEffect,
      factory: _FindStoresEffect.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FindStoresEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: StoreFinderConnector
  }], null);
})();
var ViewAllStoresEffect = class _ViewAllStoresEffect {
  constructor(actions$, storeFinderConnector) {
    this.actions$ = actions$;
    this.storeFinderConnector = storeFinderConnector;
    this.logger = inject(LoggerService);
    this.viewAllStores$ = createEffect(() => this.actions$.pipe(ofType(VIEW_ALL_STORES, CLEAR_STORE_FINDER_DATA), switchMap(() => {
      return this.storeFinderConnector.getCounts().pipe(map((data) => {
        data.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
        return new ViewAllStoresSuccess(data);
      }), catchError((error) => of(new ViewAllStoresFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.clearStoreFinderData$ = createEffect(() => this.actions$.pipe(ofType(siteContextGroup_actions.LANGUAGE_CHANGE, siteContextGroup_actions.CURRENCY_CHANGE), map(() => {
      return new ClearStoreFinderData();
    })));
  }
  static {
    this.ɵfac = function ViewAllStoresEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ViewAllStoresEffect)(ɵɵinject(Actions), ɵɵinject(StoreFinderConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ViewAllStoresEffect,
      factory: _ViewAllStoresEffect.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewAllStoresEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: StoreFinderConnector
  }], null);
})();
var effects = [FindStoresEffect, ViewAllStoresEffect];
var StoreFinderStoreModule = class _StoreFinderStoreModule {
  static {
    this.ɵfac = function StoreFinderStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _StoreFinderStoreModule,
      imports: [CommonModule, StoreFeatureModule, EffectsFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [reducerProvider],
      imports: [CommonModule, StoreModule.forFeature(STORE_FINDER_FEATURE, reducerToken, {
        metaReducers
      }), EffectsModule.forFeature(effects)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderStoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, StoreModule.forFeature(STORE_FINDER_FEATURE, reducerToken, {
        metaReducers
      }), EffectsModule.forFeature(effects)],
      providers: [reducerProvider]
    }]
  }], null, null);
})();
var StoreFinderCoreModule = class _StoreFinderCoreModule {
  static {
    this.ɵfac = function StoreFinderCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _StoreFinderCoreModule,
      imports: [StoreFinderStoreModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultStoreFinderConfig), StoreFinderConnector, ...facadeProviders],
      imports: [StoreFinderStoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderCoreModule, [{
    type: NgModule,
    args: [{
      imports: [StoreFinderStoreModule],
      providers: [provideDefaultConfig(defaultStoreFinderConfig), StoreFinderConnector, ...facadeProviders]
    }]
  }], null, null);
})();

export {
  StoreFinderConfig,
  StoreFinderAdapter,
  STORE_FINDER_SEARCH_PAGE_NORMALIZER,
  STORE_COUNT_NORMALIZER,
  StoreFinderService,
  GoogleMapRendererService,
  StoreLocationService,
  StoreFinderCoreModule
};
//# sourceMappingURL=chunk-H5G2MMM2.js.map
