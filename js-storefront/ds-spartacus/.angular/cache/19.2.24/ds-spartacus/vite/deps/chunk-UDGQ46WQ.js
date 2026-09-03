import {
  CHECKOUT_B2B_CMS_COMPONENTS
} from "./chunk-OKYVL3N7.js";
import {
  CHECKOUT_CORE_FEATURE,
  CHECKOUT_FEATURE,
  CheckoutConfig,
  CheckoutEvent,
  CheckoutQueryResetEvent,
  CheckoutStepType,
  DeliveryModePreferences
} from "./chunk-X6DUCLWC.js";
import {
  ORDER_CMS_COMPONENTS,
  ORDER_FEATURE
} from "./chunk-UIW5AQFA.js";
import {
  CmsPageGuard,
  PageLayoutComponent
} from "./chunk-D5RDRHN5.js";
import {
  BaseSiteService,
  Config,
  CxDatePipe,
  EventService,
  PriceType,
  TimeUtils,
  facadeFactory,
  provideDefaultConfig,
  provideDefaultConfigFactory
} from "./chunk-VIVIQI6G.js";
import {
  RouterModule
} from "./chunk-EBCNDD52.js";
import {
  Injectable,
  NgModule,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import {
  map,
  take
} from "./chunk-R6FETK65.js";
import {
  Subscription
} from "./chunk-WTM5FSU4.js";

// node_modules/@spartacus/s4-service/fesm2022/spartacus-s4-service-root.mjs
CheckoutStepType["SERVICE_DETAILS"] = "serviceDetails";
var S4ServiceDeliveryModeConfig = class _S4ServiceDeliveryModeConfig {
  static {
    this.ɵfac = function S4ServiceDeliveryModeConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _S4ServiceDeliveryModeConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _S4ServiceDeliveryModeConfig,
      factory: function S4ServiceDeliveryModeConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _S4ServiceDeliveryModeConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(S4ServiceDeliveryModeConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var defaultServiceOrdersRoutingConfig = {
  routing: {
    routes: {
      checkoutServiceDetails: {
        paths: ["checkout/service-details"]
      },
      cancelServiceDetails: {
        paths: ["my-account/order/cancelservice/:orderCode"],
        paramsMapping: {
          orderCode: "code"
        }
      },
      rescheduleServiceDetails: {
        paths: ["my-account/order/rescheduleservice/:orderCode"],
        paramsMapping: {
          orderCode: "code"
        }
      }
    }
  }
};
var defaultServiceDetailsCheckoutConfig = {
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
      id: "serviceDetails",
      name: "serviceOrderCheckout.serviceDetails",
      routeName: "checkoutServiceDetails",
      type: [CheckoutStepType.SERVICE_DETAILS]
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
var CheckoutServiceDetailsEvent = class extends CheckoutEvent {
};
var CheckoutServiceDetailsSetEvent = class extends CheckoutServiceDetailsEvent {
  static {
    this.type = "CheckoutServiceDetailsSetEvent";
  }
};
var CheckoutServiceDetailsEventListener = class _CheckoutServiceDetailsEventListener {
  constructor(eventService) {
    this.eventService = eventService;
    this.subscriptions = new Subscription();
    this.onServiceDetailsSet();
  }
  onServiceDetailsSet() {
    this.subscriptions.add(this.eventService.get(CheckoutServiceDetailsSetEvent).subscribe(() => {
      this.eventService.dispatch({}, CheckoutQueryResetEvent);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function CheckoutServiceDetailsEventListener_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutServiceDetailsEventListener)(ɵɵinject(EventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutServiceDetailsEventListener,
      factory: _CheckoutServiceDetailsEventListener.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutServiceDetailsEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }], null);
})();
var CheckoutServiceDetailsEventModule = class _CheckoutServiceDetailsEventModule {
  constructor(_checkoutServiceDetailsEventListener) {
  }
  static {
    this.ɵfac = function CheckoutServiceDetailsEventModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutServiceDetailsEventModule)(ɵɵinject(CheckoutServiceDetailsEventListener));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutServiceDetailsEventModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutServiceDetailsEventModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: CheckoutServiceDetailsEventListener
  }], null);
})();
var CheckoutServiceDetailsFacade = class _CheckoutServiceDetailsFacade {
  static {
    this.ɵfac = function CheckoutServiceDetailsFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutServiceDetailsFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutServiceDetailsFacade,
      factory: () => (() => facadeFactory({
        facade: _CheckoutServiceDetailsFacade,
        feature: CHECKOUT_CORE_FEATURE,
        methods: ["setServiceScheduleSlot", "getSelectedServiceDetailsState", "getServiceProducts", "hasServiceItems", "hasNonServiceItems"]
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutServiceDetailsFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: CheckoutServiceDetailsFacade,
        feature: CHECKOUT_CORE_FEATURE,
        methods: ["setServiceScheduleSlot", "getSelectedServiceDetailsState", "getServiceProducts", "hasServiceItems", "hasNonServiceItems"]
      })
    }]
  }], null, null);
})();
var dateFormat = "yyyy-MM-dd";
var CheckoutServiceSchedulePickerService = class _CheckoutServiceSchedulePickerService {
  constructor() {
    this.baseSiteService = inject(BaseSiteService);
    this.datePipe = inject(CxDatePipe);
  }
  /**
   * Returns the minimum date for scheduling a service.
   * It is the current date + lead days from the base site configuration.
   */
  getMinDateForService() {
    return this.getServiceOrderConfiguration().pipe(map((config) => {
      const minDate = /* @__PURE__ */ new Date();
      minDate.setDate(minDate.getDate() + (config?.leadDays ?? 0) + 1);
      return this.datePipe.transform(minDate, dateFormat) ?? "";
    }));
  }
  /**
   * Returns an array of service schedule times in HH:MM format (24-hour clock).
   * Example: ['08:00', '12:00', '16:00']
   */
  getScheduledServiceTimes() {
    return this.getServiceOrderConfiguration().pipe(map((config) => config?.serviceScheduleTimes ?? []));
  }
  /**
   * Retrieves the Service Order Configuration object with lead days and service schedule times.
   * This method returns an observable since it depends on asynchronous data.
   */
  getServiceOrderConfiguration() {
    return this.baseSiteService.get().pipe(take(1), map((baseSite) => {
      const config = {
        leadDays: 0,
        serviceScheduleTimes: []
      };
      config.leadDays = baseSite?.baseStore?.serviceOrderConfiguration?.leadDays ?? 0;
      config.serviceScheduleTimes = baseSite?.baseStore?.serviceOrderConfiguration?.serviceScheduleTimes ?? [];
      return config;
    }));
  }
  /**
   * Converts a date and time string into DateTime format including timezone offset.
   * @param date Date in YYYY-MM-DD format. Example: '2024-06-27'
   * @param time Time in HH:MM format (24-hour clock). Example: '14:30'
   * @returns String in DateTime format with timezone offset.
   * Example: 2024-06-27T14:30:00±HH:MM (based on your local timezone offset)
   */
  convertToDateTime(date, time) {
    const dateTimeString = `${date}T${time}:00`;
    const timezoneOffset = TimeUtils.getLocalTimezoneOffset();
    return `${dateTimeString}${timezoneOffset}`;
  }
  /**
   * Converts a DateTime string with timezone offset into a readable string format.
   * @param dateTime String in DateTime format with timezone offset.
   * Example: 2024-07-11T14:30:00+05:30
   * @returns Readable string format. Example: 11/07/2024, 02:30:00 PM
   */
  convertDateTimeToReadableString(dateTime) {
    const date = new Date(dateTime);
    return date.toLocaleString();
  }
  /**
   * Converts a string containing both date and time into an object with separate properties - date and time.
   * @param input Date and time in format `MM/DD/YYYY, HH:mm:ss`
   * @returns Object with date and time separately as { date: 'YYYY-MM-DD', time: 'HH:mm' }
   */
  getServiceDetailsFromDateTime(input) {
    const inputDate = new Date(input);
    const hours = inputDate.getHours().toString().padStart(2, "0");
    const minutes = inputDate.getMinutes().toString().padStart(2, "0");
    return {
      date: this.datePipe.transform(inputDate, dateFormat) ?? "",
      time: `${hours}:${minutes}`
    };
  }
  /**
   * Calculates the difference in hours between a scheduled date of a service and the current date.
   * @param dateTime The dateTime to check in string format.
   * @returns Number representing the difference in hours.
   */
  getHoursFromServiceSchedule(dateTime) {
    const now = /* @__PURE__ */ new Date();
    const targetDateTime = new Date(dateTime);
    const differenceInMilliseconds = targetDateTime.getTime() - now.getTime();
    return differenceInMilliseconds / (1e3 * 60 * 60);
  }
  static {
    this.ɵfac = function CheckoutServiceSchedulePickerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutServiceSchedulePickerService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CheckoutServiceSchedulePickerService,
      factory: _CheckoutServiceSchedulePickerService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutServiceSchedulePickerService, [{
    type: Injectable
  }], null, null);
})();
var CancelServiceOrderFacade = class _CancelServiceOrderFacade {
  static {
    this.ɵfac = function CancelServiceOrderFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CancelServiceOrderFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CancelServiceOrderFacade,
      factory: _CancelServiceOrderFacade.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelServiceOrderFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RescheduleServiceOrderFacade = class _RescheduleServiceOrderFacade {
  static {
    this.ɵfac = function RescheduleServiceOrderFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RescheduleServiceOrderFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RescheduleServiceOrderFacade,
      factory: _RescheduleServiceOrderFacade.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RescheduleServiceOrderFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var defaultServiceDeliveryModeConfig = {
  s4ServiceDeliveryMode: {
    code: "service-delivery",
    deliveryCost: {
      currencyIso: "USD",
      formattedValue: "USD0.00",
      priceType: PriceType.BUY,
      value: 0
    },
    description: "Not applicable",
    name: "No Delivery Charges for Service"
  }
};
var S4_SERVICE_CMS_COMPONENTS = [...CHECKOUT_B2B_CMS_COMPONENTS, "CheckoutServiceDetails"];
var S4_SERVICE_ORDER_CMS_COMPONENTS = ["RescheduleServiceOrder", "CancelServiceOrderHeadline", "CancelServiceOrder"];
function defaultS4ServiceComponentsConfig() {
  const config = {
    featureModules: {
      [CHECKOUT_FEATURE]: {
        cmsComponents: S4_SERVICE_CMS_COMPONENTS
      },
      [ORDER_FEATURE]: {
        cmsComponents: [...ORDER_CMS_COMPONENTS, ...S4_SERVICE_ORDER_CMS_COMPONENTS]
      }
    }
  };
  return config;
}
var S4ServiceRootModule = class _S4ServiceRootModule {
  static {
    this.ɵfac = function S4ServiceRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _S4ServiceRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _S4ServiceRootModule,
      imports: [CheckoutServiceDetailsEventModule, RouterModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: CheckoutConfig,
        useValue: defaultServiceDetailsCheckoutConfig
      }, provideDefaultConfig(defaultServiceOrdersRoutingConfig), provideDefaultConfig(defaultServiceDeliveryModeConfig), provideDefaultConfigFactory(defaultS4ServiceComponentsConfig), CxDatePipe, CheckoutServiceSchedulePickerService],
      imports: [CheckoutServiceDetailsEventModule, RouterModule.forChild([{
        path: "",
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "cancelServiceDetails"
        }
      }, {
        path: "",
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "rescheduleServiceDetails"
        }
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(S4ServiceRootModule, [{
    type: NgModule,
    args: [{
      imports: [CheckoutServiceDetailsEventModule, RouterModule.forChild([{
        path: "",
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "cancelServiceDetails"
        }
      }, {
        path: "",
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "rescheduleServiceDetails"
        }
      }])],
      providers: [{
        provide: CheckoutConfig,
        useValue: defaultServiceDetailsCheckoutConfig
      }, provideDefaultConfig(defaultServiceOrdersRoutingConfig), provideDefaultConfig(defaultServiceDeliveryModeConfig), provideDefaultConfigFactory(defaultS4ServiceComponentsConfig), CxDatePipe, CheckoutServiceSchedulePickerService]
    }]
  }], null, null);
})();

export {
  S4ServiceDeliveryModeConfig,
  CheckoutServiceDetailsSetEvent,
  CheckoutServiceDetailsFacade,
  CheckoutServiceSchedulePickerService,
  CancelServiceOrderFacade,
  RescheduleServiceOrderFacade
};
//# sourceMappingURL=chunk-UDGQ46WQ.js.map
