import {
  facadeFactory,
  provideDefaultConfigFactory
} from "./chunk-VIVIQI6G.js";
import {
  Injectable,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-7OJSO65L.js";

// node_modules/@spartacus/product/fesm2022/spartacus-product-future-stock-root.mjs
var PRODUCT_FUTURE_STOCK_FEATURE = "productFutureStock";
var PRODUCT_FUTURE_STOCK_CORE_FEATURE = "productFutureStockCore";
function futureStockFacadeFactory() {
  return facadeFactory({
    facade: FutureStockFacade,
    feature: PRODUCT_FUTURE_STOCK_CORE_FEATURE,
    methods: ["getFutureStock"]
  });
}
var FutureStockFacade = class _FutureStockFacade {
  static {
    this.ɵfac = function FutureStockFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FutureStockFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _FutureStockFacade,
      factory: () => futureStockFacadeFactory(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FutureStockFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: futureStockFacadeFactory
    }]
  }], null, null);
})();
function defaultFutureStockComponentsConfig() {
  return {
    featureModules: {
      [PRODUCT_FUTURE_STOCK_FEATURE]: {
        cmsComponents: ["FutureStockComponent"]
      }
    }
  };
}
var FutureStockRootModule = class _FutureStockRootModule {
  static {
    this.ɵfac = function FutureStockRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FutureStockRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FutureStockRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultFutureStockComponentsConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FutureStockRootModule, [{
    type: NgModule,
    args: [{
      imports: [],
      providers: [provideDefaultConfigFactory(defaultFutureStockComponentsConfig)]
    }]
  }], null, null);
})();

export {
  PRODUCT_FUTURE_STOCK_FEATURE,
  PRODUCT_FUTURE_STOCK_CORE_FEATURE,
  futureStockFacadeFactory,
  FutureStockFacade,
  defaultFutureStockComponentsConfig,
  FutureStockRootModule
};
//# sourceMappingURL=chunk-QNQMQEAE.js.map
