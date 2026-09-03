import {
  UserAccountFacade
} from "./chunk-LZQV6UAH.js";
import {
  ICON_TYPE,
  LAUNCH_CALLER,
  LaunchDialogService,
  PageComponentModule
} from "./chunk-D5RDRHN5.js";
import {
  AuthHttpHeaderService,
  AuthMultisiteIsolationService,
  AuthRedirectService,
  AuthService,
  AuthStorageService,
  Config,
  FeatureModulesService,
  GlobalMessageService,
  GlobalMessageType,
  InterceptorUtil,
  OAuthLibWrapperService,
  OCC_HTTP_TOKEN,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CONSTANTS,
  OCC_USER_ID_CURRENT,
  OccEndpointsService,
  RoutingService,
  USE_CUSTOMER_SUPPORT_AGENT_TOKEN,
  UserIdService,
  WindowRef,
  authGroup_actions,
  facadeFactory,
  provideDefaultConfig
} from "./chunk-VIVIQI6G.js";
import {
  Store
} from "./chunk-2FUOVDAV.js";
import {
  HTTP_INTERCEPTORS
} from "./chunk-2A6OHZCE.js";
import {
  CommonModule,
  Location
} from "./chunk-S7KROBXW.js";
import {
  APP_INITIALIZER,
  Inject,
  Injectable,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import {
  lastValueFrom
} from "./chunk-FBVS4YZX.js";
import {
  BehaviorSubject,
  combineLatest,
  concatMap,
  from,
  map,
  of,
  take
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __async,
  __spreadValues,
  __superGet
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/asm/fesm2022/spartacus-asm-root.mjs
var AsmConfig = class _AsmConfig {
  static {
    this.ɵfac = function AsmConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmConfig,
      factory: function AsmConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _AsmConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var ASM_ENABLED_LOCAL_STORAGE_KEY = "asm_enabled";
var AsmEnablerService = class _AsmEnablerService {
  constructor(location, winRef, launchDialogService, featureModules) {
    this.location = location;
    this.winRef = winRef;
    this.launchDialogService = launchDialogService;
    this.featureModules = featureModules;
  }
  /**
   * Loads the ASM UI if needed. The ASM UI will be added based on the
   * existence of a URL parameter or previous usage given by local storage.
   */
  load() {
    if (this.isEnabled()) {
      this.addUi();
    }
  }
  /**
   * Indicates whether the ASM module is enabled.
   */
  isEnabled() {
    if (this.isLaunched() && !this.isUsedBefore()) {
      if (this.winRef.localStorage) {
        this.winRef.localStorage.setItem(ASM_ENABLED_LOCAL_STORAGE_KEY, "true");
      }
    }
    return this.isLaunched() || this.isUsedBefore() || this.isEmulateInURL();
  }
  /**
   * Indicates whether ASM is launched through the URL,
   * using the asm flag in the URL.
   */
  isLaunched() {
    const params = this.location.path().split("?")[1];
    return !!params && params.split("&").includes("asm=true");
  }
  /**
   * check whether try to emulate customer from deeplink
   * */
  isEmulateInURL() {
    return this.location.path().indexOf("assisted-service/emulate?") > 0;
  }
  /**
   * Evaluates local storage where we persist the usage of ASM.
   */
  isUsedBefore() {
    if (this.winRef.localStorage) {
      return this.winRef.localStorage.getItem(ASM_ENABLED_LOCAL_STORAGE_KEY) === "true";
    } else {
      return false;
    }
  }
  /**
   * Adds the ASM UI by using the `cx-storefront` outlet.
   */
  addUi() {
    this.featureModules.resolveFeature("asm").subscribe(() => this.launchDialogService.launch(LAUNCH_CALLER.ASM));
  }
  static {
    this.ɵfac = function AsmEnablerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmEnablerService)(ɵɵinject(Location), ɵɵinject(WindowRef), ɵɵinject(LaunchDialogService), ɵɵinject(FeatureModulesService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmEnablerService,
      factory: _AsmEnablerService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmEnablerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Location
  }, {
    type: WindowRef
  }, {
    type: LaunchDialogService
  }, {
    type: FeatureModulesService
  }], null);
})();
var AsmLoaderModule = class _AsmLoaderModule {
  static {
    this.ɵfac = function AsmLoaderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmLoaderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmLoaderModule,
      imports: [CommonModule, PageComponentModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: asmFactory,
        deps: [AsmEnablerService],
        multi: true
      }],
      imports: [CommonModule, PageComponentModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmLoaderModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PageComponentModule],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: asmFactory,
        deps: [AsmEnablerService],
        multi: true
      }]
    }]
  }], null, null);
})();
function asmFactory(asmEnablerService) {
  const isReady = () => {
    asmEnablerService.load();
  };
  return isReady;
}
var CustomerListColumnActionType;
(function(CustomerListColumnActionType2) {
  CustomerListColumnActionType2["START_SESSION"] = "START_SESSION";
  CustomerListColumnActionType2["ORDER_HISTORY"] = "ORDER_HISTORY";
  CustomerListColumnActionType2["ACTIVE_CART"] = "ACTIVE_CART";
  CustomerListColumnActionType2["CUSTOMER_360"] = "CUSTOMER_360";
})(CustomerListColumnActionType || (CustomerListColumnActionType = {}));
var defaultAsmConfig = {
  asm: {
    agentSessionTimer: {
      startingDelayInSeconds: 600
    },
    customerSearch: {
      maxResults: 20
    },
    customerList: {
      pageSize: 5,
      showAvatar: true,
      columns: [{
        headerLocalizationKey: "asm.customerList.tableHeader.customer",
        renderer: (customer) => {
          return customer?.name ?? "";
        },
        actionType: CustomerListColumnActionType.START_SESSION
      }, {
        headerLocalizationKey: "asm.customerList.tableHeader.email",
        renderer: (customer) => {
          return customer?.uid ?? "";
        }
      }, {
        headerLocalizationKey: "asm.customerList.tableHeader.phone",
        renderer: (customer) => {
          return customer?.defaultAddress?.phone ?? "";
        }
      }, {
        headerLocalizationKey: "asm.customerList.tableHeader.account",
        renderer: (customer) => {
          return customer?.orgUnit?.name ?? "";
        }
      }, {
        headerLocalizationKey: "asm.customerList.tableHeader.activeCart",
        icon: {
          symbol: ICON_TYPE.CART,
          captionLocalizationKey: "asm.customerList.tableHeader.viewActiveCart"
        },
        actionType: CustomerListColumnActionType.ACTIVE_CART
      }, {
        headerLocalizationKey: "asm.customerList.tableHeader.orders",
        icon: {
          symbol: ICON_TYPE.C360_INVOICE,
          captionLocalizationKey: "asm.customerList.tableHeader.viewOrders"
        },
        actionType: CustomerListColumnActionType.ORDER_HISTORY
      }, {
        headerLocalizationKey: "asm.customerList.tableHeader.customer360",
        icon: {
          symbol: ICON_TYPE.C360_CIRCLE_USER,
          captionLocalizationKey: "asm.customerList.tableHeader.viewCustomer360"
        },
        actionType: CustomerListColumnActionType.CUSTOMER_360
      }]
    },
    userIdHttpHeader: {
      enable: true
    }
  }
};
var UserIdHttpHeaderInterceptor = class _UserIdHttpHeaderInterceptor {
  constructor(config, userIdService, userIdConstants) {
    this.config = config;
    this.userIdService = userIdService;
    this.userIdConstants = userIdConstants;
    this.userIdHeader = "sap-commerce-cloud-user-id";
    this.uniqueUserIdConstants = new Set(Object.values(userIdConstants));
  }
  intercept(httpRequest, next) {
    if (!this.config.asm?.userIdHttpHeader?.enable) {
      return next.handle(httpRequest);
    }
    const asmContext = httpRequest.context.get(OCC_HTTP_TOKEN);
    let userIdObservable;
    if (typeof asmContext.sendUserIdAsHeader === "string") {
      userIdObservable = of(asmContext.sendUserIdAsHeader);
    } else if (asmContext.sendUserIdAsHeader) {
      userIdObservable = this.userIdService.takeUserId().pipe(map((userId) => this.uniqueUserIdConstants.has(userId) ? void 0 : userId));
    } else {
      return next.handle(httpRequest);
    }
    return userIdObservable.pipe(concatMap((userId) => {
      if (userId) {
        const request = httpRequest.clone({
          headers: httpRequest.headers.set(this.userIdHeader, userId)
        });
        return next.handle(request);
      } else {
        return next.handle(httpRequest);
      }
    }));
  }
  static {
    this.ɵfac = function UserIdHttpHeaderInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserIdHttpHeaderInterceptor)(ɵɵinject(Config), ɵɵinject(UserIdService), ɵɵinject(OCC_USER_ID_CONSTANTS));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserIdHttpHeaderInterceptor,
      factory: _UserIdHttpHeaderInterceptor.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserIdHttpHeaderInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Config
  }, {
    type: UserIdService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [OCC_USER_ID_CONSTANTS]
    }]
  }], null);
})();
var TokenTarget;
(function(TokenTarget2) {
  TokenTarget2["CSAgent"] = "CSAgent";
  TokenTarget2["User"] = "User";
})(TokenTarget || (TokenTarget = {}));
var AsmAuthStorageService = class _AsmAuthStorageService extends AuthStorageService {
  constructor() {
    super(...arguments);
    this._tokenTarget$ = new BehaviorSubject(TokenTarget.User);
  }
  /**
   * Get target user for current auth token.
   *
   * @return observable with TokenTarget
   */
  getTokenTarget() {
    return this._tokenTarget$;
  }
  /**
   * Set new token target.
   *
   * @param tokenTarget
   */
  setTokenTarget(tokenTarget) {
    this._tokenTarget$.next(tokenTarget);
  }
  /**
   * Get token for previously user session, when it was interrupted by CS agent login.
   *
   * @return previously logged in user token.
   */
  getEmulatedUserToken() {
    return this.emulatedUserToken;
  }
  /**
   * Save user token on CS agent login.
   *
   * @param token
   */
  setEmulatedUserToken(token) {
    this.emulatedUserToken = token;
  }
  /**
   * Change token target to CS Agent.
   */
  switchTokenTargetToCSAgent() {
    this._tokenTarget$.next(TokenTarget.CSAgent);
  }
  /**
   * Change token target to user.
   */
  switchTokenTargetToUser() {
    this._tokenTarget$.next(TokenTarget.User);
  }
  /**
   * When we start emulation from the UI (not by ASM login) we can't restore user session on cs agent logout.
   * Only available solution is to drop session we could restore, to avoid account hijack.
   */
  clearEmulatedUserToken() {
    this.emulatedUserToken = void 0;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵAsmAuthStorageService_BaseFactory;
      return function AsmAuthStorageService_Factory(__ngFactoryType__) {
        return (ɵAsmAuthStorageService_BaseFactory || (ɵAsmAuthStorageService_BaseFactory = ɵɵgetInheritedFactory(_AsmAuthStorageService)))(__ngFactoryType__ || _AsmAuthStorageService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmAuthStorageService,
      factory: _AsmAuthStorageService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmAuthStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CsAgentAuthService = class _CsAgentAuthService {
  constructor(authService, authStorageService, userIdService, oAuthLibWrapperService, store, userAccountFacade) {
    this.authService = authService;
    this.authStorageService = authStorageService;
    this.userIdService = userIdService;
    this.oAuthLibWrapperService = oAuthLibWrapperService;
    this.store = store;
    this.userAccountFacade = userAccountFacade;
  }
  /**
   * Loads access token for a customer support agent.
   * @param userId
   * @param password
   */
  authorizeCustomerSupportAgent(userId, password) {
    return __async(this, null, function* () {
      let userToken;
      let customerId;
      this.userAccountFacade.get().subscribe((user) => customerId = user?.customerId).unsubscribe();
      this.authStorageService.getToken().subscribe((token) => userToken = token).unsubscribe();
      this.authStorageService.switchTokenTargetToCSAgent();
      try {
        yield this.oAuthLibWrapperService.authorizeWithPasswordFlow(userId, password);
        this.store.dispatch(new authGroup_actions.Logout());
        if (customerId !== void 0 && userToken !== void 0) {
          this.userIdService.setUserId(customerId);
          this.authStorageService.setEmulatedUserToken(userToken);
          this.store.dispatch(new authGroup_actions.Login());
        } else {
          this.userIdService.setUserId(OCC_USER_ID_ANONYMOUS);
          this.authStorageService.clearEmulatedUserToken();
        }
      } catch {
        this.authStorageService.switchTokenTargetToUser();
      }
    });
  }
  /**
   * Loads access token for a customer support agent with authorization code flow.
   */
  authorizeCustomerSupportAgentWhenUseCodeFlow() {
    return __async(this, null, function* () {
      let userToken;
      let customerId;
      this.userAccountFacade.get().subscribe((user) => customerId = user?.customerId).unsubscribe();
      this.authStorageService.getToken().subscribe((token) => userToken = token).unsubscribe();
      this.authStorageService.switchTokenTargetToCSAgent();
      try {
        yield this.oAuthLibWrapperService.initLoginFlow();
        this.store.dispatch(new authGroup_actions.Logout());
        if (customerId !== void 0 && userToken !== void 0) {
          this.userIdService.setUserId(customerId);
          this.authStorageService.setEmulatedUserToken(userToken);
          this.store.dispatch(new authGroup_actions.Login());
        } else {
          this.userIdService.setUserId(OCC_USER_ID_ANONYMOUS);
          this.authStorageService.clearEmulatedUserToken();
        }
      } catch {
        this.authStorageService.switchTokenTargetToUser();
      }
    });
  }
  /**
   * Starts an ASM customer emulation session.
   * A customer emulation session is stopped by calling logout().
   * @param customerId
   */
  startCustomerEmulationSession(customerId) {
    this.authStorageService.clearEmulatedUserToken();
    this.store.dispatch(new authGroup_actions.Logout());
    this.userIdService.setUserId(customerId);
    this.store.dispatch(new authGroup_actions.Login());
  }
  /**
   * Check if CS agent is currently logged in.
   *
   * @returns observable emitting true when CS agent is logged in or false when not.
   */
  isCustomerSupportAgentLoggedIn() {
    return combineLatest([this.authStorageService.getToken(), this.authStorageService.getTokenTarget()]).pipe(map(([token, tokenTarget]) => Boolean(token?.access_token && tokenTarget === TokenTarget.CSAgent)));
  }
  /**
   * Utility function to determine if customer is emulated.
   *
   * @returns observable emitting true when there is active emulation session or false when not.
   */
  isCustomerEmulated() {
    return this.userIdService.isEmulated();
  }
  /**
   * Returns the customer support agent's token loading status
   */
  getCustomerSupportAgentTokenLoading() {
    return of(false);
  }
  /**
   * Logout a customer support agent.
   */
  logoutCustomerSupportAgent() {
    return __async(this, null, function* () {
      const emulatedToken = this.authStorageService.getEmulatedUserToken();
      let isCustomerEmulated;
      this.userIdService.isEmulated().subscribe((emulated) => isCustomerEmulated = emulated).unsubscribe();
      yield this.oAuthLibWrapperService.revokeAndLogout();
      this.store.dispatch({
        type: "[Auth] Logout Customer Support Agent"
      });
      this.authStorageService.setTokenTarget(TokenTarget.User);
      if (isCustomerEmulated && emulatedToken) {
        this.store.dispatch(new authGroup_actions.Logout());
        this.authStorageService.setToken(emulatedToken);
        this.userIdService.setUserId(OCC_USER_ID_CURRENT);
        this.authStorageService.clearEmulatedUserToken();
        this.store.dispatch(new authGroup_actions.Login());
      } else {
        this.authService.logout();
      }
    });
  }
  static {
    this.ɵfac = function CsAgentAuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CsAgentAuthService)(ɵɵinject(AuthService), ɵɵinject(AsmAuthStorageService), ɵɵinject(UserIdService), ɵɵinject(OAuthLibWrapperService), ɵɵinject(Store), ɵɵinject(UserAccountFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CsAgentAuthService,
      factory: _CsAgentAuthService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CsAgentAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AuthService
  }, {
    type: AsmAuthStorageService
  }, {
    type: UserIdService
  }, {
    type: OAuthLibWrapperService
  }, {
    type: Store
  }, {
    type: UserAccountFacade
  }], null);
})();
var AsmAuthHttpHeaderService = class _AsmAuthHttpHeaderService extends AuthHttpHeaderService {
  constructor(authService, authStorageService, csAgentAuthService, oAuthLibWrapperService, routingService, globalMessageService, occEndpointsService, authRedirectService) {
    super(authService, authStorageService, oAuthLibWrapperService, routingService, occEndpointsService, globalMessageService, authRedirectService);
    this.authService = authService;
    this.authStorageService = authStorageService;
    this.csAgentAuthService = csAgentAuthService;
    this.oAuthLibWrapperService = oAuthLibWrapperService;
    this.routingService = routingService;
    this.globalMessageService = globalMessageService;
    this.occEndpointsService = occEndpointsService;
    this.authRedirectService = authRedirectService;
  }
  /**
   * Checks if the authorization header should be added to the request
   *
   *  @override
   */
  shouldAddAuthorizationHeader(request) {
    return super.shouldAddAuthorizationHeader(request) || this.isCSAgentTokenRequest(request);
  }
  /**
   * @override
   *
   * Checks if particular request should be handled by this service.
   */
  shouldCatchError(request) {
    return super.shouldCatchError(request) || this.isCSAgentTokenRequest(request);
  }
  /**
   * @override
   *
   * Adds `Authorization` header to occ and CS agent requests.
   * For CS agent requests also removes the `cx-use-csagent-token` header (to avoid problems with CORS).
   */
  alterRequest(request, token) {
    const hasAuthorizationHeader = !!this.getAuthorizationHeader(request);
    const isCSAgentRequest = this.isCSAgentTokenRequest(request);
    let req = super.alterRequest(request, token);
    if (!hasAuthorizationHeader && isCSAgentRequest) {
      req = request.clone({
        setHeaders: __spreadValues({}, this.createAuthorizationHeader(token))
      });
      return InterceptorUtil.removeHeader(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, req);
    }
    return req;
  }
  isCSAgentTokenRequest(request) {
    const isRequestWithCSAgentToken = InterceptorUtil.getInterceptorParam(USE_CUSTOMER_SUPPORT_AGENT_TOKEN, request.headers);
    return Boolean(isRequestWithCSAgentToken);
  }
  /**
   * @override
   *
   * On backend errors indicating expired `refresh_token` we need to logout
   * currently logged in user and CS agent.
   */
  handleExpiredRefreshToken() {
    this.csAgentAuthService.isCustomerSupportAgentLoggedIn().pipe(take(1)).subscribe((csAgentLoggedIn) => {
      if (csAgentLoggedIn) {
        this.authService.setLogoutProgress(true);
        this.csAgentAuthService.logoutCustomerSupportAgent();
        this.globalMessageService.add({
          key: "asm.csagentTokenExpired"
        }, GlobalMessageType.MSG_TYPE_ERROR);
      } else {
        super.handleExpiredRefreshToken();
      }
    });
  }
  static {
    this.ɵfac = function AsmAuthHttpHeaderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmAuthHttpHeaderService)(ɵɵinject(AuthService), ɵɵinject(AuthStorageService), ɵɵinject(CsAgentAuthService), ɵɵinject(OAuthLibWrapperService), ɵɵinject(RoutingService), ɵɵinject(GlobalMessageService), ɵɵinject(OccEndpointsService), ɵɵinject(AuthRedirectService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmAuthHttpHeaderService,
      factory: _AsmAuthHttpHeaderService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmAuthHttpHeaderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AuthService
  }, {
    type: AuthStorageService
  }, {
    type: CsAgentAuthService
  }, {
    type: OAuthLibWrapperService
  }, {
    type: RoutingService
  }, {
    type: GlobalMessageService
  }, {
    type: OccEndpointsService
  }, {
    type: AuthRedirectService
  }], null);
})();
var AsmAuthService = class _AsmAuthService extends AuthService {
  constructor(store, userIdService, oAuthLibWrapperService, authStorageService, authRedirectService, globalMessageService, routingService, authMultisiteIsolationService) {
    super(store, userIdService, oAuthLibWrapperService, authStorageService, authRedirectService, routingService, authMultisiteIsolationService);
    this.store = store;
    this.userIdService = userIdService;
    this.oAuthLibWrapperService = oAuthLibWrapperService;
    this.authStorageService = authStorageService;
    this.authRedirectService = authRedirectService;
    this.globalMessageService = globalMessageService;
    this.routingService = routingService;
    this.authMultisiteIsolationService = authMultisiteIsolationService;
  }
  canUserLogin() {
    let tokenTarget;
    let token;
    this.authStorageService.getToken().subscribe((tok) => token = tok).unsubscribe();
    this.authStorageService.getTokenTarget().subscribe((tokTarget) => tokenTarget = tokTarget).unsubscribe();
    return !(Boolean(token?.access_token) && tokenTarget === TokenTarget.CSAgent);
  }
  warnAboutLoggedCSAgent() {
    this.globalMessageService.add({
      key: "asm.auth.agentLoggedInError"
    }, GlobalMessageType.MSG_TYPE_ERROR);
  }
  /**
   * Loads a new user token with Resource Owner Password Flow when CS agent is not logged in.
   * @param userId
   * @param password
   */
  loginWithCredentials(userId, password) {
    return __async(this, null, function* () {
      if (this.canUserLogin()) {
        yield __superGet(_AsmAuthService.prototype, this, "loginWithCredentials").call(this, userId, password);
      } else {
        this.warnAboutLoggedCSAgent();
      }
    });
  }
  /**
   * Initialize Implicit/Authorization Code flow by redirecting to OAuth server when CS agent is not logged in.
   */
  loginWithRedirect() {
    if (this.canUserLogin()) {
      super.loginWithRedirect();
      return true;
    } else {
      this.warnAboutLoggedCSAgent();
      return false;
    }
  }
  /**
   * Revokes tokens and clears state for logged user (tokens, userId).
   * To perform logout it is best to use `logout` method. Use this method with caution.
   */
  coreLogout() {
    return lastValueFrom(this.userIdService.isEmulated().pipe(take(1), switchMap((isEmulated) => {
      if (isEmulated) {
        this.authStorageService.clearEmulatedUserToken();
        this.userIdService.clearUserId();
        this.store.dispatch(new authGroup_actions.Logout());
        return of(true);
      } else {
        return from(super.coreLogout());
      }
    })));
  }
  /**
   * Returns `true` if user is logged in or being emulated.
   */
  isUserLoggedIn() {
    return combineLatest([this.authStorageService.getToken(), this.userIdService.isEmulated(), this.authStorageService.getTokenTarget()]).pipe(map(([token, isEmulated, tokenTarget]) => Boolean(token?.access_token) && (tokenTarget === TokenTarget.User || tokenTarget === TokenTarget.CSAgent && isEmulated)));
  }
  static {
    this.ɵfac = function AsmAuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmAuthService)(ɵɵinject(Store), ɵɵinject(UserIdService), ɵɵinject(OAuthLibWrapperService), ɵɵinject(AsmAuthStorageService), ɵɵinject(AuthRedirectService), ɵɵinject(GlobalMessageService), ɵɵinject(RoutingService), ɵɵinject(AuthMultisiteIsolationService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmAuthService,
      factory: _AsmAuthService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: UserIdService
  }, {
    type: OAuthLibWrapperService
  }, {
    type: AsmAuthStorageService
  }, {
    type: AuthRedirectService
  }, {
    type: GlobalMessageService
  }, {
    type: RoutingService
  }, {
    type: AuthMultisiteIsolationService
  }], null);
})();
var AsmRootModule = class _AsmRootModule {
  static {
    this.ɵfac = function AsmRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AsmRootModule,
      imports: [AsmLoaderModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultAsmConfig), {
        provide: AuthStorageService,
        useExisting: AsmAuthStorageService
      }, {
        provide: AuthService,
        useExisting: AsmAuthService
      }, {
        provide: AuthHttpHeaderService,
        useExisting: AsmAuthHttpHeaderService
      }, {
        provide: HTTP_INTERCEPTORS,
        useExisting: UserIdHttpHeaderInterceptor,
        multi: true
      }],
      imports: [AsmLoaderModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmRootModule, [{
    type: NgModule,
    args: [{
      imports: [AsmLoaderModule],
      providers: [provideDefaultConfig(defaultAsmConfig), {
        provide: AuthStorageService,
        useExisting: AsmAuthStorageService
      }, {
        provide: AuthService,
        useExisting: AsmAuthService
      }, {
        provide: AuthHttpHeaderService,
        useExisting: AsmAuthHttpHeaderService
      }, {
        provide: HTTP_INTERCEPTORS,
        useExisting: UserIdHttpHeaderInterceptor,
        multi: true
      }]
    }]
  }], null, null);
})();
var ASM_FEATURE = "asm";
var AsmBindCartFacade = class _AsmBindCartFacade {
  static {
    this.ɵfac = function AsmBindCartFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmBindCartFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmBindCartFacade,
      factory: () => (() => facadeFactory({
        facade: _AsmBindCartFacade,
        feature: ASM_FEATURE,
        methods: ["bindCart"]
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmBindCartFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: AsmBindCartFacade,
        feature: ASM_FEATURE,
        methods: ["bindCart"]
      })
    }]
  }], null, null);
})();
var AsmCreateCustomerFacade = class _AsmCreateCustomerFacade {
  static {
    this.ɵfac = function AsmCreateCustomerFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCreateCustomerFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmCreateCustomerFacade,
      factory: () => (() => facadeFactory({
        facade: _AsmCreateCustomerFacade,
        feature: ASM_FEATURE,
        methods: ["createCustomer"]
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCreateCustomerFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: AsmCreateCustomerFacade,
        feature: ASM_FEATURE,
        methods: ["createCustomer"]
      })
    }]
  }], null, null);
})();
var AsmCustomerListFacade = class _AsmCustomerListFacade {
  static {
    this.ɵfac = function AsmCustomerListFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmCustomerListFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmCustomerListFacade,
      factory: () => (() => facadeFactory({
        facade: _AsmCustomerListFacade,
        feature: ASM_FEATURE,
        methods: ["getCustomerLists", "getCustomerListsState", "customerListCustomersSearch", "getCustomerListCustomersSearchResults", "getCustomerListCustomersSearchResultsLoading", "customerListCustomersSearchReset", "getCustomerListCustomersSearchResultsError"]
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmCustomerListFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: AsmCustomerListFacade,
        feature: ASM_FEATURE,
        methods: ["getCustomerLists", "getCustomerListsState", "customerListCustomersSearch", "getCustomerListCustomersSearchResults", "getCustomerListCustomersSearchResultsLoading", "customerListCustomersSearchReset", "getCustomerListCustomersSearchResultsError"]
      })
    }]
  }], null, null);
})();
var CLOSE_DIALOG_REASON = {
  FORBIDDEN: "forbidden"
};
LAUNCH_CALLER["ASM_CUSTOMER_LIST"] = "ASM_CUSTOMER_LIST";
LAUNCH_CALLER["ASM_BIND_CART"] = "ASM_BIND_CART";
LAUNCH_CALLER["ASM_SAVE_CART"] = "ASM_SAVE_CART";
LAUNCH_CALLER["ASM_SWITCH_CUSTOMER"] = "ASM_SWITCH_CUSTOMER";
LAUNCH_CALLER["ASM_CREATE_CUSTOMER_FORM"] = "ASM_CREATE_CUSTOMER_FORM";
var AsmDeepLinkService = class _AsmDeepLinkService {
  constructor(routingService, winRef, asmEnablerService) {
    this.routingService = routingService;
    this.winRef = winRef;
    this.asmEnablerService = asmEnablerService;
    this.searchParams = new URLSearchParams(this.winRef?.location?.search);
  }
  /**
   * check whether try to emulate customer from deeplink
   */
  isEmulateInURL() {
    return this.asmEnablerService?.isEmulateInURL() || false;
  }
  /**
   * Returns a deep link parameter value if it is in the url.
   */
  getSearchParameter(key) {
    return this.searchParams.get(key) ?? void 0;
  }
  /**
   * Handles the navigation based on deep link parameters in the URL
   * or passed parameters.
   */
  handleNavigation(parameters = this.getParamsInUrl()) {
    if (parameters.cartType === "active") {
      this.routingService.go({
        cxRoute: "cart"
      });
    } else if (parameters.cartType === "saved" && parameters.cartId) {
      this.routingService.go("my-account/saved-cart/" + parameters.cartId);
    } else if (parameters.orderId) {
      this.routingService.go({
        cxRoute: "orderDetails",
        params: {
          code: parameters.orderId
        }
      });
    } else if (parameters.ticketId) {
      this.routingService.go({
        cxRoute: "supportTicketDetails",
        params: {
          ticketCode: parameters.ticketId
        }
      });
    }
  }
  /**
   * Returns valid deep link parameters in the url.
   */
  getParamsInUrl() {
    const params = {
      customerId: this.getSearchParameter("customerId"),
      orderId: this.getSearchParameter("orderId"),
      ticketId: this.getSearchParameter("ticketId"),
      cartId: this.getSearchParameter("cartId"),
      cartType: this.getSearchParameter("cartType")
    };
    return Object.fromEntries(Object.entries(params).filter(([_, v]) => !!v));
  }
  static {
    this.ɵfac = function AsmDeepLinkService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AsmDeepLinkService)(ɵɵinject(RoutingService), ɵɵinject(WindowRef), ɵɵinject(AsmEnablerService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AsmDeepLinkService,
      factory: _AsmDeepLinkService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsmDeepLinkService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: WindowRef
  }, {
    type: AsmEnablerService
  }], null);
})();

export {
  AsmConfig,
  ASM_ENABLED_LOCAL_STORAGE_KEY,
  AsmEnablerService,
  AsmLoaderModule,
  asmFactory,
  CustomerListColumnActionType,
  TokenTarget,
  AsmAuthStorageService,
  CsAgentAuthService,
  AsmAuthHttpHeaderService,
  AsmAuthService,
  AsmRootModule,
  ASM_FEATURE,
  AsmBindCartFacade,
  AsmCreateCustomerFacade,
  AsmCustomerListFacade,
  CLOSE_DIALOG_REASON,
  AsmDeepLinkService
};
//# sourceMappingURL=chunk-ZXNGX3YN.js.map
