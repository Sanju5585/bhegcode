import {
  ORDER_ENTRIES_CONTEXT
} from "./chunk-KEAKWHYV.js";
import {
  CmsPageGuard,
  PageLayoutComponent
} from "./chunk-D5RDRHN5.js";
import {
  Config,
  facadeFactory,
  provideDefaultConfig,
  provideDefaultConfigFactory
} from "./chunk-VIVIQI6G.js";
import {
  RouterModule
} from "./chunk-EBCNDD52.js";
import {
  Injectable,
  InjectionToken,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-7OJSO65L.js";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-quick-order-root.mjs
var defaultQuickOrderConfig = {
  quickOrder: {
    searchForm: {
      displayProductImages: true,
      maxProducts: 5,
      minCharactersBeforeRequest: 3
    },
    list: {
      hardDeleteTimeout: 24e4
    }
  }
};
var QuickOrderConfig = class _QuickOrderConfig {
  static {
    this.ɵfac = function QuickOrderConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickOrderConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _QuickOrderConfig,
      factory: function QuickOrderConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _QuickOrderConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var CART_QUICK_ORDER_FEATURE = "cartQuickOrder";
var CART_QUICK_ORDER_CORE_FEATURE = "cartQuickOrderCore";
function quickOrderFacadeFactory() {
  return facadeFactory({
    facade: QuickOrderFacade,
    feature: CART_QUICK_ORDER_CORE_FEATURE,
    methods: ["addProduct", "addToCart", "clearList", "canAdd", "setListLimit", "getEntries", "getProductAdded", "loadEntries", "softDeleteEntry", "searchProducts", "setProductAdded", "updateEntryQuantity", "getSoftDeletedEntries", "restoreSoftDeletedEntry", "hardDeleteEntry", "clearDeletedEntries", "getNonPurchasableProductError", "setNonPurchasableProductError", "clearNonPurchasableProductError"]
  });
}
var QuickOrderFacade = class _QuickOrderFacade {
  static {
    this.ɵfac = function QuickOrderFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickOrderFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _QuickOrderFacade,
      factory: () => quickOrderFacadeFactory(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: quickOrderFacadeFactory
    }]
  }], null, null);
})();
var QuickOrderOrderEntriesContextToken = new InjectionToken("QuickOrderOrderEntriesContext");
function defaultQuickOrderComponentsConfig() {
  const config = {
    featureModules: {
      [CART_QUICK_ORDER_FEATURE]: {
        cmsComponents: ["QuickOrderComponent", "CartQuickOrderFormComponent"]
      },
      // by default core is bundled together with components
      [CART_QUICK_ORDER_CORE_FEATURE]: CART_QUICK_ORDER_FEATURE
    }
  };
  return config;
}
var defaultQuickOrderRoutingConfig = {
  routing: {
    routes: {
      quickOrder: {
        paths: ["my-account/quick-order"]
      }
    }
  }
};
var QuickOrderRootModule = class _QuickOrderRootModule {
  static {
    this.ɵfac = function QuickOrderRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickOrderRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _QuickOrderRootModule,
      imports: [RouterModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultQuickOrderComponentsConfig), provideDefaultConfig(defaultQuickOrderRoutingConfig), provideDefaultConfig(defaultQuickOrderConfig)],
      imports: [RouterModule.forChild([{
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "quickOrder",
          cxContext: {
            [ORDER_ENTRIES_CONTEXT]: QuickOrderOrderEntriesContextToken
          }
        }
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickOrderRootModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild([{
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "quickOrder",
          cxContext: {
            [ORDER_ENTRIES_CONTEXT]: QuickOrderOrderEntriesContextToken
          }
        }
      }])],
      providers: [provideDefaultConfigFactory(defaultQuickOrderComponentsConfig), provideDefaultConfig(defaultQuickOrderRoutingConfig), provideDefaultConfig(defaultQuickOrderConfig)]
    }]
  }], null, null);
})();

export {
  defaultQuickOrderConfig,
  QuickOrderConfig,
  CART_QUICK_ORDER_FEATURE,
  CART_QUICK_ORDER_CORE_FEATURE,
  quickOrderFacadeFactory,
  QuickOrderFacade,
  QuickOrderOrderEntriesContextToken,
  defaultQuickOrderComponentsConfig,
  defaultQuickOrderRoutingConfig,
  QuickOrderRootModule
};
//# sourceMappingURL=chunk-TRXSWON6.js.map
