import {
  StoreFinderModule
} from "./chunk-XYR6FMEW.js";
import {
  StoreFinderConfig,
  StoreFinderService
} from "./chunk-H5G2MMM2.js";
import "./chunk-MGG5WRXC.js";
import {
  ArgsModule,
  ArgsPipe,
  SortOrder,
  byBoolean,
  byComparison,
  byNullish,
  byString,
  isBoolean,
  isNumber,
  isString,
  itemsWith,
  property,
  whenType
} from "./chunk-2L4YJ6MD.js";
import {
  AsmCustomer360Facade,
  AsmCustomer360Type,
  AsmDialogActionType,
  KeyBoardEventCode,
  PaymentCardCode
} from "./chunk-IDR7PQN3.js";
import {
  CsAgentAuthService
} from "./chunk-ZXNGX3YN.js";
import {
  UserAccountFacade
} from "./chunk-LZQV6UAH.js";
import {
  ActiveCartFacade,
  CartVoucherFacade
} from "./chunk-KEAKWHYV.js";
import {
  BREAKPOINT,
  BreakpointService,
  CardComponent,
  CardModule,
  DIALOG_TYPE,
  DirectionMode,
  DirectionService,
  FocusDirective,
  ICON_TYPE,
  IconComponent,
  IconModule,
  KeyboardFocusModule,
  LAUNCH_CALLER,
  LaunchDialogService,
  MediaComponent,
  MediaModule,
  MessageComponent,
  MessageComponentModule,
  PageComponentModule,
  SearchBoxModule,
  StarRatingComponent,
  StarRatingModule
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  BaseSiteService,
  CommandService,
  Config,
  ConverterService,
  CustomerCouponService,
  CxDatePipe,
  GlobalMessageType,
  I18nModule,
  InterceptorUtil,
  LoggerService,
  OccEndpointsService,
  ProductScope,
  ProductService,
  TranslatePipe,
  TranslationService,
  USE_CUSTOMER_SUPPORT_AGENT_TOKEN,
  UserIdService,
  isNotUndefined,
  provideDefaultConfig,
  tryNormalizeHttpError
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
  HttpClient,
  HttpHeaders
} from "./chunk-2A6OHZCE.js";
import "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgComponentOutlet,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewChildren,
  inject,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
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
  forkJoin
} from "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  BehaviorSubject,
  ReplaySubject,
  Subject,
  catchError,
  combineLatest,
  concatMap,
  distinctUntilChanged,
  filter,
  map,
  of,
  take,
  throwError
} from "./chunk-R6FETK65.js";
import {
  Subscription
} from "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/asm/fesm2022/spartacus-asm-customer-360-core.mjs
var ASM_CUSTOMER_360_NORMALIZER = new InjectionToken("AsmCustomer360Normalizer");
var AsmCustomer360Adapter = class {
};
var AsmCustomer360Connector = class _AsmCustomer360Connector {
  constructor(asmCustomer360Adapter) {
    this.asmCustomer360Adapter = asmCustomer360Adapter;
  }
  getAsmCustomer360Data(request) {
    return this.asmCustomer360Adapter.getAsmCustomer360Data(request);
  }
  static {
    this.ɵfac = function AsmCustomer360Connector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360Connector)(ɵɵinject(AsmCustomer360Adapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmCustomer360Connector,
      factory: _AsmCustomer360Connector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360Connector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AsmCustomer360Adapter
  }], null);
})();
var AsmCustomer360Service = class _AsmCustomer360Service {
  constructor(commandService, asmCustomer360Connector, userAccountFacade) {
    this.commandService = commandService;
    this.asmCustomer360Connector = asmCustomer360Connector;
    this.userAccountFacade = userAccountFacade;
    this.asmCustomer360Command$ = this.commandService.create((tabComponents) => {
      return this.userAccountFacade.get().pipe(take(1), concatMap((customer) => {
        const queries = tabComponents.reduce((requests, component) => {
          if (component.requestData) {
            return requests.concat(component.requestData);
          }
          return requests;
        }, []);
        if (queries.length > 0) {
          const request = {
            queries,
            options: {
              userId: customer?.customerId ?? ""
            }
          };
          return this.asmCustomer360Connector.getAsmCustomer360Data(request);
        } else {
          return of({
            value: []
          });
        }
      }));
    });
  }
  get360Data(components) {
    return this.asmCustomer360Command$.execute(components);
  }
  static {
    this.ɵfac = function AsmCustomer360Service_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360Service)(ɵɵinject(CommandService), ɵɵinject(AsmCustomer360Connector), ɵɵinject(UserAccountFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmCustomer360Service,
      factory: _AsmCustomer360Service.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360Service, [{
    type: Injectable
  }], () => [{
    type: CommandService
  }, {
    type: AsmCustomer360Connector
  }, {
    type: UserAccountFacade
  }], null);
})();
var facadeProviders = [AsmCustomer360Service, {
  provide: AsmCustomer360Facade,
  useExisting: AsmCustomer360Service
}];
var AsmCustomer360CoreModule = class _AsmCustomer360CoreModule {
  static {
    this.ɵfac = function AsmCustomer360CoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360CoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCustomer360CoreModule,
      imports: [StoreFinderModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [AsmCustomer360Connector, ...facadeProviders],
      imports: [StoreFinderModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360CoreModule, [{
    type: NgModule,
    args: [{
      imports: [StoreFinderModule],
      providers: [AsmCustomer360Connector, ...facadeProviders]
    }]
  }], null, null);
})();
function getAsmDialogActionEvent(customerEntry, action, route) {
  const event = {
    actionType: action,
    selectedUser: customerEntry,
    route
  };
  return event;
}

// node_modules/@spartacus/asm/fesm2022/spartacus-asm-customer-360-components.mjs
function AsmCustomer360SectionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c0 = ["tabHeaderItem"];
var _c1 = (a0) => ({
  name: a0
});
var _c2 = (a0) => ({
  date: a0
});
var _c3 = (a0) => ({
  cartSize: a0
});
var _c4 = (a0) => ({
  code: a0
});
var _c5 = (a0) => ({
  price: a0
});
function AsmCustomer360Component_10_ng_template_0_Template(rf, ctx) {
}
function AsmCustomer360Component_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AsmCustomer360Component_10_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AsmCustomer360Component_cx_message_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-message", 18);
    ɵɵpipe(1, "cxTranslate");
    ɵɵlistener("closeMessage", function AsmCustomer360Component_cx_message_11_Template_cx_message_closeMessage_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.closeErrorAlert());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("text", ɵɵpipeBind1(1, 2, "asmCustomer360.alertErrorMessage"))("type", ctx_r2.globalMessageType.MSG_TYPE_ERROR);
  }
}
function AsmCustomer360Component_div_13_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 31);
    ɵɵelement(2, "cx-media", 32);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const avatarImage_r4 = ctx.ngIf;
    ɵɵadvance(2);
    ɵɵproperty("container", avatarImage_r4);
  }
}
function AsmCustomer360Component_div_13_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 33);
    ɵɵtext(1);
    ɵɵpipe(2, "cxArgs");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, ctx_r2.getAvatarText, ctx_r2.customer), " ");
  }
}
function AsmCustomer360Component_div_13_div_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 34);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const customerOverview_r5 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", customerOverview_r5.address.town, " ");
  }
}
function AsmCustomer360Component_div_13_div_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 35);
    ɵɵtext(1);
    ɵɵpipe(2, "cxDate");
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const customerOverview_r5 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 4, "asmCustomer360.header.signedUpAt", ɵɵpureFunction1(7, _c2, ɵɵpipeBind2(2, 1, customerOverview_r5.signedUpAt, ctx_r2.asmCustomer360Config == null ? null : ctx_r2.asmCustomer360Config.asmCustomer360 == null ? null : ctx_r2.asmCustomer360Config.asmCustomer360.dateFormat))), " ");
  }
}
function AsmCustomer360Component_div_13_span_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 36);
    ɵɵelement(1, "cx-icon", 37);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementStart(4, "button", 38);
    ɵɵpipe(5, "cxTranslate");
    ɵɵlistener("click", function AsmCustomer360Component_div_13_span_16_Template_button_click_4_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.navigateTo({
        cxRoute: "cart"
      }));
    });
    ɵɵtext(6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const customerOverview_r5 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("type", ctx_r2.cartIcon);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 4, "asmCustomer360.header.activeCartLabel", ɵɵpureFunction1(10, _c3, customerOverview_r5 == null ? null : customerOverview_r5.cartSize)), " ");
    ɵɵadvance(2);
    ɵɵattribute("aria-label", ɵɵpipeBind2(5, 7, "asmCustomer360.aria.activeCartCode", ɵɵpureFunction1(12, _c4, customerOverview_r5.cartCode)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", customerOverview_r5.cartCode, " ");
  }
}
function AsmCustomer360Component_div_13_span_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 39);
    ɵɵelement(1, "cx-icon", 37);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementStart(4, "button", 38);
    ɵɵpipe(5, "cxTranslate");
    ɵɵlistener("click", function AsmCustomer360Component_div_13_span_17_Template_button_click_4_listener() {
      ɵɵrestoreView(_r7);
      const customerOverview_r5 = ɵɵnextContext().ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.navigateTo({
        cxRoute: "orderDetails",
        params: {
          code: customerOverview_r5.latestOrderCode
        }
      }));
    });
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵtext(7);
    ɵɵpipe(8, "cxDate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const customerOverview_r5 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("type", ctx_r2.orderIcon);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 5, "asmCustomer360.header.recentOrderLabel", ɵɵpureFunction1(14, _c5, customerOverview_r5 == null ? null : customerOverview_r5.latestOrderTotal)), " ");
    ɵɵadvance(2);
    ɵɵattribute("aria-label", ɵɵpipeBind2(5, 8, "asmCustomer360.aria.recentOrderCode", ɵɵpureFunction1(16, _c4, customerOverview_r5.latestOrderCode)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", customerOverview_r5.latestOrderCode, "");
    ɵɵadvance();
    ɵɵtextInterpolate1(", ", ɵɵpipeBind2(8, 11, customerOverview_r5 == null ? null : customerOverview_r5.latestOrderTime, ctx_r2.asmCustomer360Config == null ? null : ctx_r2.asmCustomer360Config.asmCustomer360 == null ? null : ctx_r2.asmCustomer360Config.asmCustomer360.dateFormat), " ");
  }
}
function AsmCustomer360Component_div_13_span_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 40);
    ɵɵelement(1, "cx-icon", 37);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementStart(4, "button", 38);
    ɵɵpipe(5, "cxTranslate");
    ɵɵlistener("click", function AsmCustomer360Component_div_13_span_18_Template_button_click_4_listener() {
      ɵɵrestoreView(_r8);
      const customerOverview_r5 = ɵɵnextContext().ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.navigateTo({
        cxRoute: "supportTicketDetails",
        params: {
          ticketCode: customerOverview_r5.latestOpenedTicketId
        }
      }));
    });
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵtext(7);
    ɵɵpipe(8, "cxDate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const customerOverview_r5 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("type", ctx_r2.ticketIcon);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, "asmCustomer360.header.recentTicketLabel"), " ");
    ɵɵadvance(2);
    ɵɵattribute("aria-label", ɵɵpipeBind2(5, 7, "asmCustomer360.aria.recentOrderCode", ɵɵpureFunction1(13, _c4, customerOverview_r5.latestOpenedTicketId)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", customerOverview_r5.latestOpenedTicketId, "");
    ɵɵadvance();
    ɵɵtextInterpolate1(", ", ɵɵpipeBind2(8, 10, customerOverview_r5 == null ? null : customerOverview_r5.latestOpenedTicketCreatedAt, ctx_r2.asmCustomer360Config == null ? null : ctx_r2.asmCustomer360Config.asmCustomer360 == null ? null : ctx_r2.asmCustomer360Config.asmCustomer360.dateFormat), " ");
  }
}
function AsmCustomer360Component_div_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19)(1, "div", 20)(2, "div", 21);
    ɵɵtemplate(3, AsmCustomer360Component_div_13_ng_container_3_Template, 3, 1, "ng-container", 17);
    ɵɵpipe(4, "cxArgs");
    ɵɵtemplate(5, AsmCustomer360Component_div_13_ng_template_5_Template, 3, 4, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementStart(7, "div", 22)(8, "div", 23);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 24);
    ɵɵtext(12);
    ɵɵelementEnd();
    ɵɵtemplate(13, AsmCustomer360Component_div_13_div_13_Template, 2, 1, "div", 25);
    ɵɵelementEnd()();
    ɵɵtemplate(14, AsmCustomer360Component_div_13_div_14_Template, 4, 9, "div", 26);
    ɵɵelementEnd();
    ɵɵelementStart(15, "div", 27);
    ɵɵtemplate(16, AsmCustomer360Component_div_13_span_16_Template, 7, 14, "span", 28)(17, AsmCustomer360Component_div_13_span_17_Template, 9, 18, "span", 29)(18, AsmCustomer360Component_div_13_span_18_Template, 9, 15, "span", 30);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const customerOverview_r5 = ctx.ngIf;
    const customerTextAvatar_r9 = ɵɵreference(6);
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ɵɵpipeBind2(4, 9, ctx_r2.getAvatarImage, customerOverview_r5))("ngIfElse", customerTextAvatar_r9);
    ɵɵadvance(6);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(10, 12, "asmCustomer360.header.newSubTitle", ɵɵpureFunction1(15, _c1, customerOverview_r5 == null ? null : customerOverview_r5.name)), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", customerOverview_r5 == null ? null : customerOverview_r5.email, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", customerOverview_r5 == null ? null : customerOverview_r5.address == null ? null : customerOverview_r5.address.town);
    ɵɵadvance();
    ɵɵproperty("ngIf", customerOverview_r5 == null ? null : customerOverview_r5.signedUpAt);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", customerOverview_r5 == null ? null : customerOverview_r5.cartCode);
    ɵɵadvance();
    ɵɵproperty("ngIf", customerOverview_r5 == null ? null : customerOverview_r5.latestOrderCode);
    ɵɵadvance();
    ɵɵproperty("ngIf", customerOverview_r5 == null ? null : customerOverview_r5.latestOpenedTicketId);
  }
}
function AsmCustomer360Component_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 41, 3);
    ɵɵlistener("click", function AsmCustomer360Component_button_17_Template_button_click_0_listener() {
      const i_r11 = ɵɵrestoreView(_r10).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.selectTab(i_r11));
    })("keydown", function AsmCustomer360Component_button_17_Template_button_keydown_0_listener($event) {
      const i_r11 = ɵɵrestoreView(_r10).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.switchTab($event, i_r11));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tabHeader_r12 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("active", ctx_r2.activeTab === i_r11);
    ɵɵattribute("aria-selected", ctx_r2.activeTab === i_r11);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, tabHeader_r12.i18nNameKey), " ");
  }
}
function AsmCustomer360Component_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 42);
    ɵɵelement(2, "div", 43);
    ɵɵelementStart(3, "div", 44);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 45);
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 2, "asmCustomer360.errorMessageHeader"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 4, "asmCustomer360.alertErrorMessage"), " ");
  }
}
function AsmCustomer360Component_ng_template_21_ng_container_0_cx_asm_customer_360_section_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-asm-customer-360-section", 48);
    ɵɵlistener("navigate", function AsmCustomer360Component_ng_template_21_ng_container_0_cx_asm_customer_360_section_1_Template_cx_asm_customer_360_section_navigate_0_listener($event) {
      ɵɵrestoreView(_r13);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.navigateTo($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const config_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const asmCustomer360Tabs_r16 = ɵɵnextContext().ngIf;
    ɵɵproperty("component", config_r14.component)("config", config_r14.config)("data", asmCustomer360Tabs_r16 == null ? null : asmCustomer360Tabs_r16[i_r15]);
  }
}
function AsmCustomer360Component_ng_template_21_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AsmCustomer360Component_ng_template_21_ng_container_0_cx_asm_customer_360_section_1_Template, 1, 3, "cx-asm-customer-360-section", 47);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.currentTab == null ? null : ctx_r2.currentTab.components);
  }
}
function AsmCustomer360Component_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AsmCustomer360Component_ng_template_21_ng_container_0_Template, 2, 1, "ng-container", 46);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r2.asmCustomer360Tabs$));
  }
}
function AsmCustomer360Component_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 49);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("click", function AsmCustomer360Component_ng_template_23_Template_button_click_0_listener() {
      ɵɵrestoreView(_r17);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.closeModal("Cross click"));
    });
    ɵɵelement(3, "cx-icon", 50);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 3, "common.close"))("title", ɵɵpipeBind1(2, 5, "common.close"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r2.closeIcon);
  }
}
var _c6 = (a0) => ({
  count: a0
});
function AsmCustomer360ProductItemComponent_ng_container_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, "asmCustomer360.productItem.quantity", ɵɵpureFunction1(4, _c6, ctx_r1.quantity)), " ");
  }
}
function AsmCustomer360ProductItemComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 7);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, AsmCustomer360ProductItemComponent_ng_container_6_div_3_Template, 3, 6, "div", 8);
    ɵɵelementStart(4, "div", 9);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.product == null ? null : ctx_r1.product.code, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.quantity);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(6, 3, "asmCustomer360.productItem.itemPrice", ɵɵpureFunction1(6, _c5, (tmp_4_0 = ctx_r1.product == null ? null : ctx_r1.product.basePrice) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : ctx_r1.product == null ? null : ctx_r1.product.price == null ? null : ctx_r1.product.price.formattedValue)), " ");
  }
}
function AsmCustomer360ProductItemComponent_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "asmCustomer360.productItem.outOfStock"), " ");
  }
}
function AsmCustomer360ProductItemComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AsmCustomer360ProductItemComponent_ng_template_7_div_0_Template, 3, 3, "div", 11);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", (ctx_r1.product.stock == null ? null : ctx_r1.product.stock.stockLevelStatus) === "outOfStock");
  }
}
function AsmCustomer360ProductListingComponent_div_0_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AsmCustomer360ProductListingComponent_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AsmCustomer360ProductListingComponent_div_0_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate);
  }
}
function AsmCustomer360ProductListingComponent_div_0_ng_container_5_ng_container_2_cx_asm_customer_360_product_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-asm-customer-360-product-item", 11);
    ɵɵlistener("selectProduct", function AsmCustomer360ProductListingComponent_div_0_ng_container_5_ng_container_2_cx_asm_customer_360_product_item_1_Template_cx_asm_customer_360_product_item_selectProduct_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.selectProduct.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const product_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("product", product_r4)("quantity", product_r4 == null ? null : product_r4.quantity);
  }
}
function AsmCustomer360ProductListingComponent_div_0_ng_container_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AsmCustomer360ProductListingComponent_div_0_ng_container_5_ng_container_2_cx_asm_customer_360_product_item_1_Template, 1, 2, "cx-asm-customer-360-product-item", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const numberofColumns_r6 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showMore || i_r5 < numberofColumns_r6);
  }
}
function AsmCustomer360ProductListingComponent_div_0_ng_container_5_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "asmCustomer360.productListing.showMore"));
  }
}
function AsmCustomer360ProductListingComponent_div_0_ng_container_5_ng_container_3_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "asmCustomer360.productListing.showLess"));
  }
}
function AsmCustomer360ProductListingComponent_div_0_ng_container_5_ng_container_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AsmCustomer360ProductListingComponent_div_0_ng_container_5_ng_container_3_ng_template_3_span_0_Template, 3, 3, "span", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngIf", ctx_r1.showMore);
  }
}
function AsmCustomer360ProductListingComponent_div_0_ng_container_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 12);
    ɵɵlistener("click", function AsmCustomer360ProductListingComponent_div_0_ng_container_5_ng_container_3_Template_button_click_1_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.toggleShowMore());
    });
    ɵɵtemplate(2, AsmCustomer360ProductListingComponent_div_0_ng_container_5_ng_container_3_span_2_Template, 3, 3, "span", 13)(3, AsmCustomer360ProductListingComponent_div_0_ng_container_5_ng_container_3_ng_template_3_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const showLess_r8 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.showMore)("ngIfElse", showLess_r8);
  }
}
function AsmCustomer360ProductListingComponent_div_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 8);
    ɵɵtemplate(2, AsmCustomer360ProductListingComponent_div_0_ng_container_5_ng_container_2_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
    ɵɵtemplate(3, AsmCustomer360ProductListingComponent_div_0_ng_container_5_ng_container_3_Template, 5, 2, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const numberofColumns_r6 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵclassProp("show-more", ctx_r1.showMore);
    ɵɵproperty("ngClass", "column-" + numberofColumns_r6);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.products);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.products.length > numberofColumns_r6);
  }
}
function AsmCustomer360ProductListingComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "button", 5);
    ɵɵlistener("click", function AsmCustomer360ProductListingComponent_div_0_Template_button_click_2_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.clickHeader.emit());
    });
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, AsmCustomer360ProductListingComponent_div_0_ng_container_4_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
    ɵɵtemplate(5, AsmCustomer360ProductListingComponent_div_0_ng_container_5_Template, 4, 5, "ng-container", 6);
    ɵɵpipe(6, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵattribute("aria-label", ctx_r1.headerText);
    ɵɵadvance();
    ɵɵclassProp("inactive", ctx_r1.headerInactive);
    ɵɵproperty("disabled", ctx_r1.headerInactive);
    ɵɵattribute("aria-label", ctx_r1.headerText);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.headerText, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(6, 8, ctx_r1.numberofColumns$));
  }
}
function AsmCustomer360ProductListingComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.emptyResultDescription, " ");
  }
}
function AsmCustomer360ActiveCartComponent_cx_asm_customer_360_product_listing_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-asm-customer-360-product-listing", 2);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("selectProduct", function AsmCustomer360ActiveCartComponent_cx_asm_customer_360_product_listing_0_Template_cx_asm_customer_360_product_listing_selectProduct_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.sectionContext.navigate$.next({
        cxRoute: "product",
        params: $event
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const productItems_r3 = ctx.ngIf;
    ɵɵnextContext();
    const headerTemplate_r4 = ɵɵreference(3);
    ɵɵproperty("emptyResultDescription", ɵɵpipeBind1(1, 5, "asmCustomer360.activeCart.emptyDescription"))("headerInactive", true)("headerTemplate", headerTemplate_r4)("headerText", ɵɵpipeBind1(2, 7, "asmCustomer360.activeCart.header"))("products", productItems_r3);
  }
}
function AsmCustomer360ActiveCartComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 4);
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("click", function AsmCustomer360ActiveCartComponent_ng_template_2_ng_container_0_Template_button_click_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.sectionContext.navigate$.next({
        cxRoute: "cart"
      }));
    });
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 5);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(7, "div", 6);
    ɵɵelementStart(8, "div", 7);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const activeCart_r6 = ctx.ngIf;
    ɵɵadvance();
    ɵɵattribute("aria-label", ɵɵpipeBind2(2, 4, "asmCustomer360.activeCart.aria.linkLabel", ɵɵpureFunction1(13, _c4, activeCart_r6.code)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", activeCart_r6.code, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(6, 7, "asmCustomer360.productListing.totalNoItems", ɵɵpureFunction1(15, _c6, activeCart_r6.totalItemCount)), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(10, 10, "asmCustomer360.productListing.totalPrice", ɵɵpureFunction1(17, _c5, activeCart_r6.totalPrice)), " ");
  }
}
function AsmCustomer360ActiveCartComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AsmCustomer360ActiveCartComponent_ng_template_2_ng_container_0_Template, 11, 19, "ng-container", 3);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r1.activeCart$));
  }
}
var _c7 = ["table"];
var _c8 = (a0) => ({
  number: a0
});
var _c9 = (a0, a1, a2) => ({
  "text-start": a0,
  "text-center": a1,
  "text-end": a2
});
function AsmCustomer360TableComponent_div_0_div_3_ng_container_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15);
    ɵɵpipe(1, "cxTranslate");
    ɵɵlistener("click", function AsmCustomer360TableComponent_div_0_div_3_ng_container_2_button_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const pageNumber_r2 = ɵɵnextContext().index;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.setPageNumber(pageNumber_r2, true));
    });
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const pageNumber_r2 = ɵɵnextContext().index;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵclassProp("active", ctx_r2.currentPageNumber === pageNumber_r2);
    ɵɵproperty("disabled", ctx_r2.currentPageNumber === pageNumber_r2);
    ɵɵattribute("aria-current", ctx_r2.currentPageNumber === pageNumber_r2 ? "page" : null)("aria-label", ɵɵpipeBind2(1, 6, "asmCustomer360.page", ɵɵpureFunction1(9, _c8, pageNumber_r2 + 1)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", pageNumber_r2 + 1, " ");
  }
}
function AsmCustomer360TableComponent_div_0_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AsmCustomer360TableComponent_div_0_div_3_ng_container_2_button_1_Template, 3, 11, "button", 14);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.entryPages.length > 1);
  }
}
function AsmCustomer360TableComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵpipe(1, "cxTranslate");
    ɵɵtemplate(2, AsmCustomer360TableComponent_div_0_div_3_ng_container_2_Template, 2, 1, "ng-container", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 2, "asmCustomer360.pagination"));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.entryPages);
  }
}
function AsmCustomer360TableComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9)(1, "h4", 10);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, AsmCustomer360TableComponent_div_0_div_3_Template, 3, 4, "div", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r2.headerText, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.entryPages);
  }
}
function AsmCustomer360TableComponent_ng_container_2_th_7_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, column_r6.i18nTextKey));
  }
}
function AsmCustomer360TableComponent_ng_container_2_th_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(column_r6.text);
  }
}
function AsmCustomer360TableComponent_ng_container_2_th_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "th", 21);
    ɵɵpipe(1, "cxArgs");
    ɵɵlistener("click", function AsmCustomer360TableComponent_ng_container_2_th_7_Template_th_click_0_listener() {
      const columnIndex_r5 = ɵɵrestoreView(_r4).index;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.setSelectedTabIndex(columnIndex_r5, 0));
    });
    ɵɵelementStart(2, "button", 22);
    ɵɵpipe(3, "cxArgs");
    ɵɵlistener("click", function AsmCustomer360TableComponent_ng_container_2_th_7_Template_button_click_2_listener() {
      const column_r6 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.sortEntriesAndUpdatePages(column_r6.property));
    })("keydown", function AsmCustomer360TableComponent_ng_container_2_th_7_Template_button_keydown_2_listener($event) {
      const columnIndex_r5 = ɵɵrestoreView(_r4).index;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onKeyDownCell($event, columnIndex_r5, 0));
    });
    ɵɵtemplate(4, AsmCustomer360TableComponent_ng_container_2_th_7_span_4_Template, 3, 3, "span", 7)(5, AsmCustomer360TableComponent_ng_container_2_th_7_span_5_Template, 2, 1, "span", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const column_r6 = ctx.$implicit;
    const columnIndex_r5 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("active", ctx_r2.sortProperty === column_r6.property)("asc", ctx_r2.listSortOrder === ctx_r2.SortOrder.ASC)("desc", ctx_r2.listSortOrder !== ctx_r2.SortOrder.ASC);
    ɵɵproperty("ngClass", ɵɵpureFunction3(21, _c9, column_r6.headerTextAlign === ctx_r2.CustomerTableTextAlign.START, column_r6.headerTextAlign === ctx_r2.CustomerTableTextAlign.CENTER, column_r6.headerTextAlign === ctx_r2.CustomerTableTextAlign.END));
    ɵɵattribute("aria-sort", ɵɵpipeBind4(1, 11, ctx_r2.sortDirection, column_r6.property, ctx_r2.sortProperty, ctx_r2.listSortOrder));
    ɵɵadvance(2);
    ɵɵproperty("tabindex", ɵɵpipeBind4(3, 16, ctx_r2.tabIndexValue, ctx_r2.focusedTableColumnIndex, ctx_r2.focusedTableRowIndex, columnIndex_r5));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", column_r6 == null ? null : column_r6.i18nTextKey);
    ɵɵadvance();
    ɵɵproperty("ngIf", !(column_r6 == null ? null : column_r6.i18nTextKey));
  }
}
function AsmCustomer360TableComponent_ng_container_2_tr_9_td_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AsmCustomer360TableComponent_ng_container_2_tr_9_td_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 27);
    ɵɵpipe(1, "cxTranslate");
    ɵɵlistener("click", function AsmCustomer360TableComponent_ng_container_2_tr_9_td_1_ng_template_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r10);
      const entry_r11 = ɵɵnextContext(2).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.selectItem.emit(entry_r11));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r12 = ɵɵnextContext().$implicit;
    const entry_r11 = ɵɵnextContext().$implicit;
    ɵɵproperty("title", entry_r11[column_r12.property] || ɵɵpipeBind1(1, 3, "asmCustomer360.emptyCellValue"));
    ɵɵattribute("aria-label", entry_r11[column_r12.property]);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", entry_r11[column_r12.property] || ɵɵpipeBind1(3, 5, "asmCustomer360.emptyCellValue"), " ");
  }
}
function AsmCustomer360TableComponent_ng_container_2_tr_9_td_1_ng_template_4_cx_star_rating_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-star-rating", 29);
  }
  if (rf & 2) {
    const column_r12 = ɵɵnextContext(2).$implicit;
    const entry_r11 = ɵɵnextContext().$implicit;
    ɵɵproperty("rating", entry_r11[column_r12.property]);
  }
}
function AsmCustomer360TableComponent_ng_container_2_tr_9_td_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AsmCustomer360TableComponent_ng_container_2_tr_9_td_1_ng_template_4_cx_star_rating_0_Template, 1, 1, "cx-star-rating", 28);
  }
  if (rf & 2) {
    const column_r12 = ɵɵnextContext().$implicit;
    const dateCell_r13 = ɵɵreference(7);
    ɵɵproperty("ngIf", column_r12.renderAsStarRating)("ngIfElse", dateCell_r13);
  }
}
function AsmCustomer360TableComponent_ng_container_2_tr_9_td_1_ng_template_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵpipe(3, "cxDate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r12 = ɵɵnextContext(2).$implicit;
    const entry_r11 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind2(3, 1, entry_r11[column_r12.property], ctx_r2.asmCustomer360Config == null ? null : ctx_r2.asmCustomer360Config.asmCustomer360 == null ? null : ctx_r2.asmCustomer360Config.asmCustomer360.dateTimeFormat));
  }
}
function AsmCustomer360TableComponent_ng_container_2_tr_9_td_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AsmCustomer360TableComponent_ng_container_2_tr_9_td_1_ng_template_6_ng_container_0_Template, 4, 4, "ng-container", 30);
  }
  if (rf & 2) {
    const column_r12 = ɵɵnextContext().$implicit;
    const tableCell_r14 = ɵɵreference(9);
    const entry_r11 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngIf", (column_r12 == null ? null : column_r12.isDate) && entry_r11[column_r12.property])("ngIfElse", tableCell_r14);
  }
}
function AsmCustomer360TableComponent_ng_container_2_tr_9_td_1_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 31);
    ɵɵpipe(2, "cxTranslate");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r12 = ɵɵnextContext().$implicit;
    const entry_r11 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("title", entry_r11[column_r12.property] || ɵɵpipeBind1(2, 2, "asmCustomer360.emptyCellValue"));
    ɵɵadvance(2);
    ɵɵtextInterpolate(entry_r11[column_r12.property] || ɵɵpipeBind1(4, 4, "asmCustomer360.emptyCellValue"));
  }
}
function AsmCustomer360TableComponent_ng_container_2_tr_9_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 25);
    ɵɵlistener("keydown", function AsmCustomer360TableComponent_ng_container_2_tr_9_td_1_Template_td_keydown_0_listener($event) {
      const columnIndex_r8 = ɵɵrestoreView(_r7).index;
      const rowIndex_r9 = ɵɵnextContext().index;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onKeyDownCell($event, columnIndex_r8, rowIndex_r9 + 1));
    })("click", function AsmCustomer360TableComponent_ng_container_2_tr_9_td_1_Template_td_click_0_listener() {
      const columnIndex_r8 = ɵɵrestoreView(_r7).index;
      const rowIndex_r9 = ɵɵnextContext().index;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.setSelectedTabIndex(columnIndex_r8, rowIndex_r9 + 1));
    });
    ɵɵtemplate(1, AsmCustomer360TableComponent_ng_container_2_tr_9_td_1_ng_container_1_Template, 1, 0, "ng-container", 26)(2, AsmCustomer360TableComponent_ng_container_2_tr_9_td_1_ng_template_2_Template, 4, 7, "ng-template", null, 1, ɵɵtemplateRefExtractor)(4, AsmCustomer360TableComponent_ng_container_2_tr_9_td_1_ng_template_4_Template, 1, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor)(6, AsmCustomer360TableComponent_ng_container_2_tr_9_td_1_ng_template_6_Template, 1, 2, "ng-template", null, 3, ɵɵtemplateRefExtractor)(8, AsmCustomer360TableComponent_ng_container_2_tr_9_td_1_ng_template_8_Template, 5, 6, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r12 = ctx.$implicit;
    const linkTemplate_r15 = ɵɵreference(3);
    const starRating_r16 = ɵɵreference(5);
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ɵɵpureFunction3(4, _c9, column_r12.textAlign === ctx_r2.CustomerTableTextAlign.START, column_r12.textAlign === ctx_r2.CustomerTableTextAlign.CENTER, column_r12.textAlign === ctx_r2.CustomerTableTextAlign.END));
    ɵɵadvance();
    ɵɵproperty("ngIf", column_r12.navigatable)("ngIfThen", linkTemplate_r15)("ngIfElse", starRating_r16);
  }
}
function AsmCustomer360TableComponent_ng_container_2_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 23);
    ɵɵtemplate(1, AsmCustomer360TableComponent_ng_container_2_tr_9_td_1_Template, 10, 8, "td", 24);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.columns);
  }
}
function AsmCustomer360TableComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "table", 16, 0)(3, "caption", 17);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "thead")(6, "tr", 18);
    ɵɵtemplate(7, AsmCustomer360TableComponent_ng_container_2_th_7_Template, 6, 25, "th", 19);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "tbody");
    ɵɵtemplate(9, AsmCustomer360TableComponent_ng_container_2_tr_9_Template, 2, 1, "tr", 20);
    ɵɵpipe(10, "async");
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵattribute("aria-rowcount", ctx_r2.entries.length)("aria-colcount", ctx_r2.columns.length)("data-per-page", ctx_r2.pageSize);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r2.headerText, " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r2.columns);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(10, 6, ctx_r2.currentPage$));
  }
}
function AsmCustomer360TableComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 32);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.emptyStateText, "\n");
  }
}
var _c10 = (a0, a1) => ({
  initial: 1,
  end: a0,
  total: a1
});
function AsmCustomer360MapComponent_ng_container_0_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function AsmCustomer360MapComponent_ng_container_0_button_5_Template_button_click_0_listener() {
      const store_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.selectStore(store_r2));
    });
    ɵɵelementStart(1, "div", 4)(2, "div", 5);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 5);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 5);
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 6);
    ɵɵtext(9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const store_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("selected", ctx_r2.selectedStore === store_r2);
    ɵɵattribute("aria-label", store_r2.displayName);
    ɵɵadvance(3);
    ɵɵtextInterpolate(store_r2.displayName);
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", store_r2.address == null ? null : store_r2.address.line1, ", ", store_r2.address == null ? null : store_r2.address.line2, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(store_r2.address == null ? null : store_r2.address.town);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", store_r2.formattedDistance, " ");
  }
}
function AsmCustomer360MapComponent_ng_container_0_div_6_img_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 12);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("alt", ctx_r2.selectedStore.displayName);
    ɵɵpropertyInterpolate("title", ctx_r2.selectedStore.displayName);
    ɵɵproperty("src", ctx_r2.selectedStore.storeImages == null ? null : ctx_r2.selectedStore.storeImages[0] == null ? null : ctx_r2.selectedStore.storeImages[0].url, ɵɵsanitizeUrl);
  }
}
function AsmCustomer360MapComponent_ng_container_0_div_6_div_12_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19)(1, "span", 20);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵpipe(4, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const opening_r4 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(5);
    ɵɵadvance(2);
    ɵɵtextInterpolate(opening_r4.weekDay);
    ɵɵadvance();
    ɵɵtextInterpolate1("", ɵɵpipeBind1(4, 2, ctx_r2.getStoreOpening(opening_r4)), " ");
  }
}
function AsmCustomer360MapComponent_ng_container_0_div_6_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtemplate(1, AsmCustomer360MapComponent_ng_container_0_div_6_div_12_div_1_div_1_Template, 5, 4, "div", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const weekDayOpeningList_r5 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngForOf", weekDayOpeningList_r5);
  }
}
function AsmCustomer360MapComponent_ng_container_0_div_6_div_12_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19)(1, "span", 20);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵpipe(4, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const opening_r6 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(5);
    ɵɵadvance(2);
    ɵɵtextInterpolate(opening_r6.name);
    ɵɵadvance();
    ɵɵtextInterpolate1("", ɵɵpipeBind1(4, 2, ctx_r2.getStoreOpening(opening_r6)), " ");
  }
}
function AsmCustomer360MapComponent_ng_container_0_div_6_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtemplate(1, AsmCustomer360MapComponent_ng_container_0_div_6_div_12_div_2_div_1_Template, 5, 4, "div", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const specialDayOpeningList_r7 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngForOf", specialDayOpeningList_r7);
  }
}
function AsmCustomer360MapComponent_ng_container_0_div_6_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const feature_r8 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", feature_r8.value, " ");
  }
}
function AsmCustomer360MapComponent_ng_container_0_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtemplate(1, AsmCustomer360MapComponent_ng_container_0_div_6_div_12_div_1_Template, 2, 1, "div", 14)(2, AsmCustomer360MapComponent_ng_container_0_div_6_div_12_div_2_Template, 2, 1, "div", 14);
    ɵɵelementStart(3, "div", 15);
    ɵɵtemplate(4, AsmCustomer360MapComponent_ng_container_0_div_6_div_12_div_4_Template, 2, 1, "div", 16);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const openingHours_r9 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", openingHours_r9.weekDayOpeningList);
    ɵɵadvance();
    ɵɵproperty("ngIf", openingHours_r9.specialDayOpeningList);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.selectedStore.features == null ? null : ctx_r2.selectedStore.features.entry);
  }
}
function AsmCustomer360MapComponent_ng_container_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 7);
    ɵɵtemplate(2, AsmCustomer360MapComponent_ng_container_0_div_6_img_2_Template, 1, 3, "img", 8);
    ɵɵelementStart(3, "div", 9)(4, "div", 10);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div");
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementStart(8, "div");
    ɵɵtext(9);
    ɵɵelementEnd();
    ɵɵelementStart(10, "div");
    ɵɵtext(11);
    ɵɵelementEnd()()();
    ɵɵtemplate(12, AsmCustomer360MapComponent_ng_container_0_div_6_div_12_Template, 5, 3, "div", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.selectedStore.storeImages == null ? null : ctx_r2.selectedStore.storeImages[0]);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r2.selectedStore.displayName);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.selectedStore.address == null ? null : ctx_r2.selectedStore.address.line1);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.selectedStore.address == null ? null : ctx_r2.selectedStore.address.line2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.selectedStore.address == null ? null : ctx_r2.selectedStore.address.town);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.selectedStore == null ? null : ctx_r2.selectedStore.openingHours);
  }
}
function AsmCustomer360MapComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div");
    ɵɵtemplate(5, AsmCustomer360MapComponent_ng_container_0_button_5_Template, 10, 8, "button", 2);
    ɵɵelementEnd();
    ɵɵtemplate(6, AsmCustomer360MapComponent_ng_container_0_div_6_Template, 13, 6, "div", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 3, "asmCustomer360.maps.storesFound", ɵɵpureFunction2(6, _c10, ctx_r2.storeData.pagination == null ? null : ctx_r2.storeData.pagination.pageSize, ctx_r2.storeData.pagination == null ? null : ctx_r2.storeData.pagination.totalResults)), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r2.storeData.stores);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.selectedStore);
  }
}
function AsmCustomer360ProductInterestsComponent_cx_asm_customer_360_product_listing_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-asm-customer-360-product-listing", 1);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("clickHeader", function AsmCustomer360ProductInterestsComponent_cx_asm_customer_360_product_listing_0_Template_cx_asm_customer_360_product_listing_clickHeader_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.sectionContext.navigate$.next({
        cxRoute: "myInterests"
      }));
    })("selectProduct", function AsmCustomer360ProductInterestsComponent_cx_asm_customer_360_product_listing_0_Template_cx_asm_customer_360_product_listing_selectProduct_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.sectionContext.navigate$.next({
        cxRoute: "product",
        params: $event
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const products_r3 = ctx.ngIf;
    ɵɵproperty("emptyResultDescription", ɵɵpipeBind1(1, 3, "asmCustomer360.productInterests.emptyDescription"))("headerText", ɵɵpipeBind1(2, 5, "asmCustomer360.productInterests.header"))("products", products_r3);
  }
}
var _c11 = (a0) => ({
  address: a0
});
function AsmCustomer360ProfileComponent_ng_container_1_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AsmCustomer360ProfileComponent_ng_container_1_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AsmCustomer360ProfileComponent_ng_container_1_div_37_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵelement(1, "cx-card", 17);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const paymentInfoList_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("index", i_r2)("border", true)("fitToContainer", true)("content", ɵɵpipeBind1(2, 4, ctx_r2.getCardContent(paymentInfoList_r1)));
  }
}
function AsmCustomer360ProfileComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div")(2, "div", 3)(3, "div", 4)(4, "h4", 5);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementStart(7, "div", 3)(8, "div", 4)(9, "h5", 6);
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "div", 7);
    ɵɵtemplate(13, AsmCustomer360ProfileComponent_ng_container_1_ng_container_13_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd()();
    ɵɵelementStart(14, "div", 4)(15, "h5", 6);
    ɵɵtext(16);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(18, "div", 9);
    ɵɵtemplate(19, AsmCustomer360ProfileComponent_ng_container_1_ng_container_19_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd()();
    ɵɵelement(20, "div", 10);
    ɵɵelementStart(21, "div", 4)(22, "h5", 6);
    ɵɵtext(23);
    ɵɵpipe(24, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(25, "div", 11);
    ɵɵtext(26);
    ɵɵelementEnd()();
    ɵɵelementStart(27, "div", 4)(28, "h5", 6);
    ɵɵtext(29);
    ɵɵpipe(30, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(31, "div", 12);
    ɵɵtext(32);
    ɵɵelementEnd()()()();
    ɵɵelementStart(33, "h4", 13);
    ɵɵtext(34);
    ɵɵpipe(35, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(36, "div", 14);
    ɵɵtemplate(37, AsmCustomer360ProfileComponent_ng_container_1_div_37_Template, 3, 6, "div", 15);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const customerProfileData_r4 = ctx.ngIf;
    ɵɵnextContext();
    const address_r5 = ɵɵreference(4);
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 13, "asmCustomer360.profile.address"), " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 15, "asmCustomer360.profile.billingAddress"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", address_r5)("ngTemplateOutletContext", ɵɵpureFunction1(25, _c11, customerProfileData_r4 == null ? null : customerProfileData_r4.billingAddress));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(17, 17, "asmCustomer360.profile.deliveryAddress"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", address_r5)("ngTemplateOutletContext", ɵɵpureFunction1(27, _c11, customerProfileData_r4 == null ? null : customerProfileData_r4.deliveryAddress));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(24, 19, "asmCustomer360.profile.phone1"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", customerProfileData_r4 == null ? null : customerProfileData_r4.phone1, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(30, 21, "asmCustomer360.profile.phone2"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", customerProfileData_r4 == null ? null : customerProfileData_r4.phone2, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(35, 23, "asmCustomer360.profile.paymentMethodHeader"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", customerProfileData_r4.paymentDetails);
  }
}
function AsmCustomer360ProfileComponent_ng_template_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 24);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const address_r6 = ɵɵnextContext().address;
    ɵɵadvance();
    ɵɵtextInterpolate1("", address_r6.town, ", ");
  }
}
function AsmCustomer360ProfileComponent_ng_template_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const address_r6 = ɵɵnextContext().address;
    ɵɵadvance();
    ɵɵtextInterpolate1("", address_r6.region.name, ", ");
  }
}
function AsmCustomer360ProfileComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18)(1, "div", 19);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 20);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div");
    ɵɵtemplate(6, AsmCustomer360ProfileComponent_ng_template_3_span_6_Template, 2, 1, "span", 21)(7, AsmCustomer360ProfileComponent_ng_template_3_span_7_Template, 2, 1, "span", 22);
    ɵɵelementStart(8, "span", 23);
    ɵɵtext(9);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const address_r6 = ctx.address;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", address_r6 == null ? null : address_r6.line1, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", address_r6 == null ? null : address_r6.line2, " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", address_r6 == null ? null : address_r6.town);
    ɵɵadvance();
    ɵɵproperty("ngIf", address_r6 == null ? null : address_r6.region == null ? null : address_r6.region.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(address_r6 == null ? null : address_r6.country == null ? null : address_r6.country.name);
  }
}
function AsmCustomer360SavedCartComponent_cx_asm_customer_360_product_listing_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-asm-customer-360-product-listing", 2);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("selectProduct", function AsmCustomer360SavedCartComponent_cx_asm_customer_360_product_listing_0_Template_cx_asm_customer_360_product_listing_selectProduct_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.sectionContext.navigate$.next({
        cxRoute: "product",
        params: $event
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const productItems_r3 = ctx.ngIf;
    ɵɵnextContext();
    const headerTemplate_r4 = ɵɵreference(3);
    ɵɵproperty("emptyResultDescription", ɵɵpipeBind1(1, 5, "asmCustomer360.savedCart.emptyDescription"))("headerInactive", true)("headerTemplate", headerTemplate_r4)("headerText", ɵɵpipeBind1(2, 7, "asmCustomer360.savedCart.header"))("products", productItems_r3);
  }
}
function AsmCustomer360SavedCartComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 4);
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("click", function AsmCustomer360SavedCartComponent_ng_template_2_ng_container_0_Template_button_click_1_listener() {
      const savedCart_r6 = ɵɵrestoreView(_r5).ngIf;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.sectionContext.navigate$.next({
        cxRoute: "savedCartsDetails",
        params: {
          savedCartId: savedCart_r6 == null ? null : savedCart_r6.code
        }
      }));
    });
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 5);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(7, "div", 6);
    ɵɵelementStart(8, "div", 7);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const savedCart_r6 = ctx.ngIf;
    ɵɵadvance();
    ɵɵattribute("aria-label", ɵɵpipeBind2(2, 4, "asmCustomer360.savedCart.aria.linkLabel", ɵɵpureFunction1(13, _c4, savedCart_r6.code)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", savedCart_r6.code, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(6, 7, "asmCustomer360.productListing.totalNoItems", ɵɵpureFunction1(15, _c6, savedCart_r6.totalItemCount)), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(10, 10, "asmCustomer360.productListing.totalPrice", ɵɵpureFunction1(17, _c5, savedCart_r6.totalPrice)), " ");
  }
}
function AsmCustomer360SavedCartComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AsmCustomer360SavedCartComponent_ng_template_2_ng_container_0_Template, 11, 19, "ng-container", 3);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r1.savedCart$));
  }
}
var _c12 = ["*"];
function AsmCustomer360PromotionListingComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9)(1, "h4", 10);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.headerText, " ");
  }
}
function AsmCustomer360PromotionListingComponent_cx_message_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-message", 11);
    ɵɵpipe(1, "cxTranslate");
    ɵɵlistener("closeMessage", function AsmCustomer360PromotionListingComponent_cx_message_3_Template_cx_message_closeMessage_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.removeAlert.emit());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("text", ɵɵpipeBind1(1, 2, "asmCustomer360.alertErrorMessage"))("type", ctx_r0.globalMessageType.MSG_TYPE_ERROR);
  }
}
function AsmCustomer360PromotionListingComponent_cx_message_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-message", 11);
    ɵɵpipe(1, "cxTranslate");
    ɵɵlistener("closeMessage", function AsmCustomer360PromotionListingComponent_cx_message_4_Template_cx_message_closeMessage_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.removeAlertForApplyAction.emit());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("text", ɵɵpipeBind1(1, 2, "asmCustomer360.applyActionAlter"))("type", ctx_r0.globalMessageType.MSG_TYPE_ERROR);
  }
}
function AsmCustomer360PromotionListingComponent_ng_container_16_ng_container_8_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function AsmCustomer360PromotionListingComponent_ng_container_16_ng_container_8_button_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const entry_r5 = ɵɵnextContext(2).$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.apply.emit(entry_r5));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.applyButtonText, " ");
  }
}
function AsmCustomer360PromotionListingComponent_ng_container_16_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AsmCustomer360PromotionListingComponent_ng_container_16_ng_container_8_button_1_Template, 2, 1, "button", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.showApplyButton);
  }
}
function AsmCustomer360PromotionListingComponent_ng_container_16_ng_container_9_ng_container_2_td_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 22);
    ɵɵtext(1, " | ");
    ɵɵelementEnd();
  }
}
function AsmCustomer360PromotionListingComponent_ng_container_16_ng_container_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td");
    ɵɵelement(2, "cx-icon", 19);
    ɵɵelementEnd();
    ɵɵelementStart(3, "td", 20);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵtemplate(5, AsmCustomer360PromotionListingComponent_ng_container_16_ng_container_9_ng_container_2_td_5_Template, 2, 0, "td", 21);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ctx_r0.applied, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.showRemoveButton);
  }
}
function AsmCustomer360PromotionListingComponent_ng_container_16_ng_container_9_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td")(1, "button", 23);
    ɵɵlistener("click", function AsmCustomer360PromotionListingComponent_ng_container_16_ng_container_9_td_3_Template_button_click_1_listener() {
      ɵɵrestoreView(_r6);
      const entry_r5 = ɵɵnextContext(2).$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.remove.emit(entry_r5));
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.removeButtonText, " ");
  }
}
function AsmCustomer360PromotionListingComponent_ng_container_16_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr", 18);
    ɵɵtemplate(2, AsmCustomer360PromotionListingComponent_ng_container_16_ng_container_9_ng_container_2_Template, 6, 2, "ng-container", 15)(3, AsmCustomer360PromotionListingComponent_ng_container_16_ng_container_9_td_3_Template, 3, 1, "td", 15);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.isCustomerCoupon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.showRemoveButton);
  }
}
function AsmCustomer360PromotionListingComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr", 12)(2, "td")(3, "tr", 13);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "tr", 14);
    ɵɵtext(6);
    ɵɵelementEnd()();
    ɵɵelementStart(7, "td");
    ɵɵtemplate(8, AsmCustomer360PromotionListingComponent_ng_container_16_ng_container_8_Template, 2, 1, "ng-container", 15)(9, AsmCustomer360PromotionListingComponent_ng_container_16_ng_container_9_Template, 4, 2, "ng-container", 15);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entry_r5 = ctx.$implicit;
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", entry_r5.code, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", entry_r5.name, " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !entry_r5.applied);
    ɵɵadvance();
    ɵɵproperty("ngIf", entry_r5.applied);
  }
}
function AsmCustomer360PromotionListingComponent_hr_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "hr", 24);
  }
}
function AsmCustomer360PromotionListingComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.emptyStateText, "\n");
  }
}
var AsmCustomer360Config = class _AsmCustomer360Config {
  static {
    this.ɵfac = function AsmCustomer360Config_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360Config)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmCustomer360Config,
      factory: function AsmCustomer360Config_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _AsmCustomer360Config)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360Config, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var AsmCustomer360SectionContext = class _AsmCustomer360SectionContext {
  static {
    this.ɵfac = function AsmCustomer360SectionContext_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360SectionContext)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmCustomer360SectionContext,
      factory: _AsmCustomer360SectionContext.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360SectionContext, [{
    type: Injectable
  }], null, null);
})();
var AsmCustomer360SectionContextSource = class _AsmCustomer360SectionContextSource extends AsmCustomer360SectionContext {
  constructor() {
    super(...arguments);
    this.customer$ = new ReplaySubject(1);
    this.config$ = new ReplaySubject(1);
    this.navigate$ = new Subject();
    this.data$ = new ReplaySubject(1);
    this.savedCarts$ = new ReplaySubject(1);
    this.activeCart$ = new ReplaySubject(1);
    this.orderHistory$ = new ReplaySubject(1);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵAsmCustomer360SectionContextSource_BaseFactory;
      return function AsmCustomer360SectionContextSource_Factory(__ngFactoryType__) {
        return (ɵAsmCustomer360SectionContextSource_BaseFactory || (ɵAsmCustomer360SectionContextSource_BaseFactory = ɵɵgetInheritedFactory(_AsmCustomer360SectionContextSource)))(__ngFactoryType__ || _AsmCustomer360SectionContextSource);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmCustomer360SectionContextSource,
      factory: _AsmCustomer360SectionContextSource.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360SectionContextSource, [{
    type: Injectable
  }], null, null);
})();
var AsmCustomer360SectionComponent = class _AsmCustomer360SectionComponent {
  set customer(customer) {
    this.source.customer$.next(customer);
  }
  set config(config) {
    this.source.config$.next(config);
  }
  set data(data) {
    this.source.data$.next(data);
  }
  constructor(source) {
    this.source = source;
    this.navigate = new EventEmitter();
    this.subscription = new Subscription();
    this.subscription.add(source.navigate$.subscribe((urlCommand) => this.navigate.emit(urlCommand)));
    this.subscription.add(() => {
      this.source.config$.complete();
      this.source.customer$.complete();
      this.source.data$.complete();
      this.source.navigate$.complete();
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function AsmCustomer360SectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360SectionComponent)(ɵɵdirectiveInject(AsmCustomer360SectionContextSource));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AsmCustomer360SectionComponent,
      selectors: [["cx-asm-customer-360-section"]],
      inputs: {
        component: "component",
        customer: "customer",
        config: "config",
        data: "data"
      },
      outputs: {
        navigate: "navigate"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([AsmCustomer360SectionContextSource, {
        provide: AsmCustomer360SectionContext,
        useExisting: AsmCustomer360SectionContextSource
      }])],
      decls: 1,
      vars: 1,
      consts: [[4, "ngComponentOutlet"]],
      template: function AsmCustomer360SectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AsmCustomer360SectionComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngComponentOutlet", ctx.component);
        }
      },
      dependencies: [NgComponentOutlet],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360SectionComponent, [{
    type: Component,
    args: [{
      selector: "cx-asm-customer-360-section",
      providers: [AsmCustomer360SectionContextSource, {
        provide: AsmCustomer360SectionContext,
        useExisting: AsmCustomer360SectionContextSource
      }],
      standalone: false,
      template: '<ng-container *ngComponentOutlet="component"></ng-container>\n'
    }]
  }], () => [{
    type: AsmCustomer360SectionContextSource
  }], {
    component: [{
      type: Input
    }],
    customer: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    navigate: [{
      type: Output
    }]
  });
})();
var AsmCustomer360Component = class _AsmCustomer360Component {
  constructor(asmCustomer360Config, asmCustomer360Facade, launchDialogService, csAgentAuthService, directionService) {
    this.asmCustomer360Config = asmCustomer360Config;
    this.asmCustomer360Facade = asmCustomer360Facade;
    this.launchDialogService = launchDialogService;
    this.csAgentAuthService = csAgentAuthService;
    this.directionService = directionService;
    this.role = "dialog";
    this.modal = true;
    this.labelledby = "asm-customer-360-title";
    this.describedby = "asm-customer-360-desc";
    this.cartIcon = ICON_TYPE.CART;
    this.closeIcon = ICON_TYPE.CLOSE;
    this.orderIcon = ICON_TYPE.ORDER;
    this.ticketIcon = ICON_TYPE.FILE;
    this.globalMessageType = GlobalMessageType;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: ".close",
      focusOnEscape: true
    };
    this.activeTab = 0;
    this.subscription = new Subscription();
    this.showErrorAlert$ = new BehaviorSubject(false);
    this.showErrorTab$ = new BehaviorSubject(false);
    this.errorAlert$ = this.showErrorAlert$.asObservable();
    this.errorTab$ = this.showErrorTab$.asObservable();
    this.customerOverview$ = this.asmCustomer360Facade.get360Data([{
      requestData: {
        type: AsmCustomer360Type.OVERVIEW
      }
    }]).pipe(map((response) => {
      const overviewItem = response?.value?.find((item) => item.type === AsmCustomer360Type.OVERVIEW);
      return overviewItem?.overview || void 0;
    }), catchError(() => {
      this.showErrorAlert$.next(true);
      return of(void 0);
    }));
    this.tabs = asmCustomer360Config?.asmCustomer360?.tabs ?? [];
    this.currentTab = this.tabs[0];
  }
  ngOnInit() {
    this.subscription.add(this.csAgentAuthService.isCustomerSupportAgentLoggedIn().pipe(distinctUntilChanged()).subscribe((loggedIn) => {
      if (!loggedIn) {
        this.launchDialogService.closeDialog("logout");
      }
    }));
    this.subscription.add(this.launchDialogService.data$.subscribe((data) => {
      this.customer = data.customer;
    }));
    this.setTabData();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  /**
   * Triggered when a tab is selected.
   * @param {number} selectedTab selected tab index
   */
  selectTab(selectedTab) {
    this.activeTab = selectedTab;
    this.currentTab = this.tabs[selectedTab];
    this.updateTabIndex(selectedTab);
    this.setTabData();
  }
  /**
   *  Update tab focus when key is pressed
   * @param {KeyboardEvent} event
   * @param {number} selectedIndex current tab index
   */
  switchTab(event, selectedIndex) {
    const maxTab = this.tabs.length - 1;
    let flag = true;
    if (this.isBackNavigation(event)) {
      selectedIndex--;
      if (selectedIndex < 0) {
        selectedIndex = maxTab;
      }
    } else if (this.isForwardsNavigation(event)) {
      selectedIndex++;
      if (selectedIndex > maxTab) {
        selectedIndex = 0;
      }
    } else if (event.code === KeyBoardEventCode.HOME) {
      selectedIndex = 0;
    } else if (event.code === KeyBoardEventCode.END) {
      selectedIndex = maxTab;
    } else {
      flag = false;
    }
    if (flag) {
      this.updateTabIndex(selectedIndex);
      event.stopPropagation();
      event.preventDefault();
    }
  }
  /**
   * If there is a link within the modal, use this method to redirect the user and close the modal.
   */
  navigateTo(route) {
    const event = getAsmDialogActionEvent(this.customer, AsmDialogActionType.NAVIGATE, route);
    this.closeModal(event);
  }
  closeErrorAlert() {
    this.showErrorAlert$.next(false);
  }
  closeModal(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  getAvatarText(customer) {
    customer = customer ?? {};
    const {
      firstName = "",
      lastName = ""
    } = customer;
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  }
  getAvatarImage(overview) {
    return overview?.userAvatar?.url ? {
      altText: overview.name,
      url: overview.userAvatar.url,
      format: overview.userAvatar.format
    } : void 0;
  }
  /**
   * Update tabIndex for each tab: select tab becomes 0 and other tabs will be -1
   * this is for prevent tabbing within tabs
   * @param {number} selectedIndex - selected tab index
   */
  updateTabIndex(selectedIndex) {
    this.tabHeaderItems.toArray().forEach((tabHeaderItem, index) => {
      if (index === selectedIndex) {
        tabHeaderItem.nativeElement.tabIndex = 0;
        tabHeaderItem.nativeElement.focus();
      } else {
        tabHeaderItem.nativeElement.tabIndex = -1;
      }
    });
  }
  setTabData() {
    this.showErrorTab$.next(false);
    const get360Data = this.asmCustomer360Facade.get360Data(this.currentTab.components).pipe(catchError(() => {
      this.showErrorTab$.next(true);
      this.showErrorAlert$.next(true);
      return of(void 0);
    }));
    this.asmCustomer360Tabs$ = get360Data.pipe(filter(isNotUndefined), map((response) => {
      return this.currentTab.components.map((component) => {
        const requestData = component.requestData;
        if (requestData) {
          return response.value.find((data) => data.type === requestData.type);
        } else {
          return void 0;
        }
      });
    }));
  }
  /**
   * Verifies whether the user navigates into a subgroup of the main group menu.
   *
   * @param {KeyboardEvent} event - Keyboard event
   * @returns {boolean} -'true' if the user navigates into the subgroup, otherwise 'false'.
   * @protected
   */
  isForwardsNavigation(event) {
    return event.code === "ArrowRight" && this.isLTRDirection() || event.code === "ArrowLeft" && this.isRTLDirection();
  }
  /**
   * Verifies whether the user navigates from a subgroup back to the main group menu.
   *
   * @param {KeyboardEvent} event - Keyboard event
   * @returns {boolean} -'true' if the user navigates back into the main group menu, otherwise 'false'.
   * @protected
   */
  isBackNavigation(event) {
    return event.code === KeyBoardEventCode.ARROW_LEFT && this.isLTRDirection() || event.code === KeyBoardEventCode.ARROW_RIGHT && this.isRTLDirection();
  }
  isLTRDirection() {
    return this.directionService.getDirection() === DirectionMode.LTR;
  }
  isRTLDirection() {
    return this.directionService.getDirection() === DirectionMode.RTL;
  }
  static {
    this.ɵfac = function AsmCustomer360Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360Component)(ɵɵdirectiveInject(AsmCustomer360Config), ɵɵdirectiveInject(AsmCustomer360Facade), ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(CsAgentAuthService), ɵɵdirectiveInject(DirectionService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AsmCustomer360Component,
      selectors: [["cx-asm-customer-360"]],
      viewQuery: function AsmCustomer360Component_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabHeaderItems = _t);
        }
      },
      hostVars: 4,
      hostBindings: function AsmCustomer360Component_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("role", ctx.role)("aria-modal", ctx.modal)("aria-labelledby", ctx.labelledby)("aria-describedby", ctx.describedby);
        }
      },
      standalone: false,
      decls: 25,
      vars: 22,
      consts: [["tabContent", ""], ["closeButton", ""], ["customerTextAvatar", ""], ["tabHeaderItem", ""], ["role", "dialog", "aria-labelledby", "asm-customer-360-title", 1, "cx-asm-customer-360", "cx-modal-container", "cx-asm-dialog", 3, "esc", "cxFocus"], [1, "cx-modal-content"], [1, "cx-dialog-header", "modal-header"], [1, "header-title"], ["id", "asm-customer-360-title", 1, "modal-title"], ["id", "asm-customer-360-desc", 1, "cx-visually-hidden"], [4, "ngTemplateOutlet"], [3, "text", "type", "closeMessage", 4, "ngIf"], ["class", "header-content", 4, "ngIf"], [1, "cx-dialog-body"], ["role", "tablist", 1, "cx-tab-headers"], ["class", "cx-tab-header", "role", "tab", "attr.aria-controls", "asm-customer-360-tab-panel", 3, "active", "click", "keydown", 4, "ngFor", "ngForOf"], ["id", "asm-customer-360-tab-panel", 1, "cx-tab-content", "modal-body"], [4, "ngIf", "ngIfElse"], [3, "closeMessage", "text", "type"], [1, "header-content"], [1, "header-profile-details"], [1, "header-profile-details-info"], [1, "cx-asm-customer-info", "ml-3"], [1, "cx-asm-customer-name"], [1, "cx-asm-customer-email"], ["class", "cx-asm-customer-address", 4, "ngIf"], ["class", "header-profile-details-log", 4, "ngIf"], [1, "header-account-details"], ["class", "header-account-details-active-cart", 4, "ngIf"], ["class", "header-account-details-recent-order", 4, "ngIf"], ["class", "header-account-details-recent-ticket", 4, "ngIf"], [1, "cx-avatar-image"], [3, "container"], [1, "cx-avatar"], [1, "cx-asm-customer-address"], [1, "header-profile-details-log"], [1, "header-account-details-active-cart"], [1, "account-icon", 3, "type"], [1, "cx-overview-title-link", "link", 3, "click"], [1, "header-account-details-recent-order"], [1, "header-account-details-recent-ticket"], ["role", "tab", "attr.aria-controls", "asm-customer-360-tab-panel", 1, "cx-tab-header", 3, "click", "keydown"], [1, "cx-tab-error"], [1, "cx-tab-error-image"], [1, "cx-tab-error-header"], [1, "cx-tab-error-message"], [4, "ngIf"], [3, "component", "config", "data", "navigate", 4, "ngFor", "ngForOf"], [3, "navigate", "component", "config", "data"], ["type", "button", 1, "close", 3, "click"], [3, "type"]],
      template: function AsmCustomer360Component_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 4);
          ɵɵlistener("esc", function AsmCustomer360Component_Template_div_esc_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.closeModal("Escape clicked"));
          });
          ɵɵelementStart(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "h3", 8);
          ɵɵtext(5);
          ɵɵpipe(6, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(7, "div", 9);
          ɵɵtext(8);
          ɵɵpipe(9, "cxTranslate");
          ɵɵelementEnd();
          ɵɵtemplate(10, AsmCustomer360Component_10_Template, 1, 0, null, 10);
          ɵɵelementEnd();
          ɵɵtemplate(11, AsmCustomer360Component_cx_message_11_Template, 2, 4, "cx-message", 11);
          ɵɵpipe(12, "async");
          ɵɵtemplate(13, AsmCustomer360Component_div_13_Template, 19, 17, "div", 12);
          ɵɵpipe(14, "async");
          ɵɵelementEnd();
          ɵɵelementStart(15, "div", 13)(16, "div", 14);
          ɵɵtemplate(17, AsmCustomer360Component_button_17_Template, 4, 6, "button", 15);
          ɵɵelementEnd();
          ɵɵelementStart(18, "div", 16);
          ɵɵtemplate(19, AsmCustomer360Component_ng_container_19_Template, 9, 6, "ng-container", 17);
          ɵɵpipe(20, "async");
          ɵɵtemplate(21, AsmCustomer360Component_ng_template_21_Template, 2, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementEnd()()()();
          ɵɵtemplate(23, AsmCustomer360Component_ng_template_23_Template, 4, 7, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const tabContent_r18 = ɵɵreference(22);
          const closeButton_r19 = ɵɵreference(24);
          ɵɵproperty("cxFocus", ctx.focusConfig);
          ɵɵadvance(5);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 9, "asmCustomer360.header.newTitle"), " ");
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind2(9, 11, "asmCustomer360.header.newSubtitle", ɵɵpureFunction1(20, _c1, ctx.customer.firstName)), " ");
          ɵɵadvance(2);
          ɵɵproperty("ngTemplateOutlet", closeButton_r19);
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(12, 14, ctx.errorAlert$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(14, 16, ctx.customerOverview$));
          ɵɵadvance(4);
          ɵɵproperty("ngForOf", ctx.tabs);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(20, 18, ctx.showErrorTab$))("ngIfElse", tabContent_r18);
        }
      },
      dependencies: [NgForOf, NgIf, NgTemplateOutlet, MediaComponent, IconComponent, FocusDirective, MessageComponent, AsmCustomer360SectionComponent, AsyncPipe, TranslatePipe, CxDatePipe, ArgsPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360Component, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "cx-asm-customer-360",
      standalone: false,
      template: `<div
  class="cx-asm-customer-360 cx-modal-container cx-asm-dialog"
  [cxFocus]="focusConfig"
  role="dialog"
  (esc)="closeModal('Escape clicked')"
  aria-labelledby="asm-customer-360-title"
>
  <!-- Modal Header -->
  <div class="cx-modal-content">
    <div class="cx-dialog-header modal-header">
      <div class="header-title">
        <h3 id="asm-customer-360-title" class="modal-title">
          {{ 'asmCustomer360.header.newTitle' | cxTranslate }}
        </h3>
        <div id="asm-customer-360-desc" class="cx-visually-hidden">
          {{
            'asmCustomer360.header.newSubtitle'
              | cxTranslate: { name: customer.firstName }
          }}
        </div>
        <ng-template *ngTemplateOutlet="closeButton"></ng-template>
      </div>
      <cx-message
        *ngIf="errorAlert$ | async"
        [text]="'asmCustomer360.alertErrorMessage' | cxTranslate"
        [type]="globalMessageType.MSG_TYPE_ERROR"
        (closeMessage)="closeErrorAlert()"
      >
      </cx-message>
      <div
        class="header-content"
        *ngIf="customerOverview$ | async as customerOverview"
      >
        <div class="header-profile-details">
          <div class="header-profile-details-info">
            <ng-container
              *ngIf="
                getAvatarImage | cxArgs: customerOverview as avatarImage;
                else customerTextAvatar
              "
            >
              <div class="cx-avatar-image">
                <cx-media [container]="avatarImage"></cx-media>
              </div>
            </ng-container>

            <ng-template #customerTextAvatar>
              <div class="cx-avatar">
                {{ getAvatarText | cxArgs: customer }}
              </div>
            </ng-template>
            <div class="cx-asm-customer-info ml-3">
              <div class="cx-asm-customer-name">
                {{
                  'asmCustomer360.header.newSubTitle'
                    | cxTranslate: { name: customerOverview?.name }
                }}
              </div>
              <div class="cx-asm-customer-email">
                {{ customerOverview?.email }}
              </div>
              <div
                class="cx-asm-customer-address"
                *ngIf="customerOverview?.address?.town"
              >
                {{ customerOverview.address.town }}
              </div>
            </div>
          </div>
          <div
            class="header-profile-details-log"
            *ngIf="customerOverview?.signedUpAt"
          >
            {{
              'asmCustomer360.header.signedUpAt'
                | cxTranslate
                  : {
                      date:
                        customerOverview.signedUpAt
                        | cxDate
                          : asmCustomer360Config?.asmCustomer360?.dateFormat,
                    }
            }}
          </div>
        </div>
        <div class="header-account-details">
          <span
            class="header-account-details-active-cart"
            *ngIf="customerOverview?.cartCode"
          >
            <cx-icon class="account-icon" [type]="cartIcon"></cx-icon>
            {{
              'asmCustomer360.header.activeCartLabel'
                | cxTranslate: { cartSize: customerOverview?.cartSize }
            }}
            <button
              [attr.aria-label]="
                'asmCustomer360.aria.activeCartCode'
                  | cxTranslate: { code: customerOverview.cartCode }
              "
              class="cx-overview-title-link link"
              (click)="navigateTo({ cxRoute: 'cart' })"
            >
              {{ customerOverview.cartCode }}
            </button>
          </span>
          <span
            class="header-account-details-recent-order"
            *ngIf="customerOverview?.latestOrderCode"
          >
            <cx-icon class="account-icon" [type]="orderIcon"></cx-icon>
            {{
              'asmCustomer360.header.recentOrderLabel'
                | cxTranslate: { price: customerOverview?.latestOrderTotal }
            }}
            <button
              [attr.aria-label]="
                'asmCustomer360.aria.recentOrderCode'
                  | cxTranslate: { code: customerOverview.latestOrderCode }
              "
              class="cx-overview-title-link link"
              (click)="
                navigateTo({
                  cxRoute: 'orderDetails',
                  params: { code: customerOverview.latestOrderCode },
                })
              "
            >
              {{ customerOverview.latestOrderCode }}</button
            >,
            {{
              customerOverview?.latestOrderTime
                | cxDate: asmCustomer360Config?.asmCustomer360?.dateFormat
            }}
          </span>
          <span
            class="header-account-details-recent-ticket"
            *ngIf="customerOverview?.latestOpenedTicketId"
          >
            <cx-icon class="account-icon" [type]="ticketIcon"></cx-icon>
            {{ 'asmCustomer360.header.recentTicketLabel' | cxTranslate }}
            <button
              [attr.aria-label]="
                'asmCustomer360.aria.recentOrderCode'
                  | cxTranslate: { code: customerOverview.latestOpenedTicketId }
              "
              class="cx-overview-title-link link"
              (click)="
                navigateTo({
                  cxRoute: 'supportTicketDetails',
                  params: { ticketCode: customerOverview.latestOpenedTicketId },
                })
              "
            >
              {{ customerOverview.latestOpenedTicketId }}</button
            >,
            {{
              customerOverview?.latestOpenedTicketCreatedAt
                | cxDate: asmCustomer360Config?.asmCustomer360?.dateFormat
            }}
          </span>
        </div>
      </div>
    </div>

    <!-- Modal Body -->
    <div class="cx-dialog-body">
      <div class="cx-tab-headers" role="tablist">
        <button
          #tabHeaderItem
          *ngFor="let tabHeader of tabs; let i = index"
          class="cx-tab-header"
          role="tab"
          [attr.aria-selected]="activeTab === i"
          attr.aria-controls="asm-customer-360-tab-panel"
          (click)="selectTab(i)"
          [class.active]="activeTab === i"
          (keydown)="switchTab($event, i)"
        >
          {{ tabHeader.i18nNameKey | cxTranslate }}
        </button>
      </div>
      <div id="asm-customer-360-tab-panel" class="cx-tab-content modal-body">
        <ng-container *ngIf="showErrorTab$ | async; else tabContent">
          <div class="cx-tab-error">
            <div class="cx-tab-error-image"></div>
            <div class="cx-tab-error-header">
              {{ 'asmCustomer360.errorMessageHeader' | cxTranslate }}
            </div>
            <div class="cx-tab-error-message">
              {{ 'asmCustomer360.alertErrorMessage' | cxTranslate }}
            </div>
          </div>
        </ng-container>
        <ng-template #tabContent>
          <ng-container
            *ngIf="asmCustomer360Tabs$ | async as asmCustomer360Tabs"
          >
            <cx-asm-customer-360-section
              *ngFor="let config of currentTab?.components; let i = index"
              [component]="config.component"
              [config]="config.config"
              [data]="asmCustomer360Tabs?.[i]"
              (navigate)="navigateTo($event)"
            ></cx-asm-customer-360-section>
          </ng-container>
        </ng-template>
      </div>
    </div>
  </div>
</div>

<ng-template #closeButton>
  <button
    type="button"
    class="close"
    attr.aria-label="{{ 'common.close' | cxTranslate }}"
    attr.title="{{ 'common.close' | cxTranslate }}"
    (click)="closeModal('Cross click')"
  >
    <cx-icon [type]="closeIcon"></cx-icon>
  </button>
</ng-template>
`
    }]
  }], () => [{
    type: AsmCustomer360Config
  }, {
    type: AsmCustomer360Facade
  }, {
    type: LaunchDialogService
  }, {
    type: CsAgentAuthService
  }, {
    type: DirectionService
  }], {
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    modal: [{
      type: HostBinding,
      args: ["attr.aria-modal"]
    }],
    labelledby: [{
      type: HostBinding,
      args: ["attr.aria-labelledby"]
    }],
    describedby: [{
      type: HostBinding,
      args: ["attr.aria-describedby"]
    }],
    tabHeaderItems: [{
      type: ViewChildren,
      args: ["tabHeaderItem"]
    }]
  });
})();
var AsmCustomer360ProductItemComponent = class _AsmCustomer360ProductItemComponent {
  constructor() {
    this.isOrderEntry = true;
    this.selectProduct = new EventEmitter();
  }
  static {
    this.ɵfac = function AsmCustomer360ProductItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360ProductItemComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AsmCustomer360ProductItemComponent,
      selectors: [["cx-asm-customer-360-product-item"]],
      inputs: {
        product: "product",
        quantity: "quantity",
        isOrderEntry: "isOrderEntry"
      },
      outputs: {
        selectProduct: "selectProduct"
      },
      standalone: false,
      decls: 9,
      vars: 8,
      consts: [["notOrderEntryTemplate", ""], [1, "cx-asm-customer-360-product-item-media", "link", 3, "click"], ["format", "product", 3, "container", "alt"], [1, "cx-asm-customer-360-product-item-content"], [1, "cx-asm-customer-360-product-item-name", "link", 3, "click"], [3, "title"], [4, "ngIf", "ngIfElse"], [1, "cx-asm-customer-360-product-item-code"], ["class", "cx-asm-customer-360-product-item-quantity", 4, "ngIf"], [1, "cx-asm-customer-360-product-item-price"], [1, "cx-asm-customer-360-product-item-quantity"], ["class", "cx-asm-customer-360-product-item-out-of-stock", 4, "ngIf"], [1, "cx-asm-customer-360-product-item-out-of-stock"]],
      template: function AsmCustomer360ProductItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "button", 1);
          ɵɵlistener("click", function AsmCustomer360ProductItemComponent_Template_button_click_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.selectProduct.emit(ctx.product));
          });
          ɵɵelement(1, "cx-media", 2);
          ɵɵelementEnd();
          ɵɵelementStart(2, "div", 3)(3, "button", 4);
          ɵɵlistener("click", function AsmCustomer360ProductItemComponent_Template_button_click_3_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.selectProduct.emit(ctx.product));
          });
          ɵɵelementStart(4, "span", 5);
          ɵɵtext(5);
          ɵɵelementEnd()();
          ɵɵtemplate(6, AsmCustomer360ProductItemComponent_ng_container_6_Template, 7, 8, "ng-container", 6)(7, AsmCustomer360ProductItemComponent_ng_template_7_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_3_0;
          const notOrderEntryTemplate_r3 = ɵɵreference(8);
          ɵɵattribute("aria-label", ctx.product == null ? null : ctx.product.name);
          ɵɵadvance();
          ɵɵproperty("container", ctx.product == null ? null : ctx.product.images == null ? null : ctx.product.images.PRIMARY)("alt", (tmp_3_0 = ctx.product == null ? null : ctx.product.name) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "");
          ɵɵadvance(2);
          ɵɵattribute("aria-label", ctx.product == null ? null : ctx.product.name);
          ɵɵadvance();
          ɵɵpropertyInterpolate("title", ctx.product == null ? null : ctx.product.name);
          ɵɵadvance();
          ɵɵtextInterpolate(ctx.product == null ? null : ctx.product.name);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.isOrderEntry)("ngIfElse", notOrderEntryTemplate_r3);
        }
      },
      dependencies: [NgIf, MediaComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360ProductItemComponent, [{
    type: Component,
    args: [{
      selector: "cx-asm-customer-360-product-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<button
  class="cx-asm-customer-360-product-item-media link"
  [attr.aria-label]="product?.name"
  (click)="selectProduct.emit(product)"
>
  <cx-media
    [container]="product?.images?.PRIMARY"
    format="product"
    [alt]="product?.name ?? ''"
  ></cx-media>
</button>
<div class="cx-asm-customer-360-product-item-content">
  <button
    [attr.aria-label]="product?.name"
    (click)="selectProduct.emit(product)"
    class="cx-asm-customer-360-product-item-name link"
  >
    <span title="{{ product?.name }}">{{ product?.name }}</span>
  </button>
  <ng-container *ngIf="isOrderEntry; else notOrderEntryTemplate">
    <div class="cx-asm-customer-360-product-item-code">
      {{ product?.code }}
    </div>
    <div class="cx-asm-customer-360-product-item-quantity" *ngIf="quantity">
      {{
        'asmCustomer360.productItem.quantity' | cxTranslate: { count: quantity }
      }}
    </div>
    <div class="cx-asm-customer-360-product-item-price">
      {{
        'asmCustomer360.productItem.itemPrice'
          | cxTranslate
            : { price: product?.basePrice ?? product?.price?.formattedValue }
      }}
    </div>
  </ng-container>
  <ng-template #notOrderEntryTemplate>
    <div
      class="cx-asm-customer-360-product-item-out-of-stock"
      *ngIf="product.stock?.stockLevelStatus === 'outOfStock'"
    >
      {{ 'asmCustomer360.productItem.outOfStock' | cxTranslate }}
    </div>
  </ng-template>
</div>
`
    }]
  }], null, {
    product: [{
      type: Input
    }],
    quantity: [{
      type: Input
    }],
    isOrderEntry: [{
      type: Input
    }],
    selectProduct: [{
      type: Output
    }]
  });
})();
var AsmCustomer360ProductItemModule = class _AsmCustomer360ProductItemModule {
  static {
    this.ɵfac = function AsmCustomer360ProductItemModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360ProductItemModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCustomer360ProductItemModule,
      declarations: [AsmCustomer360ProductItemComponent],
      imports: [CommonModule, MediaModule, I18nModule],
      exports: [AsmCustomer360ProductItemComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, MediaModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360ProductItemModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, MediaModule, I18nModule],
      declarations: [AsmCustomer360ProductItemComponent],
      exports: [AsmCustomer360ProductItemComponent]
    }]
  }], null, null);
})();
var AsmCustomer360ProductListingComponent = class _AsmCustomer360ProductListingComponent {
  constructor(breakpointService) {
    this.breakpointService = breakpointService;
    this.clickHeader = new EventEmitter();
    this.selectProduct = new EventEmitter();
  }
  ngOnInit() {
    this.numberofColumns$ = this.getNumberofColumns();
  }
  toggleShowMore() {
    this.showMore = !this.showMore;
  }
  getNumberofColumns() {
    return this.breakpointService.breakpoint$.pipe(map((breakpoint) => {
      switch (breakpoint) {
        case BREAKPOINT.xl:
          return 3;
        case BREAKPOINT.lg:
          return 2;
        default:
          return 1;
      }
    }));
  }
  static {
    this.ɵfac = function AsmCustomer360ProductListingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360ProductListingComponent)(ɵɵdirectiveInject(BreakpointService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AsmCustomer360ProductListingComponent,
      selectors: [["cx-asm-customer-360-product-listing"]],
      inputs: {
        emptyResultDescription: "emptyResultDescription",
        headerInactive: "headerInactive",
        headerText: "headerText",
        products: "products",
        headerTemplate: "headerTemplate"
      },
      outputs: {
        clickHeader: "clickHeader",
        selectProduct: "selectProduct"
      },
      standalone: false,
      decls: 3,
      vars: 2,
      consts: [["emptyResultTemplate", ""], ["showLess", ""], ["class", "product-listing", 4, "ngIf", "ngIfElse"], [1, "product-listing"], ["role", "heading", "aria-level", "4", 1, "product-listing-header"], [1, "title-link", "link", 3, "click", "disabled"], [4, "ngIf"], [4, "ngTemplateOutlet"], [1, "product-listing-items", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "product", "quantity", "selectProduct", 4, "ngIf"], [3, "selectProduct", "product", "quantity"], [1, "link", "cx-action-link", "show-hide-button", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "empty-result-description"]],
      template: function AsmCustomer360ProductListingComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AsmCustomer360ProductListingComponent_div_0_Template, 7, 10, "div", 2)(1, AsmCustomer360ProductListingComponent_ng_template_1_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const emptyResultTemplate_r9 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.products == null ? null : ctx.products.length)("ngIfElse", emptyResultTemplate_r9);
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, AsmCustomer360ProductItemComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360ProductListingComponent, [{
    type: Component,
    args: [{
      selector: "cx-asm-customer-360-product-listing",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="product-listing" *ngIf="products?.length; else emptyResultTemplate">
  <div
    class="product-listing-header"
    role="heading"
    aria-level="4"
    [attr.aria-label]="headerText"
  >
    <button
      [attr.aria-label]="headerText"
      [disabled]="headerInactive"
      [class.inactive]="headerInactive"
      class="title-link link"
      (click)="clickHeader.emit()"
    >
      {{ headerText }}
    </button>
    <ng-container *ngIf="headerTemplate">
      <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
    </ng-container>
  </div>
  <ng-container *ngIf="numberofColumns$ | async as numberofColumns">
    <div
      class="product-listing-items"
      [ngClass]="'column-' + numberofColumns"
      [class.show-more]="showMore"
    >
      <ng-container *ngFor="let product of products; let i = index">
        <cx-asm-customer-360-product-item
          *ngIf="showMore || i < numberofColumns"
          [product]="product"
          [quantity]="product?.quantity"
          (selectProduct)="selectProduct.emit($event)"
        ></cx-asm-customer-360-product-item>
      </ng-container>
    </div>
    <ng-container *ngIf="products.length > numberofColumns">
      <button
        class="link cx-action-link show-hide-button"
        (click)="toggleShowMore()"
      >
        <span *ngIf="!showMore; else showLess">{{
          'asmCustomer360.productListing.showMore' | cxTranslate
        }}</span>
        <ng-template #showLess>
          <span *ngIf="showMore">{{
            'asmCustomer360.productListing.showLess' | cxTranslate
          }}</span>
        </ng-template>
      </button>
    </ng-container>
  </ng-container>
</div>

<ng-template #emptyResultTemplate>
  <div class="empty-result-description">
    {{ emptyResultDescription }}
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: BreakpointService
  }], {
    emptyResultDescription: [{
      type: Input
    }],
    headerInactive: [{
      type: Input
    }],
    headerText: [{
      type: Input
    }],
    products: [{
      type: Input
    }],
    headerTemplate: [{
      type: Input
    }],
    clickHeader: [{
      type: Output
    }],
    selectProduct: [{
      type: Output
    }]
  });
})();
var AsmCustomer360ProductListingModule = class _AsmCustomer360ProductListingModule {
  static {
    this.ɵfac = function AsmCustomer360ProductListingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360ProductListingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCustomer360ProductListingModule,
      declarations: [AsmCustomer360ProductListingComponent],
      imports: [CommonModule, I18nModule, MediaModule, AsmCustomer360ProductItemModule],
      exports: [AsmCustomer360ProductListingComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, MediaModule, AsmCustomer360ProductItemModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360ProductListingModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, MediaModule, AsmCustomer360ProductItemModule],
      declarations: [AsmCustomer360ProductListingComponent],
      exports: [AsmCustomer360ProductListingComponent]
    }]
  }], null, null);
})();
var AsmCustomer360ActiveCartComponent = class _AsmCustomer360ActiveCartComponent {
  constructor(sectionContext, productService) {
    this.sectionContext = sectionContext;
    this.productService = productService;
    this.activeCart$ = this.sectionContext.data$.pipe(map((activeCart) => {
      return activeCart.cart;
    }));
    this.productItems$ = this.activeCart$.pipe(concatMap((cart) => {
      if (!cart?.entries?.length) {
        return of([]);
      } else {
        return forkJoin(cart.entries.map((entry) => {
          return this.productService.get(entry.productCode, ProductScope.DETAILS).pipe(filter((product) => Boolean(product)), map((product) => {
            return __spreadProps(__spreadValues({}, product), {
              quantity: entry.quantity,
              basePrice: entry.basePrice,
              totalPrice: entry.totalPrice
            });
          }), take(1));
        }));
      }
    }));
  }
  static {
    this.ɵfac = function AsmCustomer360ActiveCartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360ActiveCartComponent)(ɵɵdirectiveInject(AsmCustomer360SectionContext), ɵɵdirectiveInject(ProductService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AsmCustomer360ActiveCartComponent,
      selectors: [["cx-asm-customer-360-active-cart"]],
      standalone: false,
      decls: 4,
      vars: 3,
      consts: [["headerTemplate", ""], [3, "emptyResultDescription", "headerInactive", "headerTemplate", "headerText", "products", "selectProduct", 4, "ngIf"], [3, "selectProduct", "emptyResultDescription", "headerInactive", "headerTemplate", "headerText", "products"], [4, "ngIf"], [1, "cx-overview-title-link", "link", 3, "click"], [1, "cart-total-no-items"], [1, "cart-divider"], [1, "cart-total-price"]],
      template: function AsmCustomer360ActiveCartComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AsmCustomer360ActiveCartComponent_cx_asm_customer_360_product_listing_0_Template, 3, 9, "cx-asm-customer-360-product-listing", 1);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, AsmCustomer360ActiveCartComponent_ng_template_2_Template, 2, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.productItems$));
        }
      },
      dependencies: [NgIf, AsmCustomer360ProductListingComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360ActiveCartComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "cx-asm-customer-360-active-cart",
      standalone: false,
      template: `<cx-asm-customer-360-product-listing
  *ngIf="productItems$ | async as productItems"
  [emptyResultDescription]="
    'asmCustomer360.activeCart.emptyDescription' | cxTranslate
  "
  [headerInactive]="true"
  [headerTemplate]="headerTemplate"
  [headerText]="'asmCustomer360.activeCart.header' | cxTranslate"
  [products]="productItems"
  (selectProduct)="
    sectionContext.navigate$.next({ cxRoute: 'product', params: $event })
  "
>
</cx-asm-customer-360-product-listing>

<ng-template #headerTemplate>
  <ng-container *ngIf="activeCart$ | async as activeCart">
    <button
      [attr.aria-label]="
        'asmCustomer360.activeCart.aria.linkLabel'
          | cxTranslate: { code: activeCart.code }
      "
      class="cx-overview-title-link link"
      (click)="sectionContext.navigate$.next({ cxRoute: 'cart' })"
    >
      {{ activeCart.code }}
    </button>
    <div class="cart-total-no-items">
      {{
        'asmCustomer360.productListing.totalNoItems'
          | cxTranslate: { count: activeCart.totalItemCount }
      }}
    </div>
    <div class="cart-divider"></div>
    <div class="cart-total-price">
      {{
        'asmCustomer360.productListing.totalPrice'
          | cxTranslate: { price: activeCart.totalPrice }
      }}
    </div>
  </ng-container>
</ng-template>
`
    }]
  }], () => [{
    type: AsmCustomer360SectionContext
  }, {
    type: ProductService
  }], null);
})();
var AsmCustomer360ActiveCartModule = class _AsmCustomer360ActiveCartModule {
  static {
    this.ɵfac = function AsmCustomer360ActiveCartModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360ActiveCartModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCustomer360ActiveCartModule,
      declarations: [AsmCustomer360ActiveCartComponent],
      imports: [CommonModule, I18nModule, AsmCustomer360ProductListingModule],
      exports: [AsmCustomer360ActiveCartComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, AsmCustomer360ProductListingModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360ActiveCartModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, AsmCustomer360ProductListingModule],
      declarations: [AsmCustomer360ActiveCartComponent],
      exports: [AsmCustomer360ActiveCartComponent]
    }]
  }], null, null);
})();
var CustomerTableTextAlign;
(function(CustomerTableTextAlign2) {
  CustomerTableTextAlign2["START"] = "START";
  CustomerTableTextAlign2["CENTER"] = "CENTER";
  CustomerTableTextAlign2["END"] = "END";
})(CustomerTableTextAlign || (CustomerTableTextAlign = {}));
var AsmCustomer360TableComponent = class _AsmCustomer360TableComponent {
  constructor(asmCustomer360Config, directionService) {
    this.asmCustomer360Config = asmCustomer360Config;
    this.directionService = directionService;
    this.selectItem = new EventEmitter();
    this.SortOrder = SortOrder;
    this.CustomerTableTextAlign = CustomerTableTextAlign;
    this.currentPageNumber = 0;
    this.currentPage$ = new BehaviorSubject(void 0);
    this.listSortOrder = SortOrder.DESC;
    this.focusedTableColumnIndex = 0;
    this.focusedTableRowIndex = 0;
    this.setFocusOnStartTableItem = false;
  }
  ngOnChanges(changes) {
    if (changes?.entries) {
      const entries = this.sortEntries(this.entries, this.sortProperty, this.listSortOrder);
      this.entryPages = this.updateEntryPages(entries);
      this.setPageNumber(this.currentPageNumber);
    }
  }
  ngAfterViewChecked() {
    if (this.setFocusOnStartTableItem) {
      this.setSelectedTabIndex(0, 1);
      this.setFocusOnStartTableItem = false;
    }
  }
  sortEntriesAndUpdatePages(sortProperty) {
    const currentProperty = this.sortProperty;
    let newSortOrder;
    if (sortProperty !== currentProperty) {
      newSortOrder = SortOrder.ASC;
    } else {
      newSortOrder = this.listSortOrder === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC;
    }
    this.sortProperty = sortProperty;
    this.listSortOrder = newSortOrder;
    this.entries = this.sortEntries(this.entries, this.sortProperty, this.listSortOrder);
    this.entryPages = this.updateEntryPages(this.entries);
    this.setPageNumber(this.currentPageNumber);
  }
  setPageNumber(pageNumber, selectFirstRecord = false) {
    this.currentPageNumber = pageNumber;
    this.currentPage$.next(this.entryPages[this.currentPageNumber]);
    if (selectFirstRecord) {
      this.setFocusOnStartTableItem = true;
    }
  }
  /**
   * returns sort direction
   * @param columnProperty column property
   * @param sortProperty current sort property
   * @param listSortOrder current sort order
   */
  sortDirection(columnProperty, sortProperty, listSortOrder) {
    if (columnProperty === sortProperty) {
      return listSortOrder === SortOrder.ASC ? "ascending" : "descending";
    } else {
      return "none";
    }
  }
  /**
   * returns tabIndex value
   * @param focusedTableColumnIndex saved column index
   * @param focusedTableRowIndex saved row index
   * @param columnIndex selected column index
   */
  tabIndexValue(focusedTableColumnIndex, focusedTableRowIndex, columnIndex) {
    return focusedTableColumnIndex === columnIndex && focusedTableRowIndex === 0 ? 0 : -1;
  }
  /**
   * Update cell's focus When keyboard key is pressed:
   * handles arrowUp, arrowDown, arrowRight, arrowLeft, Home, End, Home+Ctrl, End+Ctrl
   * PageDown, PageUp
   * @param event KeyboardEvent
   * @param columnIndex selected column index of table
   * @param rowIndex selected row index of table
   */
  onKeyDownCell(event, columnIndex, rowIndex) {
    let knownKeyPressed = true;
    switch (event.code) {
      case KeyBoardEventCode.ARROW_LEFT:
      case KeyBoardEventCode.ARROW_RIGHT:
        this.moveFocusLeftRight(event, columnIndex, rowIndex);
        break;
      case KeyBoardEventCode.ARROW_DOWN:
        this.moveFocusDown(columnIndex, rowIndex);
        break;
      case KeyBoardEventCode.ARROW_UP:
        this.moveFocusUp(columnIndex, rowIndex);
        break;
      case KeyBoardEventCode.HOME:
        this.moveFocusHome(event, rowIndex);
        break;
      case KeyBoardEventCode.END:
        this.moveFocusEnd(event, rowIndex);
        break;
      case KeyBoardEventCode.PAGE_DOWN:
        this.handlePageDown();
        break;
      case KeyBoardEventCode.PAGE_UP:
        this.handlePageUp();
        break;
      default:
        knownKeyPressed = false;
    }
    if (knownKeyPressed) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
  /**
   * Update selected cell's tabIndex (change tabIndex to 0).
   * if cell contains link(button) then update link
   * @param columnIndex selected column index of table
   * @param rowIndex selected row index of table
   */
  setSelectedTabIndex(columnIndex, rowIndex) {
    const maxColumn = this.columns.length - 1;
    const maxRow = this.table.nativeElement.rows.length - 1;
    if (columnIndex > maxColumn || rowIndex > maxRow) {
      return;
    }
    this.removeCellTabIndex(this.focusedTableColumnIndex, this.focusedTableRowIndex);
    this.focusedTableColumnIndex = columnIndex;
    this.focusedTableRowIndex = rowIndex;
    const tableCell = this.table.nativeElement.rows[rowIndex].cells[columnIndex];
    const childElement = tableCell.firstChild;
    const elementToFocus = childElement.tagName === "BUTTON" ? childElement : tableCell;
    elementToFocus.tabIndex = 0;
    elementToFocus.focus();
  }
  handlePageUp() {
    if (this.entryPages.length > 1 && this.currentPageNumber > 0) {
      const pageNumber = Math.max(0, this.currentPageNumber - 1);
      this.setPageNumber(pageNumber, true);
    }
  }
  handlePageDown() {
    const maxPage = this.entryPages.length - 1;
    if (this.entryPages.length > 1 && this.currentPageNumber < maxPage) {
      const pageNumber = Math.min(maxPage, this.currentPageNumber + 1);
      this.setPageNumber(pageNumber, true);
    }
  }
  moveFocusEnd(event, rowIndex) {
    const maxRow = this.table.nativeElement.rows.length - 1;
    rowIndex = event.ctrlKey ? maxRow : rowIndex;
    this.setSelectedTabIndex(this.columns.length - 1, rowIndex);
  }
  moveFocusHome(event, rowIndex) {
    rowIndex = event.ctrlKey ? 0 : rowIndex;
    this.setSelectedTabIndex(0, rowIndex);
  }
  moveFocusUp(columnIndex, rowIndex) {
    rowIndex = Math.max(0, rowIndex - 1);
    this.setSelectedTabIndex(columnIndex, rowIndex);
  }
  moveFocusDown(columnIndex, rowIndex) {
    const maxRow = this.table.nativeElement.rows.length - 1;
    rowIndex = Math.min(maxRow, rowIndex + 1);
    this.setSelectedTabIndex(columnIndex, rowIndex);
  }
  moveFocusLeftRight(event, columnIndex, rowIndex) {
    const maxColumn = this.columns.length - 1;
    if (this.isBackNavigation(event)) {
      columnIndex = Math.max(0, columnIndex - 1);
    } else {
      columnIndex = Math.min(maxColumn, columnIndex + 1);
    }
    this.setSelectedTabIndex(columnIndex, rowIndex);
  }
  /**
   * Removes tabindex and CSS focus class from a cell in the table.
   * @param columnIndex The index of the column containing the cell.
   * @param rowIndex The index of the row containing the cell.
   */
  removeCellTabIndex(columnIndex, rowIndex) {
    const tableCell = this.table.nativeElement.rows?.[rowIndex]?.cells?.[columnIndex];
    const childElement = tableCell?.firstChild;
    if (childElement) {
      if (childElement.tagName === "BUTTON") {
        childElement.tabIndex = -1;
      } else {
        if (tableCell) {
          tableCell.tabIndex = -1;
        }
      }
    }
  }
  /**
   * Verifies whether the user navigates from a subgroup back to the main group menu.
   * @param {KeyboardEvent} event - Keyboard event
   * @returns {boolean} -'true' if the user navigates back into the main group menu, otherwise 'false'.
   * @protected
   */
  isBackNavigation(event) {
    return event.code === KeyBoardEventCode.ARROW_LEFT && this.isLTRDirection() || event.code === KeyBoardEventCode.ARROW_RIGHT && this.isRTLDirection();
  }
  isLTRDirection() {
    return this.directionService.getDirection() === DirectionMode.LTR;
  }
  isRTLDirection() {
    return this.directionService.getDirection() === DirectionMode.RTL;
  }
  updateEntryPages(entries) {
    const newEntryPages = [];
    for (let i = 0; i < entries.length; i += this.pageSize) {
      newEntryPages.push(entries.slice(i, i + this.pageSize));
    }
    return newEntryPages;
  }
  sortEntries(entries, sortByProperty, sortOrder) {
    if (entries?.length) {
      return entries.sort(itemsWith(property(sortByProperty, itemsWith(byNullish(SortOrder.DESC), whenType(isString, byString(sortOrder)), whenType(isNumber, byComparison(sortOrder)), whenType(isBoolean, byBoolean(sortOrder))))));
    } else {
      return [];
    }
  }
  static {
    this.ɵfac = function AsmCustomer360TableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360TableComponent)(ɵɵdirectiveInject(AsmCustomer360Config), ɵɵdirectiveInject(DirectionService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AsmCustomer360TableComponent,
      selectors: [["cx-asm-customer-360-table"]],
      viewQuery: function AsmCustomer360TableComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c7, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.table = _t.first);
        }
      },
      inputs: {
        columns: "columns",
        emptyStateText: "emptyStateText",
        entries: "entries",
        headerText: "headerText",
        pageSize: "pageSize",
        sortProperty: "sortProperty"
      },
      outputs: {
        selectItem: "selectItem"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature],
      decls: 4,
      vars: 3,
      consts: [["table", ""], ["linkTemplate", ""], ["starRating", ""], ["dateCell", ""], ["tableCell", ""], ["class", "cx-asm-customer-360-table-heading", 4, "ngIf"], ["aria-hidden", "true", 1, "cx-asm-customer-360-table-separator"], [4, "ngIf"], ["class", "cx-asm-customer-360-table-empty", 4, "ngIf"], [1, "cx-asm-customer-360-table-heading"], [1, "cx-asm-customer-360-table-heading-text"], ["class", "cx-asm-customer-360-table-heading-pages", 4, "ngIf"], [1, "cx-asm-customer-360-table-heading-pages"], [4, "ngFor", "ngForOf"], ["class", "cx-asm-customer-360-table-heading-page link", 3, "active", "disabled", "click", 4, "ngIf"], [1, "cx-asm-customer-360-table-heading-page", "link", 3, "click", "disabled"], ["role", "grid", 1, "cx-asm-customer-360-table"], [1, "cx-visually-hidden"], ["role", "row", 1, "cx-asm-customer-360-table-row-header"], ["class", "cx-asm-customer-360-table-header", "role", "columnheader", 3, "active", "asc", "desc", "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "cx-asm-customer-360-table-row", "role", "row", 4, "ngFor", "ngForOf"], ["role", "columnheader", 1, "cx-asm-customer-360-table-header", 3, "click", "ngClass"], [1, "link", 3, "click", "keydown", "tabindex"], ["role", "row", 1, "cx-asm-customer-360-table-row"], ["role", "cell", "tabindex", "-1", 3, "ngClass", "keydown", "click", 4, "ngFor", "ngForOf"], ["role", "cell", "tabindex", "-1", 3, "keydown", "click", "ngClass"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["tabindex", "-1", 1, "cx-asm-customer-360-table-link", "link", 3, "click", "title"], ["tabindex", "-1", 3, "rating", 4, "ngIf", "ngIfElse"], ["tabindex", "-1", 3, "rating"], [4, "ngIf", "ngIfElse"], [3, "title"], [1, "cx-asm-customer-360-table-empty"]],
      template: function AsmCustomer360TableComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AsmCustomer360TableComponent_div_0_Template, 4, 2, "div", 5);
          ɵɵelement(1, "hr", 6);
          ɵɵtemplate(2, AsmCustomer360TableComponent_ng_container_2_Template, 11, 8, "ng-container", 7)(3, AsmCustomer360TableComponent_div_3_Template, 2, 1, "div", 8);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.headerText);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", (ctx.entryPages == null ? null : ctx.entryPages.length) && (ctx.columns == null ? null : ctx.columns.length));
          ɵɵadvance();
          ɵɵproperty("ngIf", !(ctx.entryPages == null ? null : ctx.entryPages.length));
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, StarRatingComponent, AsyncPipe, TranslatePipe, CxDatePipe, ArgsPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360TableComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "cx-asm-customer-360-table",
      standalone: false,
      template: `<div class="cx-asm-customer-360-table-heading" *ngIf="headerText">
  <h4 class="cx-asm-customer-360-table-heading-text">
    {{ headerText }}
  </h4>
  <div
    [attr.aria-label]="'asmCustomer360.pagination' | cxTranslate"
    class="cx-asm-customer-360-table-heading-pages"
    *ngIf="entryPages"
  >
    <ng-container *ngFor="let page of entryPages; let pageNumber = index">
      <button
        *ngIf="entryPages.length > 1"
        (click)="setPageNumber(pageNumber, true)"
        class="cx-asm-customer-360-table-heading-page link"
        [class.active]="currentPageNumber === pageNumber"
        [attr.aria-current]="currentPageNumber === pageNumber ? 'page' : null"
        [disabled]="currentPageNumber === pageNumber"
        [attr.aria-label]="
          'asmCustomer360.page' | cxTranslate: { number: pageNumber + 1 }
        "
      >
        {{ pageNumber + 1 }}
      </button>
    </ng-container>
  </div>
</div>
<hr class="cx-asm-customer-360-table-separator" aria-hidden="true" />
<ng-container *ngIf="entryPages?.length && columns?.length">
  <table
    #table
    class="cx-asm-customer-360-table"
    role="grid"
    [attr.aria-rowcount]="entries.length"
    [attr.aria-colcount]="columns.length"
    [attr.data-per-page]="pageSize"
  >
    <caption class="cx-visually-hidden">
      {{
        headerText
      }}
    </caption>
    <thead>
      <tr class="cx-asm-customer-360-table-row-header" role="row">
        <th
          class="cx-asm-customer-360-table-header"
          role="columnheader"
          *ngFor="let column of columns; let columnIndex = index"
          [class.active]="sortProperty === column.property"
          [class.asc]="listSortOrder === SortOrder.ASC"
          [class.desc]="listSortOrder !== SortOrder.ASC"
          [attr.aria-sort]="
            sortDirection
              | cxArgs: column.property : sortProperty : listSortOrder
          "
          [ngClass]="{
            'text-start':
              column.headerTextAlign === CustomerTableTextAlign.START,
            'text-center':
              column.headerTextAlign === CustomerTableTextAlign.CENTER,
            'text-end': column.headerTextAlign === CustomerTableTextAlign.END,
          }"
          (click)="setSelectedTabIndex(columnIndex, 0)"
        >
          <button
            [tabindex]="
              tabIndexValue
                | cxArgs
                  : focusedTableColumnIndex
                  : focusedTableRowIndex
                  : columnIndex
            "
            class="link"
            (click)="sortEntriesAndUpdatePages(column.property)"
            (keydown)="onKeyDownCell($event, columnIndex, 0)"
          >
            <span *ngIf="column?.i18nTextKey">{{
              column.i18nTextKey | cxTranslate
            }}</span>
            <span *ngIf="!column?.i18nTextKey">{{ column.text }}</span>
          </button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="cx-asm-customer-360-table-row"
        role="row"
        *ngFor="let entry of currentPage$ | async; let rowIndex = index"
      >
        <td
          role="cell"
          tabindex="-1"
          *ngFor="let column of columns; let columnIndex = index"
          (keydown)="onKeyDownCell($event, columnIndex, rowIndex + 1)"
          (click)="setSelectedTabIndex(columnIndex, rowIndex + 1)"
          [ngClass]="{
            'text-start': column.textAlign === CustomerTableTextAlign.START,
            'text-center': column.textAlign === CustomerTableTextAlign.CENTER,
            'text-end': column.textAlign === CustomerTableTextAlign.END,
          }"
        >
          <ng-container
            *ngIf="column.navigatable; then linkTemplate; else starRating"
          ></ng-container>

          <ng-template #linkTemplate>
            <button
              tabindex="-1"
              [attr.aria-label]="entry[column.property]"
              (click)="selectItem.emit(entry)"
              class="cx-asm-customer-360-table-link link"
              [title]="
                entry[column.property] ||
                ('asmCustomer360.emptyCellValue' | cxTranslate)
              "
            >
              {{
                entry[column.property] ||
                  ('asmCustomer360.emptyCellValue' | cxTranslate)
              }}
            </button>
          </ng-template>

          <ng-template #starRating>
            <cx-star-rating
              tabindex="-1"
              *ngIf="column.renderAsStarRating; else dateCell"
              [rating]="entry[column.property]"
            ></cx-star-rating>
          </ng-template>

          <ng-template #dateCell>
            <ng-container
              *ngIf="column?.isDate && entry[column.property]; else tableCell"
              ><span>{{
                entry[column.property]
                  | cxDate: asmCustomer360Config?.asmCustomer360?.dateTimeFormat
              }}</span></ng-container
            >
          </ng-template>

          <ng-template #tableCell>
            <ng-container
              ><span
                [title]="
                  entry[column.property] ||
                  ('asmCustomer360.emptyCellValue' | cxTranslate)
                "
                >{{
                  entry[column.property] ||
                    ('asmCustomer360.emptyCellValue' | cxTranslate)
                }}</span
              ></ng-container
            >
          </ng-template>
        </td>
      </tr>
    </tbody>
  </table>
</ng-container>
<div class="cx-asm-customer-360-table-empty" *ngIf="!entryPages?.length">
  {{ emptyStateText }}
</div>
`
    }]
  }], () => [{
    type: AsmCustomer360Config
  }, {
    type: DirectionService
  }], {
    table: [{
      type: ViewChild,
      args: ["table"]
    }],
    columns: [{
      type: Input
    }],
    emptyStateText: [{
      type: Input
    }],
    entries: [{
      type: Input
    }],
    headerText: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    sortProperty: [{
      type: Input
    }],
    selectItem: [{
      type: Output
    }]
  });
})();
var AsmCustomer360TableModule = class _AsmCustomer360TableModule {
  static {
    this.ɵfac = function AsmCustomer360TableModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360TableModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCustomer360TableModule,
      declarations: [AsmCustomer360TableComponent],
      imports: [CommonModule, I18nModule, ArgsModule, StarRatingModule],
      exports: [AsmCustomer360TableComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, ArgsModule, StarRatingModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360TableModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, ArgsModule, StarRatingModule],
      declarations: [AsmCustomer360TableComponent],
      exports: [AsmCustomer360TableComponent]
    }]
  }], null, null);
})();
var TypeCodes;
(function(TypeCodes2) {
  TypeCodes2["SavedCart"] = "SAVED CART";
  TypeCodes2["Cart"] = "CART";
  TypeCodes2["Ticket"] = "TICKET";
  TypeCodes2["Order"] = "ORDER";
})(TypeCodes || (TypeCodes = {}));
var AsmCustomer360ActivityComponent = class _AsmCustomer360ActivityComponent {
  constructor(context) {
    this.context = context;
    this.columns = [{
      property: "typeLabel",
      i18nTextKey: "asmCustomer360.activity.type",
      headerTextAlign: CustomerTableTextAlign.START
    }, {
      property: "associatedTypeId",
      text: "id",
      i18nTextKey: "asmCustomer360.activity.id",
      headerTextAlign: CustomerTableTextAlign.START,
      textAlign: CustomerTableTextAlign.START,
      navigatable: true
    }, {
      property: "description",
      text: "description",
      i18nTextKey: "asmCustomer360.activity.description",
      headerTextAlign: CustomerTableTextAlign.START
    }, {
      property: "statusLabel",
      text: "status",
      i18nTextKey: "asmCustomer360.activity.status",
      headerTextAlign: CustomerTableTextAlign.START
    }, {
      property: "createdAt",
      text: "created",
      i18nTextKey: "asmCustomer360.activity.created",
      isDate: true
    }, {
      property: "updatedAt",
      text: "updated",
      i18nTextKey: "asmCustomer360.activity.updated",
      isDate: true
    }];
  }
  ngOnInit() {
    let entries = [];
    this.entries$ = combineLatest([this.context.data$]).pipe(map(([data]) => {
      entries = [];
      data.activities.forEach((activity) => {
        entries.push(__spreadProps(__spreadValues({}, activity), {
          typeLabel: activity.type?.name,
          statusLabel: activity.status?.name
        }));
      });
      return entries;
    }));
  }
  itemSelected(entry) {
    if (entry) {
      let urlCommand;
      if (entry.type?.code === TypeCodes.SavedCart) {
        urlCommand = {
          cxRoute: "savedCartsDetails",
          params: {
            savedCartId: entry?.associatedTypeId
          }
        };
      } else if (entry.type?.code === TypeCodes.Cart) {
        urlCommand = {
          cxRoute: "cart"
        };
      } else if (entry.type?.code === TypeCodes.Order) {
        urlCommand = {
          cxRoute: "orderDetails",
          params: {
            code: entry?.associatedTypeId
          }
        };
      } else if (entry.type?.code === TypeCodes.Ticket) {
        urlCommand = {
          cxRoute: "supportTicketDetails",
          params: {
            ticketCode: entry?.associatedTypeId
          }
        };
      }
      if (urlCommand) {
        this.context.navigate$.next(urlCommand);
      }
    }
  }
  static {
    this.ɵfac = function AsmCustomer360ActivityComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360ActivityComponent)(ɵɵdirectiveInject(AsmCustomer360SectionContext));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AsmCustomer360ActivityComponent,
      selectors: [["cx-asm-customer-360-activity"]],
      standalone: false,
      decls: 5,
      vars: 13,
      consts: [["sortProperty", "createdAt", 3, "selectItem", "emptyStateText", "headerText", "columns", "entries", "pageSize"]],
      template: function AsmCustomer360ActivityComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-asm-customer-360-table", 0);
          ɵɵpipe(1, "cxTranslate");
          ɵɵpipe(2, "cxTranslate");
          ɵɵpipe(3, "async");
          ɵɵpipe(4, "async");
          ɵɵlistener("selectItem", function AsmCustomer360ActivityComponent_Template_cx_asm_customer_360_table_selectItem_0_listener($event) {
            return ctx.itemSelected($event);
          });
          ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_4_0;
          ɵɵproperty("emptyStateText", ɵɵpipeBind1(1, 5, "asmCustomer360.activity.emptyStateText"))("headerText", ɵɵpipeBind1(2, 7, "asmCustomer360.activity.headerText"))("columns", ctx.columns)("entries", ɵɵpipeBind1(3, 9, ctx.entries$))("pageSize", (tmp_4_0 = ɵɵpipeBind1(4, 11, ctx.context.config$)) == null ? null : tmp_4_0.pageSize);
        }
      },
      dependencies: [AsmCustomer360TableComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360ActivityComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "cx-asm-customer-360-activity",
      standalone: false,
      template: `<cx-asm-customer-360-table
  [emptyStateText]="'asmCustomer360.activity.emptyStateText' | cxTranslate"
  [headerText]="'asmCustomer360.activity.headerText' | cxTranslate"
  sortProperty="createdAt"
  [columns]="columns"
  [entries]="entries$ | async"
  [pageSize]="(context.config$ | async)?.pageSize"
  (selectItem)="itemSelected($event)"
></cx-asm-customer-360-table>
`
    }]
  }], () => [{
    type: AsmCustomer360SectionContext
  }], null);
})();
var AsmCustomer360ActivityModule = class _AsmCustomer360ActivityModule {
  static {
    this.ɵfac = function AsmCustomer360ActivityModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360ActivityModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCustomer360ActivityModule,
      declarations: [AsmCustomer360ActivityComponent],
      imports: [CommonModule, AsmCustomer360TableModule, I18nModule],
      exports: [AsmCustomer360ActivityComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, AsmCustomer360TableModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360ActivityModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AsmCustomer360TableModule, I18nModule],
      declarations: [AsmCustomer360ActivityComponent],
      exports: [AsmCustomer360ActivityComponent]
    }]
  }], null, null);
})();
var AsmCustomer360MapComponent = class _AsmCustomer360MapComponent {
  constructor(source, changeDetectorRef, storeFinderService, translationService, storeFinderConfig) {
    this.source = source;
    this.changeDetectorRef = changeDetectorRef;
    this.storeFinderService = storeFinderService;
    this.translationService = translationService;
    this.storeFinderConfig = storeFinderConfig;
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.dataSource$ = combineLatest([this.source.config$, this.source.data$]);
    this.subscription.add(this.dataSource$.pipe(concatMap(([config, data]) => {
      this.storeFinderService.findStoresAction(data.address, {
        pageSize: config.pageSize
      }, void 0, void 0, void 0, this.storeFinderConfig.googleMaps?.radius);
      return this.storeFinderService.getFindStoresEntities();
    }), concatMap((storeSearchData) => {
      if (storeSearchData) {
        this.storeData = storeSearchData;
        this.selectedStore = this.storeData.stores?.[0];
      }
      return of(void 0);
    })).subscribe(() => this.changeDetectorRef.detectChanges()));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  selectStore(store) {
    this.selectedStore = store;
  }
  getStoreOpening(opening) {
    const {
      closed,
      openingTime,
      closingTime
    } = opening;
    if (closed) {
      return this.translationService.translate("asmCustomer360.maps.storeClosed");
    } else if (openingTime) {
      let storeOpening = `${openingTime.formattedHour}`;
      if (closingTime) {
        storeOpening = `${storeOpening} - ${closingTime.formattedHour}`;
      }
      return of(storeOpening);
    } else {
      return of("");
    }
  }
  static {
    this.ɵfac = function AsmCustomer360MapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360MapComponent)(ɵɵdirectiveInject(AsmCustomer360SectionContext), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(StoreFinderService), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(StoreFinderConfig));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AsmCustomer360MapComponent,
      selectors: [["cx-asm-customer-360-map"]],
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "store-count"], ["class", "store-listing-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "store-listing-item", 3, "click"], [1, "store-listing-item-details"], [1, "store-listing-item-text"], [1, "store-listing-item-distance", "store-listing-item-text"], [1, "store-details"], ["width", "110px", "height", "110px", 3, "src", "alt", "title", 4, "ngIf"], [1, "store-details-info"], [1, "bold"], ["class", "store-openings", 4, "ngIf"], ["width", "110px", "height", "110px", 3, "src", "alt", "title"], [1, "store-openings"], ["class", "store-openings-dates", 4, "ngIf"], [1, "store-openings-features"], [4, "ngFor", "ngForOf"], [1, "store-openings-dates"], ["class", "store-openings-date", 4, "ngFor", "ngForOf"], [1, "store-openings-date"], [1, "store-openings-day", "bold"]],
      template: function AsmCustomer360MapComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AsmCustomer360MapComponent_ng_container_0_Template, 7, 9, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.storeData);
        }
      },
      dependencies: [NgForOf, NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360MapComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "cx-asm-customer-360-map",
      standalone: false,
      template: `<ng-container *ngIf="storeData">
  <div class="store-count">
    {{
      'asmCustomer360.maps.storesFound'
        | cxTranslate
          : {
              initial: 1,
              end: storeData.pagination?.pageSize,
              total: storeData.pagination?.totalResults,
            }
    }}
  </div>

  <div>
    <button
      class="store-listing-item"
      [class.selected]="selectedStore === store"
      *ngFor="let store of storeData.stores"
      [attr.aria-label]="store.displayName"
      (click)="selectStore(store)"
    >
      <div class="store-listing-item-details">
        <div class="store-listing-item-text">{{ store.displayName }}</div>
        <div class="store-listing-item-text">
          {{ store.address?.line1 }}, {{ store.address?.line2 }}
        </div>
        <div class="store-listing-item-text">{{ store.address?.town }}</div>
      </div>
      <div class="store-listing-item-distance store-listing-item-text">
        {{ store.formattedDistance }}
      </div>
    </button>
  </div>

  <div *ngIf="selectedStore">
    <div class="store-details">
      <img
        *ngIf="selectedStore.storeImages?.[0]"
        [src]="selectedStore.storeImages?.[0]?.url"
        alt="{{ selectedStore.displayName }}"
        title="{{ selectedStore.displayName }}"
        width="110px"
        height="110px"
      />
      <div class="store-details-info">
        <div class="bold">{{ selectedStore.displayName }}</div>
        <div>{{ selectedStore.address?.line1 }}</div>
        <div>{{ selectedStore.address?.line2 }}</div>
        <div>{{ selectedStore.address?.town }}</div>
      </div>
    </div>
    <div
      class="store-openings"
      *ngIf="selectedStore?.openingHours as openingHours"
    >
      <div
        class="store-openings-dates"
        *ngIf="openingHours.weekDayOpeningList as weekDayOpeningList"
      >
        <div
          class="store-openings-date"
          *ngFor="let opening of weekDayOpeningList"
        >
          <span class="store-openings-day bold">{{ opening.weekDay }}</span
          >{{ getStoreOpening(opening) | async }}
        </div>
      </div>
      <div
        class="store-openings-dates"
        *ngIf="openingHours.specialDayOpeningList as specialDayOpeningList"
      >
        <div
          class="store-openings-date"
          *ngFor="let opening of specialDayOpeningList"
        >
          <span class="store-openings-day bold">{{ opening.name }}</span
          >{{ getStoreOpening(opening) | async }}
        </div>
      </div>
      <div class="store-openings-features">
        <div *ngFor="let feature of selectedStore.features?.entry">
          {{ feature.value }}
        </div>
      </div>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: AsmCustomer360SectionContext
  }, {
    type: ChangeDetectorRef
  }, {
    type: StoreFinderService
  }, {
    type: TranslationService
  }, {
    type: StoreFinderConfig
  }], null);
})();
var AsmCustomer360MapComponentModule = class _AsmCustomer360MapComponentModule {
  static {
    this.ɵfac = function AsmCustomer360MapComponentModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360MapComponentModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCustomer360MapComponentModule,
      declarations: [AsmCustomer360MapComponent],
      imports: [CommonModule, I18nModule],
      exports: [AsmCustomer360MapComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360MapComponentModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule],
      declarations: [AsmCustomer360MapComponent],
      exports: [AsmCustomer360MapComponent]
    }]
  }], null, null);
})();
var AsmCustomer360ProductInterestsComponent = class _AsmCustomer360ProductInterestsComponent {
  constructor(sectionContext, productService) {
    this.sectionContext = sectionContext;
    this.productService = productService;
    this.products$ = this.sectionContext.data$.pipe(concatMap((interestList) => {
      if (!interestList?.customerProductInterests?.length) {
        return of([]);
      } else {
        return forkJoin(interestList.customerProductInterests.map((interest) => {
          return this.productService.get(interest.product.code, ProductScope.DETAILS).pipe(filter((product) => Boolean(product)), take(1));
        }));
      }
    }));
  }
  static {
    this.ɵfac = function AsmCustomer360ProductInterestsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360ProductInterestsComponent)(ɵɵdirectiveInject(AsmCustomer360SectionContext), ɵɵdirectiveInject(ProductService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AsmCustomer360ProductInterestsComponent,
      selectors: [["cx-asm-customer-360-product-interests"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[3, "emptyResultDescription", "headerText", "products", "clickHeader", "selectProduct", 4, "ngIf"], [3, "clickHeader", "selectProduct", "emptyResultDescription", "headerText", "products"]],
      template: function AsmCustomer360ProductInterestsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AsmCustomer360ProductInterestsComponent_cx_asm_customer_360_product_listing_0_Template, 3, 7, "cx-asm-customer-360-product-listing", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.products$));
        }
      },
      dependencies: [NgIf, AsmCustomer360ProductListingComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360ProductInterestsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "cx-asm-customer-360-product-interests",
      standalone: false,
      template: `<cx-asm-customer-360-product-listing
  *ngIf="products$ | async as products"
  [emptyResultDescription]="
    'asmCustomer360.productInterests.emptyDescription' | cxTranslate
  "
  [headerText]="'asmCustomer360.productInterests.header' | cxTranslate"
  [products]="products"
  (clickHeader)="sectionContext.navigate$.next({ cxRoute: 'myInterests' })"
  (selectProduct)="
    sectionContext.navigate$.next({ cxRoute: 'product', params: $event })
  "
>
</cx-asm-customer-360-product-listing>
`
    }]
  }], () => [{
    type: AsmCustomer360SectionContext
  }, {
    type: ProductService
  }], null);
})();
var AsmCustomer360ProductInterestsModule = class _AsmCustomer360ProductInterestsModule {
  static {
    this.ɵfac = function AsmCustomer360ProductInterestsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360ProductInterestsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCustomer360ProductInterestsModule,
      declarations: [AsmCustomer360ProductInterestsComponent],
      imports: [CommonModule, I18nModule, AsmCustomer360ProductListingModule],
      exports: [AsmCustomer360ProductInterestsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, AsmCustomer360ProductListingModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360ProductInterestsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, AsmCustomer360ProductListingModule],
      declarations: [AsmCustomer360ProductInterestsComponent],
      exports: [AsmCustomer360ProductInterestsComponent]
    }]
  }], null, null);
})();
var AsmCustomer360ProductReviewsComponent = class _AsmCustomer360ProductReviewsComponent {
  constructor(asmCustomer360Config, context, datePipe, translation) {
    this.asmCustomer360Config = asmCustomer360Config;
    this.context = context;
    this.datePipe = datePipe;
    this.translation = translation;
    this.reviewColumns = [{
      property: "item",
      i18nTextKey: "asmCustomer360.productReviews.columnHeaders.item",
      navigatable: true,
      headerTextAlign: CustomerTableTextAlign.START,
      textAlign: CustomerTableTextAlign.START
    }, {
      property: "dateAndStatus",
      i18nTextKey: "asmCustomer360.productReviews.columnHeaders.dateAndStatus",
      headerTextAlign: CustomerTableTextAlign.START
    }, {
      property: "rating",
      i18nTextKey: "asmCustomer360.productReviews.columnHeaders.rating",
      renderAsStarRating: true
    }, {
      property: "reviewText",
      i18nTextKey: "asmCustomer360.productReviews.columnHeaders.review",
      headerTextAlign: CustomerTableTextAlign.START
    }];
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.reviewEntries$ = combineLatest([this.context.data$, this.translation.translate("asmCustomer360.productReviews.sku")]).pipe(map(([data, skuLabel]) => {
      return data.reviews.map((entry) => __spreadProps(__spreadValues({}, entry), {
        item: `${entry.productName}, ${skuLabel}: ${entry.productCode}`,
        dateAndStatus: `${this.getLongDate(new Date(entry.createdAt))} / ${entry.localizedReviewStatus}`
      }));
    }));
  }
  navigateTo(entry) {
    const params = {
      name: entry.productName,
      code: entry.productCode
    };
    this.context.navigate$.next({
      cxRoute: "product",
      params
    });
  }
  getLongDate(date) {
    return date ? this.datePipe.transform(date, this.asmCustomer360Config?.asmCustomer360?.dateTimeFormat) ?? "" : "";
  }
  static {
    this.ɵfac = function AsmCustomer360ProductReviewsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360ProductReviewsComponent)(ɵɵdirectiveInject(AsmCustomer360Config), ɵɵdirectiveInject(AsmCustomer360SectionContext), ɵɵdirectiveInject(CxDatePipe), ɵɵdirectiveInject(TranslationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AsmCustomer360ProductReviewsComponent,
      selectors: [["cx-asm-customer-360-product-reviews"]],
      standalone: false,
      features: [ɵɵProvidersFeature([CxDatePipe])],
      decls: 5,
      vars: 13,
      consts: [["sortProperty", "dateAndStatus", 3, "selectItem", "emptyStateText", "headerText", "columns", "entries", "pageSize"]],
      template: function AsmCustomer360ProductReviewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-asm-customer-360-table", 0);
          ɵɵpipe(1, "cxTranslate");
          ɵɵpipe(2, "cxTranslate");
          ɵɵpipe(3, "async");
          ɵɵpipe(4, "async");
          ɵɵlistener("selectItem", function AsmCustomer360ProductReviewsComponent_Template_cx_asm_customer_360_table_selectItem_0_listener($event) {
            return ctx.navigateTo($event);
          });
          ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_4_0;
          ɵɵproperty("emptyStateText", ɵɵpipeBind1(1, 5, "asmCustomer360.productReviews.emptyDescription"))("headerText", ɵɵpipeBind1(2, 7, "asmCustomer360.productReviews.header"))("columns", ctx.reviewColumns)("entries", ɵɵpipeBind1(3, 9, ctx.reviewEntries$))("pageSize", (tmp_4_0 = ɵɵpipeBind1(4, 11, ctx.context.config$)) == null ? null : tmp_4_0.pageSize);
        }
      },
      dependencies: [AsmCustomer360TableComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360ProductReviewsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "cx-asm-customer-360-product-reviews",
      providers: [CxDatePipe],
      standalone: false,
      template: `<cx-asm-customer-360-table
  [emptyStateText]="
    'asmCustomer360.productReviews.emptyDescription' | cxTranslate
  "
  [headerText]="'asmCustomer360.productReviews.header' | cxTranslate"
  sortProperty="dateAndStatus"
  [columns]="reviewColumns"
  [entries]="reviewEntries$ | async"
  [pageSize]="(context.config$ | async)?.pageSize"
  (selectItem)="navigateTo($event)"
></cx-asm-customer-360-table>
`
    }]
  }], () => [{
    type: AsmCustomer360Config
  }, {
    type: AsmCustomer360SectionContext
  }, {
    type: CxDatePipe
  }, {
    type: TranslationService
  }], null);
})();
var AsmCustomer360ProductReviewsComponentModule = class _AsmCustomer360ProductReviewsComponentModule {
  static {
    this.ɵfac = function AsmCustomer360ProductReviewsComponentModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360ProductReviewsComponentModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCustomer360ProductReviewsComponentModule,
      declarations: [AsmCustomer360ProductReviewsComponent],
      imports: [CommonModule, AsmCustomer360TableModule, I18nModule],
      exports: [AsmCustomer360ProductReviewsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, AsmCustomer360TableModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360ProductReviewsComponentModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AsmCustomer360TableModule, I18nModule],
      declarations: [AsmCustomer360ProductReviewsComponent],
      exports: [AsmCustomer360ProductReviewsComponent]
    }]
  }], null, null);
})();
var AsmCustomer360ProfileComponent = class _AsmCustomer360ProfileComponent {
  constructor(sectionContext, translation) {
    this.sectionContext = sectionContext;
    this.translation = translation;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "customer-list-selector",
      focusOnEscape: true
    };
    this.iconTypes = ICON_TYPE;
  }
  ngOnInit() {
    this.customerProfileData$ = this.sectionContext.data$.pipe(map((data) => {
      return data?.profile;
    }));
  }
  getCardContent({
    defaultPayment,
    expiryMonth,
    expiryYear,
    cardNumber,
    cardType
  }) {
    return combineLatest([this.translation.translate("paymentCard.expires", {
      month: expiryMonth,
      year: expiryYear
    }), this.translation.translate("paymentCard.defaultPaymentMethod")]).pipe(map(([textExpires, textDefaultPaymentMethod]) => {
      const card = {
        role: "region",
        header: defaultPayment ? textDefaultPaymentMethod : void 0,
        text: [cardNumber ?? "", textExpires],
        img: this.getCardIcon(cardType?.code ?? ""),
        label: defaultPayment ? "paymentCard.defaultPaymentLabel" : "paymentCard.additionalPaymentLabel"
      };
      return card;
    }));
  }
  getCardIcon(code) {
    let ccIcon;
    if (code === PaymentCardCode.VISA) {
      ccIcon = this.iconTypes.VISA;
    } else if (code === PaymentCardCode.MASTER || code === PaymentCardCode.MASTERCARD_EUROCARD) {
      ccIcon = this.iconTypes.MASTER_CARD;
    } else if (code === PaymentCardCode.DINERS) {
      ccIcon = this.iconTypes.DINERS_CLUB;
    } else if (code === PaymentCardCode.AMEX) {
      ccIcon = this.iconTypes.AMEX;
    } else {
      ccIcon = this.iconTypes.CREDIT_CARD;
    }
    return ccIcon;
  }
  static {
    this.ɵfac = function AsmCustomer360ProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360ProfileComponent)(ɵɵdirectiveInject(AsmCustomer360SectionContext), ɵɵdirectiveInject(TranslationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AsmCustomer360ProfileComponent,
      selectors: [["cx-asm-customer-360-profile"]],
      standalone: false,
      decls: 5,
      vars: 3,
      consts: [["address", ""], [1, "cx-asm-customer-360-profile"], [4, "ngIf"], [1, "row"], [1, "col"], [1, "mt-4", "mb-3"], [1, "cx-asm-profile-subheader"], [1, "cx-asm-profile-container", "billing-address"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cx-asm-profile-container", "delivery-address"], [1, "w-100", "d-lg-none"], [1, "cx-asm-profile-container", "profile-phone1"], [1, "cx-asm-profile-container", "profile-phone2"], [1, "mt-4", "mb-4"], [1, "cx-asm-profile-cards"], ["class", "cx-asm-profile-card", 4, "ngFor", "ngForOf"], [1, "cx-asm-profile-card"], [3, "index", "border", "fitToContainer", "content"], [1, "cx-asm-profile-address-cell"], [1, "address-line1"], [1, "address-line2"], ["class", "address-town", 4, "ngIf"], ["class", "address-region", 4, "ngIf"], [1, "address-country"], [1, "address-town"], [1, "address-region"]],
      template: function AsmCustomer360ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1);
          ɵɵtemplate(1, AsmCustomer360ProfileComponent_ng_container_1_Template, 38, 29, "ng-container", 2);
          ɵɵpipe(2, "async");
          ɵɵtemplate(3, AsmCustomer360ProfileComponent_ng_template_3_Template, 10, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx.customerProfileData$));
        }
      },
      dependencies: [CardComponent, NgForOf, NgIf, NgTemplateOutlet, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360ProfileComponent, [{
    type: Component,
    args: [{
      selector: "cx-asm-customer-360-profile",
      standalone: false,
      template: `<div class="cx-asm-customer-360-profile">
  <ng-container *ngIf="customerProfileData$ | async as customerProfileData">
    <div>
      <div class="row">
        <div class="col">
          <h4 class="mt-4 mb-3">
            {{ 'asmCustomer360.profile.address' | cxTranslate }}
          </h4>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h5 class="cx-asm-profile-subheader">
            {{ 'asmCustomer360.profile.billingAddress' | cxTranslate }}
          </h5>
          <div class="cx-asm-profile-container billing-address">
            <ng-container
              *ngTemplateOutlet="
                address;
                context: { address: customerProfileData?.billingAddress }
              "
            ></ng-container>
          </div>
        </div>
        <div class="col">
          <h5 class="cx-asm-profile-subheader">
            {{ 'asmCustomer360.profile.deliveryAddress' | cxTranslate }}
          </h5>
          <div class="cx-asm-profile-container delivery-address">
            <ng-container
              *ngTemplateOutlet="
                address;
                context: { address: customerProfileData?.deliveryAddress }
              "
            ></ng-container>
          </div>
        </div>
        <div class="w-100 d-lg-none"></div>
        <div class="col">
          <h5 class="cx-asm-profile-subheader">
            {{ 'asmCustomer360.profile.phone1' | cxTranslate }}
          </h5>
          <div class="cx-asm-profile-container profile-phone1">
            {{ customerProfileData?.phone1 }}
          </div>
        </div>
        <div class="col">
          <h5 class="cx-asm-profile-subheader">
            {{ 'asmCustomer360.profile.phone2' | cxTranslate }}
          </h5>
          <div class="cx-asm-profile-container profile-phone2">
            {{ customerProfileData?.phone2 }}
          </div>
        </div>
      </div>
    </div>
    <h4 class="mt-4 mb-4">
      {{ 'asmCustomer360.profile.paymentMethodHeader' | cxTranslate }}
    </h4>
    <div class="cx-asm-profile-cards">
      <div
        class="cx-asm-profile-card"
        *ngFor="
          let paymentInfoList of customerProfileData.paymentDetails;
          let i = index
        "
      >
        <cx-card
          [index]="i"
          [border]="true"
          [fitToContainer]="true"
          [content]="getCardContent(paymentInfoList) | async"
        ></cx-card>
      </div>
    </div>
  </ng-container>
  <ng-template #address let-address="address">
    <div class="cx-asm-profile-address-cell">
      <div class="address-line1">
        {{ address?.line1 }}
      </div>
      <div class="address-line2">
        {{ address?.line2 }}
      </div>
      <div>
        <span class="address-town" *ngIf="address?.town"
          >{{ address.town }},
        </span>
        <span class="address-region" *ngIf="address?.region?.name"
          >{{ address.region.name }},
        </span>
        <span class="address-country">{{ address?.country?.name }}</span>
      </div>
    </div>
  </ng-template>
</div>
`
    }]
  }], () => [{
    type: AsmCustomer360SectionContext
  }, {
    type: TranslationService
  }], null);
})();
var AsmCustomer360ProfileModule = class _AsmCustomer360ProfileModule {
  static {
    this.ɵfac = function AsmCustomer360ProfileModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360ProfileModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCustomer360ProfileModule,
      declarations: [AsmCustomer360ProfileComponent],
      imports: [CardModule, CommonModule, I18nModule],
      exports: [AsmCustomer360ProfileComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CardModule, CommonModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360ProfileModule, [{
    type: NgModule,
    args: [{
      imports: [CardModule, CommonModule, I18nModule],
      declarations: [AsmCustomer360ProfileComponent],
      exports: [AsmCustomer360ProfileComponent]
    }]
  }], null, null);
})();
var AsmCustomer360SavedCartComponent = class _AsmCustomer360SavedCartComponent {
  constructor(sectionContext, productService) {
    this.sectionContext = sectionContext;
    this.productService = productService;
    this.savedCart$ = this.sectionContext.data$.pipe(map((cart) => {
      return cart.savedCart;
    }));
    this.productItems$ = this.savedCart$.pipe(concatMap((cart) => {
      if (!cart?.entries?.length) {
        return of([]);
      } else {
        return forkJoin(cart.entries.map((entry) => {
          return this.productService.get(entry.productCode, ProductScope.DETAILS).pipe(filter((product) => Boolean(product)), map((product) => {
            return __spreadProps(__spreadValues({}, product), {
              quantity: entry.quantity,
              basePrice: entry.basePrice,
              totalPrice: entry.totalPrice
            });
          }), take(1));
        }));
      }
    }));
  }
  static {
    this.ɵfac = function AsmCustomer360SavedCartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360SavedCartComponent)(ɵɵdirectiveInject(AsmCustomer360SectionContext), ɵɵdirectiveInject(ProductService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AsmCustomer360SavedCartComponent,
      selectors: [["cx-asm-customer-360-saved-cart"]],
      standalone: false,
      decls: 4,
      vars: 3,
      consts: [["headerTemplate", ""], [3, "emptyResultDescription", "headerInactive", "headerTemplate", "headerText", "products", "selectProduct", 4, "ngIf"], [3, "selectProduct", "emptyResultDescription", "headerInactive", "headerTemplate", "headerText", "products"], [4, "ngIf"], [1, "cx-overview-title-link", "link", 3, "click"], [1, "cart-total-no-items"], [1, "cart-divider"], [1, "cart-total-price"]],
      template: function AsmCustomer360SavedCartComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AsmCustomer360SavedCartComponent_cx_asm_customer_360_product_listing_0_Template, 3, 9, "cx-asm-customer-360-product-listing", 1);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, AsmCustomer360SavedCartComponent_ng_template_2_Template, 2, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.productItems$));
        }
      },
      dependencies: [NgIf, AsmCustomer360ProductListingComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360SavedCartComponent, [{
    type: Component,
    args: [{
      selector: "cx-asm-customer-360-saved-cart",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<cx-asm-customer-360-product-listing
  *ngIf="productItems$ | async as productItems"
  [emptyResultDescription]="
    'asmCustomer360.savedCart.emptyDescription' | cxTranslate
  "
  [headerInactive]="true"
  [headerTemplate]="headerTemplate"
  [headerText]="'asmCustomer360.savedCart.header' | cxTranslate"
  [products]="productItems"
  (selectProduct)="
    sectionContext.navigate$.next({ cxRoute: 'product', params: $event })
  "
>
</cx-asm-customer-360-product-listing>

<ng-template #headerTemplate>
  <ng-container *ngIf="savedCart$ | async as savedCart">
    <button
      [attr.aria-label]="
        'asmCustomer360.savedCart.aria.linkLabel'
          | cxTranslate: { code: savedCart.code }
      "
      class="cx-overview-title-link link"
      (click)="
        sectionContext.navigate$.next({
          cxRoute: 'savedCartsDetails',
          params: { savedCartId: savedCart?.code },
        })
      "
    >
      {{ savedCart.code }}
    </button>
    <div class="cart-total-no-items">
      {{
        'asmCustomer360.productListing.totalNoItems'
          | cxTranslate: { count: savedCart.totalItemCount }
      }}
    </div>
    <div class="cart-divider"></div>
    <div class="cart-total-price">
      {{
        'asmCustomer360.productListing.totalPrice'
          | cxTranslate: { price: savedCart.totalPrice }
      }}
    </div>
  </ng-container>
</ng-template>
`
    }]
  }], () => [{
    type: AsmCustomer360SectionContext
  }, {
    type: ProductService
  }], null);
})();
var AsmCustomer360SavedCartModule = class _AsmCustomer360SavedCartModule {
  static {
    this.ɵfac = function AsmCustomer360SavedCartModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360SavedCartModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCustomer360SavedCartModule,
      declarations: [AsmCustomer360SavedCartComponent],
      imports: [CommonModule, I18nModule, AsmCustomer360ProductListingModule],
      exports: [AsmCustomer360SavedCartComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, AsmCustomer360ProductListingModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360SavedCartModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, AsmCustomer360ProductListingModule],
      declarations: [AsmCustomer360SavedCartComponent],
      exports: [AsmCustomer360SavedCartComponent]
    }]
  }], null, null);
})();
var AsmCustomer360SupportTicketsComponent = class _AsmCustomer360SupportTicketsComponent {
  constructor(context) {
    this.context = context;
    this.supportTicketsColumns = [{
      property: "id",
      i18nTextKey: "asmCustomer360.supportTickets.columnHeaders.id",
      navigatable: true,
      headerTextAlign: CustomerTableTextAlign.START,
      textAlign: CustomerTableTextAlign.START
    }, {
      property: "subject",
      i18nTextKey: "asmCustomer360.supportTickets.columnHeaders.headline",
      headerTextAlign: CustomerTableTextAlign.START
    }, {
      property: "categoryLabel",
      i18nTextKey: "asmCustomer360.supportTickets.columnHeaders.category",
      headerTextAlign: CustomerTableTextAlign.START
    }, {
      property: "createdAt",
      i18nTextKey: "asmCustomer360.activity.created",
      isDate: true
    }, {
      property: "updatedAt",
      i18nTextKey: "asmCustomer360.activity.updated",
      isDate: true
    }, {
      property: "statusLabel",
      i18nTextKey: "asmCustomer360.activity.status",
      headerTextAlign: CustomerTableTextAlign.START
    }];
  }
  ngOnInit() {
    this.supportTicketsEntries$ = this.context.data$.pipe(map((data) => {
      return data?.tickets?.map((entry) => {
        return __spreadProps(__spreadValues({}, entry), {
          statusLabel: entry.status.name,
          categoryLabel: entry.category.name
        });
      }) ?? [];
    }));
  }
  navigateTo(entry) {
    if (entry) {
      this.context.navigate$.next({
        cxRoute: "supportTicketDetails",
        params: {
          ticketCode: entry.id
        }
      });
    }
  }
  static {
    this.ɵfac = function AsmCustomer360SupportTicketsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360SupportTicketsComponent)(ɵɵdirectiveInject(AsmCustomer360SectionContext));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AsmCustomer360SupportTicketsComponent,
      selectors: [["cx-asm-customer-360-support-tickets"]],
      standalone: false,
      decls: 5,
      vars: 13,
      consts: [["sortProperty", "createdAt", 3, "selectItem", "emptyStateText", "headerText", "columns", "entries", "pageSize"]],
      template: function AsmCustomer360SupportTicketsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-asm-customer-360-table", 0);
          ɵɵpipe(1, "cxTranslate");
          ɵɵpipe(2, "cxTranslate");
          ɵɵpipe(3, "async");
          ɵɵpipe(4, "async");
          ɵɵlistener("selectItem", function AsmCustomer360SupportTicketsComponent_Template_cx_asm_customer_360_table_selectItem_0_listener($event) {
            return ctx.navigateTo($event);
          });
          ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_4_0;
          ɵɵproperty("emptyStateText", ɵɵpipeBind1(1, 5, "asmCustomer360.supportTickets.emptyDescription"))("headerText", ɵɵpipeBind1(2, 7, "asmCustomer360.supportTickets.header"))("columns", ctx.supportTicketsColumns)("entries", ɵɵpipeBind1(3, 9, ctx.supportTicketsEntries$))("pageSize", (tmp_4_0 = ɵɵpipeBind1(4, 11, ctx.context.config$)) == null ? null : tmp_4_0.pageSize);
        }
      },
      dependencies: [AsmCustomer360TableComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360SupportTicketsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "cx-asm-customer-360-support-tickets",
      standalone: false,
      template: `<cx-asm-customer-360-table
  [emptyStateText]="
    'asmCustomer360.supportTickets.emptyDescription' | cxTranslate
  "
  [headerText]="'asmCustomer360.supportTickets.header' | cxTranslate"
  sortProperty="createdAt"
  [columns]="supportTicketsColumns"
  [entries]="supportTicketsEntries$ | async"
  [pageSize]="(context.config$ | async)?.pageSize"
  (selectItem)="navigateTo($event)"
></cx-asm-customer-360-table>
`
    }]
  }], () => [{
    type: AsmCustomer360SectionContext
  }], null);
})();
var AsmCustomer360SupportTicketsComponentModule = class _AsmCustomer360SupportTicketsComponentModule {
  static {
    this.ɵfac = function AsmCustomer360SupportTicketsComponentModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360SupportTicketsComponentModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCustomer360SupportTicketsComponentModule,
      declarations: [AsmCustomer360SupportTicketsComponent],
      imports: [CommonModule, AsmCustomer360TableModule, I18nModule],
      exports: [AsmCustomer360SupportTicketsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, AsmCustomer360TableModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360SupportTicketsComponentModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AsmCustomer360TableModule, I18nModule],
      declarations: [AsmCustomer360SupportTicketsComponent],
      exports: [AsmCustomer360SupportTicketsComponent]
    }]
  }], null, null);
})();
var AsmCustomer360PromotionListingComponent = class _AsmCustomer360PromotionListingComponent {
  constructor() {
    this.apply = new EventEmitter();
    this.remove = new EventEmitter();
    this.removeAlert = new EventEmitter();
    this.removeAlertForApplyAction = new EventEmitter();
    this.globalMessageType = GlobalMessageType;
  }
  static {
    this.ɵfac = function AsmCustomer360PromotionListingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360PromotionListingComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AsmCustomer360PromotionListingComponent,
      selectors: [["cx-asm-customer-360-promotion-listing"]],
      inputs: {
        headerText: "headerText",
        emptyStateText: "emptyStateText",
        applyButtonText: "applyButtonText",
        applied: "applied",
        removeButtonText: "removeButtonText",
        entries: "entries",
        showAlert: "showAlert",
        showAlertForApplyAction: "showAlertForApplyAction",
        showRemoveButton: "showRemoveButton",
        showApplyButton: "showApplyButton",
        isCustomerCoupon: "isCustomerCoupon"
      },
      outputs: {
        apply: "apply",
        remove: "remove",
        removeAlert: "removeAlert",
        removeAlertForApplyAction: "removeAlertForApplyAction"
      },
      standalone: false,
      ngContentSelectors: _c12,
      decls: 19,
      vars: 13,
      consts: [["class", "cx-asm-customer-360-promotion-listing-heading", 4, "ngIf"], [1, "message-container"], [3, "text", "type", "closeMessage", 4, "ngIf"], [1, "cx-asm-customer-360-promotion-listing"], [1, "cx-visually-hidden"], ["role", "columnheader"], [4, "ngFor", "ngForOf"], ["class", "cx-asm-customer-360-promotion-listing-separator", "aria-hidden", "true", 4, "ngIf"], ["class", "cx-asm-customer-360-promotion-listing-empty", 4, "ngIf"], [1, "cx-asm-customer-360-promotion-listing-heading"], [1, "cx-asm-customer-360-promotion-listing-heading-text"], [3, "closeMessage", "text", "type"], [1, "cx-asm-customer-360-promotion-listing-row"], ["tabindex", "-1", 1, "cx-asm-customer-360-promotion-listing-subheader"], [1, "cx-asm-customer-360-promotion-listing-description"], [4, "ngIf"], ["class", "cx-asm-customer-360-promotion-listing-apply-button", 3, "click", 4, "ngIf"], [1, "cx-asm-customer-360-promotion-listing-apply-button", 3, "click"], [1, "cx-asm-customer-360-promotion-listing-action"], ["type", "SUCCESS", 1, "success"], [1, "cx-asm-customer-360-promotion-listing-applied"], ["class", "cx-asm-customer-360-promotion-listing-action-separator", 4, "ngIf"], [1, "cx-asm-customer-360-promotion-listing-action-separator"], [1, "cx-asm-customer-360-promotion-listing-remove-button", 3, "click"], ["aria-hidden", "true", 1, "cx-asm-customer-360-promotion-listing-separator"], [1, "cx-asm-customer-360-promotion-listing-empty"]],
      template: function AsmCustomer360PromotionListingComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, AsmCustomer360PromotionListingComponent_div_0_Template, 3, 1, "div", 0);
          ɵɵprojection(1);
          ɵɵelementStart(2, "div", 1);
          ɵɵtemplate(3, AsmCustomer360PromotionListingComponent_cx_message_3_Template, 2, 4, "cx-message", 2)(4, AsmCustomer360PromotionListingComponent_cx_message_4_Template, 2, 4, "cx-message", 2);
          ɵɵelementEnd();
          ɵɵelementStart(5, "table", 3)(6, "caption", 4);
          ɵɵtext(7);
          ɵɵelementEnd();
          ɵɵelementStart(8, "thead", 4)(9, "tr")(10, "th", 5);
          ɵɵtext(11);
          ɵɵpipe(12, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(13, "th", 5);
          ɵɵtext(14);
          ɵɵpipe(15, "cxTranslate");
          ɵɵelementEnd()()();
          ɵɵtemplate(16, AsmCustomer360PromotionListingComponent_ng_container_16_Template, 10, 4, "ng-container", 6);
          ɵɵelementEnd();
          ɵɵtemplate(17, AsmCustomer360PromotionListingComponent_hr_17_Template, 1, 0, "hr", 7)(18, AsmCustomer360PromotionListingComponent_div_18_Template, 2, 1, "div", 8);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.headerText);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.showAlert);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.showAlertForApplyAction);
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ctx.headerText, " ");
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 9, "asmCustomer360.promotions.headerName"), " ");
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 11, "asmCustomer360.promotions.headerAction"), " ");
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.entries);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.showAlert);
          ɵɵadvance();
          ɵɵproperty("ngIf", (ctx.entries == null ? null : ctx.entries.length) === 0 && !ctx.showAlert);
        }
      },
      dependencies: [NgForOf, NgIf, MessageComponent, IconComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360PromotionListingComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "cx-asm-customer-360-promotion-listing",
      standalone: false,
      template: `<div class="cx-asm-customer-360-promotion-listing-heading" *ngIf="headerText">
  <h4 class="cx-asm-customer-360-promotion-listing-heading-text">
    {{ headerText }}
  </h4>
</div>
<ng-content></ng-content>
<div class="message-container">
  <cx-message
    *ngIf="showAlert"
    [text]="'asmCustomer360.alertErrorMessage' | cxTranslate"
    [type]="globalMessageType.MSG_TYPE_ERROR"
    (closeMessage)="removeAlert.emit()"
  ></cx-message>
  <cx-message
    *ngIf="showAlertForApplyAction"
    [text]="'asmCustomer360.applyActionAlter' | cxTranslate"
    [type]="globalMessageType.MSG_TYPE_ERROR"
    (closeMessage)="removeAlertForApplyAction.emit()"
  ></cx-message>
</div>
<table class="cx-asm-customer-360-promotion-listing">
  <caption class="cx-visually-hidden">
    {{
      headerText
    }}
  </caption>
  <thead class="cx-visually-hidden">
    <tr>
      <th role="columnheader">
        {{ 'asmCustomer360.promotions.headerName' | cxTranslate }}
      </th>
      <th role="columnheader">
        {{ 'asmCustomer360.promotions.headerAction' | cxTranslate }}
      </th>
    </tr>
  </thead>
  <ng-container *ngFor="let entry of entries">
    <tr class="cx-asm-customer-360-promotion-listing-row">
      <td>
        <tr
          class="cx-asm-customer-360-promotion-listing-subheader"
          tabindex="-1"
        >
          {{
            entry.code
          }}
        </tr>
        <tr class="cx-asm-customer-360-promotion-listing-description">
          {{
            entry.name
          }}
        </tr>
      </td>
      <td>
        <ng-container *ngIf="!entry.applied">
          <button
            *ngIf="showApplyButton"
            class="cx-asm-customer-360-promotion-listing-apply-button"
            (click)="apply.emit(entry)"
          >
            {{ applyButtonText }}
          </button>
        </ng-container>
        <ng-container *ngIf="entry.applied">
          <tr class="cx-asm-customer-360-promotion-listing-action">
            <ng-container *ngIf="!isCustomerCoupon">
              <td>
                <cx-icon class="success" type="SUCCESS"></cx-icon>
              </td>
              <td class="cx-asm-customer-360-promotion-listing-applied">
                {{ applied }}
              </td>
              <td
                *ngIf="showRemoveButton"
                class="cx-asm-customer-360-promotion-listing-action-separator"
              >
                |
              </td>
            </ng-container>
            <td *ngIf="showRemoveButton">
              <button
                class="cx-asm-customer-360-promotion-listing-remove-button"
                (click)="remove.emit(entry)"
              >
                {{ removeButtonText }}
              </button>
            </td>
          </tr>
        </ng-container>
      </td>
    </tr>
  </ng-container>
</table>
<hr
  class="cx-asm-customer-360-promotion-listing-separator"
  aria-hidden="true"
  *ngIf="!showAlert"
/>
<div
  class="cx-asm-customer-360-promotion-listing-empty"
  *ngIf="entries?.length === 0 && !showAlert"
>
  {{ emptyStateText }}
</div>
`
    }]
  }], null, {
    headerText: [{
      type: Input
    }],
    emptyStateText: [{
      type: Input
    }],
    applyButtonText: [{
      type: Input
    }],
    applied: [{
      type: Input
    }],
    removeButtonText: [{
      type: Input
    }],
    entries: [{
      type: Input
    }],
    showAlert: [{
      type: Input
    }],
    showAlertForApplyAction: [{
      type: Input
    }],
    showRemoveButton: [{
      type: Input
    }],
    showApplyButton: [{
      type: Input
    }],
    isCustomerCoupon: [{
      type: Input
    }],
    apply: [{
      type: Output
    }],
    remove: [{
      type: Output
    }],
    removeAlert: [{
      type: Output
    }],
    removeAlertForApplyAction: [{
      type: Output
    }]
  });
})();
var AsmCustomer360CouponComponent = class _AsmCustomer360CouponComponent {
  constructor(context, cartVoucherService, userIdService, activeCartFacade, asmCustomer360Facade) {
    this.context = context;
    this.cartVoucherService = cartVoucherService;
    this.userIdService = userIdService;
    this.activeCartFacade = activeCartFacade;
    this.asmCustomer360Facade = asmCustomer360Facade;
    this.showErrorAlert$ = new BehaviorSubject(false);
    this.showErrorAlertForApplyAction$ = new BehaviorSubject(false);
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.subscription.add(this.userIdService.getUserId().subscribe((user) => {
      this.userId = user ?? "";
    }));
    this.subscription.add(this.activeCartFacade.requireLoadedCart().subscribe((cart) => {
      this.currentCartId = cart?.code;
    }));
    this.subscription.add(this.cartVoucherService.getAddVoucherResultError().subscribe((error) => {
      if (error) {
        this.refreshComponent();
        this.showErrorAlertForApplyAction$.next(true);
      }
    }));
    this.showErrorAlert$.next(false);
    this.showErrorAlertForApplyAction$.next(false);
    this.fetchCoupons();
  }
  fetchCoupons() {
    this.entries$ = this.context.data$.pipe(map((data) => {
      const entries = [];
      data.coupons.forEach((coupon) => {
        entries.push(__spreadValues({}, coupon));
      });
      return entries;
    }), catchError(() => {
      this.showErrorAlert$.next(true);
      return of([]);
    }));
  }
  closeErrorAlert() {
    this.showErrorAlert$.next(false);
  }
  closeErrorAlertForApplyAction() {
    this.showErrorAlertForApplyAction$.next(false);
  }
  refreshComponent() {
    this.entries$ = this.asmCustomer360Facade.get360Data([{
      requestData: {
        type: AsmCustomer360Type.COUPON_LIST
      }
    }]).pipe(map((response) => {
      const couponList = response?.value?.find((item) => item.type === AsmCustomer360Type.COUPON_LIST);
      const newEntries = [];
      if (couponList.coupons) {
        couponList.coupons.forEach((coupon) => {
          newEntries.push(__spreadValues({}, coupon));
        });
      }
      return newEntries;
    }), catchError(() => {
      this.showErrorAlert$.next(true);
      return of([]);
    }));
  }
  applyCouponToCustomer(entry) {
    this.cartVoucherService.addVoucher(entry?.code, this.currentCartId);
    this.refreshActionButton(true, entry?.code);
  }
  removeCouponToCustomer(entry) {
    this.cartVoucherService.removeVoucher(entry?.code, this.currentCartId);
    this.refreshActionButton(false, entry?.code);
  }
  refreshActionButton(state, voucherCode) {
    this.entries$ = this.entries$.pipe(map((entries) => {
      entries.forEach((item) => {
        if (item.code === voucherCode) {
          item.applied = state;
        }
      });
      return entries;
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function AsmCustomer360CouponComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360CouponComponent)(ɵɵdirectiveInject(AsmCustomer360SectionContext), ɵɵdirectiveInject(CartVoucherFacade), ɵɵdirectiveInject(UserIdService), ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(AsmCustomer360Facade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AsmCustomer360CouponComponent,
      selectors: [["cx-asm-customer-360-coupon"]],
      standalone: false,
      decls: 9,
      vars: 26,
      consts: [[3, "apply", "remove", "removeAlert", "removeAlertForApplyAction", "emptyStateText", "headerText", "entries", "showAlert", "showAlertForApplyAction", "applyButtonText", "applied", "removeButtonText", "showRemoveButton", "showApplyButton"]],
      template: function AsmCustomer360CouponComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-asm-customer-360-promotion-listing", 0);
          ɵɵpipe(1, "cxTranslate");
          ɵɵpipe(2, "cxTranslate");
          ɵɵpipe(3, "async");
          ɵɵpipe(4, "async");
          ɵɵpipe(5, "async");
          ɵɵpipe(6, "cxTranslate");
          ɵɵpipe(7, "cxTranslate");
          ɵɵpipe(8, "cxTranslate");
          ɵɵlistener("apply", function AsmCustomer360CouponComponent_Template_cx_asm_customer_360_promotion_listing_apply_0_listener($event) {
            return ctx.applyCouponToCustomer($event);
          })("remove", function AsmCustomer360CouponComponent_Template_cx_asm_customer_360_promotion_listing_remove_0_listener($event) {
            return ctx.removeCouponToCustomer($event);
          })("removeAlert", function AsmCustomer360CouponComponent_Template_cx_asm_customer_360_promotion_listing_removeAlert_0_listener() {
            return ctx.closeErrorAlert();
          })("removeAlertForApplyAction", function AsmCustomer360CouponComponent_Template_cx_asm_customer_360_promotion_listing_removeAlertForApplyAction_0_listener() {
            return ctx.closeErrorAlertForApplyAction();
          });
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("emptyStateText", ɵɵpipeBind1(1, 10, "asmCustomer360.coupons.emptyDescription"))("headerText", ɵɵpipeBind1(2, 12, "asmCustomer360.coupons.headerText"))("entries", ɵɵpipeBind1(3, 14, ctx.entries$))("showAlert", ɵɵpipeBind1(4, 16, ctx.showErrorAlert$))("showAlertForApplyAction", ɵɵpipeBind1(5, 18, ctx.showErrorAlertForApplyAction$))("applyButtonText", ɵɵpipeBind1(6, 20, "asmCustomer360.coupons.applyButtonText"))("applied", ɵɵpipeBind1(7, 22, "asmCustomer360.coupons.applied"))("removeButtonText", ɵɵpipeBind1(8, 24, "asmCustomer360.coupons.removeButtonText"))("showRemoveButton", true)("showApplyButton", true);
        }
      },
      dependencies: [AsmCustomer360PromotionListingComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360CouponComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "cx-asm-customer-360-coupon",
      standalone: false,
      template: `<cx-asm-customer-360-promotion-listing
  [emptyStateText]="'asmCustomer360.coupons.emptyDescription' | cxTranslate"
  [headerText]="'asmCustomer360.coupons.headerText' | cxTranslate"
  [entries]="entries$ | async"
  [showAlert]="showErrorAlert$ | async"
  [showAlertForApplyAction]="showErrorAlertForApplyAction$ | async"
  (apply)="applyCouponToCustomer($event)"
  (remove)="removeCouponToCustomer($event)"
  (removeAlert)="closeErrorAlert()"
  (removeAlertForApplyAction)="closeErrorAlertForApplyAction()"
  [applyButtonText]="'asmCustomer360.coupons.applyButtonText' | cxTranslate"
  [applied]="'asmCustomer360.coupons.applied' | cxTranslate"
  [removeButtonText]="'asmCustomer360.coupons.removeButtonText' | cxTranslate"
  [showRemoveButton]="true"
  [showApplyButton]="true"
>
</cx-asm-customer-360-promotion-listing>
`
    }]
  }], () => [{
    type: AsmCustomer360SectionContext
  }, {
    type: CartVoucherFacade
  }, {
    type: UserIdService
  }, {
    type: ActiveCartFacade
  }, {
    type: AsmCustomer360Facade
  }], null);
})();
var AsmCustomer360PromotionListingModule = class _AsmCustomer360PromotionListingModule {
  static {
    this.ɵfac = function AsmCustomer360PromotionListingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360PromotionListingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCustomer360PromotionListingModule,
      declarations: [AsmCustomer360PromotionListingComponent],
      imports: [CommonModule, I18nModule, ArgsModule, StarRatingModule, MessageComponentModule, IconModule],
      exports: [AsmCustomer360PromotionListingComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, ArgsModule, StarRatingModule, MessageComponentModule, IconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360PromotionListingModule, [{
    type: NgModule,
    args: [{
      declarations: [AsmCustomer360PromotionListingComponent],
      exports: [AsmCustomer360PromotionListingComponent],
      imports: [CommonModule, I18nModule, ArgsModule, StarRatingModule, MessageComponentModule, IconModule]
    }]
  }], null, null);
})();
var AsmCustomer360CouponComponentModule = class _AsmCustomer360CouponComponentModule {
  static {
    this.ɵfac = function AsmCustomer360CouponComponentModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360CouponComponentModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCustomer360CouponComponentModule,
      declarations: [AsmCustomer360CouponComponent],
      imports: [CommonModule, AsmCustomer360PromotionListingModule, I18nModule],
      exports: [AsmCustomer360CouponComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, AsmCustomer360PromotionListingModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360CouponComponentModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AsmCustomer360PromotionListingModule, I18nModule],
      declarations: [AsmCustomer360CouponComponent],
      exports: [AsmCustomer360CouponComponent]
    }]
  }], null, null);
})();
var AsmCustomer360PromotionComponent = class _AsmCustomer360PromotionComponent {
  constructor(context, asmCustomer360Facade, activeCartFacade) {
    this.context = context;
    this.asmCustomer360Facade = asmCustomer360Facade;
    this.activeCartFacade = activeCartFacade;
    this.showErrorAlert$ = new BehaviorSubject(false);
    this.entries$ = new BehaviorSubject([]);
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.showErrorAlert$.next(false);
    this.fetchPromotions();
    this.subscription.add(this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
      if (cartId && this.entries$.value.length === 0) {
        this.refreshPromotions();
      }
    }));
  }
  refreshPromotions() {
    this.asmCustomer360Facade.get360Data([{
      requestData: {
        type: AsmCustomer360Type.PROMOTION_LIST
      }
    }]).pipe(map((response) => {
      const promotionList = response?.value?.find((item) => item.type === AsmCustomer360Type.PROMOTION_LIST);
      const newEntries = [];
      if (promotionList.promotions) {
        promotionList.promotions.forEach((promotion) => {
          newEntries.push({
            applied: promotion.applied,
            code: promotion.name || "",
            name: promotion.message
          });
        });
      }
      return newEntries;
    }), catchError(() => {
      this.showErrorAlert$.next(true);
      return of([]);
    })).subscribe((newEntries) => {
      this.entries$.next(newEntries);
    });
  }
  fetchPromotions() {
    this.context.data$.pipe(map((data) => {
      const entries = [];
      data.promotions.forEach((promotion) => {
        entries.push({
          applied: promotion.applied,
          code: promotion.name || "",
          name: promotion.message
        });
      });
      return entries;
    }), catchError(() => {
      this.showErrorAlert$.next(true);
      return of([]);
    })).subscribe((newEntries) => {
      this.entries$.next(newEntries);
    });
  }
  closeErrorAlert() {
    this.showErrorAlert$.next(false);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function AsmCustomer360PromotionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360PromotionComponent)(ɵɵdirectiveInject(AsmCustomer360SectionContext), ɵɵdirectiveInject(AsmCustomer360Facade), ɵɵdirectiveInject(ActiveCartFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AsmCustomer360PromotionComponent,
      selectors: [["cx-asm-customer-360-promotion"]],
      standalone: false,
      decls: 6,
      vars: 17,
      consts: [[3, "emptyStateText", "headerText", "showAlert", "entries", "applied", "showRemoveButton", "showApplyButton"]],
      template: function AsmCustomer360PromotionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "cx-asm-customer-360-promotion-listing", 0);
          ɵɵpipe(1, "cxTranslate");
          ɵɵpipe(2, "cxTranslate");
          ɵɵpipe(3, "async");
          ɵɵpipe(4, "async");
          ɵɵpipe(5, "cxTranslate");
        }
        if (rf & 2) {
          ɵɵproperty("emptyStateText", ɵɵpipeBind1(1, 7, "asmCustomer360.promotions.emptyDescription"))("headerText", ɵɵpipeBind1(2, 9, "asmCustomer360.promotions.headerText"))("showAlert", ɵɵpipeBind1(3, 11, ctx.showErrorAlert$))("entries", ɵɵpipeBind1(4, 13, ctx.entries$))("applied", ɵɵpipeBind1(5, 15, "asmCustomer360.promotions.applied"))("showRemoveButton", false)("showApplyButton", false);
        }
      },
      dependencies: [AsmCustomer360PromotionListingComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360PromotionComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "cx-asm-customer-360-promotion",
      standalone: false,
      template: `<cx-asm-customer-360-promotion-listing
  [emptyStateText]="'asmCustomer360.promotions.emptyDescription' | cxTranslate"
  [headerText]="'asmCustomer360.promotions.headerText' | cxTranslate"
  [showAlert]="showErrorAlert$ | async"
  [entries]="entries$ | async"
  [applied]="'asmCustomer360.promotions.applied' | cxTranslate"
  [showRemoveButton]="false"
  [showApplyButton]="false"
>
</cx-asm-customer-360-promotion-listing>
`
    }]
  }], () => [{
    type: AsmCustomer360SectionContext
  }, {
    type: AsmCustomer360Facade
  }, {
    type: ActiveCartFacade
  }], null);
})();
var AsmCustomer360PromotionComponentModule = class _AsmCustomer360PromotionComponentModule {
  static {
    this.ɵfac = function AsmCustomer360PromotionComponentModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360PromotionComponentModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCustomer360PromotionComponentModule,
      declarations: [AsmCustomer360PromotionComponent],
      imports: [CommonModule, AsmCustomer360PromotionListingModule, I18nModule],
      exports: [AsmCustomer360PromotionComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, AsmCustomer360PromotionListingModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360PromotionComponentModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AsmCustomer360PromotionListingModule, I18nModule],
      declarations: [AsmCustomer360PromotionComponent],
      exports: [AsmCustomer360PromotionComponent]
    }]
  }], null, null);
})();
var AsmCustomer360CustomerCouponComponent = class _AsmCustomer360CustomerCouponComponent {
  constructor(context, asmCustomer360Facade, customerCouponService) {
    this.context = context;
    this.asmCustomer360Facade = asmCustomer360Facade;
    this.customerCouponService = customerCouponService;
    this.showErrorAlert$ = new BehaviorSubject(false);
    this.showErrorAlertForApplyAction$ = new BehaviorSubject(false);
    this.subscription = new Subscription();
    this.currentTabIsAssignable = true;
    this.iconTypes = ICON_TYPE;
    this.activeTab = 0;
  }
  ngOnInit() {
    this.subscription.add(this.customerCouponService.getClaimCustomerCouponResultError().subscribe((error) => {
      if (error) {
        this.changeTab(true);
        this.showErrorAlertForApplyAction$.next(true);
      }
    }));
    this.subscription.add(this.customerCouponService.getDisclaimCustomerCouponResultError().subscribe((error) => {
      if (error) {
        this.changeTab(false);
        this.showErrorAlertForApplyAction$.next(true);
      }
    }));
    this.fetchCustomerCoupons();
    this.currentTabIsAssignable = true;
    this.hideAllErrorAlert();
  }
  fetchCustomerCoupons() {
    this.entries$ = this.context.data$.pipe(map((data) => {
      const entries = [];
      data.customerCoupons.forEach((customerCoupon) => {
        entries.push({
          code: customerCoupon.name,
          name: customerCoupon.description,
          codeForApplyAction: customerCoupon.code,
          applied: false
        });
      });
      return entries;
    }), catchError(() => {
      this.showErrorAlert$.next(true);
      return of([]);
    }));
  }
  changeTab(assignable) {
    this.currentTabIsAssignable = assignable;
    this.hideAllErrorAlert();
    this.entries$ = this.asmCustomer360Facade.get360Data([{
      requestData: {
        type: AsmCustomer360Type.CUSTOMER_COUPON_LIST,
        additionalRequestParameters: {
          assignable
        }
      }
    }]).pipe(map((response) => {
      return this.mapParams(assignable, response);
    }), catchError(() => {
      this.showErrorAlert$.next(true);
      return of([]);
    }));
  }
  searchCustomerCoupon(searchQuery) {
    this.hideAllErrorAlert();
    this.entries$ = this.asmCustomer360Facade.get360Data([{
      requestData: {
        type: AsmCustomer360Type.CUSTOMER_COUPON_LIST,
        additionalRequestParameters: {
          assignable: this.currentTabIsAssignable,
          searchQuery
        }
      }
    }]).pipe(map((response) => {
      return this.mapParams(this.currentTabIsAssignable, response);
    }), catchError(() => {
      this.showErrorAlert$.next(true);
      return of([]);
    }));
  }
  hideAllErrorAlert() {
    this.showErrorAlert$.next(false);
    this.showErrorAlertForApplyAction$.next(false);
  }
  mapParams(applied, response) {
    const couponList = response?.value?.find((item) => item.type === AsmCustomer360Type.CUSTOMER_COUPON_LIST);
    const newEntries = [];
    if (couponList.customerCoupons) {
      couponList.customerCoupons.forEach((customerCoupon) => {
        newEntries.push({
          code: customerCoupon.name,
          name: customerCoupon.description,
          codeForApplyAction: customerCoupon.code,
          applied: !applied
        });
      });
    }
    this.activeTab = applied ? 0 : 1;
    return newEntries;
  }
  closeErrorAlert() {
    this.showErrorAlert$.next(false);
  }
  closeErrorAlertForApplyAction() {
    this.showErrorAlertForApplyAction$.next(false);
  }
  claimCouponToCustomer(entry) {
    this.customerCouponService.claimCustomerCoupon(entry.codeForApplyAction);
    this.refreshActionButton(entry?.codeForApplyAction);
  }
  disclaimCouponToCustomer(entry) {
    this.customerCouponService.resetDisclaimCustomerCoupon();
    this.customerCouponService.disclaimCustomerCoupon(entry.codeForApplyAction);
    this.refreshActionButton(entry?.codeForApplyAction);
  }
  refreshActionButton(couponCode) {
    this.entries$ = this.entries$.pipe(map((entries) => {
      return entries.filter((item) => item.codeForApplyAction !== couponCode);
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function AsmCustomer360CustomerCouponComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360CustomerCouponComponent)(ɵɵdirectiveInject(AsmCustomer360SectionContext), ɵɵdirectiveInject(AsmCustomer360Facade), ɵɵdirectiveInject(CustomerCouponService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AsmCustomer360CustomerCouponComponent,
      selectors: [["cx-asm-customer-360-customer-coupon"]],
      standalone: false,
      decls: 24,
      vars: 48,
      consts: [["searchBox", ""], [3, "apply", "remove", "removeAlert", "removeAlertForApplyAction", "headerText", "emptyStateText", "applyButtonText", "applied", "removeButtonText", "entries", "showRemoveButton", "showApplyButton", "isCustomerCoupon", "showAlert", "showAlertForApplyAction"], [1, "cx-asm-customer-360-promotion-listing-tabs"], [1, "cx-tab-header", 3, "click", "textContent"], ["aria-hidden", "true", 1, "cx-asm-customer-360-promotion-listing-separator"], [1, "cx-asm-customer-360-promotion-listing-search"], [1, "cx-asm-customer-360-promotion-listing-search-input", 3, "keydown.enter", "placeholder"], ["role", "button", 1, "cx-asm-customer-360-promotion-listing-search-icon-reset", 3, "click", "type", "title"], ["role", "button", 1, "cx-asm-customer-360-promotion-listing-search-icon-search", 3, "click", "type", "title"]],
      template: function AsmCustomer360CustomerCouponComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "cx-asm-customer-360-promotion-listing", 1);
          ɵɵpipe(1, "cxTranslate");
          ɵɵpipe(2, "cxTranslate");
          ɵɵpipe(3, "cxTranslate");
          ɵɵpipe(4, "cxTranslate");
          ɵɵpipe(5, "cxTranslate");
          ɵɵpipe(6, "async");
          ɵɵpipe(7, "async");
          ɵɵpipe(8, "async");
          ɵɵlistener("apply", function AsmCustomer360CustomerCouponComponent_Template_cx_asm_customer_360_promotion_listing_apply_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.claimCouponToCustomer($event));
          })("remove", function AsmCustomer360CustomerCouponComponent_Template_cx_asm_customer_360_promotion_listing_remove_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.disclaimCouponToCustomer($event));
          })("removeAlert", function AsmCustomer360CustomerCouponComponent_Template_cx_asm_customer_360_promotion_listing_removeAlert_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.closeErrorAlert());
          })("removeAlertForApplyAction", function AsmCustomer360CustomerCouponComponent_Template_cx_asm_customer_360_promotion_listing_removeAlertForApplyAction_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.closeErrorAlertForApplyAction());
          });
          ɵɵelementContainerStart(9);
          ɵɵelementStart(10, "div", 2)(11, "button", 3);
          ɵɵpipe(12, "cxTranslate");
          ɵɵlistener("click", function AsmCustomer360CustomerCouponComponent_Template_button_click_11_listener() {
            ɵɵrestoreView(_r1);
            const searchBox_r2 = ɵɵreference(18);
            ctx.changeTab(true);
            return ɵɵresetView(searchBox_r2.value = "");
          });
          ɵɵelementEnd();
          ɵɵelementStart(13, "button", 3);
          ɵɵpipe(14, "cxTranslate");
          ɵɵlistener("click", function AsmCustomer360CustomerCouponComponent_Template_button_click_13_listener() {
            ɵɵrestoreView(_r1);
            const searchBox_r2 = ɵɵreference(18);
            ctx.changeTab(false);
            return ɵɵresetView(searchBox_r2.value = "");
          });
          ɵɵelementEnd()();
          ɵɵelement(15, "hr", 4);
          ɵɵelementStart(16, "div", 5)(17, "input", 6, 0);
          ɵɵpipe(19, "cxTranslate");
          ɵɵlistener("keydown.enter", function AsmCustomer360CustomerCouponComponent_Template_input_keydown_enter_17_listener() {
            ɵɵrestoreView(_r1);
            const searchBox_r2 = ɵɵreference(18);
            return ɵɵresetView(ctx.searchCustomerCoupon(searchBox_r2.value));
          });
          ɵɵelementEnd();
          ɵɵelementStart(20, "cx-icon", 7);
          ɵɵpipe(21, "cxTranslate");
          ɵɵlistener("click", function AsmCustomer360CustomerCouponComponent_Template_cx_icon_click_20_listener() {
            ɵɵrestoreView(_r1);
            const searchBox_r2 = ɵɵreference(18);
            return ɵɵresetView(searchBox_r2.value = "");
          });
          ɵɵelementEnd();
          ɵɵelementStart(22, "cx-icon", 8);
          ɵɵpipe(23, "cxTranslate");
          ɵɵlistener("click", function AsmCustomer360CustomerCouponComponent_Template_cx_icon_click_22_listener() {
            ɵɵrestoreView(_r1);
            const searchBox_r2 = ɵɵreference(18);
            return ɵɵresetView(ctx.searchCustomerCoupon(searchBox_r2.value));
          });
          ɵɵelementEnd()();
          ɵɵelementContainerEnd();
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("headerText", ɵɵpipeBind1(1, 22, "asmCustomer360.customerCoupons.headerText"))("emptyStateText", ɵɵpipeBind1(2, 24, "asmCustomer360.customerCoupons.emptyDescription"))("applyButtonText", ɵɵpipeBind1(3, 26, "asmCustomer360.customerCoupons.applyButtonText"))("applied", ɵɵpipeBind1(4, 28, "asmCustomer360.customerCoupons.applied"))("removeButtonText", ɵɵpipeBind1(5, 30, "asmCustomer360.customerCoupons.removeButtonText"))("entries", ɵɵpipeBind1(6, 32, ctx.entries$))("showRemoveButton", true)("showApplyButton", true)("isCustomerCoupon", true)("showAlert", ɵɵpipeBind1(7, 34, ctx.showErrorAlert$))("showAlertForApplyAction", ɵɵpipeBind1(8, 36, ctx.showErrorAlertForApplyAction$));
          ɵɵadvance(11);
          ɵɵclassProp("active", ctx.activeTab === 0);
          ɵɵproperty("textContent", ɵɵpipeBind1(12, 38, "asmCustomer360.customerCoupons.availableTab"));
          ɵɵadvance(2);
          ɵɵclassProp("active", ctx.activeTab === 1);
          ɵɵproperty("textContent", ɵɵpipeBind1(14, 40, "asmCustomer360.customerCoupons.sentTab"));
          ɵɵadvance(4);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(19, 42, "asmCustomer360.customerCoupons.searchBox"));
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("title", ɵɵpipeBind1(21, 44, "common.close"));
          ɵɵproperty("type", ctx.iconTypes.CLOSE);
          ɵɵadvance(2);
          ɵɵpropertyInterpolate("title", ɵɵpipeBind1(23, 46, "common.search"));
          ɵɵproperty("type", ctx.iconTypes.SEARCH);
        }
      },
      dependencies: [AsmCustomer360PromotionListingComponent, IconComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360CustomerCouponComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "cx-asm-customer-360-customer-coupon",
      standalone: false,
      template: `<cx-asm-customer-360-promotion-listing
  [headerText]="'asmCustomer360.customerCoupons.headerText' | cxTranslate"
  [emptyStateText]="
    'asmCustomer360.customerCoupons.emptyDescription' | cxTranslate
  "
  [applyButtonText]="
    'asmCustomer360.customerCoupons.applyButtonText' | cxTranslate
  "
  [applied]="'asmCustomer360.customerCoupons.applied' | cxTranslate"
  [removeButtonText]="
    'asmCustomer360.customerCoupons.removeButtonText' | cxTranslate
  "
  [entries]="entries$ | async"
  [showRemoveButton]="true"
  [showApplyButton]="true"
  [isCustomerCoupon]="true"
  (apply)="claimCouponToCustomer($event)"
  (remove)="disclaimCouponToCustomer($event)"
  [showAlert]="showErrorAlert$ | async"
  [showAlertForApplyAction]="showErrorAlertForApplyAction$ | async"
  (removeAlert)="closeErrorAlert()"
  (removeAlertForApplyAction)="closeErrorAlertForApplyAction()"
>
  <ng-container>
    <div class="cx-asm-customer-360-promotion-listing-tabs">
      <button
        class="cx-tab-header"
        [class.active]="this.activeTab === 0"
        [textContent]="
          'asmCustomer360.customerCoupons.availableTab' | cxTranslate
        "
        (click)="this.changeTab(true); searchBox.value = ''"
      ></button>
      <button
        class="cx-tab-header"
        [class.active]="this.activeTab === 1"
        [textContent]="'asmCustomer360.customerCoupons.sentTab' | cxTranslate"
        (click)="this.changeTab(false); searchBox.value = ''"
      ></button>
    </div>
    <hr
      class="cx-asm-customer-360-promotion-listing-separator"
      aria-hidden="true"
    />
    <div class="cx-asm-customer-360-promotion-listing-search">
      <input
        #searchBox
        class="cx-asm-customer-360-promotion-listing-search-input"
        placeholder="{{
          'asmCustomer360.customerCoupons.searchBox' | cxTranslate
        }}"
        (keydown.enter)="this.searchCustomerCoupon(searchBox.value)"
      />
      <cx-icon
        class="cx-asm-customer-360-promotion-listing-search-icon-reset"
        [type]="iconTypes.CLOSE"
        role="button"
        title="{{ 'common.close' | cxTranslate }}"
        (click)="searchBox.value = ''"
      ></cx-icon>
      <cx-icon
        class="cx-asm-customer-360-promotion-listing-search-icon-search"
        [type]="iconTypes.SEARCH"
        role="button"
        title="{{ 'common.search' | cxTranslate }}"
        (click)="this.searchCustomerCoupon(searchBox.value)"
      ></cx-icon>
    </div>
  </ng-container>
</cx-asm-customer-360-promotion-listing>
`
    }]
  }], () => [{
    type: AsmCustomer360SectionContext
  }, {
    type: AsmCustomer360Facade
  }, {
    type: CustomerCouponService
  }], null);
})();
var AsmCustomer360CustomerCouponComponentModule = class _AsmCustomer360CustomerCouponComponentModule {
  static {
    this.ɵfac = function AsmCustomer360CustomerCouponComponentModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360CustomerCouponComponentModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCustomer360CustomerCouponComponentModule,
      declarations: [AsmCustomer360CustomerCouponComponent],
      imports: [CommonModule, AsmCustomer360PromotionListingModule, I18nModule, IconModule, SearchBoxModule],
      exports: [AsmCustomer360CustomerCouponComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, AsmCustomer360PromotionListingModule, I18nModule, IconModule, SearchBoxModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360CustomerCouponComponentModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AsmCustomer360PromotionListingModule, I18nModule, IconModule, SearchBoxModule],
      declarations: [AsmCustomer360CustomerCouponComponent],
      exports: [AsmCustomer360CustomerCouponComponent]
    }]
  }], null, null);
})();
var defaultAsmCustomer360LayoutConfig = {
  launch: {
    [LAUNCH_CALLER.ASM_CUSTOMER_360]: {
      inlineRoot: true,
      component: AsmCustomer360Component,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var AsmCustomer360ComponentsModule = class _AsmCustomer360ComponentsModule {
  static {
    this.ɵfac = function AsmCustomer360ComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360ComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCustomer360ComponentsModule,
      declarations: [AsmCustomer360Component, AsmCustomer360SectionComponent],
      imports: [CommonModule, StarRatingModule, I18nModule, ArgsModule, MediaModule, IconModule, KeyboardFocusModule, PageComponentModule, MessageComponentModule, AsmCustomer360ActiveCartModule, AsmCustomer360ProductInterestsModule, AsmCustomer360SavedCartModule, AsmCustomer360ProfileModule, AsmCustomer360ActivityModule, AsmCustomer360MapComponentModule, AsmCustomer360ProductReviewsComponentModule, AsmCustomer360SupportTicketsComponentModule, AsmCustomer360CouponComponentModule, AsmCustomer360PromotionComponentModule, AsmCustomer360CustomerCouponComponentModule],
      exports: [AsmCustomer360Component]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultAsmCustomer360LayoutConfig)],
      imports: [CommonModule, StarRatingModule, I18nModule, ArgsModule, MediaModule, IconModule, KeyboardFocusModule, PageComponentModule, MessageComponentModule, AsmCustomer360ActiveCartModule, AsmCustomer360ProductInterestsModule, AsmCustomer360SavedCartModule, AsmCustomer360ProfileModule, AsmCustomer360ActivityModule, AsmCustomer360MapComponentModule, AsmCustomer360ProductReviewsComponentModule, AsmCustomer360SupportTicketsComponentModule, AsmCustomer360CouponComponentModule, AsmCustomer360PromotionComponentModule, AsmCustomer360CustomerCouponComponentModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360ComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, StarRatingModule, I18nModule, ArgsModule, MediaModule, IconModule, KeyboardFocusModule, PageComponentModule, MessageComponentModule, AsmCustomer360ActiveCartModule, AsmCustomer360ProductInterestsModule, AsmCustomer360SavedCartModule, AsmCustomer360ProfileModule, AsmCustomer360ActivityModule, AsmCustomer360MapComponentModule, AsmCustomer360ProductReviewsComponentModule, AsmCustomer360SupportTicketsComponentModule, AsmCustomer360CouponComponentModule, AsmCustomer360PromotionComponentModule, AsmCustomer360CustomerCouponComponentModule],
      declarations: [AsmCustomer360Component, AsmCustomer360SectionComponent],
      exports: [AsmCustomer360Component],
      providers: [provideDefaultConfig(defaultAsmCustomer360LayoutConfig)]
    }]
  }], null, null);
})();
var defaultAsmCustomer360Config = {
  asmCustomer360: {
    dateFormat: "MM-dd-yyyy",
    dateTimeFormat: "dd-MM-yy hh:mm a",
    tabs: [{
      i18nNameKey: "asmCustomer360.overviewTab",
      components: [{
        component: AsmCustomer360ActiveCartComponent,
        requestData: {
          type: AsmCustomer360Type.ACTIVE_CART
        }
      }, {
        component: AsmCustomer360SavedCartComponent,
        requestData: {
          type: AsmCustomer360Type.SAVED_CART
        }
      }, {
        component: AsmCustomer360ProductInterestsComponent,
        requestData: {
          type: AsmCustomer360Type.PRODUCT_INTEREST_LIST
        }
      }]
    }, {
      i18nNameKey: "asmCustomer360.profileTab",
      components: [{
        component: AsmCustomer360ProfileComponent,
        requestData: {
          type: AsmCustomer360Type.CUSTOMER_PROFILE
        }
      }]
    }, {
      i18nNameKey: "asmCustomer360.activityTab",
      components: [{
        component: AsmCustomer360ActivityComponent,
        requestData: {
          type: AsmCustomer360Type.ACTIVITY_LIST,
          additionalRequestParameters: {
            listSize: 10
          }
        },
        config: {
          pageSize: 5
        }
      }]
    }, {
      i18nNameKey: "asmCustomer360.feedbackTab",
      components: [{
        component: AsmCustomer360SupportTicketsComponent,
        requestData: {
          type: AsmCustomer360Type.SUPPORT_TICKET_LIST,
          additionalRequestParameters: {
            listSize: 10
          }
        },
        config: {
          pageSize: 5
        }
      }, {
        component: AsmCustomer360ProductReviewsComponent,
        requestData: {
          type: AsmCustomer360Type.REVIEW_LIST,
          additionalRequestParameters: {
            listSize: 10
          }
        },
        config: {
          pageSize: 5
        }
      }]
    }, {
      i18nNameKey: "asmCustomer360.promotionsTab",
      components: [{
        component: AsmCustomer360CouponComponent,
        requestData: {
          type: AsmCustomer360Type.COUPON_LIST
        }
      }, {
        component: AsmCustomer360PromotionComponent,
        requestData: {
          type: AsmCustomer360Type.PROMOTION_LIST
        }
      }, {
        component: AsmCustomer360CustomerCouponComponent,
        requestData: {
          type: AsmCustomer360Type.CUSTOMER_COUPON_LIST,
          additionalRequestParameters: {
            assignable: true
          }
        }
      }]
    }, {
      i18nNameKey: "asmCustomer360.storeLocationsTab",
      components: [{
        component: AsmCustomer360MapComponent,
        requestData: {
          type: AsmCustomer360Type.STORE_LOCATION
        },
        config: {
          pageSize: 10
        }
      }]
    }]
  }
};

// node_modules/@spartacus/asm/fesm2022/spartacus-asm-customer-360-occ.mjs
var OccAsmCustomer360Adapter = class _OccAsmCustomer360Adapter {
  constructor(http, occEndpointsService, converterService, baseSiteService) {
    this.http = http;
    this.occEndpointsService = occEndpointsService;
    this.converterService = converterService;
    this.baseSiteService = baseSiteService;
    this.logger = inject(LoggerService);
    this.baseSiteService.getActive().subscribe((value) => this.activeBaseSite = value);
  }
  getHeaders() {
    return InterceptorUtil.createHeader(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, true, new HttpHeaders());
  }
  getAsmCustomer360Data(request) {
    const headers = InterceptorUtil.createHeader(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, true, new HttpHeaders());
    const url = this.occEndpointsService.buildUrl("asmCustomer360", {
      urlParams: {
        baseSiteId: this.activeBaseSite,
        userId: request.options.userId ?? ""
      }
    }, {
      baseSite: false,
      prefix: false
    });
    const requestBody = {
      customer360Queries: request.queries
    };
    return this.http.post(url, requestBody, {
      headers
    }).pipe(catchError((error) => throwError(tryNormalizeHttpError(error, this.logger))), this.converterService.pipeable(ASM_CUSTOMER_360_NORMALIZER));
  }
  static {
    this.ɵfac = function OccAsmCustomer360Adapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccAsmCustomer360Adapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService), ɵɵinject(BaseSiteService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccAsmCustomer360Adapter,
      factory: _OccAsmCustomer360Adapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccAsmCustomer360Adapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }, {
    type: BaseSiteService
  }], null);
})();
var defaultOccAsmCustomer360Config = {
  backend: {
    occ: {
      endpoints: {
        asmCustomer360: "/assistedservicewebservices/${baseSiteId}/users/${userId}/customer360"
      }
    }
  }
};
var AsmCustomer360OccModule = class _AsmCustomer360OccModule {
  static {
    this.ɵfac = function AsmCustomer360OccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360OccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCustomer360OccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccAsmCustomer360Config), {
        provide: AsmCustomer360Adapter,
        useClass: OccAsmCustomer360Adapter
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360OccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccAsmCustomer360Config), {
        provide: AsmCustomer360Adapter,
        useClass: OccAsmCustomer360Adapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/asm/fesm2022/spartacus-asm-customer-360.mjs
var AsmCustomer360Module = class _AsmCustomer360Module {
  static {
    this.ɵfac = function AsmCustomer360Module_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360Module)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCustomer360Module,
      imports: [AsmCustomer360CoreModule, AsmCustomer360OccModule, AsmCustomer360ComponentsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultAsmCustomer360Config)],
      imports: [AsmCustomer360CoreModule, AsmCustomer360OccModule, AsmCustomer360ComponentsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360Module, [{
    type: NgModule,
    args: [{
      imports: [AsmCustomer360CoreModule, AsmCustomer360OccModule, AsmCustomer360ComponentsModule],
      providers: [provideDefaultConfig(defaultAsmCustomer360Config)]
    }]
  }], null, null);
})();
export {
  AsmCustomer360Module
};
//# sourceMappingURL=@spartacus_asm_customer-360.js.map
