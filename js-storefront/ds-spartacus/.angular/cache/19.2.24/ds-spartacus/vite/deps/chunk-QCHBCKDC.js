import {
  UserAccountChangedEvent,
  UserAccountFacade,
  VerificationTokenFacade
} from "./chunk-LZQV6UAH.js";
import {
  CommandService,
  ConverterService,
  InterceptorUtil,
  LoggerService,
  LoginEvent,
  LogoutEvent,
  OccEndpointsService,
  QueryService,
  USE_CLIENT_TOKEN,
  UserIdService,
  provideDefaultConfig,
  tryNormalizeHttpError
} from "./chunk-VIVIQI6G.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-2A6OHZCE.js";
import {
  Injectable,
  InjectionToken,
  NgModule,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import {
  catchError
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/user/fesm2022/spartacus-user-account-core.mjs
var USER_ACCOUNT_NORMALIZER = new InjectionToken("UserAccountNormalizer");
var USER_ACCOUNT_SERIALIZER = new InjectionToken("UserAccountSerializer");
var VERIFICATION_TOKEN_NORMALIZER = new InjectionToken("VerificationTokenNormalizer");
var LOGIN_FORM_SERIALIZER = new InjectionToken("LoginFormSerializer");
var UserAccountAdapter = class {
};
var UserAccountConnector = class _UserAccountConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  get(userId) {
    return this.adapter.load(userId);
  }
  createVerificationToken(verificationTokenCreation) {
    return this.adapter.createVerificationToken(verificationTokenCreation);
  }
  static {
    this.ɵfac = function UserAccountConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAccountConnector)(ɵɵinject(UserAccountAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserAccountConnector,
      factory: _UserAccountConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAccountConnector, [{
    type: Injectable
  }], () => [{
    type: UserAccountAdapter
  }], null);
})();
var UserAccountService = class _UserAccountService {
  constructor(userAccountConnector, userIdService, query) {
    this.userAccountConnector = userAccountConnector;
    this.userIdService = userIdService;
    this.query = query;
    this.userQuery = this.query.create(() => this.userIdService.takeUserId(true).pipe(switchMap((userId) => this.userAccountConnector.get(userId))), {
      reloadOn: [UserAccountChangedEvent],
      resetOn: [LoginEvent, LogoutEvent]
    });
  }
  /**
   * Returns the user according the userId
   * no use query for userId can change every time
   */
  getById(userId) {
    return this.userAccountConnector.get(userId);
  }
  /**
   * Returns the current user.
   */
  get() {
    return this.userQuery.get();
  }
  static {
    this.ɵfac = function UserAccountService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAccountService)(ɵɵinject(UserAccountConnector), ɵɵinject(UserIdService), ɵɵinject(QueryService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserAccountService,
      factory: _UserAccountService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAccountService, [{
    type: Injectable
  }], () => [{
    type: UserAccountConnector
  }, {
    type: UserIdService
  }, {
    type: QueryService
  }], null);
})();
var VerificationTokenService = class _VerificationTokenService {
  constructor() {
    this.connector = inject(UserAccountConnector);
    this.command = inject(CommandService);
    this.createVerificationTokenCommand = this.command.create(({
      verificationTokenCreation
    }) => this.connector.createVerificationToken(verificationTokenCreation));
  }
  /**
   * create verification token
   */
  createVerificationToken(verificationTokenCreation) {
    return this.createVerificationTokenCommand.execute({
      verificationTokenCreation
    });
  }
  static {
    this.ɵfac = function VerificationTokenService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VerificationTokenService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _VerificationTokenService,
      factory: _VerificationTokenService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerificationTokenService, [{
    type: Injectable
  }], null, null);
})();
var facadeProviders = [UserAccountService, {
  provide: UserAccountFacade,
  useExisting: UserAccountService
}, VerificationTokenService, {
  provide: VerificationTokenFacade,
  useExisting: VerificationTokenService
}];
var UserAccountCoreModule = class _UserAccountCoreModule {
  static {
    this.ɵfac = function UserAccountCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAccountCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserAccountCoreModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [UserAccountConnector, ...facadeProviders]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAccountCoreModule, [{
    type: NgModule,
    args: [{
      providers: [UserAccountConnector, ...facadeProviders]
    }]
  }], null, null);
})();

// node_modules/@spartacus/user/fesm2022/spartacus-user-account-occ.mjs
var defaultOccUserAccountConfig = {
  backend: {
    occ: {
      endpoints: {
        user: "users/${userId}",
        createVerificationToken: "users/anonymous/verificationToken"
      }
    }
  }
};
var CONTENT_TYPE_JSON_HEADER = {
  "Content-Type": "application/json"
};
var OccUserAccountAdapter = class _OccUserAccountAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  load(userId) {
    const url = this.occEndpoints.buildUrl("user", {
      urlParams: {
        userId
      }
    });
    return this.http.get(url).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), this.converter.pipeable(USER_ACCOUNT_NORMALIZER));
  }
  createVerificationToken(verificationTokenCreation) {
    const url = this.occEndpoints.buildUrl("createVerificationToken");
    const headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER)));
    verificationTokenCreation = this.converter.convert(verificationTokenCreation, LOGIN_FORM_SERIALIZER);
    return this.http.post(url, verificationTokenCreation, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), this.converter.pipeable(VERIFICATION_TOKEN_NORMALIZER));
  }
  static {
    this.ɵfac = function OccUserAccountAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccUserAccountAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccUserAccountAdapter,
      factory: _OccUserAccountAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccUserAccountAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var UserAccountOccModule = class _UserAccountOccModule {
  static {
    this.ɵfac = function UserAccountOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAccountOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserAccountOccModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccUserAccountConfig), {
        provide: UserAccountAdapter,
        useClass: OccUserAccountAdapter
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAccountOccModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig(defaultOccUserAccountConfig), {
        provide: UserAccountAdapter,
        useClass: OccUserAccountAdapter
      }]
    }]
  }], null, null);
})();

export {
  UserAccountCoreModule,
  defaultOccUserAccountConfig,
  OccUserAccountAdapter,
  UserAccountOccModule
};
//# sourceMappingURL=chunk-QCHBCKDC.js.map
