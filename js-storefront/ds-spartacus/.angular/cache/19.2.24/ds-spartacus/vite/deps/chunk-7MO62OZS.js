import {
  Config,
  FeatureModulesService,
  RoutingService,
  ScriptLoader,
  provideDefaultConfig
} from "./chunk-VIVIQI6G.js";
import {
  HTTP_INTERCEPTORS
} from "./chunk-2A6OHZCE.js";
import {
  Location
} from "./chunk-S7KROBXW.js";
import {
  APP_INITIALIZER,
  Injectable,
  NgModule,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import {
  take
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";

// node_modules/@spartacus/smartedit/fesm2022/spartacus-smartedit-root.mjs
var SmartEditConfig = class _SmartEditConfig {
  static {
    this.ɵfac = function SmartEditConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartEditConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SmartEditConfig,
      factory: function SmartEditConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _SmartEditConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEditConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var SMART_EDIT_FEATURE = "smartEdit";
var SmartEditLauncherService = class _SmartEditLauncherService {
  get cmsTicketId() {
    return this._cmsTicketId;
  }
  constructor(config, location, scriptLoader) {
    this.config = config;
    this.location = location;
    this.scriptLoader = scriptLoader;
    this.featureModulesService = inject(FeatureModulesService);
  }
  /**
   * load webApplicationInjector.js first when Spartacus launched inside SmartEdit
   */
  load() {
    if (this.isLaunchedInSmartEdit()) {
      this.featureModulesService.resolveFeature(SMART_EDIT_FEATURE).subscribe();
      this.scriptLoader?.embedScript({
        src: "assets/webApplicationInjector.js",
        params: void 0,
        attributes: {
          id: "text/smartedit-injector",
          "data-smartedit-allow-origin": this.config.smartEdit?.allowOrigin
        }
      });
    }
  }
  /**
   * Indicates whether Spartacus is launched in SmartEdit
   */
  isLaunchedInSmartEdit() {
    const path = this.location.path().split("?")[0];
    const params = this.location.path().split("?")[1];
    const cmsToken = params?.split("&").find((param) => param.startsWith("cmsTicketId="));
    this._cmsTicketId = cmsToken?.split("=")[1];
    return path.split("/").pop() === this.config.smartEdit?.storefrontPreviewRoute && !!this._cmsTicketId;
  }
  static {
    this.ɵfac = function SmartEditLauncherService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartEditLauncherService)(ɵɵinject(SmartEditConfig), ɵɵinject(Location), ɵɵinject(ScriptLoader));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SmartEditLauncherService,
      factory: _SmartEditLauncherService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEditLauncherService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: SmartEditConfig
  }, {
    type: Location
  }, {
    type: ScriptLoader
  }], null);
})();
var defaultSmartEditConfig = {
  smartEdit: {
    storefrontPreviewRoute: "cx-preview",
    allowOrigin: "localhost:9002"
  }
};
var CmsTicketInterceptor = class _CmsTicketInterceptor {
  constructor(service) {
    this.service = service;
    this.routingService = inject(RoutingService);
  }
  intercept(request, next) {
    const cmsTicketId = this.service.cmsTicketId;
    if (!cmsTicketId) {
      return next.handle(request);
    }
    if (request.url.includes("/productList")) {
      return this.setRequestForProductListPage(request, next, cmsTicketId);
    }
    if (request.url.includes("/cms/") || request.url.includes("/products/")) {
      request = request.clone({
        setParams: {
          cmsTicketId
        }
      });
    }
    return next.handle(request);
  }
  setRequestForProductListPage(request, next, cmsTicketId) {
    return this.routingService.getPageContext().pipe(take(1), switchMap((pageContext) => {
      request = request.clone(!!pageContext.id ? {
        setParams: {
          cmsTicketId,
          categoryCode: pageContext.id
        }
      } : {
        setParams: {
          cmsTicketId
        }
      });
      return next.handle(request);
    }));
  }
  static {
    this.ɵfac = function CmsTicketInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CmsTicketInterceptor)(ɵɵinject(SmartEditLauncherService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CmsTicketInterceptor,
      factory: _CmsTicketInterceptor.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CmsTicketInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: SmartEditLauncherService
  }], null);
})();
var interceptors = [{
  provide: HTTP_INTERCEPTORS,
  useExisting: CmsTicketInterceptor,
  multi: true
}];
function smartEditFactory(smartEditLauncherService) {
  const isReady = () => {
    smartEditLauncherService.load();
  };
  return isReady;
}
var SmartEditRootModule = class _SmartEditRootModule {
  static {
    this.ɵfac = function SmartEditRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartEditRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SmartEditRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [...interceptors, provideDefaultConfig(defaultSmartEditConfig), {
        provide: APP_INITIALIZER,
        useFactory: smartEditFactory,
        deps: [SmartEditLauncherService],
        multi: true
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEditRootModule, [{
    type: NgModule,
    args: [{
      providers: [...interceptors, provideDefaultConfig(defaultSmartEditConfig), {
        provide: APP_INITIALIZER,
        useFactory: smartEditFactory,
        deps: [SmartEditLauncherService],
        multi: true
      }]
    }]
  }], null, null);
})();

export {
  SmartEditConfig,
  SMART_EDIT_FEATURE,
  SmartEditLauncherService,
  CmsTicketInterceptor,
  smartEditFactory,
  SmartEditRootModule
};
//# sourceMappingURL=chunk-7MO62OZS.js.map
