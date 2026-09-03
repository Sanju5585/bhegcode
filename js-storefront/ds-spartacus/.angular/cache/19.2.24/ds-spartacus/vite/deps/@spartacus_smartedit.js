import {
  SmartEditConfig
} from "./chunk-7MO62OZS.js";
import {
  BaseSiteService,
  CmsService,
  ComponentDecorator,
  PageType,
  RoutingService,
  SlotDecorator,
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
  Injectable,
  NgModule,
  NgZone,
  RendererFactory2,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  filter,
  take
} from "./chunk-R6FETK65.js";
import "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/smartedit/fesm2022/spartacus-smartedit-core.mjs
var SmartEditService = class _SmartEditService {
  constructor(cmsService, routingService, baseSiteService, zone, winRef, rendererFactory, config) {
    this.cmsService = cmsService;
    this.routingService = routingService;
    this.baseSiteService = baseSiteService;
    this.zone = zone;
    this.winRef = winRef;
    this.rendererFactory = rendererFactory;
    this.config = config;
    this.isPreviewPage = false;
    if (winRef.nativeWindow) {
      const window = winRef.nativeWindow;
      window.smartedit = window.smartedit || {};
      window.smartedit.renderComponent = (componentId, componentType, parentId) => {
        return this.renderComponent(componentId, componentType, parentId);
      };
      window.smartedit.reprocessPage = this.reprocessPage;
    }
  }
  processCmsPage() {
    this.baseSiteService.get().pipe(filter((site) => Boolean(site)), take(1)).subscribe((site) => {
      this.defaultPreviewCategoryCode = site.defaultPreviewCategoryCode;
      this.defaultPreviewProductCode = site.defaultPreviewProductCode;
      this.cmsService.getCurrentPage().pipe(filter(Boolean)).subscribe((cmsPage) => {
        this._currentPageId = cmsPage.pageId;
        this.goToPreviewPage(cmsPage);
        this.addPageContract(cmsPage);
      });
    });
  }
  /**
   * add CSS classes in a body tag
   */
  addPageContract(cmsPage) {
    const renderer = this.rendererFactory.createRenderer("body", null);
    const element = this.winRef.document.body;
    const previousContract = [];
    Array.from(element.classList).forEach((attr) => previousContract.push(attr));
    previousContract.forEach((attr) => renderer.removeClass(element, attr));
    this.addSmartEditContract(element, renderer, cmsPage.properties);
  }
  /**
   * go to the default preview page
   */
  goToPreviewPage(cmsPage) {
    if (!this.isPreviewPage) {
      this.isPreviewPage = true;
      if (cmsPage.type === PageType.PRODUCT_PAGE && this.defaultPreviewProductCode) {
        this.routingService.go({
          cxRoute: "product",
          params: {
            code: this.defaultPreviewProductCode,
            name: ""
          }
        });
      } else if (cmsPage.type === PageType.CATEGORY_PAGE && this.defaultPreviewCategoryCode) {
        this.routingService.go({
          cxRoute: "category",
          params: {
            code: this.defaultPreviewCategoryCode
          }
        });
      }
    }
  }
  /**
   * re-render CMS components and slots
   */
  renderComponent(componentId, componentType, parentId) {
    if (componentId) {
      this.zone.run(() => {
        if (!parentId) {
          if (this._currentPageId) {
            this.cmsService.refreshPageById(this._currentPageId);
          } else {
            this.cmsService.refreshLatestPage();
          }
        } else if (componentType) {
          this.cmsService.refreshComponent(componentId);
        }
      });
    }
    return true;
  }
  reprocessPage() {
  }
  /**
   * add smartedit HTML markup contract
   */
  addSmartEditContract(element, renderer, properties) {
    if (properties) {
      Object.keys(properties).forEach((group) => {
        const name = "data-" + group + "-";
        const groupProps = properties[group];
        Object.keys(groupProps).forEach((propName) => {
          const propValue = groupProps[propName];
          if (propName === "classes") {
            const classes = propValue.split(" ");
            classes.forEach((classItem) => {
              renderer.addClass(element, classItem);
            });
          } else {
            renderer.setAttribute(element, name + propName.split(/(?=[A-Z])/).join("-").toLowerCase(), propValue);
          }
        });
      });
    }
  }
  static {
    this.ɵfac = function SmartEditService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartEditService)(ɵɵinject(CmsService), ɵɵinject(RoutingService), ɵɵinject(BaseSiteService), ɵɵinject(NgZone), ɵɵinject(WindowRef), ɵɵinject(RendererFactory2), ɵɵinject(SmartEditConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SmartEditService,
      factory: _SmartEditService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEditService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CmsService
  }, {
    type: RoutingService
  }, {
    type: BaseSiteService
  }, {
    type: NgZone
  }, {
    type: WindowRef
  }, {
    type: RendererFactory2
  }, {
    type: SmartEditConfig
  }], null);
})();
var SmartEditComponentDecorator = class _SmartEditComponentDecorator extends ComponentDecorator {
  constructor(smartEditService) {
    super();
    this.smartEditService = smartEditService;
  }
  decorate(element, renderer, component) {
    if (component) {
      this.smartEditService.addSmartEditContract(element, renderer, component.properties);
    }
  }
  static {
    this.ɵfac = function SmartEditComponentDecorator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartEditComponentDecorator)(ɵɵinject(SmartEditService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SmartEditComponentDecorator,
      factory: _SmartEditComponentDecorator.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEditComponentDecorator, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: SmartEditService
  }], null);
})();
var SmartEditSlotDecorator = class _SmartEditSlotDecorator extends SlotDecorator {
  constructor(smartEditService) {
    super();
    this.smartEditService = smartEditService;
  }
  decorate(element, renderer, slot) {
    if (slot) {
      this.smartEditService.addSmartEditContract(element, renderer, slot.properties);
    }
  }
  static {
    this.ɵfac = function SmartEditSlotDecorator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartEditSlotDecorator)(ɵɵinject(SmartEditService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SmartEditSlotDecorator,
      factory: _SmartEditSlotDecorator.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEditSlotDecorator, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: SmartEditService
  }], null);
})();
var smartEditDecorators = [{
  provide: ComponentDecorator,
  useExisting: SmartEditComponentDecorator,
  multi: true
}, {
  provide: SlotDecorator,
  useExisting: SmartEditSlotDecorator,
  multi: true
}];
var SmartEditCoreModule = class _SmartEditCoreModule {
  constructor(smartEditService) {
    this.smartEditService = smartEditService;
    this.smartEditService.processCmsPage();
  }
  static {
    this.ɵfac = function SmartEditCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartEditCoreModule)(ɵɵinject(SmartEditService));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SmartEditCoreModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [...smartEditDecorators]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEditCoreModule, [{
    type: NgModule,
    args: [{
      providers: [...smartEditDecorators]
    }]
  }], () => [{
    type: SmartEditService
  }], null);
})();

// node_modules/@spartacus/smartedit/fesm2022/spartacus-smartedit.mjs
var SmartEditModule = class _SmartEditModule {
  static {
    this.ɵfac = function SmartEditModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartEditModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SmartEditModule,
      imports: [SmartEditCoreModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [SmartEditCoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEditModule, [{
    type: NgModule,
    args: [{
      imports: [SmartEditCoreModule]
    }]
  }], null, null);
})();
export {
  SmartEditModule
};
//# sourceMappingURL=@spartacus_smartedit.js.map
