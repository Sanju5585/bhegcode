import {
  CHECKOUT_BASE_CMS_COMPONENTS,
  CHECKOUT_CORE_FEATURE,
  CHECKOUT_FEATURE,
  CheckoutEvent,
  CheckoutQueryResetEvent,
  CheckoutStepType,
  CheckoutSupportedDeliveryModesQueryResetEvent,
  DeliveryModePreferences
} from "./chunk-X6DUCLWC.js";
import {
  CurrencySetEvent,
  EventService,
  LanguageSetEvent,
  LoginEvent,
  LogoutEvent,
  facadeFactory,
  provideDefaultConfig,
  provideDefaultConfigFactory
} from "./chunk-VIVIQI6G.js";
import {
  Injectable,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import {
  merge
} from "./chunk-FBVS4YZX.js";
import {
  Subscription
} from "./chunk-WTM5FSU4.js";

// node_modules/@spartacus/checkout/fesm2022/spartacus-checkout-b2b-root.mjs
CheckoutStepType["PAYMENT_TYPE"] = "paymentType";
var defaultB2BCheckoutConfig = {
  checkout: {
    steps: [{
      id: "paymentType",
      name: "checkoutB2B.progress.methodOfPayment",
      routeName: "checkoutPaymentType",
      type: [CheckoutStepType.PAYMENT_TYPE]
    }, {
      id: "deliveryAddress",
      name: "checkoutProgress.deliveryAddress",
      routeName: "checkoutDeliveryAddress",
      type: [CheckoutStepType.DELIVERY_ADDRESS]
    }, {
      id: "deliveryMode",
      name: "checkoutProgress.deliveryMode",
      routeName: "checkoutDeliveryMode",
      type: [CheckoutStepType.DELIVERY_MODE]
    }, {
      id: "paymentDetails",
      name: "checkoutProgress.paymentDetails",
      routeName: "checkoutPaymentDetails",
      type: [CheckoutStepType.PAYMENT_DETAILS]
    }, {
      id: "reviewOrder",
      name: "checkoutProgress.reviewOrder",
      routeName: "checkoutReviewOrder",
      type: [CheckoutStepType.REVIEW_ORDER]
    }],
    express: false,
    defaultDeliveryMode: [DeliveryModePreferences.FREE],
    guest: false
  }
};
var defaultCheckoutB2BRoutingConfig = {
  routing: {
    routes: {
      checkoutPaymentType: {
        paths: ["checkout/payment-type"]
      }
    }
  }
};
var CheckoutCostCenterEvent = class extends CheckoutEvent {
};
var CheckoutCostCenterSetEvent = class extends CheckoutCostCenterEvent {
  static {
    this.type = "CheckoutCostCenterSetEvent";
  }
};
var CheckoutPaymentTypeEvent = class extends CheckoutEvent {
};
var CheckoutPaymentTypesQueryReloadEvent = class extends CheckoutPaymentTypeEvent {
  static {
    this.type = "CheckoutPaymentTypesQueryReloadEvent";
  }
};
var CheckoutPaymentTypesQueryResetEvent = class extends CheckoutPaymentTypeEvent {
  static {
    this.type = "CheckoutPaymentTypesQueryResetEvent";
  }
};
var CheckoutPaymentTypeSetEvent = class extends CheckoutPaymentTypeEvent {
  static {
    this.type = "CheckoutPaymentTypeSetEvent";
  }
};
var CheckoutCostCenterEventListener = class _CheckoutCostCenterEventListener {
  constructor(eventService) {
    this.eventService = eventService;
    this.subscriptions = new Subscription();
    this.onCostCenterSet();
  }
  onCostCenterSet() {
    this.subscriptions.add(this.eventService.get(CheckoutCostCenterSetEvent).subscribe(({
      cartId,
      userId
    }) => {
      this.eventService.dispatch({
        cartId,
        userId
      }, CheckoutSupportedDeliveryModesQueryResetEvent);
      this.eventService.dispatch({}, CheckoutQueryResetEvent);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function CheckoutCostCenterEventListener_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutCostCenterEventListener)(ɵɵinject(EventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutCostCenterEventListener,
      factory: _CheckoutCostCenterEventListener.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutCostCenterEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }], null);
})();
var CheckoutPaymentTypeEventListener = class _CheckoutPaymentTypeEventListener {
  constructor(eventService) {
    this.eventService = eventService;
    this.subscriptions = new Subscription();
    this.onPaymentTypeSet();
    this.onGetPaymentTypesQueryReload();
    this.onGetPaymentTypesQueryReset();
  }
  onPaymentTypeSet() {
    this.subscriptions.add(this.eventService.get(CheckoutPaymentTypeSetEvent).subscribe(({
      userId,
      cartId
    }) => {
      this.eventService.dispatch({
        userId,
        cartId
      }, CheckoutSupportedDeliveryModesQueryResetEvent);
      this.eventService.dispatch({}, CheckoutQueryResetEvent);
    }));
  }
  onGetPaymentTypesQueryReload() {
    this.subscriptions.add(merge(this.eventService.get(LanguageSetEvent), this.eventService.get(CurrencySetEvent)).subscribe(() => {
      this.eventService.dispatch({}, CheckoutPaymentTypesQueryReloadEvent);
    }));
  }
  onGetPaymentTypesQueryReset() {
    this.subscriptions.add(merge(this.eventService.get(LogoutEvent), this.eventService.get(LoginEvent)).subscribe(() => {
      this.eventService.dispatch({}, CheckoutPaymentTypesQueryResetEvent);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function CheckoutPaymentTypeEventListener_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutPaymentTypeEventListener)(ɵɵinject(EventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutPaymentTypeEventListener,
      factory: _CheckoutPaymentTypeEventListener.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentTypeEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }], null);
})();
var CheckoutB2BEventModule = class _CheckoutB2BEventModule {
  constructor(_checkoutCostCenterEventListener, _checkoutPaymentTypeEventListener) {
  }
  static {
    this.ɵfac = function CheckoutB2BEventModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutB2BEventModule)(ɵɵinject(CheckoutCostCenterEventListener), ɵɵinject(CheckoutPaymentTypeEventListener));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutB2BEventModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutB2BEventModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: CheckoutCostCenterEventListener
  }, {
    type: CheckoutPaymentTypeEventListener
  }], null);
})();
var CHECKOUT_B2B_CMS_COMPONENTS = [
  /**
   *  TODO:#9574 - we should be able to remove the spread of `CHECKOUT_BASE_CMS_COMPONENTS`.
   * Re-test the B2B checkout flow after doing it.
   */
  ...CHECKOUT_BASE_CMS_COMPONENTS,
  "CheckoutCostCenterComponent",
  "CheckoutPaymentType"
];
function defaultCheckoutComponentsConfig() {
  const config = {
    featureModules: {
      [CHECKOUT_FEATURE]: {
        cmsComponents: CHECKOUT_B2B_CMS_COMPONENTS
      }
    }
  };
  return config;
}
var CheckoutB2BRootModule = class _CheckoutB2BRootModule {
  static {
    this.ɵfac = function CheckoutB2BRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutB2BRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutB2BRootModule,
      imports: [CheckoutB2BEventModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultB2BCheckoutConfig), provideDefaultConfig(defaultCheckoutB2BRoutingConfig), provideDefaultConfigFactory(defaultCheckoutComponentsConfig)],
      imports: [CheckoutB2BEventModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutB2BRootModule, [{
    type: NgModule,
    args: [{
      imports: [CheckoutB2BEventModule],
      providers: [provideDefaultConfig(defaultB2BCheckoutConfig), provideDefaultConfig(defaultCheckoutB2BRoutingConfig), provideDefaultConfigFactory(defaultCheckoutComponentsConfig)]
    }]
  }], null, null);
})();
var CheckoutCostCenterFacade = class _CheckoutCostCenterFacade {
  static {
    this.ɵfac = function CheckoutCostCenterFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutCostCenterFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutCostCenterFacade,
      factory: () => (() => facadeFactory({
        facade: _CheckoutCostCenterFacade,
        feature: CHECKOUT_CORE_FEATURE,
        methods: ["setCostCenter", "getCostCenterState"]
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutCostCenterFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: CheckoutCostCenterFacade,
        feature: CHECKOUT_CORE_FEATURE,
        methods: ["setCostCenter", "getCostCenterState"]
      })
    }]
  }], null, null);
})();
var CheckoutPaymentTypeFacade = class _CheckoutPaymentTypeFacade {
  static {
    this.ɵfac = function CheckoutPaymentTypeFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutPaymentTypeFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutPaymentTypeFacade,
      factory: () => (() => facadeFactory({
        facade: _CheckoutPaymentTypeFacade,
        feature: CHECKOUT_CORE_FEATURE,
        methods: ["getPaymentTypes", "getPaymentTypesState", "setPaymentType", "getSelectedPaymentTypeState", "isAccountPayment", "getPurchaseOrderNumberState"]
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentTypeFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: CheckoutPaymentTypeFacade,
        feature: CHECKOUT_CORE_FEATURE,
        methods: ["getPaymentTypes", "getPaymentTypesState", "setPaymentType", "getSelectedPaymentTypeState", "isAccountPayment", "getPurchaseOrderNumberState"]
      })
    }]
  }], null, null);
})();
var B2BPaymentTypeEnum;
(function(B2BPaymentTypeEnum2) {
  B2BPaymentTypeEnum2["ACCOUNT_PAYMENT"] = "ACCOUNT";
  B2BPaymentTypeEnum2["CARD_PAYMENT"] = "CARD";
})(B2BPaymentTypeEnum || (B2BPaymentTypeEnum = {}));

export {
  defaultB2BCheckoutConfig,
  defaultCheckoutB2BRoutingConfig,
  CheckoutCostCenterEvent,
  CheckoutCostCenterSetEvent,
  CheckoutPaymentTypeEvent,
  CheckoutPaymentTypesQueryReloadEvent,
  CheckoutPaymentTypesQueryResetEvent,
  CheckoutPaymentTypeSetEvent,
  CheckoutCostCenterEventListener,
  CheckoutPaymentTypeEventListener,
  CheckoutB2BEventModule,
  CHECKOUT_B2B_CMS_COMPONENTS,
  defaultCheckoutComponentsConfig,
  CheckoutB2BRootModule,
  CheckoutCostCenterFacade,
  CheckoutPaymentTypeFacade,
  B2BPaymentTypeEnum
};
//# sourceMappingURL=chunk-OKYVL3N7.js.map
