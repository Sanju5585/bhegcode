import {
  facadeFactory,
  provideDefaultConfigFactory
} from "./chunk-VIVIQI6G.js";
import {
  Injectable,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-7OJSO65L.js";

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-user-registration-root.mjs
var ORGANIZATION_USER_REGISTRATION_FEATURE = "organizationUserRegistration";
function defaultOrganizationUserRegistrationComponentsConfig() {
  const config = {
    featureModules: {
      [ORGANIZATION_USER_REGISTRATION_FEATURE]: {
        cmsComponents: ["OrganizationUserRegistrationComponent", "RegisterB2BCustomerWithOTPComponent", "VerifyOTPForB2BRegistrationComponent"]
      }
    }
  };
  return config;
}
var OrganizationUserRegistrationRootModule = class _OrganizationUserRegistrationRootModule {
  static {
    this.ɵfac = function OrganizationUserRegistrationRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrganizationUserRegistrationRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrganizationUserRegistrationRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultOrganizationUserRegistrationComponentsConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationUserRegistrationRootModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfigFactory(defaultOrganizationUserRegistrationComponentsConfig)]
    }]
  }], null, null);
})();
var UserRegistrationFacade = class _UserRegistrationFacade {
  static {
    this.ɵfac = function UserRegistrationFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserRegistrationFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserRegistrationFacade,
      factory: () => (() => facadeFactory({
        facade: _UserRegistrationFacade,
        feature: ORGANIZATION_USER_REGISTRATION_FEATURE,
        methods: ["registerUser"]
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserRegistrationFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: UserRegistrationFacade,
        feature: ORGANIZATION_USER_REGISTRATION_FEATURE,
        methods: ["registerUser"]
      })
    }]
  }], null, null);
})();

export {
  ORGANIZATION_USER_REGISTRATION_FEATURE,
  defaultOrganizationUserRegistrationComponentsConfig,
  OrganizationUserRegistrationRootModule,
  UserRegistrationFacade
};
//# sourceMappingURL=chunk-QH4XOFFZ.js.map
