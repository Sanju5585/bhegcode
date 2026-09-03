import {
  CART_BASE_FEATURE
} from "./chunk-KEAKWHYV.js";
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

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-wish-list-root.mjs
var CART_WISH_LIST_FEATURE = "cartWishList";
var CART_WISH_LIST_CORE_FEATURE = "cartWishListCore";
var ADD_TO_WISHLIST_FEATURE = "addToWishList";
var WishListFacade = class _WishListFacade {
  static {
    this.ɵfac = function WishListFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WishListFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _WishListFacade,
      factory: () => (() => facadeFactory({
        facade: _WishListFacade,
        feature: CART_WISH_LIST_CORE_FEATURE,
        methods: ["createWishList", "getWishList", "loadWishList", "addEntry", "removeEntry", "getWishListLoading"],
        async: true
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishListFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: WishListFacade,
        feature: CART_WISH_LIST_CORE_FEATURE,
        methods: ["createWishList", "getWishList", "loadWishList", "addEntry", "removeEntry", "getWishListLoading"],
        async: true
      })
    }]
  }], null, null);
})();
function defaultCartWishListComponentsConfig() {
  const config = {
    featureModules: {
      [CART_WISH_LIST_FEATURE]: {
        cmsComponents: ["WishListComponent"],
        dependencies: [CART_BASE_FEATURE]
      },
      [ADD_TO_WISHLIST_FEATURE]: {
        cmsComponents: ["AddToWishListComponent"]
      },
      // by default core is bundled together with components
      [CART_WISH_LIST_CORE_FEATURE]: CART_WISH_LIST_FEATURE
    }
  };
  return config;
}
var WishListRootModule = class _WishListRootModule {
  static {
    this.ɵfac = function WishListRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WishListRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _WishListRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultCartWishListComponentsConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishListRootModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfigFactory(defaultCartWishListComponentsConfig)]
    }]
  }], null, null);
})();

export {
  CART_WISH_LIST_FEATURE,
  CART_WISH_LIST_CORE_FEATURE,
  ADD_TO_WISHLIST_FEATURE,
  WishListFacade,
  defaultCartWishListComponentsConfig,
  WishListRootModule
};
//# sourceMappingURL=chunk-OS2ZNFTQ.js.map
