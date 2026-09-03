import {
  GoogleMapRendererService,
  STORE_COUNT_NORMALIZER,
  STORE_FINDER_SEARCH_PAGE_NORMALIZER,
  StoreFinderAdapter,
  StoreFinderConfig,
  StoreFinderCoreModule,
  StoreFinderService
} from "./chunk-H5G2MMM2.js";
import {
  StoreFinderOutlets
} from "./chunk-MGG5WRXC.js";
import {
  BtnLikeLinkDirective,
  BtnLikeLinkModule,
  ICON_TYPE,
  IconComponent,
  IconModule,
  ListNavigationModule,
  OutletDirective,
  OutletModule,
  PaginationComponent,
  SpinnerComponent,
  SpinnerModule
} from "./chunk-D5RDRHN5.js";
import {
  ConverterService,
  FeatureDirective,
  FeaturesConfigModule,
  I18nModule,
  OccEndpointsService,
  POINT_OF_SERVICE_NORMALIZER,
  RoutingService,
  TranslatePipe,
  UrlModule,
  provideDefaultConfig,
  useFeatureStyles
} from "./chunk-VIVIQI6G.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule,
  RouterOutlet
} from "./chunk-EBCNDD52.js";
import {
  HttpClient
} from "./chunk-2A6OHZCE.js";
import {
  DefaultValueAccessor,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule,
  UntypedFormControl
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  JsonPipe,
  KeyValuePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet
} from "./chunk-S7KROBXW.js";
import {
  DOCUMENT
} from "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  EventEmitter,
  Inject,
  Injectable,
  Input,
  NgModule,
  Optional,
  Output,
  ViewChild,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-7OJSO65L.js";
