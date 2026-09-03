import {
  UserProfileComponentsModule
} from "./chunk-XTCFQJ22.js";
import {
  UserEmailFacade,
  UserPasswordFacade,
  UserProfileFacade,
  UserRegisterFacade
} from "./chunk-YJXUXPBZ.js";
import {
  UserAccountChangedEvent,
  UserAccountFacade
} from "./chunk-LZQV6UAH.js";
import {
  CaptchaApiConfig,
  CaptchaModule
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  AuthService,
  CommandService,
  CommandStrategy,
  ConverterService,
  EventService,
  FeatureConfigService,
  InterceptorUtil,
  LanguageSetEvent,
  LoggerService,
  OccEndpointsService,
  QueryService,
  RoutingService,
  USE_CAPTCHA_TOKEN,
  USE_CLIENT_TOKEN,
  UserIdService,
  provideDefaultConfig,
  tryNormalizeHttpError,
  userGroup_actions
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import "./chunk-EBCNDD52.js";
import "./chunk-YMQEGXEG.js";
import "./chunk-6KXUHIAW.js";
import {
  Store
} from "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from "./chunk-2A6OHZCE.js";
import "./chunk-YST33EXT.js";
import "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  catchError,
  map,
  take,
  tap
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/user/fesm2022/spartacus-user-profile-core.mjs
var USER_PROFILE_NORMALIZER = new InjectionToken("UserProfileNormalizer");
var USER_PROFILE_SERIALIZER = new InjectionToken("UserProfileSerializer");
var USER_SERIALIZER = new InjectionToken("UserSerializer");
var USER_SIGN_UP_SERIALIZER = new InjectionToken("UserSignUpSerializer");
var TITLE_NORMALIZER = new InjectionToken("TitleNormalizer");
var UserProfileAdapter = class {
};
var UserProfileConnector = class _UserProfileConnector {
  constructor(userProfileAdapter) {
    this.userProfileAdapter = userProfileAdapter;
  }
  update(username, user) {
    return this.userProfileAdapter.update(username, user);
  }
  register(user) {
    return this.userProfileAdapter.register(user);
  }
  registerGuest(guid, password) {
    return this.userProfileAdapter.registerGuest(guid, password);
  }
  requestForgotPasswordEmail(userEmailAddress) {
    return this.userProfileAdapter.requestForgotPasswordEmail(userEmailAddress);
  }
  resetPassword(token, newPassword) {
    return this.userProfileAdapter.resetPassword(token, newPassword);
  }
  updateEmail(userId, currentPassword, newUserId) {
    return this.userProfileAdapter.updateEmail(userId, currentPassword, newUserId);
  }
  updatePassword(userId, oldPassword, newPassword) {
    return this.userProfileAdapter.updatePassword(userId, oldPassword, newPassword);
  }
  remove(userId) {
    return this.userProfileAdapter.close(userId);
  }
  getTitles() {
    return this.userProfileAdapter.loadTitles();
  }
  static {
    this.ɵfac = function UserProfileConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserProfileConnector)(ɵɵinject(UserProfileAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserProfileConnector,
      factory: _UserProfileConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileConnector, [{
    type: Injectable
  }], () => [{
    type: UserProfileAdapter
  }], null);
})();
var UserEmailService = class _UserEmailService {
  constructor(userIdService, userProfileConnector, command) {
    this.userIdService = userIdService;
    this.userProfileConnector = userProfileConnector;
    this.command = command;
    this.updateCommand = this.command.create((payload) => this.userIdService.takeUserId(true).pipe(switchMap((uid) => this.userProfileConnector.updateEmail(uid, payload.password, payload.newUid))), {
      strategy: CommandStrategy.Queue
    });
  }
  /**
   * Updates the user's email.
   *
   * @param password to users password to confirm the users
   * @param newUid the new proposed email address.
   */
  update(password, newUid) {
    return this.updateCommand.execute({
      password,
      newUid
    });
  }
  static {
    this.ɵfac = function UserEmailService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserEmailService)(ɵɵinject(UserIdService), ɵɵinject(UserProfileConnector), ɵɵinject(CommandService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserEmailService,
      factory: _UserEmailService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserEmailService, [{
    type: Injectable
  }], () => [{
    type: UserIdService
  }, {
    type: UserProfileConnector
  }, {
    type: CommandService
  }], null);
})();
var UserPasswordService = class _UserPasswordService {
  constructor(userProfileConnector, userIdService, command) {
    this.userProfileConnector = userProfileConnector;
    this.userIdService = userIdService;
    this.command = command;
    this.updateCommand = this.command.create((payload) => this.userIdService.takeUserId(true).pipe(take(1), switchMap((uid) => this.userProfileConnector.updatePassword(uid, payload.oldPassword, payload.newPassword))));
    this.resetCommand = this.command.create((payload) => this.userProfileConnector.resetPassword(payload.token, payload.password));
    this.requestForgotPasswordEmailCommand = this.command.create((payload) => this.userProfileConnector.requestForgotPasswordEmail(payload.email));
  }
  /**
   * Updates the password for the user
   *
   * The method returns an observable with `LoaderState` information, including the
   * actual user data.
   *
   * @param oldPassword the current password that will be changed
   * @param newPassword the new password
   */
  update(oldPassword, newPassword) {
    return this.updateCommand.execute({
      oldPassword,
      newPassword
    });
  }
  /**
   * Reset new password. Part of the forgot password flow.
   *
   * @param token
   * @param password
   */
  reset(token, password) {
    return this.resetCommand.execute({
      token,
      password
    });
  }
  /*
   * Request an email to reset a forgotten password.
   */
  requestForgotPasswordEmail(email) {
    return this.requestForgotPasswordEmailCommand.execute({
      email
    });
  }
  static {
    this.ɵfac = function UserPasswordService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserPasswordService)(ɵɵinject(UserProfileConnector), ɵɵinject(UserIdService), ɵɵinject(CommandService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserPasswordService,
      factory: _UserPasswordService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserPasswordService, [{
    type: Injectable
  }], () => [{
    type: UserProfileConnector
  }, {
    type: UserIdService
  }, {
    type: CommandService
  }], null);
})();
var UserProfileService = class _UserProfileService {
  constructor(userAccountService, authService, userProfileConnector, eventService, userIdService, query, command) {
    this.userAccountService = userAccountService;
    this.authService = authService;
    this.userProfileConnector = userProfileConnector;
    this.eventService = eventService;
    this.userIdService = userIdService;
    this.query = query;
    this.command = command;
    this.updateCommand = this.command.create((payload) => this.userIdService.takeUserId(true).pipe(switchMap((uid) => this.userProfileConnector.update(uid, payload.details).pipe(tap(() => {
      this.eventService.dispatch({
        user: payload.details
      }, UserAccountChangedEvent);
    })))), {
      strategy: CommandStrategy.Queue
    });
    this.closeCommand = this.command.create(() => this.userIdService.takeUserId(true).pipe(switchMap((uid) => this.userProfileConnector.remove(uid).pipe(tap(() => this.authService.logout())))));
    this.titleQuery = this.query.create(() => this.userProfileConnector.getTitles(), {
      reloadOn: [LanguageSetEvent]
    });
  }
  get() {
    return this.userAccountService.get();
  }
  /**
   * Updates the user's details.
   *
   * @param details User details to be updated.
   */
  update(details) {
    return this.updateCommand.execute({
      details
    });
  }
  /**
   * Closes the user account.
   */
  close() {
    return this.closeCommand.execute(void 0);
  }
  /**
   * Returns titles that can be used for the user profiles.
   */
  getTitles() {
    return this.titleQuery.get().pipe(map((titles) => titles ?? []));
  }
  static {
    this.ɵfac = function UserProfileService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserProfileService)(ɵɵinject(UserAccountFacade), ɵɵinject(AuthService), ɵɵinject(UserProfileConnector), ɵɵinject(EventService), ɵɵinject(UserIdService), ɵɵinject(QueryService), ɵɵinject(CommandService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserProfileService,
      factory: _UserProfileService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileService, [{
    type: Injectable
  }], () => [{
    type: UserAccountFacade
  }, {
    type: AuthService
  }, {
    type: UserProfileConnector
  }, {
    type: EventService
  }, {
    type: UserIdService
  }, {
    type: QueryService
  }, {
    type: CommandService
  }], null);
})();
var UserRegisterService = class _UserRegisterService {
  constructor(userProfile, userConnector, authService, command, store) {
    this.userProfile = userProfile;
    this.userConnector = userConnector;
    this.authService = authService;
    this.command = command;
    this.store = store;
    this.featureConfigService = inject(FeatureConfigService);
    this.routingService = inject(RoutingService);
    this.registerCommand = this.command.create(({
      user
    }) => this.userConnector.register(user).pipe(tap(() => {
      this.store.dispatch(new userGroup_actions.RegisterUserSuccess());
    })));
    this.registerGuestCommand = this.command.create((payload) => this.userConnector.registerGuest(payload.guid, payload.password).pipe(tap((user) => {
      if (!this.featureConfigService.isEnabled("authorizationCodeFlowByDefault")) {
        this.authService.loginWithCredentials(user.uid, payload.password);
      } else {
        this.routingService.go({
          cxRoute: "login"
        });
      }
    })));
  }
  /**
   * Register a new user.
   *
   * @param submitFormData as UserRegisterFormData
   */
  register(user) {
    return this.registerCommand.execute({
      user
    });
  }
  /**
   * Register a new user from guest.
   *
   * @param guid
   * @param password
   */
  registerGuest(guid, password) {
    return this.registerGuestCommand.execute({
      guid,
      password
    });
  }
  /**
   * Returns titles that can be used for the user profiles.
   */
  getTitles() {
    return this.userProfile.getTitles();
  }
  static {
    this.ɵfac = function UserRegisterService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserRegisterService)(ɵɵinject(UserProfileService), ɵɵinject(UserProfileConnector), ɵɵinject(AuthService), ɵɵinject(CommandService), ɵɵinject(Store));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserRegisterService,
      factory: _UserRegisterService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserRegisterService, [{
    type: Injectable
  }], () => [{
    type: UserProfileService
  }, {
    type: UserProfileConnector
  }, {
    type: AuthService
  }, {
    type: CommandService
  }, {
    type: Store
  }], null);
})();
var facadeProviders = [UserEmailService, UserPasswordService, UserProfileService, UserRegisterService, {
  provide: UserEmailFacade,
  useExisting: UserEmailService
}, {
  provide: UserPasswordFacade,
  useExisting: UserPasswordService
}, {
  provide: UserProfileFacade,
  useExisting: UserProfileService
}, {
  provide: UserRegisterFacade,
  useExisting: UserRegisterService
}];
var UserProfileCoreModule = class _UserProfileCoreModule {
  static {
    this.ɵfac = function UserProfileCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserProfileCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserProfileCoreModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [UserProfileConnector, ...facadeProviders]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileCoreModule, [{
    type: NgModule,
    args: [{
      providers: [UserProfileConnector, ...facadeProviders]
    }]
  }], null, null);
})();

