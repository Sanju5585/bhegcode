import {
  UserRegistrationFacade
} from "./chunk-QH4XOFFZ.js";
import {
  UserRegisterFacade
} from "./chunk-YJXUXPBZ.js";
import {
  VerificationTokenFacade
} from "./chunk-LZQV6UAH.js";
import {
  CustomFormValidators,
  FormErrorsComponent,
  FormErrorsModule,
  FormRequiredAsterisksComponent,
  FormRequiredLegendComponent,
  IconModule,
  KeyboardFocusModule,
  LAUNCH_CALLER,
  LaunchDialogService,
  NgSelectA11yDirective,
  NgSelectA11yModule,
  SpinnerComponent,
  SpinnerModule
} from "./chunk-D5RDRHN5.js";
import {
  AuthConfigService,
  AuthService,
  ConfigModule,
  FeatureConfigService,
  FeaturesConfigModule,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  NotAuthGuard,
  OAuthFlow,
  RoutingService,
  TranslatePipe,
  TranslationService,
  UrlModule,
  UrlPipe,
  UserAddressService,
  WindowRef,
  provideDefaultConfig
} from "./chunk-VIVIQI6G.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-EBCNDD52.js";
import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-YMQEGXEG.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
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
  ViewChild,
  inject,
  setClassMetadata,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-7OJSO65L.js";
