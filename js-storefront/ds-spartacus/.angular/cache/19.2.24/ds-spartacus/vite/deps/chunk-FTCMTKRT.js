import {
  ADD_TO_CART_FEATURE,
  CART_BASE_FEATURE
} from "./chunk-KEAKWHYV.js";
import {
  LAUNCH_CALLER
} from "./chunk-D5RDRHN5.js";
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

// node_modules/@spartacus/pickup-in-store/fesm2022/spartacus-pickup-in-store-root.mjs
var PICKUP_IN_STORE_FEATURE = "pickupInStore";
var PICKUP_IN_STORE_CORE_FEATURE = "pickupInStoreCore";
var IntendedPickupLocationFacade = class _IntendedPickupLocationFacade {
  static {
    this.ɵfac = function IntendedPickupLocationFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IntendedPickupLocationFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _IntendedPickupLocationFacade,
      factory: () => (() => facadeFactory({
        facade: _IntendedPickupLocationFacade,
        feature: PICKUP_IN_STORE_CORE_FEATURE,
        methods: ["getIntendedLocation", "setIntendedLocation", "removeIntendedLocation", "getPickupOption", "setPickupOption"],
        async: true
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntendedPickupLocationFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: IntendedPickupLocationFacade,
        feature: PICKUP_IN_STORE_CORE_FEATURE,
        methods: ["getIntendedLocation", "setIntendedLocation", "removeIntendedLocation", "getPickupOption", "setPickupOption"],
        async: true
      })
    }]
  }], null, null);
})();
var PickupLocationsSearchFacade = class _PickupLocationsSearchFacade {
  static {
    this.ɵfac = function PickupLocationsSearchFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupLocationsSearchFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PickupLocationsSearchFacade,
      factory: () => (() => facadeFactory({
        facade: _PickupLocationsSearchFacade,
        feature: PICKUP_IN_STORE_CORE_FEATURE,
        methods: ["clearSearchResults", "getHideOutOfStock", "getSearchResults", "getStockLevelAtStore", "getStoreDetails", "loadAndGetStoreDetails", "hasSearchStarted", "isSearchRunning", "loadStoreDetails", "setBrowserLocation", "startSearch", "stockLevelAtStore", "toggleHideOutOfStock"],
        async: true
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupLocationsSearchFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: PickupLocationsSearchFacade,
        feature: PICKUP_IN_STORE_CORE_FEATURE,
        methods: ["clearSearchResults", "getHideOutOfStock", "getSearchResults", "getStockLevelAtStore", "getStoreDetails", "loadAndGetStoreDetails", "hasSearchStarted", "isSearchRunning", "loadStoreDetails", "setBrowserLocation", "startSearch", "stockLevelAtStore", "toggleHideOutOfStock"],
        async: true
      })
    }]
  }], null, null);
})();
var PickupOptionFacade = class _PickupOptionFacade {
  static {
    this.ɵfac = function PickupOptionFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupOptionFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PickupOptionFacade,
      factory: () => (() => facadeFactory({
        facade: _PickupOptionFacade,
        feature: PICKUP_IN_STORE_CORE_FEATURE,
        methods: ["setPageContext", "getPageContext", "setPickupOption", "getPickupOption"],
        async: true
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupOptionFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: PickupOptionFacade,
        feature: PICKUP_IN_STORE_CORE_FEATURE,
        methods: ["setPageContext", "getPageContext", "setPickupOption", "getPickupOption"],
        async: true
      })
    }]
  }], null, null);
})();
var PreferredStoreFacade = class _PreferredStoreFacade {
  static {
    this.ɵfac = function PreferredStoreFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PreferredStoreFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PreferredStoreFacade,
      factory: () => (() => facadeFactory({
        facade: _PreferredStoreFacade,
        feature: PICKUP_IN_STORE_CORE_FEATURE,
        methods: ["getPreferredStore$", "getPreferredStoreWithProductInStock", "clearPreferredStore", "setPreferredStore"],
        async: true
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreferredStoreFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: PreferredStoreFacade,
        feature: PICKUP_IN_STORE_CORE_FEATURE,
        methods: ["getPreferredStore$", "getPreferredStoreWithProductInStock", "clearPreferredStore", "setPreferredStore"],
        async: true
      })
    }]
  }], null, null);
})();
LAUNCH_CALLER["PICKUP_IN_STORE"] = "PICKUP_IN_STORE";
var PREFERRED_STORE_LOCAL_STORAGE_KEY = "preferred_store";
function defaultPickupInStoreComponentsConfig() {
  return {
    featureModules: {
      [PICKUP_IN_STORE_FEATURE]: {
        cmsComponents: ["CheckoutReviewPickup", "MyPreferredStoreComponent", "OrderConfirmationPickUpComponent", "PickupInStoreDeliveryModeComponent"]
      },
      [PICKUP_IN_STORE_CORE_FEATURE]: PICKUP_IN_STORE_FEATURE
    }
  };
}
var PickupInStoreRootModule = class _PickupInStoreRootModule {
  static {
    this.ɵfac = function PickupInStoreRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PickupInStoreRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PickupInStoreRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [
        provideDefaultConfigFactory(defaultPickupInStoreComponentsConfig),
        // make pickup lib loaded before add-to-cart
        provideDefaultConfig({
          featureModules: {
            [ADD_TO_CART_FEATURE]: {
              dependencies: [PICKUP_IN_STORE_FEATURE]
            }
          }
        }),
        // make pickup lib loaded before cart base
        provideDefaultConfig({
          featureModules: {
            [CART_BASE_FEATURE]: {
              dependencies: [PICKUP_IN_STORE_FEATURE]
            }
          }
        })
      ]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickupInStoreRootModule, [{
    type: NgModule,
    args: [{
      providers: [
        provideDefaultConfigFactory(defaultPickupInStoreComponentsConfig),
        // make pickup lib loaded before add-to-cart
        provideDefaultConfig({
          featureModules: {
            [ADD_TO_CART_FEATURE]: {
              dependencies: [PICKUP_IN_STORE_FEATURE]
            }
          }
        }),
        // make pickup lib loaded before cart base
        provideDefaultConfig({
          featureModules: {
            [CART_BASE_FEATURE]: {
              dependencies: [PICKUP_IN_STORE_FEATURE]
            }
          }
        })
      ]
    }]
  }], null, null);
})();
var getProperty = (o, property) => {
  if (!o) {
    return null;
  }
  if (o.hasOwnProperty(property)) {
    return o[property];
  }
  return null;
};
function cartWithIdAndUserId(cart) {
  return !!cart && cart.guid !== void 0 && cart.user !== void 0 && cart.user.uid !== void 0 && cart.code !== void 0;
}

export {
  PICKUP_IN_STORE_FEATURE,
  PICKUP_IN_STORE_CORE_FEATURE,
  IntendedPickupLocationFacade,
  PickupLocationsSearchFacade,
  PickupOptionFacade,
  PreferredStoreFacade,
  PREFERRED_STORE_LOCAL_STORAGE_KEY,
  defaultPickupInStoreComponentsConfig,
  PickupInStoreRootModule,
  getProperty,
  cartWithIdAndUserId
};
//# sourceMappingURL=chunk-FTCMTKRT.js.map
