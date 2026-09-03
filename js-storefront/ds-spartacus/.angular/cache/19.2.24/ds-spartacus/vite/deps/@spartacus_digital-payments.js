import {
  CheckoutDeliveryAddressService,
  CheckoutPaymentService
} from "./chunk-PLJ7TW6I.js";
import {
  CheckoutBillingAddressFormComponent,
  CheckoutBillingAddressFormModule,
  CheckoutBillingAddressFormService,
  CheckoutPaymentMethodComponent,
  CheckoutPaymentMethodModule,
  CheckoutStepService
} from "./chunk-WVN4XMLZ.js";
import "./chunk-X6DUCLWC.js";
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
  DIALOG_TYPE,
  FocusDirective,
  ICON_TYPE,
  IconComponent,
  IconModule,
  KeyboardFocusModule,
  LAUNCH_CALLER,
  LaunchDialogService,
  SpinnerComponent,
  SpinnerModule
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  CommandService,
  CommandStrategy,
  Config,
  ConfigModule,
  ConverterService,
  FeaturesConfigModule,
  GlobalMessageService,
  GlobalMessageType,
  HttpParamsURIEncoder,
  I18nModule,
  OCC_USER_ID_ANONYMOUS,
  OccEndpointsService,
  QueryService,
  StatePersistenceService,
  TranslatePipe,
  TranslationService,
  UserIdService,
  UserPaymentService,
  WindowRef,
  provideDefaultConfig
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-EBCNDD52.js";
import {
  NgSelectModule
} from "./chunk-YMQEGXEG.js";
import "./chunk-6KXUHIAW.js";
import "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-2A6OHZCE.js";
import {
  ReactiveFormsModule
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injectable,
  InjectionToken,
  NgModule,
  Output,
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
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  combineLatest,
  map,
  of,
  take
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/digital-payments/fesm2022/spartacus-digital-payments.mjs
function DpPaymentCallbackComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-checkout-billing-address-form");
    ɵɵelementStart(2, "div", 2)(3, "div", 3)(4, "button", 4);
    ɵɵlistener("click", function DpPaymentCallbackComponent_ng_container_0_Template_button_click_4_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.back());
    });
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(7, "div", 3)(8, "button", 5);
    ɵɵlistener("click", function DpPaymentCallbackComponent_ng_container_0_Template_button_click_8_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.next());
    });
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 2, "common.back"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 4, "common.continue"), " ");
  }
}
function DpPaymentCallbackComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 7);
    ɵɵelement(4, "cx-spinner");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "dpPaymentForm.callback"));
  }
}
function DpPaymentMethodComponent_ng_container_0_ng_container_4_ng_container_1_ng_container_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 14)(1, "div", 15)(2, "cx-card", 16);
    ɵɵlistener("sendCard", function DpPaymentMethodComponent_ng_container_0_ng_container_4_ng_container_1_ng_container_1_div_10_Template_cx_card_sendCard_2_listener() {
      const card_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r1.selectPaymentMethod(card_r4.paymentMethod));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const card_r4 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵproperty("border", true)("fitToContainer", true)("content", card_r4.content);
  }
}
function DpPaymentMethodComponent_ng_container_0_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "p", 6);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 7)(5, "div", 8)(6, "button", 9);
    ɵɵlistener("click", function DpPaymentMethodComponent_ng_container_0_ng_container_4_ng_container_1_ng_container_1_Template_button_click_6_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.showNewPaymentForm());
    });
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementStart(9, "div", 10);
    ɵɵtemplate(10, DpPaymentMethodComponent_ng_container_0_ng_container_4_ng_container_1_ng_container_1_div_10_Template, 3, 3, "div", 11);
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 12)(12, "div", 8)(13, "button", 9);
    ɵɵlistener("click", function DpPaymentMethodComponent_ng_container_0_ng_container_4_ng_container_1_ng_container_1_Template_button_click_13_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.back());
    });
    ɵɵtext(14);
    ɵɵpipe(15, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(16, "div", 8)(17, "button", 13);
    ɵɵpipe(18, "async");
    ɵɵlistener("click", function DpPaymentMethodComponent_ng_container_0_ng_container_4_ng_container_1_ng_container_1_Template_button_click_17_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.next());
    });
    ɵɵtext(19);
    ɵɵpipe(20, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const cards_r5 = ɵɵnextContext(3).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 6, "paymentForm.choosePaymentMethod"), " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 8, "paymentForm.addNewPayment"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", cards_r5);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 10, ctx_r1.backBtnText), " ");
    ɵɵadvance(3);
    ɵɵproperty("disabled", !((tmp_12_0 = ɵɵpipeBind1(18, 12, ctx_r1.selectedMethod$)) == null ? null : tmp_12_0.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 14, "common.continue"), " ");
  }
}
function DpPaymentMethodComponent_ng_container_0_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DpPaymentMethodComponent_ng_container_0_ng_container_4_ng_container_1_ng_container_1_Template, 21, 16, "ng-container", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const newPaymentForm_r6 = ɵɵreference(4);
    const cards_r5 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", (cards_r5 == null ? null : cards_r5.length) && !ctx_r1.newPaymentFormManuallyOpened)("ngIfElse", newPaymentForm_r6);
  }
}
function DpPaymentMethodComponent_ng_container_0_ng_container_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-dp-payment-form", 17);
    ɵɵlistener("setPaymentDetails", function DpPaymentMethodComponent_ng_container_0_ng_container_4_ng_template_3_Template_cx_dp_payment_form_setPaymentDetails_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setPaymentDetails($event));
    })("closeForm", function DpPaymentMethodComponent_ng_container_0_ng_container_4_ng_template_3_Template_cx_dp_payment_form_closeForm_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.hideNewPaymentForm());
    });
    ɵɵelementEnd();
  }
}
function DpPaymentMethodComponent_ng_container_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DpPaymentMethodComponent_ng_container_0_ng_container_4_ng_container_1_Template, 2, 2, "ng-container", 5);
    ɵɵpipe(2, "async");
    ɵɵtemplate(3, DpPaymentMethodComponent_ng_container_0_ng_container_4_ng_template_3_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const loading_r8 = ɵɵreference(6);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ɵɵpipeBind1(2, 2, ctx_r1.isUpdating$))("ngIfElse", loading_r8);
  }
}
function DpPaymentMethodComponent_ng_container_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
function DpPaymentMethodComponent_ng_container_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-dp-payment-callback", 19);
    ɵɵlistener("paymentDetailsAdded", function DpPaymentMethodComponent_ng_container_0_ng_template_7_Template_cx_dp_payment_callback_paymentDetailsAdded_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.paymentDetailsAdded($event));
    })("closeCallback", function DpPaymentMethodComponent_ng_container_0_ng_template_7_Template_cx_dp_payment_callback_closeCallback_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.hideCallbackScreen());
    });
    ɵɵelementEnd();
  }
}
function DpPaymentMethodComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "h3", 4);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(4, DpPaymentMethodComponent_ng_container_0_ng_container_4_Template, 5, 4, "ng-container", 5)(5, DpPaymentMethodComponent_ng_container_0_ng_template_5_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(7, DpPaymentMethodComponent_ng_container_0_ng_template_7_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const loadingPaymentDetails_r10 = ɵɵreference(8);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "paymentForm.payment"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.showCallbackScreen)("ngIfElse", loadingPaymentDetails_r10);
  }
}
var occDigitalPaymentsEndpoints = {
  paymentRequest: "users/${userId}/carts/${cartId}/payment/digitalPayments/request",
  paymentDetails: "users/${userId}/carts/${cartId}/payment/digitalPayments/response"
};
var occDigitalPaymentsConfig = {
  backend: {
    occ: {
      endpoints: __spreadValues({}, occDigitalPaymentsEndpoints)
    }
  }
};
var DigitalPaymentsConfig = class _DigitalPaymentsConfig {
  static {
    this.ɵfac = function DigitalPaymentsConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DigitalPaymentsConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DigitalPaymentsConfig,
      factory: function DigitalPaymentsConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _DigitalPaymentsConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DigitalPaymentsConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var DP_DETAILS_NORMALIZER = new InjectionToken("DpDetailsNormalizer");
var DP_REQUEST_NORMALIZER = new InjectionToken("DpRequestNormalizer");
var DigitalPaymentsAdapter = class {
};
var OccDpDetailsNormalizer = class _OccDpDetailsNormalizer {
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    return target;
  }
  static {
    this.ɵfac = function OccDpDetailsNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccDpDetailsNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccDpDetailsNormalizer,
      factory: _OccDpDetailsNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccDpDetailsNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OccDpRequestNormalizer = class _OccDpRequestNormalizer {
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    target.url = source.postUrl;
    target.sessionId = source?.parameters?.entry?.find((it) => it.key === "session_id")?.value;
    target.signature = source?.parameters?.entry?.find((it) => it.key === "signature")?.value;
    return target;
  }
  static {
    this.ɵfac = function OccDpRequestNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccDpRequestNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccDpRequestNormalizer,
      factory: _OccDpRequestNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccDpRequestNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CURRENT_CART = "current";
var DP_CARD_REGISTRATION_STATUS = "x-card-registration-status";
var OccDigitalPaymentsAdapter = class _OccDigitalPaymentsAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.paramEncoder = new HttpParamsURIEncoder();
    this.config = inject(DigitalPaymentsConfig);
  }
  createPaymentRequest(userId, cartId = CURRENT_CART) {
    const url = this.occEndpoints.buildUrl("paymentRequest", {
      urlParams: {
        userId,
        cartId
      }
    });
    return this.http.post(url, null).pipe(this.converter.pipeable(DP_REQUEST_NORMALIZER));
  }
  createPaymentDetails(sessionId, signature, userId, cartId = CURRENT_CART, billingAddress) {
    const params = this.getDpHttpParams(sessionId, signature, billingAddress);
    const url = this.occEndpoints.buildUrl("paymentDetails", {
      urlParams: {
        userId,
        cartId
      }
    });
    return this.http.post(url, null, {
      params
    }).pipe(this.converter.pipeable(DP_DETAILS_NORMALIZER));
  }
  getDpHttpParams(sessionId, signature, billingAddress) {
    let params = new HttpParams({
      encoder: this.paramEncoder
    });
    const paramName = this.config.digitalPayments?.occQueryParams;
    params = this.appendParam(params, paramName?.sessionId, sessionId);
    params = this.appendParam(params, paramName?.signature, signature);
    if (billingAddress && paramName) {
      params = this.appendBillingAddressParams(params, paramName, billingAddress);
    }
    return params;
  }
  appendParam(params, paramName, paramValue) {
    if (paramName && paramValue) {
      params = params.append(paramName, paramValue);
    }
    return params;
  }
  appendBillingAddressParams(params, paramName, billingAddress) {
    params = this.appendParam(params, paramName.billingAddress, "true");
    params = this.appendParam(params, paramName.country, billingAddress.country?.isocode);
    params = this.appendParam(params, paramName.firstName, billingAddress.firstName);
    params = this.appendParam(params, paramName.lastName, billingAddress.lastName);
    params = this.appendParam(params, paramName.line1, billingAddress.line1);
    params = this.appendParam(params, paramName.line2, billingAddress.line2);
    params = this.appendParam(params, paramName.town, billingAddress.town);
    params = this.appendParam(params, paramName.region, billingAddress.region?.isocodeShort);
    params = this.appendParam(params, paramName.postalCode, billingAddress.postalCode);
    return params;
  }
  static {
    this.ɵfac = function OccDigitalPaymentsAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccDigitalPaymentsAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccDigitalPaymentsAdapter,
      factory: _OccDigitalPaymentsAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccDigitalPaymentsAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var defaultDigitalPaymentsConfig = {
  digitalPayments: {
    occQueryParams: {
      sessionId: "sid",
      signature: "sign",
      billingAddress: "billingAddress",
      country: "country",
      firstName: "firstName",
      lastName: "lastName",
      line1: "line1",
      line2: "line2",
      town: "town",
      region: "region",
      postalCode: "postalCode"
    }
  }
};
var DpCheckoutPaymentService = class _DpCheckoutPaymentService {
  constructor(dpAdapter, command, query, userIdService) {
    this.dpAdapter = dpAdapter;
    this.command = command;
    this.query = query;
    this.userIdService = userIdService;
    this.activeCartFacade = inject(ActiveCartFacade);
    this.RequestUrlQuery = this.query.create(() => {
      return this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => this.dpAdapter.createPaymentRequest(userId, cartId)));
    });
    this.createPaymentDetailsCommand = this.command.create((payload) => this.checkoutPreconditions().pipe(switchMap(([userId, cartId]) => {
      return this.dpAdapter.createPaymentDetails(payload.sessionId, payload.signature, userId, cartId, payload?.billingAddress);
    })), {
      strategy: CommandStrategy.Queue
    });
  }
  getCardRegistrationDetails() {
    return this.RequestUrlQuery.getState().pipe(map((state) => {
      if (state.loading === false && state.error !== false) {
        throw new Error(state.error.message);
      } else {
        return state.data;
      }
    }));
  }
  createPaymentDetails(sessionId, signature, billingAddress) {
    return this.createPaymentDetailsCommand.execute({
      sessionId,
      signature,
      billingAddress
    });
  }
  /**
   * Performs the necessary checkout preconditions.
   */
  checkoutPreconditions() {
    return combineLatest([this.userIdService.takeUserId(), this.activeCartFacade.takeActiveCartId(), this.activeCartFacade.isGuestCart()]).pipe(take(1), map(([userId, cartId, isGuestCart]) => {
      if (!userId || !cartId || userId === OCC_USER_ID_ANONYMOUS && !isGuestCart) {
        throw new Error("Checkout conditions not met");
      }
      return [userId, cartId];
    }));
  }
  static {
    this.ɵfac = function DpCheckoutPaymentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DpCheckoutPaymentService)(ɵɵinject(DigitalPaymentsAdapter), ɵɵinject(CommandService), ɵɵinject(QueryService), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DpCheckoutPaymentService,
      factory: _DpCheckoutPaymentService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpCheckoutPaymentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: DigitalPaymentsAdapter
  }, {
    type: CommandService
  }, {
    type: QueryService
  }, {
    type: UserIdService
  }], null);
})();
var KEY = "digital-payment.checkout.request";
var DpLocalStorageService = class _DpLocalStorageService {
  constructor(statePersistenceService) {
    this.statePersistenceService = statePersistenceService;
    this.subscription = new Subscription();
  }
  syncCardRegistrationState(request) {
    this.subscription.add(this.statePersistenceService.syncWithStorage({
      key: KEY,
      state$: of(request)
    }));
  }
  readCardRegistrationState() {
    const paymentRequest = this.statePersistenceService.readStateFromStorage({
      key: KEY
    });
    this.clearDpStorage();
    return paymentRequest;
  }
  clearDpStorage() {
    this.statePersistenceService.syncWithStorage({
      key: KEY,
      state$: of({})
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function DpLocalStorageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DpLocalStorageService)(ɵɵinject(StatePersistenceService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DpLocalStorageService,
      factory: _DpLocalStorageService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpLocalStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: StatePersistenceService
  }], null);
})();
var DpPaymentCallbackComponent = class _DpPaymentCallbackComponent {
  constructor(dpPaymentService, dpStorageService, globalMsgService, route) {
    this.dpPaymentService = dpPaymentService;
    this.dpStorageService = dpStorageService;
    this.globalMsgService = globalMsgService;
    this.route = route;
    this.closeCallback = new EventEmitter();
    this.paymentDetailsAdded = new EventEmitter();
    this.billingAddressService = inject(CheckoutBillingAddressFormService);
    this.launchDialogService = inject(LaunchDialogService);
    this.showBillingAddressForm = false;
  }
  ngOnInit() {
    const dpResponse = this.route.snapshot.queryParamMap.get(DP_CARD_REGISTRATION_STATUS);
    if (dpResponse?.toLowerCase() === "successful") {
      this.showBillingAddressForm = true;
    } else {
      this.globalMsgService.add({
        key: "dpPaymentForm.cancelledOrFailed"
      }, GlobalMessageType.MSG_TYPE_WARNING);
      this.closeCallback.emit();
    }
  }
  back() {
    const dialog = this.launchDialogService.openDialog(LAUNCH_CALLER.DP_SHOW_CONFIRMATION_DIALOG, void 0, void 0);
    if (dialog) {
      dialog.pipe(take(1)).subscribe((result) => {
        if (result.instance.cardSaveCancelled === true) {
          this.globalMsgService.add({
            key: "dpPaymentForm.cancelledOrFailed"
          }, GlobalMessageType.MSG_TYPE_WARNING);
          this.closeCallback.emit();
        }
      });
    }
  }
  next() {
    if (this.billingAddressService.isBillingAddressSameAsDeliveryAddress() || this.billingAddressService.isBillingAddressFormValid()) {
      const billingAddress = this.billingAddressService.getBillingAddress();
      this.fetchPaymentDetails(billingAddress);
    } else {
      this.billingAddressService.markAllAsTouched();
    }
  }
  fetchPaymentDetails(billingAddress) {
    const paymentRequest = this.dpStorageService.readCardRegistrationState();
    if (paymentRequest?.sessionId && paymentRequest?.signature) {
      this.dpPaymentService.createPaymentDetails(paymentRequest.sessionId, paymentRequest.signature, billingAddress).subscribe((details) => {
        if (details?.id) {
          this.paymentDetailsAdded.emit(details);
        } else if (details) {
          this.globalMsgService.add({
            key: "dpPaymentForm.error.paymentFetch"
          }, GlobalMessageType.MSG_TYPE_ERROR);
          this.closeCallback.emit();
        }
      });
    } else {
      this.globalMsgService.add({
        key: "dpPaymentForm.error.unknown"
      }, GlobalMessageType.MSG_TYPE_ERROR);
      this.closeCallback.emit();
    }
  }
  static {
    this.ɵfac = function DpPaymentCallbackComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DpPaymentCallbackComponent)(ɵɵdirectiveInject(DpCheckoutPaymentService), ɵɵdirectiveInject(DpLocalStorageService), ɵɵdirectiveInject(GlobalMessageService), ɵɵdirectiveInject(ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DpPaymentCallbackComponent,
      selectors: [["cx-dp-payment-callback"]],
      outputs: {
        closeCallback: "closeCallback",
        paymentDetailsAdded: "paymentDetailsAdded"
      },
      standalone: false,
      decls: 3,
      vars: 2,
      consts: [["showSpinner", ""], [4, "ngIf", "ngIfElse"], [1, "cx-checkout-btns", "row"], [1, "col-md-12", "col-lg-6"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "btn", "btn-block", "btn-primary", 3, "click"], [1, "text-center"], [1, "cx-spinner"]],
      template: function DpPaymentCallbackComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, DpPaymentCallbackComponent_ng_container_0_Template, 11, 6, "ng-container", 1)(1, DpPaymentCallbackComponent_ng_template_1_Template, 5, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const showSpinner_r3 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.showBillingAddressForm)("ngIfElse", showSpinner_r3);
        }
      },
      dependencies: [NgIf, SpinnerComponent, CheckoutBillingAddressFormComponent, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpPaymentCallbackComponent, [{
    type: Component,
    args: [{
      selector: "cx-dp-payment-callback",
      standalone: false,
      template: `<ng-container *ngIf="this.showBillingAddressForm; else showSpinner">
  <cx-checkout-billing-address-form></cx-checkout-billing-address-form>

  <!-- BUTTON SECTION -->
  <div class="cx-checkout-btns row">
    <div class="col-md-12 col-lg-6">
      <button class="btn btn-block btn-secondary" (click)="back()">
        {{ 'common.back' | cxTranslate }}
      </button>
    </div>
    <div class="col-md-12 col-lg-6">
      <button class="btn btn-block btn-primary" (click)="next()">
        {{ 'common.continue' | cxTranslate }}
      </button>
    </div>
  </div>
</ng-container>

<ng-template #showSpinner>
  <div class="text-center">{{ 'dpPaymentForm.callback' | cxTranslate }}</div>
  <div class="cx-spinner"><cx-spinner></cx-spinner></div>
</ng-template>
`
    }]
  }], () => [{
    type: DpCheckoutPaymentService
  }, {
    type: DpLocalStorageService
  }, {
    type: GlobalMessageService
  }, {
    type: ActivatedRoute
  }], {
    closeCallback: [{
      type: Output
    }],
    paymentDetailsAdded: [{
      type: Output
    }]
  });
})();
var DpConfirmationDialogComponent = class _DpConfirmationDialogComponent {
  constructor() {
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button",
      focusOnEscape: true
    };
    this.iconTypes = ICON_TYPE;
    this.launchDialogService = inject(LaunchDialogService);
    this.activatedRoute = inject(ActivatedRoute);
    this.router = inject(Router);
    this.cardSaveCancelled = false;
  }
  dismissDialog(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  continue() {
    const queryParams = __spreadValues({}, this.activatedRoute.snapshot.queryParams);
    delete queryParams[DP_CARD_REGISTRATION_STATUS];
    this.router.navigate([], {
      queryParams,
      relativeTo: this.activatedRoute
    });
    this.cardSaveCancelled = true;
    this.launchDialogService.closeDialog("continue clicked");
  }
  static {
    this.ɵfac = function DpConfirmationDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DpConfirmationDialogComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DpConfirmationDialogComponent,
      selectors: [["cx-dp-confirmation-dialog"]],
      standalone: false,
      decls: 23,
      vars: 20,
      consts: [["role", "dialog", "aria-modal", "true", "aria-labelledby", "dialogTitle", 1, "cx-modal-container", 3, "esc", "cxFocus"], [1, "cx-modal-content"], [1, "cx-dialog-header", "modal-header"], ["id", "dialogTitle", 1, "cx-dialog-title", "modal-title"], ["type", "button", 1, "close", 3, "click", "title"], ["aria-hidden", "true"], [3, "type"], [1, "cx-dialog-body", "modal-body"], [1, "cx-dialog-row"], [1, "cx-dialog-actions", "col-sm-12", "col-md-6"], [1, "cx-dialog-buttons"], ["autofocus", "", 1, "btn", "btn-primary", 3, "click"], ["autofocus", "", 1, "link", "cx-action-link", 3, "click"]],
      template: function DpConfirmationDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵlistener("esc", function DpConfirmationDialogComponent_Template_div_esc_0_listener() {
            return ctx.dismissDialog("Escape clicked");
          });
          ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "h3", 3);
          ɵɵtext(4);
          ɵɵpipe(5, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(6, "button", 4);
          ɵɵpipe(7, "cxTranslate");
          ɵɵpipe(8, "cxTranslate");
          ɵɵlistener("click", function DpConfirmationDialogComponent_Template_button_click_6_listener() {
            return ctx.dismissDialog("Cross click");
          });
          ɵɵelementStart(9, "span", 5);
          ɵɵelement(10, "cx-icon", 6);
          ɵɵelementEnd()()();
          ɵɵelementStart(11, "div", 7)(12, "div", 8);
          ɵɵtext(13);
          ɵɵpipe(14, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(15, "div", 9)(16, "div", 10)(17, "button", 11);
          ɵɵlistener("click", function DpConfirmationDialogComponent_Template_button_click_17_listener() {
            return ctx.continue();
          });
          ɵɵtext(18);
          ɵɵpipe(19, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(20, "button", 12);
          ɵɵlistener("click", function DpConfirmationDialogComponent_Template_button_click_20_listener() {
            return ctx.dismissDialog("cancel clicked");
          });
          ɵɵtext(21);
          ɵɵpipe(22, "cxTranslate");
          ɵɵelementEnd()()()()();
        }
        if (rf & 2) {
          ɵɵproperty("cxFocus", ctx.focusConfig);
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 8, "dpPaymentForm.confirmation.heading"), " ");
          ɵɵadvance(2);
          ɵɵpropertyInterpolate("title", ɵɵpipeBind1(7, 10, "common.close"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(8, 12, "common.close"));
          ɵɵadvance(4);
          ɵɵproperty("type", ctx.iconTypes.CLOSE);
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(14, 14, "dpPaymentForm.confirmation.text"), " ");
          ɵɵadvance(5);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(19, 16, "common.continue"), " ");
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(22, 18, "common.cancel"), " ");
        }
      },
      dependencies: [FocusDirective, IconComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpConfirmationDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-dp-confirmation-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  class="cx-modal-container"
  [cxFocus]="focusConfig"
  (esc)="dismissDialog('Escape clicked')"
  role="dialog"
  aria-modal="true"
  aria-labelledby="dialogTitle"
>
  <div class="cx-modal-content">
    <!-- Modal Header -->
    <div class="cx-dialog-header modal-header">
      <h3 id="dialogTitle" class="cx-dialog-title modal-title">
        {{ 'dpPaymentForm.confirmation.heading' | cxTranslate }}
      </h3>
      <button
        type="button"
        class="close"
        title="{{ 'common.close' | cxTranslate }}"
        [attr.aria-label]="'common.close' | cxTranslate"
        (click)="dismissDialog('Cross click')"
      >
        <span aria-hidden="true">
          <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
        </span>
      </button>
    </div>
    <!-- Modal Body -->
    <div class="cx-dialog-body modal-body">
      <div class="cx-dialog-row">
        {{ 'dpPaymentForm.confirmation.text' | cxTranslate }}
      </div>
    </div>
    <div class="cx-dialog-actions col-sm-12 col-md-6">
      <div class="cx-dialog-buttons">
        <button (click)="continue()" class="btn btn-primary" autofocus>
          {{ 'common.continue' | cxTranslate }}
        </button>
        <button
          class="link cx-action-link"
          (click)="dismissDialog('cancel clicked')"
          autofocus
        >
          {{ 'common.cancel' | cxTranslate }}
        </button>
      </div>
    </div>
  </div>
</div>
`
    }]
  }], null, null);
})();
var defaultDpConfirmationDialogConfig = {
  launch: {
    DP_SHOW_CONFIRMATION_DIALOG: {
      inlineRoot: true,
      component: DpConfirmationDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var DpConfirmationDialogModule = class _DpConfirmationDialogModule {
  static {
    this.ɵfac = function DpConfirmationDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DpConfirmationDialogModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _DpConfirmationDialogModule,
      declarations: [DpConfirmationDialogComponent],
      imports: [CommonModule, I18nModule, KeyboardFocusModule, IconModule, FeaturesConfigModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultDpConfirmationDialogConfig)],
      imports: [CommonModule, I18nModule, KeyboardFocusModule, IconModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpConfirmationDialogModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, KeyboardFocusModule, IconModule, FeaturesConfigModule],
      providers: [provideDefaultConfig(defaultDpConfirmationDialogConfig)],
      declarations: [DpConfirmationDialogComponent]
    }]
  }], null, null);
})();
var DpPaymentCallbackModule = class _DpPaymentCallbackModule {
  static {
    this.ɵfac = function DpPaymentCallbackModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DpPaymentCallbackModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _DpPaymentCallbackModule,
      declarations: [DpPaymentCallbackComponent],
      imports: [CommonModule, SpinnerModule, I18nModule, CheckoutBillingAddressFormModule, FeaturesConfigModule, DpConfirmationDialogModule],
      exports: [DpPaymentCallbackComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, SpinnerModule, I18nModule, CheckoutBillingAddressFormModule, FeaturesConfigModule, DpConfirmationDialogModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpPaymentCallbackModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SpinnerModule, I18nModule, CheckoutBillingAddressFormModule, FeaturesConfigModule, DpConfirmationDialogModule],
      declarations: [DpPaymentCallbackComponent],
      exports: [DpPaymentCallbackComponent]
    }]
  }], null, null);
})();
var DpPaymentFormComponent = class _DpPaymentFormComponent {
  constructor(dpPaymentService, dpStorageService, globalMsgService, winRef) {
    this.dpPaymentService = dpPaymentService;
    this.dpStorageService = dpStorageService;
    this.globalMsgService = globalMsgService;
    this.winRef = winRef;
    this.closeForm = new EventEmitter();
  }
  ngOnInit() {
    this.dpPaymentService.getCardRegistrationDetails().subscribe((dpPaymentRequest) => {
      if (dpPaymentRequest?.url) {
        this.dpStorageService.syncCardRegistrationState(dpPaymentRequest);
        this.redirect(dpPaymentRequest.url);
      } else if (dpPaymentRequest) {
        this.globalMsgService.add({
          key: "dpPaymentForm.error.redirect"
        }, GlobalMessageType.MSG_TYPE_ERROR);
        this.closeForm.emit();
      }
    });
  }
  redirect(url) {
    const window = this.winRef.nativeWindow;
    if (window?.location) {
      window.location.href = url;
    }
  }
  static {
    this.ɵfac = function DpPaymentFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DpPaymentFormComponent)(ɵɵdirectiveInject(DpCheckoutPaymentService), ɵɵdirectiveInject(DpLocalStorageService), ɵɵdirectiveInject(GlobalMessageService), ɵɵdirectiveInject(WindowRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DpPaymentFormComponent,
      selectors: [["cx-dp-payment-form"]],
      outputs: {
        closeForm: "closeForm"
      },
      standalone: false,
      decls: 5,
      vars: 3,
      consts: [[1, "text-center"], [1, "cx-spinner"]],
      template: function DpPaymentFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtext(1);
          ɵɵpipe(2, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(3, "div", 1);
          ɵɵelement(4, "cx-spinner");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "dpPaymentForm.redirect"));
        }
      },
      dependencies: [SpinnerComponent, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpPaymentFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-dp-payment-form",
      standalone: false,
      template: `<div class="text-center">{{ 'dpPaymentForm.redirect' | cxTranslate }}</div>
<div class="cx-spinner"><cx-spinner></cx-spinner></div>
`
    }]
  }], () => [{
    type: DpCheckoutPaymentService
  }, {
    type: DpLocalStorageService
  }, {
    type: GlobalMessageService
  }, {
    type: WindowRef
  }], {
    closeForm: [{
      type: Output
    }]
  });
})();
var DpPaymentFormModule = class _DpPaymentFormModule {
  static {
    this.ɵfac = function DpPaymentFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DpPaymentFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _DpPaymentFormModule,
      declarations: [DpPaymentFormComponent],
      imports: [CommonModule, ReactiveFormsModule, NgSelectModule, I18nModule, SpinnerModule],
      exports: [DpPaymentFormComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, ReactiveFormsModule, NgSelectModule, I18nModule, SpinnerModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpPaymentFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, NgSelectModule, I18nModule, SpinnerModule],
      declarations: [DpPaymentFormComponent],
      exports: [DpPaymentFormComponent]
    }]
  }], null, null);
})();
var DpPaymentMethodComponent = class _DpPaymentMethodComponent extends CheckoutPaymentMethodComponent {
  isDpCallback() {
    const queryParams = this.activatedRoute.snapshot.queryParamMap.get(DP_CARD_REGISTRATION_STATUS);
    return !!queryParams;
  }
  hideCallbackScreen() {
    this.showCallbackScreen = false;
  }
  paymentDetailsAdded(paymentDetails) {
    this.savePaymentMethod(paymentDetails);
  }
  onSuccess() {
    super.onSuccess();
    this.next();
  }
  // TODO:#checkout - handle breaking changes
  constructor(userPaymentService, checkoutDeliveryAddressFacade, checkoutPaymentFacade, activatedRoute, translationService, activeCartFacade, checkoutStepService, globalMessageService) {
    super(userPaymentService, checkoutDeliveryAddressFacade, checkoutPaymentFacade, activatedRoute, translationService, activeCartFacade, checkoutStepService, globalMessageService);
    this.userPaymentService = userPaymentService;
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.checkoutPaymentFacade = checkoutPaymentFacade;
    this.activatedRoute = activatedRoute;
    this.translationService = translationService;
    this.activeCartFacade = activeCartFacade;
    this.checkoutStepService = checkoutStepService;
    this.globalMessageService = globalMessageService;
    this.showCallbackScreen = false;
    this.showCallbackScreen = this.isDpCallback();
  }
  static {
    this.ɵfac = function DpPaymentMethodComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DpPaymentMethodComponent)(ɵɵdirectiveInject(UserPaymentService), ɵɵdirectiveInject(CheckoutDeliveryAddressService), ɵɵdirectiveInject(CheckoutPaymentService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(CheckoutStepService), ɵɵdirectiveInject(GlobalMessageService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DpPaymentMethodComponent,
      selectors: [["cx-payment-method"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 2,
      vars: 3,
      consts: [["loading", ""], ["loadingPaymentDetails", ""], ["newPaymentForm", ""], [4, "ngIf"], [1, "cx-checkout-title", "d-none", "d-lg-block", "d-xl-block"], [4, "ngIf", "ngIfElse"], [1, "cx-checkout-text"], [1, "cx-checkout-btns", "row"], [1, "col-md-12", "col-lg-6"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "cx-checkout-body", "row"], ["class", "cx-payment-card col-md-12 col-lg-6", 4, "ngFor", "ngForOf"], [1, "row", "cx-checkout-btns"], [1, "btn", "btn-block", "btn-primary", 3, "click", "disabled"], [1, "cx-payment-card", "col-md-12", "col-lg-6"], [1, "cx-payment-card-inner"], [3, "sendCard", "border", "fitToContainer", "content"], [3, "setPaymentDetails", "closeForm"], [1, "cx-spinner"], [3, "paymentDetailsAdded", "closeCallback"]],
      template: function DpPaymentMethodComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, DpPaymentMethodComponent_ng_container_0_Template, 9, 5, "ng-container", 3);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.cards$));
        }
      },
      dependencies: [NgForOf, NgIf, DpPaymentFormComponent, CardComponent, SpinnerComponent, DpPaymentCallbackComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpPaymentMethodComponent, [{
    type: Component,
    args: [{
      selector: "cx-payment-method",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<!-- Copied from core module except #newPaymentForm -->
<ng-container *ngIf="cards$ | async as cards">
  <h3 class="cx-checkout-title d-none d-lg-block d-xl-block">
    {{ 'paymentForm.payment' | cxTranslate }}
  </h3>
  <ng-container *ngIf="!showCallbackScreen; else loadingPaymentDetails">
    <ng-container *ngIf="!(isUpdating$ | async); else loading">
      <ng-container
        *ngIf="
          cards?.length && !newPaymentFormManuallyOpened;
          else newPaymentForm
        "
      >
        <p class="cx-checkout-text">
          {{ 'paymentForm.choosePaymentMethod' | cxTranslate }}
        </p>
        <div class="cx-checkout-btns row">
          <div class="col-md-12 col-lg-6">
            <button
              class="btn btn-block btn-secondary"
              (click)="showNewPaymentForm()"
            >
              {{ 'paymentForm.addNewPayment' | cxTranslate }}
            </button>
          </div>
        </div>

        <div class="cx-checkout-body row">
          <div
            class="cx-payment-card col-md-12 col-lg-6"
            *ngFor="let card of cards; let i = index"
          >
            <div class="cx-payment-card-inner">
              <cx-card
                [border]="true"
                [fitToContainer]="true"
                [content]="card.content"
                (sendCard)="selectPaymentMethod(card.paymentMethod)"
              ></cx-card>
            </div>
          </div>
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
      </ng-container>
    </ng-container>

    <ng-template #newPaymentForm>
      <cx-dp-payment-form
        (setPaymentDetails)="setPaymentDetails($event)"
        (closeForm)="hideNewPaymentForm()"
      ></cx-dp-payment-form>
    </ng-template>
  </ng-container>

  <ng-template #loading>
    <div class="cx-spinner"><cx-spinner></cx-spinner></div>
  </ng-template>

  <ng-template #loadingPaymentDetails>
    <cx-dp-payment-callback
      (paymentDetailsAdded)="paymentDetailsAdded($event)"
      (closeCallback)="hideCallbackScreen()"
    ></cx-dp-payment-callback>
  </ng-template>
</ng-container>
`
    }]
  }], () => [{
    type: UserPaymentService
  }, {
    type: CheckoutDeliveryAddressService
  }, {
    type: CheckoutPaymentService
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
  }], null);
})();
var DpPaymentMethodModule = class _DpPaymentMethodModule extends CheckoutPaymentMethodModule {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDpPaymentMethodModule_BaseFactory;
      return function DpPaymentMethodModule_Factory(__ngFactoryType__) {
        return (ɵDpPaymentMethodModule_BaseFactory || (ɵDpPaymentMethodModule_BaseFactory = ɵɵgetInheritedFactory(_DpPaymentMethodModule)))(__ngFactoryType__ || _DpPaymentMethodModule);
      };
    })();
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _DpPaymentMethodModule,
      declarations: [DpPaymentMethodComponent],
      imports: [CommonModule, DpPaymentFormModule, RouterModule, CardModule, SpinnerModule, I18nModule, DpPaymentCallbackModule, ConfigModule, FeaturesConfigModule],
      exports: [DpPaymentMethodComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultDigitalPaymentsConfig)],
      imports: [CommonModule, DpPaymentFormModule, RouterModule, CardModule, SpinnerModule, I18nModule, DpPaymentCallbackModule, ConfigModule.withConfig({
        cmsComponents: {
          CheckoutPaymentDetails: {
            component: DpPaymentMethodComponent
          }
        }
      }), FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpPaymentMethodModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, DpPaymentFormModule, RouterModule, CardModule, SpinnerModule, I18nModule, DpPaymentCallbackModule, ConfigModule.withConfig({
        cmsComponents: {
          CheckoutPaymentDetails: {
            component: DpPaymentMethodComponent
          }
        }
      }), FeaturesConfigModule],
      declarations: [DpPaymentMethodComponent],
      exports: [DpPaymentMethodComponent],
      providers: [provideDefaultConfig(defaultDigitalPaymentsConfig)]
    }]
  }], null, null);
})();
var DpCheckoutModule = class _DpCheckoutModule {
  static {
    this.ɵfac = function DpCheckoutModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DpCheckoutModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _DpCheckoutModule,
      imports: [DpPaymentMethodModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: DigitalPaymentsAdapter,
        useClass: OccDigitalPaymentsAdapter
      }, {
        provide: DP_DETAILS_NORMALIZER,
        useExisting: OccDpDetailsNormalizer,
        multi: true
      }, {
        provide: DP_REQUEST_NORMALIZER,
        useExisting: OccDpRequestNormalizer,
        multi: true
      }, DpCheckoutPaymentService, provideDefaultConfig(occDigitalPaymentsConfig)],
      imports: [DpPaymentMethodModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpCheckoutModule, [{
    type: NgModule,
    args: [{
      imports: [DpPaymentMethodModule],
      providers: [{
        provide: DigitalPaymentsAdapter,
        useClass: OccDigitalPaymentsAdapter
      }, {
        provide: DP_DETAILS_NORMALIZER,
        useExisting: OccDpDetailsNormalizer,
        multi: true
      }, {
        provide: DP_REQUEST_NORMALIZER,
        useExisting: OccDpRequestNormalizer,
        multi: true
      }, DpCheckoutPaymentService, provideDefaultConfig(occDigitalPaymentsConfig)]
    }]
  }], null, null);
})();
var DigitalPaymentsModule = class _DigitalPaymentsModule {
  static {
    this.ɵfac = function DigitalPaymentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DigitalPaymentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _DigitalPaymentsModule,
      imports: [DpCheckoutModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [DpCheckoutModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DigitalPaymentsModule, [{
    type: NgModule,
    args: [{
      imports: [DpCheckoutModule]
    }]
  }], null, null);
})();
export {
  DigitalPaymentsModule,
  DpCheckoutModule,
  DpCheckoutPaymentService
};
//# sourceMappingURL=@spartacus_digital-payments.js.map
