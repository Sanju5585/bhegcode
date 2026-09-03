import {
  PersonalizationContextService
} from "./chunk-OFT4CEX6.js";
import "./chunk-XCJWBKP7.js";
import {
  cdsTranslationChunksConfig,
  cdsTranslations
} from "./chunk-OEKWOJRP.js";
import {
  OrderPlacedEvent
} from "./chunk-UIW5AQFA.js";
import {
  ActiveCartFacade,
  CartAddEntrySuccessEvent,
  CartPageEvent,
  CartRemoveEntrySuccessEvent,
  CartUpdateEntrySuccessEvent,
  MergeCartSuccessEvent
} from "./chunk-KEAKWHYV.js";
import {
  CarouselComponent,
  CarouselModule,
  CategoryPageResultsEvent,
  CmsComponentData,
  FacetService,
  HighlightPipe,
  HomePageEvent,
  IntersectionService,
  MediaComponent,
  MediaModule,
  OutletContextData,
  OutletPosition,
  PageEvent,
  ProductDetailsPageEvent,
  SearchBoxComponentService,
  SearchBoxModule,
  SearchBoxOutlets,
  SearchPageResultsEvent,
  provideOutlet
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  BaseSiteService,
  Config,
  ConsentService,
  DeferLoadingStrategy,
  EventService,
  FeatureConfigService,
  I18nModule,
  LanguageService,
  LoggerService,
  OccEndpointsService,
  PageType,
  ProductScope,
  ProductSearchService,
  ProductService,
  RoutingService,
  TranslatePipe,
  UrlModule,
  UrlPipe,
  WindowRef,
  authGroup_actions,
  provideConfigValidator,
  provideDefaultConfig,
  provideDefaultConfigFactory
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-EBCNDD52.js";
import "./chunk-YMQEGXEG.js";
import "./chunk-6KXUHIAW.js";
import {
  ActionsSubject
} from "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import {
  takeUntilDestroyed
} from "./chunk-OP73Q372.js";
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpHeaders,
  HttpParams
} from "./chunk-2A6OHZCE.js";
import "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-S7KROBXW.js";
import {
  isPlatformBrowser
} from "./chunk-5AFE3VT7.js";
import {
  APP_INITIALIZER,
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  PLATFORM_ID,
  Renderer2,
  inject,
  provideAppInitializer,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7OJSO65L.js";
import {
  fromEvent,
  merge,
  using
} from "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  BehaviorSubject,
  EMPTY,
  ReplaySubject,
  Subject,
  catchError,
  combineLatest,
  concatMap,
  debounceTime,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  filter,
  interval,
  last,
  map,
  mergeMap,
  of,
  pairwise,
  shareReplay,
  startWith,
  take,
  takeUntil,
  takeWhile,
  tap,
  timer,
  withLatestFrom
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/cds/fesm2022/spartacus-cds.mjs
function ProfileTagComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c0 = (a0) => ({
  cxRoute: "product",
  params: a0
});
function MerchandisingCarouselComponent_ng_container_0_ng_template_4_cx_media_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-media", 10);
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().item;
    ɵɵproperty("container", item_r2.images.PRIMARY);
  }
}
function MerchandisingCarouselComponent_ng_container_0_ng_template_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().item;
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", item_r2.stock == null ? null : item_r2.stock.stockLevelStatus, " : ", item_r2.stock == null ? null : item_r2.stock.stockLevel, " ");
  }
}
function MerchandisingCarouselComponent_ng_container_0_ng_template_4_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().item;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r2.stock == null ? null : item_r2.stock.stockLevelStatus, " ");
  }
}
function MerchandisingCarouselComponent_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelement(0, "div", 5);
    ɵɵelementStart(1, "a", 6);
    ɵɵpipe(2, "cxUrl");
    ɵɵlistener("click", function MerchandisingCarouselComponent_ng_container_0_ng_template_4_Template_a_click_1_listener() {
      const item_r2 = ɵɵrestoreView(_r1).item;
      const merchandisingCarouselModel_r3 = ɵɵnextContext().ngIf;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onMerchandisingCarouselItemClick(merchandisingCarouselModel_r3, item_r2));
    });
    ɵɵtemplate(3, MerchandisingCarouselComponent_ng_container_0_ng_template_4_cx_media_3_Template, 1, 1, "cx-media", 7);
    ɵɵelementStart(4, "h4");
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 8);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵtemplate(8, MerchandisingCarouselComponent_ng_container_0_ng_template_4_div_8_Template, 2, 2, "div", 9)(9, MerchandisingCarouselComponent_ng_container_0_ng_template_4_ng_template_9_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    const outOfStock_r5 = ɵɵreference(10);
    ɵɵproperty("cxAttributes", item_r2.metadata)("cxAttributesNamePrefix", "data-cx-merchandising-product");
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpipeBind1(2, 8, ɵɵpureFunction1(10, _c0, item_r2)));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", item_r2.images == null ? null : item_r2.images.PRIMARY);
    ɵɵadvance(2);
    ɵɵtextInterpolate(item_r2.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", item_r2.price == null ? null : item_r2.price.formattedValue, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", (item_r2.stock == null ? null : item_r2.stock.stockLevel) > 0)("ngIfElse", outOfStock_r5);
  }
}
function MerchandisingCarouselComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 3)(2, "cx-carousel", 4);
    ɵɵpipe(3, "async");
    ɵɵtemplate(4, MerchandisingCarouselComponent_ng_container_0_ng_template_4_Template, 11, 12, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const merchandisingCarouselModel_r3 = ctx.ngIf;
    const carouselItem_r6 = ɵɵreference(5);
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("cxAttributes", merchandisingCarouselModel_r3.metadata)("cxAttributesNamePrefix", "data-cx-merchandising-carousel");
    ɵɵadvance();
    ɵɵproperty("items", merchandisingCarouselModel_r3.items$)("title", ɵɵpipeBind1(3, 5, ctx_r3.title$))("template", carouselItem_r6);
  }
}
var _c1 = (a0) => ({
  query: a0
});
var _c2 = (a0) => ({
  cxRoute: "search",
  params: a0
});
function RecentSearchesComponent_ng_container_0_ng_container_1_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li")(1, "a", 4);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "cxHighlight");
    ɵɵpipe(4, "cxUrl");
    ɵɵlistener("mousedown", function RecentSearchesComponent_ng_container_0_ng_container_1_li_7_Template_a_mousedown_1_listener($event) {
      ɵɵrestoreView(_r1);
      return ɵɵresetView($event.preventDefault());
    })("keydown.arrowup", function RecentSearchesComponent_ng_container_0_ng_container_1_li_7_Template_a_keydown_arrowup_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.shareEvent($event));
    })("keydown.arrowdown", function RecentSearchesComponent_ng_container_0_ng_container_1_li_7_Template_a_keydown_arrowdown_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.shareEvent($event));
    })("keydown.arrowleft", function RecentSearchesComponent_ng_container_0_ng_container_1_li_7_Template_a_keydown_arrowleft_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.shareEvent($event));
    })("keydown.arrowright", function RecentSearchesComponent_ng_container_0_ng_container_1_li_7_Template_a_keydown_arrowright_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.shareEvent($event));
    })("keydown.enter", function RecentSearchesComponent_ng_container_0_ng_container_1_li_7_Template_a_keydown_enter_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.shareEvent($event));
    })("keydown.escape", function RecentSearchesComponent_ng_container_0_ng_container_1_li_7_Template_a_keydown_escape_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.shareEvent($event));
    })("blur", function RecentSearchesComponent_ng_container_0_ng_container_1_li_7_Template_a_blur_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.shareEvent($event));
    })("click", function RecentSearchesComponent_ng_container_0_ng_container_1_li_7_Template_a_click_1_listener() {
      const recentSearch_r3 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.updateChosenWord(recentSearch_r3));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const recentSearch_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("innerHTML", ɵɵpipeBind3(3, 4, recentSearch_r3, (tmp_5_0 = ɵɵpipeBind1(2, 2, ctx_r1.outletContext$)) == null ? null : tmp_5_0.search, false), ɵɵsanitizeHtml)("routerLink", ɵɵpipeBind1(4, 8, ɵɵpureFunction1(12, _c2, ɵɵpureFunction1(10, _c1, recentSearch_r3))));
  }
}
function RecentSearchesComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1)(2, "h3");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "ul", 2);
    ɵɵpipe(6, "cxTranslate");
    ɵɵtemplate(7, RecentSearchesComponent_ng_container_0_ng_container_1_li_7_Template, 5, 14, "li", 3);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const results_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 3, "searchBox.recentSearches"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ariaLabel", ɵɵpipeBind1(6, 5, "cdsRecentSearches.ariaRecentSearches"));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", results_r4);
  }
}
function RecentSearchesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, RecentSearchesComponent_ng_container_0_ng_container_1_Template, 8, 7, "ng-container", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const results_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", results_r4 == null ? null : results_r4.length);
  }
}
function TrendingSearchesComponent_ng_container_0_ng_container_1_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li")(1, "a", 4);
    ɵɵpipe(2, "cxUrl");
    ɵɵlistener("mousedown", function TrendingSearchesComponent_ng_container_0_ng_container_1_li_7_Template_a_mousedown_1_listener($event) {
      ɵɵrestoreView(_r1);
      return ɵɵresetView($event.preventDefault());
    })("keydown.arrowup", function TrendingSearchesComponent_ng_container_0_ng_container_1_li_7_Template_a_keydown_arrowup_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.shareEvent($event));
    })("keydown.arrowdown", function TrendingSearchesComponent_ng_container_0_ng_container_1_li_7_Template_a_keydown_arrowdown_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.shareEvent($event));
    })("keydown.arrowleft", function TrendingSearchesComponent_ng_container_0_ng_container_1_li_7_Template_a_keydown_arrowleft_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.shareEvent($event));
    })("keydown.arrowright", function TrendingSearchesComponent_ng_container_0_ng_container_1_li_7_Template_a_keydown_arrowright_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.shareEvent($event));
    })("keydown.enter", function TrendingSearchesComponent_ng_container_0_ng_container_1_li_7_Template_a_keydown_enter_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.shareEvent($event));
    })("keydown.escape", function TrendingSearchesComponent_ng_container_0_ng_container_1_li_7_Template_a_keydown_escape_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.shareEvent($event));
    });
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const phrase_r3 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpipeBind1(2, 2, ɵɵpureFunction1(6, _c2, ɵɵpureFunction1(4, _c1, phrase_r3.searchPhrase))));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", phrase_r3.searchPhrase, " ");
  }
}
function TrendingSearchesComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1)(2, "h3");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "ul", 2);
    ɵɵpipe(6, "cxTranslate");
    ɵɵtemplate(7, TrendingSearchesComponent_ng_container_0_ng_container_1_li_7_Template, 4, 8, "li", 3);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const searchPhrases_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 3, "searchBox.trendingSearches"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ariaLabel", ɵɵpipeBind1(6, 5, "cdsTrendingSearches.ariaTrendingSearches"));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", searchPhrases_r4);
  }
}
function TrendingSearchesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TrendingSearchesComponent_ng_container_0_ng_container_1_Template, 8, 7, "ng-container", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const searchPhrases_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", searchPhrases_r4 == null ? null : searchPhrases_r4.length);
  }
}
var CdsConfig = class _CdsConfig {
  static {
    this.ɵfac = function CdsConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdsConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdsConfig,
      factory: function CdsConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _CdsConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdsConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
function cdsConfigValidator(config) {
  if (!config.cds) {
    return "Please configure the config.cds object before using the CDS library";
  }
  if (config.cds.profileTag !== void 0) {
    if (config.cds.profileTag.configUrl === void 0 || config.cds.profileTag.configUrl.trim().length === 0) {
      return "Please configure cds.profileTag.configUrl before using the CDS library";
    }
    if (config.cds.profileTag.javascriptUrl === void 0 || config.cds.profileTag.javascriptUrl.trim().length === 0) {
      return "Please configure cds.profileTag.configUrl before using the CDS library";
    }
  }
  if (config.cds.tenant === void 0 || config.cds.tenant.trim().length === 0) {
    return "Please configure cds.tenant before using CDS library";
  }
  if (config.cds.baseUrl === void 0) {
    return "Please configure cds.baseUrl before using CDS library";
  }
  if (config.cds.endpoints === void 0 || config.cds.endpoints.strategyProducts === void 0) {
    return "Please configure the cds.endpoints before using CDS library";
  }
}
function defaultCdsConfigFactory() {
  return {
    cds: {
      tenant: "",
      baseUrl: "",
      merchandising: {
        defaultCarouselViewportThreshold: 80
      },
      consentTemplateId: "PROFILE",
      profileTag: {
        allowInsecureCookies: false
      }
    }
  };
}
var DynamicTemplate = class {
  static resolve(templateString, templateVariables) {
    for (const variableLabel of Object.keys(templateVariables)) {
      const placeholder = new RegExp("\\${" + variableLabel + "}", "g");
      templateString = templateString.replace(placeholder, templateVariables[variableLabel]);
    }
    return templateString;
  }
};
var CdsEndpointsService = class _CdsEndpointsService {
  constructor(cdsConfig) {
    this.cdsConfig = cdsConfig;
  }
  getUrl(endpoint, urlParams = {}, queryParams) {
    if (this.cdsConfig?.cds?.endpoints[endpoint]) {
      endpoint = this.cdsConfig.cds.endpoints[endpoint];
    }
    if (!urlParams["tenant"]) {
      urlParams["tenant"] = this.cdsConfig.cds.tenant;
    }
    Object.keys(urlParams).forEach((key) => {
      urlParams[key] = encodeURIComponent(urlParams[key]);
    });
    endpoint = DynamicTemplate.resolve(endpoint, urlParams);
    if (queryParams) {
      let httpParamsOptions;
      if (endpoint.includes("?")) {
        let queryParamsFromEndpoint;
        [endpoint, queryParamsFromEndpoint] = endpoint.split("?");
        httpParamsOptions = {
          fromString: queryParamsFromEndpoint
        };
      }
      let httpParams = new HttpParams(httpParamsOptions);
      Object.keys(queryParams).forEach((key) => {
        const value = queryParams[key];
        if (value !== void 0) {
          if (value === null) {
            httpParams = httpParams.delete(key);
          } else {
            httpParams = httpParams.set(key, value);
          }
        }
      });
      const params = httpParams.toString();
      if (params.length) {
        endpoint += "?" + params;
      }
    }
    return this.getEndpoint(endpoint);
  }
  getEndpoint(endpoint) {
    if (endpoint.startsWith(this.getBaseEndpoint())) {
      return endpoint;
    }
    if (!endpoint.startsWith("/")) {
      endpoint = "/" + endpoint;
    }
    return `${this.getBaseEndpoint()}${endpoint}`;
  }
  getBaseEndpoint() {
    if (!this.cdsConfig || !this.cdsConfig.cds || !this.cdsConfig.cds.baseUrl) {
      return "";
    }
    return this.cdsConfig.cds.baseUrl;
  }
  static {
    this.ɵfac = function CdsEndpointsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdsEndpointsService)(ɵɵinject(CdsConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdsEndpointsService,
      factory: _CdsEndpointsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdsEndpointsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CdsConfig
  }], null);
})();
var STRATEGY_PRODUCTS_ENDPOINT_KEY = "strategyProducts";
var CdsMerchandisingStrategyAdapter = class _CdsMerchandisingStrategyAdapter {
  constructor(cdsEndpointsService, baseSiteService, http) {
    this.cdsEndpointsService = cdsEndpointsService;
    this.baseSiteService = baseSiteService;
    this.http = http;
  }
  loadProductsForStrategy(strategyId, strategyRequest = {}) {
    let headers = new HttpHeaders();
    if (strategyRequest.headers && strategyRequest.headers.consentReference) {
      headers = headers.set("consent-reference", strategyRequest.headers.consentReference);
    }
    return this.baseSiteService.getActive().pipe(take(1), switchMap((baseSite) => this.http.get(this.cdsEndpointsService.getUrl(STRATEGY_PRODUCTS_ENDPOINT_KEY, {
      baseSite,
      strategyId
    }, strategyRequest.queryParams), {
      headers
    })));
  }
  static {
    this.ɵfac = function CdsMerchandisingStrategyAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdsMerchandisingStrategyAdapter)(ɵɵinject(CdsEndpointsService), ɵɵinject(BaseSiteService), ɵɵinject(HttpClient));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdsMerchandisingStrategyAdapter,
      factory: _CdsMerchandisingStrategyAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdsMerchandisingStrategyAdapter, [{
    type: Injectable
  }], () => [{
    type: CdsEndpointsService
  }, {
    type: BaseSiteService
  }, {
    type: HttpClient
  }], null);
})();
var AttributesDirective = class _AttributesDirective {
  set cxAttributesNamePrefix(attributesNamePrefix) {
    this._attributesNamePrefix = attributesNamePrefix;
  }
  constructor(renderer, elementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
  }
  ngOnChanges() {
    if (this.cxAttributes) {
      for (const attributeName in this.cxAttributes) {
        if (this.cxAttributes.hasOwnProperty(attributeName)) {
          const attributeValue = this.cxAttributes[attributeName];
          if (attributeValue) {
            const _attributeName = this._attributesNamePrefix ? `${this._attributesNamePrefix}-${attributeName}` : attributeName;
            this.renderer.setAttribute(this.elementRef.nativeElement, _attributeName, attributeValue);
          }
        }
      }
    }
  }
  static {
    this.ɵfac = function AttributesDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AttributesDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AttributesDirective,
      selectors: [["", "cxAttributes", ""]],
      inputs: {
        cxAttributes: "cxAttributes",
        cxAttributesNamePrefix: "cxAttributesNamePrefix"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttributesDirective, [{
    type: Directive,
    args: [{
      selector: "[cxAttributes]",
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    cxAttributes: [{
      type: Input
    }],
    cxAttributesNamePrefix: [{
      type: Input
    }]
  });
})();
var AttributesModule = class _AttributesModule {
  static {
    this.ɵfac = function AttributesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AttributesModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AttributesModule,
      declarations: [AttributesDirective],
      imports: [CommonModule],
      exports: [AttributesDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttributesModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [AttributesDirective],
      exports: [AttributesDirective]
    }]
  }], null, null);
})();
var MerchandisingCarouselViewedEvent = class {
  constructor(carouselEvent, productSkus) {
    this.name = "CarouselViewed";
    this.data = __spreadProps(__spreadValues({}, carouselEvent), {
      productSkus
    });
  }
};
var MerchandisingCarouselClickedEvent = class {
  constructor(carouselEvent, slotId, sku, imageUrl) {
    this.name = "CarouselClicked";
    this.data = __spreadProps(__spreadValues({}, carouselEvent), {
      slotId,
      sku,
      imageUrl
    });
  }
};
var MerchandisingStrategyAdapter = class {
};
var MerchandisingStrategyConnector = class _MerchandisingStrategyConnector {
  constructor(strategyAdapter) {
    this.strategyAdapter = strategyAdapter;
  }
  loadProductsForStrategy(strategyId, strategyRequest) {
    return this.strategyAdapter.loadProductsForStrategy(strategyId, strategyRequest);
  }
  static {
    this.ɵfac = function MerchandisingStrategyConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MerchandisingStrategyConnector)(ɵɵinject(MerchandisingStrategyAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _MerchandisingStrategyConnector,
      factory: _MerchandisingStrategyConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MerchandisingStrategyConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: MerchandisingStrategyAdapter
  }], null);
})();
var CdsBackendNotificationAdapter = class {
};
var OccBackendNotification = class _OccBackendNotification {
  constructor(http, occEndpoints) {
    this.http = http;
    this.occEndpoints = occEndpoints;
  }
  notifySuccessfulLogin() {
    return this.http.post(`${this.occEndpoints.getBaseUrl()}/users/current/loginnotification`, {}).pipe(switchMap(() => EMPTY));
  }
  static {
    this.ɵfac = function OccBackendNotification_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccBackendNotification)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccBackendNotification,
      factory: _OccBackendNotification.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccBackendNotification, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }], null);
})();
var InternalProfileTagEventNames;
(function(InternalProfileTagEventNames2) {
  InternalProfileTagEventNames2["CONSENT_REFERENCE_LOADED"] = "profiletag_consentReferenceLoaded";
  InternalProfileTagEventNames2["DEBUG_FLAG_CHANGED"] = "profiletag_debugFlagChanged";
})(InternalProfileTagEventNames || (InternalProfileTagEventNames = {}));
var NavigatedPushEvent = class {
  constructor(data) {
    this.name = "Navigated";
    this.data = data;
  }
};
var ConsentChangedPushEvent = class {
  constructor(granted) {
    this.name = "ConsentChanged";
    this.data = {
      granted: void 0
    };
    this.data.granted = granted;
  }
};
var KeywordSearchPushEvent = class {
  constructor(data) {
    this.name = "KeywordSearch";
    this.data = data;
  }
};
var ProductViewPushEvent = class {
  constructor(data) {
    this.name = "ProductDetailsPageViewed";
    this.data = data;
  }
};
var CategoryViewPushEvent = class {
  constructor(data) {
    this.name = "CategoryPageViewed";
    this.data = data;
  }
};
var BrandPageVisitedEvent = class {
  constructor(data) {
    this.name = "BrandPageVisitedEvent";
    this.data = data;
  }
};
var HomePageViewPushEvent = class {
  constructor(data) {
    this.name = "HomePageViewed";
    this.data = data;
  }
};
var OrderConfirmationPushEvent = class {
  constructor(data) {
    this.name = "OrderConfirmationPageViewed";
    this.data = data;
  }
};
var CartViewPushEvent = class {
  constructor(data) {
    this.name = "CartPageViewed";
    this.data = data;
  }
};
var AddedToCartPushEvent = class {
  constructor(data) {
    this.name = "AddedToCart";
    this.data = data;
  }
};
var RemovedFromCartPushEvent = class {
  constructor(data) {
    this.name = "RemovedFromCart";
    this.data = data;
  }
};
var ModifiedCartPushEvent = class {
  constructor(data) {
    this.name = "ModifiedCart";
    this.data = data;
  }
};
var CartSnapshotPushEvent = class {
  constructor(data) {
    this.name = "CartSnapshot";
    this.data = data;
  }
};
var ProfileTagEventService = class _ProfileTagEventService {
  constructor(winRef, config, baseSiteService, platform) {
    this.winRef = winRef;
    this.config = config;
    this.baseSiteService = baseSiteService;
    this.platform = platform;
    this.subscription = new Subscription();
    this.profileTagDebug = false;
    this.profileTagEvents$ = merge(this.setConsentReference(), this.debugModeChanged());
    this.logger = inject(LoggerService);
    this.initWindow();
    this.setConsentReferenceFromLocalStorage();
  }
  setConsentReferenceFromLocalStorage() {
    if (this.winRef.isBrowser() && this.winRef.localStorage) {
      const profileTagMetadata = JSON.parse(this.winRef.localStorage.getItem("profiletag") || '{"cr":{}}');
      this.subscription.add(this.baseSiteService.getActive().pipe(take(1)).subscribe((baseSite) => {
        this.latestConsentReference = new BehaviorSubject(profileTagMetadata.cr[`${baseSite}-consentReference`]?.consentReference);
      }));
    }
  }
  getProfileTagEvents() {
    return this.profileTagEvents$;
  }
  getConsentReference() {
    if (!this.consentReference$ && this.winRef.nativeWindow) {
      this.consentReference$ = fromEvent(this.winRef.nativeWindow, InternalProfileTagEventNames.CONSENT_REFERENCE_LOADED).pipe(map((event) => event), map((event) => event.detail.consentReference), distinctUntilChanged(), shareReplay(1));
    }
    return this.consentReference$;
  }
  handleConsentWithdrawn() {
    this.latestConsentReference?.next(null);
  }
  addTracker() {
    return this.baseSiteService.getActive().pipe(filter(() => isPlatformBrowser(this.platform)), filter((siteId) => Boolean(siteId)), distinctUntilChanged(), tap(() => this.addScript()), tap((siteId) => this.createConfig(siteId)));
  }
  notifyProfileTagOfEventOccurrence(event) {
    try {
      this.profileTagWindow?.Y_TRACKING?.eventLayer?.push(event);
    } catch (e) {
      this.logger.log(`Unexpected error when calling profiletag push method ${e}`);
    }
  }
  setConsentReference() {
    const consentReference$ = this.getConsentReference();
    return this.winRef.nativeWindow && consentReference$ ? consentReference$.pipe(tap((consentReference) => {
      this.latestConsentReference?.next(consentReference);
    })) : of(null);
  }
  debugModeChanged() {
    return this.winRef.nativeWindow ? fromEvent(this.winRef.nativeWindow, InternalProfileTagEventNames.DEBUG_FLAG_CHANGED).pipe(map((event) => event), tap((event) => this.profileTagDebug = event.detail.debug)) : of();
  }
  createConfig(siteId) {
    const cds = this.config.cds;
    if (cds) {
      const newConfig = __spreadProps(__spreadValues({}, cds.profileTag), {
        tenant: cds.tenant,
        siteId,
        spa: true
      });
      this.exposeConfig(newConfig);
    }
  }
  /*
   * Checks if the script with the given source exists in the document or not.
   */
  isScriptLoaded(scriptSource) {
    return !!this.winRef.document.querySelector(`script[src="${scriptSource}"]`);
  }
  addScript() {
    const javascriptUrl = this.config.cds?.profileTag?.javascriptUrl;
    if (javascriptUrl) {
      if (this.isScriptLoaded(javascriptUrl)) {
        return;
      }
      const profileTagScript = this.winRef.document.createElement("script");
      profileTagScript.type = "text/javascript";
      profileTagScript.async = true;
      profileTagScript.src = javascriptUrl;
      this.winRef.document.getElementsByTagName("head")[0].appendChild(profileTagScript);
    }
  }
  initWindow() {
    if (!isPlatformBrowser(this.platform)) {
      return;
    }
    this.profileTagWindow = this.winRef.nativeWindow;
    this.profileTagWindow.Y_TRACKING = this.profileTagWindow.Y_TRACKING || {};
    this.profileTagWindow.Y_TRACKING.eventLayer = this.profileTagWindow.Y_TRACKING.eventLayer || [];
  }
  exposeConfig(options) {
    const q = this.profileTagWindow.Y_TRACKING.q || [];
    if (q.length !== 0) {
      return;
    }
    q.push([options]);
    this.profileTagWindow.Y_TRACKING.q = q;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static {
    this.ɵfac = function ProfileTagEventService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileTagEventService)(ɵɵinject(WindowRef), ɵɵinject(CdsConfig), ɵɵinject(BaseSiteService), ɵɵinject(PLATFORM_ID));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProfileTagEventService,
      factory: _ProfileTagEventService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileTagEventService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: WindowRef
  }, {
    type: CdsConfig
  }, {
    type: BaseSiteService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var CdsBackendConnector = class _CdsBackendConnector {
  constructor(cdsBackendNotificationAdapter) {
    this.cdsBackendNotificationAdapter = cdsBackendNotificationAdapter;
  }
  notifySuccessfulLogin() {
    return this.cdsBackendNotificationAdapter.notifySuccessfulLogin();
  }
  static {
    this.ɵfac = function CdsBackendConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdsBackendConnector)(ɵɵinject(CdsBackendNotificationAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdsBackendConnector,
      factory: _CdsBackendConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdsBackendConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CdsBackendNotificationAdapter
  }], null);
})();
var LOGIN_EVENTS = new InjectionToken("LOGIN_EVENTS");
var ProfileTagLifecycleService = class _ProfileTagLifecycleService {
  constructor(consentService, config, actionsSubject) {
    this.consentService = consentService;
    this.config = config;
    this.actionsSubject = actionsSubject;
    this.loginEnvelopes$ = inject(LOGIN_EVENTS);
    this.featureConfigService = inject(FeatureConfigService);
  }
  consentChanged() {
    return this.consentService.getConsent(this.config.cds?.consentTemplateId ?? "").pipe(map((profileConsent) => {
      if (profileConsent) {
        return this.consentService.isConsentGiven(profileConsent);
      } else {
        return false;
      }
    }), distinctUntilChanged(), map((granted) => {
      return new ConsentChangedPushEvent(granted);
    }));
  }
  /**
   * Emits true only for unique login envelopes (deduped by timestamp across the app lifetime).
   */
  loginSuccessful() {
    const cdsLoginEventsToken = this.featureConfigService.isEnabled("cdsLoginEventsToken");
    if (cdsLoginEventsToken) {
      return this.loginEnvelopes$.pipe(distinctUntilChanged((a, b) => a.timestamp === b.timestamp), map(() => true));
    }
    return this.actionsSubject.pipe(filter((action) => action.type === authGroup_actions.LOGIN), map(() => true));
  }
  static {
    this.ɵfac = function ProfileTagLifecycleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileTagLifecycleService)(ɵɵinject(ConsentService), ɵɵinject(CdsConfig), ɵɵinject(ActionsSubject));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProfileTagLifecycleService,
      factory: _ProfileTagLifecycleService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileTagLifecycleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConsentService
  }, {
    type: CdsConfig
  }, {
    type: ActionsSubject
  }], null);
})();
var ProfileTagInjectorService = class _ProfileTagInjectorService {
  constructor(profileTagEventTracker, cdsBackendConnector, profileTagLifecycleService) {
    this.profileTagEventTracker = profileTagEventTracker;
    this.cdsBackendConnector = cdsBackendConnector;
    this.profileTagLifecycleService = profileTagLifecycleService;
  }
  track() {
    return this.profileTagEventTracker.addTracker().pipe(switchMap((_) => merge(this.profileTagEventTracker.getProfileTagEvents(), this.notifyEcOfLoginSuccessful()).pipe(map(() => true))));
  }
  notifyEcOfLoginSuccessful() {
    return this.profileTagLifecycleService.loginSuccessful().pipe(switchMap((_) => {
      return this.cdsBackendConnector.notifySuccessfulLogin().pipe(map(() => true));
    }));
  }
  static {
    this.ɵfac = function ProfileTagInjectorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileTagInjectorService)(ɵɵinject(ProfileTagEventService), ɵɵinject(CdsBackendConnector), ɵɵinject(ProfileTagLifecycleService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProfileTagInjectorService,
      factory: _ProfileTagInjectorService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileTagInjectorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProfileTagEventService
  }, {
    type: CdsBackendConnector
  }, {
    type: ProfileTagLifecycleService
  }], null);
})();
var ProfileTagComponent = class _ProfileTagComponent {
  constructor(profileTagInjector) {
    this.profileTagInjector = profileTagInjector;
    this.profileTagEnabled$ = this.profileTagInjector.track();
  }
  static {
    this.ɵfac = function ProfileTagComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileTagComponent)(ɵɵdirectiveInject(ProfileTagInjectorService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProfileTagComponent,
      selectors: [["cx-profiletag"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"]],
      template: function ProfileTagComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ProfileTagComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.profileTagEnabled$));
        }
      },
      dependencies: [NgIf, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileTagComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "cx-profiletag",
      template: `
    <ng-container *ngIf="profileTagEnabled$ | async"></ng-container>
  `,
      standalone: false
    }]
  }], () => [{
    type: ProfileTagInjectorService
  }], null);
})();
var ProfileTagCmsModule = class _ProfileTagCmsModule {
  static {
    this.ɵfac = function ProfileTagCmsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileTagCmsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProfileTagCmsModule,
      declarations: [ProfileTagComponent],
      imports: [CommonModule],
      exports: [ProfileTagComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ProfileTagComponent: {
            component: ProfileTagComponent,
            deferLoading: DeferLoadingStrategy.INSTANT
          }
        }
      })],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileTagCmsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ProfileTagComponent: {
            component: ProfileTagComponent,
            deferLoading: DeferLoadingStrategy.INSTANT
          }
        }
      })],
      exports: [ProfileTagComponent],
      declarations: [ProfileTagComponent]
    }]
  }], null, null);
})();
var ConsentReferenceInterceptor = class _ConsentReferenceInterceptor {
  constructor(profileTagEventTracker, occEndpoints) {
    this.profileTagEventTracker = profileTagEventTracker;
    this.occEndpoints = occEndpoints;
  }
  intercept(request, next) {
    if (!this.profileTagEventTracker.latestConsentReference || !this.profileTagEventTracker.latestConsentReference.value || !this.isOccUrl(request.url)) {
      return next.handle(request);
    }
    const cdsHeaders = request.headers.set("X-Consent-Reference", this.profileTagEventTracker.latestConsentReference.value);
    const cdsRequest = request.clone({
      headers: cdsHeaders
    });
    return next.handle(cdsRequest);
  }
  isOccUrl(url) {
    return url.includes(this.occEndpoints.getBaseUrl());
  }
  static {
    this.ɵfac = function ConsentReferenceInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsentReferenceInterceptor)(ɵɵinject(ProfileTagEventService), ɵɵinject(OccEndpointsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConsentReferenceInterceptor,
      factory: _ConsentReferenceInterceptor.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsentReferenceInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProfileTagEventService
  }, {
    type: OccEndpointsService
  }], null);
})();
var DebugInterceptor = class _DebugInterceptor {
  constructor(profileTagEventTracker, occEndpoints) {
    this.profileTagEventTracker = profileTagEventTracker;
    this.occEndpoints = occEndpoints;
  }
  intercept(request, next) {
    if (!this.isOccUrl(request.url)) {
      return next.handle(request);
    }
    const cdsHeaders = request.headers.set("X-Profile-Tag-Debug", this.profileTagEventTracker.profileTagDebug.toString());
    const cdsRequest = request.clone({
      headers: cdsHeaders
    });
    return next.handle(cdsRequest);
  }
  isOccUrl(url) {
    return url.includes(this.occEndpoints.getBaseUrl());
  }
  static {
    this.ɵfac = function DebugInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DebugInterceptor)(ɵɵinject(ProfileTagEventService), ɵɵinject(OccEndpointsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DebugInterceptor,
      factory: _DebugInterceptor.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DebugInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProfileTagEventService
  }, {
    type: OccEndpointsService
  }], null);
})();
function provideLoginEventsTracking() {
  const loginEvents$ = new ReplaySubject(1);
  return [{
    provide: LOGIN_EVENTS,
    useValue: loginEvents$.asObservable()
  }, provideAppInitializer(() => {
    const actionsSubject = inject(ActionsSubject);
    actionsSubject.pipe(filter((action) => action.type === authGroup_actions.LOGIN), tap((action) => {
      const envelope = {
        action,
        timestamp: Date.now()
      };
      loginEvents$.next(envelope);
    }), takeUntilDestroyed()).subscribe();
  })];
}
var ProfileTagModule = class _ProfileTagModule {
  static {
    this.ɵfac = function ProfileTagModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileTagModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProfileTagModule,
      imports: [ProfileTagCmsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useExisting: ConsentReferenceInterceptor,
        multi: true
      }, {
        provide: HTTP_INTERCEPTORS,
        useExisting: DebugInterceptor,
        multi: true
      }, {
        provide: CdsBackendNotificationAdapter,
        useClass: OccBackendNotification
      }, ...provideLoginEventsTracking()],
      imports: [ProfileTagCmsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileTagModule, [{
    type: NgModule,
    args: [{
      imports: [ProfileTagCmsModule],
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useExisting: ConsentReferenceInterceptor,
        multi: true
      }, {
        provide: HTTP_INTERCEPTORS,
        useExisting: DebugInterceptor,
        multi: true
      }, {
        provide: CdsBackendNotificationAdapter,
        useClass: OccBackendNotification
      }, ...provideLoginEventsTracking()]
    }]
  }], null, null);
})();
var ProfileTagPushEventsService = class _ProfileTagPushEventsService {
  constructor(eventService, personalizationContextService, activeCartFacade) {
    this.eventService = eventService;
    this.personalizationContextService = personalizationContextService;
    this.activeCartFacade = activeCartFacade;
    this.pushEvents$ = merge(this.categoryPageVisited(), this.productDetailsPageView(), this.searchResultsChanged(), this.homePageVisitedEvent(), this.cartPageVisitedEvent(), this.navigatedEvent(), this.orderConfirmationPageVisited(), this.addedToCart(), this.removedFromCart(), this.modifiedCart(), this.cartChangedEvent());
  }
  /**
   * Returns a push event emitting observable that emits all converted events emitted by the event or the active cart service.
   * These events are enriched with segments and actions from the latest personalization context.
   *
   * @returns an observable emitting profiletag push events
   */
  getPushEvents() {
    return this.pushEvents$.pipe(withLatestFrom(merge(of({
      segments: void 0,
      actions: void 0
    }), this.personalizationContextService.getPersonalizationContext())), map(([item, personalizationContext]) => {
      item.data = item.data ? item.data : {};
      item.data.segments = personalizationContext?.segments;
      item.data.actions = personalizationContext?.actions;
      return item;
    }));
  }
  /**
   * Adds a new push event emitting observable to this service. This observable will be merged with the internal one.
   * This method can be used to extend the functionality of this service at runtime.
   *
   * @param event an observable emitting profiltag push events
   */
  addPushEvent(event) {
    this.pushEvents$ = merge(this.pushEvents$, event);
  }
  /**
   * Emits the category page visited event.
   *
   * @returns an observable emitting events that describe category page visits in a profiltag compliant way
   * @see CategoryPageResultsEvent
   * @see CategoryViewPushEvent
   */
  categoryPageVisited() {
    return this.eventService.get(CategoryPageResultsEvent).pipe(withLatestFrom(this.eventService.get(PageEvent).pipe(
      startWith(null),
      // https://github.com/ReactiveX/rxjs/issues/4772
      pairwise()
    )), distinctUntilChanged(([previouslyEmittedCategoryPage], [currentCategoryPage, [previousRoute, currentRoute]]) => {
      return previouslyEmittedCategoryPage.categoryCode === currentCategoryPage.categoryCode && previousRoute.navigation.semanticRoute === currentRoute.navigation.semanticRoute;
    }), map(([categoryPageEvent]) => new CategoryViewPushEvent({
      productCategory: categoryPageEvent.categoryCode,
      productCategoryName: categoryPageEvent.categoryName
    })));
  }
  /**
   * Listens to SearchPageResultsEvent events
   *
   * @returns an observable emitting events that describe keyword search page visits in a profiltag compliant way
   * @see SearchPageResultsEvent
   * @see KeywordSearchPushEvent
   */
  searchResultsChanged() {
    return this.eventService.get(SearchPageResultsEvent).pipe(distinctUntilKeyChanged("searchTerm"), map((searchEvent) => new KeywordSearchPushEvent({
      searchTerm: searchEvent.searchTerm,
      numResults: searchEvent.numberOfResults
    })));
  }
  /**
   * Listens to ProductDetailsPageEvent events
   *
   * @returns an observable emitting events that describe product detail page visits in a profiltag compliant way
   * @see ProductDetailsPageEvent
   * @see ProductViewPushEvent
   */
  productDetailsPageView() {
    return this.eventService.get(ProductDetailsPageEvent).pipe(map((item) => new ProductViewPushEvent({
      productSku: item.code,
      productName: item.name,
      productPrice: item.price ? item.price.value : void 0,
      productCategoryName: item.categories ? item.categories[item.categories.length - 1].name : void 0,
      productCategory: item.categories ? item.categories[item.categories.length - 1].code : void 0,
      categories: this.categoriesToIds(item.categories)
    })));
  }
  /**
   * Listens to PageVisited events
   *
   * @returns an observable emitting events that describe page visits in a profiltag compliant way
   * @see PageVisited
   * @see NavigatedPushEvent
   */
  navigatedEvent() {
    return this.eventService.get(PageEvent).pipe(map(() => new NavigatedPushEvent()));
  }
  /**
   * Listens to CartPageVisited events
   *
   * @returns an observable emitting events that describe cart page visits in a profiltag compliant way
   * @see CartPageVisited
   * @see CartViewPushEvent
   */
  cartPageVisitedEvent() {
    return this.eventService.get(CartPageEvent).pipe(map(() => new CartViewPushEvent()));
  }
  /**
   * Listens to HomePageEvent events
   *
   * @returns an observable emitting events that describe home page visits in a profiltag compliant way
   * @see HomePageEvent
   * @see HomePageViewPushEvent
   */
  homePageVisitedEvent() {
    return this.eventService.get(HomePageEvent).pipe(map(() => new HomePageViewPushEvent()));
  }
  /**
   * Listens to OrderPlacedEvent events
   *
   * @returns an observable emitting events that describe order confirmation page visits in a profiltag compliant way
   * @see OrderPlacedEvent
   * @see OrderConfirmationPushEvent
   */
  orderConfirmationPageVisited() {
    return this.eventService.get(OrderPlacedEvent).pipe(map(() => new OrderConfirmationPushEvent()));
  }
  /**
   * Listens to @CartAddEntrySuccessEvent events, transforms them to @AddedToCartPushEvent .
   *
   * @returns an observable emitting @AddedToCartPushEvent events
   * @see CartAddEntrySuccessEvent
   * @see AddedToCartPushEvent
   */
  addedToCart() {
    return this.eventService.get(CartAddEntrySuccessEvent).pipe(map((item) => new AddedToCartPushEvent({
      productQty: item.quantityAdded,
      productSku: item.entry.product.code,
      productName: item.entry.product.name,
      cartId: item.cartId,
      cartCode: item.cartCode,
      productPrice: this.getProductPrice(item),
      categories: this.categoriesToIds(item.entry.product.categories),
      productCategoryName: item.entry.product.categories ? item.entry.product.categories[item.entry.product.categories.length - 1].name : void 0,
      productCategory: item.entry.product.categories ? item.entry.product.categories[item.entry.product.categories.length - 1].code : void 0
    })));
  }
  /**
   * Listens to @CartRemoveEntrySuccessEvent events, transforms them to @RemovedFromCartPushEvent
   *
   * @returns an observable emitting @RemovedFromCartPushEvent events
   * @see CartRemoveEntrySuccessEvent
   * @see RemovedFromCartPushEvent
   */
  removedFromCart() {
    return this.eventService.get(CartRemoveEntrySuccessEvent).pipe(map((item) => new RemovedFromCartPushEvent({
      productSku: item.entry.product.code,
      productName: item.entry.product.name,
      cartId: item.cartId,
      cartCode: item.cartCode,
      productCategoryName: item.entry.product.categories ? item.entry.product.categories[item.entry.product.categories.length - 1].name : void 0,
      productCategory: item.entry.product.categories ? item.entry.product.categories[item.entry.product.categories.length - 1].code : void 0,
      categories: this.categoriesToIds(item.entry.product.categories)
    })));
  }
  /**
   * Listens to @CartUpdateEntrySuccessEvent events, transforms them to @ModifiedCartPushEvent
   *
   * @returns an observable emitting @ModifiedCartPushEvent events
   * @see CartUpdateEntrySuccessEvent
   * @see ModifiedCartPushEvent
   */
  modifiedCart() {
    return this.eventService.get(CartUpdateEntrySuccessEvent).pipe(map((item) => new ModifiedCartPushEvent({
      productQty: item.quantity,
      productSku: item.entry.product.code,
      productName: item.entry.product.name,
      cartId: item.cartId,
      cartCode: item.cartCode,
      categories: this.categoriesToIds(item.entry.product.categories),
      productCategoryName: item.entry.product.categories ? item.entry.product.categories[item.entry.product.categories.length - 1].name : void 0,
      productCategory: item.entry.product.categories ? item.entry.product.categories[item.entry.product.categories.length - 1].code : void 0
    })));
  }
  /**
   * Listens to @CartAddEntrySuccessEvent , @CartUpdateEntrySuccessEvent and @CartRemoveEntrySuccessEvent events,
   * transforms them to @CartSnapshotPushEvent whenever there is an activity on the cart.
   *
   * @returns an observable emitting @CartSnapshotPushEvent events
   * @see CartAddEntrySuccessEvent
   * @see CartUpdateEntrySuccessEvent
   * @see CartRemoveEntrySuccessEvent
   * @see MergeCartSuccessEvent
   * @see CartSnapshotPushEvent
   */
  cartChangedEvent() {
    return merge(this.eventService.get(CartAddEntrySuccessEvent), this.eventService.get(CartUpdateEntrySuccessEvent), this.eventService.get(CartRemoveEntrySuccessEvent), this.eventService.get(MergeCartSuccessEvent)).pipe(switchMap(() => this.activeCartFacade.takeActive()), map((cart) => new CartSnapshotPushEvent({
      cart
    })));
  }
  getProductPrice(event) {
    if (!event.entry.totalPrice || !event.entry.totalPrice.value || !event.entry.quantity) {
      return void 0;
    }
    return parseFloat((event.entry.totalPrice.value / event.entry.quantity).toFixed(2));
  }
  categoriesToIds(categories) {
    return categories.map((category) => category.code);
  }
  static {
    this.ɵfac = function ProfileTagPushEventsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileTagPushEventsService)(ɵɵinject(EventService), ɵɵinject(PersonalizationContextService), ɵɵinject(ActiveCartFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProfileTagPushEventsService,
      factory: _ProfileTagPushEventsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileTagPushEventsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }, {
    type: PersonalizationContextService
  }, {
    type: ActiveCartFacade
  }], null);
})();
var TrackingService = class _TrackingService {
  constructor(profileTagLifecycleService, profileTagPushEventsService, profileTagEventTracker) {
    this.profileTagLifecycleService = profileTagLifecycleService;
    this.profileTagPushEventsService = profileTagPushEventsService;
    this.profileTagEventTracker = profileTagEventTracker;
  }
  static factory(trackingService) {
    const factoryFunction = () => {
      trackingService.trackEvents();
    };
    return factoryFunction;
  }
  trackEvents() {
    this.profileTagPushEventsService.getPushEvents().pipe(
      withLatestFrom(this.profileTagLifecycleService.consentChanged().pipe(tap((event) => {
        this.profileTagEventTracker.notifyProfileTagOfEventOccurrence(event);
      }))),
      filter(([_event, consentChanged]) => consentChanged.data.granted),
      //don't notify other events until consent is granted
      tap(([event]) => {
        this.profileTagEventTracker.notifyProfileTagOfEventOccurrence(event);
      })
    ).subscribe();
  }
  static {
    this.ɵfac = function TrackingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TrackingService)(ɵɵinject(ProfileTagLifecycleService), ɵɵinject(ProfileTagPushEventsService), ɵɵinject(ProfileTagEventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TrackingService,
      factory: _TrackingService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProfileTagLifecycleService
  }, {
    type: ProfileTagPushEventsService
  }, {
    type: ProfileTagEventService
  }], null);
})();
var TrackingModule = class _TrackingModule {
  static {
    this.ɵfac = function TrackingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TrackingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TrackingModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        multi: true,
        provide: APP_INITIALIZER,
        useFactory: TrackingService.factory,
        deps: [TrackingService]
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackingModule, [{
    type: NgModule,
    args: [{
      providers: [{
        multi: true,
        provide: APP_INITIALIZER,
        useFactory: TrackingService.factory,
        deps: [TrackingService]
      }]
    }]
  }], null, null);
})();
var CdsMerchandisingUserContextService = class _CdsMerchandisingUserContextService {
  constructor(routingService, productSearchService, profileTagEventService, profileTagLifecycleService, facetService) {
    this.routingService = routingService;
    this.productSearchService = productSearchService;
    this.profileTagEventService = profileTagEventService;
    this.profileTagLifecycleService = profileTagLifecycleService;
    this.facetService = facetService;
  }
  getUserContext() {
    return combineLatest([this.getConsentReferenceContext(), this.getPageContext(), this.getSearchContext()]).pipe(map(([consentContext, pageContext, searchContext]) => {
      const result = __spreadValues(__spreadValues({}, consentContext), pageContext);
      if (!pageContext.products) {
        result["facets"] = searchContext.facets;
        result["searchPhrase"] = searchContext.searchPhrase;
      }
      return result;
    }), distinctUntilChanged((prev, curr) => prev.facets === curr.facets && prev.searchPhrase === curr.searchPhrase && prev.consentReference === curr.consentReference && prev.category === curr.category && prev.products === curr.products));
  }
  getConsentReferenceContext() {
    return this.profileTagLifecycleService.consentChanged().pipe(switchMap((changed) => {
      if (changed.data.granted) {
        return this.profileTagEventService.getConsentReference().pipe(map((consentReference) => ({
          consentReference
        })));
      } else {
        this.profileTagEventService.handleConsentWithdrawn();
        return of({
          consentReference: ""
        });
      }
    }));
  }
  getPageContext() {
    return this.routingService.getPageContext().pipe(map((pageContext) => {
      const result = {};
      if (pageContext.type === PageType.PRODUCT_PAGE) {
        result.products = [pageContext.id];
      } else if (pageContext.type === PageType.CATEGORY_PAGE) {
        result.category = pageContext.id;
      }
      return result;
    }));
  }
  getSearchContext() {
    return combineLatest([this.productSearchService.getResults().pipe(startWith({})), this.facetService.facetList$.pipe(startWith({}))]).pipe(map(([searchResult, facetList]) => {
      const facets = facetList?.activeFacets?.map((facet) => `${facet.facetCode}:${facet.facetValueCode}`).join(":");
      return {
        facets: facets || void 0,
        searchPhrase: searchResult.freeTextSearch || void 0
      };
    }), distinctUntilChanged((prev, curr) => prev.facets === curr.facets && prev.searchPhrase === curr.searchPhrase));
  }
  static {
    this.ɵfac = function CdsMerchandisingUserContextService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdsMerchandisingUserContextService)(ɵɵinject(RoutingService), ɵɵinject(ProductSearchService), ɵɵinject(ProfileTagEventService), ɵɵinject(ProfileTagLifecycleService), ɵɵinject(FacetService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdsMerchandisingUserContextService,
      factory: _CdsMerchandisingUserContextService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdsMerchandisingUserContextService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: ProductSearchService
  }, {
    type: ProfileTagEventService
  }, {
    type: ProfileTagLifecycleService
  }, {
    type: FacetService
  }], null);
})();
var CdsMerchandisingSiteContextService = class _CdsMerchandisingSiteContextService {
  constructor(baseSiteService, languageService) {
    this.baseSiteService = baseSiteService;
    this.languageService = languageService;
  }
  getSiteContext() {
    return combineLatest([this.baseSiteService.getActive(), this.languageService.getActive()]).pipe(map(([site, language]) => {
      const siteContext = {
        site,
        language
      };
      return siteContext;
    }));
  }
  static {
    this.ɵfac = function CdsMerchandisingSiteContextService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdsMerchandisingSiteContextService)(ɵɵinject(BaseSiteService), ɵɵinject(LanguageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdsMerchandisingSiteContextService,
      factory: _CdsMerchandisingSiteContextService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdsMerchandisingSiteContextService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: BaseSiteService
  }, {
    type: LanguageService
  }], null);
})();
var CdsMerchandisingProductService = class _CdsMerchandisingProductService {
  constructor(strategyConnector, merchandisingUserContextService, merchandisingSiteContextService) {
    this.strategyConnector = strategyConnector;
    this.merchandisingUserContextService = merchandisingUserContextService;
    this.merchandisingSiteContextService = merchandisingSiteContextService;
  }
  loadProductsForStrategy(strategyId, numberToDisplay) {
    return combineLatest([this.merchandisingSiteContextService.getSiteContext(), this.merchandisingUserContextService.getUserContext()]).pipe(debounceTime(0), map(([siteContext, userContext]) => {
      return {
        queryParams: __spreadProps(__spreadValues({}, siteContext), {
          products: userContext.products,
          category: userContext.category,
          facets: userContext.facets,
          searchPhrase: userContext.searchPhrase,
          pageSize: numberToDisplay
        }),
        headers: {
          consentReference: userContext.consentReference
        }
      };
    }), mergeMap((request) => this.strategyConnector.loadProductsForStrategy(strategyId, request).pipe(map((products) => ({
      request,
      products
    })))));
  }
  static {
    this.ɵfac = function CdsMerchandisingProductService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdsMerchandisingProductService)(ɵɵinject(MerchandisingStrategyConnector), ɵɵinject(CdsMerchandisingUserContextService), ɵɵinject(CdsMerchandisingSiteContextService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdsMerchandisingProductService,
      factory: _CdsMerchandisingProductService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdsMerchandisingProductService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: MerchandisingStrategyConnector
  }, {
    type: CdsMerchandisingUserContextService
  }, {
    type: CdsMerchandisingSiteContextService
  }], null);
})();
var DEFAULT_CAROUSEL_VIEWPORT_THRESHOLD = 80;
var MerchandisingCarouselComponentService = class _MerchandisingCarouselComponentService {
  constructor(cdsMerchandisingProductService, productService, profileTagEventService, cdsConfig) {
    this.cdsMerchandisingProductService = cdsMerchandisingProductService;
    this.productService = productService;
    this.profileTagEventService = profileTagEventService;
    this.cdsConfig = cdsConfig;
  }
  getMerchandisingCaourselViewportThreshold(cmsComponent) {
    const viewportPercentage = cmsComponent.viewportPercentage ?? this.cdsConfig?.cds?.merchandising?.defaultCarouselViewportThreshold ?? DEFAULT_CAROUSEL_VIEWPORT_THRESHOLD;
    return viewportPercentage / 100;
  }
  getMerchandisingCarouselModel(cmsComponent) {
    return this.cdsMerchandisingProductService.loadProductsForStrategy(cmsComponent.strategy, cmsComponent.numberToDisplay).pipe(map((strategy) => {
      const metadata = this.getCarouselMetadata(strategy.products, cmsComponent);
      const items$ = this.mapStrategyProductsToCarouselItems(strategy.products);
      const productIds = this.mapStrategyProductsToProductIds(strategy.products);
      const id = this.getMerchandisingCarouselModelId(cmsComponent, strategy.request);
      return {
        id,
        items$,
        productIds,
        metadata,
        title: cmsComponent.title,
        backgroundColor: cmsComponent.backgroundColour,
        textColor: cmsComponent.textColour
      };
    }));
  }
  sendCarouselViewEvent(lastSendModelId, merchandisingCarouselModel$) {
    return merchandisingCarouselModel$.pipe(filter((model) => model.id !== lastSendModelId), tap((merchandisingCarouselModel) => {
      const carouselEvent = this.getCarouselEventFromCarouselModel(merchandisingCarouselModel);
      this.profileTagEventService.notifyProfileTagOfEventOccurrence(new MerchandisingCarouselViewedEvent(carouselEvent, merchandisingCarouselModel.productIds));
    }));
  }
  sendCarouselItemClickedEvent(merchandisingCarouselModel, clickedProduct) {
    const carouselEvent = this.getCarouselEventFromCarouselModel(merchandisingCarouselModel);
    carouselEvent.metadata = __spreadValues(__spreadValues({}, carouselEvent.metadata), clickedProduct.metadata);
    this.profileTagEventService.notifyProfileTagOfEventOccurrence(new MerchandisingCarouselClickedEvent(carouselEvent, clickedProduct.metadata.slot, clickedProduct.code, clickedProduct.images?.PRIMARY["product"]?.url));
  }
  getCarouselMetadata(strategyProducts, componentData) {
    const metadata = strategyProducts.metadata ?? {};
    if (strategyProducts.products && strategyProducts.products.length) {
      metadata.slots = strategyProducts.products.length;
    }
    metadata.title = componentData.title;
    metadata.name = componentData.name;
    metadata.strategyid = componentData.strategy;
    metadata.id = componentData.uid;
    return metadata;
  }
  mapStrategyProductsToCarouselItems(strategyProducts) {
    return strategyProducts && strategyProducts.products ? strategyProducts.products.map((strategyProduct, index) => this.productService.get(strategyProduct.id, [ProductScope.DETAILS, ProductScope.PRICE]).pipe(map((product) => __spreadProps(__spreadValues({}, product), {
      metadata: this.getCarouselItemMetadata(strategyProduct, index + 1)
    })))) : [EMPTY];
  }
  mapStrategyProductsToProductIds(strategyProducts) {
    return strategyProducts && strategyProducts.products ? strategyProducts.products.map((strategyProduct) => strategyProduct.id) : [];
  }
  getMerchandisingCarouselModelId(cmsComponent, request) {
    return cmsComponent.uid + "_" + cmsComponent.strategy + "_" + JSON.stringify(request.queryParams);
  }
  getCarouselItemMetadata(strategyProduct, index) {
    const metadata = strategyProduct.metadata ?? {};
    metadata.slot = index;
    metadata.id = strategyProduct.id;
    return metadata;
  }
  getCarouselEventFromCarouselModel(carouselModel) {
    return {
      carouselId: carouselModel.metadata.id,
      carouselName: carouselModel.metadata.name,
      strategyId: carouselModel.metadata.strategyid,
      metadata: carouselModel.metadata
    };
  }
  static {
    this.ɵfac = function MerchandisingCarouselComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MerchandisingCarouselComponentService)(ɵɵinject(CdsMerchandisingProductService), ɵɵinject(ProductService), ɵɵinject(ProfileTagEventService), ɵɵinject(CdsConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _MerchandisingCarouselComponentService,
      factory: _MerchandisingCarouselComponentService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MerchandisingCarouselComponentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CdsMerchandisingProductService
  }, {
    type: ProductService
  }, {
    type: ProfileTagEventService
  }, {
    type: CdsConfig
  }], null);
})();
var MerchandisingCarouselComponent = class _MerchandisingCarouselComponent {
  constructor(componentData, merchandisingCarouselComponentService, routingService, intersectionService, el) {
    this.componentData = componentData;
    this.merchandisingCarouselComponentService = merchandisingCarouselComponentService;
    this.routingService = routingService;
    this.intersectionService = intersectionService;
    this.el = el;
    this.title$ = this.componentData.data$.pipe(filter((data) => Boolean(data)), map((data) => data.title));
    this.fetchProducts$ = this.componentData.data$.pipe(filter((data) => Boolean(data)), distinctUntilKeyChanged("strategy"), switchMap((data) => this.merchandisingCarouselComponentService.getMerchandisingCarouselModel(data)), tap((data) => {
      if (typeof data.backgroundColor === "string") {
        this.el.nativeElement.style.setProperty("--cx-color-background", data.backgroundColor);
      }
      if (typeof data.textColor === "string") {
        this.el.nativeElement.style.setProperty("--cx-color-text", data.textColor);
      }
    }), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
    this.intersection$ = this.fetchProducts$.pipe(take(1), switchMap(() => this.routingService.getPageContext().pipe(switchMap(() => this.componentData.data$), map((data) => this.merchandisingCarouselComponentService.getMerchandisingCaourselViewportThreshold(data)), switchMap((threshold) => this.intersectionService.isIntersected(this.el.nativeElement, {
      threshold
    }).pipe(filter((carouselIsVisible) => carouselIsVisible), switchMap((_) => {
      return this.merchandisingCarouselComponentService.sendCarouselViewEvent(this.lastEventModelId, this.fetchProducts$).pipe(tap((model) => {
        this.lastEventModelId = model.id;
      }), switchMap(() => EMPTY));
    }))))));
    this.merchandisingCarouselModel$ = using(() => this.intersection$.subscribe(), () => this.fetchProducts$);
    this.lastEventModelId = "";
  }
  onMerchandisingCarouselItemClick(merchandisingCarouselModel, clickedProduct) {
    this.merchandisingCarouselComponentService.sendCarouselItemClickedEvent(merchandisingCarouselModel, clickedProduct);
  }
  static {
    this.ɵfac = function MerchandisingCarouselComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MerchandisingCarouselComponent)(ɵɵdirectiveInject(CmsComponentData), ɵɵdirectiveInject(MerchandisingCarouselComponentService), ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(IntersectionService), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MerchandisingCarouselComponent,
      selectors: [["cx-merchandising-carousel"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["carouselItem", ""], ["outOfStock", ""], [4, "ngIf"], [1, "data-cx-merchandising-carousel", 3, "cxAttributes", "cxAttributesNamePrefix"], ["itemWidth", "285px", 3, "items", "title", "template"], [1, "data-cx-merchandising-product", 3, "cxAttributes", "cxAttributesNamePrefix"], ["tabindex", "0", 3, "click", "routerLink"], ["format", "product", 3, "container", 4, "ngIf"], [1, "price"], ["class", "price", 4, "ngIf", "ngIfElse"], ["format", "product", 3, "container"]],
      template: function MerchandisingCarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, MerchandisingCarouselComponent_ng_container_0_Template, 6, 7, "ng-container", 2);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.merchandisingCarouselModel$));
        }
      },
      dependencies: [NgIf, AttributesDirective, CarouselComponent, MediaComponent, RouterLink, AsyncPipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MerchandisingCarouselComponent, [{
    type: Component,
    args: [{
      selector: "cx-merchandising-carousel",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container
  *ngIf="merchandisingCarouselModel$ | async as merchandisingCarouselModel"
>
  <div
    class="data-cx-merchandising-carousel"
    [cxAttributes]="merchandisingCarouselModel.metadata"
    [cxAttributesNamePrefix]="'data-cx-merchandising-carousel'"
  ></div>
  <cx-carousel
    [items]="merchandisingCarouselModel.items$"
    [title]="title$ | async"
    [template]="carouselItem"
    itemWidth="285px"
  >
  </cx-carousel>

  <ng-template #carouselItem let-item="item">
    <div
      class="data-cx-merchandising-product"
      [cxAttributes]="item.metadata"
      [cxAttributesNamePrefix]="'data-cx-merchandising-product'"
    ></div>
    <a
      tabindex="0"
      [routerLink]="{ cxRoute: 'product', params: item } | cxUrl"
      (click)="
        onMerchandisingCarouselItemClick(merchandisingCarouselModel, item)
      "
    >
      <cx-media
        *ngIf="item.images?.PRIMARY"
        [container]="item.images.PRIMARY"
        format="product"
      >
      </cx-media>
      <h4>{{ item.name }}</h4>
      <div class="price">
        {{ item.price?.formattedValue }}
      </div>
      <div class="price" *ngIf="item.stock?.stockLevel > 0; else outOfStock">
        {{ item.stock?.stockLevelStatus }} : {{ item.stock?.stockLevel }}
      </div>
      <ng-template #outOfStock>
        <div class="price">
          {{ item.stock?.stockLevelStatus }}
        </div>
      </ng-template>
    </a>
  </ng-template>
</ng-container>
`
    }]
  }], () => [{
    type: CmsComponentData
  }, {
    type: MerchandisingCarouselComponentService
  }, {
    type: RoutingService
  }, {
    type: IntersectionService
  }, {
    type: ElementRef
  }], null);
})();
var MerchandisingCarouselCmsModule = class _MerchandisingCarouselCmsModule {
  static {
    this.ɵfac = function MerchandisingCarouselCmsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MerchandisingCarouselCmsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _MerchandisingCarouselCmsModule,
      declarations: [MerchandisingCarouselComponent],
      imports: [CommonModule, AttributesModule, CarouselModule, MediaModule, RouterModule, UrlModule],
      exports: [MerchandisingCarouselComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          MerchandisingCarouselComponent: {
            component: MerchandisingCarouselComponent
          }
        }
      })],
      imports: [CommonModule, AttributesModule, CarouselModule, MediaModule, RouterModule, UrlModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MerchandisingCarouselCmsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AttributesModule, CarouselModule, MediaModule, RouterModule, UrlModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          MerchandisingCarouselComponent: {
            component: MerchandisingCarouselComponent
          }
        }
      })],
      declarations: [MerchandisingCarouselComponent],
      exports: [MerchandisingCarouselComponent]
    }]
  }], null, null);
})();
var MerchandisingModule = class _MerchandisingModule {
  static {
    this.ɵfac = function MerchandisingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MerchandisingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _MerchandisingModule,
      imports: [MerchandisingCarouselCmsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: MerchandisingStrategyAdapter,
        useClass: CdsMerchandisingStrategyAdapter
      }],
      imports: [MerchandisingCarouselCmsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MerchandisingModule, [{
    type: NgModule,
    args: [{
      imports: [MerchandisingCarouselCmsModule],
      providers: [{
        provide: MerchandisingStrategyAdapter,
        useClass: CdsMerchandisingStrategyAdapter
      }]
    }]
  }], null, null);
})();
var RecentSearchesService = class _RecentSearchesService {
  constructor(winRef) {
    this.winRef = winRef;
    this.recentSearchesSource = new ReplaySubject();
    this.recentSearches$ = this.recentSearchesSource.asObservable();
    if (this.winRef.isBrowser()) {
      this.addRecentSearchesListener();
    }
  }
  checkAvailability() {
    return interval(250).pipe(concatMap((_) => of(this.winRef.nativeWindow?.Y_TRACKING)), map((result) => !!result?.recentSearches), take(100), takeWhile((val) => !val, true), last());
  }
  addRecentSearchesListener() {
    this.checkAvailability().pipe(take(1)).subscribe((result) => {
      if (result) {
        const recentPhrases = this.winRef.nativeWindow?.Y_TRACKING?.recentSearches?.getPhrases();
        if (recentPhrases) {
          this.recentSearchesSource.next(recentPhrases);
          this.winRef.nativeWindow?.Y_TRACKING?.recentSearches?.addListener((recentSearches) => {
            this.recentSearchesSource.next(recentSearches);
          });
        }
      }
    });
  }
  static {
    this.ɵfac = function RecentSearchesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RecentSearchesService)(ɵɵinject(WindowRef));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RecentSearchesService,
      factory: _RecentSearchesService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecentSearchesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: WindowRef
  }], null);
})();
var MAX_RECENT_SEARCHES = 5;
var RecentSearchesComponent = class _RecentSearchesComponent {
  constructor(outletContext) {
    this.outletContext = outletContext;
    this.recentSearchesService = inject(RecentSearchesService);
    this.searchBoxComponentService = inject(SearchBoxComponentService);
  }
  ngOnInit() {
    this.result$ = combineLatest([this.outletContext?.context$, this.recentSearchesService.recentSearches$]).pipe(map(([context, recentSearches]) => recentSearches.filter((phrase) => phrase.toLowerCase().indexOf(context.search.toLowerCase()) >= 0).slice(0, context.maxRecentSearches ?? MAX_RECENT_SEARCHES)), tap((results) => {
      this.searchBoxComponentService.setRecentSearches(!!results.length);
    }));
    this.outletContext$ = this.outletContext.context$;
  }
  preventDefault(ev) {
    ev.preventDefault();
  }
  updateChosenWord(chosenWord) {
    this.searchBoxComponentService.changeSelectedWord(chosenWord);
  }
  shareEvent(event) {
    if (!event) {
      throw new Error("Missing Event");
    }
    this.searchBoxComponentService.shareEvent(event);
  }
  static {
    this.ɵfac = function RecentSearchesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RecentSearchesComponent)(ɵɵdirectiveInject(OutletContextData, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _RecentSearchesComponent,
      selectors: [["cx-recent-searches"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "recent-searches"], ["tabindex", "0", "role", "listbox", 3, "ariaLabel"], [4, "ngFor", "ngForOf"], ["role", "option", 3, "mousedown", "keydown.arrowup", "keydown.arrowdown", "keydown.arrowleft", "keydown.arrowright", "keydown.enter", "keydown.escape", "blur", "click", "innerHTML", "routerLink"]],
      template: function RecentSearchesComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, RecentSearchesComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.result$));
        }
      },
      dependencies: [NgForOf, NgIf, RouterLink, AsyncPipe, TranslatePipe, HighlightPipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecentSearchesComponent, [{
    type: Component,
    args: [{
      selector: "cx-recent-searches",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="result$ | async as results">
  <ng-container *ngIf="results?.length">
    <div class="recent-searches">
      <h3>
        {{ 'searchBox.recentSearches' | cxTranslate }}
      </h3>
      <ul
        tabindex="0"
        [ariaLabel]="'cdsRecentSearches.ariaRecentSearches' | cxTranslate"
        role="listbox"
      >
        <li *ngFor="let recentSearch of results">
          <a
            role="option"
            [innerHTML]="
              recentSearch
                | cxHighlight: (outletContext$ | async)?.search : false
            "
            [routerLink]="
              {
                cxRoute: 'search',
                params: { query: recentSearch },
              } | cxUrl
            "
            (mousedown)="$event.preventDefault()"
            (keydown.arrowup)="shareEvent($any($event))"
            (keydown.arrowdown)="shareEvent($any($event))"
            (keydown.arrowleft)="shareEvent($any($event))"
            (keydown.arrowright)="shareEvent($any($event))"
            (keydown.enter)="shareEvent($any($event))"
            (keydown.escape)="shareEvent($any($event))"
            (blur)="shareEvent($any($event))"
            (click)="updateChosenWord(recentSearch)"
          >
          </a>
        </li>
      </ul>
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: OutletContextData,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var RecentSearchesModule = class _RecentSearchesModule {
  static {
    this.ɵfac = function RecentSearchesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RecentSearchesModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RecentSearchesModule,
      declarations: [RecentSearchesComponent],
      imports: [CommonModule, I18nModule, SearchBoxModule, UrlModule, RouterModule],
      exports: [RecentSearchesComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideOutlet({
        id: SearchBoxOutlets.RECENT_SEARCHES,
        component: RecentSearchesComponent,
        position: OutletPosition.AFTER
      })],
      imports: [CommonModule, I18nModule, SearchBoxModule, UrlModule, RouterModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecentSearchesModule, [{
    type: NgModule,
    args: [{
      exports: [RecentSearchesComponent],
      declarations: [RecentSearchesComponent],
      imports: [CommonModule, I18nModule, SearchBoxModule, UrlModule, RouterModule],
      providers: [provideOutlet({
        id: SearchBoxOutlets.RECENT_SEARCHES,
        component: RecentSearchesComponent,
        position: OutletPosition.AFTER
      })]
    }]
  }], null, null);
})();
var AVAILABILITY_CHECK_INTERVAL = 250;
var MAX_AVAILABILITY_CHECKS = 100;
var POLL_INTERVAL = 15 * 6e4;
var TRENDING_SEARCHES_ENDPOINT_KEY = "searchIntelligence";
var TrendingSearchesService = class _TrendingSearchesService {
  constructor() {
    this.baseSiteService = inject(BaseSiteService);
    this.cdsConfig = inject(CdsConfig);
    this.cdsEndpointsService = inject(CdsEndpointsService);
    this.httpClient = inject(HttpClient);
    this.winRef = inject(WindowRef);
    this.destroy$ = new Subject();
    this.trendingSearches$ = this.initTrendingSearches().pipe(shareReplay(1));
  }
  checkAvailability() {
    return timer(0, AVAILABILITY_CHECK_INTERVAL).pipe(map(() => this.winRef.nativeWindow?.Y_TRACKING?.config?.cdsSiteId), takeWhile((cdsSiteId) => !cdsSiteId, true), take(MAX_AVAILABILITY_CHECKS), filter((cdsSiteId) => !!cdsSiteId));
  }
  getTrendingSearchUrl(cdsSiteId) {
    return this.cdsEndpointsService.getUrl(TRENDING_SEARCHES_ENDPOINT_KEY).replaceAll("${cdsSiteId}", cdsSiteId);
  }
  fetchTrendingSearches(url) {
    return this.httpClient.get(url).pipe(map((data) => data?.searchPhrases), catchError(() => {
      return EMPTY;
    }));
  }
  initTrendingSearches() {
    return this.checkAvailability().pipe(switchMap((cdsSiteId) => {
      const url = this.getTrendingSearchUrl(cdsSiteId);
      return timer(0, POLL_INTERVAL).pipe(switchMap(() => this.fetchTrendingSearches(url)), takeUntil(this.destroy$));
    }));
  }
  getTrendingSearches() {
    return this.trendingSearches$;
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function TrendingSearchesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TrendingSearchesService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TrendingSearchesService,
      factory: _TrendingSearchesService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrendingSearchesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MAX_TRENDING_SEARCHES = 5;
var TrendingSearchesComponent = class _TrendingSearchesComponent {
  constructor() {
    this.searchBoxComponentService = inject(SearchBoxComponentService);
    this.trendingSearchesService = inject(TrendingSearchesService);
    this.outletContext = inject(OutletContextData, {
      optional: true
    });
  }
  ngOnInit() {
    this.searchPhrases$ = this.getSearchPhrases().pipe(tap((searchPhrases) => {
      this.searchBoxComponentService.setTrendingSearches(!!searchPhrases.length);
    }));
  }
  getSearchPhrases() {
    return this.contextObservable.pipe(switchMap((context) => {
      const maxSearches = context?.maxTrendingSearches ?? MAX_TRENDING_SEARCHES;
      return this.trendingSearchesService.getTrendingSearches().pipe(map((data) => data ? data.slice(0, maxSearches) : []));
    }));
  }
  get contextObservable() {
    return this.outletContext?.context$ ?? EMPTY;
  }
  shareEvent(event) {
    if (!event) {
      throw new Error("Missing Event");
    }
    this.searchBoxComponentService.shareEvent(event);
  }
  static {
    this.ɵfac = function TrendingSearchesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TrendingSearchesComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TrendingSearchesComponent,
      selectors: [["cx-trending-searches"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "trending-searches"], ["tabindex", "0", 3, "ariaLabel"], [4, "ngFor", "ngForOf"], ["role", "option", 3, "mousedown", "keydown.arrowup", "keydown.arrowdown", "keydown.arrowleft", "keydown.arrowright", "keydown.enter", "keydown.escape", "routerLink"]],
      template: function TrendingSearchesComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TrendingSearchesComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.searchPhrases$));
        }
      },
      dependencies: [NgForOf, NgIf, RouterLink, AsyncPipe, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrendingSearchesComponent, [{
    type: Component,
    args: [{
      selector: "cx-trending-searches",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="searchPhrases$ | async as searchPhrases">
  <ng-container *ngIf="searchPhrases?.length">
    <div class="trending-searches">
      <h3>
        {{ 'searchBox.trendingSearches' | cxTranslate }}
      </h3>
      <ul
        tabindex="0"
        [ariaLabel]="'cdsTrendingSearches.ariaTrendingSearches' | cxTranslate"
      >
        <li *ngFor="let phrase of searchPhrases">
          <a
            role="option"
            [routerLink]="
              {
                cxRoute: 'search',
                params: { query: phrase.searchPhrase },
              } | cxUrl
            "
            (mousedown)="$event.preventDefault()"
            (keydown.arrowup)="shareEvent($any($event))"
            (keydown.arrowdown)="shareEvent($any($event))"
            (keydown.arrowleft)="shareEvent($any($event))"
            (keydown.arrowright)="shareEvent($any($event))"
            (keydown.enter)="shareEvent($any($event))"
            (keydown.escape)="shareEvent($any($event))"
          >
            {{ phrase.searchPhrase }}
          </a>
        </li>
      </ul>
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], null, null);
})();
var TrendingSearchesModule = class _TrendingSearchesModule {
  static {
    this.ɵfac = function TrendingSearchesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TrendingSearchesModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TrendingSearchesModule,
      declarations: [TrendingSearchesComponent],
      imports: [CommonModule, I18nModule, SearchBoxModule, UrlModule, RouterModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideOutlet({
        id: SearchBoxOutlets.TRENDING_SEARCHES,
        component: TrendingSearchesComponent,
        position: OutletPosition.AFTER
      })],
      imports: [CommonModule, I18nModule, SearchBoxModule, UrlModule, RouterModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrendingSearchesModule, [{
    type: NgModule,
    args: [{
      exports: [],
      declarations: [TrendingSearchesComponent],
      imports: [CommonModule, I18nModule, SearchBoxModule, UrlModule, RouterModule],
      providers: [provideOutlet({
        id: SearchBoxOutlets.TRENDING_SEARCHES,
        component: TrendingSearchesComponent,
        position: OutletPosition.AFTER
      })]
    }]
  }], null, null);
})();
var CdsModule = class _CdsModule {
  static forRoot(config) {
    return {
      ngModule: _CdsModule,
      providers: [provideDefaultConfigFactory(defaultCdsConfigFactory), provideDefaultConfig(config), provideConfigValidator(cdsConfigValidator), ProfileTagPushEventsService]
    };
  }
  static {
    this.ɵfac = function CdsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CdsModule,
      imports: [ProfileTagModule, TrackingModule, MerchandisingModule, RecentSearchesModule, TrendingSearchesModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ProfileTagModule, TrackingModule, MerchandisingModule, RecentSearchesModule, TrendingSearchesModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdsModule, [{
    type: NgModule,
    args: [{
      imports: [ProfileTagModule, TrackingModule, MerchandisingModule, RecentSearchesModule, TrendingSearchesModule]
    }]
  }], null, null);
})();
var cdsTranslations2 = cdsTranslations;
var cdsTranslationChunksConfig2 = cdsTranslationChunksConfig;
export {
  AddedToCartPushEvent,
  AttributesDirective,
  AttributesModule,
  BrandPageVisitedEvent,
  CartSnapshotPushEvent,
  CartViewPushEvent,
  CategoryViewPushEvent,
  CdsBackendConnector,
  CdsBackendNotificationAdapter,
  CdsConfig,
  CdsMerchandisingProductService,
  CdsMerchandisingSiteContextService,
  CdsMerchandisingStrategyAdapter,
  CdsMerchandisingUserContextService,
  CdsModule,
  ConsentChangedPushEvent,
  ConsentReferenceInterceptor,
  DebugInterceptor,
  HomePageViewPushEvent,
  InternalProfileTagEventNames,
  KeywordSearchPushEvent,
  MerchandisingCarouselClickedEvent,
  MerchandisingCarouselCmsModule,
  MerchandisingCarouselComponent,
  MerchandisingCarouselComponentService,
  MerchandisingCarouselViewedEvent,
  MerchandisingModule,
  MerchandisingStrategyAdapter,
  MerchandisingStrategyConnector,
  ModifiedCartPushEvent,
  NavigatedPushEvent,
  OccBackendNotification,
  OrderConfirmationPushEvent,
  ProductViewPushEvent,
  ProfileTagCmsModule,
  ProfileTagComponent,
  ProfileTagEventService,
  ProfileTagInjectorService,
  ProfileTagLifecycleService,
  ProfileTagModule,
  ProfileTagPushEventsService,
  RemovedFromCartPushEvent,
  TrackingModule,
  TrackingService,
  cdsConfigValidator,
  cdsTranslationChunksConfig2 as cdsTranslationChunksConfig,
  cdsTranslations2 as cdsTranslations,
  defaultCdsConfigFactory
};
//# sourceMappingURL=@spartacus_cds.js.map
