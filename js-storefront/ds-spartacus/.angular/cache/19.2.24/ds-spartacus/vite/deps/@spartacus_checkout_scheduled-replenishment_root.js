import {
  CHECKOUT_B2B_CMS_COMPONENTS
} from "./chunk-OKYVL3N7.js";
import {
  CHECKOUT_FEATURE,
  CheckoutQueryResetEvent
} from "./chunk-X6DUCLWC.js";
import {
  ReplenishmentOrderScheduledEvent
} from "./chunk-UIW5AQFA.js";
import "./chunk-OOT34BER.js";
import {
  RemoveCartEvent
} from "./chunk-KEAKWHYV.js";
import "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  EventService,
  provideDefaultConfigFactory
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
import "./chunk-2A6OHZCE.js";
import "./chunk-YST33EXT.js";
import "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  Injectable,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import "./chunk-R6FETK65.js";
import {
  Subscription
} from "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/checkout/fesm2022/spartacus-checkout-scheduled-replenishment-root.mjs
var CheckoutScheduledReplenishmentEventListener = class _CheckoutScheduledReplenishmentEventListener {
  constructor(eventService) {
    this.eventService = eventService;
    this.subscriptions = new Subscription();
    this.onReplenishmentOrder();
  }
  onReplenishmentOrder() {
    this.subscriptions.add(this.eventService.get(ReplenishmentOrderScheduledEvent).subscribe(({
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
    this.ɵfac = function CheckoutScheduledReplenishmentEventListener_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutScheduledReplenishmentEventListener)(ɵɵinject(EventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutScheduledReplenishmentEventListener,
      factory: _CheckoutScheduledReplenishmentEventListener.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutScheduledReplenishmentEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }], null);
})();
var CheckoutScheduledReplenishmentEventModule = class _CheckoutScheduledReplenishmentEventModule {
  constructor(_checkoutScheduledReplenishmentEventListener) {
  }
  static {
    this.ɵfac = function CheckoutScheduledReplenishmentEventModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutScheduledReplenishmentEventModule)(ɵɵinject(CheckoutScheduledReplenishmentEventListener));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutScheduledReplenishmentEventModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutScheduledReplenishmentEventModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: CheckoutScheduledReplenishmentEventListener
  }], null);
})();
var CHECKOUT_SCHEDULED_REPLENISHMENT_CMS_COMPONENTS = [
  /**
   *  TODO:#9574 - we should be able to remove the spread of `CHECKOUT_BASE_CMS_COMPONENTS`.
   * Re-test the B2B checkout flow after doing it.
   */
  ...CHECKOUT_B2B_CMS_COMPONENTS,
  "CheckoutScheduleReplenishmentOrder"
];
function defaultCheckoutComponentsConfig() {
  const config = {
    featureModules: {
      [CHECKOUT_FEATURE]: {
        cmsComponents: CHECKOUT_SCHEDULED_REPLENISHMENT_CMS_COMPONENTS
      }
    }
  };
  return config;
}
var CheckoutScheduledReplenishmentRootModule = class _CheckoutScheduledReplenishmentRootModule {
  static {
    this.ɵfac = function CheckoutScheduledReplenishmentRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutScheduledReplenishmentRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutScheduledReplenishmentRootModule,
      imports: [CheckoutScheduledReplenishmentEventModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultCheckoutComponentsConfig)],
      imports: [CheckoutScheduledReplenishmentEventModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutScheduledReplenishmentRootModule, [{
    type: NgModule,
    args: [{
      imports: [CheckoutScheduledReplenishmentEventModule],
      providers: [provideDefaultConfigFactory(defaultCheckoutComponentsConfig)]
    }]
  }], null, null);
})();
export {
  CHECKOUT_SCHEDULED_REPLENISHMENT_CMS_COMPONENTS,
  CheckoutScheduledReplenishmentEventListener,
  CheckoutScheduledReplenishmentEventModule,
  CheckoutScheduledReplenishmentRootModule,
  defaultCheckoutComponentsConfig
};
//# sourceMappingURL=@spartacus_checkout_scheduled-replenishment_root.js.map
