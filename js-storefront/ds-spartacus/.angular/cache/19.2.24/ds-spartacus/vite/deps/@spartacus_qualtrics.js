import {
  Config,
  LoggerService,
  ScriptLoader,
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
import {
  CommonModule
} from "./chunk-S7KROBXW.js";
import {
  isPlatformBrowser
} from "./chunk-5AFE3VT7.js";
import {
  Component,
  Inject,
  Injectable,
  NgModule,
  PLATFORM_ID,
  inject,
  isDevMode,
  setClassMetadata,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import {
  fromEvent
} from "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  EMPTY,
  filter,
  map,
  of,
  tap
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/qualtrics/fesm2022/spartacus-qualtrics-components.mjs
var QualtricsEmbeddedFeedbackComponent = class _QualtricsEmbeddedFeedbackComponent {
  static {
    this.ɵfac = function QualtricsEmbeddedFeedbackComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QualtricsEmbeddedFeedbackComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _QualtricsEmbeddedFeedbackComponent,
      selectors: [["cx-qualtrics-embedded-feedback"]],
      standalone: false,
      decls: 0,
      vars: 0,
      template: function QualtricsEmbeddedFeedbackComponent_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QualtricsEmbeddedFeedbackComponent, [{
    type: Component,
    args: [{
      selector: "cx-qualtrics-embedded-feedback",
      template: "",
      standalone: false
    }]
  }], null, null);
})();
var defaultQualtricsConfig = {
  qualtrics: {}
};
var QUALTRICS_EVENT_NAME = "qsi_js_loaded";
var QualtricsLoaderService = class _QualtricsLoaderService {
  get window() {
    return this.winRef.nativeWindow;
  }
  constructor(winRef, platformId, scriptLoader) {
    this.winRef = winRef;
    this.platformId = platformId;
    this.scriptLoader = scriptLoader;
    this.subscription = new Subscription();
    this.logger = inject(LoggerService);
    this.qsiLoaded$ = isPlatformBrowser(this.platformId) && this.window ? fromEvent(this.window, QUALTRICS_EVENT_NAME) : EMPTY;
    this.qsi$ = this.qsiLoaded$.pipe(switchMap(() => this.isDataLoaded()), map((dataLoaded) => dataLoaded ? this.window?.QSI : EMPTY), filter((qsi) => Boolean(qsi)), tap((qsi) => this.qsiApi = qsi));
    this.initialize();
  }
  /**
   * Adds the deployment script to the DOM.
   *
   * The script will not be added twice if it was loaded before. In that case, we use
   * the Qualtrics API directly to _unload_ and _run_ the project.
   */
  addScript(scriptSource) {
    if (this.hasScript(scriptSource)) {
      this.run(true);
    } else {
      this.scriptLoader.embedScript({
        src: scriptSource
      });
    }
  }
  /**
   * Indicates if the script is already added to the DOM.
   */
  hasScript(source) {
    return !!this.winRef.document.querySelector(`script[src="${source}"]`);
  }
  /**
   * Starts observing the Qualtrics integration. The integration is based on a
   * Qualtrics specific event (`qsi_js_loaded`). As soon as this events happens,
   * we run the API.
   */
  initialize() {
    this.subscription.add(this.qsi$.subscribe(() => this.run()));
  }
  /**
   * Evaluates the Qualtrics project code for the application.
   *
   * In order to reload the evaluation in Qualtrics, the API requires to unload the API before
   * running it again. We don't do this by default, but offer a flag to conditionally unload the API.
   */
  run(reload = false) {
    if (!this.qsiApi?.API) {
      if (isDevMode()) {
        this.logger.log("The QSI api is not available");
      }
      return;
    }
    if (reload) {
      this.qsiApi.API.unload();
    }
    this.qsiApi.API.load().done(this.qsiApi.API.run());
  }
  /**
   * This logic exist in order to let the client(s) add their own logic to wait for any kind of page data.
   * You can observe any data in this method.
   *
   * Defaults to true.
   */
  isDataLoaded() {
    return of(true);
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function QualtricsLoaderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QualtricsLoaderService)(ɵɵinject(WindowRef), ɵɵinject(PLATFORM_ID), ɵɵinject(ScriptLoader));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _QualtricsLoaderService,
      factory: _QualtricsLoaderService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QualtricsLoaderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: WindowRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ScriptLoader
  }], null);
})();
var QualtricsConfig = class _QualtricsConfig {
  static {
    this.ɵfac = function QualtricsConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QualtricsConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _QualtricsConfig,
      factory: function QualtricsConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _QualtricsConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QualtricsConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var QualtricsComponent = class _QualtricsComponent {
  constructor(qualtricsLoader, config) {
    this.qualtricsLoader = qualtricsLoader;
    this.config = config;
    this.logger = inject(LoggerService);
    if (this.config.qualtrics?.scriptSource) {
      this.qualtricsLoader.addScript(this.config.qualtrics.scriptSource);
    } else if (isDevMode()) {
      this.logger.warn(`We're unable to add the Qualtrics deployment code as there is no script source defined in config.qualtrics.scriptSource.`);
    }
  }
  static {
    this.ɵfac = function QualtricsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QualtricsComponent)(ɵɵdirectiveInject(QualtricsLoaderService), ɵɵdirectiveInject(QualtricsConfig));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _QualtricsComponent,
      selectors: [["cx-qualtrics"]],
      standalone: false,
      decls: 0,
      vars: 0,
      template: function QualtricsComponent_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QualtricsComponent, [{
    type: Component,
    args: [{
      selector: "cx-qualtrics",
      template: "",
      standalone: false
    }]
  }], () => [{
    type: QualtricsLoaderService
  }, {
    type: QualtricsConfig
  }], null);
})();
var QualtricsComponentsModule = class _QualtricsComponentsModule {
  static {
    this.ɵfac = function QualtricsComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QualtricsComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _QualtricsComponentsModule,
      declarations: [QualtricsComponent, QualtricsEmbeddedFeedbackComponent],
      imports: [CommonModule],
      exports: [QualtricsComponent, QualtricsEmbeddedFeedbackComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          QualtricsEmbeddedFeedbackComponent: {
            component: QualtricsEmbeddedFeedbackComponent
          },
          QualtricsComponent: {
            component: QualtricsComponent
          }
        }
      }), provideDefaultConfig(defaultQualtricsConfig)],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QualtricsComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          QualtricsEmbeddedFeedbackComponent: {
            component: QualtricsEmbeddedFeedbackComponent
          },
          QualtricsComponent: {
            component: QualtricsComponent
          }
        }
      }), provideDefaultConfig(defaultQualtricsConfig)],
      declarations: [QualtricsComponent, QualtricsEmbeddedFeedbackComponent],
      exports: [QualtricsComponent, QualtricsEmbeddedFeedbackComponent]
    }]
  }], null, null);
})();

// node_modules/@spartacus/qualtrics/fesm2022/spartacus-qualtrics.mjs
var QualtricsModule = class _QualtricsModule {
  static {
    this.ɵfac = function QualtricsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QualtricsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _QualtricsModule,
      imports: [QualtricsComponentsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [QualtricsComponentsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QualtricsModule, [{
    type: NgModule,
    args: [{
      imports: [QualtricsComponentsModule]
    }]
  }], null, null);
})();
export {
  QualtricsModule
};
//# sourceMappingURL=@spartacus_qualtrics.js.map
