import {
  UserRegistrationFormService
} from "./chunk-W5P3USWW.js";
import {
  UserRegistrationFacade
} from "./chunk-QH4XOFFZ.js";
import {
  CdcJsService,
  CdcLoadUserTokenFailEvent
} from "./chunk-DAEC7GJ6.js";
import "./chunk-DDZIJZKE.js";
import {
  UserRegisterFacade
} from "./chunk-YJXUXPBZ.js";
import "./chunk-LZQV6UAH.js";
import {
  FormErrorsModule,
  NgSelectA11yModule,
  SpinnerModule
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  AuthConfigService,
  AuthService,
  CommandService,
  EventService,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  RoutingService,
  TranslationService,
  UrlModule,
  UserAddressService
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
  RouterModule
} from "./chunk-EBCNDD52.js";
import {
  NgSelectModule
} from "./chunk-YMQEGXEG.js";
import "./chunk-6KXUHIAW.js";
import "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import "./chunk-2A6OHZCE.js";
import {
  FormBuilder,
  ReactiveFormsModule
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
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  map,
  tap,
  throwError
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/cdc/fesm2022/spartacus-cdc-organization-user-registration.mjs
var CDCB2BRegisterComponentService = class _CDCB2BRegisterComponentService extends UserRegistrationFormService {
  constructor(command, cdcJSService, authService, eventService, userRegisterFacade, userAddressService, organizationUserRegistrationFacade, translationService, globalMessageService, authConfigService, routingService, formBuilder) {
    super(userRegisterFacade, userAddressService, organizationUserRegistrationFacade, translationService, globalMessageService, authConfigService, routingService, formBuilder);
    this.command = command;
    this.cdcJSService = cdcJSService;
    this.authService = authService;
    this.eventService = eventService;
    this.userRegisterFacade = userRegisterFacade;
    this.userAddressService = userAddressService;
    this.organizationUserRegistrationFacade = organizationUserRegistrationFacade;
    this.translationService = translationService;
    this.globalMessageService = globalMessageService;
    this.authConfigService = authConfigService;
    this.routingService = routingService;
    this.formBuilder = formBuilder;
    this.registerCommand = this.command.create(({
      orgInfo
    }) => (
      // Registering user through CDC Gigya SDK
      this.cdcJSService.registerOrganisationWithoutScreenSet(orgInfo)
    ));
    this.loadUserTokenFailed$ = this.eventService.get(CdcLoadUserTokenFailEvent).pipe(map((event) => !!event), tap((failed) => {
      if (failed) {
        throw new Error(`User token failed to load.`);
      }
    }));
  }
  /**
   * Register a new user using CDC SDK.
   *
   * @param form as FormGroup
   */
  registerUser(form) {
    if (!form.get("firstName")?.value || !form.get("lastName")?.value || !form.get("email")?.value || !form.get("companyName")?.value) {
      return throwError(`The provided user is not valid: ${form.value}`);
    }
    const orgInfo = {
      firstName: form.get("firstName")?.value,
      lastName: form.get("lastName")?.value,
      email: form.get("email")?.value,
      companyName: form.get("companyName")?.value,
      addressLine1: form.get("line1")?.value,
      addressLine2: form.get("line2")?.value,
      postalCode: form.get("postalCode")?.value,
      town: form.get("town")?.value,
      region: form.get("region")?.get("isocode")?.value,
      country: form.get("country")?.get("isocode")?.value,
      phoneNumber: form.get("phoneNumber")?.value,
      message: form.get("message")?.value
    };
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
        orgInfo
      })
    )), tap(() => {
      this.displayGlobalMessage();
      this.redirectToLogin();
      form.reset();
    }));
  }
  // @override
  postRegisterMessage() {
  }
  static {
    this.ɵfac = function CDCB2BRegisterComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CDCB2BRegisterComponentService)(ɵɵinject(CommandService), ɵɵinject(CdcJsService), ɵɵinject(AuthService), ɵɵinject(EventService), ɵɵinject(UserRegisterFacade), ɵɵinject(UserAddressService), ɵɵinject(UserRegistrationFacade), ɵɵinject(TranslationService), ɵɵinject(GlobalMessageService), ɵɵinject(AuthConfigService), ɵɵinject(RoutingService), ɵɵinject(FormBuilder));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CDCB2BRegisterComponentService,
      factory: _CDCB2BRegisterComponentService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CDCB2BRegisterComponentService, [{
    type: Injectable
  }], () => [{
    type: CommandService
  }, {
    type: CdcJsService
  }, {
    type: AuthService
  }, {
    type: EventService
  }, {
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
var CDCB2BRegisterModule = class _CDCB2BRegisterModule {
  static {
    this.ɵfac = function CDCB2BRegisterModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CDCB2BRegisterModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CDCB2BRegisterModule,
      imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, SpinnerModule, FormErrorsModule, NgSelectModule, NgSelectA11yModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: UserRegistrationFormService,
        useClass: CDCB2BRegisterComponentService
      }],
      imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, SpinnerModule, FormErrorsModule, NgSelectModule, NgSelectA11yModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CDCB2BRegisterModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, RouterModule, UrlModule, I18nModule, SpinnerModule, FormErrorsModule, NgSelectModule, NgSelectA11yModule],
      providers: [{
        provide: UserRegistrationFormService,
        useClass: CDCB2BRegisterComponentService
      }]
    }]
  }], null, null);
})();
export {
  CDCB2BRegisterComponentService,
  CDCB2BRegisterModule
};
//# sourceMappingURL=@spartacus_cdc_organization_user-registration.js.map
