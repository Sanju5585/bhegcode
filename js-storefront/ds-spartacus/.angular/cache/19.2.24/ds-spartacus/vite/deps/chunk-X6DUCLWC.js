import {
  OrderPlacedEvent
} from "./chunk-UIW5AQFA.js";
import {
  RestoreSavedCartSuccessEvent,
  SaveCartSuccessEvent
} from "./chunk-OOT34BER.js";
import {
  ActiveCartFacade,
  CART_BASE_FEATURE,
  DeleteCartEvent,
  LoadCartEvent,
  MergeCartSuccessEvent,
  MultiCartFacade,
  RemoveCartEvent
} from "./chunk-KEAKWHYV.js";
import {
  Config,
  CurrencySetEvent,
  CxEvent,
  DeleteUserAddressEvent,
  EventService,
  GlobalMessageService,
  GlobalMessageType,
  LanguageSetEvent,
  LoadUserAddressesEvent,
  LoadUserPaymentMethodsEvent,
  LoginEvent,
  LogoutEvent,
  OCC_USER_ID_ANONYMOUS,
  RoutingService,
  UpdateUserAddressEvent,
  UserAddressEvent,
  facadeFactory,
  provideDefaultConfig,
  provideDefaultConfigFactory,
  userGroup_actions
} from "./chunk-VIVIQI6G.js";
import {
  Store
} from "./chunk-2FUOVDAV.js";
import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from "./chunk-2A6OHZCE.js";
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
  filter,
  map,
  take,
  tap
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";

