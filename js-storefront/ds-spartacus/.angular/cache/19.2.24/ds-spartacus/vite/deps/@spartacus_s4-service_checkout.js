import {
  CheckoutServiceDetailsFacade,
  CheckoutServiceDetailsSetEvent,
  CheckoutServiceSchedulePickerService,
  S4ServiceDeliveryModeConfig
} from "./chunk-UDGQ46WQ.js";
import {
  B2BCheckoutReviewSubmitComponent,
  CheckoutB2BStepsSetGuard
} from "./chunk-Z7YLXNZ5.js";
import {
  CartNotEmptyGuard,
  CheckoutAuthGuard,
  CheckoutDeliveryModeComponent,
  CheckoutStepService,
  CheckoutStepsSetGuard
} from "./chunk-WVN4XMLZ.js";
import {
  CheckoutCostCenterFacade,
  CheckoutPaymentTypeFacade
} from "./chunk-OKYVL3N7.js";
import {
  CheckoutDeliveryAddressFacade,
  CheckoutDeliveryModesFacade,
  CheckoutPaymentFacade,
  CheckoutQueryFacade,
  CheckoutStepType
} from "./chunk-X6DUCLWC.js";
import "./chunk-UIW5AQFA.js";
import "./chunk-XTCFQJ22.js";
import "./chunk-Q7WXRDFA.js";
import "./chunk-YJXUXPBZ.js";
import "./chunk-OOT34BER.js";
import "./chunk-LZQV6UAH.js";
import {
  ActiveCartFacade
} from "./chunk-KEAKWHYV.js";
import {
  CardComponent,
  CardModule,
  DatePickerComponent,
  DatePickerModule,
  FormRequiredAsterisksComponent,
  FormRequiredLegendComponent,
  IconComponent,
  IconModule,
  InnerComponentsHostDirective,
  OutletDirective,
  OutletModule,
  PageComponentModule,
  PromotionsComponent,
  PromotionsModule,
  SpinnerComponent,
  SpinnerModule
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  CommandService,
  CommandStrategy,
  CxDatePipe,
  EventService,
  FeaturesConfigModule,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  LoggerService,
  OCC_USER_ID_ANONYMOUS,
  OccEndpointsService,
  TranslatePipe,
  TranslationService,
  UrlModule,
  UrlPipe,
  UserCostCenterService,
  UserIdService,
  provideDefaultConfig,
  tryNormalizeHttpError
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
  ActivatedRoute,
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
  RadioControlValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  NgModule,
  inject,
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
  ɵɵelementContainer,
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
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  filter,
  map,
  of,
  take,
  tap
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/s4-service/fesm2022/spartacus-s4-service-checkout.mjs
var _c0 = (a0, a1) => ({
  content: a0,
  editRoute: a1,
  label: "checkoutReview.editPaymentType",
  styleClass: "cx-review-summary-card"
});
var _c1 = (a0, a1) => ({
  content: a0,
  editRoute: a1,
  label: "checkoutReview.editPaymentDetails",
  styleClass: "cx-review-summary-card cx-review-card-payment"
});
var _c2 = (a0, a1) => ({
  content: a0,
  editRoute: a1,
  label: "checkoutReview.editDeliveryAddressDetails",
  styleClass: "cx-review-summary-card"
});
var _c3 = (a0, a1) => ({
  content: a0,
  editRoute: a1,
  label: "checkoutReview.editDeliveryAddressDetails",
  styleClass: "cx-review-summary-card cx-review-card-address"
});
var _c4 = (a0, a1) => ({
  content: a0,
  editRoute: a1,
  label: "checkoutReview.editServiceDetails",
  styleClass: "cx-review-summary-card cx-review-service-details"
});
var _c5 = (a0) => ({
  cxRoute: a0
});
var _c6 = (a0) => ({
  item: a0,
  readonly: true
});
var _c7 = (a0) => ({
  count: a0
});
var _c8 = () => [];
var _c9 = (a0, a1) => ({
  items: a0,
  readonly: true,
  promotionLocation: a1
});
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    const summaryCard_r2 = ɵɵreference(8);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", summaryCard_r2)("ngTemplateOutletContext", ɵɵpureFunction2(4, _c0, ctx_r0.getPoNumberCard(ɵɵpipeBind1(2, 2, ctx_r0.poNumber$)), ctx_r0.getCheckoutStepUrl(ctx_r0.checkoutStepTypePaymentType)));
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const paymentType_r3 = ctx.ngIf;
    const ctx_r0 = ɵɵnextContext(4);
    const summaryCard_r2 = ɵɵreference(8);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", summaryCard_r2)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c0, ctx_r0.getPaymentTypeCard(paymentType_r3), ctx_r0.getCheckoutStepUrl(ctx_r0.checkoutStepTypePaymentType)));
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template, 2, 5, "ng-container", 5);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r0.paymentType$));
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const paymentDetails_r4 = ctx.ngIf;
    const ctx_r0 = ɵɵnextContext(4);
    const summaryCard_r2 = ɵɵreference(8);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", summaryCard_r2)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c1, ctx_r0.getPaymentMethodCard(paymentDetails_r4), ctx_r0.getCheckoutStepUrl(ctx_r0.checkoutStepTypePaymentDetails)));
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_4_ng_container_1_Template, 2, 5, "ng-container", 5);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r0.paymentDetails$));
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_5_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_5_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_5_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const costCenter_r5 = ctx.ngIf;
    const ctx_r0 = ɵɵnextContext(5);
    const summaryCard_r2 = ɵɵreference(8);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", summaryCard_r2)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c2, ctx_r0.getCostCenterCard(costCenter_r5), ctx_r0.getCheckoutStepUrl(ctx_r0.checkoutStepTypeDeliveryAddress)));
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_5_ng_container_1_ng_container_1_Template, 2, 5, "ng-container", 5);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r0.costCenter$));
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_5_ng_container_1_Template, 3, 3, "ng-container", 5);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r0.isAccountPayment$));
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0)(1, 9);
    ɵɵtemplate(2, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_2_Template, 3, 7, "ng-container", 10)(3, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_3_Template, 3, 3, "ng-container", 10)(4, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_4_Template, 3, 3, "ng-container", 10)(5, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_5_Template, 3, 3, "ng-container", 10);
    ɵɵelementContainerEnd()();
  }
  if (rf & 2) {
    const step_r6 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngSwitch", step_r6.type[0]);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r0.checkoutStepTypePaymentType);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r0.checkoutStepTypePaymentType);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r0.checkoutStepTypePaymentDetails);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r0.checkoutStepTypeDeliveryAddress);
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const deliveryAddress_r7 = ctx.ngIf;
    const ctx_r0 = ɵɵnextContext(4);
    const summaryCard_r2 = ɵɵreference(8);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", summaryCard_r2)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c3, ctx_r0.getDeliveryAddressCard(deliveryAddress_r7), ctx_r0.getCheckoutStepUrl(ctx_r0.checkoutStepTypeDeliveryAddress)));
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_2_ng_container_1_Template, 2, 5, "ng-container", 5);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r0.deliveryAddress$));
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(3);
    const deliveryMode_r8 = ɵɵreference(10);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", deliveryMode_r8);
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const scheduledAt_r9 = ctx.ngIf;
    const ctx_r0 = ɵɵnextContext(4);
    const summaryCard_r2 = ɵɵreference(8);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", summaryCard_r2)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c4, ctx_r0.getServiceDetailsCard(scheduledAt_r9), ctx_r0.getCheckoutStepUrl(ctx_r0.checkoutStepTypeServiceDetails)));
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_4_ng_container_1_Template, 2, 5, "ng-container", 5);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r0.scheduledAt$));
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0)(1, 9);
    ɵɵtemplate(2, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_2_Template, 3, 3, "ng-container", 10)(3, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_3_Template, 2, 1, "ng-container", 10)(4, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_4_Template, 3, 3, "ng-container", 10);
    ɵɵelementContainerEnd()();
  }
  if (rf & 2) {
    const step_r10 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngSwitch", step_r10.type[0]);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r0.checkoutStepTypeDeliveryAddress);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r0.checkoutStepTypeDeliveryMode);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r0.checkoutStepTypeServiceDetails);
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 6);
    ɵɵtemplate(2, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_Template, 6, 5, "ng-container", 7);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 8);
    ɵɵtemplate(4, ServiceCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_Template, 5, 4, "ng-container", 7);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const steps_r11 = ctx.ngIf;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r0.paymentSteps(steps_r11));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r0.deliverySteps(steps_r11));
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelement(1, "cx-card", 14);
    ɵɵpipe(2, "async");
    ɵɵelementStart(3, "div", 15)(4, "a", 16);
    ɵɵpipe(5, "cxUrl");
    ɵɵpipe(6, "cxTranslate");
    ɵɵelement(7, "cx-icon", 17);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const content_r12 = ctx.content;
    const editRoute_r13 = ctx.editRoute;
    const label_r14 = ctx.label;
    const styleClass_r15 = ctx.styleClass;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", styleClass_r15);
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(2, 5, content_r12));
    ɵɵadvance(3);
    ɵɵproperty("routerLink", ɵɵpipeBind1(5, 7, ɵɵpureFunction1(11, _c5, editRoute_r13)));
    ɵɵattribute("title", ɵɵpipeBind1(6, 9, label_r14));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r0.iconTypes.PENCIL);
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_template_9_div_1_cx_card_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-card", 14);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const deliveryMode_r16 = ɵɵnextContext().ngIf;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("content", ɵɵpipeBind1(1, 1, ctx_r0.getDeliveryModeCard(deliveryMode_r16)));
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_template_9_div_1_ng_template_2_Template(rf, ctx) {
}
function ServiceCheckoutReviewSubmitComponent_ng_template_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, ServiceCheckoutReviewSubmitComponent_ng_template_9_div_1_cx_card_1_Template, 2, 3, "cx-card", 19)(2, ServiceCheckoutReviewSubmitComponent_ng_template_9_div_1_ng_template_2_Template, 0, 0, "ng-template", 20);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const deliveryMode_r16 = ctx.ngIf;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.shouldShowDeliveryModeCard(deliveryMode_r16));
    ɵɵadvance();
    ɵɵproperty("cxOutlet", ctx_r0.cartOutlets.DELIVERY_MODE)("cxOutletContext", ɵɵpureFunction1(5, _c6, ɵɵpipeBind1(3, 3, ctx_r0.cart$)));
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtemplate(1, ServiceCheckoutReviewSubmitComponent_ng_template_9_div_1_Template, 4, 7, "div", 5);
    ɵɵpipe(2, "async");
    ɵɵelementStart(3, "div", 15)(4, "a", 16);
    ɵɵpipe(5, "cxUrl");
    ɵɵpipe(6, "cxTranslate");
    ɵɵelement(7, "cx-icon", 17);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 4, ctx_r0.deliveryMode$));
    ɵɵadvance(3);
    ɵɵproperty("routerLink", ɵɵpipeBind1(5, 6, ɵɵpureFunction1(10, _c5, ctx_r0.getCheckoutStepUrl(ctx_r0.checkoutStepTypeDeliveryMode))));
    ɵɵattribute("title", ɵɵpipeBind1(6, 8, "checkoutReview.editDeliveryMode"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r0.iconTypes.PENCIL);
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_11_div_7_ng_template_2_Template(rf, ctx) {
}
function ServiceCheckoutReviewSubmitComponent_ng_container_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵelement(1, "cx-promotions", 25);
    ɵɵtemplate(2, ServiceCheckoutReviewSubmitComponent_ng_container_11_div_7_ng_template_2_Template, 0, 0, "ng-template", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entries_r17 = ctx.ngIf;
    const cart_r18 = ɵɵnextContext().ngIf;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("promotions", (cart_r18.appliedOrderPromotions || ɵɵpureFunction0(3, _c8)).concat(cart_r18.potentialOrderPromotions || ɵɵpureFunction0(4, _c8)));
    ɵɵadvance();
    ɵɵproperty("cxOutlet", ctx_r0.cartOutlets.CART_ITEM_LIST)("cxOutletContext", ɵɵpureFunction2(5, _c9, entries_r17, ctx_r0.promotionLocation));
  }
}
function ServiceCheckoutReviewSubmitComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 21);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 22);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(7, ServiceCheckoutReviewSubmitComponent_ng_container_11_div_7_Template, 3, 8, "div", 23);
    ɵɵpipe(8, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const cart_r18 = ctx.ngIf;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind2(3, 4, "cartItems.cartTotal", ɵɵpureFunction1(11, _c7, cart_r18.deliveryItemsQuantity)), ": ", cart_r18.totalPrice == null ? null : cart_r18.totalPrice.formattedValue, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 7, "checkoutReview.placeOrder"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(8, 9, ctx_r0.entries$));
  }
}
function CheckoutServiceDetailsComponent_select_31_option_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 13);
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
function CheckoutServiceDetailsComponent_select_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "select", 11);
    ɵɵlistener("change", function CheckoutServiceDetailsComponent_select_31_Template_select_change_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setScheduleTime($event));
    });
    ɵɵtemplate(1, CheckoutServiceDetailsComponent_select_31_option_1_Template, 2, 3, "option", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const scheduleTimes_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngForOf", scheduleTimes_r4);
  }
}
var _c10 = (a0) => ({
  item: a0
});
var _c11 = (a0) => ({
  items: a0,
  readonly: true
});
var _c12 = (a0) => ({
  content: a0
});
function ServiceCheckoutDeliveryModeComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ServiceCheckoutDeliveryModeComponent_ng_container_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 17)(1, "input", 18);
    ɵɵlistener("change", function ServiceCheckoutDeliveryModeComponent_ng_container_5_div_4_Template_input_change_1_listener($event) {
      const mode_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.changeMode(mode_r3.code, $event));
    })("click", function ServiceCheckoutDeliveryModeComponent_ng_container_5_div_4_Template_input_click_1_listener($event) {
      const mode_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.changeMode(mode_r3.code, $event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "label", 19)(3, "div", 20);
    ɵɵtext(4);
    ɵɵelementStart(5, "span", 21);
    ɵɵtext(6);
    ɵɵelementEnd()();
    ɵɵelementStart(7, "div", 22);
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelement(9, "div", 23);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const mode_r3 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵpropertyInterpolate1("id", "deliveryMode-", mode_r3.code, "");
    ɵɵproperty("value", mode_r3.code);
    ɵɵattribute("aria-checked", ctx_r3.getAriaChecked(mode_r3.code))("aria-label", mode_r3.name + " " + mode_r3.description + " " + (mode_r3.deliveryCost == null ? null : mode_r3.deliveryCost.formattedValue));
    ɵɵadvance();
    ɵɵpropertyInterpolate1("for", "deliveryMode-", mode_r3.code, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", mode_r3.name, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("(", mode_r3.description, ")");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", mode_r3.deliveryCost == null ? null : mode_r3.deliveryCost.formattedValue, " ");
  }
}
function ServiceCheckoutDeliveryModeComponent_ng_container_5_ng_template_5_Template(rf, ctx) {
}
function ServiceCheckoutDeliveryModeComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 13);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementStart(3, "div", 14);
    ɵɵtemplate(4, ServiceCheckoutDeliveryModeComponent_ng_container_5_div_4_Template, 10, 10, "div", 15)(5, ServiceCheckoutDeliveryModeComponent_ng_container_5_ng_template_5_Template, 0, 0, "ng-template", 16);
    ɵɵpipe(6, "async");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const supportedDeliveryModes_r5 = ctx.ngIf;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵattribute("aria-label", ɵɵpipeBind1(2, 5, "common.loaded"));
    ɵɵadvance(2);
    ɵɵproperty("formGroup", ctx_r3.mode);
    ɵɵadvance();
    ɵɵproperty("ngForOf", supportedDeliveryModes_r5);
    ɵɵadvance();
    ɵɵproperty("cxOutlet", ctx_r3.CartOutlets.DELIVERY_MODE)("cxOutletContext", ɵɵpureFunction1(9, _c10, ɵɵpipeBind1(6, 7, ctx_r3.activeCartFacade.getActive())));
  }
}
function ServiceCheckoutDeliveryModeComponent_ng_container_8_ng_template_4_Template(rf, ctx) {
}
function ServiceCheckoutDeliveryModeComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "h2", 5);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(4, ServiceCheckoutDeliveryModeComponent_ng_container_8_ng_template_4_Template, 0, 0, "ng-template", 16);
    ɵɵpipe(5, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "checkoutMode.deliveryEntries"), " ");
    ɵɵadvance(2);
    ɵɵproperty("cxOutlet", ctx_r3.CartOutlets.CART_ITEM_LIST)("cxOutletContext", ɵɵpureFunction1(7, _c11, ɵɵpipeBind1(5, 5, ctx_r3.activeCartFacade.getDeliveryEntries())));
  }
}
function ServiceCheckoutDeliveryModeComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
function ServiceCheckoutDeliveryModeComponent_ng_template_23_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const content_r6 = ɵɵnextContext().content;
    ɵɵadvance();
    ɵɵtextInterpolate1("(", content_r6.description, ")");
  }
}
function ServiceCheckoutDeliveryModeComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 25);
    ɵɵelementStart(1, "label", 19)(2, "div", 20);
    ɵɵtext(3);
    ɵɵtemplate(4, ServiceCheckoutDeliveryModeComponent_ng_template_23_span_4_Template, 2, 1, "span", 26);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 22);
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelement(7, "div", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const content_r6 = ctx.content;
    const ctx_r3 = ɵɵnextContext();
    ɵɵpropertyInterpolate1("id", "deliveryMode-", content_r6.code, "");
    ɵɵproperty("checked", true)("value", content_r6.code);
    ɵɵattribute("aria-checked", ctx_r3.getAriaChecked(content_r6.code))("aria-label", content_r6.name + " " + content_r6.description + " " + (content_r6.deliveryCost == null ? null : content_r6.deliveryCost.formattedValue));
    ɵɵadvance();
    ɵɵpropertyInterpolate1("for", "deliveryMode-", content_r6.code, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", content_r6.name, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", content_r6.description);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", content_r6.deliveryCost == null ? null : content_r6.deliveryCost.formattedValue, " ");
  }
}
function ServiceCheckoutDeliveryModeComponent_ng_template_25_ng_container_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ServiceCheckoutDeliveryModeComponent_ng_template_25_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "legend", 5);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 27)(5, "div", 17);
    ɵɵtemplate(6, ServiceCheckoutDeliveryModeComponent_ng_template_25_ng_container_0_ng_container_6_Template, 1, 0, "ng-container", 28);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    const displayDeliveryMode_r7 = ɵɵreference(24);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "serviceOrderCheckout.serviceDeliveryOption"), " ");
    ɵɵadvance(4);
    ɵɵproperty("ngTemplateOutlet", displayDeliveryMode_r7)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c12, ctx_r3.serviceDeliveryConfig));
  }
}
function ServiceCheckoutDeliveryModeComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ServiceCheckoutDeliveryModeComponent_ng_template_25_ng_container_0_Template, 7, 7, "ng-container", 7);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r3.hasServiceProducts$));
  }
}
var CheckoutServiceOrderStepsSetGuard = class _CheckoutServiceOrderStepsSetGuard extends CheckoutB2BStepsSetGuard {
  constructor() {
    super(...arguments);
    this.checkoutServiceDetailsFacade = inject(CheckoutServiceDetailsFacade);
    this.activeCartFacade = inject(ActiveCartFacade);
    this.config = inject(S4ServiceDeliveryModeConfig);
  }
  canActivate(route) {
    return combineLatest(this.checkoutServiceDetailsFacade.hasServiceItems(), this.checkoutServiceDetailsFacade.hasNonServiceItems()).pipe(switchMap(([hasServiceItems, hasNonServiceItems]) => {
      this.checkoutStepService.disableEnableStep(CheckoutStepType.SERVICE_DETAILS, !hasServiceItems);
      this.checkoutStepService.disableEnableStep(CheckoutStepType.DELIVERY_MODE, !hasNonServiceItems);
      return super.canActivate(route);
    }));
  }
  isServiceDetailsSet(step) {
    return this.checkoutServiceDetailsFacade.getSelectedServiceDetailsState().pipe(filter((state) => !state.loading && !state.error), switchMap((selectedServiceDetails) => {
      return this.setServiceDeliveryMode().pipe(map(() => {
        return selectedServiceDetails.data ? true : this.getUrl(step.routeName);
      }));
    }));
  }
  setServiceDeliveryMode() {
    return combineLatest([this.checkoutServiceDetailsFacade.hasServiceItems(), this.checkoutServiceDetailsFacade.hasNonServiceItems()]).pipe(switchMap(([hasServiceItems, hasNonServiceItems]) => {
      if (!hasNonServiceItems && hasServiceItems) {
        return this.checkoutDeliveryModesFacade.setDeliveryMode(this.config.s4ServiceDeliveryMode?.code ?? "");
      }
      return of(void 0);
    }));
  }
  isB2BStepSet(step, isAccountPayment) {
    if (step && !step.disabled) {
      switch (step.type[0]) {
        case CheckoutStepType.PAYMENT_TYPE:
          return this.isPaymentTypeSet(step);
        case CheckoutStepType.DELIVERY_ADDRESS:
          return this.isDeliveryAddressAndCostCenterSet(step, isAccountPayment);
        case CheckoutStepType.DELIVERY_MODE:
          return this.isDeliveryModeSet(step);
        case CheckoutStepType.SERVICE_DETAILS:
          return this.isServiceDetailsSet(step);
        case CheckoutStepType.PAYMENT_DETAILS:
          return this.isPaymentDetailsSet(step);
        case CheckoutStepType.REVIEW_ORDER:
          break;
      }
    }
    return of(true);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵCheckoutServiceOrderStepsSetGuard_BaseFactory;
      return function CheckoutServiceOrderStepsSetGuard_Factory(__ngFactoryType__) {
        return (ɵCheckoutServiceOrderStepsSetGuard_BaseFactory || (ɵCheckoutServiceOrderStepsSetGuard_BaseFactory = ɵɵgetInheritedFactory(_CheckoutServiceOrderStepsSetGuard)))(__ngFactoryType__ || _CheckoutServiceOrderStepsSetGuard);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutServiceOrderStepsSetGuard,
      factory: _CheckoutServiceOrderStepsSetGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutServiceOrderStepsSetGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ServiceCheckoutReviewSubmitComponent = class _ServiceCheckoutReviewSubmitComponent extends B2BCheckoutReviewSubmitComponent {
  constructor(checkoutDeliveryAddressFacade, checkoutPaymentFacade, activeCartFacade, translationService, checkoutStepService, checkoutDeliveryModesFacade, checkoutPaymentTypeFacade, checkoutCostCenterFacade, userCostCenterService) {
    super(checkoutDeliveryAddressFacade, checkoutPaymentFacade, activeCartFacade, translationService, checkoutStepService, checkoutDeliveryModesFacade, checkoutPaymentTypeFacade, checkoutCostCenterFacade, userCostCenterService);
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.checkoutPaymentFacade = checkoutPaymentFacade;
    this.activeCartFacade = activeCartFacade;
    this.translationService = translationService;
    this.checkoutStepService = checkoutStepService;
    this.checkoutDeliveryModesFacade = checkoutDeliveryModesFacade;
    this.checkoutPaymentTypeFacade = checkoutPaymentTypeFacade;
    this.checkoutCostCenterFacade = checkoutCostCenterFacade;
    this.userCostCenterService = userCostCenterService;
    this.checkoutStepTypeServiceDetails = CheckoutStepType.SERVICE_DETAILS;
    this.checkoutServiceDetailsFacade = inject(CheckoutServiceDetailsFacade);
    this.checkoutServiceSchedulePickerService = inject(CheckoutServiceSchedulePickerService);
    this.config = inject(S4ServiceDeliveryModeConfig);
  }
  get scheduledAt$() {
    return this.checkoutServiceDetailsFacade.getSelectedServiceDetailsState().pipe(filter((state) => !state.loading && !state.error), map((state) => {
      return state.data;
    }));
  }
  getCheckoutDeliverySteps() {
    return [CheckoutStepType.DELIVERY_ADDRESS, CheckoutStepType.DELIVERY_MODE, CheckoutStepType.SERVICE_DETAILS];
  }
  shouldShowDeliveryModeCard(mode) {
    return mode.code !== this.config.s4ServiceDeliveryMode?.code;
  }
  getServiceDetailsCard(scheduledAt) {
    return this.translationService.translate("serviceOrderCheckout.serviceDetails").pipe(map((textTitle) => {
      if (scheduledAt) {
        scheduledAt = this.checkoutServiceSchedulePickerService.convertDateTimeToReadableString(scheduledAt);
      }
      return {
        title: textTitle,
        textBold: scheduledAt?.split(",")[0] ?? "",
        text: [scheduledAt?.split(",")[1].trim() ?? ""]
      };
    }));
  }
  static {
    this.ɵfac = function ServiceCheckoutReviewSubmitComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServiceCheckoutReviewSubmitComponent)(ɵɵdirectiveInject(CheckoutDeliveryAddressFacade), ɵɵdirectiveInject(CheckoutPaymentFacade), ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(CheckoutStepService), ɵɵdirectiveInject(CheckoutDeliveryModesFacade), ɵɵdirectiveInject(CheckoutPaymentTypeFacade), ɵɵdirectiveInject(CheckoutCostCenterFacade), ɵɵdirectiveInject(UserCostCenterService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ServiceCheckoutReviewSubmitComponent,
      selectors: [["cx-review-submit"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 13,
      vars: 9,
      consts: [["summaryCard", ""], ["deliveryMode", ""], [1, "cx-review"], [1, "cx-review-title", "d-none", "d-lg-block", "d-xl-block"], [1, "cx-review-summary", "row"], [4, "ngIf"], [1, "col-md-12", "col-lg-6", "col-xl-6", "cx-review-payment-col"], [4, "ngFor", "ngForOf"], [1, "col-md-12", "col-lg-6", "col-xl-6", "cx-review-shipping-col"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], [3, "ngClass"], [3, "content"], [1, "cx-review-summary-edit-step"], [3, "routerLink"], ["aria-hidden", "true", 3, "type"], [1, "cx-review-summary-card", "cx-review-card-shipping"], [3, "content", 4, "ngIf"], [3, "cxOutlet", "cxOutletContext"], [1, "cx-review-cart-total", "d-none", "d-lg-block", "d-xl-block"], [1, "cx-review-cart-heading", "d-block", "d-lg-none", "d-xl-none"], ["class", "cx-review-cart-item", 4, "ngIf"], [1, "cx-review-cart-item"], [3, "promotions"]],
      template: function ServiceCheckoutReviewSubmitComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 2)(1, "h2", 3);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(4, "div", 4);
          ɵɵtemplate(5, ServiceCheckoutReviewSubmitComponent_ng_container_5_Template, 5, 2, "ng-container", 5);
          ɵɵpipe(6, "async");
          ɵɵelementEnd();
          ɵɵtemplate(7, ServiceCheckoutReviewSubmitComponent_ng_template_7_Template, 8, 13, "ng-template", null, 0, ɵɵtemplateRefExtractor)(9, ServiceCheckoutReviewSubmitComponent_ng_template_9_Template, 8, 12, "ng-template", null, 1, ɵɵtemplateRefExtractor)(11, ServiceCheckoutReviewSubmitComponent_ng_container_11_Template, 9, 13, "ng-container", 5);
          ɵɵpipe(12, "async");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_3_0;
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "checkoutReview.review"), " ");
          ɵɵadvance(3);
          ɵɵproperty("ngIf", (tmp_3_0 = ɵɵpipeBind1(6, 5, ctx.steps$)) == null ? null : tmp_3_0.slice(0, -1));
          ɵɵadvance(6);
          ɵɵproperty("ngIf", ɵɵpipeBind1(12, 7, ctx.cart$));
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, CardComponent, RouterLink, PromotionsComponent, IconComponent, OutletDirective, AsyncPipe, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceCheckoutReviewSubmitComponent, [{
    type: Component,
    args: [{
      selector: "cx-review-submit",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="cx-review">
  <!-- TITLE -->
  <h2 class="cx-review-title d-none d-lg-block d-xl-block">
    {{ 'checkoutReview.review' | cxTranslate }}
  </h2>

  <div class="cx-review-summary row">
    <ng-container *ngIf="(steps$ | async)?.slice(0, -1) as steps">
      <div class="col-md-12 col-lg-6 col-xl-6 cx-review-payment-col">
        <ng-container *ngFor="let step of paymentSteps(steps)">
          <ng-container [ngSwitch]="step.type[0]">
            <ng-container *ngSwitchCase="checkoutStepTypePaymentType">
              <ng-container
                *ngTemplateOutlet="
                  summaryCard;
                  context: {
                    content: getPoNumberCard(poNumber$ | async),
                    editRoute: getCheckoutStepUrl(checkoutStepTypePaymentType),
                    label: 'checkoutReview.editPaymentType',
                    styleClass: 'cx-review-summary-card',
                  }
                "
              ></ng-container>
            </ng-container>
            <ng-container *ngSwitchCase="checkoutStepTypePaymentType">
              <ng-container *ngIf="paymentType$ | async as paymentType">
                <ng-container
                  *ngTemplateOutlet="
                    summaryCard;
                    context: {
                      content: getPaymentTypeCard(paymentType),
                      editRoute: getCheckoutStepUrl(
                        checkoutStepTypePaymentType
                      ),
                      label: 'checkoutReview.editPaymentType',
                      styleClass: 'cx-review-summary-card',
                    }
                  "
                ></ng-container>
              </ng-container>
            </ng-container>
            <ng-container *ngSwitchCase="checkoutStepTypePaymentDetails">
              <ng-container *ngIf="paymentDetails$ | async as paymentDetails">
                <ng-container
                  *ngTemplateOutlet="
                    summaryCard;
                    context: {
                      content: getPaymentMethodCard(paymentDetails),
                      editRoute: getCheckoutStepUrl(
                        checkoutStepTypePaymentDetails
                      ),
                      label: 'checkoutReview.editPaymentDetails',
                      styleClass:
                        'cx-review-summary-card cx-review-card-payment',
                    }
                  "
                ></ng-container>
              </ng-container>
            </ng-container>
            <ng-container *ngSwitchCase="checkoutStepTypeDeliveryAddress">
              <ng-container *ngIf="isAccountPayment$ | async">
                <ng-container *ngIf="costCenter$ | async as costCenter">
                  <ng-container
                    *ngTemplateOutlet="
                      summaryCard;
                      context: {
                        content: getCostCenterCard(costCenter),
                        editRoute: getCheckoutStepUrl(
                          checkoutStepTypeDeliveryAddress
                        ),
                        label: 'checkoutReview.editDeliveryAddressDetails',
                        styleClass: 'cx-review-summary-card',
                      }
                    "
                  ></ng-container>
                </ng-container>
              </ng-container>
            </ng-container>
          </ng-container>
        </ng-container>
      </div>
      <div class="col-md-12 col-lg-6 col-xl-6 cx-review-shipping-col">
        <ng-container *ngFor="let step of deliverySteps(steps)">
          <ng-container [ngSwitch]="step.type[0]">
            <ng-container *ngSwitchCase="checkoutStepTypeDeliveryAddress">
              <ng-container *ngIf="deliveryAddress$ | async as deliveryAddress">
                <ng-container
                  *ngTemplateOutlet="
                    summaryCard;
                    context: {
                      content: getDeliveryAddressCard(deliveryAddress),
                      editRoute: getCheckoutStepUrl(
                        checkoutStepTypeDeliveryAddress
                      ),
                      label: 'checkoutReview.editDeliveryAddressDetails',
                      styleClass:
                        'cx-review-summary-card cx-review-card-address',
                    }
                  "
                ></ng-container>
              </ng-container>
            </ng-container>
            <ng-container *ngSwitchCase="checkoutStepTypeDeliveryMode">
              <ng-container *ngTemplateOutlet="deliveryMode"></ng-container>
            </ng-container>
            <ng-container *ngSwitchCase="checkoutStepTypeServiceDetails">
              <ng-container *ngIf="scheduledAt$ | async as scheduledAt">
                <ng-container
                  *ngTemplateOutlet="
                    summaryCard;
                    context: {
                      content: getServiceDetailsCard(scheduledAt),
                      editRoute: getCheckoutStepUrl(
                        checkoutStepTypeServiceDetails
                      ),
                      label: 'checkoutReview.editServiceDetails',
                      styleClass:
                        'cx-review-summary-card cx-review-service-details',
                    }
                  "
                ></ng-container>
              </ng-container>
            </ng-container>
          </ng-container>
        </ng-container>
      </div>
    </ng-container>
  </div>
  <ng-template
    #summaryCard
    let-content="content"
    let-editRoute="editRoute"
    let-label="label"
    let-styleClass="styleClass"
  >
    <div [ngClass]="styleClass">
      <cx-card [content]="content | async"></cx-card>
      <div class="cx-review-summary-edit-step">
        <a
          [attr.title]="label | cxTranslate"
          [routerLink]="{ cxRoute: editRoute } | cxUrl"
        >
          <cx-icon aria-hidden="true" [type]="iconTypes.PENCIL"></cx-icon>
        </a>
      </div>
    </div>
  </ng-template>

  <!-- DELIVERY MODE SECTION -->
  <ng-template #deliveryMode>
    <div class="cx-review-summary-card cx-review-card-shipping">
      <div *ngIf="deliveryMode$ | async as deliveryMode">
        <cx-card
          *ngIf="shouldShowDeliveryModeCard(deliveryMode)"
          [content]="getDeliveryModeCard(deliveryMode) | async"
        >
        </cx-card>
        <ng-template
          [cxOutlet]="cartOutlets.DELIVERY_MODE"
          [cxOutletContext]="{
            item: cart$ | async,
            readonly: true,
          }"
        >
        </ng-template>
      </div>

      <div class="cx-review-summary-edit-step">
        <a
          [attr.title]="'checkoutReview.editDeliveryMode' | cxTranslate"
          [routerLink]="
            { cxRoute: getCheckoutStepUrl(checkoutStepTypeDeliveryMode) }
              | cxUrl
          "
        >
          <cx-icon aria-hidden="true" [type]="iconTypes.PENCIL"></cx-icon>
        </a>
      </div>
    </div>
  </ng-template>

  <!-- CART ITEM SECTION -->
  <ng-container *ngIf="cart$ | async as cart">
    <div class="cx-review-cart-total d-none d-lg-block d-xl-block">
      {{
        'cartItems.cartTotal'
          | cxTranslate: { count: cart.deliveryItemsQuantity }
      }}:
      {{ cart.totalPrice?.formattedValue }}
    </div>
    <div class="cx-review-cart-heading d-block d-lg-none d-xl-none">
      {{ 'checkoutReview.placeOrder' | cxTranslate }}
    </div>
    <div class="cx-review-cart-item" *ngIf="entries$ | async as entries">
      <cx-promotions
        [promotions]="
          (cart.appliedOrderPromotions || []).concat(
            cart.potentialOrderPromotions || []
          )
        "
      ></cx-promotions>

      <ng-template
        [cxOutlet]="cartOutlets.CART_ITEM_LIST"
        [cxOutletContext]="{
          items: entries,
          readonly: true,
          promotionLocation: promotionLocation,
        }"
      >
      </ng-template>
    </div>
  </ng-container>
</div>
`
    }]
  }], () => [{
    type: CheckoutDeliveryAddressFacade
  }, {
    type: CheckoutPaymentFacade
  }, {
    type: ActiveCartFacade
  }, {
    type: TranslationService
  }, {
    type: CheckoutStepService
  }, {
    type: CheckoutDeliveryModesFacade
  }, {
    type: CheckoutPaymentTypeFacade
  }, {
    type: CheckoutCostCenterFacade
  }, {
    type: UserCostCenterService
  }], null);
})();
var ServiceCheckoutReviewSubmitModule = class _ServiceCheckoutReviewSubmitModule {
  static {
    this.ɵfac = function ServiceCheckoutReviewSubmitModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServiceCheckoutReviewSubmitModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ServiceCheckoutReviewSubmitModule,
      declarations: [ServiceCheckoutReviewSubmitComponent],
      imports: [CommonModule, CardModule, I18nModule, UrlModule, RouterModule, PromotionsModule, IconModule, OutletModule],
      exports: [ServiceCheckoutReviewSubmitComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutReviewOrder: {
            component: ServiceCheckoutReviewSubmitComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      imports: [CommonModule, CardModule, I18nModule, UrlModule, RouterModule, PromotionsModule, IconModule, OutletModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceCheckoutReviewSubmitModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CardModule, I18nModule, UrlModule, RouterModule, PromotionsModule, IconModule, OutletModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutReviewOrder: {
            component: ServiceCheckoutReviewSubmitComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      declarations: [ServiceCheckoutReviewSubmitComponent],
      exports: [ServiceCheckoutReviewSubmitComponent]
    }]
  }], null, null);
})();
var CheckoutServiceDetailsComponent = class _CheckoutServiceDetailsComponent {
  constructor() {
    this.activatedRoute = inject(ActivatedRoute);
    this.checkoutStepService = inject(CheckoutStepService);
    this.globalMessageService = inject(GlobalMessageService);
    this.checkoutServiceDetailsFacade = inject(CheckoutServiceDetailsFacade);
    this.fb = inject(FormBuilder);
    this.checkoutServiceSchedulePickerService = inject(CheckoutServiceSchedulePickerService);
    this.minServiceDate$ = this.checkoutServiceSchedulePickerService.getMinDateForService();
    this.scheduleTimes$ = this.checkoutServiceSchedulePickerService.getScheduledServiceTimes();
    this.form = this.fb.group({
      scheduleDate: [null, Validators.required],
      scheduleTime: [null, Validators.required]
    });
    this.subscription = new Subscription();
    this.selectedServiceDetails$ = this.checkoutServiceDetailsFacade.getSelectedServiceDetailsState().pipe(filter((state) => !state.loading), map((state) => state.data));
    this.isSetServiceDetailsHttpErrorSub = new BehaviorSubject(false);
    this.isSetServiceDetailsHttpError$ = this.isSetServiceDetailsHttpErrorSub.asObservable();
  }
  ngOnInit() {
    this.subscription.add(this.selectedServiceDetails$.subscribe((selectedServiceDetails) => {
      if (selectedServiceDetails && selectedServiceDetails !== "") {
        const info = this.checkoutServiceSchedulePickerService.getServiceDetailsFromDateTime(selectedServiceDetails);
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
    }));
  }
  setScheduleTime(event) {
    const target = event.target;
    const value = target.value;
    this.form.patchValue({
      scheduleTime: value
    });
  }
  get backBtnText() {
    return this.checkoutStepService.getBackBntText(this.activatedRoute);
  }
  next() {
    const scheduleDate = this.form?.get("scheduleDate")?.value || "";
    const scheduleTime = this.form?.get("scheduleTime")?.value || "";
    const scheduleDateTime = this.checkoutServiceSchedulePickerService.convertToDateTime(scheduleDate, scheduleTime);
    this.checkoutServiceDetailsFacade.setServiceScheduleSlot(scheduleDateTime).subscribe({
      next: () => {
        this.onSuccess();
        this.checkoutStepService.next(this.activatedRoute);
      },
      error: () => this.onError()
    });
  }
  back() {
    this.checkoutStepService.back(this.activatedRoute);
  }
  onSuccess() {
    this.isSetServiceDetailsHttpErrorSub.next(false);
  }
  onError() {
    this.globalMessageService?.add({
      key: "serviceOrderCheckout.unknownError"
    }, GlobalMessageType.MSG_TYPE_ERROR);
    this.isSetServiceDetailsHttpErrorSub.next(true);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function CheckoutServiceDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutServiceDetailsComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutServiceDetailsComponent,
      selectors: [["cx-service-details"]],
      standalone: false,
      decls: 45,
      vars: 53,
      consts: [[1, "cx-checkout-title", "d-none", "d-lg-block", "d-xl-block"], [1, "cx-service-location-text"], [3, "formGroup"], [1, "row"], [1, "col"], ["label", "serviceOrderCheckout.datePickerLabel", 3, "control", "min"], ["class", "form-control", "formControlName", "scheduleTime", 3, "change", 4, "ngIf"], [1, "row", "cx-checkout-btns"], [1, "col-md-12", "col-lg-6"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "btn", "btn-block", "btn-primary", 3, "click", "disabled"], ["formControlName", "scheduleTime", 1, "form-control", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]],
      template: function CheckoutServiceDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "h2", 0);
          ɵɵpipe(1, "cxTranslate");
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(4, "div", 1);
          ɵɵpipe(5, "cxTranslate");
          ɵɵtext(6);
          ɵɵpipe(7, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(8, "h2", 0);
          ɵɵpipe(9, "cxTranslate");
          ɵɵtext(10);
          ɵɵpipe(11, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(12, "form", 2);
          ɵɵelement(13, "cx-form-required-legend");
          ɵɵelementStart(14, "div", 3)(15, "label", 4);
          ɵɵpipe(16, "cxTranslate");
          ɵɵelementStart(17, "div");
          ɵɵtext(18);
          ɵɵpipe(19, "cxTranslate");
          ɵɵelement(20, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelementStart(21, "div");
          ɵɵelement(22, "cx-date-picker", 5);
          ɵɵpipe(23, "async");
          ɵɵelementEnd()();
          ɵɵelementStart(24, "label", 4);
          ɵɵpipe(25, "cxTranslate");
          ɵɵelementStart(26, "div");
          ɵɵtext(27);
          ɵɵpipe(28, "cxTranslate");
          ɵɵelement(29, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelementStart(30, "div");
          ɵɵtemplate(31, CheckoutServiceDetailsComponent_select_31_Template, 2, 1, "select", 6);
          ɵɵpipe(32, "async");
          ɵɵelementEnd()()()();
          ɵɵelementStart(33, "div", 7)(34, "section", 8)(35, "button", 9);
          ɵɵpipe(36, "cxTranslate");
          ɵɵlistener("click", function CheckoutServiceDetailsComponent_Template_button_click_35_listener() {
            return ctx.back();
          });
          ɵɵtext(37);
          ɵɵpipe(38, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(39, "section", 8)(40, "button", 10);
          ɵɵpipe(41, "async");
          ɵɵpipe(42, "cxTranslate");
          ɵɵlistener("click", function CheckoutServiceDetailsComponent_Template_button_click_40_listener() {
            return ctx.next();
          });
          ɵɵtext(43);
          ɵɵpipe(44, "cxTranslate");
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          let tmp_10_0;
          ɵɵattribute("aria-label", ɵɵpipeBind1(1, 19, "serviceOrderCheckout.serviceLocationHeading"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 21, "serviceOrderCheckout.serviceLocationHeading"), "\n");
          ɵɵadvance(2);
          ɵɵattribute("aria-label", ɵɵpipeBind1(5, 23, "serviceOrderCheckout.address"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 25, "serviceOrderCheckout.address"), "\n");
          ɵɵadvance(2);
          ɵɵattribute("aria-label", ɵɵpipeBind1(9, 27, "serviceOrderCheckout.serviceScheduleHeading"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 29, "serviceOrderCheckout.serviceScheduleHeading"), "\n");
          ɵɵadvance(2);
          ɵɵproperty("formGroup", ctx.form);
          ɵɵadvance(3);
          ɵɵattribute("aria-label", ɵɵpipeBind1(16, 31, "serviceOrderCheckout.datePickerLabel"));
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(19, 33, "serviceOrderCheckout.datePickerLabel"), " ");
          ɵɵadvance(4);
          ɵɵproperty("control", ctx.form.get("scheduleDate"))("min", (tmp_10_0 = ɵɵpipeBind1(23, 35, ctx.minServiceDate$)) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : void 0);
          ɵɵadvance(2);
          ɵɵattribute("aria-label", ɵɵpipeBind1(25, 37, "serviceOrderCheckout.timePickerLabel"));
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(28, 39, "serviceOrderCheckout.timePickerLabel"), " ");
          ɵɵadvance(4);
          ɵɵproperty("ngIf", ɵɵpipeBind1(32, 41, ctx.scheduleTimes$));
          ɵɵadvance(4);
          ɵɵattribute("aria-label", ɵɵpipeBind1(36, 43, ctx.backBtnText));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(38, 45, ctx.backBtnText), " ");
          ɵɵadvance(3);
          ɵɵproperty("disabled", ɵɵpipeBind1(41, 47, ctx.isSetServiceDetailsHttpError$));
          ɵɵattribute("aria-label", ɵɵpipeBind1(42, 49, "common.continue"));
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(44, 51, "common.continue"), " ");
        }
      },
      dependencies: [NgForOf, NgIf, DatePickerComponent, ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutServiceDetailsComponent, [{
    type: Component,
    args: [{
      selector: "cx-service-details",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<h2
  class="cx-checkout-title d-none d-lg-block d-xl-block"
  [attr.aria-label]="
    'serviceOrderCheckout.serviceLocationHeading' | cxTranslate
  "
>
  {{ 'serviceOrderCheckout.serviceLocationHeading' | cxTranslate }}
</h2>
<div
  class="cx-service-location-text"
  [attr.aria-label]="'serviceOrderCheckout.address' | cxTranslate"
>
  {{ 'serviceOrderCheckout.address' | cxTranslate }}
</div>
<h2
  class="cx-checkout-title d-none d-lg-block d-xl-block"
  [attr.aria-label]="
    'serviceOrderCheckout.serviceScheduleHeading' | cxTranslate
  "
>
  {{ 'serviceOrderCheckout.serviceScheduleHeading' | cxTranslate }}
</h2>
<form [formGroup]="this.form">
  <cx-form-required-legend />
  <div class="row">
    <label
      class="col"
      [attr.aria-label]="'serviceOrderCheckout.datePickerLabel' | cxTranslate"
    >
      <div>
        {{ 'serviceOrderCheckout.datePickerLabel' | cxTranslate }}
        <cx-form-required-asterisks />
      </div>
      <div>
        <cx-date-picker
          [control]="$any(form.get('scheduleDate'))"
          [min]="(minServiceDate$ | async) ?? undefined"
          label="serviceOrderCheckout.datePickerLabel"
        >
        </cx-date-picker>
      </div>
    </label>

    <label
      class="col"
      [attr.aria-label]="'serviceOrderCheckout.timePickerLabel' | cxTranslate"
    >
      <div>
        {{ 'serviceOrderCheckout.timePickerLabel' | cxTranslate }}
        <cx-form-required-asterisks />
      </div>
      <div>
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
      </div>
    </label>
  </div>
</form>

<div class="row cx-checkout-btns">
  <section class="col-md-12 col-lg-6">
    <button
      class="btn btn-block btn-secondary"
      [attr.aria-label]="backBtnText | cxTranslate"
      (click)="back()"
    >
      {{ backBtnText | cxTranslate }}
    </button>
  </section>
  <section class="col-md-12 col-lg-6">
    <button
      class="btn btn-block btn-primary"
      [attr.aria-label]="'common.continue' | cxTranslate"
      [disabled]="isSetServiceDetailsHttpError$ | async"
      (click)="next()"
    >
      {{ 'common.continue' | cxTranslate }}
    </button>
  </section>
</div>
`
    }]
  }], null, null);
})();
var CheckoutServiceDetailsModule = class _CheckoutServiceDetailsModule {
  static {
    this.ɵfac = function CheckoutServiceDetailsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutServiceDetailsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutServiceDetailsModule,
      declarations: [CheckoutServiceDetailsComponent],
      imports: [CommonModule, I18nModule, DatePickerModule, ReactiveFormsModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      exports: [CheckoutServiceDetailsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutServiceDetails: {
            component: CheckoutServiceDetailsComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      imports: [CommonModule, I18nModule, DatePickerModule, ReactiveFormsModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutServiceDetailsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, DatePickerModule, ReactiveFormsModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutServiceDetails: {
            component: CheckoutServiceDetailsComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      exports: [CheckoutServiceDetailsComponent],
      declarations: [CheckoutServiceDetailsComponent]
    }]
  }], null, null);
})();
var ServiceCheckoutDeliveryModeComponent = class _ServiceCheckoutDeliveryModeComponent extends CheckoutDeliveryModeComponent {
  constructor() {
    super(...arguments);
    this.checkoutServiceDetailsFacade = inject(CheckoutServiceDetailsFacade);
    this.config = inject(S4ServiceDeliveryModeConfig);
    this.hasServiceProducts$ = this.checkoutServiceDetailsFacade.hasServiceItems();
    this.serviceDeliveryConfig = this.config.s4ServiceDeliveryMode;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵServiceCheckoutDeliveryModeComponent_BaseFactory;
      return function ServiceCheckoutDeliveryModeComponent_Factory(__ngFactoryType__) {
        return (ɵServiceCheckoutDeliveryModeComponent_BaseFactory || (ɵServiceCheckoutDeliveryModeComponent_BaseFactory = ɵɵgetInheritedFactory(_ServiceCheckoutDeliveryModeComponent)))(__ngFactoryType__ || _ServiceCheckoutDeliveryModeComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ServiceCheckoutDeliveryModeComponent,
      selectors: [["cx-delivery-mode"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 27,
      vars: 22,
      consts: [["loading", ""], ["displayDeliveryMode", ""], ["displayServiceDelivery", ""], ["role", "radiogroup"], [4, "ngTemplateOutlet"], [1, "cx-checkout-title", "d-none", "d-lg-block", "d-xl-block"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["cxInnerComponentsHost", ""], [1, "row", "cx-checkout-btns"], [1, "col-md-12", "col-lg-6"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "btn", "btn-block", "btn-primary", 3, "click", "disabled"], ["role", "status"], [1, "cx-delivery-mode-wrapper", 3, "formGroup"], ["class", "form-check", 4, "ngFor", "ngForOf"], [3, "cxOutlet", "cxOutletContext"], [1, "form-check"], ["type", "radio", "formControlName", "deliveryModeId", 1, "form-check-input", 3, "change", "click", "value", "id"], ["aria-hidden", "true", 1, "cx-delivery-label", "form-check-label", "form-radio-label", 3, "for"], [1, "cx-delivery-mode"], [1, "cx-delivery-mode-description"], [1, "cx-delivery-price"], [1, "cx-delivery-details"], [1, "cx-spinner"], ["type", "radio", 1, "form-check-input", 3, "checked", "value", "id"], ["class", "cx-delivery-mode-description", 4, "ngIf"], [1, "cx-delivery-mode-wrapper"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function ServiceCheckoutDeliveryModeComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "fieldset", 3);
          ɵɵtemplate(1, ServiceCheckoutDeliveryModeComponent_ng_container_1_Template, 1, 0, "ng-container", 4);
          ɵɵelementStart(2, "legend", 5);
          ɵɵtext(3);
          ɵɵpipe(4, "cxTranslate");
          ɵɵelementEnd();
          ɵɵtemplate(5, ServiceCheckoutDeliveryModeComponent_ng_container_5_Template, 7, 11, "ng-container", 6);
          ɵɵpipe(6, "async");
          ɵɵpipe(7, "async");
          ɵɵelementEnd();
          ɵɵtemplate(8, ServiceCheckoutDeliveryModeComponent_ng_container_8_Template, 6, 9, "ng-container", 7);
          ɵɵpipe(9, "async");
          ɵɵtemplate(10, ServiceCheckoutDeliveryModeComponent_ng_template_10_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementContainer(12, 8);
          ɵɵelementStart(13, "div", 9)(14, "div", 10)(15, "button", 11);
          ɵɵlistener("click", function ServiceCheckoutDeliveryModeComponent_Template_button_click_15_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.back());
          });
          ɵɵtext(16);
          ɵɵpipe(17, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(18, "div", 10)(19, "button", 12);
          ɵɵpipe(20, "async");
          ɵɵlistener("click", function ServiceCheckoutDeliveryModeComponent_Template_button_click_19_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.next());
          });
          ɵɵtext(21);
          ɵɵpipe(22, "cxTranslate");
          ɵɵelementEnd()()();
          ɵɵtemplate(23, ServiceCheckoutDeliveryModeComponent_ng_template_23_Template, 8, 11, "ng-template", null, 1, ɵɵtemplateRefExtractor)(25, ServiceCheckoutDeliveryModeComponent_ng_template_25_Template, 2, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r8 = ɵɵreference(11);
          const displayServiceDelivery_r9 = ɵɵreference(26);
          ɵɵadvance();
          ɵɵproperty("ngTemplateOutlet", displayServiceDelivery_r9);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 8, "serviceOrderCheckout.productDeliveryOptions"), " ");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", !ɵɵpipeBind1(6, 10, ctx.isUpdating$) && ɵɵpipeBind1(7, 12, ctx.supportedDeliveryModes$))("ngIfElse", loading_r8);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(9, 14, ctx.activeCartFacade.hasPickupItems()));
          ɵɵadvance(8);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(17, 16, ctx.backBtnText), " ");
          ɵɵadvance(3);
          ɵɵproperty("disabled", ctx.deliveryModeInvalid || ɵɵpipeBind1(20, 18, ctx.isSetDeliveryModeHttpError$));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(22, 20, "common.continue"), " ");
        }
      },
      dependencies: [NgForOf, NgIf, NgTemplateOutlet, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, SpinnerComponent, OutletDirective, InnerComponentsHostDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceCheckoutDeliveryModeComponent, [{
    type: Component,
    args: [{
      selector: "cx-delivery-mode",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<fieldset role="radiogroup">
  <ng-container *ngTemplateOutlet="displayServiceDelivery"></ng-container>
  <legend class="cx-checkout-title d-none d-lg-block d-xl-block">
    {{ 'serviceOrderCheckout.productDeliveryOptions' | cxTranslate }}
  </legend>
  <ng-container
    *ngIf="
      !(isUpdating$ | async) &&
        (supportedDeliveryModes$ | async) as supportedDeliveryModes;
      else loading
    "
  >
    <div role="status" [attr.aria-label]="'common.loaded' | cxTranslate"></div>
    <div [formGroup]="mode" class="cx-delivery-mode-wrapper">
      <div class="form-check" *ngFor="let mode of supportedDeliveryModes">
        <input
          [attr.aria-checked]="getAriaChecked(mode.code)"
          class="form-check-input"
          type="radio"
          (change)="changeMode(mode.code, $event)"
          (click)="changeMode(mode.code, $event)"
          [value]="mode.code"
          formControlName="deliveryModeId"
          id="deliveryMode-{{ mode.code }}"
          [attr.aria-label]="
            mode.name +
            ' ' +
            mode.description +
            ' ' +
            mode.deliveryCost?.formattedValue
          "
        />
        <label
          class="cx-delivery-label form-check-label form-radio-label"
          for="deliveryMode-{{ mode.code }}"
          aria-hidden="true"
        >
          <div class="cx-delivery-mode">
            {{ mode.name }}
            <span class="cx-delivery-mode-description"
              >({{ mode.description }})</span
            >
          </div>
          <div class="cx-delivery-price">
            {{ mode.deliveryCost?.formattedValue }}
          </div>
          <div class="cx-delivery-details"></div>
        </label>
      </div>
      <ng-template
        [cxOutlet]="CartOutlets.DELIVERY_MODE"
        [cxOutletContext]="{
          item: activeCartFacade.getActive() | async,
        }"
      >
      </ng-template>
    </div>
  </ng-container>
</fieldset>

<ng-container *ngIf="activeCartFacade.hasPickupItems() | async">
  <h2 class="cx-checkout-title d-none d-lg-block d-xl-block">
    {{ 'checkoutMode.deliveryEntries' | cxTranslate }}
  </h2>

  <ng-template
    [cxOutlet]="CartOutlets.CART_ITEM_LIST"
    [cxOutletContext]="{
      items: activeCartFacade.getDeliveryEntries() | async,
      readonly: true,
    }"
  >
  </ng-template>
</ng-container>

<ng-template #loading>
  <div class="cx-spinner">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>

<ng-container cxInnerComponentsHost></ng-container>

<div class="row cx-checkout-btns">
  <div class="col-md-12 col-lg-6">
    <button class="btn btn-block btn-secondary" (click)="back()">
      {{ backBtnText | cxTranslate }}
    </button>
  </div>
  <div class="col-md-12 col-lg-6">
    <button
      class="btn btn-block btn-primary"
      [disabled]="deliveryModeInvalid || (isSetDeliveryModeHttpError$ | async)"
      (click)="next()"
    >
      {{ 'common.continue' | cxTranslate }}
    </button>
  </div>
</div>

<ng-template #displayDeliveryMode let-content="content">
  <input
    [attr.aria-checked]="getAriaChecked(content.code)"
    class="form-check-input"
    type="radio"
    [checked]="true"
    [value]="content.code"
    id="deliveryMode-{{ content.code }}"
    [attr.aria-label]="
      content.name +
      ' ' +
      content.description +
      ' ' +
      content.deliveryCost?.formattedValue
    "
  />
  <label
    class="cx-delivery-label form-check-label form-radio-label"
    for="deliveryMode-{{ content.code }}"
    aria-hidden="true"
  >
    <div class="cx-delivery-mode">
      {{ content.name }}
      <span *ngIf="content.description" class="cx-delivery-mode-description"
        >({{ content.description }})</span
      >
    </div>
    <div class="cx-delivery-price">
      {{ content.deliveryCost?.formattedValue }}
    </div>
    <div class="cx-delivery-details"></div>
  </label>
</ng-template>

<ng-template #displayServiceDelivery>
  <ng-container *ngIf="hasServiceProducts$ | async">
    <legend class="cx-checkout-title d-none d-lg-block d-xl-block">
      {{ 'serviceOrderCheckout.serviceDeliveryOption' | cxTranslate }}
    </legend>
    <div class="cx-delivery-mode-wrapper">
      <div class="form-check">
        <ng-container
          *ngTemplateOutlet="
            displayDeliveryMode;
            context: { content: serviceDeliveryConfig }
          "
        ></ng-container>
      </div>
    </div>
  </ng-container>
</ng-template>
`
    }]
  }], null, null);
})();
var ServiceCheckoutDeliveryModeModule = class _ServiceCheckoutDeliveryModeModule {
  static {
    this.ɵfac = function ServiceCheckoutDeliveryModeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServiceCheckoutDeliveryModeModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ServiceCheckoutDeliveryModeModule,
      declarations: [ServiceCheckoutDeliveryModeComponent],
      imports: [CommonModule, ReactiveFormsModule, I18nModule, SpinnerModule, OutletModule, PageComponentModule, FeaturesConfigModule],
      exports: [ServiceCheckoutDeliveryModeComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutDeliveryMode: {
            component: ServiceCheckoutDeliveryModeComponent
          }
        }
      })],
      imports: [CommonModule, ReactiveFormsModule, I18nModule, SpinnerModule, OutletModule, PageComponentModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceCheckoutDeliveryModeModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, I18nModule, SpinnerModule, OutletModule, PageComponentModule, FeaturesConfigModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutDeliveryMode: {
            component: ServiceCheckoutDeliveryModeComponent
          }
        }
      })],
      declarations: [ServiceCheckoutDeliveryModeComponent],
      exports: [ServiceCheckoutDeliveryModeComponent]
    }]
  }], null, null);
})();
var S4ServiceCheckoutComponentModule = class _S4ServiceCheckoutComponentModule {
  static {
    this.ɵfac = function S4ServiceCheckoutComponentModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _S4ServiceCheckoutComponentModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _S4ServiceCheckoutComponentModule,
      imports: [ServiceCheckoutReviewSubmitModule, CheckoutServiceDetailsModule, ServiceCheckoutDeliveryModeModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: CheckoutStepsSetGuard,
        useExisting: CheckoutServiceOrderStepsSetGuard
      }],
      imports: [ServiceCheckoutReviewSubmitModule, CheckoutServiceDetailsModule, ServiceCheckoutDeliveryModeModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(S4ServiceCheckoutComponentModule, [{
    type: NgModule,
    args: [{
      imports: [ServiceCheckoutReviewSubmitModule, CheckoutServiceDetailsModule, ServiceCheckoutDeliveryModeModule],
      providers: [{
        provide: CheckoutStepsSetGuard,
        useExisting: CheckoutServiceOrderStepsSetGuard
      }]
    }]
  }], null, null);
})();
var CheckoutServiceDetailsAdapter = class {
};
var CheckoutServiceDetailsConnector = class _CheckoutServiceDetailsConnector {
  constructor() {
    this.adapter = inject(CheckoutServiceDetailsAdapter);
  }
  setServiceScheduleSlot(userId, cartId, scheduledAt) {
    return this.adapter.setServiceScheduleSlot(userId, cartId, scheduledAt);
  }
  static {
    this.ɵfac = function CheckoutServiceDetailsConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutServiceDetailsConnector)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutServiceDetailsConnector,
      factory: _CheckoutServiceDetailsConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutServiceDetailsConnector, [{
    type: Injectable
  }], null, null);
})();
var CheckoutServiceDetailsService = class _CheckoutServiceDetailsService {
  constructor() {
    this.activeCartFacade = inject(ActiveCartFacade);
    this.userIdService = inject(UserIdService);
    this.commandService = inject(CommandService);
    this.serviceDetailsConnector = inject(CheckoutServiceDetailsConnector);
    this.eventService = inject(EventService);
    this.checkoutQueryFacade = inject(CheckoutQueryFacade);
    this.setServiceScheduleSlotCommand = this.commandService.create((scheduledAt) => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.serviceDetailsConnector.setServiceScheduleSlot(userId, cartId, {
      scheduledAt
    }).pipe(tap(() => this.eventService.dispatch({
      userId,
      cartId,
      scheduledAt
    }, CheckoutServiceDetailsSetEvent))))), {
      strategy: CommandStrategy.CancelPrevious
    });
  }
  checkoutPreconditions() {
    return combineLatest([this.userIdService.takeUserId(), this.activeCartFacade.takeActiveCartId(), this.activeCartFacade.isGuestCart()]).pipe(take(1), map(([userId, cartId, isGuestCart]) => {
      if (!userId || !cartId || userId === OCC_USER_ID_ANONYMOUS && !isGuestCart) {
        throw new Error("Checkout conditions not met");
      }
      return [userId, cartId];
    }));
  }
  setServiceScheduleSlot(scheduledAt) {
    return this.setServiceScheduleSlotCommand.execute(scheduledAt);
  }
  getSelectedServiceDetailsState() {
    return this.checkoutQueryFacade.getCheckoutDetailsState().pipe(map((state) => __spreadProps(__spreadValues({}, state), {
      data: state.data?.servicedAt
    })));
  }
  getServiceProducts() {
    return this.activeCartFacade.getEntries().pipe(map((entries) => {
      return entries.map((entry) => {
        if (entry.product?.productTypes === "SERVICE") {
          return entry.product?.code;
        } else {
          return "";
        }
      }).filter((name) => name !== "");
    }));
  }
  hasNonServiceItems() {
    return combineLatest([this.activeCartFacade.getDeliveryEntries(), this.getServiceProducts()]).pipe(take(1), map(([allEntries, serviceEntries]) => {
      return allEntries.length - serviceEntries.length > 0;
    }));
  }
  hasServiceItems() {
    return this.getServiceProducts().pipe(map((products) => products.length > 0));
  }
  static {
    this.ɵfac = function CheckoutServiceDetailsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutServiceDetailsService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutServiceDetailsService,
      factory: _CheckoutServiceDetailsService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutServiceDetailsService, [{
    type: Injectable
  }], null, null);
})();
var S4ServiceCheckoutCoreModule = class _S4ServiceCheckoutCoreModule {
  static {
    this.ɵfac = function S4ServiceCheckoutCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _S4ServiceCheckoutCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _S4ServiceCheckoutCoreModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [CheckoutServiceDetailsService, {
        provide: CheckoutServiceDetailsFacade,
        useExisting: CheckoutServiceDetailsService
      }, CheckoutServiceDetailsConnector, CxDatePipe]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(S4ServiceCheckoutCoreModule, [{
    type: NgModule,
    args: [{
      providers: [CheckoutServiceDetailsService, {
        provide: CheckoutServiceDetailsFacade,
        useExisting: CheckoutServiceDetailsService
      }, CheckoutServiceDetailsConnector, CxDatePipe]
    }]
  }], null, null);
})();
var CONTENT_TYPE_JSON_HEADER = {
  "Content-Type": "application/json"
};
var OccCheckoutServiceDetailsAdapter = class _OccCheckoutServiceDetailsAdapter {
  constructor() {
    this.http = inject(HttpClient);
    this.logger = inject(LoggerService);
    this.occEndpoints = inject(OccEndpointsService);
  }
  setServiceScheduleSlot(userId, cartId, scheduledAt) {
    const url = this.occEndpoints.buildUrl("setServiceScheduleSlot", {
      urlParams: {
        userId,
        cartId
      }
    });
    const headers = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER));
    return this.http.patch(url, scheduledAt, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  static {
    this.ɵfac = function OccCheckoutServiceDetailsAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCheckoutServiceDetailsAdapter)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCheckoutServiceDetailsAdapter,
      factory: _OccCheckoutServiceDetailsAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCheckoutServiceDetailsAdapter, [{
    type: Injectable
  }], null, null);
})();
var defaultServiceOrderCheckoutDetailsOccEndpoint = {
  getCheckoutDetails: "users/${userId}/carts/${cartId}?fields=deliveryAddress(FULL),deliveryMode(FULL),paymentInfo(FULL),costCenter(FULL),purchaseOrderNumber,paymentType(FULL),servicedAt"
};
var defaultOccCheckoutServiceOrderConfig = {
  backend: {
    occ: {
      endpoints: __spreadProps(__spreadValues({}, defaultServiceOrderCheckoutDetailsOccEndpoint), {
        setServiceScheduleSlot: "users/${userId}/carts/${cartId}/serviceOrder/serviceScheduleSlot"
      })
    }
  }
};
var S4ServiceCheckoutOccModule = class _S4ServiceCheckoutOccModule {
  static {
    this.ɵfac = function S4ServiceCheckoutOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _S4ServiceCheckoutOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _S4ServiceCheckoutOccModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccCheckoutServiceOrderConfig), {
        provide: CheckoutServiceDetailsAdapter,
        useClass: OccCheckoutServiceDetailsAdapter
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(S4ServiceCheckoutOccModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig(defaultOccCheckoutServiceOrderConfig), {
        provide: CheckoutServiceDetailsAdapter,
        useClass: OccCheckoutServiceDetailsAdapter
      }]
    }]
  }], null, null);
})();
var S4ServiceCheckoutModule = class _S4ServiceCheckoutModule {
  static {
    this.ɵfac = function S4ServiceCheckoutModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _S4ServiceCheckoutModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _S4ServiceCheckoutModule,
      imports: [S4ServiceCheckoutComponentModule, S4ServiceCheckoutCoreModule, S4ServiceCheckoutOccModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [S4ServiceCheckoutComponentModule, S4ServiceCheckoutCoreModule, S4ServiceCheckoutOccModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(S4ServiceCheckoutModule, [{
    type: NgModule,
    args: [{
      imports: [S4ServiceCheckoutComponentModule, S4ServiceCheckoutCoreModule, S4ServiceCheckoutOccModule]
    }]
  }], null, null);
})();
export {
  CheckoutServiceDetailsAdapter,
  CheckoutServiceDetailsComponent,
  CheckoutServiceDetailsConnector,
  CheckoutServiceDetailsModule,
  CheckoutServiceDetailsService,
  CheckoutServiceOrderStepsSetGuard,
  OccCheckoutServiceDetailsAdapter,
  S4ServiceCheckoutComponentModule,
  S4ServiceCheckoutCoreModule,
  S4ServiceCheckoutModule,
  S4ServiceCheckoutOccModule,
  ServiceCheckoutDeliveryModeComponent,
  ServiceCheckoutDeliveryModeModule,
  ServiceCheckoutReviewSubmitComponent,
  ServiceCheckoutReviewSubmitModule
};
//# sourceMappingURL=@spartacus_s4-service_checkout.js.map
