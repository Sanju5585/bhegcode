import {
  UserAccountFacade,
  VERIFICATION_TOKEN_DIALOG_ACTION,
  VerificationTokenFacade
} from "./chunk-LZQV6UAH.js";
import {
  BtnLikeLinkModule,
  CustomFormValidators,
  DIALOG_TYPE,
  DomChangeDirective,
  DomChangeModule,
  FocusDirective,
  FormErrorsComponent,
  FormErrorsModule,
  FormRequiredAsterisksComponent,
  FormRequiredLegendComponent,
  IS_GUEST_USER_CHECKOUT_KEY,
  IconComponent,
  IconModule,
  KeyboardFocusModule,
  LAUNCH_CALLER,
  LaunchDialogService,
  PageSlotComponent,
  PageSlotModule,
  PasswordVisibilityToggleDirective,
  PasswordVisibilityToggleModule,
  SpinnerComponent,
  SpinnerModule
} from "./chunk-D5RDRHN5.js";
import {
  AuthConfigService,
  AuthGuard,
  AuthService,
  CsrfStateService,
  CustomLoginGuard,
  FeatureConfigService,
  FeatureDirective,
  FeaturesConfigModule,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  NotAuthGuard,
  OAUTH_REDIRECT_FLOW_KEY,
  RoutingService,
  SemanticPathService,
  TranslatePipe,
  TranslationService,
  UrlModule,
  UrlPipe,
  WindowRef,
  provideDefaultConfig,
  useFeatureStyles
} from "./chunk-VIVIQI6G.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-EBCNDD52.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  ɵNgNoValidate
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-S7KROBXW.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Injectable,
  NgModule,
  Optional,
  ViewChild,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-7OJSO65L.js";
