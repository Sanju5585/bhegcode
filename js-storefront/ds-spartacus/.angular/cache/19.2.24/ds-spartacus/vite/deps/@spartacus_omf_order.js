import {
  OccOrderHistoryAdapter
} from "./chunk-A4FULBAP.js";
import {
  OrderHistoryAdapter,
  OrderHistoryService,
  orderGroup_selectors
} from "./chunk-KW2L2NIV.js";
import {
  ORDER_NORMALIZER,
  OrderHistoryFacade
} from "./chunk-UIW5AQFA.js";
import "./chunk-KEAKWHYV.js";
import "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  Config,
  InterceptorUtil,
  OCC_USER_ID_ANONYMOUS,
  USE_CLIENT_TOKEN,
  provideDefaultConfig
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
  ActivatedRoute
} from "./chunk-EBCNDD52.js";
import "./chunk-YMQEGXEG.js";
import "./chunk-6KXUHIAW.js";
import {
  Store
} from "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import {
  HttpHeaders
} from "./chunk-2A6OHZCE.js";
import "./chunk-YST33EXT.js";
import "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  Injectable,
  NgModule,
  inject,
  isDevMode,
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
  map,
  of
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/omf/fesm2022/spartacus-omf-order.mjs
var OmfConfig = class _OmfConfig {
  static {
    this.ɵfac = function OmfConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OmfConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OmfConfig,
      factory: function OmfConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _OmfConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OmfConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var OccOmfOrderHistoryAdapter = class _OccOmfOrderHistoryAdapter extends OccOrderHistoryAdapter {
  constructor() {
    super(...arguments);
    this.route = inject(ActivatedRoute);
    this.store = inject(Store);
    this.config = inject(OmfConfig);
  }
  getOrderDetailsValue(code) {
    return this.store.select(orderGroup_selectors.getOrdersState).pipe(map((orderListState) => orderListState.value), map((orderList) => {
      return (orderList?.orders ?? []).find((order) => order.code === code);
    }));
  }
  getOrderGuid(orderCode) {
    return this.route.queryParams.pipe(switchMap((queryParams) => {
      if (queryParams.guid) {
        return of(queryParams.guid);
      } else {
        return this.getOrderDetailsValue(orderCode).pipe(map((order) => order ? order.guid : void 0));
      }
    }));
  }
  getRequestHeader(guid) {
    let headers = new HttpHeaders();
    if (!this.config.omf?.guidHttpHeaderName && isDevMode()) {
      this.logger.warn(`There is no guidHttpHeaderName configured in OMF configuration`);
    }
    const guidHeader = this.config.omf?.guidHttpHeaderName?.toLowerCase?.();
    if (guid && guidHeader) {
      headers = headers.set(guidHeader, guid);
    }
    return headers;
  }
  load(userId, orderCode) {
    return this.getOrderGuid(orderCode).pipe(switchMap((guid) => {
      const url = this.occEndpoints.buildUrl("orderDetail", {
        urlParams: {
          userId,
          orderId: orderCode
        }
      });
      let headers = this.getRequestHeader(guid);
      if (userId === OCC_USER_ID_ANONYMOUS) {
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
      }
      return this.http.get(url, {
        headers
      }).pipe(this.converter.pipeable(ORDER_NORMALIZER));
    }));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵOccOmfOrderHistoryAdapter_BaseFactory;
      return function OccOmfOrderHistoryAdapter_Factory(__ngFactoryType__) {
        return (ɵOccOmfOrderHistoryAdapter_BaseFactory || (ɵOccOmfOrderHistoryAdapter_BaseFactory = ɵɵgetInheritedFactory(_OccOmfOrderHistoryAdapter)))(__ngFactoryType__ || _OccOmfOrderHistoryAdapter);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccOmfOrderHistoryAdapter,
      factory: _OccOmfOrderHistoryAdapter.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccOmfOrderHistoryAdapter, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OmfOrderHistoryService = class _OmfOrderHistoryService extends OrderHistoryService {
  getQueryParams(order) {
    return order.guid ? {
      guid: order.guid
    } : null;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵOmfOrderHistoryService_BaseFactory;
      return function OmfOrderHistoryService_Factory(__ngFactoryType__) {
        return (ɵOmfOrderHistoryService_BaseFactory || (ɵOmfOrderHistoryService_BaseFactory = ɵɵgetInheritedFactory(_OmfOrderHistoryService)))(__ngFactoryType__ || _OmfOrderHistoryService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OmfOrderHistoryService,
      factory: _OmfOrderHistoryService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OmfOrderHistoryService, [{
    type: Injectable
  }], null, null);
})();
var defaultOmfConfig = {
  omf: {
    guidHttpHeaderName: "guid"
  }
};
var OmfOrderModule = class _OmfOrderModule {
  static {
    this.ɵfac = function OmfOrderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OmfOrderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OmfOrderModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [OmfOrderHistoryService, provideDefaultConfig(defaultOmfConfig), {
        provide: OrderHistoryAdapter,
        useClass: OccOmfOrderHistoryAdapter
      }, {
        provide: OrderHistoryFacade,
        useClass: OmfOrderHistoryService
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OmfOrderModule, [{
    type: NgModule,
    args: [{
      providers: [OmfOrderHistoryService, provideDefaultConfig(defaultOmfConfig), {
        provide: OrderHistoryAdapter,
        useClass: OccOmfOrderHistoryAdapter
      }, {
        provide: OrderHistoryFacade,
        useClass: OmfOrderHistoryService
      }]
    }]
  }], null, null);
})();
export {
  OccOmfOrderHistoryAdapter,
  OmfOrderHistoryService,
  OmfOrderModule
};
//# sourceMappingURL=@spartacus_omf_order.js.map
