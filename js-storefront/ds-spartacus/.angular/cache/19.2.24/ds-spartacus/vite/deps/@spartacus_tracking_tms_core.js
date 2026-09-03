import {
  Config,
  EventService,
  LoggerService,
  WindowRef
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
  APP_INITIALIZER,
  Injectable,
  Injector,
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
  merge
} from "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import "./chunk-R6FETK65.js";
import {
  Subscription
} from "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/tracking/fesm2022/spartacus-tracking-tms-core.mjs
var TmsConfig = class _TmsConfig {
  static {
    this.ɵfac = function TmsConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TmsConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TmsConfig,
      factory: function TmsConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _TmsConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TmsConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var TmsService = class _TmsService {
  constructor(eventsService, windowRef, tmsConfig, injector) {
    this.eventsService = eventsService;
    this.windowRef = windowRef;
    this.tmsConfig = tmsConfig;
    this.injector = injector;
    this.subscription = new Subscription();
    this.logger = inject(LoggerService);
  }
  /**
   * Called only once to start collecting and dispatching events
   */
  collect() {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    for (const tmsCollectorConfig in this.tmsConfig.tagManager) {
      if (!this.tmsConfig.tagManager?.hasOwnProperty(tmsCollectorConfig)) {
        continue;
      }
      const collectorConfig = this.tmsConfig.tagManager[tmsCollectorConfig] ?? {};
      if (!collectorConfig.collector) {
        if (isDevMode()) {
          this.logger.warn(`Skipping the '${tmsCollectorConfig}', as the collector is not defined.`);
        }
        continue;
      }
      const events = collectorConfig.events?.map((event) => this.eventsService.get(event)) || [];
      const collector = this.injector.get(collectorConfig.collector);
      collector.init(collectorConfig, this.windowRef.nativeWindow);
      this.subscription.add(this.mapEvents(events).subscribe((event) => {
        if (collectorConfig.debug) {
          this.logger.log(`🎤 Pushing the following event to ${tmsCollectorConfig}: `, event);
        }
        event = collector.map?.(event) ?? event;
        collector.pushEvent(
          collectorConfig,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          this.windowRef.nativeWindow,
          event
        );
      }));
    }
  }
  /**
   * Maps the given events to an appropriate type that fits the specified TMS' structure.
   *
   * @param events - the events to map
   * @param collector - a name of the collector for which the events should be mapped
   */
  mapEvents(events) {
    return merge(...events);
  }
  /**
   * Angular's callback
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function TmsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TmsService)(ɵɵinject(EventService), ɵɵinject(WindowRef), ɵɵinject(TmsConfig), ɵɵinject(Injector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TmsService,
      factory: _TmsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TmsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }, {
    type: WindowRef
  }, {
    type: TmsConfig
  }, {
    type: Injector
  }], null);
})();
function tmsFactory(service) {
  const result = () => service.collect();
  return result;
}
var BaseTmsModule = class _BaseTmsModule {
  static forRoot() {
    return {
      ngModule: _BaseTmsModule,
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: tmsFactory,
        deps: [TmsService],
        multi: true
      }]
    };
  }
  static {
    this.ɵfac = function BaseTmsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseTmsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BaseTmsModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseTmsModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
export {
  BaseTmsModule,
  TmsConfig,
  TmsService,
  tmsFactory
};
//# sourceMappingURL=@spartacus_tracking_tms_core.js.map
