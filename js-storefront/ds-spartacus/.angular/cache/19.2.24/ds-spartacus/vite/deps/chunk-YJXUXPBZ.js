import {
  LAUNCH_CALLER
} from "./chunk-D5RDRHN5.js";
import {
  UserProfileFacadeTransitionalToken,
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

// node_modules/@spartacus/user/fesm2022/spartacus-user-profile-root.mjs
var USER_PROFILE_FEATURE = "userProfile";
var USER_PROFILE_CORE_FEATURE = "userProfileCore";
var UserProfileFacade = class _UserProfileFacade {
  static {
    this.ɵfac = function UserProfileFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserProfileFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserProfileFacade,
      factory: () => (() => facadeFactory({
        facade: _UserProfileFacade,
        feature: USER_PROFILE_CORE_FEATURE,
        methods: ["get", "update", "close", "getTitles"]
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: UserProfileFacade,
        feature: USER_PROFILE_CORE_FEATURE,
        methods: ["get", "update", "close", "getTitles"]
      })
    }]
  }], null, null);
})();
function defaultUserProfileComponentsConfig() {
  const config = {
    featureModules: {
      [USER_PROFILE_FEATURE]: {
        cmsComponents: ["RegisterCustomerComponent", "UpdateProfileComponent", "UpdateEmailComponent", "UpdatePasswordComponent", "ForgotPasswordComponent", "ResetPasswordComponent", "CloseAccountComponent", "AccountAddressBookComponent", "RegisterCustomerWithOTPComponent", "VerifyOTPForRegistrationComponent"]
      },
      // by default core is bundled together with components
      [USER_PROFILE_CORE_FEATURE]: USER_PROFILE_FEATURE
    }
  };
  return config;
}
var UserProfileRootModule = class _UserProfileRootModule {
  static {
    this.ɵfac = function UserProfileRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserProfileRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserProfileRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultUserProfileComponentsConfig), {
        provide: UserProfileFacadeTransitionalToken,
        useExisting: UserProfileFacade
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileRootModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfigFactory(defaultUserProfileComponentsConfig), {
        provide: UserProfileFacadeTransitionalToken,
        useExisting: UserProfileFacade
      }]
    }]
  }], null, null);
})();
var UserEmailFacade = class _UserEmailFacade {
  static {
    this.ɵfac = function UserEmailFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserEmailFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserEmailFacade,
      factory: () => (() => facadeFactory({
        facade: _UserEmailFacade,
        feature: USER_PROFILE_CORE_FEATURE,
        methods: ["update"]
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserEmailFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: UserEmailFacade,
        feature: USER_PROFILE_CORE_FEATURE,
        methods: ["update"]
      })
    }]
  }], null, null);
})();
var UserPasswordFacade = class _UserPasswordFacade {
  static {
    this.ɵfac = function UserPasswordFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserPasswordFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserPasswordFacade,
      factory: () => (() => facadeFactory({
        facade: _UserPasswordFacade,
        feature: USER_PROFILE_CORE_FEATURE,
        methods: ["update", "reset", "requestForgotPasswordEmail"]
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserPasswordFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: UserPasswordFacade,
        feature: USER_PROFILE_CORE_FEATURE,
        methods: ["update", "reset", "requestForgotPasswordEmail"]
      })
    }]
  }], null, null);
})();
var UserRegisterFacade = class _UserRegisterFacade {
  static {
    this.ɵfac = function UserRegisterFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserRegisterFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserRegisterFacade,
      factory: () => (() => facadeFactory({
        facade: _UserRegisterFacade,
        feature: USER_PROFILE_CORE_FEATURE,
        methods: ["register", "registerGuest", "getTitles"]
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserRegisterFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: UserRegisterFacade,
        feature: USER_PROFILE_CORE_FEATURE,
        methods: ["register", "registerGuest", "getTitles"]
      })
    }]
  }], null, null);
})();
LAUNCH_CALLER["CLOSE_ACCOUNT"] = "CLOSE_ACCOUNT";

export {
  USER_PROFILE_FEATURE,
  USER_PROFILE_CORE_FEATURE,
  UserProfileFacade,
  defaultUserProfileComponentsConfig,
  UserProfileRootModule,
  UserEmailFacade,
  UserPasswordFacade,
  UserRegisterFacade
};
//# sourceMappingURL=chunk-YJXUXPBZ.js.map
