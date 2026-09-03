import {
  AccountSummaryFacade,
  DocumentFields,
  DocumentStatus,
  FilterByOptions
} from "./chunk-B2VU7AO2.js";
import {
  AdministrationModule
} from "./chunk-7TTHTSZH.js";
import {
  AdminGuard,
  ItemService,
  ListComponent,
  ListModule,
  ListService,
  OrganizationPageMetaResolver,
  OrganizationTableType,
  ToggleLinkCellComponent,
  UnitListComponent,
  UnitListService
} from "./chunk-UQFD64K7.js";
import {
  ROUTE_PARAMS
} from "./chunk-NOGPYLJ7.js";
import "./chunk-YJXUXPBZ.js";
import "./chunk-LZQV6UAH.js";
import {
  BREAKPOINT,
  CardComponent,
  CardModule,
  DatePickerComponent,
  DatePickerModule,
  FileDownloadService,
  FormErrorsComponent,
  FormErrorsModule,
  ICON_TYPE,
  IconComponent,
  IconModule,
  NgSelectA11yDirective,
  NgSelectA11yModule,
  PaginationComponent,
  PaginationModule,
  SortingComponent,
  SortingModule,
  TableLayout
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  AuthGuard,
  ContentPageMetaResolver,
  ConverterService,
  CxDatePipe,
  FeatureDirective,
  FeaturesConfigModule,
  I18nModule,
  LanguageService,
  LoggerService,
  OccEndpointsService,
  PageMetaResolver,
  RoutingService,
  SemanticPathService,
  TranslatePipe,
  TranslationService,
  UserIdService,
  provideDefaultConfig,
  provideDefaultConfigFactory,
  tryNormalizeHttpError
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import "./chunk-EBCNDD52.js";
import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-YMQEGXEG.js";
import "./chunk-6KXUHIAW.js";
import "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import {
  HttpClient
} from "./chunk-2A6OHZCE.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
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
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7OJSO65L.js";
import {
  defer
} from "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  distinctUntilChanged,
  map,
  shareReplay,
  skip,
  take,
  tap,
  zip
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-account-summary-core.mjs
var AccountSummaryAdapter = class {
};
var AccountSummaryConnector = class _AccountSummaryConnector {
  constructor(accountSummaryAdapter) {
    this.accountSummaryAdapter = accountSummaryAdapter;
  }
  getAccountSummary(userId, orgUnitId) {
    return this.accountSummaryAdapter.getAccountSummary(userId, orgUnitId);
  }
  getDocumentList(userId, orgUnitId, params) {
    return this.accountSummaryAdapter.getDocumentList(userId, orgUnitId, params);
  }
  getDocumentAttachment(userId, orgUnitId, orgDocumentId, orgDocumentAttachmentId) {
    return this.accountSummaryAdapter.getDocumentAttachment(userId, orgUnitId, orgDocumentId, orgDocumentAttachmentId);
  }
  static {
    this.ɵfac = function AccountSummaryConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountSummaryConnector)(ɵɵinject(AccountSummaryAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AccountSummaryConnector,
      factory: _AccountSummaryConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSummaryConnector, [{
    type: Injectable
  }], () => [{
    type: AccountSummaryAdapter
  }], null);
})();
var AccountSummaryService = class _AccountSummaryService {
  constructor(routingService, userIdService, accountSummaryConnector) {
    this.routingService = routingService;
    this.userIdService = userIdService;
    this.accountSummaryConnector = accountSummaryConnector;
    this.subscriptions = new Subscription();
    this.subscriptions.add(this.userIdService.takeUserId().subscribe((userId) => this.userId = userId));
    this.subscriptions.add(this.getOrgUnitId().subscribe((orgUnitId) => this.orgUnitId = orgUnitId));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  getAccountSummary(orgUnitId) {
    return this.accountSummaryConnector.getAccountSummary(this.userId, orgUnitId ?? this.orgUnitId).pipe(shareReplay(1));
  }
  getDocumentList(params, orgUnitId) {
    return this.accountSummaryConnector.getDocumentList(this.userId, orgUnitId || this.orgUnitId, params).pipe(shareReplay(1));
  }
  getDocumentAttachment(orgDocumentId, orgDocumentAttachmentId, orgUnitId) {
    return this.accountSummaryConnector.getDocumentAttachment(this.userId, orgUnitId || this.orgUnitId, orgDocumentId, orgDocumentAttachmentId).pipe(shareReplay(1));
  }
  getOrgUnitId() {
    return this.routingService.getRouterState().pipe(map((routingData) => routingData.state.params), distinctUntilChanged(), map((params) => params.orgUnit));
  }
  static {
    this.ɵfac = function AccountSummaryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountSummaryService)(ɵɵinject(RoutingService), ɵɵinject(UserIdService), ɵɵinject(AccountSummaryConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AccountSummaryService,
      factory: _AccountSummaryService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSummaryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: UserIdService
  }, {
    type: AccountSummaryConnector
  }], null);
})();
var ACCOUNT_SUMMARY_NORMALIZER = new InjectionToken("AccountSummaryNormalizer");
var ACCOUNT_SUMMARY_DOCUMENT_NORMALIZER = new InjectionToken("AccountSummaryDocumentNormalizer");
var ACCOUNT_SUMMARY_LIST_TRANSLATION_KEY = "orgAccountSummaryList.breadcrumbs.list";
var AccountSummaryPageMetaResolver = class _AccountSummaryPageMetaResolver extends OrganizationPageMetaResolver {
  constructor(contentPageMetaResolver, translation, semanticPath, routingService) {
    super(contentPageMetaResolver, translation, semanticPath, routingService);
    this.contentPageMetaResolver = contentPageMetaResolver;
    this.translation = translation;
    this.semanticPath = semanticPath;
    this.routingService = routingService;
    this.ACCOUNT_SUMMARY_SEMANTIC_ROUTE = "orgAccountSummary";
    this.ACCOUNT_SUMMARY_LIST_LABEL = "Account Summaries";
    this.ACCOUNT_SUMMARY_LIST_PATH = "/organization/account-summary";
    this.orgAccountSummaryBreadcrumb$ = defer(() => this.routingService.getRouterState()).pipe(map((routerState) => routerState?.state?.semanticRoute), distinctUntilChanged(), switchMap((semanticRoute) => {
      return semanticRoute === this.ACCOUNT_SUMMARY_SEMANTIC_ROUTE ? this.translation.translate(this.ORGANIZATION_TRANSLATION_KEY).pipe(map((label) => [{
        label,
        link: this.semanticPath.get(this.ORGANIZATION_SEMANTIC_ROUTE)
      }])) : combineLatest([this.translation.translate(this.ORGANIZATION_TRANSLATION_KEY), this.translation.translate(ACCOUNT_SUMMARY_LIST_TRANSLATION_KEY)]).pipe(map(([orgLabel, _label]) => [{
        label: orgLabel,
        link: this.semanticPath.get(this.ORGANIZATION_SEMANTIC_ROUTE)
      }, {
        label: this.ACCOUNT_SUMMARY_LIST_LABEL,
        link: this.semanticPath.get(this.ACCOUNT_SUMMARY_SEMANTIC_ROUTE)
      }]));
    }));
    this.breadcrumbs$ = combineLatest([this.orgAccountSummaryBreadcrumb$, defer(() => this.contentPageMetaResolver.resolveBreadcrumbs())]).pipe(map(([orgAccountSummaryBreadcrumb, breadcrumbs = []]) => {
      const [home, ...restBreadcrumbs] = breadcrumbs;
      return [home, ...orgAccountSummaryBreadcrumb, ...restBreadcrumbs];
    }), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  getScore(page) {
    return super.getScore(page) + (page.label?.startsWith(this.ACCOUNT_SUMMARY_LIST_PATH) ? 1 : -1);
  }
  static {
    this.ɵfac = function AccountSummaryPageMetaResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountSummaryPageMetaResolver)(ɵɵinject(ContentPageMetaResolver), ɵɵinject(TranslationService), ɵɵinject(SemanticPathService), ɵɵinject(RoutingService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AccountSummaryPageMetaResolver,
      factory: _AccountSummaryPageMetaResolver.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSummaryPageMetaResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ContentPageMetaResolver
  }, {
    type: TranslationService
  }, {
    type: SemanticPathService
  }, {
    type: RoutingService
  }], null);
})();
var facadeProviders = [AccountSummaryService, {
  provide: AccountSummaryFacade,
  useExisting: AccountSummaryService
}];
var AccountSummaryCoreModule = class _AccountSummaryCoreModule {
  static {
    this.ɵfac = function AccountSummaryCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountSummaryCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AccountSummaryCoreModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [...facadeProviders, AccountSummaryConnector, {
        provide: PageMetaResolver,
        useExisting: AccountSummaryPageMetaResolver,
        multi: true
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSummaryCoreModule, [{
    type: NgModule,
    args: [{
      providers: [...facadeProviders, AccountSummaryConnector, {
        provide: PageMetaResolver,
        useExisting: AccountSummaryPageMetaResolver,
        multi: true
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-account-summary-occ.mjs
var OccAccountSummaryAdapter = class _OccAccountSummaryAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  getAccountSummary(userId, orgUnitId) {
    return this.http.get(this.buildAccountSummaryUrl(userId, orgUnitId)).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), this.converter.pipeable(ACCOUNT_SUMMARY_NORMALIZER));
  }
  getDocumentList(userId, orgUnitId, params) {
    return this.http.get(this.buildDocumentListUrl(userId, orgUnitId, params)).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), this.converter.pipeable(ACCOUNT_SUMMARY_DOCUMENT_NORMALIZER));
  }
  getDocumentAttachment(userId, orgUnitId, orgDocumentId, orgDocumentAttachmentId) {
    const options = {
      responseType: "blob"
    };
    return this.http.get(this.buildDocumentAttachmentUrl(userId, orgUnitId, orgDocumentId, orgDocumentAttachmentId), options).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  buildAccountSummaryUrl(userId, orgUnitId) {
    return this.occEndpoints.buildUrl("accountSummary", {
      urlParams: {
        userId,
        orgUnitId
      }
    });
  }
  buildDocumentListUrl(userId, orgUnitId, queryParams) {
    return this.occEndpoints.buildUrl("accountSummaryDocument", {
      urlParams: {
        userId,
        orgUnitId
      },
      queryParams
    });
  }
  buildDocumentAttachmentUrl(userId, orgUnitId, orgDocumentId, orgDocumentAttachmentId) {
    return this.occEndpoints.buildUrl("accountSummaryDocumentAttachment", {
      urlParams: {
        userId,
        orgUnitId,
        orgDocumentId,
        orgDocumentAttachmentId
      }
    });
  }
  static {
    this.ɵfac = function OccAccountSummaryAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccAccountSummaryAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccAccountSummaryAdapter,
      factory: _OccAccountSummaryAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccAccountSummaryAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var accountSummaryHeaderOccEndpoints = {
  accountSummary: "users/${userId}/orgUnits/${orgUnitId}/accountSummary",
  accountSummaryDocument: "users/${userId}/orgUnits/${orgUnitId}/orgDocuments",
  accountSummaryDocumentAttachment: "users/${userId}/orgUnits/${orgUnitId}/orgDocuments/${orgDocumentId}/attachments/${orgDocumentAttachmentId}"
};
var defaultOccAccountSummaryConfig = {
  backend: {
    occ: {
      endpoints: __spreadValues({}, accountSummaryHeaderOccEndpoints)
    }
  }
};
var AccountSummaryOccModule = class _AccountSummaryOccModule {
  static {
    this.ɵfac = function AccountSummaryOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountSummaryOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AccountSummaryOccModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccAccountSummaryConfig), {
        provide: AccountSummaryAdapter,
        useClass: OccAccountSummaryAdapter
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSummaryOccModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig(defaultOccAccountSummaryConfig), {
        provide: AccountSummaryAdapter,
        useClass: OccAccountSummaryAdapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-account-summary-components.mjs
var _c0 = (a0) => ({
  label: a0
});
var _c1 = (a0, a1) => ({
  ariaLabel: a0,
  ariaControls: a1
});
var _c2 = (a0) => ({
  formGroup: a0,
  type: "text"
});
var _c3 = (a0) => ({
  formGroup: a0,
  type: "date"
});
var _c4 = (a0) => ({
  formGroup: a0,
  type: "number"
});
function AccountSummaryDocumentFilterComponent_ng_template_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-date-picker", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const formGroup_r2 = ɵɵnextContext().formGroup;
    ɵɵadvance();
    ɵɵproperty("control", formGroup_r2.controls.from);
  }
}
function AccountSummaryDocumentFilterComponent_ng_template_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 10)(1, "cx-form-errors", 11);
    ɵɵpipe(2, "cxTranslate");
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r2 = ɵɵnextContext();
    const formGroup_r2 = ctx_r2.formGroup;
    const type_r4 = ctx_r2.type;
    ɵɵproperty("type", type_r4);
    ɵɵattribute("aria-invalid", ((tmp_8_0 = formGroup_r2.get("from")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = formGroup_r2.get("from")) == null ? null : tmp_8_0.invalid))("aria-errormessage", "fromError");
    ɵɵadvance();
    ɵɵproperty("translationParams", ɵɵpureFunction1(7, _c0, ɵɵpipeBind1(2, 5, "orgAccountSummary.filter.startRange")))("control", formGroup_r2.controls.from);
  }
}
function AccountSummaryDocumentFilterComponent_ng_template_0_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-date-picker", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const formGroup_r2 = ɵɵnextContext().formGroup;
    ɵɵadvance();
    ɵɵproperty("control", formGroup_r2.controls.to);
  }
}
function AccountSummaryDocumentFilterComponent_ng_template_0_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 13)(1, "cx-form-errors", 14);
    ɵɵpipe(2, "cxTranslate");
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r2 = ɵɵnextContext();
    const formGroup_r2 = ctx_r2.formGroup;
    const type_r4 = ctx_r2.type;
    ɵɵproperty("type", type_r4);
    ɵɵattribute("aria-invalid", ((tmp_8_0 = formGroup_r2.get("to")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = formGroup_r2.get("to")) == null ? null : tmp_8_0.invalid))("aria-errormessage", "toError");
    ɵɵadvance();
    ɵɵproperty("translationParams", ɵɵpureFunction1(7, _c0, ɵɵpipeBind1(2, 5, "orgAccountSummary.filter.endRange")))("control", formGroup_r2.controls.to);
  }
}
function AccountSummaryDocumentFilterComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 5);
    ɵɵelementStart(1, "label", 6)(2, "span");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(5, AccountSummaryDocumentFilterComponent_ng_template_0_ng_container_5_Template, 2, 1, "ng-container", 7)(6, AccountSummaryDocumentFilterComponent_ng_template_0_ng_template_6_Template, 3, 9, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementStart(8, "label", 6)(9, "span");
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(12, AccountSummaryDocumentFilterComponent_ng_template_0_ng_container_12_Template, 2, 1, "ng-container", 7)(13, AccountSummaryDocumentFilterComponent_ng_template_0_ng_template_13_Template, 3, 9, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelement(15, "cx-form-errors", 8);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const formGroup_r2 = ctx.formGroup;
    const type_r4 = ctx.type;
    const inputFrom_r5 = ɵɵreference(7);
    const inputTo_r6 = ɵɵreference(14);
    ɵɵproperty("formGroup", formGroup_r2);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 9, "orgAccountSummary.filter.startRange"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", type_r4 === "date")("ngIfElse", inputFrom_r5);
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(11, 11, "orgAccountSummary.filter.endRange"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", type_r4 === "date")("ngIfElse", inputTo_r6);
    ɵɵadvance(3);
    ɵɵproperty("control", formGroup_r2)("prefix", "orgAccountSummary.filter.errors");
  }
}
function AccountSummaryDocumentFilterComponent_div_3_label_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 6)(1, "span");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(4, "ng-select", 24)(5, "cx-form-errors", 17);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 6, "orgAccountSummary.filter.documentType"));
    ɵɵadvance(2);
    ɵɵproperty("searchable", false)("clearable", false)("items", ctx_r7.documentTypeOptions);
    ɵɵadvance();
    ɵɵproperty("translationParams", ɵɵpureFunction1(10, _c0, ɵɵpipeBind1(6, 8, "orgAccountSummary.filter.documentType")))("control", ctx_r7.filterForm.controls.documentType);
  }
}
function AccountSummaryDocumentFilterComponent_div_3_label_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 6)(1, "span");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(4, "input", 25)(5, "cx-form-errors", 26);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 5, "orgAccountSummary.filter.documentNumber"));
    ɵɵadvance(2);
    ɵɵattribute("aria-invalid", ((tmp_5_0 = ctx_r7.filterForm.get("documentNumber")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r7.filterForm.get("documentNumber")) == null ? null : tmp_5_0.invalid))("aria-errormessage", "documentNumberError");
    ɵɵadvance();
    ɵɵproperty("translationParams", ɵɵpureFunction1(9, _c0, ɵɵpipeBind1(6, 7, "orgAccountSummary.filter.documentNumber")))("control", ctx_r7.filterForm.controls.documentNumber);
  }
}
function AccountSummaryDocumentFilterComponent_div_3_ng_template_19_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AccountSummaryDocumentFilterComponent_div_3_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AccountSummaryDocumentFilterComponent_div_3_ng_template_19_ng_container_0_Template, 1, 0, "ng-container", 27);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    const rangeInput_r9 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", rangeInput_r9)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r7.filterForm.get("documentNumberRange")));
  }
}
function AccountSummaryDocumentFilterComponent_div_3_ng_template_20_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AccountSummaryDocumentFilterComponent_div_3_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AccountSummaryDocumentFilterComponent_div_3_ng_template_20_ng_container_0_Template, 1, 0, "ng-container", 27);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    const rangeInput_r9 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", rangeInput_r9)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, ctx_r7.filterForm.get("documentDateRange")));
  }
}
function AccountSummaryDocumentFilterComponent_div_3_ng_template_21_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AccountSummaryDocumentFilterComponent_div_3_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AccountSummaryDocumentFilterComponent_div_3_ng_template_21_ng_container_0_Template, 1, 0, "ng-container", 27);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    const rangeInput_r9 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", rangeInput_r9)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, ctx_r7.filterForm.get("dueDateRange")));
  }
}
function AccountSummaryDocumentFilterComponent_div_3_ng_template_22_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AccountSummaryDocumentFilterComponent_div_3_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AccountSummaryDocumentFilterComponent_div_3_ng_template_22_ng_container_0_Template, 1, 0, "ng-container", 27);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    const rangeInput_r9 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", rangeInput_r9)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c4, ctx_r7.filterForm.get("originalAmountRange")));
  }
}
function AccountSummaryDocumentFilterComponent_div_3_ng_template_23_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AccountSummaryDocumentFilterComponent_div_3_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AccountSummaryDocumentFilterComponent_div_3_ng_template_23_ng_container_0_Template, 1, 0, "ng-container", 27);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    const rangeInput_r9 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", rangeInput_r9)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c4, ctx_r7.filterForm.get("openAmountRange")));
  }
}
function AccountSummaryDocumentFilterComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15)(1, "label", 6)(2, "span");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(5, "ng-select", 16);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelement(7, "cx-form-errors", 17);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(9, "label", 6)(10, "span");
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(13, "ng-select", 18);
    ɵɵpipe(14, "cxTranslate");
    ɵɵelement(15, "cx-form-errors", 17);
    ɵɵpipe(16, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(17, AccountSummaryDocumentFilterComponent_div_3_label_17_Template, 7, 12, "label", 19)(18, AccountSummaryDocumentFilterComponent_div_3_label_18_Template, 7, 11, "label", 19)(19, AccountSummaryDocumentFilterComponent_div_3_ng_template_19_Template, 1, 4, "ng-template", 20)(20, AccountSummaryDocumentFilterComponent_div_3_ng_template_20_Template, 1, 4, "ng-template", 20)(21, AccountSummaryDocumentFilterComponent_div_3_ng_template_21_Template, 1, 4, "ng-template", 20)(22, AccountSummaryDocumentFilterComponent_div_3_ng_template_22_Template, 1, 4, "ng-template", 20)(23, AccountSummaryDocumentFilterComponent_div_3_ng_template_23_Template, 1, 4, "ng-template", 20);
    ɵɵelementStart(24, "div", 21)(25, "button", 22);
    ɵɵlistener("click", function AccountSummaryDocumentFilterComponent_div_3_Template_button_click_25_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.resetForm(true));
    });
    ɵɵtext(26);
    ɵɵpipe(27, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(28, "button", 23);
    ɵɵtext(29);
    ɵɵpipe(30, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const filterBy_r10 = ctx.ngIf;
    const ctx_r7 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 23, "orgAccountSummary.filter.status"));
    ɵɵadvance(2);
    ɵɵproperty("searchable", false)("clearable", false)("items", ctx_r7.statusOptions)("cxNgSelectA11y", ɵɵpureFunction2(39, _c1, ɵɵpipeBind1(6, 25, "orgAccountSummary.filter.status"), ctx_r7.cxNgSelectA11yAriaControls));
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(42, _c0, ɵɵpipeBind1(8, 27, "orgAccountSummary.filter.status")))("control", ctx_r7.filterForm.controls.status);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(12, 29, "orgAccountSummary.filter.filterBy"));
    ɵɵadvance(2);
    ɵɵproperty("searchable", false)("clearable", false)("items", ctx_r7.filterByOptions)("cxNgSelectA11y", ɵɵpureFunction2(44, _c1, ɵɵpipeBind1(14, 31, "orgAccountSummary.filter.filterBy"), ctx_r7.cxNgSelectA11yAriaControls));
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(47, _c0, ɵɵpipeBind1(16, 33, "orgAccountSummary.filter.filterBy")))("control", ctx_r7.filterForm.controls.filterBy);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", filterBy_r10 === ctx_r7.FilterByOptions.DOCUMENT_TYPE);
    ɵɵadvance();
    ɵɵproperty("ngIf", filterBy_r10 === ctx_r7.FilterByOptions.DOCUMENT_NUMBER);
    ɵɵadvance();
    ɵɵproperty("ngIf", filterBy_r10 === ctx_r7.FilterByOptions.DOCUMENT_NUMBER_RANGE);
    ɵɵadvance();
    ɵɵproperty("ngIf", filterBy_r10 === ctx_r7.FilterByOptions.DATE_RANGE);
    ɵɵadvance();
    ɵɵproperty("ngIf", filterBy_r10 === ctx_r7.FilterByOptions.DUE_DATE_RANGE);
    ɵɵadvance();
    ɵɵproperty("ngIf", filterBy_r10 === ctx_r7.FilterByOptions.AMOUNT_RANGE);
    ɵɵadvance();
    ɵɵproperty("ngIf", filterBy_r10 === ctx_r7.FilterByOptions.OPEN_AMOUNT_RANGE);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(27, 35, "orgAccountSummary.filter.clear"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(30, 37, "orgAccountSummary.filter.search"), " ");
  }
}
var _c5 = () => [];
var _c6 = (a0, a1) => ({
  "status-open": a0,
  "status-closed": a1
});
var _c7 = (a0, a1) => ({
  id: a0,
  type: a1
});
function AccountSummaryDocumentComponent_ng_container_0_ng_container_8_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16)(1, "cx-pagination", 17);
    ɵɵlistener("viewPageEvent", function AccountSummaryDocumentComponent_ng_container_0_ng_container_8_div_9_Template_cx_pagination_viewPageEvent_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.pageChange($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const accountSummary_r5 = ɵɵnextContext(2).ngIf;
    ɵɵadvance();
    ɵɵproperty("pagination", accountSummary_r5.pagination);
  }
}
function AccountSummaryDocumentComponent_ng_container_0_ng_container_8_thead_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead", 18)(1, "th", 19);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "th", 19);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "th", 19);
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(10, "th", 19);
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(13, "th", 19);
    ɵɵtext(14);
    ɵɵpipe(15, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(16, "th", 19);
    ɵɵtext(17);
    ɵɵpipe(18, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(19, "th", 19);
    ɵɵtext(20);
    ɵɵpipe(21, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(22, "th", 19);
    ɵɵelement(23, "cx-icon", 20);
    ɵɵpipe(24, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 9, "orgAccountSummary.document.id"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 11, "orgAccountSummary.document.type"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 13, "orgAccountSummary.document.date"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 15, "orgAccountSummary.document.dueDate"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 17, "orgAccountSummary.document.originalAmount"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 19, "orgAccountSummary.document.openAmount"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(21, 21, "orgAccountSummary.document.status"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(24, 23, "orgAccountSummary.document.attachment"));
    ɵɵproperty("type", ctx_r1.ICON_TYPE.DOWNLOAD);
  }
}
function AccountSummaryDocumentComponent_ng_container_0_ng_container_8_thead_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead", 18)(1, "tr")(2, "th", 19);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "th", 19);
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(8, "th", 19);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "th", 19);
    ɵɵtext(12);
    ɵɵpipe(13, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(14, "th", 19);
    ɵɵtext(15);
    ɵɵpipe(16, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(17, "th", 19);
    ɵɵtext(18);
    ɵɵpipe(19, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(20, "th", 19);
    ɵɵtext(21);
    ɵɵpipe(22, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(23, "th", 19);
    ɵɵelement(24, "cx-icon", 20);
    ɵɵpipe(25, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 9, "orgAccountSummary.document.id"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 11, "orgAccountSummary.document.type"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 13, "orgAccountSummary.document.date"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(13, 15, "orgAccountSummary.document.dueDate"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(16, 17, "orgAccountSummary.document.originalAmount"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(19, 19, "orgAccountSummary.document.openAmount"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(22, 21, "orgAccountSummary.document.status"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(25, 23, "orgAccountSummary.document.attachment"));
    ɵɵproperty("type", ctx_r1.ICON_TYPE.DOWNLOAD);
  }
}
function AccountSummaryDocumentComponent_ng_container_0_ng_container_8_tr_14_button_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 32);
    ɵɵpipe(1, "cxTranslate");
    ɵɵlistener("click", function AccountSummaryDocumentComponent_ng_container_0_ng_container_8_tr_14_button_52_Template_button_click_0_listener() {
      const attachmentId_r7 = ɵɵrestoreView(_r6).ngIf;
      const document_r8 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.downloadAttachment(document_r8.id, attachmentId_r7));
    });
    ɵɵelement(2, "cx-icon", 20);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelement(4, "span", 33);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const document_r8 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵattribute("aria-label", ɵɵpipeBind2(1, 4, "orgAccountSummary.document.attachmentDescription", ɵɵpureFunction2(11, _c7, document_r8.id, document_r8.orgDocumentType == null ? null : document_r8.orgDocumentType.name)));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(3, 7, "orgAccountSummary.document.download"));
    ɵɵproperty("type", ctx_r1.ICON_TYPE.FILE);
    ɵɵadvance(2);
    ɵɵproperty("innerText", ɵɵpipeBind1(5, 9, "orgAccountSummary.document.download"));
  }
}
function AccountSummaryDocumentComponent_ng_container_0_ng_container_8_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 21)(1, "td", 22)(2, "div", 23);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 24);
    ɵɵtext(6);
    ɵɵelementEnd()();
    ɵɵelementStart(7, "td", 25)(8, "div", 23);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 24);
    ɵɵtext(12);
    ɵɵelementEnd()();
    ɵɵelementStart(13, "td", 26)(14, "div", 23);
    ɵɵtext(15);
    ɵɵpipe(16, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(17, "div", 24);
    ɵɵtext(18);
    ɵɵpipe(19, "cxDate");
    ɵɵelementEnd()();
    ɵɵelementStart(20, "td", 26)(21, "div", 23);
    ɵɵtext(22);
    ɵɵpipe(23, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(24, "div", 24);
    ɵɵtext(25);
    ɵɵpipe(26, "cxDate");
    ɵɵelementEnd()();
    ɵɵelementStart(27, "td", 27)(28, "div", 23);
    ɵɵtext(29);
    ɵɵpipe(30, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(31, "div", 24);
    ɵɵtext(32);
    ɵɵelementEnd()();
    ɵɵelementStart(33, "td", 27)(34, "div", 23);
    ɵɵtext(35);
    ɵɵpipe(36, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(37, "div", 24);
    ɵɵtext(38);
    ɵɵelementEnd()();
    ɵɵelementStart(39, "td", 28)(40, "div", 23);
    ɵɵtext(41);
    ɵɵpipe(42, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(43, "div", 24)(44, "span", 29);
    ɵɵtext(45);
    ɵɵpipe(46, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementStart(47, "td", 30)(48, "div", 23);
    ɵɵtext(49);
    ɵɵpipe(50, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(51, "div", 24);
    ɵɵtemplate(52, AccountSummaryDocumentComponent_ng_container_0_ng_container_8_tr_14_button_52_Template, 6, 14, "button", 31);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const document_r8 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 17, "orgAccountSummary.document.id"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", document_r8.id, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 19, "orgAccountSummary.document.type"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", document_r8.orgDocumentType == null ? null : document_r8.orgDocumentType.name, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(16, 21, "orgAccountSummary.document.date"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(19, 23, document_r8.createdAtDate, "longDate"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(23, 26, "orgAccountSummary.document.dueDate"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(26, 28, document_r8.dueAtDate, "longDate"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(30, 31, "orgAccountSummary.document.originalAmount"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", document_r8.formattedAmount, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(36, 33, "orgAccountSummary.document.openAmount"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", document_r8.formattedOpenAmount, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(42, 35, "orgAccountSummary.document.status"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngClass", ɵɵpureFunction2(41, _c6, document_r8.status === "open", document_r8.status === "closed"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(46, 37, "orgAccountSummary.statuses." + (document_r8 == null ? null : document_r8.status)), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(50, 39, "orgAccountSummary.document.attachment"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngIf", document_r8.attachments == null ? null : document_r8.attachments[0] == null ? null : document_r8.attachments[0].id);
  }
}
function AccountSummaryDocumentComponent_ng_container_0_ng_container_8_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16)(1, "cx-pagination", 34);
    ɵɵlistener("viewPageEvent", function AccountSummaryDocumentComponent_ng_container_0_ng_container_8_div_16_Template_cx_pagination_viewPageEvent_1_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.pageChange($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const accountSummary_r5 = ɵɵnextContext(2).ngIf;
    ɵɵadvance();
    ɵɵproperty("pagination", accountSummary_r5.pagination);
  }
}
function AccountSummaryDocumentComponent_ng_container_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 8)(2, "label", 9)(3, "span");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "cx-sorting", 10);
    ɵɵpipe(7, "cxTranslate");
    ɵɵpipe(8, "cxTranslate");
    ɵɵlistener("sortListEvent", function AccountSummaryDocumentComponent_ng_container_0_ng_container_8_Template_cx_sorting_sortListEvent_6_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.changeSortCode($event));
    });
    ɵɵelementEnd()();
    ɵɵtemplate(9, AccountSummaryDocumentComponent_ng_container_0_ng_container_8_div_9_Template, 2, 1, "div", 11);
    ɵɵelementEnd();
    ɵɵelementStart(10, "table", 12);
    ɵɵtemplate(11, AccountSummaryDocumentComponent_ng_container_0_ng_container_8_thead_11_Template, 25, 25, "thead", 13)(12, AccountSummaryDocumentComponent_ng_container_0_ng_container_8_thead_12_Template, 26, 25, "thead", 13);
    ɵɵelementStart(13, "tbody");
    ɵɵtemplate(14, AccountSummaryDocumentComponent_ng_container_0_ng_container_8_tr_14_Template, 53, 44, "tr", 14);
    ɵɵelementEnd()();
    ɵɵelementStart(15, "div", 15);
    ɵɵtemplate(16, AccountSummaryDocumentComponent_ng_container_0_ng_container_8_div_16_Template, 2, 1, "div", 11);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const accountSummary_r5 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 10, "orgAccountSummary.sortBy"), " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(7, 12, "orgAccountSummary.sortBy"));
    ɵɵproperty("sortOptions", ctx_r1.sortOptions)("selectedOption", accountSummary_r5.pagination.sort)("ariaLabel", ɵɵpipeBind1(8, 14, "orgAccountSummary.sortDocuments"));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", accountSummary_r5.pagination && accountSummary_r5.pagination.totalPages && accountSummary_r5.pagination.totalPages > 1);
    ɵɵadvance(2);
    ɵɵproperty("cxFeature", "!a11yTableHeaderReadout");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "a11yTableHeaderReadout");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", accountSummary_r5.orgDocuments);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", accountSummary_r5.pagination && accountSummary_r5.pagination.totalPages && accountSummary_r5.pagination.totalPages > 1);
  }
}
function AccountSummaryDocumentComponent_ng_container_0_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 35);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "orgAccountSummary.document.noneFound"), " ");
  }
}
function AccountSummaryDocumentComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2)(2, "div", 3)(3, "h2", 4);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(6, "div", 5)(7, "cx-account-summary-document-filter", 6);
    ɵɵlistener("filterListEvent", function AccountSummaryDocumentComponent_ng_container_0_Template_cx_account_summary_document_filter_filterListEvent_7_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.filterChange($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(8, AccountSummaryDocumentComponent_ng_container_0_ng_container_8_Template, 17, 16, "ng-container", 7)(9, AccountSummaryDocumentComponent_ng_container_0_ng_template_9_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const accountSummary_r5 = ctx.ngIf;
    const noDocument_r10 = ɵɵreference(10);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 6, "orgAccountSummary.document.header"), " ");
    ɵɵadvance(3);
    ɵɵproperty("documentTypeOptions", ctx_r1.documentTypeOptions)("initialFilters", ctx_r1._queryParams)("cxNgSelectA11yAriaControls", ((tmp_6_0 = accountSummary_r5.orgDocuments) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : ɵɵpureFunction0(8, _c5)).length > 0 ? "cx-account-summary-document-table" : void 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", accountSummary_r5.pagination && accountSummary_r5.pagination.totalResults)("ngIfElse", noDocument_r10);
  }
}
var _c8 = (a0, a1) => ({
  minBoundary: a0,
  maxBoundary: a1
});
var _c9 = (a0) => ({
  minBoundary: a0
});
function AccountSummaryHeaderComponent_div_0_div_23_div_1_div_1_div_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    const dayRange_r1 = ɵɵnextContext().ngIf;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, "orgAccountSummary.details.dayRange", ɵɵpureFunction2(4, _c8, dayRange_r1.minBoundary, dayRange_r1.maxBoundary)), " ");
  }
}
function AccountSummaryHeaderComponent_div_0_div_23_div_1_div_1_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    const dayRange_r1 = ɵɵnextContext().ngIf;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, "orgAccountSummary.details.dayPlus", ɵɵpureFunction1(4, _c9, dayRange_r1.minBoundary)), " ");
  }
}
function AccountSummaryHeaderComponent_div_0_div_23_div_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtemplate(1, AccountSummaryHeaderComponent_div_0_div_23_div_1_div_1_div_1_ng_template_1_Template, 2, 7, "ng-template", 20)(2, AccountSummaryHeaderComponent_div_0_div_23_div_1_div_1_div_1_ng_template_2_Template, 2, 6, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dayRange_r1 = ctx.ngIf;
    const dayPlus_r2 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", dayRange_r1 == null ? null : dayRange_r1.maxBoundary)("ngIfElse", dayPlus_r2);
  }
}
function AccountSummaryHeaderComponent_div_0_div_23_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtemplate(1, AccountSummaryHeaderComponent_div_0_div_23_div_1_div_1_div_1_Template, 4, 2, "div", 18);
    ɵɵelementStart(2, "div");
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const rangeBalance_r3 = ctx.$implicit;
    ɵɵproperty("tabindex", -1);
    ɵɵadvance();
    ɵɵproperty("ngIf", rangeBalance_r3.dayRange);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", rangeBalance_r3.amount, " ");
  }
}
function AccountSummaryHeaderComponent_div_0_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, AccountSummaryHeaderComponent_div_0_div_23_div_1_div_1_Template, 4, 3, "div", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const pastDue_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵproperty("ngForOf", pastDue_r4);
  }
}
function AccountSummaryHeaderComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, AccountSummaryHeaderComponent_div_0_div_23_div_1_Template, 2, 1, "div", 12);
    ɵɵelementStart(2, "div", 13)(3, "div", 14);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "div");
    ɵɵtext(7);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const pastDue_r4 = ctx.ngIf;
    const headerDetails_r5 = ɵɵnextContext().ngIf;
    ɵɵclassProp("cx-account-summary-header-past-due-section", pastDue_r4.length > 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", pastDue_r4.length > 0);
    ɵɵadvance();
    ɵɵproperty("tabindex", -1);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 6, "orgAccountSummary.details.pastDueBalance"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(headerDetails_r5 == null ? null : headerDetails_r5.amountBalance == null ? null : headerDetails_r5.amountBalance.pastDueBalance);
  }
}
function AccountSummaryHeaderComponent_div_0_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-card", 7);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const headerDetails_r5 = ɵɵnextContext().ngIf;
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("content", ɵɵpipeBind1(1, 1, ctx_r5.getPastDueBalanceCardContent(headerDetails_r5 == null ? null : headerDetails_r5.amountBalance == null ? null : headerDetails_r5.amountBalance.pastDueBalance)));
  }
}
function AccountSummaryHeaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6);
    ɵɵelement(4, "cx-card", 7);
    ɵɵpipe(5, "async");
    ɵɵelement(6, "cx-card", 7);
    ɵɵpipe(7, "async");
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 6);
    ɵɵelement(9, "cx-card", 7);
    ɵɵpipe(10, "async");
    ɵɵelementEnd()();
    ɵɵelementStart(11, "div", 8)(12, "div", 6);
    ɵɵelement(13, "cx-card", 7);
    ɵɵpipe(14, "async");
    ɵɵelement(15, "cx-card", 7);
    ɵɵpipe(16, "async");
    ɵɵelementEnd();
    ɵɵelementStart(17, "div", 9);
    ɵɵelement(18, "cx-card", 7);
    ɵɵpipe(19, "async");
    ɵɵelement(20, "cx-card", 7);
    ɵɵpipe(21, "async");
    ɵɵelementEnd()();
    ɵɵelementStart(22, "div", 10);
    ɵɵtemplate(23, AccountSummaryHeaderComponent_div_0_div_23_Template, 8, 8, "div", 11)(24, AccountSummaryHeaderComponent_div_0_ng_template_24_Template, 2, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const headerDetails_r5 = ctx.ngIf;
    const noDueRange_r7 = ɵɵreference(25);
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵproperty("content", ɵɵpipeBind1(5, 9, ctx_r5.getIdCardContent(headerDetails_r5 == null ? null : headerDetails_r5.orgUnit == null ? null : headerDetails_r5.orgUnit.uid)));
    ɵɵadvance(2);
    ɵɵproperty("content", ɵɵpipeBind1(7, 11, ctx_r5.getNameCardContent(headerDetails_r5 == null ? null : headerDetails_r5.orgUnit == null ? null : headerDetails_r5.orgUnit.name)));
    ɵɵadvance(3);
    ɵɵproperty("content", ɵɵpipeBind1(10, 13, ctx_r5.getAddressCardContent(headerDetails_r5 == null ? null : headerDetails_r5.billingAddress)));
    ɵɵadvance(4);
    ɵɵproperty("content", ɵɵpipeBind1(14, 15, ctx_r5.getCreditRepCardContent(headerDetails_r5 == null ? null : headerDetails_r5.accountManagerName)));
    ɵɵadvance(2);
    ɵɵproperty("content", ɵɵpipeBind1(16, 17, ctx_r5.getCreditLineCardContent(headerDetails_r5 == null ? null : headerDetails_r5.creditLimit)));
    ɵɵadvance(3);
    ɵɵproperty("content", ɵɵpipeBind1(19, 19, ctx_r5.getCurrentBalanceCardContent(headerDetails_r5 == null ? null : headerDetails_r5.amountBalance == null ? null : headerDetails_r5.amountBalance.currentBalance)));
    ɵɵadvance(2);
    ɵɵproperty("content", ɵɵpipeBind1(21, 21, ctx_r5.getOpenBalanceCardContent(headerDetails_r5 == null ? null : headerDetails_r5.amountBalance == null ? null : headerDetails_r5.amountBalance.openBalance)));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", headerDetails_r5.amountBalance && headerDetails_r5.amountBalance.dueBalances)("ngIfElse", noDueRange_r7);
  }
}
var AccountSummaryDocumentFilterComponent = class _AccountSummaryDocumentFilterComponent {
  set initialFilters(initialFilters) {
    this.initializeForm(initialFilters);
  }
  constructor(translation, fb) {
    this.translation = translation;
    this.fb = fb;
    this.filterListEvent = new EventEmitter();
    this.FilterByOptions = FilterByOptions;
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.subscription.add(this.getStatusOptions().subscribe((statusOptions) => this.statusOptions = [...statusOptions]));
    this.subscription.add(this.getFilterByOptions().subscribe((filterOptions) => this.filterByOptions = [...filterOptions]));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  formSearch() {
    const status = this.filterForm.get("status")?.value;
    const filterByKey = this.filterForm.get("filterBy")?.value;
    let filterByValue;
    let startRange;
    let endRange;
    switch (filterByKey) {
      case FilterByOptions.DOCUMENT_TYPE: {
        filterByValue = this.filterForm.get("documentType")?.value;
        break;
      }
      case FilterByOptions.DOCUMENT_NUMBER: {
        filterByValue = this.filterForm.get("documentNumber")?.value;
        break;
      }
      case FilterByOptions.DOCUMENT_NUMBER_RANGE: {
        startRange = this.filterForm.get("documentNumberRange.from")?.value;
        endRange = this.filterForm.get("documentNumberRange.to")?.value;
        break;
      }
      case FilterByOptions.DATE_RANGE: {
        const from = this.filterForm.get("documentDateRange.from")?.value;
        const to = this.filterForm.get("documentDateRange.to")?.value;
        startRange = from ? this.encodeDate(from) : "";
        endRange = to ? this.encodeDate(to) : "";
        break;
      }
      case FilterByOptions.DUE_DATE_RANGE: {
        const from = this.filterForm.get("dueDateRange.from")?.value;
        const to = this.filterForm.get("dueDateRange.to")?.value;
        startRange = from ? this.encodeDate(from) : "";
        endRange = to ? this.encodeDate(to) : "";
        break;
      }
      case FilterByOptions.AMOUNT_RANGE: {
        startRange = this.filterForm.get("originalAmountRange.from")?.value;
        endRange = this.filterForm.get("originalAmountRange.to")?.value;
        break;
      }
      case FilterByOptions.OPEN_AMOUNT_RANGE: {
        startRange = this.filterForm.get("openAmountRange.from")?.value;
        endRange = this.filterForm.get("openAmountRange.to")?.value;
        break;
      }
    }
    this.filterListEvent.emit({
      status,
      filterByKey,
      filterByValue,
      startRange,
      endRange
    });
  }
  resetForm(andSearch = false) {
    const defaults = {
      documentType: "",
      documentNumber: "",
      documentNumberRange: {
        from: "",
        to: ""
      },
      documentDateRange: {
        from: "",
        to: ""
      },
      dueDateRange: {
        from: "",
        to: ""
      },
      originalAmountRange: {
        from: "",
        to: ""
      },
      openAmountRange: {
        from: "",
        to: ""
      }
    };
    if (andSearch) {
      this.filterForm.patchValue(__spreadProps(__spreadValues({}, defaults), {
        status: DocumentStatus.OPEN,
        filterBy: FilterByOptions.DOCUMENT_NUMBER
      }));
      this.formSearch();
    } else {
      this.filterForm.patchValue(defaults);
    }
  }
  getStatusOptions() {
    const statusOptions = Object.values(DocumentStatus).map((code) => ({
      code
    }));
    const translations = statusOptions.map((status) => this.translation.translate(`orgAccountSummary.statuses.${status.code}`));
    return zip(...translations).pipe(map((texts) => {
      texts.forEach((text, index) => statusOptions[index].name = text);
      return statusOptions;
    }));
  }
  getFilterByOptions() {
    const filterByOptions = Object.values(FilterByOptions).map((code) => ({
      code
    }));
    const translations = filterByOptions.map((status) => this.translation.translate(`orgAccountSummary.filterByOptions.${status.code}`));
    return zip(...translations).pipe(map((texts) => {
      texts.forEach((text, index) => filterByOptions[index].name = text);
      return filterByOptions;
    }));
  }
  initializeForm({
    status,
    filterByKey,
    filterByValue,
    startRange,
    endRange
  }) {
    const generateRangeGroup = (filterByOption, validator) => {
      return this.fb.group({
        from: [filterByKey === filterByOption && (startRange ?? ""), validator?.startRange],
        to: [filterByKey === filterByOption && (endRange ?? ""), validator?.endRange]
      }, {
        validators: validator?.groupValidator
      });
    };
    const generateDateRangeGroup = (filterByOption, validator) => {
      return this.fb.group({
        from: [filterByKey === filterByOption && startRange ? this.decodeDate(startRange) : "", validator?.startRange],
        to: [filterByKey === filterByOption && endRange ? this.decodeDate(endRange) : "", validator?.endRange]
      }, {
        validators: validator?.groupValidator
      });
    };
    const validRange = (type) => {
      return (c) => {
        const from = c.get("from");
        const to = c.get("to");
        if (from.pristine || from.invalid || to.pristine || to.invalid) {
          return null;
        }
        if (type === "date" && from.value > to.value) {
          return {
            toDateMustComeAfterFrom: true
          };
        }
        if (type === "number") {
          return isFromLargerThanTo(from, to) ? {
            toAmountMustBeLargeThanFrom: true
          } : null;
        }
        return null;
      };
    };
    function isFromLargerThanTo(from, to) {
      const fromValue = parseFloat(from.value) || 0;
      const toValue = parseFloat(to.value) || 0;
      return !isNaN(from.value) && !isNaN(to.value) && fromValue > toValue;
    }
    this.filterForm = this.fb.group({
      status: status || DocumentStatus.OPEN,
      filterBy: filterByKey || FilterByOptions.DOCUMENT_NUMBER,
      documentType: filterByKey === FilterByOptions.DOCUMENT_TYPE && (filterByValue ?? ""),
      documentNumber: filterByKey === FilterByOptions.DOCUMENT_NUMBER && (filterByValue ?? ""),
      documentNumberRange: generateRangeGroup(FilterByOptions.DOCUMENT_NUMBER_RANGE),
      documentDateRange: generateDateRangeGroup(FilterByOptions.DATE_RANGE, {
        groupValidator: validRange("date")
      }),
      dueDateRange: generateDateRangeGroup(FilterByOptions.DUE_DATE_RANGE, {
        groupValidator: validRange("date")
      }),
      originalAmountRange: generateRangeGroup(FilterByOptions.AMOUNT_RANGE, {
        groupValidator: validRange("number")
      }),
      openAmountRange: generateRangeGroup(FilterByOptions.OPEN_AMOUNT_RANGE, {
        groupValidator: validRange("number")
      })
    });
    this.subscription.add(this.filterForm.get("filterBy")?.valueChanges.subscribe(() => this.filterByChanged()));
  }
  filterByChanged() {
    this.resetForm(false);
  }
  encodeDate(inputDate) {
    const [year, month, day] = inputDate.split("-");
    return `${month}/${day}/${year}`;
  }
  decodeDate(inputDate) {
    const [month, day, year] = inputDate.split("/");
    return `${year}-${month}-${day}`;
  }
  static {
    this.ɵfac = function AccountSummaryDocumentFilterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountSummaryDocumentFilterComponent)(ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(FormBuilder));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AccountSummaryDocumentFilterComponent,
      selectors: [["cx-account-summary-document-filter"]],
      inputs: {
        cxNgSelectA11yAriaControls: "cxNgSelectA11yAriaControls",
        documentTypeOptions: "documentTypeOptions",
        initialFilters: "initialFilters"
      },
      outputs: {
        filterListEvent: "filterListEvent"
      },
      standalone: false,
      decls: 4,
      vars: 2,
      consts: [["rangeInput", ""], ["inputFrom", ""], ["inputTo", ""], [3, "ngSubmit", "formGroup"], ["class", "cx-account-summary-document-filter-form", 4, "ngIf"], [3, "formGroup"], [1, "cx-account-summary-document-filter-form-item"], [4, "ngIf", "ngIfElse"], [3, "control", "prefix"], ["label", "orgAccountSummary.filter.startRange", 3, "control"], ["formControlName", "from", 1, "cx-account-summary-document-filter-form-input", 3, "type"], ["id", "fromError", 3, "translationParams", "control"], ["label", "orgAccountSummary.filter.endRange", 3, "control"], ["formControlName", "to", 1, "cx-account-summary-document-filter-form-input", 3, "type"], ["id", "toError", 3, "translationParams", "control"], [1, "cx-account-summary-document-filter-form"], ["formControlName", "status", "bindLabel", "name", "bindValue", "code", 3, "searchable", "clearable", "items", "cxNgSelectA11y"], [3, "translationParams", "control"], ["formControlName", "filterBy", "bindLabel", "name", "bindValue", "code", 3, "searchable", "clearable", "items", "cxNgSelectA11y"], ["class", "cx-account-summary-document-filter-form-item", 4, "ngIf"], [3, "ngIf"], [1, "cx-account-summary-document-filter-form-button-block"], ["type", "button", 1, "cx-action-link", "clear-btn", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], ["bindLabel", "name", "bindValue", "code", "formControlName", "documentType", 3, "searchable", "clearable", "items"], ["formControlName", "documentNumber", 1, "cx-account-summary-document-filter-form-input"], ["id", "documentNumberError", 3, "translationParams", "control"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function AccountSummaryDocumentFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵtemplate(0, AccountSummaryDocumentFilterComponent_ng_template_0_Template, 16, 13, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementStart(2, "form", 3);
          ɵɵlistener("ngSubmit", function AccountSummaryDocumentFilterComponent_Template_form_ngSubmit_2_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.formSearch());
          });
          ɵɵtemplate(3, AccountSummaryDocumentFilterComponent_div_3_Template, 31, 49, "div", 4);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("formGroup", ctx.filterForm);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.filterForm.controls.filterBy.value);
        }
      },
      dependencies: [NgIf, NgTemplateOutlet, NgSelectComponent, NgSelectA11yDirective, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DatePickerComponent, FormErrorsComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSummaryDocumentFilterComponent, [{
    type: Component,
    args: [{
      selector: "cx-account-summary-document-filter",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template #rangeInput let-formGroup="formGroup" let-type="type">
  <ng-container [formGroup]="formGroup">
    <label class="cx-account-summary-document-filter-form-item">
      <span>{{ 'orgAccountSummary.filter.startRange' | cxTranslate }}</span>
      <ng-container *ngIf="type === 'date'; else inputFrom">
        <cx-date-picker
          [control]="formGroup.controls.from"
          label="orgAccountSummary.filter.startRange"
        ></cx-date-picker>
      </ng-container>
      <ng-template #inputFrom>
        <input
          class="cx-account-summary-document-filter-form-input"
          [type]="type"
          formControlName="from"
          [attr.aria-invalid]="
            formGroup.get('from')?.touched && formGroup.get('from')?.invalid
          "
          [attr.aria-errormessage]="'fromError'"
        />

        <cx-form-errors
          id="fromError"
          [translationParams]="{
            label: 'orgAccountSummary.filter.startRange' | cxTranslate,
          }"
          [control]="formGroup.controls.from"
        ></cx-form-errors>
      </ng-template>
    </label>

    <label class="cx-account-summary-document-filter-form-item">
      <span>{{ 'orgAccountSummary.filter.endRange' | cxTranslate }}</span>
      <ng-container *ngIf="type === 'date'; else inputTo">
        <cx-date-picker
          [control]="formGroup.controls.to"
          label="orgAccountSummary.filter.endRange"
        ></cx-date-picker>
      </ng-container>
      <ng-template #inputTo>
        <input
          class="cx-account-summary-document-filter-form-input"
          [type]="type"
          formControlName="to"
          [attr.aria-invalid]="
            formGroup.get('to')?.touched && formGroup.get('to')?.invalid
          "
          [attr.aria-errormessage]="'toError'"
        />

        <cx-form-errors
          id="toError"
          [translationParams]="{
            label: 'orgAccountSummary.filter.endRange' | cxTranslate,
          }"
          [control]="formGroup.controls.to"
        ></cx-form-errors>
      </ng-template>
      <cx-form-errors
        [control]="formGroup"
        [prefix]="'orgAccountSummary.filter.errors'"
      ></cx-form-errors>
    </label>
  </ng-container>
</ng-template>

<form (ngSubmit)="formSearch()" [formGroup]="filterForm">
  <div
    class="cx-account-summary-document-filter-form"
    *ngIf="filterForm.controls.filterBy.value as filterBy"
  >
    <label class="cx-account-summary-document-filter-form-item">
      <span>{{ 'orgAccountSummary.filter.status' | cxTranslate }}</span>
      <ng-select
        formControlName="status"
        [searchable]="false"
        [clearable]="false"
        [items]="statusOptions"
        bindLabel="name"
        bindValue="code"
        [cxNgSelectA11y]="{
          ariaLabel: 'orgAccountSummary.filter.status' | cxTranslate,
          ariaControls: cxNgSelectA11yAriaControls,
        }"
      >
      </ng-select>

      <cx-form-errors
        [translationParams]="{
          label: 'orgAccountSummary.filter.status' | cxTranslate,
        }"
        [control]="filterForm.controls.status"
      ></cx-form-errors>
    </label>

    <label class="cx-account-summary-document-filter-form-item">
      <span>{{ 'orgAccountSummary.filter.filterBy' | cxTranslate }}</span>
      <ng-select
        formControlName="filterBy"
        [searchable]="false"
        [clearable]="false"
        [items]="filterByOptions"
        bindLabel="name"
        bindValue="code"
        [cxNgSelectA11y]="{
          ariaLabel: 'orgAccountSummary.filter.filterBy' | cxTranslate,
          ariaControls: cxNgSelectA11yAriaControls,
        }"
      >
      </ng-select>

      <cx-form-errors
        [translationParams]="{
          label: 'orgAccountSummary.filter.filterBy' | cxTranslate,
        }"
        [control]="filterForm.controls.filterBy"
      ></cx-form-errors>
    </label>

    <label
      class="cx-account-summary-document-filter-form-item"
      *ngIf="filterBy === FilterByOptions.DOCUMENT_TYPE"
    >
      <span>{{ 'orgAccountSummary.filter.documentType' | cxTranslate }}</span>
      <ng-select
        [searchable]="false"
        [clearable]="false"
        [items]="documentTypeOptions"
        bindLabel="name"
        bindValue="code"
        formControlName="documentType"
      >
      </ng-select>

      <cx-form-errors
        [translationParams]="{
          label: 'orgAccountSummary.filter.documentType' | cxTranslate,
        }"
        [control]="filterForm.controls.documentType"
      ></cx-form-errors>
    </label>

    <label
      class="cx-account-summary-document-filter-form-item"
      *ngIf="filterBy === FilterByOptions.DOCUMENT_NUMBER"
    >
      <span>{{ 'orgAccountSummary.filter.documentNumber' | cxTranslate }}</span>
      <input
        class="cx-account-summary-document-filter-form-input"
        formControlName="documentNumber"
        [attr.aria-invalid]="
          filterForm.get('documentNumber')?.touched &&
          filterForm.get('documentNumber')?.invalid
        "
        [attr.aria-errormessage]="'documentNumberError'"
      />

      <cx-form-errors
        id="documentNumberError"
        [translationParams]="{
          label: 'orgAccountSummary.filter.documentNumber' | cxTranslate,
        }"
        [control]="filterForm.controls.documentNumber"
      ></cx-form-errors>
    </label>

    <ng-template [ngIf]="filterBy === FilterByOptions.DOCUMENT_NUMBER_RANGE">
      <ng-container
        *ngTemplateOutlet="
          rangeInput;
          context: {
            formGroup: filterForm.get('documentNumberRange'),
            type: 'text',
          }
        "
      >
      </ng-container>
    </ng-template>

    <ng-template [ngIf]="filterBy === FilterByOptions.DATE_RANGE">
      <ng-container
        *ngTemplateOutlet="
          rangeInput;
          context: {
            formGroup: filterForm.get('documentDateRange'),
            type: 'date',
          }
        "
      >
      </ng-container>
    </ng-template>

    <ng-template [ngIf]="filterBy === FilterByOptions.DUE_DATE_RANGE">
      <ng-container
        *ngTemplateOutlet="
          rangeInput;
          context: { formGroup: filterForm.get('dueDateRange'), type: 'date' }
        "
      >
      </ng-container>
    </ng-template>

    <ng-template [ngIf]="filterBy === FilterByOptions.AMOUNT_RANGE">
      <ng-container
        *ngTemplateOutlet="
          rangeInput;
          context: {
            formGroup: filterForm.get('originalAmountRange'),
            type: 'number',
          }
        "
      >
      </ng-container>
    </ng-template>

    <ng-template [ngIf]="filterBy === FilterByOptions.OPEN_AMOUNT_RANGE">
      <ng-container
        *ngTemplateOutlet="
          rangeInput;
          context: {
            formGroup: filterForm.get('openAmountRange'),
            type: 'number',
          }
        "
      >
      </ng-container>
    </ng-template>

    <div class="cx-account-summary-document-filter-form-button-block">
      <button
        class="cx-action-link clear-btn"
        type="button"
        (click)="resetForm(true)"
      >
        {{ 'orgAccountSummary.filter.clear' | cxTranslate }}
      </button>
      <button class="btn btn-primary" type="submit">
        {{ 'orgAccountSummary.filter.search' | cxTranslate }}
      </button>
    </div>
  </div>
