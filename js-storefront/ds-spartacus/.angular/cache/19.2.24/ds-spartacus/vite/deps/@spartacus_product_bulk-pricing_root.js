import {
  provideDefaultConfigFactory
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import "./chunk-EBCNDD52.js";
import "./chunk-6KXUHIAW.js";
import "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import "./chunk-2A6OHZCE.js";
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

// node_modules/@spartacus/product/fesm2022/spartacus-product-bulk-pricing-root.mjs
var PRODUCT_BULK_PRICING_FEATURE = "productBulkPricing";
function defaultProductBulkPricingComponentsConfig() {
  const config = {
    featureModules: {
      [PRODUCT_BULK_PRICING_FEATURE]: {
        cmsComponents: ["BulkPricingTableComponent"]
      }
    }
  };
  return config;
}
var BulkPricingRootModule = class _BulkPricingRootModule {
  static {
    this.ɵfac = function BulkPricingRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BulkPricingRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BulkPricingRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultProductBulkPricingComponentsConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BulkPricingRootModule, [{
    type: NgModule,
    args: [{
      imports: [],
      providers: [provideDefaultConfigFactory(defaultProductBulkPricingComponentsConfig)]
    }]
  }], null, null);
})();
export {
  BulkPricingRootModule,
  PRODUCT_BULK_PRICING_FEATURE,
  defaultProductBulkPricingComponentsConfig
};
//# sourceMappingURL=@spartacus_product_bulk-pricing_root.js.map
