import {
  UserEmailFacade,
  UserPasswordFacade,
  UserProfileFacade,
  UserRegisterFacade
} from "./chunk-YJXUXPBZ.js";
import {
  VerificationTokenFacade
} from "./chunk-LZQV6UAH.js";
import {
  BtnLikeLinkDirective,
  BtnLikeLinkModule,
  CaptchaComponent,
  CaptchaModule,
  CardComponent,
  CardModule,
  CustomFormValidators,
  DIALOG_TYPE,
  FocusDirective,
  FormErrorsComponent,
  FormErrorsModule,
  FormRequiredAsterisksComponent,
  FormRequiredLegendComponent,
  ICON_TYPE,
  IconComponent,
  IconModule,
  KeyboardFocusModule,
  LAUNCH_CALLER,
  LaunchDialogService,
  MessageComponent,
  MessageComponentModule,
  NgSelectA11yDirective,
  NgSelectA11yModule,
  PageSlotModule,
  PasswordVisibilityToggleDirective,
  PasswordVisibilityToggleModule,
  SpinnerComponent,
  SpinnerModule,
  getAddressNumbers,
  sortTitles
} from "./chunk-D5RDRHN5.js";
import {
  AnonymousConsentsConfig,
  AnonymousConsentsService,
  AuthConfigService,
  AuthGuard,
  AuthRedirectService,
  AuthService,
  ClientAuthenticationTokenService,
  FeatureConfigService,
  FeaturesConfigModule,
  GlobalMessageService,
  GlobalMessageType,
  HttpErrorModel,
  I18nModule,
  NotAuthGuard,
  OAuthFlow,
  RoutingService,
  TranslatePipe,
  TranslationService,
  UrlModule,
  UrlPipe,
  UserAddressService,
  provideDefaultConfig,
  provideDefaultConfigFactory,
  useFeatureStyles
} from "./chunk-VIVIQI6G.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-EBCNDD52.js";
import {
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-YMQEGXEG.js";
import {
  CheckboxControlValueAccessor,
  CheckboxRequiredValidator,
  DefaultValueAccessor,
  FormArrayName,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  ɵNgNoValidate
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-S7KROBXW.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Output,
  ViewChild,
  ViewContainerRef,
  inject,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
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
  Subject,
  combineLatest,
  filter,
  first,
  map,
  take,
  tap
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/user/fesm2022/spartacus-user-profile-components.mjs
function CloseAccountModalComponent_ng_container_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 10);
    ɵɵelement(2, "cx-spinner");
    ɵɵelementEnd()();
  }
}
function CloseAccountModalComponent_ng_container_0_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 11)(1, "p", 12);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(4, "div", 13)(5, "button", 14);
    ɵɵlistener("click", function CloseAccountModalComponent_ng_container_0_ng_template_14_Template_button_click_5_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.closeAccount());
    });
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 15);
    ɵɵlistener("click", function CloseAccountModalComponent_ng_container_0_ng_template_14_Template_button_click_8_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.dismissModal("Cancel"));
    });
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "closeAccount.confirmAccountClosureMessage"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 5, "closeAccount.closeMyAccount"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 7, "common.cancel"), " ");
  }
}
function CloseAccountModalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵlistener("esc", function CloseAccountModalComponent_ng_container_0_Template_div_esc_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.dismissModal("Escape click"));
    });
    ɵɵelementStart(2, "div", 3)(3, "div", 4)(4, "h3", 5);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "button", 6);
    ɵɵpipe(8, "cxTranslate");
    ɵɵpipe(9, "cxTranslate");
    ɵɵlistener("click", function CloseAccountModalComponent_ng_container_0_Template_button_click_7_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.dismissModal("Cross click"));
    });
    ɵɵelementStart(10, "span", 7);
    ɵɵelement(11, "cx-icon", 8);
    ɵɵelementEnd()()();
    ɵɵtemplate(12, CloseAccountModalComponent_ng_container_0_div_12_Template, 3, 0, "div", 9);
    ɵɵpipe(13, "async");
    ɵɵtemplate(14, CloseAccountModalComponent_ng_container_0_ng_template_14_Template, 11, 9, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const loaded_r4 = ɵɵreference(15);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("cxFocus", ctx_r1.focusConfig);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 7, "closeAccount.confirmAccountClosure"), " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(8, 9, "common.close"));
    ɵɵattribute("aria-label", ɵɵpipeBind1(9, 11, "common.close"));
    ɵɵadvance(4);
    ɵɵproperty("type", ctx_r1.iconTypes.CLOSE);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(13, 13, ctx_r1.isLoading$))("ngIfElse", loaded_r4);
  }
}
var _c0 = ["element"];
var _c1 = (a0) => ({
  label: a0
});
function ForgotPasswordComponent_cx_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-spinner", 7);
  }
}
var _c2 = () => ({});
var _c3 = () => ({
  cxRoute: "termsAndConditions"
});
var _c4 = () => ({
  cxRoute: "login"
});
function RegisterComponent_section_0_ng_container_71_label_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label");
    ɵɵelement(1, "input", 32);
    ɵɵelementStart(2, "span", 25);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const anonymousConsent_r3 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("checked", ctx_r1.isConsentGiven(anonymousConsent_r3.consent));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", anonymousConsent_r3.template, " ");
  }
}
function RegisterComponent_section_0_ng_container_71_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, RegisterComponent_section_0_ng_container_71_label_1_Template, 4, 2, "label", 22);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const anonymousConsent_r3 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", anonymousConsent_r3.template);
  }
}
function RegisterComponent_section_0_div_73_div_1_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-form-required-asterisks");
    ɵɵelementContainerEnd();
  }
}
function RegisterComponent_section_0_div_73_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "label")(2, "input", 36);
    ɵɵlistener("change", function RegisterComponent_section_0_div_73_div_1_div_1_Template_input_change_2_listener($event) {
      ɵɵrestoreView(_r4);
      const i_r5 = ɵɵnextContext().index;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.updateAdditionalConsents($event, i_r5));
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 25);
    ɵɵtext(4);
    ɵɵtemplate(5, RegisterComponent_section_0_div_73_div_1_div_1_ng_container_5_Template, 2, 0, "ng-container", 22);
    ɵɵelementEnd();
    ɵɵelement(6, "cx-form-errors", 29);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const id_r6 = ctx.ngIf;
    const ctx_r6 = ɵɵnextContext();
    const control_r8 = ctx_r6.$implicit;
    const i_r5 = ctx_r6.index;
    const consents_r9 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵproperty("required", consents_r9[i_r5].required)("name", id_r6);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", consents_r9[i_r5].template.description, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", consents_r9[i_r5].required);
    ɵɵadvance();
    ɵɵproperty("control", control_r8.get("isConsentGranted"));
  }
}
function RegisterComponent_section_0_div_73_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 35);
    ɵɵtemplate(1, RegisterComponent_section_0_div_73_div_1_div_1_Template, 7, 5, "div", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const consents_r9 = ɵɵnextContext().ngIf;
    ɵɵproperty("formGroupName", i_r5);
    ɵɵadvance();
    ɵɵproperty("ngIf", consents_r9[i_r5] == null ? null : consents_r9[i_r5].template == null ? null : consents_r9[i_r5].template.id);
  }
}
function RegisterComponent_section_0_div_73_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 33);
    ɵɵtemplate(1, RegisterComponent_section_0_div_73_div_1_Template, 2, 2, "div", 34);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.additionalConsents.controls);
  }
}
function RegisterComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "section", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
    ɵɵelement(4, "cx-form-required-legend");
    ɵɵelementStart(5, "form", 6);
    ɵɵlistener("ngSubmit", function RegisterComponent_section_0_Template_form_ngSubmit_5_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.submitForm());
    });
    ɵɵelementStart(6, "div", 7)(7, "label")(8, "span", 8);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(11, "ng-select", 9);
    ɵɵpipe(12, "async");
    ɵɵpipe(13, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(14, "div", 7)(15, "label")(16, "span", 8);
    ɵɵtext(17);
    ɵɵpipe(18, "cxTranslate");
    ɵɵelement(19, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(20, "input", 10);
    ɵɵpipe(21, "cxTranslate");
    ɵɵelement(22, "cx-form-errors", 11);
    ɵɵpipe(23, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(24, "div", 7)(25, "label")(26, "span", 8);
    ɵɵtext(27);
    ɵɵpipe(28, "cxTranslate");
    ɵɵelement(29, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(30, "input", 12);
    ɵɵpipe(31, "cxTranslate");
    ɵɵelement(32, "cx-form-errors", 13);
    ɵɵpipe(33, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(34, "div", 7)(35, "label")(36, "span", 8);
    ɵɵtext(37);
    ɵɵpipe(38, "cxTranslate");
    ɵɵelement(39, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(40, "input", 14);
    ɵɵpipe(41, "cxTranslate");
    ɵɵelement(42, "cx-form-errors", 15);
    ɵɵpipe(43, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(44, "div", 7)(45, "label")(46, "span", 8);
    ɵɵtext(47);
    ɵɵpipe(48, "cxTranslate");
    ɵɵelement(49, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(50, "input", 16);
    ɵɵpipe(51, "cxTranslate");
    ɵɵpipe(52, "cxTranslate");
    ɵɵelementStart(53, "p", 17);
    ɵɵtext(54);
    ɵɵpipe(55, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(56, "cx-form-errors", 18);
    ɵɵpipe(57, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(58, "div", 7)(59, "label")(60, "span", 8);
    ɵɵtext(61);
    ɵɵpipe(62, "cxTranslate");
    ɵɵelement(63, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(64, "input", 19);
    ɵɵpipe(65, "cxTranslate");
    ɵɵpipe(66, "cxTranslate");
    ɵɵelement(67, "cx-form-errors", 20);
    ɵɵpipe(68, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(69, "div", 7)(70, "div", 21);
    ɵɵtemplate(71, RegisterComponent_section_0_ng_container_71_Template, 2, 1, "ng-container", 22);
    ɵɵpipe(72, "async");
    ɵɵelementEnd()();
    ɵɵtemplate(73, RegisterComponent_section_0_div_73_Template, 2, 1, "div", 23);
    ɵɵelementStart(74, "div", 7)(75, "div", 21)(76, "label");
    ɵɵelement(77, "input", 24);
    ɵɵelementStart(78, "span", 25);
    ɵɵtext(79);
    ɵɵpipe(80, "cxTranslate");
    ɵɵelementStart(81, "a", 26);
    ɵɵpipe(82, "cxUrl");
    ɵɵtext(83);
    ɵɵpipe(84, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(85, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(86, "cx-form-errors", 27);
    ɵɵpipe(87, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementStart(88, "cx-captcha", 28);
    ɵɵlistener("confirmed", function RegisterComponent_section_0_Template_cx_captcha_confirmed_88_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.captchaConfirmed());
    });
    ɵɵelementEnd();
    ɵɵelement(89, "cx-form-errors", 29);
    ɵɵelementStart(90, "button", 30);
    ɵɵtext(91);
    ɵɵpipe(92, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(93, "a", 31);
    ɵɵpipe(94, "cxUrl");
    ɵɵtext(95);
    ɵɵpipe(96, "cxTranslate");
    ɵɵelementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_17_0;
    let tmp_23_0;
    let tmp_36_0;
    let tmp_42_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵproperty("formGroup", ctx_r1.registerForm);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(10, 51, "register.titleOptional"));
    ɵɵadvance(2);
    ɵɵproperty("clearable", false)("items", ɵɵpipeBind1(12, 53, ctx_r1.titles$))("placeholder", ɵɵpipeBind1(13, 55, "register.selectTitle"))("searchable", false)("cxNgSelectA11y", ɵɵpureFunction0(109, _c2));
    ɵɵadvance(6);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(18, 57, "register.firstName.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(21, 59, "register.firstName.placeholder"));
    ɵɵattribute("aria-invalid", ((tmp_11_0 = ctx_r1.registerForm.get("firstName")) == null ? null : tmp_11_0.touched) && ((tmp_11_0 = ctx_r1.registerForm.get("firstName")) == null ? null : tmp_11_0.invalid))("aria-errormessage", "firstNameError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(110, _c1, ɵɵpipeBind1(23, 61, "register.firstName.label")))("control", ctx_r1.registerForm.get("firstName"));
    ɵɵadvance(5);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(28, 63, "register.lastName.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(31, 65, "register.lastName.placeholder"));
    ɵɵattribute("aria-invalid", ((tmp_17_0 = ctx_r1.registerForm.get("lastName")) == null ? null : tmp_17_0.touched) && ((tmp_17_0 = ctx_r1.registerForm.get("lastName")) == null ? null : tmp_17_0.invalid))("aria-errormessage", "lastNameError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(112, _c1, ɵɵpipeBind1(33, 67, "register.lastName.label")))("control", ctx_r1.registerForm.get("lastName"));
    ɵɵadvance(5);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(38, 69, "register.emailAddress.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(41, 71, "register.emailAddress.placeholder"));
    ɵɵattribute("aria-invalid", ((tmp_23_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_23_0.touched) && ((tmp_23_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_23_0.invalid))("aria-errormessage", "emailError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(114, _c1, ɵɵpipeBind1(43, 73, "register.emailAddress.label")))("control", ctx_r1.registerForm.get("email"));
    ɵɵadvance(5);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(48, 75, "register.password.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(51, 77, "register.password.placeholder"));
    ɵɵattribute("aria-label", ɵɵpipeBind1(52, 79, "register.password.placeholder"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(55, 81, "register.passwordMinRequirements"), " ");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(116, _c1, ɵɵpipeBind1(57, 83, "register.password.label")))("control", ctx_r1.registerForm.get("password"));
    ɵɵadvance(5);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(62, 85, "register.confirmPassword.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(65, 87, "register.confirmPassword.placeholder"));
    ɵɵattribute("aria-label", ɵɵpipeBind1(66, 89, "register.confirmPassword.placeholder"))("aria-invalid", ((tmp_36_0 = ctx_r1.registerForm.get("passwordconf")) == null ? null : tmp_36_0.touched) && ((tmp_36_0 = ctx_r1.registerForm.get("passwordconf")) == null ? null : tmp_36_0.invalid))("aria-errormessage", "passwordconfError");
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(118, _c1, ɵɵpipeBind1(68, 91, "register.confirmPassword.label")))("control", ctx_r1.registerForm.get("passwordconf"));
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ɵɵpipeBind1(72, 93, ctx_r1.anonymousConsent$));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.additionalRegistrationConsents);
    ɵɵadvance(4);
    ɵɵattribute("aria-invalid", ((tmp_42_0 = ctx_r1.registerForm.get("termsandconditions")) == null ? null : tmp_42_0.touched) && ((tmp_42_0 = ctx_r1.registerForm.get("termsandconditions")) == null ? null : tmp_42_0.invalid))("aria-errormessage", "termsandconditionsError");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(80, 95, "register.confirmThatRead"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(82, 97, ɵɵpureFunction0(120, _c3)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(84, 99, "register.termsAndConditions"), " ");
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(121, _c1, ɵɵpipeBind1(87, 101, "register.termsAndConditions")))("control", ctx_r1.registerForm.get("termsandconditions"));
    ɵɵadvance(3);
    ɵɵproperty("control", ctx_r1.registerForm.get("captcha"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(92, 103, "register.register"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(94, 105, ɵɵpureFunction0(123, _c4)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(96, 107, "register.signIn"));
  }
}
function RegisterComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 37);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
function ResetPasswordComponent_cx_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-spinner", 2);
  }
}
function ResetPasswordComponent_form_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 3);
    ɵɵlistener("ngSubmit", function ResetPasswordComponent_form_2_Template_form_ngSubmit_0_listener() {
      const token_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onSubmit(token_r2));
    });
    ɵɵelement(1, "cx-form-required-legend");
    ɵɵelementStart(2, "label")(3, "span", 4);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelement(6, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(7, "input", 5);
    ɵɵpipe(8, "cxTranslate");
    ɵɵpipe(9, "cxTranslate");
    ɵɵelement(10, "cx-form-errors", 6);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "label")(13, "span", 4);
    ɵɵtext(14);
    ɵɵpipe(15, "cxTranslate");
    ɵɵelement(16, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(17, "input", 7);
    ɵɵpipe(18, "cxTranslate");
    ɵɵpipe(19, "cxTranslate");
    ɵɵelement(20, "cx-form-errors", 8);
    ɵɵpipe(21, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(22, "button", 9);
    ɵɵtext(23);
    ɵɵpipe(24, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_13_0;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r2.form);
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(5, 17, "register.newPassword"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(8, 19, "register.password.placeholder"));
    ɵɵattribute("aria-label", ɵɵpipeBind1(9, 21, "register.password.placeholder"))("aria-invalid", ((tmp_6_0 = ctx_r2.form.get("password")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx_r2.form.get("password")) == null ? null : tmp_6_0.invalid))("aria-errormessage", "passwordError");
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(35, _c1, ɵɵpipeBind1(11, 23, "register.newPassword")))("control", ctx_r2.form.get("password"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(15, 25, "register.passwordMinRequirements"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(18, 27, "register.confirmPassword.placeholder"));
    ɵɵattribute("aria-label", ɵɵpipeBind1(19, 29, "register.confirmPassword.placeholder"))("aria-invalid", ((tmp_13_0 = ctx_r2.form.get("passwordConfirm")) == null ? null : tmp_13_0.touched) && ((tmp_13_0 = ctx_r2.form.get("passwordConfirm")) == null ? null : tmp_13_0.invalid))("aria-errormessage", "passwordConfirmError");
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(37, _c1, ɵɵpipeBind1(21, 31, "register.passwordMinRequirements")))("control", ctx_r2.form.get("passwordConfirm"));
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r2.form.disabled);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(24, 33, "register.resetPassword"), " ");
  }
}
var _c5 = () => ({
  cxRoute: "home"
});
function UpdateEmailComponent_cx_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-spinner", 11);
  }
}
function MyAccountV2EmailComponent_cx_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-spinner", 7);
  }
}
function MyAccountV2EmailComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function MyAccountV2EmailComponent_button_8_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onEdit());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "common.edit"), " ");
  }
}
function MyAccountV2EmailComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 1)(2, "label", 9);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "label", 10);
    ɵɵtext(6);
    ɵɵpipe(7, "async");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 2, "myAccountV2Email.email"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", (tmp_2_0 = ɵɵpipeBind1(7, 4, ctx_r1.user$)) == null ? null : tmp_2_0.uid, " ");
  }
}
function MyAccountV2EmailComponent_cx_message_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-message", 11);
    ɵɵpipe(1, "cxTranslate");
    ɵɵlistener("closeMessage", function MyAccountV2EmailComponent_cx_message_11_Template_cx_message_closeMessage_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.closeDialogConfirmationAlert());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("text", ɵɵpipeBind1(1, 2, "myAccountV2Email.reloginIndicator"))("type", ctx_r1.globalMessageType.MSG_TYPE_INFO);
  }
}
function MyAccountV2EmailComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 12)(1, "form", 13);
    ɵɵlistener("ngSubmit", function MyAccountV2EmailComponent_div_12_Template_form_ngSubmit_1_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSubmit());
    });
    ɵɵelementStart(2, "label")(3, "span", 9);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(6, "input", 14);
    ɵɵpipe(7, "async");
    ɵɵelementEnd();
    ɵɵelementStart(8, "label")(9, "span", 9);
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(12, "input", 15);
    ɵɵpipe(13, "cxTranslate");
    ɵɵelement(14, "cx-form-errors", 16);
    ɵɵpipe(15, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(16, "label")(17, "span", 9);
    ɵɵtext(18);
    ɵɵpipe(19, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(20, "input", 17);
    ɵɵpipe(21, "cxTranslate");
    ɵɵelement(22, "cx-form-errors", 18);
    ɵɵpipe(23, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(24, "label")(25, "span", 19);
    ɵɵtext(26);
    ɵɵpipe(27, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(28, "input", 20);
    ɵɵpipe(29, "cxTranslate");
    ɵɵpipe(30, "cxTranslate");
    ɵɵelement(31, "cx-form-errors", 21);
    ɵɵpipe(32, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(33, "div", 22)(34, "button", 23);
    ɵɵlistener("click", function MyAccountV2EmailComponent_div_12_Template_button_click_34_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.cancelEdit());
    });
    ɵɵtext(35);
    ɵɵpipe(36, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(37, "button", 24);
    ɵɵlistener("click", function MyAccountV2EmailComponent_div_12_Template_button_click_37_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSubmit());
    });
    ɵɵtext(38);
    ɵɵpipe(39, "cxTranslate");
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_6_0;
    let tmp_12_0;
    let tmp_19_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("formGroup", ctx_r1.form);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 25, "myAccountV2Email.emailAddress"));
    ɵɵadvance(2);
    ɵɵproperty("value", (tmp_3_0 = ɵɵpipeBind1(7, 27, ctx_r1.user$)) == null ? null : tmp_3_0.uid);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(11, 29, "myAccountV2Email.newEmailAddress"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(13, 31, "myAccountV2Email.emailPlaceHolder"));
    ɵɵattribute("aria-invalid", ((tmp_6_0 = ctx_r1.form.get("email")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx_r1.form.get("email")) == null ? null : tmp_6_0.invalid))("aria-errormessage", "emailError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(53, _c1, ɵɵpipeBind1(15, 33, "updateEmailForm.newEmailAddress.label")))("control", ctx_r1.form.get("email"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(19, 35, "myAccountV2Email.confirmNewEmailAddress"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(21, 37, "myAccountV2Email.emailPlaceHolder"));
    ɵɵattribute("aria-invalid", ((tmp_12_0 = ctx_r1.form.get("confirmEmail")) == null ? null : tmp_12_0.touched) && ((tmp_12_0 = ctx_r1.form.get("confirmEmail")) == null ? null : tmp_12_0.invalid))("aria-errormessage", "confirmEmailError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(55, _c1, ɵɵpipeBind1(23, 39, "updateEmailForm.confirmNewEmailAddress.label")))("control", ctx_r1.form.get("confirmEmail"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(27, 41, "myAccountV2Email.password"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(29, 43, "myAccountV2Email.passwordPlaceHolder"));
    ɵɵattribute("aria-label", ɵɵpipeBind1(30, 45, "myAccountV2Email.passwordPlaceHolder"))("aria-invalid", ((tmp_19_0 = ctx_r1.form.get("password")) == null ? null : tmp_19_0.touched) && ((tmp_19_0 = ctx_r1.form.get("password")) == null ? null : tmp_19_0.invalid))("aria-errormessage", "passwordError");
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(57, _c1, ɵɵpipeBind1(32, 47, "updateEmailForm.password.label")))("control", ctx_r1.form.get("password"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(36, 49, "common.cancel"), " ");
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r1.form.disabled);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(39, 51, "common.save"), " ");
  }
}
function UpdatePasswordComponent_cx_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-spinner", 11);
  }
}
function MyAccountV2PasswordComponent_cx_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-spinner", 15);
  }
}
function MyAccountV2PasswordComponent_cx_message_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-message", 16);
    ɵɵpipe(1, "cxTranslate");
    ɵɵlistener("closeMessage", function MyAccountV2PasswordComponent_cx_message_6_Template_cx_message_closeMessage_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.closeDialogConfirmationAlert());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("text", ɵɵpipeBind1(1, 2, "myAccountV2PasswordForm.reloginIndicator"))("type", ctx_r1.globalMessageType.MSG_TYPE_INFO);
  }
}
var _c6 = (a0) => ({
  ariaLabel: a0
});
function UpdateProfileComponent_cx_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-spinner", 13);
  }
}
function UpdateProfileComponent_ng_option_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ng-option", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const title_r1 = ctx.$implicit;
    ɵɵproperty("value", title_r1.code);
    ɵɵadvance();
    ɵɵtextInterpolate(title_r1.name);
  }
}
function MyAccountV2ProfileComponent_cx_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-spinner", 6);
  }
}
function MyAccountV2ProfileComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function MyAccountV2ProfileComponent_button_9_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onEdit());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "common.edit"), " ");
  }
}
function MyAccountV2ProfileComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 1)(2, "label", 8);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "label", 9);
    ɵɵtext(6);
    ɵɵpipe(7, "async");
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 1)(9, "label", 8);
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "label", 9);
    ɵɵtext(13);
    ɵɵpipe(14, "async");
    ɵɵpipe(15, "async");
    ɵɵelementEnd()();
    ɵɵelementStart(16, "div", 1)(17, "label", 8);
    ɵɵtext(18);
    ɵɵpipe(19, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(20, "label", 9);
    ɵɵtext(21);
    ɵɵpipe(22, "async");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    let tmp_6_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 7, "myAccountV2UserProfile.title"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", (tmp_2_0 = ɵɵpipeBind1(7, 9, ctx_r1.user$)) == null ? null : tmp_2_0.title, " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 11, "myAccountV2UserProfile.name"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate2(" ", (tmp_4_0 = ɵɵpipeBind1(14, 13, ctx_r1.user$)) == null ? null : tmp_4_0.firstName, " ", (tmp_4_0 = ɵɵpipeBind1(15, 15, ctx_r1.user$)) == null ? null : tmp_4_0.lastName, " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(19, 17, "myAccountV2UserProfile.customerId"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", (tmp_6_0 = ɵɵpipeBind1(22, 19, ctx_r1.user$)) == null ? null : tmp_6_0.customerId, " ");
  }
}
function MyAccountV2ProfileComponent_div_11_ng_option_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ng-option", 24);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const title_r4 = ctx.$implicit;
    ɵɵproperty("value", title_r4.code);
    ɵɵadvance();
    ɵɵtextInterpolate(title_r4.name);
  }
}
function MyAccountV2ProfileComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10)(1, "form", 11);
    ɵɵlistener("ngSubmit", function MyAccountV2ProfileComponent_div_11_Template_form_ngSubmit_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSubmit());
    });
    ɵɵelementStart(2, "label")(3, "span", 12);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "ng-select", 13);
    ɵɵpipe(7, "cxTranslate");
    ɵɵtemplate(8, MyAccountV2ProfileComponent_div_11_ng_option_8_Template, 2, 2, "ng-option", 14);
    ɵɵpipe(9, "async");
    ɵɵelementEnd()();
    ɵɵelementStart(10, "label")(11, "span", 12);
    ɵɵtext(12);
    ɵɵpipe(13, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(14, "input", 15)(15, "cx-form-errors", 16);
    ɵɵpipe(16, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(17, "label")(18, "span", 12);
    ɵɵtext(19);
    ɵɵpipe(20, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(21, "input", 17)(22, "cx-form-errors", 18);
    ɵɵpipe(23, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(24, "label")(25, "span", 12);
    ɵɵtext(26);
    ɵɵpipe(27, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(28, "input", 19)(29, "cx-form-errors", 20);
    ɵɵpipe(30, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(31, "div", 21)(32, "button", 22);
    ɵɵlistener("click", function MyAccountV2ProfileComponent_div_11_Template_button_click_32_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.cancelEdit());
    });
    ɵɵtext(33);
    ɵɵpipe(34, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(35, "button", 23);
    ɵɵlistener("click", function MyAccountV2ProfileComponent_div_11_Template_button_click_35_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSubmit());
    });
    ɵɵtext(36);
    ɵɵpipe(37, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_13_0;
    let tmp_18_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("formGroup", ctx_r1.form);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 24, "myAccountV2UserProfile.title"));
    ɵɵadvance(2);
    ɵɵproperty("clearable", false)("searchable", false)("cxNgSelectA11y", ɵɵpureFunction1(46, _c6, ɵɵpipeBind1(7, 26, "myAccountV2UserProfile.title")));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(9, 28, ctx_r1.titles$));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(13, 30, "myAccountV2UserProfile.firstName"));
    ɵɵadvance(2);
    ɵɵattribute("aria-invalid", ((tmp_8_0 = ctx_r1.form.get("firstName")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = ctx_r1.form.get("firstName")) == null ? null : tmp_8_0.invalid))("aria-errormessage", "firstNameError");
    ɵɵadvance();
    ɵɵproperty("translationParams", ɵɵpureFunction1(48, _c1, ɵɵpipeBind1(16, 32, "updateProfileForm.firstName.label")))("control", ctx_r1.form.get("firstName"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(20, 34, "myAccountV2UserProfile.lastName"));
    ɵɵadvance(2);
    ɵɵattribute("aria-invalid", ((tmp_13_0 = ctx_r1.form.get("lastName")) == null ? null : tmp_13_0.touched) && ((tmp_13_0 = ctx_r1.form.get("lastName")) == null ? null : tmp_13_0.invalid))("aria-errormessage", "lastNameError");
    ɵɵadvance();
    ɵɵproperty("translationParams", ɵɵpureFunction1(50, _c1, ɵɵpipeBind1(23, 36, "updateProfileForm.lastName.label")))("control", ctx_r1.form.get("lastName"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(27, 38, "myAccountV2UserProfile.customerId"));
    ɵɵadvance(2);
    ɵɵattribute("aria-invalid", ((tmp_18_0 = ctx_r1.form.get("customerId")) == null ? null : tmp_18_0.touched) && ((tmp_18_0 = ctx_r1.form.get("customerId")) == null ? null : tmp_18_0.invalid))("aria-errormessage", "customerIdError");
    ɵɵadvance();
    ɵɵproperty("translationParams", ɵɵpureFunction1(52, _c1, ɵɵpipeBind1(30, 40, "updateProfileForm.customerId")))("control", ctx_r1.form.get("customerId"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(34, 42, "common.cancel"), " ");
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r1.form.disabled);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(37, 44, "common.save"), " ");
  }
}
var _c7 = ["submit"];
var _c8 = () => ({
  required: "true"
});
function AddressFormComponent_ng_container_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "label")(2, "span", 6);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelement(5, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelementStart(6, "ng-select", 29);
    ɵɵpipe(7, "cxTranslate");
    ɵɵlistener("change", function AddressFormComponent_ng_container_3_div_1_Template_ng_select_change_6_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.countrySelected($event));
    });
    ɵɵelementEnd();
    ɵɵelement(8, "cx-form-errors", 30);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const countries_r4 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(4, 9, "addressForm.country"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(7, 11, "addressForm.selectOne"));
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(15, _c8))("searchable", true)("clearable", false)("items", countries_r4)("cxNgSelectA11y", ɵɵpureFunction0(16, _c2));
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(17, _c1, ɵɵpipeBind1(9, 13, "addressForm.country")))("control", ctx_r2.addressForm.get("country.isocode"));
  }
}
function AddressFormComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AddressFormComponent_ng_container_3_div_1_Template, 10, 19, "div", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const countries_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", countries_r4.length !== 0);
  }
}
function AddressFormComponent_div_5_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "label")(2, "span", 6);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(5, "ng-select", 31);
    ɵɵpipe(6, "cxTranslate");
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const titles_r5 = ɵɵnextContext().ngIf;
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 6, "addressForm.titleOptional"));
    ɵɵadvance(2);
    ɵɵproperty("searchable", true)("clearable", false)("items", titles_r5)("placeholder", ɵɵpipeBind1(6, 8, "addressForm.title"))("cxNgSelectA11y", ɵɵpureFunction1(12, _c6, ɵɵpipeBind1(7, 10, "addressForm.title")));
  }
}
function AddressFormComponent_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AddressFormComponent_div_5_ng_container_1_div_1_Template, 8, 14, "div", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const titles_r5 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", titles_r5.length !== 0);
  }
}
function AddressFormComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, AddressFormComponent_div_5_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r2.titles$));
  }
}
function AddressFormComponent_ng_container_64_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 22)(2, "label")(3, "span", 6);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelement(6, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(7, "ng-select", 33);
    ɵɵpipe(8, "cxTranslate");
    ɵɵpipe(9, "cxTranslate");
    ɵɵelement(10, "cx-form-errors", 34);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const regions_r6 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(5, 10, "addressForm.state"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("bindLabel", regions_r6[0].name ? "name" : "isocode");
    ɵɵpropertyInterpolate("bindValue", regions_r6[0].name ? "isocode" : "region");
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(8, 12, "addressForm.selectOne"));
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(16, _c8))("searchable", true)("clearable", false)("items", regions_r6)("cxNgSelectA11y", ɵɵpureFunction1(17, _c6, ɵɵpipeBind1(9, 14, "addressForm.state")));
    ɵɵadvance(3);
    ɵɵproperty("control", ctx_r2.addressForm.get("region.isocode"));
  }
}
function AddressFormComponent_ng_container_64_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 32);
    ɵɵtemplate(1, AddressFormComponent_ng_container_64_ng_container_1_Template, 11, 19, "ng-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const regions_r6 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", regions_r6.length !== 0);
  }
}
function AddressFormComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5)(1, "div", 35)(2, "label")(3, "input", 36);
    ɵɵlistener("change", function AddressFormComponent_div_81_Template_input_change_3_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.toggleDefaultAddress());
    });
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 37);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 1, "addressForm.setAsDefault"));
  }
}
function AddressFormComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 27)(1, "button", 38);
    ɵɵlistener("click", function AddressFormComponent_div_85_Template_button_click_1_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.back());
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r2.cancelBtnLabel || ɵɵpipeBind1(3, 1, "addressForm.chooseAddress"), " ");
  }
}
function AddressBookComponent_ng_container_1_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9)(1, "cx-card", 10);
    ɵɵpipe(2, "async");
    ɵɵlistener("editCard", function AddressBookComponent_ng_container_1_div_6_div_1_Template_cx_card_editCard_1_listener() {
      const address_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.editAddressButtonHandle(address_r4));
    })("setDefaultCard", function AddressBookComponent_ng_container_1_div_6_div_1_Template_cx_card_setDefaultCard_1_listener() {
      const address_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setAddressAsDefault(address_r4));
    })("deleteCard", function AddressBookComponent_ng_container_1_div_6_div_1_Template_cx_card_deleteCard_1_listener() {
      let tmp_7_0;
      const address_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.setEdit((tmp_7_0 = address_r4.id) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : ""));
    })("cancelCard", function AddressBookComponent_ng_container_1_div_6_div_1_Template_cx_card_cancelCard_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.cancelCard());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const address_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("index", i_r5)("border", true)("fitToContainer", true)("content", ɵɵpipeBind1(2, 5, ctx_r1.getCardContent(address_r4)))("editMode", address_r4.id === ctx_r1.editCard);
  }
}
function AddressBookComponent_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, AddressBookComponent_ng_container_1_div_6_div_1_Template, 3, 7, "div", 8);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 1, ctx_r1.addresses$));
  }
}
function AddressBookComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3)(2, "div", 4)(3, "button", 5);
    ɵɵlistener("click", function AddressBookComponent_ng_container_1_Template_button_click_3_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.addAddressButtonHandle());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵtemplate(6, AddressBookComponent_ng_container_1_div_6_Template, 3, 3, "div", 6);
    ɵɵpipe(7, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const loading_r6 = ɵɵreference(7);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 3, "addressBook.addNewAddress"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ɵɵpipeBind1(7, 5, ctx_r1.addressesStateLoading$))("ngIfElse", loading_r6);
  }
}
function AddressBookComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "section")(2, "h2", 11);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "cx-address-form", 12);
    ɵɵpipe(6, "cxTranslate");
    ɵɵpipe(7, "cxTranslate");
    ɵɵpipe(8, "async");
    ɵɵpipe(9, "async");
    ɵɵlistener("submitAddress", function AddressBookComponent_ng_container_3_Template_cx_address_form_submitAddress_5_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.addAddressSubmit($event));
    })("backToAddress", function AddressBookComponent_ng_container_3_Template_cx_address_form_backToAddress_5_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.addAddressCancel());
    })("cancelCard", function AddressBookComponent_ng_container_3_Template_cx_address_form_cancelCard_5_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.cancelCard());
    });
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 6, "addressBook.addNewDeliveryAddress"), " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("actionBtnLabel", ɵɵpipeBind1(6, 8, "addressBook.addAddress"));
    ɵɵpropertyInterpolate("cancelBtnLabel", ɵɵpipeBind1(7, 10, "addressBook.backToAddressList"));
    ɵɵproperty("showTitleCode", true)("showCancelBtn", !(((tmp_6_0 = ɵɵpipeBind1(8, 12, ctx_r1.addresses$)) == null ? null : tmp_6_0.length) === 0))("setAsDefaultField", !(((tmp_7_0 = ɵɵpipeBind1(9, 14, ctx_r1.addresses$)) == null ? null : tmp_7_0.length) === 0));
  }
}
function AddressBookComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "section")(2, "h2", 11);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "cx-address-form", 13);
    ɵɵpipe(6, "cxTranslate");
    ɵɵpipe(7, "cxTranslate");
    ɵɵlistener("submitAddress", function AddressBookComponent_ng_container_5_Template_cx_address_form_submitAddress_5_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.editAddressSubmit($event));
    })("backToAddress", function AddressBookComponent_ng_container_5_Template_cx_address_form_backToAddress_5_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.editAddressCancel());
    });
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 5, "addressBook.editDeliveryAddress"), " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("actionBtnLabel", ɵɵpipeBind1(6, 7, "addressBook.updateAddress"));
    ɵɵpropertyInterpolate("cancelBtnLabel", ɵɵpipeBind1(7, 9, "addressBook.backToAddressList"));
    ɵɵproperty("showTitleCode", true)("addressData", ctx_r1.currentAddress);
  }
}
function AddressBookComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
function SuggestedAddressDialogComponent_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 12)(1, "input", 23);
    ɵɵtwoWayListener("ngModelChange", function SuggestedAddressDialogComponent_div_1_div_17_Template_input_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r1.selectedAddress, $event) || (ctx_r1.selectedAddress = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "label", 24);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 25)(6, "div", 16)(7, "div", 17);
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 17);
    ɵɵtext(10);
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 17);
    ɵɵtext(12);
    ɵɵelementEnd();
    ɵɵelementStart(13, "div", 17)(14, "span");
    ɵɵtext(15);
    ɵɵelementEnd()();
    ɵɵelementStart(16, "div", 17);
    ɵɵtext(17);
    ɵɵelementEnd();
    ɵɵelementStart(18, "div", 17);
    ɵɵtext(19);
    ɵɵelementEnd();
    ɵɵelementStart(20, "div", 17);
    ɵɵtext(21);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const suggestedAddress_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const data_r6 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtwoWayProperty("ngModel", ctx_r1.selectedAddress);
    ɵɵproperty("value", suggestedAddress_r4)("id", "suggested-addresses--suggested-" + i_r5);
    ɵɵadvance();
    ɵɵproperty("for", "suggested-addresses--suggested-" + i_r5);
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(4, 13, "addressSuggestion.suggestedAddress"), " ", data_r6.suggestedAddresses.length > 1 ? i_r5 + 1 : null, " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate(suggestedAddress_r4 == null ? null : suggestedAddress_r4.firstName);
    ɵɵadvance(2);
    ɵɵtextInterpolate(suggestedAddress_r4 == null ? null : suggestedAddress_r4.lastName);
    ɵɵadvance(2);
    ɵɵtextInterpolate(suggestedAddress_r4 == null ? null : suggestedAddress_r4.line1);
    ɵɵadvance(3);
    ɵɵtextInterpolate(suggestedAddress_r4 == null ? null : suggestedAddress_r4.line2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(suggestedAddress_r4 == null ? null : suggestedAddress_r4.town);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", suggestedAddress_r4 == null ? null : suggestedAddress_r4.region == null ? null : suggestedAddress_r4.region.isocode, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", suggestedAddress_r4 == null ? null : suggestedAddress_r4.postalCode, " ");
  }
}
function SuggestedAddressDialogComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "h3", 4);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵpipe(7, "cxTranslate");
    ɵɵlistener("click", function SuggestedAddressDialogComponent_div_1_Template_button_click_5_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.closeModal("Cross click"));
    });
    ɵɵelementStart(8, "span", 6);
    ɵɵelement(9, "cx-icon", 7);
    ɵɵelementEnd()()();
    ɵɵelementStart(10, "div", 8)(11, "div", 9)(12, "p");
    ɵɵtext(13);
    ɵɵpipe(14, "cxTranslate");
    ɵɵpipe(15, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(16, "div", 10);
    ɵɵtemplate(17, SuggestedAddressDialogComponent_div_1_div_17_Template, 22, 15, "div", 11);
    ɵɵelementStart(18, "div", 12)(19, "input", 13);
    ɵɵtwoWayListener("ngModelChange", function SuggestedAddressDialogComponent_div_1_Template_input_ngModelChange_19_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.selectedAddress, $event) || (ctx_r1.selectedAddress = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
    ɵɵelementStart(20, "label", 14);
    ɵɵtext(21);
    ɵɵpipe(22, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(23, "div", 15)(24, "div", 16)(25, "div", 17);
    ɵɵtext(26);
    ɵɵelementEnd();
    ɵɵelementStart(27, "div", 17);
    ɵɵtext(28);
    ɵɵelementEnd();
    ɵɵelementStart(29, "div", 17)(30, "span");
    ɵɵtext(31);
    ɵɵelementEnd()();
    ɵɵelementStart(32, "div", 17);
    ɵɵtext(33);
    ɵɵelementEnd();
    ɵɵelementStart(34, "div", 17);
    ɵɵtext(35);
    ɵɵelementEnd()()()()()();
    ɵɵelementStart(36, "div", 18)(37, "div", 19)(38, "div", 20)(39, "button", 21);
    ɵɵlistener("click", function SuggestedAddressDialogComponent_div_1_Template_button_click_39_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.closeModal("Edit address"));
    });
    ɵɵtext(40);
    ɵɵpipe(41, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(42, "button", 22);
    ɵɵlistener("click", function SuggestedAddressDialogComponent_div_1_Template_button_click_42_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.closeModal(ctx_r1.selectedAddress));
    });
    ɵɵtext(43);
    ɵɵpipe(44, "cxTranslate");
    ɵɵelementEnd()()()()();
  }
  if (rf & 2) {
    const data_r6 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 19, "addressSuggestion.verifyYourAddress"), " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(6, 21, "common.close"));
    ɵɵattribute("aria-label", ɵɵpipeBind1(7, 23, "common.close"));
    ɵɵadvance(4);
    ɵɵproperty("type", ctx_r1.iconTypes.CLOSE);
    ɵɵadvance(4);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(14, 25, "addressSuggestion.ensureAccuracySuggestChange"), " ", ɵɵpipeBind1(15, 27, "addressSuggestion.chooseAddressToUse"), " ");
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", data_r6.suggestedAddresses);
    ɵɵadvance(2);
    ɵɵtwoWayProperty("ngModel", ctx_r1.selectedAddress);
    ɵɵproperty("value", data_r6.enteredAddress);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(22, 29, "addressSuggestion.enteredAddress"), " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate2(" ", data_r6.enteredAddress == null ? null : data_r6.enteredAddress.firstName, " ", data_r6.enteredAddress == null ? null : data_r6.enteredAddress.lastName, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(data_r6.enteredAddress == null ? null : data_r6.enteredAddress.line1);
    ɵɵadvance(3);
    ɵɵtextInterpolate(data_r6.enteredAddress == null ? null : data_r6.enteredAddress.line2);
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", data_r6.enteredAddress == null ? null : data_r6.enteredAddress.town, " ", data_r6.enteredAddress == null ? null : data_r6.enteredAddress.region == null ? null : data_r6.enteredAddress.region.isocode, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", data_r6.enteredAddress == null ? null : data_r6.enteredAddress.postalCode, " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(41, 31, "addressSuggestion.editAddress"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(44, 33, "addressSuggestion.saveAddress"), " ");
  }
}
function OneTimePasswordRegisterComponent_section_0_label_45_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label");
    ɵɵelement(1, "input", 24);
    ɵɵelementStart(2, "span", 18);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const anonymousConsent_r3 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("checked", ctx_r1.isConsentGiven(anonymousConsent_r3.consent));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", anonymousConsent_r3.template, " ");
  }
}
function OneTimePasswordRegisterComponent_section_0_div_47_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "label")(2, "input", 27);
    ɵɵlistener("change", function OneTimePasswordRegisterComponent_section_0_div_47_div_1_div_1_Template_input_change_2_listener($event) {
      ɵɵrestoreView(_r4);
      const i_r5 = ɵɵnextContext().index;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.updateAdditionalConsents($event, i_r5));
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 18);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelement(5, "cx-form-errors", 21);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const id_r6 = ctx.ngIf;
    const ctx_r6 = ɵɵnextContext();
    const control_r8 = ctx_r6.$implicit;
    const i_r5 = ctx_r6.index;
    const consents_r9 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵproperty("required", consents_r9[i_r5].required)("name", id_r6)("formControlName", i_r5);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", consents_r9[i_r5].template.description, " ");
    ɵɵadvance();
    ɵɵproperty("control", control_r8);
  }
}
function OneTimePasswordRegisterComponent_section_0_div_47_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵtemplate(1, OneTimePasswordRegisterComponent_section_0_div_47_div_1_div_1_Template, 6, 5, "div", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const consents_r9 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", consents_r9[i_r5] == null ? null : consents_r9[i_r5].template == null ? null : consents_r9[i_r5].template.id);
  }
}
function OneTimePasswordRegisterComponent_section_0_div_47_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 25);
    ɵɵtemplate(1, OneTimePasswordRegisterComponent_section_0_div_47_div_1_Template, 2, 1, "div", 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.additionalConsents.controls);
  }
}
function OneTimePasswordRegisterComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "section", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "form", 6);
    ɵɵlistener("ngSubmit", function OneTimePasswordRegisterComponent_section_0_Template_form_ngSubmit_4_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.submitForm());
    });
    ɵɵelementStart(5, "div", 7)(6, "label")(7, "span", 8);
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(10, "ng-select", 9);
    ɵɵpipe(11, "async");
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(13, "div", 7)(14, "label")(15, "span", 8);
    ɵɵtext(16);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelement(18, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(19, "input", 10);
    ɵɵpipe(20, "cxTranslate");
    ɵɵelement(21, "cx-form-errors", 11);
    ɵɵpipe(22, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(23, "div", 7)(24, "label")(25, "span", 8);
    ɵɵtext(26);
    ɵɵpipe(27, "cxTranslate");
    ɵɵelement(28, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(29, "input", 12);
    ɵɵpipe(30, "cxTranslate");
    ɵɵelement(31, "cx-form-errors", 11);
    ɵɵpipe(32, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(33, "div", 7)(34, "label")(35, "span", 8);
    ɵɵtext(36);
    ɵɵpipe(37, "cxTranslate");
    ɵɵelement(38, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(39, "input", 13);
    ɵɵpipe(40, "cxTranslate");
    ɵɵelement(41, "cx-form-errors", 11);
    ɵɵpipe(42, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(43, "div", 7)(44, "div", 14);
    ɵɵtemplate(45, OneTimePasswordRegisterComponent_section_0_label_45_Template, 4, 2, "label", 15);
    ɵɵpipe(46, "async");
    ɵɵelementEnd()();
    ɵɵtemplate(47, OneTimePasswordRegisterComponent_section_0_div_47_Template, 2, 1, "div", 16);
    ɵɵelementStart(48, "div", 7)(49, "div", 14)(50, "label");
    ɵɵelement(51, "input", 17);
    ɵɵelementStart(52, "span", 18);
    ɵɵtext(53);
    ɵɵpipe(54, "cxTranslate");
    ɵɵelementStart(55, "a", 19);
    ɵɵpipe(56, "cxUrl");
    ɵɵtext(57);
    ɵɵpipe(58, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(59, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(60, "cx-form-errors", 11);
    ɵɵpipe(61, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementStart(62, "cx-captcha", 20);
    ɵɵlistener("confirmed", function OneTimePasswordRegisterComponent_section_0_Template_cx_captcha_confirmed_62_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.captchaConfirmed());
    });
    ɵɵelementEnd();
    ɵɵelement(63, "cx-form-errors", 21);
    ɵɵelementStart(64, "button", 22);
    ɵɵtext(65);
    ɵɵpipe(66, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(67, "a", 23);
    ɵɵpipe(68, "cxUrl");
    ɵɵtext(69);
    ɵɵpipe(70, "cxTranslate");
    ɵɵelementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵproperty("formGroup", ctx_r1.registerForm);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(9, 30, "register.title"));
    ɵɵadvance(2);
    ɵɵproperty("clearable", false)("items", ɵɵpipeBind1(11, 32, ctx_r1.titles$))("placeholder", ɵɵpipeBind1(12, 34, "register.selectTitle"))("searchable", false)("cxNgSelectA11y", ɵɵpureFunction0(70, _c2));
    ɵɵadvance(6);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(17, 36, "register.firstName.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(20, 38, "register.firstName.placeholder"));
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(71, _c1, ɵɵpipeBind1(22, 40, "register.firstName.label")))("control", ctx_r1.registerForm.get("firstName"));
    ɵɵadvance(5);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(27, 42, "register.lastName.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(30, 44, "register.lastName.placeholder"));
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(73, _c1, ɵɵpipeBind1(32, 46, "register.lastName.label")))("control", ctx_r1.registerForm.get("lastName"));
    ɵɵadvance(5);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(37, 48, "register.emailAddress.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(40, 50, "register.emailAddress.placeholder"));
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(75, _c1, ɵɵpipeBind1(42, 52, "register.emailAddress.label")))("control", ctx_r1.registerForm.get("email"));
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ɵɵpipeBind1(46, 54, ctx_r1.anonymousConsent$));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.additionalRegistrationConsents);
    ɵɵadvance(6);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(54, 56, "register.confirmThatRead"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(56, 58, ɵɵpureFunction0(77, _c3)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(58, 60, "register.termsAndConditions"), " ");
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(78, _c1, ɵɵpipeBind1(61, 62, "register.termsAndConditions")))("control", ctx_r1.registerForm.get("termsandconditions"));
    ɵɵadvance(3);
    ɵɵproperty("control", ctx_r1.registerForm.get("captcha"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(66, 64, "register.furtherRegistration"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(68, 66, ɵɵpureFunction0(80, _c4)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(70, 68, "register.signIn"));
  }
}
function OneTimePasswordRegisterComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 28);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
var _c9 = ["noReceiveCodeLink"];
var _c10 = ["resendLink"];
var _c11 = () => ({
  cxRoute: "register"
});
var _c12 = (a0) => ({
  seconds: a0
});
var _c13 = (a0) => ({
  "disabled-link": a0
});
var _c14 = (a0) => ({
  waitTime: a0
});
function RegistrationVerificationTokenFormComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, "register.rateLimitForRegistrationMessage", ɵɵpureFunction1(4, _c12, ctx_r1.waitTimeForRateLimit)), " ");
  }
}
function RegistrationVerificationTokenFormComponent_div_12_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, "verificationTokenForm.sendRateLime", ɵɵpureFunction1(4, _c14, ctx_r1.waitTime)), " ");
  }
}
function RegistrationVerificationTokenFormComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 19)(1, "div", 20)(2, "span", 21)(3, "a", 22, 1);
    ɵɵlistener("keydown.enter", function RegistrationVerificationTokenFormComponent_div_12_Template_a_keydown_enter_3_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resendOTP());
    })("keydown.space", function RegistrationVerificationTokenFormComponent_div_12_Template_a_keydown_space_3_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resendOTP());
    })("click", function RegistrationVerificationTokenFormComponent_div_12_Template_a_click_3_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resendOTP());
    });
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(7, RegistrationVerificationTokenFormComponent_div_12_ng_container_7_Template, 3, 6, "ng-container", 23);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 24)(9, "a", 25, 2);
    ɵɵlistener("keydown", function RegistrationVerificationTokenFormComponent_div_12_Template_a_keydown_9_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOpenInfoDailogKeyDown($event));
    })("click", function RegistrationVerificationTokenFormComponent_div_12_Template_a_click_9_listener() {
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
    ɵɵproperty("ngClass", ɵɵpureFunction1(8, _c13, ctx_r1.isResendDisabled));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 4, "verificationTokenForm.resend"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.isResendDisabled);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 6, "verificationTokenForm.noReceiveCode"), " ");
  }
}
function RegistrationVerificationTokenFormComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 26);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
var CloseAccountModalComponent = class _CloseAccountModalComponent {
  handleClick(event) {
    if (event.target.tagName === this.el.nativeElement.tagName) {
      this.dismissModal("Cross click");
    }
  }
  constructor(authService, globalMessageService, routingService, translationService, userProfile, launchDialogService, el) {
    this.authService = authService;
    this.globalMessageService = globalMessageService;
    this.routingService = routingService;
    this.translationService = translationService;
    this.userProfile = userProfile;
    this.launchDialogService = launchDialogService;
    this.el = el;
    this.iconTypes = ICON_TYPE;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button",
      focusOnEscape: true
    };
    this.loading$ = new BehaviorSubject(false);
  }
  get isLoading$() {
    return this.loading$.asObservable();
  }
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isUserLoggedIn();
  }
  onSuccess() {
    this.dismissModal("Success");
    this.translationService.translate("closeAccount.accountClosedSuccessfully").pipe(first()).subscribe((text) => {
      this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    });
    this.authService.coreLogout().then(() => {
      this.routingService.go({
        cxRoute: "home"
      });
    });
  }
  onError() {
    this.dismissModal("Error");
    this.translationService.translate("closeAccount.accountClosedFailure").pipe(first()).subscribe((text) => {
      this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_ERROR);
    });
  }
  dismissModal(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  closeAccount() {
    this.loading$.next(true);
    this.userProfile.close().subscribe({
      next: () => {
        this.onSuccess();
        this.loading$.next(false);
      },
      error: () => {
        this.onError();
        this.loading$.next(false);
      }
    });
  }
  static {
    this.ɵfac = function CloseAccountModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CloseAccountModalComponent)(ɵɵdirectiveInject(AuthService), ɵɵdirectiveInject(GlobalMessageService), ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(UserProfileFacade), ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CloseAccountModalComponent,
      selectors: [["cx-close-account-modal"]],
      hostBindings: function CloseAccountModalComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function CloseAccountModalComponent_click_HostBindingHandler($event) {
            return ctx.handleClick($event);
          });
        }
      },
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["loaded", ""], [4, "ngIf"], [1, "modal-dialog", "modal-dialog-centered", "cx-close-account-modal", 3, "esc", "cxFocus"], [1, "modal-content", "cx-close-account-modal-container"], [1, "cx-close-account-modal-header", "cx-modal-header"], [1, "cx-close-account-modal-title"], ["type", "button", 1, "close", 3, "click", "title"], ["aria-hidden", "true"], [3, "type"], [4, "ngIf", "ngIfElse"], [1, "cx-spinner"], [1, "modal-body"], [1, "cx-confirmation"], [1, "cx-close-account-modal-footer", "cx-modal-footer"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-block", "btn-secondary", 3, "click"]],
      template: function CloseAccountModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CloseAccountModalComponent_ng_container_0_Template, 16, 15, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.isLoggedIn$));
        }
      },
      dependencies: [NgIf, IconComponent, SpinnerComponent, FocusDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CloseAccountModalComponent, [{
    type: Component,
    args: [{
      selector: "cx-close-account-modal",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="isLoggedIn$ | async">
  <div
    class="modal-dialog modal-dialog-centered cx-close-account-modal"
    [cxFocus]="focusConfig"
    (esc)="dismissModal('Escape click')"
  >
    <div class="modal-content cx-close-account-modal-container">
      <div class="cx-close-account-modal-header cx-modal-header">
        <h3 class="cx-close-account-modal-title">
          {{ 'closeAccount.confirmAccountClosure' | cxTranslate }}
        </h3>
        <button
          type="button"
          class="close"
          title="{{ 'common.close' | cxTranslate }}"
          [attr.aria-label]="'common.close' | cxTranslate"
          (click)="dismissModal('Cross click')"
        >
          <span aria-hidden="true">
            <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
          </span>
        </button>
      </div>

      <div *ngIf="isLoading$ | async; else loaded">
        <div class="cx-spinner">
          <cx-spinner> </cx-spinner>
        </div>
      </div>

      <ng-template #loaded>
        <div class="modal-body">
          <p class="cx-confirmation">
            {{ 'closeAccount.confirmAccountClosureMessage' | cxTranslate }}
          </p>
        </div>
        <div class="cx-close-account-modal-footer cx-modal-footer">
          <button class="btn btn-primary" (click)="closeAccount()">
            {{ 'closeAccount.closeMyAccount' | cxTranslate }}
          </button>
          <button
            (click)="dismissModal('Cancel')"
            class="btn btn-block btn-secondary"
          >
            {{ 'common.cancel' | cxTranslate }}
          </button>
        </div>
      </ng-template>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: AuthService
  }, {
    type: GlobalMessageService
  }, {
    type: RoutingService
  }, {
    type: TranslationService
  }, {
    type: UserProfileFacade
  }, {
    type: LaunchDialogService
  }, {
    type: ElementRef
  }], {
    handleClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var defaultCloseDialogModalLayoutConfig = {
  launch: {
    CLOSE_ACCOUNT: {
      inline: true,
      component: CloseAccountModalComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var CloseAccountComponent = class _CloseAccountComponent {
  constructor(launchDialogService, vcr) {
    this.launchDialogService = launchDialogService;
    this.vcr = vcr;
    this.routingService = inject(RoutingService, {
      optional: true
    });
  }
  openModal() {
    const dialog = this.launchDialogService.openDialog(LAUNCH_CALLER.CLOSE_ACCOUNT, this.element, this.vcr);
    dialog?.pipe(take(1)).subscribe();
  }
  navigateTo(cxRoute) {
    this.routingService?.go({
      cxRoute
    });
  }
  static {
    this.ɵfac = function CloseAccountComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CloseAccountComponent)(ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(ViewContainerRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CloseAccountComponent,
      selectors: [["cx-close-account"]],
      viewQuery: function CloseAccountComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.element = _t.first);
        }
      },
      standalone: false,
      decls: 11,
      vars: 6,
      consts: [["element", ""], [1, "col-lg-8", "col-md-9"], [1, "row", "cx-btn-group"], [1, "col-sm-6"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "btn", "btn-block", "btn-primary", 3, "click"]],
      template: function CloseAccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "button", 4);
          ɵɵlistener("click", function CloseAccountComponent_Template_button_click_3_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.navigateTo("home"));
          });
          ɵɵtext(4);
          ɵɵpipe(5, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(6, "div", 3)(7, "button", 5, 0);
          ɵɵlistener("click", function CloseAccountComponent_Template_button_click_7_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.openModal());
          });
          ɵɵtext(9);
          ɵɵpipe(10, "cxTranslate");
          ɵɵelementEnd()()()();
        }
        if (rf & 2) {
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 2, "common.cancel"), " ");
          ɵɵadvance(5);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 4, "closeAccount.closeMyAccount"), " ");
        }
      },
      dependencies: [TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CloseAccountComponent, [{
    type: Component,
    args: [{
      selector: "cx-close-account",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="col-lg-8 col-md-9">
  <div class="row cx-btn-group">
    <div class="col-sm-6">
      <button class="btn btn-block btn-secondary" (click)="navigateTo('home')">
        {{ 'common.cancel' | cxTranslate }}
      </button>
    </div>
    <div class="col-sm-6">
      <button #element class="btn btn-block btn-primary" (click)="openModal()">
        {{ 'closeAccount.closeMyAccount' | cxTranslate }}
      </button>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: ViewContainerRef
  }], {
    element: [{
      type: ViewChild,
      args: ["element"]
    }],
    routingService: [{
      type: Optional
    }]
  });
})();
var CloseAccountModule = class _CloseAccountModule {
  static {
    this.ɵfac = function CloseAccountModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CloseAccountModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CloseAccountModule,
      declarations: [CloseAccountComponent, CloseAccountModalComponent],
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, IconModule, SpinnerModule, KeyboardFocusModule, BtnLikeLinkModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CloseAccountComponent: {
            component: CloseAccountComponent,
            guards: [AuthGuard]
          }
        }
      }), provideDefaultConfig(defaultCloseDialogModalLayoutConfig)],
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, IconModule, SpinnerModule, KeyboardFocusModule, BtnLikeLinkModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CloseAccountModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, IconModule, SpinnerModule, KeyboardFocusModule, BtnLikeLinkModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CloseAccountComponent: {
            component: CloseAccountComponent,
            guards: [AuthGuard]
          }
        }
      }), provideDefaultConfig(defaultCloseDialogModalLayoutConfig)],
      declarations: [CloseAccountComponent, CloseAccountModalComponent]
    }]
  }], null, null);
})();
var ForgotPasswordComponentService = class _ForgotPasswordComponentService {
  constructor(userPasswordService, routingService, authConfigService, globalMessage) {
    this.userPasswordService = userPasswordService;
    this.routingService = routingService;
    this.authConfigService = authConfigService;
    this.globalMessage = globalMessage;
    this.busy$ = new BehaviorSubject(false);
    this.isUpdating$ = this.busy$.pipe(tap((state) => state === true ? this.form.disable() : this.form.enable()));
    this.form = new UntypedFormGroup({
      userEmail: new UntypedFormControl("", [Validators.required, CustomFormValidators.emailValidator])
    });
  }
  /**
   * Sends an email to the user to reset the password.
   *
   * When the `ResourceOwnerPasswordFlow` is used, the user is routed
   * to the login page.
   */
  requestEmail() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.busy$.next(true);
    this.userPasswordService.requestForgotPasswordEmail(this.form.value.userEmail).subscribe({
      next: () => this.onSuccess(),
      error: (error) => this.onError(error)
    });
  }
  onSuccess() {
    this.globalMessage.add({
      key: "forgottenPassword.passwordResetEmailSent"
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    this.busy$.next(false);
    this.form.reset();
    this.redirect();
  }
  onError(_error) {
    this.busy$.next(false);
  }
  /**
   * Redirects the user back to the login page.
   *
   * This only happens in case of the `ResourceOwnerPasswordFlow` OAuth flow.
   */
  redirect() {
    if (this.authConfigService.getOAuthFlow() === OAuthFlow.ResourceOwnerPasswordFlow) {
      this.routingService.go({
        cxRoute: "login"
      });
    }
  }
  static {
    this.ɵfac = function ForgotPasswordComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ForgotPasswordComponentService)(ɵɵinject(UserPasswordFacade), ɵɵinject(RoutingService), ɵɵinject(AuthConfigService), ɵɵinject(GlobalMessageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ForgotPasswordComponentService,
      factory: _ForgotPasswordComponentService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponentService, [{
    type: Injectable
  }], () => [{
    type: UserPasswordFacade
  }, {
    type: RoutingService
  }, {
    type: AuthConfigService
  }, {
    type: GlobalMessageService
  }], null);
})();
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  constructor(service) {
    this.service = service;
    this.routingService = inject(RoutingService, {
      optional: true
    });
    this.form = this.service.form;
    this.isUpdating$ = this.service.isUpdating$;
  }
  onSubmit() {
    this.service.requestEmail();
  }
  navigateTo(cxRoute) {
    this.routingService?.go({
      cxRoute
    });
  }
  static {
    this.ɵfac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ForgotPasswordComponent)(ɵɵdirectiveInject(ForgotPasswordComponentService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ForgotPasswordComponent,
      selectors: [["cx-forgot-password"]],
      standalone: false,
      decls: 19,
      vars: 25,
      consts: [["class", "overlay", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "label-content"], ["required", "true", "type", "email", "formControlName", "userEmail", 1, "form-control", 3, "placeholder"], ["id", "userEmailError", 3, "translationParams", "control"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "btn", "btn-block", "btn-primary", 3, "disabled"], [1, "overlay"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ForgotPasswordComponent_cx_spinner_0_Template, 1, 0, "cx-spinner", 0);
          ɵɵpipe(1, "async");
          ɵɵelement(2, "cx-form-required-legend");
          ɵɵelementStart(3, "form", 1);
          ɵɵlistener("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmit();
          });
          ɵɵelementStart(4, "label")(5, "span", 2);
          ɵɵtext(6);
          ɵɵpipe(7, "cxTranslate");
          ɵɵelement(8, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(9, "input", 3);
          ɵɵpipe(10, "cxTranslate");
          ɵɵelement(11, "cx-form-errors", 4);
          ɵɵpipe(12, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(13, "button", 5);
          ɵɵlistener("click", function ForgotPasswordComponent_Template_button_click_13_listener() {
            return ctx.navigateTo("login");
          });
          ɵɵtext(14);
          ɵɵpipe(15, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(16, "button", 6);
          ɵɵtext(17);
          ɵɵpipe(18, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          let tmp_4_0;
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 11, ctx.isUpdating$));
          ɵɵadvance(3);
          ɵɵproperty("formGroup", ctx.form);
          ɵɵadvance(3);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(7, 13, "forgottenPassword.emailAddress.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(10, 15, "forgottenPassword.emailAddress.placeholder"));
          ɵɵattribute("aria-invalid", ((tmp_4_0 = ctx.form.get("userEmail")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.form.get("userEmail")) == null ? null : tmp_4_0.invalid))("aria-errormessage", "userEmailError");
          ɵɵadvance(2);
          ɵɵproperty("translationParams", ɵɵpureFunction1(23, _c1, ɵɵpipeBind1(12, 17, "forgottenPassword.emailAddress.label")))("control", ctx.form.get("userEmail"));
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 19, "common.cancel"), " ");
          ɵɵadvance(2);
          ɵɵproperty("disabled", ctx.form.disabled);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 21, "common.submit"), " ");
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormErrorsComponent, SpinnerComponent, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{
      selector: "cx-forgot-password",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<cx-spinner class="overlay" *ngIf="isUpdating$ | async"> </cx-spinner>
<cx-form-required-legend />
<form (ngSubmit)="onSubmit()" [formGroup]="form">
  <label>
    <span class="label-content"
      >{{ 'forgottenPassword.emailAddress.label' | cxTranslate }}
      <cx-form-required-asterisks />
    </span>
    <input
      required="true"
      type="email"
      class="form-control"
      placeholder="{{
        'forgottenPassword.emailAddress.placeholder' | cxTranslate
      }}"
      formControlName="userEmail"
      [attr.aria-invalid]="
        form.get('userEmail')?.touched && form.get('userEmail')?.invalid
      "
      [attr.aria-errormessage]="'userEmailError'"
    />

    <cx-form-errors
      id="userEmailError"
      [translationParams]="{
        label: 'forgottenPassword.emailAddress.label' | cxTranslate,
      }"
      [control]="form.get('userEmail')"
    ></cx-form-errors>
  </label>

  <button class="btn btn-block btn-secondary" (click)="navigateTo('login')">
    {{ 'common.cancel' | cxTranslate }}
  </button>
  <button class="btn btn-block btn-primary" [disabled]="form.disabled">
    {{ 'common.submit' | cxTranslate }}
  </button>