</form>
`
    }]
  }], () => [{
    type: TranslationService
  }, {
    type: FormBuilder
  }], {
    cxNgSelectA11yAriaControls: [{
      type: Input
    }],
    documentTypeOptions: [{
      type: Input
    }],
    initialFilters: [{
      type: Input
    }],
    filterListEvent: [{
      type: Output
    }]
  });
})();
var AccountSummaryDocumentComponent = class _AccountSummaryDocumentComponent {
  constructor(accountSummaryFacade, translation, downloadService, languageService) {
    this.accountSummaryFacade = accountSummaryFacade;
    this.translation = translation;
    this.downloadService = downloadService;
    this.languageService = languageService;
    this.ICON_TYPE = ICON_TYPE;
    this._queryParams = {
      status: DocumentStatus.OPEN,
      filterByKey: FilterByOptions.DOCUMENT_NUMBER,
      page: 0,
      pageSize: 10,
      fields: DocumentFields.FULL
    };
    this.queryParams$ = new BehaviorSubject(this._queryParams);
    this.accountSummary$ = this.queryParams$.pipe(switchMap((param) => this.accountSummaryFacade.getDocumentList(param)), tap((accountSummaryList) => {
      if (accountSummaryList.orgDocumentTypes) {
        this.documentTypeOptions = accountSummaryList.orgDocumentTypes;
      }
      if (accountSummaryList.sorts) {
        this.addNamesToSortModel(accountSummaryList.sorts);
      }
    }));
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.subscription.add(this.languageService.getActive().pipe(skip(1)).subscribe(() => this.updateQueryParams({
      fields: DocumentFields.FULL
    })));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  pageChange(page) {
    this.updateQueryParams({
      page
    });
  }
  changeSortCode(sortCode) {
    this.updateQueryParams({
      sort: sortCode,
      page: 0
    });
  }
  filterChange(newFilters) {
    this.updateQueryParams(__spreadProps(__spreadValues({}, newFilters), {
      page: 0
    }));
  }
  downloadAttachment(documentId, attachmentId) {
    this.accountSummaryFacade.getDocumentAttachment(documentId, attachmentId).pipe(take(1)).subscribe((data) => {
      const file = new Blob([data], {
        type: data.type
      });
      const url = URL.createObjectURL(file);
      this.downloadService.download(url, attachmentId);
    });
  }
  updateQueryParams(partialParams) {
    Object.entries(partialParams).forEach((param) => this._queryParams[param[0]] = param[1]);
    if (!partialParams.fields) {
      this._queryParams.fields = DocumentFields.DEFAULT;
    }
    this.queryParams$.next(this._queryParams);
  }
  addNamesToSortModel(sorts) {
    this.sortOptions = sorts;
    const translations = sorts.map((sort) => this.translation.translate(`orgAccountSummary.sorts.${sort.code}`));
    combineLatest(translations).pipe(take(1)).subscribe((translated) => this.sortOptions.forEach((sort, index) => sort.name = translated[index]));
  }
  static {
    this.ɵfac = function AccountSummaryDocumentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountSummaryDocumentComponent)(ɵɵdirectiveInject(AccountSummaryFacade), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(FileDownloadService), ɵɵdirectiveInject(LanguageService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AccountSummaryDocumentComponent,
      selectors: [["cx-account-summary-document"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["noDocument", ""], [4, "ngIf"], ["role", "region", "aria-labelledby", "regionTitle"], [1, "cx-account-summary-document-header"], ["id", "regionTitle"], [1, "cx-account-summary-document-body"], [3, "filterListEvent", "documentTypeOptions", "initialFilters", "cxNgSelectA11yAriaControls"], [4, "ngIf", "ngIfElse"], [1, "cx-account-summary-document-sort", "top"], [1, "cx-account-summary-document-form-group", "form-group"], ["ariaControls", "cx-account-summary-document-table", 3, "sortListEvent", "sortOptions", "selectedOption", "placeholder", "ariaLabel"], ["class", "cx-account-summary-document-pagination", 4, "ngIf"], ["id", "cx-account-summary-document-table", 1, "table", "cx-account-summary-document-table"], ["class", "cx-account-summary-document-thead-mobile", 4, "cxFeature"], ["class", "cx-account-summary-document-row", 4, "ngFor", "ngForOf"], [1, "cx-account-summary-document-sort", "bottom"], [1, "cx-account-summary-document-pagination"], ["paginationID", "pagination-top", 3, "viewPageEvent", "pagination"], [1, "cx-account-summary-document-thead-mobile"], ["scope", "col"], [1, "cx-account-summary-document-attachment-icon", 3, "type", "title"], [1, "cx-account-summary-document-row"], [1, "cx-account-summary-document-code"], [1, "cx-account-summary-document-label"], [1, "cx-account-summary-document-value"], [1, "cx-account-summary-document-type"], [1, "cx-account-summary-document-date"], [1, "cx-account-summary-document-monetary"], [1, "cx-account-summary-document-status"], [3, "ngClass"], [1, "cx-account-summary-document-attachment"], ["class", "cx-account-summary-document-attachment-btn", 3, "click", 4, "ngIf"], [1, "cx-account-summary-document-attachment-btn", 3, "click"], [1, "cx-account-summary-document-attachment-text", 3, "innerText"], ["paginationID", "pagination-bottom", 3, "viewPageEvent", "pagination"], [1, "cx-account-summary-document-no-document"]],
      template: function AccountSummaryDocumentComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AccountSummaryDocumentComponent_ng_container_0_Template, 11, 9, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.accountSummary$));
        }
      },
      dependencies: [AccountSummaryDocumentFilterComponent, NgClass, NgForOf, NgIf, SortingComponent, PaginationComponent, IconComponent, FeatureDirective, AsyncPipe, TranslatePipe, CxDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSummaryDocumentComponent, [{
    type: Component,
    args: [{
      selector: "cx-account-summary-document",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="accountSummary$ | async as accountSummary">
  <div role="region" aria-labelledby="regionTitle">
    <!-- HEADER -->
    <div class="cx-account-summary-document-header">
      <h2 id="regionTitle">
        {{ 'orgAccountSummary.document.header' | cxTranslate }}
      </h2>
    </div>

    <!-- BODY -->
    <div class="cx-account-summary-document-body">
      <cx-account-summary-document-filter
        [documentTypeOptions]="documentTypeOptions"
        [initialFilters]="_queryParams"
        (filterListEvent)="filterChange($event)"
        [cxNgSelectA11yAriaControls]="
          (accountSummary.orgDocuments ?? []).length > 0
            ? 'cx-account-summary-document-table'
            : undefined
        "
      >
      </cx-account-summary-document-filter>

      <ng-container
        *ngIf="
          accountSummary.pagination && accountSummary.pagination.totalResults;
          else noDocument
        "
      >
        <div class="cx-account-summary-document-sort top">
          <label class="cx-account-summary-document-form-group form-group">
            <span>
              {{ 'orgAccountSummary.sortBy' | cxTranslate }}
            </span>
            <cx-sorting
              [sortOptions]="sortOptions"
              (sortListEvent)="changeSortCode($event)"
              [selectedOption]="accountSummary.pagination.sort"
              placeholder="{{ 'orgAccountSummary.sortBy' | cxTranslate }}"
              [ariaLabel]="'orgAccountSummary.sortDocuments' | cxTranslate"
              ariaControls="cx-account-summary-document-table"
            ></cx-sorting>
          </label>
          <div
            class="cx-account-summary-document-pagination"
            *ngIf="
              accountSummary.pagination &&
              accountSummary.pagination.totalPages &&
              accountSummary.pagination.totalPages > 1
            "
          >
            <cx-pagination
              [pagination]="accountSummary.pagination"
              (viewPageEvent)="pageChange($event)"
              paginationID="pagination-top"
            ></cx-pagination>
          </div>
        </div>

        <!-- TABLE -->
        <table
          id="cx-account-summary-document-table"
          class="table cx-account-summary-document-table"
        >
          <thead
            *cxFeature="'!a11yTableHeaderReadout'"
            class="cx-account-summary-document-thead-mobile"
          >
            <th scope="col">
              {{ 'orgAccountSummary.document.id' | cxTranslate }}
            </th>
            <th scope="col">
              {{ 'orgAccountSummary.document.type' | cxTranslate }}
            </th>
            <th scope="col">
              {{ 'orgAccountSummary.document.date' | cxTranslate }}
            </th>
            <th scope="col">
              {{ 'orgAccountSummary.document.dueDate' | cxTranslate }}
            </th>
            <th scope="col">
              {{ 'orgAccountSummary.document.originalAmount' | cxTranslate }}
            </th>
            <th scope="col">
              {{ 'orgAccountSummary.document.openAmount' | cxTranslate }}
            </th>
            <th scope="col">
              {{ 'orgAccountSummary.document.status' | cxTranslate }}
            </th>
            <th scope="col">
              <cx-icon
                [type]="ICON_TYPE.DOWNLOAD"
                class="cx-account-summary-document-attachment-icon"
                title="{{
                  'orgAccountSummary.document.attachment' | cxTranslate
                }}"
              ></cx-icon>
            </th>
          </thead>
          <thead
            *cxFeature="'a11yTableHeaderReadout'"
            class="cx-account-summary-document-thead-mobile"
          >
            <tr>
              <th scope="col">
                {{ 'orgAccountSummary.document.id' | cxTranslate }}
              </th>
              <th scope="col">
                {{ 'orgAccountSummary.document.type' | cxTranslate }}
              </th>
              <th scope="col">
                {{ 'orgAccountSummary.document.date' | cxTranslate }}
              </th>
              <th scope="col">
                {{ 'orgAccountSummary.document.dueDate' | cxTranslate }}
              </th>
              <th scope="col">
                {{ 'orgAccountSummary.document.originalAmount' | cxTranslate }}
              </th>
              <th scope="col">
                {{ 'orgAccountSummary.document.openAmount' | cxTranslate }}
              </th>
              <th scope="col">
                {{ 'orgAccountSummary.document.status' | cxTranslate }}
              </th>
              <th scope="col">
                <cx-icon
                  [type]="ICON_TYPE.DOWNLOAD"
                  class="cx-account-summary-document-attachment-icon"
                  title="{{
                    'orgAccountSummary.document.attachment' | cxTranslate
                  }}"
                ></cx-icon>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              *ngFor="let document of accountSummary.orgDocuments"
              class="cx-account-summary-document-row"
            >
              <td class="cx-account-summary-document-code">
                <div class="cx-account-summary-document-label">
                  {{ 'orgAccountSummary.document.id' | cxTranslate }}
                </div>
                <div class="cx-account-summary-document-value">
                  {{ document.id }}
                </div>
              </td>
              <td class="cx-account-summary-document-type">
                <div class="cx-account-summary-document-label">
                  {{ 'orgAccountSummary.document.type' | cxTranslate }}
                </div>
                <div class="cx-account-summary-document-value">
                  {{ document.orgDocumentType?.name }}
                </div>
              </td>
              <td class="cx-account-summary-document-date">
                <div class="cx-account-summary-document-label">
                  {{ 'orgAccountSummary.document.date' | cxTranslate }}
                </div>
                <div class="cx-account-summary-document-value">
                  {{ document.createdAtDate | cxDate: 'longDate' }}
                </div>
              </td>
              <td class="cx-account-summary-document-date">
                <div class="cx-account-summary-document-label">
                  {{ 'orgAccountSummary.document.dueDate' | cxTranslate }}
                </div>
                <div class="cx-account-summary-document-value">
                  {{ document.dueAtDate | cxDate: 'longDate' }}
                </div>
              </td>
              <td class="cx-account-summary-document-monetary">
                <div class="cx-account-summary-document-label">
                  {{
                    'orgAccountSummary.document.originalAmount' | cxTranslate
                  }}
                </div>
                <div class="cx-account-summary-document-value">
                  {{ document.formattedAmount }}
                </div>
              </td>
              <td class="cx-account-summary-document-monetary">
                <div class="cx-account-summary-document-label">
                  {{ 'orgAccountSummary.document.openAmount' | cxTranslate }}
                </div>
                <div class="cx-account-summary-document-value">
                  {{ document.formattedOpenAmount }}
                </div>
              </td>
              <td class="cx-account-summary-document-status">
                <div class="cx-account-summary-document-label">
                  {{ 'orgAccountSummary.document.status' | cxTranslate }}
                </div>
                <div class="cx-account-summary-document-value">
                  <span
                    [ngClass]="{
                      'status-open': document.status === 'open',
                      'status-closed': document.status === 'closed',
                    }"
                  >
                    {{
                      'orgAccountSummary.statuses.' + document?.status
                        | cxTranslate
                    }}
                  </span>
                </div>
              </td>
              <td class="cx-account-summary-document-attachment">
                <div class="cx-account-summary-document-label">
                  {{ 'orgAccountSummary.document.attachment' | cxTranslate }}
                </div>
                <div class="cx-account-summary-document-value">
                  <button
                    *ngIf="document.attachments?.[0]?.id as attachmentId"
                    class="cx-account-summary-document-attachment-btn"
                    (click)="downloadAttachment(document.id, attachmentId)"
                    attr.aria-label="{{
                      'orgAccountSummary.document.attachmentDescription'
                        | cxTranslate
                          : {
                              id: document.id,
                              type: document.orgDocumentType?.name,
                            }
                    }}"
                  >
                    <cx-icon
                      [type]="ICON_TYPE.FILE"
                      class="cx-account-summary-document-attachment-icon"
                      title="{{
                        'orgAccountSummary.document.download' | cxTranslate
                      }}"
                    >
                    </cx-icon>
                    <span
                      class="cx-account-summary-document-attachment-text"
                      [innerText]="
                        'orgAccountSummary.document.download' | cxTranslate
                      "
                    >
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Select Form and Pagination Bottom -->
        <div class="cx-account-summary-document-sort bottom">
          <div
            class="cx-account-summary-document-pagination"
            *ngIf="
              accountSummary.pagination &&
              accountSummary.pagination.totalPages &&
              accountSummary.pagination.totalPages > 1
            "
          >
            <cx-pagination
              [pagination]="accountSummary.pagination"
              (viewPageEvent)="pageChange($event)"
              paginationID="pagination-bottom"
            ></cx-pagination>
          </div>
        </div>
      </ng-container>

      <!-- NO DOCUMENT CONTAINER -->
      <ng-template #noDocument>
        <div class="cx-account-summary-document-no-document">
          {{ 'orgAccountSummary.document.noneFound' | cxTranslate }}
        </div>
      </ng-template>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: AccountSummaryFacade
  }, {
    type: TranslationService
  }, {
    type: FileDownloadService
  }, {
    type: LanguageService
  }], null);
})();
var AccountSummaryDocumentFilterModule = class _AccountSummaryDocumentFilterModule {
  static {
    this.ɵfac = function AccountSummaryDocumentFilterModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountSummaryDocumentFilterModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AccountSummaryDocumentFilterModule,
      declarations: [AccountSummaryDocumentFilterComponent],
      imports: [CommonModule, I18nModule, NgSelectModule, NgSelectA11yModule, ReactiveFormsModule, DatePickerModule, FormErrorsModule, FeaturesConfigModule],
      exports: [AccountSummaryDocumentFilterComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, NgSelectModule, NgSelectA11yModule, ReactiveFormsModule, DatePickerModule, FormErrorsModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSummaryDocumentFilterModule, [{
    type: NgModule,
    args: [{
      declarations: [AccountSummaryDocumentFilterComponent],
      imports: [CommonModule, I18nModule, NgSelectModule, NgSelectA11yModule, ReactiveFormsModule, DatePickerModule, FormErrorsModule, FeaturesConfigModule],
      exports: [AccountSummaryDocumentFilterComponent]
    }]
  }], null, null);
})();
var accountSummaryDocumentCmsConfig = {
  cmsComponents: {
    AccountSummaryDocumentComponent: {
      component: AccountSummaryDocumentComponent,
      guards: [AuthGuard, AdminGuard]
    }
  }
};
var AccountSummaryDocumentModule = class _AccountSummaryDocumentModule {
  static {
    this.ɵfac = function AccountSummaryDocumentModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountSummaryDocumentModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AccountSummaryDocumentModule,
      declarations: [AccountSummaryDocumentComponent],
      imports: [AccountSummaryDocumentFilterModule, CommonModule, I18nModule, SortingModule, PaginationModule, IconModule, FeaturesConfigModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(accountSummaryDocumentCmsConfig)],
      imports: [AccountSummaryDocumentFilterModule, CommonModule, I18nModule, SortingModule, PaginationModule, IconModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSummaryDocumentModule, [{
    type: NgModule,
    args: [{
      declarations: [AccountSummaryDocumentComponent],
      imports: [AccountSummaryDocumentFilterModule, CommonModule, I18nModule, SortingModule, PaginationModule, IconModule, FeaturesConfigModule],
      providers: [provideDefaultConfig(accountSummaryDocumentCmsConfig)]
    }]
  }], null, null);
})();
var AccountSummaryHeaderComponent = class _AccountSummaryHeaderComponent {
  constructor(accountSummaryFacade, languageService, translation) {
    this.accountSummaryFacade = accountSummaryFacade;
    this.languageService = languageService;
    this.translation = translation;
    this.headerDetails$ = this.languageService.getActive().pipe(switchMap(() => this.accountSummaryFacade.getAccountSummary()));
    this.subscriptions = new Subscription();
  }
  ngOnInit() {
    this.subscriptions.add(this.translation.translate("orgAccountSummary.details.notApplicable").subscribe((text) => this.notApplicable = text));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  getIdCardContent(id) {
    return this.translation.translate("orgAccountSummary.details.uid").pipe(map((idTitle) => ({
      title: idTitle,
      text: [id || this.notApplicable]
    })));
  }
  getNameCardContent(name) {
    return this.translation.translate("orgAccountSummary.details.name").pipe(map((nameTitle) => ({
      title: nameTitle,
      text: [name || this.notApplicable]
    })));
  }
  getAddressCardContent(billingAddress) {
    return this.translation.translate("orgAccountSummary.details.address").pipe(map((addressTitle) => {
      const name = `${billingAddress?.title}, ${billingAddress?.firstName} ${billingAddress?.lastName}`;
      const address = billingAddress?.formattedAddress;
      const country = billingAddress?.country?.name;
      return {
        title: addressTitle,
        text: Boolean(billingAddress) ? [name, address, country] : [this.notApplicable]
      };
    }));
  }
  getCreditRepCardContent(creditRep) {
    return this.translation.translate("orgAccountSummary.details.creditRep").pipe(map((creditRepTitle) => ({
      title: creditRepTitle,
      text: [creditRep || this.notApplicable]
    })));
  }
  getCreditLineCardContent(creditLine) {
    return this.translation.translate("orgAccountSummary.details.creditLine").pipe(map((creditLineTitle) => ({
      title: creditLineTitle,
      text: [creditLine || this.notApplicable]
    })));
  }
  getCurrentBalanceCardContent(currentBalance) {
    return this.translation.translate("orgAccountSummary.details.currentBalance").pipe(map((currentBalanceTitle) => ({
      title: currentBalanceTitle,
      text: [currentBalance || this.notApplicable]
    })));
  }
  getOpenBalanceCardContent(openBalance) {
    return this.translation.translate("orgAccountSummary.details.openBalance").pipe(map((openBalanceTitle) => ({
      title: openBalanceTitle,
      text: [openBalance || this.notApplicable]
    })));
  }
  getPastDueBalanceCardContent(pastDueBalance) {
    return this.translation.translate("orgAccountSummary.details.pastDueBalance").pipe(map((pastDueBalanceTitle) => ({
      title: pastDueBalanceTitle,
      text: [pastDueBalance ?? this.notApplicable]
    })));
  }
  static {
    this.ɵfac = function AccountSummaryHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountSummaryHeaderComponent)(ɵɵdirectiveInject(AccountSummaryFacade), ɵɵdirectiveInject(LanguageService), ɵɵdirectiveInject(TranslationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AccountSummaryHeaderComponent,
      selectors: [["cx-account-summary-header"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["noDueRange", ""], ["dayPlus", ""], ["class", "cx-account-summary", 4, "ngIf"], [1, "cx-account-summary"], [1, "cx-account-summary-header-cards"], [1, "cx-summary-card-responsive-group", "cx-summary-card-group-unit-address"], [1, "cx-summary-card"], [3, "content"], [1, "cx-summary-card-responsive-group", "cx-summary-card-group-credit-balance"], [1, "cx-summary-card", "cx-summary-card-balance"], [1, "cx-summary-card", "cx-summary-card-group-due"], [3, "cx-account-summary-header-past-due-section", 4, "ngIf", "ngIfElse"], ["class", "cx-account-summary-header-past-due-range-dates", 4, "ngIf"], [1, "cx-account-summary-header-past-due-balance-total", 3, "tabindex"], [1, "cx-past-due-balance-label", "cx-card-title"], [1, "cx-account-summary-header-past-due-range-dates"], ["class", "cx-account-summary-header-past-due-range-collection", 3, "tabindex", 4, "ngFor", "ngForOf"], [1, "cx-account-summary-header-past-due-range-collection", 3, "tabindex"], ["class", "cx-past-due-range-date", 4, "ngIf"], [1, "cx-past-due-range-date"], [3, "ngIf", "ngIfElse"]],
      template: function AccountSummaryHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AccountSummaryHeaderComponent_div_0_Template, 26, 23, "div", 2);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.headerDetails$));
        }
      },
      dependencies: [CardComponent, NgForOf, NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSummaryHeaderComponent, [{
    type: Component,
    args: [{
      selector: "cx-account-summary-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="cx-account-summary" *ngIf="headerDetails$ | async as headerDetails">
  <div class="cx-account-summary-header-cards">
    <div
      class="cx-summary-card-responsive-group cx-summary-card-group-unit-address"
    >
      <!-- Card: Unit ID & Unit Name -->
      <div class="cx-summary-card">
        <cx-card
          [content]="getIdCardContent(headerDetails?.orgUnit?.uid) | async"
        >
        </cx-card>

        <cx-card
          [content]="getNameCardContent(headerDetails?.orgUnit?.name) | async"
        >
        </cx-card>
      </div>

      <!-- Card: Address -->
      <div class="cx-summary-card">
        <cx-card
          [content]="
            getAddressCardContent(headerDetails?.billingAddress) | async
          "
        >
        </cx-card>
      </div>
    </div>

    <div
      class="cx-summary-card-responsive-group cx-summary-card-group-credit-balance"
    >
      <!-- Card: Credit Rep & Credit Line -->
      <div class="cx-summary-card">
        <cx-card
          [content]="
            getCreditRepCardContent(headerDetails?.accountManagerName) | async
          "
        >
        </cx-card>

        <cx-card
          [content]="
            getCreditLineCardContent(headerDetails?.creditLimit) | async
          "
        >
        </cx-card>
      </div>

      <!-- Card: Current Balance & Open Balance -->
      <div class="cx-summary-card cx-summary-card-balance">
        <cx-card
          [content]="
            getCurrentBalanceCardContent(
              headerDetails?.amountBalance?.currentBalance
            ) | async
          "
        >
        </cx-card>

        <cx-card
          [content]="
            getOpenBalanceCardContent(headerDetails?.amountBalance?.openBalance)
              | async
          "
        >
        </cx-card>
      </div>
    </div>

    <!-- Card: Past Due Balance & Date Ranges -->
    <div class="cx-summary-card cx-summary-card-group-due">
      <!-- If there range of past due balances are provided, display them here in a bordered section -->
      <div
        *ngIf="
          headerDetails.amountBalance &&
            headerDetails.amountBalance.dueBalances as pastDue;
          else noDueRange
        "
        [class.cx-account-summary-header-past-due-section]="pastDue.length > 0"
      >
        <!-- Dynamically create lines of past due date ranges -->
        <div
          *ngIf="pastDue.length > 0"
          class="cx-account-summary-header-past-due-range-dates"
        >
          <div
            *ngFor="let rangeBalance of pastDue"
            class="cx-account-summary-header-past-due-range-collection"
            [tabindex]="-1"
          >
            <div
              class="cx-past-due-range-date"
              *ngIf="rangeBalance.dayRange as dayRange"
            >
              <ng-template [ngIf]="dayRange?.maxBoundary" [ngIfElse]="dayPlus">
                {{
                  'orgAccountSummary.details.dayRange'
                    | cxTranslate
                      : {
                          minBoundary: dayRange.minBoundary,
                          maxBoundary: dayRange.maxBoundary,
                        }
                }}
              </ng-template>

              <ng-template #dayPlus>
                {{
                  'orgAccountSummary.details.dayPlus'
                    | cxTranslate: { minBoundary: dayRange.minBoundary }
                }}
              </ng-template>
            </div>
            <div>
              {{ rangeBalance.amount }}
            </div>
          </div>
        </div>

        <div
          class="cx-account-summary-header-past-due-balance-total"
          [tabindex]="-1"
        >
          <div class="cx-past-due-balance-label cx-card-title">
            {{ 'orgAccountSummary.details.pastDueBalance' | cxTranslate }}
          </div>
          <div>{{ headerDetails?.amountBalance?.pastDueBalance }}</div>
        </div>
      </div>

      <!-- When there are no Ranges, only show a card containing the Past Due Balance -->
      <ng-template #noDueRange>
        <cx-card
          [content]="
            getPastDueBalanceCardContent(
              headerDetails?.amountBalance?.pastDueBalance
            ) | async
          "
        >
        </cx-card>
      </ng-template>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: AccountSummaryFacade
  }, {
    type: LanguageService
  }, {
    type: TranslationService
  }], null);
})();
var accountSummaryHeaderCmsConfig = {
  cmsComponents: {
    AccountSummaryHeaderComponent: {
      component: AccountSummaryHeaderComponent,
      guards: [AuthGuard, AdminGuard]
    }
  }
};
var AccountSummaryHeaderModule = class _AccountSummaryHeaderModule {
  static {
    this.ɵfac = function AccountSummaryHeaderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountSummaryHeaderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AccountSummaryHeaderModule,
      declarations: [AccountSummaryHeaderComponent],
      imports: [CardModule, CommonModule, I18nModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(accountSummaryHeaderCmsConfig)],
      imports: [CardModule, CommonModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSummaryHeaderModule, [{
    type: NgModule,
    args: [{
      declarations: [AccountSummaryHeaderComponent],
      imports: [CardModule, CommonModule, I18nModule],
      providers: [provideDefaultConfig(accountSummaryHeaderCmsConfig)]
    }]
  }], null, null);
})();
var AccountSummaryListComponent = class _AccountSummaryListComponent extends UnitListComponent {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵAccountSummaryListComponent_BaseFactory;
      return function AccountSummaryListComponent_Factory(__ngFactoryType__) {
        return (ɵAccountSummaryListComponent_BaseFactory || (ɵAccountSummaryListComponent_BaseFactory = ɵɵgetInheritedFactory(_AccountSummaryListComponent)))(__ngFactoryType__ || _AccountSummaryListComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AccountSummaryListComponent,
      selectors: [["cx-account-summary-list"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 8,
      vars: 7,
      consts: [[3, "hideAddButton"], ["actions", ""], [1, "link", 3, "click"]],
      template: function AccountSummaryListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-list", 0);
          ɵɵelementContainerStart(1, 1);
          ɵɵelementStart(2, "button", 2);
          ɵɵlistener("click", function AccountSummaryListComponent_Template_button_click_2_listener() {
            return ctx.expandAll();
          });
          ɵɵtext(3);
          ɵɵpipe(4, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(5, "button", 2);
          ɵɵlistener("click", function AccountSummaryListComponent_Template_button_click_5_listener() {
            return ctx.collapseAll();
          });
          ɵɵtext(6);
          ɵɵpipe(7, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementContainerEnd();
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("hideAddButton", true);
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 3, "orgUnit.tree.expandAll"), " ");
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 5, "orgUnit.tree.collapseAll"), " ");
        }
      },
      dependencies: [ListComponent, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSummaryListComponent, [{
    type: Component,
    args: [{
      selector: "cx-account-summary-list",
      standalone: false,
      template: `<cx-org-list [hideAddButton]="true">
  <ng-container actions>
    <button class="link" (click)="expandAll()">
      {{ 'orgUnit.tree.expandAll' | cxTranslate }}
    </button>
    <button class="link" (click)="collapseAll()">
      {{ 'orgUnit.tree.collapseAll' | cxTranslate }}
    </button>
  </ng-container>
