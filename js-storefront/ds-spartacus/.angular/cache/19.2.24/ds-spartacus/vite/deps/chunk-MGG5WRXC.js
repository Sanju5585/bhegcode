import {
  facadeFactory,
  provideDefaultConfig,
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

// node_modules/@spartacus/storefinder/fesm2022/spartacus-storefinder-root.mjs
var GOOGLE_MAPS_DEVELOPMENT_KEY_CONFIG = "cx-development";
var defaultStoreFinderLayoutConfig = {
  layoutSlots: {
    StoreFinderPageTemplate: {
      slots: ["MiddleContent", "SideContent"]
    }
  }
};
var STORE_FINDER_FEATURE = "storeFinder";
var StoreFinderFacade = class _StoreFinderFacade {
  static {
    this.ɵfac = function StoreFinderFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StoreFinderFacade,
      factory: () => (() => facadeFactory({
        // @ts-ignore: Deprecated methods will be removed with next major release
        facade: _StoreFinderFacade,
        feature: STORE_FINDER_FEATURE,
        methods: ["getStoresLoading", "getStoresLoaded", "getFindStoresEntities", "getViewAllStoresLoading", "getViewAllStoresEntities", "findStoresAction", "viewAllStores", "viewStoreById", "callFindStoresAction", "getFindStoreEntityById"],
        async: true
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        // @ts-ignore: Deprecated methods will be removed with next major release
        facade: StoreFinderFacade,
        feature: STORE_FINDER_FEATURE,
        methods: ["getStoresLoading", "getStoresLoaded", "getFindStoresEntities", "getViewAllStoresLoading", "getViewAllStoresEntities", "findStoresAction", "viewAllStores", "viewStoreById", "callFindStoresAction", "getFindStoreEntityById"],
        async: true
      })
    }]
  }], null, null);
})();
var StoreFinderOutlets;
(function(StoreFinderOutlets2) {
  StoreFinderOutlets2["PREFERRED_STORE"] = "cx-pick-up-in-store-make-my-store";
})(StoreFinderOutlets || (StoreFinderOutlets = {}));
function defaultStoreFinderComponentsConfig() {
  const config = {
    featureModules: {
      [STORE_FINDER_FEATURE]: {
        cmsComponents: ["StoreFinderComponent"]
      }
    }
  };
  return config;
}
var StoreFinderRootModule = class _StoreFinderRootModule {
  static {
    this.ɵfac = function StoreFinderRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _StoreFinderRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultStoreFinderLayoutConfig), provideDefaultConfigFactory(defaultStoreFinderComponentsConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderRootModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      providers: [provideDefaultConfig(defaultStoreFinderLayoutConfig), provideDefaultConfigFactory(defaultStoreFinderComponentsConfig)]
    }]
  }], null, null);
})();

export {
  GOOGLE_MAPS_DEVELOPMENT_KEY_CONFIG,
  defaultStoreFinderLayoutConfig,
  STORE_FINDER_FEATURE,
  StoreFinderFacade,
  StoreFinderOutlets,
  defaultStoreFinderComponentsConfig,
  StoreFinderRootModule
};
//# sourceMappingURL=chunk-MGG5WRXC.js.map
