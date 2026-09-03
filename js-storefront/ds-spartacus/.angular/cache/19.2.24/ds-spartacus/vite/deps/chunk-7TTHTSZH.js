import {
  AdministrationComponentsModule,
  AdministrationCoreModule,
  B2BUNIT_APPROVAL_PROCESSES_NORMALIZER,
  B2BUNIT_NODE_LIST_NORMALIZER,
  B2BUNIT_NODE_NORMALIZER,
  B2BUNIT_NORMALIZER,
  B2BUNIT_SERIALIZER,
  B2BUserAdapter,
  B2B_USERS_NORMALIZER,
  B2B_USER_NORMALIZER,
  B2B_USER_SERIALIZER,
  BUDGETS_NORMALIZER,
  BUDGET_NORMALIZER,
  BUDGET_SERIALIZER,
  BudgetAdapter,
  CostCenterAdapter,
  OrgUnitAdapter,
  PERMISSIONS_NORMALIZER,
  PERMISSION_NORMALIZER,
  PERMISSION_SERIALIZER,
  PERMISSION_TYPES_NORMALIZER,
  PERMISSION_TYPE_NORMALIZER,
  PermissionAdapter,
  USER_GROUPS_NORMALIZER,
  USER_GROUP_NORMALIZER,
  USER_GROUP_SERIALIZER,
  UserGroupAdapter
} from "./chunk-UQFD64K7.js";
import {
  ADDRESS_LIST_NORMALIZER,
  ADDRESS_NORMALIZER,
  ADDRESS_SERIALIZER,
  COST_CENTERS_NORMALIZER,
  COST_CENTER_NORMALIZER,
  COST_CENTER_SERIALIZER,
  ConverterService,
  CostCenterOccModule,
  OccEndpointsService,
  TimeUtils,
  provideDefaultConfig
} from "./chunk-VIVIQI6G.js";
import {
  HttpClient
} from "./chunk-2A6OHZCE.js";
import {
  CommonModule
} from "./chunk-S7KROBXW.js";
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
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-administration-occ.mjs
var OccBudgetAdapter = class _OccBudgetAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
  }
  load(userId, budgetCode) {
    return this.http.get(this.getBudgetEndpoint(userId, budgetCode)).pipe(this.converter.pipeable(BUDGET_NORMALIZER));
  }
  loadList(userId, params) {
    return this.http.get(this.getBudgetsEndpoint(userId, params)).pipe(this.converter.pipeable(BUDGETS_NORMALIZER));
  }
  create(userId, budget) {
    const convertedBudget = this.converter.convert(budget, BUDGET_SERIALIZER);
    return this.http.post(this.getBudgetsEndpoint(userId), convertedBudget).pipe(this.converter.pipeable(BUDGET_NORMALIZER));
  }
  update(userId, budgetCode, budget) {
    const convertedBudget = this.converter.convert(budget, BUDGET_SERIALIZER);
    return this.http.patch(this.getBudgetEndpoint(userId, budgetCode), convertedBudget).pipe(this.converter.pipeable(BUDGET_NORMALIZER));
  }
  getBudgetEndpoint(userId, budgetCode) {
    return this.occEndpoints.buildUrl("budget", {
      urlParams: {
        userId,
        budgetCode
      }
    });
  }
  getBudgetsEndpoint(userId, params) {
    return this.occEndpoints.buildUrl("budgets", {
      urlParams: {
        userId
      },
      queryParams: params
    });
  }
  static {
    this.ɵfac = function OccBudgetAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccBudgetAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccBudgetAdapter,
      factory: _OccBudgetAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccBudgetAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccCostCenterAdapter = class _OccCostCenterAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
  }
  load(userId, costCenterCode) {
    return this.http.get(this.getCostCenterEndpoint(userId, costCenterCode)).pipe(this.converter.pipeable(COST_CENTER_NORMALIZER));
  }
  loadList(userId, params) {
    return this.http.get(this.getAllCostCentersEndpoint(userId, params)).pipe(this.converter.pipeable(COST_CENTERS_NORMALIZER));
  }
  create(userId, costCenter) {
    costCenter = this.converter.convert(costCenter, COST_CENTER_SERIALIZER);
    return this.http.post(this.getCostCentersEndpoint(userId), costCenter).pipe(this.converter.pipeable(COST_CENTER_NORMALIZER));
  }
  update(userId, costCenterCode, costCenter) {
    costCenter = this.converter.convert(costCenter, COST_CENTER_SERIALIZER);
    return this.http.patch(this.getCostCenterEndpoint(userId, costCenterCode), costCenter).pipe(this.converter.pipeable(COST_CENTER_NORMALIZER));
  }
  loadBudgets(userId, costCenterCode, params) {
    return this.http.get(this.getBudgetsEndpoint(userId, costCenterCode, params)).pipe(this.converter.pipeable(BUDGETS_NORMALIZER));
  }
  assignBudget(userId, costCenterCode, budgetCode) {
    return this.http.post(this.getBudgetsEndpoint(userId, costCenterCode, {
      budgetCode
    }), null);
  }
  unassignBudget(userId, costCenterCode, budgetCode) {
    return this.http.delete(this.getBudgetEndpoint(userId, costCenterCode, budgetCode));
  }
  getCostCenterEndpoint(userId, costCenterCode) {
    return this.occEndpoints.buildUrl("costCenter", {
      urlParams: {
        userId,
        costCenterCode
      }
    });
  }
  getCostCentersEndpoint(userId, params) {
    return this.occEndpoints.buildUrl("costCenters", {
      urlParams: {
        userId
      },
      queryParams: params
    });
  }
  getAllCostCentersEndpoint(userId, params) {
    return this.occEndpoints.buildUrl("costCentersAll", {
      urlParams: {
        userId
      },
      queryParams: params
    });
  }
  getBudgetsEndpoint(userId, costCenterCode, params) {
    return this.occEndpoints.buildUrl("costCenterBudgets", {
      urlParams: {
        userId,
        costCenterCode
      },
      queryParams: params
    });
  }
  getBudgetEndpoint(userId, costCenterCode, budgetCode) {
    return this.occEndpoints.buildUrl("costCenterBudget", {
      urlParams: {
        userId,
        costCenterCode,
        budgetCode
      }
    });
  }
  static {
    this.ɵfac = function OccCostCenterAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCostCenterAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCostCenterAdapter,
      factory: _OccCostCenterAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCostCenterAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccOrgUnitAdapter = class _OccOrgUnitAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
  }
  load(userId, orgUnitId) {
    return this.http.get(this.getOrgUnitEndpoint(userId, orgUnitId)).pipe(this.converter.pipeable(B2BUNIT_NORMALIZER));
  }
  create(userId, orgUnit) {
    return this.http.post(this.getOrgUnitsEndpoint(userId), orgUnit).pipe(this.converter.pipeable(B2BUNIT_NORMALIZER));
  }
  update(userId, orgUnitId, orgUnit) {
    orgUnit = this.converter.convert(orgUnit, B2BUNIT_SERIALIZER);
    return this.http.patch(this.getOrgUnitEndpoint(userId, orgUnitId), orgUnit).pipe(this.converter.pipeable(B2BUNIT_NORMALIZER));
  }
  loadTree(userId) {
    return this.http.get(this.getOrgUnitsTreeEndpoint(userId)).pipe(this.converter.pipeable(B2BUNIT_NODE_NORMALIZER));
  }
  loadList(userId) {
    return this.http.get(this.getAvailableOrgUnitsEndpoint(userId)).pipe(this.converter.pipeable(B2BUNIT_NODE_LIST_NORMALIZER));
  }
  loadApprovalProcesses(userId) {
    return this.http.get(this.getOrgUnitsApprovalProcessesEndpoint(userId)).pipe(this.converter.pipeable(B2BUNIT_APPROVAL_PROCESSES_NORMALIZER));
  }
  loadUsers(userId, orgUnitId, roleId, params) {
    return this.http.get(this.getUsersEndpoint(userId, orgUnitId, roleId, params)).pipe(this.converter.pipeable(B2B_USERS_NORMALIZER));
  }
  assignRole(userId, orgCustomerId, roleId) {
    return this.http.post(this.getRolesEndpoint(userId, orgCustomerId, {
      roleId
    }), null);
  }
  unassignRole(userId, orgCustomerId, roleId) {
    return this.http.delete(this.getRoleEndpoint(userId, orgCustomerId, roleId));
  }
  assignApprover(userId, orgUnitId, orgCustomerId, roleId) {
    return this.http.post(this.getApproversEndpoint(userId, orgUnitId, orgCustomerId, {
      roleId
    }), null);
  }
  unassignApprover(userId, orgUnitId, orgCustomerId, roleId) {
    return this.http.delete(this.getApproverEndpoint(userId, orgUnitId, orgCustomerId, roleId));
  }
  loadAddresses(userId, orgUnitId) {
    return this.http.get(this.getAddressesEndpoint(userId, orgUnitId)).pipe(this.converter.pipeable(ADDRESS_LIST_NORMALIZER));
  }
  createAddress(userId, orgUnitId, address) {
    address = this.converter.convert(address, ADDRESS_SERIALIZER);
    return this.http.post(this.getAddressesEndpoint(userId, orgUnitId), address).pipe(this.converter.pipeable(ADDRESS_NORMALIZER));
  }
  updateAddress(userId, orgUnitId, addressId, address) {
    address = this.converter.convert(address, ADDRESS_SERIALIZER);
    return this.http.patch(this.getAddressEndpoint(userId, orgUnitId, addressId), address).pipe(this.converter.pipeable(ADDRESS_NORMALIZER));
  }
  deleteAddress(userId, orgUnitId, addressId) {
    return this.http.delete(this.getAddressEndpoint(userId, orgUnitId, addressId)).pipe(this.converter.pipeable(ADDRESS_NORMALIZER));
  }
  getOrgUnitEndpoint(userId, orgUnitId) {
    return this.occEndpoints.buildUrl("orgUnit", {
      urlParams: {
        userId,
        orgUnitId
      }
    });
  }
  getOrgUnitsEndpoint(userId) {
    return this.occEndpoints.buildUrl("orgUnits", {
      urlParams: {
        userId
      }
    });
  }
  getAvailableOrgUnitsEndpoint(userId) {
    return this.occEndpoints.buildUrl("orgUnitsAvailable", {
      urlParams: {
        userId
      }
    });
  }
  getOrgUnitsTreeEndpoint(userId) {
    return this.occEndpoints.buildUrl("orgUnitsTree", {
      urlParams: {
        userId
      }
    });
  }
  getOrgUnitsApprovalProcessesEndpoint(userId) {
    return this.occEndpoints.buildUrl("orgUnitsApprovalProcesses", {
      urlParams: {
        userId
      }
    });
  }
  getUsersEndpoint(userId, orgUnitId, roleId, params) {
    return this.occEndpoints.buildUrl("orgUnitUsers", {
      urlParams: {
        userId,
        orgUnitId,
        roleId
      },
      queryParams: params
    });
  }
  getRolesEndpoint(userId, orgCustomerId, params) {
    return this.occEndpoints.buildUrl("orgUnitUserRoles", {
      urlParams: {
        userId,
        orgCustomerId
      },
      queryParams: params
    });
  }
  getRoleEndpoint(userId, orgCustomerId, roleId) {
    return this.occEndpoints.buildUrl("orgUnitUserRole", {
      urlParams: {
        userId,
        orgCustomerId,
        roleId
      }
    });
  }
  getApproversEndpoint(userId, orgUnitId, orgCustomerId, params) {
    return this.occEndpoints.buildUrl("orgUnitApprovers", {
      urlParams: {
        userId,
        orgUnitId,
        orgCustomerId
      },
      queryParams: params
    });
  }
  getApproverEndpoint(userId, orgUnitId, orgCustomerId, roleId) {
    return this.occEndpoints.buildUrl("orgUnitApprover", {
      urlParams: {
        userId,
        orgUnitId,
        orgCustomerId,
        roleId
      }
    });
  }
  getAddressesEndpoint(userId, orgUnitId) {
    return this.occEndpoints.buildUrl("orgUnitsAddresses", {
      urlParams: {
        userId,
        orgUnitId
      }
    });
  }
  getAddressEndpoint(userId, orgUnitId, addressId) {
    return this.occEndpoints.buildUrl("orgUnitsAddress", {
      urlParams: {
        userId,
        orgUnitId,
        addressId
      }
    });
  }
  static {
    this.ɵfac = function OccOrgUnitAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccOrgUnitAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccOrgUnitAdapter,
      factory: _OccOrgUnitAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccOrgUnitAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccUserGroupAdapter = class _OccUserGroupAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
  }
  load(userId, userGroupId) {
    return this.http.get(this.getUserGroupEndpoint(userId, userGroupId)).pipe(this.converter.pipeable(USER_GROUP_NORMALIZER));
  }
  loadList(userId, params) {
    return this.http.get(this.getUserGroupsEndpoint(userId, params)).pipe(this.converter.pipeable(USER_GROUPS_NORMALIZER));
  }
  loadAvailableOrderApprovalPermissions(userId, userGroupId, params) {
    return this.http.get(this.getPermissionsEndpoint(userId, userGroupId, params)).pipe(this.converter.pipeable(PERMISSIONS_NORMALIZER));
  }
  loadAvailableOrgCustomers(userId, userGroupId, params) {
    return this.http.get(this.getAvailableCustomersEndpoint(userId, userGroupId, params)).pipe(this.converter.pipeable(B2B_USERS_NORMALIZER));
  }
  create(userId, userGroup) {
    userGroup = this.converter.convert(userGroup, USER_GROUP_SERIALIZER);
    return this.http.post(this.getUserGroupsEndpoint(userId), userGroup).pipe(this.converter.pipeable(USER_GROUP_NORMALIZER));
  }
  delete(userId, userGroupId) {
    return this.http.delete(this.getUserGroupEndpoint(userId, userGroupId)).pipe(this.converter.pipeable(USER_GROUP_NORMALIZER));
  }
  update(userId, userGroupId, userGroup) {
    userGroup = this.converter.convert(userGroup, USER_GROUP_SERIALIZER);
    return this.http.patch(this.getUserGroupEndpoint(userId, userGroupId), userGroup).pipe(this.converter.pipeable(USER_GROUP_NORMALIZER));
  }
  assignMember(userId, userGroupId, orgCustomerId) {
    return this.http.post(this.getMembersEndpoint(userId, userGroupId, {
      orgCustomerId
    }), null);
  }
  assignOrderApprovalPermission(userId, userGroupId, orderApprovalPermissionCode) {
    return this.http.post(this.getOrderApprovalPermissionsEndpoint(userId, userGroupId, {
      orderApprovalPermissionCode
    }), null);
  }
  unassignMember(userId, userGroupId, orgCustomerId) {
    return this.http.delete(this.getMemberEndpoint(userId, userGroupId, orgCustomerId));
  }
  unassignAllMembers(userId, userGroupId) {
    return this.http.delete(this.getMembersEndpoint(userId, userGroupId));
  }
  unassignOrderApprovalPermission(userId, userGroupId, orderApprovalPermissionCode) {
    return this.http.delete(this.getOrderApprovalPermissionEndpoint(userId, userGroupId, orderApprovalPermissionCode));
  }
  getUserGroupEndpoint(userId, userGroupId) {
    return this.occEndpoints.buildUrl("userGroup", {
      urlParams: {
        userId,
        userGroupId
      }
    });
  }
  getUserGroupsEndpoint(userId, params) {
    return this.occEndpoints.buildUrl("userGroups", {
      urlParams: {
        userId
      },
      queryParams: params
    });
  }
  getAvailableCustomersEndpoint(userId, userGroupId, params) {
    return this.occEndpoints.buildUrl("userGroupAvailableOrgCustomers", {
      urlParams: {
        userId,
        userGroupId
      },
      queryParams: params
    });
  }
  getPermissionsEndpoint(userId, userGroupId, params) {
    return this.occEndpoints.buildUrl("userGroupAvailableOrderApprovalPermissions", {
      urlParams: {
        userId,
        userGroupId
      },
      queryParams: params
    });
  }
  getMemberEndpoint(userId, userGroupId, orgCustomerId) {
    return this.occEndpoints.buildUrl("userGroupMember", {
      urlParams: {
        userId,
        userGroupId,
        orgCustomerId
      }
    });
  }
  getMembersEndpoint(userId, userGroupId, params) {
    return this.occEndpoints.buildUrl("userGroupMembers", {
      urlParams: {
        userId,
        userGroupId
      },
      queryParams: params
    });
  }
  getOrderApprovalPermissionsEndpoint(userId, userGroupId, params) {
    return this.occEndpoints.buildUrl("userGroupOrderApprovalPermissions", {
      urlParams: {
        userId,
        userGroupId
      },
      queryParams: params
    });
  }
  getOrderApprovalPermissionEndpoint(userId, userGroupId, orderApprovalPermissionCode) {
    return this.occEndpoints.buildUrl("userGroupOrderApprovalPermission", {
      urlParams: {
        userId,
        userGroupId,
        orderApprovalPermissionCode
      }
    });
  }
  static {
    this.ɵfac = function OccUserGroupAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccUserGroupAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccUserGroupAdapter,
      factory: _OccUserGroupAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccUserGroupAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccPermissionAdapter = class _OccPermissionAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
  }
  load(userId, permissionCode) {
    return this.http.get(this.getPermissionEndpoint(userId, permissionCode)).pipe(this.converter.pipeable(PERMISSION_NORMALIZER));
  }
  loadList(userId, params) {
    return this.http.get(this.getPermissionsEndpoint(userId, params)).pipe(this.converter.pipeable(PERMISSIONS_NORMALIZER));
  }
  create(userId, permission) {
    permission = this.converter.convert(permission, PERMISSION_SERIALIZER);
    return this.http.post(this.getPermissionsEndpoint(userId), permission).pipe(this.converter.pipeable(PERMISSION_NORMALIZER));
  }
  update(userId, permissionCode, permission) {
    permission = this.converter.convert(permission, PERMISSION_SERIALIZER);
    return this.http.patch(this.getPermissionEndpoint(userId, permissionCode), permission).pipe(this.converter.pipeable(PERMISSION_NORMALIZER));
  }
  loadTypes() {
    return this.http.get(this.getPermissionTypesEndpoint()).pipe(this.converter.pipeable(PERMISSION_TYPES_NORMALIZER));
  }
  getPermissionEndpoint(userId, orderApprovalPermissionCode) {
    return this.occEndpoints.buildUrl("permission", {
      urlParams: {
        userId,
        orderApprovalPermissionCode
      }
    });
  }
  getPermissionsEndpoint(userId, params) {
    return this.occEndpoints.buildUrl("permissions", {
      urlParams: {
        userId
      },
      queryParams: params
    });
  }
  getPermissionTypesEndpoint() {
    return this.occEndpoints.buildUrl("orderApprovalPermissionTypes");
  }
  static {
    this.ɵfac = function OccPermissionAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccPermissionAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccPermissionAdapter,
      factory: _OccPermissionAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccPermissionAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccB2BUserAdapter = class _OccB2BUserAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
  }
  load(userId, orgUnitCustomerId) {
    return this.http.get(this.getB2BUserEndpoint(userId, orgUnitCustomerId)).pipe(this.converter.pipeable(B2B_USER_NORMALIZER));
  }
  loadList(userId, params) {
    return this.http.get(this.getB2BUsersEndpoint(userId, params)).pipe(this.converter.pipeable(B2B_USERS_NORMALIZER));
  }
  create(userId, orgCustomer) {
    orgCustomer = this.converter.convert(orgCustomer, B2B_USER_SERIALIZER);
    return this.http.post(this.getB2BUsersEndpoint(userId), orgCustomer).pipe(this.converter.pipeable(B2B_USER_NORMALIZER));
  }
  update(userId, orgCustomerId, orgCustomer) {
    orgCustomer = this.converter.convert(orgCustomer, B2B_USER_SERIALIZER);
    return this.http.patch(this.getB2BUserEndpoint(userId, orgCustomerId), orgCustomer).pipe(this.converter.pipeable(B2B_USER_NORMALIZER));
  }
  loadApprovers(userId, orgCustomerId, params) {
    return this.http.get(this.getApproversEndpoint(userId, orgCustomerId, params)).pipe(this.converter.pipeable(B2B_USERS_NORMALIZER));
  }
  assignApprover(userId, orgCustomerId, approverId) {
    return this.http.post(this.getApproverEndpoint(userId, orgCustomerId, approverId), null);
  }
  unassignApprover(userId, orgCustomerId, approverId) {
    return this.http.delete(this.getApproverEndpoint(userId, orgCustomerId, approverId));
  }
  loadPermissions(userId, orgCustomerId, params) {
    return this.http.get(this.getPermissionsEndpoint(userId, orgCustomerId, params)).pipe(this.converter.pipeable(PERMISSIONS_NORMALIZER));
  }
  assignPermission(userId, orgCustomerId, permissionId) {
    return this.http.post(this.getPermissionEndpoint(userId, orgCustomerId, permissionId), null);
  }
  unassignPermission(userId, orgCustomerId, permissionId) {
    return this.http.delete(this.getPermissionEndpoint(userId, orgCustomerId, permissionId));
  }
  loadUserGroups(userId, orgCustomerId, params) {
    return this.http.get(this.getUserGroupsEndpoint(userId, orgCustomerId, params)).pipe(this.converter.pipeable(USER_GROUPS_NORMALIZER));
  }
  assignUserGroup(userId, orgCustomerId, userGroupId) {
    return this.http.post(this.getUserGroupEndpoint(userId, orgCustomerId, userGroupId), null);
  }
  unassignUserGroup(userId, orgCustomerId, userGroupId) {
    return this.http.delete(this.getUserGroupEndpoint(userId, orgCustomerId, userGroupId));
  }
  getB2BUserEndpoint(userId, orgCustomerId) {
    return this.occEndpoints.buildUrl("b2bUser", {
      urlParams: {
        userId,
        orgCustomerId
      }
    });
  }
  getB2BUsersEndpoint(userId, params) {
    return this.occEndpoints.buildUrl("b2bUsers", {
      urlParams: {
        userId
      },
      queryParams: params
    });
  }
  getApproverEndpoint(userId, orgCustomerId, approverId) {
    return this.occEndpoints.buildUrl("b2bUserApprover", {
      urlParams: {
        userId,
        orgCustomerId,
        approverId
      }
    });
  }
  getApproversEndpoint(userId, orgCustomerId, params) {
    return this.occEndpoints.buildUrl("b2bUserApprovers", {
      urlParams: {
        userId,
        orgCustomerId
      },
      queryParams: params
    });
  }
  getPermissionEndpoint(userId, orgCustomerId, premissionId) {
    return this.occEndpoints.buildUrl("b2bUserPermission", {
      urlParams: {
        userId,
        orgCustomerId,
        premissionId
      }
    });
  }
  getPermissionsEndpoint(userId, orgCustomerId, params) {
    return this.occEndpoints.buildUrl("b2bUserPermissions", {
      urlParams: {
        userId,
        orgCustomerId
      },
      queryParams: params
    });
  }
  getUserGroupEndpoint(userId, orgCustomerId, userGroupId) {
    return this.occEndpoints.buildUrl("b2bUserUserGroup", {
      urlParams: {
        userId,
        orgCustomerId,
        userGroupId
      }
    });
  }
  getUserGroupsEndpoint(userId, orgCustomerId, params) {
    return this.occEndpoints.buildUrl("b2bUserUserGroups", {
      urlParams: {
        userId,
        orgCustomerId
      },
      queryParams: params
    });
  }
  static {
    this.ɵfac = function OccB2BUserAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccB2BUserAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccB2BUserAdapter,
      factory: _OccB2BUserAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccB2BUserAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var defaultOccOrganizationConfig = {
  backend: {
    occ: {
      endpoints: {
        budgets: "/users/${userId}/budgets",
        budget: "/users/${userId}/budgets/${budgetCode}",
        orgUnitsAvailable: "/users/${userId}/availableOrgUnitNodes",
        orgUnitsTree: "/users/${userId}/orgUnitsRootNodeTree",
        orgUnitsApprovalProcesses: "/users/${userId}/orgUnitsAvailableApprovalProcesses",
        orgUnits: "/users/${userId}/orgUnits",
        orgUnit: "/users/${userId}/orgUnits/${orgUnitId}",
        orgUnitUsers: "/users/${userId}/orgUnits/${orgUnitId}/availableUsers/${roleId}",
        orgUnitApprovers: "/users/${userId}/orgUnits/${orgUnitId}/orgCustomers/${orgCustomerId}/roles",
        orgUnitApprover: "/users/${userId}/orgUnits/${orgUnitId}/orgCustomers/${orgCustomerId}/roles/${roleId}",
        orgUnitUserRoles: "/users/${userId}/orgCustomers/${orgCustomerId}/roles",
        orgUnitUserRole: "/users/${userId}/orgCustomers/${orgCustomerId}/roles/${roleId}",
        orgUnitsAddresses: "/users/${userId}/orgUnits/${orgUnitId}/addresses",
        orgUnitsAddress: "/users/${userId}/orgUnits/${orgUnitId}/addresses/${addressId}",
        userGroups: "/users/${userId}/orgUnitUserGroups",
        userGroup: "/users/${userId}/orgUnitUserGroups/${userGroupId}",
        userGroupAvailableOrderApprovalPermissions: "/users/${userId}/orgUnitUserGroups/${userGroupId}/availableOrderApprovalPermissions",
        userGroupAvailableOrgCustomers: "/users/${userId}/orgUnitUserGroups/${userGroupId}/availableOrgCustomers",
        userGroupMembers: "/users/${userId}/orgUnitUserGroups/${userGroupId}/members",
        userGroupMember: "/users/${userId}/orgUnitUserGroups/${userGroupId}/members/${orgCustomerId}",
        userGroupOrderApprovalPermissions: "/users/${userId}/orgUnitUserGroups/${userGroupId}/orderApprovalPermissions",
        userGroupOrderApprovalPermission: "/users/${userId}/orgUnitUserGroups/${userGroupId}/orderApprovalPermissions/${orderApprovalPermissionCode}",
        costCenters: "/costcenters",
        costCenter: "/costcenters/${costCenterCode}",
        costCentersAll: "/costcentersall",
        costCenterBudgets: "/costcenters/${costCenterCode}/budgets",
        costCenterBudget: "/costcenters/${costCenterCode}/budgets/${budgetCode}",
        permissions: "/users/${userId}/orderApprovalPermissions",
        permission: "/users/${userId}/orderApprovalPermissions/${orderApprovalPermissionCode}",
        orderApprovalPermissionTypes: "/orderApprovalPermissionTypes",
        b2bUsers: "/users/${userId}/orgCustomers",
        b2bUser: "/users/${userId}/orgCustomers/${orgCustomerId}",
        b2bUserApprovers: "/users/${userId}/orgCustomers/${orgCustomerId}/approvers",
        b2bUserApprover: "/users/${userId}/orgCustomers/${orgCustomerId}/approvers/${approverId}",
        b2bUserUserGroups: "/users/${userId}/orgCustomers/${orgCustomerId}/orgUserGroups",
        b2bUserUserGroup: "/users/${userId}/orgCustomers/${orgCustomerId}/orgUserGroups/${userGroupId}",
        b2bUserPermissions: "/users/${userId}/orgCustomers/${orgCustomerId}/permissions",
        b2bUserPermission: "/users/${userId}/orgCustomers/${orgCustomerId}/permissions/${premissionId}"
      }
    }
  }
};
var OccBudgetSerializer = class _OccBudgetSerializer {
  constructor() {
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    if (source.startDate) {
      target.startDate = TimeUtils.convertDateToDatetime(source.startDate);
    }
    if (source.endDate) {
      target.endDate = TimeUtils.convertDateToDatetime(source.endDate, true);
    }
    return target;
  }
  static {
    this.ɵfac = function OccBudgetSerializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccBudgetSerializer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccBudgetSerializer,
      factory: _OccBudgetSerializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccBudgetSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var OccB2BUserNormalizer = class _OccB2BUserNormalizer {
  constructor() {
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    target.email = source?.uid;
    return target;
  }
  static {
    this.ɵfac = function OccB2BUserNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccB2BUserNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccB2BUserNormalizer,
      factory: _OccB2BUserNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccB2BUserNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var OccB2bUserSerializer = class _OccB2bUserSerializer {
  constructor() {
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    delete target.isAssignedToApprovers;
    if (target.active === false) {
      target.roles = [];
    }
    return target;
  }
  static {
    this.ɵfac = function OccB2bUserSerializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccB2bUserSerializer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccB2bUserSerializer,
      factory: _OccB2bUserSerializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccB2bUserSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var OccBudgetListNormalizer = class _OccBudgetListNormalizer {
  constructor(converter) {
    this.converter = converter;
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    target.values = source.budgets?.map((budget) => __spreadValues({}, this.converter.convert(budget, BUDGET_NORMALIZER))) ?? [];
    return target;
  }
  static {
    this.ɵfac = function OccBudgetListNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccBudgetListNormalizer)(ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccBudgetListNormalizer,
      factory: _OccBudgetListNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccBudgetListNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var OccBudgetNormalizer = class _OccBudgetNormalizer {
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    if (source.startDate) {
      target.startDate = TimeUtils.convertDatetimeToDate(source.startDate);
    }
    if (source.endDate) {
      target.endDate = TimeUtils.convertDatetimeToDate(source.endDate);
    }
    return target;
  }
  static {
    this.ɵfac = function OccBudgetNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccBudgetNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccBudgetNormalizer,
      factory: _OccBudgetNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccBudgetNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OccOrgUnitApprovalProcessNormalizer = class _OccOrgUnitApprovalProcessNormalizer {
  constructor() {
  }
  convert(source, target) {
    if (target === void 0) {
      target = [...source.approvalProcesses];
    }
    return target;
  }
  static {
    this.ɵfac = function OccOrgUnitApprovalProcessNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccOrgUnitApprovalProcessNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccOrgUnitApprovalProcessNormalizer,
      factory: _OccOrgUnitApprovalProcessNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccOrgUnitApprovalProcessNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var OccOrgUnitNodeListNormalizer = class _OccOrgUnitNodeListNormalizer {
  convert(source, target) {
    if (target === void 0) {
      target = [...source.unitNodes];
    }
    return target;
  }
  static {
    this.ɵfac = function OccOrgUnitNodeListNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccOrgUnitNodeListNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccOrgUnitNodeListNormalizer,
      factory: _OccOrgUnitNodeListNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccOrgUnitNodeListNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OccOrgUnitNodeNormalizer = class _OccOrgUnitNodeNormalizer {
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    return target;
  }
  static {
    this.ɵfac = function OccOrgUnitNodeNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccOrgUnitNodeNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccOrgUnitNodeNormalizer,
      factory: _OccOrgUnitNodeNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccOrgUnitNodeNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OccOrgUnitNormalizer = class _OccOrgUnitNormalizer {
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    return target;
  }
  static {
    this.ɵfac = function OccOrgUnitNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccOrgUnitNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccOrgUnitNormalizer,
      factory: _OccOrgUnitNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccOrgUnitNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OccPermissionListNormalizer = class _OccPermissionListNormalizer {
  constructor(converter) {
    this.converter = converter;
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    target.values = source.orderApprovalPermissions?.map((permission) => __spreadValues({}, this.converter.convert(permission, PERMISSION_NORMALIZER))) ?? [];
    return target;
  }
  static {
    this.ɵfac = function OccPermissionListNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccPermissionListNormalizer)(ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccPermissionListNormalizer,
      factory: _OccPermissionListNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccPermissionListNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var OccPermissionNormalizer = class _OccPermissionNormalizer {
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    return target;
  }
  static {
    this.ɵfac = function OccPermissionNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccPermissionNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccPermissionNormalizer,
      factory: _OccPermissionNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccPermissionNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OccPermissionTypeListNormalizer = class _OccPermissionTypeListNormalizer {
  constructor(converter) {
    this.converter = converter;
  }
  convert(source, target) {
    target = source.orderApprovalPermissionTypes?.map((permissionType) => this.converter.convert(permissionType, PERMISSION_TYPE_NORMALIZER));
    return target ?? [];
  }
  static {
    this.ɵfac = function OccPermissionTypeListNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccPermissionTypeListNormalizer)(ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccPermissionTypeListNormalizer,
      factory: _OccPermissionTypeListNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccPermissionTypeListNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var OccPermissionTypeNormalizer = class _OccPermissionTypeNormalizer {
  constructor() {
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    return target;
  }
  static {
    this.ɵfac = function OccPermissionTypeNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccPermissionTypeNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccPermissionTypeNormalizer,
      factory: _OccPermissionTypeNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccPermissionTypeNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var OccUserGroupListNormalizer = class _OccUserGroupListNormalizer {
  constructor(converter) {
    this.converter = converter;
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    target.values = source.orgUnitUserGroups.map((userGroup) => __spreadValues({}, this.converter.convert(userGroup, USER_GROUP_NORMALIZER)));
    return target;
  }
  static {
    this.ɵfac = function OccUserGroupListNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccUserGroupListNormalizer)(ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccUserGroupListNormalizer,
      factory: _OccUserGroupListNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccUserGroupListNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var OccUserGroupNormalizer = class _OccUserGroupNormalizer {
  constructor() {
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    return target;
  }
  static {
    this.ɵfac = function OccUserGroupNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccUserGroupNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccUserGroupNormalizer,
      factory: _OccUserGroupNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccUserGroupNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var OccUserListNormalizer = class _OccUserListNormalizer {
  constructor(converter) {
    this.converter = converter;
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    target.values = source.users.map((b2bUser) => __spreadValues({}, this.converter.convert(b2bUser, B2B_USER_NORMALIZER)));
    return target;
  }
  static {
    this.ɵfac = function OccUserListNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccUserListNormalizer)(ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccUserListNormalizer,
      factory: _OccUserListNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccUserListNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var AdministrationOccModule = class _AdministrationOccModule {
  static {
    this.ɵfac = function AdministrationOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdministrationOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AdministrationOccModule,
      imports: [CommonModule, CostCenterOccModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccOrganizationConfig), {
        provide: BudgetAdapter,
        useClass: OccBudgetAdapter
      }, {
        provide: BUDGET_NORMALIZER,
        useExisting: OccBudgetNormalizer,
        multi: true
      }, {
        provide: BUDGET_SERIALIZER,
        useExisting: OccBudgetSerializer,
        multi: true
      }, {
        provide: BUDGETS_NORMALIZER,
        useExisting: OccBudgetListNormalizer,
        multi: true
      }, {
        provide: OrgUnitAdapter,
        useClass: OccOrgUnitAdapter
      }, {
        provide: B2BUNIT_NORMALIZER,
        useExisting: OccOrgUnitNormalizer,
        multi: true
      }, {
        provide: B2BUNIT_NODE_NORMALIZER,
        useExisting: OccOrgUnitNodeNormalizer,
        multi: true
      }, {
        provide: B2BUNIT_NODE_LIST_NORMALIZER,
        useExisting: OccOrgUnitNodeListNormalizer,
        multi: true
      }, {
        provide: B2BUNIT_APPROVAL_PROCESSES_NORMALIZER,
        useExisting: OccOrgUnitApprovalProcessNormalizer,
        multi: true
      }, {
        provide: UserGroupAdapter,
        useClass: OccUserGroupAdapter
      }, {
        provide: USER_GROUP_NORMALIZER,
        useExisting: OccUserGroupNormalizer,
        multi: true
      }, {
        provide: USER_GROUPS_NORMALIZER,
        useExisting: OccUserGroupListNormalizer,
        multi: true
      }, {
        provide: PermissionAdapter,
        useClass: OccPermissionAdapter
      }, {
        provide: PERMISSION_NORMALIZER,
        useExisting: OccPermissionNormalizer,
        multi: true
      }, {
        provide: PERMISSIONS_NORMALIZER,
        useExisting: OccPermissionListNormalizer,
        multi: true
      }, {
        provide: PERMISSION_TYPE_NORMALIZER,
        useExisting: OccPermissionTypeNormalizer,
        multi: true
      }, {
        provide: PERMISSION_TYPES_NORMALIZER,
        useExisting: OccPermissionTypeListNormalizer,
        multi: true
      }, {
        provide: CostCenterAdapter,
        useClass: OccCostCenterAdapter
      }, {
        provide: B2BUserAdapter,
        useClass: OccB2BUserAdapter
      }, {
        provide: B2B_USER_NORMALIZER,
        useExisting: OccB2BUserNormalizer,
        multi: true
      }, {
        provide: B2B_USER_SERIALIZER,
        useExisting: OccB2bUserSerializer,
        multi: true
      }, {
        provide: B2B_USERS_NORMALIZER,
        useExisting: OccUserListNormalizer,
        multi: true
      }],
      imports: [CommonModule, CostCenterOccModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdministrationOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CostCenterOccModule],
      providers: [provideDefaultConfig(defaultOccOrganizationConfig), {
        provide: BudgetAdapter,
        useClass: OccBudgetAdapter
      }, {
        provide: BUDGET_NORMALIZER,
        useExisting: OccBudgetNormalizer,
        multi: true
      }, {
        provide: BUDGET_SERIALIZER,
        useExisting: OccBudgetSerializer,
        multi: true
      }, {
        provide: BUDGETS_NORMALIZER,
        useExisting: OccBudgetListNormalizer,
        multi: true
      }, {
        provide: OrgUnitAdapter,
        useClass: OccOrgUnitAdapter
      }, {
        provide: B2BUNIT_NORMALIZER,
        useExisting: OccOrgUnitNormalizer,
        multi: true
      }, {
        provide: B2BUNIT_NODE_NORMALIZER,
        useExisting: OccOrgUnitNodeNormalizer,
        multi: true
      }, {
        provide: B2BUNIT_NODE_LIST_NORMALIZER,
        useExisting: OccOrgUnitNodeListNormalizer,
        multi: true
      }, {
        provide: B2BUNIT_APPROVAL_PROCESSES_NORMALIZER,
        useExisting: OccOrgUnitApprovalProcessNormalizer,
        multi: true
      }, {
        provide: UserGroupAdapter,
        useClass: OccUserGroupAdapter
      }, {
        provide: USER_GROUP_NORMALIZER,
        useExisting: OccUserGroupNormalizer,
        multi: true
      }, {
        provide: USER_GROUPS_NORMALIZER,
        useExisting: OccUserGroupListNormalizer,
        multi: true
      }, {
        provide: PermissionAdapter,
        useClass: OccPermissionAdapter
      }, {
        provide: PERMISSION_NORMALIZER,
        useExisting: OccPermissionNormalizer,
        multi: true
      }, {
        provide: PERMISSIONS_NORMALIZER,
        useExisting: OccPermissionListNormalizer,
        multi: true
      }, {
        provide: PERMISSION_TYPE_NORMALIZER,
        useExisting: OccPermissionTypeNormalizer,
        multi: true
      }, {
        provide: PERMISSION_TYPES_NORMALIZER,
        useExisting: OccPermissionTypeListNormalizer,
        multi: true
      }, {
        provide: CostCenterAdapter,
        useClass: OccCostCenterAdapter
      }, {
        provide: B2BUserAdapter,
        useClass: OccB2BUserAdapter
      }, {
        provide: B2B_USER_NORMALIZER,
        useExisting: OccB2BUserNormalizer,
        multi: true
      }, {
        provide: B2B_USER_SERIALIZER,
        useExisting: OccB2bUserSerializer,
        multi: true
      }, {
        provide: B2B_USERS_NORMALIZER,
        useExisting: OccUserListNormalizer,
        multi: true
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-administration.mjs
var AdministrationModule = class _AdministrationModule {
  static {
    this.ɵfac = function AdministrationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdministrationModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AdministrationModule,
      imports: [AdministrationCoreModule, AdministrationOccModule, AdministrationComponentsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [AdministrationCoreModule.forRoot(), AdministrationOccModule, AdministrationComponentsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdministrationModule, [{
    type: NgModule,
    args: [{
      imports: [AdministrationCoreModule.forRoot(), AdministrationOccModule, AdministrationComponentsModule]
    }]
  }], null, null);
})();

export {
  AdministrationModule
};
//# sourceMappingURL=chunk-7TTHTSZH.js.map