// node_modules/@spartacus/checkout/fesm2022/spartacus-checkout-base-root.mjs
var CheckoutStepType;
(function(CheckoutStepType2) {
  CheckoutStepType2["DELIVERY_ADDRESS"] = "deliveryAddress";
  CheckoutStepType2["DELIVERY_MODE"] = "deliveryMode";
  CheckoutStepType2["PAYMENT_DETAILS"] = "paymentDetails";
  CheckoutStepType2["REVIEW_ORDER"] = "reviewOrder";
})(CheckoutStepType || (CheckoutStepType = {}));
var CheckoutStepState;
(function(CheckoutStepState2) {
  CheckoutStepState2["COMPLETED"] = "completed";
  CheckoutStepState2["SELECTED"] = "selected";
  CheckoutStepState2["DISABLED"] = "disabled";
})(CheckoutStepState || (CheckoutStepState = {}));
var DeliveryModePreferences;
(function(DeliveryModePreferences2) {
  DeliveryModePreferences2["FREE"] = "FREE";
  DeliveryModePreferences2["LEAST_EXPENSIVE"] = "LEAST_EXPENSIVE";
  DeliveryModePreferences2["MOST_EXPENSIVE"] = "MOST_EXPENSIVE";
})(DeliveryModePreferences || (DeliveryModePreferences = {}));
var CheckoutConfig = class _CheckoutConfig {
  static {
    this.ɵfac = function CheckoutConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutConfig,
      factory: function CheckoutConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _CheckoutConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var defaultCheckoutConfig = {
  checkout: {
    steps: [{
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
var defaultCheckoutRoutingConfig = {
  routing: {
    routes: {
      checkoutLogin: {
        paths: ["checkout-login"],
        authFlow: true
      },
      checkout: {
        paths: ["checkout"]
      },
      checkoutDeliveryAddress: {
        paths: ["checkout/delivery-address"]
      },
      checkoutDeliveryMode: {
        paths: ["checkout/delivery-mode"]
      },
      checkoutPaymentDetails: {
        paths: ["checkout/payment-details"]
      },
      checkoutReviewOrder: {
        paths: ["checkout/review-order"]
      }
    }
  }
};
var CheckoutQueryReloadEvent = class extends CxEvent {
  static {
    this.type = "CheckoutQueryReloadEvent";
  }
};
var CheckoutQueryResetEvent = class extends CxEvent {
  static {
    this.type = "CheckoutQueryResetEvent";
  }
};
var CheckoutEvent = class extends CxEvent {
};
var CheckoutDeliveryAddressEvent = class extends CheckoutEvent {
};
var CheckoutDeliveryAddressCreatedEvent = class extends CheckoutDeliveryAddressEvent {
  static {
    this.type = "CheckoutDeliveryAddressCreatedEvent";
  }
};
var CheckoutDeliveryAddressSetEvent = class extends CheckoutDeliveryAddressEvent {
  static {
    this.type = "CheckoutDeliveryAddressSetEvent";
  }
};
var CheckoutDeliveryAddressClearedEvent = class extends CheckoutDeliveryAddressEvent {
  static {
    this.type = "CheckoutDeliveryAddressClearedEvent";
  }
};
var CheckoutDeliveryModeEvent = class extends CheckoutEvent {
};
var CheckoutDeliveryModeSetEvent = class extends CheckoutDeliveryModeEvent {
  static {
    this.type = "CheckoutDeliveryModeSetEvent";
  }
};
var CheckoutDeliveryModeClearedEvent = class extends CheckoutDeliveryModeEvent {
  static {
    this.type = "CheckoutDeliveryModeClearedEvent";
  }
};
var CheckoutDeliveryModeClearedErrorEvent = class extends CheckoutDeliveryModeEvent {
  static {
    this.type = "CheckoutDeliveryModeClearedErrorEvent";
  }
};
var CheckoutSupportedDeliveryModesQueryReloadEvent = class extends CheckoutDeliveryModeEvent {
  static {
    this.type = "CheckoutSupportedDeliveryModesQueryReloadEvent";
  }
};
var CheckoutSupportedDeliveryModesQueryResetEvent = class extends CheckoutDeliveryModeEvent {
  static {
    this.type = "CheckoutSupportedDeliveryModesQueryResetEvent";
  }
};
var CheckoutPaymentDetailsEvent = class extends CheckoutEvent {
};
var CheckoutPaymentDetailsCreatedEvent = class extends CheckoutPaymentDetailsEvent {
  static {
    this.type = "CheckoutPaymentDetailsCreatedEvent";
  }
};
var CheckoutPaymentDetailsSetEvent = class extends CheckoutPaymentDetailsEvent {
  static {
    this.type = "CheckoutPaymentDetailsSetEvent";
  }
};
var CheckoutPaymentCardTypesQueryReloadEvent = class extends CheckoutPaymentDetailsEvent {
  static {
    this.type = "CheckoutPaymentCardTypesQueryReloadEvent";
  }
};
var CheckoutPaymentCardTypesQueryResetEvent = class extends CheckoutPaymentDetailsEvent {
  static {
    this.type = "CheckoutPaymentCardTypesQueryResetEvent";
  }
};
var CheckoutQueryEventListener = class _CheckoutQueryEventListener {
  constructor(eventService) {
    this.eventService = eventService;
    this.subscriptions = new Subscription();
    this.onCheckoutQueryReload();
    this.onCheckoutQueryReset();
  }
  onCheckoutQueryReload() {
    this.subscriptions.add(merge(this.eventService.get(LanguageSetEvent), this.eventService.get(CurrencySetEvent)).subscribe(() => {
      this.eventService.dispatch({}, CheckoutQueryReloadEvent);
    }));
  }
  onCheckoutQueryReset() {
    this.subscriptions.add(merge(this.eventService.get(LogoutEvent), this.eventService.get(LoginEvent), this.eventService.get(SaveCartSuccessEvent), this.eventService.get(RestoreSavedCartSuccessEvent), this.eventService.get(MergeCartSuccessEvent), this.eventService.get(OrderPlacedEvent)).subscribe(() => {
      this.eventService.dispatch({}, CheckoutQueryResetEvent);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function CheckoutQueryEventListener_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutQueryEventListener)(ɵɵinject(EventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutQueryEventListener,
      factory: _CheckoutQueryEventListener.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutQueryEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }], null);
})();
var CHECKOUT_FEATURE = "checkout";
var CHECKOUT_CORE_FEATURE = "checkoutCore";
var CheckoutDeliveryAddressFacade = class _CheckoutDeliveryAddressFacade {
  static {
    this.ɵfac = function CheckoutDeliveryAddressFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutDeliveryAddressFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutDeliveryAddressFacade,
      factory: () => (() => facadeFactory({
        facade: _CheckoutDeliveryAddressFacade,
        feature: CHECKOUT_CORE_FEATURE,
        methods: ["getDeliveryAddressState", "createAndSetAddress", "setDeliveryAddress", "clearCheckoutDeliveryAddress"],
        // TODO:#deprecation-checkout - remove once we remove ngrx
        async: true
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryAddressFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: CheckoutDeliveryAddressFacade,
        feature: CHECKOUT_CORE_FEATURE,
        methods: ["getDeliveryAddressState", "createAndSetAddress", "setDeliveryAddress", "clearCheckoutDeliveryAddress"],
        // TODO:#deprecation-checkout - remove once we remove ngrx
        async: true
      })
    }]
  }], null, null);
})();
var CheckoutDeliveryAddressEventListener = class _CheckoutDeliveryAddressEventListener {
  constructor(checkoutDeliveryAddressFacade, eventService, globalMessageService, activeCartFacade) {
    this.checkoutDeliveryAddressFacade = checkoutDeliveryAddressFacade;
    this.eventService = eventService;
    this.globalMessageService = globalMessageService;
    this.activeCartFacade = activeCartFacade;
    this.subscriptions = new Subscription();
    this.onDeliveryAddressCreated();
    this.onDeliveryAddressSet();
    this.onDeliveryAddressCleared();
    this.onUserAddressChange();
    this.onCartDeleted();
  }
  /**
   * Registers listeners for the User address events.
   */
  onUserAddressChange() {
    this.subscriptions.add(this.eventService.get(UserAddressEvent).pipe(filter((event) => event instanceof UpdateUserAddressEvent || event instanceof DeleteUserAddressEvent), switchMap(({
      userId
    }) => this.activeCartFacade.takeActiveCartId().pipe(map((cartId) => ({
      cartId,
      userId
    }))))).subscribe(({
      cartId,
      userId
    }) => {
      this.checkoutDeliveryAddressFacade.clearCheckoutDeliveryAddress();
      this.eventService.dispatch({
        cartId,
        userId
      }, CheckoutSupportedDeliveryModesQueryResetEvent);
    }));
  }
  onDeliveryAddressCreated() {
    this.subscriptions.add(this.eventService.get(CheckoutDeliveryAddressCreatedEvent).subscribe(({
      cartId,
      userId
    }) => {
      if (userId !== OCC_USER_ID_ANONYMOUS) {
        this.eventService.dispatch({
          userId
        }, LoadUserAddressesEvent);
      }
      this.globalMessageService.add({
        key: "addressForm.userAddressAddSuccess"
      }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
      this.eventService.dispatch({
        userId,
        cartId
      }, CheckoutSupportedDeliveryModesQueryResetEvent);
      this.eventService.dispatch({}, CheckoutQueryResetEvent);
    }));
  }
  onDeliveryAddressSet() {
    this.subscriptions.add(this.eventService.get(CheckoutDeliveryAddressSetEvent).subscribe(({
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
  onDeliveryAddressCleared() {
    this.subscriptions.add(this.eventService.get(CheckoutDeliveryAddressClearedEvent).subscribe(() => this.eventService.dispatch({}, CheckoutQueryResetEvent)));
  }
  onCartDeleted() {
    this.subscriptions.add(this.eventService.get(DeleteCartEvent).subscribe(() => this.eventService.dispatch({}, CheckoutQueryResetEvent)));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function CheckoutDeliveryAddressEventListener_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutDeliveryAddressEventListener)(ɵɵinject(CheckoutDeliveryAddressFacade), ɵɵinject(EventService), ɵɵinject(GlobalMessageService), ɵɵinject(ActiveCartFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutDeliveryAddressEventListener,
      factory: _CheckoutDeliveryAddressEventListener.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryAddressEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CheckoutDeliveryAddressFacade
  }, {
    type: EventService
  }, {
    type: GlobalMessageService
  }, {
    type: ActiveCartFacade
  }], null);
})();
var CheckoutDeliveryModeEventListener = class _CheckoutDeliveryModeEventListener {
  constructor(eventService) {
    this.eventService = eventService;
    this.subscriptions = new Subscription();
    this.onDeliveryModeSet();
    this.onDeliveryModeCleared();
    this.onDeliveryModeClearedError();
    this.onDeliveryModeReset();
    this.onGetSupportedDeliveryModesQueryReload();
    this.onGetSupportedDeliveryModesQueryReset();
  }
  onDeliveryModeSet() {
    this.subscriptions.add(this.eventService.get(CheckoutDeliveryModeSetEvent).subscribe(({
      userId,
      cartId,
      cartCode
    }) => {
      this.eventService.dispatch({}, CheckoutQueryResetEvent);
      this.eventService.dispatch({
        userId,
        cartId,
        cartCode
      }, LoadCartEvent);
    }));
  }
  onDeliveryModeCleared() {
    this.subscriptions.add(this.eventService.get(CheckoutDeliveryModeClearedEvent).subscribe(({
      userId,
      cartId,
      cartCode
    }) => {
      this.eventService.dispatch({}, CheckoutQueryResetEvent);
      this.eventService.dispatch({
        userId,
        cartId,
        cartCode
      }, LoadCartEvent);
    }));
  }
  onDeliveryModeClearedError() {
    this.subscriptions.add(this.eventService.get(CheckoutDeliveryModeClearedErrorEvent).subscribe(({
      userId,
      cartId,
      cartCode
    }) => {
      this.eventService.dispatch({}, CheckoutQueryResetEvent);
      this.eventService.dispatch({
        userId,
        cartId,
        cartCode
      }, LoadCartEvent);
    }));
  }
  /**
   * Registers listeners for the delivery mode clear event.
   * This is needed for when `CheckoutSupportedDeliveryModesQueryResetEvent` is dispatched
   * as we need to update the user's cart when the delivery mode is cleared from the backend checkout details.
   */
  onDeliveryModeReset() {
    this.subscriptions.add(this.eventService.get(CheckoutSupportedDeliveryModesQueryResetEvent).subscribe(({
      userId,
      cartId
    }) => this.eventService.dispatch({
      userId,
      cartId,
      /**
       * As we know the cart is not anonymous (precondition checked),
       * we can safely use the cartId, which is actually the cart.code.
       */
      cartCode: cartId
    }, LoadCartEvent)));
  }
  onGetSupportedDeliveryModesQueryReload() {
    this.subscriptions.add(merge(this.eventService.get(LanguageSetEvent), this.eventService.get(CurrencySetEvent)).subscribe(() => {
      this.eventService.dispatch({}, CheckoutSupportedDeliveryModesQueryReloadEvent);
    }));
  }
  onGetSupportedDeliveryModesQueryReset() {
    this.subscriptions.add(merge(this.eventService.get(LogoutEvent), this.eventService.get(LoginEvent)).subscribe(() => {
      this.eventService.dispatch({}, CheckoutSupportedDeliveryModesQueryResetEvent);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function CheckoutDeliveryModeEventListener_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutDeliveryModeEventListener)(ɵɵinject(EventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutDeliveryModeEventListener,
      factory: _CheckoutDeliveryModeEventListener.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryModeEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }], null);
})();
var CheckoutPaymentEventListener = class _CheckoutPaymentEventListener {
  constructor(eventService, globalMessageService) {
    this.eventService = eventService;
    this.globalMessageService = globalMessageService;
    this.subscriptions = new Subscription();
    this.onPaymentCreated();
    this.onPaymentSet();
    this.onGetCardTypesQueryReload();
  }
  onPaymentCreated() {
    this.subscriptions.add(this.eventService.get(CheckoutPaymentDetailsCreatedEvent).subscribe(({
      userId
    }) => {
      if (userId !== OCC_USER_ID_ANONYMOUS) {
        this.eventService.dispatch({
          userId
        }, LoadUserPaymentMethodsEvent);
      }
      this.globalMessageService.add({
        key: "paymentForm.paymentAddedSuccessfully"
      }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
      this.eventService.dispatch({}, CheckoutQueryResetEvent);
    }));
  }
  onPaymentSet() {
    this.subscriptions.add(this.eventService.get(CheckoutPaymentDetailsSetEvent).subscribe(() => {
      this.eventService.dispatch({}, CheckoutQueryResetEvent);
    }));
  }
  onGetCardTypesQueryReload() {
    this.subscriptions.add(merge(this.eventService.get(LanguageSetEvent), this.eventService.get(CurrencySetEvent)).subscribe(() => {
      this.eventService.dispatch({}, CheckoutPaymentCardTypesQueryReloadEvent);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function CheckoutPaymentEventListener_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutPaymentEventListener)(ɵɵinject(EventService), ɵɵinject(GlobalMessageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutPaymentEventListener,
      factory: _CheckoutPaymentEventListener.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }, {
    type: GlobalMessageService
  }], null);
})();
var CheckoutPlaceOrderEventListener = class _CheckoutPlaceOrderEventListener {
  constructor(eventService) {
    this.eventService = eventService;
    this.subscriptions = new Subscription();
    this.onOrderPlaced();
  }
  onOrderPlaced() {
    this.subscriptions.add(this.eventService.get(OrderPlacedEvent).subscribe(({
      userId,
      cartId,
      cartCode
    }) => {
      this.eventService.dispatch({
        userId,
        cartId,
        cartCode
      }, RemoveCartEvent);
      this.eventService.dispatch({}, CheckoutQueryResetEvent);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function CheckoutPlaceOrderEventListener_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutPlaceOrderEventListener)(ɵɵinject(EventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutPlaceOrderEventListener,
      factory: _CheckoutPlaceOrderEventListener.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPlaceOrderEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }], null);
})();
var CheckoutLegacyStoreEventListener = class _CheckoutLegacyStoreEventListener {
  constructor(eventService, store) {
    this.eventService = eventService;
    this.store = store;
    this.subscriptions = new Subscription();
    this.onUserAddressAction();
    this.onUserPaymentAction();
  }
  /**
   * Registers events for the user address actions.
   */
  onUserAddressAction() {
    this.subscriptions.add(this.eventService.get(LoadUserAddressesEvent).subscribe(({
      userId
    }) => {
      this.store.dispatch(new userGroup_actions.LoadUserAddresses(userId));
    }));
  }
  /**
   * Registers events for the user payment actions.
   */
  onUserPaymentAction() {
    this.subscriptions.add(this.eventService.get(LoadUserPaymentMethodsEvent).subscribe(({
      userId
    }) => {
      this.store.dispatch(
        /**
         * TODO:#deprecation-checkout We have to keep this here, since the user payment feature is still ngrx-based.
         * Remove once it is switched from ngrx to c&q.
         * We should dispatch an event, which will load the userPayment$ query.
         */
        new userGroup_actions.LoadUserPaymentMethods(userId)
      );
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function CheckoutLegacyStoreEventListener_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutLegacyStoreEventListener)(ɵɵinject(EventService), ɵɵinject(Store));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutLegacyStoreEventListener,
      factory: _CheckoutLegacyStoreEventListener.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutLegacyStoreEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }, {
    type: Store
  }], null);
})();
var CheckoutEventModule = class _CheckoutEventModule {
  constructor(_checkoutQueryEventListener, _checkoutDeliveryAddressEventListener, _checkoutDeliveryModeEventListener, _checkoutPaymentEventListener, _checkoutPlaceOrderEventListener, _checkoutLegacyStoreEventListener) {
  }
  static {
    this.ɵfac = function CheckoutEventModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutEventModule)(ɵɵinject(CheckoutQueryEventListener), ɵɵinject(CheckoutDeliveryAddressEventListener), ɵɵinject(CheckoutDeliveryModeEventListener), ɵɵinject(CheckoutPaymentEventListener), ɵɵinject(CheckoutPlaceOrderEventListener), ɵɵinject(CheckoutLegacyStoreEventListener));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutEventModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutEventModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: CheckoutQueryEventListener
  }, {
    type: CheckoutDeliveryAddressEventListener
  }, {
    type: CheckoutDeliveryModeEventListener
  }, {
    type: CheckoutPaymentEventListener
  }, {
    type: CheckoutPlaceOrderEventListener
  }, {
    type: CheckoutLegacyStoreEventListener
  }], null);
})();
var CheckoutCartInterceptor = class _CheckoutCartInterceptor {
  constructor(routingService, multiCartFacade) {
    this.routingService = routingService;
    this.multiCartFacade = multiCartFacade;
  }
  intercept(request, next) {
    return this.routingService.getRouterState().pipe(take(1), switchMap((state) => {
      return next.handle(request).pipe(tap({
        error: (response) => {
          if (response instanceof HttpErrorResponse && this.isUserInCheckoutRoute(state.state?.semanticRoute)) {
            if (this.isCartNotFoundError(response)) {
              this.routingService.go({
                cxRoute: "cart"
              });
              const cartCode = this.getCartIdFromError(response);
              if (cartCode) {
                this.multiCartFacade.reloadCart(cartCode);
              }
            }
          }
        }
      }));
    }));
  }
  /**
   * Returns true if the parameter semantic route is part of "checkout"
   * Checkout semantic routes:
   * checkout
   * checkoutPaymentType
   * CheckoutDeliveryAddress
   * checkoutDeliveryMode
   * checkoutPaymentDetails
   * checkoutReviewOrder
   * checkoutLogin
   * @param semanticRoute
   */
  isUserInCheckoutRoute(semanticRoute) {
    return semanticRoute?.toLowerCase().startsWith("checkout") ?? false;
  }
  /**
   * Checks of the error is for a cart not found, i.e. the cart doesn't exist anymore
   *
   * @param response
   */
  isCartNotFoundError(response) {
    return response.status === 400 && response.error?.errors?.[0]?.type === "CartError" && response.error?.errors?.[0]?.reason === "notFound";
  }
  getCartIdFromError(response) {
    return response.error?.errors?.[0]?.subject;
  }
  static {
    this.ɵfac = function CheckoutCartInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutCartInterceptor)(ɵɵinject(RoutingService), ɵɵinject(MultiCartFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutCartInterceptor,
      factory: _CheckoutCartInterceptor.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutCartInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: MultiCartFacade
  }], null);
})();
var interceptors = [{
  provide: HTTP_INTERCEPTORS,
  useExisting: CheckoutCartInterceptor,
  multi: true
}];
var CHECKOUT_BASE_CMS_COMPONENTS = ["CheckoutOrchestrator", "CheckoutOrderSummary", "CheckoutProgress", "CheckoutProgressMobileBottom", "CheckoutProgressMobileTop", "CheckoutDeliveryMode", "CheckoutPaymentDetails", "CheckoutPlaceOrder", "CheckoutReviewOrder", "CheckoutReviewPayment", "CheckoutReviewShipping", "CheckoutReviewOverview", "CheckoutDeliveryAddress", "GuestCheckoutLoginComponent"];
function defaultCheckoutComponentsConfig() {
  const config = {
    featureModules: {
      [CHECKOUT_FEATURE]: {
        cmsComponents: CHECKOUT_BASE_CMS_COMPONENTS,
        dependencies: [CART_BASE_FEATURE]
      },
      // by default core is bundled together with components
      [CHECKOUT_CORE_FEATURE]: CHECKOUT_FEATURE
    }
  };
  return config;
}
var CheckoutRootModule = class _CheckoutRootModule {
  static {
    this.ɵfac = function CheckoutRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutRootModule,
      imports: [CheckoutEventModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [...interceptors, provideDefaultConfig(defaultCheckoutRoutingConfig), provideDefaultConfig(defaultCheckoutConfig), provideDefaultConfigFactory(defaultCheckoutComponentsConfig)],
      imports: [CheckoutEventModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutRootModule, [{
    type: NgModule,
    args: [{
      imports: [CheckoutEventModule],
      providers: [...interceptors, provideDefaultConfig(defaultCheckoutRoutingConfig), provideDefaultConfig(defaultCheckoutConfig), provideDefaultConfigFactory(defaultCheckoutComponentsConfig)]
    }]
  }], null, null);
})();
var CheckoutBillingAddressFacade = class _CheckoutBillingAddressFacade {
  static {
    this.ɵfac = function CheckoutBillingAddressFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutBillingAddressFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutBillingAddressFacade,
      factory: () => (() => facadeFactory({
        facade: _CheckoutBillingAddressFacade,
        feature: CHECKOUT_CORE_FEATURE,
        methods: ["setBillingAddress"],
        // TODO:#deprecation-checkout - remove once we remove ngrx
        async: true
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutBillingAddressFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: CheckoutBillingAddressFacade,
        feature: CHECKOUT_CORE_FEATURE,
        methods: ["setBillingAddress"],
        // TODO:#deprecation-checkout - remove once we remove ngrx
        async: true
      })
    }]
  }], null, null);
})();
var CheckoutDeliveryModesFacade = class _CheckoutDeliveryModesFacade {
  static {
    this.ɵfac = function CheckoutDeliveryModesFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutDeliveryModesFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutDeliveryModesFacade,
      factory: () => (() => facadeFactory({
        facade: _CheckoutDeliveryModesFacade,
        feature: CHECKOUT_CORE_FEATURE,
        methods: ["getSupportedDeliveryModesState", "getSupportedDeliveryModes", "setDeliveryMode", "getSelectedDeliveryModeState", "clearCheckoutDeliveryMode"],
        // TODO:#deprecation-checkout - remove once we remove ngrx
        async: true
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutDeliveryModesFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: CheckoutDeliveryModesFacade,
        feature: CHECKOUT_CORE_FEATURE,
        methods: ["getSupportedDeliveryModesState", "getSupportedDeliveryModes", "setDeliveryMode", "getSelectedDeliveryModeState", "clearCheckoutDeliveryMode"],
        // TODO:#deprecation-checkout - remove once we remove ngrx
        async: true
      })
    }]
  }], null, null);
})();
var CheckoutPaymentFacade = class _CheckoutPaymentFacade {
  static {
    this.ɵfac = function CheckoutPaymentFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutPaymentFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutPaymentFacade,
      factory: () => (() => facadeFactory({
        facade: _CheckoutPaymentFacade,
        feature: CHECKOUT_CORE_FEATURE,
        methods: ["getPaymentCardTypesState", "getPaymentCardTypes", "getPaymentDetailsState", "createPaymentDetails", "setPaymentDetails"],
        // TODO:#deprecation-checkout - remove once we remove ngrx
        async: true
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutPaymentFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: CheckoutPaymentFacade,
        feature: CHECKOUT_CORE_FEATURE,
        methods: ["getPaymentCardTypesState", "getPaymentCardTypes", "getPaymentDetailsState", "createPaymentDetails", "setPaymentDetails"],
        // TODO:#deprecation-checkout - remove once we remove ngrx
        async: true
      })
    }]
  }], null, null);
})();
var CheckoutQueryFacade = class _CheckoutQueryFacade {
  static {
    this.ɵfac = function CheckoutQueryFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutQueryFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutQueryFacade,
      factory: () => (() => facadeFactory({
        facade: _CheckoutQueryFacade,
        feature: CHECKOUT_CORE_FEATURE,
        methods: ["getCheckoutDetailsState"]
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutQueryFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: CheckoutQueryFacade,
        feature: CHECKOUT_CORE_FEATURE,
        methods: ["getCheckoutDetailsState"]
      })
    }]
  }], null, null);
})();

