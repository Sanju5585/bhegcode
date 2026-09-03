import {
  OAuthModule,
  OAuthService,
  OAuthStorage
} from "./chunk-WEHTOAST.js";
import {
  ActivatedRoute,
  DefaultUrlSerializer,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  PRIMARY_OUTLET,
  Router,
  RouterModule,
  RoutesRecognized,
  UrlSerializer
} from "./chunk-EBCNDD52.js";
import {
  Actions,
  EffectsFeatureModule,
  EffectsModule,
  createEffect,
  ofType
} from "./chunk-6KXUHIAW.js";
import {
  ACTIVE_RUNTIME_CHECKS,
  ActionsSubject,
  INIT,
  META_REDUCERS,
  Store,
  StoreFeatureModule,
  StoreModule,
  combineReducers,
  createAction,
  createFeatureSelector,
  createSelector,
  isNgrxMockEnvironment,
  props,
  select
} from "./chunk-2FUOVDAV.js";
import {
  Meta
} from "./chunk-V3UYZOGB.js";
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpContext,
  HttpContextToken,
  HttpErrorResponse,
  HttpEventType,
  HttpHeaders,
  HttpParams,
  HttpResponse
} from "./chunk-2A6OHZCE.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  LOCATION_INITIALIZED,
  Location,
  getLocaleId
} from "./chunk-S7KROBXW.js";
import {
  DOCUMENT,
  isPlatformBrowser,
  isPlatformServer
} from "./chunk-5AFE3VT7.js";
import {
  APP_BOOTSTRAP_LISTENER,
  APP_INITIALIZER,
  ChangeDetectorRef,
  Compiler,
  DestroyRef,
  Directive,
  ErrorHandler,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgModuleFactory$1,
  Optional,
  PLATFORM_ID,
  Pipe,
  RendererFactory2,
  TemplateRef,
  TransferState,
  ViewContainerRef,
  assertInInjectionContext,
  inject,
  isDevMode,
  makeEnvironmentProviders,
  makeStateKey,
  provideEnvironmentInitializer,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵgetInheritedFactory,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import {
  NEVER,
  asapScheduler,
  connectable,
  defer,
  firstValueFrom,
  forkJoin,
  fromEvent,
  iif,
  isObservable,
  lastValueFrom,
  merge,
  queueScheduler,
  using
} from "./chunk-FBVS4YZX.js";
import {
  BehaviorSubject,
  EMPTY,
  ReplaySubject,
  Subject,
  TimeoutError,
  audit,
  auditTime,
  bufferCount,
  catchError,
  combineLatest,
  concatMap,
  debounceTime,
  delay,
  distinctUntilChanged,
  exhaustMap,
  filter,
  finalize,
  from,
  groupBy,
  map,
  mergeMap,
  observeOn,
  of,
  pairwise,
  retry,
  scan,
  share,
  shareReplay,
  skip,
  skipWhile,
  startWith,
  take,
  takeUntil,
  tap,
  throwError,
  timeout,
  timer,
  withLatestFrom,
  zip
} from "./chunk-R6FETK65.js";
import {
  Observable,
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@ngrx/router-store/fesm2022/ngrx-router-store.mjs
var ROUTER_REQUEST = "@ngrx/router-store/request";
var routerRequestAction = createAction(ROUTER_REQUEST, props());
var ROUTER_NAVIGATION = "@ngrx/router-store/navigation";
var routerNavigationAction = createAction(ROUTER_NAVIGATION, props());
var ROUTER_CANCEL = "@ngrx/router-store/cancel";
var routerCancelAction = createAction(ROUTER_CANCEL, props());
var ROUTER_ERROR = "@ngrx/router-store/error";
var routerErrorAction = createAction(ROUTER_ERROR, props());
var ROUTER_NAVIGATED = "@ngrx/router-store/navigated";
var routerNavigatedAction = createAction(ROUTER_NAVIGATED, props());
var MinimalRouterStateSerializer = class {
  serialize(routerState) {
    return {
      root: this.serializeRoute(routerState.root),
      url: routerState.url
    };
  }
  serializeRoute(route) {
    const children = route.children.map((c) => this.serializeRoute(c));
    return {
      params: route.params,
      data: route.data,
      url: route.url,
      outlet: route.outlet,
      title: route.title,
      routeConfig: route.routeConfig ? {
        path: route.routeConfig.path,
        pathMatch: route.routeConfig.pathMatch,
        redirectTo: route.routeConfig.redirectTo,
        outlet: route.routeConfig.outlet,
        title: typeof route.routeConfig.title === "string" ? route.routeConfig.title : void 0
      } : null,
      queryParams: route.queryParams,
      fragment: route.fragment,
      firstChild: children[0],
      children
    };
  }
};
var NavigationActionTiming;
(function(NavigationActionTiming2) {
  NavigationActionTiming2[NavigationActionTiming2["PreActivation"] = 1] = "PreActivation";
  NavigationActionTiming2[NavigationActionTiming2["PostActivation"] = 2] = "PostActivation";
})(NavigationActionTiming || (NavigationActionTiming = {}));
var DEFAULT_ROUTER_FEATURENAME = "router";
var _ROUTER_CONFIG = new InjectionToken("@ngrx/router-store Internal Configuration");
var ROUTER_CONFIG = new InjectionToken("@ngrx/router-store Configuration");
var RouterState;
(function(RouterState2) {
  RouterState2[RouterState2["Full"] = 0] = "Full";
  RouterState2[RouterState2["Minimal"] = 1] = "Minimal";
})(RouterState || (RouterState = {}));
function _createRouterConfig(config) {
  return __spreadValues({
    stateKey: DEFAULT_ROUTER_FEATURENAME,
    serializer: MinimalRouterStateSerializer,
    navigationActionTiming: NavigationActionTiming.PreActivation
  }, config);
}
var FullRouterStateSerializer = class {
  serialize(routerState) {
    return {
      root: this.serializeRoute(routerState.root),
      url: routerState.url
    };
  }
  serializeRoute(route) {
    const children = route.children.map((c) => this.serializeRoute(c));
    return {
      params: route.params,
      paramMap: route.paramMap,
      data: route.data,
      url: route.url,
      outlet: route.outlet,
      title: route.title,
      routeConfig: route.routeConfig ? {
        component: route.routeConfig.component,
        path: route.routeConfig.path,
        pathMatch: route.routeConfig.pathMatch,
        redirectTo: route.routeConfig.redirectTo,
        outlet: route.routeConfig.outlet,
        title: route.routeConfig.title
      } : null,
      queryParams: route.queryParams,
      queryParamMap: route.queryParamMap,
      fragment: route.fragment,
      component: route.routeConfig ? route.routeConfig.component : void 0,
      root: void 0,
      parent: void 0,
      firstChild: children[0],
      pathFromRoot: void 0,
      children
    };
  }
};
var RouterStateSerializer = class {
};
var RouterTrigger;
(function(RouterTrigger2) {
  RouterTrigger2[RouterTrigger2["NONE"] = 1] = "NONE";
  RouterTrigger2[RouterTrigger2["ROUTER"] = 2] = "ROUTER";
  RouterTrigger2[RouterTrigger2["STORE"] = 3] = "STORE";
})(RouterTrigger || (RouterTrigger = {}));
var StoreRouterConnectingService = class _StoreRouterConnectingService {
  constructor(store, router, serializer, errorHandler, config, activeRuntimeChecks) {
    this.store = store;
    this.router = router;
    this.serializer = serializer;
    this.errorHandler = errorHandler;
    this.config = config;
    this.activeRuntimeChecks = activeRuntimeChecks;
    this.lastEvent = null;
    this.routerState = null;
    this.trigger = RouterTrigger.NONE;
    this.stateKey = this.config.stateKey;
    if (!isNgrxMockEnvironment() && isDevMode() && (activeRuntimeChecks?.strictActionSerializability || activeRuntimeChecks?.strictStateSerializability) && this.serializer instanceof FullRouterStateSerializer) {
      console.warn("@ngrx/router-store: The serializability runtime checks cannot be enabled with the FullRouterStateSerializer. The FullRouterStateSerializer has an unserializable router state and actions that are not serializable. To use the serializability runtime checks either use the MinimalRouterStateSerializer or implement a custom router state serializer.");
    }
    this.setUpStoreStateListener();
    this.setUpRouterEventsListener();
  }
  setUpStoreStateListener() {
    this.store.pipe(select(this.stateKey), withLatestFrom(this.store)).subscribe(([routerStoreState, storeState]) => {
      this.navigateIfNeeded(routerStoreState, storeState);
    });
  }
  navigateIfNeeded(routerStoreState, storeState) {
    if (!routerStoreState || !routerStoreState.state) {
      return;
    }
    if (this.trigger === RouterTrigger.ROUTER) {
      return;
    }
    if (this.lastEvent instanceof NavigationStart) {
      return;
    }
    const url = routerStoreState.state.url;
    if (!isSameUrl(this.router.url, url)) {
      this.storeState = storeState;
      this.trigger = RouterTrigger.STORE;
      this.router.navigateByUrl(url).catch((error) => {
        this.errorHandler.handleError(error);
      });
    }
  }
  setUpRouterEventsListener() {
    const dispatchNavLate = this.config.navigationActionTiming === NavigationActionTiming.PostActivation;
    let routesRecognized;
    this.router.events.pipe(withLatestFrom(this.store)).subscribe(([event, storeState]) => {
      this.lastEvent = event;
      if (event instanceof NavigationStart) {
        this.routerState = this.serializer.serialize(this.router.routerState.snapshot);
        if (this.trigger !== RouterTrigger.STORE) {
          this.storeState = storeState;
          this.dispatchRouterRequest(event);
        }
      } else if (event instanceof RoutesRecognized) {
        routesRecognized = event;
        if (!dispatchNavLate && this.trigger !== RouterTrigger.STORE) {
          this.dispatchRouterNavigation(event);
        }
      } else if (event instanceof NavigationCancel) {
        this.dispatchRouterCancel(event);
        this.reset();
      } else if (event instanceof NavigationError) {
        this.dispatchRouterError(event);
        this.reset();
      } else if (event instanceof NavigationEnd) {
        if (this.trigger !== RouterTrigger.STORE) {
          if (dispatchNavLate) {
            this.dispatchRouterNavigation(routesRecognized);
          }
          this.dispatchRouterNavigated(event);
        }
        this.reset();
      }
    });
  }
  dispatchRouterRequest(event) {
    this.dispatchRouterAction(ROUTER_REQUEST, {
      event
    });
  }
  dispatchRouterNavigation(lastRoutesRecognized) {
    const nextRouterState = this.serializer.serialize(lastRoutesRecognized.state);
    this.dispatchRouterAction(ROUTER_NAVIGATION, {
      routerState: nextRouterState,
      event: new RoutesRecognized(lastRoutesRecognized.id, lastRoutesRecognized.url, lastRoutesRecognized.urlAfterRedirects, nextRouterState)
    });
  }
  dispatchRouterCancel(event) {
    this.dispatchRouterAction(ROUTER_CANCEL, {
      storeState: this.storeState,
      event
    });
  }
  dispatchRouterError(event) {
    this.dispatchRouterAction(ROUTER_ERROR, {
      storeState: this.storeState,
      event: new NavigationError(event.id, event.url, `${event}`)
    });
  }
  dispatchRouterNavigated(event) {
    const routerState = this.serializer.serialize(this.router.routerState.snapshot);
    this.dispatchRouterAction(ROUTER_NAVIGATED, {
      event,
      routerState
    });
  }
  dispatchRouterAction(type, payload) {
    this.trigger = RouterTrigger.ROUTER;
    try {
      this.store.dispatch({
        type,
        payload: __spreadProps(__spreadValues({
          routerState: this.routerState
        }, payload), {
          event: this.config.routerState === RouterState.Full ? payload.event : {
            id: payload.event.id,
            url: payload.event.url,
            // safe, as it will just be `undefined` for non-NavigationEnd router events
            urlAfterRedirects: payload.event.urlAfterRedirects
          }
        })
      });
    } finally {
      this.trigger = RouterTrigger.NONE;
    }
  }
  reset() {
    this.trigger = RouterTrigger.NONE;
    this.storeState = null;
    this.routerState = null;
  }
  static {
    this.ɵfac = function StoreRouterConnectingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreRouterConnectingService)(ɵɵinject(Store), ɵɵinject(Router), ɵɵinject(RouterStateSerializer), ɵɵinject(ErrorHandler), ɵɵinject(ROUTER_CONFIG), ɵɵinject(ACTIVE_RUNTIME_CHECKS));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StoreRouterConnectingService,
      factory: _StoreRouterConnectingService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreRouterConnectingService, [{
    type: Injectable
  }], () => [{
    type: Store
  }, {
    type: Router
  }, {
    type: RouterStateSerializer
  }, {
    type: ErrorHandler
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [ROUTER_CONFIG]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [ACTIVE_RUNTIME_CHECKS]
    }]
  }], null);
})();
function isSameUrl(first, second) {
  return stripTrailingSlash(first) === stripTrailingSlash(second);
}
function stripTrailingSlash(text) {
  if (text?.length > 0 && text[text.length - 1] === "/") {
    return text.substring(0, text.length - 1);
  }
  return text;
}
function provideRouterStore(config = {}) {
  return makeEnvironmentProviders([{
    provide: _ROUTER_CONFIG,
    useValue: config
  }, {
    provide: ROUTER_CONFIG,
    useFactory: _createRouterConfig,
    deps: [_ROUTER_CONFIG]
  }, {
    provide: RouterStateSerializer,
    useClass: config.serializer ? config.serializer : config.routerState === RouterState.Full ? FullRouterStateSerializer : MinimalRouterStateSerializer
  }, provideEnvironmentInitializer(() => inject(StoreRouterConnectingService)), StoreRouterConnectingService]);
}
var StoreRouterConnectingModule = class _StoreRouterConnectingModule {
  static forRoot(config = {}) {
    return {
      ngModule: _StoreRouterConnectingModule,
      providers: [provideRouterStore(config)]
    };
  }
  static {
    this.ɵfac = function StoreRouterConnectingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreRouterConnectingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _StoreRouterConnectingModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreRouterConnectingModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();

// node_modules/i18next-http-backend/esm/utils.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
var arr = [];
var each = arr.forEach;
var slice = arr.slice;
function hasXMLHttpRequest() {
  return typeof XMLHttpRequest === "function" || (typeof XMLHttpRequest === "undefined" ? "undefined" : _typeof(XMLHttpRequest)) === "object";
}
function isPromise(maybePromise) {
  return !!maybePromise && typeof maybePromise.then === "function";
}
function makePromise(maybePromise) {
  if (isPromise(maybePromise)) {
    return maybePromise;
  }
  return Promise.resolve(maybePromise);
}

// node_modules/i18next-http-backend/esm/request.js
function ownKeys(e, r) {
  var t2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t2 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t2), true).forEach(function(r2) {
      _defineProperty(e, r2, t2[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t2, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t2) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t2, e;
}
function _toPropertyKey(t2) {
  var i = _toPrimitive(t2, "string");
  return "symbol" == _typeof2(i) ? i : i + "";
}
function _toPrimitive(t2, r) {
  if ("object" != _typeof2(t2) || !t2) return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t2, r || "default");
    if ("object" != _typeof2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t2);
}
function _typeof2(o) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof2(o);
}
var fetchApi = typeof fetch === "function" ? fetch : void 0;
if (typeof global !== "undefined" && global.fetch) {
  fetchApi = global.fetch;
} else if (typeof window !== "undefined" && window.fetch) {
  fetchApi = window.fetch;
}
var XmlHttpRequestApi;
if (hasXMLHttpRequest()) {
  if (typeof global !== "undefined" && global.XMLHttpRequest) {
    XmlHttpRequestApi = global.XMLHttpRequest;
  } else if (typeof window !== "undefined" && window.XMLHttpRequest) {
    XmlHttpRequestApi = window.XMLHttpRequest;
  }
}
var ActiveXObjectApi;
if (typeof ActiveXObject === "function") {
  if (typeof global !== "undefined" && global.ActiveXObject) {
    ActiveXObjectApi = global.ActiveXObject;
  } else if (typeof window !== "undefined" && window.ActiveXObject) {
    ActiveXObjectApi = window.ActiveXObject;
  }
}
if (typeof fetchApi !== "function") fetchApi = void 0;
if (!fetchApi && !XmlHttpRequestApi && !ActiveXObjectApi) {
  try {
    import("./browser-ponyfill-J3VT3IEZ.js").then(function(mod) {
      fetchApi = mod.default;
    }).catch(function() {
    });
  } catch (e) {
  }
}
var addQueryString = function addQueryString2(url, params) {
  if (params && _typeof2(params) === "object") {
    var queryString = "";
    for (var paramName in params) {
      queryString += "&" + encodeURIComponent(paramName) + "=" + encodeURIComponent(params[paramName]);
    }
    if (!queryString) return url;
    url = url + (url.indexOf("?") !== -1 ? "&" : "?") + queryString.slice(1);
  }
  return url;
};
var fetchIt = function fetchIt2(url, fetchOptions, callback, altFetch) {
  var resolver = function resolver2(response) {
    if (!response.ok) return callback(response.statusText || "Error", {
      status: response.status
    });
    response.text().then(function(data) {
      callback(null, {
        status: response.status,
        data
      });
    }).catch(callback);
  };
  if (altFetch) {
    var altResponse = altFetch(url, fetchOptions);
    if (altResponse instanceof Promise) {
      altResponse.then(resolver).catch(callback);
      return;
    }
  }
  if (typeof fetch === "function") {
    fetch(url, fetchOptions).then(resolver).catch(callback);
  } else {
    fetchApi(url, fetchOptions).then(resolver).catch(callback);
  }
};
var omitFetchOptions = false;
var requestWithFetch = function requestWithFetch2(options, url, payload, callback) {
  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }
  var headers2 = _objectSpread({}, typeof options.customHeaders === "function" ? options.customHeaders() : options.customHeaders);
  if (typeof window === "undefined" && typeof global !== "undefined" && typeof global.process !== "undefined" && global.process.versions && global.process.versions.node) {
    headers2["User-Agent"] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")");
  }
  if (payload) headers2["Content-Type"] = "application/json";
  var reqOptions = typeof options.requestOptions === "function" ? options.requestOptions(payload) : options.requestOptions;
  var fetchOptions = _objectSpread({
    method: payload ? "POST" : "GET",
    body: payload ? options.stringify(payload) : void 0,
    headers: headers2
  }, omitFetchOptions ? {} : reqOptions);
  var altFetch = typeof options.alternateFetch === "function" && options.alternateFetch.length >= 1 ? options.alternateFetch : void 0;
  try {
    fetchIt(url, fetchOptions, callback, altFetch);
  } catch (e) {
    if (!reqOptions || Object.keys(reqOptions).length === 0 || !e.message || e.message.indexOf("not implemented") < 0) {
      return callback(e);
    }
    try {
      Object.keys(reqOptions).forEach(function(opt) {
        delete fetchOptions[opt];
      });
      fetchIt(url, fetchOptions, callback, altFetch);
      omitFetchOptions = true;
    } catch (err) {
      callback(err);
    }
  }
};
var requestWithXmlHttpRequest = function requestWithXmlHttpRequest2(options, url, payload, callback) {
  if (payload && _typeof2(payload) === "object") {
    payload = addQueryString("", payload).slice(1);
  }
  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }
  try {
    var x = XmlHttpRequestApi ? new XmlHttpRequestApi() : new ActiveXObjectApi("MSXML2.XMLHTTP.3.0");
    x.open(payload ? "POST" : "GET", url, 1);
    if (!options.crossDomain) {
      x.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    }
    x.withCredentials = !!options.withCredentials;
    if (payload) {
      x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    if (x.overrideMimeType) {
      x.overrideMimeType("application/json");
    }
    var h = options.customHeaders;
    h = typeof h === "function" ? h() : h;
    if (h) {
      for (var i in h) {
        x.setRequestHeader(i, h[i]);
      }
    }
    x.onreadystatechange = function() {
      x.readyState > 3 && callback(x.status >= 400 ? x.statusText : null, {
        status: x.status,
        data: x.responseText
      });
    };
    x.send(payload);
  } catch (e) {
    console && console.log(e);
  }
};
var request = function request2(options, url, payload, callback) {
  if (typeof payload === "function") {
    callback = payload;
    payload = void 0;
  }
  callback = callback || function() {
  };
  if (fetchApi && url.indexOf("file:") !== 0) {
    return requestWithFetch(options, url, payload, callback);
  }
  if (hasXMLHttpRequest() || typeof ActiveXObject === "function") {
    return requestWithXmlHttpRequest(options, url, payload, callback);
  }
  callback(new Error("No fetch and no xhr implementation found!"));
};
var request_default = request;

// node_modules/i18next-http-backend/esm/index.js
function _typeof3(o) {
  "@babel/helpers - typeof";
  return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof3(o);
}
function ownKeys2(e, r) {
  var t2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t2 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t2), true).forEach(function(r2) {
      _defineProperty2(e, r2, t2[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys2(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t2, r2));
    });
  }
  return e;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t2 = 0; t2 < r.length; t2++) {
    var o = r[t2];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey2(o.key), o);
  }
}
function _createClass(e, r, t2) {
  return r && _defineProperties(e.prototype, r), t2 && _defineProperties(e, t2), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _defineProperty2(e, r, t2) {
  return (r = _toPropertyKey2(r)) in e ? Object.defineProperty(e, r, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t2, e;
}
function _toPropertyKey2(t2) {
  var i = _toPrimitive2(t2, "string");
  return "symbol" == _typeof3(i) ? i : i + "";
}
function _toPrimitive2(t2, r) {
  if ("object" != _typeof3(t2) || !t2) return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t2, r || "default");
    if ("object" != _typeof3(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t2);
}
var getDefaults = function getDefaults2() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    parse: function parse(data) {
      return JSON.parse(data);
    },
    stringify: JSON.stringify,
    parsePayload: function parsePayload(namespace, key, fallbackValue) {
      return _defineProperty2({}, key, fallbackValue || "");
    },
    parseLoadPayload: function parseLoadPayload(languages, namespaces) {
      return void 0;
    },
    request: request_default,
    reloadInterval: typeof window !== "undefined" ? false : 60 * 60 * 1e3,
    customHeaders: {},
    queryStringParams: {},
    crossDomain: false,
    withCredentials: false,
    overrideMimeType: false,
    requestOptions: {
      mode: "cors",
      credentials: "same-origin",
      cache: "default"
    }
  };
};
var Backend = function() {
  function Backend2(services) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var allOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    _classCallCheck(this, Backend2);
    this.services = services;
    this.options = options;
    this.allOptions = allOptions;
    this.type = "backend";
    this.init(services, options, allOptions);
  }
  return _createClass(Backend2, [{
    key: "init",
    value: function init2(services) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var allOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = services;
      this.options = _objectSpread2(_objectSpread2(_objectSpread2({}, getDefaults()), this.options || {}), options);
      this.allOptions = allOptions;
      if (this.services && this.options.reloadInterval) {
        var timer2 = setInterval(function() {
          return _this.reload();
        }, this.options.reloadInterval);
        if (_typeof3(timer2) === "object" && typeof timer2.unref === "function") timer2.unref();
      }
    }
  }, {
    key: "readMulti",
    value: function readMulti(languages, namespaces, callback) {
      this._readAny(languages, languages, namespaces, namespaces, callback);
    }
  }, {
    key: "read",
    value: function read(language, namespace, callback) {
      this._readAny([language], language, [namespace], namespace, callback);
    }
  }, {
    key: "_readAny",
    value: function _readAny(languages, loadUrlLanguages, namespaces, loadUrlNamespaces, callback) {
      var _this2 = this;
      var loadPath = this.options.loadPath;
      if (typeof this.options.loadPath === "function") {
        loadPath = this.options.loadPath(languages, namespaces);
      }
      loadPath = makePromise(loadPath);
      loadPath.then(function(resolvedLoadPath) {
        if (!resolvedLoadPath) return callback(null, {});
        var url = _this2.services.interpolator.interpolate(resolvedLoadPath, {
          lng: languages.join("+"),
          ns: namespaces.join("+")
        });
        _this2.loadUrl(url, callback, loadUrlLanguages, loadUrlNamespaces);
      });
    }
  }, {
    key: "loadUrl",
    value: function loadUrl(url, callback, languages, namespaces) {
      var _this3 = this;
      var lng = typeof languages === "string" ? [languages] : languages;
      var ns = typeof namespaces === "string" ? [namespaces] : namespaces;
      var payload = this.options.parseLoadPayload(lng, ns);
      this.options.request(this.options, url, payload, function(err, res) {
        if (res && (res.status >= 500 && res.status < 600 || !res.status)) return callback("failed loading " + url + "; status code: " + res.status, true);
        if (res && res.status >= 400 && res.status < 500) return callback("failed loading " + url + "; status code: " + res.status, false);
        if (!res && err && err.message) {
          var errorMessage = err.message.toLowerCase();
          var isNetworkError = ["failed", "fetch", "network", "load"].find(function(term) {
            return errorMessage.indexOf(term) > -1;
          });
          if (isNetworkError) {
            return callback("failed loading " + url + ": " + err.message, true);
          }
        }
        if (err) return callback(err, false);
        var ret, parseErr;
        try {
          if (typeof res.data === "string") {
            ret = _this3.options.parse(res.data, languages, namespaces);
          } else {
            ret = res.data;
          }
        } catch (e) {
          parseErr = "failed parsing " + url + " to json";
        }
        if (parseErr) return callback(parseErr, false);
        callback(null, ret);
      });
    }
  }, {
    key: "create",
    value: function create(languages, namespace, key, fallbackValue, callback) {
      var _this4 = this;
      if (!this.options.addPath) return;
      if (typeof languages === "string") languages = [languages];
      var payload = this.options.parsePayload(namespace, key, fallbackValue);
      var finished = 0;
      var dataArray = [];
      var resArray = [];
      languages.forEach(function(lng) {
        var addPath = _this4.options.addPath;
        if (typeof _this4.options.addPath === "function") {
          addPath = _this4.options.addPath(lng, namespace);
        }
        var url = _this4.services.interpolator.interpolate(addPath, {
          lng,
          ns: namespace
        });
        _this4.options.request(_this4.options, url, payload, function(data, res) {
          finished += 1;
          dataArray.push(data);
          resArray.push(res);
          if (finished === languages.length) {
            if (typeof callback === "function") callback(dataArray, resArray);
          }
        });
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _this5 = this;
      var _this$services = this.services, backendConnector = _this$services.backendConnector, languageUtils = _this$services.languageUtils, logger = _this$services.logger;
      var currentLanguage = backendConnector.language;
      if (currentLanguage && currentLanguage.toLowerCase() === "cimode") return;
      var toLoad = [];
      var append = function append2(lng) {
        var lngs = languageUtils.toResolveHierarchy(lng);
        lngs.forEach(function(l) {
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };
      append(currentLanguage);
      if (this.allOptions.preload) this.allOptions.preload.forEach(function(l) {
        return append(l);
      });
      toLoad.forEach(function(lng) {
        _this5.allOptions.ns.forEach(function(ns) {
          backendConnector.read(lng, ns, "read", null, null, function(err, data) {
            if (err) logger.warn("loading namespace ".concat(ns, " for language ").concat(lng, " failed"), err);
            if (!err && data) logger.log("loaded namespace ".concat(ns, " for language ").concat(lng), data);
            backendConnector.loaded("".concat(lng, "|").concat(ns), err, data);
          });
        });
      });
    }
  }]);
}();
Backend.type = "backend";
var esm_default = Backend;

// node_modules/i18next/dist/esm/i18next.js
var isString = (obj) => typeof obj === "string";
var defer2 = () => {
  let res;
  let rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
};
var makeString = (object) => {
  if (object == null) return "";
  return "" + object;
};
var copy = (a, s, t2) => {
  a.forEach((m) => {
    if (s[m]) t2[m] = s[m];
  });
};
var lastOfPathSeparatorRegExp = /###/g;
var cleanKey = (key) => key && key.indexOf("###") > -1 ? key.replace(lastOfPathSeparatorRegExp, ".") : key;
var canNotTraverseDeeper = (object) => !object || isString(object);
var getLastOfPath = (object, path, Empty) => {
  const stack = !isString(path) ? path : path.split(".");
  let stackIndex = 0;
  while (stackIndex < stack.length - 1) {
    if (canNotTraverseDeeper(object)) return {};
    const key = cleanKey(stack[stackIndex]);
    if (!object[key] && Empty) object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
    ++stackIndex;
  }
  if (canNotTraverseDeeper(object)) return {};
  return {
    obj: object,
    k: cleanKey(stack[stackIndex])
  };
};
var setPath = (object, path, newValue) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  if (obj !== void 0 || path.length === 1) {
    obj[k] = newValue;
    return;
  }
  let e = path[path.length - 1];
  let p = path.slice(0, path.length - 1);
  let last = getLastOfPath(object, p, Object);
  while (last.obj === void 0 && p.length) {
    e = `${p[p.length - 1]}.${e}`;
    p = p.slice(0, p.length - 1);
    last = getLastOfPath(object, p, Object);
    if (last?.obj && typeof last.obj[`${last.k}.${e}`] !== "undefined") {
      last.obj = void 0;
    }
  }
  last.obj[`${last.k}.${e}`] = newValue;
};
var pushPath = (object, path, newValue, concat) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  obj[k] = obj[k] || [];
  obj[k].push(newValue);
};
var getPath = (object, path) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path);
  if (!obj) return void 0;
  if (!Object.prototype.hasOwnProperty.call(obj, k)) return void 0;
  return obj[k];
};
var getPathWithDefaults = (data, defaultData, key) => {
  const value = getPath(data, key);
  if (value !== void 0) {
    return value;
  }
  return getPath(defaultData, key);
};
var deepExtend = (target, source, overwrite) => {
  for (const prop in source) {
    if (prop !== "__proto__" && prop !== "constructor") {
      if (prop in target) {
        if (isString(target[prop]) || target[prop] instanceof String || isString(source[prop]) || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
};
var regexEscape = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var _entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
var escape = (data) => {
  if (isString(data)) {
    return data.replace(/[&<>"'\/]/g, (s) => _entityMap[s]);
  }
  return data;
};
var RegExpCache = class {
  constructor(capacity) {
    this.capacity = capacity;
    this.regExpMap = /* @__PURE__ */ new Map();
    this.regExpQueue = [];
  }
  getRegExp(pattern) {
    const regExpFromCache = this.regExpMap.get(pattern);
    if (regExpFromCache !== void 0) {
      return regExpFromCache;
    }
    const regExpNew = new RegExp(pattern);
    if (this.regExpQueue.length === this.capacity) {
      this.regExpMap.delete(this.regExpQueue.shift());
    }
    this.regExpMap.set(pattern, regExpNew);
    this.regExpQueue.push(pattern);
    return regExpNew;
  }
};
var chars = [" ", ",", "?", "!", ";"];
var looksLikeObjectPathRegExpCache = new RegExpCache(20);
var looksLikeObjectPath = (key, nsSeparator, keySeparator) => {
  nsSeparator = nsSeparator || "";
  keySeparator = keySeparator || "";
  const possibleChars = chars.filter((c) => nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0);
  if (possibleChars.length === 0) return true;
  const r = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map((c) => c === "?" ? "\\?" : c).join("|")})`);
  let matched = !r.test(key);
  if (!matched) {
    const ki = key.indexOf(keySeparator);
    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
};
var deepFind = function(obj, path) {
  let keySeparator = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!obj) return void 0;
  if (obj[path]) {
    if (!Object.prototype.hasOwnProperty.call(obj, path)) return void 0;
    return obj[path];
  }
  const tokens = path.split(keySeparator);
  let current = obj;
  for (let i = 0; i < tokens.length; ) {
    if (!current || typeof current !== "object") {
      return void 0;
    }
    let next;
    let nextPath = "";
    for (let j = i; j < tokens.length; ++j) {
      if (j !== i) {
        nextPath += keySeparator;
      }
      nextPath += tokens[j];
      next = current[nextPath];
      if (next !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof next) > -1 && j < tokens.length - 1) {
          continue;
        }
        i += j - i + 1;
        break;
      }
    }
    current = next;
  }
  return current;
};
var getCleanedCode = (code) => code?.replace("_", "-");
var consoleLogger = {
  type: "logger",
  log(args) {
    this.output("log", args);
  },
  warn(args) {
    this.output("warn", args);
  },
  error(args) {
    this.output("error", args);
  },
  output(type, args) {
    console?.[type]?.apply?.(console, args);
  }
};
var Logger = class _Logger {
  constructor(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(concreteLogger, options);
  }
  init(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = options.prefix || "i18next:";
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug;
  }
  log() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.forward(args, "log", "", true);
  }
  warn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return this.forward(args, "warn", "", true);
  }
  error() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return this.forward(args, "error", "");
  }
  deprecate() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
  }
  forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug) return null;
    if (isString(args[0])) args[0] = `${prefix}${this.prefix} ${args[0]}`;
    return this.logger[lvl](args);
  }
  create(moduleName) {
    return new _Logger(this.logger, __spreadValues(__spreadValues({}, {
      prefix: `${this.prefix}:${moduleName}:`
    }), this.options));
  }
  clone(options) {
    options = options || this.options;
    options.prefix = options.prefix || this.prefix;
    return new _Logger(this.logger, options);
  }
};
var baseLogger = new Logger();
var EventEmitter = class {
  constructor() {
    this.observers = {};
  }
  on(events, listener) {
    events.split(" ").forEach((event) => {
      if (!this.observers[event]) this.observers[event] = /* @__PURE__ */ new Map();
      const numListeners = this.observers[event].get(listener) || 0;
      this.observers[event].set(listener, numListeners + 1);
    });
    return this;
  }
  off(event, listener) {
    if (!this.observers[event]) return;
    if (!listener) {
      delete this.observers[event];
      return;
    }
    this.observers[event].delete(listener);
  }
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (this.observers[event]) {
      const cloned = Array.from(this.observers[event].entries());
      cloned.forEach((_ref) => {
        let [observer, numTimesAdded] = _ref;
        for (let i = 0; i < numTimesAdded; i++) {
          observer(...args);
        }
      });
    }
    if (this.observers["*"]) {
      const cloned = Array.from(this.observers["*"].entries());
      cloned.forEach((_ref2) => {
        let [observer, numTimesAdded] = _ref2;
        for (let i = 0; i < numTimesAdded; i++) {
          observer.apply(observer, [event, ...args]);
        }
      });
    }
  }
};
var ResourceStore = class extends EventEmitter {
  constructor(data) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super();
    this.data = data || {};
    this.options = options;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    if (this.options.ignoreJSONStructure === void 0) {
      this.options.ignoreJSONStructure = true;
    }
  }
  addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  }
  removeNamespaces(ns) {
    const index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  }
  getResource(lng, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    const ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let path;
    if (lng.indexOf(".") > -1) {
      path = lng.split(".");
    } else {
      path = [lng, ns];
      if (key) {
        if (Array.isArray(key)) {
          path.push(...key);
        } else if (isString(key) && keySeparator) {
          path.push(...key.split(keySeparator));
        } else {
          path.push(key);
        }
      }
    }
    const result = getPath(this.data, path);
    if (!result && !ns && !key && lng.indexOf(".") > -1) {
      lng = path[0];
      ns = path[1];
      key = path.slice(2).join(".");
    }
    if (result || !ignoreJSONStructure || !isString(key)) return result;
    return deepFind(this.data?.[lng]?.[ns], key, keySeparator);
  }
  addResource(lng, ns, key, value) {
    let options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: false
    };
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    let path = [lng, ns];
    if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf(".") > -1) {
      path = lng.split(".");
      value = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    setPath(this.data, path, value);
    if (!options.silent) this.emit("added", lng, ns, key, value);
  }
  addResources(lng, ns, resources) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: false
    };
    for (const m in resources) {
      if (isString(resources[m]) || Array.isArray(resources[m])) this.addResource(lng, ns, m, resources[m], {
        silent: true
      });
    }
    if (!options.silent) this.emit("added", lng, ns, resources);
  }
  addResourceBundle(lng, ns, resources, deep, overwrite) {
    let options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: false,
      skipCopy: false
    };
    let path = [lng, ns];
    if (lng.indexOf(".") > -1) {
      path = lng.split(".");
      deep = resources;
      resources = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    let pack = getPath(this.data, path) || {};
    if (!options.skipCopy) resources = JSON.parse(JSON.stringify(resources));
    if (deep) {
      deepExtend(pack, resources, overwrite);
    } else {
      pack = __spreadValues(__spreadValues({}, pack), resources);
    }
    setPath(this.data, path, pack);
    if (!options.silent) this.emit("added", lng, ns, resources);
  }
  removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);
    this.emit("removed", lng, ns);
  }
  hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== void 0;
  }
  getResourceBundle(lng, ns) {
    if (!ns) ns = this.options.defaultNS;
    return this.getResource(lng, ns);
  }
  getDataByLanguage(lng) {
    return this.data[lng];
  }
  hasLanguageSomeTranslations(lng) {
    const data = this.getDataByLanguage(lng);
    const n = data && Object.keys(data) || [];
    return !!n.find((v) => data[v] && Object.keys(data[v]).length > 0);
  }
  toJSON() {
    return this.data;
  }
};
var postProcessor = {
  processors: {},
  addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle(processors, value, key, options, translator) {
    processors.forEach((processor) => {
      value = this.processors[processor]?.process(value, key, options, translator) ?? value;
    });
    return value;
  }
};
var checkedLoadedFor = {};
var shouldHandleAsObject = (res) => !isString(res) && typeof res !== "boolean" && typeof res !== "number";
var Translator = class _Translator extends EventEmitter {
  constructor(services) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super();
    copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, this);
    this.options = options;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    this.logger = baseLogger.create("translator");
  }
  changeLanguage(lng) {
    if (lng) this.language = lng;
  }
  exists(key) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (key == null) {
      return false;
    }
    const resolved = this.resolve(key, options);
    return resolved?.res !== void 0;
  }
  extractFromKey(key, options) {
    let nsSeparator = options.nsSeparator !== void 0 ? options.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === void 0) nsSeparator = ":";
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    let namespaces = options.ns || this.options.defaultNS || [];
    const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
    const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
    if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
      const m = key.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) {
        return {
          key,
          namespaces: isString(namespaces) ? [namespaces] : namespaces
        };
      }
      const parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    return {
      key,
      namespaces: isString(namespaces) ? [namespaces] : namespaces
    };
  }
  translate(keys, options, lastKey) {
    if (typeof options !== "object" && this.options.overloadTranslationOptionHandler) {
      options = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (typeof options === "object") options = __spreadValues({}, options);
    if (!options) options = {};
    if (keys == null) return "";
    if (!Array.isArray(keys)) keys = [String(keys)];
    const returnDetails = options.returnDetails !== void 0 ? options.returnDetails : this.options.returnDetails;
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    const {
      key,
      namespaces
    } = this.extractFromKey(keys[keys.length - 1], options);
    const namespace = namespaces[namespaces.length - 1];
    const lng = options.lng || this.language;
    const appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (lng?.toLowerCase() === "cimode") {
      if (appendNamespaceToCIMode) {
        const nsSeparator = options.nsSeparator || this.options.nsSeparator;
        if (returnDetails) {
          return {
            res: `${namespace}${nsSeparator}${key}`,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace,
            usedParams: this.getUsedParamsDetails(options)
          };
        }
        return `${namespace}${nsSeparator}${key}`;
      }
      if (returnDetails) {
        return {
          res: key,
          usedKey: key,
          exactUsedKey: key,
          usedLng: lng,
          usedNS: namespace,
          usedParams: this.getUsedParamsDetails(options)
        };
      }
      return key;
    }
    const resolved = this.resolve(keys, options);
    let res = resolved?.res;
    const resUsedKey = resolved?.usedKey || key;
    const resExactUsedKey = resolved?.exactUsedKey || key;
    const noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
    const joinArrays = options.joinArrays !== void 0 ? options.joinArrays : this.options.joinArrays;
    const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
    const needsPluralHandling = options.count !== void 0 && !isString(options.count);
    const hasDefaultValue = _Translator.hasDefaultValue(options);
    const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : "";
    const defaultValueSuffixOrdinalFallback = options.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, {
      ordinal: false
    }) : "";
    const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0;
    const defaultValue = needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] || options[`defaultValue${defaultValueSuffix}`] || options[`defaultValue${defaultValueSuffixOrdinalFallback}`] || options.defaultValue;
    let resForObjHndl = res;
    if (handleAsObjectInI18nFormat && !res && hasDefaultValue) {
      resForObjHndl = defaultValue;
    }
    const handleAsObject = shouldHandleAsObject(resForObjHndl);
    const resType = Object.prototype.toString.apply(resForObjHndl);
    if (handleAsObjectInI18nFormat && resForObjHndl && handleAsObject && noObject.indexOf(resType) < 0 && !(isString(joinArrays) && Array.isArray(resForObjHndl))) {
      if (!options.returnObjects && !this.options.returnObjects) {
        if (!this.options.returnedObjectHandler) {
          this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        }
        const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, resForObjHndl, __spreadProps(__spreadValues({}, options), {
          ns: namespaces
        })) : `key '${key} (${this.language})' returned an object instead of string.`;
        if (returnDetails) {
          resolved.res = r;
          resolved.usedParams = this.getUsedParamsDetails(options);
          return resolved;
        }
        return r;
      }
      if (keySeparator) {
        const resTypeIsArray = Array.isArray(resForObjHndl);
        const copy2 = resTypeIsArray ? [] : {};
        const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
        for (const m in resForObjHndl) {
          if (Object.prototype.hasOwnProperty.call(resForObjHndl, m)) {
            const deepKey = `${newKeyToUse}${keySeparator}${m}`;
            if (hasDefaultValue && !res) {
              copy2[m] = this.translate(deepKey, __spreadValues(__spreadProps(__spreadValues({}, options), {
                defaultValue: shouldHandleAsObject(defaultValue) ? defaultValue[m] : void 0
              }), {
                joinArrays: false,
                ns: namespaces
              }));
            } else {
              copy2[m] = this.translate(deepKey, __spreadValues(__spreadValues({}, options), {
                joinArrays: false,
                ns: namespaces
              }));
            }
            if (copy2[m] === deepKey) copy2[m] = resForObjHndl[m];
          }
        }
        res = copy2;
      }
    } else if (handleAsObjectInI18nFormat && isString(joinArrays) && Array.isArray(res)) {
      res = res.join(joinArrays);
      if (res) res = this.extendTranslation(res, keys, options, lastKey);
    } else {
      let usedDefault = false;
      let usedKey = false;
      if (!this.isValidLookup(res) && hasDefaultValue) {
        usedDefault = true;
        res = defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }
      const missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
      const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
      const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
      if (usedKey || usedDefault || updateMissing) {
        this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
        if (keySeparator) {
          const fk = this.resolve(key, __spreadProps(__spreadValues({}, options), {
            keySeparator: false
          }));
          if (fk && fk.res) this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let lngs = [];
        const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
          for (let i = 0; i < fallbackLngs.length; i++) {
            lngs.push(fallbackLngs[i]);
          }
        } else if (this.options.saveMissingTo === "all") {
          lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
        } else {
          lngs.push(options.lng || this.language);
        }
        const send = (l, k, specificDefaultValue) => {
          const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
          if (this.options.missingKeyHandler) {
            this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
          } else if (this.backendConnector?.saveMissing) {
            this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
          }
          this.emit("missingKey", l, namespace, k, res);
        };
        if (this.options.saveMissing) {
          if (this.options.saveMissingPlurals && needsPluralHandling) {
            lngs.forEach((language) => {
              const suffixes = this.pluralResolver.getSuffixes(language, options);
              if (needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] && suffixes.indexOf(`${this.options.pluralSeparator}zero`) < 0) {
                suffixes.push(`${this.options.pluralSeparator}zero`);
              }
              suffixes.forEach((suffix) => {
                send([language], key + suffix, options[`defaultValue${suffix}`] || defaultValue);
              });
            });
          } else {
            send(lngs, key, defaultValue);
          }
        }
      }
      res = this.extendTranslation(res, keys, options, resolved, lastKey);
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = `${namespace}:${key}`;
      if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
        res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}:${key}` : key, usedDefault ? res : void 0);
      }
    }
    if (returnDetails) {
      resolved.res = res;
      resolved.usedParams = this.getUsedParamsDetails(options);
      return resolved;
    }
    return res;
  }
  extendTranslation(res, key, options, resolved, lastKey) {
    var _this = this;
    if (this.i18nFormat?.parse) {
      res = this.i18nFormat.parse(res, __spreadValues(__spreadValues({}, this.options.interpolation.defaultVariables), options), options.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
        resolved
      });
    } else if (!options.skipInterpolation) {
      if (options.interpolation) this.interpolator.init(__spreadValues(__spreadValues({}, options), {
        interpolation: __spreadValues(__spreadValues({}, this.options.interpolation), options.interpolation)
      }));
      const skipOnVariables = isString(res) && (options?.interpolation?.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let nestBef;
      if (skipOnVariables) {
        const nb = res.match(this.interpolator.nestingRegexp);
        nestBef = nb && nb.length;
      }
      let data = options.replace && !isString(options.replace) ? options.replace : options;
      if (this.options.interpolation.defaultVariables) data = __spreadValues(__spreadValues({}, this.options.interpolation.defaultVariables), data);
      res = this.interpolator.interpolate(res, data, options.lng || this.language || resolved.usedLng, options);
      if (skipOnVariables) {
        const na = res.match(this.interpolator.nestingRegexp);
        const nestAft = na && na.length;
        if (nestBef < nestAft) options.nest = false;
      }
      if (!options.lng && resolved && resolved.res) options.lng = this.language || resolved.usedLng;
      if (options.nest !== false) res = this.interpolator.nest(res, function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (lastKey?.[0] === args[0] && !options.context) {
          _this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
          return null;
        }
        return _this.translate(...args, key);
      }, options);
      if (options.interpolation) this.interpolator.reset();
    }
    const postProcess = options.postProcess || this.options.postProcess;
    const postProcessorNames = isString(postProcess) ? [postProcess] : postProcess;
    if (res != null && postProcessorNames?.length && options.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? __spreadValues({
        i18nResolved: __spreadProps(__spreadValues({}, resolved), {
          usedParams: this.getUsedParamsDetails(options)
        })
      }, options) : options, this);
    }
    return res;
  }
  resolve(keys) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let found;
    let usedKey;
    let exactUsedKey;
    let usedLng;
    let usedNS;
    if (isString(keys)) keys = [keys];
    keys.forEach((k) => {
      if (this.isValidLookup(found)) return;
      const extracted = this.extractFromKey(k, options);
      const key = extracted.key;
      usedKey = key;
      let namespaces = extracted.namespaces;
      if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
      const needsPluralHandling = options.count !== void 0 && !isString(options.count);
      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0;
      const needsContextHandling = options.context !== void 0 && (isString(options.context) || typeof options.context === "number") && options.context !== "";
      const codes = options.lngs ? options.lngs : this.languageUtils.toResolveHierarchy(options.lng || this.language, options.fallbackLng);
      namespaces.forEach((ns) => {
        if (this.isValidLookup(found)) return;
        usedNS = ns;
        if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(usedNS)) {
          checkedLoadedFor[`${codes[0]}-${ns}`] = true;
          this.logger.warn(`key "${usedKey}" for languages "${codes.join(", ")}" won't get resolved as namespace "${usedNS}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        }
        codes.forEach((code) => {
          if (this.isValidLookup(found)) return;
          usedLng = code;
          const finalKeys = [key];
          if (this.i18nFormat?.addLookupKeys) {
            this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
          } else {
            let pluralSuffix;
            if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, options.count, options);
            const zeroSuffix = `${this.options.pluralSeparator}zero`;
            const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (needsPluralHandling) {
              finalKeys.push(key + pluralSuffix);
              if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
              }
              if (needsZeroSuffixLookup) {
                finalKeys.push(key + zeroSuffix);
              }
            }
            if (needsContextHandling) {
              const contextKey = `${key}${this.options.contextSeparator}${options.context}`;
              finalKeys.push(contextKey);
              if (needsPluralHandling) {
                finalKeys.push(contextKey + pluralSuffix);
                if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                  finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                }
                if (needsZeroSuffixLookup) {
                  finalKeys.push(contextKey + zeroSuffix);
                }
              }
            }
          }
          let possibleKey;
          while (possibleKey = finalKeys.pop()) {
            if (!this.isValidLookup(found)) {
              exactUsedKey = possibleKey;
              found = this.getResource(code, ns, possibleKey, options);
            }
          }
        });
      });
    });
    return {
      res: found,
      usedKey,
      exactUsedKey,
      usedLng,
      usedNS
    };
  }
  isValidLookup(res) {
    return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
  }
  getResource(code, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (this.i18nFormat?.getResource) return this.i18nFormat.getResource(code, ns, key, options);
    return this.resourceStore.getResource(code, ns, key, options);
  }
  getUsedParamsDetails() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const optionsKeys = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"];
    const useOptionsReplaceForData = options.replace && !isString(options.replace);
    let data = useOptionsReplaceForData ? options.replace : options;
    if (useOptionsReplaceForData && typeof options.count !== "undefined") {
      data.count = options.count;
    }
    if (this.options.interpolation.defaultVariables) {
      data = __spreadValues(__spreadValues({}, this.options.interpolation.defaultVariables), data);
    }
    if (!useOptionsReplaceForData) {
      data = __spreadValues({}, data);
      for (const key of optionsKeys) {
        delete data[key];
      }
    }
    return data;
  }
  static hasDefaultValue(options) {
    const prefix = "defaultValue";
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && void 0 !== options[option]) {
        return true;
      }
    }
    return false;
  }
};
var LanguageUtil = class {
  constructor(options) {
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create("languageUtils");
  }
  getScriptPartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0) return null;
    const p = code.split("-");
    if (p.length === 2) return null;
    p.pop();
    if (p[p.length - 1].toLowerCase() === "x") return null;
    return this.formatLanguageCode(p.join("-"));
  }
  getLanguagePartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0) return code;
    const p = code.split("-");
    return this.formatLanguageCode(p[0]);
  }
  formatLanguageCode(code) {
    if (isString(code) && code.indexOf("-") > -1) {
      let formattedCode;
      try {
        formattedCode = Intl.getCanonicalLocales(code)[0];
      } catch (e) {
      }
      if (formattedCode && this.options.lowerCaseLng) {
        formattedCode = formattedCode.toLowerCase();
      }
      if (formattedCode) return formattedCode;
      if (this.options.lowerCaseLng) {
        return code.toLowerCase();
      }
      return code;
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  }
  isSupportedCode(code) {
    if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
  }
  getBestMatchFromCodes(codes) {
    if (!codes) return null;
    let found;
    codes.forEach((code) => {
      if (found) return;
      const cleanedLng = this.formatLanguageCode(code);
      if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
    });
    if (!found && this.options.supportedLngs) {
      codes.forEach((code) => {
        if (found) return;
        const lngOnly = this.getLanguagePartFromCode(code);
        if (this.isSupportedCode(lngOnly)) return found = lngOnly;
        found = this.options.supportedLngs.find((supportedLng) => {
          if (supportedLng === lngOnly) return supportedLng;
          if (supportedLng.indexOf("-") < 0 && lngOnly.indexOf("-") < 0) return;
          if (supportedLng.indexOf("-") > 0 && lngOnly.indexOf("-") < 0 && supportedLng.substring(0, supportedLng.indexOf("-")) === lngOnly) return supportedLng;
          if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1) return supportedLng;
        });
      });
    }
    if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
    return found;
  }
  getFallbackCodes(fallbacks, code) {
    if (!fallbacks) return [];
    if (typeof fallbacks === "function") fallbacks = fallbacks(code);
    if (isString(fallbacks)) fallbacks = [fallbacks];
    if (Array.isArray(fallbacks)) return fallbacks;
    if (!code) return fallbacks.default || [];
    let found = fallbacks[code];
    if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found) found = fallbacks[this.formatLanguageCode(code)];
    if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
    if (!found) found = fallbacks.default;
    return found || [];
  }
  toResolveHierarchy(code, fallbackCode) {
    const fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
    const codes = [];
    const addCode = (c) => {
      if (!c) return;
      if (this.isSupportedCode(c)) {
        codes.push(c);
      } else {
        this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
      }
    };
    if (isString(code) && (code.indexOf("-") > -1 || code.indexOf("_") > -1)) {
      if (this.options.load !== "languageOnly") addCode(this.formatLanguageCode(code));
      if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly") addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== "currentOnly") addCode(this.getLanguagePartFromCode(code));
    } else if (isString(code)) {
      addCode(this.formatLanguageCode(code));
    }
    fallbackCodes.forEach((fc) => {
      if (codes.indexOf(fc) < 0) addCode(this.formatLanguageCode(fc));
    });
    return codes;
  }
};
var suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
var dummyRule = {
  select: (count) => count === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
var PluralResolver = class {
  constructor(languageUtils) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create("pluralResolver");
    this.pluralRulesCache = {};
  }
  addRule(lng, obj) {
    this.rules[lng] = obj;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const cleanedCode = getCleanedCode(code === "dev" ? "en" : code);
    const type = options.ordinal ? "ordinal" : "cardinal";
    const cacheKey = JSON.stringify({
      cleanedCode,
      type
    });
    if (cacheKey in this.pluralRulesCache) {
      return this.pluralRulesCache[cacheKey];
    }
    let rule;
    try {
      rule = new Intl.PluralRules(cleanedCode, {
        type
      });
    } catch (err) {
      if (!Intl) {
        this.logger.error("No Intl support, please use an Intl polyfill!");
        return dummyRule;
      }
      if (!code.match(/-|_/)) return dummyRule;
      const lngPart = this.languageUtils.getLanguagePartFromCode(code);
      rule = this.getRule(lngPart, options);
    }
    this.pluralRulesCache[cacheKey] = rule;
    return rule;
  }
  needsPlural(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let rule = this.getRule(code, options);
    if (!rule) rule = this.getRule("dev", options);
    return rule?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(code, key) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(code, options).map((suffix) => `${key}${suffix}`);
  }
  getSuffixes(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let rule = this.getRule(code, options);
    if (!rule) rule = this.getRule("dev", options);
    if (!rule) return [];
    return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory) => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${pluralCategory}`);
  }
  getSuffix(code, count) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const rule = this.getRule(code, options);
    if (rule) {
      return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${rule.select(count)}`;
    }
    this.logger.warn(`no plural rule found for: ${code}`);
    return this.getSuffix("dev", count, options);
  }
};
var deepFindWithDefaults = function(data, defaultData, key) {
  let keySeparator = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".";
  let ignoreJSONStructure = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
  let path = getPathWithDefaults(data, defaultData, key);
  if (!path && ignoreJSONStructure && isString(key)) {
    path = deepFind(data, key, keySeparator);
    if (path === void 0) path = deepFind(defaultData, key, keySeparator);
  }
  return path;
};
var regexSafe = (val) => val.replace(/\$/g, "$$$$");
var Interpolator = class {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = baseLogger.create("interpolator");
    this.options = options;
    this.format = options?.interpolation?.format || ((value) => value);
    this.init(options);
  }
  init() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!options.interpolation) options.interpolation = {
      escapeValue: true
    };
    const {
      escape: escape$1,
      escapeValue,
      useRawValueToEscape,
      prefix,
      prefixEscaped,
      suffix,
      suffixEscaped,
      formatSeparator,
      unescapeSuffix,
      unescapePrefix,
      nestingPrefix,
      nestingPrefixEscaped,
      nestingSuffix,
      nestingSuffixEscaped,
      nestingOptionsSeparator,
      maxReplaces,
      alwaysFormat
    } = options.interpolation;
    this.escape = escape$1 !== void 0 ? escape$1 : escape;
    this.escapeValue = escapeValue !== void 0 ? escapeValue : true;
    this.useRawValueToEscape = useRawValueToEscape !== void 0 ? useRawValueToEscape : false;
    this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || "{{";
    this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || "}}";
    this.formatSeparator = formatSeparator || ",";
    this.unescapePrefix = unescapeSuffix ? "" : unescapePrefix || "-";
    this.unescapeSuffix = this.unescapePrefix ? "" : unescapeSuffix || "";
    this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape("$t(");
    this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(")");
    this.nestingOptionsSeparator = nestingOptionsSeparator || ",";
    this.maxReplaces = maxReplaces || 1e3;
    this.alwaysFormat = alwaysFormat !== void 0 ? alwaysFormat : false;
    this.resetRegExp();
  }
  reset() {
    if (this.options) this.init(this.options);
  }
  resetRegExp() {
    const getOrResetRegExp = (existingRegExp, pattern) => {
      if (existingRegExp?.source === pattern) {
        existingRegExp.lastIndex = 0;
        return existingRegExp;
      }
      return new RegExp(pattern, "g");
    };
    this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
    this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
    this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(str, data, lng, options) {
    let match;
    let value;
    let replaces;
    const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    const handleFormat = (key) => {
      if (key.indexOf(this.formatSeparator) < 0) {
        const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(path, void 0, lng, __spreadProps(__spreadValues(__spreadValues({}, options), data), {
          interpolationkey: key
        })) : path;
      }
      const p = key.split(this.formatSeparator);
      const k = p.shift().trim();
      const f = p.join(this.formatSeparator).trim();
      return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, __spreadProps(__spreadValues(__spreadValues({}, options), data), {
        interpolationkey: k
      }));
    };
    this.resetRegExp();
    const missingInterpolationHandler = options?.missingInterpolationHandler || this.options.missingInterpolationHandler;
    const skipOnVariables = options?.interpolation?.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    const todos = [{
      regex: this.regexpUnescape,
      safeValue: (val) => regexSafe(val)
    }, {
      regex: this.regexp,
      safeValue: (val) => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
    }];
    todos.forEach((todo) => {
      replaces = 0;
      while (match = todo.regex.exec(str)) {
        const matchedVar = match[1].trim();
        value = handleFormat(matchedVar);
        if (value === void 0) {
          if (typeof missingInterpolationHandler === "function") {
            const temp = missingInterpolationHandler(str, match, options);
            value = isString(temp) ? temp : "";
          } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
            value = "";
          } else if (skipOnVariables) {
            value = match[0];
            continue;
          } else {
            this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
            value = "";
          }
        } else if (!isString(value) && !this.useRawValueToEscape) {
          value = makeString(value);
        }
        const safeValue = todo.safeValue(value);
        str = str.replace(match[0], safeValue);
        if (skipOnVariables) {
          todo.regex.lastIndex += value.length;
          todo.regex.lastIndex -= match[0].length;
        } else {
          todo.regex.lastIndex = 0;
        }
        replaces++;
        if (replaces >= this.maxReplaces) {
          break;
        }
      }
    });
    return str;
  }
  nest(str, fc) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let match;
    let value;
    let clonedOptions;
    const handleHasOptions = (key, inheritedOptions) => {
      const sep = this.nestingOptionsSeparator;
      if (key.indexOf(sep) < 0) return key;
      const c = key.split(new RegExp(`${sep}[ ]*{`));
      let optionsString = `{${c[1]}`;
      key = c[0];
      optionsString = this.interpolate(optionsString, clonedOptions);
      const matchedSingleQuotes = optionsString.match(/'/g);
      const matchedDoubleQuotes = optionsString.match(/"/g);
      if ((matchedSingleQuotes?.length ?? 0) % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
        optionsString = optionsString.replace(/'/g, '"');
      }
      try {
        clonedOptions = JSON.parse(optionsString);
        if (inheritedOptions) clonedOptions = __spreadValues(__spreadValues({}, inheritedOptions), clonedOptions);
      } catch (e) {
        this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
        return `${key}${sep}${optionsString}`;
      }
      if (clonedOptions.defaultValue && clonedOptions.defaultValue.indexOf(this.prefix) > -1) delete clonedOptions.defaultValue;
      return key;
    };
    while (match = this.nestingRegexp.exec(str)) {
      let formatters = [];
      clonedOptions = __spreadValues({}, options);
      clonedOptions = clonedOptions.replace && !isString(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      let doReduce = false;
      if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
        const r = match[1].split(this.formatSeparator).map((elem) => elem.trim());
        match[1] = r.shift();
        formatters = r;
        doReduce = true;
      }
      value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
      if (value && match[0] === str && !isString(value)) return value;
      if (!isString(value)) value = makeString(value);
      if (!value) {
        this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
        value = "";
      }
      if (doReduce) {
        value = formatters.reduce((v, f) => this.format(v, f, options.lng, __spreadProps(__spreadValues({}, options), {
          interpolationkey: match[1].trim()
        })), value.trim());
      }
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  }
};
var parseFormatStr = (formatStr) => {
  let formatName = formatStr.toLowerCase().trim();
  const formatOptions = {};
  if (formatStr.indexOf("(") > -1) {
    const p = formatStr.split("(");
    formatName = p[0].toLowerCase().trim();
    const optStr = p[1].substring(0, p[1].length - 1);
    if (formatName === "currency" && optStr.indexOf(":") < 0) {
      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
    } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
      if (!formatOptions.range) formatOptions.range = optStr.trim();
    } else {
      const opts = optStr.split(";");
      opts.forEach((opt) => {
        if (opt) {
          const [key, ...rest] = opt.split(":");
          const val = rest.join(":").trim().replace(/^'+|'+$/g, "");
          const trimmedKey = key.trim();
          if (!formatOptions[trimmedKey]) formatOptions[trimmedKey] = val;
          if (val === "false") formatOptions[trimmedKey] = false;
          if (val === "true") formatOptions[trimmedKey] = true;
          if (!isNaN(val)) formatOptions[trimmedKey] = parseInt(val, 10);
        }
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
};
var createCachedFormatter = (fn) => {
  const cache = {};
  return (val, lng, options) => {
    let optForCache = options;
    if (options && options.interpolationkey && options.formatParams && options.formatParams[options.interpolationkey] && options[options.interpolationkey]) {
      optForCache = __spreadProps(__spreadValues({}, optForCache), {
        [options.interpolationkey]: void 0
      });
    }
    const key = lng + JSON.stringify(optForCache);
    let formatter = cache[key];
    if (!formatter) {
      formatter = fn(getCleanedCode(lng), options);
      cache[key] = formatter;
    }
    return formatter(val);
  };
};
var Formatter = class {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = baseLogger.create("formatter");
    this.options = options;
    this.formats = {
      number: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, __spreadValues({}, opt));
        return (val) => formatter.format(val);
      }),
      currency: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, __spreadProps(__spreadValues({}, opt), {
          style: "currency"
        }));
        return (val) => formatter.format(val);
      }),
      datetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.DateTimeFormat(lng, __spreadValues({}, opt));
        return (val) => formatter.format(val);
      }),
      relativetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.RelativeTimeFormat(lng, __spreadValues({}, opt));
        return (val) => formatter.format(val, opt.range || "day");
      }),
      list: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.ListFormat(lng, __spreadValues({}, opt));
        return (val) => formatter.format(val);
      })
    };
    this.init(options);
  }
  init(services) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = options.interpolation.formatSeparator || ",";
  }
  add(name, fc) {
    this.formats[name.toLowerCase().trim()] = fc;
  }
  addCached(name, fc) {
    this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
  }
  format(value, format, lng) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const formats = format.split(this.formatSeparator);
    if (formats.length > 1 && formats[0].indexOf("(") > 1 && formats[0].indexOf(")") < 0 && formats.find((f) => f.indexOf(")") > -1)) {
      const lastIndex = formats.findIndex((f) => f.indexOf(")") > -1);
      formats[0] = [formats[0], ...formats.splice(1, lastIndex)].join(this.formatSeparator);
    }
    const result = formats.reduce((mem, f) => {
      const {
        formatName,
        formatOptions
      } = parseFormatStr(f);
      if (this.formats[formatName]) {
        let formatted = mem;
        try {
          const valOptions = options?.formatParams?.[options.interpolationkey] || {};
          const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
          formatted = this.formats[formatName](mem, l, __spreadValues(__spreadValues(__spreadValues({}, formatOptions), options), valOptions));
        } catch (error) {
          this.logger.warn(error);
        }
        return formatted;
      } else {
        this.logger.warn(`there was no format function for ${formatName}`);
      }
      return mem;
    }, value);
    return result;
  }
};
var removePending = (q, name) => {
  if (q.pending[name] !== void 0) {
    delete q.pending[name];
    q.pendingCount--;
  }
};
var Connector = class extends EventEmitter {
  constructor(backend, store, services) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super();
    this.backend = backend;
    this.store = store;
    this.services = services;
    this.languageUtils = services.languageUtils;
    this.options = options;
    this.logger = baseLogger.create("backendConnector");
    this.waitingReads = [];
    this.maxParallelReads = options.maxParallelReads || 10;
    this.readingCalls = 0;
    this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    this.state = {};
    this.queue = [];
    this.backend?.init?.(services, options.backend, options);
  }
  queueLoad(languages, namespaces, options, callback) {
    const toLoad = {};
    const pending = {};
    const toLoadLanguages = {};
    const toLoadNamespaces = {};
    languages.forEach((lng) => {
      let hasAllNamespaces = true;
      namespaces.forEach((ns) => {
        const name = `${lng}|${ns}`;
        if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
          this.state[name] = 2;
        } else if (this.state[name] < 0) ;
        else if (this.state[name] === 1) {
          if (pending[name] === void 0) pending[name] = true;
        } else {
          this.state[name] = 1;
          hasAllNamespaces = false;
          if (pending[name] === void 0) pending[name] = true;
          if (toLoad[name] === void 0) toLoad[name] = true;
          if (toLoadNamespaces[ns] === void 0) toLoadNamespaces[ns] = true;
        }
      });
      if (!hasAllNamespaces) toLoadLanguages[lng] = true;
    });
    if (Object.keys(toLoad).length || Object.keys(pending).length) {
      this.queue.push({
        pending,
        pendingCount: Object.keys(pending).length,
        loaded: {},
        errors: [],
        callback
      });
    }
    return {
      toLoad: Object.keys(toLoad),
      pending: Object.keys(pending),
      toLoadLanguages: Object.keys(toLoadLanguages),
      toLoadNamespaces: Object.keys(toLoadNamespaces)
    };
  }
  loaded(name, err, data) {
    const s = name.split("|");
    const lng = s[0];
    const ns = s[1];
    if (err) this.emit("failedLoading", lng, ns, err);
    if (!err && data) {
      this.store.addResourceBundle(lng, ns, data, void 0, void 0, {
        skipCopy: true
      });
    }
    this.state[name] = err ? -1 : 2;
    if (err && data) this.state[name] = 0;
    const loaded = {};
    this.queue.forEach((q) => {
      pushPath(q.loaded, [lng], ns);
      removePending(q, name);
      if (err) q.errors.push(err);
      if (q.pendingCount === 0 && !q.done) {
        Object.keys(q.loaded).forEach((l) => {
          if (!loaded[l]) loaded[l] = {};
          const loadedKeys = q.loaded[l];
          if (loadedKeys.length) {
            loadedKeys.forEach((n) => {
              if (loaded[l][n] === void 0) loaded[l][n] = true;
            });
          }
        });
        q.done = true;
        if (q.errors.length) {
          q.callback(q.errors);
        } else {
          q.callback();
        }
      }
    });
    this.emit("loaded", loaded);
    this.queue = this.queue.filter((q) => !q.done);
  }
  read(lng, ns, fcName) {
    let tried = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    let wait = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout;
    let callback = arguments.length > 5 ? arguments[5] : void 0;
    if (!lng.length) return callback(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng,
        ns,
        fcName,
        tried,
        wait,
        callback
      });
      return;
    }
    this.readingCalls++;
    const resolver = (err, data) => {
      this.readingCalls--;
      if (this.waitingReads.length > 0) {
        const next = this.waitingReads.shift();
        this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
      }
      if (err && data && tried < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    };
    const fc = this.backend[fcName].bind(this.backend);
    if (fc.length === 2) {
      try {
        const r = fc(lng, ns);
        if (r && typeof r.then === "function") {
          r.then((data) => resolver(null, data)).catch(resolver);
        } else {
          resolver(null, r);
        }
      } catch (err) {
        resolver(err);
      }
      return;
    }
    return fc(lng, ns, resolver);
  }
  prepareLoading(languages, namespaces) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let callback = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend) {
      this.logger.warn("No backend was added via i18next.use. Will not load resources.");
      return callback && callback();
    }
    if (isString(languages)) languages = this.languageUtils.toResolveHierarchy(languages);
    if (isString(namespaces)) namespaces = [namespaces];
    const toLoad = this.queueLoad(languages, namespaces, options, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length) callback();
      return null;
    }
    toLoad.toLoad.forEach((name) => {
      this.loadOne(name);
    });
  }
  load(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {}, callback);
  }
  reload(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {
      reload: true
    }, callback);
  }
  loadOne(name) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const s = name.split("|");
    const lng = s[0];
    const ns = s[1];
    this.read(lng, ns, "read", void 0, void 0, (err, data) => {
      if (err) this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
      if (!err && data) this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
      this.loaded(name, err, data);
    });
  }
  saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
    let options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
    let clb = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(namespace)) {
      this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (key === void 0 || key === null || key === "") return;
    if (this.backend?.create) {
      const opts = __spreadProps(__spreadValues({}, options), {
        isUpdate
      });
      const fc = this.backend.create.bind(this.backend);
      if (fc.length < 6) {
        try {
          let r;
          if (fc.length === 5) {
            r = fc(languages, namespace, key, fallbackValue, opts);
          } else {
            r = fc(languages, namespace, key, fallbackValue);
          }
          if (r && typeof r.then === "function") {
            r.then((data) => clb(null, data)).catch(clb);
          } else {
            clb(null, r);
          }
        } catch (err) {
          clb(err);
        }
      } else {
        fc(languages, namespace, key, fallbackValue, clb, opts);
      }
    }
    if (!languages || !languages[0]) return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  }
};
var get = () => ({
  debug: false,
  initAsync: true,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: false,
  supportedLngs: false,
  nonExplicitSupportedLngs: false,
  load: "all",
  preload: false,
  simplifyPluralSuffix: true,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: false,
  saveMissing: false,
  updateMissing: false,
  saveMissingTo: "fallback",
  saveMissingPlurals: true,
  missingKeyHandler: false,
  missingInterpolationHandler: false,
  postProcess: false,
  postProcessPassResolved: false,
  returnNull: false,
  returnEmptyString: true,
  returnObjects: false,
  joinArrays: false,
  returnedObjectHandler: false,
  parseMissingKeyHandler: false,
  appendNamespaceToMissingKey: false,
  appendNamespaceToCIMode: false,
  overloadTranslationOptionHandler: (args) => {
    let ret = {};
    if (typeof args[1] === "object") ret = args[1];
    if (isString(args[1])) ret.defaultValue = args[1];
    if (isString(args[2])) ret.tDescription = args[2];
    if (typeof args[2] === "object" || typeof args[3] === "object") {
      const options = args[3] || args[2];
      Object.keys(options).forEach((key) => {
        ret[key] = options[key];
      });
    }
    return ret;
  },
  interpolation: {
    escapeValue: true,
    format: (value) => value,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: true
  }
});
var transformOptions = (options) => {
  if (isString(options.ns)) options.ns = [options.ns];
  if (isString(options.fallbackLng)) options.fallbackLng = [options.fallbackLng];
  if (isString(options.fallbackNS)) options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs?.indexOf?.("cimode") < 0) {
    options.supportedLngs = options.supportedLngs.concat(["cimode"]);
  }
  if (typeof options.initImmediate === "boolean") options.initAsync = options.initImmediate;
  return options;
};
var noop = () => {
};
var bindMemberFunctions = (inst) => {
  const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach((mem) => {
    if (typeof inst[mem] === "function") {
      inst[mem] = inst[mem].bind(inst);
    }
  });
};
var I18n = class _I18n extends EventEmitter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    super();
    this.options = transformOptions(options);
    this.services = {};
    this.logger = baseLogger;
    this.modules = {
      external: []
    };
    bindMemberFunctions(this);
    if (callback && !this.isInitialized && !options.isClone) {
      if (!this.options.initAsync) {
        this.init(options, callback);
        return this;
      }
      setTimeout(() => {
        this.init(options, callback);
      }, 0);
    }
  }
  init() {
    var _this = this;
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = true;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (options.defaultNS == null && options.ns) {
      if (isString(options.ns)) {
        options.defaultNS = options.ns;
      } else if (options.ns.indexOf("translation") < 0) {
        options.defaultNS = options.ns[0];
      }
    }
    const defOpts = get();
    this.options = __spreadValues(__spreadValues(__spreadValues({}, defOpts), this.options), transformOptions(options));
    this.options.interpolation = __spreadValues(__spreadValues({}, defOpts.interpolation), this.options.interpolation);
    if (options.keySeparator !== void 0) {
      this.options.userDefinedKeySeparator = options.keySeparator;
    }
    if (options.nsSeparator !== void 0) {
      this.options.userDefinedNsSeparator = options.nsSeparator;
    }
    const createClassOnDemand = (ClassOrObject) => {
      if (!ClassOrObject) return null;
      if (typeof ClassOrObject === "function") return new ClassOrObject();
      return ClassOrObject;
    };
    if (!this.options.isClone) {
      if (this.modules.logger) {
        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        baseLogger.init(null, this.options);
      }
      let formatter;
      if (this.modules.formatter) {
        formatter = this.modules.formatter;
      } else {
        formatter = Formatter;
      }
      const lu = new LanguageUtil(this.options);
      this.store = new ResourceStore(this.options.resources, this.options);
      const s = this.services;
      s.logger = baseLogger;
      s.resourceStore = this.store;
      s.languageUtils = lu;
      s.pluralResolver = new PluralResolver(lu, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      });
      if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
        s.formatter = createClassOnDemand(formatter);
        s.formatter.init(s, this.options);
        this.options.interpolation.format = s.formatter.format.bind(s.formatter);
      }
      s.interpolator = new Interpolator(this.options);
      s.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      };
      s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
      s.backendConnector.on("*", function(event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        _this.emit(event, ...args);
      });
      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
        if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
      }
      if (this.modules.i18nFormat) {
        s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
        if (s.i18nFormat.init) s.i18nFormat.init(this);
      }
      this.translator = new Translator(this.services, this.options);
      this.translator.on("*", function(event) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        _this.emit(event, ...args);
      });
      this.modules.external.forEach((m) => {
        if (m.init) m.init(this);
      });
    }
    this.format = this.options.interpolation.format;
    if (!callback) callback = noop;
    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      if (codes.length > 0 && codes[0] !== "dev") this.options.lng = codes[0];
    }
    if (!this.services.languageDetector && !this.options.lng) {
      this.logger.warn("init: no languageDetector is used and no lng is defined");
    }
    const storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
    storeApi.forEach((fcName) => {
      this[fcName] = function() {
        return _this.store[fcName](...arguments);
      };
    });
    const storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
    storeApiChained.forEach((fcName) => {
      this[fcName] = function() {
        _this.store[fcName](...arguments);
        return _this;
      };
    });
    const deferred = defer2();
    const load = () => {
      const finish = (err, t2) => {
        this.isInitializing = false;
        if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn("init: i18next is already initialized. You should call init just once!");
        this.isInitialized = true;
        if (!this.options.isClone) this.logger.log("initialized", this.options);
        this.emit("initialized", this.options);
        deferred.resolve(t2);
        callback(err, t2);
      };
      if (this.languages && !this.isInitialized) return finish(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, finish);
    };
    if (this.options.resources || !this.options.initAsync) {
      load();
    } else {
      setTimeout(load, 0);
    }
    return deferred;
  }
  loadResources(language) {
    let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    let usedCallback = callback;
    const usedLng = isString(language) ? language : this.language;
    if (typeof language === "function") usedCallback = language;
    if (!this.options.resources || this.options.partialBundledLanguages) {
      if (usedLng?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
      const toLoad = [];
      const append = (lng) => {
        if (!lng) return;
        if (lng === "cimode") return;
        const lngs = this.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach((l) => {
          if (l === "cimode") return;
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };
      if (!usedLng) {
        const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach((l) => append(l));
      } else {
        append(usedLng);
      }
      this.options.preload?.forEach?.((l) => append(l));
      this.services.backendConnector.load(toLoad, this.options.ns, (e) => {
        if (!e && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
        usedCallback(e);
      });
    } else {
      usedCallback(null);
    }
  }
  reloadResources(lngs, ns, callback) {
    const deferred = defer2();
    if (typeof lngs === "function") {
      callback = lngs;
      lngs = void 0;
    }
    if (typeof ns === "function") {
      callback = ns;
      ns = void 0;
    }
    if (!lngs) lngs = this.languages;
    if (!ns) ns = this.options.ns;
    if (!callback) callback = noop;
    this.services.backendConnector.reload(lngs, ns, (err) => {
      deferred.resolve();
      callback(err);
    });
    return deferred;
  }
  use(module) {
    if (!module) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!module.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    if (module.type === "backend") {
      this.modules.backend = module;
    }
    if (module.type === "logger" || module.log && module.warn && module.error) {
      this.modules.logger = module;
    }
    if (module.type === "languageDetector") {
      this.modules.languageDetector = module;
    }
    if (module.type === "i18nFormat") {
      this.modules.i18nFormat = module;
    }
    if (module.type === "postProcessor") {
      postProcessor.addPostProcessor(module);
    }
    if (module.type === "formatter") {
      this.modules.formatter = module;
    }
    if (module.type === "3rdParty") {
      this.modules.external.push(module);
    }
    return this;
  }
  setResolvedLanguage(l) {
    if (!l || !this.languages) return;
    if (["cimode", "dev"].indexOf(l) > -1) return;
    for (let li = 0; li < this.languages.length; li++) {
      const lngInLngs = this.languages[li];
      if (["cimode", "dev"].indexOf(lngInLngs) > -1) continue;
      if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
        this.resolvedLanguage = lngInLngs;
        break;
      }
    }
  }
  changeLanguage(lng, callback) {
    var _this2 = this;
    this.isLanguageChangingTo = lng;
    const deferred = defer2();
    this.emit("languageChanging", lng);
    const setLngProps = (l) => {
      this.language = l;
      this.languages = this.services.languageUtils.toResolveHierarchy(l);
      this.resolvedLanguage = void 0;
      this.setResolvedLanguage(l);
    };
    const done = (err, l) => {
      if (l) {
        setLngProps(l);
        this.translator.changeLanguage(l);
        this.isLanguageChangingTo = void 0;
        this.emit("languageChanged", l);
        this.logger.log("languageChanged", l);
      } else {
        this.isLanguageChangingTo = void 0;
      }
      deferred.resolve(function() {
        return _this2.t(...arguments);
      });
      if (callback) callback(err, function() {
        return _this2.t(...arguments);
      });
    };
    const setLng = (lngs) => {
      if (!lng && !lngs && this.services.languageDetector) lngs = [];
      const l = isString(lngs) ? lngs : this.services.languageUtils.getBestMatchFromCodes(lngs);
      if (l) {
        if (!this.language) {
          setLngProps(l);
        }
        if (!this.translator.language) this.translator.changeLanguage(l);
        this.services.languageDetector?.cacheUserLanguage?.(l);
      }
      this.loadResources(l, (err) => {
        done(err, l);
      });
    };
    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      if (this.services.languageDetector.detect.length === 0) {
        this.services.languageDetector.detect().then(setLng);
      } else {
        this.services.languageDetector.detect(setLng);
      }
    } else {
      setLng(lng);
    }
    return deferred;
  }
  getFixedT(lng, ns, keyPrefix) {
    var _this3 = this;
    const fixedT = function(key, opts) {
      let options;
      if (typeof opts !== "object") {
        for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          rest[_key3 - 2] = arguments[_key3];
        }
        options = _this3.options.overloadTranslationOptionHandler([key, opts].concat(rest));
      } else {
        options = __spreadValues({}, opts);
      }
      options.lng = options.lng || fixedT.lng;
      options.lngs = options.lngs || fixedT.lngs;
      options.ns = options.ns || fixedT.ns;
      if (options.keyPrefix !== "") options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
      const keySeparator = _this3.options.keySeparator || ".";
      let resultKey;
      if (options.keyPrefix && Array.isArray(key)) {
        resultKey = key.map((k) => `${options.keyPrefix}${keySeparator}${k}`);
      } else {
        resultKey = options.keyPrefix ? `${options.keyPrefix}${keySeparator}${key}` : key;
      }
      return _this3.t(resultKey, options);
    };
    if (isString(lng)) {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    fixedT.keyPrefix = keyPrefix;
    return fixedT;
  }
  t() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return this.translator?.translate(...args);
  }
  exists() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    return this.translator?.exists(...args);
  }
  setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  }
  hasLoadedNamespace(ns) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized) {
      this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
      return false;
    }
    if (!this.languages || !this.languages.length) {
      this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
      return false;
    }
    const lng = options.lng || this.resolvedLanguage || this.languages[0];
    const fallbackLng = this.options ? this.options.fallbackLng : false;
    const lastLng = this.languages[this.languages.length - 1];
    if (lng.toLowerCase() === "cimode") return true;
    const loadNotPending = (l, n) => {
      const loadState = this.services.backendConnector.state[`${l}|${n}`];
      return loadState === -1 || loadState === 0 || loadState === 2;
    };
    if (options.precheck) {
      const preResult = options.precheck(this, loadNotPending);
      if (preResult !== void 0) return preResult;
    }
    if (this.hasResourceBundle(lng, ns)) return true;
    if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
    return false;
  }
  loadNamespaces(ns, callback) {
    const deferred = defer2();
    if (!this.options.ns) {
      if (callback) callback();
      return Promise.resolve();
    }
    if (isString(ns)) ns = [ns];
    ns.forEach((n) => {
      if (this.options.ns.indexOf(n) < 0) this.options.ns.push(n);
    });
    this.loadResources((err) => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  loadLanguages(lngs, callback) {
    const deferred = defer2();
    if (isString(lngs)) lngs = [lngs];
    const preloaded = this.options.preload || [];
    const newLngs = lngs.filter((lng) => preloaded.indexOf(lng) < 0 && this.services.languageUtils.isSupportedCode(lng));
    if (!newLngs.length) {
      if (callback) callback();
      return Promise.resolve();
    }
    this.options.preload = preloaded.concat(newLngs);
    this.loadResources((err) => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  dir(lng) {
    if (!lng) lng = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language);
    if (!lng) return "rtl";
    const rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
    const languageUtils = this.services?.languageUtils || new LanguageUtil(get());
    return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    return new _I18n(options, callback);
  }
  cloneInstance() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    const forkResourceStore = options.forkResourceStore;
    if (forkResourceStore) delete options.forkResourceStore;
    const mergedOptions = __spreadValues(__spreadValues(__spreadValues({}, this.options), options), {
      isClone: true
    });
    const clone = new _I18n(mergedOptions);
    if (options.debug !== void 0 || options.prefix !== void 0) {
      clone.logger = clone.logger.clone(options);
    }
    const membersToCopy = ["store", "services", "language"];
    membersToCopy.forEach((m) => {
      clone[m] = this[m];
    });
    clone.services = __spreadValues({}, this.services);
    clone.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    if (forkResourceStore) {
      const clonedData = Object.keys(this.store.data).reduce((prev, l) => {
        prev[l] = __spreadValues({}, this.store.data[l]);
        return Object.keys(prev[l]).reduce((acc, n) => {
          acc[n] = __spreadValues({}, prev[l][n]);
          return acc;
        }, {});
      }, {});
      clone.store = new ResourceStore(clonedData, mergedOptions);
      clone.services.resourceStore = clone.store;
    }
    clone.translator = new Translator(clone.services, mergedOptions);
    clone.translator.on("*", function(event) {
      for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        args[_key6 - 1] = arguments[_key6];
      }
      clone.emit(event, ...args);
    });
    clone.init(mergedOptions, callback);
    clone.translator.options = mergedOptions;
    clone.translator.backendConnector.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    return clone;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
};
var instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;
var createInstance = instance.createInstance;
var dir = instance.dir;
var init = instance.init;
var loadResources = instance.loadResources;
var reloadResources = instance.reloadResources;
var use = instance.use;
var changeLanguage = instance.changeLanguage;
var getFixedT = instance.getFixedT;
var t = instance.t;
var exists = instance.exists;
var setDefaultNamespace = instance.setDefaultNamespace;
var hasLoadedNamespace = instance.hasLoadedNamespace;
var loadNamespaces = instance.loadNamespaces;
var loadLanguages = instance.loadLanguages;

// node_modules/i18next-resources-to-backend/dist/esm/index.js
var resourcesToBackend = function resourcesToBackend2(res) {
  return {
    type: "backend",
    init: function init2(services, backendOptions, i18nextOptions) {
    },
    read: function read(language, namespace, callback) {
      if (typeof res === "function") {
        if (res.length < 3) {
          try {
            var r = res(language, namespace);
            if (r && typeof r.then === "function") {
              r.then(function(data) {
                return callback(null, data && data.default || data);
              }).catch(callback);
            } else {
              callback(null, r);
            }
          } catch (err) {
            callback(err);
          }
          return;
        }
        res(language, namespace, callback);
        return;
      }
      callback(null, res && res[language] && res[language][namespace]);
    }
  };
};

// node_modules/@spartacus/core/fesm2022/spartacus-core.mjs
function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
function isRestricted(key) {
  return key === "__proto__" || key === "constructor";
}
function deepMerge(target = {}, ...sources) {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift() || {};
  if (!isObject(source)) {
    return deepMerge(target, ...sources);
  }
  for (const key in source) {
    if (isRestricted(key)) {
      continue;
    }
    if (source[key] instanceof Date) {
      target[key] = source[key];
    } else if (isObject(source[key])) {
      if (!isObject(target[key])) {
        target[key] = {};
      }
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return deepMerge(target, ...sources);
}
function configFactory() {
  return deepMerge({}, inject(DefaultConfig), inject(RootConfig));
}
var Config = class _Config {
  static {
    this.ɵfac = function Config_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Config)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _Config,
      factory: () => configFactory(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Config, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: configFactory
    }]
  }], null, null);
})();
function defaultConfigFactory() {
  return deepMerge({}, ...inject(DefaultConfigChunk, {
    optional: true
  }) ?? []);
}
var DefaultConfig = new InjectionToken("DefaultConfiguration", {
  providedIn: "root",
  factory: defaultConfigFactory
});
function rootConfigFactory() {
  return deepMerge({}, ...inject(ConfigChunk, {
    optional: true
  }) ?? []);
}
var RootConfig = new InjectionToken("RootConfiguration", {
  providedIn: "root",
  factory: rootConfigFactory
});
var ConfigChunk = new InjectionToken("ConfigurationChunk");
var DefaultConfigChunk = new InjectionToken("DefaultConfigurationChunk");
function provideConfig(config = {}, defaultConfig = false) {
  return {
    provide: defaultConfig ? DefaultConfigChunk : ConfigChunk,
    useValue: config,
    multi: true
  };
}
function provideConfigFactory(configFactory2, deps, defaultConfig = false) {
  return {
    provide: defaultConfig ? DefaultConfigChunk : ConfigChunk,
    useFactory: configFactory2,
    multi: true,
    deps
  };
}
function provideDefaultConfig(config = {}) {
  return {
    provide: DefaultConfigChunk,
    useValue: config,
    multi: true
  };
}
function provideDefaultConfigFactory(configFactory2, deps) {
  return {
    provide: DefaultConfigChunk,
    useFactory: configFactory2,
    multi: true,
    deps
  };
}
var defaultAnonymousConsentsConfig = {
  anonymousConsents: {
    registerConsent: "MARKETING_NEWSLETTER",
    showLegalDescriptionInDialog: true,
    requiredConsents: [],
    consentManagementPage: {
      showAnonymousConsents: true,
      hideConsents: []
    }
  }
};
var CountryType;
(function(CountryType2) {
  CountryType2["BILLING"] = "BILLING";
  CountryType2["SHIPPING"] = "SHIPPING";
})(CountryType || (CountryType = {}));
var PageType;
(function(PageType2) {
  PageType2["CONTENT_PAGE"] = "ContentPage";
  PageType2["PRODUCT_PAGE"] = "ProductPage";
  PageType2["CATEGORY_PAGE"] = "CategoryPage";
  PageType2["CATALOG_PAGE"] = "CatalogPage";
})(PageType || (PageType = {}));
var ScrollBehavior;
(function(ScrollBehavior2) {
  ScrollBehavior2["AUTO"] = "auto";
  ScrollBehavior2["SMOOTH"] = "smooth";
})(ScrollBehavior || (ScrollBehavior = {}));
var CmsBannerCarouselEffect;
(function(CmsBannerCarouselEffect2) {
  CmsBannerCarouselEffect2["FADE"] = "FADE";
  CmsBannerCarouselEffect2["ZOOM"] = "ZOOM";
  CmsBannerCarouselEffect2["CURTAIN"] = "CURTAINX";
  CmsBannerCarouselEffect2["TURNDOWN"] = "TURNDOWN";
})(CmsBannerCarouselEffect || (CmsBannerCarouselEffect = {}));
var ContainerBackgroundOptions;
(function(ContainerBackgroundOptions2) {
  ContainerBackgroundOptions2["NO_BACKGROUND"] = "NO_BACKGROUND";
  ContainerBackgroundOptions2["UPLOAD_RESPONSIVE_IMAGE"] = "UPLOAD_RESPONSIVE_IMAGE";
  ContainerBackgroundOptions2["UPLOAD_THUMBNAIL"] = "UPLOAD_THUMBNAIL";
})(ContainerBackgroundOptions || (ContainerBackgroundOptions = {}));
var ContainerSizeOptions;
(function(ContainerSizeOptions2) {
  ContainerSizeOptions2["FIT_TO_CONTENT_SIZE"] = "FIT_TO_CONTENT_SIZE";
  ContainerSizeOptions2["DEFINE_CONTAINER_HEIGHT"] = "DEFINE_CONTAINER_HEIGHT";
})(ContainerSizeOptions || (ContainerSizeOptions = {}));
var USER_CMS_ENDPOINTS = "userCmsEndpoints";
var ANONYMOUS_CONSENT_STATUS;
(function(ANONYMOUS_CONSENT_STATUS2) {
  ANONYMOUS_CONSENT_STATUS2["GIVEN"] = "GIVEN";
  ANONYMOUS_CONSENT_STATUS2["WITHDRAWN"] = "WITHDRAWN";
})(ANONYMOUS_CONSENT_STATUS || (ANONYMOUS_CONSENT_STATUS = {}));
var ANONYMOUS_CONSENTS_HEADER = "X-Anonymous-Consents";
var ImageType;
(function(ImageType2) {
  ImageType2["PRIMARY"] = "PRIMARY";
  ImageType2["GALLERY"] = "GALLERY";
})(ImageType || (ImageType = {}));
var HttpErrorModel = class {
};
var B2BUserRole;
(function(B2BUserRole2) {
  B2BUserRole2["ADMIN"] = "b2badmingroup";
  B2BUserRole2["CUSTOMER"] = "b2bcustomergroup";
  B2BUserRole2["MANAGER"] = "b2bmanagergroup";
  B2BUserRole2["APPROVER"] = "b2bapprovergroup";
})(B2BUserRole || (B2BUserRole = {}));
var B2BUserRight;
(function(B2BUserRight2) {
  B2BUserRight2["UNITORDERVIEWER"] = "unitorderviewergroup";
})(B2BUserRight || (B2BUserRight = {}));
var NotificationType;
(function(NotificationType2) {
  NotificationType2["BACK_IN_STOCK"] = "BACK_IN_STOCK";
})(NotificationType || (NotificationType = {}));
var VariantType;
(function(VariantType2) {
  VariantType2["SIZE"] = "ApparelSizeVariantProduct";
  VariantType2["STYLE"] = "ApparelStyleVariantProduct";
  VariantType2["COLOR"] = "ElectronicsColorVariantProduct";
})(VariantType || (VariantType = {}));
var PriceType;
(function(PriceType2) {
  PriceType2["BUY"] = "BUY";
  PriceType2["FROM"] = "FROM";
})(PriceType || (PriceType = {}));
var VariantQualifier;
(function(VariantQualifier2) {
  VariantQualifier2["SIZE"] = "size";
  VariantQualifier2["STYLE"] = "style";
  VariantQualifier2["COLOR"] = "color";
  VariantQualifier2["THUMBNAIL"] = "thumbnail";
  VariantQualifier2["PRODUCT"] = "product";
  VariantQualifier2["STYLE_SWATCH"] = "styleSwatch";
  VariantQualifier2["ROLLUP_PROPERTY"] = "rollupProperty";
})(VariantQualifier || (VariantQualifier = {}));
var ENTITY_REMOVE_ACTION = "[ENTITY] REMOVE";
var ENTITY_REMOVE_ALL_ACTION = "[ENTITY] REMOVE ALL";
function entityMeta(type, id) {
  return {
    entityType: type,
    entityId: id
  };
}
function entityRemoveMeta(type, id) {
  return {
    entityId: id,
    entityType: type,
    entityRemove: true
  };
}
function entityRemoveAllMeta(type) {
  return {
    entityId: null,
    entityType: type,
    entityRemove: true
  };
}
var EntityRemoveAction = class {
  constructor(entityType, id) {
    this.type = ENTITY_REMOVE_ACTION;
    this.meta = entityRemoveMeta(entityType, id);
  }
};
var EntityRemoveAllAction = class {
  constructor(entityType) {
    this.type = ENTITY_REMOVE_ALL_ACTION;
    this.meta = entityRemoveAllMeta(entityType);
  }
};
var LOADER_LOAD_ACTION = "[LOADER] LOAD";
var LOADER_FAIL_ACTION = "[LOADER] FAIL";
var LOADER_SUCCESS_ACTION = "[LOADER] SUCCESS";
var LOADER_RESET_ACTION = "[LOADER] RESET";
function loadMeta(entityType) {
  return {
    entityType,
    loader: {
      load: true
    }
  };
}
function failMeta(entityType, error) {
  return {
    entityType,
    loader: {
      error: error ? error : true
    }
  };
}
function successMeta(entityType) {
  return {
    entityType,
    loader: {
      success: true
    }
  };
}
function resetMeta(entityType) {
  return {
    entityType,
    loader: {}
  };
}
var LoaderLoadAction = class {
  constructor(entityType) {
    this.type = LOADER_LOAD_ACTION;
    this.meta = loadMeta(entityType);
  }
};
var LoaderFailAction = class {
  constructor(entityType, error) {
    this.type = LOADER_FAIL_ACTION;
    this.meta = failMeta(entityType, error);
    this.error = error;
  }
};
var LoaderSuccessAction = class {
  constructor(entityType) {
    this.type = LOADER_SUCCESS_ACTION;
    this.meta = successMeta(entityType);
  }
};
var LoaderResetAction = class {
  constructor(entityType) {
    this.type = LOADER_RESET_ACTION;
    this.meta = resetMeta(entityType);
  }
};
var ENTITY_LOAD_ACTION = "[ENTITY] LOAD";
var ENTITY_FAIL_ACTION = "[ENTITY] LOAD FAIL";
var ENTITY_SUCCESS_ACTION = "[ENTITY] LOAD SUCCESS";
var ENTITY_RESET_ACTION = "[ENTITY] RESET";
function entityLoadMeta(entityType, id) {
  return __spreadValues(__spreadValues({}, loadMeta(entityType)), entityMeta(entityType, id));
}
function entityFailMeta(entityType, id, error) {
  return __spreadValues(__spreadValues({}, failMeta(entityType, error)), entityMeta(entityType, id));
}
function entitySuccessMeta(entityType, id) {
  return __spreadValues(__spreadValues({}, successMeta(entityType)), entityMeta(entityType, id));
}
function entityResetMeta(entityType, id) {
  return __spreadValues(__spreadValues({}, resetMeta(entityType)), entityMeta(entityType, id));
}
var EntityLoadAction = class {
  constructor(entityType, id) {
    this.type = ENTITY_LOAD_ACTION;
    this.meta = entityLoadMeta(entityType, id);
  }
};
var EntityFailAction = class {
  constructor(entityType, id, error) {
    this.type = ENTITY_FAIL_ACTION;
    this.meta = entityFailMeta(entityType, id, error);
    this.error = error;
  }
};
var EntitySuccessAction = class {
  constructor(entityType, id, payload) {
    this.payload = payload;
    this.type = ENTITY_SUCCESS_ACTION;
    this.meta = entitySuccessMeta(entityType, id);
  }
};
var EntityLoaderResetAction = class {
  constructor(entityType, id) {
    this.type = ENTITY_RESET_ACTION;
    this.meta = entityResetMeta(entityType, id);
  }
};
function loaderValueSelector(state) {
  return state.value;
}
function loaderLoadingSelector(state) {
  return state.loading ?? false;
}
function loaderErrorSelector(state) {
  return state.error ?? false;
}
function loaderSuccessSelector(state) {
  return state.success ?? false;
}
var initialLoaderState = {
  loading: false,
  error: false,
  success: false,
  value: void 0
};
function loaderReducer(entityType, reducer2) {
  return (state = initialLoaderState, action) => {
    if (action.meta && action.meta.loader && action.meta.entityType === entityType) {
      const entity = action.meta.loader;
      if (entity.load) {
        return __spreadProps(__spreadValues({}, state), {
          loading: true,
          value: getReducerIfExists(state.value)
        });
      } else if (entity.error) {
        return __spreadProps(__spreadValues({}, state), {
          loading: false,
          error: true,
          success: false,
          value: getReducerIfExists(void 0)
        });
      } else if (entity.success) {
        return __spreadProps(__spreadValues({}, state), {
          value: getReducerIfExists(action.payload),
          loading: false,
          error: false,
          success: true
        });
      } else {
        return __spreadProps(__spreadValues({}, initialLoaderState), {
          value: reducer2 ? reducer2(initialLoaderState.value, action) : initialLoaderState.value
        });
      }
    }
    if (reducer2) {
      const newValue = reducer2(state.value, action);
      if (newValue !== state.value) {
        return __spreadProps(__spreadValues({}, state), {
          value: newValue
        });
      }
    }
    return state;
    function getReducerIfExists(fallbackValue) {
      return reducer2 ? reducer2(state.value, action) : fallbackValue;
    }
  };
}
function entityLoaderStateSelector(state, id) {
  return state.entities[id] || initialLoaderState;
}
function entityValueSelector(state, id) {
  const entityState = entityLoaderStateSelector(state, id);
  return loaderValueSelector(entityState);
}
function entityLoadingSelector(state, id) {
  const entityState = entityLoaderStateSelector(state, id);
  return loaderLoadingSelector(entityState);
}
function entityErrorSelector(state, id) {
  const entityState = entityLoaderStateSelector(state, id);
  return loaderErrorSelector(entityState);
}
function entitySuccessSelector(state, id) {
  const entityState = entityLoaderStateSelector(state, id);
  return loaderSuccessSelector(entityState);
}
var initialEntityState = {
  entities: {}
};
function entityReducer(entityType, reducer2) {
  return (state = initialEntityState, action) => {
    let ids = [];
    let partitionPayload = false;
    if (action.meta && action.meta.entityType === entityType && action.meta.entityId !== void 0) {
      ids = [].concat(action.meta.entityId ?? "");
      if (action.meta.entityRemove) {
        return removeSelectedEntities(action, state, ids);
      }
      partitionPayload = Array.isArray(action.meta.entityId) && Array.isArray(action.payload);
    } else {
      ids = Object.keys(state.entities);
    }
    const entityUpdates = {};
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      const subAction = partitionPayload ? __spreadProps(__spreadValues({}, action), {
        payload: action.payload[i]
      }) : action;
      const newState = reducer2(state.entities[id], subAction);
      if (newState) {
        entityUpdates[id] = newState;
      }
    }
    if (Object.keys(entityUpdates).length > 0) {
      return __spreadProps(__spreadValues({}, state), {
        entities: __spreadValues(__spreadValues({}, state.entities), entityUpdates)
      });
    }
    return state;
  };
  function removeSelectedEntities(action, state, ids) {
    if (action?.meta?.entityId === null) {
      return initialEntityState;
    } else {
      let removed = false;
      const newEntities = Object.keys(state.entities).reduce((acc, cur) => {
        if (ids.includes(cur)) {
          removed = true;
        } else {
          acc[cur] = state.entities[cur];
        }
        return acc;
      }, {});
      return removed ? {
        entities: newEntities
      } : state;
    }
  }
}
function entityLoaderReducer(entityType, reducer2) {
  return entityReducer(entityType, loaderReducer(entityType, reducer2));
}
var PROCESSES_INCREMENT_ACTION = "[PROCESSES LOADER] INCREMENT";
var PROCESSES_DECREMENT_ACTION = "[PROCESSES LOADER] DECREMENT";
var PROCESSES_LOADER_RESET_ACTION = "[PROCESSES LOADER] RESET";
function processesIncrementMeta(entityType) {
  return {
    entityType,
    loader: void 0,
    processesCountDiff: 1
  };
}
function processesDecrementMeta(entityType) {
  return {
    entityType,
    loader: void 0,
    processesCountDiff: -1
  };
}
function processesLoaderResetMeta(entityType) {
  return __spreadProps(__spreadValues({}, resetMeta(entityType)), {
    processesCountDiff: null
  });
}
var ProcessesLoaderResetAction = class {
  constructor(entityType) {
    this.type = PROCESSES_LOADER_RESET_ACTION;
    this.meta = processesLoaderResetMeta(entityType);
  }
};
var ProcessesIncrementAction = class {
  constructor(entityType) {
    this.type = PROCESSES_INCREMENT_ACTION;
    this.meta = processesIncrementMeta(entityType);
  }
};
var ProcessesDecrementAction = class {
  constructor(entityType) {
    this.type = PROCESSES_DECREMENT_ACTION;
    this.meta = processesDecrementMeta(entityType);
  }
};
var ENTITY_PROCESSES_LOADER_RESET_ACTION = "[ENTITY] PROCESSES LOADER RESET";
var ENTITY_PROCESSES_INCREMENT_ACTION = "[ENTITY] PROCESSES INCREMENT";
var ENTITY_PROCESSES_DECREMENT_ACTION = "[ENTITY] PROCESSES DECREMENT";
function entityProcessesLoaderResetMeta(entityType, id) {
  return __spreadValues(__spreadValues({}, processesLoaderResetMeta(entityType)), entityMeta(entityType, id));
}
function entityProcessesIncrementMeta(entityType, id) {
  return __spreadValues(__spreadValues({}, processesIncrementMeta(entityType)), entityMeta(entityType, id));
}
function entityProcessesDecrementMeta(entityType, id) {
  return __spreadValues(__spreadValues({}, processesDecrementMeta(entityType)), entityMeta(entityType, id));
}
var EntityProcessesLoaderResetAction = class {
  constructor(entityType, id) {
    this.type = ENTITY_PROCESSES_LOADER_RESET_ACTION;
    this.meta = entityProcessesLoaderResetMeta(entityType, id);
  }
};
var EntityProcessesIncrementAction = class {
  constructor(entityType, id) {
    this.type = ENTITY_PROCESSES_INCREMENT_ACTION;
    this.meta = entityProcessesIncrementMeta(entityType, id);
  }
};
var EntityProcessesDecrementAction = class {
  constructor(entityType, id) {
    this.type = ENTITY_PROCESSES_DECREMENT_ACTION;
    this.meta = entityProcessesDecrementMeta(entityType, id);
  }
};
function isStableSelector(state) {
  return !state.processesCount && !state.loading;
}
function hasPendingProcessesSelector(state) {
  return state.processesCount !== void 0 && state.processesCount > 0;
}
var initialProcessesState = {
  processesCount: 0
};
function processesLoaderReducer(entityType, reducer2) {
  return (state = __spreadValues(__spreadValues({}, initialProcessesState), initialLoaderState), action) => {
    const loaderState = loaderReducer(entityType, reducer2)(state, action);
    if (action.meta && action.meta.entityType === entityType) {
      const processesCountDiff = action.meta.processesCountDiff;
      if (isDevMode() && state.processesCount && processesCountDiff && state.processesCount + processesCountDiff < 0) {
        console.error(`Action '${action.type}' sets processesCount to value < 0!
Make sure to keep processesCount in sync.
There should always be only one decrement action for each increment action.
Make sure that you don't reset state in between those actions.
`, action);
      }
      if (processesCountDiff) {
        return __spreadProps(__spreadValues({}, loaderState), {
          processesCount: state.processesCount ? state.processesCount + processesCountDiff : processesCountDiff
        });
      } else if (processesCountDiff === null) {
        return __spreadValues(__spreadValues({}, loaderState), initialProcessesState);
      }
    }
    return loaderState;
  };
}
var initialProcessesLoaderState = __spreadValues(__spreadValues({}, initialLoaderState), initialProcessesState);
function entityHasPendingProcessesSelector(state, id) {
  const entityState = entityLoaderStateSelector(state, id);
  return hasPendingProcessesSelector(entityState);
}
function entityIsStableSelector(state, id) {
  const entityState = entityLoaderStateSelector(state, id);
  return isStableSelector(entityState);
}
function entityProcessesLoaderStateSelector(state, id) {
  return state.entities[id] || initialProcessesLoaderState;
}
function entityProcessesLoaderReducer(entityType, reducer2) {
  return entityReducer(entityType, processesLoaderReducer(entityType, reducer2));
}
function entitySelector(state, id) {
  return state.entities[id] || void 0;
}
var OBJECT_SEPARATOR = ".";
function getStateSliceValue(keys, state) {
  const stateSliceValue = keys.split(OBJECT_SEPARATOR).reduce((previous, current) => previous ? previous[current] : void 0, state);
  return stateSliceValue;
}
function createShellObject(key, excludeKeys, value) {
  if (!key || !value || Object.keys(value).length === 0) {
    return {};
  }
  const shell = key.split(OBJECT_SEPARATOR).reduceRight((acc, previous) => {
    return {
      [previous]: acc
    };
  }, value);
  return handleExclusions(key, excludeKeys, shell);
}
function getStateSlice(keys, excludeKeys, state) {
  if (keys && keys.length === 0) {
    return {};
  }
  let stateSlices = {};
  for (const currentKey of keys) {
    const stateValue = getStateSliceValue(currentKey, state);
    const shell = createShellObject(currentKey, excludeKeys, stateValue);
    stateSlices = deepMerge(stateSlices, shell);
  }
  return stateSlices;
}
function handleExclusions(key, excludeKeys, value) {
  const exclusionKeys = getExclusionKeys(key, excludeKeys);
  if (exclusionKeys.length === 0) {
    return value;
  }
  const finalValue = deepMerge({}, value);
  for (const currentExclusionKey of exclusionKeys) {
    const exclusionChunksSplit = currentExclusionKey.split(OBJECT_SEPARATOR);
    let nestedTemp = finalValue;
    for (let i = 0; i < exclusionChunksSplit.length; i++) {
      const currentChunk = exclusionChunksSplit[i];
      if (i === exclusionChunksSplit.length - 1) {
        if (nestedTemp && nestedTemp[currentChunk]) {
          delete nestedTemp[currentChunk];
        }
      } else {
        nestedTemp = nestedTemp[currentChunk];
      }
    }
  }
  return finalValue;
}
function getExclusionKeys(key, excludeKeys) {
  if (!key || !excludeKeys) {
    return [];
  }
  const exclusionKeys = [];
  for (const exclusionKey of excludeKeys) {
    if (exclusionKey.includes(key)) {
      exclusionKeys.push(exclusionKey);
    }
  }
  return exclusionKeys;
}
function filterKeysByType(keys, type) {
  if (!keys) {
    return [];
  }
  return Object.keys(keys).filter((key) => keys[key] === type);
}
var ALL = "all";
function serializeSearchConfig(config, id) {
  return `${id ?? ""}?pageSize=${config.pageSize ?? ""}&currentPage=${config.currentPage ?? ""}&sort=${config.sort ?? ""}`;
}
function denormalizeSearch(state, params) {
  return denormalizeCustomB2BSearch(state.list, state.entities, params);
}
function denormalizeCustomB2BSearch(list, entities, params, id) {
  const serializedList = entityLoaderStateSelector(list, params ? serializeSearchConfig(params, id) : id ?? ALL);
  if (!serializedList.value || !serializedList.value.ids) {
    return serializedList;
  }
  const res = Object.assign({}, serializedList, {
    value: {
      values: serializedList.value.ids.map((code) => entityLoaderStateSelector(entities, code).value)
    }
  });
  if (params && res.value) {
    res.value.pagination = serializedList.value.pagination;
    res.value.sorts = serializedList.value.sorts;
  }
  return res;
}
function normalizeListPage(list, id) {
  const values = list.values || [];
  const page = {
    ids: values.map((data) => data[id])
  };
  if (list.pagination) {
    page.pagination = list.pagination;
  }
  if (list.sorts) {
    page.sorts = list.sorts;
  }
  return {
    values,
    page
  };
}
function serializeParams(params, searchConfig) {
  return [params, serializeSearchConfig(searchConfig)].toString();
}
var utilsGroup = Object.freeze({
  __proto__: null,
  ENTITY_FAIL_ACTION,
  ENTITY_LOAD_ACTION,
  ENTITY_PROCESSES_DECREMENT_ACTION,
  ENTITY_PROCESSES_INCREMENT_ACTION,
  ENTITY_PROCESSES_LOADER_RESET_ACTION,
  ENTITY_REMOVE_ACTION,
  ENTITY_REMOVE_ALL_ACTION,
  ENTITY_RESET_ACTION,
  ENTITY_SUCCESS_ACTION,
  EntityFailAction,
  EntityLoadAction,
  EntityLoaderResetAction,
  EntityProcessesDecrementAction,
  EntityProcessesIncrementAction,
  EntityProcessesLoaderResetAction,
  EntityRemoveAction,
  EntityRemoveAllAction,
  EntitySuccessAction,
  LOADER_FAIL_ACTION,
  LOADER_LOAD_ACTION,
  LOADER_RESET_ACTION,
  LOADER_SUCCESS_ACTION,
  LoaderFailAction,
  LoaderLoadAction,
  LoaderResetAction,
  LoaderSuccessAction,
  PROCESSES_DECREMENT_ACTION,
  PROCESSES_INCREMENT_ACTION,
  PROCESSES_LOADER_RESET_ACTION,
  ProcessesDecrementAction,
  ProcessesIncrementAction,
  ProcessesLoaderResetAction,
  denormalizeCustomB2BSearch,
  denormalizeSearch,
  entityErrorSelector,
  entityFailMeta,
  entityHasPendingProcessesSelector,
  entityIsStableSelector,
  entityLoadMeta,
  entityLoaderReducer,
  entityLoaderStateSelector,
  entityLoadingSelector,
  entityMeta,
  entityProcessesDecrementMeta,
  entityProcessesIncrementMeta,
  entityProcessesLoaderReducer,
  entityProcessesLoaderResetMeta,
  entityProcessesLoaderStateSelector,
  entityReducer,
  entityRemoveAllMeta,
  entityRemoveMeta,
  entityResetMeta,
  entitySelector,
  entitySuccessMeta,
  entitySuccessSelector,
  entityValueSelector,
  failMeta,
  getStateSlice,
  hasPendingProcessesSelector,
  initialEntityState,
  initialLoaderState,
  initialProcessesState,
  isStableSelector,
  loadMeta,
  loaderErrorSelector,
  loaderLoadingSelector,
  loaderReducer,
  loaderSuccessSelector,
  loaderValueSelector,
  normalizeListPage,
  processesDecrementMeta,
  processesIncrementMeta,
  processesLoaderReducer,
  processesLoaderResetMeta,
  resetMeta,
  serializeParams,
  serializeSearchConfig,
  successMeta
});
var ANONYMOUS_CONSENTS_STORE_FEATURE = "anonymous-consents";
var ANONYMOUS_CONSENTS = "[Anonymous Consents] Anonymous Consents";
var LOAD_ANONYMOUS_CONSENT_TEMPLATES = "[Anonymous Consents] Load Anonymous Consent Templates";
var LOAD_ANONYMOUS_CONSENT_TEMPLATES_SUCCESS = "[Anonymous Consents] Load Anonymous Consent Templates Success";
var LOAD_ANONYMOUS_CONSENT_TEMPLATES_FAIL = "[Anonymous Consents] Load Anonymous Consent Templates Fail";
var RESET_LOAD_ANONYMOUS_CONSENT_TEMPLATES = "[Anonymous Consents] Reset Load Anonymous Consent Templates";
var GET_ALL_ANONYMOUS_CONSENTS = "[Anonymous Consents] Get All Anonymous Consents";
var GET_ANONYMOUS_CONSENT = "[Anonymous Consents] Get Anonymous Consent";
var SET_ANONYMOUS_CONSENTS = "[Anonymous Consents] Set Anonymous Consents";
var GIVE_ANONYMOUS_CONSENT = "[Anonymous Consents] Give Anonymous Consent";
var WITHDRAW_ANONYMOUS_CONSENT = "[Anonymous Consents] Withdraw Anonymous Consent";
var TOGGLE_ANONYMOUS_CONSENTS_BANNER_DISMISSED = "[Anonymous Consents] Toggle Anonymous Consents Banner Dismissed";
var TOGGLE_ANONYMOUS_CONSENT_TEMPLATES_UPDATED = "[Anonymous Consents] Anonymous Consent Templates Updated";
var ANONYMOUS_CONSENT_CHECK_UPDATED_VERSIONS = "[Anonymous Consents] Check Updated Versions";
var LoadAnonymousConsentTemplates = class extends LoaderLoadAction {
  constructor() {
    super(ANONYMOUS_CONSENTS);
    this.type = LOAD_ANONYMOUS_CONSENT_TEMPLATES;
  }
};
var LoadAnonymousConsentTemplatesSuccess = class extends LoaderSuccessAction {
  constructor(payload) {
    super(ANONYMOUS_CONSENTS);
    this.payload = payload;
    this.type = LOAD_ANONYMOUS_CONSENT_TEMPLATES_SUCCESS;
  }
};
var LoadAnonymousConsentTemplatesFail = class extends LoaderFailAction {
  constructor(payload) {
    super(ANONYMOUS_CONSENTS, payload);
    this.type = LOAD_ANONYMOUS_CONSENT_TEMPLATES_FAIL;
  }
};
var ResetLoadAnonymousConsentTemplates = class extends LoaderResetAction {
  constructor() {
    super(ANONYMOUS_CONSENTS);
    this.type = RESET_LOAD_ANONYMOUS_CONSENT_TEMPLATES;
  }
};
var GetAllAnonymousConsents = class {
  constructor() {
    this.type = GET_ALL_ANONYMOUS_CONSENTS;
  }
};
var GetAnonymousConsent = class {
  constructor(templateCode) {
    this.templateCode = templateCode;
    this.type = GET_ANONYMOUS_CONSENT;
  }
};
var SetAnonymousConsents = class {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_ANONYMOUS_CONSENTS;
  }
};
var GiveAnonymousConsent = class {
  constructor(templateCode) {
    this.templateCode = templateCode;
    this.type = GIVE_ANONYMOUS_CONSENT;
  }
};
var WithdrawAnonymousConsent = class {
  constructor(templateCode) {
    this.templateCode = templateCode;
    this.type = WITHDRAW_ANONYMOUS_CONSENT;
  }
};
var ToggleAnonymousConsentsBannerDissmissed = class {
  constructor(dismissed) {
    this.dismissed = dismissed;
    this.type = TOGGLE_ANONYMOUS_CONSENTS_BANNER_DISMISSED;
  }
};
var ToggleAnonymousConsentTemplatesUpdated = class {
  constructor(updated) {
    this.updated = updated;
    this.type = TOGGLE_ANONYMOUS_CONSENT_TEMPLATES_UPDATED;
  }
};
var AnonymousConsentCheckUpdatedVersions = class {
  constructor() {
    this.type = ANONYMOUS_CONSENT_CHECK_UPDATED_VERSIONS;
  }
};
var anonymousConsentsGroup = Object.freeze({
  __proto__: null,
  ANONYMOUS_CONSENT_CHECK_UPDATED_VERSIONS,
  AnonymousConsentCheckUpdatedVersions,
  GET_ALL_ANONYMOUS_CONSENTS,
  GET_ANONYMOUS_CONSENT,
  GIVE_ANONYMOUS_CONSENT,
  GetAllAnonymousConsents,
  GetAnonymousConsent,
  GiveAnonymousConsent,
  LOAD_ANONYMOUS_CONSENT_TEMPLATES,
  LOAD_ANONYMOUS_CONSENT_TEMPLATES_FAIL,
  LOAD_ANONYMOUS_CONSENT_TEMPLATES_SUCCESS,
  LoadAnonymousConsentTemplates,
  LoadAnonymousConsentTemplatesFail,
  LoadAnonymousConsentTemplatesSuccess,
  RESET_LOAD_ANONYMOUS_CONSENT_TEMPLATES,
  ResetLoadAnonymousConsentTemplates,
  SET_ANONYMOUS_CONSENTS,
  SetAnonymousConsents,
  TOGGLE_ANONYMOUS_CONSENTS_BANNER_DISMISSED,
  TOGGLE_ANONYMOUS_CONSENT_TEMPLATES_UPDATED,
  ToggleAnonymousConsentTemplatesUpdated,
  ToggleAnonymousConsentsBannerDissmissed,
  WITHDRAW_ANONYMOUS_CONSENT,
  WithdrawAnonymousConsent
});
var getAnonymousConsentState = createFeatureSelector(ANONYMOUS_CONSENTS_STORE_FEATURE);
var getAnonymousConsentTemplatesState = createSelector(getAnonymousConsentState, (state) => state.templates);
var getAnonymousConsentTemplatesValue = createSelector(getAnonymousConsentTemplatesState, (state) => loaderValueSelector(state));
var getAnonymousConsentTemplatesLoading = createSelector(getAnonymousConsentTemplatesState, loaderLoadingSelector);
var getAnonymousConsentTemplatesSuccess = createSelector(getAnonymousConsentTemplatesState, loaderSuccessSelector);
var getAnonymousConsentTemplatesError = createSelector(getAnonymousConsentTemplatesState, loaderErrorSelector);
var getAnonymousConsentTemplate = (templateCode) => {
  return createSelector(getAnonymousConsentTemplatesValue, (templates) => {
    return templates ? templates.find((template) => template.id === templateCode) : void 0;
  });
};
var getAnonymousConsentTemplatesUpdate = createSelector(getAnonymousConsentState, (state) => state.ui.updated);
var getAnonymousConsentsBannerDismissed = createSelector(getAnonymousConsentState, (state) => state.ui.bannerDismissed);
var getAnonymousConsents = createSelector(getAnonymousConsentState, (state) => state.consents);
var getAnonymousConsentByTemplateCode = (templateCode) => createSelector(getAnonymousConsents, (consents) => consents.find((consent) => consent.templateCode === templateCode));
var anonymousConsentsGroup_selectors = Object.freeze({
  __proto__: null,
  getAnonymousConsentByTemplateCode,
  getAnonymousConsentState,
  getAnonymousConsentTemplate,
  getAnonymousConsentTemplatesError,
  getAnonymousConsentTemplatesLoading,
  getAnonymousConsentTemplatesState,
  getAnonymousConsentTemplatesSuccess,
  getAnonymousConsentTemplatesUpdate,
  getAnonymousConsentTemplatesValue,
  getAnonymousConsents,
  getAnonymousConsentsBannerDismissed
});
var FeatureToggles = class _FeatureToggles {
  static {
    this.ɵfac = function FeatureToggles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeatureToggles)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _FeatureToggles,
      factory: () => (() => Object.assign({}, inject(DefaultFeatureToggles), inject(RootFeatureToggles)))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureToggles, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => Object.assign({}, inject(DefaultFeatureToggles), inject(RootFeatureToggles))
    }]
  }], null, null);
})();
var DefaultFeatureToggles = new InjectionToken("DefaultFeatureToggles", {
  providedIn: "root",
  factory: () => Object.assign({}, ...inject(DefaultFeatureTogglesChunk, {
    optional: true
  }) ?? [])
});
var RootFeatureToggles = new InjectionToken("RootFeatureToggles", {
  providedIn: "root",
  factory: () => Object.assign({}, ...inject(FeatureTogglesChunk, {
    optional: true
  }) ?? [])
});
var FeatureTogglesChunk = new InjectionToken("FeatureTogglesChunk", {
  providedIn: "root",
  factory: () => []
});
var DefaultFeatureTogglesChunk = new InjectionToken("DefaultFeatureTogglesChunk", {
  providedIn: "root",
  factory: () => []
});
function provideFeatureToggles(toggles = {}) {
  return {
    provide: FeatureTogglesChunk,
    useValue: toggles,
    multi: true
  };
}
function provideFeatureTogglesFactory(featureTogglesFactory) {
  return {
    provide: FeatureTogglesChunk,
    useFactory: featureTogglesFactory,
    multi: true
  };
}
function provideDefaultFeatureToggles(toggles = {}) {
  return {
    provide: DefaultFeatureTogglesChunk,
    useValue: toggles,
    multi: true
  };
}
function provideDefaultFeatureTogglesFactory(featureTogglesFactory) {
  return {
    provide: DefaultFeatureTogglesChunk,
    useFactory: featureTogglesFactory,
    multi: true
  };
}
function isFeatureConfig(config) {
  return typeof config === "object" && !!config.features;
}
function isInLevel(level, version) {
  if (level === "*") {
    return true;
  }
  const levelParts = level.split(".");
  const versionParts = version.split(".");
  for (let i = 0; i < versionParts.length; i++) {
    const versionNumberPart = Number(versionParts[i]);
    const levelNumberPart = Number(levelParts[i]) || 0;
    if (versionNumberPart !== levelNumberPart) {
      return levelNumberPart > versionNumberPart;
    }
  }
  return true;
}
function isFeatureLevel(config, level) {
  if (isFeatureConfig(config) && config.features.level) {
    return level.startsWith("!") ? !isInLevel(config.features.level, level.substring(1)) : isInLevel(config.features.level, level);
  }
  return false;
}
function isFeatureEnabled(config, feature) {
  if (isFeatureConfig(config)) {
    const featureConfig = feature[0] === "!" ? config.features[feature.substring(1)] : config.features[feature];
    const result = typeof featureConfig === "string" ? isFeatureLevel(config, featureConfig) : featureConfig;
    return feature.startsWith("!") ? !result : !!result;
  }
  return false;
}
var FeaturesConfig = class _FeaturesConfig {
  static {
    this.ɵfac = function FeaturesConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeaturesConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _FeaturesConfig,
      factory: function FeaturesConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _FeaturesConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturesConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var FeatureConfigService = class _FeatureConfigService {
  constructor(config) {
    this.config = config;
  }
  isLevel(version) {
    return isFeatureLevel(this.config, version);
  }
  isEnabled(feature) {
    return isFeatureEnabled(this.config, feature);
  }
  static {
    this.ɵfac = function FeatureConfigService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeatureConfigService)(ɵɵinject(FeaturesConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _FeatureConfigService,
      factory: _FeatureConfigService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: FeaturesConfig
  }], null);
})();
var OCC_USER_ID_CURRENT = "current";
var OCC_USER_ID_ANONYMOUS = "anonymous";
var OCC_USER_ID_GUEST = "guest";
var OCC_USER_IDS = Object.freeze({
  __proto__: null,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
  OCC_USER_ID_GUEST
});
var OCC_CART_ID_CURRENT = "current";
var SERVER_REQUEST_URL = new InjectionToken("SERVER_REQUEST_URL");
var SERVER_REQUEST_ORIGIN = new InjectionToken("SERVER_REQUEST_ORIGIN");
var WindowRef = class _WindowRef {
  constructor(document, platformId, serverUrl, serverOrigin) {
    this.platformId = platformId;
    this.serverUrl = serverUrl;
    this.serverOrigin = serverOrigin;
    this.document = document;
  }
  /**
   * Returns true when invoked in browser context.
   * Use this method to check if you can access `window` and other browser globals.
   */
  isBrowser() {
    return isPlatformBrowser(this.platformId);
  }
  /**
   * Exposes global `window` object. In SSR when `window` is not available it returns `undefined`.
   * To detect if you can safely use `nativeWindow` use `isBrowser` to check execution platform.
   */
  get nativeWindow() {
    return this.isBrowser() ? window : void 0;
  }
  /**
   * Exposes global `sessionStorage` object. In SSR when `sessionStorage` is not available it returns `undefined`.
   * To detect if you can safely use `sessionStorage` use `isBrowser` to check execution platform.
   */
  get sessionStorage() {
    return this.nativeWindow ? this.nativeWindow.sessionStorage : void 0;
  }
  /**
   * Exposes global `localStorage` object. In SSR when `localStorage` is not available it returns `undefined`.
   * To detect if you can safely use `localStorage` use `isBrowser` to check execution platform.
   */
  get localStorage() {
    return this.nativeWindow ? this.nativeWindow.localStorage : void 0;
  }
  /**
   * Returns the window/document location, unless it's not available (i.e. SSR).
   *
   * When there's no access to the location object, we mimic the location partially, by resolving
   * the request url (`SERVER_REQUEST_URL`) and origin (`SERVER_REQUEST_ORIGIN`) from the injector.
   * These values are injected in the server implementation so that we can resolve some of the location
   * values when we do server side rendering.
   */
  get location() {
    if (this.isBrowser()) {
      return this.document.location;
    } else {
      if (!this.serverUrl) {
        throw new Error("Cannot resolve the href as the SERVER_REQUEST_URL is undefined");
      }
      if (!this.serverOrigin) {
        throw new Error("Cannot resolve the origin as the SERVER_REQUEST_ORIGIN is undefined");
      }
      return {
        href: this.serverUrl,
        origin: this.serverOrigin
      };
    }
  }
  /**
   * Returns an observable for the window resize event and emits an event
   * every 300ms in case of resizing. An event is simulated initially.
   *
   * If there's no window object available (i.e. in SSR), a null value is emitted.
   */
  get resize$() {
    if (!this.nativeWindow) {
      return of(null);
    } else {
      return fromEvent(this.nativeWindow, "resize").pipe(debounceTime(300), startWith({
        target: this.nativeWindow
      }), distinctUntilChanged());
    }
  }
  static {
    this.ɵfac = function WindowRef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WindowRef)(ɵɵinject(DOCUMENT), ɵɵinject(PLATFORM_ID), ɵɵinject(SERVER_REQUEST_URL, 8), ɵɵinject(SERVER_REQUEST_ORIGIN, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _WindowRef,
      factory: _WindowRef.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowRef, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [SERVER_REQUEST_URL]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [SERVER_REQUEST_ORIGIN]
    }]
  }], null);
})();
var USE_CLIENT_TOKEN = "cx-use-client-token";
var USE_CUSTOMER_SUPPORT_AGENT_TOKEN = "cx-use-csagent-token";
var USE_CAPTCHA_TOKEN = "sap-commerce-cloud-captcha-token";
var InterceptorUtil = class {
  static createHeader(headerName, interceptorParam, headers2) {
    if (headers2) {
      return headers2.append(headerName, JSON.stringify(interceptorParam));
    }
    headers2 = new HttpHeaders().set(headerName, JSON.stringify(interceptorParam));
    return headers2;
  }
  static removeHeader(headerName, request3) {
    const updatedHeaders = request3.headers.delete(headerName);
    return request3.clone({
      headers: updatedHeaders
    });
  }
  static getInterceptorParam(headerName, headers2) {
    const rawValue = headers2.get(headerName);
    if (rawValue) {
      return JSON.parse(rawValue);
    }
    return void 0;
  }
};
var AuthConfig = class _AuthConfig {
  static {
    this.ɵfac = function AuthConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AuthConfig,
      factory: function AuthConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _AuthConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
function isNotUndefined(value) {
  return typeof value !== "undefined";
}
function isNotNullable(value) {
  return isNotUndefined(value) && value !== null;
}
var CLIENT_AUTH_FEATURE = "client-auth";
var CLIENT_TOKEN_DATA = "[Client auth] Client Token Data";
var LOAD_CLIENT_TOKEN = "[Token] Load Client Token";
var LOAD_CLIENT_TOKEN_FAIL = "[Token] Load Client Token Fail";
var LOAD_CLIENT_TOKEN_SUCCESS = "[Token] Load Client Token Success";
var LoadClientToken = class extends LoaderLoadAction {
  constructor() {
    super(CLIENT_TOKEN_DATA);
    this.type = LOAD_CLIENT_TOKEN;
  }
};
var LoadClientTokenFail = class extends LoaderFailAction {
  constructor(payload) {
    super(CLIENT_TOKEN_DATA, payload);
    this.payload = payload;
    this.type = LOAD_CLIENT_TOKEN_FAIL;
  }
};
var LoadClientTokenSuccess = class extends LoaderSuccessAction {
  constructor(payload) {
    super(CLIENT_TOKEN_DATA);
    this.payload = payload;
    this.type = LOAD_CLIENT_TOKEN_SUCCESS;
  }
};
var clientTokenGroup_actions = Object.freeze({
  __proto__: null,
  LOAD_CLIENT_TOKEN,
  LOAD_CLIENT_TOKEN_FAIL,
  LOAD_CLIENT_TOKEN_SUCCESS,
  LoadClientToken,
  LoadClientTokenFail,
  LoadClientTokenSuccess
});
var getClientAuthState = createFeatureSelector(CLIENT_AUTH_FEATURE);
var getClientTokenState = createSelector(getClientAuthState, (state) => state.clientToken);
var clientTokenGroup_selectors = Object.freeze({
  __proto__: null,
  getClientAuthState,
  getClientTokenState
});
var ClientTokenService = class _ClientTokenService {
  constructor(store) {
    this.store = store;
  }
  /**
   * Returns a client token. The client token from the store is returned if there is one.
   * Otherwise a new token is fetched from the backend and saved in the store.
   */
  getClientToken() {
    return this.store.pipe(select(getClientTokenState), observeOn(queueScheduler), filter((state) => {
      if (this.isClientTokenLoaded(state)) {
        return true;
      } else {
        if (!state.loading) {
          this.store.dispatch(new LoadClientToken());
        }
        return false;
      }
    }), map((state) => state.value));
  }
  /**
   * Fetches a clientToken from the backend and saves it in the store where getClientToken can use it.
   * The new clientToken is returned.
   */
  refreshClientToken() {
    this.store.dispatch(new LoadClientToken());
    return this.store.pipe(select(getClientTokenState), filter((state) => this.isClientTokenLoaded(state)), map((state) => state.value), filter(isNotUndefined));
  }
  isClientTokenLoaded(state) {
    return Boolean((state.success || state.error) && !state.loading);
  }
  static {
    this.ɵfac = function ClientTokenService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClientTokenService)(ɵɵinject(Store));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ClientTokenService,
      factory: _ClientTokenService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientTokenService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }], null);
})();
var ClientErrorHandlingService = class _ClientErrorHandlingService {
  constructor(clientTokenService) {
    this.clientTokenService = clientTokenService;
  }
  /**
   * Refreshes client token and retries the request with the new token.
   *
   * @param request
   * @param httpHandler
   */
  handleExpiredClientToken(request3, next) {
    return this.clientTokenService.refreshClientToken().pipe(take(1), switchMap((token) => {
      return next.handle(this.createNewRequestWithNewToken(request3, token));
    }));
  }
  /**
   * Clones the requests and provided `Authorization` header.
   *
   * @param request
   * @param token
   */
  createNewRequestWithNewToken(request3, token) {
    request3 = request3.clone({
      setHeaders: {
        Authorization: `${token.token_type || "Bearer"} ${token.access_token}`
      }
    });
    return request3;
  }
  static {
    this.ɵfac = function ClientErrorHandlingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClientErrorHandlingService)(ɵɵinject(ClientTokenService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ClientErrorHandlingService,
      factory: _ClientErrorHandlingService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientErrorHandlingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ClientTokenService
  }], null);
})();
var StringTemplate = class {
  /**
   * Populates the given template with the variables provided
   *
   * @param templateString template of the OCC endpoint
   * @param templateVariables variables to replace in the template
   * @param encodeVariable encode variable before placing it in the template
   */
  static resolve(templateString, templateVariables, encodeVariable) {
    for (const variableLabel of Object.keys(templateVariables)) {
      const placeholder = new RegExp("\\${" + variableLabel + "}", "g");
      templateString = templateString.replace(
        placeholder,
        // TODO 4.0: default to encodeVariable = true
        encodeVariable ? encodeURIComponent(templateVariables[variableLabel]) : templateVariables[variableLabel]
      );
    }
    return templateString;
  }
};
var LoggerService = class _LoggerService {
  log(...args) {
    console.log(...args);
  }
  warn(...args) {
    console.warn(...args);
  }
  error(...args) {
    console.error(...args);
  }
  info(...args) {
    console.info(...args);
  }
  debug(...args) {
    console.debug(...args);
  }
  static {
    this.ɵfac = function LoggerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoggerService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _LoggerService,
      factory: _LoggerService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoggerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function getContextParameterValues(config, parameter) {
  return config.context && config.context[parameter] || [];
}
function getContextParameterDefault(config, parameter) {
  const param = getContextParameterValues(config, parameter);
  return param && param.length ? param[0] : void 0;
}
var LANGUAGE_CONTEXT_ID = "language";
var CURRENCY_CONTEXT_ID = "currency";
var BASE_SITE_CONTEXT_ID = "baseSite";
var THEME_CONTEXT_ID = "theme";
var HttpParamsURIEncoder = class {
  encodeKey(key) {
    return encodeURIComponent(key);
  }
  encodeValue(value) {
    return encodeURIComponent(value);
  }
  decodeKey(key) {
    return decodeURIComponent(key);
  }
  decodeValue(value) {
    return decodeURIComponent(value);
  }
};
var DEFAULT_SCOPE = "default";
function urlPathJoin(...parts) {
  const paths = [];
  parts = parts.filter((part) => Boolean(part));
  for (const part of parts) {
    paths.push(cleanSlashes(part));
  }
  if (parts[0]?.startsWith("/")) {
    paths[0] = "/" + paths[0];
  }
  if (parts[parts.length - 1]?.endsWith("/")) {
    paths[paths.length - 1] = paths[paths.length - 1] + "/";
  }
  return paths.join("/");
}
function cleanSlashes(path) {
  path = path.startsWith("/") ? path.slice(1) : path;
  path = path.endsWith("/") ? path.slice(0, -1) : path;
  return path;
}
var SiteContextConfig = class _SiteContextConfig {
  static {
    this.ɵfac = function SiteContextConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteContextConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SiteContextConfig,
      factory: function SiteContextConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _SiteContextConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteContextConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var OccConfig = class _OccConfig extends SiteContextConfig {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵOccConfig_BaseFactory;
      return function OccConfig_Factory(__ngFactoryType__) {
        return (ɵOccConfig_BaseFactory || (ɵOccConfig_BaseFactory = ɵɵgetInheritedFactory(_OccConfig)))(__ngFactoryType__ || _OccConfig);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccConfig,
      factory: function OccConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _OccConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var LOAD_BASE_SITE = "[Site-context] Load BaseSite";
var LOAD_BASE_SITE_FAIL = "[Site-context] Load BaseSite Fail";
var LOAD_BASE_SITE_SUCCESS = "[Site-context] Load BaseSite Success";
var LOAD_BASE_SITES = "[Site-context] Load BaseSites";
var LOAD_BASE_SITES_FAIL = "[Site-context] Load BaseSites Fail";
var LOAD_BASE_SITES_SUCCESS = "[Site-context] Load BaseSites Success";
var SET_ACTIVE_BASE_SITE = "[Site-context] Set Active BaseSite";
var BASE_SITE_CHANGE = "[Site-context] BaseSite Change";
var LoadBaseSite = class {
  constructor() {
    this.type = LOAD_BASE_SITE;
  }
};
var LoadBaseSiteFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_BASE_SITE_FAIL;
    this.error = payload;
  }
};
var LoadBaseSiteSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_BASE_SITE_SUCCESS;
  }
};
var LoadBaseSites = class {
  constructor() {
    this.type = LOAD_BASE_SITES;
  }
};
var LoadBaseSitesFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_BASE_SITES_FAIL;
    this.error = payload;
  }
};
var LoadBaseSitesSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_BASE_SITES_SUCCESS;
  }
};
var SetActiveBaseSite = class {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_ACTIVE_BASE_SITE;
  }
};
var BaseSiteChange = class {
  constructor() {
    this.type = BASE_SITE_CHANGE;
  }
};
var LOAD_CURRENCIES = "[Site-context] Load Currencies";
var LOAD_CURRENCIES_FAIL = "[Site-context] Load Currencies Fail";
var LOAD_CURRENCIES_SUCCESS = "[Site-context] Load Currencies Success";
var SET_ACTIVE_CURRENCY = "[Site-context] Set Active Currency";
var CURRENCY_CHANGE = "[Site-context] Currency Change";
var LoadCurrencies = class {
  constructor() {
    this.type = LOAD_CURRENCIES;
  }
};
var LoadCurrenciesFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_CURRENCIES_FAIL;
    this.error = payload;
  }
};
var LoadCurrenciesSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_CURRENCIES_SUCCESS;
  }
};
var SetActiveCurrency = class {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_ACTIVE_CURRENCY;
  }
};
var CurrencyChange = class {
  constructor(payload) {
    this.payload = payload;
    this.type = CURRENCY_CHANGE;
  }
};
var LOAD_LANGUAGES = "[Site-context] Load Languages";
var LOAD_LANGUAGES_FAIL = "[Site-context] Load Languages Fail";
var LOAD_LANGUAGES_SUCCESS = "[Site-context] Load Languages Success";
var SET_ACTIVE_LANGUAGE = "[Site-context] Set Active Language";
var LANGUAGE_CHANGE = "[Site-context] Language Change";
var LoadLanguages = class {
  constructor() {
    this.type = LOAD_LANGUAGES;
  }
};
var LoadLanguagesFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_LANGUAGES_FAIL;
    this.error = payload;
  }
};
var LoadLanguagesSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_LANGUAGES_SUCCESS;
  }
};
var SetActiveLanguage = class {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_ACTIVE_LANGUAGE;
  }
};
var LanguageChange = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LANGUAGE_CHANGE;
  }
};
var siteContextGroup_actions = Object.freeze({
  __proto__: null,
  BASE_SITE_CHANGE,
  BaseSiteChange,
  CURRENCY_CHANGE,
  CurrencyChange,
  LANGUAGE_CHANGE,
  LOAD_BASE_SITE,
  LOAD_BASE_SITES,
  LOAD_BASE_SITES_FAIL,
  LOAD_BASE_SITES_SUCCESS,
  LOAD_BASE_SITE_FAIL,
  LOAD_BASE_SITE_SUCCESS,
  LOAD_CURRENCIES,
  LOAD_CURRENCIES_FAIL,
  LOAD_CURRENCIES_SUCCESS,
  LOAD_LANGUAGES,
  LOAD_LANGUAGES_FAIL,
  LOAD_LANGUAGES_SUCCESS,
  LanguageChange,
  LoadBaseSite,
  LoadBaseSiteFail,
  LoadBaseSiteSuccess,
  LoadBaseSites,
  LoadBaseSitesFail,
  LoadBaseSitesSuccess,
  LoadCurrencies,
  LoadCurrenciesFail,
  LoadCurrenciesSuccess,
  LoadLanguages,
  LoadLanguagesFail,
  LoadLanguagesSuccess,
  SET_ACTIVE_BASE_SITE,
  SET_ACTIVE_CURRENCY,
  SET_ACTIVE_LANGUAGE,
  SetActiveBaseSite,
  SetActiveCurrency,
  SetActiveLanguage
});
var SITE_CONTEXT_FEATURE = "siteContext";
var getSiteContextState = createFeatureSelector(SITE_CONTEXT_FEATURE);
var sitesEntitiesSelector = (state) => state.entities;
var getBaseSiteState = createSelector(getSiteContextState, (state) => state.baseSite);
var getActiveBaseSite = createSelector(getSiteContextState, (state) => state && state.baseSite && state.baseSite.activeSite);
var getBaseSiteData = createSelector(getSiteContextState, (state) => state && state.baseSite && state.baseSite.details);
var getBaseSitesEntities = createSelector(getBaseSiteState, sitesEntitiesSelector);
var getAllBaseSites = createSelector(getBaseSitesEntities, (entities) => {
  return entities ? Object.keys(entities).map((uid) => entities[uid]) : null;
});
var currenciesEntitiesSelector = (state) => state.entities;
var activeCurrencySelector = (state) => state.activeCurrency;
var getCurrenciesState = createSelector(getSiteContextState, (state) => state.currencies);
var getCurrenciesEntities = createSelector(getCurrenciesState, currenciesEntitiesSelector);
var getActiveCurrency = createSelector(getCurrenciesState, activeCurrencySelector);
var getAllCurrencies = createSelector(getCurrenciesEntities, (entities) => {
  return entities ? Object.keys(entities).map((isocode) => entities[isocode]) : null;
});
var activeLanguageSelector = (state) => state.activeLanguage;
var languagesEntitiesSelector = (state) => state.entities;
var getLanguagesState = createSelector(getSiteContextState, (state) => state.languages);
var getLanguagesEntities = createSelector(getLanguagesState, languagesEntitiesSelector);
var getActiveLanguage = createSelector(getLanguagesState, activeLanguageSelector);
var getAllLanguages = createSelector(getLanguagesEntities, (entities) => {
  return entities ? Object.keys(entities).map((isocode) => entities[isocode]) : null;
});
var siteContextGroup_selectors = Object.freeze({
  __proto__: null,
  getActiveBaseSite,
  getActiveCurrency,
  getActiveLanguage,
  getAllBaseSites,
  getAllCurrencies,
  getAllLanguages,
  getBaseSiteData,
  getBaseSiteState,
  getBaseSitesEntities,
  getCurrenciesEntities,
  getCurrenciesState,
  getLanguagesEntities,
  getLanguagesState,
  getSiteContextState
});
var BaseSiteService = class _BaseSiteService {
  constructor(store, config) {
    this.store = store;
    this.config = config;
  }
  /**
   * Represents the current baseSite uid.
   */
  getActive() {
    return this.store.pipe(select(getActiveBaseSite), filter((active) => Boolean(active)));
  }
  /**
   * Get all base sites data
   */
  getAll() {
    return this.store.pipe(select(getAllBaseSites), tap((sites) => {
      if (!sites) {
        this.store.dispatch(new LoadBaseSites());
      }
    }), filter(isNotNullable));
  }
  /**
   * Get base site data based on site uid
   */
  get(siteUid) {
    if (siteUid) {
      return this.getAll().pipe(map((sites) => sites.find((site) => site.uid === siteUid)));
    }
    return this.getActive().pipe(switchMap((activeSiteUid) => this.getAll().pipe(map((sites) => sites.find((site) => site.uid === activeSiteUid)))));
  }
  setActive(baseSite) {
    this.store.pipe(select(getActiveBaseSite), take(1)).subscribe((activeBaseSite) => {
      if (baseSite && activeBaseSite !== baseSite) {
        this.store.dispatch(new SetActiveBaseSite(baseSite));
      }
    });
  }
  /**
   * Tells whether the value of the base site has been already initialized
   */
  isInitialized() {
    let valueInitialized = false;
    this.getActive().subscribe(() => valueInitialized = true).unsubscribe();
    return valueInitialized;
  }
  /**
   * Tells whether the given iso code is allowed.
   *
   * The list of allowed iso codes can be configured in the `context` config of Spartacus.
   */
  isValid(value) {
    return !!value && getContextParameterValues(this.config, BASE_SITE_CONTEXT_ID).includes(value);
  }
  static {
    this.ɵfac = function BaseSiteService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseSiteService)(ɵɵinject(Store), ɵɵinject(SiteContextConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BaseSiteService,
      factory: _BaseSiteService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseSiteService, [{
    type: Injectable
  }], () => [{
    type: Store
  }, {
    type: SiteContextConfig
  }], null);
})();
var OccEndpointsService = class _OccEndpointsService {
  get activeBaseSite() {
    return this._activeBaseSite ?? getContextParameterDefault(this.config, BASE_SITE_CONTEXT_ID);
  }
  constructor(config, baseSiteService) {
    this.config = config;
    this.baseSiteService = baseSiteService;
    this.logger = inject(LoggerService);
    if (this.baseSiteService) {
      this.baseSiteService.getActive().subscribe((value) => this._activeBaseSite = value);
    }
  }
  /**
   * Returns the value configured for a specific endpoint
   *
   * @param endpointKey the configuration key for the endpoint to return
   * @param scope endpoint configuration scope
   */
  getRawEndpointValue(endpoint, scope) {
    const endpointValue = this.getEndpointForScope(endpoint, scope);
    return endpointValue;
  }
  /**
   * Returns true when the endpoint is configured
   *
   * @param endpointKey the configuration key for the endpoint to return
   * @param scope endpoint configuration scope
   */
  isConfigured(endpoint, scope) {
    return !(typeof this.getEndpointFromConfig(endpoint, scope) === "undefined");
  }
  /**
   * Returns base OCC endpoint (baseUrl + prefix + baseSite) base on provided values
   *
   * @param baseUrlProperties Specify properties to not add to the url (baseUrl, prefix, baseSite)
   */
  getBaseUrl(baseUrlProperties = {
    baseUrl: true,
    prefix: true,
    baseSite: true
  }) {
    const baseUrl = baseUrlProperties.baseUrl === false ? "" : this.config?.backend?.occ?.baseUrl ?? "";
    const prefix = baseUrlProperties.prefix === false ? "" : this.getPrefix();
    const baseSite = baseUrlProperties.baseSite === false ? "" : this.activeBaseSite;
    return urlPathJoin(baseUrl, prefix, baseSite);
  }
  /**
   * Returns a fully qualified OCC Url
   *
   * @param endpoint Name of the OCC endpoint key
   * @param attributes Dynamic attributes used to build the url
   * @param propertiesToOmit Specify properties to not add to the url (baseUrl, prefix, baseSite)
   */
  buildUrl(endpoint, attributes, propertiesToOmit) {
    let url = this.getEndpointForScope(endpoint, attributes?.scope);
    if (attributes) {
      const {
        urlParams,
        queryParams
      } = attributes;
      if (urlParams) {
        url = StringTemplate.resolve(url, urlParams, true);
      }
      if (queryParams) {
        let httpParamsOptions = {
          encoder: new HttpParamsURIEncoder()
        };
        if (url.includes("?")) {
          let queryParamsFromEndpoint;
          [url, queryParamsFromEndpoint] = url.split("?");
          httpParamsOptions = __spreadValues(__spreadValues({}, httpParamsOptions), {
            fromString: queryParamsFromEndpoint
          });
        }
        const httpParams = this.getHttpParamsFromQueryParams(queryParams, httpParamsOptions);
        const params = httpParams.toString();
        if (params.length) {
          url += "?" + params;
        }
      }
    }
    return this.buildUrlFromEndpointString(url, propertiesToOmit);
  }
  getHttpParamsFromQueryParams(queryParams, options) {
    let httpParams = new HttpParams(options);
    Object.keys(queryParams).forEach((key) => {
      const value = queryParams[key];
      if (value !== void 0) {
        if (value === null) {
          httpParams = httpParams.delete(key);
        } else {
          httpParams = httpParams.set(key, value);
        }
      }
    });
    return httpParams;
  }
  getEndpointFromConfig(endpoint, scope) {
    const endpointsConfig = this.config.backend?.occ?.endpoints;
    if (!endpointsConfig) {
      return void 0;
    }
    const endpointConfig = endpointsConfig[endpoint];
    if (scope) {
      if (scope === DEFAULT_SCOPE && typeof endpointConfig === "string") {
        return endpointConfig;
      }
      return endpointConfig?.[scope];
    }
    return typeof endpointConfig === "string" ? endpointConfig : endpointConfig?.[DEFAULT_SCOPE];
  }
  // TODO: Can we reuse getEndpointFromConfig in this method? Should we change behavior of this function?
  getEndpointForScope(endpoint, scope) {
    const endpointsConfig = this.config.backend?.occ?.endpoints;
    if (!endpointsConfig) {
      return "";
    }
    const endpointConfig = endpointsConfig[endpoint];
    if (scope) {
      if (endpointConfig?.[scope]) {
        return endpointConfig?.[scope];
      }
      if (scope === DEFAULT_SCOPE && typeof endpointConfig === "string") {
        return endpointConfig;
      }
      if (isDevMode()) {
        this.logger.warn(`${endpoint} endpoint configuration missing for scope "${scope}"`);
      }
    }
    return (typeof endpointConfig === "string" ? endpointConfig : endpointConfig?.[DEFAULT_SCOPE]) || endpoint;
  }
  /**
   * Add the base OCC url properties to the specified endpoint string
   *
   * @param endpointString String value for the url endpoint
   * @param propertiesToOmit Specify properties to not add to the url (baseUrl, prefix, baseSite)
   */
  buildUrlFromEndpointString(endpointString, propertiesToOmit) {
    return urlPathJoin(this.getBaseUrl(propertiesToOmit), endpointString);
  }
  getPrefix() {
    if (this.config?.backend?.occ?.prefix && !this.config.backend.occ.prefix.startsWith("/")) {
      return "/" + this.config.backend.occ.prefix;
    }
    return this.config?.backend?.occ?.prefix ?? "";
  }
  static {
    this.ɵfac = function OccEndpointsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccEndpointsService)(ɵɵinject(OccConfig), ɵɵinject(BaseSiteService, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccEndpointsService,
      factory: _OccEndpointsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccEndpointsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OccConfig
  }, {
    type: BaseSiteService,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var ClientTokenInterceptor = class _ClientTokenInterceptor {
  constructor(clientTokenService, clientErrorHandlingService, occEndpoints) {
    this.clientTokenService = clientTokenService;
    this.clientErrorHandlingService = clientErrorHandlingService;
    this.occEndpoints = occEndpoints;
    this.enableClientToken = inject(AuthConfig).authentication?.useClientTokens ?? false;
  }
  intercept(request3, next) {
    const isClientTokenRequest = this.isClientTokenRequest(request3);
    if (isClientTokenRequest) {
      request3 = InterceptorUtil.removeHeader(USE_CLIENT_TOKEN, request3);
    }
    if (!this.enableClientToken) {
      return next.handle(request3);
    }
    return this.getClientToken(isClientTokenRequest).pipe(take(1), switchMap((token) => {
      if (token?.access_token && request3.url.includes(this.occEndpoints.getBaseUrl())) {
        request3 = request3.clone({
          setHeaders: {
            Authorization: `${token.token_type || "Bearer"} ${token.access_token}`
          }
        });
      }
      return next.handle(request3).pipe(catchError((errResponse) => {
        if (errResponse instanceof HttpErrorResponse && errResponse.status === 401 && isClientTokenRequest && this.isExpiredToken(errResponse)) {
          return this.clientErrorHandlingService.handleExpiredClientToken(request3, next);
        }
        throw errResponse;
      }));
    }));
  }
  getClientToken(isClientTokenRequest) {
    if (isClientTokenRequest) {
      return this.clientTokenService.getClientToken();
    }
    return of(void 0);
  }
  isClientTokenRequest(request3) {
    const isRequestMapping = InterceptorUtil.getInterceptorParam(USE_CLIENT_TOKEN, request3.headers);
    return Boolean(isRequestMapping);
  }
  isExpiredToken(resp) {
    return ["InvalidBearerTokenError", "InvalidTokenError"].includes(resp.error?.errors?.[0]?.type);
  }
  static {
    this.ɵfac = function ClientTokenInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClientTokenInterceptor)(ɵɵinject(ClientTokenService), ɵɵinject(ClientErrorHandlingService), ɵɵinject(OccEndpointsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ClientTokenInterceptor,
      factory: _ClientTokenInterceptor.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientTokenInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ClientTokenService
  }, {
    type: ClientErrorHandlingService
  }, {
    type: OccEndpointsService
  }], null);
})();
var interceptors$2 = [{
  provide: HTTP_INTERCEPTORS,
  useExisting: ClientTokenInterceptor,
  multi: true
}];
var StorageSyncType;
(function(StorageSyncType2) {
  StorageSyncType2["NO_STORAGE"] = "NO_STORAGE";
  StorageSyncType2["LOCAL_STORAGE"] = "LOCAL_STORAGE";
  StorageSyncType2["SESSION_STORAGE"] = "SESSION_STORAGE";
})(StorageSyncType || (StorageSyncType = {}));
var StateTransferType;
(function(StateTransferType2) {
  StateTransferType2["TRANSFER_STATE"] = "SSR";
})(StateTransferType || (StateTransferType = {}));
var StateConfig = class _StateConfig {
  static {
    this.ɵfac = function StateConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StateConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StateConfig,
      factory: function StateConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _StateConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StateConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var Priority;
(function(Priority2) {
  Priority2[Priority2["FALLBACK"] = -50] = "FALLBACK";
  Priority2[Priority2["LOW"] = -10] = "LOW";
  Priority2[Priority2["NORMAL"] = 0] = "NORMAL";
  Priority2[Priority2["HIGH"] = 10] = "HIGH";
})(Priority || (Priority = {}));
function resolveApplicable(applicables, matchParams = [], priorityParams = []) {
  const matchedApplicables = (applicables ?? []).filter((applicable) => !applicable.hasMatch || applicable.hasMatch(...matchParams));
  if (matchedApplicables.length < 2) {
    return matchedApplicables[0];
  }
  let lastPriority = -Infinity;
  return matchedApplicables.reduce((acc, curr) => {
    const currPriority = curr.getPriority ? curr.getPriority(...priorityParams) : Priority.NORMAL;
    if (lastPriority > currPriority) {
      return acc;
    }
    lastPriority = currPriority;
    return curr;
  }, void 0);
}
var Command = class {
};
var CommandStrategy;
(function(CommandStrategy2) {
  CommandStrategy2[CommandStrategy2["Parallel"] = 0] = "Parallel";
  CommandStrategy2[CommandStrategy2["Queue"] = 1] = "Queue";
  CommandStrategy2[CommandStrategy2["CancelPrevious"] = 2] = "CancelPrevious";
  CommandStrategy2[CommandStrategy2["ErrorPrevious"] = 3] = "ErrorPrevious";
})(CommandStrategy || (CommandStrategy = {}));
var CommandService = class _CommandService {
  constructor() {
    this.subscriptions = new Subscription();
  }
  create(commandFactory, options) {
    const commands$ = new Subject();
    const results$ = new Subject();
    const notify = (notifier$) => ({
      next: (x) => notifier$.next(x),
      error: (e) => notifier$.error(e),
      complete: () => notifier$.complete()
    });
    let process$;
    switch (options?.strategy) {
      case CommandStrategy.CancelPrevious:
      case CommandStrategy.ErrorPrevious:
        process$ = zip(commands$, results$).pipe(switchMap(([cmd, notifier$]) => defer(() => commandFactory(cmd)).pipe(tap(notify(notifier$)), catchError(() => EMPTY), finalize(() => {
          if (!notifier$.closed && !notifier$.hasError) {
            if (options.strategy === CommandStrategy.ErrorPrevious) {
              notifier$.error(new Error("Canceled by next command"));
            } else {
              notifier$.complete();
            }
          }
        }))));
        break;
      case CommandStrategy.Parallel:
        process$ = zip(commands$, results$).pipe(mergeMap(([cmd, notifier$]) => defer(() => commandFactory(cmd)).pipe(tap(notify(notifier$)), catchError(() => EMPTY))));
        break;
      case CommandStrategy.Queue:
      default:
        process$ = zip(commands$, results$).pipe(concatMap(([cmd, notifier$]) => defer(() => commandFactory(cmd)).pipe(tap(notify(notifier$)), catchError(() => EMPTY))));
        break;
    }
    this.subscriptions.add(process$.subscribe());
    const command = new class extends Command {
      constructor() {
        super(...arguments);
        this.execute = (parameters) => {
          const result$ = new ReplaySubject();
          results$.next(result$);
          commands$.next(parameters);
          return result$;
        };
      }
    }();
    return command;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function CommandService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommandService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CommandService,
      factory: _CommandService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommandService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function createFrom(type, data) {
  return Object.assign(new type(), data);
}
var CxEvent = class {
  static {
    this.type = "CxEvent";
  }
};
var MergingSubject = class {
  constructor() {
    this.sources = [];
    this.subscriptionsToSources = /* @__PURE__ */ new Map();
    this.output$ = new Observable((consumer) => {
      this.consumer = consumer;
      this.bindAllSourcesToConsumer(consumer);
      return () => {
        this.consumer = null;
        this.unbindAllSourcesFromConsumer();
      };
    }).pipe(share());
    this.consumer = null;
  }
  /**
   * Registers the given source to pass its values to the `output$` observable.
   *
   * It does nothing, when the source has been already added (but not removed yet).
   */
  add(source) {
    if (this.has(source)) {
      return;
    }
    if (this.consumer) {
      this.bindSourceToConsumer(source, this.consumer);
    }
    this.sources.push(source);
  }
  /**
   * Starts passing all values from already added sources to consumer
   */
  bindAllSourcesToConsumer(consumer) {
    this.sources.forEach((source) => this.bindSourceToConsumer(source, consumer));
  }
  /**
   * Stops passing all values from already added sources to consumer
   * (if any consumer is active at the moment)
   */
  unbindAllSourcesFromConsumer() {
    this.sources.forEach((source) => this.unbindSourceFromConsumer(source));
  }
  /**
   * Starts passing all values from a single source to consumer
   */
  bindSourceToConsumer(source, consumer) {
    const subscriptionToSource = source.subscribe((val) => consumer.next(val));
    this.subscriptionsToSources.set(source, subscriptionToSource);
  }
  /**
   * Stops passing all values from a single source to consumer
   * (if any consumer is active at the moment)
   */
  unbindSourceFromConsumer(source) {
    const subscriptionToSource = this.subscriptionsToSources.get(source);
    if (subscriptionToSource !== void 0) {
      subscriptionToSource.unsubscribe();
      this.subscriptionsToSources.delete(source);
    }
  }
  /**
   * Unregisters the given source so it stops passing its values to `output$` observable.
   *
   * Should be used when a source is no longer maintained **to avoid memory leaks**.
   */
  remove(source) {
    this.unbindSourceFromConsumer(source);
    let i;
    if ((i = this.sources.findIndex((s) => s === source)) !== -1) {
      this.sources.splice(i, 1);
    }
  }
  /**
   * Returns whether the given source has been already addded
   */
  has(source) {
    return this.sources.includes(source);
  }
};
var EventService = class _EventService {
  constructor() {
    this.logger = inject(LoggerService);
    this.eventsMeta = /* @__PURE__ */ new Map();
  }
  /**
   * Register an event source for the given event type.
   *
   * CAUTION: To avoid memory leaks, the returned teardown function should be called
   *  when the event source is no longer maintained by its creator
   * (i.e. in `ngOnDestroy` if the event source was registered in the component).
   *
   * @since 3.1 - registers the given `source$` for the parent classes of the given `eventType`.
   *
   * @param eventType the event type
   * @param source$ an observable that represents the source
   *
   * @returns a teardown function which unregisters the given event source
   */
  register(eventType, source$) {
    const eventMeta = this.getEventMeta(eventType);
    if (eventMeta.mergingSubject.has(source$)) {
      if (isDevMode()) {
        this.logger.warn(`EventService: the event source`, source$, `has been already registered for the type`, eventType);
      }
    } else {
      eventMeta.mergingSubject.add(source$);
    }
    return () => eventMeta.mergingSubject.remove(source$);
  }
  /**
   * Returns a stream of events for the given event type
   * @param eventTypes event type
   */
  get(eventType) {
    let output$ = this.getEventMeta(eventType).mergingSubject.output$;
    if (isDevMode()) {
      output$ = this.getValidatedEventStream(output$, eventType);
    }
    return output$;
  }
  /**
   * Dispatches an instance of an individual event.
   * If the eventType is provided a new event will be created for that type and with the event data.
   *
   * @param event an event
   * @param eventType (optional) - type of event
   */
  dispatch(event, eventType) {
    if (!eventType) {
      eventType = event.constructor;
    } else if (!(event instanceof eventType)) {
      event = createFrom(eventType, event);
    }
    const inputSubject$ = this.getInputSubject(eventType);
    inputSubject$.next(event);
  }
  /**
   * Returns the input subject used to dispatch a single event.
   * The subject is created on demand, when it's needed for the first time.
   * @param eventType type of event
   */
  getInputSubject(eventType) {
    const eventMeta = this.getEventMeta(eventType);
    if (!eventMeta.inputSubject$) {
      eventMeta.inputSubject$ = new Subject();
      this.register(eventType, eventMeta.inputSubject$);
    }
    return eventMeta.inputSubject$;
  }
  /**
   * Returns the event meta object for the given event type
   */
  getEventMeta(eventType) {
    if (!this.eventsMeta.get(eventType)) {
      if (isDevMode()) {
        this.validateEventType(eventType);
      }
      this.createEventMeta(eventType);
    }
    return this.eventsMeta.get(eventType);
  }
  createEventMeta(eventType) {
    const eventMeta = {
      inputSubject$: null,
      // will be created lazily by the `dispatch` method
      mergingSubject: new MergingSubject()
    };
    this.eventsMeta.set(eventType, eventMeta);
    let parentEvent = Object.getPrototypeOf(eventType);
    while (parentEvent !== null && Object.getPrototypeOf(parentEvent) !== Object.getPrototypeOf({})) {
      this.register(parentEvent, eventMeta.mergingSubject.output$);
      parentEvent = Object.getPrototypeOf(parentEvent);
    }
  }
  /**
   * Checks if the event type is a valid type (is a class with constructor).
   *
   * Should be used only in dev mode.
   */
  validateEventType(eventType) {
    if (!eventType?.constructor) {
      throw new Error(`EventService:  ${eventType} is not a valid event type. Please provide a class reference.`);
    }
    this.validateCxEvent(eventType);
  }
  /**
   * Validates if the given type (or its prototype chain) extends from the CxEvent.
   *
   * Should be used only in the dev mode.
   */
  validateCxEvent(eventType) {
    let parentType = eventType;
    while (parentType !== null && Object.getPrototypeOf(parentType) !== Object.getPrototypeOf({})) {
      if (parentType.type === CxEvent.type) {
        return;
      }
      parentType = Object.getPrototypeOf(parentType);
    }
    this.logger.warn(`The ${eventType.name} (or one of its parent classes) does not inherit from the ${CxEvent.type}`);
  }
  /**
   * Returns the given event source with runtime validation whether the emitted values are instances of given event type.
   *
   * Should be used only in dev mode.
   */
  getValidatedEventStream(source$, eventType) {
    return source$.pipe(tap((event) => {
      if (!(event instanceof eventType)) {
        this.logger.warn(`EventService: The stream`, source$, `emitted the event`, event, `that is not an instance of the declared type`, eventType.name);
      }
    }));
  }
  static {
    this.ɵfac = function EventService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _EventService,
      factory: _EventService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var QueryService = class _QueryService {
  constructor(eventService) {
    this.eventService = eventService;
    this.subscriptions = new Subscription();
  }
  create(loaderFactory, options) {
    const initialState2 = {
      data: void 0,
      error: false,
      loading: true
    };
    const state$ = new BehaviorSubject(initialState2);
    const onSubscribeLoad$ = iif(() => state$.value.loading, of(void 0), EMPTY);
    const loadTrigger$ = this.getTriggersStream([
      onSubscribeLoad$,
      // we need to evaluate onSubscribeLoad$ before other triggers in order to avoid other triggers changing state$ value
      ...options?.reloadOn ?? [],
      ...options?.resetOn ?? []
    ]);
    const resetTrigger$ = this.getTriggersStream(options?.resetOn ?? []);
    const reloadTrigger$ = this.getTriggersStream(options?.reloadOn ?? []);
    const loader$ = loaderFactory().pipe(takeUntil(resetTrigger$));
    const load$ = loadTrigger$.pipe(tap(() => {
      if (!state$.value.loading) {
        state$.next(__spreadProps(__spreadValues({}, state$.value), {
          loading: true
        }));
      }
    }), switchMap(() => loader$), tap((data) => {
      state$.next({
        loading: false,
        error: false,
        data
      });
    }), catchError((error, sourceStream$) => {
      state$.next({
        loading: false,
        error,
        data: void 0
      });
      return sourceStream$;
    }), share());
    if (options?.reloadOn?.length) {
      this.subscriptions.add(reloadTrigger$.subscribe(() => {
        if (!state$.value.loading) {
          state$.next(__spreadProps(__spreadValues({}, state$.value), {
            loading: true
          }));
        }
      }));
    }
    if (options?.resetOn?.length) {
      this.subscriptions.add(resetTrigger$.subscribe(() => {
        if (state$.value.data !== void 0 || state$.value.error !== false || state$.value.loading !== false) {
          state$.next(initialState2);
        }
      }));
    }
    const query$ = using(() => load$.subscribe(), () => state$);
    const data$ = query$.pipe(map((queryState) => queryState.data), distinctUntilChanged());
    return {
      get: () => data$,
      getState: () => query$
    };
  }
  getTriggersStream(triggers) {
    if (!triggers.length) {
      return EMPTY;
    }
    const observables = triggers.map((trigger) => {
      if (isObservable(trigger)) {
        return trigger;
      }
      return this.eventService.get(trigger);
    });
    return merge(...observables);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function QueryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QueryService)(ɵɵinject(EventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _QueryService,
      factory: _QueryService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QueryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }], null);
})();
function getLastValueSync(source) {
  let value;
  source.subscribe((emission) => value = emission).unsubscribe();
  return value;
}
var NOT_FOUND_SYMBOL$1 = {};
var CombinedInjector = class {
  /**
   * @param mainInjector Component hierarchical injector
   * @param complementaryInjectors Additional injector that will be taken into an account when resolving dependencies
   */
  constructor(mainInjector, complementaryInjectors) {
    this.mainInjector = mainInjector;
    this.complementaryInjectors = complementaryInjectors;
  }
  get(token, notFoundValue, optional) {
    if (optional && optional.self) {
      if (notFoundValue !== void 0) {
        return notFoundValue;
      }
      throw new Error("CombinedInjector should be used as a parent injector / doesn't support self dependencies");
    }
    for (const injector of this.complementaryInjectors) {
      const service = injector.get(token, NOT_FOUND_SYMBOL$1, {
        self: true
      });
      if (service !== NOT_FOUND_SYMBOL$1) {
        return service;
      }
    }
    for (const injector of this.complementaryInjectors) {
      const service = injector.get(token, NOT_FOUND_SYMBOL$1);
      if (service !== NOT_FOUND_SYMBOL$1) {
        return service;
      }
    }
    return this.mainInjector.get(token, notFoundValue);
  }
};
var ModuleInitializedEvent = class extends CxEvent {
  static {
    this.type = "ModuleInitializedEvent";
  }
};
var MODULE_INITIALIZER = new InjectionToken("MODULE_INITIALIZER");
var LazyModulesService = class _LazyModulesService {
  constructor(compiler, injector, events) {
    this.compiler = compiler;
    this.injector = injector;
    this.events = events;
    this.logger = inject(LoggerService);
    this.modules$ = connectable(this.events.get(ModuleInitializedEvent).pipe(map((event) => event.moduleRef)), {
      connector: () => new ReplaySubject(),
      resetOnDisconnect: false
    });
    this.dependencyModules = /* @__PURE__ */ new Map();
    this.eventSubscription = this.modules$.connect();
  }
  /**
   * Resolves module instance based dynamic import wrapped in an arrow function
   *
   * New module instance will be created with each call.
   *
   * @param moduleFunc
   * @param feature
   */
  resolveModuleInstance(moduleFunc, feature, dependencyModuleRefs = []) {
    let parentInjector;
    if (!dependencyModuleRefs.length) {
      parentInjector = this.injector;
    } else if (dependencyModuleRefs.length === 1) {
      parentInjector = dependencyModuleRefs[0].injector;
    } else {
      parentInjector = new CombinedInjector(this.injector, dependencyModuleRefs.map((moduleRef) => moduleRef.injector));
    }
    return this.resolveModuleFactory(moduleFunc).pipe(map(([moduleFactory]) => moduleFactory.create(parentInjector)), concatMap((moduleRef) => this.runModuleInitializersForModule(moduleRef)), tap((moduleRef) => this.events.dispatch(createFrom(ModuleInitializedEvent, {
      feature,
      moduleRef
    }))));
  }
  /**
   * Returns dependency module instance and initializes it when needed.
   *
   * Module will be instantiated only once, at first request for a this specific module class
   */
  resolveDependencyModuleInstance(moduleFunc) {
    return this.resolveModuleFactory(moduleFunc).pipe(map(([moduleFactory, module]) => {
      if (!this.dependencyModules.has(module)) {
        const moduleRef = moduleFactory.create(this.injector);
        this.dependencyModules.set(module, moduleRef);
      }
      return this.dependencyModules.get(module);
    }), concatMap((moduleRef) => this.runModuleInitializersForModule(moduleRef)), tap((moduleRef) => this.events.dispatch(createFrom(ModuleInitializedEvent, {
      moduleRef
    }))));
  }
  /**
   * The purpose of this function is to run MODULE_INITIALIZER logic that can be provided
   * by a lazy loaded module.  The module is recieved as a function parameter.
   * This function returns an Observable to the module reference passed as an argument.
   *
   * @param {NgModuleRef<any>} moduleRef
   *
   * @returns {Observable<NgModuleRef<any>>}
   */
  runModuleInitializersForModule(moduleRef) {
    const moduleInits = moduleRef.injector.get(MODULE_INITIALIZER, [], {
      self: true
    });
    const asyncInitPromises = this.runModuleInitializerFunctions(moduleInits);
    if (asyncInitPromises.length) {
      return from(Promise.all(asyncInitPromises)).pipe(tap({
        error: (error) => {
          this.logger.error("MODULE_INITIALIZER promise was rejected while lazy loading a module.", error);
        }
      }), switchMap(() => of(moduleRef)));
    } else {
      return of(moduleRef);
    }
  }
  /**
   * This function accepts an array of functions and runs them all. For each function that returns a promise,
   * the resulting promise is stored in an array of promises.  That array of promises is returned.
   * It is not required for the functions to return a Promise.  All functions are run.  The return values
   * that are not a Promise are simply not stored and returned.
   *
   * @param {(() => any)[]} initFunctions An array of functions too be run.
   *
   * @return {Promise<any>[]} An array of Promise returned by the functions, if any,
   */
  runModuleInitializerFunctions(initFunctions) {
    const initPromises = [];
    try {
      if (initFunctions) {
        for (let i = 0; i < initFunctions.length; i++) {
          const initResult = initFunctions[i]();
          if (this.isObjectPromise(initResult)) {
            initPromises.push(initResult);
          }
        }
      }
      return initPromises;
    } catch (error) {
      this.logger.error(`MODULE_INITIALIZER init function throwed an error. `, error);
      throw error;
    }
  }
  /**
   * Determine if the argument is shaped like a Promise
   */
  isObjectPromise(obj) {
    return !!obj && typeof obj.then === "function";
  }
  /**
   * Resolve any Angular module from an function that return module or moduleFactory
   */
  resolveModuleFactory(moduleFunc) {
    return from(moduleFunc()).pipe(switchMap((module) => module instanceof NgModuleFactory$1 ? of([module, module]) : combineLatest([
      // using compiler here is for jit compatibility, there is no overhead
      // for aot production builds as it will be stubbed
      from(this.compiler.compileModuleAsync(module)),
      of(module)
    ])), observeOn(queueScheduler));
  }
  ngOnDestroy() {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
    this.dependencyModules.forEach((dependency) => dependency.destroy());
  }
  static {
    this.ɵfac = function LazyModulesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LazyModulesService)(ɵɵinject(Compiler), ɵɵinject(Injector), ɵɵinject(EventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _LazyModulesService,
      factory: _LazyModulesService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LazyModulesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Compiler
  }, {
    type: Injector
  }, {
    type: EventService
  }], null);
})();
var NOT_FOUND_SYMBOL = {};
var UnifiedInjector = class _UnifiedInjector {
  constructor(rootInjector, lazyModules) {
    this.rootInjector = rootInjector;
    this.lazyModules = lazyModules;
    this.injectors$ = this.lazyModules.modules$.pipe(map((moduleRef) => moduleRef.injector), startWith(this.rootInjector));
  }
  /**
   * Gen instances for specified tokens.
   *
   * When notFoundValue is provided, it will consistently emit once per injector,
   * even if injector doesn't contain instances for specified token.
   * Otherwise, emissions will only involve cases, where new instances will be found.
   *
   * @param token
   * @param notFoundValue
   */
  get(token, notFoundValue) {
    return this.injectors$.pipe(map((injector, index) => injector.get(
      token,
      notFoundValue ?? NOT_FOUND_SYMBOL,
      // we want to get only Self instances from all injectors except the
      // first one, which is a root injector
      index ? {
        self: true
      } : void 0
    )), filter((instance2) => instance2 !== NOT_FOUND_SYMBOL));
  }
  getMulti(token) {
    return this.get(token, []).pipe(filter((instances) => {
      if (!Array.isArray(instances)) {
        throw new Error(`Multi-providers mixed with single providers for ${token.toString()}!`);
      }
      return instances.length > 0;
    }), scan((acc, services) => [...acc, ...services], []));
  }
  static {
    this.ɵfac = function UnifiedInjector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnifiedInjector)(ɵɵinject(Injector), ɵɵinject(LazyModulesService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnifiedInjector,
      factory: _UnifiedInjector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnifiedInjector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Injector
  }, {
    type: LazyModulesService
  }], null);
})();
var ConverterService = class _ConverterService {
  constructor(unifiedInjector) {
    this.unifiedInjector = unifiedInjector;
    this.subscriptions = new Subscription();
    this.converters = /* @__PURE__ */ new Map();
    const cacheResetLogic = this.unifiedInjector.injectors$.pipe(tap(() => this.converters.clear()));
    this.subscriptions.add(cacheResetLogic.subscribe());
  }
  getConverters(injectionToken) {
    if (!this.converters.has(injectionToken)) {
      const converters = getLastValueSync(this.unifiedInjector.getMulti(injectionToken));
      if (converters) {
        this.converters.set(injectionToken, converters);
      }
    }
    return this.converters.get(injectionToken);
  }
  /**
   * Will return true if converters for specified token were provided
   */
  hasConverters(injectionToken) {
    const converters = this.getConverters(injectionToken);
    return Array.isArray(converters) && converters.length > 0;
  }
  /**
   * Pipeable operator to apply converter logic in a observable stream
   */
  pipeable(injectionToken) {
    if (this.hasConverters(injectionToken)) {
      return map((model) => this.convertSource(model, injectionToken));
    } else {
      return (observable) => observable;
    }
  }
  /**
   * Pipeable operator to apply converter logic in a observable stream to collection of items
   */
  pipeableMany(injectionToken) {
    if (this.hasConverters(injectionToken)) {
      return map((model) => this.convertMany(model, injectionToken));
    } else {
      return (observable) => observable;
    }
  }
  /**
   * Apply converter logic specified by injection token to source data
   */
  convert(source, injectionToken) {
    if (this.hasConverters(injectionToken)) {
      return this.convertSource(source, injectionToken);
    } else {
      return source;
    }
  }
  /**
   * Apply converter logic specified by injection token to a collection
   */
  convertMany(sources, injectionToken) {
    if (this.hasConverters(injectionToken) && Array.isArray(sources)) {
      return sources.map((source) => this.convertSource(source, injectionToken));
    } else {
      return sources;
    }
  }
  convertSource(source, injectionToken) {
    return this.getConverters(injectionToken)?.reduce((target, converter) => {
      return converter.convert(source, target);
    }, void 0);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function ConverterService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConverterService)(ɵɵinject(UnifiedInjector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConverterService,
      factory: _ConverterService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConverterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UnifiedInjector
  }], null);
})();
var QUESTION_MARK = "[^/]";
var WILD_SINGLE = "[^/]*";
var WILD_OPEN = "(?:.+\\/)?";
var TO_ESCAPE_BASE = [{
  replace: /\./g,
  with: "\\."
}, {
  replace: /\+/g,
  with: "\\+"
}, {
  replace: /\*/g,
  with: WILD_SINGLE
}];
var TO_ESCAPE_WILDCARD_QM = [...TO_ESCAPE_BASE, {
  replace: /\?/g,
  with: QUESTION_MARK
}];
var TO_ESCAPE_LITERAL_QM = [...TO_ESCAPE_BASE, {
  replace: /\?/g,
  with: "\\?"
}];
function globToRegex(glob, literalQuestionMark = false) {
  const toEscape = literalQuestionMark ? TO_ESCAPE_LITERAL_QM : TO_ESCAPE_WILDCARD_QM;
  const segments = glob.split("/").reverse();
  let regex = "";
  while (segments.length > 0) {
    const segment = segments.pop();
    if (segment === "**") {
      if (segments.length > 0) {
        regex += WILD_OPEN;
      } else {
        regex += ".*";
      }
    } else {
      const processed = toEscape.reduce((seg, escapeRule) => seg?.replace(escapeRule.replace, escapeRule.with), segment);
      regex += processed;
      if (segments.length > 0) {
        regex += "\\/";
      }
    }
  }
  return regex;
}
function processGlobPatterns(urls) {
  return urls.map((url) => {
    const positive = !url.startsWith("!");
    url = positive ? url : url.substring(1);
    return {
      positive,
      regex: `^${globToRegex(url)}$`
    };
  });
}
var GlobService = class _GlobService {
  /**
   * For given list of glob-like patterns, returns a validator function.
   *
   * The validator returns true for given URL only when ANY of the positive patterns is matched and NONE of the negative ones.
   */
  getValidator(patterns) {
    const processedPatterns = processGlobPatterns(patterns).map(({
      positive,
      regex
    }) => ({
      positive,
      regex: new RegExp(regex)
    }));
    const includePatterns = processedPatterns.filter((spec) => spec.positive);
    const excludePatterns = processedPatterns.filter((spec) => !spec.positive);
    return (url) => includePatterns.some((pattern) => pattern.regex.test(url)) && !excludePatterns.some((pattern) => pattern.regex.test(url));
  }
  static {
    this.ɵfac = function GlobService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GlobService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GlobService,
      factory: _GlobService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var JavaRegExpConverter = class _JavaRegExpConverter {
  constructor() {
    this.logger = inject(LoggerService);
    this.EXTRACT_JAVA_REGEXP_MODIFIERS = /^(\(\?([a-z]+)\))?(.*)/;
  }
  /**
   * Converts RegExp from Java syntax to Javascript, by recognizing Java regexp modifiers
   * and converting them to the Javascript ones (i.e. case insensitive mode: `(?i)PATTERN` -> `/pattern/i`)
   *
   * **CAUTION!** Not all features and modifiers of Java regexps are valid in Javascript!
   * If unsupported feature or modifier is used, then `null` will be returned instead of Javascript RegExp.
   *
   * See differences between Java and Javascript regexps:
   * - https://stackoverflow.com/questions/8754444/convert-javascript-regular-expression-to-java-syntax
   * - https://en.wikipedia.org/wiki/Comparison_of_regular_expression_engines#Language_features
   */
  toJsRegExp(javaSyntax) {
    const parts = javaSyntax.match(this.EXTRACT_JAVA_REGEXP_MODIFIERS);
    if (!parts) {
      return null;
    }
    const [, , modifiers, jsSyntax] = parts;
    try {
      return new RegExp(jsSyntax, modifiers);
    } catch (error) {
      if (isDevMode()) {
        this.logger.warn(`WARNING: Could not convert Java regexp into Javascript. Original regexp: ${javaSyntax} 
Message: ${error}`);
      }
      return null;
    }
  }
  static {
    this.ɵfac = function JavaRegExpConverter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JavaRegExpConverter)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _JavaRegExpConverter,
      factory: _JavaRegExpConverter.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JavaRegExpConverter, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ObjectComparisonUtils = class {
  static shallowEqualObjects(objA, objB) {
    if (objA === objB) {
      return true;
    }
    if (!objA || !objB) {
      return false;
    }
    const aKeys = Object.keys(objA);
    const bKeys = Object.keys(objB);
    const aKeysLen = aKeys.length;
    const bKeysLen = bKeys.length;
    if (aKeysLen !== bKeysLen) {
      return false;
    }
    for (let i = 0; i < aKeysLen; i++) {
      const key = aKeys[i];
      if (objA[key] !== objB[key]) {
        return false;
      }
    }
    return true;
  }
  static deepEqualObjects(objA, objB) {
    if (objA === objB) {
      return true;
    } else if (!(objA instanceof Object) || !(objB instanceof Object)) {
      return false;
    } else if (objA.constructor !== objB.constructor) {
      return false;
    } else {
      return this.compareObjectProperties(objA, objB);
    }
  }
  static compareObjectProperties(objA, objB) {
    for (const key in objA) {
      if (!objA.hasOwnProperty(key)) {
        continue;
      }
      if (!objB.hasOwnProperty(key)) {
        return false;
      }
      if (objA[key] === objB[key]) {
        continue;
      }
      if (typeof objA[key] !== "object") {
        return false;
      }
      if (!this.deepEqualObjects(objA[key], objB[key])) {
        return false;
      }
    }
    for (const key in objB) {
      if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  static countOfDeepEqualObjects(obj, arr2) {
    return arr2.reduce((acc, curr) => {
      if (this.deepEqualObjects(obj, curr)) {
        acc++;
      }
      return acc;
    }, 0);
  }
  static indexOfFirstOccurrence(obj, arr2) {
    for (let index = 0; index < arr2.length; index++) {
      if (this.deepEqualObjects(arr2[index], obj)) {
        return index;
      }
    }
  }
};
var OccHttpErrorType;
(function(OccHttpErrorType2) {
  OccHttpErrorType2["NOT_FOUND_ERROR"] = "NotFoundError";
  OccHttpErrorType2["CLASS_MISMATCH_ERROR"] = "ClassMismatchError";
})(OccHttpErrorType || (OccHttpErrorType = {}));
var OccHttpErrorReason;
(function(OccHttpErrorReason2) {
  OccHttpErrorReason2["NOT_FOUND_ERROR"] = "notFound";
})(OccHttpErrorReason || (OccHttpErrorReason = {}));
function isJaloError(err) {
  return err.details?.[0]?.type === "JaloObjectNoLongerValidError";
}
function isServerError(err) {
  return !!err?.status && err.status >= 500 && err.status <= 511;
}
function isAuthorizationError(err) {
  return !!err?.status && err.status === 401;
}
var DEFAULT_SERVER_ERROR_RETRIES_COUNT = 2;
var DEFAULT_AUTHORIZATION_ERROR_RETRIES_COUNT = 2;
var EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var PASSWORD_PATTERN = /^(?=.*?[A-Z])(?=.*?\d)(?=.*?[!@#$%^*()_\-+{};:.,]).{6,}$/;
var MIN_ONE_UPPER_CASE_CHARACTER_PATTERN = /^(?=.*?[A-Z]).*$/;
var MIN_ONE_DIGIT_PATTERN = /^(?=.*?\d).*$/;
var MIN_ONE_SPECIAL_CHARACTER_PATTERN = /^(?=.*?[!@#$%^*()_\-+{};:.,]).*$/;
var MIN_SIX_CHARACTERS_PATTERN = /^.{6,}$/;
var MIN_EIGHT_CHARACTERS_PATTERN = /^.{8,}$/;
var MAX_CHARACTERS_PATTERN = /^.{0,128}$/;
var CONSECUTIVE_CHARACTERS = /(.)\1+/;
var STRONG_PASSWORD_PATTERN = /^(?!.*(.)\1)(?=.*?[A-Z])(?=.*?\d)(?=.*?[!@#$%^*()_\-+{};:.,]).{6,}$/;
var SECURE_PASSWORD_PATTERN = /^(?!.*(.)\1)(?=.*?[A-Z])(?=.*?\d)(?=.*?[!@#$%^*()_\-+{};:.,]).{8,128}$/;
function backOff(options) {
  const shouldRetry = options?.shouldRetry ?? (() => true);
  const maxTries = options?.maxTries ?? 3;
  const delay2 = options?.delay ?? 300;
  return (source$) => source$.pipe(
    // retries the source stream in case of an error.
    retry({
      delay: (attemptError, currentRetry) => {
        if (currentRetry > maxTries || !shouldRetry(attemptError)) {
          throw attemptError;
        }
        const exponent = currentRetry * currentRetry;
        return timer(exponent * delay2);
      }
    })
  );
}
function uniteLatest(sources) {
  return defer(() => {
    let subNo = 0;
    const trigger = new Observable((subscriber) => {
      const action = () => {
        subscriber.next();
        subscriber.complete();
      };
      if (subNo) {
        asapScheduler.schedule(action);
      } else {
        action();
      }
      subNo++;
    });
    return combineLatest(sources).pipe(audit(() => trigger));
  });
}
function withdrawOn(notifier) {
  return (source) => notifier.pipe(startWith(void 0), switchMap(() => source));
}
function wrapIntoObservable(value) {
  if (isObservable(value)) {
    return value;
  }
  if (isPromise2(value)) {
    return from(Promise.resolve(value));
  }
  return of(value);
}
function isPromise2(obj) {
  return !!obj && typeof obj.then === "function";
}
var ScriptPlacement;
(function(ScriptPlacement2) {
  ScriptPlacement2["HEAD"] = "head";
  ScriptPlacement2["BODY"] = "body";
})(ScriptPlacement || (ScriptPlacement = {}));
var ScriptLoader = class _ScriptLoader {
  constructor(document, platformId) {
    this.document = document;
    this.platformId = platformId;
  }
  /**
   * Embeds a javascript from an external URL.
   *
   * @param embedOptions
   * src: URL for the script to be loaded
   * params: additional parameters to be attached to the given URL
   * attributes: the attributes of HTML script tag (exclude src)
   * callback: a function to be invoked after the script has been loaded
   * errorCallback: function to be invoked after error during script loading
   * placement: HTML body or head where script will be placed
   * disableKeyRestriction: disable the custom attributes restriction which requires key to start with 'data-'
   */
  embedScript(embedOptions) {
    const {
      src,
      params,
      attributes,
      callback,
      errorCallback,
      placement = ScriptPlacement.HEAD,
      disableKeyRestriction
    } = embedOptions;
    const isSSR = isPlatformServer(this.platformId);
    if ((callback || errorCallback) && isSSR) {
      return;
    }
    const source = params ? src + this.parseParams(params) : src;
    if (!isSSR && this.hasScript(source)) {
      return;
    }
    const script = this.document.createElement("script");
    script.src = source;
    script.async = true;
    script.defer = true;
    if (attributes) {
      Object.keys(attributes).forEach((key) => {
        if (key.startsWith("data-") || disableKeyRestriction && !(key in script)) {
          script.setAttribute(key, attributes[key]);
        } else {
          script[key] = attributes[key];
        }
      });
    }
    if (callback) {
      script.addEventListener("load", callback);
    }
    if (errorCallback) {
      script.addEventListener("error", errorCallback);
    }
    placement === ScriptPlacement.HEAD ? this.document.head.appendChild(script) : this.document.body.appendChild(script);
  }
  /**
   * Indicates if the script is already added to the DOM.
   */
  hasScript(src) {
    return !!this.document.querySelector(`script[src="${src}"]`);
  }
  /**
   * Parses the given object with parameters to a string "param1=value1&param2=value2"
   * @param params object containing parameters
   */
  parseParams(params) {
    let result = "";
    const keysArray = Object.keys(params);
    if (keysArray.length > 0) {
      result = "?" + keysArray.map((key) => encodeURI(key) + "=" + encodeURI(params[key])).join("&");
    }
    return result;
  }
  static {
    this.ɵfac = function ScriptLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScriptLoader)(ɵɵinject(DOCUMENT), ɵɵinject(PLATFORM_ID));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ScriptLoader,
      factory: _ScriptLoader.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScriptLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var TestingTimeUtils = class {
  static fakeToLocaleTimeString(mockTime, callback) {
    const original = Date.prototype.toLocaleTimeString;
    Date.prototype.toLocaleTimeString = () => mockTime;
    callback();
    Date.prototype.toLocaleTimeString = original;
  }
  static fakeDateTimezoneOffset(offset, callback) {
    const original = Date.prototype.getTimezoneOffset;
    Date.prototype.getTimezoneOffset = () => offset;
    callback();
    Date.prototype.getTimezoneOffset = original;
  }
};
var TimeUtils = class _TimeUtils {
  /**
   * Returns the local timezone in a format that can be appended to a date-like string.
   * @param invert (default: false): returns the opposite operator relative to the local timezone
   *
   * @example
   * When locale is set to a CEST timezone, `getLocalTimezoneOffset()` returns '+02:00'
   * and `getLocalTimezoneOffset(true)` returns '-02:00'
   */
  static getLocalTimezoneOffset(invert) {
    const offset = (/* @__PURE__ */ new Date()).getTimezoneOffset() * -1;
    const hours = Math.abs(Math.floor(offset / 60)).toString().padStart(2, "0");
    const minutes = (offset % 60).toString().padStart(2, "0");
    const sign = offset >= 0 ? invert ? `-` : `+` : invert ? `+` : `-`;
    return `${sign}${hours}:${minutes}`;
  }
  static convertDateToDatetime(date, endOfDay) {
    return `${date}T${!endOfDay ? "00:00:00" : "23:59:59"}${_TimeUtils.getLocalTimezoneOffset()}`;
  }
  static convertDatetimeToDate(datetime) {
    return (/* @__PURE__ */ new Date(`${datetime.substring(0, 19)}${_TimeUtils.getLocalTimezoneOffset(true)}`)).toISOString().substring(0, 10);
  }
};
function tryNormalizeHttpError(error, logger) {
  return normalizeHttpError(error, logger) ?? error;
}
function normalizeHttpError(error, logger) {
  if (error instanceof HttpErrorModel) {
    return error;
  }
  if (error instanceof HttpErrorResponse) {
    const normalizedError = new HttpErrorModel();
    normalizedError.message = error.message;
    normalizedError.status = error.status;
    normalizedError.statusText = error.statusText;
    normalizedError.url = error.url;
    if (Array.isArray(error.error.errors)) {
      normalizedError.details = error.error.errors;
    } else if (typeof error.error.error === "string") {
      normalizedError.details = [{
        type: error.error.error,
        message: error.error.error_description
      }];
    }
    return normalizedError;
  }
  if (isDevMode()) {
    const logMessage = "Error passed to tryNormalizeHttpError is not HttpErrorResponse instance";
    logger.error(logMessage, error);
  }
  return void 0;
}
function isKeyInvalid(key) {
  const dangerousKeys = ["__proto__", "constructor", "prototype"];
  const isInvalidKey = dangerousKeys.includes(key);
  if (isInvalidKey) {
    throw new Error("Invalid object property name: potential prototype pollution risk");
  }
}
function getStorage(storageType, winRef) {
  let storage;
  switch (storageType) {
    case StorageSyncType.LOCAL_STORAGE: {
      storage = winRef.localStorage;
      break;
    }
    case StorageSyncType.SESSION_STORAGE: {
      storage = winRef.sessionStorage;
      break;
    }
    case StorageSyncType.NO_STORAGE: {
      storage = void 0;
      break;
    }
    default: {
      storage = winRef.sessionStorage;
    }
  }
  return storage;
}
function persistToStorage(configKey, value, storage) {
  if (!isSsr(storage) && isNotUndefined(value)) {
    storage.setItem(configKey, JSON.stringify(value));
  }
}
function readFromStorage(storage, key) {
  if (isSsr(storage)) {
    return;
  }
  const storageValue = storage.getItem(key);
  if (!storageValue) {
    return;
  }
  return JSON.parse(storageValue);
}
function isSsr(storage) {
  return !Boolean(storage);
}
var StatePersistenceService = class _StatePersistenceService {
  constructor(winRef) {
    this.winRef = winRef;
  }
  /**
   * Helper to synchronize state to more persistent storage (localStorage, sessionStorage).
   * It is context aware, so you can keep different state for te same feature based on specified context.
   *
   * Eg. cart is valid only under the same base site. So you want to synchronize cart only with the same base site.
   * Usage for that case: `syncWithStorage({ key: 'cart', state$: activeCartSelector$, context$: this.siteContextParamsService.getValues([BASE_SITE_CONTEXT_ID]), onRead: (state) => setCorrectStateInStore(state) })`.
   * Active cart for the `electronics` base site will be stored under `spartacus⚿electronics⚿cart` and for apparel under `spartacus⚿apparel⚿cart`.
   *
   * On each context change onRead function will be executed with state from storage provided as a parameter.
   *
   * Omitting context$ will trigger onRead only once at initialization.
   *
   * @param key Key to use in storage for the synchronized state. Should be unique for each feature.
   * @param state$ State to be saved and later restored.
   * @param context$ Context for state
   * @param storageType Storage type to be used to persist state
   * @param onRead Function to be executed on each storage read after context change
   *
   * @returns Subscriptions for reading/writing in storage on context/state change
   */
  syncWithStorage({
    key,
    state$,
    context$ = of(""),
    storageType = StorageSyncType.LOCAL_STORAGE,
    onRead = () => {
    }
  }) {
    const storage = getStorage(storageType, this.winRef);
    const subscriptions = new Subscription();
    subscriptions.add(context$.pipe(map((context) => {
      return storage ? readFromStorage(storage, this.generateKeyWithContext(context, key)) : void 0;
    }), tap((state) => onRead(state))).subscribe());
    if (storage) {
      subscriptions.add(state$.pipe(withLatestFrom(context$)).subscribe(([state, context]) => {
        persistToStorage(this.generateKeyWithContext(context, key), state, storage);
      }));
    }
    return subscriptions;
  }
  /**
   * Helper to read state from persistent storage (localStorage, sessionStorage).
   * It is useful if you need synchronously access state saved with `syncWithStorage`.
   *
   * @param key Key to use in storage for state. Should be unique for each feature.
   * @param context Context value for state
   * @param storageType Storage type from to read state
   *
   * @returns State from the storage
   */
  readStateFromStorage({
    key,
    context = "",
    storageType = StorageSyncType.LOCAL_STORAGE
  }) {
    const storage = getStorage(storageType, this.winRef);
    if (storage) {
      return readFromStorage(storage, this.generateKeyWithContext(context, key));
    }
  }
  generateKeyWithContext(context, key) {
    return `spartacus⚿${[].concat(context).join("⚿")}⚿${key}`;
  }
  static {
    this.ɵfac = function StatePersistenceService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StatePersistenceService)(ɵɵinject(WindowRef));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StatePersistenceService,
      factory: _StatePersistenceService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatePersistenceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: WindowRef
  }], null);
})();
var UserIdService = class _UserIdService {
  constructor() {
    this._userId = new ReplaySubject(1);
  }
  /**
   * Sets current user id.
   *
   * @param userId
   */
  setUserId(userId) {
    this._userId.next(userId);
  }
  /**
   * This function provides the userId the OCC calls should use, depending
   * on whether there is an active storefront session or not.
   *
   * It returns the userId of the current storefront user or 'anonymous'
   * in the case there are no signed in user in the storefront.
   *
   * The user id of a regular customer session is 'current'. In the case of an
   * asm customer emulation session, the userId will be the customerId.
   */
  getUserId() {
    return this._userId;
  }
  /**
   * Utility method if you need userId to perform single action (eg. dispatch call to API).
   *
   * @param loggedIn Set to true if you want the observable to emit id only for logged in user. Throws in case of anonymous user.
   *
   * @returns Observable that emits once and completes with the last userId value.
   */
  takeUserId(loggedIn = false) {
    return this.getUserId().pipe(take(1), map((userId) => {
      if (loggedIn && userId === OCC_USER_ID_ANONYMOUS) {
        throw new Error("Requested user id for logged user while user is not logged in.");
      }
      return userId;
    }));
  }
  /**
   * Sets user id to the default value for logged out user.
   */
  clearUserId() {
    this.setUserId(OCC_USER_ID_ANONYMOUS);
  }
  /**
   * Checks if the userId is of emulated user type.
   */
  isEmulated() {
    return this.getUserId().pipe(map((userId) => userId !== OCC_USER_ID_ANONYMOUS && userId !== OCC_USER_ID_CURRENT));
  }
  static {
    this.ɵfac = function UserIdService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserIdService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserIdService,
      factory: _UserIdService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserIdService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var AuthStorageService = class _AuthStorageService extends OAuthStorage {
  constructor() {
    super(...arguments);
    this._token$ = new BehaviorSubject({});
  }
  static {
    this.nonStringifiedOAuthLibKeys = ["PKCE_verifier", "access_token", "refresh_token", "expires_at", "access_token_stored_at", "id_token", "id_token_expires_at", "id_token_stored_at", "session_state", "nonce"];
  }
  decode(key, value) {
    if (_AuthStorageService.nonStringifiedOAuthLibKeys.includes(key)) {
      return value;
    }
    return JSON.stringify(value);
  }
  encode(key, value) {
    if (_AuthStorageService.nonStringifiedOAuthLibKeys.includes(key)) {
      return value;
    } else {
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    }
  }
  /* Async API for spartacus use */
  /**
   * Returns complete token (all fields).
   *
   * @return observable emitting AuthToken
   */
  getToken() {
    return this._token$;
  }
  /**
   * Set current value of token.
   *
   * @param token
   */
  setToken(token) {
    this._token$.next(token);
  }
  /* Sync API for OAuth lib use */
  /**
   * Get parameter from the token (eg. access_token)
   *
   * @param key
   */
  getItem(key) {
    let token;
    this.getToken().subscribe((currentToken) => token = currentToken).unsubscribe();
    return this.decode(key, token?.[key]);
  }
  /**
   * Removes parameter from the token (eg. access_token)
   *
   * @param key
   */
  removeItem(key) {
    const val = __spreadValues({}, this._token$.value);
    delete val[key];
    this._token$.next(__spreadValues({}, val));
  }
  /**
   * Sets parameter of the token (eg. access_token)
   *
   * @param key
   */
  setItem(key, data) {
    if (key) {
      this._token$.next(__spreadProps(__spreadValues({}, this._token$.value), {
        [key]: this.encode(key, data)
      }));
    }
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵAuthStorageService_BaseFactory;
      return function AuthStorageService_Factory(__ngFactoryType__) {
        return (ɵAuthStorageService_BaseFactory || (ɵAuthStorageService_BaseFactory = ɵɵgetInheritedFactory(_AuthStorageService)))(__ngFactoryType__ || _AuthStorageService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AuthStorageService,
      factory: _AuthStorageService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var AuthRedirectStorageService = class _AuthRedirectStorageService {
  constructor() {
    this.redirectUrl$ = new BehaviorSubject(void 0);
  }
  /**
   * Get redirect url after logging in.
   *
   * @returns observable with the redirect url as string
   */
  getRedirectUrl() {
    return this.redirectUrl$;
  }
  /**
   * Set url to redirect to after login.
   *
   * @param redirectUrl
   */
  setRedirectUrl(redirectUrl) {
    this.redirectUrl$.next(redirectUrl);
  }
  static {
    this.ɵfac = function AuthRedirectStorageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthRedirectStorageService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AuthRedirectStorageService,
      factory: _AuthRedirectStorageService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthRedirectStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var AuthStatePersistenceService = class _AuthStatePersistenceService {
  constructor(statePersistenceService, userIdService, authStorageService, authRedirectStorageService) {
    this.statePersistenceService = statePersistenceService;
    this.userIdService = userIdService;
    this.authStorageService = authStorageService;
    this.authRedirectStorageService = authRedirectStorageService;
    this.subscription = new Subscription();
    this.key = "auth";
  }
  /**
   * Initializes the synchronization between state and browser storage.
   */
  initSync() {
    this.subscription.add(this.statePersistenceService.syncWithStorage({
      key: this.key,
      state$: this.getAuthState(),
      onRead: (state) => this.onRead(state)
    }));
  }
  /**
   * Gets and transforms state from different sources into the form that should
   * be saved in storage.
   */
  getAuthState() {
    return combineLatest([this.authStorageService.getToken().pipe(filter((state) => !!state), map((state) => {
      return __spreadValues({}, state);
    })), this.userIdService.getUserId(), this.authRedirectStorageService.getRedirectUrl()]).pipe(map(([authToken, userId, redirectUrl]) => {
      let token = authToken;
      if (token) {
        token = __spreadValues({}, token);
        delete token.refresh_token;
      }
      return {
        token,
        userId,
        redirectUrl
      };
    }));
  }
  /**
   * Function called on each browser storage read.
   * Used to update state from browser -> state.
   */
  onRead(state) {
    if (state?.token) {
      this.authStorageService.setToken(state.token);
    }
    if (state?.redirectUrl) {
      this.authRedirectStorageService.setRedirectUrl(state.redirectUrl);
    }
    if (state?.userId) {
      this.userIdService.setUserId(state.userId);
    } else {
      this.userIdService.clearUserId();
    }
  }
  /**
   * Reads synchronously state from storage and returns it.
   */
  readStateFromStorage() {
    return this.statePersistenceService.readStateFromStorage({
      key: this.key
    });
  }
  /**
   * Check synchronously in browser storage if user is logged in (required by transfer state reducer).
   * For most cases `isUserLoggedIn` from the `AuthService` should be used instead of this.
   */
  isUserLoggedIn() {
    return Boolean(this.readStateFromStorage()?.token?.access_token);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function AuthStatePersistenceService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthStatePersistenceService)(ɵɵinject(StatePersistenceService), ɵɵinject(UserIdService), ɵɵinject(AuthStorageService), ɵɵinject(AuthRedirectStorageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AuthStatePersistenceService,
      factory: _AuthStatePersistenceService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthStatePersistenceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: StatePersistenceService
  }, {
    type: UserIdService
  }, {
    type: AuthStorageService
  }, {
    type: AuthRedirectStorageService
  }], null);
})();
var CX_KEY = makeStateKey("cx-state");
function getTransferStateReducer(platformId, transferState, config, authStatePersistenceService) {
  if (transferState && config?.state?.ssrTransfer?.keys) {
    if (isPlatformBrowser(platformId)) {
      return getBrowserTransferStateReducer(transferState, config.state.ssrTransfer.keys, Boolean(authStatePersistenceService?.isUserLoggedIn()));
    } else if (isPlatformServer(platformId)) {
      return getServerTransferStateReducer(transferState, config.state.ssrTransfer.keys);
    }
  }
  return (reducer2) => reducer2;
}
function getServerTransferStateReducer(transferState, keys) {
  const transferStateKeys = filterKeysByType(keys, StateTransferType.TRANSFER_STATE);
  return function(reducer2) {
    return function(state, action) {
      const newState = reducer2(state, action);
      if (newState) {
        const stateSlice = getStateSlice(transferStateKeys, [], newState);
        transferState.set(CX_KEY, stateSlice);
      }
      return newState;
    };
  };
}
function getBrowserTransferStateReducer(transferState, keys, isLoggedIn) {
  const transferStateKeys = filterKeysByType(keys, StateTransferType.TRANSFER_STATE);
  return function(reducer2) {
    return function(state, action) {
      if (action.type === INIT) {
        if (!state) {
          state = reducer2(state, action);
        }
        if (!isLoggedIn && transferState.hasKey(CX_KEY)) {
          const cxKey = transferState.get(CX_KEY, {});
          const transferredStateSlice = getStateSlice(transferStateKeys, [], cxKey);
          state = deepMerge({}, state, transferredStateSlice);
        }
        return state;
      }
      return reducer2(state, action);
    };
  };
}
var TRANSFER_STATE_META_REDUCER = new InjectionToken("TransferStateMetaReducer");
var stateMetaReducers = [{
  provide: TRANSFER_STATE_META_REDUCER,
  useFactory: getTransferStateReducer,
  deps: [PLATFORM_ID, [new Optional(), TransferState], [new Optional(), Config], [new Optional(), AuthStatePersistenceService]]
}, {
  provide: META_REDUCERS,
  useExisting: TRANSFER_STATE_META_REDUCER,
  multi: true
}];
var StateModule = class _StateModule {
  static forRoot() {
    return {
      ngModule: _StateModule,
      providers: [...stateMetaReducers]
    };
  }
  static {
    this.ɵfac = function StateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StateModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _StateModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StateModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var OAuthFlow;
(function(OAuthFlow2) {
  OAuthFlow2[OAuthFlow2["ResourceOwnerPasswordFlow"] = 0] = "ResourceOwnerPasswordFlow";
  OAuthFlow2[OAuthFlow2["ImplicitFlow"] = 1] = "ImplicitFlow";
  OAuthFlow2[OAuthFlow2["AuthorizationCode"] = 2] = "AuthorizationCode";
})(OAuthFlow || (OAuthFlow = {}));
var AuthConfigService = class _AuthConfigService {
  constructor(authConfig, occConfig) {
    this.authConfig = authConfig;
    this.occConfig = occConfig;
  }
  /**
   * Utility to make access to authentication config easier.
   */
  get config() {
    return this.authConfig?.authentication ?? {};
  }
  /**
   * Get client_id
   *
   * @return client_id
   */
  getClientId() {
    return this.config?.client_id ?? "";
  }
  /**
   * Get client_secret. OAuth server shouldn't require it from web apps (but Hybris OAuth server requires).
   *
   * @return client_secret
   */
  getClientSecret() {
    return this.config?.client_secret ?? "";
  }
  /**
   * Returns base url of the authorization server
   */
  getBaseUrl() {
    return this.config?.baseUrl ?? (this.occConfig?.backend?.occ?.baseUrl ?? "") + "/authorizationserver";
  }
  /**
   * Returns endpoint for getting the auth token
   */
  getTokenEndpoint() {
    const tokenEndpoint = this.config?.tokenEndpoint ?? "";
    return this.prefixEndpoint(tokenEndpoint);
  }
  /**
   * Returns url for redirect to the authorization server to get token/code
   */
  getLoginUrl() {
    const loginUrl = this.config?.loginUrl ?? "";
    return this.prefixEndpoint(loginUrl);
  }
  /**
   * Retrieves the custom login form endpoint from the configuration.
   */
  getCustomLoginFormEndpoint() {
    const customLoginFormEndpoint = this.config?.customLoginPage?.loginFormEndpoint ?? "";
    return this.prefixEndpoint(customLoginFormEndpoint);
  }
  /**
   * Retrieves the CSRF endpoint for custom login based on the configuration settings.
   */
  getCsrfEndpoint() {
    const csrfEndpoint = this.config?.customLoginPage?.csrfEndpoint ?? "";
    return this.prefixEndpoint(csrfEndpoint);
  }
  /**
   * Returns endpoint for token revocation (both access and refresh token).
   */
  getRevokeEndpoint() {
    const revokeEndpoint = this.config?.revokeEndpoint ?? "";
    return this.prefixEndpoint(revokeEndpoint);
  }
  /**
   * Determines if Custom Login Page feature is enabled
   */
  customLoginEnabled() {
    return !!this.config?.customLoginPage;
  }
  /**
   * Determines if an authorization header should be sent with revoke requests.
   */
  sendAuthHeaderOnRevoke() {
    return !!this.config?.sendAuthHeaderOnRevoke;
  }
  /**
   * Returns logout url to redirect to on logout.
   */
  getLogoutUrl() {
    const logoutUrl = this.config?.logoutUrl ?? "";
    return this.prefixEndpoint(logoutUrl);
  }
  /**
   * Returns userinfo endpoint of the OAuth server.
   */
  getUserinfoEndpoint() {
    const userinfoEndpoint = this.config?.userinfoEndpoint ?? "";
    return this.prefixEndpoint(userinfoEndpoint);
  }
  /**
   * Returns configuration specific for the angular-oauth2-oidc library.
   */
  getOAuthLibConfig() {
    return this.config?.OAuthLibConfig ?? {};
  }
  prefixEndpoint(endpoint) {
    let url = endpoint;
    if (!url.startsWith("/")) {
      url = "/" + url;
    }
    return `${this.getBaseUrl()}${url}`;
  }
  /**
   * Returns the type of the OAuth flow based on auth config.
   * Use when you have to perform particular action only in some of the OAuth flow scenarios.
   */
  getOAuthFlow() {
    const responseType = this.config?.OAuthLibConfig?.responseType;
    if (responseType) {
      const types = responseType.split(" ");
      if (types.includes("code")) {
        return OAuthFlow.AuthorizationCode;
      } else if (types.includes("token")) {
        return OAuthFlow.ImplicitFlow;
      } else {
        return OAuthFlow.ResourceOwnerPasswordFlow;
      }
    }
    return OAuthFlow.ResourceOwnerPasswordFlow;
  }
  static {
    this.ɵfac = function AuthConfigService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthConfigService)(ɵɵinject(AuthConfig), ɵɵinject(OccConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AuthConfigService,
      factory: _AuthConfigService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AuthConfig
  }, {
    type: OccConfig
  }], null);
})();
var ClientAuthenticationTokenService = class _ClientAuthenticationTokenService {
  constructor(http, authConfigService) {
    this.http = http;
    this.authConfigService = authConfigService;
  }
  /**
   * Loads token with client authentication flow.
   *
   * @returns observable with ClientToken
   */
  loadClientAuthenticationToken() {
    const url = this.authConfigService.getTokenEndpoint();
    const params = new HttpParams().set("client_id", encodeURIComponent(this.authConfigService.getClientId())).set("client_secret", encodeURIComponent(this.authConfigService.getClientSecret())).set("grant_type", "client_credentials");
    const headers2 = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    return this.http.post(url, params, {
      headers: headers2
    });
  }
  static {
    this.ɵfac = function ClientAuthenticationTokenService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClientAuthenticationTokenService)(ɵɵinject(HttpClient), ɵɵinject(AuthConfigService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ClientAuthenticationTokenService,
      factory: _ClientAuthenticationTokenService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientAuthenticationTokenService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }, {
    type: AuthConfigService
  }], null);
})();
var ClientTokenEffect = class _ClientTokenEffect {
  constructor(actions$, clientAuthenticationTokenService) {
    this.actions$ = actions$;
    this.clientAuthenticationTokenService = clientAuthenticationTokenService;
    this.logger = inject(LoggerService);
    this.loadClientToken$ = createEffect(() => this.actions$.pipe(ofType(LOAD_CLIENT_TOKEN), exhaustMap(() => {
      return this.clientAuthenticationTokenService.loadClientAuthenticationToken().pipe(map((token) => {
        return new LoadClientTokenSuccess(token);
      }), catchError((error) => of(new LoadClientTokenFail(tryNormalizeHttpError(error, this.logger)))));
    })));
  }
  static {
    this.ɵfac = function ClientTokenEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClientTokenEffect)(ɵɵinject(Actions), ɵɵinject(ClientAuthenticationTokenService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ClientTokenEffect,
      factory: _ClientTokenEffect.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientTokenEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: ClientAuthenticationTokenService
  }], null);
})();
var effects$7 = [ClientTokenEffect];
function getReducers$9() {
  return {
    clientToken: loaderReducer(CLIENT_TOKEN_DATA)
  };
}
var reducerToken$9 = new InjectionToken("ClientAuthReducers");
var reducerProvider$9 = {
  provide: reducerToken$9,
  useFactory: getReducers$9
};
var ClientAuthStoreModule = class _ClientAuthStoreModule {
  static {
    this.ɵfac = function ClientAuthStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClientAuthStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ClientAuthStoreModule,
      imports: [CommonModule, StateModule, StoreFeatureModule, EffectsFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [reducerProvider$9],
      imports: [CommonModule, StateModule, StoreModule.forFeature(CLIENT_AUTH_FEATURE, reducerToken$9), EffectsModule.forFeature(effects$7)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientAuthStoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, StateModule, StoreModule.forFeature(CLIENT_AUTH_FEATURE, reducerToken$9), EffectsModule.forFeature(effects$7)],
      providers: [reducerProvider$9]
    }]
  }], null, null);
})();
var ClientAuthModule = class _ClientAuthModule {
  static forRoot() {
    return {
      ngModule: _ClientAuthModule,
      providers: [...interceptors$2]
    };
  }
  static {
    this.ɵfac = function ClientAuthModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClientAuthModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ClientAuthModule,
      imports: [CommonModule, ClientAuthStoreModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, ClientAuthStoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientAuthModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ClientAuthStoreModule]
    }]
  }], null, null);
})();
var CrossSiteRequestForgeryService = class _CrossSiteRequestForgeryService {
  constructor() {
    this.http = inject(HttpClient);
    this.authConfigService = inject(AuthConfigService);
  }
  /**
   * Returns CSRF Token
   */
  getCsrfToken() {
    const url = this.authConfigService.getCsrfEndpoint();
    return this.http.get(url, {
      withCredentials: true
    });
  }
  static {
    this.ɵfac = function CrossSiteRequestForgeryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CrossSiteRequestForgeryService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CrossSiteRequestForgeryService,
      factory: _CrossSiteRequestForgeryService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CrossSiteRequestForgeryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var LOGIN = "[Auth] Login";
var LOGOUT = "[Auth] Logout";
var Login = class {
  constructor() {
    this.type = LOGIN;
  }
};
var Logout = class {
  constructor() {
    this.type = LOGOUT;
  }
};
var authGroup_actions = Object.freeze({
  __proto__: null,
  LOGIN,
  LOGOUT,
  Login,
  Logout
});
var FeatureLevelDirective = class _FeatureLevelDirective {
  constructor(templateRef, viewContainer, featureConfig) {
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
    this.featureConfig = featureConfig;
    this.hasView = false;
  }
  set cxFeatureLevel(level) {
    if (this.featureConfig.isLevel(level.toString()) && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!this.featureConfig.isLevel(level.toString()) && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
  static {
    this.ɵfac = function FeatureLevelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeatureLevelDirective)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(FeatureConfigService));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _FeatureLevelDirective,
      selectors: [["", "cxFeatureLevel", ""]],
      inputs: {
        cxFeatureLevel: "cxFeatureLevel"
      },
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureLevelDirective, [{
    type: Directive,
    args: [{
      selector: "[cxFeatureLevel]",
      standalone: false
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: ViewContainerRef
  }, {
    type: FeatureConfigService
  }], {
    cxFeatureLevel: [{
      type: Input
    }]
  });
})();
var FeatureDirective = class _FeatureDirective {
  constructor(templateRef, viewContainer, featureConfig) {
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
    this.featureConfig = featureConfig;
    this.hasView = false;
  }
  set cxFeature(feature) {
    if (this.featureConfig.isEnabled(feature) && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!this.featureConfig.isEnabled(feature) && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
  static {
    this.ɵfac = function FeatureDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeatureDirective)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(FeatureConfigService));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _FeatureDirective,
      selectors: [["", "cxFeature", ""]],
      inputs: {
        cxFeature: "cxFeature"
      },
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureDirective, [{
    type: Directive,
    args: [{
      selector: "[cxFeature]",
      standalone: false
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: ViewContainerRef
  }, {
    type: FeatureConfigService
  }], {
    cxFeature: [{
      type: Input
    }]
  });
})();
var defaultFeatureToggles = {
  searchBoxV2: true,
  trendingSearches: true,
  a11yUseProperTextColorForFutureStockAccordion: true,
  a11yPopoverHighContrast: true,
  a11yTabsManualActivation: true,
  a11yAnonymousConsentMessageInDialog: true,
  a11yQuickOrderSearchListKeyboardNavigation: true,
  a11yStyleExternalLinksAsLinks: true,
  a11ySearchboxLabel: true,
  a11ySelectLabelWithContextForSelectedAddrOrPayment: true,
  a11yKeyboardAccessibleZoom: false,
  a11yTruncatedTextStoreFinder: true,
  a11yTruncatedTextUnitLevelOrderHistory: true,
  a11yPreventCartItemsFormRedundantRecreation: false,
  a11yPickupOptionsTabs: true,
  a11yResetFocusAfterNavigating: true,
  headerLayoutForSmallerViewports: true,
  a11yStoreFinderLabel: false,
  a11yImprovedErrorMessage: false,
  a11yLinkBtnsToTertiaryBtns: false,
  a11yNgSelectCloseDropdownOnEscape: true,
  a11ySelectImprovementsCustomerTicketingCreateSelectbox: true,
  a11yNgSelectAriaLabelDropdownCustomized: true,
  a11yUpdatingCartNoNarration: true,
  a11yPasswordVisibliltyBtnValueOverflow: true,
  a11yItemCounterFocus: true,
  a11yScrollToReviewByShowReview: true,
  a11yViewHoursButtonIconContrast: true,
  a11yStoreInStockIconContrast: true,
  a11yCheckoutStepsLandmarks: true,
  a11yQTY2Quantity: true,
  a11yImproveButtonsInCardComponent: true,
  a11yMiniCartFocusOnMobile: true,
  a11yWrapReviewOrderInSection: true,
  a11yApprovalProcessWithNoClearable: true,
  a11yPostRegisterSuccessMessage: true,
  a11yDeleteButton2First: true,
  a11yShowLabelOfSelect: true,
  a11yShowDownArrowOnFocusedSelectMenu: true,
  a11yCroppedFocusRing: true,
  a11yTextSpacingAdjustments: true,
  a11yTableHeaderReadout: true,
  a11ySearchboxAssistiveMessage: true,
  updateConsentGivenInOnChanges: true,
  a11yDifferentiateFocusedAndSelected: true,
  a11yQuickOrderSearchBoxRefocusOnClose: true,
  a11yKeyboardFocusInSearchBox: true,
  a11yAddPaddingToCarouselPanel: false,
  a11yNavigationButtonsAriaFixes: true,
  a11yFocusOnCardAfterSelecting: true,
  a11ySearchableDropdownFirstElementFocus: true,
  a11yHideConsentButtonWhenBannerVisible: true,
  a11yRepeatingButtonsUniqueLabels: true,
  a11yHighContrastBorders: true,
  a11yRegionAssociatedHeaders: true,
  a11yPdpGridArrangement: true,
  a11yHamburgerMenuTrapFocus: true,
  useExtendedMediaComponentConfiguration: true,
  showRealTimeStockInPDP: true,
  a11yScrollToTopPositioning: true,
  a11yWideScreenImprovements: false,
  a11yOptimizedMenuSpacing: false,
  a11yNgSelectLayering: false,
  readMoreDirective: false,
  productReviewCharactersLeft: false,
  a11yNgSelectAriaControls: false,
  a11yConfiguratorOverviewHeaderVPC: false,
  enableSecurePasswordValidation: true,
  enableCarouselCategoryProducts: true,
  enableClaimCustomerCouponWithCodeInRequestBody: true,
  enableReadDomainValuesOnDemand: false,
  opfEnablePreventingFromCheckoutWithoutEmail: false,
  storeFinderFacadeCleanup: false,
  defaultProductPageRouteAllowsNoProductName: false,
  consistentSizeProductCards: false,
  reserveHorizontalSpaceStarRating: false,
  topProgressBarUseTransformAnimation: false,
  disableCxPageSlotMarginAnimation: false,
  productCarouselScrolling: false,
  cdsLoginEventsToken: false,
  createMediaPreconnectLink: false,
  unifiedDefaultHeaderSlotsAcrossBreakpoints: false,
  reserveSpaceForImagesOnPdpAndPlp: false,
  lazyLoadImagesByDefault: false,
  authorizationCodeFlowByDefault: false,
  incrementProcessesCountForMergeCart: true,
  dispatchLoginActionOnlyWhenTokenReceived: false,
  defaultLayoutConfigWithoutPageFold: false
};
var LOCATION_INITIALIZED_MULTI = new InjectionToken("MULTI_LOCATION_INITIALIZED");
var CONFIG_INITIALIZER = new InjectionToken("ConfigInitializer");
var CONFIG_INITIALIZER_FORROOT_GUARD = new InjectionToken("CONFIG_INITIALIZER_FORROOT_GUARD");
var ConfigInitializerService = class _ConfigInitializerService {
  constructor(config, initializerGuard, rootConfig) {
    this.config = config;
    this.initializerGuard = initializerGuard;
    this.rootConfig = rootConfig;
    this.logger = inject(LoggerService);
    this.ongoingScopes$ = new BehaviorSubject(void 0);
  }
  /**
   * Returns true if config is stable, i.e. all CONFIG_INITIALIZERS resolved correctly
   */
  get isStable() {
    return !this.initializerGuard || this.ongoingScopes$.value?.length === 0;
  }
  /**
   * Recommended way to get config for code that can run before app will finish
   * initialization (APP_INITIALIZERS, selected service constructors)
   *
   * Used without parameters waits for the whole config to become stable
   *
   * Parameters allow to describe which part of the config should be stable using
   * string describing config part, e.g.:
   * 'siteContext', 'siteContext.language', etc.
   *
   * @param scopes String describing parts of the config we want to be sure are stable
   */
  getStable(...scopes) {
    if (this.isStable) {
      return of(this.config);
    }
    return this.ongoingScopes$.pipe(filter((ongoingScopes) => !!ongoingScopes && this.areReady(scopes, ongoingScopes)), take(1), map(() => this.config));
  }
  /**
   * Removes provided scopes from currently ongoingScopes
   *
   * @param scopes
   */
  finishScopes(scopes) {
    const newScopes = [...this.ongoingScopes$.value ?? []];
    for (const scope of scopes) {
      newScopes.splice(newScopes.indexOf(scope), 1);
    }
    this.ongoingScopes$.next(newScopes);
  }
  /**
   * Return true if provided scopes are not part of ongoingScopes
   *
   * @param scopes
   * @param ongoingScopes
   */
  areReady(scopes, ongoingScopes) {
    if (!scopes.length) {
      return !ongoingScopes.length;
    }
    for (const scope of scopes) {
      for (const ongoingScope of ongoingScopes) {
        if (this.scopesOverlap(scope, ongoingScope)) {
          return false;
        }
      }
    }
    return true;
  }
  /**
   * Check if two scopes overlap.
   *
   * Example of scopes that overlap:
   * 'test' and 'test', 'test.a' and 'test', 'test' and 'test.a'
   *
   * Example of scopes that do not overlap:
   * 'test' and 'testA', 'test.a' and 'test.b', 'test.nested' and 'test.nest'
   *
   * @param a ScopeA
   * @param b ScopeB
   */
  scopesOverlap(a, b) {
    if (b.length > a.length) {
      [a, b] = [b, a];
    }
    return a.startsWith(b) && (a[b.length] || ".") === ".";
  }
  /**
   * @internal
   *
   * Not a part of a public API, used by APP_INITIALIZER to initialize all provided CONFIG_INITIALIZERS
   *
   */
  initialize(initializers) {
    return __async(this, null, function* () {
      if (this.ongoingScopes$.value) {
        return;
      }
      const ongoingScopes = [];
      const asyncConfigs = [];
      for (const initializer of initializers || []) {
        if (!initializer) {
          continue;
        }
        if (!initializer.scopes || !initializer.scopes.length) {
          throw new Error("CONFIG_INITIALIZER should provide scope!");
        }
        if (isDevMode() && !this.areReady(initializer.scopes, ongoingScopes)) {
          this.logger.warn("More than one CONFIG_INITIALIZER is initializing the same config scope.");
        }
        ongoingScopes.push(...initializer.scopes);
        asyncConfigs.push((() => __async(this, null, function* () {
          const initializerConfig = yield initializer.configFactory();
          deepMerge(this.rootConfig, initializerConfig);
          deepMerge(this.config, initializerConfig);
          this.finishScopes(initializer.scopes);
        }))());
      }
      this.ongoingScopes$.next(ongoingScopes);
      if (asyncConfigs.length) {
        yield Promise.all(asyncConfigs);
      }
    });
  }
  static {
    this.ɵfac = function ConfigInitializerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfigInitializerService)(ɵɵinject(Config), ɵɵinject(CONFIG_INITIALIZER_FORROOT_GUARD, 8), ɵɵinject(RootConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfigInitializerService,
      factory: _ConfigInitializerService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigInitializerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Config
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CONFIG_INITIALIZER_FORROOT_GUARD]
    }]
  }, {
    type: Config,
    decorators: [{
      type: Inject,
      args: [RootConfig]
    }]
  }], null);
})();
function configInitializerFactory(configInitializer, initializers) {
  const isReady = () => configInitializer.initialize(initializers);
  return isReady;
}
function locationInitializedFactory$1(configInitializer) {
  return lastValueFrom(configInitializer.getStable());
}
var ConfigInitializerModule = class _ConfigInitializerModule {
  static forRoot() {
    return {
      ngModule: _ConfigInitializerModule,
      providers: [{
        provide: CONFIG_INITIALIZER_FORROOT_GUARD,
        useValue: true
      }, {
        provide: APP_INITIALIZER,
        multi: true,
        useFactory: configInitializerFactory,
        deps: [ConfigInitializerService, [new Optional(), CONFIG_INITIALIZER]]
      }, {
        // Hold on the initial navigation until the Spartacus configuration is stable
        provide: LOCATION_INITIALIZED_MULTI,
        useFactory: () => {
          const configInitializer = inject(ConfigInitializerService);
          return () => lastValueFrom(configInitializer.getStable());
        },
        multi: true
      }]
    };
  }
  static {
    this.ɵfac = function ConfigInitializerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfigInitializerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfigInitializerModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigInitializerModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var ConfigValidatorToken = new InjectionToken("ConfigurationValidator");
function provideConfigValidator(configValidator) {
  return {
    provide: ConfigValidatorToken,
    useValue: configValidator,
    multi: true
  };
}
function validateConfig(config, configValidators, logger) {
  for (const validate of configValidators) {
    const warning = validate(config);
    if (warning) {
      logger.warn(warning);
    }
  }
}
function configValidatorFactory(configInitializer, validators) {
  const logger = inject(LoggerService);
  return () => {
    if (isDevMode()) {
      configInitializer.getStable().subscribe((config) => validateConfig(config, validators || [], logger));
    }
  };
}
var ConfigValidatorModule = class _ConfigValidatorModule {
  static forRoot() {
    return {
      ngModule: _ConfigValidatorModule,
      providers: [{
        provide: APP_INITIALIZER,
        multi: true,
        useFactory: configValidatorFactory,
        deps: [ConfigInitializerService, [new Optional(), ConfigValidatorToken]]
      }]
    };
  }
  static {
    this.ɵfac = function ConfigValidatorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfigValidatorModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfigValidatorModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigValidatorModule, [{
    type: NgModule
  }], null, null);
})();
var ConfigurationService = class _ConfigurationService {
  constructor(rootConfig, defaultConfig, unifiedInjector, config) {
    this.rootConfig = rootConfig;
    this.defaultConfig = defaultConfig;
    this.unifiedInjector = unifiedInjector;
    this.ambientDefaultConfig = {};
    this.ambientConfig = {};
    this.config = config;
    this.unifiedConfig$ = new BehaviorSubject(config);
    this.subscription = this.feedUnifiedConfig().subscribe();
  }
  feedUnifiedConfig() {
    const configChunks$ = this.unifiedInjector.get(ConfigChunk, []);
    const defaultConfigChunks$ = this.unifiedInjector.get(DefaultConfigChunk, []);
    return zip(configChunks$, defaultConfigChunks$).pipe(
      // we don't need result from the root injector
      skip(1),
      tap(([configChunks, defaultConfigChunks]) => this.processConfig(configChunks, defaultConfigChunks))
    );
  }
  processConfig(configChunks, defaultConfigChunks) {
    if (defaultConfigChunks?.length) {
      deepMerge(this.ambientDefaultConfig, ...defaultConfigChunks);
    }
    if (configChunks.length) {
      deepMerge(this.ambientConfig, ...configChunks);
    }
    if (configChunks.length || defaultConfigChunks.length) {
      this.emitUnifiedConfig();
    }
  }
  emitUnifiedConfig() {
    const newConfig = deepMerge({}, this.defaultConfig, this.ambientDefaultConfig, this.ambientConfig, this.rootConfig);
    this.unifiedConfig$.next(newConfig);
    if (!isFeatureEnabled(this.config, "disableConfigUpdates")) {
      deepMerge(this.config, newConfig);
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.unifiedConfig$.complete();
  }
  static {
    this.ɵfac = function ConfigurationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfigurationService)(ɵɵinject(RootConfig), ɵɵinject(DefaultConfig), ɵɵinject(UnifiedInjector), ɵɵinject(Config));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfigurationService,
      factory: _ConfigurationService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigurationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Config,
    decorators: [{
      type: Inject,
      args: [RootConfig]
    }]
  }, {
    type: Config,
    decorators: [{
      type: Inject,
      args: [DefaultConfig]
    }]
  }, {
    type: UnifiedInjector
  }, {
    type: Config
  }], null);
})();
var ConfigModule = class _ConfigModule {
  // To make sure ConfigurationService will be instantiated, we inject it into
  // module constructor
  constructor(_configurationService) {
  }
  /**
   * Import ConfigModule and contribute config to the global configuration
   *
   * To provide default configuration in libraries provideDefaultConfig should be used instead.
   *
   * @param config Config object to merge with the global configuration
   */
  static withConfig(config) {
    return {
      ngModule: _ConfigModule,
      // eslint-disable-next-line @nx/workspace/use-provide-default-config
      providers: [provideConfig(config)]
    };
  }
  /**
   * Import ConfigModule and contribute config to the global configuration using factory function
   *
   * To provide default configuration in libraries provideDefaultConfigFactory should be used instead.
   *
   * @param configFactory Factory function that will generate configuration
   * @param deps Optional dependencies to factory function
   */
  static withConfigFactory(configFactory2, deps) {
    return {
      ngModule: _ConfigModule,
      // eslint-disable-next-line @nx/workspace/use-provide-default-config-factory
      providers: [provideConfigFactory(configFactory2, deps)]
    };
  }
  /**
   * Module with providers, should be imported only once, if possible, at the root of the app.
   *
   * @param config
   */
  static forRoot(config = {}) {
    return {
      ngModule: _ConfigModule,
      // eslint-disable-next-line @nx/workspace/use-provide-default-config
      providers: [provideConfig(config)]
    };
  }
  static {
    this.ɵfac = function ConfigModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfigModule)(ɵɵinject(ConfigurationService));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfigModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: ConfigurationService
  }], null);
})();
function getCookie(cookie, name) {
  const regExp = new RegExp("(?:^|;\\s*)" + name + "=([^;]*)", "g");
  const result = regExp.exec(cookie);
  return result && decodeURIComponent(result[1]) || "";
}
var TEST_CONFIG_COOKIE_NAME = new InjectionToken("TEST_CONFIG_COOKIE_NAME");
var TEST_CONFIG = new InjectionToken("TEST_CONFIG", {
  providedIn: "root",
  factory: () => {
    const cookieName = inject(TEST_CONFIG_COOKIE_NAME);
    const platform = inject(PLATFORM_ID);
    const document = inject(DOCUMENT);
    if (isPlatformBrowser(platform) && cookieName) {
      const config = getCookie(document.cookie, cookieName);
      return parseConfigJSON(config);
    }
    return {};
  }
});
function parseConfigJSON(config) {
  try {
    return JSON.parse(decodeURIComponent(config));
  } catch (_) {
    return {};
  }
}
var TestConfigModule = class _TestConfigModule {
  /**
   * Injects JSON config from the cookie of the given name.
   *
   * Be aware of the cookie limitations (4096 bytes).
   *
   * CAUTION: DON'T USE IT IN PRODUCTION! IT HASN'T BEEN REVIEWED FOR SECURITY ISSUES.
   */
  static forRoot(options) {
    return {
      ngModule: _TestConfigModule,
      providers: [
        {
          provide: TEST_CONFIG_COOKIE_NAME,
          useValue: options?.cookie
        },
        // eslint-disable-next-line @nx/workspace/use-provide-default-feature-toggles-factory -- deliberately providing high priority FeatureToggles
        provideFeatureTogglesFactory(() => {
          const testConfig = inject(TEST_CONFIG) ?? {};
          return testConfig.features;
        }),
        // eslint-disable-next-line @nx/workspace/use-provide-default-config-factory -- deliberately providing a high priority FeatureConfig
        provideConfigFactory(() => {
          return inject(TEST_CONFIG) ?? {};
        })
      ]
    };
  }
  static {
    this.ɵfac = function TestConfigModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TestConfigModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TestConfigModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestConfigModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var populateFeatureTogglesToFeaturesConfig = [
  // Copies RootFeatureToggles to RootConfig
  provideConfigFactory(() => {
    const flags = inject(RootFeatureToggles);
    return {
      features: __spreadValues({}, flags)
    };
  }),
  // Copies DefaultFeatureToggles to DefaultFeaturesConfig
  provideDefaultConfigFactory(() => {
    const flags = inject(DefaultFeatureToggles);
    return {
      features: __spreadValues({}, flags)
    };
  })
];
var FeatureStylesService = class _FeatureStylesService {
  constructor() {
    this.rendererFactory = inject(RendererFactory2);
    this.featureConfig = inject(FeatureConfigService);
    this.logger = inject(LoggerService);
    this.CSS_FEATURE_FLAG_PREFIX = "cxFeat_";
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.usagesCounter = /* @__PURE__ */ new Map();
  }
  /**
   * Saves the root element of the application for later usage in this service.
   *
   * In edge cases, if some usages of feature flags were registered
   * before the `init()` method was called, this method immediately adds
   * CSS classes to the root element for the already registered features usages.
   */
  init(rootComponent) {
    this.rootElement = rootComponent.location.nativeElement;
    for (const [feature, count] of this.usagesCounter.entries()) {
      if (count > 0) {
        this.addClass(feature);
      }
    }
  }
  /**
   * Registers the usage of a given feature flag.
   *
   * - If the feature flag enabled, this method adds the feature's CSS class
   *    to the root element.
   * - If the feature flag is disabled, this method does nothing.
   *
   * Note: Please mind to call `unregisterUsage()` when the feature is not used anymore.
   *       Otherwise, the feature's CSS class will be added to the root element forever.
   */
  registerUsage(feature) {
    const currentCounter = this.usagesCounter.get(feature) ?? 0;
    if (this.isEnabled(feature) && currentCounter === 0) {
      this.addClass(feature);
    }
    this.usagesCounter.set(feature, currentCounter + 1);
  }
  /**
   * Unregisters the usage of a feature flag.
   *
   * If the feature flag is enabled, this method removes the feature's CSS class
   * from the root element (unless there are other registered usages of the same feature yet).
   */
  unregisterUsage(feature) {
    const currentCounter = this.usagesCounter.get(feature) ?? 0;
    if (currentCounter === 0 && isDevMode()) {
      this.logger.warn(`Feature flag CSS: "${feature}" is already not used, so it cannot be unregistered.`);
    }
    if (this.isEnabled(feature) && currentCounter === 1) {
      this.removeClass(feature);
    }
    this.usagesCounter.set(feature, Math.max(currentCounter - 1, 0));
  }
  /**
   * Returns whether the given feature flag is enabled.
   */
  isEnabled(feature) {
    return this.featureConfig.isEnabled(feature);
  }
  /**
   * Adds the feature's CSS class to the root element, if the flag is enabled.
   *
   * It does nothing if the feature flag is disabled
   * or if the root element is not yet available.
   */
  addClass(feature) {
    const cssClass = this.getCssClass(feature);
    if (!this.rootElement || !cssClass) {
      return;
    }
    this.renderer.addClass(this.rootElement, cssClass);
  }
  /**
   * Removes the feature's CSS class from the root element, if the flag is enabled.
   *
   * It does nothing if the feature flag is disabled
   * or if the root element is not yet available.
   */
  removeClass(feature) {
    const cssClass = this.getCssClass(feature);
    if (!this.rootElement || !cssClass) {
      return;
    }
    this.renderer.removeClass(this.rootElement, cssClass);
  }
  /**
   * Returns a feature flag's CSS class name.
   *
   * The CSS class name consists of the prefix `cxFeat_`
   * and the feature flag name.
   */
  getCssClass(feature) {
    return this.featureConfig.isEnabled(feature) ? `${this.CSS_FEATURE_FLAG_PREFIX}${feature}` : void 0;
  }
  static {
    this.ɵfac = function FeatureStylesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeatureStylesService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _FeatureStylesService,
      factory: _FeatureStylesService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureStylesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var FeaturesConfigModule = class _FeaturesConfigModule {
  static forRoot(defaultLevel = "3.0") {
    return {
      ngModule: _FeaturesConfigModule,
      providers: [
        provideDefaultFeatureToggles(defaultFeatureToggles),
        ...populateFeatureTogglesToFeaturesConfig,
        // for backward compatibility with the deprecated FeaturesConfig
        provideDefaultConfig({
          features: {
            level: defaultLevel || "*"
          }
        }),
        {
          provide: APP_BOOTSTRAP_LISTENER,
          multi: true,
          useFactory: () => {
            const featureStylesService = inject(FeatureStylesService);
            return (compRef) => featureStylesService.init(compRef);
          }
        }
      ]
    };
  }
  static {
    this.ɵfac = function FeaturesConfigModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeaturesConfigModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FeaturesConfigModule,
      declarations: [FeatureLevelDirective, FeatureDirective],
      exports: [FeatureLevelDirective, FeatureDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturesConfigModule, [{
    type: NgModule,
    args: [{
      declarations: [FeatureLevelDirective, FeatureDirective],
      exports: [FeatureLevelDirective, FeatureDirective]
    }]
  }], null, null);
})();
function useFeatureStyles(feature) {
  assertInInjectionContext(useFeatureStyles);
  const featureStylesService = inject(FeatureStylesService);
  const destroyRef = inject(DestroyRef);
  featureStylesService.registerUsage(feature);
  destroyRef.onDestroy(() => featureStylesService.unregisterUsage(feature));
}
var OAUTH_REDIRECT_FLOW_KEY = "oAuthRedirectCodeFlow";
var OAuthLibWrapperService = class _OAuthLibWrapperService {
  // TODO: Remove platformId dependency in 4.0
  constructor(oAuthService, authConfigService, platformId, winRef) {
    this.oAuthService = oAuthService;
    this.authConfigService = authConfigService;
    this.platformId = platformId;
    this.winRef = winRef;
    this.featureConfigService = inject(FeatureConfigService);
    this.events$ = this.oAuthService.events;
    this.initialize();
  }
  initialize() {
    const isSSR = !this.winRef.isBrowser();
    this.oAuthService.configure(__spreadValues({
      tokenEndpoint: this.authConfigService.getTokenEndpoint(),
      loginUrl: this.authConfigService.getLoginUrl(),
      clientId: this.authConfigService.getClientId(),
      dummyClientSecret: this.authConfigService.getClientSecret(),
      revocationEndpoint: this.authConfigService.getRevokeEndpoint(),
      logoutUrl: this.authConfigService.getLogoutUrl(),
      userinfoEndpoint: this.authConfigService.getUserinfoEndpoint(),
      issuer: this.authConfigService.getOAuthLibConfig()?.issuer ?? this.authConfigService.getBaseUrl(),
      redirectUri: this.authConfigService.getOAuthLibConfig()?.redirectUri ?? (!isSSR ? (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.winRef.nativeWindow.location.origin
      ) : "")
    }, this.authConfigService.getOAuthLibConfig()));
  }
  changeClientWhenInitialize(clientId) {
    const isSSR = !this.winRef.isBrowser();
    this.oAuthService.configure(__spreadValues({
      tokenEndpoint: this.authConfigService.getTokenEndpoint(),
      loginUrl: this.authConfigService.getLoginUrl(),
      clientId,
      dummyClientSecret: this.authConfigService.getClientSecret(),
      revocationEndpoint: this.authConfigService.getRevokeEndpoint(),
      logoutUrl: this.authConfigService.getLogoutUrl(),
      userinfoEndpoint: this.authConfigService.getUserinfoEndpoint(),
      issuer: this.authConfigService.getOAuthLibConfig()?.issuer ?? this.authConfigService.getBaseUrl(),
      redirectUri: this.authConfigService.getOAuthLibConfig()?.redirectUri ?? (!isSSR ? (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.winRef.nativeWindow.location.origin
      ) : "")
    }, this.authConfigService.getOAuthLibConfig()));
  }
  /**
   * Authorize with ResourceOwnerPasswordFlow.
   *
   * @param userId
   * @param password
   *
   * @return token response from the lib
   */
  authorizeWithPasswordFlow(userId, password) {
    return this.oAuthService.fetchTokenUsingPasswordFlow(userId, password);
  }
  /**
   * Refresh access_token.
   */
  refreshToken() {
    this.oAuthService.refreshToken();
  }
  /**
   * Revoke access tokens and clear tokens in lib state.
   */
  revokeAndLogout() {
    return new Promise((resolve) => {
      this.oAuthService.revokeTokenAndLogout(true).catch(() => {
        this.oAuthService.logOut(true);
      }).finally(() => {
        resolve();
      });
    });
  }
  /**
   * Clear tokens in library state (no revocation).
   */
  logout() {
    this.oAuthService.logOut(true);
  }
  /**
   * Returns Open Id token. Might be empty, when it was not requested with the `responseType` config.
   *
   * @return id token
   */
  getIdToken() {
    return this.oAuthService.getIdToken();
  }
  /**
   * Initialize Implicit Flow or Authorization Code flows with the redirect to OAuth login url.
   */
  initLoginFlow() {
    if (!this.featureConfigService.isEnabled("authorizationCodeFlowByDefault")) {
      if (this.winRef.localStorage) {
        this.winRef.localStorage?.setItem(OAUTH_REDIRECT_FLOW_KEY, "true");
      }
    }
    return this.oAuthService.initLoginFlow();
  }
  /**
   * Tries to login user based on `code` or `token` present in the url.
   *
   * @param result The result returned by `OAuthService.tryLogin()`.
   *
   * @param tokenReceived Whether the event 'token_received' is emitted during `OAuthService.tryLogin()`.
   * We can use this identify that we have returned from an external authorization page to Spartacus).
   * In cases where we don't receive this event, the token has been obtained from storage.
   */
  tryLogin() {
    return new Promise((resolve, reject) => {
      let tokenReceivedEvent;
      const subscription = this.events$.pipe(filter((event) => event.type === "token_received"), take(1)).subscribe((event) => tokenReceivedEvent = event);
      this.oAuthService.tryLogin({
        // We don't load discovery document, because it doesn't contain revoke endpoint information
        disableOAuth2StateCheck: true
      }).then((result) => {
        resolve({
          result,
          tokenReceived: !!tokenReceivedEvent
        });
      }).catch((error) => {
        reject(error);
      }).finally(() => {
        subscription.unsubscribe();
      });
    });
  }
  refreshAuthConfig() {
    this.initialize();
  }
  changeAuthConfigClientId(clientId) {
    this.changeClientWhenInitialize(clientId);
  }
  static {
    this.ɵfac = function OAuthLibWrapperService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OAuthLibWrapperService)(ɵɵinject(OAuthService), ɵɵinject(AuthConfigService), ɵɵinject(PLATFORM_ID), ɵɵinject(WindowRef));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OAuthLibWrapperService,
      factory: _OAuthLibWrapperService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OAuthLibWrapperService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OAuthService
  }, {
    type: AuthConfigService
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: WindowRef
  }], null);
})();
var CHANGE_NEXT_PAGE_CONTEXT = "[Router] Change Next PageContext";
var ChangeNextPageContext = class {
  constructor(payload) {
    this.payload = payload;
    this.type = CHANGE_NEXT_PAGE_CONTEXT;
  }
};
var routingGroup_actions = Object.freeze({
  __proto__: null,
  CHANGE_NEXT_PAGE_CONTEXT,
  ChangeNextPageContext
});
var ROUTING_FEATURE = "router";
var getRouterFeatureState = createFeatureSelector(ROUTING_FEATURE);
var getRouterState = createSelector(getRouterFeatureState, (state) => state.router);
var getSemanticRoute = createSelector(getRouterState, (routingState) => routingState.state && routingState.state.semanticRoute || "");
var getPageContext = createSelector(getRouterState, (routingState) => routingState.state && routingState.state.context || {
  id: ""
});
var getNextPageContext = createSelector(getRouterState, (routingState) => routingState.nextState && routingState.nextState.context);
var isNavigating = createSelector(getNextPageContext, (context) => !!context);
var routingGroup_selectors = Object.freeze({
  __proto__: null,
  getNextPageContext,
  getPageContext,
  getRouterFeatureState,
  getRouterState,
  getSemanticRoute,
  isNavigating
});
var isParam = (segment) => segment.startsWith(":");
var getParamName = (segment) => segment.slice(1);
var RouteLoadStrategy;
(function(RouteLoadStrategy2) {
  RouteLoadStrategy2["ONCE"] = "once";
  RouteLoadStrategy2["ALWAYS"] = "always";
})(RouteLoadStrategy || (RouteLoadStrategy = {}));
var RoutingConfig = class _RoutingConfig {
  static {
    this.ɵfac = function RoutingConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoutingConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RoutingConfig,
      factory: function RoutingConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _RoutingConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutingConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var RoutingConfigService = class _RoutingConfigService {
  constructor(config) {
    this.config = config;
    this.logger = inject(LoggerService);
  }
  /**
   * Returns the route config for the given route name.
   */
  getRouteConfig(routeName) {
    const routeConfig = this.config?.routing?.routes;
    const result = routeConfig && routeConfig[routeName];
    if (!routeConfig || result === void 0) {
      this.warn(`No path was configured for the named route '${routeName}'!`);
    }
    return result;
  }
  warn(...args) {
    if (isDevMode()) {
      this.logger.warn(...args);
    }
  }
  /**
   * Returns the configured route loading strategy.
   */
  getLoadStrategy() {
    return this.config?.routing?.loadStrategy ?? RouteLoadStrategy.ALWAYS;
  }
  /**
   * Returns the route name of the configured path.
   *
   * For example, when the config is:
   * ```
   * routing: {
   *   routes: {
   *      addressBook: { paths: ['my-account/address-book'] }
   *   }
   * }
   * ```
   *
   * the `getRouteName('my-account/address-book')` returns `'addressBook'`.
   */
  getRouteName(path) {
    if (!this.routeNamesByPath) {
      this.initRouteNamesByPath();
    }
    return this.routeNamesByPath[path];
  }
  /**
   * Initializes the property `routeNamesByPath`.
   *
   * The original config allows for reading configured path by the route name.
   * But this method builds up a structure with a 'reversed config'
   * to read quickly the route name by the path.
   */
  initRouteNamesByPath() {
    this.routeNamesByPath = {};
    for (const [routeName, routeConfig] of Object.entries(this.config?.routing?.routes ?? {})) {
      routeConfig?.paths?.forEach((path) => {
        if (isDevMode() && this.routeNamesByPath[path]) {
          this.logger.error(`The same path '${path}' is configured for two different route names: '${this.routeNamesByPath[path]}' and '${routeName}`);
        }
        this.routeNamesByPath[path] = routeName;
      });
    }
  }
  static {
    this.ɵfac = function RoutingConfigService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoutingConfigService)(ɵɵinject(RoutingConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RoutingConfigService,
      factory: _RoutingConfigService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutingConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingConfig
  }], null);
})();
var UrlParsingService = class _UrlParsingService {
  constructor(router) {
    this.router = router;
  }
  getPrimarySegments(url) {
    const urlTree = this.router.parseUrl(url);
    return this._getPrimarySegmentsFromUrlTree(urlTree.root);
  }
  _getPrimarySegmentsFromUrlTree(tree) {
    const segments = tree.segments.map((s) => s.path);
    const childrenSegments = tree.children[PRIMARY_OUTLET] ? this._getPrimarySegmentsFromUrlTree(tree.children[PRIMARY_OUTLET]) : [];
    return segments.concat(childrenSegments);
  }
  /**
   * Tells whether the given url matches the given path.
   *
   * @param urlSegments   string or array of url segments. When it's a string, the preceding
   *                      site-context params are ignored (i.e. '/electronics-spa/en/USD/...')
   *
   * @param pathSegments  string or array of path segments. Dynamic params are allowed in the
   *                      path shape, i.e. `/url/:param1/with/:param2`.
   */
  matchPath(urlSegments, pathSegments) {
    urlSegments = Array.isArray(urlSegments) ? urlSegments : this.getPrimarySegments(urlSegments);
    pathSegments = Array.isArray(pathSegments) ? pathSegments : this.getPrimarySegments(pathSegments);
    if (urlSegments.length !== pathSegments.length) {
      return false;
    }
    for (let i = 0; i < pathSegments.length; i++) {
      const pathSeg = pathSegments[i];
      const urlSeg = urlSegments[i];
      if (!isParam(pathSeg) && pathSeg !== urlSeg) {
        return false;
      }
    }
    return true;
  }
  static {
    this.ɵfac = function UrlParsingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UrlParsingService)(ɵɵinject(Router));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UrlParsingService,
      factory: _UrlParsingService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlParsingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Router
  }], null);
})();
var SemanticPathService = class _SemanticPathService {
  constructor(routingConfigService, urlParser) {
    this.routingConfigService = routingConfigService;
    this.urlParser = urlParser;
    this.ROOT_URL = ["/"];
  }
  /**
   * Returns the first path alias configured for a given route name. It adds `/` at the beginning.
   */
  get(routeName) {
    const routeConfig = this.routingConfigService.getRouteConfig(routeName);
    return routeConfig && Array.isArray(routeConfig.paths) ? "/" + routeConfig.paths[0] : void 0;
  }
  /**
   * Transforms the array of url commands. Each command can be:
   * a) string - will be left untouched
   * b) object { cxRoute: <route name> } - will be replaced with semantic path
   * c) object { cxRoute: <route name>, params: { ... } } - same as above, but with passed params
   *
   * If the first command is the object with the `cxRoute` property, returns an absolute url (with the first element of the array `'/'`)
   */
  transform(commands) {
    if (!Array.isArray(commands)) {
      commands = [commands];
    }
    const result = [];
    for (const command of commands) {
      if (!this.isRouteCommand(command)) {
        result.push(command);
      } else {
        const partialResult = this.generateUrlPart(command);
        if (partialResult === null) {
          return this.ROOT_URL;
        }
        result.push(...partialResult);
      }
    }
    if (this.shouldOutputAbsolute(commands)) {
      result.unshift("/");
    }
    return result;
  }
  isRouteCommand(command) {
    return command && Boolean(command.cxRoute);
  }
  shouldOutputAbsolute(commands) {
    return this.isRouteCommand(commands[0]);
  }
  generateUrlPart(command) {
    this.standarizeRouteCommand(command);
    if (!command.cxRoute) {
      return null;
    }
    const routeConfig = this.routingConfigService.getRouteConfig(command.cxRoute);
    if (!routeConfig || !routeConfig.paths) {
      return null;
    }
    const path = this.findPathWithFillableParams(routeConfig, command.params);
    if (!path) {
      return null;
    }
    const result = this.provideParamsValues(path, command.params, routeConfig.paramsMapping);
    return result;
  }
  standarizeRouteCommand(command) {
    command.params = command.params || {};
  }
  provideParamsValues(path, params, paramsMapping) {
    return this.urlParser.getPrimarySegments(path).map((segment) => {
      if (isParam(segment)) {
        const paramName = getParamName(segment);
        const mappedParamName = this.getMappedParamName(paramName, paramsMapping);
        return params?.[mappedParamName];
      }
      return segment;
    });
  }
  findPathWithFillableParams(routeConfig, params) {
    const foundPath = routeConfig.paths?.find((path) => this.getParams(path).every((paramName) => {
      const mappedParamName = this.getMappedParamName(paramName, routeConfig.paramsMapping);
      return params?.[mappedParamName] !== void 0;
    }));
    if (foundPath === void 0 || foundPath === null) {
      return null;
    }
    return foundPath;
  }
  getParams(path) {
    return this.urlParser.getPrimarySegments(path).filter(isParam).map(getParamName);
  }
  getMappedParamName(paramName, paramsMapping) {
    if (paramsMapping) {
      return paramsMapping[paramName] || paramName;
    }
    return paramName;
  }
  static {
    this.ɵfac = function SemanticPathService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SemanticPathService)(ɵɵinject(RoutingConfigService), ɵɵinject(UrlParsingService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SemanticPathService,
      factory: _SemanticPathService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SemanticPathService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingConfigService
  }, {
    type: UrlParsingService
  }], null);
})();
var ActivatedRoutesService = class _ActivatedRoutesService {
  constructor(router) {
    this.router = router;
    this.routes$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      // eslint-disable-next-line import/no-deprecated
      startWith(void 0),
      // emit value for consumer who subscribed lately after NavigationEnd event
      map(() => {
        let route = this.router.routerState.snapshot.root;
        const routes = [route];
        while (route = route.firstChild) {
          routes.push(route);
        }
        return routes;
      }),
      shareReplay({
        bufferSize: 1,
        refCount: true
      })
    );
  }
  static {
    this.ɵfac = function ActivatedRoutesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActivatedRoutesService)(ɵɵinject(Router));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ActivatedRoutesService,
      factory: _ActivatedRoutesService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActivatedRoutesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Router
  }], null);
})();
var RoutingParamsService = class _RoutingParamsService {
  constructor(router, activatedRoutesService) {
    this.router = router;
    this.activatedRoutesService = activatedRoutesService;
    this.params$ = this.activatedRoutesService.routes$.pipe(map((routes) => this.findAllParam(routes)), shareReplay({
      refCount: true,
      bufferSize: 1
    }));
  }
  /**
   * Get the list of all parameters of the full route. This includes
   * active child routes.
   */
  getParams() {
    return this.params$;
  }
  findAllParam(routes) {
    return Object.assign({}, ...routes.map((route) => route.params));
  }
  static {
    this.ɵfac = function RoutingParamsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoutingParamsService)(ɵɵinject(Router), ɵɵinject(ActivatedRoutesService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RoutingParamsService,
      factory: _RoutingParamsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutingParamsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoutesService
  }], null);
})();
var RoutingService = class _RoutingService {
  constructor(store, winRef, semanticPathService, routingParamsService, router, location) {
    this.store = store;
    this.winRef = winRef;
    this.semanticPathService = semanticPathService;
    this.routingParamsService = routingParamsService;
    this.router = router;
    this.location = location;
  }
  /**
   * Get the list of all parameters of the full route. This includes
   * active child routes.
   */
  getParams() {
    return this.routingParamsService.getParams();
  }
  /**
   * Get the current router state
   */
  getRouterState() {
    return this.store.pipe(select(getRouterState));
  }
  /**
   * Get the `PageContext` from the state
   */
  getPageContext() {
    return this.store.pipe(select(getPageContext));
  }
  /**
   * Get the next `PageContext` from the state
   */
  getNextPageContext() {
    return this.store.pipe(select(getNextPageContext));
  }
  /**
   * Allow to change next page context for the ongoing navigation
   *
   * @param pageContext
   */
  changeNextPageContext(pageContext) {
    this.store.dispatch(new ChangeNextPageContext(pageContext));
  }
  /**
   * Get the `isNavigating` info from the state
   */
  isNavigating() {
    return this.store.pipe(select(isNavigating));
  }
  /**
   * Navigation with a new state into history
   * @param commands: url commands
   * @param extras: Represents the extra options used during navigation.
   *
   * @returns Promise that resolves to `true` when navigation succeeds,
   *          to `false` when navigation fails, or is rejected on error.
   */
  go(commands, extras) {
    const path = this.semanticPathService.transform(commands);
    return this.navigate(path, extras);
  }
  /**
   * Resolves the relative url for the given `UrlCommands` and `NavigationExtras`.
   *
   * The absolute url can be resolved using `getFullUrl()`.
   */
  getUrl(commands, extras) {
    let url = this.router.serializeUrl(this.router.createUrlTree(this.semanticPathService.transform(commands), extras));
    if (!url.startsWith("/")) {
      url = `/${url}`;
    }
    return url;
  }
  /**
   * Returns the absolute url for the given `UrlCommands` and `NavigationExtras`.
   *
   * The absolute url uses the origin of the current location.
   */
  getFullUrl(commands, extras) {
    return `${this.winRef.location.origin}${this.getUrl(commands, extras)}`;
  }
  /**
   * Navigation using absolute route path
   * @param url
   * @param extras: Represents the extra options used during navigation.
   *
   * @returns Promise that resolves to `true` when navigation succeeds,
   *          to `false` when navigation fails, or is rejected on error.
   */
  goByUrl(url, extras) {
    return this.router.navigateByUrl(url, extras);
  }
  /**
   * Navigating back
   */
  back() {
    const isLastPageInApp = this.winRef.nativeWindow && this.winRef.document.referrer.includes(this.winRef.nativeWindow.location.origin);
    if (isLastPageInApp) {
      this.location.back();
      return;
    }
    this.go(["/"]);
    return;
  }
  /**
   * Navigating forward
   */
  forward() {
    this.location.forward();
  }
  /**
   * Navigation with a new state into history
   * @param path
   * @param extras: Represents the extra options used during navigation.
   *
   * @returns Promise that resolves to `true` when navigation succeeds,
   *          to `false` when navigation fails, or is rejected on error.
   */
  navigate(path, extras) {
    return this.router.navigate(path, extras);
  }
  static {
    this.ɵfac = function RoutingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoutingService)(ɵɵinject(Store), ɵɵinject(WindowRef), ɵɵinject(SemanticPathService), ɵɵinject(RoutingParamsService), ɵɵinject(Router), ɵɵinject(Location));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RoutingService,
      factory: _RoutingService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: WindowRef
  }, {
    type: SemanticPathService
  }, {
    type: RoutingParamsService
  }, {
    type: Router
  }, {
    type: Location
  }], null);
})();
var AuthFlowRoutesService = class _AuthFlowRoutesService {
  constructor(config, urlParsingService) {
    this.config = config;
    this.urlParsingService = urlParsingService;
  }
  /**
   * List of paths that are part user auth flow
   */
  get authFlowPaths() {
    if (!this._authFlowPaths) {
      this._authFlowPaths = Object.values(this.config?.routing?.routes || {}).reduce((acc, routeConfig) => routeConfig.authFlow === true && routeConfig.paths?.length ? acc.concat(routeConfig?.paths) : acc, []);
    }
    return this._authFlowPaths;
  }
  /**
   * Tells whether the given URL is a part of the user auth flow
   */
  isAuthFlow(url) {
    return this.authFlowPaths.some((path) => this.urlParsingService.matchPath(url, path));
  }
  static {
    this.ɵfac = function AuthFlowRoutesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthFlowRoutesService)(ɵɵinject(RoutingConfig), ɵɵinject(UrlParsingService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AuthFlowRoutesService,
      factory: _AuthFlowRoutesService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthFlowRoutesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingConfig
  }, {
    type: UrlParsingService
  }], null);
})();
var AuthRedirectService = class _AuthRedirectService {
  /**
   * This service is responsible for remembering the last page before the authentication. "The last page" can be:
   * 1. Just the previously opened page; or
   * 2. The page that we just tried to open, but AuthGuard cancelled it
   *
   * Then, after successful authentication it allows for redirecting to that remembered page via the `redirect()` method.
   *
   * For example:
   * 1. The user opens the product page, then clicks /login link and signs in
   *    -> Then we should redirect to the product page; or
   * 2. The user opens the product page, then he clicks /my-account link,
   *    but is automatically redirected to the login page by the AuthGuard, and he signs in
   *    -> Then we should redirect to the my-account page, not the product page
   */
  constructor(routing, router, authRedirectStorageService, authFlowRoutesService) {
    this.routing = routing;
    this.router = router;
    this.authRedirectStorageService = authRedirectStorageService;
    this.authFlowRoutesService = authFlowRoutesService;
    this.init();
  }
  init() {
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setRedirectUrl(event.urlAfterRedirects);
      }
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  /**
   * Redirect to saved url (homepage if nothing is saved).
   */
  redirect() {
    this.authRedirectStorageService.getRedirectUrl().pipe(take(1)).subscribe((redirectUrl) => {
      if (redirectUrl === void 0) {
        this.routing.go("/");
      } else {
        this.routing.goByUrl(redirectUrl);
      }
      this.clearRedirectUrl();
    });
  }
  /**
   * Saves the url of the current navigation as the redirect url, unless
   * the url is a part of the user login flow.
   */
  saveCurrentNavigationUrl() {
    const navigation = this.router.getCurrentNavigation();
    if (!navigation?.finalUrl) {
      return;
    }
    const url = this.router.serializeUrl(navigation.finalUrl);
    this.setRedirectUrl(url);
  }
  /**
   * Save the url as the redirect url, unless it's a part of the user login flow.
   */
  setRedirectUrl(url) {
    if (!this.authFlowRoutesService.isAuthFlow(url)) {
      this.authRedirectStorageService.setRedirectUrl(url);
    }
  }
  /**
   * Sets the redirect URL to undefined.
   */
  clearRedirectUrl() {
    this.authRedirectStorageService.setRedirectUrl(void 0);
  }
  static {
    this.ɵfac = function AuthRedirectService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthRedirectService)(ɵɵinject(RoutingService), ɵɵinject(Router), ɵɵinject(AuthRedirectStorageService), ɵɵinject(AuthFlowRoutesService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AuthRedirectService,
      factory: _AuthRedirectService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthRedirectService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: Router
  }, {
    type: AuthRedirectStorageService
  }, {
    type: AuthFlowRoutesService
  }], null);
})();
var AuthMultisiteIsolationService = class _AuthMultisiteIsolationService {
  constructor(baseSiteService) {
    this.baseSiteService = baseSiteService;
    this.MULTISITE_SEPARATOR = "|";
  }
  /**
   * When isolation is turned on, a customer who registers for baseSiteA
   * can only log into baseSiteA, not baseSiteB.
   * To login into baseSiteB customer have to use the same e-mail and register an account
   * on baseSiteB.
   *
   * The strategy how to handle isolation is to use an additional decorator
   * passed as a suffix to the uid field.
   *
   * Example uid value for baseSiteA will be email@example.com|baseSiteA
   */
  getBaseSiteDecorator() {
    return this.baseSiteService.get().pipe(take(1), map((baseSite) => Boolean(baseSite?.isolated) ? this.MULTISITE_SEPARATOR + baseSite?.uid : ""));
  }
  /**
   * Method returns concatenated `userId` with the decorator suffix.
   *
   * @param userId The `userId` for given user
   */
  decorateUserId(userId) {
    return this.getBaseSiteDecorator().pipe(map((decorator) => userId + decorator));
  }
  static {
    this.ɵfac = function AuthMultisiteIsolationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthMultisiteIsolationService)(ɵɵinject(BaseSiteService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AuthMultisiteIsolationService,
      factory: _AuthMultisiteIsolationService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthMultisiteIsolationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: BaseSiteService
  }], null);
})();
var AuthService = class _AuthService {
  constructor(store, userIdService, oAuthLibWrapperService, authStorageService, authRedirectService, routingService, authMultisiteIsolationService) {
    this.store = store;
    this.userIdService = userIdService;
    this.oAuthLibWrapperService = oAuthLibWrapperService;
    this.authStorageService = authStorageService;
    this.authRedirectService = authRedirectService;
    this.routingService = routingService;
    this.authMultisiteIsolationService = authMultisiteIsolationService;
    this.crossSiteRequestForgeryService = inject(CrossSiteRequestForgeryService);
    this.refreshInProgress$ = new BehaviorSubject(false);
    this.logoutInProgress$ = new BehaviorSubject(false);
    this.location = inject(Location);
    this.winRef = inject(WindowRef);
    this.csrfToken$ = this.crossSiteRequestForgeryService.getCsrfToken().pipe(shareReplay({
      bufferSize: 1,
      refCount: true
    }));
    this.featureConfigService = inject(FeatureConfigService);
    this.featureToggles = inject(FeatureToggles);
  }
  /**
   * Check params in url and if there is an code/token then try to login with those.
   */
  checkOAuthParamsInUrl() {
    return __async(this, null, function* () {
      try {
        const loginResult = yield this.oAuthLibWrapperService.tryLogin();
        const token = this.authStorageService.getItem("access_token");
        const isEmulated = yield firstValueFrom(this.userIdService.isEmulated());
        if (loginResult.result && token && !isEmulated) {
          this.userIdService.setUserId(OCC_USER_ID_CURRENT);
          if (!this.featureConfigService.isEnabled("dispatchLoginActionOnlyWhenTokenReceived")) {
            this.store.dispatch(new Login());
          }
          if (loginResult.tokenReceived) {
            if (this.featureConfigService.isEnabled("dispatchLoginActionOnlyWhenTokenReceived")) {
              this.store.dispatch(new Login());
            }
            this.authRedirectService.redirect();
          }
        }
      } catch {
      }
    });
  }
  /**
   * Initialize Implicit/Authorization Code flow by redirecting to OAuth server.
   */
  loginWithRedirect() {
    this.oAuthLibWrapperService.initLoginFlow();
    return true;
  }
  /**
   * Loads a new user token with Resource Owner Password Flow.
   * @param userId
   * @param password
   */
  loginWithCredentials(userId, password) {
    return __async(this, null, function* () {
      let uid = userId;
      if (this.authMultisiteIsolationService) {
        uid = yield lastValueFrom(this.authMultisiteIsolationService.decorateUserId(uid));
      }
      try {
        yield this.oAuthLibWrapperService.authorizeWithPasswordFlow(uid, password);
        this.userIdService.setUserId(OCC_USER_ID_CURRENT);
        this.store.dispatch(new Login());
        this.authRedirectService.redirect();
      } catch {
      }
    });
  }
  /**
   * Retrieves the CSRF (Cross-Site Request Forgery) token for the custom login form.
   *
   * @return {string} The CSRF token used for preventing cross-site request forgery attacks.
   */
  getCsrfToken() {
    return this.csrfToken$;
  }
  /**
   * Loads a new user token with otp tokenCode and otp tokenId.
   * @param tokenId
   * @param tokenCode
   */
  otpLoginWithCredentials(tokenId, tokenCode) {
    return __async(this, null, function* () {
      try {
        yield this.oAuthLibWrapperService.authorizeWithPasswordFlow(tokenId, tokenCode);
        this.userIdService.setUserId(OCC_USER_ID_CURRENT);
        this.store.dispatch(new Login());
        this.authRedirectService.redirect();
      } catch {
      }
    });
  }
  /**
   * Revokes tokens and clears state for logged user (tokens, userId).
   * To perform logout it is best to use `logout` method. Use this method with caution.
   */
  coreLogout() {
    this.setLogoutProgress(true);
    this.userIdService.clearUserId();
    return new Promise((resolve) => {
      this.oAuthLibWrapperService.revokeAndLogout().finally(() => {
        this.store.dispatch(new Logout());
        this.setLogoutProgress(false);
        resolve();
      });
    });
  }
  /**
   * Returns `true` if the user is logged in; and `false` if the user is anonymous.
   */
  isUserLoggedIn() {
    return this.authStorageService.getToken().pipe(map((userToken) => Boolean(userToken?.access_token)), distinctUntilChanged());
  }
  /**
   * Logout a storefront customer. It will initialize logout procedure by redirecting to the `logout` endpoint.
   */
  logout() {
    this.routingService.go({
      cxRoute: "logout"
    });
  }
  /**
   * Start or stop the refresh process
   */
  setRefreshProgress(progress) {
    this.refreshInProgress$.next(progress);
  }
  /**
   * Start or stop the logout process
   */
  setLogoutProgress(progress) {
    this.logoutInProgress$.next(progress);
  }
  /**
   * Indicates whether the ASM module is enabled.
   */
  isAsmEnabled() {
    if (this.isLaunched() && !this.isUsedBefore() && this.winRef.localStorage) {
      this.winRef.localStorage.setItem("asm_enabled", "true");
    }
    return this.isLaunched() || this.isUsedBefore() || this.isEmulateInURL();
  }
  /**
   * Indicates whether ASM is launched through the URL,
   * using the asm flag in the URL.
   */
  isLaunched() {
    const params = this.location.path().split("?")[1];
    return !!params && params.split("&").includes("asm=true");
  }
  /**
   * check whether try to emulate customer from deeplink
   * */
  isEmulateInURL() {
    return this.location.path().indexOf("assisted-service/emulate?") > 0;
  }
  /**
   * Evaluates local storage where we persist the usage of ASM.
   */
  isUsedBefore() {
    if (this.winRef.localStorage) {
      return this.winRef.localStorage.getItem("asm_enabled") === "true";
    } else {
      return false;
    }
  }
  refreshAuthConfig() {
    if (this.usingASMClient()) {
      this.oAuthLibWrapperService.changeAuthConfigClientId("asm_client");
    } else {
      this.oAuthLibWrapperService.refreshAuthConfig();
    }
  }
  usingASMClient() {
    return !!this.featureToggles.authorizationCodeFlowByDefault && this.isAsmEnabled();
  }
  static {
    this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)(ɵɵinject(Store), ɵɵinject(UserIdService), ɵɵinject(OAuthLibWrapperService), ɵɵinject(AuthStorageService), ɵɵinject(AuthRedirectService), ɵɵinject(RoutingService), ɵɵinject(AuthMultisiteIsolationService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AuthService,
      factory: _AuthService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: UserIdService
  }, {
    type: OAuthLibWrapperService
  }, {
    type: AuthStorageService
  }, {
    type: AuthRedirectService
  }, {
    type: RoutingService
  }, {
    type: AuthMultisiteIsolationService
  }], null);
})();
var AnonymousConsentsService = class _AnonymousConsentsService {
  constructor(store, authService) {
    this.store = store;
    this.authService = authService;
  }
  /**
   * Retrieves the anonymous consent templates.
   */
  loadTemplates() {
    this.store.dispatch(new LoadAnonymousConsentTemplates());
  }
  /**
   * Conditionally triggers the load of the anonymous consent templates if:
   *   - `loadIfMissing` parameter is set to `true`
   *   - the `templates` in the store are `undefined`
   *
   * Otherwise it just returns the value from the store.
   *
   * @param loadIfMissing setting to `true` will trigger the load of the templates if the currently stored templates are `undefined`
   */
  getTemplates(loadIfMissing = false) {
    return iif(() => loadIfMissing, this.store.pipe(select(getAnonymousConsentTemplatesValue), withLatestFrom(this.getLoadTemplatesLoading()), filter(([_templates, loading]) => !loading), tap(([templates, _loading]) => {
      if (!Boolean(templates)) {
        this.loadTemplates();
      }
    }), filter(([templates, _loading]) => Boolean(templates)), map(([templates, _loading]) => templates)), this.store.pipe(select(getAnonymousConsentTemplatesValue)));
  }
  /**
   * Returns the anonymous consent templates with the given template code.
   * @param templateCode a template code by which to filter anonymous consent templates.
   */
  getTemplate(templateCode) {
    return this.store.pipe(select(getAnonymousConsentTemplate(templateCode)));
  }
  /**
   * Returns an indicator for the loading status for the anonymous consent templates.
   */
  getLoadTemplatesLoading() {
    return this.store.pipe(select(getAnonymousConsentTemplatesLoading));
  }
  /**
   * Returns an indicator for the success status for the anonymous consent templates.
   */
  getLoadTemplatesSuccess() {
    return this.store.pipe(select(getAnonymousConsentTemplatesSuccess));
  }
  /**
   * Returns an indicator for the error status for the anonymous consent templates.
   */
  getLoadTemplatesError() {
    return this.store.pipe(select(getAnonymousConsentTemplatesError));
  }
  /**
   * Resets the loading, success and error indicators for the anonymous consent templates.
   */
  resetLoadTemplatesState() {
    this.store.dispatch(new ResetLoadAnonymousConsentTemplates());
  }
  /**
   * Returns all the anonymous consents.
   */
  getConsents() {
    return this.store.pipe(select(getAnonymousConsents));
  }
  /**
   * Puts the provided anonymous consents into the store.
   */
  setConsents(consents) {
    return this.store.dispatch(new SetAnonymousConsents(consents));
  }
  /**
   * Returns the anonymous consent for the given template ID.
   *
   * As a side-effect, the method will call `getTemplates(true)` to load the templates if those are not present.
   *
   * @param templateId a template ID by which to filter anonymous consent templates.
   */
  getConsent(templateId) {
    return this.authService.isUserLoggedIn().pipe(filter((authenticated) => !authenticated), tap(() => this.getTemplates(true)), switchMap(() => this.store.pipe(select(getAnonymousConsentByTemplateCode(templateId)))));
  }
  /**
   * Give a consent for the given `templateCode`
   * @param templateCode for which to give the consent
   */
  giveConsent(templateCode) {
    this.store.dispatch(new GiveAnonymousConsent(templateCode));
  }
  /**
   * Sets all the anonymous consents' state to given.
   */
  giveAllConsents() {
    return this.getTemplates(true).pipe(tap((templates) => templates.forEach((template) => {
      if (template.id) {
        this.giveConsent(template.id);
      }
    })));
  }
  /**
   * Returns `true` if the provided `consent` is given.
   * @param consent a consent to test
   */
  isConsentGiven(consent) {
    return (consent && consent.consentState === ANONYMOUS_CONSENT_STATUS.GIVEN) ?? false;
  }
  /**
   * Withdraw a consent for the given `templateCode`
   * @param templateCode for which to withdraw the consent
   */
  withdrawConsent(templateCode) {
    this.store.dispatch(new WithdrawAnonymousConsent(templateCode));
  }
  /**
   * Sets all the anonymous consents' state to withdrawn.
   */
  withdrawAllConsents() {
    return this.getTemplates(true).pipe(tap((templates) => templates.forEach((template) => {
      if (template.id) {
        this.withdrawConsent(template.id);
      }
    })));
  }
  /**
   * Returns `true` if the provided `consent` is withdrawn.
   * @param consent a consent to test
   */
  isConsentWithdrawn(consent) {
    return consent && consent.consentState === ANONYMOUS_CONSENT_STATUS.WITHDRAWN;
  }
  /**
   * Toggles the dismissed state of the anonymous consents banner.
   * @param dismissed the banner will be dismissed if `true` is passed, otherwise it will be visible.
   */
  toggleBannerDismissed(dismissed) {
    this.store.dispatch(new ToggleAnonymousConsentsBannerDissmissed(dismissed));
    if (dismissed) {
      this.toggleTemplatesUpdated(false);
    }
  }
  /**
   * Returns `true` if the banner was dismissed, `false` otherwise.
   */
  isBannerDismissed() {
    return this.store.pipe(select(getAnonymousConsentsBannerDismissed));
  }
  /**
   * Returns `true` if the consent templates were updated on the back-end.
   * If the templates are not present in the store, it triggers the load.
   */
  getTemplatesUpdated() {
    return this.getTemplates(true).pipe(switchMap(() => this.store.pipe(select(getAnonymousConsentTemplatesUpdate))));
  }
  /**
   * Toggles the `updated` slice of the state
   * @param updated
   */
  toggleTemplatesUpdated(updated) {
    this.store.dispatch(new ToggleAnonymousConsentTemplatesUpdated(updated));
  }
  /**
   * Returns `true` if either the banner is not dismissed or if the templates were updated on the back-end.
   * Otherwise, it returns `false`.
   */
  isBannerVisible() {
    return combineLatest([this.isBannerDismissed(), this.getTemplatesUpdated()]).pipe(tap(() => this.checkConsentVersions()), map(([dismissed, updated]) => !dismissed || updated));
  }
  /**
   * Dispatches an action to trigger the check
   * whether the anonymous consent version have been updated
   */
  checkConsentVersions() {
    this.store.dispatch(new AnonymousConsentCheckUpdatedVersions());
  }
  /**
   * Returns `true` if there's a mismatch in template versions between the provided `currentTemplates` and `newTemplates`
   * @param currentTemplates current templates to check
   * @param newTemplates new templates to check
   */
  detectUpdatedTemplates(currentTemplates, newTemplates) {
    if (newTemplates.length !== currentTemplates.length) {
      return true;
    }
    for (let i = 0; i < newTemplates.length; i++) {
      const newTemplate = newTemplates[i];
      const currentTemplate = currentTemplates[i];
      if (newTemplate.version !== currentTemplate.version) {
        return true;
      }
    }
    return false;
  }
  /**
   * Serializes using `JSON.stringify()` and encodes using `encodeURIComponent()` methods
   * @param consents to serialize and encode
   */
  serializeAndEncode(consents) {
    if (!consents) {
      return "";
    }
    const serialized = JSON.stringify(consents);
    const encoded = encodeURIComponent(serialized);
    return encoded;
  }
  /**
   * Decodes using `decodeURIComponent()` and deserializes using `JSON.parse()`
   * @param rawConsents to decode an deserialize
   */
  decodeAndDeserialize(rawConsents) {
    const decoded = decodeURIComponent(rawConsents);
    if (decoded.length > 0) {
      const unserialized = JSON.parse(decoded);
      return unserialized;
    }
    return [];
  }
  /**
   *
   * Compares the given `newConsents` and `previousConsents` and returns `true` if there are differences (the `newConsents` are updates).
   * Otherwise it returns `false`.
   *
   * @param newConsents new consents to compare
   * @param previousConsents old consents to compare
   */
  consentsUpdated(newConsents, previousConsents) {
    const newRawConsents = this.serializeAndEncode(newConsents);
    const previousRawConsents = this.serializeAndEncode(previousConsents);
    return newRawConsents !== previousRawConsents;
  }
  static {
    this.ɵfac = function AnonymousConsentsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnonymousConsentsService)(ɵɵinject(Store), ɵɵinject(AuthService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AnonymousConsentsService,
      factory: _AnonymousConsentsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnonymousConsentsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: AuthService
  }], null);
})();
function baseUrlConfigValidator(config) {
  if (typeof config?.authentication?.baseUrl === "undefined" && typeof config?.backend?.occ?.baseUrl === "undefined" && // Don't show warning when user tries to work around the issue.
  config?.authentication?.OAuthLibConfig?.requireHttps !== false) {
    return "Authentication might not work correctly without setting either authentication.baseUrl or backend.occ.baseUrl configuration option! Workaround: To support relative urls in angular-oauth2-oidc library you can try setting authentication.OAuthLibConfig.requireHttps to false.";
  }
}
var USE_AUTHORIZATION_CODE_FLOW_BY_DEFAULT = new InjectionToken("USE_AUTHORIZATION_CODE_FLOW_BY_DEFAULT", {
  factory: () => false,
  providedIn: "root"
});
var defaultAuthConfig = {
  authentication: {
    client_id: "mobile_android_public",
    tokenEndpoint: "/oauth/token",
    revokeEndpoint: "/oauth/revoke",
    loginUrl: "/oauth/authorize",
    OAuthLibConfig: {
      scope: "",
      customTokenParameters: ["token_type"],
      strictDiscoveryDocumentValidation: false,
      skipIssuerCheck: true,
      disablePKCE: false,
      oidc: false,
      clearHashAfterLogin: false,
      responseType: "code"
    },
    customLoginPage: {
      csrfEndpoint: "/csrf",
      loginFormEndpoint: "/login"
    }
  }
};
function defaultAuthConfigFactory() {
  const {
    authorizationCodeFlowByDefault
  } = inject(FeatureToggles);
  if (authorizationCodeFlowByDefault) {
    return defaultAuthConfig;
  } else {
    const config = {
      authentication: __spreadProps(__spreadValues({}, defaultAuthConfig.authentication), {
        client_id: "mobile_android",
        client_secret: "secret",
        sendAuthHeaderOnRevoke: true,
        useClientTokens: true,
        OAuthLibConfig: __spreadProps(__spreadValues({}, defaultAuthConfig.authentication?.OAuthLibConfig), {
          disablePKCE: true
        })
      })
    };
    delete config.authentication.OAuthLibConfig.responseType;
    delete config.authentication.customLoginPage;
    return config;
  }
}
var LogoutEvent = class extends CxEvent {
  static {
    this.type = "LogoutEvent";
  }
};
var LoginEvent = class extends CxEvent {
  static {
    this.type = "LoginEvent";
  }
};
var StateEventService = class _StateEventService {
  constructor(actionsSubject, eventService) {
    this.actionsSubject = actionsSubject;
    this.eventService = eventService;
  }
  /**
   * Registers an event source stream of specific events
   * mapped from a given action type.
   *
   * @param mapping mapping from action to event
   *
   * @returns a teardown function that unregisters the event source
   */
  register(mapping) {
    return this.eventService.register(mapping.event, this.getFromAction(mapping));
  }
  /**
   * Returns a stream of specific events mapped from a specific action.
   * @param mapping mapping from action to event
   */
  getFromAction(mapping) {
    return this.actionsSubject.pipe(ofType(...[].concat(mapping.action))).pipe(map((action) => this.createEvent(action, mapping.event, mapping.factory)));
  }
  /**
   * Creates an event instance for given class out from the action object.
   * Unless the `factory` parameter is given, the action's `payload` is used
   * as the argument for the event's constructor.
   *
   * @param action instance of an Action
   * @param mapping mapping from action to event
   * @param factory optional function getting an action instance and returning an event instance
   *
   * @returns instance of an Event
   */
  createEvent(action, eventType, factory) {
    return factory ? factory(action) : createFrom(eventType, action.payload ?? {});
  }
  static {
    this.ɵfac = function StateEventService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StateEventService)(ɵɵinject(ActionsSubject), ɵɵinject(EventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StateEventService,
      factory: _StateEventService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StateEventService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ActionsSubject
  }, {
    type: EventService
  }], null);
})();
var UserAuthEventBuilder = class _UserAuthEventBuilder {
  constructor(stateEventService, eventService, authService) {
    this.stateEventService = stateEventService;
    this.eventService = eventService;
    this.authService = authService;
    this.register();
  }
  /**
   * Registers user auth events
   */
  register() {
    this.registerLoginEvent();
    this.registerLogoutEvent();
  }
  /**
   * Register a login event
   */
  registerLoginEvent() {
    this.stateEventService.register({
      action: LOGIN,
      event: LoginEvent
    });
  }
  /**
   * Register a logout event
   */
  registerLogoutEvent() {
    this.eventService.register(LogoutEvent, this.buildLogoutEvent());
  }
  /**
   * Returns logout event stream
   */
  buildLogoutEvent() {
    return this.authService.isUserLoggedIn().pipe(pairwise(), filter(([prev, curr]) => prev && !curr), map(() => createFrom(LogoutEvent, {})));
  }
  static {
    this.ɵfac = function UserAuthEventBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAuthEventBuilder)(ɵɵinject(StateEventService), ɵɵinject(EventService), ɵɵinject(AuthService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserAuthEventBuilder,
      factory: _UserAuthEventBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAuthEventBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: StateEventService
  }, {
    type: EventService
  }, {
    type: AuthService
  }], null);
})();
var UserAuthEventModule = class _UserAuthEventModule {
  constructor(_userAuthEventBuilder) {
  }
  static {
    this.ɵfac = function UserAuthEventModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAuthEventModule)(ɵɵinject(UserAuthEventBuilder));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserAuthEventModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAuthEventModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: UserAuthEventBuilder
  }], null);
})();
var GlobalMessageType;
(function(GlobalMessageType2) {
  GlobalMessageType2["MSG_TYPE_CONFIRMATION"] = "[GlobalMessage] Confirmation";
  GlobalMessageType2["MSG_TYPE_ERROR"] = "[GlobalMessage] Error";
  GlobalMessageType2["MSG_TYPE_INFO"] = "[GlobalMessage] Information";
  GlobalMessageType2["MSG_TYPE_WARNING"] = "[GlobalMessage] Warning";
  GlobalMessageType2["MSG_TYPE_ASSISTIVE"] = "[GlobalMessage] Assistive";
})(GlobalMessageType || (GlobalMessageType = {}));
var ADD_MESSAGE = "[Global-message] Add a Message";
var REMOVE_MESSAGE = "[Global-message] Remove a Message";
var REMOVE_MESSAGES_BY_TYPE = "[Global-message] Remove messages by type";
var AddMessage = class {
  constructor(payload) {
    this.payload = payload;
    this.type = ADD_MESSAGE;
  }
};
var RemoveMessage = class {
  constructor(payload) {
    this.payload = payload;
    this.type = REMOVE_MESSAGE;
  }
};
var RemoveMessagesByType = class {
  constructor(payload) {
    this.payload = payload;
    this.type = REMOVE_MESSAGES_BY_TYPE;
  }
};
var globalMessageGroup_actions = Object.freeze({
  __proto__: null,
  ADD_MESSAGE,
  AddMessage,
  REMOVE_MESSAGE,
  REMOVE_MESSAGES_BY_TYPE,
  RemoveMessage,
  RemoveMessagesByType
});
var GLOBAL_MESSAGE_FEATURE = "global-message";
var getGlobalMessageState = createFeatureSelector(GLOBAL_MESSAGE_FEATURE);
var getGlobalMessageEntities = createSelector(getGlobalMessageState, (state) => state.entities);
var getGlobalMessageEntitiesByType = (type) => {
  return createSelector(getGlobalMessageEntities, (entities) => entities && entities[type]);
};
var getGlobalMessageCountByType = (type) => {
  return createSelector(getGlobalMessageEntitiesByType(type), (entities) => entities && entities.length);
};
var globalMessageGroup_selectors = Object.freeze({
  __proto__: null,
  getGlobalMessageCountByType,
  getGlobalMessageEntities,
  getGlobalMessageEntitiesByType,
  getGlobalMessageState
});
var GlobalMessageService = class _GlobalMessageService {
  constructor(store) {
    this.store = store;
  }
  /**
   * Get all global messages
   */
  get() {
    return this.store.pipe(select(getGlobalMessageEntities), filter(isNotUndefined));
  }
  /**
   * Add one message into store
   * @param text: string | Translatable
   * @param type: GlobalMessageType object
   * @param timeout: number
   */
  add(text, type, timeout3) {
    this.store.dispatch(new AddMessage({
      text: typeof text === "string" ? {
        raw: text
      } : text,
      type,
      timeout: timeout3
    }));
  }
  /**
   * Remove message(s) from store
   * @param type: GlobalMessageType
   * @param index:optional. Without it, messages will be removed by type; otherwise,
   * message will be removed from list by index.
   */
  remove(type, index) {
    this.store.dispatch(index !== void 0 ? new RemoveMessage({
      type,
      index
    }) : new RemoveMessagesByType(type));
  }
  static {
    this.ɵfac = function GlobalMessageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GlobalMessageService)(ɵɵinject(Store));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GlobalMessageService,
      factory: _GlobalMessageService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalMessageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }], null);
})();
var AuthHttpHeaderService = class _AuthHttpHeaderService {
  constructor(authService, authStorageService, oAuthLibWrapperService, routingService, occEndpoints, globalMessageService, authRedirectService) {
    this.authService = authService;
    this.authStorageService = authStorageService;
    this.oAuthLibWrapperService = oAuthLibWrapperService;
    this.routingService = routingService;
    this.occEndpoints = occEndpoints;
    this.globalMessageService = globalMessageService;
    this.authRedirectService = authRedirectService;
    this.refreshTokenTrigger$ = new Subject();
    this.token$ = this.authStorageService.getToken().pipe(map((token) => token?.access_token ? token : void 0));
    this.stopProgress$ = this.token$.pipe(
      // Keeps the previous and the new token
      pairwise(),
      tap(([oldToken, newToken]) => {
        if (oldToken?.access_token !== newToken?.access_token) {
          this.authService.setLogoutProgress(false);
          this.authService.setRefreshProgress(false);
        }
      })
    );
    this.refreshToken$ = this.refreshTokenTrigger$.pipe(withLatestFrom(this.authService.refreshInProgress$, this.authService.logoutInProgress$), filter(([, refreshInProgress, logoutInProgress]) => !refreshInProgress && !logoutInProgress), tap(([token]) => {
      if (token?.refresh_token) {
        this.oAuthLibWrapperService.refreshToken();
        this.authService.setRefreshProgress(true);
      } else {
        this.handleExpiredRefreshToken();
      }
    }));
    this.tokenToRetryRequest$ = using(() => this.refreshToken$.subscribe(), () => this.getStableToken()).pipe(shareReplay({
      refCount: true,
      bufferSize: 1
    }));
    this.subscriptions = new Subscription();
    this.subscriptions.add(this.stopProgress$.subscribe());
  }
  /**
   * Checks if request should be handled by this service (if it's OCC call).
   */
  shouldCatchError(request3) {
    return this.isOccUrl(request3.url);
  }
  shouldAddAuthorizationHeader(request3) {
    const hasAuthorizationHeader = !!this.getAuthorizationHeader(request3);
    const isOccUrl = this.isOccUrl(request3.url);
    return !hasAuthorizationHeader && isOccUrl;
  }
  /**
   * Adds `Authorization` header for OCC calls.
   */
  alterRequest(request3, token) {
    const hasAuthorizationHeader = !!this.getAuthorizationHeader(request3);
    const isBaseSitesRequest = this.isBaseSitesRequest(request3);
    const isOccUrl = this.isOccUrl(request3.url);
    if (!hasAuthorizationHeader && isOccUrl && !isBaseSitesRequest) {
      return request3.clone({
        setHeaders: __spreadValues({}, this.createAuthorizationHeader(token))
      });
    }
    return request3;
  }
  isOccUrl(url) {
    return url.includes(this.occEndpoints.getBaseUrl());
  }
  isBaseSitesRequest(request3) {
    return request3.url.includes(this.occEndpoints.getRawEndpointValue("baseSites"));
  }
  getAuthorizationHeader(request3) {
    const rawValue = request3.headers.get("Authorization");
    return rawValue;
  }
  createAuthorizationHeader(token) {
    if (token?.access_token) {
      return {
        Authorization: `${token.token_type || "Bearer"} ${token.access_token}`
      };
    }
    let currentToken;
    this.authStorageService.getToken().subscribe((authToken) => currentToken = authToken).unsubscribe();
    if (currentToken?.access_token) {
      return {
        Authorization: `${currentToken.token_type || "Bearer"} ${currentToken.access_token}`
      };
    }
    return {};
  }
  /**
   * Refreshes access_token and then retries the call with the new token.
   */
  handleExpiredAccessToken(request3, next, initialToken) {
    return this.getValidToken(initialToken).pipe(switchMap((token) => (
      // we break the stream with EMPTY when we don't have the token. This prevents sending the requests with `Authorization: bearer undefined` header
      token ? next.handle(this.createNewRequestWithNewToken(request3, token)) : EMPTY
    )));
  }
  /**
   * Logout user, redirected to login page and informs about expired session.
   */
  handleExpiredRefreshToken() {
    this.authRedirectService.saveCurrentNavigationUrl();
    this.authService.coreLogout().finally(() => {
      this.routingService.go({
        cxRoute: "login"
      });
      this.globalMessageService.add({
        key: "httpHandlers.sessionExpired"
      }, GlobalMessageType.MSG_TYPE_ERROR);
    });
  }
  /**
   * Emits the token or `undefined` only when the refresh or the logout processes are finished.
   */
  getStableToken() {
    return combineLatest([this.token$, this.authService.refreshInProgress$, this.authService.logoutInProgress$]).pipe(observeOn(queueScheduler), filter(([_, refreshInProgress, logoutInProgress]) => !refreshInProgress && !logoutInProgress), switchMap(() => this.token$));
  }
  /**
   * Returns a valid access token.
   * It will attempt to refresh it if the current one expired; emits after the new one is retrieved.
   */
  getValidToken(requestToken) {
    return defer(() => {
      let refreshTriggered = false;
      return this.tokenToRetryRequest$.pipe(tap((token) => {
        if (token?.access_token === requestToken?.access_token && !refreshTriggered) {
          this.refreshTokenTrigger$.next(token);
        }
        refreshTriggered = true;
      }), skipWhile((token) => token?.access_token === requestToken?.access_token), take(1));
    });
  }
  createNewRequestWithNewToken(request3, token) {
    request3 = request3.clone({
      setHeaders: {
        Authorization: `${token.token_type || "Bearer"} ${token.access_token}`
      }
    });
    return request3;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function AuthHttpHeaderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthHttpHeaderService)(ɵɵinject(AuthService), ɵɵinject(AuthStorageService), ɵɵinject(OAuthLibWrapperService), ɵɵinject(RoutingService), ɵɵinject(OccEndpointsService), ɵɵinject(GlobalMessageService), ɵɵinject(AuthRedirectService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AuthHttpHeaderService,
      factory: _AuthHttpHeaderService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthHttpHeaderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AuthService
  }, {
    type: AuthStorageService
  }, {
    type: OAuthLibWrapperService
  }, {
    type: RoutingService
  }, {
    type: OccEndpointsService
  }, {
    type: GlobalMessageService
  }, {
    type: AuthRedirectService
  }], null);
})();
var AuthInterceptor = class _AuthInterceptor {
  constructor(authHttpHeaderService, authConfigService) {
    this.authHttpHeaderService = authHttpHeaderService;
    this.authConfigService = authConfigService;
  }
  intercept(httpRequest, next) {
    const shouldCatchError = this.authHttpHeaderService.shouldCatchError(httpRequest);
    const shouldAddAuthorizationHeader = this.authHttpHeaderService.shouldAddAuthorizationHeader(httpRequest);
    const token$ = shouldAddAuthorizationHeader ? (
      // emits sync, unless there is refresh or logout in progress, in which case it emits async
      this.authHttpHeaderService.getStableToken().pipe(take(1))
    ) : of(void 0);
    const requestAndToken$ = token$.pipe(map((token) => ({
      token,
      request: this.authHttpHeaderService.alterRequest(httpRequest, token)
    })));
    return requestAndToken$.pipe(switchMap(({
      request: request3,
      token
    }) => next.handle(request3).pipe(catchError((errResponse) => {
      switch (errResponse.status) {
        case 401:
          if (this.isExpiredToken(errResponse) && shouldCatchError) {
            return this.authHttpHeaderService.handleExpiredAccessToken(request3, next, token);
          } else if (
            // Refresh the expired token
            // Check if the OAuth endpoint was called and the error is because the refresh token expired
            this.errorIsInvalidToken(errResponse)
          ) {
            this.authHttpHeaderService.handleExpiredRefreshToken();
            return EMPTY;
          }
          break;
        case 400:
          if (this.errorIsInvalidGrant(errResponse) && request3.body.get("grant_type") === "refresh_token") {
            this.authHttpHeaderService.handleExpiredRefreshToken();
          }
          break;
      }
      throw errResponse;
    }))));
  }
  errorIsInvalidToken(errResponse) {
    return (errResponse.url?.includes(this.authConfigService.getTokenEndpoint()) && errResponse.error.error === "invalid_token") ?? false;
  }
  errorIsInvalidGrant(errResponse) {
    return (errResponse.url?.includes(this.authConfigService.getTokenEndpoint()) && errResponse.error.error === "invalid_grant") ?? false;
  }
  isExpiredToken(resp) {
    return ["InvalidBearerTokenError", "InvalidTokenError"].includes(resp.error?.errors?.[0]?.type);
  }
  static {
    this.ɵfac = function AuthInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthInterceptor)(ɵɵinject(AuthHttpHeaderService), ɵɵinject(AuthConfigService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AuthInterceptor,
      factory: _AuthInterceptor.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AuthHttpHeaderService
  }, {
    type: AuthConfigService
  }], null);
})();
var TokenRevocationInterceptor = class _TokenRevocationInterceptor {
  constructor(authStorageService, authConfigService) {
    this.authStorageService = authStorageService;
    this.authConfigService = authConfigService;
  }
  intercept(request3, next) {
    const isEnabled = this.authConfigService.sendAuthHeaderOnRevoke();
    if (!isEnabled) {
      return next.handle(request3);
    }
    const isTokenRevocationRequest = this.isTokenRevocationRequest(request3);
    return this.authStorageService.getToken().pipe(take(1), switchMap((token) => {
      if (isTokenRevocationRequest) {
        request3 = request3.clone({
          setHeaders: {
            Authorization: `${token.token_type || "Bearer"} ${token.access_token}`
          }
        });
      }
      return next.handle(request3);
    }));
  }
  isTokenRevocationRequest(request3) {
    return request3.url === this.authConfigService.getRevokeEndpoint();
  }
  static {
    this.ɵfac = function TokenRevocationInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TokenRevocationInterceptor)(ɵɵinject(AuthStorageService), ɵɵinject(AuthConfigService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TokenRevocationInterceptor,
      factory: _TokenRevocationInterceptor.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TokenRevocationInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AuthStorageService
  }, {
    type: AuthConfigService
  }], null);
})();
var interceptors$1 = [{
  provide: HTTP_INTERCEPTORS,
  useExisting: AuthInterceptor,
  multi: true
}, {
  provide: HTTP_INTERCEPTORS,
  useExisting: TokenRevocationInterceptor,
  multi: true
}];
function checkOAuthParamsInUrl(authService, configInit, platformId) {
  return () => isPlatformBrowser(platformId) ? lastValueFrom(configInit.getStable().pipe(switchMap(() => {
    authService.refreshAuthConfig();
    return authService.checkOAuthParamsInUrl();
  }))) : Promise.resolve();
}
function authStatePersistenceFactory(authStatePersistenceService) {
  const result = () => authStatePersistenceService.initSync();
  return result;
}
var authInitializedFactory = () => {
  const authService = inject(AuthService);
  const configInit = inject(ConfigInitializerService);
  const platformId = inject(PLATFORM_ID);
  const authStatePersistenceService = inject(AuthStatePersistenceService);
  authStatePersistenceFactory(authStatePersistenceService)();
  return checkOAuthParamsInUrl(authService, configInit, platformId);
};
var UserAuthModule = class _UserAuthModule {
  static forRoot() {
    return {
      ngModule: _UserAuthModule,
      providers: [provideDefaultConfigFactory(defaultAuthConfigFactory), provideConfigValidator(baseUrlConfigValidator), ...interceptors$1, {
        provide: OAuthStorage,
        useExisting: AuthStorageService
      }, {
        provide: LOCATION_INITIALIZED_MULTI,
        useFactory: authInitializedFactory,
        multi: true
      }]
    };
  }
  static {
    this.ɵfac = function UserAuthModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAuthModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserAuthModule,
      imports: [CommonModule, OAuthModule, UserAuthEventModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, OAuthModule.forRoot(), UserAuthEventModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAuthModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OAuthModule.forRoot(), UserAuthEventModule]
    }]
  }], null, null);
})();
var AuthModule = class _AuthModule {
  static forRoot() {
    return {
      ngModule: _AuthModule
    };
  }
  static {
    this.ɵfac = function AuthModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AuthModule,
      imports: [CommonModule, UserAuthModule, ClientAuthModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, UserAuthModule.forRoot(), ClientAuthModule.forRoot()]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthModule, [{
    type: NgModule,
    args: [{
      // ClientAuthModule should always be imported after UserAuthModule because the ClientTokenInterceptor must be imported after the AuthInterceptor.
      // This way, the ClientTokenInterceptor is the first to handle 401 errors and attempt to refresh the client token.
      // If the request is not for the client token, the AuthInterceptor handles the refresh.
      imports: [CommonModule, UserAuthModule.forRoot(), ClientAuthModule.forRoot()]
    }]
  }], null, null);
})();
var CsrfStateService = class _CsrfStateService {
  get() {
    return this.csrf;
  }
  set(value) {
    this.csrf = value;
  }
  static {
    this.ɵfac = function CsrfStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CsrfStateService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CsrfStateService,
      factory: _CsrfStateService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CsrfStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var AuthGuard = class _AuthGuard {
  constructor(authService, authRedirectService, router, semanticPathService) {
    this.authService = authService;
    this.authRedirectService = authRedirectService;
    this.router = router;
    this.semanticPathService = semanticPathService;
  }
  canActivate() {
    return this.authService.isUserLoggedIn().pipe(map((isLoggedIn) => {
      if (!isLoggedIn) {
        this.authRedirectService.saveCurrentNavigationUrl();
        return this.router.parseUrl(this.semanticPathService.get("login") ?? "");
      }
      return isLoggedIn;
    }));
  }
  static {
    this.ɵfac = function AuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthGuard)(ɵɵinject(AuthService), ɵɵinject(AuthRedirectService), ɵɵinject(Router), ɵɵinject(SemanticPathService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AuthGuard,
      factory: _AuthGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AuthService
  }, {
    type: AuthRedirectService
  }, {
    type: Router
  }, {
    type: SemanticPathService
  }], null);
})();
var GlobalMessageConfig = class _GlobalMessageConfig {
  static {
    this.ɵfac = function GlobalMessageConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GlobalMessageConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GlobalMessageConfig,
      factory: function GlobalMessageConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _GlobalMessageConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalMessageConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var HttpResponseStatus;
(function(HttpResponseStatus2) {
  HttpResponseStatus2[HttpResponseStatus2["UNKNOWN"] = -1] = "UNKNOWN";
  HttpResponseStatus2[HttpResponseStatus2["BAD_REQUEST"] = 400] = "BAD_REQUEST";
  HttpResponseStatus2[HttpResponseStatus2["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
  HttpResponseStatus2[HttpResponseStatus2["FORBIDDEN"] = 403] = "FORBIDDEN";
  HttpResponseStatus2[HttpResponseStatus2["NOT_FOUND"] = 404] = "NOT_FOUND";
  HttpResponseStatus2[HttpResponseStatus2["CONFLICT"] = 409] = "CONFLICT";
  HttpResponseStatus2[HttpResponseStatus2["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
  HttpResponseStatus2[HttpResponseStatus2["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
  HttpResponseStatus2[HttpResponseStatus2["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpResponseStatus || (HttpResponseStatus = {}));
var HttpErrorHandler = class _HttpErrorHandler {
  constructor(globalMessageService, platformId) {
    this.globalMessageService = globalMessageService;
    this.platformId = platformId;
  }
  /**
   * Error handlers are matched by the error `responseStatus` (i.e. 404). On top of the matching status
   * a priority can be added to distinguish multiple handles for the same response status.
   */
  hasMatch(errorResponse) {
    return errorResponse.status === this.responseStatus;
  }
  /**
   * Converts error description to translation key format.
   *
   * Example: 'User is disabled' will be transformed to 'user_is_disabled'.
   */
  getErrorTranslationKey(reason) {
    const translationPrefix = `httpHandlers.badRequest`;
    if (!reason) {
      return `${translationPrefix}PleaseLoginAgain`;
    }
    return `${translationPrefix}.${reason.toLowerCase().replace(/ /g, "_")}`;
  }
  /**
   * Returns true when invoked on the server (SSR).
   *
   * Added in 3.2, depends on the injected `platformId`.
   */
  isSsr() {
    if (this.platformId) {
      return !isPlatformBrowser(this.platformId);
    }
    return false;
  }
  static {
    this.ɵfac = function HttpErrorHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HttpErrorHandler)(ɵɵinject(GlobalMessageService), ɵɵinject(PLATFORM_ID));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _HttpErrorHandler,
      factory: _HttpErrorHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpErrorHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: GlobalMessageService
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var BadGatewayHandler = class _BadGatewayHandler extends HttpErrorHandler {
  constructor() {
    super(...arguments);
    this.responseStatus = HttpResponseStatus.BAD_GATEWAY;
  }
  handleError() {
    this.globalMessageService.add({
      key: "httpHandlers.badGateway"
    }, GlobalMessageType.MSG_TYPE_ERROR);
  }
  getPriority() {
    return Priority.LOW;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵBadGatewayHandler_BaseFactory;
      return function BadGatewayHandler_Factory(__ngFactoryType__) {
        return (ɵBadGatewayHandler_BaseFactory || (ɵBadGatewayHandler_BaseFactory = ɵɵgetInheritedFactory(_BadGatewayHandler)))(__ngFactoryType__ || _BadGatewayHandler);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BadGatewayHandler,
      factory: _BadGatewayHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadGatewayHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OAUTH_ENDPOINT = "/authorizationserver/oauth/token";
var BadRequestHandler = class _BadRequestHandler extends HttpErrorHandler {
  constructor() {
    super(...arguments);
    this.responseStatus = HttpResponseStatus.BAD_REQUEST;
  }
  handleError(request3, response) {
    this.handleBadPassword(request3, response);
    this.handleBadLoginResponse(request3, response);
    this.handleValidationError(request3, response);
    this.handleGuestDuplicateEmail(request3, response);
    this.handleUnknownIdentifierError(request3, response);
    this.handleValidationErrorIleggalArgument(request3, response);
  }
  handleBadPassword(request3, response) {
    if (response.url?.includes(OAUTH_ENDPOINT) && response.error?.error === "invalid_grant" && request3.body?.get("grant_type") === "password") {
      this.globalMessageService.add({
        key: this.getErrorTranslationKey(response.error?.error_description),
        params: {
          errorMessage: response.error.error_description || response.message || ""
        }
      }, GlobalMessageType.MSG_TYPE_ERROR);
      this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION);
    }
  }
  handleBadLoginResponse(_request, response) {
    this.getErrors(response).filter((error) => error.type === "PasswordMismatchError").forEach(() => {
      const url = new URL(_request.url);
      const key = url.pathname.endsWith("/password") ? "httpHandlers.badRequestOldPasswordIncorrect" : "httpHandlers.validationErrors.invalid.password";
      this.globalMessageService.add({
        key
      }, GlobalMessageType.MSG_TYPE_ERROR);
    });
  }
  handleValidationError(_request, response) {
    this.getErrors(response).filter((e) => e.type === "ValidationError").forEach((error) => {
      this.globalMessageService.add({
        key: `httpHandlers.validationErrors.${error.reason}.${error.subject}`
      }, GlobalMessageType.MSG_TYPE_ERROR);
    });
  }
  handleValidationErrorIleggalArgument(_request, response) {
    this.getErrors(response).filter((e) => e.type === "IllegalArgumentError").forEach((error) => {
      this.globalMessageService.add(error.message, GlobalMessageType.MSG_TYPE_ERROR);
    });
  }
  handleGuestDuplicateEmail(_request, response) {
    this.getErrors(response).filter((e) => e.type === "DuplicateUidError").forEach((error) => {
      this.globalMessageService.add({
        key: "httpHandlers.badRequestGuestDuplicateEmail",
        params: {
          errorMessage: error.message || ""
        }
      }, GlobalMessageType.MSG_TYPE_ERROR);
    });
  }
  handleUnknownIdentifierError(_request, response) {
    this.getErrors(response).filter((e) => e.type === "UnknownIdentifierError").forEach((error) => {
      this.globalMessageService.add(error.message ? error.message : {
        key: "httpHandlers.unknownIdentifier"
      }, GlobalMessageType.MSG_TYPE_ERROR);
    });
  }
  getErrors(response) {
    return (response.error?.errors || []).filter((error) => error.type !== "JaloObjectNoLongerValidError");
  }
  getPriority() {
    return Priority.LOW;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵBadRequestHandler_BaseFactory;
      return function BadRequestHandler_Factory(__ngFactoryType__) {
        return (ɵBadRequestHandler_BaseFactory || (ɵBadRequestHandler_BaseFactory = ɵɵgetInheritedFactory(_BadRequestHandler)))(__ngFactoryType__ || _BadRequestHandler);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BadRequestHandler,
      factory: _BadRequestHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadRequestHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ConflictHandler = class _ConflictHandler extends HttpErrorHandler {
  constructor() {
    super(...arguments);
    this.responseStatus = HttpResponseStatus.CONFLICT;
  }
  handleError() {
    this.globalMessageService.add({
      key: "httpHandlers.conflict"
    }, GlobalMessageType.MSG_TYPE_ERROR);
  }
  getPriority() {
    return Priority.LOW;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵConflictHandler_BaseFactory;
      return function ConflictHandler_Factory(__ngFactoryType__) {
        return (ɵConflictHandler_BaseFactory || (ɵConflictHandler_BaseFactory = ɵɵgetInheritedFactory(_ConflictHandler)))(__ngFactoryType__ || _ConflictHandler);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConflictHandler,
      factory: _ConflictHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConflictHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ForbiddenHandler = class _ForbiddenHandler extends HttpErrorHandler {
  handleError(request3) {
    if (request3.url.endsWith(this.occEndpoints.buildUrl("user", {
      urlParams: {
        userId: "current"
      }
    }))) {
      this.authService.logout();
    }
    this.globalMessageService.add({
      key: "httpHandlers.forbidden"
    }, GlobalMessageType.MSG_TYPE_ERROR);
  }
  getPriority() {
    return Priority.LOW;
  }
  constructor(globalMessageService, authService, occEndpoints) {
    super(globalMessageService);
    this.globalMessageService = globalMessageService;
    this.authService = authService;
    this.occEndpoints = occEndpoints;
    this.responseStatus = HttpResponseStatus.FORBIDDEN;
  }
  static {
    this.ɵfac = function ForbiddenHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ForbiddenHandler)(ɵɵinject(GlobalMessageService), ɵɵinject(AuthService), ɵɵinject(OccEndpointsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ForbiddenHandler,
      factory: _ForbiddenHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForbiddenHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: GlobalMessageService
  }, {
    type: AuthService
  }, {
    type: OccEndpointsService
  }], null);
})();
var GatewayTimeoutHandler = class _GatewayTimeoutHandler extends HttpErrorHandler {
  constructor() {
    super(...arguments);
    this.responseStatus = HttpResponseStatus.GATEWAY_TIMEOUT;
  }
  handleError() {
    this.globalMessageService.add({
      key: "httpHandlers.gatewayTimeout"
    }, GlobalMessageType.MSG_TYPE_ERROR);
  }
  getPriority() {
    return Priority.LOW;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵGatewayTimeoutHandler_BaseFactory;
      return function GatewayTimeoutHandler_Factory(__ngFactoryType__) {
        return (ɵGatewayTimeoutHandler_BaseFactory || (ɵGatewayTimeoutHandler_BaseFactory = ɵɵgetInheritedFactory(_GatewayTimeoutHandler)))(__ngFactoryType__ || _GatewayTimeoutHandler);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GatewayTimeoutHandler,
      factory: _GatewayTimeoutHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GatewayTimeoutHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var InternalServerErrorHandler = class _InternalServerErrorHandler extends HttpErrorHandler {
  constructor() {
    super(...arguments);
    this.responseStatus = HttpResponseStatus.INTERNAL_SERVER_ERROR;
  }
  handleError() {
    this.globalMessageService.add({
      key: "httpHandlers.internalServerError"
    }, GlobalMessageType.MSG_TYPE_ERROR);
  }
  getPriority() {
    return Priority.LOW;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵInternalServerErrorHandler_BaseFactory;
      return function InternalServerErrorHandler_Factory(__ngFactoryType__) {
        return (ɵInternalServerErrorHandler_BaseFactory || (ɵInternalServerErrorHandler_BaseFactory = ɵɵgetInheritedFactory(_InternalServerErrorHandler)))(__ngFactoryType__ || _InternalServerErrorHandler);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _InternalServerErrorHandler,
      factory: _InternalServerErrorHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InternalServerErrorHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NotFoundHandler = class _NotFoundHandler extends HttpErrorHandler {
  constructor() {
    super(...arguments);
    this.responseStatus = HttpResponseStatus.NOT_FOUND;
  }
  handleError() {
  }
  getPriority() {
    return Priority.LOW;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNotFoundHandler_BaseFactory;
      return function NotFoundHandler_Factory(__ngFactoryType__) {
        return (ɵNotFoundHandler_BaseFactory || (ɵNotFoundHandler_BaseFactory = ɵɵgetInheritedFactory(_NotFoundHandler)))(__ngFactoryType__ || _NotFoundHandler);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NotFoundHandler,
      factory: _NotFoundHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFoundHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var UnknownErrorHandler = class _UnknownErrorHandler extends HttpErrorHandler {
  constructor() {
    super(...arguments);
    this.logger = inject(LoggerService);
    this.responseStatus = HttpResponseStatus.UNKNOWN;
  }
  /**
   * hasMatch always returns true, to mach all errors
   */
  hasMatch(_errorResponse) {
    return true;
  }
  handleError(_request, errorResponse) {
    if (isDevMode()) {
      this.logger.warn(`An unknown http error occurred
`, errorResponse.message);
    }
  }
  /**
   * Fallback priority assures that the handler is used as a last resort
   */
  getPriority() {
    return Priority.FALLBACK;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵUnknownErrorHandler_BaseFactory;
      return function UnknownErrorHandler_Factory(__ngFactoryType__) {
        return (ɵUnknownErrorHandler_BaseFactory || (ɵUnknownErrorHandler_BaseFactory = ɵɵgetInheritedFactory(_UnknownErrorHandler)))(__ngFactoryType__ || _UnknownErrorHandler);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnknownErrorHandler,
      factory: _UnknownErrorHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnknownErrorHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var HttpErrorInterceptor = class _HttpErrorInterceptor {
  constructor(unifiedInjector) {
    this.unifiedInjector = unifiedInjector;
    this.handlers$ = this.unifiedInjector.getMulti(HttpErrorHandler).pipe(shareReplay(1));
  }
  intercept(request3, next) {
    return next.handle(request3).pipe(tap({
      error: (response) => {
        if (response instanceof HttpErrorResponse) {
          this.handleErrorResponse(request3, response);
        }
      }
    }));
  }
  handleErrorResponse(request3, response) {
    const handler = this.getResponseHandler(response);
    if (handler) {
      handler.handleError(request3, response);
    }
  }
  /**
   * return the error handler that matches the `HttpResponseStatus` code.
   * If no handler is available, the UNKNOWN handler is returned.
   */
  getResponseHandler(response) {
    return resolveApplicable(getLastValueSync(this.handlers$) ?? [], [response]);
  }
  static {
    this.ɵfac = function HttpErrorInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HttpErrorInterceptor)(ɵɵinject(UnifiedInjector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _HttpErrorInterceptor,
      factory: _HttpErrorInterceptor.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpErrorInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UnifiedInjector
  }], null);
})();
var errorHandlers = [{
  provide: HttpErrorHandler,
  useExisting: UnknownErrorHandler,
  multi: true
}, {
  provide: HttpErrorHandler,
  useExisting: BadGatewayHandler,
  multi: true
}, {
  provide: HttpErrorHandler,
  useExisting: BadRequestHandler,
  multi: true
}, {
  provide: HttpErrorHandler,
  useExisting: ConflictHandler,
  multi: true
}, {
  provide: HttpErrorHandler,
  useExisting: ForbiddenHandler,
  multi: true
}, {
  provide: HttpErrorHandler,
  useExisting: GatewayTimeoutHandler,
  multi: true
}, {
  provide: HttpErrorHandler,
  useExisting: InternalServerErrorHandler,
  multi: true
}, {
  provide: HttpErrorHandler,
  useExisting: NotFoundHandler,
  multi: true
}];
var httpErrorInterceptors = [{
  provide: HTTP_INTERCEPTORS,
  useExisting: HttpErrorInterceptor,
  multi: true
}];
var initialState$p = {
  entities: {}
};
function reducer$p(state = initialState$p, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      const message = action.payload;
      if (state.entities[message.type] === void 0) {
        return __spreadProps(__spreadValues({}, state), {
          entities: __spreadProps(__spreadValues({}, state.entities), {
            [message.type]: [message.text]
          })
        });
      } else {
        const currentMessages = state.entities[message.type];
        return __spreadProps(__spreadValues({}, state), {
          entities: __spreadProps(__spreadValues({}, state.entities), {
            [message.type]: [...currentMessages, message.text]
          })
        });
      }
    }
    case REMOVE_MESSAGE: {
      const msgType = action.payload.type;
      const msgIndex = action.payload.index;
      if (Object.keys(state.entities).length === 0 || !state.entities[msgType]) {
        return state;
      }
      const messages = [...state.entities[msgType]];
      messages.splice(msgIndex, 1);
      return __spreadProps(__spreadValues({}, state), {
        entities: __spreadProps(__spreadValues({}, state.entities), {
          [msgType]: messages
        })
      });
    }
    case REMOVE_MESSAGES_BY_TYPE: {
      const entities = __spreadProps(__spreadValues({}, state.entities), {
        [action.payload]: []
      });
      return __spreadProps(__spreadValues({}, state), {
        entities
      });
    }
  }
  return state;
}
function getReducers$8() {
  return reducer$p;
}
var reducerToken$8 = new InjectionToken("GlobalMessageReducers");
var reducerProvider$8 = {
  provide: reducerToken$8,
  useFactory: getReducers$8
};
var GlobalMessageStoreModule = class _GlobalMessageStoreModule {
  static {
    this.ɵfac = function GlobalMessageStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GlobalMessageStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _GlobalMessageStoreModule,
      imports: [StateModule, StoreFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [reducerProvider$8],
      imports: [StateModule, StoreModule.forFeature(GLOBAL_MESSAGE_FEATURE, reducerToken$8)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalMessageStoreModule, [{
    type: NgModule,
    args: [{
      imports: [StateModule, StoreModule.forFeature(GLOBAL_MESSAGE_FEATURE, reducerToken$8)],
      providers: [reducerProvider$8]
    }]
  }], null, null);
})();
var GlobalMessageEffect = class _GlobalMessageEffect {
  constructor(actions$, store, config, platformId) {
    this.actions$ = actions$;
    this.store = store;
    this.config = config;
    this.platformId = platformId;
    this.removeDuplicated$ = createEffect(() => this.actions$.pipe(ofType(ADD_MESSAGE), map((action) => action.payload), switchMap((message) => of(message.text).pipe(withLatestFrom(this.store.pipe(select(getGlobalMessageEntitiesByType(message.type)))), filter(([text, messages]) => ObjectComparisonUtils.countOfDeepEqualObjects(text, messages) > 1), map(([text, messages]) => {
      const index = ObjectComparisonUtils.indexOfFirstOccurrence(text, messages);
      if (index !== void 0) {
        return new RemoveMessage({
          type: message.type,
          index
        });
      }
    }), filter(isNotUndefined)))));
    this.hideAfterDelay$ = createEffect(() => isPlatformBrowser(this.platformId) ? this.actions$.pipe(ofType(ADD_MESSAGE), map((action) => action.payload), concatMap((message) => {
      const config2 = this.config.globalMessages?.[message.type];
      return this.store.pipe(select(getGlobalMessageCountByType(message.type)), take(1), filter((count) => (config2 && config2.timeout !== void 0 || message.timeout !== void 0) && count > 0), delay(message.timeout || config2?.timeout), switchMap(() => of(new RemoveMessage({
        type: message.type,
        index: 0
      }))));
    })) : (
      // workaround is required due to NGRX mutating a global static
      // observable EMPTY, causing to throw an error if we have
      // effect registered on the same observable twice
      () => EMPTY
    ));
  }
  static {
    this.ɵfac = function GlobalMessageEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GlobalMessageEffect)(ɵɵinject(Actions), ɵɵinject(Store), ɵɵinject(GlobalMessageConfig), ɵɵinject(PLATFORM_ID));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GlobalMessageEffect,
      factory: _GlobalMessageEffect.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalMessageEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: Store
  }, {
    type: GlobalMessageConfig
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var defaultGlobalMessageConfig = {
  globalMessages: {
    [GlobalMessageType.MSG_TYPE_CONFIRMATION]: {
      timeout: 3e3
    },
    [GlobalMessageType.MSG_TYPE_INFO]: {
      timeout: 3e3
    },
    [GlobalMessageType.MSG_TYPE_ERROR]: {
      timeout: 7e3
    },
    [GlobalMessageType.MSG_TYPE_WARNING]: {
      timeout: 7e3
    },
    [GlobalMessageType.MSG_TYPE_ASSISTIVE]: {
      timeout: 7e3
    }
  }
};
var GlobalMessageModule = class _GlobalMessageModule {
  static forRoot() {
    return {
      ngModule: _GlobalMessageModule,
      providers: [...errorHandlers, ...httpErrorInterceptors]
    };
  }
  static {
    this.ɵfac = function GlobalMessageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GlobalMessageModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _GlobalMessageModule,
      imports: [GlobalMessageStoreModule, EffectsFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultGlobalMessageConfig)],
      imports: [GlobalMessageStoreModule, EffectsModule.forFeature([GlobalMessageEffect])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalMessageModule, [{
    type: NgModule,
    args: [{
      imports: [GlobalMessageStoreModule, EffectsModule.forFeature([GlobalMessageEffect])],
      providers: [provideDefaultConfig(defaultGlobalMessageConfig)]
    }]
  }], null, null);
})();
var STORAGE_KEY = "login_redirect_count";
var timeout2 = 15e3;
var totalRetries = 1;
var CustomLoginGuard = class _CustomLoginGuard {
  constructor() {
    this.authService = inject(AuthService);
    this.authConfigService = inject(AuthConfigService);
    this.router = inject(Router);
    this.semanticPathService = inject(SemanticPathService);
    this.windowRef = inject(WindowRef);
    this.storage = getStorage(StorageSyncType.LOCAL_STORAGE, this.windowRef);
    this.globalMessageService = inject(GlobalMessageService);
    this.csrfStateService = inject(CsrfStateService);
  }
  canActivate() {
    if (!this.authConfigService.customLoginEnabled()) {
      return of(true);
    }
    return this.authService.getCsrfToken().pipe(tap((token) => {
      this.csrfStateService.set(token);
      this.clearRedirectCount();
    }), map(() => true), catchError(() => {
      const currentCount = this.getRedirectCount();
      if (currentCount >= totalRetries) {
        this.clearRedirectCount();
        this.showErrorMessage({
          key: "authMessages.unrecoverableError"
        });
        return this.createRoute("home");
      }
      this.setRedirectCount(currentCount + 1);
      return this.createRoute("login");
    }));
  }
  getRedirectCount() {
    const countMeta = readFromStorage(this.storage, STORAGE_KEY);
    if (countMeta && Date.now() - countMeta.t < timeout2) {
      return countMeta.c;
    }
    return 0;
  }
  setRedirectCount(count) {
    persistToStorage(STORAGE_KEY, {
      t: Date.now(),
      c: count
    }, this.storage);
  }
  clearRedirectCount() {
    this.setRedirectCount(0);
  }
  createRoute(cxRoute) {
    return of(this.router.parseUrl(this.semanticPathService.get(cxRoute) ?? ""));
  }
  showErrorMessage(message) {
    this.globalMessageService.add(message, GlobalMessageType.MSG_TYPE_ERROR);
  }
  static {
    this.ɵfac = function CustomLoginGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomLoginGuard)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CustomLoginGuard,
      factory: _CustomLoginGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomLoginGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NotAuthGuard = class _NotAuthGuard {
  constructor(authService, semanticPathService, router) {
    this.authService = authService;
    this.semanticPathService = semanticPathService;
    this.router = router;
  }
  canActivate() {
    return this.authService.isUserLoggedIn().pipe(map((isLoggedIn) => {
      if (isLoggedIn) {
        return this.router.parseUrl(this.semanticPathService.get("home") ?? "");
      }
      return !isLoggedIn;
    }));
  }
  static {
    this.ɵfac = function NotAuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotAuthGuard)(ɵɵinject(AuthService), ɵɵinject(SemanticPathService), ɵɵinject(Router));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NotAuthGuard,
      factory: _NotAuthGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotAuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AuthService
  }, {
    type: SemanticPathService
  }, {
    type: Router
  }], null);
})();
var AnonymousConsentsConfig = class _AnonymousConsentsConfig extends OccConfig {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵAnonymousConsentsConfig_BaseFactory;
      return function AnonymousConsentsConfig_Factory(__ngFactoryType__) {
        return (ɵAnonymousConsentsConfig_BaseFactory || (ɵAnonymousConsentsConfig_BaseFactory = ɵɵgetInheritedFactory(_AnonymousConsentsConfig)))(__ngFactoryType__ || _AnonymousConsentsConfig);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AnonymousConsentsConfig,
      factory: function AnonymousConsentsConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _AnonymousConsentsConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnonymousConsentsConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var AnonymousConsentsInterceptor = class _AnonymousConsentsInterceptor {
  constructor(anonymousConsentsService, authService, occEndpoints, config) {
    this.anonymousConsentsService = anonymousConsentsService;
    this.authService = authService;
    this.occEndpoints = occEndpoints;
    this.config = config;
  }
  intercept(request3, next) {
    return combineLatest([this.anonymousConsentsService.getConsents(), this.authService.isUserLoggedIn()]).pipe(take(1), switchMap(([consents, isUserLoggedIn]) => {
      if (!this.isOccUrl(request3.url)) {
        return next.handle(request3);
      }
      const clonedRequest = this.handleRequest(consents, request3);
      return next.handle(clonedRequest).pipe(tap((event) => {
        if (event instanceof HttpResponse && (event.url ?? "").startsWith(this.occEndpoints.buildUrl("anonymousConsentTemplates"))) {
          this.handleResponse(isUserLoggedIn, event.headers.get(ANONYMOUS_CONSENTS_HEADER), consents);
        }
      }));
    }));
  }
  handleResponse(isUserLoggedIn, newRawConsents, previousConsents) {
    if (!isUserLoggedIn && newRawConsents) {
      let newConsents = [];
      newConsents = this.anonymousConsentsService.decodeAndDeserialize(newRawConsents);
      newConsents = this.giveRequiredConsents(newConsents);
      if (this.anonymousConsentsService.consentsUpdated(newConsents, previousConsents)) {
        this.anonymousConsentsService.setConsents(newConsents);
      }
    }
  }
  handleRequest(consents, request3) {
    if (!consents) {
      return request3;
    }
    const rawConsents = this.anonymousConsentsService.serializeAndEncode(consents);
    return request3.clone({
      setHeaders: {
        [ANONYMOUS_CONSENTS_HEADER]: rawConsents
      }
    });
  }
  isOccUrl(url) {
    return url.includes(this.occEndpoints.getBaseUrl());
  }
  giveRequiredConsents(consents) {
    const givenConsents = [...consents];
    if (this.config.anonymousConsents && this.config.anonymousConsents.requiredConsents) {
      for (const consent of givenConsents) {
        if (consent.templateCode && this.config.anonymousConsents.requiredConsents.includes(consent.templateCode)) {
          consent.consentState = ANONYMOUS_CONSENT_STATUS.GIVEN;
        }
      }
    }
    return givenConsents;
  }
  static {
    this.ɵfac = function AnonymousConsentsInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnonymousConsentsInterceptor)(ɵɵinject(AnonymousConsentsService), ɵɵinject(AuthService), ɵɵinject(OccEndpointsService), ɵɵinject(AnonymousConsentsConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AnonymousConsentsInterceptor,
      factory: _AnonymousConsentsInterceptor.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnonymousConsentsInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AnonymousConsentsService
  }, {
    type: AuthService
  }, {
    type: OccEndpointsService
  }, {
    type: AnonymousConsentsConfig
  }], null);
})();
var interceptors = [{
  provide: HTTP_INTERCEPTORS,
  useExisting: AnonymousConsentsInterceptor,
  multi: true
}];
var LOAD_BILLING_COUNTRIES = "[User] Load Billing Countries";
var LOAD_BILLING_COUNTRIES_FAIL = "[User] Load Billing Countries Fail";
var LOAD_BILLING_COUNTRIES_SUCCESS = "[User] Load Billing Countries Success";
var LoadBillingCountries = class {
  constructor() {
    this.type = LOAD_BILLING_COUNTRIES;
  }
};
var LoadBillingCountriesFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_BILLING_COUNTRIES_FAIL;
    this.error = payload;
  }
};
var LoadBillingCountriesSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_BILLING_COUNTRIES_SUCCESS;
  }
};
var PROCESS_FEATURE = "process";
function getProcessState() {
  return createFeatureSelector(PROCESS_FEATURE);
}
function getProcessStateFactory(processId) {
  return createSelector(getProcessState(), (entityState) => entityLoaderStateSelector(entityState, processId));
}
function getProcessLoadingFactory(processId) {
  return createSelector(getProcessStateFactory(processId), (loaderState) => loaderLoadingSelector(loaderState));
}
function getProcessSuccessFactory(processId) {
  return createSelector(getProcessStateFactory(processId), (loaderState) => loaderSuccessSelector(loaderState));
}
function getProcessErrorFactory(processId) {
  return createSelector(getProcessStateFactory(processId), (loaderState) => loaderErrorSelector(loaderState));
}
var process_selectors = Object.freeze({
  __proto__: null,
  getProcessErrorFactory,
  getProcessLoadingFactory,
  getProcessStateFactory,
  getProcessSuccessFactory
});
var USER_FEATURE = "user";
var REGISTER_USER_PROCESS_ID = "registerUser";
var GIVE_CONSENT_PROCESS_ID = "giveConsent";
var WITHDRAW_CONSENT_PROCESS_ID = "withdrawConsent";
var UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID = "updateNotificationPreferences";
var ADD_PRODUCT_INTEREST_PROCESS_ID = "addProductInterests";
var REMOVE_PRODUCT_INTERESTS_PROCESS_ID = "removeProductInterests";
var USER_CONSENTS = "[User] User Consents";
var USER_PAYMENT_METHODS = "[User] User Payment Methods";
var USER_ADDRESSES = "[User] User Addresses";
var USER_COST_CENTERS = "[User] User Cost Centers";
var REGIONS = "[User] Regions";
var CUSTOMER_COUPONS = "[User] Customer Coupons";
var SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID = "subscribeCustomerCoupon";
var UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID = "unsubscribeCustomerCoupon";
var CLAIM_CUSTOMER_COUPON_PROCESS_ID = "claimCustomerCoupon";
var DISCLAIM_CUSTOMER_COUPON_PROCESS_ID = "disclaimCustomerCoupon";
var NOTIFICATION_PREFERENCES = "[User] Notification Preferences";
var PRODUCT_INTERESTS = "[User] Product Interests";
var LOAD_CUSTOMER_COUPONS = "[User] Load Customer Coupons";
var LOAD_CUSTOMER_COUPONS_FAIL = "[User] Load Customer Coupons Fail";
var LOAD_CUSTOMER_COUPONS_SUCCESS = "[User] Load Customer Coupons Success";
var RESET_LOAD_CUSTOMER_COUPONS = "[User] Reset Load Customer Coupons";
var SUBSCRIBE_CUSTOMER_COUPON = "[User] Subscribe Customer Notification Coupon";
var SUBSCRIBE_CUSTOMER_COUPON_FAIL = "[User] Subscribe Customer Coupon Notification Fail";
var SUBSCRIBE_CUSTOMER_COUPON_SUCCESS = "[User] Subscribe Customer Coupon Notification Success";
var RESET_SUBSCRIBE_CUSTOMER_COUPON_PROCESS = "[User] Reset Subscribe Customer Coupon Process";
var UNSUBSCRIBE_CUSTOMER_COUPON = "[User] Unsubscribe Customer Notification Coupon";
var UNSUBSCRIBE_CUSTOMER_COUPON_FAIL = "[User] Unsubscribe Customer Coupon Notification Fail";
var UNSUBSCRIBE_CUSTOMER_COUPON_SUCCESS = "[User] Unsubscribe Customer Coupon Notification Success";
var RESET_UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS = "[User] Reset Unsubscribe Customer Coupon Process";
var CLAIM_CUSTOMER_COUPON = "[User] Claim Customer";
var CLAIM_CUSTOMER_COUPON_FAIL = "[User] Claim Customer Fail";
var CLAIM_CUSTOMER_COUPON_SUCCESS = "[User] Claim Customer Success";
var DISCLAIM_CUSTOMER_COUPON = "[User] Disclaim Customer";
var DISCLAIM_CUSTOMER_COUPON_FAIL = "[User] Disclaim Customer Fail";
var DISCLAIM_CUSTOMER_COUPON_SUCCESS = "[User] Disclaim Customer Success";
var RESET_DISCLAIM_CUSTOMER_COUPON = "[User] Reset Disclaim Customer";
var LoadCustomerCoupons = class extends LoaderLoadAction {
  constructor(payload) {
    super(CUSTOMER_COUPONS);
    this.payload = payload;
    this.type = LOAD_CUSTOMER_COUPONS;
  }
};
var LoadCustomerCouponsFail = class extends LoaderFailAction {
  constructor(payload) {
    super(CUSTOMER_COUPONS, payload);
    this.payload = payload;
    this.type = LOAD_CUSTOMER_COUPONS_FAIL;
  }
};
var LoadCustomerCouponsSuccess = class extends LoaderSuccessAction {
  constructor(payload) {
    super(CUSTOMER_COUPONS);
    this.payload = payload;
    this.type = LOAD_CUSTOMER_COUPONS_SUCCESS;
  }
};
var ResetLoadCustomerCoupons = class extends LoaderResetAction {
  constructor() {
    super(CUSTOMER_COUPONS);
    this.type = RESET_LOAD_CUSTOMER_COUPONS;
  }
};
var SubscribeCustomerCoupon = class extends EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID);
    this.payload = payload;
    this.type = SUBSCRIBE_CUSTOMER_COUPON;
  }
};
var SubscribeCustomerCouponFail = class extends EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, payload);
    this.payload = payload;
    this.type = SUBSCRIBE_CUSTOMER_COUPON_FAIL;
  }
};
var SubscribeCustomerCouponSuccess = class extends EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, payload);
    this.payload = payload;
    this.type = SUBSCRIBE_CUSTOMER_COUPON_SUCCESS;
  }
};
var ResetSubscribeCustomerCouponProcess = class extends EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID);
    this.type = RESET_SUBSCRIBE_CUSTOMER_COUPON_PROCESS;
  }
};
var UnsubscribeCustomerCoupon = class extends EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID);
    this.payload = payload;
    this.type = UNSUBSCRIBE_CUSTOMER_COUPON;
  }
};
var UnsubscribeCustomerCouponFail = class extends EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, payload);
    this.payload = payload;
    this.type = UNSUBSCRIBE_CUSTOMER_COUPON_FAIL;
  }
};
var UnsubscribeCustomerCouponSuccess = class extends EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID, payload);
    this.payload = payload;
    this.type = UNSUBSCRIBE_CUSTOMER_COUPON_SUCCESS;
  }
};
var ResetUnsubscribeCustomerCouponProcess = class extends EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID);
    this.type = RESET_UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS;
  }
};
var ClaimCustomerCoupon = class extends EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, CLAIM_CUSTOMER_COUPON_PROCESS_ID);
    this.payload = payload;
    this.type = CLAIM_CUSTOMER_COUPON;
  }
};
var DisclaimCustomerCoupon = class extends EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, DISCLAIM_CUSTOMER_COUPON_PROCESS_ID);
    this.payload = payload;
    this.type = DISCLAIM_CUSTOMER_COUPON;
  }
};
var ResetDisclaimCustomerCoupon = class extends EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, DISCLAIM_CUSTOMER_COUPON_PROCESS_ID);
    this.type = RESET_DISCLAIM_CUSTOMER_COUPON;
  }
};
var DisclaimCustomerCouponFail = class extends EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, DISCLAIM_CUSTOMER_COUPON_PROCESS_ID, payload);
    this.payload = payload;
    this.type = DISCLAIM_CUSTOMER_COUPON_FAIL;
  }
};
var DisclaimCustomerCouponSuccess = class extends EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, DISCLAIM_CUSTOMER_COUPON_PROCESS_ID, payload);
    this.payload = payload;
    this.type = DISCLAIM_CUSTOMER_COUPON_SUCCESS;
  }
};
var ClaimCustomerCouponFail = class extends EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, CLAIM_CUSTOMER_COUPON_PROCESS_ID, payload);
    this.payload = payload;
    this.type = CLAIM_CUSTOMER_COUPON_FAIL;
  }
};
var ClaimCustomerCouponSuccess = class extends EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, CLAIM_CUSTOMER_COUPON_PROCESS_ID, payload);
    this.payload = payload;
    this.type = CLAIM_CUSTOMER_COUPON_SUCCESS;
  }
};
var LOAD_DELIVERY_COUNTRIES = "[User] Load Delivery Countries";
var LOAD_DELIVERY_COUNTRIES_FAIL = "[User] Load Delivery Countries Fail";
var LOAD_DELIVERY_COUNTRIES_SUCCESS = "[User] Load Delivery Countries Success";
var LoadDeliveryCountries = class {
  constructor() {
    this.type = LOAD_DELIVERY_COUNTRIES;
  }
};
var LoadDeliveryCountriesFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_DELIVERY_COUNTRIES_FAIL;
    this.error = payload;
  }
};
var LoadDeliveryCountriesSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_DELIVERY_COUNTRIES_SUCCESS;
  }
};
var LOAD_NOTIFICATION_PREFERENCES = "[User] Load Notification Preferences";
var LOAD_NOTIFICATION_PREFERENCES_FAIL = "[User] Load Notification Preferences Fail";
var LOAD_NOTIFICATION_PREFERENCES_SUCCESS = "[User] Load Notification Preferences Success";
var UPDATE_NOTIFICATION_PREFERENCES = "[User] Update Notification Preferences";
var UPDATE_NOTIFICATION_PREFERENCES_FAIL = "[User] Update Notification Preferences Fail";
var UPDATE_NOTIFICATION_PREFERENCES_SUCCESS = "[User] Update Notification Preferences Success";
var RESET_NOTIFICATION_PREFERENCES = "[User] Reset Notification Preferences";
var CLEAR_NOTIFICATION_PREFERENCES = "[User] Clear Notification Preferences";
var LoadNotificationPreferences = class extends LoaderLoadAction {
  constructor(payload) {
    super(NOTIFICATION_PREFERENCES);
    this.payload = payload;
    this.type = LOAD_NOTIFICATION_PREFERENCES;
  }
};
var LoadNotificationPreferencesFail = class extends LoaderFailAction {
  constructor(payload) {
    super(NOTIFICATION_PREFERENCES, payload);
    this.payload = payload;
    this.type = LOAD_NOTIFICATION_PREFERENCES_FAIL;
  }
};
var LoadNotificationPreferencesSuccess = class extends LoaderSuccessAction {
  constructor(payload) {
    super(NOTIFICATION_PREFERENCES);
    this.payload = payload;
    this.type = LOAD_NOTIFICATION_PREFERENCES_SUCCESS;
  }
};
var UpdateNotificationPreferences = class extends EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID);
    this.payload = payload;
    this.type = UPDATE_NOTIFICATION_PREFERENCES;
  }
};
var UpdateNotificationPreferencesFail = class extends EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID, payload);
    this.payload = payload;
    this.type = UPDATE_NOTIFICATION_PREFERENCES_FAIL;
  }
};
var UpdateNotificationPreferencesSuccess = class extends EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID);
    this.payload = payload;
    this.type = UPDATE_NOTIFICATION_PREFERENCES_SUCCESS;
  }
};
var ResetNotificationPreferences = class extends EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID);
    this.type = RESET_NOTIFICATION_PREFERENCES;
  }
};
var ClearNotificationPreferences = class extends LoaderResetAction {
  constructor() {
    super(NOTIFICATION_PREFERENCES);
    this.type = CLEAR_NOTIFICATION_PREFERENCES;
  }
};
var LOAD_USER_PAYMENT_METHODS = "[User] Load User Payment Methods";
var LOAD_USER_PAYMENT_METHODS_FAIL = "[User] Load User Payment Methods Fail";
var LOAD_USER_PAYMENT_METHODS_SUCCESS = "[User] Load User Payment Methods Success";
var SET_DEFAULT_USER_PAYMENT_METHOD = "[User] Set Default User Payment Method";
var SET_DEFAULT_USER_PAYMENT_METHOD_FAIL = "[User] Set Default User Payment Method Fail";
var SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS = "[User] Set Default User Payment Method Success";
var DELETE_USER_PAYMENT_METHOD = "[User] Delete User Payment Method";
var DELETE_USER_PAYMENT_METHOD_FAIL = "[User] Delete User Payment Method Fail";
var DELETE_USER_PAYMENT_METHOD_SUCCESS = "[User] Delete User  Payment Method Success";
var LoadUserPaymentMethods = class extends LoaderLoadAction {
  constructor(payload) {
    super(USER_PAYMENT_METHODS);
    this.payload = payload;
    this.type = LOAD_USER_PAYMENT_METHODS;
  }
};
var LoadUserPaymentMethodsFail = class extends LoaderFailAction {
  constructor(payload) {
    super(USER_PAYMENT_METHODS, payload);
    this.payload = payload;
    this.type = LOAD_USER_PAYMENT_METHODS_FAIL;
  }
};
var LoadUserPaymentMethodsSuccess = class extends LoaderSuccessAction {
  constructor(payload) {
    super(USER_PAYMENT_METHODS);
    this.payload = payload;
    this.type = LOAD_USER_PAYMENT_METHODS_SUCCESS;
  }
};
var SetDefaultUserPaymentMethod = class extends LoaderLoadAction {
  constructor(payload) {
    super(USER_PAYMENT_METHODS);
    this.payload = payload;
    this.type = SET_DEFAULT_USER_PAYMENT_METHOD;
  }
};
var SetDefaultUserPaymentMethodFail = class extends LoaderFailAction {
  constructor(payload) {
    super(USER_PAYMENT_METHODS, payload);
    this.payload = payload;
    this.type = SET_DEFAULT_USER_PAYMENT_METHOD_FAIL;
  }
};
var SetDefaultUserPaymentMethodSuccess = class extends LoaderSuccessAction {
  constructor(payload) {
    super(USER_PAYMENT_METHODS);
    this.payload = payload;
    this.type = SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS;
  }
};
var DeleteUserPaymentMethod = class extends LoaderLoadAction {
  constructor(payload) {
    super(USER_PAYMENT_METHODS);
    this.payload = payload;
    this.type = DELETE_USER_PAYMENT_METHOD;
  }
};
var DeleteUserPaymentMethodFail = class extends LoaderFailAction {
  constructor(payload) {
    super(USER_PAYMENT_METHODS, payload);
    this.payload = payload;
    this.type = DELETE_USER_PAYMENT_METHOD_FAIL;
  }
};
var DeleteUserPaymentMethodSuccess = class extends LoaderSuccessAction {
  constructor(payload) {
    super(USER_PAYMENT_METHODS);
    this.payload = payload;
    this.type = DELETE_USER_PAYMENT_METHOD_SUCCESS;
  }
};
var LOAD_PRODUCT_INTERESTS = "Load Product Interests";
var LOAD_PRODUCT_INTERESTS_FAIL = "Load Product Interests Fail";
var LOAD_PRODUCT_INTERESTS_SUCCESS = "Load Product Interests Success";
var REMOVE_PRODUCT_INTEREST = "Remove Product Interest";
var REMOVE_PRODUCT_INTEREST_SUCCESS = "Remove Product Interest Success";
var REMOVE_PRODUCT_INTEREST_FAIL = "Remove Product Interest Fail";
var ADD_PRODUCT_INTEREST = "Add Product Interest";
var ADD_PRODUCT_INTEREST_FAIL = "Add Product Interest Fail";
var ADD_PRODUCT_INTEREST_SUCCESS = "Add Product Interest Success";
var ADD_PRODUCT_INTEREST_RESET = "Add Product Interest Reset";
var REMOVE_PRODUCT_INTEREST_RESET = "Remove Product Interest Reset";
var CLEAR_PRODUCT_INTERESTS = "Clear Product Interests";
var LoadProductInterests = class extends LoaderLoadAction {
  constructor(payload) {
    super(PRODUCT_INTERESTS);
    this.payload = payload;
    this.type = LOAD_PRODUCT_INTERESTS;
  }
};
var LoadProductInterestsFail = class extends LoaderFailAction {
  constructor(payload) {
    super(PRODUCT_INTERESTS, payload);
    this.payload = payload;
    this.type = LOAD_PRODUCT_INTERESTS_FAIL;
  }
};
var LoadProductInterestsSuccess = class extends LoaderSuccessAction {
  constructor(payload) {
    super(PRODUCT_INTERESTS);
    this.payload = payload;
    this.type = LOAD_PRODUCT_INTERESTS_SUCCESS;
  }
};
var RemoveProductInterest = class extends EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, REMOVE_PRODUCT_INTERESTS_PROCESS_ID);
    this.payload = payload;
    this.type = REMOVE_PRODUCT_INTEREST;
  }
};
var RemoveProductInterestSuccess = class extends EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, REMOVE_PRODUCT_INTERESTS_PROCESS_ID);
    this.payload = payload;
    this.type = REMOVE_PRODUCT_INTEREST_SUCCESS;
  }
};
var RemoveProductInterestFail = class extends EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, REMOVE_PRODUCT_INTERESTS_PROCESS_ID, payload);
    this.payload = payload;
    this.type = REMOVE_PRODUCT_INTEREST_FAIL;
  }
};
var AddProductInterest = class extends EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, ADD_PRODUCT_INTEREST_PROCESS_ID);
    this.payload = payload;
    this.type = ADD_PRODUCT_INTEREST;
  }
};
var AddProductInterestSuccess = class extends EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, ADD_PRODUCT_INTEREST_PROCESS_ID);
    this.payload = payload;
    this.type = ADD_PRODUCT_INTEREST_SUCCESS;
  }
};
var AddProductInterestFail = class extends EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, ADD_PRODUCT_INTEREST_PROCESS_ID, payload);
    this.payload = payload;
    this.type = ADD_PRODUCT_INTEREST_FAIL;
  }
};
var ResetAddInterestState = class extends EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, ADD_PRODUCT_INTEREST_PROCESS_ID);
    this.type = ADD_PRODUCT_INTEREST_RESET;
  }
};
var ResetRemoveInterestState = class extends EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, REMOVE_PRODUCT_INTERESTS_PROCESS_ID);
    this.type = REMOVE_PRODUCT_INTEREST_RESET;
  }
};
var ClearProductInterests = class extends LoaderResetAction {
  constructor() {
    super(PRODUCT_INTERESTS);
    this.type = CLEAR_PRODUCT_INTERESTS;
  }
};
var LOAD_REGIONS = "[User] Load Regions";
var LOAD_REGIONS_SUCCESS = "[User] Load Regions Success";
var LOAD_REGIONS_FAIL = "[User] Load Regions Fail";
var CLEAR_REGIONS = "[User] Clear Regions";
var LoadRegions = class extends LoaderLoadAction {
  constructor(payload) {
    super(REGIONS);
    this.payload = payload;
    this.type = LOAD_REGIONS;
  }
};
var LoadRegionsFail = class extends LoaderFailAction {
  constructor(payload) {
    super(REGIONS, payload);
    this.payload = payload;
    this.type = LOAD_REGIONS_FAIL;
  }
};
var LoadRegionsSuccess = class extends LoaderSuccessAction {
  constructor(payload) {
    super(REGIONS);
    this.payload = payload;
    this.type = LOAD_REGIONS_SUCCESS;
  }
};
var ClearRegions = class {
  constructor() {
    this.type = CLEAR_REGIONS;
  }
};
var LOAD_USER_ADDRESSES = "[User] Load User Addresses";
var LOAD_USER_ADDRESSES_FAIL = "[User] Load User Addresses Fail";
var LOAD_USER_ADDRESSES_SUCCESS = "[User] Load User Addresses Success";
var ADD_USER_ADDRESS = "[User] Add User Address";
var ADD_USER_ADDRESS_FAIL = "[User] Add User Address Fail";
var ADD_USER_ADDRESS_SUCCESS = "[User] Add User Address Success";
var UPDATE_USER_ADDRESS = "[User] Update User Address";
var UPDATE_USER_ADDRESS_FAIL = "[User] Update User Address Fail";
var UPDATE_USER_ADDRESS_SUCCESS = "[User] Update User Address Success";
var DELETE_USER_ADDRESS = "[User] Delete User Address";
var DELETE_USER_ADDRESS_FAIL = "[User] Delete User Address Fail";
var DELETE_USER_ADDRESS_SUCCESS = "[User] Delete User Address Success";
var LoadUserAddresses = class extends LoaderLoadAction {
  constructor(payload) {
    super(USER_ADDRESSES);
    this.payload = payload;
    this.type = LOAD_USER_ADDRESSES;
  }
};
var LoadUserAddressesFail = class extends LoaderFailAction {
  constructor(payload) {
    super(USER_ADDRESSES, payload);
    this.payload = payload;
    this.type = LOAD_USER_ADDRESSES_FAIL;
  }
};
var LoadUserAddressesSuccess = class extends LoaderSuccessAction {
  constructor(payload) {
    super(USER_ADDRESSES);
    this.payload = payload;
    this.type = LOAD_USER_ADDRESSES_SUCCESS;
  }
};
var AddUserAddress = class extends LoaderLoadAction {
  constructor(payload) {
    super(USER_ADDRESSES);
    this.payload = payload;
    this.type = ADD_USER_ADDRESS;
  }
};
var AddUserAddressFail = class extends LoaderFailAction {
  constructor(payload) {
    super(USER_ADDRESSES, payload);
    this.payload = payload;
    this.type = ADD_USER_ADDRESS_FAIL;
  }
};
var AddUserAddressSuccess = class extends LoaderSuccessAction {
  constructor(payload) {
    super(USER_ADDRESSES);
    this.payload = payload;
    this.type = ADD_USER_ADDRESS_SUCCESS;
  }
};
var UpdateUserAddress = class extends LoaderLoadAction {
  constructor(payload) {
    super(USER_ADDRESSES);
    this.payload = payload;
    this.type = UPDATE_USER_ADDRESS;
  }
};
var UpdateUserAddressFail = class extends LoaderFailAction {
  constructor(payload) {
    super(USER_ADDRESSES, payload);
    this.payload = payload;
    this.type = UPDATE_USER_ADDRESS_FAIL;
  }
};
var UpdateUserAddressSuccess = class extends LoaderSuccessAction {
  constructor(payload) {
    super(USER_ADDRESSES);
    this.payload = payload;
    this.type = UPDATE_USER_ADDRESS_SUCCESS;
  }
};
var DeleteUserAddress = class extends LoaderLoadAction {
  constructor(payload) {
    super(USER_ADDRESSES);
    this.payload = payload;
    this.type = DELETE_USER_ADDRESS;
  }
};
var DeleteUserAddressFail = class extends LoaderFailAction {
  constructor(payload) {
    super(USER_ADDRESSES, payload);
    this.payload = payload;
    this.type = DELETE_USER_ADDRESS_FAIL;
  }
};
var DeleteUserAddressSuccess = class extends LoaderSuccessAction {
  constructor(payload) {
    super(USER_ADDRESSES);
    this.payload = payload;
    this.type = DELETE_USER_ADDRESS_SUCCESS;
  }
};
var LOAD_USER_CONSENTS = "[User] Load User Consents";
var LOAD_USER_CONSENTS_SUCCESS = "[User] Load User Consents Success";
var LOAD_USER_CONSENTS_FAIL = "[User] Load User Consents Fail";
var RESET_LOAD_USER_CONSENTS = "[User] Reset Load User Consents";
var GIVE_USER_CONSENT = "[User] Give User Consent";
var GIVE_USER_CONSENT_FAIL = "[User] Give User Consent Fail";
var GIVE_USER_CONSENT_SUCCESS = "[User] Give User Consent Success";
var RESET_GIVE_USER_CONSENT_PROCESS = "[User] Reset Give User Consent Process";
var TRANSFER_ANONYMOUS_CONSENT = "[User] Transfer Anonymous Consent";
var WITHDRAW_USER_CONSENT = "[User] Withdraw User Consent";
var WITHDRAW_USER_CONSENT_FAIL = "[User] Withdraw User Consent Fail";
var WITHDRAW_USER_CONSENT_SUCCESS = "[User] Withdraw User Consent Success";
var RESET_WITHDRAW_USER_CONSENT_PROCESS = "[User] Reset Withdraw User Consent Process";
var LoadUserConsents = class extends LoaderLoadAction {
  constructor(payload) {
    super(USER_CONSENTS);
    this.payload = payload;
    this.type = LOAD_USER_CONSENTS;
  }
};
var LoadUserConsentsFail = class extends LoaderFailAction {
  constructor(payload) {
    super(USER_CONSENTS, payload);
    this.payload = payload;
    this.type = LOAD_USER_CONSENTS_FAIL;
  }
};
var LoadUserConsentsSuccess = class extends LoaderSuccessAction {
  constructor(payload) {
    super(USER_CONSENTS);
    this.payload = payload;
    this.type = LOAD_USER_CONSENTS_SUCCESS;
  }
};
var ResetLoadUserConsents = class extends LoaderResetAction {
  constructor() {
    super(USER_CONSENTS);
    this.type = RESET_LOAD_USER_CONSENTS;
  }
};
var GiveUserConsent = class extends EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID);
    this.payload = payload;
    this.type = GIVE_USER_CONSENT;
  }
};
var GiveUserConsentFail = class extends EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID, payload);
    this.type = GIVE_USER_CONSENT_FAIL;
  }
};
var GiveUserConsentSuccess = class extends EntitySuccessAction {
  constructor(consentTemplate) {
    super(PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID);
    this.consentTemplate = consentTemplate;
    this.type = GIVE_USER_CONSENT_SUCCESS;
  }
};
var ResetGiveUserConsentProcess = class extends EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID);
    this.type = RESET_GIVE_USER_CONSENT_PROCESS;
  }
};
var TransferAnonymousConsent = class {
  constructor(payload) {
    this.payload = payload;
    this.type = TRANSFER_ANONYMOUS_CONSENT;
  }
};
var WithdrawUserConsent = class extends EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID);
    this.payload = payload;
    this.type = WITHDRAW_USER_CONSENT;
  }
};
var WithdrawUserConsentFail = class extends EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID, payload);
    this.type = WITHDRAW_USER_CONSENT_FAIL;
  }
};
var WithdrawUserConsentSuccess = class extends EntitySuccessAction {
  constructor() {
    super(PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID);
    this.type = WITHDRAW_USER_CONSENT_SUCCESS;
  }
};
var ResetWithdrawUserConsentProcess = class extends EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID);
    this.type = RESET_WITHDRAW_USER_CONSENT_PROCESS;
  }
};
var LOAD_ACTIVE_COST_CENTERS = "[User] Load Active CostCenters";
var LOAD_ACTIVE_COST_CENTERS_FAIL = "[User] Load Active CostCenters Fail";
var LOAD_ACTIVE_COST_CENTERS_SUCCESS = "[User] Load Active CostCenters Success";
var LoadActiveCostCenters = class extends LoaderLoadAction {
  constructor(payload) {
    super(USER_COST_CENTERS);
    this.payload = payload;
    this.type = LOAD_ACTIVE_COST_CENTERS;
  }
};
var LoadActiveCostCentersFail = class extends LoaderFailAction {
  constructor(payload) {
    super(USER_COST_CENTERS, payload);
    this.payload = payload;
    this.type = LOAD_ACTIVE_COST_CENTERS_FAIL;
  }
};
var LoadActiveCostCentersSuccess = class extends LoaderSuccessAction {
  constructor(payload) {
    super(USER_COST_CENTERS);
    this.payload = payload;
    this.type = LOAD_ACTIVE_COST_CENTERS_SUCCESS;
  }
};
var CLEAR_USER_MISCS_DATA = "[User] Clear User Misc Data";
var ClearUserMiscsData = class {
  constructor() {
    this.type = CLEAR_USER_MISCS_DATA;
  }
};
var REGISTER_USER_SUCCESS = "[User] Register User Success";
var RegisterUserSuccess = class extends EntitySuccessAction {
  constructor() {
    super(PROCESS_FEATURE, REGISTER_USER_PROCESS_ID);
    this.type = REGISTER_USER_SUCCESS;
  }
};
var userGroup_actions = Object.freeze({
  __proto__: null,
  ADD_PRODUCT_INTEREST,
  ADD_PRODUCT_INTEREST_FAIL,
  ADD_PRODUCT_INTEREST_RESET,
  ADD_PRODUCT_INTEREST_SUCCESS,
  ADD_USER_ADDRESS,
  ADD_USER_ADDRESS_FAIL,
  ADD_USER_ADDRESS_SUCCESS,
  AddProductInterest,
  AddProductInterestFail,
  AddProductInterestSuccess,
  AddUserAddress,
  AddUserAddressFail,
  AddUserAddressSuccess,
  CLAIM_CUSTOMER_COUPON,
  CLAIM_CUSTOMER_COUPON_FAIL,
  CLAIM_CUSTOMER_COUPON_SUCCESS,
  CLEAR_NOTIFICATION_PREFERENCES,
  CLEAR_PRODUCT_INTERESTS,
  CLEAR_REGIONS,
  CLEAR_USER_MISCS_DATA,
  ClaimCustomerCoupon,
  ClaimCustomerCouponFail,
  ClaimCustomerCouponSuccess,
  ClearNotificationPreferences,
  ClearProductInterests,
  ClearRegions,
  ClearUserMiscsData,
  DELETE_USER_ADDRESS,
  DELETE_USER_ADDRESS_FAIL,
  DELETE_USER_ADDRESS_SUCCESS,
  DELETE_USER_PAYMENT_METHOD,
  DELETE_USER_PAYMENT_METHOD_FAIL,
  DELETE_USER_PAYMENT_METHOD_SUCCESS,
  DISCLAIM_CUSTOMER_COUPON,
  DISCLAIM_CUSTOMER_COUPON_FAIL,
  DISCLAIM_CUSTOMER_COUPON_SUCCESS,
  DeleteUserAddress,
  DeleteUserAddressFail,
  DeleteUserAddressSuccess,
  DeleteUserPaymentMethod,
  DeleteUserPaymentMethodFail,
  DeleteUserPaymentMethodSuccess,
  DisclaimCustomerCoupon,
  DisclaimCustomerCouponFail,
  DisclaimCustomerCouponSuccess,
  GIVE_USER_CONSENT,
  GIVE_USER_CONSENT_FAIL,
  GIVE_USER_CONSENT_SUCCESS,
  GiveUserConsent,
  GiveUserConsentFail,
  GiveUserConsentSuccess,
  LOAD_ACTIVE_COST_CENTERS,
  LOAD_ACTIVE_COST_CENTERS_FAIL,
  LOAD_ACTIVE_COST_CENTERS_SUCCESS,
  LOAD_BILLING_COUNTRIES,
  LOAD_BILLING_COUNTRIES_FAIL,
  LOAD_BILLING_COUNTRIES_SUCCESS,
  LOAD_CUSTOMER_COUPONS,
  LOAD_CUSTOMER_COUPONS_FAIL,
  LOAD_CUSTOMER_COUPONS_SUCCESS,
  LOAD_DELIVERY_COUNTRIES,
  LOAD_DELIVERY_COUNTRIES_FAIL,
  LOAD_DELIVERY_COUNTRIES_SUCCESS,
  LOAD_NOTIFICATION_PREFERENCES,
  LOAD_NOTIFICATION_PREFERENCES_FAIL,
  LOAD_NOTIFICATION_PREFERENCES_SUCCESS,
  LOAD_PRODUCT_INTERESTS,
  LOAD_PRODUCT_INTERESTS_FAIL,
  LOAD_PRODUCT_INTERESTS_SUCCESS,
  LOAD_REGIONS,
  LOAD_REGIONS_FAIL,
  LOAD_REGIONS_SUCCESS,
  LOAD_USER_ADDRESSES,
  LOAD_USER_ADDRESSES_FAIL,
  LOAD_USER_ADDRESSES_SUCCESS,
  LOAD_USER_CONSENTS,
  LOAD_USER_CONSENTS_FAIL,
  LOAD_USER_CONSENTS_SUCCESS,
  LOAD_USER_PAYMENT_METHODS,
  LOAD_USER_PAYMENT_METHODS_FAIL,
  LOAD_USER_PAYMENT_METHODS_SUCCESS,
  LoadActiveCostCenters,
  LoadActiveCostCentersFail,
  LoadActiveCostCentersSuccess,
  LoadBillingCountries,
  LoadBillingCountriesFail,
  LoadBillingCountriesSuccess,
  LoadCustomerCoupons,
  LoadCustomerCouponsFail,
  LoadCustomerCouponsSuccess,
  LoadDeliveryCountries,
  LoadDeliveryCountriesFail,
  LoadDeliveryCountriesSuccess,
  LoadNotificationPreferences,
  LoadNotificationPreferencesFail,
  LoadNotificationPreferencesSuccess,
  LoadProductInterests,
  LoadProductInterestsFail,
  LoadProductInterestsSuccess,
  LoadRegions,
  LoadRegionsFail,
  LoadRegionsSuccess,
  LoadUserAddresses,
  LoadUserAddressesFail,
  LoadUserAddressesSuccess,
  LoadUserConsents,
  LoadUserConsentsFail,
  LoadUserConsentsSuccess,
  LoadUserPaymentMethods,
  LoadUserPaymentMethodsFail,
  LoadUserPaymentMethodsSuccess,
  REGISTER_USER_SUCCESS,
  REMOVE_PRODUCT_INTEREST,
  REMOVE_PRODUCT_INTEREST_FAIL,
  REMOVE_PRODUCT_INTEREST_RESET,
  REMOVE_PRODUCT_INTEREST_SUCCESS,
  RESET_DISCLAIM_CUSTOMER_COUPON,
  RESET_GIVE_USER_CONSENT_PROCESS,
  RESET_LOAD_CUSTOMER_COUPONS,
  RESET_LOAD_USER_CONSENTS,
  RESET_NOTIFICATION_PREFERENCES,
  RESET_SUBSCRIBE_CUSTOMER_COUPON_PROCESS,
  RESET_UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS,
  RESET_WITHDRAW_USER_CONSENT_PROCESS,
  RegisterUserSuccess,
  RemoveProductInterest,
  RemoveProductInterestFail,
  RemoveProductInterestSuccess,
  ResetAddInterestState,
  ResetDisclaimCustomerCoupon,
  ResetGiveUserConsentProcess,
  ResetLoadCustomerCoupons,
  ResetLoadUserConsents,
  ResetNotificationPreferences,
  ResetRemoveInterestState,
  ResetSubscribeCustomerCouponProcess,
  ResetUnsubscribeCustomerCouponProcess,
  ResetWithdrawUserConsentProcess,
  SET_DEFAULT_USER_PAYMENT_METHOD,
  SET_DEFAULT_USER_PAYMENT_METHOD_FAIL,
  SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS,
  SUBSCRIBE_CUSTOMER_COUPON,
  SUBSCRIBE_CUSTOMER_COUPON_FAIL,
  SUBSCRIBE_CUSTOMER_COUPON_SUCCESS,
  SetDefaultUserPaymentMethod,
  SetDefaultUserPaymentMethodFail,
  SetDefaultUserPaymentMethodSuccess,
  SubscribeCustomerCoupon,
  SubscribeCustomerCouponFail,
  SubscribeCustomerCouponSuccess,
  TRANSFER_ANONYMOUS_CONSENT,
  TransferAnonymousConsent,
  UNSUBSCRIBE_CUSTOMER_COUPON,
  UNSUBSCRIBE_CUSTOMER_COUPON_FAIL,
  UNSUBSCRIBE_CUSTOMER_COUPON_SUCCESS,
  UPDATE_NOTIFICATION_PREFERENCES,
  UPDATE_NOTIFICATION_PREFERENCES_FAIL,
  UPDATE_NOTIFICATION_PREFERENCES_SUCCESS,
  UPDATE_USER_ADDRESS,
  UPDATE_USER_ADDRESS_FAIL,
  UPDATE_USER_ADDRESS_SUCCESS,
  UnsubscribeCustomerCoupon,
  UnsubscribeCustomerCouponFail,
  UnsubscribeCustomerCouponSuccess,
  UpdateNotificationPreferences,
  UpdateNotificationPreferencesFail,
  UpdateNotificationPreferencesSuccess,
  UpdateUserAddress,
  UpdateUserAddressFail,
  UpdateUserAddressSuccess,
  WITHDRAW_USER_CONSENT,
  WITHDRAW_USER_CONSENT_FAIL,
  WITHDRAW_USER_CONSENT_SUCCESS,
  WithdrawUserConsent,
  WithdrawUserConsentFail,
  WithdrawUserConsentSuccess
});
var AnonymousConsentTemplatesAdapter = class {
};
var AnonymousConsentTemplatesConnector = class _AnonymousConsentTemplatesConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  loadAnonymousConsentTemplates() {
    return this.adapter.loadAnonymousConsentTemplates();
  }
  loadAnonymousConsents() {
    return this.adapter.loadAnonymousConsents();
  }
  static {
    this.ɵfac = function AnonymousConsentTemplatesConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnonymousConsentTemplatesConnector)(ɵɵinject(AnonymousConsentTemplatesAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AnonymousConsentTemplatesConnector,
      factory: _AnonymousConsentTemplatesConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnonymousConsentTemplatesConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AnonymousConsentTemplatesAdapter
  }], null);
})();
var CmsComponentAdapter = class {
};
var CmsPageAdapter = class {
};
var CMS_PAGE_NORMALIZER = new InjectionToken("CmsPageNormalizer");
var JSP_INCLUDE_CMS_COMPONENT_TYPE = "JspIncludeComponent";
var CMS_FLEX_COMPONENT_TYPE = "CMSFlexComponent";
var SMART_EDIT_DUMMY_COMPONENT_TYPE = "SmartEditDummyCMSComponent";
var DeferLoadingStrategy;
(function(DeferLoadingStrategy2) {
  DeferLoadingStrategy2["DEFER"] = "DEFERRED-LOADING";
  DeferLoadingStrategy2["INSTANT"] = "INSTANT-LOADING";
})(DeferLoadingStrategy || (DeferLoadingStrategy = {}));
var CmsConfig = class _CmsConfig extends OccConfig {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵCmsConfig_BaseFactory;
      return function CmsConfig_Factory(__ngFactoryType__) {
        return (ɵCmsConfig_BaseFactory || (ɵCmsConfig_BaseFactory = ɵɵgetInheritedFactory(_CmsConfig)))(__ngFactoryType__ || _CmsConfig);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CmsConfig,
      factory: function CmsConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _CmsConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CmsConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var PageRobotsMeta;
(function(PageRobotsMeta2) {
  PageRobotsMeta2["INDEX"] = "INDEX";
  PageRobotsMeta2["NOINDEX"] = "NOINDEX";
  PageRobotsMeta2["FOLLOW"] = "FOLLOW";
  PageRobotsMeta2["NOFOLLOW"] = "NOFOLLOW";
})(PageRobotsMeta || (PageRobotsMeta = {}));
var Occ;
(function(Occ2) {
  let PageRobots;
  (function(PageRobots2) {
    PageRobots2["INDEX_FOLLOW"] = "INDEX_FOLLOW";
    PageRobots2["NOINDEX_FOLLOW"] = "NOINDEX_FOLLOW";
    PageRobots2["INDEX_NOFOLLOW"] = "INDEX_NOFOLLOW";
    PageRobots2["NOINDEX_NOFOLLOW"] = "NOINDEX_NOFOLLOW";
  })(PageRobots = Occ2.PageRobots || (Occ2.PageRobots = {}));
  let OrderEntryStatus;
  (function(OrderEntryStatus2) {
    OrderEntryStatus2["Success"] = "SUCCESS";
    OrderEntryStatus2["Info"] = "INFO";
    OrderEntryStatus2["Warning"] = "WARNING";
    OrderEntryStatus2["Error"] = "ERROR";
  })(OrderEntryStatus = Occ2.OrderEntryStatus || (Occ2.OrderEntryStatus = {}));
  let PriceType2;
  (function(PriceType3) {
    PriceType3["BUY"] = "BUY";
    PriceType3["FROM"] = "FROM";
  })(PriceType2 = Occ2.PriceType || (Occ2.PriceType = {}));
  let ImageType2;
  (function(ImageType3) {
    ImageType3["PRIMARY"] = "PRIMARY";
    ImageType3["GALLERY"] = "GALLERY";
  })(ImageType2 = Occ2.ImageType || (Occ2.ImageType = {}));
  let Fields;
  (function(Fields62) {
    Fields62["BASIC"] = "BASIC";
    Fields62["DEFAULT"] = "DEFAULT";
    Fields62["FULL"] = "FULL";
  })(Fields = Occ2.Fields || (Occ2.Fields = {}));
  let Fields1;
  (function(Fields110) {
    Fields110["BASIC"] = "BASIC";
    Fields110["DEFAULT"] = "DEFAULT";
    Fields110["FULL"] = "FULL";
  })(Fields1 = Occ2.Fields1 || (Occ2.Fields1 = {}));
  let Fields2;
  (function(Fields210) {
    Fields210["BASIC"] = "BASIC";
    Fields210["DEFAULT"] = "DEFAULT";
    Fields210["FULL"] = "FULL";
  })(Fields2 = Occ2.Fields2 || (Occ2.Fields2 = {}));
  let Fields3;
  (function(Fields310) {
    Fields310["BASIC"] = "BASIC";
    Fields310["DEFAULT"] = "DEFAULT";
    Fields310["FULL"] = "FULL";
  })(Fields3 = Occ2.Fields3 || (Occ2.Fields3 = {}));
  let Fields4;
  (function(Fields410) {
    Fields410["BASIC"] = "BASIC";
    Fields410["DEFAULT"] = "DEFAULT";
    Fields410["FULL"] = "FULL";
  })(Fields4 = Occ2.Fields4 || (Occ2.Fields4 = {}));
  let Fields5;
  (function(Fields510) {
    Fields510["BASIC"] = "BASIC";
    Fields510["DEFAULT"] = "DEFAULT";
    Fields510["FULL"] = "FULL";
  })(Fields5 = Occ2.Fields5 || (Occ2.Fields5 = {}));
  let Fields6;
  (function(Fields62) {
    Fields62["BASIC"] = "BASIC";
    Fields62["DEFAULT"] = "DEFAULT";
    Fields62["FULL"] = "FULL";
  })(Fields6 = Occ2.Fields6 || (Occ2.Fields6 = {}));
  let PageType2;
  (function(PageType3) {
    PageType3["CONTENT_PAGE"] = "ContentPage";
    PageType3["PRODUCT_PAGE"] = "ProductPage";
    PageType3["CATEGORY_PAGE"] = "CategoryPage";
    PageType3["CATALOG_PAGE"] = "CatalogPage";
  })(PageType2 = Occ2.PageType || (Occ2.PageType = {}));
  let Fields7;
  (function(Fields72) {
    Fields72["BASIC"] = "BASIC";
    Fields72["DEFAULT"] = "DEFAULT";
    Fields72["FULL"] = "FULL";
  })(Fields7 = Occ2.Fields7 || (Occ2.Fields7 = {}));
  let Fields8;
  (function(Fields82) {
    Fields82["BASIC"] = "BASIC";
    Fields82["DEFAULT"] = "DEFAULT";
    Fields82["FULL"] = "FULL";
  })(Fields8 = Occ2.Fields8 || (Occ2.Fields8 = {}));
  let Fields9;
  (function(Fields92) {
    Fields92["BASIC"] = "BASIC";
    Fields92["DEFAULT"] = "DEFAULT";
    Fields92["FULL"] = "FULL";
  })(Fields9 = Occ2.Fields9 || (Occ2.Fields9 = {}));
  let Fields10;
  (function(Fields102) {
    Fields102["BASIC"] = "BASIC";
    Fields102["DEFAULT"] = "DEFAULT";
    Fields102["FULL"] = "FULL";
  })(Fields10 = Occ2.Fields10 || (Occ2.Fields10 = {}));
  let Fields11;
  (function(Fields112) {
    Fields112["BASIC"] = "BASIC";
    Fields112["DEFAULT"] = "DEFAULT";
    Fields112["FULL"] = "FULL";
  })(Fields11 = Occ2.Fields11 || (Occ2.Fields11 = {}));
  let Fields12;
  (function(Fields122) {
    Fields122["BASIC"] = "BASIC";
    Fields122["DEFAULT"] = "DEFAULT";
    Fields122["FULL"] = "FULL";
  })(Fields12 = Occ2.Fields12 || (Occ2.Fields12 = {}));
  let Fields13;
  (function(Fields132) {
    Fields132["BASIC"] = "BASIC";
    Fields132["DEFAULT"] = "DEFAULT";
    Fields132["FULL"] = "FULL";
  })(Fields13 = Occ2.Fields13 || (Occ2.Fields13 = {}));
  let Fields14;
  (function(Fields142) {
    Fields142["BASIC"] = "BASIC";
    Fields142["DEFAULT"] = "DEFAULT";
    Fields142["FULL"] = "FULL";
  })(Fields14 = Occ2.Fields14 || (Occ2.Fields14 = {}));
  let Fields15;
  (function(Fields152) {
    Fields152["BASIC"] = "BASIC";
    Fields152["DEFAULT"] = "DEFAULT";
    Fields152["FULL"] = "FULL";
  })(Fields15 = Occ2.Fields15 || (Occ2.Fields15 = {}));
  let Fields16;
  (function(Fields162) {
    Fields162["BASIC"] = "BASIC";
    Fields162["DEFAULT"] = "DEFAULT";
    Fields162["FULL"] = "FULL";
  })(Fields16 = Occ2.Fields16 || (Occ2.Fields16 = {}));
  let SortEnum;
  (function(SortEnum2) {
    SortEnum2["BASIC"] = "BASIC";
    SortEnum2["DEFAULT"] = "DEFAULT";
    SortEnum2["FULL"] = "FULL";
  })(SortEnum = Occ2.SortEnum || (Occ2.SortEnum = {}));
  let Fields17;
  (function(Fields172) {
    Fields172["BASIC"] = "BASIC";
    Fields172["DEFAULT"] = "DEFAULT";
    Fields172["FULL"] = "FULL";
  })(Fields17 = Occ2.Fields17 || (Occ2.Fields17 = {}));
  let Fields18;
  (function(Fields182) {
    Fields182["BASIC"] = "BASIC";
    Fields182["DEFAULT"] = "DEFAULT";
    Fields182["FULL"] = "FULL";
  })(Fields18 = Occ2.Fields18 || (Occ2.Fields18 = {}));
  let Fields19;
  (function(Fields192) {
    Fields192["BASIC"] = "BASIC";
    Fields192["DEFAULT"] = "DEFAULT";
    Fields192["FULL"] = "FULL";
  })(Fields19 = Occ2.Fields19 || (Occ2.Fields19 = {}));
  let Fields20;
  (function(Fields202) {
    Fields202["BASIC"] = "BASIC";
    Fields202["DEFAULT"] = "DEFAULT";
    Fields202["FULL"] = "FULL";
  })(Fields20 = Occ2.Fields20 || (Occ2.Fields20 = {}));
  let Fields21;
  (function(Fields212) {
    Fields212["BASIC"] = "BASIC";
    Fields212["DEFAULT"] = "DEFAULT";
    Fields212["FULL"] = "FULL";
  })(Fields21 = Occ2.Fields21 || (Occ2.Fields21 = {}));
  let Fields22;
  (function(Fields222) {
    Fields222["BASIC"] = "BASIC";
    Fields222["DEFAULT"] = "DEFAULT";
    Fields222["FULL"] = "FULL";
  })(Fields22 = Occ2.Fields22 || (Occ2.Fields22 = {}));
  let Fields23;
  (function(Fields232) {
    Fields232["BASIC"] = "BASIC";
    Fields232["DEFAULT"] = "DEFAULT";
    Fields232["FULL"] = "FULL";
  })(Fields23 = Occ2.Fields23 || (Occ2.Fields23 = {}));
  let Fields24;
  (function(Fields242) {
    Fields242["BASIC"] = "BASIC";
    Fields242["DEFAULT"] = "DEFAULT";
    Fields242["FULL"] = "FULL";
  })(Fields24 = Occ2.Fields24 || (Occ2.Fields24 = {}));
  let Fields25;
  (function(Fields252) {
    Fields252["BASIC"] = "BASIC";
    Fields252["DEFAULT"] = "DEFAULT";
    Fields252["FULL"] = "FULL";
  })(Fields25 = Occ2.Fields25 || (Occ2.Fields25 = {}));
  let Fields26;
  (function(Fields262) {
    Fields262["BASIC"] = "BASIC";
    Fields262["DEFAULT"] = "DEFAULT";
    Fields262["FULL"] = "FULL";
  })(Fields26 = Occ2.Fields26 || (Occ2.Fields26 = {}));
  let Fields27;
  (function(Fields272) {
    Fields272["BASIC"] = "BASIC";
    Fields272["DEFAULT"] = "DEFAULT";
    Fields272["FULL"] = "FULL";
  })(Fields27 = Occ2.Fields27 || (Occ2.Fields27 = {}));
  let Fields28;
  (function(Fields282) {
    Fields282["BASIC"] = "BASIC";
    Fields282["DEFAULT"] = "DEFAULT";
    Fields282["FULL"] = "FULL";
  })(Fields28 = Occ2.Fields28 || (Occ2.Fields28 = {}));
  let Fields29;
  (function(Fields292) {
    Fields292["BASIC"] = "BASIC";
    Fields292["DEFAULT"] = "DEFAULT";
    Fields292["FULL"] = "FULL";
  })(Fields29 = Occ2.Fields29 || (Occ2.Fields29 = {}));
  let Fields30;
  (function(Fields302) {
    Fields302["BASIC"] = "BASIC";
    Fields302["DEFAULT"] = "DEFAULT";
    Fields302["FULL"] = "FULL";
  })(Fields30 = Occ2.Fields30 || (Occ2.Fields30 = {}));
  let Fields31;
  (function(Fields312) {
    Fields312["BASIC"] = "BASIC";
    Fields312["DEFAULT"] = "DEFAULT";
    Fields312["FULL"] = "FULL";
  })(Fields31 = Occ2.Fields31 || (Occ2.Fields31 = {}));
  let Fields32;
  (function(Fields322) {
    Fields322["BASIC"] = "BASIC";
    Fields322["DEFAULT"] = "DEFAULT";
    Fields322["FULL"] = "FULL";
  })(Fields32 = Occ2.Fields32 || (Occ2.Fields32 = {}));
  let Fields33;
  (function(Fields332) {
    Fields332["BASIC"] = "BASIC";
    Fields332["DEFAULT"] = "DEFAULT";
    Fields332["FULL"] = "FULL";
  })(Fields33 = Occ2.Fields33 || (Occ2.Fields33 = {}));
  let Fields34;
  (function(Fields342) {
    Fields342["BASIC"] = "BASIC";
    Fields342["DEFAULT"] = "DEFAULT";
    Fields342["FULL"] = "FULL";
  })(Fields34 = Occ2.Fields34 || (Occ2.Fields34 = {}));
  let Fields35;
  (function(Fields352) {
    Fields352["BASIC"] = "BASIC";
    Fields352["DEFAULT"] = "DEFAULT";
    Fields352["FULL"] = "FULL";
  })(Fields35 = Occ2.Fields35 || (Occ2.Fields35 = {}));
  let Fields36;
  (function(Fields362) {
    Fields362["BASIC"] = "BASIC";
    Fields362["DEFAULT"] = "DEFAULT";
    Fields362["FULL"] = "FULL";
  })(Fields36 = Occ2.Fields36 || (Occ2.Fields36 = {}));
  let Fields37;
  (function(Fields372) {
    Fields372["BASIC"] = "BASIC";
    Fields372["DEFAULT"] = "DEFAULT";
    Fields372["FULL"] = "FULL";
  })(Fields37 = Occ2.Fields37 || (Occ2.Fields37 = {}));
  let Fields38;
  (function(Fields382) {
    Fields382["BASIC"] = "BASIC";
    Fields382["DEFAULT"] = "DEFAULT";
    Fields382["FULL"] = "FULL";
  })(Fields38 = Occ2.Fields38 || (Occ2.Fields38 = {}));
  let Fields39;
  (function(Fields392) {
    Fields392["BASIC"] = "BASIC";
    Fields392["DEFAULT"] = "DEFAULT";
    Fields392["FULL"] = "FULL";
  })(Fields39 = Occ2.Fields39 || (Occ2.Fields39 = {}));
  let Fields40;
  (function(Fields402) {
    Fields402["BASIC"] = "BASIC";
    Fields402["DEFAULT"] = "DEFAULT";
    Fields402["FULL"] = "FULL";
  })(Fields40 = Occ2.Fields40 || (Occ2.Fields40 = {}));
  let Fields41;
  (function(Fields412) {
    Fields412["BASIC"] = "BASIC";
    Fields412["DEFAULT"] = "DEFAULT";
    Fields412["FULL"] = "FULL";
  })(Fields41 = Occ2.Fields41 || (Occ2.Fields41 = {}));
  let Fields42;
  (function(Fields422) {
    Fields422["BASIC"] = "BASIC";
    Fields422["DEFAULT"] = "DEFAULT";
    Fields422["FULL"] = "FULL";
  })(Fields42 = Occ2.Fields42 || (Occ2.Fields42 = {}));
  let Fields43;
  (function(Fields432) {
    Fields432["BASIC"] = "BASIC";
    Fields432["DEFAULT"] = "DEFAULT";
    Fields432["FULL"] = "FULL";
  })(Fields43 = Occ2.Fields43 || (Occ2.Fields43 = {}));
  let Fields44;
  (function(Fields442) {
    Fields442["BASIC"] = "BASIC";
    Fields442["DEFAULT"] = "DEFAULT";
    Fields442["FULL"] = "FULL";
  })(Fields44 = Occ2.Fields44 || (Occ2.Fields44 = {}));
  let Fields45;
  (function(Fields452) {
    Fields452["BASIC"] = "BASIC";
    Fields452["DEFAULT"] = "DEFAULT";
    Fields452["FULL"] = "FULL";
  })(Fields45 = Occ2.Fields45 || (Occ2.Fields45 = {}));
  let Fields46;
  (function(Fields462) {
    Fields462["BASIC"] = "BASIC";
    Fields462["DEFAULT"] = "DEFAULT";
    Fields462["FULL"] = "FULL";
  })(Fields46 = Occ2.Fields46 || (Occ2.Fields46 = {}));
  let Fields47;
  (function(Fields472) {
    Fields472["BASIC"] = "BASIC";
    Fields472["DEFAULT"] = "DEFAULT";
    Fields472["FULL"] = "FULL";
  })(Fields47 = Occ2.Fields47 || (Occ2.Fields47 = {}));
  let Fields48;
  (function(Fields482) {
    Fields482["BASIC"] = "BASIC";
    Fields482["DEFAULT"] = "DEFAULT";
    Fields482["FULL"] = "FULL";
  })(Fields48 = Occ2.Fields48 || (Occ2.Fields48 = {}));
  let Fields49;
  (function(Fields492) {
    Fields492["BASIC"] = "BASIC";
    Fields492["DEFAULT"] = "DEFAULT";
    Fields492["FULL"] = "FULL";
  })(Fields49 = Occ2.Fields49 || (Occ2.Fields49 = {}));
  let Fields50;
  (function(Fields502) {
    Fields502["BASIC"] = "BASIC";
    Fields502["DEFAULT"] = "DEFAULT";
    Fields502["FULL"] = "FULL";
  })(Fields50 = Occ2.Fields50 || (Occ2.Fields50 = {}));
  let Fields51;
  (function(Fields512) {
    Fields512["BASIC"] = "BASIC";
    Fields512["DEFAULT"] = "DEFAULT";
    Fields512["FULL"] = "FULL";
  })(Fields51 = Occ2.Fields51 || (Occ2.Fields51 = {}));
  let Fields52;
  (function(Fields522) {
    Fields522["BASIC"] = "BASIC";
    Fields522["DEFAULT"] = "DEFAULT";
    Fields522["FULL"] = "FULL";
  })(Fields52 = Occ2.Fields52 || (Occ2.Fields52 = {}));
  let Fields53;
  (function(Fields532) {
    Fields532["BASIC"] = "BASIC";
    Fields532["DEFAULT"] = "DEFAULT";
    Fields532["FULL"] = "FULL";
  })(Fields53 = Occ2.Fields53 || (Occ2.Fields53 = {}));
  let Fields54;
  (function(Fields542) {
    Fields542["BASIC"] = "BASIC";
    Fields542["DEFAULT"] = "DEFAULT";
    Fields542["FULL"] = "FULL";
  })(Fields54 = Occ2.Fields54 || (Occ2.Fields54 = {}));
  let Fields55;
  (function(Fields552) {
    Fields552["BASIC"] = "BASIC";
    Fields552["DEFAULT"] = "DEFAULT";
    Fields552["FULL"] = "FULL";
  })(Fields55 = Occ2.Fields55 || (Occ2.Fields55 = {}));
  let Fields56;
  (function(Fields562) {
    Fields562["BASIC"] = "BASIC";
    Fields562["DEFAULT"] = "DEFAULT";
    Fields562["FULL"] = "FULL";
  })(Fields56 = Occ2.Fields56 || (Occ2.Fields56 = {}));
  let Fields57;
  (function(Fields572) {
    Fields572["BASIC"] = "BASIC";
    Fields572["DEFAULT"] = "DEFAULT";
    Fields572["FULL"] = "FULL";
  })(Fields57 = Occ2.Fields57 || (Occ2.Fields57 = {}));
  let Fields58;
  (function(Fields582) {
    Fields582["BASIC"] = "BASIC";
    Fields582["DEFAULT"] = "DEFAULT";
    Fields582["FULL"] = "FULL";
  })(Fields58 = Occ2.Fields58 || (Occ2.Fields58 = {}));
  let Fields59;
  (function(Fields592) {
    Fields592["BASIC"] = "BASIC";
    Fields592["DEFAULT"] = "DEFAULT";
    Fields592["FULL"] = "FULL";
  })(Fields59 = Occ2.Fields59 || (Occ2.Fields59 = {}));
  let Fields60;
  (function(Fields602) {
    Fields602["BASIC"] = "BASIC";
    Fields602["DEFAULT"] = "DEFAULT";
    Fields602["FULL"] = "FULL";
  })(Fields60 = Occ2.Fields60 || (Occ2.Fields60 = {}));
  let Fields61;
  (function(Fields612) {
    Fields612["BASIC"] = "BASIC";
    Fields612["DEFAULT"] = "DEFAULT";
    Fields612["FULL"] = "FULL";
  })(Fields61 = Occ2.Fields61 || (Occ2.Fields61 = {}));
  let Type;
  (function(Type2) {
    Type2["All"] = "all";
    Type2["Product"] = "product";
    Type2["Order"] = "order";
  })(Type = Occ2.Type || (Occ2.Type = {}));
  let CONSENT_STATUS;
  (function(CONSENT_STATUS2) {
    CONSENT_STATUS2["ANONYMOUS_CONSENT_GIVEN"] = "GIVEN";
    CONSENT_STATUS2["ANONYMOUS_CONSENT_WITHDRAWN"] = "WITHDRAWN";
  })(CONSENT_STATUS = Occ2.CONSENT_STATUS || (Occ2.CONSENT_STATUS = {}));
  let NotificationType2;
  (function(NotificationType3) {
    NotificationType3["BACK_IN_STOCK"] = "BACK_IN_STOCK";
  })(NotificationType2 = Occ2.NotificationType || (Occ2.NotificationType = {}));
  let Period;
  (function(Period2) {
    Period2["DAY"] = "DAY";
    Period2["WEEK"] = "WEEK";
    Period2["MONTH"] = "MONTH";
    Period2["QUARTER"] = "QUARTER";
    Period2["YEAR"] = "YEAR";
  })(Period = Occ2.Period || (Occ2.Period = {}));
  let DaysOfWeek;
  (function(DaysOfWeek2) {
    DaysOfWeek2["MONDAY"] = "MONDAY";
    DaysOfWeek2["TUESDAY"] = "TUESDAY";
    DaysOfWeek2["WEDNESDAY"] = "WEDNESDAY";
    DaysOfWeek2["THURSDAY"] = "THURSDAY";
    DaysOfWeek2["FRIDAY"] = "FRIDAY";
    DaysOfWeek2["SATURDAY"] = "SATURDAY";
    DaysOfWeek2["SUNDAY"] = "SUNDAY";
  })(DaysOfWeek = Occ2.DaysOfWeek || (Occ2.DaysOfWeek = {}));
  let OrderApprovalDecisionValue;
  (function(OrderApprovalDecisionValue2) {
    OrderApprovalDecisionValue2["APPROVE"] = "APPROVE";
    OrderApprovalDecisionValue2["REJECT"] = "REJECT";
  })(OrderApprovalDecisionValue = Occ2.OrderApprovalDecisionValue || (Occ2.OrderApprovalDecisionValue = {}));
})(Occ || (Occ = {}));
var OccCmsPageNormalizer = class _OccCmsPageNormalizer {
  convert(source, target = {}) {
    this.normalizePageData(source, target);
    this.normalizePageSlotData(source, target);
    this.normalizePageComponentData(source, target);
    this.normalizeComponentData(source, target);
    return target;
  }
  /**
   * Converts the OCC cms page model to the `Page` in the `CmsStructureModel`.
   */
  normalizePageData(source, target) {
    if (!source) {
      return;
    }
    const page = {};
    if (source.name) {
      page.name = source.name;
    }
    if (source.typeCode) {
      page.type = source.typeCode;
    }
    if (source.label) {
      page.label = source.label;
    }
    if (source.template) {
      page.template = source.template;
    }
    if (source.uid) {
      page.pageId = source.uid;
    }
    if (source.title) {
      page.title = source.title;
    }
    if (source.description) {
      page.description = source.description;
    }
    if (source.properties) {
      page.properties = source.properties;
    }
    this.normalizeRobots(source, page);
    target.page = page;
  }
  /**
   * Adds a ContentSlotData for each page slot in the `CmsStructureModel`.
   */
  normalizePageSlotData(source, target) {
    if (!source?.contentSlots) {
      return;
    }
    if (source.contentSlots.contentSlot && !Array.isArray(source.contentSlots.contentSlot)) {
      source.contentSlots.contentSlot = [source.contentSlots.contentSlot];
    }
    target.page = target.page ?? {};
    target.page.slots = {};
    for (const slot of source.contentSlots.contentSlot ?? []) {
      if (slot.position) {
        target.page.slots[slot.position] = {};
        if (slot.properties) {
          target.page.slots[slot.position].properties = slot.properties;
        }
      }
    }
  }
  /**
   * Registers the `ContentSlotComponentData` for each component.
   */
  normalizePageComponentData(source, target) {
    if (!source?.contentSlots?.contentSlot) {
      return;
    }
    for (const slot of source.contentSlots.contentSlot) {
      if (Array.isArray(slot.components?.component)) {
        for (const component of slot.components?.component ?? []) {
          const comp = {
            uid: component.uid,
            typeCode: component.typeCode,
            flexType: this.getFlexTypeFromComponent(component),
            properties: this.getComponentProperties(component.properties)
          };
          if (slot.position) {
            const targetSlot = target.page?.slots?.[slot.position];
            if (targetSlot) {
              if (!targetSlot.components) {
                targetSlot.components = [];
              }
              targetSlot.components.push(comp);
            }
          }
        }
      }
    }
  }
  /**
   * Returns component properties if they exist
   */
  getComponentProperties(componentProperties) {
    return componentProperties ? componentProperties : void 0;
  }
  /**
   * Returns the flex type based on the configuration of component properties
   */
  getFlexTypeFromComponent(component) {
    if (component.typeCode === CMS_FLEX_COMPONENT_TYPE) {
      return component.flexType;
    } else if (component.typeCode === JSP_INCLUDE_CMS_COMPONENT_TYPE) {
      return component.uid;
    }
    return component.typeCode;
  }
  /**
   * Adds the actual component data whenever available in the CMS page data.
   *
   * If the data is not populated in this payload, it is loaded separately
   * (`OccCmsComponentAdapter`).
   */
  normalizeComponentData(source, target) {
    if (!source?.contentSlots?.contentSlot) {
      return;
    }
    for (const slot of source.contentSlots.contentSlot) {
      for (const component of slot.components?.component ?? []) {
        if (component.modifiedtime) {
          component.modifiedTime = component.modifiedtime;
          delete component.modifiedtime;
        }
        if (component.properties) {
          component.properties = void 0;
        }
        if (!target.components) {
          target.components = [];
        }
        target.components.push(component);
      }
    }
  }
  /**
   * Normalizes the page robot string to an array of `PageRobotsMeta` items.
   */
  normalizeRobots(source, target) {
    const robots = [];
    if (source.robotTag) {
      switch (source.robotTag) {
        case Occ.PageRobots.INDEX_FOLLOW:
          robots.push(PageRobotsMeta.INDEX);
          robots.push(PageRobotsMeta.FOLLOW);
          break;
        case Occ.PageRobots.NOINDEX_FOLLOW:
          robots.push(PageRobotsMeta.NOINDEX);
          robots.push(PageRobotsMeta.FOLLOW);
          break;
        case Occ.PageRobots.INDEX_NOFOLLOW:
          robots.push(PageRobotsMeta.INDEX);
          robots.push(PageRobotsMeta.NOFOLLOW);
          break;
        case Occ.PageRobots.NOINDEX_NOFOLLOW:
          robots.push(PageRobotsMeta.NOINDEX);
          robots.push(PageRobotsMeta.NOFOLLOW);
          break;
      }
    }
    target.robots = robots;
  }
  static {
    this.ɵfac = function OccCmsPageNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCmsPageNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCmsPageNormalizer,
      factory: _OccCmsPageNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCmsPageNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CMS_COMPONENT_NORMALIZER = new InjectionToken("CmsComponentNormalizer");
var OccCmsComponentAdapter = class _OccCmsComponentAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.userIdService = inject(UserIdService);
    this.featureConfigService = inject(FeatureConfigService);
    this.headers = new HttpHeaders().set("Content-Type", "application/json");
  }
  load(id, pageContext) {
    if (this.featureConfigService.isEnabled(USER_CMS_ENDPOINTS)) {
      return this.userIdService.getUserId().pipe(switchMap((userId) => {
        return this.http.get(this.getComponentEndPoint(id, pageContext, userId), {
          headers: this.headers
        });
      }), this.converter.pipeable(CMS_COMPONENT_NORMALIZER), take(1));
    }
    return this.http.get(this.getComponentEndPoint(id, pageContext), {
      headers: this.headers
    }).pipe(this.converter.pipeable(CMS_COMPONENT_NORMALIZER));
  }
  findComponentsByIds(ids, pageContext, fields = "DEFAULT", currentPage = 0, pageSize = ids.length, sort) {
    const requestParams = __spreadValues(__spreadValues({}, this.getContextParams(pageContext)), this.getPaginationParams(currentPage, pageSize, sort));
    requestParams["componentIds"] = ids.toString();
    if (this.featureConfigService.isEnabled(USER_CMS_ENDPOINTS)) {
      return this.userIdService.getUserId().pipe(switchMap((userId) => {
        return this.http.get(this.getComponentsEndpoint(requestParams, fields, userId), {
          headers: this.headers
        });
      }), map((componentList) => componentList.component ?? []), this.converter.pipeableMany(CMS_COMPONENT_NORMALIZER), take(1));
    }
    return this.http.get(this.getComponentsEndpoint(requestParams, fields), {
      headers: this.headers
    }).pipe(map((componentList) => componentList.component ?? []), this.converter.pipeableMany(CMS_COMPONENT_NORMALIZER));
  }
  getComponentEndPoint(id, pageContext, userId) {
    if (this.featureConfigService.isEnabled(USER_CMS_ENDPOINTS)) {
      const queryParams = this.getContextParams(pageContext);
      const attributes = userId ? {
        urlParams: {
          id,
          userId
        },
        queryParams
      } : {
        urlParams: {
          id
        },
        queryParams
      };
      return this.occEndpoints.buildUrl("component", attributes);
    }
    return this.occEndpoints.buildUrl("component", {
      urlParams: {
        id
      },
      queryParams: this.getContextParams(pageContext)
    });
  }
  getComponentsEndpoint(requestParams, fields, userId) {
    if (this.featureConfigService.isEnabled(USER_CMS_ENDPOINTS)) {
      const queryParams = __spreadValues({
        fields
      }, requestParams);
      const attributes = userId ? {
        urlParams: {
          userId
        },
        queryParams
      } : {
        queryParams
      };
      return this.occEndpoints.buildUrl("components", attributes);
    }
    return this.occEndpoints.buildUrl("components", {
      queryParams: __spreadValues({
        fields
      }, requestParams)
    });
  }
  getPaginationParams(currentPage, pageSize, sort) {
    const requestParams = {};
    if (currentPage !== void 0) {
      requestParams["currentPage"] = currentPage.toString();
    }
    if (pageSize !== void 0) {
      requestParams["pageSize"] = pageSize.toString();
    }
    if (sort !== void 0) {
      requestParams["sort"] = sort;
    }
    return requestParams;
  }
  getContextParams(pageContext) {
    let requestParams = {};
    switch (pageContext.type) {
      case PageType.PRODUCT_PAGE: {
        requestParams = {
          productCode: pageContext.id
        };
        break;
      }
      case PageType.CATEGORY_PAGE: {
        requestParams = {
          categoryCode: pageContext.id
        };
        break;
      }
      case PageType.CATALOG_PAGE: {
        requestParams = {
          catalogCode: pageContext.id
        };
        break;
      }
    }
    return requestParams;
  }
  static {
    this.ɵfac = function OccCmsComponentAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCmsComponentAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCmsComponentAdapter,
      factory: _OccCmsComponentAdapter.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCmsComponentAdapter, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var HOME_PAGE_CONTEXT = "__HOMEPAGE__";
var SMART_EDIT_CONTEXT = "smartedit-preview";
var PageContext = class {
  constructor(id, type) {
    this.id = id;
    this.type = type;
  }
};
var OccCmsPageAdapter = class _OccCmsPageAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.userIdService = inject(UserIdService);
    this.featureConfigService = inject(FeatureConfigService);
    this.headers = new HttpHeaders().set("Content-Type", "application/json");
  }
  /**
   * @override returns the OCC CMS page data for the given context and converts
   * the data by any configured `CMS_PAGE_NORMALIZER`.
   */
  load(pageContext) {
    const params = this.getPagesRequestParams(pageContext);
    if (this.featureConfigService.isEnabled(USER_CMS_ENDPOINTS)) {
      return this.userIdService.getUserId().pipe(switchMap((userId) => {
        const endpoint2 = !pageContext.type ? this.occEndpoints.buildUrl("page", {
          urlParams: {
            id: pageContext.id,
            userId
          }
        }) : this.occEndpoints.buildUrl("pages", {
          urlParams: {
            userId
          },
          queryParams: params
        });
        return this.http.get(endpoint2, {
          headers: this.headers
        });
      }), this.converter.pipeable(CMS_PAGE_NORMALIZER), take(1));
    }
    const endpoint = !pageContext.type ? this.occEndpoints.buildUrl("page", {
      urlParams: {
        id: pageContext.id
      }
    }) : this.occEndpoints.buildUrl("pages", {
      queryParams: params
    });
    return this.http.get(endpoint, {
      headers: this.headers
    }).pipe(this.converter.pipeable(CMS_PAGE_NORMALIZER));
  }
  /**
   * The OCC CMS API allows to query pages by a combination of pageType, label and code.
   *
   * When a `ContentPage` is requested, we use the `pageLabelOrId`:
   *
   * ```
   * "/pages?pageLabelOrId=/my-page&pageType=ContentPage"
   * ```
   *
   * Other pages are queried by code:
   *
   * ```
   * "/pages?code=1234&pageType=ProductPage"
   * ```
   *
   * The page context is ignored for a home page request or in case of a
   * `smartedit-preview` request.
   */
  getPagesRequestParams(context) {
    if (context.id === HOME_PAGE_CONTEXT || context.id === SMART_EDIT_CONTEXT) {
      return {};
    }
    const httpParams = {};
    if (context.type) {
      httpParams.pageType = context.type;
    }
    if (context.type === PageType.CONTENT_PAGE) {
      httpParams.pageLabelOrId = context.id;
    } else {
      httpParams.code = context.id;
    }
    return httpParams;
  }
  static {
    this.ɵfac = function OccCmsPageAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCmsPageAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCmsPageAdapter,
      factory: _OccCmsPageAdapter.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCmsPageAdapter, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var CmsOccModule = class _CmsOccModule {
  static {
    this.ɵfac = function CmsOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CmsOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CmsOccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: CmsPageAdapter,
        useExisting: OccCmsPageAdapter
      }, {
        provide: CMS_PAGE_NORMALIZER,
        useExisting: OccCmsPageNormalizer,
        multi: true
      }, {
        provide: CmsComponentAdapter,
        useExisting: OccCmsComponentAdapter
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CmsOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [{
        provide: CmsPageAdapter,
        useExisting: OccCmsPageAdapter
      }, {
        provide: CMS_PAGE_NORMALIZER,
        useExisting: OccCmsPageNormalizer,
        multi: true
      }, {
        provide: CmsComponentAdapter,
        useExisting: OccCmsComponentAdapter
      }]
    }]
  }], null, null);
})();
var LegacyOccCmsComponentAdapter = class _LegacyOccCmsComponentAdapter extends OccCmsComponentAdapter {
  findComponentsByIds(ids, pageContext, fields = "DEFAULT", currentPage = 0, pageSize = ids.length, sort) {
    const idList = {
      idList: ids
    };
    const requestParams = __spreadValues(__spreadValues({}, this.getContextParams(pageContext)), this.getPaginationParams(currentPage, pageSize, sort));
    return this.http.post(this.getComponentsEndpoint(requestParams, fields), idList, {
      headers: this.headers
    }).pipe(map((componentList) => componentList.component ?? []), this.converter.pipeableMany(CMS_COMPONENT_NORMALIZER));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵLegacyOccCmsComponentAdapter_BaseFactory;
      return function LegacyOccCmsComponentAdapter_Factory(__ngFactoryType__) {
        return (ɵLegacyOccCmsComponentAdapter_BaseFactory || (ɵLegacyOccCmsComponentAdapter_BaseFactory = ɵɵgetInheritedFactory(_LegacyOccCmsComponentAdapter)))(__ngFactoryType__ || _LegacyOccCmsComponentAdapter);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _LegacyOccCmsComponentAdapter,
      factory: _LegacyOccCmsComponentAdapter.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LegacyOccCmsComponentAdapter, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OccCostCenterNormalizer = class _OccCostCenterNormalizer {
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    target.active = this.normalizeBoolean(source.active);
    return target;
  }
  /**
   * Returns the boolean value for a string property that is supposed
   * to be of type boolean.
   */
  normalizeBoolean(property) {
    if (property === void 0) {
      return false;
    }
    return typeof property === "string" ? property === "true" : property;
  }
  static {
    this.ɵfac = function OccCostCenterNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCostCenterNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCostCenterNormalizer,
      factory: _OccCostCenterNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCostCenterNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OccCostCenterSerializer = class _OccCostCenterSerializer {
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    target.activeFlag = source.active;
    delete target.active;
    return target;
  }
  static {
    this.ɵfac = function OccCostCenterSerializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCostCenterSerializer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCostCenterSerializer,
      factory: _OccCostCenterSerializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCostCenterSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var COST_CENTER_NORMALIZER = new InjectionToken("CostCenterNormalizer");
var COST_CENTERS_NORMALIZER = new InjectionToken("CostCentersListNormalizer");
var COST_CENTER_SERIALIZER = new InjectionToken("CostCenterSerializer");
var OccCostCenterListNormalizer = class _OccCostCenterListNormalizer {
  constructor(converter) {
    this.converter = converter;
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    target.values = source.costCenters.map((costCenter) => __spreadValues({}, this.converter.convert(costCenter, COST_CENTER_NORMALIZER)));
    return target;
  }
  static {
    this.ɵfac = function OccCostCenterListNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCostCenterListNormalizer)(ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCostCenterListNormalizer,
      factory: _OccCostCenterListNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCostCenterListNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var defaultOccCostCentersConfig = {
  backend: {
    occ: {
      endpoints: {
        getActiveCostCenters: "/costcenters?fields=DEFAULT,unit(BASIC,addresses(DEFAULT))"
      }
    }
  }
};
var CostCenterOccModule = class _CostCenterOccModule {
  static {
    this.ɵfac = function CostCenterOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CostCenterOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CostCenterOccModule,
      imports: [CommonModule, ConfigModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: COST_CENTERS_NORMALIZER,
        useExisting: OccCostCenterListNormalizer,
        multi: true
      }, {
        provide: COST_CENTER_NORMALIZER,
        useExisting: OccCostCenterNormalizer,
        multi: true
      }, {
        provide: COST_CENTER_SERIALIZER,
        useExisting: OccCostCenterSerializer,
        multi: true
      }],
      imports: [CommonModule, ConfigModule.withConfig(defaultOccCostCentersConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ConfigModule.withConfig(defaultOccCostCentersConfig)],
      providers: [{
        provide: COST_CENTERS_NORMALIZER,
        useExisting: OccCostCenterListNormalizer,
        multi: true
      }, {
        provide: COST_CENTER_NORMALIZER,
        useExisting: OccCostCenterNormalizer,
        multi: true
      }, {
        provide: COST_CENTER_SERIALIZER,
        useExisting: OccCostCenterSerializer,
        multi: true
      }]
    }]
  }], null, null);
})();
var ProductImageNormalizer = class _ProductImageNormalizer {
  constructor(config) {
    this.config = config;
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    if (source.images) {
      target.images = this.normalize(source.images);
    }
    return target;
  }
  /**
   * @desc
   * Creates the image structure we'd like to have. Instead of
   * having a single list with all images despite type and format
   * we create a proper structure. With that we can do:
   * - images.primary.thumnail.url
   * - images.GALLERY[0].thumnail.url
   */
  normalize(source) {
    const images = {};
    if (source) {
      for (const image of source) {
        const isList = this.hasGalleryIndex(image);
        if (image.imageType) {
          if (!images.hasOwnProperty(image.imageType)) {
            images[image.imageType] = isList ? [] : {};
          }
          const imageContainer = this.getImageContainer(isList, images, image);
          const targetImage = __spreadValues({}, image);
          targetImage.url = this.normalizeImageUrl(targetImage.url ?? "");
          if (image.format) {
            imageContainer[image.format] = targetImage;
          }
        }
      }
    }
    return images;
  }
  getImageContainer(isList, images, image) {
    if (isList) {
      const imageGroups = this.getImageGroups(images, image);
      return imageGroups[image.galleryIndex];
    } else {
      return images[image.imageType];
    }
  }
  getImageGroups(images, image) {
    const imageGroups = images[image.imageType];
    if (!imageGroups[image.galleryIndex]) {
      imageGroups[image.galleryIndex] = {};
    }
    return imageGroups;
  }
  /**
   * Traditionally, in an on-prem world, medias and other backend related calls
   * are hosted at the same platform, but in a cloud setup, applications are are
   * typically distributed cross different environments. For media, we use the
   * `backend.media.baseUrl` by default, but fallback to `backend.occ.baseUrl`
   * if none provided.
   */
  normalizeImageUrl(url) {
    if (new RegExp(/^(http|data:image|\/\/)/i).test(url)) {
      return url;
    }
    return (this.config.backend?.media?.baseUrl || this.config.backend?.occ?.baseUrl || "") + url;
  }
  hasGalleryIndex(image) {
    const galleryIndex = image.galleryIndex ?? false;
    return galleryIndex !== false;
  }
  static {
    this.ɵfac = function ProductImageNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductImageNormalizer)(ɵɵinject(OccConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductImageNormalizer,
      factory: _ProductImageNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductImageNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OccConfig
  }], null);
})();
var ProductReferenceNormalizer = class _ProductReferenceNormalizer {
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    if (source.productReferences) {
      target.productReferences = this.normalize(source.productReferences);
    }
    return target;
  }
  /**
   * @desc
   * Creates the reference structure we'd like to have. Instead of
   * having a single list with all references we create a proper structure.
   * With that we have a semantic API for the clients
   * - product.references.SIMILAR[0].code
   */
  normalize(source) {
    const references = {};
    if (source) {
      for (const reference of source) {
        if (reference.referenceType) {
          if (!references.hasOwnProperty(reference.referenceType)) {
            references[reference.referenceType] = [];
          }
          references[reference.referenceType].push(reference);
        }
      }
    }
    return references;
  }
  static {
    this.ɵfac = function ProductReferenceNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductReferenceNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductReferenceNormalizer,
      factory: _ProductReferenceNormalizer.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductReferenceNormalizer, [{
    type: Injectable
  }], null, null);
})();
var PRODUCT_NORMALIZER = new InjectionToken("ProductNormalizer");
var OccProductSearchPageNormalizer = class _OccProductSearchPageNormalizer {
  constructor(converterService) {
    this.converterService = converterService;
    this.DEFAULT_TOP_VALUES = 6;
  }
  convert(source, target = {}) {
    target = __spreadValues(__spreadValues({}, target), source);
    this.normalizeFacets(target);
    if (source.products) {
      target.products = source.products.map((product) => this.converterService.convert(product, PRODUCT_NORMALIZER));
    }
    return target;
  }
  normalizeFacets(target) {
    this.normalizeFacetValues(target);
    this.normalizeUselessFacets(target);
  }
  /**
   * The (current) backend returns facets with values that do not contribute
   * to the facet navigation much, as the number in the result list will not get
   * behavior, see https://jira.hybris.com/browse/CS-427.
   *
   * As long as this is not in place, we manually filter the facet from the list;
   * any facet that does not have a count < the total results will be dropped from
   * the facets.
   */
  normalizeUselessFacets(target) {
    if (target.facets) {
      target.facets = target.facets.filter((facet) => {
        return !target.pagination || !target.pagination.totalResults || (!facet.hasOwnProperty("visible") || facet.visible) && facet.values && facet.values.find((value) => {
          return value.selected || (value.count ?? 0) < (target.pagination?.totalResults ?? 0);
        });
      });
    }
  }
  /*
   * In case there are so-called `topValues` given for the facet values,
   * values are obsolete.
   *
   * `topValues` is a feature in Adaptive Search which can limit a large
   * amount of facet values to a small set (5 by default). As long as the backend
   * provides all facet values AND topValues, we normalize the data to not bother
   * the UI with this specific feature.
   */
  normalizeFacetValues(target) {
    if (target.facets) {
      target.facets = target.facets.map((facetSource) => {
        const _a = facetSource, {
          topValues
        } = _a, facetTarget = __objRest(_a, [
          "topValues"
        ]);
        facetTarget.topValueCount = topValues && topValues.length > 0 ? topValues.length : this.DEFAULT_TOP_VALUES;
        return facetTarget;
      });
    }
  }
  static {
    this.ɵfac = function OccProductSearchPageNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccProductSearchPageNormalizer)(ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccProductSearchPageNormalizer,
      factory: _OccProductSearchPageNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccProductSearchPageNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var OccProductReferencesListNormalizer = class _OccProductReferencesListNormalizer {
  constructor(converter) {
    this.converter = converter;
  }
  convert(source, target = []) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    if (source && source.references) {
      target = source.references.map((reference) => __spreadProps(__spreadValues({}, reference), {
        target: this.converter.convert(reference.target, PRODUCT_NORMALIZER)
      }));
      return target;
    }
    return [];
  }
  static {
    this.ɵfac = function OccProductReferencesListNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccProductReferencesListNormalizer)(ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccProductReferencesListNormalizer,
      factory: _OccProductReferencesListNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccProductReferencesListNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var ProductNameNormalizer = class _ProductNameNormalizer {
  constructor(config) {
    this.config = config;
    this.reservedSlugCharacters = ` !*'();:@&=+$,/?%#[]`;
    this.slugChar = "-";
    this.slugRegex = new RegExp(`[${this.reservedSlugCharacters.split("").join("\\")}]`, "g");
    this.sanitizeMultipleSlugChars = new RegExp(`${this.slugChar}+`, "g");
  }
  convert(source, target) {
    target = target ?? __spreadValues({}, source);
    if (source.name) {
      target.name = this.normalize(source.name);
      target.slug = this.normalizeSlug(source.name);
      target.nameHtml = source.name;
    }
    return target;
  }
  /**
   * Sanitizes the name so that the name doesn't contain html elements.
   */
  normalize(name) {
    return name.replace(/<[^>]*>/g, "");
  }
  /**
   * Provides a title slug for the pretty URL.
   *
   * The name is sanitized from html, trimmed, converted to lowercase and special characters
   * which are encoded are replaced by the slug char (dash by default).
   */
  normalizeSlug(name) {
    return this.normalize(name).trim().toLowerCase().replace(this.slugRegex, this.slugChar).replace(this.sanitizeMultipleSlugChars, this.slugChar);
  }
  static {
    this.ɵfac = function ProductNameNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductNameNormalizer)(ɵɵinject(OccConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductNameNormalizer,
      factory: _ProductNameNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductNameNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OccConfig
  }], null);
})();
var PRODUCT_REFERENCES_NORMALIZER = new InjectionToken("ProductReferencesListNormalizer");
var OccProductReferencesAdapter = class _OccProductReferencesAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
  }
  load(productCode, referenceType, pageSize) {
    return this.http.get(this.getEndpoint(productCode, referenceType, pageSize)).pipe(this.converter.pipeable(PRODUCT_REFERENCES_NORMALIZER));
  }
  getEndpoint(code, reference, pageSize) {
    return this.occEndpoints.buildUrl("productReferences", {
      urlParams: {
        productCode: code
      },
      queryParams: {
        referenceType: reference,
        pageSize
      }
    });
  }
  static {
    this.ɵfac = function OccProductReferencesAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccProductReferencesAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccProductReferencesAdapter,
      factory: _OccProductReferencesAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccProductReferencesAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var PRODUCT_REVIEW_NORMALIZER = new InjectionToken("ProductReviewNormalizer");
var PRODUCT_REVIEW_SERIALIZER = new InjectionToken("ProductReviewSerializer");
var OccProductReviewsAdapter = class _OccProductReviewsAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
  }
  load(productCode, maxCount) {
    return this.http.get(this.getEndpoint(productCode, maxCount)).pipe(map((productResponse) => productResponse.reviews), map((reviews) => reviews ?? []), this.converter.pipeableMany(PRODUCT_REVIEW_NORMALIZER));
  }
  post(productCode, review) {
    review = this.converter.convert(review, PRODUCT_REVIEW_SERIALIZER);
    const headers2 = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    const body = new URLSearchParams();
    body.append("headline", review.headline);
    body.append("comment", review.comment);
    body.append("rating", review.rating.toString());
    body.append("alias", review.alias);
    return this.http.post(this.getEndpoint(productCode), body.toString(), {
      headers: headers2
    });
  }
  getEndpoint(code, maxCount) {
    return this.occEndpoints.buildUrl("productReviews", {
      urlParams: {
        productCode: code
      },
      queryParams: {
        maxCount
      }
    });
  }
  static {
    this.ɵfac = function OccProductReviewsAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccProductReviewsAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccProductReviewsAdapter,
      factory: _OccProductReviewsAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccProductReviewsAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var PRODUCT_SEARCH_PAGE_NORMALIZER = new InjectionToken("ProductSearchPageNormalizer");
var PRODUCT_SUGGESTION_NORMALIZER = new InjectionToken("ProductSuggestionNormalizer");
var OCC_HTTP_TOKEN = new HttpContextToken(() => ({}));
function mergeFields(fields) {
  const parsedFields = fields.map((f) => typeof f === "string" ? parseFields(f) : f);
  const mergedFields = optimizeFields(deepMerge({}, ...parsedFields));
  return stringifyFields(mergedFields);
}
function optimizeFields(fields = {}) {
  const keys = Object.keys(fields);
  if (keys.includes("FULL")) {
    delete fields["DEFAULT"];
    delete fields["BASIC"];
  } else if (keys.includes("DEFAULT")) {
    delete fields["BASIC"];
  }
  Object.keys(fields).forEach((key) => {
    fields[key] = optimizeFields(fields[key]);
  });
  return fields;
}
function parseFields(fields, startIndex = 0) {
  const parsedFields = {};
  let i = startIndex;
  while (i < fields.length) {
    if (fields[i] === ",") {
      if (i > startIndex) {
        parsedFields[fields.substring(startIndex, i)] = {};
      }
      startIndex = i + 1;
    } else if (fields[i] === "(") {
      const subFields = parseFields(fields, i + 1);
      if (!Array.isArray(subFields)) {
        return parsedFields;
      }
      parsedFields[fields.substring(startIndex, i)] = subFields[0];
      startIndex = subFields[1];
      i = startIndex - 1;
    } else if (fields[i] === ")") {
      if (i > startIndex) {
        parsedFields[fields.substring(startIndex, i)] = {};
      }
      return [parsedFields, i + 1];
    }
    i++;
  }
  if (startIndex < fields.length) {
    parsedFields[fields.substring(startIndex, i)] = {};
  }
  return parsedFields;
}
function stringifyFields(fields) {
  return Object.keys(fields).map((key) => {
    const subFields = stringifyFields(fields[key]);
    return subFields ? `${key}(${subFields})` : key;
  }).join(",");
}
function extractFields(data, fields) {
  const parsedFields = typeof fields === "string" ? parseFields(fields) : fields;
  return getObjectPart(data, parsedFields);
}
function getObjectPart(data, fields) {
  if (!isObject(data)) {
    return data;
  }
  const keys = Object.keys(fields);
  if (keys.length === 0 || // we should not extract parts of the object with ambiguous fields definitions
  keys.find((el) => el === "BASIC" || el === "DEFAULT" || el === "FULL")) {
    return data;
  }
  const result = {};
  keys.forEach((key) => {
    if (data.hasOwnProperty(key)) {
      result[key] = getObjectPart(data[key], fields[key]);
    }
  });
  return result;
}
var OCC_USER_ID_CONSTANTS = new InjectionToken("List of OCC constants that pass for user IDs.", {
  providedIn: "root",
  factory: () => OCC_USER_IDS
});
var OccProductSearchAdapter = class _OccProductSearchAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.router = inject(Router, {
      optional: true
    });
    this.winRef = inject(WindowRef);
    this.DEFAULT_SEARCH_CONFIG = {
      pageSize: 20
    };
  }
  search(query, searchConfig = this.DEFAULT_SEARCH_CONFIG, scope) {
    const context = new HttpContext().set(OCC_HTTP_TOKEN, {
      sendUserIdAsHeader: true
    });
    return this.http.get(this.getSearchEndpoint(query, searchConfig, scope), {
      context
    }).pipe(this.converter.pipeable(PRODUCT_SEARCH_PAGE_NORMALIZER), tap((productSearchPage) => {
      if (productSearchPage.keywordRedirectUrl) {
        const navigationData = this.parseUrlForNavigation(productSearchPage.keywordRedirectUrl);
        if (navigationData) {
          const [path, navigationExtras] = navigationData;
          this.router?.navigate(path, navigationExtras);
        }
      }
    }));
  }
  searchByCodes(codes, scope) {
    if (codes.length === 0) {
      return of({
        products: []
      });
    }
    const CHUNK_SIZE = 100;
    const codesChunks = [];
    for (let i = 0; i < codes.length; i += CHUNK_SIZE) {
      codesChunks.push(codes.slice(i, i + CHUNK_SIZE));
    }
    const chunksResults$ = codesChunks.map((codesChunk) => {
      const searchConfig = {
        filters: `code:${codesChunk.join(",")}`,
        pageSize: CHUNK_SIZE
      };
      return this.search("", searchConfig, scope).pipe(map((productSearchPage) => ({
        products: productSearchPage?.products ?? []
      })));
    });
    return forkJoin(chunksResults$).pipe(map((chunksResults) => ({
      products: chunksResults.flatMap((chunkResult) => chunkResult.products)
    })));
  }
  searchByCategory(category, scope) {
    return this.http.get(this.getSearchByCategoryEndpoint(category, scope)).pipe(this.converter.pipeable(PRODUCT_SEARCH_PAGE_NORMALIZER), map((productSearchPage) => ({
      products: productSearchPage.products ?? []
    })));
  }
  loadSuggestions(term, pageSize = 3) {
    return this.http.get(this.getSuggestionEndpoint(term, pageSize.toString())).pipe(map((suggestionsList) => suggestionsList.suggestions ?? []), this.converter.pipeableMany(PRODUCT_SUGGESTION_NORMALIZER));
  }
  getSearchByCategoryEndpoint(categoryCode, scope) {
    return this.occEndpoints.buildUrl("productSearchByCategory", {
      urlParams: {
        categoryCode
      },
      scope
    });
  }
  getSearchEndpoint(query, searchConfig, scope) {
    return this.occEndpoints.buildUrl("productSearch", {
      queryParams: __spreadValues({
        query
      }, searchConfig),
      scope
    });
  }
  getSuggestionEndpoint(term, max) {
    return this.occEndpoints.buildUrl("productSuggestions", {
      queryParams: {
        term,
        max
      }
    });
  }
  parseUrlForNavigation(url) {
    let urlObj;
    const HTTP_PROTOCOL_REGEX = /^https?:\/\//i;
    try {
      urlObj = HTTP_PROTOCOL_REGEX.test(url) ? new URL(url) : new URL(url, this.winRef.location.origin);
    } catch (error) {
      return null;
    }
    const {
      queryParams,
      fragment
    } = this.router?.parseUrl(urlObj.pathname + urlObj.search + urlObj.hash) ?? {};
    const path = urlObj.pathname.split("/").filter(Boolean);
    const navigationExtras = {};
    if (queryParams) {
      navigationExtras.queryParams = queryParams;
    }
    if (fragment) {
      navigationExtras.fragment = fragment;
    }
    return [path, navigationExtras];
  }
  static {
    this.ɵfac = function OccProductSearchAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccProductSearchAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccProductSearchAdapter,
      factory: _OccProductSearchAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccProductSearchAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccFieldsService = class _OccFieldsService {
  constructor(http) {
    this.http = http;
    this.FIELDS_PARAM = "fields";
  }
  /**
   * Merge similar occ endpoints calls by merging fields parameter
   *
   * We assume that different scopes are defined by different fields parameters,
   * so we are grouping all requests with the same urls (except fields definition)
   * and merging into one request with fields that will satisfy all separate ones.
   *
   * @param models
   */
  getOptimalUrlGroups(models) {
    const groupedByUrls = {};
    for (const model of models) {
      const [urlPart, fields] = this.splitFields(model.url ?? "");
      if (!groupedByUrls[urlPart]) {
        groupedByUrls[urlPart] = {};
      }
      model.fields = fields ? parseFields(fields) : {};
      if (model.scopedData.scope !== void 0) {
        groupedByUrls[urlPart][model.scopedData.scope] = model;
      }
    }
    const mergedUrls = {};
    for (const [url, group] of Object.entries(groupedByUrls)) {
      const urlWithFields = this.getUrlWithFields(url, Object.values(group).map((lo) => lo.fields));
      mergedUrls[urlWithFields] = group;
    }
    return mergedUrls;
  }
  /**
   * Extract fields parameter from occ endpoint url
   *
   * @param urlWithFields
   */
  splitFields(urlWithFields) {
    const [url, params] = urlWithFields.split("?");
    const paramsMap = {};
    if (params) {
      params.split("&").forEach((param) => {
        const keyValue = param.split("=");
        paramsMap[keyValue[0]] = keyValue[1];
      });
    }
    const nonFieldsParams = Object.keys(paramsMap).sort().reduce((id, par) => {
      if (par !== this.FIELDS_PARAM) {
        id.push(paramsMap[par] ? `${par}=${paramsMap[par]}` : par);
      }
      return id;
    }, []);
    const nonFields = nonFieldsParams.join("&");
    return [nonFields ? `${url}?${nonFields}` : url, paramsMap[this.FIELDS_PARAM]];
  }
  /**
   * Combine url with field parameters
   *
   * @param url
   * @param fields
   */
  getUrlWithFields(url, fields) {
    const mergedFields = mergeFields(fields);
    if (mergedFields) {
      url += url.includes("?") ? "&" : "?";
      url += `${this.FIELDS_PARAM}=${mergedFields}`;
    }
    return url;
  }
  static {
    this.ɵfac = function OccFieldsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccFieldsService)(ɵɵinject(HttpClient));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccFieldsService,
      factory: _OccFieldsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccFieldsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }], null);
})();
var OccRequestsOptimizerService = class _OccRequestsOptimizerService {
  constructor(http, occFields) {
    this.http = http;
    this.occFields = occFields;
  }
  /**
   * Optimize occ endpoint calls merging requests to the same url by merging field parameters
   *
   * @param scopedDataWithUrls
   * @param dataFactory
   */
  scopedDataLoad(scopedDataWithUrls, dataFactory) {
    const result = [];
    if (!dataFactory) {
      dataFactory = (url) => this.http.get(url);
    }
    const mergedUrls = this.occFields.getOptimalUrlGroups(scopedDataWithUrls);
    Object.entries(mergedUrls).forEach(([url, groupedModelsSet]) => {
      const groupedModels = Object.values(groupedModelsSet);
      if (groupedModels.length === 1) {
        result.push(__spreadProps(__spreadValues({}, groupedModels[0].scopedData), {
          data$: dataFactory?.(url)
        }));
      } else {
        const data$ = dataFactory?.(url).pipe(shareReplay(1));
        groupedModels.forEach((modelData) => {
          result.push(__spreadProps(__spreadValues({}, modelData.scopedData), {
            data$: data$?.pipe(map((data) => extractFields(data, modelData.fields)))
          }));
        });
      }
    });
    return result;
  }
  static {
    this.ɵfac = function OccRequestsOptimizerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccRequestsOptimizerService)(ɵɵinject(HttpClient), ɵɵinject(OccFieldsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccRequestsOptimizerService,
      factory: _OccRequestsOptimizerService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccRequestsOptimizerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }, {
    type: OccFieldsService
  }], null);
})();
var OccProductAdapter = class _OccProductAdapter {
  constructor(http, occEndpoints, converter, requestsOptimizer) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.requestsOptimizer = requestsOptimizer;
  }
  load(productCode, scope) {
    return this.http.get(this.getEndpoint(productCode, scope)).pipe(this.converter.pipeable(PRODUCT_NORMALIZER));
  }
  loadMany(products) {
    const scopedDataWithUrls = products.map((model) => ({
      scopedData: model,
      url: this.getEndpoint(model.code, model.scope)
    }));
    return this.requestsOptimizer.scopedDataLoad(scopedDataWithUrls).map((scopedProduct) => __spreadProps(__spreadValues({}, scopedProduct), {
      data$: scopedProduct.data$?.pipe(this.converter.pipeable(PRODUCT_NORMALIZER))
    }));
  }
  getEndpoint(code, scope) {
    return this.occEndpoints.buildUrl("product", {
      urlParams: {
        productCode: code
      },
      scope
    });
  }
  static {
    this.ɵfac = function OccProductAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccProductAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService), ɵɵinject(OccRequestsOptimizerService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccProductAdapter,
      factory: _OccProductAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccProductAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }, {
    type: OccRequestsOptimizerService
  }], null);
})();
var ProductAdapter = class {
};
var ProductAvailabilityAdapter = class {
};
var ProductReferencesAdapter = class {
};
var ProductReviewsAdapter = class {
};
var ProductSearchAdapter = class {
};
var ProductScope;
(function(ProductScope2) {
  ProductScope2["LIST"] = "list";
  ProductScope2["DETAILS"] = "details";
  ProductScope2["ATTRIBUTES"] = "attributes";
  ProductScope2["VARIANTS"] = "variants";
  ProductScope2["CODE"] = "code";
  ProductScope2["PRICE"] = "price";
  ProductScope2["STOCK"] = "stock";
  ProductScope2["UNIT"] = "unit";
  ProductScope2["PROMOTIONS"] = "promotions";
  ProductScope2["LIST_ITEM"] = "list_item";
  ProductScope2["MULTI_DIMENSIONAL"] = "multi_dimensional";
  ProductScope2["MULTI_DIMENSIONAL_AVAILABILITY"] = "multi_dimensional_availability";
})(ProductScope || (ProductScope = {}));
var defaultOccProductConfig = {
  backend: {
    occ: {
      endpoints: {
        product: {
          default: "products/${productCode}?fields=DEFAULT,averageRating,images(FULL),classifications,manufacturer,numberOfReviews,categories(FULL),baseOptions,baseProduct,variantOptions,variantType",
          list: "products/${productCode}?fields=code,purchasable,name,summary,price(formattedValue),images(DEFAULT,galleryIndex),baseProduct",
          details: "products/${productCode}?fields=averageRating,stock(DEFAULT),description,availableForPickup,code,url,price(DEFAULT),numberOfReviews,manufacturer,categories(FULL),priceRange,multidimensional,tags,images(FULL)",
          promotions: "products/${productCode}?fields=potentialPromotions(description)",
          attributes: "products/${productCode}?fields=classifications",
          price: "products/${productCode}?fields=price(formattedValue)",
          stock: "products/${productCode}?fields=stock(DEFAULT)",
          unit: "products/${productCode}?fields=sapUnit",
          list_item: "products/${productCode}?fields=code,name,price(formattedValue),images(DEFAULT),baseProduct"
        },
        productAvailabilities: "productAvailabilities?filters=${productCode}:${unitSapCode}",
        productReviews: "products/${productCode}/reviews",
        // Uncomment this when occ gets configured
        // productReferences:
        //   'products/${productCode}/references?fields=DEFAULT,references(target(images(FULL)))&referenceType=${referenceType}',
        productReferences: "products/${productCode}/references?fields=DEFAULT,references(target(images(FULL)))",
        /* eslint-disable max-len */
        productSearch: {
          default: "products/search?fields=products(code,name,summary,configurable,configuratorType,multidimensional,price(FULL),images(DEFAULT),stock(FULL),averageRating,variantOptions,baseProduct,priceRange(maxPrice(formattedValue),minPrice(formattedValue))),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch,currentQuery,keywordRedirectUrl",
          carousel: "products/search?fields=products(code,purchasable,name,summary,price(formattedValue),stock(DEFAULT),images(DEFAULT,galleryIndex),baseProduct)",
          carouselMinimal: "products/search?fields=products(code,name,price(formattedValue),images(DEFAULT),baseProduct)"
        },
        productSearchByCategory: {
          default: "categories/${categoryCode}/products?fields=DEFAULT",
          code: "categories/${categoryCode}/products?fields=products(code)"
        },
        /* eslint-enable */
        productSuggestions: "products/suggestions"
      }
    },
    loadingScopes: {
      product: {
        details: {
          include: [ProductScope.LIST, ProductScope.VARIANTS]
        }
      }
    }
  }
};
var OccProductAvailabilityAdapter = class _OccProductAvailabilityAdapter {
  constructor() {
    this.http = inject(HttpClient);
    this.occEndpoints = inject(OccEndpointsService);
  }
  loadRealTimeStock(productCode, unitSapCode) {
    const availabilityUrl = this.occEndpoints.buildUrl("productAvailabilities", {
      urlParams: {
        productCode,
        unitSapCode
      }
    });
    return this.http.get(availabilityUrl).pipe(take(1), map((availabilities) => availabilities?.availabilityItems?.[0]?.unitAvailabilities?.[0] || {}), catchError(() => {
      return of({});
    }));
  }
  static {
    this.ɵfac = function OccProductAvailabilityAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccProductAvailabilityAdapter)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccProductAvailabilityAdapter,
      factory: _OccProductAvailabilityAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccProductAvailabilityAdapter, [{
    type: Injectable
  }], null, null);
})();
var ProductOccModule = class _ProductOccModule {
  static {
    this.ɵfac = function ProductOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductOccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccProductConfig), {
        provide: ProductAdapter,
        useClass: OccProductAdapter
      }, {
        provide: ProductAvailabilityAdapter,
        useClass: OccProductAvailabilityAdapter
      }, {
        provide: PRODUCT_NORMALIZER,
        useExisting: ProductImageNormalizer,
        multi: true
      }, {
        provide: PRODUCT_NORMALIZER,
        useExisting: ProductNameNormalizer,
        multi: true
      }, {
        provide: ProductReferencesAdapter,
        useClass: OccProductReferencesAdapter
      }, {
        provide: PRODUCT_REFERENCES_NORMALIZER,
        useExisting: OccProductReferencesListNormalizer,
        multi: true
      }, {
        provide: ProductSearchAdapter,
        useClass: OccProductSearchAdapter
      }, {
        provide: PRODUCT_SEARCH_PAGE_NORMALIZER,
        useExisting: OccProductSearchPageNormalizer,
        multi: true
      }, {
        provide: ProductReviewsAdapter,
        useClass: OccProductReviewsAdapter
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccProductConfig), {
        provide: ProductAdapter,
        useClass: OccProductAdapter
      }, {
        provide: ProductAvailabilityAdapter,
        useClass: OccProductAvailabilityAdapter
      }, {
        provide: PRODUCT_NORMALIZER,
        useExisting: ProductImageNormalizer,
        multi: true
      }, {
        provide: PRODUCT_NORMALIZER,
        useExisting: ProductNameNormalizer,
        multi: true
      }, {
        provide: ProductReferencesAdapter,
        useClass: OccProductReferencesAdapter
      }, {
        provide: PRODUCT_REFERENCES_NORMALIZER,
        useExisting: OccProductReferencesListNormalizer,
        multi: true
      }, {
        provide: ProductSearchAdapter,
        useClass: OccProductSearchAdapter
      }, {
        provide: PRODUCT_SEARCH_PAGE_NORMALIZER,
        useExisting: OccProductSearchPageNormalizer,
        multi: true
      }, {
        provide: ProductReviewsAdapter,
        useClass: OccProductReviewsAdapter
      }]
    }]
  }], null, null);
})();
var BaseSiteNormalizer = class _BaseSiteNormalizer {
  constructor() {
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    target.baseStore = source.stores?.[0];
    delete target.stores;
    return target;
  }
  static {
    this.ɵfac = function BaseSiteNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseSiteNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BaseSiteNormalizer,
      factory: _BaseSiteNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseSiteNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var LANGUAGE_NORMALIZER = new InjectionToken("LanguageNormalizer");
var CURRENCY_NORMALIZER = new InjectionToken("CurrencyNormalizer");
var COUNTRY_NORMALIZER = new InjectionToken("CountryNormalizer");
var REGION_NORMALIZER = new InjectionToken("RegionNormalizer");
var BASE_SITE_NORMALIZER = new InjectionToken("BaseSiteNormalizer");
var OccSiteAdapter = class _OccSiteAdapter {
  constructor(http, occEndpointsService, converterService) {
    this.http = http;
    this.occEndpointsService = occEndpointsService;
    this.converterService = converterService;
  }
  loadLanguages() {
    return this.http.get(this.occEndpointsService.buildUrl("languages")).pipe(map((languageList) => languageList.languages ?? []), this.converterService.pipeableMany(LANGUAGE_NORMALIZER));
  }
  loadCurrencies() {
    return this.http.get(this.occEndpointsService.buildUrl("currencies")).pipe(map((currencyList) => currencyList.currencies ?? []), this.converterService.pipeableMany(CURRENCY_NORMALIZER));
  }
  loadCountries(type) {
    return this.http.get(this.occEndpointsService.buildUrl("countries", {
      queryParams: type ? {
        type
      } : void 0
    })).pipe(map((countryList) => countryList.countries ?? []), this.converterService.pipeableMany(COUNTRY_NORMALIZER));
  }
  loadRegions(countryIsoCode) {
    return this.http.get(this.occEndpointsService.buildUrl("regions", {
      urlParams: {
        isoCode: countryIsoCode
      }
    })).pipe(map((regionList) => regionList.regions ?? []), this.converterService.pipeableMany(REGION_NORMALIZER));
  }
  /**
   * There is no OCC API to load one site based on Uid.
   * So, we have to load all sites, and find the one from the list.
   */
  loadBaseSite(siteUid) {
    if (!siteUid) {
      const baseUrl = this.occEndpointsService.getBaseUrl();
      const urlSplits = baseUrl.split("/");
      siteUid = urlSplits.pop();
    }
    return this.http.get(this.occEndpointsService.buildUrl("baseSites", {}, {
      baseSite: false
    })).pipe(map((siteList) => {
      return siteList.baseSites.find((site) => site.uid === siteUid);
    }));
  }
  loadBaseSites() {
    return this.http.get(this.occEndpointsService.buildUrl("baseSites", {}, {
      baseSite: false
    })).pipe(map((baseSiteList) => baseSiteList.baseSites), this.converterService.pipeableMany(BASE_SITE_NORMALIZER));
  }
  static {
    this.ɵfac = function OccSiteAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccSiteAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccSiteAdapter,
      factory: _OccSiteAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccSiteAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var SiteAdapter = class {
};
var defaultOccSiteContextConfig = {
  backend: {
    occ: {
      endpoints: {
        languages: "languages",
        currencies: "currencies",
        countries: "countries",
        regions: "countries/${isoCode}/regions?fields=regions(name,isocode,isocodeShort)",
        baseSites: "basesites?fields=FULL"
      }
    }
  }
};
var LanguageService = class _LanguageService {
  constructor(store, config) {
    this.store = store;
    this.config = config;
  }
  /**
   * Represents all the languages supported by the current store.
   */
  getAll() {
    return this.store.pipe(select(getAllLanguages), tap((languages) => {
      if (!languages) {
        this.store.dispatch(new LoadLanguages());
      }
    }), filter(isNotNullable));
  }
  /**
   * Represents the isocode of the active language.
   */
  getActive() {
    return this.store.pipe(select(getActiveLanguage), filter(isNotNullable));
  }
  /**
   * Sets the active language.
   */
  setActive(isocode) {
    this.store.pipe(select(getActiveLanguage), take(1)).subscribe((activeLanguage) => {
      if (activeLanguage !== isocode && this.isValid(isocode)) {
        this.store.dispatch(new SetActiveLanguage(isocode));
      }
    });
  }
  /**
   * Tells whether the value of the active language has been already initialized
   */
  isInitialized() {
    let valueInitialized = false;
    this.getActive().subscribe(() => valueInitialized = true).unsubscribe();
    return valueInitialized;
  }
  /**
   * Tells whether the given iso code is allowed.
   *
   * The list of allowed iso codes can be configured in the `context` config of Spartacus.
   */
  isValid(value) {
    return !!value && getContextParameterValues(this.config, LANGUAGE_CONTEXT_ID).includes(value);
  }
  static {
    this.ɵfac = function LanguageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LanguageService)(ɵɵinject(Store), ɵɵinject(SiteContextConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _LanguageService,
      factory: _LanguageService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageService, [{
    type: Injectable
  }], () => [{
    type: Store
  }, {
    type: SiteContextConfig
  }], null);
})();
var CurrencyService = class _CurrencyService {
  constructor(store, config) {
    this.store = store;
    this.config = config;
  }
  /**
   * Represents all the currencies supported by the current store.
   */
  getAll() {
    return this.store.pipe(select(getAllCurrencies), tap((currencies) => {
      if (!currencies) {
        this.store.dispatch(new LoadCurrencies());
      }
    }), filter(isNotNullable));
  }
  /**
   * Represents the isocode of the active currency.
   */
  getActive() {
    return this.store.pipe(select(getActiveCurrency), filter(isNotNullable));
  }
  /**
   * Sets the active language.
   */
  setActive(isocode) {
    this.store.pipe(select(getActiveCurrency), take(1)).subscribe((activeCurrency) => {
      if (activeCurrency !== isocode && this.isValid(isocode)) {
        this.store.dispatch(new SetActiveCurrency(isocode));
      }
    });
  }
  /**
   * Tells whether the value of the active currency has been already initialized
   */
  isInitialized() {
    let valueInitialized = false;
    this.getActive().subscribe(() => valueInitialized = true).unsubscribe();
    return valueInitialized;
  }
  /**
   * Tells whether the given iso code is allowed.
   *
   * The list of allowed iso codes can be configured in the `context` config of Spartacus.
   */
  isValid(value) {
    return !!value && getContextParameterValues(this.config, CURRENCY_CONTEXT_ID).includes(value);
  }
  static {
    this.ɵfac = function CurrencyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CurrencyService)(ɵɵinject(Store), ɵɵinject(SiteContextConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CurrencyService,
      factory: _CurrencyService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrencyService, [{
    type: Injectable
  }], () => [{
    type: Store
  }, {
    type: SiteContextConfig
  }], null);
})();
var SiteContextInterceptor = class _SiteContextInterceptor {
  constructor(languageService, currencyService, occEndpoints, config) {
    this.languageService = languageService;
    this.currencyService = currencyService;
    this.occEndpoints = occEndpoints;
    this.config = config;
    this.activeLang = getContextParameterDefault(this.config, LANGUAGE_CONTEXT_ID);
    this.activeCurr = getContextParameterDefault(this.config, CURRENCY_CONTEXT_ID);
    this.languageService.getActive().subscribe((data) => this.activeLang = data);
    this.currencyService.getActive().subscribe((data) => {
      this.activeCurr = data;
    });
  }
  intercept(request3, next) {
    if (request3.url.includes(this.occEndpoints.getBaseUrl())) {
      request3 = request3.clone({
        setParams: {
          lang: this.activeLang ?? "",
          curr: this.activeCurr ?? ""
        }
      });
    }
    return next.handle(request3);
  }
  static {
    this.ɵfac = function SiteContextInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteContextInterceptor)(ɵɵinject(LanguageService), ɵɵinject(CurrencyService), ɵɵinject(OccEndpointsService), ɵɵinject(SiteContextConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SiteContextInterceptor,
      factory: _SiteContextInterceptor.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteContextInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: LanguageService
  }, {
    type: CurrencyService
  }, {
    type: OccEndpointsService
  }, {
    type: SiteContextConfig
  }], null);
})();
var SiteContextOccModule = class _SiteContextOccModule {
  static {
    this.ɵfac = function SiteContextOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteContextOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SiteContextOccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccSiteContextConfig), {
        provide: SiteAdapter,
        useClass: OccSiteAdapter
      }, {
        provide: HTTP_INTERCEPTORS,
        useExisting: SiteContextInterceptor,
        multi: true
      }, {
        provide: BASE_SITE_NORMALIZER,
        useExisting: BaseSiteNormalizer,
        multi: true
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteContextOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccSiteContextConfig), {
        provide: SiteAdapter,
        useClass: OccSiteAdapter
      }, {
        provide: HTTP_INTERCEPTORS,
        useExisting: SiteContextInterceptor,
        multi: true
      }, {
        provide: BASE_SITE_NORMALIZER,
        useExisting: BaseSiteNormalizer,
        multi: true
      }]
    }]
  }], null, null);
})();
var AnonymousConsentNormalizer = class _AnonymousConsentNormalizer {
  constructor(anonymousConsentsService) {
    this.anonymousConsentsService = anonymousConsentsService;
  }
  convert(source) {
    return this.anonymousConsentsService.decodeAndDeserialize(source);
  }
  static {
    this.ɵfac = function AnonymousConsentNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnonymousConsentNormalizer)(ɵɵinject(AnonymousConsentsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AnonymousConsentNormalizer,
      factory: _AnonymousConsentNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnonymousConsentNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AnonymousConsentsService
  }], null);
})();
var OccUserInterestsNormalizer = class _OccUserInterestsNormalizer {
  constructor(converter) {
    this.converter = converter;
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    if (source && source.results) {
      target.results = source.results.map((result) => __spreadProps(__spreadValues({}, result), {
        product: this.converter.convert(result.product, PRODUCT_NORMALIZER)
      }));
    }
    return target;
  }
  static {
    this.ɵfac = function OccUserInterestsNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccUserInterestsNormalizer)(ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccUserInterestsNormalizer,
      factory: _OccUserInterestsNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccUserInterestsNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var ANONYMOUS_CONSENT_NORMALIZER = new InjectionToken("AnonymousConsentNormalizer");
var CONSENT_TEMPLATE_NORMALIZER = new InjectionToken("ConsentTemplateNormalizer");
var OccAnonymousConsentTemplatesAdapter = class _OccAnonymousConsentTemplatesAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  loadAnonymousConsentTemplates() {
    const url = this.occEndpoints.buildUrl("anonymousConsentTemplates");
    return this.http.get(url).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), map((consentList) => consentList.consentTemplates ?? []), this.converter.pipeableMany(CONSENT_TEMPLATE_NORMALIZER));
  }
  loadAnonymousConsents() {
    const url = this.occEndpoints.buildUrl("anonymousConsentTemplates");
    return this.http.head(url, {
      observe: "response"
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), map((response) => response.headers.get(ANONYMOUS_CONSENTS_HEADER) ?? ""), this.converter.pipeable(ANONYMOUS_CONSENT_NORMALIZER));
  }
  static {
    this.ɵfac = function OccAnonymousConsentTemplatesAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccAnonymousConsentTemplatesAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccAnonymousConsentTemplatesAdapter,
      factory: _OccAnonymousConsentTemplatesAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccAnonymousConsentTemplatesAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var CUSTOMER_COUPON_SEARCH_RESULT_NORMALIZER = new InjectionToken("CustomerCouponSearchResultNormalizer");
var OccCustomerCouponAdapter = class _OccCustomerCouponAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
  }
  getCustomerCoupons(userId, pageSize, currentPage, sort) {
    if (userId === OCC_USER_ID_ANONYMOUS) {
      return of({});
    }
    const url = this.occEndpoints.buildUrl("customerCoupons", {
      urlParams: {
        userId
      }
    });
    let params = new HttpParams().set("sort", sort ? sort : "startDate:asc");
    if (pageSize) {
      params = params.set("pageSize", pageSize.toString());
    }
    if (currentPage) {
      params = params.set("currentPage", currentPage.toString());
    }
    const headers2 = this.newHttpHeader();
    return this.http.get(url, {
      headers: headers2,
      params
    }).pipe(this.converter.pipeable(CUSTOMER_COUPON_SEARCH_RESULT_NORMALIZER));
  }
  turnOffNotification(userId, couponCode) {
    const url = this.occEndpoints.buildUrl("couponNotification", {
      urlParams: {
        userId,
        couponCode
      }
    });
    const headers2 = this.newHttpHeader();
    return this.http.delete(url, {
      headers: headers2
    });
  }
  turnOnNotification(userId, couponCode) {
    const url = this.occEndpoints.buildUrl("couponNotification", {
      urlParams: {
        userId,
        couponCode
      }
    });
    const headers2 = this.newHttpHeader();
    return this.http.post(url, {
      headers: headers2
    });
  }
  claimCustomerCouponWithCodeInBody(userId, codeVal) {
    const url = this.occEndpoints.buildUrl("claimCustomerCoupon", {
      urlParams: {
        userId
      }
    });
    const toClaim = {
      couponCode: codeVal
    };
    const headers2 = this.newHttpHeader();
    return this.http.post(url, toClaim, {
      headers: headers2
    });
  }
  claimCustomerCoupon(userId, couponCode) {
    const url = this.occEndpoints.buildUrl("claimCoupon", {
      urlParams: {
        userId,
        couponCode
      }
    });
    const headers2 = this.newHttpHeader();
    return this.http.post(url, {
      headers: headers2
    });
  }
  disclaimCustomerCoupon(userId, couponCode) {
    const url = this.occEndpoints.buildUrl("claimCoupon", {
      urlParams: {
        userId,
        couponCode
      }
    });
    const headers2 = this.newHttpHeader();
    return this.http.delete(url, {
      headers: headers2
    });
  }
  newHttpHeader() {
    return new HttpHeaders({
      "Content-Type": "application/json"
    });
  }
  static {
    this.ɵfac = function OccCustomerCouponAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCustomerCouponAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCustomerCouponAdapter,
      factory: _OccCustomerCouponAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCustomerCouponAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var ADDRESS_NORMALIZER = new InjectionToken("AddressNormalizer");
var ADDRESS_LIST_NORMALIZER = new InjectionToken("AddressesNormalizer");
var ADDRESS_SERIALIZER = new InjectionToken("AddressSerializer");
var ADDRESS_VALIDATION_NORMALIZER = new InjectionToken("AddressValidationNormalizer");
var CONTENT_TYPE_JSON_HEADER$1 = {
  "Content-Type": "application/json"
};
var OccUserAddressAdapter = class _OccUserAddressAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  loadAll(userId) {
    const url = this.occEndpoints.buildUrl("addresses", {
      urlParams: {
        userId
      }
    });
    const headers2 = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER$1));
    return this.http.get(url, {
      headers: headers2
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), map((addressList) => addressList.addresses ?? []), this.converter.pipeableMany(ADDRESS_NORMALIZER));
  }
  add(userId, address) {
    const url = this.occEndpoints.buildUrl("addresses", {
      urlParams: {
        userId
      }
    });
    const headers2 = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER$1));
    address = this.converter.convert(address, ADDRESS_SERIALIZER);
    return this.http.post(url, address, {
      headers: headers2
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  update(userId, addressId, address) {
    const url = this.occEndpoints.buildUrl("addressDetail", {
      urlParams: {
        userId,
        addressId
      }
    });
    const headers2 = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER$1));
    address = this.converter.convert(address, ADDRESS_SERIALIZER);
    return this.http.patch(url, address, {
      headers: headers2
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  verify(userId, address) {
    const url = this.occEndpoints.buildUrl("addressVerification", {
      urlParams: {
        userId
      }
    });
    let headers2 = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER$1));
    if (userId === OCC_USER_ID_ANONYMOUS) {
      headers2 = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers2);
    }
    address = this.converter.convert(address, ADDRESS_SERIALIZER);
    return this.http.post(url, address, {
      headers: headers2
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), this.converter.pipeable(ADDRESS_VALIDATION_NORMALIZER));
  }
  delete(userId, addressId) {
    const url = this.occEndpoints.buildUrl("addressDetail", {
      urlParams: {
        userId,
        addressId
      }
    });
    const headers2 = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER$1));
    return this.http.delete(url, {
      headers: headers2
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  static {
    this.ɵfac = function OccUserAddressAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccUserAddressAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccUserAddressAdapter,
      factory: _OccUserAddressAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccUserAddressAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccUserConsentAdapter = class _OccUserConsentAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  loadConsents(userId) {
    const url = this.occEndpoints.buildUrl("consentTemplates", {
      urlParams: {
        userId
      }
    });
    const headers2 = new HttpHeaders({
      "Cache-Control": "no-cache"
    });
    return this.http.get(url, {
      headers: headers2
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), map((consentList) => consentList.consentTemplates ?? []), this.converter.pipeableMany(CONSENT_TEMPLATE_NORMALIZER));
  }
  giveConsent(userId, consentTemplateId, consentTemplateVersion) {
    const url = this.occEndpoints.buildUrl("consents", {
      urlParams: {
        userId
      }
    });
    const httpParams = new HttpParams().set("consentTemplateId", consentTemplateId).set("consentTemplateVersion", consentTemplateVersion.toString());
    const headers2 = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      "Cache-Control": "no-cache"
    });
    return this.http.post(url, httpParams, {
      headers: headers2
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), this.converter.pipeable(CONSENT_TEMPLATE_NORMALIZER));
  }
  withdrawConsent(userId, consentCode) {
    const headers2 = new HttpHeaders({
      "Cache-Control": "no-cache"
    });
    const url = this.occEndpoints.buildUrl("consentDetail", {
      urlParams: {
        userId,
        consentId: consentCode
      }
    });
    return this.http.delete(url, {
      headers: headers2
    });
  }
  static {
    this.ɵfac = function OccUserConsentAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccUserConsentAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccUserConsentAdapter,
      factory: _OccUserConsentAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccUserConsentAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var PRODUCT_INTERESTS_NORMALIZER = new InjectionToken("ProductInterestsNormalizer");
var headers$1 = new HttpHeaders({
  "Content-Type": "application/json"
});
var OccUserInterestsAdapter = class _OccUserInterestsAdapter {
  constructor(http, occEndpoints, config, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.config = config;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  getInterests(userId, pageSize, currentPage, sort, productCode, notificationType) {
    let params = new HttpParams().set("sort", sort ? sort : "name:asc");
    if (pageSize) {
      params = params.set("pageSize", pageSize.toString());
    }
    if (currentPage) {
      params = params.set("currentPage", currentPage.toString());
    }
    if (productCode) {
      params = params.set("productCode", productCode);
    }
    if (notificationType) {
      params = params.set("notificationType", notificationType.toString());
    }
    return this.http.get(this.occEndpoints.buildUrl("getProductInterests", {
      urlParams: {
        userId
      }
    }), {
      headers: headers$1,
      params
    }).pipe(this.converter.pipeable(PRODUCT_INTERESTS_NORMALIZER), catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  removeInterest(userId, item) {
    const r = [];
    item.productInterestEntry?.forEach((entry) => {
      const params = new HttpParams().set("productCode", item.product?.code ?? "").set("notificationType", entry.interestType);
      r.push(this.http.delete(this.occEndpoints.buildUrl("productInterests", {
        urlParams: {
          userId
        }
      }), {
        params
      }).pipe(catchError((error) => {
        throw tryNormalizeHttpError(error, this.logger);
      })));
    });
    return forkJoin(r);
  }
  addInterest(userId, productCode, notificationType) {
    const params = new HttpParams().set("productCode", productCode).set("notificationType", notificationType.toString());
    return this.http.post(this.occEndpoints.buildUrl("productInterests", {
      urlParams: {
        userId
      }
    }), {}, {
      headers: headers$1,
      params
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  static {
    this.ɵfac = function OccUserInterestsAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccUserInterestsAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(OccConfig), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccUserInterestsAdapter,
      factory: _OccUserInterestsAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccUserInterestsAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: OccConfig
  }, {
    type: ConverterService
  }], null);
})();
var NOTIFICATION_PREFERENCE_SERIALIZER = new InjectionToken("NotificationPreferenceSerializer");
var NOTIFICATION_PREFERENCE_NORMALIZER = new InjectionToken("NotificationPreferenceNormalizer");
var UserNotificationPreferenceAdapter = class {
};
var UserNotificationPreferenceConnector = class _UserNotificationPreferenceConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  loadAll(userId) {
    return this.adapter.loadAll(userId);
  }
  update(userId, preferences) {
    return this.adapter.update(userId, preferences);
  }
  static {
    this.ɵfac = function UserNotificationPreferenceConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserNotificationPreferenceConnector)(ɵɵinject(UserNotificationPreferenceAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserNotificationPreferenceConnector,
      factory: _UserNotificationPreferenceConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserNotificationPreferenceConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UserNotificationPreferenceAdapter
  }], null);
})();
var headers = new HttpHeaders({
  "Content-Type": "application/json"
});
var OccUserNotificationPreferenceAdapter = class _OccUserNotificationPreferenceAdapter {
  constructor(http, converter, occEndpoints) {
    this.http = http;
    this.converter = converter;
    this.occEndpoints = occEndpoints;
    this.logger = inject(LoggerService);
  }
  loadAll(userId) {
    return this.http.get(this.occEndpoints.buildUrl("notificationPreference", {
      urlParams: {
        userId
      }
    }), {
      headers
    }).pipe(map((list) => list.preferences ?? []), this.converter.pipeableMany(NOTIFICATION_PREFERENCE_NORMALIZER), catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  update(userId, preferences) {
    preferences = this.converter.convert(preferences, NOTIFICATION_PREFERENCE_SERIALIZER);
    return this.http.patch(this.occEndpoints.buildUrl("notificationPreference", {
      urlParams: {
        userId
      }
    }), {
      preferences
    }, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  static {
    this.ɵfac = function OccUserNotificationPreferenceAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccUserNotificationPreferenceAdapter)(ɵɵinject(HttpClient), ɵɵinject(ConverterService), ɵɵinject(OccEndpointsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccUserNotificationPreferenceAdapter,
      factory: _OccUserNotificationPreferenceAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccUserNotificationPreferenceAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: ConverterService
  }, {
    type: OccEndpointsService
  }], null);
})();
var PAYMENT_DETAILS_NORMALIZER = new InjectionToken("PaymentDetailsNormalizer");
var CONTENT_TYPE_JSON_HEADER = {
  "Content-Type": "application/json"
};
var OccUserPaymentAdapter = class _OccUserPaymentAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  loadAll(userId) {
    const url = this.occEndpoints.buildUrl("paymentDetailsAll", {
      urlParams: {
        userId
      }
    }) + "?saved=true";
    const headers2 = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER));
    return this.http.get(url, {
      headers: headers2
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), map((methodList) => methodList.payments ?? []), this.converter.pipeableMany(PAYMENT_DETAILS_NORMALIZER));
  }
  delete(userId, paymentMethodID) {
    const url = this.occEndpoints.buildUrl("paymentDetail", {
      urlParams: {
        userId,
        paymentDetailId: paymentMethodID
      }
    });
    const headers2 = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER));
    return this.http.delete(url, {
      headers: headers2
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  setDefault(userId, paymentMethodID) {
    const url = this.occEndpoints.buildUrl("paymentDetail", {
      urlParams: {
        userId,
        paymentDetailId: paymentMethodID
      }
    });
    const headers2 = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER));
    return this.http.patch(
      url,
      // TODO: Remove billingAddress property
      {
        billingAddress: {
          titleCode: "mr"
        },
        defaultPayment: true
      },
      {
        headers: headers2
      }
    ).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  static {
    this.ɵfac = function OccUserPaymentAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccUserPaymentAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccUserPaymentAdapter,
      factory: _OccUserPaymentAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccUserPaymentAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var UserAddressAdapter = class {
};
var UserConsentAdapter = class {
};
var UserCostCenterAdapter = class {
};
var CustomerCouponAdapter = class {
};
var UserInterestsAdapter = class {
};
var UserPaymentAdapter = class {
};
var OccAddressListNormalizer = class _OccAddressListNormalizer {
  constructor(converter) {
    this.converter = converter;
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    target.values = source.addresses?.map((address) => __spreadValues({}, this.converter.convert(address, ADDRESS_NORMALIZER))) ?? [];
    return target;
  }
  static {
    this.ɵfac = function OccAddressListNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccAddressListNormalizer)(ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccAddressListNormalizer,
      factory: _OccAddressListNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccAddressListNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var defaultOccUserConfig = {
  backend: {
    occ: {
      endpoints: {
        /* eslint-disable max-len */
        paymentDetailsAll: "users/${userId}/paymentdetails",
        paymentDetail: "users/${userId}/paymentdetails/${paymentDetailId}",
        anonymousConsentTemplates: "users/anonymous/consenttemplates",
        consentTemplates: "users/${userId}/consenttemplates",
        consents: "users/${userId}/consents",
        consentDetail: "users/${userId}/consents/${consentId}",
        addresses: "users/${userId}/addresses",
        addressDetail: "users/${userId}/addresses/${addressId}",
        addressVerification: "users/${userId}/addresses/verification",
        customerCoupons: "users/${userId}/customercoupons",
        claimCoupon: "users/${userId}/customercoupons/${couponCode}/claim",
        claimCustomerCoupon: "users/${userId}/customercoupons/claim",
        couponNotification: "users/${userId}/customercoupons/${couponCode}/notification",
        notificationPreference: "users/${userId}/notificationpreferences",
        productInterests: "users/${userId}/productinterests",
        getProductInterests: "users/${userId}/productinterests?fields=sorts,pagination,results(productInterestEntry,product(code))"
      }
    }
  }
};
var OccUserCostCenterAdapter = class _OccUserCostCenterAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
  }
  loadActiveList(userId) {
    const context = new HttpContext().set(OCC_HTTP_TOKEN, {
      sendUserIdAsHeader: true
    });
    return this.http.get(this.getCostCentersEndpoint(userId), {
      context
    }).pipe(this.converter.pipeable(COST_CENTERS_NORMALIZER));
  }
  getCostCentersEndpoint(userId, params) {
    return this.occEndpoints.buildUrl("getActiveCostCenters", {
      urlParams: {
        userId
      },
      queryParams: params
    });
  }
  static {
    this.ɵfac = function OccUserCostCenterAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccUserCostCenterAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccUserCostCenterAdapter,
      factory: _OccUserCostCenterAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccUserCostCenterAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var UserOccModule = class _UserOccModule {
  static {
    this.ɵfac = function UserOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserOccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccUserConfig), {
        provide: UserAddressAdapter,
        useClass: OccUserAddressAdapter
      }, {
        provide: UserConsentAdapter,
        useClass: OccUserConsentAdapter
      }, {
        provide: AnonymousConsentTemplatesAdapter,
        useClass: OccAnonymousConsentTemplatesAdapter
      }, {
        provide: UserPaymentAdapter,
        useClass: OccUserPaymentAdapter
      }, {
        provide: CustomerCouponAdapter,
        useClass: OccCustomerCouponAdapter
      }, {
        provide: UserNotificationPreferenceAdapter,
        useClass: OccUserNotificationPreferenceAdapter
      }, {
        provide: UserInterestsAdapter,
        useClass: OccUserInterestsAdapter
      }, {
        provide: UserCostCenterAdapter,
        useClass: OccUserCostCenterAdapter
      }, {
        provide: PRODUCT_INTERESTS_NORMALIZER,
        useExisting: OccUserInterestsNormalizer,
        multi: true
      }, {
        provide: ANONYMOUS_CONSENT_NORMALIZER,
        useExisting: AnonymousConsentNormalizer,
        multi: true
      }, {
        provide: ADDRESS_LIST_NORMALIZER,
        useExisting: OccAddressListNormalizer,
        multi: true
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccUserConfig), {
        provide: UserAddressAdapter,
        useClass: OccUserAddressAdapter
      }, {
        provide: UserConsentAdapter,
        useClass: OccUserConsentAdapter
      }, {
        provide: AnonymousConsentTemplatesAdapter,
        useClass: OccAnonymousConsentTemplatesAdapter
      }, {
        provide: UserPaymentAdapter,
        useClass: OccUserPaymentAdapter
      }, {
        provide: CustomerCouponAdapter,
        useClass: OccCustomerCouponAdapter
      }, {
        provide: UserNotificationPreferenceAdapter,
        useClass: OccUserNotificationPreferenceAdapter
      }, {
        provide: UserInterestsAdapter,
        useClass: OccUserInterestsAdapter
      }, {
        provide: UserCostCenterAdapter,
        useClass: OccUserCostCenterAdapter
      }, {
        provide: PRODUCT_INTERESTS_NORMALIZER,
        useExisting: OccUserInterestsNormalizer,
        multi: true
      }, {
        provide: ANONYMOUS_CONSENT_NORMALIZER,
        useExisting: AnonymousConsentNormalizer,
        multi: true
      }, {
        provide: ADDRESS_LIST_NORMALIZER,
        useExisting: OccAddressListNormalizer,
        multi: true
      }]
    }]
  }], null, null);
})();
var defaultOccConfig = {
  backend: {
    occ: {
      prefix: "/occ/v2/"
    },
    media: {}
  }
};
function occConfigValidator(config) {
  if (config.backend === void 0 || config.backend.occ === void 0 || config.backend.occ.baseUrl === void 0) {
    return "Please configure backend.occ.baseUrl before using storefront library!";
  }
}
var WithCredentialsInterceptor = class _WithCredentialsInterceptor {
  constructor(config) {
    this.config = config;
  }
  /**
   * Intercepts each request and adds the `withCredential` flag to it
   * if it hasn't been added already.
   */
  intercept(request3, next) {
    if (this.requiresWithCredentials(request3)) {
      request3 = request3.clone({
        withCredentials: true
      });
    }
    return next.handle(request3);
  }
  /**
   * indicates whether the request should use the WithCredentials flag.
   */
  requiresWithCredentials(request3) {
    return this.occConfig?.useWithCredentials !== void 0 && request3.url.indexOf(this.occConfig?.prefix ?? "") > -1;
  }
  get occConfig() {
    return this.config.backend?.occ;
  }
  static {
    this.ɵfac = function WithCredentialsInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WithCredentialsInterceptor)(ɵɵinject(OccConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _WithCredentialsInterceptor,
      factory: _WithCredentialsInterceptor.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WithCredentialsInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OccConfig
  }], null);
})();
var BaseOccModule = class _BaseOccModule {
  static forRoot() {
    return {
      ngModule: _BaseOccModule,
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useExisting: WithCredentialsInterceptor,
        multi: true
      }, provideDefaultConfig(defaultOccConfig), provideConfigValidator(occConfigValidator)]
    };
  }
  static {
    this.ɵfac = function BaseOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BaseOccModule,
      imports: [CmsOccModule, SiteContextOccModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CmsOccModule, SiteContextOccModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseOccModule, [{
    type: NgModule,
    args: [{
      imports: [CmsOccModule, SiteContextOccModule]
    }]
  }], null, null);
})();
var OCC_BASE_URL_META_TAG_NAME = "occ-backend-base-url";
var OCC_BASE_URL_META_TAG_PLACEHOLDER = "OCC_BACKEND_BASE_URL_VALUE";
var MEDIA_BASE_URL_META_TAG_NAME = "media-backend-base-url";
var MEDIA_BASE_URL_META_TAG_PLACEHOLDER = "MEDIA_BACKEND_BASE_URL_VALUE";
function occServerConfigFromMetaTagFactory(meta) {
  const baseUrl = getMetaTagContent(OCC_BASE_URL_META_TAG_NAME, meta);
  return baseUrl && baseUrl !== OCC_BASE_URL_META_TAG_PLACEHOLDER ? {
    backend: {
      occ: {
        baseUrl
      }
    }
  } : {};
}
function mediaServerConfigFromMetaTagFactory(meta) {
  const baseUrl = getMetaTagContent(MEDIA_BASE_URL_META_TAG_NAME, meta);
  return baseUrl && baseUrl !== MEDIA_BASE_URL_META_TAG_PLACEHOLDER ? {
    backend: {
      media: {
        baseUrl
      }
    }
  } : {};
}
function getMetaTagContent(name, meta) {
  const metaTag = meta.getTag(`name="${name}"`);
  return metaTag && metaTag.content;
}
function provideConfigFromMetaTags() {
  return [provideConfigFactory(occServerConfigFromMetaTagFactory, [Meta]), provideConfigFactory(mediaServerConfigFromMetaTagFactory, [Meta])];
}
var MetaTagConfigModule = class _MetaTagConfigModule {
  static forRoot() {
    return {
      ngModule: _MetaTagConfigModule,
      providers: [...provideConfigFromMetaTags()]
    };
  }
  static {
    this.ɵfac = function MetaTagConfigModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MetaTagConfigModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _MetaTagConfigModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MetaTagConfigModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var LoadingScopesService = class _LoadingScopesService {
  constructor(config) {
    this.config = config;
  }
  /**
   * Aims to expand scopes based on loading scopes config.
   *
   * I.e. if 'details' scope includes 'list' scope by configuration, it'll return ['details', 'list']
   *
   * If scope data overlaps with each other, the data should be merged in the order of scopes provided,
   * i.e. the last scope is merged last, overwriting parts of the data already provided by preceding scope.
   * It should apply also to implicit scopes (that are included by configuration).
   *
   * @param model
   * @param scopes
   */
  expand(model, scopes) {
    const scopesConfig = this.config?.backend?.loadingScopes?.[model];
    if (scopesConfig) {
      const expandedScopes = [...scopes];
      let i = expandedScopes.length;
      while (i > 0) {
        i--;
        const includedScopes = scopesConfig[expandedScopes[i]]?.include;
        if (includedScopes) {
          for (const includedScope of includedScopes) {
            if (!expandedScopes.includes(includedScope)) {
              expandedScopes.splice(i, 0, includedScope);
              i++;
            }
          }
        }
      }
      return expandedScopes;
    }
    return scopes;
  }
  /**
   * Return maxAge for product scope in milliseconds
   *
   * @param model
   * @param scope
   */
  getMaxAge(model, scope) {
    const configuredMaxAge = this.config.backend?.loadingScopes?.[model]?.[scope]?.maxAge ?? 0;
    return configuredMaxAge * 1e3;
  }
  /**
   *
   * Returns the configured triggers for which to reload the product.
   *
   * @param model for which to look up the scopes (usually a 'product')
   * @param scope for which to look up the config
   * @returns the configured triggers, or an empty array if not configured
   */
  getReloadTriggers(model, scope) {
    return this.config.backend?.loadingScopes?.[model]?.[scope]?.reloadOn ?? [];
  }
  static {
    this.ɵfac = function LoadingScopesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoadingScopesService)(ɵɵinject(OccConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _LoadingScopesService,
      factory: _LoadingScopesService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingScopesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OccConfig
  }], null);
})();
var getUserState = createFeatureSelector(USER_FEATURE);
var getBillingCountriesState = createSelector(getUserState, (state) => state.billingCountries);
var getBillingCountriesEntites = createSelector(getBillingCountriesState, (state) => state.entities);
var getAllBillingCountries = createSelector(getBillingCountriesEntites, (entites) => Object.keys(entites).map((isocode) => entites[isocode]));
var getCustomerCouponsState = createSelector(getUserState, (state) => state.customerCoupons);
var getCustomerCouponsLoaded = createSelector(getCustomerCouponsState, (state) => loaderSuccessSelector(state));
var getCustomerCouponsLoading = createSelector(getCustomerCouponsState, (state) => loaderLoadingSelector(state));
var getCustomerCoupons = createSelector(getCustomerCouponsState, (state) => loaderValueSelector(state));
var getDeliveryCountriesState = createSelector(getUserState, (state) => state.countries);
var getDeliveryCountriesEntites = createSelector(getDeliveryCountriesState, (state) => state.entities);
var getAllDeliveryCountries = createSelector(getDeliveryCountriesEntites, (entites) => Object.keys(entites).map((isocode) => entites[isocode]));
var countrySelectorFactory = (isocode) => createSelector(getDeliveryCountriesEntites, (entities) => Object.keys(entities).length !== 0 ? entities[isocode] : null);
var getPreferencesLoaderState = createSelector(getUserState, (state) => state.notificationPreferences);
var getPreferences = createSelector(getPreferencesLoaderState, (state) => loaderValueSelector(state));
var getEnabledPreferences = createSelector(getPreferencesLoaderState, (state) => loaderValueSelector(state).filter((p) => p.enabled));
var getPreferencesLoading = createSelector(getPreferencesLoaderState, (state) => loaderLoadingSelector(state));
var getPaymentMethodsState = createSelector(getUserState, (state) => state.payments);
var getPaymentMethods = createSelector(getPaymentMethodsState, (state) => loaderValueSelector(state));
var getPaymentMethodsLoading = createSelector(getPaymentMethodsState, (state) => loaderLoadingSelector(state));
var getPaymentMethodsLoadedSuccess = createSelector(getPaymentMethodsState, (state) => loaderSuccessSelector(state) && !loaderLoadingSelector(state));
var getInterestsState = createSelector(getUserState, (state) => state.productInterests);
var getInterests = createSelector(getInterestsState, (state) => loaderValueSelector(state));
var getInterestsLoading = createSelector(getInterestsState, (state) => loaderLoadingSelector(state));
var getRegionsLoaderState = createSelector(getUserState, (state) => state.regions);
var getAllRegions = createSelector(getRegionsLoaderState, (state) => {
  return loaderValueSelector(state).entities;
});
var getRegionsDataAndLoading = createSelector(getRegionsLoaderState, (state) => ({
  loaded: loaderSuccessSelector(state),
  loading: loaderLoadingSelector(state),
  regions: loaderValueSelector(state).entities,
  country: loaderValueSelector(state).country
}));
var getRegionsCountry = createSelector(getRegionsLoaderState, (state) => loaderValueSelector(state).country);
var getRegionsLoading = createSelector(getRegionsLoaderState, (state) => loaderLoadingSelector(state));
var getRegionsLoaded = createSelector(getRegionsLoaderState, (state) => loaderSuccessSelector(state));
var getAddressesLoaderState = createSelector(getUserState, (state) => state.addresses);
var getAddresses = createSelector(getAddressesLoaderState, (state) => loaderValueSelector(state));
var getAddressesLoading = createSelector(getAddressesLoaderState, (state) => loaderLoadingSelector(state));
var getAddressesLoadedSuccess = createSelector(getAddressesLoaderState, (state) => loaderSuccessSelector(state) && !loaderLoadingSelector(state));
var getConsentsState = createSelector(getUserState, (state) => state.consents);
var getConsentsValue = createSelector(getConsentsState, (state) => loaderValueSelector(state));
var getConsentByTemplateId = (templateId) => createSelector(getConsentsValue, (templates) => templates.find((template) => template.id === templateId));
var getConsentsLoading = createSelector(getConsentsState, loaderLoadingSelector);
var getConsentsSuccess = createSelector(getConsentsState, loaderSuccessSelector);
var getConsentsError = createSelector(getConsentsState, loaderErrorSelector);
var getCostCentersState = createSelector(getUserState, (state) => state.costCenters);
var getCostCenters = createSelector(getCostCentersState, (state) => loaderValueSelector(state));
var usersGroup_selectors = Object.freeze({
  __proto__: null,
  countrySelectorFactory,
  getAddresses,
  getAddressesLoadedSuccess,
  getAddressesLoaderState,
  getAddressesLoading,
  getAllBillingCountries,
  getAllDeliveryCountries,
  getAllRegions,
  getBillingCountriesEntites,
  getBillingCountriesState,
  getConsentByTemplateId,
  getConsentsError,
  getConsentsLoading,
  getConsentsState,
  getConsentsSuccess,
  getConsentsValue,
  getCostCenters,
  getCostCentersState,
  getCustomerCoupons,
  getCustomerCouponsLoaded,
  getCustomerCouponsLoading,
  getCustomerCouponsState,
  getDeliveryCountriesEntites,
  getDeliveryCountriesState,
  getEnabledPreferences,
  getInterests,
  getInterestsLoading,
  getInterestsState,
  getPaymentMethods,
  getPaymentMethodsLoadedSuccess,
  getPaymentMethodsLoading,
  getPaymentMethodsState,
  getPreferences,
  getPreferencesLoaderState,
  getPreferencesLoading,
  getRegionsCountry,
  getRegionsDataAndLoading,
  getRegionsLoaded,
  getRegionsLoaderState,
  getRegionsLoading,
  getUserState
});
var UserConsentService = class _UserConsentService {
  constructor(store, authService, userIdService) {
    this.store = store;
    this.authService = authService;
    this.userIdService = userIdService;
  }
  /**
   * Retrieves all consents.
   */
  loadConsents() {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new LoadUserConsents(userId));
    });
  }
  /**
   * Returns all consent templates. If `loadIfMissing` parameter is set to `true`, the method triggers the load if consent templates.
   * @param loadIfMissing is set to `true`, the method will load templates if those are not already present. The default value is `false`.
   */
  getConsents(loadIfMissing = false) {
    return iif(() => loadIfMissing, this.store.pipe(select(getConsentsValue), withLatestFrom(this.getConsentsResultLoading(), this.getConsentsResultSuccess()), filter(([_templates, loading, _success]) => !loading), tap(([templates, _loading, success]) => {
      if (!templates || templates.length === 0) {
        if (!success) {
          this.loadConsents();
        }
      }
    }), filter(([templates, _loading]) => Boolean(templates)), map(([templates, _loading]) => templates)), this.store.pipe(select(getConsentsValue)));
  }
  /**
   * Returns the consents loading flag
   */
  getConsentsResultLoading() {
    return this.store.pipe(select(getConsentsLoading));
  }
  /**
   * Returns the consents success flag
   */
  getConsentsResultSuccess() {
    return this.store.pipe(select(getConsentsSuccess));
  }
  /**
   * Returns the consents error flag
   */
  getConsentsResultError() {
    return this.store.pipe(select(getConsentsError));
  }
  /**
   * Resets the processing state for consent retrieval
   */
  resetConsentsProcessState() {
    this.store.dispatch(new ResetLoadUserConsents());
  }
  /**
   * Returns the registered consent for the given template ID.
   *
   * As a side-effect, the method will call `getConsents(true)` to load the templates if those are not present.
   *
   * @param templateId a template ID by which to filter the registered templates.
   */
  getConsent(templateId) {
    return combineLatest([this.authService.isUserLoggedIn(), this.userIdService.getUserId()]).pipe(filter(([loggedIn, userId]) => loggedIn && userId === OCC_USER_ID_CURRENT), switchMap(() => this.getConsents(true)), take(1), switchMap(() => this.store.pipe(select(getConsentByTemplateId(templateId)))), filter(isNotUndefined), map((template) => template.currentConsent));
  }
  /**
   * Returns `true` if the consent is truthy and if `consentWithdrawnDate` doesn't exist.
   * Otherwise, `false` is returned.
   *
   * @param consent to check
   */
  isConsentGiven(consent) {
    return Boolean(consent) && Boolean(consent.consentGivenDate) && !Boolean(consent.consentWithdrawnDate);
  }
  /**
   * Returns `true` if the consent is either falsy or if `consentWithdrawnDate` is present.
   * Otherwise, `false` is returned.
   *
   * @param consent to check
   */
  isConsentWithdrawn(consent) {
    if (Boolean(consent)) {
      return Boolean(consent?.consentWithdrawnDate);
    }
    return true;
  }
  /**
   * Give consent for specified consent template ID and version.
   * @param consentTemplateId a template ID for which to give a consent
   * @param consentTemplateVersion a template version for which to give a consent
   */
  giveConsent(consentTemplateId, consentTemplateVersion) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new GiveUserConsent({
        userId,
        consentTemplateId,
        consentTemplateVersion
      }));
    });
  }
  /**
   * Returns the give consent process loading flag
   */
  getGiveConsentResultLoading() {
    return this.store.pipe(select(getProcessLoadingFactory(GIVE_CONSENT_PROCESS_ID)));
  }
  /**
   * Returns the give consent process success flag
   */
  getGiveConsentResultSuccess() {
    return this.store.pipe(select(getProcessSuccessFactory(GIVE_CONSENT_PROCESS_ID)));
  }
  /**
   * Returns the give consent process error flag
   */
  getGiveConsentResultError() {
    return this.store.pipe(select(getProcessErrorFactory(GIVE_CONSENT_PROCESS_ID)));
  }
  /**
   * Resents the give consent process flags
   */
  resetGiveConsentProcessState() {
    return this.store.dispatch(new ResetGiveUserConsentProcess());
  }
  /**
   * Withdraw consent for the given `consentCode`
   * @param consentCode for which to withdraw the consent
   */
  withdrawConsent(consentCode, consentId) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new WithdrawUserConsent({
        userId,
        consentCode,
        consentId
      }));
    });
  }
  /**
   * Returns the withdraw consent process loading flag
   */
  getWithdrawConsentResultLoading() {
    return this.store.pipe(select(getProcessLoadingFactory(WITHDRAW_CONSENT_PROCESS_ID)));
  }
  /**
   * Returns the withdraw consent process success flag
   */
  getWithdrawConsentResultSuccess() {
    return this.store.pipe(select(getProcessSuccessFactory(WITHDRAW_CONSENT_PROCESS_ID)));
  }
  /**
   * Returns the withdraw consent process error flag
   */
  getWithdrawConsentResultError() {
    return this.store.pipe(select(getProcessErrorFactory(WITHDRAW_CONSENT_PROCESS_ID)));
  }
  /**
   * Resets the process flags for withdraw consent
   */
  resetWithdrawConsentProcessState() {
    return this.store.dispatch(new ResetWithdrawUserConsentProcess());
  }
  /**
   * Filters the provided `templateList`' templates by hiding the template IDs specified in `hideTemplateIds`.
   * If the `hideTemplateIds` is empty, the provided `templateList` is returned.
   *
   * @param templateList a list of consent templates to filter
   * @param hideTemplateIds template IDs to hide
   */
  filterConsentTemplates(templateList, hideTemplateIds = []) {
    if (hideTemplateIds.length === 0) {
      return templateList;
    }
    const updatedTemplateList = [];
    for (const template of templateList) {
      const show = template.id && !hideTemplateIds.includes(template.id);
      if (show) {
        updatedTemplateList.push(template);
      }
    }
    return updatedTemplateList;
  }
  static {
    this.ɵfac = function UserConsentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserConsentService)(ɵɵinject(Store), ɵɵinject(AuthService), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserConsentService,
      factory: _UserConsentService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserConsentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: AuthService
  }, {
    type: UserIdService
  }], null);
})();
var AnonymousConsentsEffects = class _AnonymousConsentsEffects {
  isRequiredConsent(templateCode) {
    return Boolean(templateCode && this.anonymousConsentsConfig.anonymousConsents?.requiredConsents?.includes(templateCode));
  }
  constructor(actions$, anonymousConsentTemplatesConnector, authService, anonymousConsentsConfig, anonymousConsentService, userConsentService, userIdService) {
    this.actions$ = actions$;
    this.anonymousConsentTemplatesConnector = anonymousConsentTemplatesConnector;
    this.authService = authService;
    this.anonymousConsentsConfig = anonymousConsentsConfig;
    this.anonymousConsentService = anonymousConsentService;
    this.userConsentService = userConsentService;
    this.userIdService = userIdService;
    this.logger = inject(LoggerService);
    this.checkConsentVersions$ = createEffect(() => this.actions$.pipe(ofType(ANONYMOUS_CONSENT_CHECK_UPDATED_VERSIONS), withLatestFrom(this.anonymousConsentService.getConsents()), concatMap(([_, currentConsents]) => {
      return this.anonymousConsentTemplatesConnector.loadAnonymousConsents().pipe(map((newConsents) => {
        if (!newConsents) {
          if (isDevMode()) {
            this.logger.warn("No consents were loaded. Please check the Spartacus documentation as this could be a back-end configuration issue.");
          }
          return false;
        }
        const currentConsentVersions = currentConsents.map((consent) => consent.templateVersion);
        const newConsentVersions = newConsents.map((consent) => consent.templateVersion);
        return this.detectUpdatedVersion(currentConsentVersions, newConsentVersions);
      }), switchMap((updated) => updated ? of(new LoadAnonymousConsentTemplates()) : EMPTY), catchError((error) => of(new LoadAnonymousConsentTemplatesFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.loadAnonymousConsentTemplates$ = createEffect(() => this.actions$.pipe(ofType(LOAD_ANONYMOUS_CONSENT_TEMPLATES), withLatestFrom(this.anonymousConsentService.getTemplates()), concatMap(([_, currentConsentTemplates]) => this.anonymousConsentTemplatesConnector.loadAnonymousConsentTemplates().pipe(mergeMap((newConsentTemplates) => {
      let updated = false;
      if (currentConsentTemplates && currentConsentTemplates.length !== 0) {
        updated = this.anonymousConsentService.detectUpdatedTemplates(currentConsentTemplates, newConsentTemplates);
      }
      return [new LoadAnonymousConsentTemplatesSuccess(newConsentTemplates), new ToggleAnonymousConsentTemplatesUpdated(updated)];
    }), catchError((error) => of(new LoadAnonymousConsentTemplatesFail(tryNormalizeHttpError(error, this.logger))))))));
    this.transferAnonymousConsentsToUser$ = createEffect(() => this.actions$.pipe(ofType(LOGIN), filter(() => Boolean(this.anonymousConsentsConfig.anonymousConsents)), withLatestFrom(this.actions$.pipe(ofType(REGISTER_USER_SUCCESS))), filter(([, registerAction]) => Boolean(registerAction)), switchMap(() => this.anonymousConsentService.getConsents().pipe(withLatestFrom(this.userIdService.getUserId(), this.anonymousConsentService.getTemplates(), this.authService.isUserLoggedIn()), filter(([, , , loggedIn]) => loggedIn), concatMap(([consents, userId, templates, _loggedIn]) => {
      const actions = [];
      for (const consent of consents) {
        if (this.anonymousConsentService.isConsentGiven(consent) && !this.isRequiredConsent(consent.templateCode)) {
          for (const template of templates) {
            if (template.id === consent.templateCode) {
              actions.push(new TransferAnonymousConsent({
                userId,
                consentTemplateId: template.id,
                consentTemplateVersion: template.version
              }));
              break;
            }
          }
        }
      }
      if (actions.length > 0) {
        return actions;
      }
      return EMPTY;
    })))));
    this.giveRequiredConsentsToUser$ = createEffect(() => this.actions$.pipe(ofType(LOGIN), filter((action) => Boolean(this.anonymousConsentsConfig.anonymousConsents && this.anonymousConsentsConfig.anonymousConsents.requiredConsents && action)), concatMap(() => this.userConsentService.getConsentsResultSuccess().pipe(take(1), withLatestFrom(this.userIdService.getUserId(), this.userConsentService.getConsents(), this.authService.isUserLoggedIn()), filter(([, , , loggedIn]) => loggedIn), tap(([loaded, _userId, _templates, _loggedIn]) => {
      if (!loaded) {
        this.userConsentService.loadConsents();
      }
    }), map(([_loaded, userId, templates, _loggedIn]) => {
      return {
        userId,
        templates
      };
    }), concatMap(({
      userId,
      templates
    }) => {
      const actions = [];
      for (const template of templates) {
        if (this.userConsentService.isConsentWithdrawn(template.currentConsent) && this.isRequiredConsent(template.id)) {
          actions.push(new GiveUserConsent({
            userId,
            consentTemplateId: template.id,
            consentTemplateVersion: template.version
          }));
        }
      }
      return actions.length > 0 ? actions : EMPTY;
    })))));
  }
  /**
   * Compares the given versions and determines if there's a mismatch,
   * in which case `true` is returned.
   *
   * @param currentVersions versions of the current consents
   * @param newVersions versions of the new consents
   */
  detectUpdatedVersion(currentVersions, newVersions) {
    if (currentVersions.length !== newVersions.length) {
      return true;
    }
    for (let i = 0; i < newVersions.length; i++) {
      if (currentVersions[i] !== newVersions[i]) {
        return true;
      }
    }
    return false;
  }
  static {
    this.ɵfac = function AnonymousConsentsEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnonymousConsentsEffects)(ɵɵinject(Actions), ɵɵinject(AnonymousConsentTemplatesConnector), ɵɵinject(AuthService), ɵɵinject(AnonymousConsentsConfig), ɵɵinject(AnonymousConsentsService), ɵɵinject(UserConsentService), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AnonymousConsentsEffects,
      factory: _AnonymousConsentsEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnonymousConsentsEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: AnonymousConsentTemplatesConnector
  }, {
    type: AuthService
  }, {
    type: AnonymousConsentsConfig
  }, {
    type: AnonymousConsentsService
  }, {
    type: UserConsentService
  }, {
    type: UserIdService
  }], null);
})();
var effects$6 = [AnonymousConsentsEffects];
var SiteContextConfigInitializer = class _SiteContextConfigInitializer {
  constructor(baseSiteService, javaRegExpConverter, winRef) {
    this.baseSiteService = baseSiteService;
    this.javaRegExpConverter = javaRegExpConverter;
    this.winRef = winRef;
    this.scopes = ["context"];
    this.configFactory = () => lastValueFrom(this.resolveConfig());
  }
  get currentUrl() {
    return this.winRef.location.href;
  }
  /**
   * Emits the site context config basing on the current base site data.
   *
   * Completes after emitting the value.
   */
  resolveConfig() {
    return this.baseSiteService.getAll().pipe(map((baseSites) => baseSites?.find((site) => this.isCurrentBaseSite(site))), filter((baseSite) => {
      if (!baseSite) {
        throw new Error(`Error: Cannot get base site config! Current url (${this.currentUrl}) doesn't match any of url patterns of any base sites.`);
      }
      return Boolean(baseSite);
    }), map((baseSite) => this.getConfig(baseSite)), take(1));
  }
  getConfig(source) {
    const result = {
      context: {
        urlParameters: this.getUrlParams(source.urlEncodingAttributes),
        [BASE_SITE_CONTEXT_ID]: [source.uid],
        [LANGUAGE_CONTEXT_ID]: this.getIsoCodes(source.baseStore?.languages, source.defaultLanguage || source.baseStore?.defaultLanguage),
        [CURRENCY_CONTEXT_ID]: this.getIsoCodes(source.baseStore?.currencies, source.baseStore?.defaultCurrency),
        // Note: The default Site Theme can be driven by the CMS, but additional possible
        // selectable themes (like a11y high contrast themes) can be configured only
        // in the separate Spartacus configuration `config.siteTheme.optionalThemes`.
        [THEME_CONTEXT_ID]: [source.theme]
      }
    };
    return result;
  }
  isCurrentBaseSite(site) {
    const index = (site.urlPatterns || []).findIndex((javaRegexp) => {
      const jsRegexp = this.javaRegExpConverter.toJsRegExp(javaRegexp);
      if (jsRegexp) {
        const result = jsRegexp.test(this.currentUrl);
        return result;
      }
    });
    return index !== -1;
  }
  /**
   * Returns an array of url encoded site context parameters.
   *
   * It maps the string "storefront" (used in OCC) to the "baseSite" (used in Spartacus)
   */
  getUrlParams(params) {
    const STOREFRONT_PARAM = "storefront";
    return (params || []).map((param) => param === STOREFRONT_PARAM ? BASE_SITE_CONTEXT_ID : param);
  }
  /**
   * Returns iso codes in a array, where the first element is the default iso code.
   */
  getIsoCodes(elements, defaultElement) {
    if (elements && defaultElement) {
      const result = this.moveToFirst(elements, (el) => el.isocode === defaultElement.isocode).map((el) => el.isocode);
      return result;
    }
  }
  /**
   * Moves to the start of the array the first element that satisfies the given predicate.
   *
   * @param array array to modify
   * @param predicate function called on elements
   */
  moveToFirst(array, predicate) {
    array = [...array];
    const index = array.findIndex(predicate);
    if (index !== -1) {
      const [el] = array.splice(index, 1);
      array.unshift(el);
    }
    return array;
  }
  static {
    this.ɵfac = function SiteContextConfigInitializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteContextConfigInitializer)(ɵɵinject(BaseSiteService), ɵɵinject(JavaRegExpConverter), ɵɵinject(WindowRef));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SiteContextConfigInitializer,
      factory: _SiteContextConfigInitializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteContextConfigInitializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: BaseSiteService
  }, {
    type: JavaRegExpConverter
  }, {
    type: WindowRef
  }], null);
})();
var SiteConnector = class _SiteConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  getLanguages() {
    return this.adapter.loadLanguages();
  }
  getCurrencies() {
    return this.adapter.loadCurrencies();
  }
  getCountries(type) {
    return this.adapter.loadCountries(type);
  }
  getRegions(countryIsoCode) {
    return this.adapter.loadRegions(countryIsoCode);
  }
  getBaseSite(siteUid) {
    return this.adapter.loadBaseSite(siteUid);
  }
  getBaseSites() {
    return this.adapter.loadBaseSites();
  }
  static {
    this.ɵfac = function SiteConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteConnector)(ɵɵinject(SiteAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SiteConnector,
      factory: _SiteConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: SiteAdapter
  }], null);
})();
var LanguageSetEvent = class extends CxEvent {
  static {
    this.type = "LanguageSetEvent";
  }
};
var CurrencySetEvent = class extends CxEvent {
  static {
    this.type = "CurrencySetEvent";
  }
};
var SiteContextEventBuilder = class _SiteContextEventBuilder {
  constructor(actionsSubject, eventService) {
    this.actionsSubject = actionsSubject;
    this.eventService = eventService;
    this.register();
  }
  /**
   * Registers the site context events
   */
  register() {
    this.registerSetLanguage();
    this.registerSetCurrency();
  }
  /**
   * Register the language set action
   */
  registerSetLanguage() {
    const languageEvent$ = this.actionsSubject.pipe(ofType(SET_ACTIVE_LANGUAGE), map((languageAction) => createFrom(LanguageSetEvent, {
      activeLanguage: languageAction.payload
    })));
    this.eventService.register(LanguageSetEvent, languageEvent$);
  }
  /**
   * Register the currency set action
   */
  registerSetCurrency() {
    const currencyEvent$ = this.actionsSubject.pipe(ofType(SET_ACTIVE_CURRENCY), map((currencyAction) => createFrom(CurrencySetEvent, {
      activeCurrency: currencyAction.payload
    })));
    this.eventService.register(CurrencySetEvent, currencyEvent$);
  }
  static {
    this.ɵfac = function SiteContextEventBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteContextEventBuilder)(ɵɵinject(ActionsSubject), ɵɵinject(EventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SiteContextEventBuilder,
      factory: _SiteContextEventBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteContextEventBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ActionsSubject
  }, {
    type: EventService
  }], null);
})();
var SiteContextEventModule = class _SiteContextEventModule {
  constructor(_siteContextEventBuilder) {
  }
  static {
    this.ɵfac = function SiteContextEventModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteContextEventModule)(ɵɵinject(SiteContextEventBuilder));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SiteContextEventModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteContextEventModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: SiteContextEventBuilder
  }], null);
})();
var ContextServiceMap = class {
};
function serviceMapFactory() {
  return {
    [LANGUAGE_CONTEXT_ID]: LanguageService,
    [CURRENCY_CONTEXT_ID]: CurrencyService,
    [BASE_SITE_CONTEXT_ID]: BaseSiteService
  };
}
var contextServiceMapProvider = {
  provide: ContextServiceMap,
  useFactory: serviceMapFactory
};
var BaseSiteInitializer = class _BaseSiteInitializer {
  constructor(baseSiteService, configInit) {
    this.baseSiteService = baseSiteService;
    this.configInit = configInit;
  }
  /**
   * Initializes the value of the base site
   */
  initialize() {
    this.subscription = this.configInit.getStable("context").pipe(
      // TODO(#12351): <--- plug here explicitly SiteContextRoutesHandler
      switchMap(() => this.setFallbackValue())
    ).subscribe();
  }
  /**
   * On subscription to the returned observable:
   *
   * Sets the default value taken from config, unless the active base site has been already initialized.
   */
  setFallbackValue() {
    return this.configInit.getStable("context").pipe(tap((config) => this.setDefaultFromConfig(config)));
  }
  /**
   * Sets the active base site value based on the default value from the config,
   * unless the active base site has been already initialized.
   */
  setDefaultFromConfig(config) {
    const contextParam = getContextParameterDefault(config, BASE_SITE_CONTEXT_ID);
    if (!this.baseSiteService.isInitialized() && contextParam) {
      this.baseSiteService.setActive(contextParam);
    }
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function BaseSiteInitializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseSiteInitializer)(ɵɵinject(BaseSiteService), ɵɵinject(ConfigInitializerService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BaseSiteInitializer,
      factory: _BaseSiteInitializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseSiteInitializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: BaseSiteService
  }, {
    type: ConfigInitializerService
  }], null);
})();
var CurrencyStatePersistenceService = class _CurrencyStatePersistenceService {
  constructor(statePersistenceService, currencyService, config) {
    this.statePersistenceService = statePersistenceService;
    this.currencyService = currencyService;
    this.config = config;
    this.initialized$ = new ReplaySubject(1);
  }
  initSync() {
    this.statePersistenceService.syncWithStorage({
      key: CURRENCY_CONTEXT_ID,
      state$: this.currencyService.getActive(),
      onRead: (state) => this.onRead(state)
    });
    return this.initialized$;
  }
  onRead(valueFromStorage) {
    if (!this.currencyService.isInitialized() && valueFromStorage) {
      this.currencyService.setActive(valueFromStorage);
    }
    if (!this.initialized$.closed) {
      this.initialized$.next(void 0);
      this.initialized$.complete();
    }
  }
  static {
    this.ɵfac = function CurrencyStatePersistenceService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CurrencyStatePersistenceService)(ɵɵinject(StatePersistenceService), ɵɵinject(CurrencyService), ɵɵinject(SiteContextConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CurrencyStatePersistenceService,
      factory: _CurrencyStatePersistenceService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrencyStatePersistenceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: StatePersistenceService
  }, {
    type: CurrencyService
  }, {
    type: SiteContextConfig
  }], null);
})();
var CurrencyInitializer = class _CurrencyInitializer {
  constructor(currencyService, currencyStatePersistenceService, configInit) {
    this.currencyService = currencyService;
    this.currencyStatePersistenceService = currencyStatePersistenceService;
    this.configInit = configInit;
  }
  /**
   * Initializes the value of the active currency.
   */
  initialize() {
    this.subscription = this.configInit.getStable("context").pipe(
      // TODO(#12351): <--- plug here explicitly SiteContextRoutesHandler
      switchMap(() => this.currencyStatePersistenceService.initSync()),
      switchMap(() => this.setFallbackValue())
    ).subscribe();
  }
  /**
   * On subscription to the returned observable:
   *
   * Sets the default value taken from config, unless the active currency has been already initialized.
   */
  setFallbackValue() {
    return this.configInit.getStable("context").pipe(tap((config) => this.setDefaultFromConfig(config)));
  }
  /**
   * Sets the active currency value based on the default value from the config,
   * unless the active currency has been already initialized.
   */
  setDefaultFromConfig(config) {
    const contextParam = getContextParameterDefault(config, CURRENCY_CONTEXT_ID);
    if (!this.currencyService.isInitialized() && contextParam) {
      this.currencyService.setActive(contextParam);
    }
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function CurrencyInitializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CurrencyInitializer)(ɵɵinject(CurrencyService), ɵɵinject(CurrencyStatePersistenceService), ɵɵinject(ConfigInitializerService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CurrencyInitializer,
      factory: _CurrencyInitializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrencyInitializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CurrencyService
  }, {
    type: CurrencyStatePersistenceService
  }, {
    type: ConfigInitializerService
  }], null);
})();
var LanguageStatePersistenceService = class _LanguageStatePersistenceService {
  constructor(statePersistenceService, languageService, config) {
    this.statePersistenceService = statePersistenceService;
    this.languageService = languageService;
    this.config = config;
    this.initialized$ = new ReplaySubject(1);
  }
  /**
   * Initializes the synchronization of the active language with the local storage.
   *
   * @returns Observable that emits and completes when the value is read from the storage.
   */
  initSync() {
    this.statePersistenceService.syncWithStorage({
      key: LANGUAGE_CONTEXT_ID,
      state$: this.languageService.getActive(),
      onRead: (state) => this.onRead(state)
    });
    return this.initialized$;
  }
  onRead(valueFromStorage) {
    if (!this.languageService.isInitialized() && valueFromStorage) {
      this.languageService.setActive(valueFromStorage);
    }
    if (!this.initialized$.closed) {
      this.initialized$.next(void 0);
      this.initialized$.complete();
    }
  }
  static {
    this.ɵfac = function LanguageStatePersistenceService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LanguageStatePersistenceService)(ɵɵinject(StatePersistenceService), ɵɵinject(LanguageService), ɵɵinject(SiteContextConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _LanguageStatePersistenceService,
      factory: _LanguageStatePersistenceService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageStatePersistenceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: StatePersistenceService
  }, {
    type: LanguageService
  }, {
    type: SiteContextConfig
  }], null);
})();
var LanguageInitializer = class _LanguageInitializer {
  constructor(languageService, languageStatePersistenceService, configInit) {
    this.languageService = languageService;
    this.languageStatePersistenceService = languageStatePersistenceService;
    this.configInit = configInit;
  }
  /**
   * Initializes the value of the active language.
   */
  initialize() {
    this.subscription = this.configInit.getStable("context").pipe(
      // TODO(#12351): <--- plug here explicitly SiteContextRoutesHandler
      switchMap(() => this.languageStatePersistenceService.initSync()),
      switchMap(() => this.setFallbackValue())
    ).subscribe();
  }
  /**
   * On subscription to the returned observable:
   *
   * Sets the default value taken from config, unless the active language has been already initialized.
   */
  setFallbackValue() {
    return this.configInit.getStable("context").pipe(tap((config) => this.setDefaultFromConfig(config)));
  }
  /**
   * Sets the active language value based on the default value from the config,
   * unless the active language has been already initialized.
   */
  setDefaultFromConfig(config) {
    const contextParam = getContextParameterDefault(config, LANGUAGE_CONTEXT_ID);
    if (!this.languageService.isInitialized() && contextParam) {
      this.languageService.setActive(contextParam);
    }
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function LanguageInitializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LanguageInitializer)(ɵɵinject(LanguageService), ɵɵinject(LanguageStatePersistenceService), ɵɵinject(ConfigInitializerService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _LanguageInitializer,
      factory: _LanguageInitializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageInitializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: LanguageService
  }, {
    type: LanguageStatePersistenceService
  }, {
    type: ConfigInitializerService
  }], null);
})();
var SiteContextParamsService = class _SiteContextParamsService {
  constructor(config, injector, serviceMap) {
    this.config = config;
    this.injector = injector;
    this.serviceMap = serviceMap;
    this.logger = inject(LoggerService);
  }
  getContextParameters() {
    if (this.config.context) {
      return Object.keys(this.config.context).filter((param) => param !== "urlParameters");
    }
    return [];
  }
  getUrlEncodingParameters() {
    return this.config.context && this.config.context.urlParameters || [];
  }
  getParamValues(param) {
    return getContextParameterValues(this.config, param);
  }
  getParamDefaultValue(param) {
    return getContextParameterDefault(this.config, param);
  }
  getSiteContextService(param) {
    if (this.serviceMap[param]) {
      try {
        return this.injector.get(this.serviceMap[param]);
      } catch {
        if (isDevMode()) {
          this.logger.warn(`Couldn't find site context service for '${param}'.`);
        }
        return void 0;
      }
    }
  }
  getValue(param) {
    let value;
    const service = this.getSiteContextService(param);
    if (service) {
      service.getActive().subscribe((val) => value = val).unsubscribe();
    }
    return value !== void 0 ? value : this.getParamDefaultValue(param);
  }
  setValue(param, value) {
    const service = this.getSiteContextService(param);
    if (service) {
      service.setActive(value);
    }
  }
  /**
   * Get active values for all provided context parameters
   *
   * @param params Context parameters
   *
   * @returns Observable emitting array of all passed active context values
   */
  getValues(params) {
    if (params.length === 0) {
      return of([]);
    }
    return combineLatest(params.map((param) => {
      const service = this.getSiteContextService(param);
      if (service) {
        return service.getActive().pipe(distinctUntilChanged());
      }
      return of("");
    })).pipe(filter((value) => value.every((param) => !!param)));
  }
  static {
    this.ɵfac = function SiteContextParamsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteContextParamsService)(ɵɵinject(SiteContextConfig), ɵɵinject(Injector), ɵɵinject(ContextServiceMap));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SiteContextParamsService,
      factory: _SiteContextParamsService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteContextParamsService, [{
    type: Injectable
  }], () => [{
    type: SiteContextConfig
  }, {
    type: Injector
  }, {
    type: ContextServiceMap
  }], null);
})();
var SiteContextUrlSerializer = class _SiteContextUrlSerializer extends DefaultUrlSerializer {
  /**
   * Names of site context parameters encoded in the URL
   */
  get urlEncodingParameters() {
    return this.siteContextParams.getUrlEncodingParameters();
  }
  /**
   * Tells whether any site context parameters should be encoded in the URL
   */
  get hasContextInRoutes() {
    return this.urlEncodingParameters.length > 0;
  }
  constructor(siteContextParams) {
    super();
    this.siteContextParams = siteContextParams;
    this.URL_SPLIT = /(^[^#?]*)(.*)/;
  }
  /**
   * @override Recognizes the site context parameters encoded in the prefix segments
   * of the given URL.
   *
   * It returns the UrlTree for the given URL shortened by the recognized params, but saves
   * the params' values in the custom property of UrlTree: `siteContext`.
   */
  parse(url) {
    if (this.hasContextInRoutes) {
      const urlWithParams = this.urlExtractContextParameters(url);
      const parsed = super.parse(urlWithParams.url);
      this.urlTreeIncludeContextParameters(parsed, urlWithParams.params);
      return parsed;
    } else {
      return super.parse(url);
    }
  }
  /**
   * Recognizes the site context parameters encoded in the prefix segments of the given URL.
   *
   * It returns the recognized site context params as well as the
   * URL shortened by the recognized params.
   */
  urlExtractContextParameters(url) {
    const [, urlPart, queryPart] = url.match(this.URL_SPLIT) ?? [, "", ""];
    const segments = urlPart?.split("/") ?? [];
    if (segments[0] === "") {
      segments.shift();
    }
    const params = {};
    let paramId = 0;
    let segmentId = 0;
    while (paramId < this.urlEncodingParameters.length && segmentId < segments.length) {
      const paramName = this.urlEncodingParameters[paramId];
      const paramValues = this.siteContextParams.getParamValues(paramName);
      if (paramValues.includes(segments[segmentId])) {
        params[paramName] = segments[segmentId];
        segmentId++;
      }
      paramId++;
    }
    url = segments.slice(segmentId).join("/") + queryPart;
    return {
      url,
      params
    };
  }
  /**
   * Saves the given site context parameters in the custom property
   * of the given UrlTree: `siteContext`.
   */
  urlTreeIncludeContextParameters(urlTree, params) {
    urlTree.siteContext = params;
  }
  /**
   * @override Serializes the given UrlTree to a string and prepends
   *  to it the current values of the site context parameters.
   */
  serialize(tree) {
    const params = this.urlTreeExtractContextParameters(tree);
    const url = super.serialize(tree);
    const serialized = this.urlIncludeContextParameters(url, params);
    return serialized;
  }
  /**
   * Returns the site context parameters stored in the custom property
   * of the UrlTree: `siteContext`.
   */
  urlTreeExtractContextParameters(urlTree) {
    return urlTree.siteContext ? urlTree.siteContext : {};
  }
  /**
   * Prepends the current values of the site context parameters to the given URL.
   */
  urlIncludeContextParameters(url, params) {
    const contextRoutePart = this.urlEncodingParameters.map((param) => {
      return params[param] ? params[param] : this.siteContextParams.getValue(param);
    }).join("/");
    return contextRoutePart + url;
  }
  static {
    this.ɵfac = function SiteContextUrlSerializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteContextUrlSerializer)(ɵɵinject(SiteContextParamsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SiteContextUrlSerializer,
      factory: _SiteContextUrlSerializer.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteContextUrlSerializer, [{
    type: Injectable
  }], () => [{
    type: SiteContextParamsService
  }], null);
})();
function baseSiteConfigValidator(config) {
  if (getContextParameterDefault(config, BASE_SITE_CONTEXT_ID) === void 0) {
    return "Please configure context.parameters.baseSite before using storefront library!";
  }
}
function defaultSiteContextConfigFactory() {
  return {
    context: {
      [LANGUAGE_CONTEXT_ID]: ["en", "de", "ja", "zh", "ru", "fr", "tr", "it", "es", "uk", "pl", "nl", "hi", "ar", "pt", "bn", "pa"],
      [CURRENCY_CONTEXT_ID]: ["USD", "EUR", "JPY", "GBP", "AUD", "CAD", "CHF", "CNY", "SEK", "NZD", "MXN", "SGD", "HKD", "NOK", "KRW", "TRY", "RUB", "INR", "BRL", "ZAR"]
    }
  };
}
function initializeCurrency(currencyInitializer) {
  const result = () => {
    currencyInitializer.initialize();
  };
  return result;
}
function initializeLanguage(languageInitializer) {
  const result = () => {
    languageInitializer.initialize();
  };
  return result;
}
function initializeBaseSite(baseSiteInitializer) {
  const result = () => {
    baseSiteInitializer.initialize();
  };
  return result;
}
var contextInitializerProviders = [{
  provide: APP_INITIALIZER,
  useFactory: initializeLanguage,
  deps: [LanguageInitializer],
  multi: true
}, {
  provide: APP_INITIALIZER,
  useFactory: initializeCurrency,
  deps: [CurrencyInitializer],
  multi: true
}, {
  provide: APP_INITIALIZER,
  useFactory: initializeBaseSite,
  deps: [BaseSiteInitializer],
  multi: true
}];
var SiteContextRoutesHandler = class _SiteContextRoutesHandler {
  constructor(siteContextParams, serializer, injector) {
    this.siteContextParams = siteContextParams;
    this.serializer = serializer;
    this.injector = injector;
    this.subscription = new Subscription();
    this.contextValues = {};
    this.isNavigating = false;
  }
  /**
   * Initializes the two-way synchronization between the site context state and the URL.
   */
  init() {
    this.router = this.injector.get(Router);
    this.location = this.injector.get(Location);
    const routingParams = this.siteContextParams.getUrlEncodingParameters();
    if (routingParams.length) {
      this.setContextParamsFromRoute(this.location.path(true));
      this.subscribeChanges(routingParams);
      this.subscribeRouting();
    }
  }
  /**
   * After each change of the site context state, it modifies the current URL in place.
   * But it happens only for the parameters configured to be persisted in the URL.
   */
  subscribeChanges(params) {
    params.forEach((param) => {
      const service = this.siteContextParams.getSiteContextService(param);
      if (service) {
        this.subscription.add(service.getActive().subscribe((value) => {
          if (!this.isNavigating && this.contextValues[param] && this.contextValues[param] !== value) {
            const parsed = this.router.parseUrl(this.router.url);
            const serialized = this.router.serializeUrl(parsed);
            this.location.replaceState(serialized);
          }
          this.contextValues[param] = value;
        }));
      }
    });
  }
  /**
   * After each Angular NavigationStart event it updates the site context state based on
   * site context params encoded in the anticipated URL.
   */
  subscribeRouting() {
    this.subscription.add(this.router.events.pipe(filter((event) => event instanceof NavigationStart || event instanceof NavigationEnd || event instanceof NavigationError || event instanceof NavigationCancel)).subscribe((event) => {
      this.isNavigating = event instanceof NavigationStart;
      if (this.isNavigating) {
        this.setContextParamsFromRoute(event.url);
      }
    }));
  }
  /**
   * Updates the site context state based on the context params encoded in the given URL
   *
   * @param url URL with encoded context params
   */
  setContextParamsFromRoute(url) {
    const {
      params
    } = this.serializer.urlExtractContextParameters(url);
    Object.keys(params).forEach((param) => this.siteContextParams.setValue(param, params[param]));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function SiteContextRoutesHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteContextRoutesHandler)(ɵɵinject(SiteContextParamsService), ɵɵinject(SiteContextUrlSerializer), ɵɵinject(Injector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SiteContextRoutesHandler,
      factory: _SiteContextRoutesHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteContextRoutesHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: SiteContextParamsService
  }, {
    type: SiteContextUrlSerializer
  }, {
    type: Injector
  }], null);
})();
function initializeContext(configInit, siteContextRoutesHandler) {
  return () => {
    return lastValueFrom(configInit.getStable("context").pipe(tap(() => {
      siteContextRoutesHandler.init();
    })));
  };
}
var contextServiceProviders = [BaseSiteService, LanguageService, CurrencyService, {
  provide: APP_INITIALIZER,
  useFactory: initializeContext,
  deps: [ConfigInitializerService, SiteContextRoutesHandler],
  multi: true
}];
var siteContextParamsProviders = [SiteContextParamsService, SiteContextUrlSerializer, {
  provide: UrlSerializer,
  useExisting: SiteContextUrlSerializer
}];
var BaseSiteEffects = class _BaseSiteEffects {
  constructor(actions$, siteConnector) {
    this.actions$ = actions$;
    this.siteConnector = siteConnector;
    this.logger = inject(LoggerService);
    this.loadBaseSite$ = createEffect(() => this.actions$.pipe(ofType(LOAD_BASE_SITE), exhaustMap(() => {
      return this.siteConnector.getBaseSite().pipe(map((baseSite) => {
        if (baseSite) {
          return new LoadBaseSiteSuccess(baseSite);
        } else {
          throw new Error("BaseSite is not found");
        }
      }), catchError((error) => of(new LoadBaseSiteFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.loadBaseSites$ = createEffect(() => this.actions$.pipe(ofType(LOAD_BASE_SITES), exhaustMap(() => {
      return this.siteConnector.getBaseSites().pipe(map((baseSites) => new LoadBaseSitesSuccess(baseSites)), catchError((error) => of(new LoadBaseSitesFail(tryNormalizeHttpError(error, this.logger)))));
    })));
  }
  static {
    this.ɵfac = function BaseSiteEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseSiteEffects)(ɵɵinject(Actions), ɵɵinject(SiteConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BaseSiteEffects,
      factory: _BaseSiteEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseSiteEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: SiteConnector
  }], null);
})();
var CurrenciesEffects = class _CurrenciesEffects {
  constructor(actions$, siteConnector, state) {
    this.actions$ = actions$;
    this.siteConnector = siteConnector;
    this.state = state;
    this.logger = inject(LoggerService);
    this.loadCurrencies$ = createEffect(() => this.actions$.pipe(ofType(LOAD_CURRENCIES), exhaustMap(() => {
      return this.siteConnector.getCurrencies().pipe(map((currencies) => new LoadCurrenciesSuccess(currencies)), catchError((error) => of(new LoadCurrenciesFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.activateCurrency$ = createEffect(() => this.state.select(getActiveCurrency).pipe(
      bufferCount(2, 1),
      // avoid dispatching `change` action when we're just setting the initial value:
      filter(([previous]) => !!previous),
      map(([previous, current]) => new CurrencyChange({
        previous,
        current
      }))
    ));
  }
  static {
    this.ɵfac = function CurrenciesEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CurrenciesEffects)(ɵɵinject(Actions), ɵɵinject(SiteConnector), ɵɵinject(Store));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CurrenciesEffects,
      factory: _CurrenciesEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrenciesEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: SiteConnector
  }, {
    type: Store
  }], null);
})();
var LanguagesEffects = class _LanguagesEffects {
  constructor(actions$, siteConnector, state) {
    this.actions$ = actions$;
    this.siteConnector = siteConnector;
    this.state = state;
    this.logger = inject(LoggerService);
    this.loadLanguages$ = createEffect(() => this.actions$.pipe(ofType(LOAD_LANGUAGES), exhaustMap(() => {
      return this.siteConnector.getLanguages().pipe(map((languages) => new LoadLanguagesSuccess(languages)), catchError((error) => of(new LoadLanguagesFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.activateLanguage$ = createEffect(() => this.state.select(getActiveLanguage).pipe(
      bufferCount(2, 1),
      // avoid dispatching `change` action when we're just setting the initial value:
      filter(([previous]) => !!previous),
      map(([previous, current]) => new LanguageChange({
        previous,
        current
      }))
    ));
  }
  static {
    this.ɵfac = function LanguagesEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LanguagesEffects)(ɵɵinject(Actions), ɵɵinject(SiteConnector), ɵɵinject(Store));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _LanguagesEffects,
      factory: _LanguagesEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguagesEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: SiteConnector
  }, {
    type: Store
  }], null);
})();
var effects$5 = [LanguagesEffects, CurrenciesEffects, BaseSiteEffects];
var initialState$o = {
  entities: null,
  details: {},
  activeSite: ""
};
function reducer$o(state = initialState$o, action) {
  switch (action.type) {
    case LOAD_BASE_SITE_SUCCESS: {
      return __spreadProps(__spreadValues({}, state), {
        details: action.payload
      });
    }
    case SET_ACTIVE_BASE_SITE: {
      let details = {};
      if (state.entities) {
        details = state.entities[action.payload];
      }
      return __spreadProps(__spreadValues({}, state), {
        details,
        activeSite: action.payload
      });
    }
    case LOAD_BASE_SITES_SUCCESS: {
      const sites = action.payload;
      const entities = sites.reduce((siteEntities, site) => {
        return __spreadProps(__spreadValues({}, siteEntities), {
          [site.uid ?? ""]: site
        });
      }, __spreadValues({}, state.entities));
      const details = entities[state.activeSite];
      return __spreadProps(__spreadValues({}, state), {
        details,
        entities
      });
    }
  }
  return state;
}
var initialState$n = {
  entities: null,
  activeCurrency: null
};
function reducer$n(state = initialState$n, action) {
  switch (action.type) {
    case LOAD_CURRENCIES_SUCCESS: {
      const currencies = action.payload;
      const entities = currencies.reduce((currEntities, currency) => {
        return __spreadProps(__spreadValues({}, currEntities), {
          [currency.isocode ?? ""]: currency
        });
      }, __spreadValues({}, state.entities));
      return __spreadProps(__spreadValues({}, state), {
        entities
      });
    }
    case SET_ACTIVE_CURRENCY: {
      const isocode = action.payload;
      return __spreadProps(__spreadValues({}, state), {
        activeCurrency: isocode
      });
    }
  }
  return state;
}
var initialState$m = {
  entities: null,
  activeLanguage: null
};
function reducer$m(state = initialState$m, action) {
  switch (action.type) {
    case LOAD_LANGUAGES_SUCCESS: {
      const languages = action.payload;
      const entities = languages.reduce((langEntities, language) => {
        return __spreadProps(__spreadValues({}, langEntities), {
          [language.isocode ?? ""]: language
        });
      }, __spreadValues({}, state.entities));
      return __spreadProps(__spreadValues({}, state), {
        entities
      });
    }
    case SET_ACTIVE_LANGUAGE: {
      const isocode = action.payload;
      return __spreadProps(__spreadValues({}, state), {
        activeLanguage: isocode
      });
    }
  }
  return state;
}
function getReducers$7() {
  return {
    languages: reducer$m,
    currencies: reducer$n,
    baseSite: reducer$o
  };
}
var reducerToken$7 = new InjectionToken("SiteContextReducers");
var reducerProvider$7 = {
  provide: reducerToken$7,
  useFactory: getReducers$7
};
function siteContextStoreConfigFactory() {
  const config = {
    state: {
      ssrTransfer: {
        keys: {
          [SITE_CONTEXT_FEATURE]: StateTransferType.TRANSFER_STATE
        }
      }
    }
  };
  return config;
}
var SiteContextStoreModule = class _SiteContextStoreModule {
  static {
    this.ɵfac = function SiteContextStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteContextStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SiteContextStoreModule,
      imports: [CommonModule, StoreFeatureModule, EffectsFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(siteContextStoreConfigFactory), reducerProvider$7],
      imports: [CommonModule, StoreModule.forFeature(SITE_CONTEXT_FEATURE, reducerToken$7), EffectsModule.forFeature(effects$5)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteContextStoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, StoreModule.forFeature(SITE_CONTEXT_FEATURE, reducerToken$7), EffectsModule.forFeature(effects$5)],
      providers: [provideDefaultConfigFactory(siteContextStoreConfigFactory), reducerProvider$7]
    }]
  }], null, null);
})();
function initSiteContextConfig(configInitializer, config) {
  if (!config.context?.[BASE_SITE_CONTEXT_ID]) {
    return configInitializer;
  }
  return null;
}
var SiteContextModule = class _SiteContextModule {
  static forRoot() {
    return {
      ngModule: _SiteContextModule,
      providers: [provideDefaultConfigFactory(defaultSiteContextConfigFactory), contextServiceMapProvider, ...contextServiceProviders, ...siteContextParamsProviders, provideConfigValidator(baseSiteConfigValidator), {
        provide: CONFIG_INITIALIZER,
        useFactory: initSiteContextConfig,
        deps: [SiteContextConfigInitializer, SiteContextConfig],
        multi: true
      }, ...contextInitializerProviders]
    };
  }
  static {
    this.ɵfac = function SiteContextModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteContextModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SiteContextModule,
      imports: [StateModule, SiteContextStoreModule, SiteContextEventModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [StateModule, SiteContextStoreModule, SiteContextEventModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteContextModule, [{
    type: NgModule,
    args: [{
      imports: [StateModule, SiteContextStoreModule, SiteContextEventModule]
    }]
  }], null, null);
})();
var initialState$l = false;
function reducer$l(state = initialState$l, action) {
  switch (action.type) {
    case TOGGLE_ANONYMOUS_CONSENTS_BANNER_DISMISSED: {
      return action.dismissed;
    }
  }
  return state;
}
var initialState$k = false;
function reducer$k(state = initialState$k, action) {
  switch (action.type) {
    case TOGGLE_ANONYMOUS_CONSENT_TEMPLATES_UPDATED: {
      return action.updated;
    }
  }
  return state;
}
var initialState$j = [];
function toggleConsentStatus(consents, templateCode, status) {
  if (!consents) {
    return [];
  }
  return consents.map((consent) => {
    if (consent.templateCode === templateCode) {
      consent = __spreadProps(__spreadValues({}, consent), {
        consentState: status
      });
    }
    return consent;
  });
}
function reducer$j(state = initialState$j, action) {
  switch (action.type) {
    case GIVE_ANONYMOUS_CONSENT: {
      return toggleConsentStatus(state, action.templateCode, ANONYMOUS_CONSENT_STATUS.GIVEN);
    }
    case WITHDRAW_ANONYMOUS_CONSENT: {
      return toggleConsentStatus(state, action.templateCode, ANONYMOUS_CONSENT_STATUS.WITHDRAWN);
    }
    case SET_ANONYMOUS_CONSENTS: {
      return action.payload;
    }
  }
  return state;
}
function getReducers$6() {
  return {
    templates: loaderReducer(ANONYMOUS_CONSENTS),
    consents: reducer$j,
    ui: combineReducers({
      bannerDismissed: reducer$l,
      updated: reducer$k
    })
  };
}
var reducerToken$6 = new InjectionToken("AnonymousConsentsReducers");
var reducerProvider$6 = {
  provide: reducerToken$6,
  useFactory: getReducers$6
};
function clearAnonymousConsentTemplates(reducer2) {
  return function(state, action) {
    if (state !== void 0 && (action.type === LOGOUT || action.type === LANGUAGE_CHANGE)) {
      state = __spreadProps(__spreadValues({}, state), {
        templates: {}
      });
    }
    return reducer2(state, action);
  };
}
var metaReducers$3 = [clearAnonymousConsentTemplates];
var AnonymousConsentsStatePersistenceService = class _AnonymousConsentsStatePersistenceService {
  constructor(statePersistenceService, store, anonymousConsentsService) {
    this.statePersistenceService = statePersistenceService;
    this.store = store;
    this.anonymousConsentsService = anonymousConsentsService;
    this.subscription = new Subscription();
    this.key = "anonymous-consents";
  }
  /**
   * Initializes the synchronization between state and browser storage.
   */
  initSync() {
    this.subscription.add(this.statePersistenceService.syncWithStorage({
      key: this.key,
      state$: this.getAuthState(),
      onRead: (state) => this.onRead(state)
    }));
  }
  /**
   * Gets and transforms state from different sources into the form that should
   * be saved in storage.
   */
  getAuthState() {
    return this.store.select(getAnonymousConsentState);
  }
  /**
   * Function called on each browser storage read.
   * Used to update state from browser -> state.
   */
  onRead(state) {
    const templates = state?.templates;
    const consents = state?.consents;
    const ui = state?.ui;
    if (templates?.success) {
      this.store.dispatch(new LoadAnonymousConsentTemplatesSuccess(templates.value ?? []));
    }
    if (consents) {
      this.anonymousConsentsService.setConsents(consents);
    }
    if (ui) {
      this.anonymousConsentsService.toggleBannerDismissed(ui?.bannerDismissed);
      this.anonymousConsentsService.toggleTemplatesUpdated(ui?.updated);
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function AnonymousConsentsStatePersistenceService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnonymousConsentsStatePersistenceService)(ɵɵinject(StatePersistenceService), ɵɵinject(Store), ɵɵinject(AnonymousConsentsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AnonymousConsentsStatePersistenceService,
      factory: _AnonymousConsentsStatePersistenceService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnonymousConsentsStatePersistenceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: StatePersistenceService
  }, {
    type: Store
  }, {
    type: AnonymousConsentsService
  }], null);
})();
function anonymousConsentsStatePersistenceFactory(anonymousConsentsStatePersistenceService) {
  const result = () => anonymousConsentsStatePersistenceService.initSync();
  return result;
}
var AnonymousConsentsStoreModule = class _AnonymousConsentsStoreModule {
  static {
    this.ɵfac = function AnonymousConsentsStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnonymousConsentsStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AnonymousConsentsStoreModule,
      imports: [CommonModule, StateModule, StoreFeatureModule, EffectsFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [reducerProvider$6, {
        provide: APP_INITIALIZER,
        useFactory: anonymousConsentsStatePersistenceFactory,
        deps: [AnonymousConsentsStatePersistenceService],
        multi: true
      }],
      imports: [CommonModule, StateModule, StoreModule.forFeature(ANONYMOUS_CONSENTS_STORE_FEATURE, reducerToken$6, {
        metaReducers: metaReducers$3
      }), EffectsModule.forFeature(effects$6)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnonymousConsentsStoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, StateModule, StoreModule.forFeature(ANONYMOUS_CONSENTS_STORE_FEATURE, reducerToken$6, {
        metaReducers: metaReducers$3
      }), EffectsModule.forFeature(effects$6)],
      providers: [reducerProvider$6, {
        provide: APP_INITIALIZER,
        useFactory: anonymousConsentsStatePersistenceFactory,
        deps: [AnonymousConsentsStatePersistenceService],
        multi: true
      }]
    }]
  }], null, null);
})();
var AnonymousConsentsModule = class _AnonymousConsentsModule {
  static forRoot() {
    return {
      ngModule: _AnonymousConsentsModule,
      providers: [...interceptors, AnonymousConsentsService, provideDefaultConfig(defaultAnonymousConsentsConfig)]
    };
  }
  static {
    this.ɵfac = function AnonymousConsentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnonymousConsentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AnonymousConsentsModule,
      imports: [AnonymousConsentsStoreModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [AnonymousConsentsStoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnonymousConsentsModule, [{
    type: NgModule,
    args: [{
      imports: [AnonymousConsentsStoreModule]
    }]
  }], null, null);
})();
var defaultCmsModuleConfig = {
  backend: {
    occ: {
      endpoints: {
        component: "cms/components/${id}",
        components: "cms/components",
        pages: "cms/pages",
        page: "cms/pages/${id}"
      }
    }
  },
  cmsComponents: {},
  componentsLoading: {
    pageSize: 50
  }
};
var defaultUserCmsModuleConfig = __spreadProps(__spreadValues({}, defaultCmsModuleConfig), {
  backend: {
    occ: {
      endpoints: {
        component: "users/${userId}/cms/components/${id}",
        components: "users/${userId}/cms/components",
        pages: "users/${userId}/cms/pages",
        page: "users/${userId}/cms/pages/${id}"
      }
    }
  }
});
var CMS_FEATURE = "cms";
var NAVIGATION_DETAIL_ENTITY = "[Cms] Navigation Entity";
var COMPONENT_ENTITY = "[Cms] Component Entity";
var LOAD_CMS_COMPONENT = "[Cms] Load Component";
var LOAD_CMS_COMPONENT_FAIL = "[Cms] Load Component Fail";
var LOAD_CMS_COMPONENT_SUCCESS = "[Cms] Load Component Success";
var CMS_GET_COMPONENT_FROM_PAGE = "[Cms] Get Component from Page";
var LoadCmsComponent = class extends EntityLoadAction {
  constructor(payload) {
    super(COMPONENT_ENTITY, payload.uid);
    this.payload = payload;
    this.type = LOAD_CMS_COMPONENT;
  }
};
var LoadCmsComponentFail = class extends EntityFailAction {
  constructor(payload) {
    super(COMPONENT_ENTITY, payload.uid, payload.error);
    this.payload = payload;
    this.type = LOAD_CMS_COMPONENT_FAIL;
  }
};
var LoadCmsComponentSuccess = class extends EntitySuccessAction {
  constructor(payload) {
    super(COMPONENT_ENTITY, payload.uid || payload.component.uid || "");
    this.payload = payload;
    this.type = LOAD_CMS_COMPONENT_SUCCESS;
  }
};
var CmsGetComponentFromPage = class extends EntitySuccessAction {
  constructor(payload) {
    super(COMPONENT_ENTITY, [].concat(payload).map((cmp) => cmp.component.uid));
    this.payload = payload;
    this.type = CMS_GET_COMPONENT_FROM_PAGE;
  }
};
var LOAD_CMS_NAVIGATION_ITEMS = "[Cms] Load NavigationEntry items";
var LOAD_CMS_NAVIGATION_ITEMS_FAIL = "[Cms] Load NavigationEntry items Fail";
var LOAD_CMS_NAVIGATION_ITEMS_SUCCESS = "[Cms] Load NavigationEntry items Success";
var LoadCmsNavigationItems = class extends EntityLoadAction {
  constructor(payload) {
    super(NAVIGATION_DETAIL_ENTITY, payload.nodeId);
    this.payload = payload;
    this.type = LOAD_CMS_NAVIGATION_ITEMS;
  }
};
var LoadCmsNavigationItemsFail = class extends EntityFailAction {
  constructor(nodeId, payload) {
    super(NAVIGATION_DETAIL_ENTITY, nodeId, payload);
    this.payload = payload;
    this.type = LOAD_CMS_NAVIGATION_ITEMS_FAIL;
  }
};
var LoadCmsNavigationItemsSuccess = class extends EntitySuccessAction {
  constructor(payload) {
    super(NAVIGATION_DETAIL_ENTITY, payload.nodeId);
    this.payload = payload;
    this.type = LOAD_CMS_NAVIGATION_ITEMS_SUCCESS;
  }
};
var LOAD_CMS_PAGE_DATA = "[Cms] Load Page Data";
var LOAD_CMS_PAGE_DATA_FAIL = "[Cms] Load Page Data Fail";
var LOAD_CMS_PAGE_DATA_SUCCESS = "[Cms] Load Page Data Success";
var CMS_SET_PAGE_SUCCESS_INDEX = "[Cms] Set Page Success Index";
var CMS_SET_PAGE_FAIL_INDEX = "[Cms] Set Page Fail Index";
var LoadCmsPageData = class extends EntityLoadAction {
  constructor(payload) {
    super(payload.type ?? "", payload.id);
    this.payload = payload;
    this.type = LOAD_CMS_PAGE_DATA;
  }
};
var LoadCmsPageDataFail = class extends EntityFailAction {
  constructor(pageContext, error) {
    super(pageContext.type ?? "", pageContext.id, error);
    this.type = LOAD_CMS_PAGE_DATA_FAIL;
  }
};
var LoadCmsPageDataSuccess = class extends EntitySuccessAction {
  constructor(pageContext, payload) {
    super(pageContext.type ?? "", pageContext.id, payload);
    this.type = LOAD_CMS_PAGE_DATA_SUCCESS;
  }
};
var CmsSetPageSuccessIndex = class extends EntitySuccessAction {
  constructor(pageContext, payload) {
    super(pageContext.type ?? "", pageContext.id, payload);
    this.type = CMS_SET_PAGE_SUCCESS_INDEX;
  }
};
var CmsSetPageFailIndex = class extends EntityFailAction {
  constructor(pageContext, payload) {
    super(pageContext.type ?? "", pageContext.id, new Error("Failed to set cms page index"));
    this.payload = payload;
    this.type = CMS_SET_PAGE_FAIL_INDEX;
  }
};
var cmsGroup_actions = Object.freeze({
  __proto__: null,
  CMS_GET_COMPONENT_FROM_PAGE,
  CMS_SET_PAGE_FAIL_INDEX,
  CMS_SET_PAGE_SUCCESS_INDEX,
  CmsGetComponentFromPage,
  CmsSetPageFailIndex,
  CmsSetPageSuccessIndex,
  LOAD_CMS_COMPONENT,
  LOAD_CMS_COMPONENT_FAIL,
  LOAD_CMS_COMPONENT_SUCCESS,
  LOAD_CMS_NAVIGATION_ITEMS,
  LOAD_CMS_NAVIGATION_ITEMS_FAIL,
  LOAD_CMS_NAVIGATION_ITEMS_SUCCESS,
  LOAD_CMS_PAGE_DATA,
  LOAD_CMS_PAGE_DATA_FAIL,
  LOAD_CMS_PAGE_DATA_SUCCESS,
  LoadCmsComponent,
  LoadCmsComponentFail,
  LoadCmsComponentSuccess,
  LoadCmsNavigationItems,
  LoadCmsNavigationItemsFail,
  LoadCmsNavigationItemsSuccess,
  LoadCmsPageData,
  LoadCmsPageDataFail,
  LoadCmsPageDataSuccess
});
var getCmsState = createFeatureSelector(CMS_FEATURE);
var getComponentsState = createSelector(getCmsState, (state) => state.components);
var componentsContextSelectorFactory = (uid) => {
  return createSelector(getComponentsState, (componentsState) => entitySelector(componentsState, uid));
};
var componentsLoaderStateSelectorFactory = (uid, context) => {
  return createSelector(componentsContextSelectorFactory(uid), (componentsContext) => componentsContext && componentsContext.pageContext && componentsContext.pageContext[context] || initialLoaderState);
};
var componentsContextExistsSelectorFactory = (uid, context) => {
  return createSelector(componentsLoaderStateSelectorFactory(uid, context), (loaderState) => loaderValueSelector(loaderState));
};
var componentsDataSelectorFactory = (uid) => {
  return createSelector(componentsContextSelectorFactory(uid), (state) => state ? state.component : void 0);
};
var componentsSelectorFactory = (uid, context) => {
  return createSelector(componentsDataSelectorFactory(uid), componentsContextExistsSelectorFactory(uid, context), (componentState, exists2) => {
    switch (exists2) {
      case true:
        return componentState;
      case false:
        return null;
      case void 0:
        return void 0;
    }
  });
};
var getNavigationEntryItemState = createSelector(getCmsState, (state) => state.navigation);
var getSelectedNavigationEntryItemState = (nodeId) => {
  return createSelector(getNavigationEntryItemState, (nodes) => entityLoaderStateSelector(nodes, nodeId));
};
var getNavigationEntryItems = (nodeId) => {
  return createSelector(getSelectedNavigationEntryItemState(nodeId), (itemState) => loaderValueSelector(itemState));
};
var getPageEntitiesSelector = (state) => state.pageData.entities;
var getIndexByType = (index, type) => {
  switch (type) {
    case PageType.CONTENT_PAGE: {
      return index.content;
    }
    case PageType.PRODUCT_PAGE: {
      return index.product;
    }
    case PageType.CATEGORY_PAGE: {
      return index.category;
    }
    case PageType.CATALOG_PAGE: {
      return index.catalog;
    }
    default: {
      return {
        entities: {}
      };
    }
  }
};
var getPageComponentTypesSelector = (page) => {
  const componentTypes = /* @__PURE__ */ new Set();
  if (page && page.slots) {
    for (const slot of Object.keys(page.slots)) {
      for (const component of page.slots[slot].components || []) {
        componentTypes.add(component.flexType ?? "");
      }
    }
  }
  return Array.from(componentTypes);
};
var getPageState = createSelector(getCmsState, (state) => state.page);
var getPageStateIndex = createSelector(getPageState, (page) => page.index);
var getPageStateIndexEntityLoaderState = (pageContext) => createSelector(getPageStateIndex, (index) => getIndexByType(index, pageContext.type));
var getPageStateIndexLoaderState = (pageContext) => createSelector(getPageStateIndexEntityLoaderState(pageContext), (indexState) => entityLoaderStateSelector(indexState, pageContext.id));
var getPageStateIndexValue = (pageContext) => createSelector(getPageStateIndexLoaderState(pageContext), (entity) => loaderValueSelector(entity));
var getPageEntities = createSelector(getPageState, getPageEntitiesSelector);
var getPageData = (pageContext) => createSelector(getPageEntities, getPageStateIndexValue(pageContext), (entities, indexValue) => entities[indexValue]);
var getPageComponentTypes = (pageContext) => createSelector(getPageData(pageContext), (pageData) => getPageComponentTypesSelector(pageData));
var getCurrentSlotSelectorFactory = (pageContext, position) => {
  return createSelector(getPageData(pageContext), (entity) => {
    if (entity) {
      return entity.slots?.[position] || {
        components: []
      };
    }
  });
};
var cmsGroup_selectors = Object.freeze({
  __proto__: null,
  componentsContextExistsSelectorFactory,
  componentsContextSelectorFactory,
  componentsDataSelectorFactory,
  componentsLoaderStateSelectorFactory,
  componentsSelectorFactory,
  getCmsState,
  getComponentsState,
  getCurrentSlotSelectorFactory,
  getNavigationEntryItemState,
  getNavigationEntryItems,
  getPageComponentTypes,
  getPageData,
  getPageEntities,
  getPageState,
  getPageStateIndex,
  getPageStateIndexEntityLoaderState,
  getPageStateIndexLoaderState,
  getPageStateIndexValue,
  getSelectedNavigationEntryItemState
});
var CURRENT_CONTEXT_KEY = "current";
function serializePageContext(pageContext, ignoreContentPageId) {
  if (!pageContext) {
    return CURRENT_CONTEXT_KEY;
  }
  if (ignoreContentPageId && pageContext.type === PageType.CONTENT_PAGE) {
    return `${pageContext.type}`;
  }
  return `${pageContext.type}-${pageContext.id}`;
}
var CmsService = class _CmsService {
  constructor(store, routingService) {
    this.store = store;
    this.routingService = routingService;
    this.components = {};
  }
  /**
   * Get current CMS page data
   */
  getCurrentPage() {
    return this.routingService.getPageContext().pipe(switchMap((pageContext) => this.store.select(getPageData(pageContext))));
  }
  /**
   * Get CMS component data by uid
   *
   * This method can be safely and optimally used to load multiple components data at the same time.
   * Calling getComponentData multiple times for different components will always result in optimized
   * back-end request: all components requested at the same time (in one event loop) will be loaded in one network call.
   *
   * In case the component data is not present, the method will load it.
   * Otherwise, if the page context is not provided, the current page context from the router state will be used instead.
   *
   * @param uid CMS component uid
   * @param pageContext if provided, it will be used to lookup the component data.
   */
  getComponentData(uid, pageContext) {
    if (uid === "") {
      return of(null);
    }
    const context = serializePageContext(pageContext, true);
    if (!this.components[uid]) {
      this.components[uid] = {};
    }
    const component = this.components[uid];
    if (!component[context]) {
      component[context] = this.createComponentData(uid, pageContext);
    }
    return component[context];
  }
  createComponentData(uid, pageContext) {
    if (!pageContext) {
      return this.routingService.getPageContext().pipe(filter((currentContext) => !!currentContext), switchMap((currentContext) => this.getComponentData(uid, currentContext)));
    }
    const context = serializePageContext(pageContext, true);
    const loading$ = combineLatest([this.routingService.getNextPageContext(), this.store.pipe(select(componentsLoaderStateSelectorFactory(uid, context)))]).pipe(observeOn(queueScheduler), tap(([nextContext, loadingState]) => {
      const attemptedLoad = loadingState.loading || loadingState.success || loadingState.error;
      const couldBeLoadedWithPageData = nextContext ? serializePageContext(nextContext, true) === context : false;
      if (!attemptedLoad && !couldBeLoadedWithPageData) {
        this.store.dispatch(new LoadCmsComponent({
          uid,
          pageContext
        }));
      }
    }));
    const component$ = this.store.pipe(select(componentsSelectorFactory(uid, context)), filter(isNotUndefined));
    return using(() => loading$.subscribe(), () => component$).pipe(shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  /**
   * Given the position, get the content slot data
   * @param position : content slot position
   */
  getContentSlot(position) {
    return this.routingService.getPageContext().pipe(switchMap((pageContext) => this.store.pipe(select(getCurrentSlotSelectorFactory(pageContext, position)), filter(isNotUndefined))));
  }
  /**
   * Given navigation node uid, get items (with id and type) inside the navigation entries
   * @param navigationNodeUid : uid of the navigation node
   */
  getNavigationEntryItems(navigationNodeUid) {
    return this.store.pipe(select(getNavigationEntryItems(navigationNodeUid)));
  }
  /**
   * Load navigation items data
   * @param rootUid : the uid of the root navigation node
   * @param itemList : list of items (with id and type)
   */
  loadNavigationItems(rootUid, itemList) {
    this.store.dispatch(new LoadCmsNavigationItems({
      nodeId: rootUid,
      items: itemList
    }));
  }
  /**
   * Refresh the content of the latest cms page
   */
  refreshLatestPage() {
    this.routingService.getPageContext().pipe(take(1)).subscribe((pageContext) => this.store.dispatch(new LoadCmsPageData(pageContext)));
  }
  /**
   * Refresh the cms page content by page Id
   * @param pageId
   */
  refreshPageById(pageId) {
    const pageContext = {
      id: pageId
    };
    this.store.dispatch(new LoadCmsPageData(pageContext));
  }
  /**
   * Refresh cms component's content
   * @param uid component uid
   * @param pageContext an optional parameter that enables the caller to specify for which context the component should be refreshed.
   * If not specified, 'current' page context is used.
   */
  refreshComponent(uid, pageContext) {
    this.store.dispatch(new LoadCmsComponent({
      uid,
      pageContext
    }));
  }
  /**
   * Given pageContext, return the CMS page data
   * @param pageContext
   */
  getPageState(pageContext) {
    return this.store.pipe(select(getPageData(pageContext)));
  }
  /**
   * Given pageContext, return the CMS page data
   * @param pageContext
   */
  getPageComponentTypes(pageContext) {
    return this.store.pipe(select(getPageComponentTypes(pageContext)));
  }
  /**
   * Given pageContext, return whether the CMS page data exists or not
   * @param pageContext
   */
  hasPage(pageContext, forceReload = false) {
    return this.store.pipe(select(getPageStateIndexLoaderState(pageContext)), tap((entity) => {
      const attemptedLoad = entity.loading || entity.success || entity.error;
      const shouldReload = forceReload && !entity.loading;
      if (!attemptedLoad || shouldReload) {
        this.store.dispatch(new LoadCmsPageData(pageContext));
        forceReload = false;
      }
    }), filter((entity) => {
      if (!entity.hasOwnProperty("value")) {
        return false;
      }
      return Boolean(entity.success || entity.error && !entity.loading);
    }), map((loaderState) => !!loaderState.success), catchError(() => of(false)));
  }
  /**
   * Given pageContext, return the CMS page data
   **/
  getPage(pageContext, forceReload = false) {
    return this.hasPage(pageContext, forceReload).pipe(switchMap((hasPage) => hasPage ? this.getPageState(pageContext) : of(null)));
  }
  getPageIndex(pageContext) {
    return this.store.pipe(select(getPageStateIndexValue(pageContext)));
  }
  setPageFailIndex(pageContext, value) {
    this.store.dispatch(new CmsSetPageFailIndex(pageContext, value));
  }
  static {
    this.ɵfac = function CmsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CmsService)(ɵɵinject(Store), ɵɵinject(RoutingService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CmsService,
      factory: _CmsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CmsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: RoutingService
  }], null);
})();
var defaultPageMetaConfig = {
  pageMeta: {
    resolvers: [{
      property: "title",
      method: "resolveTitle"
    }, {
      property: "heading",
      method: "resolveHeading"
    }, {
      property: "breadcrumbs",
      method: "resolveBreadcrumbs"
    }, {
      property: "description",
      method: "resolveDescription"
    }, {
      property: "image",
      method: "resolveImage"
    }, {
      property: "robots",
      method: "resolveRobots"
    }, {
      property: "canonicalUrl",
      method: "resolveCanonicalUrl"
    }],
    canonicalUrl: {
      forceHttps: true,
      forceWww: false,
      removeQueryParams: true,
      forceTrailingSlash: true
    }
  }
};
var PageMetaResolver = class {
  /**
   * Returns the matching score for a resolver class, based on
   * the page type and page template.
   */
  getScore(page) {
    let score = 0;
    if (this.pageType) {
      score += page.type === this.pageType ? 1 : -1;
    }
    if (this.pageTemplate) {
      score += page.template === this.pageTemplate ? 1 : -1;
    }
    if (this.pageUid) {
      score += page.pageId === this.pageUid ? 10 : -10;
    }
    return score;
  }
  hasMatch(page) {
    return this.getScore(page) > 0;
  }
  getPriority(page) {
    return this.getScore(page);
  }
};
var TranslationService = class {
};
var DefaultRoutePageMetaResolver = class _DefaultRoutePageMetaResolver {
  constructor(translation) {
    this.translation = translation;
  }
  /**
   * Resolves breadcrumb based on the given url and the breadcrumb config.
   *
   * - When breadcrumb config is empty, it returns an empty breadcrumb.
   * - When breadcrumb config is a string or object with `i18n` property,
   *    it translates it and use as a label of the returned breadcrumb.
   * - When breadcrumb config is an object with property `raw`, then
   *    it's used as a label of the returned breadcrumb.
   */
  resolveBreadcrumbs({
    url,
    pageMetaConfig
  }) {
    const breadcrumbConfig = pageMetaConfig?.breadcrumb;
    if (!breadcrumbConfig) {
      return of([]);
    }
    if (typeof breadcrumbConfig !== "string" && breadcrumbConfig.raw) {
      return of([{
        link: url,
        label: breadcrumbConfig.raw
      }]);
    }
    return this.translateBreadcrumbLabel(breadcrumbConfig).pipe(map((label) => [{
      label,
      link: url
    }]));
  }
  /**
   * Translates the configured breadcrumb label
   */
  translateBreadcrumbLabel(breadcrumbConfig) {
    const i18nKey = typeof breadcrumbConfig === "string" ? breadcrumbConfig : breadcrumbConfig.i18n;
    return this.getParams().pipe(switchMap((params) => this.translation.translate(i18nKey ?? "", params ?? {})));
  }
  /**
   * Resolves dynamic data for the whole resolver.
   */
  getParams() {
    return of({});
  }
  static {
    this.ɵfac = function DefaultRoutePageMetaResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultRoutePageMetaResolver)(ɵɵinject(TranslationService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DefaultRoutePageMetaResolver,
      factory: _DefaultRoutePageMetaResolver.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultRoutePageMetaResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TranslationService
  }], null);
})();
var RoutingPageMetaResolver = class _RoutingPageMetaResolver {
  constructor(activatedRoutesService, injector) {
    this.activatedRoutesService = activatedRoutesService;
    this.injector = injector;
    this.routes$ = this.activatedRoutesService.routes$.pipe(
      // drop the first route - the special `root` route:
      map((routes) => routes = routes.slice(1, routes.length))
    );
    this.routesWithExtras$ = this.routes$.pipe(map((routes) => routes.reduce((results, route) => {
      const parent = results.length ? results[results.length - 1] : {
        route: null,
        resolver: this.injector.get(DefaultRoutePageMetaResolver),
        url: ""
      };
      const resolver = this.getResolver(route) ?? parent.resolver;
      const urlPart = this.getUrlPart(route);
      const url = parent.url + (urlPart ? `/${urlPart}` : "");
      return results.concat({
        route,
        resolver,
        url
      });
    }, [])), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  /**
   * Array of breadcrumbs defined for all the activated routes (from the root route to the leaf route).
   * It emits on every completed routing navigation.
   */
  resolveBreadcrumbs(options) {
    return this.routesWithExtras$.pipe(map((routesWithExtras) => options?.includeCurrentRoute ? routesWithExtras : this.trimCurrentRoute(routesWithExtras)), switchMap((routesWithExtras) => routesWithExtras.length ? combineLatest(routesWithExtras.map((routeWithExtras) => this.resolveRouteBreadcrumb(routeWithExtras))) : of([])), map((breadcrumbArrays) => breadcrumbArrays.flat()));
  }
  /**
   * Returns the instance of the RoutePageMetaResolver configured for the given activated route.
   * Returns null in case there the resolver can't be injected or is undefined.
   *
   * @param route route to resolve
   */
  getResolver(route) {
    const pageMetaConfig = this.getPageMetaConfig(route);
    if (typeof pageMetaConfig !== "string" && pageMetaConfig?.resolver) {
      return this.injector.get(pageMetaConfig.resolver, null);
    }
    return null;
  }
  /**
   * Resolvers breadcrumb for a specific route
   */
  resolveRouteBreadcrumb({
    route,
    resolver,
    url
  }) {
    const breadcrumbResolver = resolver;
    if (typeof breadcrumbResolver.resolveBreadcrumbs === "function") {
      return breadcrumbResolver.resolveBreadcrumbs({
        route,
        url,
        pageMetaConfig: this.getPageMetaConfig(route)
      });
    }
    return of([]);
  }
  /**
   * By default in breadcrumbs list we don't want to show a link to the current page, so this function
   * trims the last breadcrumb (the breadcrumb of the current route).
   *
   * This function also handles special case when the current route has a configured empty path ('' route).
   * The '' routes are often a _technical_ routes to organize other routes, assign common guards for its children, etc.
   * It shouldn't happen that '' route has a defined breadcrumb config.
   *
   * In that case, we trim not only the last route ('' route), but also its parent route with non-empty path
   * (which likely defines the breadcrumb config).
   */
  trimCurrentRoute(routesWithExtras) {
    let i = routesWithExtras.length - 1;
    while (routesWithExtras[i]?.route?.url.length === 0 && i >= 0) {
      i--;
    }
    return routesWithExtras.slice(0, i);
  }
  /**
   * Returns the URL path for the given activated route in a string format.
   * (ActivatedRouteSnapshot#url contains an array of `UrlSegment`s, not a string)
   */
  getUrlPart(route) {
    return route.url.map((urlSegment) => urlSegment.path).join("/");
  }
  /**
   * Returns the breadcrumb config placed in the route's `data` configuration.
   */
  getPageMetaConfig(route) {
    return route?.routeConfig?.data?.cxPageMeta;
  }
  static {
    this.ɵfac = function RoutingPageMetaResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoutingPageMetaResolver)(ɵɵinject(ActivatedRoutesService), ɵɵinject(Injector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RoutingPageMetaResolver,
      factory: _RoutingPageMetaResolver.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutingPageMetaResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ActivatedRoutesService
  }, {
    type: Injector
  }], null);
})();
var PageMetaConfig = class _PageMetaConfig {
  static {
    this.ɵfac = function PageMetaConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageMetaConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PageMetaConfig,
      factory: function PageMetaConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _PageMetaConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageMetaConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var PageLinkService = class _PageLinkService {
  constructor(pageMetaConfig, winRef) {
    this.pageMetaConfig = pageMetaConfig;
    this.winRef = winRef;
  }
  /**
   * Returns the canonical for the page.
   *
   * The canonical url is created by the help of the default `CanonicalUrlOptions` from
   * the pageMeta options. The options can be further adjusted by the options argument.
   */
  getCanonicalUrl(options, url) {
    const config = __spreadValues(__spreadValues({}, this.pageMetaConfig?.pageMeta?.canonicalUrl), options);
    return this.buildCanonicalUrl(url ?? this.winRef.location.href ?? "", config);
  }
  buildCanonicalUrl(url, options) {
    if (options.forceHttps) {
      url = url.replace(/^http(?!s):/i, "https:");
    }
    if (options.forceWww) {
      url = url.replace(/^(https?:\/\/)(?!www\.)(.*)/i, "$1www.$2");
    }
    if (options.removeQueryParams) {
      url = this.removeQueryParams(url, options);
    }
    if (options.forceTrailingSlash) {
      url = url.replace(/^([^\?]+[^\/\?]$)$/i, "$1/");
    }
    return url;
  }
  removeQueryParams(url, config) {
    const queryPos = url.indexOf("?");
    if (queryPos > -1) {
      const urlBeforeQueryParam = url.substring(0, queryPos);
      const params = new URLSearchParams(url.substring(queryPos));
      url = urlBeforeQueryParam;
      if (Array.isArray(config.removeQueryParams)) {
        config.removeQueryParams.forEach((param) => {
          params.delete(param);
        });
        if (params.toString().length > 0) {
          url = `${urlBeforeQueryParam}?${params.toString()}`;
        }
      }
    }
    return url;
  }
  static {
    this.ɵfac = function PageLinkService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageLinkService)(ɵɵinject(PageMetaConfig), ɵɵinject(WindowRef));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PageLinkService,
      factory: _PageLinkService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageLinkService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: PageMetaConfig
  }, {
    type: WindowRef
  }], null);
})();
var BasePageMetaResolver = class _BasePageMetaResolver {
  constructor(cmsService, translation, routingPageMetaResolver, router, pageLinkService) {
    this.cmsService = cmsService;
    this.translation = translation;
    this.routingPageMetaResolver = routingPageMetaResolver;
    this.router = router;
    this.pageLinkService = pageLinkService;
    this.page$ = defer(() => this.cmsService.getCurrentPage()).pipe(filter((p) => Boolean(p)));
    this.title$ = this.page$.pipe(map((p) => p.title));
    this.description$ = this.page$.pipe(map((p) => p.description));
    this.robots$ = this.page$.pipe(map((page) => page.robots || []));
    this.homeBreadcrumb$ = this.translation.translate("common.home").pipe(map((label) => [{
      label,
      link: "/"
    }]));
    this.breadcrumb$ = combineLatest([this.homeBreadcrumb$, defer(() => this.routingPageMetaResolver?.resolveBreadcrumbs())]).pipe(map((breadcrumbs) => breadcrumbs.flat()), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  resolveTitle() {
    return this.title$;
  }
  resolveDescription() {
    return this.description$;
  }
  /**
   * Resolves a single breadcrumb item to the home page for each `ContentPage`.
   * The home page label is resolved from the translation service.
   */
  resolveBreadcrumbs() {
    return this.breadcrumb$;
  }
  resolveRobots() {
    return this.robots$;
  }
  resolveCanonicalUrl(options) {
    return this.router.events.pipe(filter((ev) => ev instanceof NavigationEnd), startWith(null), map(() => this.pageLinkService.getCanonicalUrl(options)));
  }
  static {
    this.ɵfac = function BasePageMetaResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BasePageMetaResolver)(ɵɵinject(CmsService), ɵɵinject(TranslationService), ɵɵinject(RoutingPageMetaResolver), ɵɵinject(Router), ɵɵinject(PageLinkService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BasePageMetaResolver,
      factory: _BasePageMetaResolver.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BasePageMetaResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CmsService
  }, {
    type: TranslationService
  }, {
    type: RoutingPageMetaResolver
  }, {
    type: Router
  }, {
    type: PageLinkService
  }], null);
})();
var ContentPageMetaResolver = class _ContentPageMetaResolver extends PageMetaResolver {
  constructor(basePageMetaResolver) {
    super();
    this.basePageMetaResolver = basePageMetaResolver;
    this.pageType = PageType.CONTENT_PAGE;
  }
  resolveTitle() {
    return this.basePageMetaResolver.resolveTitle();
  }
  resolveDescription() {
    return this.basePageMetaResolver.resolveDescription();
  }
  resolveBreadcrumbs() {
    return this.basePageMetaResolver.resolveBreadcrumbs();
  }
  resolveRobots() {
    return this.basePageMetaResolver.resolveRobots();
  }
  resolveCanonicalUrl() {
    return this.basePageMetaResolver.resolveCanonicalUrl();
  }
  static {
    this.ɵfac = function ContentPageMetaResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContentPageMetaResolver)(ɵɵinject(BasePageMetaResolver));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ContentPageMetaResolver,
      factory: _ContentPageMetaResolver.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentPageMetaResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: BasePageMetaResolver
  }], null);
})();
var PageMetaModule = class _PageMetaModule {
  static forRoot() {
    return {
      ngModule: _PageMetaModule,
      providers: [provideDefaultConfig(defaultPageMetaConfig)]
    };
  }
  static {
    this.ɵfac = function PageMetaModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageMetaModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PageMetaModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: PageMetaResolver,
        useExisting: ContentPageMetaResolver,
        multi: true
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageMetaModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: PageMetaResolver,
        useExisting: ContentPageMetaResolver,
        multi: true
      }]
    }]
  }], null, null);
})();
function bufferDebounceTime(time = 0, scheduler) {
  return (source) => {
    let bufferedValues = [];
    return source.pipe(tap((value) => bufferedValues.push(value)), debounceTime(time, scheduler), map(() => bufferedValues), tap(() => bufferedValues = []));
  };
}
var CmsStructureConfig = class _CmsStructureConfig extends CmsConfig {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵCmsStructureConfig_BaseFactory;
      return function CmsStructureConfig_Factory(__ngFactoryType__) {
        return (ɵCmsStructureConfig_BaseFactory || (ɵCmsStructureConfig_BaseFactory = ɵɵgetInheritedFactory(_CmsStructureConfig)))(__ngFactoryType__ || _CmsStructureConfig);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CmsStructureConfig,
      factory: function CmsStructureConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _CmsStructureConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CmsStructureConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var CmsStructureConfigService = class _CmsStructureConfigService {
  constructor(cmsDataConfig) {
    this.cmsDataConfig = cmsDataConfig;
  }
  /**
   * Merge the cms structure to the pageStructure. The page structure
   * can either hold complete page structures or global structures that
   * might apply to all pages (such has header coponents).
   */
  mergePageStructure(pageId, pageStructure) {
    return this.mergePage(pageId, pageStructure).pipe(switchMap((page) => this.mergeSlots(page)));
  }
  /**
   *
   * Returns boolean observable to indicate whether the page should not be
   * loaded from the backend. This is useful for pages which are comoditized
   * and follow best practice.
   *
   * By default, configurable pages are driven by static configuration,
   * in order to allow for fast loading pages (preventing network delays).
   */
  shouldIgnoreBackend(pageId) {
    return this.getPageFromConfig(pageId).pipe(map((page) => !!page && !!page.ignoreBackend));
  }
  /**
   * returns an Observable component data from the static configuration.
   */
  getComponentFromConfig(componentId) {
    return of(this.getComponentById(componentId));
  }
  /**
   * returns an Observable components data from the static configuration.
   */
  getComponentsFromConfig(ids) {
    return of(ids.map((id) => this.getComponentById(id)));
  }
  /**
   * returns an observable with the `PageConfig`.
   */
  getPageFromConfig(pageId) {
    return of(this.cmsDataConfig.cmsStructure && this.cmsDataConfig.cmsStructure.pages ? this.cmsDataConfig.cmsStructure.pages.find((p) => p.pageId === pageId) : void 0);
  }
  /**
   * Merge page data from the configuration into the given structure, if any.
   * If the given page structure is empty, a page is created and the page slots are
   * are merged into the page.
   */
  mergePage(pageId, pageStructure) {
    return this.getPageFromConfig(pageId).pipe(switchMap((page) => {
      if (page) {
        if (!pageStructure.page) {
          pageStructure.page = __spreadValues({}, page);
          pageStructure.page.slots = {};
        }
        if (!pageStructure.page.slots) {
          pageStructure.page.slots = {};
        }
        return this.mergeSlots(pageStructure, page.slots);
      } else {
        return of(pageStructure);
      }
    }));
  }
  /**
   * Adds any pre-configured slots for pages that do not use them.
   * If pages have a slot for the given position, the configiuration
   * is ingored. Even if the slot does not have inner structure (such as
   * components), so that the cms structure is able to override the (static)
   * configuration.
   */
  mergeSlots(pageStructure, slots) {
    if (!slots && this.cmsDataConfig.cmsStructure?.slots) {
      slots = this.cmsDataConfig.cmsStructure.slots;
    }
    if (!slots) {
      return of(pageStructure);
    }
    for (const position of Object.keys(slots)) {
      if (pageStructure.page?.slots && !Object.keys(pageStructure.page.slots).includes(position)) {
        pageStructure.page.slots[position] = {};
        for (const component of this.getComponentsByPosition(slots, position)) {
          pageStructure.page.slots[position].components = pageStructure.page.slots[position].components ?? [];
          pageStructure.page.slots[position].components?.push({
            uid: component.uid,
            flexType: component.flexType,
            typeCode: component.typeCode
          });
          pageStructure.components = pageStructure.components ?? [];
          pageStructure.components.push(component);
        }
      }
    }
    return of(pageStructure);
  }
  getComponentsByPosition(slots, position) {
    const components = [];
    if (slots[position] && slots[position].componentIds) {
      for (const componentId of slots[position].componentIds ?? []) {
        if (this.cmsDataConfig.cmsStructure && this.cmsDataConfig.cmsStructure.components) {
          const component = this.cmsDataConfig.cmsStructure.components[componentId];
          if (component) {
            components.push(__spreadValues({
              uid: componentId
            }, component));
          }
        }
      }
    }
    return components;
  }
  getComponentById(componentId) {
    return this.cmsDataConfig.cmsStructure && this.cmsDataConfig.cmsStructure.components ? this.cmsDataConfig.cmsStructure.components[componentId] : void 0;
  }
  static {
    this.ɵfac = function CmsStructureConfigService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CmsStructureConfigService)(ɵɵinject(CmsStructureConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CmsStructureConfigService,
      factory: _CmsStructureConfigService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CmsStructureConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CmsStructureConfig
  }], null);
})();
var CmsComponentConnector = class _CmsComponentConnector {
  constructor(cmsStructureConfigService, cmsComponentAdapter, config) {
    this.cmsStructureConfigService = cmsStructureConfigService;
    this.cmsComponentAdapter = cmsComponentAdapter;
    this.config = config;
  }
  get(id, pageContext) {
    return this.cmsStructureConfigService.getComponentFromConfig(id).pipe(switchMap((configuredComponent) => configuredComponent ? of(configuredComponent) : this.cmsComponentAdapter.load(id, pageContext)));
  }
  getList(ids, pageContext) {
    return this.cmsStructureConfigService.getComponentsFromConfig(ids).pipe(switchMap((configuredComponents) => {
      const missingIds = configuredComponents.reduce((acc, component, index) => {
        if (component === void 0) {
          acc.push(ids[index]);
        }
        return acc;
      }, []);
      if (missingIds.length > 0) {
        const pageSize = this.config.componentsLoading?.pageSize || missingIds.length;
        const totalPages = Math.ceil(missingIds.length / pageSize);
        const cmsComponents = [];
        let currentPage = 0;
        while (currentPage < totalPages) {
          cmsComponents.push(this.cmsComponentAdapter.findComponentsByIds(missingIds.slice(currentPage * pageSize, (currentPage + 1) * pageSize), pageContext));
          currentPage++;
        }
        return zip(...cmsComponents).pipe(map((loadedComponents) => [...configuredComponents.filter(Boolean)].concat(...loadedComponents)));
      } else {
        return of(configuredComponents);
      }
    }));
  }
  static {
    this.ɵfac = function CmsComponentConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CmsComponentConnector)(ɵɵinject(CmsStructureConfigService), ɵɵinject(CmsComponentAdapter), ɵɵinject(CmsConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CmsComponentConnector,
      factory: _CmsComponentConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CmsComponentConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CmsStructureConfigService
  }, {
    type: CmsComponentAdapter
  }, {
    type: CmsConfig
  }], null);
})();
var ComponentsEffects = class _ComponentsEffects {
  constructor(actions$, cmsComponentConnector) {
    this.actions$ = actions$;
    this.cmsComponentConnector = cmsComponentConnector;
    this.logger = inject(LoggerService);
    this.contextChange$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, LOGOUT, LOGIN));
    this.loadComponent$ = createEffect(() => ({
      scheduler,
      debounce = 0
    } = {}) => this.actions$.pipe(ofType(LOAD_CMS_COMPONENT), groupBy((actions) => serializePageContext(actions.payload.pageContext)), mergeMap((actionGroup) => actionGroup.pipe(bufferDebounceTime(debounce, scheduler), mergeMap((actions) => this.loadComponentsEffect(actions.map((action) => action.payload.uid), actions[0].payload.pageContext ?? {
      id: ""
    })))), withdrawOn(this.contextChange$)));
  }
  loadComponentsEffect(componentUids, pageContext) {
    return this.cmsComponentConnector.getList(componentUids, pageContext).pipe(switchMap((components) => {
      const actions = [];
      const uidsLeft = new Set(componentUids);
      for (const component of components) {
        actions.push(new LoadCmsComponentSuccess({
          component,
          uid: component.uid,
          pageContext
        }));
        uidsLeft.delete(component.uid ?? "");
      }
      uidsLeft.forEach((uid) => {
        actions.push(new LoadCmsComponentFail({
          uid,
          pageContext,
          error: new Error(`Failed to load CmsComponent ${pageContext.type} uid: ${uid}`)
        }));
      });
      return from(actions);
    }), catchError((error) => from(componentUids.map((uid) => new LoadCmsComponentFail({
      uid,
      error: tryNormalizeHttpError(error, this.logger),
      pageContext
    })))));
  }
  static {
    this.ɵfac = function ComponentsEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComponentsEffects)(ɵɵinject(Actions), ɵɵinject(CmsComponentConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ComponentsEffects,
      factory: _ComponentsEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComponentsEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: CmsComponentConnector
  }], null);
})();
var UrlMatcherService = class _UrlMatcherService {
  constructor(globService) {
    this.globService = globService;
  }
  /**
   * Returns a matcher that is always fails
   */
  getFalsy() {
    return function falsyUrlMatcher() {
      return null;
    };
  }
  /**
   * Returns a matcher for given list of paths
   */
  getFromPaths(paths) {
    const matchers = paths.map((path) => this.getFromPath(path));
    const matcher = this.getCombined(matchers);
    if (isDevMode()) {
      matcher["_paths"] = paths;
    }
    return matcher;
  }
  /**
   * Returns a matcher that combines the given matchers
   * */
  getCombined(matchers) {
    const matcher = function combinedUrlMatchers(segments, segmentGroup, route) {
      for (let i = 0; i < matchers.length; i++) {
        const result = matchers[i](segments, segmentGroup, route);
        if (result) {
          return result;
        }
      }
      return null;
    };
    if (isDevMode()) {
      matcher["_matchers"] = matchers;
    }
    return matcher;
  }
  /**
   * Similar to Angular's defaultUrlMatcher. Differences:
   * - the `path` comes from function's argument, not from `route.path`
   * - the empty path `''` is handled here, but in Angular is handled one level higher in the match() function
   */
  getFromPath(path = "") {
    const matcher = function pathUrlMatcher(segments, segmentGroup, route) {
      if (path === "") {
        return useFunctionArgument(segments, segmentGroup, route);
      }
      const parts = path.split("/");
      if (or(
        // The actual URL is shorter than the config, no match
        parts.length > segments.length,
        // The config is longer than the actual URL but we are looking for a full match, return null
        and(route.pathMatch === "full", or(segmentGroup.hasChildren(), parts.length < segments.length))
      )) {
        return null;
      }
      const posParams = {};
      for (let index = 0; index < parts.length; index++) {
        const part = parts[index];
        const segment = segments[index];
        const isParameter = part.startsWith(":");
        if (isParameter) {
          posParams[part.substring(1)] = segment;
        } else if (part !== segment.path) {
          return null;
        }
      }
      return {
        consumed: segments.slice(0, parts.length),
        posParams
      };
    };
    if (isDevMode()) {
      matcher["_path"] = path;
    }
    return matcher;
    function useFunctionArgument(segments, segmentGroup, route) {
      if (and(route.pathMatch === "full", or(segmentGroup.hasChildren(), segments.length > 0))) {
        return null;
      }
      return {
        consumed: [],
        posParams: {}
      };
    }
    function or(a, b) {
      return a || b;
    }
    function and(a, b) {
      return a && b;
    }
  }
  /**
   * Returns URL matcher that accepts almost everything (like `**` route), but not paths accepted by the given matcher
   */
  getOpposite(originalMatcher) {
    const matcher = function oppositeUrlMatcher(segments, group, route) {
      return originalMatcher(segments, group, route) ? null : {
        consumed: segments,
        posParams: {}
      };
    };
    if (isDevMode()) {
      matcher["_originalMatcher"] = originalMatcher;
    }
    return matcher;
  }
  /**
   * Returns URL matcher for the given list of glob-like patterns. Each pattern must start with `/` or `!/`.
   */
  getFromGlob(globPatterns) {
    const globValidator = this.globService.getValidator(globPatterns);
    const matcher = function globUrlMatcher(segments) {
      const fullPath = `/${segments.map((s) => s.path).join("/")}`;
      return globValidator(fullPath) ? {
        consumed: segments,
        posParams: {}
      } : null;
    };
    if (isDevMode()) {
      matcher["_globPatterns"] = globPatterns;
    }
    return matcher;
  }
  static {
    this.ɵfac = function UrlMatcherService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UrlMatcherService)(ɵɵinject(GlobService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UrlMatcherService,
      factory: _UrlMatcherService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlMatcherService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: GlobService
  }], null);
})();
var ConfigurableRoutesService = class _ConfigurableRoutesService {
  constructor(injector, routingConfigService, urlMatcherService) {
    this.injector = injector;
    this.routingConfigService = routingConfigService;
    this.urlMatcherService = urlMatcherService;
    this.logger = inject(LoggerService);
    this.initCalled = false;
  }
  /**
   * Enhances existing Angular routes using the routing config of Spartacus.
   * Can be called only once.
   */
  init() {
    if (!this.initCalled) {
      this.initCalled = true;
      this.configure();
    }
  }
  /**
   * Enhances existing Angular routes using the routing config of Spartacus.
   */
  configure() {
    const router = this.injector.get(Router);
    router.resetConfig(this.configureRoutes(router.config));
  }
  /**
   * Sets the property `path` or `matcher` for the given routes, based on the Spartacus' routing configuration.
   *
   * @param routes list of Angular `Route` objects
   */
  configureRoutes(routes) {
    return routes.map((route) => {
      const configuredRoute = this.configureRoute(route);
      if (route.children && route.children.length) {
        configuredRoute.children = this.configureRoutes(route.children);
      }
      return configuredRoute;
    });
  }
  /**
   * Sets the property `path` or `matcher` of the `Route`, based on the Spartacus' routing configuration.
   * Uses the property `data.cxRoute` to determine the name of the route.
   * It's the same name used as a key in the routing configuration: `routing.routes[ROUTE NAME]`.
   *
   * @param route Angular `Route` object
   */
  configureRoute(route) {
    const routeName = this.getRouteName(route);
    if (routeName) {
      const routeConfig = this.routingConfigService.getRouteConfig(routeName);
      this.validateRouteConfig(routeConfig, routeName, route);
      if (routeConfig?.disabled) {
        delete route.path;
        return __spreadProps(__spreadValues({}, route), {
          matcher: this.urlMatcherService.getFalsy()
        });
      } else if (routeConfig?.matchers) {
        delete route.path;
        return __spreadProps(__spreadValues({}, route), {
          matcher: this.resolveUrlMatchers(route, routeConfig?.matchers)
        });
      } else if (routeConfig?.paths?.length === 1) {
        delete route.matcher;
        return __spreadProps(__spreadValues({}, route), {
          path: routeConfig?.paths[0]
        });
      } else {
        delete route.path;
        return __spreadProps(__spreadValues({}, route), {
          matcher: this.urlMatcherService.getFromPaths(routeConfig?.paths || [])
        });
      }
    }
    return route;
  }
  /**
   * Creates a single `UrlMatcher` based on given matchers and factories of matchers.
   *
   * @param route Route object
   * @param matchersOrFactories `UrlMatcher`s or injection tokens with a factory functions
   *  that create UrlMatchers based on the given route.
   */
  resolveUrlMatchers(route, matchersOrFactories) {
    const matchers = matchersOrFactories?.map((matcherOrFactory) => {
      return typeof matcherOrFactory === "function" ? matcherOrFactory : this.resolveUrlMatcherFactory(route, matcherOrFactory);
    }) ?? [];
    return this.urlMatcherService.getCombined(matchers);
  }
  /**
   * Creates an `UrlMatcher` based on the given route, using the factory function coming from the given injection token.
   *
   * @param route Route object
   * @param factoryToken injection token with a factory function that will create an UrlMatcher using given route
   */
  resolveUrlMatcherFactory(route, factoryToken) {
    const factory = this.injector.get(factoryToken);
    return factory(route);
  }
  /**
   * Returns the name of the Route stored in its property `data.cxRoute`
   * @param route
   */
  getRouteName(route) {
    return route.data && route.data.cxRoute;
  }
  validateRouteConfig(routeConfig, routeName, route) {
    if (isDevMode()) {
      if (routeConfig === null || routeConfig?.paths === null || routeConfig?.matchers) {
        return;
      }
      if (!routeConfig?.paths) {
        this.warn(`Could not configure the named route '${routeName}'`, route, `due to undefined config or undefined 'paths' property for this route`);
        return;
      }
    }
  }
  warn(...args) {
    if (isDevMode()) {
      this.logger.warn(...args);
    }
  }
  static {
    this.ɵfac = function ConfigurableRoutesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfigurableRoutesService)(ɵɵinject(Injector), ɵɵinject(RoutingConfigService), ɵɵinject(UrlMatcherService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfigurableRoutesService,
      factory: _ConfigurableRoutesService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigurableRoutesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Injector
  }, {
    type: RoutingConfigService
  }, {
    type: UrlMatcherService
  }], null);
})();
var ProductURLPipe = class _ProductURLPipe {
  constructor(semanticPath) {
    this.semanticPath = semanticPath;
  }
  transform(product) {
    return this.semanticPath.transform({
      cxRoute: "product",
      params: product
    });
  }
  static {
    this.ɵfac = function ProductURLPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductURLPipe)(ɵɵdirectiveInject(SemanticPathService, 16));
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "cxProductUrl",
      type: _ProductURLPipe,
      pure: true,
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductURLPipe, [{
    type: Pipe,
    args: [{
      name: "cxProductUrl",
      standalone: false
    }]
  }], () => [{
    type: SemanticPathService
  }], null);
})();
var UrlPipe = class _UrlPipe {
  constructor(urlService) {
    this.urlService = urlService;
  }
  transform(commands) {
    return this.urlService.transform(commands);
  }
  static {
    this.ɵfac = function UrlPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UrlPipe)(ɵɵdirectiveInject(SemanticPathService, 16));
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "cxUrl",
      type: _UrlPipe,
      pure: true,
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlPipe, [{
    type: Pipe,
    args: [{
      name: "cxUrl",
      standalone: false
    }]
  }], () => [{
    type: SemanticPathService
  }], null);
})();
var UrlModule = class _UrlModule {
  static {
    this.ɵfac = function UrlModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UrlModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UrlModule,
      declarations: [UrlPipe, ProductURLPipe],
      imports: [CommonModule],
      exports: [UrlPipe, ProductURLPipe]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [UrlPipe, ProductURLPipe],
      exports: [UrlPipe, ProductURLPipe]
    }]
  }], null, null);
})();
var SecurePortalConfigInitializer = class _SecurePortalConfigInitializer {
  constructor(baseSiteService, configInit) {
    this.baseSiteService = baseSiteService;
    this.configInit = configInit;
    this.scopes = ["routing"];
    this.configFactory = () => lastValueFrom(this.resolveConfig());
  }
  /**
   * Emits the Routing config basing on the current base site data.
   *
   * Completes after emitting the value.
   */
  resolveConfig() {
    return this.configInit.getStable("context").pipe(switchMap((config) => {
      const siteUid = config?.context?.[BASE_SITE_CONTEXT_ID]?.[0];
      return this.baseSiteService.get(siteUid).pipe(tap((baseSite) => {
        if (!baseSite) {
          throw new Error(`Error: Cannot get base site config for ${siteUid}.`);
        }
      }), map((baseSite) => this.getRoutingConfig(baseSite)), take(1));
    }));
  }
  getRoutingConfig(source) {
    const result = {
      routing: {
        protected: source?.requiresAuthentication
      }
    };
    return result;
  }
  static {
    this.ɵfac = function SecurePortalConfigInitializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SecurePortalConfigInitializer)(ɵɵinject(BaseSiteService), ɵɵinject(ConfigInitializerService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SecurePortalConfigInitializer,
      factory: _SecurePortalConfigInitializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SecurePortalConfigInitializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: BaseSiteService
  }, {
    type: ConfigInitializerService
  }], null);
})();
var ExternalRoutesConfig = class _ExternalRoutesConfig {
  static {
    this.ɵfac = function ExternalRoutesConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExternalRoutesConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ExternalRoutesConfig,
      factory: function ExternalRoutesConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _ExternalRoutesConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExternalRoutesConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var ExternalRoutesGuard = class _ExternalRoutesGuard {
  constructor(winRef, platformId) {
    this.winRef = winRef;
    this.platformId = platformId;
  }
  /**
   * Redirects to different storefront system for anticipated URL
   */
  canActivate(route, state) {
    if (isPlatformBrowser(this.platformId)) {
      this.redirect(route, state);
    }
    return false;
  }
  /**
   * Redirects to anticipated URL using full page reload, not Angular routing
   */
  redirect(_, state) {
    const window2 = this.winRef.nativeWindow;
    if (window2 && window2.location) {
      window2.location.href = state.url;
    }
  }
  static {
    this.ɵfac = function ExternalRoutesGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExternalRoutesGuard)(ɵɵinject(WindowRef), ɵɵinject(PLATFORM_ID));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ExternalRoutesGuard,
      factory: _ExternalRoutesGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExternalRoutesGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: WindowRef
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
function addExternalRoutesFactory(service) {
  const result = () => {
    service.addRoutes();
  };
  return result;
}
var ExternalRoutesService = class _ExternalRoutesService {
  constructor(config, urlMatcherService, injector) {
    this.config = config;
    this.urlMatcherService = urlMatcherService;
    this.injector = injector;
  }
  get internalUrlPatterns() {
    return this.config && this.config.routing && this.config.routing.internal || [];
  }
  /**
   * Prepends routes (to the Router.config) that are responsible for redirecting to a different storefront system
   */
  addRoutes() {
    const router = this.injector.get(Router);
    const newRoutes = this.getRoutes();
    if (newRoutes.length) {
      router.resetConfig([...newRoutes, ...router.config]);
    }
  }
  /**
   * Returns routes that are responsible for redirection to different storefront systems
   */
  getRoutes() {
    if (!this.internalUrlPatterns.length) {
      return [];
    }
    const routes = [];
    routes.push({
      pathMatch: "full",
      matcher: this.getUrlMatcher(),
      canActivate: [ExternalRoutesGuard],
      component: {}
    });
    return routes;
  }
  /**
   * Returns the URL matcher for the external route
   */
  getUrlMatcher() {
    const matcher = this.urlMatcherService.getFromGlob(this.internalUrlPatterns);
    return this.urlMatcherService.getOpposite(matcher);
  }
  static {
    this.ɵfac = function ExternalRoutesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExternalRoutesService)(ɵɵinject(ExternalRoutesConfig), ɵɵinject(UrlMatcherService), ɵɵinject(Injector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ExternalRoutesService,
      factory: _ExternalRoutesService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExternalRoutesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ExternalRoutesConfig
  }, {
    type: UrlMatcherService
  }, {
    type: Injector
  }], null);
})();
var ExternalRoutesModule = class _ExternalRoutesModule {
  static forRoot() {
    return {
      ngModule: _ExternalRoutesModule,
      providers: [{
        provide: APP_INITIALIZER,
        multi: true,
        useFactory: addExternalRoutesFactory,
        deps: [ExternalRoutesService]
      }]
    };
  }
  static {
    this.ɵfac = function ExternalRoutesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExternalRoutesModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ExternalRoutesModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExternalRoutesModule, [{
    type: NgModule
  }], null, null);
})();
var ProtectedRoutesService = class _ProtectedRoutesService {
  get routingConfig() {
    return this.config && this.config.routing;
  }
  /**
   * Returns 'protected' property (boolean) from routing config
   *
   * @returns boolean
   */
  get shouldProtect() {
    return !!this.routingConfig?.protected;
  }
  constructor(config, urlParsingService) {
    this.config = config;
    this.urlParsingService = urlParsingService;
    this.nonProtectedPaths = [];
    if (this.shouldProtect) {
      this.nonProtectedPaths = this.getNonProtectedPaths().map((path) => this.getSegments(path));
    }
  }
  /**
   * Tells if the url is protected
   */
  isUrlProtected(urlSegments) {
    return this.shouldProtect && !this.matchAnyPath(urlSegments, this.nonProtectedPaths);
  }
  /**
   * Tells whether the url matches at least one of the paths
   */
  matchAnyPath(urlSegments, pathsSegments) {
    return pathsSegments.some((pathSegments) => this.matchPath(urlSegments, pathSegments));
  }
  /**
   * Tells whether the url matches the path
   */
  matchPath(urlSegments, pathSegments) {
    return this.urlParsingService.matchPath(urlSegments, pathSegments);
  }
  /**
   * Returns a list of paths that are not protected
   */
  getNonProtectedPaths() {
    return Object.values(this.routingConfig?.routes ?? {}).reduce((acc, routeConfig) => routeConfig.protected === false && // must be explicitly false, ignore undefined
    routeConfig.paths && routeConfig.paths.length ? acc.concat(routeConfig?.paths ?? []) : acc, []);
  }
  /**
   * Splits the url by slashes
   */
  getSegments(url) {
    return (url || "").split("/");
  }
  static {
    this.ɵfac = function ProtectedRoutesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProtectedRoutesService)(ɵɵinject(RoutingConfig), ɵɵinject(UrlParsingService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProtectedRoutesService,
      factory: _ProtectedRoutesService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProtectedRoutesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingConfig
  }, {
    type: UrlParsingService
  }], null);
})();
var ProtectedRoutesGuard = class _ProtectedRoutesGuard {
  constructor(service, authGuard) {
    this.service = service;
    this.authGuard = authGuard;
  }
  /**
   * When the anticipated url is protected, it switches to the AuthGuard. Otherwise emits true.
   */
  canActivate(route) {
    let urlSegments = route.url.map((seg) => seg.path);
    urlSegments = urlSegments.length ? urlSegments : [""];
    if (this.service.isUrlProtected(urlSegments)) {
      return this.authGuard.canActivate();
    }
    return of(true);
  }
  static {
    this.ɵfac = function ProtectedRoutesGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProtectedRoutesGuard)(ɵɵinject(ProtectedRoutesService), ɵɵinject(AuthGuard));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProtectedRoutesGuard,
      factory: _ProtectedRoutesGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProtectedRoutesGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProtectedRoutesService
  }, {
    type: AuthGuard
  }], null);
})();
var RouterEffects = class _RouterEffects {
  constructor(actions$, router) {
    this.actions$ = actions$;
    this.router = router;
    this.clearCmsRoutes$ = createEffect(() => this.actions$.pipe(ofType(LANGUAGE_CHANGE, LOGOUT, LOGIN), tap(() => {
      const filteredConfig = this.router.config.filter((route) => !(route.data && route.data.cxCmsRouteContext));
      if (filteredConfig.length !== this.router.config.length) {
        this.router.resetConfig(filteredConfig);
      }
    })), {
      dispatch: false
    });
  }
  static {
    this.ɵfac = function RouterEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RouterEffects)(ɵɵinject(Actions), ɵɵinject(Router));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RouterEffects,
      factory: _RouterEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: Router
  }], null);
})();
var effects$4 = [RouterEffects];
var initialState$i = {
  navigationId: 0,
  state: {
    url: "",
    queryParams: {},
    params: {},
    context: {
      id: ""
    },
    cmsRequired: false,
    semanticRoute: void 0
  },
  nextState: void 0
};
function getReducers$5() {
  return {
    router: reducer$i
  };
}
function reducer$i(state = initialState$i, action) {
  switch (action.type) {
    case ROUTER_NAVIGATION: {
      return __spreadProps(__spreadValues({}, state), {
        nextState: action.payload.routerState,
        navigationId: action.payload.event.id
      });
    }
    case ROUTER_ERROR:
    case ROUTER_CANCEL: {
      return __spreadProps(__spreadValues({}, state), {
        nextState: void 0
      });
    }
    case CHANGE_NEXT_PAGE_CONTEXT: {
      return state.nextState ? __spreadProps(__spreadValues({}, state), {
        nextState: __spreadProps(__spreadValues({}, state.nextState), {
          context: action.payload
        })
      }) : state;
    }
    case ROUTER_NAVIGATED: {
      return {
        state: __spreadProps(__spreadValues({}, action.payload.routerState), {
          context: (
            // we want to preserve already resolved context,
            // in case it was changed while navigating
            state.nextState?.context ?? action.payload.routerState.context
          )
        }),
        navigationId: action.payload.event.id,
        nextState: void 0
      };
    }
    default: {
      return state;
    }
  }
}
var reducerToken$5 = new InjectionToken("RouterReducers");
var reducerProvider$5 = {
  provide: reducerToken$5,
  useFactory: getReducers$5
};
var CustomSerializer = class _CustomSerializer {
  serialize(routerState) {
    let state = routerState.root;
    let cmsRequired = false;
    let context;
    let semanticRoute;
    let urlString = "";
    while (state.firstChild) {
      state = state.firstChild;
      urlString += "/" + state.url.map((urlSegment) => urlSegment.path).join("/");
      if (state.data?.cxRoute) {
        semanticRoute = state.data?.cxRoute;
      }
      if (state.data?.cxCmsRouteContext) {
        context = state.data?.cxCmsRouteContext;
      }
      if (!cmsRequired && (context || state.routeConfig?.canActivate?.find((x) => x && x.guardName === "CmsPageGuard"))) {
        cmsRequired = true;
      }
    }
    semanticRoute = semanticRoute || this.lookupSemanticRoute(urlString);
    const {
      params
    } = state;
    context = this.getPageContext(context, state);
    return {
      url: routerState.url,
      queryParams: routerState.root.queryParams,
      params,
      context,
      cmsRequired,
      semanticRoute
    };
  }
  getPageContext(cmsRouteContext, state) {
    let context = cmsRouteContext;
    if (state.url.length > 0 && state.url[0].path === "cx-preview" && state.queryParams.cmsTicketId !== void 0) {
      context = {
        id: SMART_EDIT_CONTEXT,
        type: PageType.CONTENT_PAGE
      };
    } else {
      const {
        params
      } = state;
      if (params["productCode"]) {
        context = {
          id: params["productCode"],
          type: PageType.PRODUCT_PAGE
        };
      } else if (params["categoryCode"]) {
        context = {
          id: params["categoryCode"],
          type: PageType.CATEGORY_PAGE
        };
      } else if (params["brandCode"]) {
        context = {
          id: params["brandCode"],
          type: PageType.CATEGORY_PAGE
        };
      } else if (state.data.pageLabel !== void 0) {
        context = {
          id: state.data.pageLabel,
          type: PageType.CONTENT_PAGE
        };
      }
    }
    if (!context) {
      if (state.url.length > 0) {
        const pageLabel = "/" + state.url.map((urlSegment) => urlSegment.path).join("/");
        context = {
          id: pageLabel,
          type: PageType.CONTENT_PAGE
        };
      } else {
        context = {
          // We like URLs to be driven by the backend, the CMS actually returns the homepage
          // if no page label is given. Our logic however requires an id. undefined doesn't work.
          id: HOME_PAGE_CONTEXT,
          // We currently need to support a hardcoded page type, since the internal store uses the page
          // type to store the content.
          type: PageType.CONTENT_PAGE
        };
      }
    }
    return context;
  }
  /**
   * Returns the semantic route name for given page label.
   *
   * *NOTE*: It works only for simple static urls that are equal to the page label
   * of cms-driven content page. For example: `/my-account/address-book`.
   *
   * It doesn't work for URLs with dynamic parameters. But such case can be handled
   * by reading the defined `data.cxRoute` from the Angular Routes.
   *
   * @param path path to be found in the routing config
   */
  lookupSemanticRoute(path) {
    return this.routingConfig.getRouteName(path.substr(1));
  }
  constructor(routingConfig) {
    this.routingConfig = routingConfig;
  }
  static {
    this.ɵfac = function CustomSerializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomSerializer)(ɵɵinject(RoutingConfigService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CustomSerializer,
      factory: _CustomSerializer.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomSerializer, [{
    type: Injectable
  }], () => [{
    type: RoutingConfigService
  }], null);
})();
function initConfigurableRoutes(service) {
  const result = () => service.init();
  return result;
}
function initSecurePortalConfig(configInitializer, routingConfig) {
  if (routingConfig.routing?.protected === void 0) {
    return configInitializer;
  }
  return null;
}
function locationInitializedFactory() {
  const initializers = inject(LOCATION_INITIALIZED_MULTI, {
    optional: true
  }) ?? [];
  const promiseInitializers = initializers.map((initializer) => initializer());
  return Promise.all(promiseInitializers);
}
var RoutingModule = class _RoutingModule {
  static forRoot() {
    return {
      ngModule: _RoutingModule,
      providers: [reducerProvider$5, {
        provide: RouterStateSerializer,
        useClass: CustomSerializer
      }, {
        provide: APP_INITIALIZER,
        useFactory: initConfigurableRoutes,
        deps: [ConfigurableRoutesService],
        multi: true
      }, {
        provide: CONFIG_INITIALIZER,
        useFactory: initSecurePortalConfig,
        deps: [SecurePortalConfigInitializer, RoutingConfig],
        multi: true
      }, {
        provide: LOCATION_INITIALIZED,
        useFactory: locationInitializedFactory
      }]
    };
  }
  static {
    this.ɵfac = function RoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoutingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RoutingModule,
      imports: [StoreFeatureModule, EffectsFeatureModule, StoreRouterConnectingModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [StoreModule.forFeature(ROUTING_FEATURE, reducerToken$5), EffectsModule.forFeature(effects$4), StoreRouterConnectingModule.forRoot({
        routerState: RouterState.Minimal,
        stateKey: ROUTING_FEATURE
        // name of reducer key
      })]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutingModule, [{
    type: NgModule,
    args: [{
      imports: [StoreModule.forFeature(ROUTING_FEATURE, reducerToken$5), EffectsModule.forFeature(effects$4), StoreRouterConnectingModule.forRoot({
        routerState: RouterState.Minimal,
        stateKey: ROUTING_FEATURE
        // name of reducer key
      })]
    }]
  }], null, null);
})();
function getDefaultUrlMatcherFactory(routingConfigService, urlMatcherService) {
  const factory = (route) => {
    const routeName = route.data && route.data["cxRoute"];
    const routeConfig = routingConfigService.getRouteConfig(routeName);
    const paths = routeConfig && routeConfig.paths || [];
    return urlMatcherService.getFromPaths(paths);
  };
  return factory;
}
var DEFAULT_URL_MATCHER = new InjectionToken("DEFAULT_URL_MATCHER", {
  providedIn: "root",
  factory: () => getDefaultUrlMatcherFactory(inject(RoutingConfigService), inject(UrlMatcherService))
});
var NavigationEntryItemEffects = class _NavigationEntryItemEffects {
  // We only consider 3 item types: cms page, cms component, and media.
  getIdListByItemType(itemList) {
    const pageIds = [];
    const componentIds = [];
    const mediaIds = [];
    itemList.forEach((item) => {
      if (item.superType === "AbstractCMSComponent") {
        componentIds.push(item.id);
      } else if (item.superType === "AbstractPage") {
        pageIds.push(item.id);
      } else if (item.superType === "AbstractMedia") {
        mediaIds.push(item.id);
      }
    });
    return {
      pageIds,
      componentIds,
      mediaIds
    };
  }
  constructor(actions$, cmsComponentConnector, routingService) {
    this.actions$ = actions$;
    this.cmsComponentConnector = cmsComponentConnector;
    this.routingService = routingService;
    this.logger = inject(LoggerService);
    this.loadNavigationItems$ = createEffect(() => this.actions$.pipe(ofType(LOAD_CMS_NAVIGATION_ITEMS), map((action) => action.payload), map((payload) => {
      return {
        ids: this.getIdListByItemType(payload.items),
        nodeId: payload.nodeId
      };
    }), mergeMap((data) => {
      if (data.ids.componentIds.length > 0) {
        return this.routingService.getRouterState().pipe(filter(isNotUndefined), map((routerState) => routerState.state.context), take(1), mergeMap((pageContext) => (
          // download all items in one request
          this.cmsComponentConnector.getList(data.ids.componentIds, pageContext).pipe(map((components) => new LoadCmsNavigationItemsSuccess({
            nodeId: data.nodeId,
            components
          })), catchError((error) => of(new LoadCmsNavigationItemsFail(data.nodeId, tryNormalizeHttpError(error, this.logger)))))
        )));
      } else {
        return of(new LoadCmsNavigationItemsFail(data.nodeId, new Error("navigation nodes are empty")));
      }
    })));
  }
  static {
    this.ɵfac = function NavigationEntryItemEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavigationEntryItemEffects)(ɵɵinject(Actions), ɵɵinject(CmsComponentConnector), ɵɵinject(RoutingService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NavigationEntryItemEffects,
      factory: _NavigationEntryItemEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationEntryItemEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: CmsComponentConnector
  }, {
    type: RoutingService
  }], null);
})();
var CmsPageConnector = class _CmsPageConnector {
  constructor(cmsPageAdapter, cmsStructureConfigService) {
    this.cmsPageAdapter = cmsPageAdapter;
    this.cmsStructureConfigService = cmsStructureConfigService;
  }
  /**
   * Returns an observable with the page structure. The page structure is
   * typically loaded from a backend, but can also be returned from static
   * configuration (see `CmsStructureConfigService`).
   */
  get(pageContext) {
    return this.cmsStructureConfigService.shouldIgnoreBackend(pageContext.id).pipe(switchMap((loadFromConfig) => {
      if (!loadFromConfig) {
        return this.cmsPageAdapter.load(pageContext).pipe(catchError((error) => {
          if (error instanceof HttpErrorResponse && error.status === 400) {
            return of({});
          } else {
            throw error;
          }
        }));
      } else {
        return of({});
      }
    }), switchMap((page) => this.mergeDefaultPageStructure(pageContext, page)));
  }
  /**
   *
   * Merge default page structure to the given `CmsStructureModel`.
   * This is beneficial for a fast setup of the UI without necessary
   * fine-grained CMS setup.
   */
  mergeDefaultPageStructure(pageContext, pageStructure) {
    return this.cmsStructureConfigService.mergePageStructure(pageContext.id, pageStructure);
  }
  static {
    this.ɵfac = function CmsPageConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CmsPageConnector)(ɵɵinject(CmsPageAdapter), ɵɵinject(CmsStructureConfigService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CmsPageConnector,
      factory: _CmsPageConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CmsPageConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CmsPageAdapter
  }, {
    type: CmsStructureConfigService
  }], null);
})();
var PageEffects = class _PageEffects {
  constructor(actions$, cmsPageConnector, routingService) {
    this.actions$ = actions$;
    this.cmsPageConnector = cmsPageConnector;
    this.routingService = routingService;
    this.logger = inject(LoggerService);
    this.refreshPage$ = createEffect(() => this.actions$.pipe(ofType(LANGUAGE_CHANGE, LOGOUT, LOGIN), switchMap(() => this.routingService.getRouterState().pipe(filter((routerState) => routerState && routerState.state && routerState.state.cmsRequired && !routerState.nextState), take(1), map((routerState) => routerState.state.context), mergeMap((context) => of(new LoadCmsPageData(context)))))));
    this.loadPageData$ = createEffect(() => this.actions$.pipe(ofType(LOAD_CMS_PAGE_DATA), map((action) => action.payload), groupBy((pageContext) => serializePageContext(pageContext)), mergeMap((group) => group.pipe(switchMap((pageContext) => this.cmsPageConnector.get(pageContext).pipe(mergeMap((cmsStructure) => {
      const actions = [new CmsGetComponentFromPage((cmsStructure.components ?? []).map((component) => ({
        component,
        pageContext
      }))), new LoadCmsPageDataSuccess(pageContext, cmsStructure.page ?? {})];
      const pageLabel = cmsStructure.page?.label;
      if (pageLabel && pageLabel !== pageContext.id) {
        actions.unshift(new CmsSetPageSuccessIndex({
          id: pageLabel,
          type: pageContext.type
        }, cmsStructure.page ?? {}));
      }
      return actions;
    }), catchError((error) => of(new LoadCmsPageDataFail(pageContext, tryNormalizeHttpError(error, this.logger))))))))));
  }
  static {
    this.ɵfac = function PageEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageEffects)(ɵɵinject(Actions), ɵɵinject(CmsPageConnector), ɵɵinject(RoutingService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PageEffects,
      factory: _PageEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: CmsPageConnector
  }, {
    type: RoutingService
  }], null);
})();
var effects$3 = [PageEffects, ComponentsEffects, NavigationEntryItemEffects];
var initialState$h = {
  component: void 0,
  pageContext: {}
};
function componentExistsReducer(state, action) {
  switch (action.type) {
    case LOAD_CMS_COMPONENT_FAIL:
      return false;
    case CMS_GET_COMPONENT_FROM_PAGE:
    case LOAD_CMS_COMPONENT_SUCCESS:
      return true;
  }
  return state;
}
function reducer$h(state = initialState$h, action) {
  switch (action.type) {
    case LOAD_CMS_COMPONENT: {
      const pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
      const context = serializePageContext(action.payload.pageContext, true);
      return __spreadProps(__spreadValues({}, state), {
        pageContext: __spreadProps(__spreadValues({}, state.pageContext), {
          [context]: pageContextReducer(state.pageContext[context], action)
        })
      });
    }
    case LOAD_CMS_COMPONENT_FAIL: {
      const pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
      const context = serializePageContext(action.payload.pageContext, true);
      return __spreadProps(__spreadValues({}, state), {
        pageContext: __spreadProps(__spreadValues({}, state.pageContext), {
          [context]: pageContextReducer(state.pageContext[context], action)
        })
      });
    }
    case LOAD_CMS_COMPONENT_SUCCESS: {
      const pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
      const context = serializePageContext(action.payload.pageContext, true);
      return __spreadProps(__spreadValues({}, state), {
        component: action.payload.component,
        pageContext: __spreadProps(__spreadValues({}, state.pageContext), {
          [context]: pageContextReducer(state.pageContext[context], action)
        })
      });
    }
    case CMS_GET_COMPONENT_FROM_PAGE: {
      const pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
      if (!Array.isArray(action.payload)) {
        const context = serializePageContext(action.payload.pageContext, true);
        return __spreadProps(__spreadValues({}, state), {
          component: action.payload.component,
          pageContext: __spreadProps(__spreadValues({}, state.pageContext), {
            [context]: pageContextReducer(state.pageContext[context], action)
          })
        });
      }
    }
  }
  return state;
}
var initialState$g = void 0;
function reducer$g(state = initialState$g, action) {
  switch (action.type) {
    case LOAD_CMS_NAVIGATION_ITEMS_SUCCESS: {
      if (action.payload.components.length) {
        const components = action.payload.components;
        const newItem = components.reduce((compItems, component) => {
          return __spreadProps(__spreadValues({}, compItems), {
            [`${component.uid}_AbstractCMSComponent`]: component
          });
        }, {});
        return __spreadValues(__spreadValues({}, state), newItem);
      }
    }
  }
  return state;
}
var initialState$f = {
  entities: {}
};
function reducer$f(state = initialState$f, action) {
  switch (action.type) {
    case LOAD_CMS_PAGE_DATA_SUCCESS: {
      const page = action.payload;
      return __spreadProps(__spreadValues({}, state), {
        entities: __spreadProps(__spreadValues({}, state.entities), {
          [page.pageId ?? ""]: page
        })
      });
    }
  }
  return state;
}
var initialState$e = void 0;
function reducer$e(entityType) {
  return (state = initialState$e, action) => {
    if (action.meta && action.meta.entityType === entityType) {
      switch (action.type) {
        case LOAD_CMS_PAGE_DATA_SUCCESS: {
          return action.payload.pageId;
        }
        case LOAD_CMS_PAGE_DATA_FAIL: {
          return initialState$e;
        }
        case CMS_SET_PAGE_FAIL_INDEX: {
          return action.payload;
        }
        case CMS_SET_PAGE_SUCCESS_INDEX: {
          return action.payload.pageId;
        }
      }
    }
    return state;
  };
}
function getReducers$4() {
  return {
    page: combineReducers({
      pageData: reducer$f,
      index: combineReducers({
        content: entityLoaderReducer(PageType.CONTENT_PAGE, reducer$e(PageType.CONTENT_PAGE)),
        product: entityLoaderReducer(PageType.PRODUCT_PAGE, reducer$e(PageType.PRODUCT_PAGE)),
        category: entityLoaderReducer(PageType.CATEGORY_PAGE, reducer$e(PageType.CATEGORY_PAGE)),
        catalog: entityLoaderReducer(PageType.CATALOG_PAGE, reducer$e(PageType.CATALOG_PAGE))
      })
    }),
    components: entityReducer(COMPONENT_ENTITY, reducer$h),
    navigation: entityLoaderReducer(NAVIGATION_DETAIL_ENTITY, reducer$g)
  };
}
var reducerToken$4 = new InjectionToken("CmsReducers");
var reducerProvider$4 = {
  provide: reducerToken$4,
  useFactory: getReducers$4
};
function clearCmsState(reducer2) {
  return function(state, action) {
    if (action.type === LANGUAGE_CHANGE || action.type === LOGOUT || action.type === LOGIN) {
      state = void 0;
    }
    return reducer2(state, action);
  };
}
var metaReducers$2 = [clearCmsState];
function cmsStoreConfigFactory() {
  const config = {
    state: {
      ssrTransfer: {
        keys: {
          [CMS_FEATURE]: StateTransferType.TRANSFER_STATE
        }
      }
    }
  };
  return config;
}
var CmsStoreModule = class _CmsStoreModule {
  static {
    this.ɵfac = function CmsStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CmsStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CmsStoreModule,
      imports: [CommonModule, StateModule, StoreFeatureModule, EffectsFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(cmsStoreConfigFactory), reducerProvider$4],
      imports: [CommonModule, StateModule, StoreModule.forFeature(CMS_FEATURE, reducerToken$4, {
        metaReducers: metaReducers$2
      }), EffectsModule.forFeature(effects$3)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CmsStoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, StateModule, StoreModule.forFeature(CMS_FEATURE, reducerToken$4, {
        metaReducers: metaReducers$2
      }), EffectsModule.forFeature(effects$3)],
      providers: [provideDefaultConfigFactory(cmsStoreConfigFactory), reducerProvider$4]
    }]
  }], null, null);
})();
function getDefaultCmsConfig(configChunk) {
  let isUserCmsEndpoint = false;
  configChunk.find((config) => {
    const userCmsEndpoints = config.features?.[USER_CMS_ENDPOINTS];
    if (Boolean(userCmsEndpoints)) {
      isUserCmsEndpoint = userCmsEndpoints;
    }
  });
  if (isUserCmsEndpoint) {
    return defaultUserCmsModuleConfig;
  }
  return defaultCmsModuleConfig;
}
var CmsModule = class _CmsModule {
  static forRoot() {
    return {
      ngModule: _CmsModule,
      providers: [
        CmsService,
        // TODO: (CXSPA-4886) In the major change to provideDefaultConfig(defaultCmsModuleConfig)
        provideDefaultConfigFactory(getDefaultCmsConfig, [ConfigChunk])
      ]
    };
  }
  static {
    this.ɵfac = function CmsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CmsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CmsModule,
      imports: [CmsStoreModule, PageMetaModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CmsStoreModule, PageMetaModule.forRoot()]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CmsModule, [{
    type: NgModule,
    args: [{
      imports: [CmsStoreModule, PageMetaModule.forRoot()]
    }]
  }], null, null);
})();
var LoggingErrorHandler = class _LoggingErrorHandler {
  constructor() {
    this.logger = inject(LoggerService);
  }
  handleError(error) {
    this.logger.error(error);
  }
  static {
    this.ɵfac = function LoggingErrorHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoggingErrorHandler)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _LoggingErrorHandler,
      factory: _LoggingErrorHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoggingErrorHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MULTI_ERROR_HANDLER = new InjectionToken("MULTI_ERROR_HANDLER");
var CxErrorHandler = class _CxErrorHandler {
  constructor() {
    this.errorHandlers = inject(MULTI_ERROR_HANDLER);
  }
  /**
   * Error handler method. Handles the error by passing it to the registered multi error handlers.
   * @param error - The error to be handled.
   */
  handleError(error) {
    this.errorHandlers.forEach((handler) => {
      handler.handleError(error);
    });
  }
  static {
    this.ɵfac = function CxErrorHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CxErrorHandler)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CxErrorHandler,
      factory: _CxErrorHandler.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CxErrorHandler, [{
    type: Injectable
  }], null, null);
})();
var ErrorActionService = class _ErrorActionService {
  constructor() {
    this.errorHandler = inject(ErrorHandler);
    this.windowRef = inject(WindowRef);
  }
  handle(action) {
    const error = action.error;
    const isNotHttpError = !(error instanceof HttpErrorModel) && !(error instanceof HttpErrorResponse);
    if (isNotHttpError && this.shouldHandleError(error)) {
      this.errorHandler.handleError(error);
    }
  }
  /** Here we want to filter which error actions should be handled.
   * By default, we check if action implements interface ErrorAction  */
  isErrorAction(action) {
    return "error" in action;
  }
  /**
   * Determine if the error should be handled by the `ErrorHandler`.
   *
   * Be default, we avoid sending unpredictable errors to the browser's console, to prevent
   * possibly exposing there potentially confidential user's data.
   * This isn't an issue in SSR, where pages are rendered anonymously.
   * Moreover, in SSR we want to capture all app's errors, so we can potentially send
   * a HTTP error response (e.g. 500 error page) from SSR to a client.
   */
  shouldHandleError(_error) {
    return !this.windowRef.isBrowser();
  }
  static {
    this.ɵfac = function ErrorActionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ErrorActionService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ErrorActionService,
      factory: _ErrorActionService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorActionService, [{
    type: Injectable
  }], null, null);
})();
var CxErrorHandlerEffect = class _CxErrorHandlerEffect {
  constructor() {
    this.actions$ = inject(Actions);
    this.errorActionService = inject(ErrorActionService);
    this.error$ = createEffect(() => this.actions$.pipe(filter(this.errorActionService.isErrorAction), tap((errorAction) => {
      this.errorActionService.handle(errorAction);
    })), {
      dispatch: false
    });
  }
  static {
    this.ɵfac = function CxErrorHandlerEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CxErrorHandlerEffect)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CxErrorHandlerEffect,
      factory: _CxErrorHandlerEffect.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CxErrorHandlerEffect, [{
    type: Injectable
  }], null, null);
})();
var EffectsErrorHandlerModule = class _EffectsErrorHandlerModule {
  static forRoot() {
    return {
      ngModule: _EffectsErrorHandlerModule,
      providers: [ErrorActionService]
    };
  }
  static {
    this.ɵfac = function EffectsErrorHandlerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EffectsErrorHandlerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _EffectsErrorHandlerModule,
      imports: [EffectsFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [EffectsModule.forFeature([CxErrorHandlerEffect])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectsErrorHandlerModule, [{
    type: NgModule,
    args: [{
      imports: [EffectsModule.forFeature([CxErrorHandlerEffect])]
    }]
  }], null, null);
})();
var OutboundHttpError = class extends Error {
  constructor(cause) {
    super("Outbound HTTP Error", {
      cause
    });
  }
};
var CmsPageNotFoundOutboundHttpError = class extends OutboundHttpError {
  constructor(cause) {
    super(cause);
    this.message = "CMS Page Not Found";
  }
};
var HttpErrorHandlerInterceptor = class _HttpErrorHandlerInterceptor {
  constructor() {
    this.errorHandler = inject(ErrorHandler);
    this.occEndpointsService = inject(OccEndpointsService);
    this.windowRef = inject(WindowRef);
  }
  intercept(request3, next) {
    return next.handle(request3).pipe(tap({
      error: (error) => {
        if (this.shouldHandleError(error)) {
          this.handleError(error);
        }
      }
    }));
  }
  /**
   * Determine if the error should be handled by the `ErrorHandler`.
   *
   * Be default, we avoid sending unpredictable errors to the browser's console, to prevent
   * possibly exposing there potentially confidential user's data.
   * This isn't an issue in SSR, where pages are rendered anonymously.
   * Moreover, in SSR we want to capture all app's errors, so we can potentially send
   * a HTTP error response (e.g. 500 error page) from SSR to a client.
   */
  shouldHandleError(_error) {
    return !this.windowRef.isBrowser();
  }
  handleError(error) {
    error = this.isCmsPageNotFoundHttpError(error) ? new CmsPageNotFoundOutboundHttpError(error) : new OutboundHttpError(error);
    this.errorHandler.handleError(error);
  }
  /**
   * Checks if the error corresponds to a CMS page not found HTTP error.
   *
   * @param error - The error object to check.
   * @returns `true` if the error corresponds to a CMS page not found HTTP error, `false` otherwise.
   */
  isCmsPageNotFoundHttpError(error) {
    const expectedUrl = this.occEndpointsService.buildUrl("pages");
    return error instanceof HttpErrorResponse && error.status === HttpResponseStatus.NOT_FOUND && (error.url ?? "").startsWith(expectedUrl);
  }
  static {
    this.ɵfac = function HttpErrorHandlerInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HttpErrorHandlerInterceptor)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _HttpErrorHandlerInterceptor,
      factory: _HttpErrorHandlerInterceptor.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpErrorHandlerInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var HttpErrorHandlerModule = class _HttpErrorHandlerModule {
  static forRoot() {
    return {
      ngModule: _HttpErrorHandlerModule,
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useExisting: HttpErrorHandlerInterceptor,
        multi: true
      }]
    };
  }
  static {
    this.ɵfac = function HttpErrorHandlerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HttpErrorHandlerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _HttpErrorHandlerModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpErrorHandlerModule, [{
    type: NgModule
  }], null, null);
})();
function provideMultiErrorHandler() {
  return [{
    provide: MULTI_ERROR_HANDLER,
    useExisting: LoggingErrorHandler,
    multi: true
  }];
}
var ErrorHandlingModule = class _ErrorHandlingModule {
  static forRoot() {
    return {
      ngModule: _ErrorHandlingModule,
      providers: [provideMultiErrorHandler(), {
        provide: ErrorHandler,
        useClass: CxErrorHandler
      }]
    };
  }
  static {
    this.ɵfac = function ErrorHandlingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ErrorHandlingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ErrorHandlingModule,
      imports: [EffectsErrorHandlerModule, HttpErrorHandlerModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [EffectsErrorHandlerModule.forRoot(), HttpErrorHandlerModule.forRoot()]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorHandlingModule, [{
    type: NgModule,
    args: [{
      imports: [EffectsErrorHandlerModule.forRoot(), HttpErrorHandlerModule.forRoot()]
    }]
  }], null, null);
})();
var defaultBackendHttpTimeoutConfig = {
  backend: {
    timeout: {
      server: 2e4
    }
  }
};
var HTTP_TIMEOUT_CONFIG = new HttpContextToken(() => void 0);
var BackendHttpTimeoutConfig = class {
};
var HttpTimeoutInterceptor = class _HttpTimeoutInterceptor {
  constructor(windowRef, config) {
    this.windowRef = windowRef;
    this.config = config;
    this.logger = inject(LoggerService);
  }
  /**
   * It throws an error when a request takes longer than the specified time.
   *
   * It starts counting time for timeout only after the request is sent.
   */
  intercept(request3, next) {
    const timeoutValue = this.getTimeoutValue(request3);
    if (typeof timeoutValue === "undefined") {
      return next.handle(request3);
    }
    return next.handle(request3).pipe(switchMap((event) => {
      if (event.type === HttpEventType.Sent) {
        return NEVER.pipe(startWith(event), timeout(timeoutValue));
      }
      return of(event);
    }), catchError((error) => {
      throw this.convertTimeoutToHttpErrorResponse({
        error,
        request: request3,
        timeoutValue
      });
    }));
  }
  /**
   * Returns the configured timeout value for the given request.
   *
   * The timeout can be configured specifically for a certain request
   * via HttpContextToken `HTTP_TIMEOUT_CONFIG`. When it's not available,
   * the value is taken from the global config `config.backend.timeout`.
   *
   * Depending on the platform (browser or server), the configured timeout value can be different.
   */
  getTimeoutValue(request3) {
    const localTimeoutConfig = request3.context.get(HTTP_TIMEOUT_CONFIG);
    const globalTimeoutConfig = this.config?.backend?.timeout;
    const timeoutConfig = localTimeoutConfig ?? globalTimeoutConfig ?? {};
    return this.windowRef.isBrowser() ? timeoutConfig?.browser : timeoutConfig?.server;
  }
  /**
   * It converts an RxJs `TimeoutError` (caused by the `timeout()` operator),
   * to a manually crafted `HttpErrorResponse` object.
   *
   * If the error is not an RxJs `TimeoutError`, it just returns the original error.
   */
  convertTimeoutToHttpErrorResponse({
    error,
    request: request3,
    timeoutValue
  }) {
    if (error instanceof TimeoutError) {
      const cxHttpTimeoutError = this.buildError(request3, timeoutValue);
      return new HttpErrorResponse({
        url: request3.url,
        error: cxHttpTimeoutError
      });
    }
    return error;
  }
  buildError(request3, timeoutValue) {
    const message = `Request to URL '${request3.url}' exceeded expected time of ${timeoutValue}ms and was aborted.`;
    this.logger.warn(message);
    return new Error(message);
  }
  static {
    this.ɵfac = function HttpTimeoutInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HttpTimeoutInterceptor)(ɵɵinject(WindowRef), ɵɵinject(OccConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _HttpTimeoutInterceptor,
      factory: _HttpTimeoutInterceptor.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpTimeoutInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: WindowRef
  }, {
    type: OccConfig
  }], null);
})();
var HttpTimeoutModule = class _HttpTimeoutModule {
  static {
    this.ɵfac = function HttpTimeoutModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HttpTimeoutModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _HttpTimeoutModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useExisting: HttpTimeoutInterceptor,
        multi: true
      }, provideDefaultConfig(defaultBackendHttpTimeoutConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpTimeoutModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useExisting: HttpTimeoutInterceptor,
        multi: true
      }, provideDefaultConfig(defaultBackendHttpTimeoutConfig)]
    }]
  }], null, null);
})();
var HttpModule = class _HttpModule {
  static forRoot() {
    return {
      ngModule: _HttpModule
    };
  }
  static {
    this.ɵfac = function HttpModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HttpModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _HttpModule,
      imports: [HttpTimeoutModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [HttpTimeoutModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpModule, [{
    type: NgModule,
    args: [{
      imports: [HttpTimeoutModule]
    }]
  }], null, null);
})();
var defaultI18nConfig = {
  i18n: {
    fallbackLang: void 0,
    debug: false
  }
};
var I18nConfig = class _I18nConfig {
  static {
    this.ɵfac = function I18nConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _I18nConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _I18nConfig,
      factory: function I18nConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _I18nConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(I18nConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var I18nConfigInitializer = class _I18nConfigInitializer {
  constructor(configInit) {
    this.configInit = configInit;
    this.scopes = ["i18n.fallbackLang"];
    this.configFactory = () => lastValueFrom(this.resolveConfig());
  }
  /**
   * Resolves the `fallbackLang` based on the default language from config `context.language` .
   */
  resolveConfig() {
    return this.configInit.getStable("context.language").pipe(map((config) => ({
      i18n: {
        // the first language in the array is the default one
        fallbackLang: config?.context?.language?.[0]
      }
    })));
  }
  static {
    this.ɵfac = function I18nConfigInitializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _I18nConfigInitializer)(ɵɵinject(ConfigInitializerService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _I18nConfigInitializer,
      factory: _I18nConfigInitializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(I18nConfigInitializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConfigInitializerService
  }], null);
})();
var CxDatePipe = class _CxDatePipe extends DatePipe {
  constructor(language) {
    super("");
    this.language = language;
    this.logger = inject(LoggerService);
  }
  transform(value, format, timezone) {
    return super.transform(value, format, timezone, this.getLang());
  }
  getLang() {
    const lang = this.getActiveLang();
    try {
      getLocaleId(lang);
      return lang;
    } catch {
      this.reportMissingLocaleData(lang);
      return "en";
    }
  }
  getActiveLang() {
    let result = "";
    this.language.getActive().subscribe((lang) => result = lang).unsubscribe();
    return result;
  }
  reportMissingLocaleData(lang) {
    if (isDevMode()) {
      this.logger.warn(`cxDate pipe: No locale data registered for '${lang}' (see https://angular.io/api/common/registerLocaleData).`);
    }
  }
  static {
    this.ɵfac = function CxDatePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CxDatePipe)(ɵɵdirectiveInject(LanguageService, 16));
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "cxDate",
      type: _CxDatePipe,
      pure: true,
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CxDatePipe, [{
    type: Pipe,
    args: [{
      name: "cxDate",
      standalone: false
    }]
  }], () => [{
    type: LanguageService
  }], null);
})();
var I18nextBackendInitializer = class _I18nextBackendInitializer {
  static {
    this.ɵfac = function I18nextBackendInitializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _I18nextBackendInitializer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _I18nextBackendInitializer,
      factory: _I18nextBackendInitializer.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(I18nextBackendInitializer, [{
    type: Injectable
  }], null, null);
})();
var I18NEXT_INSTANCE = new InjectionToken("I18NEXT_INSTANCE", {
  providedIn: "root",
  factory: () => instance.createInstance()
});
var I18NEXT_HTTP_BACKEND_CLIENT = new InjectionToken("I18NEXT_HTTP_BACKEND_CLIENT", {
  providedIn: "root",
  factory: () => {
    const httpClient = inject(HttpClient);
    return (_options, url, _payload, callback) => {
      httpClient.get(url, {
        responseType: "text"
      }).subscribe({
        next: (data) => callback(null, {
          status: 200,
          data
        }),
        error: (error) => callback(error, {
          // a workaround for https://github.com/i18next/i18next-http-backend/issues/82
          data: null,
          status: error.status
        })
      });
    };
  }
});
var I18nextHttpBackendInitializer = class _I18nextHttpBackendInitializer {
  constructor(i18next, i18nextHttpClient, config, windowRef) {
    this.i18next = i18next;
    this.i18nextHttpClient = i18nextHttpClient;
    this.config = config;
    this.windowRef = windowRef;
  }
  /**
   * Tells whether this i18next backend is applicable, based on the configuration.
   */
  hasMatch() {
    return !!this.config.i18n?.backend?.loadPath;
  }
  /**
   * @override
   * Configures an i18next HTTP backend plugin,
   * to allow for loading translations via HTTP.
   */
  initialize() {
    this.i18next.use(esm_default);
    return {
      backend: this.getBackendConfig()
    };
  }
  /**
   * Returns the configuration for the i18next-http-backend plugin.
   */
  getBackendConfig() {
    if (!this.config.i18n?.backend?.loadPath) {
      throw new Error("Missing config `i18n.backend.loadPath`.");
    }
    const loadPath = this.getLoadPath(this.config.i18n.backend.loadPath);
    const backend = {
      loadPath,
      request: this.i18nextHttpClient,
      // Disable the periodical reloading. Otherwise SSR would not finish due to the pending task `setInterval()`
      // See source code of `i18next-http-backend` : https://github.com/i18next/i18next-http-backend/blob/00b7e8f67abf8372af17529b51190a7e8b17e3d8/lib/index.js#L40-L41
      reloadInterval: false
    };
    return backend;
  }
  /**
   * Resolves the relative path to the absolute one in SSR, using the server request's origin.
   * It's needed, because Angular Universal doesn't support relative URLs in HttpClient. See Angular issues:
   * - https://github.com/angular/angular/issues/19224
   * - https://github.com/angular/universal/issues/858
   */
  getLoadPath(path) {
    if (!this.windowRef.isBrowser() && !path.match(/^http(s)?:\/\//)) {
      if (path.startsWith("/")) {
        path = path.slice("/".length);
      }
      if (path.startsWith("./")) {
        path = path.slice("./".length);
      }
      const serverRequestOrigin = this.windowRef.location.origin;
      return `${serverRequestOrigin}/${path}`;
    }
    return path;
  }
  static {
    this.ɵfac = function I18nextHttpBackendInitializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _I18nextHttpBackendInitializer)(ɵɵinject(I18NEXT_INSTANCE), ɵɵinject(I18NEXT_HTTP_BACKEND_CLIENT), ɵɵinject(I18nConfig), ɵɵinject(WindowRef));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _I18nextHttpBackendInitializer,
      factory: _I18nextHttpBackendInitializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(I18nextHttpBackendInitializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [I18NEXT_INSTANCE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [I18NEXT_HTTP_BACKEND_CLIENT]
    }]
  }, {
    type: I18nConfig
  }, {
    type: WindowRef
  }], null);
})();
var I18nextResourcesToBackendInitializer = class _I18nextResourcesToBackendInitializer {
  constructor(config, i18next) {
    this.config = config;
    this.i18next = i18next;
  }
  hasMatch() {
    return !!this.config.i18n?.backend?.loader;
  }
  initialize() {
    const loader = this.config.i18n?.backend?.loader;
    if (!loader) {
      throw new Error("Missing config `i18n.backend.loader`.");
    }
    this.i18next.use(resourcesToBackend(loader));
    return {
      backend: {}
    };
  }
  static {
    this.ɵfac = function I18nextResourcesToBackendInitializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _I18nextResourcesToBackendInitializer)(ɵɵinject(I18nConfig), ɵɵinject(I18NEXT_INSTANCE));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _I18nextResourcesToBackendInitializer,
      factory: _I18nextResourcesToBackendInitializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(I18nextResourcesToBackendInitializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: I18nConfig
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [I18NEXT_INSTANCE]
    }]
  }], null);
})();
var i18nextBackendProviders = [{
  provide: I18nextBackendInitializer,
  useExisting: I18nextHttpBackendInitializer,
  multi: true
}, {
  provide: I18nextBackendInitializer,
  useExisting: I18nextResourcesToBackendInitializer,
  multi: true
}];
var I18NEXT_LOGGER_PLUGIN = new InjectionToken("I18NEXT_LOGGER_PLUGIN", {
  providedIn: "root",
  factory: () => {
    const logger = inject(LoggerService);
    return {
      type: "logger",
      /**
       * @param args - Array of arguments. This is the only parameter that is an array. See more: https://www.i18next.com/misc/creating-own-plugins#logger
       */
      log: (args) => logger.log(...args),
      /**
       * @param args - Array of arguments. This is the only parameter that is an array. See more: https://www.i18next.com/misc/creating-own-plugins#logger
       */
      warn: (args) => logger.warn(...args),
      /**
       * @param args - Array of arguments. This is the only parameter that is an array. See more: https://www.i18next.com/misc/creating-own-plugins#logger
       */
      error: (args) => logger.error(...args)
    };
  }
});
var I18nextBackendService = class _I18nextBackendService {
  constructor(backendInitializers) {
    this.backendInitializers = backendInitializers;
  }
  /**
   * Configures an i18next backend plugin, to allow for loading translations from external resources.
   *
   * @returns Additional configuration to be used when initializing the i18next instance.
   */
  initialize() {
    const backendInitializer = resolveApplicable(this.backendInitializers ?? []);
    return backendInitializer?.initialize() ?? {};
  }
  static {
    this.ɵfac = function I18nextBackendService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _I18nextBackendService)(ɵɵinject(I18nextBackendInitializer, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _I18nextBackendService,
      factory: _I18nextBackendService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(I18nextBackendService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [I18nextBackendInitializer]
    }]
  }], null);
})();
var I18nextInitializer = class _I18nextInitializer {
  constructor(i18next, config, languageService, i18nextBackendService) {
    this.i18next = i18next;
    this.config = config;
    this.languageService = languageService;
    this.i18nextBackendService = i18nextBackendService;
    this.loggerPlugin = inject(I18NEXT_LOGGER_PLUGIN);
  }
  /**
   * Initializes the i18next instance.
   *
   * @returns Promise that resolves when the i18next instance is initialized.
   */
  initialize() {
    const i18nextConfig = this.getI18nextConfig();
    return this.i18next.use(this.loggerPlugin).init(i18nextConfig, () => {
      this.addTranslationResources();
      this.synchronizeLanguage();
    });
  }
  /**
   * Returns the configuration for initializing an i18next instance.
   */
  getI18nextConfig() {
    let i18nextConfig = {
      ns: [],
      // don't preload any namespaces
      fallbackLng: this.config.i18n?.fallbackLang,
      debug: this.config.i18n?.debug,
      interpolation: {
        escapeValue: false,
        skipOnVariables: false
      }
    };
    if (this.config.i18n?.backend) {
      i18nextConfig = __spreadValues(__spreadValues({}, i18nextConfig), this.i18nextBackendService.initialize());
    }
    return i18nextConfig;
  }
  /**
   * Populates the i18next instance with the given static translations.
   *
   * @param i18next i18next instance
   * @param resources translation resources
   */
  addTranslationResources() {
    const resources = this.config.i18n?.resources ?? {};
    Object.keys(resources).forEach((lang) => {
      Object.keys(resources[lang]).forEach((chunkName) => {
        this.i18next.addResourceBundle(lang, chunkName, resources[lang][chunkName], true, true);
      });
    });
  }
  /**
   * Ensures that when the site context language changes,
   * the i18next instance is updated with the new language.
   */
  synchronizeLanguage() {
    this.subscription = this.subscription ?? this.languageService.getActive().subscribe((lang) => this.i18next.changeLanguage(lang));
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function I18nextInitializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _I18nextInitializer)(ɵɵinject(I18NEXT_INSTANCE), ɵɵinject(I18nConfig), ɵɵinject(LanguageService), ɵɵinject(I18nextBackendService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _I18nextInitializer,
      factory: _I18nextInitializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(I18nextInitializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [I18NEXT_INSTANCE]
    }]
  }, {
    type: I18nConfig
  }, {
    type: LanguageService
  }, {
    type: I18nextBackendService
  }], null);
})();
var i18nextProviders = [{
  provide: APP_INITIALIZER,
  useFactory: () => {
    const configInitializerService = inject(ConfigInitializerService);
    const i18nextInitializer = inject(I18nextInitializer);
    return () => lastValueFrom(configInitializerService.getStable("i18n")).then(() => i18nextInitializer.initialize());
  },
  multi: true
}, ...i18nextBackendProviders];
var TranslationChunkService = class _TranslationChunkService {
  constructor(config) {
    this.config = config;
    this.duplicates = {};
    this.chunks = {};
    this.logger = inject(LoggerService);
    this.KEY_SEPARATOR = ".";
    const chunks = config.i18n && config.i18n.chunks || {};
    Object.keys(chunks).forEach((chunk) => {
      chunks[chunk].forEach((key) => {
        if (this.chunks.hasOwnProperty(key)) {
          if (!this.duplicates[key]) {
            this.duplicates[key] = [this.chunks[key]];
          }
          this.duplicates[key].push(chunk);
        } else {
          this.chunks[key] = chunk;
        }
      });
    });
    if (Object.keys(this.duplicates).length > 0 && isDevMode()) {
      this.warnDuplicates(this.duplicates);
    }
  }
  getChunkNameForKey(key) {
    const mainKey = (key || "").split(this.KEY_SEPARATOR)[0];
    const chunk = this.chunks && this.chunks[mainKey];
    if (!chunk) {
      return mainKey;
    }
    return chunk;
  }
  warnDuplicates(items) {
    const dupes = [];
    Object.keys(items).forEach((key) => {
      dupes.push(`* '${key}' found in chunks: ${items[key].join(", ")}. Used '${this.chunks[key]}.${key}'.`);
    });
    this.logger.warn(`Duplicated keys has been found in the config of i18n chunks:
${dupes.join("\n")}`);
  }
  static {
    this.ɵfac = function TranslationChunkService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TranslationChunkService)(ɵɵinject(I18nConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TranslationChunkService,
      factory: _TranslationChunkService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslationChunkService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: I18nConfig
  }], null);
})();
var I18nextTranslationService = class _I18nextTranslationService {
  constructor(config, translationChunk, i18next) {
    this.config = config;
    this.translationChunk = translationChunk;
    this.i18next = i18next;
    this.NON_BREAKING_SPACE = String.fromCharCode(160);
    this.NAMESPACE_SEPARATOR = ":";
    this.logger = inject(LoggerService);
  }
  translate(key, options = {}, whitespaceUntilLoaded = false) {
    const translationKeys = Array.isArray(key) ? key : [key];
    const chunkNamesByKeys = /* @__PURE__ */ new Map();
    const namespacedKeys = [];
    translationKeys.forEach((translationKey) => {
      const chunkName = this.translationChunk.getChunkNameForKey(translationKey);
      const namespacedKey = this.getNamespacedKey(translationKey, chunkName);
      namespacedKeys.push(namespacedKey);
      chunkNamesByKeys.set(translationKey, chunkName);
    });
    return new Observable((subscriber) => {
      const translate = () => {
        if (!this.i18next.isInitialized) {
          return;
        }
        let namespacesLoaded = false;
        this.i18next.loadNamespaces(Array.from(chunkNamesByKeys.values()), () => {
          namespacesLoaded = true;
          if (this.i18next.exists(namespacedKeys, options)) {
            subscriber.next(this.i18next.t(namespacedKeys, options));
          } else {
            this.reportMissingKey(chunkNamesByKeys);
            subscriber.next(this.getFallbackValue(namespacedKeys));
          }
        });
        if (!namespacesLoaded && whitespaceUntilLoaded) {
          subscriber.next(this.NON_BREAKING_SPACE);
        }
      };
      translate();
      this.i18next.on("languageChanged", translate);
      return () => this.i18next.off("languageChanged", translate);
    });
  }
  loadChunks(chunkNames) {
    return this.i18next.loadNamespaces(chunkNames);
  }
  /**
   * Returns a fallback value in case when the all given keys are missing
   */
  getFallbackValue(keyOrKeys) {
    const formattedKey = Array.isArray(keyOrKeys) ? keyOrKeys.join(", ") : keyOrKeys;
    return isDevMode() ? `[${formattedKey}]` : this.NON_BREAKING_SPACE;
  }
  reportMissingKey(chunkNamesByKeys) {
    const keys = [...chunkNamesByKeys.keys()];
    if (isDevMode()) {
      this.logger.warn(`Translation keys missing [${keys.join(", ")}]. Attempted to load ${[...chunkNamesByKeys].map(([key, chunk]) => `'${key}' from chunk '${chunk}'`).join(", ")}.`);
    }
  }
  getNamespacedKey(key, chunk) {
    return chunk + this.NAMESPACE_SEPARATOR + key;
  }
  static {
    this.ɵfac = function I18nextTranslationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _I18nextTranslationService)(ɵɵinject(I18nConfig), ɵɵinject(TranslationChunkService), ɵɵinject(I18NEXT_INSTANCE));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _I18nextTranslationService,
      factory: _I18nextTranslationService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(I18nextTranslationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: I18nConfig
  }, {
    type: TranslationChunkService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [I18NEXT_INSTANCE]
    }]
  }], null);
})();
var CxNumericPipe = class _CxNumericPipe extends DecimalPipe {
  constructor(language) {
    super("");
    this.language = language;
    this.logger = inject(LoggerService);
  }
  transform(value, digitsInfo) {
    return super.transform(value, digitsInfo, this.getLang());
  }
  getLang() {
    const lang = this.getActiveLang();
    try {
      getLocaleId(lang);
      return lang;
    } catch {
      this.reportMissingLocaleData(lang);
      return "en";
    }
  }
  getActiveLang() {
    let result = "";
    this.language.getActive().subscribe((lang) => result = lang).unsubscribe();
    return result;
  }
  reportMissingLocaleData(lang) {
    if (isDevMode()) {
      this.logger.warn(`cxNumeric pipe: No locale data registered for '${lang}' (see https://angular.io/api/common/registerLocaleData).`);
    }
  }
  static {
    this.ɵfac = function CxNumericPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CxNumericPipe)(ɵɵdirectiveInject(LanguageService, 16));
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "cxNumeric",
      type: _CxNumericPipe,
      pure: true,
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CxNumericPipe, [{
    type: Pipe,
    args: [{
      name: "cxNumeric",
      standalone: false
    }]
  }], () => [{
    type: LanguageService
  }], null);
})();
function isTranslatable(input) {
  return input !== null && typeof input === "object" && ("key" in input || "raw" in input);
}
var TranslatePipe = class _TranslatePipe {
  constructor(service, cd) {
    this.service = service;
    this.cd = cd;
    this.logger = inject(LoggerService);
  }
  transform(input, options = {}) {
    if (!input) {
      if (isDevMode()) {
        this.logger.error(`The given input for the cxTranslate pipe (${input}) is invalid and cannot be translated`);
      }
      return "";
    }
    if (isTranslatable(input) && input.raw) {
      return input.raw;
    }
    if (isTranslatable(input) && input.params) {
      options = __spreadValues(__spreadValues({}, options), input.params);
    }
    const key = isTranslatable(input) ? input.key : input;
    this.translate(key, options);
    return this.translatedValue;
  }
  translate(key, options) {
    if (key !== this.lastKey || !ObjectComparisonUtils.shallowEqualObjects(options, this.lastOptions)) {
      this.lastKey = key;
      this.lastOptions = options;
      if (this.sub) {
        this.sub.unsubscribe();
      }
      this.sub = this.service.translate(key, options, true).subscribe((val) => this.markForCheck(val));
    }
  }
  markForCheck(value) {
    this.translatedValue = value;
    this.cd.markForCheck();
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
  static {
    this.ɵfac = function TranslatePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TranslatePipe)(ɵɵdirectiveInject(TranslationService, 16), ɵɵdirectiveInject(ChangeDetectorRef, 16));
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "cxTranslate",
      type: _TranslatePipe,
      pure: false,
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslatePipe, [{
    type: Pipe,
    args: [{
      name: "cxTranslate",
      pure: false,
      standalone: false
    }]
  }], () => [{
    type: TranslationService
  }, {
    type: ChangeDetectorRef
  }], null);
})();
function initI18nConfig(configInitializer, config) {
  if (config?.i18n?.fallbackLang !== void 0) {
    return null;
  }
  return configInitializer;
}
var I18nModule = class _I18nModule {
  static forRoot() {
    return {
      ngModule: _I18nModule,
      providers: [provideDefaultConfig(defaultI18nConfig), {
        provide: TranslationService,
        useExisting: I18nextTranslationService
      }, ...i18nextProviders, {
        provide: CONFIG_INITIALIZER,
        useFactory: initI18nConfig,
        deps: [I18nConfigInitializer, I18nConfig],
        multi: true
      }]
    };
  }
  static {
    this.ɵfac = function I18nModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _I18nModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _I18nModule,
      declarations: [TranslatePipe, CxDatePipe, CxNumericPipe],
      exports: [TranslatePipe, CxDatePipe, CxNumericPipe]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(I18nModule, [{
    type: NgModule,
    args: [{
      declarations: [TranslatePipe, CxDatePipe, CxNumericPipe],
      exports: [TranslatePipe, CxDatePipe, CxNumericPipe]
    }]
  }], null, null);
})();
function moduleInitializersFactory(lazyModuleService, moduleInitializerFunctions) {
  const logger = inject(LoggerService);
  return () => {
    return Promise.all(lazyModuleService.runModuleInitializerFunctions(moduleInitializerFunctions)).catch((error) => {
      logger.error("MODULE_INITIALIZER promise was rejected during app initialization.", error);
      throw error;
    });
  };
}
var LazyLoadingModule = class _LazyLoadingModule {
  static forRoot() {
    return {
      ngModule: _LazyLoadingModule,
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: moduleInitializersFactory,
        deps: [LazyModulesService, [new Optional(), MODULE_INITIALIZER]],
        multi: true
      }]
    };
  }
  static {
    this.ɵfac = function LazyLoadingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LazyLoadingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LazyLoadingModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LazyLoadingModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
function getReducers$3() {
  return entityLoaderReducer(PROCESS_FEATURE);
}
var reducerToken$3 = new InjectionToken("ProcessReducers");
var reducerProvider$3 = {
  provide: reducerToken$3,
  useFactory: getReducers$3
};
var ProcessStoreModule = class _ProcessStoreModule {
  static {
    this.ɵfac = function ProcessStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProcessStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProcessStoreModule,
      imports: [StateModule, StoreFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [reducerProvider$3],
      imports: [StateModule, StoreModule.forFeature(PROCESS_FEATURE, reducerToken$3)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProcessStoreModule, [{
    type: NgModule,
    args: [{
      imports: [StateModule, StoreModule.forFeature(PROCESS_FEATURE, reducerToken$3)],
      providers: [reducerProvider$3]
    }]
  }], null, null);
})();
var ProcessModule = class _ProcessModule {
  static forRoot() {
    return {
      ngModule: _ProcessModule,
      providers: []
    };
  }
  static {
    this.ɵfac = function ProcessModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProcessModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProcessModule,
      imports: [ProcessStoreModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ProcessStoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProcessModule, [{
    type: NgModule,
    args: [{
      imports: [ProcessStoreModule]
    }]
  }], null, null);
})();
var defaultSiteThemeConfig = {
  siteTheme: {
    optionalThemes: [{
      i18nNameKey: "siteThemeSwitcher.themes.highContrastDark",
      className: "cx-theme-high-contrast-dark"
    }, {
      i18nNameKey: "siteThemeSwitcher.themes.highContrastLight",
      className: "cx-theme-high-contrast-light"
    }]
  }
};
var SET_ACTIVE_SITE_THEME = "[Site-theme] Set Active Site Theme";
var SITE_THEME_CHANGE = "[Site-theme] Site Theme Change";
var SetActiveSiteTheme = class {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_ACTIVE_SITE_THEME;
  }
};
var SiteThemeChange = class {
  constructor(payload) {
    this.payload = payload;
    this.type = SITE_THEME_CHANGE;
  }
};
var siteThemeGroup_actions = Object.freeze({
  __proto__: null,
  SET_ACTIVE_SITE_THEME,
  SITE_THEME_CHANGE,
  SetActiveSiteTheme,
  SiteThemeChange
});
var SITE_THEME_FEATURE = "siteTheme";
var getSiteThemeState = createFeatureSelector(SITE_THEME_FEATURE);
var activeSiteThemeSelector = (state) => state.activeSiteTheme;
var getSiteThemesState = createSelector(getSiteThemeState, (state) => state.themes);
var getActiveSiteTheme = createSelector(getSiteThemesState, activeSiteThemeSelector);
var siteThemeGroup_selectors = Object.freeze({
  __proto__: null,
  getActiveSiteTheme,
  getSiteThemeState,
  getSiteThemesState
});
var SiteThemeService = class _SiteThemeService {
  constructor() {
    this.store = inject(Store);
    this.config = inject(Config);
    this.FALLBACK_DEFAULT_THEME_ID = "";
  }
  getDefault() {
    const defaultThemeId = getContextParameterDefault(this.config, THEME_CONTEXT_ID) ?? this.FALLBACK_DEFAULT_THEME_ID;
    return {
      className: defaultThemeId,
      i18nNameKey: "siteThemeSwitcher.themes.default"
    };
  }
  /**
   * List of possible themes.
   *
   * There are 2 types of themes: default and optional which are configured differently in Spartacus config.
   * This property combines both types of themes into a single list.
   *
   * 1. The default theme ID can be configured only via Spartacus config `config.context.theme`
   *    (note: its value can be defined statically or fetched dynamically from the CMS backend).
   * 2. The optional themes (their IDs and their i18n keys) can be configured
   *    only via Spartacus config `config.siteTheme.optionalThemes`
   *
   * CAUTION: This property should be accessed only when those configs are stable, e.g. `ConfigInitializer.getStable('context','siteTheme'))`
   */
  get themes() {
    const optionalThemes = this.config.siteTheme?.optionalThemes || [];
    return [this.getDefault(), ...optionalThemes];
  }
  getAll() {
    return of(this.themes);
  }
  /**
   * Gets the className of the active theme.
   */
  getActive() {
    return this.store.pipe(select(getActiveSiteTheme), filter(isNotNullable));
  }
  /**
   * Sets the active theme className.
   */
  setActive(className) {
    this.store.pipe(select(getActiveSiteTheme), take(1)).subscribe((activeTheme) => {
      if (activeTheme !== className && this.isValid(className)) {
        this.store.dispatch(new SetActiveSiteTheme(className));
      }
    });
  }
  isInitialized() {
    let valueInitialized = false;
    this.getActive().subscribe(() => valueInitialized = true).unsubscribe();
    return valueInitialized;
  }
  isValid(className) {
    return this.themes.map((theme) => theme.className).includes(className);
  }
  static {
    this.ɵfac = function SiteThemeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteThemeService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SiteThemeService,
      factory: _SiteThemeService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteThemeService, [{
    type: Injectable
  }], null, null);
})();
var SiteThemeConfig = class _SiteThemeConfig {
  static {
    this.ɵfac = function SiteThemeConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteThemeConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SiteThemeConfig,
      factory: function SiteThemeConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _SiteThemeConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteThemeConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var SITE_THEME_ID = "siteTheme";
var SiteThemePersistenceService = class _SiteThemePersistenceService {
  constructor() {
    this.statePersistenceService = inject(StatePersistenceService);
    this.siteThemeService = inject(SiteThemeService);
    this.config = inject(SiteThemeConfig);
    this.initialized$ = new ReplaySubject(1);
  }
  /**
   * Initializes the synchronization of the active theme with the local storage.
   *
   * @returns Observable that emits and completes when the value is read from the storage.
   */
  initSync() {
    this.statePersistenceService.syncWithStorage({
      key: SITE_THEME_ID,
      state$: this.siteThemeService.getActive(),
      onRead: (state) => this.onRead(state)
    });
    return this.initialized$;
  }
  onRead(valueFromStorage) {
    if (!this.siteThemeService.isInitialized() && valueFromStorage) {
      this.siteThemeService.setActive(valueFromStorage);
    }
    if (!this.initialized$.closed) {
      this.initialized$.next(void 0);
      this.initialized$.complete();
    }
  }
  static {
    this.ɵfac = function SiteThemePersistenceService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteThemePersistenceService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SiteThemePersistenceService,
      factory: _SiteThemePersistenceService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteThemePersistenceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var SiteThemeInitializer = class _SiteThemeInitializer {
  constructor() {
    this.siteThemeService = inject(SiteThemeService);
    this.siteThemePersistenceService = inject(SiteThemePersistenceService);
    this.configInit = inject(ConfigInitializerService);
  }
  /**
   * Initializes the value of the active theme.
   */
  initialize() {
    this.subscription = this.configInit.getStable("context").pipe(switchMap(() => this.siteThemePersistenceService.initSync()), switchMap(() => this.setFallbackValue())).subscribe();
  }
  /**
   * On subscription to the returned observable:
   *
   * Sets the default value, unless the active theme has been already initialized.
   */
  setFallbackValue() {
    return this.configInit.getStable("context").pipe(tap(() => this.setDefaultFromConfig()));
  }
  /**
   * Sets the active theme value based on the default value from the config,
   * unless the active theme has been already initialized.
   */
  setDefaultFromConfig() {
    if (!this.siteThemeService.isInitialized()) {
      const defaultTheme = this.siteThemeService.getDefault();
      this.siteThemeService.setActive(defaultTheme.className);
    }
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function SiteThemeInitializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteThemeInitializer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SiteThemeInitializer,
      factory: _SiteThemeInitializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteThemeInitializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function initializeTheme() {
  const siteThemeInitializer = inject(SiteThemeInitializer);
  return () => {
    siteThemeInitializer.initialize();
  };
}
var siteThemeInitializerProviders = [{
  provide: APP_INITIALIZER,
  useFactory: initializeTheme,
  multi: true
}];
var SiteThemesEffects = class _SiteThemesEffects {
  constructor() {
    this.actions$ = inject(Actions);
    this.state = inject(Store);
    this.activateSiteTheme$ = createEffect(() => this.state.select(getActiveSiteTheme).pipe(bufferCount(2, 1), filter(([previous]) => !!previous), map(([previous, current]) => new SiteThemeChange({
      previous,
      current
    }))));
  }
  static {
    this.ɵfac = function SiteThemesEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteThemesEffects)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SiteThemesEffects,
      factory: _SiteThemesEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteThemesEffects, [{
    type: Injectable
  }], null, null);
})();
var effects$2 = [SiteThemesEffects];
var initialState$d = {
  activeSiteTheme: null
};
function reducer$d(state = initialState$d, action) {
  if (action.type === SET_ACTIVE_SITE_THEME) {
    const className = action.payload;
    return __spreadProps(__spreadValues({}, state), {
      activeSiteTheme: className
    });
  }
  return state;
}
function getReducers$2() {
  return {
    themes: reducer$d
  };
}
var reducerToken$2 = new InjectionToken("SiteThemeReducers");
var reducerProvider$2 = {
  provide: reducerToken$2,
  useFactory: getReducers$2
};
function siteThemeStoreConfigFactory() {
  const config = {
    state: {
      ssrTransfer: {
        keys: {
          [SITE_THEME_FEATURE]: StateTransferType.TRANSFER_STATE
        }
      }
    }
  };
  return config;
}
var SiteThemeStoreModule = class _SiteThemeStoreModule {
  static {
    this.ɵfac = function SiteThemeStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteThemeStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SiteThemeStoreModule,
      imports: [CommonModule, StoreFeatureModule, EffectsFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(siteThemeStoreConfigFactory), reducerProvider$2],
      imports: [CommonModule, StoreModule.forFeature(SITE_THEME_FEATURE, reducerToken$2), EffectsModule.forFeature(effects$2)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteThemeStoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, StoreModule.forFeature(SITE_THEME_FEATURE, reducerToken$2), EffectsModule.forFeature(effects$2)],
      providers: [provideDefaultConfigFactory(siteThemeStoreConfigFactory), reducerProvider$2]
    }]
  }], null, null);
})();
var SiteThemeModule = class _SiteThemeModule {
  static forRoot() {
    return {
      ngModule: _SiteThemeModule,
      providers: [SiteThemeService, provideDefaultConfig(defaultSiteThemeConfig), ...siteThemeInitializerProviders]
    };
  }
  static {
    this.ɵfac = function SiteThemeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteThemeModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SiteThemeModule,
      imports: [StateModule, SiteThemeStoreModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [StateModule, SiteThemeStoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteThemeModule, [{
    type: NgModule,
    args: [{
      imports: [StateModule, SiteThemeStoreModule]
    }]
  }], null, null);
})();
var BaseCoreModule = class _BaseCoreModule {
  static forRoot() {
    return {
      ngModule: _BaseCoreModule
    };
  }
  static {
    this.ɵfac = function BaseCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BaseCoreModule,
      imports: [ErrorHandlingModule, StateModule, ConfigModule, ConfigInitializerModule, ConfigValidatorModule, I18nModule, CmsModule, GlobalMessageModule, ProcessModule, FeaturesConfigModule, SiteContextModule, MetaTagConfigModule, BaseOccModule, LazyLoadingModule, HttpModule, SiteThemeModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [
        ErrorHandlingModule.forRoot(),
        // Import this module before any other interceptor to handle HTTP errors efficiently
        StateModule.forRoot(),
        ConfigModule.forRoot(),
        ConfigInitializerModule.forRoot(),
        ConfigValidatorModule.forRoot(),
        I18nModule.forRoot(),
        CmsModule.forRoot(),
        GlobalMessageModule.forRoot(),
        ProcessModule.forRoot(),
        FeaturesConfigModule.forRoot(),
        SiteContextModule.forRoot(),
        // should be imported after RouterModule.forRoot, because it overwrites UrlSerializer
        MetaTagConfigModule.forRoot(),
        BaseOccModule.forRoot(),
        LazyLoadingModule.forRoot(),
        HttpModule.forRoot(),
        SiteThemeModule.forRoot()
      ]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseCoreModule, [{
    type: NgModule,
    args: [{
      imports: [
        ErrorHandlingModule.forRoot(),
        // Import this module before any other interceptor to handle HTTP errors efficiently
        StateModule.forRoot(),
        ConfigModule.forRoot(),
        ConfigInitializerModule.forRoot(),
        ConfigValidatorModule.forRoot(),
        I18nModule.forRoot(),
        CmsModule.forRoot(),
        GlobalMessageModule.forRoot(),
        ProcessModule.forRoot(),
        FeaturesConfigModule.forRoot(),
        SiteContextModule.forRoot(),
        // should be imported after RouterModule.forRoot, because it overwrites UrlSerializer
        MetaTagConfigModule.forRoot(),
        BaseOccModule.forRoot(),
        LazyLoadingModule.forRoot(),
        HttpModule.forRoot(),
        SiteThemeModule.forRoot()
      ]
    }]
  }], null, null);
})();
var POINT_OF_SERVICE_NORMALIZER = new InjectionToken("PointOfServiceNormalizer");
var ComponentDecorator = class _ComponentDecorator {
  static {
    this.ɵfac = function ComponentDecorator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComponentDecorator)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ComponentDecorator,
      factory: _ComponentDecorator.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComponentDecorator, [{
    type: Injectable
  }], null, null);
})();
var SlotDecorator = class _SlotDecorator {
  static {
    this.ɵfac = function SlotDecorator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SlotDecorator)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SlotDecorator,
      factory: _SlotDecorator.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlotDecorator, [{
    type: Injectable
  }], null, null);
})();
var PageMetaService = class _PageMetaService {
  constructor(cms, unifiedInjector, pageMetaConfig, platformId) {
    this.cms = cms;
    this.unifiedInjector = unifiedInjector;
    this.pageMetaConfig = pageMetaConfig;
    this.platformId = platformId;
    this.resolvers$ = this.unifiedInjector.getMulti(PageMetaResolver).pipe(shareReplay({
      bufferSize: 1,
      refCount: true
    }));
    this.meta$ = defer(() => this.cms.getCurrentPage()).pipe(filter((page) => Boolean(page)), switchMap((page) => this.getMetaResolver(page)), switchMap((metaResolver) => metaResolver ? this.resolve(metaResolver) : of(null)), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  /**
   * Returns the observed page meta data for the current page.
   *
   * The data is resolved by various PageResolvers, which are configurable.
   */
  getMeta() {
    return this.meta$;
  }
  /**
   * If a `PageResolver` has implemented a resolver interface, the resolved data
   * is merged into the `PageMeta` object.
   * @param metaResolver
   */
  resolve(metaResolver) {
    const resolverMethods = this.getResolverMethods();
    const resolvedData = Object.keys(resolverMethods).filter((key) => metaResolver[resolverMethods[key]]).map((key) => {
      return metaResolver[resolverMethods[key]]().pipe(map((data) => ({
        [key]: data
      })));
    });
    if (resolvedData.length === 0) {
      return of({});
    } else {
      return uniteLatest(resolvedData).pipe(map((data) => Object.assign({}, ...data)));
    }
  }
  /**
   * Returns an object with resolvers. The object properties represent the `PageMeta` property, i.e.:
   *
   * ```
   * {
   *   title: 'resolveTitle',
   *   robots: 'resolveRobots'
   * }
   * ```
   */
  getResolverMethods() {
    return this.pageMetaConfig?.pageMeta?.resolvers?.reduce((acc, resolver) => {
      acc[resolver.property] = resolver.method;
      return acc;
    }, {}) ?? {};
  }
  /**
   * Return the resolver with the best match, based on a score
   * generated by the resolver.
   *
   * Resolvers match by default on `PageType` and `page.template`.
   */
  getMetaResolver(page) {
    return this.resolvers$.pipe(map((resolvers) => resolveApplicable(resolvers, [page], [page])));
  }
  static {
    this.ɵfac = function PageMetaService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageMetaService)(ɵɵinject(CmsService), ɵɵinject(UnifiedInjector), ɵɵinject(PageMetaConfig), ɵɵinject(PLATFORM_ID));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PageMetaService,
      factory: _PageMetaService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageMetaService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CmsService
  }, {
    type: UnifiedInjector
  }, {
    type: PageMetaConfig
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var DynamicAttributeService = class _DynamicAttributeService {
  constructor(unifiedInjector) {
    this.unifiedInjector = unifiedInjector;
    this.componentDecorators$ = this.unifiedInjector.getMulti(ComponentDecorator).pipe(shareReplay(1));
    this.slotDecorators$ = this.unifiedInjector.getMulti(SlotDecorator).pipe(shareReplay(1));
  }
  /**
   * Add dynamic attributes to CMS component element
   * @param element: CMS component element
   * @param renderer
   * @param componentData: component data
   */
  addAttributesToComponent(element, renderer, componentData) {
    (getLastValueSync(this.componentDecorators$) || []).forEach((decorator) => decorator.decorate(element, renderer, componentData));
  }
  /**
   * Add dynamic attributes to CMS slot element
   * @param element: CMS slot element
   * @param renderer
   * @param slotData: slot data
   */
  addAttributesToSlot(element, renderer, slotData) {
    (getLastValueSync(this.slotDecorators$) || []).forEach((decorator) => decorator.decorate(element, renderer, slotData));
  }
  static {
    this.ɵfac = function DynamicAttributeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DynamicAttributeService)(ɵɵinject(UnifiedInjector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DynamicAttributeService,
      factory: _DynamicAttributeService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicAttributeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UnifiedInjector
  }], null);
})();
var CostCenterModule = class _CostCenterModule {
  static forRoot() {
    return {
      ngModule: _CostCenterModule,
      providers: []
    };
  }
  static {
    this.ɵfac = function CostCenterModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CostCenterModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CostCenterModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
function mockTranslate(key, options = {}) {
  const keyString = Array.isArray(key) ? key.join(",") : key;
  const optionsString = Object.keys(options).sort().map((optionName) => `${optionName}:${options[optionName]}`).join(" ");
  return optionsString ? `${keyString} ${optionsString}` : keyString;
}
var MockTranslatePipe = class _MockTranslatePipe {
  transform(input, options = {}) {
    if (!input) {
      return "";
    }
    if (isTranslatable(input) && input.raw) {
      return input.raw;
    }
    if (isTranslatable(input) && input.params) {
      options = __spreadValues(__spreadValues({}, options), input.params);
    }
    const key = isTranslatable(input) ? input.key : input;
    return mockTranslate(key, options);
  }
  static {
    this.ɵfac = function MockTranslatePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MockTranslatePipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "cxTranslate",
      type: _MockTranslatePipe,
      pure: true,
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MockTranslatePipe, [{
    type: Pipe,
    args: [{
      name: "cxTranslate",
      standalone: false
    }]
  }], null, null);
})();
var MockTranslationService = class _MockTranslationService {
  translate(key, options = {}, _whitespaceUntilLoaded = false) {
    return new Observable((subscriber) => {
      const value = mockTranslate(key, options);
      subscriber.next(value);
      subscriber.complete();
    });
  }
  loadChunks(_chunks) {
    return Promise.resolve();
  }
  static {
    this.ɵfac = function MockTranslationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MockTranslationService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _MockTranslationService,
      factory: _MockTranslationService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MockTranslationService, [{
    type: Injectable
  }], null, null);
})();
var MockDatePipe = class _MockDatePipe extends DatePipe {
  // Overload to support stricter type check from angular 11 onwards
  transform(value, format, timezone, locale = "en") {
    return super.transform(value, format, timezone, locale);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵMockDatePipe_BaseFactory;
      return function MockDatePipe_Factory(__ngFactoryType__) {
        return (ɵMockDatePipe_BaseFactory || (ɵMockDatePipe_BaseFactory = ɵɵgetInheritedFactory(_MockDatePipe)))(__ngFactoryType__ || _MockDatePipe);
      };
    })();
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "cxDate",
      type: _MockDatePipe,
      pure: true,
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MockDatePipe, [{
    type: Pipe,
    args: [{
      name: "cxDate",
      standalone: false
    }]
  }], null, null);
})();
var I18nTestingModule = class _I18nTestingModule {
  static {
    this.ɵfac = function I18nTestingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _I18nTestingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _I18nTestingModule,
      declarations: [MockTranslatePipe, MockDatePipe],
      exports: [MockTranslatePipe, MockDatePipe]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: TranslationService,
        useClass: MockTranslationService
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(I18nTestingModule, [{
    type: NgModule,
    args: [{
      declarations: [MockTranslatePipe, MockDatePipe],
      exports: [MockTranslatePipe, MockDatePipe],
      providers: [{
        provide: TranslationService,
        useClass: MockTranslationService
      }]
    }]
  }], null, null);
})();
var FeatureModulesService = class _FeatureModulesService {
  constructor(cmsConfig, lazyModules) {
    this.cmsConfig = cmsConfig;
    this.lazyModules = lazyModules;
    this.features = /* @__PURE__ */ new Map();
  }
  /**
   * Check if feature is configured properly by providing module the shell app
   *
   * @param featureName
   */
  isConfigured(featureName) {
    return !!this.getFeatureConfig(featureName)?.module;
  }
  /**
   * Resolve feature based on feature name, if feature was not yet resolved
   *
   * It will first resolve all module dependencies if defined
   */
  resolveFeature(featureName) {
    featureName = this.resolveFeatureAlias(featureName);
    return defer(() => {
      if (!this.features.has(featureName)) {
        if (!this.isConfigured(featureName)) {
          return throwError(() => new Error("No module defined for Feature Module " + featureName));
        }
        const featureConfig = this.getFeatureConfig(featureName);
        this.features.set(featureName, this.resolveDependencies(featureConfig?.dependencies).pipe(switchMap((deps) => this.lazyModules.resolveModuleInstance(featureConfig?.module, featureName, deps)), shareReplay()));
      }
      return this.features.get(featureName) ?? EMPTY;
    });
  }
  /**
   * Resolve
   * @param featureName
   * @protected
   */
  getFeatureConfig(featureName) {
    return this.cmsConfig.featureModules?.[this.resolveFeatureAlias(featureName)];
  }
  /**
   * Will return target feature name, resolving optional feature to feature
   * string mapping
   *
   * @param featureName
   * @protected
   */
  resolveFeatureAlias(featureName) {
    while (typeof this.cmsConfig.featureModules?.[featureName] === "string") {
      featureName = this.cmsConfig.featureModules?.[featureName];
    }
    return featureName;
  }
  /**
   * Resolve dependency modules for the feature
   *
   * @param dependencies
   * @protected
   */
  resolveDependencies(dependencies = []) {
    return dependencies?.length ? forkJoin(dependencies.map((dependency) => {
      if (typeof dependency === "string") {
        return this.resolveFeature(dependency);
      }
      return this.lazyModules.resolveDependencyModuleInstance(dependency);
    })) : of(void 0);
  }
  static {
    this.ɵfac = function FeatureModulesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeatureModulesService)(ɵɵinject(CmsConfig), ɵɵinject(LazyModulesService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _FeatureModulesService,
      factory: _FeatureModulesService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureModulesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CmsConfig
  }, {
    type: LazyModulesService
  }], null);
})();
var PROXY_FACADE_INSTANCE_PROP = "proxyFacadeInstance";
var FacadeFactoryService = class _FacadeFactoryService {
  constructor(featureModules, injector) {
    this.featureModules = featureModules;
    this.injector = injector;
  }
  getResolver(feature, facadeClass, async = false) {
    if (!this.featureModules.isConfigured(feature)) {
      return throwError(() => new Error(`Feature ${feature} is not configured properly`));
    }
    let facadeService$ = this.featureModules.resolveFeature(feature).pipe(map((moduleRef) => moduleRef.injector), map((injector) => injector.get(facadeClass)));
    if (async) {
      facadeService$ = facadeService$.pipe(delay(0));
    }
    return facadeService$.pipe(shareReplay());
  }
  /**
   * Calls a method on a facade
   *
   * Method should either return an observable or void. Any other return type
   * than observable is ignored.
   *
   * @param resolver$
   * @param method
   * @param args
   * @protected
   */
  call(resolver$, method, args) {
    const callResult$ = connectable(resolver$.pipe(map((service) => service[method](...args))), {
      connector: () => new ReplaySubject(),
      resetOnDisconnect: false
    });
    callResult$.connect();
    return callResult$.pipe(switchMap((result) => {
      if (isObservable(result)) {
        return result;
      }
      return EMPTY;
    }));
  }
  /**
   * Get the property value from the facade
   *
   * Property has to be an aobservable
   *
   * @param resolver$
   * @param property
   * @protected
   */
  get(resolver$, property) {
    return resolver$.pipe(switchMap((service) => service[property]));
  }
  create({
    facade,
    feature,
    methods,
    properties,
    async
  }) {
    const resolver$ = this.getResolver(feature, facade, async);
    const result = new class extends facade {
    }();
    (methods ?? []).forEach((method) => {
      result[method] = (...args) => this.call(resolver$, method, args);
    });
    (properties ?? []).forEach((property) => {
      result[property] = this.get(resolver$, property);
    });
    result[PROXY_FACADE_INSTANCE_PROP] = true;
    return result;
  }
  /**
   * isProxyFacadeInstance tests if the provided facade is labeled as a proxy instance.
   * Facade proxy instances contain an object key to label them as such.
   * @param facade The facade object to evaluate
   */
  isProxyFacadeInstance(facade) {
    return !!facade?.[PROXY_FACADE_INSTANCE_PROP];
  }
  static {
    this.ɵfac = function FacadeFactoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FacadeFactoryService)(ɵɵinject(FeatureModulesService), ɵɵinject(Injector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _FacadeFactoryService,
      factory: _FacadeFactoryService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FacadeFactoryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: FeatureModulesService
  }, {
    type: Injector
  }], null);
})();
function facadeFactory(descriptor) {
  return inject(FacadeFactoryService).create(descriptor);
}
var ProductConnector = class _ProductConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  get(productCode, scope = "") {
    return this.adapter.load(productCode, scope);
  }
  getMany(products) {
    if (!this.adapter.loadMany) {
      return products.map((product) => __spreadProps(__spreadValues({}, product), {
        data$: this.adapter.load(product.code, product.scope)
      }));
    }
    return this.adapter.loadMany(products);
  }
  static {
    this.ɵfac = function ProductConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductConnector)(ɵɵinject(ProductAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductConnector,
      factory: _ProductConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProductAdapter
  }], null);
})();
var ProductAvailabilityConnector = class _ProductAvailabilityConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  getRealTimeStock(productCode, unitSapCode) {
    return this.adapter.loadRealTimeStock(productCode, unitSapCode);
  }
  static {
    this.ɵfac = function ProductAvailabilityConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductAvailabilityConnector)(ɵɵinject(ProductAvailabilityAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductAvailabilityConnector,
      factory: _ProductAvailabilityConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductAvailabilityConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProductAvailabilityAdapter
  }], null);
})();
var ProductReferencesConnector = class _ProductReferencesConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  get(productCode, referenceType, pageSize) {
    return this.adapter.load(productCode, referenceType, pageSize);
  }
  static {
    this.ɵfac = function ProductReferencesConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductReferencesConnector)(ɵɵinject(ProductReferencesAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductReferencesConnector,
      factory: _ProductReferencesConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductReferencesConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProductReferencesAdapter
  }], null);
})();
var ProductReviewsConnector = class _ProductReviewsConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  get(productCode, maxCount) {
    return this.adapter.load(productCode, maxCount);
  }
  add(productCode, review) {
    return this.adapter.post(productCode, review);
  }
  static {
    this.ɵfac = function ProductReviewsConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductReviewsConnector)(ɵɵinject(ProductReviewsAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductReviewsConnector,
      factory: _ProductReviewsConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductReviewsConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProductReviewsAdapter
  }], null);
})();
var ProductSearchConnector = class _ProductSearchConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  search(query, searchConfig, scope) {
    return this.adapter.search(query, searchConfig, scope);
  }
  searchByCodes(codes, scope) {
    return this.adapter.searchByCodes(codes, scope);
  }
  searchByCategory(category, scope) {
    return this.adapter.searchByCategory(category, scope);
  }
  getSuggestions(term, pageSize) {
    return this.adapter.loadSuggestions(term, pageSize);
  }
  static {
    this.ɵfac = function ProductSearchConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductSearchConnector)(ɵɵinject(ProductSearchAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductSearchConnector,
      factory: _ProductSearchConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductSearchConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProductSearchAdapter
  }], null);
})();
var FacetChangedEvent = class extends CxEvent {
  static {
    this.type = "FacetChangedEvent";
  }
};
var LOAD_PRODUCT_REFERENCES = "[Product] Load Product References Data";
var LOAD_PRODUCT_REFERENCES_FAIL = "[Product] Load Product References Data Fail";
var LOAD_PRODUCT_REFERENCES_SUCCESS = "[Product] Load Product References Data Success";
var CLEAN_PRODUCT_REFERENCES = "[Product] Clean Product References";
var LoadProductReferences = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_PRODUCT_REFERENCES;
  }
};
var LoadProductReferencesFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_PRODUCT_REFERENCES_FAIL;
    this.error = payload;
  }
};
var LoadProductReferencesSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_PRODUCT_REFERENCES_SUCCESS;
  }
};
var CleanProductReferences = class {
  constructor() {
    this.type = CLEAN_PRODUCT_REFERENCES;
  }
};
var LOAD_PRODUCT_REVIEWS = "[Product] Load Product Reviews Data";
var LOAD_PRODUCT_REVIEWS_FAIL = "[Product] Load Product Reviews Data Fail";
var LOAD_PRODUCT_REVIEWS_SUCCESS = "[Product] Load Product Reviews Data Success";
var POST_PRODUCT_REVIEW = "[Product] Post Product Review";
var POST_PRODUCT_REVIEW_FAIL = "[Product] Post Product Review Fail";
var POST_PRODUCT_REVIEW_SUCCESS = "[Product] Post Product Review Success";
var LoadProductReviews = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_PRODUCT_REVIEWS;
  }
};
var LoadProductReviewsFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_PRODUCT_REVIEWS_FAIL;
    this.error = payload;
  }
};
var LoadProductReviewsSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_PRODUCT_REVIEWS_SUCCESS;
  }
};
var PostProductReview = class {
  constructor(payload) {
    this.payload = payload;
    this.type = POST_PRODUCT_REVIEW;
  }
};
var PostProductReviewFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = POST_PRODUCT_REVIEW_FAIL;
    this.error = payload;
  }
};
var PostProductReviewSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = POST_PRODUCT_REVIEW_SUCCESS;
  }
};
var SEARCH_PRODUCTS = "[Product] Search Products";
var SEARCH_PRODUCTS_FAIL = "[Product] Search Products Fail";
var SEARCH_PRODUCTS_SUCCESS = "[Product] Search Products Success";
var GET_PRODUCT_SUGGESTIONS = "[Product] Get Product Suggestions";
var GET_PRODUCT_SUGGESTIONS_SUCCESS = "[Product] Get Product Suggestions Success";
var GET_PRODUCT_SUGGESTIONS_FAIL = "[Product] Get Product Suggestions Fail";
var CLEAR_PRODUCT_SEARCH_RESULT = "[Product] Clear Product Search Result";
var SearchProducts = class {
  constructor(payload, auxiliary) {
    this.payload = payload;
    this.auxiliary = auxiliary;
    this.type = SEARCH_PRODUCTS;
  }
};
var SearchProductsFail = class {
  constructor(payload, auxiliary) {
    this.payload = payload;
    this.auxiliary = auxiliary;
    this.type = SEARCH_PRODUCTS_FAIL;
    this.error = payload;
  }
};
var SearchProductsSuccess = class {
  constructor(payload, auxiliary) {
    this.payload = payload;
    this.auxiliary = auxiliary;
    this.type = SEARCH_PRODUCTS_SUCCESS;
  }
};
var GetProductSuggestions = class {
  constructor(payload) {
    this.payload = payload;
    this.type = GET_PRODUCT_SUGGESTIONS;
  }
};
var GetProductSuggestionsSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = GET_PRODUCT_SUGGESTIONS_SUCCESS;
  }
};
var GetProductSuggestionsFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = GET_PRODUCT_SUGGESTIONS_FAIL;
    this.error = payload;
  }
};
var ClearProductSearchResult = class {
  constructor(payload = {
    clearPageResults: false,
    clearSearchboxResults: false
  }) {
    this.payload = payload;
    this.type = CLEAR_PRODUCT_SEARCH_RESULT;
  }
};
var EntityScopedLoaderActions;
(function(EntityScopedLoaderActions2) {
  function entityScopedLoadMeta(entityType, id, scope) {
    return __spreadProps(__spreadValues({}, entityLoadMeta(entityType, id)), {
      scope
    });
  }
  EntityScopedLoaderActions2.entityScopedLoadMeta = entityScopedLoadMeta;
  function entityScopedFailMeta(entityType, id, scope, error) {
    return __spreadProps(__spreadValues({}, entityFailMeta(entityType, id, error)), {
      scope
    });
  }
  EntityScopedLoaderActions2.entityScopedFailMeta = entityScopedFailMeta;
  function entityScopedSuccessMeta(entityType, id, scope) {
    return __spreadProps(__spreadValues({}, entitySuccessMeta(entityType, id)), {
      scope
    });
  }
  EntityScopedLoaderActions2.entityScopedSuccessMeta = entityScopedSuccessMeta;
  function entityScopedResetMeta(entityType, id, scope) {
    return __spreadProps(__spreadValues({}, entityResetMeta(entityType, id)), {
      scope
    });
  }
  EntityScopedLoaderActions2.entityScopedResetMeta = entityScopedResetMeta;
  class EntityScopedLoadAction {
    constructor(entityType, id, scope) {
      this.type = ENTITY_LOAD_ACTION;
      this.meta = entityScopedLoadMeta(entityType, id, scope);
    }
  }
  EntityScopedLoaderActions2.EntityScopedLoadAction = EntityScopedLoadAction;
  class EntityScopedFailAction {
    constructor(entityType, id, scope, error) {
      this.type = ENTITY_FAIL_ACTION;
      this.meta = entityScopedFailMeta(entityType, id, scope, error);
      this.error = error;
    }
  }
  EntityScopedLoaderActions2.EntityScopedFailAction = EntityScopedFailAction;
  class EntityScopedSuccessAction {
    constructor(entityType, id, scope, payload) {
      this.payload = payload;
      this.type = ENTITY_SUCCESS_ACTION;
      this.meta = entityScopedSuccessMeta(entityType, id, scope);
    }
  }
  EntityScopedLoaderActions2.EntityScopedSuccessAction = EntityScopedSuccessAction;
  class EntityScopedResetAction {
    constructor(entityType, id, scope) {
      this.type = ENTITY_RESET_ACTION;
      this.meta = entityScopedResetMeta(entityType, id, scope);
    }
  }
  EntityScopedLoaderActions2.EntityScopedResetAction = EntityScopedResetAction;
})(EntityScopedLoaderActions || (EntityScopedLoaderActions = {}));
var PRODUCT_FEATURE = "product";
var PRODUCT_DETAIL_ENTITY = "[Product] Detail Entity";
var PRODUCT_SEARCH_RESULTS_BY_CODES_ENTITY = "[Product] Search Results By Codes Entity";
var PRODUCT_SEARCH_RESULTS_BY_CATEGORY_ENTITY = "[Product] Search Results By Category Entity";
var PRODUCT_SEARCH_LOAD_BY_CODE = "[Product] Product Search Load By Code";
var PRODUCT_SEARCH_LOAD_BY_CODE_SUCCESS = "[Product] Product Search Load By Code Success";
var PRODUCT_SEARCH_LOAD_BY_CODE_FAIL = "[Product] Product Search Load By Code Fail";
var CLEAR_PRODUCT_SEARCH_BY_CODE_STATE = "[Product] Clear Product Search By Code State";
var ProductSearchLoadByCode = class extends EntityScopedLoaderActions.EntityScopedLoadAction {
  constructor(payload) {
    super(PRODUCT_SEARCH_RESULTS_BY_CODES_ENTITY, payload.code, payload.scope);
    this.payload = payload;
    this.type = PRODUCT_SEARCH_LOAD_BY_CODE;
  }
};
var ProductSearchLoadByCodeSuccess = class extends EntityScopedLoaderActions.EntityScopedSuccessAction {
  constructor(payload) {
    super(PRODUCT_SEARCH_RESULTS_BY_CODES_ENTITY, payload.code, payload.scope, payload.product);
    this.type = PRODUCT_SEARCH_LOAD_BY_CODE_SUCCESS;
  }
};
var ProductSearchLoadByCodeFail = class extends EntityScopedLoaderActions.EntityScopedFailAction {
  constructor(payload) {
    super(PRODUCT_SEARCH_RESULTS_BY_CODES_ENTITY, payload.code, payload.scope, payload.error);
    this.type = PRODUCT_SEARCH_LOAD_BY_CODE_FAIL;
  }
};
var ClearProductSearchByCodeState = class extends EntityRemoveAllAction {
  constructor() {
    super(PRODUCT_SEARCH_RESULTS_BY_CODES_ENTITY);
    this.type = CLEAR_PRODUCT_SEARCH_BY_CODE_STATE;
  }
};
var PRODUCT_SEARCH_LOAD_BY_CATEGORY = "[Product] Product Search Load By Category";
var PRODUCT_SEARCH_LOAD_BY_CATEGORY_SUCCESS = "[Product] Product Search Load By Category Success";
var PRODUCT_SEARCH_LOAD_BY_CATEGORY_FAIL = "[Product] Product Search Load By Category Fail";
var ProductSearchLoadByCategory = class extends EntityScopedLoaderActions.EntityScopedLoadAction {
  constructor(payload) {
    super(PRODUCT_SEARCH_RESULTS_BY_CATEGORY_ENTITY, payload.categoryCode, payload.scope);
    this.payload = payload;
    this.type = PRODUCT_SEARCH_LOAD_BY_CATEGORY;
  }
};
var ProductSearchLoadByCategorySuccess = class extends EntityScopedLoaderActions.EntityScopedSuccessAction {
  constructor(payload) {
    super(PRODUCT_SEARCH_RESULTS_BY_CATEGORY_ENTITY, payload.categoryCode, payload.scope, payload.products);
    this.type = PRODUCT_SEARCH_LOAD_BY_CATEGORY_SUCCESS;
  }
};
var ProductSearchLoadByCategoryFail = class extends EntityScopedLoaderActions.EntityScopedFailAction {
  constructor(payload) {
    super(PRODUCT_SEARCH_RESULTS_BY_CATEGORY_ENTITY, payload.categoryCode, payload.scope, payload.error);
    this.type = PRODUCT_SEARCH_LOAD_BY_CATEGORY_FAIL;
  }
};
var LOAD_PRODUCT = "[Product] Load Product Data";
var LOAD_PRODUCT_FAIL = "[Product] Load Product Data Fail";
var LOAD_PRODUCT_SUCCESS = "[Product] Load Product Data Success";
var CLEAR_PRODUCT_PRICE = "[Product] Clear Product PRICE";
var LoadProduct = class extends EntityScopedLoaderActions.EntityScopedLoadAction {
  constructor(payload, scope = "") {
    super(PRODUCT_DETAIL_ENTITY, payload, scope);
    this.payload = payload;
    this.type = LOAD_PRODUCT;
  }
};
var LoadProductFail = class extends EntityScopedLoaderActions.EntityScopedFailAction {
  constructor(productCode, payload, scope = "") {
    super(PRODUCT_DETAIL_ENTITY, productCode, scope, payload);
    this.payload = payload;
    this.type = LOAD_PRODUCT_FAIL;
  }
};
var LoadProductSuccess = class extends EntityScopedLoaderActions.EntityScopedSuccessAction {
  constructor(payload, scope = "") {
    super(PRODUCT_DETAIL_ENTITY, payload.code ?? "", scope);
    this.payload = payload;
    this.type = LOAD_PRODUCT_SUCCESS;
  }
};
var ClearProductPrice = class extends EntityScopedLoaderActions.EntityScopedResetAction {
  constructor() {
    super(PRODUCT_DETAIL_ENTITY, void 0, ProductScope.PRICE);
    this.type = CLEAR_PRODUCT_PRICE;
  }
};
var productGroup_actions = Object.freeze({
  __proto__: null,
  CLEAN_PRODUCT_REFERENCES,
  CLEAR_PRODUCT_PRICE,
  CLEAR_PRODUCT_SEARCH_BY_CODE_STATE,
  CLEAR_PRODUCT_SEARCH_RESULT,
  CleanProductReferences,
  ClearProductPrice,
  ClearProductSearchByCodeState,
  ClearProductSearchResult,
  GET_PRODUCT_SUGGESTIONS,
  GET_PRODUCT_SUGGESTIONS_FAIL,
  GET_PRODUCT_SUGGESTIONS_SUCCESS,
  GetProductSuggestions,
  GetProductSuggestionsFail,
  GetProductSuggestionsSuccess,
  LOAD_PRODUCT,
  LOAD_PRODUCT_FAIL,
  LOAD_PRODUCT_REFERENCES,
  LOAD_PRODUCT_REFERENCES_FAIL,
  LOAD_PRODUCT_REFERENCES_SUCCESS,
  LOAD_PRODUCT_REVIEWS,
  LOAD_PRODUCT_REVIEWS_FAIL,
  LOAD_PRODUCT_REVIEWS_SUCCESS,
  LOAD_PRODUCT_SUCCESS,
  LoadProduct,
  LoadProductFail,
  LoadProductReferences,
  LoadProductReferencesFail,
  LoadProductReferencesSuccess,
  LoadProductReviews,
  LoadProductReviewsFail,
  LoadProductReviewsSuccess,
  LoadProductSuccess,
  POST_PRODUCT_REVIEW,
  POST_PRODUCT_REVIEW_FAIL,
  POST_PRODUCT_REVIEW_SUCCESS,
  PRODUCT_SEARCH_LOAD_BY_CATEGORY,
  PRODUCT_SEARCH_LOAD_BY_CATEGORY_FAIL,
  PRODUCT_SEARCH_LOAD_BY_CATEGORY_SUCCESS,
  PRODUCT_SEARCH_LOAD_BY_CODE,
  PRODUCT_SEARCH_LOAD_BY_CODE_FAIL,
  PRODUCT_SEARCH_LOAD_BY_CODE_SUCCESS,
  PostProductReview,
  PostProductReviewFail,
  PostProductReviewSuccess,
  ProductSearchLoadByCategory,
  ProductSearchLoadByCategoryFail,
  ProductSearchLoadByCategorySuccess,
  ProductSearchLoadByCode,
  ProductSearchLoadByCodeFail,
  ProductSearchLoadByCodeSuccess,
  SEARCH_PRODUCTS,
  SEARCH_PRODUCTS_FAIL,
  SEARCH_PRODUCTS_SUCCESS,
  SearchProducts,
  SearchProductsFail,
  SearchProductsSuccess
});
var getProductsState = createFeatureSelector(PRODUCT_FEATURE);
var getProductReferencesState = createSelector(getProductsState, (state) => state.references);
var getSelectedProductReferencesFactory = (productCode, referenceType) => {
  return createSelector(getProductReferencesState, (referenceTypeData) => {
    if (referenceTypeData.productCode === productCode) {
      if (!!referenceTypeData.list) {
        if (referenceType) {
          return referenceTypeData.list.filter((item) => item.referenceType === referenceType);
        }
        return referenceTypeData.list;
      }
    }
    return [];
  });
};
var getProductReviewsState = createSelector(getProductsState, (state) => state.reviews);
var getSelectedProductReviewsFactory = (productCode) => {
  return createSelector(getProductReviewsState, (reviewData) => {
    if (reviewData.productCode === productCode) {
      return reviewData.list;
    }
    return void 0;
  });
};
var initialState$c = {
  results: {},
  suggestions: [],
  auxResults: {}
};
function reducer$c(state = initialState$c, action) {
  switch (action.type) {
    case SEARCH_PRODUCTS_SUCCESS: {
      const results = action.payload;
      const res = action.auxiliary ? {
        auxResults: results
      } : {
        results
      };
      return __spreadValues(__spreadValues({}, state), res);
    }
    case GET_PRODUCT_SUGGESTIONS_SUCCESS: {
      const suggestions = action.payload;
      return __spreadProps(__spreadValues({}, state), {
        suggestions
      });
    }
    case CLEAR_PRODUCT_SEARCH_RESULT: {
      return __spreadProps(__spreadValues({}, state), {
        results: action.payload.clearPageResults ? {} : state.results,
        suggestions: action.payload.clearSearchboxResults ? [] : state.suggestions,
        auxResults: action.payload.clearSearchboxResults ? {} : state.auxResults
      });
    }
  }
  return state;
}
var getSearchResults$1 = (state) => state.results;
var getAuxSearchResults$1 = (state) => state.auxResults;
var getProductSuggestions$1 = (state) => state.suggestions;
var getProductsSearchState = createSelector(getProductsState, (state) => state.search);
var getSearchResults = createSelector(getProductsSearchState, getSearchResults$1);
var getAuxSearchResults = createSelector(getProductsSearchState, getAuxSearchResults$1);
var getProductSuggestions = createSelector(getProductsSearchState, getProductSuggestions$1);
var getProductSearchByCodeState = createSelector(getProductsState, (state) => state.searchByCode);
var getSelectedProductSearchByCodeStateFactory = (payload) => {
  return createSelector(getProductSearchByCodeState, (productSearchByCodeResults) => entityLoaderStateSelector(productSearchByCodeResults, payload.code)[payload.scope] || initialLoaderState);
};
var getProductSearchByCategoryState = createSelector(getProductsState, (state) => state.searchByCategory);
var getSelectedProductSearchByCategoryStateFactory = (payload) => {
  return createSelector(getProductSearchByCategoryState, (productSearchByCategoryResults) => entityLoaderStateSelector(productSearchByCategoryResults, payload.categoryCode)[payload.scope] || initialLoaderState);
};
var getProductState = createSelector(getProductsState, (state) => state.details);
var getSelectedProductStateFactory = (code, scope = "") => {
  return createSelector(getProductState, (details) => entityLoaderStateSelector(details, code)[scope] || initialLoaderState);
};
var getSelectedProductFactory = (code, scope = "") => {
  return createSelector(getSelectedProductStateFactory(code, scope), (productState) => loaderValueSelector(productState));
};
var getSelectedProductLoadingFactory = (code, scope = "") => {
  return createSelector(getSelectedProductStateFactory(code, scope), (productState) => loaderLoadingSelector(productState));
};
var getSelectedProductSuccessFactory = (code, scope = "") => {
  return createSelector(getSelectedProductStateFactory(code, scope), (productState) => loaderSuccessSelector(productState));
};
var getSelectedProductErrorFactory = (code, scope = "") => {
  return createSelector(getSelectedProductStateFactory(code, scope), (productState) => loaderErrorSelector(productState));
};
var getAllProductCodes = createSelector(getProductState, (details) => {
  return Object.keys(details.entities);
});
var productGroup_selectors = Object.freeze({
  __proto__: null,
  getAllProductCodes,
  getAuxSearchResults,
  getProductReferencesState,
  getProductReviewsState,
  getProductSearchByCategoryState,
  getProductSearchByCodeState,
  getProductState,
  getProductSuggestions,
  getProductsSearchState,
  getProductsState,
  getSearchResults,
  getSelectedProductErrorFactory,
  getSelectedProductFactory,
  getSelectedProductLoadingFactory,
  getSelectedProductReferencesFactory,
  getSelectedProductReviewsFactory,
  getSelectedProductSearchByCategoryStateFactory,
  getSelectedProductSearchByCodeStateFactory,
  getSelectedProductStateFactory,
  getSelectedProductSuccessFactory
});
var ProductSearchService = class _ProductSearchService {
  constructor(store) {
    this.store = store;
  }
  search(query, searchConfig) {
    if (query) {
      this.store.dispatch(new SearchProducts({
        queryText: query,
        searchConfig
      }));
    }
  }
  getResults() {
    return this.store.pipe(select(getSearchResults));
  }
  clearResults() {
    this.store.dispatch(new ClearProductSearchResult({
      clearPageResults: true
    }));
  }
  static {
    this.ɵfac = function ProductSearchService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductSearchService)(ɵɵinject(Store));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductSearchService,
      factory: _ProductSearchService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductSearchService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }], null);
})();
var ProductEventBuilder = class _ProductEventBuilder {
  constructor(eventService, productSearchService) {
    this.eventService = eventService;
    this.productSearchService = productSearchService;
    this.register();
  }
  register() {
    this.eventService.register(FacetChangedEvent, this.buildFacetChangedEvent());
  }
  /**
   * To get the changed facet, we need to compare the product search results
   * got before and after toggling the facet value. These 2 product searches must
   * have the same search queries except one different solr filter term. That means
   * these 2 searches must have the same 'freeTextSearch'; and if they are category
   * searches, they must have the same root (in the same category or brand).
   */
  buildFacetChangedEvent() {
    return this.productSearchService.getResults().pipe(pairwise(), filter(([prev, curr]) => this.compareSearchResults(prev, curr)), map(([prev, curr]) => {
      const toggled = this.getToggledBreadcrumb(curr.breadcrumbs, prev.breadcrumbs) || this.getToggledBreadcrumb(prev.breadcrumbs, curr.breadcrumbs);
      if (toggled) {
        return createFrom(FacetChangedEvent, {
          code: toggled.facetCode,
          name: toggled.facetName,
          valueCode: toggled.facetValueCode,
          valueName: toggled.facetValueName,
          selected: curr.breadcrumbs && prev.breadcrumbs && curr.breadcrumbs.length > prev.breadcrumbs.length
        });
      }
    }));
  }
  /**
   * The 2 product searches (before and after facet changed) must have the same
   * search queries; and if they are category searches, they also must have the
   * same root (in the same category or brand).
   */
  compareSearchResults(prev, curr) {
    if (prev && Object.keys(prev).length !== 0) {
      const sameFreeTextSearch = prev.freeTextSearch !== "" && prev.freeTextSearch === curr.freeTextSearch;
      const sameCategoryRoot = curr.breadcrumbs?.[0]?.facetCode === "allCategories" && prev.breadcrumbs?.[0]?.facetCode === curr.breadcrumbs[0]?.facetCode && // same category or brand
      prev.breadcrumbs[0].facetValueCode === curr.breadcrumbs[0].facetValueCode;
      return sameFreeTextSearch || sameCategoryRoot;
    }
    return false;
  }
  /**
   * Get the toggled breadcrumb. The 2 breadcrumb lists got from the 2 search results
   * only can have one different solr filter term.
   */
  getToggledBreadcrumb(bc1, bc2) {
    if (bc1 && bc2 && bc1.length - bc2.length === 1) {
      return bc1.find((x) => !bc2.find((y) => y.facetCode === x.facetCode && y.facetValueCode === x.facetValueCode));
    }
  }
  static {
    this.ɵfac = function ProductEventBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductEventBuilder)(ɵɵinject(EventService), ɵɵinject(ProductSearchService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductEventBuilder,
      factory: _ProductEventBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductEventBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }, {
    type: ProductSearchService
  }], null);
})();
var ProductEventModule = class _ProductEventModule {
  constructor(_productEventBuilder) {
  }
  static {
    this.ɵfac = function ProductEventModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductEventModule)(ɵɵinject(ProductEventBuilder));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductEventModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductEventModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: ProductEventBuilder
  }], null);
})();
var ProductReferencesEffects = class _ProductReferencesEffects {
  constructor(actions$, productReferencesConnector) {
    this.actions$ = actions$;
    this.productReferencesConnector = productReferencesConnector;
    this.logger = inject(LoggerService);
    this.loadProductReferences$ = createEffect(() => this.actions$.pipe(ofType(LOAD_PRODUCT_REFERENCES), map((action) => action.payload), mergeMap((payload) => {
      return this.productReferencesConnector.get(payload.productCode, payload.referenceType, payload.pageSize).pipe(map((data) => {
        return new LoadProductReferencesSuccess({
          productCode: payload.productCode,
          list: data
        });
      }), catchError((error) => of(new LoadProductReferencesFail(tryNormalizeHttpError(error, this.logger)))));
    })));
  }
  static {
    this.ɵfac = function ProductReferencesEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductReferencesEffects)(ɵɵinject(Actions), ɵɵinject(ProductReferencesConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductReferencesEffects,
      factory: _ProductReferencesEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductReferencesEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: ProductReferencesConnector
  }], null);
})();
var ProductReviewsEffects = class _ProductReviewsEffects {
  constructor(actions$, productReviewsConnector, globalMessageService) {
    this.actions$ = actions$;
    this.productReviewsConnector = productReviewsConnector;
    this.globalMessageService = globalMessageService;
    this.logger = inject(LoggerService);
    this.loadProductReviews$ = createEffect(() => this.actions$.pipe(ofType(LOAD_PRODUCT_REVIEWS), map((action) => action.payload), mergeMap((productCode) => {
      return this.productReviewsConnector.get(productCode).pipe(map((data) => {
        return new LoadProductReviewsSuccess({
          productCode,
          list: data
        });
      }), catchError((error) => of(new LoadProductReviewsFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.postProductReview = createEffect(() => this.actions$.pipe(ofType(POST_PRODUCT_REVIEW), map((action) => action.payload), mergeMap((payload) => {
      return this.productReviewsConnector.add(payload.productCode, payload.review).pipe(map((reviewResponse) => {
        return new PostProductReviewSuccess(reviewResponse);
      }), catchError((error) => of(new PostProductReviewFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.showGlobalMessageOnPostProductReviewSuccess$ = createEffect(() => this.actions$.pipe(ofType(POST_PRODUCT_REVIEW_SUCCESS), tap(() => {
      this.globalMessageService.add({
        key: "productReview.thankYouForReview"
      }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    })), {
      dispatch: false
    });
    this.showGlobalMessageOnPostProductReviewFail$ = createEffect(() => this.actions$.pipe(ofType(POST_PRODUCT_REVIEW_FAIL), tap(() => {
      this.globalMessageService.add({
        key: "productReview.postReviewFail"
      }, GlobalMessageType.MSG_TYPE_ERROR);
    })), {
      dispatch: false
    });
  }
  static {
    this.ɵfac = function ProductReviewsEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductReviewsEffects)(ɵɵinject(Actions), ɵɵinject(ProductReviewsConnector), ɵɵinject(GlobalMessageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductReviewsEffects,
      factory: _ProductReviewsEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductReviewsEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: ProductReviewsConnector
  }, {
    type: GlobalMessageService
  }], null);
})();
var ProductsSearchEffects = class _ProductsSearchEffects {
  constructor(actions$, productSearchConnector) {
    this.actions$ = actions$;
    this.productSearchConnector = productSearchConnector;
    this.logger = inject(LoggerService);
    this.globalMessageService = inject(GlobalMessageService);
    this.searchProducts$ = createEffect(() => this.actions$.pipe(ofType(SEARCH_PRODUCTS), groupBy((action) => action.auxiliary), mergeMap((group) => group.pipe(switchMap((action) => {
      return this.productSearchConnector.search(action.payload.queryText, action.payload.searchConfig).pipe(map((data) => {
        return new SearchProductsSuccess(data, action.auxiliary);
      }), catchError((error) => {
        const normalizedError = tryNormalizeHttpError(error, this.logger);
        if (normalizedError?.details?.[0].type === "ArrayIndexOutOfBoundsError") {
          this.globalMessageService.add({
            key: "searchBox.queryError"
          }, GlobalMessageType.MSG_TYPE_ERROR);
        }
        return of(new SearchProductsFail(normalizedError, action.auxiliary));
      }));
    })))));
    this.getProductSuggestions$ = createEffect(() => this.actions$.pipe(ofType(GET_PRODUCT_SUGGESTIONS), map((action) => action.payload), switchMap((payload) => {
      return this.productSearchConnector.getSuggestions(payload.term, payload.searchConfig?.pageSize).pipe(map((suggestions) => {
        if (suggestions === void 0) {
          return new GetProductSuggestionsSuccess([]);
        }
        return new GetProductSuggestionsSuccess(suggestions);
      }), catchError((error) => of(new GetProductSuggestionsFail(tryNormalizeHttpError(error, this.logger)))));
    })));
  }
  static {
    this.ɵfac = function ProductsSearchEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductsSearchEffects)(ɵɵinject(Actions), ɵɵinject(ProductSearchConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductsSearchEffects,
      factory: _ProductsSearchEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductsSearchEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: ProductSearchConnector
  }], null);
})();
var ProductEffects = class _ProductEffects {
  productLoadEffect(productLoad) {
    return productLoad.data$?.pipe(map((data) => new LoadProductSuccess(__spreadValues({
      code: productLoad.code
    }, data), productLoad.scope)), catchError((error) => {
      return of(new LoadProductFail(productLoad.code, tryNormalizeHttpError(error, this.logger), productLoad.scope));
    })) ?? of(new LoadProductFail(productLoad.code, new Error("Scoped product data does not exist"), productLoad.scope));
  }
  constructor(actions$, productConnector) {
    this.actions$ = actions$;
    this.productConnector = productConnector;
    this.logger = inject(LoggerService);
    this.contextChange$ = this.actions$.pipe(ofType(CURRENCY_CHANGE, LANGUAGE_CHANGE));
    this.loadProduct$ = createEffect(() => ({
      scheduler,
      debounce = 0
    } = {}) => this.actions$.pipe(
      ofType(LOAD_PRODUCT),
      map((action) => ({
        code: action.payload,
        scope: action.meta.scope
      })),
      // we are grouping all load actions that happens at the same time
      // to optimize loading and pass them all to productConnector.getMany
      bufferDebounceTime(debounce, scheduler),
      mergeMap((products) => merge(...this.productConnector.getMany(products).map((productLoad) => this.productLoadEffect(productLoad)))),
      withdrawOn(this.contextChange$)
    ));
    this.clearProductPrice$ = createEffect(() => this.actions$.pipe(ofType(LOGOUT, LOGIN), map(() => new ClearProductPrice())));
  }
  static {
    this.ɵfac = function ProductEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductEffects)(ɵɵinject(Actions), ɵɵinject(ProductConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductEffects,
      factory: _ProductEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: ProductConnector
  }], null);
})();
var ProductSearchByCodeEffects = class _ProductSearchByCodeEffects {
  constructor() {
    this.logger = inject(LoggerService);
    this.actions$ = inject(Actions);
    this.productSearchConnector = inject(ProductSearchConnector);
    this.contextChange$ = this.actions$.pipe(ofType(CURRENCY_CHANGE, LANGUAGE_CHANGE));
    this.searchByCodes$ = createEffect(() => ({
      scheduler,
      debounce = 0
    } = {}) => this.actions$.pipe(
      ofType(PRODUCT_SEARCH_LOAD_BY_CODE),
      // We split streams of actions by scope, so later we will be able
      // to call the Connector once per scope for a group of actions having the same scope.
      groupBy((action) => action.payload.scope),
      mergeMap((group) => {
        const scope = group.key;
        return group.pipe(
          map((action) => action.payload),
          // We are grouping all load actions that happen at the same time
          // to optimize loading and pass them all in a single call to the Connector.
          bufferDebounceTime(debounce, scheduler),
          mergeMap((payloads) => {
            const codes = payloads.map((payload) => payload.code);
            return this.productSearchConnector.searchByCodes(codes, scope).pipe(switchMap((searchResults) => {
              return searchResults.products?.map((product, index) => new ProductSearchLoadByCodeSuccess(__spreadProps(__spreadValues({}, payloads[index]), {
                product
              })));
            }), catchError((error) => {
              return payloads.map((payload) => new ProductSearchLoadByCodeFail(__spreadProps(__spreadValues({}, payload), {
                error: tryNormalizeHttpError(error, this.logger)
              })));
            }));
          })
        );
      }),
      withdrawOn(this.contextChange$)
    ));
    this.clearState$ = createEffect(() => this.actions$.pipe(ofType(LOGOUT, LOGIN), map(() => new ClearProductSearchByCodeState())));
  }
  static {
    this.ɵfac = function ProductSearchByCodeEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductSearchByCodeEffects)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductSearchByCodeEffects,
      factory: _ProductSearchByCodeEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductSearchByCodeEffects, [{
    type: Injectable
  }], null, null);
})();
var ProductSearchByCategoryEffects = class _ProductSearchByCategoryEffects {
  constructor() {
    this.logger = inject(LoggerService);
    this.actions$ = inject(Actions);
    this.productSearchConnector = inject(ProductSearchConnector);
    this.contextChange$ = this.actions$.pipe(ofType(CURRENCY_CHANGE, LANGUAGE_CHANGE));
    this.searchByCategory$ = createEffect(() => ({
      scheduler,
      debounce = 0
    } = {}) => this.actions$.pipe(ofType(PRODUCT_SEARCH_LOAD_BY_CATEGORY), groupBy((action) => action.payload.scope), mergeMap((group) => {
      const scope = group.key;
      return group.pipe(map((action) => action.payload), bufferDebounceTime(debounce, scheduler), mergeMap((payloads) => {
        const categoryCodes = payloads.map((payload) => payload.categoryCode);
        return forkJoin(categoryCodes.map((categoryCode) => this.productSearchConnector.searchByCategory(categoryCode, scope))).pipe(mergeMap((searchResults, _index) => {
          return categoryCodes.map((categoryCode, idx) => {
            const categoryProducts = searchResults[idx]?.products ?? [];
            return new ProductSearchLoadByCategorySuccess({
              categoryCode,
              scope,
              products: categoryProducts
            });
          });
        }), catchError((error) => {
          return payloads.map((payload) => new ProductSearchLoadByCategoryFail(__spreadProps(__spreadValues({}, payload), {
            error: tryNormalizeHttpError(error, this.logger)
          })));
        }));
      }));
    }), withdrawOn(this.contextChange$)));
  }
  static {
    this.ɵfac = function ProductSearchByCategoryEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductSearchByCategoryEffects)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductSearchByCategoryEffects,
      factory: _ProductSearchByCategoryEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductSearchByCategoryEffects, [{
    type: Injectable
  }], null, null);
})();
var effects$1 = [ProductsSearchEffects, ProductSearchByCodeEffects, ProductSearchByCategoryEffects, ProductEffects, ProductReviewsEffects, ProductReferencesEffects];
var initialScopedLoaderState = {};
function scopedLoaderReducer(entityType, reducer2) {
  const loader = loaderReducer(entityType, reducer2);
  return (state = initialScopedLoaderState, action) => {
    if (action && action.meta && action.meta.entityType === entityType) {
      return __spreadProps(__spreadValues({}, state), {
        [action.meta.scope ?? ""]: loader(state[action.meta.scope ?? ""], action)
      });
    }
    return state;
  };
}
function entityScopedLoaderReducer(entityType, reducer2) {
  return entityReducer(entityType, scopedLoaderReducer(entityType, reducer2));
}
var initialState$b = {
  productCode: "",
  list: []
};
function reducer$b(state = initialState$b, action) {
  switch (action.type) {
    case LOAD_PRODUCT_REFERENCES_SUCCESS: {
      const productCode = action.payload.productCode;
      const list = action.payload.list;
      return __spreadProps(__spreadValues({}, state), {
        list: [...state.list, ...list ? list : []].reduce((productReferences, productReference) => {
          if (!productReferences.some((obj) => obj.referenceType === productReference.referenceType && obj.target?.code === productReference.target?.code)) {
            productReferences.push(productReference);
          }
          return productReferences;
        }, []),
        productCode
      });
    }
    case CLEAN_PRODUCT_REFERENCES: {
      return initialState$b;
    }
  }
  return state;
}
var initialState$a = {
  productCode: "",
  list: []
};
function reducer$a(state = initialState$a, action) {
  switch (action.type) {
    case LOAD_PRODUCT_REVIEWS_SUCCESS: {
      const productCode = action.payload.productCode;
      const list = action.payload.list;
      return __spreadProps(__spreadValues({}, state), {
        productCode,
        list
      });
    }
  }
  return state;
}
function getReducers$1() {
  return {
    search: reducer$c,
    searchByCode: entityScopedLoaderReducer(PRODUCT_SEARCH_RESULTS_BY_CODES_ENTITY),
    searchByCategory: entityScopedLoaderReducer(PRODUCT_SEARCH_RESULTS_BY_CATEGORY_ENTITY),
    details: entityScopedLoaderReducer(PRODUCT_DETAIL_ENTITY),
    reviews: reducer$a,
    references: reducer$b
  };
}
var reducerToken$1 = new InjectionToken("ProductReducers");
var reducerProvider$1 = {
  provide: reducerToken$1,
  useFactory: getReducers$1
};
function clearProductsState(reducer2) {
  return function(state, action) {
    if (action.type === CURRENCY_CHANGE || action.type === LANGUAGE_CHANGE) {
      state = void 0;
    }
    return reducer2(state, action);
  };
}
var metaReducers$1 = [clearProductsState];
var ProductReferenceService = class _ProductReferenceService {
  constructor(store) {
    this.store = store;
  }
  loadProductReferences(productCode, referenceType, pageSize) {
    this.store.dispatch(new LoadProductReferences({
      productCode,
      referenceType,
      pageSize
    }));
  }
  getProductReferences(productCode, referenceType) {
    return this.store.pipe(select(getSelectedProductReferencesFactory(productCode, referenceType)));
  }
  cleanReferences() {
    this.store.dispatch(new CleanProductReferences());
  }
  static {
    this.ɵfac = function ProductReferenceService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductReferenceService)(ɵɵinject(Store));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductReferenceService,
      factory: _ProductReferenceService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductReferenceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }], null);
})();
var ProductReviewService = class _ProductReviewService {
  constructor(store) {
    this.store = store;
  }
  getByProductCode(productCode) {
    return this.store.pipe(select(getSelectedProductReviewsFactory(productCode)), tap((reviews) => {
      if (reviews === void 0 && productCode !== void 0) {
        this.store.dispatch(new LoadProductReviews(productCode));
      }
    }), map((reviews) => reviews ?? []));
  }
  add(productCode, review) {
    this.store.dispatch(new PostProductReview({
      productCode,
      review
    }));
  }
  static {
    this.ɵfac = function ProductReviewService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductReviewService)(ɵɵinject(Store));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductReviewService,
      factory: _ProductReviewService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductReviewService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }], null);
})();
var ProductSearchByCodeService = class _ProductSearchByCodeService {
  constructor() {
    this.store = inject(Store);
  }
  load({
    code,
    scope
  }) {
    this.store.dispatch(new ProductSearchLoadByCode({
      code,
      scope: scope ?? ""
    }));
  }
  get({
    code,
    scope
  }) {
    const state$ = this.store.pipe(select(getSelectedProductSearchByCodeStateFactory({
      code,
      scope: scope ?? ""
    })));
    const loading$ = state$.pipe(auditTime(0), tap((state) => {
      if (!(state.loading || state.success || state.error)) {
        this.load({
          code,
          scope
        });
      }
    }));
    const value$ = state$.pipe(map((state) => state.value));
    return using(() => loading$.subscribe(), () => value$);
  }
  static {
    this.ɵfac = function ProductSearchByCodeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductSearchByCodeService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductSearchByCodeService,
      factory: _ProductSearchByCodeService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductSearchByCodeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ProductSearchByCategoryService = class _ProductSearchByCategoryService {
  constructor() {
    this.store = inject(Store);
  }
  load({
    categoryCode,
    scope
  }) {
    this.store.dispatch(new ProductSearchLoadByCategory({
      categoryCode,
      scope: scope ?? ""
    }));
  }
  get({
    categoryCode,
    scope
  }) {
    const state$ = this.store.pipe(select(getSelectedProductSearchByCategoryStateFactory({
      categoryCode,
      scope: scope ?? ""
    })));
    const loading$ = state$.pipe(auditTime(0), tap((state) => {
      if (!(state.loading || state.success || state.error)) {
        this.load({
          categoryCode,
          scope
        });
      }
    }));
    const value$ = state$.pipe(map((state) => state.value));
    return using(() => loading$.subscribe(), () => value$);
  }
  static {
    this.ɵfac = function ProductSearchByCategoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductSearchByCategoryService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductSearchByCategoryService,
      factory: _ProductSearchByCategoryService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductSearchByCategoryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ProductLoadingService = class _ProductLoadingService {
  constructor(store, loadingScopes, actions$, platformId, eventService) {
    this.store = store;
    this.loadingScopes = loadingScopes;
    this.actions$ = actions$;
    this.platformId = platformId;
    this.eventService = eventService;
    this.products = {};
  }
  get(productCode, scopes) {
    isKeyInvalid(productCode);
    scopes = this.loadingScopes.expand("product", scopes);
    this.initProductScopes(productCode, scopes);
    return this.products[productCode][this.getScopesIndex(scopes)];
  }
  initProductScopes(productCode, scopes) {
    isKeyInvalid(productCode);
    if (!this.products[productCode]) {
      this.products[productCode] = {};
    }
    for (const scope of scopes) {
      if (!this.products[productCode][scope]) {
        this.products[productCode][scope] = this.getProductForScope(productCode, scope);
      }
    }
    if (scopes.length > 1) {
      this.products[productCode][this.getScopesIndex(scopes)] = uniteLatest(scopes.map((scope) => this.products[productCode][scope])).pipe(map((productParts) => productParts.every(Boolean) ? deepMerge({}, ...productParts) : void 0), distinctUntilChanged());
    }
  }
  getScopesIndex(scopes) {
    return scopes.join("ɵ");
  }
  /**
   * Creates observable for providing specified product data for the scope
   *
   * @param productCode
   * @param scope
   */
  getProductForScope(productCode, scope) {
    const shouldLoad$ = this.store.pipe(select(getSelectedProductStateFactory(productCode, scope)), map((productState) => !productState.loading && !productState.success && !productState.error), distinctUntilChanged(), filter((x) => x));
    const isLoading$ = this.store.pipe(select(getSelectedProductLoadingFactory(productCode, scope)));
    const productLoadLogic$ = merge(shouldLoad$, ...this.getProductReloadTriggers(productCode, scope)).pipe(debounceTime(0), withLatestFrom(isLoading$), tap(([, isLoading]) => {
      if (!isLoading) {
        this.store.dispatch(new LoadProduct(productCode, scope));
      }
    }));
    const productData$ = this.store.pipe(select(getSelectedProductFactory(productCode, scope)));
    return using(() => productLoadLogic$.subscribe(), () => productData$).pipe(shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  /**
   * Returns reload triggers for product per scope
   *
   * @param productCode
   * @param scope
   */
  getProductReloadTriggers(productCode, scope) {
    const triggers = [];
    const maxAge = this.loadingScopes.getMaxAge("product", scope);
    if (maxAge && isPlatformBrowser(this.platformId)) {
      const loadFinish$ = this.actions$.pipe(ofType(LOAD_PRODUCT_SUCCESS, LOAD_PRODUCT_FAIL), filter((action) => action.meta.entityId === productCode && action.meta.scope === scope));
      const loadStart$ = this.actions$.pipe(ofType(LOAD_PRODUCT), filter((action) => action.payload === productCode && action.meta.scope === scope));
      triggers.push(this.getMaxAgeTrigger(loadStart$, loadFinish$, maxAge));
    }
    const reloadTriggers$ = this.loadingScopes.getReloadTriggers("product", scope).map((e) => this.eventService.get(e));
    return triggers.concat(reloadTriggers$);
  }
  /**
   * Generic method that returns stream triggering reload by maxAge
   *
   * Could be refactored to separate service in future to use in other
   * max age reload implementations
   *
   * @param loadStart$ Stream that emits on load start
   * @param loadFinish$ Stream that emits on load finish
   * @param maxAge max age
   */
  getMaxAgeTrigger(loadStart$, loadFinish$, maxAge, scheduler) {
    let timestamp = 0;
    const now = () => scheduler ? scheduler.now() : Date.now();
    const timestamp$ = loadFinish$.pipe(tap(() => timestamp = now()));
    const shouldReload$ = defer(() => {
      const age = now() - timestamp;
      const timestampRefresh$ = timestamp$.pipe(delay(maxAge, scheduler), map(() => true), withdrawOn(loadStart$));
      if (age > maxAge) {
        return merge(of(true), timestampRefresh$);
      } else if (age === 0) {
        return timestampRefresh$;
      } else {
        return merge(of(true).pipe(delay(maxAge - age, scheduler)), timestampRefresh$);
      }
    });
    return shouldReload$;
  }
  static {
    this.ɵfac = function ProductLoadingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductLoadingService)(ɵɵinject(Store), ɵɵinject(LoadingScopesService), ɵɵinject(Actions), ɵɵinject(PLATFORM_ID), ɵɵinject(EventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductLoadingService,
      factory: _ProductLoadingService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductLoadingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: LoadingScopesService
  }, {
    type: Actions
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: EventService
  }], null);
})();
var ProductService = class _ProductService {
  constructor(store, productLoading) {
    this.store = store;
    this.productLoading = productLoading;
  }
  /**
   * Returns the product observable. The product will be loaded
   * whenever there's no value observed.
   *
   * The underlying product loader ensures that the product is
   * only loaded once, even in case of parallel observers.
   *
   * You should provide product data scope you are interested in to not load all
   * the data if not needed. You can provide more than one scope.
   *
   * @param productCode Product code to load
   * @param scopes Scope or scopes of the product data
   */
  get(productCode, scopes = DEFAULT_SCOPE) {
    return productCode ? this.productLoading.get(productCode, [].concat(scopes)) : of(void 0);
  }
  /**
   * Returns boolean observable for product's loading state
   */
  isLoading(productCode, scope = "") {
    return this.store.pipe(select(getSelectedProductLoadingFactory(productCode, scope)));
  }
  /**
   * Returns boolean observable for product's load success state
   */
  isSuccess(productCode, scope = "") {
    return this.store.pipe(select(getSelectedProductSuccessFactory(productCode, scope)));
  }
  /**
   * Returns boolean observable for product's load error state
   */
  hasError(productCode, scope = "") {
    return this.store.pipe(select(getSelectedProductErrorFactory(productCode, scope)));
  }
  static {
    this.ɵfac = function ProductService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductService)(ɵɵinject(Store), ɵɵinject(ProductLoadingService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductService,
      factory: _ProductService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: ProductLoadingService
  }], null);
})();
var SearchboxService = class _SearchboxService extends ProductSearchService {
  constructor() {
    super(...arguments);
    this.actionsSubject = inject(ActionsSubject);
  }
  /**
   * dispatch the search for the search box
   */
  search(query, searchConfig) {
    this.store.dispatch(new SearchProducts({
      queryText: query,
      searchConfig
    }, true));
  }
  /**
   * Performs search and returns an Observable that emits when the search is completed
   */
  searchWithCompletion(query, searchConfig) {
    this.search(query, searchConfig);
    return this.actionsSubject.pipe(filter((action) => action.type === SEARCH_PRODUCTS_SUCCESS || action.type === SEARCH_PRODUCTS_FAIL), take(1));
  }
  getResults() {
    return this.store.pipe(select(getAuxSearchResults));
  }
  /**
   * clears the products and suggestions
   */
  clearResults() {
    this.store.dispatch(new ClearProductSearchResult({
      clearSearchboxResults: true
    }));
  }
  getSuggestionResults() {
    return this.store.pipe(select(getProductSuggestions));
  }
  searchSuggestions(query, searchConfig) {
    this.store.dispatch(new GetProductSuggestions({
      term: query,
      searchConfig
    }));
  }
  /**
   * Performs suggestions search and returns an Observable that emits when the operation is completed
   */
  searchSuggestionsWithCompletion(query, searchConfig) {
    this.searchSuggestions(query, searchConfig);
    return this.actionsSubject.pipe(filter((action) => action.type === GET_PRODUCT_SUGGESTIONS_SUCCESS || action.type === GET_PRODUCT_SUGGESTIONS_FAIL), take(1));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵSearchboxService_BaseFactory;
      return function SearchboxService_Factory(__ngFactoryType__) {
        return (ɵSearchboxService_BaseFactory || (ɵSearchboxService_BaseFactory = ɵɵgetInheritedFactory(_SearchboxService)))(__ngFactoryType__ || _SearchboxService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SearchboxService,
      factory: _SearchboxService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchboxService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ProductAvailabilityService = class _ProductAvailabilityService {
  constructor() {
    this.connector = inject(ProductAvailabilityConnector);
    this.command = inject(CommandService);
    this.getRealTimeStockCommand = this.command.create((payload) => this.connector.getRealTimeStock(payload.productCode, payload.unitSapCode), {
      strategy: CommandStrategy.CancelPrevious
    });
  }
  /**
   * Executes the command to fetch real-time stock data.
   *
   * @param productCode The product code for which to fetch stock data.
   * @param unitSapCode The SAP code associated with the product.
   * @returns An observable of `ProductAvailabilities`.
   */
  getRealTimeStock(productCode, unitSapCode) {
    return this.getRealTimeStockCommand.execute({
      productCode,
      unitSapCode
    });
  }
  static {
    this.ɵfac = function ProductAvailabilityService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductAvailabilityService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductAvailabilityService,
      factory: _ProductAvailabilityService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductAvailabilityService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CategoryPageMetaResolver = class _CategoryPageMetaResolver extends PageMetaResolver {
  constructor(productSearchService, cms, translation, basePageMetaResolver) {
    super();
    this.productSearchService = productSearchService;
    this.cms = cms;
    this.translation = translation;
    this.basePageMetaResolver = basePageMetaResolver;
    this.searchPage$ = this.cms.getCurrentPage().pipe(filter((page) => Boolean(page)), switchMap((page) => (
      // only the existence of a plp component tells us if products
      // are rendered or if this is an ordinary content page
      this.hasProductListComponent(page) ? this.productSearchService.getResults().pipe(filter((result) => Boolean(result))) : of(page)
    )));
    this.pageType = PageType.CATEGORY_PAGE;
  }
  resolveTitle() {
    return this.searchPage$.pipe(filter((page) => !!page.pagination), switchMap((p) => this.translation.translate("pageMetaResolver.category.title", {
      count: p.pagination?.totalResults,
      query: p.breadcrumbs?.length ? p.breadcrumbs[0].facetValueName : void 0
    })));
  }
  resolveBreadcrumbs() {
    return combineLatest([this.searchPage$.pipe(), this.translation.translate("common.home")]).pipe(map(([page, label]) => page.breadcrumbs ? this.resolveBreadcrumbData(page, label) : []));
  }
  resolveBreadcrumbData(page, label) {
    const breadcrumbs = [];
    breadcrumbs.push({
      label,
      link: "/"
    });
    for (const br of page.breadcrumbs ?? []) {
      if (br.facetValueName) {
        if (br.facetCode === "category" || br.facetCode === "allCategories") {
          breadcrumbs.push({
            label: br.facetValueName,
            link: `/c/${br.facetValueCode}`
          });
        }
        if (br.facetCode === "brand") {
          breadcrumbs.push({
            label: br.facetValueName,
            link: `/Brands/${br.facetValueName}/c/${br.facetValueCode}`
          });
        }
      }
    }
    return breadcrumbs;
  }
  hasProductListComponent(page) {
    return !!Object.keys(page.slots || {}).find((key) => !!page.slots?.[key].components?.find((comp) => comp.typeCode === "CMSProductListComponent" || comp.typeCode === "ProductGridComponent"));
  }
  resolveRobots() {
    return this.basePageMetaResolver.resolveRobots();
  }
  /**
   * Resolves the canonical url for the category listing page.
   *
   * The default options will be used to resolve the url, which means that
   * all query parameters are removed and https and www are added explicitly.
   */
  resolveCanonicalUrl() {
    return this.basePageMetaResolver.resolveCanonicalUrl();
  }
  static {
    this.ɵfac = function CategoryPageMetaResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CategoryPageMetaResolver)(ɵɵinject(ProductSearchService), ɵɵinject(CmsService), ɵɵinject(TranslationService), ɵɵinject(BasePageMetaResolver));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CategoryPageMetaResolver,
      factory: _CategoryPageMetaResolver.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryPageMetaResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProductSearchService
  }, {
    type: CmsService
  }, {
    type: TranslationService
  }, {
    type: BasePageMetaResolver
  }], null);
})();
var CouponSearchPageResolver = class _CouponSearchPageResolver extends PageMetaResolver {
  constructor(productSearchService, translation, authService, route, semanticPathService) {
    super();
    this.productSearchService = productSearchService;
    this.translation = translation;
    this.authService = authService;
    this.route = route;
    this.semanticPathService = semanticPathService;
    this.total$ = this.productSearchService.getResults().pipe(filter((data) => !!data?.pagination), map((results) => results.pagination?.totalResults ?? 0));
    this.pageType = PageType.CONTENT_PAGE;
    this.pageTemplate = "SearchResultsListPageTemplate";
  }
  resolveBreadcrumbs() {
    return combineLatest([this.translation.translate("common.home"), this.translation.translate("myCoupons.myCoupons"), this.authService.isUserLoggedIn()]).pipe(map(([homeLabel, couponLabel, isLoggedIn]) => {
      const breadcrumbs = [];
      breadcrumbs.push({
        label: homeLabel,
        link: "/"
      });
      if (isLoggedIn) {
        breadcrumbs.push({
          label: couponLabel,
          link: this.semanticPathService.transform({
            cxRoute: "coupons"
          })
        });
      }
      return breadcrumbs;
    }));
  }
  resolveTitle() {
    return this.total$.pipe(switchMap((total) => this.translation.translate("pageMetaResolver.search.findProductTitle", {
      count: total,
      coupon: this.couponCode
    })));
  }
  getScore(page) {
    return super.getScore(page) + (this.couponCode ? 1 : -1);
  }
  get couponCode() {
    return this.route.snapshot?.queryParams?.couponcode;
  }
  static {
    this.ɵfac = function CouponSearchPageResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CouponSearchPageResolver)(ɵɵinject(ProductSearchService), ɵɵinject(TranslationService), ɵɵinject(AuthService), ɵɵinject(ActivatedRoute), ɵɵinject(SemanticPathService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CouponSearchPageResolver,
      factory: _CouponSearchPageResolver.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CouponSearchPageResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProductSearchService
  }, {
    type: TranslationService
  }, {
    type: AuthService
  }, {
    type: ActivatedRoute
  }, {
    type: SemanticPathService
  }], null);
})();
var ProductPageMetaResolver = class _ProductPageMetaResolver extends PageMetaResolver {
  constructor(routingService, productService, translation, basePageMetaResolver, pageLinkService) {
    super();
    this.routingService = routingService;
    this.productService = productService;
    this.translation = translation;
    this.basePageMetaResolver = basePageMetaResolver;
    this.pageLinkService = pageLinkService;
    this.product$ = this.routingService.getRouterState().pipe(map((state) => state.state.params["productCode"]), filter((code) => !!code), switchMap((code) => this.productService.get(code, ProductScope.DETAILS)), filter(isNotUndefined));
    this.pageType = PageType.PRODUCT_PAGE;
  }
  /**
   * Resolves the page heading for the Product Detail Page.
   * The page heading is used in the UI (`<h1>`), where as the page
   * title is used by the browser and crawlers.
   */
  resolveHeading() {
    return this.product$.pipe(switchMap((p) => this.translation.translate("pageMetaResolver.product.heading", {
      heading: p.name
    })));
  }
  /**
   * Resolves the page title for the Product Detail Page. The page title
   * is resolved with the product name, the first category and the manufacturer.
   * The page title used by the browser (history, tabs) and crawlers.
   */
  resolveTitle() {
    return this.product$.pipe(switchMap((product) => {
      let title = product.name;
      title += this.resolveFirstCategory(product);
      title += this.resolveManufacturer(product);
      return this.translation.translate("pageMetaResolver.product.title", {
        title
      });
    }));
  }
  /**
   * Resolves the page description for the Product Detail Page. The description
   * is based on the `product.summary`.
   */
  resolveDescription() {
    return this.product$.pipe(switchMap((product) => this.translation.translate("pageMetaResolver.product.description", {
      description: product.summary
    })));
  }
  /**
   * Resolves breadcrumbs for the Product Detail Page. The breadcrumbs are driven by
   * a static home page crumb and a crumb for each category.
   */
  resolveBreadcrumbs() {
    return combineLatest([this.product$.pipe(), this.translation.translate("common.home")]).pipe(map(([product, label]) => {
      const breadcrumbs = [];
      breadcrumbs.push({
        label,
        link: "/"
      });
      for (const {
        name,
        code,
        url
      } of product.categories || []) {
        breadcrumbs.push({
          label: name || code,
          link: url
        });
      }
      return breadcrumbs;
    }));
  }
  /**
   * Resolves the main page image for the Product Detail Page. The product image
   * is based on the PRIMARY product image. The zoom format is used by default.
   */
  resolveImage() {
    return this.product$.pipe(map((product) => product.images?.PRIMARY?.zoom?.url ?? null));
  }
  resolveFirstCategory(product) {
    const firstCategory = product?.categories?.[0];
    return firstCategory ? ` | ${firstCategory.name || firstCategory.code}` : "";
  }
  resolveManufacturer(product) {
    return product.manufacturer ? ` | ${product.manufacturer}` : "";
  }
  resolveRobots() {
    return this.basePageMetaResolver.resolveRobots();
  }
  /**
   * Resolves the canonical url for the product page using the default canonical url
   * configuration.
   *
   * In case of a variant product, the baseProduct code is used to resolve the url. It's important
   * to know that this has a few limitations:
   * - We're not always able to get the super baseProduct, in case of multi-level variants.
   *   OCC only exposes the direct baseProduct, which might still not resolve in the correct
   *   canonical URL. This is business driven and subject to change in a customization.
   * - The url resolved for the variant doesn't contain any content other then the product code.
   *   This means that we do not provide any product data to resolve pretty URLs (for example
   *   the product title).
   */
  resolveCanonicalUrl() {
    return this.product$.pipe(switchMap((product) => this.findBaseProduct(product)), map((product) => {
      const url = this.routingService.getFullUrl({
        cxRoute: "product",
        params: product
      });
      return this.pageLinkService.getCanonicalUrl({}, url);
    }));
  }
  /**
   * Resolves the base product whenever the given product is a variant product.
   *
   * Since product variants can be multi-layered, we recursively try to find the base product
   * this might be too opinionated for your business though.
   */
  findBaseProduct(product) {
    if (product?.baseProduct) {
      return this.productService.get(product.baseProduct, ProductScope.LIST).pipe(filter(isNotUndefined), switchMap((baseProduct) => this.findBaseProduct(baseProduct)));
    }
    return of(product);
  }
  static {
    this.ɵfac = function ProductPageMetaResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductPageMetaResolver)(ɵɵinject(RoutingService), ɵɵinject(ProductService), ɵɵinject(TranslationService), ɵɵinject(BasePageMetaResolver), ɵɵinject(PageLinkService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductPageMetaResolver,
      factory: _ProductPageMetaResolver.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductPageMetaResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: ProductService
  }, {
    type: TranslationService
  }, {
    type: BasePageMetaResolver
  }, {
    type: PageLinkService
  }], null);
})();
var SearchPageMetaResolver = class _SearchPageMetaResolver extends PageMetaResolver {
  constructor(routingService, productSearchService, translation, basePageMetaResolver) {
    super();
    this.routingService = routingService;
    this.productSearchService = productSearchService;
    this.translation = translation;
    this.basePageMetaResolver = basePageMetaResolver;
    this.total$ = this.productSearchService.getResults().pipe(filter((data) => !!data?.pagination), map((results) => results.pagination?.totalResults));
    this.query$ = this.routingService.getRouterState().pipe(map((state) => state.state.params["query"]));
    this.pageType = PageType.CONTENT_PAGE;
    this.pageTemplate = "SearchResultsListPageTemplate";
  }
  resolveTitle() {
    const sources = [this.total$, this.query$];
    return combineLatest(sources).pipe(switchMap(([count, query]) => this.translation.translate("pageMetaResolver.search.default_title").pipe(mergeMap((defaultQuery) => this.translation.translate("pageMetaResolver.search.title", {
      count,
      query: query || defaultQuery
    })))));
  }
  resolveRobots() {
    return this.basePageMetaResolver.resolveRobots();
  }
  /**
   * Resolves the canonical page for the search page.
   *
   * The default options will be used to resolve the url, which means that
   * the all query parameters are removed and https and www are added explicitly.
   */
  resolveCanonicalUrl() {
    return this.basePageMetaResolver.resolveCanonicalUrl();
  }
  static {
    this.ɵfac = function SearchPageMetaResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchPageMetaResolver)(ɵɵinject(RoutingService), ɵɵinject(ProductSearchService), ɵɵinject(TranslationService), ɵɵinject(BasePageMetaResolver));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SearchPageMetaResolver,
      factory: _SearchPageMetaResolver.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchPageMetaResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: ProductSearchService
  }, {
    type: TranslationService
  }, {
    type: BasePageMetaResolver
  }], null);
})();
function productStoreConfigFactory() {
  const config = {
    state: {
      ssrTransfer: {
        keys: {
          [PRODUCT_FEATURE]: StateTransferType.TRANSFER_STATE
        }
      }
    }
  };
  return config;
}
var ProductStoreModule = class _ProductStoreModule {
  static {
    this.ɵfac = function ProductStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductStoreModule,
      imports: [CommonModule, StoreFeatureModule, EffectsFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(productStoreConfigFactory), reducerProvider$1],
      imports: [CommonModule, StoreModule.forFeature(PRODUCT_FEATURE, reducerToken$1, {
        metaReducers: metaReducers$1
      }), EffectsModule.forFeature(effects$1)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductStoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, StoreModule.forFeature(PRODUCT_FEATURE, reducerToken$1, {
        metaReducers: metaReducers$1
      }), EffectsModule.forFeature(effects$1)],
      providers: [provideDefaultConfigFactory(productStoreConfigFactory), reducerProvider$1]
    }]
  }], null, null);
})();
var pageTitleResolvers = [{
  provide: PageMetaResolver,
  useExisting: ProductPageMetaResolver,
  multi: true
}, {
  provide: PageMetaResolver,
  useExisting: CategoryPageMetaResolver,
  multi: true
}, {
  provide: PageMetaResolver,
  useExisting: SearchPageMetaResolver,
  multi: true
}, {
  provide: PageMetaResolver,
  useExisting: CouponSearchPageResolver,
  multi: true
}];
var ProductModule = class _ProductModule {
  static forRoot() {
    return {
      ngModule: _ProductModule,
      providers: [...pageTitleResolvers]
    };
  }
  static {
    this.ɵfac = function ProductModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductModule,
      imports: [ProductStoreModule, ProductEventModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ProductStoreModule, ProductEventModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductModule, [{
    type: NgModule,
    args: [{
      imports: [ProductStoreModule, ProductEventModule]
    }]
  }], null, null);
})();
var UserAddressConnector = class _UserAddressConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  getAll(userId) {
    return this.adapter.loadAll(userId);
  }
  add(userId, address) {
    return this.adapter.add(userId, address);
  }
  update(userId, addressId, address) {
    return this.adapter.update(userId, addressId, address);
  }
  verify(userId, address) {
    return this.adapter.verify(userId, address);
  }
  delete(userId, addressId) {
    return this.adapter.delete(userId, addressId);
  }
  static {
    this.ɵfac = function UserAddressConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAddressConnector)(ɵɵinject(UserAddressAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserAddressConnector,
      factory: _UserAddressConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAddressConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UserAddressAdapter
  }], null);
})();
var UserConsentConnector = class _UserConsentConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  loadConsents(userId) {
    return this.adapter.loadConsents(userId);
  }
  giveConsent(userId, consentTemplateId, consentTemplateVersion) {
    return this.adapter.giveConsent(userId, consentTemplateId, consentTemplateVersion);
  }
  withdrawConsent(userId, consentCode, consentId) {
    return this.adapter.withdrawConsent(userId, consentCode, consentId);
  }
  static {
    this.ɵfac = function UserConsentConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserConsentConnector)(ɵɵinject(UserConsentAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserConsentConnector,
      factory: _UserConsentConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserConsentConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UserConsentAdapter
  }], null);
})();
var UserCostCenterConnector = class _UserCostCenterConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  getActiveList(userId) {
    return this.adapter.loadActiveList(userId);
  }
  static {
    this.ɵfac = function UserCostCenterConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserCostCenterConnector)(ɵɵinject(UserCostCenterAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserCostCenterConnector,
      factory: _UserCostCenterConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserCostCenterConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UserCostCenterAdapter
  }], null);
})();
var CustomerCouponConnector = class _CustomerCouponConnector {
  constructor(adapter) {
    this.adapter = adapter;
    this.featureConfigService = inject(FeatureConfigService);
  }
  getCustomerCoupons(userId, pageSize, currentPage, sort) {
    return this.adapter.getCustomerCoupons(userId, pageSize, currentPage, sort);
  }
  turnOnNotification(userId, couponCode) {
    return this.adapter.turnOnNotification(userId, couponCode);
  }
  turnOffNotification(userId, couponCode) {
    return this.adapter.turnOffNotification(userId, couponCode);
  }
  claimCustomerCoupon(userId, couponCode) {
    if (this.featureConfigService.isEnabled("enableClaimCustomerCouponWithCodeInRequestBody")) {
      return this.adapter.claimCustomerCouponWithCodeInBody(userId, couponCode);
    } else {
      return this.adapter.claimCustomerCoupon(userId, couponCode);
    }
  }
  disclaimCustomerCoupon(userId, couponCode) {
    return this.adapter.disclaimCustomerCoupon(userId, couponCode);
  }
  static {
    this.ɵfac = function CustomerCouponConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerCouponConnector)(ɵɵinject(CustomerCouponAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CustomerCouponConnector,
      factory: _CustomerCouponConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerCouponConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CustomerCouponAdapter
  }], null);
})();
var UserInterestsConnector = class _UserInterestsConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  getInterests(userId, pageSize, currentPage, sort, productCode, notificationType) {
    return this.adapter.getInterests(userId, pageSize, currentPage, sort, productCode, notificationType);
  }
  removeInterest(userId, item) {
    return this.adapter.removeInterest(userId, item);
  }
  addInterest(userId, productCode, notificationType) {
    return this.adapter.addInterest(userId, productCode, notificationType);
  }
  static {
    this.ɵfac = function UserInterestsConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserInterestsConnector)(ɵɵinject(UserInterestsAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserInterestsConnector,
      factory: _UserInterestsConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserInterestsConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UserInterestsAdapter
  }], null);
})();
var UserPaymentConnector = class _UserPaymentConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  getAll(userId) {
    return this.adapter.loadAll(userId);
  }
  delete(userId, paymentMethodID) {
    return this.adapter.delete(userId, paymentMethodID);
  }
  setDefault(userId, paymentMethodID) {
    return this.adapter.setDefault(userId, paymentMethodID);
  }
  static {
    this.ɵfac = function UserPaymentConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserPaymentConnector)(ɵɵinject(UserPaymentAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserPaymentConnector,
      factory: _UserPaymentConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserPaymentConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UserPaymentAdapter
  }], null);
})();
var UserAddressEvent = class extends CxEvent {
};
var UpdateUserAddressEvent = class extends UserAddressEvent {
  static {
    this.type = "UpdateUserAddressEvent";
  }
};
var DeleteUserAddressEvent = class extends UserAddressEvent {
  static {
    this.type = "DeleteUserAddressEvent";
  }
};
var AddUserAddressEvent = class extends UserAddressEvent {
  static {
    this.type = "AddUserAddressEvent";
  }
};
var LoadUserAddressesEvent = class extends UserAddressEvent {
  static {
    this.type = "LoadUserAddressesEvent";
  }
};
var LoadUserPaymentMethodsEvent = class extends UserAddressEvent {
  static {
    this.type = "LoadUserPaymentMethodsEvent";
  }
};
var UserEventBuilder = class _UserEventBuilder {
  constructor(stateEventService) {
    this.stateEventService = stateEventService;
    this.register();
  }
  /**
   * Registers user events
   */
  register() {
    this.updateUserAddressEvent();
    this.deleteUserAddressEvent();
    this.addUserAddressEvent();
  }
  /**
   * Register an address successfully updated event
   */
  updateUserAddressEvent() {
    this.stateEventService.register({
      action: UPDATE_USER_ADDRESS,
      event: UpdateUserAddressEvent
    });
  }
  addUserAddressEvent() {
    this.stateEventService.register({
      action: ADD_USER_ADDRESS,
      event: AddUserAddressEvent
    });
  }
  deleteUserAddressEvent() {
    this.stateEventService.register({
      action: DELETE_USER_ADDRESS,
      event: DeleteUserAddressEvent
    });
  }
  static {
    this.ɵfac = function UserEventBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserEventBuilder)(ɵɵinject(StateEventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserEventBuilder,
      factory: _UserEventBuilder.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserEventBuilder, [{
    type: Injectable
  }], () => [{
    type: StateEventService
  }], null);
})();
var UserEventModule = class _UserEventModule {
  constructor(_userEventBuilder) {
  }
  static {
    this.ɵfac = function UserEventModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserEventModule)(ɵɵinject(UserEventBuilder));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserEventModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserEventModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: UserEventBuilder
  }], null);
})();
var ConsentService = class _ConsentService {
  constructor(anonymousConsentsService, userConsentService) {
    this.anonymousConsentsService = anonymousConsentsService;
    this.userConsentService = userConsentService;
  }
  /**
   * Returns either anonymous consent or registered consent as they are emitted.
   * @param templateCode for which to return either anonymous or registered consent.
   */
  getConsent(templateCode) {
    return merge(this.userConsentService.getConsent(templateCode), this.anonymousConsentsService.getConsent(templateCode));
  }
  /**
   * Checks if the `templateId`'s template has a given consent.
   * The method returns `false` if the consent doesn't exist or if it's withdrawn. Otherwise, `true` is returned.
   *
   * @param templateId of a template which's consent should be checked
   */
  checkConsentGivenByTemplateId(templateId) {
    return this.getConsent(templateId).pipe(map((consent) => {
      if (!consent) {
        return false;
      }
      return this.isAnonymousConsentType(consent) ? this.anonymousConsentsService.isConsentGiven(consent) : this.userConsentService.isConsentGiven(consent);
    }), distinctUntilChanged());
  }
  /**
   * Checks if the `templateId`'s template has a withdrawn consent.
   * The method returns `true` if the consent doesn't exist or if it's withdrawn. Otherwise, `false` is returned.
   *
   * @param templateId of a template which's consent should be checked
   */
  checkConsentWithdrawnByTemplateId(templateId) {
    return this.getConsent(templateId).pipe(map((consent) => {
      if (!consent) {
        return true;
      }
      return this.isAnonymousConsentType(consent) ? this.anonymousConsentsService.isConsentWithdrawn(consent) : this.userConsentService.isConsentWithdrawn(consent);
    }), distinctUntilChanged());
  }
  /**
   *
   * Checks the provided `consent`'s type and delegates to an appropriate method - `anonymousConsentsService.isConsentGiven(consent)` or `this.userConsentService.isConsentGiven`
   *
   * @param consent a consent to check
   */
  isConsentGiven(consent) {
    return this.isAnonymousConsentType(consent) ? this.anonymousConsentsService.isConsentGiven(consent) : this.userConsentService.isConsentGiven(consent);
  }
  /**
   *
   * Checks the provided `consent`'s type and delegates to an appropriate method - `anonymousConsentsService.isConsentWithdrawn(consent)` or `this.userConsentService.isConsentWithdrawn`
   *
   * @param consent a consent to check
   */
  isConsentWithdrawn(consent) {
    return this.isAnonymousConsentType(consent) ? this.anonymousConsentsService.isConsentWithdrawn(consent) : this.userConsentService.isConsentWithdrawn(consent);
  }
  /**
   * Returns `true` if the provided consent is of type `AnonymousConsent`. Otherwise, `false` is returned.
   */
  isAnonymousConsentType(consent) {
    if (!consent) {
      return false;
    }
    return consent.templateCode !== void 0;
  }
  /**
   * Returns `true` if the provided consent is of type `Consent`. Otherwise, `false` is returned.
   */
  isConsentType(consent) {
    if (!consent) {
      return false;
    }
    return consent.code !== void 0;
  }
  static {
    this.ɵfac = function ConsentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsentService)(ɵɵinject(AnonymousConsentsService), ɵɵinject(UserConsentService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConsentService,
      factory: _ConsentService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AnonymousConsentsService
  }, {
    type: UserConsentService
  }], null);
})();
var CustomerCouponService = class _CustomerCouponService {
  constructor(store, userIdService) {
    this.store = store;
    this.userIdService = userIdService;
  }
  /**
   * Retrieves customer's coupons
   * @param pageSize page size
   * @param currentPage current page
   * @param sort sort
   */
  loadCustomerCoupons(pageSize, currentPage, sort) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new LoadCustomerCoupons({
        userId,
        pageSize,
        currentPage,
        sort
      }));
    });
  }
  /**
   * Returns customer coupon search result
   * @param pageSize page size
   */
  getCustomerCoupons(pageSize) {
    return combineLatest([this.store.pipe(select(getCustomerCouponsState)), this.getClaimCustomerCouponResultLoading()]).pipe(filter(([, loading]) => !loading), tap(([customerCouponsState]) => {
      const attemptedLoad = customerCouponsState.loading || customerCouponsState.success || customerCouponsState.error;
      if (!attemptedLoad) {
        this.loadCustomerCoupons(pageSize);
      }
    }), map(([customerCouponsState]) => customerCouponsState.value), filter(isNotUndefined));
  }
  /**
   * Returns a loaded flag for customer coupons
   */
  getCustomerCouponsLoaded() {
    return this.store.pipe(select(getCustomerCouponsLoaded));
  }
  /**
   * Returns a loading flag for customer coupons
   */
  getCustomerCouponsLoading() {
    return this.store.pipe(select(getCustomerCouponsLoading));
  }
  /**
   * Subscribe a CustomerCoupon Notification
   * @param couponCode a customer coupon code
   */
  subscribeCustomerCoupon(couponCode) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new SubscribeCustomerCoupon({
        userId,
        couponCode
      }));
    });
  }
  /**
   * Returns the subscribe customer coupon notification process loading flag
   */
  getSubscribeCustomerCouponResultLoading() {
    return this.store.pipe(select(getProcessLoadingFactory(SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
  }
  /**
   * Returns the subscribe customer coupon notification process success flag
   */
  getSubscribeCustomerCouponResultSuccess() {
    return this.store.pipe(select(getProcessSuccessFactory(SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
  }
  /**
   * Returns the subscribe customer coupon notification process error flag
   */
  getSubscribeCustomerCouponResultError() {
    return this.store.pipe(select(getProcessErrorFactory(SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
  }
  /**
   * Unsubscribe a CustomerCoupon Notification
   * @param couponCode a customer coupon code
   */
  unsubscribeCustomerCoupon(couponCode) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new UnsubscribeCustomerCoupon({
        userId,
        couponCode
      }));
    });
  }
  /**
   * Returns the unsubscribe customer coupon notification process loading flag
   */
  getUnsubscribeCustomerCouponResultLoading() {
    return this.store.pipe(select(getProcessLoadingFactory(UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
  }
  /**
   * Returns the unsubscribe customer coupon notification process success flag
   */
  getUnsubscribeCustomerCouponResultSuccess() {
    return this.store.pipe(select(getProcessSuccessFactory(UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
  }
  /**
   * Returns the unsubscribe customer coupon notification process error flag
   */
  getUnsubscribeCustomerCouponResultError() {
    return this.store.pipe(select(getProcessErrorFactory(UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID)));
  }
  /**
   * Claim a CustomerCoupon
   * @param couponCode a customer coupon code
   */
  claimCustomerCoupon(couponCode) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new ClaimCustomerCoupon({
        userId,
        couponCode
      }));
    });
  }
  /**
   * Disclaim a CustomerCoupon
   * @param couponCode a customer coupon code
   */
  disclaimCustomerCoupon(couponCode) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new DisclaimCustomerCoupon({
        userId,
        couponCode
      }));
    });
  }
  /**
   * Resets the processing state for customer coupon
   */
  resetDisclaimCustomerCoupon() {
    this.store.dispatch(new ResetDisclaimCustomerCoupon());
  }
  /**
   * Returns the claim customer coupon notification process success flag
   */
  getClaimCustomerCouponResultSuccess() {
    return this.store.pipe(select(getProcessSuccessFactory(CLAIM_CUSTOMER_COUPON_PROCESS_ID)));
  }
  /**
   * Returns the claim customer coupon notification process loading flag
   */
  getClaimCustomerCouponResultLoading() {
    return this.store.pipe(select(getProcessLoadingFactory(CLAIM_CUSTOMER_COUPON_PROCESS_ID)));
  }
  /**
   * Returns the disclaim customer coupon notification process success flag
   */
  getDisclaimCustomerCouponResultSuccess() {
    return this.store.pipe(select(getProcessSuccessFactory(DISCLAIM_CUSTOMER_COUPON_PROCESS_ID)));
  }
  /**
   * Returns the claim customer coupon notification process error flag
   */
  getClaimCustomerCouponResultError() {
    return this.store.pipe(select(getProcessErrorFactory(CLAIM_CUSTOMER_COUPON_PROCESS_ID)));
  }
  /**
   * Returns the disclaim customer coupon notification process error flag
   */
  getDisclaimCustomerCouponResultError() {
    return this.store.pipe(select(getProcessErrorFactory(DISCLAIM_CUSTOMER_COUPON_PROCESS_ID)));
  }
  static {
    this.ɵfac = function CustomerCouponService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerCouponService)(ɵɵinject(Store), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CustomerCouponService,
      factory: _CustomerCouponService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerCouponService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: UserIdService
  }], null);
})();
var UserAddressService = class _UserAddressService {
  constructor(store, userIdService, userAddressConnector, command) {
    this.store = store;
    this.userIdService = userIdService;
    this.userAddressConnector = userAddressConnector;
    this.command = command;
    this.userAddressVerificationCommand = this.command.create((payload) => this.userIdService.takeUserId(false).pipe(switchMap((userId) => this.userAddressConnector.verify(userId, payload.address))));
  }
  /**
   * Retrieves user's addresses
   */
  loadAddresses() {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new LoadUserAddresses(userId));
    });
  }
  /**
   * Adds user address
   * @param address a user address
   */
  addUserAddress(address) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new AddUserAddress({
        userId,
        address
      }));
    });
  }
  /**
   * Sets user address as default
   * @param addressId a user address ID
   */
  setAddressAsDefault(addressId) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new UpdateUserAddress({
        userId,
        addressId,
        address: {
          defaultAddress: true
        }
      }));
    });
  }
  /**
   * Updates existing user address
   * @param addressId a user address ID
   * @param address a user address
   */
  updateUserAddress(addressId, address) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new UpdateUserAddress({
        userId,
        addressId,
        address
      }));
    });
  }
  /**
   * Deletes existing user address
   * @param addressId a user address ID
   */
  deleteUserAddress(addressId) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new DeleteUserAddress({
        userId,
        addressId
      }));
    });
  }
  /**
   * Returns addresses
   */
  getAddresses() {
    return this.store.pipe(select(getAddresses));
  }
  /**
   * Returns a loading flag for addresses
   */
  getAddressesLoading() {
    return this.store.pipe(select(getAddressesLoading));
  }
  getAddressesLoadedSuccess() {
    return this.store.pipe(select(getAddressesLoadedSuccess));
  }
  /**
   * Retrieves delivery countries
   */
  loadDeliveryCountries() {
    this.store.dispatch(new LoadDeliveryCountries());
  }
  /**
   * Returns all delivery countries
   */
  getDeliveryCountries() {
    return this.store.pipe(select(getAllDeliveryCountries));
  }
  /**
   * Returns a country based on the provided `isocode`
   * @param isocode an isocode for a country
   */
  getCountry(isocode) {
    return this.store.pipe(select(countrySelectorFactory(isocode)));
  }
  /**
   * Retrieves regions for specified country by `countryIsoCode`
   * @param countryIsoCode
   */
  loadRegions(countryIsoCode) {
    this.store.dispatch(new LoadRegions(countryIsoCode));
  }
  /**
   * Clear regions in store - useful when changing country
   */
  clearRegions() {
    this.store.dispatch(new ClearRegions());
  }
  /**
   * Returns all regions
   */
  getRegions(countryIsoCode) {
    return this.store.pipe(select(getRegionsDataAndLoading), map(({
      regions,
      country,
      loading,
      loaded
    }) => {
      if (!countryIsoCode && (loading || loaded)) {
        this.clearRegions();
        return [];
      } else if (loading && !loaded) {
        return [];
      } else if (!loading && countryIsoCode !== country && countryIsoCode) {
        if (country) {
          this.clearRegions();
        }
        this.loadRegions(countryIsoCode);
        return [];
      }
      return regions;
    }));
  }
  /**
   * Verifies the address
   * @param address : the address to be verified
   */
  verifyAddress(address) {
    return this.userAddressVerificationCommand.execute({
      address
    });
  }
  static {
    this.ɵfac = function UserAddressService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAddressService)(ɵɵinject(Store), ɵɵinject(UserIdService), ɵɵinject(UserAddressConnector), ɵɵinject(CommandService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserAddressService,
      factory: _UserAddressService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAddressService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: UserIdService
  }, {
    type: UserAddressConnector
  }, {
    type: CommandService
  }], null);
})();
var UserCostCenterService = class _UserCostCenterService {
  constructor(store, userIdService) {
    this.store = store;
    this.userIdService = userIdService;
  }
  /**
   * Load all visible active cost centers for the currently login user
   */
  loadActiveCostCenters() {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        this.store.dispatch(new LoadActiveCostCenters(userId));
      },
      error: () => {
      }
    });
  }
  getCostCentersState() {
    return this.store.select(getCostCentersState);
  }
  /**
   * Get all visible active cost centers
   */
  getActiveCostCenters() {
    return this.getCostCentersState().pipe(observeOn(queueScheduler), tap((process) => {
      if (!(process.loading || process.success || process.error)) {
        this.loadActiveCostCenters();
      }
    }), filter((process) => Boolean(process.success || process.error)), map((result) => result.value ?? []));
  }
  /**
   * Get the addresses of the cost center's unit based on cost center id
   * @param costCenterId cost center id
   */
  getCostCenterAddresses(costCenterId) {
    return this.getActiveCostCenters().pipe(map((costCenters) => {
      const costCenter = costCenters.find((cc) => cc.code === costCenterId);
      if (costCenter && costCenter.unit) {
        return costCenter.unit.addresses ?? [];
      } else {
        return [];
      }
    }));
  }
  static {
    this.ɵfac = function UserCostCenterService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserCostCenterService)(ɵɵinject(Store), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserCostCenterService,
      factory: _UserCostCenterService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserCostCenterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: UserIdService
  }], null);
})();
var UserInterestsService = class _UserInterestsService {
  constructor(store, userIdService) {
    this.store = store;
    this.userIdService = userIdService;
  }
  /**
   * Retrieves an product interest list
   * @param pageSize page size
   * @param currentPage current page
   * @param sort sort
   */
  loadProductInterests(pageSize, currentPage, sort, productCode, notificationType) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new LoadProductInterests({
        userId,
        pageSize,
        currentPage,
        sort,
        productCode,
        notificationType
      }));
    });
  }
  /**
   * Returns product interests
   */
  getProductInterests() {
    return this.store.pipe(select(getInterests));
  }
  /**
   * Returns product interests
   * @param pageSize the page size
   */
  getAndLoadProductInterests(pageSize) {
    return this.store.pipe(select(getInterestsState), tap((interestListState) => {
      const attemptedLoad = interestListState.loading || interestListState.success || interestListState.error;
      if (!attemptedLoad) {
        this.loadProductInterests(pageSize);
      }
    }), map((interestListState) => interestListState.value), filter(isNotUndefined));
  }
  /**
   * Returns a loading flag for product interests
   */
  getProdutInterestsLoading() {
    return this.store.pipe(select(getInterestsLoading));
  }
  /**
   * Removes a ProductInterestRelation
   * @param item product interest relation item
   * @param singleDelete flag to delete only one interest
   */
  removeProdutInterest(item, singleDelete) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new RemoveProductInterest({
        userId,
        item,
        singleDelete
      }));
    });
  }
  /**
   * Returns a loading flag for removing product interests.
   */
  getRemoveProdutInterestLoading() {
    return this.store.pipe(select(getProcessLoadingFactory(REMOVE_PRODUCT_INTERESTS_PROCESS_ID)));
  }
  /**
   * Returns a success flag for removing a product interests.
   */
  getRemoveProdutInterestSuccess() {
    return this.store.pipe(select(getProcessSuccessFactory(REMOVE_PRODUCT_INTERESTS_PROCESS_ID)));
  }
  /**
   * Add a new product interest.
   *
   * @param productCode the product code
   * @param notificationType the notification type
   */
  addProductInterest(productCode, notificationType) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new AddProductInterest({
        userId,
        productCode,
        notificationType
      }));
    });
  }
  /**
   * Returns a success flag for adding a product interest.
   */
  getAddProductInterestSuccess() {
    return this.store.pipe(select(getProcessSuccessFactory(ADD_PRODUCT_INTEREST_PROCESS_ID)));
  }
  /**
   * Returns a error flag for adding a product interest.
   */
  getAddProductInterestError() {
    return this.store.pipe(select(getProcessErrorFactory(ADD_PRODUCT_INTEREST_PROCESS_ID)));
  }
  /**
   * Reset product interest adding state.
   */
  resetAddInterestState() {
    this.store.dispatch(new ResetAddInterestState());
  }
  /**
   * Reset product interest removing state.
   */
  resetRemoveInterestState() {
    this.store.dispatch(new ResetRemoveInterestState());
  }
  /**
   * Clears product interests
   */
  clearProductInterests() {
    this.store.dispatch(new ClearProductInterests());
  }
  static {
    this.ɵfac = function UserInterestsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserInterestsService)(ɵɵinject(Store), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserInterestsService,
      factory: _UserInterestsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserInterestsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: UserIdService
  }], null);
})();
var UserNotificationPreferenceService = class _UserNotificationPreferenceService {
  constructor(store, userIdService) {
    this.store = store;
    this.userIdService = userIdService;
  }
  /**
   * Returns all notification preferences.
   */
  getPreferences() {
    return this.store.pipe(select(getPreferences));
  }
  /**
   * Returns all enabled notification preferences.
   */
  getEnabledPreferences() {
    return this.store.pipe(select(getEnabledPreferences));
  }
  /**
   * Loads all notification preferences.
   */
  loadPreferences() {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new LoadNotificationPreferences(userId));
    });
  }
  /**
   * Clear all notification preferences.
   */
  clearPreferences() {
    this.store.dispatch(new ClearNotificationPreferences());
  }
  /**
   * Returns a loading flag for notification preferences.
   */
  getPreferencesLoading() {
    return this.store.pipe(select(getPreferencesLoading));
  }
  /**
   * Updating notification preferences.
   * @param preferences a preference list
   */
  updatePreferences(preferences) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new UpdateNotificationPreferences({
        userId,
        preferences
      }));
    });
  }
  /**
   * Returns a loading flag for updating preferences.
   */
  getUpdatePreferencesResultLoading() {
    return this.store.select(getProcessLoadingFactory(UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID));
  }
  /**
   * Resets the update notification preferences process state. The state needs to be
   * reset after the process concludes, regardless if it's a success or an error.
   */
  resetNotificationPreferences() {
    this.store.dispatch(new ResetNotificationPreferences());
  }
  static {
    this.ɵfac = function UserNotificationPreferenceService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserNotificationPreferenceService)(ɵɵinject(Store), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserNotificationPreferenceService,
      factory: _UserNotificationPreferenceService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserNotificationPreferenceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: UserIdService
  }], null);
})();
var UserPaymentService = class _UserPaymentService {
  constructor(store, userIdService) {
    this.store = store;
    this.userIdService = userIdService;
  }
  /**
   * Loads all user's payment methods.
   */
  loadPaymentMethods() {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new LoadUserPaymentMethods(userId));
    });
  }
  /**
   * Returns all user's payment methods
   */
  getPaymentMethods() {
    return this.store.pipe(select(getPaymentMethods));
  }
  /**
   * Returns a loading flag for payment methods
   */
  getPaymentMethodsLoading() {
    return this.store.pipe(select(getPaymentMethodsLoading));
  }
  getPaymentMethodsLoadedSuccess() {
    return this.store.pipe(select(getPaymentMethodsLoadedSuccess));
  }
  /**
   * Sets the payment as a default one
   * @param paymentMethodId a payment method ID
   */
  setPaymentMethodAsDefault(paymentMethodId) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new SetDefaultUserPaymentMethod({
        userId,
        paymentMethodId
      }));
    });
  }
  /**
   * Deletes the payment method
   *
   * @param paymentMethodId a payment method ID
   */
  deletePaymentMethod(paymentMethodId) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new DeleteUserPaymentMethod({
        userId,
        paymentMethodId
      }));
    });
  }
  /**
   * Returns all billing countries
   */
  getAllBillingCountries() {
    return this.store.pipe(select(getAllBillingCountries));
  }
  /**
   * Retrieves billing countries
   */
  loadBillingCountries() {
    this.store.dispatch(new LoadBillingCountries());
  }
  static {
    this.ɵfac = function UserPaymentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserPaymentService)(ɵɵinject(Store), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserPaymentService,
      factory: _UserPaymentService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserPaymentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: UserIdService
  }], null);
})();
var UserProfileFacadeTransitionalToken = class {
};
var BillingCountriesEffect = class _BillingCountriesEffect {
  constructor(actions$, siteConnector) {
    this.actions$ = actions$;
    this.siteConnector = siteConnector;
    this.logger = inject(LoggerService);
    this.loadBillingCountries$ = createEffect(() => this.actions$.pipe(ofType(LOAD_BILLING_COUNTRIES), switchMap(() => {
      return this.siteConnector.getCountries(CountryType.BILLING).pipe(map((countries) => new LoadBillingCountriesSuccess(countries)), catchError((error) => of(new LoadBillingCountriesFail(tryNormalizeHttpError(error, this.logger)))));
    })));
  }
  static {
    this.ɵfac = function BillingCountriesEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BillingCountriesEffect)(ɵɵinject(Actions), ɵɵinject(SiteConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BillingCountriesEffect,
      factory: _BillingCountriesEffect.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BillingCountriesEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: SiteConnector
  }], null);
})();
var ClearMiscsDataEffect = class _ClearMiscsDataEffect {
  constructor(actions$) {
    this.actions$ = actions$;
    this.clearMiscsData$ = createEffect(() => this.actions$.pipe(ofType(LANGUAGE_CHANGE, CURRENCY_CHANGE), map(() => {
      return new ClearUserMiscsData();
    })));
  }
  static {
    this.ɵfac = function ClearMiscsDataEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClearMiscsDataEffect)(ɵɵinject(Actions));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ClearMiscsDataEffect,
      factory: _ClearMiscsDataEffect.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClearMiscsDataEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }], null);
})();
var CustomerCouponEffects = class _CustomerCouponEffects {
  constructor(actions$, customerCouponConnector) {
    this.actions$ = actions$;
    this.customerCouponConnector = customerCouponConnector;
    this.logger = inject(LoggerService);
    this.loadCustomerCoupons$ = createEffect(() => this.actions$.pipe(ofType(LOAD_CUSTOMER_COUPONS), map((action) => action.payload), mergeMap((payload) => {
      return this.customerCouponConnector.getCustomerCoupons(payload.userId, payload.pageSize, payload.currentPage, payload.sort).pipe(map((coupons) => {
        return new LoadCustomerCouponsSuccess(coupons);
      }), catchError((error) => of(new LoadCustomerCouponsFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.subscribeCustomerCoupon$ = createEffect(() => this.actions$.pipe(ofType(SUBSCRIBE_CUSTOMER_COUPON), map((action) => action.payload), mergeMap((payload) => {
      return this.customerCouponConnector.turnOnNotification(payload.userId, payload.couponCode).pipe(map((data) => {
        return new SubscribeCustomerCouponSuccess(data);
      }), catchError((error) => of(new SubscribeCustomerCouponFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.unsubscribeCustomerCoupon$ = createEffect(() => this.actions$.pipe(ofType(UNSUBSCRIBE_CUSTOMER_COUPON), map((action) => action.payload), mergeMap((payload) => {
      return this.customerCouponConnector.turnOffNotification(payload.userId, payload.couponCode).pipe(map(() => {
        return new UnsubscribeCustomerCouponSuccess(payload.couponCode);
      }), catchError((error) => of(new UnsubscribeCustomerCouponFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.claimCustomerCoupon$ = createEffect(() => this.actions$.pipe(ofType(CLAIM_CUSTOMER_COUPON), map((action) => action.payload), mergeMap((payload) => {
      return this.customerCouponConnector.claimCustomerCoupon(payload.userId, payload.couponCode).pipe(map((data) => {
        return new ClaimCustomerCouponSuccess(data);
      }), catchError((error) => of(new ClaimCustomerCouponFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.disclaimCustomerCoupon$ = createEffect(() => this.actions$.pipe(ofType(DISCLAIM_CUSTOMER_COUPON), map((action) => action.payload), mergeMap((payload) => {
      return this.customerCouponConnector.disclaimCustomerCoupon(payload.userId, payload.couponCode).pipe(map((data) => {
        return new DisclaimCustomerCouponSuccess(data);
      }), catchError((error) => of(new DisclaimCustomerCouponFail(tryNormalizeHttpError(error, this.logger)))));
    })));
  }
  static {
    this.ɵfac = function CustomerCouponEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerCouponEffects)(ɵɵinject(Actions), ɵɵinject(CustomerCouponConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CustomerCouponEffects,
      factory: _CustomerCouponEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerCouponEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: CustomerCouponConnector
  }], null);
})();
var DeliveryCountriesEffects = class _DeliveryCountriesEffects {
  constructor(actions$, siteConnector) {
    this.actions$ = actions$;
    this.siteConnector = siteConnector;
    this.logger = inject(LoggerService);
    this.loadDeliveryCountries$ = createEffect(() => this.actions$.pipe(ofType(LOAD_DELIVERY_COUNTRIES), switchMap(() => {
      return this.siteConnector.getCountries(CountryType.SHIPPING).pipe(map((countries) => new LoadDeliveryCountriesSuccess(countries)), catchError((error) => of(new LoadDeliveryCountriesFail(tryNormalizeHttpError(error, this.logger)))));
    })));
  }
  static {
    this.ɵfac = function DeliveryCountriesEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeliveryCountriesEffects)(ɵɵinject(Actions), ɵɵinject(SiteConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DeliveryCountriesEffects,
      factory: _DeliveryCountriesEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeliveryCountriesEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: SiteConnector
  }], null);
})();
var NotificationPreferenceEffects = class _NotificationPreferenceEffects {
  constructor(actions$, connector) {
    this.actions$ = actions$;
    this.connector = connector;
    this.logger = inject(LoggerService);
    this.loadPreferences$ = createEffect(() => this.actions$.pipe(ofType(LOAD_NOTIFICATION_PREFERENCES), map((action) => action.payload), switchMap((payload) => this.connector.loadAll(payload).pipe(map((preferences) => new LoadNotificationPreferencesSuccess(preferences)), catchError((error) => of(new LoadNotificationPreferencesFail(tryNormalizeHttpError(error, this.logger))))))));
    this.updatePreferences$ = createEffect(() => this.actions$.pipe(ofType(UPDATE_NOTIFICATION_PREFERENCES), map((action) => action.payload), mergeMap((payload) => this.connector.update(payload.userId, payload.preferences).pipe(map(() => new UpdateNotificationPreferencesSuccess(payload.preferences)), catchError((error) => of(new UpdateNotificationPreferencesFail(tryNormalizeHttpError(error, this.logger))))))));
  }
  static {
    this.ɵfac = function NotificationPreferenceEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotificationPreferenceEffects)(ɵɵinject(Actions), ɵɵinject(UserNotificationPreferenceConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NotificationPreferenceEffects,
      factory: _NotificationPreferenceEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationPreferenceEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: UserNotificationPreferenceConnector
  }], null);
})();
var UserPaymentMethodsEffects = class _UserPaymentMethodsEffects {
  constructor(actions$, userPaymentMethodConnector, globalMessageService) {
    this.actions$ = actions$;
    this.userPaymentMethodConnector = userPaymentMethodConnector;
    this.globalMessageService = globalMessageService;
    this.logger = inject(LoggerService);
    this.loadUserPaymentMethods$ = createEffect(() => this.actions$.pipe(ofType(LOAD_USER_PAYMENT_METHODS), map((action) => action.payload), mergeMap((payload) => {
      return this.userPaymentMethodConnector.getAll(payload).pipe(map((payments) => {
        return new LoadUserPaymentMethodsSuccess(payments);
      }), catchError((error) => of(new LoadUserPaymentMethodsFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.setDefaultUserPaymentMethod$ = createEffect(() => this.actions$.pipe(ofType(SET_DEFAULT_USER_PAYMENT_METHOD), map((action) => action.payload), mergeMap((payload) => {
      return this.userPaymentMethodConnector.setDefault(payload.userId, payload.paymentMethodId).pipe(switchMap((data) => [new SetDefaultUserPaymentMethodSuccess(data), new LoadUserPaymentMethods(payload.userId)]), catchError((error) => of(new SetDefaultUserPaymentMethodFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.deleteUserPaymentMethod$ = createEffect(() => this.actions$.pipe(ofType(DELETE_USER_PAYMENT_METHOD), map((action) => action.payload), mergeMap((payload) => {
      return this.userPaymentMethodConnector.delete(payload.userId, payload.paymentMethodId).pipe(switchMap((data) => {
        this.globalMessageService.add({
          key: "paymentCard.deletePaymentSuccess"
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        return [new DeleteUserPaymentMethodSuccess(data), new LoadUserPaymentMethods(payload.userId)];
      }), catchError((error) => of(new DeleteUserPaymentMethodFail(tryNormalizeHttpError(error, this.logger)))));
    })));
  }
  static {
    this.ɵfac = function UserPaymentMethodsEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserPaymentMethodsEffects)(ɵɵinject(Actions), ɵɵinject(UserPaymentConnector), ɵɵinject(GlobalMessageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserPaymentMethodsEffects,
      factory: _UserPaymentMethodsEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserPaymentMethodsEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: UserPaymentConnector
  }, {
    type: GlobalMessageService
  }], null);
})();
var ProductInterestsEffect = class _ProductInterestsEffect {
  constructor(actions$, userInterestsConnector) {
    this.actions$ = actions$;
    this.userInterestsConnector = userInterestsConnector;
    this.logger = inject(LoggerService);
    this.loadProductInteres$ = createEffect(() => this.actions$.pipe(ofType(LOAD_PRODUCT_INTERESTS), map((action) => action.payload), switchMap((payload) => {
      return this.userInterestsConnector.getInterests(payload.userId, payload.pageSize, payload.currentPage, payload.sort, payload.productCode, payload.notificationType).pipe(map((interests) => {
        return new LoadProductInterestsSuccess(interests);
      }), catchError((error) => of(new LoadProductInterestsFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.removeProductInterest$ = createEffect(() => this.actions$.pipe(ofType(REMOVE_PRODUCT_INTEREST), map((action) => action.payload), switchMap((payload) => this.userInterestsConnector.removeInterest(payload.userId, payload.item).pipe(switchMap((data) => [new LoadProductInterests(payload.singleDelete ? {
      userId: payload.userId,
      productCode: payload.item.product?.code,
      notificationType: payload.item.productInterestEntry?.[0].interestType
    } : {
      userId: payload.userId
    }), new RemoveProductInterestSuccess(data)]), catchError((error) => of(new RemoveProductInterestFail(tryNormalizeHttpError(error, this.logger))))))));
    this.addProductInterest$ = createEffect(() => this.actions$.pipe(ofType(ADD_PRODUCT_INTEREST), map((action) => action.payload), switchMap((payload) => this.userInterestsConnector.addInterest(payload.userId, payload.productCode, payload.notificationType).pipe(switchMap((res) => [new LoadProductInterests({
      userId: payload.userId,
      productCode: payload.productCode,
      notificationType: payload.notificationType
    }), new AddProductInterestSuccess(res)]), catchError((error) => of(new AddProductInterestFail(tryNormalizeHttpError(error, this.logger))))))));
  }
  static {
    this.ɵfac = function ProductInterestsEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductInterestsEffect)(ɵɵinject(Actions), ɵɵinject(UserInterestsConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductInterestsEffect,
      factory: _ProductInterestsEffect.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductInterestsEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: UserInterestsConnector
  }], null);
})();
var RegionsEffects = class _RegionsEffects {
  constructor(actions$, siteConnector) {
    this.actions$ = actions$;
    this.siteConnector = siteConnector;
    this.logger = inject(LoggerService);
    this.loadRegions$ = createEffect(() => this.actions$.pipe(ofType(LOAD_REGIONS), map((action) => {
      return action.payload;
    }), switchMap((countryCode) => {
      return this.siteConnector.getRegions(countryCode).pipe(map((regions) => new LoadRegionsSuccess({
        entities: regions,
        country: countryCode
      })), catchError((error) => of(new LoadRegionsFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.resetRegions$ = createEffect(() => this.actions$.pipe(ofType(CLEAR_USER_MISCS_DATA, CLEAR_REGIONS), map(() => {
      return new LoaderResetAction(REGIONS);
    })));
  }
  static {
    this.ɵfac = function RegionsEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegionsEffects)(ɵɵinject(Actions), ɵɵinject(SiteConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RegionsEffects,
      factory: _RegionsEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegionsEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: SiteConnector
  }], null);
})();
var UserAddressesEffects = class _UserAddressesEffects {
  constructor(actions$, userAddressConnector, userAddressService, messageService) {
    this.actions$ = actions$;
    this.userAddressConnector = userAddressConnector;
    this.userAddressService = userAddressService;
    this.messageService = messageService;
    this.logger = inject(LoggerService);
    this.loadUserAddresses$ = createEffect(() => this.actions$.pipe(ofType(LOAD_USER_ADDRESSES), map((action) => action.payload), switchMap((payload) => {
      return this.userAddressConnector.getAll(payload).pipe(map((addresses) => {
        return new LoadUserAddressesSuccess(addresses);
      }), catchError((error) => of(new LoadUserAddressesFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.addUserAddress$ = createEffect(() => this.actions$.pipe(ofType(ADD_USER_ADDRESS), map((action) => action.payload), mergeMap((payload) => {
      return this.userAddressConnector.add(payload.userId, payload.address).pipe(map((data) => {
        return new AddUserAddressSuccess(data);
      }), catchError((error) => of(new AddUserAddressFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.updateUserAddress$ = createEffect(() => this.actions$.pipe(ofType(UPDATE_USER_ADDRESS), map((action) => action.payload), mergeMap((payload) => {
      return this.userAddressConnector.update(payload.userId, payload.addressId, payload.address).pipe(map(() => {
        return new UpdateUserAddressSuccess(payload);
      }), catchError((error) => {
        this.showGlobalMessage("addressForm.invalidAddress", GlobalMessageType.MSG_TYPE_ERROR);
        return of(new UpdateUserAddressFail(tryNormalizeHttpError(error, this.logger)));
      }));
    })));
    this.deleteUserAddress$ = createEffect(() => this.actions$.pipe(ofType(DELETE_USER_ADDRESS), map((action) => action.payload), mergeMap((payload) => {
      return this.userAddressConnector.delete(payload.userId, payload.addressId).pipe(map((data) => {
        return new DeleteUserAddressSuccess(data);
      }), catchError((error) => of(new DeleteUserAddressFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.showGlobalMessageOnAddSuccess$ = createEffect(() => this.actions$.pipe(ofType(ADD_USER_ADDRESS_SUCCESS), tap(() => {
      this.loadAddresses();
      this.showGlobalMessage("addressForm.userAddressAddSuccess");
    })), {
      dispatch: false
    });
    this.showGlobalMessageOnUpdateSuccess$ = createEffect(() => this.actions$.pipe(ofType(UPDATE_USER_ADDRESS_SUCCESS), map((action) => action.payload), tap((payload) => {
      this.loadAddresses();
      if (Object.keys(payload?.address).length !== 1 || !payload?.address?.defaultAddress) {
        this.showGlobalMessage("addressForm.userAddressUpdateSuccess");
      }
    })), {
      dispatch: false
    });
    this.showGlobalMessageOnDeleteSuccess$ = createEffect(() => this.actions$.pipe(ofType(DELETE_USER_ADDRESS_SUCCESS), tap(() => {
      this.loadAddresses();
      this.showGlobalMessage("addressForm.userAddressDeleteSuccess");
    })), {
      dispatch: false
    });
  }
  /**
   * Show global confirmation message with provided text
   */
  showGlobalMessage(key, type) {
    this.messageService.add({
      key
    }, type ?? GlobalMessageType.MSG_TYPE_CONFIRMATION);
  }
  loadAddresses() {
    this.userAddressService.loadAddresses();
  }
  static {
    this.ɵfac = function UserAddressesEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAddressesEffects)(ɵɵinject(Actions), ɵɵinject(UserAddressConnector), ɵɵinject(UserAddressService), ɵɵinject(GlobalMessageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserAddressesEffects,
      factory: _UserAddressesEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAddressesEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: UserAddressConnector
  }, {
    type: UserAddressService
  }, {
    type: GlobalMessageService
  }], null);
})();
var UserConsentsEffect = class _UserConsentsEffect {
  constructor(actions$, userConsentConnector) {
    this.actions$ = actions$;
    this.userConsentConnector = userConsentConnector;
    this.logger = inject(LoggerService);
    this.resetConsents$ = createEffect(() => this.actions$.pipe(ofType(LANGUAGE_CHANGE), map(() => new ResetLoadUserConsents())));
    this.getConsents$ = createEffect(() => this.actions$.pipe(ofType(LOAD_USER_CONSENTS), map((action) => action.payload), concatMap((userId) => this.userConsentConnector.loadConsents(userId).pipe(map((consents) => new LoadUserConsentsSuccess(consents)), catchError((error) => of(new LoadUserConsentsFail(tryNormalizeHttpError(error, this.logger))))))));
    this.giveConsent$ = createEffect(() => this.actions$.pipe(ofType(GIVE_USER_CONSENT, TRANSFER_ANONYMOUS_CONSENT), concatMap((action) => this.userConsentConnector.giveConsent(action.payload.userId, action.payload.consentTemplateId ?? "", action.payload.consentTemplateVersion ?? 0).pipe(map((consent) => new GiveUserConsentSuccess(consent)), catchError((error) => {
      const errors = [new GiveUserConsentFail(tryNormalizeHttpError(error, this.logger))];
      if (action.type === TRANSFER_ANONYMOUS_CONSENT && error.status === 409) {
        errors.push(new RemoveMessagesByType(GlobalMessageType.MSG_TYPE_ERROR));
      }
      return of(...errors);
    })))));
    this.withdrawConsent$ = createEffect(() => this.actions$.pipe(ofType(WITHDRAW_USER_CONSENT), map((action) => action.payload), concatMap(({
      userId,
      consentCode,
      consentId
    }) => this.userConsentConnector.withdrawConsent(userId, consentCode, consentId).pipe(map(() => new WithdrawUserConsentSuccess()), catchError((error) => of(new WithdrawUserConsentFail(tryNormalizeHttpError(error, this.logger))))))));
  }
  static {
    this.ɵfac = function UserConsentsEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserConsentsEffect)(ɵɵinject(Actions), ɵɵinject(UserConsentConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserConsentsEffect,
      factory: _UserConsentsEffect.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserConsentsEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: UserConsentConnector
  }], null);
})();
var UserCostCenterEffects = class _UserCostCenterEffects {
  constructor(actions$, userCostCenterConnector) {
    this.actions$ = actions$;
    this.userCostCenterConnector = userCostCenterConnector;
    this.logger = inject(LoggerService);
    this.loadActiveCostCenters$ = createEffect(() => this.actions$.pipe(ofType(LOAD_ACTIVE_COST_CENTERS), map((action) => action.payload), switchMap((payload) => this.userCostCenterConnector.getActiveList(payload).pipe(
      // TODO(#8875): Should we use here serialize utils?
      map((data) => new LoadActiveCostCentersSuccess(data.values)),
      catchError((error) => of(new LoadActiveCostCentersFail(tryNormalizeHttpError(error, this.logger))))
    ))));
  }
  static {
    this.ɵfac = function UserCostCenterEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserCostCenterEffects)(ɵɵinject(Actions), ɵɵinject(UserCostCenterConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserCostCenterEffects,
      factory: _UserCostCenterEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserCostCenterEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: UserCostCenterConnector
  }], null);
})();
var effects = [ClearMiscsDataEffect, DeliveryCountriesEffects, RegionsEffects, UserAddressesEffects, UserPaymentMethodsEffects, BillingCountriesEffect, UserConsentsEffect, CustomerCouponEffects, NotificationPreferenceEffects, ProductInterestsEffect, UserCostCenterEffects];
var initialState$9 = {
  entities: {}
};
function reducer$9(state = initialState$9, action) {
  switch (action.type) {
    case LOAD_BILLING_COUNTRIES_SUCCESS: {
      const billingCountries = action.payload;
      const entities = billingCountries.reduce((countryEntities, name) => {
        return __spreadProps(__spreadValues({}, countryEntities), {
          [name.isocode]: name
        });
      }, __spreadValues({}, state.entities));
      return __spreadProps(__spreadValues({}, state), {
        entities
      });
    }
    case CLEAR_USER_MISCS_DATA: {
      return initialState$9;
    }
  }
  return state;
}
var initialState$8 = {
  coupons: [],
  sorts: [],
  pagination: {}
};
function reducer$8(state = initialState$8, action) {
  switch (action.type) {
    case LOAD_CUSTOMER_COUPONS_SUCCESS: {
      return action.payload;
    }
    case SUBSCRIBE_CUSTOMER_COUPON_SUCCESS: {
      const updatedCustomerCoupon = action.payload.coupon;
      const customerCoupons = new Array(state.coupons?.length ?? 0);
      state.coupons?.forEach((customerCoupon, index) => updatedCustomerCoupon && customerCoupon.couponId === updatedCustomerCoupon.couponId ? customerCoupons[index] = updatedCustomerCoupon : customerCoupons[index] = customerCoupon);
      return __spreadProps(__spreadValues({}, state), {
        coupons: customerCoupons
      });
    }
    case UNSUBSCRIBE_CUSTOMER_COUPON_SUCCESS: {
      const updatedCouponCode = action.payload;
      const customerCoupons = new Array(state.coupons?.length ?? 0);
      state.coupons?.forEach((customerCoupon, index) => customerCoupon.couponId === updatedCouponCode ? customerCoupons[index] = __spreadProps(__spreadValues({}, customerCoupon), {
        notificationOn: false
      }) : customerCoupons[index] = customerCoupon);
      return __spreadProps(__spreadValues({}, state), {
        coupons: customerCoupons
      });
    }
  }
  return state;
}
var initialState$7 = {
  entities: {}
};
function reducer$7(state = initialState$7, action) {
  switch (action.type) {
    case LOAD_DELIVERY_COUNTRIES_SUCCESS: {
      const deliveryCountries = action.payload;
      const entities = deliveryCountries.reduce((countryEntities, country) => {
        return __spreadProps(__spreadValues({}, countryEntities), {
          [country.isocode ?? ""]: country
        });
      }, __spreadValues({}, state.entities));
      return __spreadProps(__spreadValues({}, state), {
        entities
      });
    }
    case CLEAR_USER_MISCS_DATA: {
      return initialState$7;
    }
  }
  return state;
}
var initialState$6 = [];
function reducer$6(state = initialState$6, action) {
  switch (action.type) {
    case LOAD_NOTIFICATION_PREFERENCES_FAIL: {
      return initialState$6;
    }
    case LOAD_NOTIFICATION_PREFERENCES_SUCCESS:
    case UPDATE_NOTIFICATION_PREFERENCES_SUCCESS: {
      return action.payload ? action.payload : initialState$6;
    }
  }
  return state;
}
var initialState$5 = [];
function reducer$5(state = initialState$5, action) {
  switch (action.type) {
    case LOAD_USER_PAYMENT_METHODS_SUCCESS: {
      return action.payload ? action.payload : initialState$5;
    }
    case LOAD_USER_PAYMENT_METHODS_FAIL: {
      return initialState$5;
    }
  }
  return state;
}
var initialState$4 = {
  results: [],
  pagination: {},
  sorts: []
};
function reducer$4(state = initialState$4, action) {
  switch (action.type) {
    case LOAD_PRODUCT_INTERESTS_SUCCESS: {
      return action.payload ? action.payload : initialState$4;
    }
    case LOAD_PRODUCT_INTERESTS_FAIL: {
      return initialState$4;
    }
  }
  return state;
}
var initialState$3 = {
  entities: [],
  country: null
};
function reducer$3(state = initialState$3, action) {
  switch (action.type) {
    case LOAD_REGIONS_SUCCESS: {
      const entities = action.payload.entities;
      const country = action.payload.country;
      if (entities || country) {
        return __spreadProps(__spreadValues({}, state), {
          entities,
          country
        });
      }
      return initialState$3;
    }
  }
  return state;
}
var initialState$2 = [];
function reducer$2(state = initialState$2, action) {
  switch (action.type) {
    case LOAD_USER_ADDRESSES_FAIL: {
      return initialState$2;
    }
    case LOAD_USER_ADDRESSES_SUCCESS: {
      return action.payload ? action.payload : initialState$2;
    }
  }
  return state;
}
var initialState$1 = [];
function reducer$1(state = initialState$1, action) {
  switch (action.type) {
    case LOAD_USER_CONSENTS_SUCCESS: {
      const consents = action.payload;
      return consents ? consents : initialState$1;
    }
    case GIVE_USER_CONSENT_SUCCESS: {
      const updatedConsentTemplate = action.consentTemplate;
      return state.map((consentTemplate) => consentTemplate.id === updatedConsentTemplate.id ? updatedConsentTemplate : consentTemplate);
    }
  }
  return state;
}
var initialState = [];
function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ACTIVE_COST_CENTERS_FAIL: {
      return initialState;
    }
    case LOAD_ACTIVE_COST_CENTERS_SUCCESS: {
      return action.payload ? action.payload : initialState;
    }
  }
  return state;
}
function getReducers() {
  return {
    addresses: loaderReducer(USER_ADDRESSES, reducer$2),
    billingCountries: reducer$9,
    consents: loaderReducer(USER_CONSENTS, reducer$1),
    payments: loaderReducer(USER_PAYMENT_METHODS, reducer$5),
    countries: reducer$7,
    regions: loaderReducer(REGIONS, reducer$3),
    customerCoupons: loaderReducer(CUSTOMER_COUPONS, reducer$8),
    notificationPreferences: loaderReducer(NOTIFICATION_PREFERENCES, reducer$6),
    productInterests: loaderReducer(PRODUCT_INTERESTS, reducer$4),
    costCenters: loaderReducer(USER_COST_CENTERS, reducer)
  };
}
var reducerToken = new InjectionToken("UserReducers");
var reducerProvider = {
  provide: reducerToken,
  useFactory: getReducers
};
function clearUserState(reducer2) {
  return function(state, action) {
    if (action.type === LOGOUT) {
      state = void 0;
    }
    return reducer2(state, action);
  };
}
var metaReducers = [clearUserState];
var UserStoreModule = class _UserStoreModule {
  static {
    this.ɵfac = function UserStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserStoreModule,
      imports: [CommonModule, StateModule, StoreFeatureModule, EffectsFeatureModule, RouterModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [reducerProvider],
      imports: [CommonModule, StateModule, StoreModule.forFeature(USER_FEATURE, reducerToken, {
        metaReducers
      }), EffectsModule.forFeature(effects), RouterModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserStoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, StateModule, StoreModule.forFeature(USER_FEATURE, reducerToken, {
        metaReducers
      }), EffectsModule.forFeature(effects), RouterModule],
      providers: [reducerProvider]
    }]
  }], null, null);
})();
var UserModule = class _UserModule {
  static forRoot() {
    return {
      ngModule: _UserModule
    };
  }
  static {
    this.ɵfac = function UserModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserModule,
      imports: [UserStoreModule, UserEventModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [UserEventBuilder],
      imports: [UserStoreModule, UserEventModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserModule, [{
    type: NgModule,
    args: [{
      imports: [UserStoreModule, UserEventModule],
      providers: [UserEventBuilder]
    }]
  }], null, null);
})();

export {
  ROUTER_NAVIGATED,
  isObject,
  deepMerge,
  Config,
  DefaultConfig,
  RootConfig,
  ConfigChunk,
  DefaultConfigChunk,
  provideConfig,
  provideConfigFactory,
  provideDefaultConfig,
  provideDefaultConfigFactory,
  defaultAnonymousConsentsConfig,
  CountryType,
  PageType,
  ScrollBehavior,
  CmsBannerCarouselEffect,
  ContainerBackgroundOptions,
  ContainerSizeOptions,
  USER_CMS_ENDPOINTS,
  ANONYMOUS_CONSENT_STATUS,
  ANONYMOUS_CONSENTS_HEADER,
  ImageType,
  HttpErrorModel,
  B2BUserRole,
  B2BUserRight,
  NotificationType,
  VariantType,
  PriceType,
  VariantQualifier,
  utilsGroup,
  ANONYMOUS_CONSENTS_STORE_FEATURE,
  ANONYMOUS_CONSENTS,
  anonymousConsentsGroup,
  anonymousConsentsGroup_selectors,
  FeatureToggles,
  DefaultFeatureToggles,
  RootFeatureToggles,
  FeatureTogglesChunk,
  DefaultFeatureTogglesChunk,
  provideFeatureToggles,
  provideFeatureTogglesFactory,
  provideDefaultFeatureToggles,
  provideDefaultFeatureTogglesFactory,
  isFeatureLevel,
  isFeatureEnabled,
  FeaturesConfig,
  FeatureConfigService,
  OCC_USER_ID_CURRENT,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_GUEST,
  OCC_USER_IDS,
  OCC_CART_ID_CURRENT,
  SERVER_REQUEST_URL,
  SERVER_REQUEST_ORIGIN,
  WindowRef,
  USE_CLIENT_TOKEN,
  USE_CUSTOMER_SUPPORT_AGENT_TOKEN,
  USE_CAPTCHA_TOKEN,
  InterceptorUtil,
  AuthConfig,
  isNotUndefined,
  isNotNullable,
  CLIENT_AUTH_FEATURE,
  CLIENT_TOKEN_DATA,
  clientTokenGroup_actions,
  clientTokenGroup_selectors,
  ClientTokenService,
  ClientErrorHandlingService,
  StringTemplate,
  LoggerService,
  getContextParameterValues,
  getContextParameterDefault,
  LANGUAGE_CONTEXT_ID,
  CURRENCY_CONTEXT_ID,
  BASE_SITE_CONTEXT_ID,
  THEME_CONTEXT_ID,
  HttpParamsURIEncoder,
  DEFAULT_SCOPE,
  urlPathJoin,
  SiteContextConfig,
  OccConfig,
  siteContextGroup_actions,
  SITE_CONTEXT_FEATURE,
  siteContextGroup_selectors,
  BaseSiteService,
  OccEndpointsService,
  ClientTokenInterceptor,
  StorageSyncType,
  StateTransferType,
  StateConfig,
  Priority,
  resolveApplicable,
  Command,
  CommandStrategy,
  CommandService,
  createFrom,
  CxEvent,
  EventService,
  QueryService,
  getLastValueSync,
  ModuleInitializedEvent,
  MODULE_INITIALIZER,
  LazyModulesService,
  UnifiedInjector,
  ConverterService,
  GlobService,
  JavaRegExpConverter,
  ObjectComparisonUtils,
  OccHttpErrorType,
  OccHttpErrorReason,
  isJaloError,
  isServerError,
  isAuthorizationError,
  DEFAULT_SERVER_ERROR_RETRIES_COUNT,
  DEFAULT_AUTHORIZATION_ERROR_RETRIES_COUNT,
  EMAIL_PATTERN,
  PASSWORD_PATTERN,
  MIN_ONE_UPPER_CASE_CHARACTER_PATTERN,
  MIN_ONE_DIGIT_PATTERN,
  MIN_ONE_SPECIAL_CHARACTER_PATTERN,
  MIN_SIX_CHARACTERS_PATTERN,
  MIN_EIGHT_CHARACTERS_PATTERN,
  MAX_CHARACTERS_PATTERN,
  CONSECUTIVE_CHARACTERS,
  STRONG_PASSWORD_PATTERN,
  SECURE_PASSWORD_PATTERN,
  backOff,
  uniteLatest,
  withdrawOn,
  wrapIntoObservable,
  ScriptPlacement,
  ScriptLoader,
  TestingTimeUtils,
  TimeUtils,
  tryNormalizeHttpError,
  isKeyInvalid,
  StatePersistenceService,
  UserIdService,
  AuthStorageService,
  AuthRedirectStorageService,
  AuthStatePersistenceService,
  StateModule,
  OAuthFlow,
  AuthConfigService,
  ClientAuthenticationTokenService,
  ClientAuthModule,
  CrossSiteRequestForgeryService,
  authGroup_actions,
  FeatureLevelDirective,
  FeatureDirective,
  LOCATION_INITIALIZED_MULTI,
  CONFIG_INITIALIZER,
  ConfigInitializerService,
  configInitializerFactory,
  locationInitializedFactory$1,
  ConfigInitializerModule,
  ConfigValidatorToken,
  provideConfigValidator,
  validateConfig,
  configValidatorFactory,
  ConfigValidatorModule,
  ConfigurationService,
  ConfigModule,
  TEST_CONFIG_COOKIE_NAME,
  TEST_CONFIG,
  TestConfigModule,
  FeatureStylesService,
  FeaturesConfigModule,
  useFeatureStyles,
  OAUTH_REDIRECT_FLOW_KEY,
  OAuthLibWrapperService,
  routingGroup_actions,
  ROUTING_FEATURE,
  routingGroup_selectors,
  RouteLoadStrategy,
  RoutingConfig,
  RoutingConfigService,
  UrlParsingService,
  SemanticPathService,
  ActivatedRoutesService,
  RoutingParamsService,
  RoutingService,
  AuthFlowRoutesService,
  AuthRedirectService,
  AuthMultisiteIsolationService,
  AuthService,
  AnonymousConsentsService,
  USE_AUTHORIZATION_CODE_FLOW_BY_DEFAULT,
  LogoutEvent,
  LoginEvent,
  StateEventService,
  UserAuthEventBuilder,
  UserAuthEventModule,
  GlobalMessageType,
  globalMessageGroup_actions,
  GLOBAL_MESSAGE_FEATURE,
  globalMessageGroup_selectors,
  GlobalMessageService,
  AuthHttpHeaderService,
  AuthInterceptor,
  TokenRevocationInterceptor,
  UserAuthModule,
  AuthModule,
  CsrfStateService,
  AuthGuard,
  GlobalMessageConfig,
  HttpResponseStatus,
  HttpErrorHandler,
  BadGatewayHandler,
  BadRequestHandler,
  ConflictHandler,
  ForbiddenHandler,
  GatewayTimeoutHandler,
  InternalServerErrorHandler,
  NotFoundHandler,
  UnknownErrorHandler,
  errorHandlers,
  httpErrorInterceptors,
  GlobalMessageModule,
  CustomLoginGuard,
  NotAuthGuard,
  AnonymousConsentsConfig,
  AnonymousConsentsInterceptor,
  PROCESS_FEATURE,
  process_selectors,
  USER_FEATURE,
  REGISTER_USER_PROCESS_ID,
  GIVE_CONSENT_PROCESS_ID,
  WITHDRAW_CONSENT_PROCESS_ID,
  UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID,
  ADD_PRODUCT_INTEREST_PROCESS_ID,
  REMOVE_PRODUCT_INTERESTS_PROCESS_ID,
  USER_CONSENTS,
  USER_PAYMENT_METHODS,
  USER_ADDRESSES,
  USER_COST_CENTERS,
  REGIONS,
  CUSTOMER_COUPONS,
  SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID,
  UNSUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID,
  CLAIM_CUSTOMER_COUPON_PROCESS_ID,
  DISCLAIM_CUSTOMER_COUPON_PROCESS_ID,
  NOTIFICATION_PREFERENCES,
  PRODUCT_INTERESTS,
  userGroup_actions,
  AnonymousConsentTemplatesAdapter,
  AnonymousConsentTemplatesConnector,
  CmsComponentAdapter,
  CmsPageAdapter,
  CMS_PAGE_NORMALIZER,
  JSP_INCLUDE_CMS_COMPONENT_TYPE,
  CMS_FLEX_COMPONENT_TYPE,
  SMART_EDIT_DUMMY_COMPONENT_TYPE,
  DeferLoadingStrategy,
  CmsConfig,
  PageRobotsMeta,
  Occ,
  OccCmsPageNormalizer,
  CMS_COMPONENT_NORMALIZER,
  OccCmsComponentAdapter,
  HOME_PAGE_CONTEXT,
  SMART_EDIT_CONTEXT,
  PageContext,
  OccCmsPageAdapter,
  CmsOccModule,
  LegacyOccCmsComponentAdapter,
  OccCostCenterNormalizer,
  OccCostCenterSerializer,
  COST_CENTER_NORMALIZER,
  COST_CENTERS_NORMALIZER,
  COST_CENTER_SERIALIZER,
  OccCostCenterListNormalizer,
  CostCenterOccModule,
  ProductImageNormalizer,
  ProductReferenceNormalizer,
  PRODUCT_NORMALIZER,
  OccProductSearchPageNormalizer,
  OccProductReferencesListNormalizer,
  ProductNameNormalizer,
  PRODUCT_REFERENCES_NORMALIZER,
  OccProductReferencesAdapter,
  PRODUCT_REVIEW_NORMALIZER,
  PRODUCT_REVIEW_SERIALIZER,
  OccProductReviewsAdapter,
  PRODUCT_SEARCH_PAGE_NORMALIZER,
  PRODUCT_SUGGESTION_NORMALIZER,
  OCC_HTTP_TOKEN,
  mergeFields,
  optimizeFields,
  parseFields,
  stringifyFields,
  extractFields,
  OCC_USER_ID_CONSTANTS,
  OccProductSearchAdapter,
  OccFieldsService,
  OccRequestsOptimizerService,
  OccProductAdapter,
  ProductAdapter,
  ProductAvailabilityAdapter,
  ProductReferencesAdapter,
  ProductReviewsAdapter,
  ProductSearchAdapter,
  ProductScope,
  OccProductAvailabilityAdapter,
  ProductOccModule,
  BaseSiteNormalizer,
  LANGUAGE_NORMALIZER,
  CURRENCY_NORMALIZER,
  COUNTRY_NORMALIZER,
  REGION_NORMALIZER,
  BASE_SITE_NORMALIZER,
  OccSiteAdapter,
  SiteAdapter,
  LanguageService,
  CurrencyService,
  SiteContextInterceptor,
  SiteContextOccModule,
  AnonymousConsentNormalizer,
  OccUserInterestsNormalizer,
  ANONYMOUS_CONSENT_NORMALIZER,
  CONSENT_TEMPLATE_NORMALIZER,
  OccAnonymousConsentTemplatesAdapter,
  CUSTOMER_COUPON_SEARCH_RESULT_NORMALIZER,
  OccCustomerCouponAdapter,
  ADDRESS_NORMALIZER,
  ADDRESS_LIST_NORMALIZER,
  ADDRESS_SERIALIZER,
  ADDRESS_VALIDATION_NORMALIZER,
  OccUserAddressAdapter,
  OccUserConsentAdapter,
  PRODUCT_INTERESTS_NORMALIZER,
  OccUserInterestsAdapter,
  OccUserNotificationPreferenceAdapter,
  PAYMENT_DETAILS_NORMALIZER,
  OccUserPaymentAdapter,
  UserAddressAdapter,
  UserConsentAdapter,
  UserCostCenterAdapter,
  CustomerCouponAdapter,
  UserInterestsAdapter,
  UserPaymentAdapter,
  UserOccModule,
  defaultOccConfig,
  occConfigValidator,
  WithCredentialsInterceptor,
  BaseOccModule,
  OCC_BASE_URL_META_TAG_NAME,
  OCC_BASE_URL_META_TAG_PLACEHOLDER,
  MEDIA_BASE_URL_META_TAG_NAME,
  MEDIA_BASE_URL_META_TAG_PLACEHOLDER,
  occServerConfigFromMetaTagFactory,
  mediaServerConfigFromMetaTagFactory,
  provideConfigFromMetaTags,
  MetaTagConfigModule,
  LoadingScopesService,
  usersGroup_selectors,
  UserConsentService,
  SiteContextConfigInitializer,
  SiteConnector,
  LanguageSetEvent,
  CurrencySetEvent,
  SiteContextEventBuilder,
  SiteContextEventModule,
  ContextServiceMap,
  serviceMapFactory,
  contextServiceMapProvider,
  BaseSiteInitializer,
  CurrencyStatePersistenceService,
  CurrencyInitializer,
  LanguageStatePersistenceService,
  LanguageInitializer,
  SiteContextParamsService,
  SiteContextUrlSerializer,
  SiteContextModule,
  AnonymousConsentsStatePersistenceService,
  AnonymousConsentsModule,
  defaultCmsModuleConfig,
  defaultUserCmsModuleConfig,
  CMS_FEATURE,
  NAVIGATION_DETAIL_ENTITY,
  COMPONENT_ENTITY,
  cmsGroup_actions,
  cmsGroup_selectors,
  CmsService,
  defaultPageMetaConfig,
  PageMetaResolver,
  TranslationService,
  DefaultRoutePageMetaResolver,
  RoutingPageMetaResolver,
  PageMetaConfig,
  PageLinkService,
  BasePageMetaResolver,
  ContentPageMetaResolver,
  PageMetaModule,
  CmsStructureConfig,
  CmsStructureConfigService,
  CmsComponentConnector,
  UrlMatcherService,
  ConfigurableRoutesService,
  ProductURLPipe,
  UrlPipe,
  UrlModule,
  SecurePortalConfigInitializer,
  ExternalRoutesConfig,
  ExternalRoutesGuard,
  ExternalRoutesService,
  ExternalRoutesModule,
  ProtectedRoutesService,
  ProtectedRoutesGuard,
  initConfigurableRoutes,
  initSecurePortalConfig,
  RoutingModule,
  DEFAULT_URL_MATCHER,
  CmsPageConnector,
  CmsModule,
  LoggingErrorHandler,
  MULTI_ERROR_HANDLER,
  CxErrorHandler,
  ErrorActionService,
  EffectsErrorHandlerModule,
  OutboundHttpError,
  CmsPageNotFoundOutboundHttpError,
  HttpErrorHandlerInterceptor,
  HttpErrorHandlerModule,
  ErrorHandlingModule,
  defaultBackendHttpTimeoutConfig,
  HTTP_TIMEOUT_CONFIG,
  BackendHttpTimeoutConfig,
  HttpTimeoutInterceptor,
  HttpTimeoutModule,
  HttpModule,
  I18nConfig,
  I18nConfigInitializer,
  CxDatePipe,
  I18nextBackendInitializer,
  I18NEXT_INSTANCE,
  I18NEXT_HTTP_BACKEND_CLIENT,
  I18nextHttpBackendInitializer,
  I18nextResourcesToBackendInitializer,
  i18nextBackendProviders,
  I18nextBackendService,
  I18nextInitializer,
  TranslationChunkService,
  I18nextTranslationService,
  CxNumericPipe,
  isTranslatable,
  TranslatePipe,
  I18nModule,
  ProcessModule,
  defaultSiteThemeConfig,
  siteThemeGroup_actions,
  SITE_THEME_FEATURE,
  siteThemeGroup_selectors,
  SiteThemeService,
  SiteThemeConfig,
  SiteThemeModule,
  BaseCoreModule,
  POINT_OF_SERVICE_NORMALIZER,
  ComponentDecorator,
  SlotDecorator,
  PageMetaService,
  DynamicAttributeService,
  CostCenterModule,
  MockTranslatePipe,
  MockDatePipe,
  I18nTestingModule,
  FeatureModulesService,
  FacadeFactoryService,
  facadeFactory,
  ProductConnector,
  ProductAvailabilityConnector,
  ProductReferencesConnector,
  ProductReviewsConnector,
  ProductSearchConnector,
  FacetChangedEvent,
  PRODUCT_FEATURE,
  PRODUCT_DETAIL_ENTITY,
  PRODUCT_SEARCH_RESULTS_BY_CODES_ENTITY,
  PRODUCT_SEARCH_RESULTS_BY_CATEGORY_ENTITY,
  productGroup_actions,
  productGroup_selectors,
  ProductSearchService,
  ProductEventBuilder,
  ProductEventModule,
  ProductReferenceService,
  ProductReviewService,
  ProductSearchByCodeService,
  ProductSearchByCategoryService,
  ProductLoadingService,
  ProductService,
  SearchboxService,
  ProductAvailabilityService,
  CategoryPageMetaResolver,
  ProductPageMetaResolver,
  SearchPageMetaResolver,
  ProductModule,
  UserAddressConnector,
  UserConsentConnector,
  UserCostCenterConnector,
  CustomerCouponConnector,
  UserInterestsConnector,
  UserPaymentConnector,
  UserAddressEvent,
  UpdateUserAddressEvent,
  DeleteUserAddressEvent,
  AddUserAddressEvent,
  LoadUserAddressesEvent,
  LoadUserPaymentMethodsEvent,
  UserEventBuilder,
  UserEventModule,
  ConsentService,
  CustomerCouponService,
  UserAddressService,
  UserCostCenterService,
  UserInterestsService,
  UserNotificationPreferenceService,
  UserPaymentService,
  UserProfileFacadeTransitionalToken,
  UserModule
};
/*! Bundled license information:

@spartacus/core/fesm2022/spartacus-core.mjs:
  (**
   * @license
   * The MIT License
   * Copyright (c) 2010-2019 Google LLC. http://angular.io/license
   *
   * See:
   * - https://github.com/angular/angular/blob/6f5f481fdae03f1d8db36284b64c7b82d9519d85/packages/router/src/shared.ts#L121
   *)
*/
//# sourceMappingURL=chunk-VIVIQI6G.js.map
