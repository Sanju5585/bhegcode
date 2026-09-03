import {
  UserRegistrationComponentsModule
} from "./chunk-W5P3USWW.js";
import {
  UserRegistrationFacade
} from "./chunk-QH4XOFFZ.js";
import "./chunk-YJXUXPBZ.js";
import "./chunk-LZQV6UAH.js";
import "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  CommandService,
  ConverterService,
  GlobalMessageType,
  HttpErrorHandler,
  HttpResponseStatus,
  InterceptorUtil,
  LoggerService,
  OccEndpointsService,
  Priority,
  USE_CLIENT_TOKEN,
  provideDefaultConfig,
  tryNormalizeHttpError
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import "./chunk-EBCNDD52.js";
import "./chunk-YMQEGXEG.js";
import "./chunk-6KXUHIAW.js";
import "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-2A6OHZCE.js";
import "./chunk-YST33EXT.js";
import {
  CommonModule
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  Injectable,
  InjectionToken,
  NgModule,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  catchError
} from "./chunk-R6FETK65.js";
import "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-user-registration-core.mjs
var ORGANIZATION_USER_REGISTRATION_SERIALIZER = new InjectionToken("OrganizationUserRegistrationSerializer");
var UserRegistrationAdapter = class {
};
var UserRegistrationConnector = class _UserRegistrationConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  registerUser(userData) {
    return this.adapter.registerUser(userData);
  }
  static {
    this.ɵfac = function UserRegistrationConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserRegistrationConnector)(ɵɵinject(UserRegistrationAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserRegistrationConnector,
      factory: _UserRegistrationConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserRegistrationConnector, [{
    type: Injectable
  }], () => [{
    type: UserRegistrationAdapter
  }], null);
})();
var UserRegistrationService = class _UserRegistrationService {
  constructor(userRegistrationConnector, command) {
    this.userRegistrationConnector = userRegistrationConnector;
    this.command = command;
    this.registerOrganizationUserCommand = this.command.create((payload) => this.userRegistrationConnector.registerUser(payload.userData));
  }
  /**
   * Register a new org user.
   *
   * @param userData
   */
  registerUser(userData) {
    return this.registerOrganizationUserCommand.execute({
      userData
    });
  }
  static {
    this.ɵfac = function UserRegistrationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserRegistrationService)(ɵɵinject(UserRegistrationConnector), ɵɵinject(CommandService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserRegistrationService,
      factory: _UserRegistrationService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserRegistrationService, [{
    type: Injectable
  }], () => [{
    type: UserRegistrationConnector
  }, {
    type: CommandService
  }], null);
})();
var facadeProviders = [UserRegistrationService, {
  provide: UserRegistrationFacade,
  useExisting: UserRegistrationService
}];
var OrganizationUserRegistrationConflictHandler = class _OrganizationUserRegistrationConflictHandler extends HttpErrorHandler {
  constructor() {
    super(...arguments);
    this.responseStatus = HttpResponseStatus.CONFLICT;
  }
  handleError(request, response) {
    if (request && this.getErrors(response)?.length) {
      this.globalMessageService.add({
        key: "userRegistrationForm.httpHandlers.conflict"
      }, GlobalMessageType.MSG_TYPE_ERROR);
    }
  }
  getErrors(response) {
    return (response.error?.errors ?? []).filter((error) => error?.type === "AlreadyExistsError");
  }
  getPriority() {
    return Priority.NORMAL;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵOrganizationUserRegistrationConflictHandler_BaseFactory;
      return function OrganizationUserRegistrationConflictHandler_Factory(__ngFactoryType__) {
        return (ɵOrganizationUserRegistrationConflictHandler_BaseFactory || (ɵOrganizationUserRegistrationConflictHandler_BaseFactory = ɵɵgetInheritedFactory(_OrganizationUserRegistrationConflictHandler)))(__ngFactoryType__ || _OrganizationUserRegistrationConflictHandler);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrganizationUserRegistrationConflictHandler,
      factory: _OrganizationUserRegistrationConflictHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationUserRegistrationConflictHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var UserRegistrationCoreModule = class _UserRegistrationCoreModule {
  static forRoot() {
    return {
      ngModule: _UserRegistrationCoreModule,
      providers: [...facadeProviders, UserRegistrationConnector, {
        provide: HttpErrorHandler,
        useExisting: OrganizationUserRegistrationConflictHandler,
        multi: true
      }]
    };
  }
  static {
    this.ɵfac = function UserRegistrationCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserRegistrationCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserRegistrationCoreModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserRegistrationCoreModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-user-registration-occ.mjs
var OccUserRegistrationAdapter = class _OccUserRegistrationAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  registerUser(userData) {
    const url = this.getOrganizationUserRegistrationEndpoint();
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    userData = this.converter.convert(userData, ORGANIZATION_USER_REGISTRATION_SERIALIZER);
    return this.http.post(url, userData, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  getOrganizationUserRegistrationEndpoint() {
    return this.occEndpoints.buildUrl("organizationUserRegistration");
  }
  static {
    this.ɵfac = function OccUserRegistrationAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccUserRegistrationAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccUserRegistrationAdapter,
      factory: _OccUserRegistrationAdapter.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccUserRegistrationAdapter, [{
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
  }], null);
})();
var defaultOccOrganizationUserRegistrationConfig = {
  backend: {
    occ: {
      endpoints: {
        organizationUserRegistration: "/orgUsers"
      }
    }
  }
};
var UserRegistrationOccModule = class _UserRegistrationOccModule {
  static {
    this.ɵfac = function UserRegistrationOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserRegistrationOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserRegistrationOccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccOrganizationUserRegistrationConfig), {
        provide: UserRegistrationAdapter,
        useExisting: OccUserRegistrationAdapter
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserRegistrationOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccOrganizationUserRegistrationConfig), {
        provide: UserRegistrationAdapter,
        useExisting: OccUserRegistrationAdapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-user-registration.mjs
var OrganizationUserRegistrationModule = class _OrganizationUserRegistrationModule {
  static {
    this.ɵfac = function OrganizationUserRegistrationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrganizationUserRegistrationModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrganizationUserRegistrationModule,
      imports: [UserRegistrationCoreModule, UserRegistrationComponentsModule, UserRegistrationOccModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [UserRegistrationCoreModule.forRoot(), UserRegistrationComponentsModule, UserRegistrationOccModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationUserRegistrationModule, [{
    type: NgModule,
    args: [{
      imports: [UserRegistrationCoreModule.forRoot(), UserRegistrationComponentsModule, UserRegistrationOccModule]
    }]
  }], null, null);
})();
export {
  OrganizationUserRegistrationModule
};
//# sourceMappingURL=@spartacus_organization_user-registration.js.map