import {
  BehaviorSubject,
  from,
  of,
  tap,
  withLatestFrom
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";

// node_modules/@spartacus/user/fesm2022/spartacus-user-account-components.mjs
var _c0 = ["loginForm"];
var _c1 = (a0) => ({
  label: a0
});
var _c2 = () => ({
  cxRoute: "forgotPassword"
});
function LoginFormComponent_cx_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-spinner", 11);
  }
}
function LoginFormComponent_ng_container_25_input_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 13);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("name", ctx_r1.csrf.parameterName);
  }
}
function LoginFormComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, LoginFormComponent_ng_container_25_input_1_Template, 1, 1, "input", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.csrf);
  }
}
var _c3 = () => ({
  cxRoute: "login"
});
function LoginComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3);
    ɵɵtext(2);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
    ɵɵelementStart(4, "cx-page-slot", 4);
    ɵɵlistener("cxDomChange", function LoginComponent_ng_container_0_ng_container_1_Template_cx_page_slot_cxDomChange_4_listener($event) {
      const greeting_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onRootNavBtnAdded($event, greeting_r2));
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, ctx_r2.greeting$), " ");
  }
}
function LoginComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, LoginComponent_ng_container_0_ng_container_1_Template, 5, 3, "ng-container", 2);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r2.greeting$));
  }
}
function LoginComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "a", 5);
    ɵɵpipe(2, "cxUrl");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpipeBind1(2, 2, ɵɵpureFunction0(6, _c3)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 4, "miniLogin.signInRegister"));
  }
}
function LoginComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, LoginComponent_ng_template_2_ng_container_0_Template, 5, 7, "ng-container", 2);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r2.usingASMClient());
  }
}
var _c4 = () => ({
  cxRoute: "logout"
});
function MyAccountV2UserComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "a", 3);
    ɵɵpipe(4, "cxUrl");
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const user_r1 = ctx.ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate2("", user_r1.title, "", user_r1.name, "");
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpipeBind1(4, 4, ɵɵpureFunction0(8, _c4)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(6, 6, "myAccountV2User.signOut"), " ");
  }
}
function OneTimePasswordLoginFormComponent_cx_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-spinner", 9);
  }
}
var _c5 = ["noReceiveCodeLink"];
var _c6 = ["resendLink"];
var _c7 = ["verificationTokenForm"];
var _c8 = (a0) => ({
  seconds: a0
});
var _c9 = (a0) => ({
  "disabled-link": a0
});
var _c10 = (a0) => ({
  waitTime: a0
});
function VerificationTokenFormComponent_cx_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-spinner", 16);
  }
}
function VerificationTokenFormComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, "register.rateLimitForRegistrationMessage", ɵɵpureFunction1(4, _c8, ctx_r1.waitTimeForRateLimit)), " ");
  }
}
function VerificationTokenFormComponent_ng_container_18_input_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 19);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("name", ctx_r1.csrf.parameterName);
  }
}
function VerificationTokenFormComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, VerificationTokenFormComponent_ng_container_18_input_1_Template, 1, 1, "input", 18);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.csrf);
  }
}
function VerificationTokenFormComponent_div_19_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, "verificationTokenForm.sendRateLime", ɵɵpureFunction1(4, _c10, ctx_r1.waitTime)), " ");
  }
}
function VerificationTokenFormComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 20)(1, "div", 21)(2, "span", 22)(3, "a", 23, 1);
    ɵɵlistener("keydown.enter", function VerificationTokenFormComponent_div_19_Template_a_keydown_enter_3_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resendOTP());
    })("keydown.space", function VerificationTokenFormComponent_div_19_Template_a_keydown_space_3_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resendOTP());
    })("click", function VerificationTokenFormComponent_div_19_Template_a_click_3_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resendOTP());
    });
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(7, VerificationTokenFormComponent_div_19_ng_container_7_Template, 3, 6, "ng-container", 24);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 25)(9, "a", 26, 2);
    ɵɵlistener("keydown", function VerificationTokenFormComponent_div_19_Template_a_keydown_9_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOpenInfoDailogKeyDown($event));
    })("click", function VerificationTokenFormComponent_div_19_Template_a_click_9_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.openInfoDailog());
    });
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngClass", ɵɵpureFunction1(8, _c9, ctx_r1.isResendDisabled));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 4, "verificationTokenForm.resend"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.isResendDisabled);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 6, "verificationTokenForm.noReceiveCode"), " ");
  }
}
var LoginAsGuestGuard = class _LoginAsGuestGuard {
  constructor() {
    this.featureConfigService = inject(FeatureConfigService);
    this.windowRef = inject(WindowRef);
    this.router = inject(Router);
    this.semanticPathService = inject(SemanticPathService);
  }
  getPath() {
    return this.semanticPathService.get("loginForm");
  }
  canActivate() {
    if (this.featureConfigService.isEnabled("authorizationCodeFlowByDefault") && this.windowRef.localStorage?.getItem(IS_GUEST_USER_CHECKOUT_KEY) === "true") {
      this.windowRef.localStorage.removeItem(IS_GUEST_USER_CHECKOUT_KEY);
      return of(this.router.createUrlTree([this.getPath()], {
        queryParams: {
          forced: true
        }
      }));
    }
    return of(true);
  }
  static {
    this.ɵfac = function LoginAsGuestGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginAsGuestGuard)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _LoginAsGuestGuard,
      factory: _LoginAsGuestGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginAsGuestGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var LoginFormComponentService = class _LoginFormComponentService {
  get csrf() {
    return this.csrfStateService.get();
  }
  constructor(auth, globalMessage, winRef) {
    this.auth = auth;
    this.globalMessage = globalMessage;
    this.winRef = winRef;
    this.authConfigService = inject(AuthConfigService);
    this.featureConfigService = inject(FeatureConfigService);
    this.csrfStateService = inject(CsrfStateService);
    this.router = inject(Router);
    this.activatedRoute = inject(ActivatedRoute);
    this.customFormValidErrors = ["bad_credentials", "account_disabled"];
    this.busy$ = new BehaviorSubject(false);
    this.isUpdating$ = this.busy$.pipe(tap((state) => {
      const userId = this.winRef.nativeWindow?.history?.state?.["newUid"];
      if (userId) {
        this.form.patchValue({
          userId
        });
      }
      state === true ? this.form.disable() : this.form.enable();
    }));
    this.form = new UntypedFormGroup({
      userId: new UntypedFormControl("", [Validators.required, CustomFormValidators.emailValidator]),
      password: new UntypedFormControl("", Validators.required)
    });
    if (this.featureConfigService.isEnabled("authorizationCodeFlowByDefault")) {
      this.initCustomLogin();
    }
  }
  login(nativeForm) {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.featureConfigService.isEnabled("authorizationCodeFlowByDefault") && nativeForm) {
      this.winRef.localStorage?.setItem(OAUTH_REDIRECT_FLOW_KEY, "true");
      nativeForm.submit();
      this.busy$.next(true);
    } else {
      this.busy$.next(true);
      from(this.auth.loginWithCredentials(
        // TODO: consider dropping toLowerCase as this should not be part of the UI,
        // as it's too opinionated and doesn't work with other AUTH services
        this.form.value.userId.toLowerCase(),
        this.form.value.password
      )).pipe(withLatestFrom(this.auth.isUserLoggedIn()), tap(([_, isLoggedIn]) => this.onSuccess(isLoggedIn))).subscribe();
    }
  }
  handleCustomLoginError() {
    if (!this.featureConfigService.isEnabled("authorizationCodeFlowByDefault")) {
      return;
    }
    const error = this.activatedRoute.snapshot.queryParams["error"];
    if (error) {
      this.globalMessage.add({
        key: this.customFormValidErrors.includes(error) ? `customLoginPage.badRequest.${error}` : "customLoginPage.badRequest.unknown_error"
      }, GlobalMessageType.MSG_TYPE_ERROR);
      this.router.navigate([], {
        queryParams: {
          error: null
        }
      });
    }
  }
  onSuccess(isLoggedIn) {
    if (isLoggedIn) {
      this.globalMessage.remove(GlobalMessageType.MSG_TYPE_ERROR);
      this.form.reset();
    }
    this.busy$.next(false);
  }
  initCustomLogin() {
    this.method = "POST";
    this.action = this.authConfigService?.getCustomLoginFormEndpoint();
    this.form.addControl("csrf", new FormControl("", Validators.required));
    this.form.get("csrf")?.setValue(this.csrf?.token);
  }
  static {
    this.ɵfac = function LoginFormComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginFormComponentService)(ɵɵinject(AuthService), ɵɵinject(GlobalMessageService), ɵɵinject(WindowRef));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _LoginFormComponentService,
      factory: _LoginFormComponentService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginFormComponentService, [{
    type: Injectable
  }], () => [{
    type: AuthService
  }, {
    type: GlobalMessageService
  }, {
    type: WindowRef
  }], null);
})();
var LoginFormComponent = class _LoginFormComponent {
  constructor(service) {
    this.service = service;
    this.style = true;
    this.form = this.service.form;
    this.isUpdating$ = this.service.isUpdating$;
    this.csrf = this.service.csrf;
    this.action = this.service.action;
    this.method = this.service.method;
    useFeatureStyles("a11yPasswordVisibliltyBtnValueOverflow");
    this.service.handleCustomLoginError();
  }
  onSubmit() {
    this.service.login(this.loginForm?.nativeElement);
  }
  static {
    this.ɵfac = function LoginFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginFormComponent)(ɵɵdirectiveInject(LoginFormComponentService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _LoginFormComponent,
      selectors: [["cx-login-form"]],
      viewQuery: function LoginFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loginForm = _t.first);
        }
      },
      hostAttrs: ["ngSkipHydration", "true"],
      hostVars: 2,
      hostBindings: function LoginFormComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("user-form", ctx.style);
        }
      },
      standalone: false,
      decls: 33,
      vars: 52,
      consts: [["loginForm", ""], ["class", "overlay", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "label-content"], ["required", "true", "type", "email", "formControlName", "userId", "name", "username", 1, "form-control", 3, "placeholder"], ["id", "userIdError", 3, "translationParams", "control"], ["required", "true", "type", "password", "formControlName", "password", "name", "password", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], ["id", "passwordError", 3, "translationParams", "control"], [4, "cxFeature"], [1, "btn-link", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-block", "btn-primary", 3, "disabled"], [1, "overlay"], ["formControlName", "csrf", "type", "hidden", 3, "name", 4, "ngIf"], ["formControlName", "csrf", "type", "hidden", 3, "name"]],
      template: function LoginFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵtemplate(0, LoginFormComponent_cx_spinner_0_Template, 1, 0, "cx-spinner", 1);
          ɵɵpipe(1, "async");
          ɵɵelementStart(2, "form", 2, 0);
          ɵɵlistener("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_2_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onSubmit());
          });
          ɵɵelement(4, "cx-form-required-legend");
          ɵɵelementStart(5, "label")(6, "span", 3);
          ɵɵtext(7);
          ɵɵpipe(8, "cxTranslate");
          ɵɵelement(9, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(10, "input", 4);
          ɵɵpipe(11, "cxTranslate");
          ɵɵpipe(12, "cxTranslate");
          ɵɵelement(13, "cx-form-errors", 5);
          ɵɵpipe(14, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(15, "label")(16, "span", 3);
          ɵɵtext(17);
          ɵɵpipe(18, "cxTranslate");
          ɵɵelement(19, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(20, "input", 6);
          ɵɵpipe(21, "cxTranslate");
          ɵɵpipe(22, "cxTranslate");
          ɵɵelement(23, "cx-form-errors", 7);
          ɵɵpipe(24, "cxTranslate");
          ɵɵelementEnd();
          ɵɵtemplate(25, LoginFormComponent_ng_container_25_Template, 2, 1, "ng-container", 8);
          ɵɵelementStart(26, "a", 9);
          ɵɵpipe(27, "cxUrl");
          ɵɵtext(28);
          ɵɵpipe(29, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(30, "button", 10);
          ɵɵtext(31);
          ɵɵpipe(32, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          let tmp_8_0;
          let tmp_15_0;
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 23, ctx.isUpdating$));
          ɵɵadvance(2);
          ɵɵproperty("formGroup", ctx.form);
          ɵɵattribute("method", ctx.method)("action", ctx.action, ɵɵsanitizeUrl);
          ɵɵadvance(5);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 25, "loginForm.emailAddress.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(11, 27, "loginForm.emailAddress.placeholder"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(12, 29, "loginForm.emailAddress.label"))("aria-invalid", ((tmp_8_0 = ctx.form.get("userId")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = ctx.form.get("userId")) == null ? null : tmp_8_0.invalid))("aria-errormessage", "userIdError");
          ɵɵadvance(3);
          ɵɵproperty("translationParams", ɵɵpureFunction1(47, _c1, ɵɵpipeBind1(14, 31, "loginForm.emailAddress.label")))("control", ctx.form.get("userId"));
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 33, "loginForm.password.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(21, 35, "loginForm.password.placeholder"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(22, 37, "loginForm.password.placeholder"))("aria-invalid", ((tmp_15_0 = ctx.form.get("password")) == null ? null : tmp_15_0.touched) && ((tmp_15_0 = ctx.form.get("password")) == null ? null : tmp_15_0.invalid))("aria-errormessage", "passwordError");
          ɵɵadvance(3);
          ɵɵproperty("translationParams", ɵɵpureFunction1(49, _c1, ɵɵpipeBind1(24, 39, "loginForm.password.label")))("control", ctx.form.get("password"));
          ɵɵadvance(2);
          ɵɵproperty("cxFeature", "authorizationCodeFlowByDefault");
          ɵɵadvance();
          ɵɵproperty("routerLink", ɵɵpipeBind1(27, 41, ɵɵpureFunction0(51, _c2)));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(29, 43, "loginForm.forgotPassword"), " ");
          ɵɵadvance(2);
          ɵɵproperty("disabled", ctx.form.disabled);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(32, 45, "loginForm.signIn"), " ");
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, RouterLink, FormErrorsComponent, SpinnerComponent, PasswordVisibilityToggleDirective, FeatureDirective, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-login-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      host: {
        ngSkipHydration: "true"
      },
      template: `<cx-spinner class="overlay" *ngIf="isUpdating$ | async"></cx-spinner>

<form
  (ngSubmit)="onSubmit()"
  [formGroup]="form"
  [attr.method]="method"
  [attr.action]="action"
  #loginForm
>
  <!-- TODO: (CXSPA-5953) Remove feature flags next major -->
  <cx-form-required-legend />
  <label>
    <span class="label-content">
      {{ 'loginForm.emailAddress.label' | cxTranslate }}
      <cx-form-required-asterisks />
    </span>
    <input
      required="true"
      type="email"
      class="form-control"
      placeholder="{{ 'loginForm.emailAddress.placeholder' | cxTranslate }}"
      [attr.aria-label]="'loginForm.emailAddress.label' | cxTranslate"
      formControlName="userId"
      name="username"
      [attr.aria-invalid]="
        form.get('userId')?.touched && form.get('userId')?.invalid
      "
      [attr.aria-errormessage]="'userIdError'"
    />

    <cx-form-errors
      id="userIdError"
      [translationParams]="{
        label: 'loginForm.emailAddress.label' | cxTranslate,
      }"
      [control]="form.get('userId')"
    ></cx-form-errors>
  </label>

  <label>
    <span class="label-content">
      {{ 'loginForm.password.label' | cxTranslate }}
      <cx-form-required-asterisks />
    </span>
    <input
      required="true"
      type="password"
      class="form-control"
      placeholder="{{ 'loginForm.password.placeholder' | cxTranslate }}"
      formControlName="password"
      name="password"
      [attr.aria-label]="'loginForm.password.placeholder' | cxTranslate"
      [attr.aria-invalid]="
        form.get('password')?.touched && form.get('password')?.invalid
      "
      [attr.aria-errormessage]="'passwordError'"
      cxPasswordVisibilitySwitch
    />

    <cx-form-errors
      id="passwordError"
      [translationParams]="{
        label: 'loginForm.password.label' | cxTranslate,
      }"
      [control]="form.get('password')"
    ></cx-form-errors>
  </label>

  <ng-container *cxFeature="'authorizationCodeFlowByDefault'">
    <input
      *ngIf="csrf"
      formControlName="csrf"
      type="hidden"
      [name]="csrf.parameterName"
    />
  </ng-container>

  <a [routerLink]="{ cxRoute: 'forgotPassword' } | cxUrl" class="btn-link">
    {{ 'loginForm.forgotPassword' | cxTranslate }}
  </a>

  <button
    type="submit"
    class="btn btn-block btn-primary"
    [disabled]="form.disabled"
  >
    {{ 'loginForm.signIn' | cxTranslate }}
  </button>
</form>
`
    }]
  }], () => [{
    type: LoginFormComponentService
  }], {
    loginForm: [{
      type: ViewChild,
      args: ["loginForm"]
    }],
    style: [{
      type: HostBinding,
      args: ["class.user-form"]
    }]
  });
})();
var LoginFormModule = class _LoginFormModule {
  static {
    this.ɵfac = function LoginFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LoginFormModule,
      declarations: [LoginFormComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, FormErrorsModule, SpinnerModule, PasswordVisibilityToggleModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ReturningCustomerLoginComponent: {
            component: LoginFormComponent,
            guards: [NotAuthGuard, CustomLoginGuard],
            providers: [{
              provide: LoginFormComponentService,
              useClass: LoginFormComponentService,
              deps: [AuthService, GlobalMessageService, WindowRef]
            }]
          }
        }
      })],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, FormErrorsModule, SpinnerModule, PasswordVisibilityToggleModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, FormErrorsModule, SpinnerModule, PasswordVisibilityToggleModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ReturningCustomerLoginComponent: {
            component: LoginFormComponent,
            guards: [NotAuthGuard, CustomLoginGuard],
            providers: [{
              provide: LoginFormComponentService,
              useClass: LoginFormComponentService,
              deps: [AuthService, GlobalMessageService, WindowRef]
            }]
          }
        }
      })],
      declarations: [LoginFormComponent]
    }]
  }], null, null);
})();
var LoginRegisterComponent = class _LoginRegisterComponent {
  constructor(activatedRoute) {
    this.activatedRoute = activatedRoute;
    this.loginAsGuest = false;
    this.routingService = inject(RoutingService, {
      optional: true
    });
  }
  ngOnInit() {
    this.loginAsGuest = this.activatedRoute.snapshot.queryParams["forced"];
  }
  navigateTo(cxRoute) {
    this.routingService?.go({
      cxRoute
    });
  }
  static {
    this.ɵfac = function LoginRegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginRegisterComponent)(ɵɵdirectiveInject(ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _LoginRegisterComponent,
      selectors: [["cx-login-register"]],
      standalone: false,
      decls: 7,
      vars: 7,
      consts: [[1, "register"], [1, "cx-section-title"], [1, "btn", "btn-block", "btn-secondary", 3, "click", "ngClass"]],
      template: function LoginRegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "p", 1);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(4, "button", 2);
          ɵɵlistener("click", function LoginRegisterComponent_Template_button_click_4_listener() {
            return ctx.navigateTo(ctx.loginAsGuest ? "checkoutLogin" : "register");
          });
          ɵɵtext(5);
          ɵɵpipe(6, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "loginForm.dontHaveAccount"), " ");
          ɵɵadvance(2);
          ɵɵproperty("ngClass", ctx.loginAsGuest ? "btn-guest" : "btn-register");
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 5, ctx.loginAsGuest ? "loginForm.guestCheckout" : "loginForm.register"), " ");
        }
      },
      dependencies: [NgClass, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginRegisterComponent, [{
    type: Component,
    args: [{
      selector: "cx-login-register",
      standalone: false,
      template: `<div class="register">
  <p class="cx-section-title">
    {{ 'loginForm.dontHaveAccount' | cxTranslate }}
  </p>

  <button
    (click)="navigateTo(loginAsGuest ? 'checkoutLogin' : 'register')"
    class="btn btn-block btn-secondary"
    [ngClass]="loginAsGuest ? 'btn-guest' : 'btn-register'"
  >
    {{
      (loginAsGuest ? 'loginForm.guestCheckout' : 'loginForm.register')
        | cxTranslate
    }}
  </button>
</div>
`
    }]
  }], () => [{
    type: ActivatedRoute
  }], {
    routingService: [{
      type: Optional
    }]
  });
})();
var LoginRegisterModule = class _LoginRegisterModule {
  static {
    this.ɵfac = function LoginRegisterModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginRegisterModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LoginRegisterModule,
      declarations: [LoginRegisterComponent],
      imports: [CommonModule, RouterModule, UrlModule, PageSlotModule, I18nModule, BtnLikeLinkModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ReturningCustomerRegisterComponent: {
            component: LoginRegisterComponent,
            guards: [NotAuthGuard, LoginAsGuestGuard]
          }
        }
      })],
      imports: [CommonModule, RouterModule, UrlModule, PageSlotModule, I18nModule, BtnLikeLinkModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginRegisterModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, PageSlotModule, I18nModule, BtnLikeLinkModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ReturningCustomerRegisterComponent: {
            component: LoginRegisterComponent,
            guards: [NotAuthGuard, LoginAsGuestGuard]
          }
        }
      })],
      declarations: [LoginRegisterComponent]
    }]
  }], null, null);
})();
var LoginComponent = class _LoginComponent {
  constructor(auth, userAccount, translation) {
    this.auth = auth;
    this.userAccount = userAccount;
    this.translation = translation;
  }
  ngOnInit() {
    this.user$ = this.auth.isUserLoggedIn().pipe(switchMap((isUserLoggedIn) => {
      if (isUserLoggedIn) {
        return this.userAccount.get();
      } else {
        return of(void 0);
      }
    }));
    this.greeting$ = this.user$.pipe(switchMap((user) => this.translation.translate(`miniLogin.userGreeting`, {
      name: user?.name
    })));
  }
  onRootNavBtnAdded($event, greeting) {
    $event.target.setAttribute("aria-label", greeting);
  }
  usingASMClient() {
    return this.auth.usingASMClient();
  }
  static {
    this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(ɵɵdirectiveInject(AuthService), ɵɵdirectiveInject(UserAccountFacade), ɵɵdirectiveInject(TranslationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _LoginComponent,
      selectors: [["cx-login"]],
      standalone: false,
      decls: 4,
      vars: 4,
      consts: [["login", ""], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [1, "cx-login-greet"], ["cxDomChangeTargetSelector", "nav ul li:first-child button", "id", "account-nav", "position", "HeaderLinks", 3, "cxDomChange"], ["role", "link", 3, "routerLink"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, LoginComponent_ng_container_0_Template, 3, 3, "ng-container", 1);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, LoginComponent_ng_template_2_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const login_r4 = ɵɵreference(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.user$))("ngIfElse", login_r4);
        }
      },
      dependencies: [NgIf, RouterLink, PageSlotComponent, DomChangeDirective, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{
      selector: "cx-login",
      standalone: false,
      template: `<ng-container *ngIf="user$ | async as user; else login">
  <ng-container *ngIf="greeting$ | async as greeting">
    <div class="cx-login-greet">
      {{ greeting$ | async }}
    </div>
    <cx-page-slot
      (cxDomChange)="onRootNavBtnAdded($event, greeting)"
      cxDomChangeTargetSelector="nav ul li:first-child button"
      id="account-nav"
      position="HeaderLinks"
    ></cx-page-slot>
  </ng-container>
</ng-container>

<ng-template #login>
  <ng-container *ngIf="!usingASMClient()">
    <a role="link" [routerLink]="{ cxRoute: 'login' } | cxUrl">{{
      'miniLogin.signInRegister' | cxTranslate
    }}</a>
  </ng-container>
</ng-template>
`
    }]
  }], () => [{
    type: AuthService
  }, {
    type: UserAccountFacade
  }, {
    type: TranslationService
  }], null);
})();
var LoginModule = class _LoginModule {
  static {
    this.ɵfac = function LoginModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LoginModule,
      declarations: [LoginComponent],
      imports: [CommonModule, RouterModule, UrlModule, PageSlotModule, I18nModule, DomChangeModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          LoginComponent: {
            component: LoginComponent
          }
        }
      })],
      imports: [CommonModule, RouterModule, UrlModule, PageSlotModule, I18nModule, DomChangeModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, PageSlotModule, I18nModule, DomChangeModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          LoginComponent: {
            component: LoginComponent
          }
        }
      })],
      declarations: [LoginComponent]
    }]
  }], null, null);
})();
var MyAccountV2UserComponent = class _MyAccountV2UserComponent extends LoginComponent {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵMyAccountV2UserComponent_BaseFactory;
      return function MyAccountV2UserComponent_Factory(__ngFactoryType__) {
        return (ɵMyAccountV2UserComponent_BaseFactory || (ɵMyAccountV2UserComponent_BaseFactory = ɵɵgetInheritedFactory(_MyAccountV2UserComponent)))(__ngFactoryType__ || _MyAccountV2UserComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MyAccountV2UserComponent,
      selectors: [["cx-my-account-v2-user"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 3,
      vars: 3,
      consts: [[1, "cx-my-account-v2-user"], [4, "ngIf"], [1, "cx-name"], [1, "cx-sign-out", 3, "routerLink"]],
      template: function MyAccountV2UserComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, MyAccountV2UserComponent_ng_container_1_Template, 7, 9, "ng-container", 1);
          ɵɵpipe(2, "async");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx.user$));
        }
      },
      dependencies: [NgIf, RouterLink, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2UserComponent, [{
    type: Component,
    args: [{
      selector: "cx-my-account-v2-user",
      standalone: false,
      template: `<div class="cx-my-account-v2-user">
  <ng-container *ngIf="user$ | async as user">
    <div class="cx-name">{{ user.title }}{{ user.name }}</div>
    <a
      class="cx-sign-out"
      [routerLink]="
        {
          cxRoute: 'logout',
        } | cxUrl
      "
      >{{ 'myAccountV2User.signOut' | cxTranslate }}
    </a>
  </ng-container>
</div>
`
    }]
  }], null, null);
})();
var MyAccountV2UserModule = class _MyAccountV2UserModule {
  static {
    this.ɵfac = function MyAccountV2UserModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAccountV2UserModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _MyAccountV2UserModule,
      declarations: [MyAccountV2UserComponent],
      imports: [CommonModule, RouterModule, UrlModule, I18nModule],
      exports: [MyAccountV2UserComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          MyAccountViewUserComponent: {
            component: MyAccountV2UserComponent,
            guards: [AuthGuard]
          }
        }
      })],
      imports: [CommonModule, RouterModule, UrlModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2UserModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig({
        cmsComponents: {
          MyAccountViewUserComponent: {
            component: MyAccountV2UserComponent,
            guards: [AuthGuard]
          }
        }
      })],
      declarations: [MyAccountV2UserComponent],
      exports: [MyAccountV2UserComponent],
      imports: [CommonModule, RouterModule, UrlModule, I18nModule]
    }]
  }], null, null);
})();
var ONE_TIME_PASSWORD_LOGIN_PURPOSE = "LOGIN";
var OneTimePasswordLoginFormComponent = class _OneTimePasswordLoginFormComponent {
  constructor() {
    this.routingService = inject(RoutingService);
    this.verificationTokenFacade = inject(VerificationTokenFacade);
    this.winRef = inject(WindowRef);
    this.busy$ = new BehaviorSubject(false);
    this.isUpdating$ = this.busy$.pipe(tap((state) => {
      const userId = this.winRef.nativeWindow?.history?.state?.["newUid"];
      if (userId) {
        this.form.patchValue({
          userId
        });
      }
      state === true ? this.form.disable() : this.form.enable();
    }));
    this.form = new UntypedFormGroup({
      userId: new UntypedFormControl("", [Validators.required, CustomFormValidators.emailValidator]),
      password: new UntypedFormControl("", Validators.required)
    });
    this.style = true;
    useFeatureStyles("a11yPasswordVisibliltyBtnValueOverflow");
  }
  onSubmit() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.busy$.next(true);
    const verificationTokenCreation = this.collectDataFromLoginForm();
    this.verificationTokenFacade.createVerificationToken(verificationTokenCreation).subscribe({
      next: (result) => this.goToVerificationTokenForm(result, verificationTokenCreation),
      error: (error) => {
        this.routingService.go({
          cxRoute: "verifyToken"
        }, {
          state: {
            loginId: verificationTokenCreation.loginId,
            password: verificationTokenCreation.password,
            errorStatus: error.status
          }
        });
        this.busy$.next(false);
      },
      complete: () => this.onCreateVerificationTokenComplete()
    });
  }
  goToVerificationTokenForm(verificationToken, verificationTokenCreation) {
    this.routingService.go({
      cxRoute: "verifyToken"
    }, {
      state: {
        loginId: verificationTokenCreation.loginId,
        password: verificationTokenCreation.password,
        tokenId: verificationToken.tokenId,
        expiresIn: verificationToken.expiresIn
      }
    });
  }
  onCreateVerificationTokenComplete() {
    this.form.reset();
    this.busy$.next(false);
  }
  collectDataFromLoginForm() {
    return {
      // TODO: consider dropping toLowerCase as this should not be part of the UI,
      // as it's too opinionated and doesn't work with other AUTH services
      loginId: this.form.value.userId.toLowerCase(),
      password: this.form.value.password,
      purpose: ONE_TIME_PASSWORD_LOGIN_PURPOSE
    };
  }
  static {
    this.ɵfac = function OneTimePasswordLoginFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OneTimePasswordLoginFormComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OneTimePasswordLoginFormComponent,
      selectors: [["cx-otp-login-form"]],
      hostAttrs: ["ngSkipHydration", "true"],
      hostVars: 2,
      hostBindings: function OneTimePasswordLoginFormComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("user-form", ctx.style);
        }
      },
      standalone: false,
      decls: 28,
      vars: 36,
      consts: [["class", "overlay", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "label-content"], ["required", "true", "type", "email", "formControlName", "userId", 1, "form-control", 3, "placeholder"], ["id", "userIdError", 3, "control"], ["required", "true", "type", "password", "formControlName", "password", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], ["id", "passwordError", 3, "control"], [1, "btn-link", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-block", "btn-primary", 3, "disabled"], [1, "overlay"]],
      template: function OneTimePasswordLoginFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OneTimePasswordLoginFormComponent_cx_spinner_0_Template, 1, 0, "cx-spinner", 0);
          ɵɵpipe(1, "async");
          ɵɵelementStart(2, "form", 1);
          ɵɵlistener("ngSubmit", function OneTimePasswordLoginFormComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });
          ɵɵelement(3, "cx-form-required-legend");
          ɵɵelementStart(4, "label")(5, "span", 2);
          ɵɵtext(6);
          ɵɵpipe(7, "cxTranslate");
          ɵɵelement(8, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(9, "input", 3);
          ɵɵpipe(10, "cxTranslate");
          ɵɵelement(11, "cx-form-errors", 4);
          ɵɵelementEnd();
          ɵɵelementStart(12, "label")(13, "span", 2);
          ɵɵtext(14);
          ɵɵpipe(15, "cxTranslate");
          ɵɵelement(16, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(17, "input", 5);
          ɵɵpipe(18, "cxTranslate");
          ɵɵpipe(19, "cxTranslate");
          ɵɵelement(20, "cx-form-errors", 6);
          ɵɵelementEnd();
          ɵɵelementStart(21, "a", 7);
          ɵɵpipe(22, "cxUrl");
          ɵɵtext(23);
          ɵɵpipe(24, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(25, "button", 8);
          ɵɵtext(26);
          ɵɵpipe(27, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          let tmp_4_0;
          let tmp_10_0;
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 17, ctx.isUpdating$));
          ɵɵadvance(2);
          ɵɵproperty("formGroup", ctx.form);
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 19, "loginForm.emailAddress.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(10, 21, "loginForm.emailAddress.placeholder"));
          ɵɵattribute("aria-invalid", ((tmp_4_0 = ctx.form.get("userId")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.form.get("userId")) == null ? null : tmp_4_0.invalid))("aria-errormessage", "userIdError");
          ɵɵadvance(2);
          ɵɵproperty("control", ctx.form.get("userId"));
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 23, "loginForm.password.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(18, 25, "loginForm.password.placeholder"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(19, 27, "loginForm.password.placeholder"))("aria-invalid", ((tmp_10_0 = ctx.form.get("password")) == null ? null : tmp_10_0.touched) && ((tmp_10_0 = ctx.form.get("password")) == null ? null : tmp_10_0.invalid))("aria-errormessage", "passwordError");
          ɵɵadvance(3);
          ɵɵproperty("control", ctx.form.get("password"));
          ɵɵadvance();
          ɵɵproperty("routerLink", ɵɵpipeBind1(22, 29, ɵɵpureFunction0(35, _c2)));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(24, 31, "loginForm.forgotPassword"), " ");
          ɵɵadvance(2);
          ɵɵproperty("disabled", ctx.form.disabled);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(27, 33, "loginForm.signIn"), " ");
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, RouterLink, FormErrorsComponent, SpinnerComponent, PasswordVisibilityToggleDirective, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OneTimePasswordLoginFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-otp-login-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      host: {
        ngSkipHydration: "true"
      },
      template: `<cx-spinner class="overlay" *ngIf="isUpdating$ | async"></cx-spinner>

<form (ngSubmit)="onSubmit()" [formGroup]="form">
  <!-- TODO: (CXSPA-5953) Remove feature flags next major -->
  <cx-form-required-legend />
  <label>
    <span class="label-content">
      {{ 'loginForm.emailAddress.label' | cxTranslate }}
      <cx-form-required-asterisks />
    </span>
    <input
      required="true"
      type="email"
      class="form-control"
      formControlName="userId"
      placeholder="{{ 'loginForm.emailAddress.placeholder' | cxTranslate }}"
      [attr.aria-invalid]="
        form.get('userId')?.touched && form.get('userId')?.invalid
      "
      [attr.aria-errormessage]="'userIdError'"
    />
    <cx-form-errors
      id="userIdError"
      [control]="form.get('userId')"
    ></cx-form-errors>
  </label>

  <label>
    <span class="label-content">
      {{ 'loginForm.password.label' | cxTranslate }}
      <cx-form-required-asterisks />
    </span>
    <input
      required="true"
      type="password"
      class="form-control"
      placeholder="{{ 'loginForm.password.placeholder' | cxTranslate }}"
      formControlName="password"
      [attr.aria-label]="'loginForm.password.placeholder' | cxTranslate"
      [attr.aria-invalid]="
        form.get('password')?.touched && form.get('password')?.invalid
      "
      [attr.aria-errormessage]="'passwordError'"
      cxPasswordVisibilitySwitch
    />
    <cx-form-errors
      id="passwordError"
      [control]="form.get('password')"
    ></cx-form-errors>
  </label>

  <a [routerLink]="{ cxRoute: 'forgotPassword' } | cxUrl" class="btn-link">
    {{ 'loginForm.forgotPassword' | cxTranslate }}
  </a>

  <button
    type="submit"
    class="btn btn-block btn-primary"
    [disabled]="form.disabled"
  >
    {{ 'loginForm.signIn' | cxTranslate }}
  </button>
</form>
`
    }]
  }], () => [], {
    style: [{
      type: HostBinding,
      args: ["class.user-form"]
    }]
  });
})();
var OneTimePasswordLoginFormModeule = class _OneTimePasswordLoginFormModeule {
  static {
    this.ɵfac = function OneTimePasswordLoginFormModeule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OneTimePasswordLoginFormModeule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OneTimePasswordLoginFormModeule,
      declarations: [OneTimePasswordLoginFormComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, FormErrorsModule, SpinnerModule, PasswordVisibilityToggleModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ReturningCustomerOTPLoginComponent: {
            component: OneTimePasswordLoginFormComponent,
            guards: [NotAuthGuard]
          }
        }
      })],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, FormErrorsModule, SpinnerModule, PasswordVisibilityToggleModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OneTimePasswordLoginFormModeule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, FormErrorsModule, SpinnerModule, PasswordVisibilityToggleModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ReturningCustomerOTPLoginComponent: {
            component: OneTimePasswordLoginFormComponent,
            guards: [NotAuthGuard]
          }
        }
      })],
      declarations: [OneTimePasswordLoginFormComponent]
    }]
  }], null, null);
})();
var VerificationTokenDialogComponent = class _VerificationTokenDialogComponent {
  constructor(launchDialogService) {
    this.launchDialogService = launchDialogService;
    this.VERIFICATION_TOKEN_DIALOG_ACTION = VERIFICATION_TOKEN_DIALOG_ACTION;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: true,
      focusOnEscape: true
    };
  }
  closeModal(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  static {
    this.ɵfac = function VerificationTokenDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VerificationTokenDialogComponent)(ɵɵdirectiveInject(LaunchDialogService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _VerificationTokenDialogComponent,
      selectors: [["cx-verification-token-dialog"]],
      standalone: false,
      decls: 29,
      vars: 22,
      consts: [["role", "dialog", "aria-labelledby", "verification-token-dialog-title", 1, "cx-verification-token-dialog", "cx-modal-container", "cx-asm-dialog", 3, "esc", "cxFocus"], [1, "cx-modal-content"], [1, "cx-dialog-header", "modal-header"], [1, "info-icon"], ["type", "INFO"], ["id", "verification-token-dialog-title", 1, "title", "modal-title"], [1, "spliter"], [1, "cx-dialog-body", "modal-body"], [1, "cx-dialog-row"], [1, "cx-dialog-item"], [1, "cx-dialog-footer", "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
      template: function VerificationTokenDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵlistener("esc", function VerificationTokenDialogComponent_Template_div_esc_0_listener() {
            return ctx.closeModal(ctx.VERIFICATION_TOKEN_DIALOG_ACTION.OK);
          });
          ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "div")(4, "span", 3);
          ɵɵelement(5, "cx-icon", 4);
          ɵɵelementEnd();
          ɵɵelementStart(6, "h3", 5);
          ɵɵtext(7);
          ɵɵpipe(8, "cxTranslate");
          ɵɵelementEnd()()();
          ɵɵelement(9, "hr", 6);
          ɵɵelementStart(10, "div", 7)(11, "div", 8)(12, "div", 9);
          ɵɵtext(13);
          ɵɵpipe(14, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(15, "div", 9);
          ɵɵtext(16);
          ɵɵpipe(17, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(18, "div", 9);
          ɵɵtext(19);
          ɵɵpipe(20, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(21, "div", 9);
          ɵɵtext(22);
          ɵɵpipe(23, "cxTranslate");
          ɵɵelementEnd()()();
          ɵɵelementStart(24, "div", 10)(25, "button", 11);
          ɵɵpipe(26, "cxTranslate");
          ɵɵlistener("click", function VerificationTokenDialogComponent_Template_button_click_25_listener() {
            return ctx.closeModal(ctx.VERIFICATION_TOKEN_DIALOG_ACTION.OK);
          });
          ɵɵtext(27);
          ɵɵpipe(28, "cxTranslate");
          ɵɵelementEnd()()()();
        }
        if (rf & 2) {
          ɵɵproperty("cxFocus", ctx.focusConfig);
          ɵɵadvance(7);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 8, "verificationTokenDialog.title"), " ");
          ɵɵadvance(6);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(14, 10, "verificationTokenDialog.noReceiveCode"), " ");
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(17, 12, "verificationTokenDialog.contentLine1"), " ");
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 14, "verificationTokenDialog.contentLine2"), " ");
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(23, 16, "verificationTokenDialog.contentLine3"), " ");
          ɵɵadvance(3);
          ɵɵattribute("aria-label", ɵɵpipeBind1(26, 18, "verificationTokenDialog.ok"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(28, 20, "verificationTokenDialog.close"), " ");
        }
      },
      dependencies: [FocusDirective, IconComponent, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerificationTokenDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-verification-token-dialog",
      standalone: false,
      template: `<div
  class="cx-verification-token-dialog cx-modal-container cx-asm-dialog"
  role="dialog"
  [cxFocus]="focusConfig"
  (esc)="closeModal(VERIFICATION_TOKEN_DIALOG_ACTION.OK)"
  aria-labelledby="verification-token-dialog-title"
>
  <div class="cx-modal-content">
    <!-- Modal Header -->
    <div class="cx-dialog-header modal-header">
      <div>
        <span class="info-icon">
          <cx-icon type="INFO"></cx-icon>
        </span>
        <h3 id="verification-token-dialog-title" class="title modal-title">
          {{ 'verificationTokenDialog.title' | cxTranslate }}
        </h3>
      </div>
    </div>
    <hr class="spliter" />

    <!-- Modal Body -->
    <div class="cx-dialog-body modal-body">
      <div class="cx-dialog-row">
        <div class="cx-dialog-item">
          {{ 'verificationTokenDialog.noReceiveCode' | cxTranslate }}
        </div>
        <div class="cx-dialog-item">
          {{ 'verificationTokenDialog.contentLine1' | cxTranslate }}
        </div>
        <div class="cx-dialog-item">
          {{ 'verificationTokenDialog.contentLine2' | cxTranslate }}
        </div>
        <div class="cx-dialog-item">
          {{ 'verificationTokenDialog.contentLine3' | cxTranslate }}
        </div>
      </div>
    </div>

    <!-- Modal Footer -->
    <div class="cx-dialog-footer modal-footer">
      <button
        (click)="closeModal(VERIFICATION_TOKEN_DIALOG_ACTION.OK)"
        [attr.aria-label]="'verificationTokenDialog.ok' | cxTranslate"
        class="btn btn-primary"
        type="button"
      >
        {{ 'verificationTokenDialog.close' | cxTranslate }}
      </button>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }], null);
})();
var defaultVerificationTokenLayoutConfig = {
  launch: {
    [LAUNCH_CALLER.ACCOUNT_VERIFICATION_TOKEN]: {
      inlineRoot: true,
      component: VerificationTokenDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var globalMsgShowTime = 1e4;
var VerificationTokenFormComponentService = class _VerificationTokenFormComponentService {
  get csrf() {
    return this.csrfStateService.get();
  }
  constructor() {
    this.authConfigService = inject(AuthConfigService);
    this.featureConfigService = inject(FeatureConfigService);
    this.auth = inject(AuthService);
    this.csrfStateService = inject(CsrfStateService);
    this.winRef = inject(WindowRef);
    this.globalMessage = inject(GlobalMessageService);
    this.verificationTokenFacade = inject(VerificationTokenFacade);
    this.busy$ = new BehaviorSubject(false);
    this.isUpdating$ = this.busy$.pipe(tap((state) => {
      state === true ? this.form.disable() : this.form.enable();
    }));
    this.form = new UntypedFormGroup({
      tokenId: new UntypedFormControl("", [Validators.required]),
      tokenCode: new UntypedFormControl("", [Validators.required])
    });
    if (this.featureConfigService.isEnabled("authorizationCodeFlowByDefault")) {
      this.initCustomLogin();
    }
  }
  login(nativeForm) {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.featureConfigService.isEnabled("authorizationCodeFlowByDefault") && nativeForm) {
      this.winRef.localStorage?.setItem(OAUTH_REDIRECT_FLOW_KEY, "true");
      nativeForm.submit();
      this.busy$.next(true);
    } else {
      this.busy$.next(true);
      from(this.auth.otpLoginWithCredentials(this.form.value.tokenId, this.form.value.tokenCode)).pipe(withLatestFrom(this.auth.isUserLoggedIn()), tap(([_, isLoggedIn]) => this.onSuccess(isLoggedIn))).subscribe();
    }
  }
  displayMessage(key, params) {
    this.globalMessage.add({
      key,
      params
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION, globalMsgShowTime);
  }
  createVerificationToken(loginId, password, purpose) {
    return this.verificationTokenFacade.createVerificationToken({
      loginId,
      password,
      purpose
    });
  }
  onSuccess(isLoggedIn) {
    if (isLoggedIn) {
      this.globalMessage.remove(GlobalMessageType.MSG_TYPE_ERROR);
      this.form.reset();
    }
    this.busy$.next(false);
  }
  initCustomLogin() {
    this.method = "POST";
    this.action = this.authConfigService?.getCustomLoginFormEndpoint();
    this.form.addControl("csrf", new FormControl("", Validators.required));
    this.form.get("csrf")?.setValue(this.csrf?.token);
  }
  static {
    this.ɵfac = function VerificationTokenFormComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VerificationTokenFormComponentService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _VerificationTokenFormComponentService,
      factory: _VerificationTokenFormComponentService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerificationTokenFormComponentService, [{
    type: Injectable
  }], () => [], null);
})();
var VerificationTokenFormComponent = class _VerificationTokenFormComponent {
  constructor() {
    this.featureConfigService = inject(FeatureConfigService);
    this.service = inject(VerificationTokenFormComponentService);
    this.launchDialogService = inject(LaunchDialogService);
    this.cdr = inject(ChangeDetectorRef);
    this.routingService = inject(RoutingService);
    this.waitTime = 60;
    this.form = this.service.form;
    this.isUpdating$ = this.service.isUpdating$;
    this.style = true;
    this.isResendDisabled = true;
    this.waitTimeForRateLimit = 300;
    this.csrf = this.service.csrf;
    this.action = this.service.action;
    this.method = this.service.method;
  }
  ngOnInit() {
    if (!!history.state) {
      this.tokenId = history.state["tokenId"];
      this.password = history.state["password"];
      this.target = history.state["loginId"];
      this.errorStatus = history.state["errorStatus"];
      history.pushState({
        tokenId: "",
        password: "",
        loginId: "",
        errorStatus: ""
      }, "verifyToken");
      if (this.errorStatus === 400) {
        this.upToRateLimit = true;
        this.tokenId = "invalidTokenId";
        this.startRateLimitWaitTimeInterval();
      } else if (!this.target || !this.password || !this.tokenId) {
        this.service.displayMessage("verificationTokenForm.needInputCredentials", {});
        this.routingService.go(this.featureConfigService.isEnabled("authorizationCodeFlowByDefault") ? {
          cxRoute: "login"
        } : ["/login"]);
      } else {
        this.startWaitTimeInterval();
        this.service.displayMessage("verificationTokenForm.createVerificationToken", {
          target: this.target
        });
      }
    }
  }
  onSubmit() {
    this.service.login(this.verificationTokenForm?.nativeElement);
  }
  resendOTP() {
    this.isResendDisabled = true;
    this.resendLink.nativeElement.tabIndex = -1;
    this.resendLink.nativeElement.blur();
    this.waitTime = 60;
    this.startWaitTimeInterval();
    this.service.createVerificationToken(this.target, this.password, ONE_TIME_PASSWORD_LOGIN_PURPOSE).subscribe({
      next: (result) => this.tokenId = result.tokenId,
      complete: () => this.service.displayMessage("verificationTokenForm.createVerificationToken", {
        target: this.target
      })
    });
  }
  startWaitTimeInterval() {
    const interval = setInterval(() => {
      this.waitTime--;
      this.cdr.detectChanges();
      if (this.waitTime <= 0) {
        clearInterval(interval);
        this.isResendDisabled = false;
        this.resendLink.nativeElement.tabIndex = 0;
        this.cdr.detectChanges();
      }
    }, 1e3);
  }
  openInfoDailog() {
    this.launchDialogService.openDialogAndSubscribe(LAUNCH_CALLER.ACCOUNT_VERIFICATION_TOKEN, this.element);
  }
  onOpenInfoDailogKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.openInfoDailog();
    }
  }
  startRateLimitWaitTimeInterval() {
    const interval = setInterval(() => {
      this.waitTimeForRateLimit--;
      this.cdr.detectChanges();
      if (this.waitTimeForRateLimit <= 0) {
        clearInterval(interval);
        this.upToRateLimit = false;
        this.isResendDisabled = false;
        this.cdr.detectChanges();
      }
    }, 1e3);
  }
  static {
    this.ɵfac = function VerificationTokenFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VerificationTokenFormComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _VerificationTokenFormComponent,
      selectors: [["cx-verification-token-form"]],
      viewQuery: function VerificationTokenFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c5, 5);
          ɵɵviewQuery(_c6, 5);
          ɵɵviewQuery(_c7, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.element = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resendLink = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.verificationTokenForm = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function VerificationTokenFormComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("user-form", ctx.style);
        }
      },
      standalone: false,
      decls: 28,
      vars: 31,
      consts: [["verificationTokenForm", ""], ["resendLink", ""], ["noReceiveCodeLink", ""], ["class", "overlay", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "label-content"], ["required", "true", "formControlName", "tokenCode", "name", "password", "aria-describedby", "tokenInputHint", 1, "form-control", 3, "placeholder"], [3, "control"], ["class", "rate-limit-error-display", 4, "ngIf"], ["id", "tokenInputHint", 1, "cx-visually-hidden"], ["type", "hidden", "formControlName", "tokenId", "name", "username", 3, "ngModelChange", "ngModel"], [4, "cxFeature"], ["class", "resend-link-text", 4, "ngIf"], [1, "verify-container"], ["type", "submit", 1, "btn", "btn-block", "btn-primary", 3, "disabled"], [1, "btn", "btn-block", "btn-secondary", "btn-register", 3, "routerLink"], [1, "overlay"], [1, "rate-limit-error-display"], ["formControlName", "csrf", "type", "hidden", 3, "name", 4, "ngIf"], ["formControlName", "csrf", "type", "hidden", 3, "name"], [1, "resend-link-text"], [1, "left-text"], ["role", "timer", "aria-live", "polite", "aria-atomic", "true"], ["role", "button", "tabindex", "-1", 1, "btn-link", 3, "keydown.enter", "keydown.space", "click", "ngClass"], [4, "ngIf"], [1, "right-text"], ["role", "button", "tabindex", "0", 1, "btn-link", 3, "keydown", "click"]],
      template: function VerificationTokenFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵtemplate(0, VerificationTokenFormComponent_cx_spinner_0_Template, 1, 0, "cx-spinner", 3);
          ɵɵpipe(1, "async");
          ɵɵelementStart(2, "form", 4, 0);
          ɵɵlistener("ngSubmit", function VerificationTokenFormComponent_Template_form_ngSubmit_2_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onSubmit());
          });
          ɵɵelement(4, "cx-form-required-legend");
          ɵɵelementStart(5, "label")(6, "span", 5);
          ɵɵtext(7);
          ɵɵpipe(8, "cxTranslate");
          ɵɵelement(9, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(10, "input", 6);
          ɵɵpipe(11, "cxTranslate");
          ɵɵelement(12, "cx-form-errors", 7);
          ɵɵtemplate(13, VerificationTokenFormComponent_div_13_Template, 3, 6, "div", 8);
          ɵɵelementEnd();
          ɵɵelementStart(14, "span", 9);
          ɵɵtext(15);
          ɵɵpipe(16, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(17, "input", 10);
          ɵɵtwoWayListener("ngModelChange", function VerificationTokenFormComponent_Template_input_ngModelChange_17_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.tokenId, $event) || (ctx.tokenId = $event);
            return ɵɵresetView($event);
          });
          ɵɵelementEnd();
          ɵɵtemplate(18, VerificationTokenFormComponent_ng_container_18_Template, 2, 1, "ng-container", 11)(19, VerificationTokenFormComponent_div_19_Template, 13, 10, "div", 12);
          ɵɵelementStart(20, "div", 13)(21, "button", 14);
          ɵɵtext(22);
          ɵɵpipe(23, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(24, "button", 15);
          ɵɵpipe(25, "cxUrl");
          ɵɵtext(26);
          ɵɵpipe(27, "cxTranslate");
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 16, ctx.isUpdating$));
          ɵɵadvance(2);
          ɵɵproperty("formGroup", ctx.form);
          ɵɵattribute("method", ctx.method)("action", ctx.action, ɵɵsanitizeUrl);
          ɵɵadvance(5);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 18, "verificationTokenForm.verificationCode.label"), " ");
          ɵɵadvance(3);
          ɵɵproperty("placeholder", ɵɵpipeBind1(11, 20, "verificationTokenForm.verificationCode.placeholder"));
          ɵɵadvance(2);
          ɵɵproperty("control", ctx.form.get("tokenCode"));
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.upToRateLimit);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(16, 22, "verificationTokenForm.tokenInputHint"), " ");
          ɵɵadvance(2);
          ɵɵtwoWayProperty("ngModel", ctx.tokenId);
          ɵɵadvance();
          ɵɵproperty("cxFeature", "authorizationCodeFlowByDefault");
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.upToRateLimit);
          ɵɵadvance(2);
          ɵɵproperty("disabled", ctx.form.disabled);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(23, 24, "verificationTokenForm.verify"), " ");
          ɵɵadvance(2);
          ɵɵproperty("routerLink", ɵɵpipeBind1(25, 26, ɵɵpureFunction0(30, _c3)));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(27, 28, "verificationTokenForm.back"), " ");
        }
      },
      dependencies: [NgClass, NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, RouterLink, FormErrorsComponent, SpinnerComponent, FeatureDirective, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerificationTokenFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-verification-token-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<cx-spinner class="overlay" *ngIf="isUpdating$ | async"></cx-spinner>

<form
  (ngSubmit)="onSubmit()"
  [formGroup]="form"
  [attr.method]="method"
  [attr.action]="action"
  #verificationTokenForm
>
  <cx-form-required-legend />
  <label>
    <span class="label-content">
      {{ 'verificationTokenForm.verificationCode.label' | cxTranslate }}
      <cx-form-required-asterisks />
    </span>
    <input
      required="true"
      class="form-control"
      formControlName="tokenCode"
      name="password"
      [placeholder]="
        'verificationTokenForm.verificationCode.placeholder' | cxTranslate
      "
      aria-describedby="tokenInputHint"
    />
    <cx-form-errors [control]="form.get('tokenCode')"></cx-form-errors>
    <div class="rate-limit-error-display" *ngIf="upToRateLimit">
      {{
        'register.rateLimitForRegistrationMessage'
          | cxTranslate: { seconds: waitTimeForRateLimit }
      }}
    </div>
  </label>
  <span id="tokenInputHint" class="cx-visually-hidden">
    {{ 'verificationTokenForm.tokenInputHint' | cxTranslate }}
  </span>

  <input
    type="hidden"
    formControlName="tokenId"
    name="username"
    [(ngModel)]="tokenId"
  />

  <ng-container *cxFeature="'authorizationCodeFlowByDefault'">
    <input
      *ngIf="csrf"
      formControlName="csrf"
      type="hidden"
      [name]="csrf.parameterName"
    />
  </ng-container>

  <div *ngIf="!upToRateLimit" class="resend-link-text">
    <div class="left-text">
      <span role="timer" aria-live="polite" aria-atomic="true">
        <a
          role="button"
          tabindex="-1"
          #resendLink
          (keydown.enter)="resendOTP()"
          (keydown.space)="resendOTP()"
          (click)="resendOTP()"
          class="btn-link"
          [ngClass]="{ 'disabled-link': isResendDisabled }"
        >
          {{ 'verificationTokenForm.resend' | cxTranslate }}
        </a>
        <ng-container *ngIf="isResendDisabled">
          {{
            'verificationTokenForm.sendRateLime'
              | cxTranslate: { waitTime: waitTime }
          }}
        </ng-container>
      </span>
    </div>
    <div class="right-text">
      <a
        role="button"
        tabindex="0"
        #noReceiveCodeLink
        (keydown)="onOpenInfoDailogKeyDown($event)"
        (click)="openInfoDailog()"
        class="btn-link"
      >
        {{ 'verificationTokenForm.noReceiveCode' | cxTranslate }}
      </a>
    </div>
  </div>

  <div class="verify-container">
    <button
      type="submit"
      class="btn btn-block btn-primary"
      [disabled]="form.disabled"
    >
      {{ 'verificationTokenForm.verify' | cxTranslate }}
    </button>
    <button
      [routerLink]="{ cxRoute: 'login' } | cxUrl"
      class="btn btn-block btn-secondary btn-register"
    >
      {{ 'verificationTokenForm.back' | cxTranslate }}
    </button>
  </div>
</form>
`
    }]
  }], () => [], {
    style: [{
      type: HostBinding,
      args: ["class.user-form"]
    }],
    element: [{
      type: ViewChild,
      args: ["noReceiveCodeLink"]
    }],
    resendLink: [{
      type: ViewChild,
      args: ["resendLink"]
    }],
    verificationTokenForm: [{
      type: ViewChild,
      args: ["verificationTokenForm"]
    }]
  });
})();
var VerificationTokenFormModule = class _VerificationTokenFormModule {
  static {
    this.ɵfac = function VerificationTokenFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VerificationTokenFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _VerificationTokenFormModule,
      declarations: [VerificationTokenFormComponent, VerificationTokenDialogComponent],
      imports: [CommonModule, FormsModule, KeyboardFocusModule, ReactiveFormsModule, RouterModule, UrlModule, IconModule, I18nModule, FormErrorsModule, SpinnerModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          VerifyOTPTokenComponent: {
            component: VerificationTokenFormComponent,
            guards: [NotAuthGuard, CustomLoginGuard],
            providers: [{
              provide: VerificationTokenFormComponentService,
              useClass: VerificationTokenFormComponentService,
              deps: [AuthService, GlobalMessageService, VerificationTokenFacade, WindowRef]
            }]
          }
        }
      }), provideDefaultConfig(defaultVerificationTokenLayoutConfig)],
      imports: [CommonModule, FormsModule, KeyboardFocusModule, ReactiveFormsModule, RouterModule, UrlModule, IconModule, I18nModule, FormErrorsModule, SpinnerModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerificationTokenFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, KeyboardFocusModule, ReactiveFormsModule, RouterModule, UrlModule, IconModule, I18nModule, FormErrorsModule, SpinnerModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          VerifyOTPTokenComponent: {
            component: VerificationTokenFormComponent,
            guards: [NotAuthGuard, CustomLoginGuard],
            providers: [{
              provide: VerificationTokenFormComponentService,
              useClass: VerificationTokenFormComponentService,
              deps: [AuthService, GlobalMessageService, VerificationTokenFacade, WindowRef]
            }]
          }
        }
      }), provideDefaultConfig(defaultVerificationTokenLayoutConfig)],
      declarations: [VerificationTokenFormComponent, VerificationTokenDialogComponent]
    }]
  }], null, null);
})();
var UserAccountComponentsModule = class _UserAccountComponentsModule {
  static {
    this.ɵfac = function UserAccountComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAccountComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserAccountComponentsModule,
      imports: [LoginModule, LoginFormModule, VerificationTokenFormModule, LoginRegisterModule, MyAccountV2UserModule, OneTimePasswordLoginFormModeule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [LoginModule, LoginFormModule, VerificationTokenFormModule, LoginRegisterModule, MyAccountV2UserModule, OneTimePasswordLoginFormModeule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAccountComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [LoginModule, LoginFormModule, VerificationTokenFormModule, LoginRegisterModule, MyAccountV2UserModule, OneTimePasswordLoginFormModeule]
    }]
  }], null, null);
})();

export {
  LoginAsGuestGuard,
  LoginFormComponentService,
  LoginFormComponent,
  UserAccountComponentsModule
};
//# sourceMappingURL=chunk-DDZIJZKE.js.map
