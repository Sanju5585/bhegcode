import {
  CartNotEmptyGuard,
  CheckoutAuthGuard,
  CheckoutConfigService,
  CheckoutDeliveryAddressComponent,
  CheckoutReviewSubmitComponent,
  CheckoutStepService,
  CheckoutStepsSetGuard
} from "./chunk-WVN4XMLZ.js";
import {
  B2BPaymentTypeEnum,
  CheckoutCostCenterFacade,
  CheckoutPaymentTypeFacade
} from "./chunk-OKYVL3N7.js";
import {
  CheckoutDeliveryAddressFacade,
  CheckoutDeliveryModesFacade,
  CheckoutPaymentFacade,
  CheckoutStepType
} from "./chunk-X6DUCLWC.js";
import {
  AddressFormComponent,
  AddressFormModule
} from "./chunk-XTCFQJ22.js";
import {
  CartValidationGuard
} from "./chunk-Q7WXRDFA.js";
import {
  UserAccountFacade
} from "./chunk-LZQV6UAH.js";
import {
  ActiveCartFacade
} from "./chunk-KEAKWHYV.js";
import {
  CardComponent,
  CardModule,
  IconComponent,
  IconModule,
  OutletDirective,
  OutletModule,
  PromotionsComponent,
  PromotionsModule,
  SpinnerComponent,
  SpinnerModule
} from "./chunk-D5RDRHN5.js";
import {
  AuthRedirectService,
  AuthService,
  B2BUserRole,
  ConfigModule,
  FeaturesConfigModule,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  LoggerService,
  OccHttpErrorType,
  RoutingConfigService,
  SemanticPathService,
  TranslatePipe,
  TranslationService,
  UrlModule,
  UrlPipe,
  UserAddressService,
  UserCostCenterService,
  getLastValueSync,
  isNotUndefined,
  provideDefaultConfig
} from "./chunk-VIVIQI6G.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-EBCNDD52.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet
} from "./chunk-S7KROBXW.js";
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Injectable,
  NgModule,
  ViewChild,
  inject,
  isDevMode,
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
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-7OJSO65L.js";
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  distinctUntilChanged,
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

