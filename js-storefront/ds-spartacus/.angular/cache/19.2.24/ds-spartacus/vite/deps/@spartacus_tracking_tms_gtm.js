import {
  WindowRef,
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
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/tracking/fesm2022/spartacus-tracking-tms-gtm.mjs
var GtmCollectorService = class _GtmCollectorService {
  constructor(winRef) {
    this.winRef = winRef;
  }
  /**
   * If the `TmsCollectorConfig.dataLayerProperty` is not specified, it uses the default `dataLayer`
   */
  init(config, windowObject) {
    const dataLayerProperty = config.dataLayerProperty ?? "dataLayer";
    windowObject[dataLayerProperty] = windowObject[dataLayerProperty] ?? [];
    if (config.gtmId) {
      (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
          "gtm.start": (/* @__PURE__ */ new Date()).getTime(),
          event: "gtm.js"
        });
        const f = d.getElementsByTagName(s)[0];
        const j = d.createElement(s);
        const dl = l !== "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode?.insertBefore(j, f);
      })(windowObject, this.winRef.document, "script", dataLayerProperty, config.gtmId);
    }
  }
  pushEvent(config, windowObject, event) {
    const dataLayerProperty = config.dataLayerProperty ?? "dataLayer";
    windowObject[dataLayerProperty].push(event);
  }
  static {
    this.ɵfac = function GtmCollectorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GtmCollectorService)(ɵɵinject(WindowRef));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GtmCollectorService,
      factory: _GtmCollectorService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GtmCollectorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: WindowRef
  }], null);
})();
var defaultGoogleTagManagerConfig = {
  tagManager: {
    gtm: {
      collector: GtmCollectorService
    }
  }
};
var GtmModule = class _GtmModule {
  static {
    this.ɵfac = function GtmModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GtmModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _GtmModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultGoogleTagManagerConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GtmModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig(defaultGoogleTagManagerConfig)]
    }]
  }], null, null);
})();
export {
  GtmCollectorService,
  GtmModule
};
//# sourceMappingURL=@spartacus_tracking_tms_gtm.js.map
