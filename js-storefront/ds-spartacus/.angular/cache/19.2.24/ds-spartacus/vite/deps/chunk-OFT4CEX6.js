import {
  PersonalizationConfig
} from "./chunk-XCJWBKP7.js";
import {
  CmsService,
  LoggerService
} from "./chunk-VIVIQI6G.js";
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
  EMPTY,
  filter,
  map
} from "./chunk-R6FETK65.js";

// node_modules/@spartacus/tracking/fesm2022/spartacus-tracking-personalization-core.mjs
var PersonalizationCoreModule = class _PersonalizationCoreModule {
  static {
    this.ɵfac = function PersonalizationCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PersonalizationCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PersonalizationCoreModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonalizationCoreModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var PersonalizationContextService = class _PersonalizationContextService {
  constructor(config, cmsService) {
    this.config = config;
    this.cmsService = cmsService;
    this.logger = inject(LoggerService);
  }
  getPersonalizationContext() {
    if (!this.config.personalization?.context) {
      if (isDevMode()) {
        this.logger.warn(`There is no context configured in Personalization.`);
      }
      return EMPTY;
    } else {
      const context = this.config.personalization.context;
      return this.cmsService.getCurrentPage().pipe(filter(Boolean), map((page) => page.slots?.[context.slotPosition]), filter(Boolean), map((slot) => {
        const scriptComponent = slot.components?.find((i) => i.uid === context.componentId);
        return this.buildPersonalizationContext(scriptComponent?.properties?.script?.data);
      }));
    }
  }
  buildPersonalizationContext(data) {
    if (data) {
      const context = JSON.parse(atob(data));
      context.actions.forEach((action) => {
        Object.keys(action).forEach((key) => {
          action[key] = atob(action[key]);
        });
      });
      for (let i = 0; i < context.segments.length; i++) {
        context.segments[i] = atob(context.segments[i]);
      }
      return context;
    }
  }
  static {
    this.ɵfac = function PersonalizationContextService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PersonalizationContextService)(ɵɵinject(PersonalizationConfig), ɵɵinject(CmsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PersonalizationContextService,
      factory: _PersonalizationContextService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonalizationContextService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: PersonalizationConfig
  }, {
    type: CmsService
  }], null);
})();

export {
  PersonalizationCoreModule,
  PersonalizationContextService
};
//# sourceMappingURL=chunk-OFT4CEX6.js.map
