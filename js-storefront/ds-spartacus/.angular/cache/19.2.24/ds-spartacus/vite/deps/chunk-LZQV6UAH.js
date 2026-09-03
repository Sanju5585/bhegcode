import {
  LAUNCH_CALLER
} from "./chunk-D5RDRHN5.js";
import {
  CxEvent,
  EventService,
  GlobalMessageService,
  GlobalMessageType,
  LogoutEvent,
  facadeFactory,
  provideDefaultConfigFactory
} from "./chunk-VIVIQI6G.js";
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
  Subscription
} from "./chunk-WTM5FSU4.js";

// node_modules/@spartacus/user/fesm2022/spartacus-user-account-root.mjs
var UserAccountEventListener = class _UserAccountEventListener {
  constructor(eventService, globalMessageService) {
    this.eventService = eventService;
    this.globalMessageService = globalMessageService;
    this.subscriptions = new Subscription();
    this.onAuth();
  }
  /**
   * Registers events for the auth events.
   */
  onAuth() {
    this.subscriptions.add(this.eventService.get(LogoutEvent).subscribe(() => {
      this.globalMessageService.add({
        key: "authMessages.signedOutSuccessfully"
      }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function UserAccountEventListener_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAccountEventListener)(ɵɵinject(EventService), ɵɵinject(GlobalMessageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserAccountEventListener,
      factory: _UserAccountEventListener.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAccountEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }, {
    type: GlobalMessageService
  }], null);
})();
var UserAccountEventModule = class _UserAccountEventModule {
  constructor(_userAccountEventListener) {
  }
  static {
    this.ɵfac = function UserAccountEventModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAccountEventModule)(ɵɵinject(UserAccountEventListener));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserAccountEventModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAccountEventModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: UserAccountEventListener
  }], null);
})();
var USER_ACCOUNT_FEATURE = "userAccount";
var USER_ACCOUNT_CORE_FEATURE = "userAccountCore";
function defaultUserAccountComponentsConfig() {
  const config = {
    featureModules: {
      [USER_ACCOUNT_FEATURE]: {
        cmsComponents: ["LoginComponent", "ReturningCustomerLoginComponent", "VerifyOTPTokenComponent", "ReturningCustomerRegisterComponent", "MyAccountViewUserComponent", "ReturningCustomerOTPLoginComponent", "RegisterCustomerWithOTPComponent"]
      },
      // by default core is bundled together with components
      [USER_ACCOUNT_CORE_FEATURE]: USER_ACCOUNT_FEATURE
    }
  };
  return config;
}
var UserAccountRootModule = class _UserAccountRootModule {
  static {
    this.ɵfac = function UserAccountRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAccountRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserAccountRootModule,
      imports: [UserAccountEventModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultUserAccountComponentsConfig)],
      imports: [UserAccountEventModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAccountRootModule, [{
    type: NgModule,
    args: [{
      imports: [UserAccountEventModule],
      providers: [provideDefaultConfigFactory(defaultUserAccountComponentsConfig)]
    }]
  }], null, null);
})();
var UserAccountFacade = class _UserAccountFacade {
  static {
    this.ɵfac = function UserAccountFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAccountFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserAccountFacade,
      factory: () => (() => facadeFactory({
        facade: _UserAccountFacade,
        feature: USER_ACCOUNT_CORE_FEATURE,
        methods: ["get", "getById"]
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAccountFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: UserAccountFacade,
        feature: USER_ACCOUNT_CORE_FEATURE,
        methods: ["get", "getById"]
      })
    }]
  }], null, null);
})();
var VerificationTokenFacade = class _VerificationTokenFacade {
  static {
    this.ɵfac = function VerificationTokenFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VerificationTokenFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _VerificationTokenFacade,
      factory: () => (() => facadeFactory({
        facade: _VerificationTokenFacade,
        feature: USER_ACCOUNT_CORE_FEATURE,
        methods: ["createVerificationToken"]
      }))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerificationTokenFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => facadeFactory({
        facade: VerificationTokenFacade,
        feature: USER_ACCOUNT_CORE_FEATURE,
        methods: ["createVerificationToken"]
      })
    }]
  }], null, null);
})();
LAUNCH_CALLER["ACCOUNT_VERIFICATION_TOKEN"] = "ACCOUNT_VERIFICATION_TOKEN";
var VERIFICATION_TOKEN_DIALOG_ACTION;
(function(VERIFICATION_TOKEN_DIALOG_ACTION2) {
  VERIFICATION_TOKEN_DIALOG_ACTION2["OK"] = "OK";
})(VERIFICATION_TOKEN_DIALOG_ACTION || (VERIFICATION_TOKEN_DIALOG_ACTION = {}));
var UserAccountEvent = class extends CxEvent {
};
var UserAccountChangedEvent = class extends UserAccountEvent {
  static {
    this.type = "UserAccountChangedEvent";
  }
};

export {
  UserAccountEventListener,
  UserAccountEventModule,
  USER_ACCOUNT_FEATURE,
  USER_ACCOUNT_CORE_FEATURE,
  defaultUserAccountComponentsConfig,
  UserAccountRootModule,
  UserAccountFacade,
  VerificationTokenFacade,
  VERIFICATION_TOKEN_DIALOG_ACTION,
  UserAccountEvent,
  UserAccountChangedEvent
};
//# sourceMappingURL=chunk-LZQV6UAH.js.map
