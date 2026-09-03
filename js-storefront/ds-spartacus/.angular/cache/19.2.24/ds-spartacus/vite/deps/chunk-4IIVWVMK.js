import {
  Config,
  provideConfigValidator,
  provideDefaultConfigFactory
} from "./chunk-VIVIQI6G.js";
import {
  Injectable,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-7OJSO65L.js";

// node_modules/@spartacus/epd-visualization/fesm2022/spartacus-epd-visualization-root.mjs
var EpdVisualizationConfig = class _EpdVisualizationConfig {
  static {
    this.ɵfac = function EpdVisualizationConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EpdVisualizationConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _EpdVisualizationConfig,
      factory: function EpdVisualizationConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _EpdVisualizationConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EpdVisualizationConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
function getUrl(urlString) {
  try {
    return new URL(urlString);
  } catch {
    return null;
  }
}
function isHttpOrHttps(url) {
  return url.protocol === "http:" || url.protocol === "https:";
}
function epdVisualizationConfigValidator(epdVisualizationConfig) {
  const epdVisualization = epdVisualizationConfig.epdVisualization;
  if (!epdVisualization) {
    return unconfiguredPropertyMessage("epdVisualization");
  }
  if (invalidApis(epdVisualization)) {
    return invalidApis(epdVisualization);
  }
  if (invalidUi5(epdVisualization)) {
    return invalidUi5(epdVisualization);
  }
  if (invalidUsageIds(epdVisualization)) {
    return invalidUsageIds(epdVisualization);
  }
  if (invalidVisualPicking(epdVisualization)) {
    return invalidVisualPicking(epdVisualization);
  }
}
function unconfiguredPropertyMessage(propertyName) {
  return `No value configured for ${propertyName} in the EPD Visualization library configuration.`;
}
function invalidUrlMessage(propertyName, url) {
  return `URL value '${url}' configured for ${propertyName} in the EPD Visualization library configuration is not valid.`;
}
function invalidUrlProtocolMessage(propertyName) {
  return `URL for ${propertyName} must use HTTPS or HTTP protocol.`;
}
function invalidApis(epdVisualization) {
  if (!epdVisualization.apis) {
    return unconfiguredPropertyMessage("epdVisualization.apis");
  }
  const configApisBaseUrlProperty = "epdVisualization.apis.baseUrl";
  if (!epdVisualization.apis.baseUrl) {
    return unconfiguredPropertyMessage(configApisBaseUrlProperty);
  }
  const apiBaseUrl = getUrl(epdVisualization.apis.baseUrl);
  if (!apiBaseUrl) {
    return invalidUrlMessage(configApisBaseUrlProperty, epdVisualization.apis.baseUrl);
  }
  if (!isHttpOrHttps(apiBaseUrl)) {
    return invalidUrlProtocolMessage(configApisBaseUrlProperty);
  }
  return void 0;
}
function invalidUi5(epdVisualization) {
  if (!epdVisualization.ui5) {
    return unconfiguredPropertyMessage("epdVisualization.ui5");
  }
  const configUi5BootstrapUrlProperty = "epdVisualization.ui5.bootstrapUrl";
  if (!epdVisualization.ui5.bootstrapUrl) {
    return unconfiguredPropertyMessage(configUi5BootstrapUrlProperty);
  }
  const ui5BootStrapUrl = getUrl(epdVisualization.ui5.bootstrapUrl);
  if (!ui5BootStrapUrl) {
    return invalidUrlMessage(configUi5BootstrapUrlProperty, epdVisualization.ui5.bootstrapUrl);
  }
  if (!isHttpOrHttps(ui5BootStrapUrl)) {
    return invalidUrlProtocolMessage(configUi5BootstrapUrlProperty);
  }
  return void 0;
}
function invalidUsageIds(epdVisualization) {
  if (!epdVisualization.usageIds) {
    return unconfiguredPropertyMessage("epdVisualization.usageIds");
  }
  if (!epdVisualization.usageIds.folderUsageId.name) {
    return unconfiguredPropertyMessage("epdVisualization.usageIds.folderUsageId.name");
  }
  if (!epdVisualization.usageIds.folderUsageId.keys?.length) {
    return unconfiguredPropertyMessage("epdVisualization.usageIds.folderUsageId.keys");
  }
  for (let i = 0; i < epdVisualization.usageIds.folderUsageId.keys.length; i++) {
    if (!epdVisualization.usageIds.folderUsageId.keys[i].name) {
      return unconfiguredPropertyMessage(`epdVisualization.usageIds.folderUsageId.keys[${i}].name`);
    }
    if (!epdVisualization.usageIds.folderUsageId.keys[i].value) {
      return unconfiguredPropertyMessage(`epdVisualization.usageIds.folderUsageId.keys[${i}].value`);
    }
  }
  if (!epdVisualization.usageIds.productUsageId.name) {
    return unconfiguredPropertyMessage("epdVisualization.usageIds.productUsageId.name");
  }
  if (!epdVisualization.usageIds.productUsageId.keyName) {
    return unconfiguredPropertyMessage("epdVisualization.usageIds.productUsageId.keyName");
  }
  return void 0;
}
function invalidVisualPicking(epdVisualization) {
  if (!epdVisualization.visualPicking) {
    return unconfiguredPropertyMessage("epdVisualization.visualPicking");
  }
  if (!epdVisualization.visualPicking.productReferenceType) {
    return unconfiguredPropertyMessage("epdVisualization.visualPicking.productReferenceType");
  }
  return void 0;
}
function getEpdVisualizationDefaultConfig() {
  return {
    epdVisualization: {
      usageIds: {
        folderUsageId: {
          name: "CommerceCloud-Folder",
          keys: [{
            name: "Function",
            value: "Online"
          }]
        },
        productUsageId: {
          name: "CommerceCloud-SparePart",
          keyName: "ProductCode"
        }
      },
      visualPicking: {
        productReferenceType: "SPAREPART"
      }
    }
  };
}
var EPD_VISUALIZATION_FEATURE = "epd-visualization";
function defaultEpdVisualizationComponentsConfig() {
  const config = {
    featureModules: {
      [EPD_VISUALIZATION_FEATURE]: {
        cmsComponents: ["VisualPickingTabComponent"]
      }
    }
  };
  return config;
}
var EpdVisualizationRootModule = class _EpdVisualizationRootModule {
  static {
    this.ɵfac = function EpdVisualizationRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EpdVisualizationRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _EpdVisualizationRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultEpdVisualizationComponentsConfig), provideDefaultConfigFactory(getEpdVisualizationDefaultConfig), provideConfigValidator(epdVisualizationConfigValidator)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EpdVisualizationRootModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfigFactory(defaultEpdVisualizationComponentsConfig), provideDefaultConfigFactory(getEpdVisualizationDefaultConfig), provideConfigValidator(epdVisualizationConfigValidator)]
    }]
  }], null, null);
})();
var ContentType;
(function(ContentType2) {
  ContentType2["Model3D"] = "3DModel";
  ContentType2["Drawing2D"] = "2DDrawing";
})(ContentType || (ContentType = {}));
var EventListenerUtils = class {
  constructor() {
    this.listeners = [];
  }
  initialize(renderer) {
    this.renderer = renderer;
  }
  attachEventListener(nativeElement, eventName, callback) {
    const listener = {
      nativeElement,
      eventName,
      endListener: this.renderer.listen(nativeElement, eventName, callback)
    };
    this.listeners.push(listener);
  }
  detachEventListeners(nativeElement, eventName) {
    this._detachEventListeners(this.listeners.filter((listener) => listener.nativeElement === nativeElement && listener.eventName === eventName));
  }
  detachAllEventListeners(nativeElement) {
    this._detachEventListeners(this.listeners.filter((listener) => listener.nativeElement === nativeElement));
  }
  _detachEventListeners(eventListeners) {
    const listenersSet = new Set(eventListeners);
    eventListeners.forEach((listener) => {
      listener.endListener();
    });
    this.listeners = this.listeners.filter((listener) => !listenersSet.has(listener));
  }
};

export {
  EpdVisualizationConfig,
  getUrl,
  isHttpOrHttps,
  epdVisualizationConfigValidator,
  getEpdVisualizationDefaultConfig,
  EPD_VISUALIZATION_FEATURE,
  defaultEpdVisualizationComponentsConfig,
  EpdVisualizationRootModule,
  ContentType,
  EventListenerUtils
};
//# sourceMappingURL=chunk-4IIVWVMK.js.map
