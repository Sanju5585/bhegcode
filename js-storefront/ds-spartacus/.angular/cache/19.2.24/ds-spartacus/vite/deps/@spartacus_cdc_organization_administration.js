import {
  B2BUserService,
  CreateButtonType,
  OrgUnitService,
  UserListService,
  unitsCmsConfig,
  userCmsConfig
} from "./chunk-UQFD64K7.js";
import "./chunk-NOGPYLJ7.js";
import {
  CdcJsService
} from "./chunk-DAEC7GJ6.js";
import "./chunk-DDZIJZKE.js";
import "./chunk-YJXUXPBZ.js";
import "./chunk-LZQV6UAH.js";
import {
  TableService
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  GlobalMessageService,
  GlobalMessageType,
  WindowRef,
  provideDefaultConfig
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
import "./chunk-2A6OHZCE.js";
import "./chunk-YST33EXT.js";
import "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  Injectable,
  NgModule,
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
  tap
} from "./chunk-R6FETK65.js";
import {
  Subscription
} from "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/cdc/fesm2022/spartacus-cdc-organization-administration.mjs
var CdcB2BUserService = class _CdcB2BUserService extends B2BUserService {
  isUpdatingUserAllowed() {
    return false;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵCdcB2BUserService_BaseFactory;
      return function CdcB2BUserService_Factory(__ngFactoryType__) {
        return (ɵCdcB2BUserService_BaseFactory || (ɵCdcB2BUserService_BaseFactory = ɵɵgetInheritedFactory(_CdcB2BUserService)))(__ngFactoryType__ || _CdcB2BUserService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcB2BUserService,
      factory: _CdcB2BUserService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcB2BUserService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CdcUserListService = class _CdcUserListService extends UserListService {
  constructor(tableService, userService, globalMessageService, winRef, cdcJsService) {
    super(tableService, userService);
    this.tableService = tableService;
    this.userService = userService;
    this.globalMessageService = globalMessageService;
    this.winRef = winRef;
    this.cdcJsService = cdcJsService;
    this.subscription = new Subscription();
  }
  onCreateButtonClick() {
    const sub = this.cdcJsService.getOrganizationContext().pipe(tap({
      next: (response) => {
        if (response.orgId) {
          this.cdcJsService.openDelegatedAdminLogin(response.orgId);
        } else {
          this.globalMessageService.add({
            key: "generalErrors.pageFailure"
          }, GlobalMessageType.MSG_TYPE_ERROR);
        }
      },
      error: () => this.globalMessageService.add({
        key: "generalErrors.pageFailure"
      }, GlobalMessageType.MSG_TYPE_ERROR)
    })).subscribe();
    this.subscription.add(sub);
  }
  getCreateButtonType() {
    return CreateButtonType.BUTTON;
  }
  getCreateButtonLabel() {
    return {
      key: "organization.manageUsers"
    };
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function CdcUserListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcUserListService)(ɵɵinject(TableService), ɵɵinject(B2BUserService), ɵɵinject(GlobalMessageService), ɵɵinject(WindowRef), ɵɵinject(CdcJsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcUserListService,
      factory: _CdcUserListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcUserListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TableService
  }, {
    type: B2BUserService
  }, {
    type: GlobalMessageService
  }, {
    type: WindowRef
  }, {
    type: CdcJsService
  }], null);
})();
var CdcOrgUnitService = class _CdcOrgUnitService extends OrgUnitService {
  isUpdatingUnitAllowed() {
    return false;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵCdcOrgUnitService_BaseFactory;
      return function CdcOrgUnitService_Factory(__ngFactoryType__) {
        return (ɵCdcOrgUnitService_BaseFactory || (ɵCdcOrgUnitService_BaseFactory = ɵɵgetInheritedFactory(_CdcOrgUnitService)))(__ngFactoryType__ || _CdcOrgUnitService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CdcOrgUnitService,
      factory: _CdcOrgUnitService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcOrgUnitService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CdcAdministrationModule = class _CdcAdministrationModule {
  static {
    this.ɵfac = function CdcAdministrationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdcAdministrationModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CdcAdministrationModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [
        //to override UserListService in ListComponent
        provideDefaultConfig({
          cmsComponents: {
            ManageUsersListComponent: {
              providers: [{
                provide: UserListService,
                useExisting: CdcUserListService
              }, {
                provide: B2BUserService,
                useClass: CdcB2BUserService
              }, userCmsConfig.cmsComponents?.ManageUsersListComponent?.providers || []]
            }
          }
        }),
        //to override B2BUserService in UserDetailsComponent, UnitUserListComponent
        {
          provide: B2BUserService,
          useClass: CdcB2BUserService
        },
        //to override B2BUserService in UnitUserRolesCellComponent
        provideDefaultConfig({
          cmsComponents: {
            ManageUnitsListComponent: {
              providers: [{
                provide: B2BUserService,
                useExisting: CdcB2BUserService
              }, {
                provide: OrgUnitService,
                useClass: CdcOrgUnitService
              }, unitsCmsConfig.cmsComponents?.ManageUnitsListComponent?.providers || []]
            }
          }
        }),
        {
          provide: OrgUnitService,
          useClass: CdcOrgUnitService
        }
      ]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdcAdministrationModule, [{
    type: NgModule,
    args: [{
      providers: [
        //to override UserListService in ListComponent
        provideDefaultConfig({
          cmsComponents: {
            ManageUsersListComponent: {
              providers: [{
                provide: UserListService,
                useExisting: CdcUserListService
              }, {
                provide: B2BUserService,
                useClass: CdcB2BUserService
              }, userCmsConfig.cmsComponents?.ManageUsersListComponent?.providers || []]
            }
          }
        }),
        //to override B2BUserService in UserDetailsComponent, UnitUserListComponent
        {
          provide: B2BUserService,
          useClass: CdcB2BUserService
        },
        //to override B2BUserService in UnitUserRolesCellComponent
        provideDefaultConfig({
          cmsComponents: {
            ManageUnitsListComponent: {
              providers: [{
                provide: B2BUserService,
                useExisting: CdcB2BUserService
              }, {
                provide: OrgUnitService,
                useClass: CdcOrgUnitService
              }, unitsCmsConfig.cmsComponents?.ManageUnitsListComponent?.providers || []]
            }
          }
        }),
        {
          provide: OrgUnitService,
          useClass: CdcOrgUnitService
        }
      ]
    }]
  }], null, null);
})();
export {
  CdcAdministrationModule,
  CdcB2BUserService,
  CdcOrgUnitService,
  CdcUserListService
};
//# sourceMappingURL=@spartacus_cdc_organization_administration.js.map
