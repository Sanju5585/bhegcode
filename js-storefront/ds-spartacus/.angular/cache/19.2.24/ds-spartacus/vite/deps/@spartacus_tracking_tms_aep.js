import {
  ScriptLoader,
  provideDefaultConfig
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
import {
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/tracking/fesm2022/spartacus-tracking-tms-aep.mjs
var AepCollectorService = class _AepCollectorService {
  constructor(scriptLoader) {
    this.scriptLoader = scriptLoader;
  }
  /**
   * If the `TmsCollectorConfig.dataLayerProperty` is not specified, it uses the default `digitalData`
   */
  init(config, windowObject) {
    const dataLayerProperty = config.dataLayerProperty ?? "digitalData";
    windowObject[dataLayerProperty] = windowObject[dataLayerProperty] ?? {};
    if (config.scriptUrl) {
      this.scriptLoader.embedScript({
        src: config.scriptUrl
      });
    }
  }
  pushEvent(config, windowObject, event) {
    const dataLayerProperty = config.dataLayerProperty ?? "digitalData";
    windowObject[dataLayerProperty] = __spreadValues(__spreadValues({}, windowObject[dataLayerProperty]), event);
  }
  static {
    this.ɵfac = function AepCollectorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AepCollectorService)(ɵɵinject(ScriptLoader));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AepCollectorService,
      factory: _AepCollectorService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AepCollectorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ScriptLoader
  }], null);
})();
var defaultAdobeExperiencePlatformConfig = {
  tagManager: {
    aep: {
      collector: AepCollectorService
    }
  }
};
var AepModule = class _AepModule {
  static {
    this.ɵfac = function AepModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AepModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AepModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultAdobeExperiencePlatformConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AepModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig(defaultAdobeExperiencePlatformConfig)]
    }]
  }], null, null);
})();
export {
  AepCollectorService,
  AepModule
};
//# sourceMappingURL=@spartacus_tracking_tms_aep.js.map