// node_modules/@spartacus/user/fesm2022/spartacus-user-profile-occ.mjs
var defaultOccUserProfileConfig = {
  backend: {
    occ: {
      endpoints: {
        userRegister: "users",
        userForgotPassword: "forgottenpasswordtokens",
        userRestoreToken: "passwordRestoreToken",
        userResetPassword: "resetpassword",
        userUpdateLoginId: "users/${userId}/login",
        userUpdatePassword: "users/${userId}/password",
        titles: "titles"
      }
    }
  }
};
var CONTENT_TYPE_JSON_HEADER = {
  "Content-Type": "application/json"
};
var CONTENT_TYPE_URLENCODED_HEADER = {
  "Content-Type": "application/x-www-form-urlencoded"
};
var OccUserProfileAdapter = class _OccUserProfileAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
    this.captchaConfig = inject(CaptchaApiConfig, {
      optional: true
    });
    this.injector = inject(Injector, {
      optional: true
    });
  }
  update(userId, user) {
    const endpoint = this.occEndpoints.isConfigured("userUpdateProfile") ? "userUpdateProfile" : "user";
    const url = this.occEndpoints.buildUrl(endpoint, {
      urlParams: {
        userId
      }
    });
    user = this.converter.convert(user, USER_PROFILE_SERIALIZER);
    return this.http.patch(url, user).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  register(user) {
    const url = this.occEndpoints.buildUrl("userRegister");
    let headers = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER));
    headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    headers = this.appendCaptchaToken(headers);
    user = this.converter.convert(user, USER_SIGN_UP_SERIALIZER);
    return this.http.post(url, user, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), this.converter.pipeable(USER_PROFILE_NORMALIZER));
  }
  registerGuest(guid, password) {
    const url = this.occEndpoints.buildUrl("userRegister");
    let headers = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_URLENCODED_HEADER));
    headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    headers = this.appendCaptchaToken(headers);
    const httpParams = new HttpParams().set("guid", guid).set("password", password);
    return this.http.post(url, httpParams, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), this.converter.pipeable(USER_PROFILE_NORMALIZER));
  }
  requestForgotPasswordEmail(userEmailAddress) {
    const url = this.occEndpoints.buildUrl("userRestoreToken");
    const body = {
      loginId: userEmailAddress
    };
    let headers = new HttpHeaders(CONTENT_TYPE_JSON_HEADER);
    headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    return this.http.post(url, body, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  resetPassword(token, newPassword) {
    const url = this.occEndpoints.buildUrl("userResetPassword");
    let headers = new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER));
    headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    return this.http.post(url, {
      token,
      newPassword
    }, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  updateEmail(userId, currentPassword, newUserId) {
    const url = this.occEndpoints.buildUrl("userUpdateLoginId", {
      urlParams: {
        userId
      }
    });
    const body = {
      newLoginId: newUserId,
      password: currentPassword
    };
    const headers = new HttpHeaders(CONTENT_TYPE_JSON_HEADER);
    return this.http.post(url, body, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  updatePassword(userId, oldPassword, newPassword) {
    const url = this.occEndpoints.buildUrl("userUpdatePassword", {
      urlParams: {
        userId
      }
    });
    const body = {
      oldPassword,
      newPassword
    };
    const headers = new HttpHeaders(CONTENT_TYPE_JSON_HEADER);
    return this.http.post(url, body, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  close(userId) {
    const endpoint = this.occEndpoints.isConfigured("userCloseAccount") ? "userCloseAccount" : "user";
    const url = this.occEndpoints.buildUrl(endpoint, {
      urlParams: {
        userId
      }
    });
    return this.http.delete(url).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  loadTitles() {
    const url = this.occEndpoints.buildUrl("titles");
    return this.http.get(url).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), map((titleList) => titleList.titles ?? []), this.converter.pipeableMany(TITLE_NORMALIZER));
  }
  appendCaptchaToken(currentHeaders) {
    if (this.injector && this.captchaConfig?.captchaRenderer) {
      const provider = this.injector.get(this.captchaConfig.captchaRenderer);
      const isCaptchaEnabled = provider.getCaptchaConfig().subscribe((config) => {
        return config.enabled;
      });
      if (provider?.getToken() && isCaptchaEnabled) {
        return currentHeaders.append(USE_CAPTCHA_TOKEN, provider.getToken());
      }
    }
    return currentHeaders;
  }
  static {
    this.ɵfac = function OccUserProfileAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccUserProfileAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccUserProfileAdapter,
      factory: _OccUserProfileAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccUserProfileAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var UserProfileOccModule = class _UserProfileOccModule {
  static {
    this.ɵfac = function UserProfileOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserProfileOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserProfileOccModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccUserProfileConfig), {
        provide: UserProfileAdapter,
        useClass: OccUserProfileAdapter
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileOccModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig(defaultOccUserProfileConfig), {
        provide: UserProfileAdapter,
        useClass: OccUserProfileAdapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/user/fesm2022/spartacus-user-profile.mjs
var UserProfileModule = class _UserProfileModule {
  static {
    this.ɵfac = function UserProfileModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserProfileModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserProfileModule,
      imports: [UserProfileCoreModule, UserProfileOccModule, UserProfileComponentsModule, CaptchaModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [UserProfileCoreModule, UserProfileOccModule, UserProfileComponentsModule, CaptchaModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileModule, [{
    type: NgModule,
    args: [{
      imports: [UserProfileCoreModule, UserProfileOccModule, UserProfileComponentsModule, CaptchaModule]
    }]
  }], null, null);
})();
export {
  UserProfileModule
};
//# sourceMappingURL=@spartacus_user_profile.js.map
