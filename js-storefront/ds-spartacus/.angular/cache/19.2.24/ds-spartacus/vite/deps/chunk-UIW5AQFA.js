import {
  CART_BASE_FEATURE,
  ORDER_ENTRIES_CONTEXT
} from "./chunk-KEAKWHYV.js";
import {
  CmsPageGuard,
  LAUNCH_CALLER,
  PageLayoutComponent,
  getAddressNumbers
} from "./chunk-D5RDRHN5.js";
import {
  AuthGuard,
  Config,
  CxEvent,
  facadeFactory,
  provideDefaultConfig,
  provideDefaultConfigFactory
} from "./chunk-VIVIQI6G.js";
import {
  RouterModule
} from "./chunk-EBCNDD52.js";
import {
  Injectable,
  InjectionToken,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-7OJSO65L.js";

// node_modules/@spartacus/order/fesm2022/spartacus-order-root.mjs
var OrderEvent = class extends CxEvent {
};
var OrderPlacedEvent = class extends OrderEvent {
  static {
    this.type = "OrderPlacedEvent";
  }
};
var ReplenishmentOrderScheduledEvent = class extends OrderEvent {
  static {
    this.type = "ReplenishmentOrderScheduledEvent";
  }
};
var DownloadOrderInvoicesEvent = class extends CxEvent {
  static {
    this.type = "DownloadOrderInvoicesEvent";
  }
};
var ORDER_FEATURE = "order";
var ORDER_CORE_FEATURE = "orderCore";
function orderHistoryFacadeFactory() {
  return facadeFactory({
    // @ts-ignore: Deprecated methods will be removed with next major release
    facade: OrderHistoryFacade,
    feature: ORDER_CORE_FEATURE,
    methods: ["getOrderDetails", "loadOrderDetails", "clearOrderDetails", "getOrderHistoryList", "getOrderHistoryListLoaded", "loadOrderList", "clearOrderList", "getConsignmentTracking", "loadConsignmentTracking", "clearConsignmentTracking", "cancelOrder", "getCancelOrderLoading", "getCancelOrderSuccess", "resetCancelOrderProcessState", "getOrderDetailsLoading"],
    async: true
  });
}
var OrderHistoryFacade = class _OrderHistoryFacade {
  static {
    this.ɵfac = function OrderHistoryFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderHistoryFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderHistoryFacade,
      factory: () => orderHistoryFacadeFactory(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderHistoryFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: orderHistoryFacadeFactory
    }]
  }], null, null);
})();
function orderReturnRequestFacadeFactory() {
  return facadeFactory({
    facade: OrderReturnRequestFacade,
    feature: ORDER_CORE_FEATURE,
    methods: ["createOrderReturnRequest", "getOrderReturnRequest", "getOrderReturnRequestList", "loadOrderReturnRequestDetail", "loadOrderReturnRequestList", "clearOrderReturnRequestList", "getReturnRequestLoading", "getReturnRequestSuccess", "clearOrderReturnRequestDetail", "cancelOrderReturnRequest", "getCancelReturnRequestLoading", "getCancelReturnRequestSuccess", "resetCancelReturnRequestProcessState"],
    async: true
  });
}
var OrderReturnRequestFacade = class _OrderReturnRequestFacade {
  static {
    this.ɵfac = function OrderReturnRequestFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderReturnRequestFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderReturnRequestFacade,
      factory: () => orderReturnRequestFacadeFactory(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderReturnRequestFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: orderReturnRequestFacadeFactory
    }]
  }], null, null);
})();
var OrderFacade = class _OrderFacade {
  static {
    this.ɵfac = function OrderFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderFacade,
      factory: () => (() => facadeFactory({
        facade: _OrderFacade,
        feature: ORDER_CORE_FEATURE,
        methods: ["getOrderDetails", "clearPlacedOrder", "setPlacedOrder", "placeOrder", "placePaymentAuthorizedOrder", "getPickupEntries", "getDeliveryEntries"]
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: OrderFacade,
        feature: ORDER_CORE_FEATURE,
        methods: ["getOrderDetails", "clearPlacedOrder", "setPlacedOrder", "placeOrder", "placePaymentAuthorizedOrder", "getPickupEntries", "getDeliveryEntries"]
      })
    }]
  }], null, null);
})();
var ReorderOrderFacade = class _ReorderOrderFacade {
  static {
    this.ɵfac = function ReorderOrderFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReorderOrderFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ReorderOrderFacade,
      factory: () => (() => facadeFactory({
        facade: _ReorderOrderFacade,
        feature: ORDER_CORE_FEATURE,
        methods: ["reorder"]
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderOrderFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: ReorderOrderFacade,
        feature: ORDER_CORE_FEATURE,
        methods: ["reorder"]
      })
    }]
  }], null, null);
})();
function replenishmentOrderHistoryFacadeFactory() {
  return facadeFactory({
    facade: ReplenishmentOrderHistoryFacade,
    feature: ORDER_CORE_FEATURE,
    methods: ["loadReplenishmentOrderDetails", "getReplenishmentOrderDetails", "getReplenishmentOrderDetailsLoading", "getReplenishmentOrderDetailsSuccess", "getReplenishmentOrderDetailsError", "clearReplenishmentOrderDetails", "cancelReplenishmentOrder", "getCancelReplenishmentOrderLoading", "getCancelReplenishmentOrderSuccess", "getCancelReplenishmentOrderError", "clearCancelReplenishmentOrderProcessState", "getReplenishmentOrderHistoryList", "getReplenishmentOrderHistoryListLoading", "getReplenishmentOrderHistoryListError", "getReplenishmentOrderHistoryListSuccess", "loadReplenishmentOrderList", "clearReplenishmentOrderList"],
    async: true
  });
}
var ReplenishmentOrderHistoryFacade = class _ReplenishmentOrderHistoryFacade {
  static {
    this.ɵfac = function ReplenishmentOrderHistoryFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReplenishmentOrderHistoryFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ReplenishmentOrderHistoryFacade,
      factory: () => replenishmentOrderHistoryFacadeFactory(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderHistoryFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: replenishmentOrderHistoryFacadeFactory
    }]
  }], null, null);
})();
var ScheduledReplenishmentOrderFacade = class _ScheduledReplenishmentOrderFacade {
  static {
    this.ɵfac = function ScheduledReplenishmentOrderFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduledReplenishmentOrderFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ScheduledReplenishmentOrderFacade,
      factory: () => (() => facadeFactory({
        facade: _ScheduledReplenishmentOrderFacade,
        feature: ORDER_CORE_FEATURE,
        methods: ["scheduleReplenishmentOrder"]
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduledReplenishmentOrderFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: ScheduledReplenishmentOrderFacade,
        feature: ORDER_CORE_FEATURE,
        methods: ["scheduleReplenishmentOrder"]
      })
    }]
  }], null, null);
})();
var OrderAttachmentsFacade = class _OrderAttachmentsFacade {
  static {
    this.ɵfac = function OrderAttachmentsFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderAttachmentsFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderAttachmentsFacade,
      factory: () => (() => facadeFactory({
        facade: _OrderAttachmentsFacade,
        feature: ORDER_CORE_FEATURE,
        methods: ["getOrderAttachments", "downloadOrderAttachment"]
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderAttachmentsFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: OrderAttachmentsFacade,
        feature: ORDER_CORE_FEATURE,
        methods: ["getOrderAttachments", "downloadOrderAttachment"]
      })
    }]
  }], null, null);
})();
LAUNCH_CALLER["CONSIGNMENT_TRACKING"] = "CONSIGNMENT_TRACKING";
LAUNCH_CALLER["REORDER"] = "REORDER";
LAUNCH_CALLER["DOWNLOAD_ORDER_INVOICES"] = "DOWNLOAD_ORDER_INVOICES";
LAUNCH_CALLER["ORDER_ATTACHMENTS"] = "ORDER_ATTACHMENTS";
var OrderOutlets;
(function(OrderOutlets2) {
  OrderOutlets2["ORDER_CONSIGNMENT"] = "cx-order-consignment";
  OrderOutlets2["CONSIGNMENT_DELIVERY_INFO"] = "cx-order-consignment-delivery-info";
  OrderOutlets2["SERVICE_DETAILS"] = "cx-service-details-card";
})(OrderOutlets || (OrderOutlets = {}));
var recurrencePeriod = {
  DAILY: "DAILY",
  WEEKLY: "WEEKLY",
  MONTHLY: "MONTHLY"
};
var DaysOfWeek;
(function(DaysOfWeek2) {
  DaysOfWeek2["MONDAY"] = "MONDAY";
  DaysOfWeek2["TUESDAY"] = "TUESDAY";
  DaysOfWeek2["WEDNESDAY"] = "WEDNESDAY";
  DaysOfWeek2["THURSDAY"] = "THURSDAY";
  DaysOfWeek2["FRIDAY"] = "FRIDAY";
  DaysOfWeek2["SATURDAY"] = "SATURDAY";
  DaysOfWeek2["SUNDAY"] = "SUNDAY";
})(DaysOfWeek || (DaysOfWeek = {}));
var ORDER_TYPE;
(function(ORDER_TYPE2) {
  ORDER_TYPE2["PLACE_ORDER"] = "PLACE_ORDER";
  ORDER_TYPE2["SCHEDULE_REPLENISHMENT_ORDER"] = "SCHEDULE_REPLENISHMENT_ORDER";
})(ORDER_TYPE || (ORDER_TYPE = {}));
var defaultOrderRoutingConfig = {
  routing: {
    routes: {
      orders: {
        paths: ["my-account/orders"]
      },
      orderDetails: {
        paths: ["my-account/order/:orderCode"],
        paramsMapping: {
          orderCode: "code"
        }
      },
      orderGuest: {
        paths: ["guest/order/:orderCode"],
        paramsMapping: {
          orderCode: "code"
        }
      },
      orderReturn: {
        paths: ["my-account/order/return/:orderCode"],
        paramsMapping: {
          orderCode: "code"
        }
      },
      orderReturnConfirmation: {
        paths: ["my-account/order/return/confirmation/:orderCode"],
        paramsMapping: {
          orderCode: "code"
        }
      },
      orderCancel: {
        paths: ["my-account/order/cancel/:orderCode"],
        paramsMapping: {
          orderCode: "code"
        }
      },
      orderCancelConfirmation: {
        paths: ["my-account/order/cancel/confirmation/:orderCode"],
        paramsMapping: {
          orderCode: "code"
        }
      },
      returnRequestDetails: {
        paths: ["my-account/return-request/:returnCode"],
        paramsMapping: {
          returnCode: "rma"
        }
      },
      replenishmentOrders: {
        paths: ["my-account/my-replenishments"]
      },
      replenishmentDetails: {
        paths: ["my-account/my-replenishment/:replenishmentOrderCode"],
        paramsMapping: {
          replenishmentOrderCode: "replenishmentOrderCode"
        }
      },
      replenishmentConfirmation: {
        paths: ["replenishment/confirmation"]
      },
      orderConfirmation: {
        paths: ["order-confirmation"]
      }
    }
  }
};
var OrderDetailsOrderEntriesContextToken = new InjectionToken("OrderDetailsOrderEntriesContext");
var OrderConfirmationOrderEntriesContextToken = new InjectionToken("OrderConfirmationOrderEntriesContext");
var USE_MY_ACCOUNT_V2_ORDER = new InjectionToken("feature flag to enable enhanced UI for Order related pages under My-Account", {
  providedIn: "root",
  factory: () => false
});
var defaultOrderConfig = {
  orderAttachments: {
    previewMimeTypes: ["text/plain", "application/json", "application/xml", "application/xhtml+xml", "image/jpeg", "image/png", "image/gif", "image/bmp", "image/svg+xml", "image/webp", "image/x-icon", "image/tiff", "application/pdf"]
  },
  showOrderQuoteLink: false
};
var ORDER_CMS_COMPONENTS = ["CancelOrderComponent", "CancelOrderConfirmationComponent", "ReturnOrderComponent", "ReturnOrderConfirmationComponent", "AccountOrderDetailsActionsComponent", "AccountOrderDetailsItemsComponent", "AccountOrderDetailsTotalsComponent", "AccountOrderDetailsOverviewComponent", "AccountOrderDetailsBillingComponent", "AccountOrderDetailsGroupedItemsComponent", "AccountOrderDetailsSimpleOverviewComponent", "AccountOrderHistoryComponent", "ReplenishmentDetailItemsComponent", "AccountOrderDetailsReorderComponent", "ReplenishmentDetailTotalsComponent", "ReplenishmentDetailShippingComponent", "ReplenishmentDetailActionsComponent", "ReplenishmentDetailOrderHistoryComponent", "AccountReplenishmentHistoryComponent", "ReturnRequestOverviewComponent", "ReturnRequestItemsComponent", "ReturnRequestTotalsComponent", "OrderReturnRequestListComponent", "OrderConfirmationThankMessageComponent", "OrderConfirmationItemsComponent", "OrderConfirmationTotalsComponent", "OrderConfirmationOverviewComponent", "OrderConfirmationShippingComponent", "OrderConfirmationBillingComponent", "OrderConfirmationContinueButtonComponent", "ReplenishmentConfirmationMessageComponent", "ReplenishmentConfirmationOverviewComponent", "ReplenishmentConfirmationItemsComponent", "ReplenishmentConfirmationTotalsComponent", "MyAccountViewOrderComponent", "AccountOrderAttachmentsComponent"];
function defaultOrderComponentsConfig() {
  const config = {
    featureModules: {
      [ORDER_FEATURE]: {
        cmsComponents: ORDER_CMS_COMPONENTS,
        dependencies: [CART_BASE_FEATURE]
      },
      // by default core is bundled together with components
      [ORDER_CORE_FEATURE]: ORDER_FEATURE
    }
  };
  return config;
}
var OrderRootModule = class _OrderRootModule {
  static {
    this.ɵfac = function OrderRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderRootModule,
      imports: [RouterModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultOrderComponentsConfig), provideDefaultConfig(defaultOrderRoutingConfig), provideDefaultConfig(defaultOrderConfig)],
      imports: [RouterModule.forChild([{
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          pageLabel: "order",
          cxRoute: "orderGuest"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderDetails",
          cxContext: {
            [ORDER_ENTRIES_CONTEXT]: OrderDetailsOrderEntriesContextToken
          }
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderCancel"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderCancelConfirmation"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderReturn"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderReturnConfirmation"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orders"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "replenishmentDetails"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "replenishmentOrders"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "returnRequestDetails"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderConfirmation",
          cxContext: {
            [ORDER_ENTRIES_CONTEXT]: OrderConfirmationOrderEntriesContextToken
          }
        }
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderRootModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild([{
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          pageLabel: "order",
          cxRoute: "orderGuest"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderDetails",
          cxContext: {
            [ORDER_ENTRIES_CONTEXT]: OrderDetailsOrderEntriesContextToken
          }
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderCancel"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderCancelConfirmation"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderReturn"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderReturnConfirmation"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orders"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "replenishmentDetails"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "replenishmentOrders"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [AuthGuard, CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "returnRequestDetails"
        }
      }, {
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orderConfirmation",
          cxContext: {
            [ORDER_ENTRIES_CONTEXT]: OrderConfirmationOrderEntriesContextToken
          }
        }
      }])],
      providers: [provideDefaultConfigFactory(defaultOrderComponentsConfig), provideDefaultConfig(defaultOrderRoutingConfig), provideDefaultConfig(defaultOrderConfig)]
    }]
  }], null, null);
})();
var ORDER_NORMALIZER = new InjectionToken("OrderNormalizer");
var REPLENISHMENT_ORDER_NORMALIZER = new InjectionToken("ReplenishmentOrderNormalizer");
var REORDER_ORDER_NORMALIZER = new InjectionToken("ReorderOrderNormalizer");
var ORDER_HISTORY_NORMALIZER = new InjectionToken("OrderHistoryNormalizer");
var CONSIGNMENT_TRACKING_NORMALIZER = new InjectionToken("ConsignmentTrackingNormalizer");
var ORDER_RETURN_REQUEST_NORMALIZER = new InjectionToken("OrderReturnRequestNormalizer");
var ORDER_RETURN_REQUEST_INPUT_SERIALIZER = new InjectionToken("OrderReturnRequestInputSerializer");
var ORDER_RETURNS_NORMALIZER = new InjectionToken("OrderReturnsNormalizer");
var REPLENISHMENT_ORDER_HISTORY_NORMALIZER = new InjectionToken("ReplenishmentOrderHistoryNormalizer");
var REPLENISHMENT_ORDER_FORM_SERIALIZER = new InjectionToken("ReplenishmentOrderFormSerializer");
function deliveryAddressCard(textTitle, textPhone, textMobile, deliveryAddress, countryName) {
  if (!countryName) {
    countryName = deliveryAddress?.country?.name;
  }
  let region = "";
  if (deliveryAddress && deliveryAddress.region && deliveryAddress.region.isocode) {
    region = deliveryAddress.region.isocode + ", ";
  }
  const numbers = getAddressNumbers(deliveryAddress, textPhone, textMobile);
  let fullName;
  if (deliveryAddress.firstName && deliveryAddress.lastName) {
    fullName = deliveryAddress.firstName + " " + deliveryAddress.lastName;
  } else if (deliveryAddress.firstName) {
    fullName = deliveryAddress.firstName;
  } else if (deliveryAddress.lastName) {
    fullName = deliveryAddress.lastName;
  }
  return {
    title: textTitle,
    textBold: fullName,
    text: [deliveryAddress.line1, deliveryAddress.line2, deliveryAddress.town + ", " + region + countryName, deliveryAddress.postalCode, numbers]
  };
}
function deliveryModeCard(textTitle, deliveryMode) {
  return {
    title: textTitle,
    textBold: deliveryMode.name,
    text: [deliveryMode.description, deliveryMode.deliveryCost?.formattedValue ? deliveryMode.deliveryCost?.formattedValue : ""]
  };
}
function paymentMethodCard(textTitle, textExpires, paymentDetails) {
  return {
    title: textTitle,
    text: [paymentDetails.cardType?.name, paymentDetails.accountHolderName, paymentDetails.cardNumber, textExpires]
  };
}
function billingAddressCard(textTitle, textBillTo, paymentDetails) {
  const region = paymentDetails.billingAddress?.region?.isocode ? paymentDetails.billingAddress?.region?.isocode + ", " : "";
  return {
    title: textTitle,
    text: [textBillTo, paymentDetails.billingAddress?.firstName + " " + paymentDetails.billingAddress?.lastName, paymentDetails.billingAddress?.line1, paymentDetails.billingAddress?.town + ", " + region + paymentDetails.billingAddress?.country?.isocode, paymentDetails.billingAddress?.postalCode]
  };
}
var OrderConfig = class _OrderConfig {
  static {
    this.ɵfac = function OrderConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderConfig,
      factory: function OrderConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _OrderConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();

export {
  OrderEvent,
  OrderPlacedEvent,
  ReplenishmentOrderScheduledEvent,
  DownloadOrderInvoicesEvent,
  ORDER_FEATURE,
  ORDER_CORE_FEATURE,
  orderHistoryFacadeFactory,
  OrderHistoryFacade,
  orderReturnRequestFacadeFactory,
  OrderReturnRequestFacade,
  OrderFacade,
  ReorderOrderFacade,
  replenishmentOrderHistoryFacadeFactory,
  ReplenishmentOrderHistoryFacade,
  ScheduledReplenishmentOrderFacade,
  OrderAttachmentsFacade,
  OrderOutlets,
  recurrencePeriod,
  DaysOfWeek,
  ORDER_TYPE,
  OrderDetailsOrderEntriesContextToken,
  OrderConfirmationOrderEntriesContextToken,
  USE_MY_ACCOUNT_V2_ORDER,
  ORDER_CMS_COMPONENTS,
  defaultOrderComponentsConfig,
  OrderRootModule,
  ORDER_NORMALIZER,
  REPLENISHMENT_ORDER_NORMALIZER,
  REORDER_ORDER_NORMALIZER,
  ORDER_HISTORY_NORMALIZER,
  CONSIGNMENT_TRACKING_NORMALIZER,
  ORDER_RETURN_REQUEST_NORMALIZER,
  ORDER_RETURN_REQUEST_INPUT_SERIALIZER,
  ORDER_RETURNS_NORMALIZER,
  REPLENISHMENT_ORDER_HISTORY_NORMALIZER,
  REPLENISHMENT_ORDER_FORM_SERIALIZER,
  deliveryAddressCard,
  deliveryModeCard,
  paymentMethodCard,
  billingAddressCard,
  OrderConfig
};
//# sourceMappingURL=chunk-UIW5AQFA.js.map
