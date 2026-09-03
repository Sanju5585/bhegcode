import {
  Config,
  VariantQualifier,
  provideDefaultConfig,
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
  Injectable,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import "./chunk-R6FETK65.js";
import "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/product-multi-dimensional/fesm2022/spartacus-product-multi-dimensional-selector-root.mjs
var PRODUCT_MULTI_DIMENSIONAL_SELECTOR_FEATURE = "productMultiDimensionalSelector";
var defaultProductMultiDimensionalConfig = {
  multiDimensional: {
    imageFormat: VariantQualifier.STYLE_SWATCH
  }
};
function defaultProductMultiDimensionalSelectorComponentsConfig() {
  return {
    featureModules: {
      [PRODUCT_MULTI_DIMENSIONAL_SELECTOR_FEATURE]: {
        cmsComponents: ["ProductMultiDimensionalSelectorComponent"]
      }
    }
  };
}
var ProductMultiDimensionalSelectorRootModule = class _ProductMultiDimensionalSelectorRootModule {
  static {
    this.ɵfac = function ProductMultiDimensionalSelectorRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductMultiDimensionalSelectorRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductMultiDimensionalSelectorRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultProductMultiDimensionalConfig), provideDefaultConfigFactory(defaultProductMultiDimensionalSelectorComponentsConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductMultiDimensionalSelectorRootModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig(defaultProductMultiDimensionalConfig), provideDefaultConfigFactory(defaultProductMultiDimensionalSelectorComponentsConfig)]
    }]
  }], null, null);
})();
var ProductMultiDimensionalConfig = class _ProductMultiDimensionalConfig {
  static {
    this.ɵfac = function ProductMultiDimensionalConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductMultiDimensionalConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductMultiDimensionalConfig,
      factory: function ProductMultiDimensionalConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _ProductMultiDimensionalConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductMultiDimensionalConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
export {
  PRODUCT_MULTI_DIMENSIONAL_SELECTOR_FEATURE,
  ProductMultiDimensionalConfig,
  ProductMultiDimensionalSelectorRootModule,
  defaultProductMultiDimensionalConfig,
  defaultProductMultiDimensionalSelectorComponentsConfig
};
//# sourceMappingURL=@spartacus_product-multi-dimensional_selector_root.js.map