</form>
`
    }]
  }], () => [{
    type: ForgotPasswordComponentService
  }], {
    routingService: [{
      type: Optional
    }]
  });
})();
var ForgotPasswordModule = class _ForgotPasswordModule {
  static {
    this.ɵfac = function ForgotPasswordModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ForgotPasswordModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ForgotPasswordModule,
      declarations: [ForgotPasswordComponent],
      imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, FormErrorsModule, SpinnerModule, FeaturesConfigModule, BtnLikeLinkModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ForgotPasswordComponent: {
            component: ForgotPasswordComponent,
            guards: [NotAuthGuard],
            providers: [{
              provide: ForgotPasswordComponentService,
              useClass: ForgotPasswordComponentService,
              deps: [UserPasswordFacade, RoutingService, AuthConfigService, GlobalMessageService]
            }]
          }
        }
      })],
      imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, FormErrorsModule, SpinnerModule, FeaturesConfigModule, BtnLikeLinkModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, FormErrorsModule, SpinnerModule, FeaturesConfigModule, BtnLikeLinkModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ForgotPasswordComponent: {
            component: ForgotPasswordComponent,
            guards: [NotAuthGuard],
            providers: [{
              provide: ForgotPasswordComponentService,
              useClass: ForgotPasswordComponentService,
              deps: [UserPasswordFacade, RoutingService, AuthConfigService, GlobalMessageService]
            }]
          }
        }
      })],
      declarations: [ForgotPasswordComponent]
    }]
  }], null, null);
})();
var RegisterComponentService = class _RegisterComponentService {
  constructor(userRegisterFacade, globalMessageService, fb) {
    this.userRegisterFacade = userRegisterFacade;
    this.globalMessageService = globalMessageService;
    this.fb = fb;
    this.featureConfigService = inject(FeatureConfigService);
  }
  /**
   * Register a new user.
   *
   * @param user as UserSignUp
   */
  register(user) {
    return this.userRegisterFacade.register(user);
  }
  /**
   * Returns titles that can be used for the user profiles.
   */
  getTitles() {
    return this.userRegisterFacade.getTitles();
  }
  /**
   * Show the message after successful registration.
   */
  postRegisterMessage() {
    if (this.featureConfigService.isEnabled("a11yPostRegisterSuccessMessage")) {
      this.globalMessageService.add({
        key: "register.postRegisterSuccessMessage"
      }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    } else {
      this.globalMessageService.add({
        key: "register.postRegisterMessage"
      }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    }
  }
  /**
   * Get if any additional consents needs to be provided during registration
   * In core feature, no additional consents are necessary during registration.
   * In integration scenarios, eg: cdc, this method will be overridden to return
   * necessary cdc consents
   */
  getAdditionalConsents() {
    return [];
  }
  /**
   * Generate form control if any additional consents that needs to be provided during registration
   * In core feature, no additional consents are necessary during registration.
   * In integration scenarios, eg: cdc, this method will be overridden to return
   * form controls for necessary cdc consents
   */
  generateAdditionalConsentsFormControl() {
    return this.fb?.array([]) ?? void 0;
  }
  collectDataFromRegisterForm(formData) {
    const {
      firstName,
      lastName,
      email,
      password,
      titleCode
    } = formData;
    return {
      firstName,
      lastName,
      password,
      titleCode,
      uid: email.toLowerCase()
    };
  }
  static {
    this.ɵfac = function RegisterComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegisterComponentService)(ɵɵinject(UserRegisterFacade), ɵɵinject(GlobalMessageService), ɵɵinject(UntypedFormBuilder));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RegisterComponentService,
      factory: _RegisterComponentService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponentService, [{
    type: Injectable
  }], () => [{
    type: UserRegisterFacade
  }, {
    type: GlobalMessageService
  }, {
    type: UntypedFormBuilder
  }], null);
})();
var RegisterComponent = class _RegisterComponent {
  get additionalConsents() {
    return this.registerForm?.get("additionalConsents");
  }
  updateAdditionalConsents(event, index) {
    const {
      checked
    } = event.target;
    this.registerForm.value.additionalConsents[index].isConsentGranted = checked;
  }
  constructor(globalMessageService, fb, router, anonymousConsentsService, anonymousConsentsConfig, authConfigService, registerComponentService) {
    this.globalMessageService = globalMessageService;
    this.fb = fb;
    this.router = router;
    this.anonymousConsentsService = anonymousConsentsService;
    this.anonymousConsentsConfig = anonymousConsentsConfig;
    this.authConfigService = authConfigService;
    this.registerComponentService = registerComponentService;
    this.featureConfigService = inject(FeatureConfigService);
    this.passwordValidators = this.featureConfigService.isEnabled("enableSecurePasswordValidation") ? CustomFormValidators.securePasswordValidators : [...CustomFormValidators.passwordValidators, CustomFormValidators.noConsecutiveCharacters];
    this.isLoading$ = new BehaviorSubject(false);
    this.subscription = new Subscription();
    this.registerForm = this.fb.group({
      titleCode: [null],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, CustomFormValidators.emailValidator]],
      password: ["", [Validators.required, ...this.passwordValidators]],
      passwordconf: ["", Validators.required],
      newsletter: new UntypedFormControl({
        value: false,
        disabled: this.isConsentRequired()
      }),
      additionalConsents: this.registerComponentService.generateAdditionalConsentsFormControl?.() ?? this.fb.array([]),
      termsandconditions: [false, Validators.requiredTrue],
      captcha: [false, Validators.requiredTrue]
    }, {
      validators: CustomFormValidators.passwordsMustMatch("password", "passwordconf")
    });
    useFeatureStyles("a11yPasswordVisibliltyBtnValueOverflow");
  }
  ngOnInit() {
    this.titles$ = this.registerComponentService.getTitles().pipe(map((titles) => {
      return titles.sort(sortTitles);
    }));
    this.subscription.add(this.globalMessageService.get().pipe(filter((messages) => !!Object.keys(messages).length)).subscribe((globalMessageEntities) => {
      const messages = globalMessageEntities && globalMessageEntities[GlobalMessageType.MSG_TYPE_ERROR];
      if (messages?.some((message) => message.raw === "This field is required.")) {
        this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
        this.globalMessageService.add({
          key: "register.titleRequired"
        }, GlobalMessageType.MSG_TYPE_ERROR);
      }
    }));
    const registerConsent = this.anonymousConsentsConfig?.anonymousConsents?.registerConsent ?? "";
    this.anonymousConsent$ = combineLatest([this.anonymousConsentsService.getConsent(registerConsent), this.anonymousConsentsService.getTemplate(registerConsent)]).pipe(map(([consent, template]) => {
      return {
        consent,
        template: template?.description ? template.description : ""
      };
    }));
    this.additionalRegistrationConsents = this.registerComponentService?.getAdditionalConsents() || [];
    this.subscription.add(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.registerForm.get("newsletter").valueChanges.subscribe(() => {
        this.toggleAnonymousConsent();
      })
    );
  }
  submitForm() {
    if (this.registerForm.valid) {
      this.registerUser();
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
  registerUser() {
    this.isLoading$.next(true);
    this.registerComponentService.register(this.collectDataFromRegisterForm(this.registerForm.value)).subscribe({
      next: () => this.onRegisterUserSuccess(),
      complete: () => this.isLoading$.next(this.authConfigService.getOAuthFlow() === OAuthFlow.AuthorizationCode),
      error: () => this.isLoading$.next(false)
    });
  }
  titleSelected(title) {
    this.registerForm["controls"].titleCode.setValue(title.code);
  }
  collectDataFromRegisterForm(formData) {
    return this.registerComponentService.collectDataFromRegisterForm(formData);
  }
  isConsentGiven(consent) {
    return this.anonymousConsentsService.isConsentGiven(consent);
  }
  isConsentRequired() {
    const requiredConsents = this.anonymousConsentsConfig?.anonymousConsents?.requiredConsents;
    const registerConsent = this.anonymousConsentsConfig?.anonymousConsents?.registerConsent;
    if (requiredConsents && registerConsent) {
      return requiredConsents.includes(registerConsent);
    }
    return false;
  }
  onRegisterUserSuccess() {
    if (this.featureConfigService.isEnabled("authorizationCodeFlowByDefault")) {
      this.router.go({
        cxRoute: "login"
      });
    } else if (this.authConfigService.getOAuthFlow() === OAuthFlow.ResourceOwnerPasswordFlow) {
      this.router.go("login");
    }
    this.registerComponentService.postRegisterMessage();
  }
  toggleAnonymousConsent() {
    const registerConsent = this.anonymousConsentsConfig?.anonymousConsents?.registerConsent;
    if (registerConsent) {
      if (Boolean(this.registerForm.get("newsletter").value)) {
        this.anonymousConsentsService.giveConsent(registerConsent);
      } else {
        this.anonymousConsentsService.withdrawConsent(registerConsent);
      }
    }
  }
  /**
   * Triggered via CaptchaComponent when a user confirms captcha
   */
  captchaConfirmed() {
    this.registerForm.get("captcha")?.setValue(true);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegisterComponent)(ɵɵdirectiveInject(GlobalMessageService), ɵɵdirectiveInject(UntypedFormBuilder), ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(AnonymousConsentsService), ɵɵdirectiveInject(AnonymousConsentsConfig), ɵɵdirectiveInject(AuthConfigService), ɵɵdirectiveInject(RegisterComponentService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _RegisterComponent,
      selectors: [["cx-register"]],
      hostAttrs: ["ngSkipHydration", "true"],
      standalone: false,
      decls: 4,
      vars: 4,
      consts: [["loading", ""], ["class", "cx-page-section container", 4, "ngIf", "ngIfElse"], [1, "cx-page-section", "container"], [1, "row", "justify-content-center"], [1, "col-md-6"], [1, "cx-section"], [3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "label-content"], ["bindLabel", "name", "bindValue", "code", "formControlName", "titleCode", "id", "title-select", 3, "clearable", "items", "placeholder", "searchable", "cxNgSelectA11y"], ["required", "true", "type", "text", "name", "firstname", "formControlName", "firstName", 1, "form-control", 3, "placeholder"], ["id", "firstNameError", 3, "translationParams", "control"], ["required", "true", "type", "text", "name", "lastname", "formControlName", "lastName", 1, "form-control", 3, "placeholder"], ["id", "lastNameError", 3, "translationParams", "control"], ["required", "true", "type", "email", "name", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["id", "emailError", 3, "translationParams", "control"], ["required", "true", "type", "password", "name", "password", "formControlName", "password", "aria-describedby", "password-input-hint", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], ["id", "password-input-hint", 1, "input-hint"], [3, "translationParams", "control"], ["required", "true", "type", "password", "name", "confirmpassword", "formControlName", "passwordconf", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], ["id", "passwordconfError", 3, "translationParams", "control"], [1, "form-check"], [4, "ngIf"], ["formArrayName", "additionalConsents", "class", "form-group", 4, "ngIf"], ["required", "true", "type", "checkbox", "name", "termsandconditions", "formControlName", "termsandconditions"], [1, "form-check-label"], ["target", "_blank", "rel", "noopener noreferrer", 3, "routerLink"], ["id", "termsandconditionsError", 3, "translationParams", "control"], [3, "confirmed"], [3, "control"], ["type", "submit", 1, "btn", "btn-block", "btn-primary"], [1, "cx-login-link", "btn-link", 3, "routerLink"], ["type", "checkbox", "name", "newsletter", "formControlName", "newsletter", 1, "form-check-input", 3, "checked"], ["formArrayName", "additionalConsents", 1, "form-group"], ["class", "form-check", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "form-check", 3, "formGroupName"], ["type", "checkbox", "formControlName", "isConsentGranted", 3, "change", "required", "name"], [1, "cx-spinner"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, RegisterComponent_section_0_Template, 97, 124, "section", 1);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, RegisterComponent_ng_template_2_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r10 = ɵɵreference(3);
          ɵɵproperty("ngIf", !ɵɵpipeBind1(1, 2, ctx.isLoading$))("ngIfElse", loading_r10);
        }
      },
      dependencies: [CaptchaComponent, NgForOf, NgIf, ɵNgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, CheckboxRequiredValidator, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, RouterLink, SpinnerComponent, FormErrorsComponent, FormRequiredAsterisksComponent, FormRequiredLegendComponent, NgSelectA11yDirective, NgSelectComponent, PasswordVisibilityToggleDirective, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{
      selector: "cx-register",
      standalone: false,
      host: {
        ngSkipHydration: "true"
      },
      template: `<section
  class="cx-page-section container"
  *ngIf="!(isLoading$ | async); else loading"
