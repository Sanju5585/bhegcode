import {
  CheckoutConfig,
  CheckoutDeliveryAddressFacade,
  CheckoutDeliveryModesFacade,
  CheckoutPaymentFacade,
  CheckoutStepState,
  CheckoutStepType,
  DeliveryModePreferences
} from "./chunk-X6DUCLWC.js";
import {
  OrderFacade,
  billingAddressCard,
  deliveryAddressCard,
  deliveryModeCard,
  paymentMethodCard
} from "./chunk-UIW5AQFA.js";
import {
  AddressFormComponent,
  AddressFormModule
} from "./chunk-XTCFQJ22.js";
import {
  CartValidationGuard
} from "./chunk-Q7WXRDFA.js";
import {
  ActiveCartFacade,
  CartOutlets,
  PromotionLocation
} from "./chunk-KEAKWHYV.js";
import {
  AtMessageDirective,
  AtMessageModule,
  CardComponent,
  CardModule,
  CustomFormValidators,
  DIALOG_TYPE,
  FormErrorsComponent,
  FormErrorsModule,
  FormRequiredAsterisksComponent,
  FormRequiredLegendComponent,
  ICON_TYPE,
  IS_GUEST_USER_CHECKOUT_KEY,
  IconComponent,
  IconModule,
  InnerComponentsHostDirective,
  LAUNCH_CALLER,
  LaunchDialogService,
  NgSelectA11yDirective,
  NgSelectA11yModule,
  OutletDirective,
  OutletModule,
  PageComponentModule,
  PromotionsComponent,
  PromotionsModule,
  SelectFocusUtility,
  SpinnerComponent,
  SpinnerModule,
  getAddressNumbers
} from "./chunk-D5RDRHN5.js";
import {
  AuthRedirectService,
  AuthService,
  BaseSiteService,
  CurrencyService,
  FeatureConfigService,
  FeaturesConfigModule,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  LanguageService,
  LoggerService,
  RoutingConfigService,
  RoutingService,
  SemanticPathService,
  TranslatePipe,
  TranslationService,
  UrlModule,
  UrlPipe,
  UserAddressService,
  UserPaymentService,
  WindowRef,
  getLastValueSync,
  provideDefaultConfig,
  useFeatureStyles
} from "./chunk-VIVIQI6G.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-EBCNDD52.js";
import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-YMQEGXEG.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  UntypedFormBuilder,
  Validators,
  ɵNgNoValidate
} from "./chunk-YST33EXT.js";
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
  DOCUMENT
} from "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Optional,
  Output,
  Pipe,
  ViewContainerRef,
  inject,
  isDevMode,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
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
  BehaviorSubject,
  EMPTY,
  catchError,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  of,
  take,
  tap,
  withLatestFrom
} from "./chunk-R6FETK65.js";
import {
  Observable,
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/checkout/fesm2022/spartacus-checkout-base-components.mjs
function CheckoutDeliveryAddressComponent_section_0_ng_template_2_Template(rf, ctx) {
}
function CheckoutDeliveryAddressComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "section");
    ɵɵpipe(1, "cxTranslate");
    ɵɵtemplate(2, CheckoutDeliveryAddressComponent_section_0_ng_template_2_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const content_r1 = ɵɵreference(2);
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 2, "checkoutAddress.shippingAddress"));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", content_r1);
  }
}
function CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_template_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 20)(1, "div", 21);
    ɵɵlistener("click", function CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_template_2_div_8_Template_div_click_1_listener() {
      const card_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r2 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r2.selectAddress(card_r5.address));
    });
    ɵɵelementStart(2, "cx-card", 22);
    ɵɵlistener("sendCard", function CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_template_2_div_8_Template_cx_card_sendCard_2_listener() {
      const card_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r2 = ɵɵnextContext(5);
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
function CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p", 10);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 11)(4, "button", 12);
    ɵɵlistener("click", function CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_template_2_Template_button_click_4_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.showNewAddressForm());
    });
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(7, "div", 13);
    ɵɵtemplate(8, CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_template_2_div_8_Template, 3, 5, "div", 14);
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 15)(10, "button", 12);
    ɵɵlistener("click", function CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_template_2_Template_button_click_10_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.showNewAddressForm());
    });
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(13, "div", 16)(14, "div", 17)(15, "button", 18);
    ɵɵlistener("click", function CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_template_2_Template_button_click_15_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.back());
    });
    ɵɵtext(16);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(18, "div", 17)(19, "button", 19);
    ɵɵpipe(20, "async");
    ɵɵlistener("click", function CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_template_2_Template_button_click_19_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.next());
    });
    ɵɵtext(21);
    ɵɵpipe(22, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const cards_r7 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 7, "checkoutAddress.selectYourDeliveryAddress"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 9, "checkoutAddress.addNewAddress"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", cards_r7);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 11, "checkoutAddress.addNewAddress"), " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(17, 13, ctx_r2.backBtnText), " ");
    ɵɵadvance(3);
    ɵɵproperty("disabled", !((tmp_14_0 = ɵɵpipeBind1(20, 15, ctx_r2.selectedAddress$)) == null ? null : tmp_14_0.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(22, 17, "common.continue"), " ");
  }
}
function CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_template_4_cx_address_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-address-form", 24);
    ɵɵlistener("backToAddress", function CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_template_4_cx_address_form_0_Template_cx_address_form_backToAddress_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r2.hideNewAddressForm(false));
    })("submitAddress", function CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_template_4_cx_address_form_0_Template_cx_address_form_submitAddress_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r2.addAddress($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("showTitleCode", true);
  }
}
function CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_template_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-address-form", 25);
    ɵɵpipe(1, "cxTranslate");
    ɵɵlistener("backToAddress", function CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_template_4_ng_template_1_Template_cx_address_form_backToAddress_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r2 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r2.hideNewAddressForm(true));
    })("submitAddress", function CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_template_4_ng_template_1_Template_cx_address_form_submitAddress_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r2 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r2.addAddress($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(5);
    ɵɵpropertyInterpolate("cancelBtnLabel", ɵɵpipeBind1(1, 4, ctx_r2.backBtnText));
    ɵɵproperty("showTitleCode", true)("setAsDefaultField", !ctx_r2.isGuestCheckout)("addressData", ctx_r2.selectedAddress);
  }
}
function CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_template_4_cx_address_form_0_Template, 1, 1, "cx-address-form", 23)(1, CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_template_4_ng_template_1_Template, 2, 6, "ng-template", null, 4, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const initialAddressForm_r10 = ɵɵreference(2);
    const cards_r7 = ɵɵnextContext(2).ngIf;
    ɵɵproperty("ngIf", cards_r7.length)("ngIfElse", initialAddressForm_r10);
  }
}
function CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 9)(2, CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_template_2_Template, 23, 19, "ng-template", null, 2, ɵɵtemplateRefExtractor)(4, CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_ng_template_4_Template, 3, 2, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const showExistingAddresses_r11 = ɵɵreference(3);
    const newAddressForm_r12 = ɵɵreference(5);
    const cards_r7 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", (cards_r7 == null ? null : cards_r7.length) && !ctx_r2.addressFormOpened)("ngIfThen", showExistingAddresses_r11)("ngIfElse", newAddressForm_r12);
  }
}
function CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_ng_container_1_Template, 6, 3, "ng-container", 5);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    const loading_r13 = ɵɵreference(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ɵɵpipeBind1(2, 2, ctx_r2.isUpdating$))("ngIfElse", loading_r13);
  }
}
function CheckoutDeliveryAddressComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h2", 7);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(3, CheckoutDeliveryAddressComponent_ng_template_1_ng_container_3_Template, 3, 4, "ng-container", 8);
    ɵɵpipe(4, "async");
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "checkoutAddress.shippingAddress"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(4, 4, ctx_r2.cards$));
  }
}
function CheckoutDeliveryAddressComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 26);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
var _c0 = (a0) => ({
  item: a0
});
var _c1 = (a0) => ({
  items: a0,
  readonly: true
});
function CheckoutDeliveryModeComponent_ng_container_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13)(1, "input", 14);
    ɵɵlistener("change", function CheckoutDeliveryModeComponent_ng_container_6_div_2_Template_input_change_1_listener($event) {
      const mode_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.changeMode(mode_r3.code, $event));
    })("click", function CheckoutDeliveryModeComponent_ng_container_6_div_2_Template_input_click_1_listener($event) {
      const mode_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.changeMode(mode_r3.code, $event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "label", 15)(3, "div", 16);
    ɵɵtext(4);
    ɵɵelementStart(5, "span", 17);
    ɵɵtext(6);
    ɵɵelementEnd()();
    ɵɵelementStart(7, "div", 18);
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelement(9, "div", 19);
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
function CheckoutDeliveryModeComponent_ng_container_6_ng_template_3_Template(rf, ctx) {
}
function CheckoutDeliveryModeComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 10);
    ɵɵtemplate(2, CheckoutDeliveryModeComponent_ng_container_6_div_2_Template, 10, 10, "div", 11)(3, CheckoutDeliveryModeComponent_ng_container_6_ng_template_3_Template, 0, 0, "ng-template", 12);
    ɵɵpipe(4, "async");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const supportedDeliveryModes_r5 = ctx.ngIf;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("formGroup", ctx_r3.mode);
    ɵɵadvance();
    ɵɵproperty("ngForOf", supportedDeliveryModes_r5);
    ɵɵadvance();
    ɵɵproperty("cxOutlet", ctx_r3.CartOutlets.DELIVERY_MODE)("cxOutletContext", ɵɵpureFunction1(6, _c0, ɵɵpipeBind1(4, 4, ctx_r3.activeCartFacade.getActive())));
  }
}
function CheckoutDeliveryModeComponent_ng_container_9_ng_template_4_Template(rf, ctx) {
}
function CheckoutDeliveryModeComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "h2", 2);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(4, CheckoutDeliveryModeComponent_ng_container_9_ng_template_4_Template, 0, 0, "ng-template", 12);
    ɵɵpipe(5, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "checkoutMode.deliveryEntries"), " ");
    ɵɵadvance(2);
    ɵɵproperty("cxOutlet", ctx_r3.CartOutlets.CART_ITEM_LIST)("cxOutletContext", ɵɵpureFunction1(7, _c1, ɵɵpipeBind1(5, 5, ctx_r3.activeCartFacade.getDeliveryEntries())));
  }
}
function CheckoutDeliveryModeComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
var _c2 = (a0) => ({
  label: a0
});
function CheckoutOrderSummaryComponent_ng_template_0_Template(rf, ctx) {
}
var _c3 = () => ({
  required: "true"
});
var _c4 = (a0) => ({
  ariaLabel: a0
});
function CheckoutBillingAddressFormComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 5)(2, "div", 6)(3, "label")(4, "input", 7);
    ɵɵpipe(5, "cxTranslate");
    ɵɵlistener("change", function CheckoutBillingAddressFormComponent_ng_container_4_Template_input_change_4_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleSameAsDeliveryAddress());
    });
    ɵɵelementEnd();
    ɵɵelementStart(6, "span", 8);
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd()()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵproperty("checked", ctx_r1.sameAsDeliveryAddress);
    ɵɵattribute("aria-label", ɵɵpipeBind1(5, 3, "paymentForm.billingAddressSameAsShipping"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(8, 5, "paymentForm.sameAsDeliveryAddress"));
  }
}
function CheckoutBillingAddressFormComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-card", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const deliveryAddress_r3 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("content", ctx_r1.getAddressCardContent(deliveryAddress_r3));
  }
}
function CheckoutBillingAddressFormComponent_ng_template_8_ng_container_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "label")(2, "span", 12);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelement(5, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelementStart(6, "ng-select", 28);
    ɵɵpipe(7, "cxTranslate");
    ɵɵpipe(8, "cxTranslate");
    ɵɵlistener("change", function CheckoutBillingAddressFormComponent_ng_template_8_ng_container_3_div_1_Template_ng_select_change_6_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.countrySelected($event));
    });
    ɵɵelementEnd();
    ɵɵelement(9, "cx-form-errors", 29);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const countries_r5 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 10, "addressForm.country"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(7, 12, "addressForm.selectOne"));
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(16, _c3))("searchable", true)("clearable", false)("items", countries_r5)("cxNgSelectA11y", ɵɵpureFunction1(17, _c4, ɵɵpipeBind1(8, 14, "addressForm.country")));
    ɵɵattribute("aria-invalid", ((tmp_12_0 = ctx_r1.billingAddressForm.get("isocode")) == null ? null : tmp_12_0.touched) && ((tmp_12_0 = ctx_r1.billingAddressForm.get("isocode")) == null ? null : tmp_12_0.invalid))("aria-errormessage", "isocodeError");
    ɵɵadvance(3);
    ɵɵproperty("control", ctx_r1.billingAddressForm.get("country.isocode"));
  }
}
function CheckoutBillingAddressFormComponent_ng_template_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckoutBillingAddressFormComponent_ng_template_8_ng_container_3_div_1_Template, 10, 19, "div", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const countries_r5 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", countries_r5.length !== 0);
  }
}
function CheckoutBillingAddressFormComponent_ng_template_8_ng_container_58_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 22)(2, "label")(3, "span", 12);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(6, "ng-select", 31);
    ɵɵpipe(7, "cxTranslate");
    ɵɵpipe(8, "cxTranslate");
    ɵɵelement(9, "cx-form-errors", 32);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    const regions_r6 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 12, "addressForm.state"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("bindLabel", regions_r6[0].name ? "name" : "isocodeShort");
    ɵɵpropertyInterpolate("bindValue", regions_r6[0].name ? "isocodeShort" : "region");
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(7, 14, "addressForm.selectOne"));
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(18, _c3))("searchable", true)("clearable", false)("items", regions_r6)("cxNgSelectA11y", ɵɵpureFunction1(19, _c4, ɵɵpipeBind1(8, 16, "addressForm.state")));
    ɵɵattribute("aria-invalid", ((tmp_14_0 = ctx_r1.billingAddressForm.get("isocodeShort")) == null ? null : tmp_14_0.touched) && ((tmp_14_0 = ctx_r1.billingAddressForm.get("isocodeShort")) == null ? null : tmp_14_0.invalid))("aria-errormessage", "isocodeShortError");
    ɵɵadvance(3);
    ɵɵproperty("control", ctx_r1.billingAddressForm.get("region.isocodeShort"));
  }
}
function CheckoutBillingAddressFormComponent_ng_template_8_ng_container_58_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 30);
    ɵɵtemplate(1, CheckoutBillingAddressFormComponent_ng_template_8_ng_container_58_ng_container_1_Template, 10, 21, "ng-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const regions_r6 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", regions_r6.length !== 0);
  }
}
function CheckoutBillingAddressFormComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵelement(1, "cx-form-required-legend");
    ɵɵelementStart(2, "div", 11);
    ɵɵtemplate(3, CheckoutBillingAddressFormComponent_ng_template_8_ng_container_3_Template, 2, 1, "ng-container", 3);
    ɵɵpipe(4, "async");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 5)(6, "label")(7, "span", 12);
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelement(10, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(11, "input", 13);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelement(13, "cx-form-errors", 14);
    ɵɵelementEnd()();
    ɵɵelementStart(14, "div", 5)(15, "label")(16, "span", 12);
    ɵɵtext(17);
    ɵɵpipe(18, "cxTranslate");
    ɵɵelement(19, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(20, "input", 15);
    ɵɵpipe(21, "cxTranslate");
    ɵɵelement(22, "cx-form-errors", 16);
    ɵɵelementEnd()();
    ɵɵelementStart(23, "div", 5)(24, "label")(25, "span", 12);
    ɵɵtext(26);
    ɵɵpipe(27, "cxTranslate");
    ɵɵelement(28, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(29, "input", 17);
    ɵɵpipe(30, "cxTranslate");
    ɵɵelement(31, "cx-form-errors", 18);
    ɵɵelementEnd()();
    ɵɵelementStart(32, "div", 5)(33, "label")(34, "span", 19);
    ɵɵtext(35);
    ɵɵpipe(36, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(37, "input", 20);
    ɵɵpipe(38, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(39, "div", 21)(40, "div", 22)(41, "label")(42, "span", 12);
    ɵɵtext(43);
    ɵɵpipe(44, "cxTranslate");
    ɵɵelement(45, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(46, "input", 23);
    ɵɵpipe(47, "cxTranslate");
    ɵɵelement(48, "cx-form-errors", 24);
    ɵɵelementEnd()();
    ɵɵelementStart(49, "div", 22)(50, "label")(51, "span", 12);
    ɵɵtext(52);
    ɵɵpipe(53, "cxTranslate");
    ɵɵelement(54, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(55, "input", 25);
    ɵɵpipe(56, "cxTranslate");
    ɵɵelement(57, "cx-form-errors", 26);
    ɵɵelementEnd()();
    ɵɵtemplate(58, CheckoutBillingAddressFormComponent_ng_template_8_ng_container_58_Template, 2, 1, "ng-container", 27);
    ɵɵpipe(59, "async");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_11_0;
    let tmp_16_0;
    let tmp_23_0;
    let tmp_28_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.billingAddressForm);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ɵɵpipeBind1(4, 30, ctx_r1.countries$));
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 32, "addressForm.firstName.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(12, 34, "addressForm.firstName.placeholder"));
    ɵɵattribute("aria-invalid", ((tmp_6_0 = ctx_r1.billingAddressForm.get("firstName")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx_r1.billingAddressForm.get("firstName")) == null ? null : tmp_6_0.invalid))("aria-errormessage", "firstNameError");
    ɵɵadvance(2);
    ɵɵproperty("control", ctx_r1.billingAddressForm.get("firstName"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 36, "addressForm.lastName.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(21, 38, "addressForm.lastName.placeholder"));
    ɵɵattribute("aria-invalid", ((tmp_11_0 = ctx_r1.billingAddressForm.get("lastName")) == null ? null : tmp_11_0.touched) && ((tmp_11_0 = ctx_r1.billingAddressForm.get("lastName")) == null ? null : tmp_11_0.invalid))("aria-errormessage", "lastNameError");
    ɵɵadvance(2);
    ɵɵproperty("control", ctx_r1.billingAddressForm.get("lastName"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(27, 40, "addressForm.address1"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(30, 42, "addressForm.streetAddress"));
    ɵɵattribute("aria-invalid", ((tmp_16_0 = ctx_r1.billingAddressForm.get("line1")) == null ? null : tmp_16_0.touched) && ((tmp_16_0 = ctx_r1.billingAddressForm.get("line1")) == null ? null : tmp_16_0.invalid))("aria-errormessage", "line1Error");
    ɵɵadvance(2);
    ɵɵproperty("control", ctx_r1.billingAddressForm.get("line1"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(36, 44, "addressForm.address2"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(38, 46, "addressForm.aptSuite"));
    ɵɵadvance(6);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(44, 48, "addressForm.city.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(47, 50, "addressForm.city.placeholder"));
    ɵɵattribute("aria-invalid", ((tmp_23_0 = ctx_r1.billingAddressForm.get("town")) == null ? null : tmp_23_0.touched) && ((tmp_23_0 = ctx_r1.billingAddressForm.get("town")) == null ? null : tmp_23_0.invalid))("aria-errormessage", "townError");
    ɵɵadvance(2);
    ɵɵproperty("control", ctx_r1.billingAddressForm.get("town"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(53, 52, "addressForm.zipCode.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(56, 54, "addressForm.zipCode.placeholder"));
    ɵɵattribute("aria-invalid", ((tmp_28_0 = ctx_r1.billingAddressForm.get("postalCode")) == null ? null : tmp_28_0.touched) && ((tmp_28_0 = ctx_r1.billingAddressForm.get("postalCode")) == null ? null : tmp_28_0.invalid))("aria-errormessage", "postalCodeError");
    ɵɵadvance(2);
    ɵɵproperty("control", ctx_r1.billingAddressForm.get("postalCode"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(59, 56, ctx_r1.regions$));
  }
}
var _c5 = (a0) => ({
  selected: a0
});
function CheckoutPaymentFormComponent_ng_container_0_ng_container_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "label")(2, "span", 28);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelement(5, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(6, "ng-select", 29);
    ɵɵpipe(7, "cxTranslate");
    ɵɵpipe(8, "cxTranslate");
    ɵɵelement(9, "cx-form-errors", 17);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const cardTypes_r3 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(4, 9, "paymentForm.paymentType"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(7, 11, "paymentForm.selectOne"));
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(17, _c3))("searchable", true)("clearable", false)("items", cardTypes_r3)("cxNgSelectA11y", ɵɵpureFunction1(18, _c4, ɵɵpipeBind1(8, 13, "paymentForm.paymentType")));
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(20, _c2, ɵɵpipeBind1(10, 15, "paymentForm.paymentType")))("control", ctx_r1.paymentForm.get("cardType.code"));
  }
}
function CheckoutPaymentFormComponent_ng_container_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckoutPaymentFormComponent_ng_container_0_ng_container_6_div_1_Template, 11, 22, "div", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const cardTypes_r3 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", cardTypes_r3.length !== 0);
  }
}
function CheckoutPaymentFormComponent_ng_container_0_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7)(1, "div", 30)(2, "label")(3, "input", 31);
    ɵɵlistener("change", function CheckoutPaymentFormComponent_ng_container_0_div_58_Template_input_change_3_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.toggleDefaultPaymentMethod());
    });
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 32);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 1, "paymentForm.setAsDefault"));
  }
}
function CheckoutPaymentFormComponent_ng_container_0_button_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 33);
    ɵɵlistener("click", function CheckoutPaymentFormComponent_ng_container_0_button_62_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.back());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "common.back"), " ");
  }
}
function CheckoutPaymentFormComponent_ng_container_0_button_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 33);
    ɵɵlistener("click", function CheckoutPaymentFormComponent_ng_container_0_button_63_Template_button_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.close());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "paymentForm.changePayment"), " ");
  }
}
function CheckoutPaymentFormComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-form-required-legend");
    ɵɵelementStart(2, "form", 2);
    ɵɵlistener("ngSubmit", function CheckoutPaymentFormComponent_ng_container_0_Template_form_ngSubmit_2_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.next());
    });
    ɵɵelementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
    ɵɵtemplate(6, CheckoutPaymentFormComponent_ng_container_0_ng_container_6_Template, 2, 1, "ng-container", 6);
    ɵɵpipe(7, "async");
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 7)(9, "label")(10, "span", 8);
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelement(13, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(14, "input", 9);
    ɵɵpipe(15, "cxTranslate");
    ɵɵelement(16, "cx-form-errors", 10);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(18, "div", 7)(19, "label")(20, "span", 8);
    ɵɵtext(21);
    ɵɵpipe(22, "cxTranslate");
    ɵɵelement(23, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(24, "input", 11)(25, "cx-form-errors", 12);
    ɵɵpipe(26, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(27, "div", 3)(28, "div", 13)(29, "fieldset", 14)(30, "legend", 8);
    ɵɵtext(31);
    ɵɵpipe(32, "cxTranslate");
    ɵɵelement(33, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelementStart(34, "label", 15);
    ɵɵelement(35, "ng-select", 16);
    ɵɵpipe(36, "cxTranslate");
    ɵɵpipe(37, "cxTranslate");
    ɵɵelement(38, "cx-form-errors", 17);
    ɵɵpipe(39, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(40, "label", 15);
    ɵɵelement(41, "ng-select", 18);
    ɵɵpipe(42, "cxTranslate");
    ɵɵpipe(43, "cxTranslate");
    ɵɵelement(44, "cx-form-errors", 17);
    ɵɵpipe(45, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementStart(46, "div", 19)(47, "label")(48, "span", 8);
    ɵɵtext(49);
    ɵɵpipe(50, "cxTranslate");
    ɵɵelement(51, "cx-form-required-asterisks")(52, "cx-icon", 20);
    ɵɵpipe(53, "cxTranslate");
    ɵɵpipe(54, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(55, "input", 21)(56, "cx-form-errors", 22);
    ɵɵpipe(57, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵtemplate(58, CheckoutPaymentFormComponent_ng_container_0_div_58_Template, 7, 3, "div", 23);
    ɵɵelement(59, "cx-checkout-billing-address-form");
    ɵɵelementEnd()();
    ɵɵelementStart(60, "div", 24)(61, "div", 25);
    ɵɵtemplate(62, CheckoutPaymentFormComponent_ng_container_0_button_62_Template, 3, 3, "button", 26)(63, CheckoutPaymentFormComponent_ng_container_0_button_63_Template, 3, 3, "button", 26);
    ɵɵelementEnd();
    ɵɵelementStart(64, "div", 25)(65, "button", 27);
    ɵɵtext(66);
    ɵɵpipe(67, "cxTranslate");
    ɵɵelementEnd()()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_11_0;
    let tmp_21_0;
    let tmp_29_0;
    let tmp_36_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("formGroup", ctx_r1.paymentForm);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ɵɵpipeBind1(7, 42, ctx_r1.cardTypes$));
    ɵɵadvance(5);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(12, 44, "paymentForm.accountHolderName.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(15, 46, "paymentForm.accountHolderName.placeholder"));
    ɵɵattribute("aria-invalid", ((tmp_6_0 = ctx_r1.paymentForm.get("accountHolderName")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx_r1.paymentForm.get("accountHolderName")) == null ? null : tmp_6_0.invalid))("aria-errormessage", "accountHolderNameError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(80, _c2, ɵɵpipeBind1(17, 48, "paymentForm.accountHolderName.label")))("control", ctx_r1.paymentForm.get("accountHolderName"));
    ɵɵadvance(5);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(22, 50, "paymentForm.cardNumber"), " ");
    ɵɵadvance(3);
    ɵɵattribute("aria-invalid", ((tmp_11_0 = ctx_r1.paymentForm.get("cardNumber")) == null ? null : tmp_11_0.touched) && ((tmp_11_0 = ctx_r1.paymentForm.get("cardNumber")) == null ? null : tmp_11_0.invalid))("aria-errormessage", "cardNumberError");
    ɵɵadvance();
    ɵɵproperty("translationParams", ɵɵpureFunction1(82, _c2, ɵɵpipeBind1(26, 52, "paymentForm.cardNumber")))("control", ctx_r1.paymentForm.get("cardNumber"));
    ɵɵadvance(6);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(32, 54, "paymentForm.expirationDate"), " ");
    ɵɵadvance(4);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(36, 56, "paymentForm.monthMask"));
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(84, _c3))("searchable", true)("clearable", false)("items", ctx_r1.months)("cxNgSelectA11y", ɵɵpureFunction1(87, _c4, ɵɵpipeBind2(37, 58, "paymentForm.expirationMonth", ɵɵpureFunction1(85, _c5, (tmp_21_0 = ctx_r1.paymentForm.get("expiryMonth")) == null ? null : tmp_21_0.value))));
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(89, _c2, ɵɵpipeBind1(39, 61, "paymentForm.expirationDate")))("control", ctx_r1.paymentForm.get("expiryMonth"));
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(42, 63, "paymentForm.yearMask"));
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(91, _c3))("searchable", true)("clearable", false)("items", ctx_r1.years)("cxNgSelectA11y", ɵɵpureFunction1(94, _c4, ɵɵpipeBind2(43, 65, "paymentForm.expirationYear", ɵɵpureFunction1(92, _c5, (tmp_29_0 = ctx_r1.paymentForm.get("expiryYear")) == null ? null : tmp_29_0.value))));
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(96, _c2, ɵɵpipeBind1(45, 68, "paymentForm.expirationDate")))("control", ctx_r1.paymentForm.get("expiryYear"));
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(50, 70, "paymentForm.securityCode"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(53, 72, "paymentForm.securityCodeTitle"));
    ɵɵproperty("type", ctx_r1.iconTypes.INFO);
    ɵɵattribute("aria-label", ɵɵpipeBind1(54, 74, "paymentForm.securityCodeTitle"));
    ɵɵadvance(3);
    ɵɵattribute("aria-invalid", ((tmp_36_0 = ctx_r1.paymentForm.get("cvn")) == null ? null : tmp_36_0.touched) && ((tmp_36_0 = ctx_r1.paymentForm.get("cvn")) == null ? null : tmp_36_0.invalid))("aria-errormessage", "cvnError");
    ɵɵadvance();
    ɵɵproperty("translationParams", ɵɵpureFunction1(98, _c2, ɵɵpipeBind1(57, 76, "paymentForm.securityCode")))("control", ctx_r1.paymentForm.get("cvn"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.setAsDefaultField);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ctx_r1.paymentMethodsCount === 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.paymentMethodsCount > 0);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(67, 78, "common.continue"), " ");
  }
}
function CheckoutPaymentFormComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-spinner");
  }
}
function CheckoutPaymentMethodComponent_section_0_ng_template_2_Template(rf, ctx) {
}
function CheckoutPaymentMethodComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "section");
    ɵɵpipe(1, "cxTranslate");
    ɵɵtemplate(2, CheckoutPaymentMethodComponent_section_0_ng_template_2_Template, 0, 0, "ng-template", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const content_r1 = ɵɵreference(2);
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 2, "paymentForm.payment"));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", content_r1);
  }
}
function CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const cards_r2 = ɵɵnextContext().ngIf;
    const hasExistingPaymentMethods_r3 = ɵɵreference(4);
    const newPaymentForm_r4 = ɵɵreference(6);
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", (cards_r2 == null ? null : cards_r2.length) && !ctx_r4.newPaymentFormManuallyOpened)("ngIfThen", hasExistingPaymentMethods_r3)("ngIfElse", newPaymentForm_r4);
  }
}
function CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_ng_template_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18)(1, "div", 19);
    ɵɵlistener("click", function CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_ng_template_3_div_8_Template_div_click_1_listener() {
      const card_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r4 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r4.selectPaymentMethod(card_r8.paymentMethod));
    });
    ɵɵelementStart(2, "cx-card", 20);
    ɵɵlistener("sendCard", function CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_ng_template_3_div_8_Template_cx_card_sendCard_2_listener() {
      const card_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r4 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r4.selectPaymentMethod(card_r8.paymentMethod));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const card_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    ɵɵadvance(2);
    ɵɵproperty("border", true)("fitToContainer", true)("content", card_r8.content)("index", i_r9);
  }
}
function CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p", 9);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 10)(4, "button", 11);
    ɵɵlistener("click", function CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_ng_template_3_Template_button_click_4_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r4 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r4.showNewPaymentForm());
    });
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(7, "div", 12);
    ɵɵtemplate(8, CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_ng_template_3_div_8_Template, 3, 4, "div", 13);
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 14)(10, "button", 11);
    ɵɵlistener("click", function CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_ng_template_3_Template_button_click_10_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r4 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r4.showNewPaymentForm());
    });
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(13, "div", 15)(14, "div", 16)(15, "button", 11);
    ɵɵlistener("click", function CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_ng_template_3_Template_button_click_15_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r4 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r4.back());
    });
    ɵɵtext(16);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(18, "div", 16)(19, "button", 17);
    ɵɵpipe(20, "async");
    ɵɵlistener("click", function CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_ng_template_3_Template_button_click_19_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r4 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r4.next());
    });
    ɵɵtext(21);
    ɵɵpipe(22, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const cards_r2 = ɵɵnextContext().ngIf;
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 7, "paymentForm.choosePaymentMethod"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 9, "paymentForm.addNewPayment"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", cards_r2);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 11, "paymentForm.addNewPayment"), " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(17, 13, ctx_r4.backBtnText), " ");
    ɵɵadvance(3);
    ɵɵproperty("disabled", !((tmp_13_0 = ɵɵpipeBind1(20, 15, ctx_r4.selectedMethod$)) == null ? null : tmp_13_0.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(22, 17, "common.continue"), " ");
  }
}
function CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-payment-form", 21);
    ɵɵpipe(1, "async");
    ɵɵlistener("setPaymentDetails", function CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_ng_template_5_Template_cx_payment_form_setPaymentDetails_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r4 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r4.setPaymentDetails($event));
    })("closeForm", function CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_ng_template_5_Template_cx_payment_form_closeForm_0_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r4 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r4.hideNewPaymentForm());
    })("goBack", function CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_ng_template_5_Template_cx_payment_form_goBack_0_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r4 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r4.back());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cards_r2 = ɵɵnextContext().ngIf;
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("paymentMethodsCount", (cards_r2 == null ? null : cards_r2.length) || 0)("setAsDefaultField", !ctx_r4.isGuestCheckout && !!(cards_r2 == null ? null : cards_r2.length))("loading", ɵɵpipeBind1(1, 4, ctx_r4.isUpdating$))("paymentDetails", ctx_r4.paymentDetails);
  }
}
function CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_ng_container_1_Template, 2, 3, "ng-container", 4);
    ɵɵpipe(2, "async");
    ɵɵtemplate(3, CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_ng_template_3_Template, 23, 19, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_ng_template_5_Template, 2, 6, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    const loading_r11 = ɵɵreference(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ɵɵpipeBind1(2, 2, ctx_r4.isUpdating$))("ngIfElse", loading_r11);
  }
}
function CheckoutPaymentMethodComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h2", 6);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(3, CheckoutPaymentMethodComponent_ng_template_1_ng_container_3_Template, 7, 4, "ng-container", 7);
    ɵɵpipe(4, "async");
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "paymentForm.payment"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(4, 4, ctx_r4.cards$));
  }
}
function CheckoutPaymentMethodComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 22);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
var _c6 = (a0) => [a0];
var _c7 = (a0) => ({
  cxRoute: "termsAndConditions",
  params: a0
});
function CheckoutProgressMobileBottomComponent_div_0_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4)(1, "div");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const step_r2 = ctx_r0.$implicit;
    const i_r3 = ctx_r0.index;
    ɵɵadvance(2);
    ɵɵtextInterpolate2("", i_r3 + 1, ". ", ɵɵpipeBind1(3, 2, step_r2.name), "");
  }
}
function CheckoutProgressMobileBottomComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, CheckoutProgressMobileBottomComponent_div_0_div_2_div_1_Template, 4, 4, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", i_r3 > ctx_r3.activeStepIndex);
  }
}
function CheckoutProgressMobileBottomComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 1);
    ɵɵtemplate(2, CheckoutProgressMobileBottomComponent_div_0_div_2_Template, 2, 1, "div", 2);
    ɵɵpipe(3, "async");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(3, 1, ctx_r3.steps$));
  }
}
var _c8 = (a0) => ({
  count: a0
});
var _c9 = (a0) => ({
  cxRoute: a0
});
function CheckoutProgressMobileTopComponent_div_0_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cart_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind2(2, 2, "cartItems.cartTotal", ɵɵpureFunction1(5, _c8, cart_r1.totalItems)), ": ", cart_r1.subTotal.formattedValue, " ");
  }
}
function CheckoutProgressMobileTopComponent_div_0_div_1_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7)(1, "div", 8);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 9);
    ɵɵpipe(5, "cxUrl");
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const step_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    ɵɵadvance(2);
    ɵɵtextInterpolate2("", i_r4 + 1, ". ", ɵɵpipeBind1(3, 4, step_r3.name), "");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(5, 6, ɵɵpureFunction1(10, _c9, step_r3.routeName)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 8, "common.edit"), " ");
  }
}
function CheckoutProgressMobileTopComponent_div_0_div_1_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10)(1, "div", 8);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const step_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    ɵɵadvance(2);
    ɵɵtextInterpolate2("", i_r4 + 1, ". ", ɵɵpipeBind1(3, 2, step_r3.name), "");
  }
}
function CheckoutProgressMobileTopComponent_div_0_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, CheckoutProgressMobileTopComponent_div_0_div_1_div_3_div_1_Template, 8, 12, "div", 5)(2, CheckoutProgressMobileTopComponent_div_0_div_1_div_3_div_2_Template, 4, 4, "div", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", i_r4 < ctx_r4.activeStepIndex);
    ɵɵadvance();
    ɵɵproperty("ngIf", i_r4 === ctx_r4.activeStepIndex);
  }
}
function CheckoutProgressMobileTopComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 1);
    ɵɵtemplate(2, CheckoutProgressMobileTopComponent_div_0_div_1_div_2_Template, 3, 7, "div", 2)(3, CheckoutProgressMobileTopComponent_div_0_div_1_div_3_Template, 3, 2, "div", 3);
    ɵɵpipe(4, "async");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const cart_r1 = ctx.ngIf;
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", (cart_r1 == null ? null : cart_r1.totalItems) && (cart_r1 == null ? null : cart_r1.subTotal));
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind1(4, 2, ctx_r4.steps$));
  }
}
function CheckoutProgressMobileTopComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, CheckoutProgressMobileTopComponent_div_0_div_1_Template, 5, 4, "div", 0);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r4.cart$));
  }
}
var _c10 = (a0, a1) => ({
  cxRoute: a0,
  params: a1
});
var _c11 = (a0) => ({
  step: a0
});
function CheckoutProgressComponent_nav_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 4);
    ɵɵelement(2, "a", 5);
    ɵɵpipe(3, "async");
    ɵɵpipe(4, "cxUrl");
    ɵɵpipe(5, "cxTranslate");
    ɵɵpipe(6, "cxMultiLine");
    ɵɵpipe(7, "cxTranslate");
    ɵɵpipe(8, "cxTranslate");
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵclassProp("active", ctx_r2.isActive(i_r2))("disabled", ctx_r2.isDisabled(i_r2));
    ɵɵadvance();
    ɵɵclassProp("active", ctx_r2.isActive(i_r2))("disabled", ctx_r2.isDisabled(i_r2));
    ɵɵproperty("routerLink", ɵɵpipeBind1(4, 16, ɵɵpureFunction2(31, _c10, step_r1.routeName, ɵɵpureFunction1(29, _c6, ɵɵpipeBind1(3, 14, ctx_r2.params$)))))("tabindex", ctx_r2.getTabIndex(i_r2))("innerHTML", step_r1.nameMultiLine !== false ? ɵɵpipeBind1(6, 20, ɵɵpipeBind1(5, 18, step_r1.name)) : ɵɵpipeBind1(7, 22, step_r1.name), ɵɵsanitizeHtml);
    ɵɵattribute("aria-current", ctx_r2.isActive(i_r2) ? "step" : null)("aria-disabled", ctx_r2.isDisabled(i_r2) ? "true" : null)("aria-label", ɵɵpipeBind2(9, 26, "checkoutProgress.state." + ctx_r2.getStepState(i_r2), ɵɵpureFunction1(34, _c11, ɵɵpipeBind1(8, 24, step_r1.name))));
  }
}
function CheckoutProgressComponent_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nav");
    ɵɵpipe(1, "cxTranslate");
    ɵɵelementStart(2, "div", 1)(3, "ul", 2);
    ɵɵtemplate(4, CheckoutProgressComponent_nav_0_ng_container_4_Template, 10, 36, "ng-container", 3);
    ɵɵpipe(5, "async");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 2, "checkoutProgress.label"));
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(5, 4, ctx_r2.steps$));
  }
}
var _c12 = (a0) => ({
  item: a0,
  readonly: true
});
var _c13 = () => [];
var _c14 = (a0, a1) => ({
  items: a0,
  readonly: true,
  promotionLocation: a1
});
function CheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(3);
    const paymentMethod_r1 = ɵɵreference(12);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", paymentMethod_r1);
  }
}
function CheckoutReviewSubmitComponent_ng_container_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0)(1, 10);
    ɵɵtemplate(2, CheckoutReviewSubmitComponent_ng_container_5_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 11);
    ɵɵelementContainerEnd()();
  }
  if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngSwitch", step_r2.type[0]);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r2.checkoutStepTypePaymentDetails);
  }
}
function CheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(3);
    const deliveryAddress_r4 = ɵɵreference(8);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", deliveryAddress_r4);
  }
}
function CheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(3);
    const deliveryMode_r5 = ɵɵreference(10);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", deliveryMode_r5);
  }
}
function CheckoutReviewSubmitComponent_ng_container_5_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0)(1, 10);
    ɵɵtemplate(2, CheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_2_Template, 2, 1, "ng-container", 11)(3, CheckoutReviewSubmitComponent_ng_container_5_ng_container_4_ng_container_3_Template, 2, 1, "ng-container", 11);
    ɵɵelementContainerEnd()();
  }
  if (rf & 2) {
    const step_r6 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngSwitch", step_r6.type[0]);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r2.checkoutStepTypeDeliveryAddress);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r2.checkoutStepTypeDeliveryMode);
  }
}
function CheckoutReviewSubmitComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 7);
    ɵɵtemplate(2, CheckoutReviewSubmitComponent_ng_container_5_ng_container_2_Template, 3, 2, "ng-container", 8);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 9);
    ɵɵtemplate(4, CheckoutReviewSubmitComponent_ng_container_5_ng_container_4_Template, 4, 3, "ng-container", 8);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const steps_r7 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.paymentSteps(steps_r7));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.deliverySteps(steps_r7));
  }
}
function CheckoutReviewSubmitComponent_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵelement(1, "cx-card", 15);
    ɵɵpipe(2, "async");
    ɵɵelementStart(3, "div", 16)(4, "a", 17);
    ɵɵpipe(5, "cxUrl");
    ɵɵpipe(6, "cxTranslate");
    ɵɵelement(7, "cx-icon", 18);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const deliveryAddress_r8 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(2, 4, ctx_r2.getDeliveryAddressCard(deliveryAddress_r8)));
    ɵɵadvance(3);
    ɵɵproperty("routerLink", ɵɵpipeBind1(5, 6, ɵɵpureFunction1(10, _c9, ctx_r2.getCheckoutStepUrl(ctx_r2.checkoutStepTypeDeliveryAddress))));
    ɵɵattribute("title", ɵɵpipeBind1(6, 8, "checkoutReview.editDeliveryAddressDetails"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r2.iconTypes.PENCIL);
  }
}
function CheckoutReviewSubmitComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CheckoutReviewSubmitComponent_ng_template_7_div_0_Template, 8, 12, "div", 13);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r2.deliveryAddress$));
  }
}
function CheckoutReviewSubmitComponent_ng_template_9_cx_card_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-card", 15);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const deliveryMode_r9 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("content", ɵɵpipeBind1(1, 1, ctx_r2.getDeliveryModeCard(deliveryMode_r9)));
  }
}
function CheckoutReviewSubmitComponent_ng_template_9_ng_template_4_Template(rf, ctx) {
}
function CheckoutReviewSubmitComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19)(1, "div");
    ɵɵtemplate(2, CheckoutReviewSubmitComponent_ng_template_9_cx_card_2_Template, 2, 3, "cx-card", 20);
    ɵɵpipe(3, "async");
    ɵɵtemplate(4, CheckoutReviewSubmitComponent_ng_template_9_ng_template_4_Template, 0, 0, "ng-template", 21);
    ɵɵpipe(5, "async");
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 16)(7, "a", 17);
    ɵɵpipe(8, "cxUrl");
    ɵɵpipe(9, "cxTranslate");
    ɵɵelement(10, "cx-icon", 18);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(3, 6, ctx_r2.deliveryMode$));
    ɵɵadvance(2);
    ɵɵproperty("cxOutlet", ctx_r2.cartOutlets.DELIVERY_MODE)("cxOutletContext", ɵɵpureFunction1(14, _c12, ɵɵpipeBind1(5, 8, ctx_r2.cart$)));
    ɵɵadvance(3);
    ɵɵproperty("routerLink", ɵɵpipeBind1(8, 10, ɵɵpureFunction1(16, _c9, ctx_r2.getCheckoutStepUrl(ctx_r2.checkoutStepTypeDeliveryMode))));
    ɵɵattribute("title", ɵɵpipeBind1(9, 12, "checkoutReview.editDeliveryMode"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r2.iconTypes.PENCIL);
  }
}
function CheckoutReviewSubmitComponent_ng_template_11_cx_card_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-card", 15);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const paymentDetails_r10 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("content", ɵɵpipeBind1(1, 1, ctx_r2.getPaymentMethodCard(paymentDetails_r10)));
  }
}
function CheckoutReviewSubmitComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 22)(1, "div");
    ɵɵtemplate(2, CheckoutReviewSubmitComponent_ng_template_11_cx_card_2_Template, 2, 3, "cx-card", 20);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 16)(5, "a", 17);
    ɵɵpipe(6, "cxUrl");
    ɵɵpipe(7, "cxTranslate");
    ɵɵelement(8, "cx-icon", 18);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(3, 4, ctx_r2.paymentDetails$));
    ɵɵadvance(3);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 6, ɵɵpureFunction1(10, _c9, ctx_r2.getCheckoutStepUrl(ctx_r2.checkoutStepTypePaymentDetails))));
    ɵɵattribute("title", ɵɵpipeBind1(7, 8, "checkoutReview.editPaymentDetails"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r2.iconTypes.PENCIL);
  }
}
function CheckoutReviewSubmitComponent_ng_container_13_div_7_ng_template_2_Template(rf, ctx) {
}
function CheckoutReviewSubmitComponent_ng_container_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 26);
    ɵɵelement(1, "cx-promotions", 27);
    ɵɵtemplate(2, CheckoutReviewSubmitComponent_ng_container_13_div_7_ng_template_2_Template, 0, 0, "ng-template", 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entries_r11 = ctx.ngIf;
    const cart_r12 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("promotions", (cart_r12.appliedOrderPromotions || ɵɵpureFunction0(3, _c13)).concat(cart_r12.potentialOrderPromotions || ɵɵpureFunction0(4, _c13)));
    ɵɵadvance();
    ɵɵproperty("cxOutlet", ctx_r2.cartOutlets.CART_ITEM_LIST)("cxOutletContext", ɵɵpureFunction2(5, _c14, entries_r11, ctx_r2.promotionLocation));
  }
}
function CheckoutReviewSubmitComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 23);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 24);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(7, CheckoutReviewSubmitComponent_ng_container_13_div_7_Template, 3, 8, "div", 25);
    ɵɵpipe(8, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const cart_r12 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind2(3, 4, "cartItems.cartTotal", ɵɵpureFunction1(11, _c8, cart_r12.deliveryItemsQuantity)), ": ", cart_r12.totalPrice == null ? null : cart_r12.totalPrice.formattedValue, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 7, "checkoutReview.placeOrder"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(8, 9, ctx_r2.entries$));
  }
}
function CheckoutReviewOverviewComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(4, "cx-promotions", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const cart_r1 = ctx.ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind2(3, 3, "cartItems.cartTotal", ɵɵpureFunction1(6, _c8, cart_r1.totalUnitCount)), ": ", cart_r1.totalPrice == null ? null : cart_r1.totalPrice.formattedValue, " ");
    ɵɵadvance(2);
    ɵɵproperty("promotions", (cart_r1.appliedOrderPromotions || ɵɵpureFunction0(8, _c13)).concat(cart_r1.potentialOrderPromotions || ɵɵpureFunction0(9, _c13)));
  }
}
function CheckoutReviewPaymentComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div");
    ɵɵelement(3, "cx-card", 3);
    ɵɵpipe(4, "async");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 4)(6, "a", 5);
    ɵɵpipe(7, "cxUrl");
    ɵɵpipe(8, "cxTranslate");
    ɵɵelement(9, "cx-icon", 6);
    ɵɵelementEnd()()();
    ɵɵelementStart(10, "div", 2)(11, "div");
    ɵɵelement(12, "cx-card", 3);
    ɵɵpipe(13, "async");
    ɵɵelementEnd();
    ɵɵelementStart(14, "div", 4)(15, "a", 5);
    ɵɵpipe(16, "cxUrl");
    ɵɵpipe(17, "cxTranslate");
    ɵɵelement(18, "cx-icon", 6);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const paymentDetails_r1 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("content", ɵɵpipeBind1(4, 8, ctx_r1.getBillingAddressCard(paymentDetails_r1)));
    ɵɵadvance(3);
    ɵɵproperty("routerLink", ɵɵpipeBind1(7, 10, ɵɵpureFunction1(20, _c9, ctx_r1.paymentDetailsStepRoute)));
    ɵɵattribute("title", ɵɵpipeBind1(8, 12, "checkoutReview.editBillingDetails"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r1.iconTypes.PENCIL);
    ɵɵadvance(3);
    ɵɵproperty("content", ɵɵpipeBind1(13, 14, ctx_r1.getPaymentMethodCard(paymentDetails_r1)));
    ɵɵadvance(3);
    ɵɵproperty("routerLink", ɵɵpipeBind1(16, 16, ɵɵpureFunction1(22, _c9, ctx_r1.paymentDetailsStepRoute)));
    ɵɵattribute("title", ɵɵpipeBind1(17, 18, "checkoutReview.editPaymentDetails"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r1.iconTypes.PENCIL);
  }
}
function CheckoutReviewShippingComponent_ng_container_0_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelement(1, "cx-card", 12);
    ɵɵpipe(2, "async");
    ɵɵelementStart(3, "div", 7)(4, "a", 8);
    ɵɵpipe(5, "cxUrl");
    ɵɵpipe(6, "cxTranslate");
    ɵɵelement(7, "cx-icon", 9);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const deliveryAddress_r1 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(2, 4, ctx_r1.getDeliveryAddressCard(deliveryAddress_r1)));
    ɵɵadvance(3);
    ɵɵproperty("routerLink", ɵɵpipeBind1(5, 6, ɵɵpureFunction1(10, _c9, ctx_r1.deliveryAddressStepRoute)));
    ɵɵattribute("title", ɵɵpipeBind1(6, 8, "checkoutReview.editDeliveryAddressDetails"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r1.iconTypes.PENCIL);
  }
}
function CheckoutReviewShippingComponent_ng_container_0_ng_container_1_cx_card_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-card", 12);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const deliveryMode_r3 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("content", ɵɵpipeBind1(1, 1, ctx_r1.getDeliveryModeCard(deliveryMode_r3)));
  }
}
function CheckoutReviewShippingComponent_ng_container_0_ng_container_1_ng_template_18_Template(rf, ctx) {
}
function CheckoutReviewShippingComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "h2", 1);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 2)(5, "div", 3);
    ɵɵtemplate(6, CheckoutReviewShippingComponent_ng_container_0_ng_container_1_div_6_Template, 8, 12, "div", 4);
    ɵɵpipe(7, "async");
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 3)(9, "div", 5);
    ɵɵtemplate(10, CheckoutReviewShippingComponent_ng_container_0_ng_container_1_cx_card_10_Template, 2, 3, "cx-card", 6);
    ɵɵpipe(11, "async");
    ɵɵelementStart(12, "div", 7)(13, "a", 8);
    ɵɵpipe(14, "cxUrl");
    ɵɵpipe(15, "cxTranslate");
    ɵɵelement(16, "cx-icon", 9);
    ɵɵelementEnd()()()()();
    ɵɵelementStart(17, "div", 10);
    ɵɵtemplate(18, CheckoutReviewShippingComponent_ng_container_0_ng_container_1_ng_template_18_Template, 0, 0, "ng-template", 11);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entries_r4 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 8, "checkoutMode.deliveryEntries"), " ");
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ɵɵpipeBind1(7, 10, ctx_r1.deliveryAddress$));
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ɵɵpipeBind1(11, 12, ctx_r1.deliveryMode$));
    ɵɵadvance(3);
    ɵɵproperty("routerLink", ɵɵpipeBind1(14, 14, ɵɵpureFunction1(18, _c9, ctx_r1.deliveryModeStepRoute)));
    ɵɵattribute("title", ɵɵpipeBind1(15, 16, "checkoutReview.editDeliveryMode"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r1.iconTypes.PENCIL);
    ɵɵadvance(2);
    ɵɵproperty("cxOutlet", ctx_r1.cartOutlets.CART_ITEM_LIST)("cxOutletContext", ɵɵpureFunction1(20, _c1, entries_r4));
  }
}
function CheckoutReviewShippingComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CheckoutReviewShippingComponent_ng_container_0_ng_container_1_Template, 19, 22, "ng-container", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const entries_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", entries_r4.length > 0);
  }
}
var CartNotEmptyGuard = class _CartNotEmptyGuard {
  constructor(activeCartFacade, semanticPathService, router) {
    this.activeCartFacade = activeCartFacade;
    this.semanticPathService = semanticPathService;
    this.router = router;
  }
  canActivate() {
    return this.activeCartFacade.takeActive().pipe(map((cart) => {
      if (this.isEmpty(cart)) {
        return this.router.parseUrl(this.semanticPathService.get("home") ?? "");
      }
      return true;
    }));
  }
  isEmpty(cart) {
    return cart && !cart.totalItems;
  }
  static {
    this.ɵfac = function CartNotEmptyGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartNotEmptyGuard)(ɵɵinject(ActiveCartFacade), ɵɵinject(SemanticPathService), ɵɵinject(Router));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartNotEmptyGuard,
      factory: _CartNotEmptyGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartNotEmptyGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: SemanticPathService
  }, {
    type: Router
  }], null);
})();
var CheckoutFlowOrchestratorService = class _CheckoutFlowOrchestratorService {
  constructor() {
    this.checkoutConfig = inject(CheckoutConfig);
    this.baseSiteService = inject(BaseSiteService);
    this.paymentProviderName = void 0;
    this.getPaymentProvider().subscribe((paymentProvider) => {
      this.paymentProviderName = paymentProvider;
    });
  }
  getPaymentProvider() {
    return this.baseSiteService.get().pipe(take(1), map((baseSite) => baseSite?.baseStore?.paymentProvider));
  }
  getCheckoutFlow() {
    if (this.paymentProviderName) {
      const flow = this.checkoutConfig.checkout?.flows?.[this.paymentProviderName];
      if (flow) {
        return flow;
      }
    }
    return this.checkoutConfig.checkout;
  }
  static {
    this.ɵfac = function CheckoutFlowOrchestratorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutFlowOrchestratorService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutFlowOrchestratorService,
      factory: _CheckoutFlowOrchestratorService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutFlowOrchestratorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CheckoutConfigService = class _CheckoutConfigService {
  constructor(checkoutConfig) {
    this.checkoutConfig = checkoutConfig;
    this.checkoutFlowOrchestratorService = inject(CheckoutFlowOrchestratorService);
    this.express = this.checkoutConfig.checkout?.express ?? false;
    this.guest = this.checkoutConfig.checkout?.guest ?? false;
    this.defaultDeliveryMode = this.checkoutConfig.checkout?.defaultDeliveryMode || [];
    this.checkoutFlow = this.checkoutFlowOrchestratorService?.getCheckoutFlow();
    if (this.checkoutFlowOrchestratorService) {
      this.express = this.checkoutFlow?.express ?? false;
      this.guest = this.checkoutFlow?.guest ?? false;
      this.defaultDeliveryMode = this.checkoutFlow?.defaultDeliveryMode || [];
    }
  }
  compareDeliveryCost(deliveryMode1, deliveryMode2) {
    if (deliveryMode1.deliveryCost?.value && deliveryMode2.deliveryCost?.value) {
      if (deliveryMode1.deliveryCost.value > deliveryMode2.deliveryCost.value) {
        return 1;
      } else if (deliveryMode1.deliveryCost.value < deliveryMode2.deliveryCost.value) {
        return -1;
      }
    }
    return 0;
  }
  findMatchingDeliveryMode(deliveryModes, index = 0) {
    switch (this.defaultDeliveryMode[index]) {
      case DeliveryModePreferences.FREE:
        if (deliveryModes[0].deliveryCost?.value === 0) {
          return deliveryModes[0].code;
        }
        break;
      case DeliveryModePreferences.LEAST_EXPENSIVE:
        const leastExpensiveFound = deliveryModes.find((deliveryMode) => deliveryMode.deliveryCost?.value !== 0);
        if (leastExpensiveFound) {
          return leastExpensiveFound.code;
        }
        break;
      case DeliveryModePreferences.MOST_EXPENSIVE:
        return deliveryModes[deliveryModes.length - 1].code;
      default:
        const codeFound = deliveryModes.find((deliveryMode) => deliveryMode.code === this.defaultDeliveryMode[index]);
        if (codeFound) {
          return codeFound.code;
        }
    }
    const lastMode = this.defaultDeliveryMode.length - 1 <= index;
    return lastMode ? deliveryModes[0].code : this.findMatchingDeliveryMode(deliveryModes, index + 1);
  }
  shouldUseAddressSavedInCart() {
    if (this.checkoutFlowOrchestratorService) {
      return !!this.checkoutFlow?.guestUseSavedAddress;
    }
    return !!this.checkoutConfig?.checkout?.guestUseSavedAddress;
  }
  getPreferredDeliveryMode(deliveryModes) {
    deliveryModes.sort(this.compareDeliveryCost);
    return this.findMatchingDeliveryMode(deliveryModes);
  }
  isExpressCheckout() {
    return this.express;
  }
  isGuestCheckout() {
    return this.guest;
  }
  static {
    this.ɵfac = function CheckoutConfigService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutConfigService)(ɵɵinject(CheckoutConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutConfigService,
      factory: _CheckoutConfigService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CheckoutConfig
  }], null);
})();
var CheckoutAuthGuard = class _CheckoutAuthGuard {
  constructor(authService, authRedirectService, checkoutConfigService, activeCartFacade, semanticPathService, router) {
    this.authService = authService;
    this.authRedirectService = authRedirectService;
    this.checkoutConfigService = checkoutConfigService;
    this.activeCartFacade = activeCartFacade;
    this.semanticPathService = semanticPathService;
    this.router = router;
    this.featureConfig = inject(FeatureConfigService);
    this.windowRef = inject(WindowRef);
  }
  canActivate() {
    return combineLatest([this.authService.isUserLoggedIn(), this.activeCartFacade.isGuestCart(), this.activeCartFacade.isStable()]).pipe(map(([isLoggedIn, isGuestCart, isStable]) => ({
      isLoggedIn,
      isGuestCart,
      isStable
    })), filter((data) => data.isStable), map((data) => {
      if (!data.isLoggedIn) {
        return data.isGuestCart ? true : this.handleAnonymousUser();
      }
      return data.isLoggedIn;
    }));
  }
  handleAnonymousUser() {
    this.authRedirectService.saveCurrentNavigationUrl();
    if (this.featureConfig.isEnabled("authorizationCodeFlowByDefault")) {
      if (this.checkoutConfigService.isGuestCheckout()) {
        this.windowRef.localStorage?.setItem(IS_GUEST_USER_CHECKOUT_KEY, "true");
      }
      return this.router.parseUrl(this.semanticPathService.get("login") ?? "");
    } else {
      if (this.checkoutConfigService.isGuestCheckout()) {
        return this.router.createUrlTree([this.semanticPathService.get("login")], {
          queryParams: {
            forced: true
          }
        });
      } else {
        return this.router.parseUrl(this.semanticPathService.get("login") ?? "");
      }
    }
  }
  static {
    this.ɵfac = function CheckoutAuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutAuthGuard)(ɵɵinject(AuthService), ɵɵinject(AuthRedirectService), ɵɵinject(CheckoutConfigService), ɵɵinject(ActiveCartFacade), ɵɵinject(SemanticPathService), ɵɵinject(Router));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutAuthGuard,
      factory: _CheckoutAuthGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutAuthGuard, [{
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
  }], null);
})();
var CheckoutStepService = class _CheckoutStepService {
  constructor(routingService, checkoutConfig, routingConfigService) {
    this.routingService = routingService;
    this.checkoutConfig = checkoutConfig;
    this.routingConfigService = routingConfigService;
    this.checkoutFlowOrchestratorService = inject(CheckoutFlowOrchestratorService);
    this.steps$ = new BehaviorSubject([]);
    this.activeStepIndex$ = this.routingService.getRouterState().pipe(switchMap((router) => {
      const activeStepUrl = router.state.context.id;
      return this.steps$.pipe(map((steps) => {
        let activeIndex = 0;
        steps.forEach((step, index) => {
          const routeUrl = `/${this.routingConfigService.getRouteConfig(step?.routeName)?.paths?.[0]}`;
          if (routeUrl === activeStepUrl) {
            activeIndex = index;
          }
        });
        return activeIndex;
      }));
    }));
    this.resetSteps();
  }
  back(activatedRoute) {
    const previousUrl = this.getPreviousCheckoutStepUrl(activatedRoute);
    this.routingService.go(previousUrl === null ? "cart" : previousUrl);
  }
  next(activatedRoute) {
    const nextUrl = this.getNextCheckoutStepUrl(activatedRoute);
    this.routingService.go(nextUrl);
  }
  goToStepWithIndex(stepIndex) {
    this.routingService.go(this.getStepUrlFromStepRoute(this.allSteps[stepIndex].routeName));
  }
  getBackBntText(activatedRoute) {
    if (this.getPreviousCheckoutStepUrl(activatedRoute) === null) {
      return "checkout.backToCart";
    }
    return "common.back";
  }
  resetSteps() {
    let steps = this.checkoutConfig.checkout?.steps ?? [];
    if (this.checkoutFlowOrchestratorService) {
      steps = this.checkoutFlowOrchestratorService.getCheckoutFlow()?.steps ?? [];
    }
    this.allSteps = steps.filter((step) => !step.disabled).map((checkoutStep) => Object.assign({}, checkoutStep));
    this.steps$.next(this.allSteps);
  }
  disableEnableStep(currentStepType, disabled) {
    const currentStep = this.allSteps.find((step) => step.type.includes(currentStepType));
    if (currentStep && currentStep.disabled !== disabled) {
      currentStep.disabled = disabled;
      this.steps$.next(this.allSteps.filter((step) => !step.disabled));
    }
  }
  getCheckoutStep(currentStepType) {
    const index = this.getCheckoutStepIndex("type", currentStepType);
    if (index !== null) {
      return this.allSteps[index];
    }
  }
  getCheckoutStepRoute(currentStepType) {
    return this.getCheckoutStep(currentStepType)?.routeName;
  }
  getFirstCheckoutStepRoute() {
    return this.allSteps[0].routeName;
  }
  getNextCheckoutStepUrl(activatedRoute) {
    const stepIndex = this.getCurrentStepIndex(activatedRoute);
    if (stepIndex !== null && stepIndex >= 0) {
      let i = 1;
      while (this.allSteps[stepIndex + i] && this.allSteps[stepIndex + i].disabled) {
        i++;
      }
      const nextStep = this.allSteps[stepIndex + i];
      if (nextStep) {
        return this.getStepUrlFromStepRoute(nextStep.routeName);
      }
    }
    return null;
  }
  getPreviousCheckoutStepUrl(activatedRoute) {
    const stepIndex = this.getCurrentStepIndex(activatedRoute);
    if (stepIndex !== null && stepIndex >= 0) {
      let i = 1;
      while (this.allSteps[stepIndex - i] && this.allSteps[stepIndex - i].disabled) {
        i++;
      }
      const previousStep = this.allSteps[stepIndex - i];
      if (previousStep) {
        return this.getStepUrlFromStepRoute(previousStep.routeName);
      }
    }
    return null;
  }
  getCurrentStepIndex(activatedRoute) {
    const currentStepUrl = this.getStepUrlFromActivatedRoute(activatedRoute);
    const stepIndex = this.allSteps.findIndex((step) => currentStepUrl === `/${this.getStepUrlFromStepRoute(step.routeName)}`);
    return stepIndex === -1 ? null : stepIndex;
  }
  getStepUrlFromActivatedRoute(activatedRoute) {
    return activatedRoute && activatedRoute.snapshot && activatedRoute.snapshot.url ? `/${activatedRoute.snapshot.url.join("/")}` : null;
  }
  getStepUrlFromStepRoute(stepRoute) {
    return this.routingConfigService.getRouteConfig(stepRoute)?.paths?.[0] ?? null;
  }
  getCheckoutStepIndex(key, value) {
    return key && value ? this.allSteps.findIndex((step) => {
      const propertyVal = step[key];
      return propertyVal instanceof Array ? propertyVal.includes(value) : propertyVal === value;
    }) : null;
  }
  static {
    this.ɵfac = function CheckoutStepService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutStepService)(ɵɵinject(RoutingService), ɵɵinject(CheckoutConfig), ɵɵinject(RoutingConfigService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutStepService,
      factory: _CheckoutStepService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutStepService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: CheckoutConfig
  }, {
    type: RoutingConfigService
  }], null);
})();
var ExpressCheckoutService = class _ExpressCheckoutService {
  constructor(userAddressService, userPaymentService, checkoutDeliveryAddressFacade, checkoutPaymentFacade, checkoutConfigService, checkoutDeliveryModesFacade) {
    this.userAddressService = userAddressService;
    this.userPaymentService = userPaymentService;
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.checkoutPaymentFacade = checkoutPaymentFacade;
    this.checkoutConfigService = checkoutConfigService;
    this.checkoutDeliveryModesFacade = checkoutDeliveryModesFacade;
    this.setDeliveryAddress();
    this.setDeliveryMode();
    this.setPaymentMethod();
  }
  setDeliveryAddress() {
    this.deliveryAddressSet$ = combineLatest([this.userAddressService.getAddresses(), this.userAddressService.getAddressesLoadedSuccess()]).pipe(debounceTime(0), tap(([, addressesLoadedSuccess]) => {
      if (!addressesLoadedSuccess) {
        this.userAddressService.loadAddresses();
      }
    }), filter(([, addressesLoadedSuccess]) => addressesLoadedSuccess), take(1), switchMap(([addresses]) => {
      const defaultAddress = addresses.find((address) => address.defaultAddress) || addresses[0];
      if (defaultAddress && Object.keys(defaultAddress).length) {
        return this.checkoutDeliveryAddressFacade.setDeliveryAddress(defaultAddress).pipe(switchMap(() => this.checkoutDeliveryAddressFacade.getDeliveryAddressState()), filter((state) => !state.error && !state.loading), map((state) => state.data), map((data) => !!(data && Object.keys(data).length)), catchError(() => of(false)));
      }
      return of(false);
    }), distinctUntilChanged());
  }
  setDeliveryMode() {
    this.deliveryModeSet$ = combineLatest([this.deliveryAddressSet$, this.checkoutDeliveryModesFacade.getSupportedDeliveryModesState()]).pipe(debounceTime(0), switchMap(([addressSet, supportedDeliveryModesState]) => {
      if (!addressSet) {
        return of(false);
      }
      return of([supportedDeliveryModesState]).pipe(filter(([supportedDeliveryModesStateObject]) => !supportedDeliveryModesStateObject.loading && !!supportedDeliveryModesStateObject.data?.length), switchMap(([deliveryModesState]) => {
        if (!deliveryModesState.data) {
          return of(false);
        }
        const preferredDeliveryMode = this.checkoutConfigService.getPreferredDeliveryMode(deliveryModesState.data);
        return of([preferredDeliveryMode]).pipe(switchMap(([deliveryMode]) => {
          if (!deliveryMode) {
            return of(false);
          }
          return this.checkoutDeliveryModesFacade.setDeliveryMode(deliveryMode).pipe(switchMap(() => this.checkoutDeliveryModesFacade.getSelectedDeliveryModeState()), filter((state) => !state.error && !state.loading), map((state) => state.data), map((data) => !!(data && Object.keys(data).length)), catchError(() => of(false)));
        }));
      }));
    }), distinctUntilChanged());
  }
  setPaymentMethod() {
    this.paymentMethodSet$ = combineLatest([this.deliveryModeSet$, this.userPaymentService.getPaymentMethods(), this.userPaymentService.getPaymentMethodsLoadedSuccess()]).pipe(debounceTime(0), tap(([, , paymentMethodsLoadedSuccess]) => {
      if (!paymentMethodsLoadedSuccess) {
        this.userPaymentService.loadPaymentMethods();
      }
    }), filter(([, , success]) => success), switchMap(([deliveryModeSet, payments]) => {
      if (!deliveryModeSet) {
        return of(false);
      }
      const defaultPayment = payments.find((address) => address.defaultPayment) || payments[0];
      if (!defaultPayment || Object.keys(defaultPayment).length === 0) {
        return of(false);
      }
      return this.checkoutPaymentFacade.setPaymentDetails(defaultPayment).pipe(switchMap(() => this.checkoutPaymentFacade.getPaymentDetailsState()), filter((state) => !state.error && !state.loading), map((state) => state.data), map((data) => !!(data && Object.keys(data).length)), catchError(() => of(false)));
    }), distinctUntilChanged());
  }
  trySetDefaultCheckoutDetails() {
    return this.paymentMethodSet$.pipe(map((paymentMethodSet) => !!paymentMethodSet));
  }
  static {
    this.ɵfac = function ExpressCheckoutService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExpressCheckoutService)(ɵɵinject(UserAddressService), ɵɵinject(UserPaymentService), ɵɵinject(CheckoutDeliveryAddressFacade), ɵɵinject(CheckoutPaymentFacade), ɵɵinject(CheckoutConfigService), ɵɵinject(CheckoutDeliveryModesFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ExpressCheckoutService,
      factory: _ExpressCheckoutService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpressCheckoutService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UserAddressService
  }, {
    type: UserPaymentService
  }, {
    type: CheckoutDeliveryAddressFacade
  }, {
    type: CheckoutPaymentFacade
  }, {
    type: CheckoutConfigService
  }, {
    type: CheckoutDeliveryModesFacade
  }], null);
})();
var CheckoutDeliveryAddressComponent = class _CheckoutDeliveryAddressComponent {
  get isGuestCheckout() {
    return !!getLastValueSync(this.activeCartFacade.isGuestCart());
  }
  get backBtnText() {
    return this.checkoutStepService.getBackBntText(this.activatedRoute);
  }
  get selectedAddress$() {
    return this.checkoutDeliveryAddressFacade.getDeliveryAddressState().pipe(filter((state) => !state.loading), map((state) => state.data), distinctUntilChanged((prev, curr) => prev?.id === curr?.id));
  }
  constructor(userAddressService, checkoutDeliveryAddressFacade, activatedRoute, translationService, activeCartFacade, checkoutStepService, checkoutDeliveryModesFacade, globalMessageService) {
    this.userAddressService = userAddressService;
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.activatedRoute = activatedRoute;
    this.translationService = translationService;
    this.activeCartFacade = activeCartFacade;
    this.checkoutStepService = checkoutStepService;
    this.checkoutDeliveryModesFacade = checkoutDeliveryModesFacade;
    this.globalMessageService = globalMessageService;
    this.checkoutConfigService = inject(CheckoutConfigService);
    this.featureConfigService = inject(FeatureConfigService, {
      optional: true
    });
    this.busy$ = new BehaviorSubject(false);
    this.addressFormOpened = false;
    this.doneAutoSelect = false;
    this.focusService = inject(SelectFocusUtility);
    this.windowRef = inject(WindowRef);
  }
  ngOnInit() {
    this.loadAddresses();
    this.cards$ = this.createCards();
    this.isUpdating$ = this.createIsUpdating();
  }
  getCardContent(address, selected, textDefaultDeliveryAddress, textShipToThisAddress, textSelected, textPhone, textMobile) {
    let region = "";
    if (address.region && address.region.isocode) {
      region = address.region.isocode + ", ";
    }
    const numbers = getAddressNumbers(address, textPhone, textMobile);
    const isSelected = selected && selected.id === address.id;
    const role = this.getCardRole(isSelected);
    return {
      role,
      title: address.defaultAddress ? textDefaultDeliveryAddress : "",
      textBold: address.firstName + " " + address.lastName,
      text: [address.line1, address.line2, address.town + ", " + region + address.country?.isocode, address.postalCode, numbers],
      actions: isSelected ? [] : [{
        name: textShipToThisAddress,
        event: "send"
      }],
      header: isSelected ? textSelected : "",
      label: address.defaultAddress ? "addressBook.defaultDeliveryAddress" : "addressBook.additionalDeliveryAddress"
    };
  }
  selectAddress(address) {
    if (address?.id === getLastValueSync(this.selectedAddress$)?.id) {
      return;
    }
    this.globalMessageService.add({
      key: "checkoutAddress.deliveryAddressSelected"
    }, GlobalMessageType.MSG_TYPE_INFO);
    this.setAddress(address);
    if (this.featureConfigService?.isEnabled("a11yFocusOnCardAfterSelecting")) {
      this.focusCardAfterSelecting();
    }
  }
  /**
   * Restores the focus to the Card component after it has been selected and the checkout has finished updating.
   * The focus is lost due to DOM changes making it otherwise impossible to target elements that have been removed.
   */
  focusCardAfterSelecting() {
    const cardNodes = Array.from(this.windowRef?.document.querySelectorAll("cx-card"));
    const triggeredCard = this.windowRef?.document.activeElement?.closest("cx-card");
    if (triggeredCard) {
      const selectedCardIndex = cardNodes.indexOf(triggeredCard);
      this.isUpdating$.pipe(filter((isUpdating) => !isUpdating), take(1)).subscribe(() => {
        requestAnimationFrame(() => {
          const selectedCard = this.windowRef?.document.querySelectorAll("cx-card")[selectedCardIndex];
          this.focusService.findFirstFocusable(selectedCard)?.focus();
        });
      });
    }
  }
  addAddress(address) {
    if (!address && this.shouldUseAddressSavedInCart() && this.selectedAddress) {
      this.next();
    }
    if (!address) {
      return;
    }
    this.busy$.next(true);
    this.doneAutoSelect = true;
    this.checkoutDeliveryAddressFacade.createAndSetAddress(address).pipe(switchMap(() => this.checkoutDeliveryModesFacade.clearCheckoutDeliveryMode())).subscribe({
      complete: () => {
        this.next();
      },
      error: () => {
        this.onError();
        this.doneAutoSelect = false;
      }
    });
  }
  showNewAddressForm() {
    this.addressFormOpened = true;
  }
  hideNewAddressForm(goPrevious = false) {
    this.addressFormOpened = false;
    if (goPrevious) {
      this.back();
    }
  }
  next() {
    this.checkoutStepService.next(this.activatedRoute);
  }
  back() {
    this.checkoutStepService.back(this.activatedRoute);
  }
  loadAddresses() {
    if (!this.isGuestCheckout) {
      this.userAddressService.loadAddresses();
    }
  }
  createCards() {
    const addresses$ = combineLatest([this.getSupportedAddresses(), this.selectedAddress$]);
    const translations$ = combineLatest([this.translationService.translate("checkoutAddress.defaultDeliveryAddress"), this.translationService.translate("checkoutAddress.shipToThisAddress"), this.featureConfigService?.isEnabled("a11ySelectLabelWithContextForSelectedAddrOrPayment") ? this.translationService.translate("addressCard.selectedAddress") : this.translationService.translate("addressCard.selected"), this.translationService.translate("addressCard.phoneNumber"), this.translationService.translate("addressCard.mobileNumber")]);
    return combineLatest([addresses$, translations$]).pipe(tap(([[addresses, selected]]) => this.selectDefaultAddress(addresses, selected)), map(([[addresses, selected], [textDefault, textShipTo, textSelected, textPhone, textMobile]]) => addresses?.map((address) => ({
      address,
      card: this.getCardContent(address, selected, textDefault, textShipTo, textSelected, textPhone, textMobile)
    }))));
  }
  selectDefaultAddress(addresses, selected) {
    if (!this.doneAutoSelect && addresses?.length && (!selected || Object.keys(selected).length === 0)) {
      selected = addresses.find((address) => address.defaultAddress);
      if (selected) {
        this.setAddress(selected);
      }
      this.doneAutoSelect = true;
    } else if (selected && this.shouldUseAddressSavedInCart()) {
      this.selectedAddress = selected;
    }
  }
  getSupportedAddresses() {
    return this.userAddressService.getAddresses();
  }
  createIsUpdating() {
    return combineLatest([this.busy$, this.userAddressService.getAddressesLoading(), this.getAddressLoading()]).pipe(map(([busy, userAddressLoading, deliveryAddressLoading]) => busy || userAddressLoading || deliveryAddressLoading), distinctUntilChanged());
  }
  getAddressLoading() {
    return this.checkoutDeliveryAddressFacade.getDeliveryAddressState().pipe(map((state) => state.loading), distinctUntilChanged());
  }
  setAddress(address) {
    this.busy$.next(true);
    this.checkoutDeliveryAddressFacade.setDeliveryAddress(address).pipe(switchMap(() => this.checkoutDeliveryModesFacade.clearCheckoutDeliveryMode())).subscribe({
      complete: () => {
        this.onSuccess();
      },
      error: () => {
        this.onError();
      }
    });
  }
  onSuccess() {
    this.busy$.next(false);
  }
  onError() {
    this.busy$.next(false);
  }
  shouldUseAddressSavedInCart() {
    return !!this.checkoutConfigService?.shouldUseAddressSavedInCart();
  }
  getCardRole(isCardSelected) {
    const isButtonRole = this.featureConfigService?.isEnabled("a11ySelectLabelWithContextForSelectedAddrOrPayment") && !isCardSelected;
    return isButtonRole ? "button" : "application";
  }
  static {
    this.ɵfac = function CheckoutDeliveryAddressComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutDeliveryAddressComponent)(ɵɵdirectiveInject(UserAddressService), ɵɵdirectiveInject(CheckoutDeliveryAddressFacade), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(CheckoutStepService), ɵɵdirectiveInject(CheckoutDeliveryModesFacade), ɵɵdirectiveInject(GlobalMessageService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutDeliveryAddressComponent,
      selectors: [["cx-delivery-address"]],
      standalone: false,
      decls: 5,
      vars: 2,
      consts: [["content", ""], ["loading", ""], ["showExistingAddresses", ""], ["newAddressForm", ""], ["initialAddressForm", ""], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], [1, "cx-checkout-title", "d-none", "d-lg-block", "d-xl-block"], [4, "ngIf"], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "cx-checkout-text"], [1, "cx-checkout-btns", "cx-checkout-btns-top"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "cx-checkout-body", "row"], ["class", "cx-delivery-address-card col-md-12 col-lg-6", 4, "ngFor", "ngForOf"], [1, "cx-checkout-btns", "cx-checkout-btns-bottom"], [1, "cx-checkout-btns", "row"], [1, "col-md-12", "col-lg-6"], [1, "cx-btn", "btn", "btn-block", "btn-secondary", 3, "click"], [1, "cx-btn", "btn", "btn-block", "btn-primary", 3, "click", "disabled"], [1, "cx-delivery-address-card", "col-md-12", "col-lg-6"], [1, "cx-delivery-address-card-inner", 3, "click"], [3, "sendCard", "border", "index", "fitToContainer", "content", "role"], [3, "showTitleCode", "backToAddress", "submitAddress", 4, "ngIf", "ngIfElse"], [3, "backToAddress", "submitAddress", "showTitleCode"], [3, "backToAddress", "submitAddress", "showTitleCode", "setAsDefaultField", "addressData", "cancelBtnLabel"], [1, "cx-spinner"]],
      template: function CheckoutDeliveryAddressComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CheckoutDeliveryAddressComponent_section_0_Template, 3, 4, "section", 5)(1, CheckoutDeliveryAddressComponent_ng_template_1_Template, 5, 6, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, CheckoutDeliveryAddressComponent_ng_template_3_Template, 2, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const content_r1 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.featureConfigService == null ? null : ctx.featureConfigService.isEnabled("a11yCheckoutStepsLandmarks"))("ngIfElse", content_r1);
        }
      },
      dependencies: [NgForOf, NgIf, NgTemplateOutlet, AddressFormComponent, CardComponent, SpinnerComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryAddressComponent, [{
    type: Component,
    args: [{
      selector: "cx-delivery-address",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<section
  *ngIf="
    featureConfigService?.isEnabled('a11yCheckoutStepsLandmarks');
    else content
  "
  [attr.aria-label]="'checkoutAddress.shippingAddress' | cxTranslate"
>
  <ng-template [ngTemplateOutlet]="content"></ng-template>
</section>

<ng-template #content>
  <h2 class="cx-checkout-title d-none d-lg-block d-xl-block">
    {{ 'checkoutAddress.shippingAddress' | cxTranslate }}
  </h2>

  <ng-container *ngIf="cards$ | async as cards">
    <ng-container *ngIf="!(isUpdating$ | async); else loading">
      <ng-container
        *ngIf="
          cards?.length && !addressFormOpened;
          then showExistingAddresses;
          else newAddressForm
        "
      >
      </ng-container>

      <ng-template #showExistingAddresses>
        <p class="cx-checkout-text">
          {{ 'checkoutAddress.selectYourDeliveryAddress' | cxTranslate }}
        </p>

        <div class="cx-checkout-btns cx-checkout-btns-top">
          <button
            class="btn btn-block btn-secondary"
            (click)="showNewAddressForm()"
          >
            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}
          </button>
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

        <div class="cx-checkout-btns cx-checkout-btns-bottom">
          <button
            class="btn btn-block btn-secondary"
            (click)="showNewAddressForm()"
          >
            {{ 'checkoutAddress.addNewAddress' | cxTranslate }}
          </button>
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
            [addressData]="selectedAddress"
            cancelBtnLabel="{{ backBtnText | cxTranslate }}"
            (backToAddress)="hideNewAddressForm(true)"
            (submitAddress)="addAddress($event)"
          ></cx-address-form>
        </ng-template>
      </ng-template>
    </ng-container>
  </ng-container>
</ng-template>

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
  }], {
    featureConfigService: [{
      type: Optional
    }],
    focusService: [{
      type: Optional
    }],
    windowRef: [{
      type: Optional
    }]
  });
})();
var CheckoutDeliveryAddressModule = class _CheckoutDeliveryAddressModule {
  static {
    this.ɵfac = function CheckoutDeliveryAddressModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutDeliveryAddressModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutDeliveryAddressModule,
      declarations: [CheckoutDeliveryAddressComponent],
      imports: [CommonModule, RouterModule, AddressFormModule, CardModule, SpinnerModule, I18nModule, FeaturesConfigModule],
      exports: [CheckoutDeliveryAddressComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutDeliveryAddress: {
            component: CheckoutDeliveryAddressComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CartValidationGuard]
          }
        }
      })],
      imports: [CommonModule, RouterModule, AddressFormModule, CardModule, SpinnerModule, I18nModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryAddressModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, AddressFormModule, CardModule, SpinnerModule, I18nModule, FeaturesConfigModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutDeliveryAddress: {
            component: CheckoutDeliveryAddressComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CartValidationGuard]
          }
        }
      })],
      declarations: [CheckoutDeliveryAddressComponent],
      exports: [CheckoutDeliveryAddressComponent]
    }]
  }], null, null);
})();
var CheckoutDeliveryModeComponent = class _CheckoutDeliveryModeComponent {
  get deliveryModeInvalid() {
    return this.mode.controls["deliveryModeId"].invalid;
  }
  constructor(fb, checkoutConfigService, activatedRoute, checkoutStepService, checkoutDeliveryModesFacade, activeCartFacade) {
    this.fb = fb;
    this.checkoutConfigService = checkoutConfigService;
    this.activatedRoute = activatedRoute;
    this.checkoutStepService = checkoutStepService;
    this.checkoutDeliveryModesFacade = checkoutDeliveryModesFacade;
    this.activeCartFacade = activeCartFacade;
    this.globalMessageService = inject(GlobalMessageService);
    this.busy$ = new BehaviorSubject(false);
    this.isSetDeliveryModeHttpErrorSub = new BehaviorSubject(false);
    this.CartOutlets = CartOutlets;
    this.isSetDeliveryModeHttpError$ = this.isSetDeliveryModeHttpErrorSub.asObservable();
    this.selectedDeliveryModeCode$ = this.checkoutDeliveryModesFacade.getSelectedDeliveryModeState().pipe(filter((state) => !state.loading), map((state) => state.data), map((deliveryMode) => deliveryMode?.code));
    this.supportedDeliveryModes$ = this.checkoutDeliveryModesFacade.getSupportedDeliveryModes().pipe(filter((deliveryModes) => !!deliveryModes?.length), withLatestFrom(this.selectedDeliveryModeCode$), tap(([deliveryModes, code]) => {
      if (!code || !deliveryModes.find((deliveryMode) => deliveryMode.code === code)) {
        code = this.checkoutConfigService.getPreferredDeliveryMode(deliveryModes);
      }
      if (code) {
        this.mode.controls["deliveryModeId"].setValue(code);
        this.changeMode(code);
      }
    }), map(([deliveryModes]) => deliveryModes.filter((mode) => mode.code !== "pickup")));
    this.backBtnText = this.checkoutStepService.getBackBntText(this.activatedRoute);
    this.mode = this.fb.group({
      deliveryModeId: ["", Validators.required]
    });
    this.isUpdating$ = combineLatest([this.busy$, this.checkoutDeliveryModesFacade.getSelectedDeliveryModeState().pipe(map((state) => state.loading))]).pipe(map(([busy, loading]) => busy || loading), distinctUntilChanged());
  }
  changeMode(code, event) {
    if (!code) {
      return;
    }
    const lastFocusedId = event?.target?.id;
    this.busy$.next(true);
    this.checkoutDeliveryModesFacade.setDeliveryMode(code).subscribe({
      complete: () => this.onSuccess(),
      error: () => this.onError()
    });
    const isTriggeredByKeyboard = event?.screenX === 0;
    if (isTriggeredByKeyboard) {
      this.restoreFocus(lastFocusedId, code);
      return;
    }
    this.mode.setValue({
      deliveryModeId: code
    });
  }
  next() {
    this.checkoutStepService.next(this.activatedRoute);
  }
  back() {
    this.checkoutStepService.back(this.activatedRoute);
  }
  getAriaChecked(code) {
    return code === this.mode.controls["deliveryModeId"].value;
  }
  onSuccess() {
    this.isSetDeliveryModeHttpErrorSub.next(false);
    this.busy$.next(false);
  }
  onError() {
    this.globalMessageService?.add({
      key: "setDeliveryMode.unknownError"
    }, GlobalMessageType.MSG_TYPE_ERROR);
    this.isSetDeliveryModeHttpErrorSub.next(true);
    this.busy$.next(false);
  }
  /**
   * Restores focus after data is updated.
   */
  restoreFocus(lastFocusedId, code) {
    this.isUpdating$.pipe(filter((isUpdating) => !isUpdating), take(1)).subscribe(() => {
      setTimeout(() => {
        document.querySelector("main")?.classList.remove("mouse-focus");
        this.mode.setValue({
          deliveryModeId: code
        });
        document.getElementById(lastFocusedId)?.focus();
      }, 0);
    });
  }
  static {
    this.ɵfac = function CheckoutDeliveryModeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutDeliveryModeComponent)(ɵɵdirectiveInject(UntypedFormBuilder), ɵɵdirectiveInject(CheckoutConfigService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(CheckoutStepService), ɵɵdirectiveInject(CheckoutDeliveryModesFacade), ɵɵdirectiveInject(ActiveCartFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutDeliveryModeComponent,
      selectors: [["cx-delivery-mode"]],
      standalone: false,
      decls: 24,
      vars: 24,
      consts: [["loading", ""], ["role", "radiogroup"], [1, "cx-checkout-title", "d-none", "d-lg-block", "d-xl-block"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["cxInnerComponentsHost", ""], [1, "row", "cx-checkout-btns"], [1, "col-md-12", "col-lg-6"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "btn", "btn-block", "btn-primary", 3, "click", "disabled"], [1, "cx-delivery-mode-wrapper", 3, "formGroup"], ["class", "form-check", 4, "ngFor", "ngForOf"], [3, "cxOutlet", "cxOutletContext"], [1, "form-check"], ["type", "radio", "formControlName", "deliveryModeId", 1, "form-check-input", 3, "change", "click", "value", "id"], ["aria-hidden", "true", 1, "cx-delivery-label", "form-check-label", "form-radio-label", 3, "for"], [1, "cx-delivery-mode"], [1, "cx-delivery-mode-description"], [1, "cx-delivery-price"], [1, "cx-delivery-details"], [1, "cx-spinner"]],
      template: function CheckoutDeliveryModeComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "section");
          ɵɵpipe(1, "cxTranslate");
          ɵɵelementStart(2, "fieldset", 1)(3, "legend", 2);
          ɵɵtext(4);
          ɵɵpipe(5, "cxTranslate");
          ɵɵelementEnd();
          ɵɵtemplate(6, CheckoutDeliveryModeComponent_ng_container_6_Template, 5, 8, "ng-container", 3);
          ɵɵpipe(7, "async");
          ɵɵpipe(8, "async");
          ɵɵelementEnd();
          ɵɵtemplate(9, CheckoutDeliveryModeComponent_ng_container_9_Template, 6, 9, "ng-container", 4);
          ɵɵpipe(10, "async");
          ɵɵtemplate(11, CheckoutDeliveryModeComponent_ng_template_11_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementContainer(13, 5);
          ɵɵelementStart(14, "div", 6)(15, "div", 7)(16, "button", 8);
          ɵɵlistener("click", function CheckoutDeliveryModeComponent_Template_button_click_16_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.back());
          });
          ɵɵtext(17);
          ɵɵpipe(18, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(19, "div", 7)(20, "button", 9);
          ɵɵpipe(21, "async");
          ɵɵlistener("click", function CheckoutDeliveryModeComponent_Template_button_click_20_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.next());
          });
          ɵɵtext(22);
          ɵɵpipe(23, "cxTranslate");
          ɵɵelementEnd()()()();
        }
        if (rf & 2) {
          const loading_r6 = ɵɵreference(12);
          ɵɵattribute("aria-label", ɵɵpipeBind1(1, 8, "checkoutProgress.deliveryMode"));
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 10, "checkoutMode.deliveryOptions"), " ");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", !ɵɵpipeBind1(7, 12, ctx.isUpdating$) && ɵɵpipeBind1(8, 14, ctx.supportedDeliveryModes$))("ngIfElse", loading_r6);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(10, 16, ctx.activeCartFacade.hasPickupItems()));
          ɵɵadvance(8);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 18, ctx.backBtnText), " ");
          ɵɵadvance(3);
          ɵɵproperty("disabled", ctx.deliveryModeInvalid || ɵɵpipeBind1(21, 20, ctx.isSetDeliveryModeHttpError$));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(23, 22, "common.continue"), " ");
        }
      },
      dependencies: [NgForOf, NgIf, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, SpinnerComponent, OutletDirective, InnerComponentsHostDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryModeComponent, [{
    type: Component,
    args: [{
      selector: "cx-delivery-mode",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<section [attr.aria-label]="'checkoutProgress.deliveryMode' | cxTranslate">
  <fieldset role="radiogroup">
    <legend class="cx-checkout-title d-none d-lg-block d-xl-block">
      {{ 'checkoutMode.deliveryOptions' | cxTranslate }}
    </legend>
    <ng-container
      *ngIf="
        !(isUpdating$ | async) &&
          (supportedDeliveryModes$ | async) as supportedDeliveryModes;
        else loading
      "
    >
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
        [disabled]="
          deliveryModeInvalid || (isSetDeliveryModeHttpError$ | async)
        "
        (click)="next()"
      >
        {{ 'common.continue' | cxTranslate }}
      </button>
    </div>
  </div>
</section>
`
    }]
  }], () => [{
    type: UntypedFormBuilder
  }, {
    type: CheckoutConfigService
  }, {
    type: ActivatedRoute
  }, {
    type: CheckoutStepService
  }, {
    type: CheckoutDeliveryModesFacade
  }, {
    type: ActiveCartFacade
  }], null);
})();
var CheckoutDeliveryModeModule = class _CheckoutDeliveryModeModule {
  static {
    this.ɵfac = function CheckoutDeliveryModeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutDeliveryModeModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutDeliveryModeModule,
      declarations: [CheckoutDeliveryModeComponent],
      imports: [CommonModule, ReactiveFormsModule, I18nModule, SpinnerModule, OutletModule, PageComponentModule, FeaturesConfigModule],
      exports: [CheckoutDeliveryModeComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutDeliveryMode: {
            component: CheckoutDeliveryModeComponent,
            data: {
              composition: {
                inner: ["PickupInStoreDeliveryModeComponent"]
              }
            },
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      imports: [CommonModule, ReactiveFormsModule, I18nModule, SpinnerModule, OutletModule, PageComponentModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryModeModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, I18nModule, SpinnerModule, OutletModule, PageComponentModule, FeaturesConfigModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutDeliveryMode: {
            component: CheckoutDeliveryModeComponent,
            data: {
              composition: {
                inner: ["PickupInStoreDeliveryModeComponent"]
              }
            },
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      declarations: [CheckoutDeliveryModeComponent],
      exports: [CheckoutDeliveryModeComponent]
    }]
  }], null, null);
})();
var NotCheckoutAuthGuard = class _NotCheckoutAuthGuard {
  constructor(authService, activeCartFacade, semanticPathService, router) {
    this.authService = authService;
    this.activeCartFacade = activeCartFacade;
    this.semanticPathService = semanticPathService;
    this.router = router;
  }
  canActivate() {
    return this.authService.isUserLoggedIn().pipe(map((isLoggedIn) => {
      if (isLoggedIn) {
        return this.router.parseUrl(this.semanticPathService.get("home") ?? "");
      } else if (!!getLastValueSync(this.activeCartFacade.isGuestCart())) {
        return this.router.parseUrl(this.semanticPathService.get("cart") ?? "");
      }
      return !isLoggedIn;
    }));
  }
  static {
    this.ɵfac = function NotCheckoutAuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotCheckoutAuthGuard)(ɵɵinject(AuthService), ɵɵinject(ActiveCartFacade), ɵɵinject(SemanticPathService), ɵɵinject(Router));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NotCheckoutAuthGuard,
      factory: _NotCheckoutAuthGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotCheckoutAuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AuthService
  }, {
    type: ActiveCartFacade
  }, {
    type: SemanticPathService
  }, {
    type: Router
  }], null);
})();
var CheckoutLoginComponent = class _CheckoutLoginComponent {
  constructor(formBuilder, authRedirectService, activeCartFacade) {
    this.formBuilder = formBuilder;
    this.authRedirectService = authRedirectService;
    this.activeCartFacade = activeCartFacade;
    this.checkoutLoginForm = this.formBuilder.group({
      email: ["", [Validators.required, CustomFormValidators.emailValidator]],
      emailConfirmation: ["", [Validators.required]]
    }, {
      validators: CustomFormValidators.emailsMustMatch("email", "emailConfirmation")
    });
  }
  onSubmit() {
    if (this.checkoutLoginForm.valid) {
      const email = this.checkoutLoginForm.get("email")?.value;
      this.activeCartFacade.addEmail(email);
      if (!this.sub) {
        this.sub = this.activeCartFacade.isGuestCart().subscribe((isGuest) => {
          if (isGuest) {
            this.authRedirectService.redirect();
          }
        });
      }
    } else {
      this.checkoutLoginForm.markAllAsTouched();
    }
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
  static {
    this.ɵfac = function CheckoutLoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutLoginComponent)(ɵɵdirectiveInject(UntypedFormBuilder), ɵɵdirectiveInject(AuthRedirectService), ɵɵdirectiveInject(ActiveCartFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutLoginComponent,
      selectors: [["cx-checkout-login"]],
      standalone: false,
      decls: 25,
      vars: 32,
      consts: [[3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "label-content"], ["required", "true", "type", "email", "name", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["id", "emailError", 3, "translationParams", "control"], ["required", "true", "type", "email", "name", "emailConfirmation", "formControlName", "emailConfirmation", 1, "form-control", 3, "placeholder"], ["id", "emailConfirmationError", 3, "translationParams", "control"], ["type", "submit", 1, "btn", "btn-block", "btn-primary"]],
      template: function CheckoutLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "form", 0);
          ɵɵlistener("ngSubmit", function CheckoutLoginComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });
          ɵɵelement(1, "cx-form-required-legend");
          ɵɵelementStart(2, "div", 1)(3, "label")(4, "span", 2);
          ɵɵtext(5);
          ɵɵpipe(6, "cxTranslate");
          ɵɵelement(7, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(8, "input", 3);
          ɵɵpipe(9, "cxTranslate");
          ɵɵelement(10, "cx-form-errors", 4);
          ɵɵpipe(11, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(12, "div", 1)(13, "label")(14, "span", 2);
          ɵɵtext(15);
          ɵɵpipe(16, "cxTranslate");
          ɵɵelement(17, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(18, "input", 5);
          ɵɵpipe(19, "cxTranslate");
          ɵɵelement(20, "cx-form-errors", 6);
          ɵɵpipe(21, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(22, "button", 7);
          ɵɵtext(23);
          ɵɵpipe(24, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          let tmp_3_0;
          let tmp_9_0;
          ɵɵproperty("formGroup", ctx.checkoutLoginForm);
          ɵɵadvance(5);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 14, "checkoutLogin.emailAddress.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(9, 16, "checkoutLogin.emailAddress.placeholder"));
          ɵɵattribute("aria-invalid", ((tmp_3_0 = ctx.checkoutLoginForm.get("email")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.checkoutLoginForm.get("email")) == null ? null : tmp_3_0.invalid))("aria-errormessage", "emailError");
          ɵɵadvance(2);
          ɵɵproperty("translationParams", ɵɵpureFunction1(28, _c2, ɵɵpipeBind1(11, 18, "checkoutLogin.emailAddress.label")))("control", ctx.checkoutLoginForm.get("email"));
          ɵɵadvance(5);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(16, 20, "checkoutLogin.confirmEmail.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(19, 22, "checkoutLogin.confirmEmail.placeholder"));
          ɵɵattribute("aria-invalid", ((tmp_9_0 = ctx.checkoutLoginForm.get("emailConfirmation")) == null ? null : tmp_9_0.touched) && ((tmp_9_0 = ctx.checkoutLoginForm.get("emailConfirmation")) == null ? null : tmp_9_0.invalid))("aria-errormessage", "emailConfirmationError");
          ɵɵadvance(2);
          ɵɵproperty("translationParams", ɵɵpureFunction1(30, _c2, ɵɵpipeBind1(21, 24, "checkoutLogin.confirmEmail.label")))("control", ctx.checkoutLoginForm.get("emailConfirmation"));
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(24, 26, "checkoutLogin.continue"), " ");
        }
      },
      dependencies: [ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormErrorsComponent, FormRequiredAsterisksComponent, FormRequiredLegendComponent, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutLoginComponent, [{
    type: Component,
    args: [{
      selector: "cx-checkout-login",
      standalone: false,
      template: `<form (ngSubmit)="onSubmit()" [formGroup]="checkoutLoginForm">
  <cx-form-required-legend />
  <div class="form-group">
    <label>
      <span class="label-content">
        {{ 'checkoutLogin.emailAddress.label' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        required="true"
        type="email"
        name="email"
        class="form-control"
        formControlName="email"
        placeholder="{{
          'checkoutLogin.emailAddress.placeholder' | cxTranslate
        }}"
        [attr.aria-invalid]="
          checkoutLoginForm.get('email')?.touched &&
          checkoutLoginForm.get('email')?.invalid
        "
        [attr.aria-errormessage]="'emailError'"
      />

      <cx-form-errors
        id="emailError"
        [translationParams]="{
          label: 'checkoutLogin.emailAddress.label' | cxTranslate,
        }"
        [control]="checkoutLoginForm.get('email')"
      ></cx-form-errors>
    </label>
  </div>

  <div class="form-group">
    <label>
      <span class="label-content">
        {{ 'checkoutLogin.confirmEmail.label' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        required="true"
        type="email"
        name="emailConfirmation"
        class="form-control"
        formControlName="emailConfirmation"
        placeholder="{{
          'checkoutLogin.confirmEmail.placeholder' | cxTranslate
        }}"
        [attr.aria-invalid]="
          checkoutLoginForm.get('emailConfirmation')?.touched &&
          checkoutLoginForm.get('emailConfirmation')?.invalid
        "
        [attr.aria-errormessage]="'emailConfirmationError'"
      />

      <cx-form-errors
        id="emailConfirmationError"
        [translationParams]="{
          label: 'checkoutLogin.confirmEmail.label' | cxTranslate,
        }"
        [control]="checkoutLoginForm.get('emailConfirmation')"
      ></cx-form-errors>
    </label>
  </div>

  <button type="submit" class="btn btn-block btn-primary">
    {{ 'checkoutLogin.continue' | cxTranslate }}
  </button>
</form>
`
    }]
  }], () => [{
    type: UntypedFormBuilder
  }, {
    type: AuthRedirectService
  }, {
    type: ActiveCartFacade
  }], null);
})();
var CheckoutLoginModule = class _CheckoutLoginModule {
  static {
    this.ɵfac = function CheckoutLoginModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutLoginModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutLoginModule,
      declarations: [CheckoutLoginComponent],
      imports: [CommonModule, I18nModule, FormsModule, ReactiveFormsModule, FormErrorsModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      exports: [CheckoutLoginComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          GuestCheckoutLoginComponent: {
            component: CheckoutLoginComponent,
            guards: [NotCheckoutAuthGuard]
          }
        }
      })],
      imports: [CommonModule, I18nModule, FormsModule, ReactiveFormsModule, FormErrorsModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutLoginModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, FormsModule, ReactiveFormsModule, FormErrorsModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          GuestCheckoutLoginComponent: {
            component: CheckoutLoginComponent,
            guards: [NotCheckoutAuthGuard]
          }
        }
      })],
      declarations: [CheckoutLoginComponent],
      exports: [CheckoutLoginComponent]
    }]
  }], null, null);
})();
var CheckoutGuard = class _CheckoutGuard {
  constructor(router, routingConfigService, checkoutConfigService, expressCheckoutService, activeCartFacade, checkoutStepService) {
    this.router = router;
    this.routingConfigService = routingConfigService;
    this.checkoutConfigService = checkoutConfigService;
    this.expressCheckoutService = expressCheckoutService;
    this.activeCartFacade = activeCartFacade;
    this.checkoutStepService = checkoutStepService;
    this.firstStep$ = this.checkoutStepService.steps$.pipe(map((steps) => {
      return this.router.parseUrl(this.routingConfigService.getRouteConfig(steps[0]?.routeName)?.paths?.[0]);
    }));
  }
  canActivate() {
    const expressCheckout$ = this.expressCheckoutService.trySetDefaultCheckoutDetails().pipe(switchMap((expressCheckoutPossible) => {
      const reviewOrderRoute = this.checkoutStepService.getCheckoutStepRoute(CheckoutStepType.REVIEW_ORDER);
      return expressCheckoutPossible && reviewOrderRoute ? of(this.router.parseUrl(this.routingConfigService.getRouteConfig(reviewOrderRoute)?.paths?.[0])) : this.firstStep$;
    }));
    return this.activeCartFacade.isGuestCart().pipe(switchMap((isGuestCart) => this.checkoutConfigService.isExpressCheckout() && !isGuestCart ? expressCheckout$ : this.firstStep$));
  }
  static {
    this.ɵfac = function CheckoutGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutGuard)(ɵɵinject(Router), ɵɵinject(RoutingConfigService), ɵɵinject(CheckoutConfigService), ɵɵinject(ExpressCheckoutService), ɵɵinject(ActiveCartFacade), ɵɵinject(CheckoutStepService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutGuard,
      factory: _CheckoutGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Router
  }, {
    type: RoutingConfigService
  }, {
    type: CheckoutConfigService
  }, {
    type: ExpressCheckoutService
  }, {
    type: ActiveCartFacade
  }, {
    type: CheckoutStepService
  }], null);
})();
var CheckoutOrchestratorComponent = class _CheckoutOrchestratorComponent {
  constructor() {
  }
  static {
    this.ɵfac = function CheckoutOrchestratorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutOrchestratorComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutOrchestratorComponent,
      selectors: [["cx-checkout-orchestrator"]],
      standalone: false,
      decls: 0,
      vars: 0,
      template: function CheckoutOrchestratorComponent_Template(rf, ctx) {
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutOrchestratorComponent, [{
    type: Component,
    args: [{
      selector: "cx-checkout-orchestrator",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false
    }]
  }], () => [], null);
})();
var CheckoutOrchestratorModule = class _CheckoutOrchestratorModule {
  static {
    this.ɵfac = function CheckoutOrchestratorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutOrchestratorModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutOrchestratorModule,
      declarations: [CheckoutOrchestratorComponent],
      imports: [CommonModule],
      exports: [CheckoutOrchestratorComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutOrchestrator: {
            component: CheckoutOrchestratorComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutGuard]
          }
        }
      })],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutOrchestratorModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutOrchestrator: {
            component: CheckoutOrchestratorComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutGuard]
          }
        }
      })],
      declarations: [CheckoutOrchestratorComponent],
      exports: [CheckoutOrchestratorComponent]
    }]
  }], null, null);
})();
var CheckoutOrderSummaryComponent = class _CheckoutOrderSummaryComponent {
  constructor(activeCartFacade) {
    this.activeCartFacade = activeCartFacade;
    this.cartOutlets = CartOutlets;
    this.cart$ = this.activeCartFacade.getActive();
  }
  static {
    this.ɵfac = function CheckoutOrderSummaryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutOrderSummaryComponent)(ɵɵdirectiveInject(ActiveCartFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutOrderSummaryComponent,
      selectors: [["cx-checkout-order-summary"]],
      standalone: false,
      decls: 2,
      vars: 4,
      consts: [[3, "cxOutlet", "cxOutletContext"]],
      template: function CheckoutOrderSummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CheckoutOrderSummaryComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("cxOutlet", ctx.cartOutlets.ORDER_SUMMARY)("cxOutletContext", ɵɵpipeBind1(1, 2, ctx.cart$));
        }
      },
      dependencies: [OutletDirective, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutOrderSummaryComponent, [{
    type: Component,
    args: [{
      selector: "cx-checkout-order-summary",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<ng-template\n  [cxOutlet]="cartOutlets.ORDER_SUMMARY"\n  [cxOutletContext]="cart$ | async"\n>\n</ng-template>\n'
    }]
  }], () => [{
    type: ActiveCartFacade
  }], null);
})();
var CheckoutOrderSummaryModule = class _CheckoutOrderSummaryModule {
  static {
    this.ɵfac = function CheckoutOrderSummaryModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutOrderSummaryModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutOrderSummaryModule,
      declarations: [CheckoutOrderSummaryComponent],
      imports: [CommonModule, OutletModule],
      exports: [CheckoutOrderSummaryComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutOrderSummary: {
            component: CheckoutOrderSummaryComponent
          }
        }
      })],
      imports: [CommonModule, OutletModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutOrderSummaryModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OutletModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutOrderSummary: {
            component: CheckoutOrderSummaryComponent
          }
        }
      })],
      declarations: [CheckoutOrderSummaryComponent],
      exports: [CheckoutOrderSummaryComponent]
    }]
  }], null, null);
})();
var CheckoutBillingAddressFormService = class _CheckoutBillingAddressFormService {
  constructor() {
    this.fb = inject(UntypedFormBuilder);
    this.billingAddress = void 0;
  }
  getBillingAddressForm() {
    if (!this.form) {
      this.form = this.fb.group({
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        line1: ["", Validators.required],
        line2: [""],
        town: ["", Validators.required],
        region: this.fb.group({
          isocodeShort: [null, Validators.required]
        }),
        country: this.fb.group({
          isocode: [null, Validators.required]
        }),
        postalCode: ["", Validators.required]
      });
    }
    return this.form;
  }
  setDeliveryAddressAsBillingAddress(address) {
    this.billingAddress = address;
  }
  isBillingAddressSameAsDeliveryAddress() {
    if (this.billingAddress === void 0) {
      return false;
    }
    return true;
  }
  isBillingAddressFormValid() {
    return this.getBillingAddressForm().valid;
  }
  markAllAsTouched() {
    this.getBillingAddressForm().markAllAsTouched();
  }
  getBillingAddress() {
    if (this.billingAddress) {
      return this.billingAddress;
    } else {
      return this.getBillingAddressForm().value;
    }
  }
  static {
    this.ɵfac = function CheckoutBillingAddressFormService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutBillingAddressFormService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutBillingAddressFormService,
      factory: _CheckoutBillingAddressFormService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutBillingAddressFormService, [{
    type: Injectable
  }], null, null);
})();
var CheckoutBillingAddressFormComponent = class _CheckoutBillingAddressFormComponent {
  constructor() {
    this.sameAsDeliveryAddress = true;
    this.selectedCountry$ = new BehaviorSubject("");
    this.checkoutDeliveryAddressFacade = inject(CheckoutDeliveryAddressFacade);
    this.userPaymentService = inject(UserPaymentService);
    this.globalMessageService = inject(GlobalMessageService);
    this.userAddressService = inject(UserAddressService);
    this.launchDialogService = inject(LaunchDialogService);
    this.translationService = inject(TranslationService);
    this.billingAddressFormService = inject(CheckoutBillingAddressFormService);
    this.billingAddressForm = this.billingAddressFormService.getBillingAddressForm();
  }
  ngOnInit() {
    this.countries$ = this.userPaymentService.getAllBillingCountries().pipe(tap((countries) => {
      if (Object.keys(countries).length === 0) {
        this.userPaymentService.loadBillingCountries();
      }
    }));
    this.deliveryAddress$ = this.checkoutDeliveryAddressFacade.getDeliveryAddressState().pipe(filter((state) => !state.loading), map((state) => {
      this.billingAddressFormService.setDeliveryAddressAsBillingAddress(state.data);
      return state.data;
    }));
    this.showSameAsDeliveryAddressCheckbox$ = combineLatest([this.countries$, this.deliveryAddress$]).pipe(map(([countries, address]) => {
      return (address?.country && !!countries.filter((country) => country.isocode === address.country?.isocode).length) ?? false;
    }), tap((shouldShowCheckbox) => {
      this.sameAsDeliveryAddress = shouldShowCheckbox;
    }));
    this.regions$ = this.selectedCountry$.pipe(switchMap((country) => this.userAddressService.getRegions(country)), tap((regions) => {
      const regionControl = this.billingAddressForm.get("region.isocodeShort");
      if (regions.length > 0) {
        regionControl?.enable();
      } else {
        regionControl?.disable();
      }
    }));
  }
  toggleSameAsDeliveryAddress() {
    this.sameAsDeliveryAddress = !this.sameAsDeliveryAddress;
    if (this.sameAsDeliveryAddress) {
      this.deliveryAddress$.subscribe((address) => {
        this.billingAddressFormService.setDeliveryAddressAsBillingAddress(address);
      });
    } else {
      this.billingAddressFormService.setDeliveryAddressAsBillingAddress(void 0);
    }
  }
  /**
   *TODO: This method is not used, but should be. It triggers suggested addresses modal under the hood.
   *
   * See ticket CXSPA-1276
   */
  verifyAddress() {
    if (!this.sameAsDeliveryAddress) {
      this.userAddressService.verifyAddress(this.billingAddressForm.value).subscribe((result) => {
        this.handleAddressVerificationResults(result);
      });
    }
  }
  handleAddressVerificationResults(results) {
    if (results.decision === "ACCEPT") {
    } else if (results.decision === "REJECT") {
      this.globalMessageService.add({
        key: "addressForm.invalidAddress"
      }, GlobalMessageType.MSG_TYPE_ERROR);
    } else if (results.decision === "REVIEW") {
      this.openSuggestedAddress(results);
    }
  }
  countrySelected(country) {
    this.billingAddressForm.get("country.isocode")?.setValue(country.isocode);
    this.selectedCountry$.next(country.isocode);
  }
  //TODO: Add elementRef to trigger button when verifyAddress is used.
  openSuggestedAddress(results) {
    this.launchDialogService.openDialogAndSubscribe(LAUNCH_CALLER.SUGGESTED_ADDRESSES, void 0, {
      enteredAddress: this.billingAddressForm.value,
      suggestedAddresses: results.suggestedAddresses
    });
  }
  getAddressCardContent(address) {
    return this.translationService ? combineLatest([this.translationService.translate("addressCard.phoneNumber"), this.translationService.translate("addressCard.mobileNumber")]).pipe(map(([textPhone, textMobile]) => {
      let region = "";
      if (address.region && address.region.isocode) {
        region = address.region.isocode + ", ";
      }
      const numbers = getAddressNumbers(address, textPhone, textMobile);
      return {
        textBold: address.firstName + " " + address.lastName,
        text: [address.line1, address.line2, address.town + ", " + region + address.country?.isocode, address.postalCode, numbers]
      };
    })) : EMPTY;
  }
  static {
    this.ɵfac = function CheckoutBillingAddressFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutBillingAddressFormComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutBillingAddressFormComponent,
      selectors: [["cx-checkout-billing-address-form"]],
      standalone: false,
      decls: 10,
      vars: 10,
      consts: [["billingAddress", ""], [1, "cx-payment-form-billing"], [1, "cx-payment-form-billing-address"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "form-group"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "change", "checked"], [1, "form-check-label"], [3, "content"], [3, "formGroup"], ["formGroupName", "country", 1, "form-group"], [1, "label-content", "required"], ["required", "true", "type", "text", "formControlName", "firstName", 1, "form-control", 3, "placeholder"], ["id", "firstNameError", 3, "control"], ["required", "true", "type", "text", "formControlName", "lastName", 1, "form-control", 3, "placeholder"], ["id", "lastNameError", 3, "control"], ["required", "true", "type", "text", "formControlName", "line1", 1, "form-control", 3, "placeholder"], ["id", "line1Error", 3, "control"], [1, "label-content"], ["type", "text", "formControlName", "line2", 1, "form-control", 3, "placeholder"], [1, "row"], [1, "form-group", "col-md-6"], ["required", "true", "type", "text", "formControlName", "town", 1, "form-control", 3, "placeholder"], ["id", "townError", 3, "control"], ["required", "true", "type", "text", "formControlName", "postalCode", 1, "form-control", 3, "placeholder"], ["id", "postalCodeError", 3, "control"], ["formGroupName", "region", 4, "ngIf"], ["bindLabel", "name", "bindValue", "isocode", "formControlName", "isocode", "id", "country-payment-select", 3, "change", "inputAttrs", "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y"], ["id", "isocodeError", 3, "control"], ["formGroupName", "region"], ["formControlName", "isocodeShort", "id", "region-select", 1, "region-select", 3, "inputAttrs", "searchable", "clearable", "items", "bindLabel", "bindValue", "placeholder", "cxNgSelectA11y"], ["id", "isocodeShortError", 3, "control"]],
      template: function CheckoutBillingAddressFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1)(1, "div", 2);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd();
          ɵɵtemplate(4, CheckoutBillingAddressFormComponent_ng_container_4_Template, 9, 7, "ng-container", 3);
          ɵɵpipe(5, "async");
          ɵɵtemplate(6, CheckoutBillingAddressFormComponent_ng_container_6_Template, 2, 1, "ng-container", 4);
          ɵɵpipe(7, "async");
          ɵɵtemplate(8, CheckoutBillingAddressFormComponent_ng_template_8_Template, 60, 58, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const billingAddress_r7 = ɵɵreference(9);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "paymentForm.billingAddress"), " ");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(5, 6, ctx.showSameAsDeliveryAddressCheckbox$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.sameAsDeliveryAddress && ɵɵpipeBind1(7, 8, ctx.deliveryAddress$))("ngIfElse", billingAddress_r7);
        }
      },
      dependencies: [NgSelectA11yDirective, NgIf, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormGroupName, NgSelectComponent, CardComponent, FormErrorsComponent, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutBillingAddressFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-checkout-billing-address-form",
      standalone: false,
      template: `<!-- BILLING -->
<div class="cx-payment-form-billing">
  <div class="cx-payment-form-billing-address">
    {{ 'paymentForm.billingAddress' | cxTranslate }}
  </div>

  <!-- SAME AS SHIPPING CHECKBOX -->
  <ng-container *ngIf="showSameAsDeliveryAddressCheckbox$ | async">
    <div class="form-group">
      <div class="form-check">
        <label>
          <input
            type="checkbox"
            class="form-check-input"
            [checked]="sameAsDeliveryAddress"
            (change)="toggleSameAsDeliveryAddress()"
            [attr.aria-label]="
              'paymentForm.billingAddressSameAsShipping' | cxTranslate
            "
          />
          <span class="form-check-label">{{
            'paymentForm.sameAsDeliveryAddress' | cxTranslate
          }}</span>
        </label>
      </div>
    </div>
  </ng-container>

  <!-- BILLING INFO COMPONENT -->
  <ng-container
    *ngIf="
      sameAsDeliveryAddress && (deliveryAddress$ | async) as deliveryAddress;
      else billingAddress
    "
  >
    <cx-card [content]="getAddressCardContent(deliveryAddress)"></cx-card>
  </ng-container>

  <!-- TODO:#future-checkout do we really want this? We can always pass more inputs to the copied address form component to make it more modular -->
  <ng-template #billingAddress>
    <div [formGroup]="billingAddressForm">
      <cx-form-required-legend />
      <div class="form-group" formGroupName="country">
        <ng-container *ngIf="countries$ | async as countries">
          <div *ngIf="countries.length !== 0">
            <label>
              <span class="label-content required">
                {{ 'addressForm.country' | cxTranslate }}
                <cx-form-required-asterisks />
              </span>
              <ng-select
                [inputAttrs]="{ required: 'true' }"
                [searchable]="true"
                [clearable]="false"
                [items]="countries"
                bindLabel="name"
                bindValue="isocode"
                placeholder="{{ 'addressForm.selectOne' | cxTranslate }}"
                (change)="countrySelected($event)"
                formControlName="isocode"
                [attr.aria-invalid]="
                  billingAddressForm.get('isocode')?.touched &&
                  billingAddressForm.get('isocode')?.invalid
                "
                [attr.aria-errormessage]="'isocodeError'"
                id="country-payment-select"
                [cxNgSelectA11y]="{
                  ariaLabel: 'addressForm.country' | cxTranslate,
                }"
              >
              </ng-select>
              <cx-form-errors
                id="isocodeError"
                [control]="billingAddressForm.get('country.isocode')"
              ></cx-form-errors>
            </label>
          </div>
        </ng-container>
      </div>
      <div class="form-group">
        <label>
          <span class="label-content required">
            {{ 'addressForm.firstName.label' | cxTranslate }}
            <cx-form-required-asterisks />
          </span>
          <input
            required="true"
            class="form-control"
            type="text"
            placeholder="{{
              'addressForm.firstName.placeholder' | cxTranslate
            }}"
            formControlName="firstName"
            [attr.aria-invalid]="
              billingAddressForm.get('firstName')?.touched &&
              billingAddressForm.get('firstName')?.invalid
            "
            [attr.aria-errormessage]="'firstNameError'"
          />
          <cx-form-errors
            id="firstNameError"
            [control]="billingAddressForm.get('firstName')"
          ></cx-form-errors>
        </label>
      </div>
      <div class="form-group">
        <label>
          <span class="label-content required">
            {{ 'addressForm.lastName.label' | cxTranslate }}
            <cx-form-required-asterisks />
          </span>
          <input
            required="true"
            type="text"
            class="form-control"
            placeholder="{{ 'addressForm.lastName.placeholder' | cxTranslate }}"
            formControlName="lastName"
            [attr.aria-invalid]="
              billingAddressForm.get('lastName')?.touched &&
              billingAddressForm.get('lastName')?.invalid
            "
            [attr.aria-errormessage]="'lastNameError'"
          />
          <cx-form-errors
            id="lastNameError"
            [control]="billingAddressForm.get('lastName')"
          ></cx-form-errors>
        </label>
      </div>
      <div class="form-group">
        <label>
          <span class="label-content required">
            {{ 'addressForm.address1' | cxTranslate }}
            <cx-form-required-asterisks />
          </span>
          <input
            required="true"
            type="text"
            class="form-control"
            placeholder="{{ 'addressForm.streetAddress' | cxTranslate }}"
            formControlName="line1"
            [attr.aria-invalid]="
              billingAddressForm.get('line1')?.touched &&
              billingAddressForm.get('line1')?.invalid
            "
            [attr.aria-errormessage]="'line1Error'"
          />
          <cx-form-errors
            id="line1Error"
            [control]="billingAddressForm.get('line1')"
          ></cx-form-errors>
        </label>
      </div>
      <div class="form-group">
        <label>
          <span class="label-content">{{
            'addressForm.address2' | cxTranslate
          }}</span>
          <input
            type="text"
            class="form-control"
            placeholder="{{ 'addressForm.aptSuite' | cxTranslate }}"
            formControlName="line2"
          />
        </label>
      </div>
      <div class="row">
        <div class="form-group col-md-6">
          <label>
            <span class="label-content required">
              {{ 'addressForm.city.label' | cxTranslate }}
              <cx-form-required-asterisks />
            </span>
            <input
              required="true"
              type="text"
              class="form-control"
              placeholder="{{ 'addressForm.city.placeholder' | cxTranslate }}"
              formControlName="town"
              [attr.aria-invalid]="
                billingAddressForm.get('town')?.touched &&
                billingAddressForm.get('town')?.invalid
              "
              [attr.aria-errormessage]="'townError'"
            />
            <cx-form-errors
              id="townError"
              [control]="billingAddressForm.get('town')"
            ></cx-form-errors>
          </label>
        </div>
        <div class="form-group col-md-6">
          <label>
            <span class="label-content required">
              {{ 'addressForm.zipCode.label' | cxTranslate }}
              <cx-form-required-asterisks />
            </span>
            <input
              required="true"
              type="text"
              class="form-control"
              placeholder="{{
                'addressForm.zipCode.placeholder' | cxTranslate
              }}"
              formControlName="postalCode"
              [attr.aria-invalid]="
                billingAddressForm.get('postalCode')?.touched &&
                billingAddressForm.get('postalCode')?.invalid
              "
              [attr.aria-errormessage]="'postalCodeError'"
            />
            <cx-form-errors
              id="postalCodeError"
              [control]="billingAddressForm.get('postalCode')"
            ></cx-form-errors>
          </label>
        </div>
        <ng-container
          *ngIf="regions$ | async as regions"
          formGroupName="region"
        >
          <ng-container *ngIf="regions.length !== 0">
            <div class="form-group col-md-6">
              <label>
                <span class="label-content required">{{
                  'addressForm.state' | cxTranslate
                }}</span>
                <ng-select
                  [inputAttrs]="{ required: 'true' }"
                  class="region-select"
                  formControlName="isocodeShort"
                  [attr.aria-invalid]="
                    billingAddressForm.get('isocodeShort')?.touched &&
                    billingAddressForm.get('isocodeShort')?.invalid
                  "
                  [attr.aria-errormessage]="'isocodeShortError'"
                  [searchable]="true"
                  [clearable]="false"
                  [items]="regions"
                  bindLabel="{{ regions[0].name ? 'name' : 'isocodeShort' }}"
                  bindValue="{{ regions[0].name ? 'isocodeShort' : 'region' }}"
                  placeholder="{{ 'addressForm.selectOne' | cxTranslate }}"
                  id="region-select"
                  [cxNgSelectA11y]="{
                    ariaLabel: 'addressForm.state' | cxTranslate,
                  }"
                >
                </ng-select>
                <cx-form-errors
                  id="isocodeShortError"
                  [control]="billingAddressForm.get('region.isocodeShort')"
                ></cx-form-errors>
              </label>
            </div>
          </ng-container>
        </ng-container>
      </div>
    </div>
  </ng-template>
