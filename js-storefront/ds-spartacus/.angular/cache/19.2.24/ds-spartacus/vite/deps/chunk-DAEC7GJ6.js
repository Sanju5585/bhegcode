import {
  LoginAsGuestGuard
} from "./chunk-DDZIJZKE.js";
import {
  UserProfileFacade
} from "./chunk-YJXUXPBZ.js";
import {
  CmsPageGuard,
  ConsentManagementComponentService,
  LAUNCH_CALLER,
  LoginGuard,
  LogoutGuard
} from "./chunk-D5RDRHN5.js";
import {
  AuthConfigService,
  AuthService,
  BaseSiteService,
  CmsService,
  Config,
  ConfigInitializerService,
  ConverterService,
  CxEvent,
  EventService,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  LanguageService,
  OccEndpointsService,
  OccUserConsentAdapter,
  ProtectedRoutesService,
  ScriptLoader,
  SemanticPathService,
  StatePersistenceService,
  UserConsentAdapter,
  WindowRef,
  deepMerge,
  facadeFactory,
  isKeyInvalid,
  provideDefaultConfig,
  provideDefaultConfigFactory
} from "./chunk-VIVIQI6G.js";
import {
  Router
} from "./chunk-EBCNDD52.js";
import {
  HttpClient
} from "./chunk-2A6OHZCE.js";
import {
  CommonModule
} from "./chunk-S7KROBXW.js";
import {
  isPlatformBrowser
} from "./chunk-5AFE3VT7.js";
import {
  APP_INITIALIZER,
  Inject,
  Injectable,
  InjectionToken,
  NgModule,
  NgZone,
  PLATFORM_ID,
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
  EMPTY,
  ReplaySubject,
  catchError,
  combineLatest,
  filter,
  of,
  take,
  tap,
  throwError
} from "./chunk-R6FETK65.js";
import {
  Observable,
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/cdc/fesm2022/spartacus-cdc-root.mjs
var CdcUserPreferenceSerializer = class _CdcUserPreferenceSerializer {
  constructor() {
  }
  convert(source, target) {
    if (source) {
      const preference = source.id?.concat(".isConsentGranted");
      let giveConsent = false;
      if (preference) {
        if (source.currentConsent?.consentGivenDate) {
          giveConsent = true;
        }
        target = this.convertToCdcPreference(preference, giveConsent);
      }
    }
    return target;
  }
  /**
   * converts a dot separated string to deeply nested object
   * @param path : dot separated string
   * @param value : true if consent is given, false if consent is withdrawn
   * @returns preference object compatible for cdc
   * example:
   * input path x.y.z.isConsentGranted
   * input value: true
   * output=  x:{y:{z:{isConsentGranted: true}}}
   */
  convertToCdcPreference(path, value) {
    const target = {};
    let consentCode = target;
    isKeyInvalid(consentCode);
    const list = path.split(".");
    const len = list.length;
    for (let i = 0; i < len - 1; i++) {
      const elem = list[i];
      if (!consentCode[elem]) {
        consentCode[elem] = {};
      }
      consentCode = consentCode[elem];
    }
    consentCode[list[len - 1]] = value;
    return target;
  }
  static {
    this.ɵfac = function CdcUserPreferenceSerializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcUserPreferenceSerializer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcUserPreferenceSerializer,
      factory: _CdcUserPreferenceSerializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcUserPreferenceSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var KEY = "cdc-consents-list";
var CdcConsentsLocalStorageService = class _CdcConsentsLocalStorageService {
  constructor(statePersistenceService) {
    this.statePersistenceService = statePersistenceService;
    this.subscription = new Subscription();
  }
  /**
   * saves active cdc consents to storage
   * @param siteConsent - cdc site consent details
   */
  persistCdcConsentsToStorage(siteConsent) {
    const consents = [];
    const siteDetails = siteConsent.siteConsentDetails;
    for (const key in siteDetails) {
      if (Object.hasOwn(siteDetails, key) && siteDetails[key]?.isActive === true) {
        const consent = {};
        consent.id = key;
        consent.required = siteDetails[key]?.isMandatory;
        consents.push(consent);
      }
    }
    this.subscription.add(this.statePersistenceService.syncWithStorage({
      key: KEY,
      state$: of(consents)
    }));
  }
  /**
   * Returns cdc consents from storage
   * @returns cdc consents
   */
  readCdcConsentsFromStorage() {
    return this.statePersistenceService.readStateFromStorage({
      key: KEY
    });
  }
  /**
   * Returns true if input consent is present in storage, else returns false
   * @param consentId - cdc consent id
   * @returns - returns true/false
   */
  checkIfConsentExists(consentId) {
    const consents = this.readCdcConsentsFromStorage();
    let result = false;
    consents.forEach((consent) => {
      if (consent.id === consentId) {
        result = true;
      }
    });
    return result;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function CdcConsentsLocalStorageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcConsentsLocalStorageService)(ɵɵinject(StatePersistenceService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcConsentsLocalStorageService,
      factory: _CdcConsentsLocalStorageService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcConsentsLocalStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: StatePersistenceService
  }], null);
})();
var CdcConsentManagementComponentService = class _CdcConsentManagementComponentService extends ConsentManagementComponentService {
  constructor(store) {
    super();
    this.store = store;
  }
  getRequiredConsents(templateList) {
    const requiredConsents = [];
    const cdcConsents = this.getCdcConsentIDs(true);
    requiredConsents.push(...super.getRequiredConsents(templateList));
    requiredConsents.push(...cdcConsents);
    return requiredConsents;
  }
  /**
   * Returns cdc consents from store
   * @param mandatoryConsents - if passed true, only mandatory consents will be returned.
   * if passed false, all active consents (irrespective of whether they are mandatory or not)
   * @returns array of consents
   */
  getCdcConsentIDs(mandatoryConsents = false) {
    const consentIDs = [];
    const consents = this.store.readCdcConsentsFromStorage() || [];
    consents.forEach((consent) => {
      if (mandatoryConsents === true) {
        if (consent.required === true) {
          consentIDs.push(consent.id);
        }
      } else {
        consentIDs.push(consent.id);
      }
    });
    return consentIDs;
  }
  isConsentMandatory(id) {
    return this.getCdcConsentIDs(true).includes(id);
  }
  static {
    this.ɵfac = function CdcConsentManagementComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcConsentManagementComponentService)(ɵɵinject(CdcConsentsLocalStorageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcConsentManagementComponentService,
      factory: _CdcConsentManagementComponentService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcConsentManagementComponentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CdcConsentsLocalStorageService
  }], null);
})();
var CDC_USER_PREFERENCE_SERIALIZER = new InjectionToken("CdcUserPreferenceSerializer");
var CDC_PREFERENCE_SERIALIZER = new InjectionToken("CdcPreferenceSerializer");
var CdcConfig = class _CdcConfig {
  static {
    this.ɵfac = function CdcConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcConfig,
      factory: function CdcConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _CdcConfig)();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
LAUNCH_CALLER["CDC_RECONSENT"] = "CDC_RECONSENT";
var CdcPreferenceSerializer = class _CdcPreferenceSerializer {
  /**
   * Generate CDC preferences from consent objects
   * @param cdcConsents List of consents with their statuses
   * @returns Serialized and deeply nested preferences object
   */
  convert(source, _target) {
    return source.reduce((preferences, cdcConsent) => {
      if (!cdcConsent.id) {
        return preferences;
      }
      const path = `${cdcConsent.id}.isConsentGranted`;
      const value = cdcConsent.isConsentGranted === true;
      const serializedPreference = this.convertToCdcPreference(path, value);
      return deepMerge(preferences, serializedPreference);
    }, {});
  }
  /**
   * Converts a dot-separated string to a deeply nested object.
   * @param path Dot-separated string representing keys
   * @param value Value to set
   * @returns Nested object
   */
  convertToCdcPreference(path, value) {
    return path.split(".").reduceRight((acc, key) => ({
      [key]: acc
    }), value);
  }
  static {
    this.ɵfac = function CdcPreferenceSerializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcPreferenceSerializer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcPreferenceSerializer,
      factory: _CdcPreferenceSerializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcPreferenceSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CdcLoadUserTokenFailEvent = class extends CxEvent {
  static {
    this.type = "CdcLoadUserTokenFailEvent";
  }
};
var CdcReConsentEvent = class extends CxEvent {
  static {
    this.type = "CdcReConsentEvent";
  }
};
var CDC_FEATURE = "cdc";
var CDC_CORE_FEATURE = "cdcCore";
var CdcAuthFacade = class _CdcAuthFacade {
  static {
    this.ɵfac = function CdcAuthFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcAuthFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcAuthFacade,
      factory: () => (() => facadeFactory({
        facade: _CdcAuthFacade,
        feature: CDC_CORE_FEATURE,
        methods: ["loginWithCustomCdcFlow", "loginWithToken"],
        async: true
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcAuthFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: CdcAuthFacade,
        feature: CDC_CORE_FEATURE,
        methods: ["loginWithCustomCdcFlow", "loginWithToken"],
        async: true
      })
    }]
  }], null, null);
})();
var defaultSessionTimeOut = 3600;
var setAccountInfoAPI = "accounts.setAccountInfo";
var CdcJsService = class _CdcJsService {
  constructor(cdcConfig, baseSiteService, languageService, scriptLoader, winRef, cdcAuth, auth, zone, userProfileFacade, platform, globalMessageService, eventService, consentStore) {
    this.cdcConfig = cdcConfig;
    this.baseSiteService = baseSiteService;
    this.languageService = languageService;
    this.scriptLoader = scriptLoader;
    this.winRef = winRef;
    this.cdcAuth = cdcAuth;
    this.auth = auth;
    this.zone = zone;
    this.userProfileFacade = userProfileFacade;
    this.platform = platform;
    this.globalMessageService = globalMessageService;
    this.eventService = eventService;
    this.consentStore = consentStore;
    this.loaded$ = new ReplaySubject(1);
    this.errorLoading$ = new ReplaySubject(1);
    this.subscription = new Subscription();
  }
  /**
   * Initialize CDC script
   */
  initialize() {
    this.loadCdcJavascript();
  }
  /**
   * Returns observable with the information if CDC script is loaded.
   */
  didLoad() {
    return this.loaded$.asObservable();
  }
  /**
   * Returns observable with the information if CDC script failed to load.
   */
  didScriptFailToLoad() {
    return this.errorLoading$.asObservable();
  }
  /**
   * Method which loads the CDC Script
   */
  loadCdcJavascript() {
    if (isPlatformBrowser(this.platform)) {
      this.subscription.add(combineLatest([this.baseSiteService.getActive(), this.languageService.getActive()]).pipe(take(1)).subscribe(([baseSite, language]) => {
        const scriptForBaseSite = this.getJavascriptUrlForCurrentSite(baseSite);
        if (scriptForBaseSite) {
          const javascriptUrl = `${scriptForBaseSite}&lang=${language}`;
          this.scriptLoader.embedScript({
            src: javascriptUrl,
            params: void 0,
            attributes: {
              type: "text/javascript"
            },
            callback: () => {
              this.registerEventListeners(baseSite);
              this.getSiteConsentDetails(true).subscribe();
              this.loaded$.next(true);
              this.errorLoading$.next(false);
            },
            errorCallback: () => {
              this.errorLoading$.next(true);
              this.loaded$.next(false);
            }
          });
          if (this.winRef?.nativeWindow !== void 0) {
            this.winRef.nativeWindow["__gigyaConf"] = {
              include: "id_token, missing-required-fields, preferences"
            };
          }
        }
      }));
    }
  }
  /**
   * Method obtains the CDC SDK URL for a base site
   * @param baseSite
   * @returns CDC SDK URL
   */
  getJavascriptUrlForCurrentSite(baseSite) {
    const filteredConfigs = (this.cdcConfig.cdc ?? []).filter((conf) => conf.baseSite === baseSite);
    if (filteredConfigs && filteredConfigs.length > 0) {
      return filteredConfigs[0].javascriptUrl;
    }
    return "";
  }
  /**
   * Register login event listeners for CDC login
   *
   * @param baseSite
   */
  registerEventListeners(baseSite) {
    this.addCdcEventHandlers(baseSite);
  }
  /**
   * Method to register CDC event handlers
   *
   * @param baseSite
   */
  addCdcEventHandlers(baseSite) {
    this.gigyaSDK = this.winRef.nativeWindow?.["gigya"];
    this.gigyaSDK?.accounts?.addEventHandlers({
      onLogin: (...params) => this.zone.run(() => this.onLoginEventHandler(baseSite, ...params))
    });
  }
  /**
   * Trigger login to Commerce once an onLogin event is triggered by CDC Screen Set.
   *
   * @param baseSite
   * @param response
   */
  onLoginEventHandler(baseSite, response) {
    if (response && !response?.context?.skipOccAuth) {
      this.cdcAuth.loginWithCustomCdcFlow(response.UID, response.UIDSignature, response.signatureTimestamp, response.id_token !== void 0 ? response.id_token : "", baseSite);
    }
  }
  /**
   * Trigger CDC User registration and log in using CDC APIs.
   *
   * @param user: UserSignUp
   */
  registerUserWithoutScreenSet(user) {
    if (!user.uid || !user.password) {
      return throwError(() => null);
    } else {
      return this.invokeAPI("accounts.initRegistration", {}).pipe(switchMap((response) => this.onInitRegistrationHandler(user, response)));
    }
  }
  /**
   * Trigger CDC User registration using CDC APIs.
   *
   * @param user
   * @param response
   */
  onInitRegistrationHandler(user, response) {
    if (!response?.regToken || !user?.uid || !user?.password) {
      return throwError(() => null);
    } else {
      const regSource = this.winRef.nativeWindow?.location?.href || "";
      return this.invokeAPI("accounts.register", {
        email: user.uid,
        password: user.password,
        profile: {
          firstName: user.firstName,
          lastName: user.lastName
        },
        preferences: user.preferences,
        regSource,
        regToken: response.regToken,
        finalizeRegistration: true
      }).pipe(take(1), tap({
        error: (errorResponse) => this.handleRegisterError(errorResponse)
      }));
    }
  }
  /**
   * Trigger CDC User log in using CDC APIs.
   *
   * @param email
   * @param password
   * @param context (optional) - indicates the user flow
   */
  loginUserWithoutScreenSet(email, password, context) {
    const missingConsentErrorCode = 206001;
    let ignoreInterruptions = false;
    const channel = this.getCurrentBaseSiteChannel();
    if (channel && channel === "B2C") {
      ignoreInterruptions = true;
    }
    return this.getSessionExpirationValue().pipe(switchMap((sessionExpiration) => {
      return this.invokeAPI("accounts.login", __spreadProps(__spreadValues({
        loginID: email,
        password,
        ignoreInterruptions
      }, context && {
        context
      }), {
        sessionExpiry: sessionExpiration
      })).pipe(take(1), tap({
        error: (response) => {
          if (response.errorCode !== missingConsentErrorCode) {
            this.handleLoginError(response);
          } else {
            this.raiseCdcReconsentEvent(email, password, response.missingRequiredFields, response.errorMessage, response.regToken, response.preferences);
          }
        }
      }));
    }));
  }
  /**
   * Trigger CDC Organisation registration using CDC APIs.
   *
   * @param orgInfo
   */
  registerOrganisationWithoutScreenSet(orgInfo) {
    if (!orgInfo?.companyName || !orgInfo?.email || !orgInfo?.firstName || !orgInfo?.lastName) {
      return throwError("Organization details not provided");
    } else {
      const regSource = this.winRef.nativeWindow?.location?.href || "";
      const message = orgInfo.message;
      let department = null;
      let position = null;
      if (message) {
        ({
          department,
          position
        } = this.parseMessage(message));
      }
      return this.invokeAPI("accounts.b2b.registerOrganization", {
        organization: {
          name: orgInfo.companyName,
          street_address: orgInfo.addressLine1 + " " + orgInfo.addressLine2,
          city: orgInfo.town,
          state: orgInfo.region,
          zip_code: orgInfo.postalCode,
          country: orgInfo.country
        },
        requester: __spreadProps(__spreadValues({
          firstName: orgInfo.firstName,
          lastName: orgInfo.lastName,
          email: orgInfo.email
        }, orgInfo.phoneNumber && orgInfo.phoneNumber.length > 0 && {
          phone: orgInfo.phoneNumber
        }), {
          department,
          jobFunction: position
        }),
        regSource
      }).pipe(take(1), tap({
        error: (errorResponse) => this.handleRegisterError(errorResponse)
      }));
    }
  }
  /**
   * Retrieves the organization selected by the logged in user
   *
   */
  getOrganizationContext() {
    return this.invokeAPI("accounts.b2b.getOrganizationContext", {});
  }
  /**
   * Opens the Organization Management dashboard and logs in the user
   * if they currently have a valid Gigya session on the site
   *
   * @param orgId
   */
  openDelegatedAdminLogin(orgId) {
    return this.zone.run(() => this.gigyaSDK?.accounts?.b2b?.openDelegatedAdminLogin({
      orgId
    }));
  }
  /**
   * Show failure message to the user in case registration fails.
   *
   * @param response
   */
  handleRegisterError(response) {
    if (response && response.status === "FAIL") {
      const errorMessage = response.validationErrors && response.validationErrors.length > 0 && response.validationErrors[response.validationErrors.length - 1].message || "Error";
      this.globalMessageService.add(errorMessage, GlobalMessageType.MSG_TYPE_ERROR);
    }
  }
  /**
   * Show failure message to the user in case login fails.
   *
   * @param response
   */
  handleLoginError(response) {
    if (response && response.status === "FAIL") {
      this.globalMessageService.add({
        key: "httpHandlers.badRequestPleaseLoginAgain",
        params: {
          errorMessage: response.errorMessage
        }
      }, GlobalMessageType.MSG_TYPE_ERROR);
    }
  }
  getSessionExpirationValue() {
    if (this.cdcConfig?.cdc !== void 0) {
      const filteredConfigs = this.cdcConfig.cdc.filter((conf) => conf.baseSite === this.getCurrentBaseSite());
      if (filteredConfigs && filteredConfigs.length > 0) {
        return of(filteredConfigs[0].sessionExpiration);
      }
    }
    return of(defaultSessionTimeOut);
  }
  parseMessage(message) {
    const msgList = message.replace("\n", "").split(";");
    let department = "";
    let position = "";
    for (const msg of msgList) {
      if (msg.trim().toLowerCase().search("department") === 0) {
        department = msg.split(":")[1].trim();
      } else if (msg.trim().toLowerCase().search("position") === 0) {
        position = msg.split(":")[1].trim();
      }
    }
    return {
      department,
      position
    };
  }
  getCurrentBaseSite() {
    let baseSite = "";
    this.baseSiteService.getActive().pipe(take(1)).subscribe((data) => baseSite = data);
    return baseSite;
  }
  getCurrentBaseSiteChannel() {
    let channel = "";
    const baseSiteUid = this.getCurrentBaseSite();
    this.baseSiteService.get(baseSiteUid).pipe(take(1)).subscribe((data) => channel = data?.channel ?? "");
    return channel;
  }
  /**
   * Trigger CDC forgot password using CDC APIs.
   *
   * @param email
   */
  resetPasswordWithoutScreenSet(email) {
    if (!email || email?.length === 0) {
      return throwError(() => "No email provided");
    } else {
      return this.invokeAPI("accounts.resetPassword", {
        loginID: email
      }).pipe(take(1), tap({
        error: (response) => this.handleResetPassResponse(response)
      }));
    }
  }
  /**
   * Response handler for forgot password
   * @param response
   */
  handleResetPassResponse(response) {
    if (response && response.status === "OK") {
      this.globalMessageService.add({
        key: "forgottenPassword.passwordResetEmailSent"
      }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    } else {
      const errorMessage = response?.errorMessage || {
        key: "httpHandlers.unknownError"
      };
      this.globalMessageService.add(errorMessage, GlobalMessageType.MSG_TYPE_ERROR);
    }
  }
  /**
   * Trigger CDC Profile update.
   *
   * @param firstName
   * @param lastName
   */
  updateProfileWithoutScreenSet(user) {
    if (!user?.firstName || user?.firstName?.length === 0 || !user?.lastName || user?.lastName?.length === 0) {
      return throwError(() => "User details not provided");
    } else {
      const profileObj = {
        profile: {
          firstName: user.firstName,
          lastName: user.lastName
        }
      };
      return this.invokeAPI(setAccountInfoAPI, __spreadValues({}, profileObj)).pipe(take(1), tap(() => this.userProfileFacade.update(user).subscribe({
        error: (error) => of(error)
      })));
    }
  }
  /**
   * Trigger CDC User Password update.
   *
   * @param oldPassword
   * @param newPassword
   */
  updateUserPasswordWithoutScreenSet(oldPassword, newPassword) {
    if (!oldPassword || oldPassword?.length === 0 || !newPassword || newPassword?.length === 0) {
      return throwError(() => "No passwords provided");
    } else {
      return this.invokeAPI(setAccountInfoAPI, {
        password: oldPassword,
        newPassword
      }).pipe(tap({
        error: (error) => of(error)
      }));
    }
  }
  /**
   * Updates user details using the existing User API
   *
   * @param response
   */
  onProfileUpdateEventHandler(response, isPasswordReset = false) {
    if (response) {
      const userDetails = {};
      userDetails.firstName = response.profile.firstName;
      userDetails.lastName = response.profile.lastName;
      userDetails.uid = response.profile.email;
      this.getLoggedInUserEmail().subscribe((user) => {
        const currentEmail = user?.uid;
        this.userProfileFacade.update(userDetails).subscribe(() => {
          if (currentEmail !== userDetails.uid || isPasswordReset) {
            this.logoutUser();
          }
          this.handleProfileUpdateResponse(response);
        });
      });
    } else {
      this.handleProfileUpdateResponse(response);
    }
  }
  /**
   * handle toast message on profile update
   * @param response
   *
   */
  handleProfileUpdateResponse(response) {
    if (response?.response?.errorCode === 0) {
      this.globalMessageService.add({
        key: "cdcProfile.profileUpdateSuccess"
      }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    } else {
      this.globalMessageService.add({
        key: "cdcProfile.profileUpdateFailure"
      }, GlobalMessageType.MSG_TYPE_ERROR);
    }
  }
  /**
   * Trigger CDC user email update.
   *
   * @param password
   * @param newEmail
   */
  updateUserEmailWithoutScreenSet(password, newEmail) {
    if (!password || password?.length === 0 || !newEmail || newEmail?.length === 0) {
      return throwError(() => "Email or password not provided");
    } else {
      return this.getLoggedInUserEmail().pipe(switchMap((user) => {
        const email = user?.uid;
        if (!email || email?.length === 0) {
          return throwError(() => "Email or password not provided");
        }
        return this.loginUserWithoutScreenSet(email, password, {
          skipOccAuth: true
        }).pipe(switchMap(() => this.invokeAPI(setAccountInfoAPI, {
          profile: {
            email: newEmail
          }
        }).pipe(take(1), tap({
          next: () => this.userProfileFacade.update({
            uid: newEmail
          }).pipe(take(1), tap({
            error: (error) => of(error),
            complete: () => {
              this.logoutUser();
            }
          }))
        }))));
      }));
    }
  }
  /**
   * Obtain the email of the currently logged in user
   * @returns emailID of the loggedIn user
   */
  getLoggedInUserEmail() {
    return this.userProfileFacade.get().pipe(filter((user) => Boolean(user)), take(1));
  }
  /**
   * Trigger CDC address update.
   *
   * @param address
   */
  updateAddressWithoutScreenSet(formattedAddress, zipCode, city, country) {
    if (!formattedAddress || formattedAddress?.length === 0) {
      return throwError(() => "No address provided");
    } else {
      const profileObj = __spreadValues(__spreadValues(__spreadValues({
        address: formattedAddress
      }, city && {
        city
      }), country && {
        country
      }), zipCode && {
        zip: zipCode
      });
      return this.invokeAPI(setAccountInfoAPI, {
        profile: profileObj
      });
    }
  }
  /**
   * Obtain the CDC SDK Method from the input method name as string
   * @param methodName
   * @returns CDC SDK Function
   */
  getSdkFunctionFromName(methodName) {
    const nestedMethods = methodName.split(".");
    let cdcAPI = this.gigyaSDK;
    nestedMethods.forEach((method) => {
      if (cdcAPI && cdcAPI.hasOwnProperty(method)) {
        cdcAPI = cdcAPI[method];
      }
    });
    return cdcAPI;
  }
  /**
   * Invoke the CDC SDK Method and convert the callback to an Observable
   * @param methodName - method to be invoked
   * @param payload - Object payload
   * @returns - Observable with the response
   */
  invokeAPI(methodName, payload) {
    return new Observable((result) => {
      const actualAPI = this.getSdkFunctionFromName(methodName);
      if (typeof actualAPI != "function") {
        result.error("CDC API name is incorrect");
        return;
      }
      actualAPI(__spreadProps(__spreadValues({}, payload), {
        callback: (response) => {
          this.zone.run(() => {
            if (response?.status === "OK") {
              result.next(response);
              result.complete();
            } else {
              result.error(response);
            }
          });
        }
      }));
    });
  }
  /**
   * Retrieves consent statements for logged in CDC site (based on CDC site API Key)
   * @param persistToLocalStorage - set this to true, if you want to save the fetched CDC consents to a local storage
   * @returns - Observable with site consent details
   */
  getSiteConsentDetails(persistToLocalStorage = false) {
    const baseSite = this.getCurrentBaseSite();
    const javascriptURL = this.getJavascriptUrlForCurrentSite(baseSite);
    const queryParams = new URLSearchParams(javascriptURL.substring(javascriptURL.indexOf("?")));
    const siteApiKey = queryParams.get("apikey");
    return this.invokeAPI("accounts.getSiteConsentDetails", {
      apiKey: siteApiKey
    }).pipe(tap({
      next: (response) => {
        if (persistToLocalStorage) {
          this.consentStore.persistCdcConsentsToStorage(response);
        }
      }
    }));
  }
  /**
   * Triggers the update (give/withdraw) of a CDC consent for a user
   * @param uid - user ID of the logged in user
   * @param lang - current storefront language
   * @param preferences - object containing the preference details
   * @param regToken - optional parameter, which is necessary when reconsent is provided during login scenario
   * @returns - returns Observable with error code and status
   */
  setUserConsentPreferences(uid, lang, preferences, regToken) {
    const regSource = this.winRef.nativeWindow?.location?.href || "";
    return this.invokeAPI(setAccountInfoAPI, {
      uid,
      lang,
      preferences,
      regSource,
      regToken
    }).pipe(tap({
      error: (error) => {
        throwError(error);
      }
    }));
  }
  /**
   * Dispatch an event when reconsent is required during login. This will be listened
   * by reconsent module to show reconsent pop-up
   * @param user - user ID provided in login screen
   * @param password - password provided in login screen
   * @param reconsentIds - missing required cdc consent IDs
   * @param errorMessage - error message indicating that reconsent is required
   * @param regToken - token of the login session
   */
  raiseCdcReconsentEvent(user, password, reconsentIds, errorMessage, regToken, preferences) {
    const consentIds = [];
    reconsentIds.forEach((template) => {
      const removePreference = template.replace("preferences.", "");
      const removeIsConsentGranted = removePreference.replace(".isConsentGranted", "");
      consentIds.push(removeIsConsentGranted);
    });
    const newReConsentEvent = new CdcReConsentEvent();
    newReConsentEvent.user = user;
    newReConsentEvent.password = password;
    newReConsentEvent.consentIds = consentIds;
    newReConsentEvent.errorMessage = errorMessage;
    newReConsentEvent.regToken = regToken;
    newReConsentEvent.preferences = preferences;
    this.eventService.dispatch(newReConsentEvent);
  }
  logoutUser() {
    this.auth.logout();
    this.invokeAPI("accounts.logout", {});
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static {
    this.ɵfac = function CdcJsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcJsService)(ɵɵinject(CdcConfig), ɵɵinject(BaseSiteService), ɵɵinject(LanguageService), ɵɵinject(ScriptLoader), ɵɵinject(WindowRef), ɵɵinject(CdcAuthFacade), ɵɵinject(AuthService), ɵɵinject(NgZone), ɵɵinject(UserProfileFacade), ɵɵinject(PLATFORM_ID), ɵɵinject(GlobalMessageService), ɵɵinject(EventService), ɵɵinject(CdcConsentsLocalStorageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcJsService,
      factory: _CdcJsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcJsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CdcConfig
  }, {
    type: BaseSiteService
  }, {
    type: LanguageService
  }, {
    type: ScriptLoader
  }, {
    type: WindowRef
  }, {
    type: CdcAuthFacade
  }, {
    type: AuthService
  }, {
    type: NgZone
  }, {
    type: UserProfileFacade
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: GlobalMessageService
  }, {
    type: EventService
  }, {
    type: CdcConsentsLocalStorageService
  }], null);
})();
var CdcUserConsentService = class _CdcUserConsentService {
  constructor(languageService, userProfileFacade, cdcJsService, converter, cdcConsentsStorage) {
    this.languageService = languageService;
    this.userProfileFacade = userProfileFacade;
    this.cdcJsService = cdcJsService;
    this.converter = converter;
    this.cdcConsentsStorage = cdcConsentsStorage;
  }
  /**
   *
   * @param isConsentGranted - set true - if consent is given; false - if consent is withdrawn
   * @param consentCodes - array of cdc consent ids
   * @param user - If user is not passed, the logged in user id will be fetched and used. If passed, it will be considered.
   * @param regToken - token
   * @returns - returns Observable with error code and status
   * @deprecated since 2211.38, use method updateCdcUserPreferences instead
   */
  // CXSPA-9292: remove this method in next major release
  updateCdcConsent(isConsentGranted, consentCodes, user, regToken) {
    let consent;
    let serializedPreference = {};
    for (const consentCode of consentCodes) {
      consent = {};
      consent.id = consentCode;
      consent.currentConsent = {};
      if (isConsentGranted) {
        consent.currentConsent.consentGivenDate = /* @__PURE__ */ new Date();
      } else {
        consent.currentConsent.consentWithdrawnDate = /* @__PURE__ */ new Date();
      }
      const preference = this.converter.convert(consent, CDC_USER_PREFERENCE_SERIALIZER);
      serializedPreference = Object.assign(serializedPreference, preference);
    }
    let userId = "";
    if (user === void 0) {
      userId = this.getUserID() ?? "";
    } else if (user !== void 0) {
      userId = user;
    }
    const currentLanguage = this.getActiveLanguage();
    return this.cdcJsService.setUserConsentPreferences(userId, currentLanguage, serializedPreference, regToken).pipe(tap({
      error: (error) => {
        throwError(error);
      }
    }));
  }
  /**
   *
   * @param consentCodes an array of consent ID with status
   * @param user If user is not passed, the logged in user id will be fetched and used. If passed, it will be considered.
   * @param regToken token
   * @returns returns Observable with error code and status
   */
  updateCdcUserPreferences(consentCodes, user, regToken) {
    const serializedPreference = this.converter.convert(consentCodes, CDC_PREFERENCE_SERIALIZER);
    let userId = "";
    if (user === void 0) {
      userId = this.getUserID() ?? "";
    } else if (user !== void 0) {
      userId = user;
    }
    const currentLanguage = this.getActiveLanguage();
    return this.cdcJsService.setUserConsentPreferences(userId, currentLanguage, serializedPreference, regToken).pipe(tap({
      error: (error) => {
        throwError(error);
      }
    }));
  }
  /**
   * Returns logged in User ID
   * @returns user id
   */
  getUserID() {
    let uid;
    this.userProfileFacade.get().subscribe((user) => {
      uid = user?.uid;
    });
    return uid;
  }
  /**
   * Returns current language of the current site
   * @returns language iso code
   */
  getActiveLanguage() {
    let currentLanguage = "";
    this.languageService.getActive().subscribe((language) => currentLanguage = language).unsubscribe();
    return currentLanguage;
  }
  static {
    this.ɵfac = function CdcUserConsentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcUserConsentService)(ɵɵinject(LanguageService), ɵɵinject(UserProfileFacade), ɵɵinject(CdcJsService), ɵɵinject(ConverterService), ɵɵinject(CdcConsentsLocalStorageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcUserConsentService,
      factory: _CdcUserConsentService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcUserConsentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: LanguageService
  }, {
    type: UserProfileFacade
  }, {
    type: CdcJsService
  }, {
    type: ConverterService
  }, {
    type: CdcConsentsLocalStorageService
  }], null);
})();
var CdcUserConsentAdapter = class _CdcUserConsentAdapter extends OccUserConsentAdapter {
  constructor(http, occEndpoints, converter, cdcUserConsentService, cdcConsentsStorage) {
    super(http, occEndpoints, converter);
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.cdcUserConsentService = cdcUserConsentService;
    this.cdcConsentsStorage = cdcConsentsStorage;
  }
  loadConsents(userId) {
    return super.loadConsents(userId);
  }
  giveConsent(userId, consentTemplateId, consentTemplateVersion) {
    if (!this.cdcConsentsStorage.checkIfConsentExists(consentTemplateId)) {
      return super.giveConsent(userId, consentTemplateId, consentTemplateVersion);
    } else {
      return this.cdcUserConsentService.updateCdcUserPreferences([{
        id: consentTemplateId,
        isConsentGranted: true
      }]).pipe(catchError((error) => throwError(error)), switchMap((result) => {
        if (result?.errorCode === 0) {
          return super.giveConsent(userId, consentTemplateId, consentTemplateVersion);
        }
        return EMPTY;
      }));
    }
  }
  withdrawConsent(userId, consentCode, consentId) {
    if (!this.cdcConsentsStorage.checkIfConsentExists(consentId ?? "")) {
      return super.withdrawConsent(userId, consentCode);
    } else {
      return this.cdcUserConsentService.updateCdcUserPreferences([{
        id: consentId ?? "",
        isConsentGranted: false
      }]).pipe(catchError((error) => throwError(error)), switchMap((result) => {
        if (result?.errorCode === 0) {
          return super.withdrawConsent(userId, consentCode);
        }
        return EMPTY;
      }));
    }
  }
  static {
    this.ɵfac = function CdcUserConsentAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcUserConsentAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService), ɵɵinject(CdcUserConsentService), ɵɵinject(CdcConsentsLocalStorageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcUserConsentAdapter,
      factory: _CdcUserConsentAdapter.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcUserConsentAdapter, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }, {
    type: CdcUserConsentService
  }, {
    type: CdcConsentsLocalStorageService
  }], null);
})();
var CdcConsentManagementModule = class _CdcConsentManagementModule {
  static {
    this.ɵfac = function CdcConsentManagementModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcConsentManagementModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CdcConsentManagementModule,
      imports: [CommonModule, I18nModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: UserConsentAdapter,
        useClass: CdcUserConsentAdapter
      }, {
        provide: ConsentManagementComponentService,
        useClass: CdcConsentManagementComponentService
      }, {
        provide: CDC_USER_PREFERENCE_SERIALIZER,
        useExisting: CdcUserPreferenceSerializer,
        multi: true
      }, {
        provide: CDC_PREFERENCE_SERIALIZER,
        useExisting: CdcPreferenceSerializer,
        multi: true
      }],
      imports: [CommonModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcConsentManagementModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule],
      providers: [{
        provide: UserConsentAdapter,
        useClass: CdcUserConsentAdapter
      }, {
        provide: ConsentManagementComponentService,
        useClass: CdcConsentManagementComponentService
      }, {
        provide: CDC_USER_PREFERENCE_SERIALIZER,
        useExisting: CdcUserPreferenceSerializer,
        multi: true
      }, {
        provide: CDC_PREFERENCE_SERIALIZER,
        useExisting: CdcPreferenceSerializer,
        multi: true
      }]
    }]
  }], null, null);
})();
var cdcRoutesConfig = {
  cdcLogin: {
    paths: ["/cdc/login"],
    protected: false,
    authFlow: true
  },
  cdcCheckoutLogin: {
    paths: ["/cdc/checkout-login"],
    protected: false,
    authFlow: true
  },
  cdcOrgRegistration: {
    paths: ["/cdc/register-org"],
    protected: false,
    authFlow: true
  },
  login: {
    paths: ["login"],
    protected: false,
    authFlow: true
  },
  loginForm: {
    paths: [],
    //overriding to avoid same path in different routes
    protected: false,
    authFlow: true
  }
};
var defaultCdcRoutingConfig = {
  routing: {
    routes: cdcRoutesConfig
  }
};
var CdcLogoutGuard = class _CdcLogoutGuard extends LogoutGuard {
  constructor(auth, cms, semanticPathService, protectedRoutes, router, winRef) {
    super(auth, cms, semanticPathService, protectedRoutes, router);
    this.auth = auth;
    this.cms = cms;
    this.semanticPathService = semanticPathService;
    this.protectedRoutes = protectedRoutes;
    this.router = router;
    this.winRef = winRef;
  }
  /**
   * Logout user from CDC
   */
  logoutFromCdc() {
    this.winRef.nativeWindow?.["gigya"]?.accounts?.logout();
  }
  /**
   * @override
   * @returns promise to resolve after complete logout
   */
  logout() {
    return Promise.all([super.logout(), this.logoutFromCdc()]);
  }
  static {
    this.ɵfac = function CdcLogoutGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcLogoutGuard)(ɵɵinject(AuthService), ɵɵinject(CmsService), ɵɵinject(SemanticPathService), ɵɵinject(ProtectedRoutesService), ɵɵinject(Router), ɵɵinject(WindowRef));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcLogoutGuard,
      factory: _CdcLogoutGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcLogoutGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AuthService
  }, {
    type: CmsService
  }, {
    type: SemanticPathService
  }, {
    type: ProtectedRoutesService
  }, {
    type: Router
  }, {
    type: WindowRef
  }], null);
})();
var CdcLoginGuard = class _CdcLoginGuard extends LoginGuard {
  constructor(authService, authConfigService, cmsPageGuard) {
    super(authService, authConfigService, cmsPageGuard);
    this.authService = authService;
    this.authConfigService = authConfigService;
    this.cmsPageGuard = cmsPageGuard;
  }
  shouldRenderCMSPage() {
    return of(true);
  }
  static {
    this.ɵfac = function CdcLoginGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcLoginGuard)(ɵɵinject(AuthService), ɵɵinject(AuthConfigService), ɵɵinject(CmsPageGuard));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcLoginGuard,
      factory: _CdcLoginGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcLoginGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AuthService
  }, {
    type: AuthConfigService
  }, {
    type: CmsPageGuard
  }], null);
})();
var CdcLoginAsGuestGuard = class _CdcLoginAsGuestGuard extends LoginAsGuestGuard {
  getPath() {
    return this.semanticPathService.get("login");
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵCdcLoginAsGuestGuard_BaseFactory;
      return function CdcLoginAsGuestGuard_Factory(__ngFactoryType__) {
        return (ɵCdcLoginAsGuestGuard_BaseFactory || (ɵCdcLoginAsGuestGuard_BaseFactory = ɵɵgetInheritedFactory(_CdcLoginAsGuestGuard)))(__ngFactoryType__ || _CdcLoginAsGuestGuard);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcLoginAsGuestGuard,
      factory: _CdcLoginAsGuestGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcLoginAsGuestGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function cdcJsFactory(cdcJsService, configInit) {
  return () => lastValueFrom(configInit.getStable("context", "cdc").pipe(tap(() => {
    cdcJsService.initialize();
  })));
}
function defaultCdcComponentsConfig() {
  const config = {
    featureModules: {
      [CDC_FEATURE]: {
        cmsComponents: ["GigyaRaasComponent"]
      },
      // by default core is bundled together with components
      [CDC_CORE_FEATURE]: CDC_FEATURE
    }
  };
  return config;
}
var CdcRootModule = class _CdcRootModule {
  static {
    this.ɵfac = function CdcRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CdcRootModule,
      imports: [CdcConsentManagementModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultCdcComponentsConfig), {
        provide: LogoutGuard,
        useExisting: CdcLogoutGuard
      }, {
        provide: LoginGuard,
        useExisting: CdcLoginGuard
      }, {
        provide: LoginAsGuestGuard,
        useExisting: CdcLoginAsGuestGuard
      }, {
        provide: APP_INITIALIZER,
        useFactory: cdcJsFactory,
        deps: [CdcJsService, ConfigInitializerService],
        multi: true
      }, provideDefaultConfig(defaultCdcRoutingConfig)],
      imports: [CdcConsentManagementModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcRootModule, [{
    type: NgModule,
    args: [{
      imports: [CdcConsentManagementModule],
      providers: [provideDefaultConfigFactory(defaultCdcComponentsConfig), {
        provide: LogoutGuard,
        useExisting: CdcLogoutGuard
      }, {
        provide: LoginGuard,
        useExisting: CdcLoginGuard
      }, {
        provide: LoginAsGuestGuard,
        useExisting: CdcLoginAsGuestGuard
      }, {
        provide: APP_INITIALIZER,
        useFactory: cdcJsFactory,
        deps: [CdcJsService, ConfigInitializerService],
        multi: true
      }, provideDefaultConfig(defaultCdcRoutingConfig)]
    }]
  }], null, null);
})();

export {
  CdcUserPreferenceSerializer,
  CdcConsentsLocalStorageService,
  CdcConsentManagementComponentService,
  CDC_USER_PREFERENCE_SERIALIZER,
  CDC_PREFERENCE_SERIALIZER,
  CdcConfig,
  CdcPreferenceSerializer,
  CdcLoadUserTokenFailEvent,
  CdcReConsentEvent,
  CDC_FEATURE,
  CDC_CORE_FEATURE,
  CdcAuthFacade,
  CdcJsService,
  CdcUserConsentService,
  CdcUserConsentAdapter,
  CdcConsentManagementModule,
  CdcLogoutGuard,
  CdcLoginGuard,
  CdcLoginAsGuestGuard,
  cdcJsFactory,
  defaultCdcComponentsConfig,
  CdcRootModule
};
//# sourceMappingURL=chunk-DAEC7GJ6.js.map