>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="cx-section">
        <!-- TODO: (CXSPA-5953) Remove feature flags next major -->
        <cx-form-required-legend />
        <form (ngSubmit)="submitForm()" [formGroup]="registerForm">
          <div class="form-group">
            <label>
              <span class="label-content">{{
                'register.titleOptional' | cxTranslate
              }}</span>
              <ng-select
                [clearable]="false"
                [items]="titles$ | async"
                [placeholder]="'register.selectTitle' | cxTranslate"
                [searchable]="false"
                bindLabel="name"
                bindValue="code"
                formControlName="titleCode"
                id="title-select"
                [cxNgSelectA11y]="{}"
              >
              </ng-select>
            </label>
          </div>

          <div class="form-group">
            <label>
              <span class="label-content"
                >{{ 'register.firstName.label' | cxTranslate }}
                <cx-form-required-asterisks />
              </span>
              <input
                required="true"
                class="form-control"
                type="text"
                name="firstname"
                placeholder="{{
                  'register.firstName.placeholder' | cxTranslate
                }}"
                formControlName="firstName"
                [attr.aria-invalid]="
                  registerForm.get('firstName')?.touched &&
                  registerForm.get('firstName')?.invalid
                "
                [attr.aria-errormessage]="'firstNameError'"
              />

              <cx-form-errors
                id="firstNameError"
                [translationParams]="{
                  label: 'register.firstName.label' | cxTranslate,
                }"
                [control]="registerForm.get('firstName')"
              ></cx-form-errors>
            </label>
          </div>

          <div class="form-group">
            <label>
              <span class="label-content"
                >{{ 'register.lastName.label' | cxTranslate }}
                <cx-form-required-asterisks />
              </span>
              <input
                required="true"
                class="form-control"
                type="text"
                name="lastname"
                placeholder="{{
                  'register.lastName.placeholder' | cxTranslate
                }}"
                formControlName="lastName"
                [attr.aria-invalid]="
                  registerForm.get('lastName')?.touched &&
                  registerForm.get('lastName')?.invalid
                "
                [attr.aria-errormessage]="'lastNameError'"
              />

              <cx-form-errors
                id="lastNameError"
                [translationParams]="{
                  label: 'register.lastName.label' | cxTranslate,
                }"
                [control]="registerForm.get('lastName')"
              ></cx-form-errors>
            </label>
          </div>

          <div class="form-group">
            <label>
              <span class="label-content"
                >{{ 'register.emailAddress.label' | cxTranslate }}
                <cx-form-required-asterisks />
              </span>
              <input
                required="true"
                class="form-control"
                type="email"
                name="email"
                placeholder="{{
                  'register.emailAddress.placeholder' | cxTranslate
                }}"
                formControlName="email"
                [attr.aria-invalid]="
                  registerForm.get('email')?.touched &&
                  registerForm.get('email')?.invalid
                "
                [attr.aria-errormessage]="'emailError'"
              />

              <cx-form-errors
                id="emailError"
                [translationParams]="{
                  label: 'register.emailAddress.label' | cxTranslate,
                }"
                [control]="registerForm.get('email')"
              ></cx-form-errors>
            </label>
          </div>

          <div class="form-group">
            <label>
              <span class="label-content"
                >{{ 'register.password.label' | cxTranslate }}
                <cx-form-required-asterisks />
              </span>
              <input
                required="true"
                class="form-control"
                type="password"
                name="password"
                placeholder="{{
                  'register.password.placeholder' | cxTranslate
                }}"
                formControlName="password"
                [attr.aria-label]="
                  'register.password.placeholder' | cxTranslate
                "
                aria-describedby="password-input-hint"
                cxPasswordVisibilitySwitch
              />
              <p class="input-hint" id="password-input-hint">
                {{ 'register.passwordMinRequirements' | cxTranslate }}
              </p>

              <cx-form-errors
                [translationParams]="{
                  label: 'register.password.label' | cxTranslate,
                }"
                [control]="registerForm.get('password')"
              ></cx-form-errors>
            </label>
          </div>

          <div class="form-group">
            <label>
              <span class="label-content"
                >{{ 'register.confirmPassword.label' | cxTranslate }}
                <cx-form-required-asterisks />
              </span>
              <input
                required="true"
                class="form-control"
                type="password"
                name="confirmpassword"
                placeholder="{{
                  'register.confirmPassword.placeholder' | cxTranslate
                }}"
                formControlName="passwordconf"
                [attr.aria-label]="
                  'register.confirmPassword.placeholder' | cxTranslate
                "
                [attr.aria-invalid]="
                  registerForm.get('passwordconf')?.touched &&
                  registerForm.get('passwordconf')?.invalid
                "
                [attr.aria-errormessage]="'passwordconfError'"
                cxPasswordVisibilitySwitch
              />

              <cx-form-errors
                id="passwordconfError"
                [translationParams]="{
                  label: 'register.confirmPassword.label' | cxTranslate,
                }"
                [control]="registerForm.get('passwordconf')"
              ></cx-form-errors>
            </label>
          </div>

          <div class="form-group">
            <div class="form-check">
              <ng-container
                *ngIf="anonymousConsent$ | async as anonymousConsent"
              >
                <label *ngIf="anonymousConsent.template">
                  <input
                    type="checkbox"
                    name="newsletter"
                    class="form-check-input"
                    formControlName="newsletter"
                    [checked]="isConsentGiven(anonymousConsent.consent)"
                  />
                  <span class="form-check-label">
                    {{ anonymousConsent.template }}
                  </span>
                </label>
              </ng-container>
            </div>
          </div>

          <div
            formArrayName="additionalConsents"
            class="form-group"
            *ngIf="additionalRegistrationConsents as consents"
          >
            <div
              class="form-check"
              *ngFor="let control of additionalConsents.controls; let i = index"
              [formGroupName]="i"
            >
              <div *ngIf="consents[i]?.template?.id as id">
                <label>
                  <input
                    type="checkbox"
                    [required]="consents[i].required"
                    [name]="id"
                    (change)="updateAdditionalConsents($any($event), i)"
                    formControlName="isConsentGranted"
                  />
                  <span class="form-check-label">
                    {{ consents[i].template.description }}
                    <ng-container *ngIf="consents[i].required">
                      <cx-form-required-asterisks />
                    </ng-container>
                  </span>
                  <cx-form-errors
                    [control]="control.get('isConsentGranted')"
                  ></cx-form-errors>
                </label>
              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="form-check">
              <label>
                <input
                  required="true"
                  type="checkbox"
                  name="termsandconditions"
                  formControlName="termsandconditions"
                  [attr.aria-invalid]="
                    registerForm.get('termsandconditions')?.touched &&
                    registerForm.get('termsandconditions')?.invalid
                  "
                  [attr.aria-errormessage]="'termsandconditionsError'"
                />
                <span class="form-check-label">
                  {{ 'register.confirmThatRead' | cxTranslate }}
                  <a
                    [routerLink]="{ cxRoute: 'termsAndConditions' } | cxUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ 'register.termsAndConditions' | cxTranslate }}
                  </a>
                  <cx-form-required-asterisks />
                </span>

                <cx-form-errors
                  id="termsandconditionsError"
                  [translationParams]="{
                    label: 'register.termsAndConditions' | cxTranslate,
                  }"
                  [control]="registerForm.get('termsandconditions')"
                ></cx-form-errors>
              </label>
            </div>
          </div>
          <cx-captcha (confirmed)="captchaConfirmed()"></cx-captcha>
          <cx-form-errors
            [control]="registerForm.get('captcha')"
          ></cx-form-errors>
          <button type="submit" class="btn btn-block btn-primary">
            {{ 'register.register' | cxTranslate }}
          </button>
          <a
            class="cx-login-link btn-link"
            [routerLink]="{ cxRoute: 'login' } | cxUrl"
            >{{ 'register.signIn' | cxTranslate }}</a
          >
        </form>
      </div>
    </div>
  </div>
</section>

<ng-template #loading>
  <div class="cx-spinner"><cx-spinner></cx-spinner></div>
</ng-template>
`
    }]
  }], () => [{
    type: GlobalMessageService
  }, {
    type: UntypedFormBuilder
  }, {
    type: RoutingService
  }, {
    type: AnonymousConsentsService
  }, {
    type: AnonymousConsentsConfig
  }, {
    type: AuthConfigService
  }, {
    type: RegisterComponentService
  }], null);
})();
var RegisterComponentModule = class _RegisterComponentModule {
  static {
    this.ɵfac = function RegisterComponentModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegisterComponentModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RegisterComponentModule,
      declarations: [RegisterComponent],
      imports: [CaptchaModule, CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, SpinnerModule, FormErrorsModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent, NgSelectA11yModule, NgSelectModule, PasswordVisibilityToggleModule, FeaturesConfigModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          RegisterCustomerComponent: {
            component: RegisterComponent,
            guards: [NotAuthGuard],
            providers: [{
              provide: RegisterComponentService,
              useClass: RegisterComponentService,
              deps: [UserRegisterFacade, GlobalMessageService, UntypedFormBuilder]
            }]
          }
        }
      })],
      imports: [CaptchaModule, CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, SpinnerModule, FormErrorsModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent, NgSelectA11yModule, NgSelectModule, PasswordVisibilityToggleModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponentModule, [{
    type: NgModule,
    args: [{
      imports: [CaptchaModule, CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, SpinnerModule, FormErrorsModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent, NgSelectA11yModule, NgSelectModule, PasswordVisibilityToggleModule, FeaturesConfigModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          RegisterCustomerComponent: {
            component: RegisterComponent,
            guards: [NotAuthGuard],
            providers: [{
              provide: RegisterComponentService,
              useClass: RegisterComponentService,
              deps: [UserRegisterFacade, GlobalMessageService, UntypedFormBuilder]
            }]
          }
        }
      })],
      declarations: [RegisterComponent]
    }]
  }], null, null);
})();
var ResetPasswordComponentService = class _ResetPasswordComponentService {
  constructor(userPasswordService, routingService, globalMessage) {
    this.userPasswordService = userPasswordService;
    this.routingService = routingService;
    this.globalMessage = globalMessage;
    this.featureConfigService = inject(FeatureConfigService);
    this.passwordValidators = this.featureConfigService.isEnabled("enableSecurePasswordValidation") ? CustomFormValidators.securePasswordValidators : [...CustomFormValidators.passwordValidators, CustomFormValidators.noConsecutiveCharacters];
    this.busy$ = new BehaviorSubject(false);
    this.isUpdating$ = this.busy$.pipe(tap((state) => state === true ? this.form.disable() : this.form.enable()));
    this.resetToken$ = this.routingService.getRouterState().pipe(map((routerState) => routerState.state.queryParams["token"]));
    this.form = new UntypedFormGroup({
      password: new UntypedFormControl("", [Validators.required, ...this.passwordValidators]),
      passwordConfirm: new UntypedFormControl("", Validators.required)
    }, {
      validators: CustomFormValidators.passwordsMustMatch("password", "passwordConfirm")
    });
  }
  /**
   * Resets the password by the given token.
   *
   * The token has been provided during the request password flow.
   * The token is not validated on the client.
   */
  resetPassword(token) {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.busy$.next(true);
    const password = this.form.get("password").value;
    this.userPasswordService.reset(token, password).subscribe({
      next: () => this.onSuccess(),
      error: (error) => this.onError(error)
    });
  }
  onSuccess() {
    this.globalMessage.add({
      key: "forgottenPassword.passwordResetSuccess"
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    this.busy$.next(false);
    this.form.reset();
    this.redirect();
  }
  onError(error) {
    this.busy$.next(false);
    if (error instanceof HttpErrorModel) {
      (error.details ?? []).forEach((err) => {
        if (err.message) {
          this.globalMessage.add({
            raw: err.message
          }, GlobalMessageType.MSG_TYPE_ERROR);
        }
      });
    }
  }
  /**
   * Redirects the user to the login page.
   */
  redirect() {
    this.routingService.go({
      cxRoute: "login"
    });
  }
  static {
    this.ɵfac = function ResetPasswordComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResetPasswordComponentService)(ɵɵinject(UserPasswordFacade), ɵɵinject(RoutingService), ɵɵinject(GlobalMessageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ResetPasswordComponentService,
      factory: _ResetPasswordComponentService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponentService, [{
    type: Injectable
  }], () => [{
    type: UserPasswordFacade
  }, {
    type: RoutingService
  }, {
    type: GlobalMessageService
  }], null);
})();
var ResetPasswordComponent = class _ResetPasswordComponent {
  constructor(service) {
    this.service = service;
    this.form = this.service.form;
    this.isUpdating$ = this.service.isUpdating$;
    this.token$ = this.service.resetToken$;
    useFeatureStyles("a11yPasswordVisibliltyBtnValueOverflow");
  }
  onSubmit(token) {
    this.service.resetPassword(token);
  }
  static {
    this.ɵfac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResetPasswordComponent)(ɵɵdirectiveInject(ResetPasswordComponentService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ResetPasswordComponent,
      selectors: [["cx-reset-password"]],
      hostAttrs: ["ngSkipHydration", "true", 1, "user-form"],
      standalone: false,
      decls: 4,
      vars: 6,
      consts: [["class", "overlay", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "overlay"], [3, "ngSubmit", "formGroup"], [1, "label-content"], ["required", "true", "type", "password", "formControlName", "password", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], ["id", "passwordError", 3, "translationParams", "control"], ["required", "true", "type", "password", "formControlName", "passwordConfirm", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], ["id", "passwordConfirmError", 3, "translationParams", "control"], [1, "btn", "btn-block", "btn-primary", 3, "disabled"]],
      template: function ResetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ResetPasswordComponent_cx_spinner_0_Template, 1, 0, "cx-spinner", 0);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, ResetPasswordComponent_form_2_Template, 25, 39, "form", 1);
          ɵɵpipe(3, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.isUpdating$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(3, 4, ctx.token$));
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormErrorsComponent, SpinnerComponent, PasswordVisibilityToggleDirective, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{
      selector: "cx-reset-password",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "user-form",
        ngSkipHydration: "true"
      },
      standalone: false,
      template: `<cx-spinner class="overlay" *ngIf="isUpdating$ | async"> </cx-spinner>

<form
  *ngIf="token$ | async as token"
  (ngSubmit)="onSubmit(token)"
  [formGroup]="form"
