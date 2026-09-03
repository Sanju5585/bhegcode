import {
  CartNotEmptyGuard,
  CheckoutAuthGuard,
  CheckoutPlaceOrderComponent
} from "./chunk-WVN4XMLZ.js";
import {
  CheckoutDeliveryAddressClearedEvent,
  CheckoutDeliveryAddressSetEvent,
  CheckoutDeliveryModeClearedEvent,
  CheckoutDeliveryModeSetEvent,
  CheckoutPaymentDetailsCreatedEvent,
  CheckoutPaymentDetailsSetEvent
} from "./chunk-X6DUCLWC.js";
import {
  DaysOfWeek,
  ORDER_TYPE,
  OrderFacade,
  ScheduledReplenishmentOrderFacade,
  recurrencePeriod
} from "./chunk-UIW5AQFA.js";
import "./chunk-XTCFQJ22.js";
import "./chunk-Q7WXRDFA.js";
import "./chunk-YJXUXPBZ.js";
import {
  RestoreSavedCartSuccessEvent,
  SaveCartSuccessEvent
} from "./chunk-OOT34BER.js";
import "./chunk-LZQV6UAH.js";
import {
  MergeCartSuccessEvent
} from "./chunk-KEAKWHYV.js";
import {
  AtMessageDirective,
  AtMessageModule,
  ICON_TYPE,
  IconComponent,
  IconModule,
  LAUNCH_CALLER,
  LaunchDialogService
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  EventService,
  I18nModule,
  LoginEvent,
  LogoutEvent,
  RoutingService,
  TranslatePipe,
  UrlModule,
  UrlPipe,
  provideDefaultConfig
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
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
import "./chunk-2A6OHZCE.js";
import {
  CheckboxControlValueAccessor,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  UntypedFormBuilder,
  ɵNgNoValidate
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  KeyValuePipe,
  NgForOf,
  NgIf,
  TitleCasePipe
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  NgModule,
  ViewContainerRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
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
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
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
  merge
} from "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  BehaviorSubject
} from "./chunk-R6FETK65.js";
import {
  Subscription
} from "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/checkout/fesm2022/spartacus-checkout-scheduled-replenishment-components.mjs
var _c0 = () => ({
  cxRoute: "termsAndConditions"
});
function CheckoutScheduleReplenishmentOrderComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7)(1, "input", 8);
    ɵɵpipe(2, "async");
    ɵɵlistener("change", function CheckoutScheduleReplenishmentOrderComponent_div_6_Template_input_change_1_listener() {
      const type_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.changeOrderType(type_r2.value));
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "label", 9)(4, "div", 10);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵpropertyInterpolate1("id", "orderType-", type_r2.value, "");
    ɵɵproperty("value", type_r2.value)("checked", type_r2.value === ɵɵpipeBind1(2, 7, ctx_r2.selectedOrderType$));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate1("for", "orderType-", type_r2.value, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 9, "checkoutScheduledReplenishment.orderType_" + (type_r2 == null ? null : type_r2.value)), " ");
  }
}
function CheckoutScheduleReplenishmentOrderComponent_ng_container_8_div_2_ng_container_4_option_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 26);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const nWeeks_r6 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵproperty("value", nWeeks_r6)("selected", nWeeks_r6 === ctx_r2.scheduleReplenishmentFormData.numberOfWeeks);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", nWeeks_r6, " ");
  }
}
function CheckoutScheduleReplenishmentOrderComponent_ng_container_8_div_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "select", 25);
    ɵɵlistener("change", function CheckoutScheduleReplenishmentOrderComponent_ng_container_8_div_2_ng_container_4_Template_select_change_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.changeNumberOfWeeks($event.target.value));
    });
    ɵɵtemplate(2, CheckoutScheduleReplenishmentOrderComponent_ng_container_8_div_2_ng_container_4_option_2_Template, 2, 3, "option", 16);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.numberOfWeeks);
  }
}
function CheckoutScheduleReplenishmentOrderComponent_ng_container_8_div_2_ng_template_5_option_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 26);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const nDays_r8 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵproperty("value", nDays_r8)("selected", nDays_r8 === ctx_r2.scheduleReplenishmentFormData.numberOfDays);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", nDays_r8, " ");
  }
}
function CheckoutScheduleReplenishmentOrderComponent_ng_container_8_div_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "select", 25);
    ɵɵlistener("change", function CheckoutScheduleReplenishmentOrderComponent_ng_container_8_div_2_ng_template_5_Template_select_change_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.changeNumberOfDays($event.target.value));
    });
    ɵɵtemplate(1, CheckoutScheduleReplenishmentOrderComponent_ng_container_8_div_2_ng_template_5_option_1_Template, 2, 3, "option", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.numberOfDays);
  }
}
function CheckoutScheduleReplenishmentOrderComponent_ng_container_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 22)(1, "label", 23);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(4, CheckoutScheduleReplenishmentOrderComponent_ng_container_8_div_2_ng_container_4_Template, 3, 1, "ng-container", 24)(5, CheckoutScheduleReplenishmentOrderComponent_ng_container_8_div_2_ng_template_5_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const isDaily_r9 = ɵɵreference(6);
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 3, "checkoutScheduledReplenishment.every"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.isWeekly)("ngIfElse", isDaily_r9);
  }
}
function CheckoutScheduleReplenishmentOrderComponent_ng_container_8_label_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 27);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "checkoutScheduledReplenishment.every"));
  }
}
function CheckoutScheduleReplenishmentOrderComponent_ng_container_8_label_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 27);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "checkoutScheduledReplenishment.duration"));
  }
}
function CheckoutScheduleReplenishmentOrderComponent_ng_container_8_option_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 26);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const type_r10 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("value", type_r10)("selected", type_r10 === ctx_r2.scheduleReplenishmentFormData.recurrencePeriod);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, "checkoutScheduledReplenishment.recurrencePeriodType_" + type_r10), " ");
  }
}
function CheckoutScheduleReplenishmentOrderComponent_ng_container_8_div_8_option_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 26);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const nDays_r12 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("value", nDays_r12)("selected", nDays_r12 === ctx_r2.scheduleReplenishmentFormData.nthDayOfMonth);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", nDays_r12, " ");
  }
}
function CheckoutScheduleReplenishmentOrderComponent_ng_container_8_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 28)(1, "label", 29);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 30)(5, "select", 31);
    ɵɵlistener("change", function CheckoutScheduleReplenishmentOrderComponent_ng_container_8_div_8_Template_select_change_5_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.changeDayOfTheMonth($event.target.value));
    });
    ɵɵtemplate(6, CheckoutScheduleReplenishmentOrderComponent_ng_container_8_div_8_option_6_Template, 2, 3, "option", 16);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "checkoutScheduledReplenishment.dayOfMonth"));
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", ctx_r2.numberOfDays);
  }
}
function CheckoutScheduleReplenishmentOrderComponent_ng_container_8_fieldset_15_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 35)(1, "label", 36);
    ɵɵtext(2);
    ɵɵpipe(3, "titlecase");
    ɵɵelementEnd();
    ɵɵelementStart(4, "input", 37);
    ɵɵlistener("change", function CheckoutScheduleReplenishmentOrderComponent_ng_container_8_fieldset_15_div_4_Template_input_change_4_listener($event) {
      const day_r14 = ɵɵrestoreView(_r13).$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.changeRepeatDays(day_r14, $event.target.checked));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const day_r14 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵpropertyInterpolate1("for", "day-", day_r14, "");
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 6, day_r14));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate1("id", "day-", day_r14, "");
    ɵɵproperty("checked", ctx_r2.hasDaysOfWeekChecked(day_r14));
  }
}
function CheckoutScheduleReplenishmentOrderComponent_ng_container_8_fieldset_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "fieldset", 32)(1, "legend", 33);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(4, CheckoutScheduleReplenishmentOrderComponent_ng_container_8_fieldset_15_div_4_Template, 5, 8, "div", 34);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "checkoutScheduledReplenishment.repeatOnDays"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.daysOfWeek);
  }
}
function CheckoutScheduleReplenishmentOrderComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 11);
    ɵɵtemplate(2, CheckoutScheduleReplenishmentOrderComponent_ng_container_8_div_2_Template, 7, 5, "div", 12);
    ɵɵelementStart(3, "div", 13);
    ɵɵtemplate(4, CheckoutScheduleReplenishmentOrderComponent_ng_container_8_label_4_Template, 3, 3, "label", 14)(5, CheckoutScheduleReplenishmentOrderComponent_ng_container_8_label_5_Template, 3, 3, "label", 14);
    ɵɵelementStart(6, "select", 15);
    ɵɵlistener("change", function CheckoutScheduleReplenishmentOrderComponent_ng_container_8_Template_select_change_6_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.changeRecurrencePeriodType($event.target.value));
    });
    ɵɵtemplate(7, CheckoutScheduleReplenishmentOrderComponent_ng_container_8_option_7_Template, 3, 5, "option", 16);
    ɵɵelementEnd()();
    ɵɵtemplate(8, CheckoutScheduleReplenishmentOrderComponent_ng_container_8_div_8_Template, 7, 4, "div", 17);
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 11)(10, "label", 18);
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(13, "div", 19)(14, "input", 20);
    ɵɵlistener("change", function CheckoutScheduleReplenishmentOrderComponent_ng_container_8_Template_input_change_14_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.changeReplenishmentStartDate($event.target.value));
    });
    ɵɵelementEnd()()();
    ɵɵtemplate(15, CheckoutScheduleReplenishmentOrderComponent_ng_container_8_fieldset_15_Template, 5, 4, "fieldset", 21);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.isMonthly);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.isMonthly);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isMonthly);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.recurrencePeriodType);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isMonthly);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(12, 8, "checkoutScheduledReplenishment.startOn"));
    ɵɵadvance(3);
    ɵɵproperty("value", ctx_r2.currentDate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isWeekly);
  }
}
var CheckoutReplenishmentFormService = class _CheckoutReplenishmentFormService {
  constructor(eventService) {
    this.eventService = eventService;
    this.subscriptions = new Subscription();
    this.defaultFormData = {
      daysOfWeek: [DaysOfWeek.MONDAY],
      nthDayOfMonth: "1",
      numberOfDays: "14",
      numberOfWeeks: "1",
      recurrencePeriod: recurrencePeriod.DAILY,
      replenishmentStartDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    };
    this.scheduleReplenishmentFormData$ = new BehaviorSubject(this.defaultFormData);
    this.orderType$ = new BehaviorSubject(ORDER_TYPE.PLACE_ORDER);
    this.registerOrderTypeEventListers();
  }
  registerOrderTypeEventListers() {
    this.subscriptions.add(merge(this.eventService.get(CheckoutDeliveryAddressSetEvent), this.eventService.get(CheckoutDeliveryAddressClearedEvent), this.eventService.get(CheckoutDeliveryModeSetEvent), this.eventService.get(CheckoutDeliveryModeClearedEvent), this.eventService.get(CheckoutPaymentDetailsCreatedEvent), this.eventService.get(CheckoutPaymentDetailsSetEvent), this.eventService.get(LogoutEvent), this.eventService.get(LoginEvent), this.eventService.get(SaveCartSuccessEvent), this.eventService.get(RestoreSavedCartSuccessEvent), this.eventService.get(MergeCartSuccessEvent)).subscribe(() => {
      this.orderType$.next(ORDER_TYPE.PLACE_ORDER);
    }));
  }
  /**
   * Get replenishment form data
   */
  getScheduleReplenishmentFormData() {
    return this.scheduleReplenishmentFormData$;
  }
  /**
   * Set replenishment form data
   * @param formData : an object containing the data for scheduling a replenishment order
   */
  setScheduleReplenishmentFormData(formData) {
    this.scheduleReplenishmentFormData$.next(formData);
  }
  /**
   * Clears the existing replenishment form data to include the default replenishment form data
   */
  resetScheduleReplenishmentFormData() {
    this.scheduleReplenishmentFormData$.next(this.defaultFormData);
  }
  /**
   * Get current checkout order type
   */
  getOrderType() {
    return this.orderType$;
  }
  /**
   * Set checkout order type
   * @param orderType : an enum of types of order we are placing
   */
  setOrderType(orderType) {
    this.orderType$.next(orderType);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function CheckoutReplenishmentFormService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutReplenishmentFormService)(ɵɵinject(EventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutReplenishmentFormService,
      factory: _CheckoutReplenishmentFormService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutReplenishmentFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }], null);
})();
var CheckoutScheduledReplenishmentPlaceOrderComponent = class _CheckoutScheduledReplenishmentPlaceOrderComponent extends CheckoutPlaceOrderComponent {
  constructor(orderFacade, routingService, fb, launchDialogService, vcr, checkoutReplenishmentFormService, scheduledReplenishmentOrderFacade) {
    super(orderFacade, routingService, fb, launchDialogService, vcr);
    this.orderFacade = orderFacade;
    this.routingService = routingService;
    this.fb = fb;
    this.launchDialogService = launchDialogService;
    this.vcr = vcr;
    this.checkoutReplenishmentFormService = checkoutReplenishmentFormService;
    this.scheduledReplenishmentOrderFacade = scheduledReplenishmentOrderFacade;
    this.subscriptions = new Subscription();
    this.daysOfWeekNotChecked$ = new BehaviorSubject(false);
  }
  submitForm() {
    if (this.checkoutSubmitForm.valid && !!this.currentOrderType) {
      this.placedOrder = this.launchDialogService.launch(LAUNCH_CALLER.PLACE_ORDER_SPINNER, this.vcr);
      merge(this.currentOrderType === ORDER_TYPE.PLACE_ORDER ? this.orderFacade.placeOrder(this.checkoutSubmitForm.valid) : this.scheduledReplenishmentOrderFacade.scheduleReplenishmentOrder(this.scheduleReplenishmentFormData, this.checkoutSubmitForm.valid)).subscribe({
        error: () => {
          if (this.placedOrder) {
            this.placedOrder.subscribe((component) => {
              this.launchDialogService.clear(LAUNCH_CALLER.PLACE_ORDER_SPINNER);
              if (component) {
                component.destroy();
              }
            }).unsubscribe();
          }
        },
        next: () => {
          this.onSuccess();
        }
      });
    } else {
      this.checkoutSubmitForm.markAllAsTouched();
    }
  }
  ngOnInit() {
    this.subscriptions.add(this.checkoutReplenishmentFormService.getOrderType().subscribe((orderType) => this.currentOrderType = orderType));
    this.subscriptions.add(this.checkoutReplenishmentFormService.getScheduleReplenishmentFormData().subscribe((data) => {
      this.scheduleReplenishmentFormData = data;
      this.daysOfWeekNotChecked$.next(data.daysOfWeek?.length === 0 && data.recurrencePeriod === recurrencePeriod.WEEKLY);
    }));
  }
  onSuccess() {
    switch (this.currentOrderType) {
      case ORDER_TYPE.PLACE_ORDER: {
        super.onSuccess();
        break;
      }
      case ORDER_TYPE.SCHEDULE_REPLENISHMENT_ORDER: {
        this.routingService.go({
          cxRoute: "replenishmentConfirmation"
        });
        break;
      }
    }
    this.checkoutReplenishmentFormService.resetScheduleReplenishmentFormData();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    super.ngOnDestroy();
  }
  static {
    this.ɵfac = function CheckoutScheduledReplenishmentPlaceOrderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutScheduledReplenishmentPlaceOrderComponent)(ɵɵdirectiveInject(OrderFacade), ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(UntypedFormBuilder), ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(CheckoutReplenishmentFormService), ɵɵdirectiveInject(ScheduledReplenishmentOrderFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutScheduledReplenishmentPlaceOrderComponent,
      selectors: [["cx-place-order"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 16,
      vars: 20,
      consts: [[1, "cx-place-order-form", "form-check", 3, "formGroup"], [1, "form-group"], ["formControlName", "termsAndConditions", "type", "checkbox", 1, "scaled-input", "form-check-input"], [1, "form-check-label"], ["target", "_blank", "rel", "noopener noreferrer", 1, "cx-tc-link", 3, "routerLink"], [1, "btn", "btn-primary", "btn-block", 3, "click", "disabled", "cxAtMessage"]],
      template: function CheckoutScheduledReplenishmentPlaceOrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "form", 0)(1, "div", 1)(2, "label");
          ɵɵelement(3, "input", 2);
          ɵɵelementStart(4, "span", 3);
          ɵɵtext(5);
          ɵɵpipe(6, "cxTranslate");
          ɵɵelementStart(7, "a", 4);
          ɵɵpipe(8, "cxUrl");
          ɵɵtext(9);
          ɵɵpipe(10, "cxTranslate");
          ɵɵelementEnd()()()();
          ɵɵelementStart(11, "button", 5);
          ɵɵpipe(12, "async");
          ɵɵpipe(13, "cxTranslate");
          ɵɵlistener("click", function CheckoutScheduledReplenishmentPlaceOrderComponent_Template_button_click_11_listener() {
            return ctx.submitForm();
          });
          ɵɵtext(14);
          ɵɵpipe(15, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("formGroup", ctx.checkoutSubmitForm);
          ɵɵadvance(5);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 7, "checkoutReview.confirmThatRead"), " ");
          ɵɵadvance(2);
          ɵɵproperty("routerLink", ɵɵpipeBind1(8, 9, ɵɵpureFunction0(19, _c0)));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 11, "checkoutReview.termsAndConditions"), " ");
          ɵɵadvance(2);
          ɵɵproperty("disabled", ctx.termsAndConditionInvalid || ɵɵpipeBind1(12, 13, ctx.daysOfWeekNotChecked$))("cxAtMessage", ɵɵpipeBind1(13, 15, "checkoutReview.orderInProcess"));
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 17, "checkoutReview.placeOrder"), " ");
        }
      },
      dependencies: [AtMessageDirective, RouterLink, ɵNgNoValidate, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutScheduledReplenishmentPlaceOrderComponent, [{
    type: Component,
    args: [{
      selector: "cx-place-order",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<form class="cx-place-order-form form-check" [formGroup]="checkoutSubmitForm">
  <div class="form-group">
    <label>
      <input
        formControlName="termsAndConditions"
        class="scaled-input form-check-input"
        type="checkbox"
      />
      <span class="form-check-label">
        {{ 'checkoutReview.confirmThatRead' | cxTranslate }}
        <a
          [routerLink]="{ cxRoute: 'termsAndConditions' } | cxUrl"
          class="cx-tc-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ 'checkoutReview.termsAndConditions' | cxTranslate }}
        </a>
      </span>
    </label>
  </div>

  <button
    (click)="submitForm()"
    class="btn btn-primary btn-block"
    [disabled]="termsAndConditionInvalid || (daysOfWeekNotChecked$ | async)"
    [cxAtMessage]="'checkoutReview.orderInProcess' | cxTranslate"
  >
    {{ 'checkoutReview.placeOrder' | cxTranslate }}
  </button>
</form>
`
    }]
  }], () => [{
    type: OrderFacade
  }, {
    type: RoutingService
  }, {
    type: UntypedFormBuilder
  }, {
    type: LaunchDialogService
  }, {
    type: ViewContainerRef
  }, {
    type: CheckoutReplenishmentFormService
  }, {
    type: ScheduledReplenishmentOrderFacade
  }], null);
})();
var CheckoutScheduledReplenishmentPlaceOrderModule = class _CheckoutScheduledReplenishmentPlaceOrderModule {
  static {
    this.ɵfac = function CheckoutScheduledReplenishmentPlaceOrderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutScheduledReplenishmentPlaceOrderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutScheduledReplenishmentPlaceOrderModule,
      declarations: [CheckoutScheduledReplenishmentPlaceOrderComponent],
      imports: [AtMessageModule, CommonModule, RouterModule, UrlModule, I18nModule, ReactiveFormsModule],
      exports: [CheckoutScheduledReplenishmentPlaceOrderComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutPlaceOrder: {
            component: CheckoutScheduledReplenishmentPlaceOrderComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      imports: [AtMessageModule, CommonModule, RouterModule, UrlModule, I18nModule, ReactiveFormsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutScheduledReplenishmentPlaceOrderModule, [{
    type: NgModule,
    args: [{
      imports: [AtMessageModule, CommonModule, RouterModule, UrlModule, I18nModule, ReactiveFormsModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutPlaceOrder: {
            component: CheckoutScheduledReplenishmentPlaceOrderComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      declarations: [CheckoutScheduledReplenishmentPlaceOrderComponent],
      exports: [CheckoutScheduledReplenishmentPlaceOrderComponent]
    }]
  }], null, null);
})();
var CheckoutScheduleReplenishmentOrderComponent = class _CheckoutScheduleReplenishmentOrderComponent {
  constructor(checkoutReplenishmentFormService) {
    this.checkoutReplenishmentFormService = checkoutReplenishmentFormService;
    this.subscription = new Subscription();
    this.iconTypes = ICON_TYPE;
    this.orderTypes = ORDER_TYPE;
    this.daysOfWeek = Object.values(DaysOfWeek);
    this.recurrencePeriodType = Object.values(recurrencePeriod);
    this.selectedOrderType$ = this.checkoutReplenishmentFormService.getOrderType();
    this.isMonthly = false;
    this.isWeekly = false;
    this.currentDaysOfWeek = [];
  }
  ngOnInit() {
    this.subscription.add(this.checkoutReplenishmentFormService.getScheduleReplenishmentFormData().subscribe((data) => {
      this.scheduleReplenishmentFormData = data;
    }));
    this.initConfig();
  }
  changeOrderType(orderType) {
    this.checkoutReplenishmentFormService.setOrderType(orderType);
  }
  changeNumberOfDays(nDays) {
    this.checkoutReplenishmentFormService.setScheduleReplenishmentFormData(__spreadProps(__spreadValues({}, this.scheduleReplenishmentFormData), {
      numberOfDays: nDays
    }));
  }
  changeNumberOfWeeks(nWeeks) {
    this.checkoutReplenishmentFormService.setScheduleReplenishmentFormData(__spreadProps(__spreadValues({}, this.scheduleReplenishmentFormData), {
      numberOfWeeks: nWeeks
    }));
  }
  changeRecurrencePeriodType(type) {
    this.isWeekly = type === recurrencePeriod.WEEKLY;
    this.isMonthly = type === recurrencePeriod.MONTHLY;
    this.numberOfDays = this.isMonthly ? this.createNumberStringArray(31) : this.createNumberStringArray(30);
    this.checkoutReplenishmentFormService.setScheduleReplenishmentFormData(__spreadProps(__spreadValues({}, this.scheduleReplenishmentFormData), {
      recurrencePeriod: type
    }));
  }
  changeDayOfTheMonth(dayOfMonth) {
    this.checkoutReplenishmentFormService.setScheduleReplenishmentFormData(__spreadProps(__spreadValues({}, this.scheduleReplenishmentFormData), {
      nthDayOfMonth: dayOfMonth
    }));
  }
  changeReplenishmentStartDate(date) {
    if (Boolean(date)) {
      this.checkoutReplenishmentFormService.setScheduleReplenishmentFormData(__spreadProps(__spreadValues({}, this.scheduleReplenishmentFormData), {
        replenishmentStartDate: date
      }));
    }
  }
  changeRepeatDays(day, isChecked) {
    if (isChecked) {
      this.currentDaysOfWeek = [...this.currentDaysOfWeek];
      this.currentDaysOfWeek.push(day);
      this.checkoutReplenishmentFormService.setScheduleReplenishmentFormData(__spreadProps(__spreadValues({}, this.scheduleReplenishmentFormData), {
        daysOfWeek: this.currentDaysOfWeek
      }));
    } else {
      const foundDay = this.currentDaysOfWeek.find((data) => day === data);
      if (!foundDay) {
        return;
      }
      const index = this.currentDaysOfWeek.indexOf(foundDay);
      this.currentDaysOfWeek.splice(index, 1);
      this.checkoutReplenishmentFormService.setScheduleReplenishmentFormData(__spreadProps(__spreadValues({}, this.scheduleReplenishmentFormData), {
        daysOfWeek: this.currentDaysOfWeek
      }));
    }
  }
  hasDaysOfWeekChecked(day) {
    return this.currentDaysOfWeek.includes(day);
  }
  initConfig() {
    this.isMonthly = this.scheduleReplenishmentFormData.recurrencePeriod === recurrencePeriod.MONTHLY;
    this.isWeekly = this.scheduleReplenishmentFormData.recurrencePeriod === recurrencePeriod.WEEKLY;
    this.currentDaysOfWeek = [...this.scheduleReplenishmentFormData.daysOfWeek ?? []];
    this.numberOfDays = this.isMonthly ? this.createNumberStringArray(31) : this.createNumberStringArray(30);
    this.numberOfWeeks = this.createNumberStringArray(12);
    this.currentDate = this.scheduleReplenishmentFormData.replenishmentStartDate;
  }
  createNumberStringArray(n) {
    return Array(n).fill(0).map((_, y) => (y + 1).toString());
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function CheckoutScheduleReplenishmentOrderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutScheduleReplenishmentOrderComponent)(ɵɵdirectiveInject(CheckoutReplenishmentFormService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutScheduleReplenishmentOrderComponent,
      selectors: [["cx-schedule-replenishment-order"]],
      standalone: false,
      decls: 10,
      vars: 11,
      consts: [["isDaily", ""], ["role", "region", 1, "cx-order-type-card"], [1, "cx-label-container"], ["id", "checkout-schedule-replenishment-order-title", 1, "cx-order-replenishment-header"], [3, "type"], ["class", "cx-order-type-container form-check", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "cx-order-type-container", "form-check"], ["role", "radio", "type", "radio", "formControlName", "orderType", "aria-checked", "true", 1, "scaled-input", "form-check-input", 3, "change", "id", "value", "checked"], [1, "order-type-label", "form-check-label", "form-radio-label", 3, "for"], [1, "order-type"], [1, "cx-replenishment-form-data-container"], ["class", "cx-days", 4, "ngIf"], [1, "cx-month"], ["class", "form-data-label", "for", "order-replenishment-recurrence-period", 4, "ngIf"], ["id", "order-replenishment-recurrence-period", 1, "form-control", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["class", "cx-dayMonth", 4, "ngIf"], ["for", "datepicker", 1, "form-data-label"], [1, "cx-replenishment-date"], ["id", "datepicker", "type", "date", "placeholder", "yyyy-mm-dd", 3, "change", "value"], ["class", "cx-replenishment-form-data-container cx-repeat-days-container", 4, "ngIf"], [1, "cx-days"], ["for", "order-replenishment-period-type", 1, "form-data-label"], [4, "ngIf", "ngIfElse"], ["id", "order-replenishment-period-type", 1, "form-control", 3, "change"], [3, "value", "selected"], ["for", "order-replenishment-recurrence-period", 1, "form-data-label"], [1, "cx-dayMonth"], ["for", "order-replenishment-day-of-month", 1, "form-data-label"], [1, "cx-day-of-month"], ["id", "order-replenishment-day-of-month", 1, "form-control", 3, "change"], [1, "cx-replenishment-form-data-container", "cx-repeat-days-container"], [1, "cx-repeat-days", "form-data-label"], ["class", "form-check", 4, "ngFor", "ngForOf"], [1, "form-check"], [1, "cx-week-day", 3, "for"], ["type", "checkbox", 1, "form-check-input", 3, "change", "id", "checked"]],
      template: function CheckoutScheduleReplenishmentOrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
          ɵɵtext(3);
          ɵɵpipe(4, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelement(5, "cx-icon", 4);
          ɵɵelementEnd();
          ɵɵtemplate(6, CheckoutScheduleReplenishmentOrderComponent_div_6_Template, 7, 11, "div", 5);
          ɵɵpipe(7, "keyvalue");
          ɵɵtemplate(8, CheckoutScheduleReplenishmentOrderComponent_ng_container_8_Template, 16, 10, "ng-container", 6);
          ɵɵpipe(9, "async");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵattribute("aria-labelledby", "checkout-schedule-replenishment-order-title");
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 5, "checkoutScheduledReplenishment.autoReplenishOrder"), " ");
          ɵɵadvance(2);
          ɵɵproperty("type", ctx.iconTypes.CLOCK);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ɵɵpipeBind1(7, 7, ctx.orderTypes));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.scheduleReplenishmentFormData && ɵɵpipeBind1(9, 9, ctx.selectedOrderType$) === ctx.orderTypes.SCHEDULE_REPLENISHMENT_ORDER);
        }
      },
      dependencies: [NgForOf, NgIf, IconComponent, AsyncPipe, TitleCasePipe, KeyValuePipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutScheduleReplenishmentOrderComponent, [{
    type: Component,
    args: [{
      selector: "cx-schedule-replenishment-order",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  class="cx-order-type-card"
  role="region"
  [attr.aria-labelledby]="'checkout-schedule-replenishment-order-title'"
>
  <div class="cx-label-container">
    <h3
      id="checkout-schedule-replenishment-order-title"
      class="cx-order-replenishment-header"
    >
      {{ 'checkoutScheduledReplenishment.autoReplenishOrder' | cxTranslate }}
    </h3>
    <cx-icon [type]="iconTypes.CLOCK"></cx-icon>
  </div>
  <div
    class="cx-order-type-container form-check"
    *ngFor="let type of orderTypes | keyvalue"
  >
    <input
      id="orderType-{{ type.value }}"
      class="scaled-input form-check-input"
      role="radio"
      type="radio"
      formControlName="orderType"
      aria-checked="true"
      (change)="changeOrderType(type.value)"
      [value]="type.value"
      [checked]="type.value === (selectedOrderType$ | async)"
    />
    <label
      class="order-type-label form-check-label form-radio-label"
      for="orderType-{{ type.value }}"
    >
      <div class="order-type">
        {{
          'checkoutScheduledReplenishment.orderType_' + type?.value
            | cxTranslate
        }}
      </div>
    </label>
  </div>
  <ng-container
    *ngIf="
      scheduleReplenishmentFormData &&
      (selectedOrderType$ | async) === orderTypes.SCHEDULE_REPLENISHMENT_ORDER
    "
  >
    <div class="cx-replenishment-form-data-container">
      <div *ngIf="!isMonthly" class="cx-days">
        <label class="form-data-label" for="order-replenishment-period-type">{{
          'checkoutScheduledReplenishment.every' | cxTranslate
        }}</label>
        <ng-container *ngIf="isWeekly; else isDaily">
          <select
            id="order-replenishment-period-type"
            class="form-control"
            (change)="changeNumberOfWeeks($event.target.value)"
          >
            <option
              *ngFor="let nWeeks of numberOfWeeks"
              [value]="nWeeks"
              [selected]="
                nWeeks === scheduleReplenishmentFormData.numberOfWeeks
              "
            >
              {{ nWeeks }}
            </option>
          </select>
        </ng-container>
        <ng-template #isDaily>
          <select
            id="order-replenishment-period-type"
            class="form-control"
            (change)="changeNumberOfDays($event.target.value)"
          >
            <option
              *ngFor="let nDays of numberOfDays"
              [value]="nDays"
              [selected]="nDays === scheduleReplenishmentFormData.numberOfDays"
            >
              {{ nDays }}
            </option>
          </select>
        </ng-template>
      </div>
      <div class="cx-month">
        <label
          *ngIf="isMonthly"
          class="form-data-label"
          for="order-replenishment-recurrence-period"
          >{{ 'checkoutScheduledReplenishment.every' | cxTranslate }}</label
        >
        <label
          *ngIf="!isMonthly"
          class="form-data-label"
          for="order-replenishment-recurrence-period"
          >{{ 'checkoutScheduledReplenishment.duration' | cxTranslate }}</label
        >
        <select
          id="order-replenishment-recurrence-period"
          class="form-control"
          (change)="changeRecurrencePeriodType($event.target.value)"
        >
          <option
            *ngFor="let type of recurrencePeriodType"
            [value]="type"
            [selected]="type === scheduleReplenishmentFormData.recurrencePeriod"
          >
            {{
              'checkoutScheduledReplenishment.recurrencePeriodType_' + type
                | cxTranslate
            }}
          </option>
        </select>
      </div>
      <div *ngIf="isMonthly" class="cx-dayMonth">
        <label class="form-data-label" for="order-replenishment-day-of-month">{{
          'checkoutScheduledReplenishment.dayOfMonth' | cxTranslate
        }}</label>
        <div class="cx-day-of-month">
          <select
            id="order-replenishment-day-of-month"
            class="form-control"
            (change)="changeDayOfTheMonth($event.target.value)"
          >
            <option
              *ngFor="let nDays of numberOfDays"
              [value]="nDays"
              [selected]="nDays === scheduleReplenishmentFormData.nthDayOfMonth"
            >
              {{ nDays }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="cx-replenishment-form-data-container">
      <label for="datepicker" class="form-data-label">{{
        'checkoutScheduledReplenishment.startOn' | cxTranslate
      }}</label>
      <div class="cx-replenishment-date">
        <input
          id="datepicker"
          type="date"
          placeholder="yyyy-mm-dd"
          [value]="currentDate"
          (change)="changeReplenishmentStartDate($event.target.value)"
        />
      </div>
    </div>
    <fieldset
      *ngIf="isWeekly"
      class="cx-replenishment-form-data-container cx-repeat-days-container"
    >
      <legend class="cx-repeat-days form-data-label">
        {{ 'checkoutScheduledReplenishment.repeatOnDays' | cxTranslate }}
      </legend>
      <div *ngFor="let day of daysOfWeek" class="form-check">
        <label for="day-{{ day }}" class="cx-week-day">{{
          day | titlecase
        }}</label
        ><input
          id="day-{{ day }}"
          type="checkbox"
          class="form-check-input"
          [checked]="hasDaysOfWeekChecked(day)"
          (change)="changeRepeatDays(day, $event.target.checked)"
        />
      </div>
    </fieldset>
  </ng-container>
</div>
`
    }]
  }], () => [{
    type: CheckoutReplenishmentFormService
  }], null);
})();
var CheckoutScheduleReplenishmentOrderModule = class _CheckoutScheduleReplenishmentOrderModule {
  static {
    this.ɵfac = function CheckoutScheduleReplenishmentOrderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutScheduleReplenishmentOrderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutScheduleReplenishmentOrderModule,
      declarations: [CheckoutScheduleReplenishmentOrderComponent],
      imports: [CommonModule, RouterModule, I18nModule, IconModule],
      exports: [CheckoutScheduleReplenishmentOrderComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutScheduleReplenishmentOrder: {
            component: CheckoutScheduleReplenishmentOrderComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      imports: [CommonModule, RouterModule, I18nModule, IconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutScheduleReplenishmentOrderModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, I18nModule, IconModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutScheduleReplenishmentOrder: {
            component: CheckoutScheduleReplenishmentOrderComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      declarations: [CheckoutScheduleReplenishmentOrderComponent],
      exports: [CheckoutScheduleReplenishmentOrderComponent]
    }]
  }], null, null);
})();
var CheckoutScheduledReplenishmentComponentsModule = class _CheckoutScheduledReplenishmentComponentsModule {
  static {
    this.ɵfac = function CheckoutScheduledReplenishmentComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutScheduledReplenishmentComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutScheduledReplenishmentComponentsModule,
      imports: [CommonModule, CheckoutScheduleReplenishmentOrderModule, CheckoutScheduledReplenishmentPlaceOrderModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, CheckoutScheduleReplenishmentOrderModule, CheckoutScheduledReplenishmentPlaceOrderModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutScheduledReplenishmentComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CheckoutScheduleReplenishmentOrderModule, CheckoutScheduledReplenishmentPlaceOrderModule]
    }]
  }], null, null);
})();

// node_modules/@spartacus/checkout/fesm2022/spartacus-checkout-scheduled-replenishment.mjs
var CheckoutScheduledReplenishmentModule = class _CheckoutScheduledReplenishmentModule {
  static {
    this.ɵfac = function CheckoutScheduledReplenishmentModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutScheduledReplenishmentModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutScheduledReplenishmentModule,
      imports: [CheckoutScheduledReplenishmentComponentsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CheckoutScheduledReplenishmentComponentsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutScheduledReplenishmentModule, [{
    type: NgModule,
    args: [{
      imports: [CheckoutScheduledReplenishmentComponentsModule]
    }]
  }], null, null);
})();
export {
  CheckoutScheduledReplenishmentModule
};
//# sourceMappingURL=@spartacus_checkout_scheduled-replenishment.js.map
