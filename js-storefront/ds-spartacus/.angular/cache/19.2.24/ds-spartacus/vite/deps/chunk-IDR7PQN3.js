import {
  ASM_FEATURE
} from "./chunk-ZXNGX3YN.js";
import {
  LAUNCH_CALLER,
  PageComponentModule
} from "./chunk-D5RDRHN5.js";
import {
  CURRENCY_CONTEXT_ID,
  CurrencyService,
  LANGUAGE_CONTEXT_ID,
  LanguageService,
  OccEndpointsService,
  SiteContextConfig,
  facadeFactory,
  getContextParameterDefault,
  provideDefaultConfig
} from "./chunk-VIVIQI6G.js";
import {
  HTTP_INTERCEPTORS
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

// node_modules/@spartacus/asm/fesm2022/spartacus-asm-customer-360-root.mjs
var ASM_CUSTOMER_360_FEATURE = "asmCustomer360";
var ASM_CUSTOMER_360_CORE_FEATURE = "asmCustomer360Core";
var SiteContextInterceptor = class _SiteContextInterceptor {
  constructor(languageService, currencyService, occEndpoints, config) {
    this.languageService = languageService;
    this.currencyService = currencyService;
    this.occEndpoints = occEndpoints;
    this.config = config;
    this.activeLang = getContextParameterDefault(this.config, LANGUAGE_CONTEXT_ID);
    this.activeCurr = getContextParameterDefault(this.config, CURRENCY_CONTEXT_ID);
    this.languageService.getActive().subscribe((data) => this.activeLang = data);
    this.currencyService.getActive().subscribe((data) => {
      this.activeCurr = data;
    });
  }
  intercept(request, next) {
    if (request.url.includes(this.occEndpoints.getBaseUrl({
      prefix: false,
      baseSite: false
    })) && request.url.includes("/assistedservicewebservices/")) {
      request = request.clone({
        setParams: {
          lang: this.activeLang ?? "",
          curr: this.activeCurr ?? ""
        }
      });
    }
    return next.handle(request);
  }
  static {
    this.ɵfac = function SiteContextInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SiteContextInterceptor)(ɵɵinject(LanguageService), ɵɵinject(CurrencyService), ɵɵinject(OccEndpointsService), ɵɵinject(SiteContextConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SiteContextInterceptor,
      factory: _SiteContextInterceptor.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteContextInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: LanguageService
  }, {
    type: CurrencyService
  }, {
    type: OccEndpointsService
  }, {
    type: SiteContextConfig
  }], null);
})();
var AsmCustomer360RootModule = class _AsmCustomer360RootModule {
  static {
    this.ɵfac = function AsmCustomer360RootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360RootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmCustomer360RootModule,
      imports: [PageComponentModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        featureModules: {
          [ASM_CUSTOMER_360_FEATURE]: {
            dependencies: [ASM_FEATURE]
          },
          [ASM_CUSTOMER_360_CORE_FEATURE]: ASM_CUSTOMER_360_FEATURE
        }
      }), {
        provide: HTTP_INTERCEPTORS,
        useExisting: SiteContextInterceptor,
        multi: true
      }],
      imports: [PageComponentModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360RootModule, [{
    type: NgModule,
    args: [{
      imports: [PageComponentModule],
      providers: [provideDefaultConfig({
        featureModules: {
          [ASM_CUSTOMER_360_FEATURE]: {
            dependencies: [ASM_FEATURE]
          },
          [ASM_CUSTOMER_360_CORE_FEATURE]: ASM_CUSTOMER_360_FEATURE
        }
      }), {
        provide: HTTP_INTERCEPTORS,
        useExisting: SiteContextInterceptor,
        multi: true
      }]
    }]
  }], null, null);
})();
var AsmCustomer360Facade = class _AsmCustomer360Facade {
  static {
    this.ɵfac = function AsmCustomer360Facade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomer360Facade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmCustomer360Facade,
      factory: () => (() => facadeFactory({
        facade: _AsmCustomer360Facade,
        feature: ASM_CUSTOMER_360_FEATURE,
        methods: ["get360Data"]
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomer360Facade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: AsmCustomer360Facade,
        feature: ASM_CUSTOMER_360_FEATURE,
        methods: ["get360Data"]
      })
    }]
  }], null, null);
})();
var AsmCustomer360SectionConfig = class {
};
var AsmCustomer360SectionData = class {
  constructor(data) {
    this.data = data;
  }
};
var AsmCustomer360TabConfig = class {
};
var AsmCustomer360TabsConfig = class {
};
var AsmCustomer360Type;
(function(AsmCustomer360Type2) {
  AsmCustomer360Type2["REVIEW_LIST"] = "c360ReviewList";
  AsmCustomer360Type2["STORE_LOCATION"] = "c360StoreLocation";
  AsmCustomer360Type2["PRODUCT_INTEREST_LIST"] = "c360CustomerProductInterestList";
  AsmCustomer360Type2["SUPPORT_TICKET_LIST"] = "c360TicketList";
  AsmCustomer360Type2["CUSTOMER_PROFILE"] = "c360CustomerProfile";
  AsmCustomer360Type2["ACTIVE_CART"] = "c360Cart";
  AsmCustomer360Type2["SAVED_CART"] = "c360SavedCart";
  AsmCustomer360Type2["OVERVIEW"] = "c360Overview";
  AsmCustomer360Type2["ACTIVITY_LIST"] = "c360ActivityList";
  AsmCustomer360Type2["COUPON_LIST"] = "c360CouponList";
  AsmCustomer360Type2["PROMOTION_LIST"] = "c360PromotionList";
  AsmCustomer360Type2["CUSTOMER_COUPON_LIST"] = "c360CustomerCouponList";
})(AsmCustomer360Type || (AsmCustomer360Type = {}));
var PaymentCardCode;
(function(PaymentCardCode2) {
  PaymentCardCode2["VISA"] = "visa";
  PaymentCardCode2["MASTER"] = "master";
  PaymentCardCode2["MASTERCARD_EUROCARD"] = "mastercard_eurocard";
  PaymentCardCode2["DINERS"] = "diners";
  PaymentCardCode2["AMEX"] = "amex";
})(PaymentCardCode || (PaymentCardCode = {}));
var KeyBoardEventCode;
(function(KeyBoardEventCode2) {
  KeyBoardEventCode2["ARROW_LEFT"] = "ArrowLeft";
  KeyBoardEventCode2["ARROW_RIGHT"] = "ArrowRight";
  KeyBoardEventCode2["ARROW_DOWN"] = "ArrowDown";
  KeyBoardEventCode2["ARROW_UP"] = "ArrowUp";
  KeyBoardEventCode2["HOME"] = "Home";
  KeyBoardEventCode2["END"] = "End";
  KeyBoardEventCode2["PAGE_DOWN"] = "PageDown";
  KeyBoardEventCode2["PAGE_UP"] = "PageUp";
})(KeyBoardEventCode || (KeyBoardEventCode = {}));
var AsmDialogActionType;
(function(AsmDialogActionType2) {
  AsmDialogActionType2["NAVIGATE"] = "NAVIGATE";
})(AsmDialogActionType || (AsmDialogActionType = {}));
LAUNCH_CALLER["ASM_CUSTOMER_360"] = "ASM_CUSTOMER_360";

export {
  ASM_CUSTOMER_360_FEATURE,
  ASM_CUSTOMER_360_CORE_FEATURE,
  AsmCustomer360RootModule,
  AsmCustomer360Facade,
  AsmCustomer360SectionConfig,
  AsmCustomer360SectionData,
  AsmCustomer360TabConfig,
  AsmCustomer360TabsConfig,
  AsmCustomer360Type,
  PaymentCardCode,
  KeyBoardEventCode,
  AsmDialogActionType
};
//# sourceMappingURL=chunk-IDR7PQN3.js.map