export {
  CheckoutStepType,
  CheckoutStepState,
  DeliveryModePreferences,
  CheckoutConfig,
  CheckoutQueryReloadEvent,
  CheckoutQueryResetEvent,
  CheckoutEvent,
  CheckoutDeliveryAddressEvent,
  CheckoutDeliveryAddressCreatedEvent,
  CheckoutDeliveryAddressSetEvent,
  CheckoutDeliveryAddressClearedEvent,
  CheckoutDeliveryModeEvent,
  CheckoutDeliveryModeSetEvent,
  CheckoutDeliveryModeClearedEvent,
  CheckoutDeliveryModeClearedErrorEvent,
  CheckoutSupportedDeliveryModesQueryReloadEvent,
  CheckoutSupportedDeliveryModesQueryResetEvent,
  CheckoutPaymentDetailsEvent,
  CheckoutPaymentDetailsCreatedEvent,
  CheckoutPaymentDetailsSetEvent,
  CheckoutPaymentCardTypesQueryReloadEvent,
  CheckoutPaymentCardTypesQueryResetEvent,
  CHECKOUT_FEATURE,
  CHECKOUT_CORE_FEATURE,
  CheckoutDeliveryAddressFacade,
  CheckoutDeliveryAddressEventListener,
  CheckoutDeliveryModeEventListener,
  CheckoutPaymentEventListener,
  CheckoutEventModule,
  CHECKOUT_BASE_CMS_COMPONENTS,
  defaultCheckoutComponentsConfig,
  CheckoutRootModule,
  CheckoutBillingAddressFacade,
  CheckoutDeliveryModesFacade,
  CheckoutPaymentFacade,
  CheckoutQueryFacade
};
//# sourceMappingURL=chunk-X6DUCLWC.js.map