>
  <cx-form-required-legend />
  <label>
    <span class="label-content"
      >{{ 'register.newPassword' | cxTranslate }}
      <cx-form-required-asterisks />
    </span>
    <input
      required="true"
      class="form-control"
      type="password"
      placeholder="{{ 'register.password.placeholder' | cxTranslate }}"
      formControlName="password"
      [attr.aria-label]="'register.password.placeholder' | cxTranslate"
      [attr.aria-invalid]="
        form.get('password')?.touched && form.get('password')?.invalid
      "
      [attr.aria-errormessage]="'passwordError'"
      cxPasswordVisibilitySwitch
    />

    <cx-form-errors
      id="passwordError"
      [translationParams]="{
        label: 'register.newPassword' | cxTranslate,
      }"
      [control]="form.get('password')"
    ></cx-form-errors>
  </label>

  <label>
    <span class="label-content"
      >{{ 'register.passwordMinRequirements' | cxTranslate }}
      <cx-form-required-asterisks />
    </span>
    <input
      required="true"
      class="form-control"
      type="password"
      placeholder="{{ 'register.confirmPassword.placeholder' | cxTranslate }}"
      formControlName="passwordConfirm"
      [attr.aria-label]="'register.confirmPassword.placeholder' | cxTranslate"
      [attr.aria-invalid]="
        form.get('passwordConfirm')?.touched &&
        form.get('passwordConfirm')?.invalid
      "
      [attr.aria-errormessage]="'passwordConfirmError'"
      cxPasswordVisibilitySwitch
    />

    <cx-form-errors
      id="passwordConfirmError"
      [translationParams]="{
        label: 'register.passwordMinRequirements' | cxTranslate,
      }"
      [control]="form.get('passwordConfirm')"
    ></cx-form-errors>
  </label>

  <button class="btn btn-block btn-primary" [disabled]="form.disabled">
    {{ 'register.resetPassword' | cxTranslate }}
  </button>
</form>
`
    }]
  }], () => [{
    type: ResetPasswordComponentService
  }], null);
})();
var ResetPasswordModule = class _ResetPasswordModule {
  static {
    this.ɵfac = function ResetPasswordModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResetPasswordModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ResetPasswordModule,
      declarations: [ResetPasswordComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, I18nModule, FormErrorsModule, SpinnerModule, PasswordVisibilityToggleModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ResetPasswordComponent: {
            component: ResetPasswordComponent,
            guards: [NotAuthGuard],
            providers: [{
              provide: ResetPasswordComponentService,
              useClass: ResetPasswordComponentService,
              deps: [UserPasswordFacade, RoutingService, GlobalMessageService]
            }]
          }
        }
      })],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, I18nModule, FormErrorsModule, SpinnerModule, PasswordVisibilityToggleModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, I18nModule, FormErrorsModule, SpinnerModule, PasswordVisibilityToggleModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ResetPasswordComponent: {
            component: ResetPasswordComponent,
            guards: [NotAuthGuard],
            providers: [{
              provide: ResetPasswordComponentService,
              useClass: ResetPasswordComponentService,
              deps: [UserPasswordFacade, RoutingService, GlobalMessageService]
            }]
          }
        }
      })],
      declarations: [ResetPasswordComponent]
    }]
  }], null, null);
})();
var UpdateEmailComponentService = class _UpdateEmailComponentService {
  constructor(userEmail, routingService, globalMessageService, authService, authRedirectService) {
    this.userEmail = userEmail;
    this.routingService = routingService;
    this.globalMessageService = globalMessageService;
    this.authService = authService;
    this.authRedirectService = authRedirectService;
    this.busy$ = new BehaviorSubject(false);
    this.updateSucceed$ = new Subject();
    this.isUpdating$ = this.busy$.pipe(tap((state) => state === true ? this.form.disable() : this.form.enable()));
    this.form = new UntypedFormGroup({
      email: new UntypedFormControl("", [Validators.required, CustomFormValidators.emailValidator]),
      confirmEmail: new UntypedFormControl("", [Validators.required]),
      password: new UntypedFormControl("", [Validators.required])
    }, {
      validators: CustomFormValidators.emailsMustMatch("email", "confirmEmail")
    });
  }
  save() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.busy$.next(true);
    const newEmail = this.form.get("confirmEmail")?.value;
    const password = this.form.get("password")?.value;
    this.userEmail.update(password, newEmail).subscribe({
      next: () => this.onSuccess(newEmail),
      error: (error) => this.onError(error)
    });
  }
  /**
   * Handles successful updating of the user email.
   */
  onSuccess(newUid) {
    this.globalMessageService.add({
      key: "updateEmailForm.emailUpdateSuccess",
      params: {
        newUid
      }
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    this.busy$.next(false);
    this.form.reset();
    this.updateSucceed$.next(true);
    this.authRedirectService.setRedirectUrl(this.routingService.getUrl({
      cxRoute: "home"
    }));
    this.authService.coreLogout().then(() => {
      this.routingService.go({
        cxRoute: "login"
      }, {
        state: {
          newUid
        }
      });
    });
  }
  onError(_error) {
    this.busy$.next(false);
    this.updateSucceed$.next(false);
  }
  static {
    this.ɵfac = function UpdateEmailComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UpdateEmailComponentService)(ɵɵinject(UserEmailFacade), ɵɵinject(RoutingService), ɵɵinject(GlobalMessageService), ɵɵinject(AuthService), ɵɵinject(AuthRedirectService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UpdateEmailComponentService,
      factory: _UpdateEmailComponentService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdateEmailComponentService, [{
    type: Injectable
  }], () => [{
    type: UserEmailFacade
  }, {
    type: RoutingService
  }, {
    type: GlobalMessageService
  }, {
    type: AuthService
  }, {
    type: AuthRedirectService
  }], null);
})();
var UpdateEmailComponent = class _UpdateEmailComponent {
  constructor(service) {
    this.service = service;
    this.form = this.service.form;
    this.isUpdating$ = this.service.isUpdating$;
    useFeatureStyles("a11yPasswordVisibliltyBtnValueOverflow");
  }
  onSubmit() {
    this.service.save();
  }
  static {
    this.ɵfac = function UpdateEmailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UpdateEmailComponent)(ɵɵdirectiveInject(UpdateEmailComponentService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UpdateEmailComponent,
      selectors: [["cx-update-email"]],
      hostAttrs: ["ngSkipHydration", "true", 1, "user-form"],
      standalone: false,
      decls: 39,
      vars: 59,
      consts: [["class", "overlay", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "label-content"], ["required", "true", "type", "email", "name", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["id", "emailError", 3, "translationParams", "control"], ["required", "true", "type", "email", "name", "confirmEmail", "formControlName", "confirmEmail", 1, "form-control", 3, "placeholder"], ["id", "confirmEmailError", 3, "translationParams", "control"], ["required", "true", "type", "password", "name", "password", "formControlName", "password", "autocomplete", "new-password", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], ["id", "passwordError", 3, "translationParams", "control"], ["cxBtnLikeLink", "", 1, "btn", "btn-block", "btn-secondary", 3, "routerLink"], [1, "btn", "btn-block", "btn-primary", 3, "disabled"], [1, "overlay"]],
      template: function UpdateEmailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, UpdateEmailComponent_cx_spinner_0_Template, 1, 0, "cx-spinner", 0);
          ɵɵpipe(1, "async");
          ɵɵelement(2, "cx-form-required-legend");
          ɵɵelementStart(3, "form", 1);
          ɵɵlistener("ngSubmit", function UpdateEmailComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmit();
          });
          ɵɵelementStart(4, "label")(5, "span", 2);
          ɵɵtext(6);
          ɵɵpipe(7, "cxTranslate");
          ɵɵelement(8, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(9, "input", 3);
          ɵɵpipe(10, "cxTranslate");
          ɵɵelement(11, "cx-form-errors", 4);
          ɵɵpipe(12, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(13, "label")(14, "span", 2);
          ɵɵtext(15);
          ɵɵpipe(16, "cxTranslate");
          ɵɵelement(17, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(18, "input", 5);
          ɵɵpipe(19, "cxTranslate");
          ɵɵelement(20, "cx-form-errors", 6);
          ɵɵpipe(21, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(22, "label")(23, "span", 2);
          ɵɵtext(24);
          ɵɵpipe(25, "cxTranslate");
          ɵɵelement(26, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(27, "input", 7);
          ɵɵpipe(28, "cxTranslate");
          ɵɵpipe(29, "cxTranslate");
          ɵɵelement(30, "cx-form-errors", 8);
          ɵɵpipe(31, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(32, "a", 9);
          ɵɵpipe(33, "cxUrl");
          ɵɵtext(34);
          ɵɵpipe(35, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(36, "button", 10);
          ɵɵtext(37);
          ɵɵpipe(38, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          let tmp_4_0;
          let tmp_10_0;
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 24, ctx.isUpdating$));
          ɵɵadvance(3);
          ɵɵproperty("formGroup", ctx.form);
          ɵɵadvance(3);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(7, 26, "updateEmailForm.newEmailAddress.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(10, 28, "updateEmailForm.newEmailAddress.placeholder"));
          ɵɵattribute("aria-invalid", ((tmp_4_0 = ctx.form.get("email")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.form.get("email")) == null ? null : tmp_4_0.invalid))("aria-errormessage", "emailError");
          ɵɵadvance(2);
          ɵɵproperty("translationParams", ɵɵpureFunction1(52, _c1, ɵɵpipeBind1(12, 30, "updateEmailForm.newEmailAddress.label")))("control", ctx.form.get("email"));
          ɵɵadvance(4);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(16, 32, "updateEmailForm.confirmNewEmailAddress.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(19, 34, "updateEmailForm.confirmNewEmailAddress.placeholder"));
          ɵɵattribute("aria-invalid", ((tmp_10_0 = ctx.form.get("confirmEmail")) == null ? null : tmp_10_0.touched) && ((tmp_10_0 = ctx.form.get("confirmEmail")) == null ? null : tmp_10_0.invalid))("aria-errormessage", "confirmEmailError");
          ɵɵadvance(2);
          ɵɵproperty("translationParams", ɵɵpureFunction1(54, _c1, ɵɵpipeBind1(21, 36, "updateEmailForm.confirmNewEmailAddress.label")))("control", ctx.form.get("confirmEmail"));
          ɵɵadvance(4);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(25, 38, "updateEmailForm.password.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(28, 40, "updateEmailForm.password.placeholder"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(29, 42, "updateEmailForm.password.placeholder"))("aria-describedby", "passwordError");
          ɵɵadvance(3);
          ɵɵproperty("translationParams", ɵɵpureFunction1(56, _c1, ɵɵpipeBind1(31, 44, "updateEmailForm.password.label")))("control", ctx.form.get("password"));
          ɵɵadvance(2);
          ɵɵproperty("routerLink", ɵɵpipeBind1(33, 46, ɵɵpureFunction0(58, _c5)));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(35, 48, "common.cancel"), " ");
          ɵɵadvance(2);
          ɵɵproperty("disabled", ctx.form.disabled);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(38, 50, "common.save"), " ");
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, SpinnerComponent, RouterLink, FormErrorsComponent, PasswordVisibilityToggleDirective, BtnLikeLinkDirective, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdateEmailComponent, [{
    type: Component,
    args: [{
      selector: "cx-update-email",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "user-form",
        ngSkipHydration: "true"
      },
      standalone: false,
      template: `<cx-spinner class="overlay" *ngIf="isUpdating$ | async"> </cx-spinner>
<!-- TODO: (CXSPA-5953) Remove feature flags next major -->
<cx-form-required-legend />
<form (ngSubmit)="onSubmit()" [formGroup]="form">
  <label>
    <span class="label-content"
      >{{ 'updateEmailForm.newEmailAddress.label' | cxTranslate }}

      <cx-form-required-asterisks />
    </span>
    <input
      required="true"
      type="email"
      name="email"
      formControlName="email"
      placeholder="{{
        'updateEmailForm.newEmailAddress.placeholder' | cxTranslate
      }}"
      [attr.aria-invalid]="
        form.get('email')?.touched && form.get('email')?.invalid
      "
      [attr.aria-errormessage]="'emailError'"
      class="form-control"
    />

    <cx-form-errors
      id="emailError"
      [translationParams]="{
        label: 'updateEmailForm.newEmailAddress.label' | cxTranslate,
      }"
      [control]="form.get('email')"
    ></cx-form-errors>
  </label>

  <label>
    <span class="label-content"
      >{{ 'updateEmailForm.confirmNewEmailAddress.label' | cxTranslate }}

      <cx-form-required-asterisks />
    </span>
    <input
      required="true"
      type="email"
      name="confirmEmail"
      formControlName="confirmEmail"
      placeholder="{{
        'updateEmailForm.confirmNewEmailAddress.placeholder' | cxTranslate
      }}"
      [attr.aria-invalid]="
        form.get('confirmEmail')?.touched && form.get('confirmEmail')?.invalid
      "
      [attr.aria-errormessage]="'confirmEmailError'"
      class="form-control"
    />

    <cx-form-errors
      id="confirmEmailError"
      [translationParams]="{
        label: 'updateEmailForm.confirmNewEmailAddress.label' | cxTranslate,
      }"
      [control]="form.get('confirmEmail')"
    ></cx-form-errors>
  </label>

  <label>
    <span class="label-content"
      >{{ 'updateEmailForm.password.label' | cxTranslate }}

      <cx-form-required-asterisks />
    </span>
    <input
      required="true"
      type="password"
      name="password"
      formControlName="password"
      placeholder="{{ 'updateEmailForm.password.placeholder' | cxTranslate }}"
      class="form-control"
      autocomplete="new-password"
      [attr.aria-label]="'updateEmailForm.password.placeholder' | cxTranslate"
      [attr.aria-describedby]="'passwordError'"
      cxPasswordVisibilitySwitch
    />

    <cx-form-errors
      id="passwordError"
      [translationParams]="{
        label: 'updateEmailForm.password.label' | cxTranslate,
      }"
      [control]="form.get('password')"
    ></cx-form-errors>
  </label>

  <a
    class="btn btn-block btn-secondary"
    [routerLink]="{ cxRoute: 'home' } | cxUrl"
    cxBtnLikeLink
  >
    {{ 'common.cancel' | cxTranslate }}
  </a>

  <button class="btn btn-block btn-primary" [disabled]="form.disabled">
    {{ 'common.save' | cxTranslate }}
  </button>
</form>
`
    }]
  }], () => [{
    type: UpdateEmailComponentService
  }], null);
})();
var MyAccountV2EmailComponent = class _MyAccountV2EmailComponent {
  constructor() {
    this.emailComponentService = inject(UpdateEmailComponentService);
    this.userProfile = inject(UserProfileFacade);
    this.form = this.emailComponentService.form;
    this.isUpdating$ = this.emailComponentService.isUpdating$;
    this.user$ = this.userProfile.get().pipe(filter((user) => Boolean(user)));
    this.globalMessageType = GlobalMessageType;
  }
  ngOnInit() {
    this.isEditing = false;
  }
  onSubmit() {
    this.emailComponentService.save();
    this.emailComponentService.updateSucceed$.subscribe((res) => {
      this.isEditing = !res;
    });
  }
  onEdit() {
    this.isEditing = true;
    this.showingAlert = true;
    this.form.reset();
  }
  cancelEdit() {
    this.isEditing = false;
  }
  closeDialogConfirmationAlert() {
    this.showingAlert = false;
  }
  static {
    this.ɵfac = function MyAccountV2EmailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAccountV2EmailComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MyAccountV2EmailComponent,
      selectors: [["cx-my-account-v2-email"]],
      hostAttrs: ["ngSkipHydration", "true"],
      standalone: false,
      decls: 13,
      vars: 12,
      consts: [["class", "overlay", 4, "ngIf$", "ngIf"], [1, "flex-line"], [1, "headertext"], ["class", "editButton", 3, "click", 4, "ngIf"], [4, "ngIf"], [3, "text", "type", "closeMessage", 4, "ngIf"], ["class", "email-editing-area", 4, "ngIf"], [1, "overlay"], [1, "editButton", 3, "click"], [1, "text-head"], [1, "value"], [3, "closeMessage", "text", "type"], [1, "email-editing-area"], [3, "ngSubmit", "formGroup"], ["type", "text", "readonly", "", 1, "form-control", 3, "value"], ["required", "true", "type", "email", "name", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["id", "emailError", 3, "translationParams", "control"], ["required", "true", "type", "email", "name", "confirmEmail", "formControlName", "confirmEmail", 1, "form-control", 3, "placeholder"], ["id", "confirmEmailError", 3, "translationParams", "control"], [1, "label-content,", "text-head"], ["required", "true", "type", "password", "name", "password", "formControlName", "password", "autocomplete", "new-password", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], ["id", "passwordError", 3, "translationParams", "control"], [1, "btn-group"], [1, "btn", "button-cancel", "button", 3, "click"], [1, "btn", "btn-primary", "button", 3, "click", "disabled"]],
      template: function MyAccountV2EmailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, MyAccountV2EmailComponent_cx_spinner_0_Template, 1, 0, "cx-spinner", 0);
          ɵɵpipe(1, "async");
          ɵɵpipe(2, "async");
          ɵɵelementStart(3, "div")(4, "div", 1)(5, "label", 2);
          ɵɵtext(6);
          ɵɵpipe(7, "cxTranslate");
          ɵɵelementEnd();
          ɵɵtemplate(8, MyAccountV2EmailComponent_button_8_Template, 3, 3, "button", 3);
          ɵɵelementEnd();
          ɵɵelementStart(9, "div");
          ɵɵtemplate(10, MyAccountV2EmailComponent_div_10_Template, 8, 6, "div", 4);
          ɵɵelementEnd();
          ɵɵtemplate(11, MyAccountV2EmailComponent_cx_message_11_Template, 2, 4, "cx-message", 5)(12, MyAccountV2EmailComponent_div_12_Template, 40, 59, "div", 6);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 6, ctx.isUpdating$) || !ɵɵpipeBind1(2, 8, ctx.user$));
          ɵɵadvance(6);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(7, 10, "myAccountV2Email.myEmailAddress"), " ");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", !ctx.isEditing);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", !ctx.isEditing);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.isEditing && ctx.showingAlert);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.isEditing);
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, SpinnerComponent, FormErrorsComponent, PasswordVisibilityToggleDirective, MessageComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2EmailComponent, [{
    type: Component,
    args: [{
      selector: "cx-my-account-v2-email",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      host: {
        ngSkipHydration: "true"
      },
      template: `<cx-spinner
  class="overlay"
  *ngIf="(isUpdating$ | async) || !(user$ | async); $"
>
</cx-spinner>
<div>
  <div class="flex-line">
    <label class="headertext"
      >{{ 'myAccountV2Email.myEmailAddress' | cxTranslate }}
    </label>
    <button class="editButton" *ngIf="!isEditing" (click)="onEdit()">
      {{ 'common.edit' | cxTranslate }}
    </button>
  </div>
  <div>
    <div *ngIf="!isEditing">
      <div class="flex-line">
        <label class="text-head">
          {{ 'myAccountV2Email.email' | cxTranslate }}
        </label>
        <label class="value">
          {{ (user$ | async)?.uid }}
        </label>
      </div>
    </div>
  </div>
  <cx-message
    *ngIf="isEditing && showingAlert"
    [text]="'myAccountV2Email.reloginIndicator' | cxTranslate"
    [type]="globalMessageType.MSG_TYPE_INFO"
    (closeMessage)="closeDialogConfirmationAlert()"
  ></cx-message>
  <div *ngIf="isEditing" class="email-editing-area">
    <form (ngSubmit)="onSubmit()" [formGroup]="form">
      <label>
        <span class="text-head">{{
          'myAccountV2Email.emailAddress' | cxTranslate
        }}</span>
        <input
          type="text"
          class="form-control"
          [value]="(user$ | async)?.uid"
          readonly
        />
      </label>

      <label>
        <span class="text-head">{{
          'myAccountV2Email.newEmailAddress' | cxTranslate
        }}</span>
        <input
          required="true"
          type="email"
          name="email"
          formControlName="email"
          placeholder="{{ 'myAccountV2Email.emailPlaceHolder' | cxTranslate }}"
          class="form-control"
          [attr.aria-invalid]="
            form.get('email')?.touched && form.get('email')?.invalid
          "
          [attr.aria-errormessage]="'emailError'"
        />

        <cx-form-errors
          id="emailError"
          [translationParams]="{
            label: 'updateEmailForm.newEmailAddress.label' | cxTranslate,
          }"
          [control]="form.get('email')"
        ></cx-form-errors>
      </label>

      <label>
        <span class="text-head">{{
          'myAccountV2Email.confirmNewEmailAddress' | cxTranslate
        }}</span>
        <input
          required="true"
          type="email"
          name="confirmEmail"
          formControlName="confirmEmail"
          placeholder="{{ 'myAccountV2Email.emailPlaceHolder' | cxTranslate }}"
          class="form-control"
          [attr.aria-invalid]="
            form.get('confirmEmail')?.touched &&
            form.get('confirmEmail')?.invalid
          "
          [attr.aria-errormessage]="'confirmEmailError'"
        />

        <cx-form-errors
          id="confirmEmailError"
          [translationParams]="{
            label: 'updateEmailForm.confirmNewEmailAddress.label' | cxTranslate,
          }"
          [control]="form.get('confirmEmail')"
        ></cx-form-errors>
      </label>

      <label>
        <span class="label-content, text-head">{{
          'myAccountV2Email.password' | cxTranslate
        }}</span>
        <input
          required="true"
          type="password"
          name="password"
          formControlName="password"
          placeholder="{{
            'myAccountV2Email.passwordPlaceHolder' | cxTranslate
          }}"
          class="form-control"
          autocomplete="new-password"
          [attr.aria-label]="
            'myAccountV2Email.passwordPlaceHolder' | cxTranslate
          "
          [attr.aria-invalid]="
            form.get('password')?.touched && form.get('password')?.invalid
          "
          [attr.aria-errormessage]="'passwordError'"
          cxPasswordVisibilitySwitch
        />

        <cx-form-errors
          id="passwordError"
          [translationParams]="{
            label: 'updateEmailForm.password.label' | cxTranslate,
          }"
          [control]="form.get('password')"
        ></cx-form-errors>
      </label>

      <div class="btn-group">
        <button class="btn button-cancel button" (click)="cancelEdit()">
          {{ 'common.cancel' | cxTranslate }}
        </button>
        <button
          class="btn btn-primary button"
          (click)="onSubmit()"
          [disabled]="form.disabled"
        >
          {{ 'common.save' | cxTranslate }}
        </button>
      </div>
    </form>
  </div>
</div>
`
    }]
  }], null, null);
})();
var USE_MY_ACCOUNT_V2_EMAIL = new InjectionToken("feature flag to enable enhanced UI for email related pages under My-Account", {
  providedIn: "root",
  factory: () => false
});
var myAccountV2EmailMapping = {
  cmsComponents: {
    UpdateEmailComponent: {
      component: MyAccountV2EmailComponent
    }
  }
};
var UpdateEmailModule = class _UpdateEmailModule {
  static {
    this.ɵfac = function UpdateEmailModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UpdateEmailModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UpdateEmailModule,
      declarations: [UpdateEmailComponent, MyAccountV2EmailComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, UrlModule, RouterModule, I18nModule, FormErrorsModule, PasswordVisibilityToggleModule, FeaturesConfigModule, MessageComponentModule, BtnLikeLinkModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      exports: [UpdateEmailComponent, MyAccountV2EmailComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          UpdateEmailComponent: {
            component: UpdateEmailComponent,
            guards: [AuthGuard],
            providers: [{
              provide: UpdateEmailComponentService,
              useClass: UpdateEmailComponentService,
              deps: [UserEmailFacade, RoutingService, GlobalMessageService, AuthService, AuthRedirectService]
            }]
          }
        }
      }), provideDefaultConfigFactory(() => inject(USE_MY_ACCOUNT_V2_EMAIL) ? myAccountV2EmailMapping : {})],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, UrlModule, RouterModule, I18nModule, FormErrorsModule, PasswordVisibilityToggleModule, FeaturesConfigModule, MessageComponentModule, BtnLikeLinkModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdateEmailModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, UrlModule, RouterModule, I18nModule, FormErrorsModule, PasswordVisibilityToggleModule, FeaturesConfigModule, MessageComponentModule, BtnLikeLinkModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      declarations: [UpdateEmailComponent, MyAccountV2EmailComponent],
      exports: [UpdateEmailComponent, MyAccountV2EmailComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          UpdateEmailComponent: {
            component: UpdateEmailComponent,
            guards: [AuthGuard],
            providers: [{
              provide: UpdateEmailComponentService,
              useClass: UpdateEmailComponentService,
              deps: [UserEmailFacade, RoutingService, GlobalMessageService, AuthService, AuthRedirectService]
            }]
          }
        }
      }), provideDefaultConfigFactory(() => inject(USE_MY_ACCOUNT_V2_EMAIL) ? myAccountV2EmailMapping : {})]
    }]
  }], null, null);
})();
var USE_MY_ACCOUNT_V2_PASSWORD = new InjectionToken("feature flag to enable enhanced UI for Update Password related pages under My-Account", {
  providedIn: "root",
  factory: () => false
});
var UpdatePasswordComponentService = class _UpdatePasswordComponentService {
  constructor(userPasswordService, routingService, globalMessageService, authRedirectService, authService) {
    this.userPasswordService = userPasswordService;
    this.routingService = routingService;
    this.globalMessageService = globalMessageService;
    this.authRedirectService = authRedirectService;
    this.authService = authService;
    this.featureConfigService = inject(FeatureConfigService);
    this.passwordValidators = this.featureConfigService.isEnabled("enableSecurePasswordValidation") ? CustomFormValidators.securePasswordValidators : [...CustomFormValidators.passwordValidators, CustomFormValidators.noConsecutiveCharacters];
    this.busy$ = new BehaviorSubject(false);
    this.usingV2 = inject(USE_MY_ACCOUNT_V2_PASSWORD);
    this.isUpdating$ = this.busy$.pipe(tap((state) => state === true ? this.form.disable() : this.form.enable()));
    this.form = new UntypedFormGroup({
      oldPassword: new UntypedFormControl("", Validators.required),
      newPassword: new UntypedFormControl("", [Validators.required, ...this.passwordValidators]),
      newPasswordConfirm: new UntypedFormControl("", Validators.required)
    }, {
      validators: this.getPasswordValidators()
    });
  }
  /**
   * Updates the password for the user.
   */
  updatePassword() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.busy$.next(true);
    const oldPassword = this.form.get("oldPassword")?.value;
    const newPassword = this.form.get("newPassword")?.value;
    this.userPasswordService.update(oldPassword, newPassword).subscribe({
      next: () => this.onSuccess(),
      error: (error) => this.onError(error)
    });
  }
  onSuccess() {
    this.globalMessageService.add({
      key: this.usingV2 ? "myAccountV2PasswordForm.passwordUpdateSuccess" : "updatePasswordForm.passwordUpdateSuccess"
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    this.busy$.next(false);
    this.form.reset();
    this.authRedirectService?.setRedirectUrl(this.routingService.getUrl({
      cxRoute: "home"
    }));
    this.authService?.coreLogout().then(() => {
      this.routingService.go({
        cxRoute: "login"
      });
    });
  }
  onError(_error) {
    if (_error instanceof HttpErrorModel && _error.details?.[0].type === "AccessDeniedError") {
      this.globalMessageService.add({
        key: this.usingV2 ? "myAccountV2PasswordForm.accessDeniedError" : "updatePasswordForm.accessDeniedError"
      }, GlobalMessageType.MSG_TYPE_ERROR);
    }
    this.busy$.next(false);
    this.form.reset();
  }
  getPasswordValidators() {
    return [CustomFormValidators.passwordsMustMatch("newPassword", "newPasswordConfirm"), CustomFormValidators.passwordsCannotMatch("oldPassword", "newPassword")];
  }
  static {
    this.ɵfac = function UpdatePasswordComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UpdatePasswordComponentService)(ɵɵinject(UserPasswordFacade), ɵɵinject(RoutingService), ɵɵinject(GlobalMessageService), ɵɵinject(AuthRedirectService), ɵɵinject(AuthService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UpdatePasswordComponentService,
      factory: _UpdatePasswordComponentService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdatePasswordComponentService, [{
    type: Injectable
  }], () => [{
    type: UserPasswordFacade
  }, {
    type: RoutingService
  }, {
    type: GlobalMessageService
  }, {
    type: AuthRedirectService
  }, {
    type: AuthService
  }], null);
})();
var UpdatePasswordComponent = class _UpdatePasswordComponent {
  constructor(service) {
    this.service = service;
    this.routingService = inject(RoutingService, {
      optional: true
    });
    this.form = this.service.form;
    this.isUpdating$ = this.service.isUpdating$;
    useFeatureStyles("a11yPasswordVisibliltyBtnValueOverflow");
  }
  onSubmit() {
    this.service.updatePassword();
  }
  navigateTo(cxRoute) {
    this.routingService?.go({
      cxRoute
    });
  }
  static {
    this.ɵfac = function UpdatePasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UpdatePasswordComponent)(ɵɵdirectiveInject(UpdatePasswordComponentService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UpdatePasswordComponent,
      selectors: [["cx-update-password"]],
      hostAttrs: ["ngSkipHydration", "true", 1, "user-form"],
      standalone: false,
      decls: 40,
      vars: 62,
      consts: [["class", "overlay", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "label-content"], ["required", "true", "type", "password", "name", "oldPassword", "formControlName", "oldPassword", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], ["id", "oldPasswordError", 3, "translationParams", "control"], ["required", "true", "type", "password", "name", "newPassword", "formControlName", "newPassword", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], ["id", "newPasswordError", 3, "translationParams", "control"], ["required", "true", "type", "password", "name", "newPasswordConfirm", "formControlName", "newPasswordConfirm", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], ["id", "newPasswordConfirmError", 3, "translationParams", "control"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "btn", "btn-block", "btn-primary", 3, "disabled"], [1, "overlay"]],
      template: function UpdatePasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, UpdatePasswordComponent_cx_spinner_0_Template, 1, 0, "cx-spinner", 0);
          ɵɵpipe(1, "async");
          ɵɵelement(2, "cx-form-required-legend");
          ɵɵelementStart(3, "form", 1);
          ɵɵlistener("ngSubmit", function UpdatePasswordComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmit();
          });
          ɵɵelementStart(4, "label")(5, "span", 2);
          ɵɵtext(6);
          ɵɵpipe(7, "cxTranslate");
          ɵɵelement(8, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(9, "input", 3);
          ɵɵpipe(10, "cxTranslate");
          ɵɵpipe(11, "cxTranslate");
          ɵɵelement(12, "cx-form-errors", 4);
          ɵɵpipe(13, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(14, "label")(15, "span", 2);
          ɵɵtext(16);
          ɵɵpipe(17, "cxTranslate");
          ɵɵelement(18, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(19, "input", 5);
          ɵɵpipe(20, "cxTranslate");
          ɵɵpipe(21, "cxTranslate");
          ɵɵelement(22, "cx-form-errors", 6);
          ɵɵpipe(23, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(24, "label")(25, "span", 2);
          ɵɵtext(26);
          ɵɵpipe(27, "cxTranslate");
          ɵɵelement(28, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(29, "input", 7);
          ɵɵpipe(30, "cxTranslate");
          ɵɵpipe(31, "cxTranslate");
          ɵɵelement(32, "cx-form-errors", 8);
          ɵɵpipe(33, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(34, "button", 9);
          ɵɵlistener("click", function UpdatePasswordComponent_Template_button_click_34_listener() {
            return ctx.navigateTo("home");
          });
          ɵɵtext(35);
          ɵɵpipe(36, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(37, "button", 10);
          ɵɵtext(38);
          ɵɵpipe(39, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          let tmp_5_0;
          let tmp_12_0;
          let tmp_19_0;
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 26, ctx.isUpdating$));
          ɵɵadvance(3);
          ɵɵproperty("formGroup", ctx.form);
          ɵɵadvance(3);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(7, 28, "updatePasswordForm.oldPassword.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(10, 30, "updatePasswordForm.oldPassword.placeholder"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(11, 32, "updatePasswordForm.oldPassword.placeholder"))("aria-invalid", ((tmp_5_0 = ctx.form.get("oldPassword")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.form.get("oldPassword")) == null ? null : tmp_5_0.invalid))("aria-errormessage", "oldPasswordError");
          ɵɵadvance(3);
          ɵɵproperty("translationParams", ɵɵpureFunction1(56, _c1, ɵɵpipeBind1(13, 34, "updatePasswordForm.oldPassword.label")))("control", ctx.form.get("oldPassword"));
          ɵɵadvance(4);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(17, 36, "updatePasswordForm.newPassword.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(20, 38, "updatePasswordForm.newPassword.placeholder"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(21, 40, "updatePasswordForm.newPassword.placeholder"))("aria-invalid", ((tmp_12_0 = ctx.form.get("newPassword")) == null ? null : tmp_12_0.touched) && ((tmp_12_0 = ctx.form.get("newPassword")) == null ? null : tmp_12_0.invalid))("aria-errormessage", "newPasswordError");
          ɵɵadvance(3);
          ɵɵproperty("translationParams", ɵɵpureFunction1(58, _c1, ɵɵpipeBind1(23, 42, "updatePasswordForm.newPassword.label")))("control", ctx.form.get("newPassword"));
          ɵɵadvance(4);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(27, 44, "updatePasswordForm.confirmPassword.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(30, 46, "updatePasswordForm.confirmPassword.placeholder"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(31, 48, "updatePasswordForm.confirmPassword.placeholder"))("aria-invalid", ((tmp_19_0 = ctx.form.get("newPasswordConfirm")) == null ? null : tmp_19_0.touched) && ((tmp_19_0 = ctx.form.get("newPasswordConfirm")) == null ? null : tmp_19_0.invalid))("aria-errormessage", "newPasswordConfirmError");
          ɵɵadvance(3);
          ɵɵproperty("translationParams", ɵɵpureFunction1(60, _c1, ɵɵpipeBind1(33, 50, "updatePasswordForm.confirmPassword.label")))("control", ctx.form.get("newPasswordConfirm"));
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(36, 52, "common.cancel"), " ");
          ɵɵadvance(2);
          ɵɵproperty("disabled", ctx.form.disabled);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(39, 54, "common.save"), " ");
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, SpinnerComponent, FormErrorsComponent, PasswordVisibilityToggleDirective, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdatePasswordComponent, [{
    type: Component,
    args: [{
      selector: "cx-update-password",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "user-form",
        ngSkipHydration: "true"
      },
      standalone: false,
      template: `<cx-spinner class="overlay" *ngIf="isUpdating$ | async"> </cx-spinner>