import {
  BehaviorSubject,
  Subject,
  filter,
  of,
  take,
  tap
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-user-registration-components.mjs
var _c0 = (a0) => ({
  ariaLabel: a0
});
var _c1 = (a0) => ({
  label: a0
});
var _c2 = () => ({
  cxRoute: "login"
});
function UserRegistrationFormComponent_section_0_ng_container_47_label_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label")(1, "span", 3);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(4, "ng-select", 32);
    ɵɵpipe(5, "cxTranslate");
    ɵɵpipe(6, "cxTranslate");
    ɵɵelement(7, "cx-form-errors", 33);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const countries_r3 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 8, "userRegistrationForm.fields.country.label"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(5, 10, "userRegistrationForm.fields.country.placeholder"));
    ɵɵproperty("searchable", true)("clearable", false)("items", countries_r3)("cxNgSelectA11y", ɵɵpureFunction1(16, _c0, ɵɵpipeBind1(6, 12, "userRegistrationForm.fields.country.label")));
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(18, _c1, ɵɵpipeBind1(8, 14, "userRegistrationForm.fields.country.label")))("control", ctx_r1.registerForm.get("country.isocode"));
  }
}
function UserRegistrationFormComponent_section_0_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 30);
    ɵɵtemplate(1, UserRegistrationFormComponent_section_0_ng_container_47_label_1_Template, 9, 20, "label", 31);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const countries_r3 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", countries_r3.length !== 0);
  }
}
function UserRegistrationFormComponent_section_0_ng_container_79_label_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label")(1, "span", 3);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(4, "ng-select", 35);
    ɵɵpipe(5, "cxTranslate");
    ɵɵpipe(6, "cxTranslate");
    ɵɵelement(7, "cx-form-errors", 33);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const regions_r4 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 8, "userRegistrationForm.fields.state.label"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(5, 10, "userRegistrationForm.fields.state.placeholder"));
    ɵɵproperty("searchable", true)("clearable", false)("items", regions_r4)("cxNgSelectA11y", ɵɵpureFunction1(16, _c0, ɵɵpipeBind1(6, 12, "userRegistrationForm.fields.state.label")));
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(18, _c1, ɵɵpipeBind1(8, 14, "userRegistrationForm.fields.state.label")))("control", ctx_r1.registerForm.get("region.isocode"));
  }
}
function UserRegistrationFormComponent_section_0_ng_container_79_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 34);
    ɵɵtemplate(1, UserRegistrationFormComponent_section_0_ng_container_79_label_1_Template, 9, 20, "label", 31);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const regions_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", regions_r4.length !== 0);
  }
}
function UserRegistrationFormComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "section")(1, "form", 2);
    ɵɵlistener("ngSubmit", function UserRegistrationFormComponent_section_0_Template_form_ngSubmit_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.submit());
    });
    ɵɵelement(2, "cx-form-required-legend");
    ɵɵelementStart(3, "label")(4, "span", 3);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(7, "ng-select", 4);
    ɵɵpipe(8, "cxTranslate");
    ɵɵpipe(9, "async");
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "label")(12, "span", 5);
    ɵɵtext(13);
    ɵɵpipe(14, "cxTranslate");
    ɵɵelement(15, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(16, "input", 6);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelement(18, "cx-form-errors", 7);
    ɵɵpipe(19, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(20, "label")(21, "span", 5);
    ɵɵtext(22);
    ɵɵpipe(23, "cxTranslate");
    ɵɵelement(24, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(25, "input", 8);
    ɵɵpipe(26, "cxTranslate");
    ɵɵelement(27, "cx-form-errors", 9);
    ɵɵpipe(28, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(29, "label")(30, "span", 5);
    ɵɵtext(31);
    ɵɵpipe(32, "cxTranslate");
    ɵɵelement(33, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(34, "input", 10);
    ɵɵpipe(35, "cxTranslate");
    ɵɵelement(36, "cx-form-errors", 11);
    ɵɵpipe(37, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(38, "label")(39, "span", 5);
    ɵɵtext(40);
    ɵɵpipe(41, "cxTranslate");
    ɵɵelement(42, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(43, "input", 12);
    ɵɵpipe(44, "cxTranslate");
    ɵɵelement(45, "cx-form-errors", 13);
    ɵɵpipe(46, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(47, UserRegistrationFormComponent_section_0_ng_container_47_Template, 2, 1, "ng-container", 14);
    ɵɵpipe(48, "async");
    ɵɵelementStart(49, "label")(50, "span", 3);
    ɵɵtext(51);
    ɵɵpipe(52, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(53, "input", 15);
    ɵɵpipe(54, "cxTranslate");
    ɵɵelement(55, "cx-form-errors", 16);
    ɵɵpipe(56, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(57, "label")(58, "span", 3);
    ɵɵtext(59);
    ɵɵpipe(60, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(61, "input", 17);
    ɵɵpipe(62, "cxTranslate");
    ɵɵelement(63, "cx-form-errors", 18);
    ɵɵelementEnd();
    ɵɵelementStart(64, "label")(65, "span", 3);
    ɵɵtext(66);
    ɵɵpipe(67, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(68, "input", 19);
    ɵɵpipe(69, "cxTranslate");
    ɵɵelement(70, "cx-form-errors", 20);
    ɵɵelementEnd();
    ɵɵelementStart(71, "label")(72, "span", 3);
    ɵɵtext(73);
    ɵɵpipe(74, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(75, "input", 21);
    ɵɵpipe(76, "cxTranslate");
    ɵɵelement(77, "cx-form-errors", 22);
    ɵɵpipe(78, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(79, UserRegistrationFormComponent_section_0_ng_container_79_Template, 2, 1, "ng-container", 23);
    ɵɵpipe(80, "async");
    ɵɵelementStart(81, "label")(82, "span", 3);
    ɵɵtext(83);
    ɵɵpipe(84, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(85, "input", 24);
    ɵɵpipe(86, "cxTranslate");
    ɵɵelement(87, "cx-form-errors", 25);
    ɵɵpipe(88, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(89, "label")(90, "span", 3);
    ɵɵtext(91);
    ɵɵpipe(92, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(93, "textarea", 26);
    ɵɵpipe(94, "cxTranslate");
    ɵɵelement(95, "cx-form-errors", 27);
    ɵɵpipe(96, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(97, "button", 28);
    ɵɵtext(98);
    ɵɵpipe(99, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(100, "a", 29);
    ɵɵpipe(101, "cxUrl");
    ɵɵtext(102);
    ɵɵpipe(103, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_17_0;
    let tmp_23_0;
    let tmp_29_0;
    let tmp_36_0;
    let tmp_42_0;
    let tmp_47_0;
    let tmp_52_0;
    let tmp_59_0;
    let tmp_65_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("formGroup", ctx_r1.registerForm);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 70, "userRegistrationForm.fields.titleCode.label"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(8, 72, "userRegistrationForm.fields.titleCode.placeholder"));
    ɵɵproperty("searchable", false)("clearable", false)("items", ɵɵpipeBind1(9, 74, ctx_r1.titles$))("cxNgSelectA11y", ɵɵpureFunction1(144, _c0, ɵɵpipeBind1(10, 76, "userRegistrationForm.fields.titleCode.label")));
    ɵɵadvance(6);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(14, 78, "userRegistrationForm.fields.firstName.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(17, 80, "userRegistrationForm.fields.firstName.placeholder"));
    ɵɵattribute("aria-invalid", ((tmp_11_0 = ctx_r1.registerForm.get("firstName")) == null ? null : tmp_11_0.touched) && ((tmp_11_0 = ctx_r1.registerForm.get("firstName")) == null ? null : tmp_11_0.invalid))("aria-errormessage", "firstNameError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(146, _c1, ɵɵpipeBind1(19, 82, "userRegistrationForm.fields.firstName.label")))("control", ctx_r1.registerForm.get("firstName"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(23, 84, "userRegistrationForm.fields.lastName.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(26, 86, "userRegistrationForm.fields.lastName.placeholder"));
    ɵɵattribute("aria-invalid", ((tmp_17_0 = ctx_r1.registerForm.get("lastName")) == null ? null : tmp_17_0.touched) && ((tmp_17_0 = ctx_r1.registerForm.get("lastName")) == null ? null : tmp_17_0.invalid))("aria-errormessage", "lastNameError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(148, _c1, ɵɵpipeBind1(28, 88, "userRegistrationForm.fields.lastName.label")))("control", ctx_r1.registerForm.get("lastName"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(32, 90, "userRegistrationForm.fields.companyName.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(35, 92, "userRegistrationForm.fields.companyName.placeholder"));
    ɵɵattribute("aria-invalid", ((tmp_23_0 = ctx_r1.registerForm.get("companyName")) == null ? null : tmp_23_0.touched) && ((tmp_23_0 = ctx_r1.registerForm.get("companyName")) == null ? null : tmp_23_0.invalid))("aria-errormessage", "companyNameError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(150, _c1, ɵɵpipeBind1(37, 94, "userRegistrationForm.fields.companyName.label")))("control", ctx_r1.registerForm.get("companyName"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(41, 96, "userRegistrationForm.fields.email.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(44, 98, "userRegistrationForm.fields.email.placeholder"));
    ɵɵattribute("aria-invalid", ((tmp_29_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_29_0.touched) && ((tmp_29_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_29_0.invalid))("aria-errormessage", "emailError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(152, _c1, ɵɵpipeBind1(46, 100, "userRegistrationForm.fields.email.label")))("control", ctx_r1.registerForm.get("email"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(48, 102, ctx_r1.countries$));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(52, 104, "userRegistrationForm.fields.addressLine.label"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(54, 106, "userRegistrationForm.fields.addressLine.placeholder"));
    ɵɵattribute("aria-invalid", ((tmp_36_0 = ctx_r1.registerForm.get("line1")) == null ? null : tmp_36_0.touched) && ((tmp_36_0 = ctx_r1.registerForm.get("line1")) == null ? null : tmp_36_0.invalid))("aria-errormessage", "line1Error");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(154, _c1, ɵɵpipeBind1(56, 108, "userRegistrationForm.fields.addressLine.label")))("control", ctx_r1.registerForm.get("line1"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(60, 110, "userRegistrationForm.fields.secondAddressLine.label"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(62, 112, "userRegistrationForm.fields.secondAddressLine.placeholder"));
    ɵɵattribute("aria-invalid", ((tmp_42_0 = ctx_r1.registerForm.get("line2")) == null ? null : tmp_42_0.touched) && ((tmp_42_0 = ctx_r1.registerForm.get("line2")) == null ? null : tmp_42_0.invalid))("aria-errormessage", "line2Error");
    ɵɵadvance(2);
    ɵɵproperty("control", ctx_r1.registerForm.get("line2"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(67, 114, "userRegistrationForm.fields.city.label"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(69, 116, "userRegistrationForm.fields.city.label"));
    ɵɵattribute("aria-invalid", ((tmp_47_0 = ctx_r1.registerForm.get("town")) == null ? null : tmp_47_0.touched) && ((tmp_47_0 = ctx_r1.registerForm.get("town")) == null ? null : tmp_47_0.invalid))("aria-errormessage", "townError");
    ɵɵadvance(2);
    ɵɵproperty("control", ctx_r1.registerForm.get("town"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(74, 118, "userRegistrationForm.fields.postalCode.label"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(76, 120, "userRegistrationForm.fields.postalCode.placeholder"));
    ɵɵattribute("aria-invalid", ((tmp_52_0 = ctx_r1.registerForm.get("postalCode")) == null ? null : tmp_52_0.touched) && ((tmp_52_0 = ctx_r1.registerForm.get("postalCode")) == null ? null : tmp_52_0.invalid))("aria-errormessage", "postalCodeError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(156, _c1, ɵɵpipeBind1(78, 122, "userRegistrationForm.fields.postalCode.label")))("control", ctx_r1.registerForm.get("postalCode"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(80, 124, ctx_r1.regions$));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(84, 126, "userRegistrationForm.fields.phoneNumber.label"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(86, 128, "userRegistrationForm.fields.phoneNumber.placeholder"));
    ɵɵattribute("aria-invalid", ((tmp_59_0 = ctx_r1.registerForm.get("phoneNumber")) == null ? null : tmp_59_0.touched) && ((tmp_59_0 = ctx_r1.registerForm.get("phoneNumber")) == null ? null : tmp_59_0.invalid))("aria-errormessage", "phoneNumberError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(158, _c1, ɵɵpipeBind1(88, 130, "userRegistrationForm.fields.phoneNumber.label")))("control", ctx_r1.registerForm.get("phoneNumber"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(92, 132, "userRegistrationForm.fields.message.label"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(94, 134, "userRegistrationForm.fields.message.placeholder"));
    ɵɵattribute("aria-invalid", ((tmp_65_0 = ctx_r1.registerForm.get("message")) == null ? null : tmp_65_0.touched) && ((tmp_65_0 = ctx_r1.registerForm.get("message")) == null ? null : tmp_65_0.invalid))("aria-errormessage", "messageError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(160, _c1, ɵɵpipeBind1(96, 136, "userRegistrationForm.fields.message.label")))("control", ctx_r1.registerForm.get("message"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(99, 138, "userRegistrationForm.formSubmitButtonLabel"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(101, 140, ɵɵpureFunction0(162, _c2)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(103, 142, "userRegistrationForm.goToLoginButtonLabel"));
  }
}
function UserRegistrationFormComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 36);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
function UserRegistrationOTPFormComponent_section_0_ng_container_46_label_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label")(1, "span", 3);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(4, "ng-select", 23);
    ɵɵpipe(5, "cxTranslate");
    ɵɵpipe(6, "cxTranslate");
    ɵɵelement(7, "cx-form-errors", 7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const countries_r3 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 8, "userRegistrationForm.fields.countryOnOTPForm.label"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(5, 10, "userRegistrationForm.fields.countryOnOTPForm.placeholder"));
    ɵɵproperty("searchable", true)("clearable", false)("items", countries_r3)("cxNgSelectA11y", ɵɵpureFunction1(16, _c0, ɵɵpipeBind1(6, 12, "userRegistrationForm.fields.countryOnOTPForm.label")));
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(18, _c1, ɵɵpipeBind1(8, 14, "userRegistrationForm.fields.countryOnOTPForm.label")))("control", ctx_r1.registerForm.get("country.isocode"));
  }
}
function UserRegistrationOTPFormComponent_section_0_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 21);
    ɵɵtemplate(1, UserRegistrationOTPFormComponent_section_0_ng_container_46_label_1_Template, 9, 20, "label", 22);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const countries_r3 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", countries_r3.length !== 0);
  }
}
function UserRegistrationOTPFormComponent_section_0_ng_container_78_label_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label")(1, "span", 3);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(4, "ng-select", 25);
    ɵɵpipe(5, "cxTranslate");
    ɵɵpipe(6, "cxTranslate");
    ɵɵelement(7, "cx-form-errors", 7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const regions_r4 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 8, "userRegistrationForm.fields.stateOnOTPForm.label"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(5, 10, "userRegistrationForm.fields.stateOnOTPForm.placeholder"));
    ɵɵproperty("searchable", true)("clearable", false)("items", regions_r4)("cxNgSelectA11y", ɵɵpureFunction1(16, _c0, ɵɵpipeBind1(6, 12, "userRegistrationForm.fields.stateOnOTPForm.label")));
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(18, _c1, ɵɵpipeBind1(8, 14, "userRegistrationForm.fields.stateOnOTPForm.label")))("control", ctx_r1.registerForm.get("region.isocode"));
  }
}
function UserRegistrationOTPFormComponent_section_0_ng_container_78_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 24);
    ɵɵtemplate(1, UserRegistrationOTPFormComponent_section_0_ng_container_78_label_1_Template, 9, 20, "label", 22);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const regions_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", regions_r4.length !== 0);
  }
}
function UserRegistrationOTPFormComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "section")(1, "form", 2);
    ɵɵlistener("ngSubmit", function UserRegistrationOTPFormComponent_section_0_Template_form_ngSubmit_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSubmit());
    });
    ɵɵelementStart(2, "label")(3, "span", 3);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(6, "ng-select", 4);
    ɵɵpipe(7, "cxTranslate");
    ɵɵpipe(8, "async");
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(10, "label")(11, "span", 5);
    ɵɵtext(12);
    ɵɵpipe(13, "cxTranslate");
    ɵɵelement(14, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(15, "input", 6);
    ɵɵpipe(16, "cxTranslate");
    ɵɵelement(17, "cx-form-errors", 7);
    ɵɵpipe(18, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(19, "label")(20, "span", 5);
    ɵɵtext(21);
    ɵɵpipe(22, "cxTranslate");
    ɵɵelement(23, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(24, "input", 8);
    ɵɵpipe(25, "cxTranslate");
    ɵɵelement(26, "cx-form-errors", 7);
    ɵɵpipe(27, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(28, "label")(29, "span", 5);
    ɵɵtext(30);
    ɵɵpipe(31, "cxTranslate");
    ɵɵelement(32, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(33, "input", 9);
    ɵɵpipe(34, "cxTranslate");
    ɵɵelement(35, "cx-form-errors", 7);
    ɵɵpipe(36, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(37, "label")(38, "span", 5);
    ɵɵtext(39);
    ɵɵpipe(40, "cxTranslate");
    ɵɵelement(41, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(42, "input", 10);
    ɵɵpipe(43, "cxTranslate");
    ɵɵelement(44, "cx-form-errors", 7);
    ɵɵpipe(45, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(46, UserRegistrationOTPFormComponent_section_0_ng_container_46_Template, 2, 1, "ng-container", 11);
    ɵɵpipe(47, "async");
    ɵɵelementStart(48, "label")(49, "span", 3);
    ɵɵtext(50);
    ɵɵpipe(51, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(52, "input", 12);
    ɵɵpipe(53, "cxTranslate");
    ɵɵelement(54, "cx-form-errors", 7);
    ɵɵpipe(55, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(56, "label")(57, "span", 3);
    ɵɵtext(58);
    ɵɵpipe(59, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(60, "input", 13);
    ɵɵpipe(61, "cxTranslate");
    ɵɵelement(62, "cx-form-errors", 14);
    ɵɵelementEnd();
    ɵɵelementStart(63, "label")(64, "span", 3);
    ɵɵtext(65);
    ɵɵpipe(66, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(67, "input", 15);
    ɵɵpipe(68, "cxTranslate");
    ɵɵelement(69, "cx-form-errors", 14);
    ɵɵelementEnd();
    ɵɵelementStart(70, "label")(71, "span", 3);
    ɵɵtext(72);
    ɵɵpipe(73, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(74, "input", 16);
    ɵɵpipe(75, "cxTranslate");
    ɵɵelement(76, "cx-form-errors", 7);
    ɵɵpipe(77, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(78, UserRegistrationOTPFormComponent_section_0_ng_container_78_Template, 2, 1, "ng-container", 17);
    ɵɵpipe(79, "async");
    ɵɵelementStart(80, "label")(81, "span", 3);
    ɵɵtext(82);
    ɵɵpipe(83, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(84, "input", 18);
    ɵɵpipe(85, "cxTranslate");
    ɵɵelement(86, "cx-form-errors", 7);
    ɵɵpipe(87, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(88, "label")(89, "span", 3);
    ɵɵtext(90);
    ɵɵpipe(91, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(92, "textarea", 19);
    ɵɵpipe(93, "cxTranslate");
    ɵɵelement(94, "cx-form-errors", 7);
    ɵɵpipe(95, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(96, "button", 20);
    ɵɵtext(97);
    ɵɵpipe(98, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("formGroup", ctx_r1.registerForm);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 48, "userRegistrationForm.fields.titleCodeOnOTPForm.label"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(7, 50, "userRegistrationForm.fields.titleCodeOnOTPForm.placeholder"));
    ɵɵproperty("searchable", false)("clearable", false)("items", ɵɵpipeBind1(8, 52, ctx_r1.titles$))("cxNgSelectA11y", ɵɵpureFunction1(118, _c0, ɵɵpipeBind1(9, 54, "userRegistrationForm.fields.titleCodeOnOTPForm.label")));
    ɵɵadvance(6);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(13, 56, "userRegistrationForm.fields.firstName.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(16, 58, "userRegistrationForm.fields.firstName.placeholder"));
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(120, _c1, ɵɵpipeBind1(18, 60, "userRegistrationForm.fields.firstName.label")))("control", ctx_r1.registerForm.get("firstName"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(22, 62, "userRegistrationForm.fields.lastName.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(25, 64, "userRegistrationForm.fields.lastName.placeholder"));
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(122, _c1, ɵɵpipeBind1(27, 66, "userRegistrationForm.fields.lastName.label")))("control", ctx_r1.registerForm.get("lastName"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(31, 68, "userRegistrationForm.fields.companyName.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(34, 70, "userRegistrationForm.fields.companyName.placeholder"));
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(124, _c1, ɵɵpipeBind1(36, 72, "userRegistrationForm.fields.companyName.label")))("control", ctx_r1.registerForm.get("companyName"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(40, 74, "userRegistrationForm.fields.email.label"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(43, 76, "userRegistrationForm.fields.email.placeholder"));
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(126, _c1, ɵɵpipeBind1(45, 78, "userRegistrationForm.fields.email.label")))("control", ctx_r1.registerForm.get("email"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(47, 80, ctx_r1.countries$));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(51, 82, "userRegistrationForm.fields.addressLineOnOTPForm.label"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(53, 84, "userRegistrationForm.fields.addressLineOnOTPForm.placeholder"));
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(128, _c1, ɵɵpipeBind1(55, 86, "userRegistrationForm.fields.addressLineOnOTPForm.label")))("control", ctx_r1.registerForm.get("line1"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(59, 88, "userRegistrationForm.fields.secondAddressLineOnOTPForm.label"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(61, 90, "userRegistrationForm.fields.secondAddressLineOnOTPForm.placeholder"));
    ɵɵadvance(2);
    ɵɵproperty("control", ctx_r1.registerForm.get("line2"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(66, 92, "userRegistrationForm.fields.cityOnOTPForm.label"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(68, 94, "userRegistrationForm.fields.cityOnOTPForm.label"));
    ɵɵadvance(2);
    ɵɵproperty("control", ctx_r1.registerForm.get("town"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(73, 96, "userRegistrationForm.fields.postalCodeOnOTPForm.label"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(75, 98, "userRegistrationForm.fields.postalCodeOnOTPForm.placeholder"));
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(130, _c1, ɵɵpipeBind1(77, 100, "userRegistrationForm.fields.postalCodeOnOTPForm.label")))("control", ctx_r1.registerForm.get("postalCode"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(79, 102, ctx_r1.regions$));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(83, 104, "userRegistrationForm.fields.phoneNumberOnOTPForm.label"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(85, 106, "userRegistrationForm.fields.phoneNumberOnOTPForm.placeholder"));
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(132, _c1, ɵɵpipeBind1(87, 108, "userRegistrationForm.fields.phoneNumberOnOTPForm.label")))("control", ctx_r1.registerForm.get("phoneNumber"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(91, 110, "userRegistrationForm.fields.messageOnOTPForm.label"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(93, 112, "userRegistrationForm.fields.messageOnOTPForm.placeholder"));
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(134, _c1, ɵɵpipeBind1(95, 114, "userRegistrationForm.fields.messageOnOTPForm.label")))("control", ctx_r1.registerForm.get("message"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(98, 116, "userRegistrationForm.continueWithOTP"), " ");
  }
}
function UserRegistrationOTPFormComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 26);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
var _c3 = ["noReceiveCodeLink"];
var _c4 = ["resendLink"];
var _c5 = () => ({
  cxRoute: "register"
});
var _c6 = (a0) => ({
  seconds: a0
});
var _c7 = (a0) => ({
  "disabled-link": a0
});
var _c8 = (a0) => ({
  waitTime: a0
});
function RegisterVerificationTokenFormComponent_cx_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-spinner", 14);
  }
}
function RegisterVerificationTokenFormComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, "register.rateLimitForRegistrationMessage", ɵɵpureFunction1(4, _c6, ctx_r0.waitTimeForRateLimit)), " ");
  }
}
function RegisterVerificationTokenFormComponent_div_16_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, "verificationTokenForm.sendRateLime", ɵɵpureFunction1(4, _c8, ctx_r0.waitTime)), " ");
  }
}
function RegisterVerificationTokenFormComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16)(1, "div", 17)(2, "span", 18)(3, "a", 19, 0);
    ɵɵlistener("keydown.enter", function RegisterVerificationTokenFormComponent_div_16_Template_a_keydown_enter_3_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.resendOTP());
    })("keydown.space", function RegisterVerificationTokenFormComponent_div_16_Template_a_keydown_space_3_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.resendOTP());
    })("click", function RegisterVerificationTokenFormComponent_div_16_Template_a_click_3_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.resendOTP());
    });
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(7, RegisterVerificationTokenFormComponent_div_16_ng_container_7_Template, 3, 6, "ng-container", 20);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 21)(9, "a", 22, 1);
    ɵɵlistener("keydown", function RegisterVerificationTokenFormComponent_div_16_Template_a_keydown_9_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onOpenInfoDailogKeyDown($event));
    })("click", function RegisterVerificationTokenFormComponent_div_16_Template_a_click_9_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.openInfoDailog());
    });
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngClass", ɵɵpureFunction1(8, _c7, ctx_r0.isResendDisabled));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 4, "verificationTokenForm.resend"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.isResendDisabled);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 6, "verificationTokenForm.noReceiveCode"), " ");
  }
}
var UserRegistrationFormService = class _UserRegistrationFormService {
  /*
   * Initializes form structure for registration.
   */
  buildForm() {
    return this.formBuilder.group({
      titleCode: [null],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      companyName: ["", Validators.required],
      email: ["", [Validators.required, CustomFormValidators.emailValidator]],
      country: this.formBuilder.group({
        isocode: [null]
      }),
      line1: [""],
      line2: [""],
      town: [""],
      region: this.formBuilder.group({
        isocode: [null]
      }),
      postalCode: [""],
      phoneNumber: [""],
      message: [""]
    });
  }
  /*
   * Gets form structure for registration.
   */
  get form() {
    return this._form;
  }
  /*
   * Gets form control for country isocode.
   */
  get countryControl() {
    return this.form.get("country.isocode");
  }
  /*
   *  Gets form control for region isocode.
   */
  get regionControl() {
    return this.form.get("region.isocode");
  }
  constructor(userRegisterFacade, userAddressService, organizationUserRegistrationFacade, translationService, globalMessageService, authConfigService, routingService, formBuilder) {
    this.userRegisterFacade = userRegisterFacade;
    this.userAddressService = userAddressService;
    this.organizationUserRegistrationFacade = organizationUserRegistrationFacade;
    this.translationService = translationService;
    this.globalMessageService = globalMessageService;
    this.authConfigService = authConfigService;
    this.routingService = routingService;
    this.formBuilder = formBuilder;
    this._form = this.buildForm();
    this.featureConfigService = inject(FeatureConfigService);
  }
  /**
   * Gets all title codes.
   */
  getTitles() {
    return this.userRegisterFacade.getTitles();
  }
  /**
   * Gets all countries list.
   */
  getCountries() {
    return this.userAddressService.getDeliveryCountries().pipe(tap((countries) => {
      if (Object.keys(countries).length === 0) {
        this.userAddressService.loadDeliveryCountries();
      }
    }));
  }
  /**
   * Gets all regions list for specific selected country.
   */
  getRegions() {
    const regions = [];
    return this.countryControl?.valueChanges.pipe(filter((countryIsoCode) => !!countryIsoCode), switchMap((countryIsoCode) => {
      this.regionControl?.reset();
      return this.userAddressService.getRegions(countryIsoCode);
    })) ?? of(regions);
  }
  /**
   * Takes form values and builds custom message content.
   */
  buildMessageContent(form) {
    return this.translationService.translate("userRegistrationForm.messageToApproverTemplate", {
      phoneNumber: form.get("phoneNumber")?.value,
      addressLine: form.get("line1")?.value,
      secondAddressLine: form.get("line2")?.value,
      city: form.get("city")?.value,
      state: form.get("region")?.get("isocode")?.value,
      postalCode: form.get("postalCode")?.value,
      country: form.get("country")?.get("isocode")?.value,
      companyName: form.get("companyName")?.value,
      message: form.get("message")?.value
    });
  }
  /**
   * Displays confirmation global message.
   */
  displayGlobalMessage() {
    return this.globalMessageService.add({
      key: "userRegistrationForm.successFormSubmitMessage"
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
  }
  /**
   * Redirects the user back to the login page.
   *
   * This only happens in case of the `ResourceOwnerPasswordFlow` OAuth flow and authorizationCodeFlowByDefault.
   *
   */
  redirectToLogin() {
    if (this.authConfigService.getOAuthFlow() === OAuthFlow.ResourceOwnerPasswordFlow || this.featureConfigService.isEnabled("authorizationCodeFlowByDefault")) {
      this.routingService.go({
        cxRoute: "login"
      });
    }
  }
  /**
   * Registers new organization user.
   */
  registerUser(form) {
    return this.buildMessageContent(form).pipe(take(1), switchMap((message) => this.organizationUserRegistrationFacade.registerUser({
      titleCode: form.get("titleCode")?.value,
      firstName: form.get("firstName")?.value,
      lastName: form.get("lastName")?.value,
      email: form.get("email")?.value,
      message
    })), tap(() => {
      this.displayGlobalMessage();
      this.redirectToLogin();
      form.reset();
    }));
  }
  static {
    this.ɵfac = function UserRegistrationFormService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserRegistrationFormService)(ɵɵinject(UserRegisterFacade), ɵɵinject(UserAddressService), ɵɵinject(UserRegistrationFacade), ɵɵinject(TranslationService), ɵɵinject(GlobalMessageService), ɵɵinject(AuthConfigService), ɵɵinject(RoutingService), ɵɵinject(FormBuilder));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserRegistrationFormService,
      factory: _UserRegistrationFormService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserRegistrationFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UserRegisterFacade
  }, {
    type: UserAddressService
  }, {
    type: UserRegistrationFacade
  }, {
    type: TranslationService
  }, {
    type: GlobalMessageService
  }, {
    type: AuthConfigService
  }, {
    type: RoutingService
  }, {
    type: FormBuilder
  }], null);
})();
var UserRegistrationFormComponent = class _UserRegistrationFormComponent {
  constructor(userRegistrationFormService) {
    this.userRegistrationFormService = userRegistrationFormService;
    this.titles$ = this.userRegistrationFormService.getTitles();
    this.countries$ = this.userRegistrationFormService.getCountries();
    this.regions$ = this.userRegistrationFormService.getRegions();
    this.registerForm = this.userRegistrationFormService.form;
    this.isLoading$ = new BehaviorSubject(false);
    this.subscriptions = new Subscription();
    this.globalMessageService = inject(GlobalMessageService, {
      optional: true
    });
  }
  submit() {
    if (this.registerForm.valid) {
      this.isLoading$.next(true);
      this.subscriptions.add(this.userRegistrationFormService.registerUser(this.registerForm).subscribe({
        complete: () => this.isLoading$.next(false),
        error: () => {
          this.isLoading$.next(false);
          this.globalMessageService?.add({
            key: "userRegistrationForm.messageToFailedToRegister"
          }, GlobalMessageType.MSG_TYPE_ERROR);
        }
      }));
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function UserRegistrationFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserRegistrationFormComponent)(ɵɵdirectiveInject(UserRegistrationFormService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserRegistrationFormComponent,
      selectors: [["cx-user-registration-form"]],
      standalone: false,
      decls: 4,
      vars: 4,
      consts: [["loading", ""], [4, "ngIf", "ngIfElse"], [3, "ngSubmit", "formGroup"], [1, "label-content"], ["id", "title-code-select", "formControlName", "titleCode", "bindLabel", "name", "bindValue", "code", 3, "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y"], [1, "label-content", "required"], ["required", "true", "type", "text", "name", "firstname", "formControlName", "firstName", 1, "form-control", 3, "placeholder"], ["id", "firstNameError", 3, "translationParams", "control"], ["required", "true", "type", "text", "name", "lastname", "formControlName", "lastName", 1, "form-control", 3, "placeholder"], ["id", "lastNameError", 3, "translationParams", "control"], ["required", "true", "type", "text", "name", "companyName", "formControlName", "companyName", 1, "form-control", 3, "placeholder"], ["id", "companyNameError", 3, "translationParams", "control"], ["required", "true", "type", "email", "name", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["id", "emailError", 3, "translationParams", "control"], ["formGroupName", "country", 4, "ngIf"], ["type", "text", "formControlName", "line1", 1, "form-control", 3, "placeholder"], ["id", "line1Error", 3, "translationParams", "control"], ["type", "text", "formControlName", "line2", 1, "form-control", 3, "placeholder"], ["id", "line2Error", 3, "control"], ["type", "text", "formControlName", "town", 1, "form-control", 3, "placeholder"], ["id", "townError", 3, "control"], ["type", "text", "formControlName", "postalCode", 1, "form-control", 3, "placeholder"], ["id", "postalCodeError", 3, "translationParams", "control"], ["formGroupName", "region", 4, "ngIf"], ["type", "tel", "formControlName", "phoneNumber", 1, "form-control", 3, "placeholder"], ["id", "phoneNumberError", 3, "translationParams", "control"], ["formControlName", "message", "rows", "5", 1, "form-control", 3, "placeholder"], ["id", "messageError", 3, "translationParams", "control"], ["type", "submit", 1, "btn", "btn-block", "btn-primary"], [1, "cx-login-link", "btn-link", 3, "routerLink"], ["formGroupName", "country"], [4, "ngIf"], ["id", "country-select", "formControlName", "isocode", "bindLabel", "name", "bindValue", "isocode", 1, "country-select", 3, "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y"], [3, "translationParams", "control"], ["formGroupName", "region"], ["formControlName", "isocode", "bindLabel", "name", "bindValue", "isocode", "id", "region-select", 1, "region-select", 3, "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y"], [1, "cx-spinner"]],
      template: function UserRegistrationFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, UserRegistrationFormComponent_section_0_Template, 104, 163, "section", 1);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, UserRegistrationFormComponent_ng_template_2_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r5 = ɵɵreference(3);
          ɵɵproperty("ngIf", !ɵɵpipeBind1(1, 2, ctx.isLoading$))("ngIfElse", loading_r5);
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormGroupName, RouterLink, SpinnerComponent, FormErrorsComponent, FormRequiredAsterisksComponent, FormRequiredLegendComponent, NgSelectComponent, NgSelectA11yDirective, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserRegistrationFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-user-registration-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<section *ngIf="!(isLoading$ | async); else loading">
  <form [formGroup]="registerForm" (ngSubmit)="submit()">
    <cx-form-required-legend />
    <label>
      <span class="label-content">{{
        'userRegistrationForm.fields.titleCode.label' | cxTranslate
      }}</span>
      <ng-select
        id="title-code-select"
        formControlName="titleCode"
        [searchable]="false"
        [clearable]="false"
        [items]="titles$ | async"
        bindLabel="name"
        bindValue="code"
        placeholder="{{
          'userRegistrationForm.fields.titleCode.placeholder' | cxTranslate
        }}"
        [cxNgSelectA11y]="{
          ariaLabel:
            'userRegistrationForm.fields.titleCode.label' | cxTranslate,
        }"
      >
      </ng-select>
    </label>

    <label>
      <span class="label-content required"
        >{{ 'userRegistrationForm.fields.firstName.label' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        required="true"
        class="form-control"
        type="text"
        name="firstname"
        placeholder="{{
          'userRegistrationForm.fields.firstName.placeholder' | cxTranslate
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
          label: 'userRegistrationForm.fields.firstName.label' | cxTranslate,
        }"
        [control]="registerForm.get('firstName')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content required"
        >{{ 'userRegistrationForm.fields.lastName.label' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        required="true"
        class="form-control"
        type="text"
        name="lastname"
        placeholder="{{
          'userRegistrationForm.fields.lastName.placeholder' | cxTranslate
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
          label: 'userRegistrationForm.fields.lastName.label' | cxTranslate,
        }"
        [control]="registerForm.get('lastName')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content required"
        >{{ 'userRegistrationForm.fields.companyName.label' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        required="true"
        class="form-control"
        type="text"
        name="companyName"
        placeholder="{{
          'userRegistrationForm.fields.companyName.placeholder' | cxTranslate
        }}"
        formControlName="companyName"
        [attr.aria-invalid]="
          registerForm.get('companyName')?.touched &&
          registerForm.get('companyName')?.invalid
        "
        [attr.aria-errormessage]="'companyNameError'"
      />
      <cx-form-errors
        id="companyNameError"
        [translationParams]="{
          label: 'userRegistrationForm.fields.companyName.label' | cxTranslate,
        }"
        [control]="registerForm.get('companyName')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content required"
        >{{ 'userRegistrationForm.fields.email.label' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        required="true"
        class="form-control"
        type="email"
        name="email"
        placeholder="{{
          'userRegistrationForm.fields.email.placeholder' | cxTranslate
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
          label: 'userRegistrationForm.fields.email.label' | cxTranslate,
        }"
        [control]="registerForm.get('email')"
      ></cx-form-errors>
    </label>

    <ng-container
      *ngIf="countries$ | async as countries"
      formGroupName="country"
    >
      <label *ngIf="countries.length !== 0">
        <span class="label-content">{{
          'userRegistrationForm.fields.country.label' | cxTranslate
        }}</span>
        <ng-select
          class="country-select"
          id="country-select"
          formControlName="isocode"
          [searchable]="true"
          [clearable]="false"
          [items]="countries"
          bindLabel="name"
          bindValue="isocode"
          placeholder="{{
            'userRegistrationForm.fields.country.placeholder' | cxTranslate
          }}"
          [cxNgSelectA11y]="{
            ariaLabel:
              'userRegistrationForm.fields.country.label' | cxTranslate,
          }"
        >
        </ng-select>

        <cx-form-errors
          [translationParams]="{
            label: 'userRegistrationForm.fields.country.label' | cxTranslate,
          }"
          [control]="registerForm.get('country.isocode')"
        ></cx-form-errors>
      </label>
    </ng-container>

    <label>
      <span class="label-content">{{
        'userRegistrationForm.fields.addressLine.label' | cxTranslate
      }}</span>
      <input
        type="text"
        class="form-control"
        placeholder="{{
          'userRegistrationForm.fields.addressLine.placeholder' | cxTranslate
        }}"
        formControlName="line1"
        [attr.aria-invalid]="
          registerForm.get('line1')?.touched &&
          registerForm.get('line1')?.invalid
        "
        [attr.aria-errormessage]="'line1Error'"
      />

      <cx-form-errors
        id="line1Error"
        [translationParams]="{
          label: 'userRegistrationForm.fields.addressLine.label' | cxTranslate,
        }"
        [control]="registerForm.get('line1')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content">{{
        'userRegistrationForm.fields.secondAddressLine.label' | cxTranslate
      }}</span>
      <input
        type="text"
        class="form-control"
        placeholder="{{
          'userRegistrationForm.fields.secondAddressLine.placeholder'
            | cxTranslate
        }}"
        formControlName="line2"
        [attr.aria-invalid]="
          registerForm.get('line2')?.touched &&
          registerForm.get('line2')?.invalid
        "
        [attr.aria-errormessage]="'line2Error'"
      />
      <cx-form-errors
        id="line2Error"
        [control]="registerForm.get('line2')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content">{{
        'userRegistrationForm.fields.city.label' | cxTranslate
      }}</span>
      <input
        type="text"
        class="form-control"
        placeholder="{{
          'userRegistrationForm.fields.city.label' | cxTranslate
        }}"
        formControlName="town"
        [attr.aria-invalid]="
          registerForm.get('town')?.touched && registerForm.get('town')?.invalid
        "
        [attr.aria-errormessage]="'townError'"
      />
      <cx-form-errors
        id="townError"
        [control]="registerForm.get('town')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content">{{
        'userRegistrationForm.fields.postalCode.label' | cxTranslate
      }}</span>
      <input
        type="text"
        class="form-control"
        placeholder="{{
          'userRegistrationForm.fields.postalCode.placeholder' | cxTranslate
        }}"
        formControlName="postalCode"
        [attr.aria-invalid]="
          registerForm.get('postalCode')?.touched &&
          registerForm.get('postalCode')?.invalid
        "
        [attr.aria-errormessage]="'postalCodeError'"
      />

      <cx-form-errors
        id="postalCodeError"
        [translationParams]="{
          label: 'userRegistrationForm.fields.postalCode.label' | cxTranslate,
        }"
        [control]="registerForm.get('postalCode')"
      ></cx-form-errors>
    </label>

    <ng-container *ngIf="regions$ | async as regions" formGroupName="region">
      <label *ngIf="regions.length !== 0">
        <span class="label-content">{{
          'userRegistrationForm.fields.state.label' | cxTranslate
        }}</span>
        <ng-select
          class="region-select"
          formControlName="isocode"
          [searchable]="true"
          [clearable]="false"
          [items]="regions"
          bindLabel="name"
          bindValue="isocode"
          placeholder="{{
            'userRegistrationForm.fields.state.placeholder' | cxTranslate
          }}"
          id="region-select"
          [cxNgSelectA11y]="{
            ariaLabel: 'userRegistrationForm.fields.state.label' | cxTranslate,
          }"
        >
        </ng-select>

        <cx-form-errors
          [translationParams]="{
            label: 'userRegistrationForm.fields.state.label' | cxTranslate,
          }"
          [control]="registerForm.get('region.isocode')"
        ></cx-form-errors>
      </label>
    </ng-container>

    <label>
      <span class="label-content">{{
        'userRegistrationForm.fields.phoneNumber.label' | cxTranslate
      }}</span>
      <input
        type="tel"
        class="form-control"
        placeholder="{{
          'userRegistrationForm.fields.phoneNumber.placeholder' | cxTranslate
        }}"
        formControlName="phoneNumber"
        [attr.aria-invalid]="
          registerForm.get('phoneNumber')?.touched &&
          registerForm.get('phoneNumber')?.invalid
        "
        [attr.aria-errormessage]="'phoneNumberError'"
      />

      <cx-form-errors
        id="phoneNumberError"
        [translationParams]="{
          label: 'userRegistrationForm.fields.phoneNumber.label' | cxTranslate,
        }"
        [control]="registerForm.get('phoneNumber')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content">{{
        'userRegistrationForm.fields.message.label' | cxTranslate
      }}</span>
      <textarea
        class="form-control"
        formControlName="message"
        placeholder="{{
          'userRegistrationForm.fields.message.placeholder' | cxTranslate
        }}"
        rows="5"
        [attr.aria-invalid]="
          registerForm.get('message')?.touched &&
          registerForm.get('message')?.invalid
        "
        [attr.aria-errormessage]="'messageError'"
      ></textarea>

      <cx-form-errors
        id="messageError"
        [translationParams]="{
          label: 'userRegistrationForm.fields.message.label' | cxTranslate,
        }"
        [control]="registerForm.get('message')"
      ></cx-form-errors>
    </label>

    <button type="submit" class="btn btn-block btn-primary">
      {{ 'userRegistrationForm.formSubmitButtonLabel' | cxTranslate }}
    </button>
    <a
      class="cx-login-link btn-link"
      [routerLink]="{ cxRoute: 'login' } | cxUrl"
      >{{ 'userRegistrationForm.goToLoginButtonLabel' | cxTranslate }}</a
    >
  </form>