import {
  map
} from "./chunk-R6FETK65.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/storefinder/fesm2022/spartacus-storefinder-occ.mjs
var OccStoreFinderAdapter = class _OccStoreFinderAdapter {
  constructor(http, occEndpointsService, converterService) {
    this.http = http;
    this.occEndpointsService = occEndpointsService;
    this.converterService = converterService;
  }
  search(query, searchConfig, longitudeLatitude, radius) {
    return this.callOccFindStores(query, searchConfig, longitudeLatitude, radius).pipe(this.converterService.pipeable(STORE_FINDER_SEARCH_PAGE_NORMALIZER));
  }
  loadCounts() {
    return this.http.get(this.occEndpointsService.buildUrl("storescounts")).pipe(map(({
      countriesAndRegionsStoreCount
    }) => countriesAndRegionsStoreCount), this.converterService.pipeableMany(STORE_COUNT_NORMALIZER));
  }
  load(storeId) {
    return this.http.get(this.occEndpointsService.buildUrl("store", {
      urlParams: {
        storeId
      }
    })).pipe(this.converterService.pipeable(POINT_OF_SERVICE_NORMALIZER));
  }
  callOccFindStores(query, searchConfig, longitudeLatitude, radius) {
    const params = {};
    if (longitudeLatitude) {
      params["longitude"] = String(longitudeLatitude.longitude);
      params["latitude"] = String(longitudeLatitude.latitude);
    } else {
      params["query"] = query;
    }
    if (radius) {
      params["radius"] = String(radius);
    }
    if (searchConfig?.pageSize) {
      params["pageSize"] = String(searchConfig.pageSize);
    }
    if (searchConfig?.currentPage) {
      params["currentPage"] = String(searchConfig.currentPage);
    }
    if (searchConfig?.sort) {
      params["sort"] = searchConfig.sort;
    }
    return this.http.get(this.occEndpointsService.buildUrl("stores", {
      queryParams: params
    }));
  }
  static {
    this.ɵfac = function OccStoreFinderAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccStoreFinderAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccStoreFinderAdapter,
      factory: _OccStoreFinderAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccStoreFinderAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var defaultOccStoreFinderConfig = {
  backend: {
    occ: {
      endpoints: {
        store: "stores/${storeId}?fields=FULL",
        stores: "stores?fields=stores(name,displayName,formattedDistance,openingHours(weekDayOpeningList(FULL),specialDayOpeningList(FULL)),geoPoint(latitude,longitude),address(line1,line2,town,region(FULL),postalCode,phone,country,email), features),pagination(DEFAULT),sorts(DEFAULT)",
        storescounts: "stores/storescounts"
      }
    }
  }
};
var StoreFinderOccModule = class _StoreFinderOccModule {
  static {
    this.ɵfac = function StoreFinderOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _StoreFinderOccModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccStoreFinderConfig), {
        provide: StoreFinderAdapter,
        useClass: OccStoreFinderAdapter
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderOccModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig(defaultOccStoreFinderConfig), {
        provide: StoreFinderAdapter,
        useClass: OccStoreFinderAdapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/storefinder/fesm2022/spartacus-storefinder-components.mjs
var _c0 = ["*"];
function ScheduleComponent_div_1_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "storeFinder.closed"), " ");
  }
}
function ScheduleComponent_div_1_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const day_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", day_r1.openingTime == null ? null : day_r1.openingTime.formattedHour, " - ", day_r1.closingTime == null ? null : day_r1.closingTime.formattedHour, " ");
  }
}
function ScheduleComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "div", 4);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, ScheduleComponent_div_1_div_1_div_3_Template, 3, 3, "div", 5)(4, ScheduleComponent_div_1_div_1_div_4_Template, 2, 2, "div", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(day_r1.weekDay);
    ɵɵadvance();
    ɵɵproperty("ngIf", day_r1.closed);
    ɵɵadvance();
    ɵɵproperty("ngIf", !day_r1.closed);
  }
}
function ScheduleComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, ScheduleComponent_div_1_div_1_Template, 5, 3, "div", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.weekDays);
  }
}
var _c1 = (a0, a1) => ({
  displayName: a0,
  name: a1
});
var _c2 = (a0) => [a0];
var _c3 = (a0, a1, a2) => [a0, a1, a2];
function StoreFinderListItemComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 8);
    ɵɵlistener("click", function StoreFinderListItemComponent_a_4_Template_a_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleStoreItemClick());
    })("keyup", function StoreFinderListItemComponent_a_4_Template_a_keyup_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onKey($event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.location.displayName || ctx_r1.location.name, " ");
  }
}
function StoreFinderListItemComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c2, ctx_r1.location.name));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.location.displayName || ctx_r1.location.name, " ");
  }
}
function StoreFinderListItemComponent_div_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.location.formattedDistance, " ");
  }
}
function StoreFinderListItemComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10)(1, "div", 11);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵtemplate(4, StoreFinderListItemComponent_div_6_div_4_Template, 2, 1, "div", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", ctx_r1.location.address.line1, " ", ctx_r1.location.address.line2, " ");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.getFormattedStoreAddress(ɵɵpureFunction3(4, _c3, ctx_r1.location.address.town, ctx_r1.location.address.postalCode, ctx_r1.location.address.country.isocode)), " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.location.formattedDistance && ctx_r1.displayDistance);
  }
}
function StoreFinderListItemComponent_ng_template_7_Template(rf, ctx) {
}
function StoreFinderListItemComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 14);
    ɵɵpipe(1, "cxTranslate");
    ɵɵlistener("click", function StoreFinderListItemComponent_a_8_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      return ɵɵresetView($event.stopPropagation());
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵpropertyInterpolate("href", ctx_r1.getDirections(ctx_r1.location), ɵɵsanitizeUrl);
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 3, "storeFinder.ariaLabelGetDirections"));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 5, "storeFinder.getDirections"));
  }
}
function StoreFinderListItemComponent_a_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 15);
    ɵɵpipe(1, "cxTranslate");
    ɵɵlistener("click", function StoreFinderListItemComponent_a_9_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r4);
      return ɵɵresetView($event.stopPropagation());
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵpropertyInterpolate("href", ctx_r1.getDirections(ctx_r1.location), ɵɵsanitizeUrl);
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 3, "storeFinder.ariaLabelGetDirections"));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 5, "storeFinder.getDirections"));
  }
}
var _c4 = (a0) => ({
  count: a0
});
function StoreFinderGridComponent_ng_container_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵelement(1, "cx-store-finder-list-item", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const location_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("location", location_r1);
  }
}
function StoreFinderGridComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2)(2, "div", 3)(3, "h3", 4);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "span", 5);
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(9, "div", 6);
    ɵɵtemplate(10, StoreFinderGridComponent_ng_container_0_div_10_Template, 2, 1, "div", 7);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const locations_r2 = ctx.ngIf;
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 3, "storeFinder.storesFoundTitle"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(8, 5, "storeFinder.storesFound", ɵɵpureFunction1(8, _c4, locations_r2 == null ? null : locations_r2.stores == null ? null : locations_r2.stores.length)), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", locations_r2 == null ? null : locations_r2.stores);
  }
}
function StoreFinderGridComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
var _c5 = () => ["/store-finder/find"];
var _c6 = (a0) => ({
  query: a0
});
var _c7 = (a0) => ({
  "disabled-action": a0
});
var _c8 = () => ["/store-finder/view-all"];
function StoreFinderSearchComponent_div_1_ng_template_10_Template(rf, ctx) {
}
function StoreFinderSearchComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "input", 8, 1);
    ɵɵpipe(5, "cxTranslate");
    ɵɵpipe(6, "cxTranslate");
    ɵɵlistener("keyup", function StoreFinderSearchComponent_div_1_Template_input_keyup_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onKey($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(7, "cx-icon", 9);
    ɵɵpipe(8, "cxTranslate");
    ɵɵpipe(9, "cxTranslate");
    ɵɵlistener("keyup", function StoreFinderSearchComponent_div_1_Template_cx_icon_keyup_7_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onKey($event));
    });
    ɵɵelementEnd()()();
    ɵɵtemplate(10, StoreFinderSearchComponent_div_1_ng_template_10_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const queryInput_r3 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext();
    const searchActionButtons_r4 = ɵɵreference(4);
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(5, 11, "storeFinder.searchBox"));
    ɵɵproperty("formControl", ctx_r1.searchBox);
    ɵɵattribute("aria-label", ɵɵpipeBind1(6, 13, "storeFinder.searchBoxLabel"));
    ɵɵadvance(4);
    ɵɵproperty("type", ctx_r1.iconTypes.SEARCH)("routerLink", ɵɵpureFunction0(19, _c5))("queryParams", ɵɵpureFunction1(20, _c6, queryInput_r3.value))("ngClass", ɵɵpureFunction1(22, _c7, !(queryInput_r3.value && queryInput_r3.value.length)));
    ɵɵattribute("tabindex", (queryInput_r3.value == null ? null : queryInput_r3.value.length) ? 0 : -1)("aria-label", ɵɵpipeBind1(8, 15, "storeFinder.searchNearestStores"))("title", ɵɵpipeBind1(9, 17, "storeFinder.searchNearestStores"));
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", searchActionButtons_r4);
  }
}
function StoreFinderSearchComponent_div_2_ng_template_14_Template(rf, ctx) {
}
function StoreFinderSearchComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 11)(1, "div", 6)(2, "div", 12)(3, "label", 13)(4, "span", 14);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 15)(8, "input", 16, 1);
    ɵɵpipe(10, "cxTranslate");
    ɵɵlistener("keyup", function StoreFinderSearchComponent_div_2_Template_input_keyup_8_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onKey($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(11, "cx-icon", 9);
    ɵɵpipe(12, "cxTranslate");
    ɵɵpipe(13, "cxTranslate");
    ɵɵlistener("keyup", function StoreFinderSearchComponent_div_2_Template_cx_icon_keyup_11_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onKey($event));
    });
    ɵɵelementEnd()()()()();
    ɵɵtemplate(14, StoreFinderSearchComponent_div_2_ng_template_14_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const queryInput_r6 = ɵɵreference(9);
    const ctx_r1 = ɵɵnextContext();
    const searchActionButtons_r4 = ɵɵreference(4);
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 11, "storeFinder.findStoreBy"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(10, 13, "storeFinder.searchBox"));
    ɵɵproperty("formControl", ctx_r1.searchBox);
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r1.iconTypes.SEARCH)("routerLink", ɵɵpureFunction0(19, _c5))("queryParams", ɵɵpureFunction1(20, _c6, queryInput_r6.value))("ngClass", ɵɵpureFunction1(22, _c7, !(queryInput_r6.value && queryInput_r6.value.length)));
    ɵɵattribute("tabindex", (queryInput_r6.value == null ? null : queryInput_r6.value.length) ? 0 : -1)("aria-label", ɵɵpipeBind1(12, 15, "storeFinder.searchNearestStores"))("title", ɵɵpipeBind1(13, 17, "storeFinder.searchNearestStores"));
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", searchActionButtons_r4);
  }
}
function StoreFinderSearchComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6)(1, "div", 17)(2, "div", 18)(3, "button", 19);
    ɵɵlistener("click", function StoreFinderSearchComponent_ng_template_3_Template_button_click_3_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.viewStoresWithMyLoc());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(6, "div", 18)(7, "button", 20);
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 3, "storeFinder.useMyLocation"), " ");
    ɵɵadvance(3);
    ɵɵproperty("routerLink", ɵɵpureFunction0(7, _c8));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 5, "storeFinder.viewAllStores"), " ");
  }
}
var _c9 = ["mapElement"];
function StoreFinderStoreDescriptionComponent_ng_container_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12)(1, "div");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div");
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate2("", ctx_r0.location.address.line1, " ", ctx_r0.location.address.line2, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.getFormattedStoreAddress(ɵɵpureFunction3(3, _c3, ctx_r0.location.address.town, ctx_r0.location.address.postalCode, ctx_r0.location.address.country.isocode)), " ");
  }
}
function StoreFinderStoreDescriptionComponent_ng_container_0_li_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 6);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, "storeFinder.call"), " ", ctx_r0.location.address == null ? null : ctx_r0.location.address.phone, " ");
  }
}
function StoreFinderStoreDescriptionComponent_ng_container_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13)(1, "cx-schedule", 14)(2, "h3");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("location", ctx_r0.location);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 2, "storeFinder.storeHours"));
  }
}
function StoreFinderStoreDescriptionComponent_ng_container_0_div_15_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", feature_r2.value, " ");
  }
}
function StoreFinderStoreDescriptionComponent_ng_container_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15)(1, "h3", 16);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div");
    ɵɵtemplate(5, StoreFinderStoreDescriptionComponent_ng_container_0_div_15_div_5_Template, 2, 1, "div", 17);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "storeFinder.storeFeatures"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r0.location.features == null ? null : ctx_r0.location.features.entry);
  }
}
function StoreFinderStoreDescriptionComponent_ng_container_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵelement(1, "cx-store-finder-map", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("locations", ɵɵpureFunction1(1, _c2, ctx_r0.location));
  }
}
function StoreFinderStoreDescriptionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "h2");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵtemplate(5, StoreFinderStoreDescriptionComponent_ng_container_0_div_5_Template, 5, 7, "div", 3);
    ɵɵelementStart(6, "section", 4)(7, "ul", 5)(8, "li", 6)(9, "a", 7);
    ɵɵpipe(10, "cxTranslate");
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵtemplate(13, StoreFinderStoreDescriptionComponent_ng_container_0_li_13_Template, 3, 4, "li", 8);
    ɵɵelementEnd()();
    ɵɵtemplate(14, StoreFinderStoreDescriptionComponent_ng_container_0_div_14_Template, 5, 4, "div", 9)(15, StoreFinderStoreDescriptionComponent_ng_container_0_div_15_Template, 6, 4, "div", 10);
    ɵɵpipe(16, "json");
    ɵɵelementEnd();
    ɵɵtemplate(17, StoreFinderStoreDescriptionComponent_ng_container_0_div_17_Template, 2, 3, "div", 11);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r0.location.displayName || ctx_r0.location.name);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.location.address);
    ɵɵadvance(4);
    ɵɵproperty("href", ctx_r0.getDirections(ctx_r0.location), ɵɵsanitizeUrl);
    ɵɵattribute("aria-label", ɵɵpipeBind1(10, 9, "storeFinder.ariaLabelGetDirections"));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(12, 11, "storeFinder.getDirections"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.location.address == null ? null : ctx_r0.location.address.phone);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.location.openingHours);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(16, 13, ctx_r0.location.features) !== "{}");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.disableMap);
  }
}
var _c10 = ["storeMap"];
var _c11 = (a0) => ({
  "cx-selected-item": a0
});
var _c12 = (a0) => ({
  "nav-link": true,
  active: a0
});
function StoreFinderListComponent_ng_container_0_div_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function StoreFinderListComponent_ng_container_0_div_2_button_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.hideStoreDetails());
    });
    ɵɵelement(1, "cx-icon", 13);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("type", ctx_r1.iconTypes.CARET_LEFT);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "storeFinder.back"), " ");
  }
}
function StoreFinderListComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "div", 7);
    ɵɵelement(2, "cx-store-finder-pagination-details", 8);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 9)(4, "div", 10);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵtemplate(6, StoreFinderListComponent_ng_container_0_div_2_button_6_Template, 4, 4, "button", 11);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("pagination", ctx_r1.locations.pagination);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r1.storeDetails == null ? null : ctx_r1.storeDetails.displayName, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isDetailsModeVisible);
  }
}
function StoreFinderListComponent_ng_container_0_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵelement(1, "cx-store-finder-store-description", 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("location", ctx_r1.storeDetails)("disableMap", true);
  }
}
function StoreFinderListComponent_ng_container_0_div_3_ol_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 24)(1, "cx-store-finder-list-item", 25);
    ɵɵlistener("storeItemClick", function StoreFinderListComponent_ng_container_0_div_3_ol_3_li_1_Template_cx_store_finder_list_item_storeItemClick_1_listener($event) {
      const location_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.centerStoreOnMapByIndex($event, location_r5));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const location_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵpropertyInterpolate("id", "item-" + i_r6);
    ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c11, ctx_r1.selectedStoreIndex === i_r6));
    ɵɵadvance();
    ɵɵproperty("location", location_r5)("locationIndex", i_r6)("displayDistance", ctx_r1.useMylocation)("useClickEvent", true)("listOrderLabel", i_r6 + ctx_r1.locations.pagination.currentPage * ctx_r1.locations.pagination.pageSize + 1);
  }
}
function StoreFinderListComponent_ng_container_0_div_3_ol_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ol", 22);
    ɵɵtemplate(1, StoreFinderListComponent_ng_container_0_div_3_ol_3_li_1_Template, 2, 9, "li", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.locations == null ? null : ctx_r1.locations.stores);
  }
}
function StoreFinderListComponent_ng_container_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 14)(1, "div", 15);
    ɵɵtemplate(2, StoreFinderListComponent_ng_container_0_div_3_div_2_Template, 2, 2, "div", 16)(3, StoreFinderListComponent_ng_container_0_div_3_ol_3_Template, 2, 1, "ol", 17);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 18)(5, "cx-store-finder-map", 19, 0);
    ɵɵlistener("selectedStoreItem", function StoreFinderListComponent_ng_container_0_div_3_Template_cx_store_finder_map_selectedStoreItem_5_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.selectStoreItemList($event));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.isDetailsModeVisible);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.isDetailsModeVisible);
    ɵɵadvance(2);
    ɵɵproperty("locations", ctx_r1.locations.stores);
  }
}
function StoreFinderListComponent_ng_container_0_div_4_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 32)(1, "button", 33);
    ɵɵlistener("click", function StoreFinderListComponent_ng_container_0_div_4_li_2_Template_button_click_1_listener() {
      const mode_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setDisplayMode(mode_r8 == null ? null : mode_r8.value));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const mode_r8 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("id", "tab-" + (mode_r8 == null ? null : mode_r8.value))("ngClass", ɵɵpureFunction1(7, _c12, ctx_r1.isDisplayModeActive(mode_r8 == null ? null : mode_r8.value)));
    ɵɵattribute("aria-controls", "tab-" + (mode_r8 == null ? null : mode_r8.value) + "-panel")("aria-selected", ctx_r1.isDisplayModeActive(mode_r8 == null ? null : mode_r8.value));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, "storeFinder." + (mode_r8 == null ? null : mode_r8.value)), " ");
  }
}
function StoreFinderListComponent_ng_container_0_div_4_ng_template_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵelement(1, "cx-store-finder-store-description", 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("location", ctx_r1.storeDetails)("disableMap", true);
  }
}
function StoreFinderListComponent_ng_container_0_div_4_ng_template_6_ol_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 24)(1, "cx-store-finder-list-item", 25);
    ɵɵlistener("storeItemClick", function StoreFinderListComponent_ng_container_0_div_4_ng_template_6_ol_3_li_1_Template_cx_store_finder_list_item_storeItemClick_1_listener($event) {
      const location_r10 = ɵɵrestoreView(_r9).$implicit;
      const ctx_r1 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r1.centerStoreOnMapByIndex($event, location_r10));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const location_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵpropertyInterpolate("id", "item-" + i_r11);
    ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c11, ctx_r1.selectedStoreIndex === i_r11));
    ɵɵadvance();
    ɵɵproperty("location", location_r10)("locationIndex", i_r11)("displayDistance", ctx_r1.useMylocation)("useClickEvent", true)("listOrderLabel", i_r11 + ctx_r1.locations.pagination.currentPage * ctx_r1.locations.pagination.pageSize + 1);
  }
}
function StoreFinderListComponent_ng_container_0_div_4_ng_template_6_ol_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ol", 22);
    ɵɵtemplate(1, StoreFinderListComponent_ng_container_0_div_4_ng_template_6_ol_3_li_1_Template, 2, 9, "li", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.locations == null ? null : ctx_r1.locations.stores);
  }
}
function StoreFinderListComponent_ng_container_0_div_4_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 34)(1, "div", 35);
    ɵɵtemplate(2, StoreFinderListComponent_ng_container_0_div_4_ng_template_6_div_2_Template, 2, 2, "div", 16)(3, StoreFinderListComponent_ng_container_0_div_4_ng_template_6_ol_3_Template, 2, 1, "ol", 17);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.isDetailsModeVisible);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.isDetailsModeVisible);
  }
}
function StoreFinderListComponent_ng_container_0_div_4_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 36)(1, "div", 37)(2, "cx-store-finder-map", 19, 0);
    ɵɵlistener("selectedStoreItem", function StoreFinderListComponent_ng_container_0_div_4_ng_template_7_Template_cx_store_finder_map_selectedStoreItem_2_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.selectStoreItemList($event));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("locations", ctx_r1.selectedStore ? ɵɵpureFunction1(1, _c2, ctx_r1.selectedStore) : ctx_r1.locations.stores);
  }
}
function StoreFinderListComponent_ng_container_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 26)(1, "ul", 27);
    ɵɵtemplate(2, StoreFinderListComponent_ng_container_0_div_4_li_2_Template, 4, 9, "li", 28);
    ɵɵpipe(3, "keyvalue");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 29)(5, "div", 30);
    ɵɵtemplate(6, StoreFinderListComponent_ng_container_0_div_4_ng_template_6_Template, 4, 2, "ng-template", 31)(7, StoreFinderListComponent_ng_container_0_div_4_ng_template_7_Template, 4, 3, "ng-template", 31);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(3, 4, ctx_r1.displayModes));
    ɵɵadvance(3);
    ɵɵproperty("ngSwitch", ctx_r1.activeDisplayMode);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.displayModes.LIST_VIEW);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.displayModes.MAP_VIEW);
  }
}
function StoreFinderListComponent_ng_container_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "div", 38);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "storeFinder.noStoreFound"), " ");
  }
}
function StoreFinderListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵtemplate(2, StoreFinderListComponent_ng_container_0_div_2_Template, 7, 3, "div", 3)(3, StoreFinderListComponent_ng_container_0_div_3_Template, 7, 3, "div", 4)(4, StoreFinderListComponent_ng_container_0_div_4_Template, 8, 6, "div", 5)(5, StoreFinderListComponent_ng_container_0_div_5_Template, 4, 3, "div", 3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.locations == null ? null : ctx_r1.locations.pagination);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.locations == null ? null : ctx_r1.locations.stores);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.locations == null ? null : ctx_r1.locations.stores);
    ɵɵadvance();
    ɵɵproperty("ngIf", !(ctx_r1.locations == null ? null : ctx_r1.locations.stores));
  }
}
function StoreFinderSearchResultComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "div", 5)(2, "cx-pagination", 6);
    ɵɵlistener("viewPageEvent", function StoreFinderSearchResultComponent_div_0_div_1_Template_cx_pagination_viewPageEvent_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.viewPage($event));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const locations_r3 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵproperty("pagination", locations_r3.pagination);
  }
}
function StoreFinderSearchResultComponent_div_0_cx_store_finder_list_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-store-finder-list", 7);
  }
  if (rf & 2) {
    const locations_r3 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("locations", locations_r3)("useMylocation", ctx_r1.useMyLocation);
  }
}
function StoreFinderSearchResultComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8)(1, "div", 9)(2, "span", 10);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 1, "storeFinder.noStoresMessage"), " ");
  }
}
function StoreFinderSearchResultComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, StoreFinderSearchResultComponent_div_0_div_1_Template, 3, 1, "div", 2)(2, StoreFinderSearchResultComponent_div_0_cx_store_finder_list_2_Template, 1, 2, "cx-store-finder-list", 3)(3, StoreFinderSearchResultComponent_div_0_div_3_Template, 5, 3, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const locations_r3 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", locations_r3 == null ? null : locations_r3.stores.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", locations_r3 == null ? null : locations_r3.stores.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", !(locations_r3 == null ? null : locations_r3.stores.length));
  }
}
function StoreFinderSearchResultComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
var _c13 = (a0) => ["../country", a0];
function StoreFinderStoresCountComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5)(1, "span", 6);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const locations_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind2(3, 1, "storeFinder.ariaLabelCountriesCount", ɵɵpureFunction1(4, _c4, locations_r1 == null ? null : locations_r1.length)));
  }
}
function StoreFinderStoresCountComponent_ng_container_0_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const country_r3 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngClass", (country_r3 == null ? null : country_r3.storeCountDataList) ? "country-header" : "country-header-link");
    ɵɵadvance();
    ɵɵtextInterpolate1("(", country_r3.count, ")");
  }
}
function StoreFinderStoresCountComponent_ng_container_0_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9)(1, "a", 10);
    ɵɵlistener("keydown.space", function StoreFinderStoresCountComponent_ng_container_0_div_3_div_1_Template_a_keydown_space_1_listener($event) {
      const country_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.navigateToLocation(country_r3.isoCode, $event));
    });
    ɵɵelementStart(2, "h2", 11)(3, "span", 12);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵtemplate(5, StoreFinderStoresCountComponent_ng_container_0_div_3_div_1_span_5_Template, 2, 2, "span", 13);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const country_r3 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpureFunction1(5, _c13, country_r3.isoCode));
    ɵɵattribute("aria-label", country_r3.name + "(" + country_r3.count + ")");
    ɵɵadvance(2);
    ɵɵproperty("ngClass", (country_r3 == null ? null : country_r3.storeCountDataList) ? "country-header" : "country-header-link");
    ɵɵadvance();
    ɵɵtextInterpolate(country_r3.name);
    ɵɵadvance();
    ɵɵproperty("ngIf", !(country_r3 == null ? null : country_r3.storeCountDataList));
  }
}
function StoreFinderStoresCountComponent_ng_container_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, StoreFinderStoresCountComponent_ng_container_0_div_3_div_1_Template, 6, 7, "div", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const locations_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵproperty("ngForOf", locations_r1);
  }
}
function StoreFinderStoresCountComponent_ng_container_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7)(1, "span", 15);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "storeFinder.noStoresMessage"), " ");
  }
}
function StoreFinderStoresCountComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, StoreFinderStoresCountComponent_ng_container_0_div_1_Template, 4, 6, "div", 2);
    ɵɵelementStart(2, "div", 3);
    ɵɵtemplate(3, StoreFinderStoresCountComponent_ng_container_0_div_3_Template, 2, 1, "div", 4)(4, StoreFinderStoresCountComponent_ng_container_0_div_4_Template, 4, 3, "div", 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const locations_r1 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", locations_r1 == null ? null : locations_r1.length);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", locations_r1 == null ? null : locations_r1.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", !(locations_r1 == null ? null : locations_r1.length));
  }
}
function StoreFinderStoresCountComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
function StoreFinderStoreComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3)(1, "div", 4);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 5)(4, "button", 6);
    ɵɵlistener("click", function StoreFinderStoreComponent_div_1_Template_button_click_4_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.goBack());
    });
    ɵɵelement(5, "cx-icon", 7);
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 8)(9, "div", 9);
    ɵɵelement(10, "cx-store-finder-store-description", 10);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const location_r3 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", location_r3 == null ? null : location_r3.displayName, " ");
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r1.iconTypes.CARET_LEFT);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 5, "storeFinder.backToList"), " ");
    ɵɵadvance(4);
    ɵɵproperty("disableMap", ctx_r1.disableMap)("location", location_r3);
  }
}
function StoreFinderStoreComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
var AbstractStoreItemComponent = class _AbstractStoreItemComponent {
  constructor(storeFinderService) {
    this.storeFinderService = storeFinderService;
  }
  getDirections(location) {
    return this.storeFinderService.getDirections(location);
  }
  getFormattedStoreAddress(addressParts) {
    return addressParts.filter(Boolean).join(", ");
  }
  static {
    this.ɵfac = function AbstractStoreItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractStoreItemComponent)(ɵɵdirectiveInject(StoreFinderService));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractStoreItemComponent,
      inputs: {
        location: "location"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractStoreItemComponent, [{
    type: Directive
  }], () => [{
    type: StoreFinderService
  }], {
    location: [{
      type: Input
    }]
  });
})();
var ScheduleComponent = class _ScheduleComponent {
  constructor() {
  }
  ngOnInit() {
    if (this.location) {
      this.weekDays = this.location.openingHours?.weekDayOpeningList;
    }
  }
  static {
    this.ɵfac = function ScheduleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ScheduleComponent,
      selectors: [["cx-schedule"]],
      inputs: {
        location: "location"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 2,
      vars: 1,
      consts: [["class", "container cx-store-hours", 4, "ngIf"], [1, "container", "cx-store-hours"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "cx-days", "col-4"], ["class", "cx-hours col-8 closed", 4, "ngIf"], ["class", "cx-hours col-8", 4, "ngIf"], [1, "cx-hours", "col-8", "closed"], [1, "cx-hours", "col-8"]],
      template: function ScheduleComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵtemplate(1, ScheduleComponent_div_1_Template, 2, 1, "div", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.location.openingHours);
        }
      },
      dependencies: [NgForOf, NgIf, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleComponent, [{
    type: Component,
    args: [{
      selector: "cx-schedule",
      standalone: false,
      template: `<ng-content></ng-content>
<div class="container cx-store-hours" *ngIf="location.openingHours">
  <div *ngFor="let day of weekDays" class="row">
    <div class="cx-days col-4">{{ day.weekDay }}</div>

    <div *ngIf="day.closed" class="cx-hours col-8 closed">
      {{ 'storeFinder.closed' | cxTranslate }}
    </div>

    <div *ngIf="!day.closed" class="cx-hours col-8">
      {{ day.openingTime?.formattedHour }} -
      {{ day.closingTime?.formattedHour }}
    </div>
  </div>
</div>
`
    }]
  }], () => [], {
    location: [{
      type: Input
    }]
  });
})();
var StoreFinderListItemComponent = class _StoreFinderListItemComponent extends AbstractStoreItemComponent {
  constructor(storeFinderService) {
    super(storeFinderService);
    this.storeFinderService = storeFinderService;
    this.locationIndex = null;
    this.storeItemClick = new EventEmitter();
    this.StoreFinderOutlets = StoreFinderOutlets;
    useFeatureStyles("a11yTruncatedTextStoreFinder");
  }
  handleStoreItemClick() {
    if (this.locationIndex !== null) {
      this.storeItemClick.emit(this.locationIndex);
    }
  }
  onKey(event) {
    if (event.key === "Enter") {
      this.handleStoreItemClick();
    }
  }
  static {
    this.ɵfac = function StoreFinderListItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderListItemComponent)(ɵɵdirectiveInject(StoreFinderService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StoreFinderListItemComponent,
      selectors: [["cx-store-finder-list-item"]],
      inputs: {
        locationIndex: "locationIndex",
        listOrderLabel: "listOrderLabel",
        displayDistance: "displayDistance",
        useClickEvent: "useClickEvent"
      },
      outputs: {
        storeItemClick: "storeItemClick"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 10,
      vars: 11,
      consts: [["aria-relevant", "all"], [1, "cx-store-list-order"], ["class", "cx-store-name", "tabindex", "0", 3, "click", "keyup", 4, "ngIf"], ["class", "cx-store-name", "tabindex", "0", 3, "routerLink", 4, "ngIf"], ["class", "cx-store-address", 4, "ngIf"], [3, "cxOutlet", "cxOutletContext"], ["target", "_blank", "rel", "noopener noreferrer", "class", "btn btn-sm btn-secondary btn-block cx-button", "cxBtnLikeLink", "", 3, "href", "click", 4, "cxFeature"], ["target", "_blank", "rel", "noopener noreferrer", "class", "cx-button", 3, "href", "click", 4, "cxFeature"], ["tabindex", "0", 1, "cx-store-name", 3, "click", "keyup"], ["tabindex", "0", 1, "cx-store-name", 3, "routerLink"], [1, "cx-store-address"], [1, "cx-store-address-street"], ["class", "cx-store-distance", 4, "ngIf"], [1, "cx-store-distance"], ["target", "_blank", "rel", "noopener noreferrer", "cxBtnLikeLink", "", 1, "btn", "btn-sm", "btn-secondary", "btn-block", "cx-button", 3, "click", "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "cx-button", 3, "click", "href"]],
      template: function StoreFinderListItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementContainerStart(0);
          ɵɵelementStart(1, "div", 0)(2, "div", 1);
          ɵɵtext(3);
          ɵɵelementEnd();
          ɵɵtemplate(4, StoreFinderListItemComponent_a_4_Template, 2, 1, "a", 2)(5, StoreFinderListItemComponent_a_5_Template, 2, 4, "a", 3)(6, StoreFinderListItemComponent_div_6_Template, 5, 8, "div", 4)(7, StoreFinderListItemComponent_ng_template_7_Template, 0, 0, "ng-template", 5)(8, StoreFinderListItemComponent_a_8_Template, 4, 7, "a", 6)(9, StoreFinderListItemComponent_a_9_Template, 4, 7, "a", 7);
          ɵɵelementEnd();
          ɵɵelementContainerEnd();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ctx.listOrderLabel, " ");
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.useClickEvent);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.useClickEvent);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.location.address);
          ɵɵadvance();
          ɵɵproperty("cxOutlet", ctx.StoreFinderOutlets.PREFERRED_STORE)("cxOutletContext", ɵɵpureFunction2(8, _c1, ctx.location.displayName, ctx.location.name));
          ɵɵadvance();
          ɵɵproperty("cxFeature", "!a11yStyleExternalLinksAsLinks");
          ɵɵadvance();
          ɵɵproperty("cxFeature", "a11yStyleExternalLinksAsLinks");
        }
      },
      dependencies: [NgIf, RouterLink, OutletDirective, FeatureDirective, BtnLikeLinkDirective, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderListItemComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-list-item",
      standalone: false,
      template: `<ng-container>
  <div aria-relevant="all">
    <div class="cx-store-list-order">
      {{ listOrderLabel }}
    </div>
    <a
      *ngIf="useClickEvent"
      (click)="handleStoreItemClick()"
      (keyup)="onKey($event)"
      class="cx-store-name"
      tabindex="0"
    >
      {{ location.displayName || location.name }}
    </a>
    <a
      *ngIf="!useClickEvent"
      [routerLink]="[location.name]"
      class="cx-store-name"
      tabindex="0"
    >
      {{ location.displayName || location.name }}
    </a>
    <div class="cx-store-address" *ngIf="location.address">
      <div class="cx-store-address-street">
        {{ location.address.line1 }} {{ location.address.line2 }}
      </div>
      {{
        getFormattedStoreAddress([
          location.address.town,
          location.address.postalCode,
          location.address.country.isocode,
        ])
      }}
      <div
        class="cx-store-distance"
        *ngIf="location.formattedDistance && displayDistance"
      >
        {{ location.formattedDistance }}
      </div>
    </div>
    <ng-template
      [cxOutlet]="StoreFinderOutlets.PREFERRED_STORE"
      [cxOutletContext]="{
        displayName: location.displayName,
        name: location.name,
      }"
    ></ng-template>

    <a
      href="{{ getDirections(location) }}"
      target="_blank"
      rel="noopener noreferrer"
      *cxFeature="'!a11yStyleExternalLinksAsLinks'"
      class="btn btn-sm btn-secondary btn-block cx-button"
      cxBtnLikeLink
      (click)="$event.stopPropagation()"
      [attr.aria-label]="'storeFinder.ariaLabelGetDirections' | cxTranslate"
      >{{ 'storeFinder.getDirections' | cxTranslate }}</a
    >
    <a
      href="{{ getDirections(location) }}"
      target="_blank"
      rel="noopener noreferrer"
      *cxFeature="'a11yStyleExternalLinksAsLinks'"
      class="cx-button"
      (click)="$event.stopPropagation()"
      [attr.aria-label]="'storeFinder.ariaLabelGetDirections' | cxTranslate"
      >{{ 'storeFinder.getDirections' | cxTranslate }}</a
    >
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: StoreFinderService
  }], {
    locationIndex: [{
      type: Input
    }],
    listOrderLabel: [{
      type: Input
    }],
    displayDistance: [{
      type: Input
    }],
    useClickEvent: [{
      type: Input
    }],
    storeItemClick: [{
      type: Output
    }]
  });
})();
var StoreFinderGridComponent = class _StoreFinderGridComponent {
  constructor(storeFinderService, route) {
    this.storeFinderService = storeFinderService;
    this.route = route;
  }
  ngOnInit() {
    this.isLoading$ = this.storeFinderService.getStoresLoading();
    this.locations$ = this.storeFinderService.getFindStoresEntities();
    this.defaultLocation = {};
    this.findStores();
  }
  findStores() {
    if (this.route.snapshot.params.country) {
      this.storeFinderService.callFindStoresAction(this.route.snapshot.params);
    }
  }
  static {
    this.ɵfac = function StoreFinderGridComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderGridComponent)(ɵɵdirectiveInject(StoreFinderService), ɵɵdirectiveInject(ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StoreFinderGridComponent,
      selectors: [["cx-store-finder-grid"]],
      standalone: false,
      decls: 5,
      vars: 6,
      consts: [["loading", ""], [4, "ngIf", "ngIfElse"], [1, "container"], [1, "cx-counter"], [1, "cx-counter-title"], ["role", "alert"], [1, "row"], ["class", "col-sm-6 col-md-4 col-lg-3 item", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-4", "col-lg-3", "item"], [3, "location"], [1, "cx-spinner"]],
      template: function StoreFinderGridComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, StoreFinderGridComponent_ng_container_0_Template, 11, 10, "ng-container", 1);
          ɵɵpipe(1, "async");
          ɵɵpipe(2, "async");
          ɵɵtemplate(3, StoreFinderGridComponent_ng_template_3_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r3 = ɵɵreference(4);
          ɵɵproperty("ngIf", !ɵɵpipeBind1(1, 2, ctx.isLoading$) && ɵɵpipeBind1(2, 4, ctx.locations$))("ngIfElse", loading_r3);
        }
      },
      dependencies: [NgForOf, NgIf, SpinnerComponent, StoreFinderListItemComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderGridComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-grid",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container
  *ngIf="
    !(isLoading$ | async) && (locations$ | async) as locations;
    else loading
  "
>
  <div class="container">
    <div class="cx-counter">
      <h3 class="cx-counter-title">
        {{ 'storeFinder.storesFoundTitle' | cxTranslate }}
      </h3>
      <span role="alert">
        {{
          'storeFinder.storesFound'
            | cxTranslate: { count: locations?.stores?.length }
        }}
      </span>
    </div>
    <div class="row">
      <div
        class="col-sm-6 col-md-4 col-lg-3 item"
        *ngFor="let location of locations?.stores"
      >
        <cx-store-finder-list-item
          [location]="location"
        ></cx-store-finder-list-item>
      </div>
    </div>
  </div>
</ng-container>

<ng-template #loading>
  <div class="cx-spinner"><cx-spinner></cx-spinner></div>
</ng-template>
`
    }]
  }], () => [{
    type: StoreFinderService
  }, {
    type: ActivatedRoute
  }], null);
})();
var StoreFinderSearchComponent = class _StoreFinderSearchComponent {
  constructor(routingService) {
    this.routingService = routingService;
    this.searchBox = new UntypedFormControl();
    this.iconTypes = ICON_TYPE;
  }
  findStores(address) {
    this.routingService.go(["store-finder/find"], {
      queryParams: {
        query: address
      }
    });
  }
  viewStoresWithMyLoc() {
    this.routingService.go(["store-finder/find"], {
      queryParams: {
        useMyLocation: true
      }
    });
  }
  onKey(event) {
    if (this.searchBox.value && this.searchBox.value.length && event.key === "Enter") {
      this.findStores(this.searchBox.value);
    }
  }
  static {
    this.ɵfac = function StoreFinderSearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderSearchComponent)(ɵɵdirectiveInject(RoutingService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StoreFinderSearchComponent,
      selectors: [["cx-store-finder-search"]],
      standalone: false,
      decls: 5,
      vars: 2,
      consts: [["searchActionButtons", ""], ["queryInput", ""], [1, "container"], ["class", "row", 4, "cxFeature"], ["class", "row align-items-end", 4, "cxFeature"], [1, "row"], [1, "col-md-12", "col-lg-6"], [1, "form-group", "search-wrapper"], ["type", "text", 1, "form-control", 3, "keyup", "formControl", "placeholder"], ["role", "button", 1, "search", 3, "keyup", "type", "routerLink", "queryParams", "ngClass"], [3, "ngTemplateOutlet"], [1, "row", "align-items-end"], [1, "form-group"], ["for", "store-finder-search-input"], [1, "text-left", "label-content"], [1, "search-wrapper"], ["id", "store-finder-search-input", "type", "text", 1, "form-control", 3, "keyup", "formControl", "placeholder"], [1, "row", "cx-search-links", "mb-3"], [1, "col-6"], [1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "btn", "btn-primary", "btn-block", 3, "routerLink"]],
      template: function StoreFinderSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 2);
          ɵɵtemplate(1, StoreFinderSearchComponent_div_1_Template, 11, 24, "div", 3)(2, StoreFinderSearchComponent_div_2_Template, 15, 24, "div", 4);
          ɵɵelementEnd();
          ɵɵtemplate(3, StoreFinderSearchComponent_ng_template_3_Template, 10, 8, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("cxFeature", "!a11yStoreFinderLabel");
          ɵɵadvance();
          ɵɵproperty("cxFeature", "a11yStoreFinderLabel");
        }
      },
      dependencies: [NgClass, NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, FormControlDirective, RouterLink, IconComponent, FeatureDirective, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderSearchComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-search",
      standalone: false,
      template: `<div class="container">
  <div class="row" *cxFeature="'!a11yStoreFinderLabel'">
    <div class="col-md-12 col-lg-6">
      <div class="form-group search-wrapper">
        <input
          #queryInput
          [formControl]="searchBox"
          (keyup)="onKey($event)"
          type="text"
          class="form-control"
          [attr.aria-label]="'storeFinder.searchBoxLabel' | cxTranslate"
          placeholder="{{ 'storeFinder.searchBox' | cxTranslate }}"
        />
        <cx-icon
          [attr.tabindex]="queryInput.value?.length ? 0 : -1"
          [type]="iconTypes.SEARCH"
          role="button"
          [attr.aria-label]="'storeFinder.searchNearestStores' | cxTranslate"
          [attr.title]="'storeFinder.searchNearestStores' | cxTranslate"
          class="search"
          (keyup)="onKey($event)"
          [routerLink]="['/store-finder/find']"
          [queryParams]="{ query: queryInput.value }"
          [ngClass]="{
            'disabled-action': !(queryInput.value && queryInput.value.length),
          }"
        ></cx-icon>
      </div>
    </div>
    <ng-template [ngTemplateOutlet]="searchActionButtons"></ng-template>
  </div>

  <div class="row align-items-end" *cxFeature="'a11yStoreFinderLabel'">
    <div class="col-md-12 col-lg-6">
      <div class="form-group">
        <label for="store-finder-search-input">
          <span class="text-left label-content">
            {{ 'storeFinder.findStoreBy' | cxTranslate }}
          </span>
          <div class="search-wrapper">
            <input
              #queryInput
              id="store-finder-search-input"
              [formControl]="searchBox"
              (keyup)="onKey($event)"
              type="text"
              class="form-control"
              placeholder="{{ 'storeFinder.searchBox' | cxTranslate }}"
            />
            <cx-icon
              [attr.tabindex]="queryInput.value?.length ? 0 : -1"
              [type]="iconTypes.SEARCH"
              role="button"
              [attr.aria-label]="
                'storeFinder.searchNearestStores' | cxTranslate
              "
              [attr.title]="'storeFinder.searchNearestStores' | cxTranslate"
              class="search"
              (keyup)="onKey($event)"
              [routerLink]="['/store-finder/find']"
              [queryParams]="{ query: queryInput.value }"
              [ngClass]="{
                'disabled-action': !(
                  queryInput.value && queryInput.value.length
                ),
              }"
            ></cx-icon>
          </div>
        </label>
      </div>
    </div>
    <ng-template [ngTemplateOutlet]="searchActionButtons"></ng-template>
  </div>
</div>

<ng-template #searchActionButtons>
  <div class="col-md-12 col-lg-6">
    <div class="row cx-search-links mb-3">
      <div class="col-6">
        <button
          (click)="viewStoresWithMyLoc()"
          class="btn btn-primary btn-block"
        >
          {{ 'storeFinder.useMyLocation' | cxTranslate }}
        </button>
      </div>
      <div class="col-6">
        <button
          [routerLink]="['/store-finder/view-all']"
          class="btn btn-primary btn-block"
        >
          {{ 'storeFinder.viewAllStores' | cxTranslate }}
        </button>
      </div>
    </div>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: RoutingService
  }], null);
})();
var StoreFinderHeaderComponent = class _StoreFinderHeaderComponent {
  static {
    this.ɵfac = function StoreFinderHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderHeaderComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StoreFinderHeaderComponent,
      selectors: [["cx-store-finder-header"]],
      standalone: false,
      decls: 3,
      vars: 3,
      consts: [["role", "search"]],
      template: function StoreFinderHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementContainerStart(0);
          ɵɵelement(1, "cx-store-finder-search", 0);
          ɵɵpipe(2, "cxTranslate");
          ɵɵelementContainerEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵattribute("aria-label", ɵɵpipeBind1(2, 1, "storeFinder.storeFinder"));
        }
      },
      dependencies: [StoreFinderSearchComponent, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderHeaderComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-header",
      standalone: false,
      template: `<ng-container>
  <cx-store-finder-search
    role="search"
    [attr.aria-label]="'storeFinder.storeFinder' | cxTranslate"
  ></cx-store-finder-search>
</ng-container>
`
    }]
  }], null, null);
})();
var StoreFinderMapComponent = class _StoreFinderMapComponent {
  constructor(googleMapRendererService) {
    this.googleMapRendererService = googleMapRendererService;
    this.selectedStoreItem = new EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes.locations && this.locations) {
      this.renderMap();
    }
  }
  /**
   * Sets the center of the map to the given location
   * @param latitude latitude of the new center
   * @param longitude longitude of the new center
   */
  centerMap(latitude, longitude) {
    this.googleMapRendererService.centerMap(latitude, longitude);
  }
  renderMap() {
    this.googleMapRendererService.renderMap(this.mapElement.nativeElement, this.locations, (markerIndex) => {
      this.selectStoreItemClickHandle(markerIndex);
    });
  }
  selectStoreItemClickHandle(markerIndex) {
    this.selectedStoreItem.emit(markerIndex);
  }
  static {
    this.ɵfac = function StoreFinderMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderMapComponent)(ɵɵdirectiveInject(GoogleMapRendererService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StoreFinderMapComponent,
      selectors: [["cx-store-finder-map"]],
      viewQuery: function StoreFinderMapComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c9, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.mapElement = _t.first);
        }
      },
      inputs: {
        locations: "locations"
      },
      outputs: {
        selectedStoreItem: "selectedStoreItem"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature],
      decls: 2,
      vars: 0,
      consts: [["mapElement", ""], ["aria-hidden", "true", 1, "cx-store-map"]],
      template: function StoreFinderMapComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", 1, 0);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderMapComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-map",
      standalone: false,
      template: '<div aria-hidden="true" #mapElement class="cx-store-map"></div>\n'
    }]
  }], () => [{
    type: GoogleMapRendererService
  }], {
    mapElement: [{
      type: ViewChild,
      args: ["mapElement", {
        static: true
      }]
    }],
    locations: [{
      type: Input
    }],
    selectedStoreItem: [{
      type: Output
    }]
  });
})();
var StoreFinderPaginationDetailsComponent = class _StoreFinderPaginationDetailsComponent {
  constructor() {
  }
  getResultsPerPage() {
    if (this.pagination.totalResults > this.pagination.pageSize) {
      const firstItem = this.pagination.currentPage * this.pagination.pageSize + 1;
      let resultsPerPage = (this.pagination.currentPage + 1) * this.pagination.pageSize;
      if (resultsPerPage > this.pagination.totalResults) {
        resultsPerPage = this.pagination.totalResults;
      }
      return `${firstItem} - ${resultsPerPage}`;
    } else {
      return `1 - ${this.pagination.totalResults}`;
    }
  }
  static {
    this.ɵfac = function StoreFinderPaginationDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderPaginationDetailsComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StoreFinderPaginationDetailsComponent,
      selectors: [["cx-store-finder-pagination-details"]],
      inputs: {
        pagination: "pagination"
      },
      standalone: false,
      decls: 3,
      vars: 7,
      consts: [["role", "alert", 1, "cx-pagination-details"]],
      template: function StoreFinderPaginationDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "span", 0);
          ɵɵtext(1);
          ɵɵpipe(2, "cxTranslate");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵtextInterpolate2(" ", ctx.getResultsPerPage(), " ", ɵɵpipeBind2(2, 2, "storeFinder.fromStoresFound", ɵɵpureFunction1(5, _c4, ctx.pagination.totalResults)), "\n");
        }
      },
      dependencies: [TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderPaginationDetailsComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-pagination-details",
      standalone: false,
      template: `<span role="alert" class="cx-pagination-details">
  {{ getResultsPerPage() }}
  {{
    'storeFinder.fromStoresFound'
      | cxTranslate: { count: pagination.totalResults }
  }}
</span>
`
    }]
  }], () => [], {
    pagination: [{
      type: Input
    }]
  });
})();
var LocationDisplayMode;
(function(LocationDisplayMode2) {
  LocationDisplayMode2["LIST_VIEW"] = "listView";
  LocationDisplayMode2["MAP_VIEW"] = "mapView";
})(LocationDisplayMode || (LocationDisplayMode = {}));
var StoreFinderStoreDescriptionComponent = class _StoreFinderStoreDescriptionComponent extends AbstractStoreItemComponent {
  constructor(storeFinderService) {
    super(storeFinderService);
    this.storeFinderService = storeFinderService;
  }
  static {
    this.ɵfac = function StoreFinderStoreDescriptionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderStoreDescriptionComponent)(ɵɵdirectiveInject(StoreFinderService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StoreFinderStoreDescriptionComponent,
      selectors: [["cx-store-finder-store-description"]],
      inputs: {
        location: "location",
        disableMap: "disableMap"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "cx-container"], [1, "cx-store"], ["class", "cx-store-description-address", 4, "ngIf"], [1, "cx-contact"], [1, "cx-list"], [1, "cx-item"], ["target", "_blank", "rel", "noopener noreferrer", 1, "cx-link", 3, "href"], ["class", "cx-item", 4, "ngIf"], ["class", "cx-schedule", 4, "ngIf"], ["class", "cx-features", 4, "ngIf"], ["class", "cx-storeMap", 4, "ngIf"], [1, "cx-store-description-address"], [1, "cx-schedule"], [3, "location"], [1, "cx-features"], [1, "cx-features-header"], ["class", "cx-feature-item", 4, "ngFor", "ngForOf"], [1, "cx-feature-item"], [1, "cx-storeMap"], [3, "locations"]],
      template: function StoreFinderStoreDescriptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, StoreFinderStoreDescriptionComponent_ng_container_0_Template, 18, 15, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.location);
        }
      },
      dependencies: [NgForOf, NgIf, StoreFinderMapComponent, ScheduleComponent, JsonPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderStoreDescriptionComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-store-description",
      standalone: false,
      template: `<ng-container *ngIf="location">
  <div class="cx-container">
    <div class="cx-store">
      <h2>{{ location.displayName || location.name }}</h2>
      <div *ngIf="location.address" class="cx-store-description-address">
        <div>{{ location.address.line1 }} {{ location.address.line2 }}</div>
        <div>
          {{
            getFormattedStoreAddress([
              location.address.town,
              location.address.postalCode,
              location.address.country.isocode,
            ])
          }}
        </div>
      </div>

      <section class="cx-contact">
        <ul class="cx-list">
          <li class="cx-item">
            <a
              class="cx-link"
              [href]="getDirections(location)"
              target="_blank"
              rel="noopener noreferrer"
              [attr.aria-label]="
                'storeFinder.ariaLabelGetDirections' | cxTranslate
              "
              >{{ 'storeFinder.getDirections' | cxTranslate }}</a
            >
          </li>
          <li class="cx-item" *ngIf="location.address?.phone">
            {{ 'storeFinder.call' | cxTranslate }}
            {{ location.address?.phone }}
          </li>
        </ul>
      </section>
      <div class="cx-schedule" *ngIf="location.openingHours">
        <cx-schedule [location]="location">
          <h3>{{ 'storeFinder.storeHours' | cxTranslate }}</h3>
        </cx-schedule>
      </div>

      <div *ngIf="(location.features | json) !== '{}'" class="cx-features">
        <h3 class="cx-features-header">
          {{ 'storeFinder.storeFeatures' | cxTranslate }}
        </h3>

        <div>
          <div
            *ngFor="let feature of location.features?.entry"
            class="cx-feature-item"
          >
            {{ feature.value }}
          </div>
        </div>
      </div>
    </div>
    <div class="cx-storeMap" *ngIf="!disableMap">
      <cx-store-finder-map [locations]="[location]"></cx-store-finder-map>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: StoreFinderService
  }], {
    location: [{
      type: Input
    }],
    disableMap: [{
      type: Input
    }]
  });
})();
var StoreFinderListComponent = class _StoreFinderListComponent {
  constructor(storeFinderService, document) {
    this.storeFinderService = storeFinderService;
    this.document = document;
    this.iconTypes = ICON_TYPE;
    this.displayModes = LocationDisplayMode;
    this.activeDisplayMode = LocationDisplayMode.LIST_VIEW;
    this.isDetailsModeVisible = false;
  }
  centerStoreOnMapByIndex(index, location) {
    this.showStoreDetails(location);
    this.selectedStoreIndex = index;
    this.selectedStore = location;
    this.storeMap.centerMap(this.storeFinderService.getStoreLatitude(this.locations.stores[index]), this.storeFinderService.getStoreLongitude(this.locations.stores[index]));
  }
  selectStoreItemList(index) {
    this.selectedStoreIndex = index;
    const storeListItem = this.document.getElementById("item-" + index);
    storeListItem.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
  showStoreDetails(location) {
    this.isDetailsModeVisible = true;
    this.storeDetails = location;
  }
  hideStoreDetails() {
    this.isDetailsModeVisible = false;
    this.selectedStoreIndex = void 0;
    this.selectedStore = void 0;
    this.storeMap.renderMap();
  }
  setDisplayMode(mode) {
    this.activeDisplayMode = mode;
  }
  isDisplayModeActive(mode) {
    return this.activeDisplayMode === mode;
  }
  static {
    this.ɵfac = function StoreFinderListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderListComponent)(ɵɵdirectiveInject(StoreFinderService), ɵɵdirectiveInject(DOCUMENT));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StoreFinderListComponent,
      selectors: [["cx-store-finder-list"]],
      viewQuery: function StoreFinderListComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c10, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.storeMap = _t.first);
        }
      },
      inputs: {
        locations: "locations",
        useMylocation: "useMylocation"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [["storeMap", ""], [4, "ngIf"], [1, "container", "mb-2"], ["class", "row", 4, "ngIf"], ["class", "row cx-columns", 4, "ngIf"], ["class", "cx-columns-mobile", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [3, "pagination"], [1, "text-left", "cx-back-wrapper"], [1, "cx-visually-hidden"], ["class", "btn btn-block btn-secondary cx-back", 3, "click", 4, "ngIf"], [1, "btn", "btn-block", "btn-secondary", "cx-back", 3, "click"], [3, "type"], [1, "row", "cx-columns"], [1, "col-md-4", "cx-address-col"], ["class", "cx-store-details", 4, "ngIf"], ["class", "cx-list", 4, "ngIf"], [1, "col-md-8", "cx-map-col"], [3, "selectedStoreItem", "locations"], [1, "cx-store-details"], [3, "location", "disableMap"], [1, "cx-list"], ["class", "cx-list-items", 3, "id", "ngClass", 4, "ngFor", "ngForOf"], [1, "cx-list-items", 3, "id", "ngClass"], [3, "storeItemClick", "location", "locationIndex", "displayDistance", "useClickEvent", "listOrderLabel"], [1, "cx-columns-mobile"], ["role", "tablist", 1, "nav", "cx-nav"], ["class", "nav-item cx-nav-item", 4, "ngFor", "ngForOf"], [1, "tab-content"], [3, "ngSwitch"], [3, "ngSwitchCase"], [1, "nav-item", "cx-nav-item"], ["role", "tab", "aria-disabled", "false", 3, "click", "id", "ngClass"], ["id", "tab-listView-panel", "role", "tabpanel", "aria-labelledby", "tab-listView"], [1, "cx-address-col"], ["id", "tab-mapView-panel", "role", "tabpanel", "aria-labelledby", "tab-mapView"], [1, "cx-map-col"], [1, "col-md-12", "cx-not-found"]],
      template: function StoreFinderListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, StoreFinderListComponent_ng_container_0_Template, 6, 4, "ng-container", 1);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.locations);
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase, IconComponent, StoreFinderMapComponent, StoreFinderListItemComponent, StoreFinderStoreDescriptionComponent, StoreFinderPaginationDetailsComponent, KeyValuePipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderListComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-list",
      standalone: false,
      template: `<ng-container *ngIf="locations">
  <div class="container mb-2">
    <div class="row" *ngIf="locations?.pagination">
      <div class="col-md-12">
        <cx-store-finder-pagination-details
          [pagination]="locations.pagination"
        ></cx-store-finder-pagination-details>
      </div>
      <div class="text-left cx-back-wrapper">
        <div class="cx-visually-hidden">
          {{ storeDetails?.displayName }}
        </div>
        <button
          class="btn btn-block btn-secondary cx-back"
          *ngIf="isDetailsModeVisible"
          (click)="hideStoreDetails()"
        >
          <cx-icon [type]="iconTypes.CARET_LEFT"></cx-icon>
          {{ 'storeFinder.back' | cxTranslate }}
        </button>
      </div>
    </div>
    <div *ngIf="locations?.stores" class="row cx-columns">
      <div class="col-md-4 cx-address-col">
        <div class="cx-store-details" *ngIf="isDetailsModeVisible">
          <cx-store-finder-store-description
            [location]="storeDetails"
            [disableMap]="true"
          ></cx-store-finder-store-description>
        </div>
        <ol class="cx-list" *ngIf="!isDetailsModeVisible">
          <li
            *ngFor="let location of locations?.stores; let i = index"
            id="{{ 'item-' + i }}"
            [ngClass]="{
              'cx-selected-item': selectedStoreIndex === i,
            }"
            class="cx-list-items"
          >
            <cx-store-finder-list-item
              [location]="location"
              [locationIndex]="i"
              [displayDistance]="useMylocation"
              [useClickEvent]="true"
              (storeItemClick)="centerStoreOnMapByIndex($event, location)"
              [listOrderLabel]="
                i +
                locations.pagination.currentPage *
                  locations.pagination.pageSize +
                1
              "
            ></cx-store-finder-list-item>
          </li>
        </ol>
      </div>
      <div class="col-md-8 cx-map-col">
        <cx-store-finder-map
          #storeMap
          [locations]="locations.stores"
          (selectedStoreItem)="selectStoreItemList($event)"
        ></cx-store-finder-map>
      </div>
    </div>

    <!-- mobile tabs for column set only -->
    <div *ngIf="locations?.stores" class="cx-columns-mobile">
      <ul class="nav cx-nav" role="tablist">
        <li
          class="nav-item cx-nav-item"
          *ngFor="let mode of displayModes | keyvalue"
        >
          <button
            [id]="'tab-' + mode?.value"
            role="tab"
            [ngClass]="{
              'nav-link': true,
              active: isDisplayModeActive(mode?.value),
            }"
            [attr.aria-controls]="'tab-' + mode?.value + '-panel'"
            [attr.aria-selected]="isDisplayModeActive(mode?.value)"
            aria-disabled="false"
            (click)="setDisplayMode(mode?.value)"
          >
            {{ 'storeFinder.' + mode?.value | cxTranslate }}
          </button>
        </li>
      </ul>
      <div class="tab-content">
        <div [ngSwitch]="activeDisplayMode">
          <ng-template [ngSwitchCase]="displayModes.LIST_VIEW">
            <div
              id="tab-listView-panel"
              role="tabpanel"
              aria-labelledby="tab-listView"
            >
              <div class="cx-address-col">
                <div class="cx-store-details" *ngIf="isDetailsModeVisible">
                  <cx-store-finder-store-description
                    [location]="storeDetails"
                    [disableMap]="true"
                  ></cx-store-finder-store-description>
                </div>
                <ol class="cx-list" *ngIf="!isDetailsModeVisible">
                  <li
                    *ngFor="let location of locations?.stores; let i = index"
                    id="{{ 'item-' + i }}"
                    [ngClass]="{
                      'cx-selected-item': selectedStoreIndex === i,
                    }"
                    class="cx-list-items"
                  >
                    <cx-store-finder-list-item
                      [location]="location"
                      [locationIndex]="i"
                      [displayDistance]="useMylocation"
                      [useClickEvent]="true"
                      (storeItemClick)="
                        centerStoreOnMapByIndex($event, location)
                      "
                      [listOrderLabel]="
                        i +
                        locations.pagination.currentPage *
                          locations.pagination.pageSize +
                        1
                      "
                    ></cx-store-finder-list-item>
                  </li>
                </ol>
              </div>
            </div>
          </ng-template>
          <ng-template [ngSwitchCase]="displayModes.MAP_VIEW">
            <div
              id="tab-mapView-panel"
              role="tabpanel"
              aria-labelledby="tab-mapView"
            >
              <div class="cx-map-col">
                <cx-store-finder-map
                  #storeMap
                  [locations]="
                    selectedStore ? [selectedStore] : locations.stores
                  "
                  (selectedStoreItem)="selectStoreItemList($event)"
                ></cx-store-finder-map>
              </div>
            </div>
          </ng-template>
        </div>
      </div>
    </div>
    <!-- mobile tabs end -->

    <div *ngIf="!locations?.stores" class="row">
      <div class="col-md-12 cx-not-found">
        {{ 'storeFinder.noStoreFound' | cxTranslate }}
      </div>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: StoreFinderService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    locations: [{
      type: Input
    }],
    useMylocation: [{
      type: Input
    }],
    storeMap: [{
      type: ViewChild,
      args: ["storeMap"]
    }]
  });
})();
var StoreFinderSearchResultComponent = class _StoreFinderSearchResultComponent {
  constructor(storeFinderService, route, config) {
    this.storeFinderService = storeFinderService;
    this.route = route;
    this.config = config;
    this.countryCode = null;
    this.searchConfig = {
      currentPage: 0
    };
  }
  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe((params) => this.initialize(params));
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  viewPage(pageNumber) {
    this.searchConfig = __spreadProps(__spreadValues({}, this.searchConfig), {
      currentPage: pageNumber
    });
    this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation, this.radius);
  }
  initialize(params) {
    this.searchQuery = this.parseParameters(params);
    this.useMyLocation = params && params.useMyLocation ? true : false;
    this.searchConfig = __spreadProps(__spreadValues({}, this.searchConfig), {
      currentPage: 0
    });
    this.radius = this.config.googleMaps.radius;
    this.storeFinderService.findStoresAction(this.searchQuery.queryText, this.searchConfig, this.geolocation, this.countryCode, this.useMyLocation, this.radius);
    this.isLoading$ = this.storeFinderService.getStoresLoading();
    this.locations$ = this.storeFinderService.getFindStoresEntities();
  }
  parseParameters(queryParams) {
    let searchQuery;
    if (queryParams.query) {
      searchQuery = {
        queryText: queryParams.query
      };
    } else {
      searchQuery = {
        queryText: ""
      };
    }
    searchQuery.useMyLocation = queryParams.useMyLocation != null && queryParams.useMyLocation.toUpperCase() === "TRUE";
    return searchQuery;
  }
  static {
    this.ɵfac = function StoreFinderSearchResultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderSearchResultComponent)(ɵɵdirectiveInject(StoreFinderService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(StoreFinderConfig));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StoreFinderSearchResultComponent,
      selectors: [["cx-store-finder-search-result"]],
      standalone: false,
      decls: 5,
      vars: 6,
      consts: [["loading", ""], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [3, "locations", "useMylocation", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "cx-pagination"], ["aria-hidden", "true", 3, "viewPageEvent", "pagination"], [3, "locations", "useMylocation"], [1, "container"], [1, "row"], ["role", "alert", 1, "cx-no-stores"], [1, "cx-spinner"]],
      template: function StoreFinderSearchResultComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, StoreFinderSearchResultComponent_div_0_Template, 4, 3, "div", 1);
          ɵɵpipe(1, "async");
          ɵɵpipe(2, "async");
          ɵɵtemplate(3, StoreFinderSearchResultComponent_ng_template_3_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r4 = ɵɵreference(4);
          ɵɵproperty("ngIf", !ɵɵpipeBind1(1, 2, ctx.isLoading$) && ɵɵpipeBind1(2, 4, ctx.locations$))("ngIfElse", loading_r4);
        }
      },
      dependencies: [NgIf, PaginationComponent, SpinnerComponent, StoreFinderListComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderSearchResultComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-search-result",
      standalone: false,
      template: `<div
  *ngIf="
    !(isLoading$ | async) && (locations$ | async) as locations;
    else loading
  "
