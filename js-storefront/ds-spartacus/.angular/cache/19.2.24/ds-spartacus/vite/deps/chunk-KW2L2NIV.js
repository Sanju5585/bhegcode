import {
  OrderAttachmentsFacade,
  OrderFacade,
  OrderHistoryFacade,
  OrderPlacedEvent,
  OrderReturnRequestFacade,
  ReorderOrderFacade,
  ReplenishmentOrderHistoryFacade,
  ReplenishmentOrderScheduledEvent,
  ScheduledReplenishmentOrderFacade
} from "./chunk-UIW5AQFA.js";
import {
  ActiveCartFacade,
  MultiCartFacade
} from "./chunk-KEAKWHYV.js";
import {
  CommandService,
  CommandStrategy,
  EventService,
  GlobalMessageService,
  GlobalMessageType,
  LoggerService,
  OCC_USER_ID_ANONYMOUS,
  PROCESS_FEATURE,
  RoutingService,
  UserIdService,
  process_selectors,
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
  Injectable,
  InjectionToken,
  NgModule,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import {
  using
} from "./chunk-FBVS4YZX.js";
import {
  BehaviorSubject,
  EMPTY,
  auditTime,
  catchError,
  combineLatest,
  filter,
  map,
  mergeMap,
  of,
  take,
  tap,
  withLatestFrom
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/order/fesm2022/spartacus-order-core.mjs
var OrderHistoryAdapter = class {
};
var OrderHistoryConnector = class _OrderHistoryConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  get(userId, orderCode) {
    return this.adapter.load(userId, orderCode);
  }
  getHistory(userId, pageSize, currentPage, sort) {
    return this.adapter.loadHistory(userId, pageSize, currentPage, sort);
  }
  getConsignmentTracking(orderCode, consignmentCode, userId) {
    return this.adapter.getConsignmentTracking(orderCode, consignmentCode, userId);
  }
  cancel(userId, orderCode, cancelRequestInput) {
    return this.adapter.cancel(userId, orderCode, cancelRequestInput);
  }
  return(userId, returnRequestInput) {
    return this.adapter.createReturnRequest(userId, returnRequestInput);
  }
  getReturnRequestDetail(userId, returnRequestCode) {
    return this.adapter.loadReturnRequestDetail(userId, returnRequestCode);
  }
  getReturnRequestList(userId, pageSize, currentPage, sort) {
    return this.adapter.loadReturnRequestList(userId, pageSize, currentPage, sort);
  }
  cancelReturnRequest(userId, returnRequestCode, returnRequestModification) {
    return this.adapter.cancelReturnRequest(userId, returnRequestCode, returnRequestModification);
  }
  static {
    this.ɵfac = function OrderHistoryConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderHistoryConnector)(ɵɵinject(OrderHistoryAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderHistoryConnector,
      factory: _OrderHistoryConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderHistoryConnector, [{
    type: Injectable
  }], () => [{
    type: OrderHistoryAdapter
  }], null);
})();
var OrderAdapter = class {
};
var OrderConnector = class _OrderConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  placeOrder(userId, cartId, termsChecked) {
    return this.adapter.placeOrder(userId, cartId, termsChecked);
  }
  placePaymentAuthorizedOrder(userId, cartId, termsChecked) {
    return this.adapter.placePaymentAuthorizedOrder(userId, cartId, termsChecked);
  }
  static {
    this.ɵfac = function OrderConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderConnector)(ɵɵinject(OrderAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderConnector,
      factory: _OrderConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConnector, [{
    type: Injectable
  }], () => [{
    type: OrderAdapter
  }], null);
})();
var ReorderOrderAdapter = class {
};
var ReorderOrderConnector = class _ReorderOrderConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  reorder(orderId, userId) {
    return this.adapter.reorder(orderId, userId);
  }
  static {
    this.ɵfac = function ReorderOrderConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReorderOrderConnector)(ɵɵinject(ReorderOrderAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ReorderOrderConnector,
      factory: _ReorderOrderConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderOrderConnector, [{
    type: Injectable
  }], () => [{
    type: ReorderOrderAdapter
  }], null);
})();
var ReplenishmentOrderHistoryAdapter = class {
};
var ReplenishmentOrderHistoryConnector = class _ReplenishmentOrderHistoryConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  load(userId, replenishmentOrderCode) {
    return this.adapter.load(userId, replenishmentOrderCode);
  }
  loadReplenishmentDetailsHistory(userId, replenishmentOrderCode, pageSize, currentPage, sort) {
    return this.adapter.loadReplenishmentDetailsHistory(userId, replenishmentOrderCode, pageSize, currentPage, sort);
  }
  cancelReplenishmentOrder(userId, replenishmentOrderCode) {
    return this.adapter.cancelReplenishmentOrder(userId, replenishmentOrderCode);
  }
  loadHistory(userId, pageSize, currentPage, sort) {
    return this.adapter.loadHistory(userId, pageSize, currentPage, sort);
  }
  static {
    this.ɵfac = function ReplenishmentOrderHistoryConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReplenishmentOrderHistoryConnector)(ɵɵinject(ReplenishmentOrderHistoryAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ReplenishmentOrderHistoryConnector,
      factory: _ReplenishmentOrderHistoryConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderHistoryConnector, [{
    type: Injectable
  }], () => [{
    type: ReplenishmentOrderHistoryAdapter
  }], null);
})();
var ScheduledReplenishmentOrderAdapter = class {
};
var ScheduledReplenishmentOrderConnector = class _ScheduledReplenishmentOrderConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  scheduleReplenishmentOrder(cartId, scheduleReplenishmentForm, termsChecked, userId) {
    return this.adapter.scheduleReplenishmentOrder(cartId, scheduleReplenishmentForm, termsChecked, userId);
  }
  static {
    this.ɵfac = function ScheduledReplenishmentOrderConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduledReplenishmentOrderConnector)(ɵɵinject(ScheduledReplenishmentOrderAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ScheduledReplenishmentOrderConnector,
      factory: _ScheduledReplenishmentOrderConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduledReplenishmentOrderConnector, [{
    type: Injectable
  }], () => [{
    type: ScheduledReplenishmentOrderAdapter
  }], null);
})();
var OrderAttachmentsAdapter = class {
};
var OrderAttachmentsConnector = class _OrderAttachmentsConnector {
  constructor() {
    this.adapter = inject(OrderAttachmentsAdapter);
  }
  getOrderAttachments(userId, orderId) {
    return this.adapter.getOrderAttachments(userId, orderId);
  }
  downloadOrderAttachment(userId, orderId, attachmentId) {
    return this.adapter.downloadOrderAttachment(userId, orderId, attachmentId);
  }
  static {
    this.ɵfac = function OrderAttachmentsConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderAttachmentsConnector)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderAttachmentsConnector,
      factory: _OrderAttachmentsConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderAttachmentsConnector, [{
    type: Injectable
  }], null, null);
})();
var LOAD_CONSIGNMENT_TRACKING = "[Order] Load Consignment Tracking";
var LOAD_CONSIGNMENT_TRACKING_FAIL = "[Order] Load Consignment Tracking Fail";
var LOAD_CONSIGNMENT_TRACKING_SUCCESS = "[Order] Load Consignment Tracking Success";
var CLEAR_CONSIGNMENT_TRACKING = "[Order] Clear Consignment Tracking";
var LoadConsignmentTracking = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_CONSIGNMENT_TRACKING;
  }
};
var LoadConsignmentTrackingFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_CONSIGNMENT_TRACKING_FAIL;
    this.error = payload;
  }
};
var LoadConsignmentTrackingSuccess = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_CONSIGNMENT_TRACKING_SUCCESS;
  }
};
var ClearConsignmentTracking = class {
  constructor() {
    this.type = CLEAR_CONSIGNMENT_TRACKING;
  }
};
var ORDER_FEATURE = "order";
var CANCEL_ORDER_PROCESS_ID = "cancelOrder";
var CANCEL_RETURN_PROCESS_ID = "cancelReturn";
var CANCEL_REPLENISHMENT_ORDER_PROCESS_ID = "cancelReplenishmentOrder";
var ORDERS = "[Order] User Orders";
var RETURN_REQUESTS = "[Order] Order Return Requests";
var RETURN_REQUEST_DETAILS = "[Order] Return Request Details";
var ORDER_DETAILS = "[Order] User Order Details";
var REPLENISHMENT_ORDERS = "[Order] User Replenishment Orders";
var REPLENISHMENT_ORDER_DETAILS = "[Order] User Replenishment Order Details";
var CONSIGNMENT_TRACKING_BY_ID_ENTITIES = "consignment-tracking-by-id-entities";
var ORDER_BY_ID_ENTITIES = "order-by-id-entities";
function getConsignmentTrackingByIdEntityKey(orderCode, consignmentCode) {
  return `${orderCode},${consignmentCode}`;
}
var LOAD_ORDER_DETAILS = "[Order] Load Order Details";
var LOAD_ORDER_DETAILS_FAIL = "[Order] Load Order Details Fail";
var LOAD_ORDER_DETAILS_SUCCESS = "[Order] Load Order Details Success";
var CLEAR_ORDER_DETAILS = "[Order] Clear Order Details";
var CANCEL_ORDER = "[Order] Cancel Order";
var CANCEL_ORDER_FAIL = "[Order] Cancel Order Fail";
var CANCEL_ORDER_SUCCESS = "[Order] Cancel Order Success";
var RESET_CANCEL_ORDER_PROCESS = "[Order] Reset Cancel Order Process";
var LoadOrderDetails = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(ORDER_DETAILS);
    this.payload = payload;
    this.type = LOAD_ORDER_DETAILS;
  }
};
var LoadOrderDetailsFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(ORDER_DETAILS, payload);
    this.payload = payload;
    this.type = LOAD_ORDER_DETAILS_FAIL;
  }
};
var LoadOrderDetailsSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(ORDER_DETAILS);
    this.payload = payload;
    this.type = LOAD_ORDER_DETAILS_SUCCESS;
  }
};
var ClearOrderDetails = class extends utilsGroup.LoaderResetAction {
  constructor() {
    super(ORDER_DETAILS);
    this.type = CLEAR_ORDER_DETAILS;
  }
};
var CancelOrder = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID);
    this.payload = payload;
    this.type = CANCEL_ORDER;
  }
};
var CancelOrderFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID, payload);
    this.payload = payload;
    this.type = CANCEL_ORDER_FAIL;
  }
};
var CancelOrderSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor() {
    super(PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID);
    this.type = CANCEL_ORDER_SUCCESS;
  }
};
var ResetCancelOrderProcess = class extends utilsGroup.EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID);
    this.type = RESET_CANCEL_ORDER_PROCESS;
  }
};
var CREATE_ORDER_RETURN_REQUEST = "[Order] Create Order Return Request";
var CREATE_ORDER_RETURN_REQUEST_FAIL = "[Order] Create Order Return Request Fail";
var CREATE_ORDER_RETURN_REQUEST_SUCCESS = "[Order] Create Order Return Request Success";
var LOAD_ORDER_RETURN_REQUEST = "[Order] Load Order Return Request details";
var LOAD_ORDER_RETURN_REQUEST_FAIL = "[Order] Load Order Return Request details Fail";
var LOAD_ORDER_RETURN_REQUEST_SUCCESS = "[Order] Load Order Return Request details Success";
var CANCEL_ORDER_RETURN_REQUEST = "[Order] Cancel Order Return Request";
var CANCEL_ORDER_RETURN_REQUEST_FAIL = "[Order] Cancel Order Return Request Fail";
var CANCEL_ORDER_RETURN_REQUEST_SUCCESS = "[Order] Cancel Order Return Request Success";
var LOAD_ORDER_RETURN_REQUEST_LIST = "[Order] Load User Order Return Request List";
var LOAD_ORDER_RETURN_REQUEST_LIST_FAIL = "[Order] Load User Order Return Request List Fail";
var LOAD_ORDER_RETURN_REQUEST_LIST_SUCCESS = "[Order] Load User Order Return Request List Success";
var CLEAR_ORDER_RETURN_REQUEST = "[Order] Clear Order Return Request Details";
var CLEAR_ORDER_RETURN_REQUEST_LIST = "[Order] Clear Order Return Request List";
var RESET_CANCEL_RETURN_PROCESS = "[Order] Reset Cancel Return Request Process";
var CreateOrderReturnRequest = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(RETURN_REQUEST_DETAILS);
    this.payload = payload;
    this.type = CREATE_ORDER_RETURN_REQUEST;
  }
};
var CreateOrderReturnRequestFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(RETURN_REQUEST_DETAILS, payload);
    this.payload = payload;
    this.type = CREATE_ORDER_RETURN_REQUEST_FAIL;
  }
};
var CreateOrderReturnRequestSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(RETURN_REQUEST_DETAILS);
    this.payload = payload;
    this.type = CREATE_ORDER_RETURN_REQUEST_SUCCESS;
  }
};
var LoadOrderReturnRequest = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(RETURN_REQUEST_DETAILS);
    this.payload = payload;
    this.type = LOAD_ORDER_RETURN_REQUEST;
  }
};
var LoadOrderReturnRequestFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(RETURN_REQUEST_DETAILS, payload);
    this.payload = payload;
    this.type = LOAD_ORDER_RETURN_REQUEST_FAIL;
  }
};
var LoadOrderReturnRequestSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(RETURN_REQUEST_DETAILS);
    this.payload = payload;
    this.type = LOAD_ORDER_RETURN_REQUEST_SUCCESS;
  }
};
var CancelOrderReturnRequest = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, CANCEL_RETURN_PROCESS_ID);
    this.payload = payload;
    this.type = CANCEL_ORDER_RETURN_REQUEST;
  }
};
var CancelOrderReturnRequestFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, CANCEL_RETURN_PROCESS_ID, payload);
    this.payload = payload;
    this.type = CANCEL_ORDER_RETURN_REQUEST_FAIL;
  }
};
var CancelOrderReturnRequestSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor() {
    super(PROCESS_FEATURE, CANCEL_RETURN_PROCESS_ID);
    this.type = CANCEL_ORDER_RETURN_REQUEST_SUCCESS;
  }
};
var LoadOrderReturnRequestList = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(RETURN_REQUESTS);
    this.payload = payload;
    this.type = LOAD_ORDER_RETURN_REQUEST_LIST;
  }
};
var LoadOrderReturnRequestListFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(RETURN_REQUESTS, payload);
    this.payload = payload;
    this.type = LOAD_ORDER_RETURN_REQUEST_LIST_FAIL;
  }
};
var LoadOrderReturnRequestListSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(RETURN_REQUESTS);
    this.payload = payload;
    this.type = LOAD_ORDER_RETURN_REQUEST_LIST_SUCCESS;
  }
};
var ClearOrderReturnRequest = class extends utilsGroup.LoaderResetAction {
  constructor() {
    super(RETURN_REQUEST_DETAILS);
    this.type = CLEAR_ORDER_RETURN_REQUEST;
  }
};
var ClearOrderReturnRequestList = class extends utilsGroup.LoaderResetAction {
  constructor() {
    super(RETURN_REQUESTS);
    this.type = CLEAR_ORDER_RETURN_REQUEST_LIST;
  }
};
var ResetCancelReturnProcess = class extends utilsGroup.EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, CANCEL_RETURN_PROCESS_ID);
    this.type = RESET_CANCEL_RETURN_PROCESS;
  }
};
var LOAD_USER_ORDERS = "[Order] Load User Orders";
var LOAD_USER_ORDERS_FAIL = "[Order] Load User Orders Fail";
var LOAD_USER_ORDERS_SUCCESS = "[Order] Load User Orders Success";
var CLEAR_USER_ORDERS = "[Order] Clear User Orders";
var LoadUserOrders = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(ORDERS);
    this.payload = payload;
    this.type = LOAD_USER_ORDERS;
  }
};
var LoadUserOrdersFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(ORDERS, payload);
    this.payload = payload;
    this.type = LOAD_USER_ORDERS_FAIL;
  }
};
var LoadUserOrdersSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(ORDERS);
    this.payload = payload;
    this.type = LOAD_USER_ORDERS_SUCCESS;
  }
};
var ClearUserOrders = class extends utilsGroup.LoaderResetAction {
  constructor() {
    super(ORDERS);
    this.type = CLEAR_USER_ORDERS;
  }
};
var LOAD_REPLENISHMENT_ORDER_DETAILS = "[Order] Load Replenishment Order Details";
var LOAD_REPLENISHMENT_ORDER_DETAILS_SUCCESS = "[Order] Load Replenishment Order Details Success";
var LOAD_REPLENISHMENT_ORDER_DETAILS_FAIL = "[Order] Load Replenishment Order Details Fail";
var ClEAR_REPLENISHMENT_ORDER_DETAILS = "[Order] Clear Replenishment Order Details";
var CANCEL_REPLENISHMENT_ORDER = "[Order] Cancel Replenishment Order";
var CANCEL_REPLENISHMENT_ORDER_SUCCESS = "[Order] Cancel Replenishment Order Success";
var CANCEL_REPLENISHMENT_ORDER_FAIL = "[Order] Cancel Replenishment Order Fail";
var CLEAR_CANCEL_REPLENISHMENT_ORDER = "[Order] Clear Cancel Replenishment Order";
var LoadReplenishmentOrderDetails = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(REPLENISHMENT_ORDER_DETAILS);
    this.payload = payload;
    this.type = LOAD_REPLENISHMENT_ORDER_DETAILS;
  }
};
var LoadReplenishmentOrderDetailsSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(REPLENISHMENT_ORDER_DETAILS);
    this.payload = payload;
    this.type = LOAD_REPLENISHMENT_ORDER_DETAILS_SUCCESS;
  }
};
var LoadReplenishmentOrderDetailsFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(REPLENISHMENT_ORDER_DETAILS, payload);
    this.payload = payload;
    this.type = LOAD_REPLENISHMENT_ORDER_DETAILS_FAIL;
  }
};
var ClearReplenishmentOrderDetails = class extends utilsGroup.LoaderResetAction {
  constructor() {
    super(REPLENISHMENT_ORDER_DETAILS);
    this.type = ClEAR_REPLENISHMENT_ORDER_DETAILS;
  }
};
var CancelReplenishmentOrder = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, CANCEL_REPLENISHMENT_ORDER_PROCESS_ID);
    this.payload = payload;
    this.type = CANCEL_REPLENISHMENT_ORDER;
  }
};
var CancelReplenishmentOrderSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, CANCEL_REPLENISHMENT_ORDER_PROCESS_ID);
    this.payload = payload;
    this.type = CANCEL_REPLENISHMENT_ORDER_SUCCESS;
  }
};
var CancelReplenishmentOrderFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, CANCEL_REPLENISHMENT_ORDER_PROCESS_ID, payload);
    this.payload = payload;
    this.type = CANCEL_REPLENISHMENT_ORDER_FAIL;
  }
};
var ClearCancelReplenishmentOrder = class extends utilsGroup.EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, CANCEL_REPLENISHMENT_ORDER_PROCESS_ID);
    this.type = CLEAR_CANCEL_REPLENISHMENT_ORDER;
  }
};
var LOAD_USER_REPLENISHMENT_ORDERS = "[Order] Load User Replenishment Orders";
var LOAD_USER_REPLENISHMENT_ORDERS_FAIL = "[Order] Load User Replenishment Orders Fail";
var LOAD_USER_REPLENISHMENT_ORDERS_SUCCESS = "[Order] Load User Replenishment Orders Success";
var CLEAR_USER_REPLENISHMENT_ORDERS = "[Order] Clear User Replenishment Orders";
var LoadUserReplenishmentOrders = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(REPLENISHMENT_ORDERS);
    this.payload = payload;
    this.type = LOAD_USER_REPLENISHMENT_ORDERS;
  }
};
var LoadUserReplenishmentOrdersFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(REPLENISHMENT_ORDERS, payload);
    this.payload = payload;
    this.type = LOAD_USER_REPLENISHMENT_ORDERS_FAIL;
  }
};
var LoadUserReplenishmentOrdersSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(REPLENISHMENT_ORDERS);
    this.payload = payload;
    this.type = LOAD_USER_REPLENISHMENT_ORDERS_SUCCESS;
  }
};
var ClearUserReplenishmentOrders = class extends utilsGroup.LoaderResetAction {
  constructor() {
    super(REPLENISHMENT_ORDERS);
    this.type = CLEAR_USER_REPLENISHMENT_ORDERS;
  }
};
var LOAD_CONSIGNMENT_TRACKING_BY_ID = "[Order] Load Consignment Tracking By ID Data";
var LOAD_CONSIGNMENT_TRACKING_BY_ID_FAIL = "[Order] Load  Consignment Tracking By ID Data Fail";
var LOAD_CONSIGNMENT_TRACKING_BY_ID_SUCCESS = "[Order] Load Consignment Tracking By ID Data Success";
var LoadConsignmentTrackingById = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(CONSIGNMENT_TRACKING_BY_ID_ENTITIES, getConsignmentTrackingByIdEntityKey(payload.orderCode, payload.consignmentCode));
    this.payload = payload;
    this.type = LOAD_CONSIGNMENT_TRACKING_BY_ID;
  }
};
var LoadConsignmentTrackingByIdFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(CONSIGNMENT_TRACKING_BY_ID_ENTITIES, getConsignmentTrackingByIdEntityKey(payload.orderCode, payload.consignmentCode), payload.error);
    this.payload = payload;
    this.type = LOAD_CONSIGNMENT_TRACKING_BY_ID_FAIL;
  }
};
var LoadConsignmentTrackingByIdSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(CONSIGNMENT_TRACKING_BY_ID_ENTITIES, getConsignmentTrackingByIdEntityKey(payload.orderCode, payload.consignmentCode));
    this.payload = payload;
    this.type = LOAD_CONSIGNMENT_TRACKING_BY_ID_SUCCESS;
  }
};
var LOAD_ORDER_BY_ID = "[Order] Load Order By ID Data";
var LOAD_ORDER_BY_ID_FAIL = "[Order] Load Order By ID Data Fail";
var LOAD_ORDER_BY_ID_SUCCESS = "[Order] Load Order By ID Data Success";
var LoadOrderById = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(ORDER_BY_ID_ENTITIES, payload.code);
    this.payload = payload;
    this.type = LOAD_ORDER_BY_ID;
  }
};
var LoadOrderByIdFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(ORDER_BY_ID_ENTITIES, payload.code, payload.error);
    this.payload = payload;
    this.type = LOAD_ORDER_BY_ID_FAIL;
  }
};
var LoadOrderByIdSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(ORDER_BY_ID_ENTITIES, payload.code ?? "");
    this.payload = payload;
    this.type = LOAD_ORDER_BY_ID_SUCCESS;
  }
};
var orderGroup_actions = Object.freeze({
  __proto__: null,
  CANCEL_ORDER,
  CANCEL_ORDER_FAIL,
  CANCEL_ORDER_RETURN_REQUEST,
  CANCEL_ORDER_RETURN_REQUEST_FAIL,
  CANCEL_ORDER_RETURN_REQUEST_SUCCESS,
  CANCEL_ORDER_SUCCESS,
  CANCEL_REPLENISHMENT_ORDER,
  CANCEL_REPLENISHMENT_ORDER_FAIL,
  CANCEL_REPLENISHMENT_ORDER_SUCCESS,
  CLEAR_CANCEL_REPLENISHMENT_ORDER,
  CLEAR_CONSIGNMENT_TRACKING,
  CLEAR_ORDER_DETAILS,
  CLEAR_ORDER_RETURN_REQUEST,
  CLEAR_ORDER_RETURN_REQUEST_LIST,
  CLEAR_USER_ORDERS,
  CLEAR_USER_REPLENISHMENT_ORDERS,
  CREATE_ORDER_RETURN_REQUEST,
  CREATE_ORDER_RETURN_REQUEST_FAIL,
  CREATE_ORDER_RETURN_REQUEST_SUCCESS,
  CancelOrder,
  CancelOrderFail,
  CancelOrderReturnRequest,
  CancelOrderReturnRequestFail,
  CancelOrderReturnRequestSuccess,
  CancelOrderSuccess,
  CancelReplenishmentOrder,
  CancelReplenishmentOrderFail,
  CancelReplenishmentOrderSuccess,
  ClEAR_REPLENISHMENT_ORDER_DETAILS,
  ClearCancelReplenishmentOrder,
  ClearConsignmentTracking,
  ClearOrderDetails,
  ClearOrderReturnRequest,
  ClearOrderReturnRequestList,
  ClearReplenishmentOrderDetails,
  ClearUserOrders,
  ClearUserReplenishmentOrders,
  CreateOrderReturnRequest,
  CreateOrderReturnRequestFail,
  CreateOrderReturnRequestSuccess,
  LOAD_CONSIGNMENT_TRACKING,
  LOAD_CONSIGNMENT_TRACKING_BY_ID,
  LOAD_CONSIGNMENT_TRACKING_BY_ID_FAIL,
  LOAD_CONSIGNMENT_TRACKING_BY_ID_SUCCESS,
  LOAD_CONSIGNMENT_TRACKING_FAIL,
  LOAD_CONSIGNMENT_TRACKING_SUCCESS,
  LOAD_ORDER_BY_ID,
  LOAD_ORDER_BY_ID_FAIL,
  LOAD_ORDER_BY_ID_SUCCESS,
  LOAD_ORDER_DETAILS,
  LOAD_ORDER_DETAILS_FAIL,
  LOAD_ORDER_DETAILS_SUCCESS,
  LOAD_ORDER_RETURN_REQUEST,
  LOAD_ORDER_RETURN_REQUEST_FAIL,
  LOAD_ORDER_RETURN_REQUEST_LIST,
  LOAD_ORDER_RETURN_REQUEST_LIST_FAIL,
  LOAD_ORDER_RETURN_REQUEST_LIST_SUCCESS,
  LOAD_ORDER_RETURN_REQUEST_SUCCESS,
  LOAD_REPLENISHMENT_ORDER_DETAILS,
  LOAD_REPLENISHMENT_ORDER_DETAILS_FAIL,
  LOAD_REPLENISHMENT_ORDER_DETAILS_SUCCESS,
  LOAD_USER_ORDERS,
  LOAD_USER_ORDERS_FAIL,
  LOAD_USER_ORDERS_SUCCESS,
  LOAD_USER_REPLENISHMENT_ORDERS,
  LOAD_USER_REPLENISHMENT_ORDERS_FAIL,
  LOAD_USER_REPLENISHMENT_ORDERS_SUCCESS,
  LoadConsignmentTracking,
  LoadConsignmentTrackingById,
  LoadConsignmentTrackingByIdFail,
  LoadConsignmentTrackingByIdSuccess,
  LoadConsignmentTrackingFail,
  LoadConsignmentTrackingSuccess,
  LoadOrderById,
  LoadOrderByIdFail,
  LoadOrderByIdSuccess,
  LoadOrderDetails,
  LoadOrderDetailsFail,
  LoadOrderDetailsSuccess,
  LoadOrderReturnRequest,
  LoadOrderReturnRequestFail,
  LoadOrderReturnRequestList,
  LoadOrderReturnRequestListFail,
  LoadOrderReturnRequestListSuccess,
  LoadOrderReturnRequestSuccess,
  LoadReplenishmentOrderDetails,
  LoadReplenishmentOrderDetailsFail,
  LoadReplenishmentOrderDetailsSuccess,
  LoadUserOrders,
  LoadUserOrdersFail,
  LoadUserOrdersSuccess,
  LoadUserReplenishmentOrders,
  LoadUserReplenishmentOrdersFail,
  LoadUserReplenishmentOrdersSuccess,
  RESET_CANCEL_ORDER_PROCESS,
  RESET_CANCEL_RETURN_PROCESS,
  ResetCancelOrderProcess,
  ResetCancelReturnProcess
});
var getOrderState = createFeatureSelector(ORDER_FEATURE);
var getConsignmentTrackingState = createSelector(getOrderState, (state) => state.consignmentTracking);
var getConsignmentTracking = createSelector(getConsignmentTrackingState, (state) => state.tracking);
var getOrderDetailState = createSelector(getOrderState, (state) => state.orderDetail);
var getOrderDetails = createSelector(getOrderDetailState, (state) => utilsGroup.loaderValueSelector(state));
var getOrderDetailsLoading = createSelector(getOrderDetailState, (state) => utilsGroup.loaderLoadingSelector(state));
var getOrderReturnRequestState = createSelector(getOrderState, (state) => state.orderReturn);
var getOrderReturnRequest = createSelector(getOrderReturnRequestState, (state) => utilsGroup.loaderValueSelector(state));
var getOrderReturnRequestLoading = createSelector(getOrderReturnRequestState, (state) => utilsGroup.loaderLoadingSelector(state));
var getOrderReturnRequestSuccess = createSelector(getOrderReturnRequestState, (state) => utilsGroup.loaderSuccessSelector(state) && !utilsGroup.loaderLoadingSelector(state));
var getOrderReturnRequestListState = createSelector(getOrderState, (state) => state.orderReturnList);
var getOrderReturnRequestList = createSelector(getOrderReturnRequestListState, (state) => utilsGroup.loaderValueSelector(state));
var getOrdersState = createSelector(getOrderState, (state) => state.orders);
var getOrdersLoaded = createSelector(getOrdersState, (state) => utilsGroup.loaderSuccessSelector(state));
var getOrders = createSelector(getOrdersState, (state) => utilsGroup.loaderValueSelector(state));
var getReplenishmentOrderState = createSelector(getOrderState, (state) => state.replenishmentOrder);
var getReplenishmentOrderDetailsValue = createSelector(getReplenishmentOrderState, (state) => utilsGroup.loaderValueSelector(state));
var getReplenishmentOrderDetailsLoading = createSelector(getReplenishmentOrderState, (state) => utilsGroup.loaderLoadingSelector(state));
var getReplenishmentOrderDetailsSuccess = createSelector(getReplenishmentOrderState, (state) => utilsGroup.loaderSuccessSelector(state));
var getReplenishmentOrderDetailsError = createSelector(getReplenishmentOrderState, (state) => utilsGroup.loaderErrorSelector(state));
var getReplenishmentOrdersState = createSelector(getOrderState, (state) => state.replenishmentOrders);
var getReplenishmentOrders = createSelector(getReplenishmentOrdersState, (state) => utilsGroup.loaderValueSelector(state));
var getReplenishmentOrdersLoading = createSelector(getReplenishmentOrdersState, (state) => utilsGroup.loaderLoadingSelector(state));
var getReplenishmentOrdersError = createSelector(getReplenishmentOrdersState, (state) => utilsGroup.loaderErrorSelector(state));
var getReplenishmentOrdersSuccess = createSelector(getReplenishmentOrdersState, (state) => utilsGroup.loaderSuccessSelector(state));
var getConsignmentTrackingByIdEntities = createSelector(getOrderState, (state) => state.consignmentTrackingById);
var getConsignmentTrackingByIdEntity = (orderCode, consignmentCode) => createSelector(getConsignmentTrackingByIdEntities, (state) => utilsGroup.entityLoaderStateSelector(state, getConsignmentTrackingByIdEntityKey(orderCode, consignmentCode)));
var getConsignmentTrackingById = (orderCode, consignmentCode) => {
  return createSelector(getConsignmentTrackingByIdEntity(orderCode, consignmentCode), (consignmentTrackingByIdState) => utilsGroup.loaderValueSelector(consignmentTrackingByIdState));
};
var getConsignmentTrackingByIdLoading = (orderCode, consignmentCode) => {
  return createSelector(getConsignmentTrackingByIdEntity(orderCode, consignmentCode), (loaderState) => utilsGroup.loaderLoadingSelector(loaderState));
};
var getConsignmentTrackingByIdSuccess = (orderCode, consignmentCode) => {
  return createSelector(getConsignmentTrackingByIdEntity(orderCode, consignmentCode), (loaderState) => utilsGroup.loaderSuccessSelector(loaderState));
};
var getOrderByIdEntities = createSelector(getOrderState, (state) => state.orderById);
var getOrderByIdEntity = (code) => createSelector(getOrderByIdEntities, (state) => utilsGroup.entityLoaderStateSelector(state, code));
var getOrderById = (code) => {
  return createSelector(getOrderByIdEntity(code), (orderByIDState) => utilsGroup.loaderValueSelector(orderByIDState));
};
var getOrderByIdLoading = (code) => {
  return createSelector(getOrderByIdEntity(code), (loaderState) => utilsGroup.loaderLoadingSelector(loaderState));
};
var getOrderByIdSuccess = (code) => {
  return createSelector(getOrderByIdEntity(code), (loaderState) => utilsGroup.loaderSuccessSelector(loaderState));
};
var orderGroup_selectors = Object.freeze({
  __proto__: null,
  getConsignmentTracking,
  getConsignmentTrackingById,
  getConsignmentTrackingByIdEntities,
  getConsignmentTrackingByIdEntity,
  getConsignmentTrackingByIdLoading,
  getConsignmentTrackingByIdSuccess,
  getConsignmentTrackingState,
  getOrderById,
  getOrderByIdEntities,
  getOrderByIdEntity,
  getOrderByIdLoading,
  getOrderByIdSuccess,
  getOrderDetailState,
  getOrderDetails,
  getOrderDetailsLoading,
  getOrderReturnRequest,
  getOrderReturnRequestList,
  getOrderReturnRequestListState,
  getOrderReturnRequestLoading,
  getOrderReturnRequestState,
  getOrderReturnRequestSuccess,
  getOrderState,
  getOrders,
  getOrdersLoaded,
  getOrdersState,
  getReplenishmentOrderDetailsError,
  getReplenishmentOrderDetailsLoading,
  getReplenishmentOrderDetailsSuccess,
  getReplenishmentOrderDetailsValue,
  getReplenishmentOrderState,
  getReplenishmentOrders,
  getReplenishmentOrdersError,
  getReplenishmentOrdersLoading,
  getReplenishmentOrdersState,
  getReplenishmentOrdersSuccess
});
var OrderHistoryService = class _OrderHistoryService {
  constructor(store, processStateStore, userIdService, routingService) {
    this.store = store;
    this.processStateStore = processStateStore;
    this.userIdService = userIdService;
    this.routingService = routingService;
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
  loadOrderList(pageSize, currentPage, sort) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        let replenishmentOrderCode;
        this.routingService.getRouterState().pipe(take(1)).subscribe((data) => {
          replenishmentOrderCode = data?.state?.params?.replenishmentOrderCode;
        }).unsubscribe();
        this.store.dispatch(new LoadUserOrders({
          userId,
          pageSize,
          currentPage,
          sort,
          replenishmentOrderCode
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
    this.store.dispatch(new ClearUserOrders());
  }
  /**
   *  Returns a consignment tracking detail
   */
  getConsignmentTracking() {
    return this.store.pipe(select(getConsignmentTracking));
  }
  /**
   * Retrieves consignment tracking details
   * @param orderCode an order code
   * @param consignmentCode a consignment code
   */
  loadConsignmentTracking(orderCode, consignmentCode) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new LoadConsignmentTracking({
        userId,
        orderCode,
        consignmentCode
      }));
    });
  }
  /**
   * Cleaning consignment tracking
   */
  clearConsignmentTracking() {
    this.store.dispatch(new ClearConsignmentTracking());
  }
  /*
   * Cancel an order
   */
  cancelOrder(orderCode, cancelRequestInput) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new CancelOrder({
        userId,
        orderCode,
        cancelRequestInput
      }));
    });
  }
  /**
   * Returns the cancel order loading flag
   */
  getCancelOrderLoading() {
    return this.processStateStore.pipe(select(process_selectors.getProcessLoadingFactory(CANCEL_ORDER_PROCESS_ID)));
  }
  /**
   * Returns the cancel order success flag
   */
  getCancelOrderSuccess() {
    return this.processStateStore.pipe(select(process_selectors.getProcessSuccessFactory(CANCEL_ORDER_PROCESS_ID)));
  }
  /**
   * Resets the cancel order process flags
   */
  resetCancelOrderProcessState() {
    return this.store.dispatch(new ResetCancelOrderProcess());
  }
  /**
   * Returns the order details loading flag
   */
  getOrderDetailsLoading() {
    return this.store.pipe(select(getOrderDetailsLoading));
  }
  /**
   * @deprecated: Method doesn't pass facade method's requirements (returns void or Observable)
   */
  getQueryParams(_order) {
    return null;
  }
  static {
    this.ɵfac = function OrderHistoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderHistoryService)(ɵɵinject(Store), ɵɵinject(Store), ɵɵinject(UserIdService), ɵɵinject(RoutingService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderHistoryService,
      factory: _OrderHistoryService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderHistoryService, [{
    type: Injectable
  }], () => [{
    type: Store
  }, {
    type: Store
  }, {
    type: UserIdService
  }, {
    type: RoutingService
  }], null);
})();
var OrderReturnRequestService = class _OrderReturnRequestService {
  constructor(store, processStateStore, userIdService) {
    this.store = store;
    this.processStateStore = processStateStore;
    this.userIdService = userIdService;
  }
  /**
   * Create order return request
   * @param orderCode an order code
   * @param returnRequestInput order return request entry input
   */
  createOrderReturnRequest(returnRequestInput) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new CreateOrderReturnRequest({
        userId,
        returnRequestInput
      }));
    });
  }
  /**
   * Return an order return request
   */
  getOrderReturnRequest() {
    return this.store.pipe(select(getOrderReturnRequest));
  }
  /**
   * Gets order return request list
   */
  getOrderReturnRequestList(pageSize) {
    return this.store.pipe(select(getOrderReturnRequestListState), tap((returnListState) => {
      const attemptedLoad = returnListState.loading || returnListState.success || returnListState.error;
      if (!attemptedLoad) {
        this.loadOrderReturnRequestList(pageSize);
      }
    }), map((returnListState) => returnListState.value));
  }
  /**
   * Loads order return request detail
   * @param returnRequestCode
   */
  loadOrderReturnRequestDetail(returnRequestCode) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new LoadOrderReturnRequest({
        userId,
        returnRequestCode
      }));
    });
  }
  /**
   * Loads order return request list
   * @param pageSize page size
   * @param currentPage current page
   * @param sort sort
   */
  loadOrderReturnRequestList(pageSize, currentPage, sort) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        this.store.dispatch(new LoadOrderReturnRequestList({
          userId,
          pageSize,
          currentPage,
          sort
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Cleaning order return request list
   */
  clearOrderReturnRequestList() {
    this.store.dispatch(new ClearOrderReturnRequestList());
  }
  /**
   * Get the order return request loading flag
   */
  getReturnRequestLoading() {
    return this.store.pipe(select(getOrderReturnRequestLoading));
  }
  /**
   * Get the order return request success flag
   */
  getReturnRequestSuccess() {
    return this.store.pipe(select(getOrderReturnRequestSuccess));
  }
  /**
   * Cleaning order return request details
   */
  clearOrderReturnRequestDetail() {
    this.store.dispatch(new ClearOrderReturnRequest());
  }
  /*
   * Cancel order return request
   */
  cancelOrderReturnRequest(returnRequestCode, returnRequestModification) {
    this.userIdService.takeUserId().subscribe((userId) => {
      this.store.dispatch(new CancelOrderReturnRequest({
        userId,
        returnRequestCode,
        returnRequestModification
      }));
    });
  }
  /**
   * Returns the cancel return request loading flag
   */
  getCancelReturnRequestLoading() {
    return this.processStateStore.pipe(select(process_selectors.getProcessLoadingFactory(CANCEL_RETURN_PROCESS_ID)));
  }
  /**
   * Returns the cancel return request success flag
   */
  getCancelReturnRequestSuccess() {
    return this.processStateStore.pipe(select(process_selectors.getProcessSuccessFactory(CANCEL_RETURN_PROCESS_ID)));
  }
  /**
   * Resets the cancel return request process flags
   */
  resetCancelReturnRequestProcessState() {
    return this.store.dispatch(new ResetCancelReturnProcess());
  }
  static {
    this.ɵfac = function OrderReturnRequestService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderReturnRequestService)(ɵɵinject(Store), ɵɵinject(Store), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderReturnRequestService,
      factory: _OrderReturnRequestService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderReturnRequestService, [{
    type: Injectable
  }], () => [{
    type: Store
  }, {
    type: Store
  }, {
    type: UserIdService
  }], null);
})();
var OrderService = class _OrderService {
  constructor(activeCartFacade, userIdService, commandService, orderConnector, eventService) {
    this.activeCartFacade = activeCartFacade;
    this.userIdService = userIdService;
    this.commandService = commandService;
    this.orderConnector = orderConnector;
    this.eventService = eventService;
    this.placedOrder$ = new BehaviorSubject(void 0);
    this.placeOrderCommand = this.commandService.create((payload) => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.orderConnector.placeOrder(userId, cartId, payload).pipe(tap((order) => {
      this.placedOrder$.next(order);
      this.eventService.dispatch({
        userId,
        cartId,
        /**
         * As we know the cart is not anonymous (precondition checked),
         * we can safely use the cartId, which is actually the cart.code.
         */
        cartCode: cartId,
        order
      }, OrderPlacedEvent);
    })))), {
      strategy: CommandStrategy.CancelPrevious
    });
    this.placePaymentAuthorizedOrderCommand = this.commandService.create((payload) => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.orderConnector.placePaymentAuthorizedOrder(userId, cartId, payload).pipe(tap((order) => {
      this.setPlacedOrder(order);
      this.eventService.dispatch({
        order,
        userId,
        cartId,
        /**
         * As we know the cart is not anonymous (precondition checked),
         * we can safely use the cartId, which is actually the cart.code.
         */
        cartCode: cartId
      }, OrderPlacedEvent);
    })))), {
      strategy: CommandStrategy.CancelPrevious
    });
  }
  /**
   * Performs the necessary checkout preconditions.
   */
  checkoutPreconditions() {
    return combineLatest([this.userIdService.takeUserId(), this.activeCartFacade.takeActiveCartId(), this.activeCartFacade.isGuestCart()]).pipe(take(1), map(([userId, cartId, isGuestCart]) => {
      if (!userId || !cartId || userId === OCC_USER_ID_ANONYMOUS && !isGuestCart) {
        throw new Error("Checkout conditions not met");
      }
      return [userId, cartId];
    }));
  }
  placeOrder(termsChecked) {
    return this.placeOrderCommand.execute(termsChecked);
  }
  placePaymentAuthorizedOrder(termsChecked) {
    return this.placePaymentAuthorizedOrderCommand.execute(termsChecked);
  }
  getOrderDetails() {
    return this.placedOrder$.asObservable();
  }
  clearPlacedOrder() {
    this.placedOrder$.next(void 0);
  }
  setPlacedOrder(order) {
    this.placedOrder$.next(order);
  }
  getPickupEntries() {
    return this.getOrderDetails().pipe(map((order) => order?.entries?.filter((entry) => entry.deliveryPointOfService !== void 0) || []));
  }
  getDeliveryEntries() {
    return this.getOrderDetails().pipe(map((order) => order?.entries?.filter((entry) => entry.deliveryPointOfService === void 0) || []));
  }
  static {
    this.ɵfac = function OrderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderService)(ɵɵinject(ActiveCartFacade), ɵɵinject(UserIdService), ɵɵinject(CommandService), ɵɵinject(OrderConnector), ɵɵinject(EventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderService,
      factory: _OrderService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderService, [{
    type: Injectable
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: UserIdService
  }, {
    type: CommandService
  }, {
    type: OrderConnector
  }, {
    type: EventService
  }], null);
})();
var ReorderOrderService = class _ReorderOrderService {
  constructor(commandService, reorderOrderConnector, userIdService, activeCartFacade, multiCartFacade) {
    this.commandService = commandService;
    this.reorderOrderConnector = reorderOrderConnector;
    this.userIdService = userIdService;
    this.activeCartFacade = activeCartFacade;
    this.multiCartFacade = multiCartFacade;
    this.reorderCommand = this.commandService.create(({
      orderId
    }) => this.reorderPreconditions().pipe(switchMap((userId) => this.reorderOrderConnector.reorder(orderId, userId))), {
      strategy: CommandStrategy.CancelPrevious
    });
  }
  /**
   * Create cart from an existing order
   */
  reorder(orderId) {
    return this.reorderCommand.execute({
      orderId
    });
  }
  reorderPreconditions() {
    return combineLatest([this.userIdService.takeUserId(), this.activeCartFacade.getActiveCartId()]).pipe(take(1), map(([userId, cartId]) => {
      if (!userId) {
        throw new Error("Must be logged in to reorder");
      }
      if (cartId) {
        this.multiCartFacade.deleteCart(cartId, userId);
      }
      return userId;
    }));
  }
  static {
    this.ɵfac = function ReorderOrderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReorderOrderService)(ɵɵinject(CommandService), ɵɵinject(ReorderOrderConnector), ɵɵinject(UserIdService), ɵɵinject(ActiveCartFacade), ɵɵinject(MultiCartFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ReorderOrderService,
      factory: _ReorderOrderService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderOrderService, [{
    type: Injectable
  }], () => [{
    type: CommandService
  }, {
    type: ReorderOrderConnector
  }, {
    type: UserIdService
  }, {
    type: ActiveCartFacade
  }, {
    type: MultiCartFacade
  }], null);
})();
var ReplenishmentOrderHistoryService = class _ReplenishmentOrderHistoryService {
  constructor(store, processStateStore, userIdService) {
    this.store = store;
    this.processStateStore = processStateStore;
    this.userIdService = userIdService;
  }
  /**
   * Returns replenishment order details for a given 'current' user
   *
   * @param replenishmentOrderCode a replenishment order code
   */
  loadReplenishmentOrderDetails(replenishmentOrderCode) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        this.store.dispatch(new LoadReplenishmentOrderDetails({
          userId,
          replenishmentOrderCode
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Returns a replenishment order details
   */
  getReplenishmentOrderDetails() {
    return this.store.pipe(select(getReplenishmentOrderDetailsValue));
  }
  /**
   * Returns a replenishment order details loading flag
   */
  getReplenishmentOrderDetailsLoading() {
    return this.store.pipe(select(getReplenishmentOrderDetailsLoading));
  }
  /**
   * Returns a replenishment order details success flag
   */
  getReplenishmentOrderDetailsSuccess() {
    return this.store.pipe(select(getReplenishmentOrderDetailsSuccess));
  }
  /**
   * Returns a replenishment order details error flag
   */
  getReplenishmentOrderDetailsError() {
    return this.store.pipe(select(getReplenishmentOrderDetailsError));
  }
  /**
   * Clears the replenishment orders details state
   */
  clearReplenishmentOrderDetails() {
    this.store.dispatch(new ClearReplenishmentOrderDetails());
  }
  /**
   * Cancels a specific replenishment order for a given 'current' user
   *
   * @param replenishmentOrderCode a replenishment order code
   */
  cancelReplenishmentOrder(replenishmentOrderCode) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        this.store.dispatch(new CancelReplenishmentOrder({
          userId,
          replenishmentOrderCode
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Returns the cancel replenishment order loading flag
   */
  getCancelReplenishmentOrderLoading() {
    return this.processStateStore.pipe(select(process_selectors.getProcessLoadingFactory(CANCEL_REPLENISHMENT_ORDER_PROCESS_ID)));
  }
  /**
   * Returns the cancel replenishment order success flag
   */
  getCancelReplenishmentOrderSuccess() {
    return this.processStateStore.pipe(select(process_selectors.getProcessSuccessFactory(CANCEL_REPLENISHMENT_ORDER_PROCESS_ID)));
  }
  /**
   * Returns the cancel replenishment order error flag
   */
  getCancelReplenishmentOrderError() {
    return this.processStateStore.pipe(select(process_selectors.getProcessErrorFactory(CANCEL_REPLENISHMENT_ORDER_PROCESS_ID)));
  }
  /**
   * Clears the cancel replenishment order processing state
   */
  clearCancelReplenishmentOrderProcessState() {
    this.store.dispatch(new ClearCancelReplenishmentOrder());
  }
  /**
   * Returns replenishment order history list
   */
  getReplenishmentOrderHistoryList(pageSize) {
    return this.store.pipe(select(getReplenishmentOrdersState), tap((replenishmentOrderListState) => {
      const attemptedLoad = replenishmentOrderListState.loading || replenishmentOrderListState.success || replenishmentOrderListState.error;
      if (!attemptedLoad) {
        this.loadReplenishmentOrderList(pageSize);
      }
    }), map((replenishmentOrderListState) => replenishmentOrderListState.value));
  }
  /**
   * Returns a loading flag for replenishment order history list
   */
  getReplenishmentOrderHistoryListLoading() {
    return this.store.pipe(select(getReplenishmentOrdersLoading));
  }
  /**
   * Returns a error flag for replenishment order history list
   */
  getReplenishmentOrderHistoryListError() {
    return this.store.pipe(select(getReplenishmentOrdersError));
  }
  /**
   * Returns a success flag for replenishment order history list
   */
  getReplenishmentOrderHistoryListSuccess() {
    return this.store.pipe(select(getReplenishmentOrdersSuccess));
  }
  /**
   * Retrieves a replenishment order list
   * @param pageSize page size
   * @param currentPage current page
   * @param sort sort
   */
  loadReplenishmentOrderList(pageSize, currentPage, sort) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        this.store.dispatch(new LoadUserReplenishmentOrders({
          userId,
          pageSize,
          currentPage,
          sort
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Cleaning replenishment order list
   */
  clearReplenishmentOrderList() {
    this.store.dispatch(new ClearUserReplenishmentOrders());
  }
  static {
    this.ɵfac = function ReplenishmentOrderHistoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReplenishmentOrderHistoryService)(ɵɵinject(Store), ɵɵinject(Store), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ReplenishmentOrderHistoryService,
      factory: _ReplenishmentOrderHistoryService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderHistoryService, [{
    type: Injectable
  }], () => [{
    type: Store
  }, {
    type: Store
  }, {
    type: UserIdService
  }], null);
})();
var ScheduledReplenishmentOrderService = class _ScheduledReplenishmentOrderService {
  constructor(activeCartFacade, userIdService, commandService, scheduledReplenishmentOrderConnector, eventService, orderFacade) {
    this.activeCartFacade = activeCartFacade;
    this.userIdService = userIdService;
    this.commandService = commandService;
    this.scheduledReplenishmentOrderConnector = scheduledReplenishmentOrderConnector;
    this.eventService = eventService;
    this.orderFacade = orderFacade;
    this.scheduleReplenishmentOrderCommand = this.commandService.create(({
      form,
      termsChecked
    }) => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.scheduledReplenishmentOrderConnector.scheduleReplenishmentOrder(cartId, form, termsChecked, userId).pipe(tap((replenishmentOrder) => {
      this.orderFacade.setPlacedOrder(replenishmentOrder);
      this.eventService.dispatch({
        userId,
        cartId,
        /**
         * As we know the cart is not anonymous (precondition checked),
         * we can safely use the cartId, which is actually the cart.code.
         */
        cartCode: cartId,
        replenishmentOrder
      }, ReplenishmentOrderScheduledEvent);
    })))), {
      strategy: CommandStrategy.CancelPrevious
    });
  }
  checkoutPreconditions() {
    return combineLatest([this.userIdService.takeUserId(), this.activeCartFacade.takeActiveCartId(), this.activeCartFacade.isGuestCart()]).pipe(take(1), map(([userId, cartId, isGuestCart]) => {
      if (!userId || !cartId || userId === OCC_USER_ID_ANONYMOUS && !isGuestCart) {
        throw new Error("Order conditions not met");
      }
      return [userId, cartId];
    }));
  }
  /**
   * Schedule a replenishment order
   */
  scheduleReplenishmentOrder(scheduleReplenishmentForm, termsChecked) {
    return this.scheduleReplenishmentOrderCommand.execute({
      termsChecked,
      form: scheduleReplenishmentForm
    });
  }
  static {
    this.ɵfac = function ScheduledReplenishmentOrderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduledReplenishmentOrderService)(ɵɵinject(ActiveCartFacade), ɵɵinject(UserIdService), ɵɵinject(CommandService), ɵɵinject(ScheduledReplenishmentOrderConnector), ɵɵinject(EventService), ɵɵinject(OrderFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ScheduledReplenishmentOrderService,
      factory: _ScheduledReplenishmentOrderService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduledReplenishmentOrderService, [{
    type: Injectable
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: UserIdService
  }, {
    type: CommandService
  }, {
    type: ScheduledReplenishmentOrderConnector
  }, {
    type: EventService
  }, {
    type: OrderFacade
  }], null);
})();
var ConsignmentTrackingByIdEffects = class _ConsignmentTrackingByIdEffects {
  constructor() {
    this.logger = inject(LoggerService);
    this.actions$ = inject(Actions);
    this.orderConnector = inject(OrderHistoryConnector);
    this.loadConsignmentTrackingById$ = createEffect(() => this.actions$.pipe(ofType(LOAD_CONSIGNMENT_TRACKING_BY_ID), map((action) => action.payload), switchMap((payload) => {
      return this.orderConnector.getConsignmentTracking(payload.orderCode, payload.consignmentCode, payload.userId).pipe(map((tracking) => new LoadConsignmentTrackingByIdSuccess({
        orderCode: payload.orderCode,
        consignmentCode: payload.consignmentCode,
        consignmentTracking: tracking
      })), catchError((error) => of(new LoadConsignmentTrackingByIdFail({
        orderCode: payload.orderCode,
        consignmentCode: payload.consignmentCode,
        error: tryNormalizeHttpError(error, this.logger)
      }))));
    })));
  }
  static {
    this.ɵfac = function ConsignmentTrackingByIdEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsignmentTrackingByIdEffects)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConsignmentTrackingByIdEffects,
      factory: _ConsignmentTrackingByIdEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsignmentTrackingByIdEffects, [{
    type: Injectable
  }], null, null);
})();
var ConsignmentTrackingEffects = class _ConsignmentTrackingEffects {
  constructor(actions$, orderConnector) {
    this.actions$ = actions$;
    this.orderConnector = orderConnector;
    this.logger = inject(LoggerService);
    this.loadConsignmentTracking$ = createEffect(() => this.actions$.pipe(ofType(LOAD_CONSIGNMENT_TRACKING), map((action) => action.payload), switchMap((payload) => {
      return this.orderConnector.getConsignmentTracking(payload.orderCode, payload.consignmentCode, payload.userId).pipe(map((tracking) => new LoadConsignmentTrackingSuccess(tracking)), catchError((error) => of(new LoadConsignmentTrackingFail(tryNormalizeHttpError(error, this.logger)))));
    })));
  }
  static {
    this.ɵfac = function ConsignmentTrackingEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsignmentTrackingEffects)(ɵɵinject(Actions), ɵɵinject(OrderHistoryConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConsignmentTrackingEffects,
      factory: _ConsignmentTrackingEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsignmentTrackingEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: OrderHistoryConnector
  }], null);
})();
var OrderByIdEffect = class _OrderByIdEffect {
  constructor() {
    this.logger = inject(LoggerService);
    this.actions$ = inject(Actions);
    this.orderConnector = inject(OrderHistoryConnector);
    this.loadOrderById$ = createEffect(() => this.actions$.pipe(ofType(LOAD_ORDER_BY_ID), map((action) => action.payload), mergeMap(({
      userId,
      code
    }) => {
      return this.orderConnector.get(userId, code).pipe(map((order) => {
        return new LoadOrderByIdSuccess(order);
      }), catchError((error) => {
        return of(new LoadOrderByIdFail({
          code,
          error: tryNormalizeHttpError(error, this.logger)
        }));
      }));
    })));
  }
  static {
    this.ɵfac = function OrderByIdEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderByIdEffect)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderByIdEffect,
      factory: _OrderByIdEffect.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderByIdEffect, [{
    type: Injectable
  }], null, null);
})();
var OrderDetailsEffect = class _OrderDetailsEffect {
  constructor(actions$, orderConnector, globalMessageService, userIdService, store) {
    this.actions$ = actions$;
    this.orderConnector = orderConnector;
    this.globalMessageService = globalMessageService;
    this.userIdService = userIdService;
    this.store = store;
    this.logger = inject(LoggerService);
    this.loadOrderDetails$ = createEffect(() => this.actions$.pipe(ofType(LOAD_ORDER_DETAILS), map((action) => action.payload), switchMap((payload) => {
      return this.orderConnector.get(payload.userId, payload.orderCode).pipe(map((order) => {
        return new LoadOrderDetailsSuccess(order);
      }), catchError((error) => of(new LoadOrderDetailsFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.cancelOrder$ = createEffect(() => this.actions$.pipe(ofType(CANCEL_ORDER), map((action) => action.payload), switchMap((payload) => {
      return this.orderConnector.cancel(payload.userId, payload.orderCode, payload.cancelRequestInput).pipe(map(() => new CancelOrderSuccess()), catchError((error) => {
        error.error?.errors.forEach((err) => this.globalMessageService.add(err.message, GlobalMessageType.MSG_TYPE_ERROR));
        return of(new CancelOrderFail(tryNormalizeHttpError(error, this.logger)));
      }));
    })));
    this.resetOrderDetails$ = createEffect(() => this.actions$.pipe(ofType(siteContextGroup_actions.LANGUAGE_CHANGE, siteContextGroup_actions.CURRENCY_CHANGE), withLatestFrom(this.userIdService.getUserId(), this.store.pipe(filter((store2) => !!store2.order?.orderDetail), map((state) => state.order.orderDetail.value?.code))), switchMap(([, userId, orderCode]) => {
      if (orderCode) {
        return this.orderConnector.get(userId, orderCode).pipe(map((order) => {
          return new LoadOrderDetailsSuccess(order);
        }), catchError((error) => of(new LoadOrderDetailsFail(tryNormalizeHttpError(error, this.logger)))));
      }
      return EMPTY;
    })));
  }
  static {
    this.ɵfac = function OrderDetailsEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderDetailsEffect)(ɵɵinject(Actions), ɵɵinject(OrderHistoryConnector), ɵɵinject(GlobalMessageService), ɵɵinject(UserIdService), ɵɵinject(Store));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderDetailsEffect,
      factory: _OrderDetailsEffect.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailsEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: OrderHistoryConnector
  }, {
    type: GlobalMessageService
  }, {
    type: UserIdService
  }, {
    type: Store
  }], null);
})();
var OrderReturnRequestEffect = class _OrderReturnRequestEffect {
  constructor(actions$, orderConnector) {
    this.actions$ = actions$;
    this.orderConnector = orderConnector;
    this.logger = inject(LoggerService);
    this.createReturnRequest$ = createEffect(() => this.actions$.pipe(ofType(CREATE_ORDER_RETURN_REQUEST), map((action) => action.payload), switchMap((payload) => {
      return this.orderConnector.return(payload.userId, payload.returnRequestInput).pipe(map((returnRequest) => new CreateOrderReturnRequestSuccess(returnRequest)), catchError((error) => of(new CreateOrderReturnRequestFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.loadReturnRequest$ = createEffect(() => this.actions$.pipe(ofType(LOAD_ORDER_RETURN_REQUEST), map((action) => action.payload), switchMap((payload) => {
      return this.orderConnector.getReturnRequestDetail(payload.userId, payload.returnRequestCode).pipe(map((returnRequest) => new LoadOrderReturnRequestSuccess(returnRequest)), catchError((error) => of(new LoadOrderReturnRequestFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.cancelReturnRequest$ = createEffect(() => this.actions$.pipe(ofType(CANCEL_ORDER_RETURN_REQUEST), map((action) => action.payload), switchMap((payload) => {
      return this.orderConnector.cancelReturnRequest(payload.userId, payload.returnRequestCode, payload.returnRequestModification).pipe(map(() => new CancelOrderReturnRequestSuccess()), catchError((error) => of(new CancelOrderReturnRequestFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.loadReturnRequestList$ = createEffect(() => this.actions$.pipe(ofType(LOAD_ORDER_RETURN_REQUEST_LIST), map((action) => action.payload), switchMap((payload) => {
      return this.orderConnector.getReturnRequestList(payload.userId, payload.pageSize, payload.currentPage, payload.sort).pipe(map((returnRequestList) => new LoadOrderReturnRequestListSuccess(returnRequestList)), catchError((error) => of(new LoadOrderReturnRequestListFail(tryNormalizeHttpError(error, this.logger)))));
    })));
  }
  static {
    this.ɵfac = function OrderReturnRequestEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderReturnRequestEffect)(ɵɵinject(Actions), ɵɵinject(OrderHistoryConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderReturnRequestEffect,
      factory: _OrderReturnRequestEffect.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderReturnRequestEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: OrderHistoryConnector
  }], null);
})();
var OrdersEffect = class _OrdersEffect {
  constructor(actions$, orderConnector, replenishmentOrderConnector) {
    this.actions$ = actions$;
    this.orderConnector = orderConnector;
    this.replenishmentOrderConnector = replenishmentOrderConnector;
    this.logger = inject(LoggerService);
    this.loadUserOrders$ = createEffect(() => this.actions$.pipe(ofType(LOAD_USER_ORDERS), map((action) => action.payload), switchMap((payload) => {
      return (Boolean(payload.replenishmentOrderCode) ? this.replenishmentOrderConnector.loadReplenishmentDetailsHistory(payload.userId, payload.replenishmentOrderCode ?? "", payload.pageSize, payload.currentPage, payload.sort) : this.orderConnector.getHistory(payload.userId, payload.pageSize, payload.currentPage, payload.sort)).pipe(map((orders) => {
        return new LoadUserOrdersSuccess(orders);
      }), catchError((error) => of(new LoadUserOrdersFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.resetUserOrders$ = createEffect(() => this.actions$.pipe(ofType(siteContextGroup_actions.LANGUAGE_CHANGE), map(() => {
      return new ClearUserOrders();
    })));
  }
  static {
    this.ɵfac = function OrdersEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrdersEffect)(ɵɵinject(Actions), ɵɵinject(OrderHistoryConnector), ɵɵinject(ReplenishmentOrderHistoryConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrdersEffect,
      factory: _OrdersEffect.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrdersEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: OrderHistoryConnector
  }, {
    type: ReplenishmentOrderHistoryConnector
  }], null);
})();
var ReplenishmentOrderDetailsEffect = class _ReplenishmentOrderDetailsEffect {
  constructor(actions$, replenishmentOrderConnector, globalMessageService) {
    this.actions$ = actions$;
    this.replenishmentOrderConnector = replenishmentOrderConnector;
    this.globalMessageService = globalMessageService;
    this.logger = inject(LoggerService);
    this.loadReplenishmentOrderDetails$ = createEffect(() => this.actions$.pipe(ofType(LOAD_REPLENISHMENT_ORDER_DETAILS), map((action) => action.payload), switchMap((payload) => {
      return this.replenishmentOrderConnector.load(payload.userId, payload.replenishmentOrderCode).pipe(map((replenishmentOrder) => {
        return new LoadReplenishmentOrderDetailsSuccess(replenishmentOrder);
      }), catchError((error) => of(new LoadReplenishmentOrderDetailsFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.cancelReplenishmentOrder$ = createEffect(() => this.actions$.pipe(ofType(CANCEL_REPLENISHMENT_ORDER), map((action) => action.payload), switchMap((payload) => {
      return this.replenishmentOrderConnector.cancelReplenishmentOrder(payload.userId, payload.replenishmentOrderCode).pipe(map((replenishmentOrder) => new CancelReplenishmentOrderSuccess(replenishmentOrder)), catchError((error) => {
        error?.error?.errors.forEach((err) => this.globalMessageService.add(err.message, GlobalMessageType.MSG_TYPE_ERROR));
        return of(new CancelReplenishmentOrderFail(tryNormalizeHttpError(error, this.logger)));
      }));
    })));
  }
  static {
    this.ɵfac = function ReplenishmentOrderDetailsEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReplenishmentOrderDetailsEffect)(ɵɵinject(Actions), ɵɵinject(ReplenishmentOrderHistoryConnector), ɵɵinject(GlobalMessageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ReplenishmentOrderDetailsEffect,
      factory: _ReplenishmentOrderDetailsEffect.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderDetailsEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: ReplenishmentOrderHistoryConnector
  }, {
    type: GlobalMessageService
  }], null);
})();
var ReplenishmentOrdersEffect = class _ReplenishmentOrdersEffect {
  constructor(actions$, replenishmentOrderConnector) {
    this.actions$ = actions$;
    this.replenishmentOrderConnector = replenishmentOrderConnector;
    this.logger = inject(LoggerService);
    this.loadUserReplenishmentOrders$ = createEffect(() => this.actions$.pipe(ofType(LOAD_USER_REPLENISHMENT_ORDERS), map((action) => action.payload), switchMap((payload) => {
      return this.replenishmentOrderConnector.loadHistory(payload.userId, payload.pageSize, payload.currentPage, payload.sort).pipe(map((orders) => {
        return new LoadUserReplenishmentOrdersSuccess(orders);
      }), catchError((error) => of(new LoadUserReplenishmentOrdersFail(tryNormalizeHttpError(error, this.logger)))));
    })));
  }
  static {
    this.ɵfac = function ReplenishmentOrdersEffect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReplenishmentOrdersEffect)(ɵɵinject(Actions), ɵɵinject(ReplenishmentOrderHistoryConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ReplenishmentOrdersEffect,
      factory: _ReplenishmentOrdersEffect.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrdersEffect, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: ReplenishmentOrderHistoryConnector
  }], null);
})();
var effects = [OrdersEffect, OrderDetailsEffect, ConsignmentTrackingEffects, OrderReturnRequestEffect, ReplenishmentOrderDetailsEffect, ReplenishmentOrdersEffect, ConsignmentTrackingByIdEffects, OrderByIdEffect];
var initialStateOfConsignmentTrackingById = void 0;
function reducer$7(state = initialStateOfConsignmentTrackingById, action) {
  switch (action.type) {
    case LOAD_CONSIGNMENT_TRACKING_BY_ID_SUCCESS: {
      return action.payload.consignmentTracking ? action.payload.consignmentTracking : initialStateOfConsignmentTrackingById;
    }
    case LOAD_CONSIGNMENT_TRACKING_BY_ID_FAIL: {
      return initialStateOfConsignmentTrackingById;
    }
  }
  return state;
}
var initialStateOfOrderById = void 0;
function reducer$6(state = initialStateOfOrderById, action) {
  switch (action.type) {
    case LOAD_ORDER_BY_ID_SUCCESS: {
      return action.payload ? action.payload : initialStateOfOrderById;
    }
    case LOAD_ORDER_BY_ID_FAIL: {
      return initialStateOfOrderById;
    }
  }
  return state;
}
var initialState$5 = {
  tracking: {}
};
function reducer$5(state = initialState$5, action) {
  switch (action.type) {
    case LOAD_CONSIGNMENT_TRACKING_SUCCESS: {
      const tracking = action.payload;
      return {
        tracking
      };
    }
    case CLEAR_CONSIGNMENT_TRACKING: {
      return initialState$5;
    }
  }
  return state;
}
var initialState$4 = {};
function reducer$4(state = initialState$4, action) {
  switch (action.type) {
    case LOAD_ORDER_DETAILS_SUCCESS: {
      const order = action.payload;
      return order;
    }
  }
  return state;
}
var initialState$3 = {
  returnRequests: [],
  pagination: {},
  sorts: []
};
function reducer$3(state = initialState$3, action) {
  switch (action.type) {
    case LOAD_ORDER_RETURN_REQUEST_LIST_SUCCESS: {
      return action.payload ? action.payload : initialState$3;
    }
  }
  return state;
}
var initialState$2 = {
  orders: [],
  pagination: {},
  sorts: []
};
function reducer$2(state = initialState$2, action) {
  switch (action.type) {
    case LOAD_USER_ORDERS_SUCCESS: {
      return action.payload ? action.payload : initialState$2;
    }
    case LOAD_USER_ORDERS_FAIL: {
      return initialState$2;
    }
  }
  return state;
}
var initialState$1 = {};
function reducer$1(state = initialState$1, action) {
  switch (action.type) {
    case LOAD_REPLENISHMENT_ORDER_DETAILS_SUCCESS:
    case CANCEL_REPLENISHMENT_ORDER_SUCCESS: {
      return action.payload ? action.payload : initialState$1;
    }
    default: {
      return state;
    }
  }
}
var initialState = {
  replenishmentOrders: [],
  pagination: {},
  sorts: []
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_REPLENISHMENT_ORDERS_SUCCESS: {
      return action.payload ? action.payload : initialState;
    }
    case CANCEL_REPLENISHMENT_ORDER_SUCCESS: {
      const cancelledReplenishmentOrder = action.payload;
      const userReplenishmentOrders = [...state.replenishmentOrders ?? []];
      const index = userReplenishmentOrders.findIndex((replenishmentOrder) => replenishmentOrder.replenishmentOrderCode === cancelledReplenishmentOrder.replenishmentOrderCode);
      if (index === -1) {
        return initialState;
      } else {
        userReplenishmentOrders[index] = __spreadValues({}, cancelledReplenishmentOrder);
      }
      return __spreadProps(__spreadValues({}, state), {
        replenishmentOrders: userReplenishmentOrders
      });
    }
  }
  return state;
}
function getReducers() {
  return {
    orders: utilsGroup.loaderReducer(ORDERS, reducer$2),
    orderDetail: utilsGroup.loaderReducer(ORDER_DETAILS, reducer$4),
    replenishmentOrders: utilsGroup.loaderReducer(REPLENISHMENT_ORDERS, reducer),
    orderReturn: utilsGroup.loaderReducer(RETURN_REQUEST_DETAILS),
    orderReturnList: utilsGroup.loaderReducer(RETURN_REQUESTS, reducer$3),
    consignmentTracking: reducer$5,
    replenishmentOrder: utilsGroup.loaderReducer(REPLENISHMENT_ORDER_DETAILS, reducer$1),
    orderById: utilsGroup.entityLoaderReducer(ORDER_BY_ID_ENTITIES, reducer$6),
    consignmentTrackingById: utilsGroup.entityLoaderReducer(CONSIGNMENT_TRACKING_BY_ID_ENTITIES, reducer$7)
  };
}
var reducerToken = new InjectionToken("OrderReducers");
var reducerProvider = {
  provide: reducerToken,
  useFactory: getReducers
};
var MyAccountV2OrderHistoryService = class _MyAccountV2OrderHistoryService {
  constructor() {
    this.orderReturnRequestService = inject(OrderReturnRequestService);
    this.store = inject(Store);
    this.userIdService = inject(UserIdService);
    this.orderHistoryService = inject(OrderHistoryService);
  }
  clearOrderList() {
    this.orderHistoryService.clearOrderList();
  }
  getOrderDetailsWithTracking(orderCode) {
    return this.getOrderDetailsV2(orderCode).pipe(switchMap((order) => {
      const orderView = __spreadValues({}, order);
      orderView.consignments = [];
      const requests = (order?.consignments ?? []).map((consignment) => {
        const consignmentView = __spreadValues({}, consignment);
        if (consignment.code && consignment.trackingID) {
          return this.getConsignmentTracking(order?.code ?? "", consignment.code).pipe(map((trackingInfo) => {
            consignmentView.consignmentTracking = trackingInfo;
            orderView.consignments?.push(consignmentView);
            return orderView;
          }));
        } else {
          orderView.consignments?.push(consignmentView);
          return of(orderView);
        }
      });
      if (requests === void 0 || requests.length < 1) {
        return of(orderView);
      }
      return combineLatest(requests).pipe(switchMap((orders) => {
        if (orders !== void 0) {
          return of(orders[0]);
        } else {
          return of(order);
        }
      }));
    }));
  }
  getOrderHistoryListWithDetails(pageSize) {
    const orderListView = {};
    return this.orderHistoryService.getOrderHistoryList(pageSize).pipe(switchMap((orderList) => {
      orderListView.pagination = orderList?.pagination;
      orderListView.sorts = orderList?.sorts;
      orderListView.orders = [];
      const requests = (orderList?.orders ?? []).map((order) => {
        const orderView = __spreadValues({}, order);
        return this.getOrderDetailsWithTracking(order?.code ?? "").pipe(map((orderDetail) => {
          orderView.returnable = orderDetail?.returnable;
          orderView.totalItems = orderDetail?.totalItems;
          orderView.entries = orderDetail?.entries;
          orderView.consignments = orderDetail?.consignments;
          orderView.unconsignedEntries = orderDetail?.unconsignedEntries;
          orderView.returnRequests = [];
          orderListView.orders?.push(orderView);
          return orderListView;
        }));
      });
      if (requests.length === 0) {
        requests.push(of(orderListView));
      }
      return combineLatest(requests);
    }), map((requests) => {
      if (requests !== void 0) {
        return requests[0];
      } else {
        return {};
      }
    }));
  }
  getOrderHistoryList(pageSize) {
    const orderHistoryListRequest = this.getOrderHistoryListWithDetails(pageSize);
    const returnRequestListRequest = this.orderReturnRequestService.getOrderReturnRequestList();
    return combineLatest([orderHistoryListRequest, returnRequestListRequest]).pipe(switchMap((responses) => {
      const returnRequests = responses?.[1]?.returnRequests;
      const orderHistory = responses?.[0];
      if (returnRequests && orderHistory?.orders) {
        if (orderHistory.pagination?.totalResults === 0) {
          return of(orderHistory);
        }
        return orderHistory.orders.map((order) => {
          const returnItems = returnRequests?.filter((returnItem) => returnItem.order?.code === order.code);
          if (returnItems) {
            order.returnRequests = returnItems;
          }
          return orderHistory;
        });
      } else {
        return of(orderHistory);
      }
    }));
  }
  getOrderDetailsValue(code) {
    return this.store.select(getOrderById(code));
  }
  getOrderDetailsState(code) {
    return this.store.select(getOrderByIdEntity(code));
  }
  loadOrderDetails(code) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadOrderById({
        userId,
        code
      }))
    });
  }
  getOrderDetailsV2(code) {
    const loading$ = this.getOrderDetailsState(code).pipe(auditTime(0), tap((state) => {
      if (!(state.loading || state.success || state.error)) {
        this.loadOrderDetails(code);
      }
    }));
    return loading$.pipe(filter((state) => (state.success || state.error) ?? false), map((state) => {
      return state.value;
    }));
  }
  getConsignmentTrackingValue(orderCode, consignmentCode) {
    return this.store.select(getConsignmentTrackingById(orderCode, consignmentCode)).pipe(filter((tracking) => Boolean(tracking)));
  }
  getConsignmentTrackingState(orderCode, consignmentCode) {
    return this.store.select(getConsignmentTrackingByIdEntity(orderCode, consignmentCode));
  }
  loadConsignmentTracking(orderCode, consignmentCode) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadConsignmentTrackingById({
        orderCode,
        consignmentCode,
        userId
      }))
    });
  }
  getConsignmentTracking(orderCode, consignmentCode) {
    const loading$ = this.getConsignmentTrackingState(orderCode, consignmentCode).pipe(auditTime(0), tap((state) => {
      if (!(state.loading || state.success || state.error)) {
        this.loadConsignmentTracking(orderCode, consignmentCode);
      }
    }));
    return using(() => loading$.subscribe(), () => this.getConsignmentTrackingValue(orderCode, consignmentCode));
  }
  static {
    this.ɵfac = function MyAccountV2OrderHistoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAccountV2OrderHistoryService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _MyAccountV2OrderHistoryService,
      factory: _MyAccountV2OrderHistoryService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2OrderHistoryService, [{
    type: Injectable
  }], null, null);
})();
var OrderAttachmentsService = class _OrderAttachmentsService {
  constructor() {
    this.orderAttachmentsConnector = inject(OrderAttachmentsConnector);
    this.userIdService = inject(UserIdService);
  }
  getOrderAttachments(orderId) {
    return this.userIdService.takeUserId().pipe(take(1), switchMap((userId) => this.orderAttachmentsConnector.getOrderAttachments(userId, orderId)));
  }
  downloadOrderAttachment(orderId, attachmentId) {
    return this.userIdService.takeUserId().pipe(take(1), switchMap((userId) => this.orderAttachmentsConnector.downloadOrderAttachment(userId, orderId, attachmentId)));
  }
  static {
    this.ɵfac = function OrderAttachmentsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderAttachmentsService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderAttachmentsService,
      factory: _OrderAttachmentsService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderAttachmentsService, [{
    type: Injectable
  }], null, null);
})();
var facadeProviders = [OrderReturnRequestService, {
  provide: OrderReturnRequestFacade,
  useExisting: OrderReturnRequestService
}, MyAccountV2OrderHistoryService, OrderHistoryService, {
  provide: OrderHistoryFacade,
  useExisting: OrderHistoryService
}, ReplenishmentOrderHistoryService, {
  provide: ReplenishmentOrderHistoryFacade,
  useExisting: ReplenishmentOrderHistoryService
}, ScheduledReplenishmentOrderService, {
  provide: ScheduledReplenishmentOrderFacade,
  useExisting: ScheduledReplenishmentOrderService
}, OrderService, {
  provide: OrderFacade,
  useExisting: OrderService
}, ReorderOrderService, {
  provide: ReorderOrderFacade,
  useExisting: ReorderOrderService
}, OrderAttachmentsService, {
  provide: OrderAttachmentsFacade,
  useExisting: OrderAttachmentsService
}];
var OrderStoreModule = class _OrderStoreModule {
  static {
    this.ɵfac = function OrderStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderStoreModule,
      imports: [EffectsFeatureModule, StoreFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [reducerProvider],
      imports: [EffectsModule.forFeature(effects), StoreModule.forFeature(ORDER_FEATURE, reducerToken)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderStoreModule, [{
    type: NgModule,
    args: [{
      imports: [EffectsModule.forFeature(effects), StoreModule.forFeature(ORDER_FEATURE, reducerToken)],
      providers: [reducerProvider]
    }]
  }], null, null);
})();
var OrderCoreModule = class _OrderCoreModule {
  static {
    this.ɵfac = function OrderCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderCoreModule,
      imports: [OrderStoreModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [...facadeProviders, OrderHistoryConnector, ReplenishmentOrderHistoryConnector, OrderConnector, ScheduledReplenishmentOrderConnector, ReorderOrderConnector, OrderAttachmentsConnector],
      imports: [OrderStoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderCoreModule, [{
    type: NgModule,
    args: [{
      imports: [OrderStoreModule],
      providers: [...facadeProviders, OrderHistoryConnector, ReplenishmentOrderHistoryConnector, OrderConnector, ScheduledReplenishmentOrderConnector, ReorderOrderConnector, OrderAttachmentsConnector]
    }]
  }], null, null);
})();

export {
  OrderHistoryAdapter,
  OrderAdapter,
  ReorderOrderAdapter,
  ReplenishmentOrderHistoryAdapter,
  ScheduledReplenishmentOrderAdapter,
  OrderAttachmentsAdapter,
  orderGroup_selectors,
  OrderHistoryService,
  MyAccountV2OrderHistoryService,
  OrderCoreModule
};
//# sourceMappingURL=chunk-KW2L2NIV.js.map
