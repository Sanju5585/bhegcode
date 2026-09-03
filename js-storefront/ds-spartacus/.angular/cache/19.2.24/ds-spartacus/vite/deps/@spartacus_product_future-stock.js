import {
  FutureStockFacade
} from "./chunk-QNQMQEAE.js";
import {
  ICON_TYPE,
  IconComponent,
  IconModule
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  ConverterService,
  I18nModule,
  LoggerService,
  OCC_USER_ID_ANONYMOUS,
  OccEndpointsService,
  RoutingService,
  TranslatePipe,
  UserIdService,
  provideDefaultConfig,
  tryNormalizeHttpError,
  useFeatureStyles
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import "./chunk-EBCNDD52.js";
import "./chunk-YMQEGXEG.js";
import "./chunk-6KXUHIAW.js";
import "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import {
  HttpClient
} from "./chunk-2A6OHZCE.js";
import "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  Component,
  Injectable,
  InjectionToken,
  NgModule,
  inject,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  catchError,
  of,
  withLatestFrom
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/product/fesm2022/spartacus-product-future-stock-components.mjs
function FutureStockAccordionComponent_ng_container_0_ng_container_5_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const futureStock_r3 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate3(" ", futureStock_r3.formattedDate, " - ", ɵɵpipeBind1(2, 3, "futureStockDropdown.quantity"), " ", futureStock_r3.stock.stockLevel, " ");
  }
}
function FutureStockAccordionComponent_ng_container_0_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FutureStockAccordionComponent_ng_container_0_ng_container_5_ng_container_1_div_1_Template, 3, 5, "div", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const futureStocks_r4 = ɵɵnextContext(2).ngIf;
    ɵɵadvance();
    ɵɵproperty("ngForOf", futureStocks_r4.futureStocks);
  }
}
function FutureStockAccordionComponent_ng_container_0_ng_container_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "futureStockDropdown.noFutureStocks"), " ");
  }
}
function FutureStockAccordionComponent_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FutureStockAccordionComponent_ng_container_0_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 4)(2, FutureStockAccordionComponent_ng_container_0_ng_container_5_ng_template_2_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const noStocks_r5 = ɵɵreference(3);
    const futureStocks_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", futureStocks_r4 == null ? null : futureStocks_r4.futureStocks == null ? null : futureStocks_r4.futureStocks.length)("ngIfElse", noStocks_r5);
  }
}
function FutureStockAccordionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 2);
    ɵɵlistener("click", function FutureStockAccordionComponent_ng_container_0_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggle());
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelement(4, "cx-icon", 3);
    ɵɵelementEnd();
    ɵɵtemplate(5, FutureStockAccordionComponent_ng_container_0_ng_container_5_Template, 4, 2, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵattribute("aria-expanded", ctx_r1.expanded);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "futureStockDropdown.header"), " ");
    ɵɵadvance(2);
    ɵɵproperty("type", ctx_r1.expanded ? ctx_r1.iconType.CARET_UP : ctx_r1.iconType.CARET_DOWN);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.expanded);
  }
}
var FutureStockAccordionComponent = class _FutureStockAccordionComponent {
  constructor(futureStockService) {
    this.futureStockService = futureStockService;
    this.futureStocks$ = this.futureStockService.getFutureStock();
    this.expanded = false;
    this.iconType = ICON_TYPE;
    useFeatureStyles("a11yCroppedFocusRing");
    useFeatureStyles("a11yUseProperTextColorForFutureStockAccordion");
  }
  toggle() {
    this.expanded = !this.expanded;
  }
  static {
    this.ɵfac = function FutureStockAccordionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FutureStockAccordionComponent)(ɵɵdirectiveInject(FutureStockFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FutureStockAccordionComponent,
      selectors: [["cx-future-stock-accordion"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["noStocks", ""], [4, "ngIf"], ["id", "cx-future-stock-accordion-header", "aria-controls", "cx-future-stock-accordion-content", 1, "cx-future-stock-accordion-header", 3, "click"], ["aria-hidden", "true", 3, "type"], [4, "ngIf", "ngIfElse"], ["id", "cx-future-stock-accordion-content", "class", "cx-future-stock-accordion-content", "aria-labelledby", "cx-future-stock-accordion-header", 4, "ngFor", "ngForOf"], ["id", "cx-future-stock-accordion-content", "aria-labelledby", "cx-future-stock-accordion-header", 1, "cx-future-stock-accordion-content"]],
      template: function FutureStockAccordionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, FutureStockAccordionComponent_ng_container_0_Template, 6, 6, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.futureStocks$));
        }
      },
      dependencies: [NgForOf, NgIf, IconComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FutureStockAccordionComponent, [{
    type: Component,
    args: [{
      selector: "cx-future-stock-accordion",
      standalone: false,
      template: `<ng-container *ngIf="futureStocks$ | async as futureStocks">
  <button
    id="cx-future-stock-accordion-header"
    class="cx-future-stock-accordion-header"
    aria-controls="cx-future-stock-accordion-content"
    [attr.aria-expanded]="expanded"
    (click)="toggle()"
  >
    {{ 'futureStockDropdown.header' | cxTranslate }}
    <cx-icon
      [type]="expanded ? iconType.CARET_UP : iconType.CARET_DOWN"
      aria-hidden="true"
    ></cx-icon>
  </button>

  <ng-container *ngIf="expanded">
    <ng-container *ngIf="futureStocks?.futureStocks?.length; else noStocks">
      <div
        id="cx-future-stock-accordion-content"
        class="cx-future-stock-accordion-content"
        aria-labelledby="cx-future-stock-accordion-header"
        *ngFor="let futureStock of futureStocks.futureStocks"
      >
        {{ futureStock.formattedDate }} -
        {{ 'futureStockDropdown.quantity' | cxTranslate }}
        {{ futureStock.stock.stockLevel }}
      </div>
    </ng-container>

    <ng-template #noStocks>
      <div
        id="cx-future-stock-accordion-content"
        class="cx-future-stock-accordion-content"
        aria-labelledby="cx-future-stock-accordion-header"
      >
        {{ 'futureStockDropdown.noFutureStocks' | cxTranslate }}
      </div>
    </ng-template>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: FutureStockFacade
  }], null);
})();
var FutureStockAccordionModule = class _FutureStockAccordionModule {
  static {
    this.ɵfac = function FutureStockAccordionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FutureStockAccordionModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FutureStockAccordionModule,
      declarations: [FutureStockAccordionComponent],
      imports: [CommonModule, I18nModule, IconModule],
      exports: [FutureStockAccordionComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          FutureStockComponent: {
            component: FutureStockAccordionComponent
          }
        }
      })],
      imports: [CommonModule, I18nModule, IconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FutureStockAccordionModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, IconModule],
      declarations: [FutureStockAccordionComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          FutureStockComponent: {
            component: FutureStockAccordionComponent
          }
        }
      })],
      exports: [FutureStockAccordionComponent]
    }]
  }], null, null);
})();
var FutureStockComponentsModule = class _FutureStockComponentsModule {
  static {
    this.ɵfac = function FutureStockComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FutureStockComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FutureStockComponentsModule,
      imports: [CommonModule, FutureStockAccordionModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, FutureStockAccordionModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FutureStockComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FutureStockAccordionModule]
    }]
  }], null, null);
})();

// node_modules/@spartacus/product/fesm2022/spartacus-product-future-stock-core.mjs
var FutureStockAdapter = class {
};
var FutureStockConnector = class _FutureStockConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  getFutureStock(userId, productCode) {
    return this.adapter.getFutureStock(userId, productCode);
  }
  getFutureStocks(userId, productCodes) {
    return this.adapter.getFutureStocks(userId, productCodes);
  }
  static {
    this.ɵfac = function FutureStockConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FutureStockConnector)(ɵɵinject(FutureStockAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _FutureStockConnector,
      factory: _FutureStockConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FutureStockConnector, [{
    type: Injectable
  }], () => [{
    type: FutureStockAdapter
  }], null);
})();
var FUTURE_STOCK_NORMALIZER = new InjectionToken("FutureStockNormalizer");
var FUTURE_STOCK_LIST_NORMALIZER = new InjectionToken("FutureStockListNormalizer");
var FutureStockService = class _FutureStockService {
  /**
   * Get future stock
   */
  getFutureStock() {
    return this.futureStockState$;
  }
  constructor(userIdService, futureStockConnector, routingService) {
    this.userIdService = userIdService;
    this.futureStockConnector = futureStockConnector;
    this.routingService = routingService;
    this.PRODUCT_KEY = "productCode";
    this.futureStockState$ = this.routingService.getRouterState().pipe(withLatestFrom(this.userIdService.takeUserId()), switchMap(([{
      state
    }, userId]) => {
      if (userId !== OCC_USER_ID_ANONYMOUS) {
        return this.futureStockConnector.getFutureStock(userId, state.params[this.PRODUCT_KEY]);
      }
      return of(void 0);
    }));
  }
  static {
    this.ɵfac = function FutureStockService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FutureStockService)(ɵɵinject(UserIdService), ɵɵinject(FutureStockConnector), ɵɵinject(RoutingService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _FutureStockService,
      factory: _FutureStockService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FutureStockService, [{
    type: Injectable
  }], () => [{
    type: UserIdService
  }, {
    type: FutureStockConnector
  }, {
    type: RoutingService
  }], null);
})();
var facadeProviders = [FutureStockService, {
  provide: FutureStockFacade,
  useExisting: FutureStockService
}];
var FutureStockCoreModule = class _FutureStockCoreModule {
  static forRoot() {
    return {
      ngModule: _FutureStockCoreModule
    };
  }
  static {
    this.ɵfac = function FutureStockCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FutureStockCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FutureStockCoreModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [...facadeProviders, FutureStockConnector]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FutureStockCoreModule, [{
    type: NgModule,
    args: [{
      providers: [...facadeProviders, FutureStockConnector]
    }]
  }], null, null);
})();

// node_modules/@spartacus/product/fesm2022/spartacus-product-future-stock-occ.mjs
var OccFutureStockAdapter = class _OccFutureStockAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  getFutureStock(userId, productCode) {
    return this.http.get(this.getFutureStockEndpoint(userId, productCode)).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), this.converter.pipeable(FUTURE_STOCK_NORMALIZER));
  }
  getFutureStocks(userId, productCodes) {
    return this.http.get(this.getFutureStocksEndpoint(userId, productCodes)).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), this.converter.pipeable(FUTURE_STOCK_LIST_NORMALIZER));
  }
  getFutureStockEndpoint(userId, productCode) {
    return this.occEndpoints.buildUrl("futureStock", {
      urlParams: {
        userId,
        productCode
      }
    });
  }
  getFutureStocksEndpoint(userId, productCodes) {
    const params = {};
    params["productCodes"] = productCodes;
    return this.occEndpoints.buildUrl("futureStocks", {
      urlParams: {
        userId
      },
      queryParams: params
    });
  }
  static {
    this.ɵfac = function OccFutureStockAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccFutureStockAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccFutureStockAdapter,
      factory: _OccFutureStockAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccFutureStockAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var futureStockEndpoints = {
  futureStock: "users/${userId}/futureStocks/${productCode}",
  futureStocks: "users/${userId}/futureStocks"
};
var defaultOccFutureStockConfig = {
  backend: {
    occ: {
      endpoints: __spreadValues({}, futureStockEndpoints)
    }
  }
};
var FutureStockOccModule = class _FutureStockOccModule {
  static {
    this.ɵfac = function FutureStockOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FutureStockOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FutureStockOccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccFutureStockConfig), {
        provide: FutureStockAdapter,
        useClass: OccFutureStockAdapter
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FutureStockOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccFutureStockConfig), {
        provide: FutureStockAdapter,
        useClass: OccFutureStockAdapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/product/fesm2022/spartacus-product-future-stock.mjs
var FutureStockModule = class _FutureStockModule {
  static {
    this.ɵfac = function FutureStockModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FutureStockModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FutureStockModule,
      imports: [FutureStockCoreModule, FutureStockOccModule, FutureStockComponentsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [FutureStockCoreModule.forRoot(), FutureStockOccModule, FutureStockComponentsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FutureStockModule, [{
    type: NgModule,
    args: [{
      imports: [FutureStockCoreModule.forRoot(), FutureStockOccModule, FutureStockComponentsModule]
    }]
  }], null, null);
})();
export {
  FutureStockModule
};
//# sourceMappingURL=@spartacus_product_future-stock.js.map
