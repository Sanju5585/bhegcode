import {
  Config,
  LoggerService,
  OccEndpointsService,
  WindowRef,
  provideDefaultConfig,
  provideDefaultConfigFactory
} from "./chunk-VIVIQI6G.js";
import {
  HTTP_INTERCEPTORS,
  HttpResponse
} from "./chunk-2A6OHZCE.js";
import {
  Injectable,
  NgModule,
  inject,
  isDevMode,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import {
  tap
} from "./chunk-R6FETK65.js";

// node_modules/@spartacus/tracking/fesm2022/spartacus-tracking-personalization-root.mjs
var PersonalizationConfig = class _PersonalizationConfig {
  static {
    this.ɵfac = function PersonalizationConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PersonalizationConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PersonalizationConfig,
      factory: function PersonalizationConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _PersonalizationConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonalizationConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var PERSONALIZATION_FEATURE = "personalization";
var defaultPersonalizationConfig = {
  personalization: {
    enabled: false,
    httpHeaderName: {
      id: "Occ-Personalization-Id",
      timestamp: "Occ-Personalization-Time"
    },
    context: {
      slotPosition: "PlaceholderContentSlot",
      componentId: "PersonalizationScriptComponent"
    }
  }
};
var OccPersonalizationIdInterceptor = class _OccPersonalizationIdInterceptor {
  constructor(config, occEndpoints, winRef) {
    this.config = config;
    this.occEndpoints = occEndpoints;
    this.winRef = winRef;
    this.enabled = false;
    this.PERSONALIZATION_ID_KEY = "personalization-id";
    this.logger = inject(LoggerService);
    if (this.winRef.isBrowser()) {
      this.enabled = this.winRef.localStorage && this.config.personalization?.enabled || false;
      if (this.enabled) {
        if (!this.config.personalization?.httpHeaderName && isDevMode()) {
          this.logger.warn(`There is no httpHeaderName configured in Personalization`);
        }
        this.requestHeader = this.config.personalization?.httpHeaderName?.id.toLowerCase();
        this.personalizationId = this.winRef.localStorage?.getItem(this.PERSONALIZATION_ID_KEY);
      } else if (this.winRef.localStorage?.getItem(this.PERSONALIZATION_ID_KEY)) {
        this.winRef.localStorage.removeItem(this.PERSONALIZATION_ID_KEY);
      }
    }
  }
  intercept(request, next) {
    if (!this.enabled) {
      return next.handle(request);
    }
    if (this.requestHeader && this.personalizationId && request.url.includes(this.occEndpoints.getBaseUrl())) {
      request = request.clone({
        setHeaders: {
          [this.requestHeader]: this.personalizationId
        }
      });
    }
    return next.handle(request).pipe(tap((event) => {
      if (event instanceof HttpResponse && this.requestHeader && event.headers.keys().includes(this.requestHeader)) {
        const receivedId = event.headers.get(this.requestHeader);
        if (this.personalizationId !== receivedId) {
          this.personalizationId = receivedId;
          if (this.personalizationId) {
            this.winRef.localStorage?.setItem(this.PERSONALIZATION_ID_KEY, this.personalizationId);
          }
        }
      }
    }));
  }
  static {
    this.ɵfac = function OccPersonalizationIdInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccPersonalizationIdInterceptor)(ɵɵinject(PersonalizationConfig), ɵɵinject(OccEndpointsService), ɵɵinject(WindowRef));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccPersonalizationIdInterceptor,
      factory: _OccPersonalizationIdInterceptor.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccPersonalizationIdInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: PersonalizationConfig
  }, {
    type: OccEndpointsService
  }, {
    type: WindowRef
  }], null);
})();
var OccPersonalizationTimeInterceptor = class _OccPersonalizationTimeInterceptor {
  constructor(config, occEndpoints, winRef) {
    this.config = config;
    this.occEndpoints = occEndpoints;
    this.winRef = winRef;
    this.enabled = false;
    this.PERSONALIZATION_TIME_KEY = "personalization-time";
    this.logger = inject(LoggerService);
    if (this.winRef.isBrowser()) {
      this.enabled = this.winRef.localStorage && this.config.personalization?.enabled || false;
      if (this.enabled) {
        if (!this.config.personalization?.httpHeaderName && isDevMode()) {
          this.logger.warn(`There is no httpHeaderName configured in Personalization`);
        }
        this.requestHeader = this.config.personalization?.httpHeaderName?.timestamp.toLowerCase();
        this.timestamp = this.winRef.localStorage?.getItem(this.PERSONALIZATION_TIME_KEY);
      } else if (this.winRef.localStorage?.getItem(this.PERSONALIZATION_TIME_KEY)) {
        this.winRef.localStorage.removeItem(this.PERSONALIZATION_TIME_KEY);
      }
    }
  }
  intercept(request, next) {
    if (!this.enabled) {
      return next.handle(request);
    }
    if (this.requestHeader && this.timestamp && request.url.includes(this.occEndpoints.getBaseUrl())) {
      request = request.clone({
        setHeaders: {
          [this.requestHeader]: this.timestamp
        }
      });
    }
    return next.handle(request).pipe(tap((event) => {
      if (event instanceof HttpResponse && this.requestHeader && event.headers.keys().includes(this.requestHeader)) {
        const receivedTimestamp = event.headers.get(this.requestHeader);
        if (this.timestamp !== receivedTimestamp) {
          this.timestamp = receivedTimestamp;
          if (this.timestamp) {
            this.winRef.localStorage?.setItem(this.PERSONALIZATION_TIME_KEY, this.timestamp);
          }
        }
      }
    }));
  }
  static {
    this.ɵfac = function OccPersonalizationTimeInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccPersonalizationTimeInterceptor)(ɵɵinject(PersonalizationConfig), ɵɵinject(OccEndpointsService), ɵɵinject(WindowRef));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccPersonalizationTimeInterceptor,
      factory: _OccPersonalizationTimeInterceptor.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccPersonalizationTimeInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: PersonalizationConfig
  }, {
    type: OccEndpointsService
  }, {
    type: WindowRef
  }], null);
})();
var interceptors = [{
  provide: HTTP_INTERCEPTORS,
  useExisting: OccPersonalizationIdInterceptor,
  multi: true
}, {
  provide: HTTP_INTERCEPTORS,
  useExisting: OccPersonalizationTimeInterceptor,
  multi: true
}];
function defaultPersonalizationComponentsConfig() {
  const config = {
    featureModules: {
      [PERSONALIZATION_FEATURE]: {
        cmsComponents: ["PersonalizationScriptComponent"]
      }
    }
  };
  return config;
}
var PersonalizationRootModule = class _PersonalizationRootModule {
  static {
    this.ɵfac = function PersonalizationRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PersonalizationRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PersonalizationRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [...interceptors, provideDefaultConfig(defaultPersonalizationConfig), provideDefaultConfigFactory(defaultPersonalizationComponentsConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonalizationRootModule, [{
    type: NgModule,
    args: [{
      providers: [...interceptors, provideDefaultConfig(defaultPersonalizationConfig), provideDefaultConfigFactory(defaultPersonalizationComponentsConfig)]
    }]
  }], null, null);
})();

export {
  PersonalizationConfig,
  PERSONALIZATION_FEATURE,
  OccPersonalizationIdInterceptor,
  OccPersonalizationTimeInterceptor,
  defaultPersonalizationComponentsConfig,
  PersonalizationRootModule
};
//# sourceMappingURL=chunk-XCJWBKP7.js.map
