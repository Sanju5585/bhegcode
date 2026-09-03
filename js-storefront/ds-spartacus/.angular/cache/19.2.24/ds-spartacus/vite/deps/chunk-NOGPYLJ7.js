import {
  provideDefaultConfig,
  provideDefaultConfigFactory
} from "./chunk-VIVIQI6G.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-7OJSO65L.js";

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-administration-root.mjs
var ROUTE_PARAMS = {
  budgetCode: "budgetCode",
  unitCode: "unitCode",
  costCenterCode: "costCenterCode",
  userCode: "userCode",
  userGroupCode: "userGroupCode",
  permissionCode: "permissionCode",
  addressCode: "addressId"
};
var listPath$5 = `organization/budgets/:${ROUTE_PARAMS.budgetCode}`;
var paramsMapping$5 = {
  budgetCode: "code"
};
var defaultBudgetRoutingConfig = {
  routing: {
    routes: {
      orgBudget: {
        paths: ["organization/budgets"]
      },
      orgBudgetCreate: {
        paths: ["organization/budgets/create"]
      },
      orgBudgetDetails: {
        paths: [`${listPath$5}`],
        paramsMapping: paramsMapping$5
      },
      orgBudgetCostCenters: {
        paths: [`${listPath$5}/cost-centers`],
        paramsMapping: paramsMapping$5
      },
      orgBudgetEdit: {
        paths: [`${listPath$5}/edit`],
        paramsMapping: paramsMapping$5
      }
    }
  }
};
var listPath$4 = `organization/cost-centers/:${ROUTE_PARAMS.costCenterCode}`;
var paramsMapping$4 = {
  costCenterCode: "code"
};
var defaultCostCenterRoutingConfig = {
  routing: {
    routes: {
      orgCostCenter: {
        paths: ["organization/cost-centers"]
      },
      orgCostCenterCreate: {
        paths: ["organization/cost-centers/create"]
      },
      orgCostCenterDetails: {
        paths: [`${listPath$4}`],
        paramsMapping: paramsMapping$4
      },
      orgCostCenterBudgets: {
        paths: [`${listPath$4}/budgets`],
        paramsMapping: paramsMapping$4
      },
      orgCostCenterAssignBudgets: {
        paths: [`${listPath$4}/budgets/assign`],
        paramsMapping: paramsMapping$4
      },
      orgCostCenterEdit: {
        paths: [`${listPath$4}/edit`],
        paramsMapping: paramsMapping$4
      }
    }
  }
};
var defaultOrganizationLayoutConfig = {
  layoutSlots: {
    CompanyPageTemplate: {
      slots: ["BodyContent"]
    }
  }
};
var listPath$3 = `organization/purchase-limits/:${ROUTE_PARAMS.permissionCode}`;
var paramsMapping$3 = {
  permissionCode: "code"
};
var defaultPermissionRoutingConfig = {
  routing: {
    routes: {
      orgPurchaseLimit: {
        paths: ["organization/purchase-limits"]
      },
      orgPurchaseLimitCreate: {
        paths: ["organization/purchase-limits/create"]
      },
      orgPurchaseLimitDetails: {
        paths: [listPath$3],
        paramsMapping: paramsMapping$3
      },
      orgPurchaseLimitEdit: {
        paths: [`${listPath$3}/edit`],
        paramsMapping: paramsMapping$3
      }
    }
  }
};
var listPath$2 = `organization/units/:${ROUTE_PARAMS.unitCode}`;
var paramsMapping$2 = {
  unitCode: "uid",
  addressId: "id",
  userCode: "customerId"
};
var defaultUnitsRoutingConfig = {
  routing: {
    routes: {
      orgUnits: {
        paths: ["organization/units"]
      },
      orgUnitCreate: {
        paths: ["organization/units/create"]
      },
      orgUnitDetails: {
        paths: [listPath$2],
        paramsMapping: paramsMapping$2
      },
      orgUnitEdit: {
        paths: [`${listPath$2}/edit`],
        paramsMapping: paramsMapping$2
      },
      orgUnitChildren: {
        paths: [`${listPath$2}/children`],
        paramsMapping: paramsMapping$2
      },
      orgUnitCreateChild: {
        paths: [`${listPath$2}/children/create`],
        paramsMapping: paramsMapping$2
      },
      orgUnitUserList: {
        paths: [`${listPath$2}/users`],
        paramsMapping: paramsMapping$2
      },
      orgUnitCreateUser: {
        paths: [`${listPath$2}/users/create`],
        paramsMapping: paramsMapping$2
      },
      orgUnitUserRoles: {
        paths: [`${listPath$2}/users/:userCode/roles`],
        paramsMapping: paramsMapping$2
      },
      orgUnitApprovers: {
        paths: [`${listPath$2}/approvers`],
        paramsMapping: paramsMapping$2
      },
      orgUnitAssignApprovers: {
        paths: [`${listPath$2}/approvers/assign`],
        paramsMapping: paramsMapping$2
      },
      orgUnitAddressList: {
        paths: [`${listPath$2}/addresses`],
        paramsMapping: paramsMapping$2
      },
      orgUnitAddressCreate: {
        paths: [`${listPath$2}/addresses/create`],
        paramsMapping: paramsMapping$2
      },
      orgUnitAddressDetails: {
        paths: [`${listPath$2}/addresses/:addressId`],
        paramsMapping: paramsMapping$2
      },
      orgUnitAddressEdit: {
        paths: [`${listPath$2}/addresses/:addressId/edit`],
        paramsMapping: paramsMapping$2
      },
      orgUnitCostCenters: {
        paths: [`${listPath$2}/cost-centers`],
        paramsMapping: paramsMapping$2
      },
      orgUnitCreateCostCenter: {
        paths: [`${listPath$2}/cost-centers/create`],
        paramsMapping: paramsMapping$2
      }
    }
  }
};
var listPath$1 = `organization/user-groups/:${ROUTE_PARAMS.userGroupCode}`;
var paramsMapping$1 = {
  userGroupCode: "uid"
};
var defaultUserGroupRoutingConfig = {
  routing: {
    routes: {
      orgUserGroup: {
        paths: ["organization/user-groups"]
      },
      orgUserGroupCreate: {
        paths: ["organization/user-groups/create"]
      },
      orgUserGroupDetails: {
        paths: [listPath$1],
        paramsMapping: paramsMapping$1
      },
      orgUserGroupEdit: {
        paths: [`${listPath$1}/edit`],
        paramsMapping: paramsMapping$1
      },
      orgUserGroupUsers: {
        paths: [`${listPath$1}/users`],
        paramsMapping: paramsMapping$1
      },
      orgUserGroupAssignUsers: {
        paths: [`${listPath$1}/users/assign`],
        paramsMapping: paramsMapping$1
      },
      orgUserGroupPermissions: {
        paths: [`${listPath$1}/purchase-limits`],
        paramsMapping: paramsMapping$1
      },
      orgUserGroupAssignPermissions: {
        paths: [`${listPath$1}/purchase-limits/assign`],
        paramsMapping: paramsMapping$1
      }
    }
  }
};
var listPath = `organization/users/:${ROUTE_PARAMS.userCode}`;
var paramsMapping = {
  userCode: "customerId"
};
var defaultUserRoutingConfig = {
  routing: {
    routes: {
      orgUser: {
        paths: ["organization/users"]
      },
      orgUserCreate: {
        paths: ["organization/users/create"]
      },
      orgUserDetails: {
        paths: [listPath],
        paramsMapping
      },
      orgUserEdit: {
        paths: [`${listPath}/edit`],
        paramsMapping
      },
      orgUserChangePassword: {
        paths: [`${listPath}/change-password`],
        paramsMapping
      },
      orgUserApprovers: {
        paths: [`${listPath}/approvers`],
        paramsMapping
      },
      orgUserAssignApprovers: {
        paths: [`${listPath}/approvers/assign`],
        paramsMapping
      },
      orgUserPermissions: {
        paths: [`${listPath}/purchase-limits`],
        paramsMapping
      },
      orgUserAssignPermissions: {
        paths: [`${listPath}/purchase-limits/assign`],
        paramsMapping
      },
      orgUserUserGroups: {
        paths: [`${listPath}/user-groups`],
        paramsMapping
      },
      orgUserAssignUserGroups: {
        paths: [`${listPath}/user-groups/assign`],
        paramsMapping
      }
    }
  }
};
var ORGANIZATION_ADMINISTRATION_FEATURE = "organizationAdministration";
function defaultOrganizationAdministrationComponentsConfig() {
  const config = {
    featureModules: {
      [ORGANIZATION_ADMINISTRATION_FEATURE]: {
        cmsComponents: ["ManageBudgetsListComponent", "ManageCostCentersListComponent", "ManagePermissionsListComponent", "ManageUnitsListComponent", "ManageUsersListComponent", "ManageUserGroupsListComponent"]
      }
    }
  };
  return config;
}
var AdministrationRootModule = class _AdministrationRootModule {
  static {
    this.ɵfac = function AdministrationRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdministrationRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AdministrationRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOrganizationLayoutConfig), provideDefaultConfig({
        routing: {
          routes: {
            organization: {
              paths: ["organization"]
            }
          }
        }
      }), provideDefaultConfig(defaultBudgetRoutingConfig), provideDefaultConfig(defaultCostCenterRoutingConfig), provideDefaultConfig(defaultPermissionRoutingConfig), provideDefaultConfig(defaultUnitsRoutingConfig), provideDefaultConfig(defaultUserRoutingConfig), provideDefaultConfig(defaultUserGroupRoutingConfig), provideDefaultConfigFactory(defaultOrganizationAdministrationComponentsConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdministrationRootModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig(defaultOrganizationLayoutConfig), provideDefaultConfig({
        routing: {
          routes: {
            organization: {
              paths: ["organization"]
            }
          }
        }
      }), provideDefaultConfig(defaultBudgetRoutingConfig), provideDefaultConfig(defaultCostCenterRoutingConfig), provideDefaultConfig(defaultPermissionRoutingConfig), provideDefaultConfig(defaultUnitsRoutingConfig), provideDefaultConfig(defaultUserRoutingConfig), provideDefaultConfig(defaultUserGroupRoutingConfig), provideDefaultConfigFactory(defaultOrganizationAdministrationComponentsConfig)]
    }]
  }], null, null);
})();

export {
  ROUTE_PARAMS,
  defaultBudgetRoutingConfig,
  defaultCostCenterRoutingConfig,
  defaultOrganizationLayoutConfig,
  defaultPermissionRoutingConfig,
  defaultUnitsRoutingConfig,
  defaultUserGroupRoutingConfig,
  defaultUserRoutingConfig,
  ORGANIZATION_ADMINISTRATION_FEATURE,
  defaultOrganizationAdministrationComponentsConfig,
  AdministrationRootModule
};
//# sourceMappingURL=chunk-NOGPYLJ7.js.map