</section>

<ng-template #loading>
  <div class="cx-spinner"><cx-spinner></cx-spinner></div>
</ng-template>
`
    }]
  }], () => [{
    type: UserRegistrationFormService
  }], null);
})();
var UserRegistrationFormModule = class _UserRegistrationFormModule {
  static {
    this.ɵfac = function UserRegistrationFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserRegistrationFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserRegistrationFormModule,
      declarations: [UserRegistrationFormComponent],
      imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, SpinnerModule, FormErrorsModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent, NgSelectModule, NgSelectA11yModule, ConfigModule, FeaturesConfigModule],
      exports: [UserRegistrationFormComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [UserRegistrationFormService],
      imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, SpinnerModule, FormErrorsModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent, NgSelectModule, NgSelectA11yModule, ConfigModule.withConfig({
        cmsComponents: {
          OrganizationUserRegistrationComponent: {
            component: UserRegistrationFormComponent,
            guards: [NotAuthGuard]
          }
        }
      }), FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserRegistrationFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, SpinnerModule, FormErrorsModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent, NgSelectModule, NgSelectA11yModule, ConfigModule.withConfig({
        cmsComponents: {
          OrganizationUserRegistrationComponent: {
            component: UserRegistrationFormComponent,
            guards: [NotAuthGuard]
          }
        }
      }), FeaturesConfigModule],
      declarations: [UserRegistrationFormComponent],
      exports: [UserRegistrationFormComponent],
      providers: [UserRegistrationFormService]
    }]
  }], null, null);
})();
var ONE_TIME_PASSWORD_REGISTRATION_PURPOSE = "REGISTRATION";
var UserRegistrationOTPFormComponent = class _UserRegistrationOTPFormComponent {
  constructor() {
    this.routingService = inject(RoutingService);
    this.verificationTokenFacade = inject(VerificationTokenFacade);
    this.winRef = inject(WindowRef);
    this.globalMessageService = inject(GlobalMessageService, {
      optional: true
    });
    this.userRegistrationFormService = inject(UserRegistrationFormService);
    this.busy$ = new BehaviorSubject(false);
    this.titles$ = this.userRegistrationFormService.getTitles();
    this.countries$ = this.userRegistrationFormService.getCountries();
    this.regions$ = this.userRegistrationFormService.getRegions();
    this.registerForm = this.userRegistrationFormService.form;
    this.isLoading$ = new BehaviorSubject(false);
  }
  onSubmit() {
    if (!this.registerForm.valid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.busy$.next(true);
    const tokenCreationReqBody = this.collectDataFromRegistrationForm();
    this.verificationTokenFacade.createVerificationToken(tokenCreationReqBody).subscribe({
      next: (result) => this.goToVerificationTokenForm(result),
      error: (error) => {
        this.routingService.go({
          cxRoute: "verifyTokenForRegistration"
        }, {
          state: {
            registrationDataForm: this.registerForm.value,
            loginId: this.registerForm.value.email.toLowerCase(),
            errorStatus: error.status,
            form: this.registerForm.value
          }
        });
        this.busy$.next(false);
      },
      complete: () => this.onCreateVerificationTokenComplete()
    });
  }
  goToVerificationTokenForm(verificationToken) {
    this.routingService.go({
      cxRoute: "verifyTokenForRegistration"
    }, {
      state: {
        registrationDataForm: this.registerForm.value,
        loginId: this.registerForm.value.email.toLowerCase(),
        tokenId: verificationToken.tokenId,
        expiresIn: verificationToken.expiresIn
      }
    });
  }
  collectDataFromRegistrationForm() {
    return {
      loginId: this.registerForm.value.email.toLowerCase(),
      purpose: ONE_TIME_PASSWORD_REGISTRATION_PURPOSE
    };
  }
  onCreateVerificationTokenComplete() {
    this.registerForm.reset();
    this.busy$.next(false);
  }
  static {
    this.ɵfac = function UserRegistrationOTPFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserRegistrationOTPFormComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserRegistrationOTPFormComponent,
      selectors: [["cx-user-registration-form"]],
      standalone: false,
      decls: 4,
      vars: 4,
      consts: [["loading", ""], [4, "ngIf", "ngIfElse"], [3, "ngSubmit", "formGroup"], [1, "label-content"], ["id", "title-code-select", "formControlName", "titleCode", "bindLabel", "name", "bindValue", "code", 3, "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y"], [1, "label-content", "required"], ["required", "true", "type", "text", "name", "firstname", "formControlName", "firstName", 1, "form-control", 3, "placeholder"], [3, "translationParams", "control"], ["required", "true", "type", "text", "name", "lastname", "formControlName", "lastName", 1, "form-control", 3, "placeholder"], ["required", "true", "type", "text", "name", "companyName", "formControlName", "companyName", 1, "form-control", 3, "placeholder"], ["required", "true", "type", "email", "name", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["formGroupName", "country", 4, "ngIf"], ["type", "text", "formControlName", "line1", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "line2", 1, "form-control", 3, "placeholder"], [3, "control"], ["type", "text", "formControlName", "town", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "postalCode", 1, "form-control", 3, "placeholder"], ["formGroupName", "region", 4, "ngIf"], ["type", "tel", "formControlName", "phoneNumber", 1, "form-control", 3, "placeholder"], ["formControlName", "message", "rows", "5", 1, "form-control", 3, "placeholder"], ["type", "submit", 1, "btn", "btn-block", "btn-primary"], ["formGroupName", "country"], [4, "ngIf"], ["id", "country-select", "formControlName", "isocode", "bindLabel", "name", "bindValue", "isocode", 1, "country-select", 3, "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y"], ["formGroupName", "region"], ["formControlName", "isocode", "bindLabel", "name", "bindValue", "isocode", "id", "region-select", 1, "region-select", 3, "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y"], [1, "cx-spinner"]],
      template: function UserRegistrationOTPFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, UserRegistrationOTPFormComponent_section_0_Template, 99, 136, "section", 1);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, UserRegistrationOTPFormComponent_ng_template_2_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r5 = ɵɵreference(3);
          ɵɵproperty("ngIf", !ɵɵpipeBind1(1, 2, ctx.isLoading$))("ngIfElse", loading_r5);
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormGroupName, SpinnerComponent, FormErrorsComponent, NgSelectComponent, NgSelectA11yDirective, FormRequiredAsterisksComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserRegistrationOTPFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-user-registration-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<section *ngIf="!(isLoading$ | async); else loading">
  <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
    <label>
      <span class="label-content">{{
        'userRegistrationForm.fields.titleCodeOnOTPForm.label' | cxTranslate
      }}</span>
      <ng-select
        id="title-code-select"
        formControlName="titleCode"
        [searchable]="false"
        [clearable]="false"
        [items]="titles$ | async"
        bindLabel="name"
        bindValue="code"
        placeholder="{{
          'userRegistrationForm.fields.titleCodeOnOTPForm.placeholder'
            | cxTranslate
        }}"
        [cxNgSelectA11y]="{
          ariaLabel:
            'userRegistrationForm.fields.titleCodeOnOTPForm.label'
            | cxTranslate,
        }"
      >
      </ng-select>
    </label>

    <label>
      <span class="label-content required"
        >{{ 'userRegistrationForm.fields.firstName.label' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        required="true"
        class="form-control"
        type="text"
        name="firstname"
        placeholder="{{
          'userRegistrationForm.fields.firstName.placeholder' | cxTranslate
        }}"
        formControlName="firstName"
      />

      <cx-form-errors
        [translationParams]="{
          label: 'userRegistrationForm.fields.firstName.label' | cxTranslate,
        }"
        [control]="registerForm.get('firstName')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content required"
        >{{ 'userRegistrationForm.fields.lastName.label' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        required="true"
        class="form-control"
        type="text"
        name="lastname"
        placeholder="{{
          'userRegistrationForm.fields.lastName.placeholder' | cxTranslate
        }}"
        formControlName="lastName"
      />

      <cx-form-errors
        [translationParams]="{
          label: 'userRegistrationForm.fields.lastName.label' | cxTranslate,
        }"
        [control]="registerForm.get('lastName')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content required"
        >{{ 'userRegistrationForm.fields.companyName.label' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        required="true"
        class="form-control"
        type="text"
        name="companyName"
        placeholder="{{
          'userRegistrationForm.fields.companyName.placeholder' | cxTranslate
        }}"
        formControlName="companyName"
      />
      <cx-form-errors
        [translationParams]="{
          label: 'userRegistrationForm.fields.companyName.label' | cxTranslate,
        }"
        [control]="registerForm.get('companyName')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content required"
        >{{ 'userRegistrationForm.fields.email.label' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        required="true"
        class="form-control"
        type="email"
        name="email"
        placeholder="{{
          'userRegistrationForm.fields.email.placeholder' | cxTranslate
        }}"
        formControlName="email"
      />

      <cx-form-errors
        [translationParams]="{
          label: 'userRegistrationForm.fields.email.label' | cxTranslate,
        }"
        [control]="registerForm.get('email')"
      ></cx-form-errors>
    </label>

    <ng-container
      *ngIf="countries$ | async as countries"
      formGroupName="country"
    >
      <label *ngIf="countries.length !== 0">
        <span class="label-content">{{
          'userRegistrationForm.fields.countryOnOTPForm.label' | cxTranslate
        }}</span>
        <ng-select
          class="country-select"
          id="country-select"
          formControlName="isocode"
          [searchable]="true"
          [clearable]="false"
          [items]="countries"
          bindLabel="name"
          bindValue="isocode"
          placeholder="{{
            'userRegistrationForm.fields.countryOnOTPForm.placeholder'
              | cxTranslate
          }}"
          [cxNgSelectA11y]="{
            ariaLabel:
              'userRegistrationForm.fields.countryOnOTPForm.label'
              | cxTranslate,
          }"
        >
        </ng-select>

        <cx-form-errors
          [translationParams]="{
            label:
              'userRegistrationForm.fields.countryOnOTPForm.label'
              | cxTranslate,
          }"
          [control]="registerForm.get('country.isocode')"
        ></cx-form-errors>
      </label>
    </ng-container>

    <label>
      <span class="label-content">{{
        'userRegistrationForm.fields.addressLineOnOTPForm.label' | cxTranslate
      }}</span>
      <input
        type="text"
        class="form-control"
        placeholder="{{
          'userRegistrationForm.fields.addressLineOnOTPForm.placeholder'
            | cxTranslate
        }}"
        formControlName="line1"
      />

      <cx-form-errors
        [translationParams]="{
          label:
            'userRegistrationForm.fields.addressLineOnOTPForm.label'
            | cxTranslate,
        }"
        [control]="registerForm.get('line1')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content">{{
        'userRegistrationForm.fields.secondAddressLineOnOTPForm.label'
          | cxTranslate
      }}</span>
      <input
        type="text"
        class="form-control"
        placeholder="{{
          'userRegistrationForm.fields.secondAddressLineOnOTPForm.placeholder'
            | cxTranslate
        }}"
        formControlName="line2"
      />
      <cx-form-errors [control]="registerForm.get('line2')"></cx-form-errors>
    </label>

    <label>
      <span class="label-content">{{
        'userRegistrationForm.fields.cityOnOTPForm.label' | cxTranslate
      }}</span>
      <input
        type="text"
        class="form-control"
        placeholder="{{
          'userRegistrationForm.fields.cityOnOTPForm.label' | cxTranslate
        }}"
        formControlName="town"
      />
      <cx-form-errors [control]="registerForm.get('town')"></cx-form-errors>
    </label>

    <label>
      <span class="label-content">{{
        'userRegistrationForm.fields.postalCodeOnOTPForm.label' | cxTranslate
      }}</span>
      <input
        type="text"
        class="form-control"
        placeholder="{{
          'userRegistrationForm.fields.postalCodeOnOTPForm.placeholder'
            | cxTranslate
        }}"
        formControlName="postalCode"
      />

      <cx-form-errors
        [translationParams]="{
          label:
            'userRegistrationForm.fields.postalCodeOnOTPForm.label'
            | cxTranslate,
        }"
        [control]="registerForm.get('postalCode')"
      ></cx-form-errors>
    </label>

    <ng-container *ngIf="regions$ | async as regions" formGroupName="region">
      <label *ngIf="regions.length !== 0">
        <span class="label-content">{{
          'userRegistrationForm.fields.stateOnOTPForm.label' | cxTranslate
        }}</span>
        <ng-select
          class="region-select"
          formControlName="isocode"
          [searchable]="true"
          [clearable]="false"
          [items]="regions"
          bindLabel="name"
          bindValue="isocode"
          placeholder="{{
            'userRegistrationForm.fields.stateOnOTPForm.placeholder'
              | cxTranslate
          }}"
          id="region-select"
          [cxNgSelectA11y]="{
            ariaLabel:
              'userRegistrationForm.fields.stateOnOTPForm.label' | cxTranslate,
          }"
        >
        </ng-select>

        <cx-form-errors
          [translationParams]="{
            label:
              'userRegistrationForm.fields.stateOnOTPForm.label' | cxTranslate,
          }"
          [control]="registerForm.get('region.isocode')"
        ></cx-form-errors>
      </label>
    </ng-container>

    <label>
      <span class="label-content">{{
        'userRegistrationForm.fields.phoneNumberOnOTPForm.label' | cxTranslate
      }}</span>
      <input
        type="tel"
        class="form-control"
        placeholder="{{
          'userRegistrationForm.fields.phoneNumberOnOTPForm.placeholder'
            | cxTranslate
        }}"
        formControlName="phoneNumber"
      />

      <cx-form-errors
        [translationParams]="{
          label:
            'userRegistrationForm.fields.phoneNumberOnOTPForm.label'
            | cxTranslate,
        }"
        [control]="registerForm.get('phoneNumber')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content">{{
        'userRegistrationForm.fields.messageOnOTPForm.label' | cxTranslate
      }}</span>
      <textarea
        class="form-control"
        formControlName="message"
        placeholder="{{
          'userRegistrationForm.fields.messageOnOTPForm.placeholder'
            | cxTranslate
        }}"
        rows="5"
      ></textarea>

      <cx-form-errors
        [translationParams]="{
          label:
            'userRegistrationForm.fields.messageOnOTPForm.label' | cxTranslate,
        }"
        [control]="registerForm.get('message')"
      ></cx-form-errors>
    </label>

    <button type="submit" class="btn btn-block btn-primary">
      {{ 'userRegistrationForm.continueWithOTP' | cxTranslate }}
    </button>
    <!-- <a
      class="cx-login-link btn-link"
      [routerLink]="{ cxRoute: 'login' } | cxUrl"
      >{{ 'userRegistrationForm.goToLoginButtonLabel' | cxTranslate }}</a
    > -->
  </form>
</section>

<ng-template #loading>
  <div class="cx-spinner"><cx-spinner></cx-spinner></div>
</ng-template>
`
    }]
  }], null, null);
})();
var UserRegistrationOTPFormModule = class _UserRegistrationOTPFormModule {
  static {
    this.ɵfac = function UserRegistrationOTPFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserRegistrationOTPFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserRegistrationOTPFormModule,
      declarations: [UserRegistrationOTPFormComponent],
      imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, SpinnerModule, FormErrorsModule, NgSelectModule, NgSelectA11yModule, ConfigModule, FeaturesConfigModule, FormRequiredAsterisksComponent],
      exports: [UserRegistrationOTPFormComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, SpinnerModule, FormErrorsModule, NgSelectModule, NgSelectA11yModule, ConfigModule.withConfig({
        cmsComponents: {
          RegisterB2BCustomerWithOTPComponent: {
            component: UserRegistrationOTPFormComponent,
            guards: [NotAuthGuard]
          }
        }
      }), FeaturesConfigModule, FormRequiredAsterisksComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserRegistrationOTPFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, SpinnerModule, FormErrorsModule, NgSelectModule, NgSelectA11yModule, ConfigModule.withConfig({
        cmsComponents: {
          RegisterB2BCustomerWithOTPComponent: {
            component: UserRegistrationOTPFormComponent,
            guards: [NotAuthGuard]
          }
        }
      }), FeaturesConfigModule, FormRequiredAsterisksComponent],
      declarations: [UserRegistrationOTPFormComponent],
      exports: [UserRegistrationOTPFormComponent]
    }]
  }], null, null);
})();
var globalMsgShowTime = 1e4;
var RegisterVerificationTokenFormComponentService = class _RegisterVerificationTokenFormComponentService {
  constructor() {
    this.featureConfigService = inject(FeatureConfigService);
    this.globalMessage = inject(GlobalMessageService);
    this.formBuilder = inject(FormBuilder);
    this.organizationUserRegistrationFacade = inject(UserRegistrationFacade);
    this.translationService = inject(TranslationService);
    this.authConfigService = inject(AuthConfigService);
    this.routingService = inject(RoutingService);
    this.form = new UntypedFormGroup({
      tokenId: new UntypedFormControl("", [Validators.required]),
      tokenCode: new UntypedFormControl("", [Validators.required])
    });
  }
  buildMessageContent(formValue) {
    return this.translationService.translate("userRegistrationForm.messageToApproverTemplate", {
      phoneNumber: formValue.phoneNumber,
      addressLine: formValue.line1,
      secondAddressLine: formValue.line2,
      city: formValue.city,
      state: formValue.region?.isocode,
      postalCode: formValue.postalCode,
      country: formValue.country?.isocode,
      companyName: formValue.companyName,
      message: formValue.message
    });
  }
  /**
   * Redirects the user back to the login page.
   *
   * This only happens in case of the `ResourceOwnerPasswordFlow` OAuth flow and authorizationCodeFlowByDefault.
   */
  redirectToLogin() {
    if (this.authConfigService.getOAuthFlow() === OAuthFlow.ResourceOwnerPasswordFlow || this.featureConfigService.isEnabled("authorizationCodeFlowByDefault")) {
      this.routingService.go({
        cxRoute: "login"
      });
    }
  }
  displayMessage(key, params) {
    this.globalMessage.add({
      key,
      params
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION, globalMsgShowTime);
  }
  registerUser(formValue) {
    return this.buildMessageContent(formValue).pipe(take(1), switchMap((message) => this.organizationUserRegistrationFacade.registerUser({
      titleCode: formValue.titleCode,
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      email: formValue.email,
      message,
      verificationTokenId: this.form.get("tokenId")?.value,
      verificationTokenCode: this.form.get("tokenCode")?.value
    })), tap(() => {
      this.displayMessage("userRegistrationForm.successFormSubmitMessage", {});
      this.redirectToLogin();
    }));
  }
  static {
    this.ɵfac = function RegisterVerificationTokenFormComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegisterVerificationTokenFormComponentService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RegisterVerificationTokenFormComponentService,
      factory: _RegisterVerificationTokenFormComponentService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterVerificationTokenFormComponentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RegisterVerificationTokenFormComponent = class _RegisterVerificationTokenFormComponent {
  constructor() {
    this.featureConfigService = inject(FeatureConfigService);
    this.service = inject(RegisterVerificationTokenFormComponentService);
    this.launchDialogService = inject(LaunchDialogService);
    this.cdr = inject(ChangeDetectorRef);
    this.routingService = inject(RoutingService);
    this.verificationTokenFacade = inject(VerificationTokenFacade);
    this.form = this.service.form;
    this.isUpdating$ = new Subject();
    this.waitTime = 60;
    this.subscriptions = new Subscription();
    this.style = true;
    this.isResendDisabled = true;
    this.waitTimeForRateLimit = 300;
  }
  ngOnInit() {
    if (!!history.state) {
      this.registerData = history.state["registrationDataForm"];
      this.tokenId = history.state["tokenId"];
      this.target = history.state["loginId"];
      this.errorStatus = history.state["errorStatus"];
      history.pushState({
        tokenId: "",
        loginId: "",
        errorStatus: ""
      }, "verifyToken");
      if (this.errorStatus === 400) {
        this.upToRateLimit = true;
        this.tokenId = "invalidTokenId";
        this.startRateLimitWaitTimeInterval();
        this.isUpdating$.next(false);
      } else if (!this.target || !this.tokenId) {
        this.service.displayMessage("verificationTokenForm.needInputCredentials", {});
        this.routingService.go(this.featureConfigService.isEnabled("authorizationCodeFlowByDefault") ? {
          cxRoute: "register"
        } : ["/login/register"]);
        this.routingService.go(["/login/register"]);
      } else {
        this.startWaitTimeInterval();
        this.service.displayMessage("verificationTokenForm.createVerificationToken", {
          target: this.target
        });
      }
    }
  }
  onSubmit() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isUpdating$.next(true);
    this.subscriptions.add(this.service.registerUser(this.registerData).subscribe({
      complete: () => this.isUpdating$.next(false),
      error: () => {
        this.isUpdating$.next(false);
        this.form.get("tokenCode")?.setErrors({
          invalidTokenCodeError: true
        });
      }
    }));
  }
  resendOTP() {
    this.isResendDisabled = true;
    this.waitTime = 60;
    this.resendLink.nativeElement.tabIndex = -1;
    this.resendLink.nativeElement.blur();
    this.startWaitTimeInterval();
    this.verificationTokenFacade.createVerificationToken({
      loginId: this.target,
      purpose: ONE_TIME_PASSWORD_REGISTRATION_PURPOSE
    }).subscribe({
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
    this.ɵfac = function RegisterVerificationTokenFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegisterVerificationTokenFormComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _RegisterVerificationTokenFormComponent,
      selectors: [["cx-verification-token-form"]],
      viewQuery: function RegisterVerificationTokenFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5);
          ɵɵviewQuery(_c4, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.element = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resendLink = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function RegisterVerificationTokenFormComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("user-form", ctx.style);
        }
      },
      standalone: false,
      decls: 25,
      vars: 28,
      consts: [["resendLink", ""], ["noReceiveCodeLink", ""], ["class", "overlay", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "label-content"], ["required", "true", "formControlName", "tokenCode", "aria-describedby", "tokenInputHint", 1, "form-control", 3, "placeholder"], [3, "control"], ["class", "rate-limit-error-display", 4, "ngIf"], ["id", "tokenInputHint", 1, "cx-visually-hidden"], ["type", "hidden", "formControlName", "tokenId", 3, "ngModelChange", "ngModel"], ["class", "resend-link-text register-b2b-otp-resend-link-text", 4, "ngIf"], [1, "verify-container"], ["type", "submit", 1, "btn", "btn-block", "btn-primary", 3, "disabled"], [1, "btn", "btn-block", "btn-secondary", "btn-register", 3, "routerLink"], [1, "overlay"], [1, "rate-limit-error-display"], [1, "resend-link-text", "register-b2b-otp-resend-link-text"], [1, "left-text"], ["role", "timer", "aria-live", "polite", "aria-atomic", "true"], ["role", "button", "tabindex", "-1", 1, "btn-link", 3, "keydown.enter", "keydown.space", "click", "ngClass"], [4, "ngIf"], [1, "right-text"], ["role", "button", "tabindex", "0", 1, "btn-link", 3, "keydown", "click"]],
      template: function RegisterVerificationTokenFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, RegisterVerificationTokenFormComponent_cx_spinner_0_Template, 1, 0, "cx-spinner", 2);
          ɵɵpipe(1, "async");
          ɵɵelementStart(2, "form", 3);
          ɵɵlistener("ngSubmit", function RegisterVerificationTokenFormComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });
          ɵɵelementStart(3, "label")(4, "span", 4);
          ɵɵtext(5);
          ɵɵpipe(6, "cxTranslate");
          ɵɵelement(7, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(8, "input", 5);
          ɵɵpipe(9, "cxTranslate");
          ɵɵelement(10, "cx-form-errors", 6);
          ɵɵtemplate(11, RegisterVerificationTokenFormComponent_div_11_Template, 3, 6, "div", 7);
          ɵɵelementEnd();
          ɵɵelementStart(12, "span", 8);
          ɵɵtext(13);
          ɵɵpipe(14, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(15, "input", 9);
          ɵɵtwoWayListener("ngModelChange", function RegisterVerificationTokenFormComponent_Template_input_ngModelChange_15_listener($event) {
            ɵɵtwoWayBindingSet(ctx.tokenId, $event) || (ctx.tokenId = $event);
            return $event;
          });
          ɵɵelementEnd();
          ɵɵtemplate(16, RegisterVerificationTokenFormComponent_div_16_Template, 13, 10, "div", 10);
          ɵɵelementStart(17, "div", 11)(18, "button", 12);
          ɵɵtext(19);
          ɵɵpipe(20, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(21, "button", 13);
          ɵɵpipe(22, "cxUrl");
          ɵɵtext(23);
          ɵɵpipe(24, "cxTranslate");
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 13, ctx.isUpdating$));
          ɵɵadvance(2);
          ɵɵproperty("formGroup", ctx.form);
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 15, "verificationTokenForm.verificationCode.label"), " ");
          ɵɵadvance(3);
          ɵɵproperty("placeholder", ɵɵpipeBind1(9, 17, "verificationTokenForm.verificationCode.placeholder"));
          ɵɵadvance(2);
          ɵɵproperty("control", ctx.form.get("tokenCode"));
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.upToRateLimit);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(14, 19, "verificationTokenForm.tokenInputHint"), " ");
          ɵɵadvance(2);
          ɵɵtwoWayProperty("ngModel", ctx.tokenId);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.upToRateLimit);
          ɵɵadvance(2);
          ɵɵproperty("disabled", ctx.form.disabled);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 21, "verificationTokenForm.registerVerify"), " ");
          ɵɵadvance(2);
          ɵɵproperty("routerLink", ɵɵpipeBind1(22, 23, ɵɵpureFunction0(27, _c5)));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(24, 25, "verificationTokenForm.back"), " ");
        }
      },
      dependencies: [NgClass, NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, RouterLink, FormErrorsComponent, SpinnerComponent, FormRequiredAsterisksComponent, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterVerificationTokenFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-verification-token-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<cx-spinner class="overlay" *ngIf="isUpdating$ | async"></cx-spinner>

<form (ngSubmit)="onSubmit()" [formGroup]="form">
  <label>
    <span class="label-content">
      {{ 'verificationTokenForm.verificationCode.label' | cxTranslate }}
      <cx-form-required-asterisks />
    </span>
    <input
      required="true"
      class="form-control"
      formControlName="tokenCode"
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

  <input type="hidden" formControlName="tokenId" [(ngModel)]="tokenId" />

  <div
    *ngIf="!upToRateLimit"
    class="resend-link-text register-b2b-otp-resend-link-text"
  >
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
      {{ 'verificationTokenForm.registerVerify' | cxTranslate }}
    </button>
    <button
      [routerLink]="{ cxRoute: 'register' } | cxUrl"
      class="btn btn-block btn-secondary btn-register"
    >
      {{ 'verificationTokenForm.back' | cxTranslate }}
    </button>
  </div>
</form>
`
    }]
  }], null, {
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
    }]
  });
})();
var RegisterVerificationTokenFormModule = class _RegisterVerificationTokenFormModule {
  static {
    this.ɵfac = function RegisterVerificationTokenFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegisterVerificationTokenFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RegisterVerificationTokenFormModule,
      declarations: [RegisterVerificationTokenFormComponent],
      imports: [CommonModule, FormsModule, KeyboardFocusModule, ReactiveFormsModule, RouterModule, UrlModule, IconModule, I18nModule, FormErrorsModule, SpinnerModule, FeaturesConfigModule, FormRequiredAsterisksComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          VerifyOTPForB2BRegistrationComponent: {
            component: RegisterVerificationTokenFormComponent,
            guards: [NotAuthGuard],
            providers: [{
              provide: RegisterVerificationTokenFormComponentService,
              useClass: RegisterVerificationTokenFormComponentService,
              deps: [AuthService, GlobalMessageService, VerificationTokenFacade, WindowRef]
            }]
          }
        }
      })],
      imports: [CommonModule, FormsModule, KeyboardFocusModule, ReactiveFormsModule, RouterModule, UrlModule, IconModule, I18nModule, FormErrorsModule, SpinnerModule, FeaturesConfigModule, FormRequiredAsterisksComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterVerificationTokenFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, KeyboardFocusModule, ReactiveFormsModule, RouterModule, UrlModule, IconModule, I18nModule, FormErrorsModule, SpinnerModule, FeaturesConfigModule, FormRequiredAsterisksComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          VerifyOTPForB2BRegistrationComponent: {
            component: RegisterVerificationTokenFormComponent,
            guards: [NotAuthGuard],
            providers: [{
              provide: RegisterVerificationTokenFormComponentService,
              useClass: RegisterVerificationTokenFormComponentService,
              deps: [AuthService, GlobalMessageService, VerificationTokenFacade, WindowRef]
            }]
          }
        }
      })],
      declarations: [RegisterVerificationTokenFormComponent]
    }]
  }], null, null);
})();
var UserRegistrationComponentsModule = class _UserRegistrationComponentsModule {
  static {
    this.ɵfac = function UserRegistrationComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserRegistrationComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserRegistrationComponentsModule,
      imports: [RouterModule, UserRegistrationFormModule, UserRegistrationOTPFormModule, RegisterVerificationTokenFormModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [RouterModule, UserRegistrationFormModule, UserRegistrationOTPFormModule, RegisterVerificationTokenFormModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserRegistrationComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule, UserRegistrationFormModule, UserRegistrationOTPFormModule, RegisterVerificationTokenFormModule]
    }]
  }], null, null);
})();

export {
  UserRegistrationFormService,
  UserRegistrationComponentsModule
};
//# sourceMappingURL=chunk-W5P3USWW.js.map
