import {
  RequestedDeliveryDateFacade
} from "./chunk-AKUGUBF6.js";
import "./chunk-X6DUCLWC.js";
import "./chunk-UIW5AQFA.js";
import "./chunk-OOT34BER.js";
import "./chunk-KEAKWHYV.js";
import "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  GlobalMessageType,
  HttpErrorHandler,
  HttpResponseStatus,
  InterceptorUtil,
  OccEndpointsService,
  Priority,
  USE_CLIENT_TOKEN,
  provideDefaultConfig
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
  HttpHeaders
} from "./chunk-2A6OHZCE.js";
import "./chunk-YST33EXT.js";
import {
  CommonModule
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  Injectable,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import "./chunk-R6FETK65.js";
import "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/requested-delivery-date/fesm2022/spartacus-requested-delivery-date-core.mjs
var RequestedDeliveryDateAdapter = class {
};
var RequestedDeliveryDateConnector = class _RequestedDeliveryDateConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  setRequestedDeliveryDate(userId, cartId, requestedDate) {
    return this.adapter.setRequestedDeliveryDate(userId, cartId, requestedDate);
  }
  static {
    this.ɵfac = function RequestedDeliveryDateConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RequestedDeliveryDateConnector)(ɵɵinject(RequestedDeliveryDateAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RequestedDeliveryDateConnector,
      factory: _RequestedDeliveryDateConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestedDeliveryDateConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RequestedDeliveryDateAdapter
  }], null);
})();
var RequestedDeliveryDateBadRequestHandler = class _RequestedDeliveryDateBadRequestHandler extends HttpErrorHandler {
  constructor() {
    super(...arguments);
    this.responseStatus = HttpResponseStatus.BAD_REQUEST;
  }
  hasMatch(errorResponse) {
    return super.hasMatch(errorResponse) && this.getErrors(errorResponse)?.length > 0;
  }
  handleError(request, response) {
    if (request && this.getErrors(response)?.length) {
      this.globalMessageService.add({
        key: "requestedDeliveryDate.errorMessage"
      }, GlobalMessageType.MSG_TYPE_ERROR);
    }
  }
  getErrors(response) {
    return (response.error?.errors ?? []).filter((error) => error?.type === "ValidationError" && error?.message === "checkout.multi.requestedretrievaldatevalid.error");
  }
  getPriority() {
    return Priority.NORMAL;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵRequestedDeliveryDateBadRequestHandler_BaseFactory;
      return function RequestedDeliveryDateBadRequestHandler_Factory(__ngFactoryType__) {
        return (ɵRequestedDeliveryDateBadRequestHandler_BaseFactory || (ɵRequestedDeliveryDateBadRequestHandler_BaseFactory = ɵɵgetInheritedFactory(_RequestedDeliveryDateBadRequestHandler)))(__ngFactoryType__ || _RequestedDeliveryDateBadRequestHandler);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RequestedDeliveryDateBadRequestHandler,
      factory: _RequestedDeliveryDateBadRequestHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestedDeliveryDateBadRequestHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RequestedDeliveryDateService = class _RequestedDeliveryDateService {
  /**
   * Set requested delivery date
   */
  setRequestedDeliveryDate(userId, cartId, requestedDate) {
    return this.requestedDeliveryDateConnector.setRequestedDeliveryDate(userId, cartId, requestedDate);
  }
  constructor(requestedDeliveryDateConnector) {
    this.requestedDeliveryDateConnector = requestedDeliveryDateConnector;
  }
  static {
    this.ɵfac = function RequestedDeliveryDateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RequestedDeliveryDateService)(ɵɵinject(RequestedDeliveryDateConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RequestedDeliveryDateService,
      factory: _RequestedDeliveryDateService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestedDeliveryDateService, [{
    type: Injectable
  }], () => [{
    type: RequestedDeliveryDateConnector
  }], null);
})();
var RequestedDeliveryDateCoreModule = class _RequestedDeliveryDateCoreModule {
  static {
    this.ɵfac = function RequestedDeliveryDateCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RequestedDeliveryDateCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RequestedDeliveryDateCoreModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [RequestedDeliveryDateService, {
        provide: RequestedDeliveryDateFacade,
        useExisting: RequestedDeliveryDateService
      }, {
        provide: HttpErrorHandler,
        useExisting: RequestedDeliveryDateBadRequestHandler,
        multi: true
      }, RequestedDeliveryDateConnector]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestedDeliveryDateCoreModule, [{
    type: NgModule,
    args: [{
      imports: [],
      providers: [RequestedDeliveryDateService, {
        provide: RequestedDeliveryDateFacade,
        useExisting: RequestedDeliveryDateService
      }, {
        provide: HttpErrorHandler,
        useExisting: RequestedDeliveryDateBadRequestHandler,
        multi: true
      }, RequestedDeliveryDateConnector]
    }]
  }], null, null);
})();

// node_modules/@spartacus/requested-delivery-date/fesm2022/spartacus-requested-delivery-date-occ.mjs
var OccRequestedDeliveryDateAdapter = class _OccRequestedDeliveryDateAdapter {
  constructor(http, occEndpoints) {
    this.http = http;
    this.occEndpoints = occEndpoints;
  }
  setRequestedDeliveryDate(userId, cartId, requestedRetrievalAt) {
    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    const url = this.occEndpoints.buildUrl("requestedDeliveryDate", {
      urlParams: {
        userId,
        cartId
      },
      queryParams: {
        requestedRetrievalAt
      }
    });
    return this.http.put(url, {
      headers
    });
  }
  static {
    this.ɵfac = function OccRequestedDeliveryDateAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccRequestedDeliveryDateAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccRequestedDeliveryDateAdapter,
      factory: _OccRequestedDeliveryDateAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccRequestedDeliveryDateAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }], null);
})();
var defaultOccRequestedDeliveryDateConfig = {
  backend: {
    occ: {
      endpoints: {
        requestedDeliveryDate: "users/${userId}/carts/${cartId}/requestedretrievaldate"
      }
    }
  }
};
var RequestedDeliveryDateOccModule = class _RequestedDeliveryDateOccModule {
  static {
    this.ɵfac = function RequestedDeliveryDateOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RequestedDeliveryDateOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RequestedDeliveryDateOccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccRequestedDeliveryDateConfig), {
        provide: RequestedDeliveryDateAdapter,
        useClass: OccRequestedDeliveryDateAdapter
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestedDeliveryDateOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccRequestedDeliveryDateConfig), {
        provide: RequestedDeliveryDateAdapter,
        useClass: OccRequestedDeliveryDateAdapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/requested-delivery-date/fesm2022/spartacus-requested-delivery-date.mjs
var RequestedDeliveryDateModule = class _RequestedDeliveryDateModule {
  static {
    this.ɵfac = function RequestedDeliveryDateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RequestedDeliveryDateModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RequestedDeliveryDateModule,
      imports: [RequestedDeliveryDateCoreModule, RequestedDeliveryDateOccModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [RequestedDeliveryDateCoreModule, RequestedDeliveryDateOccModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestedDeliveryDateModule, [{
    type: NgModule,
    args: [{
      imports: [RequestedDeliveryDateCoreModule, RequestedDeliveryDateOccModule]
    }]
  }], null, null);
})();
export {
  RequestedDeliveryDateModule
};
//# sourceMappingURL=@spartacus_requested-delivery-date.js.map
