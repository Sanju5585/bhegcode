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

// node_modules/@spartacus/qualtrics/fesm2022/spartacus-qualtrics-root.mjs
var QUALTRICS_FEATURE = "qualtrics";
function defaultQualtricsComponentsConfig() {
  const config = {
    featureModules: {
      [QUALTRICS_FEATURE]: {
        cmsComponents: ["QualtricsComponent"]
      }
    }
  };
  return config;
}
var QualtricsRootModule = class _QualtricsRootModule {
  static {
    this.ɵfac = function QualtricsRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QualtricsRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _QualtricsRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultQualtricsComponentsConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QualtricsRootModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfigFactory(defaultQualtricsComponentsConfig)]
    }]
  }], null, null);
})();
export {
  QUALTRICS_FEATURE,
  QualtricsRootModule,
  defaultQualtricsComponentsConfig
};
//# sourceMappingURL=@spartacus_qualtrics_root.js.map
