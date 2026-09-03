import {
  OrderAdapter,
  OrderAttachmentsAdapter,
  OrderHistoryAdapter,
  ReorderOrderAdapter,
  ReplenishmentOrderHistoryAdapter,
  ScheduledReplenishmentOrderAdapter
} from "./chunk-KW2L2NIV.js";
import {
  CONSIGNMENT_TRACKING_NORMALIZER,
  ORDER_HISTORY_NORMALIZER,
  ORDER_NORMALIZER,
  ORDER_RETURNS_NORMALIZER,
  ORDER_RETURN_REQUEST_INPUT_SERIALIZER,
  ORDER_RETURN_REQUEST_NORMALIZER,
  OrderConfig,
  REORDER_ORDER_NORMALIZER,
  REPLENISHMENT_ORDER_FORM_SERIALIZER,
  REPLENISHMENT_ORDER_HISTORY_NORMALIZER,
  REPLENISHMENT_ORDER_NORMALIZER
} from "./chunk-UIW5AQFA.js";
import {
  ORDER_ENTRY_PROMOTIONS_NORMALIZER
} from "./chunk-KEAKWHYV.js";
import {
  ConverterService,
  DEFAULT_SERVER_ERROR_RETRIES_COUNT,
  InterceptorUtil,
  LoggerService,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
  OccEndpointsService,
  OccFieldsService,
  PRODUCT_NORMALIZER,
  TimeUtils,
  USE_CLIENT_TOKEN,
  backOff,
  isJaloError,
  isServerError,
  provideDefaultConfig,
  tryNormalizeHttpError
} from "./chunk-VIVIQI6G.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-2A6OHZCE.js";
import {
  CommonModule
} from "./chunk-S7KROBXW.js";
import {
  Injectable,
  NgModule,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import {
  catchError
} from "./chunk-R6FETK65.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/order/fesm2022/spartacus-order-occ.mjs
var OccOrderNormalizer = class _OccOrderNormalizer {
  constructor(converter) {
    this.converter = converter;
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    if (source.entries) {
      target.entries = source.entries.map((entry) => this.convertOrderEntry(entry, source.code, source.appliedProductPromotions));
    }
    if (source.consignments) {
      target.consignments = source.consignments.map((consignment) => __spreadProps(__spreadValues({}, consignment), {
        entries: consignment.entries?.map((entry) => __spreadProps(__spreadValues({}, entry), {
          orderEntry: this.convertOrderEntry(entry.orderEntry, source.code, source.appliedProductPromotions)
        }))
      }));
    }
    if (source.unconsignedEntries) {
      target.unconsignedEntries = source.unconsignedEntries.map((entry) => this.convertOrderEntry(entry, source.code, source.appliedProductPromotions));
    }
    return target;
  }
  convertOrderEntry(source, code, promotions) {
    return __spreadProps(__spreadValues({}, source), {
      product: this.converter.convert(source?.product, PRODUCT_NORMALIZER),
      orderCode: code,
      promotions: this.converter.convert({
        item: source,
        promotions
      }, ORDER_ENTRY_PROMOTIONS_NORMALIZER)
    });
  }
  static {
    this.ɵfac = function OccOrderNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccOrderNormalizer)(ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccOrderNormalizer,
      factory: _OccOrderNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccOrderNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var OccReplenishmentOrderNormalizer = class _OccReplenishmentOrderNormalizer {
  constructor(converter) {
    this.converter = converter;
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    if (source.entries) {
      target.entries = source.entries.map((entry) => __spreadProps(__spreadValues({}, entry), {
        product: this.converter.convert(entry.product, PRODUCT_NORMALIZER),
        promotions: this.converter.convert({
          item: entry,
          promotions: source.appliedProductPromotions
        }, ORDER_ENTRY_PROMOTIONS_NORMALIZER)
      }));
    }
    return target;
  }
  static {
    this.ɵfac = function OccReplenishmentOrderNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccReplenishmentOrderNormalizer)(ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccReplenishmentOrderNormalizer,
      factory: _OccReplenishmentOrderNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccReplenishmentOrderNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var OccReturnRequestNormalizer = class _OccReturnRequestNormalizer {
  constructor(converter) {
    this.converter = converter;
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    if (source.returnEntries) {
      target.returnEntries = source.returnEntries.map((entry) => __spreadProps(__spreadValues({}, entry), {
        orderEntry: this.convertOrderEntry(entry.orderEntry)
      }));
    }
    return target;
  }
  convertOrderEntry(source) {
    return __spreadProps(__spreadValues({}, source), {
      product: this.converter.convert(source?.product, PRODUCT_NORMALIZER)
    });
  }
  static {
    this.ɵfac = function OccReturnRequestNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccReturnRequestNormalizer)(ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccReturnRequestNormalizer,
      factory: _OccReturnRequestNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccReturnRequestNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var OccScheduledReplenishmentOrderFormSerializer = class _OccScheduledReplenishmentOrderFormSerializer {
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    if (source.replenishmentStartDate) {
      target.replenishmentStartDate = this.convertDate(source.replenishmentStartDate);
    }
    return target;
  }
  /**
   * Adds the current timestamp (including timezone offset) to a date string in the format YYYY-mm-dd
   * @Example
   * Converts 2021-10-15 to 2021-10-15T15:38:05-05:00
   */
  convertDate(date) {
    const localTime = (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23"
    });
    return `${date}T${localTime}:00${TimeUtils.getLocalTimezoneOffset()}`;
  }
  static {
    this.ɵfac = function OccScheduledReplenishmentOrderFormSerializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccScheduledReplenishmentOrderFormSerializer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccScheduledReplenishmentOrderFormSerializer,
      factory: _OccScheduledReplenishmentOrderFormSerializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccScheduledReplenishmentOrderFormSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CONTENT_TYPE_JSON_HEADER = {
  "Content-Type": "application/json"
};
var OccOrderHistoryAdapter = class _OccOrderHistoryAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
    this.occFieldsService = inject(OccFieldsService);
    this.orderConfig = inject(OrderConfig);
  }
  load(userId, orderCode) {
    const url = this.orderConfig.showOrderQuoteLink ? (() => {
      const scopes = ["orderDetail", "quoteCode"];
      const scopedDataWithUrls = scopes.map((scope) => ({
        scopedData: {
          scope,
          userId,
          orderCode
        },
        url: this.occEndpoints.buildUrl(scope, {
          urlParams: {
            userId,
            orderId: orderCode
          }
        })
      }));
      const mergedUrl = this.occFieldsService.getOptimalUrlGroups(scopedDataWithUrls);
      return Object.keys(mergedUrl)[0];
    })() : this.occEndpoints.buildUrl("orderDetail", {
      urlParams: {
        userId,
        orderId: orderCode
      }
    });
    let headers = new HttpHeaders();
    if (userId === OCC_USER_ID_ANONYMOUS) {
      headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    }
    return this.http.get(url, {
      headers
    }).pipe(this.converter.pipeable(ORDER_NORMALIZER));
  }
  loadHistory(userId, pageSize, currentPage, sort) {
    const params = {};
    if (pageSize) {
      params["pageSize"] = pageSize.toString();
    }
    if (currentPage) {
      params["currentPage"] = currentPage.toString();
    }
    if (sort) {
      params["sort"] = sort.toString();
    }
    const url = this.occEndpoints.buildUrl("orderHistory", {
      urlParams: {
        userId
      },
      queryParams: params
    });
    return this.http.get(url).pipe(this.converter.pipeable(ORDER_HISTORY_NORMALIZER));
  }
  getConsignmentTracking(orderCode, consignmentCode, userId = OCC_USER_ID_CURRENT) {
    const url = this.occEndpoints.buildUrl("consignmentTracking", {
      urlParams: {
        userId,
        orderCode,
        consignmentCode
      }
    });
    return this.http.get(url).pipe(this.converter.pipeable(CONSIGNMENT_TRACKING_NORMALIZER));
  }
  cancel(userId, orderCode, cancelRequestInput) {
    const url = this.occEndpoints.buildUrl("cancelOrder", {
      urlParams: {
        userId,
        orderId: orderCode
      }
    });
    const headers = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER));
    return this.http.post(url, cancelRequestInput, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  createReturnRequest(userId, returnRequestInput) {
    const url = this.occEndpoints.buildUrl("returnOrder", {
      urlParams: {
        userId
      }
    });
    const headers = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER));
    returnRequestInput = this.converter.convert(returnRequestInput, ORDER_RETURN_REQUEST_INPUT_SERIALIZER);
    return this.http.post(url, returnRequestInput, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), this.converter.pipeable(ORDER_RETURN_REQUEST_NORMALIZER));
  }
  loadReturnRequestList(userId, pageSize, currentPage, sort) {
    const params = {};
    if (pageSize) {
      params["pageSize"] = pageSize.toString();
    }
    if (currentPage) {
      params["currentPage"] = currentPage.toString();
    }
    if (sort) {
      params["sort"] = sort.toString();
    }
    const url = this.occEndpoints.buildUrl("orderReturns", {
      urlParams: {
        userId
      },
      queryParams: params
    });
    return this.http.get(url).pipe(this.converter.pipeable(ORDER_RETURNS_NORMALIZER));
  }
  loadReturnRequestDetail(userId, returnRequestCode) {
    const url = this.occEndpoints.buildUrl("orderReturnDetail", {
      urlParams: {
        userId,
        returnRequestCode
      }
    });
    return this.http.get(url).pipe(this.converter.pipeable(ORDER_RETURN_REQUEST_NORMALIZER));
  }
  cancelReturnRequest(userId, returnRequestCode, returnRequestModification) {
    const url = this.occEndpoints.buildUrl("cancelReturn", {
      urlParams: {
        userId,
        returnRequestCode
      }
    });
    const headers = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER));
    return this.http.patch(url, returnRequestModification, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  static {
    this.ɵfac = function OccOrderHistoryAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccOrderHistoryAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccOrderHistoryAdapter,
      factory: _OccOrderHistoryAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccOrderHistoryAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccOrderAdapter = class _OccOrderAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  placeOrder(userId, cartId, termsChecked) {
    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    if (userId === OCC_USER_ID_ANONYMOUS) {
      headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    }
    return this.http.post(this.getPlaceOrderEndpoint(userId, cartId, termsChecked.toString()), {}, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }), this.converter.pipeable(ORDER_NORMALIZER));
  }
  placePaymentAuthorizedOrder(userId, cartId, termsChecked) {
    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    if (userId === OCC_USER_ID_ANONYMOUS) {
      headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    }
    return this.http.post(this.getPlacePaymentAuthorizedOrderEndpoint(userId, cartId, termsChecked.toString()), {}, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }), backOff({
      shouldRetry: isServerError,
      maxTries: DEFAULT_SERVER_ERROR_RETRIES_COUNT
    }), this.converter.pipeable(ORDER_NORMALIZER));
  }
  getPlaceOrderEndpoint(userId, cartId, termsChecked) {
    return this.occEndpoints.buildUrl("placeOrder", {
      urlParams: {
        userId
      },
      queryParams: {
        cartId,
        termsChecked
      }
    });
  }
  getPlacePaymentAuthorizedOrderEndpoint(userId, cartId, termsChecked) {
    return this.occEndpoints.buildUrl("placePaymentAuthorizedOrder", {
      urlParams: {
        userId
      },
      queryParams: {
        cartId,
        termsChecked
      }
    });
  }
  static {
    this.ɵfac = function OccOrderAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccOrderAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccOrderAdapter,
      factory: _OccOrderAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccOrderAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccReplenishmentOrderHistoryAdapter = class _OccReplenishmentOrderHistoryAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
  }
  load(userId, replenishmentOrderCode) {
    return this.http.get(this.occEndpoints.buildUrl("replenishmentOrderDetails", {
      urlParams: {
        userId,
        replenishmentOrderCode
      }
    })).pipe(this.converter.pipeable(REPLENISHMENT_ORDER_NORMALIZER));
  }
  loadReplenishmentDetailsHistory(userId, replenishmentOrderCode, pageSize, currentPage, sort) {
    const params = {};
    if (pageSize) {
      params["pageSize"] = pageSize.toString();
    }
    if (currentPage) {
      params["currentPage"] = currentPage.toString();
    }
    if (sort) {
      params["sort"] = sort.toString();
    }
    return this.http.get(this.occEndpoints.buildUrl("replenishmentOrderDetailsHistory", {
      urlParams: {
        userId,
        replenishmentOrderCode
      },
      queryParams: params
    })).pipe(this.converter.pipeable(ORDER_HISTORY_NORMALIZER));
  }
  cancelReplenishmentOrder(userId, replenishmentOrderCode) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.patch(this.occEndpoints.buildUrl("cancelReplenishmentOrder", {
      urlParams: {
        userId,
        replenishmentOrderCode
      }
    }), {}, {
      headers
    }).pipe(this.converter.pipeable(REPLENISHMENT_ORDER_NORMALIZER));
  }
  loadHistory(userId, pageSize, currentPage, sort) {
    const params = {};
    if (pageSize) {
      params["pageSize"] = pageSize.toString();
    }
    if (currentPage) {
      params["currentPage"] = currentPage.toString();
    }
    if (sort) {
      params["sort"] = sort.toString();
    }
    const url = this.occEndpoints.buildUrl("replenishmentOrderHistory", {
      urlParams: {
        userId
      },
      queryParams: params
    });
    return this.http.get(url).pipe(this.converter.pipeable(REPLENISHMENT_ORDER_HISTORY_NORMALIZER));
  }
  static {
    this.ɵfac = function OccReplenishmentOrderHistoryAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccReplenishmentOrderHistoryAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccReplenishmentOrderHistoryAdapter,
      factory: _OccReplenishmentOrderHistoryAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccReplenishmentOrderHistoryAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccScheduledReplenishmentOrderAdapter = class _OccScheduledReplenishmentOrderAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  scheduleReplenishmentOrder(cartId, scheduleReplenishmentForm, termsChecked, userId) {
    scheduleReplenishmentForm = this.converter.convert(scheduleReplenishmentForm, REPLENISHMENT_ORDER_FORM_SERIALIZER);
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(this.getScheduleReplenishmentOrderEndpoint(userId, cartId, termsChecked.toString()), scheduleReplenishmentForm, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }), this.converter.pipeable(REPLENISHMENT_ORDER_NORMALIZER));
  }
  getScheduleReplenishmentOrderEndpoint(userId, cartId, termsChecked) {
    return this.occEndpoints.buildUrl("scheduleReplenishmentOrder", {
      urlParams: {
        userId
      },
      queryParams: {
        cartId,
        termsChecked
      }
    });
  }
  static {
    this.ɵfac = function OccScheduledReplenishmentOrderAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccScheduledReplenishmentOrderAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccScheduledReplenishmentOrderAdapter,
      factory: _OccScheduledReplenishmentOrderAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccScheduledReplenishmentOrderAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccOrderAttachmentsAdapter = class _OccOrderAttachmentsAdapter {
  constructor() {
    this.logger = inject(LoggerService);
    this.http = inject(HttpClient);
    this.occEndpoints = inject(OccEndpointsService);
    this.converter = inject(ConverterService);
  }
  getOrderAttachments(userId, orderId) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get(this.getOrderAttachmentsUrl(orderId, userId), {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  downloadOrderAttachment(userId, orderId, attachmentId) {
    const options = {
      responseType: "blob"
    };
    return this.http.get(this.getDownloadOrderAttachmentUrl(userId, orderId, attachmentId), options).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  getOrderAttachmentsUrl(orderId, userId) {
    return this.occEndpoints.buildUrl("orderAttachments", {
      urlParams: {
        userId,
        orderId
      }
    });
  }
  getDownloadOrderAttachmentUrl(userId, orderId, attachmentId) {
    return this.occEndpoints.buildUrl("downloadOrderAttachment", {
      urlParams: {
        userId,
        orderId,
        attachmentId
      }
    });
  }
  static {
    this.ɵfac = function OccOrderAttachmentsAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccOrderAttachmentsAdapter)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccOrderAttachmentsAdapter,
      factory: _OccOrderAttachmentsAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccOrderAttachmentsAdapter, [{
    type: Injectable
  }], null, null);
})();
var OccReorderOrderNormalizer = class _OccReorderOrderNormalizer {
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    return target;
  }
  static {
    this.ɵfac = function OccReorderOrderNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccReorderOrderNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccReorderOrderNormalizer,
      factory: _OccReorderOrderNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccReorderOrderNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OccReorderOrderAdapter = class _OccReorderOrderAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  reorder(orderId, userId) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(this.getReorderOrderEndpoint(orderId, userId), {}, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), this.converter.pipeable(REORDER_ORDER_NORMALIZER));
  }
  getReorderOrderEndpoint(orderCode, userId) {
    return this.occEndpoints.buildUrl("reorder", {
      urlParams: {
        userId
      },
      queryParams: {
        orderCode
      }
    });
  }
  static {
    this.ɵfac = function OccReorderOrderAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccReorderOrderAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccReorderOrderAdapter,
      factory: _OccReorderOrderAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccReorderOrderAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var defaultOccOrderConfig = {
  backend: {
    occ: {
      endpoints: {
        /* eslint-disable max-len */
        orderHistory: "users/${userId}/orders",
        orderDetail: "users/${userId}/orders/${orderId}?fields=FULL",
        quoteCode: "users/${userId}/orders/${orderId}?fields=sapQuoteCode",
        consignmentTracking: "users/${userId}/orders/${orderCode}/consignments/${consignmentCode}/tracking",
        cancelOrder: "users/${userId}/orders/${orderId}/cancellation",
        returnOrder: "users/${userId}/orderReturns?fields=BASIC,returnEntries(BASIC,refundAmount(formattedValue),orderEntry(basePrice(formattedValue),product(name,code,baseOptions,images(DEFAULT,galleryIndex)))),deliveryCost(formattedValue),totalPrice(formattedValue),subTotal(formattedValue)",
        orderReturns: "users/${userId}/orderReturns?fields=BASIC",
        orderReturnDetail: "users/${userId}/orderReturns/${returnRequestCode}?fields=BASIC,returnEntries(BASIC,refundAmount(formattedValue),orderEntry(basePrice(formattedValue),product(name,code,baseOptions,images(DEFAULT,galleryIndex)))),deliveryCost(formattedValue),totalPrice(formattedValue),subTotal(formattedValue)",
        cancelReturn: "users/${userId}/orderReturns/${returnRequestCode}",
        /* eslint-enable */
        /** scheduled replenishment endpoints start */
        replenishmentOrderDetails: "users/${userId}/replenishmentOrders/${replenishmentOrderCode}?fields=FULL,costCenter(FULL),purchaseOrderNumber,paymentType,user",
        replenishmentOrderDetailsHistory: "users/${userId}/replenishmentOrders/${replenishmentOrderCode}/orders",
        cancelReplenishmentOrder: "users/${userId}/replenishmentOrders/${replenishmentOrderCode}?fields=FULL,costCenter(FULL),purchaseOrderNumber,paymentType,user",
        replenishmentOrderHistory: "users/${userId}/replenishmentOrders?fields=FULL,replenishmentOrders(FULL, purchaseOrderNumber)",
        /** scheduled replenishment endpoints end */
        /** placing an order endpoints start **/
        placeOrder: "users/${userId}/orders?fields=FULL",
        placePaymentAuthorizedOrder: "users/${userId}/orders/paymentAuthorizedOrderPlacement?fields=FULL",
        /** placing an order endpoints end **/
        /** order attachments endpoints start **/
        orderAttachments: "users/${userId}/orders/${orderId}/attachments",
        downloadOrderAttachment: "users/${userId}/orders/${orderId}/attachments/${attachmentId}/download"
        /** order attachments endpoints end **/
      }
    }
  }
};
var OrderOccModule = class _OrderOccModule {
  static {
    this.ɵfac = function OrderOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderOccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccOrderConfig), {
        provide: OrderHistoryAdapter,
        useClass: OccOrderHistoryAdapter
      }, {
        provide: ReplenishmentOrderHistoryAdapter,
        useClass: OccReplenishmentOrderHistoryAdapter
      }, {
        provide: OrderAdapter,
        useClass: OccOrderAdapter
      }, {
        provide: ScheduledReplenishmentOrderAdapter,
        useClass: OccScheduledReplenishmentOrderAdapter
      }, {
        provide: ReorderOrderAdapter,
        useClass: OccReorderOrderAdapter
      }, {
        provide: OrderAttachmentsAdapter,
        useClass: OccOrderAttachmentsAdapter
      }, {
        provide: ORDER_RETURN_REQUEST_NORMALIZER,
        useExisting: OccReturnRequestNormalizer,
        multi: true
      }, {
        provide: ORDER_NORMALIZER,
        useExisting: OccOrderNormalizer,
        multi: true
      }, {
        provide: REPLENISHMENT_ORDER_NORMALIZER,
        useExisting: OccReplenishmentOrderNormalizer,
        multi: true
      }, {
        provide: REPLENISHMENT_ORDER_FORM_SERIALIZER,
        useExisting: OccScheduledReplenishmentOrderFormSerializer,
        multi: true
      }, {
        provide: REORDER_ORDER_NORMALIZER,
        useExisting: OccReorderOrderNormalizer,
        multi: true
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccOrderConfig), {
        provide: OrderHistoryAdapter,
        useClass: OccOrderHistoryAdapter
      }, {
        provide: ReplenishmentOrderHistoryAdapter,
        useClass: OccReplenishmentOrderHistoryAdapter
      }, {
        provide: OrderAdapter,
        useClass: OccOrderAdapter
      }, {
        provide: ScheduledReplenishmentOrderAdapter,
        useClass: OccScheduledReplenishmentOrderAdapter
      }, {
        provide: ReorderOrderAdapter,
        useClass: OccReorderOrderAdapter
      }, {
        provide: OrderAttachmentsAdapter,
        useClass: OccOrderAttachmentsAdapter
      }, {
        provide: ORDER_RETURN_REQUEST_NORMALIZER,
        useExisting: OccReturnRequestNormalizer,
        multi: true
      }, {
        provide: ORDER_NORMALIZER,
        useExisting: OccOrderNormalizer,
        multi: true
      }, {
        provide: REPLENISHMENT_ORDER_NORMALIZER,
        useExisting: OccReplenishmentOrderNormalizer,
        multi: true
      }, {
        provide: REPLENISHMENT_ORDER_FORM_SERIALIZER,
        useExisting: OccScheduledReplenishmentOrderFormSerializer,
        multi: true
      }, {
        provide: REORDER_ORDER_NORMALIZER,
        useExisting: OccReorderOrderNormalizer,
        multi: true
      }]
    }]
  }], null, null);
})();

export {
  OccOrderNormalizer,
  OccOrderHistoryAdapter,
  OrderOccModule
};
//# sourceMappingURL=chunk-A4FULBAP.js.map