// node_modules/@spartacus/checkout/fesm2022/spartacus-checkout-b2b-components.mjs
function CheckoutCostCenterComponent_ng_container_0_ng_container_3_div_1_option_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const costCenter_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵpropertyInterpolate("value", costCenter_r3.code);
    ɵɵproperty("selected", ctx_r1.costCenterId === costCenter_r3.code);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", costCenter_r3.name, " ");
  }
}
function CheckoutCostCenterComponent_ng_container_0_ng_container_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "label")(2, "span", 3);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "select", 4);
    ɵɵlistener("change", function CheckoutCostCenterComponent_ng_container_0_ng_container_3_div_1_Template_select_change_5_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setCostCenter($event.target.value));
    });
    ɵɵtemplate(6, CheckoutCostCenterComponent_ng_container_0_ng_container_3_div_1_option_6_Template, 2, 3, "option", 5);
    ɵɵelementEnd();
    ɵɵelementStart(7, "span", 6);
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const costCenters_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 3, "checkoutB2B.costCenter"));
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", costCenters_r4);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(9, 5, "checkoutB2B.availableLabel"));
  }
}
function CheckoutCostCenterComponent_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckoutCostCenterComponent_ng_container_0_ng_container_3_div_1_Template, 10, 7, "div", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const costCenters_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", costCenters_r4.length !== 0);
  }
}
function CheckoutCostCenterComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1)(2, "div", 2);
    ɵɵtemplate(3, CheckoutCostCenterComponent_ng_container_0_ng_container_3_Template, 2, 1, "ng-container", 0);
    ɵɵpipe(4, "async");
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ɵɵpipeBind1(4, 1, ctx_r1.costCenters$));
  }
}
function B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 12)(1, "div", 16)(2, "button", 17);
    ɵɵlistener("click", function B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_2_div_3_Template_button_click_2_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.showNewAddressForm());
    });
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 1, "checkoutAddress.addNewAddress"), " ");
  }
}
function B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18)(1, "div", 19);
    ɵɵlistener("click", function B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_2_div_5_Template_div_click_1_listener() {
      const card_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.selectAddress(card_r5.address));
    });
    ɵɵelementStart(2, "cx-card", 20);
    ɵɵlistener("sendCard", function B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_2_div_5_Template_cx_card_sendCard_2_listener() {
      const card_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.selectAddress(card_r5.address));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const card_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    ɵɵadvance(2);
    ɵɵproperty("border", true)("index", i_r6)("fitToContainer", true)("content", card_r5.card)("role", "group");
  }
}
function B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p", 8);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(3, B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_2_div_3_Template, 5, 3, "div", 9);
    ɵɵelementStart(4, "div", 10);
    ɵɵtemplate(5, B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_2_div_5_Template, 3, 5, "div", 11);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 12)(7, "div", 13)(8, "button", 14);
    ɵɵlistener("click", function B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_2_Template_button_click_8_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.back());
    });
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(11, "div", 13)(12, "button", 15);
    ɵɵpipe(13, "async");
    ɵɵlistener("click", function B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_2_Template_button_click_12_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.next());
    });
    ɵɵtext(14);
    ɵɵpipe(15, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const cards_r7 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 6, "checkoutAddress.selectYourDeliveryAddress"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.isAccountPayment);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", cards_r7);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 8, ctx_r2.backBtnText), " ");
    ɵɵadvance(3);
    ɵɵproperty("disabled", !((tmp_11_0 = ɵɵpipeBind1(13, 10, ctx_r2.selectedAddress$)) == null ? null : tmp_11_0.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 12, "common.continue"), " ");
  }
}
function B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_4_cx_address_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-address-form", 22);
    ɵɵlistener("backToAddress", function B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_4_cx_address_form_0_Template_cx_address_form_backToAddress_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.hideNewAddressForm(false));
    })("submitAddress", function B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_4_cx_address_form_0_Template_cx_address_form_submitAddress_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.addAddress($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("showTitleCode", true);
  }
}
function B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-address-form", 23);
    ɵɵpipe(1, "cxTranslate");
    ɵɵlistener("backToAddress", function B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_4_ng_template_1_Template_cx_address_form_backToAddress_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.hideNewAddressForm(true));
    })("submitAddress", function B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_4_ng_template_1_Template_cx_address_form_submitAddress_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.addAddress($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵpropertyInterpolate("cancelBtnLabel", ɵɵpipeBind1(1, 3, ctx_r2.backBtnText));
    ɵɵproperty("showTitleCode", true)("setAsDefaultField", !ctx_r2.isGuestCheckout);
  }
}
function B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_4_cx_address_form_0_Template, 1, 1, "cx-address-form", 21)(1, B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_4_ng_template_1_Template, 2, 5, "ng-template", null, 3, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const initialAddressForm_r10 = ɵɵreference(2);
    const cards_r7 = ɵɵnextContext(2).ngIf;
    ɵɵproperty("ngIf", cards_r7.length)("ngIfElse", initialAddressForm_r10);
  }
}
function B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7)(2, B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_2_Template, 16, 14, "ng-template", null, 1, ɵɵtemplateRefExtractor)(4, B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_ng_template_4_Template, 3, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const showExistingAddresses_r11 = ɵɵreference(3);
    const newAddressForm_r12 = ɵɵreference(5);
    const cards_r7 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isAccountPayment || (cards_r7 == null ? null : cards_r7.length) && !ctx_r2.addressFormOpened)("ngIfThen", showExistingAddresses_r11)("ngIfElse", newAddressForm_r12);
  }
}
function B2BCheckoutDeliveryAddressComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, B2BCheckoutDeliveryAddressComponent_ng_container_3_ng_container_1_Template, 6, 3, "ng-container", 6);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const loading_r13 = ɵɵreference(6);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ɵɵpipeBind1(2, 2, ctx_r2.isUpdating$))("ngIfElse", loading_r13);
  }
}
function B2BCheckoutDeliveryAddressComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
var _c0 = ["poNumber"];
function CheckoutPaymentTypeComponent_ng_container_3_ng_container_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 14)(1, "input", 15);
    ɵɵlistener("change", function CheckoutPaymentTypeComponent_ng_container_3_ng_container_1_div_17_Template_input_change_1_listener() {
      const type_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.changeType(type_r3.code));
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "label", 16)(3, "div", 17);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵpropertyInterpolate1("id", "paymentType-", type_r3.code, "");
    ɵɵproperty("value", type_r3.code)("checked", type_r3.code === ctx_r3.typeSelected);
    ɵɵadvance();
    ɵɵpropertyInterpolate1("for", "paymentType-", type_r3.code, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 7, "paymentTypes.paymentType_" + (type_r3 == null ? null : type_r3.code)), " ");
  }
}
function CheckoutPaymentTypeComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 5)(2, "div", 6)(3, "label")(4, "span", 7);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(7, "input", 8, 1);
    ɵɵpipe(9, "cxTranslate");
    ɵɵpipe(10, "async");
    ɵɵelementEnd()()();
    ɵɵelementStart(11, "div", 5)(12, "div", 6)(13, "label", 9)(14, "span", 7);
    ɵɵtext(15);
    ɵɵpipe(16, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(17, CheckoutPaymentTypeComponent_ng_container_3_ng_container_1_div_17_Template, 6, 9, "div", 10);
    ɵɵelementEnd()()();
    ɵɵelementStart(18, "div", 11)(19, "div", 6)(20, "button", 12);
    ɵɵlistener("click", function CheckoutPaymentTypeComponent_ng_container_3_ng_container_1_Template_button_click_20_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.back());
    });
    ɵɵtext(21);
    ɵɵpipe(22, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(23, "div", 6)(24, "button", 13);
    ɵɵlistener("click", function CheckoutPaymentTypeComponent_ng_container_3_ng_container_1_Template_button_click_24_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.next());
    });
    ɵɵtext(25);
    ɵɵpipe(26, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const paymentTypes_r5 = ɵɵnextContext().ngIf;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 7, "checkoutB2B.poNumber"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(9, 9, "checkoutB2B.placeholder"));
    ɵɵpropertyInterpolate("value", ɵɵpipeBind1(10, 11, ctx_r3.cartPoNumber$));
    ɵɵadvance(8);
    ɵɵtextInterpolate(ɵɵpipeBind1(16, 13, "paymentTypes.title"));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", paymentTypes_r5);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(22, 15, "checkout.backToCart"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(26, 17, "common.continue"), " ");
  }
}
function CheckoutPaymentTypeComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckoutPaymentTypeComponent_ng_container_3_ng_container_1_Template, 27, 19, "ng-container", 4);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const paymentTypes_r5 = ctx.ngIf;
    const ctx_r3 = ɵɵnextContext();
    const loading_r6 = ɵɵreference(6);
    ɵɵadvance();
    ɵɵproperty("ngIf", !!paymentTypes_r5.length && ɵɵpipeBind1(2, 2, ctx_r3.typeSelected$) && !ɵɵpipeBind1(3, 4, ctx_r3.isUpdating$))("ngIfElse", loading_r6);
  }
}
function CheckoutPaymentTypeComponent_ng_template_5_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
function CheckoutPaymentTypeComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CheckoutPaymentTypeComponent_ng_template_5_div_0_Template, 2, 0, "div", 18);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r3.paymentTypesError);
  }
}
var _c1 = (a0) => ({
  cxRoute: a0
});
var _c2 = (a0) => ({
  item: a0,
  readonly: true
});
var _c3 = (a0) => ({
  count: a0
});
var _c4 = () => [];
var _c5 = (a0, a1) => ({
  items: a0,
  readonly: true,
  promotionLocation: a1
});
function B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(3);
    const poNumber_r1 = ɵɵreference(8);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", poNumber_r1);
  }
}
function B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(3);
    const paymentType_r2 = ɵɵreference(10);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", paymentType_r2);
  }
}
function B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(3);
    const paymentMethod_r3 = ɵɵreference(18);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", paymentMethod_r3);
  }
}
function B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(3);
    const costCenter_r4 = ɵɵreference(12);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", costCenter_r4);
  }
}
function B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0)(1, 13);
    ɵɵtemplate(2, B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 14)(3, B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14)(4, B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_4_Template, 2, 1, "ng-container", 14)(5, B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_5_Template, 2, 1, "ng-container", 14);
    ɵɵelementContainerEnd()();
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngSwitch", step_r5.type[0]);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r5.checkoutStepTypePaymentType);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r5.checkoutStepTypePaymentType);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r5.checkoutStepTypePaymentDetails);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r5.checkoutStepTypeDeliveryAddress);
  }
}
function B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(3);
    const deliveryAddress_r7 = ɵɵreference(14);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", deliveryAddress_r7);
  }
}
function B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(3);
    const deliveryMode_r8 = ɵɵreference(16);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", deliveryMode_r8);
  }
}
function B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0)(1, 13);
    ɵɵtemplate(2, B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_2_Template, 2, 1, "ng-container", 14)(3, B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_3_Template, 2, 1, "ng-container", 14);
    ɵɵelementContainerEnd()();
  }
  if (rf & 2) {
    const step_r9 = ctx.$implicit;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngSwitch", step_r9.type[0]);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r5.checkoutStepTypeDeliveryAddress);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r5.checkoutStepTypeDeliveryMode);
  }
}
function B2BCheckoutReviewSubmitComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 10);
    ɵɵtemplate(2, B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_2_Template, 6, 5, "ng-container", 11);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 12);
    ɵɵtemplate(4, B2BCheckoutReviewSubmitComponent_ng_container_5_ng_container_4_Template, 4, 3, "ng-container", 11);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const steps_r10 = ctx.ngIf;
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r5.paymentSteps(steps_r10));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r5.deliverySteps(steps_r10));
  }
}
function B2BCheckoutReviewSubmitComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵelement(1, "cx-card", 17);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "async");
    ɵɵelementStart(4, "div", 18)(5, "a", 19);
    ɵɵpipe(6, "cxUrl");
    ɵɵpipe(7, "cxTranslate");
    ɵɵelement(8, "cx-icon", 20);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(3, 6, ctx_r5.getPoNumberCard(ɵɵpipeBind1(2, 4, ctx_r5.poNumber$))));
    ɵɵadvance(4);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 8, ɵɵpureFunction1(12, _c1, ctx_r5.getCheckoutStepUrl(ctx_r5.checkoutStepTypePaymentType))));
    ɵɵattribute("title", ɵɵpipeBind1(7, 10, "checkoutReview.editPaymentType"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r5.iconTypes.PENCIL);
  }
}
function B2BCheckoutReviewSubmitComponent_ng_template_9_cx_card_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-card", 17);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const paymentType_r11 = ctx.ngIf;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("content", ɵɵpipeBind1(1, 1, ctx_r5.getPaymentTypeCard(paymentType_r11)));
  }
}
function B2BCheckoutReviewSubmitComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵtemplate(1, B2BCheckoutReviewSubmitComponent_ng_template_9_cx_card_1_Template, 2, 3, "cx-card", 21);
    ɵɵpipe(2, "async");
    ɵɵelementStart(3, "div", 18)(4, "a", 19);
    ɵɵpipe(5, "cxUrl");
    ɵɵpipe(6, "cxTranslate");
    ɵɵelement(7, "cx-icon", 20);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 4, ctx_r5.paymentType$));
    ɵɵadvance(3);
    ɵɵproperty("routerLink", ɵɵpipeBind1(5, 6, ɵɵpureFunction1(10, _c1, ctx_r5.getCheckoutStepUrl(ctx_r5.checkoutStepTypePaymentType))));
    ɵɵattribute("title", ɵɵpipeBind1(6, 8, "checkoutReview.editPaymentType"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r5.iconTypes.PENCIL);
  }
}
function B2BCheckoutReviewSubmitComponent_ng_template_11_ng_container_0_cx_card_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-card", 17);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const costCenter_r12 = ctx.ngIf;
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵproperty("content", ɵɵpipeBind1(1, 1, ctx_r5.getCostCenterCard(costCenter_r12)));
  }
}
function B2BCheckoutReviewSubmitComponent_ng_template_11_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 16);
    ɵɵtemplate(2, B2BCheckoutReviewSubmitComponent_ng_template_11_ng_container_0_cx_card_2_Template, 2, 3, "cx-card", 21);
    ɵɵpipe(3, "async");
    ɵɵelementStart(4, "div", 18)(5, "a", 19);
    ɵɵpipe(6, "cxUrl");
    ɵɵpipe(7, "cxTranslate");
    ɵɵelement(8, "cx-icon", 20);
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(3, 4, ctx_r5.costCenter$));
    ɵɵadvance(3);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 6, ɵɵpureFunction1(10, _c1, ctx_r5.getCheckoutStepUrl(ctx_r5.checkoutStepTypeDeliveryAddress))));
    ɵɵattribute("title", ɵɵpipeBind1(7, 8, "checkoutReview.editDeliveryAddressDetails"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r5.iconTypes.PENCIL);
  }
}
function B2BCheckoutReviewSubmitComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, B2BCheckoutReviewSubmitComponent_ng_template_11_ng_container_0_Template, 9, 12, "ng-container", 9);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r5.isAccountPayment$));
  }
}
function B2BCheckoutReviewSubmitComponent_ng_template_13_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 23);
    ɵɵelement(1, "cx-card", 17);
    ɵɵpipe(2, "async");
    ɵɵelementStart(3, "div", 18)(4, "a", 19);
    ɵɵpipe(5, "cxUrl");
    ɵɵpipe(6, "cxTranslate");
    ɵɵelement(7, "cx-icon", 20);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const deliveryAddress_r13 = ctx.ngIf;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(2, 4, ctx_r5.getDeliveryAddressCard(deliveryAddress_r13)));
    ɵɵadvance(3);
    ɵɵproperty("routerLink", ɵɵpipeBind1(5, 6, ɵɵpureFunction1(10, _c1, ctx_r5.getCheckoutStepUrl(ctx_r5.checkoutStepTypeDeliveryAddress))));
    ɵɵattribute("title", ɵɵpipeBind1(6, 8, "checkoutReview.editDeliveryAddressDetails"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r5.iconTypes.PENCIL);
  }
}
function B2BCheckoutReviewSubmitComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, B2BCheckoutReviewSubmitComponent_ng_template_13_div_0_Template, 8, 12, "div", 22);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r5.deliveryAddress$));
  }
}
function B2BCheckoutReviewSubmitComponent_ng_template_15_cx_card_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-card", 17);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const deliveryMode_r14 = ctx.ngIf;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("content", ɵɵpipeBind1(1, 1, ctx_r5.getDeliveryModeCard(deliveryMode_r14)));
  }
}
function B2BCheckoutReviewSubmitComponent_ng_template_15_ng_template_4_Template(rf, ctx) {
}
function B2BCheckoutReviewSubmitComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24)(1, "div");
    ɵɵtemplate(2, B2BCheckoutReviewSubmitComponent_ng_template_15_cx_card_2_Template, 2, 3, "cx-card", 21);
    ɵɵpipe(3, "async");
    ɵɵtemplate(4, B2BCheckoutReviewSubmitComponent_ng_template_15_ng_template_4_Template, 0, 0, "ng-template", 25);
    ɵɵpipe(5, "async");
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 18)(7, "a", 19);
    ɵɵpipe(8, "cxUrl");
    ɵɵpipe(9, "cxTranslate");
    ɵɵelement(10, "cx-icon", 20);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(3, 6, ctx_r5.deliveryMode$));
    ɵɵadvance(2);
    ɵɵproperty("cxOutlet", ctx_r5.cartOutlets.DELIVERY_MODE)("cxOutletContext", ɵɵpureFunction1(14, _c2, ɵɵpipeBind1(5, 8, ctx_r5.cart$)));
    ɵɵadvance(3);
    ɵɵproperty("routerLink", ɵɵpipeBind1(8, 10, ɵɵpureFunction1(16, _c1, ctx_r5.getCheckoutStepUrl(ctx_r5.checkoutStepTypeDeliveryMode))));
    ɵɵattribute("title", ɵɵpipeBind1(9, 12, "checkoutReview.editDeliveryMode"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r5.iconTypes.PENCIL);
  }
}
function B2BCheckoutReviewSubmitComponent_ng_template_17_cx_card_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-card", 17);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const paymentDetails_r15 = ctx.ngIf;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("content", ɵɵpipeBind1(1, 1, ctx_r5.getPaymentMethodCard(paymentDetails_r15)));
  }
}
function B2BCheckoutReviewSubmitComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 26)(1, "div");
    ɵɵtemplate(2, B2BCheckoutReviewSubmitComponent_ng_template_17_cx_card_2_Template, 2, 3, "cx-card", 21);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 18)(5, "a", 19);
    ɵɵpipe(6, "cxUrl");
    ɵɵpipe(7, "cxTranslate");
    ɵɵelement(8, "cx-icon", 20);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(3, 4, ctx_r5.paymentDetails$));
    ɵɵadvance(3);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 6, ɵɵpureFunction1(10, _c1, ctx_r5.getCheckoutStepUrl(ctx_r5.checkoutStepTypePaymentDetails))));
    ɵɵattribute("title", ɵɵpipeBind1(7, 8, "checkoutReview.editPaymentDetails"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r5.iconTypes.PENCIL);
  }
}
function B2BCheckoutReviewSubmitComponent_ng_container_19_div_7_ng_template_2_Template(rf, ctx) {
}
function B2BCheckoutReviewSubmitComponent_ng_container_19_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 30);
    ɵɵelement(1, "cx-promotions", 31);
    ɵɵtemplate(2, B2BCheckoutReviewSubmitComponent_ng_container_19_div_7_ng_template_2_Template, 0, 0, "ng-template", 25);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entries_r16 = ctx.ngIf;
    const cart_r17 = ɵɵnextContext().ngIf;
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("promotions", (cart_r17.appliedOrderPromotions || ɵɵpureFunction0(3, _c4)).concat(cart_r17.potentialOrderPromotions || ɵɵpureFunction0(4, _c4)));
    ɵɵadvance();
    ɵɵproperty("cxOutlet", ctx_r5.cartOutlets.CART_ITEM_LIST)("cxOutletContext", ɵɵpureFunction2(5, _c5, entries_r16, ctx_r5.promotionLocation));
  }
}
function B2BCheckoutReviewSubmitComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 27);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 28);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(7, B2BCheckoutReviewSubmitComponent_ng_container_19_div_7_Template, 3, 8, "div", 29);
    ɵɵpipe(8, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const cart_r17 = ctx.ngIf;
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind2(3, 4, "cartItems.cartTotal", ɵɵpureFunction1(11, _c3, cart_r17.deliveryItemsQuantity)), ": ", cart_r17.totalPrice == null ? null : cart_r17.totalPrice.formattedValue, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 7, "checkoutReview.placeOrder"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(8, 9, ctx_r5.entries$));
  }
}
var CheckoutCostCenterComponent = class _CheckoutCostCenterComponent {
  get disabled() {
    return !this.isAccountPayment;
  }
  constructor(userCostCenterService, checkoutCostCenterFacade, checkoutPaymentTypeFacade) {
    this.userCostCenterService = userCostCenterService;
    this.checkoutCostCenterFacade = checkoutCostCenterFacade;
    this.checkoutPaymentTypeFacade = checkoutPaymentTypeFacade;
    this.subscription = new Subscription();
    this.userCostCenters$ = this.userCostCenterService.getActiveCostCenters().pipe(filter((costCenters) => !!costCenters));
  }
  ngOnInit() {
    this.subscription.add(this.checkoutPaymentTypeFacade.isAccountPayment().pipe(distinctUntilChanged()).subscribe((isAccountPayment) => {
      this.isAccountPayment = isAccountPayment;
    }));
    this.costCenters$ = combineLatest([this.userCostCenters$, this.checkoutCostCenterFacade.getCostCenterState().pipe(filter((state) => !state.loading), map((state) => state.data), distinctUntilChanged())]).pipe(take(1), tap(([costCenters, costCenter]) => {
      if (!costCenter) {
        this.setCostCenter(costCenters[0].code);
      } else {
        this.costCenterId = costCenter.code;
      }
    }), map(([costCenters]) => costCenters));
  }
  setCostCenter(selectCostCenter) {
    this.costCenterId = selectCostCenter;
    this.checkoutCostCenterFacade.setCostCenter(this.costCenterId);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function CheckoutCostCenterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutCostCenterComponent)(ɵɵdirectiveInject(UserCostCenterService), ɵɵdirectiveInject(CheckoutCostCenterFacade), ɵɵdirectiveInject(CheckoutPaymentTypeFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutCostCenterComponent,
      selectors: [["cx-cost-center"]],
      hostVars: 2,
      hostBindings: function CheckoutCostCenterComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("hidden", ctx.disabled);
        }
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "row"], [1, "col-md-12", "col-xl-10"], [1, "label-content", "required"], [3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "label-content"], [3, "value", "selected"]],
      template: function CheckoutCostCenterComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CheckoutCostCenterComponent_ng_container_0_Template, 5, 3, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.isAccountPayment);
        }
      },
      dependencies: [NgForOf, NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutCostCenterComponent, [{
    type: Component,
    args: [{
      selector: "cx-cost-center",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="isAccountPayment">
  <div class="row">
    <div class="col-md-12 col-xl-10">
      <ng-container *ngIf="costCenters$ | async as costCenters">
        <div *ngIf="costCenters.length !== 0">
          <label>
            <span class="label-content required">{{
              'checkoutB2B.costCenter' | cxTranslate
            }}</span>
            <select (change)="setCostCenter($event.target.value)">
              <option
                *ngFor="let costCenter of costCenters"
                value="{{ costCenter.code }}"
                [selected]="costCenterId === costCenter.code"
              >
                {{ costCenter.name }}
              </option>
            </select>
            <span class="label-content">{{
              'checkoutB2B.availableLabel' | cxTranslate
            }}</span>
          </label>
        </div>
      </ng-container>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: UserCostCenterService
  }, {
    type: CheckoutCostCenterFacade
  }, {
    type: CheckoutPaymentTypeFacade
  }], {
    disabled: [{
      type: HostBinding,
      args: ["class.hidden"]
    }]
  });
})();
var CheckoutCostCenterModule = class _CheckoutCostCenterModule {
  static {
    this.ɵfac = function CheckoutCostCenterModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutCostCenterModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutCostCenterModule,
      declarations: [CheckoutCostCenterComponent],
      imports: [CommonModule, I18nModule, ConfigModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, ConfigModule.withConfig({
        cmsComponents: {
          CheckoutCostCenterComponent: {
            component: CheckoutCostCenterComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CartValidationGuard]
          }
        }
      })]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutCostCenterModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, ConfigModule.withConfig({
        cmsComponents: {
          CheckoutCostCenterComponent: {
            component: CheckoutCostCenterComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CartValidationGuard]
          }
        }
      })],
      declarations: [CheckoutCostCenterComponent]
    }]
  }], null, null);
})();
var B2BCheckoutDeliveryAddressComponent = class _B2BCheckoutDeliveryAddressComponent extends CheckoutDeliveryAddressComponent {
  constructor(userAddressService, checkoutDeliveryAddressFacade, activatedRoute, translationService, activeCartFacade, checkoutStepService, checkoutDeliveryModesFacade, globalMessageService, checkoutCostCenterFacade, checkoutPaymentTypeFacade, userCostCenterService) {
    super(userAddressService, checkoutDeliveryAddressFacade, activatedRoute, translationService, activeCartFacade, checkoutStepService, checkoutDeliveryModesFacade, globalMessageService);
    this.userAddressService = userAddressService;
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.activatedRoute = activatedRoute;
    this.translationService = translationService;
    this.activeCartFacade = activeCartFacade;
    this.checkoutStepService = checkoutStepService;
    this.checkoutDeliveryModesFacade = checkoutDeliveryModesFacade;
    this.globalMessageService = globalMessageService;
    this.checkoutCostCenterFacade = checkoutCostCenterFacade;
    this.checkoutPaymentTypeFacade = checkoutPaymentTypeFacade;
    this.userCostCenterService = userCostCenterService;
    this.subscriptions = new Subscription();
    this.isAccountPayment$ = this.checkoutPaymentTypeFacade.isAccountPayment().pipe(distinctUntilChanged());
    this.costCenterAddresses$ = this.checkoutCostCenterFacade.getCostCenterState().pipe(filter((state) => !state.loading), map((state) => state.data), distinctUntilChanged((prev, curr) => prev?.code === curr?.code), switchMap((costCenter) => {
      this.doneAutoSelect = false;
      return costCenter?.code ? this.userCostCenterService.getCostCenterAddresses(costCenter.code) : of([]);
    }));
    this.creditCardAddressLoading$ = super.getAddressLoading();
    this.accountAddressLoading$ = combineLatest([this.creditCardAddressLoading$, this.checkoutCostCenterFacade.getCostCenterState().pipe(map((state) => state.loading))]).pipe(map(([creditCardAddressLoading, costCenterLoading]) => creditCardAddressLoading || costCenterLoading), distinctUntilChanged());
    this.isAccountPayment = false;
  }
  ngOnInit() {
    this.subscriptions.add(this.isAccountPayment$.subscribe((isAccount) => this.isAccountPayment = isAccount));
    super.ngOnInit();
  }
  loadAddresses() {
    if (!this.isAccountPayment) {
      super.loadAddresses();
    }
  }
  getAddressLoading() {
    return this.isAccountPayment$.pipe(switchMap((isAccountPayment) => isAccountPayment ? this.accountAddressLoading$ : this.creditCardAddressLoading$));
  }
  getSupportedAddresses() {
    return this.isAccountPayment$.pipe(switchMap((isAccountPayment) => isAccountPayment ? this.costCenterAddresses$ : super.getSupportedAddresses()));
  }
  selectDefaultAddress(addresses, selected) {
    if (!this.doneAutoSelect && addresses?.length && (!selected || Object.keys(selected).length === 0)) {
      if (this.isAccountPayment) {
        if (addresses.length === 1) {
          this.setAddress(addresses[0]);
        }
      } else {
        super.selectDefaultAddress(addresses, selected);
      }
      this.doneAutoSelect = true;
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function B2BCheckoutDeliveryAddressComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _B2BCheckoutDeliveryAddressComponent)(ɵɵdirectiveInject(UserAddressService), ɵɵdirectiveInject(CheckoutDeliveryAddressFacade), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(CheckoutStepService), ɵɵdirectiveInject(CheckoutDeliveryModesFacade), ɵɵdirectiveInject(GlobalMessageService), ɵɵdirectiveInject(CheckoutCostCenterFacade), ɵɵdirectiveInject(CheckoutPaymentTypeFacade), ɵɵdirectiveInject(UserCostCenterService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _B2BCheckoutDeliveryAddressComponent,
      selectors: [["cx-delivery-address"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 7,
      vars: 6,
      consts: [["loading", ""], ["showExistingAddresses", ""], ["newAddressForm", ""], ["initialAddressForm", ""], [1, "cx-checkout-title", "d-none", "d-lg-block", "d-xl-block"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "cx-checkout-text"], ["class", "cx-checkout-btns row", 4, "ngIf"], [1, "cx-checkout-body", "row"], ["class", "cx-delivery-address-card col-md-12 col-lg-6", 4, "ngFor", "ngForOf"], [1, "cx-checkout-btns", "row"], [1, "col-md-12", "col-lg-6"], [1, "cx-btn", "btn", "btn-block", "btn-secondary", 3, "click"], [1, "cx-btn", "btn", "btn-block", "btn-primary", 3, "click", "disabled"], [1, "col-sm-12", "col-md-12", "col-lg-6"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "cx-delivery-address-card", "col-md-12", "col-lg-6"], [1, "cx-delivery-address-card-inner", 3, "click"], [3, "sendCard", "border", "index", "fitToContainer", "content", "role"], [3, "showTitleCode", "backToAddress", "submitAddress", 4, "ngIf", "ngIfElse"], [3, "backToAddress", "submitAddress", "showTitleCode"], [3, "backToAddress", "submitAddress", "showTitleCode", "setAsDefaultField", "cancelBtnLabel"], [1, "cx-spinner"]],
      template: function B2BCheckoutDeliveryAddressComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "h2", 4);
          ɵɵtext(1);
          ɵɵpipe(2, "cxTranslate");
          ɵɵelementEnd();
          ɵɵtemplate(3, B2BCheckoutDeliveryAddressComponent_ng_container_3_Template, 3, 4, "ng-container", 5);
          ɵɵpipe(4, "async");
          ɵɵtemplate(5, B2BCheckoutDeliveryAddressComponent_ng_template_5_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "checkoutAddress.shippingAddress"), "\n");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(4, 4, ctx.cards$));
        }
      },
      dependencies: [NgForOf, NgIf, AddressFormComponent, CardComponent, SpinnerComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(B2BCheckoutDeliveryAddressComponent, [{
    type: Component,
    args: [{
      selector: "cx-delivery-address",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<h2 class="cx-checkout-title d-none d-lg-block d-xl-block">
  {{ 'checkoutAddress.shippingAddress' | cxTranslate }}
</h2>

<ng-container *ngIf="cards$ | async as cards">
  <ng-container *ngIf="!(isUpdating$ | async); else loading">
    <ng-container
      *ngIf="
        isAccountPayment || (cards?.length && !addressFormOpened);
        then showExistingAddresses;
        else newAddressForm
      "
    >
    </ng-container>

    <ng-template #showExistingAddresses>
      <p class="cx-checkout-text">
        {{ 'checkoutAddress.selectYourDeliveryAddress' | cxTranslate }}
      </p>
      <div class="cx-checkout-btns row" *ngIf="!isAccountPayment">
        <div class="col-sm-12 col-md-12 col-lg-6">
          <button
            class="btn btn-block btn-secondary"
            (click)="showNewAddressForm()"
          >
            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}
          </button>
        </div>
      </div>

      <div class="cx-checkout-body row">
        <div
          class="cx-delivery-address-card col-md-12 col-lg-6"
          *ngFor="let card of cards; let i = index"
        >
          <div
            class="cx-delivery-address-card-inner"
            (click)="selectAddress(card.address)"
          >
            <cx-card
              [border]="true"
              [index]="i"
              [fitToContainer]="true"
              [content]="card.card"
              (sendCard)="selectAddress(card.address)"
              [role]="'group'"
            ></cx-card>
          </div>
        </div>
      </div>

      <div class="cx-checkout-btns row">
        <div class="col-md-12 col-lg-6">
          <button class="cx-btn btn btn-block btn-secondary" (click)="back()">
            {{ backBtnText | cxTranslate }}
          </button>
        </div>
        <div class="col-md-12 col-lg-6">
          <button
            class="cx-btn btn btn-block btn-primary"
            [disabled]="!(selectedAddress$ | async)?.id"
            (click)="next()"
          >
            {{ 'common.continue' | cxTranslate }}
          </button>
        </div>
      </div>
    </ng-template>

    <ng-template #newAddressForm>
      <cx-address-form
        *ngIf="cards.length; else initialAddressForm"
        [showTitleCode]="true"
        (backToAddress)="hideNewAddressForm(false)"
        (submitAddress)="addAddress($event)"
      ></cx-address-form>
      <ng-template #initialAddressForm>
        <cx-address-form
          [showTitleCode]="true"
          [setAsDefaultField]="!isGuestCheckout"
          cancelBtnLabel="{{ backBtnText | cxTranslate }}"
          (backToAddress)="hideNewAddressForm(true)"
          (submitAddress)="addAddress($event)"
        ></cx-address-form>
      </ng-template>
    </ng-template>
  </ng-container>
</ng-container>

<ng-template #loading>
  <div class="cx-spinner">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: UserAddressService
  }, {
    type: CheckoutDeliveryAddressFacade
  }, {
    type: ActivatedRoute
  }, {
    type: TranslationService
  }, {
    type: ActiveCartFacade
  }, {
    type: CheckoutStepService
  }, {
    type: CheckoutDeliveryModesFacade
  }, {
    type: GlobalMessageService
  }, {
    type: CheckoutCostCenterFacade
  }, {
    type: CheckoutPaymentTypeFacade
  }, {
    type: UserCostCenterService
  }], null);
})();
var B2BCheckoutDeliveryAddressModule = class _B2BCheckoutDeliveryAddressModule {
  static {
    this.ɵfac = function B2BCheckoutDeliveryAddressModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _B2BCheckoutDeliveryAddressModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _B2BCheckoutDeliveryAddressModule,
      declarations: [B2BCheckoutDeliveryAddressComponent],
      imports: [CommonModule, RouterModule, AddressFormModule, CardModule, SpinnerModule, I18nModule, FeaturesConfigModule],
      exports: [B2BCheckoutDeliveryAddressComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutDeliveryAddress: {
            component: B2BCheckoutDeliveryAddressComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CartValidationGuard]
          }
        }
      })],
      imports: [CommonModule, RouterModule, AddressFormModule, CardModule, SpinnerModule, I18nModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(B2BCheckoutDeliveryAddressModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, AddressFormModule, CardModule, SpinnerModule, I18nModule, FeaturesConfigModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutDeliveryAddress: {
            component: B2BCheckoutDeliveryAddressComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CartValidationGuard]
          }
        }
      })],
      declarations: [B2BCheckoutDeliveryAddressComponent],
      exports: [B2BCheckoutDeliveryAddressComponent]
    }]
  }], null, null);
})();
var CheckoutPaymentTypeComponent = class _CheckoutPaymentTypeComponent {
  constructor(checkoutPaymentTypeFacade, checkoutStepService, activatedRoute, globalMessageService) {
    this.checkoutPaymentTypeFacade = checkoutPaymentTypeFacade;
    this.checkoutStepService = checkoutStepService;
    this.activatedRoute = activatedRoute;
    this.globalMessageService = globalMessageService;
    this.busy$ = new BehaviorSubject(false);
    this.paymentTypesError = false;
    this.isUpdating$ = combineLatest([this.busy$, this.checkoutPaymentTypeFacade.getSelectedPaymentTypeState().pipe(map((state) => state.loading))]).pipe(map(([busy, loading]) => busy || loading), distinctUntilChanged());
    this.paymentTypes$ = this.checkoutPaymentTypeFacade.getPaymentTypes().pipe(tap(() => this.paymentTypesError = false), catchError((error) => {
      if (error.details?.[0]?.type === OccHttpErrorType.CLASS_MISMATCH_ERROR) {
        this.globalMessageService.add({
          key: "httpHandlers.forbidden"
        }, GlobalMessageType.MSG_TYPE_ERROR);
        this.paymentTypesError = true;
      }
      return of([]);
    }));
    this.typeSelected$ = combineLatest([this.checkoutPaymentTypeFacade.getSelectedPaymentTypeState().pipe(filter((state) => !state.loading), map((state) => state.data)), this.paymentTypes$]).pipe(map(([selectedPaymentType, availablePaymentTypes]) => {
      if (selectedPaymentType && availablePaymentTypes.find((availablePaymentType) => {
        return availablePaymentType.code === selectedPaymentType.code;
      })) {
        return selectedPaymentType;
      }
      if (availablePaymentTypes.length) {
        this.busy$.next(true);
        this.checkoutPaymentTypeFacade.setPaymentType(availablePaymentTypes[0].code, this.poNumberInputElement?.nativeElement?.value).subscribe({
          complete: () => this.onSuccess(),
          error: () => this.onError()
        });
        return availablePaymentTypes[0];
      }
      return void 0;
    }), filter(isNotUndefined), distinctUntilChanged(), tap((selected) => {
      this.typeSelected = selected?.code;
      this.checkoutStepService.disableEnableStep(CheckoutStepType.PAYMENT_DETAILS, selected?.code === B2BPaymentTypeEnum.ACCOUNT_PAYMENT);
    }));
    this.cartPoNumber$ = this.checkoutPaymentTypeFacade.getPurchaseOrderNumberState().pipe(filter((state) => !state.loading), map((state) => state.data), filter(isNotUndefined), distinctUntilChanged());
  }
  changeType(code) {
    this.busy$.next(true);
    this.typeSelected = code;
    this.checkoutPaymentTypeFacade.setPaymentType(code, this.poNumberInputElement.nativeElement.value).subscribe({
      complete: () => this.onSuccess(),
      error: () => this.onError()
    });
  }
  next() {
    if (!this.typeSelected) {
      return;
    }
    const poNumberInput = this.poNumberInputElement.nativeElement.value;
    if (poNumberInput === getLastValueSync(this.cartPoNumber$)) {
      this.checkoutStepService.next(this.activatedRoute);
      return;
    }
    this.busy$.next(true);
    this.checkoutPaymentTypeFacade.setPaymentType(this.typeSelected, poNumberInput).subscribe({
      // we don't call onSuccess here, because it can cause a spinner flickering
      complete: () => this.checkoutStepService.next(this.activatedRoute),
      error: () => this.onError()
    });
  }
  back() {
    this.checkoutStepService.back(this.activatedRoute);
  }
  onSuccess() {
    this.busy$.next(false);
  }
  onError() {
    this.busy$.next(false);
  }
  static {
    this.ɵfac = function CheckoutPaymentTypeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutPaymentTypeComponent)(ɵɵdirectiveInject(CheckoutPaymentTypeFacade), ɵɵdirectiveInject(CheckoutStepService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(GlobalMessageService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutPaymentTypeComponent,
      selectors: [["cx-payment-type"]],
      viewQuery: function CheckoutPaymentTypeComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.poNumberInputElement = _t.first);
        }
      },
      standalone: false,
      decls: 7,
      vars: 6,
      consts: [["loading", ""], ["poNumber", ""], [1, "cx-checkout-title", "d-none", "d-lg-block", "d-xl-block"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "row"], [1, "col-md-12", "col-lg-6"], [1, "label-content"], ["formControlName", "poNumber", "type", "text", 1, "form-control", 3, "placeholder", "value"], [1, "cx-payment-type-container"], ["class", "form-check", 4, "ngFor", "ngForOf"], [1, "cx-checkout-btns", "row"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "btn", "btn-block", "btn-primary", 3, "click"], [1, "form-check"], ["role", "radio", "type", "radio", "aria-checked", "true", "formControlName", "paymentType", 1, "form-check-input", 3, "change", "id", "value", "checked"], [1, "cx-payment-type-label", "form-check-label", "form-radio-label", 3, "for"], [1, "cx-payment-type"], ["class", "cx-spinner", 4, "ngIf"], [1, "cx-spinner"]],
      template: function CheckoutPaymentTypeComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "h2", 2);
          ɵɵtext(1);
          ɵɵpipe(2, "cxTranslate");
          ɵɵelementEnd();
          ɵɵtemplate(3, CheckoutPaymentTypeComponent_ng_container_3_Template, 4, 6, "ng-container", 3);
          ɵɵpipe(4, "async");
          ɵɵtemplate(5, CheckoutPaymentTypeComponent_ng_template_5_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "checkoutB2B.methodOfPayment.paymentType"), "\n");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(4, 4, ctx.paymentTypes$));
        }
      },
      dependencies: [NgForOf, NgIf, SpinnerComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentTypeComponent, [{
    type: Component,
    args: [{
      selector: "cx-payment-type",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<h2 class="cx-checkout-title d-none d-lg-block d-xl-block">
  {{ 'checkoutB2B.methodOfPayment.paymentType' | cxTranslate }}
</h2>

<ng-container *ngIf="paymentTypes$ | async as paymentTypes">
  <ng-container
    *ngIf="
      !!paymentTypes.length &&
        (typeSelected$ | async) &&
        !(isUpdating$ | async);
      else loading
    "
  >
    <div class="row">
      <div class="col-md-12 col-lg-6">
        <label>
          <span class="label-content">{{
            'checkoutB2B.poNumber' | cxTranslate
          }}</span>
          <input
            #poNumber
            class="form-control"
            formControlName="poNumber"
            type="text"
            placeholder="{{ 'checkoutB2B.placeholder' | cxTranslate }}"
            value="{{ cartPoNumber$ | async }}"
          />
        </label>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 col-lg-6">
        <label class="cx-payment-type-container">
          <span class="label-content">{{
            'paymentTypes.title' | cxTranslate
          }}</span>
          <div class="form-check" *ngFor="let type of paymentTypes">
            <input
              id="paymentType-{{ type.code }}"
              class="form-check-input"
              role="radio"
              type="radio"
              aria-checked="true"
              (change)="changeType(type.code)"
              [value]="type.code"
              [checked]="type.code === typeSelected"
              formControlName="paymentType"
            />
            <label
              class="cx-payment-type-label form-check-label form-radio-label"
              for="paymentType-{{ type.code }}"
            >
              <div class="cx-payment-type">
                {{ 'paymentTypes.paymentType_' + type?.code | cxTranslate }}
              </div>
            </label>
          </div>
        </label>
      </div>
    </div>

    <div class="cx-checkout-btns row">
      <div class="col-md-12 col-lg-6">
        <button class="btn btn-block btn-secondary" (click)="back()">
          {{ 'checkout.backToCart' | cxTranslate }}
        </button>
      </div>
      <div class="col-md-12 col-lg-6">
        <button class="btn btn-block btn-primary" (click)="next()">
          {{ 'common.continue' | cxTranslate }}
        </button>
      </div>
    </div>
  </ng-container>
</ng-container>

<ng-template #loading>
  <div class="cx-spinner" *ngIf="!paymentTypesError">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: CheckoutPaymentTypeFacade
  }, {
    type: CheckoutStepService
  }, {
    type: ActivatedRoute
  }, {
    type: GlobalMessageService
  }], {
    poNumberInputElement: [{
      type: ViewChild,
      args: ["poNumber", {
        static: false
      }]
    }]
  });
})();
var CheckoutPaymentTypeModule = class _CheckoutPaymentTypeModule {
  static {
    this.ɵfac = function CheckoutPaymentTypeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutPaymentTypeModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutPaymentTypeModule,
      declarations: [CheckoutPaymentTypeComponent],
      imports: [CommonModule, I18nModule, SpinnerModule, ConfigModule, FeaturesConfigModule],
      exports: [CheckoutPaymentTypeComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, SpinnerModule, ConfigModule.withConfig({
        cmsComponents: {
          CheckoutPaymentType: {
            component: CheckoutPaymentTypeComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CartValidationGuard]
          }
        }
      }), FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentTypeModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, SpinnerModule, ConfigModule.withConfig({
        cmsComponents: {
          CheckoutPaymentType: {
            component: CheckoutPaymentTypeComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CartValidationGuard]
          }
        }
      }), FeaturesConfigModule],
      declarations: [CheckoutPaymentTypeComponent],
      exports: [CheckoutPaymentTypeComponent]
    }]
  }], null, null);
})();
var B2BCheckoutReviewSubmitComponent = class _B2BCheckoutReviewSubmitComponent extends CheckoutReviewSubmitComponent {
  constructor(checkoutDeliveryAddressFacade, checkoutPaymentFacade, activeCartFacade, translationService, checkoutStepService, checkoutDeliveryModesFacade, checkoutPaymentTypeFacade, checkoutCostCenterFacade, userCostCenterService) {
    super(checkoutDeliveryAddressFacade, checkoutPaymentFacade, activeCartFacade, translationService, checkoutStepService, checkoutDeliveryModesFacade);
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.checkoutPaymentFacade = checkoutPaymentFacade;
    this.activeCartFacade = activeCartFacade;
    this.translationService = translationService;
    this.checkoutStepService = checkoutStepService;
    this.checkoutDeliveryModesFacade = checkoutDeliveryModesFacade;
    this.checkoutPaymentTypeFacade = checkoutPaymentTypeFacade;
    this.checkoutCostCenterFacade = checkoutCostCenterFacade;
    this.userCostCenterService = userCostCenterService;
    this.checkoutStepTypePaymentType = CheckoutStepType.PAYMENT_TYPE;
  }
  get poNumber$() {
    return this.checkoutPaymentTypeFacade.getPurchaseOrderNumberState().pipe(filter((state) => !state.loading && !state.error), map((state) => state.data));
  }
  get paymentType$() {
    return this.checkoutPaymentTypeFacade.getSelectedPaymentTypeState().pipe(filter((state) => !state.loading && !state.error), map((state) => state.data));
  }
  get isAccountPayment$() {
    return this.checkoutPaymentTypeFacade.isAccountPayment();
  }
  get costCenter$() {
    return this.checkoutCostCenterFacade.getCostCenterState().pipe(filter((state) => !state.loading && !state.error), map((state) => state.data));
  }
  getCheckoutPaymentSteps() {
    return [CheckoutStepType.PAYMENT_DETAILS, CheckoutStepType.PAYMENT_TYPE, CheckoutStepType.DELIVERY_ADDRESS];
  }
  getCostCenterCard(costCenter) {
    return combineLatest([this.translationService.translate("checkoutB2B.costCenter")]).pipe(map(([textTitle]) => {
      return {
        title: textTitle,
        textBold: costCenter?.name,
        text: ["(" + costCenter?.unit?.name + ")"]
      };
    }));
  }
  getPoNumberCard(poNumber) {
    return combineLatest([this.translationService.translate("checkoutB2B.review.poNumber"), this.translationService.translate("checkoutB2B.noPoNumber")]).pipe(map(([textTitle, noneTextTitle]) => {
      return {
        title: textTitle,
        textBold: poNumber ? poNumber : noneTextTitle
      };
    }));
  }
  getPaymentTypeCard(paymentType) {
    return combineLatest([this.translationService.translate("checkoutB2B.progress.methodOfPayment"), this.translationService.translate("paymentTypes.paymentType_" + paymentType.code)]).pipe(map(([textTitle, paymentTypeTranslation]) => {
      return {
        title: textTitle,
        textBold: paymentTypeTranslation
      };
    }));
  }
  static {
    this.ɵfac = function B2BCheckoutReviewSubmitComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _B2BCheckoutReviewSubmitComponent)(ɵɵdirectiveInject(CheckoutDeliveryAddressFacade), ɵɵdirectiveInject(CheckoutPaymentFacade), ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(CheckoutStepService), ɵɵdirectiveInject(CheckoutDeliveryModesFacade), ɵɵdirectiveInject(CheckoutPaymentTypeFacade), ɵɵdirectiveInject(CheckoutCostCenterFacade), ɵɵdirectiveInject(UserCostCenterService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _B2BCheckoutReviewSubmitComponent,
      selectors: [["cx-review-submit"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 21,
      vars: 9,
      consts: [["poNumber", ""], ["paymentType", ""], ["costCenter", ""], ["deliveryAddress", ""], ["deliveryMode", ""], ["paymentMethod", ""], [1, "cx-review"], [1, "cx-review-title", "d-none", "d-lg-block", "d-xl-block"], [1, "cx-review-summary", "row"], [4, "ngIf"], [1, "col-md-12", "col-lg-6", "col-xl-6", "cx-review-payment-col"], [4, "ngFor", "ngForOf"], [1, "col-md-12", "col-lg-6", "col-xl-6", "cx-review-shipping-col"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngTemplateOutlet"], [1, "cx-review-summary-card"], [3, "content"], [1, "cx-review-summary-edit-step"], [3, "routerLink"], ["aria-hidden", "true", 3, "type"], [3, "content", 4, "ngIf"], ["class", "cx-review-summary-card cx-review-card-address", 4, "ngIf"], [1, "cx-review-summary-card", "cx-review-card-address"], [1, "cx-review-summary-card", "cx-review-card-shipping"], [3, "cxOutlet", "cxOutletContext"], [1, "cx-review-summary-card", "cx-review-card-payment"], [1, "cx-review-cart-total", "d-none", "d-lg-block", "d-xl-block"], [1, "cx-review-cart-heading", "d-block", "d-lg-none", "d-xl-none"], ["class", "cx-review-cart-item", 4, "ngIf"], [1, "cx-review-cart-item"], [3, "promotions"]],
      template: function B2BCheckoutReviewSubmitComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 6)(1, "h2", 7);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(4, "div", 8);
          ɵɵtemplate(5, B2BCheckoutReviewSubmitComponent_ng_container_5_Template, 5, 2, "ng-container", 9);
          ɵɵpipe(6, "async");
          ɵɵelementEnd();
          ɵɵtemplate(7, B2BCheckoutReviewSubmitComponent_ng_template_7_Template, 9, 14, "ng-template", null, 0, ɵɵtemplateRefExtractor)(9, B2BCheckoutReviewSubmitComponent_ng_template_9_Template, 8, 12, "ng-template", null, 1, ɵɵtemplateRefExtractor)(11, B2BCheckoutReviewSubmitComponent_ng_template_11_Template, 2, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor)(13, B2BCheckoutReviewSubmitComponent_ng_template_13_Template, 2, 3, "ng-template", null, 3, ɵɵtemplateRefExtractor)(15, B2BCheckoutReviewSubmitComponent_ng_template_15_Template, 11, 18, "ng-template", null, 4, ɵɵtemplateRefExtractor)(17, B2BCheckoutReviewSubmitComponent_ng_template_17_Template, 9, 12, "ng-template", null, 5, ɵɵtemplateRefExtractor)(19, B2BCheckoutReviewSubmitComponent_ng_container_19_Template, 9, 13, "ng-container", 9);
          ɵɵpipe(20, "async");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_7_0;
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "checkoutReview.review"), " ");
          ɵɵadvance(3);
          ɵɵproperty("ngIf", (tmp_7_0 = ɵɵpipeBind1(6, 5, ctx.steps$)) == null ? null : tmp_7_0.slice(0, -1));
          ɵɵadvance(14);
          ɵɵproperty("ngIf", ɵɵpipeBind1(20, 7, ctx.cart$));
        }
      },
      dependencies: [NgForOf, NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, CardComponent, RouterLink, PromotionsComponent, IconComponent, OutletDirective, AsyncPipe, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(B2BCheckoutReviewSubmitComponent, [{
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
              <ng-container *ngTemplateOutlet="poNumber"></ng-container>
            </ng-container>
            <ng-container *ngSwitchCase="checkoutStepTypePaymentType">
              <ng-container *ngTemplateOutlet="paymentType"></ng-container>
            </ng-container>
            <ng-container *ngSwitchCase="checkoutStepTypePaymentDetails">
              <ng-container *ngTemplateOutlet="paymentMethod"></ng-container>
            </ng-container>
            <ng-container *ngSwitchCase="checkoutStepTypeDeliveryAddress">
              <ng-container *ngTemplateOutlet="costCenter"></ng-container>
            </ng-container>
          </ng-container>
        </ng-container>
      </div>
      <div class="col-md-12 col-lg-6 col-xl-6 cx-review-shipping-col">
        <ng-container *ngFor="let step of deliverySteps(steps)">
          <ng-container [ngSwitch]="step.type[0]">
            <ng-container *ngSwitchCase="checkoutStepTypeDeliveryAddress">
              <ng-container *ngTemplateOutlet="deliveryAddress"></ng-container>
            </ng-container>
            <ng-container *ngSwitchCase="checkoutStepTypeDeliveryMode">
              <ng-container *ngTemplateOutlet="deliveryMode"></ng-container>
            </ng-container>
          </ng-container>
        </ng-container>
      </div>
    </ng-container>
  </div>

  <!-- PO NUMBER SECTION -->
  <ng-template #poNumber>
    <div class="cx-review-summary-card">
      <cx-card [content]="getPoNumberCard(poNumber$ | async) | async"></cx-card>
      <div class="cx-review-summary-edit-step">
        <a
          [attr.title]="'checkoutReview.editPaymentType' | cxTranslate"
          [routerLink]="
            {
              cxRoute: getCheckoutStepUrl(checkoutStepTypePaymentType),
            } | cxUrl
          "
          ><cx-icon aria-hidden="true" [type]="iconTypes.PENCIL"></cx-icon
        ></a>
      </div>
    </div>
  </ng-template>

  <!-- PAYMENT TYPE SECTION -->
  <ng-template #paymentType>
    <div class="cx-review-summary-card">
      <cx-card
        *ngIf="paymentType$ | async as paymentType"
        [content]="getPaymentTypeCard(paymentType) | async"
      ></cx-card>
      <div class="cx-review-summary-edit-step">
        <a
          [attr.title]="'checkoutReview.editPaymentType' | cxTranslate"
          [routerLink]="
            {
              cxRoute: getCheckoutStepUrl(checkoutStepTypePaymentType),
            } | cxUrl
          "
          ><cx-icon aria-hidden="true" [type]="iconTypes.PENCIL"></cx-icon
        ></a>
      </div>
    </div>
  </ng-template>

  <!-- COST CENTER SECTION -->
  <ng-template #costCenter>
    <ng-container *ngIf="isAccountPayment$ | async">
      <div class="cx-review-summary-card">
        <cx-card
          *ngIf="costCenter$ | async as costCenter"
          [content]="getCostCenterCard(costCenter) | async"
        ></cx-card>
        <div class="cx-review-summary-edit-step">
          <a
            [attr.title]="
              'checkoutReview.editDeliveryAddressDetails' | cxTranslate
            "
            [routerLink]="
              {
                cxRoute: getCheckoutStepUrl(checkoutStepTypeDeliveryAddress),
              } | cxUrl
            "
            ><cx-icon aria-hidden="true" [type]="iconTypes.PENCIL"></cx-icon
          ></a>
        </div>
      </div>
    </ng-container>
  </ng-template>

  <!-- DELIVERY ADDRESS SECTION -->
  <ng-template #deliveryAddress>
    <div
      *ngIf="deliveryAddress$ | async as deliveryAddress"
      class="cx-review-summary-card cx-review-card-address"
    >
      <cx-card
        [content]="getDeliveryAddressCard(deliveryAddress) | async"
      ></cx-card>
      <div class="cx-review-summary-edit-step">
        <a
          [attr.title]="
            'checkoutReview.editDeliveryAddressDetails' | cxTranslate
          "
          [routerLink]="
            {
              cxRoute: getCheckoutStepUrl(checkoutStepTypeDeliveryAddress),
            } | cxUrl
          "
          ><cx-icon aria-hidden="true" [type]="iconTypes.PENCIL"></cx-icon
        ></a>
      </div>
    </div>
  </ng-template>

  <!-- DELIVERY MODE SECTION -->
  <ng-template #deliveryMode>
    <div class="cx-review-summary-card cx-review-card-shipping">
      <div>
        <cx-card
          *ngIf="deliveryMode$ | async as deliveryMode"
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

  <!-- PAYMENT METHOD SECTION -->
  <ng-template #paymentMethod>
    <div class="cx-review-summary-card cx-review-card-payment">
      <div>
        <cx-card
          *ngIf="paymentDetails$ | async as paymentDetails"
          [content]="getPaymentMethodCard(paymentDetails) | async"
        ></cx-card>
      </div>
      <div class="cx-review-summary-edit-step">
        <a
          [attr.title]="'checkoutReview.editPaymentDetails' | cxTranslate"
          [routerLink]="
            { cxRoute: getCheckoutStepUrl(checkoutStepTypePaymentDetails) }
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
var B2BCheckoutReviewSubmitModule = class _B2BCheckoutReviewSubmitModule {
  static {
    this.ɵfac = function B2BCheckoutReviewSubmitModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _B2BCheckoutReviewSubmitModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _B2BCheckoutReviewSubmitModule,
      declarations: [B2BCheckoutReviewSubmitComponent],
      imports: [CommonModule, CardModule, I18nModule, UrlModule, RouterModule, PromotionsModule, IconModule, OutletModule],
      exports: [B2BCheckoutReviewSubmitComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutReviewOrder: {
            component: B2BCheckoutReviewSubmitComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      imports: [CommonModule, CardModule, I18nModule, UrlModule, RouterModule, PromotionsModule, IconModule, OutletModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(B2BCheckoutReviewSubmitModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CardModule, I18nModule, UrlModule, RouterModule, PromotionsModule, IconModule, OutletModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutReviewOrder: {
            component: B2BCheckoutReviewSubmitComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      declarations: [B2BCheckoutReviewSubmitComponent],
      exports: [B2BCheckoutReviewSubmitComponent]
    }]
  }], null, null);
})();
var CheckoutB2BAuthGuard = class _CheckoutB2BAuthGuard extends CheckoutAuthGuard {
  constructor(authService, authRedirectService, checkoutConfigService, activeCartFacade, semanticPathService, router, userAccountFacade, globalMessageService) {
    super(authService, authRedirectService, checkoutConfigService, activeCartFacade, semanticPathService, router);
    this.authService = authService;
    this.authRedirectService = authRedirectService;
    this.checkoutConfigService = checkoutConfigService;
    this.activeCartFacade = activeCartFacade;
    this.semanticPathService = semanticPathService;
    this.router = router;
    this.userAccountFacade = userAccountFacade;
    this.globalMessageService = globalMessageService;
  }
  canActivate() {
    return combineLatest([this.authService.isUserLoggedIn(), this.activeCartFacade.isGuestCart(), this.userAccountFacade.get(), this.activeCartFacade.isStable()]).pipe(
      map(([isLoggedIn, isGuestCart, user, isStable]) => ({
        isLoggedIn,
        isGuestCart,
        user,
        isStable
      })),
      filter((data) => data.isStable),
      // if the user is authenticated and we have their data, OR if the user is anonymous
      filter((data) => !!data.user && data.isLoggedIn || !data.isLoggedIn),
      map((data) => {
        if (!data.isLoggedIn) {
          return data.isGuestCart ? true : this.handleAnonymousUser();
        } else if (data.user && "roles" in data.user) {
          return this.handleUserRole(data.user);
        }
        return data.isLoggedIn;
      })
    );
  }
  handleUserRole(user) {
    const roles = user.roles;
    if (roles?.includes(B2BUserRole.CUSTOMER)) {
      return true;
    }
    this.globalMessageService.add({
      key: "checkoutB2B.invalid.accountType"
    }, GlobalMessageType.MSG_TYPE_WARNING);
    return this.router.parseUrl(this.semanticPathService.get("home") ?? "");
  }
  static {
    this.ɵfac = function CheckoutB2BAuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutB2BAuthGuard)(ɵɵinject(AuthService), ɵɵinject(AuthRedirectService), ɵɵinject(CheckoutConfigService), ɵɵinject(ActiveCartFacade), ɵɵinject(SemanticPathService), ɵɵinject(Router), ɵɵinject(UserAccountFacade), ɵɵinject(GlobalMessageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutB2BAuthGuard,
      factory: _CheckoutB2BAuthGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutB2BAuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AuthService
  }, {
    type: AuthRedirectService
  }, {
    type: CheckoutConfigService
  }, {
    type: ActiveCartFacade
  }, {
    type: SemanticPathService
  }, {
    type: Router
  }, {
    type: UserAccountFacade
  }, {
    type: GlobalMessageService
  }], null);
})();
var CheckoutB2BStepsSetGuard = class _CheckoutB2BStepsSetGuard extends CheckoutStepsSetGuard {
  constructor(checkoutStepService, routingConfigService, checkoutDeliveryAddressFacade, checkoutPaymentFacade, checkoutDeliveryModesFacade, router, checkoutPaymentTypeFacade, checkoutCostCenterFacade, activeCartFacade) {
    super(checkoutStepService, routingConfigService, checkoutDeliveryAddressFacade, checkoutPaymentFacade, checkoutDeliveryModesFacade, router, activeCartFacade);
    this.checkoutStepService = checkoutStepService;
    this.routingConfigService = routingConfigService;
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.checkoutPaymentFacade = checkoutPaymentFacade;
    this.checkoutDeliveryModesFacade = checkoutDeliveryModesFacade;
    this.router = router;
    this.checkoutPaymentTypeFacade = checkoutPaymentTypeFacade;
    this.checkoutCostCenterFacade = checkoutCostCenterFacade;
    this.activeCartFacade = activeCartFacade;
    this.logger = inject(LoggerService);
  }
  canActivate(route) {
    let currentIndex = -1;
    const currentRouteUrl = "/" + route.url.join("/");
    return combineLatest([this.checkoutStepService.steps$, this.checkoutPaymentTypeFacade.isAccountPayment()]).pipe(tap(([, isAccount]) => {
      this.checkoutStepService.disableEnableStep(CheckoutStepType.PAYMENT_DETAILS, isAccount);
    }), take(1), switchMap(([steps, isAccount]) => {
      currentIndex = steps.findIndex((step) => {
        const stepRouteUrl = `/${this.routingConfigService.getRouteConfig(step.routeName)?.paths?.[0]}`;
        return stepRouteUrl === currentRouteUrl;
      });
      let currentStep;
      if (currentIndex >= 0) {
        currentStep = steps[currentIndex];
      }
      if (Boolean(currentStep)) {
        return this.isB2BStepSet(steps[currentIndex - 1], isAccount);
      } else {
        if (isDevMode()) {
          this.logger.warn(`Missing step with route '${currentRouteUrl}' in checkout configuration or this step is disabled.`);
        }
        return of(this.getUrl("checkout"));
      }
    }));
  }
  isB2BStepSet(step, isAccountPayment) {
    if (step && !step.disabled) {
      switch (step.type[0]) {
        case CheckoutStepType.PAYMENT_TYPE: {
          return this.isPaymentTypeSet(step);
        }
        case CheckoutStepType.DELIVERY_ADDRESS: {
          return this.isDeliveryAddressAndCostCenterSet(step, isAccountPayment);
        }
        case CheckoutStepType.DELIVERY_MODE: {
          return this.isDeliveryModeSet(step);
        }
        case CheckoutStepType.PAYMENT_DETAILS: {
          return this.isPaymentDetailsSet(step);
        }
        case CheckoutStepType.REVIEW_ORDER: {
          break;
        }
      }
    }
    return of(true);
  }
  isPaymentTypeSet(step) {
    return this.checkoutPaymentTypeFacade.getSelectedPaymentTypeState().pipe(filter((state) => !state.loading), map((state) => state.data), map((paymentType) => {
      if (paymentType) {
        return true;
      } else {
        return this.getUrl(step.routeName);
      }
    }));
  }
  isDeliveryAddressAndCostCenterSet(step, isAccountPayment) {
    return combineLatest([this.checkoutDeliveryAddressFacade.getDeliveryAddressState().pipe(filter((state) => !state.loading), map((state) => state.data)), this.checkoutCostCenterFacade.getCostCenterState().pipe(filter((state) => !state.loading), map((state) => state.data))]).pipe(map(([deliveryAddress, costCenter]) => {
      if (isAccountPayment) {
        if (deliveryAddress && Object.keys(deliveryAddress).length && !!costCenter) {
          return true;
        } else {
          return this.getUrl(step.routeName);
        }
      } else {
        if (deliveryAddress && Object.keys(deliveryAddress).length && costCenter === void 0) {
          return true;
        } else {
          return this.getUrl(step.routeName);
        }
      }
    }));
  }
  static {
    this.ɵfac = function CheckoutB2BStepsSetGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutB2BStepsSetGuard)(ɵɵinject(CheckoutStepService), ɵɵinject(RoutingConfigService), ɵɵinject(CheckoutDeliveryAddressFacade), ɵɵinject(CheckoutPaymentFacade), ɵɵinject(CheckoutDeliveryModesFacade), ɵɵinject(Router), ɵɵinject(CheckoutPaymentTypeFacade), ɵɵinject(CheckoutCostCenterFacade), ɵɵinject(ActiveCartFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutB2BStepsSetGuard,
      factory: _CheckoutB2BStepsSetGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutB2BStepsSetGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CheckoutStepService
  }, {
    type: RoutingConfigService
  }, {
    type: CheckoutDeliveryAddressFacade
  }, {
    type: CheckoutPaymentFacade
  }, {
    type: CheckoutDeliveryModesFacade
  }, {
    type: Router
  }, {
    type: CheckoutPaymentTypeFacade
  }, {
    type: CheckoutCostCenterFacade
  }, {
    type: ActiveCartFacade
  }], null);
})();
var CheckoutB2BComponentsModule = class _CheckoutB2BComponentsModule {
  static {
    this.ɵfac = function CheckoutB2BComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutB2BComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutB2BComponentsModule,
      imports: [CommonModule, CheckoutCostCenterModule, CheckoutPaymentTypeModule, B2BCheckoutDeliveryAddressModule, B2BCheckoutReviewSubmitModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: CheckoutAuthGuard,
        useExisting: CheckoutB2BAuthGuard
      }, {
        provide: CheckoutStepsSetGuard,
        useExisting: CheckoutB2BStepsSetGuard
      }],
      imports: [CommonModule, CheckoutCostCenterModule, CheckoutPaymentTypeModule, B2BCheckoutDeliveryAddressModule, B2BCheckoutReviewSubmitModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutB2BComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CheckoutCostCenterModule, CheckoutPaymentTypeModule, B2BCheckoutDeliveryAddressModule, B2BCheckoutReviewSubmitModule],
      providers: [{
        provide: CheckoutAuthGuard,
        useExisting: CheckoutB2BAuthGuard
      }, {
        provide: CheckoutStepsSetGuard,
        useExisting: CheckoutB2BStepsSetGuard
      }]
    }]
  }], null, null);
})();

export {
  B2BCheckoutReviewSubmitComponent,
  CheckoutB2BStepsSetGuard,
  CheckoutB2BComponentsModule
};
//# sourceMappingURL=chunk-Z7YLXNZ5.js.map
