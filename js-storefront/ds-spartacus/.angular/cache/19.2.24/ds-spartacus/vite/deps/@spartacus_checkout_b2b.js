import {
  CheckoutB2BComponentsModule
} from "./chunk-Z7YLXNZ5.js";
import "./chunk-WVN4XMLZ.js";
import {
  B2BPaymentTypeEnum,
  CheckoutCostCenterFacade,
  CheckoutCostCenterSetEvent,
  CheckoutPaymentTypeFacade,
  CheckoutPaymentTypeSetEvent,
  CheckoutPaymentTypesQueryReloadEvent,
  CheckoutPaymentTypesQueryResetEvent
} from "./chunk-OKYVL3N7.js";
import {
  CheckoutQueryFacade
} from "./chunk-X6DUCLWC.js";
import "./chunk-UIW5AQFA.js";
import "./chunk-XTCFQJ22.js";
import "./chunk-Q7WXRDFA.js";
import "./chunk-YJXUXPBZ.js";
import "./chunk-OOT34BER.js";
import "./chunk-LZQV6UAH.js";
import {
  ActiveCartFacade,
  CART_NORMALIZER
} from "./chunk-KEAKWHYV.js";
import "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  CommandService,
  CommandStrategy,
  ConverterService,
  EventService,
  GlobalMessageService,
  GlobalMessageType,
  HttpErrorHandler,
  HttpResponseStatus,
  LoggerService,
  OCC_HTTP_TOKEN,
  OCC_USER_ID_ANONYMOUS,
  OccEndpointsService,
  Priority,
  QueryService,
  UserIdService,
  backOff,
  isJaloError,
  provideDefaultConfig,
  tryNormalizeHttpError
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import "./chunk-EBCNDD52.js";
import "./chunk-YMQEGXEG.js";
import "./chunk-6KXUHIAW.js";
import "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import {
  HttpClient,
  HttpContext
} from "./chunk-2A6OHZCE.js";
import "./chunk-YST33EXT.js";
import {
  CommonModule
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
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
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  catchError,
  combineLatest,
  concatMap,
  filter,
  map,
  of,
  take,
  tap,
  throwError
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/checkout/fesm2022/spartacus-checkout-b2b-core.mjs
var CheckoutCostCenterAdapter = class {
};
var CheckoutCostCenterConnector = class _CheckoutCostCenterConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  setCostCenter(userId, cartId, costCenterId) {
    return this.adapter.setCostCenter(userId, cartId, costCenterId);
  }
  static {
    this.ɵfac = function CheckoutCostCenterConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutCostCenterConnector)(ɵɵinject(CheckoutCostCenterAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutCostCenterConnector,
      factory: _CheckoutCostCenterConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutCostCenterConnector, [{
    type: Injectable
  }], () => [{
    type: CheckoutCostCenterAdapter
  }], null);
})();
var CheckoutPaymentTypeAdapter = class {
};
var CheckoutPaymentTypeConnector = class _CheckoutPaymentTypeConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  getPaymentTypes() {
    return this.adapter.getPaymentTypes();
  }
  setPaymentType(userId, cartId, typeCode, purchaseOrderNumber) {
    return this.adapter.setPaymentType(userId, cartId, typeCode, purchaseOrderNumber);
  }
  static {
    this.ɵfac = function CheckoutPaymentTypeConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutPaymentTypeConnector)(ɵɵinject(CheckoutPaymentTypeAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutPaymentTypeConnector,
      factory: _CheckoutPaymentTypeConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentTypeConnector, [{
    type: Injectable
  }], () => [{
    type: CheckoutPaymentTypeAdapter
  }], null);
})();
var CheckoutCostCenterService = class _CheckoutCostCenterService {
  constructor(activeCartFacade, userIdService, commandService, checkoutCostCenterConnector, checkoutQueryFacade, eventService) {
    this.activeCartFacade = activeCartFacade;
    this.userIdService = userIdService;
    this.commandService = commandService;
    this.checkoutCostCenterConnector = checkoutCostCenterConnector;
    this.checkoutQueryFacade = checkoutQueryFacade;
    this.eventService = eventService;
    this.setCostCenterCommand = this.commandService.create((payload) => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.checkoutCostCenterConnector.setCostCenter(userId, cartId, payload).pipe(tap(() => this.eventService.dispatch({
      cartId,
      userId,
      code: payload
    }, CheckoutCostCenterSetEvent))))), {
      strategy: CommandStrategy.CancelPrevious
    });
  }
  checkoutPreconditions() {
    return combineLatest([this.userIdService.takeUserId(), this.activeCartFacade.takeActiveCartId(), this.activeCartFacade.isGuestCart()]).pipe(take(1), map(([userId, cartId, isGuestCart]) => {
      if (!userId || !cartId || userId === OCC_USER_ID_ANONYMOUS && !isGuestCart) {
        throw new Error("Checkout conditions not met");
      }
      return [userId, cartId];
    }));
  }
  getCostCenterState() {
    return this.checkoutQueryFacade.getCheckoutDetailsState().pipe(map((state) => __spreadProps(__spreadValues({}, state), {
      data: state.data?.costCenter
    })));
  }
  setCostCenter(costCenterId) {
    return this.setCostCenterCommand.execute(costCenterId);
  }
  static {
    this.ɵfac = function CheckoutCostCenterService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutCostCenterService)(ɵɵinject(ActiveCartFacade), ɵɵinject(UserIdService), ɵɵinject(CommandService), ɵɵinject(CheckoutCostCenterConnector), ɵɵinject(CheckoutQueryFacade), ɵɵinject(EventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutCostCenterService,
      factory: _CheckoutCostCenterService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutCostCenterService, [{
    type: Injectable
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: UserIdService
  }, {
    type: CommandService
  }, {
    type: CheckoutCostCenterConnector
  }, {
    type: CheckoutQueryFacade
  }, {
    type: EventService
  }], null);
})();
var CheckoutPaymentTypeService = class _CheckoutPaymentTypeService {
  getCheckoutPaymentTypesQueryReloadEvents() {
    return [CheckoutPaymentTypesQueryReloadEvent];
  }
  getCheckoutPaymentTypesQueryResetEvents() {
    return [CheckoutPaymentTypesQueryResetEvent];
  }
  constructor(activeCartFacade, userIdService, queryService, commandService, paymentTypeConnector, eventService, checkoutQueryFacade) {
    this.activeCartFacade = activeCartFacade;
    this.userIdService = userIdService;
    this.queryService = queryService;
    this.commandService = commandService;
    this.paymentTypeConnector = paymentTypeConnector;
    this.eventService = eventService;
    this.checkoutQueryFacade = checkoutQueryFacade;
    this.paymentTypesQuery = this.queryService.create(() => this.paymentTypeConnector.getPaymentTypes(), {
      reloadOn: this.getCheckoutPaymentTypesQueryReloadEvents(),
      resetOn: this.getCheckoutPaymentTypesQueryResetEvents()
    });
    this.setPaymentTypeCommand = this.commandService.create(({
      paymentTypeCode,
      purchaseOrderNumber
    }) => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.paymentTypeConnector.setPaymentType(userId, cartId, paymentTypeCode, purchaseOrderNumber).pipe(tap(() => this.eventService.dispatch({
      userId,
      cartId,
      paymentTypeCode,
      purchaseOrderNumber
    }, CheckoutPaymentTypeSetEvent))))), {
      strategy: CommandStrategy.CancelPrevious
    });
  }
  checkoutPreconditions() {
    return combineLatest([this.userIdService.takeUserId(), this.activeCartFacade.takeActiveCartId(), this.activeCartFacade.isGuestCart()]).pipe(take(1), map(([userId, cartId, isGuestCart]) => {
      if (!userId || !cartId || userId === OCC_USER_ID_ANONYMOUS && !isGuestCart) {
        throw new Error("Checkout conditions not met");
      }
      return [userId, cartId];
    }));
  }
  getPaymentTypesState() {
    return this.paymentTypesQuery.getState();
  }
  getPaymentTypes() {
    return this.getPaymentTypesState().pipe(concatMap((state) => state?.error ? throwError(state.error) : of(state)), map((state) => state.data ?? []));
  }
  setPaymentType(paymentTypeCode, purchaseOrderNumber) {
    return this.setPaymentTypeCommand.execute({
      paymentTypeCode,
      purchaseOrderNumber
    });
  }
  getSelectedPaymentTypeState() {
    return this.checkoutQueryFacade.getCheckoutDetailsState().pipe(map((state) => __spreadProps(__spreadValues({}, state), {
      data: state.data?.paymentType
    })));
  }
  isAccountPayment() {
    return this.getSelectedPaymentTypeState().pipe(filter((state) => !state.loading), map((state) => state.data?.code === B2BPaymentTypeEnum.ACCOUNT_PAYMENT));
  }
  getPurchaseOrderNumberState() {
    return this.checkoutQueryFacade.getCheckoutDetailsState().pipe(map((state) => __spreadProps(__spreadValues({}, state), {
      data: state.data?.purchaseOrderNumber
    })));
  }
  static {
    this.ɵfac = function CheckoutPaymentTypeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutPaymentTypeService)(ɵɵinject(ActiveCartFacade), ɵɵinject(UserIdService), ɵɵinject(QueryService), ɵɵinject(CommandService), ɵɵinject(CheckoutPaymentTypeConnector), ɵɵinject(EventService), ɵɵinject(CheckoutQueryFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutPaymentTypeService,
      factory: _CheckoutPaymentTypeService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentTypeService, [{
    type: Injectable
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: UserIdService
  }, {
    type: QueryService
  }, {
    type: CommandService
  }, {
    type: CheckoutPaymentTypeConnector
  }, {
    type: EventService
  }, {
    type: CheckoutQueryFacade
  }], null);
})();
var facadeProviders = [CheckoutCostCenterService, {
  provide: CheckoutCostCenterFacade,
  useExisting: CheckoutCostCenterService
}, CheckoutPaymentTypeService, {
  provide: CheckoutPaymentTypeFacade,
  useExisting: CheckoutPaymentTypeService
}];
var ResponseError;
(function(ResponseError2) {
  ResponseError2["NO_LONGER_VALID"] = "JaloObjectNoLongerValidError";
  ResponseError2["INVALID_ENTITY"] = "EntityValidationError";
})(ResponseError || (ResponseError = {}));
var BadCostCenterRequestHandler = class _BadCostCenterRequestHandler extends HttpErrorHandler {
  constructor(globalMessageService) {
    super(globalMessageService);
    this.globalMessageService = globalMessageService;
    this.responseStatus = HttpResponseStatus.BAD_REQUEST;
  }
  getPriority() {
    return Priority.NORMAL;
  }
  hasMatch(errorResponse) {
    return super.hasMatch(errorResponse) && this.getErrors(errorResponse).some(this.isEntityValidationError) && this.isCostCenterRequest(errorResponse);
  }
  handleError(_request, response) {
    if (this.getErrors(response).some((e) => this.isEntityValidationError(e))) {
      this.globalMessageService.add({
        key: "checkoutB2B.invalidCostCenter"
      }, GlobalMessageType.MSG_TYPE_ERROR);
    }
  }
  getErrors(response) {
    return (response.error?.errors || []).filter((error) => error.type !== ResponseError.NO_LONGER_VALID);
  }
  isCostCenterRequest(errorResponse) {
    if (errorResponse?.url) {
      const url = new URL(errorResponse.url);
      return url.pathname.endsWith("costcenter") && new URLSearchParams(url.search).has("costCenterId");
    }
    return false;
  }
  isEntityValidationError(error) {
    return error.type === ResponseError.INVALID_ENTITY;
  }
  static {
    this.ɵfac = function BadCostCenterRequestHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BadCostCenterRequestHandler)(ɵɵinject(GlobalMessageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BadCostCenterRequestHandler,
      factory: _BadCostCenterRequestHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadCostCenterRequestHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: GlobalMessageService
  }], null);
})();
var CheckoutB2BCoreModule = class _CheckoutB2BCoreModule {
  static {
    this.ɵfac = function CheckoutB2BCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutB2BCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutB2BCoreModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [...facadeProviders, CheckoutCostCenterConnector, CheckoutPaymentTypeConnector, {
        provide: HttpErrorHandler,
        useExisting: BadCostCenterRequestHandler,
        multi: true
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutB2BCoreModule, [{
    type: NgModule,
    args: [{
      providers: [...facadeProviders, CheckoutCostCenterConnector, CheckoutPaymentTypeConnector, {
        provide: HttpErrorHandler,
        useExisting: BadCostCenterRequestHandler,
        multi: true
      }]
    }]
  }], null, null);
})();
var CHECKOUT_PAYMENT_TYPE_NORMALIZER = new InjectionToken("CheckoutPaymentTypeNormalizer");

// node_modules/@spartacus/checkout/fesm2022/spartacus-checkout-b2b-occ.mjs
var OccCheckoutCostCenterAdapter = class _OccCheckoutCostCenterAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  setCostCenter(userId, cartId, costCenterId) {
    return this.http.put(this.getSetCartCostCenterEndpoint(userId, cartId, costCenterId), {}).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }), this.converter.pipeable(CART_NORMALIZER));
  }
  getSetCartCostCenterEndpoint(userId, cartId, costCenterId) {
    return this.occEndpoints.buildUrl("setCartCostCenter", {
      urlParams: {
        userId,
        cartId
      },
      queryParams: {
        costCenterId
      }
    });
  }
  static {
    this.ɵfac = function OccCheckoutCostCenterAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCheckoutCostCenterAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCheckoutCostCenterAdapter,
      factory: _OccCheckoutCostCenterAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCheckoutCostCenterAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccCheckoutPaymentTypeAdapter = class _OccCheckoutPaymentTypeAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  getPaymentTypes() {
    const context = new HttpContext().set(OCC_HTTP_TOKEN, {
      sendUserIdAsHeader: true
    });
    return this.http.get(this.getPaymentTypesEndpoint(), {
      context
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }), map((paymentTypeList) => paymentTypeList.paymentTypes ?? []), this.converter.pipeableMany(CHECKOUT_PAYMENT_TYPE_NORMALIZER));
  }
  getPaymentTypesEndpoint() {
    return this.occEndpoints.buildUrl("paymentTypes");
  }
  setPaymentType(userId, cartId, paymentType, purchaseOrderNumber) {
    return this.http.put(this.getSetCartPaymentTypeEndpoint(userId, cartId, paymentType, purchaseOrderNumber), {}).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }), this.converter.pipeable(CART_NORMALIZER));
  }
  getSetCartPaymentTypeEndpoint(userId, cartId, paymentType, purchaseOrderNumber) {
    const queryParams = {
      paymentType,
      purchaseOrderNumber
    };
    return this.occEndpoints.buildUrl("setCartPaymentType", {
      urlParams: {
        userId,
        cartId
      },
      queryParams
    });
  }
  static {
    this.ɵfac = function OccCheckoutPaymentTypeAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCheckoutPaymentTypeAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCheckoutPaymentTypeAdapter,
      factory: _OccCheckoutPaymentTypeAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCheckoutPaymentTypeAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var defaultB2bCheckoutDetailsOccEndpoint = {
  getCheckoutDetails: "users/${userId}/carts/${cartId}?fields=deliveryAddress(FULL),deliveryMode(FULL),paymentInfo(FULL),costCenter(FULL),purchaseOrderNumber,paymentType(FULL)"
};
var defaultOccCheckoutB2BConfig = {
  backend: {
    occ: {
      endpoints: __spreadProps(__spreadValues({}, defaultB2bCheckoutDetailsOccEndpoint), {
        setDeliveryAddress: "orgUsers/${userId}/carts/${cartId}/addresses/delivery",
        paymentTypes: "paymenttypes",
        setCartCostCenter: "users/${userId}/carts/${cartId}/costcenter",
        setCartPaymentType: "users/${userId}/carts/${cartId}/paymenttype"
      })
    }
  }
};
var CheckoutB2BOccModule = class _CheckoutB2BOccModule {
  static {
    this.ɵfac = function CheckoutB2BOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutB2BOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutB2BOccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccCheckoutB2BConfig), {
        provide: CheckoutPaymentTypeAdapter,
        useClass: OccCheckoutPaymentTypeAdapter
      }, {
        provide: CheckoutCostCenterAdapter,
        useClass: OccCheckoutCostCenterAdapter
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutB2BOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccCheckoutB2BConfig), {
        provide: CheckoutPaymentTypeAdapter,
        useClass: OccCheckoutPaymentTypeAdapter
      }, {
        provide: CheckoutCostCenterAdapter,
        useClass: OccCheckoutCostCenterAdapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/checkout/fesm2022/spartacus-checkout-b2b.mjs
var CheckoutB2BModule = class _CheckoutB2BModule {
  static {
    this.ɵfac = function CheckoutB2BModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutB2BModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutB2BModule,
      imports: [CheckoutB2BComponentsModule, CheckoutB2BCoreModule, CheckoutB2BOccModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CheckoutB2BComponentsModule, CheckoutB2BCoreModule, CheckoutB2BOccModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutB2BModule, [{
    type: NgModule,
    args: [{
      imports: [CheckoutB2BComponentsModule, CheckoutB2BCoreModule, CheckoutB2BOccModule]
    }]
  }], null, null);
})();
export {
  CheckoutB2BModule
};
//# sourceMappingURL=@spartacus_checkout_b2b.js.map
