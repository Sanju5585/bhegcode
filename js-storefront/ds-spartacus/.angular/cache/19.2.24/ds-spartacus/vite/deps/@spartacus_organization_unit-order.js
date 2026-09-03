import {
  UnitOrderDetailsOrderEntriesContextToken,
  UnitOrderFacade
} from "./chunk-MZAKXM6H.js";
import {
  OrderDetailItemsComponent,
  OrderDetailTotalsComponent,
  OrderDetailsService
} from "./chunk-ODL34PK5.js";
import "./chunk-22AER76T.js";
import "./chunk-DM7JC3BZ.js";
import {
  OccOrderNormalizer
} from "./chunk-A4FULBAP.js";
import "./chunk-KW2L2NIV.js";
import {
  ORDER_HISTORY_NORMALIZER,
  ORDER_NORMALIZER
} from "./chunk-UIW5AQFA.js";
import "./chunk-ZPMY6JFV.js";
import "./chunk-Q7WXRDFA.js";
import "./chunk-YJXUXPBZ.js";
import "./chunk-P4IPRL4B.js";
import {
  UserAccountFacade
} from "./chunk-LZQV6UAH.js";
import {
  OrderEntriesSource
} from "./chunk-KEAKWHYV.js";
import {
  BtnLikeLinkDirective,
  BtnLikeLinkModule,
  CardComponent,
  CardModule,
  ICON_TYPE,
  IconComponent,
  IconModule,
  ListNavigationModule,
  PaginationComponent,
  SortingComponent,
  TotalComponent
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  AuthGuard,
  B2BUserRight,
  B2BUserRole,
  ConverterService,
  CxDatePipe,
  FeatureDirective,
  FeaturesConfigModule,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  LoggerService,
  OccEndpointsService,
  RoutingService,
  TranslatePipe,
  TranslationService,
  UrlModule,
  UrlPipe,
  UserIdService,
  provideDefaultConfig,
  siteContextGroup_actions,
  tryNormalizeHttpError,
  useFeatureStyles,
  utilsGroup
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-EBCNDD52.js";
import {
  NgSelectModule
} from "./chunk-YMQEGXEG.js";
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
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  NgModule,
  Output,
  Renderer2,
  ViewChild,
  inject,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  catchError,
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  of,
  shareReplay,
  tap
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-unit-order-core.mjs
var UnitOrderAdapter = class {
};
var UnitOrderConnector = class _UnitOrderConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  getUnitOrderHistory(userId, pageSize, currentPage, filters, sort) {
    return this.adapter.loadUnitOrderHistory(userId, pageSize, currentPage, filters, sort);
  }
  getUnitOrderDetail(userId, orderCode) {
    return this.adapter.loadUnitOrderDetail(userId, orderCode);
  }
  static {
    this.ɵfac = function UnitOrderConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitOrderConnector)(ɵɵinject(UnitOrderAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitOrderConnector,
      factory: _UnitOrderConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitOrderConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UnitOrderAdapter
  }], null);
})();
var UnitLevelOrdersViewerGuard = class _UnitLevelOrdersViewerGuard {
  constructor(userAccountFacade, routingService, globalMessageService) {
    this.userAccountFacade = userAccountFacade;
    this.routingService = routingService;
    this.globalMessageService = globalMessageService;
  }
  canActivate() {
    return this.userAccountFacade.get().pipe(filter((user) => !!user && Object.keys(user).length > 0), map((user) => user.roles), map((roles) => {
      const hasRole = Array.isArray(roles) && (roles.includes(B2BUserRight.UNITORDERVIEWER) || roles.includes(B2BUserRole.ADMIN));
      if (!hasRole) {
        this.routingService.go({
          cxRoute: "home"
        });
        this.globalMessageService.add({
          key: "organization.notification.noSufficientPermissions"
        }, GlobalMessageType.MSG_TYPE_WARNING);
      }
      return hasRole;
    }));
  }
  static {
    this.ɵfac = function UnitLevelOrdersViewerGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitLevelOrdersViewerGuard)(ɵɵinject(UserAccountFacade), ɵɵinject(RoutingService), ɵɵinject(GlobalMessageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitLevelOrdersViewerGuard,
      factory: _UnitLevelOrdersViewerGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitLevelOrdersViewerGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UserAccountFacade
  }, {
    type: RoutingService
  }, {
    type: GlobalMessageService
  }], null);
})();
var UNIT_ORDER_FEATURE = "unit order";
var UNIT_ORDERS = "[Unit Order] Unit Orders";
var UNIT_ORDER_DETAILS = "[Unit Order] Order Details";
var LOAD_UNIT_ORDERS = "[Unit Order] Load Unit Orders";
var LOAD_UNIT_ORDERS_FAIL = "[Unit Order] Load Unit Orders Fail";
var LOAD_UNIT_ORDERS_SUCCESS = "[Unit Order] Load Unit Orders Success";
var CLEAR_UNIT_ORDERS = "[Unit Order] Clear Unit Orders";
var LOAD_ORDER_DETAILS = "[Unit Order] Load Unit Order Details";
var LOAD_ORDER_DETAILS_FAIL = "[Unit Order] Load Unit Order Details Fail";
var LOAD_ORDER_DETAILS_SUCCESS = "[Unit Order] Load Unit Order Details Success";
var CLEAR_ORDER_DETAILS = "[Unit Order] Clear Unit Order Details";
var LoadUnitOrders = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(UNIT_ORDERS);
    this.payload = payload;
    this.type = LOAD_UNIT_ORDERS;
  }
};
var LoadUnitOrdersFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(UNIT_ORDERS, payload);
    this.payload = payload;
    this.type = LOAD_UNIT_ORDERS_FAIL;
  }
};
var LoadUnitOrdersSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(UNIT_ORDERS);
    this.payload = payload;
    this.type = LOAD_UNIT_ORDERS_SUCCESS;
  }
};
var ClearUnitOrders = class extends utilsGroup.LoaderResetAction {
  constructor() {
    super(UNIT_ORDERS);
    this.type = CLEAR_UNIT_ORDERS;
  }
};
var LoadOrderDetails = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(UNIT_ORDER_DETAILS);
    this.payload = payload;
    this.type = LOAD_ORDER_DETAILS;
  }
};
var LoadOrderDetailsFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(UNIT_ORDER_DETAILS, payload);
    this.payload = payload;
    this.type = LOAD_ORDER_DETAILS_FAIL;
  }
};
var LoadOrderDetailsSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(UNIT_ORDER_DETAILS);
    this.payload = payload;
    this.type = LOAD_ORDER_DETAILS_SUCCESS;
  }
};
var ClearOrderDetails = class extends utilsGroup.LoaderResetAction {
  constructor() {
    super(UNIT_ORDER_DETAILS);
    this.type = CLEAR_ORDER_DETAILS;
  }
};
var unitOrderGroup_actions = Object.freeze({
  __proto__: null,
  CLEAR_ORDER_DETAILS,
  CLEAR_UNIT_ORDERS,
  ClearOrderDetails,
  ClearUnitOrders,
  LOAD_ORDER_DETAILS,
  LOAD_ORDER_DETAILS_FAIL,
  LOAD_ORDER_DETAILS_SUCCESS,
  LOAD_UNIT_ORDERS,
  LOAD_UNIT_ORDERS_FAIL,
  LOAD_UNIT_ORDERS_SUCCESS,
  LoadOrderDetails,
  LoadOrderDetailsFail,
  LoadOrderDetailsSuccess,
  LoadUnitOrders,
  LoadUnitOrdersFail,
  LoadUnitOrdersSuccess
});
var UnitOrderEffect = class _UnitOrderEffect {
  constructor(actions$, orderConnector) {
    this.actions$ = actions$;
    this.orderConnector = orderConnector;
    this.logger = inject(LoggerService);
    this.loadUnitOrders$ = createEffect(() => this.actions$.pipe(ofType(LOAD_UNIT_ORDERS), map((action) => action.payload), switchMap((payload) => {
      return this.orderConnector.getUnitOrderHistory(payload.userId, payload.pageSize, payload.currentPage, payload.filters, payload.sort).pipe(map((orders) => {
        return new LoadUnitOrdersSuccess(orders);
      }), catchError((error) => of(new LoadUnitOrdersFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.resetUserOrders$ = createEffect(() => this.actions$.pipe(ofType(siteContextGroup_actions.LANGUAGE_CHANGE), map(() => {
      return new ClearUnitOrders();
    })));
    this.loadOrderDetails$ = createEffect(() => this.actions$.pipe(ofType(LOAD_ORDER_DETAILS), map((action) => action.payload), switchMap((payload) => {
      return this.orderConnector.getUnitOrderDetail(payload.userId, payload.orderCode).pipe(map((order) => {
        return new LoadOrderDetailsSuccess(order);
      }), catchError((error) => of(new LoadOrderDetailsFail(tryNormalizeHttpError(error, this.logger)))));
    })));
  }
  static {
    this.ɵfac = function UnitOrderEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitOrderEffect)(ɵɵinject(Actions), ɵɵinject(UnitOrderConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitOrderEffect,
      factory: _UnitOrderEffect.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitOrderEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: UnitOrderConnector
  }], null);
})();
var effects = [UnitOrderEffect];
var initialState = {
  orders: [],
  pagination: {},
  sorts: []
};
var detailInitialState = {};
function historyReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_UNIT_ORDERS_SUCCESS: {
      return action.payload ? action.payload : initialState;
    }
    case LOAD_UNIT_ORDERS_FAIL: {
      return initialState;
    }
  }
  return state;
}
function detailReducer(state = detailInitialState, action) {
  switch (action.type) {
    case LOAD_ORDER_DETAILS_SUCCESS: {
      const order = action.payload;
      return order;
    }
    case LOAD_ORDER_DETAILS_FAIL:
    case LOAD_ORDER_DETAILS: {
      return detailInitialState;
    }
  }
  return state;
}
function getReducers() {
  return {
    orders: utilsGroup.loaderReducer(UNIT_ORDERS, historyReducer),
    orderDetail: utilsGroup.loaderReducer(UNIT_ORDER_DETAILS, detailReducer)
  };
}
var reducerToken = new InjectionToken("UnitOrderReducers");
var reducerProvider = {
  provide: reducerToken,
  useFactory: getReducers
};
var getOrderState = createFeatureSelector(UNIT_ORDER_FEATURE);
var getOrdersState = createSelector(getOrderState, (state) => state.orders);
var getOrdersLoaded = createSelector(getOrdersState, (state) => utilsGroup.loaderSuccessSelector(state));
var getOrders = createSelector(getOrdersState, (state) => utilsGroup.loaderValueSelector(state));
var getOrderDetailState = createSelector(getOrderState, (state) => state.orderDetail);
var getOrderDetails = createSelector(getOrderDetailState, (state) => utilsGroup.loaderValueSelector(state));
var unitOrderGroup_selectors = Object.freeze({
  __proto__: null,
  getOrderDetailState,
  getOrderDetails,
  getOrderState,
  getOrders,
  getOrdersLoaded,
  getOrdersState
});
var UnitOrderService = class _UnitOrderService {
  constructor(store, userIdService, routingService) {
    this.store = store;
    this.userIdService = userIdService;
    this.routingService = routingService;
  }
  /**
   * Returns order history list
   */
  getOrderHistoryList(pageSize) {
    return this.store.pipe(select(getOrdersState), tap((orderListState) => {
      const attemptedLoad = orderListState.loading || orderListState.success || orderListState.error;
      if (!attemptedLoad) {
        this.loadOrderList(pageSize);
      }
    }), map((orderListState) => orderListState.value));
  }
  /**
   * Returns a loaded flag for order history list
   */
  getOrderHistoryListLoaded() {
    return this.store.pipe(select(getOrdersLoaded));
  }
  /**
   * Retrieves an order list
   * @param pageSize page size
   * @param currentPage current page
   * @param sort sort
   */
  loadOrderList(pageSize, currentPage, filters, sort) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        this.store.dispatch(new LoadUnitOrders({
          userId,
          pageSize,
          currentPage,
          filters,
          sort
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Cleaning order list
   */
  clearOrderList() {
    this.store.dispatch(new ClearUnitOrders());
  }
  /**
   * Returns an order's detail
   */
  getOrderDetails() {
    return this.store.pipe(select(getOrderDetails));
  }
  /**
   * Retrieves order's details
   *
   * @param orderCode an order code
   */
  loadOrderDetails(orderCode) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new LoadOrderDetails({
        userId,
        orderCode
      }));
    });
  }
  /**
   * Clears order's details
   */
  clearOrderDetails() {
    this.store.dispatch(new ClearOrderDetails());
  }
  static {
    this.ɵfac = function UnitOrderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitOrderService)(ɵɵinject(Store), ɵɵinject(UserIdService), ɵɵinject(RoutingService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitOrderService,
      factory: _UnitOrderService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitOrderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: UserIdService
  }, {
    type: RoutingService
  }], null);
})();
var UnitOrderStoreModule = class _UnitOrderStoreModule {
  static {
    this.ɵfac = function UnitOrderStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitOrderStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitOrderStoreModule,
      imports: [StoreFeatureModule, EffectsFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [reducerProvider],
      imports: [StoreModule.forFeature(UNIT_ORDER_FEATURE, reducerToken), EffectsModule.forFeature(effects)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitOrderStoreModule, [{
    type: NgModule,
    args: [{
      imports: [StoreModule.forFeature(UNIT_ORDER_FEATURE, reducerToken), EffectsModule.forFeature(effects)],
      providers: [reducerProvider]
    }]
  }], null, null);
})();
var UnitOrderCoreModule = class _UnitOrderCoreModule {
  static forRoot() {
    return {
      ngModule: _UnitOrderCoreModule,
      providers: [{
        provide: UnitOrderFacade,
        useExisting: UnitOrderService
      }, UnitOrderConnector]
    };
  }
  static {
    this.ɵfac = function UnitOrderCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitOrderCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitOrderCoreModule,
      imports: [UnitOrderStoreModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [UnitOrderStoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitOrderCoreModule, [{
    type: NgModule,
    args: [{
      imports: [UnitOrderStoreModule]
    }]
  }], null, null);
})();

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-unit-order-components.mjs
var _c0 = ["filterNav"];
var _c1 = ["filterNavUnit"];
var _c2 = ["filterNavBuyer"];
var _c3 = ["buyerFilterMobileId"];
var _c4 = ["unitFilterMobileId"];
function UnitLevelOrderHistoryFilterComponent_div_141_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1('"', ctx_r6.buyerFilterMobileValue, '"');
  }
}
function UnitLevelOrderHistoryFilterComponent_div_141_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "unitLevelOrderHistory.and"));
  }
}
function UnitLevelOrderHistoryFilterComponent_div_141_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1('"', ctx_r6.unitFilterMobileValue, '"');
  }
}
function UnitLevelOrderHistoryFilterComponent_div_141_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 42)(1, "div", 43);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵtemplate(4, UnitLevelOrderHistoryFilterComponent_div_141_span_4_Template, 2, 1, "span", 44)(5, UnitLevelOrderHistoryFilterComponent_div_141_span_5_Template, 3, 3, "span", 44)(6, UnitLevelOrderHistoryFilterComponent_div_141_span_6_Template, 2, 1, "span", 44);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 45)(8, "button", 46);
    ɵɵlistener("click", function UnitLevelOrderHistoryFilterComponent_div_141_Template_button_click_8_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.clearAll());
    });
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, "unitLevelOrderHistory.yourFilters"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r6.buyerFilterMobileValue);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r6.buyerFilterMobileValue && ctx_r6.unitFilterMobileValue);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r6.unitFilterMobileValue);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 7, "unitLevelOrderHistory.removeAppliedFilters"), " ");
  }
}
var _c5 = (a0) => ({
  orderHistory: a0
});
var _c6 = (a0) => ({
  cxRoute: "unitLevelOrderDetail",
  params: a0
});
var _c7 = () => ({
  cxRoute: "home"
});
function UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15)(1, "cx-pagination", 16);
    ɵɵlistener("viewPageEvent", function UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_div_12_Template_cx_pagination_viewPageEvent_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.pageChange($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const orderHistory_r5 = ɵɵnextContext(2).ngIf;
    ɵɵadvance();
    ɵɵproperty("pagination", orderHistory_r5 == null ? null : orderHistory_r5.pagination);
  }
}
function UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_thead_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead", 17)(1, "th", 18);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "th", 18);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "th", 18);
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(10, "th", 18);
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(13, "th", 18);
    ɵɵtext(14);
    ɵɵpipe(15, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(16, "th", 18);
    ɵɵtext(17);
    ɵɵpipe(18, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 6, "unitLevelOrderHistory.orderId"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 8, "unitLevelOrderHistory.date"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 10, "unitLevelOrderHistory.status"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 12, "unitLevelOrderHistory.buyer"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 14, "unitLevelOrderHistory.unit"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 16, "unitLevelOrderHistory.total"), " ");
  }
}
function UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_thead_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead", 17)(1, "tr")(2, "th", 18);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "th", 18);
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(8, "th", 18);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "th", 18);
    ɵɵtext(12);
    ɵɵpipe(13, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(14, "th", 18);
    ɵɵtext(15);
    ɵɵpipe(16, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(17, "th", 18);
    ɵɵtext(18);
    ɵɵpipe(19, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 6, "unitLevelOrderHistory.orderId"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 8, "unitLevelOrderHistory.date"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 10, "unitLevelOrderHistory.status"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(13, 12, "unitLevelOrderHistory.buyer"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(16, 14, "unitLevelOrderHistory.unit"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(19, 16, "unitLevelOrderHistory.total"), " ");
  }
}
function UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_tr_17_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r7 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(order_r7 == null ? null : order_r7.orgCustomer == null ? null : order_r7.orgCustomer.email);
  }
}
function UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_tr_17_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 29);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r7 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(order_r7 == null ? null : order_r7.orgCustomer == null ? null : order_r7.orgCustomer.email);
  }
}
function UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 19);
    ɵɵlistener("click", function UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_tr_17_Template_tr_click_0_listener() {
      const order_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.goToOrderDetail(order_r7));
    });
    ɵɵelementStart(1, "td", 20)(2, "div", 21);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 22);
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "td", 23)(9, "div", 21);
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "a", 22);
    ɵɵpipe(13, "cxUrl");
    ɵɵtext(14);
    ɵɵpipe(15, "cxDate");
    ɵɵelementEnd()();
    ɵɵelementStart(16, "td", 24)(17, "div", 21);
    ɵɵtext(18);
    ɵɵpipe(19, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(20, "a", 22);
    ɵɵpipe(21, "cxUrl");
    ɵɵtext(22);
    ɵɵpipe(23, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(24, "td", 25)(25, "div", 21);
    ɵɵtext(26);
    ɵɵpipe(27, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(28, "a", 22);
    ɵɵpipe(29, "cxUrl");
    ɵɵtext(30);
    ɵɵtemplate(31, UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_tr_17_ng_container_31_Template, 3, 1, "ng-container", 26)(32, UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_tr_17_ng_container_32_Template, 3, 1, "ng-container", 26);
    ɵɵelementEnd()();
    ɵɵelementStart(33, "td", 27)(34, "div", 21);
    ɵɵtext(35);
    ɵɵpipe(36, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(37, "a", 22);
    ɵɵpipe(38, "cxUrl");
    ɵɵtext(39);
    ɵɵelementEnd()();
    ɵɵelementStart(40, "td", 28)(41, "div", 21);
    ɵɵtext(42);
    ɵɵpipe(43, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(44, "a", 22);
    ɵɵpipe(45, "cxUrl");
    ɵɵtext(46);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const order_r7 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 20, "unitLevelOrderHistory.orderId"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 22, ɵɵpureFunction1(49, _c6, order_r7)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", order_r7 == null ? null : order_r7.code, "");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 24, "unitLevelOrderHistory.date"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(13, 26, ɵɵpureFunction1(51, _c6, order_r7)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(15, 28, order_r7 == null ? null : order_r7.placed, "longDate"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(19, 31, "unitLevelOrderHistory.status"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(21, 33, ɵɵpureFunction1(53, _c6, order_r7)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(23, 35, "orderDetails.statusDisplay_" + (order_r7 == null ? null : order_r7.statusDisplay)), "");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(27, 37, "unitLevelOrderHistory.buyer"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(29, 39, ɵɵpureFunction1(55, _c6, order_r7)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", order_r7 == null ? null : order_r7.orgCustomer == null ? null : order_r7.orgCustomer.name, " ");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "a11yTruncatedTextUnitLevelOrderHistory");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yTruncatedTextUnitLevelOrderHistory");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(36, 41, "unitLevelOrderHistory.unit"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(38, 43, ɵɵpureFunction1(57, _c6, order_r7)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", order_r7 == null ? null : order_r7.orgUnit == null ? null : order_r7.orgUnit.name, "");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(43, 45, "unitLevelOrderHistory.total"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(45, 47, ɵɵpureFunction1(59, _c6, order_r7)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", order_r7 == null ? null : order_r7.total == null ? null : order_r7.total.formattedValue, "");
  }
}
function UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15)(1, "cx-pagination", 30);
    ɵɵlistener("viewPageEvent", function UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_div_29_Template_cx_pagination_viewPageEvent_1_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.pageChange($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const orderHistory_r5 = ɵɵnextContext(2).ngIf;
    ɵɵadvance();
    ɵɵproperty("pagination", orderHistory_r5 == null ? null : orderHistory_r5.pagination);
  }
}
function UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 5)(2, "label", 6)(3, "span");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "cx-sorting", 7);
    ɵɵpipe(7, "cxTranslate");
    ɵɵpipe(8, "async");
    ɵɵpipe(9, "cxTranslate");
    ɵɵlistener("sortListEvent", function UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_Template_cx_sorting_sortListEvent_6_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.changeSortCode($event));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(10, "div", 8);
    ɵɵelement(11, "cx-total", 9);
    ɵɵelementEnd();
    ɵɵtemplate(12, UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_div_12_Template, 2, 1, "div", 10);
    ɵɵelementEnd();
    ɵɵelementStart(13, "table", 11);
    ɵɵtemplate(14, UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_thead_14_Template, 19, 18, "thead", 12)(15, UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_thead_15_Template, 20, 18, "thead", 12);
    ɵɵelementStart(16, "tbody");
    ɵɵtemplate(17, UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_tr_17_Template, 47, 61, "tr", 13);
    ɵɵelementEnd()();
    ɵɵelementStart(18, "div", 14)(19, "label", 6)(20, "span");
    ɵɵtext(21);
    ɵɵpipe(22, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(23, "cx-sorting", 7);
    ɵɵpipe(24, "cxTranslate");
    ɵɵpipe(25, "async");
    ɵɵpipe(26, "cxTranslate");
    ɵɵlistener("sortListEvent", function UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_Template_cx_sorting_sortListEvent_23_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.changeSortCode($event));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(27, "div", 8);
    ɵɵelement(28, "cx-total", 9);
    ɵɵelementEnd();
    ɵɵtemplate(29, UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_div_29_Template, 2, 1, "div", 10);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_24_0;
    const orderHistory_r5 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 19, "unitLevelOrderHistory.sortBy"), " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(7, 21, "unitLevelOrderHistory.sortBy"));
    ɵɵproperty("sortOptions", orderHistory_r5 == null ? null : orderHistory_r5.sorts)("sortLabels", ɵɵpipeBind1(8, 23, ctx_r1.getSortLabels()))("selectedOption", orderHistory_r5 == null ? null : orderHistory_r5.pagination == null ? null : orderHistory_r5.pagination.sort)("ariaLabel", ɵɵpipeBind1(9, 25, "unitLevelOrderHistory.sortOrders"));
    ɵɵadvance(5);
    ɵɵproperty("pagination", orderHistory_r5 == null ? null : orderHistory_r5.pagination);
    ɵɵadvance();
    ɵɵproperty("ngIf", (tmp_13_0 = orderHistory_r5 == null ? null : orderHistory_r5.pagination == null ? null : orderHistory_r5.pagination.totalPages) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : 0 > 1);
    ɵɵadvance(2);
    ɵɵproperty("cxFeature", "!a11yTableHeaderReadout");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "a11yTableHeaderReadout");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", orderHistory_r5 == null ? null : orderHistory_r5.orders);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(22, 27, "unitLevelOrderHistory.sortBy"), " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(24, 29, "unitLevelOrderHistory.sortBy"));
    ɵɵproperty("sortOptions", orderHistory_r5 == null ? null : orderHistory_r5.sorts)("sortLabels", ɵɵpipeBind1(25, 31, ctx_r1.getSortLabels()))("selectedOption", orderHistory_r5 == null ? null : orderHistory_r5.pagination == null ? null : orderHistory_r5.pagination.sort)("ariaLabel", ɵɵpipeBind1(26, 33, "unitLevelOrderHistory.sortOrders"));
    ɵɵadvance(5);
    ɵɵproperty("pagination", orderHistory_r5 == null ? null : orderHistory_r5.pagination);
    ɵɵadvance();
    ɵɵproperty("ngIf", (tmp_24_0 = orderHistory_r5 == null ? null : orderHistory_r5.pagination == null ? null : orderHistory_r5.pagination.totalPages) !== null && tmp_24_0 !== void 0 ? tmp_24_0 : 0 > 1);
  }
}
function UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_template_5_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 32)(1, "div")(2, "div");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 33);
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 3, "unitLevelOrderHistory.noOrders"));
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 5, ɵɵpureFunction0(9, _c7)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(8, 7, "unitLevelOrderHistory.startShopping"));
  }
}
function UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_template_5_div_0_Template, 9, 10, "div", 31);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r1.isLoaded$));
  }
}
function UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div")(2, "cx-unit-level-order-history-filter", 2);
    ɵɵlistener("filterListEvent", function UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_Template_cx_unit_level_order_history_filter_filterListEvent_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.filterChange($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 3);
    ɵɵtemplate(4, UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_container_4_Template, 30, 35, "ng-container", 4)(5, UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_ng_template_5_Template, 2, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const orderHistory_r5 = ctx.ngIf;
    const noOrder_r9 = ɵɵreference(6);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", (tmp_5_0 = orderHistory_r5.pagination == null ? null : orderHistory_r5.pagination.totalResults) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : 0 > 0)("ngIfElse", noOrder_r9);
  }
}
function UnitLevelOrderHistoryComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, UnitLevelOrderHistoryComponent_ng_container_0_ng_container_1_Template, 7, 2, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const type_r10 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", type_r10.orderHistory);
  }
}
function UnitLevelOrderOverviewComponent_div_0_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-card", 4);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(2, 1, ctx_r1.getCostCenterCardContent(order_r1.costCenter)));
  }
}
function UnitLevelOrderOverviewComponent_div_0_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-card", 4);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(2, 1, ctx_r1.getAddressCardContent(order_r1.deliveryAddress)));
  }
}
function UnitLevelOrderOverviewComponent_div_0_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-card", 4);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(2, 1, ctx_r1.getDeliveryModeCardContent(order_r1.deliveryMode)));
  }
}
function UnitLevelOrderOverviewComponent_div_0_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3);
    ɵɵelement(2, "cx-card", 4);
    ɵɵpipe(3, "async");
    ɵɵelement(4, "cx-card", 4);
    ɵɵpipe(5, "async");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("content", ɵɵpipeBind1(3, 2, ctx_r1.getPaymentInfoCardContent(order_r1.paymentInfo)));
    ɵɵadvance(2);
    ɵɵproperty("content", ɵɵpipeBind1(5, 4, ctx_r1.getBillingAddressCardContent(order_r1.paymentInfo == null ? null : order_r1.paymentInfo.billingAddress)));
  }
}
function UnitLevelOrderOverviewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    ɵɵelement(3, "cx-card", 4);
    ɵɵpipe(4, "async");
    ɵɵelement(5, "cx-card", 4);
    ɵɵpipe(6, "cxDate");
    ɵɵpipe(7, "async");
    ɵɵelement(8, "cx-card", 4);
    ɵɵpipe(9, "async");
    ɵɵelement(10, "cx-card", 5);
    ɵɵpipe(11, "async");
    ɵɵelementEnd();
    ɵɵelementStart(12, "div", 3);
    ɵɵelement(13, "cx-card", 4);
    ɵɵpipe(14, "async");
    ɵɵelement(15, "cx-card", 4);
    ɵɵpipe(16, "async");
    ɵɵelement(17, "cx-card", 4);
    ɵɵpipe(18, "async");
    ɵɵtemplate(19, UnitLevelOrderOverviewComponent_div_0_ng_container_19_Template, 3, 3, "ng-container", 6);
    ɵɵelementEnd();
    ɵɵelementStart(20, "div", 3);
    ɵɵtemplate(21, UnitLevelOrderOverviewComponent_div_0_ng_container_21_Template, 3, 3, "ng-container", 6)(22, UnitLevelOrderOverviewComponent_div_0_ng_container_22_Template, 3, 3, "ng-container", 6);
    ɵɵelementEnd();
    ɵɵtemplate(23, UnitLevelOrderOverviewComponent_div_0_ng_container_23_Template, 6, 6, "ng-container", 6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const order_r1 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("content", ɵɵpipeBind1(4, 11, ctx_r1.getOrderCodeCardContent(order_r1.code)));
    ɵɵadvance(2);
    ɵɵproperty("content", ɵɵpipeBind1(7, 15, ctx_r1.getOrderCurrentDateCardContent(ɵɵpipeBind1(6, 13, order_r1.created))));
    ɵɵadvance(3);
    ɵɵproperty("content", ɵɵpipeBind1(9, 17, ctx_r1.getOrderStatusCardContent(order_r1.statusDisplay)));
    ɵɵadvance(2);
    ɵɵproperty("content", ɵɵpipeBind1(11, 19, ctx_r1.getBuyerNameCardContent(order_r1.orgCustomer)));
    ɵɵadvance(3);
    ɵɵproperty("content", ɵɵpipeBind1(14, 21, ctx_r1.getUnitNameCardContent(order_r1.orgUnit == null ? null : order_r1.orgUnit.name)));
    ɵɵadvance(2);
    ɵɵproperty("content", ɵɵpipeBind1(16, 23, ctx_r1.getPurchaseOrderNumber(order_r1.purchaseOrderNumber)));
    ɵɵadvance(2);
    ɵɵproperty("content", ɵɵpipeBind1(18, 25, ctx_r1.getMethodOfPaymentCardContent(order_r1.paymentInfo)));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", order_r1.costCenter);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", order_r1.deliveryAddress);
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r1.deliveryMode);
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r1.paymentInfo);
  }
}
var UnitLevelOrderHistoryFilterComponent = class _UnitLevelOrderHistoryFilterComponent {
  constructor(renderer) {
    this.renderer = renderer;
    this.iconTypes = ICON_TYPE;
    this.filterForm = new FormGroup({
      buyerFilter: new FormControl(),
      unitFilter: new FormControl()
    });
    this.filterFormMobile = new FormGroup({
      buyerFilterMobile: new FormControl(),
      unitFilterMobile: new FormControl()
    });
    this.filterByBuyer = "filterByBuyer";
    this.filterByUnit = "filterByUnit";
    this.filterListEvent = new EventEmitter();
  }
  searchUnitLevelOrders() {
    const buyer = this.filterForm.get("buyerFilter")?.value;
    const unit = this.filterForm.get("unitFilter")?.value;
    this.filterFormMobile.setValue({
      buyerFilterMobile: buyer,
      unitFilterMobile: unit
    });
    this.emitFilterEvent(buyer, unit);
    this.buyerFilterMobileValue = buyer;
    this.unitFilterMobileValue = unit;
  }
  emitFilterEvent(buyer, unit) {
    const filters = [];
    if (buyer?.length) {
      filters.push("user:" + buyer);
    }
    if (unit?.length) {
      filters.push("unit:" + unit);
    }
    filters.unshift(filters.length ? ":" : "");
    this.encodedFilter = filters.join(":");
    this.filterListEvent.emit({
      currentPage: 0,
      filters: this.encodedFilter
    });
  }
  clearAll() {
    const buyer = this.filterForm.get("buyerFilter")?.value;
    const unit = this.filterForm.get("unitFilter")?.value;
    const buyerMobile = this.buyerFilterMobileId?.nativeElement.value;
    const unitMobile = this.unitFilterMobileId?.nativeElement.value;
    if (buyer || unit || buyerMobile || unitMobile) {
      this.filterForm.reset();
      this.filterFormMobile.reset();
      this.searchUnitLevelOrders();
    }
    this.unitFilterMobileValue = null;
    this.buyerFilterMobileValue = null;
  }
  launchMobileFilters() {
    this.renderer.setStyle(this.filterNav.nativeElement, "display", "flex");
    this.renderer.setStyle(this.filterNav.nativeElement, "width", "100%");
    this.renderer.setStyle(document.body, "overflow", "hidden");
  }
  searchUnitLevelOrdersForMobile() {
    this.getFormValuesForMobileAndEmitFilterEvent();
    this.closeFilterNav();
  }
  getFormValuesForMobileAndEmitFilterEvent() {
    const buyer = this.filterFormMobile.get("buyerFilterMobile")?.value;
    this.buyerFilterMobileValue = buyer;
    const unit = this.filterFormMobile.get("unitFilterMobile")?.value;
    this.unitFilterMobileValue = unit;
    this.filterForm.setValue({
      buyerFilter: buyer,
      unitFilter: unit
    });
    this.emitFilterEvent(buyer, unit);
  }
  closeFilterNav() {
    this.renderer.setStyle(this.filterNav.nativeElement, "display", "none");
    this.renderer.setStyle(document.body, "overflow", "");
    this.renderer.setStyle(this.filterNavUnit.nativeElement, "display", "none");
    this.renderer.setStyle(this.filterNavBuyer.nativeElement, "display", "none");
    this.renderer.setStyle(this.filterNav.nativeElement, "width", "0");
    this.filterFormMobile.patchValue({
      buyerFilterMobile: this.buyerFilterMobileValue,
      unitFilterMobile: this.unitFilterMobileValue
    });
  }
  backFilterSubNav() {
    this.renderer.setStyle(this.filterNavUnit.nativeElement, "display", "none");
    this.renderer.setStyle(this.filterNavBuyer.nativeElement, "display", "none");
    this.renderer.setStyle(this.filterNav.nativeElement, "display", "flex");
    this.filterFormMobile.patchValue({
      buyerFilterMobile: this.buyerFilterMobileValue,
      unitFilterMobile: this.unitFilterMobileValue
    });
  }
  launchSubNav(option) {
    this.renderer.setStyle(this.filterNav.nativeElement, "display", "none");
    if (option === this.filterByUnit) {
      this.renderer.setStyle(this.filterNavUnit.nativeElement, "display", "block");
    } else if (option === this.filterByBuyer) {
      this.renderer.setStyle(this.filterNavBuyer.nativeElement, "display", "block");
    }
  }
  clearUnit() {
    this.filterForm.get("unitFilter")?.reset();
    this.searchUnitLevelOrders();
  }
  clearBuyer() {
    this.filterForm.get("buyerFilter")?.reset();
    this.searchUnitLevelOrders();
  }
  clearUnitMobile() {
    this.filterFormMobile.get("unitFilterMobile")?.reset();
    this.renderer.setStyle(document.body, "overflow", "");
    this.unitFilterMobileValue = null;
    this.getFormValuesForMobileAndEmitFilterEvent();
  }
  clearBuyerMobile() {
    this.filterFormMobile.get("buyerFilterMobile")?.reset();
    this.renderer.setStyle(document.body, "overflow", "");
    this.buyerFilterMobileValue = null;
    this.getFormValuesForMobileAndEmitFilterEvent();
  }
  searchBuyer(inputElement) {
    const value = inputElement.value;
    if (!value || value === "") {
      this.clearBuyer();
    }
  }
  searchUnit(inputElement) {
    const value = inputElement.value;
    if (!value || value === "") {
      this.clearUnit();
    }
  }
  static {
    this.ɵfac = function UnitLevelOrderHistoryFilterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitLevelOrderHistoryFilterComponent)(ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitLevelOrderHistoryFilterComponent,
      selectors: [["cx-unit-level-order-history-filter"]],
      viewQuery: function UnitLevelOrderHistoryFilterComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5, ElementRef);
          ɵɵviewQuery(_c1, 5, ElementRef);
          ɵɵviewQuery(_c2, 5, ElementRef);
          ɵɵviewQuery(_c3, 5, ElementRef);
          ɵɵviewQuery(_c4, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterNav = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterNavUnit = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterNavBuyer = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buyerFilterMobileId = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.unitFilterMobileId = _t.first);
        }
      },
      outputs: {
        filterListEvent: "filterListEvent"
      },
      standalone: false,
      decls: 142,
      vars: 168,
      consts: [["filterNav", ""], ["filterNavBuyer", ""], ["buyerFilterMobileId", ""], ["filterNavUnit", ""], ["unitFilterMobileId", ""], ["buyerFilterId", ""], ["unitFilterId", ""], [1, "cx-filter"], [1, "cx-filter-list"], ["id", "closeFilterNavBtn", "type", "button", 3, "click", "title"], ["aria-hidden", "true", 3, "type"], [1, "cx-filter-list", "cx-filter-list-border", 3, "click"], ["type", "button"], [3, "formGroup"], ["id", "cx-unit-level-order-history-filter-nav-sub-buyer", 1, "cx-filter-nav"], [1, "cx-filter-nav-div"], [1, "cx-filter-back-button", 3, "click"], ["type", "button", 3, "click", "title"], ["formControlName", "buyerFilterMobile", 1, "form-control", "buyer-filter-mobile", 3, "input", "keydown.enter", "placeholder"], ["id", "clearBuyerMobileBtn", 1, "reset", "cx-unit-level-order-history-filter-reset-button", 3, "mousedown", "keydown.enter"], [3, "type"], ["role", "presentation", 1, "search-icon"], [1, "search-icon-filter", 3, "type"], [1, "cx-clear-btn-container"], ["type", "button", 1, "cx-action-link", "cx-clear-btn", 3, "click"], ["id", "cx-unit-level-order-history-filter-nav-sub-unit", 1, "cx-filter-nav"], ["formControlName", "unitFilterMobile", 1, "form-control", "unit-filter-mobile", 3, "input", "keydown.enter", "placeholder"], ["id", "clearUnitMobileBtn", 1, "reset", "cx-unit-level-order-history-filter-reset-button", 3, "mousedown", "keydown.enter"], [3, "keydown.enter", "formGroup"], [1, "cx-unit-level-order-history-filter-div-wrapper"], ["role", "search", 1, "cx-unit-level-order-history-filter-label-wrapper"], [1, "cx-unit-level-order-history-filter-label"], ["formControlName", "buyerFilter", 1, "form-control", "cx-unit-level-order-history-filter-input", 3, "input", "placeholder"], ["id", "clearBuyerBtn", 1, "reset", "cx-unit-level-order-history-filter-reset-button", 3, "mousedown", "keydown.enter"], ["formControlName", "unitFilter", 1, "form-control", "cx-unit-level-order-history-filter-input", 3, "input", "placeholder"], ["id", "clearUnitBtn", "type", "button", 1, "reset", "cx-unit-level-order-history-filter-reset-button", 3, "mousedown", "keydown.enter"], [1, "cx-unit-level-order-history-filter-form-button-block"], ["id", "clearAllBtn", "type", "button", 1, "cx-action-link", "cx-clear-btn", 3, "click"], ["id", "searchUnitLevelOrdersBtn", "type", "button", 1, "btn", "btn-primary", "unit-level-order-history-search", 3, "click"], [1, "cx-unit-level-order-history-filter-form-mobile"], ["id", "filterByBtn", 1, "btn", "btn-action", "btn-block", "dialog-trigger", 3, "click"], ["class", "cx-unit-level-order-history-filters-show-and-remove", 4, "ngIf"], [1, "cx-unit-level-order-history-filters-show-and-remove"], [1, "cx-selected-filters"], [4, "ngIf"], [1, "cx-clear-filter"], ["id", "removeAppliedFiltersBtn", "type", "button", 1, "cx-action-link", "cx-clear-btn", 3, "click"]],
      template: function UnitLevelOrderHistoryFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 7, 0);
          ɵɵpipe(2, "cxTranslate");
          ɵɵelementStart(3, "div", 8)(4, "span");
          ɵɵtext(5);
          ɵɵpipe(6, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(7, "button", 9);
          ɵɵpipe(8, "cxTranslate");
          ɵɵpipe(9, "cxTranslate");
          ɵɵlistener("click", function UnitLevelOrderHistoryFilterComponent_Template_button_click_7_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.closeFilterNav());
          });
          ɵɵelement(10, "cx-icon", 10);
          ɵɵelementEnd()();
          ɵɵelementStart(11, "div", 11);
          ɵɵlistener("click", function UnitLevelOrderHistoryFilterComponent_Template_div_click_11_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.launchSubNav(ctx.filterByBuyer));
          });
          ɵɵelementStart(12, "span");
          ɵɵtext(13);
          ɵɵpipe(14, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(15, "button", 12);
          ɵɵpipe(16, "cxTranslate");
          ɵɵpipe(17, "cxTranslate");
          ɵɵelement(18, "cx-icon", 10);
          ɵɵelementEnd()();
          ɵɵelementStart(19, "div", 11);
          ɵɵlistener("click", function UnitLevelOrderHistoryFilterComponent_Template_div_click_19_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.launchSubNav(ctx.filterByUnit));
          });
          ɵɵelementStart(20, "span");
          ɵɵtext(21);
          ɵɵpipe(22, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(23, "button", 12);
          ɵɵpipe(24, "cxTranslate");
          ɵɵpipe(25, "cxTranslate");
          ɵɵelement(26, "cx-icon", 10);
          ɵɵelementEnd()()();
          ɵɵelementStart(27, "form", 13)(28, "div", 14, 1);
          ɵɵpipe(30, "cxTranslate");
          ɵɵelementStart(31, "div", 15)(32, "div", 8)(33, "div", 16);
          ɵɵlistener("click", function UnitLevelOrderHistoryFilterComponent_Template_div_click_33_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.backFilterSubNav());
          });
          ɵɵelementStart(34, "button", 12);
          ɵɵelement(35, "cx-icon", 10);
          ɵɵelementEnd();
          ɵɵelementStart(36, "span");
          ɵɵtext(37);
          ɵɵpipe(38, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(39, "button", 17);
          ɵɵpipe(40, "cxTranslate");
          ɵɵpipe(41, "cxTranslate");
          ɵɵlistener("click", function UnitLevelOrderHistoryFilterComponent_Template_button_click_39_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.closeFilterNav());
          });
          ɵɵelement(42, "cx-icon", 10);
          ɵɵelementEnd()();
          ɵɵelementStart(43, "label")(44, "input", 18, 2);
          ɵɵpipe(46, "cxTranslate");
          ɵɵpipe(47, "cxTranslate");
          ɵɵlistener("input", function UnitLevelOrderHistoryFilterComponent_Template_input_input_44_listener() {
            ɵɵrestoreView(_r1);
            const buyerFilterMobileId_r2 = ɵɵreference(45);
            return ɵɵresetView(ctx.searchBuyer(buyerFilterMobileId_r2));
          })("keydown.enter", function UnitLevelOrderHistoryFilterComponent_Template_input_keydown_enter_44_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.searchUnitLevelOrdersForMobile());
          });
          ɵɵelementEnd();
          ɵɵelementStart(48, "button", 19);
          ɵɵpipe(49, "cxTranslate");
          ɵɵpipe(50, "cxTranslate");
          ɵɵlistener("mousedown", function UnitLevelOrderHistoryFilterComponent_Template_button_mousedown_48_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.clearBuyerMobile());
          })("keydown.enter", function UnitLevelOrderHistoryFilterComponent_Template_button_keydown_enter_48_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.clearBuyerMobile());
          });
          ɵɵelement(51, "cx-icon", 20);
          ɵɵelementEnd();
          ɵɵelementStart(52, "div", 21);
          ɵɵelement(53, "cx-icon", 22);
          ɵɵpipe(54, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(55, "div", 23)(56, "button", 24);
          ɵɵlistener("click", function UnitLevelOrderHistoryFilterComponent_Template_button_click_56_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.clearBuyerMobile());
          });
          ɵɵtext(57);
          ɵɵpipe(58, "cxTranslate");
          ɵɵelementEnd()()()();
          ɵɵelementStart(59, "div", 25, 3);
          ɵɵpipe(61, "cxTranslate");
          ɵɵelementStart(62, "div", 15)(63, "div", 8)(64, "div", 16);
          ɵɵlistener("click", function UnitLevelOrderHistoryFilterComponent_Template_div_click_64_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.backFilterSubNav());
          });
          ɵɵelementStart(65, "button", 12);
          ɵɵelement(66, "cx-icon", 10);
          ɵɵelementEnd();
          ɵɵelementStart(67, "span");
          ɵɵtext(68);
          ɵɵpipe(69, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(70, "button", 17);
          ɵɵpipe(71, "cxTranslate");
          ɵɵpipe(72, "cxTranslate");
          ɵɵlistener("click", function UnitLevelOrderHistoryFilterComponent_Template_button_click_70_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.closeFilterNav());
          });
          ɵɵelement(73, "cx-icon", 10);
          ɵɵelementEnd()();
          ɵɵelementStart(74, "label")(75, "input", 26, 4);
          ɵɵpipe(77, "cxTranslate");
          ɵɵpipe(78, "cxTranslate");
          ɵɵlistener("input", function UnitLevelOrderHistoryFilterComponent_Template_input_input_75_listener() {
            ɵɵrestoreView(_r1);
            const unitFilterMobileId_r3 = ɵɵreference(76);
            return ɵɵresetView(ctx.searchUnit(unitFilterMobileId_r3));
          })("keydown.enter", function UnitLevelOrderHistoryFilterComponent_Template_input_keydown_enter_75_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.searchUnitLevelOrdersForMobile());
          });
          ɵɵelementEnd();
          ɵɵelementStart(79, "button", 27);
          ɵɵpipe(80, "cxTranslate");
          ɵɵpipe(81, "cxTranslate");
          ɵɵlistener("mousedown", function UnitLevelOrderHistoryFilterComponent_Template_button_mousedown_79_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.clearUnitMobile());
          })("keydown.enter", function UnitLevelOrderHistoryFilterComponent_Template_button_keydown_enter_79_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.clearUnitMobile());
          });
          ɵɵelement(82, "cx-icon", 20);
          ɵɵelementEnd();
          ɵɵelementStart(83, "div", 21);
          ɵɵelement(84, "cx-icon", 22);
          ɵɵpipe(85, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(86, "div", 23)(87, "button", 24);
          ɵɵlistener("click", function UnitLevelOrderHistoryFilterComponent_Template_button_click_87_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.clearUnitMobile());
          });
          ɵɵtext(88);
          ɵɵpipe(89, "cxTranslate");
          ɵɵelementEnd()()()()();
          ɵɵelementStart(90, "form", 28);
          ɵɵlistener("keydown.enter", function UnitLevelOrderHistoryFilterComponent_Template_form_keydown_enter_90_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.searchUnitLevelOrders());
          });
          ɵɵelementStart(91, "div")(92, "div", 29)(93, "div")(94, "span");
          ɵɵtext(95);
          ɵɵpipe(96, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(97, "div", 30);
          ɵɵpipe(98, "cxTranslate");
          ɵɵelementStart(99, "label", 31)(100, "input", 32, 5);
          ɵɵpipe(102, "cxTranslate");
          ɵɵpipe(103, "cxTranslate");
          ɵɵlistener("input", function UnitLevelOrderHistoryFilterComponent_Template_input_input_100_listener() {
            ɵɵrestoreView(_r1);
            const buyerFilterId_r4 = ɵɵreference(101);
            return ɵɵresetView(ctx.searchBuyer(buyerFilterId_r4));
          });
          ɵɵelementEnd();
          ɵɵelementStart(104, "button", 33);
          ɵɵpipe(105, "cxTranslate");
          ɵɵpipe(106, "cxTranslate");
          ɵɵlistener("mousedown", function UnitLevelOrderHistoryFilterComponent_Template_button_mousedown_104_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.clearBuyer());
          })("keydown.enter", function UnitLevelOrderHistoryFilterComponent_Template_button_keydown_enter_104_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.clearBuyer());
          });
          ɵɵelement(107, "cx-icon", 20);
          ɵɵelementEnd();
          ɵɵelementStart(108, "div", 21);
          ɵɵelement(109, "cx-icon", 22);
          ɵɵpipe(110, "cxTranslate");
          ɵɵelementEnd()()()();
          ɵɵelementStart(111, "div")(112, "span");
          ɵɵtext(113);
          ɵɵpipe(114, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(115, "div", 30);
          ɵɵpipe(116, "cxTranslate");
          ɵɵelementStart(117, "label", 31)(118, "input", 34, 6);
          ɵɵpipe(120, "cxTranslate");
          ɵɵpipe(121, "cxTranslate");
          ɵɵlistener("input", function UnitLevelOrderHistoryFilterComponent_Template_input_input_118_listener() {
            ɵɵrestoreView(_r1);
            const unitFilterId_r5 = ɵɵreference(119);
            return ɵɵresetView(ctx.searchUnit(unitFilterId_r5));
          });
          ɵɵelementEnd();
          ɵɵelementStart(122, "button", 35);
          ɵɵpipe(123, "cxTranslate");
          ɵɵpipe(124, "cxTranslate");
          ɵɵlistener("mousedown", function UnitLevelOrderHistoryFilterComponent_Template_button_mousedown_122_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.clearUnit());
          })("keydown.enter", function UnitLevelOrderHistoryFilterComponent_Template_button_keydown_enter_122_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.clearUnit());
          });
          ɵɵelement(125, "cx-icon", 20);
          ɵɵelementEnd();
          ɵɵelementStart(126, "div", 21);
          ɵɵelement(127, "cx-icon", 22);
          ɵɵpipe(128, "cxTranslate");
          ɵɵelementEnd()()()()();
          ɵɵelementStart(129, "div", 36)(130, "button", 37);
          ɵɵlistener("click", function UnitLevelOrderHistoryFilterComponent_Template_button_click_130_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.clearAll());
          });
          ɵɵtext(131);
          ɵɵpipe(132, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(133, "button", 38);
          ɵɵlistener("click", function UnitLevelOrderHistoryFilterComponent_Template_button_click_133_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.searchUnitLevelOrders());
          });
          ɵɵtext(134);
          ɵɵpipe(135, "cxTranslate");
          ɵɵelementEnd()()()();
          ɵɵelementStart(136, "div", 39)(137, "button", 40);
          ɵɵlistener("click", function UnitLevelOrderHistoryFilterComponent_Template_button_click_137_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.launchMobileFilters());
          });
          ɵɵelement(138, "cx-icon", 20);
          ɵɵtext(139);
          ɵɵpipe(140, "cxTranslate");
          ɵɵelementEnd();
          ɵɵtemplate(141, UnitLevelOrderHistoryFilterComponent_div_141_Template, 11, 9, "div", 41);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const buyerFilterMobileId_r2 = ɵɵreference(45);
          const unitFilterMobileId_r3 = ɵɵreference(76);
          const buyerFilterId_r4 = ɵɵreference(101);
          const unitFilterId_r5 = ɵɵreference(119);
          ɵɵattribute("aria-label", ɵɵpipeBind1(2, 74, "unitLevelOrderHistory.filterBy"));
          ɵɵadvance(5);
          ɵɵtextInterpolate(ɵɵpipeBind1(6, 76, "unitLevelOrderHistory.filterBy"));
          ɵɵadvance(2);
          ɵɵpropertyInterpolate("title", ɵɵpipeBind1(8, 78, "common.close"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(9, 80, "common.close"));
          ɵɵadvance(3);
          ɵɵproperty("type", ctx.iconTypes.CLOSE);
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(14, 82, "unitLevelOrderHistory.buyer"));
          ɵɵadvance(2);
          ɵɵattribute("aria-label", ɵɵpipeBind1(16, 84, "unitLevelOrderHistory.filterByBuyerLabel"))("title", ɵɵpipeBind1(17, 86, "unitLevelOrderHistory.filterByBuyerLabel"));
          ɵɵadvance(3);
          ɵɵproperty("type", ctx.iconTypes.CARET_RIGHT);
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(22, 88, "unitLevelOrderHistory.unit"));
          ɵɵadvance(2);
          ɵɵattribute("aria-label", ɵɵpipeBind1(24, 90, "unitLevelOrderHistory.filterByUnitLabel"))("title", ɵɵpipeBind1(25, 92, "unitLevelOrderHistory.filterByUnitLabel"));
          ɵɵadvance(3);
          ɵɵproperty("type", ctx.iconTypes.CARET_RIGHT);
          ɵɵadvance();
          ɵɵproperty("formGroup", ctx.filterFormMobile);
          ɵɵadvance();
          ɵɵattribute("aria-label", ɵɵpipeBind1(30, 94, "unitLevelOrderHistory.filterBy"));
          ɵɵadvance(7);
          ɵɵproperty("type", ctx.iconTypes.CARET_LEFT);
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind1(38, 96, "unitLevelOrderHistory.filterByBuyer"));
          ɵɵadvance(2);
          ɵɵpropertyInterpolate("title", ɵɵpipeBind1(40, 98, "common.close"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(41, 100, "common.close"));
          ɵɵadvance(3);
          ɵɵproperty("type", ctx.iconTypes.CLOSE);
          ɵɵadvance();
          ɵɵclassProp("dirty", !!buyerFilterMobileId_r2.value);
          ɵɵadvance();
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(46, 102, "unitLevelOrderHistory.filterByBuyerPlaceholder"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(47, 104, "unitLevelOrderHistory.filterByBuyerPlaceholder"));
          ɵɵadvance(4);
          ɵɵattribute("aria-label", ɵɵpipeBind1(49, 106, "common.reset"))("title", ɵɵpipeBind1(50, 108, "common.reset"));
          ɵɵadvance(3);
          ɵɵproperty("type", ctx.iconTypes.RESET);
          ɵɵadvance(2);
          ɵɵproperty("type", ctx.iconTypes.SEARCH);
          ɵɵattribute("title", ɵɵpipeBind1(54, 110, "common.search"));
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(58, 112, "unitLevelOrderHistory.clearAll"), " ");
          ɵɵadvance(2);
          ɵɵattribute("aria-label", ɵɵpipeBind1(61, 114, "unitLevelOrderHistory.filterBy"));
          ɵɵadvance(7);
          ɵɵproperty("type", ctx.iconTypes.CARET_LEFT);
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind1(69, 116, "unitLevelOrderHistory.filterByUnit"));
          ɵɵadvance(2);
          ɵɵpropertyInterpolate("title", ɵɵpipeBind1(71, 118, "common.close"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(72, 120, "common.close"));
          ɵɵadvance(3);
          ɵɵproperty("type", ctx.iconTypes.CLOSE);
          ɵɵadvance();
          ɵɵclassProp("dirty", !!unitFilterMobileId_r3.value);
          ɵɵadvance();
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(77, 122, "unitLevelOrderHistory.filterByUnitPlaceholder"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(78, 124, "unitLevelOrderHistory.filterByUnitPlaceholder"));
          ɵɵadvance(4);
          ɵɵattribute("aria-label", ɵɵpipeBind1(80, 126, "common.reset"))("title", ɵɵpipeBind1(81, 128, "common.reset"));
          ɵɵadvance(3);
          ɵɵproperty("type", ctx.iconTypes.RESET);
          ɵɵadvance(2);
          ɵɵproperty("type", ctx.iconTypes.SEARCH);
          ɵɵattribute("title", ɵɵpipeBind1(85, 130, "common.search"));
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(89, 132, "unitLevelOrderHistory.clearAll"), " ");
          ɵɵadvance(2);
          ɵɵproperty("formGroup", ctx.filterForm);
          ɵɵadvance(5);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(96, 134, "unitLevelOrderHistory.buyer"), " ");
          ɵɵadvance(2);
          ɵɵattribute("aria-label", ɵɵpipeBind1(98, 136, "unitLevelOrderHistory.filterByBuyerAriaLabel"));
          ɵɵadvance(2);
          ɵɵclassProp("dirty", !!buyerFilterId_r4.value);
          ɵɵadvance();
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(102, 138, "unitLevelOrderHistory.filterByBuyerPlaceholder"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(103, 140, "unitLevelOrderHistory.filterByBuyerPlaceholder"));
          ɵɵadvance(4);
          ɵɵattribute("aria-label", ɵɵpipeBind1(105, 142, "common.reset"))("title", ɵɵpipeBind1(106, 144, "common.reset"));
          ɵɵadvance(3);
          ɵɵproperty("type", ctx.iconTypes.RESET);
          ɵɵadvance(2);
          ɵɵproperty("type", ctx.iconTypes.SEARCH);
          ɵɵattribute("title", ɵɵpipeBind1(110, 146, "common.search"));
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(114, 148, "unitLevelOrderHistory.unit"), " ");
          ɵɵadvance(2);
          ɵɵattribute("aria-label", ɵɵpipeBind1(116, 150, "unitLevelOrderHistory.filterByUnitAriaLabel"));
          ɵɵadvance(2);
          ɵɵclassProp("dirty", !!unitFilterId_r5.value);
          ɵɵadvance();
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(120, 152, "unitLevelOrderHistory.filterByUnitPlaceholder"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(121, 154, "unitLevelOrderHistory.filterByUnitPlaceholder"));
          ɵɵadvance(4);
          ɵɵattribute("aria-label", ɵɵpipeBind1(123, 156, "common.reset"))("title", ɵɵpipeBind1(124, 158, "common.reset"));
          ɵɵadvance(3);
          ɵɵproperty("type", ctx.iconTypes.RESET);
          ɵɵadvance(2);
          ɵɵproperty("type", ctx.iconTypes.SEARCH);
          ɵɵattribute("title", ɵɵpipeBind1(128, 160, "common.search"));
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(132, 162, "unitLevelOrderHistory.clearAll"), " ");
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(135, 164, "unitLevelOrderHistory.search"), " ");
          ɵɵadvance(4);
          ɵɵproperty("type", ctx.iconTypes.FILTER);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(140, 166, "unitLevelOrderHistory.filterBy"), " ");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.buyerFilterMobileValue || ctx.unitFilterMobileValue);
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, IconComponent, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitLevelOrderHistoryFilterComponent, [{
    type: Component,
    args: [{
      selector: "cx-unit-level-order-history-filter",
      standalone: false,
      template: `<div
  #filterNav
  class="cx-filter"
  [attr.aria-label]="'unitLevelOrderHistory.filterBy' | cxTranslate"
>
  <div class="cx-filter-list">
    <span>{{ 'unitLevelOrderHistory.filterBy' | cxTranslate }}</span>
    <button
      id="closeFilterNavBtn"
      type="button"
      title="{{ 'common.close' | cxTranslate }}"
      [attr.aria-label]="'common.close' | cxTranslate"
      (click)="closeFilterNav()"
    >
      <cx-icon aria-hidden="true" [type]="iconTypes.CLOSE"></cx-icon>
    </button>
  </div>

  <div
    class="cx-filter-list cx-filter-list-border"
    (click)="launchSubNav(filterByBuyer)"
  >
    <span>{{ 'unitLevelOrderHistory.buyer' | cxTranslate }}</span>
    <button
      type="button"
      [attr.aria-label]="
        'unitLevelOrderHistory.filterByBuyerLabel' | cxTranslate
      "
      [attr.title]="'unitLevelOrderHistory.filterByBuyerLabel' | cxTranslate"
    >
      <cx-icon aria-hidden="true" [type]="iconTypes.CARET_RIGHT"></cx-icon>
    </button>
  </div>

  <div
    class="cx-filter-list cx-filter-list-border"
    (click)="launchSubNav(filterByUnit)"
  >
    <span>{{ 'unitLevelOrderHistory.unit' | cxTranslate }}</span>
    <button
      type="button"
      [attr.aria-label]="
        'unitLevelOrderHistory.filterByUnitLabel' | cxTranslate
      "
      [attr.title]="'unitLevelOrderHistory.filterByUnitLabel' | cxTranslate"
    >
      <cx-icon aria-hidden="true" [type]="iconTypes.CARET_RIGHT"></cx-icon>
    </button>
  </div>
</div>

<form [formGroup]="filterFormMobile">
  <div
    id="cx-unit-level-order-history-filter-nav-sub-buyer"
    #filterNavBuyer
    class="cx-filter-nav"
    [attr.aria-label]="'unitLevelOrderHistory.filterBy' | cxTranslate"
  >
    <div class="cx-filter-nav-div">
      <div class="cx-filter-list">
        <div class="cx-filter-back-button" (click)="backFilterSubNav()">
          <button type="button">
            <cx-icon aria-hidden="true" [type]="iconTypes.CARET_LEFT"></cx-icon>
          </button>
          <span>{{ 'unitLevelOrderHistory.filterByBuyer' | cxTranslate }}</span>
        </div>

        <button
          type="button"
          title="{{ 'common.close' | cxTranslate }}"
          [attr.aria-label]="'common.close' | cxTranslate"
          (click)="closeFilterNav()"
        >
          <cx-icon aria-hidden="true" [type]="iconTypes.CLOSE"></cx-icon>
        </button>
      </div>

      <label [class.dirty]="!!buyerFilterMobileId.value">
        <input
          #buyerFilterMobileId
          formControlName="buyerFilterMobile"
          class="form-control buyer-filter-mobile"
          (input)="searchBuyer(buyerFilterMobileId)"
          (keydown.enter)="searchUnitLevelOrdersForMobile()"
          [attr.aria-label]="
            'unitLevelOrderHistory.filterByBuyerPlaceholder' | cxTranslate
          "
          placeholder="{{
            'unitLevelOrderHistory.filterByBuyerPlaceholder' | cxTranslate
          }}"
        />

        <button
          id="clearBuyerMobileBtn"
          [attr.aria-label]="'common.reset' | cxTranslate"
          [attr.title]="'common.reset' | cxTranslate"
          (mousedown)="clearBuyerMobile()"
          (keydown.enter)="clearBuyerMobile()"
          class="reset cx-unit-level-order-history-filter-reset-button"
        >
          <cx-icon [type]="iconTypes.RESET"></cx-icon>
        </button>

        <div role="presentation" class="search-icon">
          <cx-icon
            class="search-icon-filter"
            [attr.title]="'common.search' | cxTranslate"
            [type]="iconTypes.SEARCH"
          ></cx-icon>
        </div>
      </label>

      <div class="cx-clear-btn-container">
        <button
          class="cx-action-link cx-clear-btn"
          type="button"
          (click)="clearBuyerMobile()"
        >
          {{ 'unitLevelOrderHistory.clearAll' | cxTranslate }}
        </button>
      </div>
    </div>
  </div>

  <div
    id="cx-unit-level-order-history-filter-nav-sub-unit"
    #filterNavUnit
    class="cx-filter-nav"
    [attr.aria-label]="'unitLevelOrderHistory.filterBy' | cxTranslate"
  >
    <div class="cx-filter-nav-div">
      <div class="cx-filter-list">
        <div class="cx-filter-back-button" (click)="backFilterSubNav()">
          <button type="button">
            <cx-icon aria-hidden="true" [type]="iconTypes.CARET_LEFT"></cx-icon>
          </button>
          <span>{{ 'unitLevelOrderHistory.filterByUnit' | cxTranslate }}</span>
        </div>

        <button
          type="button"
          title="{{ 'common.close' | cxTranslate }}"
          [attr.aria-label]="'common.close' | cxTranslate"
          (click)="closeFilterNav()"
        >
          <cx-icon aria-hidden="true" [type]="iconTypes.CLOSE"></cx-icon>
        </button>
      </div>

      <label [class.dirty]="!!unitFilterMobileId.value">
        <input
          #unitFilterMobileId
          formControlName="unitFilterMobile"
          class="form-control unit-filter-mobile"
          (input)="searchUnit(unitFilterMobileId)"
          (keydown.enter)="searchUnitLevelOrdersForMobile()"
          [attr.aria-label]="
            'unitLevelOrderHistory.filterByUnitPlaceholder' | cxTranslate
          "
          placeholder="{{
            'unitLevelOrderHistory.filterByUnitPlaceholder' | cxTranslate
          }}"
        />
        <button
          id="clearUnitMobileBtn"
          [attr.aria-label]="'common.reset' | cxTranslate"
          [attr.title]="'common.reset' | cxTranslate"
          (mousedown)="clearUnitMobile()"
          (keydown.enter)="clearUnitMobile()"
          class="reset cx-unit-level-order-history-filter-reset-button"
        >
          <cx-icon [type]="iconTypes.RESET"></cx-icon>
        </button>

        <div role="presentation" class="search-icon">
          <cx-icon
            class="search-icon-filter"
            [attr.title]="'common.search' | cxTranslate"
            [type]="iconTypes.SEARCH"
          ></cx-icon>
        </div>
      </label>

      <div class="cx-clear-btn-container">
        <button
          class="cx-action-link cx-clear-btn"
          type="button"
          (click)="clearUnitMobile()"
        >
          {{ 'unitLevelOrderHistory.clearAll' | cxTranslate }}
        </button>
      </div>
    </div>
  </div>
</form>

<form [formGroup]="filterForm" (keydown.enter)="searchUnitLevelOrders()">
  <div>
    <div class="cx-unit-level-order-history-filter-div-wrapper">
      <div>
        <span>
          {{ 'unitLevelOrderHistory.buyer' | cxTranslate }}
        </span>
        <div
          role="search"
          class="cx-unit-level-order-history-filter-label-wrapper"
          [attr.aria-label]="
            'unitLevelOrderHistory.filterByBuyerAriaLabel' | cxTranslate
          "
        >
          <label
            class="cx-unit-level-order-history-filter-label"
            [class.dirty]="!!buyerFilterId.value"
          >
            <input
              #buyerFilterId
              formControlName="buyerFilter"
              class="form-control cx-unit-level-order-history-filter-input"
              (input)="searchBuyer(buyerFilterId)"
              [attr.aria-label]="
                'unitLevelOrderHistory.filterByBuyerPlaceholder' | cxTranslate
              "
              placeholder="{{
                'unitLevelOrderHistory.filterByBuyerPlaceholder' | cxTranslate
              }}"
            />
            <button
              id="clearBuyerBtn"
              [attr.aria-label]="'common.reset' | cxTranslate"
              [attr.title]="'common.reset' | cxTranslate"
              (mousedown)="clearBuyer()"
              (keydown.enter)="clearBuyer()"
              class="reset cx-unit-level-order-history-filter-reset-button"
            >
              <cx-icon [type]="iconTypes.RESET"></cx-icon>
            </button>

            <div role="presentation" class="search-icon">
              <cx-icon
                class="search-icon-filter"
                [attr.title]="'common.search' | cxTranslate"
                [type]="iconTypes.SEARCH"
              ></cx-icon>
            </div>
          </label>
        </div>
      </div>

      <div>
        <span>
          {{ 'unitLevelOrderHistory.unit' | cxTranslate }}
        </span>
        <div
          role="search"
          class="cx-unit-level-order-history-filter-label-wrapper"
          [attr.aria-label]="
            'unitLevelOrderHistory.filterByUnitAriaLabel' | cxTranslate
          "
        >
          <label
            class="cx-unit-level-order-history-filter-label"
            [class.dirty]="!!unitFilterId.value"
          >
            <input
              #unitFilterId
              formControlName="unitFilter"
              class="form-control cx-unit-level-order-history-filter-input"
              (input)="searchUnit(unitFilterId)"
              [attr.aria-label]="
                'unitLevelOrderHistory.filterByUnitPlaceholder' | cxTranslate
              "
              placeholder="{{
                'unitLevelOrderHistory.filterByUnitPlaceholder' | cxTranslate
              }}"
            />
            <button
              id="clearUnitBtn"
              type="button"
              [attr.aria-label]="'common.reset' | cxTranslate"
              [attr.title]="'common.reset' | cxTranslate"
              (mousedown)="clearUnit()"
              (keydown.enter)="clearUnit()"
              class="reset cx-unit-level-order-history-filter-reset-button"
            >
              <cx-icon [type]="iconTypes.RESET"></cx-icon>
            </button>

            <div role="presentation" class="search-icon">
              <cx-icon
                [attr.title]="'common.search' | cxTranslate"
                class="search-icon-filter"
                [type]="iconTypes.SEARCH"
              ></cx-icon>
            </div>
          </label>
        </div>
      </div>
    </div>

    <div class="cx-unit-level-order-history-filter-form-button-block">
      <button
        id="clearAllBtn"
        class="cx-action-link cx-clear-btn"
        type="button"
        (click)="clearAll()"
      >
        {{ 'unitLevelOrderHistory.clearAll' | cxTranslate }}
      </button>
      <button
        id="searchUnitLevelOrdersBtn"
        class="btn btn-primary unit-level-order-history-search"
        type="button"
        (click)="searchUnitLevelOrders()"
      >
        {{ 'unitLevelOrderHistory.search' | cxTranslate }}
      </button>
    </div>
  </div>
</form>

<div class="cx-unit-level-order-history-filter-form-mobile">
  <button
    id="filterByBtn"
    class="btn btn-action btn-block dialog-trigger"
    (click)="launchMobileFilters()"
  >
    <cx-icon [type]="iconTypes.FILTER"></cx-icon>
    {{ 'unitLevelOrderHistory.filterBy' | cxTranslate }}
  </button>

  <div
    *ngIf="buyerFilterMobileValue || unitFilterMobileValue"
    class="cx-unit-level-order-history-filters-show-and-remove"
  >
    <div class="cx-selected-filters">
      {{ 'unitLevelOrderHistory.yourFilters' | cxTranslate }}
      <span *ngIf="buyerFilterMobileValue">"{{ buyerFilterMobileValue }}"</span
      ><span *ngIf="buyerFilterMobileValue && unitFilterMobileValue">{{
        'unitLevelOrderHistory.and' | cxTranslate
      }}</span
      ><span *ngIf="unitFilterMobileValue">"{{ unitFilterMobileValue }}"</span>
    </div>

    <div class="cx-clear-filter">
      <button
        id="removeAppliedFiltersBtn"
        class="cx-action-link cx-clear-btn"
        type="button"
        (click)="clearAll()"
      >
        {{ 'unitLevelOrderHistory.removeAppliedFilters' | cxTranslate }}
      </button>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: Renderer2
  }], {
    filterNav: [{
      type: ViewChild,
      args: ["filterNav", {
        read: ElementRef
      }]
    }],
    filterNavUnit: [{
      type: ViewChild,
      args: ["filterNavUnit", {
        read: ElementRef
      }]
    }],
    filterNavBuyer: [{
      type: ViewChild,
      args: ["filterNavBuyer", {
        read: ElementRef
      }]
    }],
    buyerFilterMobileId: [{
      type: ViewChild,
      args: ["buyerFilterMobileId", {
        read: ElementRef
      }]
    }],
    unitFilterMobileId: [{
      type: ViewChild,
      args: ["unitFilterMobileId", {
        read: ElementRef
      }]
    }],
    filterListEvent: [{
      type: Output
    }]
  });
})();
var UnitLevelOrderHistoryComponent = class _UnitLevelOrderHistoryComponent {
  constructor(routing, unitOrdersFacade, translation) {
    this.routing = routing;
    this.unitOrdersFacade = unitOrdersFacade;
    this.translation = translation;
    this.PAGE_SIZE = 5;
    this.queryParams = {
      currentPage: 0,
      sortCode: "",
      filters: ""
    };
    this.orders$ = this.unitOrdersFacade.getOrderHistoryList(this.PAGE_SIZE).pipe(tap((orders) => {
      if (orders?.pagination?.sort) {
        this.sortType = orders.pagination.sort;
        this.queryParams.sortCode = this.sortType;
      }
    }));
    this.isLoaded$ = this.unitOrdersFacade.getOrderHistoryListLoaded();
    useFeatureStyles("a11yTruncatedTextUnitLevelOrderHistory");
  }
  ngOnDestroy() {
    this.unitOrdersFacade.clearOrderList();
  }
  filterChange(newFilters) {
    this.updateQueryParams(__spreadProps(__spreadValues({}, newFilters), {
      currentPage: 0
    }));
    this.fetchOrders(this.queryParams);
  }
  updateQueryParams(partialParams) {
    Object.entries(partialParams).forEach((param) => this.queryParams[param[0]] = param[1]);
  }
  changeSortCode(sortCode) {
    this.updateQueryParams({
      sortCode,
      currentPage: 0
    });
    this.sortType = sortCode;
    this.fetchOrders(this.queryParams);
  }
  pageChange(page) {
    this.updateQueryParams({
      currentPage: page
    });
    this.fetchOrders(this.queryParams);
  }
  goToOrderDetail(order) {
    this.routing.go({
      cxRoute: "unitLevelOrderDetail",
      params: order
    });
  }
  getSortLabels() {
    return combineLatest([this.translation.translate("sorting.date"), this.translation.translate("sorting.orderNumber"), this.translation.translate("unitLevelOrderHistorySorting.orgUnit"), this.translation.translate("unitLevelOrderHistorySorting.buyer"), this.translation.translate("unitLevelOrderHistorySorting.orgUnitDesc"), this.translation.translate("unitLevelOrderHistorySorting.buyerDesc")]).pipe(map(([textByDate, textByOrderNumber, textByOrgUnit, textByBuyer, textByOrgUnitDesc, textByBuyerDesc]) => {
      return {
        byDate: textByDate,
        byOrderNumber: textByOrderNumber,
        byOrgUnit: textByOrgUnit,
        byBuyer: textByBuyer,
        byOrgUnitDesc: textByOrgUnitDesc,
        byBuyerDesc: textByBuyerDesc
      };
    }));
  }
  fetchOrders(queryParam) {
    this.unitOrdersFacade.loadOrderList(this.PAGE_SIZE, queryParam.currentPage, queryParam.filters, queryParam.sortCode);
  }
  static {
    this.ɵfac = function UnitLevelOrderHistoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitLevelOrderHistoryComponent)(ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(UnitOrderFacade), ɵɵdirectiveInject(TranslationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitLevelOrderHistoryComponent,
      selectors: [["cx-unit-level-order-history"]],
      standalone: false,
      decls: 2,
      vars: 5,
      consts: [["noOrder", ""], [4, "ngIf"], [3, "filterListEvent"], [1, "cx-unit-level-order-history-body"], [4, "ngIf", "ngIfElse"], [1, "cx-unit-level-order-history-sort", "top"], [1, "cx-unit-level-order-history-form-group", "form-group"], ["ariaControls", "order-history-table", 3, "sortListEvent", "sortOptions", "sortLabels", "selectedOption", "placeholder", "ariaLabel"], [1, "cx-unit-level-order-history-total-result"], [3, "pagination"], ["class", "cx-unit-level-order-history-pagination", 4, "ngIf"], ["id", "order-history-table", 1, "table", "cx-unit-level-order-history-table"], ["class", "cx-unit-level-order-history-thead-mobile", 4, "cxFeature"], [3, "click", 4, "ngFor", "ngForOf"], [1, "cx-unit-level-order-history-sort", "bottom"], [1, "cx-unit-level-order-history-pagination"], ["paginationID", "pagination-top", 3, "viewPageEvent", "pagination"], [1, "cx-unit-level-order-history-thead-mobile"], ["scope", "col"], [3, "click"], [1, "cx-unit-level-order-history-code"], [1, "cx-unit-level-order-history-label"], [1, "cx-unit-level-order-history-value", 3, "routerLink"], [1, "cx-unit-level-order-history-placed"], [1, "cx-unit-level-order-history-status"], [1, "cx-unit-level-order-history-buyer"], [4, "cxFeature"], [1, "cx-unit-level-order-history-unit"], [1, "cx-unit-level-order-history-total"], [1, "text-ellipsis"], ["paginationID", "pagination-bottom", 3, "viewPageEvent", "pagination"], ["class", "cx-unit-level-order-history-no-order", 4, "ngIf"], [1, "cx-unit-level-order-history-no-order"], ["routerLinkActive", "active", "cxBtnLikeLink", "", 1, "btn", "btn-primary", "btn-block", 3, "routerLink"]],
      template: function UnitLevelOrderHistoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, UnitLevelOrderHistoryComponent_ng_container_0_Template, 2, 1, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpureFunction1(3, _c5, ɵɵpipeBind1(1, 1, ctx.orders$)));
        }
      },
      dependencies: [NgForOf, NgIf, RouterLink, RouterLinkActive, SortingComponent, PaginationComponent, TotalComponent, UnitLevelOrderHistoryFilterComponent, BtnLikeLinkDirective, FeatureDirective, AsyncPipe, UrlPipe, TranslatePipe, CxDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitLevelOrderHistoryComponent, [{
    type: Component,
    args: [{
      selector: "cx-unit-level-order-history",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container
  *ngIf="{
    orderHistory: orders$ | async,
  } as type"
>
  <ng-container *ngIf="type.orderHistory as orderHistory">
    <div>
      <!-- HEADER -->

      <cx-unit-level-order-history-filter
        (filterListEvent)="filterChange($event)"
      ></cx-unit-level-order-history-filter>

      <!-- BODY -->
      <div class="cx-unit-level-order-history-body">
        <ng-container
          *ngIf="orderHistory.pagination?.totalResults ?? 0 > 0; else noOrder"
        >
          <!-- Select Form and Pagination Top -->
          <div class="cx-unit-level-order-history-sort top">
            <label class="cx-unit-level-order-history-form-group form-group"
              ><span>
                {{ 'unitLevelOrderHistory.sortBy' | cxTranslate }}
              </span>
              <cx-sorting
                [sortOptions]="orderHistory?.sorts"
                [sortLabels]="getSortLabels() | async"
                (sortListEvent)="changeSortCode($event)"
                [selectedOption]="orderHistory?.pagination?.sort"
                placeholder="{{ 'unitLevelOrderHistory.sortBy' | cxTranslate }}"
                [ariaLabel]="'unitLevelOrderHistory.sortOrders' | cxTranslate"
                ariaControls="order-history-table"
              ></cx-sorting>
            </label>
            <div class="cx-unit-level-order-history-total-result">
              <cx-total [pagination]="orderHistory?.pagination"></cx-total>
            </div>
            <div
              *ngIf="orderHistory?.pagination?.totalPages ?? 0 > 1"
              class="cx-unit-level-order-history-pagination"
            >
              <cx-pagination
                [pagination]="orderHistory?.pagination"
                (viewPageEvent)="pageChange($event)"
                paginationID="pagination-top"
              ></cx-pagination>
            </div>
          </div>
          <!-- TABLE -->
          <table
            id="order-history-table"
            class="table cx-unit-level-order-history-table"
          >
            <thead
              *cxFeature="'!a11yTableHeaderReadout'"
              class="cx-unit-level-order-history-thead-mobile"
            >
              <th scope="col">
                {{ 'unitLevelOrderHistory.orderId' | cxTranslate }}
              </th>
              <th scope="col">
                {{ 'unitLevelOrderHistory.date' | cxTranslate }}
              </th>
              <th scope="col">
                {{ 'unitLevelOrderHistory.status' | cxTranslate }}
              </th>
              <th scope="col">
                {{ 'unitLevelOrderHistory.buyer' | cxTranslate }}
              </th>
              <th scope="col">
                {{ 'unitLevelOrderHistory.unit' | cxTranslate }}
              </th>
              <th scope="col">
                {{ 'unitLevelOrderHistory.total' | cxTranslate }}
              </th>
            </thead>
            <thead
              *cxFeature="'a11yTableHeaderReadout'"
              class="cx-unit-level-order-history-thead-mobile"
            >
              <tr>
                <th scope="col">
                  {{ 'unitLevelOrderHistory.orderId' | cxTranslate }}
                </th>
                <th scope="col">
                  {{ 'unitLevelOrderHistory.date' | cxTranslate }}
                </th>
                <th scope="col">
                  {{ 'unitLevelOrderHistory.status' | cxTranslate }}
                </th>
                <th scope="col">
                  {{ 'unitLevelOrderHistory.buyer' | cxTranslate }}
                </th>
                <th scope="col">
                  {{ 'unitLevelOrderHistory.unit' | cxTranslate }}
                </th>
                <th scope="col">
                  {{ 'unitLevelOrderHistory.total' | cxTranslate }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                *ngFor="let order of orderHistory?.orders"
                (click)="goToOrderDetail(order)"
              >
                <td class="cx-unit-level-order-history-code">
                  <div class="cx-unit-level-order-history-label">
                    {{ 'unitLevelOrderHistory.orderId' | cxTranslate }}
                  </div>
                  <a
                    [routerLink]="
                      {
                        cxRoute: 'unitLevelOrderDetail',
                        params: order,
                      } | cxUrl
                    "
                    class="cx-unit-level-order-history-value"
                  >
                    {{ order?.code }}</a
                  >
                </td>
                <td class="cx-unit-level-order-history-placed">
                  <div class="cx-unit-level-order-history-label">
                    {{ 'unitLevelOrderHistory.date' | cxTranslate }}
                  </div>
                  <a
                    [routerLink]="
                      {
                        cxRoute: 'unitLevelOrderDetail',
                        params: order,
                      } | cxUrl
                    "
                    class="cx-unit-level-order-history-value"
                  >
                    {{ order?.placed | cxDate: 'longDate' }}
                  </a>
                </td>
                <td class="cx-unit-level-order-history-status">
                  <div class="cx-unit-level-order-history-label">
                    {{ 'unitLevelOrderHistory.status' | cxTranslate }}
                  </div>
                  <a
                    [routerLink]="
                      {
                        cxRoute: 'unitLevelOrderDetail',
                        params: order,
                      } | cxUrl
                    "
                    class="cx-unit-level-order-history-value"
                  >
                    {{
                      'orderDetails.statusDisplay_' + order?.statusDisplay
                        | cxTranslate
                    }}</a
                  >
                </td>
                <td class="cx-unit-level-order-history-buyer">
                  <div class="cx-unit-level-order-history-label">
                    {{ 'unitLevelOrderHistory.buyer' | cxTranslate }}
                  </div>
                  <a
                    [routerLink]="
                      {
                        cxRoute: 'unitLevelOrderDetail',
                        params: order,
                      } | cxUrl
                    "
                    class="cx-unit-level-order-history-value"
                  >
                    {{ order?.orgCustomer?.name }}
                    <ng-container
                      *cxFeature="'a11yTruncatedTextUnitLevelOrderHistory'"
                    >
                      <span>{{ order?.orgCustomer?.email }}</span>
                    </ng-container>
                    <ng-container
                      *cxFeature="'!a11yTruncatedTextUnitLevelOrderHistory'"
                    >
                      <span class="text-ellipsis">{{
                        order?.orgCustomer?.email
                      }}</span>
                    </ng-container>
                  </a>
                </td>
                <td class="cx-unit-level-order-history-unit">
                  <div class="cx-unit-level-order-history-label">
                    {{ 'unitLevelOrderHistory.unit' | cxTranslate }}
                  </div>
                  <a
                    [routerLink]="
                      {
                        cxRoute: 'unitLevelOrderDetail',
                        params: order,
                      } | cxUrl
                    "
                    class="cx-unit-level-order-history-value"
                  >
                    {{ order?.orgUnit?.name }}</a
                  >
                </td>
                <td class="cx-unit-level-order-history-total">
                  <div class="cx-unit-level-order-history-label">
                    {{ 'unitLevelOrderHistory.total' | cxTranslate }}
                  </div>
                  <a
                    [routerLink]="
                      {
                        cxRoute: 'unitLevelOrderDetail',
                        params: order,
                      } | cxUrl
                    "
                    class="cx-unit-level-order-history-value"
                  >
                    {{ order?.total?.formattedValue }}</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <!-- Select Form and Pagination Bottom -->
          <div class="cx-unit-level-order-history-sort bottom">
            <label class="cx-unit-level-order-history-form-group form-group"
              ><span>
                {{ 'unitLevelOrderHistory.sortBy' | cxTranslate }}
              </span>
              <cx-sorting
                [sortOptions]="orderHistory?.sorts"
                [sortLabels]="getSortLabels() | async"
                (sortListEvent)="changeSortCode($event)"
                [selectedOption]="orderHistory?.pagination?.sort"
                placeholder="{{ 'unitLevelOrderHistory.sortBy' | cxTranslate }}"
                [ariaLabel]="'unitLevelOrderHistory.sortOrders' | cxTranslate"
                ariaControls="order-history-table"
              ></cx-sorting>
            </label>
            <div class="cx-unit-level-order-history-total-result">
              <cx-total [pagination]="orderHistory?.pagination"></cx-total>
            </div>
            <div
              *ngIf="orderHistory?.pagination?.totalPages ?? 0 > 1"
              class="cx-unit-level-order-history-pagination"
            >
              <cx-pagination
                [pagination]="orderHistory?.pagination"
                (viewPageEvent)="pageChange($event)"
                paginationID="pagination-bottom"
              ></cx-pagination>
            </div>
          </div>
        </ng-container>

        <!-- NO ORDER CONTAINER -->
        <ng-template #noOrder>
          <div
            *ngIf="isLoaded$ | async"
            class="cx-unit-level-order-history-no-order"
          >
            <div>
              <div>{{ 'unitLevelOrderHistory.noOrders' | cxTranslate }}</div>
              <a
                [routerLink]="{ cxRoute: 'home' } | cxUrl"
                routerLinkActive="active"
                class="btn btn-primary btn-block"
                cxBtnLikeLink
                >{{ 'unitLevelOrderHistory.startShopping' | cxTranslate }}</a
              >
            </div>
          </div>
        </ng-template>
      </div>
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: UnitOrderFacade
  }, {
    type: TranslationService
  }], null);
})();
var UnitLevelOrderHistoryFilterModule = class _UnitLevelOrderHistoryFilterModule {
  static {
    this.ɵfac = function UnitLevelOrderHistoryFilterModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitLevelOrderHistoryFilterModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitLevelOrderHistoryFilterModule,
      declarations: [UnitLevelOrderHistoryFilterComponent],
      imports: [CommonModule, ReactiveFormsModule, I18nModule, IconModule],
      exports: [UnitLevelOrderHistoryFilterComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, ReactiveFormsModule, I18nModule, IconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitLevelOrderHistoryFilterModule, [{
    type: NgModule,
    args: [{
      declarations: [UnitLevelOrderHistoryFilterComponent],
      exports: [UnitLevelOrderHistoryFilterComponent],
      imports: [CommonModule, ReactiveFormsModule, I18nModule, IconModule]
    }]
  }], null, null);
})();
var UnitLevelOrderHistoryModule = class _UnitLevelOrderHistoryModule {
  static {
    this.ɵfac = function UnitLevelOrderHistoryModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitLevelOrderHistoryModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitLevelOrderHistoryModule,
      declarations: [UnitLevelOrderHistoryComponent],
      imports: [CommonModule, RouterModule, ReactiveFormsModule, NgSelectModule, ListNavigationModule, UrlModule, I18nModule, UnitLevelOrderHistoryFilterModule, BtnLikeLinkModule, FeaturesConfigModule],
      exports: [UnitLevelOrderHistoryComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          UnitLevelOrderHistoryComponent: {
            component: UnitLevelOrderHistoryComponent,
            guards: [AuthGuard, UnitLevelOrdersViewerGuard]
          }
        }
      })],
      imports: [CommonModule, RouterModule, ReactiveFormsModule, NgSelectModule, ListNavigationModule, UrlModule, I18nModule, UnitLevelOrderHistoryFilterModule, BtnLikeLinkModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitLevelOrderHistoryModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, ReactiveFormsModule, NgSelectModule, ListNavigationModule, UrlModule, I18nModule, UnitLevelOrderHistoryFilterModule, BtnLikeLinkModule, FeaturesConfigModule],
      declarations: [UnitLevelOrderHistoryComponent],
      exports: [UnitLevelOrderHistoryComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          UnitLevelOrderHistoryComponent: {
            component: UnitLevelOrderHistoryComponent,
            guards: [AuthGuard, UnitLevelOrdersViewerGuard]
          }
        }
      })]
    }]
  }], null, null);
})();
var UnitLevelOrderDetailService = class _UnitLevelOrderDetailService {
  constructor(unitOrderFacade, routingService) {
    this.unitOrderFacade = unitOrderFacade;
    this.routingService = routingService;
    this.orderCode$ = this.routingService.getRouterState().pipe(map((routingData) => routingData.state.params.orderCode), distinctUntilChanged());
    this.orderLoad$ = this.orderCode$.pipe(tap((orderCode) => {
      if (orderCode) {
        this.unitOrderFacade.loadOrderDetails(orderCode);
      } else {
        this.unitOrderFacade.clearOrderDetails();
      }
    }), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  getOrderDetails() {
    return this.orderLoad$.pipe(switchMap(() => this.unitOrderFacade.getOrderDetails()));
  }
  static {
    this.ɵfac = function UnitLevelOrderDetailService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitLevelOrderDetailService)(ɵɵinject(UnitOrderFacade), ɵɵinject(RoutingService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitLevelOrderDetailService,
      factory: _UnitLevelOrderDetailService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitLevelOrderDetailService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UnitOrderFacade
  }, {
    type: RoutingService
  }], null);
})();
var UnitLevelOrderOverviewComponent = class _UnitLevelOrderOverviewComponent {
  constructor(translation, unitLevelOrderDetailsService) {
    this.translation = translation;
    this.unitLevelOrderDetailsService = unitLevelOrderDetailsService;
  }
  ngOnInit() {
    this.order$ = this.unitLevelOrderDetailsService.getOrderDetails();
  }
  getOrderCodeCardContent(orderCode) {
    return this.translation.translate("orderDetails.orderNumber").pipe(filter(() => Boolean(orderCode)), map((textTitle) => ({
      title: textTitle,
      text: [orderCode]
    })));
  }
  getOrderCurrentDateCardContent(isoDate) {
    return this.translation.translate("orderDetails.placedOn").pipe(filter(() => Boolean(isoDate)), map((textTitle) => {
      return {
        title: textTitle,
        text: [isoDate]
      };
    }));
  }
  getOrderStatusCardContent(status) {
    return combineLatest([this.translation.translate("orderDetails.status"), status ? this.translation.translate("orderDetails.statusDisplay_" + status) : of("")]).pipe(filter(() => Boolean(status)), map(([textTitle, textStatus]) => ({
      title: textTitle,
      text: [textStatus]
    })));
  }
  getPurchaseOrderNumber(poNumber) {
    return combineLatest([this.translation.translate("orderDetails.purchaseOrderNumber"), this.translation.translate("orderDetails.emptyPurchaseOrderId")]).pipe(filter(() => Boolean(poNumber)), map(([textTitle, noneTextTitle]) => ({
      title: textTitle,
      text: [poNumber ? poNumber : noneTextTitle]
    })));
  }
  getMethodOfPaymentCardContent(hasPaymentInfo) {
    return combineLatest([this.translation.translate("orderDetails.methodOfPayment"), this.translation.translate("paymentTypes.paymentType_ACCOUNT"), this.translation.translate("paymentTypes.paymentType_CARD")]).pipe(filter(() => Boolean(hasPaymentInfo)), map(([textTitle, textAccount, textCard]) => ({
      title: textTitle,
      text: [Boolean(hasPaymentInfo) ? textCard : textAccount]
    })));
  }
  getCostCenterCardContent(costCenter) {
    return this.translation.translate("orderDetails.costCenter").pipe(filter(() => Boolean(costCenter)), map((textTitle) => ({
      title: textTitle,
      textBold: costCenter?.name,
      text: [`(${costCenter?.unit?.name})`]
    })));
  }
  getAddressCardContent(deliveryAddress) {
    return this.translation.translate("addressCard.shipTo").pipe(filter(() => Boolean(deliveryAddress)), map((textTitle) => {
      const formattedAddress = this.normalizeFormattedAddress(deliveryAddress?.formattedAddress ?? "");
      return {
        title: textTitle,
        textBold: `${deliveryAddress?.firstName} ${deliveryAddress?.lastName}`,
        text: [formattedAddress, deliveryAddress?.country?.name]
      };
    }));
  }
  getDeliveryModeCardContent(deliveryMode) {
    return this.translation.translate("orderDetails.shippingMethod").pipe(filter(() => Boolean(deliveryMode)), map((textTitle) => ({
      title: textTitle,
      textBold: deliveryMode?.name,
      text: [deliveryMode?.description, deliveryMode?.deliveryCost?.formattedValue ? deliveryMode.deliveryCost?.formattedValue : ""]
    })));
  }
  getPaymentInfoCardContent(payment) {
    return combineLatest([this.translation.translate("paymentForm.payment"), this.translation.translate("paymentCard.expires", {
      month: payment ? payment.expiryMonth : "",
      year: payment ? payment.expiryYear : ""
    })]).pipe(filter(() => Boolean(payment)), map(([textTitle, textExpires]) => ({
      title: textTitle,
      textBold: payment?.accountHolderName,
      text: [payment?.cardNumber, textExpires]
    })));
  }
  getBillingAddressCardContent(billingAddress) {
    return this.translation.translate("paymentForm.billingAddress").pipe(filter(() => Boolean(billingAddress)), map((textTitle) => ({
      title: textTitle,
      textBold: `${billingAddress?.firstName} ${billingAddress?.lastName}`,
      text: [billingAddress?.formattedAddress, billingAddress?.country?.name]
    })));
  }
  getBuyerNameCardContent(customer) {
    return this.translation.translate("unitLevelOrderDetails.buyer").pipe(filter(() => Boolean(customer)), map((textTitle) => ({
      title: textTitle,
      text: [customer?.name, `(${customer?.email})`]
    })));
  }
  getUnitNameCardContent(orgUnit) {
    return this.translation.translate("orderDetails.unit").pipe(filter(() => Boolean(orgUnit)), map((textTitle) => ({
      title: textTitle,
      text: [orgUnit]
    })));
  }
  normalizeFormattedAddress(formattedAddress) {
    const addresses = formattedAddress.split(",").map((address) => address.trim());
    return addresses.filter(Boolean).join(", ");
  }
  static {
    this.ɵfac = function UnitLevelOrderOverviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitLevelOrderOverviewComponent)(ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(UnitLevelOrderDetailService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitLevelOrderOverviewComponent,
      selectors: [["cx-unit-level-order-overview"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["class", "cx-order-summary", 4, "ngIf"], [1, "cx-order-summary"], [1, "container"], [1, "cx-summary-card"], [3, "content"], [1, "cx-display-inline", 3, "content"], [4, "ngIf"]],
      template: function UnitLevelOrderOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, UnitLevelOrderOverviewComponent_div_0_Template, 24, 27, "div", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.order$));
        }
      },
      dependencies: [NgIf, CardComponent, AsyncPipe, CxDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitLevelOrderOverviewComponent, [{
    type: Component,
    args: [{
      selector: "cx-unit-level-order-overview",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<div class="cx-order-summary" *ngIf="order$ | async as order">\n  <div class="container">\n    <div class="cx-summary-card">\n      <cx-card\n        [content]="getOrderCodeCardContent(order.code) | async"\n      ></cx-card>\n\n      <cx-card\n        [content]="\n          getOrderCurrentDateCardContent(order.created | cxDate) | async\n        "\n      ></cx-card>\n\n      <cx-card\n        [content]="getOrderStatusCardContent(order.statusDisplay) | async"\n      ></cx-card>\n\n      <cx-card\n        class="cx-display-inline"\n        [content]="getBuyerNameCardContent(order.orgCustomer) | async"\n      ></cx-card>\n    </div>\n    <div class="cx-summary-card">\n      <cx-card\n        [content]="getUnitNameCardContent(order.orgUnit?.name) | async"\n      ></cx-card>\n\n      <cx-card\n        [content]="getPurchaseOrderNumber(order.purchaseOrderNumber) | async"\n      ></cx-card>\n\n      <cx-card\n        [content]="getMethodOfPaymentCardContent(order.paymentInfo) | async"\n      ></cx-card>\n\n      <ng-container *ngIf="order.costCenter">\n        <cx-card\n          [content]="getCostCenterCardContent(order.costCenter) | async"\n        ></cx-card>\n      </ng-container>\n    </div>\n\n    <div class="cx-summary-card">\n      <ng-container *ngIf="order.deliveryAddress">\n        <cx-card\n          [content]="getAddressCardContent(order.deliveryAddress) | async"\n        ></cx-card>\n      </ng-container>\n\n      <ng-container *ngIf="order.deliveryMode">\n        <cx-card\n          [content]="getDeliveryModeCardContent(order.deliveryMode) | async"\n        ></cx-card>\n      </ng-container>\n    </div>\n\n    <ng-container *ngIf="order.paymentInfo">\n      <div class="cx-summary-card">\n        <cx-card\n          [content]="getPaymentInfoCardContent(order.paymentInfo) | async"\n        ></cx-card>\n\n        <cx-card\n          [content]="\n            getBillingAddressCardContent(order.paymentInfo?.billingAddress)\n              | async\n          "\n        ></cx-card>\n      </div>\n    </ng-container>\n  </div>\n</div>\n'
    }]
  }], () => [{
    type: TranslationService
  }, {
    type: UnitLevelOrderDetailService
  }], null);
})();
var UnitLevelOrderOverviewModule = class _UnitLevelOrderOverviewModule {
  static {
    this.ɵfac = function UnitLevelOrderOverviewModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitLevelOrderOverviewModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitLevelOrderOverviewModule,
      declarations: [UnitLevelOrderOverviewComponent],
      imports: [CommonModule, I18nModule, CardModule],
      exports: [UnitLevelOrderOverviewComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, CardModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitLevelOrderOverviewModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, CardModule],
      declarations: [UnitLevelOrderOverviewComponent],
      exports: [UnitLevelOrderOverviewComponent]
    }]
  }], null, null);
})();
var UnitLevelOrderDetailModule = class _UnitLevelOrderDetailModule {
  static {
    this.ɵfac = function UnitLevelOrderDetailModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitLevelOrderDetailModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitLevelOrderDetailModule,
      imports: [CommonModule, UnitLevelOrderOverviewModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          UnitLevelOrderDetailsOverviewComponent: {
            component: UnitLevelOrderOverviewComponent,
            guards: [AuthGuard, UnitLevelOrdersViewerGuard]
          },
          UnitLevelOrderDetailsItemsComponent: {
            component: OrderDetailItemsComponent,
            guards: [AuthGuard, UnitLevelOrdersViewerGuard],
            providers: [{
              provide: OrderDetailsService,
              useExisting: UnitLevelOrderDetailService
            }]
          },
          UnitLevelOrderDetailsTotalsComponent: {
            component: OrderDetailTotalsComponent,
            guards: [AuthGuard, UnitLevelOrdersViewerGuard],
            providers: [{
              provide: OrderDetailsService,
              useExisting: UnitLevelOrderDetailService
            }]
          }
        }
      })],
      imports: [CommonModule, UnitLevelOrderOverviewModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitLevelOrderDetailModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, UnitLevelOrderOverviewModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          UnitLevelOrderDetailsOverviewComponent: {
            component: UnitLevelOrderOverviewComponent,
            guards: [AuthGuard, UnitLevelOrdersViewerGuard]
          },
          UnitLevelOrderDetailsItemsComponent: {
            component: OrderDetailItemsComponent,
            guards: [AuthGuard, UnitLevelOrdersViewerGuard],
            providers: [{
              provide: OrderDetailsService,
              useExisting: UnitLevelOrderDetailService
            }]
          },
          UnitLevelOrderDetailsTotalsComponent: {
            component: OrderDetailTotalsComponent,
            guards: [AuthGuard, UnitLevelOrdersViewerGuard],
            providers: [{
              provide: OrderDetailsService,
              useExisting: UnitLevelOrderDetailService
            }]
          }
        }
      })]
    }]
  }], null, null);
})();
var UnitOrderDetailsOrderEntriesContext = class _UnitOrderDetailsOrderEntriesContext {
  constructor(unitLevelOrderDetailService) {
    this.unitLevelOrderDetailService = unitLevelOrderDetailService;
    this.type = OrderEntriesSource.UNIT_ORDER_DETAILS;
  }
  getEntries() {
    return this.unitLevelOrderDetailService.getOrderDetails().pipe(map((order) => order?.entries ?? []));
  }
  static {
    this.ɵfac = function UnitOrderDetailsOrderEntriesContext_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitOrderDetailsOrderEntriesContext)(ɵɵinject(UnitLevelOrderDetailService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitOrderDetailsOrderEntriesContext,
      factory: _UnitOrderDetailsOrderEntriesContext.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitOrderDetailsOrderEntriesContext, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UnitLevelOrderDetailService
  }], null);
})();
var UnitOrderComponentsModule = class _UnitOrderComponentsModule {
  static {
    this.ɵfac = function UnitOrderComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitOrderComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitOrderComponentsModule,
      imports: [RouterModule, UnitLevelOrderHistoryModule, UnitLevelOrderDetailModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: UnitOrderDetailsOrderEntriesContextToken,
        useExisting: UnitOrderDetailsOrderEntriesContext
      }],
      imports: [RouterModule, UnitLevelOrderHistoryModule, UnitLevelOrderDetailModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitOrderComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule, UnitLevelOrderHistoryModule, UnitLevelOrderDetailModule],
      providers: [{
        provide: UnitOrderDetailsOrderEntriesContextToken,
        useExisting: UnitOrderDetailsOrderEntriesContext
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-unit-order-occ.mjs
var OccUnitOrderAdapter = class _OccUnitOrderAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
  }
  loadUnitOrderHistory(userId, pageSize, currentPage, filters, sort) {
    const params = {};
    if (pageSize) {
      params["pageSize"] = pageSize.toString();
    }
    if (currentPage) {
      params["currentPage"] = currentPage.toString();
    }
    if (filters) {
      params["filters"] = filters.toString();
    }
    if (sort) {
      params["sort"] = sort.toString();
    }
    const url = this.occEndpoints.buildUrl("unitLevelOrderHistory", {
      urlParams: {
        userId
      },
      queryParams: params
    });
    return this.http.get(url).pipe(this.converter.pipeable(ORDER_HISTORY_NORMALIZER));
  }
  loadUnitOrderDetail(userId, orderCode) {
    const url = this.occEndpoints.buildUrl("unitLevelOrderDetail", {
      urlParams: {
        userId,
        orderId: orderCode
      }
    });
    return this.http.get(url).pipe(this.converter.pipeable(ORDER_NORMALIZER));
  }
  static {
    this.ɵfac = function OccUnitOrderAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccUnitOrderAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccUnitOrderAdapter,
      factory: _OccUnitOrderAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccUnitOrderAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var defaultOccUnitOrderConfig = {
  backend: {
    occ: {
      endpoints: {
        unitLevelOrderHistory: `/orgUsers/\${userId}/orgUnits/orders`,
        unitLevelOrderDetail: `orgUsers/\${userId}/orgUnits/orders/\${orderId}?fields=FULL`
      }
    }
  }
};
var UnitOrderOccModule = class _UnitOrderOccModule {
  static {
    this.ɵfac = function UnitOrderOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitOrderOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitOrderOccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccUnitOrderConfig), {
        provide: UnitOrderAdapter,
        useClass: OccUnitOrderAdapter
      }, {
        provide: ORDER_NORMALIZER,
        useExisting: OccOrderNormalizer,
        multi: true
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitOrderOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccUnitOrderConfig), {
        provide: UnitOrderAdapter,
        useClass: OccUnitOrderAdapter
      }, {
        provide: ORDER_NORMALIZER,
        useExisting: OccOrderNormalizer,
        multi: true
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-unit-order.mjs
var UnitOrderModule = class _UnitOrderModule {
  static {
    this.ɵfac = function UnitOrderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitOrderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitOrderModule,
      imports: [UnitOrderCoreModule, UnitOrderOccModule, UnitOrderComponentsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [UnitOrderCoreModule.forRoot(), UnitOrderOccModule, UnitOrderComponentsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitOrderModule, [{
    type: NgModule,
    args: [{
      imports: [UnitOrderCoreModule.forRoot(), UnitOrderOccModule, UnitOrderComponentsModule]
    }]
  }], null, null);
})();
export {
  UnitOrderModule
};
//# sourceMappingURL=@spartacus_organization_unit-order.js.map
