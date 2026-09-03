import {
  ORDER_FEATURE
} from "./chunk-UIW5AQFA.js";
import "./chunk-KEAKWHYV.js";
import {
  CmsPageGuard,
  PageLayoutComponent
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  AuthGuard,
  provideDefaultConfig,
  provideDefaultConfigFactory
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
  RouterModule
} from "./chunk-EBCNDD52.js";
import "./chunk-YMQEGXEG.js";
import "./chunk-6KXUHIAW.js";
import "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import "./chunk-2A6OHZCE.js";
import "./chunk-YST33EXT.js";
import "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import "./chunk-R6FETK65.js";
import "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-order-approval-root.mjs
var ORGANIZATION_ORDER_APPROVAL_FEATURE = "organizationOrderApproval";
function defaultOrganizationOrderApprovalComponentsConfig() {
  const config = {
    featureModules: {
      [ORGANIZATION_ORDER_APPROVAL_FEATURE]: {
        cmsComponents: ["OrderApprovalListComponent", "OrderApprovalDetailTotalsComponent", "OrderApprovalDetailApprovalDetailsComponent", "OrderApprovalDetailShippingComponent", "OrderApprovalDetailItemsComponent", "OrderApprovalDetailFormComponent", "AccountOrderDetailsApprovalDetailsComponent"],
        dependencies: [ORDER_FEATURE]
      }
    }
  };
  return config;
}
var OrderApprovalRootModule = class _OrderApprovalRootModule {
  static {
    this.ɵfac = function OrderApprovalRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderApprovalRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderApprovalRootModule,
      imports: [RouterModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultOrganizationOrderApprovalComponentsConfig), provideDefaultConfig({
        routing: {
          routes: {
            orderApprovals: {
              paths: ["my-account/approval-dashboard"]
            },
            orderApprovalDetails: {
              paths: ["my-account/approval/:approvalCode"]
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
          cxRoute: "orderApprovalDetails"
        }
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderApprovalRootModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild([{
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderApprovalDetails"
        }
      }])],
      providers: [provideDefaultConfigFactory(defaultOrganizationOrderApprovalComponentsConfig), provideDefaultConfig({
        routing: {
          routes: {
            orderApprovals: {
              paths: ["my-account/approval-dashboard"]
            },
            orderApprovalDetails: {
              paths: ["my-account/approval/:approvalCode"]
            }
          }
        }
      })]
    }]
  }], null, null);
})();
export {
  ORGANIZATION_ORDER_APPROVAL_FEATURE,
  OrderApprovalRootModule,
  defaultOrganizationOrderApprovalComponentsConfig
};
//# sourceMappingURL=@spartacus_organization_order-approval_root.js.map