<!-- TODO: (CXSPA-5953) Remove feature flags next major -->
<cx-form-required-legend />
<form (ngSubmit)="onSubmit()" [formGroup]="form">
  <label>
    <span class="label-content"
      >{{ 'updatePasswordForm.oldPassword.label' | cxTranslate }}
      <cx-form-required-asterisks />
    </span>
    <input
      required="true"
      class="form-control"
      type="password"
      name="oldPassword"
      placeholder="{{
        'updatePasswordForm.oldPassword.placeholder' | cxTranslate
      }}"
      formControlName="oldPassword"
      [attr.aria-label]="
        'updatePasswordForm.oldPassword.placeholder' | cxTranslate
      "
      [attr.aria-invalid]="
        form.get('oldPassword')?.touched && form.get('oldPassword')?.invalid
      "
      [attr.aria-errormessage]="'oldPasswordError'"
      cxPasswordVisibilitySwitch
    />

    <cx-form-errors
      id="oldPasswordError"
      [translationParams]="{
        label: 'updatePasswordForm.oldPassword.label' | cxTranslate,
      }"
      [control]="form.get('oldPassword')"
    ></cx-form-errors>
  </label>

  <label>
    <span class="label-content"
      >{{ 'updatePasswordForm.newPassword.label' | cxTranslate }}
      <cx-form-required-asterisks />
    </span>
    <input
      required="true"
      class="form-control"
      type="password"
      name="newPassword"
      placeholder="{{
        'updatePasswordForm.newPassword.placeholder' | cxTranslate
      }}"
      formControlName="newPassword"
      [attr.aria-label]="
        'updatePasswordForm.newPassword.placeholder' | cxTranslate
      "
      [attr.aria-invalid]="
        form.get('newPassword')?.touched && form.get('newPassword')?.invalid
      "
      [attr.aria-errormessage]="'newPasswordError'"
      cxPasswordVisibilitySwitch
    />

    <cx-form-errors
      id="newPasswordError"
      [translationParams]="{
        label: 'updatePasswordForm.newPassword.label' | cxTranslate,
      }"
      [control]="form.get('newPassword')"
    ></cx-form-errors>
  </label>

  <label>
    <span class="label-content"
      >{{ 'updatePasswordForm.confirmPassword.label' | cxTranslate }}
      <cx-form-required-asterisks />
    </span>
    <input
      required="true"
      class="form-control"
      type="password"
      name="newPasswordConfirm"
      placeholder="{{
        'updatePasswordForm.confirmPassword.placeholder' | cxTranslate
      }}"
      formControlName="newPasswordConfirm"
      [attr.aria-label]="
        'updatePasswordForm.confirmPassword.placeholder' | cxTranslate
      "
      [attr.aria-invalid]="
        form.get('newPasswordConfirm')?.touched &&
        form.get('newPasswordConfirm')?.invalid
      "
      [attr.aria-errormessage]="'newPasswordConfirmError'"
      cxPasswordVisibilitySwitch
    />

    <cx-form-errors
      id="newPasswordConfirmError"
      [translationParams]="{
        label: 'updatePasswordForm.confirmPassword.label' | cxTranslate,
      }"
      [control]="form.get('newPasswordConfirm')"
    ></cx-form-errors>
  </label>

  <button class="btn btn-block btn-secondary" (click)="navigateTo('home')">
    {{ 'common.cancel' | cxTranslate }}
  </button>
  <button class="btn btn-block btn-primary" [disabled]="form.disabled">
    {{ 'common.save' | cxTranslate }}
  </button>
</form>
`
    }]
  }], () => [{
    type: UpdatePasswordComponentService
  }], {
    routingService: [{
      type: Optional
    }]
  });
})();
var MyAccountV2PasswordComponent = class _MyAccountV2PasswordComponent {
  constructor() {
    this.service = inject(UpdatePasswordComponentService);
    this.showingAlert = true;
    this.globalMessageType = GlobalMessageType;
    this.form = this.service.form;
    this.isUpdating$ = this.service.isUpdating$;
    useFeatureStyles("a11yPasswordVisibliltyBtnValueOverflow");
  }
  onSubmit() {
    this.service.updatePassword();
  }
  onCancel() {
    this.oldPassword = "";
    this.newPassword = "";
    this.newPasswordConfirm = "";
  }
  closeDialogConfirmationAlert() {
    this.showingAlert = false;
  }
  static {
    this.ɵfac = function MyAccountV2PasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAccountV2PasswordComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MyAccountV2PasswordComponent,
      selectors: [["cx-my-account-v2-password"]],
      hostAttrs: ["ngSkipHydration", "true"],
      standalone: false,
      decls: 41,
      vars: 69,
      consts: [["class", "overlay", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "myaccount-password-header"], [3, "text", "type", "closeMessage", 4, "ngIf"], [1, "myaccount-label-padding"], [1, "label-content", "myaccount-password-label"], ["required", "true", "type", "password", "name", "oldPassword", "formControlName", "oldPassword", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["id", "oldPasswordError", 3, "translationParams", "control"], ["required", "true", "type", "password", "name", "newPassword", "formControlName", "newPassword", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["id", "newPasswordError", 3, "translationParams", "control"], ["required", "true", "type", "password", "name", "newPasswordConfirm", "formControlName", "newPasswordConfirm", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["id", "newPasswordConfirmError", 3, "translationParams", "control"], [1, "password-btn-group"], [1, "btn", "myaccount-password-button", "myaccount-password-button-cancel", 3, "click"], [1, "btn", "btn-primary", "myaccount-password-button", 3, "disabled"], [1, "overlay"], [3, "closeMessage", "text", "type"]],
      template: function MyAccountV2PasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, MyAccountV2PasswordComponent_cx_spinner_0_Template, 1, 0, "cx-spinner", 0);
          ɵɵpipe(1, "async");
          ɵɵelementStart(2, "form", 1);
          ɵɵlistener("ngSubmit", function MyAccountV2PasswordComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });
          ɵɵelementStart(3, "label", 2);
          ɵɵtext(4);
          ɵɵpipe(5, "cxTranslate");
          ɵɵelementEnd();
          ɵɵtemplate(6, MyAccountV2PasswordComponent_cx_message_6_Template, 2, 4, "cx-message", 3);
          ɵɵelementStart(7, "label", 4)(8, "span", 5);
          ɵɵtext(9);
          ɵɵpipe(10, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(11, "input", 6);
          ɵɵpipe(12, "cxTranslate");
          ɵɵpipe(13, "cxTranslate");
          ɵɵtwoWayListener("ngModelChange", function MyAccountV2PasswordComponent_Template_input_ngModelChange_11_listener($event) {
            ɵɵtwoWayBindingSet(ctx.oldPassword, $event) || (ctx.oldPassword = $event);
            return $event;
          });
          ɵɵelementEnd();
          ɵɵelement(14, "cx-form-errors", 7);
          ɵɵpipe(15, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(16, "label", 4)(17, "span", 5);
          ɵɵtext(18);
          ɵɵpipe(19, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(20, "input", 8);
          ɵɵpipe(21, "cxTranslate");
          ɵɵpipe(22, "cxTranslate");
          ɵɵtwoWayListener("ngModelChange", function MyAccountV2PasswordComponent_Template_input_ngModelChange_20_listener($event) {
            ɵɵtwoWayBindingSet(ctx.newPassword, $event) || (ctx.newPassword = $event);
            return $event;
          });
          ɵɵelementEnd();
          ɵɵelement(23, "cx-form-errors", 9);
          ɵɵpipe(24, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(25, "label", 4)(26, "span", 5);
          ɵɵtext(27);
          ɵɵpipe(28, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(29, "input", 10);
          ɵɵpipe(30, "cxTranslate");
          ɵɵpipe(31, "cxTranslate");
          ɵɵtwoWayListener("ngModelChange", function MyAccountV2PasswordComponent_Template_input_ngModelChange_29_listener($event) {
            ɵɵtwoWayBindingSet(ctx.newPasswordConfirm, $event) || (ctx.newPasswordConfirm = $event);
            return $event;
          });
          ɵɵelementEnd();
          ɵɵelement(32, "cx-form-errors", 11);
          ɵɵpipe(33, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(34, "div", 12)(35, "button", 13);
          ɵɵlistener("click", function MyAccountV2PasswordComponent_Template_button_click_35_listener() {
            return ctx.onCancel();
          });
          ɵɵtext(36);
          ɵɵpipe(37, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(38, "button", 14);
          ɵɵtext(39);
          ɵɵpipe(40, "cxTranslate");
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          let tmp_8_0;
          let tmp_16_0;
          let tmp_24_0;
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 31, ctx.isUpdating$));
          ɵɵadvance(2);
          ɵɵproperty("formGroup", ctx.form);
          ɵɵadvance(2);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(5, 33, "myAccountV2PasswordForm.newPasswordTitle"), " ");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.showingAlert);
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(10, 35, "myAccountV2PasswordForm.oldPassword.label"));
          ɵɵadvance(2);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(12, 37, "myAccountV2PasswordForm.oldPassword.placeholder"));
          ɵɵtwoWayProperty("ngModel", ctx.oldPassword);
          ɵɵattribute("aria-label", ɵɵpipeBind1(13, 39, "myAccountV2PasswordForm.oldPassword.placeholder"))("aria-invalid", ((tmp_8_0 = ctx.form.get("oldPassword")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = ctx.form.get("oldPassword")) == null ? null : tmp_8_0.invalid))("aria-errormessage", "oldPasswordError");
          ɵɵadvance(3);
          ɵɵproperty("translationParams", ɵɵpureFunction1(63, _c1, ɵɵpipeBind1(15, 41, "updatePasswordForm.oldPassword.label")))("control", ctx.form.get("oldPassword"));
          ɵɵadvance(4);
          ɵɵtextInterpolate(ɵɵpipeBind1(19, 43, "myAccountV2PasswordForm.newPassword.label"));
          ɵɵadvance(2);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(21, 45, "myAccountV2PasswordForm.newPassword.placeholder"));
          ɵɵtwoWayProperty("ngModel", ctx.newPassword);
          ɵɵattribute("aria-label", ɵɵpipeBind1(22, 47, "myAccountV2PasswordForm.newPassword.placeholder"))("aria-invalid", ((tmp_16_0 = ctx.form.get("newPassword")) == null ? null : tmp_16_0.touched) && ((tmp_16_0 = ctx.form.get("newPassword")) == null ? null : tmp_16_0.invalid))("aria-errormessage", "newPasswordError");
          ɵɵadvance(3);
          ɵɵproperty("translationParams", ɵɵpureFunction1(65, _c1, ɵɵpipeBind1(24, 49, "updatePasswordForm.newPassword.label")))("control", ctx.form.get("newPassword"));
          ɵɵadvance(4);
          ɵɵtextInterpolate(ɵɵpipeBind1(28, 51, "myAccountV2PasswordForm.confirmPassword.label"));
          ɵɵadvance(2);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(30, 53, "myAccountV2PasswordForm.confirmPassword.placeholder"));
          ɵɵtwoWayProperty("ngModel", ctx.newPasswordConfirm);
          ɵɵattribute("aria-label", ɵɵpipeBind1(31, 55, "myAccountV2PasswordForm.confirmPassword.placeholder"))("aria-invalid", ((tmp_24_0 = ctx.form.get("newPasswordConfirm")) == null ? null : tmp_24_0.touched) && ((tmp_24_0 = ctx.form.get("newPasswordConfirm")) == null ? null : tmp_24_0.invalid))("aria-errormessage", "newPasswordConfirmError");
          ɵɵadvance(3);
          ɵɵproperty("translationParams", ɵɵpureFunction1(67, _c1, ɵɵpipeBind1(33, 57, "updatePasswordForm.confirmPassword.label")))("control", ctx.form.get("newPasswordConfirm"));
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(37, 59, "common.cancel"), " ");
          ɵɵadvance(2);
          ɵɵproperty("disabled", ctx.form.disabled);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(40, 61, "common.save"), " ");
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, SpinnerComponent, FormErrorsComponent, PasswordVisibilityToggleDirective, MessageComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2PasswordComponent, [{
    type: Component,
    args: [{
      selector: "cx-my-account-v2-password",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      host: {
        ngSkipHydration: "true"
      },
      template: `<cx-spinner class="overlay" *ngIf="isUpdating$ | async"> </cx-spinner>

<form (ngSubmit)="onSubmit()" [formGroup]="form">
  <label class="myaccount-password-header"
    >{{ 'myAccountV2PasswordForm.newPasswordTitle' | cxTranslate }}
  </label>

  <cx-message
    *ngIf="showingAlert"
    [text]="'myAccountV2PasswordForm.reloginIndicator' | cxTranslate"
    [type]="globalMessageType.MSG_TYPE_INFO"
    (closeMessage)="closeDialogConfirmationAlert()"
  >
  </cx-message>

  <label class="myaccount-label-padding">
    <span class="label-content myaccount-password-label">{{
      'myAccountV2PasswordForm.oldPassword.label' | cxTranslate
    }}</span>
    <input
      required="true"
      class="form-control"
      [(ngModel)]="oldPassword"
      type="password"
      name="oldPassword"
      placeholder="{{
        'myAccountV2PasswordForm.oldPassword.placeholder' | cxTranslate
      }}"
      formControlName="oldPassword"
      [attr.aria-label]="
        'myAccountV2PasswordForm.oldPassword.placeholder' | cxTranslate
      "
      [attr.aria-invalid]="
        form.get('oldPassword')?.touched && form.get('oldPassword')?.invalid
      "
      [attr.aria-errormessage]="'oldPasswordError'"
      cxPasswordVisibilitySwitch
    />

    <cx-form-errors
      id="oldPasswordError"
      [translationParams]="{
        label: 'updatePasswordForm.oldPassword.label' | cxTranslate,
      }"
      [control]="form.get('oldPassword')"
    ></cx-form-errors>
  </label>

  <label class="myaccount-label-padding">
    <span class="label-content myaccount-password-label">{{
      'myAccountV2PasswordForm.newPassword.label' | cxTranslate
    }}</span>
    <input
      required="true"
      class="form-control"
      [(ngModel)]="newPassword"
      type="password"
      name="newPassword"
      placeholder="{{
        'myAccountV2PasswordForm.newPassword.placeholder' | cxTranslate
      }}"
      formControlName="newPassword"
      [attr.aria-label]="
        'myAccountV2PasswordForm.newPassword.placeholder' | cxTranslate
      "
      [attr.aria-invalid]="
        form.get('newPassword')?.touched && form.get('newPassword')?.invalid
      "
      [attr.aria-errormessage]="'newPasswordError'"
      cxPasswordVisibilitySwitch
    />

    <cx-form-errors
      id="newPasswordError"
      [translationParams]="{
        label: 'updatePasswordForm.newPassword.label' | cxTranslate,
      }"
      [control]="form.get('newPassword')"
    ></cx-form-errors>
  </label>

  <label class="myaccount-label-padding">
    <span class="label-content myaccount-password-label">{{
      'myAccountV2PasswordForm.confirmPassword.label' | cxTranslate
    }}</span>
    <input
      required="true"
      class="form-control"
      [(ngModel)]="newPasswordConfirm"
      type="password"
      name="newPasswordConfirm"
      placeholder="{{
        'myAccountV2PasswordForm.confirmPassword.placeholder' | cxTranslate
      }}"
      formControlName="newPasswordConfirm"
      [attr.aria-label]="
        'myAccountV2PasswordForm.confirmPassword.placeholder' | cxTranslate
      "
      [attr.aria-invalid]="
        form.get('newPasswordConfirm')?.touched &&
        form.get('newPasswordConfirm')?.invalid
      "
      [attr.aria-errormessage]="'newPasswordConfirmError'"
      cxPasswordVisibilitySwitch
    />

    <cx-form-errors
      id="newPasswordConfirmError"
      [translationParams]="{
        label: 'updatePasswordForm.confirmPassword.label' | cxTranslate,
      }"
      [control]="form.get('newPasswordConfirm')"
    ></cx-form-errors>
  </label>

  <div class="password-btn-group">
    <button
      class="btn myaccount-password-button myaccount-password-button-cancel"
      (click)="onCancel()"
    >
      {{ 'common.cancel' | cxTranslate }}
    </button>
    <button
      class="btn btn-primary myaccount-password-button"
      [disabled]="form.disabled"
    >
      {{ 'common.save' | cxTranslate }}
    </button>
  </div>
</form>
`
    }]
  }], () => [], null);
})();
var myAccountV2PasswordMapping = {
  cmsComponents: {
    UpdatePasswordComponent: {
      component: MyAccountV2PasswordComponent
    }
  }
};
var UpdatePasswordModule = class _UpdatePasswordModule {
  static {
    this.ɵfac = function UpdatePasswordModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UpdatePasswordModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UpdatePasswordModule,
      declarations: [UpdatePasswordComponent, MyAccountV2PasswordComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, I18nModule, FormErrorsModule, UrlModule, RouterModule, PasswordVisibilityToggleModule, FeaturesConfigModule, MessageComponentModule, BtnLikeLinkModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      exports: [UpdatePasswordComponent, MyAccountV2PasswordComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          UpdatePasswordComponent: {
            component: UpdatePasswordComponent,
            guards: [AuthGuard],
            providers: [{
              provide: UpdatePasswordComponentService,
              useClass: UpdatePasswordComponentService,
              deps: [UserPasswordFacade, RoutingService, GlobalMessageService, AuthRedirectService, AuthService]
            }]
          }
        }
      }), provideDefaultConfigFactory(() => inject(USE_MY_ACCOUNT_V2_PASSWORD) ? myAccountV2PasswordMapping : {})],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, I18nModule, FormErrorsModule, UrlModule, RouterModule, PasswordVisibilityToggleModule, FeaturesConfigModule, MessageComponentModule, BtnLikeLinkModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdatePasswordModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, I18nModule, FormErrorsModule, UrlModule, RouterModule, PasswordVisibilityToggleModule, FeaturesConfigModule, MessageComponentModule, BtnLikeLinkModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          UpdatePasswordComponent: {
            component: UpdatePasswordComponent,
            guards: [AuthGuard],
            providers: [{
              provide: UpdatePasswordComponentService,
              useClass: UpdatePasswordComponentService,
              deps: [UserPasswordFacade, RoutingService, GlobalMessageService, AuthRedirectService, AuthService]
            }]
          }
        }
      }), provideDefaultConfigFactory(() => inject(USE_MY_ACCOUNT_V2_PASSWORD) ? myAccountV2PasswordMapping : {})],
      declarations: [UpdatePasswordComponent, MyAccountV2PasswordComponent],
      exports: [UpdatePasswordComponent, MyAccountV2PasswordComponent]
    }]
  }], null, null);
})();
var UpdateProfileComponentService = class _UpdateProfileComponentService {
  constructor(userProfile, globalMessageService) {
    this.userProfile = userProfile;
    this.globalMessageService = globalMessageService;
    this.user$ = this.userProfile.get().pipe(filter((user) => Boolean(user)));
    this.busy$ = new BehaviorSubject(false);
    this.updateSucceed$ = new Subject();
    this.isUpdating$ = this.user$.pipe(tap((user) => this.form.patchValue(user)), switchMap((_user) => this.busy$), tap((state) => state === true ? this.form.disable() : this.form.enable()));
    this.titles$ = this.userProfile.getTitles();
    this.form = new UntypedFormGroup({
      customerId: new UntypedFormControl(""),
      titleCode: new UntypedFormControl(""),
      firstName: new UntypedFormControl("", Validators.required),
      lastName: new UntypedFormControl("", Validators.required)
    });
  }
  /**
   * Updates the user's details and handles the UI.
   */
  updateProfile() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.busy$.next(true);
    this.userProfile.update(this.form.value).subscribe({
      next: () => this.onSuccess(),
      error: (error) => this.onError(error)
    });
  }
  onSuccess() {
    this.globalMessageService.add({
      key: "updateProfileForm.profileUpdateSuccess"
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    this.busy$.next(false);
    this.form.reset();
    this.updateSucceed$.next(true);
  }
  onError(_error) {
    this.busy$.next(false);
    this.updateSucceed$.next(false);
  }
  static {
    this.ɵfac = function UpdateProfileComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UpdateProfileComponentService)(ɵɵinject(UserProfileFacade), ɵɵinject(GlobalMessageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UpdateProfileComponentService,
      factory: _UpdateProfileComponentService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdateProfileComponentService, [{
    type: Injectable
  }], () => [{
    type: UserProfileFacade
  }, {
    type: GlobalMessageService
  }], null);
})();
var UpdateProfileComponent = class _UpdateProfileComponent {
  constructor(service) {
    this.service = service;
    this.routingService = inject(RoutingService, {
      optional: true
    });
    this.form = this.service.form;
    this.isUpdating$ = this.service.isUpdating$;
    this.titles$ = this.service.titles$;
  }
  onSubmit() {
    this.service.updateProfile();
  }
  navigateTo(cxRoute) {
    this.routingService?.go({
      cxRoute
    });
  }
  static {
    this.ɵfac = function UpdateProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UpdateProfileComponent)(ɵɵdirectiveInject(UpdateProfileComponentService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UpdateProfileComponent,
      selectors: [["cx-update-profile"]],
      hostAttrs: [1, "user-form"],
      standalone: false,
      decls: 43,
      vars: 63,
      consts: [["class", "overlay", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "label-content"], ["formControlName", "titleCode", "id", "title-select", 3, "clearable", "searchable", "cxNgSelectA11y"], [3, "value", 4, "ngFor", "ngForOf"], ["required", "true", "type", "text", "name", "firstName", "formControlName", "firstName", 1, "form-control", 3, "placeholder"], ["id", "firstNameError", 3, "translationParams", "control"], ["required", "true", "type", "text", "name", "lastName", "formControlName", "lastName", 1, "form-control", 3, "placeholder"], ["id", "lastNameError", 3, "translationParams", "control"], ["required", "true", "type", "text", "name", "customerId", "formControlName", "customerId", "readonly", "", 1, "form-control"], ["id", "customerIdError", 3, "translationParams", "control"], ["type", "button", 1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "btn", "btn-block", "btn-primary", 3, "disabled"], [1, "overlay"], [3, "value"]],
      template: function UpdateProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, UpdateProfileComponent_cx_spinner_0_Template, 1, 0, "cx-spinner", 0);
          ɵɵpipe(1, "async");
          ɵɵelement(2, "cx-form-required-legend");
          ɵɵelementStart(3, "form", 1);
          ɵɵlistener("ngSubmit", function UpdateProfileComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmit();
          });
          ɵɵelementStart(4, "label")(5, "span", 2);
          ɵɵtext(6);
          ɵɵpipe(7, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(8, "ng-select", 3);
          ɵɵpipe(9, "cxTranslate");
          ɵɵtemplate(10, UpdateProfileComponent_ng_option_10_Template, 2, 2, "ng-option", 4);
          ɵɵpipe(11, "async");
          ɵɵelementEnd()();
          ɵɵelementStart(12, "label")(13, "span", 2);
          ɵɵtext(14);
          ɵɵpipe(15, "cxTranslate");
          ɵɵelement(16, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(17, "input", 5);
          ɵɵpipe(18, "cxTranslate");
          ɵɵelement(19, "cx-form-errors", 6);
          ɵɵpipe(20, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(21, "label")(22, "span", 2);
          ɵɵtext(23);
          ɵɵpipe(24, "cxTranslate");
          ɵɵelement(25, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(26, "input", 7);
          ɵɵpipe(27, "cxTranslate");
          ɵɵelement(28, "cx-form-errors", 8);
          ɵɵpipe(29, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(30, "label")(31, "span", 2);
          ɵɵtext(32);
          ɵɵpipe(33, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelement(34, "input", 9)(35, "cx-form-errors", 10);
          ɵɵpipe(36, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(37, "button", 11);
          ɵɵlistener("click", function UpdateProfileComponent_Template_button_click_37_listener() {
            return ctx.navigateTo("home");
          });
          ɵɵtext(38);
          ɵɵpipe(39, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(40, "button", 12);
          ɵɵtext(41);
          ɵɵpipe(42, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          let tmp_9_0;
          let tmp_15_0;
          let tmp_20_0;
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 27, ctx.isUpdating$));
          ɵɵadvance(3);
          ɵɵproperty("formGroup", ctx.form);
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(7, 29, "updateProfileForm.title"));
          ɵɵadvance(2);
          ɵɵproperty("clearable", false)("searchable", false)("cxNgSelectA11y", ɵɵpureFunction1(55, _c6, ɵɵpipeBind1(9, 31, "updateProfileForm.title")));
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ɵɵpipeBind1(11, 33, ctx.titles$));
          ɵɵadvance(4);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(15, 35, "updateProfileForm.firstName.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(18, 37, "updateProfileForm.firstName.placeholder"));
          ɵɵattribute("aria-invalid", ((tmp_9_0 = ctx.form.get("firstName")) == null ? null : tmp_9_0.touched) && ((tmp_9_0 = ctx.form.get("firstName")) == null ? null : tmp_9_0.invalid))("aria-errormessage", "firstNameError");
          ɵɵadvance(2);
          ɵɵproperty("translationParams", ɵɵpureFunction1(57, _c1, ɵɵpipeBind1(20, 39, "updateProfileForm.firstName.label")))("control", ctx.form.get("firstName"));
          ɵɵadvance(4);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(24, 41, "updateProfileForm.lastName.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(27, 43, "updateProfileForm.lastName.placeholder"));
          ɵɵattribute("aria-invalid", ((tmp_15_0 = ctx.form.get("lastName")) == null ? null : tmp_15_0.touched) && ((tmp_15_0 = ctx.form.get("lastName")) == null ? null : tmp_15_0.invalid))("aria-errormessage", "lastNameError");
          ɵɵadvance(2);
          ɵɵproperty("translationParams", ɵɵpureFunction1(59, _c1, ɵɵpipeBind1(29, 45, "updateProfileForm.lastName.label")))("control", ctx.form.get("lastName"));
          ɵɵadvance(4);
          ɵɵtextInterpolate(ɵɵpipeBind1(33, 47, "updateProfileForm.customerId"));
          ɵɵadvance(2);
          ɵɵattribute("aria-invalid", ((tmp_20_0 = ctx.form.get("customerId")) == null ? null : tmp_20_0.touched) && ((tmp_20_0 = ctx.form.get("customerId")) == null ? null : tmp_20_0.invalid))("aria-errormessage", "customerIdError");
          ɵɵadvance();
          ɵɵproperty("translationParams", ɵɵpureFunction1(61, _c1, ɵɵpipeBind1(36, 49, "updateProfileForm.customerId")))("control", ctx.form.get("customerId"));
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(39, 51, "common.cancel"), " ");
          ɵɵadvance(2);
          ɵɵproperty("disabled", ctx.form.disabled);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(42, 53, "common.save"), " ");
        }
      },
      dependencies: [NgForOf, NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, SpinnerComponent, FormErrorsComponent, NgSelectComponent, NgOptionComponent, NgSelectA11yDirective, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdateProfileComponent, [{
    type: Component,
    args: [{
      selector: "cx-update-profile",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "user-form"
      },
      standalone: false,
      template: `<cx-spinner class="overlay" *ngIf="isUpdating$ | async"> </cx-spinner>