>
  <div *ngIf="locations?.stores.length">
    <div class="cx-pagination">
      <cx-pagination
        aria-hidden="true"
        [pagination]="locations.pagination"
        (viewPageEvent)="viewPage($event)"
      ></cx-pagination>
    </div>
  </div>
  <cx-store-finder-list
    *ngIf="locations?.stores.length"
    [locations]="locations"
    [useMylocation]="useMyLocation"
  ></cx-store-finder-list>
  <div class="container" *ngIf="!locations?.stores.length">
    <div class="row">
      <span class="cx-no-stores" role="alert">
        {{ 'storeFinder.noStoresMessage' | cxTranslate }}
      </span>
    </div>
  </div>
</div>
<ng-template #loading>
  <div class="cx-spinner">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: StoreFinderService
  }, {
    type: ActivatedRoute
  }, {
    type: StoreFinderConfig
  }], null);
})();
var StoreFinderStoresCountComponent = class _StoreFinderStoresCountComponent {
  constructor(storeFinderService) {
    this.storeFinderService = storeFinderService;
    this.routingService = inject(RoutingService, {
      optional: true
    });
  }
  ngOnInit() {
    this.storeFinderService.viewAllStores();
    this.locations$ = this.storeFinderService.getViewAllStoresEntities();
    this.isLoading$ = this.storeFinderService.getViewAllStoresLoading();
  }
  navigateToLocation(isoCode, event) {
    if (this.routingService) {
      event?.preventDefault();
      this.routingService.go(["/store-finder/country", isoCode]);
    }
  }
  static {
    this.ɵfac = function StoreFinderStoresCountComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderStoresCountComponent)(ɵɵdirectiveInject(StoreFinderService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StoreFinderStoresCountComponent,
      selectors: [["cx-store-finder-stores-count"]],
      standalone: false,
      decls: 5,
      vars: 6,
      consts: [["loading", ""], [4, "ngIf", "ngIfElse"], ["class", "col-12 m-3", 4, "ngIf"], [1, "cx-count", "container"], ["class", "row", 4, "ngIf"], [1, "col-12", "m-3"], ["role", "alert"], [1, "row"], ["class", "cx-set col-sm-6 col-md-4 col-lg-4 col-xl-3", 4, "ngFor", "ngForOf"], [1, "cx-set", "col-sm-6", "col-md-4", "col-lg-4", "col-xl-3"], ["role", "button", 1, "btn-link", 3, "keydown.space", "routerLink"], ["aria-hidden", "true", 1, "cx-title"], [1, "cx-name", 3, "ngClass"], ["class", "cx-country-count", 3, "ngClass", 4, "ngIf"], [1, "cx-country-count", 3, "ngClass"], ["role", "alert", 1, "cx-no-stores"], [1, "cx-count-spinner"]],
      template: function StoreFinderStoresCountComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, StoreFinderStoresCountComponent_ng_container_0_Template, 5, 3, "ng-container", 1);
          ɵɵpipe(1, "async");
          ɵɵpipe(2, "async");
          ɵɵtemplate(3, StoreFinderStoresCountComponent_ng_template_3_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r5 = ɵɵreference(4);
          ɵɵproperty("ngIf", !ɵɵpipeBind1(1, 2, ctx.isLoading$) && ɵɵpipeBind1(2, 4, ctx.locations$))("ngIfElse", loading_r5);
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, RouterLink, SpinnerComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderStoresCountComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-stores-count",
      standalone: false,
      template: `<ng-container
  *ngIf="
    !(isLoading$ | async) && (locations$ | async) as locations;
    else loading
  "
>
  <div *ngIf="locations?.length" class="col-12 m-3">
    <span role="alert">{{
      'storeFinder.ariaLabelCountriesCount'
        | cxTranslate: { count: locations?.length }
    }}</span>
  </div>
  <div class="cx-count container">
    <div class="row" *ngIf="locations?.length">
      <div
        *ngFor="let country of locations"
        class="cx-set col-sm-6 col-md-4 col-lg-4 col-xl-3"
      >
        <a
          [routerLink]="['../country', country.isoCode]"
          class="btn-link"
          role="button"
          [attr.aria-label]="country.name + '(' + country.count + ')'"
          (keydown.space)="navigateToLocation(country.isoCode, $event)"
        >
          <h2 class="cx-title" aria-hidden="true">
            <span
              [ngClass]="
                country?.storeCountDataList
                  ? 'country-header'
                  : 'country-header-link'
              "
              class="cx-name"
              >{{ country.name }}</span
            >
            <span
              [ngClass]="
                country?.storeCountDataList
                  ? 'country-header'
                  : 'country-header-link'
              "
              *ngIf="!country?.storeCountDataList"
              class="cx-country-count"
              >({{ country.count }})</span
            >
          </h2>
        </a>
      </div>
    </div>
    <div class="row" *ngIf="!locations?.length">
      <span class="cx-no-stores" role="alert">
        {{ 'storeFinder.noStoresMessage' | cxTranslate }}
      </span>
    </div>
  </div>
</ng-container>
<ng-template #loading>
  <div class="cx-count-spinner"><cx-spinner></cx-spinner></div>
</ng-template>
`
    }]
  }], () => [{
    type: StoreFinderService
  }], {
    routingService: [{
      type: Optional
    }]
  });
})();
var StoreFinderComponent = class _StoreFinderComponent {
  static {
    this.ɵfac = function StoreFinderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StoreFinderComponent,
      selectors: [["cx-store-finder"]],
      standalone: false,
      decls: 3,
      vars: 0,
      consts: [[1, "cx-store-finder-wrapper"]],
      template: function StoreFinderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵelement(1, "cx-store-finder-header")(2, "router-outlet");
          ɵɵelementEnd();
        }
      },
      dependencies: [RouterOutlet, StoreFinderHeaderComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder",
      standalone: false,
      template: '<div class="cx-store-finder-wrapper">\n  <cx-store-finder-header></cx-store-finder-header>\n  <router-outlet></router-outlet>\n</div>\n'
    }]
  }], null, null);
})();
var StoreFinderStoreComponent = class _StoreFinderStoreComponent {
  constructor(storeFinderService, route, routingService) {
    this.storeFinderService = storeFinderService;
    this.route = route;
    this.routingService = routingService;
    this.iconTypes = ICON_TYPE;
  }
  ngOnInit() {
    if (!this.location) {
      this.requestStoresData();
      this.location$ = this.storeFinderService.getFindStoreEntityById();
      this.isLoading$ = this.storeFinderService.getStoresLoading();
    }
  }
  requestStoresData() {
    this.storeFinderService.viewStoreById(this.route.snapshot.params.store);
  }
  goBack() {
    this.routingService.go([`store-finder/country/${this.route.snapshot.params.country}`]);
  }
  static {
    this.ɵfac = function StoreFinderStoreComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderStoreComponent)(ɵɵdirectiveInject(StoreFinderService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(RoutingService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StoreFinderStoreComponent,
      selectors: [["cx-store-finder-store"]],
      inputs: {
        location: "location",
        disableMap: "disableMap"
      },
      standalone: false,
      decls: 6,
      vars: 6,
      consts: [["loading", ""], ["aria-live", "assertive", "aria-atomic", "true", "aria-relevant", "additions"], ["class", "container", 4, "ngIf", "ngIfElse"], [1, "container"], [1, "cx-visually-hidden"], [1, "cx-store-actions"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [3, "type"], [1, "row"], [1, "col-12", "p-0"], [3, "disableMap", "location"], [1, "cx-spinner"]],
      template: function StoreFinderStoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1);
          ɵɵtemplate(1, StoreFinderStoreComponent_div_1_Template, 11, 7, "div", 2);
          ɵɵpipe(2, "async");
          ɵɵpipe(3, "async");
          ɵɵelementEnd();
          ɵɵtemplate(4, StoreFinderStoreComponent_ng_template_4_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r4 = ɵɵreference(5);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.location || !ɵɵpipeBind1(2, 2, ctx.isLoading$) && ɵɵpipeBind1(3, 4, ctx.location$))("ngIfElse", loading_r4);
        }
      },
      dependencies: [NgIf, SpinnerComponent, IconComponent, StoreFinderStoreDescriptionComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderStoreComponent, [{
    type: Component,
    args: [{
      selector: "cx-store-finder-store",
      standalone: false,
      template: `<div aria-live="assertive" aria-atomic="true" aria-relevant="additions">
  <div
    class="container"
    *ngIf="
      location || (!(isLoading$ | async) && (location$ | async)) as location;
      else loading
    "
  >
    <div class="cx-visually-hidden">
      {{ location?.displayName }}
    </div>
    <div class="cx-store-actions">
      <button class="btn btn-block btn-secondary" (click)="goBack()">
        <cx-icon [type]="iconTypes.CARET_LEFT"></cx-icon>
        {{ 'storeFinder.backToList' | cxTranslate }}
      </button>
    </div>
    <div class="row">
      <div class="col-12 p-0">
        <cx-store-finder-store-description
          [disableMap]="disableMap"
          [location]="location"
        ></cx-store-finder-store-description>
      </div>
    </div>
  </div>
</div>

<ng-template #loading>
  <div class="cx-spinner"><cx-spinner></cx-spinner></div>
</ng-template>
`
    }]
  }], () => [{
    type: StoreFinderService
  }, {
    type: ActivatedRoute
  }, {
    type: RoutingService
  }], {
    location: [{
      type: Input
    }],
    disableMap: [{
      type: Input
    }]
  });
})();
var StoreFinderComponentsModule = class _StoreFinderComponentsModule {
  static {
    this.ɵfac = function StoreFinderComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _StoreFinderComponentsModule,
      declarations: [StoreFinderSearchComponent, StoreFinderListComponent, StoreFinderMapComponent, StoreFinderListItemComponent, StoreFinderStoresCountComponent, StoreFinderGridComponent, StoreFinderStoreDescriptionComponent, ScheduleComponent, StoreFinderHeaderComponent, StoreFinderSearchResultComponent, StoreFinderComponent, StoreFinderPaginationDetailsComponent, StoreFinderStoreComponent],
      imports: [CommonModule, ReactiveFormsModule, RouterModule, ListNavigationModule, SpinnerModule, UrlModule, StoreFinderCoreModule, I18nModule, IconModule, OutletModule, FeaturesConfigModule, BtnLikeLinkModule],
      exports: [ScheduleComponent, StoreFinderComponent, StoreFinderGridComponent, StoreFinderHeaderComponent, StoreFinderListItemComponent, StoreFinderMapComponent, StoreFinderPaginationDetailsComponent, StoreFinderSearchComponent, StoreFinderSearchResultComponent, StoreFinderListComponent, StoreFinderStoreDescriptionComponent, StoreFinderStoresCountComponent, StoreFinderStoreComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          StoreFinderComponent: {
            component: StoreFinderComponent,
            childRoutes: [{
              path: "find",
              component: StoreFinderSearchResultComponent
            }, {
              path: "view-all",
              component: StoreFinderStoresCountComponent
            }, {
              path: "country/:country",
              component: StoreFinderGridComponent
            }, {
              path: "country/:country/region/:region",
              component: StoreFinderGridComponent
            }, {
              path: "country/:country/region/:region/:store",
              component: StoreFinderStoreComponent
            }, {
              path: "country/:country/:store",
              component: StoreFinderStoreComponent
            }]
          }
        }
      })],
      imports: [CommonModule, ReactiveFormsModule, RouterModule, ListNavigationModule, SpinnerModule, UrlModule, StoreFinderCoreModule, I18nModule, IconModule, OutletModule, FeaturesConfigModule, BtnLikeLinkModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, RouterModule, ListNavigationModule, SpinnerModule, UrlModule, StoreFinderCoreModule, I18nModule, IconModule, OutletModule, FeaturesConfigModule, BtnLikeLinkModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          StoreFinderComponent: {
            component: StoreFinderComponent,
            childRoutes: [{
              path: "find",
              component: StoreFinderSearchResultComponent
            }, {
              path: "view-all",
              component: StoreFinderStoresCountComponent
            }, {
              path: "country/:country",
              component: StoreFinderGridComponent
            }, {
              path: "country/:country/region/:region",
              component: StoreFinderGridComponent
            }, {
              path: "country/:country/region/:region/:store",
              component: StoreFinderStoreComponent
            }, {
              path: "country/:country/:store",
              component: StoreFinderStoreComponent
            }]
          }
        }
      })],
      declarations: [StoreFinderSearchComponent, StoreFinderListComponent, StoreFinderMapComponent, StoreFinderListItemComponent, StoreFinderStoresCountComponent, StoreFinderGridComponent, StoreFinderStoreDescriptionComponent, ScheduleComponent, StoreFinderHeaderComponent, StoreFinderSearchResultComponent, StoreFinderComponent, StoreFinderPaginationDetailsComponent, StoreFinderStoreComponent],
      exports: [ScheduleComponent, StoreFinderComponent, StoreFinderGridComponent, StoreFinderHeaderComponent, StoreFinderListItemComponent, StoreFinderMapComponent, StoreFinderPaginationDetailsComponent, StoreFinderSearchComponent, StoreFinderSearchResultComponent, StoreFinderListComponent, StoreFinderStoreDescriptionComponent, StoreFinderStoresCountComponent, StoreFinderStoreComponent]
    }]
  }], null, null);
})();

// node_modules/@spartacus/storefinder/fesm2022/spartacus-storefinder.mjs
var StoreFinderModule = class _StoreFinderModule {
  static {
    this.ɵfac = function StoreFinderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFinderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _StoreFinderModule,
      imports: [StoreFinderCoreModule, StoreFinderOccModule, StoreFinderComponentsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [StoreFinderCoreModule, StoreFinderOccModule, StoreFinderComponentsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFinderModule, [{
    type: NgModule,
    args: [{
      imports: [StoreFinderCoreModule, StoreFinderOccModule, StoreFinderComponentsModule]
    }]
  }], null, null);
})();

export {
  StoreFinderModule
};
//# sourceMappingURL=chunk-XYR6FMEW.js.map
