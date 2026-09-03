import {
  CART_BASE_FEATURE,
  CartEvent,
  ORDER_ENTRIES_CONTEXT
} from "./chunk-KEAKWHYV.js";
import {
  CmsPageGuard,
  LAUNCH_CALLER,
  PageLayoutComponent
} from "./chunk-D5RDRHN5.js";
import {
  AuthGuard,
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
  ɵɵdefineNgModule
} from "./chunk-7OJSO65L.js";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-saved-cart-root.mjs
var SavedCartEvent = class extends CartEvent {
};
var SaveCartEvent = class extends SavedCartEvent {
  static {
    this.type = "SaveCartEvent";
  }
};
var SaveCartSuccessEvent = class extends SavedCartEvent {
  static {
    this.type = "SaveCartSuccessEvent";
  }
};
var SaveCartFailEvent = class extends SavedCartEvent {
  static {
    this.type = "SaveCartEvent";
  }
};
var RestoreSavedCartEvent = class extends SavedCartEvent {
  static {
    this.type = "RestoreSavedCartEvent";
  }
};
var RestoreSavedCartSuccessEvent = class extends SavedCartEvent {
  static {
    this.type = "RestoreSavedCartSuccessEvent";
  }
};
var RestoreSavedCartFailEvent = class extends SavedCartEvent {
  static {
    this.type = "RestoreSavedCartFailEvent";
  }
};
var EditSavedCartEvent = class extends SavedCartEvent {
  static {
    this.type = "EditSavedCartEvent";
  }
};
var EditSavedCartSuccessEvent = class extends SavedCartEvent {
  static {
    this.type = "EditSavedCartSuccessEvent";
  }
};
var EditSavedCartFailEvent = class extends SavedCartEvent {
  static {
    this.type = "EditSavedCartFailEvent";
  }
};
var CloneSavedCartEvent = class extends SavedCartEvent {
  static {
    this.type = "CloneSavedCartEvent";
  }
};
var CloneSavedCartSuccessEvent = class extends SavedCartEvent {
  static {
    this.type = "CloneSavedCartSuccessEvent";
  }
};
var CloneSavedCartFailEvent = class extends SavedCartEvent {
  static {
    this.type = "CloneSavedCartFailEvent";
  }
};
var CART_SAVED_CART_FEATURE = "cartSavedCart";
var CART_SAVED_CART_CORE_FEATURE = "cartSavedCartCore";
var SavedCartFacade = class _SavedCartFacade {
  static {
    this.ɵfac = function SavedCartFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SavedCartFacade,
      factory: () => (() => facadeFactory({
        facade: _SavedCartFacade,
        feature: CART_SAVED_CART_CORE_FEATURE,
        methods: ["editSavedCart", "deleteSavedCart", "getSavedCart", "getSavedCartList", "loadSavedCart", "clearCloneSavedCart", "clearRestoreSavedCart", "clearSaveCart", "clearSavedCarts", "get", "getList", "getCloneSavedCartProcessError", "getCloneSavedCartProcessLoading", "getCloneSavedCartProcessSuccess", "getRestoreSavedCartProcessError", "getRestoreSavedCartProcessLoading", "getRestoreSavedCartProcessSuccess", "getSaveCartProcessError", "getSaveCartProcessLoading", "getSaveCartProcessSuccess", "getSavedCartListProcess", "getSavedCartListProcessLoading", "isStable", "cloneSavedCart", "loadSavedCarts", "restoreSavedCart", "saveCart"],
        async: true
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: SavedCartFacade,
        feature: CART_SAVED_CART_CORE_FEATURE,
        methods: ["editSavedCart", "deleteSavedCart", "getSavedCart", "getSavedCartList", "loadSavedCart", "clearCloneSavedCart", "clearRestoreSavedCart", "clearSaveCart", "clearSavedCarts", "get", "getList", "getCloneSavedCartProcessError", "getCloneSavedCartProcessLoading", "getCloneSavedCartProcessSuccess", "getRestoreSavedCartProcessError", "getRestoreSavedCartProcessLoading", "getRestoreSavedCartProcessSuccess", "getSaveCartProcessError", "getSaveCartProcessLoading", "getSaveCartProcessSuccess", "getSavedCartListProcess", "getSavedCartListProcessLoading", "isStable", "cloneSavedCart", "loadSavedCarts", "restoreSavedCart", "saveCart"],
        async: true
      })
    }]
  }], null, null);
})();
LAUNCH_CALLER["SAVED_CART"] = "SAVED_CART";
var SavedCartFormType;
(function(SavedCartFormType2) {
  SavedCartFormType2["EDIT"] = "edit";
  SavedCartFormType2["DELETE"] = "delete";
  SavedCartFormType2["SAVE"] = "save";
  SavedCartFormType2["RESTORE"] = "restore";
})(SavedCartFormType || (SavedCartFormType = {}));
var SavedCartOrderEntriesContextToken = new InjectionToken("SavedCartOrderEntriesContext");
var NewSavedCartOrderEntriesContextToken = new InjectionToken("NewSavedCartOrderEntriesContext");
function defaultCartSavedCartComponentsConfig() {
  const config = {
    featureModules: {
      [CART_SAVED_CART_FEATURE]: {
        cmsComponents: ["AddToSavedCartsComponent", "AccountSavedCartHistoryComponent", "SavedCartDetailsOverviewComponent", "SavedCartDetailsItemsComponent", "SavedCartDetailsActionComponent"],
        dependencies: [CART_BASE_FEATURE]
      },
      // by default core is bundled together with components
      [CART_SAVED_CART_CORE_FEATURE]: CART_SAVED_CART_FEATURE
    }
  };
  return config;
}
var SavedCartRootModule = class _SavedCartRootModule {
  static {
    this.ɵfac = function SavedCartRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SavedCartRootModule,
      imports: [RouterModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultCartSavedCartComponentsConfig), provideDefaultConfig({
        routing: {
          routes: {
            savedCarts: {
              paths: ["my-account/saved-carts"]
            },
            savedCartsDetails: {
              paths: ["my-account/saved-cart/:savedCartId"],
              paramsMapping: {
                savedCartId: "savedCartId"
              }
            }
          }
        }
      })],
      imports: [RouterModule.forChild([{
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "savedCartsDetails",
          cxContext: {
            [ORDER_ENTRIES_CONTEXT]: SavedCartOrderEntriesContextToken
          }
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "savedCarts",
          cxContext: {
            [ORDER_ENTRIES_CONTEXT]: NewSavedCartOrderEntriesContextToken
          }
        }
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartRootModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild([{
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "savedCartsDetails",
          cxContext: {
            [ORDER_ENTRIES_CONTEXT]: SavedCartOrderEntriesContextToken
          }
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "savedCarts",
          cxContext: {
            [ORDER_ENTRIES_CONTEXT]: NewSavedCartOrderEntriesContextToken
          }
        }
      }])],
      providers: [provideDefaultConfigFactory(defaultCartSavedCartComponentsConfig), provideDefaultConfig({
        routing: {
          routes: {
            savedCarts: {
              paths: ["my-account/saved-carts"]
            },
            savedCartsDetails: {
              paths: ["my-account/saved-cart/:savedCartId"],
              paramsMapping: {
                savedCartId: "savedCartId"
              }
            }
          }
        }
      })]
    }]
  }], null, null);
})();

export {
  SavedCartEvent,
  SaveCartEvent,
  SaveCartSuccessEvent,
  SaveCartFailEvent,
  RestoreSavedCartEvent,
  RestoreSavedCartSuccessEvent,
  RestoreSavedCartFailEvent,
  EditSavedCartEvent,
  EditSavedCartSuccessEvent,
  EditSavedCartFailEvent,
  CloneSavedCartEvent,
  CloneSavedCartSuccessEvent,
  CloneSavedCartFailEvent,
  CART_SAVED_CART_FEATURE,
  CART_SAVED_CART_CORE_FEATURE,
  SavedCartFacade,
  SavedCartFormType,
  SavedCartOrderEntriesContextToken,
  NewSavedCartOrderEntriesContextToken,
  defaultCartSavedCartComponentsConfig,
  SavedCartRootModule
};
//# sourceMappingURL=chunk-OOT34BER.js.map