<!-- TODO: (CXSPA-5953) Remove feature flags next major -->
<cx-form-required-legend />
<form (ngSubmit)="onSubmit()" [formGroup]="form">
  <label>
    <span class="label-content">{{
      'updateProfileForm.title' | cxTranslate
    }}</span>
    <ng-select
      [clearable]="false"
      [searchable]="false"
      formControlName="titleCode"
      id="title-select"
      [cxNgSelectA11y]="{
        ariaLabel: 'updateProfileForm.title' | cxTranslate,
      }"
    >
      <ng-option *ngFor="let title of titles$ | async" [value]="title.code">{{
        title.name
      }}</ng-option>
    </ng-select>
  </label>
  <label>
    <span class="label-content"
      >{{ 'updateProfileForm.firstName.label' | cxTranslate }}
      <cx-form-required-asterisks />
    </span>
    <input
      required="true"
      type="text"
      class="form-control"
      name="firstName"
      placeholder="{{
        'updateProfileForm.firstName.placeholder' | cxTranslate
      }}"
      formControlName="firstName"
      [attr.aria-invalid]="
        form.get('firstName')?.touched && form.get('firstName')?.invalid
      "
      [attr.aria-errormessage]="'firstNameError'"
    />

    <cx-form-errors
      id="firstNameError"
      [translationParams]="{
        label: 'updateProfileForm.firstName.label' | cxTranslate,
      }"
      [control]="form.get('firstName')"
    ></cx-form-errors>
  </label>

  <label>
    <span class="label-content"
      >{{ 'updateProfileForm.lastName.label' | cxTranslate }}
      <cx-form-required-asterisks />
    </span>
    <input
      required="true"
      type="text"
      class="form-control"
      name="lastName"
      placeholder="{{ 'updateProfileForm.lastName.placeholder' | cxTranslate }}"
      formControlName="lastName"
      [attr.aria-invalid]="
        form.get('lastName')?.touched && form.get('lastName')?.invalid
      "
      [attr.aria-errormessage]="'lastNameError'"
    />

    <cx-form-errors
      id="lastNameError"
      [translationParams]="{
        label: 'updateProfileForm.lastName.label' | cxTranslate,
      }"
      [control]="form.get('lastName')"
    ></cx-form-errors>
  </label>

  <label>
    <span class="label-content">{{
      'updateProfileForm.customerId' | cxTranslate
    }}</span>
    <input
      required="true"
      type="text"
      class="form-control"
      name="customerId"
      formControlName="customerId"
      [attr.aria-invalid]="
        form.get('customerId')?.touched && form.get('customerId')?.invalid
      "
      [attr.aria-errormessage]="'customerIdError'"
      readonly
    />

    <cx-form-errors
      id="customerIdError"
      [translationParams]="{
        label: 'updateProfileForm.customerId' | cxTranslate,
      }"
      [control]="form.get('customerId')"
    ></cx-form-errors>
  </label>

  <button
    type="button"
    class="btn btn-block btn-secondary"
    (click)="navigateTo('home')"
  >
    {{ 'common.cancel' | cxTranslate }}
  </button>
  <button class="btn btn-block btn-primary" [disabled]="form.disabled">
    {{ 'common.save' | cxTranslate }}
  </button>
