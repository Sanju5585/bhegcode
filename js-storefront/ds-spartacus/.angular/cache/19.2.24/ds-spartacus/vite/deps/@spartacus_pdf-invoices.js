import {
  PDFInvoicesComponentsModule
} from "./chunk-22AER76T.js";
import {
  PDFInvoicesFacade
} from "./chunk-DM7JC3BZ.js";
import "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  ConverterService,
  GlobalMessageType,
  HttpErrorHandler,
  HttpResponseStatus,
  LoggerService,
  OccEndpointsService,
  Priority,
  RoutingService,
  UserIdService,
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
  HttpClient
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
  ɵɵgetInheritedFactory,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  catchError,
  distinctUntilChanged,
  map,
  shareReplay,
  throwError
} from "./chunk-R6FETK65.js";
import {
  Subscription
} from "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/pdf-invoices/fesm2022/spartacus-pdf-invoices-core.mjs
var PDF_INVOICES_LIST_INVOICES_NORMALIZER = new InjectionToken("PDFInvoicesListInvoices");
var PDFInvoicesAdapter = class {
};
var PDFInvoicesConnector = class _PDFInvoicesConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  getInvoicesForOrder(userId, orderId, queryParams) {
    return this.adapter.getInvoicesForOrder(userId, orderId, queryParams);
  }
  getInvoicePDF(userId, orderId, invoiceId, externalSystemId) {
    return this.adapter.getInvoicePDF(userId, orderId, invoiceId, externalSystemId);
  }
  static {
    this.ɵfac = function PDFInvoicesConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PDFInvoicesConnector)(ɵɵinject(PDFInvoicesAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PDFInvoicesConnector,
      factory: _PDFInvoicesConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFInvoicesConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: PDFInvoicesAdapter
  }], null);
})();
var PDFInvoicesBadRequestHandler = class _PDFInvoicesBadRequestHandler extends HttpErrorHandler {
  constructor() {
    super(...arguments);
    this.responseStatus = HttpResponseStatus.BAD_REQUEST;
  }
  hasMatch(errorResponse) {
    return super.hasMatch(errorResponse) && this.getErrors(errorResponse)?.length > 0;
  }
  handleError(request, response) {
    this.handleInvoicesListError(request, response);
    this.handlePDFDownloadError(request, response);
  }
  handleInvoicesListError(_request, response) {
    this.getErrors(response).filter((e) => this.isInvoicesListNotFoundError(e)).forEach(() => {
      this.globalMessageService.add({
        key: "pdfInvoices.invoicesLoadingError"
      }, GlobalMessageType.MSG_TYPE_ERROR);
    });
  }
  handlePDFDownloadError(_request, response) {
    this.getErrors(response).filter((e) => this.isDownloadInvoiceError(e)).forEach(() => {
      this.globalMessageService.add({
        key: "pdfInvoices.downloadPDFError"
      }, GlobalMessageType.MSG_TYPE_ERROR);
    });
  }
  isInvoicesListNotFoundError(error) {
    return error?.type === "UnknownIdentifierError" && error?.message != null && error?.message.includes("Order");
  }
  isDownloadInvoiceError(error) {
    return error?.type === "UnknownIdentifierError" && error?.message != null && error?.message.includes("Invoice");
  }
  getErrors(response) {
    return (response.error?.errors ?? []).filter((error) => this.isInvoicesListNotFoundError(error) || this.isDownloadInvoiceError(error));
  }
  getPriority() {
    return Priority.NORMAL;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵPDFInvoicesBadRequestHandler_BaseFactory;
      return function PDFInvoicesBadRequestHandler_Factory(__ngFactoryType__) {
        return (ɵPDFInvoicesBadRequestHandler_BaseFactory || (ɵPDFInvoicesBadRequestHandler_BaseFactory = ɵɵgetInheritedFactory(_PDFInvoicesBadRequestHandler)))(__ngFactoryType__ || _PDFInvoicesBadRequestHandler);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PDFInvoicesBadRequestHandler,
      factory: _PDFInvoicesBadRequestHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFInvoicesBadRequestHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PDFInvoicesService = class _PDFInvoicesService {
  constructor(routingService, userIdService, pdfInvoicesConnector) {
    this.routingService = routingService;
    this.userIdService = userIdService;
    this.pdfInvoicesConnector = pdfInvoicesConnector;
    this.subscriptions = new Subscription();
    this.subscriptions.add(this.userIdService.takeUserId().subscribe((userId) => this.userId = userId));
    this.subscriptions.add(this.getOrderId().subscribe((orderId) => this.orderId = orderId));
  }
  getInvoicesForOrder(queryParams, userId, orderId) {
    return this.pdfInvoicesConnector.getInvoicesForOrder(userId || this.userId, orderId || this.orderId, queryParams).pipe(shareReplay(1));
  }
  getInvoicePDF(invoiceId, externalSystemId, userId, orderId) {
    return this.pdfInvoicesConnector.getInvoicePDF(userId || this.userId, orderId || this.orderId, invoiceId, externalSystemId).pipe(shareReplay(1));
  }
  getOrderId() {
    return this.routingService.getRouterState().pipe(map((routingData) => routingData.state.params), distinctUntilChanged(), map((params) => params.orderCode));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function PDFInvoicesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PDFInvoicesService)(ɵɵinject(RoutingService), ɵɵinject(UserIdService), ɵɵinject(PDFInvoicesConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PDFInvoicesService,
      factory: _PDFInvoicesService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFInvoicesService, [{
    type: Injectable
  }], () => [{
    type: RoutingService
  }, {
    type: UserIdService
  }, {
    type: PDFInvoicesConnector
  }], null);
})();
var PDFInvoicesCoreModule = class _PDFInvoicesCoreModule {
  static {
    this.ɵfac = function PDFInvoicesCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PDFInvoicesCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PDFInvoicesCoreModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [PDFInvoicesService, {
        provide: PDFInvoicesFacade,
        useExisting: PDFInvoicesService
      }, {
        provide: HttpErrorHandler,
        useExisting: PDFInvoicesBadRequestHandler,
        multi: true
      }, PDFInvoicesConnector]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFInvoicesCoreModule, [{
    type: NgModule,
    args: [{
      imports: [],
      providers: [PDFInvoicesService, {
        provide: PDFInvoicesFacade,
        useExisting: PDFInvoicesService
      }, {
        provide: HttpErrorHandler,
        useExisting: PDFInvoicesBadRequestHandler,
        multi: true
      }, PDFInvoicesConnector]
    }]
  }], null, null);
})();

// node_modules/@spartacus/pdf-invoices/fesm2022/spartacus-pdf-invoices-occ.mjs
var OccPDFInvoicesAdapter = class _OccPDFInvoicesAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  getInvoicesForOrder(userId, orderId, queryParams) {
    return this.http.get(this.buildInvoiceListUrl(userId, orderId, queryParams)).pipe(catchError((error) => throwError(tryNormalizeHttpError(error, this.logger))), this.converter.pipeable(PDF_INVOICES_LIST_INVOICES_NORMALIZER));
  }
  getInvoicePDF(userId, orderId, invoiceId, externalSystemId) {
    const options = {
      responseType: "blob"
    };
    return this.http.get(this.buildInvoicePDFUrl(userId, orderId, invoiceId, externalSystemId), options).pipe(catchError((error) => throwError(tryNormalizeHttpError(error, this.logger))));
  }
  buildInvoiceListUrl(userId, orderId, queryParams) {
    return this.occEndpoints.buildUrl("pdfInvoicesListInvoices", {
      urlParams: {
        userId,
        orderId
      },
      queryParams
    });
  }
  buildInvoicePDFUrl(userId, orderId, invoiceId, externalSystemId) {
    return this.occEndpoints.buildUrl("pdfInvoicesDownloadInvoicePDF", {
      urlParams: {
        userId,
        orderId,
        invoiceId
      },
      queryParams: externalSystemId ? {
        externalSystemId
      } : void 0
    });
  }
  static {
    this.ɵfac = function OccPDFInvoicesAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccPDFInvoicesAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccPDFInvoicesAdapter,
      factory: _OccPDFInvoicesAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccPDFInvoicesAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var defaultOccPDFInvoicesConfig = {
  backend: {
    occ: {
      endpoints: {
        pdfInvoicesListInvoices: "users/${userId}/orders/${orderId}/invoices",
        pdfInvoicesDownloadInvoicePDF: "users/${userId}/orders/${orderId}/invoices/${invoiceId}/download"
      }
    }
  }
};
var PDFInvoicesOccModule = class _PDFInvoicesOccModule {
  static {
    this.ɵfac = function PDFInvoicesOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PDFInvoicesOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PDFInvoicesOccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccPDFInvoicesConfig), {
        provide: PDFInvoicesAdapter,
        useClass: OccPDFInvoicesAdapter
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFInvoicesOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccPDFInvoicesConfig), {
        provide: PDFInvoicesAdapter,
        useClass: OccPDFInvoicesAdapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/pdf-invoices/fesm2022/spartacus-pdf-invoices.mjs
var PDFInvoicesModule = class _PDFInvoicesModule {
  static {
    this.ɵfac = function PDFInvoicesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PDFInvoicesModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PDFInvoicesModule,
      imports: [PDFInvoicesComponentsModule, PDFInvoicesCoreModule, PDFInvoicesOccModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [PDFInvoicesComponentsModule, PDFInvoicesCoreModule, PDFInvoicesOccModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PDFInvoicesModule, [{
    type: NgModule,
    args: [{
      imports: [PDFInvoicesComponentsModule, PDFInvoicesCoreModule, PDFInvoicesOccModule]
    }]
  }], null, null);
})();
export {
  PDFInvoicesModule
};
//# sourceMappingURL=@spartacus_pdf-invoices.js.map