</cx-org-list>
`
    }]
  }], null, null);
})();
var AccountSummaryItemService = class _AccountSummaryItemService {
  constructor(routingService) {
    this.routingService = routingService;
  }
  launchDetails(item) {
    if (item && Object.keys(item).length > 0) {
      this.routingService.go({
        cxRoute: "orgAccountSummaryDetails",
        params: item
      });
    }
  }
  static {
    this.ɵfac = function AccountSummaryItemService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountSummaryItemService)(ɵɵinject(RoutingService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AccountSummaryItemService,
      factory: _AccountSummaryItemService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSummaryItemService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }], null);
})();
var AccountSummaryUnitListService = class _AccountSummaryUnitListService extends UnitListService {
  constructor() {
    super(...arguments);
    this.tableType = OrganizationTableType.ACCOUNT_SUMMARY_UNIT;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵAccountSummaryUnitListService_BaseFactory;
      return function AccountSummaryUnitListService_Factory(__ngFactoryType__) {
        return (ɵAccountSummaryUnitListService_BaseFactory || (ɵAccountSummaryUnitListService_BaseFactory = ɵɵgetInheritedFactory(_AccountSummaryUnitListService)))(__ngFactoryType__ || _AccountSummaryUnitListService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AccountSummaryUnitListService,
      factory: _AccountSummaryUnitListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSummaryUnitListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ACCOUNT_SUMMARY_DETAILS_TRANSLATION_KEY = "orgAccountSummaryList.breadcrumbs.details";
function accountSummaryUnitsTableConfigFactory() {
  return {
    table: {
      [OrganizationTableType.ACCOUNT_SUMMARY_UNIT]: {
        cells: ["name"],
        options: {
          layout: TableLayout.VERTICAL,
          cells: {
            name: {
              dataComponent: ToggleLinkCellComponent
            }
          }
        },
        [BREAKPOINT.lg]: {
          cells: ["name"]
        }
      }
    }
  };
}
var accountSummaryListCmsConfig = {
  cmsComponents: {
    ManageAccountSummaryListComponent: {
      component: AccountSummaryListComponent,
      providers: [{
        provide: ListService,
        useExisting: AccountSummaryUnitListService
      }, {
        provide: ItemService,
        useExisting: AccountSummaryItemService
      }],
      childRoutes: {
        parent: {
          data: {
            cxPageMeta: {
              breadcrumb: ACCOUNT_SUMMARY_LIST_TRANSLATION_KEY
            }
          }
        },
        children: [{
          path: `:${ROUTE_PARAMS.unitCode}`,
          component: AccountSummaryDocumentComponent,
          data: {
            cxPageMeta: {
              breadcrumb: ACCOUNT_SUMMARY_DETAILS_TRANSLATION_KEY
            }
          }
        }]
      },
      guards: [AuthGuard, AdminGuard]
    }
  }
};
var AccountSummaryListModule = class _AccountSummaryListModule {
  static {
    this.ɵfac = function AccountSummaryListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountSummaryListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AccountSummaryListModule,
      declarations: [AccountSummaryListComponent],
      imports: [I18nModule, ListModule],
      exports: [AccountSummaryListComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(accountSummaryListCmsConfig), provideDefaultConfigFactory(accountSummaryUnitsTableConfigFactory)],
      imports: [I18nModule, ListModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSummaryListModule, [{
    type: NgModule,
    args: [{
      imports: [I18nModule, ListModule],
      providers: [provideDefaultConfig(accountSummaryListCmsConfig), provideDefaultConfigFactory(accountSummaryUnitsTableConfigFactory)],
      declarations: [AccountSummaryListComponent],
      exports: [AccountSummaryListComponent]
    }]
  }], null, null);
})();
var AccountSummaryComponentsModule = class _AccountSummaryComponentsModule {
  static {
    this.ɵfac = function AccountSummaryComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountSummaryComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AccountSummaryComponentsModule,
      imports: [AccountSummaryListModule, AccountSummaryHeaderModule, AccountSummaryDocumentModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [AccountSummaryListModule, AccountSummaryHeaderModule, AccountSummaryDocumentModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSummaryComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [AccountSummaryListModule, AccountSummaryHeaderModule, AccountSummaryDocumentModule]
    }]
  }], null, null);
})();
OrganizationTableType["ACCOUNT_SUMMARY_UNIT"] = "orgAccountSummary";

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-account-summary.mjs
var AccountSummaryModule = class _AccountSummaryModule {
  static {
    this.ɵfac = function AccountSummaryModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountSummaryModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AccountSummaryModule,
      imports: [AccountSummaryCoreModule, AccountSummaryOccModule, AccountSummaryComponentsModule, AdministrationModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [AccountSummaryCoreModule, AccountSummaryOccModule, AccountSummaryComponentsModule, AdministrationModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSummaryModule, [{
    type: NgModule,
    args: [{
      imports: [AccountSummaryCoreModule, AccountSummaryOccModule, AccountSummaryComponentsModule, AdministrationModule]
    }]
  }], null, null);
})();
export {
  AccountSummaryModule
};
//# sourceMappingURL=@spartacus_organization_account-summary.js.map
