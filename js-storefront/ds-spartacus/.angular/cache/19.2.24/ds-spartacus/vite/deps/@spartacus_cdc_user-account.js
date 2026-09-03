import {
  CdcConsentManagementComponentService,
  CdcJsService,
  CdcReConsentEvent,
  CdcUserConsentService
} from "./chunk-DAEC7GJ6.js";
import {
  LoginFormComponent,
  LoginFormComponentService
} from "./chunk-DDZIJZKE.js";
import "./chunk-YJXUXPBZ.js";
import "./chunk-LZQV6UAH.js";
import {
  BtnLikeLinkDirective,
  BtnLikeLinkModule,
  ConsentManagementFormComponent,
  ConsentManagementModule,
  DIALOG_TYPE,
  FocusDirective,
  FormErrorsModule,
  ICON_TYPE,
  IconComponent,
  IconModule,
  KeyboardFocusModule,
  LAUNCH_CALLER,
  LaunchDialogService,
  SpinnerComponent,
  SpinnerModule
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  AnonymousConsentsService,
  AuthService,
  EventService,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  NotAuthGuard,
  TranslatePipe,
  UrlModule,
  WindowRef,
  provideDefaultConfig
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
  RouterModule
} from "./chunk-EBCNDD52.js";
import "./chunk-YMQEGXEG.js";
import "./chunk-6KXUHIAW.js";
import "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import "./chunk-2A6OHZCE.js";
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  NgModule,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  map,
  of,
  take
} from "./chunk-R6FETK65.js";
import {
  Subscription
} from "./chunk-WTM5FSU4.js";
import {
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/cdc/fesm2022/spartacus-cdc-user-account.mjs
function CdcReconsentComponent_ng_container_2_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15)(1, "cx-consent-management-form", 16);
    ɵɵlistener("consentChanged", function CdcReconsentComponent_ng_container_2_div_15_div_1_Template_cx_consent_management_form_consentChanged_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onConsentChange($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const consentTemplate_r5 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("consentTemplate", consentTemplate_r5)("showMandatory", ctx_r2.requiredReconsents.includes((tmp_7_0 = consentTemplate_r5.id) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : ""));
  }
}
function CdcReconsentComponent_ng_container_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtemplate(1, CdcReconsentComponent_ng_container_2_div_15_div_1_Template, 2, 2, "div", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const templateList_r6 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngForOf", templateList_r6);
  }
}
function CdcReconsentComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 4)(2, "h3");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵpipe(7, "cxTranslate");
    ɵɵlistener("click", function CdcReconsentComponent_ng_container_2_Template_button_click_5_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.dismissDialog("Cross click", ctx_r2.reconsentEvent.errorMessage));
    });
    ɵɵelementStart(8, "span", 6);
    ɵɵelement(9, "cx-icon", 7);
    ɵɵelementEnd()()();
    ɵɵelementStart(10, "div", 8);
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelement(13, "div", 9);
    ɵɵelementEnd();
    ɵɵelement(14, "div", 10);
    ɵɵtemplate(15, CdcReconsentComponent_ng_container_2_div_15_Template, 2, 1, "div", 11);
    ɵɵpipe(16, "async");
    ɵɵelementStart(17, "div", 10)(18, "a", 12);
    ɵɵlistener("click", function CdcReconsentComponent_ng_container_2_Template_a_click_18_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.dismissDialog("Proceed To Login", ctx_r2.reconsentEvent.errorMessage));
    });
    ɵɵtext(19);
    ɵɵpipe(20, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 9, "reconsent.dialog.title"), " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(6, 11, "common.close"));
    ɵɵattribute("aria-label", ɵɵpipeBind1(7, 13, "common.close"));
    ɵɵadvance(4);
    ɵɵproperty("type", ctx_r2.iconTypes.CLOSE);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 15, "reconsent.dialog.description"), " ");
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ɵɵpipeBind1(16, 17, ctx_r2.templateList$));
    ɵɵadvance(3);
    ɵɵclassProp("disabled", ctx_r2.disableSubmitButton);
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(20, 19, "common.submit"));
  }
}
function CdcReconsentComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-spinner");
  }
}
var CdcLoginFormComponentService = class _CdcLoginFormComponentService extends LoginFormComponentService {
  constructor(auth, globalMessageService, winRef, cdcJsService) {
    super(auth, globalMessageService, winRef);
    this.auth = auth;
    this.globalMessageService = globalMessageService;
    this.winRef = winRef;
    this.cdcJsService = cdcJsService;
    this.subscription = new Subscription();
  }
  login() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.busy$.next(true);
    this.subscription.add(this.cdcJsService.didLoad().subscribe((cdcLoaded) => {
      if (cdcLoaded) {
        this.cdcJsService.loginUserWithoutScreenSet(this.form.value.userId.toLowerCase(), this.form.value.password).subscribe({
          next: () => this.busy$.next(false),
          error: () => this.busy$.next(false)
        });
      } else {
        this.globalMessageService.add({
          key: "errorHandlers.scriptFailedToLoad"
        }, GlobalMessageType.MSG_TYPE_ERROR);
        this.busy$.next(false);
      }
    }));
  }
  initCustomLogin() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function CdcLoginFormComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcLoginFormComponentService)(ɵɵinject(AuthService), ɵɵinject(GlobalMessageService), ɵɵinject(WindowRef), ɵɵinject(CdcJsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcLoginFormComponentService,
      factory: _CdcLoginFormComponentService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcLoginFormComponentService, [{
    type: Injectable
  }], () => [{
    type: AuthService
  }, {
    type: GlobalMessageService
  }, {
    type: WindowRef
  }, {
    type: CdcJsService
  }], null);
})();
var CdcReconsentDialogEventListener = class _CdcReconsentDialogEventListener {
  constructor(eventService, launchDialogService) {
    this.eventService = eventService;
    this.launchDialogService = launchDialogService;
    this.subscription = new Subscription();
    this.onReconsent();
  }
  onReconsent() {
    this.subscription.add(this.eventService.get(CdcReConsentEvent).subscribe((event) => {
      this.openDialog(event);
    }));
  }
  openDialog(event) {
    const reconsentData = {
      user: event.user,
      password: event.password,
      consentIds: event.consentIds,
      errorMessage: event.errorMessage,
      regToken: event.regToken,
      preferences: event.preferences
    };
    const dialog = this.launchDialogService.openDialog(LAUNCH_CALLER.CDC_RECONSENT, void 0, void 0, reconsentData);
    if (dialog) {
      dialog.pipe(take(1)).subscribe();
    }
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function CdcReconsentDialogEventListener_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcReconsentDialogEventListener)(ɵɵinject(EventService), ɵɵinject(LaunchDialogService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcReconsentDialogEventListener,
      factory: _CdcReconsentDialogEventListener.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcReconsentDialogEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }, {
    type: LaunchDialogService
  }], null);
})();
var CdcReconsentComponentService = class _CdcReconsentComponentService {
  constructor(cdcUserConsentService, cdcJsService, globalMessageService, launchDialogService) {
    this.cdcUserConsentService = cdcUserConsentService;
    this.cdcJsService = cdcJsService;
    this.globalMessageService = globalMessageService;
    this.launchDialogService = launchDialogService;
    this.subscription = new Subscription();
  }
  /**
   * saves the preferences given in reconsent pop-up and triggers a re-login
   * @param consents array of consent ID with status
   * @param userParams data from login session
   */
  savePreferencesAndLogin(consents, userParams) {
    this.subscription.add(this.cdcJsService.didLoad().subscribe((cdcLoaded) => {
      if (cdcLoaded) {
        this.cdcUserConsentService.updateCdcUserPreferences(consents, userParams?.user, userParams?.regToken).subscribe({
          next: (result) => {
            if (result?.errorCode === 0) {
              this.cdcJsService.loginUserWithoutScreenSet(userParams.user, userParams.password).subscribe(() => {
                this.launchDialogService.closeDialog("relogin successful");
              });
            }
          },
          error: (error) => {
            this.handleReconsentUpdateError("Reconsent Error", error?.message);
          }
        });
      } else {
        this.globalMessageService.add({
          key: "errorHandlers.scriptFailedToLoad"
        }, GlobalMessageType.MSG_TYPE_ERROR);
      }
    }));
  }
  /**
   * saves the consent given from reconsent pop-up and triggers a re-login
   * @param consentId - array of consent IDs
   * @param userParams - data from login session
   * @deprecated since 2211.38, use method savePreferencesAndLogin instead
   */
  // CXSPA-9292: remove this method in next major release
  saveConsentAndLogin(consentId, userParams) {
    this.subscription.add(this.cdcJsService.didLoad().subscribe((cdcLoaded) => {
      if (cdcLoaded) {
        this.cdcUserConsentService.updateCdcConsent(true, consentId, userParams?.user, userParams?.regToken).subscribe({
          next: (result) => {
            if (result?.errorCode === 0) {
              this.cdcJsService.loginUserWithoutScreenSet(userParams.user, userParams.password).subscribe(() => {
                this.launchDialogService.closeDialog("relogin triggered");
              });
            }
          },
          error: (error) => {
            this.handleReconsentUpdateError("Reconsent Error", error?.message);
          }
        });
      } else {
        this.globalMessageService.add({
          key: "errorHandlers.scriptFailedToLoad"
        }, GlobalMessageType.MSG_TYPE_ERROR);
      }
    }));
  }
  /**
   * Displays error message after closing reconsent dialog
   */
  handleReconsentUpdateError(reason, errorMessage) {
    this.launchDialogService.closeDialog(reason);
    if (errorMessage) {
      this.globalMessageService.add({
        key: "httpHandlers.badRequestPleaseLoginAgain",
        params: {
          errorMessage
        }
      }, GlobalMessageType.MSG_TYPE_ERROR);
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function CdcReconsentComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcReconsentComponentService)(ɵɵinject(CdcUserConsentService), ɵɵinject(CdcJsService), ɵɵinject(GlobalMessageService), ɵɵinject(LaunchDialogService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcReconsentComponentService,
      factory: _CdcReconsentComponentService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcReconsentComponentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CdcUserConsentService
  }, {
    type: CdcJsService
  }, {
    type: GlobalMessageService
  }, {
    type: LaunchDialogService
  }], null);
})();
var CdcReconsentComponent = class _CdcReconsentComponent {
  constructor(launchDialogService, anonymousConsentsService, cdcReconsentService) {
    this.launchDialogService = launchDialogService;
    this.anonymousConsentsService = anonymousConsentsService;
    this.cdcReconsentService = cdcReconsentService;
    this.subscription = new Subscription();
    this.cdcConsentManagementComponentService = inject(CdcConsentManagementComponentService);
    this.form = new UntypedFormGroup({});
    this.iconTypes = ICON_TYPE;
    this.loaded$ = of(false);
    this.reconsentEvent = {};
    this.requiredReconsents = [];
    this.selectedConsents = [];
    this.disableSubmitButton = true;
    this.totalConsents = 0;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button",
      focusOnEscape: true
    };
  }
  ngOnInit() {
    this.subscription.add(this.launchDialogService.data$.subscribe((data) => {
      this.reconsentEvent = __spreadValues({}, data);
      this.loadConsents(data.consentIds);
    }));
  }
  loadConsents(reconsentIds) {
    this.templateList$ = this.anonymousConsentsService.getTemplates(true).pipe(map((templates) => templates.filter((template) => reconsentIds.includes(template.id || ""))));
    this.requiredReconsents = reconsentIds.filter((id) => this.cdcConsentManagementComponentService.getCdcConsentIDs(true).includes(id));
    this.disableSubmitButton = this.requiredReconsents.length > 0;
    this.loaded$ = of(true);
  }
  onConsentChange(event) {
    if (!event.template?.id) {
      return;
    }
    const {
      given,
      template
    } = event;
    this.updateSelectedConsents(given, template.id ?? "");
    this.areAllMandatoryConsentsGiven().subscribe((result) => {
      this.disableSubmitButton = !result;
    });
  }
  dismissDialog(reason, message) {
    if (reason === "Proceed To Login") {
      this.loaded$ = of(false);
      this.templateList$.subscribe((templates) => {
        const consents = this.buildPreferenceList(templates);
        if (consents.length) {
          this.cdcReconsentService.savePreferencesAndLogin(consents, this.reconsentEvent);
        }
      });
    } else {
      this.cdcReconsentService.handleReconsentUpdateError(reason, message);
    }
  }
  buildPreferenceList(templates) {
    const preferences = this.reconsentEvent.preferences || {};
    const consents = Object.entries(preferences).map(([id, value]) => ({
      id,
      isConsentGranted: value?.isConsentGranted || false
    }));
    templates.forEach((template) => {
      const existingIndex = consents.findIndex((consent) => consent.id === template.id);
      if (existingIndex !== -1) {
        consents.splice(existingIndex, 1);
      }
      consents.push({
        id: template.id || "",
        isConsentGranted: this.selectedConsents.includes(template.id || "")
      });
    });
    return consents;
  }
  areAllMandatoryConsentsGiven() {
    return this.templateList$.pipe(map((templates) => templates.every((template) => !this.requiredReconsents.includes(template.id || "") || this.selectedConsents.includes(template.id || ""))));
  }
  updateSelectedConsents(given, templateId) {
    if (given) {
      if (!this.selectedConsents.includes(templateId)) {
        this.selectedConsents.push(templateId);
      }
    } else {
      this.selectedConsents = this.selectedConsents.filter((id) => id !== templateId);
    }
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function CdcReconsentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcReconsentComponent)(ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(AnonymousConsentsService), ɵɵdirectiveInject(CdcReconsentComponentService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CdcReconsentComponent,
      selectors: [["cx-anonymous-consent-dialog"]],
      standalone: false,
      decls: 6,
      vars: 5,
      consts: [["loading", ""], [1, "modal-dialog", "modal-dialog-centered", "modal-lg", "cx-anonymous-consent-dialog", 3, "esc", "cxFocus"], [1, "modal-content", "cx-dialog-content"], [4, "ngIf", "ngIfElse"], [1, "modal-header", "cx-dialog-header"], ["type", "button", 1, "close", 3, "click", "title"], ["aria-hidden", "true"], [3, "type"], [1, "cx-dialog-description"], [1, "cx-dialog-separator", "col-sm-12", "d-xs-block", "d-sm-block", "d-md-none"], [1, "cx-dialog-buttons"], ["class", "modal-body cx-dialog-body", 4, "ngIf"], ["cxBtnLikeLink", "", "autofocus", "", 1, "btn", "btn-primary", 3, "click"], [1, "modal-body", "cx-dialog-body"], ["class", "cx-dialog-row col-sm-12 col-md-6", 4, "ngFor", "ngForOf"], [1, "cx-dialog-row", "col-sm-12", "col-md-6"], [3, "consentChanged", "consentTemplate", "showMandatory"]],
      template: function CdcReconsentComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 1);
          ɵɵlistener("esc", function CdcReconsentComponent_Template_div_esc_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.dismissDialog("Escape pressed", ctx.reconsentEvent.errorMessage));
          });
          ɵɵelementStart(1, "div", 2);
          ɵɵtemplate(2, CdcReconsentComponent_ng_container_2_Template, 21, 21, "ng-container", 3);
          ɵɵpipe(3, "async");
          ɵɵelementEnd();
          ɵɵtemplate(4, CdcReconsentComponent_ng_template_4_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const loading_r7 = ɵɵreference(5);
          ɵɵproperty("cxFocus", ctx.focusConfig);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(3, 3, ctx.loaded$))("ngIfElse", loading_r7);
        }
      },
      dependencies: [NgForOf, NgIf, SpinnerComponent, IconComponent, FocusDirective, ConsentManagementFormComponent, BtnLikeLinkDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcReconsentComponent, [{
    type: Component,
    args: [{
      selector: "cx-anonymous-consent-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  class="modal-dialog modal-dialog-centered modal-lg cx-anonymous-consent-dialog"
  [cxFocus]="focusConfig"
  (esc)="dismissDialog('Escape pressed', reconsentEvent.errorMessage)"
>
  <div class="modal-content cx-dialog-content">
    <!-- Modal Header -->
    <ng-container *ngIf="loaded$ | async; else loading">
      <div class="modal-header cx-dialog-header">
        <h3>
          {{ 'reconsent.dialog.title' | cxTranslate }}
        </h3>
        <button
          type="button"
          class="close"
          title="{{ 'common.close' | cxTranslate }}"
          [attr.aria-label]="'common.close' | cxTranslate"
          (click)="dismissDialog('Cross click', reconsentEvent.errorMessage)"
        >
          <span aria-hidden="true">
            <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
          </span>
        </button>
      </div>
      <div class="cx-dialog-description">
        {{ 'reconsent.dialog.description' | cxTranslate }}
        <div
          class="cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none"
        ></div>
      </div>
      <div class="cx-dialog-buttons"></div>
      <!-- Modal Body -->
      <div
        class="modal-body cx-dialog-body"
        *ngIf="templateList$ | async as templateList"
      >
        <div
          class="cx-dialog-row col-sm-12 col-md-6"
          *ngFor="let consentTemplate of templateList"
        >
          <cx-consent-management-form
            [consentTemplate]="consentTemplate"
            (consentChanged)="onConsentChange($event)"
            [showMandatory]="
              requiredReconsents.includes(consentTemplate.id ?? '')
            "
          ></cx-consent-management-form>
        </div>
      </div>
      <!-- Actions -->
      <div class="cx-dialog-buttons">
        <a
          [class.disabled]="disableSubmitButton"
          (click)="
            dismissDialog('Proceed To Login', reconsentEvent.errorMessage)
          "
          class="btn btn-primary"
          cxBtnLikeLink
          autofocus
          >{{ 'common.submit' | cxTranslate }}</a
        >
      </div>
    </ng-container>
  </div>

  <ng-template #loading>
    <cx-spinner></cx-spinner>
  </ng-template>
</div>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: AnonymousConsentsService
  }, {
    type: CdcReconsentComponentService
  }], null);
})();
var defaultCdcReconsentLayoutConfig = {
  launch: {
    CDC_RECONSENT: {
      inlineRoot: true,
      component: CdcReconsentComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var CdcReconsentModule = class _CdcReconsentModule {
  constructor(_cdcReconsentDialogEventListener) {
  }
  static {
    this.ɵfac = function CdcReconsentModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcReconsentModule)(ɵɵinject(CdcReconsentDialogEventListener));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CdcReconsentModule,
      declarations: [CdcReconsentComponent],
      imports: [CommonModule, SpinnerModule, IconModule, I18nModule, KeyboardFocusModule, ConsentManagementModule, BtnLikeLinkModule],
      exports: [CdcReconsentComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultCdcReconsentLayoutConfig)],
      imports: [CommonModule, SpinnerModule, IconModule, I18nModule, KeyboardFocusModule, ConsentManagementModule, BtnLikeLinkModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcReconsentModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig(defaultCdcReconsentLayoutConfig)],
      declarations: [CdcReconsentComponent],
      exports: [CdcReconsentComponent],
      imports: [CommonModule, SpinnerModule, IconModule, I18nModule, KeyboardFocusModule, ConsentManagementModule, BtnLikeLinkModule]
    }]
  }], () => [{
    type: CdcReconsentDialogEventListener
  }], null);
})();
var CDCLoginFormModule = class _CDCLoginFormModule {
  static {
    this.ɵfac = function CDCLoginFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CDCLoginFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CDCLoginFormModule,
      imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, FormErrorsModule, SpinnerModule, CdcReconsentModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        authentication: {
          customLoginPage: void 0
        }
      }), provideDefaultConfig({
        cmsComponents: {
          ReturningCustomerLoginComponent: {
            component: LoginFormComponent,
            guards: [NotAuthGuard],
            providers: [{
              provide: LoginFormComponentService,
              useClass: CdcLoginFormComponentService,
              deps: [AuthService, GlobalMessageService, WindowRef, CdcJsService]
            }]
          }
        }
      })],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, FormErrorsModule, SpinnerModule, CdcReconsentModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CDCLoginFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, FormErrorsModule, SpinnerModule, CdcReconsentModule],
      providers: [provideDefaultConfig({
        authentication: {
          customLoginPage: void 0
        }
      }), provideDefaultConfig({
        cmsComponents: {
          ReturningCustomerLoginComponent: {
            component: LoginFormComponent,
            guards: [NotAuthGuard],
            providers: [{
              provide: LoginFormComponentService,
              useClass: CdcLoginFormComponentService,
              deps: [AuthService, GlobalMessageService, WindowRef, CdcJsService]
            }]
          }
        }
      })]
    }]
  }], null, null);
})();
var CDCUserAccountModule = class _CDCUserAccountModule {
  static {
    this.ɵfac = function CDCUserAccountModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CDCUserAccountModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CDCUserAccountModule,
      imports: [CDCLoginFormModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CDCLoginFormModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CDCUserAccountModule, [{
    type: NgModule,
    args: [{
      imports: [CDCLoginFormModule]
    }]
  }], null, null);
})();
export {
  CDCLoginFormModule,
  CDCUserAccountModule,
  CdcLoginFormComponentService,
  CdcReconsentComponent,
  CdcReconsentComponentService,
  CdcReconsentDialogEventListener,
  CdcReconsentModule,
  defaultCdcReconsentLayoutConfig
};
//# sourceMappingURL=@spartacus_cdc_user-account.js.map
