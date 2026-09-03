import {
  ORDER_FEATURE
} from "./chunk-UIW5AQFA.js";
import {
  ORDER_ENTRIES_CONTEXT
} from "./chunk-KEAKWHYV.js";
import {
  CmsPageGuard,
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

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-unit-order-root.mjs
var ORGANIZATION_UNIT_ORDER_FEATURE = "organizationUnitOrder";
function unitOrderFacadeFactory() {
  return facadeFactory({
    facade: UnitOrderFacade,
    feature: ORGANIZATION_UNIT_ORDER_FEATURE,
    methods: ["getOrderHistoryList", "getOrderHistoryListLoaded", "loadOrderList", "clearOrderList", "getOrderDetails", "loadOrderDetails", "clearOrderDetails"],
    async: true
  });
}
var UnitOrderFacade = class _UnitOrderFacade {
  static {
    this.ɵfac = function UnitOrderFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitOrderFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitOrderFacade,
      factory: () => unitOrderFacadeFactory(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitOrderFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: unitOrderFacadeFactory
    }]
  }], null, null);
})();
var UnitOrderDetailsOrderEntriesContextToken = new InjectionToken("OrderDetailsOrderEntriesContext");
function defaultOrganizationUnitOrderComponentsConfig() {
  const config = {
    featureModules: {
      [ORGANIZATION_UNIT_ORDER_FEATURE]: {
        cmsComponents: ["UnitLevelOrderHistoryComponent", "UnitLevelOrderDetailsOverviewComponent", "UnitLevelOrderDetailsItemsComponent", "UnitLevelOrderDetailsTotalsComponent"],
        dependencies: [ORDER_FEATURE]
      }
    }
  };
  return config;
}
var UnitOrderRootModule = class _UnitOrderRootModule {
  static {
    this.ɵfac = function UnitOrderRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitOrderRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitOrderRootModule,
      imports: [RouterModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultOrganizationUnitOrderComponentsConfig), provideDefaultConfig({
        routing: {
          routes: {
            unitLevelOrders: {
              paths: ["my-account/unitLevelOrders"]
            },
            unitLevelOrderDetail: {
              paths: ["my-account/unitLevelOrderDetails/:orderCode"],
              paramsMapping: {
                orderCode: "code"
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
          cxRoute: "unitLevelOrders"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "unitLevelOrderDetail",
          cxContext: {
            [ORDER_ENTRIES_CONTEXT]: UnitOrderDetailsOrderEntriesContextToken
          }
        }
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitOrderRootModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild([{
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "unitLevelOrders"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "unitLevelOrderDetail",
          cxContext: {
            [ORDER_ENTRIES_CONTEXT]: UnitOrderDetailsOrderEntriesContextToken
          }
        }
      }])],
      providers: [provideDefaultConfigFactory(defaultOrganizationUnitOrderComponentsConfig), provideDefaultConfig({
        routing: {
          routes: {
            unitLevelOrders: {
              paths: ["my-account/unitLevelOrders"]
            },
            unitLevelOrderDetail: {
              paths: ["my-account/unitLevelOrderDetails/:orderCode"],
              paramsMapping: {
                orderCode: "code"
              }
            }
          }
        }
      })]
    }]
  }], null, null);
})();

export {
  ORGANIZATION_UNIT_ORDER_FEATURE,
  unitOrderFacadeFactory,
  UnitOrderFacade,
  UnitOrderDetailsOrderEntriesContextToken,
  defaultOrganizationUnitOrderComponentsConfig,
  UnitOrderRootModule
};
//# sourceMappingURL=chunk-MZAKXM6H.js.map