</div>
`
    }]
  }], null, null);
})();
var CheckoutBillingAddressFormModule = class _CheckoutBillingAddressFormModule {
  static {
    this.ɵfac = function CheckoutBillingAddressFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutBillingAddressFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutBillingAddressFormModule,
      declarations: [CheckoutBillingAddressFormComponent],
      imports: [NgSelectA11yModule, CommonModule, ReactiveFormsModule, NgSelectModule, CardModule, I18nModule, IconModule, SpinnerModule, FormErrorsModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      exports: [CheckoutBillingAddressFormComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [CheckoutBillingAddressFormService],
      imports: [NgSelectA11yModule, CommonModule, ReactiveFormsModule, NgSelectModule, CardModule, I18nModule, IconModule, SpinnerModule, FormErrorsModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutBillingAddressFormModule, [{
    type: NgModule,
    args: [{
      imports: [NgSelectA11yModule, CommonModule, ReactiveFormsModule, NgSelectModule, CardModule, I18nModule, IconModule, SpinnerModule, FormErrorsModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      providers: [CheckoutBillingAddressFormService],
      declarations: [CheckoutBillingAddressFormComponent],
      exports: [CheckoutBillingAddressFormComponent]
    }]
  }], null, null);
})();
var CheckoutPaymentFormComponent = class _CheckoutPaymentFormComponent {
  constructor(checkoutPaymentFacade, checkoutDeliveryAddressFacade, userPaymentService, globalMessageService, fb, userAddressService, launchDialogService, translationService) {
    this.checkoutPaymentFacade = checkoutPaymentFacade;
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.userPaymentService = userPaymentService;
    this.globalMessageService = globalMessageService;
    this.fb = fb;
    this.userAddressService = userAddressService;
    this.launchDialogService = launchDialogService;
    this.translationService = translationService;
    this.iconTypes = ICON_TYPE;
    this.months = [];
    this.years = [];
    this.goBack = new EventEmitter();
    this.closeForm = new EventEmitter();
    this.setPaymentDetails = new EventEmitter();
    this.paymentForm = this.fb.group({
      cardType: this.fb.group({
        code: [null, Validators.required]
      }),
      accountHolderName: ["", Validators.required],
      cardNumber: ["", Validators.required],
      expiryMonth: [null, Validators.required],
      expiryYear: [null, Validators.required],
      cvn: ["", Validators.required],
      defaultPayment: [false]
    });
    this.billingAddressService = inject(CheckoutBillingAddressFormService);
    this.useExtractedBillingAddressComponent = true;
  }
  ngOnInit() {
    if (this.paymentDetails) {
      this.paymentForm.patchValue(this.paymentDetails);
    }
    this.expMonthAndYear();
    this.cardTypes$ = this.checkoutPaymentFacade.getPaymentCardTypes();
  }
  expMonthAndYear() {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    for (let i = 0; i < 10; i++) {
      this.years.push(year + i);
    }
    for (let j = 1; j <= 12; j++) {
      if (j < 10) {
        this.months.push(`0${j}`);
      } else {
        this.months.push(j.toString());
      }
    }
  }
  toggleDefaultPaymentMethod() {
    this.paymentForm.value.defaultPayment = !this.paymentForm.value.defaultPayment;
  }
  close() {
    this.closeForm.emit();
  }
  back() {
    this.goBack.emit();
  }
  next() {
    const sameAsDeliveryAddress = this.billingAddressService.isBillingAddressSameAsDeliveryAddress();
    const isBillingAddressFormValid = this.billingAddressService.isBillingAddressFormValid();
    const billingAddressFormvalue = this.billingAddressService.getBillingAddress();
    if (this.paymentForm.valid) {
      if (sameAsDeliveryAddress) {
        this.setPaymentDetails.emit({
          paymentDetails: this.paymentForm.value,
          billingAddress: null
        });
      } else {
        if (isBillingAddressFormValid) {
          this.setPaymentDetails.emit({
            paymentDetails: this.paymentForm.value,
            billingAddress: billingAddressFormvalue
          });
        } else {
          this.billingAddressService.markAllAsTouched();
        }
      }
    } else {
      this.paymentForm.markAllAsTouched();
      this.globalMessageService.add({
        key: "formErrors.globalMessage"
      }, GlobalMessageType.MSG_TYPE_ASSISTIVE);
      if (!sameAsDeliveryAddress) {
        this.billingAddressService.markAllAsTouched();
      }
    }
  }
  static {
    this.ɵfac = function CheckoutPaymentFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutPaymentFormComponent)(ɵɵdirectiveInject(CheckoutPaymentFacade), ɵɵdirectiveInject(CheckoutDeliveryAddressFacade), ɵɵdirectiveInject(UserPaymentService), ɵɵdirectiveInject(GlobalMessageService), ɵɵdirectiveInject(UntypedFormBuilder), ɵɵdirectiveInject(UserAddressService), ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(TranslationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutPaymentFormComponent,
      selectors: [["cx-payment-form"]],
      inputs: {
        loading: "loading",
        setAsDefaultField: "setAsDefaultField",
        paymentMethodsCount: "paymentMethodsCount",
        paymentDetails: "paymentDetails"
      },
      outputs: {
        goBack: "goBack",
        closeForm: "closeForm",
        setPaymentDetails: "setPaymentDetails"
      },
      standalone: false,
      decls: 3,
      vars: 2,
      consts: [["spinner", ""], [4, "ngIf", "ngIfElse"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-12", "col-xl-10"], ["formGroupName", "cardType", 1, "form-group"], [4, "ngIf"], [1, "form-group"], [1, "label-content"], ["required", "true", "type", "text", "formControlName", "accountHolderName", 1, "form-control", 3, "placeholder"], ["id", "accountHolderNameError", 3, "translationParams", "control"], ["required", "true", "type", "text", "formControlName", "cardNumber", 1, "form-control"], ["id", "cardNumberError", 3, "translationParams", "control"], [1, "form-group", "col-md-8"], [1, "cx-payment-form-exp-date"], [1, "cx-payment-form-exp-date-wrapper"], ["formControlName", "expiryMonth", "id", "month-select", 3, "inputAttrs", "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y"], [3, "translationParams", "control"], ["id", "year-select", "formControlName", "expiryYear", 3, "inputAttrs", "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y"], [1, "form-group", "col-md-4"], ["placement", "right", "alt", "", 1, "cx-payment-form-tooltip", 3, "type", "title"], ["required", "true", "type", "text", "id", "cVVNumber", "formControlName", "cvn", 1, "form-control"], ["id", "cvnError", 3, "translationParams", "control"], ["class", "form-group", 4, "ngIf"], [1, "cx-checkout-btns", "row"], [1, "col-md-12", "col-lg-6"], ["class", "btn btn-block btn-secondary", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-block", "btn-primary"], [1, "label-content", "required"], ["bindLabel", "name", "bindValue", "code", "formControlName", "code", "id", "card-type-select", 3, "inputAttrs", "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "change"], [1, "form-check-label"], [1, "btn", "btn-block", "btn-secondary", 3, "click"]],
      template: function CheckoutPaymentFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CheckoutPaymentFormComponent_ng_container_0_Template, 68, 100, "ng-container", 1)(1, CheckoutPaymentFormComponent_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const spinner_r7 = ɵɵreference(2);
          ɵɵproperty("ngIf", !ctx.loading)("ngIfElse", spinner_r7);
        }
      },
      dependencies: [NgSelectA11yDirective, NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormGroupName, NgSelectComponent, IconComponent, SpinnerComponent, FormErrorsComponent, CheckoutBillingAddressFormComponent, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-payment-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<!-- FORM -->
<ng-container *ngIf="!loading; else spinner">
  <!-- TODO: (CXSPA-5953) Remove feature flags next major -->
  <cx-form-required-legend />
  <form (ngSubmit)="next()" [formGroup]="paymentForm">
    <div class="row">
      <div class="col-md-12 col-xl-10">
        <div class="form-group" formGroupName="cardType">
          <ng-container *ngIf="cardTypes$ | async as cardTypes">
            <div *ngIf="cardTypes.length !== 0">
              <label>
                <span class="label-content required"
                  >{{ 'paymentForm.paymentType' | cxTranslate }}
                  <cx-form-required-asterisks />
                </span>
                <ng-select
                  [inputAttrs]="{ required: 'true' }"
                  [searchable]="true"
                  [clearable]="false"
                  [items]="cardTypes"
                  bindLabel="name"
                  bindValue="code"
                  placeholder="{{ 'paymentForm.selectOne' | cxTranslate }}"
                  formControlName="code"
                  id="card-type-select"
                  [cxNgSelectA11y]="{
                    ariaLabel: 'paymentForm.paymentType' | cxTranslate,
                  }"
                >
                </ng-select>

                <cx-form-errors
                  [translationParams]="{
                    label: 'paymentForm.paymentType' | cxTranslate,
                  }"
                  [control]="paymentForm.get('cardType.code')"
                ></cx-form-errors>
              </label>
            </div>
          </ng-container>
        </div>

        <div class="form-group">
          <label>
            <span class="label-content"
              >{{ 'paymentForm.accountHolderName.label' | cxTranslate }}
              <cx-form-required-asterisks />
            </span>
            <input
              required="true"
              class="form-control"
              type="text"
              placeholder="{{
                'paymentForm.accountHolderName.placeholder' | cxTranslate
              }}"
              formControlName="accountHolderName"
              [attr.aria-invalid]="
                paymentForm.get('accountHolderName')?.touched &&
                paymentForm.get('accountHolderName')?.invalid
              "
              [attr.aria-errormessage]="'accountHolderNameError'"
            />

            <cx-form-errors
              id="accountHolderNameError"
              [translationParams]="{
                label: 'paymentForm.accountHolderName.label' | cxTranslate,
              }"
              [control]="paymentForm.get('accountHolderName')"
            ></cx-form-errors>
          </label>
        </div>

        <div class="form-group">
          <label>
            <span class="label-content"
              >{{ 'paymentForm.cardNumber' | cxTranslate }}
              <cx-form-required-asterisks />
            </span>
            <input
              required="true"
              type="text"
              class="form-control"
              formControlName="cardNumber"
              [attr.aria-invalid]="
                paymentForm.get('cardNumber')?.touched &&
                paymentForm.get('cardNumber')?.invalid
              "
              [attr.aria-errormessage]="'cardNumberError'"
            />

            <cx-form-errors
              id="cardNumberError"
              [translationParams]="{
                label: 'paymentForm.cardNumber' | cxTranslate,
              }"
              [control]="paymentForm.get('cardNumber')"
            ></cx-form-errors>
          </label>
        </div>

        <div class="row">
          <div class="form-group col-md-8">
            <fieldset class="cx-payment-form-exp-date">
              <legend class="label-content">
                {{ 'paymentForm.expirationDate' | cxTranslate }}
                <cx-form-required-asterisks />
              </legend>
              <label class="cx-payment-form-exp-date-wrapper">
                <ng-select
                  [inputAttrs]="{ required: 'true' }"
                  [searchable]="true"
                  [clearable]="false"
                  [items]="months"
                  placeholder="{{ 'paymentForm.monthMask' | cxTranslate }}"
                  formControlName="expiryMonth"
                  id="month-select"
                  [cxNgSelectA11y]="{
                    ariaLabel:
                      'paymentForm.expirationMonth'
                      | cxTranslate
                        : { selected: paymentForm.get('expiryMonth')?.value },
                  }"
                >
                </ng-select>

                <cx-form-errors
                  [translationParams]="{
                    label: 'paymentForm.expirationDate' | cxTranslate,
                  }"
                  [control]="paymentForm.get('expiryMonth')"
                ></cx-form-errors>
              </label>
              <label class="cx-payment-form-exp-date-wrapper">
                <ng-select
                  [inputAttrs]="{ required: 'true' }"
                  [searchable]="true"
                  [clearable]="false"
                  [items]="years"
                  placeholder="{{ 'paymentForm.yearMask' | cxTranslate }}"
                  id="year-select"
                  [cxNgSelectA11y]="{
                    ariaLabel:
                      'paymentForm.expirationYear'
                      | cxTranslate
                        : { selected: paymentForm.get('expiryYear')?.value },
                  }"
                  formControlName="expiryYear"
                >
                </ng-select>

                <cx-form-errors
                  [translationParams]="{
                    label: 'paymentForm.expirationDate' | cxTranslate,
                  }"
                  [control]="paymentForm.get('expiryYear')"
                ></cx-form-errors>
              </label>
            </fieldset>
          </div>

          <div class="form-group col-md-4">
            <label>
              <span class="label-content">
                {{ 'paymentForm.securityCode' | cxTranslate }}
                <cx-form-required-asterisks />
                <cx-icon
                  [type]="iconTypes.INFO"
                  class="cx-payment-form-tooltip"
                  placement="right"
                  title="{{ 'paymentForm.securityCodeTitle' | cxTranslate }}"
                  alt=""
                  [attr.aria-label]="
                    'paymentForm.securityCodeTitle' | cxTranslate
                  "
                ></cx-icon>
              </span>
              <input
                required="true"
                type="text"
                class="form-control"
                id="cVVNumber"
                formControlName="cvn"
                [attr.aria-invalid]="
                  paymentForm.get('cvn')?.touched &&
                  paymentForm.get('cvn')?.invalid
                "
                [attr.aria-errormessage]="'cvnError'"
              />

              <cx-form-errors
                id="cvnError"
                [translationParams]="{
                  label: 'paymentForm.securityCode' | cxTranslate,
                }"
                [control]="paymentForm.get('cvn')"
              ></cx-form-errors>
            </label>
          </div>
        </div>

        <div class="form-group" *ngIf="setAsDefaultField">
          <div class="form-check">
            <label>
              <input
                type="checkbox"
                class="form-check-input"
                (change)="toggleDefaultPaymentMethod()"
              />
              <span class="form-check-label">{{
                'paymentForm.setAsDefault' | cxTranslate
              }}</span>
            </label>
          </div>
        </div>

        <!-- BILLING -->
        <cx-checkout-billing-address-form></cx-checkout-billing-address-form>
      </div>
    </div>

    <!-- BUTTON SECTION -->
    <div class="cx-checkout-btns row">
      <div class="col-md-12 col-lg-6">
        <button
          *ngIf="paymentMethodsCount === 0"
          class="btn btn-block btn-secondary"
          (click)="back()"
        >
          {{ 'common.back' | cxTranslate }}
        </button>
        <button
          *ngIf="paymentMethodsCount > 0"
          class="btn btn-block btn-secondary"
          (click)="close()"
        >
          {{ 'paymentForm.changePayment' | cxTranslate }}
        </button>
      </div>
      <div class="col-md-12 col-lg-6">
        <button class="btn btn-block btn-primary" type="submit">
          {{ 'common.continue' | cxTranslate }}
        </button>
      </div>
    </div>
  </form>
</ng-container>

<ng-template #spinner>
  <cx-spinner></cx-spinner>
</ng-template>
`
    }]
  }], () => [{
    type: CheckoutPaymentFacade
  }, {
    type: CheckoutDeliveryAddressFacade
  }, {
    type: UserPaymentService
  }, {
    type: GlobalMessageService
  }, {
    type: UntypedFormBuilder
  }, {
    type: UserAddressService
  }, {
    type: LaunchDialogService
  }, {
    type: TranslationService
  }], {
    loading: [{
      type: Input
    }],
    setAsDefaultField: [{
      type: Input
    }],
    paymentMethodsCount: [{
      type: Input
    }],
    paymentDetails: [{
      type: Input
    }],
    goBack: [{
      type: Output
    }],
    closeForm: [{
      type: Output
    }],
    setPaymentDetails: [{
      type: Output
    }]
  });
})();
var CheckoutPaymentFormModule = class _CheckoutPaymentFormModule {
  static {
    this.ɵfac = function CheckoutPaymentFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutPaymentFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutPaymentFormModule,
      declarations: [CheckoutPaymentFormComponent],
      imports: [NgSelectA11yModule, CommonModule, ReactiveFormsModule, NgSelectModule, CardModule, I18nModule, IconModule, SpinnerModule, FormErrorsModule, FeaturesConfigModule, CheckoutBillingAddressFormModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      exports: [CheckoutPaymentFormComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NgSelectA11yModule, CommonModule, ReactiveFormsModule, NgSelectModule, CardModule, I18nModule, IconModule, SpinnerModule, FormErrorsModule, FeaturesConfigModule, CheckoutBillingAddressFormModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentFormModule, [{
    type: NgModule,
    args: [{
      imports: [NgSelectA11yModule, CommonModule, ReactiveFormsModule, NgSelectModule, CardModule, I18nModule, IconModule, SpinnerModule, FormErrorsModule, FeaturesConfigModule, CheckoutBillingAddressFormModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      declarations: [CheckoutPaymentFormComponent],
      exports: [CheckoutPaymentFormComponent]
    }]
  }], null, null);
})();
var CheckoutPaymentMethodComponent = class _CheckoutPaymentMethodComponent {
  get backBtnText() {
    return this.checkoutStepService.getBackBntText(this.activatedRoute);
  }
  get existingPaymentMethods$() {
    return this.userPaymentService.getPaymentMethods();
  }
  get selectedMethod$() {
    return this.checkoutPaymentFacade.getPaymentDetailsState().pipe(filter((state) => !state.loading), map((state) => state.data), distinctUntilChanged((prev, curr) => prev?.id === curr?.id));
  }
  constructor(userPaymentService, checkoutDeliveryAddressFacade, checkoutPaymentFacade, activatedRoute, translationService, activeCartFacade, checkoutStepService, globalMessageService) {
    this.userPaymentService = userPaymentService;
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.checkoutPaymentFacade = checkoutPaymentFacade;
    this.activatedRoute = activatedRoute;
    this.translationService = translationService;
    this.activeCartFacade = activeCartFacade;
    this.checkoutStepService = checkoutStepService;
    this.globalMessageService = globalMessageService;
    this.subscriptions = new Subscription();
    this.busy$ = new BehaviorSubject(false);
    this.featureConfigService = inject(FeatureConfigService, {
      optional: true
    });
    this.focusService = inject(SelectFocusUtility);
    this.windowRef = inject(WindowRef);
    this.iconTypes = ICON_TYPE;
    this.isGuestCheckout = false;
    this.newPaymentFormManuallyOpened = false;
    this.doneAutoSelect = false;
    this.isUpdating$ = combineLatest([this.busy$, this.userPaymentService.getPaymentMethodsLoading(), this.checkoutPaymentFacade.getPaymentDetailsState().pipe(map((state) => state.loading))]).pipe(map(([busy, userPaymentLoading, paymentMethodLoading]) => busy || userPaymentLoading || paymentMethodLoading), distinctUntilChanged());
  }
  ngOnInit() {
    if (!getLastValueSync(this.activeCartFacade.isGuestCart())) {
      this.userPaymentService.loadPaymentMethods();
    } else {
      this.isGuestCheckout = true;
    }
    this.checkoutDeliveryAddressFacade.getDeliveryAddressState().pipe(filter((state) => !state.loading), take(1), map((state) => state.data)).subscribe((address) => {
      this.deliveryAddress = address;
    });
    this.cards$ = combineLatest([this.existingPaymentMethods$.pipe(switchMap((methods) => {
      return !methods?.length ? of([]) : combineLatest(methods.map((method) => combineLatest([of(method), this.translationService.translate("paymentCard.expires", {
        month: method.expiryMonth,
        year: method.expiryYear
      })]).pipe(map(([payment, translation]) => ({
        payment,
        expiryTranslation: translation
      })))));
    })), this.selectedMethod$, this.translationService.translate("paymentForm.useThisPayment"), this.translationService.translate("paymentCard.defaultPaymentMethod"), this.featureConfigService?.isEnabled("a11ySelectLabelWithContextForSelectedAddrOrPayment") ? this.translationService.translate("paymentCard.selectedPayment") : this.translationService.translate("paymentCard.selected")]).pipe(tap(([paymentMethods, selectedMethod]) => this.selectDefaultPaymentMethod(paymentMethods, selectedMethod)), map(([paymentMethods, selectedMethod, textUseThisPayment, textDefaultPaymentMethod, textSelected]) => paymentMethods.map((payment) => ({
      content: this.createCard(payment.payment, {
        textExpires: payment.expiryTranslation,
        textUseThisPayment,
        textDefaultPaymentMethod,
        textSelected
      }, selectedMethod),
      paymentMethod: payment.payment
    }))));
  }
  selectDefaultPaymentMethod(paymentMethods, selectedMethod) {
    if (!this.doneAutoSelect && paymentMethods?.length && (!selectedMethod || Object.keys(selectedMethod).length === 0)) {
      const defaultPaymentMethod = paymentMethods.find((paymentMethod) => paymentMethod.payment.defaultPayment);
      if (defaultPaymentMethod) {
        selectedMethod = defaultPaymentMethod.payment;
        this.savePaymentMethod(selectedMethod);
      }
      this.doneAutoSelect = true;
    }
  }
  selectPaymentMethod(paymentDetails) {
    if (paymentDetails?.id === getLastValueSync(this.selectedMethod$)?.id) {
      return;
    }
    this.globalMessageService.add({
      key: "paymentMethods.paymentMethodSelected"
    }, GlobalMessageType.MSG_TYPE_INFO);
    this.savePaymentMethod(paymentDetails);
    if (this.featureConfigService?.isEnabled("a11yFocusOnCardAfterSelecting")) {
      this.focusCardAfterSelecting();
    }
  }
  /**
   * Restores the focus to the Card component after it has been selected and the checkout has finished updating.
   * The focus is lost due to DOM changes making it otherwise impossible to target elements that have been removed.
   */
  focusCardAfterSelecting() {
    const cardNodes = Array.from(this.windowRef?.document.querySelectorAll("cx-card"));
    const triggeredCard = this.windowRef?.document.activeElement?.closest("cx-card");
    if (triggeredCard) {
      const selectedCardIndex = cardNodes.indexOf(triggeredCard);
      this.isUpdating$.pipe(filter((isUpdating) => !isUpdating), take(1)).subscribe(() => {
        requestAnimationFrame(() => {
          const selectedCard = this.windowRef?.document.querySelectorAll("cx-card")[selectedCardIndex];
          this.focusService.findFirstFocusable(selectedCard)?.focus();
        });
      });
    }
  }
  showNewPaymentForm() {
    this.newPaymentFormManuallyOpened = true;
  }
  hideNewPaymentForm() {
    this.newPaymentFormManuallyOpened = false;
  }
  setPaymentDetails({
    paymentDetails,
    billingAddress
  }) {
    this.paymentDetails = paymentDetails;
    const details = __spreadValues({}, paymentDetails);
    details.billingAddress = billingAddress ?? this.deliveryAddress;
    this.busy$.next(true);
    this.subscriptions.add(this.checkoutPaymentFacade.createPaymentDetails(details).subscribe({
      complete: () => {
        this.next();
      },
      error: () => {
        this.onError();
      }
    }));
  }
  next() {
    this.checkoutStepService.next(this.activatedRoute);
  }
  back() {
    this.checkoutStepService.back(this.activatedRoute);
  }
  savePaymentMethod(paymentDetails) {
    this.busy$.next(true);
    this.subscriptions.add(this.checkoutPaymentFacade.setPaymentDetails(paymentDetails).subscribe({
      complete: () => this.onSuccess(),
      error: () => this.onError()
    }));
  }
  getCardIcon(code) {
    let ccIcon;
    if (code === "visa") {
      ccIcon = this.iconTypes.VISA;
    } else if (code === "master" || code === "mastercard_eurocard") {
      ccIcon = this.iconTypes.MASTER_CARD;
    } else if (code === "diners") {
      ccIcon = this.iconTypes.DINERS_CLUB;
    } else if (code === "amex") {
      ccIcon = this.iconTypes.AMEX;
    } else {
      ccIcon = this.iconTypes.CREDIT_CARD;
    }
    return ccIcon;
  }
  createCard(paymentDetails, cardLabels, selected) {
    const isSelected = selected?.id === paymentDetails.id;
    const isButtonRole = this.featureConfigService?.isEnabled("a11ySelectLabelWithContextForSelectedAddrOrPayment") && !isSelected;
    const role = isButtonRole ? "button" : "application";
    return {
      role,
      title: paymentDetails.defaultPayment ? cardLabels.textDefaultPaymentMethod : "",
      textBold: paymentDetails.accountHolderName,
      text: [paymentDetails.cardNumber ?? "", cardLabels.textExpires],
      img: this.getCardIcon(paymentDetails.cardType?.code),
      actions: isSelected ? [] : [{
        name: cardLabels.textUseThisPayment,
        event: "send"
      }],
      header: isSelected ? cardLabels.textSelected : void 0,
      label: paymentDetails.defaultPayment ? "paymentCard.defaultPaymentLabel" : "paymentCard.additionalPaymentLabel"
    };
  }
  onSuccess() {
    this.busy$.next(false);
  }
  onError() {
    this.busy$.next(false);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function CheckoutPaymentMethodComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutPaymentMethodComponent)(ɵɵdirectiveInject(UserPaymentService), ɵɵdirectiveInject(CheckoutDeliveryAddressFacade), ɵɵdirectiveInject(CheckoutPaymentFacade), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(CheckoutStepService), ɵɵdirectiveInject(GlobalMessageService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutPaymentMethodComponent,
      selectors: [["cx-payment-method"]],
      standalone: false,
      decls: 5,
      vars: 2,
      consts: [["content", ""], ["loading", ""], ["hasExistingPaymentMethods", ""], ["newPaymentForm", ""], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], [1, "cx-checkout-title", "d-none", "d-lg-block", "d-xl-block"], [4, "ngIf"], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "cx-checkout-text"], [1, "cx-checkout-btns", "cx-checkout-btns-top"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "cx-checkout-body", "row"], ["class", "cx-payment-card col-md-12 col-lg-6", 4, "ngFor", "ngForOf"], [1, "cx-checkout-btns", "cx-checkout-btns-bottom"], [1, "row", "cx-checkout-btns"], [1, "col-md-12", "col-lg-6"], [1, "btn", "btn-block", "btn-primary", 3, "click", "disabled"], [1, "cx-payment-card", "col-md-12", "col-lg-6"], [1, "cx-payment-card-inner", 3, "click"], [3, "sendCard", "border", "fitToContainer", "content", "index"], [3, "setPaymentDetails", "closeForm", "goBack", "paymentMethodsCount", "setAsDefaultField", "loading", "paymentDetails"], [1, "cx-spinner"]],
      template: function CheckoutPaymentMethodComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CheckoutPaymentMethodComponent_section_0_Template, 3, 4, "section", 4)(1, CheckoutPaymentMethodComponent_ng_template_1_Template, 5, 6, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, CheckoutPaymentMethodComponent_ng_template_3_Template, 2, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const content_r1 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.featureConfigService == null ? null : ctx.featureConfigService.isEnabled("a11yCheckoutStepsLandmarks"))("ngIfElse", content_r1);
        }
      },
      dependencies: [NgForOf, NgIf, NgTemplateOutlet, CheckoutPaymentFormComponent, CardComponent, SpinnerComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentMethodComponent, [{
    type: Component,
    args: [{
      selector: "cx-payment-method",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<section
  *ngIf="
    featureConfigService?.isEnabled('a11yCheckoutStepsLandmarks');
    else content
  "
  [attr.aria-label]="'paymentForm.payment' | cxTranslate"
>
  <ng-template [ngTemplateOutlet]="content"></ng-template>
</section>

<ng-template #content>
  <h2 class="cx-checkout-title d-none d-lg-block d-xl-block">
    {{ 'paymentForm.payment' | cxTranslate }}
  </h2>
  <ng-container *ngIf="cards$ | async as cards">
    <ng-container *ngIf="!(isUpdating$ | async); else loading">
      <ng-container
        *ngIf="
          cards?.length && !newPaymentFormManuallyOpened;
          then hasExistingPaymentMethods;
          else newPaymentForm
        "
      >
      </ng-container>
    </ng-container>

    <ng-template #hasExistingPaymentMethods>
      <p class="cx-checkout-text">
        {{ 'paymentForm.choosePaymentMethod' | cxTranslate }}
      </p>

      <div class="cx-checkout-btns cx-checkout-btns-top">
        <button
          class="btn btn-block btn-secondary"
          (click)="showNewPaymentForm()"
        >
          {{ 'paymentForm.addNewPayment' | cxTranslate }}
        </button>
      </div>

      <div class="cx-checkout-body row">
        <div
          class="cx-payment-card col-md-12 col-lg-6"
          *ngFor="let card of cards; let i = index"
        >
          <div
            class="cx-payment-card-inner"
            (click)="selectPaymentMethod(card.paymentMethod)"
          >
            <cx-card
              [border]="true"
              [fitToContainer]="true"
              [content]="card.content"
              [index]="i"
              (sendCard)="selectPaymentMethod(card.paymentMethod)"
            ></cx-card>
          </div>
        </div>
      </div>

      <div class="cx-checkout-btns cx-checkout-btns-bottom">
        <button
          class="btn btn-block btn-secondary"
          (click)="showNewPaymentForm()"
        >
          {{ 'paymentForm.addNewPayment' | cxTranslate }}
        </button>
      </div>

      <div class="row cx-checkout-btns">
        <div class="col-md-12 col-lg-6">
          <button class="btn btn-block btn-secondary" (click)="back()">
            {{ backBtnText | cxTranslate }}
          </button>
        </div>
        <div class="col-md-12 col-lg-6">
          <button
            class="btn btn-block btn-primary"
            [disabled]="!(selectedMethod$ | async)?.id"
            (click)="next()"
          >
            {{ 'common.continue' | cxTranslate }}
          </button>
        </div>
      </div>
    </ng-template>

    <ng-template #newPaymentForm>
      <cx-payment-form
        (setPaymentDetails)="setPaymentDetails($event)"
        (closeForm)="hideNewPaymentForm()"
        (goBack)="back()"
        [paymentMethodsCount]="cards?.length || 0"
        [setAsDefaultField]="!isGuestCheckout && !!cards?.length"
        [loading]="isUpdating$ | async"
        [paymentDetails]="paymentDetails"
      ></cx-payment-form>
    </ng-template>
  </ng-container>
</ng-template>

<ng-template #loading>
  <div class="cx-spinner">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: UserPaymentService
  }, {
    type: CheckoutDeliveryAddressFacade
  }, {
    type: CheckoutPaymentFacade
  }, {
    type: ActivatedRoute
  }, {
    type: TranslationService
  }, {
    type: ActiveCartFacade
  }, {
    type: CheckoutStepService
  }, {
    type: GlobalMessageService
  }], {
    featureConfigService: [{
      type: Optional
    }],
    focusService: [{
      type: Optional
    }],
    windowRef: [{
      type: Optional
    }]
  });
})();
var CheckoutPaymentMethodModule = class _CheckoutPaymentMethodModule {
  static {
    this.ɵfac = function CheckoutPaymentMethodModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutPaymentMethodModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutPaymentMethodModule,
      declarations: [CheckoutPaymentMethodComponent],
      imports: [CommonModule, RouterModule, CheckoutPaymentFormModule, CardModule, SpinnerModule, I18nModule, FeaturesConfigModule],
      exports: [CheckoutPaymentMethodComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutPaymentDetails: {
            component: CheckoutPaymentMethodComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      imports: [CommonModule, RouterModule, CheckoutPaymentFormModule, CardModule, SpinnerModule, I18nModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentMethodModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, CheckoutPaymentFormModule, CardModule, SpinnerModule, I18nModule, FeaturesConfigModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutPaymentDetails: {
            component: CheckoutPaymentMethodComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      declarations: [CheckoutPaymentMethodComponent],
      exports: [CheckoutPaymentMethodComponent]
    }]
  }], null, null);
})();
var CheckoutPlaceOrderComponent = class _CheckoutPlaceOrderComponent {
  get termsAndConditionInvalid() {
    return this.checkoutSubmitForm.invalid;
  }
  constructor(orderFacade, routingService, fb, launchDialogService, vcr) {
    this.orderFacade = orderFacade;
    this.routingService = routingService;
    this.fb = fb;
    this.launchDialogService = launchDialogService;
    this.vcr = vcr;
    this.params$ = new Observable();
    this.checkoutSubmitForm = this.fb.group({
      termsAndConditions: [false, Validators.requiredTrue]
    });
    this.currencyService = inject(CurrencyService);
    this.languageService = inject(LanguageService);
  }
  ngOnInit() {
    this.params$ = combineLatest([this.currencyService.getActive(), this.languageService.getActive()]).pipe(map(([currency, language]) => [currency, language]));
  }
  submitForm() {
    if (this.checkoutSubmitForm.valid) {
      this.placedOrder = this.launchDialogService.launch(LAUNCH_CALLER.PLACE_ORDER_SPINNER, this.vcr);
      this.orderFacade.placeOrder(this.checkoutSubmitForm.valid).subscribe({
        error: () => {
          if (!this.placedOrder) {
            return;
          }
          this.placedOrder.subscribe((component) => {
            this.launchDialogService.clear(LAUNCH_CALLER.PLACE_ORDER_SPINNER);
            if (component) {
              component.destroy();
            }
          }).unsubscribe();
        },
        next: () => this.onSuccess()
      });
    } else {
      this.checkoutSubmitForm.markAllAsTouched();
    }
  }
  onSuccess() {
    this.routingService.go({
      cxRoute: "orderConfirmation"
    });
  }
  ngOnDestroy() {
    this.launchDialogService.clear(LAUNCH_CALLER.PLACE_ORDER_SPINNER);
  }
  static {
    this.ɵfac = function CheckoutPlaceOrderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutPlaceOrderComponent)(ɵɵdirectiveInject(OrderFacade), ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(UntypedFormBuilder), ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(ViewContainerRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutPlaceOrderComponent,
      selectors: [["cx-place-order"]],
      standalone: false,
      decls: 19,
      vars: 25,
      consts: [[1, "cx-place-order-form", "form-check", 3, "formGroup"], [1, "form-group"], ["formControlName", "termsAndConditions", "type", "checkbox", "aria-required", "true", 1, "scaled-input", "form-check-input"], [1, "form-check-label"], ["target", "_blank", "rel", "noopener noreferrer", 1, "cx-tc-link", 3, "routerLink"], ["id", "termsAndConditionsError", 3, "control"], [1, "btn", "btn-primary", "btn-block", 3, "click", "disabled", "cxAtMessage"]],
      template: function CheckoutPlaceOrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "cx-form-required-legend");
          ɵɵelementStart(1, "form", 0)(2, "div", 1)(3, "label");
          ɵɵelement(4, "input", 2);
          ɵɵelementStart(5, "span", 3);
          ɵɵtext(6);
          ɵɵpipe(7, "cxTranslate");
          ɵɵelementStart(8, "a", 4);
          ɵɵpipe(9, "async");
          ɵɵpipe(10, "cxUrl");
          ɵɵtext(11);
          ɵɵpipe(12, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelement(13, "cx-form-required-asterisks")(14, "cx-form-errors", 5);
          ɵɵelementEnd()()();
          ɵɵelementStart(15, "button", 6);
          ɵɵpipe(16, "cxTranslate");
          ɵɵlistener("click", function CheckoutPlaceOrderComponent_Template_button_click_15_listener() {
            return ctx.submitForm();
          });
          ɵɵtext(17);
          ɵɵpipe(18, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("formGroup", ctx.checkoutSubmitForm);
          ɵɵadvance(3);
          ɵɵattribute("aria-describedby", "termsAndConditionsError");
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 9, "checkoutReview.confirmThatRead"), " ");
          ɵɵadvance(2);
          ɵɵproperty("routerLink", ɵɵpipeBind1(10, 13, ɵɵpureFunction1(23, _c7, ɵɵpureFunction1(21, _c6, ɵɵpipeBind1(9, 11, ctx.params$)))));
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 15, "checkoutReview.termsAndConditions"), " ");
          ɵɵadvance(3);
          ɵɵproperty("control", ctx.checkoutSubmitForm.get("termsAndConditions"));
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.termsAndConditionInvalid)("cxAtMessage", ɵɵpipeBind1(16, 17, "checkoutReview.orderInProcess"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 19, "checkoutReview.placeOrder"), " ");
        }
      },
      dependencies: [AtMessageDirective, RouterLink, ɵNgNoValidate, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormErrorsComponent, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPlaceOrderComponent, [{
    type: Component,
    args: [{
      selector: "cx-place-order",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<cx-form-required-legend />
<form class="cx-place-order-form form-check" [formGroup]="checkoutSubmitForm">
  <div class="form-group">
    <label>
      <input
        formControlName="termsAndConditions"
        class="scaled-input form-check-input"
        type="checkbox"
        aria-required="true"
        [attr.aria-describedby]="'termsAndConditionsError'"
      />
      <span class="form-check-label">
        {{ 'checkoutReview.confirmThatRead' | cxTranslate }}
        <a
          [routerLink]="
            {
              cxRoute: 'termsAndConditions',
              params: [params$ | async],
            } | cxUrl
          "
          class="cx-tc-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ 'checkoutReview.termsAndConditions' | cxTranslate }}
        </a>
        <cx-form-required-asterisks />
        <cx-form-errors
          id="termsAndConditionsError"
          [control]="checkoutSubmitForm.get('termsAndConditions')"
        ></cx-form-errors>
      </span>
    </label>
  </div>

  <button
    (click)="submitForm()"
    class="btn btn-primary btn-block"
    [disabled]="termsAndConditionInvalid"
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
  }], null);
})();
var defaultPlaceOrderSpinnerLayoutConfig = {
  launch: {
    PLACE_ORDER_SPINNER: {
      inline: true,
      component: SpinnerComponent,
      dialogType: DIALOG_TYPE.POPOVER_CENTER_BACKDROP
    }
  }
};
var CheckoutPlaceOrderModule = class _CheckoutPlaceOrderModule {
  static {
    this.ɵfac = function CheckoutPlaceOrderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutPlaceOrderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutPlaceOrderModule,
      declarations: [CheckoutPlaceOrderComponent],
      imports: [AtMessageModule, CommonModule, RouterModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      exports: [CheckoutPlaceOrderComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultPlaceOrderSpinnerLayoutConfig), provideDefaultConfig({
        cmsComponents: {
          CheckoutPlaceOrder: {
            component: CheckoutPlaceOrderComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      imports: [AtMessageModule, CommonModule, RouterModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPlaceOrderModule, [{
    type: NgModule,
    args: [{
      imports: [AtMessageModule, CommonModule, RouterModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      providers: [provideDefaultConfig(defaultPlaceOrderSpinnerLayoutConfig), provideDefaultConfig({
        cmsComponents: {
          CheckoutPlaceOrder: {
            component: CheckoutPlaceOrderComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      declarations: [CheckoutPlaceOrderComponent],
      exports: [CheckoutPlaceOrderComponent]
    }]
  }], null, null);
})();
var CheckoutStepsSetGuard = class _CheckoutStepsSetGuard {
  constructor(checkoutStepService, routingConfigService, checkoutDeliveryAddressFacade, checkoutPaymentFacade, checkoutDeliveryModesFacade, router, activeCartFacade) {
    this.checkoutStepService = checkoutStepService;
    this.routingConfigService = routingConfigService;
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.checkoutPaymentFacade = checkoutPaymentFacade;
    this.checkoutDeliveryModesFacade = checkoutDeliveryModesFacade;
    this.router = router;
    this.activeCartFacade = activeCartFacade;
    this.logger = inject(LoggerService);
    this.subscription = this.activeCartFacade.hasDeliveryItems().pipe(distinctUntilChanged()).subscribe((hasDeliveryItems) => {
      this.checkoutStepService.disableEnableStep(CheckoutStepType.DELIVERY_ADDRESS, !hasDeliveryItems);
      this.checkoutStepService.disableEnableStep(CheckoutStepType.DELIVERY_MODE, !hasDeliveryItems);
      this.setStepNameMultiLine(CheckoutStepType.PAYMENT_DETAILS, hasDeliveryItems);
      this.setStepNameMultiLine(CheckoutStepType.REVIEW_ORDER, hasDeliveryItems);
    });
  }
  canActivate(route) {
    let currentIndex = -1;
    const currentRouteUrl = "/" + route.url.join("/");
    return this.checkoutStepService.steps$.pipe(take(1), switchMap((steps) => {
      currentIndex = steps.findIndex((step) => {
        const stepRouteUrl = `/${this.routingConfigService.getRouteConfig(step.routeName)?.paths?.[0]}`;
        return stepRouteUrl === currentRouteUrl;
      });
      let currentStep;
      if (currentIndex >= 0) {
        currentStep = steps[currentIndex];
      }
      if (Boolean(currentStep)) {
        return this.isStepSet(steps[currentIndex - 1]);
      } else {
        if (isDevMode()) {
          this.logger.warn(`Missing step with route '${currentRouteUrl}' in checkout configuration or this step is disabled.`);
        }
        return of(this.getUrl("checkout"));
      }
    }));
  }
  isStepSet(step) {
    if (step && !step.disabled) {
      switch (step.type[0]) {
        case CheckoutStepType.DELIVERY_ADDRESS: {
          return this.isDeliveryAddress(step);
        }
        case CheckoutStepType.DELIVERY_MODE: {
          return this.isDeliveryModeSet(step);
        }
        case CheckoutStepType.PAYMENT_DETAILS: {
          if (this.checkoutStepService.getCheckoutStep(CheckoutStepType.DELIVERY_MODE)?.disabled) {
            this.checkoutDeliveryModesFacade.setDeliveryMode("pickup");
          }
          return this.isPaymentDetailsSet(step);
        }
        case CheckoutStepType.REVIEW_ORDER: {
          break;
        }
      }
    }
    return of(true);
  }
  isDeliveryAddress(step) {
    return this.checkoutDeliveryAddressFacade.getDeliveryAddressState().pipe(filter((state) => !state.loading), map((state) => state.data), map((deliveryAddress) => {
      if (deliveryAddress && Object.keys(deliveryAddress).length) {
        return true;
      } else {
        return this.getUrl(step.routeName);
      }
    }));
  }
  isDeliveryModeSet(step) {
    return this.checkoutDeliveryModesFacade.getSelectedDeliveryModeState().pipe(filter((state) => !state.loading), map((state) => state.data), map((mode) => mode ? true : this.getUrl(step.routeName)));
  }
  isPaymentDetailsSet(step) {
    return this.checkoutPaymentFacade.getPaymentDetailsState().pipe(filter((state) => !state.loading), map((state) => state.data), map((paymentDetails) => paymentDetails && Object.keys(paymentDetails).length !== 0 ? true : this.getUrl(step.routeName)));
  }
  getUrl(routeName) {
    return this.router.parseUrl(this.routingConfigService.getRouteConfig(routeName)?.paths?.[0]);
  }
  setStepNameMultiLine(stepType, value) {
    const step = this.checkoutStepService.getCheckoutStep(stepType);
    if (step) {
      step.nameMultiLine = value;
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function CheckoutStepsSetGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutStepsSetGuard)(ɵɵinject(CheckoutStepService), ɵɵinject(RoutingConfigService), ɵɵinject(CheckoutDeliveryAddressFacade), ɵɵinject(CheckoutPaymentFacade), ɵɵinject(CheckoutDeliveryModesFacade), ɵɵinject(Router), ɵɵinject(ActiveCartFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutStepsSetGuard,
      factory: _CheckoutStepsSetGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutStepsSetGuard, [{
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
    type: ActiveCartFacade
  }], null);
})();
var CheckoutProgressMobileBottomComponent = class _CheckoutProgressMobileBottomComponent {
  constructor(checkoutStepService) {
    this.checkoutStepService = checkoutStepService;
    this._steps$ = this.checkoutStepService.steps$;
    this.activeStepIndex$ = this.checkoutStepService.activeStepIndex$.pipe(tap((index) => this.activeStepIndex = index));
  }
  get steps$() {
    return this._steps$.asObservable();
  }
  static {
    this.ɵfac = function CheckoutProgressMobileBottomComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutProgressMobileBottomComponent)(ɵɵdirectiveInject(CheckoutStepService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutProgressMobileBottomComponent,
      selectors: [["cx-checkout-progress-mobile-bottom"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "cx-media"], [4, "ngFor", "ngForOf"], ["class", "cx-list-media", 4, "ngIf"], [1, "cx-list-media"]],
      template: function CheckoutProgressMobileBottomComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CheckoutProgressMobileBottomComponent_div_0_Template, 4, 3, "div", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.activeStepIndex$) !== void 0);
        }
      },
      dependencies: [NgForOf, NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutProgressMobileBottomComponent, [{
    type: Component,
    args: [{
      selector: "cx-checkout-progress-mobile-bottom",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<div *ngIf="(activeStepIndex$ | async) !== undefined">\n  <div class="cx-media">\n    <div *ngFor="let step of steps$ | async; let i = index">\n      <div class="cx-list-media" *ngIf="i > activeStepIndex">\n        <div>{{ i + 1 }}. {{ step.name | cxTranslate }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n'
    }]
  }], () => [{
    type: CheckoutStepService
  }], null);
})();
var CheckoutProgressMobileBottomModule = class _CheckoutProgressMobileBottomModule {
  static {
    this.ɵfac = function CheckoutProgressMobileBottomModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutProgressMobileBottomModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutProgressMobileBottomModule,
      declarations: [CheckoutProgressMobileBottomComponent],
      imports: [CommonModule, UrlModule, I18nModule, RouterModule],
      exports: [CheckoutProgressMobileBottomComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutProgressMobileBottom: {
            component: CheckoutProgressMobileBottomComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutStepsSetGuard]
          }
        }
      })],
      imports: [CommonModule, UrlModule, I18nModule, RouterModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutProgressMobileBottomModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, UrlModule, I18nModule, RouterModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutProgressMobileBottom: {
            component: CheckoutProgressMobileBottomComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutStepsSetGuard]
          }
        }
      })],
      declarations: [CheckoutProgressMobileBottomComponent],
      exports: [CheckoutProgressMobileBottomComponent]
    }]
  }], null, null);
})();
var CheckoutProgressMobileTopComponent = class _CheckoutProgressMobileTopComponent {
  constructor(activeCartFacade, checkoutStepService) {
    this.activeCartFacade = activeCartFacade;
    this.checkoutStepService = checkoutStepService;
    this._steps$ = this.checkoutStepService.steps$;
    this.cart$ = this.activeCartFacade.getActive();
    this.activeStepIndex$ = this.checkoutStepService.activeStepIndex$.pipe(tap((index) => this.activeStepIndex = index));
  }
  get steps$() {
    return this._steps$.asObservable();
  }
  static {
    this.ɵfac = function CheckoutProgressMobileTopComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutProgressMobileTopComponent)(ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(CheckoutStepService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutProgressMobileTopComponent,
      selectors: [["cx-checkout-progress-mobile-top"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "cx-media"], ["class", "cx-list-media cx-title", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "cx-list-media", "cx-title"], ["class", "cx-list-media", 4, "ngIf"], ["class", "cx-list-media is-active", 4, "ngIf"], [1, "cx-list-media"], [1, "cx-title"], [1, "btn", "btn-link", 3, "routerLink"], [1, "cx-list-media", "is-active"]],
      template: function CheckoutProgressMobileTopComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CheckoutProgressMobileTopComponent_div_0_Template, 3, 3, "div", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.activeStepIndex$) !== void 0);
        }
      },
      dependencies: [NgForOf, NgIf, RouterLink, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutProgressMobileTopComponent, [{
    type: Component,
    args: [{
      selector: "cx-checkout-progress-mobile-top",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div *ngIf="(activeStepIndex$ | async) !== undefined">
  <div *ngIf="cart$ | async as cart">
    <div class="cx-media">
      <div
        class="cx-list-media cx-title"
        *ngIf="cart?.totalItems && cart?.subTotal"
      >
        {{ 'cartItems.cartTotal' | cxTranslate: { count: cart.totalItems } }}:
        {{ cart.subTotal.formattedValue }}
      </div>
      <div *ngFor="let step of steps$ | async; let i = index">
        <div class="cx-list-media" *ngIf="i < activeStepIndex">
          <div class="cx-title">{{ i + 1 }}. {{ step.name | cxTranslate }}</div>
          <button
            class="btn btn-link"
            [routerLink]="{ cxRoute: step.routeName } | cxUrl"
          >
            {{ 'common.edit' | cxTranslate }}
          </button>
        </div>
        <div class="cx-list-media is-active" *ngIf="i === activeStepIndex">
          <div class="cx-title">{{ i + 1 }}. {{ step.name | cxTranslate }}</div>
        </div>
      </div>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: CheckoutStepService
  }], null);
})();
var CheckoutProgressMobileTopModule = class _CheckoutProgressMobileTopModule {
  static {
    this.ɵfac = function CheckoutProgressMobileTopModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutProgressMobileTopModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutProgressMobileTopModule,
      declarations: [CheckoutProgressMobileTopComponent],
      imports: [CommonModule, UrlModule, I18nModule, RouterModule],
      exports: [CheckoutProgressMobileTopComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutProgressMobileTop: {
            component: CheckoutProgressMobileTopComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutStepsSetGuard]
          }
        }
      })],
      imports: [CommonModule, UrlModule, I18nModule, RouterModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutProgressMobileTopModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, UrlModule, I18nModule, RouterModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutProgressMobileTop: {
            component: CheckoutProgressMobileTopComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutStepsSetGuard]
          }
        }
      })],
      declarations: [CheckoutProgressMobileTopComponent],
      exports: [CheckoutProgressMobileTopComponent]
    }]
  }], null, null);
})();
var MultiLinePipe = class _MultiLinePipe {
  transform(value) {
    const lastIndex = value.lastIndexOf(" ");
    if (lastIndex === -1) {
      return value;
    }
    return value.substring(0, lastIndex) + "<br />" + value.substring(lastIndex, value.length).trim();
  }
  static {
    this.ɵfac = function MultiLinePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MultiLinePipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "cxMultiLine",
      type: _MultiLinePipe,
      pure: true,
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiLinePipe, [{
    type: Pipe,
    args: [{
      name: "cxMultiLine",
      standalone: false
    }]
  }], null, null);
})();
var CheckoutProgressComponent = class _CheckoutProgressComponent {
  constructor(checkoutStepService) {
    this.checkoutStepService = checkoutStepService;
    this.params$ = new Observable();
    this._steps$ = this.checkoutStepService.steps$;
    this.currencyService = inject(CurrencyService);
    this.languageService = inject(LanguageService);
    this.activeStepIndex$ = this.checkoutStepService.activeStepIndex$.pipe(tap((index) => this.activeStepIndex = index));
  }
  get steps$() {
    return this._steps$.asObservable();
  }
  ngOnInit() {
    this.params$ = combineLatest([this.currencyService.getActive(), this.languageService.getActive()]).pipe(map(([currency, language]) => [currency, language]));
  }
  getTabIndex(stepIndex) {
    return !this.isActive(stepIndex) && !this.isDisabled(stepIndex) ? 0 : -1;
  }
  isActive(index) {
    return index === this.activeStepIndex;
  }
  isDisabled(index) {
    return index > this.activeStepIndex;
  }
  getStepState(index) {
    if (this.isDisabled(index)) {
      return CheckoutStepState.DISABLED;
    }
    if (this.isActive(index)) {
      return CheckoutStepState.SELECTED;
    }
    return CheckoutStepState.COMPLETED;
  }
  static {
    this.ɵfac = function CheckoutProgressComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutProgressComponent)(ɵɵdirectiveInject(CheckoutStepService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutProgressComponent,
      selectors: [["cx-checkout-progress"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "cx-nav", "d-none", "d-lg-block", "d-xl-block"], [1, "cx-list"], [4, "ngFor", "ngForOf"], [1, "cx-item"], [1, "cx-link", 3, "routerLink", "tabindex", "innerHTML"]],
      template: function CheckoutProgressComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CheckoutProgressComponent_nav_0_Template, 6, 6, "nav", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.activeStepIndex$) !== void 0);
        }
      },
      dependencies: [NgForOf, NgIf, RouterLink, AsyncPipe, UrlPipe, TranslatePipe, MultiLinePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutProgressComponent, [{
    type: Component,
    args: [{
      selector: "cx-checkout-progress",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<nav
  [attr.aria-label]="'checkoutProgress.label' | cxTranslate"
  *ngIf="(activeStepIndex$ | async) !== undefined"
>
  <div class="cx-nav d-none d-lg-block d-xl-block">
    <ul class="cx-list">
      <ng-container *ngFor="let step of steps$ | async; let i = index">
        <li
          class="cx-item"
          [class.active]="isActive(i)"
          [class.disabled]="isDisabled(i)"
        >
          <a
            [routerLink]="
              {
                cxRoute: step.routeName,
                params: [params$ | async],
              } | cxUrl
            "
            class="cx-link"
            [attr.aria-current]="isActive(i) ? 'step' : null"
            [attr.aria-disabled]="isDisabled(i) ? 'true' : null"
            [class.active]="isActive(i)"
            [class.disabled]="isDisabled(i)"
            [tabindex]="getTabIndex(i)"
            [innerHTML]="
              step.nameMultiLine !== false
                ? (step.name | cxTranslate | cxMultiLine)
                : (step.name | cxTranslate)
            "
            [attr.aria-label]="
              'checkoutProgress.state.' + getStepState(i)
                | cxTranslate
                  : {
                      step: step.name | cxTranslate,
                    }
            "
          >
          </a>
        </li>
      </ng-container>
    </ul>
  </div>
</nav>
`
    }]
  }], () => [{
    type: CheckoutStepService
  }], null);
})();
var CheckoutProgressModule = class _CheckoutProgressModule {
  static {
    this.ɵfac = function CheckoutProgressModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutProgressModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutProgressModule,
      declarations: [CheckoutProgressComponent, MultiLinePipe],
      imports: [CommonModule, UrlModule, I18nModule, RouterModule],
      exports: [CheckoutProgressComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutProgress: {
            component: CheckoutProgressComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutStepsSetGuard]
          }
        }
      })],
      imports: [CommonModule, UrlModule, I18nModule, RouterModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutProgressModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, UrlModule, I18nModule, RouterModule],
      declarations: [CheckoutProgressComponent, MultiLinePipe],
      exports: [CheckoutProgressComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutProgress: {
            component: CheckoutProgressComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutStepsSetGuard]
          }
        }
      })]
    }]
  }], null, null);
})();
var CheckoutReviewSubmitComponent = class _CheckoutReviewSubmitComponent {
  constructor(checkoutDeliveryAddressFacade, checkoutPaymentFacade, activeCartFacade, translationService, checkoutStepService, checkoutDeliveryModesFacade) {
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.checkoutPaymentFacade = checkoutPaymentFacade;
    this.activeCartFacade = activeCartFacade;
    this.translationService = translationService;
    this.checkoutStepService = checkoutStepService;
    this.checkoutDeliveryModesFacade = checkoutDeliveryModesFacade;
    this.cartOutlets = CartOutlets;
    this.iconTypes = ICON_TYPE;
    this.checkoutStepTypeDeliveryAddress = CheckoutStepType.DELIVERY_ADDRESS;
    this.checkoutStepTypePaymentDetails = CheckoutStepType.PAYMENT_DETAILS;
    this.checkoutStepTypeDeliveryMode = CheckoutStepType.DELIVERY_MODE;
    this.promotionLocation = PromotionLocation.ActiveCart;
    this.steps$ = this.checkoutStepService.steps$;
    this.deliveryAddress$ = this.checkoutDeliveryAddressFacade.getDeliveryAddressState().pipe(filter((state) => !state.loading && !state.error), map((state) => state.data));
    this.deliveryMode$ = this.checkoutDeliveryModesFacade.getSelectedDeliveryModeState().pipe(filter((state) => !state.loading && !state.error), map((state) => state.data));
    this.paymentDetails$ = this.checkoutPaymentFacade.getPaymentDetailsState().pipe(filter((state) => !state.loading && !state.error), map((state) => state.data));
  }
  get cart$() {
    return this.activeCartFacade.getActive();
  }
  get entries$() {
    return this.activeCartFacade.getEntries();
  }
  getCheckoutDeliverySteps() {
    return [CheckoutStepType.DELIVERY_ADDRESS, CheckoutStepType.DELIVERY_MODE];
  }
  getCheckoutPaymentSteps() {
    return [CheckoutStepType.PAYMENT_DETAILS, CheckoutStepType.DELIVERY_ADDRESS];
  }
  getDeliveryAddressCard(deliveryAddress, countryName) {
    return combineLatest([this.translationService.translate("addressCard.shipTo"), this.translationService.translate("addressCard.phoneNumber"), this.translationService.translate("addressCard.mobileNumber")]).pipe(map(([textTitle, textPhone, textMobile]) => deliveryAddressCard(textTitle, textPhone, textMobile, deliveryAddress, countryName)));
  }
  getDeliveryModeCard(deliveryMode) {
    return combineLatest([this.translationService.translate("checkoutMode.deliveryMethod")]).pipe(map(([textTitle]) => deliveryModeCard(textTitle, deliveryMode)));
  }
  getPaymentMethodCard(paymentDetails) {
    return combineLatest([this.translationService.translate("paymentForm.payment"), this.translationService.translate("paymentCard.expires", {
      month: paymentDetails.expiryMonth,
      year: paymentDetails.expiryYear
    }), this.translationService.translate("paymentForm.billingAddress")]).pipe(map(([textTitle, textExpires, billingAddress]) => {
      const region = paymentDetails.billingAddress?.region?.isocode ? paymentDetails.billingAddress?.region?.isocode + ", " : "";
      return {
        title: textTitle,
        textBold: paymentDetails.accountHolderName,
        text: [paymentDetails.cardNumber, textExpires],
        paragraphs: [{
          title: billingAddress + ":",
          text: [paymentDetails.billingAddress?.firstName + " " + paymentDetails.billingAddress?.lastName, paymentDetails.billingAddress?.line1, paymentDetails.billingAddress?.town + ", " + region + paymentDetails.billingAddress?.country?.isocode, paymentDetails.billingAddress?.postalCode]
        }]
      };
    }));
  }
  getCheckoutStepUrl(stepType) {
    const step = this.checkoutStepService.getCheckoutStep(stepType);
    return step?.routeName;
  }
  deliverySteps(steps) {
    return steps.filter((step) => this.getCheckoutDeliverySteps().includes(step.type[0]));
  }
  paymentSteps(steps) {
    return steps.filter((step) => this.getCheckoutPaymentSteps().includes(step.type[0]));
  }
  static {
    this.ɵfac = function CheckoutReviewSubmitComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutReviewSubmitComponent)(ɵɵdirectiveInject(CheckoutDeliveryAddressFacade), ɵɵdirectiveInject(CheckoutPaymentFacade), ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(CheckoutStepService), ɵɵdirectiveInject(CheckoutDeliveryModesFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutReviewSubmitComponent,
      selectors: [["cx-review-submit"]],
      standalone: false,
      decls: 15,
      vars: 9,
      consts: [["deliveryAddress", ""], ["deliveryMode", ""], ["paymentMethod", ""], [1, "cx-review"], [1, "cx-review-title", "d-none", "d-lg-block", "d-xl-block"], [1, "cx-review-summary", "row"], [4, "ngIf"], [1, "col-md-12", "col-lg-6", "col-xl-6", "cx-review-payment-col"], [4, "ngFor", "ngForOf"], [1, "col-md-12", "col-lg-6", "col-xl-6", "cx-review-shipping-col"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngTemplateOutlet"], ["class", "cx-review-summary-card cx-review-card-address", 4, "ngIf"], [1, "cx-review-summary-card", "cx-review-card-address"], [3, "content"], [1, "cx-review-summary-edit-step"], [3, "routerLink"], ["aria-hidden", "true", 3, "type"], [1, "cx-review-summary-card", "cx-review-card-shipping"], [3, "content", 4, "ngIf"], [3, "cxOutlet", "cxOutletContext"], [1, "cx-review-summary-card", "cx-review-card-payment"], [1, "cx-review-cart-total", "d-none", "d-lg-block", "d-xl-block"], [1, "cx-review-cart-heading", "d-block", "d-lg-none", "d-xl-none"], ["class", "cx-review-cart-item", 4, "ngIf"], [1, "cx-review-cart-item"], [3, "promotions"]],
      template: function CheckoutReviewSubmitComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 3)(1, "h2", 4);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(4, "div", 5);
          ɵɵtemplate(5, CheckoutReviewSubmitComponent_ng_container_5_Template, 5, 2, "ng-container", 6);
          ɵɵpipe(6, "async");
          ɵɵelementEnd();
          ɵɵtemplate(7, CheckoutReviewSubmitComponent_ng_template_7_Template, 2, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(9, CheckoutReviewSubmitComponent_ng_template_9_Template, 11, 18, "ng-template", null, 1, ɵɵtemplateRefExtractor)(11, CheckoutReviewSubmitComponent_ng_template_11_Template, 9, 12, "ng-template", null, 2, ɵɵtemplateRefExtractor)(13, CheckoutReviewSubmitComponent_ng_container_13_Template, 9, 13, "ng-container", 6);
          ɵɵpipe(14, "async");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_4_0;
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "checkoutReview.review"), " ");
          ɵɵadvance(3);
          ɵɵproperty("ngIf", (tmp_4_0 = ɵɵpipeBind1(6, 5, ctx.steps$)) == null ? null : tmp_4_0.slice(0, -1));
          ɵɵadvance(8);
          ɵɵproperty("ngIf", ɵɵpipeBind1(14, 7, ctx.cart$));
        }
      },
      dependencies: [NgForOf, NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, CardComponent, RouterLink, PromotionsComponent, IconComponent, OutletDirective, AsyncPipe, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutReviewSubmitComponent, [{
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
            <ng-container *ngSwitchCase="checkoutStepTypePaymentDetails">
              <ng-container *ngTemplateOutlet="paymentMethod"></ng-container>
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
  }], null);
})();
var CheckoutReviewSubmitModule = class _CheckoutReviewSubmitModule {
  static {
    this.ɵfac = function CheckoutReviewSubmitModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutReviewSubmitModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutReviewSubmitModule,
      declarations: [CheckoutReviewSubmitComponent],
      imports: [CommonModule, CardModule, I18nModule, UrlModule, RouterModule, PromotionsModule, IconModule, OutletModule],
      exports: [CheckoutReviewSubmitComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutReviewOrder: {
            component: CheckoutReviewSubmitComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      imports: [CommonModule, CardModule, I18nModule, UrlModule, RouterModule, PromotionsModule, IconModule, OutletModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutReviewSubmitModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CardModule, I18nModule, UrlModule, RouterModule, PromotionsModule, IconModule, OutletModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutReviewOrder: {
            component: CheckoutReviewSubmitComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      declarations: [CheckoutReviewSubmitComponent],
      exports: [CheckoutReviewSubmitComponent]
    }]
  }], null, null);
})();
var CheckoutReviewOverviewComponent = class _CheckoutReviewOverviewComponent {
  constructor(activeCartFacade) {
    this.activeCartFacade = activeCartFacade;
    this.document = inject(DOCUMENT, {
      optional: true
    });
    this.translationService = inject(TranslationService, {
      optional: true
    });
    this.featureService = inject(FeatureConfigService, {
      optional: true
    });
    this.CHECKOUT_COMPONENTS = ["cx-checkout-review-payment", "cx-checkout-review-overview", "cx-checkout-review-shipping"];
  }
  ngAfterViewInit() {
    this.wrapComponentsWithSectionEl();
  }
  get cart$() {
    return this.activeCartFacade.getActive();
  }
  /**
   * Wraps checkout review components with section element required
   * for applying correct a11y practices.
   *
   * Note: We need to do it this way because there is no single parent component
   * template we can use to wrap all related components because the layout is
   * CMS-driven (ie. by page slot).
   */
  wrapComponentsWithSectionEl() {
    if (this.document && this.translationService && this.featureService?.isEnabled("a11yWrapReviewOrderInSection")) {
      this.translationService.translate("checkoutReview.reviewOrder").pipe(take(1)).subscribe((label) => {
        requestAnimationFrame(() => {
          const els = this.CHECKOUT_COMPONENTS.map((selector) => this.document?.querySelector(selector));
          const parent = els[0]?.parentNode;
          const section = this.document?.createElement("section");
          if (parent && section) {
            section.ariaLabel = label;
            parent.replaceChild(section, els[0]);
            els.forEach((el) => section.appendChild(el));
          }
        });
      });
    }
  }
  static {
    this.ɵfac = function CheckoutReviewOverviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutReviewOverviewComponent)(ɵɵdirectiveInject(ActiveCartFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutReviewOverviewComponent,
      selectors: [["cx-checkout-review-overview"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "cx-review-cart-total", "d-none", "d-lg-block", "d-xl-block"], [3, "promotions"]],
      template: function CheckoutReviewOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CheckoutReviewOverviewComponent_ng_container_0_Template, 5, 10, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.cart$));
        }
      },
      dependencies: [NgIf, PromotionsComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutReviewOverviewComponent, [{
    type: Component,
    args: [{
      selector: "cx-checkout-review-overview",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="cart$ | async as cart">
  <div class="cx-review-cart-total d-none d-lg-block d-xl-block">
    {{ 'cartItems.cartTotal' | cxTranslate: { count: cart.totalUnitCount } }}:
    {{ cart.totalPrice?.formattedValue }}
  </div>
  <cx-promotions
    [promotions]="
      (cart.appliedOrderPromotions || []).concat(
        cart.potentialOrderPromotions || []
      )
    "
  ></cx-promotions>
</ng-container>
`
    }]
  }], () => [{
    type: ActiveCartFacade
  }], null);
})();
var CheckoutReviewOverviewModule = class _CheckoutReviewOverviewModule {
  static {
    this.ɵfac = function CheckoutReviewOverviewModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutReviewOverviewModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutReviewOverviewModule,
      declarations: [CheckoutReviewOverviewComponent],
      imports: [CommonModule, PromotionsModule, I18nModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutReviewOverview: {
            component: CheckoutReviewOverviewComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      imports: [CommonModule, PromotionsModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutReviewOverviewModule, [{
    type: NgModule,
    args: [{
      declarations: [CheckoutReviewOverviewComponent],
      imports: [CommonModule, PromotionsModule, I18nModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutReviewOverview: {
            component: CheckoutReviewOverviewComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })]
    }]
  }], null, null);
})();
var CheckoutReviewPaymentComponent = class _CheckoutReviewPaymentComponent {
  constructor(checkoutStepService, checkoutPaymentFacade, translationService) {
    this.checkoutStepService = checkoutStepService;
    this.checkoutPaymentFacade = checkoutPaymentFacade;
    this.translationService = translationService;
    this.iconTypes = ICON_TYPE;
    this.paymentDetailsStepRoute = this.checkoutStepService.getCheckoutStepRoute(CheckoutStepType.PAYMENT_DETAILS);
    this.paymentDetails$ = this.checkoutPaymentFacade.getPaymentDetailsState().pipe(filter((state) => !state.loading && !state.error), map((state) => state.data));
    useFeatureStyles("a11yHighContrastBorders");
  }
  getPaymentMethodCard(paymentDetails) {
    return combineLatest([this.translationService.translate("paymentForm.payment"), this.translationService.translate("paymentCard.expires", {
      month: paymentDetails.expiryMonth,
      year: paymentDetails.expiryYear
    })]).pipe(map(([textTitle, textExpires]) => paymentMethodCard(textTitle, textExpires, paymentDetails)));
  }
  getBillingAddressCard(paymentDetails) {
    return combineLatest([this.translationService.translate("paymentForm.billingAddress"), this.translationService.translate("addressCard.billTo")]).pipe(map(([billingAddress, billTo]) => billingAddressCard(billingAddress, billTo, paymentDetails)));
  }
  static {
    this.ɵfac = function CheckoutReviewPaymentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutReviewPaymentComponent)(ɵɵdirectiveInject(CheckoutStepService), ɵɵdirectiveInject(CheckoutPaymentFacade), ɵɵdirectiveInject(TranslationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutReviewPaymentComponent,
      selectors: [["cx-checkout-review-payment"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["class", "cx-review-summary", 4, "ngIf"], [1, "cx-review-summary"], [1, "cx-review-summary-card", "cx-review-summary-payment-card"], [3, "content"], [1, "cx-review-summary-edit-step"], [3, "routerLink"], ["aria-hidden", "true", 3, "type"]],
      template: function CheckoutReviewPaymentComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CheckoutReviewPaymentComponent_div_0_Template, 19, 24, "div", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.paymentDetails$));
        }
      },
      dependencies: [NgIf, CardComponent, RouterLink, IconComponent, AsyncPipe, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutReviewPaymentComponent, [{
    type: Component,
    args: [{
      selector: "cx-checkout-review-payment",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  class="cx-review-summary"
  *ngIf="paymentDetails$ | async as paymentDetails"
>
  <div class="cx-review-summary-card cx-review-summary-payment-card">
    <div>
      <cx-card
        [content]="getBillingAddressCard(paymentDetails) | async"
      ></cx-card>
    </div>
    <div class="cx-review-summary-edit-step">
      <a
        [attr.title]="'checkoutReview.editBillingDetails' | cxTranslate"
        [routerLink]="{ cxRoute: paymentDetailsStepRoute } | cxUrl"
      >
        <cx-icon aria-hidden="true" [type]="iconTypes.PENCIL"></cx-icon>
      </a>
    </div>
  </div>

  <div class="cx-review-summary-card cx-review-summary-payment-card">
    <div>
      <cx-card
        [content]="getPaymentMethodCard(paymentDetails) | async"
      ></cx-card>
    </div>
    <div class="cx-review-summary-edit-step">
      <a
        [attr.title]="'checkoutReview.editPaymentDetails' | cxTranslate"
        [routerLink]="{ cxRoute: paymentDetailsStepRoute } | cxUrl"
      >
        <cx-icon aria-hidden="true" [type]="iconTypes.PENCIL"></cx-icon>
      </a>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: CheckoutStepService
  }, {
    type: CheckoutPaymentFacade
  }, {
    type: TranslationService
  }], null);
})();
var CheckoutReviewPaymentModule = class _CheckoutReviewPaymentModule {
  static {
    this.ɵfac = function CheckoutReviewPaymentModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutReviewPaymentModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutReviewPaymentModule,
      declarations: [CheckoutReviewPaymentComponent],
      imports: [CommonModule, CardModule, I18nModule, UrlModule, RouterModule, IconModule],
      exports: [CheckoutReviewPaymentComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutReviewPayment: {
            component: CheckoutReviewPaymentComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      imports: [CommonModule, CardModule, I18nModule, UrlModule, RouterModule, IconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutReviewPaymentModule, [{
    type: NgModule,
    args: [{
      declarations: [CheckoutReviewPaymentComponent],
      exports: [CheckoutReviewPaymentComponent],
      imports: [CommonModule, CardModule, I18nModule, UrlModule, RouterModule, IconModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutReviewPayment: {
            component: CheckoutReviewPaymentComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })]
    }]
  }], null, null);
})();
var CheckoutReviewShippingComponent = class _CheckoutReviewShippingComponent {
  constructor(activeCartFacade, checkoutDeliveryModesFacade, checkoutDeliveryAddressFacade, translationService, checkoutStepService) {
    this.activeCartFacade = activeCartFacade;
    this.checkoutDeliveryModesFacade = checkoutDeliveryModesFacade;
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.translationService = translationService;
    this.checkoutStepService = checkoutStepService;
    this.featureConfig = inject(FeatureConfigService);
    this.cartOutlets = CartOutlets;
    this.iconTypes = ICON_TYPE;
    this.deliveryAddressStepRoute = this.checkoutStepService.getCheckoutStepRoute(CheckoutStepType.DELIVERY_ADDRESS);
    this.deliveryModeStepRoute = this.checkoutStepService.getCheckoutStepRoute(CheckoutStepType.DELIVERY_MODE);
    this.entries$ = this.activeCartFacade.getDeliveryEntries();
    this.deliveryAddress$ = this.checkoutDeliveryAddressFacade.getDeliveryAddressState().pipe(filter((state) => !state.loading && !state.error), map((state) => state.data));
    this.deliveryMode$ = this.checkoutDeliveryModesFacade.getSelectedDeliveryModeState().pipe(filter((state) => !state.loading && !state.error), map((state) => state.data));
  }
  getDeliveryAddressCard(deliveryAddress, countryName) {
    return combineLatest([this.translationService.translate("addressCard.shipTo"), this.translationService.translate("addressCard.phoneNumber"), this.translationService.translate("addressCard.mobileNumber")]).pipe(map(([textTitle, textPhone, textMobile]) => deliveryAddressCard(textTitle, textPhone, textMobile, deliveryAddress, countryName)));
  }
  getDeliveryModeCard(deliveryMode) {
    return combineLatest([this.translationService.translate("checkoutMode.deliveryOptions")]).pipe(map(([textTitle]) => deliveryModeCard(textTitle, deliveryMode)));
  }
  static {
    this.ɵfac = function CheckoutReviewShippingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutReviewShippingComponent)(ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(CheckoutDeliveryModesFacade), ɵɵdirectiveInject(CheckoutDeliveryAddressFacade), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(CheckoutStepService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CheckoutReviewShippingComponent,
      selectors: [["cx-checkout-review-shipping"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "cx-review-header"], [1, "cx-review-summary", "cx-review-shipping-summary"], [1, "cx-review-summary-card-container"], ["class", "cx-review-summary-card cx-review-card-address", 4, "ngIf"], [1, "cx-review-summary-card", "cx-review-card-address"], [3, "content", 4, "ngIf"], [1, "cx-review-summary-edit-step"], [3, "routerLink"], ["aria-hidden", "true", 3, "type"], [1, "cx-review-cart-item"], [3, "cxOutlet", "cxOutletContext"], [3, "content"]],
      template: function CheckoutReviewShippingComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CheckoutReviewShippingComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.entries$));
        }
      },
      dependencies: [NgIf, CardComponent, RouterLink, IconComponent, OutletDirective, AsyncPipe, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutReviewShippingComponent, [{
    type: Component,
    args: [{
      selector: "cx-checkout-review-shipping",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="entries$ | async as entries">
  <ng-container *ngIf="entries.length > 0">
    <h2 class="cx-review-header">
      {{ 'checkoutMode.deliveryEntries' | cxTranslate }}
    </h2>

    <div class="cx-review-summary cx-review-shipping-summary">
      <!-- DELIVERY ADDRESS SECTION -->
      <div class="cx-review-summary-card-container">
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
                  cxRoute: deliveryAddressStepRoute,
                } | cxUrl
              "
              ><cx-icon aria-hidden="true" [type]="iconTypes.PENCIL"></cx-icon
            ></a>
          </div>
        </div>
      </div>

      <!-- DELIVERY MODE SECTION -->
      <div class="cx-review-summary-card-container">
        <div class="cx-review-summary-card cx-review-card-address">
          <cx-card
            *ngIf="deliveryMode$ | async as deliveryMode"
            [content]="getDeliveryModeCard(deliveryMode) | async"
          ></cx-card>
          <div class="cx-review-summary-edit-step">
            <a
              [attr.title]="'checkoutReview.editDeliveryMode' | cxTranslate"
              [routerLink]="{ cxRoute: deliveryModeStepRoute } | cxUrl"
            >
              <cx-icon aria-hidden="true" [type]="iconTypes.PENCIL"></cx-icon>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- CART ITEM SECTION -->
    <div class="cx-review-cart-item">
      <ng-template
        [cxOutlet]="cartOutlets.CART_ITEM_LIST"
        [cxOutletContext]="{
          items: entries,
          readonly: true,
        }"
      >
      </ng-template>
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: CheckoutDeliveryModesFacade
  }, {
    type: CheckoutDeliveryAddressFacade
  }, {
    type: TranslationService
  }, {
    type: CheckoutStepService
  }], null);
})();
var CheckoutReviewShippingModule = class _CheckoutReviewShippingModule {
  static {
    this.ɵfac = function CheckoutReviewShippingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutReviewShippingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutReviewShippingModule,
      declarations: [CheckoutReviewShippingComponent],
      imports: [CommonModule, I18nModule, CardModule, UrlModule, RouterModule, IconModule, OutletModule],
      exports: [CheckoutReviewShippingComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutReviewShipping: {
            component: CheckoutReviewShippingComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })],
      imports: [CommonModule, I18nModule, CardModule, UrlModule, RouterModule, IconModule, OutletModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutReviewShippingModule, [{
    type: NgModule,
    args: [{
      declarations: [CheckoutReviewShippingComponent],
      exports: [CheckoutReviewShippingComponent],
      imports: [CommonModule, I18nModule, CardModule, UrlModule, RouterModule, IconModule, OutletModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CheckoutReviewShipping: {
            component: CheckoutReviewShippingComponent,
            guards: [CheckoutAuthGuard, CartNotEmptyGuard]
          }
        }
      })]
    }]
  }], null, null);
})();
var CheckoutComponentsModule = class _CheckoutComponentsModule {
  static {
    this.ɵfac = function CheckoutComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutComponentsModule,
      imports: [CheckoutOrchestratorModule, CheckoutOrderSummaryModule, CheckoutProgressModule, CheckoutProgressMobileTopModule, CheckoutProgressMobileBottomModule, CheckoutDeliveryModeModule, CheckoutPaymentMethodModule, CheckoutPlaceOrderModule, CheckoutReviewSubmitModule, CheckoutReviewPaymentModule, CheckoutReviewShippingModule, CheckoutReviewOverviewModule, CheckoutDeliveryAddressModule, CheckoutLoginModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CheckoutOrchestratorModule, CheckoutOrderSummaryModule, CheckoutProgressModule, CheckoutProgressMobileTopModule, CheckoutProgressMobileBottomModule, CheckoutDeliveryModeModule, CheckoutPaymentMethodModule, CheckoutPlaceOrderModule, CheckoutReviewSubmitModule, CheckoutReviewPaymentModule, CheckoutReviewShippingModule, CheckoutReviewOverviewModule, CheckoutDeliveryAddressModule, CheckoutLoginModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [CheckoutOrchestratorModule, CheckoutOrderSummaryModule, CheckoutProgressModule, CheckoutProgressMobileTopModule, CheckoutProgressMobileBottomModule, CheckoutDeliveryModeModule, CheckoutPaymentMethodModule, CheckoutPlaceOrderModule, CheckoutReviewSubmitModule, CheckoutReviewPaymentModule, CheckoutReviewShippingModule, CheckoutReviewOverviewModule, CheckoutDeliveryAddressModule, CheckoutLoginModule]
    }]
  }], null, null);
})();

export {
  CartNotEmptyGuard,
  CheckoutConfigService,
  CheckoutAuthGuard,
  CheckoutStepService,
  CheckoutDeliveryAddressComponent,
  CheckoutDeliveryModeComponent,
  CheckoutBillingAddressFormService,
  CheckoutBillingAddressFormComponent,
  CheckoutBillingAddressFormModule,
  CheckoutPaymentMethodComponent,
  CheckoutPaymentMethodModule,
  CheckoutPlaceOrderComponent,
  CheckoutStepsSetGuard,
  CheckoutReviewSubmitComponent,
  CheckoutComponentsModule
};
//# sourceMappingURL=chunk-WVN4XMLZ.js.map
