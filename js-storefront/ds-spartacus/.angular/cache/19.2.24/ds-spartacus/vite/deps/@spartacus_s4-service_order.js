import {
  CancelServiceOrderFacade,
  CheckoutServiceSchedulePickerService,
  RescheduleServiceOrderFacade,
  S4ServiceDeliveryModeConfig
} from "./chunk-UDGQ46WQ.js";
import {
  OrderDetailActionsComponent,
  OrderDetailsService,
  OrderOverviewComponentService
} from "./chunk-ODL34PK5.js";
import "./chunk-22AER76T.js";
import "./chunk-DM7JC3BZ.js";
import "./chunk-KW2L2NIV.js";
import "./chunk-OKYVL3N7.js";
import "./chunk-X6DUCLWC.js";
import {
  OrderHistoryFacade,
  OrderOutlets
} from "./chunk-UIW5AQFA.js";
import "./chunk-ZPMY6JFV.js";
import "./chunk-Q7WXRDFA.js";
import "./chunk-YJXUXPBZ.js";
import "./chunk-P4IPRL4B.js";
import "./chunk-OOT34BER.js";
import {
  CartOutlets
} from "./chunk-KEAKWHYV.js";
import {
  BtnLikeLinkDirective,
  BtnLikeLinkModule,
  CardComponent,
  CardModule,
  DatePickerComponent,
  DatePickerModule,
  FormRequiredAsterisksComponent,
  FormRequiredLegendComponent,
  IconModule,
  OutletContextData,
  OutletDirective,
  OutletModule,
  PromotionsModule,
  SpinnerModule,
  provideOutlet
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  AuthGuard,
  CxDatePipe,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  LoggerService,
  OccEndpointsService,
  RoutingService,
  SemanticPathService,
  TranslatePipe,
  TranslationService,
  UrlModule,
  UrlPipe,
  UserIdService,
  provideDefaultConfig,
  tryNormalizeHttpError
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-EBCNDD52.js";
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
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  NgModule,
  Optional,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  Subject,
  catchError,
  combineLatest,
  map,
  mergeMap,
  takeUntil,
  tap,
  throwError
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/s4-service/fesm2022/spartacus-s4-service-order.mjs
function ServiceDetailsCardComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-card", 1);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(2, 1, ctx_r0.getServiceDetailsCard(ctx_r0.order.servicedAt)));
  }
}
var _c0 = (a0) => ({
  items: a0,
  readonly: true
});
function CancelServiceOrderHeadlineComponent_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "h3", 4);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 5)(5, "table", 6)(6, "thead", 7)(7, "tr")(8, "th");
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "th");
    ɵɵtext(12);
    ɵɵpipe(13, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(14, "th");
    ɵɵtext(15);
    ɵɵpipe(16, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementStart(17, "tbody", 8)(18, "tr", 9)(19, "td");
    ɵɵtext(20);
    ɵɵpipe(21, "date");
    ɵɵelementEnd();
    ɵɵelementStart(22, "td");
    ɵɵtext(23);
    ɵɵpipe(24, "date");
    ɵɵelementEnd();
    ɵɵelementStart(25, "td");
    ɵɵtext(26);
    ɵɵelementEnd()()()()()();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 7, "cancelService.Services"));
    ɵɵadvance(7);
    ɵɵtextInterpolate(ɵɵpipeBind1(10, 9, "cancelService.ServiceDate"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(13, 11, "cancelService.ServiceTime"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(16, 13, "cancelService.ServiceLocation"));
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind2(21, 15, order_r1.servicedAt, "MM/dd/yyyy"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind2(24, 18, order_r1.servicedAt, "HH:mm"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(order_r1.deliveryAddress == null ? null : order_r1.deliveryAddress.town);
  }
}
function CancelServiceOrderHeadlineComponent_ng_container_4_ng_container_2_ng_template_1_Template(rf, ctx) {
}
function CancelServiceOrderHeadlineComponent_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CancelServiceOrderHeadlineComponent_ng_container_4_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("cxOutlet", ctx_r1.CartOutlets.CART_ITEM_LIST)("cxOutletContext", ɵɵpureFunction1(2, _c0, order_r1.entries));
  }
}
function CancelServiceOrderHeadlineComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CancelServiceOrderHeadlineComponent_ng_container_4_div_1_Template, 27, 21, "div", 2)(2, CancelServiceOrderHeadlineComponent_ng_container_4_ng_container_2_Template, 2, 4, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r1.entries == null ? null : order_r1.entries.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r1.entries == null ? null : order_r1.entries.length);
  }
}
var _c1 = (a0) => ({
  count: a0
});
var _c2 = (a0) => ({
  cxRoute: "orderDetails",
  params: a0
});
function CancelServiceOrderComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 10);
    ɵɵpipe(1, "cxUrl");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r1 = ctx.ngIf;
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 2, ɵɵpureFunction1(6, _c2, order_r1)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "common.back"), " ");
  }
}
function RescheduleServiceOrderComponent_select_26_option_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const time_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("value", time_r3)("selected", ((tmp_5_0 = ctx_r1.form.get("scheduleTime")) == null ? null : tmp_5_0.value) === time_r3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", time_r3, " ");
  }
}
function RescheduleServiceOrderComponent_select_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "select", 17);
    ɵɵlistener("change", function RescheduleServiceOrderComponent_select_26_Template_select_change_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setScheduleTime($event));
    });
    ɵɵtemplate(1, RescheduleServiceOrderComponent_select_26_option_1_Template, 2, 3, "option", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const scheduleTimes_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngForOf", scheduleTimes_r4);
  }
}
function RescheduleServiceOrderComponent_29_ng_template_0_Template(rf, ctx) {
}
function RescheduleServiceOrderComponent_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RescheduleServiceOrderComponent_29_ng_template_0_Template, 0, 0, "ng-template", 20);
  }
  if (rf & 2) {
    const order_r5 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("cxOutlet", ctx_r1.CartOutlets.CART_ITEM_LIST)("cxOutletContext", ɵɵpureFunction1(2, _c0, order_r5.entries));
  }
}
function RescheduleServiceOrderComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 21);
    ɵɵpipe(1, "cxUrl");
    ɵɵpipe(2, "cxTranslate");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r6 = ctx.ngIf;
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 3, ɵɵpureFunction1(9, _c2, order_r6)));
    ɵɵattribute("aria-label", ɵɵpipeBind1(2, 5, "rescheduleService.backButtonLabel"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 7, "rescheduleService.backButtonLabel"), " ");
  }
}
var _c3 = (a0) => ({
  cxRoute: "orderCancel",
  params: a0
});
var _c4 = (a0) => ({
  cxRoute: "orderReturn",
  params: a0
});
var _c5 = (a0) => ({
  cxRoute: "cancelServiceDetails",
  params: a0
});
var _c6 = (a0) => ({
  cxRoute: "rescheduleServiceDetails",
  params: a0
});
function S4ServiceOrderDetailActionsComponent_ng_container_0_a_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 10);
    ɵɵpipe(1, "cxUrl");
    ɵɵpipe(2, "cxTranslate");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext().ngIf;
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 3, ɵɵpureFunction1(9, _c3, order_r1)));
    ɵɵattribute("aria-label", ɵɵpipeBind1(2, 5, "myAccountV2OrderDetails.cancelItems"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 7, "myAccountV2OrderDetails.cancelItems"), " ");
  }
}
function S4ServiceOrderDetailActionsComponent_ng_container_0_a_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 11);
    ɵɵpipe(1, "cxUrl");
    ɵɵpipe(2, "cxTranslate");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext().ngIf;
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 3, ɵɵpureFunction1(9, _c4, order_r1)));
    ɵɵattribute("aria-label", ɵɵpipeBind1(2, 5, "myAccountV2OrderDetails.returnItems"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 7, "myAccountV2OrderDetails.returnItems"), " ");
  }
}
function S4ServiceOrderDetailActionsComponent_ng_container_0_a_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 12);
    ɵɵpipe(1, "cxUrl");
    ɵɵpipe(2, "cxTranslate");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext().ngIf;
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 3, ɵɵpureFunction1(9, _c5, order_r1)));
    ɵɵattribute("aria-label", ɵɵpipeBind1(2, 5, "cancelService.action"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 7, "cancelService.action"), " ");
  }
}
function S4ServiceOrderDetailActionsComponent_ng_container_0_a_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 13);
    ɵɵpipe(1, "cxUrl");
    ɵɵpipe(2, "cxTranslate");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext().ngIf;
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 3, ɵɵpureFunction1(9, _c6, order_r1)));
    ɵɵattribute("aria-label", ɵɵpipeBind1(2, 5, "rescheduleService.actionButtonLabel"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 7, "rescheduleService.actionButtonLabel"), " ");
  }
}
function S4ServiceOrderDetailActionsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "span", 3);
    ɵɵtemplate(4, S4ServiceOrderDetailActionsComponent_ng_container_0_a_4_Template, 5, 11, "a", 4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "span", 3);
    ɵɵtemplate(6, S4ServiceOrderDetailActionsComponent_ng_container_0_a_6_Template, 5, 11, "a", 5);
    ɵɵelementEnd();
    ɵɵelementStart(7, "span", 6);
    ɵɵtemplate(8, S4ServiceOrderDetailActionsComponent_ng_container_0_a_8_Template, 5, 11, "a", 7);
    ɵɵelementEnd();
    ɵɵelementStart(9, "span", 8);
    ɵɵtemplate(10, S4ServiceOrderDetailActionsComponent_ng_container_0_a_10_Template, 5, 11, "a", 9);
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ctx.ngIf;
    ɵɵadvance(4);
    ɵɵproperty("ngIf", order_r1.cancellable);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", order_r1.returnable);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", order_r1.serviceCancellable);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", order_r1.serviceReschedulable);
  }
}
var ServiceDetailsCardComponent = class _ServiceDetailsCardComponent {
  constructor() {
    this.translationService = inject(TranslationService);
    this.checkoutServiceSchedulePickerService = inject(CheckoutServiceSchedulePickerService);
    this.orderOutlet = inject(OutletContextData);
    this.subscription = new Subscription();
  }
  ngOnInit() {
    if (this.orderOutlet?.context$) {
      this.subscription.add(this.orderOutlet.context$.subscribe((context) => this.order = context?.item));
    }
  }
  showServiceDetails() {
    let hasService = false;
    const deliveryEntries = this.order.entries?.filter((entry) => entry.deliveryPointOfService === void 0) || [];
    deliveryEntries.forEach((entry) => {
      if (entry.product?.productTypes === "SERVICE") {
        hasService = true;
      }
    });
    return hasService;
  }
  getServiceDetailsCard(scheduledAt) {
    return this.translationService.translate("serviceOrderCheckout.serviceDetails").pipe(map((textTitle) => {
      if (scheduledAt) {
        scheduledAt = this.checkoutServiceSchedulePickerService.convertDateTimeToReadableString(scheduledAt);
      }
      return {
        title: textTitle,
        textBold: scheduledAt?.split(",")[0],
        text: [scheduledAt?.split(",")[1].trim() ?? ""]
      };
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function ServiceDetailsCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServiceDetailsCardComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ServiceDetailsCardComponent,
      selectors: [["cx-card-service-details"]],
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "content"]],
      template: function ServiceDetailsCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ServiceDetailsCardComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.showServiceDetails());
        }
      },
      dependencies: [CardComponent, NgIf, AsyncPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceDetailsCardComponent, [{
    type: Component,
    args: [{
      selector: "cx-card-service-details",
      standalone: false,
      template: '<ng-container *ngIf="showServiceDetails()">\n  <cx-card\n    [content]="getServiceDetailsCard(order.servicedAt) | async"\n  ></cx-card>\n</ng-container>\n'
    }]
  }], null, {
    orderOutlet: [{
      type: Optional
    }]
  });
})();
var ServiceOrderOverviewComponentService = class _ServiceOrderOverviewComponentService extends OrderOverviewComponentService {
  constructor() {
    super(...arguments);
    this.config = inject(S4ServiceDeliveryModeConfig);
  }
  shouldShowDeliveryMode(mode) {
    return mode?.code === this.config.s4ServiceDeliveryMode?.code ? false : super.shouldShowDeliveryMode(mode);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵServiceOrderOverviewComponentService_BaseFactory;
      return function ServiceOrderOverviewComponentService_Factory(__ngFactoryType__) {
        return (ɵServiceOrderOverviewComponentService_BaseFactory || (ɵServiceOrderOverviewComponentService_BaseFactory = ɵɵgetInheritedFactory(_ServiceOrderOverviewComponentService)))(__ngFactoryType__ || _ServiceOrderOverviewComponentService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ServiceOrderOverviewComponentService,
      factory: _ServiceOrderOverviewComponentService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceOrderOverviewComponentService, [{
    type: Injectable
  }], null, null);
})();
var ServiceDetailsCardModule = class _ServiceDetailsCardModule {
  static {
    this.ɵfac = function ServiceDetailsCardModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServiceDetailsCardModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ServiceDetailsCardModule,
      declarations: [ServiceDetailsCardComponent],
      imports: [CardModule, CommonModule, I18nModule],
      exports: [ServiceDetailsCardComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [ServiceOrderOverviewComponentService, {
        provide: OrderOverviewComponentService,
        useExisting: ServiceOrderOverviewComponentService
      }, provideOutlet({
        id: OrderOutlets.SERVICE_DETAILS,
        component: ServiceDetailsCardComponent
      })],
      imports: [CardModule, CommonModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceDetailsCardModule, [{
    type: NgModule,
    args: [{
      imports: [CardModule, CommonModule, I18nModule],
      providers: [ServiceOrderOverviewComponentService, {
        provide: OrderOverviewComponentService,
        useExisting: ServiceOrderOverviewComponentService
      }, provideOutlet({
        id: OrderOutlets.SERVICE_DETAILS,
        component: ServiceDetailsCardComponent
      })],
      exports: [ServiceDetailsCardComponent],
      declarations: [ServiceDetailsCardComponent]
    }]
  }], null, null);
})();
var CancelServiceOrderHeadlineComponent = class _CancelServiceOrderHeadlineComponent {
  constructor() {
    this.orderDetailsService = inject(OrderDetailsService);
    this.order$ = this.orderDetailsService.getOrderDetails().pipe(map((order) => __spreadProps(__spreadValues({}, order), {
      entries: (order.entries || []).filter((entry) => entry.product && entry.product.productTypes === "SERVICE")
    })));
    this.CartOutlets = CartOutlets;
  }
  static {
    this.ɵfac = function CancelServiceOrderHeadlineComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CancelServiceOrderHeadlineComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CancelServiceOrderHeadlineComponent,
      selectors: [["cx-cancel-service-order-headline"]],
      standalone: false,
      decls: 6,
      vars: 9,
      consts: [[1, "cx-checkout-title", "d-none", "d-lg-block", "d-xl-block", "text-center"], [4, "ngIf"], ["class", "mt-3 mb-3 service-table", 4, "ngIf"], [1, "mt-3", "mb-3", "service-table"], [1, "service-header"], [1, "m-4"], [1, "table", "table-bordered", "border-0"], [1, "thead-padding"], [1, "tbody-padding"], [1, "service-row"], [3, "cxOutlet", "cxOutletContext"]],
      template: function CancelServiceOrderHeadlineComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "p", 0);
          ɵɵpipe(1, "cxTranslate");
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd();
          ɵɵtemplate(4, CancelServiceOrderHeadlineComponent_ng_container_4_Template, 3, 2, "ng-container", 1);
          ɵɵpipe(5, "async");
        }
        if (rf & 2) {
          ɵɵattribute("aria-label", ɵɵpipeBind1(1, 3, "cancelService.heading"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, "cancelService.heading"), "\n");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(5, 7, ctx.order$));
        }
      },
      dependencies: [NgIf, OutletDirective, AsyncPipe, DatePipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelServiceOrderHeadlineComponent, [{
    type: Component,
    args: [{
      selector: "cx-cancel-service-order-headline",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<p
  class="cx-checkout-title d-none d-lg-block d-xl-block text-center"
  [attr.aria-label]="'cancelService.heading' | cxTranslate"
>
  {{ 'cancelService.heading' | cxTranslate }}
</p>

<ng-container *ngIf="order$ | async as order">
  <div class="mt-3 mb-3 service-table" *ngIf="order.entries?.length">
    <h3 class="service-header">{{ 'cancelService.Services' | cxTranslate }}</h3>
    <div class="m-4">
      <table class="table table-bordered border-0">
        <thead class="thead-padding">
          <tr>
            <th>{{ 'cancelService.ServiceDate' | cxTranslate }}</th>
            <th>{{ 'cancelService.ServiceTime' | cxTranslate }}</th>
            <th>{{ 'cancelService.ServiceLocation' | cxTranslate }}</th>
          </tr>
        </thead>
        <tbody class="tbody-padding">
          <tr class="service-row">
            <td>{{ order.servicedAt | date: 'MM/dd/yyyy' }}</td>
            <td>{{ order.servicedAt | date: 'HH:mm' }}</td>
            <td>{{ order.deliveryAddress?.town }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <ng-container *ngIf="order.entries?.length">
    <ng-template
      [cxOutlet]="CartOutlets.CART_ITEM_LIST"
      [cxOutletContext]="{
        items: order.entries,
        readonly: true,
      }"
    >
    </ng-template>
  </ng-container>
</ng-container>
`
    }]
  }], null, null);
})();
var CancelServiceOrderHeadlineModule = class _CancelServiceOrderHeadlineModule {
  static {
    this.ɵfac = function CancelServiceOrderHeadlineModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CancelServiceOrderHeadlineModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CancelServiceOrderHeadlineModule,
      declarations: [CancelServiceOrderHeadlineComponent],
      imports: [CommonModule, RouterModule, I18nModule, CardModule, UrlModule, PromotionsModule, IconModule, OutletModule],
      exports: [CancelServiceOrderHeadlineComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CancelServiceOrderHeadline: {
            component: CancelServiceOrderHeadlineComponent,
            guards: [AuthGuard]
          }
        }
      })],
      imports: [CommonModule, RouterModule, I18nModule, CardModule, UrlModule, PromotionsModule, IconModule, OutletModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelServiceOrderHeadlineModule, [{
    type: NgModule,
    args: [{
      declarations: [CancelServiceOrderHeadlineComponent],
      imports: [CommonModule, RouterModule, I18nModule, CardModule, UrlModule, PromotionsModule, IconModule, OutletModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CancelServiceOrderHeadline: {
            component: CancelServiceOrderHeadlineComponent,
            guards: [AuthGuard]
          }
        }
      })],
      exports: [CancelServiceOrderHeadlineComponent]
    }]
  }], null, null);
})();
var CancelServiceOrderComponent = class _CancelServiceOrderComponent {
  constructor() {
    this.orderDetailsService = inject(OrderDetailsService);
    this.cancelServiceOrderFacade = inject(CancelServiceOrderFacade);
    this.fb = inject(FormBuilder);
    this.globalMessageService = inject(GlobalMessageService);
    this.routingService = inject(RoutingService);
    this.order$ = this.orderDetailsService.getOrderDetails();
    this.characterLeft = 255;
    this.form = this.fb.group({
      cancelReason: [null, Validators.maxLength(255)]
    });
  }
  cancelServiceOrder() {
    const cancelReason = this.form.get("cancelReason")?.value || "";
    this.order$.pipe(mergeMap((order) => {
      if (order) {
        const cancellationDetails = {
          cancellationRequestEntryInputs: order.entries.map((entry) => ({
            orderEntryNumber: entry.entryNumber,
            quantity: entry.quantity
          })),
          cancelReason
        };
        return this.cancelServiceOrderFacade.cancelService(order.code, cancellationDetails);
      } else {
        return throwError(() => new Error("Order details are not available"));
      }
    }), mergeMap(() => this.order$), mergeMap((order) => this.routingService.go({
      cxRoute: "orderDetails",
      params: {
        code: order.code
      }
    }))).subscribe({
      next: () => {
        this.globalMessageService.add({
          key: "cancelService.cancelServiceSuccess"
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
      },
      error: () => this.onError()
    });
  }
  onError() {
    this.globalMessageService.add({
      key: "cancelService.unknownError"
    }, GlobalMessageType.MSG_TYPE_ERROR);
  }
  updateCharacterLeft() {
    const cancelReason = this.form.get("cancelReason")?.value || "";
    this.characterLeft = 255 - cancelReason.length;
  }
  static {
    this.ɵfac = function CancelServiceOrderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CancelServiceOrderComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CancelServiceOrderComponent,
      selectors: [["cx-cancel-service-order"]],
      standalone: false,
      decls: 21,
      vars: 19,
      consts: [[3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "reasonTextarea"], [1, "optional"], ["id", "reasonTextarea", "formControlName", "cancelReason", "rows", "5", 1, "form-control", 3, "input"], [1, "characters-left"], [1, "row", "mt-5"], [1, "col-xs-12", "col-md-6", "col-lg-6"], ["type", "button", "class", "btn btn-secondary btn-block back-button", 3, "routerLink", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], ["type", "button", 1, "btn", "btn-secondary", "btn-block", "back-button", 3, "routerLink"]],
      template: function CancelServiceOrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "form", 0);
          ɵɵlistener("ngSubmit", function CancelServiceOrderComponent_Template_form_ngSubmit_0_listener() {
            return ctx.cancelServiceOrder();
          });
          ɵɵelementStart(1, "div", 1)(2, "label", 2);
          ɵɵtext(3);
          ɵɵpipe(4, "cxTranslate");
          ɵɵelementStart(5, "span", 3);
          ɵɵtext(6);
          ɵɵpipe(7, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(8, "textarea", 4);
          ɵɵlistener("input", function CancelServiceOrderComponent_Template_textarea_input_8_listener() {
            return ctx.updateCharacterLeft();
          });
          ɵɵelementEnd();
          ɵɵelementStart(9, "div", 5)(10, "span");
          ɵɵtext(11);
          ɵɵpipe(12, "cxTranslate");
          ɵɵelementEnd()()();
          ɵɵelementStart(13, "div", 6)(14, "div", 7);
          ɵɵtemplate(15, CancelServiceOrderComponent_button_15_Template, 4, 8, "button", 8);
          ɵɵpipe(16, "async");
          ɵɵelementEnd();
          ɵɵelementStart(17, "div", 7)(18, "button", 9);
          ɵɵtext(19);
          ɵɵpipe(20, "cxTranslate");
          ɵɵelementEnd()()()();
        }
        if (rf & 2) {
          ɵɵproperty("formGroup", ctx.form);
          ɵɵadvance(3);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(4, 6, "cancelService.cancelReason"), " ");
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(7, 8, "cancelService.optional"));
          ɵɵadvance(5);
          ɵɵtextInterpolate(ɵɵpipeBind2(12, 10, "cancelService.charactersLeft", ɵɵpureFunction1(17, _c1, ctx.characterLeft)));
          ɵɵadvance(4);
          ɵɵproperty("ngIf", ɵɵpipeBind1(16, 13, ctx.order$));
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 15, "cancelService.SubmitRequest"), " ");
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, AsyncPipe, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelServiceOrderComponent, [{
    type: Component,
    args: [{
      selector: "cx-cancel-service-order",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<form [formGroup]="form" (ngSubmit)="cancelServiceOrder()">
  <div class="form-group">
    <label for="reasonTextarea"
      >{{ 'cancelService.cancelReason' | cxTranslate }}
      <span class="optional">{{
        'cancelService.optional' | cxTranslate
      }}</span></label
    >
    <textarea
      id="reasonTextarea"
      class="form-control"
      formControlName="cancelReason"
      rows="5"
      (input)="updateCharacterLeft()"
    ></textarea>
    <div class="characters-left">
      <span>{{
        'cancelService.charactersLeft' | cxTranslate: { count: characterLeft }
      }}</span>
    </div>
  </div>

  <div class="row mt-5">
    <div class="col-xs-12 col-md-6 col-lg-6">
      <button
        type="button"
        class="btn btn-secondary btn-block back-button"
        *ngIf="order$ | async as order"
        [routerLink]="
          {
            cxRoute: 'orderDetails',
            params: order,
          } | cxUrl
        "
      >
        {{ 'common.back' | cxTranslate }}
      </button>
    </div>
    <div class="col-xs-12 col-md-6 col-lg-6">
      <button type="submit" class="btn btn-primary btn-block">
        {{ 'cancelService.SubmitRequest' | cxTranslate }}
      </button>
    </div>
  </div>
</form>
`
    }]
  }], null, null);
})();
var ServiceOrderGuard = class _ServiceOrderGuard {
  constructor() {
    this.orderDetailsService = inject(OrderDetailsService);
    this.globalMessageService = inject(GlobalMessageService);
  }
  canActivate() {
    return this.orderDetailsService.getOrderDetails().pipe(map((orderDetails) => {
      if (orderDetails && orderDetails.serviceReschedulable) {
        return true;
      } else {
        this.globalMessageService.add({
          key: "rescheduleService.serviceNotReschedulable"
        }, GlobalMessageType.MSG_TYPE_ERROR);
        return false;
      }
    }));
  }
  static {
    this.ɵfac = function ServiceOrderGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServiceOrderGuard)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ServiceOrderGuard,
      factory: _ServiceOrderGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceOrderGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CancelServiceOrderGuard = class _CancelServiceOrderGuard {
  constructor() {
    this.orderDetailsService = inject(OrderDetailsService);
    this.router = inject(Router);
    this.semanticPathService = inject(SemanticPathService);
  }
  canActivate() {
    return this.orderDetailsService.getOrderDetails().pipe(map((orderDetails) => {
      if (orderDetails && Object.keys(orderDetails).length > 0 && orderDetails.serviceCancellable) {
        return true;
      } else {
        return this.router.parseUrl(this.semanticPathService.get("orders") ?? "");
      }
    }));
  }
  static {
    this.ɵfac = function CancelServiceOrderGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CancelServiceOrderGuard)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CancelServiceOrderGuard,
      factory: _CancelServiceOrderGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelServiceOrderGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CancelServiceOrderModule = class _CancelServiceOrderModule {
  static {
    this.ɵfac = function CancelServiceOrderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CancelServiceOrderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CancelServiceOrderModule,
      declarations: [CancelServiceOrderComponent],
      imports: [CommonModule, I18nModule, SpinnerModule, DatePickerModule, ReactiveFormsModule, UrlModule, RouterModule],
      exports: [CancelServiceOrderComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CancelServiceOrder: {
            component: CancelServiceOrderComponent,
            guards: [AuthGuard, CancelServiceOrderGuard]
          }
        }
      })],
      imports: [CommonModule, I18nModule, SpinnerModule, DatePickerModule, ReactiveFormsModule, UrlModule, RouterModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelServiceOrderModule, [{
    type: NgModule,
    args: [{
      declarations: [CancelServiceOrderComponent],
      imports: [CommonModule, I18nModule, SpinnerModule, DatePickerModule, ReactiveFormsModule, UrlModule, RouterModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CancelServiceOrder: {
            component: CancelServiceOrderComponent,
            guards: [AuthGuard, CancelServiceOrderGuard]
          }
        }
      })],
      exports: [CancelServiceOrderComponent]
    }]
  }], null, null);
})();
var RescheduleServiceOrderComponent = class _RescheduleServiceOrderComponent {
  constructor() {
    this.orderDetailsService = inject(OrderDetailsService);
    this.rescheduleServiceOrderFacade = inject(RescheduleServiceOrderFacade);
    this.routingService = inject(RoutingService);
    this.globalMessageService = inject(GlobalMessageService);
    this.fb = inject(FormBuilder);
    this.checkoutServiceSchedulePickerService = inject(CheckoutServiceSchedulePickerService);
    this.CartOutlets = CartOutlets;
    this.order$ = this.orderDetailsService.getOrderDetails().pipe(map((order) => __spreadProps(__spreadValues({}, order), {
      entries: (order.entries || []).filter((entry) => entry.product && entry.product.productTypes === "SERVICE")
    })));
    this.subscription = new Subject();
    this.minServiceDate$ = this.checkoutServiceSchedulePickerService.getMinDateForService();
    this.scheduleTimes$ = this.checkoutServiceSchedulePickerService.getScheduledServiceTimes();
    this.form = this.fb.group({
      scheduleDate: [null, Validators.required],
      scheduleTime: [null, Validators.required]
    });
  }
  ngOnInit() {
    this.order$.pipe(takeUntil(this.subscription)).subscribe((orderDetails) => {
      this.orderCode = orderDetails.code || "";
      this.initializeForm(orderDetails);
    });
  }
  initializeForm(order) {
    const servicedAt = order.servicedAt;
    if (servicedAt && servicedAt !== "") {
      const info = this.checkoutServiceSchedulePickerService.getServiceDetailsFromDateTime(servicedAt);
      this.form.patchValue({
        scheduleDate: info.date,
        scheduleTime: info.time
      });
    } else {
      combineLatest([this.minServiceDate$, this.scheduleTimes$]).subscribe(([minDate, scheduleTime]) => {
        this.form.patchValue({
          scheduleDate: minDate,
          scheduleTime: scheduleTime[0]
        });
      });
    }
  }
  setScheduleTime(event) {
    const target = event.target;
    const value = target.value;
    this.form.patchValue({
      scheduleTime: value
    });
  }
  rescheduleServiceOrder() {
    const scheduleDate = this.form?.get("scheduleDate")?.value || "";
    const scheduleTime = this.form?.get("scheduleTime")?.value || "";
    this.dateTime = this.checkoutServiceSchedulePickerService.convertToDateTime(scheduleDate, scheduleTime);
    this.rescheduleServiceOrderFacade.rescheduleService(this.orderCode, this.dateTime).subscribe({
      next: () => {
        this.routingService.go({
          cxRoute: "orderDetails",
          params: {
            code: this.orderCode
          }
        });
        this.globalMessageService.add({
          key: "rescheduleService.rescheduleSuccess"
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
      },
      error: () => {
        this.globalMessageService.add({
          key: "rescheduleService.unknownError"
        }, GlobalMessageType.MSG_TYPE_ERROR);
      }
    });
  }
  ngOnDestroy() {
    this.subscription.next();
    this.subscription.complete();
  }
  static {
    this.ɵfac = function RescheduleServiceOrderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RescheduleServiceOrderComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _RescheduleServiceOrderComponent,
      selectors: [["cx-reschedule-service-order"]],
      standalone: false,
      decls: 45,
      vars: 42,
      consts: [[3, "submit", "formGroup"], [1, "cx-reschedule-service-form-fields"], [1, "cx-section-header", "d-none", "d-lg-block", "d-xl-block"], [1, "cx-section-content"], [1, "row"], [1, "col-md-6"], [1, "label-content"], ["label", "rescheduleService.datePickerLabel", 3, "control", "min"], ["class", "form-control", "formControlName", "scheduleTime", 3, "change", 4, "ngIf"], [1, "cx-reschedule-service-details"], [4, "ngIf"], [1, "cx-reschedule-service-actions"], [1, "col-sm-12", "col-xl-6"], ["type", "button", "class", "btn btn-secondary btn-block", 3, "routerLink", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "col-12"], [1, "text-center"], ["formControlName", "scheduleTime", 1, "form-control", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"], [3, "cxOutlet", "cxOutletContext"], ["type", "button", 1, "btn", "btn-secondary", "btn-block", 3, "routerLink"]],
      template: function RescheduleServiceOrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "form", 0);
          ɵɵlistener("submit", function RescheduleServiceOrderComponent_Template_form_submit_0_listener() {
            return ctx.rescheduleServiceOrder();
          });
          ɵɵelement(1, "cx-form-required-legend");
          ɵɵelementStart(2, "div", 1)(3, "div", 2)(4, "h2");
          ɵɵtext(5);
          ɵɵpipe(6, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(7, "div", 3)(8, "p");
          ɵɵtext(9);
          ɵɵpipe(10, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(11, "div", 4)(12, "label", 5);
          ɵɵpipe(13, "cxTranslate");
          ɵɵelementStart(14, "span", 6);
          ɵɵtext(15);
          ɵɵpipe(16, "cxTranslate");
          ɵɵelement(17, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(18, "cx-date-picker", 7);
          ɵɵpipe(19, "async");
          ɵɵelementEnd();
          ɵɵelementStart(20, "label", 5);
          ɵɵpipe(21, "cxTranslate");
          ɵɵelementStart(22, "span", 6);
          ɵɵtext(23);
          ɵɵpipe(24, "cxTranslate");
          ɵɵelement(25, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵtemplate(26, RescheduleServiceOrderComponent_select_26_Template, 2, 1, "select", 8);
          ɵɵpipe(27, "async");
          ɵɵelementEnd()()()();
          ɵɵelementStart(28, "div", 9);
          ɵɵtemplate(29, RescheduleServiceOrderComponent_29_Template, 1, 4, null, 10);
          ɵɵpipe(30, "async");
          ɵɵelementEnd();
          ɵɵelementStart(31, "div", 11)(32, "div", 4)(33, "div", 12);
          ɵɵtemplate(34, RescheduleServiceOrderComponent_button_34_Template, 5, 11, "button", 13);
          ɵɵpipe(35, "async");
          ɵɵelementEnd();
          ɵɵelementStart(36, "div", 12)(37, "button", 14);
          ɵɵpipe(38, "cxTranslate");
          ɵɵtext(39);
          ɵɵpipe(40, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(41, "div", 15)(42, "p", 16);
          ɵɵtext(43);
          ɵɵpipe(44, "cxTranslate");
          ɵɵelementEnd()()()()();
        }
        if (rf & 2) {
          let tmp_6_0;
          ɵɵproperty("formGroup", ctx.form);
          ɵɵadvance(5);
          ɵɵtextInterpolate(ɵɵpipeBind1(6, 16, "rescheduleService.headerLabel"));
          ɵɵadvance(4);
          ɵɵtextInterpolate(ɵɵpipeBind1(10, 18, "rescheduleService.contentLabel"));
          ɵɵadvance(3);
          ɵɵattribute("aria-label", ɵɵpipeBind1(13, 20, "rescheduleService.datePickerLabel"));
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(16, 22, "rescheduleService.datePickerLabel"), " ");
          ɵɵadvance(3);
          ɵɵproperty("control", ctx.form.get("scheduleDate"))("min", (tmp_6_0 = ɵɵpipeBind1(19, 24, ctx.minServiceDate$)) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : void 0);
          ɵɵadvance(2);
          ɵɵattribute("aria-label", ɵɵpipeBind1(21, 26, "rescheduleService.timePickerLabel"));
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(24, 28, "rescheduleService.timePickerLabel"), " ");
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(27, 30, ctx.scheduleTimes$));
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(30, 32, ctx.order$));
          ɵɵadvance(5);
          ɵɵproperty("ngIf", ɵɵpipeBind1(35, 34, ctx.order$));
          ɵɵadvance(3);
          ɵɵproperty("disabled", !(ctx.form.valid && ctx.form.dirty));
          ɵɵattribute("aria-label", ɵɵpipeBind1(38, 36, "rescheduleService.submitButtonLabel"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(40, 38, "rescheduleService.submitButtonLabel"), " ");
          ɵɵadvance(4);
          ɵɵtextInterpolate(ɵɵpipeBind1(44, 40, "rescheduleService.note"));
        }
      },
      dependencies: [NgForOf, NgIf, OutletDirective, RouterLink, DatePickerComponent, ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RescheduleServiceOrderComponent, [{
    type: Component,
    args: [{
      selector: "cx-reschedule-service-order",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<form [formGroup]="form" (submit)="rescheduleServiceOrder()">
  <cx-form-required-legend />
  <div class="cx-reschedule-service-form-fields">
    <div class="cx-section-header d-none d-lg-block d-xl-block">
      <h2>{{ 'rescheduleService.headerLabel' | cxTranslate }}</h2>
    </div>

    <div class="cx-section-content">
      <p>{{ 'rescheduleService.contentLabel' | cxTranslate }}</p>
      <div class="row">
        <label
          class="col-md-6"
          [attr.aria-label]="'rescheduleService.datePickerLabel' | cxTranslate"
        >
          <span class="label-content">
            {{ 'rescheduleService.datePickerLabel' | cxTranslate }}
            <cx-form-required-asterisks />
          </span>
          <cx-date-picker
            [control]="$any(form.get('scheduleDate'))"
            [min]="(minServiceDate$ | async) ?? undefined"
            label="rescheduleService.datePickerLabel"
          />
        </label>

        <label
          class="col-md-6"
          [attr.aria-label]="'rescheduleService.timePickerLabel' | cxTranslate"
        >
          <span class="label-content">
            {{ 'rescheduleService.timePickerLabel' | cxTranslate }}
            <cx-form-required-asterisks />
          </span>
          <select
            *ngIf="scheduleTimes$ | async as scheduleTimes"
            class="form-control"
            formControlName="scheduleTime"
            (change)="setScheduleTime($event)"
          >
            <option
              *ngFor="let time of scheduleTimes"
              [value]="time"
              [selected]="form.get('scheduleTime')?.value === time"
            >
              {{ time }}
            </option>
          </select>
        </label>
      </div>
    </div>
  </div>

  <div class="cx-reschedule-service-details">
    <ng-template
      *ngIf="order$ | async as order"
      [cxOutlet]="CartOutlets.CART_ITEM_LIST"
      [cxOutletContext]="{
        items: order.entries,
        readonly: true,
      }"
    >
    </ng-template>
  </div>

  <div class="cx-reschedule-service-actions">
    <div class="row">
      <div class="col-sm-12 col-xl-6">
        <button
          type="button"
          class="btn btn-secondary btn-block"
          *ngIf="order$ | async as order"
          [routerLink]="
            {
              cxRoute: 'orderDetails',
              params: order,
            } | cxUrl
          "
          [attr.aria-label]="'rescheduleService.backButtonLabel' | cxTranslate"
        >
          {{ 'rescheduleService.backButtonLabel' | cxTranslate }}
        </button>
      </div>
      <div class="col-sm-12 col-xl-6">
        <button
          type="submit"
          class="btn btn-primary btn-block"
          [disabled]="!(form.valid && form.dirty)"
          [attr.aria-label]="
            'rescheduleService.submitButtonLabel' | cxTranslate
          "
        >
          {{ 'rescheduleService.submitButtonLabel' | cxTranslate }}
        </button>
      </div>
      <div class="col-12">
        <p class="text-center">{{ 'rescheduleService.note' | cxTranslate }}</p>
      </div>
    </div>
  </div>
</form>
`
    }]
  }], null, null);
})();
var RescheduleServiceOrderModule = class _RescheduleServiceOrderModule {
  static {
    this.ɵfac = function RescheduleServiceOrderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RescheduleServiceOrderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RescheduleServiceOrderModule,
      declarations: [RescheduleServiceOrderComponent],
      imports: [CommonModule, CardModule, I18nModule, OutletModule, UrlModule, RouterModule, SpinnerModule, DatePickerModule, ReactiveFormsModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      exports: [RescheduleServiceOrderComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          RescheduleServiceOrder: {
            component: RescheduleServiceOrderComponent,
            guards: [AuthGuard, ServiceOrderGuard]
          }
        }
      })],
      imports: [CommonModule, CardModule, I18nModule, OutletModule, UrlModule, RouterModule, SpinnerModule, DatePickerModule, ReactiveFormsModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RescheduleServiceOrderModule, [{
    type: NgModule,
    args: [{
      declarations: [RescheduleServiceOrderComponent],
      imports: [CommonModule, CardModule, I18nModule, OutletModule, UrlModule, RouterModule, SpinnerModule, DatePickerModule, ReactiveFormsModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          RescheduleServiceOrder: {
            component: RescheduleServiceOrderComponent,
            guards: [AuthGuard, ServiceOrderGuard]
          }
        }
      })],
      exports: [RescheduleServiceOrderComponent]
    }]
  }], null, null);
})();
var S4ServiceOrderDetailActionsComponent = class _S4ServiceOrderDetailActionsComponent extends OrderDetailActionsComponent {
  constructor() {
    super(...arguments);
    this.checkoutServiceSchedulePickerService = inject(CheckoutServiceSchedulePickerService);
    this.globalMessageService = inject(GlobalMessageService);
    this.displayActions$ = this.order$.pipe(map((order) => this.checkServiceStatus(order)));
  }
  ngOnInit() {
    this.order$.pipe(tap((order) => this.displayServiceMessage(order)));
  }
  /**
   * @deprecated since 221121.1 - Displaying the individual action buttons will depend on their boolean flags from API response.
   * Displaying notification for a service not amendable will be carried out by 'displayServiceMessage' instead.
   */
  checkServiceStatus(order) {
    if (order && order.status === "CANCELLED") {
      return false;
    } else if (order && order.servicedAt) {
      const hoursFromSchedule = this.checkoutServiceSchedulePickerService.getHoursFromServiceSchedule(order.servicedAt);
      if (hoursFromSchedule > 0 && hoursFromSchedule <= 24) {
        this.globalMessageService.add({
          key: "rescheduleService.serviceNotAmendable"
        }, GlobalMessageType.MSG_TYPE_INFO);
        return false;
      } else if (hoursFromSchedule > 24) {
        return true;
      }
    }
    return true;
  }
  displayServiceMessage(order) {
    if (order.status !== "CANCELLED" && !!order.servicedAt) {
      const hoursFromSchedule = this.checkoutServiceSchedulePickerService.getHoursFromServiceSchedule(order.servicedAt);
      if (hoursFromSchedule > 0 && hoursFromSchedule <= 24) {
        this.globalMessageService.add({
          key: "rescheduleService.serviceNotAmendable"
        }, GlobalMessageType.MSG_TYPE_INFO);
      }
    }
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵS4ServiceOrderDetailActionsComponent_BaseFactory;
      return function S4ServiceOrderDetailActionsComponent_Factory(__ngFactoryType__) {
        return (ɵS4ServiceOrderDetailActionsComponent_BaseFactory || (ɵS4ServiceOrderDetailActionsComponent_BaseFactory = ɵɵgetInheritedFactory(_S4ServiceOrderDetailActionsComponent)))(__ngFactoryType__ || _S4ServiceOrderDetailActionsComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _S4ServiceOrderDetailActionsComponent,
      selectors: [["cx-s4-service-order-detail-actions"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "cx-order-details-actions", "row", "mt-3"], [1, "col-12", "d-flex", "justify-content-end"], [1, "cx-action-button", "ml-2"], ["id", "cancel-items-btn", "class", "btn btn-secondary", "cxBtnLikeLink", "", 3, "routerLink", 4, "ngIf"], ["id", "return-items-btn", "class", "btn btn-secondary", "cxBtnLikeLink", "", 3, "routerLink", 4, "ngIf"], [1, "cx-action-button", "cancel-service-btn-container", "ml-2"], ["id", "cancel-service-btn", "class", "btn btn-secondary", "cxBtnLikeLink", "", 3, "routerLink", 4, "ngIf"], [1, "cx-action-button", "reschedule-service-btn-container", "ml-2"], ["id", "reschedule-service-btn", "class", "btn btn-secondary", "cxBtnLikeLink", "", 3, "routerLink", 4, "ngIf"], ["id", "cancel-items-btn", "cxBtnLikeLink", "", 1, "btn", "btn-secondary", 3, "routerLink"], ["id", "return-items-btn", "cxBtnLikeLink", "", 1, "btn", "btn-secondary", 3, "routerLink"], ["id", "cancel-service-btn", "cxBtnLikeLink", "", 1, "btn", "btn-secondary", 3, "routerLink"], ["id", "reschedule-service-btn", "cxBtnLikeLink", "", 1, "btn", "btn-secondary", 3, "routerLink"]],
      template: function S4ServiceOrderDetailActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, S4ServiceOrderDetailActionsComponent_ng_container_0_Template, 11, 4, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.order$));
        }
      },
      dependencies: [NgIf, RouterLink, BtnLikeLinkDirective, AsyncPipe, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(S4ServiceOrderDetailActionsComponent, [{
    type: Component,
    args: [{
      selector: "cx-s4-service-order-detail-actions",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="order$ | async as order">
  <div class="cx-order-details-actions row mt-3">
    <div class="col-12 d-flex justify-content-end">
      <span class="cx-action-button ml-2">
        <a
          id="cancel-items-btn"
          *ngIf="order.cancellable"
          [routerLink]="
            {
              cxRoute: 'orderCancel',
              params: order,
            } | cxUrl
          "
          [attr.aria-label]="
            'myAccountV2OrderDetails.cancelItems' | cxTranslate
          "
          class="btn btn-secondary"
          cxBtnLikeLink
        >
          {{ 'myAccountV2OrderDetails.cancelItems' | cxTranslate }}
        </a>
      </span>
      <span class="cx-action-button ml-2">
        <a
          id="return-items-btn"
          *ngIf="order.returnable"
          [routerLink]="
            {
              cxRoute: 'orderReturn',
              params: order,
            } | cxUrl
          "
          [attr.aria-label]="
            'myAccountV2OrderDetails.returnItems' | cxTranslate
          "
          class="btn btn-secondary"
          cxBtnLikeLink
        >
          {{ 'myAccountV2OrderDetails.returnItems' | cxTranslate }}
        </a>
      </span>
      <span class="cx-action-button cancel-service-btn-container ml-2">
        <a
          id="cancel-service-btn"
          *ngIf="order.serviceCancellable"
          [routerLink]="
            {
              cxRoute: 'cancelServiceDetails',
              params: order,
            } | cxUrl
          "
          [attr.aria-label]="'cancelService.action' | cxTranslate"
          class="btn btn-secondary"
          cxBtnLikeLink
        >
          {{ 'cancelService.action' | cxTranslate }}
        </a>
      </span>
      <span class="cx-action-button reschedule-service-btn-container ml-2">
        <a
          id="reschedule-service-btn"
          *ngIf="order.serviceReschedulable"
          [routerLink]="
            {
              cxRoute: 'rescheduleServiceDetails',
              params: order,
            } | cxUrl
          "
          [attr.aria-label]="
            'rescheduleService.actionButtonLabel' | cxTranslate
          "
          class="btn btn-secondary"
          cxBtnLikeLink
        >
          {{ 'rescheduleService.actionButtonLabel' | cxTranslate }}
        </a>
      </span>
    </div>
  </div>
</ng-container>
`
    }]
  }], null, null);
})();
var S4ServiceOrderDetailActionsModule = class _S4ServiceOrderDetailActionsModule {
  static {
    this.ɵfac = function S4ServiceOrderDetailActionsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _S4ServiceOrderDetailActionsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _S4ServiceOrderDetailActionsModule,
      declarations: [S4ServiceOrderDetailActionsComponent],
      imports: [CommonModule, I18nModule, RouterModule, UrlModule, BtnLikeLinkModule],
      exports: [S4ServiceOrderDetailActionsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          AccountOrderDetailsActionsComponent: {
            component: S4ServiceOrderDetailActionsComponent
            //guards: inherited from standard config,
          }
        }
      })],
      imports: [CommonModule, I18nModule, RouterModule, UrlModule, BtnLikeLinkModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(S4ServiceOrderDetailActionsModule, [{
    type: NgModule,
    args: [{
      declarations: [S4ServiceOrderDetailActionsComponent],
      imports: [CommonModule, I18nModule, RouterModule, UrlModule, BtnLikeLinkModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          AccountOrderDetailsActionsComponent: {
            component: S4ServiceOrderDetailActionsComponent
            //guards: inherited from standard config,
          }
        }
      })],
      exports: [S4ServiceOrderDetailActionsComponent]
    }]
  }], null, null);
})();
var S4ServiceComponentsModule = class _S4ServiceComponentsModule {
  static {
    this.ɵfac = function S4ServiceComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _S4ServiceComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _S4ServiceComponentsModule,
      imports: [ServiceDetailsCardModule, CancelServiceOrderModule, CancelServiceOrderHeadlineModule, RescheduleServiceOrderModule, S4ServiceOrderDetailActionsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ServiceDetailsCardModule, CancelServiceOrderModule, CancelServiceOrderHeadlineModule, RescheduleServiceOrderModule, S4ServiceOrderDetailActionsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(S4ServiceComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [ServiceDetailsCardModule, CancelServiceOrderModule, CancelServiceOrderHeadlineModule, RescheduleServiceOrderModule, S4ServiceOrderDetailActionsModule]
    }]
  }], null, null);
})();
var CancelServiceOrderAdapter = class {
};
var CancelServiceOrderConnector = class _CancelServiceOrderConnector {
  constructor() {
    this.cancelServiceOrderAdapter = inject(CancelServiceOrderAdapter);
  }
  cancelServiceOrder(userId, code, cancellationDetails) {
    return this.cancelServiceOrderAdapter.cancelServiceOrder(userId, code, cancellationDetails);
  }
  static {
    this.ɵfac = function CancelServiceOrderConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CancelServiceOrderConnector)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CancelServiceOrderConnector,
      factory: _CancelServiceOrderConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelServiceOrderConnector, [{
    type: Injectable
  }], null, null);
})();
var RescheduleServiceOrderAdapter = class {
};
var RescheduleServiceOrderConnector = class _RescheduleServiceOrderConnector {
  constructor() {
    this.rescheduleServiceOrderAdapter = inject(RescheduleServiceOrderAdapter);
  }
  rescheduleServiceOrder(userId, code, scheduledAt) {
    return this.rescheduleServiceOrderAdapter.rescheduleServiceOrder(userId, code, scheduledAt);
  }
  static {
    this.ɵfac = function RescheduleServiceOrderConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RescheduleServiceOrderConnector)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RescheduleServiceOrderConnector,
      factory: _RescheduleServiceOrderConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RescheduleServiceOrderConnector, [{
    type: Injectable
  }], null, null);
})();
var CancelServiceOrderService = class _CancelServiceOrderService {
  constructor() {
    this.cancelServiceOrderConnector = inject(CancelServiceOrderConnector);
    this.orderHistoryFacade = inject(OrderHistoryFacade);
    this.userIdService = inject(UserIdService);
  }
  cancelService(orderCode, cancellationDetails) {
    return this.userIdService.takeUserId().pipe(switchMap((userId) => {
      return this.cancelServiceOrderConnector.cancelServiceOrder(userId, orderCode, cancellationDetails);
    }));
  }
  loadOrderDetails() {
    return this.orderHistoryFacade.getOrderDetails();
  }
  static {
    this.ɵfac = function CancelServiceOrderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CancelServiceOrderService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CancelServiceOrderService,
      factory: _CancelServiceOrderService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelServiceOrderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RescheduleServiceOrderService = class _RescheduleServiceOrderService {
  constructor() {
    this.rescheduleServiceOrderConnector = inject(RescheduleServiceOrderConnector);
    this.userIdService = inject(UserIdService);
  }
  rescheduleService(orderCode, scheduledAt) {
    return this.userIdService.takeUserId().pipe(switchMap((userId) => {
      return this.rescheduleServiceOrderConnector.rescheduleServiceOrder(userId, orderCode, {
        scheduledAt
      });
    }));
  }
  static {
    this.ɵfac = function RescheduleServiceOrderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RescheduleServiceOrderService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RescheduleServiceOrderService,
      factory: _RescheduleServiceOrderService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RescheduleServiceOrderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var S4ServiceOrderCoreModule = class _S4ServiceOrderCoreModule {
  static {
    this.ɵfac = function S4ServiceOrderCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _S4ServiceOrderCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _S4ServiceOrderCoreModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [CxDatePipe, CancelServiceOrderService, {
        provide: CancelServiceOrderFacade,
        useExisting: CancelServiceOrderService
      }, CancelServiceOrderConnector, RescheduleServiceOrderService, {
        provide: RescheduleServiceOrderFacade,
        useExisting: RescheduleServiceOrderService
      }, RescheduleServiceOrderConnector]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(S4ServiceOrderCoreModule, [{
    type: NgModule,
    args: [{
      providers: [CxDatePipe, CancelServiceOrderService, {
        provide: CancelServiceOrderFacade,
        useExisting: CancelServiceOrderService
      }, CancelServiceOrderConnector, RescheduleServiceOrderService, {
        provide: RescheduleServiceOrderFacade,
        useExisting: RescheduleServiceOrderService
      }, RescheduleServiceOrderConnector]
    }]
  }], null, null);
})();
var CONTENT_TYPE_JSON_HEADER = {
  "Content-Type": "application/json"
};
var OccCancelServiceOrderAdapter = class _OccCancelServiceOrderAdapter {
  constructor() {
    this.http = inject(HttpClient);
    this.occEndpoints = inject(OccEndpointsService);
  }
  cancelServiceOrder(userId, code, cancellationDetails) {
    const url = this.occEndpoints.buildUrl("cancelServiceOrder", {
      urlParams: {
        userId,
        code
      }
    });
    const headers = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER));
    return this.http.post(url, cancellationDetails, {
      headers
    });
  }
  static {
    this.ɵfac = function OccCancelServiceOrderAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCancelServiceOrderAdapter)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCancelServiceOrderAdapter,
      factory: _OccCancelServiceOrderAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCancelServiceOrderAdapter, [{
    type: Injectable
  }], null, null);
})();
var OccRescheduleServiceOrderAdapter = class _OccRescheduleServiceOrderAdapter {
  constructor() {
    this.http = inject(HttpClient);
    this.logger = inject(LoggerService);
    this.occEndpoints = inject(OccEndpointsService);
  }
  rescheduleServiceOrder(userId, code, scheduledAt) {
    const url = this.occEndpoints.buildUrl("rescheduleService", {
      urlParams: {
        userId,
        code
      }
    });
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.patch(url, scheduledAt, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  static {
    this.ɵfac = function OccRescheduleServiceOrderAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccRescheduleServiceOrderAdapter)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccRescheduleServiceOrderAdapter,
      factory: _OccRescheduleServiceOrderAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccRescheduleServiceOrderAdapter, [{
    type: Injectable
  }], null, null);
})();
var s4ServiceOccEndpoints = {
  cancelServiceOrder: "users/${userId}/orders/${code}/serviceOrder/cancellation",
  rescheduleService: "users/${userId}/orders/${code}/serviceOrder/serviceScheduleSlot"
};
var defaultOccServiceOrderConfig = {
  backend: {
    occ: {
      endpoints: __spreadValues({}, s4ServiceOccEndpoints)
    }
  }
};
var S4ServiceOrderOccModule = class _S4ServiceOrderOccModule {
  static {
    this.ɵfac = function S4ServiceOrderOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _S4ServiceOrderOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _S4ServiceOrderOccModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccServiceOrderConfig), {
        provide: CancelServiceOrderAdapter,
        useClass: OccCancelServiceOrderAdapter
      }, {
        provide: RescheduleServiceOrderAdapter,
        useClass: OccRescheduleServiceOrderAdapter
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(S4ServiceOrderOccModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig(defaultOccServiceOrderConfig), {
        provide: CancelServiceOrderAdapter,
        useClass: OccCancelServiceOrderAdapter
      }, {
        provide: RescheduleServiceOrderAdapter,
        useClass: OccRescheduleServiceOrderAdapter
      }]
    }]
  }], null, null);
})();
var S4ServiceOrderModule = class _S4ServiceOrderModule {
  static {
    this.ɵfac = function S4ServiceOrderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _S4ServiceOrderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _S4ServiceOrderModule,
      imports: [S4ServiceComponentsModule, S4ServiceOrderCoreModule, S4ServiceOrderOccModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [S4ServiceComponentsModule, S4ServiceOrderCoreModule, S4ServiceOrderOccModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(S4ServiceOrderModule, [{
    type: NgModule,
    args: [{
      imports: [S4ServiceComponentsModule, S4ServiceOrderCoreModule, S4ServiceOrderOccModule]
    }]
  }], null, null);
})();
export {
  CancelServiceOrderComponent,
  CancelServiceOrderGuard,
  CancelServiceOrderHeadlineComponent,
  CancelServiceOrderHeadlineModule,
  CancelServiceOrderModule,
  RescheduleServiceOrderComponent,
  RescheduleServiceOrderModule,
  S4ServiceComponentsModule,
  S4ServiceOrderDetailActionsComponent,
  S4ServiceOrderDetailActionsModule,
  S4ServiceOrderModule,
  ServiceDetailsCardComponent,
  ServiceDetailsCardModule,
  ServiceOrderGuard,
  ServiceOrderOverviewComponentService
};
//# sourceMappingURL=@spartacus_s4-service_order.js.map
