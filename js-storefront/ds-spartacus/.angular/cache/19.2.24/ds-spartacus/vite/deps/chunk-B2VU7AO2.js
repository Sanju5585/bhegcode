import {
  CmsPageGuard,
  FileReaderService,
  PageLayoutComponent
} from "./chunk-D5RDRHN5.js";
import {
  WindowRef,
  facadeFactory,
  provideDefaultConfig,
  provideDefaultConfigFactory
} from "./chunk-VIVIQI6G.js";
import {
  RouterModule
} from "./chunk-EBCNDD52.js";
import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from "./chunk-2A6OHZCE.js";
import {
  Injectable,
  NgModule,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-7OJSO65L.js";
import {
  catchError
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-account-summary-root.mjs
var listPath = `organization/account-summary`;
var defaultAccountSummaryRoutingConfig = {
  routing: {
    routes: {
      orgAccountSummary: {
        paths: [`${listPath}`]
      },
      orgAccountSummaryDetails: {
        paths: [`${listPath}/details/:orgUnit`],
        paramsMapping: {
          orgUnit: "uid"
        }
      }
    }
  }
};
var ORGANIZATION_ACCOUNT_SUMMARY_FEATURE = "organizationAccountSummary";
var ORGANIZATION_ACCOUNT_SUMMARY_CORE_FEATURE = "organizationAccountSummaryCore";
var BlobErrorInterceptor = class _BlobErrorInterceptor {
  constructor() {
    this.fileReaderService = inject(FileReaderService);
    this.windowRef = inject(WindowRef);
  }
  intercept(request, next) {
    return next.handle(request).pipe(catchError((errResponse) => {
      if (this.windowRef.isBrowser() && errResponse instanceof HttpErrorResponse && errResponse.error instanceof Blob && errResponse.error.type === "application/json") {
        return this.fileReaderService.loadTextFile(errResponse.error).pipe(switchMap((errorString) => {
          const error = JSON.parse(errorString);
          throw new HttpErrorResponse(__spreadProps(__spreadValues({}, errResponse), {
            error,
            url: errResponse.url ?? void 0
          }));
        }));
      } else {
        throw errResponse;
      }
    }));
  }
  static {
    this.ɵfac = function BlobErrorInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlobErrorInterceptor)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BlobErrorInterceptor,
      factory: _BlobErrorInterceptor.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlobErrorInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function defaultAccountSummaryComponentsConfig() {
  const config = {
    featureModules: {
      [ORGANIZATION_ACCOUNT_SUMMARY_FEATURE]: {
        cmsComponents: ["ManageAccountSummaryListComponent", "AccountSummaryHeaderComponent", "AccountSummaryDocumentComponent"]
      }
    }
  };
  return config;
}
var AccountSummaryRootModule = class _AccountSummaryRootModule {
  static {
    this.ɵfac = function AccountSummaryRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountSummaryRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AccountSummaryRootModule,
      imports: [RouterModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultAccountSummaryRoutingConfig), provideDefaultConfigFactory(defaultAccountSummaryComponentsConfig), {
        provide: HTTP_INTERCEPTORS,
        useExisting: BlobErrorInterceptor,
        multi: true
      }],
      imports: [RouterModule.forChild([{
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orgAccountSummaryDetails"
        }
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSummaryRootModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild([{
        // @ts-ignore
        path: null,
        canActivate: [CmsPageGuard],
        component: PageLayoutComponent,
        data: {
          cxRoute: "orgAccountSummaryDetails"
        }
      }])],
      providers: [provideDefaultConfig(defaultAccountSummaryRoutingConfig), provideDefaultConfigFactory(defaultAccountSummaryComponentsConfig), {
        provide: HTTP_INTERCEPTORS,
        useExisting: BlobErrorInterceptor,
        multi: true
      }]
    }]
  }], null, null);
})();
var AccountSummaryFacade = class _AccountSummaryFacade {
  static {
    this.ɵfac = function AccountSummaryFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountSummaryFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AccountSummaryFacade,
      factory: () => (() => facadeFactory({
        facade: _AccountSummaryFacade,
        feature: ORGANIZATION_ACCOUNT_SUMMARY_FEATURE,
        methods: ["getAccountSummary", "getDocumentList", "getDocumentAttachment"]
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountSummaryFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: AccountSummaryFacade,
        feature: ORGANIZATION_ACCOUNT_SUMMARY_FEATURE,
        methods: ["getAccountSummary", "getDocumentList", "getDocumentAttachment"]
      })
    }]
  }], null, null);
})();
var DocumentStatus;
(function(DocumentStatus2) {
  DocumentStatus2["ALL"] = "all";
  DocumentStatus2["OPEN"] = "open";
  DocumentStatus2["CLOSED"] = "closed";
})(DocumentStatus || (DocumentStatus = {}));
var DocumentFields;
(function(DocumentFields2) {
  DocumentFields2["BASIC"] = "BASIC";
  DocumentFields2["DEFAULT"] = "DEFAULT";
  DocumentFields2["FULL"] = "FULL";
})(DocumentFields || (DocumentFields = {}));
var FilterByOptions;
(function(FilterByOptions2) {
  FilterByOptions2["DOCUMENT_NUMBER"] = "orgDocumentId";
  FilterByOptions2["DOCUMENT_NUMBER_RANGE"] = "orgDocumentIdRange";
  FilterByOptions2["DOCUMENT_TYPE"] = "orgDocumentType";
  FilterByOptions2["DATE_RANGE"] = "createdAtDateRange";
  FilterByOptions2["DUE_DATE_RANGE"] = "dueAtDateRange";
  FilterByOptions2["AMOUNT_RANGE"] = "amountRange";
  FilterByOptions2["OPEN_AMOUNT_RANGE"] = "openAmountRange";
})(FilterByOptions || (FilterByOptions = {}));

export {
  defaultAccountSummaryRoutingConfig,
  ORGANIZATION_ACCOUNT_SUMMARY_FEATURE,
  ORGANIZATION_ACCOUNT_SUMMARY_CORE_FEATURE,
  BlobErrorInterceptor,
  defaultAccountSummaryComponentsConfig,
  AccountSummaryRootModule,
  AccountSummaryFacade,
  DocumentStatus,
  DocumentFields,
  FilterByOptions
};
//# sourceMappingURL=chunk-B2VU7AO2.js.map