</form>
`
    }]
  }], () => [{
    type: UpdateProfileComponentService
  }], {
    routingService: [{
      type: Optional
    }]
  });
})();
var MyAccountV2ProfileComponent = class _MyAccountV2ProfileComponent {
  constructor() {
    this.service = inject(UpdateProfileComponentService);
    this.form = this.service.form;
    this.isUpdating$ = this.service.isUpdating$;
    this.titles$ = this.service.titles$;
    this.user$ = this.service.user$;
  }
  ngOnInit() {
    this.isEditing = false;
  }
  onSubmit() {
    this.service.updateProfile();
    this.service.updateSucceed$.subscribe((res) => {
      this.isEditing = !res;
    });
  }
  cancelEdit() {
    this.isEditing = false;
    this.form.setValue(this.originalEditValue);
  }
  onEdit() {
    this.isEditing = true;
    this.originalEditValue = this.form.value;
  }
  static {
    this.ɵfac = function MyAccountV2ProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAccountV2ProfileComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MyAccountV2ProfileComponent,
      selectors: [["cx-my-account-v2-profile"]],
      standalone: false,
      decls: 12,
      vars: 11,
      consts: [["class", "overlay", 4, "ngIf"], [1, "flex-line"], [1, "headertext"], ["class", "editButton", 3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "myaccount-editing-area", 4, "ngIf"], [1, "overlay"], [1, "editButton", 3, "click"], [1, "text-head"], [1, "value"], [1, "myaccount-editing-area"], [3, "ngSubmit", "formGroup"], [1, "label-content,", "text-head"], ["formControlName", "titleCode", "id", "title-select", 3, "clearable", "searchable", "cxNgSelectA11y"], [3, "value", 4, "ngFor", "ngForOf"], ["required", "true", "type", "text", "name", "firstName", "formControlName", "firstName", 1, "form-control"], ["id", "firstNameError", 3, "translationParams", "control"], ["required", "true", "type", "text", "name", "lastName", "formControlName", "lastName", 1, "form-control"], ["id", "lastNameError", 3, "translationParams", "control"], ["required", "true", "type", "text", "name", "customerId", "formControlName", "customerId", "readonly", "", 1, "form-control"], ["id", "customerIdError", 3, "translationParams", "control"], [1, "btn-group"], [1, "btn", "button-cancel", "button", 3, "click"], [1, "btn", "btn-primary", "button", 3, "click", "disabled"], [3, "value"]],
      template: function MyAccountV2ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, MyAccountV2ProfileComponent_cx_spinner_0_Template, 1, 0, "cx-spinner", 0);
          ɵɵpipe(1, "async");
          ɵɵpipe(2, "async");
          ɵɵelementStart(3, "div")(4, "div")(5, "div", 1)(6, "label", 2);
          ɵɵtext(7);
          ɵɵpipe(8, "cxTranslate");
          ɵɵelementEnd();
          ɵɵtemplate(9, MyAccountV2ProfileComponent_button_9_Template, 3, 3, "button", 3);
          ɵɵelementEnd()();
          ɵɵtemplate(10, MyAccountV2ProfileComponent_div_10_Template, 23, 21, "div", 4)(11, MyAccountV2ProfileComponent_div_11_Template, 38, 54, "div", 5);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 5, ctx.isUpdating$) || !ɵɵpipeBind1(2, 7, ctx.user$));
          ɵɵadvance(7);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(8, 9, "myAccountV2UserProfile.myInformation"), " ");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", !ctx.isEditing);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.isEditing);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.isEditing);
        }
      },
      dependencies: [NgForOf, NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, SpinnerComponent, FormErrorsComponent, NgSelectComponent, NgOptionComponent, NgSelectA11yDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2ProfileComponent, [{
    type: Component,
    args: [{
      selector: "cx-my-account-v2-profile",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<cx-spinner class="overlay" *ngIf="(isUpdating$ | async) || !(user$ | async)">
</cx-spinner>
<div>
  <div>
    <div class="flex-line">
      <label class="headertext"
        >{{ 'myAccountV2UserProfile.myInformation' | cxTranslate }}
      </label>
      <button class="editButton" *ngIf="!isEditing" (click)="onEdit()">
        {{ 'common.edit' | cxTranslate }}
      </button>
    </div>
  </div>
  <div *ngIf="!isEditing">
    <div class="flex-line">
      <label class="text-head">
        {{ 'myAccountV2UserProfile.title' | cxTranslate }}
      </label>
      <label class="value">
        {{ (user$ | async)?.title }}
      </label>
    </div>
    <div class="flex-line">
      <label class="text-head">
        {{ 'myAccountV2UserProfile.name' | cxTranslate }}
      </label>
      <label class="value">
        {{ (user$ | async)?.firstName }} {{ (user$ | async)?.lastName }}
      </label>
    </div>
    <div class="flex-line">
      <label class="text-head">
        {{ 'myAccountV2UserProfile.customerId' | cxTranslate }}
      </label>
      <label class="value">
        {{ (user$ | async)?.customerId }}
      </label>
    </div>
  </div>
  <div *ngIf="isEditing" class="myaccount-editing-area">
    <form (ngSubmit)="onSubmit()" [formGroup]="form">
      <label>
        <span class="label-content, text-head">{{
          'myAccountV2UserProfile.title' | cxTranslate
        }}</span>
        <ng-select
          [clearable]="false"
          [searchable]="false"
          formControlName="titleCode"
          id="title-select"
          [cxNgSelectA11y]="{
            ariaLabel: 'myAccountV2UserProfile.title' | cxTranslate,
          }"
        >
          <ng-option
            *ngFor="let title of titles$ | async"
            [value]="title.code"
            >{{ title.name }}</ng-option
          >
        </ng-select>
      </label>
      <label>
        <span class="label-content, text-head">{{
          'myAccountV2UserProfile.firstName' | cxTranslate
        }}</span>
        <input
          required="true"
          type="text"
          class="form-control"
          name="firstName"
          formControlName="firstName"
          [attr.aria-invalid]="
            form.get('firstName')?.touched && form.get('firstName')?.invalid
          "
          [attr.aria-errormessage]="'firstNameError'"
        />
        <cx-form-errors
          id="firstNameError"
          [translationParams]="{
            label: 'updateProfileForm.firstName.label' | cxTranslate,
          }"
          [control]="form.get('firstName')"
        ></cx-form-errors>
      </label>

      <label>
        <span class="label-content, text-head">{{
          'myAccountV2UserProfile.lastName' | cxTranslate
        }}</span>
        <input
          required="true"
          type="text"
          class="form-control"
          name="lastName"
          formControlName="lastName"
          [attr.aria-invalid]="
            form.get('lastName')?.touched && form.get('lastName')?.invalid
          "
          [attr.aria-errormessage]="'lastNameError'"
        />
        <cx-form-errors
          id="lastNameError"
          [translationParams]="{
            label: 'updateProfileForm.lastName.label' | cxTranslate,
          }"
          [control]="form.get('lastName')"
        ></cx-form-errors>
      </label>

      <label>
        <span class="label-content, text-head">{{
          'myAccountV2UserProfile.customerId' | cxTranslate
        }}</span>
        <input
          required="true"
          type="text"
          class="form-control"
          name="customerId"
          formControlName="customerId"
          [attr.aria-invalid]="
            form.get('customerId')?.touched && form.get('customerId')?.invalid
          "
          [attr.aria-errormessage]="'customerIdError'"
          readonly
        />
        <cx-form-errors
          id="customerIdError"
          [translationParams]="{
            label: 'updateProfileForm.customerId' | cxTranslate,
          }"
          [control]="form.get('customerId')"
        ></cx-form-errors>
      </label>
    </form>

    <div class="btn-group">
      <button class="btn button-cancel button" (click)="cancelEdit()">
        {{ 'common.cancel' | cxTranslate }}
      </button>
      <button
        class="btn btn-primary button"
        (click)="onSubmit()"
        [disabled]="form.disabled"
      >
        {{ 'common.save' | cxTranslate }}
      </button>
    </div>
  </div>
</div>
`
    }]
  }], null, null);
})();
var USE_MY_ACCOUNT_V2_PROFILE = new InjectionToken("feature flag to enable enhanced UI for profile related pages under My-Account", {
  providedIn: "root",
  factory: () => false
});
var myAccountV2ProfileMapping = {
  cmsComponents: {
    UpdateProfileComponent: {
      component: MyAccountV2ProfileComponent
    }
  }
};
var UpdateProfileModule = class _UpdateProfileModule {
  static {
    this.ɵfac = function UpdateProfileModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UpdateProfileModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UpdateProfileModule,
      declarations: [UpdateProfileComponent, MyAccountV2ProfileComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, I18nModule, FormErrorsModule, RouterModule, UrlModule, NgSelectModule, NgSelectA11yModule, FeaturesConfigModule, BtnLikeLinkModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      exports: [UpdateProfileComponent, MyAccountV2ProfileComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          UpdateProfileComponent: {
            component: UpdateProfileComponent,
            guards: [AuthGuard],
            providers: [{
              provide: UpdateProfileComponentService,
              useClass: UpdateProfileComponentService,
              deps: [UserProfileFacade, GlobalMessageService]
            }]
          }
        }
      }), provideDefaultConfigFactory(() => inject(USE_MY_ACCOUNT_V2_PROFILE) ? myAccountV2ProfileMapping : {})],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, I18nModule, FormErrorsModule, RouterModule, UrlModule, NgSelectModule, NgSelectA11yModule, FeaturesConfigModule, BtnLikeLinkModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdateProfileModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, I18nModule, FormErrorsModule, RouterModule, UrlModule, NgSelectModule, NgSelectA11yModule, FeaturesConfigModule, BtnLikeLinkModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      declarations: [UpdateProfileComponent, MyAccountV2ProfileComponent],
      exports: [UpdateProfileComponent, MyAccountV2ProfileComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          UpdateProfileComponent: {
            component: UpdateProfileComponent,
            guards: [AuthGuard],
            providers: [{
              provide: UpdateProfileComponentService,
              useClass: UpdateProfileComponentService,
              deps: [UserProfileFacade, GlobalMessageService]
            }]
          }
        }
      }), provideDefaultConfigFactory(() => inject(USE_MY_ACCOUNT_V2_PROFILE) ? myAccountV2ProfileMapping : {})]
    }]
  }], null, null);
})();
var AddressBookComponentService = class _AddressBookComponentService {
  constructor(userAddressService) {
    this.userAddressService = userAddressService;
  }
  getAddresses() {
    return this.userAddressService.getAddresses();
  }
  getAddressesStateLoading() {
    return this.userAddressService.getAddressesLoading();
  }
  loadAddresses() {
    this.userAddressService.loadAddresses();
  }
  addUserAddress(address) {
    this.userAddressService.addUserAddress(address);
  }
  updateUserAddress(addressId, address) {
    this.userAddressService.updateUserAddress(addressId, address);
  }
  setAddressAsDefault(addressId) {
    this.userAddressService.setAddressAsDefault(addressId);
  }
  deleteUserAddress(addressId) {
    this.userAddressService.deleteUserAddress(addressId);
  }
  static {
    this.ɵfac = function AddressBookComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddressBookComponentService)(ɵɵinject(UserAddressService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AddressBookComponentService,
      factory: _AddressBookComponentService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddressBookComponentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UserAddressService
  }], null);
})();
var AddressFormComponent = class _AddressFormComponent {
  constructor(fb, userAddressService, globalMessageService, translation, launchDialogService, userProfileFacade) {
    this.fb = fb;
    this.userAddressService = userAddressService;
    this.globalMessageService = globalMessageService;
    this.translation = translation;
    this.launchDialogService = launchDialogService;
    this.userProfileFacade = userProfileFacade;
    this.selectedCountry$ = new BehaviorSubject("");
    this.setAsDefaultField = true;
    this.showCancelBtn = true;
    this.submitAddress = new EventEmitter();
    this.backToAddress = new EventEmitter();
    this.subscription = new Subscription();
    this.addressForm = this.fb.group({
      country: this.fb.group({
        isocode: [null, Validators.required]
      }),
      titleCode: [""],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      line1: ["", Validators.required],
      line2: [""],
      town: ["", Validators.required],
      region: this.fb.group({
        isocode: [null, Validators.required]
      }),
      postalCode: ["", Validators.required],
      phone: "",
      cellphone: "",
      defaultAddress: [false]
    });
  }
  ngOnInit() {
    this.countries$ = this.countries || this.userAddressService.getDeliveryCountries().pipe(tap((countries) => {
      if (Object.keys(countries).length === 0) {
        this.userAddressService.loadDeliveryCountries();
      }
    }));
    this.titles$ = this.getTitles();
    this.regions$ = this.selectedCountry$.pipe(switchMap((country) => this.userAddressService.getRegions(country)), tap((regions) => {
      const regionControl = this.addressForm.get("region.isocode");
      if (regions && regions.length > 0) {
        regionControl?.enable();
      } else {
        regionControl?.disable();
      }
    }));
    if (this.addressData && Object.keys(this.addressData).length !== 0) {
      this.addressForm.patchValue(this.addressData);
      this.countrySelected(this.addressData.country);
      if (this.addressData.region) {
        this.regionSelected(this.addressData.region);
      }
    }
    this.addresses$ = this.userAddressService.getAddresses();
  }
  getTitles() {
    return combineLatest([this.translation.translate("addressForm.defaultTitle"), this.userProfileFacade.getTitles()]).pipe(map(([noneTitleText, titles]) => {
      const noneTitle = {
        code: "",
        name: noneTitleText
      };
      titles.sort(sortTitles);
      return [noneTitle, ...titles];
    }));
  }
  handleAddressVerificationResults(results) {
    if (results.decision === "ACCEPT") {
      this.submitAddress.emit(this.addressForm.value);
    } else if (results.decision === "REJECT") {
      if (results.errors?.errors.some((error) => error.subject === "titleCode")) {
        this.globalMessageService.add({
          key: "addressForm.titleRequired"
        }, GlobalMessageType.MSG_TYPE_ERROR);
      } else {
        this.globalMessageService.add({
          key: "addressForm.invalidAddress"
        }, GlobalMessageType.MSG_TYPE_ERROR);
      }
    } else if (results.decision === "REVIEW") {
      this.openSuggestedAddress(results);
    }
  }
  countrySelected(country) {
    this.addressForm.get("country")?.get("isocode")?.setValue(country?.isocode);
    this.selectedCountry$.next(country?.isocode ?? "");
  }
  regionSelected(region) {
    this.addressForm.get("region")?.get("isocode")?.setValue(region.isocode);
  }
  toggleDefaultAddress() {
    this.addressForm["controls"].defaultAddress.setValue(this.addressForm.value.defaultAddress);
  }
  back() {
    this.backToAddress.emit();
  }
  verifyAddress() {
    if (this.addressForm.valid) {
      const regionControl = this.addressForm.get("region");
      const isocode = regionControl?.value?.isocode;
      if (isocode) {
        this.regions$.pipe(take(1)).subscribe((regions) => {
          if (regions.length) {
            const selectedRegion = regions.find((region) => region.isocode === isocode);
            regionControl?.patchValue({
              isocodeShort: selectedRegion?.isocodeShort
            });
          } else {
            regionControl?.reset();
          }
        });
      }
      if (this.addressForm.dirty) {
        this.subscription.add(this.userAddressService.verifyAddress(this.addressForm.value).subscribe((value) => {
          this.handleAddressVerificationResults(value);
        }));
      } else {
        this.submitAddress.emit(void 0);
      }
    } else {
      this.addressForm.markAllAsTouched();
      this.globalMessageService.add({
        key: "formErrors.globalMessage"
      }, GlobalMessageType.MSG_TYPE_ASSISTIVE);
    }
  }
  openSuggestedAddress(results) {
    this.launchDialogService.openDialogAndSubscribe(LAUNCH_CALLER.SUGGESTED_ADDRESSES, this.element, {
      enteredAddress: this.addressForm.value,
      suggestedAddresses: results.suggestedAddresses
    });
    this.subscription.add(this.launchDialogService.dialogClose.pipe(filter((result) => Boolean(result))).subscribe((result) => {
      if (typeof result === "object") {
        const address = __spreadProps(__spreadValues({}, result), {
          titleCode: this.addressForm.value.titleCode,
          phone: this.addressForm.value.phone,
          selected: true
        });
        this.submitAddress.emit(address);
      }
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function AddressFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddressFormComponent)(ɵɵdirectiveInject(UntypedFormBuilder), ɵɵdirectiveInject(UserAddressService), ɵɵdirectiveInject(GlobalMessageService), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(UserProfileFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AddressFormComponent,
      selectors: [["cx-address-form"]],
      viewQuery: function AddressFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c7, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.element = _t.first);
        }
      },
      inputs: {
        addressData: "addressData",
        actionBtnLabel: "actionBtnLabel",
        cancelBtnLabel: "cancelBtnLabel",
        setAsDefaultField: "setAsDefaultField",
        showTitleCode: "showTitleCode",
        showCancelBtn: "showCancelBtn",
        countries: "countries"
      },
      outputs: {
        submitAddress: "submitAddress",
        backToAddress: "backToAddress"
      },
      standalone: false,
      decls: 91,
      vars: 103,
      consts: [["submit", ""], [3, "ngSubmit", "formGroup"], ["formGroupName", "country", 1, "form-group"], [4, "ngIf"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], [1, "label-content", "required"], ["required", "true", "type", "text", "formControlName", "firstName", 1, "form-control", 3, "placeholder"], ["id", "firstNameError", 3, "translationParams", "control"], ["required", "true", "type", "text", "formControlName", "lastName", 1, "form-control", 3, "placeholder"], ["id", "lastNameError", 3, "translationParams", "control"], ["required", "true", "type", "text", "formControlName", "line1", 1, "form-control", 3, "placeholder"], ["id", "line1Error", 3, "translationParams", "control"], [1, "label-content"], ["type", "text", "formControlName", "line2", 1, "form-control", 3, "placeholder"], [1, "row"], [1, "form-group", "col-sm-6"], ["required", "true", "type", "text", "formControlName", "town", 1, "form-control", 3, "placeholder"], ["id", "townError", 3, "translationParams", "control"], ["required", "true", "type", "text", "formControlName", "postalCode", 1, "form-control", 3, "placeholder"], ["id", "postalCodeError", 3, "translationParams", "control"], ["formGroupName", "region", 4, "ngIf"], [1, "form-group", "col-md-6"], ["type", "tel", "formControlName", "phone", 1, "form-control", 3, "placeholder"], ["type", "tel", "formControlName", "cellphone", 1, "form-control", 3, "placeholder"], [1, "cx-address-form-btns"], ["class", "col-md-13 col-lg-6", 4, "ngIf"], [1, "col-md-13", "col-lg-6"], ["type", "submit", 1, "btn", "btn-block", "btn-primary"], ["id", "country-select", "formControlName", "isocode", "bindLabel", "name", "bindValue", "isocode", 1, "country-select", 3, "change", "inputAttrs", "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y"], [3, "translationParams", "control"], ["id", "title-select", "formControlName", "titleCode", "bindLabel", "name", "bindValue", "code", 3, "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y"], ["formGroupName", "region"], ["formControlName", "isocode", "id", "region-select", 1, "region-select", 3, "inputAttrs", "searchable", "clearable", "items", "bindLabel", "bindValue", "placeholder", "cxNgSelectA11y"], [3, "control"], [1, "form-check"], ["type", "checkbox", "formControlName", "defaultAddress", 1, "form-check-input", 3, "change"], [1, "form-check-label"], [1, "btn", "btn-block", "btn-secondary", 3, "click"]],
      template: function AddressFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelement(0, "cx-form-required-legend");
          ɵɵelementStart(1, "form", 1);
          ɵɵlistener("ngSubmit", function AddressFormComponent_Template_form_ngSubmit_1_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.verifyAddress());
          });
          ɵɵelementStart(2, "div", 2);
          ɵɵtemplate(3, AddressFormComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
          ɵɵpipe(4, "async");
          ɵɵelementEnd();
          ɵɵtemplate(5, AddressFormComponent_div_5_Template, 3, 3, "div", 4);
          ɵɵelementStart(6, "div", 5)(7, "label")(8, "span", 6);
          ɵɵtext(9);
          ɵɵpipe(10, "cxTranslate");
          ɵɵelement(11, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(12, "input", 7);
          ɵɵpipe(13, "cxTranslate");
          ɵɵelement(14, "cx-form-errors", 8);
          ɵɵpipe(15, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(16, "div", 5)(17, "label")(18, "span", 6);
          ɵɵtext(19);
          ɵɵpipe(20, "cxTranslate");
          ɵɵelement(21, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(22, "input", 9);
          ɵɵpipe(23, "cxTranslate");
          ɵɵelement(24, "cx-form-errors", 10);
          ɵɵpipe(25, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(26, "div", 5)(27, "label")(28, "span", 6);
          ɵɵtext(29);
          ɵɵpipe(30, "cxTranslate");
          ɵɵelement(31, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(32, "input", 11);
          ɵɵpipe(33, "cxTranslate");
          ɵɵelement(34, "cx-form-errors", 12);
          ɵɵpipe(35, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(36, "div", 5)(37, "label")(38, "span", 13);
          ɵɵtext(39);
          ɵɵpipe(40, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelement(41, "input", 14);
          ɵɵpipe(42, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(43, "div", 15)(44, "div", 16)(45, "label")(46, "span", 6);
          ɵɵtext(47);
          ɵɵpipe(48, "cxTranslate");
          ɵɵelement(49, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(50, "input", 17);
          ɵɵpipe(51, "cxTranslate");
          ɵɵelement(52, "cx-form-errors", 18);
          ɵɵpipe(53, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(54, "div", 16)(55, "label")(56, "span", 6);
          ɵɵtext(57);
          ɵɵpipe(58, "cxTranslate");
          ɵɵelement(59, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(60, "input", 19);
          ɵɵpipe(61, "cxTranslate");
          ɵɵelement(62, "cx-form-errors", 20);
          ɵɵpipe(63, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵtemplate(64, AddressFormComponent_ng_container_64_Template, 2, 1, "ng-container", 21);
          ɵɵpipe(65, "async");
          ɵɵelementEnd();
          ɵɵelementStart(66, "div", 15)(67, "div", 22)(68, "label")(69, "span", 13);
          ɵɵtext(70);
          ɵɵpipe(71, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelement(72, "input", 23);
          ɵɵpipe(73, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(74, "div", 22)(75, "label")(76, "span", 13);
          ɵɵtext(77);
          ɵɵpipe(78, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelement(79, "input", 24);
          ɵɵpipe(80, "cxTranslate");
          ɵɵelementEnd()()();
          ɵɵtemplate(81, AddressFormComponent_div_81_Template, 7, 3, "div", 4);
          ɵɵpipe(82, "async");
          ɵɵelementStart(83, "div", 25)(84, "div", 15);
          ɵɵtemplate(85, AddressFormComponent_div_85_Template, 4, 3, "div", 26);
          ɵɵelementStart(86, "div", 27)(87, "button", 28, 0);
          ɵɵtext(89);
          ɵɵpipe(90, "cxTranslate");
          ɵɵelementEnd()()()()();
        }
        if (rf & 2) {
          let tmp_6_0;
          let tmp_12_0;
          let tmp_18_0;
          let tmp_26_0;
          let tmp_32_0;
          let tmp_41_0;
          ɵɵadvance();
          ɵɵproperty("formGroup", ctx.addressForm);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(4, 43, ctx.countries$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.showTitleCode);
          ɵɵadvance(4);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(10, 45, "addressForm.firstName.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(13, 47, "addressForm.firstName.placeholder"));
          ɵɵattribute("aria-invalid", ((tmp_6_0 = ctx.addressForm.get("firstName")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx.addressForm.get("firstName")) == null ? null : tmp_6_0.invalid))("aria-errormessage", "firstNameError");
          ɵɵadvance(2);
          ɵɵproperty("translationParams", ɵɵpureFunction1(93, _c1, ɵɵpipeBind1(15, 49, "addressForm.firstName.label")))("control", ctx.addressForm.get("firstName"));
          ɵɵadvance(5);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(20, 51, "addressForm.lastName.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(23, 53, "addressForm.lastName.placeholder"));
          ɵɵattribute("aria-invalid", ((tmp_12_0 = ctx.addressForm.get("lastName")) == null ? null : tmp_12_0.touched) && ((tmp_12_0 = ctx.addressForm.get("lastName")) == null ? null : tmp_12_0.invalid))("aria-errormessage", "lastNameError");
          ɵɵadvance(2);
          ɵɵproperty("translationParams", ɵɵpureFunction1(95, _c1, ɵɵpipeBind1(25, 55, "addressForm.lastName.label")))("control", ctx.addressForm.get("lastName"));
          ɵɵadvance(5);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(30, 57, "addressForm.address1"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(33, 59, "addressForm.streetAddress"));
          ɵɵattribute("aria-invalid", ((tmp_18_0 = ctx.addressForm.get("line1")) == null ? null : tmp_18_0.touched) && ((tmp_18_0 = ctx.addressForm.get("line1")) == null ? null : tmp_18_0.invalid))("aria-errormessage", "line1Error");
          ɵɵadvance(2);
          ɵɵproperty("translationParams", ɵɵpureFunction1(97, _c1, ɵɵpipeBind1(35, 61, "addressForm.address1")))("control", ctx.addressForm.get("line1"));
          ɵɵadvance(5);
          ɵɵtextInterpolate(ɵɵpipeBind1(40, 63, "addressForm.address2"));
          ɵɵadvance(2);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(42, 65, "addressForm.aptSuite"));
          ɵɵadvance(6);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(48, 67, "addressForm.city.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(51, 69, "addressForm.city.placeholder"));
          ɵɵattribute("aria-invalid", ((tmp_26_0 = ctx.addressForm.get("town")) == null ? null : tmp_26_0.touched) && ((tmp_26_0 = ctx.addressForm.get("town")) == null ? null : tmp_26_0.invalid))("aria-errormessage", "townError");
          ɵɵadvance(2);
          ɵɵproperty("translationParams", ɵɵpureFunction1(99, _c1, ɵɵpipeBind1(53, 71, "addressForm.city.label")))("control", ctx.addressForm.get("town"));
          ɵɵadvance(5);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(58, 73, "addressForm.zipCode.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(61, 75, "addressForm.zipCode.placeholder"));
          ɵɵattribute("aria-invalid", ((tmp_32_0 = ctx.addressForm.get("postalCode")) == null ? null : tmp_32_0.touched) && ((tmp_32_0 = ctx.addressForm.get("postalCode")) == null ? null : tmp_32_0.invalid))("aria-errormessage", "postalCodeError");
          ɵɵadvance(2);
          ɵɵproperty("translationParams", ɵɵpureFunction1(101, _c1, ɵɵpipeBind1(63, 77, "addressForm.zipCode.label")))("control", ctx.addressForm.get("postalCode"));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(65, 79, ctx.regions$));
          ɵɵadvance(6);
          ɵɵtextInterpolate(ɵɵpipeBind1(71, 81, "addressForm.phoneNumber.label"));
          ɵɵadvance(2);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(73, 83, "addressForm.phoneNumber.placeholder"));
          ɵɵadvance(5);
          ɵɵtextInterpolate(ɵɵpipeBind1(78, 85, "addressForm.cellphone.label"));
          ɵɵadvance(2);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(80, 87, "addressForm.cellphone.placeholder"));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ((tmp_41_0 = ɵɵpipeBind1(82, 89, ctx.addresses$)) == null ? null : tmp_41_0.length) && ctx.setAsDefaultField);
          ɵɵadvance(4);
          ɵɵproperty("ngIf", ctx.showCancelBtn);
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ctx.actionBtnLabel || ɵɵpipeBind1(90, 91, "common.continue"), " ");
        }
      },
      dependencies: [NgSelectA11yDirective, NgIf, ɵNgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormGroupName, NgSelectComponent, FormErrorsComponent, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddressFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-address-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<!-- TODO: (CXSPA-5953) Remove feature flags next major -->
<cx-form-required-legend />
<form (ngSubmit)="verifyAddress()" [formGroup]="addressForm">
  <div class="form-group" formGroupName="country">
    <ng-container *ngIf="countries$ | async as countries">
      <div *ngIf="countries.length !== 0">
        <label>
          <span class="label-content required"
            >{{ 'addressForm.country' | cxTranslate }}
            <cx-form-required-asterisks />
          </span>
          <ng-select
            [inputAttrs]="{ required: 'true' }"
            class="country-select"
            id="country-select"
            formControlName="isocode"
            [searchable]="true"
            [clearable]="false"
            [items]="countries"
            bindLabel="name"
            bindValue="isocode"
            placeholder="{{ 'addressForm.selectOne' | cxTranslate }}"
            (change)="countrySelected($event)"
            [cxNgSelectA11y]="{}"
          >
          </ng-select>
          <cx-form-errors
            [translationParams]="{
              label: 'addressForm.country' | cxTranslate,
            }"
            [control]="addressForm.get('country.isocode')"
          ></cx-form-errors>
        </label>
      </div>
    </ng-container>
  </div>
  <div class="form-group" *ngIf="showTitleCode">
    <ng-container *ngIf="titles$ | async as titles">
      <div *ngIf="titles.length !== 0">
        <label>
          <span class="label-content required">{{
            'addressForm.titleOptional' | cxTranslate
          }}</span>
          <ng-select
            id="title-select"
            formControlName="titleCode"
            [searchable]="true"
            [clearable]="false"
            [items]="titles"
            bindLabel="name"
            bindValue="code"
            [placeholder]="'addressForm.title' | cxTranslate"
            [cxNgSelectA11y]="{
              ariaLabel: 'addressForm.title' | cxTranslate,
            }"
          >
          </ng-select>
        </label>
      </div>
    </ng-container>
  </div>
  <div class="form-group">
    <label>
      <span class="label-content required"
        >{{ 'addressForm.firstName.label' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        required="true"
        class="form-control"
        type="text"
        placeholder="{{ 'addressForm.firstName.placeholder' | cxTranslate }}"
        formControlName="firstName"
        [attr.aria-invalid]="
          addressForm.get('firstName')?.touched &&
          addressForm.get('firstName')?.invalid
        "
        [attr.aria-errormessage]="'firstNameError'"
      />
      <cx-form-errors
        id="firstNameError"
        [translationParams]="{
          label: 'addressForm.firstName.label' | cxTranslate,
        }"
        [control]="addressForm.get('firstName')"
      ></cx-form-errors>
    </label>
  </div>
  <div class="form-group">
    <label>
      <span class="label-content required"
        >{{ 'addressForm.lastName.label' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        required="true"
        type="text"
        class="form-control"
        placeholder="{{ 'addressForm.lastName.placeholder' | cxTranslate }}"
        formControlName="lastName"
        [attr.aria-invalid]="
          addressForm.get('lastName')?.touched &&
          addressForm.get('lastName')?.invalid
        "
        [attr.aria-errormessage]="'lastNameError'"
      />
      <cx-form-errors
        id="lastNameError"
        [translationParams]="{
          label: 'addressForm.lastName.label' | cxTranslate,
        }"
        [control]="addressForm.get('lastName')"
      ></cx-form-errors>
    </label>
  </div>
  <div class="form-group">
    <label>
      <span class="label-content required"
        >{{ 'addressForm.address1' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        required="true"
        type="text"
        class="form-control"
        placeholder="{{ 'addressForm.streetAddress' | cxTranslate }}"
        formControlName="line1"
        [attr.aria-invalid]="
          addressForm.get('line1')?.touched && addressForm.get('line1')?.invalid
        "
        [attr.aria-errormessage]="'line1Error'"
      />
      <cx-form-errors
        id="line1Error"
        [translationParams]="{
          label: 'addressForm.address1' | cxTranslate,
        }"
        [control]="addressForm.get('line1')"
      ></cx-form-errors>
    </label>
  </div>
  <div class="form-group">
    <label>
      <span class="label-content">{{
        'addressForm.address2' | cxTranslate
      }}</span>
      <input
        type="text"
        class="form-control"
        placeholder="{{ 'addressForm.aptSuite' | cxTranslate }}"
        formControlName="line2"
      />
    </label>
  </div>
  <div class="row">
    <div class="form-group col-sm-6">
      <label>
        <span class="label-content required"
          >{{ 'addressForm.city.label' | cxTranslate }}

          <cx-form-required-asterisks />
        </span>
        <input
          required="true"
          type="text"
          class="form-control"
          placeholder="{{ 'addressForm.city.placeholder' | cxTranslate }}"
          formControlName="town"
          [attr.aria-invalid]="
            addressForm.get('town')?.touched && addressForm.get('town')?.invalid
          "
          [attr.aria-errormessage]="'townError'"
        />
        <cx-form-errors
          id="townError"
          [translationParams]="{
            label: 'addressForm.city.label' | cxTranslate,
          }"
          [control]="addressForm.get('town')"
        ></cx-form-errors>
      </label>
    </div>
    <div class="form-group col-sm-6">
      <label>
        <span class="label-content required"
          >{{ 'addressForm.zipCode.label' | cxTranslate }}

          <cx-form-required-asterisks />
        </span>
        <input
          required="true"
          type="text"
          class="form-control"
          placeholder="{{ 'addressForm.zipCode.placeholder' | cxTranslate }}"
          formControlName="postalCode"
          [attr.aria-invalid]="
            addressForm.get('postalCode')?.touched &&
            addressForm.get('postalCode')?.invalid
          "
          [attr.aria-errormessage]="'postalCodeError'"
        />
        <cx-form-errors
          id="postalCodeError"
          [translationParams]="{
            label: 'addressForm.zipCode.label' | cxTranslate,
          }"
          [control]="addressForm.get('postalCode')"
        ></cx-form-errors>
      </label>
    </div>
    <ng-container *ngIf="regions$ | async as regions" formGroupName="region">
      <ng-container *ngIf="regions.length !== 0">
        <div class="form-group col-md-6">
          <label>
            <span class="label-content required"
              >{{ 'addressForm.state' | cxTranslate }}
              <cx-form-required-asterisks />
            </span>
            <ng-select
              [inputAttrs]="{ required: 'true' }"
              class="region-select"
              formControlName="isocode"
              [searchable]="true"
              [clearable]="false"
              [items]="regions"
              bindLabel="{{ regions[0].name ? 'name' : 'isocode' }}"
              bindValue="{{ regions[0].name ? 'isocode' : 'region' }}"
              placeholder="{{ 'addressForm.selectOne' | cxTranslate }}"
              id="region-select"
              [cxNgSelectA11y]="{
                ariaLabel: 'addressForm.state' | cxTranslate,
              }"
            >
            </ng-select>
            <cx-form-errors
              [control]="addressForm.get('region.isocode')"
            ></cx-form-errors>
          </label>
        </div>
      </ng-container>
    </ng-container>
  </div>

  <div class="row">
    <div class="form-group col-md-6">
      <label>
        <span class="label-content">{{
          'addressForm.phoneNumber.label' | cxTranslate
        }}</span>
        <input
          type="tel"
          class="form-control"
          placeholder="{{
            'addressForm.phoneNumber.placeholder' | cxTranslate
          }}"
          formControlName="phone"
        />
      </label>
    </div>
    <div class="form-group col-md-6">
      <label>
        <span class="label-content">{{
          'addressForm.cellphone.label' | cxTranslate
        }}</span>
        <input
          type="tel"
          class="form-control"
          placeholder="{{ 'addressForm.cellphone.placeholder' | cxTranslate }}"
          formControlName="cellphone"
        />
      </label>
    </div>
  </div>

  <div
    class="form-group"
    *ngIf="(addresses$ | async)?.length && setAsDefaultField"
  >
    <div class="form-check">
      <label>
        <input
          type="checkbox"
          class="form-check-input"
          formControlName="defaultAddress"
          (change)="toggleDefaultAddress()"
        />
        <span class="form-check-label">{{
          'addressForm.setAsDefault' | cxTranslate
        }}</span>
      </label>
    </div>
  </div>
  <div class="cx-address-form-btns">
    <div class="row">
      <div class="col-md-13 col-lg-6" *ngIf="showCancelBtn">
        <button class="btn btn-block btn-secondary" (click)="back()">
          {{ cancelBtnLabel || ('addressForm.chooseAddress' | cxTranslate) }}
        </button>
      </div>
      <div class="col-md-13 col-lg-6">
        <button #submit class="btn btn-block btn-primary" type="submit">
          {{ actionBtnLabel || ('common.continue' | cxTranslate) }}
        </button>
      </div>
    </div>
  </div>
</form>
`
    }]
  }], () => [{
    type: UntypedFormBuilder
  }, {
    type: UserAddressService
  }, {
    type: GlobalMessageService
  }, {
    type: TranslationService
  }, {
    type: LaunchDialogService
  }, {
    type: UserProfileFacade
  }], {
    addressData: [{
      type: Input
    }],
    actionBtnLabel: [{
      type: Input
    }],
    cancelBtnLabel: [{
      type: Input
    }],
    setAsDefaultField: [{
      type: Input
    }],
    showTitleCode: [{
      type: Input
    }],
    showCancelBtn: [{
      type: Input
    }],
    countries: [{
      type: Input
    }],
    submitAddress: [{
      type: Output
    }],
    backToAddress: [{
      type: Output
    }],
    element: [{
      type: ViewChild,
      args: ["submit"]
    }]
  });
})();
var AddressBookComponent = class _AddressBookComponent {
  constructor(service, translation, globalMessageService) {
    this.service = service;
    this.translation = translation;
    this.globalMessageService = globalMessageService;
    this.showAddAddressForm = false;
    this.showEditAddressForm = false;
  }
  ngOnInit() {
    this.addresses$ = this.service.getAddresses();
    this.addressesStateLoading$ = this.service.getAddressesStateLoading();
    this.service.loadAddresses();
  }
  addAddressButtonHandle() {
    this.showEditAddressForm = false;
    this.showAddAddressForm = true;
  }
  editAddressButtonHandle(address) {
    this.showAddAddressForm = false;
    this.showEditAddressForm = true;
    this.currentAddress = address;
  }
  addAddressSubmit(address) {
    this.showAddAddressForm = false;
    this.service.addUserAddress(address);
  }
  addAddressCancel() {
    this.showAddAddressForm = false;
  }
  editAddressSubmit(address) {
    this.showEditAddressForm = false;
    if (address && this.currentAddress["id"]) {
      this.service.updateUserAddress(this.currentAddress["id"], address);
    }
  }
  editAddressCancel() {
    this.showEditAddressForm = false;
  }
  getCardContent(address) {
    return combineLatest([this.translation.translate("addressCard.default"), this.translation.translate("addressCard.setAsDefault"), this.translation.translate("common.delete"), this.translation.translate("common.edit"), this.translation.translate("addressBook.areYouSureToDeleteAddress"), this.translation.translate("addressCard.phoneNumber"), this.translation.translate("addressCard.mobileNumber")]).pipe(map(([defaultText, setAsDefaultText, textDelete, textEdit, textVerifyDeleteMsg, textPhone, textMobile]) => {
      let region = "";
      if (address.region && address.region.isocode) {
        region = address.region.isocode + ", ";
      }
      const actions = [];
      if (!address.defaultAddress) {
        actions.push({
          name: setAsDefaultText,
          event: "default"
        });
      }
      actions.push({
        name: textEdit,
        event: "edit"
      });
      actions.push({
        name: textDelete,
        event: "delete"
      });
      const numbers = getAddressNumbers(address, textPhone, textMobile);
      return {
        role: "application",
        textBold: address.firstName + " " + address.lastName,
        text: [address.line1, address.line2, address.town + ", " + region + address.country?.isocode, address.postalCode, numbers],
        actions,
        header: address.defaultAddress ? `✓ ${defaultText}` : "",
        deleteMsg: textVerifyDeleteMsg,
        label: address.defaultAddress ? "addressBook.defaultDeliveryAddress" : "addressBook.additionalDeliveryAddress"
      };
    }));
  }
  setAddressAsDefault(address) {
    this.service.setAddressAsDefault(address.id ?? "");
    this.globalMessageService.add({
      key: "addressMessages.setAsDefaultSuccessfully",
      params: {
        streetAddress: address.line1
      }
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
  }
  deleteAddress(addressId) {
    this.service.deleteUserAddress(addressId);
  }
  setEdit(addressId) {
    if (this.editCard !== addressId) {
      this.editCard = addressId;
    } else {
      this.deleteAddress(addressId);
    }
  }
  cancelCard() {
    this.editCard = null;
  }
  static {
    this.ɵfac = function AddressBookComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddressBookComponent)(ɵɵdirectiveInject(AddressBookComponentService), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(GlobalMessageService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AddressBookComponent,
      selectors: [["cx-address-book"]],
      standalone: false,
      decls: 8,
      vars: 7,
      consts: [["loading", ""], [1, "cx-section"], [4, "ngIf"], [1, "row"], [1, "col-md-6"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], ["class", "row cx-address-deck", 4, "ngIf", "ngIfElse"], [1, "row", "cx-address-deck"], ["class", "col-md-6 cx-address-card", 4, "ngFor", "ngForOf"], [1, "col-md-6", "cx-address-card"], [3, "editCard", "setDefaultCard", "deleteCard", "cancelCard", "index", "border", "fitToContainer", "content", "editMode"], [1, "cx-section-msg"], [1, "cx-form", 3, "submitAddress", "backToAddress", "cancelCard", "showTitleCode", "showCancelBtn", "actionBtnLabel", "cancelBtnLabel", "setAsDefaultField"], [3, "submitAddress", "backToAddress", "showTitleCode", "actionBtnLabel", "cancelBtnLabel", "addressData"], [1, "col-md-12", "cx-address-spinner"]],
      template: function AddressBookComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1);
          ɵɵtemplate(1, AddressBookComponent_ng_container_1_Template, 8, 7, "ng-container", 2);
          ɵɵpipe(2, "async");
          ɵɵtemplate(3, AddressBookComponent_ng_container_3_Template, 10, 16, "ng-container", 2);
          ɵɵpipe(4, "async");
          ɵɵtemplate(5, AddressBookComponent_ng_container_5_Template, 8, 11, "ng-container", 2);
          ɵɵelementEnd();
          ɵɵtemplate(6, AddressBookComponent_ng_template_6_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          ɵɵadvance();
          ɵɵproperty("ngIf", ((tmp_1_0 = ɵɵpipeBind1(2, 3, ctx.addresses$)) == null ? null : tmp_1_0.length) && !(ctx.showAddAddressForm || ctx.showEditAddressForm));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", (!((tmp_2_0 = ɵɵpipeBind1(4, 5, ctx.addresses$)) == null ? null : tmp_2_0.length) || ctx.showAddAddressForm) && !ctx.showEditAddressForm);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.showEditAddressForm);
        }
      },
      dependencies: [NgForOf, NgIf, CardComponent, AddressFormComponent, SpinnerComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddressBookComponent, [{
    type: Component,
    args: [{
      selector: "cx-address-book",
      standalone: false,
      template: `<div class="cx-section">
  <ng-container
    *ngIf="
      (addresses$ | async)?.length &&
      !(showAddAddressForm || showEditAddressForm)
    "
  >
    <div class="row">
      <div class="col-md-6">
        <button
          class="btn btn-block btn-secondary"
          (click)="addAddressButtonHandle()"
        >
          {{ 'addressBook.addNewAddress' | cxTranslate }}
        </button>
      </div>
    </div>

    <div
      class="row cx-address-deck"
      *ngIf="!(addressesStateLoading$ | async); else loading"
    >
      <div
        *ngFor="let address of addresses$ | async; let i = index"
        class="col-md-6 cx-address-card"
      >
        <cx-card
          [index]="i"
          [border]="true"
          [fitToContainer]="true"
          [content]="getCardContent(address) | async"
          (editCard)="editAddressButtonHandle(address)"
          (setDefaultCard)="setAddressAsDefault(address)"
          (deleteCard)="setEdit(address.id ?? '')"
          [editMode]="address.id === editCard"
          (cancelCard)="cancelCard()"
        ></cx-card>
      </div>
    </div>
  </ng-container>

  <ng-container
    *ngIf="
      (!(addresses$ | async)?.length || showAddAddressForm) &&
      !showEditAddressForm
    "
  >
    <section>
      <h2 class="cx-section-msg">
        {{ 'addressBook.addNewDeliveryAddress' | cxTranslate }}
      </h2>
      <cx-address-form
        class="cx-form"
        [showTitleCode]="true"
        [showCancelBtn]="!((addresses$ | async)?.length === 0)"
        actionBtnLabel="{{ 'addressBook.addAddress' | cxTranslate }}"
        cancelBtnLabel="{{ 'addressBook.backToAddressList' | cxTranslate }}"
        [setAsDefaultField]="!((addresses$ | async)?.length === 0)"
        (submitAddress)="addAddressSubmit($event)"
        (backToAddress)="addAddressCancel()"
        (cancelCard)="cancelCard()"
      ></cx-address-form>
    </section>
  </ng-container>

  <ng-container *ngIf="showEditAddressForm">
    <section>
      <h2 class="cx-section-msg">
        {{ 'addressBook.editDeliveryAddress' | cxTranslate }}
      </h2>
      <cx-address-form
        [showTitleCode]="true"
        actionBtnLabel="{{ 'addressBook.updateAddress' | cxTranslate }}"
        cancelBtnLabel="{{ 'addressBook.backToAddressList' | cxTranslate }}"
        [addressData]="currentAddress"
        (submitAddress)="editAddressSubmit($event)"
        (backToAddress)="editAddressCancel()"
      ></cx-address-form>
    </section>
  </ng-container>
</div>

<ng-template #loading>
  <div class="col-md-12 cx-address-spinner">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: AddressBookComponentService
  }, {
    type: TranslationService
  }, {
    type: GlobalMessageService
  }], null);
})();
var SuggestedAddressDialogComponent = class _SuggestedAddressDialogComponent {
  handleClick(event) {
    if (event.target.tagName === this.el.nativeElement.tagName) {
      this.closeModal("Cross click");
    }
  }
  constructor(launchDialogService, el) {
    this.launchDialogService = launchDialogService;
    this.el = el;
    this.iconTypes = ICON_TYPE;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button",
      focusOnEscape: true
    };
    this.data$ = this.launchDialogService.data$;
  }
  ngOnInit() {
    this.data$.pipe(take(1)).subscribe((data) => this.setSelectedAddress(data));
  }
  closeModal(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  setSelectedAddress(data) {
    this.selectedAddress = data.suggestedAddresses?.length ? data.suggestedAddresses[0] : data.enteredAddress;
  }
  static {
    this.ɵfac = function SuggestedAddressDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SuggestedAddressDialogComponent)(ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SuggestedAddressDialogComponent,
      selectors: [["cx-suggested-addresses-dialog"]],
      hostBindings: function SuggestedAddressDialogComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function SuggestedAddressDialogComponent_click_HostBindingHandler($event) {
            return ctx.handleClick($event);
          });
        }
      },
      standalone: false,
      decls: 3,
      vars: 4,
      consts: [["role", "dialog", "aria-labelledby", "dialogTitle", 1, "modal-dialog", "modal-dialog-centered", "modal-lg", "cx-suggested-addresses-dialog", 3, "esc", "cxFocus"], ["class", "modal-content cx-suggested-addresses-container", 4, "ngIf"], [1, "modal-content", "cx-suggested-addresses-container"], [1, "cx-suggested-addresses-header", "cx-modal-header"], ["id", "dialogTitle", 1, "cx-suggested-addresses-title"], ["type", "button", 1, "close", 3, "click", "title"], ["aria-hidden", "true"], [3, "type"], ["ngForm", "", 1, "modal-body"], [1, "cx-dialog-info"], [1, "cx-dialog-options"], ["class", "form-check", 4, "ngFor", "ngForOf"], [1, "form-check"], ["type", "radio", "name", "selectedAddress", "id", "suggested-addresses--entered", 1, "form-check-input", 3, "ngModelChange", "ngModel", "value"], ["for", "suggested-addresses--entered", 1, "form-check-label", "cx-dialog-label"], [1, "cx-dialog-entered"], [1, "cx-card-container"], [1, "cx-card-label"], [1, "cx-suggested-addresses-footer", "cx-modal-footer"], [1, "row"], [1, "cx-dialog-actions", "col-sm-12", "col-md-12", "col-lg-6", "offset-lg-6"], [1, "btn", "btn-secondary", "cx-dialog-buttons", 3, "click"], ["cxAutoFocus", "", 1, "btn", "btn-primary", "cx-dialog-buttons", 3, "click"], ["type", "radio", "name", "selectedAddress", 1, "form-check-input", 3, "ngModelChange", "ngModel", "value", "id"], [1, "form-check-label", "cx-dialog-label", 3, "for"], [1, "cx-dialog-suggested"]],
      template: function SuggestedAddressDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵlistener("esc", function SuggestedAddressDialogComponent_Template_div_esc_0_listener() {
            return ctx.closeModal("Escape clicked");
          });
          ɵɵtemplate(1, SuggestedAddressDialogComponent_div_1_Template, 45, 35, "div", 1);
          ɵɵpipe(2, "async");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("cxFocus", ctx.focusConfig);
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx.data$));
        }
      },
      dependencies: [NgForOf, NgIf, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, IconComponent, FocusDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuggestedAddressDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-suggested-addresses-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  class="modal-dialog modal-dialog-centered modal-lg cx-suggested-addresses-dialog"
  role="dialog"
  [cxFocus]="focusConfig"
  (esc)="closeModal('Escape clicked')"
  aria-labelledby="dialogTitle"
>
  <div
    *ngIf="data$ | async as data"
    class="modal-content cx-suggested-addresses-container"
  >
    <div class="cx-suggested-addresses-header cx-modal-header">
      <h3 id="dialogTitle" class="cx-suggested-addresses-title">
        {{ 'addressSuggestion.verifyYourAddress' | cxTranslate }}
      </h3>
      <button
        type="button"
        class="close"
        title="{{ 'common.close' | cxTranslate }}"
        [attr.aria-label]="'common.close' | cxTranslate"
        (click)="closeModal('Cross click')"
      >
        <span aria-hidden="true">
          <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
        </span>
      </button>
    </div>
    <div class="modal-body" ngForm>
      <div class="cx-dialog-info">
        <p>
          {{ 'addressSuggestion.ensureAccuracySuggestChange' | cxTranslate }}
          {{ 'addressSuggestion.chooseAddressToUse' | cxTranslate }}
        </p>
      </div>

      <div class="cx-dialog-options">
        <div
          class="form-check"
          *ngFor="
            let suggestedAddress of data.suggestedAddresses;
            let i = index
          "
        >
          <input
            class="form-check-input"
            type="radio"
            name="selectedAddress"
            [(ngModel)]="selectedAddress"
            [value]="suggestedAddress"
            [id]="'suggested-addresses--suggested-' + i"
          />
          <label
            class="form-check-label cx-dialog-label"
            [for]="'suggested-addresses--suggested-' + i"
          >
            {{ 'addressSuggestion.suggestedAddress' | cxTranslate }}
            {{ data.suggestedAddresses.length > 1 ? i + 1 : null }}
          </label>
          <div class="cx-dialog-suggested">
            <div class="cx-card-container">
              <div class="cx-card-label">{{ suggestedAddress?.firstName }}</div>
              <div class="cx-card-label">{{ suggestedAddress?.lastName }}</div>
              <div class="cx-card-label">{{ suggestedAddress?.line1 }}</div>
              <div class="cx-card-label">
                <span>{{ suggestedAddress?.line2 }}</span>
              </div>
              <div class="cx-card-label">{{ suggestedAddress?.town }}</div>
              <div class="cx-card-label">
                {{ suggestedAddress?.region?.isocode }}
              </div>
              <div class="cx-card-label">
                {{ suggestedAddress?.postalCode }}
              </div>
            </div>
          </div>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="selectedAddress"
            [(ngModel)]="selectedAddress"
            [value]="data.enteredAddress"
            id="suggested-addresses--entered"
          />
          <label
            class="form-check-label cx-dialog-label"
            for="suggested-addresses--entered"
          >
            {{ 'addressSuggestion.enteredAddress' | cxTranslate }}
          </label>
          <div class="cx-dialog-entered">
            <div class="cx-card-container">
              <div class="cx-card-label">
                {{ data.enteredAddress?.firstName }}
                {{ data.enteredAddress?.lastName }}
              </div>
              <div class="cx-card-label">{{ data.enteredAddress?.line1 }}</div>
              <div class="cx-card-label">
                <span>{{ data.enteredAddress?.line2 }}</span>
              </div>
              <div class="cx-card-label">
                {{ data.enteredAddress?.town }}
                {{ data.enteredAddress?.region?.isocode }}
              </div>
              <div class="cx-card-label">
                {{ data.enteredAddress?.postalCode }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cx-suggested-addresses-footer cx-modal-footer">
      <div class="row">
        <div class="cx-dialog-actions col-sm-12 col-md-12 col-lg-6 offset-lg-6">
          <button
            class="btn btn-secondary cx-dialog-buttons"
            (click)="closeModal('Edit address')"
          >
            {{ 'addressSuggestion.editAddress' | cxTranslate }}
          </button>
          <button
            cxAutoFocus
            class="btn btn-primary cx-dialog-buttons"
            (click)="closeModal(selectedAddress)"
          >
            {{ 'addressSuggestion.saveAddress' | cxTranslate }}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: ElementRef
  }], {
    handleClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var AddressFormModule = class _AddressFormModule {
  static {
    this.ɵfac = function AddressFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddressFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AddressFormModule,
      declarations: [AddressFormComponent, SuggestedAddressDialogComponent],
      imports: [NgSelectA11yModule, CommonModule, ReactiveFormsModule, FormsModule, RouterModule, NgSelectModule, IconModule, I18nModule, FormErrorsModule, KeyboardFocusModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      exports: [AddressFormComponent, SuggestedAddressDialogComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NgSelectA11yModule, CommonModule, ReactiveFormsModule, FormsModule, RouterModule, NgSelectModule, IconModule, I18nModule, FormErrorsModule, KeyboardFocusModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddressFormModule, [{
    type: NgModule,
    args: [{
      imports: [NgSelectA11yModule, CommonModule, ReactiveFormsModule, FormsModule, RouterModule, NgSelectModule, IconModule, I18nModule, FormErrorsModule, KeyboardFocusModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      declarations: [AddressFormComponent, SuggestedAddressDialogComponent],
      exports: [AddressFormComponent, SuggestedAddressDialogComponent]
    }]
  }], null, null);
})();
var defaultSuggestedAddressesDialogLayoutConfig = {
  launch: {
    SUGGESTED_ADDRESSES: {
      inlineRoot: true,
      component: SuggestedAddressDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var AddressBookModule = class _AddressBookModule {
  static {
    this.ɵfac = function AddressBookModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddressBookModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AddressBookModule,
      declarations: [AddressBookComponent],
      imports: [CommonModule, CardModule, AddressFormModule, SpinnerModule, I18nModule, FeaturesConfigModule],
      exports: [AddressBookComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          AccountAddressBookComponent: {
            component: AddressBookComponent,
            guards: [AuthGuard]
          }
        }
      }), provideDefaultConfig(defaultSuggestedAddressesDialogLayoutConfig), UserAddressService],
      imports: [CommonModule, CardModule, AddressFormModule, SpinnerModule, I18nModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddressBookModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CardModule, AddressFormModule, SpinnerModule, I18nModule, FeaturesConfigModule],
      declarations: [AddressBookComponent],
      exports: [AddressBookComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          AccountAddressBookComponent: {
            component: AddressBookComponent,
            guards: [AuthGuard]
          }
        }
      }), provideDefaultConfig(defaultSuggestedAddressesDialogLayoutConfig), UserAddressService]
    }]
  }], null, null);
})();
var ONE_TIME_PASSWORD_REGISTRATION_PURPOSE = "REGISTRATION";
var OneTimePasswordRegisterComponent = class _OneTimePasswordRegisterComponent {
  get additionalConsents() {
    return this.registerForm?.get("additionalConsents");
  }
  updateAdditionalConsents(event, index) {
    const {
      checked
    } = event.target;
    this.registerForm.value.additionalConsents[index] = checked;
  }
  constructor() {
    this.globalMessageService = inject(GlobalMessageService);
    this.fb = inject(UntypedFormBuilder);
    this.router = inject(RoutingService);
    this.anonymousConsentsService = inject(AnonymousConsentsService);
    this.anonymousConsentsConfig = inject(AnonymousConsentsConfig);
    this.clientAuthenticationTokenService = inject(ClientAuthenticationTokenService);
    this.registerComponentService = inject(RegisterComponentService);
    this.routingService = inject(RoutingService);
    this.registrationVerificationTokenFacade = inject(VerificationTokenFacade);
    this.isLoading$ = new BehaviorSubject(false);
    this.subscription = new Subscription();
    this.registerForm = this.fb.group({
      titleCode: [null],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, CustomFormValidators.emailValidator]],
      newsletter: new UntypedFormControl({
        value: false,
        disabled: this.isConsentRequired()
      }),
      additionalConsents: this.registerComponentService.generateAdditionalConsentsFormControl?.() ?? this.fb.array([]),
      termsandconditions: [false, Validators.requiredTrue],
      captcha: [false, Validators.requiredTrue]
    });
    useFeatureStyles("a11yPasswordVisibliltyBtnValueOverflow");
  }
  ngOnInit() {
    this.titles$ = this.registerComponentService.getTitles().pipe(map((titles) => {
      return titles.sort(sortTitles);
    }));
    this.subscription.add(this.globalMessageService.get().pipe(filter((messages) => !!Object.keys(messages).length)).subscribe((globalMessageEntities) => {
      const messages = globalMessageEntities && globalMessageEntities[GlobalMessageType.MSG_TYPE_ERROR];
      if (messages && messages.some((message) => message.raw === "This field is required.")) {
        this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
        this.globalMessageService.add({
          key: "register.titleRequired"
        }, GlobalMessageType.MSG_TYPE_ERROR);
      }
    }));
    const registerConsent = this.anonymousConsentsConfig?.anonymousConsents?.registerConsent ?? "";
    this.anonymousConsent$ = combineLatest([this.anonymousConsentsService.getConsent(registerConsent), this.anonymousConsentsService.getTemplate(registerConsent)]).pipe(map(([consent, template]) => {
      return {
        consent,
        template: template?.description ? template.description : ""
      };
    }));
    this.additionalRegistrationConsents = this.registerComponentService?.getAdditionalConsents() || [];
    this.subscription.add(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.registerForm.get("newsletter")?.valueChanges.subscribe(() => {
        this.toggleAnonymousConsent();
      })
    );
  }
  submitForm() {
    if (this.registerForm.valid) {
      this.sendRegistrationVerificationToken();
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
  sendRegistrationVerificationToken() {
    this.isLoading$.next(true);
    this.clientAuthenticationTokenService.loadClientAuthenticationToken();
    const registrationVerificationTokenCreation = this.collectDataFromRegisterForm();
    this.registrationVerificationTokenFacade.createVerificationToken(registrationVerificationTokenCreation).subscribe({
      next: (result) => this.goToVerificationTokenForm(result),
      error: (error) => {
        this.routingService.go({
          cxRoute: "verifyTokenForRegistration"
        }, {
          state: {
            errorStatus: error.status,
            titleCode: this.registerForm.value.titleCode,
            firstName: this.registerForm.value.firstName,
            lastName: this.registerForm.value.lastName,
            loginId: this.registerForm.value.email.toLowerCase()
          }
        });
        this.isLoading$.next(false);
      },
      complete: () => this.onCreateRegistrationVerificationTokenComplete()
    });
  }
  onCreateRegistrationVerificationTokenComplete() {
    this.isLoading$.next(false);
  }
  collectDataFromRegisterForm() {
    return {
      loginId: this.registerForm.value.email.toLowerCase(),
      purpose: ONE_TIME_PASSWORD_REGISTRATION_PURPOSE
    };
  }
  goToVerificationTokenForm(registrationVerificationToken) {
    this.routingService.go({
      cxRoute: "verifyTokenForRegistration"
    }, {
      state: {
        loginId: this.registerForm.value.email.toLowerCase(),
        tokenId: registrationVerificationToken.tokenId,
        expiresIn: registrationVerificationToken.expiresIn,
        titleCode: this.registerForm.value.titleCode,
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName
      }
    });
  }
  isConsentGiven(consent) {
    return this.anonymousConsentsService.isConsentGiven(consent);
  }
  isConsentRequired() {
    const requiredConsents = this.anonymousConsentsConfig?.anonymousConsents?.requiredConsents;
    const registerConsent = this.anonymousConsentsConfig?.anonymousConsents?.registerConsent;
    if (requiredConsents && registerConsent) {
      return requiredConsents.includes(registerConsent);
    }
    return false;
  }
  toggleAnonymousConsent() {
    const registerConsent = this.anonymousConsentsConfig?.anonymousConsents?.registerConsent;
    if (registerConsent) {
      if (Boolean(this.registerForm.get("newsletter")?.value)) {
        this.anonymousConsentsService.giveConsent(registerConsent);
      } else {
        this.anonymousConsentsService.withdrawConsent(registerConsent);
      }
    }
  }
  /**
   * Triggered via CaptchaComponent when a user confirms captcha
   */
  captchaConfirmed() {
    this.registerForm.get("captcha")?.setValue(true);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function OneTimePasswordRegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OneTimePasswordRegisterComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OneTimePasswordRegisterComponent,
      selectors: [["cx-otp-register-form"]],
      standalone: false,
      decls: 4,
      vars: 4,
      consts: [["loading", ""], ["class", "cx-page-section container", 4, "ngIf", "ngIfElse"], [1, "cx-page-section", "container"], [1, "row", "justify-content-center"], [1, "col-md-6"], [1, "cx-section"], [3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "label-content"], ["bindLabel", "name", "bindValue", "code", "formControlName", "titleCode", "id", "title-select", 3, "clearable", "items", "placeholder", "searchable", "cxNgSelectA11y"], ["required", "true", "type", "text", "name", "firstname", "formControlName", "firstName", 1, "form-control", 3, "placeholder"], [3, "translationParams", "control"], ["required", "true", "type", "text", "name", "lastname", "formControlName", "lastName", 1, "form-control", 3, "placeholder"], ["required", "true", "type", "email", "name", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], [1, "form-check"], [4, "ngIf"], ["formArrayName", "additionalConsents", "class", "form-group", 4, "ngIf"], ["required", "true", "type", "checkbox", "name", "termsandconditions", "formControlName", "termsandconditions"], [1, "form-check-label"], ["target", "_blank", "rel", "noopener noreferrer", 3, "routerLink"], [3, "confirmed"], [3, "control"], ["type", "submit", 1, "btn", "btn-block", "btn-primary"], [1, "cx-login-link", "btn-link", 3, "routerLink"], ["type", "checkbox", "name", "newsletter", "formControlName", "newsletter", 1, "form-check-input", 3, "checked"], ["formArrayName", "additionalConsents", 1, "form-group"], ["class", "form-check", 4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "change", "required", "name", "formControlName"], [1, "cx-spinner"]],
      template: function OneTimePasswordRegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OneTimePasswordRegisterComponent_section_0_Template, 71, 81, "section", 1);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, OneTimePasswordRegisterComponent_ng_template_2_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r10 = ɵɵreference(3);
          ɵɵproperty("ngIf", !ɵɵpipeBind1(1, 2, ctx.isLoading$))("ngIfElse", loading_r10);
        }
      },
      dependencies: [NgForOf, NgIf, RouterLink, ɵNgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, CheckboxRequiredValidator, FormGroupDirective, FormControlName, FormArrayName, NgSelectComponent, NgSelectA11yDirective, CaptchaComponent, SpinnerComponent, FormErrorsComponent, FormRequiredAsterisksComponent, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OneTimePasswordRegisterComponent, [{
    type: Component,
    args: [{
      selector: "cx-otp-register-form",
      standalone: false,
      template: `<section
  class="cx-page-section container"
  *ngIf="!(isLoading$ | async); else loading"
>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="cx-section">
        <form (ngSubmit)="submitForm()" [formGroup]="registerForm">
          <div class="form-group">
            <label>
              <span class="label-content">{{
                'register.title' | cxTranslate
              }}</span>
              <ng-select
                [clearable]="false"
                [items]="titles$ | async"
                [placeholder]="'register.selectTitle' | cxTranslate"
                [searchable]="false"
                bindLabel="name"
                bindValue="code"
                formControlName="titleCode"
                id="title-select"
                [cxNgSelectA11y]="{}"
              >
              </ng-select>
            </label>
          </div>

          <div class="form-group">
            <label>
              <span class="label-content"
                >{{ 'register.firstName.label' | cxTranslate }}
                <cx-form-required-asterisks />
              </span>
              <input
                required="true"
                class="form-control"
                type="text"
                name="firstname"
                placeholder="{{
                  'register.firstName.placeholder' | cxTranslate
                }}"
                formControlName="firstName"
              />

              <cx-form-errors
                [translationParams]="{
                  label: 'register.firstName.label' | cxTranslate,
                }"
                [control]="registerForm.get('firstName')"
              ></cx-form-errors>
            </label>
          </div>

          <div class="form-group">
            <label>
              <span class="label-content"
                >{{ 'register.lastName.label' | cxTranslate }}
                <cx-form-required-asterisks />
              </span>
              <input
                required="true"
                class="form-control"
                type="text"
                name="lastname"
                placeholder="{{
                  'register.lastName.placeholder' | cxTranslate
                }}"
                formControlName="lastName"
              />

              <cx-form-errors
                [translationParams]="{
                  label: 'register.lastName.label' | cxTranslate,
                }"
                [control]="registerForm.get('lastName')"
              ></cx-form-errors>
            </label>
          </div>

          <div class="form-group">
            <label>
              <span class="label-content"
                >{{ 'register.emailAddress.label' | cxTranslate }}
                <cx-form-required-asterisks />
              </span>
              <input
                required="true"
                class="form-control"
                type="email"
                name="email"
                placeholder="{{
                  'register.emailAddress.placeholder' | cxTranslate
                }}"
                formControlName="email"
              />

              <cx-form-errors
                [translationParams]="{
                  label: 'register.emailAddress.label' | cxTranslate,
                }"
                [control]="registerForm.get('email')"
              ></cx-form-errors>
            </label>
          </div>

          <div class="form-group">
            <div class="form-check">
              <label *ngIf="anonymousConsent$ | async as anonymousConsent">
                <input
                  type="checkbox"
                  name="newsletter"
                  class="form-check-input"
                  formControlName="newsletter"
                  [checked]="isConsentGiven(anonymousConsent.consent)"
                />
                <span class="form-check-label">
                  {{ anonymousConsent.template }}
                </span>
              </label>
            </div>
          </div>

          <div
            formArrayName="additionalConsents"
            class="form-group"
            *ngIf="additionalRegistrationConsents as consents"
          >
            <div
              class="form-check"
              *ngFor="let control of additionalConsents.controls; let i = index"
            >
              <div *ngIf="consents[i]?.template?.id as id">
                <label>
                  <input
                    type="checkbox"
                    [required]="consents[i].required"
                    [name]="id"
                    (change)="updateAdditionalConsents($any($event), i)"
                    [formControlName]="i"
                  />
                  <span class="form-check-label">
                    {{ consents[i].template.description }}
                  </span>
                  <cx-form-errors [control]="control"></cx-form-errors>
                </label>
              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="form-check">
              <label>
                <input
                  required="true"
                  type="checkbox"
                  name="termsandconditions"
                  formControlName="termsandconditions"
                />
                <span class="form-check-label">
                  {{ 'register.confirmThatRead' | cxTranslate }}
                  <a
                    [routerLink]="{ cxRoute: 'termsAndConditions' } | cxUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ 'register.termsAndConditions' | cxTranslate }}
                  </a>
                  <cx-form-required-asterisks />
                </span>

                <cx-form-errors
                  [translationParams]="{
                    label: 'register.termsAndConditions' | cxTranslate,
                  }"
                  [control]="registerForm.get('termsandconditions')"
                ></cx-form-errors>
              </label>
            </div>
          </div>
          <cx-captcha (confirmed)="captchaConfirmed()"></cx-captcha>
          <cx-form-errors
            [control]="registerForm.get('captcha')"
          ></cx-form-errors>
          <button type="submit" class="btn btn-block btn-primary">
            {{ 'register.furtherRegistration' | cxTranslate }}
          </button>
          <a
            class="cx-login-link btn-link"
            [routerLink]="{ cxRoute: 'login' } | cxUrl"
            >{{ 'register.signIn' | cxTranslate }}</a
          >
        </form>
      </div>
    </div>
  </div>
</section>

<ng-template #loading>
  <div class="cx-spinner"><cx-spinner></cx-spinner></div>
</ng-template>
`
    }]
  }], () => [], null);
})();
var OneTimePasswordRegisterModule = class _OneTimePasswordRegisterModule {
  static {
    this.ɵfac = function OneTimePasswordRegisterModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OneTimePasswordRegisterModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OneTimePasswordRegisterModule,
      declarations: [OneTimePasswordRegisterComponent],
      imports: [CommonModule, RouterModule, UrlModule, PageSlotModule, I18nModule, FeaturesConfigModule, BtnLikeLinkModule, ReactiveFormsModule, NgSelectModule, NgSelectA11yModule, CaptchaModule, SpinnerModule, FormErrorsModule, FormRequiredAsterisksComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          RegisterCustomerWithOTPComponent: {
            component: OneTimePasswordRegisterComponent,
            guards: [NotAuthGuard],
            providers: [{
              provide: RegisterComponentService,
              useClass: RegisterComponentService,
              deps: [UserRegisterFacade, UntypedFormBuilder]
            }]
          }
        }
      })],
      imports: [CommonModule, RouterModule, UrlModule, PageSlotModule, I18nModule, FeaturesConfigModule, BtnLikeLinkModule, ReactiveFormsModule, NgSelectModule, NgSelectA11yModule, CaptchaModule, SpinnerModule, FormErrorsModule, FormRequiredAsterisksComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OneTimePasswordRegisterModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, PageSlotModule, I18nModule, FeaturesConfigModule, BtnLikeLinkModule, ReactiveFormsModule, NgSelectModule, NgSelectA11yModule, CaptchaModule, SpinnerModule, FormErrorsModule, FormRequiredAsterisksComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          RegisterCustomerWithOTPComponent: {
            component: OneTimePasswordRegisterComponent,
            guards: [NotAuthGuard],
            providers: [{
              provide: RegisterComponentService,
              useClass: RegisterComponentService,
              deps: [UserRegisterFacade, UntypedFormBuilder]
            }]
          }
        }
      })],
      declarations: [OneTimePasswordRegisterComponent]
    }]
  }], null, null);
})();
var globalMsgShowTime = 1e4;
var RegistrationVerificationTokenFormComponentService = class _RegistrationVerificationTokenFormComponentService {
  constructor() {
    this.globalMessageService = inject(GlobalMessageService);
    this.userRegisterFacade = inject(UserRegisterFacade);
    this.featureConfigService = inject(FeatureConfigService);
  }
  displayMessage(key, params) {
    this.globalMessageService.add({
      key,
      params
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION, globalMsgShowTime);
  }
  register(user) {
    return this.userRegisterFacade.register(user);
  }
  postRegisterMessage() {
    if (this.featureConfigService.isEnabled("a11yPostRegisterSuccessMessage")) {
      this.displayMessage("register.postRegisterSuccessMessage", globalMsgShowTime);
    } else {
      this.globalMessageService.add({
        key: "register.postRegisterMessage"
      }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    }
  }
  static {
    this.ɵfac = function RegistrationVerificationTokenFormComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegistrationVerificationTokenFormComponentService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RegistrationVerificationTokenFormComponentService,
      factory: _RegistrationVerificationTokenFormComponentService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegistrationVerificationTokenFormComponentService, [{
    type: Injectable
  }], null, null);
})();
var RegistrationVerificationTokenFormComponent = class _RegistrationVerificationTokenFormComponent {
  constructor() {
    this.fb = inject(UntypedFormBuilder);
    this.router = inject(RoutingService);
    this.authConfigService = inject(AuthConfigService);
    this.registrationVerificationTokenFacade = inject(VerificationTokenFacade);
    this.service = inject(RegistrationVerificationTokenFormComponentService);
    this.globalMessage = inject(GlobalMessageService);
    this.launchDialogService = inject(LaunchDialogService);
    this.featureConfigService = inject(FeatureConfigService);
    this.passwordValidators = this.getPasswordValidators();
    this.cdr = inject(ChangeDetectorRef);
    this.waitTime = 60;
    this.waitTimeForRateLimit = 300;
    this.registerForm = this.fb.group({
      password: ["", [Validators.required, ...this.passwordValidators]],
      passwordconf: ["", Validators.required],
      tokenCode: ["", Validators.required],
      titleCode: [""],
      firstName: [""],
      lastName: [""],
      email: [""],
      tokenId: [""]
    }, {
      validators: CustomFormValidators.passwordsMustMatch("password", "passwordconf")
    });
    this.isLoading$ = new BehaviorSubject(false);
    this.isResendDisabled = true;
  }
  getPasswordValidators() {
    if (this.featureConfigService.isEnabled("enableSecurePasswordValidation")) {
      return CustomFormValidators.securePasswordValidators;
    } else {
      return [...CustomFormValidators.passwordValidators, CustomFormValidators.noConsecutiveCharacters];
    }
  }
  ngOnInit() {
    if (!!history.state) {
      this.tokenId = history.state["tokenId"];
      this.target = history.state["loginId"];
      this.titleCode = history.state["titleCode"];
      this.firstName = history.state["firstName"];
      this.lastName = history.state["lastName"];
      this.errorStatus = history.state["errorStatus"];
      history.pushState({
        tokenId: "",
        loginId: "",
        titleCode: "",
        firstName: "",
        lastName: "",
        errorStatus: ""
      }, "verifyTokenForRegistration");
    }
    if (this.errorStatus === 400) {
      this.upToRateLimit = true;
      this.tokenId = "invalidTokenId";
      this.startRateLimitWaitTimeInterval();
    } else if (!this.target || !this.tokenId || !this.firstName || !this.lastName) {
      this.router.go(this.featureConfigService.isEnabled("authorizationCodeFlowByDefault") ? {
        cxRoute: "register"
      } : ["/login/register"]);
    } else {
      this.startWaitTimeInterval();
      this.service.displayMessage("verificationTokenForm.createVerificationToken", {
        target: this.target
      });
    }
  }
  onSubmit() {
    if (this.registerForm.valid) {
      this.registerUserWithVerificationToken();
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
  registerUserWithVerificationToken() {
    this.isLoading$.next(true);
    this.registerForm.setValue({
      titleCode: this.titleCode,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.target,
      tokenId: this.tokenId,
      password: this.registerForm.value.password,
      tokenCode: this.registerForm.value.tokenCode,
      passwordconf: this.registerForm.value.passwordconf
    });
    this.service.register(this.collectDataFromRegisterForm(this.registerForm.value)).subscribe({
      next: () => this.onRegisterUserSuccess(),
      complete: () => this.isLoading$.next(false),
      error: (error) => {
        if (error.status === 400) {
          this.registerForm.get("tokenCode")?.setErrors({
            invalidTokenCodeError: error.message
          });
          this.globalMessage.remove(GlobalMessageType.MSG_TYPE_ERROR);
        }
        this.isLoading$.next(false);
      }
    });
  }
  collectDataFromRegisterForm(formData) {
    const {
      email,
      firstName,
      lastName,
      password,
      titleCode,
      tokenId: verificationTokenId,
      tokenCode: verificationTokenCode
    } = formData;
    return {
      uid: email.toLowerCase(),
      firstName,
      lastName,
      password,
      titleCode,
      verificationTokenId,
      verificationTokenCode
    };
  }
  onRegisterUserSuccess() {
    if (this.authConfigService.getOAuthFlow() === OAuthFlow.ResourceOwnerPasswordFlow) {
      this.router.go("login");
    }
    if (this.featureConfigService.isEnabled("authorizationCodeFlowByDefault")) {
      this.router.go({
        cxRoute: "login"
      });
    }
    this.service.postRegisterMessage();
  }
  resendOTP() {
    this.isResendDisabled = true;
    this.resendLink.nativeElement.tabIndex = -1;
    this.waitTime = 60;
    this.startWaitTimeInterval();
    this.createRegistrationVerificationToken(this.target, ONE_TIME_PASSWORD_REGISTRATION_PURPOSE).subscribe({
      next: (result) => this.tokenId = result.tokenId,
      complete: () => this.service.displayMessage("verificationTokenForm.createVerificationToken", {
        target: this.target
      })
    });
  }
  createRegistrationVerificationToken(loginId, purpose) {
    return this.registrationVerificationTokenFacade.createVerificationToken({
      loginId,
      purpose
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
  openInfoDailog() {
    this.launchDialogService.openDialogAndSubscribe(LAUNCH_CALLER.ACCOUNT_VERIFICATION_TOKEN, this.element);
  }
  onOpenInfoDailogKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.openInfoDailog();
    }
  }
  static {
    this.ɵfac = function RegistrationVerificationTokenFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegistrationVerificationTokenFormComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _RegistrationVerificationTokenFormComponent,
      selectors: [["cx-registration-verification-token-form"]],
      viewQuery: function RegistrationVerificationTokenFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c9, 5);
          ɵɵviewQuery(_c10, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.element = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resendLink = _t.first);
        }
      },
      hostAttrs: ["ngSkipHydration", "true"],
      standalone: false,
      decls: 50,
      vars: 55,
      consts: [["loading", ""], ["resendLink", ""], ["noReceiveCodeLink", ""], [3, "ngSubmit", "formGroup"], [1, "label-content"], ["required", "true", "formControlName", "tokenCode", 1, "form-control", 3, "placeholder"], [3, "control"], ["class", "rate-limit-error-display", 4, "ngIf"], ["type", "hidden", "formControlName", "tokenId", 3, "ngModelChange", "ngModel"], ["class", "resend-link-text", 4, "ngIf"], [1, "form-group"], ["required", "true", "type", "password", "name", "password", "formControlName", "password", "aria-describedby", "password-input-hint", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], ["id", "password-input-hint", 1, "input-hint"], [3, "translationParams", "control"], ["required", "true", "type", "password", "name", "confirmpassword", "formControlName", "passwordconf", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], [1, "verify-container"], ["type", "submit", 1, "btn", "btn-block", "btn-primary", 3, "disabled"], [1, "btn", "btn-block", "btn-secondary", "btn-register", 3, "routerLink"], [1, "rate-limit-error-display"], [1, "resend-link-text"], [1, "left-text"], ["role", "timer", "aria-live", "polite", "aria-atomic", "true"], ["role", "button", "tabindex", "-1", 1, "btn-link", 3, "keydown.enter", "keydown.space", "click", "ngClass"], [4, "ngIf"], [1, "right-text"], ["role", "button", "tabindex", "0", 1, "btn-link", 3, "keydown", "click"], [1, "cx-spinner"]],
      template: function RegistrationVerificationTokenFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "form", 3);
          ɵɵlistener("ngSubmit", function RegistrationVerificationTokenFormComponent_Template_form_ngSubmit_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onSubmit());
          });
          ɵɵelementStart(1, "label")(2, "span", 4);
          ɵɵtext(3);
          ɵɵpipe(4, "cxTranslate");
          ɵɵelement(5, "cx-form-required-asterisks");
          ɵɵtext(6, " >");
          ɵɵelementEnd();
          ɵɵelement(7, "input", 5);
          ɵɵpipe(8, "cxTranslate");
          ɵɵelement(9, "cx-form-errors", 6);
          ɵɵtemplate(10, RegistrationVerificationTokenFormComponent_div_10_Template, 3, 6, "div", 7);
          ɵɵelementEnd();
          ɵɵelementStart(11, "input", 8);
          ɵɵtwoWayListener("ngModelChange", function RegistrationVerificationTokenFormComponent_Template_input_ngModelChange_11_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.tokenId, $event) || (ctx.tokenId = $event);
            return ɵɵresetView($event);
          });
          ɵɵelementEnd();
          ɵɵtemplate(12, RegistrationVerificationTokenFormComponent_div_12_Template, 13, 10, "div", 9);
          ɵɵelementStart(13, "div", 10)(14, "label")(15, "span", 4);
          ɵɵtext(16);
          ɵɵpipe(17, "cxTranslate");
          ɵɵelement(18, "cx-form-required-asterisks");
          ɵɵtext(19, " >");
          ɵɵelementEnd();
          ɵɵelement(20, "input", 11);
          ɵɵpipe(21, "cxTranslate");
          ɵɵpipe(22, "cxTranslate");
          ɵɵelementStart(23, "p", 12);
          ɵɵtext(24);
          ɵɵpipe(25, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelement(26, "cx-form-errors", 13);
          ɵɵpipe(27, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(28, "div", 10)(29, "label")(30, "span", 4);
          ɵɵtext(31);
          ɵɵpipe(32, "cxTranslate");
          ɵɵelement(33, "cx-form-required-asterisks");
          ɵɵtext(34, " >");
          ɵɵelementEnd();
          ɵɵelement(35, "input", 14);
          ɵɵpipe(36, "cxTranslate");
          ɵɵpipe(37, "cxTranslate");
          ɵɵelement(38, "cx-form-errors", 13);
          ɵɵpipe(39, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(40, "div", 15)(41, "button", 16);
          ɵɵtext(42);
          ɵɵpipe(43, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(44, "button", 17);
          ɵɵpipe(45, "cxUrl");
          ɵɵtext(46);
          ɵɵpipe(47, "cxTranslate");
          ɵɵelementEnd()()();
          ɵɵtemplate(48, RegistrationVerificationTokenFormComponent_ng_template_48_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("formGroup", ctx.registerForm);
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 22, "verificationTokenForm.verificationCode.label"), " ");
          ɵɵadvance(4);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(8, 24, "verificationTokenForm.verificationCode.placeholder"));
          ɵɵadvance(2);
          ɵɵproperty("control", ctx.registerForm.get("tokenCode"));
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.upToRateLimit);
          ɵɵadvance();
          ɵɵtwoWayProperty("ngModel", ctx.tokenId);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.upToRateLimit);
          ɵɵadvance(4);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(17, 26, "register.password.label"), " ");
          ɵɵadvance(4);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(21, 28, "register.password.placeholder"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(22, 30, "register.password.placeholder"));
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(25, 32, "register.passwordMinRequirements"), " ");
          ɵɵadvance(2);
          ɵɵproperty("translationParams", ɵɵpureFunction1(50, _c1, ɵɵpipeBind1(27, 34, "register.password.label")))("control", ctx.registerForm.get("password"));
          ɵɵadvance(5);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(32, 36, "register.confirmPassword.label"), " ");
          ɵɵadvance(4);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(36, 38, "register.confirmPassword.placeholder"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(37, 40, "register.confirmPassword.placeholder"));
          ɵɵadvance(3);
          ɵɵproperty("translationParams", ɵɵpureFunction1(52, _c1, ɵɵpipeBind1(39, 42, "register.confirmPassword.label")))("control", ctx.registerForm.get("passwordconf"));
          ɵɵadvance(3);
          ɵɵproperty("disabled", ctx.registerForm.disabled);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(43, 44, "register.register"), " ");
          ɵɵadvance(2);
          ɵɵproperty("routerLink", ɵɵpipeBind1(45, 46, ɵɵpureFunction0(54, _c11)));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(47, 48, "verificationTokenForm.back"), " ");
        }
      },
      dependencies: [NgClass, NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, RouterLink, FormErrorsComponent, SpinnerComponent, FormRequiredAsterisksComponent, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegistrationVerificationTokenFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-registration-verification-token-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      host: {
        ngSkipHydration: "true"
      },
      template: `<form (ngSubmit)="onSubmit()" [formGroup]="registerForm">
  <label>
    <span class="label-content">
      {{ 'verificationTokenForm.verificationCode.label' | cxTranslate }}
      <cx-form-required-asterisks />
      ></span
    >
    <input
      required="true"
      class="form-control"
      formControlName="tokenCode"
      placeholder="{{
        'verificationTokenForm.verificationCode.placeholder' | cxTranslate
      }}"
    />
    <cx-form-errors [control]="registerForm.get('tokenCode')"></cx-form-errors>
    <div class="rate-limit-error-display" *ngIf="upToRateLimit">
      {{
        'register.rateLimitForRegistrationMessage'
          | cxTranslate: { seconds: waitTimeForRateLimit }
      }}
    </div>
  </label>

  <input type="hidden" formControlName="tokenId" [(ngModel)]="tokenId" />

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

  <div class="form-group">
    <label>
      <span class="label-content"
        >{{ 'register.password.label' | cxTranslate }}
        <cx-form-required-asterisks />
        ></span
      >
      <input
        required="true"
        class="form-control"
        type="password"
        name="password"
        placeholder="{{ 'register.password.placeholder' | cxTranslate }}"
        formControlName="password"
        [attr.aria-label]="'register.password.placeholder' | cxTranslate"
        aria-describedby="password-input-hint"
        cxPasswordVisibilitySwitch
      />
      <p class="input-hint" id="password-input-hint">
        {{ 'register.passwordMinRequirements' | cxTranslate }}
      </p>

      <cx-form-errors
        [translationParams]="{
          label: 'register.password.label' | cxTranslate,
        }"
        [control]="registerForm.get('password')"
      ></cx-form-errors>
    </label>
  </div>

  <div class="form-group">
    <label>
      <span class="label-content"
        >{{ 'register.confirmPassword.label' | cxTranslate }}
        <cx-form-required-asterisks />
        ></span
      >
      <input
        required="true"
        class="form-control"
        type="password"
        name="confirmpassword"
        placeholder="{{ 'register.confirmPassword.placeholder' | cxTranslate }}"
        formControlName="passwordconf"
        [attr.aria-label]="'register.confirmPassword.placeholder' | cxTranslate"
        cxPasswordVisibilitySwitch
      />

      <cx-form-errors
        [translationParams]="{
          label: 'register.confirmPassword.label' | cxTranslate,
        }"
        [control]="registerForm.get('passwordconf')"
      ></cx-form-errors>
    </label>
  </div>

  <div class="verify-container">
    <button
      type="submit"
      class="btn btn-block btn-primary"
      [disabled]="registerForm.disabled"
    >
      {{ 'register.register' | cxTranslate }}
    </button>
    <button
      [routerLink]="{ cxRoute: 'register' } | cxUrl"
      class="btn btn-block btn-secondary btn-register"
    >
      {{ 'verificationTokenForm.back' | cxTranslate }}
    </button>
  </div>
</form>

<ng-template #loading>
  <div class="cx-spinner"><cx-spinner></cx-spinner></div>
</ng-template>
`
    }]
  }], null, {
    element: [{
      type: ViewChild,
      args: ["noReceiveCodeLink"]
    }],
    resendLink: [{
      type: ViewChild,
      args: ["resendLink"]
    }]
  });
})();
var RegistrationVerificationTokenFormModule = class _RegistrationVerificationTokenFormModule {
  static {
    this.ɵfac = function RegistrationVerificationTokenFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegistrationVerificationTokenFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RegistrationVerificationTokenFormModule,
      declarations: [RegistrationVerificationTokenFormComponent],
      imports: [CommonModule, FormsModule, KeyboardFocusModule, ReactiveFormsModule, RouterModule, UrlModule, IconModule, I18nModule, FormErrorsModule, SpinnerModule, FeaturesConfigModule, FormRequiredAsterisksComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          VerifyOTPForRegistrationComponent: {
            component: RegistrationVerificationTokenFormComponent,
            guards: [NotAuthGuard],
            providers: [{
              provide: RegistrationVerificationTokenFormComponentService,
              useClass: RegistrationVerificationTokenFormComponentService,
              deps: [GlobalMessageService, UserRegisterFacade]
            }]
          }
        }
      })],
      imports: [CommonModule, FormsModule, KeyboardFocusModule, ReactiveFormsModule, RouterModule, UrlModule, IconModule, I18nModule, FormErrorsModule, SpinnerModule, FeaturesConfigModule, FormRequiredAsterisksComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegistrationVerificationTokenFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, KeyboardFocusModule, ReactiveFormsModule, RouterModule, UrlModule, IconModule, I18nModule, FormErrorsModule, SpinnerModule, FeaturesConfigModule, FormRequiredAsterisksComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          VerifyOTPForRegistrationComponent: {
            component: RegistrationVerificationTokenFormComponent,
            guards: [NotAuthGuard],
            providers: [{
              provide: RegistrationVerificationTokenFormComponentService,
              useClass: RegistrationVerificationTokenFormComponentService,
              deps: [GlobalMessageService, UserRegisterFacade]
            }]
          }
        }
      })],
      declarations: [RegistrationVerificationTokenFormComponent]
    }]
  }], null, null);
})();
var UserProfileComponentsModule = class _UserProfileComponentsModule {
  static {
    this.ɵfac = function UserProfileComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserProfileComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserProfileComponentsModule,
      imports: [RegisterComponentModule, UpdateProfileModule, UpdateEmailModule, UpdatePasswordModule, ForgotPasswordModule, ResetPasswordModule, CloseAccountModule, AddressBookModule, OneTimePasswordRegisterModule, RegistrationVerificationTokenFormModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [RegisterComponentModule, UpdateProfileModule, UpdateEmailModule, UpdatePasswordModule, ForgotPasswordModule, ResetPasswordModule, CloseAccountModule, AddressBookModule, OneTimePasswordRegisterModule, RegistrationVerificationTokenFormModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [RegisterComponentModule, UpdateProfileModule, UpdateEmailModule, UpdatePasswordModule, ForgotPasswordModule, ResetPasswordModule, CloseAccountModule, AddressBookModule, OneTimePasswordRegisterModule, RegistrationVerificationTokenFormModule]
    }]
  }], null, null);
})();

export {
  ForgotPasswordComponentService,
  ForgotPasswordComponent,
  RegisterComponentService,
  UpdateEmailComponentService,
  UpdatePasswordComponentService,
  UpdateProfileComponentService,
  AddressFormComponent,
  AddressFormModule,
  UserProfileComponentsModule
};
//# sourceMappingURL=chunk-XTCFQJ22.js.map
