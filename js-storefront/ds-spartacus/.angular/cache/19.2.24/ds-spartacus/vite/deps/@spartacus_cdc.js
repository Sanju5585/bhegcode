import {
  CdcAuthFacade,
  CdcConfig,
  CdcJsService,
  CdcLoadUserTokenFailEvent
} from "./chunk-DAEC7GJ6.js";
import "./chunk-DDZIJZKE.js";
import "./chunk-YJXUXPBZ.js";
import {
  TokenTarget
} from "./chunk-ZXNGX3YN.js";
import "./chunk-LZQV6UAH.js";
import {
  CmsComponentData
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  AuthConfigService,
  AuthGuard,
  AuthModule,
  AuthRedirectService,
  AuthStorageService,
  BaseSiteService,
  CmsService,
  ConfigModule,
  EventService,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  LanguageService,
  LoggerService,
  NotAuthGuard,
  OCC_USER_ID_CURRENT,
  RoutingService,
  StateEventService,
  TranslatePipe,
  UserAddressConnector,
  UserAddressService,
  UserIdService,
  WindowRef,
  authGroup_actions,
  isNotUndefined,
  tryNormalizeHttpError,
  userGroup_actions
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import "./chunk-EBCNDD52.js";
import "./chunk-YMQEGXEG.js";
import {
  Actions,
  EffectsFeatureModule,
  EffectsModule,
  createEffect,
  ofType
} from "./chunk-6KXUHIAW.js";
import {
  Store
} from "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-2A6OHZCE.js";
import "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgIf
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  NgModule,
  NgZone,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  EMPTY,
  catchError,
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  mergeMap,
  of,
  take,
  tap
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/cdc/fesm2022/spartacus-cdc-components.mjs
function GigyaRaasComponent_div_0_div_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const lang_r1 = ɵɵnextContext().ngIf;
    const data_r2 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("id", data_r2.containerID);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.displayScreenSet(data_r2, lang_r1), " ");
  }
}
function GigyaRaasComponent_div_0_div_1_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 4);
    ɵɵlistener("click", function GigyaRaasComponent_div_0_div_1_div_1_ng_template_2_Template_a_click_0_listener() {
      ɵɵrestoreView(_r4);
      const lang_r1 = ɵɵnextContext().ngIf;
      const data_r2 = ɵɵnextContext(2).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.showScreenSet(data_r2, lang_r1));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const data_r2 = ɵɵnextContext(3).ngIf;
    ɵɵattribute("data-cdc-id", data_r2.uid)("data-profile-edit", data_r2.profileEdit);
    ɵɵadvance();
    ɵɵtextInterpolate(data_r2.linkText);
  }
}
function GigyaRaasComponent_div_0_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, GigyaRaasComponent_div_0_div_1_div_1_div_1_Template, 2, 2, "div", 3)(2, GigyaRaasComponent_div_0_div_1_div_1_ng_template_2_Template, 2, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const popupLink_r5 = ɵɵreference(3);
    const data_r2 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.displayInEmbedMode(data_r2))("ngIfElse", popupLink_r5);
  }
}
function GigyaRaasComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, GigyaRaasComponent_div_0_div_1_div_1_Template, 4, 2, "div", 1);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r2.language$));
  }
}
function GigyaRaasComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, "errorHandlers.scriptFailedToLoad"), " ", ɵɵpipeBind1(3, 4, "errorHandlers.refreshThePage"), " ");
  }
}
function GigyaRaasComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, GigyaRaasComponent_div_0_div_1_Template, 3, 3, "div", 1);
    ɵɵpipe(2, "async");
    ɵɵtemplate(3, GigyaRaasComponent_div_0_div_3_Template, 4, 6, "div", 2);
    ɵɵpipe(4, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx_r2.jsLoaded$));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(4, 4, ctx_r2.jsError$));
  }
}
var GigyaRaasComponent = class _GigyaRaasComponent {
  constructor(component, baseSiteService, languageService, cdcConfig, winRef, cdcJSService, zone) {
    this.component = component;
    this.baseSiteService = baseSiteService;
    this.languageService = languageService;
    this.cdcConfig = cdcConfig;
    this.winRef = winRef;
    this.cdcJSService = cdcJSService;
    this.zone = zone;
    this.renderScreenSet = true;
    this.isPasswordReset = false;
  }
  ngOnInit() {
    this.jsLoaded$ = this.cdcJSService.didLoad();
    this.jsError$ = this.cdcJSService.didScriptFailToLoad();
    this.language$ = this.languageService.getActive().pipe(
      distinctUntilChanged(),
      // On language change we want to rerender CDC screen with proper translations
      tap(() => this.renderScreenSet = true)
    );
  }
  /**
   * Display screen set in embed mode
   *
   * @param data - GigyaRaasComponentData
   * @param lang - language
   */
  displayScreenSet(data, lang) {
    if (this.renderScreenSet) {
      this.showScreenSet(data, lang);
    }
    this.renderScreenSet = false;
  }
  /**
   * Show screen set
   *
   * @param data - GigyaRaasComponentData
   * @param lang - language
   */
  showScreenSet(data, lang) {
    this.winRef.nativeWindow?.["gigya"]?.accounts?.showScreenSet(__spreadValues(__spreadValues({
      screenSet: data.screenSet,
      startScreen: data.startScreen,
      lang
    }, this.displayInEmbedMode(data) ? {
      containerID: data.containerID
    } : {}), this.isLoginScreenSet(data) ? {
      sessionExpiration: this.getSessionExpirationValue()
    } : {
      onSubmit: (event) => {
        const formData = event.formModel;
        this.isPasswordReset = !!formData?.newPassword;
      },
      onAfterSubmit: (...params) => {
        this.zone.run(() => {
          params.push({
            passwordReset: this.isPasswordReset
          });
          this.cdcJSService.onProfileUpdateEventHandler(...params);
        });
      }
    }));
  }
  isLoginScreenSet(data) {
    const profileEditScreen = data.profileEdit === "true" ? true : false;
    return !profileEditScreen;
  }
  getSessionExpirationValue() {
    if (this.cdcConfig?.cdc !== void 0) {
      const filteredConfigs = this.cdcConfig.cdc.filter((conf) => conf.baseSite === this.getCurrentBaseSite());
      if (filteredConfigs && filteredConfigs.length > 0) {
        return filteredConfigs[0].sessionExpiration;
      }
    }
    return 3600;
  }
  getCurrentBaseSite() {
    let baseSite = "";
    this.baseSiteService.getActive().pipe(take(1)).subscribe((data) => baseSite = data);
    return baseSite;
  }
  /**
   * Check if the component should be displayed in embed mode
   *
   * @param data - GigyaRaasComponentData
   */
  displayInEmbedMode(data) {
    const embedValue = data.embed === "true" ? true : false;
    if (embedValue && data.containerID && data.containerID.length > 0) {
      return true;
    }
    return false;
  }
  static {
    this.ɵfac = function GigyaRaasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GigyaRaasComponent)(ɵɵdirectiveInject(CmsComponentData), ɵɵdirectiveInject(BaseSiteService), ɵɵdirectiveInject(LanguageService), ɵɵdirectiveInject(CdcConfig), ɵɵdirectiveInject(WindowRef), ɵɵdirectiveInject(CdcJsService), ɵɵdirectiveInject(NgZone));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _GigyaRaasComponent,
      selectors: [["cx-gigya-raas"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["popupLink", ""], [4, "ngIf"], ["class", "js-error", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "popup-link", 3, "click"], [1, "js-error"]],
      template: function GigyaRaasComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, GigyaRaasComponent_div_0_Template, 5, 6, "div", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.component.data$));
        }
      },
      dependencies: [NgIf, AsyncPipe, TranslatePipe],
      styles: ["cx-gigya-raas .popup-link{cursor:pointer;color:var(--cx-color-primary)}cx-gigya-raas .js-error{text-align:center;padding:4rem}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GigyaRaasComponent, [{
    type: Component,
    args: [{
      selector: "cx-gigya-raas",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div *ngIf="component.data$ | async as data">
  <div *ngIf="jsLoaded$ | async">
    <div *ngIf="language$ | async as lang">
      <div
        *ngIf="displayInEmbedMode(data); else popupLink"
        [attr.id]="data.containerID"
      >
        {{ displayScreenSet(data, lang) }}
      </div>
      <ng-template #popupLink>
        <a
          class="popup-link"
          [attr.data-cdc-id]="data.uid"
          [attr.data-profile-edit]="data.profileEdit"
          (click)="showScreenSet(data, lang)"
          >{{ data.linkText }}</a
        >
      </ng-template>
    </div>
  </div>
  <div *ngIf="jsError$ | async" class="js-error">
    {{ 'errorHandlers.scriptFailedToLoad' | cxTranslate }}
    {{ 'errorHandlers.refreshThePage' | cxTranslate }}
  </div>
</div>
`,
      styles: ["cx-gigya-raas .popup-link{cursor:pointer;color:var(--cx-color-primary)}cx-gigya-raas .js-error{text-align:center;padding:4rem}\n"]
    }]
  }], () => [{
    type: CmsComponentData
  }, {
    type: BaseSiteService
  }, {
    type: LanguageService
  }, {
    type: CdcConfig
  }, {
    type: WindowRef
  }, {
    type: CdcJsService
  }, {
    type: NgZone
  }], null);
})();
var GigyaRaasGuard = class _GigyaRaasGuard {
  constructor() {
    this.routingService = inject(RoutingService);
    this.cmsService = inject(CmsService);
    this.authGuard = inject(AuthGuard);
    this.notAuthGuard = inject(NotAuthGuard);
  }
  canActivate() {
    return this.getComponentData().pipe(switchMap((componentData) => {
      if (!componentData.length) {
        return of(false);
      }
      const guardResults$ = componentData.map((data) => this.checksToProcess(data));
      return combineLatest(guardResults$).pipe(map((results) => {
        const firstNonTrue = results.find((result) => result !== true);
        return firstNonTrue ?? true;
      }));
    }), catchError(() => of(false)));
  }
  checksToProcess(componentData) {
    if (Object.keys(componentData).length === 0) {
      return of(false);
    }
    if (componentData.showAnonymous === "false") {
      return this.authGuard.canActivate();
    }
    if (componentData.showLoggedIn === "false") {
      return this.notAuthGuard.canActivate();
    }
    return of(true);
  }
  getComponentsByType(pageContext, componentType) {
    return this.cmsService.getPage(pageContext).pipe(switchMap((page) => {
      if (!page) {
        return of([]);
      }
      const componentUids = Object.values(page.slots || {}).flatMap((slot) => slot.components).filter((component) => component?.typeCode === componentType).map((component) => component?.uid);
      return of(componentUids);
    }), catchError(() => of([])));
  }
  getComponentData() {
    return this.routingService.getNextPageContext().pipe(filter(isNotUndefined), take(1), switchMap((pageContext) => this.getComponentsByType(pageContext, "GigyaRaasComponent")), switchMap((componentUids) => {
      if (!componentUids.length) {
        return of([]);
      }
      const componentData$ = componentUids.filter((uid) => Boolean(uid)).map((uid) => this.cmsService.getComponentData(uid).pipe(catchError(() => of({}))));
      return combineLatest(componentData$);
    }));
  }
  static {
    this.ɵfac = function GigyaRaasGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GigyaRaasGuard)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GigyaRaasGuard,
      factory: _GigyaRaasGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GigyaRaasGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GigyaRaasModule = class _GigyaRaasModule {
  static {
    this.ɵfac = function GigyaRaasModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GigyaRaasModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _GigyaRaasModule,
      declarations: [GigyaRaasComponent],
      imports: [CommonModule, I18nModule, ConfigModule],
      exports: [GigyaRaasComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, ConfigModule.withConfig({
        cmsComponents: {
          GigyaRaasComponent: {
            component: GigyaRaasComponent,
            guards: [GigyaRaasGuard]
          }
        },
        layoutSlots: {
          GigyaLoginPageTemplate: {
            slots: ["BodyContent", "BottomContent"]
          }
        }
      })]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GigyaRaasModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, ConfigModule.withConfig({
        cmsComponents: {
          GigyaRaasComponent: {
            component: GigyaRaasComponent,
            guards: [GigyaRaasGuard]
          }
        },
        layoutSlots: {
          GigyaLoginPageTemplate: {
            slots: ["BodyContent", "BottomContent"]
          }
        }
      })],
      declarations: [GigyaRaasComponent],
      exports: [GigyaRaasComponent]
    }]
  }], null, null);
})();
var CdcComponentsModule = class _CdcComponentsModule {
  static {
    this.ɵfac = function CdcComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CdcComponentsModule,
      imports: [CommonModule, GigyaRaasModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, GigyaRaasModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcComponentsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, GigyaRaasModule]
    }]
  }], null, null);
})();

// node_modules/@spartacus/cdc/fesm2022/spartacus-cdc-core.mjs
var CdcUserAuthenticationTokenService = class _CdcUserAuthenticationTokenService {
  constructor(http, authConfigService) {
    this.http = http;
    this.authConfigService = authConfigService;
    this.logger = inject(LoggerService);
  }
  /**
   * Load User token using custom oauth flow
   *
   * @param UID - UID received from CDC on login event
   * @param UIDSignature - UIDSignature received from CDC on login event
   * @param signatureTimestamp - signatureTimestamp received from CDC on login event
   * @param idToken - idToken received from CDC on login event
   * @param baseSite - baseSite received from CDC on login event
   */
  loadTokenUsingCustomFlow(UID, UIDSignature, signatureTimestamp, idToken, baseSite) {
    const url = this.authConfigService.getTokenEndpoint();
    const params = new HttpParams().set("client_id", this.authConfigService.getClientId()).set("client_secret", this.authConfigService.getClientSecret()).set("grant_type", "custom").set("UID", encodeURIComponent(UID)).set("UIDSignature", encodeURIComponent(UIDSignature)).set("signatureTimestamp", encodeURIComponent(signatureTimestamp)).set("id_token", encodeURIComponent(idToken)).set("baseSite", encodeURIComponent(baseSite));
    return this.http.post(url, params).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  static {
    this.ɵfac = function CdcUserAuthenticationTokenService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcUserAuthenticationTokenService)(ɵɵinject(HttpClient), ɵɵinject(AuthConfigService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcUserAuthenticationTokenService,
      factory: _CdcUserAuthenticationTokenService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcUserAuthenticationTokenService, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: AuthConfigService
  }], null);
})();
var CdcAuthModule = class _CdcAuthModule {
  static {
    this.ɵfac = function CdcAuthModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcAuthModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CdcAuthModule,
      imports: [CommonModule, AuthModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [CdcUserAuthenticationTokenService],
      imports: [CommonModule, AuthModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcAuthModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AuthModule],
      providers: [CdcUserAuthenticationTokenService]
    }]
  }], null, null);
})();
var LOAD_CDC_USER_TOKEN = "[Auth] Load CDC User Token";
var LOAD_CDC_USER_TOKEN_FAIL = "[Auth] Load CDC User Token Fail";
var LoadCdcUserTokenFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_CDC_USER_TOKEN_FAIL;
    this.error = payload.error;
  }
};
var LoadCdcUserToken = class {
  constructor(payload) {
    this.payload = payload;
    this.type = LOAD_CDC_USER_TOKEN;
  }
};
var cdcUserToken_action = Object.freeze({
  __proto__: null,
  LOAD_CDC_USER_TOKEN,
  LOAD_CDC_USER_TOKEN_FAIL,
  LoadCdcUserToken,
  LoadCdcUserTokenFail
});
var CdcAuthService = class _CdcAuthService {
  constructor(store, authStorageService, userIdService, globalMessageService, authRedirectService) {
    this.store = store;
    this.authStorageService = authStorageService;
    this.userIdService = userIdService;
    this.globalMessageService = globalMessageService;
    this.authRedirectService = authRedirectService;
  }
  /**
   * Loads a new user token using custom oauth flow
   *
   * @param UID
   * @param UIDSignature
   * @param signatureTimestamp
   * @param idToken
   * @param baseSite
   */
  loginWithCustomCdcFlow(UID, UIDSignature, signatureTimestamp, idToken, baseSite) {
    this.store.dispatch(new LoadCdcUserToken({
      UID,
      UIDSignature,
      signatureTimestamp,
      idToken,
      baseSite
    }));
  }
  /**
   * Utility to differentiate between AuthStorageService and AsmAuthStorageService
   */
  isAsmAuthStorageService(service) {
    return "getTokenTarget" in service;
  }
  /**
   * Transform and store the token received from custom flow to library format and login user.
   *
   * @param token
   */
  loginWithToken(token) {
    let stream$ = of(true);
    if (this.isAsmAuthStorageService(this.authStorageService)) {
      stream$ = combineLatest([this.authStorageService.getToken(), this.authStorageService.getTokenTarget()]).pipe(take(1), map(([currentToken, tokenTarget]) => {
        return !!currentToken?.access_token && tokenTarget === TokenTarget.CSAgent;
      }), tap((isAsmAgentLoggedIn) => {
        if (isAsmAgentLoggedIn) {
          this.globalMessageService.add({
            key: "asm.auth.agentLoggedInError"
          }, GlobalMessageType.MSG_TYPE_ERROR);
        }
      }), map((isAsmAgentLoggedIn) => !isAsmAgentLoggedIn));
    }
    stream$.pipe(take(1)).subscribe((canLogin) => {
      if (canLogin) {
        this.setTokenData(token);
        this.userIdService.setUserId(OCC_USER_ID_CURRENT);
        this.store.dispatch(new authGroup_actions.Login());
        this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
        this.authRedirectService.redirect();
      }
    });
  }
  setTokenData(token) {
    this.authStorageService.setItem("access_token", token.access_token);
    if (token.granted_scopes && Array.isArray(token.granted_scopes)) {
      this.authStorageService.setItem("granted_scopes", JSON.stringify(token.granted_scopes));
    }
    this.authStorageService.setItem("access_token_stored_at", "" + Date.now());
    if (token.expires_in) {
      const expiresInMilliseconds = token.expires_in * 1e3;
      const now = /* @__PURE__ */ new Date();
      const expiresAt = now.getTime() + expiresInMilliseconds;
      this.authStorageService.setItem("expires_at", "" + expiresAt);
    }
    if (token.refresh_token) {
      this.authStorageService.setItem("refresh_token", token.refresh_token);
    }
  }
  static {
    this.ɵfac = function CdcAuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcAuthService)(ɵɵinject(Store), ɵɵinject(AuthStorageService), ɵɵinject(UserIdService), ɵɵinject(GlobalMessageService), ɵɵinject(AuthRedirectService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcAuthService,
      factory: _CdcAuthService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcAuthService, [{
    type: Injectable
  }], () => [{
    type: Store
  }, {
    type: AuthStorageService
  }, {
    type: UserIdService
  }, {
    type: GlobalMessageService
  }, {
    type: AuthRedirectService
  }], null);
})();
var facadeProviders = [CdcAuthService, {
  provide: CdcAuthFacade,
  useExisting: CdcAuthService
}];
var CdcEventBuilder = class _CdcEventBuilder {
  constructor(stateEventService, eventService) {
    this.stateEventService = stateEventService;
    this.eventService = eventService;
    this.register();
  }
  /**
   * Registers CDC events
   */
  register() {
    this.registerLoadUserTokenFail();
  }
  /**
   * Register the load user token fail event.
   */
  registerLoadUserTokenFail() {
    this.stateEventService.register({
      action: LOAD_CDC_USER_TOKEN_FAIL,
      event: CdcLoadUserTokenFailEvent
    });
  }
  static {
    this.ɵfac = function CdcEventBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcEventBuilder)(ɵɵinject(StateEventService), ɵɵinject(EventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcEventBuilder,
      factory: _CdcEventBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcEventBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: StateEventService
  }, {
    type: EventService
  }], null);
})();
var CdcEventModule = class _CdcEventModule {
  constructor(_cdcEventBuilder) {
  }
  static {
    this.ɵfac = function CdcEventModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcEventModule)(ɵɵinject(CdcEventBuilder));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CdcEventModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcEventModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: CdcEventBuilder
  }], null);
})();
var CdcUserAddressesEffects = class _CdcUserAddressesEffects {
  getAddresses() {
    return this.userIdService.takeUserId().pipe(take(1), switchMap((userId) => this.userAddressConnector.getAll(userId)));
  }
  getDefaultAddress(addresses) {
    return addresses.find((address) => address?.defaultAddress === true);
  }
  getCountryName(countries, countryIsocode) {
    return countries.find((country) => country.isocode === countryIsocode)?.name;
  }
  updateDefaultAddressInCDC() {
    return this.getAddresses().pipe(take(1), switchMap((addresses) => {
      const defaultAddress = this.getDefaultAddress(addresses) || {};
      return this.sendAddressToCDC(defaultAddress);
    }));
  }
  sendAddressToCDC(address) {
    const formattedAddress = address.formattedAddress || " ";
    return this.userAddressService.getDeliveryCountries().pipe(take(1), switchMap((countries) => {
      const countryName = this.getCountryName(countries, address.country?.isocode || " ") || " ";
      return this.cdcJsService.updateAddressWithoutScreenSet(formattedAddress, address.postalCode || " ", address.town || " ", countryName);
    }));
  }
  showErrorMessage(error) {
    const errorMessage = error?.errorMessage || " ";
    this.messageService.add(errorMessage, GlobalMessageType.MSG_TYPE_ERROR);
  }
  constructor(actions$, userIdService, userAddressConnector, userAddressService, messageService, cdcJsService) {
    this.actions$ = actions$;
    this.userIdService = userIdService;
    this.userAddressConnector = userAddressConnector;
    this.userAddressService = userAddressService;
    this.messageService = messageService;
    this.cdcJsService = cdcJsService;
    this.addressFieldKeys = ["line1", "line2", "region.name", "town", "postalCode"];
    this.cdcAddUserAddress$ = createEffect(() => this.actions$.pipe(ofType(userGroup_actions.ADD_USER_ADDRESS_SUCCESS), mergeMap(() => this.updateDefaultAddressInCDC()), tap({
      error: (error) => this.showErrorMessage(error)
    })), {
      dispatch: false
    });
    this.cdcUpdateUserAddress$ = createEffect(() => this.actions$.pipe(ofType(userGroup_actions.UPDATE_USER_ADDRESS_SUCCESS), mergeMap(() => this.updateDefaultAddressInCDC()), tap({
      error: (error) => this.showErrorMessage(error)
    })), {
      dispatch: false
    });
    this.cdcDeleteUserAddress$ = createEffect(() => this.actions$.pipe(ofType(userGroup_actions.DELETE_USER_ADDRESS_SUCCESS), mergeMap(() => this.updateDefaultAddressInCDC()), tap({
      error: (error) => this.showErrorMessage(error)
    })), {
      dispatch: false
    });
  }
  static {
    this.ɵfac = function CdcUserAddressesEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcUserAddressesEffects)(ɵɵinject(Actions), ɵɵinject(UserIdService), ɵɵinject(UserAddressConnector), ɵɵinject(UserAddressService), ɵɵinject(GlobalMessageService), ɵɵinject(CdcJsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcUserAddressesEffects,
      factory: _CdcUserAddressesEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcUserAddressesEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: UserIdService
  }, {
    type: UserAddressConnector
  }, {
    type: UserAddressService
  }, {
    type: GlobalMessageService
  }, {
    type: CdcJsService
  }], null);
})();
var CdcUserTokenEffects = class _CdcUserTokenEffects {
  constructor(actions$, userTokenService, globalMessageService, cdcAuthService) {
    this.actions$ = actions$;
    this.userTokenService = userTokenService;
    this.globalMessageService = globalMessageService;
    this.cdcAuthService = cdcAuthService;
    this.logger = inject(LoggerService);
    this.loadCdcUserToken$ = createEffect(() => this.actions$.pipe(ofType(LOAD_CDC_USER_TOKEN), map((action) => action.payload), mergeMap((payload) => this.userTokenService.loadTokenUsingCustomFlow(payload.UID, payload.UIDSignature, payload.signatureTimestamp, payload.idToken, payload.baseSite).pipe(switchMap((token) => {
      this.cdcAuthService.loginWithToken(token);
      return EMPTY;
    }), catchError((error) => {
      this.globalMessageService.add({
        key: "httpHandlers.badGateway"
      }, GlobalMessageType.MSG_TYPE_ERROR);
      return of(new LoadCdcUserTokenFail({
        error: tryNormalizeHttpError(error, this.logger),
        initialActionPayload: payload
      }));
    })))));
  }
  static {
    this.ɵfac = function CdcUserTokenEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcUserTokenEffects)(ɵɵinject(Actions), ɵɵinject(CdcUserAuthenticationTokenService), ɵɵinject(GlobalMessageService), ɵɵinject(CdcAuthService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcUserTokenEffects,
      factory: _CdcUserTokenEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcUserTokenEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: CdcUserAuthenticationTokenService
  }, {
    type: GlobalMessageService
  }, {
    type: CdcAuthService
  }], null);
})();
var effects = [CdcUserTokenEffects, CdcUserAddressesEffects];
var CdcStoreModule = class _CdcStoreModule {
  static {
    this.ɵfac = function CdcStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CdcStoreModule,
      imports: [CommonModule, CdcAuthModule, EffectsFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [CdcAuthService],
      imports: [CommonModule, CdcAuthModule, EffectsModule.forFeature(effects)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcStoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CdcAuthModule, EffectsModule.forFeature(effects)],
      providers: [CdcAuthService]
    }]
  }], null, null);
})();
var CdcCoreModule = class _CdcCoreModule {
  static {
    this.ɵfac = function CdcCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CdcCoreModule,
      imports: [CdcAuthModule, CdcEventModule, CdcStoreModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [...facadeProviders],
      imports: [CdcAuthModule, CdcEventModule, CdcStoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcCoreModule, [{
    type: NgModule,
    args: [{
      imports: [CdcAuthModule, CdcEventModule, CdcStoreModule],
      providers: [...facadeProviders]
    }]
  }], null, null);
})();

// node_modules/@spartacus/cdc/fesm2022/spartacus-cdc.mjs
var CdcModule = class _CdcModule {
  static {
    this.ɵfac = function CdcModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CdcModule,
      imports: [CdcComponentsModule, CdcCoreModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CdcComponentsModule, CdcCoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcModule, [{
    type: NgModule,
    args: [{
      imports: [CdcComponentsModule, CdcCoreModule]
    }]
  }], null, null);
})();
export {
  CdcModule
};
//# sourceMappingURL=@spartacus_cdc.js.map
