import {
  LAUNCH_CALLER
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  provideDefaultConfigFactory
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import "./chunk-EBCNDD52.js";
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

// node_modules/@spartacus/product/fesm2022/spartacus-product-image-zoom-root.mjs
var PRODUCT_IMAGE_ZOOM_FEATURE = "productImageZoom";
LAUNCH_CALLER["PRODUCT_IMAGE_ZOOM"] = "PRODUCT_IMAGE_ZOOM";
function defaultImageZoomComponentsConfig() {
  const config = {
    featureModules: {
      [PRODUCT_IMAGE_ZOOM_FEATURE]: {
        cmsComponents: ["ProductImagesComponent"]
      }
    }
  };
  return config;
}
var ProductImageZoomRootModule = class _ProductImageZoomRootModule {
  static {
    this.ɵfac = function ProductImageZoomRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductImageZoomRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductImageZoomRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultImageZoomComponentsConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductImageZoomRootModule, [{
    type: NgModule,
    args: [{
      imports: [],
      providers: [provideDefaultConfigFactory(defaultImageZoomComponentsConfig)]
    }]
  }], null, null);
})();
export {
  PRODUCT_IMAGE_ZOOM_FEATURE,
  ProductImageZoomRootModule,
  defaultImageZoomComponentsConfig
};
//# sourceMappingURL=@spartacus_product_image-zoom_root.js.map
