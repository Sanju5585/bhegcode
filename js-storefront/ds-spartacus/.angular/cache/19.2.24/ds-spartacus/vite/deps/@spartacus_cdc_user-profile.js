import {
  ForgotPasswordComponent,
  ForgotPasswordComponentService,
  RegisterComponentService,
  UpdateEmailComponentService,
  UpdatePasswordComponentService,
  UpdateProfileComponentService
} from "./chunk-XTCFQJ22.js";
import {
  CDC_PREFERENCE_SERIALIZER,
  CDC_USER_PREFERENCE_SERIALIZER,
  CdcConsentManagementComponentService,
  CdcJsService,
  CdcLoadUserTokenFailEvent
} from "./chunk-DAEC7GJ6.js";
import "./chunk-DDZIJZKE.js";
import {
  UserEmailFacade,
  UserPasswordFacade,
  UserProfileFacade,
  UserRegisterFacade
} from "./chunk-YJXUXPBZ.js";
import "./chunk-LZQV6UAH.js";
import {
  FormErrorsModule,
  NgSelectA11yModule,
  PasswordVisibilityToggleModule,
  SpinnerModule
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  AnonymousConsentsService,
  AuthConfigService,
  AuthRedirectService,
  AuthService,
  CommandService,
  ConverterService,
  EventService,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  RoutingService,
  UrlModule,
  provideDefaultConfig
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
  RouterModule
} from "./chunk-EBCNDD52.js";
import {
  NgSelectModule
} from "./chunk-YMQEGXEG.js";
import "./chunk-6KXUHIAW.js";
import {
  Store
} from "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import "./chunk-2A6OHZCE.js";
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators
} from "./chunk-YST33EXT.js";
import {
  CommonModule
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  Injectable,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import {
  merge
} from "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  filter,
  map,
  tap,
  throwError
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/cdc/fesm2022/spartacus-cdc-user-profile.mjs
var CDCRegisterComponentService = class _CDCRegisterComponentService extends RegisterComponentService {
  constructor(userRegisterFacade, command, store, cdcJSService, globalMessageService, authService, eventService, userProfileFacade, cdcConsentManagementService, converter, fb, anonymousConsentsService) {
    super(userRegisterFacade, globalMessageService, fb);
    this.userRegisterFacade = userRegisterFacade;
    this.command = command;
    this.store = store;
    this.cdcJSService = cdcJSService;
    this.globalMessageService = globalMessageService;
    this.authService = authService;
    this.eventService = eventService;
    this.userProfileFacade = userProfileFacade;
    this.cdcConsentManagementService = cdcConsentManagementService;
    this.converter = converter;
    this.fb = fb;
    this.anonymousConsentsService = anonymousConsentsService;
    this.registerCommand = this.command.create(({
      user
    }) => (
      // Registering user through CDC Gigya SDK
      this.cdcJSService.registerUserWithoutScreenSet(user)
    ));
    this.loadUserTokenFailed$ = this.eventService.get(CdcLoadUserTokenFailEvent).pipe(map((event) => !!event), tap((failed) => {
      if (failed) {
        throw new Error(`User token failed to load.`);
      }
    }));
    this.isLoggedIn$ = this.authService.isUserLoggedIn().pipe(filter((loggedIn) => loggedIn));
  }
  /**
   * Register a new user using CDC SDK.
   *
   * @param user as UserSignUp
   */
  register(user) {
    if (!user.firstName || !user.lastName || !user.uid || !user.password) {
      return throwError(() => `The provided user is not valid: ${user}`);
    }
    return this.cdcJSService.didLoad().pipe(tap((cdcLoaded) => {
      if (!cdcLoaded) {
        this.globalMessageService.add({
          key: "errorHandlers.scriptFailedToLoad"
        }, GlobalMessageType.MSG_TYPE_ERROR);
        throw new Error(`CDC script didn't load.`);
      }
    }), switchMap(() => (
      // Logging in using CDC Gigya SDK, update the registerCommand
      this.registerCommand.execute({
        user
      })
    )), switchMap(() => merge(this.loadUserTokenFailed$, this.isLoggedIn$).pipe(map(() => {
      this.userProfileFacade.update(user);
    }))), switchMap(() => {
      return this.userProfileFacade.get().pipe(filter((userObj) => Boolean(userObj)));
    }));
  }
  /**
   * Return preferences object that needs to be updated during register process
   * @returns preference object
   * @deprecated since 2211.38
   */
  // CXSPA-9292: remove this method in next major release
  generatePreferencesObject() {
    let preferences = null;
    const consentIDs = this.cdcConsentManagementService.getCdcConsentIDs();
    for (const id of consentIDs) {
      const consent = {};
      consent.id = id;
      consent.currentConsent = {};
      consent.currentConsent.consentGivenDate = /* @__PURE__ */ new Date();
      const serializedPreference = this.converter.convert(consent, CDC_USER_PREFERENCE_SERIALIZER);
      preferences = Object.assign(preferences ?? {}, serializedPreference);
    }
    return preferences;
  }
  // @override
  postRegisterMessage() {
  }
  /**
   * fetch consents that exist in commerce and is active in cdc
   * @returns array of consent templates
   */
  fetchCdcConsentsForRegistration() {
    const consentList = [];
    const cdcActiveConsents = this.cdcConsentManagementService.getCdcConsentIDs();
    this.anonymousConsentsService.getTemplates().subscribe((templates) => {
      if (templates && templates.length > 0) {
        for (const template of templates) {
          if (template.id && cdcActiveConsents.includes(template.id)) {
            consentList.push(template);
          }
        }
      }
    });
    return consentList;
  }
  /**
   * generates a form array with form control for each consent
   * @returns a form array
   */
  generateAdditionalConsentsFormControl() {
    const consentArray = this.fb.array([]);
    const templates = this.fetchCdcConsentsForRegistration();
    for (const template of templates) {
      const isMandatory = this.cdcConsentManagementService.isConsentMandatory(template.id ?? "");
      consentArray.push(this.fb.group({
        id: [template.id],
        isConsentGranted: [false, isMandatory ? Validators.requiredTrue : []]
      }));
    }
    return consentArray;
  }
  /**
   * creates an array of active cdc consents and makes them mandatory to be provided during registration
   * @returns consent templates in the necessary format for the component
   */
  getAdditionalConsents() {
    const templates = this.fetchCdcConsentsForRegistration();
    const returnConsents = [];
    for (const template of templates) {
      const returnConsent = {};
      returnConsent["template"] = template;
      returnConsent["required"] = this.cdcConsentManagementService.isConsentMandatory(template.id ?? "");
      returnConsents.push(returnConsent);
    }
    return returnConsents;
  }
  collectDataFromRegisterForm(formData) {
    const {
      firstName,
      lastName,
      email,
      password,
      titleCode,
      additionalConsents
    } = formData;
    return {
      firstName,
      lastName,
      password,
      titleCode,
      uid: email.toLowerCase(),
      preferences: this.converter.convert(additionalConsents, CDC_PREFERENCE_SERIALIZER)
    };
  }
  static {
    this.ɵfac = function CDCRegisterComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CDCRegisterComponentService)(ɵɵinject(UserRegisterFacade), ɵɵinject(CommandService), ɵɵinject(Store), ɵɵinject(CdcJsService), ɵɵinject(GlobalMessageService), ɵɵinject(AuthService), ɵɵinject(EventService), ɵɵinject(UserProfileFacade), ɵɵinject(CdcConsentManagementComponentService), ɵɵinject(ConverterService), ɵɵinject(UntypedFormBuilder), ɵɵinject(AnonymousConsentsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CDCRegisterComponentService,
      factory: _CDCRegisterComponentService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CDCRegisterComponentService, [{
    type: Injectable
  }], () => [{
    type: UserRegisterFacade
  }, {
    type: CommandService
  }, {
    type: Store
  }, {
    type: CdcJsService
  }, {
    type: GlobalMessageService
  }, {
    type: AuthService
  }, {
    type: EventService
  }, {
    type: UserProfileFacade
  }, {
    type: CdcConsentManagementComponentService
  }, {
    type: ConverterService
  }, {
    type: UntypedFormBuilder
  }, {
    type: AnonymousConsentsService
  }], null);
})();
var CDCRegisterModule = class _CDCRegisterModule {
  static {
    this.ɵfac = function CDCRegisterModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CDCRegisterModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CDCRegisterModule,
      imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, SpinnerModule, FormErrorsModule, NgSelectModule, NgSelectA11yModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          RegisterCustomerComponent: {
            providers: [{
              provide: RegisterComponentService,
              useClass: CDCRegisterComponentService
            }]
          }
        }
      })],
      imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, SpinnerModule, FormErrorsModule, NgSelectModule, NgSelectA11yModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CDCRegisterModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, SpinnerModule, FormErrorsModule, NgSelectModule, NgSelectA11yModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          RegisterCustomerComponent: {
            providers: [{
              provide: RegisterComponentService,
              useClass: CDCRegisterComponentService
            }]
          }
        }
      })]
    }]
  }], null, null);
})();
var CDCForgotPasswordComponentService = class _CDCForgotPasswordComponentService extends ForgotPasswordComponentService {
  constructor(userPasswordService, routingService, authConfigService, globalMessage, cdcJsService) {
    super(userPasswordService, routingService, authConfigService, globalMessage);
    this.userPasswordService = userPasswordService;
    this.routingService = routingService;
    this.authConfigService = authConfigService;
    this.globalMessage = globalMessage;
    this.cdcJsService = cdcJsService;
    this.subscription = new Subscription();
  }
  /**
   * Sends an email to through CDC SDK to reset the password.
   */
  requestEmail() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.busy$.next(true);
    this.subscription.add(this.cdcJsService.didLoad().subscribe((cdcLoaded) => {
      if (cdcLoaded) {
        this.cdcJsService.resetPasswordWithoutScreenSet(this.form.value.userEmail).subscribe({
          next: (response) => {
            this.busy$.next(false);
            if (response.status === "OK") {
              this.onSuccess();
            }
          },
          error: () => this.busy$.next(false)
        });
      } else {
        this.busy$.next(false);
        this.globalMessage.add({
          key: "errorHandlers.scriptFailedToLoad"
        }, GlobalMessageType.MSG_TYPE_ERROR);
      }
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function CDCForgotPasswordComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CDCForgotPasswordComponentService)(ɵɵinject(UserPasswordFacade), ɵɵinject(RoutingService), ɵɵinject(AuthConfigService), ɵɵinject(GlobalMessageService), ɵɵinject(CdcJsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CDCForgotPasswordComponentService,
      factory: _CDCForgotPasswordComponentService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CDCForgotPasswordComponentService, [{
    type: Injectable
  }], () => [{
    type: UserPasswordFacade
  }, {
    type: RoutingService
  }, {
    type: AuthConfigService
  }, {
    type: GlobalMessageService
  }, {
    type: CdcJsService
  }], null);
})();
var CDCForgotPasswordModule = class _CDCForgotPasswordModule {
  static {
    this.ɵfac = function CDCForgotPasswordModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CDCForgotPasswordModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CDCForgotPasswordModule,
      imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, FormErrorsModule, SpinnerModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ForgotPasswordComponent: {
            component: ForgotPasswordComponent,
            providers: [{
              provide: ForgotPasswordComponentService,
              useClass: CDCForgotPasswordComponentService
            }]
          }
        }
      })],
      imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, FormErrorsModule, SpinnerModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CDCForgotPasswordModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, FormErrorsModule, SpinnerModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ForgotPasswordComponent: {
            component: ForgotPasswordComponent,
            providers: [{
              provide: ForgotPasswordComponentService,
              useClass: CDCForgotPasswordComponentService
            }]
          }
        }
      })]
    }]
  }], null, null);
})();
var CDCUpdateEmailComponentService = class _CDCUpdateEmailComponentService extends UpdateEmailComponentService {
  constructor(userEmail, routingService, globalMessageService, authService, authRedirectService, cdcJsService) {
    super(userEmail, routingService, globalMessageService, authService, authRedirectService);
    this.userEmail = userEmail;
    this.routingService = routingService;
    this.globalMessageService = globalMessageService;
    this.authService = authService;
    this.authRedirectService = authRedirectService;
    this.cdcJsService = cdcJsService;
  }
  save() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.busy$.next(true);
    const newEmail = this.form.get("confirmEmail")?.value;
    const password = this.form.get("password")?.value;
    this.cdcJsService.updateUserEmailWithoutScreenSet(password, newEmail).subscribe({
      next: () => this.onSuccess(newEmail),
      error: (error) => this.onError(error)
    });
  }
  onError(_error) {
    this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
    this.globalMessageService.add({
      key: "httpHandlers.validationErrors.invalid.password"
    }, GlobalMessageType.MSG_TYPE_ERROR);
    this.busy$.next(false);
  }
  static {
    this.ɵfac = function CDCUpdateEmailComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CDCUpdateEmailComponentService)(ɵɵinject(UserEmailFacade), ɵɵinject(RoutingService), ɵɵinject(GlobalMessageService), ɵɵinject(AuthService), ɵɵinject(AuthRedirectService), ɵɵinject(CdcJsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CDCUpdateEmailComponentService,
      factory: _CDCUpdateEmailComponentService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CDCUpdateEmailComponentService, [{
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
  }, {
    type: CdcJsService
  }], null);
})();
var CDCUpdateEmailModule = class _CDCUpdateEmailModule {
  static {
    this.ɵfac = function CDCUpdateEmailModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CDCUpdateEmailModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CDCUpdateEmailModule,
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, UrlModule, RouterModule, I18nModule, FormErrorsModule, PasswordVisibilityToggleModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          UpdateEmailComponent: {
            providers: [{
              provide: UpdateEmailComponentService,
              useClass: CDCUpdateEmailComponentService
            }]
          }
        }
      })],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, UrlModule, RouterModule, I18nModule, FormErrorsModule, PasswordVisibilityToggleModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CDCUpdateEmailModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, UrlModule, RouterModule, I18nModule, FormErrorsModule, PasswordVisibilityToggleModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          UpdateEmailComponent: {
            providers: [{
              provide: UpdateEmailComponentService,
              useClass: CDCUpdateEmailComponentService
            }]
          }
        }
      })]
    }]
  }], null, null);
})();
var CDCUpdatePasswordComponentService = class _CDCUpdatePasswordComponentService extends UpdatePasswordComponentService {
  constructor(userPasswordService, routingService, globalMessageService, authRedirectService, authService, cdcJsService) {
    super(userPasswordService, routingService, globalMessageService, authRedirectService, authService);
    this.userPasswordService = userPasswordService;
    this.routingService = routingService;
    this.globalMessageService = globalMessageService;
    this.authRedirectService = authRedirectService;
    this.authService = authService;
    this.cdcJsService = cdcJsService;
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
    this.cdcJsService.updateUserPasswordWithoutScreenSet(oldPassword, newPassword).subscribe({
      next: () => this.onSuccess(),
      error: (error) => this.onError(error)
    });
  }
  onError(_error) {
    const errorMessage = _error?.errorDetails || " ";
    this.globalMessageService.add(errorMessage, GlobalMessageType.MSG_TYPE_ERROR);
    this.busy$.next(false);
  }
  static {
    this.ɵfac = function CDCUpdatePasswordComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CDCUpdatePasswordComponentService)(ɵɵinject(UserPasswordFacade), ɵɵinject(RoutingService), ɵɵinject(GlobalMessageService), ɵɵinject(AuthRedirectService), ɵɵinject(AuthService), ɵɵinject(CdcJsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CDCUpdatePasswordComponentService,
      factory: _CDCUpdatePasswordComponentService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CDCUpdatePasswordComponentService, [{
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
  }, {
    type: CdcJsService
  }], null);
})();
var CDCUpdatePasswordModule = class _CDCUpdatePasswordModule {
  static {
    this.ɵfac = function CDCUpdatePasswordModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CDCUpdatePasswordModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CDCUpdatePasswordModule,
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, I18nModule, FormErrorsModule, UrlModule, RouterModule, PasswordVisibilityToggleModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          UpdatePasswordComponent: {
            providers: [{
              provide: UpdatePasswordComponentService,
              useClass: CDCUpdatePasswordComponentService
            }]
          }
        }
      })],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, I18nModule, FormErrorsModule, UrlModule, RouterModule, PasswordVisibilityToggleModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CDCUpdatePasswordModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, I18nModule, FormErrorsModule, UrlModule, RouterModule, PasswordVisibilityToggleModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          UpdatePasswordComponent: {
            providers: [{
              provide: UpdatePasswordComponentService,
              useClass: CDCUpdatePasswordComponentService
            }]
          }
        }
      })]
    }]
  }], null, null);
})();
var CDCUpdateProfileComponentService = class _CDCUpdateProfileComponentService extends UpdateProfileComponentService {
  constructor(userProfile, globalMessageService, cdcJsService) {
    super(userProfile, globalMessageService);
    this.userProfile = userProfile;
    this.globalMessageService = globalMessageService;
    this.cdcJsService = cdcJsService;
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
    const formValue = this.form.value;
    this.cdcJsService.updateProfileWithoutScreenSet(formValue).subscribe({
      next: () => this.onSuccess(),
      error: (error) => this.onError(error)
    });
  }
  onError(_error) {
    const errorMessage = _error?.errorMessage || " ";
    this.globalMessageService.add(errorMessage, GlobalMessageType.MSG_TYPE_ERROR);
    this.busy$.next(false);
  }
  static {
    this.ɵfac = function CDCUpdateProfileComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CDCUpdateProfileComponentService)(ɵɵinject(UserProfileFacade), ɵɵinject(GlobalMessageService), ɵɵinject(CdcJsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CDCUpdateProfileComponentService,
      factory: _CDCUpdateProfileComponentService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CDCUpdateProfileComponentService, [{
    type: Injectable
  }], () => [{
    type: UserProfileFacade
  }, {
    type: GlobalMessageService
  }, {
    type: CdcJsService
  }], null);
})();
var CDCUpdateProfileModule = class _CDCUpdateProfileModule {
  static {
    this.ɵfac = function CDCUpdateProfileModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CDCUpdateProfileModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CDCUpdateProfileModule,
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, I18nModule, FormErrorsModule, RouterModule, UrlModule, NgSelectModule, NgSelectA11yModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          UpdateProfileComponent: {
            providers: [{
              provide: UpdateProfileComponentService,
              useClass: CDCUpdateProfileComponentService
            }]
          }
        }
      })],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, I18nModule, FormErrorsModule, RouterModule, UrlModule, NgSelectModule, NgSelectA11yModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CDCUpdateProfileModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule, I18nModule, FormErrorsModule, RouterModule, UrlModule, NgSelectModule, NgSelectA11yModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          UpdateProfileComponent: {
            providers: [{
              provide: UpdateProfileComponentService,
              useClass: CDCUpdateProfileComponentService
            }]
          }
        }
      })]
    }]
  }], null, null);
})();
var CDCUserProfileModule = class _CDCUserProfileModule {
  static {
    this.ɵfac = function CDCUserProfileModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CDCUserProfileModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CDCUserProfileModule,
      imports: [CDCRegisterModule, CDCForgotPasswordModule, CDCUpdateProfileModule, CDCUpdatePasswordModule, CDCUpdateEmailModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CDCRegisterModule, CDCForgotPasswordModule, CDCUpdateProfileModule, CDCUpdatePasswordModule, CDCUpdateEmailModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CDCUserProfileModule, [{
    type: NgModule,
    args: [{
      imports: [CDCRegisterModule, CDCForgotPasswordModule, CDCUpdateProfileModule, CDCUpdatePasswordModule, CDCUpdateEmailModule]
    }]
  }], null, null);
})();
export {
  CDCForgotPasswordComponentService,
  CDCForgotPasswordModule,
  CDCRegisterComponentService,
  CDCRegisterModule,
  CDCUserProfileModule
};
//# sourceMappingURL=@spartacus_cdc_user-profile.js.map
